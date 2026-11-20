# EP01 lettering spec: 「Play It Back」 (letterer, 2026-11-20)

- Source: `03_episode/ep01_script_final.md` (text_km = the script's KM lines, word for word), `04_visual/ep01_shotlist.md` (art_space, composition), `04_visual/style-bible.md` §7 (bubble types, zones).
- **60 panels.** No text is in any image. The viewer draws every bubble, sound word and caption at the places below.
- `place`: x/y = bubble centre, w = max width, all in % of the panel; every bubble sits inside the panel (x - w/2 >= 3, x + w/2 <= 97) and inside its `art_space`. Tail arrows: `↙ ↓ ↘` = tail at the bottom (left/centre/right). Tail text after the arrow names the target.
- Types: `dialogue`, `shout` (Theara's announcer lines P9 and P37), `whisper` (small, soft), `memory` (ECHO bubbles P43/P45/P46: blue edge, no tail), `playback` (recorded voice: tail points at the Brick, or at the stage-right hall speaker in P1), `narration` (caption box).
- `text_ko` holds the English working line for reference only; it is never shown.
- Split bubbles (same exact words in two bubbles): P9 (2), P16, P21 (1), P28 (1), P59 (1), P59 (2).
- Placement pass after the Flow images arrive: nudge only x/y/w if a bubble covers a face; never change the words.

---

### panel_001
- art_space: top 25% of the panel, the high cream ceiling, kept calm (no chandelier detail)
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: playback
  - text_km: "…មនុស្សគ្មានតម្លៃ។"
  - text_ko: "…a nobody."
  - place: x 68% · y 12% · w 48% · tail ↘ device: stage-right hall speaker
  - read_order: 1

### panel_002
- art_space: upper-left 30%, plain cream wall behind the rows
- gap_after: 0
- bubble_1:
  - speaker: Parent
  - type: whisper
  - text_km: "សំឡេងអ្នកណាហ្នឹង?"
  - text_ko: "Whose voice is that?"
  - place: x 30% · y 13% · w 40% · tail ↙ parent at the left edge
  - read_order: 1

### panel_003
- silent: true
- gap_after: 160

### panel_004
- art_space: top band 20% full width, calm dark wall or ceiling
- gap_after: 120
- bubble_1:
  - speaker: caption
  - type: narration
  - text_km: "សែសិបថ្ងៃមុន។"
  - place: x 50% · y 10% · w 70%
  - read_order: 1

### panel_005
- silent: true

### panel_006
- art_space: upper-left 30%, dim ochre wall above the shut louvres
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "អ្នកថត។"
  - text_ko: "Cameraman."
  - place: x 28% · y 12% · w 38% · tail ↙ Dara (left, door side)
  - read_order: 1

### panel_007
- art_space: top-right 30%, dim wall
- gap_after: 40
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 72% · y 13% · w 36% · tail ↓ Visal
  - read_order: 1

### panel_008
- art_space: upper-right 30%, dim wall above the louvres
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "ទ្វារ អញយាមហើយ។"
  - text_ko: "Door's covered."
  - place: x 70% · y 13% · w 46% · tail ↙ Dara (door, left)
  - read_order: 1

### panel_009
- art_space: top 35% as three small slots, dim wall above the louvres
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: shout
  - text_km: "ឥឡូវ… អ្នកថតរបស់យើង ចូលតំណែងហើយ!"
  - text_ko: "And now… our Cameraman takes his post!"
  - place: x 30% · y 10% · w 52% · tail ↓ Theara
  - read_order: 1
- bubble_2:
  - speaker: Theara
  - type: dialogue
  - text_km: "យ៉ាងហោចណាស់ អាមួយនេះ"
  - text_ko: "At least this one doesn't cry like the last one." (part 1 of 2)
  - place: x 68% · y 20% · w 46% · tail ↓ Theara
  - read_order: 2
- bubble_3:
  - speaker: Theara
  - type: dialogue
  - text_km: "មិនយំដូចម្នាក់មុនទេ។"
  - text_ko: "At least this one doesn't cry like the last one." (part 2 of 2)
  - place: x 66% · y 30% · w 46% · tail ↓ Theara
  - read_order: 3

### panel_010
- art_space: top 35%, two slots, dim ochre wall above the door
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ចូលជិតទៀត។"
  - text_ko: "Closer."
  - place: x 30% · y 11% · w 38% · tail ↓ Rachana
  - read_order: 1
- bubble_2:
  - speaker: Rachana
  - type: dialogue
  - text_km: "កុំឲ្យដៃញ័រ។"
  - text_ko: "And keep your hands still."
  - place: x 64% · y 24% · w 44% · tail ↓ Rachana
  - read_order: 2

### panel_011
- art_space: upper-right 30% (whisper) and top-left 35% (laughter word), dim wall
- gap_after: 0
- bubble_1:
  - speaker: Kolab
  - type: whisper
  - text_km: "ណា…"
  - text_ko: "Na…"
  - place: x 72% · y 13% · w 28% · tail ↓ Kolab
  - read_order: 1
- sfx_1:
  - text_km: "ហាហាហា!"
  - place: x 30% · y 14% · size 8.5% · rot -8

### panel_012
- art_space: top 30% across, dim wall, for the sound word
- gap_after: 0
- sfx_1:
  - text_km: "ហាហា! ហាហាហា!"
  - place: x 50% · y 14% · size 8.5% · rot -4

### panel_013
- art_space: top-right 30%, dim wall
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ម្ដងទៀត។ ចាប់ពីដើម។"
  - text_ko: "Again. From the start."
  - place: x 70% · y 12% · w 48% · tail ↓ Rachana (right)
  - read_order: 1

### panel_014
- silent: true

### panel_015
- art_space: upper-left and upper-right slots, top 35%, dim wall behind her
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ក្មេងល្អ។"
  - text_ko: "Good boy."
  - place: x 28% · y 11% · w 34% · tail ↘ Rachana
  - read_order: 1
- bubble_2:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ស្ងៀម ដូចរាល់ដង។"
  - text_ko: "Quiet. Like always."
  - place: x 68% · y 24% · w 44% · tail ↙ Rachana
  - read_order: 2

### panel_016
- art_space: top 35%, wide, two stacked slots, dim wall
- gap_after: 80
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "ម៉ោងមួយ ហាសិបប្រាំ វាយកណ្ដឹង។"
  - text_ko: "Bell at 13:55. Don't you be late." (part 1 of 2)
  - place: x 40% · y 11% · w 62% · tail ↙ Dara (left)
  - read_order: 1
- bubble_2:
  - speaker: Dara
  - type: dialogue
  - text_km: "ឯងកុំមកយឺត។"
  - text_ko: "Bell at 13:55. Don't you be late." (part 2 of 2)
  - place: x 38% · y 24% · w 44% · tail ↙ Dara (left)
  - read_order: 2

### panel_017
- art_space: top-left 25% and top-right 25%, plain wall above the trophy cabinet
- gap_after: 0
- bubble_1:
  - speaker: Yuthea
  - type: dialogue
  - text_km: "រចនាថា ក្មួយនិយាយមិនសមរម្យដាក់នាង។"
  - text_ko: "Rachana says you were rude to her."
  - place: x 26% · y 10% · w 46% · tail ↘ Yuthea (centre)
  - read_order: 1
- bubble_2:
  - speaker: Yuthea
  - type: dialogue
  - text_km: "ចុះហត្ថលេខាទៅ ក្មួយ។ អ៊ីចឹងចប់ហើយ។"
  - text_ko: "Sign it, ក្មួយ, and it's finished."
  - place: x 74% · y 22% · w 46% · tail ↙ Yuthea (centre)
  - read_order: 2

### panel_018
- art_space: upper-right 30%, plain wall behind Yuthea
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ចាស រួចហើយ លោកពូ។"
  - text_ko: "Yes, all done, Uncle."
  - place: x 68% · y 13% · w 48% · tail ↙ Rachana (left)
  - read_order: 1

### panel_019
- art_space: upper-right 30%, plain wall
- gap_after: 0
- bubble_1:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "ចុះឈ្មោះទៅ វិសាល។ កុំរករឿង។"
  - text_ko: "Sign your name, Visal. Don't make trouble."
  - place: x 68% · y 12% · w 56% · tail ↘ Chanthy (right edge)
  - read_order: 1

### panel_020
- art_space: upper-left 30% for the small sound word, upper-right 30% for the bubble, plain wall
- gap_after: 40
- sfx_1:
  - text_km: "គ្រីង"
  - place: x 25% · y 12% · size 5.5% · rot -10
- bubble_1:
  - speaker: Yuthea
  - type: dialogue
  - text_km: "បិទទ្វារទៅ។"
  - text_ko: "Close the door."
  - place: x 70% · y 13% · w 40% · tail ↓ Yuthea
  - read_order: 1

### panel_021
- art_space: top 40%, plain wall: three bubble slots and a small sound-word slot
- gap_after: 0
- bubble_1:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "លឿនបន្តិច។"
  - text_ko: "Quickly. I teach an extra class at 12:20." (part 1 of 2)
  - place: x 34% · y 9% · w 40% · tail ↓ Chanthy
  - read_order: 1
- bubble_2:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "ខ្ញុំត្រូវបង្រៀនគួរ ម៉ោងដប់ពីរម្ភៃ។"
  - text_ko: "Quickly. I teach an extra class at 12:20." (part 2 of 2)
  - place: x 40% · y 20% · w 58% · tail ↓ Chanthy
  - read_order: 2
- bubble_3:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "អូខេ? អូខេ។"
  - text_ko: "OK? OK."
  - place: x 66% · y 32% · w 38% · tail ↓ Chanthy
  - read_order: 3
- sfx_1:
  - text_km: "តុក តុក"
  - place: x 84% · y 10% · size 5% · rot 6

### panel_022
- art_space: upper-right 30%, clear glass-top desk or wall
- gap_after: 0
- bubble_1:
  - speaker: Yuthea
  - type: dialogue
  - text_km: "ល្អ។ ចប់ហើយ។"
  - text_ko: "Good. It's finished."
  - place: x 70% · y 12% · w 42% · tail ↘ Yuthea (off-panel, right edge)
  - read_order: 1

### panel_023
- art_space: upper-right 25%, plain office wall above the cabinet
- gap_after: 80
- bubble_1:
  - speaker: Mealea
  - type: whisper
  - text_km: "…"
  - text_ko: "…"
  - place: x 72% · y 11% · w 18% · tail ↓ Mealea
  - read_order: 1

### panel_024
- art_space: top-left 30%, ochre wall above the blackboard line
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: dialogue
  - text_km: "ហាហា! នៅតែយកដុំឥដ្ឋហ្នឹងមកទៀតហ្អេ៎?"
  - text_ko: "Ha! Still bringing the Brick to school?"
  - place: x 32% · y 12% · w 56% · tail ↓ Theara
  - read_order: 1

### panel_025
- art_space: top-left 30% and top-right 20%, blurred wall and wood, calm
- gap_after: 0
- sfx_1:
  - text_km: "ហាហាហា!"
  - place: x 30% · y 12% · size 8.5% · rot -7

### panel_026
- art_space: top-left 25% (Chanthy) and top-right 25% (Visal), ochre wall above the blackboard
- gap_after: 0
- bubble_1:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "លុយឯកសារ ពីរពាន់រៀល។ អូខេ? អូខេ។"
  - text_ko: "Handout money. Two thousand riel. OK? OK."
  - place: x 28% · y 11% · w 50% · tail ↓ Chanthy
  - read_order: 1
- bubble_2:
  - speaker: Visal
  - type: dialogue
  - text_km: "ខ្ញុំសុំអាទិត្យក្រោយ អ្នកគ្រូ។"
  - text_ko: "Next week, please, teacher."
  - place: x 74% · y 12% · w 44% · tail ↓ Visal
  - read_order: 2

### panel_027
- art_space: upper-right 30% for the bubble, top-left 20% for the small sound word, plain wall
- gap_after: 0
- sfx_1:
  - text_km: "តុក តុក"
  - place: x 20% · y 9% · size 5.5% · rot -5
- bubble_1:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "នោះជាទូរស័ព្ទមែនទេ?"
  - text_ko: "Is that even a phone?"
  - place: x 70% · y 14% · w 50% · tail ↓ Chanthy
  - read_order: 1

### panel_028
- art_space: top 35%, three slots, wall above the blackboard
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: dialogue
  - text_km: "អ្នកគ្រូ! ម៉ោងចុងក្រោយព្រឹកមិញ"
  - text_ko: "Teacher! He skipped the last lesson this morning!" (part 1 of 2)
  - place: x 66% · y 9% · w 52% · tail ↘ Theara (right)
  - read_order: 1
- bubble_2:
  - speaker: Theara
  - type: dialogue
  - text_km: "វាគេចរៀន!"
  - text_ko: "Teacher! He skipped the last lesson this morning!" (part 2 of 2)
  - place: x 70% · y 20% · w 36% · tail ↘ Theara (right)
  - read_order: 2
- bubble_3:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "វិសាល?"
  - text_ko: "Visal?"
  - place: x 28% · y 31% · w 28% · tail ↓ Chanthy (left)
  - read_order: 3

### panel_029
- art_space: top 30% across, two slots upper-left and upper-right, plain ochre wall behind his head
- gap_after: 120
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ម៉ោងដប់ ហាសិបពីរ។ ខ្ញុំនៅទីនេះ។"
  - text_ko: "10:52. I was here."
  - place: x 30% · y 10% · w 50% · tail ↘ Visal
  - read_order: 1
- bubble_2:
  - speaker: Visal
  - type: dialogue
  - text_km: "«ទំព័រសែសិប។ អូខេ? អូខេ។»"
  - text_ko: "'Page forty. OK? OK.'"
  - place: x 70% · y 22% · w 50% · tail ↙ Visal
  - read_order: 2

### panel_030
- art_space: upper-right 25%
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: dialogue
  - text_km: "…"
  - text_ko: "…"
  - place: x 72% · y 11% · w 22% · tail ↓ Theara
  - read_order: 1

### panel_031
- art_space: top-left 30%
- gap_after: 0
- bubble_1:
  - speaker: Chanthy
  - type: dialogue
  - text_km: "អូខេ? អូខេ។ អង្គុយចុះ។"
  - text_ko: "OK? OK. Sit."
  - place: x 30% · y 12% · w 50% · tail ↓ Chanthy
  - read_order: 1

### panel_032
- art_space: upper-right 30%
- gap_after: 0
- bubble_1:
  - speaker: Kolab
  - type: whisper
  - text_km: "អឺ…"
  - text_ko: "Um…"
  - place: x 72% · y 13% · w 26% · tail ↓ Kolab
  - read_order: 1

### panel_033
- art_space: upper-left 30%, wall and glare
- gap_after: 80
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ទូរស័ព្ទរបស់មនុស្សគ្មានតម្លៃ។"
  - text_ko: "A phone from nobody."
  - place: x 32% · y 12% · w 56% · tail ↓ Rachana
  - read_order: 1

### panel_034
- art_space: top 35%, two slots, dim wall
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ចូលចិត្តម៉ោងចំៗណាស់ មែនទេ?"
  - text_ko: "You like exact times, don't you?"
  - place: x 30% · y 10% · w 52% · tail ↙ Rachana (door, left)
  - read_order: 1
- bubble_2:
  - speaker: Dara
  - type: dialogue
  - text_km: "ម៉ោងមួយ ហាសិបហើយ។ ធ្វើការទៅ អ្នកថត។"
  - text_ko: "1:50. Get to work, Cameraman."
  - place: x 68% · y 24% · w 54% · tail ↓ Dara
  - read_order: 2

### panel_035
- art_space: top-right 30%, small bubble, dim wall
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 74% · y 12% · w 30% · tail ↓ Visal
  - read_order: 1

### panel_036
- silent: true

### panel_037
- art_space: upper-right 30%, dim wall
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: shout
  - text_km: "ញញឹមមក! អ្នកថតកំពុងថត!"
  - text_ko: "Smile! The Cameraman's rolling!"
  - place: x 68% · y 12% · w 56% · tail ↙ Theara
  - read_order: 1

### panel_038
- silent: true
- gap_after: 40

### panel_039
- art_space: top 40% of the panel, open sky, for a big heavy sound word
- gap_after: 0
- sfx_1:
  - text_km: "ទុង!"
  - place: x 50% · y 18% · size 16% · rot -6

### panel_040
- art_space: top-left 30%, dim wall above the louvres
- gap_after: 80
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "លុបចោល។ ខ្ញុំកំពុងមើល។"
  - text_ko: "Delete it. I'm watching."
  - place: x 30% · y 12% · w 54% · tail ↓ Rachana
  - read_order: 1

### panel_041
- silent: true
- gap_after: 160

### panel_042
- silent: true

### panel_043
- art_space: upper-right 30%, plain wall
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: memory
  - text_km: "លុបចោល។ ខ្ញុំកំពុងមើល។"
  - text_ko: "Delete it. I'm watching."
  - place: x 70% · y 13% · w 52% · no tail (echo)
  - read_order: 1

### panel_044
- silent: true

### panel_045
- art_space: top 30%, soft blurred desk and wall
- gap_after: 0
- bubble_1:
  - speaker: Chanthy
  - type: memory
  - text_km: "នោះជាទូរស័ព្ទមែនទេ?"
  - text_ko: "Is that even a phone?"
  - place: x 50% · y 11% · w 62% · no tail (echo)
  - read_order: 1

### panel_046
- art_space: upper-left 30%, plain wall
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: memory
  - text_km: "…ដុំឥដ្ឋ…"
  - text_ko: "…the Brick…"
  - place: x 30% · y 13% · w 40% · no tail (echo)
  - read_order: 1

### panel_047
- art_space: top 30%, dark wall or ceiling
- gap_after: 40
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "…គ្មានតម្លៃ។"
  - text_ko: "…Nobody."
  - place: x 50% · y 12% · w 50% · tail ↓ Visal
  - read_order: 1

### panel_048
- silent: true

### panel_049
- art_space: upper-right 30% above the tiled roof edge and sky
- gap_after: 0
- sfx_1:
  - text_km: "ហិហិ…"
  - place: x 72% · y 13% · size 7% · rot 6

### panel_050
- art_space: upper-left 30%, ochre wall at the side of the stairwell
- gap_after: 80
- bubble_1:
  - speaker: Kolab
  - type: dialogue
  - text_km: "ណា… តោះទៅ…"
  - text_ko: "Na, let's go…"
  - place: x 30% · y 13% · w 46% · tail ↓ Kolab (landing below)
  - read_order: 1

### panel_051
- art_space: upper-left 30%, wall above the stair
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ចុះហត្ថលេខាហើយ។ រឿងនេះបិទហើយ។"
  - text_ko: "You signed. It's closed."
  - place: x 32% · y 12% · w 56% · tail ↓ Rachana
  - read_order: 1

### panel_052
- art_space: upper-right 30%, ochre wall and sky
- gap_after: 160
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "គ្មានអ្នកណាជឿមនុស្សគ្មានតម្លៃ។"
  - text_ko: "Nobody believes a nobody."
  - place: x 68% · y 13% · w 52% · tail ↙ Rachana (upper-left of centre)
  - read_order: 1

### panel_053
- silent: true
- gap_after: 240

### panel_054
- silent: true
- gap_after: 120

### panel_055
- art_space: top 30% across (dark zinc underside) and about 20% free around the Brick for the tail
- gap_after: 200
- bubble_1:
  - speaker: Rachana
  - type: playback
  - text_km: "គ្មានអ្នកណាជឿមនុស្សគ្មានតម្លៃ។"
  - text_ko: "Nobody believes a nobody."
  - place: x 60% · y 14% · w 56% · tail ↘ device: the Brick (centre-right)
  - read_order: 1

### panel_056
- art_space: upper-left 28% and upper-right 28%, shade under the zinc roof, two slots
- gap_after: 120
- bubble_1:
  - speaker: Visal
  - type: playback
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 28% · y 12% · w 28% · tail ↙ device: the Brick (inset, lower-left)
  - read_order: 1
- bubble_2:
  - speaker: Rachana
  - type: playback
  - text_km: "លុបចោល។ ខ្ញុំកំពុងមើល។"
  - text_ko: "Delete it. I'm watching."
  - place: x 70% · y 12% · w 50% · tail ↙ device: the Brick (inset, lower-left)
  - read_order: 2

### panel_057
- art_space: upper-right 30%, shade
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "សែសិបមួយឃ្លីប។"
  - text_ko: "Forty-one clips."
  - place: x 70% · y 13% · w 50% · tail ↓ Visal
  - read_order: 1

### panel_058
- art_space: upper 35%, wide, amber sky and shade, calm
- gap_after: 320
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ប្រាំសំឡេង។"
  - text_ko: "Five voices."
  - place: x 50% · y 14% · w 46% · tail ↓ Visal (small, below)
  - read_order: 1

### panel_059
- art_space: top 35%, four small slots, shade under the zinc roof
- gap_after: 80
- bubble_1:
  - speaker: Mealea
  - type: dialogue
  - text_km: "វិសាល?"
  - text_ko: "Visal? The ceremony is in forty days." (part 1 of 2)
  - place: x 26% · y 8% · w 30% · tail ↙ Mealea (off-panel, left edge)
  - read_order: 1
- bubble_2:
  - speaker: Mealea
  - type: dialogue
  - text_km: "សែសិបថ្ងៃទៀត ដល់ពិធីប្រគល់រង្វាន់។"
  - text_ko: "Visal? The ceremony is in forty days." (part 2 of 2)
  - place: x 66% · y 15% · w 52% · tail ↙ Mealea (off-panel, left edge)
  - read_order: 2
- bubble_3:
  - speaker: Mealea
  - type: dialogue
  - text_km: "យើងត្រូវការអ្នកថតម្នាក់។"
  - text_ko: "We need someone to film. You're the Cameraman, aren't you?" (part 1 of 2)
  - place: x 30% · y 25% · w 50% · tail ↓ Mealea
  - read_order: 3
- bubble_4:
  - speaker: Mealea
  - type: dialogue
  - text_km: "ប្អូនជាអ្នកថត មែនទេ?"
  - text_ko: "We need someone to film. You're the Cameraman, aren't you?" (part 2 of 2)
  - place: x 68% · y 32% · w 44% · tail ↓ Mealea
  - read_order: 4

### panel_060
- art_space: upper-right 25% (shade or sky) for the bubble, bottom band 12% (plain ground) for the end caption
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "…បាទ។"
  - text_ko: "…Yes."
  - place: x 72% · y 12% · w 32% · tail ↓ Visal
  - read_order: 1
- bubble_2:
  - speaker: caption
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - place: x 50% · y 94% · w 70%
  - read_order: 2
