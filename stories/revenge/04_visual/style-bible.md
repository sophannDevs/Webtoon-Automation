# style-bible.md: 「Play It Back」 (Story 5 `revenge`, v1)

- Author: art-director · 2026-11-20 · working language English. Readers see only Khmer; **images carry no text of any kind**.
- Inputs: `00_input/brief.md` (LOCKED package A "The Cameraman"), `02_story/world.md` (§2-3 LOC tokens, §2-2 screen
  direction, §5-2 the phone, §7-3 production taboos, §9 clock, §10 visual tone), `02_story/characters.md` (§15 tokens,
  colour reservations), `02_story/glossary_km.md`. Skills: `webtoon-panel-breakdown` B, `webtoon-flow-handoff`,
  `webtoon-khmer-edition`.
- Mode: **Flow-by-hand** (the user draws every image in Google Flow; no Codex) + **Khmer edition** (the viewer draws the
  bubbles and writes the Khmer; images stay empty where bubbles will go).
- This file is the single source of truth for: prompt-smith (panel prompts), ref-sheet-artist (reference sheets),
  panel-director (shot list, `scene_id` ↔ `LOC_*`), letterer (`art_space`, bubble places), panel-validator (C3 text-free
  check). Companion: `04_visual/character-sheets.md`.
- Nothing from `rule4`, `poison` or `umbrella` is reused.

---

## 1. Art style (작화 스타일)

- **One line:** realistic, clean Korean-webtoon school-drama rendering in a Cambodian provincial setting. Cold, quiet,
  tense; a thriller told with faces, hands, light and silence.
- **Lineart:** crisp, fine, even-weight ink line; slightly heavier on the outer silhouette; no sketchy or painterly
  strokes. Faces drawn with precise small features (eyes, mouth corners) because the whole story is read in faces.
- **Colour / shading:** soft cel shading with gentle gradients on skin and cloth; hard-edged shadow shapes only where the
  light is hard (noon stripes, the one bulb). No heavy texture, no grain, no comic halftone.
- **Detail level:** medium-high on faces, hands and the signature props (the old phone, the tape, the bell fob); medium on
  rooms (readable architecture, lived-in clutter); low and calm on any area reserved for a bubble (§7).
- **Reference mood:** the controlled, quiet-menace school thrillers of Korean webtoons; light and tone, not cartoon
  exaggeration. Faces never go chibi, never go manga-sparkle. Sweat, a held breath, a tightened jaw carry the drama.
- **Rendering of people:** natural proportions, real Southeast-Asian (Cambodian) faces and warm brown skin values, different
  from character to character (see character-sheets §0). Hair has believable weight (straight, wavy, buzzed).
- **Rating 15+:** no injuries, blood or blows ever drawn; no sexual content; no self-harm. Pain is shown as aftermath
  (a wet bag, a missing chair, a closed door), silence and faces (world §7-3).

## 2. Palette (색감/팔레트)

### 2-1. Master palette

| Role | Colour | HEX | Use |
|---|---|---|---|
| School wall | pale ochre-yellow plaster | #E3C97A (shadow side #BFA55C) | All Block A/B walls |
| School trim | faded teal | #4E8A86 (deep #2F5F5C) | Louvres, doors, railings, wall band, the plain round badge |
| Roof / brick | red-brown tile | #8C4A3A | Roof edge, brick |
| Yard earth | pale dust | #CDB48F | Yard, court edges, shed floor dust |
| Tamarind leaf | deep cool blue-green | #2F4A38 | Twin tamarinds. **Always darker and bluer than the olive**, never khaki, never yellow-green |
| Uniform shirt | warm off-white | #F2F0EA | All white school shirts |
| Uniform navy | ink navy | #1F2A44 | Trousers, skirts, PE shorts |
| Sky / noon glare | bleached blue-white | #DDE8EC (sky #8FB8D6) | Exteriors at midday |
| Interior shadow | cool teal-grey | #46585A | Shadow in every classroom / office |
| Cream (New Hall) | warm cream | #EDE3CF | Hall walls, backdrop cloth, **ribbon bows** |
| Hall gold | muted gold | #C9A34E | Hall trim, bangle, necklaces |
| Soft red | muted coral-red | #B84A4A | Paper flowers in the hall (not pink), Tola's lanyard |
| Night | blue-black | #0F1623 | Window of the Hero's room, night sky |
| Bulb | dim warm yellow | #E8C77A | The one bare bulb (the Hero's turn) |
| **OLIVE (reserved)** | dull olive-green | **#6B7A3A** | **The Hero's old phone, and nothing else in the entire series** |
| **PEARL-PINK (reserved)** | pale pearl-pink | **#E8C4C4** | **Rachana's hair clip and phone case, and nothing else** |
| Job phone | matte black | #1A1A1A | Dara's phone |
| Brass | brass | #B08D57 | The Deputy's bell-shaped key fob |

Character accent palettes (one accent each, never shared) live in `character-sheets.md`.

### 2-2. The two reserved colours (hard rules)

