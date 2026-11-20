#!/usr/bin/env python3
"""Native Khmer review helper (Khmer edition) for the webtoon harness.

Run from the project root (the folder that contains _workspace/):

  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py start    --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py check    --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py finalize --episode 1
  python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py gate     --episode 1

The Native Khmer Agent Reviewer (.claude/agents/native-khmer-agent-reviewer.md) corrects the KM lines of
03_episode/ep{NN}_script_final.md in place and records its work in 03_episode/ep{NN}_km_review.md.

start     Begins a review round. Saves the script as found to ep{NN}_script_final_pre_km_review.md,
          writes the report skeleton (first round) or reopens the report (later rounds), writes the
          context packet ep{NN}_km_review_context.md (input files, speaker labels, approved wording from
          earlier episodes) and prints the line-pairing check.
check     Line-pairing check only. Exit 0 = every line that needs Khmer has exactly one KM line under it.
finalize  Ends the round. Only KM text may differ from the pre-review copy (an edited KM line, or one KM
          line added directly under a line that had none); every difference must be in the report's
          change table; every pairing problem left must have an open question about that panel. Then
          writes Status and the script's SHA-256 into the report.
          Exit 0 = READY, 1 = NEEDS REVIEW (stop before the shot list), 2 = fix and run finalize again.
gate      Run before the shot list. Exit 0 only when the report says READY and ep{NN}_script_final.md is
          byte for byte the reviewed version.
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
SPACES = re.compile(r"[\s ​‌‍⁠﻿]+")
QUOTED = re.compile(r'["“]([^"”]*)["”]')
PANEL = re.compile(r"^#{2,4}\s+P(\d{1,3})\b")

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
        return "env_missing", {}
    if RE_SFX.match(s):
        return "sfx", {}
    if RE_CAPTION.match(s):
        return "caption", {}
    m = RE_SPEECH.match(s)
    if m:
        return "dialogue", {"speaker": m.group(1).strip(), "quotes": QUOTED.findall(s)}
    return "other", {}


def analyse(lines):
    """Classify every line inside a panel section (### P##) and run the line-pairing check."""
    n = len(lines)
    panel_of, kind, info = [None] * n, [None] * n, [None] * n
    cur = None
    for i, raw in enumerate(lines):
        m = PANEL.match(raw)
        if m:
            cur = int(m.group(1))
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
                problem(i, "extra", "a second KM line directly under one line: which line does it translate?")
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
            if kd == "km":
                body = "".join(info[i]["quotes"]) if info[i]["quotes"] else content.split("៖", 1)[-1]
            else:
                body = content
            if not cmpform(body):
                problem(i, "empty", "empty Khmer text")

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
    return {"panel_of": panel_of, "kind": kind, "info": info, "problems": problems, "notes": notes,
            "pairs": pairs, "speakers": speakers, "stats": stats}


def print_check(a, label):
    s = a["stats"]
    print("%s: %d panels · %d dialogue lines · %d Khmer lines" % (label, s["panels"], s["dialogue"], s["km"]))
    if a["problems"]:
        print("  Line pairing: %d problem(s)" % len(a["problems"]))
        for p in a["problems"]:
            print("  - P%02d line %d: %s\n      %s" % (p["panel"], p["line"], p["msg"], p["text"]))
    else:
        print("  Line pairing: OK (every line that needs Khmer has exactly one KM line under it)")
    for nt in a["notes"]:
        print("  note: " + nt)


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


def report_skeleton(root, f, tag, num):
    return [
        "# EP%02d Khmer review — Native Khmer Agent Reviewer" % num,
        "",
        "> **AI review.** Written by the Native Khmer Agent Reviewer, an AI agent",
        "> (`.claude/agents/native-khmer-agent-reviewer.md`), not by a human native speaker.",
        "",
    ] + report_header(1) + [
        "",
        "- Script (reviewed in place): `%s`" % rel(root, f["script"]),
        "- Pre-review copy: `%s`" % rel(root, f["snapshot"]),
        "- Context packet: `%s`" % rel(root, f["context"]),
        "",
        "## Summary",
        "",
        "(2-4 sentences in English: overall quality of the Khmer, the kinds of fixes, anything the author should know.)",
        "",
        "## Changes",
        "",
        "| Ref | Original KM | Revised KM | Reason |",
        "|---|---|---|---|",
        "",
        "## Open questions",
        "",
        "(none)",
        "",
        "## Resolved questions",
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
    done = set()
    out = []
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
        out[at:at] = [""] + block if at else block
    return out


def section(lines, title):
    """Lines of the '## <title>' section (title matched case-insensitively, by prefix)."""
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
                     "reason": cells[3], "used": False})
    return rows


