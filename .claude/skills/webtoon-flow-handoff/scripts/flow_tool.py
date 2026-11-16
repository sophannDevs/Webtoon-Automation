#!/usr/bin/env python3
"""Flow-by-hand helper for the webtoon harness (no Codex).

Run from the project root (the folder that contains _workspace/):

  python -I .claude/skills/webtoon-flow-handoff/scripts/flow_tool.py handoff --episode 1 [--only a,b] [--refs]
  python -I .claude/skills/webtoon-flow-handoff/scripts/flow_tool.py status  --episode 1 [--fix]
  python -I .claude/skills/webtoon-flow-handoff/scripts/flow_tool.py import  --episode 1 [--from DIR] [--only a,b] [--apply]
  python -I .claude/skills/webtoon-flow-handoff/scripts/flow_tool.py place   --episode 1 SRC NAME

handoff  Writes an HTML page listing every image to make in Google Flow:
         _workspace/04_visual/ep{NN}_flow_handoff.html (ep{NN}_flow_redraw.html with --only).
status   Checks every expected image: present, readable, PNG, not a duplicate.
         --fix converts misnamed formats (panel_001.jpg -> panel_001.png).
import   Maps downloaded images in DIR (default _workspace/_inbox), oldest first, onto the
         images still needed, in card order. Dry run unless --apply. Converts to PNG.
place    Puts one downloaded image in place under a card name (converts to PNG).

Nothing is deleted: replaced files move to an _originals/ folder next to them, and
imported downloads move to DIR/_imported/.
"""
import argparse
import hashlib
import html
import os
import re
import shutil
import sys
import time
from pathlib import Path
from urllib.parse import quote

IMAGE_EXTS = (".png", ".jpg", ".jpeg", ".webp")
PNG_MAGIC = b"\x89PNG\r\n\x1a\n"
HEADER_RE = re.compile(r"^#{1,6}\s+(.*?)\s*#*\s*$")
FIELD_RE = re.compile(r"^\s*[-*]\s+([A-Za-z_]+)\s*:\s*(.*)$")
NAME_RE = re.compile(r"[A-Za-z0-9_.\-]+")
FLOW_URL = "https://labs.google/flow"

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass


# ---------------------------------------------------------------- parsing

def ep_tag(ep):
    digits = re.sub(r"\D", "", str(ep))
    if not digits:
        sys.exit("--episode needs a number, e.g. --episode 1")
    return "ep%02d" % int(digits)


def unquote_value(v):
    v = v.strip().strip("`").strip()
    pairs = (('"', '"'), ("“", "”"), ("'", "'"))
    for a, b in pairs:
        if len(v) >= 2 and v.startswith(a) and v.endswith(b):
            return v[1:-1].strip()
    return v


def split_list(s):
    out = []
    for part in re.split(r"[,;]", s or ""):
        p = unquote_value(part)
        if p and p.lower() not in ("none", "-", "n/a", "없음"):
            out.append(p)
    return out


def parse_prompt_file(path, kind, default_dir, root):
    """Read '### name' blocks with '- key: value' fields. Keeps blocks that have a prompt."""
    blocks, cur, key = [], None, None
    for raw in path.read_text(encoding="utf-8-sig").splitlines():
        line = raw.rstrip()
        if line.strip().startswith("```"):
            continue
        h = HEADER_RE.match(line)
        if h:
            # Card headings look like "### panel_001" or "### DOHYUN_turnaround (front/side)".
            first = (h.group(1).strip().strip("`").split() or [""])[0].strip("`:")
            is_card = NAME_RE.fullmatch(first) and re.search(r"[_0-9]", first)
            cur = {"name": first} if is_card else None
            if cur is not None:
                blocks.append(cur)
            key = None
            continue
        if cur is None:
            continue
        m = FIELD_RE.match(line)
        if m:
            key = m.group(1).lower()
            cur[key] = m.group(2).strip()
            continue
        if key and line.strip():
            cur[key] = (cur[key] + " " + line.strip()).strip()

    items = []
    for b in blocks:
        if not b.get("prompt"):
            continue
        b["prompt"] = unquote_value(b["prompt"])
        b["kind"] = kind
        out = unquote_value(b.get("output", ""))
        target = Path(out) if out else default_dir / (b["name"] + ".png")
        if not target.is_absolute():
            target = root / target
        b["target"] = target.with_suffix(".png")
        b["attach_list"] = split_list(b.get("attach", ""))
        items.append(b)
    return items


