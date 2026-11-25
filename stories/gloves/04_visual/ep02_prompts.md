# Panel prompts for Google Flow (EP02, 「원하는 손만」)

- Written by prompt-smith, 2026-11-25. Flow-by-hand mode, Khmer edition. 56 panels, one block each.
- Built from: `00_input/brief.md` (EP02 locked points 1-8, rulings EA-EJ), `04_visual/ep02_shotlist.md` (the canon for every panel),
  `04_visual/style-bible.md` and `04_visual/character-sheets.md` (EP1 tokens plus "EP02 additions"), `04_visual/refs/ref_prompts.md`
  (reference cards 1-10 plus the EP2 cards `HUGO_left_hand`, `MAID_ref`, `EP2_props`) and `02_story/twist-plan.md` §1-2 (the wanting-hand grammar).
- The empty bubble areas follow the shot list's `bubble` suggestions; `ep02_lettering.md` gives the final `art_space` and places the Khmer.

## How to use these prompts

1. Make the reference cards first: EP01 cards 1-6 (and `LOC_BENCH`, `LOC_GREENHOUSE`), then `HUGO_left_hand`, `MAID_ref` and `EP2_props`
   (`refs/ref_prompts.md`). **Do not start EP02 panels before `HUGO_left_hand` is saved.** `MAID_ref` is needed before panel 33.
2. Keep the same Flow image model for all cards and all 56 panels (a new model changes the drawing style).
3. For each panel: attach the images listed in `attach:` (if Flow accepts reference images), set the ratio from `aspect:`, paste the whole
   `prompt:` text and generate. Make 2 versions (4 for panels 3, 9, 41, 39, 45 and 56) and keep the one that matches the reference cards best,
   not the prettiest one.
4. Save it with the exact file name in `output:`, or download into `_workspace/_inbox/` in panel order and say "import the inbox".
5. The pictures contain no text at all. The speech bubbles, the ending caption and the Khmer words are added later by the viewer, so every
   dialogue panel keeps one calm empty area, and the contract, the paper hand pattern, the box and the leather bundle are drawn blank;
   the knotted thread has knots but no scale marks.

## Order of work

- Reference cards first, then the panels scene by scene, each scene's anchor first: **panel 1** (deep night), **panel 9** (bench by day),
  **panel 33** (aisle in the afternoon) and **panel 41** (bench at dusk). Attach the finished anchor to the panels of its scene as the
  `attach:` lines say.
- `LOC_BENCH` is a night card. In day and dusk panels (9, 41) it is attached for the room's shape only; the light comes from the prompt.
- Make panel 3 after panel 1; panel 12 before panel 19; panel 14 before panel 20; panel 23 before panels 24-29; panel 30 before panel 49;
  **panel 47 before panels 52, 55 and 56** (the thread starts where his hand rests in panel 47).
- EP01 images do not exist yet. Panels 3, 5, 6, 11, 12, 16, 20, 30, 33, 47, 48 and 54 describe the EP01 composition they echo in words; their
  `note:` says which EP01 panel to attach too once it exists. If a finished EP01 panel later disagrees with panels 3, 11 or 47, redraw those
  panels with the EP01 panel attached first.

## Aspect ratios

- 9:16 tall (4 panels): 3, 39, 45, 56.
- 3:4 (7 panels): 1, 9, 12, 23, 33, 41, 52. If your Flow model has no 3:4, make all seven 1:1 (none of them becomes 9:16 in this episode).
- 16:9 wide (2 panels): 17, 30.
- 1:1 square: all the other 43 panels.

## Checking each result

- Panels with a `note:` line say what to check before you keep the image. The hardest are 3, 12, 19, 32, 35, 45, 47, 55 and 56.
- Every image: no letters or numbers anywhere; the lock of hair over HIS RIGHT brow; her tan work gloves at her LEFT hip (from panel 9);
  her knotted thread on her LEFT wrist until panel 51; his glove on his LEFT hand in panels 1-8, his bare hand is the LEFT one in panels 11-22,
  and both his hands are gloved from panel 23. If one of these is on the wrong side the image is mirrored: generate it again, do not flip it.
- Her mark is only the pad of her RIGHT index fingertip and never grows. His collar and cravat stay closed in every panel; the one neck strand
  appears only in panel 45, on the LEFT side of his neck. Crimson appears only in panel 28. Panels 41-56 keep the same warm dusk light.
- The empty bubble area must really be empty, and nobody may look young.

## Panels


### panel_001
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium close-up, eye level, from her right-front side; face above hands. Upper two-thirds: matching the attached references, Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), three-quarter facing right, looking up at his face: lips closed, eyes steady, the moment before a decision, faint flush still at her ear tips, not fleeing. Top-right edge: Hugo's jaw and closed ivory cravat. Lower third: their bare RIGHT hands parting, hers slipping out of his, his thumb sliding off her inner wrist, his veined fingers left open, white cuff. Bottom-left corner: her LEFT hand in a tan work glove, knotted linen thread round that wrist. Behind: at the old pale-oak potting bench in the conservatory's glass corner, darkness beyond the lamp. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. He does not grab her; faces apart. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_expressions.png, refs/PETRA_hands.png, refs/HUGO_hands.png, refs/LOC_BENCH.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_001.png
- note: Scene anchor for P02-P08: make it first and attach it to them. If EP01 panel_058 or panel_062 exists, attach it too (same moment, same colour).

### panel_002
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Over his LEFT shoulder (blurred coat collar at the right foreground edge), at the height of her raised finger, shallow focus. Centre, sharp: her bare RIGHT index finger held up between their faces, pad toward the camera: the palm-side pad of her RIGHT index fingertip (the hand without the thread) matte ash-grey with hair-thin black veins to, never past, the first knuckle crease; other fingers folded loosely. Behind, blurred, near-frontal: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), calm, a quiet dare. Blue-green darkness beyond the lamp. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. No blood, no wound, not a rude gesture, no other finger marked. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_hands.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_001.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_002.png

