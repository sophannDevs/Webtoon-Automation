// End-to-end tests: real Chromium + the real unpacked extension + a MOCK Google Flow page.
// The mock is served at https://flow.google.com/ through Playwright request interception, so the
// content script's URL matching is exercised, but nothing ever touches the real Flow site.
import { test, expect, chromium } from '@playwright/test';
import { spawn, execSync } from 'child_process';
import https from 'https';
import path from 'path';
import fs from 'fs';
import os from 'os';

const EXT = path.resolve('.');
const REAL_SRC = path.resolve('..', '_workspace/04_visual/ep01_flow_handoff.html');
// The real page marks images already on disk "Saved ✓" (the extension then treats them as done). These tests
// are about generating, so they work from a copy with those marks and thumbnails removed.
const REAL_HANDOFF = path.join(os.tmpdir(), 'wt-real-handoff-unsaved.html');
fs.writeFileSync(REAL_HANDOFF, fs.readFileSync(REAL_SRC, 'utf8')
  .replace(/<span class="chip ok">Saved &#10003;<\/span>/g, '')
  .replace(/<div class="thumb">[\s\S]*?<\/div>/g, ''));
const MOCK_HTML = fs.readFileSync(path.resolve('tests/fixtures/mock-flow.html'), 'utf8');
const MINI = path.join(os.tmpdir(), 'wt-mini-handoff.html');

let ctx, browser, proc, extId, sw, flow, tmp, dlDir, imgServer, imgPort, jpegBytes;

/** A small handoff cut from the REAL file: first n character cards and first m panel cards. */
function buildMini({ chars = 2, panels = 2, failChar = false, failPanel = false, charKeys = null, panelKeys = null, keepRefs = false } = {}) {
  const src = fs.readFileSync(REAL_HANDOFF, 'utf8');
  const head = src.slice(0, src.indexOf('<article class="card"'));
  const cards = src.match(/<article class="card"[\s\S]*?<\/article>/g);
  const isPanel = (c) => /data-key="panel_/.test(c);
  const byKey = (k) => cards.find((c) => c.includes(`data-key="${k}"`));
  const strip = (c) => (keepRefs ? c : c.replace(/<div class="row"><span class="lbl">Attach in Flow<\/span>[\s\S]*?<\/div>/, '')); // most tests are not about references
  const cs = (charKeys ? charKeys.map(byKey) : cards.filter((c) => !isPanel(c)).slice(0, chars)).map(strip);
  const ps = (panelKeys ? panelKeys.map(byKey) : cards.filter(isPanel).slice(0, panels)).map(strip);
  const panelsPath = src.match(/<div class="path"><span class="lbl">Save in<\/span><code id="p-panels">[\s\S]*?<\/div>/)[0];
  if (failChar) cs[0] = cs[0].replace('<pre>', '<pre>FAIL_ME ');
  if (failPanel) ps[0] = ps[0].replace('<pre>', '<pre>FAIL_ME ');
  const html = head.replace(/\d+ character sheet\(s\), \d+ panel\(s\)/, `${cs.length} character sheet(s), ${ps.length} panel(s)`)
    + cs.join('\n') + '\n<h2>Panels</h2>\n' + panelsPath + '\n' + ps.join('\n') + '\n</main></body></html>';
  fs.writeFileSync(MINI, html);
  return MINI;
}

/** A failed test leaves its side-panel page open, still writing to storage: close them all. */
async function closePanels() {
  for (const pg of ctx.pages()) if (pg.url().startsWith('chrome-extension://')) await pg.close().catch(() => {});
}
async function openPanel() {
  const page = await ctx.newPage();
  page.on('dialog', (d) => d.accept());
  await page.goto(`chrome-extension://${extId}/src/sidepanel.html`);
  return page;
}
/** Fresh extension state + fast settings, then reopen the panel. */
async function freshPanel(settings = {}) {
  await closePanels();
  // reset storage from the service worker BEFORE any panel opens (a panel's pagehide flush would write stale state back)
  await sw.evaluate(async (st) => {
    await chrome.storage.local.clear();
    await new Promise((res) => { const r = indexedDB.deleteDatabase('wt-flow-runner'); r.onsuccess = r.onerror = r.onblocked = res; });
    await chrome.storage.local.set({ 'wt:settings': { delaySec: 1, stableSec: 1, timeoutSec: 30, retries: 0, autoRunOnLoad: false, chromeInProject: false, autoRunDelaySec: 1, ...st } });
  }, settings);
  const p = await openPanel();
  await expect(p.locator('#conn')).toHaveText('Flow connected', { timeout: 15000 });
  return p;
}
const status = (p, key) => p.locator(`.item[data-id="ep01:${key}"] [data-f="status"]`);
const logText = (p) => p.locator('#log').innerText();
async function resetMock() {
  await flow.reload(); // fresh mock page (a test may have altered its DOM)
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  fs.rmSync(dlDir, { recursive: true, force: true }); fs.mkdirSync(dlDir);
  await flow.evaluate(() => { window.__runs.length = 0; localStorage.removeItem('mockDelay'); localStorage.removeItem('mockTrustedOnly'); localStorage.removeItem('mockBusyDecor'); localStorage.removeItem('mockConsent'); localStorage.removeItem('mockExisting'); delete window.__picked; delete window.__uploads; delete window.__agreed; localStorage.removeItem('mockJpeg'); localStorage.removeItem('mockAttach'); localStorage.removeItem('mockRemote'); });
  await sw.evaluate(() => { self.__dl.length = 0; });
}
const pngSize = (file) => { const b = fs.readFileSync(file); return { sig: b.subarray(0, 8).toString('hex'), w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; };

test.beforeAll(async () => {
  tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wt-pw-'));
  dlDir = path.join(tmp, 'Downloads');
  const profile = path.join(tmp, 'profile');
  fs.mkdirSync(dlDir);
  fs.mkdirSync(path.join(profile, 'Default'), { recursive: true });
  // Chrome's own download folder = a temp dir, no "ask where to save" prompt
  fs.writeFileSync(path.join(profile, 'Default/Preferences'),
    JSON.stringify({ download: { default_directory: dlDir, prompt_for_download: false, directory_upgrade: true } }));
  // Start Chrome for Testing ourselves and attach over CDP. (launchPersistentContext makes Playwright take over
  // every download and rename it to a GUID, so the real file names could not be checked.)
  // an image host on another origin that sends NO CORS headers (like Flow's image CDN): https://flow-img.test -> 127.0.0.1
  execSync(`openssl req -x509 -newkey rsa:2048 -nodes -keyout ${path.join(tmp, 'k.pem')} -out ${path.join(tmp, 'c.pem')} -days 2 -subj "/CN=flow-img.test" 2>/dev/null`);
  imgServer = https.createServer({ key: fs.readFileSync(path.join(tmp, 'k.pem')), cert: fs.readFileSync(path.join(tmp, 'c.pem')) },
    (req, res) => { res.writeHead(200, { 'Content-Type': 'image/jpeg' }); res.end(jpegBytes); });
  await new Promise((r) => imgServer.listen(0, '127.0.0.1', r));
  imgPort = imgServer.address().port;
  proc = spawn(chromium.executablePath(), [
    '--ignore-certificate-errors', `--host-resolver-rules=MAP flow-img.test 127.0.0.1:${imgPort}`,
    `--user-data-dir=${profile}`, `--disable-extensions-except=${EXT}`, `--load-extension=${EXT}`,
    '--remote-debugging-port=9341', '--no-first-run', '--no-default-browser-check', '--use-mock-keychain', '--password-store=basic',
    ...(process.env.HEADLESS === '1' ? ['--headless=new'] : []), 'about:blank',
  ], { stdio: 'ignore' });
  for (let i = 0; i < 40; i++) {
    try { browser = await chromium.connectOverCDP('http://127.0.0.1:9341'); break; } catch (_) { await new Promise((r) => setTimeout(r, 500)); }
  }
  ctx = browser.contexts()[0];
  // give downloads back to Chrome: files are saved under the exact name the extension requested
  await (await browser.newBrowserCDPSession()).send('Browser.setDownloadBehavior', { behavior: 'default' });
  sw = ctx.serviceWorkers().find((w) => w.url().includes('src/background.js'));
  if (!sw) sw = await ctx.waitForEvent('serviceworker', { predicate: (w) => w.url().includes('src/background.js') });
  extId = new URL(sw.url()).host;
  // page-side loads of the CDN image are answered by Playwright WITHOUT CORS headers (so the page/content script cannot fetch it);
  // the extension's service worker is not intercepted and reaches the real local server through the host mapping above
  await ctx.route('https://flow-img.test/**', (r) => r.fulfill({ status: 200, contentType: 'image/jpeg', body: jpegBytes }));
  await ctx.route('https://flow.google.com/**', (r) => r.fulfill({ contentType: 'text/html', body: MOCK_HTML }));
  // Record every chrome.downloads.download call (also lets the test assert saveAs / conflictAction).
  await sw.evaluate(() => {
    self.__dl = [];
    const orig = chrome.downloads.download.bind(chrome.downloads);
    chrome.downloads.download = (o) => {
      const rec = { filename: o.filename, saveAs: o.saveAs, conflictAction: o.conflictAction, urlKind: String(o.url).slice(0, 10) };
      self.__dl.push(rec);
      return orig(o).then((id) => { rec.id = id; return id; });
    };
  });
  flow = await ctx.newPage();
  await flow.goto('https://flow.google.com/project/test');
  await expect(flow.locator('[role=textbox]')).toBeVisible();
});
test.afterAll(async () => {
  imgServer.close();
  await browser.close().catch(() => {});
  const exited = new Promise((r) => proc.once('exit', r));
  proc.kill();
  await Promise.race([exited, new Promise((r) => setTimeout(r, 5000))]);
  fs.rmSync(tmp, { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
});
test.beforeEach(resetMock);
test.afterEach(closePanels);

test('connects to Flow, probes the page and lists the settings options', async () => {
  const p = await freshPanel();
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-probe').click();
  await expect(p.locator('#probe-out')).toContainText('"promptFound": true');
  await expect(p.locator('#probe-out')).toContainText('Settings trigger');
  await p.locator('#b-options').click();
  await expect(p.locator('#probe-out')).toContainText('crop_16_9');
  await expect(p.locator('#probe-out')).toContainText('"triggers"');
  await p.close();
});

test('parses the real ep01 handoff: 23 + 64 items, stage counters, auto-filled folders, search', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', REAL_HANDOFF);
  await expect(p.locator('#bar-text')).toContainText('0 / 87');
  await expect(p.locator('#stage1')).toHaveText('Stage 1: Characters [0/23]');
  await expect(p.locator('#stage2')).toHaveText('Stage 2: Panels [0/64]');
  await expect(p.locator('#list-character .item')).toHaveCount(23);
  await expect(p.locator('#list-panel .item')).toHaveCount(64);
  await expect(p.locator('#s-dir-characters')).toHaveValue('Webtoon-Automation/_workspace/04_visual/refs');
  await expect(p.locator('#s-dir-panels')).toHaveValue('Webtoon-Automation/_workspace/05_panels/ep01');
  await expect(p.locator('#s-auto-panels')).toBeChecked();
  await p.locator('.tab[data-tab="panels"]').click();
  await p.locator('.search[data-kind="panel"]').fill('panel_004');
  await expect(p.locator('#list-panel .item')).toHaveCount(1);
  await p.locator('.search[data-kind="panel"]').fill('');
  await p.locator('.status-filter[data-kind="panel"]').selectOption('Failed');
  await expect(p.locator('#list-panel .item')).toHaveCount(0);
  await p.close();
});

test('two-stage pipeline: characters generate+download first, then panels start automatically', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', buildMini({ chars: 2, panels: 2 }));
  await expect(p.locator('#bar-text')).toContainText('0 / 4');

  // record every badge text of the first character to prove Generating -> Downloading -> Saved
  await p.evaluate(() => {
    window.__seen = [];
    const el = document.querySelector('.item[data-id="ep01:SEOHA_turnaround"] [data-f="status"]');
    new MutationObserver(() => window.__seen.push(el.textContent)).observe(el, { childList: true, characterData: true, subtree: true });
  });

  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(p.locator('#stage1')).toHaveClass(/active/);
  await expect(p.locator('#bar-text')).toContainText('4 / 4 saved', { timeout: 100000 });

  // generation order on the Flow page: characters first, then panels
  const runs = await flow.evaluate(() => window.__runs);
  expect(runs).toHaveLength(4);
  expect(runs[0].prompt).toContain('character model sheet');
  expect(runs[1].prompt).toContain('character model sheet');
  expect(runs[2].prompt).toContain('Korean webtoon panel');
  expect(runs[3].prompt).toContain('Korean webtoon panel');
  // the aspect ratio was really applied in Flow for each item
  expect(runs.map((r) => r.aspect)).toEqual(['16:9', '16:9', '3:4', '1:1']);

  // badges + stage counters
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)');
  await expect(status(p, 'panel_002')).toHaveText('Saved (panel_002.png)');
  await expect(p.locator('#stage1')).toHaveText('Stage 1: Characters [2/2]');
  await expect(p.locator('#stage2')).toHaveText('Stage 2: Panels [2/2]');
  const seen = await p.evaluate(() => window.__seen);
  expect(seen).toEqual(expect.arrayContaining(['Generating', 'Downloading', 'Saved (SEOHA_turnaround.png)']));
  expect(seen.indexOf('Generating')).toBeLessThan(seen.indexOf('Downloading'));
  expect(seen.indexOf('Downloading')).toBeLessThan(seen.indexOf('Saved (SEOHA_turnaround.png)'));

  // strict order in the log: every item is saved before the next one starts generating
  const log = await logText(p);
  const at = (re) => { const m = re.exec(log); expect(m, String(re)).not.toBeNull(); return m.index; };
  const order = [
    at(/SEOHA_turnaround\s+Generating/), at(/SEOHA_turnaround\s+Saved /),
    at(/SEOHA_expressions\s+Generating/), at(/SEOHA_expressions\s+Saved /),
    at(/Stage 1 complete\. Starting Stage 2/),
    at(/panel_001\s+Generating/), at(/panel_001\s+Saved /),
    at(/panel_002\s+Generating/), at(/panel_002\s+Saved /),
  ];
  expect(order).toEqual([...order].sort((a, b) => a - b));
  // the log carries the real path Chrome reports
  expect(log).toMatch(/SEOHA_turnaround\s+Saved \S+ \(\d+ bytes\) at 20\d\d-/);

  // downloads: exact names, folders, no dialog, overwrite
  const dl = await sw.evaluate(() => self.__dl);
  expect(dl.map((d) => d.filename)).toEqual([
    'Webtoon-Automation/_workspace/04_visual/refs/SEOHA_turnaround.png',
    'Webtoon-Automation/_workspace/04_visual/refs/SEOHA_expressions.png',
    'Webtoon-Automation/_workspace/05_panels/ep01/panel_001.png',
    'Webtoon-Automation/_workspace/05_panels/ep01/panel_002.png',
  ]);
  for (const d of dl) { expect(d.saveAs).toBe(false); expect(d.conflictAction).toBe('overwrite'); expect(d.urlKind).toBe('data:image'); }

  // the files are on disk under the exact handoff names, are valid PNGs, and are the highest-resolution output
  const dims = [];
  for (const d of dl) {
    const [rec] = await sw.evaluate((id) => chrome.downloads.search({ id }), d.id);
    expect(rec.state).toBe('complete');
    const expected = path.join(dlDir, d.filename);
    expect(fs.existsSync(expected), `missing ${expected}`).toBe(true);
    expect(fs.realpathSync(rec.filename)).toBe(fs.realpathSync(expected)); // the path Chrome reports == the requested name
    const info = pngSize(expected);
    expect(info.sig).toBe('89504e470d0a1a0a');
    dims.push(`${info.w}x${info.h}`);
  }
  expect(dims).toEqual(['640x360', '640x360', '480x640', '512x512']);
  expect(fs.readdirSync(dlDir, { recursive: true }).filter((f) => f.endsWith('.png')).sort()).toEqual([
    '04_visual/refs/SEOHA_expressions.png'.replace(/^/, 'Webtoon-Automation/_workspace/'),
    '04_visual/refs/SEOHA_turnaround.png'.replace(/^/, 'Webtoon-Automation/_workspace/'),
    '05_panels/ep01/panel_001.png'.replace(/^/, 'Webtoon-Automation/_workspace/'),
    '05_panels/ep01/panel_002.png'.replace(/^/, 'Webtoon-Automation/_workspace/'),
  ].sort());

  // persistence: statuses survive closing and reopening the panel
  await p.close();
  const p2 = await openPanel();
  await expect(p2.locator('#bar-text')).toContainText('4 / 4 saved');
  await expect(status(p2, 'panel_001')).toHaveText('Saved (panel_001.png)');
  await p2.close();
});

test('a failed character blocks Stage 2; edit + Retry Failed + Start All finishes the episode', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', buildMini({ chars: 2, panels: 1, failChar: true }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(p.locator('#queue-state')).toContainText('Panels not started', { timeout: 60000 });
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Failed');
  await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]')).toContainText('Something went wrong');
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Saved (SEOHA_expressions.png)');
  await expect(status(p, 'panel_001')).toHaveText('Pending');
  expect((await flow.evaluate(() => window.__runs)).some((r) => r.prompt.includes('Korean webtoon panel'))).toBe(false);

  // fix the prompt inline, retry only the failed one
  await p.locator('.tab[data-tab="characters"]').click();
  const card = p.locator('.item[data-id="ep01:SEOHA_turnaround"]');
  await card.getByRole('button', { name: 'Edit' }).click();
  await card.locator('textarea[data-act="prompt"]').fill('A clean replacement prompt for the first character sheet');
  await expect(card).toContainText('edited');
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-retry').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  const runs = await flow.evaluate(() => window.__runs);
  expect(runs.at(-1).prompt).toBe('A clean replacement prompt for the first character sheet');

  // all characters are saved now: Start All goes straight to the panels
  await expect(p.locator('#b-start')).toBeEnabled();
  await p.locator('#b-start').click();
  await expect(p.locator('#bar-text')).toContainText('3 / 3 saved', { timeout: 60000 });
  await p.close();
});

