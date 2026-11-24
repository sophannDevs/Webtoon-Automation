# EP01 「폐하」 샷리스트 (64 panels)

- 작성: panel-director · 2026-11-24 · Phase 4 (Flow-by-hand mode, Khmer edition)
- 입력: `03_episode/ep01_script_final.md`(gate OK: Khmer review READY round 1, sha256 9a29a92e6547…; 읽기만), `04_visual/style-bible.md`, `04_visual/character-sheets.md`, `02_story/twist-plan.md` §2-2~§2-6, `02_story/tension-curve.md` §1-3·§2, `00_input/brief.md` LOCKED 1–11 · rulings A–W
- 쓰는 사람: letterer(bubble area → `art_space`, `gap_after`), prompt-smith(Flow 프롬프트), panel-validator, quality-reviewer
- **panel_NNN = 대본 PNN** (panel_001 = P01 … panel_064 = P64). 번호·순서·무대사 위치는 대본 그대로.
- 합계: **64 panels** · XL 6 (P1, P4, P38, P46, P61, P64) · L 11 · M 41 · ST 6 · 대사 패널 36 · 말풍선 50 · 효과음 패널 6 · 끝 캡션 1

## 0. prompt-smith에게 먼저 (고정 규칙)

1. **인물 이름은 Flow 프롬프트에 절대 쓰지 않는다** (ruling M). 이 샷리스트도 화면 묘사는 역할 이름으로만 쓴다: **QUEEN** · **HOSTAGE** · **CHANCELLOR** · **ENVOY** · **CAPTAIN**. 이름 없는 역할은 character-sheets §7 토큰(LORD_HORN, PHYSICIAN, ASSASSIN_1, ASSASSIN_2, GUARDS/ARCHERS, SERVANTS, COURTIERS, DRAGON_DELEGATION, BELL_KEEPER, CROWD). `dialogue_ref`의 화자 표시도 역할 이름이다(대사 문구는 letterer용 참고이며 **프롬프트에 넣지 않는다**).
2. **이미지에 글자 0.** 말풍선·효과음·끝 캡션은 뷰어가 크메르어로 그린다. 프롬프트에 대사·말풍선 문장을 넣지 않는다. 대사 패널은 `bubble area`를 `Keep <…> as calm, empty background with no important details (a speech bubble will be added there later).` 문장으로 옮긴다(style-bible §6-9). 모든 프롬프트의 마지막 문장은 `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
3. **글자를 실을 수 있는 물건은 모두 blank:** 깃발(흰 해 원반뿐), 관문 부조(해와 날개뿐), 브로치·문장(도형), 반지 돌(작은 민 원 하나), 덧창(민 나무), 리넨·천(무늬 없음), 돌의 금(P31, 글자처럼 보이면 재생성). 문서·두루마리·좌석 카드는 존재하지 않는다.
4. **HOSTAGE 금지 낱말:** chain, shackle, cuff, collar, bound, captive, prisoner, slave, leash. HOSTAGE가 나오는 패널은 character-sheets §2-9 장면 부정어(갈고리 컷 판, P46·P61 판 구분).
5. **가드레일 [잠금]:** 두 주인공은 **한 번도 닿지 않는다**(P22 열쇠 · P45 한 뼘 · P56 천 · P61 한 걸음 · P64 숨 하나). 사슬·족쇄·우리·목줄 0. 상처는 **HOSTAGE의 LEFT forearm에만**(바깥쪽 가운데, 금빛 피 몇 방울, 빛나지 않음). 침대·키스·노출 0. HOSTAGE는 주먹을 쥐지 않는다(주먹은 ENVOY 전용).
6. **좌우 표지:** QUEEN 반지 = RIGHT index · HOSTAGE 흉터 = RIGHT hand back · 상처 = LEFT forearm · CHANCELLOR 브로치 = RIGHT shoulder · ENVOY 흉터 = LEFT temple→cheek · CAPTAIN 흰 머리 줄·팔찌·칼 = LEFT.
7. **그림자 규칙:** QUEEN은 그림자 둘(작은 사람 그림자 + 그것을 감싼 날개 그림자). **HOSTAGE는 그림자를 만들지 않는다**: 발을 프레임 밖으로, 그늘 속에, 또는 "밝은 빈 돌/빛의 띠"를 긍정문으로(부정어 `no shadow under him` 금지, style-bible §9). 증거 컷 = P2, P13, P46(이 샷리스트에서 P46은 HOSTAGE를 프레임 밖으로 뺐다), P61(벽). ENVOY·다른 사람은 보통 그림자. 날개 그림자의 **관뿔은 P46에서 처음** 보인다. P46 전 패널에는 `WINGED_SHADOW_crown`을 첨부하지 않는다.
8. **첨부는 패널당 3장 이하.** 매치 컷은 앞 컷 이미지를 첫 첨부로(style-bible §5-4). 만드는 순서: P1 → … 단, P3은 P49보다, P4는 P46보다, P28은 P58보다, P38은 P51보다 먼저.
9. 장면 앵커 패널: panel_001(관문 정오) · panel_013(회랑) · panel_021(두 방 해 질 녘) · panel_029(연회장) · panel_037(테라스 별빛) · panel_045(테라스 횃불) · panel_058(두 방 한밤). 권장 장소 카드 `LOC_TERRACE` · `LOC_ROOMS`를 사용자가 만들었다면 앵커 대신 붙여도 된다(3장 한도 안에서).

## 1. 화면비 · 대체 규칙

| size | aspect | Flow에 없을 때 |
|---|---|---|
| XL | 9:16 | (항상 있음) |
| L | 3:4 | **1:1**. 예외: panel_020, panel_041만 9:16 허용. **panel_003 ↔ panel_049는 반드시 같은 비율**(둘 다 3:4, 없으면 둘 다 1:1) |
| M | 1:1 | — |
| ST | 16:9 | — |

## 2. 레퍼런스 카드 이름 (attach 줄에 쓰는 이름)

`04_visual/refs/ref_prompts.md`(character-sheets §6-0)의 카드 파일 이름 그대로 쓴다. **파일 이름은 문서용이다. 프롬프트 본문에는 이름을 쓰지 않는다**(프롬프트 속 인물은 역할 이름).

| attach 이름 (= `refs/<이름>.png`) | 프롬프트 속 역할 | 쓰임 |
|---|---|---|
| LINE_turnaround | QUEEN | 전신·상반신 |
| LINE_expressions | QUEEN | 얼굴이 큰 컷 |
| LINE_hands | QUEEN | 반지 손 컷 |
| HERON_turnaround | HOSTAGE | 전신·상반신 |
| HERON_expressions | HOSTAGE | 얼굴이 큰 컷 |
| HERON_hands | HOSTAGE | 흉터 손, 왼팔 W1/W3 |
| BASIL_ref | CHANCELLOR | 전신·얼굴 |
| UR_ref | ENVOY | 전신·얼굴, P47 무릎·주먹 자세 |
| THORA_ref | CAPTAIN | 전신·얼굴, 편 손바닥 자세 |
| WINGED_SHADOW_top / WINGED_SHADOW_side / WINGED_SHADOW_crown | — | 날개 그림자 (crown은 P46 이후만) |

## 3. 장소 목록 (scene_id ↔ location ↔ 배경 한 줄)

| scene_id | location | panels | light | 배경 한 줄 |
|---|---|---|---|---|
| S1 | `LOC_GATE` | 001–012 | LIGHT_NOON | 협곡을 막은 흰 석회암 「정오의 문」, 해 원반+막 날개 부조, 캄캄한 아치, 달궈진 광장, 북쪽으로 오르는 흰 계단과 해 원반이 박힌 흰 단상, 진홍 깃발(흰 해 원반) |
| S2 | `LOC_CORRIDOR` | 013–020 | LIGHT_AFTERNOON | 서향 열주 회랑: 서쪽 굵은 기둥 사이로 금빛 띠, 동쪽 회칠 안쪽 벽에 긴 청보라 그림자, 건너편 붉은 띠 협곡 |
| S3 | `LOC_ROOMS` | 021–028 | LIGHT_DUSK | 반원 아치 참나무 연결문으로 이어진 두 바위 방(자물쇠·열쇠는 그의 쪽, 그녀 쪽은 떼어 낸 자국), 창 너머 안뜰 수반·올리브·닫힌 덧창 |
| S4 | `LOC_HALL` | 029–036 | LIGHT_HALL | 바위를 판 원통 궁륭 연회장, 높은 탁자 뒤 쇠 화로, 비어 있는 높은 악사석, 흰 상복 손님들 |
| S5 | `LOC_TERRACE` | 037–048, 050–057 | 037–040·042 LIGHT_STARS / 041·043–048·050–057 LIGHT_TORCH | 협곡 위 반원 테라스, 허리 높이 민 난간, 낭떠러지와 은빛 물줄기, 뒤쪽 2층 아케이드(아래 벽감·위 회랑), 그믐 별하늘(달 없음) |
| S1R | `LOC_GATE` (회상) | 049 | LIGHT_REPLAY | S1과 같은 정오, 아치 속에서 북쪽으로. **의도된 유일한 장소 예외**(밤 테라스 사이의 정오 리플레이) |
| S6 | `LOC_ROOMS` | 058–064 | LIGHT_LAMP | S3과 같은 두 방, 한밤, 그녀 쪽 벽감의 기름 등잔 한 점, 그의 방 흰 벽 |

- 같은 scene_id 안에서 장소·시간대·실내외를 바꾸지 않는다. S5 안에서 빛이 별빛 → 횃불로 바뀌는 것은 대본의 사건(첫 횃불 P41)이고 장소·시간대(그믐밤)는 같다.
- 기본 무대 축: 두 주인공이 마주 서면 **QUEEN 화면 왼쪽, HOSTAGE 화면 오른쪽**. CHANCELLOR와 마주 서면 QUEEN 왼쪽, CHANCELLOR 오른쪽(S1·S5 같음). 예외는 패널에 적었다(P45, P46, P47, P61).
- 키: QUEEN 눈높이 = HOSTAGE 턱. 투샷마다.

## 4. 이 샷리스트가 지키는 반전 연출 조건 (twist-plan §2-6 대조)

| # | 조건 | 패널 |
|---|---|---|
| 1 | 관뿔은 P46에서 처음. P46 전 날개 그림자의 머리는 프레임 밖·기둥 그림자 띠·부감의 점 | 004, 006–011, 013–014, 029–030 / 046 |
| 2 | P46: 서쪽 난간 곁 낮은 횃불 → 동쪽 절벽면 전체, 남쪽을 향한 옆모습, 왕관 모양 뿔 고리, 아케이드보다 큰 그림자, 두 왕관 | 046 |
| 3 | P3 ↔ P49: 같은 비율, 같은 축(아치 ↔ 흰 계단 ↔ 단상 ↔ 왕성)의 반대편, 같은 순간(그림자가 계단 중간), 같은 정오 빛, 사절단 4–6 무릎 높이 | 003, 049 |
| 4 | 사절 몸짓 P15 → P25 → P47 (오른 주먹, 왼쪽 가슴 위, 손등이 앞) | 015, 025, 047 |
| 5 | 사람의 손(CAPTAIN 편 손바닥, P37·P54) vs 용족의 손(ENVOY 주먹, P47). HOSTAGE 주먹 없음 | 037, 054, 047, 031, 045 |
| 6 | P47: ENVOY가 QUEEN을 지나쳐 HOSTAGE 앞에 한쪽 무릎, 등은 QUEEN 쪽, QUEEN은 전경, 피 흘리는 왼팔 보임, 꼬리는 ENVOY | 047 (P47a 대안은 쓰지 않음, 64컷 유지) |
| 7 | P48–P50 무대사 | 048–050 |
| 8 | B6 덫 가독(악사석 두건, 반지 두 번, 벽감 쪽으로 나가는 CAPTAIN, 와이드에 벽감·위 회랑, 갈고리, 석궁 반짝임, 위→아래 P41) | 035–042 |
| 9 | 같은 구리빛 갈고리 P38 · P43 · P51 | 038, 043, 051 |
| 10 | 두 번째 암살자의 눈 금지 | 043, 045 |
| 11 | 이야기를 '그림자 없음' 한 장에 기대지 않음, P46은 HOSTAGE를 프레임 밖 | 002, 013, 046 |
| 12 | P52 ENVOY는 이미 서 있다 | 051, 052 |
| 13 | 이름 금지, crown 낱말은 P46 그림자에만(QUEEN의 관은 circlet) | 전체 |
| 14 | letterer: P47 꼬리 ENVOY, 말풍선은 ENVOY 머리 위 어두운 아케이드 / 큰 멈춤 P46 320 < P47 400 < P50 440 | 047, 046–050 |
| 15 | 날개 그림자 카드 세 판 | attach 줄 |

---

## B1 · 정오의 의식 (P01–P05)

--- SCENE BREAK --- S1 · LOC_GATE · noon · exterior

### panel_001 (P01)
- scene_id: S1 / location: LOC_GATE (FULL) / light: LIGHT_NOON
- size: **XL** full-bleed / aspect: 9:16 · 썸네일 컷
- shot / camera: extreme long shot, eye level from the far plaza edge, vertical tilt composition top → bottom
- in frame (top → bottom): plain hard-blue noon sky → colossal pale limestone gate wall with the sun-disc-and-two-membranous-wings relief → huge round arch, tunnel pitch dark → sunbaked plaza with ONE small charcoal figure walking alone toward the stairs (HOSTAGE, tiny, back three-quarter, seen from behind, walking north) → first step of the broad white stairs at the bottom edge. Crowds as tiny silhouettes on canyon-wall terraces; long crimson banners with plain white sun discs on the rust-and-cream walls
- emotion: awe, stillness before a rite
- key action: the lone figure walks of his own accord, no escort, nothing on his hands
- light & shadows: harsh overhead sun; short blue-black shadows pooled under crowd silhouettes and banners. The walking figure is too small to judge; keep his feet tiny and the stone around him evenly bright (do not mention his shadow in the prompt)
- bubble area: none (silent)
- text-free: relief = sun disc + wings only; banners = plain white sun disc; no letters anywhere
- gap_after: 0
- attach: (none; this is the LOC_GATE anchor) — optional `LOC_GATE` card if made
- note: make 4 variants. This becomes the scene anchor attached to wide S1 panels

### panel_002 (P02)
- scene_id: S1 / location: LOC_GATE (SHORT, foot of stairs) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: diagonal high angle (about 45° down), medium-long
- in frame: HOSTAGE center, kneeling on both knees on the white plaza stone at the foot of the stairs, both palms flat on the hot stone, head bowed, charcoal coat, unbraided black hair; RIGHT hand nearest camera so the pale scar on its back reads. GUARDS at the left and right frame edges (only legs and lower bodies, bronze, crimson cloaks). BELL_KEEPER tiny at the upper edge beside the bronze bell frame on the dais edge (optional, may be cut)
- emotion: composed submission (a rite posture, not worship)
- key action: he kneels of his own accord; no escort holding him
- light & shadows: **proof shot (style-bible §9 #1):** every guard at the frame edge stands on a short pool of black shadow, while the white stone around the kneeling man's knees and hands is evenly bright and bare, as if no one were there
- bubble area: SFX only (bell "dong"): small calm area **upper right corner**, plain sunlit stair stone near the bell side; keep the bell frame edge there if visible
- dialogue_ref: — (SFX P02 bell, viewer draws)
- text-free: yes; no marks on the stone
- gap_after: 0
- attach: HERON_hands, HERON_turnaround, panel_001
- note: no chains, no ropes, no guard touching him. Avoid line = character-sheets §2-9 standard

### panel_003 (P03) ★ pair of panel_049
- scene_id: S1 / location: LOC_GATE / light: LIGHT_NOON
- size: L / aspect: **3:4** (fallback 1:1 → then panel_049 also 1:1)
- shot / camera: **from the dais side (what she sees), looking SOUTH down the axis, slightly high (standing eye height at the dais edge)**. Axis runs straight up the frame center: bottom = top step of the stairs at the dais edge → middle = the white stairs → upper-middle = the plaza and the kneeling man → top = the huge dark arch in the gate wall
- in frame: HOSTAGE kneeling at the foot of the stairs, upper-middle, facing the camera (face backlit, unreadable at this size). Behind him, deep inside the pitch-dark arch tunnel: `four to six low dark shapes at knee height deep inside the pitch-dark arch tunnel, barely distinguishable` (DRAGON_DELEGATION, must stay unreadable). No people on the stairs
- emotion: uncanny motion
- key action: **the one moving shadow:** `an ink-black ribbon of shadow lifting off the white stone at the kneeling man's feet and sliding up the middle of the white stairs like spilled ink, still shapeless, no wings yet` — the ribbon's front edge sits exactly at the **middle** of the stairs
- light & shadows: noon from the south/high; the ribbon is the only dark thing on the stairs; no shadow of his own besides the ribbon leaving
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: panel_001, HERON_turnaround
- note: scene negative `No dragon body, no smoke, no glow, no wings yet.` Make it **before** panel_049. Keep the axis centered so panel_049 can mirror it from the other end. 4 variants

