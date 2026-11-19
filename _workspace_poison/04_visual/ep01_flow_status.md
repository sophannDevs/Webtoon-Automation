state: WAITING_FOR_IMAGES
round: 0
cards: 16 sheets, 60 panels
page: _workspace/04_visual/ep01_flow_handoff.html

## Notes
- Sheets first (13 required + 3 location plates), in card order: later cards attach earlier ones.
- Repeat panels attach their original (P24 from P04; P48 and P58 from P05; P50 from P08; P51 optionally from P21), so make each original before its repeat.
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build`.
- 21 of 60 panel prompts exceed ~260 words (longest P13 311, P05 308). If Flow ignores their endings, shorten them.
- All Khmer text is a non-native draft; see the [감수] list at the end of 02_story/glossary_km.md.
- On resume: `flow_tool.py import --episode 01` (dry run) if the inbox was used, then `flow_tool.py status --episode 01 --fix`, then the validation team (panel-validator + prompt-smith + ref-sheet-artist).
