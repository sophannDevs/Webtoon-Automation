# EP02 「오늘은 여기까지」 샷리스트 (55 panels)

- 작성: panel-director · 2026-11-24 · Phase 4 (Flow-by-hand mode, Khmer edition)
- 입력: `03_episode/ep02_script_final.md`(gate OK: Khmer review READY round 1, sha256 d163b3d002a3…; 읽기만), `03_episode/ep02_beatsheet.md`(크기 · gap · 표지), `04_visual/style-bible.md` §1–§15(특히 §15 EP02 추가), `04_visual/character-sheets.md` §1–§10(특히 §10), `04_visual/ep01_shotlist.md`(형식, panel_058–064 무대), `02_story/tension-curve.md` EP2 행, `00_input/brief.md` LOCKED 1–11 · rulings A–AC
- 쓰는 사람: letterer(bubble area → `art_space`, `gap_after`), prompt-smith(Flow 프롬프트), panel-validator, quality-reviewer
- **panel_NNN = 대본 PNN** (panel_001 = P01 … panel_055 = P55). 번호 · 순서 · 무대사 위치는 대본 그대로.
- 합계: **55 panels** · XL 4 (P01, P13, P44, P55) · L 8 (P19, P21, P26, P34, P37, P40, P48, P53) · M 38 · ST 5 (P12, P38, P43, P45, P54) · 대사 패널 32 · 말풍선 50 · 효과음 패널 1 (P35) · 끝 캡션 1 (P55) · 완전 무대사 22 + 효과음만 1

## 0. prompt-smith에게 먼저 (고정 규칙)

