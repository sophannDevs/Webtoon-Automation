/* Webtoon Flow Runner - content script (runs on https://flow.google.com/* and https://labs.google/*)
 *
 * Google Flow's DOM is not a public contract and changes without notice.
 * Everything that depends on it lives in SELECTORS below. If a step stops working,
 * open the side panel -> Queue & Logs -> "Probe Flow page" and edit this object.
 *
 * Matching rules used by the helpers:
 *   css   : list of CSS selectors, tried in order, first VISIBLE match wins
 *   text  : RegExp tested against an element's visible text / aria-label / title
 *   Both may be given: elements from `css` are filtered by `text`.
 */
(() => {
  if (window.__wtFlowRunner) return; // already injected (manifest + programmatic injection)
  window.__wtFlowRunner = true;

  // ====================================================================
  // SELECTORS - the single place to update when Google Flow changes
  // ====================================================================
  const SELECTORS = {
    // The prompt box. When several match, the lowest one on the page wins (Flow docks it at the bottom).
    promptInput: {
      css: [
        'textarea',
        '[role="textbox"][contenteditable="true"]',
        '[contenteditable="true"]',
        'input[type="text"]',
      ],
    },
    // The button that submits the prompt.
    generateButton: {
      css: [
        'button[aria-label*="generate" i]',
        'button[aria-label*="create" i]',
        'button[type="submit"]',
        'button',
      ],
      text: /^(generate|create|run|send|submit)\b|arrow_forward|arrow_upward|\bgenerate\b/i,
    },
    // Opens the panel/menu that holds aspect ratio, model and output count.
    settingsButton: {
      // Flow's trigger reads e.g. "Settings trigger 🍌 Nano Banana 2.1 crop_portrait x2". Keep this narrow:
      // a loose pattern once matched "Start generation" (it contains "ratio") and clicked it.
      css: ['button[aria-label*="trigger" i]', 'button'],
      text: /settings trigger|\bcrop_\w+\s+x[1-4]\b/i,
    },
    // The settings trigger itself shows the current value (e.g. "crop_portrait x2"); never treat it as an option.
    optionExclude: 'button[aria-label*="trigger" i]',
    // Anything clickable that can represent an option inside a menu / segmented control.
    optionElements: 'button, [role="option"], [role="menuitem"], [role="menuitemradio"], [role="radio"], [role="tab"], li, label, [tabindex]',
    // Where generated images show up. A NEW src here (compared with before submit) means a result.
    resultImages: [
      'img[src^="blob:"]',
      'img[src*="googleusercontent.com"]',
      'img[src*="storage.googleapis.com"]',
      'img[src^="data:image"]',
      'main img',
      'img',
    ],
    minResultSize: 120, // px: ignore icons / avatars smaller than this
    // "Still working" indicators.
    busy: ['[role="progressbar"]', '[aria-busy="true"]', 'progress', 'mat-progress-bar', 'mat-spinner'],
    busyText: /\b(generating|creating|rendering|in progress|queued)\b|\b\d{1,3}\s?%/i,
    // Places where Flow reports errors.
    errorContainers: ['[role="alert"]', '[role="status"]', '[class*="toast" i]', '[class*="snack" i]', '[class*="error" i]'],
    errorText: /something went wrong|failed|couldn.?t|could not|unable to|try again|violat|not allowed|blocked|quota|limit reached|too many/i,
    fileInput: 'input[type="file"]',
    // Flow's "Rights to use this image" dialog (shown after an upload) must be confirmed before anything continues.
    consentDialogs: ['[role="dialog"]', '[role="alertdialog"]', 'mat-dialog-container', '.cdk-overlay-container', 'dialog[open]'],
    consentButton: /^\s*i agree\s*$/i,
    // Flow's asset picker, opened by the "+" (Add ingredients) button: pick an upload, then "Add to prompt".
    pickerUpload: /(^|\s)upload media\s*$/i, // icon-font text may come first: "upload Upload media"
    pickerAdd: /(^|\s)add to prompt\s*$/i,
    // --- reference images ("Attach in Flow") ---
    // The "+" button of the prompt bar (adds ingredients / references).
    addRefButton: { css: ['button[aria-label*="ingredient" i]', 'button[aria-label*="reference" i]'] },
    // The menu entry that opens a file chooser.
    uploadMenuItem: /upload|from (your )?(computer|device)|browse/i,
    // Extra places to look for attached-reference thumbnails (every <img> inside the prompt bar already counts).
    refThumb: ['[class*="ingredient" i] img', '[class*="reference" i] img', '[class*="attachment" i] img'],
    // The remove/clear control next to an attached thumbnail.
    refRemove: /remove|delete|clear|close|cancel/i,
    minRefThumbSize: 24, // px
  };

  // ====================================================================
  // helpers
  // ====================================================================
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const norm = (s) => (s || '').replace(/\s+/g, ' ').trim();

  function isVisible(el) {
    if (!el || !el.isConnected) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    const st = getComputedStyle(el);
    return st.visibility !== 'hidden' && st.display !== 'none' && st.opacity !== '0';
  }
  function labelOf(el) {
    return norm([el.getAttribute('aria-label'), el.getAttribute('title'), el.innerText || el.textContent].filter(Boolean).join(' '));
  }
  function isDisabled(el) {
    return el.disabled === true || el.getAttribute('aria-disabled') === 'true';
  }
  function queryAll(spec) {
    const out = [];
    const seen = new Set();
    for (const css of spec.css || []) {
      let list = [];
      try { list = document.querySelectorAll(css); } catch (_) { continue; }
      for (const el of list) {
        if (seen.has(el) || !isVisible(el)) continue;
        if (spec.text && !spec.text.test(labelOf(el))) continue;
        seen.add(el);
        out.push(el);
      }
    }
    return out;
  }
  function lowestOnPage(els) {
    return els.slice().sort((a, b) => b.getBoundingClientRect().bottom - a.getBoundingClientRect().bottom)[0] || null;
  }

  function fire(el, type, init = {}) {
    const opts = { bubbles: true, cancelable: true, composed: true, view: window, ...init };
    const Ctor = type.startsWith('pointer') ? PointerEvent : MouseEvent;
    el.dispatchEvent(new Ctor(type, type.startsWith('pointer') ? { ...opts, pointerId: 1, pointerType: 'mouse', isPrimary: true } : opts));
  }
  function realClick(el) {
    el.scrollIntoView({ block: 'center', inline: 'center' });
    const r = el.getBoundingClientRect();
    const at = { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2, screenX: r.left + r.width / 2, screenY: r.top + r.height / 2, button: 0 };
    for (const t of ['pointerover', 'mouseover', 'pointermove', 'mousemove']) fire(el, t, at);
    for (const t of ['pointerdown', 'mousedown']) fire(el, t, { ...at, buttons: 1, detail: 1 });
    if (typeof el.focus === 'function') el.focus({ preventScroll: true });
    for (const t of ['pointerup', 'mouseup', 'click']) fire(el, t, { ...at, buttons: 0, detail: 1 });
  }
  /**
   * A real (isTrusted) mouse click through Chrome's debugger. Browser zoom changes how DevTools coordinates map to
   * the page, so the pointer is first moved and the page reports what is under it; the press only happens once the
   * pointer is verified to be on the button (several zoom scales are tried).
   */
  async function trustedClickOn(btn, log) {
    const att = await chrome.runtime.sendMessage({ type: 'DBG_ATTACH' }); // also brings this tab to the front
    if (!att || !att.ok) { log(`trusted click unavailable: ${att && att.error} (close DevTools on this tab if it is open)`, 'warn'); return false; }
    // Chrome shows a "started debugging this browser" bar when the debugger attaches; it slides in and pushes the page
    // down. Wait until the button stops moving, and measure it again for every aiming attempt.
    await sleep(300);
    btn.scrollIntoView({ block: 'center', inline: 'center' });
    let last = '', stable = 0;
    for (let i = 0; i < 30 && stable < 4; i++) {
      const q = btn.getBoundingClientRect();
      const key = `${Math.round(q.left)},${Math.round(q.top)},${Math.round(q.width)}`;
      stable = key === last ? stable + 1 : 0; last = key;
      await sleep(100);
    }
    let cx = 0, cy = 0;
    const measure = () => { const r = btn.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; };
    measure();
    if (!(cx > 0 && cy > 0 && cx < window.innerWidth && cy < window.innerHeight)) {
      log(`button is outside the visible page (css ${Math.round(cx)},${Math.round(cy)} in ${window.innerWidth}x${window.innerHeight}); not clicking`, 'warn');
      await chrome.runtime.sendMessage({ type: 'DBG_DETACH' });
      return false;
    }
    const mouse = (params) => chrome.runtime.sendMessage({ type: 'DBG_MOUSE', params });
    const near = (e, x, y) => Math.abs(e.x - x) <= 3 && Math.abs(e.y - y) <= 3;
    /** Move the pointer to device point (dx, dy); true only if a trusted move landed on the button's centre. The user's own
     *  mouse also produces trusted moves, so events are matched by position, never taken blindly. */
    const aimed = async (dx, dy) => {
      const seen = [];
      const onMove = (e) => { if (e.isTrusted) seen.push({ x: e.clientX, y: e.clientY, target: e.target }); };
      document.addEventListener('mousemove', onMove, true);
      await mouse({ type: 'mouseMoved', x: 2, y: 2 }); // leave the old spot first so a move event is guaranteed
      await mouse({ type: 'mouseMoved', x: dx, y: dy });
      await sleep(180);
      document.removeEventListener('mousemove', onMove, true);
      return seen.some((ev) => near(ev, cx, cy) && (ev.target === btn || btn.contains(ev.target)));
    };
    try {
      const zoom = att.zoom || 1;
      const scales = [...new Set([1, zoom, 1 / zoom, window.devicePixelRatio, window.devicePixelRatio / zoom].map((v) => +v.toFixed(3)))];
      for (const sc of [...scales, ...scales]) { // second pass: the layout may still have been settling during the first
        measure();
        if (await aimed(cx * sc, cy * sc)) {
          log(`trusted pointer aimed at the button (scale ${sc}, page zoom ${zoom})`);
          await mouse({ type: 'mousePressed', x: cx * sc, y: cy * sc, button: 'left', buttons: 1, clickCount: 1 });
          await mouse({ type: 'mouseReleased', x: cx * sc, y: cy * sc, button: 'left', buttons: 0, clickCount: 1 });
          return true;
        }
      }
      log(`trusted pointer could not be aimed at the button (tried scales ${scales.join(', ')} twice; button at css ${Math.round(cx)},${Math.round(cy)})`, 'warn');
      return false;
    } finally {
      await chrome.runtime.sendMessage({ type: 'DBG_DETACH' });
    }
  }
  function key(el, type, k, extra = {}) {
    el.dispatchEvent(new KeyboardEvent(type, { key: k, code: k === 'Enter' ? 'Enter' : k, bubbles: true, cancelable: true, composed: true, ...extra }));
  }

  // ---- prompt injection (framework-safe) -------------------------------
  function readPrompt(el) {
    return norm('value' in el && el.tagName !== 'DIV' ? el.value : el.innerText || el.textContent);
  }
  function setNative(el, value) {
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, value); // bypass React's value tracker
  }
  function matches(el, value) {
    const got = readPrompt(el), want = norm(value);
    return got === want || (got.length > 40 && got.startsWith(want.slice(0, 80)) && Math.abs(got.length - want.length) <= want.length * 0.05);
  }
  async function injectPrompt(el, value) {
    el.scrollIntoView({ block: 'center' });
    el.focus();
    key(el, 'keydown', 'Control', { ctrlKey: true });
    if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
      setNative(el, '');
      el.dispatchEvent(new Event('input', { bubbles: true }));
      setNative(el, value);
      el.dispatchEvent(new InputEvent('beforeinput', { bubbles: true, inputType: 'insertText', data: value }));
      el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: value }));
    } else {
      // contenteditable (Slate / Lexical / ProseMirror ...): go through the editing pipeline
      const sel = getSelection();
      const range = document.createRange();
      range.selectNodeContents(el);
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('delete');
      document.execCommand('insertText', false, value);
      if (!matches(el, value)) {
        el.textContent = value;
        el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: value }));
      }
    }
    key(el, 'keyup', 'Control');
    el.dispatchEvent(new Event('change', { bubbles: true }));
    await sleep(250);
    return matches(el, value);
  }

  // ---- options (aspect ratio, mode, outputs) ---------------------------
  function findOption(wanted) {
    const w = norm(wanted).toLowerCase();
    const els = [...document.querySelectorAll(SELECTORS.optionElements)].filter((e) => isVisible(e) && !e.matches(SELECTORS.optionExclude));
    const exact = els.filter((e) => norm(e.innerText || e.textContent).toLowerCase() === w || (e.getAttribute('aria-label') || '').toLowerCase() === w);
    const loose = els.filter((e) => {
      const t = labelOf(e).toLowerCase();
      return t.includes(w) && t.length <= w.length + 30;
    });
    const pick = (list) => list.sort((a, b) => labelOf(a).length - labelOf(b).length)[0] || null; // most specific element
    return pick(exact) || pick(loose);
  }
  /** Click the option whose text is `wanted`, opening settings menus if it is not visible yet. */
  async function chooseOption(wantedIn, what) {
    const wantedList = (Array.isArray(wantedIn) ? wantedIn : [wantedIn]).filter(Boolean);
    const wanted = wantedList.join(' / ');
    const find = () => { for (const w of wantedList) { const o = findOption(w); if (o) return o; } return null; };
    let opt = find();
    const tried = [];
    if (!opt) {
      for (const btn of queryAll(SELECTORS.settingsButton).slice(0, 12)) {
        tried.push(labelOf(btn).slice(0, 30));
        realClick(btn);
        await sleep(400);
        opt = find();
        if (opt) break;
      }
    }
    if (!opt) return { ok: false, detail: `${what} "${wanted}" not found (tried opening: ${tried.join(' | ') || 'nothing'})` };
    realClick(opt);
    await sleep(400);
    return { ok: true, detail: `${what} "${wanted}" -> ${labelOf(opt).slice(0, 40)}` };
  }

  // ---- results / busy / errors ----------------------------------------
  let currentBar = null; // the prompt bar of the running job: its thumbnails are references, not results
  function resultImgs() {
    const out = new Map(); // src -> { w, h } natural size
    for (const css of SELECTORS.resultImages) {
      for (const img of document.querySelectorAll(css)) {
        if (currentBar && currentBar.contains(img)) continue;
        const r = img.getBoundingClientRect();
        if (!img.currentSrc && !img.src) continue;
        if (!img.complete || img.naturalWidth < 32) continue;
        if (Math.max(r.width, r.height) < SELECTORS.minResultSize) continue;
        out.set(img.currentSrc || img.src, { w: img.naturalWidth, h: img.naturalHeight });
      }
    }
    return out;
  }
  function resultSrcs() {
    const out = new Set();
    for (const css of SELECTORS.resultImages) {
      for (const img of document.querySelectorAll(css)) {
        if (currentBar && currentBar.contains(img)) continue;
        const r = img.getBoundingClientRect();
        if (!img.currentSrc && !img.src) continue;
        if (!img.complete || img.naturalWidth < 32) continue;
        if (Math.max(r.width, r.height) < SELECTORS.minResultSize) continue;
        out.add(img.currentSrc || img.src);
      }
    }
    return out;
  }
  /** Image bytes as a data URL. With wantPng, JPEG/WebP results are re-encoded (losslessly) as real PNG. */
  async function toDataUrl(src, wantPng) {
    // test switch (Playwright): reproduces a CDN the page is not allowed to read (cross-origin, no CORS headers)
    if (document.documentElement.dataset.wtTestBlockFetch === '1') throw new TypeError('Failed to fetch');
    const res = await fetch(src, { credentials: 'include' });
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching image`);
    let blob = await res.blob();
    if (wantPng && blob.type !== 'image/png') {
      const bmp = await createImageBitmap(blob);
      const canvas = new OffscreenCanvas(bmp.width, bmp.height);
      canvas.getContext('2d').drawImage(bmp, 0, 0);
      blob = await canvas.convertToBlob({ type: 'image/png' });
    }
    return await new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = () => reject(fr.error);
      fr.readAsDataURL(blob);
    });
  }
  /** What the page looks like right now, for the log when no result image was recognised. */
  function snapshot() {
    const imgs = [...document.querySelectorAll('img')].map((img) => {
      const r = img.getBoundingClientRect();
      return { src: (img.currentSrc || img.src || '').slice(0, 70), nat: `${img.naturalWidth}x${img.naturalHeight}`, box: `${Math.round(r.width)}x${Math.round(r.height)}`, done: img.complete, vis: isVisible(img) };
    }).filter((i) => i.src);
    const bg = [...document.querySelectorAll('div,span,a')].filter((el) => /url\(/.test(getComputedStyle(el).backgroundImage) && isVisible(el) && el.getBoundingClientRect().width > 100).length;
    return {
      imgCount: imgs.length, imgs: imgs.slice(-8),
      videos: document.querySelectorAll('video').length, canvases: document.querySelectorAll('canvas').length, bgImageBoxes: bg,
      busy: isBusy(), errors: [...errorTexts()],
      alerts: [...document.querySelectorAll('[role="alert"],[role="status"],snack-bar-container,[class*="snack" i],[class*="toast" i]')].map((e) => norm(e.innerText).slice(0, 120)).filter(Boolean),
      url: location.href,
    };
  }
  function isDisabledDeep(el) {
    return !el.isConnected || isDisabled(el) || el.hasAttribute('disabled') || /\bdisabled\b/i.test(el.className || '') || !!el.closest('[aria-disabled="true"]');
  }
  /** Did Flow accept the prompt? Any of these signals means yes. */
  function reacted(btn, input, errBefore, before) {
    if (!input.isConnected || readPrompt(input) === '') return 'prompt cleared';
    if (isBusy()) return 'busy indicator';
    if (isDisabledDeep(btn)) return 'button disabled';
    for (const t of errorTexts()) if (!errBefore.has(t)) return 'error shown';
    for (const src of resultSrcs()) if (!before.has(src)) return 'new image';
    return '';
  }
  async function reactedWithin(ms, ...args) {
    const end = Date.now() + ms;
    while (Date.now() < end) { const r = reacted(...args); if (r) return r; await sleep(150); }
    return '';
  }
  async function submitPrompt(btn, input, prompt, errBefore, before, log) {
    const methods = [
      ['simulated click', 3000, () => realClick(btn)],
      ['form submit', 2500, () => {
        const form = btn.form || btn.closest('form');
        if (!form || typeof form.requestSubmit !== 'function') return 'skip';
        form.requestSubmit(btn.type === 'submit' ? btn : undefined);
      }],
      ['native click', 2500, () => btn.click()],
      ['Enter key', 2500, () => { input.focus(); for (const t of ['keydown', 'keypress', 'keyup']) key(input, t, 'Enter'); }],
      ['trusted click', 4000, async () => ((await trustedClickOn(btn, log)) ? undefined : 'skip')],
    ];
    let preferred = '';
    try { preferred = (await chrome.storage.local.get('wt:submitVia'))['wt:submitVia'] || ''; } catch (_) {}
    methods.sort((a, b) => (b[0] === preferred) - (a[0] === preferred)); // last working method first (stable sort)
    for (const [name, wait, run] of methods) {
      if (!btn.isConnected) btn = lowestOnPage(queryAll(SELECTORS.generateButton).filter((b) => !isDisabledDeep(b))) || btn;
      log(`submit: ${name} on "${labelOf(btn).slice(0, 30)}"`);
      if ((await run()) === 'skip') { log(`${name}: not applicable`, 'warn'); continue; }
      const sig = await reactedWithin(wait, btn, input, errBefore, before);
      if (sig) { log(`Flow reacted (${sig})`); try { chrome.storage.local.set({ 'wt:submitVia': name }); } catch (_) {} return name; }
      log(`no reaction to ${name}`, 'warn');
    }
    return '';
  }
  // Elements that already looked "busy" before we pressed generate (a decorative loader, a "100%" label...):
  // they are not evidence that Flow accepted the prompt.
  let busyIgnore = new WeakSet();
  function busyElements() {
    const out = [];
    for (const css of SELECTORS.busy) {
      for (const el of document.querySelectorAll(css)) if (isVisible(el)) out.push(el);
    }
    for (const el of document.querySelectorAll('main *, [role="main"] *')) {
      if (el.children.length === 0 && el.textContent.length < 40 && isVisible(el) && SELECTORS.busyText.test(el.textContent)) out.push(el);
    }
    return out;
  }
  function rememberBusy() { busyIgnore = new WeakSet(busyElements()); }
  function isBusy() { return busyElements().some((el) => !busyIgnore.has(el)); }
  function errorTexts() {
    const out = new Set();
    for (const css of SELECTORS.errorContainers) {
      let list = [];
      try { list = document.querySelectorAll(css); } catch (_) { continue; }
      for (const el of list) {
        const t = norm(el.innerText);
        if (t && t.length < 300 && isVisible(el) && SELECTORS.errorText.test(t)) out.add(t);
      }
    }
    return out;
  }

  // ====================================================================
  // reference images
  // ====================================================================
  /** The prompt bar = the closest ancestor of the prompt box that also contains the generate button. */
  function promptBarOf(input) {
    const gen = lowestOnPage(queryAll(SELECTORS.generateButton));
    let el = input;
    for (let i = 0; i < 10 && el.parentElement; i++) {
      el = el.parentElement;
      if (gen && el.contains(gen)) return el;
    }
    return input.parentElement && input.parentElement.parentElement ? input.parentElement.parentElement : input;
  }
  function refThumbs(bar) {
    const set = new Set();
    const consider = (img) => {
      const r = img.getBoundingClientRect();
      if (Math.max(r.width, r.height) >= SELECTORS.minRefThumbSize && isVisible(img) && (img.currentSrc || img.src)) set.add(img);
    };
    bar.querySelectorAll('img').forEach(consider);
    for (const css of SELECTORS.refThumb) bar.querySelectorAll(css).forEach(consider);
    return [...set];
  }
  function removeButtonFor(thumb, bar) {
    let el = thumb;
    for (let i = 0; i < 5 && el && el !== bar; i++) {
      el = el.parentElement;
      if (!el) break;
      const btn = [...el.querySelectorAll('button,[role="button"]')].find((b) => {
        const t = labelOf(b);
        return isVisible(b) && SELECTORS.refRemove.test(t) && !/generat|create|start|add|upload/i.test(t);
      });
      if (btn) return btn;
    }
    return null;
  }
  /** Remove every reference image left over from an earlier prompt so it cannot bleed into this generation. */
  async function clearRefs(bar, log) {
    let removed = 0;
    for (let n = 0; n < 12; n++) {
      const thumbs = refThumbs(bar);
      if (!thumbs.length) break;
      fire(thumbs[0], 'pointerover'); fire(thumbs[0], 'mouseover'); // some UIs only show the remove button on hover
      await sleep(150);
      const rm = removeButtonFor(thumbs[0], bar);
      if (!rm) throw new Error('A leftover reference image is attached but no remove button was found for it (SELECTORS.refRemove).');
      realClick(rm);
      const end = Date.now() + 3000;
      while (Date.now() < end && refThumbs(bar).length >= thumbs.length) await sleep(120);
      if (refThumbs(bar).length >= thumbs.length) throw new Error('Clicking the remove button did not remove the leftover reference image.');
      removed++;
    }
    if (removed) log(`Removed ${removed} leftover reference image(s) from the prompt bar`);
    return removed;
  }
  function setFiles(input, file) {
    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
  /** Resolves true when `want` thumbnails are shown and Flow has stopped uploading/working for a moment. */
  function waitForThumbs(bar, want, timeoutMs, stop) {
    return new Promise((resolve) => {
      const start = Date.now();
      let stableSince = 0, finished = false;
      const finish = (v) => { if (finished) return; finished = true; mo.disconnect(); clearInterval(timer); resolve(v); };
      const check = () => {
        if (finished) return;
        if (stop() || Date.now() - start > timeoutMs) return finish(false);
        if (refThumbs(bar).length >= want && !isBusy()) {
          if (!stableSince) stableSince = Date.now();
          if (Date.now() - stableSince >= 1200) finish(true);
        } else stableSince = 0;
      };
      const mo = new MutationObserver(check);
      mo.observe(document.body, { childList: true, subtree: true, attributes: true });
      const timer = setInterval(check, 250);
      check();
    });
  }
  async function closeMenus() {
    key(document.body, 'keydown', 'Escape');
    await sleep(200);
  }
  // ---- content check: is the thumbnail Flow attached really the file we meant to attach? ----
  const srcOf = (img) => img.currentSrc || img.src || '';
  /** 12x12 grayscale signature of an image (Blob or <img> source). Null when the pixels cannot be read. */
  async function imageSig(blobOrUrl) {
    try {
      const blob = typeof blobOrUrl === 'string' ? await (await fetch(blobOrUrl)).blob() : blobOrUrl;
      const bmp = await createImageBitmap(blob);
      const c = document.createElement('canvas'); c.width = 12; c.height = 12;
      const ctx = c.getContext('2d');
      ctx.drawImage(bmp, 0, 0, 12, 12);
      const d = ctx.getImageData(0, 0, 12, 12).data;
      const out = [];
      for (let i = 0; i < d.length; i += 4) out.push(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]);
      return { sig: out, ratio: bmp.width / bmp.height };
    } catch (_) { return null; }
  }
  function sigDist(a, b) {
    const ma = a.reduce((x, y) => x + y, 0) / a.length, mb = b.reduce((x, y) => x + y, 0) / b.length; // ignore brightness shifts
    let s = 0;
    for (let i = 0; i < a.length; i++) s += Math.abs((a[i] - ma) - (b[i] - mb));
    return s / a.length;
  }
  /** true = a new thumbnail matches the file; false = new thumbnail(s) exist but none match; null = could not tell. */
  async function verifyAttached(bar, file, beforeSrcs, log) {
    const want = await imageSig(file);
    if (!want) return null;
    const fresh = refThumbs(bar).filter((t) => !beforeSrcs.has(srcOf(t)));
    if (!fresh.length) return null;
    let readable = 0;
    for (const t of fresh) {
      const got = await imageSig(srcOf(t));
      if (!got) continue;
      readable++;
      const d = sigDist(got.sig, want.sig), rd = Math.abs(got.ratio - want.ratio) / want.ratio;
      if (log) log(`content check ${file.name}: thumbnail diff=${d.toFixed(1)} ratio-diff=${rd.toFixed(2)} (thumb ${got.ratio.toFixed(2)} vs file ${want.ratio.toFixed(2)})`);
      if (rd < 0.08 && d < 14) return true;
    }
    return readable ? false : null;
  }
  /** Remove the thumbnails that were not there before this attach (the wrong ones). */
  async function removeNewThumbs(bar, beforeSrcs) {
    for (let n = 0; n < 6; n++) {
      const t = refThumbs(bar).find((x) => !beforeSrcs.has(srcOf(x)));
      if (!t) return true;
      const count = refThumbs(bar).length;
      fire(t, 'pointerover'); fire(t, 'mouseover'); await sleep(150);
      const rm = removeButtonFor(t, bar);
      if (!rm) return false;
      realClick(rm);
      const end = Date.now() + 3000;
      while (Date.now() < end && refThumbs(bar).length >= count) await sleep(120);
    }
    return false;
  }
  /** Attach one File to the prompt bar, trying the ways a Flow-like UI can accept it. Returns the method name or ''. */
  async function attachOne(bar, file, timeoutMs, log, stop) {
    const before = refThumbs(bar).length;
    const beforeSrcs = new Set(refThumbs(bar).map(srcOf));
    const badIds = new Set();
    let lastPickId = '';
    const strategies = [
      ['asset picker', async () => {
        // "+" opens Flow's picker: a list of uploads, "Upload media", and "Add to prompt".
        // The prompt bar is re-rendered after every attach, so the "+" is looked up again for every attempt.
        const getAdd = () => lowestOnPage(queryAll(SELECTORS.addRefButton));
        if (!getAdd()) return false;
        const btnByText = (re) => [...document.querySelectorAll('button, [role="button"]')].find((b) => isVisible(b) && re.test(norm(b.innerText || b.textContent || '')));
        // Flow's picker is a virtual-scroll list of <button role="option"> rows with a .asset-title (the file name):
        // only the rows in view exist in the page, so the list is scrolled to find a row that is out of view.
        // Rows whose thumbnail id is in badIds attached the wrong picture before (content check) and are skipped.
        const optId = (o) => { const im = o.querySelector('img'); const m = im && /\/image\/([0-9a-f-]{36})/i.exec(im.getAttribute('src') || ''); return m ? m[1] : ''; };
        const rowsNamed = () => [...document.querySelectorAll('button[role="option"]')].filter((o) => !bar.contains(o) && [...o.querySelectorAll('.asset-title')].some((t) => norm(t.textContent) === file.name) && !badIds.has(optId(o)));
        const findItem = async () => {
          let hit = rowsNamed()[0];
          if (hit) return hit;
          const anyRow = document.querySelector('button[role="option"]');
          const vp = anyRow && anyRow.closest('cdk-virtual-scroll-viewport');
          if (!vp) return null;
          const prevTop = vp.scrollTop;
          vp.scrollTop = 0; await sleep(250);
          for (let i = 0; i < 60 && !stop(); i++) {
            hit = rowsNamed()[0];
            if (hit) return hit;
            const atEnd = vp.scrollTop + vp.clientHeight >= vp.scrollHeight - 2;
            if (atEnd) break;
            vp.scrollTop += Math.max(80, vp.clientHeight * 0.8); await sleep(250);
          }
          vp.scrollTop = prevTop;
          return null;
        };
        await sleep(800); // let the previous attach (or the closing picker) settle
        for (let attempt = 0; attempt < 3 && !btnByText(SELECTORS.pickerUpload) && !stop(); attempt++) {
          const add = getAdd();
          if (!add) { await sleep(600); continue; }
          if (attempt < 2) realClick(add);
          else { log('The picker did not open after script clicks on "+"; trying a trusted click.', 'warn'); await trustedClickOn(add, log).catch(() => false); }
          for (let i = 0; i < 12 && !btnByText(SELECTORS.pickerUpload); i++) await sleep(250);
        }
        const uploadBtn = btnByText(SELECTORS.pickerUpload);
        if (!uploadBtn) {
          const shown = [...document.querySelectorAll('button, [role="button"], [role="menuitem"], [role="option"]')].filter((e) => isVisible(e) && !bar.contains(e) && labelOf(e)).map((e) => labelOf(e).slice(0, 40)).slice(-16);
          log(`No "Upload media" button after clicking "+". Visible controls: ${JSON.stringify(shown)}`, 'warn');
          await closeMenus(); return false;
        }
        let item = await findItem();
        if (item) log(`Flow already has "${file.name}" in its uploads; picking that one.`);
        else {
          document.documentElement.dataset.wtCapture = '1'; // page-hook.js: no native file dialog
          try {
            realClick(uploadBtn);
            await sleep(500);
            const input = document.querySelector('input[type="file"][data-wt-captured="1"]');
            if (!input) { log('"Upload media" did not open a file chooser the extension could use.', 'warn'); await closeMenus(); return false; }
            setFiles(input, file);
            input.removeAttribute('data-wt-captured');
          } finally { delete document.documentElement.dataset.wtCapture; }
          const end = Date.now() + timeoutMs; // the rights dialog ("I agree") is confirmed by the consent watcher meanwhile
          while (!item && Date.now() < end && !stop()) { await sleep(400); item = await findItem(); }
          if (!item) { log(`"${file.name}" never showed up in Flow's picker after uploading.`, 'warn'); await closeMenus(); return false; }
        }
        // Select the row, then CONFIRM Flow selected THAT row before "Add to prompt": a virtual-scroll row can be recycled
        // for another asset between finding and clicking, and a script click may not register (then "Add to prompt"
        // adds Flow's default highlighted row = the first one in the list).
        const titleOf = (o) => norm(((o.querySelector && o.querySelector('.asset-title')) || {}).textContent || '');
        const optRows = () => [...document.querySelectorAll('button[role="option"]')].filter((o) => !bar.contains(o));
        const describe = (o) => `"${titleOf(o)}" aria-selected=${o.getAttribute('aria-selected')} class="${o.className}"`;
        let confirmed = false;
        for (let attempt = 0; attempt < 3 && !confirmed && !stop(); attempt++) {
          const row = (item && item.isConnected && titleOf(item) === file.name) ? item : await findItem(); // re-acquire if the row was recycled
          if (!row) { log(`The row for "${file.name}" disappeared from the picker (list re-rendered); looking again.`, 'warn'); await sleep(400); continue; }
          item = row;
          lastPickId = optId(row);
          if (attempt === 0) realClick(row);
          else { log(`Clicking "${file.name}" again with a trusted click (attempt ${attempt + 1}).`, 'warn'); await trustedClickOn(row, log).catch(() => false); }
          // A script click only highlights the row in real Flow (class asset-item-active) and leaves "Add to prompt" disabled;
          // a row counts as selected only when "Add to prompt" is enabled AND the marked row is the wanted one.
          // Flow's picker may have NO "Add to prompt" button: selecting the row is the whole action and the thumbnail
          // appears in the prompt bar (picker open or closed). So success = a new thumbnail, or an enabled "Add to prompt".
          let addOk = false, pickerGone = false, thumbAdded = false;
          for (let i = 0; i < 12 && !addOk && !thumbAdded; i++) {
            await sleep(250);
            const ab = btnByText(SELECTORS.pickerAdd); addOk = !!ab && !isDisabledDeep(ab);
            thumbAdded = refThumbs(bar).length > before;
            pickerGone = optRows().length === 0;
            if (pickerGone && !addOk && !thumbAdded) { for (let k = 0; k < 8 && refThumbs(bar).length <= before; k++) await sleep(250); thumbAdded = refThumbs(bar).length > before; break; }
          }
          if (thumbAdded) {
            if (titleOf(row) !== file.name) { log(`A thumbnail appeared but the clicked row was "${titleOf(row)}", not "${file.name}".`, 'warn'); }
            else { log(`Flow attached "${file.name}" as soon as the row was clicked${pickerGone ? ' (the picker closed by itself)' : ''}.`); return true; }
          }
          if (pickerGone && !thumbAdded) log(`The picker closed after the click but no thumbnail was added to the prompt bar (had ${before}, now ${refThumbs(bar).length}).`, 'warn');
          if (!addOk) { // diagnostics for the log: what the picker looked like
            const addB = btnByText(SELECTORS.pickerAdd);
            log(`picker diag: "Add to prompt" button ${addB ? `present (disabled=${isDisabledDeep(addB)}, class="${addB.className}")` : 'NOT in the page'}; picker rows in page: ${optRows().length}; first row: ${optRows()[0] ? describe(optRows()[0]) : 'none'}`, 'warn');
          }
          const rowsNow = optRows();
          let marked = rowsNow.filter((o) => o.getAttribute('aria-selected') === 'true');
          if (!marked.length) marked = rowsNow.filter((o) => /\basset-item-active\b/.test(o.className));
          log(`picker after click: wanted ${describe(row)}; "Add to prompt" ${addOk ? 'enabled' : 'disabled'}; marked rows: ${marked.length ? marked.map(describe).join(' | ') : 'none'}`);
          const trackable = rowsNow.some((o) => o.hasAttribute('aria-selected') || /\basset-item-active\b/.test(o.className));
          if (!addOk) confirmed = false;
          else if (marked.length) confirmed = marked.every((o) => titleOf(o) === file.name);
          else confirmed = !trackable && titleOf(row) === file.name;
          if (!confirmed) log(`Flow selected a different row than "${file.name}"; not adding it.`, 'warn');
        }
        if (!confirmed) { log(`Could not select "${file.name}" in the picker; not adding a wrong image.`, 'warn'); await closeMenus(); return false; }
        let addBtn = null;
        for (let i = 0; i < 20 && !stop(); i++) {
          addBtn = btnByText(SELECTORS.pickerAdd);
          if (addBtn && !isDisabledDeep(addBtn)) break;
          await sleep(250);
        }
        if (!addBtn || isDisabledDeep(addBtn)) { log('"Add to prompt" never became available.', 'warn'); await closeMenus(); return false; }
        realClick(addBtn);
        return true;
      }],
      ['upload menu', async () => {
        const add = queryAll(SELECTORS.addRefButton).find((b) => bar.contains(b)) || queryAll(SELECTORS.addRefButton)[0];
        if (!add) return false;
        document.documentElement.dataset.wtCapture = '1'; // page-hook.js: keep the native file dialog from opening
        try {
          realClick(add);
          await sleep(500);
          const item = [...document.querySelectorAll(SELECTORS.optionElements)]
            .filter((e) => isVisible(e) && SELECTORS.uploadMenuItem.test(labelOf(e)) && labelOf(e).length < 60)[0];
          if (!item) {
            const shown = [...document.querySelectorAll(SELECTORS.optionElements + ', button, [role="button"], a')]
              .filter((e) => isVisible(e) && !bar.contains(e) && labelOf(e) && labelOf(e).length < 50).map((e) => labelOf(e)).slice(-14);
            log(`After clicking "+" Flow shows no upload entry. Visible controls: ${JSON.stringify(shown)}`, 'warn');
            await closeMenus(); return false;
          }
          realClick(item);
          await sleep(400);
          const input = document.querySelector('input[type="file"][data-wt-captured="1"]');
          if (!input) { await closeMenus(); return false; }
          setFiles(input, file);
          input.removeAttribute('data-wt-captured');
          return true;
        } finally { delete document.documentElement.dataset.wtCapture; }
      }],
      ['file input', async () => {
        const inputs = [...bar.querySelectorAll('input[type="file"]'), ...document.querySelectorAll(SELECTORS.fileInput)];
        const input = inputs.find((i) => !i.disabled && (!i.accept || /image/i.test(i.accept)));
        if (!input) return false;
        setFiles(input, file);
        return true;
      }],
      ['drop on prompt bar', async () => {
        const dt = new DataTransfer();
        dt.items.add(file);
        for (const type of ['dragenter', 'dragover', 'drop']) bar.dispatchEvent(new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer: dt }));
        return true;
      }],
    ];
    for (const [name, run] of strategies) {
      for (let round = 0; round < 3; round++) { // a round > 0 means the previous pick was the wrong picture
        if (stop()) return '';
        let started = false;
        try { started = await run(); } catch (e) { log(`attach via ${name} failed: ${e.message}`, 'warn'); }
        if (!started) { log(`attach via ${name}: not available`, 'warn'); break; }
        if (!(await waitForThumbs(bar, before + 1, timeoutMs, stop))) {
          log(`attach via ${name}: no thumbnail appeared within ${Math.round(timeoutMs / 1000)}s`, 'warn');
          break;
        }
        // The content check is advisory only: it logs what it measured but never removes or retries an attach
        // (it flagged correct images as different, because Flow shows cropped / re-encoded thumbnails).
        await verifyAttached(bar, file, beforeSrcs, log).catch(() => null);
        return name;
      }
    }
    return '';
  }

  // ====================================================================
  // job runner
  // ====================================================================
  const jobs = new Map(); // runId -> { cancelled }
  const emit = (runId, event, data = {}) => {
    try { chrome.runtime.sendMessage({ type: 'FLOW_EVENT', runId, event, ...data }).catch(() => {}); } catch (_) {}
  };

  // ---- consent dialog ("Rights to use this image" -> "I agree") ----------
  function consentButtons() {
    const out = [];
    for (const root of SELECTORS.consentDialogs) {
      let list = [];
      try { list = document.querySelectorAll(root); } catch (_) { continue; }
      for (const box of list) {
        for (const b of box.querySelectorAll('button, [role="button"]')) {
          if (!out.includes(b) && isVisible(b) && !isDisabledDeep(b) && SELECTORS.consentButton.test(norm(b.innerText || b.textContent || ''))) out.push(b);
        }
      }
    }
    return out;
  }
  /** While a job runs, confirm Flow's rights dialog whenever it appears. Returns a stop function. */
  function startConsentWatcher(log) {
    const tries = new WeakMap(); // button -> { n, at }
    let busy = false;
    const tick = async () => {
      if (busy) return;
      busy = true;
      try {
        for (const b of consentButtons()) {
          const t = tries.get(b) || { n: 0, at: 0 };
          if (Date.now() - t.at < 1200) continue; // give the previous attempt time to close the dialog
          t.n++; t.at = Date.now(); tries.set(b, t);
          if (t.n === 1) { realClick(b); log('Accepted Flow\'s dialog: "I agree".'); }
          else if (t.n === 2) { b.click(); log('"I agree" still showing; clicked it again (native click).', 'warn'); }
          else if (t.n === 3) { log('"I agree" still showing; using a trusted click.', 'warn'); await trustedClickOn(b, log).catch(() => {}); }
        }
      } finally { busy = false; }
    };
    const mo = new MutationObserver(() => { tick(); });
    mo.observe(document.body, { childList: true, subtree: true });
    const timer = setInterval(tick, 500);
    tick();
    return () => { mo.disconnect(); clearInterval(timer); };
  }

  async function runJob(job) {
    const { runId } = job;
    const state = { cancelled: false };
    jobs.set(runId, state);
    const log = (msg, level = 'info') => emit(runId, 'log', { level, msg });
    const fail = (error) => emit(runId, 'error', { error });
    const stop = () => state.cancelled;
    const stopConsent = job.autoAgree === false ? () => {} : startConsentWatcher(log);

    try {
      const matched = {};

      // 0. reference images ("Attach in Flow"): clear leftovers, attach exactly the required ones, wait for the upload
      const promptEl = lowestOnPage(queryAll(SELECTORS.promptInput));
      if (!promptEl) return fail('Prompt box not found (SELECTORS.promptInput).');
      const bar = promptBarOf(promptEl);
      currentBar = bar;
      try { await clearRefs(bar, log); } catch (e) { return fail(e.message); }
      for (const ref of job.refs || []) {
        if (stop()) return;
        const blob = await (await fetch(ref.dataUrl)).blob();
        const file = new File([blob], ref.name, { type: ref.type || blob.type }); // a native File rebuilt from the cached bytes
        const how = await attachOne(bar, file, job.refTimeoutMs || 45000, log, stop);
        if (!how) { await closeMenus(); return fail(`Could not attach reference ${ref.name}: Flow never showed it in the prompt bar (see SELECTORS.addRefButton / uploadMenuItem / refThumb).`); }
        log(`Attached reference: ${ref.name} -> ${job.target || 'item'} (via ${how})`);
        (matched.refs = matched.refs || []).push(ref.name);
      }
      if (stop()) return;

      const before = resultSrcs(); // snapshot AFTER attaching, so reference thumbnails never count as results
      const errBefore = errorTexts();

      // 1. settings
      if (job.aspect) {
        const r = await chooseOption(job.aspectLabels && job.aspectLabels.length ? [job.aspect, ...job.aspectLabels] : job.aspect, 'aspect ratio');
        matched.aspect = r.detail;
        log(r.detail, r.ok ? 'info' : 'warn');
        if (!r.ok && job.requireAspect) {
          const noSettings = !queryAll(SELECTORS.settingsButton).some((b) => b.matches(SELECTORS.optionExclude));
          return fail(noSettings
            ? `Could not set aspect ratio ${job.aspect}: this Flow screen has no settings control (${location.pathname}). Open the project's main prompt screen (All media), not Characters or Scenes.`
            : `Could not set aspect ratio ${job.aspect}. Update the "Aspect ratio → label" rules or SELECTORS.settingsButton/optionElements, or turn off "Require aspect ratio" in settings.`);
        }
      }
      if (stop()) return;
      for (const [what, wanted] of [['mode', job.mode], ['outputs', job.outputs]]) {
        if (!wanted) continue;
        const r = await chooseOption(wanted, what);
        matched[what] = r.detail;
        log(r.detail, r.ok ? 'info' : 'warn');
        if (!r.ok) return fail(`Could not select ${what} "${wanted}".`);
      }

      // 2. prompt
      const input = lowestOnPage(queryAll(SELECTORS.promptInput));
      if (!input) return fail('Prompt box not found (SELECTORS.promptInput).');
      matched.prompt = `${input.tagName.toLowerCase()}${input.isContentEditable ? '[contenteditable]' : ''}`;
      log(`prompt box: ${matched.prompt}`);
      if (!(await injectPrompt(input, job.prompt))) return fail('Prompt text did not register in the prompt box.');
      log(`prompt injected (${job.prompt.length} chars)`);
      if (stop()) return;

      rememberBusy();
      // 3. submit: wait until the button is enabled, then escalate through methods until Flow visibly reacts
      let btn = null;
      for (let i = 0; i < 40 && !stop(); i++) { // up to ~10 s: Flow enables the button a moment after the text registers
        btn = lowestOnPage(queryAll(SELECTORS.generateButton).filter((b) => !isDisabledDeep(b) && b.tagName !== 'TEXTAREA'));
        if (btn) break;
        await sleep(250);
      }
      if (stop()) return;
      if (!btn) return fail('The generate button never became enabled (SELECTORS.generateButton). Is the prompt accepted by Flow?');
      matched.generate = labelOf(btn).slice(0, 40) || btn.tagName;
      const how = await submitPrompt(btn, input, job.prompt, errBefore, before, log);
      if (!how) return fail(`Flow did not react to "${matched.generate}" after every method (click, form submit, native click, Enter, trusted click).`);
      matched.submitVia = how;
      log(`submitted via ${how}`);
      emit(runId, 'submitted', { matched });

      // 4. wait for finished image(s)
      const startedAt = Date.now();
      const timeoutMs = job.timeoutMs || 180000;
      const stableMs = job.stableMs || 4000;
      const minWaitMs = 4000;
      let lastChange = Date.now();
      let lastCount = 0;
      let lastReport = 0;

      const verdict = await new Promise((resolve) => {
        let finished = false;
        const done = (v) => { if (!finished) { finished = true; mo.disconnect(); clearInterval(timer); resolve(v); } };
        const check = () => {
          if (finished) return;
          if (stop()) return done({ cancelled: true });
          const now = Date.now();
          for (const t of errorTexts()) if (!errBefore.has(t)) return done({ error: `Flow reported: ${t}` });
          const imgs = resultImgs();
          const fresh = [...imgs.keys()].filter((s) => !before.has(s));
          if (fresh.length !== lastCount) { lastCount = fresh.length; lastChange = now; }
          if (now - lastReport > 5000) { lastReport = now; emit(runId, 'progress', { images: fresh.length, elapsed: now - startedAt }); }
          const want = job.minImages || 1;
          if (fresh.length >= want && !isBusy() && now - lastChange >= stableMs && now - startedAt >= minWaitMs) {
            // highest resolution wins (Flow may return several outputs per prompt)
            const best = fresh.map((s) => ({ src: s, ...imgs.get(s) })).sort((a, b) => b.w * b.h - a.w * a.h)[0];
            return done({ images: fresh.length, best });
          }
          if (now - startedAt > timeoutMs) { try { log('No result image recognised. Page snapshot: ' + JSON.stringify(snapshot()), 'warn'); } catch (_) {} return done({ error: `Timed out after ${Math.round(timeoutMs / 1000)}s waiting for a new image.` }); }
        };
        const mo = new MutationObserver(() => check());
        mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'aria-busy', 'class'] });
        const timer = setInterval(check, 1000);
        check();
      });

      if (verdict.cancelled) return emit(runId, 'cancelled');
      if (verdict.error) return fail(verdict.error);
      const best = verdict.best;
      let dataUrl = null, readErr = '';
      try { dataUrl = await toDataUrl(best.src, job.wantPng); } catch (e) { readErr = e.message; }
      if (!dataUrl && /^(blob:|data:)/.test(best.src)) return fail(`Could not read the generated image: ${readErr}`);
      if (!dataUrl) log(`The page cannot read the image (${readErr}) from ${new URL(best.src, location.href).origin}; the extension will fetch it itself.`, 'warn');
      emit(runId, 'done', { images: verdict.images, matched, imageUrl: dataUrl ? null : best.src, dataUrl, width: best.w, height: best.h });
    } catch (e) {
      fail(`Content script error: ${e && e.message ? e.message : e}`);
    } finally {
      stopConsent();
      currentBar = null;
      jobs.delete(runId);
    }
  }

  // ====================================================================
  // diagnostics
  // ====================================================================
  function describe(el) {
    return {
      tag: el.tagName.toLowerCase(),
      text: labelOf(el).slice(0, 60),
      role: el.getAttribute('role') || '',
      aria: el.getAttribute('aria-label') || '',
      id: el.id || '',
      cls: (el.className && el.className.toString().slice(0, 60)) || '',
    };
  }
  function status() {
    return {
      onFlow: true,
      url: location.href,
      title: document.title,
      promptFound: !!lowestOnPage(queryAll(SELECTORS.promptInput)),
      settingsFound: queryAll(SELECTORS.settingsButton).some((b) => b.matches(SELECTORS.optionExclude)),
      generateFound: queryAll(SELECTORS.generateButton).some((b) => !isDisabled(b)),
      busy: isBusy(),
      images: resultSrcs().size,
      running: jobs.size > 0,
    };
  }
  /** Opens the settings trigger and lists every clickable option label, so ratio labels can be mapped. */
  async function listOptions() {
    const out = { triggers: [], optionsAfterOpening: [] };
    const trig = queryAll(SELECTORS.settingsButton).filter((b) => b.matches(SELECTORS.optionExclude));
    out.triggers = trig.map((t) => labelOf(t));
    if (!trig.length) return { ...out, error: 'No settings trigger found (SELECTORS.settingsButton).' };
    realClick(trig[0]);
    await sleep(600);
    out.optionsAfterOpening = [...document.querySelectorAll(SELECTORS.optionElements)]
      .filter((e) => isVisible(e) && !e.matches(SELECTORS.optionExclude))
      .map(describe).filter((d) => d.text && d.text.length <= 60);
    realClick(document.body);
    key(document.body, 'keydown', 'Escape');
    return out;
  }
  function probe() {
    const prompt = queryAll(SELECTORS.promptInput);
    return {
      ...status(),
      promptCandidates: prompt.map(describe),
      generateCandidates: queryAll(SELECTORS.generateButton).filter((b) => !isDisabled(b)).slice(0, 10).map(describe),
      settingsCandidates: queryAll(SELECTORS.settingsButton).slice(0, 15).map(describe),
      fileInputs: document.querySelectorAll(SELECTORS.fileInput).length,
      errorsNow: [...errorTexts()],
      visibleButtons: [...document.querySelectorAll('button, [role="button"]')].filter(isVisible).slice(0, 40).map(describe),
    };
  }

  // ====================================================================
  // messages from the extension
  // ====================================================================
  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    switch (msg && msg.type) {
      case 'PING': sendResponse(status()); break;
      case 'PROBE': sendResponse(probe()); break;
      case 'RUN_JOB':
        if (jobs.size) { sendResponse({ ok: false, error: 'A job is already running on this tab.' }); break; }
        sendResponse({ ok: true });
        runJob(msg.job);
        break;
      case 'FETCH_DATA_URL':
        toDataUrl(msg.src, msg.wantPng).then((dataUrl) => sendResponse({ ok: true, dataUrl }), (e) => sendResponse({ ok: false, error: e.message }));
        return true;
      case 'LIST_OPTIONS':
        listOptions().then(sendResponse);
        return true;
      case 'CANCEL_JOB': {
        const j = jobs.get(msg.runId);
        if (j) j.cancelled = true;
        sendResponse({ ok: true });
        break;
      }
      default: return false;
    }
    return false;
  });
})();
