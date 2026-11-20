---
name: webtoon-khmer-edition
description: "Khmer edition (크메르어판) rules for the webtoon harness: this project is made for Cambodian readers. Scripts carry a Khmer line (KM) for every piece of dialogue, the panel images contain NO text, and the episode viewer draws every speech bubble and writes the Khmer (always spelled right). Use this skill whenever writing or editing the script/dialogue, the glossary, the lettering spec, panel prompts, validating panel images, building the viewer, QA, continuity, or release packaging. Triggers: any webtoon episode work in this project, 'Khmer', '크메르어', 'ភាសាខ្មែរ', 'translate the dialogue', 'fix the Khmer', 'bubble position', 'move the bubble', '말풍선 위치'."
---

# Webtoon Khmer Edition — Khmer bubbles drawn by the viewer

Readers are Cambodian. They see **only Khmer**. Korean stays as the harness's working language (the
skills and agents are written in Korean), but every word a reader sees is Khmer.

## Scope: exactly two changes, nothing else

1. **Speech bubbles display Khmer text.**
2. **The script adds Khmer text** (a Khmer line for every line of dialogue, caption, sound effect and
   piece of writing in the story).

**Everything else in the harness stays exactly as designed. Do not change it:** the research, the story
and its rules (dialogue-driven, rising tension, a twist every episode, 50+ panels), the 27 agents and four
phases, characters, setting, art style, reference sheets, shot list, the 6-axis image check, the Flow
handoff, QA and release. "Readers are Cambodian" affects only the language of the text. It does not
change the research, the story, the setting or the art. The rules below are only what is needed to put
Khmer into the bubbles and the script.

Three rules:
1. **The script is bilingual.** Every dialogue line has a Khmer line under it. The Khmer is what gets
   published, so it is written and edited as carefully as the Korean.
2. **The images have no text.** No speech bubbles, letters, numbers or writing in any Flow image. Each
   panel keeps an empty area where its bubble will go, and objects that carry writing (signs, receipts,
   notes, phone screens) are drawn blank.
3. **The viewer draws the bubbles.** `km_tool.py build` turns the lettering spec into the episode viewer:
   it draws each bubble at its position and writes the Khmer inside, so spelling is always exact and a
   translation fix never needs a new image.

This replaces the upstream "in-image lettering / bake / no overlay" rules everywhere. Ignore instructions
in other skills or agents about drawing Korean (or any) text into the images, the C3(d) "integrated
lettering" check, and "no text overlay".

## The tool

```bash
python -I .claude/skills/webtoon-khmer-edition/scripts/km_tool.py check --episode NN
python -I .claude/skills/webtoon-khmer-edition/scripts/km_tool.py build --episode NN --title "<Khmer series title>"
python -I .claude/skills/webtoon-khmer-edition/scripts/km_tool.py build --episode NN --title "<…>" --release
```

| Command | What it does |
|---|---|
| `check` | Compares every Khmer line in `ep{NN}_script_final.md` with `text_km` in `ep{NN}_lettering.md`, panel by panel (a line split over two bubbles still matches). Also flags bubbles without a position, Korean letters inside Khmer text, and bubbles wider than 85 %. Exit 0 = OK. Run it after the lettering spec is written and again before release. |
| `build` | Builds `06_assembly/ep{NN}/index.html` from the lettering spec + `05_panels/ep{NN}/panel_*.png`. Names from the glossary never break across lines. |
| `build --release` | Same, into `RELEASE/ep{NN}/index.html` with the images copied to `RELEASE/ep{NN}/panels/`. |

The viewer data comes only from the lettering spec: to change words or positions, edit the lettering
spec and rebuild. Never hand-edit the viewer's data.

## 1. Script format (dialogue-writer, script-editor)

```
### P44 · 클로즈업 · S2 ⟨반전⟩
(영수증을 펼치는 서윤의 손.)
서윤: "판매자… 한서윤?"
KM: សឺយូន៖ "អ្នកលក់… ហាន សឺយូន?"
```

- `KM:` line right under each dialogue line: `KM: <Khmer speaker>៖ "<Khmer line>"`. Thoughts:
  `KM: សឺយូន (គិត)៖ "…"`.