def questions(lines, title):
    qs, cur = [], None
    for line in section(lines, title):
        m = re.match(r"^###\s+(Q\d+.*)$", line)
        if m:
            p = re.search(r"P(\d{1,3})", m.group(1))
            cur = {"head": m.group(1).strip(), "panel": int(p.group(1)) if p else None, "body": []}
            qs.append(cur)
        elif cur is not None:
            cur["body"].append(line)
    return qs


def km_variants(kind, info):
    """Forms of a KM line that a report cell may use: the whole text after KM:, or only the quoted part."""
    content = info.get("content", "")
    forms = {cmpform(content)}
    if kind == "km":
        forms.add(cmpform(content.split("៖", 1)[-1]))
        if info.get("quotes"):
            forms.add(cmpform("".join(info["quotes"])))
    return forms


# ---------------------------------------------------------------- context packet

def earlier_episodes(f, num):
    out = []
    for p in sorted((f["ws"] / "03_episode").glob("ep*_script_final.md")):
        m = re.match(r"ep(\d+)_script_final\.md$", p.name)
        if not m or int(m.group(1)) >= num:
            continue
        mm = int(m.group(1))
        rep = p.with_name("ep%02d_km_review.md" % mm)
        if not rep.exists():
            label, usable = "made before the Khmer reviewer existed (published wording)", True
        else:
            st = get_status(read(rep)[0])
            if st.get("Status") == "READY" and st.get("Script SHA-256") == sha256(p):
                label, usable = "approved (Khmer review READY)", True
            elif st.get("Status") == "READY":
                label, usable = "approved by its Khmer review, edited afterwards (published wording)", True
            else:
                label, usable = "Khmer review not finished (%s): not approved wording" % st.get("Status", "?"), False
        out.append((mm, p, rep if rep.exists() else None, label, usable))
    return out


def dialogue_pairs(lines, a):
    res = []
    for d, k in a["pairs"]:
        ko_line = lines[d].strip()
        km = a["info"][k]
        bubble = "".join(km["quotes"]) if km["quotes"] else km["content"].split("៖", 1)[-1]
        res.append({"panel": a["panel_of"][d], "speaker": strip_paren(a["info"][d]["speaker"]),
                    "ko": ko_line, "ko_key": cmpform(after_colon(ko_line)),
                    "km": lines[k].strip(), "km_key": cmpform(bubble)})
    return res


def build_context(root, f, tag, num, lines, a):
    ws = f["ws"]
    inputs = [
        (f["script"], "the whole episode: every panel and stage direction, the speaker/voice table (화자 · 말투) and the editor's notes (검수 노트)"),
        (ws / "02_story" / "characters.md", "character profiles: ages, relationships, voice signatures and Khmer notes"),
        (ws / "02_story" / "glossary_km.md", "approved spellings and the terms of address (who uses which word with whom). Read only"),
        (ws / "03_episode" / ("%s_beatsheet.md" % tag), "scene intent: who wants what in each beat"),
        (ws / "02_story" / "twist-plan.md", "twists, double meanings and echo lines the Khmer must keep"),
        (ws / "06_assembly" / "continuity.md", "how relationships and terms changed in earlier episodes"),
    ]
    for p in sorted((ws / "02_story").glob("*relation*.md")):
        inputs.append((p, "relationship notes"))
    eps = earlier_episodes(f, num)
    for mm, p, rep, label, usable in eps:
        inputs.append((p, "EP%02d script, %s" % (mm, label)))
        if rep:
            inputs.append((rep, "EP%02d Khmer review: past decisions and author answers" % mm))

    out = [
        "# EP%02d Khmer review — context packet" % num,
        "",
        "Written by `km_review.py start` at %s. Rewritten at every start: do not edit." % now(),
        "",
        "## Files to read",
        "",
        "| File | Exists | Read it for |",
        "|---|---|---|",
    ]
    for p, why in inputs:
        out.append("| `%s` | %s | %s |" % (rel(root, p), "yes" if p.exists() else "**no**", why))

    out += ["", "## Speakers in this episode (Korean label → Khmer label used in KM lines)", ""]
    if a["speakers"]:
        out += ["| Korean | Khmer label(s) | Lines |", "|---|---|---|"]
        for ko, kms in a["speakers"].items():
            flag = " ⚠ more than one label" if len(kms) > 1 else ""
            out.append("| %s | %s%s | %d |" % (ko, " · ".join(kms), flag, sum(kms.values())))
    else:
        out.append("(no dialogue line with a KM line yet)")

    here = dialogue_pairs(lines, a)
    present = {d["speaker"] for d in here} | {strip_paren(a["info"][i]["speaker"])
                                               for i, kd in enumerate(a["kind"]) if kd == "dialogue"}
    earlier = []
    for mm, p, rep, label, usable in sorted(eps, reverse=True):
        if not usable:
            continue
        el = read(p)[0]
        for d in dialogue_pairs(el, analyse(el)):
            d["ep"] = mm
            earlier.append(d)

    out += ["", "## Repeated lines (same Korean as an earlier episode)", ""]
    known = {}
    for d in earlier:
        known.setdefault(d["ko_key"], d)
    rep_lines = []
    for d in here:
        e = known.get(d["ko_key"])
        if e and d["ko_key"]:
            same = e["km_key"] == d["km_key"]
            rep_lines += ["- P%02d %s — EP%02d P%02d%s" % (d["panel"], d["ko"], e["ep"], e["panel"],
                                                             "" if same else " · **Khmer differs**"),
                          "  - approved: %s" % e["km"], "  - here:     %s" % d["km"]]
    out += rep_lines or ["(none)"]

    out += ["", "## Approved wording from earlier episodes (speakers in this episode)", ""]
    if not earlier:
        out.append("(no earlier episode in this workspace)")
    cap = 60
    for spk in sorted(present):
        mine = [d for d in earlier if d["speaker"] == spk]
        if not mine:
            continue
        out += ["### %s (%d line%s)" % (spk, len(mine), "" if len(mine) == 1 else "s"), ""]
        for d in mine[:cap]:
            out += ["- EP%02d P%02d · %s" % (d["ep"], d["panel"], d["ko"]), "  %s" % d["km"]]
        if len(mine) > cap:
            out.append("- … %d more in the earlier scripts listed above" % (len(mine) - cap))
        out.append("")
    write(f["context"], out)


