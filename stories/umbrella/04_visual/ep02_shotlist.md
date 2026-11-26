# EP02 샷리스트 — 「맑은 날의 우산」 EP2 「가게 표시」 · panel-director

- 작성: panel-director · 2026-11-26 · Flow-by-hand + Khmer edition · v1
- 게이트: `km_review.py gate --episode 02` → **OK** (Khmer review READY, round 1, sha256 15f9dd7279eb…). 이 샷리스트는 그 검수본 `ep02_script_final.md`만 읽었다.
- 입력: `03_episode/ep02_script_final.md`(검수 완료 최종본, 60패널, KM 줄, 지문, ⟨gap⟩), `03_episode/ep02_beatsheet.md`(§2 패널 표, §3 고정 연출 규칙, §6 art_space, §7 타임라인, §8 패널별 등장인물, §10 플래그), brief「EP02」 locked 1–8 · rulings UA–UE(AE1–AE10), `04_visual/style-bible.md`(§1–§9 + EP02 additions E1–E7), `04_visual/character-sheets.md`(§0–§8 + EP02 additions X1–X6), `04_visual/refs/ref_prompts.md`(카드 01–19), 형식은 `04_visual/ep01_shotlist.md`.
- **패널 60개.** `panel_001`–`panel_060` = 대본 `P01`–`P60`(번호·순서 동일). 대사 패널 46 / 무대사 14(효과음만 panel_028, 끝 캡션만 panel_060 포함). 비트·화자·순서는 대본 그대로다.
- 작업 언어는 한국어. prompt-smith가 그대로 옮길 **camera / composition / subject / art_space는 영어**로 쓴다. 대사(dialogue_ref)는 한국어 원문 — 크메르어는 대본 `KM:` 줄이 원본이고 letterer가 옮긴다.
- 좌/우: `LEFT/RIGHT` 대문자 = 인물 본인 기준(시계 = 태오 LEFT 손목). `screen-left/right` = 화면 기준.
- EP01 형식에 리더 요청 필드 네 개를 더했다: `light:`(style-bible E2 빛 토큰), `cloud:`(CLOUD_* 단계), `attach:`(Flow 첨부 카드, 3장 이하, 카드 번호 + 이름), 그리고 `subject:`에 인물·의상·젖음·소품·표정 슬롯을 함께 적는다. `gap_after:`는 S까지 모든 패널에 적었다.
- **Khmer edition (one line):** No text of any kind in any image — no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing; coins are blank discs, the tin can and the savings jar carry no label; every panel keeps its `art_space` as calm, empty background, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 날씨 ↔ 시간 ↔ 배경)

| scene_id | panels | location | weather · light token | time | state | background (style-bible §6 token wording) |
|---|---|---|---|---|---|---|
| S1 | P01 | LOC_PLAZA | after night rain · `L_DAWN_AFTER_RAIN` | D3 dawn | wet pavers, small puddles; shutter DOWN; bulb already on under the arch-side eave | small square before an old Korean covered-market entrance, pale grey concrete pavers, one drain grate, one old plane tree at the arch-side corner, low two-storey buildings, power lines; a faded green-and-white striped canvas awning juts out from the market arch; any board above the arch is blank or cropped out of frame |
| S2 | P02–P08 | LOC_EAVES_STALL | after night rain · `L_DAWN_AFTER_RAIN` | D3 dawn → early morning | shutter DOWN P02–P03 · **UP from P04** · tape line · arch-side half wet, alley-side half dry (P04) · cart under the eave, parasol folded | tiny stall under a short dark-green corrugated-metal eave with wooden rafters, faded mint-green roll-up shutter, one brass hook centred under the shutter box, white cloth-tape line on grey concrete from the shutter's centre to the eave edge; arch-side half: built-in dark wooden workbench with a small vise and a thread-spool shelf holding one yellow spool, low round stool, one bare bulb on the rafter above, iron-pipe repair rail on the arch-side wall with repaired umbrellas tagged by half-cut cloth ribbons; **+ `LOC_EAVES_FLAP`**: an old faded navy-blue canvas flap hangs from the eave's front edge at the arch-side end, directly above the workbench, plain with no pattern or writing, its bottom edge frayed into a ragged fringe of loose threads; alley-side half: pastel mint shaved-ice push cart with folded pink parasol, tin downpipe at the corner, a folding table and two pastel stools outside the eave |
| S3 | P09–P23 | LOC_EAVES_STALL | `W_BREAK` · `L_MORNING_THIN_SUN` | D3 morning | shutter UP · tape line · floor drying in pale patches · parasol folded · P21–P23 eave cloud L1 | same as S2 |
| S4 | P24–P33 | **LOC_EAVES_STALL ⇄ LOC_PLAZA** (one continuous space: the stall's eave edge and the square right in front of it) — see FL1 | `W_BREAK` · `L_DAZZLE` | D3 midday | cart pulled out to the eave edge into the sun · **parasol stuck (P25) → open from P26** · queue of three faceless customers · tape line · gusts | stall frames = S2 token (flap phrase in `breeze`/`gust` state); plaza frames = S1 token (+ the stall at screen-right) |
| S5 | P34–P46 | LOC_EAVES_STALL | `W_BREAK` · `L_EARLY_AFTERNOON` (P39 only: `L_TIN_B`) | D3 early afternoon | shutter UP · tape line · cart at the eave edge, parasol open · bulb OFF · P45–P46 cloud L2 just outside the eave | same as S2 (flap hanging still) |
| S6 | P47–P53 | LOC_EAVES_STALL | `L_DARKENING` (P47) → `W_SHOWER_ONSET` (P48) → `W_RAIN` (P49–P53) | D3 ~3 pm | parasol folded, **cart pushed inside the shutter at P48** · shutter UP P47–P52 → **DOWN at P53** · town rain everywhere (no cloud rule) | same as S2, minus the cart/table/stools from P48 |
| S7 | P54–P60 | LOC_HYDRANGEA_ALLEY | `W_RAIN` (P54–P55, P56 `the town rain thinning`) → `L_AFTER_RAIN_SUN` (P57–P60) | D3 afternoon | whole alley wet; one yellow umbrella over both; P57–P60 her cloud L1 above the umbrella on her side; P60 gold 3–5 drops | narrow alley along the market's outer wall, old stone wall opposite, hydrangeas in a soil strip and black rubber tubs, mossy drain, one old streetlamp, green iron staircase on the wall; hydrangeas just in full bloom, deep blue-violet, full round heads |

- `--- SCENE BREAK ---`는 6곳: S1→S2(P02 앞), S2→S3(P09 앞), S3→S4(P24 앞), S4→S5(P34 앞), S5→S6(P47 앞), S6→S7(P54 앞).
- S4 안에서 화면이 처마 끝(카트·파라솔)과 앞마당 와이드(P24·P30·P32)를 오가지만 같은 순간·같은 빛·같은 공간이다(카트를 처마 끝 햇빛으로 끌어냈다). 패널마다 `location:`에 그 컷이 주입할 토큰을 적었다(FL1).
- S6 안의 빛 변화(어두워짐 → 소나기 시작 → 시내 비)와 S7 안의 P57 '비가 그치고 해'는 같은 장면 안의 연속된 날씨 변화다(EP1 S8의 '해가 남'과 같은 처리). 장소·의상은 바뀌지 않는다.
- 새 장소 없음. LOC_HYDRANGEA_ALLEY 카드 15는 EP02 필수(ruling UC).

## 2. 패널 크기 → Flow 화면비

| size (이 샷리스트) | Flow aspect | 패널 |
|---|---|---|
| full-bleed | **9:16** | P28(그녀의 비가 파라솔을 친다), P45(메아리 완성), P54(우산 하나), P57(비가 그쳐도 톡톡), P60(클리프행어) |
| medium · medium close · close | **3:4** | P02, P06, P07, P09–P13, P16, P19–P21, P23, P25–P27, P29, P35, P37, P40–P44, P46, P49–P53, P56, P58, P59 |
| medium-wide | **4:3** | P04, P14, P17, P22, P31, P33, P38 |
| wide strip | **16:9** | P01, P08, P24, P30, P32, P48 |
| insert · small | **1:1** | P03, P05, P15, P18, P34, P36, P39, P47, P55 |

합계: 9:16 = 5 · 3:4 = 33 · 4:3 = 7 · 16:9 = 6 · 1:1 = 9 → **60**. 화면비는 대본·비트시트 그대로다(바꾼 것 없음). style-bible §4 기본 3:4, 9:16 = large/full-bleed, 1:1 = insert.

## 3. 연출 규약 (모든 패널 공통)

### 3-1. 시점 코드 → 화면 방향

| code | camera | screen layout |
|---|---|---|
| `HIGH` (plaza) | 45° oblique high angle from second-floor height across the plaza (camera fixed in the buildings opposite the market). **Never straight down.** **Same camera as EP1 panel_001.** | arch + striped awning + plane tree screen-LEFT, the stall screen-RIGHT; top edge cuts above the 2F windows (no sky) |
| `FACADE` (plaza) | eye level from across the plaza, facing the market front | arch screen-left, stall screen-right, hydrangea alley mouth far right; Mansik's fish-cake cart is BEHIND this camera (never in FACADE/FRONT frames) |
| `FRONT` (stall) | from the plaza, facing the shutter, eye level | **ARCH side = screen LEFT (Taeo's half: workbench, stool, bulb, rail, the navy flap at the top-left eave end)**, **ALLEY side = screen RIGHT (Danbi's half: cart, parasol, downpipe)**; vertical centre axis hook → keyhole → tape line between them |
| `REVERSE` (stall) | from under the eave looking out to the plaza | Taeo screen-RIGHT, Danbi screen-LEFT; eave underside across the top; across the plaza: **Mansik's fish-cake cart (centre)**, the plane tree at the right |
| `SIDE-ALLEY` | from the alley-side end, looking along the shutter toward the arch | shutter receding on screen-RIGHT, plaza screen-LEFT, arch far background; Danbi's half nearest the camera |
| `SIDE-ARCH` | from the arch-side end, looking along the shutter toward the alley | shutter receding on screen-LEFT, plaza screen-RIGHT; Taeo's workbench (and the navy flap above it) nearest the camera |
| `OBLIQUE-ALLEY` (P14 only) | from the plaza, standing eye height, about 40° off FRONT toward the alley side | stall front receding to the left, the plaza opening on screen-LEFT with Mansik small in the far background — FL4 |
| `TIN` (P05 = P39) | insert, eye level with the workbench top, the camera tilted slightly down so the coins inside show (AE4) | tin can dead centre, its seam ring at half the frame height, the unrolled tool roll and one yellow spool behind it |
| `ALLEY-BACK` | from behind the two walkers, at the square-side mouth looking in (= card 15 view) | **market wall + green iron staircase screen-LEFT, stone wall screen-RIGHT**; Taeo screen-LEFT, Danbi on his RIGHT = screen-RIGHT; his LEFT (outer, iron-staircase side) shoulder wet |
| `ALLEY-SIDE` | low, on the walkers' RIGHT (stone-wall) side, three-quarter front | Danbi nearest the camera, screen-LEFT; Taeo just beyond, screen-RIGHT, his face above her crown; behind them the market's outer wall with the green iron staircase and hydrangea tubs; they walk toward screen-right/the camera; the sun breaks through from the far end of the alley ahead of them (screen-right, off-frame) |

### 3-2. 빛 방향 (화면 기준, FRONT 시점)

- S1–S2 dawn: pearly blue-grey, soft and nearly shadowless; one warm bulb dot over the workbench (screen-left); wet surfaces reflect.
- S3 morning: thin pale sun from screen-left (arch side), soft short shadows to the right; floor drying in pale patches (`L_TIN_A` at P05 belongs to S2: bulb + pearly light from the upper left).
- S4 midday: the brightest light of the episode, high and slightly from screen-right (alley side), very short hard shadows, glare on dry pavers; arch-side half a tone darker in the eave's shade.
- S5 early afternoon: warm light coming from screen-right, a little lower, the bulb OFF. P39 = `L_TIN_B`: low warm light from the right, longer shadow falling left.
- S6: light drops to cool grey (P47) → moving shadow + first fat drops (P48) → grey-green diffuse rain light (P49–P53).
- S7: grey-green rain light (P54–P56) → after-rain sun from the far end of the alley, warm and low, everything wet and glistening (P57–P60).

### 3-3. 고정 규칙 (위반 = REGEN)

1. **이미지 글자 0.** Coins = blank brass/silver discs (no design, numbers, portraits), no paper money, the tin can and the glass jar unlabelled, shutter faces and boards blank, repair tags = half-cut cloth ribbons (muted blue/green/lilac/white), watch dial bar markers only. No papers, receipts, phones.
2. **Taeo never looks up in EP02.** His eyes go to hands, handles, the parasol pole, thread, spools, coins, the floor, the stones ahead, his own shoulder, and in P60 the drops **at eye level** under the canopy rim. P21, P28–P31, P44–P45, P57–P60 especially. (EP1 panel_061 stays the only upward look.)
3. **Gold only in panel_060: three to five drops** in the air just below the yellow canopy's rim at Taeo's eye level (`GOLD_FEW`). Zero gold in P26–P28, P44–P45, P54–P59. Never on the yellow fabric, no glowing cloud, rim light, halo or sparkle effect; the yellow umbrella and thread never glow.
4. **Strong yellow = Taeo's family only:** his umbrella, yellow thread (incl. the band on Danbi's pink umbrella and on Grandma's black umbrella — his repairs), the yellow spool, the yellow tip cap. Brass = aged dull brownish brass. **No red/orange object touching or next to any yellow:** Bomi's red raincoat (P09–P16, P50–P52), syrup jars, the strawberry charm on Danbi's key coil. Only Danbi's small strawberry clip is exempt.
5. **Cloud (R1):** one small grey volumetric cloud ~1 m wide, a clear one-metre gap above her (or above the parasol/umbrella), flat darker underside, no outline, straight vertical column, rain only inside it, dry ground around except one wet circle/puddle at her feet (exceptions: S2 pre-cloud wet dawn, S6–S7 town rain). Under the eave it is squashed flat (`CLOUD_EAVE`). Never straight down over her head. Max level in EP02 = **L3**.
6. **Two-finger push only in panel_036.** P37 shows the same push ending (fingers lifting off the already-returned coins, seen from afar); P38 customers simply leave holding their coins; in P41 he does not touch her coins at all.
7. **The navy flap (`PROP_AWNING_FLAP`)** exists from EP02 on and is always in the same place (eave front edge, arch-side end, above the workbench). Navy only — **no yellow thread or patch on it** (EP3). Shown three times as a beat (P04 drops, P32 gust, P49 leak) + small in P01, P24. Nobody points at it except Danbi's one look-up in P49.
8. **No touch at all in EP02.** Near-touches: P03 (one knuckle between fingers at the keyhole), P26 (two fingers between her hand and his handle on the pole), P54–P55/P60 (one-fist gap between their shoulders, always visible). P58: her finger points at his shoulder, never touches.
9. **Continuity locks:** tape line in every stall frame · hook empty (no keys hung — custom is EP4) · Danbi O1 all day, Taeo O1 · Danbi's pink umbrella = fixed (yellow band + cap) with a **plain white crook handle, NO ribbon**, with her until P51, Bomi from P51 · his yellow umbrella on the rail except where he holds it (P26, P44–P45, P48, P53–P60) · parasol folded until P25, open P26–P46, folded P48 on · cart inside the shutter from P48 · the wet rag stays draped at the eave-side end of the rail (small, nobody looks) · tin can: P05/P39 on the workbench, P47 into the drawer.
10. Height: Danbi's crown = Taeo's shoulder; Bomi (125 cm) about his hip / Danbi's chest; Grandma a little shorter than Danbi (his chest height). Extras (`EXTRAS_SHOPPERS`): faces simplified and soft, umbrellas only muted blue, green, clear plastic, grey check — **never yellow or red**, never bigger than the named cast (AE8).

### 3-4. art_space (말풍선 빈자리) 규칙

- Default: the upper area on the speaker's side (FRONT: Taeo upper-left, Danbi upper-right; REVERSE the opposite). 1 bubble ≈ half the width × upper 1/5 (3:4) · 1/4 (1:1) · 1/3 (4:3) · 1/6 (9:16); 2 bubbles ≈ upper 1/3 (3:4) or 1/4 (9:16). When two speakers share a panel, **the first speaker's bubble sits higher or further left** so the viewer reads them in script order.
- Never over faces, hands, handles (esp. the ribbonless white handle in P41), yellow thread/cap/spool, keys, the keyhole, the hook, coins, the tin can, the jar, the navy flap (P04, P32, P49) or the gold drops (P60).
- **Cloud rule:** when the cloud is in frame, the bubble goes to the opposite side, at least one cloud-width away (crop the cloud at its corner when the frame is tight); 9:16 may use the lower third of dry pavement instead. Never next to/above/below the cloud or inside the rain column — the cloud must never read as a thought bubble.
- **Viewer limits** (as EP01 §3-4): a bubble's left edge x plus its width w ≤ 100 %; Khmer runs two lines at most. So in FRONT stall frames the hook sits small at the very top edge (top ~6 %) or just out of frame, and the bubble band runs across under the shutter box (dark storage when the shutter is UP, blank mint face when DOWN).
- Good calm areas in EP02: the blank lowered shutter (P02–P03, P53), the dark open storage and eave underside (S3–S5), the dazzling sky (S4 wides), the darkening sky (P48), the wet market wall above the hydrangea tubs and beyond the canopy rim (S7).
- **Longest bubble: P42 ② (45 chars)** → the whole upper third, full width (two lines, w ~60 %). Other long ones (w 55–60 %): P46 (38), P21 ① (38), P12 ② (37), P13 ② (35).
- `art_space` lines here are the panel-director draft. **letterer writes the final wording in `ep02_lettering.md`; if it differs, this file is synced to it** (EP01 rule: the lettering file is the authority for the wording) — FL10.
- Silent panels (`art_space: none`) may use the full frame. Exceptions: panel_028 keeps one SFX patch; panel_039 keeps nothing (identical to panel_005); panel_060 keeps its bottom sixth empty for the end caption.

### 3-5. 세로 스크롤 리듬 지도

| beat | panels | rhythm |
|---|---|---|
| B1 열쇠 경주 | P01–P08 | 16:9 HIGH establishing (M) → 3:4 race lost → 1:1 two keys → 4:3 shutter up + flap/dry half → **1:1 [TIN-A], gap M** → 3:4 jar → 3:4 timer → 16:9 REVERSE Mansik "Round 2" (M) |
| B2 관객 | P09–P16 | fast 3:4 ping-pong (Bomi → Taeo → mimic → quote → protest) → 4:3 audience laugh → 1:1 whisper → 3:4 first customer (M) |
| B3 오독 | P17–P23 | 4:3 grandma → 1:1 two yellow bands (silent) → 3:4 face falls → 3:4 praise → 3:4 eave drizzle L1 → 4:3 clue re-shown → 3:4 reset (M) |
| B4 눈부신 틈 | P24–P33 | 16:9 dazzle → 3:4 latch → 3:4 line kept → 3:4 flustered → **9:16 L3 on the parasol (SFX)** → 3:4 near-catch → 16:9 crowd covers → 4:3 Mansik covers → 16:9 gust, flap → 4:3 irony (M) |
| B5 반전 | P34–P41 | 1:1 hands → 3:4 payment → **1:1 two-finger push** → 3:4 witness (M) → 4:3 laugh valve → **1:1 [TIN-B], gap L** → 3:4 her coins → 3:4 "never left it" (M) |
| B6 메아리 | P42–P47 | 3:4 longest bubble → 3:4 "one line" → 3:4 hand already on the handle → **9:16 cloud + his umbrella tip down (M)** → 3:4 laugh → **1:1 drawer + bent rib, gap L** |
| B7 소나기 | P48–P53 | 16:9 the timer pays off → 3:4 flap leaks → 3:4 Bomi → 3:4 she gives her shield → 3:4 empty hands → 3:4 one umbrella offered (M) |
| B8 우산 하나 | P54–P60 | **9:16 one umbrella from behind (M)** → **1:1 the gap, gap L** → 3:4 chatter → **9:16 rain stops but the tapping does not (M)** → 3:4 mimic = worry → 3:4 **first smile, gap XL** → **9:16 she looks at the gap, he looks at the gold** + caption |

<!-- HEADER DONE: location table + aspect table + conventions -->

---

## 4. 패널

### panel_001
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 열쇠 경주 · tension 3 · ⟨정적⟩⟨복선⟩ 그는 늘 먼저
- size: wide strip (aspect 16:9)
- light: after night rain · `L_DAWN_AFTER_RAIN`
- cloud: none
- camera: HIGH — 45° oblique high angle from second-floor height across the plaza, normal lens, looking at the market facade; NOT straight down. **Same camera position, angle and crop as EP1 panel_001** (a new day on the same stage).
- composition: Facade seen from above. LEFT third: the market arch with the faded green-and-white striped awning and the old plane tree at the arch-side corner, everything wet and darkened. RIGHT edge: the stall — dark-green corrugated eave, faded mint shutter DOWN (blank); at the eave's arch-side end (the stall's left end) a small dark navy patch of hanging canvas, and under the eave above the workbench ONE bare bulb already glowing as a small warm dot. Top edge cuts just above the 2F windows: no sky. The empty pavers shine with pearly reflections and small puddles. Centre-left, small: Danbi running left→right toward the stall, a mint coil key looped on her wrist, a closed pink umbrella tucked under her arm with its yellow thread band turned toward the camera (a tiny bright-yellow mark). No one else in the square.
- subject: Danbi tiny (O1: mint denim pinafore dress, cream T-shirt, pale pink rain boots, top bun with mint scrunchie), dry; `PROP_DANBI_UMBRELLA_FIXED` folded; the bulb dot; `PROP_AWNING_FLAP` tiny. Taeo NOT visible (only his bulb).
- emotion: hush of dawn; her small figure eager, racing.
- motion/direction: eye enters at the arch (upper-left), follows her run to the warm bulb dot at the right edge — she is already second.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 06 LOC_PLAZA_ARCH · 05 LOC_EAVES_STALL_day · 02 DANBI_turnaround
- gap_after: M
- fx/note: The bulb dot sits where EP1 P01's yellow dot was — he is already there. The yellow band under her arm = "after EP1" without words. Flap tiny, navy, no yellow. Keep the red strawberry charm on her wrist away from the yellow band (wrist on the far side). Same camera as EP1 P01 — FL9.