1. **인물 이름은 Flow 프롬프트에 절대 쓰지 않는다** (ruling M). 화면 묘사는 역할 이름으로만: **QUEEN** · **HOSTAGE** · **CHANCELLOR** · **ENVOY** · **CAPTAIN**. 이름 없는 역할은 character-sheets §7 · §10-2 토큰(PHYSICIAN, CROSSBOWMAN_DEAD, JAILER, LORDS, LORDS_VOTE, LORD_HORN, GUARDS, SERVANTS, LATE_KING_MEMORY, QUEEN_HAND_MEMORY). `dialogue_ref`의 대사 문구는 letterer용 참고이며 **프롬프트에 넣지 않는다**.
2. **이미지에 글자 0.** 말풍선 · 효과음 · 끝 캡션은 뷰어가 크메르어로 그린다. 대사 패널은 `bubble area`를 `Keep <…> as calm, empty background with no important details (a speech bubble will be added there later).`로 옮긴다(style-bible §6-9). 모든 프롬프트 마지막 문장은 `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
3. **글자를 실을 수 있는 물건은 모두 blank:** 구리빛 비늘(PROP_SCALE, 완전히 민 면, 무늬 · 새김 없음), 깃발(흰 해 원반뿐), 옥좌 뒤 부조(해와 막 날개뿐), 섭정의 지팡이(새김 없음), 문 · 빗장 · 미닫이 덧문 · 열쇠 꾸러미(민 나무 · 민 쇠, 번호 · 표식 없음), P38의 낡은 문(PROP_HOSTAGE_DOOR, 표식 · 긁힘 · 새김 없음), 의원 가방(민 가죽), 반지 돌(작은 민 원 하나), 삼베 자루(PROP_SACK). **조약 3조는 말로만**: 두루마리 · 비문 · 판결문 · 표결 용지는 존재하지 않는다. 난간 돌의 금(P35)과 긁힌 자국(P36)이 글자처럼 보이면 재생성.
4. **금지 낱말 (프롬프트 어디에도, 부정문으로도):** HOSTAGE 쪽 chain, shackle, cuff, collar, bound, captive, prisoner, slave, leash / LOC_CELLS 쪽 cage, bars, prison, cell. 이 샷리스트의 영어 문장은 이미 이 낱말 없이 썼다(아래 회랑의 방 = `small rock-cut room`, 문 = `heavy dark oak door with a thick plain iron bolt`). HOSTAGE가 나오는 패널은 character-sheets §2-9 표준 장면 부정어(EP2에는 갈고리 판 · P46/P61 판이 필요한 패널이 없다; P12는 HOSTAGE 없음).
5. **가드레일 [잠금]:** 두 주인공은 **한 번도 닿지 않는다**(P01 · P02 · P27 · P44에 명시). 사슬 · 족쇄 · 우리 · 목줄 0. 침대(프레임 밖, 프롬프트에 쓰지 않음) · 키스 · 노출 0. HOSTAGE는 주먹을 쥐지 않는다(P04 · P10 · P35 모두 편 손). 시신은 끔찍하지 않게(상처 · 피 · 멍 · 부패색 없음).
6. **좌우 표지:** QUEEN 반지 = RIGHT index · HOSTAGE 흉터 = RIGHT hand back · 흰 천/붕대 = LEFT forearm/wrist · CHANCELLOR 브로치 = RIGHT shoulder · ENVOY 흉터 = LEFT temple→cheek · CAPTAIN 흰 머리 줄 · 팔찌 · 칼 = LEFT.
7. **HOSTAGE 왼팔:** P01–P11 = **W3** (`his LEFT coat sleeve rolled up to the elbow, his LEFT forearm wrapped in a clean white linen cloth he tied himself, a faint dull-bronze stain on the cloth`) · P13–P55 = **W4** (`both coat sleeves down to the wrist; the edge of a clean white linen wrap just visible above his LEFT wrist under the sleeve`). P10 · P27 · P39는 흰 천 끝이 **보이게**.
8. **그림자 규칙:** QUEEN은 그림자 둘(작은 사람 그림자 + 날개 그림자). **HOSTAGE는 그림자를 만들지 않는다**: 발을 프레임 밖, 어둠 속, 또는 "밝은 빈 돌/벽"을 긍정문으로(부정어 `no shadow under him` 금지, style-bible §9). **증거 컷 = P13 · P26 · P34 · P37** (그의 그림자가 생기면 REGEN). ENVOY · CAPTAIN · 다른 사람은 보통 그림자. **날개 그림자의 머리(관뿔)는 EP2 어디에도 보이지 않는다**: 천장 쪽 잘림 · 프레임 밖 · 궁륭 어둠 속 · 위에서 본 작은 점. **`WINGED_SHADOW_crown`은 EP2 어느 패널에도 첨부하지 않는다** [잠금]. 날개 그림자 패널의 장면 부정어 = `No dragon body, no horns visible, no smoke, no glow.`
9. **첨부는 패널당 3장 이하.** 매치 컷은 앞 컷 이미지를 첫 첨부로(style-bible §5-4).
10. **만드는 순서 (앵커 먼저):** panel_001(연결문 한밤) → panel_006(복도 문간) → panel_013(옥좌 홀, **P14–P26 전에**) → panel_027(회랑 정오) → panel_034(테라스 정오) → panel_037(아래 회랑) → panel_040(안쪽 방 안, **P41–P46 전에**) → panel_041(**P43 전에**) → panel_048(안뜰). 장면마다 같은 날 · 같은 모델로 이어서.

## 1. 화면비 · 대체 규칙

| size | aspect | Flow에 없을 때 |
|---|---|---|
| XL | 9:16 | (항상 있음) |
| L | 3:4 | **1:1**. 예외: **panel_037만 9:16 허용**(가파른 돌계단 → 아래 회랑의 세로 깊이가 핵심). 나머지 L(019, 021, 026, 034, 040, 048, 053)은 1:1 |
| M | 1:1 | — |
| ST | 16:9 | — |

- XL 4개는 모두 풀블리드. 말풍선이 있는 XL은 **panel_044** 하나(위쪽 궁륭 어둠을 크게). panel_055는 말풍선 없음, 끝 캡션 자리만(아래 어둠).
- 짝 컷: **panel_041 ↔ panel_043** 같은 각도 · 같은 손 모양(043 aspect는 ST 16:9 그대로, 041은 M 1:1 — 비율이 달라도 손의 각도와 화면 속 위치를 맞춘다. 043 생성 시 041을 첫 첨부).

## 2. 레퍼런스 카드 이름 (attach 줄에 쓰는 이름)

`04_visual/refs/<이름>.png` (EP1 카드 12장 재사용, ruling Z). **파일 이름은 문서용이다. 프롬프트 본문에는 이름을 쓰지 않는다.**

| attach 이름 | 프롬프트 속 역할 | 쓰임 |
|---|---|---|
| LINE_turnaround | QUEEN | 전신 · 상반신 |
| LINE_expressions | QUEEN | 얼굴이 큰 컷 |
| LINE_hands | QUEEN | 반지 손 컷 |
| HERON_turnaround | HOSTAGE | 전신 · 상반신 |
| HERON_expressions | HOSTAGE | 얼굴이 큰 컷 |
| HERON_hands | HOSTAGE | 흉터 손, 왼팔 W3/W4 |
| BASIL_ref | CHANCELLOR | 전신 · 얼굴 |
| UR_ref | ENVOY | 전신 · 얼굴 · 눈 내림 몸짓 |
| THORA_ref | CAPTAIN | 전신 · 얼굴 · 편 손바닥 자세 |
| WINGED_SHADOW_top / WINGED_SHADOW_side | — | 날개 그림자 (top = 옥좌 홀, side = 등잔 · 손등잔 실내) |
| ~~WINGED_SHADOW_crown~~ | — | **EP2 사용 금지** |

**패널 앵커 (이미지 파일):**
- EP1 확정 패널 = `05_panels/ep01/panel_NNN.png` (art-director가 지정한 것만: panel_058 · panel_061 연결문 한밤, panel_028 자물쇠 · 열쇠, panel_052/056 의원, panel_055 석궁수 얼굴, 그 밖에 장소 배치용 panel_013 회랑 · panel_037/045 테라스 · panel_051 갈고리 자리). EP1 이미지가 아직 없으면 그 줄은 비우고 카드만 붙인다(지어내지 않는다).
- EP2 패널 = `05_panels/ep02/panel_NNN.png` (attach 줄에는 `panel_NNN`으로 적는다).

## 3. 장소 목록 (scene_id ↔ location ↔ 배경 한 줄)

| scene_id | location | panels | light | 배경 한 줄 |
|---|---|---|---|---|
| S1 | `LOC_ROOMS` (연결문 양쪽, EP1 §7-3 FULL/SHORT + 그녀의 방 SHORT) | 001–005 | LIGHT_LAMP (제0일 한밤) | 반원 아치 참나무 연결문으로 이어진 두 바위 방, 자물쇠 · 열쇠는 그의 쪽, 그녀 쪽은 떼어 낸 자국 · 진홍 벽걸이, 그녀 쪽 벽감의 기름 등잔 하나, 그의 방 흰 벽 |
| S2 | `LOC_ROOMS` (DOORWAY, 복도 쪽 문간) | 006–011 | LIGHT_DOORWAY_MIDNIGHT | 그녀 방의 열린 복도 문, 짧고 어두운 바위 복도, 몇 걸음 아래 그의 방 민 참나무 복도 문(바깥쪽 자물쇠 · 빗장 없음), 문간에서 흘러나온 호박빛만 |
| S3 | `LOC_TERRACE` (남쪽 끝 난간) | 012 | LIGHT_TORCH (같은 그믐밤, 달 없음) | 협곡 위 반원 테라스 남쪽 끝, 허리 높이 민 난간, 횃불 둘, 남서쪽 멀리 관문 실루엣 |
| S4 | `LOC_THRONE` (FULL + SHORT 4) | 013–026 | LIGHT_THRONE_MORNING (제1일 오전) | 바위를 판 높은 홀, 궁륭의 둥근 채광 우물에서 내려온 흰 햇빛 한 줄기가 통로 앞쪽 바닥에 빛 웅덩이, 일곱 단 흰 계단 위 흰 돌 옥좌, 뒤 벽 해 원반+두 막 날개 부조, 셋째 단 옆 낮은 돌 의자, 원기둥 두 줄, 진홍 깃발(흰 해 원반), 꺼진 쇠 화로 |
| S5 | `LOC_CORRIDOR` | 027–033 | LIGHT_CORRIDOR_NOON | 서향 열주 회랑, 해가 높아 기둥 사이 흰 빛 조각이 짧다, 안쪽 회칠 벽은 고른 그늘, 건너편 붉은 띠 협곡 |
| S6 | `LOC_TERRACE` (정오) | 034–036 | LIGHT_TERRACE_NOON | 같은 테라스의 정오: 눈부신 흰 돌, 구름 없는 옅고 단단한 하늘, 마른 협곡과 은빛 물줄기, 남서쪽 멀리 관문 실루엣 |
| S7 | `LOC_CELLS` (FULL + SHORT 4) | 037–042, 044–047 | LIGHT_CELLS (제1일 오후, 햇빛 없음) | 가파른 돌계단 아래 창 없는 낮고 긴 원통 궁륭 회랑, 가운데 마른 배수 홈, 머리 위 벽감 등잔, 계단 발치 걸상 · 등잔 · 못에 걸린 쇠 열쇠 꾸러미, 한쪽에 민 참나무 문들, 안쪽 끝의 작은 바위 방(돌 걸상, 먼지 앉은 마른 바닥, 마른 짚) |
| S7M | 장소 없음 (회상 클로즈업) | 043 | LIGHT_MEMORY_DAWN | 흰 리넨 베개, 젖은 회색 머리, 선왕의 손과 반지, 그녀의 맨손 끝만. **방 · 벽 · 덧창 · 수반을 그리지 않는다.** S7 사이에 끼는 의도된 예외 |
| S8 | `LOC_ROOMS` (COURTYARD + SHORT 안뜰) | 048–055 | LIGHT_COURT_DUSK (054만 LIGHT_COURT_SKY) | 바위를 깎은 하늘로 열린 네모 안뜰, 마른 돌 수반, 늙은 올리브나무, 한쪽 벽 위 두 방의 창(열린 덧창), 건너편 닫힌 덧창 하나, 사절관 쪽 낮은 아케이드, 모퉁이 입구 아치 |

- 같은 scene_id 안에서 장소 · 시간대 · 실내외를 바꾸지 않는다. 시간 경과는 빛으로만(캡션 없음): 등잔 → 손등잔 → 채광 우물 → 짧은 정오 빛 → 등잔 → 노을.
- **기본 무대 축:** 두 주인공이 마주 서면 **QUEEN 화면 왼쪽, HOSTAGE 화면 오른쪽** (S1 · S5 · S7). S1 P01은 EP1 panel_061/064의 측면 축을 그대로 이어받는다(왼쪽 = 빛나는 연결문 · 그녀의 방 쪽, 오른쪽 = 그의 방 흰 벽).
- **S4 축 [고정]:** 옥좌가 화면 위(먼 쪽), 홀 입구가 카메라 쪽. **CHANCELLOR의 돌 의자 = 옥좌를 바라볼 때 왼쪽, HOSTAGE가 선 기둥 = 오른쪽.** ENVOY는 홀 맨 뒤 오른쪽 기둥 그늘(입구 쪽). CAPTAIN은 옥좌 오른쪽 옆. P13에서 정한 대로 P26까지. 뒤집히면 재생성.
- 키: QUEEN 눈높이 = HOSTAGE 턱. 투샷마다.

## 4. 이 샷리스트가 지키는 연출 조건

| # | 조건 | 패널 |
|---|---|---|
| 1 | EP1 P64 직결: 측면 세로 축 유지, **그녀가 먼저 물러난다**, 그는 제자리, 닿지 않음, 열쇠는 그의 쪽 | 001–005 |
| 2 | G1: 그의 오른손이 열쇠 쪽으로 올라갔다 편 채 내려간다, 열쇠는 돌아가지 않음(독자만) | 004 |
| 3 | 우연 아님: 복도 문을 여는 것은 그녀, CAPTAIN은 이미 기다리던 자세(빈손이 내려져 있고 문이 열리자 편 손바닥을 흉갑에) | 006 |
| 4 | D2: 비늘은 민 구리빛 한 장, CAPTAIN의 편 오른 손바닥 위 · 그의 굳는 얼굴은 그녀가 등진 채(독자만) | 009, 010 |
| 5 | D1: 갈고리는 토라가 거두고 아무도 들여다보지 않음 → P36 긁힌 자국만 | 012, 036 |
| 6 | 옥좌 홀: 위에서 본 날개(옆모습 금지), 그는 서 있고 빛 속 · 뒤 바닥 밝음, 우르가 뒤 기둥 그늘에서 본다 | 013, 026 |
| 7 | 반어 → 리액션 컷: P15 → P16, P19 → P20 | 015–016, 019–020 |
| 8 | 표결 = 편 오른손뿐(용지 없음), 3조는 말로만, P23 숙부는 손을 들지 않음 | 021–023 |
| 9 | 이해충돌: 둘 다 정면으로 말하고 결정은 그녀, 그는 사람의 끄덕임(무릎 · 주먹 아님) | 027–033 |
| 10 | 회차의 골: 그가 혼자, 편 손 아래 난간 돌이 깨짐(주먹 아님), 그림자 없음 | 034–036 |
| 11 | 넷째의 문: 표식 없는 낡은 문 앞에서 그의 걸음만 반 박자 늦음, 두 여자는 못 봄 | 038 |
| 12 | 반전 그림 단서: 마른 바닥 · 젖은 머리(P40) → 손끝 물방울(P41) → 같은 각도 회상, 반지는 선왕 손에만(P43) → 반어 벗겨진 얼굴(P44) → 침묵(P45) | 040–045 |
| 13 | 간수는 배경에만(얼굴 반쯤 어둠 / 먼 실루엣) | 037, 045 |
| 14 | 의원 = EP1 P52/P56의 그 의원, 눈길이 그의 왼팔로 한 번(P39), 가방 끈(P45) | 039, 042, 045, 047 |
| 15 | 우르의 몸짓은 그녀에게 짧은 눈 내림까지(무릎 · 주먹 · R 없음), 닫힌 덧창은 바깥면까지 | 050, 052 |
| 16 | 클리프: 우르의 얼굴 → 빈 하늘 → 그녀의 얼굴 XL, 날개 그림자는 그늘에 녹아 안 보임 | 053–055 |
| 17 | 큰 멈춤 gap 사다리 P12 300 → P26 320 → P36 360 → P44 400 → P45 440 → P53 480 → P54 560 → P55 640, 첫 11컷은 120 이하 | gap_after |

---

## B1 · 오늘은 여기까지 (P01–P05)

--- SCENE BREAK --- S1 · LOC_ROOMS (connecting door, both rooms) · midnight (day 0) · interior

### panel_001 (P01)
- scene_id: S1 / location: LOC_ROOMS (SHORT, his room + the glowing connecting doorway) / light: LIGHT_LAMP
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: side view, vertical, waist height — **the camera pulls back from EP1 panel_064's two profiles** on the same axis as EP1 panel_061 (left = the glowing doorway into her room with the lamp in the niche beside it; right = his plain white wall)
- in frame (left → right, faces in the upper third): at left the round-arched connecting doorway glowing amber; QUEEN center-left, **one step back, the heel of her shoe just crossing the threshold onto her room's floor**, still facing him, lamplight rimming her outline from behind; the empty space between them is the center of the frame; HOSTAGE center-right **exactly where he stood**, unmoved, RIGHT hand open at his side, W3 (LEFT forearm in white linen); behind him the plain white wall, bright and bare; at the far left edge, small, the black iron box lock with the key in it on his side of the door leaf
- emotion: QUEEN — wanting, yet stopping herself (no irony, no corner smile); HOSTAGE — no surprise, acceptance (HO_WAIT)
- key action: she withdraws first; they do not touch
- light & shadows: single oil lamp in the niche on her side; her winged shadow (`SHADOW_CORE` + `SHADOW_SIDE_HIDDEN`, neck rising **beyond the top frame edge**) is sliding off his shoulders and his wall toward the doorway, following her body; most of his wall is already bare; he casts nothing on the wall (`the tall man casts nothing on the wall`)
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: 05_panels/ep01/panel_061.png, WINGED_SHADOW_side, LINE_turnaround
- note: scene negative `No dragon body, no horns visible, no smoke, no glow.` + HOSTAGE standard Avoid. No bed anywhere (do not write the word). 4 variants. S1 anchor (EP1 panel_058 may replace panel_061 if panel_061 is missing)

### panel_002 (P02)
- scene_id: S1 / location: LOC_ROOMS (SHORT, connecting door, her side) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past QUEEN (foreground left: her circlet, hair and right shoulder), eye level, looking through the half-open door into his room
- in frame: QUEEN standing just inside her own threshold, her **RIGHT palm flat on the door leaf** (on the door, not on him), the carnelian ring on the dark oak; beside her hand on the doorframe the pale unweathered patch of wood and four filled holes; the door half open; HOSTAGE one step inside his room at the edge of the lamplight, mid-ground right, W3, still
- emotion: QU_BARE — the irony gone; not a refusal, a pace
- key action: her hand on the door
- light & shadows: the lamp beside the door lights her hand and his face edge; his room beyond in brown-black; his feet in darkness
- bubble area: 1 bubble, **upper-left 1/3, the plain whitewashed wall above the door arch on her side, in dim light**, tail to QUEEN
- dialogue_ref: QUEEN "오늘은 여기까지예요."
- text-free: yes
- gap_after: 40
- attach: LINE_hands, HERON_turnaround, panel_001

### panel_003 (P03)
- scene_id: S1 / location: LOC_ROOMS (SHORT, connecting door) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: straight-on through the narrowing door gap, his eye level
- in frame: the door closing from her side; a narrowing vertical gap; one vertical line of lamplight splits HOSTAGE's face; straight eyes (gold, wide oval pupils), HO_STILL; foreground lower left: QUEEN's RIGHT hand (ring) on the door leaf, slowly pushing
- emotion: consent in one word, a beat late
- key action: the door closing
- light & shadows: the lamplight line is the only light on him; the rest deep dark
- bubble area: 1 bubble, **upper-right 1/3, the dark oak of the door leaf above the gap**, tail to the gap (HOSTAGE)
- dialogue_ref: HOSTAGE "예."
- text-free: yes
- gap_after: 0
- attach: HERON_expressions, LINE_hands

### panel_004 (P04)
- scene_id: S1 / location: LOC_ROOMS (SHORT, connecting door, his side) / light: LIGHT_LAMP (spill under the door)
- size: M / aspect: 1:1
- shot / camera: close-up from his side of the closed door
- in frame: the closed door; the black iron box lock with the plain black iron key (oval bow) in it; HOSTAGE's **open RIGHT hand** (scar on the back) half raised toward the key, stopped, palm open, beginning to lower; under the door one thin line of lamplight from her side
- emotion: G1 — he chooses not to lock (reader only)
- key action: the key stays unturned; no fist
- light & shadows: dark room, only the thin light line and a faint glint on the key
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: HERON_hands, 05_panels/ep01/panel_028.png
- note: match EP1 panel_028 (same lock and key shape and position). Lock must be on HIS side

### panel_005 (P05)
- scene_id: S1 / location: LOC_ROOMS (SHORT, her room) / light: LIGHT_LAMP
- size: M / aspect: 1:1
- shot / camera: medium, slight high angle
- in frame: QUEEN leaning her back against the closed connecting door (her side: no lock, only the pale patch and four filled holes), shoulders dropped, eyes closed; at the last moment her eyes open and her head turns toward the corridor door (frame right); crimson wall hanging at the edge; one lamp in a wall niche
- emotion: the cost of restraint (her side)
- key action: she breathes out, then turns to the corridor door
- light & shadows: lamp beside her; winged shadow on the wall and ceiling behind her (`SHADOW_SIDE_HIDDEN`), the neck running up **out of the top frame edge**
- bubble area: none (silent)
- text-free: yes
- gap_after: 60
- attach: LINE_expressions, WINGED_SHADOW_side, panel_001
- note: bed out of frame (do not write it). Scene negative as panel_001

## B2 · 자정 보고 (P06–P12)

--- SCENE BREAK --- S2 · LOC_ROOMS (DOORWAY, corridor side) · midnight (day 0) · interior

### panel_006 (P06)
- scene_id: S2 / location: LOC_ROOMS (DOORWAY) / light: LIGHT_DOORWAY_MIDNIGHT
- size: M / aspect: 1:1
- shot / camera: medium two-shot from beside the doorway, eye level
- in frame: QUEEN left, back straight, having just opened her chamber's corridor door herself, her face already a queen's face; CAPTAIN right, standing right beside the door, a small open clay hand lamp (short wick) in her LEFT hand, her **empty RIGHT hand already lowered — not a knocking hand** — now pressing her open right palm to her bronze breastplate as the door opens
- emotion: an ordered report, not an interruption
- key action: the door opened by QUEEN; CAPTAIN's palm-to-breastplate
- light & shadows: amber from the open chamber + the hand lamp; low warm light on faces; the passage in brown-black; winged shadow: at most a wing edge on the passage wall behind QUEEN, head out of frame
- bubble area: 2 bubbles, **upper 1/3, the dark passage ceiling and whitewashed wall above the doorway**: #1 upper-left (QUEEN), #2 upper-right (CAPTAIN)
- dialogue_ref: QUEEN "자정에 보고하라 했죠." / CAPTAIN "예, 폐하."
- text-free: yes
- gap_after: 0
- attach: LINE_turnaround, THORA_ref, panel_001
- note: S2 anchor

### panel_007 (P07)
- scene_id: S2 / location: LOC_ROOMS (DOORWAY) / light: LIGHT_DOORWAY_MIDNIGHT
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past QUEEN (foreground left, blurred), CAPTAIN's face center-right
- in frame: CAPTAIN looking straight into QUEEN's eyes, reporting; hand lamp below lighting her face from beneath; in the foreground QUEEN's eye just visible, stopping for an instant
- emotion: E1 → E2: the crossbowman has been silenced
- key action: the report
- light & shadows: low lamp light from below
- bubble area: 1 bubble, **upper-right 1/3, the dark passage beyond CAPTAIN**, tail to CAPTAIN
- dialogue_ref: CAPTAIN "감옥의 석궁수가 죽었습니다."
- text-free: yes
- gap_after: 40
- attach: THORA_ref, LINE_turnaround, panel_006

### panel_008 (P08)
- scene_id: S2 / location: LOC_ROOMS (DOORWAY, depth down the passage) / light: LIGHT_DOORWAY_MIDNIGHT
- size: M / aspect: 1:1
- shot / camera: deep view down the dark passage from the doorway, eye level
- in frame: foreground left: QUEEN's back (white gown, out of focus) and CAPTAIN's lamp; a few steps down the passage the plain oak corridor door of the smaller chamber (no lock or bolt outside) open from inside; HOSTAGE stepped out, standing at the very edge of the lamplight, W3, not approaching; only CAPTAIN's eyes glance at him
- emotion: distance of a few steps; he is not confined
- key action: he comes out on his own and stops
- light & shadows: he is at the light's edge; **his feet in darkness**
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: HERON_turnaround, THORA_ref, panel_006

### panel_009 (P09)
- scene_id: S2 / location: LOC_ROOMS (DOORWAY) / light: LIGHT_DOORWAY_MIDNIGHT
- size: M / aspect: 1:1
- shot / camera: high angle over the open palm (insert-like close-up)
- in frame: CAPTAIN's open RIGHT palm held out (hand lamp in her LEFT hand at the edge, bracer on the LEFT forearm); in the center of the palm **PROP_SCALE**: one single loose scale the size of the center of a palm, shield-shaped with one rounded end and one sharp point, slightly curved, matte reddish-copper with only its edge faintly brighter, smooth and completely plain, not glowing; QUEEN's RIGHT hand (ring) at the upper edge, **not touching it**, looking down
- emotion: evidence offered; D2 plant
- key action: the scale shown
- light & shadows: lamp from the side; scale edge catches a thin highlight only
- bubble area: 1 bubble, **upper-left 1/3, the dark passage floor/wall behind the hands**, tail to CAPTAIN (off the lower right)
- dialogue_ref: CAPTAIN "죽은 자의 주먹에 있었습니다."
- text-free: **the scale is completely plain: no pattern, carving or letter-like grain**; copper colour (not gold, not brass, not green)
- gap_after: 0
- attach: THORA_ref, LINE_hands
- note: the scale appears only here in EP2

### panel_010 (P10)
- scene_id: S2 / location: LOC_ROOMS (DOORWAY, passage) / light: LIGHT_DOORWAY_MIDNIGHT
- size: M / aspect: 1:1
- shot / camera: telephoto close-up on HOSTAGE a few steps away; foreground QUEEN's shoulder out of focus
- in frame: HOSTAGE's face hardening — gold eyes narrowed, jaw set (HO_RESTRAINT); his LEFT hand at chest height, fingers opening very slightly (not a fist), the **white linen on his LEFT forearm visible**; foreground left: QUEEN's blurred shoulder turned toward the scale, her back to him — she cannot see this face
- emotion: D2 — he knows the scale's bloodline (reader only); irony
- key action: none
- light & shadows: the edge of the lamplight on his face; the rest dark
- bubble area: none (silent)
- text-free: yes
- gap_after: 120
- attach: HERON_expressions, HERON_hands

### panel_011 (P11)
- scene_id: S2 / location: LOC_ROOMS (DOORWAY) / light: LIGHT_DOORWAY_MIDNIGHT
- size: M / aspect: 1:1
- shot / camera: medium, doorway, eye level
- in frame: QUEEN left, head raised, giving the order; CAPTAIN right, her hand already withdrawn (scale out of sight), continuing the report; background center, small and out of focus at the light's edge, HOSTAGE, face already composed
- emotion: speed of the unseen hand; handle to B3
- key action: orders exchanged
- light & shadows: amber doorway glow; HOSTAGE's feet in darkness
- bubble area: 2 bubbles, **upper 1/3, the dark passage ceiling**: #1 upper-left (QUEEN), #2 upper-right (CAPTAIN)
- dialogue_ref: QUEEN "시신은 그대로 둬요. 내가 직접 가서 봐요." / CAPTAIN "재상께서 첫 종에 옥좌 홀 회의를 부르셨습니다."
- text-free: yes
- gap_after: 0
- attach: LINE_turnaround, THORA_ref, panel_006

--- SCENE BREAK --- S3 · LOC_TERRACE (south end) · same moonless night · exterior

### panel_012 (P12)
- scene_id: S3 / location: LOC_TERRACE (SHORT, south end) / light: LIGHT_TORCH
- size: ST / aspect: 16:9
- shot / camera: horizontal strip at parapet height
- in frame: the south end of the waist-high parapet; CAPTAIN unhooking the grappling hook of dull twisted copper from the parapet, its rope coiled, putting it into a plain undyed hemp sack with no marks; two GUARDS with their backs turned, watching the canyon; far southwest the dark silhouette of the colossal gate; two iron torch stands; moonless starry sky
- emotion: D1 → EP4; nobody looks at the hook
- key action: the hook removed
- light & shadows: two torches; CAPTAIN and guards cast normal shadows
- bubble area: none (silent)
- text-free: hook and sack plain, no marks
- gap_after: 300
- attach: THORA_ref, 05_panels/ep01/panel_045.png, 05_panels/ep01/panel_051.png
- note: no moon. Same copper hook as EP1 panel_038/051

## B3 · 옥좌 홀 (P13–P26)

--- SCENE BREAK --- S4 · LOC_THRONE · mid-morning (day 1) · interior

### panel_013 (P13)
- scene_id: S4 / location: LOC_THRONE (FULL) / light: LIGHT_THRONE_MORNING
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: vertical wide from the entrance end, eye level slightly raised, axis straight up the center aisle (top = throne, bottom = aisle floor near camera)
- in frame (top → bottom): the round light well in the vault; carved sun-disc-between-two-membranous-wings relief; QUEEN on the white stone throne at the top of seven broad white steps, white mourning gown, gold circlet, small; CAPTAIN standing beside the throne (right of it); CHANCELLOR seated on the lower plain stone seat beside the third step **on the left**, holding the regent staff (PROP_REGENT_STAFF) upright; at the foot of the steps **on the right**, before a carved round column, HOSTAGE **standing** (not kneeling, nothing on his wrists), W4; LORDS in two lines between the columns; crimson banners with plain white sun discs; unlit iron fire baskets on tripods beside the dais; far back at the bottom-right edge in a column's shade, ENVOY small
- emotion: the court assembled around a secret
- key action: none
- light & shadows: one clean shaft of white daylight slants onto the front of the aisle floor in a bright oval pool; **winged shadow seen from above** (`SHADOW_CORE` + `SHADOW_TOP`): two broad wings laid over the throne steps and the floor before them, the head only a small blunt point, **not in profile**; lords and servants stand aside toward the light pool, away from the wings; **proof shot:** `the pale floor around and behind the tall man at the foot of the steps is evenly bright and bare, as if no one stood there`; ENVOY and lords cast normal soft shadows
- bubble area: none (silent)
- text-free: relief = sun disc + wings only; banners plain white sun disc; staff uncarved
- gap_after: 0
- attach: WINGED_SHADOW_top, LINE_turnaround, HERON_turnaround
- note: S4 anchor — make first, 4 variants. Fixes the axis (CHANCELLOR left, HOSTAGE right) for P14–P26. Scene negative `No dragon body, no horns visible, no smoke, no glow.` + HOSTAGE standard Avoid

### panel_014 (P14)
- scene_id: S4 / location: LOC_THRONE (SHORT, chancellor's seat) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: medium at waist height beside the third step
- in frame: CHANCELLOR rising with the staff, turning toward the court (frame right/down), one open palm shown to the court, a worried face (honeyed concern); behind him the white steps rising out of frame toward the throne; brooch on his RIGHT shoulder
- emotion: E1 → E2: the uncle already knows
- key action: he addresses her, but for the court to hear
- light & shadows: soft bounce light; cool blue-violet shade
- bubble area: 2 bubbles, **upper 1/3, the whitewashed wall and crimson banner above and behind him, softly out of focus**, #1 above #2, tail to CHANCELLOR
- dialogue_ref: CHANCELLOR "폐하, 어젯밤 짐승이 목숨을 노렸습니다." / CHANCELLOR "죽은 자의 손에서 용의 비늘이 나왔다지요."
- text-free: yes
- gap_after: 0
- attach: BASIL_ref, panel_013

### panel_015 (P15)
- scene_id: S4 / location: LOC_THRONE (SHORT, throne) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: slight low angle, medium close-up on the throne
- in frame: QUEEN on the throne, body almost still; her RIGHT thumb turning the ring on her RIGHT index finger a quarter turn; one corner of her mouth raised (irony)
- emotion: irony with a question inside (how did he know?)
- key action: the ring turn (thinking)
- light & shadows: soft light; the light well's shaft beside her, not on her
- bubble area: 2 bubbles, **upper 1/3, the plain whitewashed wall at the left of the carved relief, softly out of focus** (keep the relief's wings clear), tail to QUEEN
- dialogue_ref: QUEEN "소식이 빠르시네요." / QUEEN "나는 자정에야 들었는데요."
- text-free: yes
- gap_after: 0
- attach: LINE_expressions, LINE_hands, panel_013

### panel_016 (P16)
- scene_id: S4 / location: LOC_THRONE (SHORT, chancellor's seat) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: close-up
- in frame: CHANCELLOR's face: the end of his smile stiffens very slightly, then smoothly returns; his hand on the staff below
- emotion: reaction to the irony; the motion proposed
- key action: none
- light & shadows: soft even light
- bubble area: 2 bubbles, **upper 1/3, out-of-focus whitewashed wall and banner behind him**, #1 above #2
- dialogue_ref: CHANCELLOR "궁정의 일이니, 궁정이 먼저 알지요." / CHANCELLOR "상중에는 섭정을 세우시고, 저것은 지하에 두시지요."
- text-free: staff finial plain
- gap_after: 40
- attach: BASIL_ref, panel_013

### panel_017 (P17)
- scene_id: S4 / location: LOC_THRONE (SHORT, aisle / lords' line) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: medium, between lords' shoulders (foreground shoulders out of focus)
- in frame: two LORDS in the line covering their mouths with a hand, heads tilted, whispering; LORD_HORN (big, shaved head, grey-streaked beard, curved horn brooch) holding back a laugh; beyond them, at the foot of the steps on the right, HOSTAGE small, eyes lowered, motionless, in the light
- emotion: the whisper — seed of the delay's cost; irony (the "beast" is a king)
- key action: whispering
- light & shadows: soft; HOSTAGE stands in the light, his feet hidden behind the lords' shoulders
- bubble area: 1 whisper bubble, **upper-left 1/3, a crimson banner and column softly out of focus**, tail to the whispering lords
- dialogue_ref: LORD (whisper) "짐승에게 홀린 여왕이라더니…"
- text-free: brooches as plain shapes
- gap_after: 0
- attach: HERON_turnaround, panel_013

### panel_018 (P18)
- scene_id: S4 / location: LOC_THRONE (SHORT, steps) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: side view beside the steps
- in frame: CHANCELLOR having climbed a few steps, holding the regent staff **horizontally in both hands**, offering it, stopped at the height of QUEEN's knees; QUEEN seated (lap and hands visible, face at the frame top), her hands not moving
- emotion: A1 setup — she does not take it
- key action: the staff offered
- light & shadows: soft; the top-view wing edge on the steps under them
- bubble area: 1 bubble, **upper-right 1/3, the whitewashed wall beside the throne**, tail to CHANCELLOR
- dialogue_ref: CHANCELLOR "칠 일 된 왕관에는, 무거운 짐이지요."
- text-free: staff uncarved
- gap_after: 0
- attach: BASIL_ref, LINE_turnaround, panel_013

### panel_019 (P19)
- scene_id: S4 / location: LOC_THRONE (SHORT, throne) / light: LIGHT_THRONE_MORNING
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: slight low angle
- in frame: QUEEN leaning a little forward on the throne, looking at her uncle (out of frame lower right), not at the staff; the edge of the light shaft touching her circlet and one side of her face; the relief's wings above
- emotion: A1 payoff; immediate answer; double meaning (H1)
- key action: she leans in
- light & shadows: the shaft's edge on her; the rest soft shade
- bubble area: 2 bubbles, **upper 1/3, the plain whitewashed wall at the left of the relief**: #1 upper-left, #2 below it (H1 alone). Keep the relief's wings and her face clear
- dialogue_ref: QUEEN "칠 일이 아니라 열흘이에요." / QUEEN "왕관은 숨과 함께 넘어오니까요."
- text-free: yes
- gap_after: 0
- attach: LINE_expressions, LINE_turnaround, panel_013

### panel_020 (P20)
- scene_id: S4 / location: LOC_THRONE (SHORT, steps) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: frontal medium
- in frame: CHANCELLOR holding the staff, smile frozen, knuckles white on the staff; behind him the LORDS fallen silent, out of focus
- emotion: reaction
- key action: none
- light & shadows: soft
- bubble area: none (silent)
- text-free: yes
- gap_after: 60
- attach: BASIL_ref, panel_013

### panel_021 (P21)
- scene_id: S4 / location: LOC_THRONE (SHORT, aisle) / light: LIGHT_THRONE_MORNING
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: high wide over the aisle
- in frame: CHANCELLOR at the foot of the steps (left), withdrawing the staff, turned to the court, raising one open palm; LORDS_VOTE: several lords raising an open right hand palm forward at shoulder height, others hesitating with their hands still lowered — about half the line still hesitates; the palms half-floating in the shaft of light
- emotion: the vote = hands
- key action: hands begin to rise
- light & shadows: the shaft of daylight crossing the aisle; lords' soft shadows
- bubble area: 1 bubble, **upper-left 1/3, the plain upper whitewashed wall and a crimson banner**, tail to CHANCELLOR
- dialogue_ref: CHANCELLOR "그럼, 궁정의 뜻을 여쭙지요."
- text-free: **no papers, tablets or tokens; hands only**
- gap_after: 0
- attach: BASIL_ref, panel_013

### panel_022 (P22)
- scene_id: S4 / location: LOC_THRONE (SHORT, throne) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: looking up through the raised hands (foreground: half-raised open palms, blurred)
- in frame: between the blurred palms, QUEEN on the throne, neither standing nor raising a hand, speaking the law plainly
- emotion: decision ② begins; treaty article 3 spoken only
- key action: she speaks
- light & shadows: soft; palms in the shaft's light in the foreground
- bubble area: 2 bubbles, **upper 1/3, the whitewashed wall at the left of the relief**, #1 above #2, tail to QUEEN
- dialogue_ref: QUEEN "조약 3조." / QUEEN "볼모의 처우는 맡은 군주의 궁정이 정한다."
- text-free: **no scroll, no inscription, nothing written**
- gap_after: 0
- attach: LINE_expressions, panel_021, panel_013

### panel_023 (P23)
- scene_id: S4 / location: LOC_THRONE (SHORT, aisle) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: aisle eye level
- in frame: hands stopped mid-air, coming down one by one; the front LORD_HORN holding his up longest, then lowering it; CHANCELLOR (left, at the steps) **with his hands not raised**
- emotion: decision ② — the vote delayed; the uncle's hand stays hidden
- key action: hands lowering
- light & shadows: the shaft over the aisle
- bubble area: 2 bubbles (off-screen voice from the throne), **top 1/4, the dim upper wall toward the throne**, tails pointing up out of the top edge
- dialogue_ref: QUEEN (off-screen) "맡은 군주는 나예요." / QUEEN (off-screen) "표결은 내가 부를 때 열려요."
- text-free: yes
- gap_after: 0
- attach: BASIL_ref, panel_021

### panel_024 (P24)
- scene_id: S4 / location: LOC_THRONE (SHORT, foot of the steps) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past QUEEN high on the throne (foreground top-left: her shoulder and circlet), looking down at CHANCELLOR
- in frame: CHANCELLOR stepping back down to the foot of the steps, head tilted up
- emotion: cost of decision ②: a public trial promised; the timer
- key action: exchange
- light & shadows: soft; the top-view wing on the steps between them
- bubble area: 2 bubbles: #1 **lower-right, the pale floor beside CHANCELLOR** (his line), #2 **upper-left, the wall beside the throne** (her line). Keep both faces and the wing clear
- dialogue_ref: CHANCELLOR "그럼 언제 부르시렵니까?" / QUEEN "석궁수를 죽인 손을, 이 홀에 세우는 날에요."
- text-free: yes
- gap_after: 0
- attach: LINE_turnaround, BASIL_ref, panel_013

### panel_025 (P25)
- scene_id: S4 / location: LOC_THRONE (SHORT, chancellor's seat) / light: LIGHT_THRONE_MORNING
- size: M / aspect: 1:1
- shot / camera: medium
- in frame: CHANCELLOR sitting back on the stone seat, laying the staff across his knees, a smile with a worried face (a threat)
- emotion: the timer fixed
- key action: sitting
- light & shadows: soft
- bubble area: 1 bubble, **upper 1/3, the banner and wall behind him**
- dialogue_ref: CHANCELLOR "그날이 늦어지면, 궁정의 손이 먼저 올라가겠지요."
- text-free: yes
- gap_after: 40
- attach: BASIL_ref, panel_013

### panel_026 (P26)
- scene_id: S4 / location: LOC_THRONE (FULL, from the back) / light: LIGHT_THRONE_MORNING
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: deep perspective from beside ENVOY's column at the back of the hall (right side), looking up the aisle to the throne
- in frame (top → bottom): the sun-disc-and-wings relief; QUEEN on the throne below it; on the steps and floor the top-view winged shadow; at the foot of the steps (right) HOSTAGE standing in the light, eyes lowered; foreground right edge, in shade: ENVOY's profile (scar on his LEFT temple–cheek toward camera), gold eyes resting on QUEEN
- emotion: the irony engine — hiding the king while protecting him; ENVOY sees her
- key action: none
- light & shadows: the shaft; top-view wings (head a small point, not in profile); **proof shot:** `the pale floor behind the tall man at the foot of the steps is evenly bright and bare`; ENVOY casts a normal shadow in the shade
- bubble area: none (silent)
- text-free: yes
- gap_after: 320
- attach: panel_013, UR_ref, WINGED_SHADOW_top
- note: 4 variants. Scene negative as panel_013

## B4 · 이해충돌 (P27–P33)

--- SCENE BREAK --- S5 · LOC_CORRIDOR · near noon (day 1) · exterior colonnade

### panel_027 (P27)
- scene_id: S5 / location: LOC_CORRIDOR (FULL) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: side two-shot, walking, eye level, cropped above the knees
- in frame: QUEEN left and HOSTAGE right walking side by side **one step apart, not touching**, columns on the open side (behind them), the whitewashed inner wall on the near side; a SERVANT ahead stepping around toward the sunny column side to avoid the dark pool at her feet; CAPTAIN following far behind, small; QUEEN's eyes going to HOSTAGE's LEFT sleeve end where **the edge of the white linen wrap shows above his LEFT wrist** (W4)
- emotion: care without touch (her glance)
- key action: walking; her glance at his wrist
- light & shadows: high sun, only short white patches between the columns; short crisp blue-violet shadows near the column bases; her winged shadow is a short dark pool at her feet only, its neck lost in a column's shadow band; his feet out of frame
- bubble area: 2 bubbles, **upper 1/3, the whitewashed inner wall in soft even shade**: #1 upper-left (QUEEN), #2 upper-right (HOSTAGE)
- dialogue_ref: QUEEN "팔은요?" / HOSTAGE "붙고 있습니다."
- text-free: column capitals sun disc + wings only
- gap_after: 40
- attach: LINE_turnaround, HERON_hands, 05_panels/ep01/panel_013.png
- note: S5 anchor. EP1 panel_013 is for the colonnade layout only (its afternoon light must NOT be copied: here the sun is high and the light patches are short)

### panel_028 (P28)
- scene_id: S5 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past QUEEN (foreground left), HOSTAGE center-right
- in frame: HOSTAGE stopped and turned toward her, standing straight in a short patch of light between columns, hands open at his sides, speaking plainly (HO_STILL)
- emotion: conflict ① — his way, said once
- key action: he stops and says it
- light & shadows: short noon patch on his upper body; feet out of frame
- bubble area: 1 bubble, **upper-right 1/3, the pale sky between the columns**, tail to HOSTAGE
- dialogue_ref: HOSTAGE "아치에서 내 동족을 직접 만나겠습니다."
- text-free: yes
- gap_after: 0
- attach: HERON_turnaround, LINE_turnaround, panel_027

### panel_029 (P29)
- scene_id: S5 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: frontal medium close-up on QUEEN
- in frame: QUEEN facing him (camera), immediate answer, no gesture
- emotion: conflict ② — her calculation
- key action: none
- light & shadows: soft shade of the inner wall behind her
- bubble area: 2 bubbles, **upper 1/3, the whitewashed inner wall in shade**, #1 above #2, tail to QUEEN
- dialogue_ref: QUEEN "안 돼요." / QUEEN "볼모가 아치에 가면, 숙부님은 그걸 음모라고 부를 거예요."
- text-free: yes
- gap_after: 0
- attach: LINE_expressions, panel_027

### panel_030 (P30)
- scene_id: S5 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: profile two-shot, eye level, cropped at the waist
- in frame: QUEEN left, HOSTAGE right, facing each other in profile; neither steps back; one patch of light on the floor between them (seen at the lower edge)
- emotion: a conflict of interest, not a misunderstanding
- key action: exchange
- light & shadows: short noon light; faces in soft bounce light
- bubble area: 2 bubbles, **upper 1/3, the pale sky and column tops behind them**: #1 upper-right (HOSTAGE), #2 upper-left (QUEEN) — read order: his first, hers second (letterer sets the stagger)
- dialogue_ref: HOSTAGE "비늘은 내 쪽 일입니다." / QUEEN "당신 쪽 일이 내 성 안에서 일어났어요. 그럼 내 일이에요."
- text-free: yes
- gap_after: 0
- attach: LINE_turnaround, HERON_turnaround, panel_027

### panel_031 (P31)
- scene_id: S5 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past HOSTAGE (foreground right), QUEEN center-left
- in frame: QUEEN indicating the court at the corridor's end **with her eyes only** (no hand gesture); behind HOSTAGE's shoulder, between the columns, the southern sky
- emotion: conflict ③ — the cost of each way
- key action: exchange
- light & shadows: short noon patches
- bubble area: 2 bubbles, **upper 1/3**: #1 upper-left, the whitewashed wall behind her (QUEEN); #2 upper-right, the pale sky between the columns (HOSTAGE)
- dialogue_ref: QUEEN "궁정 앞에서 재판해요. 모두가 보는 데서." / HOSTAGE "그사이 그들은 또 옵니다."
- text-free: yes
- gap_after: 40
- attach: LINE_expressions, HERON_turnaround, panel_027

### panel_032 (P32)
- scene_id: S5 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: eye-level close-up
- in frame: QUEEN's face, no irony (QU_BARE), a face that has chosen knowing the risk; her hands still, **not turning the ring**
- emotion: decision ③ — public trial
- key action: none
- light & shadows: soft even shade
- bubble area: 1 bubble, **upper-left 1/3, the whitewashed inner wall in shade**
- dialogue_ref: QUEEN "알아요. 그래도 재판이에요."
- text-free: yes
- gap_after: 60
- attach: LINE_expressions

### panel_033 (P33)
- scene_id: S5 / location: LOC_CORRIDOR (SHORT) / light: LIGHT_CORRIDOR_NOON
- size: M / aspect: 1:1
- shot / camera: HOSTAGE's profile in the foreground (right), the corridor receding behind
- in frame: HOSTAGE giving a short human nod (no kneeling, no fist); in the mid-ground QUEEN already turned away, walking down the colonnade; he stays where he is
- emotion: restraint — said once, then he follows; the decision is hers
- key action: his nod; her walking away
- light & shadows: short patches along the colonnade; her short dark pool walking with her
- bubble area: 1 bubble, **upper-right 1/3, the pale sky between the columns above his profile**
- dialogue_ref: HOSTAGE "예. 당신 방식으로 하겠습니다."
- text-free: yes
- gap_after: 120
- attach: HERON_expressions, LINE_turnaround, panel_027

## B5 · 그녀가 못 보는 곳 (P34–P36)

--- SCENE BREAK --- S6 · LOC_TERRACE · noon (day 1) · exterior

### panel_034 (P34)
- scene_id: S6 / location: LOC_TERRACE (FULL) / light: LIGHT_TERRACE_NOON
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: from behind him, deep perspective toward the southwest
- in frame: the empty terrace at noon; HOSTAGE alone at the parapet, back three-quarter, W4, looking far southwest at the silhouette of the colossal gate closing the canyon; the dry rust-and-cream canyon, a thin silver thread of water far below
- emotion: where she cannot see (②)
- key action: none
- light & shadows: harsh white noon sun, the terrace glaring; **proof shot:** `the glaring white stone around the tall man's feet is evenly bright and bare` (if Flow adds a shadow, crop his feet out of the frame)
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: HERON_turnaround, 05_panels/ep01/panel_037.png
- note: S6 anchor. EP1 panel_037 is for the terrace layout only (that is a night image: do NOT copy its stars or darkness). Do not use EP1 LIGHT_NOON wording here