# ---------------------------------------------------------------- commands

def cmd_check(args):
    root = Path(args.root).resolve()
    tag, num = ep_tag(args.episode)
    f = files(root, tag)
    if not f["script"].exists():
        sys.exit("Missing file: %s" % f["script"])
    a = analyse(read(f["script"])[0])
    print_check(a, "Khmer line pairing - %s" % tag)
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
            print("Round %d started. The existing report was reopened: keep its rows, move answered questions"
                  " to 'Resolved questions', then add this round's work." % rnd)
    else:
        rnd = 1
        shutil.copyfile(f["script"], f["snapshot"])
        write(f["report"], report_skeleton(root, f, tag, num))
        print("Round 1 started. Report skeleton written.")

    lines = read(f["script"])[0]
    a = analyse(lines)
    build_context(root, f, tag, num, lines, a)
    print("  Script (edit only the Khmer, in place): %s" % rel(root, f["script"]))
    print("  Pre-review copy (do not edit):          %s" % rel(root, f["snapshot"]))
    print("  Report (fill it in):                    %s" % rel(root, f["report"]))
    print("  Context packet (read it first):         %s" % rel(root, f["context"]))
    print()
    print_check(a, "Khmer line pairing - %s" % tag)
    print()
    print("Next: read the context packet and the files it lists, review every KM line, edit only Khmer in the")
    print("script, fill in the report, then run: km_review.py finalize --episode %d" % num)
    return 0


