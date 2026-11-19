import { parseHandoff, mergeItems, ASPECTS } from './parser.js';

// ---------------------------------------------------------------- state
const DEFAULT_SETTINGS = {
  delaySec: 5, timeoutSec: 180, retries: 0, stableSec: 4,
  mode: '', outputs: '', requireAspect: true, waitAttach: false,
  scope: 'all', fileUrl: '',
  autoRunOnLoad: true, autoRunDelaySec: 5, saveMode: 'downloads', onMissingRef: 'skip', refTimeoutSec: 45,
  refPrefix: 'Draw ONE new single illustration of the scene described below. The attached images are only references for the characters (face, hair, outfit, build) and for the place and props; do not copy their layout, multiple views, poses, expression grid or background, and do not make a character sheet. ', autoAgree: true, chromeInProject: true,
  autoPanels: true, dirCharacters: '', dirPanels: '', dirsEpisode: '',
  aspectMap: '16:9 = crop_16_9\n9:16 = crop_9_16\n1:1 = crop_square\n4:3 = crop_landscape\n3:4 = crop_portrait',
};
const BASE_DIR = 'Webtoon-Automation/_workspace';
const state = {
  meta: null, items: [], warnings: [],
  settings: { ...DEFAULT_SETTINGS },
  log: [],
  tabId: null, screenOk: false,
  filters: { character: { q: '', status: '' }, panel: { q: '', status: '' } },
  open: new Set(),                       // item ids whose editor is expanded
  q: { running: false, paused: false, stopping: false, currentId: null, stage: 0, msg: 'Idle.' },
};
let activeRun = null;                    // { runId, itemId, resolve }

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------------------------------------------------------------- naming and folders
/** Chrome only accepts relative paths without "..", and the OS rejects some characters. Extension is kept. */
function sanitizeName(name) {
  const clean = String(name).replace(/[\u0000-\u001f<>:"/\\|?*]/g, '_').replace(/^\.+/, '').trim();
  return clean || 'image.png';
}
function sanitizeDir(dir) {
  return String(dir || '').replace(/\\/g, '/').replace(/^[A-Za-z]:/, '').split('/')
    .map((p) => p.replace(/[\u0000-\u001f<>:"|?*]/g, '_').trim()).filter((p) => p && p !== '.' && p !== '..').join('/');
}
/** "D:\\Project\\WT test\\_workspace\\04_visual\\refs" -> "Webtoon-Automation/_workspace/04_visual/refs" */
function dirFromHandoff(p) {
  const m = String(p || '').replace(/\\/g, '/').match(/_workspace\/(.+)$/);
  return m ? sanitizeDir(`${BASE_DIR}/${m[1]}`) : '';
}
function targetFilename(item) {
  const dir = sanitizeDir(item.kind === 'character' ? state.settings.dirCharacters : state.settings.dirPanels);
  const name = sanitizeName(item.fileName || `${item.key}.png`);
  return dir ? `${dir}/${name}` : name;
}
/** Path handed to chrome.downloads (relative to Chrome's download folder). When that folder already IS the project
 *  folder, the leading "Webtoon-Automation/" must not be added a second time. */
function downloadsPath(item) {
  const rel = targetFilename(item);
  if (state.settings.chromeInProject === false) return rel;
  return rel.replace(/^Webtoon-Automation\//, '');
}
function parseAspectMap(text) {
  const map = {};
  for (const line of String(text || '').split('\n')) {
    const m = line.match(/^\s*(\d+:\d+)\s*=\s*(.+?)\s*$/);
    if (m) map[m[1]] = m[2].split('|').map((s) => s.trim()).filter(Boolean);
  }
  return map;
}
const extFromMime = (url, fallback) => {
  const m = /^data:image\/(png|jpeg|webp|gif)/.exec(url || '');
  return m ? (m[1] === 'jpeg' ? 'jpg' : m[1]) : fallback;
};

// ---------------------------------------------------------------- storage
let saveTimer = null;
function saveData() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => chrome.storage.local.set({ 'wt:data': { meta: state.meta, items: state.items, warnings: state.warnings } }), 250);
}
function saveDataNow() {
  clearTimeout(saveTimer);
  return chrome.storage.local.set({ 'wt:data': { meta: state.meta, items: state.items, warnings: state.warnings } });
}
const saveSettings = () => chrome.storage.local.set({ 'wt:settings': state.settings });
let logTimer = null;
function saveLog() {
  clearTimeout(logTimer);
  logTimer = setTimeout(() => chrome.storage.local.set({ 'wt:log': state.log }), 500);
}

// ---------------------------------------------------------------- log
function log(msg, level = 'info', itemKey = '') {
  const e = { t: Date.now(), level, msg, key: itemKey };
  state.log.push(e);
  if (state.log.length > 500) state.log.splice(0, state.log.length - 500);
  appendLogDom(e);
  $('n-log').textContent = state.log.length;
  saveLog();
}
const fmtTime = (t) => new Date(t).toLocaleTimeString([], { hour12: false });
function logLine(e) {
  return `${fmtTime(e.t)}${e.key ? ` [${e.key}]` : ''} ${e.level === 'info' ? '' : e.level.toUpperCase() + ': '}${e.msg}`;
}
function appendLogDom(e) {
  const ol = $('log');
  const stick = ol.scrollTop + ol.clientHeight >= ol.scrollHeight - 20;
  const li = document.createElement('li');
  li.innerHTML = `<span class="t">${fmtTime(e.t)}</span>${e.key ? `<b>${esc(e.key)}</b> ` : ''}<span class="l-${e.level}">${esc(e.msg)}</span>`;
  ol.appendChild(li);
  while (ol.children.length > 500) ol.firstChild.remove();
  if (stick) ol.scrollTop = ol.scrollHeight;
}
function renderLog() {
  $('log').innerHTML = '';
  state.log.forEach(appendLogDom);
  $('n-log').textContent = state.log.length;
}

// ---------------------------------------------------------------- flow connection
function sendToFlow(payload) {
  return chrome.runtime.sendMessage({ type: 'TO_FLOW', tabId: state.tabId, payload });
}
async function refreshConnection() {
  const badge = $('conn');
  const set = (cls, text, title) => { badge.className = `badge ${cls}`; badge.textContent = text; badge.title = title || ''; };
  try {
    const r = await sendToFlow({ type: 'PING' });
    if (r.notOnFlow) { state.tabId = null; state.screenOk = false; set('b-off', 'Not on Flow', 'Open https://flow.google.com in a tab.'); }
    else if (!r.ok) { state.tabId = r.tabId || null; set('b-warn', 'Flow: unreachable', r.error); }
    else {
      state.tabId = r.tabId;
      const d = r.data || {};
      state.screenOk = !!(d.promptFound && d.settingsFound !== false);
      if (d.promptFound && d.settingsFound === false) set('b-warn', 'Flow: wrong screen', `This page has a prompt box but no settings control (${d.url}). Open the project's main prompt screen (All media), not Characters or Scenes.`);
      else if (d.promptFound) set('b-ok', 'Flow connected', `${d.title}\nprompt box found${d.generateFound ? ', generate button found' : ''}`);
      else set('b-warn', 'Flow: no prompt box', 'On a Flow tab, but the prompt box was not found. Open a project, or update SELECTORS in content.js.');
    }
  } catch (e) { set('b-warn', 'Flow: error', e.message); }
  updateControls();
}

// ---------------------------------------------------------------- rendering
const byKind = (k) => state.items.filter((i) => i.kind === k);
const statusLabel = (i) => (i.status === 'Completed' ? `Saved (${i.savedName || i.fileName})` : i.status === 'Blocked' && i.error ? i.error : i.status);
const isBusyStatus = (s) => s === 'Generating' || s === 'Downloading';
const isEdited = (i) => i.prompt !== i.sourcePrompt || i.aspect !== i.sourceAspect;

function counts() {
  const c = { Pending: 0, Generating: 0, Downloading: 0, Completed: 0, Failed: 0, Blocked: 0 };
  state.items.forEach((i) => { c[i.status] = (c[i.status] || 0) + 1; });
  return c;
}
function renderProgress() {
  const c = counts(), total = state.items.length;
  $('bar-fill').style.width = total ? `${(c.Completed / total) * 100}%` : '0';
  $('bar-text').textContent = total ? `${c.Completed} / ${total} saved · ${c.Failed} failed · ${c.Blocked} blocked · ${c.Generating + c.Downloading} active` : '0 / 0';
  renderStages();
  $('n-characters').textContent = byKind('character').length;
  $('n-panels').textContent = byKind('panel').length;
  $('episode').textContent = state.meta ? `${state.meta.episode} — ${state.meta.summary}` : 'No handoff file loaded';
}

function renderStages() {
  const chars = byKind('character'), panels = byKind('panel');
  const cd = chars.filter((i) => i.status === 'Completed').length, pd = panels.filter((i) => i.status === 'Completed').length;
  const s1 = $('stage1'), s2 = $('stage2');
  s1.textContent = `Stage 1: Characters [${cd}/${chars.length}]`;
  s2.textContent = `Stage 2: Panels [${pd}/${panels.length}]`;
  s1.className = `stage${state.q.stage === 1 ? ' active' : ''}${chars.length && cd === chars.length ? ' done' : ''}`;
  s2.className = `stage${state.q.stage === 2 ? ' active' : ''}${panels.length && pd === panels.length ? ' done' : ''}`;
}
function chipsHtml(i) {
  return [
    i.scene && `<span class="chip">${esc(i.scene)}</span>`,
    i.locationId && `<span class="chip">${esc(i.locationId)}${i.view ? ' · ' + esc(i.view) : ''}</span>`,
    `<span class="chip">${esc(i.aspect || 'no aspect')}</span>`,
    i.alreadySaved && '<span class="chip">already saved</span>',
    isEdited(i) && '<span class="chip edited">edited</span>',
  ].filter(Boolean).join('');
}
function refreshChips(i) {
  const el = itemEl(i.id);
  if (el) el.querySelector('[data-f="chips"]').innerHTML = chipsHtml(i);
}
function cardHtml(i) {
  const open = state.open.has(i.id);
  const chips = chipsHtml(i);
  const attach = `<div class="refs-row" data-f="refs">${refsHtml(i)}</div>`;
  const aspects = [...new Set([...ASPECTS, i.aspect].filter(Boolean))];
  return `
    <div class="item-head">
      <span class="name">${esc(i.title)}</span>
      <span class="badge s-${i.status}" data-f="status">${esc(statusLabel(i))}</span>
    </div>
    <div class="chips" data-f="chips">${chips}</div>
    ${i.redrawReason ? `<div class="attach">Redraw: ${esc(i.redrawReason)}</div>` : ''}
    ${attach}
    <div class="err" data-f="err">${esc(i.error)}</div>
    <div class="item-actions">
      <button data-act="run">Run Single</button>
      <button data-act="edit">${open ? 'Close' : 'Edit'}</button>
      <button data-act="reset" title="Set back to Pending">Reset</button>
    </div>
    <div class="item-body" ${open ? '' : 'hidden'}>
      <label>Aspect ratio
        <select data-act="aspect">${aspects.map((a) => `<option ${a === i.aspect ? 'selected' : ''}>${esc(a)}</option>`).join('')}</select>
      </label>
      <label><span data-f="plen">Prompt (${i.prompt.length} chars)</span> — edits save automatically
        <textarea data-act="prompt" spellcheck="false">${esc(i.prompt)}</textarea>
      </label>
      <button data-act="revert">Revert to file version</button>
    </div>`;
}
function itemEl(id) { return document.querySelector(`.item[data-id="${CSS.escape(id)}"]`); }

function matchesFilter(i) {
  const f = state.filters[i.kind];
  if (f.status && i.status !== f.status) return false;
  if (!f.q) return true;
  const hay = `${i.key} ${i.scene} ${i.locationId} ${i.view} ${i.prompt}`.toLowerCase();
  return f.q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
}
function renderLists() {
  for (const kind of ['character', 'panel']) {
    const root = $(`list-${kind}`);
    const items = byKind(kind).filter(matchesFilter);
    if (!state.items.length) { root.innerHTML = '<div class="empty">Load a handoff file to see items.</div>'; continue; }
    if (!items.length) { root.innerHTML = '<div class="empty">Nothing matches the filter.</div>'; continue; }
    root.innerHTML = '';
    for (const i of items) {
      const div = document.createElement('div');
      div.className = `item${isBusyStatus(i.status) ? ' running' : ''}`;
      div.dataset.id = i.id;
      div.innerHTML = cardHtml(i);
      root.appendChild(div);
    }
  }
  updateControls();
}
/** Update one card without touching an open editor (keeps focus and cursor). */
function patchItem(i) {
  const el = itemEl(i.id);
  if (!el) return;
  const st = el.querySelector('[data-f="status"]');
  st.className = `badge s-${i.status}`;
  st.textContent = statusLabel(i);
  el.querySelector('[data-f="err"]').textContent = i.error;
  el.classList.toggle('running', isBusyStatus(i.status));
}
function setStatus(i, status, error = '') {
  i.status = status; i.error = error; i.updatedAt = Date.now();
  patchItem(i); renderProgress(); saveDataNow(); updateControls(); refreshRefs();
}

function updateControls() {
  const q = state.q, hasItems = state.items.length > 0;
  const failed = state.items.some((i) => i.status === 'Failed');
  const onFlow = !!state.tabId;
  $('b-start').disabled = q.running || !hasItems || !onFlow;
  $('h-start').disabled = $('b-start').disabled;
  $('h-stop').disabled = !q.running;
  $('h-clear').disabled = q.running;
  $('b-pause').disabled = !q.running || q.paused;
  $('b-resume').disabled = !q.running || !q.paused;
  $('b-stop').disabled = !q.running;
  $('b-retry').disabled = q.running || !failed || !onFlow;
  $('b-reset').disabled = q.running || !hasItems;
  $('b-clear').disabled = q.running || !hasItems;
  document.querySelectorAll('[data-act="run"]').forEach((b) => { b.disabled = q.running || !onFlow; });
  $('queue-state').textContent = q.msg;
}
function setQueueMsg(msg) { state.q.msg = msg; $('queue-state').textContent = msg; }

// ---------------------------------------------------------------- loading
async function loadText(text, source) {
  cancelAutoRun();
  const msg = $('load-msg');
  try {
    const parsed = parseHandoff(text);
    if (state.meta && state.meta.episode !== parsed.meta.episode && state.items.length &&
        !confirm(`Replace the loaded episode "${state.meta.episode}" (and its progress) with "${parsed.meta.episode}"?`)) return;
    const same = state.meta && state.meta.episode === parsed.meta.episode;
    state.items = same ? mergeItems(state.items, parsed.items) : parsed.items;
    state.meta = parsed.meta;
    state.warnings = parsed.warnings;
    state.open.clear();
    if (!state.settings.dirCharacters || !state.settings.dirPanels || state.settings.dirsEpisode !== parsed.meta.episode) {
      state.settings.dirCharacters = dirFromHandoff(parsed.meta.refsDir) || `${BASE_DIR}/04_visual/refs`;
      state.settings.dirPanels = dirFromHandoff(parsed.meta.panelsDir) || `${BASE_DIR}/05_panels/${parsed.meta.episode}`;
      state.settings.dirsEpisode = parsed.meta.episode;
      $('s-dir-characters').value = state.settings.dirCharacters;
      $('s-dir-panels').value = state.settings.dirPanels;
      saveSettings();
    }
    saveData();
    msg.textContent = `Loaded ${parsed.items.length} items from ${source}.`;
    log(`Loaded ${parsed.meta.episode} from ${source}: ${byKind('character').length} character sheets, ${byKind('panel').length} panels${parsed.warnings.length ? `, ${parsed.warnings.length} warning(s)` : ''}.`, parsed.warnings.length ? 'warn' : 'ok');
    renderAll();
    importSavedFromFolder(false); // silently, only when folder access is already granted
    $('loader').open = false;
    scheduleAutoRun(source);
  } catch (e) {
    msg.textContent = `Could not load: ${e.message}`;
    log(`Load failed (${source}): ${e.message}`, 'error');
  }
}
async function loadFromUrl() {
  const url = $('url').value.trim();
  if (!url) return;
  state.settings.fileUrl = url; saveSettings();
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await loadText(await res.text(), url);
  } catch (e) {
    const allowed = await chrome.extension.isAllowedFileSchemeAccess();
    $('load-msg').textContent = allowed
      ? `Could not read ${url}: ${e.message}. Check the path (case-sensitive; spaces must be written %20).`
      : 'Chrome blocks file:// access. Enable "Allow access to file URLs" for this extension at chrome://extensions, or use the file picker.';
    log(`file:// load failed: ${e.message}`, 'error');
  }
}
function renderWarnings() {
  $('warnings').innerHTML = state.warnings.slice(0, 50).map((w) => `<li>${esc(w)}</li>`).join('');
}
async function renderFileAccess() {
  const ok = await chrome.extension.isAllowedFileSchemeAccess();
  $('file-access').textContent = ok
    ? 'file:// access is enabled.'
    : 'file:// access is OFF. Use the file picker or drag-drop, or enable "Allow access to file URLs" at chrome://extensions.';
}

// ---------------------------------------------------------------- queue
async function buildJob(item, runId) {
  const s = state.settings;
  const refs = [];
  for (const name of item.referenceTargets || []) {
    const rec = await assetGet(name);
    if (!rec) throw new Error(`Reference ${name} disappeared from the cache.`);
    refs.push({ name: name.split('/').pop(), type: rec.blob.type, dataUrl: await blobToDataUrl(rec.blob) });
  }
  return {
    runId, target: item.key, autoAgree: s.autoAgree !== false, refs, refTimeoutMs: s.refTimeoutSec * 1000,
    prompt: refs.length && s.refPrefix ? `${s.refPrefix.trim()} ${item.prompt}` : item.prompt, aspect: item.aspect, aspectLabels: parseAspectMap(s.aspectMap)[item.aspect] || [],
    mode: s.mode.trim(), outputs: s.outputs.trim(),
    requireAspect: s.requireAspect, wantPng: /\.png$/i.test(item.fileName || ''),
    timeoutMs: s.timeoutSec * 1000, stableMs: s.stableSec * 1000,
  };
}
async function waitWhilePaused() {
  while (state.q.paused && !state.q.stopping) await sleep(250);
}
function runOnce(item) {
  const runId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  return new Promise((resolve) => {
    let guard;
    const finish = (r) => { clearTimeout(guard); if (activeRun && activeRun.runId === runId) activeRun = null; resolve(r); };
    const refMs = (item.referenceTargets || []).length * (state.settings.refTimeoutSec * 3000 + 10000);
    guard = setTimeout(() => finish({ error: 'No response from the Flow tab (watchdog).' }), state.settings.timeoutSec * 1000 + 45000 + refMs);
    activeRun = { runId, itemId: item.id, resolve: finish };
    buildJob(item, runId)
      .then((job) => sendToFlow({ type: 'RUN_JOB', job }))
      .catch((e) => ({ ok: false, error: e.message }))
      .then((r) => {
        if (!r.ok || (r.data && r.data.ok === false)) finish({ error: r.error || (r.data && r.data.error) || 'Could not start the job.' });
      });
  });
}
const basename = (p) => String(p).split(/[\\/]/).pop();

// ---- "save to a folder I choose": File System Access API (exact names, no other extension can interfere)
const idb = () => new Promise((res, rej) => {
  const q = indexedDB.open('wt-flow-runner', 2);
  q.onupgradeneeded = () => {
    const db = q.result;
    if (!db.objectStoreNames.contains('kv')) db.createObjectStore('kv');
    if (!db.objectStoreNames.contains('assets')) db.createObjectStore('assets', { keyPath: 'name' });
  };
  q.onsuccess = () => res(q.result);
  q.onerror = () => rej(q.error);
});
async function idbGet(key) {
  const db = await idb();
  return new Promise((res, rej) => { const r = db.transaction('kv').objectStore('kv').get(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
}
async function idbSet(key, val) {
  const db = await idb();
  return new Promise((res, rej) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(val, key); tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error); });
}

// ---- generated-asset cache (IndexedDB): the bytes of every generated image, for re-attaching as references
state.assets = new Map(); // file name -> { name, size, type, source, savedAt, blob, url }
const idbReq = (store, mode, fn) => idb().then((db) => new Promise((res, rej) => {
  const tx = db.transaction(store, mode);
  const r = fn(tx.objectStore(store));
  tx.oncomplete = () => res(r && r.result);
  tx.onerror = () => rej(tx.error);
}));
const assetGet = (name) => idbReq('assets', 'readonly', (s) => s.get(name));
async function loadAssets() {
  for (const a of state.assets.values()) URL.revokeObjectURL(a.url);
  state.assets.clear();
  const all = (await idbReq('assets', 'readonly', (s) => s.getAll())) || [];
  for (const rec of all) state.assets.set(rec.name, { ...rec, url: URL.createObjectURL(rec.blob) });
  renderAssets(); refreshRefs();
}
async function putAsset(name, blob, source, assetId) {
  const rec = { name, blob, type: blob.type, size: blob.size, source, assetId, savedAt: Date.now() };
  await idbReq('assets', 'readwrite', (s) => s.put(rec));
  const old = state.assets.get(name);
  if (old) URL.revokeObjectURL(old.url);
  state.assets.set(name, { ...rec, url: URL.createObjectURL(blob) });
  renderAssets(); refreshRefs();
}
async function deleteAsset(name) {
  await idbReq('assets', 'readwrite', (s) => s.delete(name));
  const a = state.assets.get(name);
  if (a) URL.revokeObjectURL(a.url);
  state.assets.delete(name);
  renderAssets(); refreshRefs();
}
async function clearAssets() {
  await idbReq('assets', 'readwrite', (s) => s.clear());
  for (const a of state.assets.values()) URL.revokeObjectURL(a.url);
  state.assets.clear();
  renderAssets(); refreshRefs();
}
const blobToDataUrl = (blob) => new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => rej(fr.error); fr.readAsDataURL(blob); });
/** Keep the cache true to the name: a "*.png" reference must really be a PNG. */
async function normalizeToName(blob, name) {
  if (/\.png$/i.test(name) && blob.type !== 'image/png') {
    const bmp = await createImageBitmap(blob);
    const canvas = new OffscreenCanvas(bmp.width, bmp.height);
    canvas.getContext('2d').drawImage(bmp, 0, 0);
    return canvas.convertToBlob({ type: 'image/png' });
  }
  return blob;
}
async function manualUpload(file, targetName) {
  const name = targetName || file.name;
  try {
    const blob = await normalizeToName(file, name);
    await putAsset(name, blob, 'manual', 'manual');
    log(`Reference image ${name} added to the cache by hand (${blob.size} bytes).`, 'ok');
  } catch (e) { log(`Could not add ${name}: ${e.message}`, 'error'); }
}
async function cacheResult(item, r) {
  try {
    let dataUrl = r.dataUrl;
    if (!dataUrl) {
      const f = await sendToFlow({ type: 'FETCH_DATA_URL', src: r.imageUrl, wantPng: /\.png$/i.test(item.fileName) });
      if (!f.ok || !f.data || !f.data.ok) throw new Error((f.data && f.data.error) || f.error);
      dataUrl = f.data.dataUrl;
    }
    const blob = await (await fetch(dataUrl)).blob();
    await putAsset(item.assetKey || item.fileName, blob, 'generated', item.id);
    log(`Cached ${item.fileName} (${blob.size} bytes) for re-attaching as a reference`, 'info', item.key);
  } catch (e) { log(`Could not cache ${item.fileName}: ${e.message}`, 'warn', item.key); }
}
const missingRefs = (item) => (item.referenceTargets || []).filter((n) => !state.assets.has(n));
/** Live readiness of one reference target. */
function refStatus(name) {
  const a = state.assets.get(name);
  if (a) return { label: 'Ready', cls: 'Ready', url: a.url };
  const producer = state.items.find((i) => (i.assetKey || i.fileName) === name);
  if (!producer) return { label: 'Missing', cls: 'Missing' };
  if (producer.status === 'Completed') return { label: 'Saved on disk - press "Load saved images from folder" or Upload', cls: 'Missing' };
  if (producer.status === 'Failed') return { label: 'Failed', cls: 'Failed' };
  if (producer.status === 'Blocked') return { label: 'Blocked', cls: 'Blocked' };
  return { label: producer.kind === 'character' ? 'Pending Stage 1' : 'Pending Stage 2', cls: 'Pending' };
}
function refsHtml(i) {
  if (!i.requiresReference) return '<span class="lbl">Attach in Flow:</span> <span class="ref">None</span>';
  return `<span class="lbl">Attach in Flow:</span> ${i.referenceTargets.map((n) => {
    const st = refStatus(n);
    return `<span class="ref ref-${st.cls}">${st.url ? `<img class="ref-thumb" src="${st.url}" alt="">` : ''}<span>${esc(n)}</span> <b>${esc(st.label)}</b>
      <button class="mini" data-act="upload-ref" data-name="${esc(n)}" title="Use your own image for this reference">Upload</button></span>`;
  }).join(' ')}`;
}
function refreshRefs() {
  for (const el of document.querySelectorAll('.item [data-f="refs"]')) {
    const i = state.items.find((x) => x.id === el.closest('.item').dataset.id);
    if (i) el.innerHTML = refsHtml(i);
  }
}
function renderAssets() {
  $('n-assets').textContent = state.assets.size;
  const list = [...state.assets.values()].sort((a, b) => a.name.localeCompare(b.name));
  $('asset-list').innerHTML = list.length ? list.map((a) => `
    <div class="asset" data-name="${esc(a.name)}"><img src="${a.url}" alt=""><div class="grow"><b>${esc(a.name)}</b><br>${(a.size / 1024).toFixed(0)} KB · ${esc(a.source)}</div>
    <button class="mini danger" data-act="del-asset" data-name="${esc(a.name)}">Delete</button></div>`).join('') : '<div class="hint">Nothing cached yet.</div>';
}

async function folderPermission() {
  const h = await idbGet('saveDir').catch(() => null);
  if (!h) return { handle: null, perm: 'none' };
  return { handle: h, perm: await h.queryPermission({ mode: 'readwrite' }).catch(() => 'denied') };
}
/** needAccess: may show Chrome's permission prompt (only works right after a click). */
async function folderHandle(needAccess) {
  let { handle, perm } = await folderPermission();
  if (!handle) throw new Error('No save folder chosen. Click "Choose folder…" in Settings.');
  if (perm !== 'granted' && needAccess) perm = await handle.requestPermission({ mode: 'readwrite' }).catch(() => 'denied');
  if (perm !== 'granted') throw new Error('Folder access was not granted. Press Start All (or Start now) and allow access to the folder.');
  return handle;
}
async function updateFolderLabel() {
  const { handle, perm } = await folderPermission();
  $('folder-label').textContent = handle
    ? `Folder chosen: ${handle.name || '(browser storage)'} (${perm === 'granted' ? 'access granted' : 'will ask for access when you press Start'}). Pick your Webtoon-Automation folder.`
    : 'No folder chosen yet.';
}
/** Read the reference images that already exist in the chosen project folder into the cache (no Flow, no drawing). */
async function importSavedFromFolder(ask) {
  try {
    const root = await folderHandle(ask);
    const wanted = new Set();
    for (const i of state.items) for (const k of i.referenceTargets || []) wanted.add(k);
    let added = 0; const missing = [];
    for (const key of wanted) {
      if (state.assets.has(key)) continue;
      const parts = key.includes('/')
        ? [...BASE_DIR.split('/').slice(1), '05_panels', ...key.split('/')]
        : [...sanitizeDir(state.settings.dirCharacters).split('/').filter((p) => p !== 'Webtoon-Automation'), key];
      try {
        let dir = root;
        for (const p of parts.slice(0, -1)) dir = await dir.getDirectoryHandle(p);
        const file = await (await dir.getFileHandle(parts[parts.length - 1])).getFile();
        if (!file.size) throw new Error('empty');
        await putAsset(key, await normalizeToName(file, key), 'folder', 'folder');
        added++;
      } catch { missing.push(key); }
    }
    log(`Loaded ${added} reference image(s) from the folder${missing.length ? `; not found there: ${missing.join(', ')}` : ''}.`, missing.length ? 'warn' : 'ok');
  } catch (e) { log(`Could not load images from the folder: ${e.message}`, 'warn'); }
}
async function chooseFolder() {
  try {
    const h = await window.showDirectoryPicker({ mode: 'readwrite', id: 'webtoon-flow' });
    await idbSet('saveDir', h);
    log(`Save folder set to "${h.name}".`, 'ok');
  } catch (e) {
    if (e.name !== 'AbortError') log(`Could not choose a folder: ${e.message}`, 'error');
  }
  updateFolderLabel();
}
async function saveToFolder(item, r, filename) {
  const root = await folderHandle(true);
  let dataUrl = r.dataUrl;
  if (!dataUrl) {
    const f = await sendToFlow({ type: 'FETCH_DATA_URL', src: r.imageUrl, wantPng: /\.png$/i.test(filename) });
    if (!f.ok || !f.data || !f.data.ok) throw new Error(`Could not read the image to save it: ${(f.data && f.data.error) || f.error}`);
    dataUrl = f.data.dataUrl;
  }
  const blob = await (await fetch(dataUrl)).blob();
  const parts = filename.split('/');
  const name = parts.pop();
  const rel = parts[0] === 'Webtoon-Automation' ? parts.slice(1) : parts; // the chosen folder IS the project folder
  let dir = root;
  for (const p of rel) dir = await dir.getDirectoryHandle(p, { create: true });
  const fh = await dir.getFileHandle(name, { create: true });
  const w = await fh.createWritable();
  await w.write(blob);
  await w.close();
  const size = (await fh.getFile()).size;
  if (!size) throw new Error(`Wrote an empty file: ${name}`);
  return { path: `${root.name || 'folder'}/${[...rel, name].join('/')}`, bytes: size, name };
}

/** Save the generated image and verify it is on disk under the exact requested name. */
async function downloadResult(item, r) {
  if (state.settings.saveMode === 'folder') return saveToFolder(item, r, targetFilename(item));
  const filename = downloadsPath(item);
  const wantExt = (filename.split('.').pop() || '').toLowerCase().replace('jpeg', 'jpg');
  const gotExt = extFromMime(r.dataUrl, wantExt);
  if (gotExt !== wantExt) log(`Image is ${gotExt} but the file name says .${wantExt}; saving under the handoff name anyway.`, 'warn', item.key);
  const attempt = (url) => chrome.runtime.sendMessage({ type: 'DOWNLOAD', url, filename });
  let res = await attempt(r.dataUrl || r.imageUrl).catch((e) => ({ ok: false, error: e.message }));
  if (!res.ok && r.imageUrl) {
    log(`Direct download failed (${res.error}); retrying through the Flow page session.`, 'warn', item.key);
    const f = await sendToFlow({ type: 'FETCH_DATA_URL', src: r.imageUrl, wantPng: /\.png$/i.test(filename) }).catch((e) => ({ ok: false, error: e.message }));
    if (f.ok && f.data && f.data.ok) res = await attempt(f.data.dataUrl).catch((e) => ({ ok: false, error: e.message }));
  }
  if (!res.ok) throw new Error(res.error || 'Download failed.');
  if (!res.exists || !(res.bytes > 0)) throw new Error(`Chrome reports the file is missing or empty (${res.path}).`);
  const want = basename(filename), got = basename(res.path);
  const stem = (n) => n.replace(/\.[^.]+$/, '');
  if (got !== want && stem(got) === stem(want)) {
    throw new Error(`Chrome saved "${got}" instead of "${want}": the image data is not PNG, so Chrome corrected the extension, and the extension could not read the image bytes to convert them (${res.path}). Use Settings → Save images to → "A folder I choose", or send me the "page cannot read the image" log line.`);
  }
  if (got !== want) {
    throw new Error(`Chrome saved the file as "${got}" (${res.path}), not "${want}". Another extension is renaming downloads: disable other Flow/download extensions, or set Settings → Save images to → "A folder I choose".`);
  }
  return { path: res.path, bytes: res.bytes, name: want };
}

async function runItem(item) {
  const s = state.settings;
  // Attach in Flow: never generate without the reference images the prompt says it matches
  let miss = missingRefs(item);
  const savedNotLoaded = (n) => { const p = state.items.find((i) => (i.assetKey || i.fileName) === n); return p && p.status === 'Completed'; };
  if (miss.length && (s.onMissingRef === 'pause' || miss.some(savedNotLoaded))) {
    state.q.paused = true; updateControls();
    const msg = `Paused: ${item.key} needs ${miss.join(', ')}, which is not available yet. Upload it (Upload next to the reference), then press Resume.`;
    setQueueMsg(msg); log(msg, 'warn', item.key);
    await waitWhilePaused();
    if (state.q.stopping) return 'cancelled';
    miss = missingRefs(item);
  }
  if (miss.length) {
    const msg = `Blocked (Missing Reference: ${miss.join(', ')})`;
    setStatus(item, 'Blocked', msg);
    log(msg, 'warn', item.key);
    return 'blocked';
  }
  setStatus(item, 'Generating');
  item.savedPath = ''; item.savedName = '';
  state.q.currentId = item.id;
  itemEl(item.id)?.scrollIntoView({ block: 'nearest' });
  log(`Generating (${item.aspect || 'no aspect'}${item.requiresReference ? `, ${item.referenceTargets.length} reference(s)` : ''}) -> ${state.settings.saveMode === 'folder' ? targetFilename(item) : downloadsPath(item)}`, 'info', item.key);

  let last = '', result = null;
  for (let attempt = 0; attempt <= s.retries; attempt++) {
    if (state.q.stopping) break;
    item.attempts++;
    if (attempt) { log(`Retry ${attempt}/${s.retries}…`, 'warn', item.key); await sleep(3000); }
    setQueueMsg(`Generating ${item.key}${attempt ? ` (retry ${attempt})` : ''}…`);
    const r = await runOnce(item);
    if (r.cancelled) { setStatus(item, 'Pending'); return 'cancelled'; }
    if (!r.error) { result = r; break; }
    last = r.error;
    log(r.error, 'error', item.key);
    // After a timeout the first generation may still be running in Flow; retrying would create a duplicate.
    if (/^Timed out/.test(r.error)) { log('Not retrying after a timeout (it could duplicate a generation that is still running).', 'warn', item.key); break; }
  }
  if (state.q.stopping && !result) { setStatus(item, 'Pending'); return 'cancelled'; }
  if (!result) { setStatus(item, 'Failed', last); return 'failed'; }

  log(`Rendered: ${result.images} image(s), best ${result.width}x${result.height}.`, 'info', item.key);
  if (!result.dataUrl && result.imageUrl) { // the page could not read it (cross-origin): the service worker can
    const rr = await chrome.runtime.sendMessage({ type: 'FETCH_IMAGE', url: result.imageUrl, wantPng: /\.png$/i.test(item.fileName || '') }).catch((e) => ({ ok: false, error: e.message }));
    if (rr && rr.ok) { result.dataUrl = rr.dataUrl; result.imageUrl = null; log('Read the image through the extension (the page itself was not allowed to).', 'info', item.key); }
    else log(`The extension could not read the image either (${rr && rr.error}); falling back to a direct Chrome download.`, 'warn', item.key);
  }
  await cacheResult(item, result);
  setStatus(item, 'Downloading');
  setQueueMsg(`Downloading ${item.key}…`);
  try {
    const saved = await downloadResult(item, result);
    item.savedPath = saved.path; item.savedName = saved.name;
    setStatus(item, 'Completed');
    log(`Saved ${saved.path} (${saved.bytes} bytes) at ${new Date().toISOString()}`, 'ok', item.key);
    return 'completed';
  } catch (e) {
    setStatus(item, 'Failed', `Download failed: ${e.message}`);
    log(`Download failed: ${e.message}`, 'error', item.key);
    return 'failed';
  }
}

/**
 * Strict two-stage pipeline. `flat` is [{id, no}] ordered with every Stage 1 (character) item before
 * any Stage 2 (panel) item. An item only counts as done after its file is saved.
 */
async function runPipeline(flat, label, { gate = false } = {}) {
  const q = state.q;
  if (q.running) return;
  q.running = true; q.paused = false; q.stopping = false; q.stage = 0;
  log(`${label}: ${flat.length} item(s) queued.`);
  updateControls();
  // references that are already saved on disk but not in the cache yet: read them from the chosen folder first
  if (state.items.some((i) => missingRefs(i).length)) await importSavedFromFolder(label !== 'Auto-run');
  let n = 0, note = '';
  for (let k = 0; k < flat.length; k++) {
    await waitWhilePaused();
    if (q.stopping) break;
    const { id, no } = flat[k];
    if (no !== q.stage) {
      if (no === 2 && gate) {
        const unsaved = byKind('character').filter((i) => i.status !== 'Completed');
        if (k > 0 && !state.settings.autoPanels) { note = 'Stage 1 finished. "Auto-start Panels" is off: press Start All to run the panels.'; break; }
        if (unsaved.length) { note = `Panels not started: ${unsaved.length} character sheet(s) are not saved yet (${unsaved.slice(0, 3).map((i) => i.key).join(', ')}${unsaved.length > 3 ? '…' : ''}).`; break; }
      }
      q.stage = no;
      if (no === 2 && k > 0) log('Stage 1 complete. Starting Stage 2: Panels.', 'ok');
      renderStages();
    }
    const item = state.items.find((i) => i.id === id);
    if (!item) continue;
    const res = await runItem(item);
    n++;
    if (res === 'cancelled' || q.stopping) break;
    if (res === 'blocked') continue;
    if (k < flat.length - 1) {
      for (let s = state.settings.delaySec; s > 0 && !q.stopping; s--) {
        await waitWhilePaused();
        setQueueMsg(`Cooldown ${s}s before the next prompt (${n}/${flat.length} done)…`);
        await sleep(1000);
      }
    }
  }
  const stopped = q.stopping;
  q.running = false; q.paused = false; q.stopping = false; q.currentId = null; q.stage = 0;
  const failed = state.items.filter((i) => i.status === 'Failed').length;
  setQueueMsg(stopped ? 'Stopped.' : note || (failed ? `Finished with ${failed} failed item(s). Use Retry Failed.` : 'Finished.'));
  log(stopped ? 'Queue stopped.' : note || 'Queue finished.', stopped || note || failed ? 'warn' : 'ok');
  renderProgress(); updateControls();
}
const toFlat = (ids) => ids.map((id) => ({ id, no: state.items.find((i) => i.id === id).kind === 'character' ? 1 : 2 }));
/** A reference must be generated before the items that attach it (stable otherwise). */
function depOrder(list) {
  const byName = new Map(list.map((i) => [i.assetKey || i.fileName, i]));
  const out = [], seen = new Set();
  const visit = (it) => {
    if (seen.has(it.id)) return;
    seen.add(it.id);
    for (const n of it.referenceTargets || []) { const d = byName.get(n); if (d && d.kind === it.kind) visit(d); }
    out.push(it);
  };
  list.forEach(visit);
  return out;
}
function pendingIds(scope, statuses = ['Pending', 'Blocked']) {
  const list = state.items
    .filter((i) => (scope === 'all' || i.kind === scope) && statuses.includes(i.status))
    .sort((a, b) => (a.kind === b.kind ? a.order - b.order : a.kind === 'character' ? -1 : 1));
  return depOrder(list).map((i) => i.id);
}
async function startAll(label = 'Start All') {
  cancelAutoRun();
  if (state.settings.saveMode === 'folder') {
    try { await folderHandle(true); } catch (e) { setQueueMsg(e.message); log(e.message, 'error'); return; }
  }
  const ids = pendingIds(state.settings.scope);
  if (!ids.length && state.settings.scope === 'all' && !state.items.some((i) => i.status !== 'Completed')) { setQueueMsg('Everything is already saved.'); return; }
  if (!ids.length) { setQueueMsg('Nothing pending in this scope. Use Reset on an item, or Retry Failed.'); return; }
  runPipeline(toFlat(ids), label, { gate: state.settings.scope === 'all' });
}

// ---- auto-run after a file is loaded (with a short, cancellable countdown)
let autoTimer = null;
function cancelAutoRun(reason) {
  const wasShown = !$('auto-banner').hidden;
  if (!autoTimer && !wasShown) return;
  clearInterval(autoTimer); autoTimer = null;
  $('auto-banner').hidden = true;
  if (reason) log(reason, 'warn');
}
async function scheduleAutoRun(source) {
  cancelAutoRun();
  if (!state.settings.autoRunOnLoad || state.q.running) return;
  const ids = pendingIds(state.settings.scope);
  if (!ids.length) { log('Auto-run: nothing is pending in this file.'); return; }
  // saved images that are not in the cache yet: wait for the user to load them instead of blocking every panel
  const unloaded = [...new Set(state.items.filter((i) => ids.includes(i.id)).flatMap(missingRefs))]
    .filter((n) => { const p = state.items.find((i) => (i.assetKey || i.fileName) === n); return p && p.status === 'Completed'; });
  if (unloaded.length) {
    const msg = `Auto-run waiting: ${unloaded.length} saved reference image(s) are not loaded yet. Press "Load saved images from folder" (Choose folder… first) or "Upload reference image(s)…", then press Start All.`;
    log(msg, 'warn'); setQueueMsg(msg); return;
  }
  await refreshConnection();
  if (!state.tabId) { log('Auto-run skipped: no Flow tab is open. Open Flow, then press Start All.', 'warn'); setQueueMsg('Auto-run skipped: open Flow, then press Start All.'); return; }
  if (!state.screenOk) { log("Auto-run skipped: the Flow tab is not on the project's main prompt screen (All media). Go there, then press Start All.", 'warn'); setQueueMsg('Auto-run skipped: wrong Flow screen. Open All media, then press Start All.'); return; }
  if (state.settings.saveMode === 'folder') {
    const { handle, perm } = await folderPermission();
    if (!handle || perm !== 'granted') {
      const msg = !handle ? 'Choose a save folder in Settings, then press Start now.' : 'Folder access needs one click: press Start now.';
      log(`Auto-run waiting: ${msg}`, 'warn');
      $('auto-text').textContent = msg;
      $('auto-banner').hidden = false;
      return;
    }
  }
  let left = Math.max(0, state.settings.autoRunDelaySec | 0);
  const text = () => `Auto-start in ${left}s: ${ids.length} item(s) from ${source}`;
  log(`Auto-run armed (${ids.length} item(s)); starting in ${left}s unless cancelled.`);
  if (left === 0) { startAll('Auto-run'); return; }
  $('auto-text').textContent = text();
  $('auto-banner').hidden = false;
  autoTimer = setInterval(() => {
    left--;
    if (left <= 0) { clearInterval(autoTimer); autoTimer = null; $('auto-banner').hidden = true; startAll('Auto-run'); }
    else $('auto-text').textContent = text();
  }, 1000);
}

function stopQueue() {
  cancelAutoRun();
  const q = state.q;
  if (!q.running) return;
  q.stopping = true; q.paused = false;
  setQueueMsg('Stopping…');
  const cur = activeRun;
  if (cur) {
    sendToFlow({ type: 'CANCEL_JOB', runId: cur.runId }).catch(() => {});
    // the content script answers with 'cancelled'; never hang if it does not
    setTimeout(() => { if (activeRun === cur) cur.resolve({ cancelled: true }); }, 3000);
  }
}

// events coming from the content script, and tab changes from the service worker
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'TABS_CHANGED') { refreshConnection(); return; }
  if (msg.type !== 'FLOW_EVENT' || !activeRun || msg.runId !== activeRun.runId) return;
  const item = state.items.find((i) => i.id === activeRun.itemId);
  const key = item ? item.key : '';
  switch (msg.event) {
    case 'log': log(msg.msg, msg.level, key); break;
    case 'submitted': log(`Submitted. Matched: ${Object.entries(msg.matched || {}).map(([k, v]) => `${k}=${v}`).join('; ')}`, 'info', key); break;
    case 'progress': setQueueMsg(`Running ${key}: ${msg.images} new image(s) so far, ${Math.round(msg.elapsed / 1000)}s…`); break;
    case 'done': activeRun.resolve({ images: msg.images, imageUrl: msg.imageUrl, dataUrl: msg.dataUrl, width: msg.width, height: msg.height }); break;
    case 'error': activeRun.resolve({ error: msg.error }); break;
    case 'cancelled': activeRun.resolve({ cancelled: true }); break;
  }
});