### panel_035 (P35)
- scene_id: S6 / location: LOC_TERRACE (SHORT, parapet) / light: LIGHT_TERRACE_NOON
- size: M / aspect: 1:1
- shot / camera: low angle, vertical feel (camera below the parapet edge, looking up)
- in frame: top: HOSTAGE's face raised to the dry white sky — no birds, nothing in the sky (HO_UNSEEN: composure dropped); below: his **open RIGHT hand (scar)** resting still on the parapet stone, cracks spreading in the stone from under the palm; not a fist
- emotion: the body's cost of restraint; echo of EP1 P20/P31
- key action: the stone cracks under an open hand
- light & shadows: hard noon light; his feet out of frame
- bubble area: SFX only: a small calm area **beside the cracking stone, lower left, the plain parapet top away from the hand**
- dialogue_ref: — (SFX "빠직", viewer draws)
- text-free: the cracks must not look like letters
- gap_after: 0
- attach: HERON_hands, HERON_expressions, panel_034

### panel_036 (P36)
- scene_id: S6 / location: LOC_TERRACE (SHORT, south end) / light: LIGHT_TERRACE_NOON
- size: ST / aspect: 16:9
- shot / camera: along the parapet toward its south end (his eyeline), no person
- in frame: the south end of the parapet: no rope, no hook — only bright fresh scrape marks on the pale stone (PROP_SCRAPES); beyond it the canyon floor stretching south
- emotion: D1 continuity: the second hand came from the south
- key action: none
- light & shadows: harsh noon
- bubble area: none (silent)
- text-free: scrapes must not look like letters
- gap_after: 360
- attach: panel_034, 05_panels/ep01/panel_051.png
- note: EP1 panel_051 only for where the hook was (night image; light must not be copied)