def diff_changes(old, new):
    """Differences between the pre-review copy and the reviewed script that a reviewer may make."""
    ao, an = analyse(old), analyse(new)
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
                same_env = ko == kn == "env" and cmpform(ao["info"][o]["prefix"]) == cmpform(an["info"][n]["prefix"])
                if ko == kn and (ko in KM_KINDS or same_env) and ao["panel_of"][o] == an["panel_of"][n]:
                    changes.append({"type": "edit", "line": n, "panel": an["panel_of"][n], "kind": kn,
                                    "old": ao["info"][o], "new": an["info"][n], "old_kind": ko})
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
                bad("a line was deleted (the reviewer never deletes lines: ask the author)", o, None)
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
    errors = []

    if not re.search(r"\bAI review\b", "\n".join(rlines), re.I):
        errors.append("the report does not say it is an AI review (keep the '> **AI review.**' line at the top)")

    changes, violations, an = diff_changes(old, new)
    errors += ["script: " + v for v in violations]

    rows = change_rows(rlines)
    for c in changes:
        new_forms = km_variants(c["kind"], c["new"])
        hit = [r for r in rows if r["panel"] == c["panel"] and cmpform(r["revised"]) in new_forms]
        label = "P%02d line %d" % (c["panel"], c["line"] + 1)
        if not hit:
            errors.append("%s: this %s is not in the Changes table (Ref P%02d, Revised = %s)"
                          % (label, "edit" if c["type"] == "edit" else "added KM line", c["panel"],
                             c["new"]["content"]))
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
        if not r["reason"].strip():
            errors.append("%s: the Changes row has no reason" % label)

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

    open_q = questions(rlines, "Open questions")
    for q in open_q:
        if q["panel"] is None:
            errors.append("open question '%s' needs a panel reference (### Q1 · P12 · speaker)" % q["head"])
        if not any(b.lstrip().startswith(">") for b in q["body"]):
            errors.append("open question '%s' must quote the line(s) with '>'" % q["head"])
        if not any("Question:" in b for b in q["body"]):
            errors.append("open question '%s' needs a '**Question:**' line" % q["head"])
    asked = {q["panel"] for q in open_q}
    left = an["problems"]
    for p in left:
        if p["panel"] not in asked:
            errors.append("P%02d line %d: %s - fix it, or add an open question about P%02d\n      %s"
                          % (p["panel"], p["line"], p["msg"], p["panel"], p["text"]))

    print("Khmer review finalize - %s (round %s)" % (tag, get_status(rlines).get("Round", "?")))
    edits = sum(1 for c in changes if c["type"] == "edit")
    adds = sum(1 for c in changes if c["type"] == "add")
    print("  KM lines edited: %d · KM lines added: %d · other lines changed: %d"
          % (edits, adds, len(violations)))
    if errors:
        print("  Result: NOT FINALIZED - fix these and run finalize again:")
        for e in errors:
            print("  - " + e)
        return 2

    status = "NEEDS REVIEW" if open_q else "READY"
    digest = sha256(f["script"])
    rlines = set_status(rlines, {"Status": status, "Finalized": now(), "Script SHA-256": digest})
    checks = [
        CHECKS_OPEN,
        "## Tool checks (km_review.py finalize)",
        "",
        "- Finalized %s, round %s: **%s**" % (now(), get_status(rlines).get("Round", "?"), status),
        "- This round: %d KM line(s) edited, %d KM line(s) added; Korean lines, speaker labels, panel order "
        "and formatting unchanged (compared with the pre-review copy)" % (edits, adds),
        "- Every change is in the Changes table: yes",
        ("- Line pairing: OK" if not left else
         "- Line pairing: %d problem(s) left, each covered by an open question (%s)"
         % (len(left), ", ".join(sorted({"P%02d" % p["panel"] for p in left})))),
        "- Open questions: %d" % len(open_q),
    ] + ["- Note: " + nt for nt in an["notes"]] + [CHECKS_CLOSE]
    if CHECKS_OPEN in rlines and CHECKS_CLOSE in rlines:
        a, b = rlines.index(CHECKS_OPEN), rlines.index(CHECKS_CLOSE)
        rlines[a:b + 1] = checks
    else:
        while rlines and not rlines[-1].strip():
            rlines.pop()
        rlines += [""] + checks
    write(f["report"], rlines, rnl)

    print("  Line pairing problems left: %d · open questions: %d" % (len(left), len(open_q)))
    for nt in an["notes"]:
        print("  note: " + nt)
    print("  Script SHA-256: %s" % digest)
    if status == "READY":
        print("Result: READY - %s is the reviewed script; the shot list may start." % rel(root, f["script"]))
        return 0
    print("Result: NEEDS REVIEW - stop before the shot list. Ask the author:")
    for q in open_q:
        print("  - " + q["head"])
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
    rlines = read(f["report"])[0]
    st = get_status(rlines)
    status = st.get("Status", "?")
    if status != "READY":
        print("BLOCKED: the Khmer review of %s says %s (%s)." % (tag, status, rel(root, f["report"])))
        for q in questions(rlines, "Open questions"):
            print("  open question: " + q["head"])
        if status == "NEEDS REVIEW":
            print("Ask the author these questions, then run the reviewer again with the answers.")
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
    s = sub.add_parser("start", help="begin a review round: pre-review copy, report, context packet, pairing check")
    s.add_argument("--episode", required=True)
    s.add_argument("--restart", action="store_true", help="take a new pre-review copy for a round in progress")
    for name, text in (("check", "line-pairing check only"),
                       ("finalize", "verify the round and write READY / NEEDS REVIEW into the report"),
                       ("gate", "exit 0 only if the script is the READY reviewed version")):
        sub.add_parser(name, help=text).add_argument("--episode", required=True)
    args = ap.parse_args()
    return {"start": cmd_start, "check": cmd_check, "finalize": cmd_finalize, "gate": cmd_gate}[args.cmd](args)


if __name__ == "__main__":
    sys.exit(main())
