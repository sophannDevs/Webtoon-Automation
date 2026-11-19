# EP01 샷리스트 — 「맑은 날의 우산」 EP1 「맑은 날의 비」 · panel-director

- 작성: panel-director · 2026-11-19 · Flow-by-hand + Khmer edition · v1
- 입력: `03_episode/ep01_script_final.md`(최종본, 62패널, KM 줄, 지문, ⟨gap⟩), `03_episode/ep01_beatsheet.md`(§2 패널 표, §3 고정 규칙, §6 art_space, §7 타임라인·의상, §8 등장인물), `04_visual/style-bible.md` v1, `04_visual/character-sheets.md` v1, `02_story/world.md` §1–§3.
- **패널 62개.** `panel_001`–`panel_062` = 대본 `P01`–`P62`(번호·순서 동일). 대사 패널 40 / 무대사 22. 효과음 2(panel_003, panel_055), 끝 캡션 1(panel_062).
- 작업 언어는 한국어. prompt-smith가 그대로 옮길 **camera / composition / subject / art_space는 영어**로 쓴다. 대사(dialogue_ref)는 한국어 원문 — 크메르어는 대본 `KM:` 줄이 원본이고 letterer가 옮긴다.
- 좌/우: `LEFT/RIGHT` 대문자 = 인물 본인 기준(시계 = 태오 LEFT 손목). `screen-left/right` = 화면 기준.
- **Khmer edition (one line):** No text of any kind in any image — no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing; every panel keeps its `art_space` as calm, empty background, objects that could carry writing are drawn blank, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 날씨 ↔ 시간 ↔ 배경)

| scene_id | panels | location | weather | time · light (style-bible §3-2) | state | background (style-bible §6 token wording) |
|---|---|---|---|---|---|---|
| S1 | P01–P14 | LOC_PLAZA | W_BREAK | D1 midday · `bright white-gold midday sunlight, short crisp shadows` | dry pavers; wet circles/puddle only under her | small square before an old Korean covered-market entrance, pale grey concrete pavers, one drain grate, one old plane tree at the arch-side corner, low two-storey buildings, power lines; a faded green-and-white striped canvas awning juts out from the market arch; any board above the arch is blank or cropped out of frame |
| S2 | P15 | LOC_HYDRANGEA_ALLEY | W_BREAK | D1 midday · same midday light, falling into the alley | no cloud | narrow alley along the market's outer wall, old stone wall opposite, hydrangeas in a soil strip and black rubber tubs, mossy drain, one old streetlamp, green iron staircase on the wall; hydrangeas just in full bloom, deep blue-violet, full round heads |
| S3 | P16–P28 | LOC_EAVES_STALL | W_BREAK | D1 midday · midday light; arch-side half a tone darker (awning shade) | **shutter DOWN · NO tape line** · cart in the alley-side half | tiny stall under a short dark-green corrugated-metal eave with wooden rafters, faded mint-green roll-up shutter, one brass hook centred under the shutter box, bare grey concrete floor under the eave, no tape line yet; arch-side half: built-in dark wooden workbench with a small vise and a thread-spool shelf holding one yellow spool, low round stool, one bare bulb on the rafter above, iron-pipe repair rail on the arch-side wall with repaired umbrellas tagged by half-cut cloth ribbons; alley-side half: pastel mint shaved-ice push cart with folded pink parasol, tin downpipe at the corner, a folding table and two pastel stools outside the eave in the sun |
| S4 | P29–P35 | LOC_EAVES_STALL | W_BREAK | D1 early afternoon · bright white-gold sun, shadows starting to lengthen, sun slanting in from the alley side onto the cart | **shutter UP** (dark storage inside) · **tape line from P29** | same LOC_EAVES_STALL token with the last phrase `white cloth-tape line on grey concrete from the shutter's centre to the eave edge` + both half phrases |
| S5 | P36–P39 | LOC_EAVES_STALL | W_BREAK | D1 late afternoon · low warm late-afternoon sun from the alley side, long shadows | shutter UP · tape line · cart in place | same as S4 |
| S6 | P40–P41 | LOC_EAVES_STALL | W_BREAK → dusk | D1 dusk · `soft apricot dusk sky reflected on damp pavement, first bulbs switched on` | **shutter DOWN · cart INSIDE the shutter** · table/stools put away · tape line | same as S4, minus the cart, table and stools |
| S7 | P42–P48 | LOC_EAVES_STALL | none (after an off-screen early-evening town shower; no rain falling) | D1 night · `night, a single bare incandescent bulb making one warm amber circle over the workbench, everything else in deep navy-blue darkness, the centre hook on the edge of the light, half lit and half in shadow` + wet concrete reflecting the bulb | shutter DOWN · cart inside · tape line | same as S6 |
| S8 | P49–P60 | LOC_EAVES_STALL | W_BREAK | D2 morning · `pearly blue-grey morning light, soft long shadows, pavement drying in pale patches` (cloud panels P52–P60: `pavement already dry`); P59–P60: the sun comes out — fresh crisp white-gold light | shutter DOWN all scene · cart inside · tape line · P49–P51 under the eave, P52–P60 just outside the eave in the sun | same as S6 |
| S9 | P61–P62 | LOC_PLAZA | W_BREAK | D2 morning, sun out · crisp white-gold morning sunlight, crisp shadows, `pavement already dry` | — | same as S1 (P61 frames only the stall-side corner of the plaza; P62 is inside her umbrella) |

- 장소가 바뀌는 곳(또는 같은 장소에서 시간·셔터 상태가 바뀌는 곳)에만 `--- SCENE BREAK ---`를 둔다: S1→S2(P15 앞), S2→S3(P16 앞), S3→S4(P29 앞), S4→S5(P36 앞), S5→S6(P40 앞), S6→S7(P42 앞), S7→S8(P49 앞), S8→S9(P61 앞). 8곳.
- S8 안의 P59 '해가 남'은 같은 W_BREAK 안의 빛 변화다(시간·장소 급변 아님). 하늘·해는 프레임에 그리지 않는다(panel_059).

## 2. 패널 크기 → Flow 화면비

| size (이 샷리스트) | Flow aspect | 패널 |
|---|---|---|
| full-bleed | **9:16** | P06(캡처), P52, P61(반전) |
| large | **9:16** | P02, P05, P37, P38, P41(COMP_A), P48(COMP_A) |
| large | **3:4** | P54(회차 최대 정적, gap XL) |
| medium · medium close | **3:4** | P07–P10, P12–P14, P18, P20, P21, P23, P25, P26, P30–P32, P34–P36, P39, P40, P49–P51, P55–P59 |
| medium-wide | **4:3** | P16, P19, P24, P27, P28, P29, P33 |
| wide strip | **16:9** | P01, P03, P15, P42 |
| small · insert | **1:1** | small: P04, P47 · insert: P11, P17, P22, P43–P46, P53, P60, P62 |

합계: 9:16 = 9 · 3:4 = 30 · 4:3 = 7 · 16:9 = 4 · 1:1 = 12 → **62**. 화면비는 비트시트 §2 그대로다(바꾼 것 없음). P54는 3:4 그대로 두되 가장 크게 잡은 얼굴 + gap XL로 '큰 컷'을 만든다.

## 3. 연출 규약 (모든 패널 공통)

### 3-1. 시점 코드 → 화면 방향

| code | camera | screen layout |
|---|---|---|
| `HIGH` (plaza) | 45° oblique high angle from second-floor height across the plaza, looking at the market facade. **Never straight down.** | arch + striped awning + plane tree screen-LEFT, the stall screen-RIGHT. Top edge cuts above the 2F windows → no sky, no other clouds. Used by P01 and P61 (same camera). |
| `FACADE` (plaza) | eye level from across the plaza, facing the market front | arch screen-left, stall screen-right, hydrangea alley mouth far right |
| `SIDE` (plaza) | low/eye-level side view of the two figures; the **"P6 axis"** = camera on the plaza side, perpendicular to the line between them, Taeo screen-LEFT / Danbi screen-RIGHT | Taeo came from the arch side, so he stays screen-left all through B1–B2 |
| `FRONT` (stall) | from the plaza, facing the shutter, eye level | **ARCH side = screen LEFT (Taeo's half: workbench, stool, bulb, rail)**, **ALLEY side = screen RIGHT (Danbi's half: cart, parasol, downpipe, table)**; vertical centre axis hook → keyhole → tape line between them |
| `REVERSE` (stall) | from under the eave looking out to the plaza | Taeo screen-RIGHT, Danbi screen-LEFT; eave underside across the top; plane tree right |
| `SIDE-ALLEY` | from the alley-side end, looking along the shutter toward the arch | shutter receding on screen-RIGHT, sunlit plaza screen-LEFT, arch far background; Danbi's half nearest the camera |
| `SIDE-ARCH` | from the arch-side end, looking along the shutter toward the alley | shutter receding on screen-LEFT, plaza screen-RIGHT; Taeo's workbench nearest the camera |
| `COMP_A` | FRONT, chest height, dead centre on the axis, from a little above the shutter box (a calm band of eave edge and plain shutter-box housing across the top ~14 %) to the floor at the eave edge, 9:16 | shutter DOWN; hook at the top centre just below the calm band; keyhole bottom centre; tape line to the camera; LEFT edge = workbench corner; **RIGHT edge = tin downpipe (EP1: cart is inside, so NO cart)**. P41 and P48 are the identical frame. |
| `ALLEY-MOUTH` | from the plaza end into the hydrangea alley, eye level | market wall + green iron stairs screen-LEFT, stone wall screen-RIGHT (its flat top = bubble space) |

### 3-2. 빛 방향 (화면 기준, FRONT 시점)

- D1 midday: sun high, slightly from screen-right (alley side); arch-side half one tone darker in the awning's shade; short crisp shadows.
- D1 early → late afternoon → dusk: sun slants lower and lower from screen-right (alley side), reaching the cart; shadows lengthen toward screen-left. Dusk = low apricot light from the right, first bulb on at the workbench (left).
- D1 night: only the workbench bulb (left); deep navy elsewhere; the hook on the edge of the light.
- D2 morning: soft pearly light from screen-left (arch side), soft long shadows to the right; P59 on: crisp white-gold sun.

### 3-3. 고정 규칙 (위반 = REGEN)

1. **이미지 글자 0.** Shutter faces, the board above the arch, the cart board, awnings: blank. Folding rule = tick lines only. Watch = cream dial, plain bar markers, no numbers. Repair tags = half-cut cloth ribbons (muted blue/green/lilac/white), no numbers. No papers, receipts, notes, phone screens anywhere in EP1.
2. **Taeo never looks up before panel_061.** His eyes go only to her hands, the handle, the ribs, the tape, Bomi's umbrella, his watch, his work — level or lower. panel_061 is the first and only upward look (slot T9).
3. **Gold only in panel_062** (one sun-glint raindrop). No gold in P05, P06, P10, P13, P47, P52–P61. No glow, halo, sparkle or aura anywhere.
4. **Strong yellow = Taeo's family only:** his umbrella, the yellow thread, the yellow tip cap, the yellow spool. Brass (watch, hook, keys) = aged dull brownish brass. No red/orange object (syrup jars, Bomi's raincoat, Okja's brick-red vest, the strawberry charm) touching or next to any yellow — only Danbi's small strawberry clip is exempt.
5. **Cloud:** one small grey volumetric cloud, ~1 m (open-umbrella) wide, a clear one-metre gap above her head/umbrella, flat darker underside, no outline, straight vertical column, rain only inside the column, dry ground except one wet circle/puddle at her feet. Under the eave it is squashed flat (`CLOUD_EAVE`). Camera: low, side, or 45° oblique — **never straight down over her head**.
6. Same scene_id = same LOC, weather, light, outfit and wetness (wetness stays for the scene even after the cloud goes).
7. Continuity locks: tape line only from panel_029 · cart inside the shutter from panel_040 (none in P40–P48) · no frayed canvas flap on the eave in EP1 · no keys hung on the hook (no 'returned key' custom in EP1) · Taeo always the same rolled-sleeve faded denim shirt + dark navy apron · Taeo's pink ear tips forbidden in EP1 · Okja's reading glasses sit on her head except in panel_025.
8. Height: Danbi's crown = Taeo's shoulder. Hook ≈ 2.2 m (she reaches up on tiptoe). Extras only far, faces blurred, umbrellas closed, never looking up.

### 3-4. art_space (말풍선 빈자리) 규칙

- Default: the upper area on the speaker's side (FRONT: Taeo upper-left, Danbi upper-right; REVERSE the opposite). 1 bubble ≈ half the width × upper 1/5 (3:4) · 1/4 (1:1) · 1/3 (4:3) · 1/6 (9:16); 2 bubbles ≈ upper 1/3 (3:4) or 1/4 (9:16).
- Never over faces, hands, the handle, the yellow thread/cap, keys, the keyhole or the hook.
- **Cloud rule:** when the cloud is in frame, the bubble goes to the opposite side, at least one cloud-width away (crop the cloud at its corner when the frame is tight); 9:16 may use the lower third of dry pavement instead. Never next to/above/below the cloud, never inside the rain column — the cloud must never read as a thought bubble.
- Good calm areas: clear W_BREAK sky, the blank lowered shutter face, the eave underside, the dark open storage (shutter UP), the stone-wall top, dry pavement in low/high shots, the darkness outside the bulb's circle.
- **The viewer's limits** (letterer, `ep01_lettering.md` §0–§2): a bubble centred at x can be at most (100 − x) % wide, and Khmer is two lines at most. So a two-line bubble cannot sit right of a centred hook (only ~30 % there): in every FRONT stall frame the hook sits small at the very top edge (top ~6 %) or just out of frame, and the bubble band runs across the centre below it (P16, P19–P21, P24, P29, P31). P27 and P28 stay 4:3 with headroom (top ~60 % / ~57 % clear). COMP_A starts a little higher so a calm top band (~14 %) sits above the hook (P41 = P48).
- **The `art_space` line of every panel is copied word for word from `ep01_lettering.md`** — that file is the authority for the wording; prompt-smith uses it as is.
- Silent panels (`art_space: none`) may use the full frame. Exceptions: panel_048 keeps the same two empty areas as panel_041 (identical COMP_A frame, no bubbles); panel_003 keeps a small SFX patch; panel_062 keeps its bottom sixth empty for the end caption.

