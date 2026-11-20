# character-sheets.md: 「Play It Back」 (Story 5 `revenge`, v1)

- Author: art-director · 2026-11-20 · working language English. Readers see only Khmer; images carry **no text**.
- Source: `02_story/characters.md` §15 (tokens, copied and refined), §17 (priority), world.md §10. Companion:
  `04_visual/style-bible.md` (palette, light, LOC tokens, no-text rules).
- Mode: Flow-by-hand. Every sheet is made by the user in Google Flow from the prompts that ref-sheet-artist writes into
  `refs/ref_prompts.md`. Nothing is rendered here.
- **What changed from characters.md §15 (refinements only, no redesign):**
  1. Every token now has a **paste block** (a self-contained prose phrase for Flow) in addition to the one-line token.
  2. Left/right is fixed as the **character's own side** and spelled out with "(the viewer's right when facing us)" for sheets.
  3. Visal: the plain teal badge sits on the **upper left chest, above the open pocket**, so the pocket can show the olive
     phone's top edge without the badge covering it (characters.md said "left pocket flap").
  4. Hall ribbons and flowers are fixed to cream / coral-red so pink stays reserved (style-bible §2-2).
  5. Added extras token (§10-E), separation pairs (§11), a phone prop sheet spec (§9), and a Day 1 / Day 40 state table (§10-D).

---

## 0. Global rules for every sheet and token

### 0-1. Identity and sides

- `identity_tag` = the file prefix: VISAL, RACHANA, DARA, KOLAB, THEARA, SOPHY, YUTHEA, CHANTHY, MEALEA, BOPHA, TOLA, RANY, PROPS.
- **Left / right = the character's own left / right.** In a front view the character's left is on the **viewer's right**.
  Reference-sheet prompts add "(the viewer's right when he/she faces us)". Every identifying mark below has a side; a sheet
  where the side is mirrored is a **REGEN**.
- Each character has **one identifying mark** that must be visible whenever the face is in frame, plus one **accent colour**
  that nobody else uses.

### 0-2. Fixed vs variable

- **Fixed:** hair shape and colour, eyes, brows, build and height, skin value, identifying mark, uniform cut and colours,
  accent prop.
