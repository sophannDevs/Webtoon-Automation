# NEW STORY EP01 — waiting for the user's Flow images (2026-11-19, branch `new-story`)

Story: 「맑은 날의 우산」 / ឆ័ត្រនៅថ្ងៃមេឃស្រឡះ (working title 「처마 밑 반반」). EP1 「맑은 날의 비」. Slow-burn romcom, 15+, one light fantasy element (her own small rain cloud when flustered).

## Done
- Branch `new-story` cut from `main`; old story archived to `_workspace_20261119_075342/` (kept, untouched). Nothing from it reused. Nothing committed or pushed.
- Phase 1/2 research (5 files; `01_research/trend-brief.md` = decision), brief with locked decisions (`00_input/brief.md`)
- Story: `02_story/` concept, world, characters, series-arc (12-episode season map), twist-plan, tension-curve, `glossary_km.md`
- Episode: `03_episode/` ep01_beatsheet (62 panels), ep01_script (draft), **ep01_script_final** (62 panels, 52 KM lines, 66 bubbles, 2 sfx, 1 caption)
- Visual: `04_visual/` style-bible, character-sheets, `refs/ref_prompts.md` (16 cards), ep01_shotlist (62), ep01_lettering (`km_tool.py check --episode 01` exit 0), ep01_prompts (62, <= 250 words each), **ep01_flow_handoff.html**, ep01_flow_status.md = WAITING_FOR_IMAGES

## Next (when the user says "images are ready" / "이미지 다 넣었어")
1. Read `04_visual/ep01_flow_status.md`
2. If the inbox was used: `flow_tool.py import --episode 01` (dry run) -> show mapping -> `--apply` after the user confirms
3. `flow_tool.py status --episode 01 --fix`; if NOT READY list what is missing and stop
4. Validation: ref-sheet-artist (sheets consistent -> refs/INDEX.md), panel-validator (6-axis, C3 = text-free + art_space clear), prompt-smith (rewrite REGEN blocks with redraw_reason)
5. REGEN -> `flow_tool.py handoff --episode 01 --only ...`, WAITING_FOR_REDRAW. All ACCEPT -> Phase 5 (`km_tool.py build`, placement pass, QA, release)

## Leader decisions worth remembering
- Town renamed 소담 -> 누리 (avoid clash with lead 소단비). Frayed-awning flap introduced in EP2, not EP1. Chair's key-on-the-hook custom introduced EP2/EP4. R2 gold only at EP1 P62.
- Khmer: verb for 'umbrella flips inside out' = ក្រឡាប់ (not ផ្លាត់); P56 `ឥឡូវ បើភ្លៀងធម្មតា វាលែងក្រឡាប់ហើយ។`; P27 ruling ends `…អ្នកនោះបាននៅ។` (EP12 must quote it exactly). **All Khmer is draft and needs a native speaker's check** (list in `ep01_script_final.md` 에디터 노트 §7). The independent review notes are outside the repo (side-session-notes folder).
- Rating: user's note said 18+, the prompt said ages 15+; followed 15+.
- Series arc: both leads can pay the rent and choose to keep half each; first deliberate touch EP5; confession at the finale (EP12).
