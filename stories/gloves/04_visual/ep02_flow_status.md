state: WAITING_FOR_IMAGES
round: 0
cards: 13 sheets (10 from EP01 + 3 new for EP02), 56 panels
page: _workspace/04_visual/ep02_flow_handoff.html

Order of work (see `refs/ref_prompts.md` step 5 and the intro of `ep02_prompts.md`):
1. Reference cards first. The 10 EP01 cards (shared, not yet made), then the 3 new EP02 cards: HUGO_left_hand (required — no EP02 panel before it), MAID_ref (required), EP2_props (recommended).
2. Then the 56 panels, in order (later panels attach earlier ones as scene anchors: P01, P09, P33, P41 first in their scenes).
3. Save every image with the exact file name on its card (or drop downloads into `_workspace/_inbox/` and say "import the inbox").

Resume phrase: "images are ready" / "이미지 다 넣었어".
Cross-episode match cuts (FL5): P03 ↔ EP01 P45/P49, P11 ↔ EP01 P15, P47 ↔ EP01 P31. EP01 panels don't exist yet, so these prompts stand on their words. Once the EP01 panels exist, redo P03, P11 and P47 with the EP01 panel attached.
Hardest panels to check in Flow (details in `04_visual/ep02_shotlist.md` section 5): P03, P45, P47, P12/P19, P55–56, P35, P32, P30/P41/P49.
Khmer review: READY (round 1, AI reviewer; a human native speaker has not checked it yet). km_tool check --episode 02: OK.
