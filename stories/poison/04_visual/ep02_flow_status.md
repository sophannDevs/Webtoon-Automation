state: WAITING_FOR_IMAGES
round: 0
cards: 60 panels (+16 EP01 reference sheets still missing, so the page lists them too)
page: _workspace/04_visual/ep02_flow_handoff.html

## Notes
- EP02 images are NOT started. EP01 comes first: its 16 reference sheets (refs/*.png) and the EP01 panels that EP02 attaches (ep01 panel_005, 015, 020, 021, 023, 031, 048, 051, 052, 053, 058, 059, 060).
- Repeat panels attach their original, so make each original first.
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build --episode 02`.
- 13 of 60 panel prompts exceed 260 words (longest P05 at 295). If Flow ignores their endings, shorten them.
- All Khmer text is a non-native draft; see the [감수] lists at the end of 02_story/glossary_km.md.
- On resume: `flow_tool.py import --episode 02` (dry run) if the inbox was used, then `flow_tool.py status --episode 02 --fix`, then the validation team (panel-validator + prompt-smith).