def resolve_attach(name, root):
    vis = root / "_workspace" / "04_visual"
    p = Path(name)
    cands = [p] if p.is_absolute() else [root / p, vis / p, vis / "refs" / p, vis / "refs" / p.name]
    if not p.suffix:
        cands += [c.with_suffix(".png") for c in list(cands)]
    for c in cands:
        if c.exists():
            return c, True
    return cands[0], False


def guess_aspect(root):
    sb = root / "_workspace" / "04_visual" / "style-bible.md"
    if not sb.exists():
        return ""
    for line in sb.read_text(encoding="utf-8-sig", errors="replace").splitlines():
        if re.search(r"aspect|화면비|비율", line, re.I):
            m = re.search(r"\b(\d{1,2}\s*:\s*\d{1,2})\b", line)
            if m:
                return m.group(1).replace(" ", "")
    return ""


def load(root, tag):
    vis = root / "_workspace" / "04_visual"
    refs, panels = [], []
    ref_file = vis / "refs" / "ref_prompts.md"
    if ref_file.exists():
        refs = parse_prompt_file(ref_file, "ref", vis / "refs", root)
    panel_file = vis / ("%s_prompts.md" % tag)
    if panel_file.exists():
        panels = parse_prompt_file(panel_file, "panel", root / "_workspace" / "05_panels" / tag, root)
    if not refs and not panels:
        sys.exit("No prompts found. Expected %s and/or %s" % (panel_file, ref_file))
    return refs, panels


def pick(items, only):
    if not only:
        return items
    wanted = [n.strip() for n in only.split(",") if n.strip()]
    by_name = {it["name"]: it for it in items}
    unknown = [n for n in wanted if n not in by_name]
    if unknown:
        sys.exit("Unknown card name(s): %s" % ", ".join(unknown))
    return [it for it in items if it["name"] in set(wanted)]


# ---------------------------------------------------------------- image checks