## B6 · 같은 죽음 (P37–P47)

--- SCENE BREAK --- S7 · LOC_CELLS (lower passage) · afternoon (day 1), no daylight · interior

### panel_037 (P37)
- scene_id: S7 / location: LOC_CELLS (FULL + SHORT foot of the stair) / light: LIGHT_CELLS
- size: L / aspect: 3:4 (fallback **9:16** — vertical depth)
- shot / camera: deep vertical from the top of the steep stone stair looking down and along the low barrel-vaulted passage
- in frame (top → bottom): the last steps of the stair; QUEEN going down first holding the small open clay hand lamp in her LEFT hand (ring hand free), not looking back; CAPTAIN just behind her; HOSTAGE **one step behind**, walking down of his own accord, W4; at the foot of the stair the JAILER's place: a plain wooden stool, a lamp, an iron key ring on a peg, and the JAILER rising (stocky, close-cropped grey hair, plain brown tunic, **face half in shadow, background only, out of focus**); the passage beyond: dry drain channel down the middle, niche lamps above head height, plain heavy dark oak doors along one side fading into darkness
- emotion: decision ④ — she brings him as a witness; irony
- key action: descending
- light & shadows: niche lamps make warm pools with deep darkness between; her hand lamp throws part of her winged shadow (`SHADOW_SIDE_HIDDEN`) up onto the vault, **the neck disappearing into the vault's darkness, head not visible**; **proof shot:** `the lamplit stone wall behind the tall man is evenly lit and bare`; CAPTAIN and JAILER cast normal shadows
- bubble area: 2 bubbles, **upper 1/4, the dark vault above the stair**: #1 upper-left (QUEEN), #2 upper-right (HOSTAGE); keep the wing on the vault clear
- dialogue_ref: QUEEN "당신은 증인이에요. 보기만 해요." / HOSTAGE "보겠습니다."
- text-free: doors, key ring and stool plain, no numbers or marks
- gap_after: 0
- attach: LINE_turnaround, HERON_turnaround, WINGED_SHADOW_side
- note: S7 anchor — make first, 4 variants. Words for the place: only "wooden doors and stone walls" (no forbidden words). Scene negative `No dragon body, no horns visible, no smoke, no glow.` + HOSTAGE standard Avoid. Keep this image as the JAILER anchor for later episodes