- **Variable:** expression, pose, camera, light, hands, held prop, Day 1 / Day 40 state (only Visal's phone tape, EP01),
  PE kit (Dara).
- Never change: hair colour/length, eye shape, the mole, the cowlick, the clip, the finger tape, the shaved line, the braid
  side, the glasses, the pencil, the key fob, the bangle.

### 0-3. Uniform base (students) and text-free rule

- White short-sleeved shirt (#F2F0EA); boys navy trousers (#1F2A44), girls navy knee-length pleated skirt; a small **plain
  teal round badge** on the upper left chest (blank, no lettering); black shoes (variants per character).
- **Nothing on any character carries text:** no name tags, no numbers, no logos, no printed T-shirts, wristwatch with a
  blank face, bags and clipboards plain. Every prompt ends with the Avoid line (style-bible §5-2) and
  `no text, no letters, no numbers, no logos`.

### 0-4. Reserved colours (apply to every sheet)

- **Olive #6B7A3A = the Hero's old phone only.** No olive on any person's clothing, bag, bag strap or props.
- **Pearl-pink #E8C4C4 = Rachana only** (hair clip and phone case).
- Skin values differ so a lineup reads at a glance: Rachana light · Theara medium-light · Kolab medium · Visal medium ·
  Dara deep tanned · Sophy deep.

### 0-5. Global reference-sheet spec (for ref-sheet-artist; the user draws in Flow)

Two cards per main character (`<TAG>_turnaround`, `<TAG>_expressions`). Props get one card (`PROPS_phones`). Both character
cards are **16:9**, saved as `_workspace/04_visual/refs/<TAG>_turnaround.png` / `<TAG>_expressions.png`.

| Card | Contents | Neutral conditions |
|---|---|---|
| `<TAG>_turnaround` | the same person **four times in one row**, full body, relaxed standing pose, arms slightly away from the body: **front, three-quarter (turned to the viewer's left), side (facing the viewer's right), back**. The identifying mark is clear in front and the correct side view; the back view shows the hair and the back of the uniform. | plain light-grey seamless background, even soft flat studio lighting, no coloured light, no cast shadows on the background, **neutral expression, no props except the character's signature prop**, same outfit in every view |
| `<TAG>_expressions` | the same person **four head-and-shoulders portraits in one row**, same face, same hair, same light; four expressions from the character's range (below). | plain light-grey background, even lighting; the identifying mark visible in every portrait |
| `PROPS_phones` | phones in a row on plain light-grey: the old phone back, the old phone front (cracked screen, dark), the old phone beside a hand for scale, Dara's black phone beside the same hand, Rachana's pink phone. | even light, hands shown as plain medium-brown hands; no screens with interface |

- All sheets: `Avoid: any text, labels, speech bubbles, watermark.` (no names, no captions, no numbers, no color swatches).
- A sheet is **accepted** only if: one consistent person in all views, the identifying mark on the correct side, the accent
  colour present and **olive/pink not used elsewhere**, hair and uniform identical across views, no text anywhere.
- Panel prompts attach the turnaround for full-body shots and the expressions sheet for close-ups (style-bible §5,
  §13 below).

---

## 1. Keo Visal (VISAL), the Hero, "the Cameraman" · **priority 1**

- **identity_tag:** VISAL · accent colour: **olive #6B7A3A (the old phone only)** · palette: shirt #F2F0EA, navy #1F2A44.
- **Identifying mark:** the olive phone edge at the top of his **left** shirt pocket **+ the crown cowlick** (read together);
  also the small dark mole on his **left** jawline.
- **Fixed tokens (EN):** 17, Cambodian boy, 168 cm, lean, narrow shoulders, slight forward hunch (looks smaller than he is);
  black straight slightly overgrown hair, fringe falling to the eyebrows and half over the eyes, **one cowlick sticking up
  at the crown**; dark brown narrow single-lidded heavy-lidded calm eyes, faint under-eye shadows; thin face; straight dark
  eyebrows; closed mouth; **small dark mole on the left jawline**; medium warm brown skin; white short-sleeved shirt **one
  size too big**, slightly greyed collar, sleeves loose past the elbows; plain teal round badge on the upper left chest;
  navy trousers frayed at the hems; worn black canvas shoes.
- **One-line token (from characters §15):** `Visal/17 M/black straight overgrown hair, fringe over eyes, crown cowlick/dark brown heavy-lidded eyes/lean, slight hunch/medium warm brown skin/oversized white short-sleeve shirt, navy trousers/old olive phone edge in left pocket, mole on left jaw/blank calm face`
- **Paste block (use verbatim in every prompt with Visal):**
  > Visal, a 17-year-old Cambodian high-school boy, lean with narrow shoulders and a slight forward hunch, medium warm brown
  > skin, thin face, black straight slightly overgrown hair with the fringe falling to his eyebrows and half over his eyes and
  > one cowlick sticking up at the crown, narrow single-lidded dark brown heavy-lidded calm eyes with faint shadows under
  > them, straight dark eyebrows, a closed mouth, a small dark mole on his left jawline, wearing a white short-sleeved school
  > shirt one size too big with a slightly greyed collar and loose sleeves, a small plain teal round badge on the upper left
  > chest, frayed navy trousers, worn black canvas shoes, the top edge of a dull olive-green old phone showing out of his
  > left shirt pocket
- **Expressions (variable):** default blank and half-lidded (calm, unreadable) · listening (eyes down, utterly still) · the
  cold small exhale (the corner of the mouth barely moves) · rare: eyes wide and raw (guilt, at Sophy). **Never grins,
  never sneers.** Expressions sheet = default, listening, small exhale, raw eyes.
- **Variants:** earphones (white wired, **left bud wrapped in black tape**, one bud in his right ear, night only);
  Day 1 vs Day 40 phone tape (§10-D); holding Dara's black phone (the job); sitting in the corner desk. No outfit change in
  EP01.
- **Forbidden:** olive anywhere on him except the phone; a smile; hair tidied; the cowlick missing; the mole on the
  wrong side; a pocket badge covering the phone.
- **Reference cards:** `VISAL_turnaround` (front shows the phone edge in the left pocket = the viewer's right, and the
  mole side), `VISAL_expressions`. No earphones on the sheet (they live on the prop sheet / panels).

## 2. Ouk Rachana (RACHANA), the Ringleader · **priority 3**

- **identity_tag:** RACHANA · accent: **pearl-pink #E8C4C4 (reserved to her)** · palette: shirt #F7F6F2, navy #1F2A44.
- **Identifying mark:** **pale pearl-pink rectangular hair clip at the left temple** (+ the pink phone).
- **Fixed tokens (EN):** 17, Cambodian girl, 160 cm, slim, **perfect upright posture, chin slightly raised**; long glossy
  straight black hair to mid-back with a smooth centre part, tied in a **neat low ponytail**; large double-lidded dark
  brown eyes with sharp outer corners, thin well-groomed eyebrows; light warm brown even skin; crisp tailored white shirt
  with a sharp collar, tucked in; precisely pressed navy pleated skirt at the knee; white ankle socks; polished black
  loafers; small gold stud earrings; plain teal badge on the upper left chest; slim smartphone in a pale pearl-pink case
  (screen dark).
- **One-line token:** `Rachana/17 F/long glossy black hair in a neat low ponytail, pale pearl-pink clip at left temple/large sharp double-lidded eyes/slim, very upright/light warm brown skin/crisp tailored white shirt, pressed navy pleated skirt, white socks, black loafers, gold studs/pearl-pink phone case/composed polite smile`
- **Paste block:**
  > Rachana, a 17-year-old Cambodian high-school girl, slim with perfect upright posture and her chin slightly raised,
  > light warm brown even skin, long glossy straight black hair with a smooth centre part tied in a neat low ponytail with a
  > pale pearl-pink rectangular hair clip at her left temple, large sharp double-lidded dark brown eyes with sharp outer
  > corners and thin well-groomed eyebrows, small gold stud earrings, a crisp tailored white short-sleeved school shirt with a
  > sharp collar tucked in, a small plain teal round badge on the upper left chest, a precisely pressed navy pleated
  > knee-length skirt, white ankle socks and polished black loafers; she holds a slim smartphone in a pale pearl-pink case
  > when a phone is needed
- **Expressions:** polite closed-lip smile (to adults) · flat cold eyes, no smile (to Visal) · arms-folded verdict · tight jaw
  (her mother's look appearing on her) · **cracking: eyes widening, lips parted, colour draining (Day 40 only)**. Expressions
  sheet = polite smile, flat cold, tight jaw, arms-folded verdict (head and shoulders; no folded arms visible, so show the
  verdict as a level stare with the chin up).
- **Variants:** Day 40 hall (same uniform; the freeze face); leaning at the stair with a low-angle power read.
- **Forbidden:** any pink other than the clip and the phone case; loose hair; raised voice / open-mouth rage before the cold
  open; clip on the wrong side.
- **Reference cards:** `RACHANA_turnaround`, `RACHANA_expressions`.

## 3. Sum Dara (DARA), the Lackey · **priority 4**

- **identity_tag:** DARA · accent: **white athletic finger tape + matte black phone** · palette: shirt #F2F0EA, navy #1F2A44, black #1A1A1A.
- **Identifying mark:** **white athletic tape on the index and middle fingers of his right hand.**
- **Fixed tokens (EN):** 17, Cambodian boy, **182 cm, the tallest student**, broad shoulders, athletic, long arms; black hair
  with **buzzed sides and a short spiky top**; round dark brown eyes, thick eyebrows, wide jaw; deep sun-tanned brown skin;
  white shirt **untucked** with sleeves pushed up; navy trousers; black sports sneakers; **black sports wristband on the left
  wrist**; **large phone in a matte black case**. PE kit (court only): teal T-shirt (no print), navy shorts, black knee pads.
- **One-line token:** `Dara/17 M/black buzzed sides, short spiky top/round dark eyes, thick brows, wide jaw/182cm broad athletic/deep tanned brown skin/untucked white shirt, sleeves pushed up, navy trousers, black sneakers/white tape on right index and middle fingers, big matte-black phone/loud grin`
- **Paste block:**
  > Dara, a 17-year-old Cambodian high-school boy, very tall at 182 cm with broad athletic shoulders and long arms, deep
  > sun-tanned brown skin, black hair with buzzed sides and a short spiky top, round dark brown eyes with thick eyebrows and
  > a wide jaw, wearing a white short-sleeved school shirt untucked with the sleeves pushed up, a small plain teal round
  > badge on the upper left chest, navy trousers and black sports sneakers, white athletic tape wrapped around the index and
  > middle fingers of his right hand, a black sports wristband on his left wrist; he holds a large phone in a plain matte
  > black case when a phone is needed
- **Expressions:** loud open-mouth laugh · bored guard look, leaning on a door frame · straightening, swallowing (the Coach) ·
  panic: eyes darting, big hands with nowhere to go. Expressions sheet = laugh, bored guard, swallowing, panic.
- **Variants:** PE kit on LOC_COURT; back to the room at the door (the plant: his back is to the room, he looks at the court).
- **Forbidden:** shorter than other boys; tape on the left hand; a jersey number; olive/pink.
- **Reference cards:** `DARA_turnaround`, `DARA_expressions`.

## 4. Oum Theara (THEARA), Follower 2, the joker · **priority 5**

- **identity_tag:** THEARA · accent: **shaved line above the left ear + front-tooth gap** · palette: shirt #F2F0EA, navy #1F2A44, scuffed white #C9C9C4.
- **Identifying mark:** **a thin shaved line above his left ear + a small gap between the front teeth** (visible when he laughs).
- **Fixed tokens (EN):** 17, Cambodian boy, 163 cm, **wiry and small**, restless, always mid-gesture; black short undercut with
  a longer **side-swept top falling to the right**; bright slightly upturned dark brown eyes, mobile eyebrows; medium-light
  warm brown skin; white shirt with the **top button open and a crooked collar**; navy trousers slightly short; scuffed white
  sneakers; black digital wristwatch with a blank face (no digits).
- **One-line token:** `Theara/17 M/black undercut, side-swept top to the right, thin shaved line above left ear/bright upturned eyes/wiry 163cm/medium-light brown skin/white shirt with open top button, crooked collar, navy trousers, scuffed white sneakers/gap between front teeth/wide laugh`
- **Paste block:**
  > Theara, a 17-year-old Cambodian high-school boy, small and wiry at 163 cm and always mid-gesture, medium-light warm brown
  > skin, black short undercut hair with a longer side-swept top falling to the right and one thin shaved line above his left
  > ear, bright slightly upturned dark brown eyes with mobile eyebrows, a small gap between his front teeth when he laughs,
  > wearing a white short-sleeved school shirt with the top button open and a crooked collar, a small plain teal round badge on
  > the upper left chest, slightly short navy trousers, scuffed white sneakers, a black digital wristwatch with a blank face
- **Expressions:** wide gap-toothed laugh · mock-announcer face · sly side-eye · sudden pale stillness (when his past is near)
  · the laugh dying. Expressions sheet = laugh, mock-announcer, sly side-eye, laugh dying.
- **Forbidden:** neat collar; tall; the shaved line on the wrong side; any digits on the watch.
- **Reference cards:** `THEARA_turnaround`, `THEARA_expressions`.

## 5. Chan Kolab (KOLAB), Follower 1, ally/suspect flip · **priority 6**

- **identity_tag:** KOLAB · accent: **pale yellow cloth scrunchie (marigold #E9C46A) on her left wrist** · palette: shirt #F2F0EA, navy #1F2A44.
- **Identifying mark:** **chin-length blunt bob with bangs tucked behind her right ear + the yellow wrist scrunchie.**
- **Fixed tokens (EN):** 17, Cambodian girl, 155 cm, small, slightly rounded shoulders, standing a step behind Rachana; black
  **chin-length blunt bob with straight-cut bangs**, always tucked behind the **right** ear; soft round dark brown eyes with
  eyebrows tilted up (worried by default); medium warm brown skin; a little creased white shirt; navy pleated skirt; black flat
  shoes; **pale yellow cloth scrunchie on her left wrist**.
- **One-line token:** `Kolab/17 F/black chin-length blunt bob with bangs, tucked behind right ear/soft round worried eyes/small 155cm/medium warm brown skin/white shirt, navy pleated skirt, black flats/pale yellow scrunchie on left wrist/nervous half-smile`
- **Paste block:**
  > Kolab, a 17-year-old Cambodian high-school girl, small at 155 cm with slightly rounded shoulders, medium warm brown skin,
  > black chin-length blunt bob with straight-cut bangs tucked behind her right ear, soft round dark brown eyes with
  > eyebrows tilted up that make her look worried, wearing a slightly creased white short-sleeved school shirt, a small plain
  > teal round badge on the upper left chest, a navy pleated knee-length skirt, black flat shoes, and a pale yellow cloth
  > scrunchie on her left wrist
- **Expressions:** nervous half-smile · glancing sideways at Rachana · biting lower lip · eyes down, guilty · the moment of
  courage (looking straight at someone). Expressions sheet = half-smile, sideways glance, biting lip, straight look.
- **Forbidden:** bob tucked behind the left ear; long hair; any pink (she stands next to Rachana; keep the clip off her);
  scrunchie on the wrong wrist.
- **Reference cards:** `KOLAB_turnaround`, `KOLAB_expressions`.

## 6. Yim Sophy (SOPHY), the Quiet Classmate · **priority 7**

- **identity_tag:** SOPHY · accent: **steel three-tier tiffin (brushed steel #A7ADB2)** · palette: shirt #EFEDE6, faded navy #2B3550.
- **Identifying mark:** **a long low braid over her right shoulder + the steel tiffin.**
- **Fixed tokens (EN):** 17, Cambodian girl, 152 cm, slight, shoulders drawn in; thick black **wavy hair in one long low
  braid over the right shoulder** with loose wisps at the temples; large dark brown eyes usually lowered, long lashes; **deep
  warm brown** skin; neat but **old** white shirt (thin fabric, carefully ironed); slightly faded navy skirt; black plastic
  sandals with socks; **steel stacked three-tier lunch carrier (tiffin) with a top handle**, held in both hands or on her desk.
- **One-line token:** `Sophy/17 F/thick wavy black hair in one long low braid over right shoulder/large lowered dark eyes/slight 152cm/deep warm brown skin/old neatly ironed white shirt, faded navy skirt, black sandals with socks/steel three-tier tiffin lunch carrier/eyes down`
- **Paste block:**
  > Sophy, a 17-year-old Cambodian high-school girl, slight at 152 cm with her shoulders drawn in, deep warm brown skin, thick
  > wavy black hair in one long low braid over her right shoulder with loose wisps at the temples, large dark brown eyes
  > usually lowered with long lashes, wearing an old but carefully ironed thin white short-sleeved school shirt, a small plain
  > teal round badge on the upper left chest, a slightly faded navy pleated skirt, black plastic sandals with socks, holding a
  > three-tier brushed-steel stacked lunch carrier with a top handle
- **Expressions:** eyes down, neutral · looking away (EP01 B5) · watchful from the side · a rare direct look, steady and sad.
  (A very small smile is Arc 2 only.) Expressions sheet = neutral eyes down, looking away, side watchful, direct sad look.
- **Forbidden:** braid on the left; light skin; new shirt; the tiffin dropped from the sheet.
- **Reference cards:** `SOPHY_turnaround`, `SOPHY_expressions`.

## 7. Nhem Yuthea (YUTHEA), Deputy Principal, the Protector Adult · **priority 8**

- **identity_tag:** YUTHEA · accent: **brass bell-shaped key fob + thin gold-rim glasses** · palette: pale blue #BFD3E6, charcoal #3A3D42, brass #B08D57.
- **Identifying mark:** **a heavy key ring on a belt clip at his right hip with a small brass bell-shaped fob** (a sound
  clue: it clinks). Thin gold-rimmed rectangular glasses secondary.
- **Fixed tokens (EN):** 52, Cambodian man, 170 cm, soft heavy build with a small paunch, unhurried; black hair going grey at
  the temples, **receding, combed straight back with pomade**; dark brown eyes behind **thin gold-rimmed rectangular glasses**,
  deep smile lines; medium warm brown skin; **pale blue long-sleeved shirt** tucked into charcoal-grey trousers, black belt,
  polished black shoes, a pen in the shirt pocket; key ring on a belt clip at the right hip with the brass bell-shaped fob.
- **One-line token:** `Yuthea/52 M/receding black-grey hair combed back with pomade/thin gold-rim rectangular glasses, smile lines/soft heavy build/medium warm brown skin/pale blue long-sleeve shirt, charcoal trousers, black belt/brass bell-shaped key fob on right hip/kind tired smile`
- **Paste block:**
  > Yuthea, a 52-year-old Cambodian school deputy principal, 170 cm with a soft heavy build and a small paunch, medium warm
  > brown skin, receding black hair going grey at the temples combed straight back with pomade, dark brown eyes with deep
  > smile lines behind thin gold-rimmed rectangular glasses, wearing a pale blue long-sleeved shirt tucked into charcoal-grey
  > trousers with a black belt, a pen in the shirt pocket, polished black shoes, and a heavy key ring on a belt clip at his
  > right hip with a small brass bell-shaped fob
- **Expressions:** kind tired smile · patient listening (head tilted) · fatherly hand-raise (palm out, "it is finished") ·
  closed-door stillness · Arc 2 fall: smile gone, glasses off (not in EP01). Expressions sheet = tired smile, head-tilt
  listening, still closed face, hand-raise (shoulders and one raised palm in frame).
- **Forbidden:** a suit jacket; a warm angry expression; a visible threat; no keys on the sheet (fob is the sound plant).
- **Reference cards:** `YUTHEA_turnaround`, `YUTHEA_expressions`.

## 8. Lim Mealea (MEALEA), the Good Adult · **priority 9**

- **identity_tag:** MEALEA · accent: **yellow pencil through the bun + rust-orange canvas tote** · palette: white #F4F2EC, dark brown #4A3B30, rust #B5562F.
- **Identifying mark:** **a yellow pencil pushed through her loose bun.**
- **Fixed tokens (EN):** 31, Cambodian woman, 162 cm, slim, quick walk; black shoulder-length hair twisted up in a **loose bun
  with a yellow pencil through it**; attentive dark brown eyes, a slight frown line between the brows; medium warm brown skin,
  no makeup; plain white blouse with sleeves rolled once; long dark-brown skirt; flat sandals; **large rust-orange canvas tote**
  of exercise books with blank covers.
- **One-line token:** `Mealea/31 F/shoulder-length black hair in a loose bun with a yellow pencil through it/attentive dark eyes, small frown line/slim/medium brown skin, no makeup/plain white blouse with rolled sleeves, long dark brown skirt, flat sandals/rust-orange canvas tote of exercise books/concerned frown`
- **Paste block:**
  > Mealea, a 31-year-old Cambodian literature teacher, 162 cm and slim, medium warm brown skin with no makeup, shoulder-length
  > black hair twisted up in a loose bun with a yellow pencil pushed through it, attentive dark brown eyes with a slight frown
  > line between her brows, wearing a plain white blouse with the sleeves rolled once, a long dark-brown skirt and flat
  > sandals, carrying a large rust-orange canvas tote bag full of exercise books with blank covers
- **Expressions:** concerned frown · listening fully (body turned toward the speaker) · guarded neutral (in Yuthea's presence)
  · resolve (Arc 2, not EP01). Expressions sheet = concerned frown, listening, guarded neutral, quiet resolve.
- **Forbidden:** the pencil missing; the tote in olive or pink; bright makeup. Her rust-orange is **not** the phone's
  small orange sticker (the sticker is tiny and faded; the tote is large).
- **Reference cards:** `MEALEA_turnaround`, `MEALEA_expressions`.

## 9. Prop sheet (PROPS) · **priority 2**

- **identity_tag:** PROPS · accent: **olive #6B7A3A on the old phone only**. One card: `PROPS_phones` (16:9).
- **The old phone ("the Brick", ឥដ្ឋ):**
  > a thick old budget smartphone with no brand and no logo, rounded corners, about 13 cm tall, 6.5 cm wide and 1.3 cm thick
  > so it is visibly chunkier than other phones, a dull olive-green plastic back worn shiny at the edges, a diagonal crack
  > across the bottom-right corner of the back covered by a strip of yellowed clear tape holding the cover on, one small
  > round camera lens at the top of the back, one small faded orange round sticker with no print near the lens; the front
  > screen is dark with a spiderweb crack in the bottom-right corner and a wide bezel
  Views on the sheet: back flat (lens at the top, tape and sticker visible), front flat (dark cracked screen), and **in a
  hand for scale** (it fits inside a palm with the fingers wrapped; one **thumb at the side** is allowed).
- **Dara's job phone:** `a large modern smartphone about 16.5 cm tall in a plain matte black case with a dark screen, larger
  than a teenager's hand` shown in the same hand beside the old phone for scale.
- **Rachana's phone:** `a slim modern smartphone about 15 cm tall in a pale pearl-pink case with a dark screen`.
- **Earphones (optional second row, same card if space):** `white wired earphones, the left bud wrapped in black tape`.
- **Day 1 / Day 40 tape:** Day 1 = one clean yellowed strip; Day 40 = the first strip's edges lifting and a **second strip
  added**. The sheet shows Day 1 (the main body of EP01); the Day 40 look is stated in the cold-open panel prompts.
- Rules: no screens with interface, no menus, no apps, no text on the sticker or tape, no brand shape; hands are plain.
- **Reference card:** `PROPS_phones` (attach to any panel where the phone is larger than about 10% of the frame).

## 10. Mini-sheet and token-only characters

### 10-A. Chhay Bopha (BOPHA), the Ringleader's mother · **priority 11 (turnaround only; Day 40 cold open)**

- **identity_tag:** BOPHA · accent: **cream silk blouse + gold bangle on the right wrist** · palette: cream #EDE3CF, navy #1C2333, gold #C9A34E.
- **Identifying mark:** **cream silk blouse + a gold bangle on her right wrist** (clinks: sound plant).
- **Paste block:**
  > Bopha, a 45-year-old Cambodian businesswoman, 162 cm, slim and very upright (her daughter's posture), light warm brown
  > skin, shoulder-length black hair set in soft expensive waves with a side part, calm double-lidded dark brown eyes, neat
  > makeup with nude lipstick, wearing a cream silk blouse, dark tailored trousers and low heels, a gold bangle on her right
  > wrist, a small gold necklace and a small cream handbag
- **Expressions (panel use only, no expressions sheet):** gracious public smile · "the look" (the mouth tightens very slightly)
  · stillness while listening · cold-open shock: the smile freezing.
- **Card:** `BOPHA_turnaround` only (three or four views). **Forbidden:** pink; a harsh or villainous face; the bangle on
  the left wrist.
- One-line token: `Bopha/45 F/shoulder-length black hair in soft waves, side part/calm double-lidded eyes, neat makeup/slim, very upright/light warm brown skin/cream silk blouse, dark tailored trousers, low heels, small cream handbag/gold bangle on right wrist/gracious public smile`

### 10-B. Touch Chanthy (CHANTHY), 11C homeroom, takes the fees · **priority 10 (turnaround only)**

- **identity_tag:** CHANTHY · accent: **half-moon reading glasses on a beaded cord (the beads sound ក្រិក)** · palette: purple #6D4C7D, dark navy skirt #22283A, gold #C9A34E.
- **Identifying mark:** **half-moon reading glasses hanging on a beaded cord** (+ the pen she taps).
- **Paste block:**
  > Chanthy, a 44-year-old Cambodian maths teacher, 158 cm with a medium build and a brisk manner, light-medium warm brown
  > skin with dark red lipstick, black hair in a tight bun held by a black claw clip, half-moon reading glasses on a beaded
  > cord around her neck that she pushes down her nose to look at students, wearing a purple floral-print blouse, a dark
  > knee-length skirt, low heels and a thin gold necklace, a pen in her hand and a plain cloth pouch for money
- **Expressions (panel use only):** businesslike half-smile · looking over the glasses · approving warmth (to payers) · flat
  impatience (to Visal) · alarm when money is mentioned.
- **Card:** `CHANTHY_turnaround` only. **Forbidden:** printing on the blouse that reads as writing (floral pattern only);
  olive/pink flowers on the blouse (the florals are purple-and-cream, not pink).
- One-line token: `Chanthy/44 F/black hair in a tight bun with black claw clip/half-moon reading glasses on a beaded cord/medium build/light-medium brown skin, dark red lipstick/purple floral blouse, dark knee skirt, low heels, thin gold necklace/tapping pen/businesslike half-smile`

### 10-C. Token-only (no sheet for EP01)

- **Mao Tola (TOLA), Coach · sheet from EP02-03:** `Tola, a 38-year-old Cambodian PE teacher and volleyball coach, 175 cm, fit and lean-muscled, deep tanned skin, black crew cut, sharp dark eyes with sun lines, wearing a teal track jacket over a plain white T-shirt, navy track pants and sneakers, a silver whistle on a red lanyard, a blank clipboard`. Accent: red lanyard #B23A3A. Mark: whistle on the red lanyard.
- **Chhim Rany (RANY), Hero's mother · night/market cameos:** `Rany, a 46-year-old Cambodian market vegetable seller, small and strong, deep weathered brown skin, black hair with grey streaks in a low knot, a faded blue-check cotton blouse, a dark long wrap skirt, plastic sandals, a soft cotton scarf on her head at the market, tired warm worried face`. Check: her blouse blue-check, never olive.
- **The Principal:** `a 60-year-old Cambodian man in a plain pale shirt, seen from behind or in a distant shot only` (no face detail, no sheet).
- **Hero's father "Pa":** never drawn in EP01; voice memo only.

### 10-D. Time-state table (EP01 has two)

| Item | DAY 1 (main body) | DAY 40 (cold open) |
|---|---|---|
| Old phone's tape | one clean yellowed strip | first strip's edges lifting, **a second strip added** |
| Tamarind pods | long and pale green | dark brown, many fallen on the yard |
| New Hall | closed, plain | full: cream ribbons, paper garlands (cream + coral-red), speakers set |
| Light | early dry season, morning haze | dry bright cool evening |
| Visal | same uniform, same hair | same uniform, same hair (no change: the cowlick and the mole stay) |

### 10-E. Extras (background students, parents)

- **Students:** `Cambodian high-school students in white short-sleeved shirts with navy trousers or skirts, plain teal round
  badges, varied hair (short, bob, ponytail, buzzed), a range of warm brown skin tones, simple faces, some turned away; their
  phones and bags are black, grey, blue, white, silver or brown, never olive and never pink`.
- **Parents (hall, Day 40):** `Cambodian parents in neat everyday-smart clothes, helmets in hand at the gate; no clothing in
  olive or pink; women in cream, white, blue, grey or dark colours`.
- Extras never wear teal-and-navy combinations that could pass for Tola, and nobody wears a gold bangle or beaded cord.

## 11. Lineup check and separation pairs (art-director)

- **Height order (cm):** Dara 182 > Tola 175 > Yuthea 170 > Visal 168 > Theara 163 > Mealea / Bopha 162 > Rachana 160 >
  Chanthy 158 > Kolab 155 > Sophy 152. In any two-shot state the relation ("Dara towering over Visal").
- **Hair silhouettes all differ:** overgrown fringe + cowlick (Visal) · low ponytail (Rachana) · spiky top, buzzed sides
  (Dara) · blunt bob (Kolab) · side-swept undercut (Theara) · long braid (Sophy) · combed-back receding (Yuthea) · tight bun +
  claw clip (Chanthy) · loose bun + pencil (Mealea) · soft waves (Bopha) · crew cut (Tola).
- **One accent each:** olive (Visal's phone) · pearl-pink (Rachana) · white finger tape and matte black phone (Dara) ·
  marigold scrunchie (Kolab) · shaved line + gap teeth (Theara) · steel tiffin (Sophy) · brass fob (Yuthea) · purple blouse
  + beads (Chanthy) · rust tote + pencil (Mealea) · cream blouse + gold bangle (Bopha) · red lanyard (Tola).
- **Confusion risks and the fix (put these in the prompt when both appear):**
  - **Visal vs Theara** (both slim boys, dark fringe): Visal = fringe over the eyes, cowlick, oversized shirt, hunched,
    blank face; Theara = side-swept undercut, shaved line, open collar, wide laugh, bright eyes.
  - **Rachana vs Kolab** (both girls beside each other): Rachana = long ponytail, tall posture, pink clip; Kolab = short blunt
    bob, small, round shoulders, yellow scrunchie. State "a step behind".
  - **Kolab vs Sophy** (former deskmates): bob vs long braid; Sophy deep brown skin and a steel tiffin; Kolab medium skin.
  - **Yuthea vs a generic male adult:** glasses, pale blue shirt, brass fob at the right hip, combed-back receding hair.
  - **Chanthy vs Mealea:** purple floral blouse + bun with claw clip + beaded glasses vs plain white blouse + pencil bun +
    rust tote.
  - **Dara vs Tola:** Dara has white finger tape, untucked white shirt, buzzed sides; Tola has a crew cut, teal track jacket,
    whistle.
- **Skin values:** Rachana light · Theara medium-light · Kolab medium · Visal medium · Dara deep tanned · Sophy deep warm brown.

## 12. Reference-sheet priority order for Flow (what the user draws first)

The user makes **19 cards** for EP01, in this order. They can start panels that use only finished characters before the
rest are done. Mark of a finished card = a PNG in `refs/` with the exact name.

| # | Card file | Aspect | Why this order |
|---|---|---|---|
| 1 | `VISAL_turnaround` | 16:9 | in almost every panel; the cowlick, mole and phone edge define the series |
| 2 | `VISAL_expressions` | 16:9 | faces in close-ups; the blank/half-lidded range |
| 3 | `PROPS_phones` | 16:9 | the main plant, seen three times in B4; scale and the olive must hold |
| 4 | `RACHANA_turnaround` | 16:9 | ringleader, the cold-open face |
| 5 | `RACHANA_expressions` | 16:9 | the cold face and the freeze reference |
| 6 | `DARA_turnaround` | 16:9 | job phone owner, door guard, tallest |
| 7 | `DARA_expressions` | 16:9 | |
| 8 | `THEARA_turnaround` | 16:9 | most insult lines |
| 9 | `THEARA_expressions` | 16:9 | |
| 10 | `KOLAB_turnaround` | 16:9 | B5, the clip voice |
| 11 | `KOLAB_expressions` | 16:9 | |
| 12 | `SOPHY_turnaround` | 16:9 | looks away in B5; season well |
| 13 | `SOPHY_expressions` | 16:9 | |
| 14 | `YUTHEA_turnaround` | 16:9 | B3 apology letter; the fifth-voice plant (fob) |
| 15 | `YUTHEA_expressions` | 16:9 | |
| 16 | `MEALEA_turnaround` | 16:9 | uneasy adult; the sting |
| 17 | `MEALEA_expressions` | 16:9 | |
| 18 | `CHANTHY_turnaround` | 16:9 | handout-fee beat, red herring |
| 19 | `BOPHA_turnaround` | 16:9 | Day 40 cold open, front row |

Later episodes: `TOLA_turnaround` + `TOLA_expressions` (EP02-03). Rany only if she gets a featured scene.
**Optional (lowest priority, ask the user first):** location plates `LOC_CLASSROOM_plate`, `LOC_STAIR_plate`, `LOC_HALL_plate`
(one 9:16 image each of the empty set in its fixed light, no people, no text). They help consistency but panels never depend
on them (the prompts carry the full LOC token).

## 13. Prompt rules for sheets and for attaching them to panels

### 13-1. Sheet prompt templates (ref-sheet-artist fills in the paste block and the four expressions)

- **Turnaround:**
  > `Character design reference sheet on a plain light-grey seamless background, even soft flat studio lighting: the same
  > character shown four times in one row, full body, relaxed neutral standing pose with the arms slightly away from the body:
  > front view, three-quarter view, side view, back view; identical proportions, face and outfit in every view, neutral
  > calm expression. <PASTE BLOCK, with "(the viewer's right when facing us)" after each "left"/"right" mark>. Clean
  > realistic Korean-webtoon school-drama illustration, crisp fine ink lineart, soft cel shading. Avoid: any text, labels,
  > speech bubbles, watermark.`
- **Expressions:**
  > `Character expression sheet on a plain light-grey background, even soft lighting: the same character shown four times in one
  > row as head-and-shoulders portraits, identical face, hair and clothes, with four expressions: <E1>, <E2>, <E3>, <E4>.
  > <PASTE BLOCK>. Clean realistic Korean-webtoon school-drama illustration, crisp fine ink lineart, soft cel shading. Avoid:
  > any text, labels, speech bubbles, watermark.`
- **Props:** same scheme with the prop descriptions in §9, hands in plain medium-brown skin.
- **Rule of thumb for the user in Flow:** if the four views do not look like one person, regenerate once and keep the best;
  the sheet is judged by the check list in §0-5.

### 13-2. `attach:` rules for panels

| Panel content | Attach |
|---|---|
| a character full body or walking | that character's `_turnaround` |
| a character's face / close-up / emotion | that character's `_expressions` |
| two or three named characters | each one's turnaround (maximum 3 images in total; the dominant two get full priority) |
| a crowd or 4+ named characters | the two most prominent characters' sheets only; the others by paste block |
| the old phone larger than ~10% of the frame, or in playback | `PROPS_phones` (+ Visal if his hand shows) |
| Dara's black phone or Rachana's pink phone visible and important | `PROPS_phones` |
| an empty location, an insert with no people | no sheet |

In every prompt that attaches a sheet, write "matching the attached reference image of <name>" **and** paste the block.

## 14. Re-call and change rules

- Do not change a token after any Flow image using it exists, unless the user agrees (Flow images cannot be bulk-regenerated).
  If a change is unavoidable, tell prompt-smith and ref-sheet-artist the exact affected cards.
- A new character gets a token block and a sheet spec here; the global rules stay.
- The identifying mark and its **side** are the first thing the validator checks on a REGEN.
- Change log: v1 (2026-11-20) first version.

## EP03 additions (Heng Pich)

### Heng Pich (PICH), Grade 10 teammate who idolises Dara · priority 22 (turnaround only)
- **identity_tag:** PICH · accent: **messy white athletic tape on index, middle and ring fingers of the LEFT hand (the viewer's right when facing us)**, a copy of Dara's (Dara: right index+middle, neat) · palette: white #F2F0EA, charcoal grey #3D4148, sky-blue towel #8FB4D9.
- **Paste block:** `Pich, a 15-year-old Cambodian high-school boy, clearly younger and smaller than the older boys, short and slight at 160 cm with narrow shoulders, light tan brown skin, short black hair with a long fringe falling over the forehead, a round face with bright wide dark brown eyes and thin eyebrows, an oversized plain white PE T-shirt a size too big, charcoal-grey sports shorts, white sneakers, a pale sky-blue cotton towel over his right shoulder (the viewer's left when facing us), messy uneven white athletic tape on the index, middle and ring fingers of his LEFT hand (the viewer's right when facing us), no tape on the right hand`
- **Expression default:** proud eager grin (gap-toothed in action panels); falls into confusion at EP03 P64.
- **Separation:** shortest and slightest of the squad; white-and-grey kit with a sky-blue towel so he is never read as teal squad or navy Coach. Tape is left hand, three fingers, uneven, so it reads as imitation of Dara, not a shared accent. No olive, no pearl-pink.
- **Note:** the beatsheet's teal PE tee and navy shorts are replaced here by white tee and charcoal shorts to avoid teal+navy confusion; art-director to confirm.