### panel_004 (P04)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: **vertical top-down** (bird's-eye straight down over the dais). Orientation: frame top = north (rear edge of the dais), frame bottom = south (the stairs)
- in frame: QUEEN tiny at the center on the inlaid bronze-gold sun disc, white mourning gown and short train spread on the floor, gold circlet a small glint; COURTIERS (white mourning clothes, tiny) stepping back at the shadow's edges, upper and side margins
- emotion: awe; the rule laid down in one picture
- key action: `SHADOW_CORE` + `SHADOW_TOP`: the winged shadow seeps out from under her spread hem, two membranous wings (4 finger bones each) cover the whole square dais and spill over the top stairs at the bottom of the frame; the neck runs toward the stairs (down-frame) and the head is only a small blunt point. Her own small human shadow lies at the dragon's chest
- light & shadows: straight overhead sun; courtiers have tiny pooled shadows; winged shadow is the darkest value, flat, razor-edged, no outline
- bubble area: off-screen crowd line (1 bubble): **upper-left corner, about 1/4 of the frame**, the plain pale stone of the dais rear edge beyond the wing tip; tail toward the top-left frame edge (crowd on the canyon terraces). Must not touch any wing or the head point
- dialogue_ref: CROWD (off-screen): "…날개다. 저렇게 커."
- text-free: yes; sun disc inlay plain
- gap_after: 60
- attach: WINGED_SHADOW_top, LINE_turnaround, panel_001
- note: scene negative `No dragon body, no horns visible, no smoke, no glow.` Head must read as a dot, no horns. **Fallback (style-bible §8-6, only after 3 failed tries):** remove the courtiers, dais and QUEEN only from above. Make before panel_046. 4 variants

### panel_005 (P05)
- scene_id: S1 / location: LOC_GATE (SHORT, foot of stairs) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: close-up, low angle (camera below his face looking up)
- in frame: HOSTAGE face and shoulders, lifting his face toward the dais (up-frame, slightly screen left); behind him the bright noon sky and the top of the white gate wall softly out of focus (backlight)
- emotion: HO_STILL — expressionless, measuring her; gaze ① from below
- key action: he raises his head; matte metallic-gold irises, thin vertical slit pupils in bright sun; loose collar-length black hair, no hair rings
- light & shadows: backlit rim light; light bounced up from the white stone onto his face; feet out of frame
- bubble area: none (silent)
- text-free: yes
- gap_after: 160
- attach: HERON_expressions, HERON_turnaround
- note: eyes must not glow. Pupil shape = reference for panel_064 (match)

## B2 · 굴욕과 역공 (P06–P12)

(S1 계속. 단상 위 패널 006–011: QUEEN 발밑의 날개 그림자는 `WINGED_SHADOW_top`의 일부로 단상 바닥에 날개 끝·막만 보이고, **머리 쪽(계단 방향)은 늘 프레임 밖**. 무대 축 QUEEN 화면 왼쪽 · CHANCELLOR 화면 오른쪽. CHANCELLOR는 이 비트에서만 섭정의 지팡이를 든다.)