- Writing on objects: `「메모」 KM: <Khmer text>` (no quotes).
- Sound effects: keep exactly the sound effects the story would have anyway, and put a Khmer version
  right under each `[효과음]` line: `KM 효과음: <Khmer>`. The viewer draws them; only the language changes.
- Ending caption: `KM 캡션: — នៅមានតក្នុងភាគទី N —`.
- **Write natural Khmer, not word-for-word translation.** Keep each line short (bubbles get crowded).
  Match politeness with Khmer terms of address rather than copying Korean honorifics (e.g. 사장님 →
  លោកថៅកែ, 서윤 씨 → កញ្ញា សឺយូន, an elder ↔ young person → យាយ / ក្មួយ / ចៅ).
- **Twists and double meanings must work in Khmer.** script-editor checks every ⟨이중의미⟩ and ⟨반전⟩ line
  in the Khmer as well and lists them in the editor's notes.
- Panel headings stay `### P01 · …` (km_tool maps P44 ↔ panel_044).

## 1b. Native Khmer review (native-khmer-agent-reviewer)

The last step of Phase 3. After script-editor finishes `ep{NN}_script_final.md`, the Native Khmer Agent
Reviewer checks every KM line as a native Cambodian dialogue editor would (meaning and intent, spoken
Khmer that fits a bubble, forms of address, glossary spellings, each character's voice) and corrects the
Khmer **in place**, so the shot list, the lettering, `km_tool.py check` and QA all read the reviewed
text. It changes only Khmer: never the Korean, speaker labels, panel order or formatting (the way the
placement pass changes only `place`). It adds a missing KM line when the source is clear and asks the
author when it is not.

```bash
python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py start    --episode NN
python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py check    --episode NN
python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py finalize --episode NN
python -I .claude/skills/webtoon-khmer-edition/scripts/km_review.py gate     --episode NN
```

| Command | What it does |
|---|---|
| `start` | Begins a review round: saves the pre-review copy, creates or reopens the report, writes the context packet, prints the line-pairing check. |
| `check` | Line pairing only: every dialogue line, caption and `[효과음]` has exactly one KM line directly under it; no orphan KM lines; no Korean letters in Khmer. |
| `finalize` | Compares the script with the pre-review copy (only KM text may change, or one KM line be added under a line that had none), checks every change is in the report and every pairing problem left has an open question, then writes Status and the script's SHA-256 into the report. Exit 0 = READY, 1 = NEEDS REVIEW, 2 = fix and re-run. |
| `gate` | Run before the shot list. Exit 0 only if the review is READY and `ep{NN}_script_final.md` is byte for byte the reviewed version. |

Files, all in `03_episode/`:
- `ep{NN}_km_review.md`: the report, marked as an AI review. Status (READY / NEEDS REVIEW), a Changes table
  (ref · original KM · revised KM · reason in English), Open questions (the quoted line and the question
  the author must answer), Resolved questions, and the tool's checks.
- `ep{NN}_script_final_pre_km_review.md`: the script as the reviewer found it (audit copy, never an input).
- `ep{NN}_km_review_context.md`: the reviewer's context packet: files to read, speaker labels, approved
  wording from earlier episodes, lines repeated from earlier episodes.

**READY** → Phase 4 may start. **NEEDS REVIEW** → the workflow stops before the shot list; the leader
shows the user each open question, and the reviewer runs again with the answers. If the script changes
after a READY review, the gate stays closed until the reviewer runs again.

## 2. Glossary — `_workspace/02_story/glossary_km.md` (series asset)

Created with episode 1 (dialogue-writer), checked by script-editor, kept by continuity-manager, reused
every episode. A markdown table, Korean in column 1 and Khmer in column 2:

```
| 한국어 | 크메르어 | 메모 |
|---|---|---|
| 한서윤 | ហាន សឺយូន | 주인공 |
| 기억전당포 | ហាងបញ្ចាំការចងចាំ | 가게 이름 |
| 사장님 | លោកថៅកែ | 서윤 → 도진 |
```

Every name, place, invented term and term of address goes here. Use these spellings everywhere.
Multi-word Khmer names in column 2 are kept on one line by the viewer.

## 3. Lettering spec — `04_visual/ep{NN}_lettering.md` (letterer)

```
### panel_044
- art_space: 상단 우측 1/3을 단순한 어두운 배경으로 비움
- gap_after: 0
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អ្នកលក់… ហាន សឺយូន?"
  - text_ko: "판매자… 한서윤?"
  - place: x 70% · y 13% · w 50% · tail ↙
  - read_order: 1
- env_1:
  - text_km: "កុំស្វែងរកមនុស្សនោះ។"
  - on: 영수증 뒷면
  - style: hand
  - place: x 50% · y 49% · size 6.6% · rot -3
- sfx_1:
  - text_km: "ក្រាំង!"
  - place: x 62% · y 40% · size 9% · rot -8
```

- `art_space` (every panel with text): the area the image must leave empty. prompt-smith copies it
  into the prompt.
- `type`: `dialogue` · `thought` · `shout` · `narration` (caption box) · `memory` (memory/flashback
  scenes: blue blurred edge).
- `place`: `x`/`y` = bubble centre, `w` = max width, all in % of the panel. Tail arrows: `↙ ↓ ↘` (tail at
  the bottom, pointing left/centre/right) or `↖ ↑ ↗` (top); none for thought and narration. For a
  speaker outside the panel, point the tail at that edge.
- `env` = writing on an object (no bubble): `style: hand` (handwriting, blue pen) · `sign` (neon/shop
  sign) · `screen` (phone or monitor), `size` = font size in % of panel width, `rot` = degrees.
- `sfx` = lettered sound effect (only where the script has `KM 효과음`).
- `gap_after` (optional) = space in px after the panel (big gaps around the twist).
- `silent: true` for panels with no text.
- **One or two bubbles per panel; at most about two lines of Khmer per bubble.** Split longer lines into
  two bubbles with `read_order` 1, 2.
- `text_km` must be the script's KM text **exactly** (km_tool check enforces it); `text_ko` is reference
  only and never shown.
- Keep bubbles off faces and key art, in reading order top to bottom.

## 4. Panel prompts (prompt-smith) and shot list (panel-director)

- panel-director composes each panel so its `art_space` is calm background, and draws objects with
  writing as blank.
- prompt-smith: no bubble or dialogue sentences at all. Add `Keep <art_space, in English> as calm, empty
  background with no important details (a speech bubble will be added there later).` Describe signs,
  receipts, notes and screens as `blank`. End every panel prompt with
  `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
- Character reference sheets are unchanged (already text-free).

## 5. Checking images (panel-validator)

C3 changes from "Korean bubble text correct" to **"text-free and ready for bubbles"**:
- (a) No letters, numbers, fake writing, speech bubbles or captions anywhere in the image → otherwise REGEN.
- (b) The `art_space` area is actually clear (no face, hand or key object there) → otherwise REGEN, or
  if a nearby area is clear, suggest a new `place` to the letterer instead of a redraw.
- (c) Objects that should carry writing (sign, receipt, note, screen) are blank and large enough for the
  text.
- C1, C2, C4, C5, C6 are unchanged. The lettering ledger becomes a short "text-free: yes/no" column.

## 6. Building the viewer (episode-compositor)

1. Run `km_tool.py check`. Fix any problem in the lettering spec (or ask the letterer / script-editor).
2. Run `km_tool.py build --episode NN --title "<Khmer title from the glossary>"`.
3. **Placement pass:** open each panel image and the built page; if a bubble covers a face or key art,
   nudge its `place` in the lettering spec (x/y, sometimes w) and rebuild. Never change the words here.
4. Report the path `06_assembly/ep{NN}/index.html`.

## 7. QA (quality-reviewer), continuity and release

- quality-reviewer: `km_tool.py check` must be OK; read the built page panel by panel (bubbles readable,
  in reading order, not covering faces, tails toward the right speaker, Khmer natural); confirm the
  images are text-free; confirm names and terms match the glossary.
- continuity-manager: keeps `glossary_km.md` and adds new names and terms each episode; flags any
  spelling drift.
- showrunner: `km_tool.py build --episode NN --release --title "<…>"`, then add `qa_report.md` and
  `RELEASE_NOTES.md` to `RELEASE/ep{NN}/`.

## Fonts

The viewer uses Google Fonts when online (Battambang for dialogue, Fasthand for handwriting, Koulen for
signs, shouts and sound effects) and falls back to the reader's own Khmer font offline (Khmer UI on
Windows, Noto Sans Khmer on Android, Khmer Sangam MN on iPhone/Mac).

A worked example of every file (made-up episode) is in `examples/` at the project root.
