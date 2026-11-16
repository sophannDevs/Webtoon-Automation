#!/usr/bin/env python3
"""Khmer-edition helper for the webtoon harness.

Run from the project root (the folder that contains _workspace/):

  python -I .claude/skills/webtoon-khmer-edition/scripts/km_tool.py check --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_tool.py build --episode 1 [--release] [--title T] [--ep-label L]

check  Compares the Khmer in 03_episode/ep{NN}_script_final.md (KM lines) with
       04_visual/ep{NN}_lettering.md (text_km), panel by panel, and checks the lettering is usable:
       every bubble has a position, no Korean letters in Khmer text, sizes are sane.
build  Builds the viewer from the lettering spec and the panel images (05_panels/ep{NN}/panel_*.png):
       06_assembly/ep{NN}/index.html, or with --release RELEASE/ep{NN}/index.html plus a panels/ copy.
       The viewer data comes only from the lettering spec, so fix text or positions there and rebuild.
"""
import argparse
import json
import re
import shutil
import sys
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

SKILL_DIR = Path(__file__).resolve().parent.parent
TEMPLATE = SKILL_DIR / "assets" / "viewer-km.html"
HANGUL = re.compile(r"[ᄀ-ᇿ㄰-㆏가-힣]")
SPACES = re.compile(r"[\s ​‌‍⁠]+")
KHMER_DIGITS = str.maketrans("0123456789", "០១២៣៤៥៦៧៨៩")
SUB_KEYS = {"speaker", "type", "text_km", "text_ko", "place", "read_order", "on", "style"}
TAILS = {"↙": ("down", 25), "↓": ("down", 50), "↘": ("down", 75),
         "↖": ("up", 25), "↑": ("up", 50), "↗": ("up", 75)}


def ep_tag(ep):
    digits = re.sub(r"\D", "", str(ep))
    if not digits:
        sys.exit("--episode needs a number, e.g. --episode 1")
    return "ep%02d" % int(digits), int(digits)


def unquote(v):
    v = (v or "").strip()
    for a, b in (('"', '"'), ("“", "”"), ("«", "»")):
        if len(v) >= 2 and v.startswith(a) and v.endswith(b):
            return v[1:-1].strip()
    return v


def norm(s):
    return SPACES.sub("", s or "")


# ---------------------------------------------------------------- lettering

def parse_lettering(path):
    """{panel_no: {"items": [...], "silent": bool, "gap_after": int, "art_space": str}}"""
    panels, cur, item = {}, None, None
    for raw in path.read_text(encoding="utf-8-sig").splitlines():
        line = raw.rstrip()
        m = re.match(r"^#{2,4}\s+panel_(\d{1,3})\b", line)
        if m:
            cur = panels.setdefault(int(m.group(1)), {"items": [], "silent": False, "gap_after": 0, "art_space": ""})
            item = None
            continue
        if line.startswith("#"):
            cur, item = None, None
            continue
        if cur is None:
            continue
        top = re.match(r"^- (\w+)\s*:\s*(.*)$", line)
        if top:
            key, val = top.group(1).lower(), top.group(2).strip()
            kind = re.match(r"^(bubble|env|sfx)(?:_\d+)?$", key)
            if kind and val == "":
                item = {"kind": kind.group(1)}
                cur["items"].append(item)
                continue
            item = None
            if key == "silent":
                cur["silent"] = val.lower().startswith("true")
            elif key == "gap_after":
                cur["gap_after"] = int(re.sub(r"\D", "", val) or 0)
            elif key == "art_space":
                cur["art_space"] = val
            continue
        sub = re.match(r"^\s{2,}- (.*)$", line)
        if sub and item is not None:
            last = None
            for part in sub.group(1).split(" · "):
                kv = re.match(r"^(\w+)\s*:\s*(.*)$", part.strip())
                if kv and kv.group(1).lower() in SUB_KEYS:
                    last = kv.group(1).lower()
                    item[last] = kv.group(2).strip()
                elif last:
                    item[last] += " · " + part.strip()
    for p in panels.values():
        for it in p["items"]:
            for k in ("type", "read_order"):
                if k in it:
                    it[k] = re.sub(r"\s+#.*$", "", it[k]).strip()
            it["text"] = unquote(it.get("text_km", ""))
            it["order"] = int(re.sub(r"\D", "", it.get("read_order", "")) or 99)
        p["items"].sort(key=lambda it: (it["kind"] != "bubble", it["order"]))
    return panels