test('"Auto-start Panels after Characters" off: stops after Stage 1, Start All continues with panels', async () => {
  const p = await freshPanel({ autoPanels: false });
  await expect(p.locator('#s-auto-panels')).not.toBeChecked();
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 1 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(p.locator('#queue-state')).toContainText('Auto-start Panels', { timeout: 60000 });
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)');
  await expect(status(p, 'panel_001')).toHaveText('Pending');
  await expect(p.locator('#stage1')).toHaveClass(/done/);
  await p.locator('#b-start').click();
  await expect(status(p, 'panel_001')).toHaveText('Saved (panel_001.png)', { timeout: 60000 });
  await p.close();
});

test('a failed panel is reported Failed and a Flow error does not stall the queue', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 2, failPanel: true }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(p.locator('#bar-text')).toContainText('2 / 3 saved', { timeout: 90000 });
  await expect(status(p, 'panel_001')).toHaveText('Failed');
  await expect(status(p, 'panel_002')).toHaveText('Saved (panel_002.png)');
  await expect(p.locator('#queue-state')).toContainText('failed');
  await p.close();
});

test('aspect ratio that cannot be mapped fails the item instead of generating the wrong shape', async () => {
  const p = await freshPanel({ retries: 1 });
  await flow.evaluate(() => {
    document.querySelector('[data-a="16:9"]').remove();        // Flow offers no such option
    document.querySelector('[role=textbox]').innerText = 'leftover prompt'; // a stray click on "Start generation" would submit this
  });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Failed', { timeout: 30000 });
  await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]')).toContainText('Could not set aspect ratio 16:9');
  await p.waitForTimeout(6000); // let a (wrong) retry happen if it were going to
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0); // nothing was submitted
  await p.close();
});

