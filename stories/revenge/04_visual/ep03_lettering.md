# EP03 lettering spec: 「Two Minutes」 / «ពីរនាទី» (letterer, 2026-11-20)

- Source: `03_episode/ep03_script_final.md` (text_km = the script's KM lines, word for word; copied by script, never retyped; text_ko = the script's English working lines), `04_visual/ep03_shotlist.md` (art_space, composition), `04_visual/style-bible.md` §7 (bubble types, zones).
- **64 panels.** No text is in any image. The viewer draws every bubble, sound word and caption at the places below.
- `place`: x/y = bubble centre, w = max width, all in % of the panel; every bubble sits inside the panel (x - w/2 >= 3, x + w/2 <= 97) and inside its `art_space`. Tail arrows: `↙ ↓ ↘` = tail at the bottom (left/centre/right). Tail text after the arrow names the target.
- Types: `dialogue`; `shout` (Coach's bark P17, P34; Dara's stiff "Yes, Coach!" P20; Pich's cheer P35; Theara's announcer lines P36); `whisper` (Visal's night lines P01, P30-P32 and P63); `playback` (recorded voices: earbud P28-P29, tail to the taped earbud wire; device P49-P52, tail to the Brick in Visal's hand; the speaker label carries "(recording)", the reader's `(ចាក់ពីទូរស័ព្ទ)` label is in the script's speaker name only); `narration` (end caption P64). No `memory` bubble in EP03.
- `text_ko` holds the English working line for reference only; it is never shown.
- Sound words: the Brick's tone (ប៊ីប ប៊ីប) has the same glyph, size 4.5 and place as EP02 (P13); laughter ហាហាហា! is loud and off-panel at P13 (size 8) and tiny at P51 (size 4.5); cheers are ហ៊ោ! (P35) and ហ៊ោហ៊ា! (P44), never ហាហាហា!.
- Split bubbles (same exact words in two bubbles): P52 and P54 (after the first ។). P05, P18, P22, P36, P43 are two bubbles already in the script. P58 has three bubbles by design ("Out." stays in P58, in its small third slot).
- Kolab has no bubble, sound word or caption in this episode.
- Silent / no-bubble panels (`silent: true`): P02, P03, P04, P07, P08, P11, P12, P14, P16, P24, P25, P26, P27, P38, P39, P40, P53, P56, P59, P60, P61.
- Placement pass after the Flow images arrive: nudge only x/y/w if a bubble covers a face; never change the words.

---

### panel_001
- art_space: upper-left 30%, pale sky above the roofs on Visal's side (plain, soft gradient)
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "សាមសិបប្រាំមួយថ្ងៃ។"
  - text_ko: "Thirty-six days."
  - place: x 28% · y 12% · w 40% · tail ↓ Visal
  - read_order: 1

### panel_002
- silent: true

### panel_003
- silent: true

### panel_004
- silent: true

### panel_005
- art_space: top band about 34%, two slots on Rachana's side: first upper-right above her head, second lower toward centre-left; plain pale sky and roof edge
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ពេលថ្ងៃត្រង់។"
  - text_ko: "Noon."
  - place: x 70% · y 10% · w 36% · tail ↓ Rachana
  - read_order: 1
- bubble_2:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ទូរស័ព្ទដារាសាកថ្មហើយ អ្នកថត។"
  - text_ko: "Dara's phone is charged, Cameraman."
  - place: x 38% · y 24% · w 52% · tail ↓ Rachana
  - read_order: 2

### panel_006
- art_space: upper-right 30%, pale sky above Visal's head
- gap_after: 80
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "…បាទ។"
  - text_ko: "…Yes."
  - place: x 70% · y 13% · w 34% · tail ↓ Visal
  - read_order: 1

### panel_007
- silent: true

### panel_008
- silent: true

### panel_009
- art_space: upper-left 36%, dim striped wall above the door frame, above Pich's head
- gap_after: 0
- bubble_1:
  - speaker: Pich
  - type: dialogue
  - text_km: "បងដារា! ខ្ញុំរុំម្រាមដៃដូចបងដែរ!"
  - text_ko: "Brother Dara! I taped my fingers like you!"
  - place: x 30% · y 13% · w 50% · tail ↓ Pich
  - read_order: 1

