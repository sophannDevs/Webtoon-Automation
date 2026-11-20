#!/usr/bin/env python3
"""Native Khmer review helper (Khmer edition) for the webtoon harness.

Run from the project root (the folder that contains _workspace/):

  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py start    --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py check    --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py finalize --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py gate     --episode 1

The Native Khmer Agent Reviewer (.claude/agents/native-khmer-agent-reviewer.md) corrects the KM lines of
03_episode/ep{NN}_script_final.md in place and records its work in 03_episode/ep{NN}_km_review.md.
No person reviews or approves anything: the workflow continues on its own.

start     Begins a review round. Saves the script as found to ep{NN}_script_final_pre_km_review.md, writes
          the report skeleton (first round) or reopens the report, writes the context packet
          ep{NN}_km_review_context.md (one section per scene: who is there, what the reader already knows
          about them with later facts held back, relationship notes, glossary entries, established
          dialogue between them) and prints the automated format checks.
check     Automated format checks only. Exit 0 = clean.
finalize  Ends the round. Only KM text may differ from the pre-review copy (an edited KM line, or one KM
          line added under a line that had none); every difference must be in the report's change table
          with a Pass A problem and a Pass B meaning check; the format checks must pass.
          Exit 0 = READY.
          Exit 1 = NEEDS SCRIPT FIX: a KM line has no source line, or two KM lines sit under one line.
                   Only script-editor can fix that; the problems are listed in the report for it, and the
                   reviewer runs a new round afterwards. Nobody is asked anything.
          Exit 2 = the reviewer must fix its own edits or report (printed) and run finalize again.
gate      Run before the shot list. Exit 0 only when the review is READY and ep{NN}_script_final.md is
          byte for byte the reviewed version.

The format checks are mechanical. Whether the dialogue is good Khmer is the reviewer's (AI) judgement.
"""
import argparse
import difflib
import hashlib
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

HANGUL = re.compile(r"[ᄀ-ᇿ㄰-㆏가-힣]")
KHMER = re.compile(r"[ក-៿᧠-᧿]")
LATIN = re.compile(r"[A-Za-z]")
SPACES = re.compile(r"[\s ​‌‍⁠﻿]+")
QUOTED = re.compile(r'["“]([^"”]*)["”]')
PANEL = re.compile(r"^#{2,4}\s+P(\d{1,3})\b(.*)$")
SCENE_ID = re.compile(r"(?<![A-Za-z0-9])S(\d{1,3})(?![0-9])")
EP_REF = re.compile(r"\bEP\s?0*(\d{1,3})\b", re.I)
SEALED = re.compile(r"봉인|sealed|spoiler|스포일러|정체\s*공개", re.I)
SKIP_PROFILE = re.compile(r"TOKEN|외형|토큰|appearance|silhouette|실루엣", re.I)
COMMENT = re.compile(r"<!--|-->|//|\?\?|\(\?\)")

RE_KM_SFX = re.compile(r"^KM\s*(?:효과음|sfx)\s*[:：]", re.I)
RE_KM_CAP = re.compile(r"^KM\s*(?:캡션|caption)\s*[:：]", re.I)
RE_KM = re.compile(r"^KM\s*[:：]")
RE_ENV = re.compile(r"^「[^」]*」")
RE_ENV_KM = re.compile(r"KM\s*[:：]")
RE_SFX = re.compile(r"^\[(?:효과음|sfx)\]", re.I)
RE_CAPTION = re.compile(r"^(?:캡션|내레이션|나레이션|나레|해설)\s*(?:\([^)]*\))?\s*[:：]")
RE_SPEECH = re.compile(r'^(?:\*\*)?([^\s(\[「#>|*`\-][^:：*]{0,40}?)(?:\*\*)?\s*[:：]\s*["“]')

KM_KINDS = ("km", "km_sfx", "km_cap")
SOURCE_NEEDS = {"dialogue": ("km",), "caption": ("km_cap", "km"), "sfx": ("km_sfx",)}
STRUCTURAL = ("extra", "orphan")           # only script-editor can fix these
MISSING_WORDS = {"", "-", "—", "–", "(missing)", "missing", "(none)", "none", "(없음)", "없음"}

STATUS_KEYS = ("Status", "Round", "Started", "Finalized", "Script SHA-256")
MANAGED_OPEN = "<!-- km_review.py: the lines below are written by the tool. Do not edit them by hand. -->"
MANAGED_CLOSE = "<!-- /km_review.py -->"
CHECKS_OPEN = "<!-- km_review.py checks -->"
CHECKS_CLOSE = "<!-- /km_review.py checks -->"


# ---------------------------------------------------------------- small helpers

def ep_tag(ep):
    digits = re.sub(r"\D", "", str(ep))
    if not digits:
        sys.exit("--episode needs a number, e.g. --episode 1")
    return "ep%02d" % int(digits), int(digits)


def files(root, tag):
    ws = root / "_workspace"
    ep = ws / "03_episode"
    return {
        "ws": ws,
        "script": ep / ("%s_script_final.md" % tag),
        "snapshot": ep / ("%s_script_final_pre_km_review.md" % tag),
        "report": ep / ("%s_km_review.md" % tag),
        "context": ep / ("%s_km_review_context.md" % tag),
    }


def rel(root, p):
    """Path as the project writes it (_workspace/… even though _workspace is a link to stories/<slug>)."""
    try:
        return p.relative_to(root).as_posix()
    except ValueError:
        return p.as_posix()


def read(p):
    """(lines, newline) of a UTF-8 text file; keeps the file's own line ending style."""
    raw = p.read_bytes().decode("utf-8-sig")
    return raw.splitlines(), ("\r\n" if "\r\n" in raw else "\n")