def parse_place(s, kind):
    out = {}
    s = s or ""
    for k in ("x", "y", "w", "size"):
        m = re.search(r"(?<![A-Za-z])%s\s*[:=]?\s*(-?\d+(?:\.\d+)?)" % k, s)
        if m:
            out[k] = float(m.group(1))
    m = re.search(r"(?<![A-Za-z])rot\s*[:=]?\s*(-?\d+(?:\.\d+)?)", s) or re.search(r"(-?\d+(?:\.\d+)?)\s*°", s)
    if m:
        out["rot"] = float(m.group(1))
    if kind == "bubble":
        tail = None
        for ch, val in TAILS.items():
            if ch in s:
                tail = val
                break
        if tail is None:
            w = re.search(r"tail\s*[:=]?\s*(down|up)(?:[-\s]?(left|right))?", s, re.I)
            if w:
                side = {"left": 25, "right": 75}.get((w.group(2) or "").lower(), 50)
                tail = (w.group(1).lower(), side)
        if tail and not re.search(r"tail\s*[:=]?\s*none", s, re.I):
            out["tail"], out["tailX"] = tail
    return out


# ---------------------------------------------------------------- script

def parse_script(path):
    """{panel_no: {"dialogue": [...], "env": [...], "sfx": [...], "caption": [...]}} from KM lines."""
    panels, cur = {}, None
    for raw in path.read_text(encoding="utf-8-sig").splitlines():
        m = re.match(r"^#{2,4}\s+P(\d{1,3})\b", raw)
        if m:
            cur = panels.setdefault(int(m.group(1)), {"dialogue": [], "env": [], "sfx": [], "caption": []})
            continue
        if raw.startswith("#"):
            cur = None
            continue
        if cur is None:
            continue
        s = raw.strip()
        if re.match(r"^KM\s*(효과음|sfx)\s*:", s, re.I):
            cur["sfx"].append(s.split(":", 1)[1].strip())
        elif re.match(r"^KM\s*(캡션|caption)\s*:", s, re.I):
            cur["caption"].append(s.split(":", 1)[1].strip())
        elif s.startswith("KM:"):
            quotes = re.findall(r'["“]([^"”]+)["”]', s)
            cur["dialogue"] += quotes or [s[3:].split("៖", 1)[-1].strip()]
        elif re.match(r"^「[^」]*」\s*KM\s*:", s):
            cur["env"].append(s.split(":", 1)[1].strip())
    return {k: v for k, v in panels.items() if any(v.values())}


# ---------------------------------------------------------------- commands

def paths(root, tag):
    ws = root / "_workspace"
    return (ws / "03_episode" / ("%s_script_final.md" % tag),
            ws / "04_visual" / ("%s_lettering.md" % tag),
            ws / "05_panels" / tag)


