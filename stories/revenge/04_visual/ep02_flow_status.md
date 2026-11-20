state: WAITING_FOR_IMAGES
round: 0
cards: 21 sheets (shared with EP01; 19 are the EP01 sheets, 2 are new), 60 panels
page: _workspace/04_visual/ep02_flow_handoff.html

## Notes
- EP01 images are not made yet either. The 21 reference sheets are shared by both episodes: make each once.
- New sheets for EP02: `MAO_TOLA_turnaround`, `RANY_turnaround`. Make them before the panels that attach them (Rany's face is in P03).
- Panels attach the sheets (max 3 each). Aspect 9:16 except 1:1 inserts (P02, P06, P11, P21, P23, P24, P37, P47). Dusk panels P44-P45 use light code L6b.
- Images must contain NO text. Khmer bubbles are added later by `km_tool.py build`; `km_tool.py check --episode 02` passes (43 panels with Khmer, 47 bubbles).
- Open: native-speaker check of P7, P33, P36, P46 Khmer; placement pass of sound words (P11, P21, P23, P43, P45, P46, P48) once images exist; viewer has no CSS for `playback`/`whisper` bubbles yet.
- On resume: `flow_tool.py import --episode 02` (dry run) if the inbox was used, then `flow_tool.py status --episode 02 --fix`, then the validation team.