1. **Olive #6B7A3A = the Hero's old phone only.** No olive or khaki shirt, bag, tape, cloth, wall, plant, door, motorbike,
   tuk-tuk, extra's accessory or background object anywhere. Foliage uses the deep blue-green (#2F4A38), shadowed, never
   olive-tinted. Readers learn "olive = the archive". When olive appears in a frame, it is the phone and the eye goes there.
2. **Pearl-pink #E8C4C4 = Rachana only** (hair clip, phone case). No pink anywhere else: no pink flowers, ribbons, shirts,
   hijab-style cloths, umbrellas, snack-cart canopies, extras' phones or school bags. Hall decor is **cream / ivory ribbons
   and soft coral-red paper flowers**, never pink. Skin blush and lipstick stay in brown/red/nude (not pink). In a crowd
   shot Rachana's clip and phone must be the only pink pixels.
3. Extras' phones are dark grey, dark blue, white or silver. Extras' bags are navy, black, grey, brown, teal. Never olive,
   never pink.
4. A third rule that protects the first two: the **teal** of the school (louvres, railings, badges) must stay clearly
   blue-green and the **ochre** wall clearly yellow, so neither drifts towards olive.

### 2-3. Mood palettes (by state)

| State | Saturation / value | Palette direction |
|---|---|---|
| Hot exterior (yard, gate, court, shed edge) | high-ish saturation, high value, bleached highlights | warm white glare, dusty ochre, hard blue-white sky, deep tight shadows |
| Cool interior (classroom morning, office, deputy room) | desaturated, mid-low value | teal-grey shadows, ochre walls dulled, cold white tube light, one cold air-conditioner room |
| The job (11C midday) | high contrast, restricted | near-black room with hard white stripes; skin looks colder than outside |
| Aftermath (16:30) | warm, low-contrast, melancholic | long amber light, tall soft shadows, quiet |
| The Hero alone (night) | very low value, one warm spot | blue-black, single dim bulb, the phone's olive back catching the only light |
| The Hall, Day 40 | warm, bright, proud, slightly too perfect | cream and gold, soft coral-red flowers; at the freeze the colour drains from Rachana's and Bopha's faces |
| Playback | desaturated cool cast | blue-grey wash on listeners' faces (see §3) |

## 3. Mood, tone and lighting (분위기/톤)

**Mood:** a cold, controlled thriller inside a hot, bright town. The bullies live in warmth and noise; the Hero lives in
cold, quiet, exact space. The reader should feel the air-conditioner room and the shut-louvre room as colder than the sun.

### 3-1. Core grammar: hot outside, cold inside

- **Outside = hot:** hard sun, bleached sky, dust haze, warm ochre, strong shadows, heat shimmer at midday.
- **Inside = cold and controlled:** cooler white-teal light, soft teal-grey shadows, still air (fans blurred), faces paler.
- **Doorways and windows are the border.** A frame that holds both (a door to the corridor) shows the contrast: warm
  white rectangle outside, cool dim room inside.
- **Exceptions:** the New Hall is warm and proud inside (cream and gold) because it is the school's face; the cold arrives
  only as the freeze on faces. The Hero's room at night is cold blue with one warm bulb.

### 3-2. Lighting modes (paste the phrase into the prompt)

| Code | When | Prompt phrase |
|---|---|---|
| L1 LINE-UP | 07:00 | soft golden morning haze, long gentle shadows across a dusty yard, cool fresh air, pale gold light |
| L2 CLASS-MORNING | 07:00-11:00, 14:00-17:00 | cool even daylight from teal louvre windows, soft teal-grey shadows, ceiling fans blurred, calm and still |
| L3 JOB-NOON | 12:00-13:55, 11C midday | every louvre shut, hard white noon light cutting through the slats in thin bright stripes across desks and floor like bars, dust floating in the light, room dim and hot, high contrast |
| L4 EXTERIOR-NOON | midday outside | flat white-hot noon glare, bleached sky, hard short shadows, heat haze, dusty |
| L5 OFFICE-COLD | Staff Office, Deputy room | cold white-blue tube light and air-conditioned stillness, desaturated, neat hard-edged shadows (Deputy room: closed blinds, one cold light) |
| L6 AMBER-1630 | 16:30-16:45 | long warm amber low sun, tall soft shadows, golden dust, quiet melancholic aftermath |
| L7 NIGHT-BULB | the Hero's room | one bare dim bulb, deep blue-black shadows, a blue-black window, a small warm pool of light |
| L8 HALL-DAY40 | New Hall, evening | warm cream chandelier-style light, soft gold, bright and proud, slightly too perfect |
| L9 PLAYBACK | any listener while a recorded voice plays | add: cool desaturated blue-grey cast on the listeners' faces, the rest of the frame unchanged |

- **Light grammar of the story:** the job = bars of light (a cage); exposure = even, bright, public light with nowhere to
  hide; the Hero's turn = one bulb, deep shadow, the phone's back catching light.
- **Rim / back light** only for the Hero's isolation beats; never on the villains in power poses (they get flat, clean light).
- **Playback look (L9) is a colour cast only.** Never draw sound waves, music notes, audio icons, glowing screens with an
  interface, or text. A voice from the phone = the phone lying face-up for once, the listeners turned toward it.

## 4. Canvas and aspect ratio (화면비/캔버스)

