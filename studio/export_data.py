#!/usr/bin/env python3
"""Export the stories in this repo into studio/data.js for the static Story Studio page.

Run from the project root:

  python -I studio/export_data.py

Each story lives on a git branch. The script copies that branch's _workspace/ into a temporary
folder (nothing in the repo changes), reads the files, runs `km_tool.py check` and the Flow prompt
parser, and writes everything to studio/data.js. Open studio/index.html in a browser afterwards.
"""
import datetime as dt
import importlib.util
import io
import json
import re
import subprocess
import sys
import tarfile
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "studio" / "data.js"
FLOW_TOOL = ROOT / ".claude/skills/webtoon-flow-handoff/scripts/flow_tool.py"
KM_TOOL = ROOT / ".claude/skills/webtoon-khmer-edition/scripts/km_tool.py"

# Story facts that are written as prose in the story files (titles, cast, twists).
# Numbers and step states are read from the files below, not typed here.
STORIES = [
    {
        "slug": "rule4",
        "refs": ["HEAD"],
        "folder": "stories/rule4",
        "branch": "main",
        "also": "Folder stories/rule4/",
        "title_ko": "수칙 4번은 거짓말입니다",
        "title_km": "ច្បាប់ទី៤ ជាការកុហក",
        "tagline": "괴이 민원은 22시에 접수합니다",
        "genre": "Rule-based horror mystery · public office · time loop",
        "tone": "Unease 7 : front-desk black comedy 3",
        "rating": "15+",
        "season": 20,
        "created": "2026-11-16",
        "palette": "rule4",
        "logline": "거절을 못 해 팀장의 야간 당직까지 떠안은 신입 9급 공무원이, 괴이 민원인이 찾아오는 밤을 수칙대로 버티다 죽을 때마다 기억 하나를 내고 같은 밤으로 돌아오는데, 그 수칙을 쓴 건 잊어버린 과거의 자신이었고 4번만은 누군가 덧대어 놓은 거짓이었다.",
        "cast": [
            {"ko": "강서하", "km": "កាង សឺហា", "role": "Lead · new civil servant on her first night duty"},
            {"ko": "노미란", "km": "ណូ មីរ៉ាន", "role": "Team leader · first-layer antagonist"},
            {"ko": "선임 (선배님)", "km": "លោកពូ", "role": "Senior on duty · red herring, double-meaning lines"},
            {"ko": "구정민", "km": "គូ ជុងមីន", "role": "EP01 uncanny visitor · the dead man cancelling his own death report"},
            {"ko": "남재우", "km": "ណាម ជែវូ", "role": "The predecessor · appears from EP02"},
        ],
        "episodes": {
            "01": {"ko": "수칙 4번", "km": "", "twist": "The night-duty rules were written by her own forgotten past self, and rule 4 was added by someone else."},
            "02": {"ko": "퇴근하세요", "km": "", "twist": "The hand at the cliffhanger is Nam Jae-woo, a living person; the 05:59 voice saying \"go home\" is really a handover offer."},
            "03": {"ko": "인수인계", "km": "", "twist": "Rule 4 turns out to be true for her, and at the end her own name becomes the threat."},
        },
    },
    {
        "slug": "poison",
        "refs": ["HEAD"],
        "folder": "stories/poison",
        "branch": "main",
        "also": "Folder stories/poison/",
        "title_ko": "독은 제가 먼저 먹겠습니다",
        "title_km": "ថ្នាំពុល ខ្ញុំសូមភ្លក់មុន",
        "tagline": "은침은 속여도, 제 혀는 못 속입니다.",
        "genre": "Palace survival mystery · hidden identity · protecting a child",
        "tone": "Palace suspense 6 : warmth 3 : light humour 1",
        "rating": "12–15",
        "season": 48,
        "created": "2026-11-17",
        "palette": "poison",
        "logline": "선왕 독살 누명으로 몰락한 약재상의 딸 채령은 죽은 언니의 이름으로 어린 왕자의 기미 궁녀가 되어 숨어 살지만, 은침에 걸리지 않는 독에서 왕자를 구한 바로 그 순간, 그 독이 자신을 찾아내려고 믿던 상궁이 놓은 미끼였음을 알게 된다.",
        "cast": [
            {"ko": "채령 (궁에서는 단이)", "km": "ឆែរ៉ុង / ដានី", "role": "Lead · 17, the prince's food taster, hiding under her dead sister's name"},
            {"ko": "어린 왕자", "km": "ព្រះអង្គម្ចាស់", "role": "8, the child she protects"},
            {"ko": "민 상궁", "km": "មេនាងវាំង មីន", "role": "48, head of the tasters · mentor who set the bait"},
            {"ko": "백 감찰", "km": "អធិការ ប៉ែក", "role": "26, palace inspector · suspicion and tension"},
            {"ko": "홍 숙수", "km": "មេចុងភៅ ហុង", "role": "54, head cook · red herring"},
        ],
        "episodes": {
            "01": {"ko": "독은 제가 먼저 먹겠습니다", "km": "ថ្នាំពុល ខ្ញុំសូមភ្លក់មុន", "twist": "The poison was never meant for the prince: it was bait to find the girl who can spot what the silver needle misses, and her kind mentor Lady Min set it."},
            "02": {"ko": "은침이 검게 변한 아침", "km": "", "twist": "The blackened silver needle is not poison after all; the real reveal is the antidote pill hidden in the court lady's sleeve."},
            "03": {"ko": "깨끗합니다", "km": "ស្អាត", "twist": "The kind physician's tonic holds raw numbing herb from a different hand, and Lady Min's order to say \"clean\" has another motive."},
        },
    },
    {
        "slug": "umbrella",
        "refs": ["HEAD"],
        "folder": "stories/umbrella",
        "branch": "main",
        "also": "Folder stories/umbrella/. Working title 「처마 밑 반반」",
        "title_ko": "맑은 날의 우산",
        "title_km": "ឆ័ត្រនៅថ្ងៃមេឃស្រឡះ",
        "tagline": "맑은 날, 그녀 머리 위에만 비가 내린다.",
        "genre": "Slow-burn romantic comedy · one light fantasy element",
        "tone": "Warm, playful, sometimes awkward",
        "rating": "15+",
        "season": 12,
        "created": "2026-11-19",
        "palette": "umbrella",
        "logline": "마음이 흔들리면 자기 머리 위에만 비가 내리는 빙수 노점 주인이, 첫 내 가게를 지키려고 장마 동안 시장 입구 한 칸을 우산 수선공과 반반 나눠 쓰는데, 그녀가 설렐수록 내리는 비가 경쟁자인 그의 장사를 살린다.",
        "cast": [
            {"ko": "문태오", "km": "មូន តេអូ", "role": "Lead · 25, umbrella repairman keeping his late grandfather's stall"},
            {"ko": "소단비", "km": "សូ ដាន់ប៊ី", "role": "Lead · 22, shaved-ice stall owner with her own rain cloud"},
            {"ko": "고옥자", "km": "កូ អុកចា", "role": "63, market association chair · gave the stall to both"},
            {"ko": "공만식", "km": "គុង ម៉ាន់ស៊ីក", "role": "52, fish-cake stall across the way · comic witness"},
            {"ko": "진보미", "km": "ជីន បូមី", "role": "8, regular kid at both stalls"},
        ],
        "episodes": {
            "01": {"ko": "맑은 날의 비", "km": "ភ្លៀងនៅថ្ងៃមេឃស្រឡះ", "twist": "He has seen her rain cloud since the very first second, and has been quietly keeping her secret."},
        },
    },
]