test('Stop during generation returns the item to Pending; Pause/Resume holds the queue', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockDelay = '15000'; });
  await p.setInputFiles('#file', buildMini({ chars: 2, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Generating', { timeout: 20000 });
  await expect(p.locator('#b-pause')).toBeEnabled();
  await p.locator('#b-pause').click();
  await expect(p.locator('#b-resume')).toBeEnabled();
  await p.locator('#b-resume').click();
  await p.locator('#b-stop').click();
  await expect(p.locator('#queue-state')).toHaveText('Stopped.', { timeout: 15000 });
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Pending');
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Pending');
  await expect(p.locator('#b-start')).toBeEnabled();
  await p.close();
});

test('submit escalates to a trusted click when Flow ignores script-made clicks', async () => {
  const p = await freshPanel({ timeoutSec: 30 });
  await flow.evaluate(() => { localStorage.mockTrustedOnly = '1'; });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  try {
    await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  } catch (e) {
    console.log('LOG>>>\n' + (await logText(p)) + '\nERR>>> ' + (await p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]').innerText()));
    throw e;
  }
  const log = await logText(p);
  expect(log).toContain('no reaction to simulated click');
  expect(log).toContain('no reaction to form submit');
  expect(log).toContain('no reaction to native click');
  expect(log).toContain('no reaction to Enter key');
  expect(log).toContain('submitted via trusted click');
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(1); // exactly one generation, never duplicated
});

test('a loader that was already on the page is not mistaken for Flow accepting the prompt', async () => {
  const p = await freshPanel({ timeoutSec: 30 });
  await flow.evaluate(() => { localStorage.mockTrustedOnly = '1'; localStorage.mockBusyDecor = '1'; });
  await flow.reload();
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  try {
    await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  } catch (e) {
    console.log('LOG>>>\n' + (await logText(p)));
    throw e;
  }
  const log = await logText(p);
  expect(log).toContain('no reaction to simulated click');
  expect(log).toContain('submitted via trusted click');
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(1);
});

test('trusted click is aimed correctly when the Flow tab is browser-zoomed', async () => {
  const tabId = await sw.evaluate(async () => (await chrome.tabs.query({ url: 'https://flow.google.com/*' }))[0].id);
  await sw.evaluate((id) => chrome.tabs.setZoom(id, 1.5), tabId);
  try {
    const p = await freshPanel({ timeoutSec: 30 });
    await flow.evaluate(() => { localStorage.mockTrustedOnly = '1'; });
    await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
    await p.locator('.tab[data-tab="queue"]').click();
    await p.locator('#b-start').click();
    await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
    expect(await logText(p)).toMatch(/trusted pointer aimed at the button \(scale [\d.]+, page zoom 1\.5\)/);
    expect(await flow.evaluate(() => window.__runs)).toHaveLength(1);
  } finally {
    await sw.evaluate((id) => chrome.tabs.setZoom(id, 1), tabId);
  }
});

test('warns when the Flow tab is on a screen without the settings control (e.g. New character)', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => document.getElementById('trig').remove());
  await expect(p.locator('#conn')).toHaveText('Flow: wrong screen', { timeout: 15000 });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Failed', { timeout: 30000 });
  await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]')).toContainText("main prompt screen (All media)");
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
});

