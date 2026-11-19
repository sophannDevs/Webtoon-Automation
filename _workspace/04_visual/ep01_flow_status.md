state: WAITING_FOR_IMAGES
round: 0
cards: 16 sheets, 62 panels
page: _workspace/04_visual/ep01_flow_handoff.html

## Notes
- Make the 16 sheets first, in card order (later cards attach earlier ones). **Make card 1 `DANBI_wet_states` alone and check it before anything else:** it tests whether Flow can draw the one fantasy element (a small grey cloud raining only on her, dry ground around). If it still fails after 3 redraws, tell the leader before making other cards.
- Required sheets = cards 1–14; cards 15 (`LOC_HYDRANGEA_ALLEY`) and 16 (`LOC_ASSOC_OFFICE`) are recommended.
- Panels attach the sheets. Make `panel_041` before `panel_048` and `panel_001` before `panel_061` (those two panels attach the earlier image as a framing anchor).
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build`; `km_tool.py check --episode 01` already passes (42 panels with Khmer, 67 bubbles).
- Eight sheet prompts run 262–300 words; if Flow ignores their endings (e.g. labels appear on a sheet), shorten them.
- On resume: `flow_tool.py import --episode 01` (dry run) if the inbox was used, then `flow_tool.py status --episode 01 --fix`, then the validation team (panel-validator + prompt-smith + ref-sheet-artist; C3 = text-free and art_space clear).
