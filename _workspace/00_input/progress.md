# EP02 progress — waiting for the user's Flow images (2026-11-18)

## Done
- `00_input/brief.md` EP02 section (new episode; story assets, style bible and refs are reused)
- `02_story/characters.md` v1.1: 전임자 = 남재우 (§4-8 token + English Flow line, §4-9 EP02 looks; KM ណាម ជែវូ proposed, label អ្នកមុន)
- `03_episode/ep02_beatsheet.md`: 58 panels, blocks ①–⑦, twists T-a (the hand = 남재우, a living person) and T-b (05:59 "퇴근하세요" = handover offer, rule 7 reversed), cliff = handover form at the L3 day window

- `03_episode/ep02_script.md` (draft): 58 panels, 81 KM bubbles, 5 KM sfx, P58 caption; `glossary_km.md` v3 (+69 rows incl. §7-2 EP02 fixed lines)

- `03_episode/ep02_script_final.md`: final, 58 panels / 81 KM bubbles; glossary_km v4 (rule 7 KM lengthened; decisions in memo column; EP03 note in script notes §E)
- `04_visual/style-bible.md` + `character-sheets.md` v1.1 (additions only): LOC_L3_LOBBY (+views, dawn/day light), VIEW_SIDE in LOC_L1, handover forms A/B, L3 clock, 남재우 token
- `refs/ref_prompts.md`: +5 EP02 cards (JAEWOO_turnaround, JAEWOO_expressions, PROP_HANDOVER_pair, LOC_L3_LOBBY_DAWN_plate, LOC_L3_LOBBY_DAY_plate) → 21 cards total; EP01 handoff page rebuilt

- `04_visual/ep02_shotlist.md` (58 panels), `ep02_lettering.md` (82 bubbles + 7 sfx; `km_tool.py check --episode 02` OK), `ep02_prompts.md` (58, 178–249 words), **`ep02_flow_handoff.html`**, `ep02_flow_status.md` = WAITING_FOR_IMAGES

## Next
- EP02 is ready for the user's Flow images (after EP01's: EP02 repeats attach EP01 panels). When the user says "images are ready": follow `ep01_flow_status.md` / `ep02_flow_status.md` "On resume", then validation (panel-validator, prompt-smith, ref-sheet-artist) and Phase 5 per episode.
- Next new work: EP03 (series-arc §5 row; note in ep02_script_final §E about the handover-form last line; glossary v4).

---

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
