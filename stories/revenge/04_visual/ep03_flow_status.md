state: WAITING_FOR_IMAGES
round: 0
cards: 22 sheets (shared with EP01/EP02; 19 EP01 + MAO_TOLA, RANY from EP02 + PICH_turnaround new in EP03), 64 panels
page: _workspace/04_visual/ep03_flow_handoff.html

## Notes
- EP01 and EP02 images are not made yet either. The 22 reference sheets are shared by all three episodes: make each once.
- New sheet for EP03: `PICH_turnaround` (make it before panel_009). Coach Tola's `MAO_TOLA_turnaround` is needed for the court/equipment-room panels.
- Panels attach the sheets (max 3 each). Aspect 9:16 except 1:1 inserts P07, P13, P27, P30. P64 keeps a calm bottom band for the end caption.
- Images must contain NO text. Khmer bubbles are added later by `km_tool.py build`; `km_tool.py check --episode 03` passes (43 panels with Khmer, 53 bubbles).
- Open: native-speaker check of EP03 P09, P21, P31, P52, P54; tail directions for playback bubbles P28-29, P49-52, P62 need a placement pass once images exist; viewer has no CSS for `playback`/`whisper` bubbles yet.
- On resume: `flow_tool.py import --episode 03` (dry run) if the inbox was used, then `flow_tool.py status --episode 03 --fix`, then the validation team.