test('AUTO-RUN: loading a file starts everything by itself (characters, then panels) with no button pressed', async () => {
  const p = await freshPanel({ autoRunOnLoad: true, autoRunDelaySec: 2 });
  await p.setInputFiles('#file', buildMini({ chars: 2, panels: 2 }));
  await expect(p.locator('#auto-banner')).toBeVisible();
  await expect(p.locator('#auto-text')).toContainText('Auto-start in');
  // nobody clicks Start: it must finish on its own
  await expect(p.locator('#bar-text')).toContainText('4 / 4 saved', { timeout: 100000 });
  await expect(p.locator('#auto-banner')).toBeHidden();
  const runs = await flow.evaluate(() => window.__runs);
  expect(runs.map((r) => (r.prompt.includes('character model sheet') ? 'char' : 'panel'))).toEqual(['char', 'char', 'panel', 'panel']);
  expect(await logText(p)).toContain('Auto-run: 4 item(s) queued');
  for (const f of ['04_visual/refs/SEOHA_turnaround.png', '04_visual/refs/SEOHA_expressions.png', '05_panels/ep01/panel_001.png', '05_panels/ep01/panel_002.png']) {
    expect(fs.existsSync(path.join(dlDir, 'Webtoon-Automation/_workspace', f)), f).toBe(true);
  }
});

test('AUTO-RUN: Cancel on the countdown banner prevents any generation', async () => {
  const p = await freshPanel({ autoRunOnLoad: true, autoRunDelaySec: 6 });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 1 }));
  await expect(p.locator('#auto-banner')).toBeVisible();
  await p.locator('#auto-cancel').click();
  await expect(p.locator('#auto-banner')).toBeHidden();
  await p.waitForTimeout(8000);
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Pending');
  await expect(p.locator('#h-start')).toBeEnabled(); // can still start manually
});

