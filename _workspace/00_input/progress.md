# EP01 progress — waiting for the user's Flow images (2026-11-17)

## Done
- Phase 1 research: `01_research/` (trend-brief = decision)
- Phase 2 story: `02_story/` concept, world, characters, series-arc, twist-plan, tension-curve, glossary_km (v2)
- Phase 3 episode: `03_episode/` ep01_beatsheet, ep01_script, **ep01_script_final** (64 panels, KM under every line)
- Phase 4 (Flow mode, steps 1–7): `04_visual/` style-bible, character-sheets, refs/ref_prompts.md (16 cards),
  ep01_shotlist (64), ep01_lettering (76 bubbles + 12 sfx; `km_tool.py check --episode 01` OK),
  ep01_prompts (64, ≤250 words each), **ep01_flow_handoff.html**, ep01_flow_status.md = WAITING_FOR_IMAGES

## Next (when the user says "images are ready" / "이미지 다 넣었어")
1. Read `04_visual/ep01_flow_status.md`
2. If the inbox was used: `flow_tool.py import --episode 01` (dry run) → show mapping → `--apply` after the user confirms
3. `flow_tool.py status --episode 01 --fix` → if NOT READY, list what's missing and stop
4. Validation team: ref-sheet-artist (sheets consistent → refs/INDEX.md), panel-validator (6-axis, C3 = text-free + art_space clear), prompt-smith (rewrite REGEN blocks with redraw_reason)
5. REGEN → `handoff --episode 01 --only …`, status WAITING_FOR_REDRAW, stop. All ACCEPT/ACCEPT-FLAG → VALIDATED → Phase 5

## Key decisions
- Title: 「수칙 4번은 거짓말입니다」 / Khmer ច្បាប់ទី៤ ជាការកុហក
- Rule-based office horror loop; EP01 cast 강서하, 노미란, 선임 (KM លោកពូ), 구정민; cliff hand = 전임자
- Style: Korean webtoon, muted green/gray, cold fluorescent; red only on rule-4 tape, seal ink, cliff tape roll
- Open: replay insets P24/P55 are drawn by Flow as memory vignettes (fallback: leave area empty and composite later)
- Ref-sheet prompts run 245–448 words; shorten them if Flow ignores their endings (e.g. labels appear on sheets)