### panel_038 (P38)
- scene_id: S7 / location: LOC_CELLS (SHORT, the row of doors near the entrance) / light: LIGHT_CELLS
- size: ST / aspect: 16:9
- shot / camera: horizontal strip tracking along the doors
- in frame: a row of plain heavy dark oak doors in round-arched rock-cut doorways, no bolts on their outer side; the two women walking ahead toward frame left, already passing; HOSTAGE at frame right, his step half a beat late in front of **one old door** (PROP_HOSTAGE_DOOR: wood darker and worn smooth at hand height, no bolt, completely unmarked), his eyes resting on it
- emotion: Q1 — the fourth's door (EP5); she does not see
- key action: his hesitation
- light & shadows: niche lamps; his feet in darkness
- bubble area: none (silent)
- text-free: **no marks, scratches or carvings on the door, frame or wall**
- gap_after: 0
- attach: HERON_turnaround, panel_037

### panel_039 (P39)
- scene_id: S7 / location: LOC_CELLS (SHORT, door at the far end) / light: LIGHT_CELLS
- size: M / aspect: 1:1
- shot / camera: medium at the doorway
- in frame: CAPTAIN pulling back the thick plain iron bolt on the outside of the heavy oak door (PROP_CELL_DOOR, palm-sized sliding wooden shutter at eye level); the door opening; inside, the PHYSICIAN (thin, 60s, bald on top with a white fringe, short white beard, white robe under a plain grey sleeveless over-robe, leather satchel), already there, bowing his head; his eyes flick for an instant to HOSTAGE's LEFT wrist (**white linen edge visible**, W4) and drop
- emotion: the physician = EP1's physician; a first suspicion
- key action: the door opened
- light & shadows: hand lamp and niche lamp
- bubble area: none (silent)
- text-free: door, bolt and satchel plain
- gap_after: 0
- attach: 05_panels/ep01/panel_056.png, THORA_ref, HERON_hands
- note: PHYSICIAN face from EP1 panel_056 (or panel_052). No linen rolls in his hands in EP2