test('AUTO-RUN: switched off in settings means nothing starts after loading', async () => {
  const p = await freshPanel({ autoRunOnLoad: false });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await expect(p.locator('#bar-text')).toContainText('0 / 1');
  await p.waitForTimeout(4000);
  await expect(p.locator('#auto-banner')).toBeHidden();
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
});

test('AUTO-RUN: skipped with a clear message when Flow is on the wrong screen', async () => {
  const p = await freshPanel({ autoRunOnLoad: true, autoRunDelaySec: 1 });
  await flow.evaluate(() => document.getElementById('trig').remove());
  await expect(p.locator('#conn')).toHaveText('Flow: wrong screen', { timeout: 15000 });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await expect(p.locator('#queue-state')).toContainText('Auto-run skipped: wrong Flow screen', { timeout: 15000 });
  await p.waitForTimeout(3000);
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
});

test('Downloads mode does not repeat "Webtoon-Automation/" when Chrome\'s download folder is the project folder', async () => {
  const p = await freshPanel({ chromeInProject: true });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  const dl = await sw.evaluate(() => self.__dl);
  expect(dl.map((d) => d.filename)).toEqual(['_workspace/04_visual/refs/SEOHA_turnaround.png']);
  expect(await logText(p)).toContain('-> _workspace/04_visual/refs/SEOHA_turnaround.png');
});

test('header "Clear data" wipes the episode and the reference cache, then the same file can be loaded again', async () => {
  const p = await freshPanel({ timeoutSec: 30, autoRunOnLoad: false });
  const file = buildMini({ chars: 1, panels: 0 });
  await p.setInputFiles('#file', file);
  await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"]')).toBeVisible();
  await p.locator('#h-clear').click();
  await expect(p.locator('.item')).toHaveCount(0);
  expect(await p.evaluate(async () => (await chrome.storage.local.get('wt:data'))['wt:data'])).toBeUndefined();
  await p.setInputFiles('#file', file); // same file again
  await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"]')).toBeVisible();
  await p.close();
});

test('the top "Start All" button runs the whole episode from any tab', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 1 }));
  await expect(p.locator('#h-start')).toBeEnabled();
  await p.locator('#h-start').click(); // Characters tab is showing, not Queue & Logs
  await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 80000 });
  await expect(p.locator('#h-stop')).toBeDisabled();
});

test('AUTO-RUN does not repeat finished items when the same file is loaded again', async () => {
  const p = await freshPanel({ autoRunOnLoad: true, autoRunDelaySec: 0 });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await expect(p.locator('#bar-text')).toContainText('1 / 1 saved', { timeout: 60000 });
  await flow.evaluate(() => { window.__runs.length = 0; });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await expect(p.locator('#bar-text')).toContainText('1 / 1 saved');
  await p.waitForTimeout(3000);
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
  expect(await logText(p)).toContain('Auto-run: nothing is pending');
});

test('Flow returns JPEG: the saved file is converted to a real PNG (matches the .png name)', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockJpeg = '1'; });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  const file = path.join(dlDir, 'Webtoon-Automation/_workspace/04_visual/refs/SEOHA_turnaround.png');
  const info = pngSize(file);
  expect(info.sig).toBe('89504e470d0a1a0a'); // PNG signature, although the page produced a JPEG
  expect([info.w, info.h]).toEqual([640, 360]);
});

test('the submit method that worked is remembered: the 2nd item skips the methods that never work', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockTrustedOnly = '1'; });
  await p.setInputFiles('#file', buildMini({ chars: 2, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-start').click();
  await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 90000 });
  const log = await logText(p);
  expect((log.match(/submit: simulated click/g) || []).length).toBe(1); // only the first item had to discover it
  expect((log.match(/submitted via trusted click/g) || []).length).toBe(2);
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(2);
});

test('trusted click still lands when the user is moving their own mouse over the page', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockTrustedOnly = '1'; });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  let noisy = true;
  const noise = (async () => { // real, trusted mouse movement at an unrelated spot, like a hand on the trackpad
    for (let i = 0; noisy; i++) { await flow.mouse.move(350 + (i % 7), 250 + (i % 5)).catch(() => {}); await flow.waitForTimeout(15); }
  })();
  try {
    await p.locator('#b-start').click();
    await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  } finally { noisy = false; await noise; }
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(1);
});

test('a download that another extension renamed is NOT reported as saved', async () => {
  const p = await freshPanel();
  await sw.evaluate(() => {
    self.__origSearch = chrome.downloads.search.bind(chrome.downloads);
    chrome.downloads.search = async (q) => (await self.__origSearch(q)).map((d) => ({ ...d, filename: d.filename.replace(/[^/]+$/, 'a6b737fe-uuid.jpeg') }));
  });
  try {
    await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
    await p.locator('.tab[data-tab="queue"]').click();
    await p.locator('#b-start').click();
    await expect(status(p, 'SEOHA_turnaround')).toHaveText('Failed', { timeout: 60000 });
    await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]')).toContainText('Another extension is renaming downloads');
    await expect(p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]')).toContainText('a6b737fe-uuid.jpeg');
  } finally {
    await sw.evaluate(() => { chrome.downloads.search = self.__origSearch; });
  }
});

test('SAVE TO FOLDER: exact names and folders are written directly, bypassing Chrome downloads', async () => {
  const p = await freshPanel({ saveMode: 'folder' });
  // the native folder dialog cannot be automated: hand the page the browser's private file system as the "chosen" folder
  await p.evaluate(async () => {
    const root = await navigator.storage.getDirectory();
    for await (const name of root.keys()) await root.removeEntry(name, { recursive: true });
    window.showDirectoryPicker = async () => navigator.storage.getDirectory();
  });
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-choose-folder').click();
  await expect(p.locator('#folder-label')).toContainText('Folder chosen');
  await p.setInputFiles('#file', buildMini({ chars: 2, panels: 2 }));
  await p.locator('#h-start').click();
  await expect(p.locator('#bar-text')).toContainText('4 / 4 saved', { timeout: 100000 });
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)');
  const files = await p.evaluate(async () => {
    const out = [];
    const walk = async (dir, prefix) => {
      for await (const [name, h] of dir.entries()) {
        if (h.kind === 'directory') await walk(h, `${prefix}${name}/`);
        else { const f = await h.getFile(); const b = new Uint8Array(await f.slice(0, 8).arrayBuffer()); out.push({ path: `${prefix}${name}`, size: f.size, sig: [...b].map((x) => x.toString(16).padStart(2, '0')).join('') }); }
      }
    };
    await walk(await navigator.storage.getDirectory(), '');
    return out.sort((a, b) => a.path.localeCompare(b.path));
  });
  expect(files.map((f) => f.path)).toEqual([
    '_workspace/04_visual/refs/SEOHA_expressions.png',
    '_workspace/04_visual/refs/SEOHA_turnaround.png',
    '_workspace/05_panels/ep01/panel_001.png',
    '_workspace/05_panels/ep01/panel_002.png',
  ]);
  for (const f of files) { expect(f.size).toBeGreaterThan(1000); expect(f.sig).toBe('89504e470d0a1a0a'); }
  expect(fs.readdirSync(dlDir, { recursive: true }).filter((f) => f.endsWith('.png'))).toEqual([]); // nothing went through Chrome downloads
  expect(await logText(p)).toMatch(/SEOHA_turnaround\s+Saved \S*_workspace\/04_visual\/refs\/SEOHA_turnaround\.png/);
  await p.evaluate(async () => { const root = await navigator.storage.getDirectory(); for await (const n of root.keys()) await root.removeEntry(n, { recursive: true }); });
});

