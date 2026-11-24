# NEW STORY 7 — EP01 (started 2026-11-24, branch `story-7`)

Request: new fantasy romance webtoon, Episode 1, 18+ (user's answers, 2026-11-24).

## Leader rules for this run
- `_workspace` is a Windows junction to `stories/story-7`. Check it before and after every agent run.
  Never move or archive it. (`switch_story.sh` cannot re-point it on this machine; use
  `cmd /c rmdir _workspace` + `cmd /c mklink /J _workspace stories\<slug>`.)
- No team messaging tools: each agent gets a complete brief, writes only its own files (model opus).
- Nothing is committed or pushed unless the user asks.

## Done
- Phase 1: `00_input/brief.md`, working folders.
- Phase 2: research (4 files + `01_research/trend-brief.md`). Package 1 adopted: 「여왕의 그림자에는 날개가 있다」 (working
  title): a queen crowned 7 days ago takes custody of a dragon-kin hostage's shadow; he is free only if she dies; he is secretly
  the dragon-kin's king. LOCKED PLANNING DECISIONS appended to the brief.

- Phase 3 story files: `concept.md` (「날개 달린 그림자」, EP1 「폐하」, KM ស្រមោលមានស្លាប draft), `world.md` (gate 「정오의 문」,
  kingdom 타렌, highlands 케드라), `characters.md` (리네 / 헤론 / 바실 / 우르 / 토라), `series-arc.md` (40 eps, 4 acts),
  `twist-plan.md`, `tension-curve.md` (EP1 64 panels). Leader rulings A–W appended to the brief. Series-level follow-ups for
  before EP2: world.md customs (ruling V, P), series-arc C1–C12 + EP16/EP20 (rulings O, U).

- Phase 3 finished: `ep01_beatsheet.md` (64), `ep01_script.md`, `glossary_km.md`, `ep01_script_final.md` (64 panels,
  50 bubbles, 6 sfx). Khmer review READY round 1 (`km_review.py gate --episode 01` exit 0). 「폐하」 = ព្រះករុណា.
- Phase 4 (Flow mode): `style-bible.md`, `character-sheets.md`, `refs/ref_prompts.md` (12 cards), `ep01_shotlist.md` (64),
  `ep01_lettering.md` (km_tool check exit 0), `ep01_prompts.md` (64, ≤250 words; STYLE_CORE/NEGATIVE shortened to fit,
  leader accepted), `ep01_flow_handoff.html` (76 cards), `ep01_flow_status.md` = WAITING_FOR_IMAGES.

## STATE NOW: waiting for the user's Flow images. Nothing committed or pushed.

## Next when the user says "images are ready"
1. Read `04_visual/ep01_flow_status.md`; check `_workspace` points to `stories/story-7`.
2. If the inbox was used: `flow_tool.py import --episode 01` (dry run), show mapping, `--apply` after the user confirms.
3. `flow_tool.py status --episode 01 --fix`; if NOT READY list what is missing and stop.
4. Validation: ref-sheet-artist (sheets → `refs/INDEX.md`), panel-validator (6-axis, C3 text-free + art_space clear; P3↔P49,
   P46 crown), prompt-smith (REGEN blocks + `redraw_reason`) → redraw handoff or Phase 5.

## Remaining
- Phase 3: concept → world → characters → series-arc → twist-plan + tension-curve → beatsheet → script
  (+ glossary_km) → script_final → native Khmer review (READY, `km_review.py gate --episode 01`).
- Phase 4 (Flow mode): style-bible, character-sheets, refs/ref_prompts, shotlist, lettering
  (`km_tool.py check`), prompts, handoff page → STOP and wait for the user's Flow images.

## EP02 (2026-11-24)
- Before EP2: world.md §13–§15 (customs, 돌아오는 심장, LOC_THRONE/LOC_CELLS), series-arc corrections (EP16 no kiss, EP20 option B).
  Rulings X–AC appended to the brief.
- Phase 3: `ep02_beatsheet.md` (55), `ep02_script.md`, `ep02_script_final.md` (55 panels, 50 bubbles, 1 sfx), glossary updated.
  Khmer review READY round 1 (`km_review.py gate --episode 02` exit 0). EP2 title KM យប់នេះ ត្រឹមនេះសិន.
- Phase 4: style-bible §15 / character-sheets §10 additions (no new reference sheet), `ep02_shotlist.md` (55), `ep02_lettering.md`
  (km_tool check exit 0), `ep02_prompts.md` (55, ≤249 words), `ep02_flow_handoff.html`, `ep02_flow_status.md` = WAITING_FOR_IMAGES.
- STATE NOW: EP01 and EP02 both wait for the user's Flow images. EP02 work is not committed yet.
