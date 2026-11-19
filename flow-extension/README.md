# Webtoon Flow Runner (Chrome extension, Manifest V3)

Reads `ep01_flow_handoff.html` (the page `flow_tool.py handoff` writes) and types each character-sheet
and panel prompt into Google Flow from a Chrome side panel. No build step, no dependencies.

## Install

1. Open `chrome://extensions`, turn on **Developer mode**.
2. **Load unpacked**, choose this `flow-extension/` folder.
3. Pin the extension and click its icon. The side panel opens and stays open next to the Flow tab.
4. Open `https://flow.google.com` in a tab and open a project. The badge in the panel turns green
   (**Flow connected**) once the prompt box is found.

Requires Chrome 116 or newer (Side Panel API).

## Load the handoff file

- **Drag and drop**, or **Choose file…**, with `_workspace/04_visual/ep01_flow_handoff.html`.
- **file:// path**: paste `file:///Users/<you>/Webtoon-Automation/_workspace/04_visual/ep01_flow_handoff.html`
  and press Load. This needs **Allow access to file URLs**:
  `chrome://extensions` → Webtoon Flow Runner → Details → turn it on. Spaces in the path must be `%20`.

Re-loading the same episode keeps statuses and your prompt edits. A prompt that changed in the file
resets that item to Pending. Re-run `flow_tool.py handoff`, then load again, to pick up new prompts.

## What is parsed

| Handoff markup | Field |
|---|---|
| `<h2>` "Character sheets" / "Panels" | `kind` |
| `article.card[data-key]`, `h3` | `key`, `title` |
| `.chip` "S02a / location: LOC_… · view" | `scene`, `locationId`, `view` |
| `.chip` "Aspect 3:4" | `aspect` |
| `code.fn` | `fileName` ("Save as") |
| `.row` "Attach in Flow" | `attach[]` (reference images to attach by hand) |
| `pre` | `prompt` |
| `.reason` | redraw reason |

The parser warns about empty prompts, missing aspect ratios, duplicate keys, and counts that differ
from the page's own "21 character sheet(s), 64 panel(s)" line.

## Pipeline and downloads

**Start All** runs a strict two-stage pipeline:

1. **Stage 1: Characters.** Each item goes `Pending` → `Generating` → `Downloading` → `Saved (name.png)`.
   An item is only Saved after Flow finished rendering **and** Chrome reports the download `complete`
   (and the file is non-empty). The next item never starts before that.
2. **Stage 2: Panels** start automatically once every character sheet is saved (toggle
   **Auto-start Panels after Characters**, on by default). If any character failed, panels do not start;
   fix it, **Retry Failed**, then **Start All**.

Of the images Flow returns for a prompt (e.g. x2) the one with the most pixels is saved. Files use the
exact **Save as** name from the handoff page (illegal characters replaced, extension kept) and are
written with `chrome.downloads.download({ saveAs: false, conflictAction: "overwrite" })`, so no dialog
appears and re-runs overwrite. The log records the path Chrome reports and a timestamp for every file.

### Save to a folder I choose (recommended)

Settings → **Save images to → A folder I choose**, then **Choose folder…** and pick your
`Webtoon-Automation` project folder. Files are written directly to
`_workspace/04_visual/refs/<name>.png` and `_workspace/05_panels/ep01/<name>.png` with the exact names from
the handoff page. Chrome's download system (and any other extension that renames downloads) is not
involved. Chrome asks once per session to re-allow access: press **Start now** / **Start All**.

If you use "Chrome's Downloads folder" instead, the extension checks the final name. When another
extension renamed the file, the item is marked **Failed** (with the name Chrome used) instead of Saved.

Flow returns JPEG; images are converted to real PNG when the handoff name ends in `.png`.

### Where files land

Chrome only writes relative to its Downloads folder, so each file goes to
`<Downloads>/<Download subfolder>/<file>`. The two subfolder fields are filled from the handoff page
(`.../_workspace/04_visual/refs` and `.../_workspace/05_panels/ep01`, prefixed with
`Webtoon-Automation/_workspace`) and are editable. To save straight into this project:

