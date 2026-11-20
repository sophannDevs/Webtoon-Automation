# NEW STORY 4 — EP01 (2026-11-20, branch `story-4`)

Request: "Make a new fantasy romance webtoon, Episode 1, ages 18+"

## Done
- Branch `story-4` cut from `main`. Old story (Story 1) archived to `_workspace_20261120_091118/` (kept, untouched). Nothing committed or pushed.
- Phase 1: `00_input/brief.md` (request, rules, LOCKED PLANNING DECISIONS).
- Phase 2: research (4 files + `01_research/trend-brief.md`). Package adopted: glove-maker heroine x cursed young lord, rule "his skin withers what touches it, except someone who wants the touch".

- Phase 3 so far: `02_story/concept.md` (title 「장갑을 벗기 전에」), `world.md` (manor 벨린, county 로안, ash path = "test ash"), `characters.md` (페트라 / 휴고). Leader rulings A–E appended to the brief. No clash with earlier stories' names (grep checked).

- Layout change during the run (2026-11-20 ~10:53): the repo was restructured so every story lives in `stories/<slug>/` and `_workspace` is a local junction to the active story. This story is now `stories/gloves/` (untracked in git); `_workspace` points to it; all files intact. The checkout is on branch `native-khmer-reviewer`, NOT `story-4` (`story-4` exists with no commits). Nothing committed or pushed by the leader; branch/commit location is the user's decision. CLAUDE.md now also requires the native Khmer review gate (`km_review.py gate --episode 01`) before the shot list.
- Leader precaution: check `_workspace` still points to `stories/gloves` before and after every agent run (someone running `switch_story.sh` elsewhere would redirect agent writes).
- Done after characters: `series-arc.md`, `tension-curve.md`, `twist-plan.md`, `03_episode/ep01_beatsheet.md` (62 panels), `ep01_script.md` (52 bubbles, 2 sfx, 1 caption) and `glossary_km.md`.

- Phase 3 finished: `ep01_script_final.md` (62 panels, 52 bubbles) + Khmer review READY (round 1, AI reviewer; `km_review.py gate --episode 01` exit 0).
- Phase 4 finished (Flow mode): `style-bible.md`, `character-sheets.md`, `refs/ref_prompts.md` (10 cards), `ep01_shotlist.md` (62), `ep01_lettering.md` (`km_tool.py check --episode 01` exit 0), `ep01_prompts.md` (62, max 250 words, text-free checks passed), `ep01_flow_handoff.html` (72 cards), `ep01_flow_status.md` = WAITING_FOR_IMAGES.

## STATE NOW: waiting for the user's Flow images. No images exist. Committed on branch `story-4` (fast-forwarded to main first so the Khmer-reviewer tooling stays); NOT pushed (push only when the user says "push to GitHub"). Unrelated uncommitted changes in the checkout (`.claude/launch.json`, `webapp/`, `STORY_SUMMARIES.md`, `_workspace_20261120_091118/`) were left alone.

## Next when the user says "images are ready" / "이미지 다 넣었어"
1. Read `04_visual/ep01_flow_status.md`; check `_workspace` points to `stories/gloves`.
2. If the inbox was used: `flow_tool.py import --episode 01` (dry run), show the mapping, `--apply` only after the user confirms.
3. `flow_tool.py status --episode 01 --fix`; if NOT READY list what is missing and stop.
4. Validation team: ref-sheet-artist (sheets consistent -> `refs/INDEX.md`), panel-validator (6-axis, C3 = text-free + art_space clear; check twin shot P45/P49), prompt-smith (rewrite REGEN blocks with `redraw_reason`). REGEN -> `flow_tool.py handoff --episode 01 --only ...` -> WAITING_FOR_REDRAW.
5. All ACCEPT -> Phase 5 (`km_tool.py build`, placement pass, QA, continuity, release).

## (old list, done above) Remaining
- Phase 3 story team: concept -> world -> characters -> series-arc -> twist-plan + tension-curve -> beatsheet -> script -> script_final (with KM lines) + glossary_km
- Phase 4 visual team (Flow mode, no panel-artists): style-bible, character-sheets, refs/ref_prompts, shotlist, lettering (km_tool check), prompts, handoff page -> STOP and wait for the user's Flow images
