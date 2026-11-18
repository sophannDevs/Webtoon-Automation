state: WAITING_FOR_IMAGES
round: 0
cards: 21 sheets (16 EP01 + 5 EP02, shared with EP01's handoff page), 58 panels
page: _workspace/04_visual/ep02_flow_handoff.html

## Notes
- EP02 reuses the EP01 reference sheets, so the sheets are made once. The EP01 and EP02 pages list the same 21 sheet cards; the 5 new ones are JAEWOO_turnaround, JAEWOO_expressions, PROP_HANDOVER_pair, LOC_L3_LOBBY_DAWN_plate, LOC_L3_LOBBY_DAY_plate.
- 21 EP02 panels repeat an EP01 composition and attach the EP01 panel PNG (`_workspace/05_panels/ep01/…`), so EP01's panels must exist first. The 6 insets (P8, P10, P20, P47, P37, P55) are drawn by Flow as a framed memory vignette with the source panel attached.
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build`.
- P42 leaves out LIGHT_0600 (far corridor lights at 06:00) until the worldbuilder approves it; the one sentence to add is in the file header of ep02_prompts.md.
- On resume: `flow_tool.py import --episode 02` (dry run) if the inbox was used, then `flow_tool.py status --episode 02 --fix`, then the validation team (panel-validator + prompt-smith + ref-sheet-artist for new sheets).