### panel_040 (P40)
- scene_id: S7 / location: LOC_CELLS (SHORT, inside the small room) / light: LIGHT_CELLS
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: slight high angle into the small bare rock-cut room
- in frame: on a low stone bench, CROSSBOWMAN_DEAD lying still on his back as if asleep (EP1 panel_055 face: hollow cheeks, cropped black hair, crooked nose, dark grey clothes, hood down), eyes closed; no wound, no blood, no bruises; his hands open and empty; **only his hair is wet**, plastered to his forehead and temples, one drop at the bench edge; the floor: dusty bone-dry stone with scattered dry straw; nothing else in the room; the oak door open behind
- emotion: E1 continuity; A3 plant (wet hair / dry floor); start of the twist block
- key action: none
- light & shadows: hand lamp light glistening only on the wet hair; the rest matte and dry
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: 05_panels/ep01/panel_055.png, panel_037
- note: inner-room anchor for P41–P46 — make before them, 4 variants. Not gruesome: ordinary pallor only

### panel_041 (P41) ★ pair of panel_043
- scene_id: S7 / location: LOC_CELLS (SHORT, inside the small room) / light: LIGHT_CELLS
- size: M / aspect: 1:1
- shot / camera: hand close-up, slight high angle; **fix this angle and hand shape for panel_043**
- in frame: QUEEN's RIGHT hand (carnelian ring on the index finger) entering from frame upper right, fingertips just leaving the dead man's wet hair; one drop of water on a fingertip; lower part of the frame: dusty dry stone
- emotion: plain fact, almost to herself (no irony)
- key action: touch the hair, lift away
- light & shadows: hand lamp side light; the drop catches one highlight
- bubble area: 1 bubble, **upper-left 1/4, the dark rough stone wall beyond the bench**, small
- dialogue_ref: QUEEN "…젖었어요."
- text-free: yes
- gap_after: 0
- attach: LINE_hands, panel_040