### panel_010
- art_space: upper-right 30%, striped wall above Dara's head
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "អាឆ្កួតអើយ។ ទៅ។ ហាត់ម៉ោងបី។"
  - text_ko: "Idiot. Go. Practice at three."
  - place: x 70% · y 13% · w 46% · tail ↓ Dara
  - read_order: 1

### panel_011
- silent: true

### panel_012
- silent: true

### panel_013
- art_space: two zones: small calm zone (about 18%) beside the desk corner for the tiny tone, and upper-left 25% (dim striped wall) for the laughter word
- gap_after: 0
- sfx_1:
  - text_km: "ប៊ីប ប៊ីប"
  - place: x 24% · y 52% · size 4.5% · rot -3
- sfx_2:
  - text_km: "ហាហាហា!"
  - place: x 28% · y 12% · size 8% · rot -4

### panel_014
- silent: true

### panel_015
- art_space: upper-right 30%, dim striped wall above his head
- gap_after: 80
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 70% · y 13% · w 34% · tail ↓ Visal
  - read_order: 1

### panel_016
- silent: true

### panel_017
- art_space: top 35% across, open sky and awning edge, above his head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: shout
  - text_km: "ជ្រើសរើសក្រុម។ ពីរថ្ងៃទៀត។"
  - text_ko: "Trials. Two days."
  - place: x 50% · y 12% · w 48% · tail ↓ Coach
  - read_order: 1

### panel_018
- art_space: top 38% across in two slots: first upper-left, second upper-right and a little lower; plain sky and awning shade
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ឈ្មោះប្រធានក្រុម ចុះក្នុងបញ្ជី"
  - text_ko: "The captain's name goes on the list"
  - place: x 30% · y 10% · w 46% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ក្រោយប្រកួតចុងក្រោយ។"
  - text_ko: "after the last match."
  - place: x 70% · y 25% · w 44% · tail ↓ Coach
  - read_order: 2

### panel_019
- art_space: upper-right 32%, sky and awning, above the Coach's head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ដារា។ ឯងនៅទីមួយក្នុងបញ្ជីខ្ញុំ។"
  - text_ko: "Dara. You're first on my list."
  - place: x 70% · y 14% · w 50% · tail ↓ Coach
  - read_order: 1

### panel_020
- art_space: upper-left 32%, sky or awning shade, above Dara's head
- gap_after: 0
- bubble_1:
  - speaker: Dara
  - type: shout
  - text_km: "បាទលោកគ្រូ!"
  - text_ko: "Yes, Coach!"
  - place: x 28% · y 13% · w 40% · tail ↓ Dara
  - read_order: 1

### panel_021
- art_space: top 30% across, sky or awning shade, plain, on his side
- gap_after: 40
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "កុំឲ្យខ្ញុំមានមូលហេតុ។"
  - text_ko: "Don't give me a reason."
  - place: x 50% · y 12% · w 50% · tail ↓ Coach
  - read_order: 1

### panel_022
- art_space: top 42% across in two stacked slots above the Coach's head: first smaller and higher, second wider (about 55% of the width, two lines tall)
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "នៅទីនេះ។ កន្លែងខ្ញុំឈរ។"
  - text_ko: "Here. Where I stand."
  - place: x 32% · y 9% · w 42% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ក្រោយហាត់ យកកាមេរ៉ាទៅបន្ទប់ឧបករណ៍កីឡាវិញ។ រាល់ដង។"
  - text_ko: "Camera goes back to the equipment room after. Every time."
  - place: x 45% · y 27% · w 55% · tail ↓ Coach
  - read_order: 2

### panel_023
- art_space: upper-right 30%, sky above the net, small bubble above Visal
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "បាទ លោកគ្រូ។"
  - text_ko: "Yes, Coach."
  - place: x 72% · y 13% · w 38% · tail ↓ Visal
  - read_order: 1

### panel_024
- silent: true
- gap_after: 120

### panel_025
- silent: true
- gap_after: 80

### panel_026
- silent: true

### panel_027
- silent: true

### panel_028
- art_space: upper-left 36%, dark wall on the wire's side; wire and Brick stay unobstructed
- gap_after: 0
- bubble_1:
  - speaker: Dara (recording)
  - type: playback
  - text_km: "ទ្វារ អញយាមហើយ។"
  - text_ko: "Door's covered."
  - place: x 28% · y 13% · w 44% · tail ↓ earbud wire
  - read_order: 1