### panel_006 (P06)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: medium shot, waist-height camera
- in frame: CHANCELLOR mid-right, stepping one pace toward the dais center, body turned toward the court (screen left-front), holding the regent's staff upright in his RIGHT hand, CH_CONTEMPT; QUEEN mid-left background, slightly out of focus, just lowering her open RIGHT hand that was raised to the sun (ring against the sky), the tiny freeze of QU_LEVEL → stiff; COURTIERS as soft white shapes behind
- emotion: public insult; her micro-freeze at "seven-day crown" (A1)
- key action: CHANCELLOR addresses the court; she lowers her hand
- light & shadows: noon; both stand on short pooled shadows; at the bottom edge the near-black membrane of a wing tip spreads across the dais floor from under her hem (no head in frame)
- bubble area: 2 bubbles, **upper 1/3, plain pale noon sky above the canyon rim, right half above CHANCELLOR** (speaker); stacked #1 above #2
- dialogue_ref: CHANCELLOR "칠 일 된 왕관에, 이제 용까지 얹으셨군요." / CHANCELLOR "상중에는 섭정이 대신 짐을 지는 게 법도지요."
- text-free: brooch and staff finial = half-hidden sun shape only
- gap_after: 0
- attach: BASIL_ref, LINE_turnaround, panel_001

### panel_007 (P07)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: medium two-shot, eye level
- in frame: QUEEN left, facing right, QU_COLD (expressionless, level, square to him); CHANCELLOR right, turned to her in an exaggerated bow, CH_GENIAL, chin tilted to point down-frame toward the foot of the stairs (the kneeling figure is out of frame or a tiny charcoal shape far below at lower right)
- emotion: the rule said aloud; title R ① (to her)
- key action: his mocking bow toward her; his chin indicates the hostage
- light & shadows: noon; wing-tip membrane on the floor behind her ankles (lower left), no head
- bubble area: **1 bubble only** (panel kept for the rule line), **upper center-right, plain noon sky above the crimson banners**, tail to CHANCELLOR
- dialogue_ref: CHANCELLOR "폐하, 쓰러지시면 저것은 그날로 풀려납니다."
- text-free: yes
- gap_after: 40
- attach: LINE_turnaround, BASIL_ref, panel_006

### panel_008 (P08)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: medium shot, eye level, slightly wider
- in frame: CHANCELLOR center-right, turned back to the court, open palm spread toward them, smiling CH_CONTEMPT; a few COURTIERS (soft focus, white) covering their mouths at left; far below at the lower-left edge the tiny charcoal kneeling HOSTAGE, head bowed, motionless (back of his head only)
- emotion: arrogance; F3 plant (a truthful lie)
- key action: the insult played to the court
- light & shadows: noon pooled shadows under courtiers and him; the kneeling man's surroundings bright
- bubble area: 2 bubbles, **upper 1/3 sky, left-center to right**, #1 left, #2 right; tail to CHANCELLOR. Keep the tiny kneeling figure (lower left) clear
- dialogue_ref: CHANCELLOR "저쪽 왕은 십 년째 숨어 지내는 겁쟁이고, 보낸 건 아무것도 아닌 놈이지요." / CHANCELLOR "그러니 저것은 지하에 두고, 문을 잠그시지요."
- text-free: yes
- gap_after: 0
- attach: BASIL_ref, panel_001

### panel_009 (P09)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: hand close-up, waist height
- in frame: lower-left: QUEEN's two hands folded at her waist on the white gown, RIGHT hand on top, right thumb turning the carnelian ring on her right index finger a quarter turn (reads like a tremble); from the right: CHANCELLOR's two hands holding the regent's staff out horizontally toward her (crimson cloak edge, white wide sleeves); background upper area: nodding COURTIERS as soft silhouettes
- emotion: misdirection (looks like she is about to yield; really thinking)
- key action: ring turn + staff offered
- light & shadows: noon, hard small shadows under the hands
- bubble area: 1 bubble, **upper-right 1/3, the softly out-of-focus pale gate-wall limestone above the staff**, tail to the right (CHANCELLOR off-panel above)
- dialogue_ref: CHANCELLOR "혼자 드시기엔 무겁습니다."
- text-free: ring stone = one small plain raised circle
- gap_after: 60
- attach: LINE_hands, BASIL_ref

### panel_010 (P10)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: M / aspect: 1:1
- shot / camera: medium close-up, eye level, slightly to her left
- in frame: QUEEN face and shoulders screen left-center, eyes half lowered toward the staff (the staff tip enters from the right edge, horizontal)
- emotion: reads as acceptance (deliberately no reaction shot)
- key action: she looks at the staff; half a beat
- light & shadows: noon light bouncing up from the stone onto her face
- bubble area: 1 bubble, **upper-right 1/3, plain noon sky**, tail to her
- dialogue_ref: QUEEN "맞아요, 무겁죠."
- text-free: yes
- gap_after: 60
- attach: LINE_expressions, LINE_turnaround