// ---------------------------------------------------------------- UI wiring
function renderAll() { renderProgress(); renderLists(); renderWarnings(); }

function bindUi() {
  document.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t === b));
    document.querySelectorAll('.pane').forEach((p) => p.classList.toggle('active', p.id === `tab-${b.dataset.tab}`));
  }));

  $('file').addEventListener('change', async (e) => {
    const f = e.target.files[0];
    if (f) await loadText(await f.text(), f.name);
    e.target.value = '';
  });
  const drop = $('drop');
  ['dragenter', 'dragover'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', async (e) => {
    const f = e.dataTransfer.files[0];
    if (f) await loadText(await f.text(), f.name);
  });
  $('load-url').addEventListener('click', loadFromUrl);
  $('url').addEventListener('keydown', (e) => { if (e.key === 'Enter') loadFromUrl(); });

  document.querySelectorAll('.search').forEach((el) => el.addEventListener('input', () => { state.filters[el.dataset.kind].q = el.value; renderLists(); }));
  document.querySelectorAll('.status-filter').forEach((el) => el.addEventListener('change', () => { state.filters[el.dataset.kind].status = el.value; renderLists(); }));

  for (const kind of ['character', 'panel']) {
    const root = $(`list-${kind}`);
    const itemOf = (el) => { const card = el.closest('.item'); return card && state.items.find((i) => i.id === card.dataset.id); };
    root.addEventListener('click', (e) => {
      const up = e.target.closest('button[data-act="upload-ref"]');
      if (up) { $('ref-file').dataset.target = up.dataset.name; $('ref-file').click(); return; }
      const btn = e.target.closest('button[data-act]');
      const item = btn && itemOf(btn);
      if (!item) return;
      const card = btn.closest('.item');
      switch (btn.dataset.act) {
        case 'run':
          if (!state.q.running) {
            // Chrome only shows the folder-access prompt right after a click, so ask now (not after the image is generated)
            (async () => {
              if (state.settings.saveMode === 'folder') {
                try { await folderHandle(true); } catch (e) { setQueueMsg(e.message); log(e.message, 'error'); return; }
              }
              runPipeline(toFlat([item.id]), `Run single ${item.key}`);
            })();
          }
          break;
        case 'edit':
          if (state.open.has(item.id)) state.open.delete(item.id); else state.open.add(item.id);
          card.querySelector('.item-body').hidden = !state.open.has(item.id);
          btn.textContent = state.open.has(item.id) ? 'Close' : 'Edit';
          break;
        case 'reset':
          if (!isBusyStatus(item.status)) setStatus(item, 'Pending');
          break;
        case 'revert':
          item.prompt = item.sourcePrompt; item.aspect = item.sourceAspect;
          card.innerHTML = cardHtml(item); saveData(); updateControls();
          break;
      }
    });
    root.addEventListener('input', (e) => {
      const item = e.target.dataset.act === 'prompt' && itemOf(e.target);
      if (!item) return;
      item.prompt = e.target.value;
      e.target.closest('label').querySelector('[data-f="plen"]').textContent = `Prompt (${item.prompt.length} chars)`;
      refreshChips(item);
      saveData();
    });
    root.addEventListener('change', (e) => {
      const item = e.target.dataset.act === 'aspect' && itemOf(e.target);
      if (!item) return;
      item.aspect = e.target.value; refreshChips(item); saveData();
    });
  }

  $('b-start').addEventListener('click', () => startAll());
  $('h-start').addEventListener('click', () => startAll());
  $('auto-go').addEventListener('click', () => startAll('Auto-run'));
  // reference images: per-target upload, cache panel
  $('ref-file').addEventListener('change', async (e) => {
    const f = e.target.files[0], target = e.target.dataset.target;
    if (f && target) await manualUpload(f, target);
    e.target.value = '';
  });
  $('ref-file-multi').addEventListener('change', async (e) => {
    // a picked file fills the reference slot with the same file name (panels are stored as ep01/panel_061.png)
    const keys = new Map();
    for (const i of state.items) for (const k of i.referenceTargets || []) {
      const b = k.split('/').pop();
      keys.set(b, keys.has(b) ? null : k); // null = ambiguous, keep the plain name
    }
    for (const f of e.target.files) await manualUpload(f, keys.get(f.name) || f.name);
    e.target.value = '';
  });
  $('b-ref-folder').addEventListener('click', () => importSavedFromFolder(true));
  $('b-ref-upload').addEventListener('click', () => $('ref-file-multi').click());
  $('b-ref-clear').addEventListener('click', async () => { if (confirm('Delete every cached reference image?')) { await clearAssets(); log('Reference cache cleared.', 'warn'); } });
  $('asset-list').addEventListener('click', (e) => { const b = e.target.closest('[data-act="del-asset"]'); if (b) deleteAsset(b.dataset.name); });
  $('b-choose-folder').addEventListener('click', chooseFolder);
  $('h-stop').addEventListener('click', stopQueue);
  $('auto-cancel').addEventListener('click', () => { cancelAutoRun('Auto-run cancelled.'); setQueueMsg('Auto-run cancelled. Press Start All when ready.'); });
  $('b-retry').addEventListener('click', () => {
    const ids = pendingIds(state.settings.scope, ['Failed', 'Blocked']);
    if (ids.length) runPipeline(toFlat(ids), 'Retry Failed', { gate: state.settings.scope === 'all' });
  });
  $('b-pause').addEventListener('click', () => { state.q.paused = true; setQueueMsg('Paused. The current prompt finishes first.'); log('Paused.', 'warn'); updateControls(); });
  $('b-resume').addEventListener('click', () => { state.q.paused = false; setQueueMsg('Resumed.'); log('Resumed.'); updateControls(); });
  $('b-stop').addEventListener('click', stopQueue);
  $('b-reset').addEventListener('click', () => {
    if (!confirm('Set every item back to Pending?')) return;
    state.items.forEach((i) => { i.status = 'Pending'; i.error = ''; i.attempts = 0; });
    saveData(); renderAll(); log('All statuses reset to Pending.', 'warn');
  });
  async function clearEverything() {
    if (state.q.running) return;
    if (!confirm('Clear all data? This removes the loaded episode, statuses, edits and cached reference images from this extension. Files already saved to disk are not touched. You can then load the handoff file again.')) return;
    cancelAutoRun();
    state.meta = null; state.items = []; state.warnings = []; state.open.clear();
    await chrome.storage.local.remove('wt:data');
    try { await clearAssets(); await refreshRefs(); } catch (_) {}
    renderAll(); renderAssets && renderAssets();
    $('file').value = ''; // so choosing the same file again fires a change event
    $('loader').open = true; $('load-msg').textContent = '';
    log('All data cleared. Load the handoff file again to start fresh.', 'warn');
  }
  $('b-clear').addEventListener('click', clearEverything);
  $('h-clear').addEventListener('click', clearEverything);
  $('b-probe').addEventListener('click', async () => {
    const out = $('probe-out');
    out.hidden = false; out.textContent = 'Probing…';
    const r = await sendToFlow({ type: 'PROBE' }).catch((e) => ({ ok: false, error: e.message }));
    out.textContent = r.ok ? JSON.stringify(r.data, null, 2) : `Failed: ${r.error}`;
    log(r.ok ? 'Probe complete (output is under the buttons).' : `Probe failed: ${r.error}`, r.ok ? 'info' : 'error');
  });
  $('b-options').addEventListener('click', async () => {
    const out = $('probe-out');
    out.hidden = false; out.textContent = 'Opening Flow settings…';
    const r = await sendToFlow({ type: 'LIST_OPTIONS' }).catch((e) => ({ ok: false, error: e.message }));
    out.textContent = r.ok ? JSON.stringify(r.data, null, 2) : `Failed: ${r.error}`;
    log(r.ok ? 'Listed Flow settings options (see output under the buttons).' : `Option listing failed: ${r.error}`, r.ok ? 'info' : 'error');
  });
  $('b-log-clear').addEventListener('click', () => { state.log = []; chrome.storage.local.set({ 'wt:log': [] }); renderLog(); });
  $('b-log-copy').addEventListener('click', async () => {
    await navigator.clipboard.writeText(state.log.map(logLine).join('\n'));
    $('b-log-copy').textContent = 'Copied'; setTimeout(() => { $('b-log-copy').textContent = 'Copy'; }, 1000);
  });

  const bindSetting = (id, key, type = 'text') => {
    const el = $(id);
    if (type === 'check') el.checked = state.settings[key]; else el.value = state.settings[key];
    el.addEventListener('input', () => {
      let v = type === 'check' ? el.checked : type === 'num' ? Number(el.value) : el.value;
      if (type === 'num') v = Math.min(+el.max, Math.max(+el.min, Number.isFinite(v) ? v : +el.min));
      state.settings[key] = v;
      if (key === 'delaySec') $('v-delay').textContent = v;
      saveSettings();
    });
  };
  bindSetting('s-delay', 'delaySec', 'num'); $('v-delay').textContent = state.settings.delaySec;
  bindSetting('s-timeout', 'timeoutSec', 'num');
  bindSetting('s-retries', 'retries', 'num');
  bindSetting('s-stable', 'stableSec', 'num');
  bindSetting('s-mode', 'mode');
  bindSetting('s-outputs', 'outputs');
  bindSetting('s-require-aspect', 'requireAspect', 'check');
  bindSetting('s-on-missing', 'onMissingRef');
  bindSetting('s-ref-timeout', 'refTimeoutSec', 'num');
  bindSetting('s-ref-prefix', 'refPrefix');
  bindSetting('s-auto-agree', 'autoAgree', 'check');
  bindSetting('s-chrome-in-project', 'chromeInProject', 'check');
  bindSetting('s-scope', 'scope');
  bindSetting('s-save-mode', 'saveMode');
  bindSetting('s-auto-run', 'autoRunOnLoad', 'check');
  bindSetting('s-auto-delay', 'autoRunDelaySec', 'num');
  bindSetting('s-auto-panels', 'autoPanels', 'check');
  bindSetting('s-dir-characters', 'dirCharacters');
  bindSetting('s-dir-panels', 'dirPanels');
  bindSetting('s-aspect-map', 'aspectMap');
  $('url').value = state.settings.fileUrl;
}