### panel_029
- art_space: upper-left 40%, dark wall, two stacked slots on the wire's side, second smaller and lower
- gap_after: 0
- bubble_1:
  - speaker: Dara (recording)
  - type: playback
  - text_km: "លឿនឡើង អ្នកថត។"
  - text_ko: "Hurry up, Cameraman."
  - place: x 30% · y 10% · w 46% · tail ↓ earbud wire
  - read_order: 1
- bubble_2:
  - speaker: Visal (recording)
  - type: playback
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 30% · y 24% · w 30% · tail ↓ earbud wire
  - read_order: 2

### panel_030
- art_space: top 32% across, dark upper wall, small whisper bubble, tail dropping toward the hand
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "ឃ្លីបទីម្ភៃបី។"
  - text_ko: "Twenty-three."
  - place: x 50% · y 12% · w 44% · tail ↓ Visal
  - read_order: 1

### panel_031
- art_space: upper-left 32%, dark wall, small whisper bubble above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "ការចាក់ មិនចំណាយអ្វីទេ។"
  - text_ko: "Playing costs nothing."
  - place: x 28% · y 13% · w 44% · tail ↓ Visal
  - read_order: 1

### panel_032
- art_space: upper-left 32%, dark wall, small whisper bubble above his head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "មិនមែនហ្វូងមនុស្សទេ។ មួយនាក់។"
  - text_ko: "Not the crowd. One."
  - place: x 28% · y 13% · w 46% · tail ↓ Visal
  - read_order: 1

### panel_033
- art_space: upper-right 32%, dark wall, bubble above his head
- gap_after: 200
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "សែសិបមួយ។ មិនលុបសូម្បីតែមួយទេ។"
  - text_ko: "Forty-one. Not one."
  - place: x 70% · y 13% · w 48% · tail ↓ Visal
  - read_order: 1

### panel_034
- art_space: bare concrete wall behind the net, about 45% of the width and 18% of the height, on the Coach's side; no bubble over players
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: shout
  - text_km: "ជ្រើសរើសក្រុម។ ចាប់ផ្ដើម។"
  - text_ko: "Trials. Start."
  - place: x 35% · y 26% · w 44% · tail ↓ Coach
  - read_order: 1

### panel_035
- art_space: two zones: upper-left 32% (open sky) above Pich for the bubble, and a small calm zone (about 20%) at the upper-right sky for the roar word
- gap_after: 0
- bubble_1:
  - speaker: Pich
  - type: shout
  - text_km: "បងដារា!"
  - text_ko: "Brother Dara!"
  - place: x 28% · y 13% · w 40% · tail ↓ Pich
  - read_order: 1
- sfx_1:
  - text_km: "ហ៊ោ!"
  - place: x 78% · y 14% · size 8% · rot 5

### panel_036
- art_space: top 36% across in two slots: first upper-left, second upper-right and a little lower; awning shade and sky
- gap_after: 0
- bubble_1:
  - speaker: Theara
  - type: shout
  - text_km: "អ្នកថត!"
  - text_ko: "Cameraman!"
  - place: x 30% · y 10% · w 40% · tail ↓ Theara
  - read_order: 1
- bubble_2:
  - speaker: Theara
  - type: shout
  - text_km: "ថតមុខខាងល្អរបស់ខ្ញុំផង!"
  - text_ko: "Get my good side!"
  - place: x 66% · y 25% · w 50% · tail ↓ Theara
  - read_order: 2

### panel_037
- art_space: upper-left 34%, awning shade or sky, above Rachana's head
- gap_after: 0
- bubble_1:
  - speaker: Rachana
  - type: dialogue
  - text_km: "ធ្វើឲ្យដារាមើលទៅល្អ អ្នកថត។"
  - text_ko: "Make Dara look good, Cameraman."
  - place: x 30% · y 13% · w 50% · tail ↓ Rachana
  - read_order: 1

### panel_038
- silent: true

### panel_039
- silent: true

### panel_040
- silent: true
- gap_after: 80

### panel_041
- art_space: upper-right 30%, sky, above Visal
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "លោកគ្រូ។ ពីរនាទី។"
  - text_ko: "Coach. Two minutes."
  - place: x 70% · y 13% · w 44% · tail ↓ Visal
  - read_order: 1

