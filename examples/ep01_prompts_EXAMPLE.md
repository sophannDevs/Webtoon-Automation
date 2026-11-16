> **EXAMPLE ONLY (excerpt).** Shows what `_workspace/04_visual/ep01_prompts.md` looks like for the
> Cambodian-reader edition: four panels, in the exact format the Flow checklist page reads.
> Every panel image is **text-free**: no speech bubbles, no letters, with an empty area where the viewer
> will draw the Khmer bubble. The character-sheet prompts don't change (they were already text-free).
> Not used by the harness; safe to delete.

# EP01 프롬프트 (발췌) — prompt-smith

### panel_044
- scene_group: A
- scene_id: S2 / location: LOC_VAULT
- prompt: "Korean webtoon panel, close-up from over the shoulder: Han Seoyun's hands unfold a small yellowed paper receipt in the lower third of the frame, her narrowed eyes visible above it. Match the attached reference images of Seoyun exactly: black chin-length bob with one white streak on the LEFT side, dark brown eyes, oversized grey knit cardigan, silver ring on her RIGHT index finger. Setting: narrow back vault of an old memory pawnshop, floor-to-ceiling wooden drawers of glass marbles glowing cold blue, a single bare bulb, dust in the air. The receipt shows only faint ruled lines, no readable writing. Keep the upper-right third of the image as calm, dark, empty background with no important details (a speech bubble will be added there later). Korean webtoon style, clean bold black ink linework, soft cel shading, cold blue light with a warm bulb highlight. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark."
- attach: refs/SEOYUN_turnaround.png, refs/SEOYUN_expressions.png
- aspect: 3:4
- output: _workspace/05_panels/ep01/panel_044.png

### panel_045
- scene_group: A
- scene_id: S2 / location: LOC_VAULT
- prompt: "Korean webtoon panel, extreme close-up of the bottom edge of a yellowed paper receipt with an empty signature line across the middle, completely blank, leaving a large clean area of paper for handwriting to be added later. A thumb with a silver ring on the index finger holds the paper edge at the lower left. Cold blue glow from off-screen marbles, a single warm bulb highlight on the paper, visible paper texture. Korean webtoon style, clean bold black ink linework, soft cel shading. Avoid: any text, letters, numbers, signatures, writing, speech bubbles, watermark."
- attach: none
- aspect: 1:1
- output: _workspace/05_panels/ep01/panel_045.png

### panel_047
- scene_group: A
- scene_id: S2 / location: LOC_VAULT
- prompt: "Korean webtoon panel, top-down close-up: the back of a small yellowed paper receipt fills the centre of the frame, lying flat and evenly lit, completely blank (handwriting will be added later), with faint pen-pressure dents. Only the trembling fingertips of Han Seoyun's hand touch the edge; grey knit cardigan sleeve and silver ring on her RIGHT index finger, matching the attached reference image. Narrow vault of glass marbles glowing cold blue, blurred in the dark background, a single bare bulb. Korean webtoon style, clean bold black ink linework, soft cel shading, dramatic cold light. Avoid: any text, letters, numbers, writing, speech bubbles, watermark."
- attach: refs/SEOYUN_turnaround.png
- aspect: 3:4
- output: _workspace/05_panels/ep01/panel_047.png

### panel_055
- scene_group: B
- scene_id: S2 / location: LOC_VAULT
- prompt: "Korean webtoon panel, tall vertical composition seen from the floor: in the foreground at the bottom, Han Seoyun sits frozen on the vault floor holding a glowing blue glass marble, seen from behind at a three-quarter angle; in the background, Ma Dojin stands in the doorway near the top centre, backlit by warm amber light from the shop, his face half in shadow, glasses catching the light. Match the attached reference images exactly: Seoyun has a black chin-length bob with one white streak on the LEFT side and an oversized grey knit cardigan; Dojin has slicked-back grey hair, round gold-rimmed glasses, a brown vest with rolled sleeves, and a burn scar on the back of his LEFT hand. Setting: narrow back vault of an old memory pawnshop, drawers of glass marbles glowing cold blue, warm amber spilling in from the doorway. Keep the upper-right area beside the doorway as plain dark wall with no important details (a speech bubble will be added there later). Korean webtoon style, clean bold black ink linework, soft cel shading, tense cinematic lighting, warm amber against cold blue. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark, extra people."
- attach: refs/SEOYUN_turnaround.png, refs/SEOYUN_expressions.png, refs/DOJIN_turnaround.png
- aspect: 9:16
- output: _workspace/05_panels/ep01/panel_055.png

---

What changed from the Korean-bubble version:
- The "speech bubble containing exactly the Korean text …" sentence is gone.
- Each panel now says which area to **keep empty** (from the lettering spec's `art_space`).
- Objects that carry writing (receipt, signature line, note, sign, phone) are drawn **blank**.
- The Avoid line now bans **all** text and bubbles.

This also makes Flow's job easier: no Korean or Khmer lettering to get right, so far fewer redraws.