- **Default aspect ratio: 9:16** (portrait). This is the line the Flow handoff page reads; every panel card uses 9:16
  unless its block says otherwise.
- Other ratios (only when the shot list marks the size; Flow offers the nearest if one is missing):

| Panel size (shot list `size`) | Flow ratio | Use |
|---|---|---|
| large / full-bleed / medium | **9:16** | default for all dialogue, faces, 2-shots |
| insert (hands, phone, tape, key fob) | 1:1 (or 9:16 with the object in the lower half) | the Brick plants, ECU hands |
| wide establishing (gate, yard, hall, stair view) | 16:9 only if the shot is a true horizontal; otherwise 9:16 with the scene filling the height | scene openers |
| small strip | 16:9 or 4:3 | rare |
| reference sheets | **16:9** (turnaround, expressions, props) | `refs/ref_prompts.md` |

- Vertical webtoon reading: a 9:16 panel has a calm **upper band** and a calm **lower band**; faces usually sit in the
  middle third. The upper band is the default bubble zone (§7).
- Keep subjects away from the outer 6% on every side (the viewer crops and pads slightly).
- Panel size = time (panel-breakdown): large = slow, small = fast. Panel size is a Flow ratio choice only; there is no
  borders/gutter drawing inside the image (the viewer spaces the panels).
- **Never draw panel borders, frames, gutters, speed-line frames or page layouts inside an image.**

## 5. Consistency token rules (일관성 토큰 규약)

Every panel prompt in Flow is **self-contained** (the user pastes one prompt at a time). Build it in this fixed order:

```
[1 GLOBAL STYLE LINE] + [2 LOCATION TOKEN (+ time/lighting phrase)] + [3 EACH CHARACTER'S PASTE BLOCK from
character-sheets.md, with "matching the attached reference image of <name>" for attached sheets] + [4 THIS PANEL:
framing, camera, action, emotion] + [5 BUBBLE-SPACE SENTENCE (art_space)] + [6 BLANK-SURFACE SENTENCE (if any)] +
[7 AVOID LINE]
```

### 5-1. Global style line (identical in every panel prompt)

> Clean realistic Korean-webtoon school-drama illustration, crisp fine ink lineart, soft cel shading with gentle gradients,
> cinematic framing, a Cambodian provincial public high school setting, warm Southeast-Asian skin tones, sharp readable
> faces, vertical webtoon panel.

### 5-2. Avoid line (identical ending)

- Panels: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
- Reference sheets: `Avoid: any text, labels, speech bubbles, watermark.`
- Optional extra clause that helps Flow: `no logos, no brand marks, no signs with writing, no panel borders.`

### 5-3. Rules for tokens

1. **Fixed vs variable.** Fixed (never change): hair shape/colour, eyes, build, skin value, identifying mark, uniform cut.
   Variable: expression, pose, camera, light, props in hand, time-state (Day 1 / Day 40 tape, pods, hall).
2. **Spell it out every time.** Paste the full character block even when a reference image is attached, in case Flow
   ignores the attachment.
3. **One identifying mark per face** is always visible when the face is in frame (character-sheets §0).
4. **Left/right** always means the **character's own** left/right. In reference-sheet prompts add "(the viewer's right when
   he/she faces us)". In panel prompts repeat the side word exactly as in the block.
5. **Height ratio** is stated in any two-shot: Dara (182) towers over Visal (168), Rachana (160), Kolab (155), Sophy (152).
6. **Two characters in one panel** must differ at a glance: use the separation pairs in character-sheets §11.
7. **Locations** use the LOC tokens in §6 verbatim. A scene (same `scene_id`) never changes LOC, time of day or
   indoor/outdoor; place changes happen only at a SCENE BREAK.
8. **Time-state** (Day 1 vs Day 40) is chosen per panel from §9 rule 17 and written into the prompt.

## 6. Location tokens (장소 고정 토큰, LOC_*)

The base text is world.md §2-3, refined for Flow. **Every surface that could carry text is drawn blank.** `scene_id` /
`location` in the shot list and `ep{NN}_prompts.md` must use these names exactly. Each token contains its own calm area
for bubbles; the letterer still names the exact `art_space` per panel (§7).

Common blank-surface sentence for any location (paste when the surface is visible): `Every sign, notice board, blackboard,
clock face, door plate, banner and book cover is blank and plain, with no writing.`

### LOC_CLASSROOM  (Classroom 11C, normal lesson / morning / afternoon)
- **background token:** "second-floor classroom in a Cambodian-style public high school, pale ochre-yellow plastered walls
  with a waist-high band of faded teal paint, rows of old wooden two-seat desks and benches, teal wooden louvre windows
  along one wall, a clean dark-green blackboard with no writing, a wooden teacher's desk on a low step, two slow ceiling
  fans, bare fluorescent tubes, an open door to an outdoor corridor"