def cmd_check(args):
    root = Path(args.root).resolve()
    tag, _ = ep_tag(args.episode)
    script_p, letter_p, _ = paths(root, tag)
    for p in (script_p, letter_p):
        if not p.exists():
            sys.exit("Missing file: %s" % p)
    script, letters = parse_script(script_p), parse_lettering(letter_p)

    problems, ok = [], 0
    for n in sorted(set(script) | {k for k, v in letters.items() if any(i["text"] for i in v["items"])}):
        s = script.get(n, {"dialogue": [], "env": [], "sfx": [], "caption": []})
        items = letters.get(n, {"items": []})["items"]
        groups = {
            "dialogue": [i["text"] for i in items if i["kind"] == "bubble" and i.get("type", "dialogue") != "narration"],
            "caption": [i["text"] for i in items if i["kind"] == "bubble" and i.get("type") == "narration"],
            "env": [i["text"] for i in items if i["kind"] == "env"],
            "sfx": [i["text"] for i in items if i["kind"] == "sfx"],
        }
        panel_ok = True
        for g, lett in groups.items():
            want, have = "".join(s[g]), "".join(lett)
            if norm(want) != norm(have):
                panel_ok = False
                if not lett:
                    problems.append("panel_%03d %s: in the script but missing from the lettering: %s" % (n, g, " / ".join(s[g])))
                elif not s[g]:
                    problems.append("panel_%03d %s: in the lettering but not in the script: %s" % (n, g, " / ".join(lett)))
                else:
                    problems.append("panel_%03d %s differs:\n      script:    %s\n      lettering: %s"
                                    % (n, g, " / ".join(s[g]), " / ".join(lett)))
        for i in items:
            label = "panel_%03d %s" % (n, i["kind"])
            if not i["text"]:
                problems.append("%s: no text_km" % label)
                panel_ok = False
                continue
            if HANGUL.search(i["text"]):
                problems.append("%s: Korean letters in the Khmer text: %s" % (label, i["text"]))
                panel_ok = False
            pl = parse_place(i.get("place", ""), i["kind"])
            need = ("x", "y", "w") if i["kind"] == "bubble" else ("x", "y")
            missing = [k for k in need if k not in pl]
            if missing:
                problems.append("%s: place is missing %s" % (label, ", ".join(missing)))
                panel_ok = False
            if i["kind"] == "bubble" and pl.get("w", 0) > 85:
                problems.append("%s: bubble wider than 85%% of the panel" % label)
                panel_ok = False
        ok += panel_ok

    for n, v in script.items():
        for g in v.values():
            for t in g:
                if HANGUL.search(t):
                    problems.append("script P%02d: Korean letters inside a KM line: %s" % (n, t))

    bubbles = sum(1 for v in letters.values() for i in v["items"] if i["kind"] == "bubble")
    print("Khmer check - %s" % tag)
    print("  Panels with Khmer: script %d / lettering %d · bubbles %d" % (
        len(script), sum(1 for v in letters.values() if any(i["text"] for i in v["items"])), bubbles))
    print("  Panels matching: %d" % ok)
    for p in problems:
        print("  - " + p)
    if problems:
        print("Result: PROBLEMS FOUND (%d)" % len(problems))
        return 1
    print("Result: OK - every Khmer line in the script is in the lettering, word for word")
    return 0


def glossary_names(root):
    g = root / "_workspace" / "02_story" / "glossary_km.md"
    names = []
    if g.exists():
        for line in g.read_text(encoding="utf-8-sig").splitlines():
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) >= 2 and " " in cells[1] and re.search(r"[ក-៿]", cells[1]):
                names.append(cells[1])
    return names