RESEARCH = ["trend-scout.md", "platform-ranker.md", "audience-analyst.md", "hook-analyst.md", "trend-brief.md"]


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, encoding="utf-8")


def pick_ref(refs):
    for r in refs:
        if git("rev-parse", "--verify", "--quiet", r + "^{commit}").returncode == 0:
            return r
    return None


def extract(ref, dest, folder="_workspace"):
    data = subprocess.run(["git", "archive", ref, folder], cwd=ROOT, capture_output=True).stdout
    with tarfile.open(fileobj=io.BytesIO(data)) as tar:
        tar.extractall(dest, filter="data")
    if folder != "_workspace":
        (Path(dest) / folder).rename(Path(dest) / "_workspace")
        # drop the now-empty parent (e.g. stories/)
        parent = Path(dest) / Path(folder).parent
        if parent != Path(dest) and not any(parent.iterdir()):
            parent.rmdir()


def load_flow_tool():
    spec = importlib.util.spec_from_file_location("flow_tool", FLOW_TOOL)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def read(p):
    return p.read_text(encoding="utf-8-sig") if p.exists() else ""


def count(pattern, text):
    return len(re.findall(pattern, text, flags=re.M))


def flow_status(path):
    st = {"state": "", "round": 0, "cards": "", "notes": []}
    in_notes = False
    for line in read(path).splitlines():
        m = re.match(r"^(state|round|cards):\s*(.*)$", line)
        if m:
            st[m.group(1)] = int(m.group(2)) if m.group(1) == "round" and m.group(2).isdigit() else m.group(2)
            continue
        if line.startswith("## "):
            in_notes = line.strip().lower() == "## notes"
            continue
        if in_notes and line.startswith("- "):
            st["notes"].append(line[2:].strip())
    return st


def km_check(root, ep):
    r = subprocess.run([sys.executable, "-I", str(KM_TOOL), "--root", str(root), "check", "--episode", ep],
                       capture_output=True, text=True, encoding="utf-8")
    lines = [l.strip() for l in (r.stdout + r.stderr).splitlines() if l.strip()]
    return {"ok": r.returncode == 0, "summary": lines[-1] if lines else ""}