test('SAVE TO FOLDER: with no folder chosen it refuses to start and says what to do', async () => {
  const p = await freshPanel({ saveMode: 'folder', autoRunOnLoad: false });
  await p.evaluate(async () => { // forget any folder remembered by an earlier test
    await new Promise((res) => { const q = indexedDB.open('wt-flow-runner'); q.onsuccess = () => { const tx = q.result.transaction('kv', 'readwrite'); tx.objectStore('kv').delete('saveDir'); tx.oncomplete = res; }; });
  });
  await p.reload();
  await expect(p.locator('#conn')).toHaveText('Flow connected', { timeout: 15000 });
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('#h-start').click();
  await expect(p.locator('#queue-state')).toContainText('No save folder chosen');
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
});

// ===================== Attach in Flow (reference images) =====================
const ONE_PX_PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
const savedFile = (sub, name) => path.join(dlDir, 'Webtoon-Automation/_workspace', sub, name);
const refRow = (p, key) => p.locator(`.item[data-id="ep01:${key}"] [data-f="refs"]`);

test('ATTACH: parser normalizes requiresReference / referenceTargets from the real file', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', REAL_HANDOFF);
  await expect(p.locator('#bar-text')).toContainText('0 / 87');
  await expect.poll(() => sw.evaluate(async () => !!(await chrome.storage.local.get('wt:data'))['wt:data']), { timeout: 5000 }).toBe(true);
  const items = await sw.evaluate(async () => (await chrome.storage.local.get('wt:data'))['wt:data'].items);
  const get = (k) => items.find((i) => i.key === k);
  expect(get('SEOHA_turnaround')).toMatchObject({ requiresReference: false, referenceTargets: [] });
  expect(get('SEOHA_expressions')).toMatchObject({ requiresReference: true, referenceTargets: ['SEOHA_turnaround.png'] });
  expect(get('MIRAN_expressions').referenceTargets).toEqual(['MIRAN_turnaround.png', 'MIRAN_outfitB.png']);
  expect(get('panel_001').referenceTargets).toEqual(['SEOHA_turnaround.png', 'JEONGMIN_turnaround.png', 'LOC_L1_DUTYROOM_plate.png']);
  expect(items.filter((i) => i.requiresReference)).toHaveLength(items.filter((i) => i.attach.length).length);
  expect(items.filter((i) => i.kind === 'panel' && i.requiresReference)).toHaveLength(63);
  // the card shows the requirement and its live readiness
  await expect(refRow(p, 'SEOHA_turnaround')).toContainText('None');
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('SEOHA_turnaround.png');
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('Pending Stage 1');
});

test('ATTACH: references are attached from the cache, multi-reference works, leftovers are cleared, UI shows readiness', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', buildMini({ keepRefs: true,
    charKeys: ['SEOHA_turnaround', 'SEOHA_expressions', 'JEONGMIN_turnaround', 'LOC_L1_DUTYROOM_plate'], panelKeys: ['panel_001'] }));
  await expect(p.locator('#bar-text')).toContainText('0 / 5');
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('Pending Stage 1');
  await expect(refRow(p, 'SEOHA_expressions').locator('img.ref-thumb')).toHaveCount(0);
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(p.locator('#bar-text')).toContainText('5 / 5 saved', { timeout: 150000 });

  const runs = await flow.evaluate(() => window.__runs);
  expect(runs.map((r) => r.refs.map((x) => x.name))).toEqual([
    [],                                   // SEOHA_turnaround: nothing to attach
    ['SEOHA_turnaround.png'],             // SEOHA_expressions
    [],                                   // JEONGMIN_turnaround: the previous reference was REMOVED, not carried over
    [],                                   // LOC plate
    ['SEOHA_turnaround.png', 'JEONGMIN_turnaround.png', 'LOC_L1_DUTYROOM_plate.png'], // panel_001: three references, in order
  ]);
  // what was attached is exactly the generated image (same bytes as the file saved to disk)
  const sz = (sub, n) => fs.statSync(savedFile(sub, n)).size;
  expect(runs[1].refs[0].size).toBe(sz('04_visual/refs', 'SEOHA_turnaround.png'));
  expect(runs[4].refs.map((x) => x.size)).toEqual([
    sz('04_visual/refs', 'SEOHA_turnaround.png'), sz('04_visual/refs', 'JEONGMIN_turnaround.png'), sz('04_visual/refs', 'LOC_L1_DUTYROOM_plate.png')]);

  const log = await logText(p);
  expect(log).toContain('Attached reference: SEOHA_turnaround.png -> SEOHA_expressions (via upload menu)');
  expect(log).toContain('Attached reference: LOC_L1_DUTYROOM_plate.png -> panel_001');
  expect(log).toContain('Removed 1 leftover reference image(s) from the prompt bar');
  expect(log).toMatch(/SEOHA_turnaround\s+Cached SEOHA_turnaround\.png/);

  // UI: Ready + thumbnail on the dependent cards, and the cache panel lists every generated image
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('Ready');
  await expect(refRow(p, 'SEOHA_expressions').locator('img.ref-thumb')).toHaveCount(1);
  await p.locator('.tab[data-tab="panels"]').click();
  await expect(refRow(p, 'panel_001').locator('img.ref-thumb')).toHaveCount(3);
  await expect(p.locator('#n-assets')).toHaveText('5');
  await expect(p.locator('#asset-list .asset')).toHaveCount(5);
});