def cmd_build(args):
    root = Path(args.root).resolve()
    tag, num = ep_tag(args.episode)
    _, letter_p, panel_dir = paths(root, tag)
    if not letter_p.exists():
        sys.exit("Missing file: %s" % letter_p)
    images = sorted(panel_dir.glob("panel_*.png")) if panel_dir.exists() else []
    if not images:
        sys.exit("No panel images in %s" % panel_dir)
    letters = parse_lettering(letter_p)
    by_num = {}
    for img in images:
        m = re.match(r"panel_(\d{1,3})\.png$", img.name)
        if m:
            by_num[int(m.group(1))] = img

    if args.release:
        out_dir = root / "_workspace" / "RELEASE" / tag
        (out_dir / "panels").mkdir(parents=True, exist_ok=True)
        for img in by_num.values():
            shutil.copy2(img, out_dir / "panels" / img.name)
        src_of = lambda img: "panels/" + img.name
    else:
        out_dir = root / "_workspace" / "06_assembly" / tag
        out_dir.mkdir(parents=True, exist_ok=True)
        src_of = lambda img: "../../05_panels/%s/%s" % (tag, img.name)

    warnings, data = [], []
    for n in sorted(by_num):
        p = letters.get(n, {"items": [], "gap_after": 0})
        entry = {"src": src_of(by_num[n]), "alt": "panel %03d" % n, "gapAfter": p.get("gap_after", 0),
                 "bubbles": [], "env": [], "sfx": []}
        for i in p["items"]:
            if not i["text"]:
                continue
            pl = parse_place(i.get("place", ""), i["kind"])
            if i["kind"] == "bubble":
                if not all(k in pl for k in ("x", "y", "w")):
                    warnings.append("panel_%03d bubble has no full place; used a default top position" % n)
                b = {"type": (i.get("type") or "dialogue").split()[0], "text": i["text"],
                     "x": pl.get("x", 50), "y": pl.get("y", 12), "w": pl.get("w", 60)}
                if "tail" in pl:
                    b["tail"], b["tailX"] = pl["tail"], pl["tailX"]
                entry["bubbles"].append(b)
            else:
                size = pl.get("size")
                if size is None:
                    size = min(10.0, max(4.0, round(pl.get("w", 60) * 1.8 / max(4, len(i["text"])), 1)))
                v = {"text": i["text"], "x": pl.get("x", 50), "y": pl.get("y", 50), "size": size, "rot": pl.get("rot", 0)}
                if i["kind"] == "env":
                    st = (i.get("style", "") + " " + i.get("on", "")).lower()
                    v["style"] = ("sign" if re.search(r"sign|간판|neon|네온", st) else
                                  "screen" if re.search(r"screen|화면|휴대폰|phone", st) else "hand")
                    entry["env"].append(v)
                else:
                    entry["sfx"].append(v)
        data.append(entry)
    for n in sorted(set(letters) - set(by_num)):
        if any(i["text"] for i in letters[n]["items"]):
            warnings.append("panel_%03d has lettering but no image" % n)

    meta = {"title": args.title or "Webtoon",
            "episode": args.ep_label or ("ភាគទី %d" % num).translate(KHMER_DIGITS),
            "footer": args.footer or "", "names": glossary_names(root)}
    page = TEMPLATE.read_text(encoding="utf-8")
    dump = lambda o: json.dumps(o, ensure_ascii=False, indent=1).replace("</", "<\\/")
    page = page.replace("/*__META__*/", dump(meta)).replace("/*__PANELS__*/", dump(data))
    out = out_dir / "index.html"
    out.write_text(page, encoding="utf-8")
    print("Wrote %s (%d panels, %d bubbles)" % (out, len(data), sum(len(d["bubbles"]) for d in data)))
    for w in warnings:
        print("  warning: " + w)
    return 0


def main():
    ap = argparse.ArgumentParser(description="Khmer-edition helper for the webtoon harness.")
    ap.add_argument("--root", default=".", help="project root that contains _workspace/ (default: current folder)")
    sub = ap.add_subparsers(dest="cmd", required=True)
    c = sub.add_parser("check", help="compare script KM lines with the lettering spec")
    c.add_argument("--episode", required=True)
    b = sub.add_parser("build", help="build the viewer from the lettering spec")
    b.add_argument("--episode", required=True)
    b.add_argument("--release", action="store_true", help="write RELEASE/epNN/ with a panels/ copy")
    b.add_argument("--title", help="series title shown in the header (Khmer)")
    b.add_argument("--ep-label", help="episode label (default: ភាគទី N)")
    b.add_argument("--footer", help="footer text")
    args = ap.parse_args()
    return {"check": cmd_check, "build": cmd_build}[args.cmd](args)


if __name__ == "__main__":
    sys.exit(main())