def cards(ft, path, kind, default_dir, root):
    if not path.exists():
        return []
    out = []
    for it in ft.parse_prompt_file(path, kind, default_dir, root):
        target = Path(it["target"])
        out.append({
            "name": it["name"],
            "kind": kind,
            "aspect": it.get("aspect", ""),
            "scene": it.get("scene_id", ""),
            "attach": it["attach_list"],
            "prompt": it["prompt"],
            "words": len(it["prompt"].split()),
            "redraw": it.get("redraw_reason", ""),
            "has_image": target.exists(),
        })
    return out


def story_data(ft, s, tmp):
    ref = pick_ref(s["refs"])
    if not ref:
        print("  skipped %s: none of %s found" % (s["slug"], s["refs"]))
        return None
    root = Path(tmp) / s["slug"]
    root.mkdir()
    extract(ref, root, s.get("folder", "_workspace"))
    ws = root / "_workspace"
    vis = ws / "04_visual"
    log = git("log", "-1", "--format=%cs|%s", ref).stdout.strip().split("|", 1)

    sheets = cards(ft, vis / "refs" / "ref_prompts.md", "ref", vis / "refs", root)
    story_files = {
        "brief": (ws / "00_input/brief.md").exists(),
        "research": sum((ws / "01_research" / f).exists() for f in RESEARCH),
        "concept": (ws / "02_story/concept.md").exists(),
        "world": (ws / "02_story/world.md").exists(),
        "characters": (ws / "02_story/characters.md").exists(),
        "arc": all((ws / "02_story" / f).exists() for f in ("series-arc.md", "twist-plan.md", "tension-curve.md")),
        "glossary": (ws / "02_story/glossary_km.md").exists(),
        "style": all((vis / f).exists() for f in ("style-bible.md", "character-sheets.md")),
        "ref_prompts": (vis / "refs/ref_prompts.md").exists(),
        "sheet_images": sum(c["has_image"] for c in sheets),
        "sheets_checked": (vis / "refs/INDEX.md").exists(),
    }

    episodes = []
    eps = sorted({m.group(1) for p in (ws / "03_episode").glob("ep*_*.md")
                  if (m := re.match(r"ep(\d\d)_", p.name))})
    for ep in eps:
        tag = "ep" + ep
        ep_dir = ws / "03_episode"
        shot = read(vis / (tag + "_shotlist.md"))
        lettering = read(vis / (tag + "_lettering.md"))
        panels = cards(ft, vis / (tag + "_prompts.md"), "panel", ws / "05_panels" / tag, root)
        words = [c["words"] for c in panels]
        has_lettering = bool(lettering)
        episodes.append({
            "ep": ep,
            **s["episodes"].get(ep, {"ko": "", "km": "", "twist": ""}),
            "files": {
                "beatsheet": (ep_dir / (tag + "_beatsheet.md")).exists(),
                "script": (ep_dir / (tag + "_script.md")).exists(),
                "script_final": (ep_dir / (tag + "_script_final.md")).exists(),
                "shotlist": bool(shot),
                "lettering": has_lettering,
                "prompts": bool(panels),
                "handoff": (vis / (tag + "_flow_handoff.html")).exists(),
                "validation": (vis / (tag + "_validation.md")).exists(),
                "viewer": (ws / "06_assembly" / tag / "index.html").exists(),
                "qa": (ws / "06_assembly" / tag / "qa_report.md").exists(),
                "release": (ws / "RELEASE" / tag / "index.html").exists(),
            },
            "panels": count(r"^###\s+panel_\d+", shot) or len(panels),
            "bubbles": count(r"^\s*-\s*text_km\s*:", lettering),
            "km_check": km_check(root, ep) if has_lettering else {"ok": False, "summary": "No lettering spec yet"},
            "words_avg": round(sum(words) / len(words)) if words else 0,
            "words_max": max(words) if words else 0,
            "long_prompts": sum(w > 260 for w in words),
            "images": sum(c["has_image"] for c in panels),
            "flow": flow_status(vis / (tag + "_flow_status.md")),
            "cards": panels,
        })

    print("  %-9s %-36s %d episodes, %d sheets" % (s["slug"], ref, len(episodes), len(sheets)))
    meta = {k: v for k, v in s.items() if k not in ("refs", "folder", "episodes")}
    return {**meta, "ref": ref, "last_commit": {"date": log[0], "message": log[-1]},
            "story_files": story_files, "sheets": sheets, "episodes": episodes}


def main():
    ft = load_flow_tool()
    with tempfile.TemporaryDirectory() as tmp:
        stories = [d for s in STORIES if (d := story_data(ft, s, tmp))]
    payload = {"generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"), "stories": stories}
    OUT.write_text("window.STUDIO_DATA = " + json.dumps(payload, ensure_ascii=False) + ";\n", encoding="utf-8")
    print("Wrote %s (%d KB)" % (OUT.relative_to(ROOT), OUT.stat().st_size // 1024))


if __name__ == "__main__":
    sys.exit(main())
