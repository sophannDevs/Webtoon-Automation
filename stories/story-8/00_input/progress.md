# NEW STORY 8 — EP01 (started 2026-11-25, branch `story-8`)

Request: new drama webtoon, Episode 1, 15+, drama type decided by research (user's answers, 2026-11-25).

## Leader rules for this run
- `_workspace` is a Windows junction to `stories/story-8`. Check it before and after every agent run.
  Never move or archive it. (`switch_story.sh` cannot re-point it on this machine; use
  `cmd /c rmdir _workspace` + `cmd /c mklink /J _workspace stories\<slug>`.)
- No team messaging tools: each agent gets a complete brief, writes only its own files (model opus).
- Nothing is committed or pushed unless the user asks.

## Done
- Phase 1: `00_input/brief.md`, working folders.

- Phase 2: research (4 files + trend-brief.md). Package A 「다섯 개의 숟가락」 adopted (LOCKED PLANNING DECISIONS in brief).

## Next
- Phase 3: concept → world → characters → series-arc → twist-plan + tension-curve → beatsheet → script → script_final → Khmer review.
- Phase 3 done (2026-11-25): concept, world, characters, series-arc (36 eps), twist-plan, tension-curve, glossary_km, ep01 beatsheet (60 panels), script, script_final; native Khmer review READY round 1, gate OK.
- Phase 4 started: art-director + panel-director in parallel, then ref-sheet-artist + letterer, then prompt-smith, then flow handoff.
- Phase 4 prompts done (2026-11-25): style-bible, character-sheets, refs/ref_prompts.md (13 cards incl. PROPS_keyprops), ep01_shotlist (60), ep01_lettering (57 bubbles, km_tool check OK), ep01_prompts (60, ≤250 words, groups A/B/C).
- Flow handoff built: 04_visual/ep01_flow_handoff.html. Status WAITING_FOR_IMAGES (round 0). Waiting for the user's Flow images.

## Resume
- Read 04_visual/ep01_flow_status.md, then follow "Resuming" in webtoon-flow-handoff (import → status --fix → validation → redraws).
- Placement pass later: check P28 (may wrap to 3 lines) and nudge bubbles on P18, P27, P38, P39, P43–47.
