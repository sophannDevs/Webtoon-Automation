state: WAITING_FOR_IMAGES
round: 0
cards: 21 sheets (16 for EP01 + 5 added for EP02), 64 panels
page: _workspace/04_visual/ep01_flow_handoff.html

## Notes
- Sheets first (12 character/prop sheets + 4 location plates), in card order: later cards attach earlier ones.
- Panels attach reference sheets; 10 repeated loop-2 panels (P28, 32, 33, 35–40, 52) and the two memory insets (P24, P55) also attach an earlier panel image, so make each original before its repeat.
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build`.
- On resume: `flow_tool.py import --episode 01` (dry run) if the inbox was used, then `flow_tool.py status --episode 01 --fix`, then the validation team (panel-validator + prompt-smith + ref-sheet-artist).