### panel_003
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Tall vertical full-bleed from her right-front side at chest height, three-quarter. Top 30%: Hugo (one lock over his right brow, ivory cravat closed to the jaw), looking down at her, very still, breath held. Middle: Petra (straight dark brows, honey-brown low bun, ear visible). Bottom 35%: his bare veined RIGHT forearm from the right edge, white cuff, palm up, still; only the pad of her RIGHT index fingertip resting on the clean pulse spot of his bare right inner wrist, her other fingers curled loosely in the air, not touching his cuff, no clamp-like grip; her face lifted to his, open, lips slightly parted, a faint flush at the tips of her ears; the knotted thread still wound round her LEFT wrist above her glove. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. Nothing glows. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_expressions.png, refs/HUGO_hands.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_001.png
- aspect: 9:16
- output: _workspace/05_panels/ep02/panel_003.png
- note: Hardest panel; make 4 versions. If EP01 panel_045 or panel_049 exists, attach it too (hand geometry: his forearm from the right edge palm up, her index in side view). Redraw if she looks down at her fingertip, her thumb touches his cuff, the thread is on his wrist, or the image is warmer than panel_002.

### panel_004
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of the two hands, slightly high, the same hand geometry as the attached panel: his bare veined RIGHT wrist from the right, palm up; her RIGHT index fingertip still on his pulse, other fingers in the air. His wrist and her other fingers stay clean. Top right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), nose to cravat, head bowed to the hands, lips about to open. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. Keep the upper left (from the left edge to about 55% across, the top fifth), the blue-green darkness beyond the lamp and faint moonlit glass as calm, empty background with no important details (a speech bubble will be added there later). His nose, mouth and chin stay to the right of it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_003.png, refs/HUGO_hands.png, refs/PETRA_hands.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_004.png

### panel_005
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. High angle over the bench top, her hands only. Centre, beside the lamp: the folded blank sheet of pale parchment from the night before, softly creased in quarters, with two wax seals side by side, amber-brown thimble-pitted wax on the left and black rose-stamped wax on its right, nothing written on it. Lower left: a canvas tool roll just untied, leather strap hanging. Her bare RIGHT hand smooths the parchment; her tan-gloved LEFT hand, thread above the cuff, holds the roll. Upper right edge: the lamp chimney. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. Keep the upper left third, the blue-green darkness past the far end of the bench as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/EP2_props.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_001.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_005.png
- note: If EP01 panel_028 exists, attach it too (shape and order of the two seals).

### panel_006
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Near top-down close-up. Lower two-thirds: a blank sheet of pale parchment, softly creased in quarters, with three wax seals in a row: amber-brown thimble-pitted wax, black rose-stamped wax, and right beside the rose a second, fresh, still-glossy amber-brown thimble-pitted seal; nothing written on it. The brass thimble on her RIGHT middle finger, its cord hanging from her hand, presses the new seal; marked index beside it. Her tan-gloved LEFT hand holds the left edge. Upper right: the lamp chimney base, a wax stick beside it. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. Keep the upper left to centre (from the left edge to about 50% across, the top fifth), the plain dark oak bench top beyond the parchment as calm, empty background with no important details (a speech bubble will be added there later). Seals and thimble stay in the lower two-thirds. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/EP2_props.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_005.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_006.png
- note: If EP01 panel_028 exists, attach it first (same height and crop; two seals become three). Check: dots and one rose in the wax, no letters; one thimble only, none at her neck.

### panel_007
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot from his shoulder height. Centre-right: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins), eyes lowered to her marked fingertip at lower left: fear, but asking, not commanding. Bottom edge: the blank three-seal parchment and her bare RIGHT hand from the left; his black-gloved LEFT hand stopped near the parchment corner, not touching it. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. Keep the upper left (from the left edge to about 58% across, the top fifth), blue-green darkness and faint moonlit glass as calm, empty background with no important details (a speech bubble will be added there later). The top of his head stays below it, about 30% down. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_expressions.png, refs/HUGO_turnaround.png, _workspace/05_panels/ep02/panel_001.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_007.png

### panel_008
- scene_group: A
- scene_id: S1 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot from the waist up, eye level, the bench corner between them. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), chin lifted, looking up into his eyes, no smile; her bare RIGHT hand hanging the thimble cord back at her collarbone; LEFT hand gloved. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), taller, looking down, a dry half-smile at one corner, conceding; his gloved LEFT hand withdrawing from the parchment. Deep night: the single amber lamp plus soft silver-green moonlight from the dome above, warm and cool light meeting on the two figures. Keep the upper left (from the left edge to about 47% across, the top fifth), the blue-green darkness above her head as calm, empty background with no important details (a speech bubble will be added there later). Her head stays below it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_expressions.png, refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_001.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_008.png

### panel_009
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Side wide shot at eye level: a conservatory side bay where two glass walls meet at an angle: an old pale-oak potting bench against a low brick wall, terracotta pots, grey-brown gardener's gloves on a nail, one brass oil lamp; a white rose stem on the iron frame at middle right. Left, on a stool: Petra (straight dark brows, honey-brown bun, earth-brown dress, apron), bare-handed, unrolling her tool roll; tan gloves at her LEFT hip; thread on her LEFT wrist. Right: Hugo (lock over his right brow, cravat closed), sitting down opposite, both hands black-gloved, gently worried. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the top 30%, green-lit emerald glass and iron ribs out of focus as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, refs/HUGO_turnaround.png, refs/LOC_BENCH.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_009.png
- note: Use the LOC_BENCH card for geometry only; it is daytime. Scene anchor for P10-P32 (make 4 versions; attach the chosen one to them). If EP01 panel_029 exists, attach it too for the bench geometry. No lit lamp, no moonlight.

### panel_010
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. High angle close-up. Centre-right: his LEFT hand in a plain black kid glove resting on the scrubbed oak bench, back up, white cuff, midnight-blue sleeve, fingers slightly curled, hesitant. Lower-left foreground: her bare RIGHT hand waiting at the frame edge, palm slightly up, the ash-grey pad of her RIGHT index fingertip small. Top-right edge: his coat skirt, blurred. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left third, the plain oak bench top beyond and the blurred green glass as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_009.png, refs/HUGO_hands.png, refs/PETRA_hands.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_010.png

### panel_011
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up from the chest up, eye level, face slightly right of centre. Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins); eyes lowered to his own hands. Lower third, at chest height: his gloved RIGHT hand pinching the fingertips of the black glove on his LEFT hand one by one, drawing it off; nearly ink-black, dark-veined left fingertips starting to show, the back of the hand still covered. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left (from the left edge to about 49% across, the top fifth), soft green-lit emerald glass and iron ribs out of focus as calm, empty background with no important details (a speech bubble will be added there later). His face stays right of it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_009.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_011.png
- note: If EP01 panel_015 exists, attach it too (same crop and hand height) but mirror the hands: his gloved RIGHT hand pulls the glove off his LEFT hand.

