# tension-curve.md: 「Play It Back」 tension map (Story 5 `revenge`, v1)

- Author: tension-engineer · 2026-11-20 · working language English. Readers see only Khmer; images carry **no text**.
- Inputs: `00_input/brief.md` (LOCKED: package A "The Cameraman"), `02_story/concept.md` (§4 engine, §5 weapon rules,
  §6 EP01 promise, §8 tone, §9 rating), `02_story/series-arc.md` (§4 episode map, §6 clip ledger, **§7 rhythm strip**,
  **§8 EP01 spine**), `02_story/characters.md` (§0 cast, §2-7 Visal's speech), `01_research/trend-brief.md` §4.
  Skill: `webtoon-scenario` §7 (tension curve), §5 (episode structure), §9 (panel split).
- **`twist-plan.md` does not exist yet.** Twist positions here are taken from series-arc §4 (twist column) and §7
  (twist slot). Each twist slot below is the **tension peak position**; twist-master should place each twist inside
  that window or tell tension-engineer to move the peak (see §5).
- Consumers: **episode-outliner** (EP01 beat/panel levels, §3), **twist-master** (peak windows, §2 and §5),
  **letterer** (`gap_after` suggestions, §3-4), dialogue-writer (silent panels and line splits).
- Binding on every number here: 15+ (concept §9). Tension comes from words, faces, silence, timers and what the reader
  knows; never from showing the act, injuries or the lens view. Counts, dates and times are **spoken**, never written.

---

## 0. Scale and rules used in this file

**Tension scale (1-10), for one panel or one beat:**

| Level | Meaning on the page |
|---|---|
| 1-3 | Calm, daily life, no question open (used almost never; a webtoon panel always holds a question). |
| 4-5 | A question is open but nothing is at stake this second (scene opens, valves, transitions). |
| 6-7 | A threat or a want is active in the room; someone could lose something now. |
| 8 | A local peak: a line that changes the room (micro-win, worst moment, a door closing). |
| 9 | An episode-level shock or a cliff that forces the next tap. |
| 10 | Twist landing or exposure landing; reserved (see S4). |

**Season rules (S1-S8):**

- **S1 Rising sawtooth.** Inside every episode the local peaks rise and the troughs rise, with one deliberate valve
  (a short drop of 2-3 levels) just before the main peak.
- **S2 Last beat 9 or more.** Every episode's last panel(s) sit at 9-10 and leave one question open (skill §7).
- **S3 Endings alternate W / T** exactly as series-arc §4: win ending (a face falls, the Hero gains ground) and threat
  ending (the Hero, an ally or the archive is cornered). Never two T in a row.
- **S4 Tens are rationed.** Episode-ending 10s only at the two climaxes (EP11, EP23). Other episodes may touch 10
  for one panel at the twist and must end at 9-9.5. This keeps readers from going numb (skill §7 "no paralysis").
- **S5 After a 10, open lower.** The episode after a 10-ending opens at 5-6 (aftermath) and climbs; the episode after
  a T-ending opens at 6-7 (the threat is still in the room).
- **S6 Valve length.** A valve lasts 2-5 panels in a normal episode, never more than 9 (EP01 B6 is the longest and is
  carried by framing and echo lines). A longer quiet stretch causes drop-off.
- **S7 Information gap is chosen per episode.** Suspense episodes (reader knows the plan): tension from "will they
  notice?" Surprise episodes (prep revealed at the end): tension from a hidden question the reader feels but cannot
  name. The mode column in §1 follows series-arc §7.
- **S8 Every episode carries at least one visible timer or constraint** (the 13:55 bell, the 40-day count, the padlock,
  "Thirty days", storage "Full."), always spoken.

---

## 1. Season map (EP01-EP24)

Columns: **Open** = tension of the first panels · **Mid** = mid-episode local peak (and what it is) · **Valve** = the
short drop before the main peak · **Peak slot** = where the main twist lands (% of panels, from series-arc §7) and its
level · **End** = last-beat tension and W/T · **Gap** = Suspense (reader knows) / Surprise (hidden) · **Timer** = the
spoken constraint · **Cliff (left open)** = the question the last panel refuses to answer.

| EP | Open | Mid (local peak) | Valve | Peak slot · level | End | Gap | Timer / constraint | Cliff (left open) |
|---|---|---|---|---|---|---|---|---|
| 01 | 6-8 (cold open, Day 40) | 8: "11:52. I was here." (~48%) | B6, 16:30 empty 11C | 85-95% · 10 | **9 · W** | Surprise | 13:55 bell; "Forty days" | What will he play in that hall? (reader has seen the hall) |
| 02 | 6 | 7: Coach's rule "A captain is clean" | Night, Pa's memo (one line) | 90-100% · 9 | **9 · T** | Suspense | "Full." (no recording possible) | What will Kolab do with "I saw your thumb"? |
| 03 | 6 | 7: trials, captaincy talk; "will Kolab tell?" | Equipment room, before play | 80-95% · 9.5 | **9 · W** | Suspense | Two minutes alone with the Coach | What does the Coach do to Dara? |
| 04 | 6 (aftermath) | 7.5: "Why is that thing always face-down?" | Kolab: "It's dead, Na." | 70-85% · 9 | **9 · T** | Surprise | Pockets checked; new phone | Kolab is now his watcher: will she sell him? |
| 05 | 7 (threat carried) | 7: shadowing at noon | Storeroom quiet (planned valve) | 75-90% · 9 | **9 · W** | Surprise | Every noon watched | Will a copy save the archive or expose it? |
| 06 | 6 | 8: "Forty-three files." / "Two are mine." | Shop glow after hours | 85-100% · 9.5 | **9.5 · T** | Surprise | Copy before anyone notices | What happens to Sophy on Monday? |
| 07 | 7 (Sophy with the phone) | 8: "Is there proof?" "Not yet." | Mealea reads with Sophy | 60-75% · 9 | **9 · W** | Suspense | "Day twenty-four." | How long can Mealea hold the room? |
| 08 | 6 | 8: Mealea moved; clink + "Close the door." | Job returns, routine | 70-90% · 9.5 | **9.5 · T** | Suspense | Padlocked drawer | What did he copy? Kolab's lease at risk. |
| 09 | 7 (Brick locked) | 8: Rany bows to Chanthy | Rany and Visal walking home | 85-95% · 9 | **9 · W** | Surprise | "Delete it. I'm watching." | Kolab's hand on the stick: does it survive? |
| 10 | 6 | 9: Theara's clip deleted in front of him (40-55%) | Rachana gloats, he is silent | end · 9.5 | **9.5 · T** | Suspense | Discipline step 5; barred from Day 40 | How does he get into the hall? |
| 11 | 7 (Day 39) | 8: Theara recants | Honour roll, donors thanked | 80-95% · 10 | **10 · W** | Surprise | Day 40 itself | Silent panel after Bopha's frozen smile. |
| 12 | 5 (aftermath, S5) | 7: "Was it right to record?" | Moto shed quiet | 75-90% · 9.5 | **9 · T** | Surprise | Night to morning | Who is the adult voice? Phone demanded. |
| 13 | 6 (rain, new status quo) | 7: "Is this even a phone?" (armour holds) | Rain, line-up apology | 70-85% · 9 | **9 · W** | Suspense | "Thirty days." (committee) | He works inside the fifth voice's office. |
| 14 | 6 | 7.5: "Who's on our floor at 13:55?" | Kolab's shop, last evening | 85-100% · 9 | **9 · T** | Suspense | Lease ended; goods held | Only archive again, and full. |
| 15 | 6 | 7: empty Staff Office at noon | Chanthy's fear, quiet | 70-85% · 9 | **9 · W** | Surprise | 12:20 lunch class (her alibi) | "Ask him who taught that girl the bell." |
| 16 | 7 | 8: "your voice is on every one" | Visal and Rany, the corridor | 90-100% · 10 (reader reveal) | **9.5 · T** | Surprise | Ultimatum: phone or transfer | The fob swinging; what can he do now? |
| 17 | 6 | 7.5: Sophy fills the 13:40 gap | Tamarind trees (emotional valve) | 60-80% · 9 | **9 · W** | Suspense | Committee date | Sophy will say it in the room: will she be allowed? |
| 18 | 7 | 8.5: "Long way home, isn't it, ក្មួយ?" | Staff meeting routine | 80-95% · 9.5 | **9.5 · T** | Surprise | "Forty-one times." | The archive alone is not enough. |
| 19 | 6 | 7.5: Dara: "He walked past." | AV office routine | 70-90% · 9 | **9 · W** | Suspense | Committee date | What will Rachana choose? |
| 20 | 7 | 8: review moved forward three days | Night room, earphone (near-silent) | 90-100% · 9.5 | **9.5 · T** | Suspense | "Tomorrow." + "Full." | His thumb over a file: which one? |
| 21 | 8 (the choice carried) | 9: Pa's memo deleted (30-40%) | Walk to the Deputy's room | 80-95% · 9.5 | **9 · W** | Surprise | "Three days." | Will N2 be enough in a hostile room? |
| 22 | 6 | 8: Bopha sits beside Yuthea | AV table unplugged | 85-100% · 9.5 | **9.5 · T** | Suspense | Hearing in progress | One tiny speaker in a full hall. |
| 23 | 8 (the hall, mid-hearing) | domino: 8 -> 9 -> 9.5 throughout | One silent face before N2 | throughout · 10 | **10 · W** | Surprise | The hearing itself | Yuthea's glasses off; silence. |
| 24 | 5 (aftermath, S5) | 9: file B played to Sophy (50-70%) | Recording his own voice | 95-100% · 9.5 | **9.5 · T** | Surprise | — (season end) | Who else is recording? |

**Season curve (end-of-episode level, EP01 -> EP24):**
9 W · 9 T · 9 W · 9 T · 9 W · 9.5 T · 9 W · 9.5 T · 9 W · 9.5 T · **10 W** · 9 T · 9 W · 9 T · 9 W · 9.5 T · 9 W ·
9.5 T · 9 W · 9.5 T · 9 W · 9.5 T · **10 W** · 9.5 T.

**Arc-level shape:**

- **Arc 1 (EP01-12):** episode endings sit at 9 (EP02 is the low baseline: quiet episode, but its last beat is still raised to 9) to 9-9.5 (EP06-10).
  EP10 is the low point (9.5 T), EP11 the release (10 W), EP12 drops the opening to 5 and climbs to a 9 T arc turn.
- **Arc 2 (EP13-24):** EP13 opens low (6, rain, new status quo) and still ends at 9. The hunt rises again EP16-22 with every T at 9.5.
  EP23 is the second 10. EP24 opens at 5 and ends at 9.5 on new information (Season 2 hook), not new pain.
- **Paywall boundary (if ever needed):** end of EP10 (9.5 T, right before the big exposure), as series-arc §7 says.
- **Bully-share caps** follow series-arc §7 (EP01 ≤ 33% here, see §3; EP02 ≤ 25%; EP03-12 ≤ 10-25%; Arc 2 ≤ 5% then 0%).
  As bullying shrinks, tension must come from timers, hunts and the count, never from new cruelty.

---

## 2. Episode-level devices (one line each, for twist-master and episode-outliner)

| EP | Information gap (what the reader knows vs the characters) | Valve content (keep short) | Cost beat placed (series-arc §4) |
|---|---|---|---|
| 01 | Reader saw the Day 40 hall; nobody on Day 1 did. The Brick's function is hidden until P55. | Empty 11C, echo lines | Signs the apology "as if guilty"; his "Rolling." opens every clip |
| 02 | Reader knows the card is full; the circle does not care. | Pa's one line in an earphone | A day of insults he cannot keep |
| 03 | Reader knows he will play; will Kolab warn them first? | Equipment room door closing | The Coach now knows he filmed |
| 04 | The circle hunts Dara's phone; reader knows it is the Brick. | Kolab's "It's dead." (relief, then the twist that she covered) | The younger teammate hears his idol |
| 05 | Kolab is watching him; reader does not yet know she wants out. | Storeroom quiet | Kolab's brave clip is spent |
| 06 | Copy made; reader does not know Sophy's past. | Shop glow | His war lands on Sophy |
| 07 | Reader knows there is proof; Mealea is told "not yet". | Mealea reading with Sophy | Mealea risks a far posting |
| 08 | Reader hears the fob clink twice; the characters do not connect it. | Routine of the job | The Brick in the adults' drawer |
| 09 | The deletion looks final; the stick is hidden. | Walk home with Rany | Rany loses face |
| 10 | Reader sees the frame-up being built; Visal is silent. | Rachana's gloat (he records) | He throws away a weapon |
| 11 | Reader knows what the cold open was; the hall does not. | Honour roll, donors thanked | Kolab's voice on clip 41 too |
| 12 | Fragment points at an adult; reader does not know who. | Moto shed | Mealea's unanswered question |
| 13 | Reader knows the office is the fifth voice's room. | Rain | Kolab blamed by the Ouk side |
| 14 | Reader is led to Chanthy (red herring at full strength). | Shop's last evening | Kolab's family loses the shop |
| 15 | Visal knew; the reader did not. | Chanthy's fear | Chanthy used as a voice |
| 16 | Reader learns the fifth voice before Visal acts. | Rany in the corridor | Rany learns about the job |
| 17 | A person holds what the phone lost. | Tamarind trees | Sophy's risk |
| 18 | Yuthea turns "Rolling." against him. | Staff meeting | Clip 9 spent without a win |
| 19 | Former bullies offer help; is it a trap? | AV office routine | Dara's father's job at risk |
| 20 | Two files, one slot; reader knows both. | The night room | The choice itself |
| 21 | Pocket mode in the Deputy's room; reader knows, Yuthea does not. | Walk to the door | Pa's voice gone |
| 22 | Speakers unplugged; reader does not know Visal's plan. | AV table being unplugged | Rany hears him accused |
| 23 | Domino: each witness surprises the room, not the reader. | One silent face before N2 | "Rolling." heard by the hall and his mother |
| 24 | File B's content is the reader's last unknown. | Recording his own voice | The clean-hero story is gone |

---

## 3. EP01 detailed tension curve (60 panels)

**Spine:** series-arc §8 (B1-B7, panel ranges kept exactly). **Mode:** Surprise. **End:** W, last beat 9.
**Main peak:** P57-58 at 10 (count line). **Twist landing:** P55 (91.7%, inside the 85-95% slot).
**Micro-win:** P29 (48%, **before the midpoint** at P30/31). **Bullying panels:** 19 of 60 = **32%** (§3-3).

The "Content cue" column is a tension guide, not the beat sheet: episode-outliner and dialogue-writer own the wording.
Proposed lines come from series-arc §8 and characters.md; anything marked *(suggest)* is optional.
**B** = bullying panel (the job or the circle's humiliation of Visal; counted in §3-3). **S** = silent panel (no text).

### 3-1. Beat summary

| Beat | Panels | Tension range | Beat avg | Function in the curve | Exit level |
|---|---|---|---|---|---|
| B1 Cold open | 1-4 | 6 -> 8, cut to 4 | 6.3 | Promise peak: shows the reader the top of Arc 1 first. | 4 (time cut) |
| B2 The wound | 5-16 | 4 -> 7, down to 5 | 5.9 | First climb; installs the **13:55 timer**. | 5 |
| B3 The system fails | 17-23 | 5 -> 7, down to 5 | 6.0 | Second climb; the door shuts (fob plant). | 5 (Mealea, uneasy) |
| B4 Edge, disguised | 24-33 | 5 -> **8 (P29)** -> 6 -> 7 | 6.3 | Micro-win spike, then Rachana answers: threat up. | 7 |
| B5 The bottom | 34-41 | 7 -> 8.5 -> 6 | 7.6 | Highest sustained pressure before the twist; retaliation for the micro-win. | 6 (silent) |
| B6 The turn | 42-50 | 5 -> 8 | 6.3 | **Valve** (P42-43), then a slow climb on intent; ends on a stair encounter. | 8 |
| B7 Twist + sting | 51-60 | 7 -> 8 -> 7 -> **9.5 -> 10** -> 8.5 -> 9 | 8.6 | Victory lap, silent cut, twist, count line, sting. | **9** |

**Sawtooth check:** local peaks 8 (P3, promise) · 7 (P13) · 7 (P20, P22) · 8 (P29) · 8.5 (P38) · 8 (P50) · 10 (P57-58).
After the cold open, the peak ladder rises 7 -> 7 -> 8 -> 8.5 -> (valve) -> 10. Troughs rise 4 (P4/P5) -> 5 (P16-17, P23)
-> 6 (P31) -> 6 (P41) -> 5 (P42, the one planned valve) -> 7 (P54, the breath before the twist). No two adjacent beats
share the same average, and no stretch longer than 4 panels stays at one level.

### 3-2. Panel-by-panel curve

| P | Beat | Lvl | Flag | Content cue (tension function) | gap_after (px) |
|---|---|---|---|---|---|
| 1 | B1 | 6 | | Day 40, New Hall wide: parents' rows, tall speakers. Playback bubble with **speaker tail** (sound from the hall speakers). Question: what is playing? | 0 |
| 2 | B1 | 7 | | Bopha in the front row, composed smile (she does not yet understand). | 0 |
| 3 | B1 | 8 | | Rachana ECU, her face **starting** to crack (not broken). Promise peak. | 160 |
| 4 | B1 | 4 | | Caption (narration): "Forty days earlier." Time cut; drop is deliberate. | 120 |
| 5 | B2 | 4 | | Day 1, 11:50: Visal sets the Brick **face-down at its spot** (plant). Corridor noise. | 0 |
| 6 | B2 | 5 | B | Dara pushes the job phone into his hands: "Cameraman." | 0 |
| 7 | B2 | 6 | B | Visal's mouth/hand: "Rolling." (ថត។). Every clip starts with his voice (cost seed). | 40 |
| 8 | B2 | 6 | B | Dara at the back door: "Door's covered." | 0 |
| 9 | B2 | 6 | B | Theara starts his routine (short joke line); the act stays off-frame. | 0 |
| 10 | B2 | 6 | B | Rachana by the door, arms folded, one order. | 0 |
| 11 | B2 | 7 | B | Kolab's face, uneasy, looks away from the phone (P15 seed). | 0 |
| 12 | B2 | 6 | B | Noon light stripes through shut louvres; Visal's knuckles on the phone. Laughter SFX. | 0 |
| 13 | B2 | 7 | B | Theara's laugh too loud; Rachana: "Again. From the start." Local peak. | 0 |
| 14 | B2 | 7 | B | Visal's eyes above the phone; nothing in them. | 0 |
| 15 | B2 | 6 | B | Rachana takes a step closer: short praise that is a threat ("Good boy." *(suggest)*). | 0 |
| 16 | B2 | 5 | B | Dara takes the phone back: "Bell at 13:55. Don't be late." **Timer installed.** | 80 |
| 17 | B3 | 5 | | Deputy's room: the letter on the desk (blank paper). Yuthea: "Sign it, ក្មួយ, and it's finished." | 0 |
| 18 | B3 | 6 | | Rachana signs first, easily. | 0 |
| 19 | B3 | 6 | | Visal's pen hovers; the Brick's olive edge visible in his shirt pocket (pocket mode, visual only). | 0 |
| 20 | B3 | 7 | | Yuthea rises and shuts the door: keys **clink** (SFX), "Close the door." Local peak (fob plant). | 40 |
| 21 | B3 | 6 | | Chanthy taps her pen: "OK? OK." (red-herring tic). | 0 |
| 22 | B3 | 7 | | Visal signs: hand close-up. Injustice peak. | 0 |
| 23 | B3 | 5 | | Mealea outside the glass, looks twice, says nothing (uneasy, not evil). | 80 |
| 24 | B4 | 5 | B | Classroom. Theara: "Still carrying the Brick?" (**mock 1**). | 0 |
| 25 | B4 | 5 | | ECU: the Brick face-down at its spot while the room laughs (plant panel; the reader will re-read it). | 0 |
| 26 | B4 | 6 | | Chanthy collects the handout fee; Visal stands, cannot pay (brief, no lingering). | 0 |
| 27 | B4 | 6 | | Chanthy, glancing at the desk: "Is that even a phone?" (**mock 2**, careless adult). | 0 |
| 28 | B4 | 7 | | Theara's lie: Visal skipped class before lunch. Chanthy: "Visal?" A mark is now at stake. | 0 |
| 29 | B4 | **8** | | **Micro-win.** Visal, flat: "11:52. I was here." (exact time = disguised plant: he knows when things happened.) | 120 |
| 30 | B4 | 7 | | Theara's laugh dies; his mouth opens, nothing comes (first small face-fall). | 0 |
| 31 | B4 | 6 | | Chanthy: "OK? OK. Sit." The room moves on (release). | 0 |
| 32 | B4 | 6 | | Kolab hesitates; a classmate looks down (witness seed). | 0 |
| 33 | B4 | 7 | B | Rachana, low, smiling at the Brick: "a phone from nobody" (**mock 3**). The win has a price. | 80 |
| 34 | B5 | 7 | B | Noon again, louvres shut. Rachana (retaliation for P29): "You like exact times?" *(suggest)* | 0 |
| 35 | B5 | 8 | B | Visal's hands on Dara's phone; the act stays off-frame; only the watchers' faces. | 0 |
| 36 | B5 | 8 | B S | **Silent.** Sophy at her desk looks away (plant). | 0 |
| 37 | B5 | 8 | B | Theara's line, Dara's grin, Kolab's flinch (one reaction panel, no injury). | 0 |
| 38 | B5 | 8.5 | B | Visal's face, still, held a beat too long. Highest pressure before the twist. | 40 |
| 39 | B5 | 7 | | The wheel-rim bell, 13:55: low clang SFX. **Timer fires.** (Low clang ≠ the fob's high clink.) | 0 |
| 40 | B5 | 8 | B | Rachana's hand out: "Delete it. I'm watching." His thumb; no screen, no menu (D14). | 80 |
| 41 | B5 | 6 | S | **Silent.** The doorway empties; Visal alone, the Brick face-down behind him. | 160 |
| 42 | B6 | 5 | S | **Silent. Valve.** 16:30 amber, empty 11C wide. | 0 |
| 43 | B6 | 5 | | Visal walks back to his desk. Memory bubble (echo): "Delete it. I'm watching." | 0 |
| 44 | B6 | 6 | S | **Silent.** His hand over the Brick. For the first time on page, he picks it up. | 0 |
| 45 | B6 | 6 | | ECU: the tape on the cracked corner (Day 1 clean strip). Memory echo: "Is that even a phone?" | 0 |
| 46 | B6 | 7 | | He turns it in his hand; the screen faces away from the reader. Memory echo: "the Brick". | 0 |
| 47 | B6 | 7 | | His eyes, low angle, amber. One line at most: "…Nobody." *(suggest: his play-it-back habit)* | 40 |
| 48 | B6 | 6 | | The Brick goes into his shirt pocket (pocket mode, matches P19). He stands. | 0 |
| 49 | B6 | 7 | | Corridor; Rachana's laugh rises from the stairwell below (sound before face). | 0 |
| 50 | B6 | 8 | | Stair top: Rachana below looks up and smiles. He keeps walking down toward her. | 80 |
| 51 | B7 | 7 | | Rachana's victory lap: "You signed. It's closed." | 0 |
| 52 | B7 | 8 | | Close, looking down at him: "Nobody believes a nobody." (clip 41's line; split into 2 bubbles if long in Khmer.) | 160 |
| 53 | B7 | 8 | S | **Silent cut.** Visal's face, no answer. | 240 |
| 54 | B7 | 7 | S | **Silent.** Alone (bike shed at dusk *(suggest)*): the Brick placed **face-up** for the first time. Breath before the twist. | 120 |
| 55 | B7 | **9.5** | | **TWIST.** Playback bubble with **device tail** from the Brick: Rachana's voice, "Nobody believes a nobody." | 200 |
| 56 | B7 | 9 | | Second playback bubble (earlier today): "Delete it. I'm watching." The reader re-reads P25, P27, P33. | 120 |
| 57 | B7 | **10** | | Visal: "Forty-one clips." | 0 |
| 58 | B7 | **10** | | Visal: "Five voices." (split from P57 for rhythm; keeps the Khmer short.) | 320 |
| 59 | B7 | 8.5 | | Sting. Next morning *(suggest)*: Mealea: "The ceremony is in forty days. We need someone to film." / "You're the Cameraman, aren't you?" (2 bubbles) | 80 |
| 60 | B7 | **9** | | Visal: "…Yes." The Brick's edge in his pocket; framing echoes the hall of P1. **Cliffhanger: intent resolved, outcome open.** | — |

### 3-3. Checks

| Check | Result |
|---|---|
| Panels | 60 (floor 55, ceiling 70) |
| Bullying share (B flag) | B2 P6-16 (11) + B4 P24, P33 (2) + B5 P34-38, P40 (6) = **19 / 60 = 32%**. Even counting the P26 fee scene it is 20 / 60 = 33%. P27 (Chanthy's careless line), P39 (bell) and P41 (empty doorway) are not bullying by the circle. |
| Small win before the midpoint | P29 "11:52. I was here." (panel 29 of 60, 48%), landing face P30. |
| Twist in the 85-95% slot | P55 (91.7%), peak 10 at P57-58 (95-97%). |
| Last beat 9-10 | P60 = 9 (series-arc §7 peak 9 for EP01). |
| Rising overall | Beat averages 6.3 (promise) · 5.9 · 6.0 · 6.3 · 7.6 · 6.3 (valve) · 8.6. |
| Valve before the peak | P41-43 (6 -> 5 -> 5) and the breath P54 (7) right before P55. |
| Silent panels | P36, P41, P42, P44, P53, P54 = 6 (10%). Longest silent run: 2 (P41-42, P53-54). All sit at the bottom, the turn or the play, as series-arc §7 asks. |
| Timers | 13:55 bell (installed P16, fires P39); "forty days" (P4 caption, paid P59). |
| Information gap | Surprise: the Brick's function is hidden; plants P5, P19, P25, P27, P29, P33, P48 all re-read after P55. |
| Rating 15+ | The act is never in frame (P9, P35, P37 show watchers and hands only); no injuries; deletion has no screen detail. |
| No text in images | Times, the count and "Forty days earlier." are bubbles/caption from the viewer; the letter and the phone screen are blank. |

### 3-4. gap_after guidance (for letterer; values are suggestions in px)

- **Default 0** inside a running exchange; **40** after a single strong line inside a scene.
- **80** at scene changes (P16, P23, P33, P40, P50, P59) and after a beat exit.
- **120-160** after a promise or a landing that needs a breath: P3, P4 (time cut), P29 (micro-win), P41, P52, P54, P56.
- **200-240** around the twist: P53 (silent cut before the alone shot) and P55 (the first playback).
- **320** after "Five voices." (P58), the longest gap of the episode, so the sting reads as a new scroll.
- Do not use gaps above 120 anywhere in B2-B4 except P29; long gaps in the bullying stretch would slow it down and
  make it feel longer than its 33%.

---

## 4. Cliffhanger design per episode (what stays open)

| EP | Final panel type | What is answered | What is left open |
|---|---|---|---|
| 01 | Intent | He has 41 clips and will film the hall. | What he plays, and to whom (reader saw the hall). |
| 02 | New ally threat | The card is full. | Kolab saw his thumb: friend or informer? |
| 03 | Face falls | Dara is summoned. | The penalty, and the circle's counter-move. |
| 04 | Watcher assigned | The circle hunts the wrong phone. | Will Kolab watch, or warn? |
| 05 | Offer | Kolab wants out. | Copying risks exposure. |
| 06 | Innocent in danger | The copy exists. | Sophy holds the phone Monday. |
| 07 | Count line | Mealea holds the room. | For how long ("Day twenty-four.")? |
| 08 | Lock | The Brick is confiscated. | What the bullies will do to Kolab. |
| 09 | Hidden stick | The copy was deleted, but not all of it. | Will the stick survive? |
| 10 | Exclusion | He is framed and barred. | How he reaches the AV table. |
| 11 | Silence | Rachana falls before her mother. | (Held by the silent panel; EP12 opens the cost.) |
| 12 | Demand | The fifth voice is an adult. | Who, and the phone is demanded. |
| 13 | Count line | He has inside access. | "Thirty days." to what? |
| 14 | Loss | The copy is gone. | Full card, red herring pointing at Chanthy. |
| 15 | Pointer | Chanthy is not the voice. | "Ask him who taught that girl the bell." |
| 16 | Reveal | The fifth voice is Yuthea. | What can a student do against him? |
| 17 | Promise | Sophy will speak. | Will she be allowed in the room? |
| 18 | Counter-threat | "Rolling." makes him complicit. | How to beat that with the archive alone. |
| 19 | Offer | Former bullies offer testimony. | Rachana's choice. |
| 20 | Choice | Two files, one slot. | Which file goes. |
| 21 | Count line | N2 recorded; Pa's voice gone. | "Three days." to the hearing. |
| 22 | Isolation | Speakers unplugged. | One small speaker in a full hall. |
| 23 | Silence | Yuthea falls. | (Held; EP24 opens the Hero's own clip.) |
| 24 | New threat | His confession is made. | Someone else is recording him. |

All T endings are new information about a threat, not new pain (concept §7, trend-brief AA rules).

---

## 5. Hand-offs

- **twist-master (when writing `twist-plan.md`):** peak windows in §1 are where the twist must land. EP01 twist is
  fixed at P55 (91.7%). Mid-episode small twists fit the "Mid" column (EP01: the micro-win at P29, ~48%). If a twist
  must move outside its window, tell tension-engineer so the valve and peak are moved with it. Two suggestions:
  (1) the cold-open playback bubble (P1) could carry only a fragment of clip 41 (for example "…a nobody."), so
  Rachana's full line at P52 is recognised by the reader and P55 lands as "I heard this before" (three-exposure rule:
  P1 fragment, P52 live, P55 playback). (2) Keep the clip-9 fragment ungendered (series-arc P04) so EP14's red-herring
  peak holds.
- **episode-outliner:** use §3-2 levels and flags as the EP01 beat guide. Keep beat ranges exactly; if a beat needs
  more panels, add them inside B4-B7 (not B2/B5) so the bullying share stays at or below 33%.
- **dialogue-writer:** split lines at P52 and P57-58 as marked; keep silent panels silent; Visal stays at 1-6 words.
  Times and counts are spoken lines only.
- **letterer:** `gap_after` per §3-4; `silent: true` on P36, P41, P42, P44, P53, P54. P1 uses a speaker tail; P55-56 use
  the device tail; P20 and P39 need two distinct sound-word bubbles (high clink vs low clang).

Change log: v1 (2026-11-20) first version. Deviation from series-arc §7: EP02 and EP13 end at 9 (not 8), because skill §7 requires every last beat at 9-10; their quiet baselines stay in the open/mid columns. Built without `twist-plan.md` (not yet written); revisit when it lands.

---

## Summary

1. Season map: 24 episodes with open/mid/valve/peak/end levels, ending levels between 9 and 10, strictly alternating W/T, and 10-endings only at the two climaxes (EP11 Day 40, EP23 hearing).
2. Every episode ends at 9 or more (EP02 and EP13 raised from series-arc's 8 to meet the 9-10 cliffhanger rule), carries a spoken timer, and closes on new information rather than new pain; Arc 1 troughs climb to the EP10 low point and Arc 2 resets at EP13.
3. EP01 is a 60-panel curve with a level for every panel: cold-open promise 8, sawtooth peaks 7 -> 8 (micro-win P29, before the midpoint) -> 8.5 (bottom), valve at P41-43, twist at P55 (9.5), count line 10 at P57-58, sting ending at 9.
4. EP01 checks: bullying 19/60 = 32% (33% at most), six intentional silent panels (longest run 2), 13:55 bell timer installed and fired, and gap_after suggestions from 40 px up to 320 px after "Five voices."
5. twist-plan.md did not exist yet, so twist peaks follow series-arc §4/§7; twist-master should place each twist inside these windows or ask for the peak to move.