### panel_042 (P42)
- scene_id: S7 / location: LOC_CELLS (SHORT, inside the small room) / light: LIGHT_CELLS
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past QUEEN (foreground left), PHYSICIAN center-right
- in frame: PHYSICIAN with his eyes lowered, hands clasped, speaking matter-of-factly; QUEEN not looking at him but at the body (bench edge at the lower frame)
- emotion: the twist needle — the same words
- key action: the report
- light & shadows: lamp light from below-side
- bubble area: 2 bubbles, **upper-right 1/3, the dark rough stone wall above the physician**, #1 above #2 (#2 the locked line alone)
- dialogue_ref: PHYSICIAN "상처는 없습니다." / PHYSICIAN "잠든 채 심장이 멎었습니다."
- text-free: yes
- gap_after: 40
- attach: 05_panels/ep01/panel_056.png, LINE_turnaround, panel_040

--- SCENE BREAK --- S7M · no location (memory close-up) · dawn ten days ago

### panel_043 (P43)
- scene_id: S7M / location: none (memory close-up; **no room, wall, shutter or basin**) / light: LIGHT_MEMORY_DAWN
- size: ST / aspect: 16:9
- shot / camera: **same angle and same hand shape as panel_041** (match cut)
- in frame: LATE_KING_MEMORY: a still older man's RIGHT hand resting on a white linen pillow, fair ruddy skin with faint age lines, broad square fingers, the heavy gold ring with the flat round deep-red carnelian on his RIGHT index finger; beside it his wet grey hair (a few faded mahogany-auburn strands) plastered to the pillow; his face out of frame; QUEEN_HAND_MEMORY: a young woman's slender RIGHT hand reaching in from the frame edge (same position as in panel_041), **no ring on any finger**, fingertips touching the wet grey hair
- emotion: the twist memory: the same death
- key action: the same touch
- light & shadows: cold pale blue dawn, desaturated, faded highlights, soft white vignette
- bubble area: none (silent; no memory caption)
- text-free: yes
- gap_after: 0
- attach: panel_041
- note: **only one ring in the frame, on the old man's hand.** His face must never appear. 4 variants. Do not attach LINE_hands (it would put the ring on her hand)

--- SCENE BREAK --- S7 · LOC_CELLS (inside the small room) · continues

### panel_044 (P44)
- scene_id: S7 / location: LOC_CELLS (SHORT, inside the small room) / light: LIGHT_CELLS
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: slight low angle, vertical
- in frame: QUEEN holding the hand lamp, her face lit from below, **the irony fully gone** (QU_BARE, raw); HOSTAGE standing **a shoulder's width away**, looking at her, **not reaching out, not touching**, W4; foreground bottom: the blurred wet hair of the dead man; above them the rock vault in darkness
- emotion: the twist — private doubt becomes a case
- key action: she says it
- light & shadows: hand lamp from below; part of her winged shadow on the vault (`SHADOW_SIDE_HIDDEN`), **neck vanishing into the vault's darkness, head not visible**; his side of the wall evenly lit and bare
- bubble area: 1 bubble, **upper 1/4, the dark rock vault above them**, tail to QUEEN; keep the wing part clear
- dialogue_ref: QUEEN "아버지도 이렇게 돌아가셨어요."
- text-free: yes
- gap_after: 400
- attach: LINE_expressions, HERON_turnaround, WINGED_SHADOW_side
- note: 4 variants. Scene negative as panel_037. Relationship peak was P01; this is the event peak — keep them apart (no tender gesture)

### panel_045 (P45)
- scene_id: S7 / location: LOC_CELLS (SHORT, inside the small room, door open) / light: LIGHT_CELLS
- size: ST / aspect: 16:9
- shot / camera: one horizontal band at face height
- in frame (left → right): CAPTAIN (jaw set, eyes wavering for an instant), PHYSICIAN (eyes lowered, re-gripping his satchel strap), HOSTAGE (looking only at her, off-frame left); through the open door behind, at the far end of the passage at the stair foot: `a small dark silhouette of a stocky man beside a lamp at the far end of the passage` (JAILER)
- emotion: silence right after the twist; CAPTAIN as witness
- key action: none
- light & shadows: lamp light; the far passage dim
- bubble area: none (silent)
- text-free: yes
- gap_after: 440
- attach: THORA_ref, 05_panels/ep01/panel_056.png, HERON_expressions

### panel_046 (P46)
- scene_id: S7 / location: LOC_CELLS (SHORT, inside the small room) / light: LIGHT_CELLS
- size: M / aspect: 1:1
- shot / camera: medium
- in frame: QUEEN looking down at the dry floor, then toward the door (the passage, the stair); the hand holding the lamp does not shake; grief turning into judgment
- emotion: a stake raised; her conclusion (half right)
- key action: looking from floor to door
- light & shadows: hand lamp
- bubble area: 2 bubbles, **upper 1/3, the dark rough stone wall behind her**, #1 above #2
- dialogue_ref: QUEEN "물은 들어왔다가 나갔어요." / QUEEN "그 손이 아직 이 성 안에 있어요."
- text-free: yes
- gap_after: 0
- attach: LINE_expressions, panel_040

### panel_047 (P47)
- scene_id: S7 / location: LOC_CELLS (SHORT, door at the far end) / light: LIGHT_CELLS
- size: M / aspect: 1:1
- shot / camera: two-shot at the doorway, eye level
- in frame: QUEEN left, stepping out of the door and turning to CAPTAIN; CAPTAIN right, open right palm on her breastplate, whole body turned to QUEEN; PHYSICIAN in the background in the darkness inside the door
- emotion: decision ④ closed: the evidence in her hands
- key action: the order and the palm-to-breastplate
- light & shadows: hand lamp + niche lamp
- bubble area: 2 bubbles, **upper 1/3, the dark vault of the passage above the door**: #1 upper-left (QUEEN), #2 upper-right (CAPTAIN)
- dialogue_ref: QUEEN "시신은 재판 날까지 여기 둬요. 당신이 지켜요." / CAPTAIN "예, 폐하."
- text-free: door and bolt plain
- gap_after: 120
- attach: LINE_turnaround, THORA_ref, panel_039

## B7 · 하늘을 난 용은 없었다 (P48–P55)

--- SCENE BREAK --- S8 · LOC_ROOMS (COURTYARD) · dusk (day 1) · exterior courtyard