### panel_012
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. From his side just above bench height, deep focus. Lower-right foreground, large: the back of his bare LEFT hand with matte ink-black root-like veins under pale skin, visibly darker and denser than his right hand, fingertips nearly ink-black, one thick root running from the ring and little-finger knuckles diagonally to the thumb side of the wrist; the roots stay thick at the wrist and two or three of them cross it and disappear under the white shirt cuff; the cuff stays down, the forearm is never shown; never runes or tattoos, not glowing; fingers slightly spread on the bench. Middle-left background, across the bench: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), leaning slightly, an appraising craftswoman's look measuring his hand, curiosity stronger than fear. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. No grey skin. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/HUGO_hands.png, _workspace/05_panels/ep02/panel_009.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_012.png
- note: Clue 3. The veins must look clearly darker and denser than the right hand on the HUGO_hands card; landmark root from the ring/little-finger knuckles to the thumb side; roots go under the cuff; no forearm. If EP01 panel_016 exists, attach it for the deep-focus layout.

### panel_013
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot, seated eye level. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), top of head about 32% down, leaning over his hand; her bare RIGHT hand stops one finger-joint above it, not touching. Lower centre: his bare LEFT hand, veins darker and denser than his right hand's, back up. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), top of head about 31% down, eyes on her hand. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the top band (from the left edge to about 74% across, down to about 30%), green-lit glass above each of them, hers higher as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_009.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_013.png

### panel_014
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of two hands on the bench, slightly high. Lower two-thirds: his bare LEFT hand with matte ink-black root-like veins, darker and denser than his right hand, fingertips nearly ink-black, thick roots crossing the wrist under the white cuff, forearm never shown, not glowing, palm up, no clean pulse spot; her bare RIGHT hand from the left stops above his palm: a clear one-finger-joint gap between them. Upper right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), eyes to chin, looking at her face off-frame left, asking, restraint and longing. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left third, soft green-lit emerald glass out of focus as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_013.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_014.png
- note: The gap must stay visible. Attach the chosen panel_014 to panel_020.

### panel_015
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of hands, slightly high. Lower two-thirds: her bare RIGHT hand slid under his bare LEFT hand with matte ink-black root-like veins, darker and denser than his right hand, fingertips nearly ink-black, thick roots crossing the wrist under the white cuff, forearm never shown, not glowing: her palm up, the back of his hand on it, his palm up; her five fingers clean warm skin, only the ash-grey pad of her RIGHT index fingertip marked. Upper left: her lower face and ear, eyes resting on his hand, lips softly parted, faint flush at her ear tips. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. No warmth added. Keep the upper right third, soft green-lit glass and iron ribs out of focus as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/PETRA_expressions.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_014.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_015.png
- note: Check whose hand is under (hers), no grey on her other fingers, no glow, no interlaced fingers.

### panel_016
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. High angle close-up. Centre: her bare fingers from the left straightening his bare LEFT fingers one by one (his bare LEFT hand with matte ink-black root-like veins, darker and denser than his right hand, fingertips nearly ink-black, thick roots crossing the wrist under the white cuff, forearm never shown, not glowing, palm up). One length of knotted linen thread unwound from her LEFT wrist lies loosely along his fingers, not tied, not pinned, no scale marks; her RIGHT index slightly lifted. Top-left edge: part of her face, eyes resting on his hand longer than needed. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper right, the blurred green-lit glass beyond the bench as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_015.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_016.png
- note: If EP01 panel_030 exists, attach it for height and layout (his hand is now the LEFT one).

### panel_017
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Horizontal extreme close-up over his open palm: his bare LEFT hand with matte ink-black root-like veins, darker and denser than his right hand, fingertips nearly ink-black, thick roots crossing the wrist under the white cuff, forearm never shown, not glowing, palm up, centre to right. Her five bare fingers pass over it from the left, tracing the lines of his palm; a loose length of knotted linen thread lies across it. All her fingers warm skin, only the ash-grey pad of her RIGHT index fingertip marked. Edges: blurred oak bench. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. No sparkle. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_016.png
- aspect: 16:9
- output: _workspace/05_panels/ep02/panel_017.png

### panel_018
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of his face in three-quarter, centre-right: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins); eyes lowered to her marked fingertip on his palm, quiet guilt. Bottom edge: his bare dark-veined LEFT palm, her bare RIGHT hand on it from the left, the ash-grey pad of her RIGHT index fingertip visible, counting knots on the thread; her face off-frame. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the left side, upper and middle, the blurred green-lit glass as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/HUGO_expressions.png, refs/PETRA_hands.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_018.png

### panel_019
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. High angle over plain brown paper on the bench. Centre and bottom: his bare LEFT hand with matte ink-black root-like veins, darker and denser than his right hand, fingertips nearly ink-black, thick roots crossing the wrist under the white cuff, forearm never shown, not glowing, lying flat palm down on the paper; her bare RIGHT hand from the left tracing a chalk line around his fingers, the line nearly reaching his wrist; only that outline on the paper. Upper right, in focus: his black-gloved RIGHT hand tugging his left white shirt cuff down over the wrist roots. Her face out of frame. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left third, the plain oak bench and blurred green glass beyond the paper as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/EP2_props.png, _workspace/05_panels/ep02/panel_012.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_019.png
- note: Same vein pattern as panel_012. Check: three hands read clearly (his bare left on the paper, his gloved right at the cuff, her bare right with chalk); no forearm; no marks or measurements on the paper.

### panel_020
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up, slightly high, above the bench. Centre: his bare LEFT hand with matte ink-black root-like veins, darker and denser than his right hand, fingertips nearly ink-black, thick roots crossing the wrist under the white cuff, forearm never shown, not glowing, palm up and open, coming slowly from the right and stopping one finger-joint before her RIGHT index fingertip. Her bare RIGHT hand from the left, fingers open, the ash-grey pad of her RIGHT index fingertip turned toward him. A clear one-finger-joint gap; nothing touches; his hand open, not grasping. Bottom: the edge of the brown paper with a chalk hand outline. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper right third, the blurred green-lit glass toward his sleeve as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_014.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_020.png
- note: Same one-joint gap as panel_014. If EP01 panel_053 exists, attach it for reference (his open palm stopped short).

### panel_021
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium close-up, eye level. Centre-left: Petra (adult woman, 25; straight dark brows, squared jaw, amber-brown eyes, honey-brown low bun, ear visible; earth-brown dress, canvas apron, thimble at her collarbone), top of head about 30% down, looking straight at his face off-frame right: refusing without coldness, lips closed but jaw relaxed, eyes steady, not looking away, not hurt, not angry. Lower centre: her RIGHT hand lightly curled, the marked index tucked inside, hidden. Lower-right edge: his bare ink-dark LEFT fingertips, still stopped a finger-joint away. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left third, the blurred green-lit glass above her head as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_expressions.png, refs/PETRA_turnaround.png, refs/HUGO_left_hand.png, _workspace/05_panels/ep02/panel_020.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_021.png