// ---------------------------------------------------------------- init
(async function init() {
  const stored = await chrome.storage.local.get(['wt:data', 'wt:settings', 'wt:log']);
  state.settings = { ...DEFAULT_SETTINGS, ...(stored['wt:settings'] || {}) };
  state.log = stored['wt:log'] || [];
  const d = stored['wt:data'];
  if (d && d.items) {
    state.meta = d.meta; state.items = d.items; state.warnings = d.warnings || [];
    const interrupted = state.items.filter((i) => ['Running', 'Generating', 'Downloading'].includes(i.status));
    interrupted.forEach((i) => { i.status = 'Pending'; i.error = 'Interrupted (panel closed or browser restarted).'; });
    if (interrupted.length) { log(`${interrupted.length} item(s) were interrupted last session and set back to Pending.`, 'warn'); saveData(); }
    $('loader').open = false;
  }
  bindUi();
  renderLog();
  renderAll();
  renderFileAccess();
  updateFolderLabel();
  loadAssets().catch((e) => log(`Could not read the reference cache: ${e.message}`, 'warn'));
  refreshConnection();
  setInterval(refreshConnection, 4000);
  window.addEventListener('pagehide', () => { if (state.meta) saveDataNow(); chrome.storage.local.set({ 'wt:log': state.log }); });
})();
