state: WAITING_FOR_IMAGES
round: 0
cards: 23 sheets (16 EP01 + 5 EP02 + 2 EP03, shared by all three handoff pages), 60 panels
page: _workspace/04_visual/ep03_flow_handoff.html

## Notes
- EP03 reuses the EP01/EP02 reference sheets, so the sheets are made once. The two new ones are MOVEIN_ref and HANDRENAME_ref (HANDRENAME_ref must never be attached together with HANDCLIFF_ref or the JAEWOO cards).
- Make panels in order: EP03 repeats attach 19 EP01 panels and 11 EP02 panels as references (and 9 EP03 panels attach earlier EP03 panels). Insets P6, P11, P28 are drawn by Flow as a framed faded memory vignette with the source panel attached.
- Images must contain no text. The Khmer bubbles are added later by `km_tool.py build`.
- Move-in form = light yellow-green (#DCE6B0); name-change form = apricot (#F7D9C4), no seal box. The red tape roll lies on its side on Mi-ran's day desk and nobody touches it.
- On resume: `flow_tool.py import --episode 03` (dry run) if the inbox was used, then `flow_tool.py status --episode 03 --fix`, then the validation team (panel-validator + prompt-smith + ref-sheet-artist for new sheets).