### panel_022
- scene_group: A
- scene_id: S2 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot of his upper body, seated eye level. Centre-right: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins), top of head about 25% down, eyes on the glove: not hurt, a quiet accepting calm, the faintest lift at one corner of his mouth. Lower centre: his gloved RIGHT hand drawing the plain black kid glove back onto his LEFT hand, tugging the cuff up over the wrist; the left fingers already inside. Left edge: Petra's shoulder and cheek, blurred, facing him. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_009.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_022.png

### panel_023
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. High three-quarter wide. Lower centre: an old plain unmarked wooden box, lid open, holding about ten pairs of black kid gloves piled in layers, each pair slightly different in leather grain, cut and cuff shape; every fingertip charred matte black-grey and split like dry bark; no smoke. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), gloved, drawing back. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), leaning forward, curious. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the whole top quarter (from the left edge to about 76% across), green-lit glass and iron ribs as calm, empty background with no important details (a speech bubble will be added there later). Both heads and the box stay below it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/EP2_props.png, refs/PETRA_turnaround.png, refs/HUGO_turnaround.png, _workspace/05_panels/ep02/panel_009.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_023.png
- note: Box anchor for P24-P27. Check: the gloves differ pair to pair; no labels, brands, crimson or smoke.

### panel_024
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of a glove in her hands. Lower two-thirds: her two bare hands hold one black kid glove from the box, its split index fingertip clumsily darned with black thread: uneven, crooked stitches pulled too tight, the leather puckered; the ash-grey pad of her RIGHT index fingertip small. Upper left and centre: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), brows to mouth, one eyebrow raised, a craftsman's near-contempt for the clumsy repair, dry. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper right (about 54-86% across, the top quarter), the blurred green-lit glass and iron ribs as calm, empty background with no important details (a speech bubble will be added there later). Her face stays to the left of it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/EP2_props.png, refs/PETRA_expressions.png, _workspace/05_panels/ep02/panel_023.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_024.png

### panel_025
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of his face in three-quarter, centre-right, top of head about 32% down: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins); a faintly embarrassed dry half-smile, eyes on the repaired glove at lower left. Lower-left edge: the glove in her hand with crooked black stitches. Lower-right edge: his black-gloved fingertips rubbing together slightly. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left (from the left edge to about 53% across, the top fifth), blurred green-lit glass and iron ribs as calm, empty background with no important details (a speech bubble will be added there later). His head and face stay below and right of it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_expressions.png, refs/HUGO_turnaround.png, _workspace/05_panels/ep02/panel_023.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_025.png

### panel_026
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot across the bench, medium. Centre: her bare thumbs turning back the split fingertip of a burnt black glove to check the leather. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), top of head about 32% down, eyes on the glove. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), top of head about 30% down, both hands gloved, eyes on her hands. Lower right: the box edge. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the top band (from the left edge to about 78% across, down to about 29%), soft green-lit glass above each of them, hers higher as calm, empty background with no important details (a speech bubble will be added there later). Both heads stay below it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_023.png, refs/PETRA_turnaround.png, refs/HUGO_turnaround.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_026.png

### panel_027
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot on her side. Left to centre: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), chin up, a craftswoman naming her price, confident; her bare hand closing the plain lid on the box as a failed glove drops inside. Right edge: Hugo in profile facing left, lock over his right brow, cravat closed, a dry half-smile at one corner. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left (to about 41% across, the top fifth), green-lit glass above her, and the upper right above his profile (about 56-85% across, down to about 27%) as calm, empty background with no important details (a speech bubble will be added there later). Both heads stay below. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_expressions.png, refs/HUGO_turnaround.png, _workspace/05_panels/ep02/panel_023.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_027.png

### panel_028
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of her hand and apron pocket; Hugo not in the picture. Centre: her bare RIGHT hand pushing a flat narrow cuff band of black kid leather with a continuous border of deep crimson silk cross-stitch, one finger-joint wide, reading as a decorative band, not separate crosses, not letters, into the pocket of her canvas apron, half of it already inside. Lower left: the edge of her unrolled tool roll with a black spool. Top: her lower face, nose to chin, a brief flicker of hurt, then a set face. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. The crimson has a soft silk sheen, never like blood; no other crimson. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_023.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_028.png
- note: The only crimson of the episode. If EP01 panel_029 exists, attach it too (the same band).

### panel_029
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot over the bench. Lower centre: her two bare hands starting black silk cross-stitch, with a faint sheen, along a flat narrow cuff band of matte black kid leather; a few stitches done, reading as a band. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), head bowed to her work. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), both hands gloved, eyes on her hands. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper right (higher) and upper left (lower), soft green-lit glass and iron ribs as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/EP2_props.png, _workspace/05_panels/ep02/panel_009.png, _workspace/05_panels/ep02/panel_023.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_029.png

### panel_030
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Horizontal close-up insert. Left of 55% across: her bare hands: her RIGHT thumb, index and middle finger pinch the thread tail into one small loop; her LEFT hand, knotted thread on the wrist, holds a flat narrow cuff band of matte black kid leather with a continuous border of black silk cross-stitch with a faint silk sheen, one finger-joint wide, reading as a band, not separate crosses, not letters; the ash-grey pad of her RIGHT index fingertip small; a black spool beside. Lower-right edge: his black-gloved fingertips just entering. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper right (about 55-87% across, the top 40%), the out-of-focus pale oak bench and green-lit glass as calm, empty background with no important details (a speech bubble will be added there later). Hands, band and spool stay left of it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/EP2_props.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_029.png
- aspect: 16:9
- output: _workspace/05_panels/ep02/panel_030.png
- note: If EP01 panel_009 exists, attach it first for the framing, with black thread instead of crimson. Passes on the three-finger pinch even if the loop is small.

### panel_031
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot of her in three-quarter, head bowed, cutting the black thread with small shears at chest height, the finished band in her other hand. Petra (adult woman, 25; straight dark brows, squared jaw, amber-brown eyes, honey-brown low bun, ear visible; earth-brown dress, canvas apron, thimble at her collarbone), calm, not looking up. Right edge: Hugo's shoulder and part of his profile, eyes lingering on her hands a beat longer, faintly admiring. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left third, the blurred green-lit glass above her head as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_029.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_031.png