- **Option A:** `chrome://settings/downloads` → Location → your home folder (`/Users/<you>`), and turn
  **Ask where to save each file** off. Files then land in
  `~/Webtoon-Automation/_workspace/04_visual/refs/` and `.../05_panels/ep01/`.
- **Option B:** keep Chrome's Downloads folder and symlink:
  `ln -s ~/Webtoon-Automation/_workspace ~/Downloads/Webtoon-Automation/_workspace`
  (create `~/Downloads/Webtoon-Automation` first).

Another extension that rewrites download names (e.g. other Flow downloaders) can override the file
name; disable it while running this one.

## Reference images (Attach in Flow)

Each handoff card lists the images its prompt "matches" under **Attach in Flow**. The parser stores them as
`requiresReference` and `referenceTargets` (file names such as `SEOHA_turnaround.png`; up to 3 per item in ep01).

- **Cache:** every generated image is also kept (as bytes) in the extension's IndexedDB, under its handoff
  file name. Chrome cannot read your disk back into a page, so this cache is what gets re-attached. You can add
  or replace an image by hand: **Upload** next to a reference on any card, or **Upload reference image(s)…**
  in the *Reference image cache* panel (Queue & Logs). A `*.png` upload is converted to real PNG.
- **Before each prompt:** leftover references in Flow's prompt bar are removed, then the required ones are
  rebuilt as `File` objects and attached, and the extension waits (MutationObserver) until Flow shows each
  thumbnail and has finished uploading. Only then is the prompt typed and submitted.
- **Never without its reference:** if a required image is not in the cache the item becomes
  `Blocked (Missing Reference: <name>)`. Settings → *When a required reference image is missing*: continue
  with the next item, or pause so you can upload it and press Resume. **Start All** re-checks Blocked items.
- **Order:** within a stage, an image that others attach is generated before them.
- **Cards** show each reference as `Ready` (with a thumbnail), `Pending Stage 1` / `Pending Stage 2`,
  `Blocked`, `Failed` or `Missing`. The log records `Attached reference: <file> -> <item> (via <method>)`.

How the file reaches Flow (tried in this order, each verified by a new thumbnail appearing): the "+" button's
**Upload** entry (a small page script, `src/page-hook.js`, stops the native file dialog and hands the file to
the input), any `<input type=file>`, then a drop on the prompt bar. If Flow's markup differs, adjust
`addRefButton`, `uploadMenuItem`, `refThumb` and `refRemove` in `SELECTORS` (`src/content.js`).

## Images the page cannot read

Flow serves generated images from another origin that the page (and so the content script) is not allowed to
fetch. The extension's service worker fetches the URL itself, which needs host permission (`https://*/*` in
`manifest.json`; narrow it to the image host once you know it, for example the origin named in the log line
"The page cannot read the image … from <origin>"). It then converts JPEG to real PNG, caches the bytes and saves
the exact file name. The `debugger` permission is used only for the trusted click on the generate button.

## Aspect ratios

Flow shows ratios as icons, so the panel has an **Aspect ratio → label** box (one rule per line,
`ratio = label | label`). Use **List Flow settings options** (Queue & Logs) to see the exact labels
Flow exposes and edit the rules. If a ratio can't be matched the item fails instead of generating the
wrong shape (unless you untick that option).

## Using it

- **Characters / Panels** tabs: search, filter by status, **Edit** any prompt or aspect ratio (saved
  automatically; a running item uses the text it started with), **Run Single**, **Reset**.
- **Queue & Logs**: Start All, Pause (finishes the current item first), Resume, Stop, Retry Failed,
  cooldown 3–15 s, timeout, retries, and the execution log.
- Status, edits, settings and the log live in `chrome.storage.local` and survive restarts. An item that
  was in progress when the panel closed comes back as Pending.