def write(p, lines, nl="\n"):
    with open(p, "w", encoding="utf-8", newline="") as f:
        f.write(nl.join(lines) + nl)


def sha256(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()


def now():
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def cmpform(s):
    """Text as compared by the tool: no spaces, zero-width marks, backticks or double quotes."""
    s = (s or "").replace("`", "")
    s = re.sub(r'["“”]', "", s)
    return SPACES.sub("", s)


def strip_paren(s):
    return re.sub(r"\s*\([^)]*\)", "", s or "").strip()


def after_colon(s):
    parts = re.split(r"[:：]", s, maxsplit=1)
    return parts[1].strip() if len(parts) > 1 else ""


def clip(s, n=300):
    s = s.strip()
    return s if len(s) <= n else s[:n - 1] + "…"


def lev(a, b, cap=3):
    """Levenshtein distance (code points), stopping early above cap."""
    if abs(len(a) - len(b)) > cap:
        return cap + 1
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        if min(cur) > cap:
            return cap + 1
        prev = cur
    return prev[-1]


def near_limit(word):
    return 1 if len(word) < 6 else 2


def later_episode(text, num):
    return any(int(m) > num for m in EP_REF.findall(text or ""))


# ---------------------------------------------------------------- glossary

def load_glossary(ws):
    p = ws / "02_story" / "glossary_km.md"
    if not p.exists():
        return None
    rows = []
    for line in read(p)[0]:
        s = line.strip()
        if not s.startswith("|") or re.match(r"^\|\s*:?-{2,}", s):
            continue
        cells = [c.strip() for c in s.strip("|").split("|")]
        if len(cells) < 2 or not KHMER.search(cells[1]):
            continue
        rows.append({"ko": cells[0], "km": cells[1].replace("`", "").strip(),
                     "note": " | ".join(cells[2:]), "line": s})
    entries = set()
    for r in rows:
        entries.add(r["km"])
        for t in re.findall(r"`([^`]+)`", r["note"]):
            if KHMER.search(t) and not HANGUL.search(t):
                entries.add(t.strip())
    words = {w for e in entries for w in e.split() if KHMER.search(w)}
    return {"rows": rows, "entries": entries, "words": words}


COMMON_START = ("អ្នក", "ការ", "លោក", "សំឡេង", "ពាក្យ", "ក្រុម", "ប្រធាន", "មន្ត្រី", "ហាង", "កញ្ញា")


def character_names(gloss, speakers):
    """(Korean keys, Khmer name words) for characters who speak in the story, for the in-text spelling check.
    Only transliterated names: forms built from common words (អ្នក…, ការ…, លោក…) are not checked."""
    out = []
    for r in gloss["rows"]:
        ko = re.sub(r"\([^)]*\)", "", r["ko"]).replace("`", "").strip()
        if not re.fullmatch(r"[가-힣]{2,6}", ko) or r["km"].startswith(COMMON_START) or LATIN.search(r["km"]):
            continue
        keys = {s for s in speakers if len(s) >= 2 and s in ko}
        if not keys:
            continue
        words = [w for w in r["km"].split() if len(cmpform(w)) >= 4]   # shorter words collide with common text
        if words:
            out.append((keys | {ko}, words))
    return out


def closest(word, pool):
    best, bd = None, 99
    for c in pool:
        d = lev(word, c, near_limit(word))
        if 0 < d < bd:
            best, bd = c, d
    return best if best is not None and bd <= near_limit(word) else None


def name_near_miss(body, name):
    """A spelling of `name` in `body` that is close but not exact, or None."""
    b, t = cmpform(body), cmpform(name)
    if not t or t in b:
        return None
    lim = near_limit(t)
    best, bd = None, lim + 1
    for size in sorted(range(max(1, len(t) - lim), len(t) + lim + 1), key=lambda s: abs(s - len(t))):
        for i in range(0, max(0, len(b) - size) + 1):
            w = b[i:i + size]
            if w and w[0] == t[0]:
                d = lev(w, t, lim)
                if d < bd:
                    best, bd = w, d
    return best


# ---------------------------------------------------------------- script analysis

def classify(raw):
    s = raw.strip()
    if not s:
        return "blank", {}
    if RE_KM_SFX.match(s):
        return "km_sfx", {"content": after_colon(s)}
    if RE_KM_CAP.match(s):
        return "km_cap", {"content": after_colon(s)}
    if RE_KM.match(s):
        content = after_colon(s)
        spk = content.split("៖", 1)[0].strip() if "៖" in content else ""
        return "km", {"content": content, "speaker": spk, "quotes": QUOTED.findall(content)}
    if s.startswith("EN:"):
        return "other", {}
    if RE_ENV.match(s):
        m = RE_ENV_KM.search(s)
        if m:
            return "env", {"content": s[m.end():].strip(), "prefix": s[:m.start()].strip()}
        return "env_missing", {"prefix": s}
    if RE_SFX.match(s):
        return "sfx", {}
    if RE_CAPTION.match(s):
        return "caption", {}
    m = RE_SPEECH.match(s)
    if m:
        return "dialogue", {"speaker": m.group(1).strip(), "quotes": QUOTED.findall(s)}
    if s.startswith("("):
        return "direction", {}
    return "other", {}


def km_body(kind, info):
    if kind == "km":
        return "".join(info["quotes"]) if info["quotes"] else info["content"].split("៖", 1)[-1]
    return info.get("content", "")


def analyse(lines, gloss=None):
    """Classify every line inside a panel section (### P##) and run the automated format checks."""
    n = len(lines)
    panel_of, kind, info, heading = [None] * n, [None] * n, [None] * n, {}
    cur = None
    for i, raw in enumerate(lines):
        m = PANEL.match(raw)
        if m:
            cur = int(m.group(1))
            heading[cur] = raw
            continue
        if raw.startswith("#"):
            cur = None
            continue
        if cur is None:
            continue
        panel_of[i] = cur
        kind[i], info[i] = classify(raw)

    def k(j, i):
        return kind[j] if 0 <= j < n and panel_of[j] is not None and panel_of[j] == panel_of[i] else None

    problems, notes, pairs = [], [], []

    def problem(i, code, msg):
        problems.append({"panel": panel_of[i], "line": i + 1, "code": code, "msg": msg, "text": lines[i].strip()})

    for i in range(n):
        kd = kind[i]
        if kd in SOURCE_NEEDS:
            nk = k(i + 1, i)
            if nk not in SOURCE_NEEDS[kd]:
                want = " or ".join({"km": "KM:", "km_cap": "KM 캡션:", "km_sfx": "KM 효과음:"}[x] for x in SOURCE_NEEDS[kd])
                problem(i, "missing", "no %s line directly under this line" % want)
            elif kd == "dialogue" and nk == "km":
                pairs.append((i, i + 1))
                qa, qb = len(info[i]["quotes"]), len(info[i + 1]["quotes"])
                if qb and qa != qb:
                    notes.append("P%02d line %d: the Korean has %d quoted bubble(s), the KM line has %d"
                                 % (panel_of[i], i + 2, qa, qb))
        elif kd in KM_KINDS:
            pk = k(i - 1, i)
            if pk in KM_KINDS:
                problem(i, "extra", "a second KM line directly under one line")
            elif kd == "km" and pk not in ("dialogue", "caption"):
                problem(i, "orphan", "KM: line with no dialogue line directly above it")
            elif kd == "km_sfx" and pk != "sfx":
                problem(i, "orphan", "KM 효과음: line with no [효과음] line directly above it")
        elif kd == "env_missing":
            problem(i, "missing", "writing on an object without Khmer: use 「…」 KM: <Khmer>")

        if kd in KM_KINDS or kd == "env":
            content = info[i]["content"]
            if HANGUL.search(content):
                problem(i, "korean", "Korean letters inside the Khmer text")
            if LATIN.search(content) or COMMENT.search(content):
                problem(i, "comment", "non-Khmer text inside a KM line (readers see only Khmer; review "
                                      "comments belong in the report)")
            if not cmpform(km_body(kd, info[i])):
                problem(i, "empty", "empty Khmer text")
            if re.search(r"[0-9]", km_body(kd, info[i])):
                notes.append("P%02d line %d: Arabic digits in Khmer text (the glossary uses Khmer digits)"
                             % (panel_of[i], i + 1))

    if gloss:
        for a, b in pairs:
            label = strip_paren(info[b]["speaker"])
            for part in [p.strip() for p in re.split(r"\s+និង\s+|[·,/]", label) if p.strip()]:
                if part in gloss["entries"] or part in gloss["words"]:
                    continue
                near = closest(part, gloss["entries"] | gloss["words"])
                if near:
                    problem(b, "name", "speaker label %s is not the glossary spelling %s" % (part, near))
                else:
                    notes.append("P%02d line %d: speaker label %s is not in the glossary (new speaker? "
                                 "continuity-manager adds it)" % (panel_of[b], b + 1, part))
        speakers_all = {strip_paren(info[x]["speaker"]) for x, _ in pairs}
        names = character_names(gloss, speakers_all)
        for a, b in pairs:
            src = after_colon(lines[a])
            body = km_body("km", info[b])
            for keys, words in names:
                if not any(k in src for k in keys):
                    continue
                for w in words:   # each word of the name on its own: a line may use only the given name
                    miss = name_near_miss(body, w)
                    if miss and miss not in gloss["words"]:
                        problem(b, "name", "%s is spelled %s in the glossary, not %s"
                                % (sorted(keys, key=len)[-1], w, miss))
                        break

    speakers = {}
    for a, b in pairs:
        ko = strip_paren(info[a]["speaker"])
        km = strip_paren(info[b]["speaker"])
        speakers.setdefault(ko, {}).setdefault(km, 0)
        speakers[ko][km] += 1
    for ko, kms in speakers.items():
        if len(kms) > 1:
            notes.append("speaker %s has %d different Khmer labels: %s"
                         % (ko, len(kms), ", ".join("%s (%d)" % kv for kv in kms.items())))

    stats = {
        "panels": len({p for p in panel_of if p is not None}),
        "dialogue": sum(1 for x in kind if x == "dialogue"),
        "km": sum(1 for x in kind if x in KM_KINDS or x == "env"),
    }
    return {"panel_of": panel_of, "kind": kind, "info": info, "heading": heading, "problems": problems,
            "notes": notes, "pairs": pairs, "speakers": speakers, "stats": stats}


def print_check(a, label):
    s = a["stats"]
    print("%s: %d panels · %d dialogue lines · %d Khmer lines" % (label, s["panels"], s["dialogue"], s["km"]))
    mine = [p for p in a["problems"] if p["code"] not in STRUCTURAL]
    theirs = [p for p in a["problems"] if p["code"] in STRUCTURAL]
    if not a["problems"]:
        print("  Automated format checks: OK (pairing, Khmer-only text, glossary names)")
    for title, group in (("For the reviewer to fix", mine), ("For script-editor (needs a source-side fix)", theirs)):
        if group:
            print("  %s: %d" % (title, len(group)))
            for p in group:
                print("  - P%02d line %d: %s\n      %s" % (p["panel"], p["line"], p["msg"], p["text"]))
    for nt in a["notes"]:
        print("  note: " + nt)


# ---------------------------------------------------------------- scenes and context packet

def scenes_of(lines, a):
    """Consecutive panels with the same scene id (S01 in the panel heading, else the ## section)."""
    out, section = [], ""
    order = []
    for i, raw in enumerate(lines):
        if raw.startswith("## "):
            section = raw[3:].strip()
        m = PANEL.match(raw)
        if m:
            sid = SCENE_ID.search(m.group(2))
            key = ("S%02d" % int(sid.group(1))) if sid else ("§ " + section if section else "scene")
            order.append((int(m.group(1)), key))
    for p, key in order:
        if out and out[-1]["key"] == key:
            out[-1]["panels"].append(p)
        else:
            out.append({"key": key, "panels": [p]})
    for sc in out:
        ps = set(sc["panels"])
        idx = [i for i, p in enumerate(a["panel_of"]) if p in ps]
        sc["lines"] = idx
        sc["speakers"] = []
        for i in idx:
            if a["kind"][i] == "dialogue":
                spk = strip_paren(a["info"][i]["speaker"])
                if spk not in sc["speakers"]:
                    sc["speakers"].append(spk)
        sc["text"] = "\n".join(lines[i] for i in idx)
        sc["directions"] = "\n".join(lines[i] for i in idx if a["kind"][i] == "direction")
    return out


def dialogue_pairs(lines, a):
    res = []
    for d, k in a["pairs"]:
        ko_line = lines[d].strip()
        km = a["info"][k]
        res.append({"panel": a["panel_of"][d], "speaker": strip_paren(a["info"][d]["speaker"]),
                    "ko": ko_line, "ko_key": cmpform(after_colon(ko_line)),
                    "km": lines[k].strip(), "km_key": cmpform(km_body("km", km))})
    return res


def character_keys(speakers, gloss):
    """Korean speaker label -> names that refer to that character (label, full name from the glossary)."""
    keys = {}
    for spk in speakers:
        ks = {spk}
        if gloss:
            for r in gloss["rows"]:
                ko = re.sub(r"\([^)]*\)", "", r["ko"]).strip()
                if spk and len(spk) >= 2 and spk in ko and re.fullmatch(r"[가-힣 ]{2,12}", ko):
                    ks.add(ko)
        keys[spk] = ks
    return keys


def profile_sections(char_lines, num):
    """Character-profile sections: (heading, lines, held_back)."""
    out, cur = [], None
    for raw in char_lines:
        if re.match(r"^#{2,4}\s", raw):
            cur = {"heading": raw.strip(), "lines": []}
            out.append(cur)
        elif cur is not None and raw.strip():
            cur["lines"].append(raw.rstrip())
    for sc in out:
        sc["held"] = bool(SEALED.search(sc["heading"]) or later_episode(sc["heading"], num))
    return out


def established(eps_data, people, cap=10):
    """Earlier dialogue between the people in a scene: {(a, b) or (a,): [lines]} most recent first."""
    groups = {}
    for ep in eps_data:
        for sc in ep["scenes"]:
            here = [p for p in sc["speakers"] if p in people]
            if len(people) >= 2 and len(here) < 2:
                continue
            if not here:
                continue
            key = tuple(sorted(here)) if len(people) >= 2 else (here[0],)
            for d in ep["pairs"]:
                if d["panel"] in sc["panels"] and d["speaker"] in here:
                    groups.setdefault(key, []).append((ep["num"], d))
    for key in groups:
        groups[key] = groups[key][:cap]
    return groups


def build_context(root, f, tag, num, lines, a, gloss):
    ws = f["ws"]
    char_p = ws / "02_story" / "characters.md"
    char_lines = read(char_p)[0] if char_p.exists() else []
    sections = profile_sections(char_lines, num)

    eps_data = []
    for p in sorted((ws / "03_episode").glob("ep*_script_final.md"), reverse=True):
        m = re.match(r"ep(\d+)_script_final\.md$", p.name)
        if not m or int(m.group(1)) >= num:
            continue
        el = read(p)[0]
        ea = analyse(el)
        eps_data.append({"num": int(m.group(1)), "path": p, "scenes": scenes_of(el, ea),
                         "pairs": dialogue_pairs(el, ea)})

    scs = scenes_of(lines, a)
    all_speakers = set(a["speakers"]) | {s for sc in scs for s in sc["speakers"]}
    for ep in eps_data:
        all_speakers |= {d["speaker"] for d in ep["pairs"]}
    keys = character_keys(sorted(all_speakers), gloss)

    out = [
        "# EP%02d Khmer review — context packet" % num,
        "",
        "Written by `km_review.py start` at %s. Rewritten at every start: do not edit." % now(),
        "",
        "**Use only what the reader knows by the scene you are reviewing:** earlier episodes, earlier panels",
        "of this episode, and the scene itself. Never let a later panel, a later episode or a sealed fact",
        "(봉인) make a line more explicit than its source is at that point. Profile lines and glossary rows",
        "that mention a later episode or a sealed fact are held back below.",
        "",
        "## Files",
        "",
        "| File | Exists | Use it for |",
        "|---|---|---|",
    ]
    files_list = [
        (f["script"], "the episode, read scene by scene in order (directions, speaker/voice table, editor's notes)"),
        (ws / "02_story" / "glossary_km.md", "spelling look-ups (the only approved spelling of names and terms)"),
        (ws / "02_story" / "world.md", "period, place and social setting only (decides the register)"),
        (char_p, "only through the excerpts below (the file may describe later events)"),
    ] + [(ep["path"], "EP%02d: established dialogue (published)" % ep["num"]) for ep in eps_data]
    for p, why in files_list:
        out.append("| `%s` | %s | %s |" % (rel(root, p), "yes" if p.exists() else "**no**", why))
    out += ["", "Not used for wording decisions: `twist-plan.md`, `series-arc.md`, the beat sheet (they reveal "
            "what comes later).", ""]

    out += ["## Repeated lines (same Korean as an earlier episode)", ""]
    known = {}
    for ep in eps_data:
        for d in ep["pairs"]:
            known.setdefault(d["ko_key"], (ep["num"], d))
    rep = []
    for d in dialogue_pairs(lines, a):
        hit = known.get(d["ko_key"])
        if hit and d["ko_key"]:
            e_num, e = hit
            same = e["km_key"] == d["km_key"]
            rep += ["- P%02d %s — EP%02d P%02d%s" % (d["panel"], d["ko"], e_num, e["panel"],
                                                       "" if same else " · **Khmer differs**"),
                    "  - established: %s" % e["km"], "  - here:        %s" % d["km"]]
    out += (rep or ["(none)"]) + [""]

    for n_sc, sc in enumerate(scs, 1):
        first, last = sc["panels"][0], sc["panels"][-1]
        named = [c for c in sorted(all_speakers) if c not in sc["speakers"]
                 and any(k in sc["directions"] for k in keys.get(c, {c}))]
        people = sc["speakers"] + named
        out += ["## Scene %d · %s · P%02d–P%02d" % (n_sc, sc["key"], first, last), "",
                "- Read P%02d–P%02d in the script, with every direction. Speaking: %s. Named in the directions: %s."
                % (first, last, ", ".join(sc["speakers"]) or "nobody", ", ".join(named) or "nobody"), ""]

        prof, held = [], 0
        for c in people:
            shown = 0
            for s in sections:
                if shown >= 3 or not any(k in s["heading"] for k in keys.get(c, {c})) or SKIP_PROFILE.search(s["heading"]):
                    continue
                if s["held"]:
                    held += 1
                    continue
                body = [ln for ln in s["lines"] if not (SEALED.search(ln) or later_episode(ln, num))]
                held += len(s["lines"]) - len(body)
                prof += ["- **%s**" % clip(re.sub(r"^#+\s*", "", s["heading"]), 160)] + \
                        ["  %s" % clip(ln, 300) for ln in body[:6]]
                shown += 1
        out += ["### What the reader already knows about them", ""] + (prof or ["(no profile excerpt)"])
        if held:
            out.append("- (%d profile section(s) or line(s) held back: sealed or about a later episode)" % held)
        out.append("")

        rels = []
        if len(people) >= 2:
            for s in sections:
                if s["held"] or SKIP_PROFILE.search(s["heading"]):
                    continue
                for ln in [s["heading"]] + s["lines"]:
                    hits = [c for c in people if any(k in ln for k in keys.get(c, {c}))]
                    others = [c for c in all_speakers if c not in people and any(k in ln for k in keys.get(c, {c}))]
                    if len(hits) >= 2 and len(others) <= 1 and not SEALED.search(ln) and not later_episode(ln, num):
                        item = "- " + clip(ln.lstrip("-# "), 300)
                        if item not in rels:
                            rels.append(item)
        out += ["### Relationship notes", ""] + (rels[:8] or ["(none found)"]) + [""]

        grows, gheld = [], 0
        if gloss:
            scene_ko = sc["text"]
            for r in gloss["rows"]:
                ko = re.sub(r"\([^)]*\)", "", r["ko"]).replace("`", "").strip()
                term_hit = len(ko) >= 2 and ko in scene_ko
                who_hit = any(k in (r["ko"] + " " + r["note"]) for c in people for k in keys.get(c, {c}))
                if not (term_hit or who_hit):
                    continue
                if SEALED.search(r["line"]) or later_episode(r["line"], num):
                    gheld += 1
                    continue
                grows.append(clip(r["line"], 300))
        out += ["### Glossary entries for this scene", ""]
        out += (["| 한국어 | 크메르어 | 메모 |", "|---|---|---|"] + grows[:25]) if grows else ["(none)"]
        if gheld:
            out.append("- (%d row(s) held back: sealed or about a later episode)" % gheld)
        out.append("")

        est = established(eps_data, sc["speakers"] or people)
        out += ["### Established dialogue (earlier episodes, scenes where they both speak)", ""]
        if not est:
            out.append("(none)")
        for key, items in est.items():
            out.append("- %s:" % " ↔ ".join(key))
            for e_num, d in items:
                out += ["  - EP%02d P%02d · %s" % (e_num, d["panel"], d["ko"]), "    %s" % d["km"]]
        earlier_here = []
        if len(sc["speakers"]) >= 2:
            for prev in scs[:n_sc - 1]:
                both = [p for p in prev["speakers"] if p in sc["speakers"]]
                if len(both) >= 2:
                    for d in dialogue_pairs(lines, a):
                        if d["panel"] in prev["panels"] and d["speaker"] in both:
                            earlier_here.append("  - P%02d · %s\n    %s" % (d["panel"], d["ko"], d["km"]))
        out += ["", "### Earlier in this episode, between them", ""] + (earlier_here[-8:] or ["(none)"]) + [""]
    write(f["context"], out)
    return len(scs)


# ---------------------------------------------------------------- report

def report_header(rnd):
    return [
        MANAGED_OPEN,
        "- Status: IN PROGRESS",
        "- Round: %d" % rnd,
        "- Started: %s" % now(),
        "- Finalized: -",
        "- Script SHA-256: -",
        MANAGED_CLOSE,
    ]


def report_skeleton(root, f, num):
    return [
        "# EP%02d Khmer review — Native Khmer Agent Reviewer" % num,
        "",
        "> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent",
        "> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a person. Nobody approves it: the workflow",
        "> continues on its own when the status is READY.",
        "",
    ] + report_header(1) + [
        "",
        "- Script (reviewed in place): `%s`" % rel(root, f["script"]),
        "- Pre-review copy: `%s`" % rel(root, f["snapshot"]),
        "- Context packet: `%s`" % rel(root, f["context"]),
        "",
        "## Summary",
        "",
        "(2-4 sentences in English: how the Khmer reads as speech, the kinds of fixes, anything later steps should know.)",
        "",
        "## Changes",
        "",
        "Pass A (spoken Khmer) finds the problem; Pass B (meaning) checks the new line against the source.",
        "",
        "| Ref | Original KM | Revised KM | Problem (Pass A) | Meaning check (Pass B) |",
        "|---|---|---|---|---|",
        "",
        "## Decisions",
        "",
        "Uncertainty resolved automatically (what was unclear, what was chosen, why).",
        "",
        "(none)",
        "",
        "## Kept after the meaning check",
        "",
        "Smoother rewrites that Pass B rejected because they changed the meaning.",
        "",
        "(none)",
        "",
        "## Inputs read",
        "",
        "(the files actually read)",
    ]


def get_status(lines):
    out = {}
    for line in lines:
        m = re.match(r"^- (Status|Round|Started|Finalized|Script SHA-256):\s*(.*)$", line)
        if m and m.group(1) not in out:
            out[m.group(1)] = m.group(2).strip()
    return out


def set_status(lines, values):
    done, out = set(), []
    for line in lines:
        m = re.match(r"^- (Status|Round|Started|Finalized|Script SHA-256):", line)
        if m and m.group(1) in values and m.group(1) not in done:
            out.append("- %s: %s" % (m.group(1), values[m.group(1)]))
            done.add(m.group(1))
        else:
            out.append(line)
    missing = [k for k in STATUS_KEYS if k in values and k not in done]
    if missing:  # the managed block was removed: put it back under the title
        block = [MANAGED_OPEN] + ["- %s: %s" % (k, values[k]) for k in STATUS_KEYS if k in values] + [MANAGED_CLOSE, ""]
        at = 1 if out and out[0].startswith("#") else 0
        out[at:at] = ([""] + block) if at else block
    return out


def section(lines, title):
    out, inside = [], False
    for line in lines:
        if line.startswith("## "):
            inside = line[3:].strip().lower().startswith(title.lower())
            continue
        if inside:
            out.append(line)
    return out


def change_rows(lines):
    rows = []
    for line in section(lines, "Changes"):
        s = line.strip()
        if not s.startswith("|") or re.match(r"^\|\s*:?-{2,}", s):
            continue
        cells = [c.strip() for c in s.strip("|").split("|")]
        if len(cells) < 4 or cells[0].lower() == "ref":
            continue
        m = re.search(r"P(\d{1,3})", cells[0])
        rows.append({"ref": cells[0], "panel": int(m.group(1)) if m else None,
                     "original": cells[1].replace("`", "").strip(), "revised": cells[2].replace("`", "").strip(),
                     "problem": cells[3], "meaning": cells[4] if len(cells) > 4 else "", "used": False})
    return rows


def km_variants(kind, info):
    """Forms of a KM line that a report cell may use: the whole text after KM:, or only the quoted part."""
    content = info.get("content", "")
    forms = {cmpform(content)}
    if kind == "km":
        forms.add(cmpform(content.split("៖", 1)[-1]))
        if info.get("quotes"):
            forms.add(cmpform("".join(info["quotes"])))
    return forms


# ---------------------------------------------------------------- commands

def cmd_check(args):
    root = Path(args.root).resolve()
    tag, num = ep_tag(args.episode)
    f = files(root, tag)
    if not f["script"].exists():
        sys.exit("Missing file: %s" % f["script"])
    a = analyse(read(f["script"])[0], load_glossary(f["ws"]))
    print_check(a, "Khmer format checks - %s" % tag)
    return 1 if a["problems"] else 0


def cmd_start(args):
    root = Path(args.root).resolve()
    tag, num = ep_tag(args.episode)
    f = files(root, tag)
    if not f["script"].exists():
        print("Missing file: %s - script-editor must finish the script first." % f["script"])
        return 2

    if f["report"].exists():
        rlines, nl = read(f["report"])
        st = get_status(rlines)
        rnd = int(re.sub(r"\D", "", st.get("Round", "")) or 0)
        if st.get("Status") == "IN PROGRESS" and f["snapshot"].exists() and not args.restart:
            print("Round %d is already in progress: the pre-review copy is kept." % rnd)
            print("(Use --restart only if you have not edited the script yet in this round.)")
        else:
            rnd += 1
            shutil.copyfile(f["script"], f["snapshot"])
            write(f["report"], set_status(rlines, {"Status": "IN PROGRESS", "Round": str(rnd), "Started": now(),
                                                   "Finalized": "-", "Script SHA-256": "-"}), nl)
            print("Round %d started. The existing report was reopened: keep its rows and add this round's work." % rnd)
    else:
        shutil.copyfile(f["script"], f["snapshot"])
        write(f["report"], report_skeleton(root, f, num))
        print("Round 1 started. Report skeleton written.")

    lines = read(f["script"])[0]
    gloss = load_glossary(f["ws"])
    a = analyse(lines, gloss)
    n_sc = build_context(root, f, tag, num, lines, a, gloss)
    print("  Script (edit only the Khmer, in place): %s" % rel(root, f["script"]))
    print("  Pre-review copy (do not edit):          %s" % rel(root, f["snapshot"]))
    print("  Report (fill it in):                    %s" % rel(root, f["report"]))
    print("  Context packet (%d scene%s):             %s" % (n_sc, "" if n_sc == 1 else "s", rel(root, f["context"])))
    print()
    print_check(a, "Khmer format checks - %s" % tag)
    print()
    print("Next: review scene by scene with the context packet (Pass A spoken Khmer, Pass B meaning), edit only")
    print("the Khmer, fill in the report, then run: km_review.py finalize --episode %d" % num)
    return 0


def diff_changes(old, new, gloss):
    """Differences between the pre-review copy and the reviewed script that a reviewer may make."""
    ao, an = analyse(old), analyse(new, gloss)
    sm = difflib.SequenceMatcher(None, old, new, autojunk=False)
    changes, violations = [], []

    def bad(msg, i_old=None, j_new=None):
        where = []
        if i_old is not None:
            where.append("before line %d: %s" % (i_old + 1, old[i_old].strip()))
        if j_new is not None:
            where.append("now line %d: %s" % (j_new + 1, new[j_new].strip()))
        violations.append(msg + ("\n      " + "\n      ".join(where) if where else ""))

    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            continue
        if tag == "replace" and i2 - i1 == j2 - j1:
            for o, n in zip(range(i1, i2), range(j1, j2)):
                ko, kn = ao["kind"][o], an["kind"][n]
                same_panel = ao["panel_of"][o] == an["panel_of"][n]
                env_edit = kn == "env" and ko in ("env", "env_missing") and \
                    cmpform(ao["info"][o]["prefix"]) == cmpform(an["info"][n]["prefix"])
                if same_panel and ((ko == kn and ko in KM_KINDS) or env_edit):
                    changes.append({"type": "add" if ko == "env_missing" else "edit", "line": n,
                                    "panel": an["panel_of"][n], "kind": kn, "old": ao["info"][o],
                                    "new": an["info"][n], "old_kind": ko})
                else:
                    bad("a line that is not Khmer text was changed", o, n)
        elif tag == "insert" and j2 - j1 == 1:
            n = j1
            kn, above = an["kind"][n], an["kind"][n - 1] if n > 0 else None
            ok = kn in KM_KINDS and above in SOURCE_NEEDS and kn in SOURCE_NEEDS[above] \
                and an["panel_of"][n] == an["panel_of"][n - 1]
            if ok:
                changes.append({"type": "add", "line": n, "panel": an["panel_of"][n], "kind": kn,
                                "old": None, "new": an["info"][n]})
            else:
                bad("a line was added that is not one KM line directly under its source line", None, n)
        elif tag == "insert":
            for n in range(j1, j2):
                bad("lines were added (only one KM line may be added under a source line)", None, n)
        elif tag == "delete":
            for o in range(i1, i2):
                bad("a line was deleted (the reviewer never deletes lines; script-editor fixes structure)", o, None)
        else:
            for o in range(i1, i2):
                bad("lines were replaced by a different number of lines", o, None)
            for n in range(j1, j2):
                bad("lines were replaced by a different number of lines", None, n)
    return changes, violations, an


def cmd_finalize(args):
    root = Path(args.root).resolve()
    tag, num = ep_tag(args.episode)
    f = files(root, tag)
    for key in ("script", "snapshot", "report"):
        if not f[key].exists():
            print("Missing file: %s - run km_review.py start --episode %d first." % (f[key], num))
            return 2
    rlines, rnl = read(f["report"])
    old, new = read(f["snapshot"])[0], read(f["script"])[0]
    gloss = load_glossary(f["ws"])
    errors = []

    if not re.search(r"\bAI review\b", "\n".join(rlines), re.I):
        errors.append("the report does not say it is an AI review (keep the '> **AI review.**' line at the top)")

    changes, violations, an = diff_changes(old, new, gloss)
    errors += ["script: " + v for v in violations]

    rows = change_rows(rlines)
    for c in changes:
        new_forms = km_variants(c["kind"], c["new"])
        hit = [r for r in rows if r["panel"] == c["panel"] and cmpform(r["revised"]) in new_forms]
        label = "P%02d line %d" % (c["panel"], c["line"] + 1)
        if not hit:
            errors.append("%s: this %s is not in the Changes table (Ref P%02d, Revised = %s)"
                          % (label, "edit" if c["type"] == "edit" else "added line", c["panel"], c["new"]["content"]))
            continue
        for r in hit:
            r["used"] = True
        r = hit[0]
        if c["type"] == "edit":
            if cmpform(r["original"]) not in km_variants(c["old_kind"], c["old"]):
                errors.append("%s: 'Original KM' in the Changes table does not match the pre-review text: %s"
                              % (label, c["old"]["content"]))
        elif r["original"].strip().lower() not in MISSING_WORDS:
            errors.append("%s: an added line must have Original KM = (missing)" % label)
        if not r["problem"].strip():
            errors.append("%s: the Changes row has no Pass A problem" % label)
        if not r["meaning"].strip():
            errors.append("%s: the Changes row has no Pass B meaning check (5th column)" % label)

    present = {}
    for i, kd in enumerate(an["kind"]):
        if kd in KM_KINDS or kd == "env":
            present.setdefault(an["panel_of"][i], set()).update(km_variants(kd, an["info"][i]))
    for r in rows:
        if r["used"]:
            continue
        if r["panel"] is None:
            errors.append("Changes row without a panel reference (Ref must start with P##): %s" % r["ref"])
        elif cmpform(r["revised"]) not in present.get(r["panel"], set()):
            errors.append("Changes row %s: its Revised text is not in panel P%02d of the script" % (r["ref"], r["panel"]))

    mine = [p for p in an["problems"] if p["code"] not in STRUCTURAL]
    theirs = [p for p in an["problems"] if p["code"] in STRUCTURAL]
    for p in mine:
        errors.append("P%02d line %d: %s\n      %s" % (p["panel"], p["line"], p["msg"], p["text"]))

    print("Khmer review finalize - %s (round %s)" % (tag, get_status(rlines).get("Round", "?")))
    edits = sum(1 for c in changes if c["type"] == "edit")
    adds = sum(1 for c in changes if c["type"] == "add")
    print("  KM lines edited: %d · KM lines added: %d · other lines changed: %d" % (edits, adds, len(violations)))
    if errors:
        print("  Result: NOT FINALIZED - fix these and run finalize again:")
        for e in errors:
            print("  - " + e)
        return 2

    status = "NEEDS SCRIPT FIX" if theirs else "READY"
    digest = sha256(f["script"])
    rlines = set_status(rlines, {"Status": status, "Finalized": now(), "Script SHA-256": digest})
    checks = [
        CHECKS_OPEN,
        "## Automated format checks (km_review.py)",
        "",
        "Mechanical checks only; the dialogue judgement above is the AI reviewer's.",
        "",
        "- Finalized %s, round %s: **%s**" % (now(), get_status(rlines).get("Round", "?"), status),
        "- This round: %d KM line(s) edited, %d KM line(s) added" % (edits, adds),
        "- Source dialogue, speaker labels, stage directions, panel order and formatting unchanged "
        "(compared with the pre-review copy): yes",
        "- Every change is in the Changes table with a Pass A problem and a Pass B meaning check: yes",
        "- Exactly one KM line under every line that needs one: %s" % ("yes" if not theirs else "no (see below)"),
        "- Khmer-only text in KM lines (no Korean, English or review comments): yes",
        "- Speaker labels and names follow the glossary: %s" % ("yes" if gloss else "no glossary found"),
    ] + ["- Note: " + nt for nt in an["notes"]]
    if theirs:
        checks += ["", "### Needs a script fix (sent to script-editor automatically)", ""]
        for p in theirs:
            checks.append("- P%02d line %d: %s — `%s`" % (p["panel"], p["line"], p["msg"], p["text"]))
    checks.append(CHECKS_CLOSE)
    if CHECKS_OPEN in rlines and CHECKS_CLOSE in rlines:
        i, j = rlines.index(CHECKS_OPEN), rlines.index(CHECKS_CLOSE)
        rlines[i:j + 1] = checks
    else:
        while rlines and not rlines[-1].strip():
            rlines.pop()
        rlines += [""] + checks
    write(f["report"], rlines, rnl)

    for nt in an["notes"]:
        print("  note: " + nt)
    print("  Script SHA-256: %s" % digest)
    if status == "READY":
        print("Result: READY - %s is the reviewed script; the shot list may start." % rel(root, f["script"]))
        return 0
    print("Result: NEEDS SCRIPT FIX - send these to script-editor (no person is asked); then run the reviewer again:")
    for p in theirs:
        print("  - P%02d line %d: %s\n      %s" % (p["panel"], p["line"], p["msg"], p["text"]))
    return 1


def cmd_gate(args):
    root = Path(args.root).resolve()
    tag, num = ep_tag(args.episode)
    f = files(root, tag)
    if not f["script"].exists():
        print("BLOCKED: %s does not exist." % rel(root, f["script"]))
        return 1
    if not f["report"].exists():
        print("BLOCKED: no Khmer review for %s. Run native-khmer-agent-reviewer first (%s)."
              % (tag, rel(root, f["report"])))
        return 1
    st = get_status(read(f["report"])[0])
    status = st.get("Status", "?")
    if status != "READY":
        print("BLOCKED: the Khmer review of %s says %s (%s)." % (tag, status, rel(root, f["report"])))
        if status == "NEEDS SCRIPT FIX":
            print("script-editor fixes the listed pairing problems, then the reviewer runs a new round.")
        else:
            print("Run native-khmer-agent-reviewer until it is READY.")
        return 1
    if st.get("Script SHA-256") != sha256(f["script"]):
        print("BLOCKED: %s changed after its Khmer review. Run native-khmer-agent-reviewer again."
              % rel(root, f["script"]))
        return 1
    print("OK: %s is the reviewed script (Khmer review READY, round %s, finalized %s, sha256 %s…)."
          % (rel(root, f["script"]), st.get("Round", "?"), st.get("Finalized", "?"), st["Script SHA-256"][:12]))
    print("The shot list may read it.")
    return 0


def main():
    ap = argparse.ArgumentParser(description="Native Khmer review helper for the webtoon harness (Khmer edition).")
    ap.add_argument("--root", default=".", help="project root that contains _workspace/ (default: current folder)")
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("start", help="begin a review round: pre-review copy, report, scene context packet, checks")
    s.add_argument("--episode", required=True)
    s.add_argument("--restart", action="store_true", help="take a new pre-review copy for a round in progress")
    for name, text in (("check", "automated format checks only"),
                       ("finalize", "verify the round and write READY / NEEDS SCRIPT FIX into the report"),
                       ("gate", "exit 0 only if the script is the READY reviewed version")):
        sub.add_parser(name, help=text).add_argument("--episode", required=True)
    args = ap.parse_args()
    return {"start": cmd_start, "check": cmd_check, "finalize": cmd_finalize, "gate": cmd_gate}[args.cmd](args)


if __name__ == "__main__":
    sys.exit(main())