### panel_032
- scene_group: B
- scene_id: S3 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. His upper body in three-quarter from his left-front, seated eye level. Centre-right: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins), facing left, chin slightly drawn in, his black-gloved LEFT hand pressing flat on the edge of his ivory cravat at the LEFT side of his neck, nearest the camera; collar closed. Middle left: her bare RIGHT hand entering from the left edge, empty, stopped a hand-span before his collar, not touching. Day: soft green-tinted daylight filtered through the emerald conservatory glass, calm and even, the brass lamp unlit, gentle shadows, warm natural skin tones. Keep the upper left (wide, higher) and upper right beside his head (lower), blurred green-lit glass as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_turnaround.png, refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_009.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_032.png
- note: Clue 4. Check: the hand at the collar is his LEFT, on the left side of his neck; collar and cravat closed, no strand visible; her hand does not touch.

### panel_033
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Low angle from behind her, deep one-point perspective toward the entrance: the conservatory aisle: black iron ribs and emerald glass overhead, ivory-white rose beds on both sides, a stride-wide path of matte black ash down the pale limestone. Lower centre: Petra from behind, walking down the ash path: honey-brown low bun, earth-brown dress, apron strings, tan gloves at her LEFT hip. Far away in the upper third, small: staff on a white marble band at the entrance, the glove maid in front, the steward behind her, turning their heads to each other and whispering, surprised and curious rather than afraid, all staying behind the white marble band. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, refs/MAID_ref.png, refs/LOC_GREENHOUSE.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_033.png
- note: Scene anchor for P34-P40; attach the chosen one to them. If EP01 panel_014 exists, attach it for the place (EP01 looked the other way, toward the dome).

### panel_034
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot, eye level, the white marble band on the floor between them. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), businesslike. Right, on the band, a little shorter: the glove maid (adult woman, mid-20s; round freckled face, softly arched pale auburn brows, auburn wisps under a white mob cap; bottle-green uniform, white apron); a folded bundle of black kid leather tied with plain string carried across both forearms, not gripped; shy, eyes lowered. Behind her, small: the stooped white-haired steward in a black tailcoat. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. Keep the upper left third, the green shade of the glass roof between the sunbeams as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/MAID_ref.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_033.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_034.png
- note: Check that the maid does not look like Petra (arched pale auburn brows, round face, cap) and holds the bundle on her forearms.

### panel_035
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up over the black leather bundle. From the left: Petra's bare RIGHT hand taking it from below, palm up, the palm-side pad of her RIGHT index fingertip (the hand without the thread) matte ash-grey with hair-thin black veins to, never past, the first knuckle crease, turned up toward the maid and the camera. From the right: the glove maid's bare RIGHT hand slipping out from under the bundle, the pads of her index and middle fingertips matte ash-grey, the same grey. The bundle lies between them; the two hands do not touch. Upper right: the maid's eyes and white cap edge, caught on Petra's fingertip, quiet recognition and worry. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. No blood. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/MAID_ref.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_034.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_035.png
- note: Hard panel. Check whose hand is whose (Petra's from the left, thread on her LEFT wrist if visible; the maid's from the right, white cuff), both greys identical and matte, no other finger grey, no touch.

### panel_036
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium close-up of the maid, eye level. Centre-right: the glove maid (adult woman, mid-20s; round freckled face, softly arched pale auburn brows, auburn wisps under a white mob cap; bottle-green uniform, white apron), looking toward Petra at the left: worried and earnest, lifting her ash-grey RIGHT index and middle fingertips a little toward her chest, quick to defend the count, no resentment. Left edge: Petra's shoulder, blurred. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. Keep the upper left (from the left edge to about 49% across, the top fifth), the soft green shade of the glass roof between the sunbeams as calm, empty background with no important details (a speech bubble will be added there later). The maid's face stays below and right of it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/MAID_ref.png, _workspace/05_panels/ep02/panel_034.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_036.png

### panel_037
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Over Petra's RIGHT shoulder. Left foreground edge: her shoulder and cheek, blurred, gaze fixed on the maid's fingertips. Lower third, centre to right, in focus: the glove maid's RIGHT hand, the palm-side pads of her index and middle fingertips matte ash-grey, clearly visible. Centre to upper right, slightly soft: the glove maid (adult woman, mid-20s; round freckled face, softly arched pale auburn brows, auburn wisps under a white mob cap; bottle-green uniform, white apron), worried, earnest. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. Keep the upper centre to right, the soft green shade of the glass roof above the maid's head as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/MAID_ref.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_036.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_037.png

### panel_038
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot of Petra, eye level. Centre-left: Petra (adult woman, 25; straight dark brows, squared jaw, amber-brown eyes, honey-brown low bun, ear visible; earth-brown dress, canvas apron, thimble at her collarbone), top of head about 30% down, shifting the black leather bundle onto her LEFT arm and tucking her RIGHT hand into the bundle, hiding the fingertip; looking straight at the maid: a craftswoman's promise, soft eyes. Right edge: the maid's shoulder and profile in bottle-green, blurred. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. Keep the upper left (from the left edge to about 53% across, the top fifth), the soft green shade of the glass roof and iron ribs as calm, empty background with no important details (a speech bubble will be added there later). Her head stays below it. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_034.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_038.png

### panel_039
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Tall vertical full-bleed from the dome end looking back toward the entrance: the conservatory aisle: black iron ribs and emerald glass overhead, ivory-white rose beds on both sides, a stride-wide path of matte black ash down the pale limestone. Top 25%: far away on the white marble band, the staff, small, turning their heads; the glove maid in front, head bowed, looking at her own fingertips. Middle: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron) walking toward the camera down the ash path through the sunbeams, tan gloves at her LEFT hip, the leather bundle in her left arm. Bottom foreground: Hugo's black boots and midnight-blue coat skirts only. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_033.png, refs/PETRA_turnaround.png, refs/MAID_ref.png, refs/HUGO_turnaround.png
- aspect: 9:16
- output: _workspace/05_panels/ep02/panel_039.png
- note: Make 4 versions. Camera faces the opposite way from panel_033. No staff past the marble band; no Hugo face.