### panel_042
- art_space: two zones: the Coach's upper-left 30% (sky or awning shade) and Visal's upper-right 28% with its tail to the right frame edge
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "រឿងអ្វី?"
  - text_ko: "About what?"
  - place: x 28% · y 12% · w 36% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Visal
  - type: dialogue
  - text_km: "ប្រធានក្រុម។"
  - text_ko: "The captain."
  - place: x 74% · y 24% · w 34% · tail ↘ Visal
  - read_order: 2

### panel_043
- art_space: top 34% across in two slots on his side: first upper-left, second upper-centre-right and a little lower; plain sky
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "បន្ទប់ឧបករណ៍កីឡា។"
  - text_ko: "Equipment room."
  - place: x 30% · y 10% · w 44% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ក្រោយប្រកួតចុងក្រោយ។ ពីរនាទី។"
  - text_ko: "After the last match. Two minutes."
  - place: x 58% · y 25% · w 56% · tail ↓ Coach
  - read_order: 2

### panel_044
- art_space: calm zone about 45% wide and 16% tall in the sky above the awning, upper-right, for the cheer word
- gap_after: 0
- sfx_1:
  - text_km: "ហ៊ោហ៊ា!"
  - place: x 68% · y 12% · size 9% · rot 4

### panel_045
- art_space: upper-left 32%, sky and awning, above the Coach's head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "កាមេរ៉ា។ បន្ទប់ឧបករណ៍កីឡា។ ឥឡូវនេះ។"
  - text_ko: "Camera. Equipment room. Now."
  - place: x 28% · y 13% · w 48% · tail ↓ Coach
  - read_order: 1

### panel_046
- art_space: top band 22% across, open sky above Dara's head
- gap_after: 160
- bubble_1:
  - speaker: Dara
  - type: dialogue
  - text_km: "លឿនឡើង អ្នកថត។"
  - text_ko: "Hurry up, Cameraman."
  - place: x 50% · y 10% · w 48% · tail ↓ Dara
  - read_order: 1

### panel_047
- art_space: top 34% across, bare upper wall above the door and shelves, on the Coach's side (upper-left); shelves and faces stay clear
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ពីរនាទីរបស់ឯង។"
  - text_ko: "Your two minutes."
  - place: x 30% · y 13% · w 44% · tail ↓ Coach
  - read_order: 1

### panel_048
- art_space: upper-right 32%, bare dim wall above the shelf, small bubble above Visal's head
- gap_after: 0
- bubble_1:
  - speaker: Visal
  - type: dialogue
  - text_km: "សូមស្តាប់។"
  - text_ko: "Listen."
  - place: x 72% · y 13% · w 38% · tail ↓ Visal
  - read_order: 1

### panel_049
- art_space: upper-right 36%, dark shelf wall directly above the Brick so the device tail points down to it; Brick and thumb unobstructed
- gap_after: 0
- bubble_1:
  - speaker: Dara (recording)
  - type: playback
  - text_km: "ទ្វារ អញយាមហើយ។"
  - text_ko: "Door's covered."
  - place: x 70% · y 14% · w 46% · tail ↓ Brick
  - read_order: 1

### panel_050
- art_space: upper-right 32%, dark shelf wall, tail dropping to the Brick at the lower-right
- gap_after: 0
- bubble_1:
  - speaker: Dara (recording)
  - type: playback
  - text_km: "លឿនឡើង អ្នកថត។"
  - text_ko: "Hurry up, Cameraman."
  - place: x 70% · y 14% · w 46% · tail ↘ Brick
  - read_order: 1

### panel_051
- art_space: two zones: upper-centre 36% (dark shelf wall) above the Brick for the bubble, and a small calm zone (about 15%) on the dusty floor at the lower-right beside the Brick for the tiny laughter word
- gap_after: 0
- bubble_1:
  - speaker: Visal (recording)
  - type: playback
  - text_km: "ថត។"
  - text_ko: "Rolling."
  - place: x 50% · y 13% · w 34% · tail ↓ Brick
  - read_order: 1
- sfx_1:
  - text_km: "ហាហាហា!"
  - place: x 78% · y 78% · size 4.5% · rot 3

