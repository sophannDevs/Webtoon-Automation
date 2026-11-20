state: WAITING_FOR_IMAGES
round: 0
cards: 19 sheets, 60 panels
page: _workspace/04_visual/ep01_flow_handoff.html

## Notes
- Make the 19 reference sheets first, in card order (later cards attach earlier ones; each `_expressions` card attaches its own `_turnaround`). Start with `VISAL_turnaround`.
- Panels attach the sheets (max 3 each). Panels P49-P53 use LOC_STAIR. Aspect is 9:16 except 1:1 for the inserts P05, P12, P22, P44.
- Images must contain NO text (no letters, signs, screens, labels). Phones and the apology letter are drawn blank. The Khmer bubbles are added later by `km_tool.py build`; `km_tool.py check --episode 01` already passes (49 panels with Khmer, 63 bubbles).
- Open item: the viewer has no CSS for `playback` and `whisper` bubble types yet (they render as plain bubbles). Decide before release.
- On resume: `flow_tool.py import --episode 01` (dry run) if the inbox was used, then `flow_tool.py status --episode 01 --fix`, then the validation team (panel-validator + prompt-smith + ref-sheet-artist; C3 = text-free and art_space clear).