### panel_040
- scene_group: B
- scene_id: S4 / location: LOC_GREENHOUSE
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot under the glass dome, eye level. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), both black-gloved hands taking only the leather bundle, not touching her; at ease, a faint real smile. Left to centre: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), already walking past him, brushing off her empty hands, face half turned to him, ear tips a little flushed. Afternoon: slanting golden sunlight through the emerald glass in long diagonal shafts across the aisle, warm gold on the white roses and the pale limestone, the lamps unlit, soft green shade between the beams. Keep the upper right (higher) and upper left (lower), the dome glass in soft shade between the sunbeams as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_expressions.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_033.png, _workspace/05_panels/ep02/panel_039.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_040.png

### panel_041
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Side wide shot of the conservatory bench corner: brick wall, terracotta pots, the brass lamp at centre. On the bench: brown paper with a chalk hand outline, a tied leather bundle, the finished black cross-stitched cuff band. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), rising, unwinding knotted thread from her LEFT wrist, quietly satisfied. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), rising, both hands gloved. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper left, the deep blue glass beyond the lamp's pool as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, refs/HUGO_turnaround.png, refs/EP2_props.png, refs/LOC_BENCH.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_041.png
- note: Scene anchor for P42-P56 (make 4 versions). Use the LOC_BENCH card for geometry only; it is dusk, not night. If EP01 panel_029 exists, attach it for geometry. The band stitches must show at least as texture.

### panel_042
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot, standing, eye level. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), the knotted thread in her bare hands, which stop one finger-joint before his sleeve, not touching; a steady look. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), holding his gloved LEFT arm out a little toward her, asking; their eyes meet. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper right (higher) and upper left (lower), the deep blue dusk glass above each of them as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_041.png, refs/HUGO_expressions.png, refs/PETRA_turnaround.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_042.png

### panel_043
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. From her side, his LEFT side in three-quarter, facing left. Right to centre: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), his LEFT arm raised to shoulder height, reaching forward toward her (gloved hand toward the left edge); he looks at his own raised gloved hand, unaware. Left, under his arm: Petra, her eyes at his jaw height, laying the knotted thread over his coat sleeve from the shoulder seam to the glove cuff; absorbed, open, counting knots. Top-right edge: the raised arm shifts his collar point and cravat slightly aside at the left of his neck; collar closed, nothing on his neck. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_041.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_043.png
- note: Use the HUGO_left_hand card only for the raised-arm pose; draw no strand here. Check: the raised arm is his LEFT, toward her; the thread is on the sleeve, over the cloth.

### panel_044
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of her face, eye level. Centre-left: Petra (adult woman, 25; straight dark brows, squared jaw, amber-brown eyes, honey-brown low bun, ear visible; earth-brown dress, canvas apron, thimble at her collarbone), three-quarter facing upper right: her eyes stopped mid-count, lifting from his sleeve toward his neck, fingers frozen on a knot. Bottom edge, small: her fingers on the knotted thread on his dark coat sleeve. Upper-right edge: his blurred jaw line and cravat edge, out of focus, nothing visible on the skin. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. No open mouth, no fear. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_expressions.png, refs/PETRA_turnaround.png, _workspace/05_panels/ep02/panel_043.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_044.png

### panel_045
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Tall vertical close-up at her eye level on his neck. Top: his left profile turned to his raised gloved hand (image left), unaware. Middle: on the LEFT side of his neck, below his left earlobe, just above the ivory cravat edge where the raised arm has shifted the collar point and cravat aside a finger-joint: one single hair-thin matte ink-black strand creeping up from under the cravat like a root tip, slightly curved, forking once at its tip, the tip half a finger-joint above the edge; flat, not glowing; clean pale skin above it and on his jaw; never writing, runes or a pattern. Bottom: his raised left sleeve across the frame, her thread on it. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. The collar stays closed: no open collar, no unbuttoned shirt, no bare collarbone or chest, only one strand on the neck. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_left_hand.png, refs/HUGO_turnaround.png, _workspace/05_panels/ep02/panel_043.png
- aspect: 9:16
- output: _workspace/05_panels/ep02/panel_045.png
- note: The twist; make 4 versions. Check: exactly ONE hair-thin strand, forking once, on the LEFT side of his neck (the visible ear is his left ear), half a finger-joint above the cravat edge; collar, cravat and shirt closed; face and jaw clean; matte, not glowing; the light is the same warm dusk, not colder.

### panel_046
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Two-shot, standing, eye level. Left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), the thread in her hands, eyes fixed on his neck, steady, asking as a measurement, no tears. Right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), slowly lowering his gloved LEFT arm to waist height, the cravat back in place and his neck covered again; he looks at her, not away. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper left third, the deep blue dusk glass above her head beyond the lamp's pool as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_041.png, _workspace/05_panels/ep02/panel_042.png, refs/PETRA_turnaround.png, refs/HUGO_turnaround.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_046.png

### panel_047
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot of his upper body, eye level, centre-right, top of head about 30% down: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw). His gloved LEFT hand rests flat on his chest just below the left collarbone, over the coat, image right: fingers together, wrist relaxed, not gripping; right hand gloved at his side. Eyes on her face off-frame left: a plain truth, no self-pity, no pain. Lower left: her bare RIGHT hand holding the knotted thread. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper left third, the deep blue dusk glass beyond the lamp as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_turnaround.png, refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_041.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_047.png
- note: Match cut. If EP01 panel_031 exists, attach it first: same framing and the same gloved left hand position; change the light to dusk, his right hand gloved, his eyes on her face. Check: hand flat below the left collarbone, not clutching, not at the centre of the chest. Attach the chosen panel_047 to panel_052, panel_055 and panel_056.

### panel_048
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Over her RIGHT shoulder toward him, eye level. Left foreground, below 30% down: Petra's right shoulder, bun and part of her profile, brows drawn, mouth set, certainty cracking. Centre-right: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), top of head about 32% down, calm, gloved LEFT hand still on his chest, gloved RIGHT hand at his side. Lower left, small: the black band on the bench. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the top band (from the left edge to about 72% across, down to about 30%), the deep blue dusk glass, higher above her as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_047.png, refs/PETRA_turnaround.png, refs/HUGO_turnaround.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_048.png
- note: If EP01 panel_048 exists, attach it for the over-the-shoulder angle.

### panel_049
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Insert close-up of her hand and the band on the bench, the same height and angle as the attached panel_030. Centre: her bare RIGHT hand picking up the finished black cuff band, its black silk cross-stitch showing as a band with a faint sheen, half lifted, the ash-grey pad of her RIGHT index fingertip visible on it, fingers tightening but not crumpling it. Around: the bench in the lamp's pool, the edge of the brown paper and tool roll, deep blue shade at the edges. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. The band is all black; no tears. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_030.png, refs/EP2_props.png, refs/PETRA_hands.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_049.png
- note: The stitches must show at least as texture.

