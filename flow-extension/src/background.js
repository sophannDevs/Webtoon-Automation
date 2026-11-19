// Service worker: opens the side panel, finds the Google Flow tab and relays messages to the content script.
const FLOW_URL = /^https:\/\/(flow\.google\.com|labs\.google)\//;

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});
chrome.runtime.onStartup.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});

/** Pick the tab to drive: the one the user pinned, else the active Flow tab, else any Flow tab. */
async function resolveTab(preferredId) {
  if (preferredId) {
    try {
      const t = await chrome.tabs.get(preferredId);
      if (t && FLOW_URL.test(t.url || '')) return t;
    } catch (_) { /* closed */ }
  }
  const flowTabs = (await chrome.tabs.query({ url: ['https://flow.google.com/*', 'https://labs.google/*'] }));
  if (!flowTabs.length) return null;
  return flowTabs.find((t) => t.active && t.currentWindow) || flowTabs.find((t) => t.active) || flowTabs[0];
}

async function sendToTab(tabId, payload) {
  try {
    return await chrome.tabs.sendMessage(tabId, payload);
  } catch (_) {
    // content script missing (tab opened before install / extension reload): inject and retry once
    await chrome.scripting.executeScript({ target: { tabId }, files: ['src/content.js'] });
    await new Promise((r) => setTimeout(r, 300));
    return await chrome.tabs.sendMessage(tabId, payload);
  }
}

// Our own downloads get the exact requested name (other extensions may still override it; the side panel checks).
let pendingName = null;
chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
  if (item.byExtensionId === chrome.runtime.id && pendingName) suggest({ filename: pendingName, conflictAction: 'overwrite' });
});

/** Download without any dialog and resolve only when Chrome reports the file fully saved. */
async function downloadAndWait({ url, filename, timeoutMs = 120000 }) {
  pendingName = filename;
  const id = await chrome.downloads.download({ url, filename, saveAs: false, conflictAction: 'overwrite' });
  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (fn, v) => { if (settled) return; settled = true; clearTimeout(timer); chrome.downloads.onChanged.removeListener(onChanged); fn(v); };
    const check = async () => {
      const [d] = await chrome.downloads.search({ id });
      if (!d) return finish(reject, new Error('Download disappeared.'));
      if (d.state === 'complete') return finish(resolve, { id, path: d.filename, bytes: d.fileSize || d.totalBytes || 0, exists: d.exists !== false });
      if (d.state === 'interrupted') return finish(reject, new Error(`Download interrupted: ${d.error || 'unknown'}`));
    };
    const onChanged = (delta) => {
      if (delta.id !== id) return;
      if ((delta.state && (delta.state.current === 'complete' || delta.state.current === 'interrupted')) || delta.error) check();
    };
    const timer = setTimeout(() => { chrome.downloads.cancel(id).catch(() => {}); finish(reject, new Error('Download timed out.')); }, timeoutMs);
    chrome.downloads.onChanged.addListener(onChanged);
    check(); // it may already have finished
  });
}

/** Debugger session for trusted mouse input: attached only for the few seconds one submit needs. */
const dbg = new Map(); // tabId -> safety timer
async function dbgDetach(tabId) {
  clearTimeout(dbg.get(tabId));
  dbg.delete(tabId);
  await chrome.debugger.detach({ tabId }).catch(() => {});
}

/** Read an image URL the page itself cannot fetch (cross-origin, no CORS headers). The service worker can, because the
 *  extension holds host permission. JPEG/WebP is re-encoded as real PNG when wantPng. Returns a data URL. */
async function fetchImage(url, wantPng) {
  const res = await fetch(url, { credentials: 'include' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  let blob = await res.blob();
  if (wantPng && blob.type !== 'image/png') {
    const bmp = await createImageBitmap(blob);
    const canvas = new OffscreenCanvas(bmp.width, bmp.height);
    canvas.getContext('2d').drawImage(bmp, 0, 0);
    blob = await canvas.convertToBlob({ type: 'image/png' });
  }
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return `data:${blob.type || 'application/octet-stream'};base64,${btoa(bin)}`;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && msg.type === 'FETCH_IMAGE') {
    fetchImage(msg.url, msg.wantPng).then((dataUrl) => sendResponse({ ok: true, dataUrl }), (e) => sendResponse({ ok: false, error: e.message }));
    return true;
  }
  if (msg && msg.type === 'DBG_ATTACH' && sender.tab) {
    const tabId = sender.tab.id;
    (async () => {
      await dbgDetach(tabId);
      await chrome.tabs.update(tabId, { active: true }).catch(() => {}); // a hidden tab has no layout to click on
      await chrome.debugger.attach({ tabId }, '1.3');
      dbg.set(tabId, setTimeout(() => dbgDetach(tabId), 30000));
      sendResponse({ ok: true, zoom: await chrome.tabs.getZoom(tabId).catch(() => 1) });
    })().catch((e) => sendResponse({ ok: false, error: e.message }));
    return true;
  }
  if (msg && msg.type === 'DBG_MOUSE' && sender.tab) {
    chrome.debugger.sendCommand({ tabId: sender.tab.id }, 'Input.dispatchMouseEvent', msg.params)
      .then(() => sendResponse({ ok: true }), (e) => sendResponse({ ok: false, error: e.message }));
    return true;
  }
  if (msg && msg.type === 'DBG_DETACH' && sender.tab) {
    dbgDetach(sender.tab.id).then(() => sendResponse({ ok: true }));
    return true;
  }
  if (msg && msg.type === 'DOWNLOAD') {
    downloadAndWait(msg).then((r) => sendResponse({ ok: true, ...r }), (e) => sendResponse({ ok: false, error: e.message }));
    return true;
  }
  if (!msg || msg.type !== 'TO_FLOW') return false; // FLOW_EVENT etc. are read directly by the side panel
  (async () => {
    const tab = await resolveTab(msg.tabId);
    if (!tab) return sendResponse({ ok: false, notOnFlow: true, error: 'No Google Flow tab (flow.google.com) is open.' });
    try {
      const res = await sendToTab(tab.id, msg.payload);
      sendResponse({ ok: true, tabId: tab.id, tabTitle: tab.title, data: res });
    } catch (e) {
      sendResponse({ ok: false, tabId: tab.id, error: `Cannot reach the Flow page: ${e.message}` });
    }
  })();
  return true;
});

// Tell the side panel when Flow tabs appear, navigate or close so its badge stays live.
const notify = () => chrome.runtime.sendMessage({ type: 'TABS_CHANGED' }).catch(() => {});
chrome.tabs.onUpdated.addListener((_id, info) => { if (info.status === 'complete' || info.url) notify(); });
chrome.tabs.onActivated.addListener(notify);
chrome.tabs.onRemoved.addListener(notify);