test('ATTACH: a missing reference BLOCKS the item (never generated without it); a manual upload unblocks it', async () => {
  const p = await freshPanel();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_expressions', 'JEONGMIN_turnaround'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(status(p, 'JEONGMIN_turnaround')).toHaveText('Saved (JEONGMIN_turnaround.png)', { timeout: 60000 });
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Blocked (Missing Reference: SEOHA_turnaround.png)');
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('Missing');
  expect(await logText(p)).toContain('Blocked (Missing Reference: SEOHA_turnaround.png)');
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(1); // only JEONGMIN was submitted

  // supply the reference by hand from the card
  const png = path.join(tmp, 'my-ref.png'); fs.writeFileSync(png, ONE_PX_PNG);
  await p.locator('.tab[data-tab="characters"]').click();
  const [chooser] = await Promise.all([p.waitForEvent('filechooser'), refRow(p, 'SEOHA_expressions').getByRole('button', { name: 'Upload' }).click()]);
  await chooser.setFiles(png);
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('Ready');
  await p.locator('#h-start').click(); // Start All re-checks Blocked items
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Saved (SEOHA_expressions.png)', { timeout: 60000 });
  const runs = await flow.evaluate(() => window.__runs);
  expect(runs.at(-1).refs).toEqual([{ name: 'SEOHA_turnaround.png', size: ONE_PX_PNG.length }]); // the uploaded bytes, under the target name
  expect(await logText(p)).toContain('Attached reference: SEOHA_turnaround.png -> SEOHA_expressions');
});

test('ATTACH: policy "pause" waits for the missing reference, then Resume continues with it attached', async () => {
  const p = await freshPanel({ onMissingRef: 'pause' });
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(p.locator('#queue-state')).toContainText('Paused: SEOHA_expressions needs SEOHA_turnaround.png');
  await expect(p.locator('#b-resume')).toBeEnabled();
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(0);
  const png = path.join(tmp, 'my-ref2.png'); fs.writeFileSync(png, ONE_PX_PNG);
  await p.locator('.tab[data-tab="characters"]').click();
  const [chooser] = await Promise.all([p.waitForEvent('filechooser'), refRow(p, 'SEOHA_expressions').getByRole('button', { name: 'Upload' }).click()]);
  await chooser.setFiles(png);
  await expect(refRow(p, 'SEOHA_expressions')).toContainText('Ready');
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#b-resume').click();
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Saved (SEOHA_expressions.png)', { timeout: 60000 });
  expect((await flow.evaluate(() => window.__runs))[0].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
});

for (const [mode, via] of [['input', 'file input'], ['drop', 'drop on prompt bar']]) {
  test(`ATTACH: falls back to "${via}" when Flow has no upload menu (${mode} mode)`, async () => {
    const p = await freshPanel();
    await flow.evaluate((m) => { localStorage.mockAttach = m; }, mode);
    await flow.reload();
    await expect(flow.locator('[role=textbox]')).toBeVisible();
    await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
    await p.locator('.tab[data-tab="queue"]').click();
    await p.locator('#h-start').click();
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
    expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
    expect(await logText(p)).toContain(`(via ${via})`);
  });
}

test('ATTACH: Flow\'s "Rights to use this image" dialog is confirmed with "I agree" automatically', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockConsent = '1'; });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect(await flow.evaluate(() => window.__agreed)).toBe(1);
  expect(await logText(p)).toContain('Accepted Flow\'s dialog: "I agree"');
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
});

test('ATTACH: with the "I agree" setting off, the dialog is left for the user (nothing is accepted for them)', async () => {
  const p = await freshPanel({ autoAgree: false, refTimeoutSec: 5 });
  await flow.evaluate(() => { localStorage.mockConsent = '1'; });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Failed', { timeout: 100000 });
  expect(await flow.evaluate(() => window.__agreed || 0)).toBe(0);
});

test('ATTACH: Flow\'s asset picker ("+" -> Upload media -> I agree -> Add to prompt) attaches the cached reference', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockAttach = 'picker'; localStorage.mockConsent = '1'; });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
  expect(await flow.evaluate(() => window.__uploads)).toBe(1);
  expect(await flow.evaluate(() => window.__agreed)).toBe(1);
  expect(await logText(p)).toContain('(via asset picker)');
});

test('ATTACH: a reference Flow already has in its uploads is picked, not uploaded again', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockAttach = 'picker'; localStorage.mockExisting = JSON.stringify(['SEOHA_turnaround.png']); });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
  expect(await flow.evaluate(() => window.__uploads || 0)).toBe(0);
  expect(await logText(p)).toContain('already has "SEOHA_turnaround.png" in its uploads');
});

test('ATTACH: two references through the picker (the "+" is re-rendered after the first attach)', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockAttach = 'picker'; localStorage.mockExisting = JSON.stringify(['MIRAN_turnaround.png']); });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['MIRAN_turnaround', 'MIRAN_outfitB', 'MIRAN_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('3 / 3 saved', { timeout: 150000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  const runs = await flow.evaluate(() => window.__runs);
  expect(runs[2].refs.map((r) => r.name).sort()).toEqual(['MIRAN_outfitB.png', 'MIRAN_turnaround.png']);
});

test('ATTACH (regression): a reference scrolled OUT OF VIEW in the virtual picker is found and reused, never uploaded again', async () => {
  const p = await freshPanel();
  const many = ['SEOHA_turnaround.png', ...Array.from({ length: 20 }, (_, i) => `panel_${i}.png`)]; // oldest first -> the wanted row ends up at the bottom, out of view
  await flow.evaluate((m) => { localStorage.mockAttach = 'picker'; localStorage.mockExisting = JSON.stringify(m); }, many);
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect(await flow.evaluate(() => window.__uploads || 0)).toBe(0); // no duplicate upload in Flow's Uploads tab
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
});