### panel_050
- scene_group: C
- scene_id: S5 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium close-up of his face and shoulders, centre-right, top of head about 30% down: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins); lowering his gloved LEFT hand from his chest; eyes down-left on her hand holding the band; a plain truth with a dry half-smile to lighten it, asking nothing. Lower-left edge: her bare RIGHT hand holding the black band. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper left (from the left edge to about 56% across, the top fifth), deep blue dusk glass beyond the lamp as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_047.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_050.png

### panel_051
- scene_group: C
- scene_id: S6 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Medium shot of her upper body, eye level. Centre-left: Petra (adult woman, 25; straight dark brows, squared jaw, honey-brown low bun; earth-brown dress, canvas apron), three-quarter facing right, looking up at his face: steady resolve, jaw firm, a held breath. Lower centre: her bare hands unwinding the last turn of the knotted thread from her LEFT wrist, the whole thread hanging long between her hands, her left wrist bare for the first time; no scale marks. Right edge, small: his gloved LEFT hand still near his chest. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper left third, the deep blue dusk glass above her head as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/PETRA_turnaround.png, refs/PETRA_hands.png, _workspace/05_panels/ep02/panel_041.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_051.png

### panel_052
- scene_group: C
- scene_id: S6 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close two-shot on his chest at her eye level; his face cropped just below the mouth. Upper right: his jaw, closed ivory cravat, shoulder. Centre-left: her bowed head, honey-brown bun, ear, lowered eyes, absorbed, at his cravat height. Centre to bottom, in focus, on his midnight-blue coat: her bare RIGHT thumb and index pin the first knot just below his left collarbone while her LEFT hand draws the thread laid over his coat from just below his left collarbone, where his hand had rested, slanting down and inward to the left side of his chest at heart height, about a hand-span long. His gloved hands hang at his sides, below the frame. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. No open coat, no embrace. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_047.png, refs/PETRA_turnaround.png, refs/HUGO_turnaround.png, _workspace/05_panels/ep02/panel_041.png
- aspect: 3:4 (if Flow has no 3:4, use 1:1)
- output: _workspace/05_panels/ep02/panel_052.png
- note: Check: the thread starts where his hand rested in panel_047 and runs down his LEFT chest; everything over the coat; his mouth is cropped; no scale marks.

### panel_053
- scene_group: C
- scene_id: S6 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. High angle close-up, from her eye line looking down. A diagonal from upper right to lower centre: pale knotted linen thread with small even knots, no scale marks, lying across his dark midnight-blue coat. Her bare RIGHT thumb and index walk down it knot by knot, halfway now, the ash-grey pad of her RIGHT index fingertip touching a knot. Edges: a closed coat button and the waistcoat edge. Not pressing the coat. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_052.png, refs/PETRA_hands.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_053.png

### panel_054
- scene_group: C
- scene_id: S6 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up of his face, slightly low from her eye line, no extreme angle; centre-right, top of head about 20% down: Hugo (adult man, about 30; blue-black hair, one lock over his right brow, heavy-lidded pale green eyes; midnight-blue coat, collar and ivory cravat closed to the jaw, no neck veins). Head slightly bowed, looking down at her hand on his chest below the frame; holding his breath, a swallow visible at the jaw line above the cravat; restraint, fear, stillness, no pain. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/HUGO_expressions.png, _workspace/05_panels/ep02/panel_047.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_054.png
- note: If EP01 panel_018 exists, attach it for face size and angle; his eyes look down here.

### panel_055
- scene_group: C
- scene_id: S6 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Close-up from below her wrist, looking up along her hand toward his chin. Centre-right, in focus: her bare RIGHT thumb and index stopped on one knot at heart height on his LEFT chest, over the coat, the ash-grey pad of her RIGHT index fingertip on the knot; the thread runs up-right to below his left collarbone. Left edge: his black-gloved RIGHT hand moved slightly and stopped a hand-span beside her wrist, not touching. Top: his chin and cravat, blurred, lips just parting. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the upper left corner, the deep blue dusk glass past his right shoulder as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_047.png, _workspace/05_panels/ep02/panel_053.png, refs/PETRA_hands.png
- aspect: 1:1
- output: _workspace/05_panels/ep02/panel_055.png
- note: Check: the thread is on his LEFT chest (image right), from below the collarbone to heart height; his glove does not touch her.

### panel_056
- scene_group: C
- scene_id: S6 / location: LOC_BENCH
- prompt: "Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style: clean fine dark-brown lineart, soft cel shading blended with subtle painterly gradients, rich leather, fabric and glass textures. Restrained gothic-romance mood, early-19th-century western European setting in late summer. Muted elegant palette with selective warm accents, motivated soft light, deep transparent shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing. Tall vertical from behind her head. Top 40%: Hugo (adult man, about 30; one lock over his right brow, pale green eyes; midnight-blue coat, ivory cravat closed to the jaw), looking down at her: quiet assent, faint sadness. Right of 36% across, in focus: her bare RIGHT thumb and marked index pinch one knot at heart height on his LEFT chest; the thread runs up-right to below his left collarbone, a hand-span. Bottom 10%: the blurred top of her bun. Dusk: the single brass oil lamp freshly lit, a warm amber pool on the bench and the two figures, the last deep blue of the evening sky in the glass walls behind them, the flame faintly reflected in the glass. Keep the mid-left (to about 34% across, 46-58% down), deep blue glass beside his body, and the bottom tenth, the shadow over her hair, as calm, empty background with no important details (a speech bubble will be added there later). No childlike faces, no glow, no runes or tattoos on skin, no red clothing, no panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: _workspace/05_panels/ep02/panel_047.png, _workspace/05_panels/ep02/panel_055.png, refs/HUGO_expressions.png, refs/HUGO_turnaround.png
- aspect: 9:16
- output: _workspace/05_panels/ep02/panel_056.png
- note: Last panel; make 4 versions. The bottom band also holds the ending caption. No kiss, embrace or fade to black; collar closed; thread on his LEFT chest; her face not shown.

## Panel table