### panel_011 (P11)
- scene_id: S1 / location: LOC_GATE (SHORT, dais) / light: LIGHT_NOON
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: medium-wide, slightly low angle (from the court's level looking a little up at her)
- in frame: QUEEN center-left, eyes raised to the whole court, QU_COLD, hands not touching the staff; CHANCELLOR right, staff still held out horizontally, left hanging in the air, smile stiffening; COURTIERS soft in the lower foreground
- emotion: first payoff (counter in two beats)
- key action: refusal by not taking it; decision ①
- light & shadows: noon; at her feet the winged shadow's wing membrane on the dais floor, unchanged (no reaction), head out of frame toward the stairs
- bubble area: 2 bubbles, **upper 1/3, plain pale noon sky above the dais, left half above her**, #1 above #2, tail to QUEEN
- dialogue_ref: QUEEN "그러니 내가 들어요." / QUEEN "손님은 지하가 아니라, 내 옆방에 묵습니다."
- text-free: yes
- gap_after: 0
- attach: LINE_turnaround, BASIL_ref, panel_001

### panel_012 (P12)
- scene_id: S1 / location: LOC_GATE (SHORT, foot of stairs) / light: LIGHT_NOON
- size: ST / aspect: 16:9
- shot / camera: horizontal strip, low angle from the foot of the stairs
- in frame: foreground right: HOSTAGE profile (facing left/up), gold eyes narrowing (HO_STILL with interest), head and shoulders only; up the white stairs at left-center: CHANCELLOR small, staff still horizontal, frozen smile; silent COURTIERS behind him
- emotion: his interest, gaze ②
- key action: none; reaction
- light & shadows: noon; his feet out of frame
- bubble area: none (silent)
- text-free: yes
- gap_after: 200 (time cut: noon → late afternoon)
- attach: HERON_expressions, BASIL_ref, panel_001

## B3 · 그림자 없는 남자 (P13–P20)

--- SCENE BREAK --- S2 · LOC_CORRIDOR · late afternoon · semi-open colonnade

(S2 공통: 서쪽(열린 쪽) 기둥 사이로 낮은 금빛 해, 동쪽 회칠 안쪽 벽에 긴 그림자. QUEEN의 날개 그림자는 옆모습으로 안쪽 벽·바닥에 누우며 **머리는 기둥 그림자 띠 속**. HOSTAGE는 발을 프레임 밖으로(구도 3) — 증거 컷 panel_013만 빛의 띠 문장.)

### panel_013 (P13)
- scene_id: S2 / location: LOC_CORRIDOR (FULL) / light: LIGHT_AFTERNOON
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: wide, eye level, looking along the colonnade at an angle so the **inner whitewashed wall is the main surface** (columns on the left edge, wall filling the right 2/3)
- in frame: small figures walking away-left along the floor: QUEEN ahead, HOSTAGE a few paces behind (tall), SERVANTS in white caps detouring around her on the column (sun) side
- emotion: the rule as daily life
- key action: servants step around her shadow
- light & shadows: **proof shot (style-bible §9 #2):** `on the whitewashed inner wall a procession of long shadows of the walking servants and the queen, with one unbroken band of gold light where the tall man walks, no shadow of his own`. Her shadows: small human shadow wrapped by the winged shadow in profile (`SHADOW_CORE` + `SHADOW_SIDE_HIDDEN`, "a dark band of column shadow"): the S-neck rises into a dark column-shadow band, head not visible
- bubble area: none (silent)
- text-free: capitals = sun disc and wings only
- gap_after: 0
- attach: WINGED_SHADOW_side, LINE_turnaround, HERON_turnaround
- note: S2 anchor. Scene negative `No dragon body, no horns visible, no smoke, no glow.` + HOSTAGE standard Avoid line. 4 variants

### panel_014 (P14)
- scene_id: S2 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_AFTERNOON
- size: M / aspect: 1:1
- shot / camera: medium two-shot, eye level
- in frame: QUEEN foreground left, half-turned back over her shoulder toward the right, QU_DRY (right corner only); HOSTAGE mid-right a few paces behind, just stopped, cropped above the knees, HO_STILL; a dark bar of column shadow crosses the floor between them
- emotion: irony (reaction lands in panel_015)
- key action: she congratulates him dryly
- light & shadows: gold bars across both; on the wall behind her a wing tip of the winged shadow (no head); his feet out of frame
- bubble area: 2 bubbles, **upper-left 1/3, smooth whitewashed inner wall in a band of soft shadow above her**, #1 above #2
- dialogue_ref: QUEEN "축하해요." / QUEEN "이 나라에서 제일 비싼 손님이 됐네요."
- text-free: yes
- gap_after: 60
- attach: LINE_expressions, HERON_turnaround, panel_013

### panel_015 (P15) ★ gesture ①
- scene_id: S2 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_AFTERNOON
- size: M / aspect: 1:1
- shot / camera: medium close-up on him, shallow focus
- in frame: HOSTAGE foreground right, straight face (HO_STILL), looking screen left toward her (off-panel); background center-left, soft focus but readable: the old ENVOY, who was coming the other way, **stepping aside against a column to let the hostage pass first, eyes lowered** (no fist here)
- emotion: his first line, a plain statement; misdirection (reader looks at him, not the envoy)
- key action: ENVOY yields the way to HIM only
- light & shadows: gold bars; ENVOY casts a normal shadow toward the inner wall; HOSTAGE cropped at chest
- bubble area: 1 bubble, **upper-right corner, smooth whitewashed wall above his head**; keep the ENVOY (center-left background) fully clear
- dialogue_ref: HOSTAGE "손님이 아닙니다. 값입니다."
- text-free: yes
- gap_after: 0
- attach: HERON_expressions, UR_ref, panel_013

### panel_016 (P16)
- scene_id: S2 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_AFTERNOON
- size: M / aspect: 1:1
- shot / camera: medium shot on her, eye level
- in frame: QUEEN center-left, stopped, body turned toward him (screen right), head tilted slightly, calculating QU_LEVEL; the edge of his charcoal shoulder at the right frame edge
- emotion: interest, bargaining
- key action: she turns fully to him
- light & shadows: gold bar on her face, wall shadow behind
- bubble area: 1 bubble, **upper-left 1/3, whitewashed wall in soft shadow**
- dialogue_ref: QUEEN "그 값, 얼마나 버티는데요?"
- text-free: yes
- gap_after: 60
- attach: LINE_expressions, LINE_turnaround

### panel_017 (P17)
- scene_id: S2 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_AFTERNOON
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder (over her LEFT shoulder: back of her coiled mahogany hair and circlet out of focus at lower left), on his face
- in frame: HOSTAGE center-right, unblinking, a beat late, HO_STILL (reads as resignation); he does not step closer
- emotion: desire ① disguised as resignation (F5)
- key action: none; stillness
- light & shadows: a gold bar across his chest, face in soft light; feet out of frame
- bubble area: 2 bubbles, **upper-right 1/3, whitewashed wall above his head**, #1 above #2
- dialogue_ref: HOSTAGE "당신이 사는 만큼입니다." / HOSTAGE "그러니 오래 사십시오."
- text-free: yes
- gap_after: 40
- attach: HERON_expressions, LINE_turnaround

### panel_018 (P18)
- scene_id: S2 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_AFTERNOON
- size: M / aspect: 1:1
- shot / camera: close-up on her face
- in frame: QUEEN face, screen left-center, QU_DRY with the eyes cooling a little
- emotion: irony; she hears resignation and does not ask why (reaction = panel_019)
- key action: none
- light & shadows: gold rim light from the left
- bubble area: 1 bubble, **upper-right 1/3, soft-shadowed whitewashed wall**
- dialogue_ref: QUEEN "좋은 덕담이네요. 내가 오래 살면, 당신도 오래 치르죠."
- text-free: yes
- gap_after: 0
- attach: LINE_expressions

### panel_019 (P19)
- scene_id: S2 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_AFTERNOON
- size: M / aspect: 1:1
- shot / camera: medium, eye level from behind her
- in frame: QUEEN foreground left, walking ahead again, glancing back over her right shoulder; HOSTAGE background right, straight unchanged face (irony reaction), chest-up in a band of light
- emotion: unanswered irony
- key action: no reply from him
- light & shadows: alternating gold bars; his lower body hidden by a column / the frame
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: LINE_turnaround, HERON_expressions, panel_013

### panel_020 (P20)
- scene_id: S2 / location: LOC_CORRIDOR (SHORT, pale sky between columns) / light: LIGHT_AFTERNOON
- size: L / aspect: 3:4 (fallback **9:16 allowed**, else 1:1)
- shot / camera: low angle from below chest height, looking up past him to the sky
- in frame: HOSTAGE center, stopped between two columns, face tilted up to the empty sky above the canyon, HO_UNSEEN (composure dropped, eyes almost closed); dust floating in the beams; at the far left edge, small and distant in a doorway's shadow, QUEEN's silhouette watching him
- emotion: cost of restraint ① (a sky he cannot fly)
- key action: none; no birds, no dragons in the sky
- light & shadows: the low angle hides his feet (frame bottom at his waist); pale hard sky warming
- bubble area: none (silent)
- text-free: yes
- gap_after: 200 (time cut → dusk)
- attach: HERON_expressions, HERON_turnaround, panel_013

## B4 · 자물쇠는 그쪽에 (P21–P28)

--- SCENE BREAK --- S3 · LOC_ROOMS · dusk · interior

(S3 공통: 연결문 = 무거운 짙은 참나무, 반원 아치틀, 검은 쇠 띠 경첩. **그의 쪽 문짝에 새 검은 쇠 상자 자물쇠 + 열쇠, 그녀 쪽 문짝에는 떼어 낸 연한 나무 자국과 메운 구멍 넷뿐** [고정]. 침대는 프레임 밖이며 프롬프트에 쓰지 않는다. 직사광이 없어 그림자 문제가 생기지 않는다(구도 4). 날개 그림자는 이 장면에서 다루지 않는다.)

### panel_021 (P21)
- scene_id: S3 / location: LOC_ROOMS (FULL) / light: LIGHT_DUSK
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: medium-wide from inside HER larger room (crimson wall hangings at the left edge), looking at the open connecting door
- in frame: QUEEN standing in the door frame, left-center, near profile facing right into his room, QU_LEVEL; the door leaf swung open on her side shows the pale unweathered patch of wood and four filled holes; beyond the door his small plain room: whitewashed walls, a wooden chest, orange glow at its window; HOSTAGE inside his room, mid-background right, chest-up past the door frame
- emotion: decision ② begins
- key action: she stands at the threshold and does not cross
- light & shadows: dusk, dim cool interior, warm glow from his window
- bubble area: 1 bubble, **upper 1/3 left of center, the plain whitewashed wall above the door arch in dim light**
- dialogue_ref: QUEEN "갇힌 손님 옆에선 잠이 안 와요."
- text-free: patch and holes only, no marks
- gap_after: 0
- attach: LINE_turnaround, HERON_turnaround (optional `LOC_ROOMS` card)
- note: S3 anchor

### panel_022 (P22)
- scene_id: S3 / location: LOC_ROOMS (SHORT, connecting door) / light: LIGHT_DUSK
- size: M / aspect: 1:1
- shot / camera: close-up on hands across the threshold, slightly high
- in frame: lower 2/3: QUEEN's RIGHT hand (ring visible, white sleeve end) pushing a plain black iron key with an oval bow across the threshold; HOSTAGE's RIGHT hand (scar on the back) taking the key's tip; **a clear gap between their fingers, not touching**; on his side of the door leaf (right) the new black iron box lock
- emotion: restraint; he offers to be locked
- key action: key handed over without touch
- light & shadows: dim dusk, warm glint on the iron
- bubble area: 1 bubble, **upper 1/3, the dark oak door face and dim whitewashed wall above the hands**, tail to the right (his side)
- dialogue_ref: HOSTAGE "나를 잠가 둘 수 있습니다."
- text-free: lock and key plain, no engraving
- gap_after: 0
- attach: LINE_hands, HERON_hands, panel_021

### panel_023 (P23)
- scene_id: S3 / location: LOC_ROOMS (SHORT, connecting door) / light: LIGHT_DUSK
- size: M / aspect: 1:1
- shot / camera: medium close-up on her, his shoulder edge at right
- in frame: QUEEN center-left, drawing back her empty hand, looking at his face; the irony in her mouth starting to drop; his charcoal shoulder and high neckline at the right edge
- emotion: she refuses the jailer role
- key action: hand withdrawn
- light & shadows: dusk
- bubble area: 1 bubble, **upper-left 1/3, dim whitewashed wall**
- dialogue_ref: QUEEN "그러면 당신은 볼모고, 나는 간수죠."
- text-free: yes
- gap_after: 0
- attach: LINE_expressions, panel_021

### panel_024 (P24)
- scene_id: S3 / location: LOC_ROOMS (SHORT, connecting door) / light: LIGHT_DUSK
- size: M / aspect: 1:1
- shot / camera: profile two-shot, eye level, the threshold / door frame vertical at the center
- in frame: QUEEN left in profile facing right, on her side of the threshold (does not cross), serious face in an ironic form (QU_COLD); HOSTAGE right in profile facing left, a head taller (her eyes at his chin), HO_STILL
- emotion: restraint ①, her principle
- key action: none; held look
- light & shadows: dusk
- bubble area: 1 bubble, **upper-left 1/3, whitewashed wall above her head, left of the arch**
- dialogue_ref: QUEEN "내가 맡은 건 당신 그림자지, 당신이 아니에요."
- text-free: yes
- gap_after: 80
- attach: LINE_turnaround, HERON_turnaround, panel_021

### panel_025 (P25) ★ gesture ②
- scene_id: S3 / location: LOC_ROOMS (his room, deep window) / light: LIGHT_DUSK
- size: M / aspect: 1:1
- shot / camera: medium, inside his room; foreground left = his hand, background right = window
- in frame: HOSTAGE left, head bowed in near profile, looking down at the key lying on his open RIGHT palm (scar visible) in the lower-left foreground, HO_UNSEEN softened; through the deep window embrasure at right: the small inner courtyard, dry stone basin, old olive tree, and the old ENVOY by the olive tree looking up at this window, **right fist pressed over his heart (left chest), back of the hand forward**
- emotion: gaze ③ (long look at the key); F6 plant
- key action: ENVOY's fist toward HIS window
- light & shadows: sky beyond shifting orange to navy; ENVOY's small normal shadow on the courtyard stones
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: HERON_hands, UR_ref, panel_021

### panel_026 (P26)
- scene_id: S3 / location: LOC_ROOMS (his room, window) / light: LIGHT_DUSK
- size: M / aspect: 1:1
- shot / camera: medium, inside his room
- in frame: window in the left third: in the courtyard below, the ENVOY's back with silver-white braids and bronze rings, fist just lowered, turning away; QUEEN center, looking past his shoulder out the window; HOSTAGE foreground right, facing into the room (away from the window), eyes lowered, not turning
- emotion: her misreading (hate), his plain correction (fear, no object)
- key action: ENVOY leaving
- light & shadows: dusk, navy creeping into the window
- bubble area: 2 bubbles, **upper 1/3, dim whitewashed wall / dark upper corner of the chamber**: #1 upper center above her, #2 upper right above him
- dialogue_ref: QUEEN "당신네 사람들, 당신을 미워하네요." / HOSTAGE "두려워하는 겁니다."
- text-free: yes
- gap_after: 40
- attach: LINE_turnaround, HERON_turnaround, UR_ref

### panel_027 (P27)
- scene_id: S3 / location: LOC_ROOMS (window → courtyard) / light: LIGHT_DUSK
- size: ST / aspect: 16:9
- shot / camera: horizontal strip through the window
- in frame: the courtyard: dry stone basin, olive tree, envoy gone; across it on the opposite rock wall **one closed plain wooden shutter, blank**; at the left edge foreground QUEEN's profile, her gaze briefly touching the shutter
- emotion: unexplained glance (A2)
- key action: none
- light & shadows: deep-blue dusk
- bubble area: none (silent)
- text-free: shutter plain wood, no marks or emblems
- gap_after: 0
- attach: LINE_expressions, panel_021

### panel_028 (P28) ★ pair of panel_058
- scene_id: S3 / location: LOC_ROOMS (connecting door, his side) / light: LIGHT_DUSK
- size: M / aspect: 1:1
- shot / camera: close-up from his side of the door
- in frame: foreground: the black iron box lock on his side with the key inserted, **not turned**; HOSTAGE's open RIGHT hand resting still on the door leaf beside it (scar visible); the door closing toward her side, a narrowing gap at right showing her silhouette in her room
- emotion: decision ② closed: the door is his to decide
- key action: key stays unturned
- light & shadows: dusk, last warm light in the gap
- bubble area: 1 bubble (voice from behind the door), **upper 1/3, plain whitewashed wall above the door arch**, tail toward the door gap (right)
- dialogue_ref: QUEEN (behind the door) "잘 자요. 문은 당신이 정해요."
- text-free: yes
- gap_after: 200
- attach: HERON_hands, panel_022, panel_021
- note: lock shape and position = reference for panel_058

## B5 · 연회 (P29–P36)

--- SCENE BREAK --- S4 · LOC_HALL · night · interior

(S4 공통: 쇠 화로가 높은 탁자 **뒤**에서 타므로 QUEEN의 두 그림자는 탁자 앞 통로 바닥으로 길게 떨어진다. 날개 그림자의 **머리는 화면에 넣지 않는다**: 목은 카메라 쪽으로 뻗어 **아래쪽 프레임 가장자리에서 잘린다**(SHADOW_SIDE_HIDDEN의 "beyond the frame edge" 판; 화로가 뒤에 있으면 머리가 탁자 반대쪽으로 향하므로 "탁자 그림자 속" 판은 물리적으로 맞지 않아 이 판을 골랐다). HOSTAGE는 높은 탁자 맨 끝, 화로빛 밖 그늘에 앉아 있다(구도 4). 손님 = 초점 밖 흰 상복 형체.)

### panel_029 (P29)
- scene_id: S4 / location: LOC_HALL (FULL) / light: LIGHT_HALL
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: wide, slightly high, from the middle of the aisle looking toward the high table at the far end
- in frame: far end: white stone high table on a low step, the great iron fire basket burning behind it; QUEEN seated at its center (small, white, circlet glint); HOSTAGE seated at the extreme right end of the high table, in shade; empty half-dark musicians' gallery high on the left wall; long side tables with guests as soft white shapes; SERVANTS detouring around the shadow on the aisle floor; LORD_HORN (shaved head, horn brooch, bronze-toed boots) walking straight down the middle of the aisle toward the table
- emotion: size exposure ②; menace
- key action: the lord heads for the shadow
- light & shadows: `SHADOW_CORE` + `SHADOW_SIDE_HIDDEN` ("beyond the frame edge"): the winged shadow lies long down the aisle floor from her place toward the camera, wings spread across the aisle, the neck running out past the bottom frame edge, head not visible; other figures have ordinary brown-black shadows
- bubble area: none (silent)
- text-free: banners = plain white sun discs; no seat cards
- gap_after: 0
- attach: WINGED_SHADOW_side, LINE_turnaround, HERON_turnaround
- note: S4 anchor. Scene negative `No dragon body, no horns visible, no smoke, no glow.` + HOSTAGE standard Avoid line

### panel_030 (P30)
- scene_id: S4 / location: LOC_HALL (aisle) / light: LIGHT_HALL
- size: M / aspect: 1:1
- shot / camera: floor-level low angle, close on the boot
- in frame: LORD_HORN's heavy black boot with a bronze toe-cap deliberately planted in the middle of the winged shadow's wing membrane on the aisle stones (lower half); background soft focus: guests' hands frozen above their cups
- emotion: the hall freezes
- key action: the step; the shadow does not react at all
- light & shadows: firelight from the far end; the wing membrane flat and unchanged under the boot; head of the shadow not in frame
- bubble area: 1 bubble, **upper 1/3, the dark barrel vault high above, softly out of focus**, tail down to the lord (off-panel above the boot)
- dialogue_ref: LORD_HORN "아, 실례를."
- text-free: no marks on the stones
- gap_after: 0
- attach: WINGED_SHADOW_side, panel_029

### panel_031 (P31)
- scene_id: S4 / location: LOC_HALL (high table end) / light: LIGHT_HALL
- size: M / aspect: 1:1
- shot / camera: hand close-up, table height
- in frame: HOSTAGE's **open RIGHT hand** resting flat on the corner of the white stone table, scar on the back, charcoal sleeve end; under the palm a crack spreading in the stone (natural fracture lines, not a fist)
- emotion: cost of restraint ②
- key action: the stone cracks under a still hand
- light & shadows: he sits in shade at the table end; dim firelight from the side
- bubble area: SFX only ("crack"): small calm area **upper-left, dark out-of-focus background beyond the table edge**
- dialogue_ref: — (SFX P31, viewer draws)
- text-free: the crack must not look like letters or symbols
- gap_after: 0
- attach: HERON_hands, panel_029

### panel_032 (P32)
- scene_id: S4 / location: LOC_HALL (high table) / light: LIGHT_HALL
- size: M / aspect: 1:1
- shot / camera: medium two-shot, slightly low from table level
- in frame: QUEEN seated left, not rising, looking up at the lord, QU_DRY; LORD_HORN standing right in front of the table, freezing in the same frame (irony reaction)
- emotion: small payoff
- key action: she stays seated
- light & shadows: fire behind her rims her hair; the lord lit from the front
- bubble area: 2 bubbles, **upper-left 1/3, the dark barrel vault above her**, #1 above #2, tail to her
- dialogue_ref: QUEEN "제 그림자가 마음에 드셨나 봐요." / QUEEN "밟고 싶을 만큼."
- text-free: brooch = curved horn shape only
- gap_after: 40
- attach: LINE_expressions, LINE_turnaround, panel_029

### panel_033 (P33)
- scene_id: S4 / location: LOC_HALL (high table) / light: LIGHT_HALL
- size: ST / aspect: 16:9
- shot / camera: horizontal strip at table height, along the long white stone table
- in frame: candles and firelight in the middle distance; QUEEN at the center seat (left third, grey eyes), HOSTAGE at the table end (right third, matte gold eyes, in shade), looking at each other down the table
- emotion: gaze ④, duel of looks
- key action: none
- light & shadows: warm candlelight between them
- bubble area: none (silent)
- text-free: yes; bread and fruit in background only, plain
- gap_after: 0
- attach: LINE_expressions, HERON_expressions, panel_029

### panel_034 (P34)
- scene_id: S4 / location: LOC_HALL (high table end) / light: LIGHT_HALL
- size: M / aspect: 1:1
- shot / camera: close-up on his face
- in frame: HOSTAGE face center, straight; only his eyelids slowly lowering (he looks down first)
- emotion: he yields the duel (re-read: highest dragon-kin respect, same as panel_015)
- key action: eyes lower
- light & shadows: dim warm side light, face partly in shade
- bubble area: none (silent)
- text-free: yes
- gap_after: 60
- attach: HERON_expressions

### panel_035 (P35)
- scene_id: S4 / location: LOC_HALL / light: LIGHT_HALL
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past CHANCELLOR (foreground left, cup in hand)
- in frame: CHANCELLOR foreground left, glancing from one to the other, half-smile (CH_GENIAL), no staff; mid-ground center QUEEN, her eyes flicking up once; background upper right: the high wall and the musicians' gallery that should be empty, with **a figure in a dark grey hood half visible behind the railing** (ASSASSIN_1, face hidden)
- emotion: suspense the reader may or may not catch
- key action: her eyes go up once
- light & shadows: firelight below, gallery half dark
- bubble area: 1 bubble, **upper-left 1/3, dark barrel vault above CHANCELLOR**; keep the gallery figure (upper right) fully clear
- dialogue_ref: CHANCELLOR "짐승이 벌써 길이 들었군요."
- text-free: yes
- gap_after: 0
- attach: BASIL_ref, LINE_turnaround, panel_029

### panel_036 (P36)
- scene_id: S4 / location: LOC_HALL (high table) / light: LIGHT_HALL
- size: M / aspect: 1:1
- shot / camera: hand close-up on the table
- in frame: foreground: QUEEN's RIGHT hand resting on the white stone table, index finger lifted to tap the carnelian ring stone on the table (two taps); out of focus in the background by a column: CAPTAIN giving the smallest nod; QUEEN does not look toward her
- emotion: unexplained signal (paid off at panel_041)
- key action: tap, tap (not the ring turn of panel_009)
- light & shadows: firelight on the stone
- bubble area: SFX only ("tok, tok"): small calm area **lower right, plain white table surface beside the hand**
- dialogue_ref: — (SFX P36, viewer draws)
- text-free: ring stone = one small plain raised circle
- gap_after: 200
- attach: LINE_hands, THORA_ref

## B6 · 여왕이 판 덫 — 작은 반전 (P37–P42)

--- SCENE BREAK --- S5 · LOC_TERRACE · moonless night · exterior

(S5 공통: 그믐, **달 없음**. 테라스는 서쪽 협곡 위, 뒤쪽(동쪽) 2층 아케이드 = 아래 어두운 벽감 + 위 열린 회랑, 남서쪽 멀리 관문 실루엣. 무대 축 기본 QUEEN 왼쪽 · HOSTAGE 오른쪽. 그는 별빛에서 그림자 문제가 생기지 않는다(빛이 약함); 횃불 이후는 발을 프레임 밖으로. 갈고리 컷(038, 043–045, 051)의 HOSTAGE Avoid 줄은 `no ropes tied on him` 대신 밧줄 위치 문장. 날개 그림자는 별빛에서는 보이지 않을 만큼 옅게 두거나 다루지 않는다.)

### panel_037 (P37)
- scene_id: S5 / location: LOC_TERRACE (FULL) / light: LIGHT_STARS
- size: M (wide framing) / aspect: 1:1
- shot / camera: medium-wide, eye level, from the terrace's north side so the parapet and starry sky fill the left and the cliff arcade fills the right
- in frame: QUEEN center-left, dismissing the guards, QU_COLD; HOSTAGE one step behind her (right of her, slightly back), still; CAPTAIN right, after a brief hesitation, **open right palm pressed flat on her breastplate**, leading GUARDS/ARCHERS out **toward the dark arched niches of the lower arcade** (right background); the upper open gallery visible above the niches
- emotion: unease planted (the guards leave); title R ②
- key action: guards withdraw — direction = lower niches (fair clue for panel_041)
- light & shadows: starlight only, cool dim outlines, torch stands unlit
- bubble area: 2 bubbles, **upper-left 1/3, starry ink-navy sky above the parapet**, stacked: #1 tail to QUEEN, #2 tail runs right to the CAPTAIN. Keep the upper gallery and niches (right) clear
- dialogue_ref: QUEEN "모두 물러가세요." / CAPTAIN "예, 폐하."
- text-free: breastplate sun disc plain
- gap_after: 0
- attach: LINE_turnaround, THORA_ref, HERON_turnaround (optional `LOC_TERRACE` card)
- note: S5 starlight anchor

### panel_038 (P38)
- scene_id: S5 / location: LOC_TERRACE (parapet end) / light: LIGHT_STARS
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: high side view from just off the terrace's edge, both in profile; vertical drop composition top → bottom: sky → the two figures at the parapet → the sheer cliff falling to a thin silver thread of water far below
- in frame: QUEEN screen left at the end of the waist-high plain parapet, her back to the canyon, facing right toward him, QU_DRY; HOSTAGE screen right **one step away, not moving**, facing her (HO_RESTRAINT), cropped by the parapet line at the waist; at the far lower-left on the parapet's south end: `a grappling hook of dull twisted copper hooked over the south end of the parapet, a rope hanging down into the canyon, no marks`, small at the frame edge, unnoticed
- emotion: the scale of the premise (her death = his freedom), a dare
- key action: she baits him
- light & shadows: starlight; the drop dark below; no moon
- bubble area: 1 bubble (large), **upper 1/3, the starry ink-navy sky above the parapet**, tail down to her
- dialogue_ref: QUEEN "자유가 이렇게 가까운데, 안 밀어요?"
- text-free: hook plain copper, no marks
- gap_after: 0
- attach: LINE_turnaround, HERON_turnaround, panel_037
- note: HOSTAGE Avoid line hook version (`hooked on the south end of the parapet, far from him`). Make before panel_051

### panel_039 (P39)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_STARS
- size: M / aspect: 1:1
- shot / camera: medium two-shot, eye level
- in frame: QUEEN left, one hand on the parapet, QU_DRY; HOSTAGE right, where he stood, hands at his sides, not reaching (HO_RESTRAINT); a head taller
- emotion: quick exchange; "step back" echo starts
- key action: he speaks from where he stands
- light & shadows: starlight
- bubble area: 2 bubbles in the **upper 1/3 starry sky**: #1 (his) upper-right, set higher; #2 (hers) upper-left, set a little lower so the read order (his → hers) is clear
- dialogue_ref: HOSTAGE "가장자리에서 물러서십시오." / QUEEN "떨어질까 봐요?"
- text-free: yes
- gap_after: 60
- attach: LINE_expressions, HERON_turnaround, panel_037

### panel_040 (P40)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_STARS
- size: M / aspect: 1:1
- shot / camera: close-up on his face, the arcade behind
- in frame: HOSTAGE face right-center, straight (HO_RESTRAINT); background upper-left: the dark upper gallery of the arcade where **the tip of a crossbow catches one glint of starlight** (reader-only suspense); QUEEN not in frame (she does not look there)
- emotion: desire ②; first plain refusal of freedom
- key action: none
- light & shadows: starlight; the glint tiny, not glowing
- bubble area: 1 bubble, **upper-right corner, dark arched niche above his head, softly out of focus**; keep the glint (upper left) clear
- dialogue_ref: HOSTAGE "내가 자유로워질까 봐."
- text-free: yes
- gap_after: 0
- attach: HERON_expressions, panel_037
- note: frame him so he does not lean toward the camera/her (no approach)

### panel_041 (P41)
- scene_id: S5 / location: LOC_TERRACE (arcade, vertical) / light: LIGHT_TORCH (first torch)
- size: L / aspect: 3:4 (fallback **9:16 allowed**, else 1:1)
- shot / camera: vertical, top → bottom in one frame, slightly low
- in frame: top: in the upper gallery, ASSASSIN_1 (dark grey hood, lower face wrapped) aiming a crossbow down-right; middle: ARCHERS with longbows bursting out of the lower niches and shooting first, an arrow striking the crossbow away, a GUARD tackling the crossbowman, the first torch flaring; bottom: QUEEN small at the parapet end, **not having moved a step**
- emotion: small twist — the trap was hers
- key action: ambush springs from the niches
- light & shadows: first hot orange torch against ink-navy
- bubble area: SFX only ("whoosh — clang"): small calm area **upper right, dark arch beside the crossbow**
- dialogue_ref: — (SFX P41, viewer draws)
- text-free: yes
- gap_after: 0
- attach: THORA_ref, LINE_turnaround, panel_037

### panel_042 (P42)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_STARS
- size: M / aspect: 1:1
- shot / camera: medium two-shot
- in frame: QUEEN left, unmoved, dry face (QU_COLD); HOSTAGE right, looking at her, surprised — eyes slightly wider for the first time — and his gold eyes sliding for a beat toward the south end of the parapet (screen left, off-panel)
- emotion: the trap confirmed; breath valve
- key action: his glance to the south end
- light & shadows: starlight, a faint warm glow from torches below the frame
- bubble area: #1 **upper-left, starry sky above her** (hers); #2 **lower-left strip, dark terrace stones**, tail pointing down out of frame (off-screen CAPTAIN on the lower level). Keep both faces clear
- dialogue_ref: QUEEN "근위는 물린 게 아니라, 숨긴 거예요." / CAPTAIN (off-screen) "잡았습니다."
- text-free: yes
- gap_after: 240
- attach: LINE_expressions, HERON_expressions, panel_037

## B7 · 두 번째 화살, "폐하" — 메인 반전 (P43–P50)

(S5 계속, 이제 LIGHT_TORCH. 앵커 panel_045. **HOSTAGE 왼팔: panel_043–044 W0, panel_045–048·050 W1** (`an arrow driven through the outer middle of his LEFT forearm, the coat sleeve torn there; a few drops of thick metallic-gold blood, not glowing, on the white stone`). P49는 회상이라 W0. 대사는 panel_047 하나, 048–050 무대사.)

### panel_043 (P43)
- scene_id: S5 / location: LOC_TERRACE (south end of parapet) / light: LIGHT_TORCH
- size: ST / aspect: 16:9
- shot / camera: horizontal close-up along the parapet top
- in frame: a bare hand gripping the south end of the parapet from below (from the canyon side), the wrist wrapped in earth-coloured cloth up to the wrist; right beside it the same dull twisted copper grappling hook and rope; **no eyes, no face** (ASSASSIN_2)
- emotion: surprise from the unexpected side (the canyon)
- key action: the climber's grip
- light & shadows: torchlight from the terrace side, ink-navy canyon below
- bubble area: none (silent)
- text-free: hook plain
- gap_after: 0
- attach: panel_038, panel_045 (after panel_045 exists; otherwise panel_037)
- note: make panel_045 first if possible for the torch look; hook must match panel_038

### panel_044 (P44)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: ST / aspect: 16:9
- shot / camera: horizontal strip, motion blur
- in frame: HOSTAGE stepping half a pace forward before anyone else moves, a smear of his charcoal coat hem and a motion trail; QUEEN still at the edge of frame; cropped at the knees
- emotion: he sees in the dark first
- key action: half step
- light & shadows: torchlight streaks; feet out of frame
- bubble area: SFX only ("whip"): small calm area **upper left, dark sky**
- dialogue_ref: — (SFX P44, viewer draws)
- text-free: yes
- gap_after: 0
- attach: HERON_turnaround, panel_045 (or panel_037)

### panel_045 (P45)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: medium-wide, eye level, from the south-east so both face roughly toward the camera-right (south, the shooter)
- in frame (fixed staging exception, style-bible §5-3): **HOSTAGE screen left** (he is on her RIGHT, the west/parapet side) having stepped half a pace in front of her, **his LEFT forearm held out horizontally across in front of her chest, a palm's width away, NOT touching**; the arrow driven through the outer middle of that LEFT forearm, sleeve torn; QUEEN screen center-right, behind the arm, face frozen (QU_STRUCK onset); lower middle: **a few drops of matte metallic-gold blood on the white stone, not glowing**; lower-right foreground at the south end of the parapet: ASSASSIN_2 half risen over the parapet, short curved bow raised, **head and face fully wrapped, eyes hidden in shadow**
- emotion: second refusal; F5 paid in action; cost of restraint ③
- key action: arrow strikes his forearm
- light & shadows: hot orange torchlight; his feet out of frame (crop at mid-thigh); no gore, no splatter
- bubble area: SFX only ("thud"): small calm area **upper right, starry sky**
- dialogue_ref: — (SFX P45, viewer draws)
- text-free: yes
- gap_after: 120
- attach: HERON_hands, HERON_turnaround, LINE_turnaround
- note: S5 torch anchor. HOSTAGE Avoid line hook version. Hand open, no fist. 4 variants

### panel_046 (P46) ★ crown revealed — first and only first here
- scene_id: S5 / location: LOC_TERRACE (east cliff face and arcade) / light: LIGHT_TORCH (one torch flaring low by the west parapet)
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: from low behind her on the west side, looking EAST up at the cliff face behind the arcade; vertical composition **light → shadow → people**: top 3/4 = the colossal pale cliff face and the two-level arcade, bottom 1/4 = the terrace with tiny figures
- in frame: `SHADOW_CORE` + `SHADOW_CROWN`: her shadow thrown across the entire east cliff face: the dragon in full profile **facing south (screen right)**, S-curved neck, wings half spread, the head raised high with `a crown-like ring of short horns around the back of the head`; **at the dragon's chest the queen's small human shadow, a thin circlet line visible on its head** (two crowns); the shadow is larger than the whole arcade and cliff face. Bottom: QUEEN small, seen from behind, facing south (screen right); ARCHERS and CAPTAIN tiny, frozen, looking up. A torch flare at the lower-left corner (low, west parapet side)
- **HOSTAGE: out of frame** (deliberate, style-bible §9 #5 fallback taken as primary so no shadow of his can appear; his presence carries over from panel_045/047)
- emotion: event peak; the picture says "king" before any word
- key action: none; the shadow does not move, glow or smoke
- light & shadows: low hard torchlight from the west; archers' small ordinary shadows on the terrace floor
- bubble area: none (silent; no SFX)
- text-free: yes
- gap_after: 320
- attach: WINGED_SHADOW_crown, panel_004, THORA_ref
- note: scene negative `No dragon body, no smoke, no glow.` + Avoid line P46 version (`No horns, scales, wings, tail, claws or fangs on any person, no glowing eyes, no chains, shackles or collar.` only if a person is drawn large; here it is safe to keep). "crown" appears only in this shadow sentence. **Fallback (§8-6, after 3 failures):** remove all people, only the cliff face and the shadow; archers move to panel_047's background. 4 variants. Make after panel_004

### panel_047 (P47) ★ gesture ③ · the one line of the twist
- scene_id: S5 / location: LOC_TERRACE / light: LIGHT_TORCH
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: deep-focus composition, camera low behind QUEEN's right shoulder, looking across the terrace toward the arcade
- in frame (depth layers): **foreground left edge: QUEEN** from behind / three-quarter back (coiled mahogany hair, circlet, white gown), watching; **mid-ground center: the old ENVOY kneeling on one knee, his back turned to the QUEEN** (silver-white braids with bronze rings down his back read clearly), facing the HOSTAGE, eyes lowered, **right fist pressed over his heart, back of the hand forward** (right elbow bent out, readable from behind); **background right-center: HOSTAGE** standing a few steps beyond the ENVOY, facing camera, HO_PAIN_HELD, his bleeding LEFT forearm with the arrow visible at his side (W1). Behind him the dark arched niches of the arcade lit by torches. The ENVOY's path implies he walked past her without stopping
- emotion: twist; the title leaves her
- key action: the ENVOY kneels to HIM, not her
- light & shadows: torchlight; ENVOY and QUEEN cast ordinary shadows on the terrace floor; HOSTAGE cropped at the thigh by the kneeling ENVOY / frame so his feet are not visible
- bubble area: 1 bubble, **upper center-right, the dark arcade arches above the ENVOY's head**, tail to the ENVOY. Must not touch any face, the fist or the wound
- dialogue_ref: ENVOY "폐하."
- text-free: yes
- gap_after: 400
- attach: UR_ref, HERON_turnaround, panel_045
- note: not in prompts: names. Use exactly `the old ENVOY kneels on one knee before the HOSTAGE, eyes lowered, right fist pressed over his heart, his back turned to the QUEEN`. The optional P47a strip is NOT used (64 panels kept). 4 variants

### panel_048 (P48)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: close-up, her face only
- in frame: QUEEN face, eyes on HIM (screen right, off-panel), not on the envoy; torchlight on one cheek; QU_STRUCK onset
- emotion: gaze ⑤ — she sees him anew
- key action: none; no thought bubble
- light & shadows: orange torch on her right cheek, the other side ink-navy
- bubble area: none (silent)
- text-free: yes
- gap_after: 80
- attach: LINE_expressions

--- SCENE BREAK --- S1R · LOC_GATE · noon replay · exterior (intended exception)

### panel_049 (P49) ★ pair of panel_003 — replay
- scene_id: S1R / location: LOC_GATE / light: LIGHT_REPLAY (noon, highlights slightly faded, soft white vignette)
- size: L / aspect: **3:4 — must equal panel_003** (if 3:4 unavailable, both 1:1)
- shot / camera: **from inside the arch tunnel (what THEY saw), at knee height, looking NORTH along the same axis as panel_003 from the opposite end**. Mirror layout: bottom and side edges = dark tunnel framing; upper-middle = the kneeling man; middle → top = the white stairs → the dais at top center; far beyond, the castle on the east wall
- in frame: foreground (bottom third, in the dark tunnel): `seen from behind inside the arch tunnel: four to six dragon-kin kneeling on one knee, braided hair with small bronze rings, the silver-white braids of the elder among them`, their right fists at their chests (read by the shoulder line); beyond, in blazing sun: HOSTAGE's back, kneeling on both knees, both palms on the stone, **unhurt (W0, both sleeves down)**; the ink-black ribbon of shadow at exactly the **middle** of the white stairs (`an ink-black ribbon of shadow lifting off the white stone at the kneeling man's feet and sliding up the middle of the white stairs like spilled ink, still shapeless, no wings yet`); on the dais at the top, QUEEN small in white
- emotion: the chain of knees: delegation → him → her
- key action: same moment as panel_003
- light & shadows: noon; the delegation in tunnel shade; same sun as panel_003
- bubble area: none (silent, no caption)
- text-free: yes
- gap_after: 0
- attach: panel_003, UR_ref, HERON_turnaround
- note: scene negative `No dragon body, no smoke, no glow, no wings yet.` Same count and height of the delegation as panel_003. Make after panel_003. 4 variants

--- SCENE BREAK --- S5 · LOC_TERRACE · moonless night (return)

### panel_050 (P50)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: frontal close-up
- in frame: QUEEN face centered, QU_STRUCK: utterly still, lips slightly parted, eyes wide, no tears
- emotion: silence after the twist; two equal sovereigns
- key action: none
- light & shadows: torchlight, ink-navy background
- bubble area: none (silent)
- text-free: yes
- gap_after: 440
- attach: LINE_expressions

## B8 · 아무도 못 봤다 (P51–P57)

(S5 계속, 횃불 여럿. **HOSTAGE 왼팔 상태 주의 (character-sheets §2-6과 다르게 적은 곳):** 시트는 P51–P57을 W2로 적었으나, 대본에서 의원은 panel_052에 막 도착하고 panel_056에서 "화살을 뺀" 팔을 감는다. 그래서 **panel_052 = W1**(화살이 박힌 채, 피 흘림), **panel_056 = W2**, **panel_057 = W3로 가는 중**(그가 직접 흰 천을 감아 매듭). HOSTAGE는 panel_051 · 053 · 054 · 055에는 나오지 않는다. art-director/prompt-smith는 이 표기를 따르고, 이견이 있으면 리더에게.)

### panel_051 (P51)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: medium, eye level
- in frame: QUEEN center-left, the first to turn, facing right toward ARCHERS and CAPTAIN at the right edge, QU_COLD; the ENVOY behind her at mid-ground, already rising from his knee; background left, lower half: the south end of the parapet with **the same dull twisted copper hook and the rope hanging slack, no one there**; torches approaching beyond the arcade (right background)
- emotion: decision ④; irony engine starts
- key action: she takes the board back
- light & shadows: several orange torches; ordinary shadows
- bubble area: 1 bubble, **upper-left 1/3, starry ink-navy sky above the parapet**, above the hook (the hook stays clear in the lower half)
- dialogue_ref: QUEEN "오늘 밤 여기서 본 사람은 아무도 없어요."
- text-free: hook plain
- gap_after: 0
- attach: LINE_turnaround, panel_038, panel_045

### panel_052 (P52)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: medium-wide, eye level
- in frame: CHANCELLOR right foreground, bursting in with GUARDS behind him, **no staff**, chin thrust toward the bleeding HOSTAGE (CH_CONTEMPT); HOSTAGE mid-left, standing, W1 (arrow still through his LEFT forearm, held at his side, a few gold drops), HO_PAIN_HELD, cropped at the thigh; the ENVOY **already standing** near him; PHYSICIAN arriving with the guards in the background (satchel, linen rolls)
- emotion: accusation
- key action: CHANCELLOR blames the hostage
- light & shadows: torches; HOSTAGE's feet out of frame
- bubble area: 2 bubbles, **upper-right 1/3, dark arcade arches above CHANCELLOR**, #1 above #2, tail to CHANCELLOR
- dialogue_ref: CHANCELLOR "저 짐승이 꾸민 겁니다." / CHANCELLOR "자기 팔에 화살을 맞혀 가면서까지—"
- text-free: yes
- gap_after: 0
- attach: BASIL_ref, HERON_hands, UR_ref

### panel_053 (P53)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past CHANCELLOR (foreground right: crimson cloak, back of his grey-templed head, RIGHT-shoulder brooch)
- in frame: QUEEN center-left facing him squarely, QU_DRY, body barely moving
- emotion: irony (reaction = panel_054's frozen smile)
- key action: none
- light & shadows: torch on her face
- bubble area: 2 bubbles, **upper-left 1/3, starry sky above her**, #1 above #2
- dialogue_ref: QUEEN "그럼 숙부님도 한번 맞아 보세요." / QUEEN "그러면 믿어 드릴게요."
- text-free: brooch shape only
- gap_after: 0
- attach: LINE_expressions, BASIL_ref

### panel_054 (P54)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: medium three-figure shot, eye level
- in frame: QUEEN left, raising her RIGHT hand, the face of the carnelian ring turned toward the captain, QU_COLD; CAPTAIN right, whole body turned to the QUEEN, **open right palm pressed flat on her breastplate**, short nod (CA_FLAT); CHANCELLOR background center, smaller, frozen smile, a vein at his temple (CH_CAUGHT)
- emotion: arrest by word + ring; R echo (title clearly to HER by the captain's body)
- key action: ring shown, palm on breastplate
- light & shadows: torches
- bubble area: #1 **upper-left, starry sky above the QUEEN** (hers); #2 **upper-right, dark arcade above the CAPTAIN** (captain's). Keep the ring (mid-left) and CHANCELLOR's face clear
- dialogue_ref: QUEEN "위층의 사수는, 내 반지로 가둡니다." / CAPTAIN "예, 폐하."
- text-free: ring circle plain
- gap_after: 0
- attach: LINE_hands, THORA_ref, BASIL_ref

### panel_055 (P55)
- scene_id: S5 / location: LOC_TERRACE (arcade) / light: LIGHT_TORCH
- size: ST / aspect: 16:9
- shot / camera: horizontal strip
- in frame: right: ASSASSIN_1 being dragged off by GUARDS, hood pulled off: hollow-cheeked man in his 30s, cropped black hair, crooked nose; left edge, at the other end of the frame: CHANCELLOR's eyes following him (CH_CAUGHT, half face)
- emotion: thread for EP2 (E1)
- key action: removal of the crossbowman
- light & shadows: torches
- bubble area: none (silent)
- text-free: yes
- gap_after: 60
- attach: BASIL_ref, panel_045

### panel_056 (P56)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: medium two-shot (plus physician), eye level
- in frame: QUEEN left, standing **an arm's length away**, holding out a folded clean white linen cloth in her RIGHT hand; HOSTAGE right, three-quarter to camera, W2: LEFT coat sleeve rolled up to the elbow, arrow removed, the PHYSICIAN (far right / near side) wrapping his LEFT forearm in clean white linen; with his RIGHT hand (scar) he takes the cloth's far end; **their fingers do not touch**, the cloth's length between them
- emotion: care without touch
- key action: the cloth handed over
- light & shadows: torches; HOSTAGE cropped at the hip
- bubble area: 1 bubble, **upper-left 1/3, starry sky above her**
- dialogue_ref: QUEEN "마지막 매듭은 직접 매요."
- text-free: linen plain, no pattern
- gap_after: 0
- attach: LINE_hands, HERON_hands, panel_045

### panel_057 (P57)
- scene_id: S5 / location: LOC_TERRACE (SHORT) / light: LIGHT_TORCH
- size: M / aspect: 1:1
- shot / camera: medium two-shot
- in frame: HOSTAGE right foreground, tying the clean white cloth around his LEFT forearm himself (knot in his hands, lower right), lifting his head; QUEEN left mid-ground; their eyes meet, neither looks away
- emotion: gaze ⑥ — the relationship line overtakes the event line
- key action: he knots it himself
- light & shadows: torches dimmer, softer contrast
- bubble area: none (silent)
- text-free: yes
- gap_after: 480 (time cut → midnight)
- attach: HERON_hands, LINE_expressions, panel_045

## B9 · 문틈 — 로맨틱 클리프행어 (P58–P64)

--- SCENE BREAK --- S6 · LOC_ROOMS · midnight · interior

(S6 공통: S3과 같은 두 방과 연결문, 자물쇠·열쇠는 그의 쪽 그대로. 빛은 **그녀 쪽 벽감의 기름 등잔 하나**(열린 기름 등잔, 방 전체를 꿀색으로 칠하지 않는다). 침대는 프레임 밖, 프롬프트에 쓰지 않는다. HOSTAGE 왼팔 **W3**(직접 감은 흰 천, 희미한 청동빛 얼룩). 날개 그림자는 이 장면에서 panel_061에만(관뿔이 보여도 된다). 거리를 줄이는 몸은 끝까지 QUEEN, HOSTAGE는 다가오지 않는다, 오른손은 편 채.)

### panel_058 (P58) ★ pair of panel_028
- scene_id: S6 / location: LOC_ROOMS (FULL, from her room) / light: LIGHT_LAMP
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: her POV from inside her room, eye level
- in frame: the connecting door **open a palm's width, opened from his side**; through the gap his dark room; the black iron key still in his side's lock catching one point of lamplight; on her side of the wall a single small open oil lamp in a niche beside the door; crimson wall hanging at the left edge. No people
- emotion: an invitation that is not a demand
- key action: none
- light & shadows: amber lamp pool on her side, deep brown-black beyond the gap
- bubble area: none (silent)
- text-free: yes
- gap_after: 60
- attach: panel_028, panel_021
- note: S6 anchor. Make after panel_028

### panel_059 (P59)
- scene_id: S6 / location: LOC_ROOMS (SHORT, his room) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: medium, inside his room, eye level
- in frame: QUEEN left, having opened the door wider and stepped one step into his room, backlit by the glowing doorway with the lamp behind her; HOSTAGE right, near the plain white inner wall, standing aside out of the beam, not approaching, W3 cloth on his LEFT forearm, HO_WAIT
- emotion: Q1 asked; she crosses the threshold
- key action: her step in
- light & shadows: light beam from the doorway across the floor; he is outside the beam (no direct light on him, feet in darkness)
- bubble area: 1 bubble, **upper-left 1/3, the dark upper corner of the chamber above the doorway glow**
- dialogue_ref: QUEEN "왕이 왜 남의 나라 볼모가 돼요?"
- text-free: yes
- gap_after: 60
- attach: LINE_turnaround, HERON_turnaround, panel_058

### panel_060 (P60)
- scene_id: S6 / location: LOC_ROOMS (SHORT, his room) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: close-up above the shoulders
- in frame: HOSTAGE face center-right, half lit by the light from the doorway (screen left), straight eyes, wide oval pupils, HO_STILL
- emotion: truth without telling
- key action: none
- light & shadows: warm side light, the other half in darkness
- bubble area: 2 bubbles, **upper-left 1/3, dark upper corner of the chamber**, #1 above #2, tail to him
- dialogue_ref: HOSTAGE "아직은 말 못 합니다." / HOSTAGE "거짓말은 하지 않습니다."
- text-free: yes
- gap_after: 80
- attach: HERON_expressions

### panel_061 (P61) ★ borrowed wings
- scene_id: S6 / location: LOC_ROOMS (SHORT, his room) / light: LIGHT_LAMP (lamp now in front of her)
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: side view, vertical, eye level (fixed staging exception, style-bible §5-3)
- in frame: left: the glowing doorway with the lamp in the niche; QUEEN center-left, turned toward the glowing doorway, standing in the beam, glancing back over her shoulder toward the wall behind him; HOSTAGE center-right **one step behind her, unmoved**, looking at the wall beside him, HO_WAIT, right hand open at his side; behind him the plain white wall: **her winged shadow falls on it so the two wings lie over his shoulders** (`SHADOW_CORE` + `SHADOW_CROWN`, quietly); the dragon's head high on the upper wall, **not overlapping his head**
- emotion: title payoff; the shadow is the only thing that touches him (composition, not magic)
- key action: none; they do not touch
- light & shadows: lamp in front of her casts her shadow back onto the wall behind him; `the tall man casts nothing on the wall` — only her shadow; her shadow may fall across his body
- bubble area: 1 bubble, **bottom 1/3, the dark floor in front of them**, tail up to him. Keep the wings, the dragon head and both faces clear
- dialogue_ref: HOSTAGE "물러서라고 하면, 물러서겠습니다."
- text-free: yes
- gap_after: 120
- attach: WINGED_SHADOW_crown, HERON_turnaround, LINE_turnaround
- note: scene negative `No dragon body, no smoke, no glow.` + Avoid line P46/P61 version (`on any person`). If Flow draws his own shadow on the wall: crop/edit, or REGEN (proof shot). 4 variants

### panel_062 (P62)
- scene_id: S6 / location: LOC_ROOMS (SHORT, his room) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: medium two-shot, eye level
- in frame: QUEEN left, turning not to the doorway but toward HIM, taking the half step herself; lamplight on her profile; HOSTAGE right, unmoved, RIGHT hand open at his side, HO_WAIT
- emotion: restraint ② — he waits; she answers with her body first
- key action: her half step (only hers)
- light & shadows: amber on her profile, he in half shadow
- bubble area: none (silent)
- text-free: yes
- gap_after: 160
- attach: LINE_expressions, HERON_turnaround, panel_058

### panel_063 (P63)
- scene_id: S6 / location: LOC_ROOMS (SHORT, his room) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder close-up past HIM (foreground right: his charcoal high neckline, black hair, shoulder out of focus)
- in frame: QUEEN face center-left, looking up at him, QU_BARE: no corner smile, the irony gone, a breath gathered at her lips
- emotion: decision ⑤ — consent chosen in words (the last line)
- key action: she breathes once
- light & shadows: lamplight from the side on her face
- bubble area: 1 bubble, **upper-left 1/3, dark upper corner of the chamber**
- dialogue_ref: QUEEN "…안 할 거예요. 그 말."
- text-free: yes
- gap_after: 560
- attach: LINE_expressions, HERON_turnaround

### panel_064 (P64)
- scene_id: S6 / location: LOC_ROOMS (SHORT, his room) / light: LIGHT_LAMP
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: extreme close-up, profiles facing each other
- in frame: **top third only:** QUEEN's face at left in profile looking up (smoke-grey eye), HOSTAGE's face at right in profile looking down (matte gold eye, vertical pupil widened into a wide oval under the lamp); the empty space between their eyes and lips is the subject — **one breath apart, not touching, no kiss**. Bottom 2/3: deep brown-black darkness
- emotion: cliffhanger; the held breath
- key action: none
- light & shadows: a single amber lamp glow rims both faces from below-left
- bubble area: no dialogue; **end caption area = bottom 1/3, calm darkness** (viewer draws the Khmer end caption)
- dialogue_ref: caption (viewer): "— 2화에 계속 —"
- text-free: yes
- gap_after: 640
- attach: LINE_expressions, HERON_expressions, panel_005
- note: pupil shape matches panel_005 in kind (vertical), now wide. 4 variants

---

## 5. 점검

- 패널 64 = 대본 P01–P64, panel_001–panel_064 연속. 대사 패널 36, 말풍선 50, 패널당 최대 2. SFX 패널 6(002, 031, 036, 041, 044, 045). 끝 캡션 1(064).
- XL 6: 001, 004, 038, 046, 061, 064 (붙어 나오는 XL 없음). L 11: 003, 011, 013, 020, 021, 029, 041, 045, 047, 049, 058. ST 6: 012, 027, 033, 043, 044, 055. 나머지 M.
- gap_after: P1–P12 최대 200(012) · 큰 멈춤 046 320 → 047 400 → 050 440 → 057 480 → 063 560 → 064 640.
- 무대사 연속: 043–046(액션 4컷, 044·045 효과음) 예외 외 3컷 이하.
- 관뿔: 046 처음, 그 뒤 061. `WINGED_SHADOW_crown` 첨부는 046 · 061만.
- 닿음 0: 022 · 045 · 056 · 061 · 064에 "not touching" 명시. 사슬 0. 상처는 LEFT forearm만(045–048, 050, 052, 056–064), 049는 W0.
- 반지 RIGHT index: 006, 009, 022, 036, 054, 056. 흉터 RIGHT hand: 002, 022, 025, 028, 031, 056.
- 몸짓 015 → 025 → 047. 편 손바닥(CAPTAIN) 037 · 054. HOSTAGE 주먹 0.
- 대체 구도(fallback) 메모: **046** HOSTAGE를 프레임 밖으로(§9 #5를 기본으로 채택) · **029–030** 날개 그림자 머리를 "탁자 그림자 속" 대신 "프레임 아래 가장자리 밖"으로(화로가 탁자 뒤라 물리적으로 맞추려고) · 004/046 §8-6 대안은 3회 실패 시에만 · L 3:4 없으면 1:1(020, 041만 9:16 허용, 003·049는 같은 비율) · B8 왼팔 상태 W1/W2 표기(위 B8 머리말).