test('ATTACH (regression): duplicate rows with the same name, and a thumbnail that looks nothing like the file, still attach (no remove / retry loop)', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockAttach = 'picker'; localStorage.mockExisting = JSON.stringify(['SEOHA_turnaround.png', 'SEOHA_turnaround.png', 'SEOHA_turnaround.png']); });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect(await flow.evaluate(() => window.__picked)).toBe(1); // attached exactly once, never removed and re-picked
  expect(await flow.evaluate(() => window.__uploads || 0)).toBe(0);
  expect(await logText(p)).not.toContain('DIFFERENT');
});

test('ATTACH (regression): a picker row that ignores script clicks is NOT silently replaced by the first row; a trusted click selects the right one', async () => {
  const p = await freshPanel();
  const rows = ['SEOHA_turnaround.png', 'JEONGMIN_turnaround.png', 'PROP_PAGES_pair.png', 'SEONIM_turnaround.png']; // oldest first: PROP/SEONIM are the first (top) rows
  await flow.evaluate((m) => { localStorage.mockAttach = 'picker'; localStorage.mockPickTrusted = '1'; localStorage.mockExisting = JSON.stringify(m); }, rows);
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
  // the row that was really added is SEOHA_turnaround (id ...0000), not the top row
  expect(await flow.evaluate(() => window.__pickedIds)).toEqual(['00000000-0000-4000-8000-000000000000']);
});

test('ATTACH (regression): a Flow build where clicking a picker row attaches it and closes the picker (no "Add to prompt")', async () => {
  const p = await freshPanel();
  await flow.evaluate(() => { localStorage.mockAttach = 'picker'; localStorage.mockPickDirect = '1'; localStorage.mockExisting = JSON.stringify(['SEOHA_turnaround.png', 'PROP_PAGES_pair.png']); });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
  expect(await flow.evaluate(() => window.__uploads || 0)).toBe(0);
});

test('ATTACH (regression): NO "Add to prompt" button, and a script click only highlights the row: a real click attaches the right one', async () => {
  const p = await freshPanel();
  const rows = ['SEOHA_turnaround.png', 'JEONGMIN_turnaround.png', 'PROP_PAGES_pair.png', 'SEONIM_turnaround.png'];
  await flow.evaluate((m) => { localStorage.mockAttach = 'picker'; localStorage.mockPickDirect = '1'; localStorage.mockPickTrusted = '1'; localStorage.mockExisting = JSON.stringify(m); }, rows);
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  try {
    await expect(p.locator('#bar-text')).toContainText('2 / 2 saved', { timeout: 100000 });
  } catch (e) { console.log('LOG>>>\n' + (await logText(p))); throw e; }
  expect((await flow.evaluate(() => window.__runs))[1].refs.map((r) => r.name)).toEqual(['SEOHA_turnaround.png']);
  expect(await flow.evaluate(() => window.__pickedIds)).toEqual(['00000000-0000-4000-8000-000000000000']);
});

test('ATTACH: if Flow never shows the reference, the item FAILS and nothing is generated without it', async () => {
  const p = await freshPanel({ refTimeoutSec: 3 });
  await flow.evaluate(() => { localStorage.mockAttach = 'none'; });
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await p.setInputFiles('#file', buildMini({ keepRefs: true, charKeys: ['SEOHA_turnaround', 'SEOHA_expressions'], panelKeys: [] }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(status(p, 'SEOHA_expressions')).toHaveText('Failed', { timeout: 90000 });
  await expect(p.locator('.item[data-id="ep01:SEOHA_expressions"] [data-f="err"]')).toContainText('Could not attach reference SEOHA_turnaround.png');
  expect(await flow.evaluate(() => window.__runs)).toHaveLength(1); // only the reference-free item was submitted
});

// ===================== images the page itself cannot read (cross-origin, no CORS) =====================
test('REMOTE IMAGE: the page cannot read it -> the extension fetches it, converts JPEG to real PNG, caches and saves it', async () => {
  const p = await freshPanel();
  jpegBytes = Buffer.from(await flow.evaluate(async () => {
    const c = document.createElement('canvas'); c.width = 640; c.height = 360;
    const x = c.getContext('2d'); x.fillStyle = '#3a7'; x.fillRect(0, 0, 640, 360);
    const b = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.9));
    return await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result.split(',')[1]); fr.readAsDataURL(b); });
  }), 'base64');
  expect(jpegBytes.subarray(0, 3).toString('hex')).toBe('ffd8ff'); // a real JPEG
  await flow.evaluate((base) => { localStorage.mockRemote = base; }, 'https://flow-img.test');
  await flow.reload();
  await expect(flow.locator('[role=textbox]')).toBeVisible();
  await flow.evaluate(() => { document.documentElement.dataset.wtTestBlockFetch = '1'; }); // the page-side read fails, as on Flow
  await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
  await p.locator('.tab[data-tab="queue"]').click();
  await p.locator('#h-start').click();
  await expect(status(p, 'SEOHA_turnaround')).toHaveText('Saved (SEOHA_turnaround.png)', { timeout: 60000 });
  const log = await logText(p);
  expect(log).toContain('The page cannot read the image');
  expect(log).toContain('flow-img.test');
  expect(log).toContain('Read the image through the extension');
  const info = pngSize(savedFile('04_visual/refs', 'SEOHA_turnaround.png'));
  expect(info.sig).toBe('89504e470d0a1a0a'); // converted: the server only ever sent JPEG
  expect([info.w, info.h]).toEqual([640, 360]);
  await expect(p.locator('#n-assets')).toHaveText('1'); // and cached for re-attaching
});

test('Chrome correcting .png to .jpeg is reported for what it is, not blamed on another extension', async () => {
  const p = await freshPanel();
  await sw.evaluate(() => {
    self.__origSearch = chrome.downloads.search.bind(chrome.downloads);
    chrome.downloads.search = async (q) => (await self.__origSearch(q)).map((d) => ({ ...d, filename: d.filename.replace(/\.png$/, '.jpeg') }));
  });
  try {
    await p.setInputFiles('#file', buildMini({ chars: 1, panels: 0 }));
    await p.locator('.tab[data-tab="queue"]').click();
    await p.locator('#h-start').click();
    await expect(status(p, 'SEOHA_turnaround')).toHaveText('Failed', { timeout: 60000 });
    const err = p.locator('.item[data-id="ep01:SEOHA_turnaround"] [data-f="err"]');
    await expect(err).toContainText('image data is not PNG');
    await expect(err).not.toContainText('Another extension');
  } finally {
    await sw.evaluate(() => { chrome.downloads.search = self.__origSearch; });
  }
});