### 3-5. 세로 스크롤 리듬 지도

| beat | panels | rhythm |
|---|---|---|
| B1 콜드 오픈 | P01–P06 | wide → large → wide → small → large → **full-bleed capture**, gap L — slow, silent, establishing |
| B2 첫 말맛 | P07–P14 | 3:4 ping-pong under the yellow, one 1:1 hand insert (P11) as the held beat |
| B3 목표 소품 | P15–P21 | wide alley → 4:3/3:4 stall two-shots, one 1:1 tool insert |
| B4 목표 충돌 | P22–P28 | 1:1 keys → 3:4 glare → 4:3 entrance → 3:4 close (small twist P25) → 4:3 verdict |
| B5 티격태격 | P29–P35 | densest dialogue; 3:4 mirrored two-shots on the tape line, ends on a silent beat (gap L) |
| B6 숨긴 문제 | P36–P41 | 3:4 → two tall 9:16 (Bomi's near-discovery) → 3:4 look → dusk → **COMP_A ①** |
| B7 조용한 수선 | P42–P48 | wide night → five 1:1 hand inserts with M gaps → **COMP_A ②**, gap L |
| B8 발견 | P49–P54 | 3:4 → **full-bleed dome** → 1:1 thread → **large face, gap XL** |
| B9 묻힌 한마디 | P55–P58 | quick 3:4 ping-pong under her loud rain |
| B10 엔딩 훅 | P59–P62 | still two-shot (L) → watch insert (L) → **full-bleed HIGH reversal** → 1:1 gold drop + caption |

<!-- HEADER DONE: location table + aspect table + conventions -->

---

## 4. 패널

### panel_001
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 콜드 오픈 · tension 4 · ⟨웃음⟩⟨복선⟩ F1
- size: wide strip (aspect 16:9)
- camera: HIGH — 45° oblique high angle from second-floor height across the plaza (camera fixed in the buildings opposite the market), normal lens, looking at the market facade; NOT straight down. **This exact camera position and angle are reused in panel_061.**
- composition: Facade seen from above. LEFT third: the market arch with the faded green-and-white striped awning jutting out and the old plane tree at the arch-side corner. RIGHT edge: the stall — dark-green corrugated eave, faded mint shutter DOWN (blank). Top edge cuts just above the second-floor windows: no sky in frame. Dry pale-grey pavers with one drain grate fill the middle and lower two-thirds. Centre: a small pink umbrella crossing the plaza left→right toward the stall, one small grey cloud floating a clear metre above it, a short trail of fading wet circles behind it on the dry pavers. Under the stall's eave edge at the right: a tall figure holding an ALREADY OPEN yellow umbrella — reads only as a small bright-yellow dot, face hidden. Two or three blurred passers-by, all carrying CLOSED umbrellas. Sun high from slightly screen-right, short crisp shadows.
- subject: Danbi (tiny, Day-1 outfit, under her pink umbrella); her cloud L2 (light grey, thin straight rain lines onto her umbrella only); Taeo (tiny, open yellow umbrella, face unreadable, head level); extras with closed umbrellas, faces blurred.
- emotion: quiet, odd, funny — a sunny day, one person in her own rain. No faces readable.
- motion/direction: eye enters at the arch (upper-left), follows the pink umbrella across to the yellow dot at the right edge, then drops into panel_002.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: Clue F1 = the only open umbrella in the sunshine besides hers is the yellow one, already up (no opening motion). Her cloud is the only cloud in the picture (sky out of frame). Board over the arch blank or cropped; shutter blank. No red object near the yellow dot.

### panel_002
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 · tension 4 · ⟨웃음⟩⟨복선⟩ (R1 첫 노출)
- size: large (aspect 9:16)
- camera: SIDE, low angle (knee height), medium-full, normal lens; vertical frame so cloud → gap → umbrella → Danbi → puddle stack top to bottom.
- composition: Danbi walking left→right, three-quarter profile facing screen-right, slightly left of centre, framed from her boots up to the cloud. Top quarter: the small light-grey cloud a clear one-metre above her pink umbrella, straight thin rain column falling onto the umbrella only. Middle: pink umbrella over her, the third rib wrapped in lumpy old grey cloth tape turned toward the camera. Bottom: dry pale-grey pavers, one small wet circle and a puddle only under her pale pink rain boots. Background: clear blue sky and the sunlit plaza, soft. Far background at the RIGHT edge, small: the yellow dot (open yellow umbrella under the stall's eave).
- subject: Danbi, Day-1 outfit (mint denim pinafore dress, cream T-shirt, pale pink rain boots, top bun with mint scrunchie, red strawberry clip above her LEFT ear — on her far side here, so the top bun + mint scrunchie carry her identity); dry under the umbrella. Cloud L2.
- emotion: Danbi: D1 eager smile, forced and a little stiff — trying hard to look fine.
- motion/direction: walking left→right (same direction as panel_001); eye travels down from the cloud to the puddle.
- dialogue_ref: 없음 (무대사)
- art_space: none
- fx/note: R1 shown, never explained. Rain only inside the column; everything outside is dry and sunlit. Cloud grey, volumetric, shaded underside, no outline (never a white bubble shape). Yellow dot tiny and far.

### panel_003
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 · tension 5 · ⟨웃음⟩⟨복선⟩ F2
- size: wide strip (aspect 16:9)
- camera: FACADE, eye level, wide, from across the plaza facing the market front; slight wide-angle.
- composition: Danbi just right of centre (about x 55–60 %) on the dry plaza, in front of the stall's ALLEY-side half (mint shutter DOWN, dark-green eave, tin downpipe behind her); the deep blue-violet hydrangeas of the alley mouth kept LOW at the far right, below mid-height. A gust: her pink umbrella flips inside-out and is yanked out to her RIGHT (away from the yellow), ending before x ~70 %; the taped third rib snaps right at the tape and juts outward. To the right of the snapping rib, the patch x ~72–96 %, y ~8–50 % is plain: sunlit wall, eave edge and clear sky only (SFX space). Her cloud, now L3 (slate blue-grey, heavy straight column), pours onto her. LEFT edge, cropped by the frame: the rim of an ALREADY OPEN sunflower-yellow canopy gliding in toward her at head height — only part of the canopy, no person readable, no opening motion, no motion lines on it. Everything outside the column dry and sunlit.
- subject: Danbi Day-1, rain starting to hit her hair; cloud L3; inside-out pink umbrella with the snapped taped rib; edge of the yellow canopy (Taeo off-frame left).
- emotion: Danbi: mouth in an "ah!" O-shape, eyebrows up, shoulders jerked (D6 startled).
- motion/direction: gust pulls right; yellow enters from the left — eye goes to the snap (right), back to the yellow (left), then down.
- dialogue_ref: 없음 (대사 없음) · [효과음] 뚝! (살 꺾이는 소리 — 뷰어가 KM ក្រាក់! 으로 씀)
- art_space: a small clear patch of sunlit background to the right of the snapping rib, centre-right of the image (about x 72-96 %, y 8-50 %), outside the rain column and far from the yellow canopy at the left edge
- fx/note: The snap SFX sits next to the rib, never near the yellow. Wind does not move the cloud or tilt the column (straight vertical). Shutter and alley mouth free of any signs. The yellow canopy is already open and steady (F2).

### panel_004
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 · tension 5 · ⟨웃음⟩
- size: small (aspect 1:1)
- camera: close-up, eye level just below her face, front three-quarter; NOT top-down.
- composition: Her face fills the centre; heavy straight raindrops from directly above hit her forehead and nose, confined to a column the width of her head and shoulders. Lower-left corner: the edge of the inside-out pink umbrella in her fist. Behind her head, soft-focus: the dry sunlit plaza and clear blue sky — sunshine all around her. Cloud out of frame above.
- subject: Danbi Day-1, wet state L3 begins: fringe plastered to her forehead, strands stuck to her cheeks, top bun drooping, shoulders darkening. Cloud L3 (off-frame).
- emotion: comic crumpled pout — eyes squeezed shut, mouth wobbling into a cry-face (funny, not tragic).
- motion/direction: drops fall straight down; eye drops into panel_005.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: No sweat drops or comic symbols. The sunny dry background must read (rain only on her).

### panel_005
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 · tension 6 · ⟨설렘⟩⟨복선⟩ F2
- size: large (aspect 9:16)
- camera: low angle from right beside her head, at her eye height, tilted up about 40° (next to her point of view); normal lens.
- composition: The underside of an already-open sunflower-yellow canopy slides in from the upper-LEFT (arch side) and covers the top two-thirds of the frame; its shaft runs diagonally down to the lower-LEFT edge, where only a hand grips the light natural-wood crook handle — rolled faded-denim cuff, brass watch on that LEFT wrist. Her rain now drums on the canopy: dark splash spots seen through the sunlit yellow fabric and a fringe of drops falling off its right rim. Upper-right corner beyond the rim: clear blue sky. Lower-right foreground, soft focus: the crown of her wet head (drooping top bun, mint scrunchie) and the tip of her inside-out pink umbrella.
- subject: Taeo — hand and cuff only; yellow umbrella open and steady; Danbi's head (partial, wet); cloud L2 above the canopy (hidden; shown only by the drumming).
- emotion: hush — sudden shelter; no faces.
- motion/direction: canopy glides left→right over her; eye from the hand (lower-left) up the shaft to the canopy, down to her head.
- dialogue_ref: 없음 (무대사)
- art_space: none
- fx/note: NO opening motion, no sound, no motion lines — it was already open. NO gold anywhere. Watch = dull brownish brass, plain bar markers.

### panel_006
- scene_id: S1 / location: LOC_PLAZA
- beat: B1 · tension 6 · ⟨정적⟩⟨복선⟩ F3 · **캡처 컷**
- size: full-bleed (aspect 9:16)
- camera: SIDE, low angle (hip height), medium-wide two-shot — **"P6 axis"**: camera on the plaza side, perpendicular to the line between them, the canopy shaft on the frame's vertical centre line, normal lens. (Reserved for the EP12 finale — record it exactly.)
- composition: Top fifth: clear blue sky with her small grey cloud (L2) a clear metre above the yellow canopy, its straight column landing on the canopy. Middle: the large sunflower-yellow canopy domed over both — the strongest colour of the episode — small splashes on top and a thin stream running off its LEFT rim. Lower half, both from mid-thigh up: Taeo screen-LEFT, tall, three-quarter toward her, holding the crook handle with his LEFT hand on her side; his outer (right, screen-left) shoulder sticks out past the canopy's left rim and is darkened by the runoff. Danbi screen-RIGHT under the centre of the canopy, her crown at his shoulder height, holding the inside-out pink umbrella low at her waist, snapped taped rib toward the camera. Background: sunlit dry plaza, soft.
- subject: Taeo O1 (rolled-sleeve faded denim shirt, dark navy apron, pencil behind RIGHT ear, brass watch on LEFT wrist), outer shoulder wet. Danbi Day-1, wet L3 state (hair darkened and flattened, fringe stuck, shoulders dark). Cloud L2.
- emotion: Taeo: T3 — deadpan, eyes DOWN on the bent rib in her hand, deliberately not up. Danbi: looking up at the yellow canvas from beneath, lips parted, stunned stillness. Both silent.
- motion/direction: eye from the cloud down the column onto the yellow, then along his downward eye-line to her broken rib (the leading line), then down to the next panel.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: L
- fx/note: The episode's capture image — spend the most care here. NO gold. His eyes are the clue (F3): on the rib, never on the sky. Rain only in the column and off the canopy rim; no rain anywhere else.

### panel_007
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 첫 말맛 · tension 5 · ⟨웃음⟩⟨복선⟩⟨이중의미⟩ F3·F10
- size: medium close (aspect 3:4)
- camera: close-up over-the-shoulder from behind Danbi's right shoulder, chest height (slightly low), at Taeo; SIDE axis kept (he is screen-left).
- composition: Right foreground, soft: back of Danbi's wet head (drooping top bun, mint scrunchie) and dark wet shoulder. Centre-left: Taeo's face and shoulders, three-quarter toward camera, eyes lowered to the inside-out pink umbrella in her hands (below frame). Top band: underside of the yellow canopy; beyond its LEFT rim the upper-left corner is clear blue sky. A few drops falling off the rim onto his outer shoulder at mid-left. Cloud off-frame above the canopy.
- subject: Taeo O1, outer shoulder darkened; Danbi (back of head, wet L3). Cloud L2 (off-frame; drumming on the canopy).
- emotion: Taeo: T3 deadpan, eyes down on her broken umbrella; matter-of-fact.
- motion/direction: his eye-line points down-right out of frame (to the umbrella) → into panel_008.
- dialogue_ref: 태오 "바람 쪽으로 펴지 마세요. 뒤집힙니다."
- art_space: upper-left corner of the image (left ~45 % x top ~22 %): clear blue sky beyond the canopy's left rim, above Taeo's head
- fx/note: His first line; the cause is exactly 'wind'. No upward glance, no reaction to the rain or her wet hair.

### panel_008
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 5 · ⟨웃음⟩⟨복선⟩
- size: medium (aspect 3:4)
- camera: SIDE, waist-up single of Danbi, camera slightly low (chest height) so the background beyond the canopy rim is sky.
- composition: Danbi on the right half, three-quarter facing screen-left toward Taeo (only his denim sleeve and the crook handle at the left edge), both hands flapping, one still holding the inside-out pink umbrella. The yellow canopy's underside across the top; beyond its LEFT rim, clear sky in the upper-left. Rain drumming on top (small splashes at the rim); cloud off-frame.
- subject: Danbi Day-1, wet L3 state. Cloud L2 (off-frame).
- emotion: Danbi: D2 flustered rambling — mouth open mid-sentence, eyebrows up, hands waving, eyes busily checking his face.
- motion/direction: her gaze and gestures point left (to him); eye then down.
- dialogue_ref: 단비 "아, 이 우산요?" "해 가리는 거예요."
- art_space: upper-left third of the image (left ~42 % x top ~30 %): clear blue sky beyond the canopy's left rim, above Danbi's waving hands
- fx/note: Bubble ② is a fixed line, quoted back in panel_034 (and EP9). He does not answer here.

### panel_009
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 6 · ⟨웃음⟩ R3 씨앗
- size: medium close (aspect 3:4)
- camera: SIDE, slightly low, medium-close two-shot favouring Danbi; Taeo's three-quarter face and shoulder at the left third.
- composition: Danbi chest-up, right of centre; Taeo at the left third, eyes down on the broken rib (below frame). Top: the yellow canopy's rim with splash crowns along it (the rain one step heavier) and a stream of water pouring off the LEFT rim onto his outer shoulder at mid-left. The canopy's left rim crosses about a third of the way down; Taeo's face sits below it, and the upper-left area above the rim (left ~44 %, top ~35 %) is clear sky.
- subject: Danbi wet L3; Taeo's outer shoulder soaked. Cloud L3 (off-frame above the canopy; the splash crowns show it).
- emotion: Danbi: D3 wincing self-correction — eyes squeezed shut, one palm raised. Taeo: T3 deadpan, unmoved, still only looking at the rib while water pours on his shoulder.
- motion/direction: right-to-left ping-pong; the stream falls on him and he doesn't react.
- dialogue_ref: 단비 "요즘 햇볕이 엄청 세서… 피부과 선생님이 그러는데…" "아니, 그게 아니라…"
- art_space: upper-left third of the image (left ~44 % x top ~35 %): clear blue sky above the canopy's left rim - above the rim, the water stream and Taeo's face
- fx/note: R3 seed — her self-correction = rain one step heavier (L2→L3). Comedy contrast: her rambling vs his stillness.

### panel_010
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 6 · ⟨설렘⟩ 우발 접촉 1회
- size: medium (aspect 3:4)
- camera: SIDE, eye level, medium two-shot (waist up), slightly wider than panel_009 so the cloud shows.
- composition: Taeo screen-LEFT, Danbi screen-RIGHT, the yellow canopy over both. Her cloud (L3, slate blue-grey) visible above the canopy at the top-RIGHT, cropped by the right edge, column landing on the canopy. Centre, chest height: the natural-wood crook handle — his LEFT hand gripping it (watch visible), her small right hand (thin mint hair tie on the wrist) landing ON TOP of his hand as she reaches to take it.
- subject: Taeo O1 (outer shoulder wet); Danbi Day-1 wet L3. Cloud L3.
- emotion: Danbi: words cut off mid-sentence, eyes dropping to their hands (D6, small startle). Taeo: T1 deadpan, eyes down on the hands/handle.
- motion/direction: her hand moves left onto his; eye goes to the hands and stops.
- dialogue_ref: 단비 "괜찮아요, 제가 들—"
- art_space: upper-left corner of the image (left ~45 % x top ~22 %): clear sky beyond the canopy's left rim - away from the hands, the handle and the cloud at the top-right
- fx/note: The only accidental touch of EP1. NO gold. Natural pink cheeks only, no blush effects.

### panel_011
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 6 · ⟨정적⟩
- size: insert (aspect 1:1)
- camera: insert close-up at hand height, eye level, shallow focus.
- composition: Centre-lower: the light natural-wood crook handle; his long fingers, brass watch on his LEFT wrist, rolled denim cuff; her small right hand (thin mint hair tie) resting on top of his, both still — his hand just starting to slide out from under hers, leaving the handle to her. Upper quarter: soft-focus background only (dry sunlit plaza, a slice of clear sky), nothing sharp.
- subject: two hands; watch = round brass, cream dial, plain bar markers, no numbers, brown leather strap.
- emotion: one held beat of stillness.
- motion/direction: his hand withdraws down-left; the handle passes to her.
- dialogue_ref: 태오 "손잡이 끝을 잡으세요."
- art_space: upper quarter of the image, left half: soft-focus empty background (dry plaza, a slice of sky) - nothing over the hands
- gap_after: M
- fx/note: Brass is dull and brownish (no competition with the yellow). The hands are dry under the canopy; rain L3 off-frame.

### panel_012
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 6 · ⟨설렘⟩⟨복선⟩⟨이중의미⟩ F3 (안도 = 미스디렉션)
- size: medium close (aspect 3:4)
- camera: close-up over-the-shoulder from behind Danbi's right shoulder, chest height — same setup as panel_007, tighter on his eyes.
- composition: Right foreground: her wet shoulder visibly DROPPING (relief). Centre-left: Taeo's face, eyelids lowered, eyes on the bent rib of her umbrella (below frame). Top band: the yellow canopy underside and its left rim; upper-left: clear sky.
- subject: Taeo; Danbi (shoulder, back of the wet head). Cloud L3→L2 (off-frame; the drumming softens).
- emotion: Taeo: T3 deadpan, attentive only to the rib. Danbi: relief in the shoulder line — 'he's only looking at the umbrella'.
- motion/direction: his downward eye-line is the line of the panel.
- dialogue_ref: 태오 "세 번째 살. 휘었네요."
- art_space: upper-left fifth of the image (left ~45 % x top ~20 %): clear sky beyond the canopy's left rim, above Taeo's head
- fx/note: Fixed line, imitated in panel_031 (identical KM). Her relief is the misdirection; his eyes clearly DOWN.

### panel_013
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 5 · ⟨설렘⟩ 닿을 뻔 1
- size: medium (aspect 3:4)
- camera: SIDE, eye level, medium two-shot.
- composition: Taeo screen-LEFT, Danbi screen-RIGHT. Her cloud (L1, pale silver, thinning from its edges, a few last drops) only partly in frame at the top-RIGHT corner. Danbi holds the yellow umbrella's crook handle out to him at chest height (canopy still open above them); his hand rises to take it — fingertips one knuckle apart, her fingers already letting go first.
- subject: Danbi wet (L3 state stays; drops falling from her fringe); Taeo O1. Cloud L1 fading.
- emotion: Danbi: D7 delighted open smile, eyes crescents, water still dripping from her bangs. Taeo: T1 deadpan, eyes on the handle.
- motion/direction: handle moves left, back to him.
- dialogue_ref: 단비 "고마워요, 고마워요, 사장님!"
- art_space: upper-left corner of the image (left ~45 % x top ~22 %): clear sky beyond the canopy's left rim - away from the hands and the fading cloud at the top-right
- fx/note: Near-touch #1. Her wetness stays though the cloud fades. No gold.

### panel_014
- scene_id: S1 / location: LOC_PLAZA
- beat: B2 · tension 5 · ⟨웃음⟩⟨복선⟩ F4
- size: medium (aspect 3:4)
- camera: FACADE, eye level, medium two-shot from the plaza side; the stall behind them.
- composition: Taeo screen-LEFT (arch side), Danbi screen-RIGHT. Behind them, slightly soft: the stall's faded mint shutter (DOWN, blank) and the dark-green eave edge. Taeo has just furled the yellow umbrella and gives it one shake — a small arc of droplets flicking off toward the ground at his side (left). Danbi blinking at him. NO cloud anywhere in frame.
- subject: Taeo O1 (outer shoulder still damp); Danbi Day-1, still wet (hair dark, fringe stuck) though the cloud is gone.
- emotion: Taeo: T1 deadpan. Danbi: blinking, eyebrows up, mouth small (light D6).
- motion/direction: droplets flick down-left; eye moves right to her blink.
- dialogue_ref: 태오 "사장 아닙니다. 수선공입니다."
- art_space: upper-left fifth of the image (left ~45 % x top ~20 %): the flat blank mint shutter face and the shaded eave underside above Taeo's head
- gap_after: M
- fx/note: He closes the umbrella only AFTER the cloud is completely gone (F4) — no cloud in frame; the only droplets come from his shake. Shutter blank.

--- SCENE BREAK --- (S1 LOC_PLAZA → S2 LOC_HYDRANGEA_ALLEY)

### panel_015
- scene_id: S2 / location: LOC_HYDRANGEA_ALLEY
- beat: B3 목표 소품 · tension 4 · ⟨웃음⟩⟨장사⟩
- size: wide strip (aspect 16:9)
- camera: ALLEY-MOUTH, eye level, wide, from the plaza-side end looking into the alley.
- composition: Market outer wall with the green iron staircase and the one old streetlamp on the LEFT. The old stone wall on the RIGHT is low (about chest height), so its flat top runs from the lower-right toward the vanishing point at about two-thirds height; the right half of the frame above it (x ~42–88 %, top ~70 %) is only clear sky and the plain upper face of the wall — nothing else. Deep blue-violet hydrangeas in the soil strip and black rubber tubs: full on the left side, kept LOW along the base of the stone wall on the right (below the wall top). Mossy drain. In the left ~40 % of the frame: Danbi tugging the pastel mint ice cart (cream trim, blank cream board, silver hand-crank ice shaver, folded strawberry-pink parasol, glass jars of red strawberry syrup) out from among the hydrangeas, bending her face close to one syrup jar and whispering to it. Midday light falling into the alley, short shadows.
- subject: Danbi Day-1, hair still damp (fringe damp, shoulders drying). PROP_ICE_CART. No cloud.
- emotion: Danbi: sheepish coaxing whisper to the jar, like talking to a pet (comic; D4).
- motion/direction: the cart is pulled toward the camera (out to the stall → next scene); the eye reads Danbi on the left, then rests on the open right half.
- dialogue_ref: 단비 "딸기야, 오늘이 첫날이다…" "떨지 마…"
- art_space: right half of the image from the top down to about two-thirds height (x ~42-88 %, y 0-70 %): clear sky above the stone wall's flat top and the plain upper wall face - no hydrangea heads or streetlamp there
- gap_after: M
- fx/note: No yellow in this frame, so the red syrup jars are fine here. Cart board blank cream. No cloud.

<!-- SECTION 1 DONE: P01 – P15 -->

--- SCENE BREAK --- (S2 LOC_HYDRANGEA_ALLEY → S3 LOC_EAVES_STALL, midday, shutter DOWN, no tape line)

### panel_016
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨설렘⟩⟨장사⟩
- size: medium-wide (aspect 4:3)
- camera: FRONT, eye level, medium-wide two-shot from the plaza.
- composition: The whole stall front, framed tight: the shutter box runs along the very top edge, so the small empty brass S-hook sits at the very top edge (top ~6 %) or just out of frame; shutter DOWN (blank faded-mint face), single keyhole at the bottom centre, bare grey concrete floor (NO tape line). Arch-side (screen-LEFT): Taeo at the far LEFT edge (left of x ~14 %) by the iron-pipe repair rail on the side wall, hanging the furled yellow umbrella by its crook, eyes on the handle, giving one small nod. Alley-side (screen-RIGHT): Danbi has parked the mint cart and is bent forward over it, popping the strawberry-pink parasol open with one hand while waving at him with the other — her head stays below the upper third; the opened parasol leans out at the far RIGHT edge (right of x ~84 %); tin downpipe at the right corner. The upper third between x ~14 % and ~84 % is blank shutter only. The yellow umbrella (far left) and the syrup jars (far right) sit at opposite ends of the frame. Midday sun from slightly right; the arch-side half a tone darker.
- subject: Danbi Day-1, hair and shoulders damp, fringe still damp (S3 wetness). Taeo O1, dry. Rail umbrellas with half-cut ribbons (muted blue, green, lilac, white).
- emotion: Danbi: D7 bright neighbourly wave. Taeo: T1, a single nod, eyes on the handle.
- motion/direction: her wave goes left to him; the empty vertical centre axis (hook → keyhole) stands between them.
- dialogue_ref: 단비 "이 시장 입구에, 내 첫 가게!" "여름 오기 전에… 혼자 힘으로!"
- art_space: upper third of the image from x ~14 % to ~84 % (blank mint shutter face under the eave); the small hook sits at the very top edge above this band (or just out of frame); Taeo, the rail with the yellow umbrella at the far left and the opened parasol at the right stay outside it
- gap_after: M
- fx/note: Both still think the other is the 'shop next door'. Shutter and cart board blank. No tape line (S3). Ribbons colour-only — no yellow, red or orange ribbons.

### panel_017
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨설렘⟩⟨복선⟩⟨장사⟩ F5
- size: insert (aspect 1:1)
- camera: insert, oblique three-quarter high angle over the workbench (not straight down), close.
- composition: Lower two-thirds: the unrolled faded khaki-olive canvas tool roll with brown leather ties on the dark wooden worktop — pliers, small awl, spare silver umbrella ribs, black thread spools. His fingers (rolled denim cuff at the frame edge) push ONE new bright-yellow spool back down into its pocket, the spool half-hidden. Upper third: the plain dark back edge of the workbench and the shadowed wall, soft.
- subject: Taeo's hand only (PROP_TOOL_ROLL); Danbi off-screen (voice only).
- emotion: a casual, private, slightly hasty tuck.
- motion/direction: fingers pushing downward into the pocket.
- dialogue_ref: 단비(화면 밖) "우와… 공구들이 저보다 나이 많겠어요!" / 태오 "할아버지 겁니다."
- art_space: upper third of the image: plain dark-wood back edge of the workbench and the shadowed wall, soft - nothing over the yellow spool
- fx/note: NO red or orange in frame (no syrup jars, no strawberry charm). The yellow spool is the only strong yellow — the seed of the yellow thread (F5).

### panel_018
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨설렘⟩⟨복선⟩⟨장사⟩
- size: medium (aspect 3:4)
- camera: FRONT on the arch-side half, at the eye level of a seated man (lowish), medium.
- composition: Taeo seated on the low worn round wooden stool (seat polished by years of use), centre-left, sweeping the edge of the stool seat once with his palm. Behind him: the dark wooden workbench with a small vise and the thread-spool shelf; bare bulb (off) on the rafter above. LEFT: on the side-wall iron-pipe rail, umbrellas repaired with BLACK thread, each with a half-cut cloth ribbon (muted blue, green, lilac, white). Upper part: the blank lowered shutter's left half and the eave underside. The centre hook just out of frame at the right.
- subject: Taeo O1; PROP_GRANDPA_STOOL; repaired umbrellas.
- emotion: Taeo: T1 deadpan with the faintest softening at the eyes (a hint of T7); no other sign of feeling.
- motion/direction: palm along the stool edge; eye drifts left to the rail.
- dialogue_ref: 태오 "이 자리, 할아버지가 사십 년 앉으셨습니다." "이번 장마는 제가 대신 엽니다."
- art_space: upper third of the image, centre-right (x ~34-80 %): the blank mint shutter face above the workbench, right of the bulb - not on Taeo's face, not on the rail
- gap_after: M
- fx/note: The furled yellow umbrella hangs at the far end of the rail, partly cropped; nothing red near it. Ribbons colour-only, no numbers or labels. No frayed canvas flap on the eave (EP2 prop).

### panel_019
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨웃음⟩⟨복선⟩
- size: medium-wide (aspect 4:3)
- camera: FRONT, eye level, medium-wide two-shot.
- composition: Framed from the knees up with headroom: the shutter box along the very top edge, the small empty hook at the very top edge (top ~6 %) or just out of frame; the upper third across the full width is blank shutter. Danbi on the right half flings both arms wide at shoulder height (inflating the crowd) — hands and head below the upper third. Taeo on the left at the rail, leaning a little toward it, body half-turned away from the plaza, fingertips on the tip of a repaired umbrella — not looking at the plaza at all; his head also below the upper third. Shutter DOWN, bare floor (no tape). The plaza is behind the camera, implied by the sunlight.
- subject: Danbi Day-1 (damp); Taeo O1.
- emotion: Danbi: D2 big boastful grin. Taeo: T2 deadpan, eyes on the umbrella tip.
- motion/direction: her spread arms point outward; his flat correction answers from the left — right→left ping-pong.
- dialogue_ref: 단비 "여기 하루에 몇천 명은 지나가요!" / 태오 "지난 한 시간, 열일곱 명입니다."
- art_space: upper third of the image across the full width (blank mint shutter face); the small hook sits at the very top edge above this band (or just out of frame); Danbi's raised hands and both heads stay below it
- gap_after: M
- fx/note: Clue: he has been watching the plaza the whole time. The rail's yellow umbrella (far left) touches nothing red.

### panel_020
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨웃음⟩
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium two-shot (waist up), a little tighter than panel_019.
- composition: Danbi screen-RIGHT, chest puffed out, one thumb pointing at herself, the other hand still flapping away the last embarrassment (below her chin). Taeo screen-LEFT, standing straight, hands at his sides. Framed with headroom so both heads and all hands stay below the upper third; the upper third across the full width is blank shutter, with the small hook at the very top edge. A clear gap of blank shutter between them for the awkward beat.
- subject: Danbi Day-1 (damp); Taeo O1.
- emotion: Danbi: D7 → D2 self-introduction energy. Taeo: T1 deadpan, eyes level on her flapping hand, never up.
- motion/direction: her line first (upper-right), his three syllables answer from the left.
- dialogue_ref: 단비 "저는 소단비예요! 딸기 빙수, 이 동네 최고예요!" / 태오 "문태오입니다."
- art_space: upper third of the image across the full width: blank mint shutter face below the small hook at the very top edge - no heads or hands in it
- gap_after: M
- fx/note: The episode's longest bubble by characters — give it room. The silence after is carried by the empty shutter between them.

### panel_021
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B3 · tension 4 · ⟨웃음⟩
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium two-shot.
- composition: Danbi screen-RIGHT holding up her key on a mint-green spiral coil wrist keychain with a tiny red strawberry charm, jingling it like a greeting; at the same moment Taeo screen-LEFT takes out his worn brass key on a blank dark-brown leather tab and leans toward the same shutter centre. Neither has noticed the other's key. Shutter DOWN; the keyhole at the bottom centre between them. Framed with headroom: the hook, if visible, small at the very top edge; both heads, hands and keys below the upper third, which is blank shutter across the full width.
- subject: Danbi Day-1 (damp); Taeo O1; PROP_SHUTTER_KEYS.
- emotion: Danbi: D7 cheerful. Taeo: T2, eyes on the keyhole.
- motion/direction: both converge on the centre axis from left and right.
- dialogue_ref: 단비 "그럼 태오 씨, 저 셔터 열게요!" / 태오 "저도 엽니다."
- art_space: upper third of the image across the full width: blank mint shutter face (the hook, if visible, small at the very top edge) - keys, hands and the keyhole stay below it
- fx/note: Keys = aged dull brass, identical, no engraving or numbers. The red charm is in frame, so the rail's yellow umbrella must be OUT of frame here.

### panel_022
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 목표 충돌 · tension 6 · ⟨설렘⟩⟨복선⟩ 닿을 뻔 2
- size: insert (aspect 1:1)
- camera: insert, eye level at the bottom of the shutter (crouching height), macro close, straight-on.
- composition: Lower centre: the single keyhole in the bottom bar of the faded mint shutter. From the LEFT: his LEFT hand (rolled denim cuff, brass watch) with the worn brass key on the blank dark-brown leather tab. From the RIGHT: her right hand (thin mint hair tie on the wrist) with the identical bright brass key on the mint coil with the tiny red strawberry charm. Key tips stopped a hair apart right in front of the keyhole; their fingers one knuckle apart. Upper quarter: plain blank mint shutter face.
- subject: two hands, two keys, one keyhole.
- emotion: frozen surprise, in the hands only.
- motion/direction: symmetrical convergence; time stops.
- dialogue_ref: 태오 "…어." / 단비 "어?!"
- art_space: upper quarter of the image: plain blank mint shutter face - nothing over the keys, the keyhole or the fingers
- fx/note: Identical teeth and shape — only the key rings differ. No engraving, no numbers. No yellow in frame (the red charm is fine).

### panel_023
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 · tension 6 · ⟨정적⟩
- size: medium (aspect 3:4)
- camera: SIDE-ALLEY, low angle (crouch height), two-shot — camera at the alley-side end looking along the shutter toward the arch; shutter receding on screen-RIGHT, sunlit plaza on screen-LEFT, the arch far in the background.
- composition: Foreground right: Danbi crouched, three-quarter back view, cheeks puffed, glaring sideways — her head below the top fifth. Mid-ground centre (right of x ~40 %): Taeo crouched on the other side of the keyhole, half his face showing over his raised key, eyes narrowed. Their keys held up between them. Upper right (x ~36–82 %, top ~20 %): the blank mint shutter face receding near the camera; upper left (x ~0–40 %, y ~15–30 %): the sunlit plaza sky beyond the eave edge — both left plain.
- subject: Danbi Day-1 (damp); Taeo O1; both keys.
- emotion: Danbi: puffed cheeks, indignant. Taeo: T1 with eyes just a little narrower; gaze level on her key.
- motion/direction: glares cross at the centre; eye moves right → left.
- dialogue_ref: 단비 "왜 태오 씨 열쇠가 제 거랑 똑같아요?" / 태오 "할아버지 열쇠입니다."
- art_space: upper-right: the blank mint shutter face receding near the camera (x ~36-82 %, top ~20 %); upper-left, a little lower: the bright sky beyond the eave edge (x ~0-40 %, y ~15-30 %) - not on faces or keys
- gap_after: M
- fx/note: No tape line. The rail at the far arch end shows no yellow (hidden behind Taeo / the eave post) because the red charm is in frame.

### panel_024
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 · tension 5 · ⟨웃음⟩⟨장사⟩
- size: medium-wide (aspect 4:3)
- camera: FRONT, eye level, medium-wide.
- composition: Framed with headroom: the shutter box along the very top edge, the small empty hook at the very top edge (top ~6 %) or just out of frame; the upper third across the full width is blank shutter. Okja bustles in from the LEFT edge (arch side) mid-stride, both hands thrown up beside her face (not above her head), the big key ring jingling on her RIGHT hip (toward the camera as she walks right). Taeo still crouched at the keyhole, centre-left, eyes on the keys in his hand. Danbi has sprung to her feet centre-right, turning to meet Okja. All heads and hands below the upper third. Shutter DOWN, bare floor.
- subject: Okja (CHAIR_OKJA: short salt-and-pepper perm, reading glasses ON TOP OF HER HEAD with a beaded chain, brick-red quilted vest, cream blouse, grey trousers, big key ring on RIGHT hip); Danbi Day-1 (damp); Taeo O1.
- emotion: Okja: broad surprised grin, hands up. Danbi: D2 eager appeal. Taeo: T2, eyes down on the keys (he does not look up at her).
- motion/direction: Okja enters left→right; Danbi turns left to meet her.
- dialogue_ref: 단비 "회장님! 여기 제 칸 맞죠?" / 옥자 "태오야?!"
- art_space: upper third of the image across the full width (blank mint shutter face); the small hook sits at the very top edge above this band (or just out of frame); Okja's raised hands and all heads stay below it
- fx/note: The rail's yellow umbrella must be OUT of frame — Okja's brick-red vest never near yellow. Her keys: dull brass/grey, coloured cloth tags, none yellow. Glasses stay on her head here.

### panel_025
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 · tension 5 · ⟨설렘⟩⟨반전⟩(중반 작은 반전)⟨복선⟩⟨장사⟩
- size: medium close (aspect 3:4)
- camera: close-up on the FRONT axis, chest height, slightly low.
- composition: Lower third: two open palms side by side — Taeo's larger palm on the LEFT holding the worn key on the dark-brown leather tab (brass watch at his LEFT wrist), Danbi's small palm on the RIGHT holding the identical bright key on the mint coil with the tiny red strawberry charm. Middle: Okja leaning in, her reading glasses just pulled DOWN from her head onto her nose, eyes huge and round behind the lenses, nose almost touching the keys. Background soft: the blank mint shutter.
- subject: Okja; two palms; PROP_SHUTTER_KEYS.
- emotion: Okja's eyes pop — comic amazement tipping into 'oh no, my own mistake'. The palms hold still.
- motion/direction: her gaze straight down onto the keys.
- dialogue_ref: 옥자 "아이고… 둘 다 진짜네!"
- art_space: upper fifth of the image, full width: the blank shutter face above Okja's perm - off her face and the keys
- fx/note: The ONE panel where Okja's glasses come down onto her nose (script P25; seed for EP4) — in every other panel they sit on her head (character-sheet drift rule). Keys identical, no engraving or numbers. No yellow in frame.

### panel_026
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 · tension 5 · ⟨웃음⟩⟨장사⟩
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium on Okja; Taeo and Danbi cropped at the edges.
- composition: Okja centre, glasses pushed back up onto her head, slapping her own forehead with one palm, upper body twisting — toward Taeo at the LEFT edge (his shoulder and arm) and on toward Danbi at the RIGHT edge (her shoulder and damp top bun). Framed with headroom: her head and slapping hand stay below the upper third, which is blank shutter across the full width.
- subject: Okja; edges of Taeo and Danbi.
- emotion: Okja: theatrical, mock-guilty grin.
- motion/direction: her twist left→right matches the bubble order.
- dialogue_ref: 옥자 "태오한텐 문 영감님처럼 계속 열라고 해 놓고…" "단비 씨가 신청을 하니까 새 열쇠를 줬지 뭐야!"
- art_space: upper third of the image across the full width: blank shutter face above Okja - clear of her raised hand and face
- fx/note: No papers or documents. No yellow in frame.

### panel_027
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 · tension 6 · ⟨웃음⟩⟨복선⟩⟨장사⟩ 판정 · EP12 인용
- size: medium-wide (aspect 4:3)
- camera: FRONT, straight-on at standing eye height, a deliberate headroom three-shot (aspect stays 4:3): the frame is cut at about hip height so the figures fill only the lower ~40 % and the blank shutter fills the space above them; centred exactly on the vertical axis.
- composition: Top ~60 % across the full width: the blank faded-mint shutter face, with only the small empty brass hook at the very top centre (or just out of frame) and a sliver of shaded eave underside at the very top edge — nothing else. Lower ~40 %: the three figures. Okja on the axis just in front of the keyhole, leaning forward and facing the camera, her referee hand-blade frozen low at chest height, chopping DOWN along the axis toward the keyhole and the floor (below the frame edge). Taeo screen-LEFT, still crouched as since panel_024; Danbi screen-RIGHT, standing but bowing her head sharply to follow the chop. All three heads sit at or below ~60 % of the frame height. The axis still reads top to bottom: small hook → empty shutter → her hand-blade → down toward keyhole and floor. Shutter DOWN.
- subject: Okja, Danbi Day-1 (damp), Taeo O1.
- emotion: Okja: mock-stern referee (`raising one hand like a referee, mock-stern`). Taeo: T2, eyes down. Danbi: wide-eyed, following the chop down.
- motion/direction: the strongest vertical of the episode — the eye drops from the small hook through the empty shutter to her chop and on down; the empty space above them is the weight of the verdict.
- dialogue_ref: 옥자 "장마 끝날 때까지 반반." "여름 두 달 치를 한 번에 낼 수 있는 사람이 남는다."
- art_space: top ~60 % of the image across the full width: blank shutter face and eave underside, with only the small hook at the very top centre; Okja's raised hand-blade (frozen at chest height) and all three heads stay below it
- fx/note: The episode's longest line — the headroom IS the bubble room (two stacked two-line bubbles). Leader decision: stays 4:3 with headroom, not 3:4. NO keys on the hook (no 'returned key' custom), no papers. No yellow in frame.

### panel_028
- scene_id: S3 / location: LOC_EAVES_STALL
- beat: B4 · tension 5 · ⟨정적⟩⟨장사⟩
- size: medium-wide (aspect 4:3)
- camera: FRONT, a little higher than standing eye height, looking down at the floor (about 30°), medium-wide two-shot (aspect stays 4:3); the frame top sits just below the hook — the shutter box and the hook are just out of frame above.
- composition: Top ~57 % across the full width: the blank faded-mint shutter face only. Lower part: the bare grey concrete floor with one roll of plain white cloth tape sitting exactly on the axis at the centre (Okja gone). Taeo screen-LEFT and Danbi screen-RIGHT, both squatting low on their own sides of the empty floor, over a metre apart, so their heads sit below ~57 % of the frame height; they look different ways — Taeo, squatting beside the tape roll, toward the rail (left); Danbi, chin on her fists, out toward the sunny plaza (toward camera-right).
- subject: Danbi Day-1 (damp); Taeo O1; tape roll.
- emotion: Danbi: D4 pondering half-smile. Taeo: T1.
- motion/direction: eyes diverge; the tape roll pins the centre.
- dialogue_ref: 단비 "그러니까… 비 오면 태오 씨가 잘 팔고, 해 나면 제가 잘 팔고." / 태오 "장마는 6주뿐입니다. 그다음은 여름입니다."
- art_space: top ~57 % of the image across the full width: blank shutter face (the shutter box and the hook just out of frame above) - both heads, the bare floor and the tape roll stay below it
- gap_after: M
- fx/note: Floor still bare — NO tape line yet (it appears in panel_029). Tape roll plain, no print. Leader decision: stays 4:3 with the camera higher, not 3:4. Their squatting leads straight into panel_029 (he kneels to lay the tape).

--- SCENE BREAK --- (S3 → S4: early afternoon, shutter UP, tape line appears)

### panel_029
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 티격태격 · tension 6 · ⟨웃음⟩⟨장사⟩
- size: medium-wide (aspect 4:3)
- camera: FRONT, standing eye height looking slightly down, medium-wide.
- composition: Shutter UP: the rolled shutter box runs along the very top edge, with the small brass hook under it at the very top edge (top ~6 %); just below, the dark storage interior opens across the upper third between x ~13 % and ~84 % — keep that band plain and dark, both crouching heads well below it. Taeo kneels LEFT of the axis, measuring with his grandfather's wooden folding rule (tick lines only) and pressing a fresh white cloth-tape line from the centre of the shutter threshold toward the camera to the eave edge. Danbi crouches RIGHT of the line, one palm spread wide (a hand-span), bargaining. Workbench and rail at the far left edge; cart with its folded parasol at the far right (parasol below the top third); early-afternoon sun slanting in from the right onto the cart.
- subject: Taeo O1; Danbi Day-1 (damp); tape line (new).
- emotion: Danbi: D2 wheedling grin. Taeo: T2, eyes down on the rule.
- motion/direction: the tape line is a leading line from the shutter down to the bottom edge, between them.
- dialogue_ref: 단비 "한 뼘만 더요!" "카트 바퀴가 좀 튀어나와서요…"
- art_space: upper third of the image from x ~13 % to ~84 %, just under the rolled shutter box: the dark open storage interior and the eave underside; the small hook under the box stays at the very top edge above this band
- fx/note: The tape line appears HERE (panel_029 on). Folding rule: tick lines only, no numbers. Syrup jars at the far right, the rail's yellow umbrella at the far left — never close.

### panel_030
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 · tension 6 · ⟨웃음⟩⟨장사⟩
- size: medium (aspect 3:4)
- camera: FRONT, low (kneeling height), medium on Taeo.
- composition: Taeo kneeling centre-left, head down, fingertips pressing the tape flat onto the concrete; the tape line runs from the shutter threshold down to the bottom edge. Behind: the dark storage interior (shutter up); workbench at the left.
- subject: Taeo O1; tape line.
- emotion: T2 deadpan, eyes on the tape; zero concession.
- motion/direction: his pressing fingers lead the eye down the line.
- dialogue_ref: 태오 "폭 3미터 60. 한쪽에 1미터 80입니다."
- art_space: upper fifth of the image (x ~14-66 %): the dark, flat storage interior and eave underside above Taeo's head
- fx/note: The numbers are only spoken — nothing written or numbered anywhere in the image.

### panel_031
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 · tension 6 · ⟨설렘⟩ (서로의 말을 듣고 있다)
- size: medium (aspect 3:4)
- camera: FRONT, low (crouch height), medium two-shot across the tape line.
- composition: The tape line runs vertically up the centre of the frame between them. Danbi crouched screen-RIGHT, copying his kneeling posture exactly — chin tucked, eyebrows flattened into one straight line, lips pressed flat, voice 'lowered'. Taeo screen-LEFT, eyes still only on the tape, pressing it more precisely. Dark storage interior behind; the upper third across the full width is that plain dark interior and the eave underside, with the hook (if in frame) small at the very top edge and both crouching heads below it.
- subject: Danbi Day-1 (damp); Taeo O1.
- emotion: Danbi: D8 mock-serious deadpan (exaggerated imitation). Taeo: T2 deadpan.
- motion/direction: mirror composition across the line.
- dialogue_ref: 단비 "세 번째 살. 휘었네요." / 태오 "왼쪽에서 세 번째입니다."
- art_space: upper third of the image across the full width: the dark storage interior and eave underside (the hook, if in frame, small at the very top edge) - not on faces
- fx/note: The episode's only imitation (echoes panel_012). Mirrored poses must read at a glance. Neither smiles.

<!-- SECTION 2 DONE: P16 – P31 -->

### panel_032
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 · tension 6 · ⟨설렘⟩ R3 씨앗
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium two-shot, a touch wider than panel_031.
- composition: Taeo screen-LEFT snipping the tape end with small scissors, his eyes slid sideways onto the silver hand-crank ice-shaver blade on her cart (not her face). Danbi screen-RIGHT, waving one hand then wincing; directly above HER a small cloud has just formed, squashed flat under the eave (CLOUD_EAVE, L2), thin straight rain lines onto her head — the cloud partly cropped at the top-RIGHT corner. Shutter UP, dark interior; tape line on the floor; small puddle starting at her feet only.
- subject: Taeo O1; Danbi Day-1, hair getting wet again; cloud L2 under the eave.
- emotion: Taeo: T3-style sideways glance at the blade, deadpan. Danbi: D9 embarrassed laugh turning into D3 wince.
- motion/direction: his look goes right to the blade; her correction triggers the cloud — eye goes up-right to the cloud, then back left to the bubbles.
- dialogue_ref: 태오 "빙삭기 날. 각이 정확합니다." / 단비 "아유… 싼 거예요… 아니, 그게 아니라…"
- art_space: upper-left half of the image (x ~0-50 %, top ~35 %): the dark storage interior and eave underside, at least one cloud-width from the flat cloud in the top-right corner
- fx/note: R3 seed — her self-correction makes the cloud appear (none → L2). Pressed flat under the eave but still a real grey cloud, no outline. Syrup jars on the cart: keep them away from any yellow (rail umbrella out of frame).

### panel_033
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 · tension 7 · ⟨웃음⟩⟨복선⟩⟨들킬뻔⟩(작은) F6
- size: medium-wide (aspect 4:3)
- camera: REVERSE, eye level, from deep under the eave looking out at the sunny plaza.
- composition: Top band: the dark-green eave underside with its wooden rafters, framing the shot. Foreground screen-LEFT: Danbi, water dripping from her hair, the flat L2 cloud squashed under the eave right above her at the upper-left; the tin downpipe at the left edge. Foreground screen-RIGHT: Taeo kneeling, eyes on the tape. Background, across the bright plaza: Mansik at his fish-cake cart, eyes down on his steaming pot, mouth open, calling out; the plane tree at the right edge; low buildings. A band of clear sky between the eave edge and the rooftops.
- subject: Mansik (NEIGHBOR_MANSIK: grey buzz cut, droopy eyes, grey T-shirt, dark olive rubber apron, white towel round his neck, fish-cake skewer in his RIGHT hand, black rain boots); Danbi Day-1 (hair dripping, shoulders damp); Taeo O1.
- emotion: Mansik: amused sports-commentator grin, eyes DOWN on the pot (never up). Danbi: caught, eyes darting. Taeo: T2, silent — he does NOT correct the wrong claim.
- motion/direction: eye from wet Danbi (left) → across the plaza to Mansik (centre) → to Taeo's silence (right).
- dialogue_ref: 만식 "물받이 새네!"
- art_space: the clear sky band over the plaza, centre-right (x ~44-76 %), above Mansik and just below the eave edge - on the opposite side from the cloud at the upper-left, not in the plane tree
- fx/note: Mansik never looks up. Taeo's silence is the clue (he corrects every number but not this). Fish-cake cart: no signs, no writing. Rail umbrella (yellow) out of frame.

### panel_034
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 · tension 7 · ⟨웃음⟩⟨복선⟩⟨이중의미⟩ (회차 최대 웃음 쌍 P33–34)
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium two-shot.
- composition: Danbi screen-RIGHT, standing in the eave's shade, snapping her taped pink umbrella open; the cloud (now L1, pale silver, faint drizzle) pressed flat between the canopy top and the eave underside at the top-right. Along the bottom edge, bright sun on the pavement outside the eave — the umbrella is clearly NOT for the sun. The taped third rib sags toward the camera. Taeo screen-LEFT, kneeling, eyes still on the tape.
- subject: Danbi Day-1 (hair damp, dripping); Taeo O1; cloud L1 under the eave.
- emotion: Danbi: D2 overeager 'yes yes yes!'. Taeo: T1/T2 flat — at most one eyebrow raised a hair (T4); no smirk.
- motion/direction: her line, then his quote answers from the left without him looking up.
- dialogue_ref: 단비 "네네네! 물받이요!" / 태오 "'해 가리는 거예요.' 아까 그러셨죠."
- art_space: upper-left half of the image (x ~0-52 %, top ~34 %): the dark storage interior and eave underside on the arch side; the cloud stays in the top-right corner
- fx/note: The only quote-tease of EP1 (the quote = panel_008 bubble ②). The shade-vs-sun boundary must read clearly. Rail's yellow umbrella out of frame (syrup jars on the cart).

### panel_035
- scene_id: S4 / location: LOC_EAVES_STALL
- beat: B5 · tension 7 · ⟨정적⟩
- size: medium (aspect 3:4)
- camera: FRONT, standing eye height looking down at about 30°, medium two-shot — the floor line is the subject.
- composition: The white tape line runs straight from the shutter threshold down through the centre of the frame to the bottom edge, between their feet. Danbi screen-RIGHT under her open pink umbrella in the shade, mouth hanging open. Taeo screen-LEFT, kneeling, eyes on the tape. The flat cloud fading at its edges (L1) at the top-right.
- subject: Danbi Day-1 (hair damp); Taeo O1; tape line.
- emotion: Danbi speechless; Taeo unmoved.
- motion/direction: the line pulls the eye straight down to the next panel.
- dialogue_ref: 없음 (말문 막힘, 풍선 없음)
- art_space: none
- gap_after: L
- fx/note: The line is both border and link. No bubble. Rail's yellow umbrella out of frame.

--- SCENE BREAK --- (S4 → S5: late afternoon, long shadows)

### panel_036
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 숨긴 문제 · tension 6 · ⟨웃음⟩
- size: medium (aspect 3:4), framed medium-wide
- camera: SIDE-ALLEY, eye level, medium-wide — camera at the alley-side end; the stall (shutter UP) recedes on screen-RIGHT, the sunlit plaza on screen-LEFT.
- composition: Foreground left, in low warm sun outside the eave: the folding table; Danbi wiping it, her other palm casually covering the taped rib of her folded pink umbrella leaning against the table. Bomi running in from the LEFT (plaza side) in her red hooded raincoat, the small inside-out clear plastic umbrella in her LEFT hand, pointing at the taped rib with her right index finger. Deep background right, small, under the eave: Taeo at the workbench. Long late-afternoon shadows stretch across the pavement.
- subject: Bomi (KID_BOMI: black bowl-cut bob, blunt bangs, missing front tooth, red hooded raincoat, white rain boots); Danbi Day-1 (hair dry again, a little frizzy); Taeo O1 (background).
- emotion: Bomi: curious wide-eyed, blurting. Danbi: D1 smile frozen in place.
- motion/direction: Bomi runs left→right into the frame; her pointing finger leads to the hidden rib.
- dialogue_ref: 보미 "언니! 언니 우산도 고장 났다!" "테이프도 감았어!"
- art_space: upper-left third of the image (left ~47 % x top ~28 %): warm late-afternoon sky over the plaza toward the arch
- fx/note: NO yellow anywhere in this frame (Bomi's red raincoat is here) — the yellow umbrella is out of frame; the far rail is hidden behind the eave post / Taeo's back.

### panel_037
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 · tension 6 · ⟨웃음⟩
- size: large (aspect 9:16)
- camera: SIDE-ALLEY, low (waist height), vertical; Danbi framed from the knees up so the cloud, the gap and her umbrella all fit.
- composition: Danbi centre-right in the open sun just outside the eave. Top-right, partly cropped by the right edge: a small light-grey cloud (L2) a clear metre above her, thin straight rain column. She has hurriedly opened the pink umbrella but the canopy SAGS at the taped third rib (facing the camera) and rain leaks off the sag onto her shoulder. Left side: warm sunlit plaza and sky; dry pavement with long shadows; puddle only at her boots. The eave edge in the upper-left background.
- subject: Danbi Day-1, one shoulder soaked by the leak; cloud L2. (Bomi just out of frame left.)
- emotion: Danbi: D2 rambling excuse, her smile trembling at the mouth corners.
- motion/direction: eye from the cloud down the column to the sag and the leak, then down-left to the bubbles.
- dialogue_ref: 단비 "이건… 일부러 감은 거야!" "요즘 이게 유행이거든…"
- art_space: lower-left third of the image (x ~0-45 %, y ~65-90 %): dry sunlit pavement and long shadows beside Danbi, outside the rain column - never in the upper-right with the cloud
- fx/note: Rain only in the column; dry everywhere else. No yellow in frame.

### panel_038
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 · tension 7 · ⟨설렘⟩⟨복선⟩⟨들킬뻔⟩ F7 (공식 '들킬 뻔')
- size: large (aspect 9:16)
- camera: low angle at Bomi's eye height (about 1 m), FRONT orientation (arch side = screen-left), medium-wide, vertical; from behind-right of Bomi.
- composition: Lower-RIGHT foreground: Bomi in three-quarter back view, red hood, chin JUST starting to tilt up — her eyes rising toward the cloud. Mid-ground right: Danbi under the sagging pink umbrella, which only half covers the cloud: the cloud (L3, slate blue-grey, heavy column, splash crowns on the canopy, water streaming off its edge) peeks out past the sag at the top-right. LEFT edge, mid-height: Taeo standing at the arch-side edge of the frame (cropped at the shoulder), head bowed, eyes on Bomi's inside-out clear umbrella held low in her LEFT hand (screen-left side), lips just parted as he calls her. Lower-left: dry sunlit pavement with long shadows.
- subject: Bomi; Danbi Day-1 (hair and shoulders wet); Taeo O1; cloud L3.
- emotion: Bomi: curious, about to look up. Danbi: panicky frozen smile. Taeo: T3 deadpan, eyes DOWN on the child's umbrella — on first read, a rival poaching a customer.
- motion/direction: Bomi's gaze rises up-right toward the cloud; Taeo's call pulls it back down-left — the panel's tension is that diagonal.
- dialogue_ref: 태오 "보미. 우산."
- art_space: lower-left third of the image (x ~0-40 %, y ~64-80 %): dry sunlit pavement beside Taeo's legs, far from the cloud at the top-right
- gap_after: M
- fx/note: NO yellow in frame (Bomi's red is here; the yellow umbrella stays off-frame). Taeo never looks up. Cloud never reads as a thought bubble.

### panel_039
- scene_id: S5 / location: LOC_EAVES_STALL
- beat: B6 · tension 7 · ⟨설렘⟩⟨복선⟩ 시선 컷 (정보 격차 시작)
- size: medium close (aspect 3:4)
- camera: close-up over-the-shoulder from behind Danbi's right shoulder at Taeo (echo of panels 007 / 012), at the eave edge.
- composition: Right foreground: Danbi's wet shoulder and the back of her head; the sagging pink canopy edge with its taped rib dipping into the lower-right foreground. Centre-left: Taeo's face, eyes resting only on that taped rib (down-right) — not up. Background, soft: Bomi running off toward the rail (a small red figure) — the stretch of rail she runs to carries no yellow umbrella. Cloud out of frame; only a few thinning drops at the right edge (L2 fading). Her shoulder visibly loosening.
- subject: Taeo O1; Danbi (wet, back view); Bomi (background).
- emotion: Taeo: T3. Danbi: relief in the shoulder line.
- motion/direction: his eye-line runs down-right to the rib — the reader sees exactly where he looks.
- dialogue_ref: 없음 (무대사 · 시선 컷)
- art_space: none
- gap_after: M
- fx/note: Information gap begins: the reader watches his eyes. Yellow umbrella out of frame (never near Bomi's red).

--- SCENE BREAK --- (S5 → S6: dusk, shutter DOWN, cart inside)

### panel_040
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B6 · tension 6 · ⟨정적⟩
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium (Danbi waist-up centre-right, Taeo seated in the left part of the frame).
- composition: Shutter DOWN (the cart is inside). Danbi centre-right, on tiptoe, reaching up to hang her folded pink umbrella by its white crook on the centre brass hook (about 2.2 m). Low apricot dusk light rakes in from the RIGHT (alley side), rim-lighting her from behind-right and laying long shadows to the left; the workbench bulb has just come on at the LEFT. Taeo seated at the workbench, left; their eyes meet across the axis for one beat — she looks away first, his eyes drop to the rib. Damp concrete reflecting the apricot sky; tape line on the floor.
- subject: Danbi Day-1 (hair dried, a little frizzy); Taeo O1.
- emotion: Danbi: averted eyes, lips pressed (light D5). Taeo: T3, eyes dropping to the rib.
- motion/direction: her reach goes up to the hook; the look crosses left and breaks.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: The cart is INSIDE the shutter from here on — no cart in panels 040–048. Table and stools put away. No ribbon on her umbrella.

### panel_041
- scene_id: S6 / location: LOC_EAVES_STALL
- beat: B6 · tension 6 · ⟨웃음⟩⟨복선⟩ 구도 A ① 부러진 상태
- size: large (aspect 9:16)
- camera: COMP_A — FRONT, chest height, dead centre on the vertical axis, normal lens; the frame starts a little higher than the shutter box (a calm band of eave edge and plain shutter-box housing across the top ~14 %) and runs down to the floor at the eave edge. **IDENTICAL frame in panel_041 and panel_048** (same size, same camera, same crop, same composition text).
- composition: COMP_A frame (identical in panel_041 and panel_048): the top ~14 % is a calm, plain band — the dark-green eave edge and the plain shutter-box housing, nothing on it; the old brass S-hook hangs at the top centre just below that band, under the shutter box. Below, the shutter is DOWN, its blank faded-mint face filling the frame; Danbi's pink umbrella hangs from the hook by its white crook handle, tip down, the problem rib facing the camera at mid-height; NO ribbon. The upper-left quarter on the arch side, just under the band (x ~6–32 %, y ~15–26 %), is plain blank shutter face. Single keyhole at the shutter's bottom centre directly below the umbrella; the white tape line runs from it toward the camera to the bottom edge. LEFT edge: the corner of the dark wooden workbench, the bulb above it at the very left edge (partly cropped). RIGHT edge: the tin downpipe. NO cart. Damp concrete floor. The umbrella's state and the light are given under subject.
- subject: the umbrella only; no people (both speak from off-screen). Umbrella state: folded loosely, the taped bent rib bulging toward the camera at mid-height, canopy sagging at that rib (PROP_DANBI_UMBRELLA_BROKEN). Light: dusk — soft apricot light from the right, the workbench bulb just switched on at the left edge, damp concrete reflecting the apricot sky.
- emotion: lonely and funny (her denial drifting in from off-screen).
- motion/direction: eye from the hook down the umbrella to the keyhole and along the tape line.
- dialogue_ref: 단비(화면 밖) "말리려고 걸어 두는 거예요! 맡기는 거 아니에요!" / 태오(화면 밖) "네."
- art_space: two empty areas: a calm band across the top ~14 % of the image, centre-right (x ~36-80 %), on the plain shutter-box housing and eave edge above the hook; and the upper-left quarter on the arch side just below it (x ~6-32 %, y ~15-26 %) on the blank shutter face - the hook, the crook handle, the hanging umbrella and the bent rib stay clear
- gap_after: M
- fx/note: COMP_A is the episode's signature frame; panel_048 must match it exactly — same camera, composition and art_space text; only the umbrella state and the light (under subject) change. The frame starts a little higher than the shutter box so Danbi's two-line bubble can cross the centre in the top band, above the hook. Right edge = tin downpipe, NOT the cart (cart inside). No keys on the hook.

--- SCENE BREAK --- (S6 → S7: night, after an off-screen evening shower)

### panel_042
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 조용한 수선 · tension 6 · ⟨설렘⟩ (무대사 7컷, 손만)
- size: wide strip (aspect 16:9)
- camera: FRONT, eye level, wide; the whole stall front at night.
- composition: Deep navy-blue darkness. LEFT third: the workbench under one bare bulb making a single warm amber circle. Centre: the hook with the pink umbrella on the edge of that circle, half lit and half in shadow. One hand — rolled denim cuff catching the light, brass watch on the LEFT wrist — rises out of the dark on the left into the light toward the umbrella's white crook handle; his body is lost in darkness. RIGHT: the dark alley-side half, tin downpipe, the hydrangea alley mouth in night blue. Floor: wet concrete after a passing evening shower (no rain falling), reflecting the bulb; the tape line glints.
- subject: Taeo's hand only; the broken umbrella on the hook.
- emotion: hush; private care.
- motion/direction: the hand rises left→right into the light.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: Shutter down, NO cart. The rail is lost in darkness — no yellow visible yet. No rain falling.

### panel_043
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩
- size: insert (aspect 1:1)
- camera: insert, oblique three-quarter high angle over the worktop (not straight down), close; bulb light from the upper-left.
- composition: The pink canopy bunched on the dark wooden worktop. His LEFT hand (brass watch, rolled denim cuff) holds the bent third rib steady; his RIGHT hand slowly peels the lumpy grey cloth tape off it in a loose spiral strip. The edge of the dark navy apron at the lower-left corner. Deep navy shadow at the frame edges.
- subject: Taeo's hands (hand token: long fingers, short clean nails, light calluses); the taped bent rib.
- emotion: patient, unhurried.
- motion/direction: the tape unwinds in a curl toward the bottom-right.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: Close-up 1 of 5 (take the tape off) — matches HANDS_FIX_SEQUENCE. No yellow in this panel.

### panel_044
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩⟨복선⟩ (휜 살 → EP2·7·11)
- size: insert (aspect 1:1)
- camera: insert, low side angle at drawer height.
- composition: The workbench drawer pulled open — old wood, empty except for a folded soft cloth. His right hand gently laying the bent silver rib (scraps of grey tape still on it) down inside, as if putting it to bed. Lower-left foreground: an empty dented tin trash bin, its open mouth dark — right beside, NOT used. Warm bulb light from above; the rest navy dark.
- subject: Taeo's hand; PROP_BENT_RIB; drawer; empty bin.
- emotion: a small decision — kept, not thrown away.
- motion/direction: the hand lowers the rib into the drawer (away from the bin).
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: Close-up 2 of 5 (the drawer). Both the empty bin and the drawer must read in one image. No papers in the drawer.

### panel_045
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩
- size: insert (aspect 1:1)
- camera: insert, eye-level macro, side angle along the umbrella shaft.
- composition: His fingers fitting a new, straight, shiny silver rib into the umbrella's joint (the notch where the stretcher meets the rib), the pink canopy fabric soft behind. Upper edge, soft focus: the khaki-olive tool roll with spare silver ribs and pliers (the yellow spool's pocket cropped out of frame).
- subject: Taeo's hands; new silver rib; tool roll.
- emotion: precise, quiet craft.
- motion/direction: the rib slides into the joint from the right.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: Close-up 3 of 5 (the new rib). Keep yellow OUT of this panel so the yellow lands in panel_046.

### panel_046
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩⟨복선⟩ 노란 실(서명)
- size: insert (aspect 1:1)
- camera: insert, macro close, slight high angle, shallow focus.
- composition: Centre: the new rib's joint, his fingers winding bright sunflower-yellow thread around it — 8 to 10 tight, neat, side-by-side turns forming a band about 2 cm wide; the thread runs off to a yellow spool resting on the worktop at the right edge. Pink canopy fabric and the silver rib around it; deep navy background; warm bulb light — the thread is still the purest yellow in the frame.
- subject: Taeo's fingers; PROP_YELLOW_THREAD.
- emotion: careful, almost tender, all in the hands.
- motion/direction: the winding turns read left→right across the joint.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: Close-up 4 of 5 (8–10 turns of yellow thread). No red or orange anywhere; the watch, if visible, is dull brownish brass. The band must be big and readable (it has to survive at medium size later).

### panel_047
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩ (이 비트의 유일한 '소리')
- size: small (aspect 1:1)
- camera: close-up, eye level, split focus: sharp foreground, soft background.
- composition: Upper-left foreground, sharp: the dark-green eave edge with a single clear water drop just falling off into the navy darkness outside the bulb's circle — colourless, one cool glint, NOT gold. Lower-right background, soft focus inside the warm circle: his thumb pressing a small bright-yellow cap onto the tip of the repaired rib.
- subject: eave drip; Taeo's thumb; yellow tip cap.
- emotion: stillness, a single 'tick' of sound drawn in the image.
- motion/direction: the drop falls straight down; the eye goes from the drop to the thumb.
- dialogue_ref: 없음 (무대사 · 효과음 글자 없음)
- art_space: none
- gap_after: M
- fx/note: Close-up 5 of 5 (eave drip + tip cap). The drop is water from the evening shower, not gold (gold only in panel_062). No SFX lettering.

### panel_048
- scene_id: S7 / location: LOC_EAVES_STALL
- beat: B7 · tension 6 · ⟨설렘⟩⟨복선⟩ 구도 A ② 고친 상태
- size: large (aspect 9:16)
- camera: COMP_A — FRONT, chest height, dead centre on the vertical axis, normal lens; the frame starts a little higher than the shutter box (a calm band of eave edge and plain shutter-box housing across the top ~14 %) and runs down to the floor at the eave edge. **IDENTICAL frame in panel_041 and panel_048** (same size, same camera, same crop, same composition text).
- composition: COMP_A frame (identical in panel_041 and panel_048): the top ~14 % is a calm, plain band — the dark-green eave edge and the plain shutter-box housing, nothing on it; the old brass S-hook hangs at the top centre just below that band, under the shutter box. Below, the shutter is DOWN, its blank faded-mint face filling the frame; Danbi's pink umbrella hangs from the hook by its white crook handle, tip down, the problem rib facing the camera at mid-height; NO ribbon. The upper-left quarter on the arch side, just under the band (x ~6–32 %, y ~15–26 %), is plain blank shutter face. Single keyhole at the shutter's bottom centre directly below the umbrella; the white tape line runs from it toward the camera to the bottom edge. LEFT edge: the corner of the dark wooden workbench, the bulb above it at the very left edge (partly cropped). RIGHT edge: the tin downpipe. NO cart. Damp concrete floor. The umbrella's state and the light are given under subject.
- subject: the repaired umbrella only; no people. Umbrella state: neatly furled and hanging at the same angle, the straight repaired rib with its thick yellow-thread band facing the camera at mid-height, small yellow cap at that rib tip (PROP_DANBI_UMBRELLA_FIXED). Light: night — the single bare bulb makes one warm amber circle over the workbench at the left, the hook on the edge of the light, half lit and half in shadow, everything else deep navy (the top band stays plain dark); wet concrete reflecting the bulb.
- emotion: quiet answer to panel_041.
- motion/direction: same eye path as panel_041 (hook → umbrella → keyhole → line) so the change is felt.
- dialogue_ref: 없음 (무대사)
- art_space: two empty areas: a calm band across the top ~14 % of the image, centre-right (x ~36-80 %), on the plain shutter-box housing and eave edge above the hook; and the upper-left quarter on the arch side just below it (x ~6-32 %, y ~15-26 %) on the blank shutter face - the hook, the crook handle, the hanging umbrella and the bent rib stay clear
- gap_after: L
- fx/note: Only the umbrella state and the light differ from panel_041 (same camera, composition and art_space text). No bubbles here, but the same two empty areas are kept so the frame matches panel_041. Right edge = tin downpipe, no cart. The yellow band must be readable at this size. No ribbon, no keys on the hook.

<!-- SECTION 3 DONE: P32 – P48 -->

--- SCENE BREAK --- (S7 → S8: Day 2 morning, shutter DOWN all scene)

### panel_049
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B8 발견 · tension 7 · ⟨웃음⟩
- size: medium (aspect 3:4), framed medium-wide
- camera: FRONT, eye level, medium-wide.
- composition: Pearly blue-grey morning, soft long shadows falling to the right (light from the arch side); the concrete under the eave drying in pale patches; tape line on the floor; shutter still DOWN. The axis is framed just left of centre: the hook and the repaired pink umbrella, neatly furled and narrow, hang within x ~46–51 %, as in panel_048 (yellow band and cap small but visible at mid-height). The upper third to the right of it (x ~51–86 %, top ~36 %) is plain blank shutter. Taeo already at the workbench on the LEFT, seated, working on a customer's umbrella with BLACK thread. Danbi hurrying in from the RIGHT, mid-stride, one hand raised no higher than her chin, blurting before she has caught her breath — her head and hand stay below that clear upper-right area.
- subject: Danbi **Day-2 outfit** (pink round-collar short-sleeve blouse, cream wide-leg trousers; same pale pink rain boots, top bun with mint scrunchie, red strawberry clip above LEFT ear), dry. Taeo O1 — the same denim shirt and navy apron as yesterday.
- emotion: Danbi: D2 flustered rush. Taeo: T2, eyes on his work.
- motion/direction: she enters right→left toward the hook; his stillness at the left.
- dialogue_ref: 단비 "어제 그 우산… 맡긴 거 아니에요!" "말리려고 건 거예요!"
- art_space: upper-right third of the image (x ~51-86 %, top ~36 %): the blank mint shutter face right of the hook - the hook and the hanging umbrella stay clear (keep the umbrella narrow, left of x ~51 %)
- fx/note: Outfit change = 'next day' without any text. Cart inside (shutter down all morning). She does not look closely at the umbrella yet. Black thread on the customer's umbrella (yellow thread is only hers).

### panel_050
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B8 · tension 7 · ⟨웃음⟩⟨이중의미⟩
- size: medium (aspect 3:4)
- camera: SIDE-ARCH, at the eye level of seated Taeo (lowish), medium two-shot — camera at the arch-side end looking along the shutter toward the alley; shutter receding on screen-LEFT, morning plaza on screen-RIGHT.
- composition: Foreground left-centre: Taeo at the workbench in three-quarter profile, eyes down on the black-thread repair in his hands. Mid-ground centre: Danbi at the centre hook, reaching up and lifting her pink umbrella off it by the white crook. Upper-left: the blank shutter face receding into depth. Soft morning light from behind the camera.
- subject: Taeo O1; Danbi Day-2 (dry); the repaired umbrella.
- emotion: Taeo: T2 literal, deadpan. Danbi: caught mid-reach, D4 trailing off.
- motion/direction: his two flat facts answer her without him looking up.
- dialogue_ref: 태오 "말랐습니다." "세 번째 살. 갈았습니다."
- art_space: upper-left third of the image (x ~0-42 %, top ~28 %): the receding blank shutter face above Taeo's head - the hook and Danbi's umbrella (mid-ground) stay clear
- fx/note: He never looks up from his work. No second quote-tease here.

### panel_051
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B8 · tension 7 · ⟨설렘⟩⟨복선⟩ F9 (구름보다 손이 먼저)
- size: medium close (aspect 3:4)
- camera: close-up on Danbi, eye level, shallow focus.
- composition: Danbi centre-right, chest-up, hugging the folded repaired umbrella to her chest (the yellow band hidden in her arms), cheeks and ear tips flushing pink, eyes darting. LEFT edge background, soft but readable: Taeo's right hand (rolled denim cuff) already closing around the natural-wood crook handle of the furled yellow umbrella on the rail. Headroom: her top bun stays below the top fifth, which is soft shadowed eave underside / shutter from x ~16 % to ~86 %. No cloud in frame.
- subject: Danbi Day-2 (dry); Taeo's hand; yellow umbrella handle.
- emotion: Danbi: D5 flush sliding into D3 tangled self-correction.
- motion/direction: eye from her flushed face to his hand at the left edge — the hand moves before the cloud exists.
- dialogue_ref: 단비 "가, 갈았…? 저는… 그러니까…" "아니, 그게 아니라…"
- art_space: upper fifth of the image, centre-to-right (x ~16-86 %): the soft, shadowed eave underside / shutter - clear of Taeo's hand and the yellow handle at the left edge
- gap_after: M
- fx/note: F9 — his hand goes to the yellow umbrella BEFORE any cloud appears (cloud L2 forms off-frame). Only her small strawberry clip may be near the yellow handle (allowed exception); nothing else red.

### panel_052
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B8 · tension 8 · ⟨정적⟩
- size: full-bleed (aspect 9:16)
- camera: low angle (knee height), full figure, vertical, three-quarter from the plaza side.
- composition: Danbi centre-right, having stepped back out from under the eave into the morning sun. Top-right: a light-grey cloud (L2) a clear metre above her open umbrella. She has reflexively opened the pink umbrella and the canopy is a perfect, taut dome — for the first time it blocks every drop: the rain column lands on the dome, small splashes, water dripping off the rim all round, a puddle only at her boots, the pavement dry elsewhere; the small yellow cap on one rib tip at the rim faces the camera. Background LEFT, at the eave edge: Taeo standing with the furled yellow umbrella in his right hand, lowering its tip to the ground — he doesn't need it; his eyes level on her canopy's ribs. Shutter down behind.
- subject: Danbi Day-2, completely DRY under the canopy; Taeo O1; cloud L2.
- emotion: Danbi: blank, stunned (start of D10), a tiny voice. Taeo: T3, eyes on the ribs, level — not up.
- motion/direction: eye from the cloud down onto the taut dome, to her stunned face, back to his lowering umbrella tip.
- dialogue_ref: 단비 "…어?"
- art_space: lower-left of the image (x ~10-40 %, y ~74-88 %): dry sunlit pavement in the foreground, far from the cloud at the top-right
- fx/note: Big panel. She stays dry (the repair works). No gold. The cloud is real and grey, one only, straight column.

### panel_053
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B8 · tension 8 · ⟨설렘⟩⟨복선⟩
- size: insert (aspect 1:1)
- camera: insert, from below inside the canopy looking up along the repaired rib (her view); not a top-down.
- composition: The taut pink canopy glowing with morning daylight fills the frame; the straight new rib crosses diagonally; at its joint, the thick band of bright yellow thread; at the canopy edge, the small yellow cap on the rib tip. Through the translucent pink fabric, soft round shadows of raindrops tapping (L2).
- subject: inside of PROP_DANBI_UMBRELLA_FIXED; cloud L2 (seen only as drop shadows through the fabric).
- emotion: discovery.
- motion/direction: eye follows the rib from the joint (centre) out to the cap at the edge.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: The glow is pink daylight, NOT gold. Thread and cap are the only yellow.

### panel_054
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B8 · tension 8 · ⟨정적⟩ R3 씨앗 · 회차 최대 정적
- size: large (aspect 3:4) — the biggest face of the episode
- camera: tight medium close-up, slightly low, front three-quarter.
- composition: Danbi's face large in the centre; both hands gripping the white crook handle hard in the lower third; the canopy's inner rim across the top, splash crowns along its outer edge and water pouring off the rim in a sheet at both sides (the rain one step heavier, L2→L3). Background soft: sunlit blank shutter.
- subject: Danbi Day-2 (dry under the canopy); cloud L2→L3 (above, off-frame; shown by the splash and runoff).
- emotion: delayed reaction — cheeks flushed, lips pressed together after opening and closing on a swallowed word, eyes glistening (D10 + D5); no smile.
- motion/direction: hold — nothing moves but the water.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: XL
- fx/note: R3 seed — the swallowed word makes the rain heavier. The XL gap after this panel is the longest pause in the episode.

### panel_055
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B9 묻힌 한마디 · tension 7 · ⟨웃음⟩⟨장사⟩
- size: medium (aspect 3:4)
- camera: FRONT, eye level, medium two-shot framed from the knees up with the eave line at the very top edge, both just outside the eave.
- composition: Taeo screen-LEFT in sunlight, one step outside her column, the furled yellow umbrella in his right hand with its tip down on the pavement, eyes on the third rib of her umbrella (level); his head sits below the top third. Danbi screen-RIGHT under the open pink umbrella, rain drumming hard (L3: heavy column, splash crowns, water streaming off the rim), the cloud cropped at the top-RIGHT corner, puddle at her boots; she rattles on with one free hand gesturing. Behind them: the blank lowered shutter, the eave line at the top edge. Plain areas: the shutter face above Taeo's head (x ~0–44 %, top ~34 %), and a patch at mid-height in the gap between them just left of the rain column (x ~28–58 %, y ~44–60 %) for the rain sound.
- subject: Danbi Day-2 (dry under the canopy, boots in the puddle); Taeo O1 (dry); cloud L3.
- emotion: Danbi: D2 excuse avalanche. Taeo: T1, eyes on the rib.
- motion/direction: noise and words pour from the right; he stands still on the left.
- dialogue_ref: [효과음] 후두두두둑 (그녀의 빗소리, 크게) · 단비 "이거 처마 물이에요!" "수선비는 내일 꼭 드릴게요!"
- art_space: upper-left of the image (x ~0-44 %, top ~34 %): the blank shutter face above Taeo's head and below the eave line; plus a patch at mid-height in the gap between the two figures, just left of the rain column (x ~28-58 %, y ~44-60 %) for the rain sound - never on the cloud or a face
- fx/note: Keep the cloud cropped at the corner so the bubbles sit as far from it as possible. Her promise 'tomorrow' sets up EP2. No gold.

### panel_056
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B9 · tension 8 · ⟨설렘⟩⟨복선⟩⟨이중의미⟩⟨반전⟩(묻힌 단서) F10
- size: medium close (aspect 3:4)
- camera: medium close-up on Taeo, eye level, three-quarter, from just beside her umbrella.
- composition: Taeo framed chest-up with headroom, his head a little right of centre (about x 45–75 %), his screen-left shoulder running out toward the left edge; eyes level-to-down on the yellow-thread joint of her canopy's third rib — not her face, not the sky. Above that shoulder, the upper-left area (x ~0–44 %, top fifth) is plain blank shutter face. Right foreground, soft: the edge of the pink canopy with the yellow band visible on its rib, her rain streaming off the rim in a curtain at the right edge. He stands in sunlight; behind him the blank shutter.
- subject: Taeo O1; edge of the fixed umbrella; cloud L3 (off-frame; only the runoff).
- emotion: Taeo: T7 — a soft look, eyes softened, mouth still flat (a sentence with no numbers in it).
- motion/direction: his eye-line goes right to the yellow band.
- dialogue_ref: 태오 "이제 웬만한 비엔 안 뒤집혀요."
- art_space: upper-left of the image (x ~0-44 %, top ~20 %): the blank shutter face above Taeo's shoulder - well away from the rain curtain at the right
- fx/note: The buried line: the reader reads it, she can't hear it (no SFX in this panel; keep the small bubble fully legible). Mirrors panel_007's 'wind' line.

### panel_057
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B9 · tension 8 · ⟨정적⟩
- size: medium (aspect 3:4)
- camera: eye level, medium, FRONT orientation, slightly from Taeo's side.
- composition: Danbi on the right ~60% of the frame, leaning her head out past the canopy's LEFT rim — toward him (off-frame left), not up — and instantly drenched: hair flattening, water running down her face, the canopy tilting. The cloud (L3) cropped at the top-RIGHT corner; its column covers the right ~60% only. The left ~35% is dry, sunlit blank shutter.
- subject: Danbi Day-2, drenched from this panel on (hair wet and flattened, strands on her cheeks, blouse shoulders darkened); cloud L3.
- emotion: Danbi: D6 startled, big round eyes.
- motion/direction: she leans left toward him; eye follows her lean to the small bubble.
- dialogue_ref: 단비 "…네?"
- art_space: left edge of the image at mid-to-lower height (x ~0-30 %, y ~55-70 %): dry sunlit blank shutter face below Danbi's leaning head, outside the rain column and more than a cloud-width from the cloud
- fx/note: She looks at HIM, never up. The column must not reach the left third.

### panel_058
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B9 · tension 8 · ⟨정적⟩⟨이중의미⟩
- size: medium close (aspect 3:4)
- camera: close-up on Taeo, eye level, three-quarter.
- composition: Taeo's face centre-left; his eyes already back down on the third-rib joint (out of frame, lower right); mouth just closing. A soft blur of her rain curtain at the far right edge. Blank sunlit shutter behind.
- subject: Taeo O1.
- emotion: T8 — mouth closing, eyes turned away/down; closing the topic, not denying it.
- motion/direction: eye-line down-right, ending the exchange.
- dialogue_ref: 태오 "…아뇨."
- art_space: upper-left fifth of the image (x ~0-35 %, top ~18 %): the blank shutter face - away from the rain at the right
- gap_after: M
- fx/note: No upward glance.

### panel_059
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B10 엔딩 훅 · tension 8 · ⟨정적⟩
- size: medium (aspect 3:4), framed medium-wide
- camera: FRONT, eye level (a touch low), medium-wide two-shot — NO sky in frame.
- composition: Both just outside the eave, side by side, one step apart: Taeo screen-LEFT, Danbi screen-RIGHT under the pink umbrella. The sun has just come out from behind a big white cloud BEHIND the camera (out of frame): fresh crisp white-gold light floods the shutter face and the pavement, crisp new shadows; the last of the big cloud's soft shadow is leaving the frame at the left edge. Her own small cloud above her canopy is thinning (L3→L2), cropped at the top-right. The end of the white tape line at the eave edge points into the empty step between them. Danbi looks up at the inside of her umbrella; Taeo looks DOWN at the tip of his furled yellow umbrella.
- subject: Danbi Day-2 (hair wet and flattened from panel_057); Taeo O1; cloud L3→L2.
- emotion: stillness. Danbi: soft daze (D10). Taeo: T1, eyes down.
- motion/direction: the empty step between them is the centre of the panel.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: L
- fx/note: Taeo must NOT look up or toward the sky (his first upward look is panel_061). No sky, sun or big cloud drawn in this frame, so nothing invites an upward glance. No gold.

### panel_060
- scene_id: S8 / location: LOC_EAVES_STALL
- beat: B10 · tension 8 · ⟨정적⟩ (당황 신호, 독자만 안다)
- size: insert (aspect 1:1)
- camera: insert, low angle from just below his wrist, looking up past the watch to his lowered eyes; shallow focus.
- composition: Lower two-thirds, sharp: his LEFT wrist and the round brass watch — cream dial, plain bar markers, no numbers, brown leather strap, rolled denim cuff, morning sun on the dial. Upper edge, soft: his downcast eyes and brow, looking at the watch.
- subject: Taeo's left wrist and watch (T5).
- emotion: T5 — deadpan, glancing at the watch; he does not read the time.
- motion/direction: his look goes down to the watch and stays.
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: L
- fx/note: No numbers on the dial. His fluster signal, readable only by the reader. Cloud L2 off-frame.

--- SCENE BREAK --- (S8 LOC_EAVES_STALL → S9 LOC_PLAZA, same morning, sun out)

### panel_061
- scene_id: S9 / location: LOC_PLAZA
- beat: B10 · tension 9 · ⟨설렘⟩⟨반전⟩ — **반전 착지 (P01·P05 회수)**
- size: full-bleed (aspect 9:16)
- camera: HIGH — the SAME camera position and the same 45° oblique angle as panel_001 (second-floor height across the plaza), with a longer lens / tighter crop on the right-hand part of the panel_001 frame so faces read. Oblique, NOT straight down.
- composition: Dry, sunlit pale-grey pavers fill the frame. Top-right corner: the corner of the dark-green eave and the edge of the lowered mint shutter — the stall, as at panel_001's right edge. Centre-right: Danbi under her pink umbrella, seen from above at 45° (the canopy's top, a small yellow cap visible at one rib tip on the rim), her face hidden by the canopy; she is looking up at its inside. One small pale-silver cloud (L1, faint drizzle, thin straight column) floats a clear metre above her canopy — the ONLY cloud in the frame — casting one small round soft shadow on the pavers; a small wet circle at her feet. Centre-left, one step away, in full sunlight in the open plaza: Taeo holding the furled yellow umbrella tip-down in his right hand, chin raised, face turned straight UP to that cloud. His eye-line is a clear, unobstructed diagonal from his eyes to the cloud. Morning sun from the left; crisp shadows to the right. **IN frame:** pavers, the eave corner/shutter edge (top-right), the two of them, her one cloud and its shadow. **OUT of frame:** the sky, the sun, the big white cloud of panel_059, any other cloud, birds, the arch, the awning and the plane tree; no passers-by (or only far and blurred, never looking up); no hand shading his eyes; nothing (eave, roof, sun) between his eyes and the cloud.
- subject: Taeo O1; Danbi Day-2 (hair wet, hidden under the canopy); cloud L1.
- emotion: Taeo: T9 — calm, chin raised, looking straight up at the sky above her: no surprise, quietly confirming what he already knew. Danbi: unaware — her canopy blocks her view of him.
- motion/direction: the eye goes from his upturned face straight up the diagonal to the cloud — the reverse of panel_001 (yellow dot → upward look).
- dialogue_ref: 없음 (무대사)
- art_space: none
- gap_after: M
- fx/note: THE reversal: Taeo's first and only upward look in EP1. Must not read as weather-watching. No gold here. Same camera as panel_001 so the bookend reads in pictures.

### panel_062
- scene_id: S9 / location: LOC_PLAZA
- beat: B10 · tension 9 · ⟨설렘⟩⟨복선⟩ R2 씨앗 (EP1 유일한 금빛)
- size: insert (aspect 1:1)
- camera: insert, from below inside the canopy, close.
- composition: Inside the pink canopy, daylight glowing through the fabric; the repaired rib with its thick yellow-thread band crosses the frame; Danbi's RIGHT thumb rests on the yellow band (short unpainted nail, thin mint hair tie on her right wrist at the edge). Upper-right, on the pink canopy's hem and well away from the yellow band and the yellow cap: ONE single raindrop hangs and catches the sunlight — a warm white-gold highlight with no glow, no halo, no sparkle effect, reading at first glance as a sun glint. Bottom sixth: plain soft-focus pink canopy fabric, nothing in it.
- subject: Danbi's right thumb (hand token); the fixed umbrella's inside; the drop. Cloud L1 outside (faint drizzle shadows at most).
- emotion: quiet, private; she looks at the thread (her eyes out of frame), not at the drop.
- motion/direction: eye from the thumb on the yellow band up-right to the single drop, then down to the caption.
- dialogue_ref: 없음 (무대사) · 끝 캡션 「— 2화에 계속 —」(KM 캡션, 뷰어가 씀)
- art_space: bottom sixth of the image, full width: plain soft-focus pink canopy fabric (caption strip) - nothing important there
- fx/note: The ONLY gold in EP1 (R2 seed): one drop, NOT on the yellow thread, not magical. Last panel of the episode.

<!-- SECTION 4 DONE: P49 – P62 -->

---

## 5. 연속성 체크리스트 (continuity checklist)

**의상**
| who | panels | outfit |
|---|---|---|
| Danbi | P01–P41 (when in frame; P05 head only, P11·P22 hand only, P17 voice only, P41 voice only) | **Day-1:** mint denim pinafore dress, cream T-shirt, pale pink rain boots, top bun + mint scrunchie, red strawberry clip above LEFT ear; thin mint hair tie on RIGHT wrist in hand shots |
| Danbi | P49–P62 (P53 inside canopy only, P60 absent, P62 thumb only) | **Day-2:** pink round-collar short-sleeve blouse, cream wide-leg trousers; same boots, hair, clip, scrunchie, hair tie |
| Taeo | every panel he appears in, both days | O1: rolled-sleeve faded denim shirt, dark navy work apron, charcoal trousers, black rain boots, brass watch LEFT wrist, wooden pencil behind RIGHT ear |
| Okja | P24–P27 | brick-red quilted vest, cream blouse, grey trousers, key ring RIGHT hip; glasses on her head (on her nose ONLY in P25) |
| Mansik | P33 | grey T-shirt, olive rubber apron, white towel, skewer RIGHT hand; eyes on his pot |
| Bomi | P36, P38, P39 (bg); P37 just off-frame | red hooded raincoat, white boots, clear umbrella LEFT hand |

**젖음**
| who | panels | state |
|---|---|---|
| Danbi | P01–P03 | dry under her umbrella (rain starts hitting her in P03) |
| Danbi | P04–P14 | wet L3: hair darkened and flattened, fringe stuck, bun drooping, shoulders dark (stays after the cloud goes) |
| Danbi | P15–P31 | damp, drying: fringe damp, hair and shoulders damp |
| Danbi | P32–P35 | wet again under the eave cloud (hair dripping in P33) |
| Danbi | P36 | dry again (late afternoon, a little frizzy) |
| Danbi | P37–P39 | P37 one shoulder soaked by the sag leak; P38–P39 hair and shoulders wet |
| Danbi | P40 | dried, a little frizzy |
| Danbi | P49–P56 | dry — from P52 the fixed canopy blocks every drop; only her boots stand in the puddle |
| Danbi | P57–P62 | drenched in P57 (head out of the canopy); hair wet and flattened through P62 |
| Taeo | P06–P14 | outer (right, screen-left) shoulder darkened by runoff; dry from P16 on |
| floor | S1 · S3 · S9 | dry pavers/concrete; wet circle + puddle only under Danbi when her cloud is up |
| floor | S4–S5 | dry; her puddle only under her (P32–P35, P37–P38) |
| floor | S6 · S7 | S6 damp (dusk); S7 wet after the off-screen evening shower, reflecting the bulb |
| floor | S8 | P49–P51 drying in pale patches under the eave; P52–P60 dry outside the eave except her puddle |

**셔터 · 테이프 선 · 카트 · 고리**
| item | panels |
|---|---|
| shutter | DOWN P16–P28 · UP P29–P39 · DOWN P40–P62 (S1 wides P01·P03·P14 also show it DOWN) |
| tape line | NONE P16–P28 (P28 = tape roll only) · present from **P29** whenever the stall floor is in frame (P29–P35, P40–P42, P48–P50, P59) |
| cart | P15 in the alley · alley-side half P16–P39 · INSIDE the shutter P40–P62 (never in frame; COMP_A right edge = tin downpipe) |
| table + 2 stools | outside the eave P16–P39 (P36 in use) · put away from P40 |
| centre hook | empty P16–P39 · broken pink umbrella P40–P42 · fixed umbrella P48–P50 (lifted off in P50) · never any keys on it |
| hook position in frame | FRONT stall frames: small at the very top edge (top ~6 %) or just out of frame — P16, P19, P20, P21, P24, P29, P31; P27 small at the very top centre (top ~60 % clear below it); P28 just out of frame above (top ~57 % clear) · COMP_A P41 = P48: just below a calm top band (~14 %) · P49: hook and furled umbrella within x ~46–51 % · P18: just out of frame right |
| frayed canvas flap | never in EP1 |

**열쇠 · 실 · 노랑**
| item | panels |
|---|---|
| keys | P21 taken out · P22 at the keyhole · P23 held up · P25 on two palms · then pocketed; identical shape, rings differ only |
| yellow spool | P17 pushed into the tool-roll pocket · P46 on the worktop (thread being wound) |
| yellow thread band + cap | P46 band wound · P47 cap pressed on · P48 hung (band + cap) · P49 hung (small) · P51 hidden in her arms · P52 cap at the rim · P53 band + cap inside · P56 band at the canopy edge · P61 cap seen from above · P62 band under her thumb |
| yellow umbrella | open P01–P13 (dot P01–P02, edge P03, over her P05–P13) · furled + shaken P14 · hangs on the rail from P16 (visible only at the far left in P16, P18, P19, P29; cropped elsewhere) · must be OUT of frame P21–P27 and P32–P39 (red in frame) · lost in darkness P42 · handle in his right hand P51 · furled in his right hand, tip down P52, P55, P59, P61 |
| no red/orange next to yellow | checked panels: P16, P17, P21–P27, P32–P33, P36–P39, P46, P51 (strawberry clip only) |
| gold | ONLY P62 (one drop) — explicitly none in P05, P06, P10, P13, P47, P52–P61 |
| Taeo looks up | ONLY P61 |

**구름 단계 (panel → level)**

| P01 L2 | P02 L2 | P03 L3 | P04 L3 | P05 L2 (on the yellow) | P06 L2 | P07 L2 off-frame | P08 L2 off-frame |
|---|---|---|---|---|---|---|---|
| **P09 L3** off-frame | **P10 L3** | **P11 L3** off-frame | **P12 L3→L2** off-frame | **P13 L1** fading | **P14 none** | **P15–P31 none** | **P32 none→L2** (eave) |
| **P33 L2** (eave) | **P34 L1** (eave) | **P35 L1** fading | **P36 none** | **P37 L2** | **P38 L3** | **P39 L2** fading, off-frame | **P40–P50 none** |
| **P51 L2** forming off-frame | **P52 L2** | **P53 L2** (through fabric) | **P54 L2→L3** | **P55 L3** | **P56 L3** runoff only | **P57 L3** | **P58 L3** off-frame |
| **P59 L3→L2** | **P60 L2** off-frame | **P61 L1** | **P62 L1** outside | | | | |

## 6. 패널 크기 → 화면비 집계

| aspect | size label | count | panels |
|---|---|---|---|
| 9:16 | full-bleed | 3 | P06, P52, P61 |
| 9:16 | large | 6 | P02, P05, P37, P38, P41, P48 |
| 3:4 | large | 1 | P54 |
| 3:4 | medium / medium close | 29 | P07–P10, P12–P14, P18, P20, P21, P23, P25, P26, P30–P32, P34–P36, P39, P40, P49–P51, P55–P59 |
| 4:3 | medium-wide | 7 | P16, P19, P24, P27, P28, P29, P33 |
| 16:9 | wide strip | 4 | P01, P03, P15, P42 |
| 1:1 | small | 2 | P04, P47 |
| 1:1 | insert | 10 | P11, P17, P22, P43, P44, P45, P46, P53, P60, P62 |
| | **total** | **62** | 9:16 = 9 · 3:4 = 30 · 4:3 = 7 · 16:9 = 4 · 1:1 = 12 |

- gap_after: M = 25 panels · L = P06, P35, P48, P59, P60 · XL = P54 · S (omitted) = the rest · P62 = end.
- SCENE BREAK 8 · scenes S1–S9 · silent panels 22 (art_space: none, except P03 SFX patch, P48 = the same two empty areas as P41, and P62 caption strip) · dialogue panels 40.
- art_space: every panel's line equals the `art_space` line in `ep01_lettering.md` (synced after the letterer's §2 requests: P15, P16, P19, P24, P27, P28, P29, P41, P48, P49, P56).