### panel_052
- art_space: upper-right 42% across and about 38% tall, dark shelf wall directly above the Brick, two stacked bubbles; the Coach's face stays at left-centre below
- gap_after: 0
- bubble_1:
  - speaker: Dara (recording)
  - type: playback
  - text_km: "ធូរចិត្តទៅ។"
  - text_ko: "Relax. Even upstairs just walks past. (part 1 of 2)"
  - place: x 74% · y 10% · w 40% · tail ↓ Brick
  - read_order: 1
- bubble_2:
  - speaker: Dara (recording)
  - type: playback
  - text_km: "សូម្បីតែនៅជាន់លើ ក៏គេគ្រាន់តែដើរកាត់ដែរ។"
  - text_ko: "Relax. Even upstairs just walks past. (part 2 of 2)"
  - place: x 76% · y 27% · w 42% · tail ↓ Brick
  - read_order: 2

### panel_053
- silent: true
- gap_after: 200

### panel_054
- art_space: top 36% across, bare upper wall above the shelf, two slots: upper-left, then upper-right a little lower; plain dark
- gap_after: 80
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ប្រធានក្រុមត្រូវស្អាតស្អំ។"
  - text_ko: "A captain is clean, or he is nothing. (part 1 of 2)"
  - place: x 32% · y 10% · w 52% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "បើមិនអ៊ីចឹង គឺគ្មានអ្វីទេ។"
  - text_ko: "A captain is clean, or he is nothing. (part 2 of 2)"
  - place: x 66% · y 25% · w 52% · tail ↓ Coach
  - read_order: 2

### panel_055
- art_space: upper-left 34%, bare upper wall above the door, above the Coach's head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "អ្នកណានៅជាន់លើ?"
  - text_ko: "Who is upstairs?"
  - place: x 30% · y 13% · w 44% · tail ↓ Coach
  - read_order: 1

### panel_056
- silent: true

### panel_057
- art_space: top 34% across in two slots: first upper-left above the Coach, second upper-right and lower above Visal
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ហើយឯងជាអ្នកថត។"
  - text_ko: "And you held the camera."
  - place: x 30% · y 10% · w 46% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Visal
  - type: dialogue
  - text_km: "បាទ។"
  - text_ko: "Yes."
  - place: x 72% · y 25% · w 30% · tail ↓ Visal
  - read_order: 2

### panel_058
- art_space: top 38% across: first slot upper-left (Coach), second upper-right and lower (Visal), small third slot below the first on the left for 'Out.'
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "អ្នកណាទៀតបានស្តាប់?"
  - text_ko: "Who else has heard this?"
  - place: x 30% · y 9% · w 48% · tail ↓ Coach
  - read_order: 1
- bubble_2:
  - speaker: Visal
  - type: dialogue
  - text_km: "មានតែលោកគ្រូ។"
  - text_ko: "Only you, Coach."
  - place: x 70% · y 21% · w 38% · tail ↓ Visal
  - read_order: 2
- bubble_3:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ចេញទៅ។"
  - text_ko: "Out."
  - place: x 28% · y 31% · w 30% · tail ↓ Coach
  - read_order: 3

### panel_059
- silent: true
- gap_after: 40

### panel_060
- silent: true

### panel_061
- silent: true

### panel_062
- art_space: top 34% across, sky and awning edge, above the Coach's head
- gap_after: 0
- bubble_1:
  - speaker: Coach Tola
  - type: dialogue
  - text_km: "ស៊ុម ដារា។ ចូលការិយាល័យខ្ញុំ។"
  - text_ko: "Sum Dara. My office."
  - place: x 40% · y 12% · w 56% · tail ↓ Coach
  - read_order: 1

### panel_063
- art_space: upper-right 30%, open sky or bare wall above Visal, small whisper bubble with its tail dropping to him
- gap_after: 120
- bubble_1:
  - speaker: Visal
  - type: whisper
  - text_km: "សែសិប។"
  - text_ko: "Forty."
  - place: x 72% · y 13% · w 28% · tail ↓ Visal
  - read_order: 1

### panel_064
- art_space: bottom 12% across, plain dark concrete court floor and shadow, for the end caption box
- gap_after: 0
- bubble_1:
  - speaker: caption
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៤ —"
  - text_ko: "— To be continued in Episode 4 —"
  - place: x 50% · y 94% · w 70%
  - read_order: 1
