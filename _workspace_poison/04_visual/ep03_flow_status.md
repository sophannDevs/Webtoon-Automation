state: WAITING_FOR_IMAGES
round: 0
cards: 60 panels (+ series reference sheets still missing, so the page lists them too)
page: _workspace/04_visual/ep03_flow_handoff.html

## Notes
- EP03 images are NOT started. Order: the 17 reference sheets (incl. WON_turnaround, card 17) -> the EP01 and EP02 panels that EP03 attaches -> EP03.
- EP03 attaches EP01 panel_005, 015 and EP02 panels 005, 013, 021, 022, 023, 024, 047, 050, 051, 055, 059, 060 (see ep03_shotlist.md section C); P54 attaches ep03 panel_020 and P58 attaches ep03 panel_045.
- Lilac only in P44, P45, P58 (lye-washed hemp cloth). The cloth in Baek's hand at P57 must show no lilac.
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build --episode 03`.
- 21 of 60 panel prompts exceed 260 words (longest P06 at 338). If Flow ignores their endings, shorten them.
- All Khmer text is a non-native draft; see the [감수] lists at the end of 02_story/glossary_km.md.
- On resume: `flow_tool.py import --episode 03` (dry run) if the inbox was used, then `flow_tool.py status --episode 03 --fix`, then the validation team (panel-validator + prompt-smith).
