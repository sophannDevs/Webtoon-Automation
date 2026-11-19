// Runs in the PAGE's JavaScript world (manifest "world": "MAIN"), before Flow's own scripts.
// When the extension is attaching a reference image it sets data-wt-capture on <html>; while that flag is on,
// a script-triggered file chooser (input.click() on <input type=file>) is NOT opened. The input is tagged
// instead, so the extension can hand it the file directly. Outside that window nothing changes.
(() => {
  const nativeClick = HTMLInputElement.prototype.click;
  HTMLInputElement.prototype.click = function () {
    if (this.type === 'file' && document.documentElement.dataset.wtCapture === '1') {
      this.setAttribute('data-wt-captured', '1');
      if (!this.isConnected) { this.style.display = 'none'; document.documentElement.appendChild(this); }
      return;
    }
    return nativeClick.apply(this, arguments);
  };
})();