### panel_048 (P48)
- scene_id: S8 / location: LOC_ROOMS (COURTYARD) / light: LIGHT_COURT_DUSK
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: high wide, looking down into the courtyard
- in frame: the square rock-cut courtyard open to the sky; the sky square fading orange → deep blue; the floor already in cool shade; dry carved stone basin at the center, old gnarled olive tree; QUEEN crossing the courtyard alone, small; CAPTAIN stopped at the round-arched entrance passage in one corner, waiting (a GUARD optional behind her); high on one wall two windows with open wooden shutters; on the opposite wall one window with its wooden shutters closed; the low arcade to the guest quarters at the foot of one wall
- emotion: time passing (dusk)
- key action: she crosses
- light & shadows: last warm glow only on the upper walls and shutters; faint soft shadows
- bubble area: none (silent)
- text-free: shutters plain wood
- gap_after: 0
- attach: LINE_turnaround, THORA_ref
- note: S8 anchor — make first. The closed shutter never shows the inside

### panel_049 (P49)
- scene_id: S8 / location: LOC_ROOMS (his window → courtyard) / light: LIGHT_COURT_DUSK
- size: M / aspect: 1:1
- shot / camera: over HOSTAGE's shoulder at the upper window, looking down
- in frame: HOSTAGE standing between the open wooden shutters of his window (foreground, shoulder and profile), W4 (linen edge at the LEFT wrist); far below, QUEEN small crossing the courtyard, not looking up
- emotion: a gaze she does not know of
- key action: none
- light & shadows: warm last light on the shutter top; courtyard in shade; his feet out of frame
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: HERON_turnaround, panel_048

### panel_050 (P50)
- scene_id: S8 / location: LOC_ROOMS (SHORT, courtyard by the olive tree) / light: LIGHT_COURT_DUSK
- size: M / aspect: 1:1
- shot / camera: side view, eye level
- in frame: ENVOY (old, scar on his LEFT temple–cheek, gold eyes) stepping out of the olive tree's shade (guest-quarters side, frame right) and stopping a few steps in front of QUEEN (frame left); he **briefly lowers his eyes** to her — no stepping aside, no kneeling, no fist; QUEEN stopping
- emotion: his gesture to her stops at the lowered eyes
- key action: he stops before her
- light & shadows: soft dusk shade; ENVOY casts a normal faint shadow
- bubble area: none (silent)
- text-free: yes
- gap_after: 0
- attach: UR_ref, LINE_turnaround, panel_048

### panel_051 (P51)
- scene_id: S8 / location: LOC_ROOMS (SHORT, courtyard) / light: LIGHT_COURT_DUSK
- size: M / aspect: 1:1
- shot / camera: over-the-shoulder past ENVOY (foreground right), QUEEN center-left
- in frame: QUEEN looking straight at him; one corner of her mouth almost rising — the habit of irony coming back, then stopping
- emotion: payoff of what he saw (P13, P26)
- key action: she asks
- light & shadows: dusk shade, sky glow on the upper walls behind her
- bubble area: 2 bubbles, **upper-left 1/3, the whitewashed courtyard wall rising behind her in soft shade**, #1 above #2
- dialogue_ref: QUEEN "오늘 홀에 계셨죠." / QUEEN "할 말이 있으신가요."
- text-free: yes
- gap_after: 40
- attach: LINE_expressions, UR_ref, panel_048

### panel_052 (P52)
- scene_id: S8 / location: LOC_ROOMS (SHORT, courtyard) / light: LIGHT_COURT_DUSK
- size: M / aspect: 1:1
- shot / camera: medium on ENVOY, the far wall soft in the background
- in frame: ENVOY not answering at once; his gold eyes passing her and going to the closed wooden shutters on the far wall (background, soft focus, the last glow on them)
- emotion: A2 reinforced; he explains nothing
- key action: his glance
- light & shadows: last orange glow on the shutters only
- bubble area: none (silent)
- text-free: shutters plain; only their outer face
- gap_after: 60
- attach: UR_ref, panel_048

### panel_053 (P53)
- scene_id: S8 / location: LOC_ROOMS (SHORT, courtyard) / light: LIGHT_COURT_DUSK
- size: L / aspect: 3:4 (fallback 1:1)
- shot / camera: over-the-shoulder past QUEEN (foreground left, out of focus), ENVOY center-right, slight low angle
- in frame: ENVOY turning his eyes back to her; old face, scar, gold eyes catching the very last light; behind him the square of sky now deep blue above the courtyard walls
- emotion: cliffhanger K2 — a line that opens the past; his first words to her (no title, no explanation)
- key action: he speaks
- light & shadows: last light on his face; the courtyard below dark
- bubble area: 1 bubble, **upper 1/3, the deep-blue square of sky above the walls**, tail to ENVOY
- dialogue_ref: ENVOY "그날 새벽, 하늘을 난 용은 없었습니다."
- text-free: yes
- gap_after: 480
- attach: UR_ref, LINE_turnaround, panel_048
- note: 4 variants

### panel_054 (P54)
- scene_id: S8 / location: LOC_ROOMS (courtyard sky) / light: LIGHT_COURT_SKY
- size: ST / aspect: 16:9
- shot / camera: her POV, vertical low angle straight up from the courtyard floor
- in frame: the square opening of the courtyard walls framing an empty deep-blue dusk sky with one first faint star; no birds, no wings, nothing in the sky
- emotion: the empty sky echo (his P35 → her)
- key action: none
- light & shadows: walls dark at the frame edges
- bubble area: none (silent)
- text-free: yes
- gap_after: 560
- attach: panel_048

### panel_055 (P55)
- scene_id: S8 / location: LOC_ROOMS (SHORT, courtyard) / light: LIGHT_COURT_DUSK (nearly gone)
- size: **XL** full-bleed / aspect: 9:16
- shot / camera: frontal close-up, vertical
- in frame: **upper part:** QUEEN's face — breath stopped at her lips, smoke-grey eyes widened, no irony; that nothing flew settles on her face; **lower part:** the courtyard's shade, deep and calm; her winged shadow is melted into the shade and not visible
- emotion: cliffhanger last cut
- key action: none
- light & shadows: faint cool sky light from above on her face; below, darkness
- bubble area: no dialogue; **end caption area = bottom 1/3, calm darkness of the courtyard floor** (viewer draws the Khmer end caption)
- dialogue_ref: caption (viewer): "— 3화에 계속 —"
- text-free: yes
- gap_after: 640
- attach: LINE_expressions, panel_053
- note: 4 variants

---

## 5. 점검

- 패널 55 = 대본 P01–P55, panel_001–panel_055 연속. 대사 패널 32, 말풍선 50 (B1 2 · B2 6 · B3 18 · B4 11 · B5 0 · B6 10 · B7 3), 패널당 최대 2. SFX 패널 1 (035). 끝 캡션 1 (055).
- XL 4: 001, 013, 044, 055 (붙어 나오는 XL 없음). L 8: 019, 021, 026, 034, 037, 040, 048, 053. ST 5: 012, 038, 043, 045, 054. 나머지 M 38.
- 장면 9개(S1–S8 + S7M). 장소가 바뀌는 곳마다 SCENE BREAK. S7M(043)은 S7 사이의 의도된 회상 예외.
- gap_after: 001–011 최대 120(010) · 큰 멈춤 012 300 → 026 320 → 036 360 → 044 400 → 045 440 → 053 480 → 054 560 → 055 640 (700 상한 안).
- 무대사 연속: 038–040 3컷, 048–050 3컷. 그 밖은 2컷 이하.
- 날개 그림자: top = 013, 026 (018, 024는 계단 위 날개 가장자리) · side = 001, 005, 037, 044 (006은 날개 끝 정도) · 회랑 027, 033 발밑 웅덩이 · 055 그늘에 녹음. **머리 보임 0, `WINGED_SHADOW_crown` 첨부 0.**
- HOSTAGE 그림자 없음 증거 컷: 013, 026, 034, 037 (+001 벽 위 "casts nothing"). 나머지는 발 프레임 밖 / 어둠.
- 닿음 0: 001, 002(손은 문에), 027(한 걸음), 044(어깨 하나, 손을 내밀지 않음) 명시. 사슬 0. HOSTAGE 주먹 0(004 · 010 · 035 편 손).
- 왼팔: W3 = 001–011 · W4 = 013–055 (흰 천 끝 보이게 010 · 027 · 039 · 049).
- 반지 RIGHT index: 002, 003, 009, 015, 041 / 043은 선왕 손에만(그녀 손 맨손). 흉터 RIGHT hand: 004, 035.
- 무텍스트: 비늘(009) 민 면, 3조(022) 말로만, 표결(021, 023) 손뿐, 문 · 빗장 · 열쇠 꾸러미 · 038 낡은 문 표식 없음, 금(035) · 긁힘(036) 글자처럼 보이면 재생성.
- 금지 낱말: 영어 문장에 chain/shackle/cuff/collar/bound/captive/prisoner/slave/leash/cage/bars/prison/cell 없음(`LOC_CELLS`는 토큰 이름일 뿐, 프롬프트에는 style-bible §15-2 영어 문장을 붙인다).
- 첨부 3장 이하 전 패널. EP1 앵커: 05_panels/ep01/panel_061(001) · 028(004) · 045 · 051(012, 036) · 013(027) · 037(034) · 056(039, 042, 045) · 055(040).
- **대체(fallback) 메모:** L 3:4 없으면 1:1, **037만 9:16** · 001 앵커로 EP1 panel_061이 없으면 panel_058 · EP1 앵커 이미지가 아직 없으면(현재 `05_panels/ep01/` 없음) 그 첨부는 비우고 카드만, 지어내지 않는다 · 027/034/036의 EP1 앵커는 배치용(빛은 따라 하지 않음) · 034 그의 발밑 그림자가 생기면 발을 프레임 밖으로 크롭 · 043은 LINE_hands 첨부 금지(반지 두 개 방지).