- **Light:** L2 CLASS-MORNING (cool even daylight). **Time-state:** Day 1 for EP01.
- **Fixed geometry (world §2-2):** master view = from the front (teacher's desk) looking to the back: the **window wall
  (court side, louvres) is screen right**, the **door wall (corridor / yard side) is screen left**. Reverse view flips it.
  The Hero's seat = last row, window side, the single corner desk next to the last louvre window. The old phone lies on
  that desk's **window-side, board-side corner** (his top-left as he sits), face-down, lens side up, near the sill.
  Rachana row 2 aisle by the front door; Dara last row, door side (guard at the back door); Sophy row 4 window side.
- **Calm areas:** blackboard wall (clean dark-green), the wall band above the louvres, the ceiling strip, the empty floor
  between desks.
- **Blank:** blackboard clean or with soft indistinct chalk smudges only; no door numbers; no wall charts with writing.
- **Used:** daily life, the micro-win, the twist reveal at the desk.

### LOC_CLASSROOM_MIDDAY  (11C at midday, "the job" mode)
- **background token:** "the same second-floor classroom with every teal louvre window shut, hard white noon light cutting
  through the slats in thin bright stripes across the desks and floor, dust floating in the light, ceiling fans off, the
  room dim and hot, the corridor door half closed, a clean dark-green blackboard with no writing"
- **Light:** L3 JOB-NOON. Same layout and directions as LOC_CLASSROOM.
- **Rules:** the job is **never drawn as an act** (see §9 rule 1): show the shut louvres, the half-closed door, Dara's back
  at the door, the Hero's hand holding a large matte-black phone, the watchers' faces, the empty hours' silence. The lens
  of the old phone never sees anything (face-down).
- **Calm areas:** striped blank wall, the dark ceiling, the dim blackboard.

### LOC_CORRIDOR  (Block B open-air corridor, 2F, mid-block, outside 11C)
- **background token:** "long open-air second-floor school corridor, pale ochre wall with teal wooden doors on one side,
  a waist-high painted teal metal railing on the other, a view down onto a dusty school yard with two large tamarind trees,
  red-brown tiled roof edge overhead, cut-out shadows of the railing across the floor"
- **Light:** exterior-side L4 (noon) or L6 (16:30); the door side stays cooler. **Direction:** the railing is on the yard
  side; the corridor is a stage that the yard can see.
- **Calm areas:** the blank wall above the teal doors, the sky past the railing, the roof soffit.
- **Blank:** door plates, notice boards, class signs all blank. Used for threats in passing, lookout, Sophy looking away.

### LOC_STAIR  (separate plate: Block B main stair and corridor head, 2F top landing)
- **background token (STAIR_TOP, camera on the 2F landing looking down the flight):** "open-air concrete school staircase
  at the head of a second-floor corridor, a short flight of worn grey concrete steps turning at a mid landing and
  continuing down to the ground floor, a waist-high teal painted metal railing on the open side showing the dusty yard and
  a tamarind trunk beyond, a whitewashed plain wall on the other side, red-brown tiled roof edge overhead, the top of the
  corridor with a teal door glimpsed at the landing"
- **STAIR_LOW (camera at the mid/ground landing looking up):** "the same worn grey concrete staircase seen from below,
  steps rising to a bright top landing, teal railing, whitewashed wall, a rectangle of warm light at the top"
- **Light:** L6 AMBER-1630 (16:40): low amber sun from the yard side across the steps, the stairwell wall in cool shade.
  A stair is a place where **sound arrives before the face** (a laugh rising from below): keep the lower flight dim.
- **Geometry rule:** the stair is at the **11A end** of Block B, the corridor-head is *not* 11C's door. Never show 11C's
  door in the same frame as the stair; to show the walk, cut between LOC_CORRIDOR and LOC_STAIR. Descent is always
  **top-left to bottom-right** of the frame in STAIR_TOP (so the Hero walking down reads as "going toward her").
- **Calm areas:** the whitewashed wall (large, plain, ideal bubble zone), the sky beyond the railing, the shaded underside
  of the roof.
- **Blank:** no wall paint lettering, no floor numbers, no fire-notice plates. Used for EP01 B6-B7 (P49-P53).

### LOC_YARD  (the yard, twin tamarinds, the bell)
- **background token:** "wide dusty pale-earth school yard between low two-storey school blocks, two large old tamarind
  trees standing side by side in the middle with whitewashed trunks up to waist height and a low round concrete bench
  around each, an old iron wheel rim hanging from a low branch of one tree with a steel bar hanging beside it, students in
  white shirts and navy, wide open sky"
- **Light:** L1 (07:00 line-up) or L4/L6. **Time-state markers (Day 1):** tamarind pods long and pale green; a few bare
  patches of dust; New Hall doors closed.
- **Rules:** the bell = the iron wheel rim mid-swing with the steel bar, **not a church bell**. A bare flagpole off to the
  side or out of frame; never a flag.
- **Calm areas:** the open sky over the yard, the pale-earth foreground, the school-block wall in shade.

### LOC_STAFF_OFFICE  (ground-floor teachers' room)
- **background token:** "ground-floor teachers' room, long tables pushed together with mismatched plastic chairs, stacks of
  plain exercise books with blank covers, a metal cabinet with a padlocked drawer, a standing fan, a round wall clock with
  plain tick marks and no numerals, a blank notice board, a water dispenser, louvre windows, an inner door to a smaller
  office"
- **Light:** L5 OFFICE-COLD. **Calm areas:** the blank wall above the cabinet, the ceiling, the empty table surface.
- **Used:** "sign a letter and say sorry", confiscation, adult talk. The Staff Office is **below** the 2F corridor: adults
  can hear stairs and a door (fifth-voice logic).

### LOC_DEPUTY_ROOM  (Deputy Principal's room)
- **background token:** "small inner office, a heavy dark wooden desk with a glass top over blank papers, two visitor
  chairs, a glass-front cabinet holding plain trophies and folded plain cloth, a wall air-conditioner, closed blinds, a
  framed blank certificate on the wall"
- **Light:** L5 OFFICE-COLD, the coldest set in the story (the block's only air-conditioner). The Hero sits low, the
  Deputy behind the desk. **The apology letter on the desk** is a single sheet of blank ruled lines with two blank
  signature spaces and nothing readable.
- **Calm areas:** the closed blinds, the blank wall around the framed certificate, the glass-top desk reflection.
- **Used:** cover-up; the apology letter signing (EP01 B3).

### LOC_HALL  (the New Hall)
- **background token:** "new meeting hall, cream walls with thin gold trim, a high ceiling with chandelier-style lights,
  rows of white plastic chairs with cream ribbon bows, a low stage with a plain cream backdrop cloth, plain paper-flower
  garlands in cream and soft coral-red, two tall black speakers on stands at the stage corners, an AV table with a small
  sound mixer and cables at the back of the hall"
- **Variants:**
  - **HALL_DAY40** (cold open): chairs full, ribbons, garlands, speakers set, parents in rows, the donor family in the
    front row, L8 HALL-DAY40. The cold is only in the faces at the freeze.
  - **HALL_AV** (the AV-table corner at the back): "the back corner of a hall, a long table with a small sound mixer with
    plain unlabelled knobs and cables, a tall black speaker on a stand beside it, rows of cream-ribboned chairs ahead".
  - **HALL_DAY1** (EP01 background only if seen from outside / gate): doors closed, plain, no ribbons.
- **Direction:** the stage is at the far end; the AV table is at the back, so from the AV table the camera looks toward the
  stage across all the heads. Rachana and Bopha sit in the front row.
- **Calm areas:** the high ceiling, the plain cream backdrop cloth, the cream side walls.
- **Blank:** no banner text, no stage lettering, no programme sheets legible, no clock numerals, no seat labels. **No pink**
  (ribbons cream/ivory, flowers cream and coral-red). No national flag, no royal or temple motif.

### LOC_COURT  (volleyball court)
- **background token:** "outdoor sand-coloured concrete volleyball court with a sagging net, faded painted lines, three
  tiers of low concrete bleachers in partial shade under a corrugated awning, a ball cart, the back windows of a two-storey
  school block above"
- **Light:** L4 or L6. **Calm areas:** the sky above the net, the shaded bleachers. Dara's world; the view out of 11C's
  window wall. Players in teal T-shirt / navy shorts, no numbers on jerseys.

### LOC_GATE  (school gate)
- **background token:** "wide green iron double gate in a whitewashed wall, a guard's small booth, motorbikes and bicycles
  pulling up, parents in helmets, snack carts outside under faded umbrellas, a dusty market road beyond"
- **Light:** L1 (morning arrivals) or L6. **Blank:** no school name on the wall or gate, no cart signs, no number plates on
  motorbikes (plain dark plates), no umbrella printing; **umbrellas are faded cream, grey, blue or red, never olive or pink.**
- **Calm areas:** the whitewashed wall, the sky, the pale road.

### LOC_MOTO_SHED  (moto shed)
- **background token:** "long low shed with a rusted corrugated zinc roof on steel posts, rows of parked motorbikes and
  bicycles, an oil-stained concrete floor, deep shade with bright yard light behind"
- **Light:** deep shade L5-like cool shadow in front, hot L4/L6 glare behind (a strong hot-outside / cold-inside border).
  Motorbikes: black, red, blue, grey, white; plain plates; **never olive or pink**. The Hero's old bicycle stands here.
- **Calm areas:** the dark shaded zinc roof underside, the shaded far wall. Used for private talks and the EP01 sting
  (16:45, same evening as the stair).

### LOC_STOREROOM  (second-floor storeroom, Arc 1 mid-season)
- **background token:** "disused end room on the second floor stacked with broken desks and benches, one louvre window with
  a missing slat letting in a single beam of light, a dusty floor, a door with a broken latch"
- **Light:** one beam in the dark, dust. Hiding and secret talks only; **never a bullying-act set**. Not in EP01.

### LOC_HERO_ROOM  (the Hero's room, night)
- **background token:** "corner of a small rented wooden-and-brick room at night, a thin floor mat, a low plastic table, a
  single wall socket with a frayed white charger cable, a small fan, a mosquito net folded on a hook, a bare bulb, a
  louvred window onto a dark lane"
- **Light:** L7 NIGHT-BULB. **Calm areas:** the dark window, the dark upper wall, the shadowed floor corner.
- **Rules:** the room is poor but clean and orderly, not "poverty porn". No photo of the father with readable detail.
  White wired earphones (left bud taped black) may lie on the table. The old phone's olive back catches the bulb.

### LOC token index (for panel-director's location table)

| LOC | Typical `scene_id` in EP01 | Time | Light |
|---|---|---|---|
| LOC_HALL (DAY40 / AV) | S1 cold open | Day 40 evening | L8 |
| LOC_GATE / LOC_YARD | S2 morning | 07:00 | L1 |
| LOC_CLASSROOM | S3 lesson, micro-win | morning | L2 |
| LOC_CLASSROOM_MIDDAY | S4 the job (indirect) | 12:00-13:55 | L3 |
| LOC_STAFF_OFFICE / LOC_DEPUTY_ROOM | S5 apology letter flashback | any | L5 |
| LOC_CORRIDOR | S6 passing threats, 13:50 | noon | L4 |
| LOC_STAIR | S7 victory lap, sting setup | 16:40 | L6 |
| LOC_MOTO_SHED | S8 sting | 16:45 | L6 |
| LOC_HERO_ROOM | night beat if used | night | L7 |

(The actual scene numbering belongs to panel-director; this table only fixes which LOC and light each kind of scene gets.)

## 7. Bubble space: what `art_space` means in a prompt (말풍선 시각 규약, Khmer edition)

**No bubble is ever drawn in an image.** The viewer (`km_tool.py build`) draws every bubble and writes the Khmer inside.
The image only has to **leave room**. The bubble look below is for the letterer and the viewer, not for Flow.

### 7-1. Bubble look (drawn by the viewer; letterer picks the `type`)

| `type` | Look in the viewer | Used for |
|---|---|---|
| dialogue | round white bubble, dark outline, tail to the speaker | normal speech |
| thought | cloud / soft dotted outline, no tail | Visal's rare inner lines |
| shout | spiked burst bubble, bold Khmer | Theara's announcer lines, a bark from the Coach |
| narration | square caption box, no tail | "Forty days earlier." and the ending caption |
| memory | blue blurred edge (flashback of a recorded scene) | Staff Office / Deputy room flashback |
| playback (device tail) | bubble with a **device-style tail** pointing at the olive phone, or on Day 40 at the hall speakers | a recorded voice |
| whisper | smaller, lighter bubble (letterer's choice) | Sophy |

Because the playback tail points at the olive phone, **the phone must be visible and unobstructed** in a playback panel,
with calm space above or beside it (see 7-4).

### 7-2. What "an empty area for a speech bubble" means in a Flow prompt

It means **calm, low-detail, natural background**, and **nothing drawn there that looks like a bubble.**

- The area is ordinary scene surface: wall, sky, ceiling, dark blackboard, shadow, floor. Slight light gradients are good.
- It contains **no face, hand, phone, or key object** (the Brick, tape, fob) and no strong pattern or hard-edged highlight.
- It is **not** a drawn white shape, oval, cloud, box, circle, frame, rounded rectangle, label or empty "balloon". Never ask
  for "a blank speech bubble"; Flow will draw one and the check (C3) fails.
- It is **not pure flat white** (that reads like a bubble). Keep a natural tone (wall colour, soft shadow, sky gradient).
- The size is **at least 45% of the frame width and about 18% of the frame height per bubble**; for two bubbles, two
  separate areas or one band about 35% tall. Tails will point from the bubble to the speaker, so keep the area **on the
  same side as the speaker, above or beside his or her head**, not on the far side of the frame.
- Reading order is top to bottom; a first bubble sits higher than the second.

### 7-3. The standard bubble-space sentence (prompt-smith copies it, filling the placeholder from the lettering spec)

> `Keep <ZONE> of the frame as calm, empty background (<what is there: e.g. plain ochre wall / open sky / dark
> ceiling>) with no faces, hands or important details there, and no drawn shapes, outlines or writing; a speech bubble
> will be added there later.`

Translate the lettering spec's `place` (`x`/`y` = bubble centre, `w` = width, in % of the panel) into `<ZONE>` words:

| `place` | Words for `<ZONE>` |
|---|---|
| y < 25% | the top band (about the top quarter) |
| y 25-45% | the upper third |
| y 45-65% | the middle band (only if composition leaves it open) |
| y > 65% | the lower third |
| x < 35% | left side / x 35-65% centre / x > 65% right side |
| `w` ≥ 70% | spanning most of the width |
| `w` 40-69% | about half the width |

Examples: `Keep the top-right third of the frame ...`, `Keep the top band across the full width ...`, `Keep the lower-left corner ...`.
If the lettering spec gives `art_space` in Korean prose, prompt-smith translates it into this sentence.

### 7-4. Placement rules for the shot list and prompts

1. **Compose for the bubble first.** panel-director places faces in the middle or lower-opposite zone so the upper band is
   free; a 9:16 panel with a face at 40-75% height always leaves the top 25% free.
2. **Two bubbles** in one panel: two calm zones, ideally one upper and one lower on opposite sides, or one wide top band.
   Maximum two bubbles per panel; more lines split into extra panels (panel-breakdown).
3. **Playback panels:** the olive phone is in the lower or side part of the frame, face-up for once (or face-down with its
   olive edge visible), and the calm zone is the wall or ceiling **directly above or beside it** so the device tail reads.
   On Day 40 the calm zone sits beside a tall black speaker.
4. **Narration caption boxes** (`narration`): the top band, or a lower strip; the calm zone has no detail across its width.
5. **Bubbles never sit over:** faces, the Brick, the tape, the fob, the beam of light on the phone, clasped or key hands.
6. **Silent panels** (`silent: true`) have no `art_space` and no bubble sentence; the composition is free.
7. **Env text** (writing on an object: a note, a receipt, a sign, a phone screen) = the object is drawn **blank and large
   enough** in the frame with a plain surface facing the camera; the viewer writes on it. State "a blank sheet of paper"
   / "a plain blank notice board" / "a phone with a dark blank screen" in the prompt.
8. **SFX lettering** (bell, fob, beads, bangle, pen): leave a calm zone near the source of the sound, about 20% of the
   frame, unless the shot list says the sound has no visual (then the sound is carried by a bubble-free beat).

## 8. No-text rules and prohibitions (금지/주의)

### 8-1. Absolute rule: no text in any image

No letters (Khmer, Latin, Korean, Chinese), numbers, digits, symbols that read as writing, speech bubbles, thought clouds,
captions, sound-effect lettering, titles, logos, watermarks, signatures or UI. If Flow draws any, the card is a REGEN
(C3 text-free check).

Write these surfaces as **blank** in every prompt (they are where Flow likes to invent writing):
- blackboard and whiteboards (clean dark green, or soft indistinct smudges only)
- school gate, wall plaque, school name, banners, hall stage backdrop, ceremony programme sheets
- door plates, class labels, notice boards (blank pinned paper), wall charts, calendars, wall clock faces (ticks, no numerals)
- phone screens (dark, or a plain soft glow; never an interface, app, photo or chat)
- apology letter, handout sheets, exercise-book covers, receipts, notes (blank ruled lines at most)
- uniform badges (plain teal round shape), T-shirts and PE kit (no prints, no jersey numbers), caps
- motorbike number plates (plain dark plate), tuk-tuks, shop and snack-cart signs, umbrellas (plain colour)
- wristwatch and sound-mixer controls (blank face, unlabelled knobs), clipboards, whistle, bags (no brand marks)
- the Brick: **no logo, no brand** on the body, an orange round sticker with **no print**
- packaging, bottles, food (no labels)

### 8-2. Other prohibitions

- **No watermark**, no signature, no frame/border/gutter inside the image, no chibi / SD deformation.
- **No scene-irrelevant location jumps** inside a `scene_id` (LOC rule §5-3.7).
- **No pagoda, monk, flag (including the flagpole carrying a flag), Angkor or royal motif, or religious shrine** in any scene
  where bullying, cover-up or villainy happens (world §7-3). The flagpole stays bare or off-frame.
- **No injury, blood, bruise, blows, restraint, spitting, thrown objects hitting a person, ripped clothes.** No sexual
  content, no nudity, no self-harm, no weapon. Bullying = faces, silence, the Hero holding a phone, aftermath.
- **No real school, person, brand, or case.**
- **No how-to imagery** for recording, hiding or posting (D14): no phone menus, no screens with interface, no settings,
  no hands demonstrating steps; at most **one thumb on the side of the phone**.
- **No olive anywhere but the Hero's old phone; no pink anywhere but Rachana** (§2-2).

## 9. Visual rules (numbered; panel-director, prompt-smith, panel-validator all apply them)

1. **The act is never in a panel.** At the job, frame the Hero holding the Lackey's black phone, the watchers' faces, the
   shut louvres, the door, Dara's back. Never what a lens sees, never the target being filmed, never a replay image.
2. **The Hero never touches anyone** and nobody is touched on screen. Hands are shown holding, hovering, folded, clenched
   or empty; never hitting, shoving, grabbing.
3. **The old phone is always face-down** on the Hero's desk, lens side up, on the window-side, board-side corner (his
   top-left as he sits), near the sill. Same spot in every classroom shot. Face-up only in the playback beat and the
   night beat. In his left shirt pocket only the top ~2 cm of the olive edge shows.
4. **The old phone's scale is fixed:** about 13 cm tall, 6.5 cm wide, 1.3 cm thick: visibly chunkier than other phones;
   it fits inside his palm with fingers wrapped; Dara's black phone (16.5 cm) is larger than Visal's hand; Rachana's pink
   phone (15 cm) is slim.
5. **Olive is the Hero's phone only; pearl-pink is Rachana only** (§2-2). The tape on the phone is yellowed clear tape,
   not olive.
6. **Hot outside, cold inside** (§3-1). Doorway frames show both. Exposure scenes use even, bright, public light.
7. **The job = bars of light.** Noon stripes through shut louvres are the cage motif; use them every time 11C is at midday
   and nowhere else.
8. **Sound is shown with bodies, not symbols.** A bell = the iron wheel rim mid-swing with the steel bar; a fan = blurred
   blades; the fob = a close shot of the brass bell-shaped fob swinging; beads = the beaded cord swinging; a bangle = a
   gold bangle sliding down a wrist; a pen tap = a pen mid-tap. Never draw waves, notes, lines of "sound", or "BANG" marks.
9. **Playback look:** a cool desaturated blue-grey cast on the listeners' faces, the rest of the frame unchanged; the
   listeners turn their faces toward the olive phone or toward the speakers; the phone lies face-up.
10. **The reaction ladder is faces.** In an exposure panel show a crowd of distinct faces from calm to collapse (the last
    rung is the target's), each extra different in hair and skin value; the one person who did not deserve to fall is
    shown with an unmistakably pained, not pleased, face (world R1 cost).
11. **The Hero is never shown grinning or sneering.** Default blank half-lidded; at most the corner of his mouth moves.
    Eyes wide and raw only in his guilt beat. He is small in groups, stands at edges, sits in corners.
12. **Rachana is never drawn losing control before the cold open.** Posture upright, chin slightly raised, a polite closed
    smile to adults. The crack (eyes widening, colour draining) belongs to the Day 40 freeze.
13. **Dara is always the tallest student in the frame**; his white finger tape on the right hand is visible whenever his
    hands are in shot.
14. **Corridor and yard are a stage.** From the 2F corridor you can look down on the yard and from the yard up at the
    corridor; the railing is always on the yard side. Use railing shadows on the floor.
15. **Classroom geometry never flips mid-scene:** master view from the front: windows (court side) screen right, door wall
    (corridor side) screen left. Cross-line cuts are used only with a deliberate reverse (windows left).
16. **The stair is its own place** (LOC_STAIR): never merge it with the corridor frame; STAIR_TOP descent runs top-left to
    bottom-right; the stairwell is cooler and darker than the amber yard.
17. **Time-state is stated in every prompt** (EP01 has two):
    - **DAY 1** (main body): tamarind pods long and pale green; the New Hall closed and plain; the old phone's tape a
      single clean yellowed strip; early dry season, clear sky, morning haze, cool 07:00 line-up.
    - **DAY 40** (cold open at the hall): pods dark brown with many fallen on the yard; the New Hall full with cream
      ribbons and paper-flower garlands, speakers set; the old phone **re-taped with a second strip**, edges of the first
      lifting; dry light, a cool evening for the event.
18. **Time of day = light:** 07:00 soft gold haze; 12:00 white-hot glare / hard stripes; 16:30-16:45 long amber; night one
    bulb. A clock is never needed: light and shadow length carry it.
19. **The Deputy's room is the coldest set**, the hall the warmest; cold or heat pushes the viewer's body before the dialogue
    does.
20. **Uniform is a constant:** white short-sleeved shirt; boys navy trousers; girls navy knee-length pleated skirt; a plain
    teal round badge on the upper left chest (no lettering). Only the character-sheet accents differ. PE: teal T-shirt,
    navy shorts, Dara only on court.
21. **Extras are real and varied** but never carry the reserved colours or any text. They keep simple faces, some turned
    away; backgrounds use plain white shirts with navy bottoms; no background student wears an item that could be read as
    Visal's or Rachana's signature.
22. **Silence is composition.** Reaction beats and the twist panel (clip count) use large, quiet, uncluttered frames with a
    still subject; no motion lines, no emphasis marks, no screen-shake.
23. **Camera:** eye-level by default; a slightly low angle only on a power move (Rachana at the stair, the Deputy behind
    the desk); a slightly high angle only on the Hero in a corner. No extreme fisheye or Dutch tilt in Arc 1.
24. **Hands carry the plot.** Whenever the phone, the tape, the tiffin, the fob, the bangle or the finger tape matters to
    the beat, the shot includes the hands and the object large enough to read without text.
25. **Every panel keeps one calm bubble zone unless it is silent** (§7). A panel with faces and bubbles that cannot both fit
    is split into two panels.
26. **Cambodian-friendly, not exoticised:** realistic modern provincial school life, no tourist imagery, no traditional
    costume, no temple backgrounds; scooters, tuk-tuks, iced-coffee carts, dust and a brown river off at the edge of town.

## 10. Hand-offs

- **ref-sheet-artist:** `character-sheets.md` §0 (global reference-sheet spec), §1-10 per-character specs, §12 priority
  order. Write `refs/ref_prompts.md`; no rendering.
- **panel-director:** use LOC names verbatim in every panel; obey §6 geometry, §7-4, §9 rules 1, 3, 14-16, 25.
- **letterer:** `art_space` per §7-2/7-3 vocabulary, bubble `type`s per §7-1; playback tail points at the olive phone (or
  the hall speakers on Day 40).
- **prompt-smith:** build prompts by §5 order; copy §5-1, §7-3, §8-1 sentences; paste character blocks and LOC tokens
  verbatim; `aspect:` from §4; `attach:` per character-sheets §13.
- **panel-validator:** C3 = text-free and bubble-ready (§7-2, §8-1); C-colour check = no olive / pink outside the reserved
  uses (§2-2); also checks rules 1, 3, 15, 17 on every panel.
- Change log: v1 (2026-11-20) first version. Tokens here are not to be changed after panels are drawn without telling
  prompt-smith and the user (Flow images cannot be bulk-regenerated).