- **Keep the side panel open while a queue runs.** The queue is driven from the panel.
- The extension does not attach reference images. Turn on *Pause before generating when references must
  be attached by hand* to stop on items that list "Attach in Flow" images, attach them, press Resume.

## Tests (Playwright)

```
npm install
npx playwright install chromium
npm test
```

The suite loads the unpacked extension in real Chromium and drives it against a **mock** Flow page
(`tests/fixtures/mock-flow.html`) served at `https://flow.google.com/` through request interception. It
never touches the real site. It covers: connection and probes, parsing the real ep01 file (21 + 64),
stage order, status transitions, download arguments and bytes, highest-resolution choice, failure
gating, edit + retry, auto-start toggle, strict aspect failure, Stop and Pause/Resume, persistence.

The browser is Chrome for Testing started by the test itself (visible by default; `HEADLESS=1 npm test`
for no window). Playwright is attached only over CDP and Chrome's own download handling is restored, so
the tests check the **real files on disk** under the exact names from the handoff page, valid PNG headers
and sizes, and the path Chrome reports. (With Playwright's own launcher every download is renamed to a
random ID, which is what you see in the download list there.)

Limit: the mock page encodes my reading of Flow's markup (taken from your probe output), so passing tests do
not prove every selector works on the live site.

## Submitting the prompt

After typing the prompt the extension waits for the arrow button to enable, then tries: simulated click →
native click → Enter in the prompt box → a trusted click through Chrome's debugger. It moves on to the next
method only if Flow showed no reaction (prompt cleared, busy indicator, button disabled, new image or
error). The last method needs the `debugger` permission, so Chrome may show a "debugging this browser" bar
for a moment. The log says which method worked.

## When Google Flow changes its page

I wrote the Flow side without access to Flow's DOM, so the selectors are educated guesses. Expect to tune
them on first use.

1. Open a Flow project, then **Queue & Logs → Probe Flow page**. It lists the prompt-box, generate-button
   and settings candidates it found, plus the first 40 visible buttons with their text and `aria-label`.
2. Edit the `SELECTORS` object at the top of `src/content.js`:
   - `promptInput`, `generateButton`, `settingsButton`: `css` list (tried in order) and optional `text` regex.
   - `optionElements`: what counts as a clickable option (aspect ratio, mode, outputs).
   - `resultImages`, `minResultSize`: what counts as a generated image.
   - `busy`, `busyText`, `errorContainers`, `errorText`: "still generating" and "failed" signals.
3. `chrome://extensions` → reload the extension, then reload the Flow tab.

Common symptoms: *Flow: no prompt box* (fix `promptInput`), *Could not set aspect ratio* (fix
`settingsButton`/`optionElements`, or untick "Fail the item if the aspect ratio can't be set"),
*Timed out waiting for a new image* (fix `resultImages`, or raise the timeout).

## Files

```
manifest.json
src/background.js   service worker: opens the panel, picks the Flow tab, relays messages, injects content.js if missing
src/content.js      SELECTORS + prompt injection + generation watcher (MutationObserver + 1 s polling)
src/parser.js       handoff HTML -> items
src/sidepanel.*     UI, two-stage queue, downloads, storage
tests/              Playwright end-to-end tests and the mock Flow page
```

## Flow's asset picker and the rights dialog

- The "+" (Add ingredients) button opens Flow's picker. The extension first looks for an upload with the exact file name
  (for example `SEOHA_turnaround.png`) and picks it, then presses **Add to prompt**. If there is none, it presses
  **Upload media**, hands over the cached image, waits for it to appear in the list, selects it and presses **Add to prompt**.
  If you regenerate a sheet, delete the old upload with the same name in Flow's Uploads, or the old one is reused.
- Flow's "Rights to use this image" dialog is confirmed with **I agree** automatically while a job runs
  (Settings → "Click I agree…"; untick it to confirm the dialog yourself).
- Downloads mode: tick "Chrome's download folder is already my Webtoon-Automation project folder" (default) so the path
  is not `Webtoon-Automation/Webtoon-Automation/...`.
