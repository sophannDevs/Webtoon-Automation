# EP02 lettering spec: 「Full」 / «ពេញ» (letterer, 2026-11-20)

- Source: `03_episode/ep02_script_final.md` (text_km = the script's KM lines, word for word; copied by script, never retyped), `04_visual/ep02_shotlist.md` (art_space, composition), `04_visual/style-bible.md` §7 (bubble types, zones).
- **60 panels.** No text is in any image. The viewer draws every bubble, sound word and caption at the places below.
- `place`: x/y = bubble centre, w = max width, all in % of the panel; every bubble sits inside the panel (x - w/2 >= 3, x + w/2 <= 97) and inside its `art_space`. Tail arrows: `↙ ↓ ↘` = tail at the bottom (left/centre/right). Tail text after the arrow names the target.
- Types: `dialogue`, `shout` (Theara's announcer lines P7, P14, P38; the Coach's barks P32, P41; Dara's P34), `whisper` (small, soft: Visal's night lines, off-panel voices P2, P5, P58, Kolab P59), `memory` (ECHO bubble P25: blue edge, no tail), `playback` (recorded voice P46, P48: tail points at the earbud wire), `narration` (end caption P60).
- `text_ko` holds the English working line for reference only; it is never shown.
- Sound words: the Brick's tone (ប៊ីប ប៊ីប) has the same glyph, size 4.5 and place at P11, P21, P23, P43; the idle (ដឺរ ដឺរ) has size 5 at P45 and P48; កិត! is tiny at P46.
- Split bubbles (same exact words in two bubbles): P33 (2 parts).
- Silent / no-bubble panels (`silent: true`): P6, P8, P12, P19, P20, P22, P24, P31, P35, P37, P40, P44, P47, P49, P54, P55, P57.
- Placement pass after the Flow images arrive: nudge only x/y/w if a bubble covers a face; never change the words.

---

### panel_001
- art_space: top band, about 28% of the height, across the dark upper back wall (plain, shadowed)
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "សាមសិបប្រាំបួនថ្ងៃ។"
  - text_ko: "Thirty-nine days."
  - place: x 45% · y 12% · w 46% · tail ↓ Visal
  - read_order: 1

### panel_002
- art_space: upper-left 35%, plain plaster wall above the socket (faint off-panel voice)
- gap_after: 0
- bubble_1:
  - speaker: Rany (off-panel)
  - type: whisper
  - text_km: "ដប់នាទី។ រួចម៉ែដាំបាយ។"
  - text_ko: "Ten minutes. Then the rice."
  - place: x 30% · y 14% · w 44% · tail ↙ Rany (off-panel, left edge)
  - read_order: 1

### panel_003
- art_space: top-left 35% of the frame, plain wall above the Brick, on the speaker's side
- gap_after: 0
- bubble_1:
  - speaker: Rany
  - type: dialogue
  - text_km: "ទូរស័ព្ទខូចហើយ ទុកធ្វើអី កូន?"
  - text_ko: "Why keep a dead phone, kon?"
  - place: x 30% · y 13% · w 48% · tail ↙ Rany
  - read_order: 1

### panel_004
- art_space: top-right 30%, dim wall, small bubble above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "របស់ប៉ា។"
  - text_ko: "It's Pa's."
  - place: x 70% · y 12% · w 36% · tail ↓ Visal
  - read_order: 1

### panel_005
- art_space: two slots: upper-left 30% (dim wall, Rany's faint bubble) and upper-right 30% above Visal's head
- gap_after: 120
- bubble_1:
  - speaker: Rany (off-panel)
  - type: whisper
  - text_km: "ថ្ងៃនេះមកផ្ទះឲ្យទាន់ម៉ោង។ ម្សិលមិញកូនមកយឺត។"
  - text_ko: "Home on time today. You were late yesterday."
  - place: x 28% · y 10% · w 48% · tail ↙ Rany (off-panel, left edge)
  - read_order: 1
- bubble_2:
  - speaker: Visal
  - type: dialogue
  - text_km: "…បាទ ម៉ែ។"
  - text_ko: "…Yes, Mae."
  - place: x 72% · y 23% · w 38% · tail ↓ Visal
  - read_order: 2

### panel_006
- silent: true

### panel_007
- art_space: top 35% in two slots (upper-left, upper-right), dim striped wall above the louvres; small calm zone beside the crowd for the laughter word
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: shout
  - text_km: "សាកថ្មដុំឥដ្ឋទៅ អ្នកថត!"
  - text_ko: "Charge the Brick, Cameraman!"
  - place: x 30% · y 10% · w 48% · tail ↓ Theara
  - read_order: 1
- bubble_2:
  - speaker: Theara
  - type: dialogue
  - text_km: "ថ្ងៃសំខាន់ណាស់!"
  - text_ko: "Big day!"
  - place: x 68% · y 24% · w 40% · tail ↓ Theara
  - read_order: 2
- sfx_1:
  - text_km: "ហាហាហា!"
  - place: x 84% · y 44% · size 7% · rot 6

### panel_008
- silent: true

### panel_009
- art_space: upper-right 30%, dim striped wall above the louvres
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "ទ្វារ អញយាមហើយ។"
  - text_ko: "Door's covered."
  - place: x 70% · y 13% · w 46% · tail ↙ Dara (back door, left)
  - read_order: 1

### panel_010
- art_space: upper-left 30%, dim ochre wall above the shut louvres, above Dara's head
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "លឿនឡើង អ្នកថត។"
  - text_ko: "Hurry up, Cameraman."
  - place: x 30% · y 12% · w 44% · tail ↓ Dara
  - read_order: 1

### panel_011
- art_space: small calm zone (about 20%) beside the desk corner for the tiny tone, plus the top band (25% across) for the laughter word
- gap_after: 0
- sfx_1:
  - text_km: "ប៊ីប ប៊ីប"
  - place: x 24% · y 52% · size 4.5% · rot -3
- sfx_2:
  - text_km: "ហាហាហា!"
  - place: x 50% · y 12% · size 8.5% · rot -4

### panel_012
- silent: true

### panel_013
- art_space: top-right 30%, dim wall above his head
- gap_after: 40
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 70% · y 13% · w 34% · tail ↓ Visal
  - read_order: 1

### panel_014
- art_space: top 35%, upper-left slot over the striped wall, on Theara's side
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: shout
  - text_km: "បងប្អូនអើយ! អ្នកថតរបស់យើង ថតទៀតហើយ!"
  - text_ko: "And the Cameraman's rolling again, folks!"
  - place: x 30% · y 12% · w 52% · tail ↓ Theara
  - read_order: 1

### panel_015
- art_space: top 35%, dim ochre wall above the door, centre-left
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "អ្នកថត ម៉ោងប៉ុន្មានហើយ?"
  - text_ko: "What time is it, Cameraman?"
  - place: x 38% · y 12% · w 50% · tail ↙ Rachana
  - read_order: 1

### panel_016
- art_space: top-right 30%, dim striped wall above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ម៉ោងដប់មួយ ប្រាំបួននាទី។"
  - text_ko: "Eleven-oh-nine."
  - place: x 70% · y 13% · w 48% · tail ↓ Visal
  - read_order: 1

### panel_017
- art_space: top-left 30%, dim wall above her head
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "…សំណាងមែន។"
  - text_ko: "…Lucky."
  - place: x 30% · y 13% · w 40% · tail ↓ Rachana
  - read_order: 1

### panel_018
- art_space: upper-left 32%, dim wall above Dara's head
- gap_after: 160
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "ម៉ោងមួយ ហាសិបប្រាំ។ ឯងកុំមកយឺត។"
  - text_ko: "Thirteen fifty-five. Don't be late."
  - place: x 28% · y 14% · w 48% · tail ↓ Dara
  - read_order: 1

### panel_019
- silent: true

### panel_020
- silent: true

### panel_021
- art_space: small calm zone (about 20%) just beside the Brick, plain mat or dark floor
- gap_after: 0
- sfx_1:
  - text_km: "ប៊ីប ប៊ីប"
  - place: x 24% · y 52% · size 4.5% · rot -3

### panel_022
- silent: true

### panel_023
- art_space: small calm zone beside the Brick (about 20%), plain mat or dark floor
- gap_after: 0
- sfx_1:
  - text_km: "ប៊ីប ប៊ីប"
  - place: x 24% · y 52% · size 4.5% · rot -3

### panel_024
- silent: true

### panel_025
- art_space: top 30% across the dark upper wall, centre-right, for one ECHO bubble
- gap_after: 0
- bubble_1:
  - speaker: Theara (echo)
  - type: memory
  - text_km: "សាកថ្មដុំឥដ្ឋទៅ អ្នកថត!"
  - text_ko: "Charge the Brick, Cameraman!"
  - place: x 62% · y 12% · w 56% · no tail (memory echo)
  - read_order: 1

### panel_026
- art_space: top-right 30% over the dark wall, a small whisper bubble above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "សាកពេញហើយ។"
  - text_ko: "Charged."
  - place: x 70% · y 13% · w 40% · tail ↓ Visal
  - read_order: 1

### panel_027
- art_space: top 30% (dark upper wall), centre-right, one small whisper bubble
- gap_after: 120
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "ពេញ។"
  - text_ko: "Full."
  - place: x 64% · y 13% · w 28% · tail ↓ Visal
  - read_order: 1

### panel_028
- art_space: top-left 30% (dark upper wall), above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "គ្មានអ្វីទុកពីថ្ងៃនេះទេ។"
  - text_ko: "Nothing from today."
  - place: x 28% · y 13% · w 46% · tail ↓ Visal
  - read_order: 1

### panel_029
- art_space: top-right 30%, dark wall above the net
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "ចូលមួយ។ ចេញមួយ។"
  - text_ko: "One in. One out."
  - place: x 70% · y 13% · w 40% · tail ↓ Visal
  - read_order: 1

### panel_030
- art_space: top-left 30% (dark upper wall), above his head
- gap_after: 200
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "សែសិបមួយ។ មិនលុបសូម្បីតែមួយទេ។"
  - text_ko: "Forty-one. Not one."
  - place: x 28% · y 13% · w 48% · tail ↓ Visal
  - read_order: 1

### panel_031
- silent: true

### panel_032
- art_space: upper 38% of the frame, open sky and awning shade, in two slots (upper-left, upper-right) above his head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: shout
  - text_km: "ជ្រើសរើសក្រុម។ ប្រាំថ្ងៃទៀត។"
  - text_ko: "Trials. Five days."
  - place: x 30% · y 10% · w 46% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: shout
  - text_km: "បញ្ជីទៅខេត្ត។"
  - text_ko: "Provincial list."
  - place: x 70% · y 26% · w 40% · tail ↓ Coach
  - read_order: 2

### panel_033
- art_space: top 30% across (sky or awning shade), plain, for one wide bubble split in two
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ប្រធានក្រុមត្រូវស្អាតស្អំ។"
  - text_ko: "A captain is clean, or he is nothing. (part 1 of 2)"
  - place: x 50% · y 9% · w 62% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "បើមិនអ៊ីចឹង គឺគ្មានអ្វីទេ។"
  - text_ko: "A captain is clean, or he is nothing. (part 2 of 2)"
  - place: x 50% · y 21% · w 62% · tail ↓ Coach
  - read_order: 2

### panel_034
- art_space: upper-left 32% (sky or awning shade), above his head
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: shout
  - text_km: "បាទលោកគ្រូ!"
  - text_ko: "Yes, Coach!"
  - place: x 28% · y 13% · w 40% · tail ↓ Dara
  - read_order: 1

### panel_035
- silent: true
- gap_after: 80

### panel_036
- art_space: top 38%, sky and awning, in two slots one above the other on the Coach's side
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ខាងខេត្តចង់ឲ្យថតវីដេអូគ្រប់ការជ្រើសរើស។"
  - text_ko: "The province wants every trial filmed."
  - place: x 34% · y 10% · w 58% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "អ្នកណាកាន់កាមេរ៉ាឲ្យនឹងបាន?"
  - text_ko: "Who can hold a camera still?"
  - place: x 40% · y 27% · w 52% · tail ↓ Coach
  - read_order: 2

### panel_037
- silent: true

### panel_038
- art_space: upper-left 35% (awning shade or sky) above his head
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: shout
  - text_km: "លោកគ្រូ! យើងមានអ្នកថតហើយ!"
  - text_ko: "Coach! We have a Cameraman!"
  - place: x 28% · y 14% · w 46% · tail ↓ Theara
  - read_order: 1

### panel_039
- art_space: top band, 25% across, awning shade, for the laughter word
- gap_after: 0
- sfx_1:
  - text_km: "ហាហាហា!"
  - place: x 50% · y 12% · size 8.5% · rot -4

### panel_040
- silent: true

### panel_041
- art_space: top-right 33% (sky or awning shade) above the Coach's head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: shout
  - text_km: "ឯង។ កាន់ឲ្យនឹង។"
  - text_ko: "You. Hold it still."
  - place: x 70% · y 13% · w 44% · tail ↙ Coach
  - read_order: 1

### panel_042
- art_space: upper-right 28% (sky or awning), above his shoulder, small bubble
- gap_after: 120
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "បាទ លោកគ្រូ។"
  - text_ko: "Yes, Coach."
  - place: x 72% · y 12% · w 38% · tail ↓ Visal
  - read_order: 1

### panel_043
- art_space: two zones: upper-right 28% above Visal's head (small bubble) and a small calm zone (about 20%) beside the desk corner for the tone
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 74% · y 13% · w 28% · tail ↓ Visal
  - read_order: 1
- sfx_1:
  - text_km: "ប៊ីប ប៊ីប"
  - place: x 24% · y 52% · size 4.5% · rot -3

### panel_044
- silent: true

### panel_045
- art_space: calm zone (about 20%) above the exhaust haze, plain dusk sky or dim ground, for the sound word
- gap_after: 0
- sfx_1:
  - text_km: "ដឺរ ដឺរ"
  - place: x 30% · y 30% · size 5% · rot -2

### panel_046
- art_space: top-right 33% (dark wall) for the bubble, on the side of the wire; small calm zone beside the Brick (about 15%) for the tiny sound
- gap_after: 0
- bubble_1:
  - speaker: Chanthy (recording)
  - type: playback
  - text_km: "ទំព័រដប់ពីរ។ អូខេ? អូខេ។"
  - text_ko: "Page twelve. OK? OK."
  - place: x 68% · y 14% · w 50% · tail ↓ earbud wire
  - read_order: 1
- sfx_1:
  - text_km: "កិត!"
  - place: x 26% · y 56% · size 4.5% · rot -3

### panel_047
- silent: true

### panel_048
- art_space: top 36% in two slots (above-left, then lower-right of it), calm dark wall; small calm zone (about 15%) near the Brick for the idle word
- gap_after: 0
- bubble_1:
  - speaker: Pa (recording)
  - type: playback
  - text_km: "កូន ប្រាប់ម៉ែថា ប៉ាមកយឺត។"
  - text_ko: "Kon, tell Mae Pa will be late."
  - place: x 32% · y 10% · w 52% · tail ↓ earbud wire
  - read_order: 1
- bubble_2:
  - speaker: Pa (recording)
  - type: playback
  - text_km: "…អត់ទេ។ ចាំប៉ាប្រាប់ម៉ែខ្លួនឯង។"
  - text_ko: "…No. Pa will tell her himself."
  - place: x 62% · y 25% · w 56% · tail ↓ earbud wire
  - read_order: 2
- sfx_1:
  - text_km: "ដឺរ ដឺរ"
  - place: x 24% · y 62% · size 5% · rot -2

### panel_049
- silent: true
- gap_after: 200

### panel_050
- art_space: upper-left 30%, plain blackboard-side wall above her head
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ម៉ោងដប់ ហាសិបពីរ។"
  - text_ko: "Ten fifty-two."
  - place: x 30% · y 13% · w 44% · tail ↓ Rachana
  - read_order: 1

### panel_051
- art_space: two slots on the upper 40%, upper-left and upper-right, plain wall and louvre band
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ខ្ញុំសួរអ្នកគ្រូចាន់ធីហើយ។"
  - text_ko: "I asked Teacher Chanthy."
  - place: x 30% · y 10% · w 48% · tail ↓ Rachana
  - read_order: 1
- bubble_2:
  - speaker: Rachana
  - type: dialogue
  - text_km: "គ្មានអ្នកណាចាំមួយនាទីទេ។"
  - text_ko: "Nobody remembers a minute."
  - place: x 68% · y 26% · w 48% · tail ↓ Rachana
  - read_order: 2

### panel_052
- art_space: top-right 30%, plain wall, above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ខ្ញុំរាប់។"
  - text_ko: "I count."
  - place: x 70% · y 13% · w 34% · tail ↓ Visal
  - read_order: 1

### panel_053
- art_space: top-left 30%, plain wall above Rachana
- gap_after: 120
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ខ្ញុំនឹងដឹង។"
  - text_ko: "I'll find out."
  - place: x 30% · y 13% · w 40% · tail ↓ Rachana
  - read_order: 1

### panel_054
- silent: true

### panel_055
- silent: true

### panel_056
- art_space: top-left 30%, amber sky above her head
- gap_after: 0
- bubble_1:
  - speaker: Kolab
  - type: dialogue
  - text_km: "វិសាល។"
  - text_ko: "Visal."
  - place: x 28% · y 13% · w 34% · tail ↓ Kolab
  - read_order: 1

### panel_057
- silent: true

### panel_058
- art_space: upper-left 30% (amber sky and soffit) for the faint off-panel bubble, tail toward the left edge
- gap_after: 0
- bubble_1:
  - speaker: Rachana (off-panel, below)
  - type: whisper
  - text_km: "កុលាប! តោះ!"
  - text_ko: "Kolab! Come on!"
  - place: x 28% · y 13% · w 40% · tail ↙ Rachana (off-panel, left edge)
  - read_order: 1

### panel_059
- art_space: top-right 30% (amber sky), above her head
- gap_after: 80
- bubble_1:
  - speaker: Kolab
  - type: whisper
  - text_km: "ណា… ចាំមួយនាទី។"
  - text_ko: "…One minute, Na."
  - place: x 70% · y 13% · w 38% · tail ↓ Kolab
  - read_order: 1

### panel_060
- art_space: top 28% across (amber sky and roof soffit) in two slots, upper-left first and upper-right second; bottom 10% band (plain dark tile) for the end caption box
- gap_after: 0
- bubble_1:
  - speaker: Kolab
  - type: dialogue
  - text_km: "ខ្ញុំឃើញមេដៃអ្នក។"
  - text_ko: "I saw your thumb."
  - place: x 28% · y 9% · w 44% · tail ↓ Kolab
  - read_order: 1
- bubble_2:
  - speaker: Kolab
  - type: dialogue
  - text_km: "លើដុំឥដ្ឋ។"
  - text_ko: "On the Brick."
  - place: x 72% · y 20% · w 40% · tail ↓ Kolab
  - read_order: 2
- bubble_3:
  - speaker: caption
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៣ —"
  - text_ko: "— To be continued in Episode 3 —"
  - place: x 50% · y 94% · w 70%
  - read_order: 3