--- SCENE BREAK --- (S1 → S2: under the eave, shutter still DOWN)

### panel_002
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 4 · ⟨웃음⟩
- size: medium (aspect 3:4)
- light: `L_DAWN_AFTER_RAIN` (bulb warm at screen-left, pearly elsewhere)
- cloud: none
- camera: FRONT, eye level, medium two-shot (knees up), slightly wide.
- composition: Shutter DOWN, its blank faded-mint face fills the upper half; the small brass hook at the very top edge (top ~6 %), empty. Screen-RIGHT: Danbi bursting in under the eave from the right, breathless, holding her mint coil key high in triumph. Screen-LEFT: Taeo already seated on the low round wooden stool by the workbench under the warm bulb, head down, untying the leather ties of the khaki tool roll on his knees; brass watch on his LEFT wrist (on the viewer's right side of his body). Tape line on the wet concrete between them. Arch-side floor wet with small puddles; alley-side floor dry. Her raised key stays below y ~30 %.
- subject: Taeo O1 (rolled-sleeve faded denim shirt, dark navy apron, charcoal trousers, black rain boots, brass watch LEFT wrist, pencil behind RIGHT ear), dry; Danbi O1, dry; `PROP_SHUTTER_KEYS` (hers: mint coil + tiny red strawberry charm); tool roll.
- emotion: Danbi: D7 delighted open smile + `holding her key up high in triumph`. Taeo: T2 deadpan, eyes down on the tool-roll ties, not looking up at all.
- motion/direction: her raised key pulls the eye up-right, his bowed head brings it down-left.
- dialogue_ref: 단비 "오늘은 제가 일등…!" / 태오 "두 번째입니다."
- art_space: two areas on the blank lowered shutter face: upper-right (x ~50-94 %, y ~8-24 %) above Danbi's raised key for her bubble, and upper-left (x ~6-46 %, y ~14-30 %) above Taeo's bowed head, a little lower than hers (she speaks first)
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: The yellow spool hidden behind his shoulder (red charm in frame). Shutter blank.

### panel_003
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 5 · ⟨설렘⟩ 닿을 뻔 1 (EP1 P22 메아리)
- size: insert (aspect 1:1)
- light: `L_DAWN_AFTER_RAIN`
- cloud: none
- camera: insert, close, at the bottom centre of the lowered shutter, eye level with the keyhole.
- composition: The single keyhole in the lower centre of the blank mint shutter. From the LEFT, a hand with a rolled denim cuff (brass watch on that LEFT wrist at the frame edge) has ALREADY slid the darker, worn brass key with the blank dark-brown leather tab into the hole. From the RIGHT, a small hand with a thin mint hair tie on its RIGHT wrist thrusts in the identical bright key on the mint spiral coil with the tiny red strawberry charm — half a beat late, its tip stopping just short of the hole. Between his index knuckle and her fingertip: one knuckle's width of empty space — they do NOT touch. Top quarter: plain blank shutter face.
- subject: hands only (Taeo LEFT hand; Danbi RIGHT hand); `PROP_SHUTTER_KEYS`; keyhole.
- emotion: comic race, a held breath at the near-touch.
- motion/direction: his key entered from the left and is already in; hers rushes in from the right.
- dialogue_ref: 태오 "먼저 온 사람이 엽니다." / 단비 "그런 규칙 누가 정했어요?!"
- art_space: top quarter of the image, full width (x ~4-96 %, y ~3-26 %): plain blank shutter face above the keys - Taeo's bubble on the left half, Danbi's on the right half
- attach: 10 PROP_KEYS_AND_HOOK · 11 HANDS_FIX_SEQUENCE
- gap_after: S
- fx/note: Keys identical in shape (same right); only the rings differ. No engraving, no numbers. The one-knuckle gap stays visible. No yellow in frame.

### panel_004
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 4 · ⟨웃음⟩⟨복선⟩ 마른 반쪽 · 걸레 · 해진 차양 자락 ①
- size: medium-wide (aspect 4:3)
- light: `L_DAWN_AFTER_RAIN` → first morning paleness
- cloud: none
- camera: FRONT, standing eye height, slightly down, medium-wide.
- composition: Taeo, screen-LEFT of the axis, pushing the mint shutter UP with one arm — the shutter box at the very top edge, the dark storage interior opening as a band across the upper third (x ~18-92 %); hook small at the top edge. Danbi screen-RIGHT, lips pushed out in a pout, half-turned to mutter to her mint ice cart beside her. **The floor under the eave:** the arch-side half wet with rain marks and a small puddle; the alley-side half neatly dry, the dry area ending exactly at the white tape line. A damp grey cotton rag draped over the eave-side end of the iron-pipe repair rail (screen-left, small, mid-height). **Top-left corner:** the eave's arch-side end with the old faded navy canvas flap hanging over the workbench, a few last drops falling from its frayed fringe onto the tool roll. Nobody looks at the floor, the rag or the flap.
- subject: Taeo O1; Danbi O1, keys pocketed; cart with folded pink parasol (syrup jars at the far right); `PROP_WET_RAG`; `PROP_AWNING_FLAP` (drops); `FLOOR_DRY_HALF`.
- emotion: Taeo: T1 deadpan, a one-word answer, eyes on the shutter. Danbi: D14 pouting, lips pushed out, cheeks slightly puffed.
- motion/direction: the shutter rising (upward motion at left) vs her sulky lean right; the eye then drifts down to the dry half (planted, never pointed at).
- dialogue_ref: 태오 "할아버지." / 단비 "카트야, 내일은 다섯 시다…"
- art_space: upper third of the image from x ~18 % to ~94 % (y ~6-30 %): the dark open storage interior under the rising shutter box — Taeo's small bubble at x ~18-42 %, Danbi's at x ~50-94 %; the flap (top-left corner, x < 16 %) and the rag stay clear
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day · 17 PROP_AWNING_FLAP
- gap_after: S
- fx/note: Write the flap phrase in full even with card 17 attached (AE2). Dry half + rag = background plants, never explained (→EP7). Flap navy only.

### panel_005
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 4 · ⟨정적⟩⟨장사⟩⟨복선⟩ **[TIN-A]** 반전 짝의 기준 높이
- size: insert (aspect 1:1)
- light: `L_TIN_A` — warm light of the bare bulb above mixed with pearly morning light from the upper left
- cloud: none
- camera: **TIN** — insert, eye level with the workbench top, the camera tilted slightly down so the coins inside show (AE4). **This exact camera, crop and composition text are reused in panel_039.**
- composition: **[TIN frame]** Grandfather's old dented tin can stands dead centre on the dark wooden workbench top, its raised horizontal seam ring at exactly half the frame height; the can is filled with plain coins to just below the seam ring, the top layer of blank brass and silver discs visible inside. Behind it, slightly soft: the unrolled khaki-olive canvas tool roll, and one yellow spool standing upright on it to the right of the can. **Only in this panel:** Taeo's fingertips (rolled denim cuff) just leaving the frame at the right edge — he has just set the can down.
- subject: `PROP_TIN_CAN` (no label, no print); `PROP_COINS`; `PROP_TOOL_ROLL`; one yellow spool; Taeo's fingertips leaving.
- emotion: calm, a quiet object fact.
- motion/direction: the eye lands on the seam ring (centre) and remembers its height.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 18 PROP_TIN_CAN · 05 LOC_EAVES_STALL_day
- gap_after: M
- fx/note: The coin level (just under the seam ring) is the twist's yardstick — P39 must match it exactly. No numbers or designs on the coins, no paper money. Light from the upper left, soft shadow falling right. No red in frame.

### panel_006
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 4 · ⟨웃음⟩⟨장사⟩
- size: medium (aspect 3:4)
- light: `L_DAWN_AFTER_RAIN`, a little brighter (early morning)
- cloud: none
- camera: FRONT on the alley-side half, low (crouching height), medium.
- composition: Danbi crouching on the dry alley-side floor, screen-centre-right, tapping with one fingertip a small clear unlabelled glass jar with a dull metal lid on the low shelf under the mint ice cart (only a thin layer of plain coins on its bottom); with her other hand she sets a jar of strawberry syrup upright, facing front, on the cart's edge. Behind her: the tin downpipe at the corner; the dry floor ending at the tape line at screen-left. Upper area: the cart's folded pink parasol and the dark storage beyond.
- subject: Danbi O1, dry; `PROP_SAVINGS_JAR`; `PROP_ICE_CART` (folded parasol); strawberry syrup jar.
- emotion: Danbi: D1 eager smile, talking to her jar; for bubble ② a smug little nod, lips pressed.
- motion/direction: her tapping finger leads the eye down to the jar.
- dialogue_ref: 단비 "저금병아, 오늘은 해 난대." "…내가 정했어."
- art_space: upper third of the image (x ~6-94 %, y ~4-30 %): the dark open storage interior and eave underside above her bun — bubble ① larger at the left, bubble ② small at the right, not over the parasol tip
- attach: 02 DANBI_turnaround · 05 LOC_EAVES_STALL_day · 18 PROP_TIN_CAN
- gap_after: S
- fx/note: The jar is nearly empty (her goal prop); never compared side by side with the tin can (X5). Her pink umbrella out of frame (no yellow next to the syrup).

### panel_007
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 5 · ⟨웃음⟩⟨복선⟩ 타이머 심기 → P48
- size: medium (aspect 3:4)
- light: `L_DAWN_AFTER_RAIN`, early morning
- cloud: none
- camera: FRONT, eye level, medium two-shot (waist up), the axis slightly left of centre.
- composition: Taeo screen-LEFT at the workbench, choosing a spool from the thread-spool shelf at shoulder height, eyes on the spools (the yellow one among black ones). Danbi screen-RIGHT across the tape line, spinning round toward him from her cart, mid-turn. The dark storage interior across the upper third; hook small at the top edge.
- subject: Taeo O1; Danbi O1; thread-spool shelf (black spools + one yellow).
- emotion: Taeo: T2 deadpan, eyes on the spools, a flat fact (NOT looking at the sky). Danbi: D6 startled → indignant, eyebrows up, mouth open to protest.
- motion/direction: her spin points the eye left at him; his eyes stay on the shelf.
- dialogue_ref: 태오 "오후 세 시. 소나기." / 단비 "비 안 와요! 오늘은 하루 종일 해!"
- art_space: upper third of the image under the shutter box (x ~6-94 %, y ~6-30 %): the dark open storage interior — Taeo's bubble on the left half (slightly higher, he speaks first), Danbi's on the right half
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Timer planted; paid off in panel_048. Syrup jars kept at the far right edge, away from the yellow spool.

### panel_008
- scene_id: S2 / location: LOC_EAVES_STALL
- beat: B1 · tension 4 · ⟨웃음⟩ 관객 등장
- size: wide strip (aspect 16:9)
- light: `L_DAWN_AFTER_RAIN` turning to early morning (pale, wet reflections on the plaza)
- cloud: none
- camera: REVERSE, eye level, from deep under the eave looking out at the plaza.
- composition: Top band: the dark-green eave underside with its wooden rafters. Foreground screen-LEFT: Danbi with her back to the axis, setting out glass bowls on her cart. Foreground screen-RIGHT: Taeo with his back to her, laying out tools on the workbench (the navy flap's frayed lower fringe just visible at the top-right corner under the eave edge). The tape line runs between them toward the camera. Background, across the wet plaza at centre: Mansik at his fish-cake cart, eyes DOWN on his steaming pot, raising a skewer high in his RIGHT hand like a referee starting a match; the plane tree at the right; low buildings. A band of pale morning sky between the eave edge and the rooftops above Mansik.
- subject: Danbi O1; Taeo O1; Mansik (`NEIGHBOR_MANSIK`: grey buzz cut, droopy eyes, thick brows, grey T-shirt, dark olive rubber apron, white towel round his neck, fish-cake skewer in his RIGHT hand, black rain boots).
- emotion: Mansik: `calling out like a sports commentator`, amused, eyes on his pot. The two: back to back, busy, ignoring each other.
- motion/direction: eye from the two backs (foreground) out to Mansik's raised skewer (centre).
- dialogue_ref: 만식 "2라운드!"
- art_space: the pale sky band above Mansik, centre (x ~34-70 %, y ~14-34 %), just under the eave edge — not in the plane tree, not over the flap fringe
- attach: 09 LEADS_lineup · 14 CAST_OKJA_MANSIK_BOMI · 06 LOC_PLAZA_ARCH
- gap_after: M
- fx/note: Mansik never looks up. Fish-cake cart: no sign, no writing. Taeo's yellow umbrella out of frame.

--- SCENE BREAK --- (S2 → S3: morning, thin sun, shutter UP)

### panel_009
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 관객 · tension 4 · ⟨웃음⟩
- size: medium (aspect 3:4) — medium-wide framing
- light: `W_BREAK` · `L_MORNING_THIN_SUN` (from screen-left), floor drying in pale patches
- cloud: none
- camera: SIDE-ALLEY, eye level, medium-wide.
- composition: Shutter UP, receding on screen-RIGHT; plaza screen-LEFT in thin sun. Bomi runs in from the plaza (left) toward the arch-side half (middle distance), holding up a clear plastic umbrella flipped inside out in her LEFT hand. Danbi's cart at the right foreground edge (cropped). Far background: the arch-side half with Taeo at the workbench, small. **The rail at the far end is hidden behind the shutter edge / Taeo's body — the yellow umbrella must NOT be in frame.**
- subject: Bomi (`KID_BOMI`: 8, small, black bowl-cut bob with blunt bangs, big round black eyes, missing front tooth, red hooded raincoat, white rain boots, clear umbrella in LEFT hand), inside-out clear umbrella; Taeo O1 far; cart edge.
- emotion: Bomi: mouth wide open calling, eyes big — a cheerful complaint.
- motion/direction: Bomi running left→right into depth; the eye follows her to Taeo.
- dialogue_ref: 보미 "아저씨! 우산 또 고장 났어요!"
- art_space: upper-left quarter of the image (x ~4-48 %, y ~4-22 %): pale morning sky over the plaza above Bomi's head, small bubble
- attach: 14 CAST_OKJA_MANSIK_BOMI · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Red raincoat → NO yellow in frame (rule 4).

### panel_010
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 5 · ⟨웃음⟩ 호칭 정정
- size: medium (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: FRONT-ish, eye level, medium single on Taeo (chest up).
- composition: Taeo centre-left, taking the inside-out clear umbrella from a small hand, already looking only at its bent ribs, not at the child. Screen-RIGHT edge, cropped at the shoulder: Bomi's head (red hood, bowl-cut bangs), blinking up at him. Behind Taeo: the dark storage interior; the thread-spool shelf hidden behind his shoulder.
- subject: Taeo O1; Bomi (edge); clear umbrella inside out.
- emotion: Taeo: T2 deadpan, eyes on the ribs; a factual correction, no sarcasm. Bomi: blinking, puzzled.
- motion/direction: his eyes lead down to the ribs; Bomi's upward gaze points back at him.
- dialogue_ref: 태오 "스물다섯입니다."
- art_space: upper-left fifth of the image (x ~4-50 %, y ~4-20 %): dark storage interior above Taeo's head
- attach: 03 TAEO_turnaround · 14 CAST_OKJA_MANSIK_BOMI
- gap_after: S
- fx/note: No yellow next to the red hood (spool and yellow umbrella out of frame).

### panel_011
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 5 · ⟨웃음⟩ 흉내 ①
- size: medium (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: FRONT on the alley-side half, Bomi's eye height (low), medium two-shot.
- composition: Danbi screen-LEFT, bent toward Bomi, chin tucked, lips pressed flat, half-lidded eyes — a deadpan imitation of him, one finger raised like a teacher. Bomi screen-RIGHT, laughing with her gap-toothed mouth wide open, head thrown back. The cart behind them (folded pink parasol, glass bowls); Danbi's pink umbrella NOT in frame.
- subject: Danbi O1; Bomi (red raincoat).
- emotion: Danbi: D8 mock-serious deadpan. Bomi: delighted belly laugh.
- motion/direction: left (mimic) → right (laugh).
- dialogue_ref: 단비 "스물다섯입니다." / 보미 "똑같아!"
- art_space: upper third of the image (x ~4-94 %, y ~4-28 %): dark storage interior and the eave underside — Danbi's bubble at the left (higher), Bomi's at the right
- attach: 02 DANBI_turnaround · 14 CAST_OKJA_MANSIK_BOMI · 07 DANBI_expressions
- gap_after: S
- fx/note: The mimic is carried by her face (no quote marks; nothing written anyway). No yellow near Bomi.

### panel_012
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 6 · ⟨설렘⟩ 시각이 붙은 인용 (EP2 유일한 인용 놀림)
- size: close (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: close-up on Taeo, eye level, slightly from screen-right.
- composition: Taeo's face and shoulders on the right ~60 % of the frame, head bowed a little; his hands low in the frame (lower-right) bending the clear umbrella's ribs back one by one. Left ~45 % of the frame from the top down to mid-height: plain dark storage interior. The clear ribs stay in the lower third.
- subject: Taeo O1; clear umbrella being straightened.
- emotion: T4 deadpan, one eyebrow raised a hair — quoting her words; face completely flat, no smirk.
- motion/direction: flat; the eye goes from the bubbles down to his working hands.
- dialogue_ref: 태오 "어제 네 시 십 분." "'다신 안 와요.'"
- art_space: left column of the image (x ~4-50 %, y ~4-46 %): plain dark storage interior beside his head — two bubbles stacked vertically (① above, ② below), clear of the umbrella ribs in the lower third
- attach: 03 TAEO_turnaround · 08 TAEO_expressions
- gap_after: S
- fx/note: Bubble ② 37 chars → w ~55 %. The time is spoken only; no clock in frame.

### panel_013
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 6 · ⟨웃음⟩
- size: medium close (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none (none yet)
- camera: medium close on Danbi, eye level, FRONT on the alley-side half.
- composition: Danbi centred low (chest up), cheeks flaming pink, both hands flapping wildly in front of her chest. Upper third: the eave underside and the dark storage interior. Her cart's folded parasol at the right edge.
- subject: Danbi O1, dry.
- emotion: D2 flustered rambling (mouth open mid-sentence, eyebrows up, hands waving) + `cheeks flushed pink`.
- motion/direction: hands waving outward; a fast beat.
- dialogue_ref: 단비 "그건 그냥 하는 말이죠!" "그런 말은 백 번도 넘게 했다고요!"
- art_space: upper third of the image (x ~4-94 %, y ~4-30 %): eave underside and dark storage above her bun — two bubbles, ① left, ② right (② is long, w ~55 %)
- attach: 02 DANBI_turnaround · 07 DANBI_expressions
- gap_after: S
- fx/note: No cloud yet (first cloud P21). Hands below y ~32 %.

### panel_014
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 6 · ⟨웃음⟩ '백 번 → 두 번', 관객 반응
- size: medium-wide (aspect 4:3)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: **OBLIQUE-ALLEY** — from the plaza, standing eye height, about 40° off FRONT toward the alley side, medium-wide, so the plaza opens on screen-LEFT (FL4).
- composition: Screen-RIGHT foreground: Danbi, mouth dropped open; beside her (lower) Bomi clapping, laughing. Mid-ground centre-left: Taeo standing on the arch side of the tape line, holding the repaired clear umbrella open at chest height and checking its canopy, eyes on the ribs. The stall front recedes to the left (shutter UP, dark storage). Screen-LEFT far background across the plaza, small: Mansik at his steaming fish-cake cart, eyes down on the pot, shoulders shaking with laughter. Upper third: the eave underside on the right, pale morning sky over the plaza on the left.
- subject: Taeo O1 + repaired clear umbrella (open); Danbi O1; Bomi (red raincoat); Mansik far.
- emotion: Taeo: T1 deadpan, flat exact correction. Danbi: D6 startled, jaw dropped. Bomi: clapping, gap-toothed laugh. Mansik: amused grin, eyes down.
- motion/direction: eye from Taeo's flat face → Danbi's dropped jaw → Bomi's clap → out to Mansik laughing.
- dialogue_ref: 태오 "두 번입니다."
- art_space: upper-left third of the image (x ~4-44 %, y ~4-28 %): pale morning sky over the plaza above Taeo, clear of Mansik and the open clear umbrella
- attach: 09 LEADS_lineup · 14 CAST_OKJA_MANSIK_BOMI · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Yellow umbrella on the rail out of frame (red raincoat in frame). Beat sheet said FRONT; Mansik stands behind a FRONT camera, so the angle is turned (FL4).

### panel_015
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 5 · ⟨설렘⟩⟨복선⟩ '그는 다 기억한다' 씨앗
- size: insert (aspect 1:1)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: close, on the cart top, eye level with the jars.
- composition: Danbi's forehead pressed against a jar of strawberry syrup standing on the cart top, eyes squeezed shut, lips close to the glass, whispering. Her bun with the mint scrunchie and the red strawberry clip in frame; the jar's red syrup at lower-centre. Top quarter: soft out-of-focus dark storage interior. Taeo's side out of frame.
- subject: Danbi O1 (head and one hand on the jar); strawberry syrup jar (no label).
- emotion: a secret whisper, cheeks a little pink, embarrassed awe (D4 + `cheeks flushed pink`).
- motion/direction: inward, private.
- dialogue_ref: 단비 "딸기야… 저 사람, 말을 다 외우나 봐…"
- art_space: top quarter of the image (x ~4-96 %, y ~3-26 %): soft dark storage interior above her head - not over the syrup jar
- attach: 02 DANBI_turnaround · 07 DANBI_expressions
- gap_after: S
- fx/note: No yellow in frame (red syrup).

### panel_016
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B2 · tension 4 · ⟨웃음⟩⟨장사⟩ 첫 손님
- size: medium (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: SIDE-ARCH, eye level, medium, from just outside the arch-side end.
- composition: Shutter receding on screen-LEFT (dark storage), plaza screen-RIGHT in thin sun. Foreground left edge, soft and cropped: Taeo's back turning to the workbench (thread shelf, yellow spool and rail cropped OUT; the flap above out of frame). Mid-ground: Bomi with the repaired clear umbrella under her arm, running to the cart and pointing only at the strawberry syrup jar. Further back at the cart: Danbi, beaming.
- subject: Bomi (red raincoat, repaired clear umbrella); Danbi O1; Taeo's back, cropped.
- emotion: Bomi: excited pointing. Danbi: D7 delighted open smile.
- motion/direction: a run in depth from the foreground to the cart.
- dialogue_ref: 보미 "딸기 빙수! 딸기만!" / 단비 "오늘 첫 손님!"
- art_space: upper-left (x ~4-48 %, y ~4-20 %) over the dark storage interior for Bomi's bubble, and upper-right (x ~52-94 %, y ~10-26 %) over the pale plaza sky for Danbi's, a little lower
- attach: 14 CAST_OKJA_MANSIK_BOMI · 02 DANBI_turnaround · 05 LOC_EAVES_STALL_day
- gap_after: M
- fx/note: Yellow umbrella and yellow spool out of frame (red raincoat).

<!-- SECTION 4 PART A DONE: P01 – P16 -->

### panel_017
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 오독 · tension 4 · ⟨설렘⟩⟨장사⟩⟨복선⟩ 공정 단서: 레일의 검은 실
- size: medium-wide (aspect 4:3)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: FRONT, standing eye height, medium-wide, centred a little left of the axis.
- composition: Screen-LEFT edge: the umbrella-regular grandmother has just stepped in from the plaza, small and slightly stooped, shopping basket on her LEFT arm (on the viewer's right side of her body), facing right toward Taeo. Centre-left: Taeo, risen from his stool, lifting an old long black umbrella off the iron-pipe repair rail on the arch-side wall. The other old umbrellas on the rail are mended with neat black thread at their joints, each tagged with a half-cut cloth ribbon in muted blue, green or lilac — clearly visible, mid-height. Screen-RIGHT, small: Danbi at her cart, a hand on the ice-shaver crank, leaning her head out to look. Upper third: the dark storage interior band; the hook small at the very top edge. No money anywhere.
- subject: Grandma (`GRANNY_REGULAR`: elderly Korean woman, about 75, small and slightly stooped, short tight white perm, round gentle wrinkled face, small kind eyes with deep smile lines, dusty ash-pink knitted cardigan, cream blouse, loose grey-and-mauve floral elastic-waist trousers, black slip-on shoes, woven brown shopping basket on left arm, kindly smile); Taeo O1; Danbi O1 (small); `PROP_GRANNY_UMBRELLA` (closed, the yellow band not yet visible); `PROP_RAIL_BLACK_THREAD`; the wet rag still on the rail's eave-side end.
- emotion: Grandma: kindly smile, a regular's ease. Taeo: T1 deadpan, eyes on the umbrella. Danbi: curious peek.
- motion/direction: left (Grandma) → Taeo at the rail → Danbi peeking at the right.
- dialogue_ref: 할머니 "총각, 내 우산 다 됐수?" / 태오 "네. 이음매 두 군데."
- art_space: upper third of the image under the shutter box: Grandma's bubble at the upper-left (x ~4-42 %, y ~6-28 %), Taeo's beside it a little lower (x ~44-76 %, y ~10-30 %), over the dark storage interior — the rail's ribbons and the hook stay clear
- attach: 19 GRANDMA_ref · 03 TAEO_turnaround · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Black thread on the old rail umbrellas = the fair clue (grandfather's era). Taeo's own yellow umbrella NOT on the rail in this frame. Grandma pays nothing on screen (UD). Not Okja: no glasses, no red vest, no keys.

### panel_018
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 5 · ⟨설렘⟩⟨복선⟩ 오독의 재료
- size: insert (aspect 1:1)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: insert, over Danbi's shoulder (her point of view), eye level, close.
- composition: Background, sharp: the grandmother's old black umbrella being opened by her (only her hand at the worn dark wooden crook handle), one rib joint turned toward the camera wrapped in a thick neat band of bright sunflower-yellow thread about two centimetres wide. Foreground at the lower-right, sharp too: Danbi's small hand (thin mint hair tie on her RIGHT wrist) holding her own folded pastel-pink umbrella so its rib joint with the same thick yellow-thread band (and the small yellow tip cap) lies parallel to the black umbrella's band. Two yellow bands side by side — the same yellow. Plain soft background between them.
- subject: `PROP_GRANNY_UMBRELLA` (open); `PROP_DANBI_UMBRELLA_FIXED` (folded) + plain white crook handle, no ribbon; two hands.
- emotion: a quiet "huh".
- motion/direction: the eye jumps from one yellow band to the other.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 19 GRANDMA_ref · 04 PROP_UMBRELLAS (AE10)
- gap_after: S
- fx/note: The two yellow bands in one frame are intentional (E5). Her key coil with the red strawberry charm must be out of frame (pocketed). Only Grandma's second repaired joint is out of view (AE7).

### panel_019
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 5 · ⟨정적⟩ 기대가 꺼지는 얼굴
- size: close (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: close-up on Danbi, eye level, FRONT on the alley-side half.
- composition: Danbi's face and shoulders centred low; her eyes go round and then her shoulders drop a little; she holds the folded pink umbrella against her chest (the yellow band below the frame edge). Upper third: plain dark storage interior.
- subject: Danbi O1, dry.
- emotion: D6 startled (round eyes) settling into D11 deflated — `deflated, small resigned smile, shoulders dropping, eyes lowered`; draw the moment between: eyes still round, shoulders already sinking.
- motion/direction: downward sag.
- dialogue_ref: 단비 "아…"
- art_space: upper-left fifth of the image (x ~6-42 %, y ~4-18 %): plain dark storage interior, a small bubble
- attach: 02 DANBI_turnaround · 07 DANBI_expressions
- gap_after: S
- fx/note: A small beat; no cloud yet.

### panel_020
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨설렘⟩ 그의 목표가 한 줄
- size: medium (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: none
- camera: FRONT on the arch-side half, eye level, medium two-shot (waist up).
- composition: Grandma screen-LEFT, beaming, patting Taeo's forearm with her free hand; her opened black umbrella resting on her RIGHT shoulder with the yellow band small and turned away. Taeo screen-RIGHT, tall (she reaches his chest), standing still, eyes down on the umbrella's wooden crook handle. Behind them: the rail of black-thread umbrellas with half-cut ribbons, the workbench edge, the dark storage above.
- subject: Grandma (`GRANNY_REGULAR`, slot `patting his forearm, praising`); Taeo O1.
- emotion: Grandma: kindly smile, proud praise. Taeo: T3 variant `deadpan, eyes on the umbrella handle` — he does not move.
- motion/direction: her patting hand points to him; his eyes bring it down to the handle.
- dialogue_ref: 할머니 "손끝이 영감님 닮았네." / 태오 "아직 멀었습니다."
- art_space: upper third of the image: Grandma's bubble upper-left (x ~4-48 %, y ~4-22 %), Taeo's upper-right a little lower (x ~52-94 %, y ~10-28 %), over the dark storage interior and eave underside
- attach: 19 GRANDMA_ref · 03 TAEO_turnaround
- gap_after: S
- fx/note: She touches him (patting), he stays still — not a lead-to-lead touch. Taeo does not smile.

### panel_021
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 5 · ⟨설렘⟩⟨복선⟩ 오독 확정 · 김샘 이슬비 (R1)
- size: medium (aspect 3:4)
- light: `L_MORNING_THIN_SUN`
- cloud: **L1 forms** — `CLOUD_BASE` + `CLOUD_L1` + `CLOUD_EAVE` (very faint drizzle, pale silver cloud squashed flat under the eave)
- camera: SIDE-ALLEY, eye level, medium.
- composition: Shutter receding on screen-RIGHT, plaza screen-LEFT. Danbi nearest the camera at centre-right (waist up), bent over the cart, whispering to the strawberry syrup jar. Directly above her head, under the eave underside at the top-right: a flat, pale silver-grey cloud squashed under the eave, a faint drizzle falling onto her only, her fringe damp. Far background upper-left: in the sunlit plaza, Taeo's back (small) seeing the grandmother off, she walking away with her black umbrella. The lower-left half of the frame: sunlit drying plaza pavers, plain.
- subject: Danbi O1, `fringe slightly damp`; Taeo O1 (back, small, far); Grandma (back, small, far).
- emotion: D11 deflated, small resigned smile, eyes lowered — a quiet conclusion.
- motion/direction: eye from the flat cloud down to her lips at the jar, then left to the two small figures leaving.
- dialogue_ref: 단비 "노란 실은… 그냥 이 가게 표시구나…" "그렇지, 그런 거지…"
- art_space: lower-left of the image (x ~4-50 %, y ~46-88 %): sunlit, drying plaza pavers — two bubbles stacked (① 38 chars on top, w ~46 %), on the opposite side and more than a cloud-width away from the cloud at the top-right; Taeo and Grandma stay small above this area
- attach: 02 DANBI_turnaround · 01 DANBI_wet_states · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: A whisper — he cannot hear it. Cloud flat under the eave, grey, no outline, never a bubble shape. No yellow near the red syrup (her umbrella out of frame).

### panel_022
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 5 · ⟨웃음⟩⟨복선⟩ 검은 실 vs 노란 실
- size: medium-wide (aspect 4:3)
- light: `L_MORNING_THIN_SUN`
- cloud: L1 — `CLOUD_BASE` + `CLOUD_L1` + `CLOUD_EAVE` (above Danbi, under the eave)
- camera: FRONT, standing eye height, medium-wide.
- composition: Screen-LEFT: the rail of old umbrellas mended with black thread (half-cut ribbons), and at the left edge the grandmother leaving toward the plaza with her black umbrella (the yellow band visible, small). Centre-left: Taeo at the workbench, head down, picking through spools — not looking up. Screen-RIGHT: Danbi in the eave's shade by her cart, pointlessly opening her pink umbrella (yellow band on the camera side, plain white handle); a flat pale cloud squashed under the eave above her, cropped at the top-right corner, faint drizzle on the canopy only. The syrup jars turned to the back of the cart, out of sight. The navy flap at the top-left corner, hanging still.
- subject: Danbi O1 (`fringe slightly damp`) + `PROP_DANBI_UMBRELLA_FIXED` opening; Taeo O1; Grandma (leaving); `PROP_RAIL_BLACK_THREAD`; `PROP_GRANNY_UMBRELLA`; `PROP_AWNING_FLAP` (still).
- emotion: Danbi: D4 trailing off, sheepish smile — an unasked-for excuse. Taeo: T2 deadpan, eyes on the spools.
- motion/direction: the eye compares left (black thread) and right (yellow band), passing Taeo's bowed head.
- dialogue_ref: 단비 "오늘 해가 세네…"
- art_space: upper band of the image on the arch side (x ~16-48 %, y ~6-26 %): the dark storage interior, left of the hook and right of the flap — opposite the cloud at the top-right, a long tail to Danbi
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day · 19 GRANDMA_ref
- gap_after: S
- fx/note: Excuse made in the shade. Taeo never looks up. Strawberry clip only red near her yellow band.

### panel_023
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨웃음⟩ 리셋
- size: medium (aspect 3:4)
- light: `L_MORNING_THIN_SUN` → turning brighter toward midday
- cloud: L1 → none — `the small cloud thinning and fading from its edges, only a few last drops` (cropped at the top-right corner)
- camera: FRONT on the alley-side half, eye level, medium (waist up).
- composition: Danbi centre, her pink umbrella closed and tucked under one arm, slapping both cheeks with her palms, eyes squeezed, determined. The last wisps of the flat cloud dissolving at the top-right corner under the eave. Her fringe still damp. Behind: cart and dark storage.
- subject: Danbi O1, `fringe slightly damp`; folded pink umbrella.
- emotion: D1 eager smile + `patting both cheeks with her palms` — reset.
- motion/direction: a punchy beat; the eye goes to her hands on her cheeks.
- dialogue_ref: 단비 "소단비! 장사하자!"
- art_space: upper-left of the image (x ~4-50 %, y ~4-22 %): dark storage interior and eave underside, away from the fading cloud at the top-right
- attach: 02 DANBI_turnaround · 07 DANBI_expressions
- gap_after: M
- fx/note: Wetness stays (damp fringe) after the cloud goes.

--- SCENE BREAK --- (S3 → S4: midday dazzle; the cart is pulled out to the eave edge — stall edge and square = one continuous space, FL1)

### panel_024
- scene_id: S4 / location: LOC_PLAZA (FACADE, the stall at screen-right)
- beat: B4 눈부신 틈 · tension 5 · ⟨웃음⟩⟨장사⟩
- size: wide strip (aspect 16:9)
- light: `W_BREAK` · `L_DAZZLE`
- cloud: none
- camera: FACADE, eye level, wide, from across the plaza.
- composition: The brightest frame of the episode: intense white-gold sun, very short hard shadows, glare on the dry pale pavers, big white clouds far away in a clear blue sky across the top third. Screen-LEFT: the arch with the striped awning, people pouring out of the market aisle (faceless shoppers carrying closed umbrellas). Screen-RIGHT: the stall — Danbi dragging her mint cart out to the eave's edge into the sun; three faceless customers already lining up in front of it. The arch-side half of the stall (its left end) quiet in shade: the rail, Taeo small at the workbench. At that eave end, the small navy flap stirring slightly in the breeze.
- subject: Danbi O1 (fringe dried); `PROP_ICE_CART` (parasol still folded); Taeo O1 (small); `EXTRAS_SHOPPERS` (faces simplified and soft, closed umbrellas in muted blue/green/clear/grey check); `PROP_AWNING_FLAP` (stirring).
- emotion: Danbi: D7 delighted open smile, calling out (small but readable). Busy, sunny, cheerful.
- motion/direction: crowd flows left→right toward her cart.
- dialogue_ref: 단비 "딸기 빙수 있어요! 시원해요!"
- art_space: upper band of clear blue sky, centre-right (x ~40-90 %, y ~4-22 %), above the stall and the queue — not over the distant big white clouds' bright edges
- attach: 06 LOC_PLAZA_ARCH · 02 DANBI_turnaround · 17 PROP_AWNING_FLAP
- gap_after: S
- fx/note: Extras faces soft, never larger than Danbi (AE8). No yellow/red umbrellas or clothes on extras.

### panel_025
- scene_id: S4 / location: LOC_EAVES_STALL (eave edge, in the sun)
- beat: B4 · tension 5 · ⟨웃음⟩⟨장사⟩ 작은 곤경
- size: medium (aspect 3:4)
- light: `L_DAZZLE`
- cloud: none
- camera: SIDE-ALLEY, eye level, medium.
- composition: Danbi at the cart at the eave edge (centre-right), squinting one eye against the glare, both hands pushing up the cart's strawberry-pink parasol — stuck half open, its old latch jammed on the white pole. Plaza screen-LEFT, blazing; shutter receding screen-RIGHT in shade.
- subject: Danbi O1; `PROP_PARASOL_OPEN` stuck state (`the parasol stuck half open, its old latch jammed`).
- emotion: D13 `squinting one eye against the bright sun, lips pursed with effort`; talking to the parasol.
- motion/direction: upward push, stuck.
- dialogue_ref: 단비 "읏… 너 왜 하필 오늘…!"
- art_space: upper-left of the image (x ~4-46 %, y ~4-22 %): blazing clear sky over the plaza, left of the half-open parasol
- attach: 02 DANBI_turnaround · 07 DANBI_expressions · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Parasol: plain pink, no logo.

### panel_026
- scene_id: S4 / location: LOC_EAVES_STALL (eave edge)
- beat: B4 · tension 6 · ⟨설렘⟩ 선을 지킨 도움 · 닿을 뻔 2
- size: medium (aspect 3:4)
- light: `L_DAZZLE`
- cloud: none
- camera: FRONT, eye level, medium two-shot (thighs up), the tape line visible at the bottom.
- composition: Taeo screen-LEFT, standing right at the tape line on the arch side, holding his FOLDED yellow umbrella near its tip end and reaching across with it: the light natural-wood J-crook handle hooks the parasol's latch and nudges it up — the strawberry-pink parasol pops fully open over the cart (upper-right). On the white parasol pole: Danbi's hand, and two finger-widths below it the wooden crook — NOT touching. **Bottom of the frame: the toe of his black rain boot stopping just before the white tape line.** Danbi screen-RIGHT, startled. The strawberry syrup jars moved to the back of the cart behind her, out of sight. Taeo looks at the latch, not at her face.
- subject: Taeo O1 + `PROP_YELLOW_UMBRELLA` (folded); Danbi O1; `PROP_PARASOL_OPEN`; tape line.
- emotion: Taeo: T3 variant `deadpan, eyes on the parasol latch, deliberately not looking at her face`. Danbi: D6 startled, big round eyes.
- motion/direction: the umbrella shaft makes a diagonal from his hands (left) up to the latch (upper-right); the eye then drops to his boot at the line.
- dialogue_ref: 태오 "선은 안 넘었습니다."
- art_space: upper-left of the image (x ~4-46 %, y ~4-20 %): blazing sky beyond the eave edge on the arch side, above Taeo — not over the yellow umbrella, the crook or the parasol
- attach: 09 LEADS_lineup · 04 PROP_UMBRELLAS · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Near-touch only (two fingers). No red next to the yellow (syrup hidden; her key coil pocketed; strawberry clip exempt). No gold.

### panel_027
- scene_id: S4 / location: LOC_EAVES_STALL (eave edge, under the parasol)
- beat: B4 · tension 6 · ⟨설렘⟩ 정정 틀 → 한 단계↑ (R3 씨앗)
- size: close (aspect 3:4)
- light: `L_DAZZLE`, softened pink under the parasol
- cloud: none in frame — L2 forming OFF-frame above the parasol
- camera: close-up on Danbi, slightly low, under the parasol.
- composition: Danbi's face and shoulders centre-low, both hands gripping the white parasol pole tightly at chest height; cheeks and ear tips flushed pink. The top third: the plain underside of the open pink parasol, glowing softly in the sun.
- subject: Danbi O1, dry.
- emotion: D5 `cheeks and ear tips flushed pink, lips pressed together` → for ② D3 `wincing self-correction, eyes squeezed shut, one palm raised` (draw D5 + both hands on the pole; the ② beat lives in the bubble).
- motion/direction: still, tense; tight grip.
- dialogue_ref: 단비 "혼자 할 수 있었는데…" "아니, 그게 아니라… 고맙… 아니…"
- art_space: upper third of the image (x ~4-94 %, y ~4-30 %): the plain underside of the pink parasol above her head — two bubbles, ① left, ② right
- attach: 02 DANBI_turnaround · 07 DANBI_expressions
- gap_after: S
- fx/note: Emotion order kept: pink → both hands gripping → (cloud next panel). The thank-you breaks off (KM 「អរគុ…」 — not a typo).

### panel_028
- scene_id: S4 / location: LOC_EAVES_STALL (eave edge, in the sun)
- beat: B4 · tension 7 · ⟨설렘⟩⟨들킬뻔⟩ 그녀의 비가 그녀 장사를 친다
- size: full-bleed (aspect 9:16)
- light: `L_DAZZLE` (everything outside the column dry and blazing)
- cloud: **L3** — `CLOUD_BASE` + `CLOUD_L3` + `CLOUD_PARASOL` (slate blue-grey cloud a clear metre above the parasol top)
- camera: low angle (knee height), slightly off FRONT toward the plaza, full vertical frame from the cloud down to the pavement.
- composition: Top fifth: a small slate blue-grey cloud a clear metre above the open pink parasol, flat dark underside, no outline. A straight heavy column of rain pounds the parasol only — splash crowns on the canopy, water streaming off its rim onto the cart. Middle: under the parasol, Danbi frozen at the cart, drops splashing into the shaved-ice bowls. Lower right: the three faceless customers standing just outside the parasol in full sun on dry pavement, bowls in hand. Left edge, cropped: Taeo standing at the tape line, eyes level on the parasol pole. Dry blazing pavement everywhere except the wet ring around the cart.
- subject: Danbi O1, hair and shoulders wet from the splash (L3 wet phrase begins); `PROP_PARASOL_OPEN`; customers (`EXTRAS_SHOPPERS`); Taeo O1 (edge).
- emotion: Danbi: D6 startled, shoulders up. Taeo: T3, eyes on the pole, not up.
- motion/direction: eye from the cloud straight down the column to the bowls, then right to the dry customers.
- dialogue_ref: 효과음 [후두둑 후두둑] (KM 효과음 ព្រួស ព្រួស ព្រួស!) — no bubble
- art_space: SFX patch only: right side at mid-height (x ~62-96 %, y ~30-46 %), clear blazing sky/sunlit wall beside the parasol, outside the rain column and more than a cloud-width below-right of the cloud, above the customers' heads
- attach: 01 DANBI_wet_states · 02 DANBI_turnaround · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: No gold (inside 1 m). Rain only in the column. Taeo's yellow umbrella not in frame (or only its furled tip at the left edge, away from the syrup). Never straight down over her head.

### panel_029
- scene_id: S4 / location: LOC_EAVES_STALL (in front of the cart)
- beat: B4 · tension 7 · ⟨들킬뻔⟩ **들킬 뻔(공식 1회)**
- size: medium (aspect 3:4)
- light: `L_DAZZLE`
- cloud: L3 — cropped at the top-right corner (only its dark underside and the column's top)
- camera: low (customer eye height), medium, from the plaza side of the queue.
- composition: Mid-ground screen-LEFT: the first customer in the queue — a woman holding a bowl, face simplified and soft — blinking at the drumming sound, her head beginning to tilt UP toward the parasol top. Foreground screen-RIGHT, large: Danbi's face under the parasol rim, frozen, drops falling off the rim beside her. Upper-right corner: the edge of the parasol and, beyond it, the cloud's dark underside cropped by the frame, rain column falling onto the parasol.
- subject: customer (`EXTRAS_SHOPPERS`, bowl); Danbi O1 (L3 wet: hair wet and darkened, fringe stuck, shoulders darkened).
- emotion: customer: mild puzzlement, eyes beginning to lift. Danbi: D6 startled → frozen, holding her breath.
- motion/direction: the customer's rising gaze line points to the upper-right; Danbi's frozen face blocks it.
- dialogue_ref: 손님 "어? 비…?"
- art_space: upper-left of the image (x ~4-44 %, y ~4-20 %): blazing clear sky above the customer — more than a cloud-width away from the parasol top and the cloud at the upper-right
- attach: 02 DANBI_turnaround · 01 DANBI_wet_states
- gap_after: S
- fx/note: The episode's official near-catch. The customer's face stays soft (no distinct features). No yellow in frame.

### panel_030
- scene_id: S4 / location: LOC_PLAZA (FACADE)
- beat: B4 · tension 7 · ⟨웃음⟩⟨들킬뻔⟩ 엄호는 우연(군중)
- size: wide strip (aspect 16:9)
- light: `L_DAZZLE`
- cloud: L3 — small and far, above the parasol at the right
- camera: FACADE, eye level, wide.
- composition: Same beat. Screen-LEFT: at the arch exit, a crowd hearing the rain sound all open their umbrellas at once — muted blue, green, clear plastic and grey check umbrellas blooming in the sunshine (NO yellow, NO red). Centre-right: the queue; the first customer's head turning toward the arch (sideways), NOT up. Screen-RIGHT: the stall's eave edge, the pink parasol with the small slate cloud above it and its short rain column — visible to the reader only. Clear blue sky everywhere else.
- subject: `EXTRAS_SHOPPERS` (opening umbrellas, faces soft); customers; Danbi far (under the parasol, small); cloud.
- emotion: comic coincidence; nobody looks up.
- motion/direction: the eye goes from the burst of umbrellas (left) to the customer's turned head, then catches the tiny cloud at the right.
- dialogue_ref: 손님 "소나기 오나 봐!"
- art_space: upper band of clear sky, centre-left (x ~20-56 %, y ~4-20 %), above the opening umbrellas and well away from the small cloud at the right
- attach: 06 LOC_PLAZA_ARCH · 01 DANBI_wet_states
- gap_after: S
- fx/note: The crowd covers her (UD) — not Taeo. Extras' faces soft; umbrellas only the four muted colours.

### panel_031
- scene_id: S4 / location: LOC_EAVES_STALL (REVERSE, looking out)
- beat: B4 · tension 6 · ⟨웃음⟩⟨복선⟩ 만식이 '또'를 처음 쓴다
- size: medium-wide (aspect 4:3)
- light: `L_DAZZLE` outside; shade under the eave
- cloud: L3 → L2 — the column visible falling past the eave edge onto the parasol at the upper-left, the cloud itself cropped/hidden above the eave edge
- camera: REVERSE, eye level, from deep under the eave looking out at the blazing plaza.
- composition: Top band: the dark-green eave underside and rafters. Foreground screen-LEFT: the pink parasol at the eave edge with rain pouring onto it (lighter now), Danbi under it nodding hard. Foreground screen-RIGHT: Taeo's back, bent over the workbench (the navy flap's fringe just under the eave edge at the top-right). Background centre across the bright plaza: Mansik at his fish-cake cart, eyes DOWN on his pot, waving a skewer. The plane tree at the right. Clear sky band between the eave edge and the rooftops. The dry concrete between Danbi and Taeo (with the tape line) fills the lower centre.
- subject: Mansik (`NEIGHBOR_MANSIK`); Danbi O1, L3 wet; Taeo O1 (back).
- emotion: Mansik: `calling out like a sports commentator`, eyes on the pot. Danbi: grabbing the excuse — eager nodding, D2 relieved. Taeo: silent, working.
- motion/direction: eye from wet Danbi (left) → across the plaza to Mansik (centre) → Taeo's silent back (right).
- dialogue_ref: 만식 "또 물받이 새네!" / 단비 "네! 물받이요, 물받이!"
- art_space: Mansik's bubble in the clear sky band centre-right (x ~44-80 %, y ~14-32 %), above Mansik, below the eave edge, not in the plane tree; Danbi's bubble in the lower third, centre (x ~24-62 %, y ~70-90 %), on the dry concrete beside the tape line, outside her drip ring — both more than a cloud-width from the column at the upper-left
- attach: 14 CAST_OKJA_MANSIK_BOMI · 09 LEADS_lineup · 06 LOC_PLAZA_ARCH
- gap_after: S
- fx/note: Mansik never looks up; the second cover is Mansik (UD). Taeo does not correct it. Yellow umbrella out of frame.

### panel_032
- scene_id: S4 / location: LOC_PLAZA (FACADE)
- beat: B4 · tension 6 · ⟨웃음⟩⟨복선⟩ 해진 차양 자락 ② · 그녀의 비가 경쟁자 손님을 만든다
- size: wide strip (aspect 16:9)
- light: `L_DAZZLE`, sudden gust
- cloud: L2 — small and far, above the parasol at the far right
- camera: FACADE, eye level, wide, slight wide-angle.
- composition: The crowd with open umbrellas steps out into the sunny plaza and a hard gust of the dazzling break sweeps through: three cheap umbrellas (muted blue, green, grey check) flip inside out, ribs bent upward, their owners staggering (centre). Screen-RIGHT: the stall — at its arch-side eave end (the stall's left end, nearest the centre of the frame) the old faded navy canvas flap whips in the gust, loose threads flying from its frayed fringe. Far right: the pink parasol with its small light-grey cloud. Clear sky, short hard shadows.
- subject: `EXTRAS_SHOPPERS` (three flipped umbrellas: `three cheap umbrellas flipped inside out by a gust, ribs bent upward`); `PROP_AWNING_FLAP` (`the flap whipping in the gust, loose threads flying`); cloud far.
- emotion: comic chaos.
- motion/direction: the gust blows left→right — umbrellas flip, the flap snaps, the eye lands on the stall.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 06 LOC_PLAZA_ARCH · 17 PROP_AWNING_FLAP · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Flap navy only, no yellow. Extras faces soft. Spell out the flap phrase even with card 17 (AE2).

### panel_033
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B4 · tension 5 · ⟨웃음⟩⟨장사⟩ 코믹 아이러니 = 독자의 예측 완성
- size: medium-wide (aspect 4:3)
- light: `L_DAZZLE`
- cloud: L2 → L1 fading, OFF-frame above the parasol (only a few last drops falling off the parasol rim)
- camera: FRONT, standing eye height, medium-wide.
- composition: Screen-LEFT (arch-side half): three people holding inside-out umbrellas lined up in front of the repair rail; Taeo at the workbench already taking the first one. Screen-RIGHT (alley-side half, at the eave edge): Danbi in front of a shaved-ice bowl filled with rainwater, wet fringe stuck to her forehead, mouth hanging open, frozen; her queue is gone. The parasol top cropped at the upper-right edge, a few last drops off its rim. Upper third: the shutter box at the top edge, the dark storage interior band. Mansik not in frame.
- subject: three customers (`EXTRAS_SHOPPERS`, flipped umbrellas); Taeo O1; Danbi O1, L3 wet (hair darkened, fringe stuck); bowl of rainwater.
- emotion: Danbi: stunned, mouth open (D6 frozen). Taeo: T2, eyes down on the first umbrella.
- motion/direction: the queue (left) vs the empty space before her cart (right).
- dialogue_ref: 만식(화면 밖) "태오 총각은 오늘 대박이네!" / 단비 "제 손님은요…?"
- art_space: upper third under the shutter box, over the dark storage interior: Mansik's off-frame bubble at the upper-left (x ~14-48 %, y ~6-26 %, tail to the left edge toward the plaza), Danbi's at the upper-right (x ~52-88 %, y ~10-30 %) above her head, left of the cropped parasol
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day
- gap_after: M
- fx/note: The reader's prediction is complete here ("her rain feeds his business"). Taeo's yellow umbrella out of frame (syrup at right). Hook small at the top edge.

<!-- SECTION 4 PART B DONE: P17 – P33 -->

--- SCENE BREAK --- (S4 → S5: early afternoon, light lower from the right, bulb off; cart stays at the eave edge, parasol open)

### panel_034
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 반전 · tension 5 · ⟨정적⟩⟨장사⟩ 빠른 손(직업 반사)
- size: insert (aspect 1:1)
- light: `W_BREAK` · `L_EARLY_AFTERNOON` (warm, from the right; bulb off)
- cloud: none
- camera: insert, close, slightly above the workbench top.
- composition: Taeo's hands (long fingers, short clean nails, light calluses, rolled denim cuffs, brass watch on his LEFT wrist) bending the ribs of an inside-out muted-green cheap umbrella back into place one by one, then tightening the top notch with pliers. No new parts, NO yellow thread — only straightening. The unrolled tool roll at the lower edge (the yellow spool cropped out).
- subject: Taeo's hands (`HANDS` token); one flipped extra's umbrella; pliers.
- emotion: brisk, expert, matter-of-fact.
- motion/direction: quick circular motion of the hands, left to right.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 11 HANDS_FIX_SEQUENCE · 03 TAEO_turnaround
- gap_after: S
- fx/note: "Straightened only" must read: bent ribs, no spare rib, no thread. Watch = dull brass, bar markers.

### panel_035
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 6 · ⟨웃음⟩⟨장사⟩ 대가 제시
- size: medium (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: SIDE-ARCH, eye level, medium, from the arch-side end.
- composition: Foreground screen-LEFT: the workbench end and Taeo seated at it, handing back the straightened green umbrella (the navy flap's fringe hangs at the very top-left corner, still). Screen-RIGHT (plaza side): the office-worker customer in a plain white short-sleeve shirt with a loosened tie, face simple and soft, setting a few plain coins down on the workbench with his free hand. Far background along the stall: the pink parasol at the eave edge, Danbi small beneath it wiping bowls. The tin can on the bench is cropped out.
- subject: Taeo O1; customer (`office worker in a plain white short-sleeve shirt and grey slacks, face simple and soft, no lanyard or badge`, loosened plain tie); `PROP_COINS` (a few, no paper money).
- emotion: customer: relieved, casual, asking. Taeo: T1 deadpan.
- motion/direction: the customer's hand (right) → coins → Taeo (left).
- dialogue_ref: 손님 "얼마예요? 이 정도면 돼요?"
- art_space: upper-right of the image (x ~50-94 %, y ~4-20 %): clear sky over the plaza above the customer — the flap at the top-left corner stays clear
- attach: 03 TAEO_turnaround · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: No amount spoken, none visible. Coins blank discs.

### panel_036
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 7 · ⟨설렘⟩⟨반전⟩⟨장사⟩ **반전 행동: 두 손가락 밀어내기(이 회차 유일한 동작)**
- size: insert (aspect 1:1)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: insert, close, low over the workbench top, side view along the bench.
- composition: On the dark wooden workbench top: a small heap of plain coins. Taeo's LEFT hand enters from the left — index and middle fingers together, resting on the heap and slowly sliding it back across the wood toward the right, where the customer's open hand waits at the right edge (cuff of a white shirt). The brass watch on Taeo's LEFT wrist clearly in frame at the left. His face out of frame. Top quarter: soft dark storage interior.
- subject: Taeo's LEFT hand + watch; `PROP_COINS`; customer's hand (edge).
- emotion: calm, unhurried, final — no flourish.
- motion/direction: the push runs left→right; the eye follows the coins back to the customer.
- dialogue_ref: 태오 "펴기만 했습니다."
- art_space: top quarter of the image (x ~4-96 %, y ~3-24 %): soft dark storage interior above the hands - not over the two fingers or the coins
- attach: 11 HANDS_FIX_SEQUENCE · 18 PROP_TIN_CAN
- gap_after: S
- fx/note: `his index and middle fingers slowly sliding a small heap of plain coins back across the workbench toward the customer, brass watch on his left wrist` (X5). This is the ONLY drawing of the push (rule 6). No yellow in frame.

### panel_037
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 6 · ⟨정적⟩⟨복선⟩ **목격(1회)**
- size: medium (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: over Danbi's RIGHT shoulder from the alley-side half, looking along the stall toward the arch side, eye level, medium.
- composition: Foreground screen-RIGHT: Danbi under the parasol rim, in three-quarter lost profile — her cheek, one raised eyebrow, her hand stopped mid-wipe on a wet glass bowl, the cloth still. Across the tape line, mid-distance at screen-left-centre: Taeo at the workbench, his two fingers just lifting away from the small heap of coins he has pushed back; the office worker's hand reaching for them. Taeo's eyes stay on the bench — he does not look at her. The dark storage across the upper third.
- subject: Danbi O1 (L3 wetness drying: hair still damp and darkened); Taeo O1 (mid-distance); customer (soft).
- emotion: Danbi: D12 `puzzled, one eyebrow raised, head tilted slightly`. Taeo: T1, unaware.
- motion/direction: her eye-line leads from the foreground to the coins at the bench.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 09 LEADS_lineup · 07 DANBI_expressions · 05 LOC_EAVES_STALL_day
- gap_after: M
- fx/note: The END of the same push seen from her side (fingers lifting off) — not a second push (FL5). She does not know why.

### panel_038
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 5 · ⟨웃음⟩ 웃음 밸브
- size: medium-wide (aspect 4:3)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: FRONT, standing eye height, medium-wide.
- composition: Background screen-LEFT: the two remaining customers walking off toward the plaza with their repaired umbrellas, each still holding coins in an open palm, heads tilted, puzzled. Taeo at the workbench behind them, head down. Foreground screen-RIGHT, large: Danbi bent close to the strawberry syrup jar on her cart, whispering behind her hand. Upper third: dark storage band.
- subject: Danbi O1 (damp); two customers (`EXTRAS_SHOPPERS`, soft faces); Taeo O1.
- emotion: Danbi: D12 puzzled, conspiratorial whisper. Customers: shrugging.
- motion/direction: left (leaving, puzzled) → right (her whisper).
- dialogue_ref: 단비 "…저 사람, 돈 싫어하나?"
- art_space: upper-right third of the image (x ~50-94 %, y ~4-28 %): dark storage interior and eave underside above Danbi's bun
- attach: 02 DANBI_turnaround · 07 DANBI_expressions · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: No finger push drawn here (rule 6). Yellow umbrella out of frame (syrup jar in frame).

### panel_039
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 7 · ⟨정적⟩⟨반전⟩⟨장사⟩ **[TIN-B] 반전 착지: 통 높이 그대로**
- size: insert (aspect 1:1)
- light: `L_TIN_B` — low warm afternoon light from the right, the bulb switched off, a longer shadow falling to the left
- cloud: none
- camera: **TIN** — insert, eye level with the workbench top, the camera tilted slightly down so the coins inside show (AE4). **Identical to panel_005.**
- composition: **[TIN frame]** (word for word as panel_005) Grandfather's old dented tin can stands dead centre on the dark wooden workbench top, its raised horizontal seam ring at exactly half the frame height; the can is filled with plain coins to just below the seam ring, the top layer of blank brass and silver discs visible inside. Behind it, slightly soft: the unrolled khaki-olive canvas tool roll, and one yellow spool standing upright on it to the right of the can. **No hands.**
- subject: `PROP_TIN_CAN`; `PROP_COINS` (same level as P05); `PROP_TOOL_ROLL`; one yellow spool.
- emotion: still; the twist lands in silence.
- motion/direction: the eye goes to the seam ring and finds the same height.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 18 PROP_TIN_CAN · 05 LOC_EAVES_STALL_day · **panel_005 image (framing anchor — make panel_005 first)**
- gap_after: **L**
- fx/note: Only two differences from panel_005: the light (from the right, bulb off, shadow to the left) and no fingertips. Same camera, crop, scale, can position, spool position, coin level. If the level drifts up or down → REGEN.

### panel_040
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 6 · ⟨웃음⟩⟨장사⟩ EP1 「내일」 약속 회수
- size: medium (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: FRONT, eye level, medium two-shot (waist up).
- composition: Screen-RIGHT: Danbi, the small glass savings jar hugged in her LEFT arm, has stopped short at the tape line — toes behind it — and stretches her RIGHT arm all the way across to set a small handful of plain coins on the end of the workbench. Screen-LEFT: Taeo seated at the workbench, eyes down on his work. The tin can is out of frame (the bench end only). The dark storage across the top.
- subject: Danbi O1 (damp); `PROP_SAVINGS_JAR` (now nearly empty); `PROP_COINS`; Taeo O1.
- emotion: Danbi: D7 proud, triumphant grin — "keeping my word". Taeo: T2, eyes down.
- motion/direction: her stretched arm makes a horizontal line right→left over the tape line, ending at the coins.
- dialogue_ref: 단비 "수선비요! 내일 드린다고 했죠?" "오늘이 그 내일이에요!"
- art_space: upper-right of the image (x ~48-94 %, y ~4-34 %): dark storage interior above Danbi's head — two bubbles stacked, clear of her stretched arm and the coins
- attach: 09 LEADS_lineup · 18 PROP_TIN_CAN · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Never compare the jar and the tin can in one frame (X5). Her foot does not cross the line.

### panel_041
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B5 · tension 7 · ⟨설렘⟩⟨반전⟩⟨복선⟩ 반전의 말
- size: medium close (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: medium close on Taeo, eye level, from slightly screen-right.
- composition: Taeo centre-left (chest up), eyes lowered to the lower-right. Lower-right foreground corner: the plain white crook handle of Danbi's pink umbrella leaning against her cart — NO ribbon on it (only the handle and a little pink canopy in frame; the yellow band out of frame). Behind Taeo, soft: the rail of repaired umbrellas, a half-cut cloth ribbon (muted blue, green, lilac) tied to every handle. Lower-left edge: her small heap of coins on the bench end, untouched.
- subject: Taeo O1; `PROP_DANBI_UMBRELLA_FIXED` handle (`plain white crook handle with no ribbon`); rail ribbons; her coins.
- emotion: T3 variant `deadpan, eyes on the umbrella handle` — plain truth, no smile.
- motion/direction: his eye-line points to the ribbonless handle; the background ribbons answer it.
- dialogue_ref: 태오 "맡기신 적 없습니다."
- art_space: upper-left of the image above Taeo's head (x ~4-48 %, y ~4-20 %): the dark storage interior — not over the white handle, the rail ribbons or the coins
- attach: 03 TAEO_turnaround · 08 TAEO_expressions · 04 PROP_UMBRELLAS
- gap_after: M
- fx/note: He does not touch or push her coins (rule 6). Ribbonless handle vs ribboned rail = the picture says the line too.

### panel_042
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 메아리 · tension 6 · ⟨웃음⟩⟨복선⟩ 자기 핑계에 걸림 → 화제 돌리기
- size: medium close (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: medium close on Danbi, eye level, FRONT on the alley-side half; slightly wider so her head sits in the middle third.
- composition: Danbi in the middle and lower thirds, sweeping her coins back into her palm at the bench end, her mouth opening and closing, eyes rolling sideways. The whole upper third: plain dark storage interior and eave underside, nothing in it.
- subject: Danbi O1 (damp), coins in her hand.
- emotion: D4 `trailing off, mouth half-open, eyes drifting aside, sheepish smile` → D2 flustered (changing the subject).
- motion/direction: eyes roll aside; a sly change of topic.
- dialogue_ref: 단비 "그건… 제가 그렇게 말하긴 했는데…" "…그럼 어제 아침엔 뭐라고 하셨어요? 물 소리가 너무 커서…"
- art_space: **the whole upper third of the image, full width (x ~4-96 %, y ~3-34 %)**: plain dark storage interior and eave underside — ① shorter at the left, ② the episode's longest bubble (45 chars, w ~60 %, two lines) across the centre-right below or beside it; her head stays below y ~36 %
- attach: 02 DANBI_turnaround · 07 DANBI_expressions
- gap_after: S
- fx/note: Longest bubble in EP02 — keep the top third completely empty.

### panel_043
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 · tension 7 · ⟨설렘⟩⟨복선⟩⟨이중의미⟩ 묻힌 한마디의 메아리(참말)
- size: close (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none
- camera: close-up on Taeo, eye level, slightly from screen-left.
- composition: Taeo's face on the right half, eyes down; his hands at the lower edge winding bright yellow thread onto a spool. Left half upper: plain dark storage interior. Nothing red in frame.
- subject: Taeo O1; `PROP_YELLOW_THREAD` + spool.
- emotion: T2 `deadpan, eyes down on his hands, focused` — flat, closed.
- motion/direction: the eye goes from his lowered eyes to the turning spool.
- dialogue_ref: 태오 "별말 아니었어요."
- art_space: upper-left of the image (x ~4-46 %, y ~4-20 %): plain dark storage interior beside his head
- attach: 03 TAEO_turnaround · 08 TAEO_expressions
- gap_after: S
- fx/note: A true line in KM (「គ្រាន់តែមួយឃ្លា។」). The yellow thread is matte (no glow).

### panel_044
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 · tension 7 · ⟨설렘⟩⟨복선⟩ **우산이 먼저** (EP1 P51 메아리)
- size: close (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: none in frame — L2 forming OFF-frame
- camera: close-up on Danbi, eye level, slightly from the alley side so the arch side shows behind her at the left edge.
- composition: Danbi's face and shoulders centre-right; cheeks and ear tips flushed pink, words tangling. **Background left edge, mid-height (y ~40-70 %), soft but readable:** a man's hand (rolled denim cuff, brass watch on that LEFT wrist) already gripping the light natural-wood crook handle of the yellow umbrella hanging on the rail — a sliver of furled sunflower-yellow canopy below it. The upper quarter: plain dark storage interior.
- subject: Danbi O1 (damp); Taeo's hand + `PROP_YELLOW_UMBRELLA` (furled, on the rail).
- emotion: D5 `cheeks and ear tips flushed pink, lips pressed together` → D3 for ② (eyes squeezed, one palm raised).
- motion/direction: her face at the front; the eye discovers the hand behind her.
- dialogue_ref: 단비 "별말 아니면 그냥 다시 말해 주셔도…" "아니, 그게 아니라…"
- art_space: upper quarter of the image, full width (x ~4-96 %, y ~3-24 %): plain dark storage interior — ① at the left, ② at the right; the hand on the yellow handle (left edge, y ~40-70 %) stays clear below
- attach: 02 DANBI_turnaround · 07 DANBI_expressions · 04 PROP_UMBRELLAS
- gap_after: S
- fx/note: His hand on the umbrella BEFORE her cloud forms (P45) — the order is the clue (beat sheet §3-6). Strawberry clip is the only red near the yellow.

### panel_045
- scene_id: S5 / location: LOC_EAVES_STALL (just outside the eave, in the sun)
- beat: B6 · tension 7 · ⟨정적⟩⟨복선⟩ 메아리 완성 (EP1 P52 같은 동작)
- size: full-bleed (aspect 9:16)
- light: `L_EARLY_AFTERNOON` (sunlit outside the column)
- cloud: **L2** — `CLOUD_BASE` + `CLOUD_L2` + umbrella phrase `the rain column falls onto her open umbrella only, splashes on the canopy, water dripping off its edge, a puddle at her feet, dry ground around`
- camera: SIDE-ALLEY, low angle (hip height), full vertical frame.
- composition: Top fifth: a small light-grey cloud a clear metre above her. Foreground screen-RIGHT: Danbi, having stepped back out from under the eave into the sunlight, snapping open her pastel-pink umbrella — taut canopy, the repaired rib with its thick yellow-thread band toward the camera, thin rain lines splashing on it, all of it blocked. A puddle at her feet, dry sunlit pavement around. Mid-ground screen-LEFT under the eave: Taeo standing by the rail, holding his furled yellow umbrella by the crook, lowering its black tip to the ground (the same motion as EP1 P52); his eyes level on her umbrella's repaired rib, not up.
- subject: Danbi O1 (`hair and shoulders damp`) + `PROP_DANBI_UMBRELLA_FIXED` (open); Taeo O1 + `PROP_YELLOW_UMBRELLA` (furled, tip down).
- emotion: Danbi: D5 flushed, hiding under the canopy. Taeo: T3, eyes on her umbrella's rib.
- motion/direction: eye from the cloud down the column to her canopy, then left along his eye-line to his lowered umbrella tip.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 01 DANBI_wet_states · 09 LEADS_lineup · 04 PROP_UMBRELLAS
- gap_after: M
- fx/note: No gold (rule 3). He does not open his umbrella — he only lowers it, ready. Never straight down. Syrup jars out of frame (two yellows here).

### panel_046
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 · tension 5 · ⟨웃음⟩ 빚이 생긴다
- size: medium (aspect 3:4)
- light: `L_EARLY_AFTERNOON`
- cloud: L2 → L1 — cropped at the top-right corner above her canopy, drizzle thinning
- camera: FRONT, standing eye height tilted slightly down, framed from the knees up, so the dry concrete and the tape line fill the lower-centre (FL7).
- composition: Screen-RIGHT: Danbi under her open pink umbrella just at the eave edge, hugging the glass savings jar to her chest, declaring across the tape line; a small puddle at her feet; the cloud cropped at the top-right corner. Screen-LEFT: Taeo seated at the workbench, eyes on the yellow thread on his spool. Lower-centre: dry grey concrete and the white tape line between them.
- subject: Danbi O1 (damp) + open pink umbrella + `PROP_SAVINGS_JAR`; Taeo O1 + yellow thread.
- emotion: Danbi: D7-ish determined grin, chin up. Taeo: T2, one word, not looking.
- motion/direction: her declaration goes left across the line; his eyes stay down.
- dialogue_ref: 단비 "수선비는… 언젠가 꼭 갚을 거예요!" / 태오 "네."
- art_space: Danbi's bubble in the lower third, centre-left (x ~22-70 %, y ~70-90 %), over the dry concrete beside the tape line, outside her puddle — opposite the cloud at the top-right; Taeo's small bubble at the upper-left (x ~4-30 %, y ~4-16 %) over the dark storage interior
- attach: 09 LEADS_lineup · 01 DANBI_wet_states · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Danbi's bubble is 38 chars (w ~48 %). Two yellows (her band, his thread) — no red near them except her clip.

--- SCENE BREAK --- (S5 → S6: the sky darkens before the 3 pm shower)

### panel_047
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B6 · tension 6 · ⟨설렘⟩⟨복선⟩ 휜 살 인서트 (EP1 P44 메아리)
- size: insert (aspect 1:1)
- light: `L_DARKENING` — the sky suddenly darkening before a shower, light dropping to a cool grey dimness
- cloud: none
- camera: insert, close, looking down at about 45° into the open workbench drawer.
- composition: The workbench drawer pulled open. Taeo's hand (rolled denim cuff, brass watch on that LEFT wrist) lowering the dented tin can of coins into it. Inside the drawer, beside where the can goes: a single bent silver umbrella rib with scraps of grey tape, lying neatly, straight along the drawer's side. Plain dark wood. Cool grey light falling across.
- subject: Taeo's hand; `PROP_TIN_CAN`; `PROP_BENT_RIB` (`lying neatly beside the tin can inside the open workbench drawer`).
- emotion: quiet, private keeping.
- motion/direction: the can goes down; the eye slides to the bent rib.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 18 PROP_TIN_CAN · 11 HANDS_FIX_SEQUENCE · 04 PROP_UMBRELLAS
- gap_after: **L**
- fx/note: The bent rib is EP1's (her taped rib) — he kept it. Danbi off-frame. No yellow, no text.

<!-- SECTION 4 PART C DONE: P34 – P47 -->

### panel_048
- scene_id: S6 / location: LOC_EAVES_STALL (FRONT wide, the plaza edge in the foreground)
- beat: B7 소나기 · tension 5 · ⟨웃음⟩⟨복선⟩ P07 타이머 회수
- size: wide strip (aspect 16:9)
- light: `W_SHOWER_ONSET` — a moving shadow sweeping over the bright square, fat first raindrops spotting the dry pavement
- cloud: none (town rain — no cloud rule)
- camera: FRONT, eye level, wide, from a little way out on the plaza so the market wall above the eave and a strip of sky show at the top.
- composition: Top band: the old market wall above the dark-green eave and a strip of fast-darkening grey sky. The shadow of the shower sweeping across the plaza from the left; fat first raindrops spotting the pale dry pavers in the foreground. Screen-RIGHT: Danbi pushing her mint cart (parasol folded) into the dark storage under the raised shutter. Screen-LEFT, in front of the arch-side half: Taeo standing still, holding his furled yellow umbrella by the crook, tip down. The navy flap at the arch-side eave end above the workbench, hanging still. Tape line between them.
- subject: Danbi O1 (damp) + cart (folded parasol); Taeo O1 + `PROP_YELLOW_UMBRELLA` (furled); `PROP_AWNING_FLAP`.
- emotion: Danbi: D4 sheepish, grudging. Taeo: T1, unremarking.
- motion/direction: the shadow sweeps left→right; she hurries right into the dark; he stands.
- dialogue_ref: 단비 "진짜 세 시네…"
- art_space: upper band of the image, centre-right (x ~40-90 %, y ~3-18 %): the darkening sky and plain market wall above the eave — not over the flap at the left
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day · 06 LOC_PLAZA_ARCH
- gap_after: S
- fx/note: Real town rain begins (W_RAIN from the next panel). The cart (red syrup jars) is at the far right, the yellow umbrella at the left — never close. Cart inside the shutter from here.

### panel_049
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B7 · tension 5 · ⟨설렘⟩⟨복선⟩ 해진 차양 자락 ③ (EP3 씨앗)
- size: medium (aspect 3:4)
- light: `W_RAIN` — steady town rain, grey-green diffuse light
- cloud: none (town rain)
- camera: SIDE-ARCH, eye level, medium, from the arch-side end.
- composition: Top-left foreground: the old faded navy canvas flap hanging from the eave's front edge above the workbench, soaked dark, rain dripping from its frayed fringe in a line of drops onto the tool roll. Below it, foreground left: Taeo's hands sliding the khaki tool roll aside, out of the drip, without a word. Mid-ground centre: Danbi holding the shutter's pull cord, her face turned UP toward the flap (not the sky). Screen-RIGHT: the rainy plaza, grey and wet.
- subject: `PROP_AWNING_FLAP` (`rain dripping from the flap's frayed fringe onto the tool roll on the workbench`); Taeo O1; Danbi O1 (`fringe and shoulders wet from the town rain` beginning).
- emotion: Danbi: D6 small surprise, looking at the leak. Taeo: T2, eyes on the tool roll.
- motion/direction: drops fall from the flap (top-left) to the tool roll; her upward look leads back to the flap.
- dialogue_ref: 단비 "저기… 저거 새는데요?" / 태오 "할아버지가 단 겁니다."
- art_space: upper-right of the image (x ~48-94 %, y ~4-34 %): the eave underside and the grey rainy plaza beyond — two bubbles stacked, Danbi's above, Taeo's below; the flap at the top-left stays completely clear
- attach: 09 LEADS_lineup · 17 PROP_AWNING_FLAP · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: Nobody says "fix it" (EP3). Flap navy only. Spell the flap phrase in full (AE2).

### panel_050
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B7 · tension 5 · ⟨웃음⟩ 보미의 위기
- size: medium (aspect 3:4) — medium-wide framing
- light: `W_RAIN`
- cloud: none (town rain)
- camera: SIDE-ALLEY, eye level, medium-wide.
- composition: Shutter receding screen-RIGHT, the rainy plaza screen-LEFT. Bomi running in through the rain from the plaza toward the eave, holding up her small clear umbrella with two ribs snapped and bent sharply inward, the canopy caved and crumpled on that side, rain on her red hood. Taeo is off-frame (along the shutter, to the right). No yellow anywhere.
- subject: Bomi (red raincoat, white boots); `PROP_BOMI_UMBRELLA_BROKEN`.
- emotion: Bomi: `teary pout, holding up her broken umbrella`.
- motion/direction: she runs left→right toward the eave.
- dialogue_ref: 보미 "또 부러졌어요…" / 태오(화면 밖) "살 두 개. 내일입니다."
- art_space: Bomi's bubble upper-left (x ~4-46 %, y ~4-20 %) over the grey rainy sky above her; Taeo's off-frame bubble upper-right a little lower (x ~52-94 %, y ~12-28 %) over the eave underside, its tail running to the right edge
- attach: 14 CAST_OKJA_MANSIK_BOMI · 05 LOC_EAVES_STALL_day
- gap_after: S
- fx/note: The yellow umbrella stays out of frame (red raincoat).

### panel_051
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩ 관계 비트: 그녀가 하나뿐인 방패를 내준다
- size: medium (aspect 3:4)
- light: `W_RAIN`
- cloud: none
- camera: under the eave on the alley-side half, eye level of Danbi, medium two-shot.
- composition: Danbi screen-LEFT, bending forward, opening her pastel-pink umbrella and pressing its plain white crook handle into Bomi's small hands. Bomi screen-RIGHT (half Danbi's height), now under the pink canopy, looking up at her. **The pink canopy's rib with the yellow-thread band is turned AWAY from the camera (on the far side), small, and never touches or overlaps Bomi's red raincoat** (AE5). Rain falling beyond the eave edge behind them; the broken clear umbrella at Bomi's feet.
- subject: Danbi O1 (damp); Bomi (red raincoat); `PROP_DANBI_UMBRELLA_FIXED` (open, band away).
- emotion: Danbi: D1 warm, firm smile, no hesitation. Bomi: wide eyes, grateful, a little worried.
- motion/direction: the umbrella handle passes left→right from her hands to Bomi's.
- dialogue_ref: 단비 "이거 쓰고 가. 내일 꼭 가져와!" / 보미 "언니는요?"
- art_space: Danbi's bubble upper-left (x ~4-48 %, y ~3-18 %) over the eave underside above her head; Bomi's upper-right (x ~52-94 %, y ~6-22 %) above the pink canopy over the rain beyond the eave
- attach: 14 CAST_OKJA_MANSIK_BOMI · 02 DANBI_turnaround · 04 PROP_UMBRELLAS
- gap_after: S
- fx/note: No cloud now (she is not flustered — she is kind). From here Bomi keeps the pink umbrella (UD; EP3 continuity). Danbi has no umbrella from P52.

### panel_052
- scene_id: S6 / location: LOC_EAVES_STALL (eave edge)
- beat: B7 · tension 5 · ⟨웃음⟩ 빈손의 핑계, 아이러니
- size: close (aspect 3:4)
- light: `W_RAIN`
- cloud: none (town rain)
- camera: close on Danbi from the plaza side, slightly low, chest up.
- composition: Danbi at the eave edge, empty-handed, town rain blowing in on her hair and shoulders, both arms waving high and wide after the child. Behind her over her shoulder, small and far in the rainy plaza: Bomi running away under the pink umbrella (seen from behind, the yellow band hidden on the far side). Upper third: the eave underside and grey rain.
- subject: Danbi O1, `fringe and shoulders wet from the town rain`; Bomi far (back).
- emotion: D2 flustered rambling + D9 `embarrassed laugh` — waving off the question; grinning too hard.
- motion/direction: arms wave; the eye goes past her to the little pink umbrella going away.
- dialogue_ref: 단비 "원래 비 좋아해!" "진짜야!"
- art_space: upper third of the image (x ~4-94 %, y ~3-26 %): eave underside and grey rain above her waving hands — ① left, ② right; her hands stay below y ~28 %
- attach: 02 DANBI_turnaround · 07 DANBI_expressions · 14 CAST_OKJA_MANSIK_BOMI
- gap_after: S
- fx/note: Ironic lie in the rain. No cloud (town rain).

### panel_053
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩ 한 우산 제안(사실로만)
- size: medium (aspect 3:4)
- light: `W_RAIN`
- cloud: none (town rain)
- camera: FRONT, eye level, medium two-shot (thighs up), slightly wider at the top.
- composition: The shutter is DOWN — its blank faded-mint face fills the upper part of the frame. At the eave edge: Taeo screen-LEFT opening his large sunflower-yellow umbrella and holding it tilted halfway toward her, eyes on the crook handle in his hand. Danbi screen-RIGHT, wet fringe stuck to her forehead, frozen, staring at the yellow canopy. The canopy fills the middle band; above it the blank shutter face. Rain beyond the eave edge, tape line underfoot. His LEFT (outer, screen-left) shoulder just beginning to catch the rain.
- subject: Taeo O1 + `PROP_YELLOW_UMBRELLA` (open); Danbi O1, town-rain wet, empty-handed. Cart inside (not in frame).
- emotion: Taeo: T3 variant `deadpan, eyes on the umbrella handle`. Danbi: D6 startled → frozen.
- motion/direction: the tilt of the canopy points from him to her.
- dialogue_ref: 태오 "버스 정류장. 같은 방향입니다."
- art_space: upper-left of the image above the yellow canopy (x ~4-50 %, y ~3-18 %): the blank lowered mint shutter face — not on the yellow fabric
- attach: 09 LEADS_lineup · 05 LOC_EAVES_STALL_day · 04 PROP_UMBRELLAS
- gap_after: M
- fx/note: No red near the yellow (her clip only). Not an invitation — two facts. No touch.

--- SCENE BREAK --- (S6 → S7: the hydrangea alley, town rain → sun)

### panel_054
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 우산 하나 · tension 6 · ⟨설렘⟩ 우산 하나, 어깨 사이 틈, 젖은 바깥 어깨
- size: full-bleed (aspect 9:16)
- light: `W_RAIN` — steady town rain, grey-green diffuse light, wet reflective pavement
- cloud: none (town rain)
- camera: **ALLEY-BACK** — from behind them at the square-side mouth looking in (card 15 view), eye level, full vertical frame.
- composition: The narrow alley packed with deep blue-violet hydrangeas in full round heads (soil strip and black rubber tubs). **Screen-LEFT: the market's outer wall with the green iron staircase; screen-RIGHT: the old stone wall.** Centre, walking away from the camera: the two of them under ONE large sunflower-yellow umbrella, backs to us — Taeo on the left (iron-staircase side), Danbi on his RIGHT (stone-wall side), her crown at his shoulder. Between their shoulders a gap about one fist wide. The umbrella tilted toward her, so his LEFT shoulder and denim sleeve, outside the canopy on the iron-staircase side, are soaked dark with rain. Rain everywhere; the wet stones reflect the yellow. Upper third: rain falling between the walls, the streetlamp.
- subject: Taeo O1, `his left shoulder and denim sleeve soaked dark with rain`, holding the umbrella; Danbi O1, `fringe and shoulders wet from the town rain`, empty-handed; `PROP_YELLOW_UMBRELLA` (open).
- emotion: quiet; awkward closeness from behind.
- motion/direction: walking away into depth; the eye goes to the one-fist gap and the dark wet shoulder at the left.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 15 LOC_HYDRANGEA_ALLEY · 09 LEADS_lineup
- gap_after: M
- fx/note: AE3: his wet LEFT shoulder is on the iron-staircase side (the script's "돌담 쪽" is dropped — FL2). The gap always visible. No touch. No gold. No red in frame (her clip on her LEFT ear is on the side toward him; small).

### panel_055
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 · tension 6 · ⟨정적⟩ 틈 (닿을 뻔 3)
- size: insert (aspect 1:1)
- light: `W_RAIN`
- cloud: none
- camera: insert, close, from behind at shoulder height, between them.
- composition: Screen-LEFT: his RIGHT denim sleeve and shoulder (dry side, inside the canopy). Screen-RIGHT: her mint denim pinafore's LEFT shoulder strap over the cream T-shirt, damp. Between them, dead centre: a gap one fist wide, through which we see slanting light of rain falling in the alley beyond and the blurred blue-violet of hydrangeas. The yellow canopy's underside glows faintly at the top edge.
- subject: two shoulders; the gap.
- emotion: held breath; neither closes the gap.
- motion/direction: the eye stays in the gap.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 09 LEADS_lineup · 15 LOC_HYDRANGEA_ALLEY
- gap_after: **L**
- fx/note: No touch. The yellow canopy edge is matte (no glow).

### panel_056
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 · tension 5 · ⟨웃음⟩ 침묵을 못 견딤
- size: medium (aspect 3:4)
- light: `W_RAIN`, `the town rain thinning`
- cloud: none in frame — L1 beginning to form OFF-frame
- camera: **ALLEY-SIDE** — low on their RIGHT (stone-wall) side, three-quarter front, medium two-shot (waist up), the canopy cropped at the top edge.
- composition: Danbi nearest the camera, screen-LEFT, eyes straight ahead, talking fast. Taeo just beyond her, screen-RIGHT, his face above her crown, eyes straight ahead. The yellow canopy crosses the top ~18 % of the frame. Behind them: the market's outer wall with the green iron staircase and the deep blue-violet hydrangea heads in tubs, wet. The rain thinning.
- subject: Danbi O1 (town-rain wet); Taeo O1 (LEFT shoulder soaked, on the far side).
- emotion: Danbi: D2 `flustered rambling, mouth open mid-sentence, eyebrows up`, hands fidgeting at her waist; for ② D4 sheepish. Taeo: T1 deadpan, eyes forward.
- motion/direction: both face front; her chatter fills the space.
- dialogue_ref: 단비 "정류장 쪽 수국이 제일 예쁘대요!" "…누가 그랬냐면, 제가요."
- art_space: right side of the image below the canopy edge (x ~50-96 %, y ~20-50 %): the plain wet market wall above the hydrangea tubs, ahead of their walk, beside Taeo's head — two bubbles stacked; not on the yellow canopy
- attach: 09 LEADS_lineup · 15 LOC_HYDRANGEA_ALLEY
- gap_after: S
- fx/note: Wall plain, no signs or posters. No gold.

### panel_057
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 · tension 7 · ⟨설렘⟩⟨복선⟩ 시내 비가 그쳐도 우산 위 톡톡 · 그는 우산을 접지 않는다
- size: full-bleed (aspect 9:16)
- light: `L_AFTER_RAIN_SUN` — the town rain has just stopped, sun breaking through at the far end of the alley, warm low afternoon light, wet walls and hydrangeas glistening, drops hanging on the leaves, wet pavement reflecting the sky
- cloud: **L1** — `CLOUD_BASE` (light adapted) + `CLOUD_L1` + `CLOUD_SHARED_UMBRELLA` (`the small cloud floats about a metre above the yellow umbrella on her side, its thin drizzle tapping on the yellow canopy only and dripping off its rim, no rain anywhere else`)
- camera: **ALLEY-SIDE**, low (knee height), full vertical frame, a little wider than P56 so the two are seen from the knees up.
- composition: Top fifth: a small pale silver cloud a clear metre above the yellow canopy on her side (screen-left), a thin drizzle falling from it onto the canopy only. Middle: the yellow umbrella over both, a few clear drops dripping off its rim on her side. Danbi nearer, screen-left, still talking to herself, unaware. Taeo beyond, screen-right, holding the umbrella up and steady — NOT folding it — his eyes on the wet stones ahead. Everywhere else: no rain; warm sun from the far end of the alley (screen-right, out of frame) lights the wet market wall, the green iron staircase and the glistening hydrangeas.
- subject: Danbi O1 (`fringe wet`); Taeo O1 (LEFT shoulder soaked, far side); `PROP_YELLOW_UMBRELLA` (open); cloud L1.
- emotion: Danbi: D4, chattering on, unaware. Taeo: T2 variant `deadpan, eyes down on the wet stones ahead`.
- motion/direction: eye from the little cloud down onto the canopy, then to his steady hand — he keeps it open.
- dialogue_ref: 없음 (무대사)
- art_space: none
- attach: 15 LOC_HYDRANGEA_ALLEY · 09 LEADS_lineup · 01 DANBI_wet_states
- gap_after: M
- fx/note: The town rain has stopped; only her drizzle remains, on the canopy only. NO gold. He does not look up. The cloud is grey and volumetric, not a bubble shape.

### panel_058
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 · tension 7 · ⟨웃음⟩ 흉내 ② = 걱정 (그녀의 마음이 기운다)
- size: medium close (aspect 3:4)
- light: `L_AFTER_RAIN_SUN`
- cloud: L1 — OFF-frame above the canopy (drizzle tapping; a few clear drops off the rim on her side)
- camera: **ALLEY-SIDE**, eye level of Danbi, medium close on her, Taeo's far shoulder at the right edge.
- composition: Danbi screen-left-centre, turned toward him — sideways, NOT up — chin tucked, lips pressed flat, half-lidded eyes in his deadpan, cheeks pink, her RIGHT index finger pointing across at his soaked LEFT shoulder at the screen-right edge (dark wet denim just outside the canopy's rim). Her fingertip stops short of it — clear air between. The yellow canopy's underside across the top; beyond its lowered rim on her side (upper-left corner), the sunlit wet market wall.
- subject: Danbi O1 (`fringe wet`); Taeo's LEFT shoulder (`soaked dark`).
- emotion: D8 `mock-serious deadpan, chin tucked, lips pressed flat, half-lidded eyes` + `cheeks flushed pink`; `pointing, not touching`.
- motion/direction: her pointing finger leads the eye right to his wet shoulder.
- dialogue_ref: 단비 "왼쪽 어깨. 젖었습니다."
- art_space: upper-left corner of the image (x ~4-46 %, y ~4-20 %): the sunlit wet market wall beyond the canopy's rim on her side — not on the yellow fabric, not over her pointing hand
- attach: 02 DANBI_turnaround · 07 DANBI_expressions · 15 LOC_HYDRANGEA_ALLEY
- gap_after: S
- fx/note: Worry dressed as teasing (R2 condition met: her heart leans). No touch. No gold yet.

### panel_059
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 · tension 8 · ⟨설렘⟩ **드문 웃음 — 이 작품에서 태오의 첫 웃음**
- size: close (aspect 3:4)
- light: `L_AFTER_RAIN_SUN`, his face in the soft yellow shade of the canopy
- cloud: L1 — OFF-frame
- camera: close-up on Taeo, over Danbi's shoulder (her point of view), eye level of her, looking slightly up at him.
- composition: Foreground screen-LEFT edge, soft: the curve of Danbi's flushed pink cheek and a few damp strands. Centre-right: Taeo's face in the warm shade under the yellow canopy, head tilted down, looking at his own soaked LEFT shoulder (lower-right, dark wet denim). The corners of his mouth barely lift; his eyes soften. The canopy underside across the top; beyond its rim at the top-right corner, sunlit wet wall.
- subject: Taeo O1; Danbi (cheek edge).
- emotion: **T11** `faint real smile, corners of his mouth barely lifted, eyes softened, looking down at his own wet shoulder` + `not a grin, no teeth showing, a very small smile`.
- motion/direction: his downward gaze → his shoulder; the eye lingers on his mouth.
- dialogue_ref: 태오 "…네."
- art_space: top-right corner of the image (x ~60-94 %, y ~3-14 %): the sunlit wet wall beyond the canopy's rim, a small bubble — well away from his mouth
- attach: 03 TAEO_turnaround · 15 LOC_HYDRANGEA_ALLEY
- gap_after: **XL**
- fx/note: Small and real. If Flow gives a grin or teeth → REGEN; after 3 fails use T7 + `the corners of his mouth lifted a hair` (AE6). NO gold. No ear-tip pink (EP3).

### panel_060
- scene_id: S7 / location: LOC_HYDRANGEA_ALLEY
- beat: B8 · tension 9 · ⟨설렘⟩⟨복선⟩ **클리프행어: 그녀는 틈을, 그는 금빛을** (R2 메아리 = EP2 유일한 금빛)
- size: full-bleed (aspect 9:16) — medium two-shot
- light: `L_AFTER_RAIN_SUN`, warm low sunlight
- cloud: L1 — `CLOUD_SHARED_UMBRELLA` + **`GOLD_FEW`**
- camera: **ALLEY-SIDE**, low (chest height of Danbi), three-quarter front, full vertical frame; both from the hips up under the canopy.
- composition: Top: the small pale silver cloud a clear metre above the yellow canopy on her side (screen-left), thin drizzle on the canopy only. Upper-middle: the yellow umbrella, tilted toward her, its lower rim on her side at Taeo's eye level. **Just below that rim, in the air at his eye level: three to five of her drizzle drops catch the low sunlight and glint warm white-gold, like sunlight on water; the other drops clear.** Middle: Danbi nearer, screen-left, cheeks pink, head bowed, eyes DOWN on the one-fist gap between their shoulders. Taeo screen-right, calm, the trace of a smile still on his lips, eyes LEVEL on the gold drops falling from the rim — not up. The gap between their shoulders visible. Background: sunlit wet market wall, iron staircase, glistening deep blue-violet hydrangeas. **Bottom sixth: plain wet pavement, nothing in it.**
- subject: Danbi O1 (fringe wet); Taeo O1 (LEFT shoulder soaked, far side); `PROP_YELLOW_UMBRELLA`; cloud L1; 3–5 gold drops.
- emotion: Danbi: D5 `cheeks and ear tips flushed pink`, eyes lowered to the gap. Taeo: **T12** `calm, the trace of a smile still on his lips, eyes level on the drops falling from the umbrella rim`.
- motion/direction: two eye-lines split the frame: hers down-right to the gap, his level to the left at the gold drops; the reader sees both.
- dialogue_ref: 없음 (무대사) · 끝 캡션 「— 3화에 계속 —」(KM 캡션, 뷰어가 씀)
- art_space: bottom sixth of the image, full width: plain wet pavement (caption strip) - nothing important there
- attach: 15 LOC_HYDRANGEA_ALLEY · 09 LEADS_lineup · 01 DANBI_wet_states
- gap_after: (end)
- fx/note: Gold = 3–5 drops only, below the rim, never on the yellow fabric; no glowing cloud, no golden rim, no halo, no sparkle (6+ drops or `CLOUD_R2` = REGEN). He does not look up. First read: sun on water; second read: her rain turning gold near him. Last panel of EP02.

<!-- SECTION 4 PART D DONE: P48 – P60 -->

---

## 5. 연속성 체크리스트 (continuity checklist)

**의상**
| who | panels | outfit |
|---|---|---|
| Danbi | every panel she appears in (P03, P18 hand only; P59 cheek edge only; absent P05, P10, P12, P20, P34, P36, P39, P41, P43, P47, P50) | **O1 all day (D3):** mint denim pinafore dress, cream T-shirt, pale pink rain boots, top bun + mint scrunchie, red strawberry clip above LEFT ear; thin mint hair tie on RIGHT wrist in hand shots |
| Taeo | every panel he appears in | O1: rolled-sleeve faded denim shirt, dark navy work apron, charcoal trousers, black rain boots, brass watch LEFT wrist, wooden pencil behind RIGHT ear |
| Grandma | P17, P18 (hand), P20, P21 (far), P22 | `GRANNY_REGULAR`: white tight perm, ash-pink cardigan, cream blouse, grey-and-mauve floral trousers, black slip-ons, basket on LEFT arm, black umbrella in RIGHT hand; no glasses |
| Mansik | P08, P14 (far), P31; voice P33 | grey T-shirt, olive rubber apron, white towel, skewer RIGHT hand; eyes on his pot, never up |
| Bomi | P09–P11, P14, P16, P50–P52 (P52 far) | red hooded raincoat, white boots; clear umbrella LEFT hand (P09 inside-out → P16 repaired → P50 two ribs snapped) → **pink umbrella from P51** |
| Okja | — | not in EP02 |

**젖음**
| who | panels | state |
|---|---|---|
| Danbi | P01–P20 | dry |
| Danbi | P21–P23 | `fringe slightly damp` (L1, eave) |
| Danbi | P24–P27 | dry again (midday sun) |
| Danbi | P28–P44 | L3 wet phrase (hair wet and darkened, fringe stuck, shoulders darkened), drying slowly through S5 (X2) |
| Danbi | P45–P46 | `hair and shoulders damp` (L2, under her umbrella) |
| Danbi | P47–P51 | damp |
| Danbi | P52–P56 | `fringe and shoulders wet from the town rain` |
| Danbi | P57–P60 | fringe wet |
| Taeo | P01–P52 | dry |
| Taeo | P53 | LEFT shoulder just catching the rain |
| Taeo | P54–P60 | `his left shoulder and denim sleeve soaked dark with rain` (iron-staircase side; P55 shows his dry RIGHT sleeve) |
| floor | S1–S2 | wet dawn; P04: arch-side half wet + puddle, alley-side half dry to the tape line |
| floor | S3 | drying in pale patches |
| floor | S4–S5 | dry, blazing; a wet ring only under the parasol/her (P28–P33, P45–P46) |
| floor | S6–S7 | wet everywhere (town rain); P57–P60 wet and sunlit |

**셔터 · 카트 · 파라솔 · 고리 · 테이프 선 · 자락**
| item | panels |
|---|---|
| shutter | DOWN P01–P03 · UP P04 (he raises it) – P52 · DOWN P53 (who lowers it is not shown) |
| tape line | present in every stall frame |
| cart | alley-side half P02–P23 · pulled to the eave edge into the sun P24–P46 · pushed inside the shutter P48 (out of frame after) |
| parasol | folded P01–P24 · stuck half open P25 · open P26–P46 · folded P48 |
| hook | empty all episode (small at the top edge in FRONT frames) — no keys hung |
| navy flap | P01 tiny · **P04 drops** · P08/P31 fringe at the corner · P22 still · P24 tiny, stirring · **P32 whipping** · P35 still at the corner · P48 still · **P49 leaking** — navy only, never yellow |
| wet rag | P04 (rail's eave-side end); may stay there small (P17) |
| tin can | P05 set on the bench · stays on the bench through S5 (cropped out of P35–P38, P40) · **P39 same frame** · P47 into the drawer beside the bent rib |
| savings jar | P06 under the cart · P40 in her arm · P46 hugged |

**우산 · 노랑**
| item | panels |
|---|---|
| Danbi's pink umbrella (fixed; yellow band + cap; **plain white handle, no ribbon**) | P01 under her arm · P18 held (band beside Grandma's) · P19 at her chest · P22–P23 opened in the shade / closed · leaning on the cart (P41 handle only) · P45–P46 open over her · **P51 → Bomi** (band turned away) · P52 Bomi far · gone from Danbi P52–P60 |
| Taeo's yellow umbrella | on the rail (kept OUT of frame whenever Bomi/syrup is in frame: P09–P16, P38, P50–P52) · P26 folded in his hands (crook on the latch) · P44 his hand on its crook on the rail · P45 furled, tip down · P48 furled · P53 opened · P54–P60 over both |
| Grandma's black umbrella (one yellow band) | P17 closed · P18 open, band to camera · P20 band small, away · P22 leaving |
| yellow spool | P05 = P39 on the tool roll (same place) · P07 on the shelf · P43 thread wound |
| no red/orange next to yellow | checked: P02, P18, P22, P26, P33, P38, P44, P45, P46, P48, P51, P52, P53 (only the strawberry clip) |
| gold | **ONLY P60, 3–5 drops** below the rim — none in P26–P28, P44–P45, P54–P59 |
| Taeo looks up | **never in EP02** |
| touch | none · near-touches P03, P26, P54–P55/P60 gap · P58 pointing only |

**구름 단계 (panel → level)**

| P01–P20 none | P21 L1 eave (forms) | P22 L1 eave | P23 L1→none fading | P24–P26 none | P27 L2 forming off-frame | P28 **L3** parasol | P29 L3 cropped |
|---|---|---|---|---|---|---|---|
| **P30 L3** small, far | **P31 L3→L2** column only | **P32 L2** small, far | **P33 L2→L1** off-frame | **P34–P43 none** | **P44 L2** forming off-frame | **P45 L2** over her umbrella | **P46 L2→L1** cropped |
| **P47–P56 none** (P48–P56 town rain; P56 L1 forming off-frame) | **P57 L1** over the yellow canopy | **P58 L1** off-frame | **P59 L1** off-frame | **P60 L1 + GOLD_FEW** | | | |

## 6. 패널 크기 → 화면비 집계

| aspect | size label | count | panels |
|---|---|---|---|
| 9:16 | full-bleed | 5 | P28, P45, P54, P57, P60 |
| 3:4 | medium / medium close / close | 33 | P02, P06, P07, P09–P13, P16, P19–P21, P23, P25–P27, P29, P35, P37, P40–P44, P46, P49–P53, P56, P58, P59 |
| 4:3 | medium-wide | 7 | P04, P14, P17, P22, P31, P33, P38 |
| 16:9 | wide strip | 6 | P01, P08, P24, P30, P32, P48 |
| 1:1 | insert | 9 | P03, P05, P15, P18, P34, P36, P39, P47, P55 |
| | **total** | **60** | 9:16 = 5 · 3:4 = 33 · 4:3 = 7 · 16:9 = 6 · 1:1 = 9 |

- gap_after: M = P01, P08, P16, P23, P33, P37, P41, P45, P53, P54, P57 (11) · L = P39, P47, P55 · XL = P59 · S = the rest · P60 = end. (= script ⟨gap⟩ exactly)
- SCENE BREAK 6 · scenes S1–S7 · silent panels 14 (P01, P05, P18, P28 SFX patch, P32, P34, P37, P39, P45, P47, P54, P55, P57, P60 caption strip) · dialogue panels 46 · bubbles 70 (max 2 per panel).
- Attachments: every panel ≤ 3 cards; P39 uses its third slot for the finished panel_005 image.

## 7. 가장 어려운 패널 (hardest panels — prompt-smith / Flow 우선 주의)

1. **panel_005 ↔ panel_039 ([TIN-A]/[TIN-B]).** The whole twist rests on two inserts being the same picture with only the light changed. Flow drifts in scale, can position and coin level between generations. Plan: make P05 first, then P39 with the finished P05 image attached as the framing anchor; prompt text identical except the light sentence and "no hands". Check by flipping the two images: seam ring at half height, coin level just below it, spool in the same place. Any drift → REGEN P39 (not P05).
2. **panel_060 (gold cliffhanger).** Needs at once: the small L1 cloud above the canopy on her side, 3–5 (not 1, not 10) gold drops in the air just below the rim at his eye level, his eyes level (not up), her eyes down on the gap, the gap visible, the bottom sixth empty. Flow tends to over-sparkle and put the glow on the yellow fabric or make him look up. Keep `GOLD_FEW` word for word plus "no sparkle effects".
3. **panel_028 (L3 on the open parasol).** Rain must fall on the parasol only while three customers stand dry in blazing sun one step away; the cloud must not read as weather or a thought bubble; the SFX patch must stay clean. Attach card 01 for the cloud look.
4. **panel_036 (two-finger push).** Hands are hard: exactly index + middle finger, LEFT hand with the watch, coins blank, moving back toward the customer (direction must read). Attach card 11 (hands) and keep the face out.
5. **panel_059 (first smile).** The smallest possible smile, no teeth, eyes softened, under yellow shade, looking at his own wet LEFT shoulder. No card shows it (card 08 has no smile). Fallback per AE6.
6. **panel_054 / panel_057 (alley geometry).** Card 15's left/right must hold: iron staircase screen-left and stone wall screen-right in the back view; his LEFT shoulder wet on the staircase side; Danbi on his right; a one-fist gap. P57's cloud rides on the umbrella, not on the whole alley (the town rain has stopped).
7. **panel_030 / panel_032 (crowd).** Many extras with faces soft and umbrellas only muted blue/green/clear/check — Flow likes a red or yellow umbrella in crowds. P32 also needs the navy flap whipping at the stall's arch-side end.
8. **panel_044 (his hand already on the handle).** A background hand at the frame edge that must be readable (watch + wooden crook + a sliver of yellow) without stealing her close-up.
9. **panel_051 (yellow band away from red).** The pink umbrella's yellow band must be turned away/small while Bomi in red holds it.
10. **panel_042 (longest bubble).** Keep the whole upper third truly empty — Flow fills dark storage with clutter; ask for a plain dark interior.

## 8. 넘김 (handoff)

- **prompt-smith:** 60 panels · 6 SCENE BREAKs (S1–S7) · per-panel `location:` is the token to inject (S4 alternates stall/plaza by panel — FL1) · light/cloud tokens per panel are style-bible E2/E3 names · AE2: P04/P32/P49 write the flap phrase in full + attach card 17 · AE10: P18 = 19 + 04 · P05 then P39 (P39 attaches the P05 image) · P59 smile wording AE6. Suggested A/B/C split by scene (for the handoff page only; no panel-artists in Flow mode): A = S1–S3 (P01–P23, 23) · B = S4–S5 (P24–P46, 23) · C = S6–S7 (P47–P60, 14).
- **letterer:** dialogue_ref filled for 46 panels; draft `art_space` per panel above — write the final wording in `ep02_lettering.md` and send changes back so this file is synced (FL10). P42 ② full-width upper third; P28 SFX patch; P60 caption bottom sixth; P27 「អរគុ…」 is intentional; P50 and P33 have off-frame speakers (tails to the edge).

## 9. 리더 플래그 (leader flags)

- **FL1 — S4 is one scene across two LOC tokens.** P24–P33 cut between the stall's eave edge (cart pulled into the sun) and FACADE wides of the square (P24, P30, P32). It is one moment, one light, one continuous space, so I kept one scene_id (no break) and wrote the token to inject per panel in `location:`. Splitting would add five SCENE BREAKs inside one beat. Please confirm; if the rule must be strict, split as S4a (P24) / S4b (P25–P29) / S4c (P30) / S4d (P31) / S4e (P32) / S4f (P33).
- **FL2 — P54 script wording vs AE3.** `ep02_script_final.md` P54 still says his wet left shoulder is on the "돌담 쪽, 바깥". Per AE3 this shot list puts his wet LEFT shoulder on the **iron-staircase side**, Danbi on his right (stone-wall side), and drops "stone-wall side". I did not edit the reviewed script (stage direction only, no KM effect; editing it would change its sha256 and re-close the gate). Suggest script-editor fixes the stage direction only after Phase 4, or leave it — the shot list governs the images.
- **FL3 — Alley camera family.** P56, P57, P58, P60 share one camera family (ALLEY-SIDE: low, on their right/stone-wall side, three-quarter front) so the gap and both faces read and the far side shows his wet LEFT shoulder (P58 edge). The script's "SIDE 로우" for P60 is interpreted as low three-quarter front (a pure side view would hide the gap behind her). His wet shoulder is carried by P54 (back), P58 (edge), P59 (his look).
- **FL4 — P14 angle changed.** The beat sheet/script say FRONT, but Mansik's cart is across the square, i.e. behind a FRONT camera (EP1 shows him only in REVERSE). P14 uses an oblique angle (~40° toward the alley side) so he can laugh in the far background. Alternative: keep FRONT and drop Mansik from P14 (his laugh is optional).
- **FL5 — P37 shows the end of the same push.** To witness "the two fingers and the returned coins", P37 shows his fingers lifting off the coins from her side. It is not a second push; panel-validator should not flag it under "push only once". Alternative: fingers already withdrawn, coins sitting in front of the customer.
- **FL6 — P39 attaches the finished P05 image** as its third reference (framing anchor), like EP1 P041→P048. The handoff page should tell the user to make panel_005 before panel_039.
- **FL7 — P46 framing for the lower-third bubble.** To give Danbi's 38-char bubble a lower-third spot opposite the cloud, P46 is framed from the knees up with the camera tilted slightly down (dry floor + tape line in the lower centre). letterer to confirm.
- **FL8 — Card 13 (`DANBI_day2_cloud`) is not attached anywhere** (it shows outfit O2). Cloud panels attach card 01 `DANBI_wet_states` (O1) instead.
- **FL9 — P01 reuses EP1 P01's camera,** but EP1 images are not made yet, so P01 cannot attach EP1's panel_001. The camera text is copied; if the user makes EP1 P01 first, they can attach it as an anchor.
- **FL10 — art_space wording is a draft.** In EP01 the shot list copied its art_space lines from `ep01_lettering.md`. EP02's lettering does not exist yet; letterer should write the final lines and this file be synced afterwards (only the art_space lines change).
- **FL11 — P30 speaker.** 「소나기 오나 봐!」 is the queue customer (script); her bubble sits upper centre-left (away from the cloud at the right) with a long tail to her. If letterer prefers, it can read as a crowd voice from the arch (same KM).
- **FL12 — Yellow umbrella off the rail in many frames.** Because red (Bomi, syrup jars) is in most stall frames, the yellow umbrella is kept out of frame on the rail except P26, P44–P45, P48, P53–P60. This is a framing rule, not a story change.