| Panel | Aspect | Attach | Words |
|---|---|---|---|
| panel_001 | 3:4 | PETRA_expressions, PETRA_hands, HUGO_hands, LOC_BENCH | 245 |
| panel_002 | 1:1 | PETRA_hands, PETRA_turnaround, ep02/panel_001.png | 220 |
| panel_003 | 9:16 | PETRA_expressions, HUGO_hands, PETRA_hands, ep02/panel_001.png | 240 |
| panel_004 | 1:1 | ep02/panel_003.png, HUGO_hands, PETRA_hands | 247 |
| panel_005 | 1:1 | EP2_props, PETRA_hands, ep02/panel_001.png | 231 |
| panel_006 | 1:1 | EP2_props, PETRA_hands, ep02/panel_005.png | 248 |
| panel_007 | 1:1 | HUGO_expressions, HUGO_turnaround, ep02/panel_001.png | 238 |
| panel_008 | 1:1 | PETRA_expressions, HUGO_expressions, ep02/panel_001.png | 249 |
| panel_009 | 3:4 | PETRA_turnaround, HUGO_turnaround, LOC_BENCH | 239 |
| panel_010 | 1:1 | ep02/panel_009.png, HUGO_hands, PETRA_hands | 203 |
| panel_011 | 1:1 | HUGO_left_hand, HUGO_expressions, ep02/panel_009.png | 249 |
| panel_012 | 3:4 | HUGO_left_hand, HUGO_hands, ep02/panel_009.png | 249 |
| panel_013 | 1:1 | HUGO_left_hand, PETRA_turnaround, ep02/panel_009.png | 245 |
| panel_014 | 1:1 | HUGO_left_hand, HUGO_expressions, ep02/panel_013.png | 245 |
| panel_015 | 1:1 | HUGO_left_hand, PETRA_expressions, PETRA_hands, ep02/panel_014.png | 242 |
| panel_016 | 1:1 | HUGO_left_hand, PETRA_hands, ep02/panel_015.png | 235 |
| panel_017 | 16:9 | HUGO_left_hand, PETRA_hands, ep02/panel_016.png | 205 |
| panel_018 | 1:1 | HUGO_left_hand, HUGO_expressions, PETRA_hands | 221 |
| panel_019 | 1:1 | HUGO_left_hand, EP2_props, ep02/panel_012.png | 247 |
| panel_020 | 1:1 | HUGO_left_hand, PETRA_hands, ep02/panel_014.png | 242 |
| panel_021 | 1:1 | PETRA_expressions, PETRA_turnaround, HUGO_left_hand, ep02/panel_020.png | 225 |
| panel_022 | 1:1 | HUGO_left_hand, HUGO_expressions, ep02/panel_009.png | 216 |
| panel_023 | 3:4 | EP2_props, PETRA_turnaround, HUGO_turnaround, ep02/panel_009.png | 248 |
| panel_024 | 1:1 | EP2_props, PETRA_expressions, ep02/panel_023.png | 236 |
| panel_025 | 1:1 | HUGO_expressions, HUGO_turnaround, ep02/panel_023.png | 235 |
| panel_026 | 1:1 | ep02/panel_023.png, PETRA_turnaround, HUGO_turnaround | 250 |
| panel_027 | 1:1 | PETRA_expressions, HUGO_turnaround, ep02/panel_023.png | 230 |
| panel_028 | 1:1 | PETRA_turnaround, PETRA_hands, ep02/panel_023.png | 216 |
| panel_029 | 1:1 | EP2_props, ep02/panel_009.png, ep02/panel_023.png | 233 |
| panel_030 | 16:9 | EP2_props, PETRA_hands, ep02/panel_029.png | 244 |
| panel_031 | 1:1 | PETRA_turnaround, ep02/panel_029.png | 213 |
| panel_032 | 1:1 | HUGO_turnaround, HUGO_expressions, ep02/panel_009.png | 238 |
| panel_033 | 3:4 | PETRA_turnaround, MAID_ref, LOC_GREENHOUSE | 231 |
| panel_034 | 1:1 | MAID_ref, PETRA_turnaround, ep02/panel_033.png | 248 |
| panel_035 | 1:1 | MAID_ref, PETRA_hands, ep02/panel_034.png | 235 |
| panel_036 | 1:1 | MAID_ref, ep02/panel_034.png | 242 |
| panel_037 | 1:1 | MAID_ref, PETRA_turnaround, ep02/panel_036.png | 234 |
| panel_038 | 1:1 | PETRA_turnaround, ep02/panel_034.png | 248 |
| panel_039 | 9:16 | ep02/panel_033.png, PETRA_turnaround, MAID_ref, HUGO_turnaround | 241 |
| panel_040 | 1:1 | HUGO_expressions, PETRA_turnaround, ep02/panel_033.png, ep02/panel_039.png | 243 |
| panel_041 | 3:4 | PETRA_turnaround, HUGO_turnaround, EP2_props, LOC_BENCH | 249 |
| panel_042 | 1:1 | ep02/panel_041.png, HUGO_expressions, PETRA_turnaround | 241 |
| panel_043 | 1:1 | HUGO_left_hand, PETRA_turnaround, ep02/panel_041.png | 247 |
| panel_044 | 1:1 | PETRA_expressions, PETRA_turnaround, ep02/panel_043.png | 217 |
| panel_045 | 9:16 | HUGO_left_hand, HUGO_turnaround, ep02/panel_043.png | 250 |
| panel_046 | 1:1 | ep02/panel_041.png, ep02/panel_042.png, PETRA_turnaround, HUGO_turnaround | 249 |
| panel_047 | 1:1 | HUGO_turnaround, HUGO_expressions, ep02/panel_041.png | 250 |
| panel_048 | 1:1 | ep02/panel_047.png, PETRA_turnaround, HUGO_turnaround | 250 |
| panel_049 | 1:1 | ep02/panel_030.png, EP2_props, PETRA_hands | 222 |
| panel_050 | 1:1 | HUGO_expressions, ep02/panel_047.png | 250 |
| panel_051 | 1:1 | PETRA_turnaround, PETRA_hands, ep02/panel_041.png | 246 |
| panel_052 | 3:4 | ep02/panel_047.png, PETRA_turnaround, HUGO_turnaround, ep02/panel_041.png | 247 |
| panel_053 | 1:1 | ep02/panel_052.png, PETRA_hands | 202 |
| panel_054 | 1:1 | HUGO_expressions, ep02/panel_047.png | 212 |
| panel_055 | 1:1 | ep02/panel_047.png, ep02/panel_053.png, PETRA_hands | 242 |
| panel_056 | 9:16 | ep02/panel_047.png, ep02/panel_055.png, HUGO_expressions, HUGO_turnaround | 250 |

Word counts are whitespace-separated words in the prompt text (all 56 are 250 or fewer). Aspect shows the
first-choice ratio; the fallback for a missing 3:4 is in each block's `aspect:` line.