def md5(path):
    h = hashlib.md5()
    with open(path, "rb") as fh:
        for chunk in iter(lambda: fh.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def readable(path):
    try:
        from PIL import Image
        with Image.open(path) as im:
            im.verify()
        return True
    except ImportError:
        head = path.read_bytes()[:12]
        return head.startswith(PNG_MAGIC) or head[:3] == b"\xff\xd8\xff" or head[8:12] == b"WEBP"
    except Exception:
        return False


def inspect(target):
    """Return (state, extra). States: ok, not-png, empty, unreadable, wrong-format, missing."""
    if target.exists():
        if target.stat().st_size == 0:
            return "empty", None
        if not readable(target):
            return "unreadable", None
        with open(target, "rb") as fh:
            if fh.read(8) != PNG_MAGIC:
                return "not-png", target
        return "ok", None
    for ext in IMAGE_EXTS[1:]:
        for alt in (target.with_suffix(ext), target.with_suffix(ext.upper())):
            if alt.exists() and alt.stat().st_size > 0:
                return "wrong-format", alt
    return "missing", None


def stash(path):
    """Move a file into an _originals/ folder beside it instead of deleting it."""
    dest_dir = path.parent / "_originals"
    dest_dir.mkdir(parents=True, exist_ok=True)
    stamp = time.strftime("%Y%m%d-%H%M%S")
    dest = dest_dir / ("%s_%s%s" % (path.stem, stamp, path.suffix))
    n = 1
    while dest.exists():
        dest = dest_dir / ("%s_%s_%d%s" % (path.stem, stamp, n, path.suffix))
        n += 1
    shutil.move(str(path), str(dest))
    return dest


def save_as_png(src, target):
    """Write src into target as a PNG. Existing target (and same-stem other formats) are stashed."""
    target.parent.mkdir(parents=True, exist_ok=True)
    tmp = target.with_name(target.stem + ".__tmp__.png")
    try:
        from PIL import Image
        with Image.open(src) as im:
            im.load()
            if im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
            im.save(tmp, "PNG")
    except ImportError:
        with open(src, "rb") as fh:
            if fh.read(8) != PNG_MAGIC:
                sys.exit("Pillow is needed to convert %s to PNG. Install it with: pip install pillow" % src)
        shutil.copyfile(src, tmp)
    # The new PNG is written; now move the old file(s) for this card aside (never delete).
    if target.exists():
        stash(target)
    for ext in IMAGE_EXTS[1:]:
        for alt in (target.with_suffix(ext), target.with_suffix(ext.upper())):
            if alt.exists():
                stash(alt)
    os.replace(tmp, target)


# ---------------------------------------------------------------- commands

def cmd_status(args):
    root, tag = Path(args.root).resolve(), ep_tag(args.episode)
    refs, panels = load(root, tag)
    if args.fix:
        fixed = []
        for it in refs + panels:
            state, extra = inspect(it["target"])
            if state in ("wrong-format", "not-png"):
                save_as_png(extra, it["target"])
                fixed.append(it["name"])
        if fixed:
            print("Converted to PNG (originals kept in _originals/): %s\n" % ", ".join(fixed))

    report, hashes = {}, {}
    for it in refs + panels:
        state, extra = inspect(it["target"])
        report[it["name"]] = (state, extra)
        if state in ("ok", "not-png"):
            hashes.setdefault(md5(it["target"]), []).append(it["name"])
    dupes = [names for names in hashes.values() if len(names) > 1]

    print("Flow image status - %s" % tag)
    for label, group in (("Character sheets", refs), ("Panels", panels)):
        if group:
            ok = sum(1 for it in group if report[it["name"]][0] == "ok")
            print("  %s: %d/%d ready" % (label, ok, len(group)))

    def names(state):
        return [n for n, (s, _) in report.items() if s == state]

    problems = False
    if not panels:
        problems = True
        print("  No panel prompts yet: %s" % (root / "_workspace" / "04_visual" / ("%s_prompts.md" % tag)))
    for state, label in (("missing", "Missing"),
                         ("wrong-format", "Saved as JPG/WebP, fix with --fix"),
                         ("not-png", "Named .png but not a PNG, fix with --fix"),
                         ("empty", "Empty file (0 bytes), save it again"),
                         ("unreadable", "Not a readable image, save it again")):
        lst = names(state)
        if lst:
            problems = True
            if state == "wrong-format":
                lst = ["%s (%s)" % (n, report[n][1].suffix) for n in lst]
            print("  %s (%d): %s" % (label, len(lst), ", ".join(lst)))
    if dupes:
        problems = True
        print("  Same image saved under two names: %s" % "; ".join(" = ".join(d) for d in dupes))

    expected = {str(it["target"].resolve()).lower() for it in refs + panels}
    alts = {str(report[n][1].resolve()).lower() for n in report if report[n][0] == "wrong-format"}
    dirs = {it["target"].parent for it in refs + panels}
    for d in sorted(dirs):
        if not d.exists():
            continue
        stray = [p.name for p in d.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_EXTS
                 and str(p.resolve()).lower() not in expected | alts]
        if stray:
            print("  Files in %s not named like any card (%d): %s" % (d, len(stray), ", ".join(sorted(stray))))

    total = len(refs) + len(panels)
    if problems:
        print("Result: NOT READY")
        return 1
    print("Result: READY - all %d images present, readable, unique PNGs" % total)
    return 0


def cmd_import(args):
    root, tag = Path(args.root).resolve(), ep_tag(args.episode)
    refs, panels = load(root, tag)
    src = Path(args.src) if args.src else root / "_workspace" / "_inbox"
    if not src.is_absolute():
        src = root / src
    if not src.exists():
        src.mkdir(parents=True)
        print("Created the inbox folder: %s\nPut the Flow downloads there, in card order, and run this again." % src)
        return 1
    files = sorted((p for p in src.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_EXTS),
                   key=lambda p: (p.stat().st_mtime, p.name))
    if args.only:
        targets = pick(refs + panels, args.only)
    else:
        targets = [it for it in refs + panels if inspect(it["target"])[0] != "ok"]
    if not files:
        print("No images in %s" % src)
        return 1
    if not targets:
        print("Nothing to import: every card already has a good image. Use --only to replace specific ones.")
        return 1

    plan = list(zip(files, targets))
    print("Import plan (downloads, oldest first -> cards, in order):")
    for f, it in plan:
        when = time.strftime("%H:%M:%S", time.localtime(f.stat().st_mtime))
        note = " (replaces current image)" if it["target"].exists() else ""
        print("  %s  [saved %s]  ->  %s%s" % (f.name, when, it["target"].name, note))
    if len(files) > len(targets):
        print("  Not used (%d extra): %s" % (len(files) - len(targets), ", ".join(f.name for f in files[len(targets):])))
    if len(files) < len(targets):
        print("  Still needed after this (%d): %s" % (len(targets) - len(files), ", ".join(it["name"] for it in targets[len(files):])))
    if not args.apply:
        print("Dry run only. Check the mapping, then run again with --apply.")
        return 0

    done_dir = src / "_imported"
    done_dir.mkdir(exist_ok=True)
    for f, it in plan:
        save_as_png(f, it["target"])
        dest = done_dir / f.name
        n = 1
        while dest.exists():
            dest = done_dir / ("%s_%d%s" % (f.stem, n, f.suffix))
            n += 1
        shutil.move(str(f), str(dest))
    print("Imported %d image(s). Downloads moved to %s" % (len(plan), done_dir))
    return 0


def cmd_place(args):
    root, tag = Path(args.root).resolve(), ep_tag(args.episode)
    refs, panels = load(root, tag)
    it = pick(refs + panels, args.name)[0]
    src = Path(args.src)
    if not src.exists():
        sys.exit("File not found: %s" % src)
    save_as_png(src, it["target"])
    print("Saved %s as %s" % (src, it["target"]))
    return 0


# ---------------------------------------------------------------- handoff page

CSS = """
:root{--bg:#f7f7f5;--card:#fff;--text:#1d1d1b;--muted:#6b6a65;--line:#e3e1da;--accent:#3c5fd6;
--accent-bg:#eef2fd;--warn-bg:#fdf3e3;--warn:#8a5a0b;--ok:#2f7a3d;--code:#f1f0ec}
@media (prefers-color-scheme:dark){:root{--bg:#161615;--card:#1f1f1d;--text:#ecebe6;--muted:#a3a29b;
--line:#34332f;--accent:#8fa8ff;--accent-bg:#232a40;--warn-bg:#3a2e17;--warn:#f0c674;--ok:#7fcf8c;--code:#2a2a27}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);
font:15px/1.55 system-ui,-apple-system,"Segoe UI","Malgun Gothic","Apple SD Gothic Neo",sans-serif}
main{max-width:920px;margin:0 auto;padding:24px 16px 80px}
h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:28px 0 8px}h3{font-size:16px;margin:0}
a{color:var(--accent)}
.sub{color:var(--muted);margin:0 0 16px}
.box{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 20px}
.box ol{margin:0;padding-left:20px}.box li{margin:4px 0}
.path{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:6px 0}
code{font:13px ui-monospace,Consolas,monospace;background:var(--code);padding:2px 6px;border-radius:6px;word-break:break-all}
.toolbar{position:sticky;top:0;z-index:5;background:var(--bg);padding:10px 0;margin-top:16px;
display:flex;gap:16px;align-items:center;flex-wrap:wrap;border-bottom:1px solid var(--line)}
.progress{font-weight:600}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px;margin:12px 0;scroll-margin-top:64px}
.card.done{opacity:.55}.hide-done .card.done{display:none}
.card header{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:8px}
.chip{font-size:12px;color:var(--muted);border:1px solid var(--line);border-radius:999px;padding:1px 8px}
.chip.ok{color:var(--ok);border-color:currentColor}
.spacer{flex:1}
.row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:6px 0}
.lbl{font-size:12px;letter-spacing:.03em;color:var(--muted);min-width:110px}
.reason{background:var(--warn-bg);color:var(--warn);border-radius:8px;padding:8px 12px;margin:8px 0}
.missing{color:var(--warn)}
pre{white-space:pre-wrap;word-break:break-word;background:var(--code);border-radius:8px;padding:12px;margin:6px 0 0;
font:13px/1.5 ui-monospace,Consolas,"Malgun Gothic",monospace}
button{font:inherit;font-size:13px;border:1px solid var(--line);background:var(--card);color:var(--text);
border-radius:8px;padding:4px 10px;cursor:pointer}
button:hover{border-color:var(--accent);color:var(--accent)}
button.copied{background:var(--accent-bg);color:var(--accent)}
.thumb img{max-width:220px;max-height:220px;border-radius:8px;border:1px solid var(--line);display:block;margin-top:6px}
@media (max-width:600px){.lbl{min-width:0;width:100%}}
"""

JS = """
(function(){
var KEY='flowdone:'+location.pathname+':';
function get(k){try{return localStorage.getItem(KEY+k)==='1'}catch(e){return false}}
function put(k,v){try{if(v){localStorage.setItem(KEY+k,'1')}else{localStorage.removeItem(KEY+k)}}catch(e){}}
var cards=Array.prototype.slice.call(document.querySelectorAll('.card'));
function update(){var d=cards.filter(function(c){return c.classList.contains('done')}).length;
document.getElementById('progress').textContent=d+' of '+cards.length+' marked done';}
cards.forEach(function(c){var k=c.getAttribute('data-key');var cb=c.querySelector('input.donebox');
if(get(k)){cb.checked=true;c.classList.add('done')}
cb.addEventListener('change',function(){c.classList.toggle('done',cb.checked);put(k,cb.checked);update();});});
update();
document.getElementById('hidedone').addEventListener('change',function(e){document.body.classList.toggle('hide-done',e.target.checked)});
function copyText(t,btn){
function ok(){var o=btn.getAttribute('data-label')||btn.textContent;btn.setAttribute('data-label',o);
btn.textContent='Copied';btn.classList.add('copied');setTimeout(function(){btn.textContent=o;btn.classList.remove('copied')},1200)}
function fallback(){var ta=document.createElement('textarea');ta.value=t;ta.style.position='absolute';ta.style.left='-9999px';
document.body.appendChild(ta);ta.select();try{document.execCommand('copy');ok()}catch(e){}document.body.removeChild(ta)}
if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(ok,fallback)}else{fallback()}}
document.addEventListener('click',function(e){var b=e.target.closest('button[data-copy]');if(!b)return;
var scope=b.closest('.card')||document;var el=scope.querySelector(b.getAttribute('data-copy'));if(el)copyText(el.textContent,b);});
})();
"""


def rel_url(path, base_dir):
    r = os.path.relpath(str(path), str(base_dir)).replace(os.sep, "/")
    return quote(r, safe="/._-")


def e(s):
    return html.escape(str(s), quote=True)


def render_card(it, out_dir, root, default_aspect):
    state, extra = inspect(it["target"])
    chips = []
    if it.get("scene_id"):
        chips.append('<span class="chip">%s</span>' % e(it["scene_id"]))
    aspect = it.get("aspect") or default_aspect
    if aspect:
        chips.append('<span class="chip">Aspect %s</span>' % e(aspect))
    if state == "ok":
        chips.append('<span class="chip ok">Saved &#10003;</span>')

    parts = ['<article class="card" data-key="%s">' % e(it["name"]),
             '<header><h3>%s</h3>%s<span class="spacer"></span>'
             '<label><input type="checkbox" class="donebox"> Done</label></header>' % (e(it["name"]), "".join(chips))]
    if it.get("redraw_reason"):
        parts.append('<div class="reason"><b>Why redraw:</b> %s</div>' % e(it["redraw_reason"]))
    parts.append('<div class="row"><span class="lbl">Save as</span><code class="fn">%s</code>'
                 '<button data-copy=".fn">Copy name</button></div>' % e(it["target"].name))
    if it["attach_list"]:
        links = []
        for a in it["attach_list"]:
            p, found = resolve_attach(a, root)
            if found:
                links.append('<a href="%s" target="_blank">%s</a>' % (rel_url(p, out_dir), e(p.name)))
            else:
                links.append('<span class="missing">%s (not made yet)</span>' % e(Path(a).name))
        parts.append('<div class="row"><span class="lbl">Attach in Flow</span>%s</div>' % ", ".join(links))
    parts.append('<div class="row"><span class="lbl">Prompt</span><button data-copy="pre">Copy prompt</button></div>'
                 '<pre>%s</pre>' % e(it["prompt"]))
    current = it["target"] if state in ("ok", "not-png") else (extra if state == "wrong-format" else None)
    if current is not None:
        parts.append('<div class="thumb"><span class="lbl">Current image</span>'
                     '<img loading="lazy" src="%s" alt="current %s"></div>' % (rel_url(current, out_dir), e(it["name"])))
    parts.append("</article>")
    return "\n".join(parts)


def path_row(label, path, ident):
    return ('<div class="path"><span class="lbl">%s</span><code id="%s">%s</code>'
            '<button data-copy="#%s">Copy</button></div>' % (e(label), ident, e(path), ident))


def cmd_handoff(args):
    root, tag = Path(args.root).resolve(), ep_tag(args.episode)
    refs, panels = load(root, tag)
    redraw = bool(args.only)
    if redraw:
        chosen = pick(refs + panels, args.only)
        refs = [it for it in chosen if it["kind"] == "ref"]
        panels = [it for it in chosen if it["kind"] == "panel"]
    elif not args.refs:
        refs = [it for it in refs if inspect(it["target"])[0] != "ok"]

    vis = root / "_workspace" / "04_visual"
    out = Path(args.out) if args.out else vis / ("%s_flow_%s.html" % (tag, "redraw" if redraw else "handoff"))
    if not out.is_absolute():
        out = root / out
    out.parent.mkdir(parents=True, exist_ok=True)
    inbox = root / "_workspace" / "_inbox"
    inbox.mkdir(parents=True, exist_ok=True)
    aspect = args.aspect or guess_aspect(root)

    title = "Flow %s - %s" % ("redraws" if redraw else "handoff", tag)
    if redraw:
        steps = ["These images did not pass the check. Each card says why.",
                 "Open <a href=\"%s\" target=\"_blank\">Google Flow</a>, attach the listed reference images, "
                 "set the aspect ratio, paste the new prompt and generate. Keep the best result." % FLOW_URL,
                 "Save it with the exact <b>Save as</b> name in the folder for its section "
                 "(it replaces the old image; the old one is kept in <code>_originals</code>). "
                 "Or save all downloads into the inbox folder in card order and ask Claude to "
                 "<b>import the redraws</b>.",
                 "Tell Claude: <b>redraws are ready</b> (다시 그린 거 넣었어)."]
    else:
        steps = ["Open <a href=\"%s\" target=\"_blank\">Google Flow</a> and make the images there." % FLOW_URL]
        if refs:
            steps.append("Make the <b>character sheets</b> first. Check that each one shows the same person in "
                         "every view, and regenerate it if not. The panels use them as references.")
        else:
            steps.append("The character sheets already exist. Reuse them as references for the panels.")
        steps += ["For each panel: attach the images under <b>Attach in Flow</b> as references (if Flow offers it), "
                  "pick the aspect ratio, paste the prompt, generate, keep the best one and download it.",
                  "Save each image into the folder shown for its section, named exactly as <b>Save as</b>. "
                  "Shortcut: save every download into the inbox folder <i>in card order</i>, then ask Claude to "
                  "<b>import the inbox</b>.",
                  "When everything is saved, tell Claude: <b>images are ready</b> (이미지 다 넣었어)."]

    body = ['<main>', '<h1>%s</h1>' % e(title),
            '<p class="sub">%d character sheet(s), %d panel(s). Generated %s.</p>'
            % (len(refs), len(panels), time.strftime("%Y-%m-%d %H:%M")),
            '<div class="box"><ol>%s</ol>' % "".join("<li>%s</li>" % s for s in steps),
            path_row("Inbox folder", inbox, "p-inbox"), '</div>',
            '<div class="toolbar"><span class="progress" id="progress"></span>'
            '<label><input type="checkbox" id="hidedone"> Hide done</label></div>']
    if refs:
        body.append("<h2>Character sheets</h2>")
        body.append(path_row("Save in", refs[0]["target"].parent, "p-refs"))
        body += [render_card(it, out.parent, root, "") for it in refs]
    if panels:
        body.append("<h2>Panels</h2>")
        body.append(path_row("Save in", panels[0]["target"].parent, "p-panels"))
        body += [render_card(it, out.parent, root, aspect) for it in panels]
    body.append("</main>")

    page = ("<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\">"
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
            "<title>%s</title><style>%s</style></head><body>\n%s\n<script>%s</script></body></html>\n"
            % (e(title), CSS, "\n".join(body), JS))
    out.write_text(page, encoding="utf-8")
    print("Wrote %s (%d character sheets, %d panels)" % (out, len(refs), len(panels)))
    return 0


def main():
    ap = argparse.ArgumentParser(description="Flow-by-hand helper for the webtoon harness.")
    ap.add_argument("--root", default=".", help="project root that contains _workspace/ (default: current folder)")
    sub = ap.add_subparsers(dest="cmd", required=True)

    h = sub.add_parser("handoff", help="build the Flow handoff page")
    h.add_argument("--episode", required=True)
    h.add_argument("--only", help="comma-separated card names (redraw page)")
    h.add_argument("--refs", action="store_true", help="include character sheets even if they exist")
    h.add_argument("--aspect", help="aspect ratio to show, e.g. 9:16 (default: read from style-bible.md)")
    h.add_argument("--out", help="output HTML path")

    s = sub.add_parser("status", help="check the saved images")
    s.add_argument("--episode", required=True)
    s.add_argument("--fix", action="store_true", help="convert JPG/WebP-saved images to PNG")

    i = sub.add_parser("import", help="move downloads from an inbox folder onto the cards")
    i.add_argument("--episode", required=True)
    i.add_argument("--from", dest="src", help="folder with downloads (default: _workspace/_inbox)")
    i.add_argument("--only", help="comma-separated card names to fill (e.g. redraws), in card order")
    i.add_argument("--apply", action="store_true", help="actually do it (default is a dry run)")

    p = sub.add_parser("place", help="put one downloaded image in place")
    p.add_argument("--episode", required=True)
    p.add_argument("src")
    p.add_argument("name")

    args = ap.parse_args()
    return {"handoff": cmd_handoff, "status": cmd_status, "import": cmd_import, "place": cmd_place}[args.cmd](args)


if __name__ == "__main__":
    sys.exit(main())
