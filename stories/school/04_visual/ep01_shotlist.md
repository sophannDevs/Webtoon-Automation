# EP01 샷리스트 — 『유통기한 연애』 1화 「오늘까지인 거 있어요?」 · panel-director

- 작성: panel-director · 2026-11-22 · Flow-by-hand mode + Khmer edition · v1
- 게이트: `km_review.py gate --episode 01` → **OK** (ep01_script_final.md = Khmer review READY 판본, round 1, sha256 f0d05444d3f2…)
- 입력: `03_episode/ep01_script_final.md`(최종 대본, 60패널, KM 줄), `03_episode/ep01_beatsheet.md`(패널 번호·단서 위치 고정, §D-6 제작 메모), `04_visual/style-bible.md` v1(§3-2 무드, §5 화면비·프레이밍·방향, §7 LOC, §9 글자 없음, §10 art_space), `04_visual/character-sheets.md` v1(identity_tag, OUTFIT, 표정 슬롯, 소품), `02_story/world.md` §6.
- 스킬: `webtoon-panel-breakdown` 작업 A(A-1~A-4) · `webtoon-khmer-edition` §4 · `webtoon-flow-handoff`
- **패널 60개.** `panel_001`~`panel_060` = 대본 `P01`~`P60`(번호·순서·단서 위치 그대로). 대사 패널 48 / 무대사 12(P1·P8·P15·P23·P36·P37·P41·P49·P53·P54·P55·P57). 효과음 7(P2·P7·P35·P41·P48·P51·P56), 엔딩 캡션 1(P60).
- **한국 원작 그대로.** 서울 변두리 서진고, 한국 교복·얼굴, 한국 편의점·골목. 캄보디아식 변형 없음. 크메르어는 뷰어 말풍선 글자에만.
- 작업 언어: 한국어. prompt-smith가 그대로 옮길 **camera / composition / subject / art_space는 영어**. 대사(dialogue_ref)는 한국어 원문(크메르어 원본은 대본 `KM:` 줄, letterer가 옮김).
- 좌/우: `LEFT/RIGHT`(대문자) = 인물 본인 기준. `screen-left/right` = 화면 기준.
- **Khmer edition (one line):** No text of any kind in any image (no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing); every panel keeps its `art_space` as calm, empty background, objects that could carry writing are drawn blank, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.

---

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 무드 ↔ 배경)

| scene_id | panels | location | mood (style-bible §3-2) | 의상 | 배경 한 줄 |
|---|---|---|---|---|---|
| E01S01 | P1–P3 | LOC_CVS (P1 창 너머 LOC_CROSSROADS) | M_NIGHT | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(후드 씀) | 월→화 00:50. 형광 흰빛의 작은 한국 24시 편의점, 초록·흰 실내, 오른쪽 계산대, 왼쪽 끝 유리병, 창 밖 남흑 사거리 |
| E01S02 | P4–P7 (P5 하단 칸 = LOC_CVS M_NIGHT) | LOC_CLASSROOM | M_DAY (08:20 아침) | 전원 OUTFIT_SCHOOL | 2학년 1반, 왼쪽 큰 창 + 크림 커튼, 샛노란 은행나무, 숫자 없는 벽시계, 칠판 위 무지 회색 스피커 |
| E01S03 | P8 | LOC_BUS_STOP_SCHOOL | M_DAY_OUT | 점퍼 남자 | 언덕 아래 정류장, 반투명 지붕, 무지 광고판, 금속 벤치, 은행나무 한 그루, 언덕 위 학교 |
| E01S04 | P9–P10 | LOC_TEACHERS_OFFICE (복도 쪽 문 앞) | M_DAY | 담임·서윤·도하 교복 | 열린 미닫이문 너머 교무실(회색 철제 책상, 무지 서류, 회색 모니터), 전경은 복도 |
| E01S05 | P11–P19 | LOC_HALLWAY | M_DAY (2교시 뒤, 창 역광 금빛 림라이트) | 교복 | 2층 복도, 한쪽 창(은행나무 길), 반대쪽 교실 미닫이문, 연녹 하단 벽 + 크림 상단 벽, 테라초 바닥 |
| E01S06 | P20–P21 | LOC_CLASSROOM | M_DAY (점심 직전) | 교복, 하람 완장 | 같은 교실, 앞문·교탁 쪽 |
| E01S07 | P22–P27 | LOC_STAIR_LANDING | M_LANDING | 교복 | 옥상 앞 계단참, 위쪽 잠긴 회색 철문, 쌓인 책걸상, 먼지 낀 창의 살구빛 역광, 보라 그늘 |
| E01S08 | P28–P29 | LOC_CLASSROOM | M_DAY | 교복 | 같은 교실, 교실 앞쪽에서 |
| E01S09 | P30–P35 | LOC_SNACK_BAR | M_DAY (창구 안 형광 + 낮빛, 약간 노란 실내) | 교복, 하람 완장 | 작은 매점 창구, 학생 줄, 무지 포장 빵·색 블록 우유 |
| E01S10 | P36–P37 | LOC_HALLWAY | M_DAY | 교복 | 2층 복도, 창으로 은행나무 금빛 |
| E01S11 | P38–P47 | LOC_CLASSROOM (오후 늦은 해) | M_DAY (빛 낮고 그림자 길게) | 교복, 하람·건우 완장 | 같은 교실, 책상 옆 고리의 가방들 |
| E01S12 | P48 | LOC_GINKGO_ROAD @NIGHT (전경 LOC_HALLWAY @NIGHT 창) | M_SCHOOL_NIGHT | 서윤·도하 교복 | 21:40, 주황 가로등 아래 노랗게 빛나는 은행나무 오르막, 위 학교 창 흰빛 |
| E01S13 | P49 | LOC_CVS_STOCKROOM | M_NIGHT (천장 형광 하나 + 모니터 회색빛) | 서윤 OUTFIT_STORE로 갈아입는 중 | 좁은 창고, 무지 박스, 대걸레, 작은 거울, 회색 흐린 CCTV 모니터, 빈 고리 |
| E01S14 | P50–P53, P55 | LOC_CVS (P53 창 너머 LOC_CROSSROADS) | M_NIGHT | 서윤 OUTFIT_STORE | 화→수 21:58~00:45. S01과 같은 편의점 |
| E01S15 | P54 | LOC_CROSSROADS @NIGHT (거의 빈 여백) | M_BLANK | — | 거의 전부 어둠에 잠긴 남흑 밤 거리, 맨 아래 희미한 가로등 빛 |
| E01S16 | P56–P60 | LOC_CVS | M_NIGHT (P59~60 배경 단순화, 정면 형광) | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(P56~58 후드 씀, P59~60 후드 벗음) | 수 00:50. 같은 편의점 |

- `--- SCENE BREAK ---`는 장소·시간이 바뀌는 16곳에만: P4, P8, P9, P11, P20, P22, P28, P30, P36, P38, P48, P49, P50, P54, P55(S14 복귀), P56 앞. (P55는 S14로 돌아오는 복귀 break.)
- 같은 scene_id = 같은 LOC 토큰 · 같은 무드 빛 · 같은 의상(style-bible §6-2-4). 예외는 비트시트가 지정한 두 곳뿐: P5 하단 분할 칸(어젯밤 계산대 인서트, M_NIGHT), P35(서윤이 복도 쪽으로 몸을 돌리지만 배경은 매점 유지).

## 2. 크기 → Flow 화면비 (style-bible §5-1)

| size | aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed | **9:16** | P1, P8, P22, P33, P37, P48, P54, P60 | 8 |
| medium (기본) | **3:4** | P2, P3, P5, P7, P9, P10, P12, P13, P15–P21, P23, P25, P26, P30–P32, P34, P35, P39, P42–P47, P49, P50, P52, P55, P58, P59 | 36 |
| medium-wide | **4:3** | P4, P6, P11, P24, P28, P29, P38, P40, P53 | 9 |
| insert / ECU | **1:1** | P14, P27, P36, P41, P51, P56, P57 | 7 |
| | | **합계** | **60** |

- style-bible §5-1 권장과 다른 곳 2개: **P18 = 3:4**(권장 1:1. 말풍선 2개 + 손바닥 + 빨개진 얼굴 + 배경 태민을 1:1에 넣으면 art_space가 얼굴을 덮는다), **P53 = 4:3**(권장 없음. 무대사 여백 구간 앞의 가로로 넓은 "숨"으로 P54 9:16과 대비). 나머지는 권장 그대로.
- 16:9 미사용.

## 3. 분할(split) · 매치 컷 · 고정 쌍

- **split: yes = 2개뿐: P5, P57.** 둘 다 `two stacked frames in one image separated by a thin plain white gutter`, 최대 2칸, art_space는 칸 사이 홈이 아니라 한 칸 안. P10·P21·P23·P39는 비트시트의 "얼굴 + 인서트"를 **한 프레임 안의 전경/후경 구도**로 풀었다(split: no).
- **P2 ↔ P58 구도 재현 쌍:** 같은 카메라(계산대 높이, 손님 쪽 바닥에서 살짝 로우, 손님 3/4 측면 미디엄 클로즈업), 같은 배치(후드 손님 screen-left-centre, 계산대가 화면 아래를 가로지름, 유리병 screen-left 끝 흐림, 서윤은 프레임 밖 screen-right), 같은 주황 띠 삼각김밥, 같은 뿔테 형광 한 줄. **다른 점은 단 하나:** P58에서는 키링이 손목 아래 흔들린다(P2는 왼쪽 끈이 그늘/프레임 밖). P58 생성 때 P2 이미지 첨부.
- **P56 ↔ P57 매치 컷 쌍:** 같은 각도(학을 왼쪽 3/4 측면에서 약간 위로, 머리는 screen-left, 꼬리는 screen-right), 같은 크기(학 폭 ≈ 프레임 폭의 38%, 학 중심 = 수평 중앙·세로 58%), 갈고리처럼 접은 머리 + 한 번 접어 내린 꼬리 끝 판별 필수. 색만 다름: P56 누런 아이보리 #E9DDB8 in 투명 레진 / P57 새 흰 영수증 #F4F4F0 in 유리병. P57 생성 때 P56 이미지 첨부.
- **P1~3 후드 = P56~59 후드:** 같은 차콜 후드·검정 조거·흰 운동화·검정 백팩(DOHA OUTFIT_NIGHT). P1~3에서 키링은 절대 안 보이게.
- **학 판별 등급:** ECU 판별 필수 = P14, P56, P57. **흐림 유지(판별 불가, 클로즈업 금지) = P42, P43.** P47은 키링·가방 프레임 밖.
- **편의점 180도 규약(전 장면):** 손님 쪽 시점에서 계산대 안 서윤 = screen-right, 손님 = screen-left, 유리병 = 계산대 screen-left 끝, 초록 할인 바구니 = screen-right 끝, 회색 폐기 바구니 = 계산대 아래. 역샷(P53)만 서윤 어깨 너머로 유리창.
- **복도 S05 축:** 서윤 screen-left, 도하 screen-right(창은 도하 뒤쪽 = 역광). P11~P19 유지.
- **계단참 S07 축:** 옥상 철문 = 화면 위쪽, 계단 = 아래. 측면 컷(P24~P26)에서는 계단이 screen-left 아래에서 screen-right 위로 오른다 → 도하 screen-right(위), 서윤 screen-left(아래에서 올라섬).

## 4. 스크롤 리듬 · gap_after (px, letterer 레터링 스펙에 그대로)

| gap_after | 뜻 | 쓰는 곳 |
|---|---|---|
| 0 | 이어 붙임(같은 순간의 연쇄) | 대사 합 중간, ECU → 반응 |
| 30 | 촘촘(빠른 주고받기) | 티키타카 |
| 80 | 보통 | 기본 |
| 160 | 비트 끊기 · 씬 전환 · 반전 직후 숨 | SCENE BREAK 앞, P33 |
| 320 | 시간 점프 · 정지 컷 · 클리프 직전 정적 | P3(콜드 오픈 → 아침), P37, P55 |
| 640 | 빈 여백 스크롤 | P54만 |

| 구간 | 패널 | 리듬 |
|---|---|---|
| ① 콜드 오픈 | P1–P3 | 9:16 정적 → 3:4 → 3:4, 끝에 320 암전 |
| ② 비밀 공개 | P4–P10 | 4:3 넓게 → 분할 → 4:3 → 로우 → 9:16 고립(P8) → 3:4 둘 |
| ③ 첫 만남 | P11–P19 | 4:3 → 3:4 연쇄 0/30 간격, **P14 1:1 ECU**, P15 무대사, P16 정점 후 P17~18 코미디 |
| ④ 계약 | P20–P27 | 교실 3:4 둘 → **P22 9:16 로우**(정점 9) → P23 무대사 ECU → 4:3 역전 → 조항 3:4 둘 → P27 1:1 도장 |
| ⑤ 중반 소반전 | P28–P37 | 4:3 코미디 둘 → 매점 3:4 연쇄(30) → **P33 9:16 단독**(앞 30·뒤 160) → P34 → P35 → 1:1 손 → **P37 9:16 정지 컷 + 320** |
| ⑥ 굴욕·반격 | P38–P48 | 4:3 → 3:4 → 4:3 → **P41 1:1 지퍼(0)** → P42~45 반격 연쇄 30 → P46~47 → 160 → P48 9:16 |
| ⑦ 감속 | P49–P55 | 3:4 무대사 → 3:4 → 1:1 → 3:4 → 4:3 무대사 → **P54 9:16 빈 여백 + 640** → P55 + 320 |
| ⑧ 클리프행어 | P56–P60 | 1:1 ECU(0) → 1:1 매치 컷(80) → P2 재현(80) → 투샷(160) → **P60 9:16 마지막** |

---

## 5. 샷리스트 (panel_001 ~ panel_060)

### ① 콜드 오픈 — P1~P3 (어젯밤, 월→화 00:50)

### panel_001
- scene_id: E01S01 / location: LOC_CVS (창 너머 LOC_CROSSROADS) · mood: M_NIGHT
- beat: ① 콜드 오픈 · 긴장 6 비 · ⟨복선 W4⟩
- characters: DOHA (OUTFIT_NIGHT, 후드 씀, 원경 실루엣) · SEOYUN 없음(전경에 계산대 끝만)
- size: full-bleed · aspect: 9:16
- camera: eye level from inside the store, wide, looking out through the front glass; tall vertical frame.
- composition: Bottom sixth: the near end of the counter in soft focus (white counter edge, a corner of the receipt printer), cold white fluorescent light. Middle and top: the dark storefront glass; beyond it the empty late-night crossroads (no bus, no people), orange streetlights, power lines, a shuttered pharmacy. A small charcoal-hooded silhouette walks in from the **dark side alley opposite** (screen-right background), NOT from the bus-stop side (screen-left). Backpack visible only as a dark shape; keyring not visible.
- emotion: 정적, 조용한 기다림
- motion/direction: 시선 위(밤거리) → 걸어오는 실루엣 → 아래 계산대 끝 → 다음 패널로
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: 효과음 없음("딩동"은 P2). 유리창에 실내 반사를 약하게. 간판·창 스티커 무지. 후드 실루엣은 작게, 얼굴 없음.

### panel_002
- scene_id: E01S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① · 긴장 7 비 · ⟨복선 C1·C8·C2⟩ · **P58과 구도 재현 쌍(원본)**
- characters: DOHA (OUTFIT_NIGHT, 후드 씀, 얼굴 위쪽 그늘)
- size: medium · aspect: 3:4
- camera: from the shop-floor side at counter height, slightly low angle, medium close-up of the hooded customer in three-quarter profile; normal lens.
- composition: The counter runs across the lower third. Hooded customer screen-left-of-centre, facing screen-right (toward the cashier, who is off-frame right); only his mouth and jaw are visible under the hood's shadow; inside the shadow, a thin round black glasses frame catches one thin line of fluorescent light. His long-sleeved hand sets a triangle rice ball with a plain orange band (clear wrap, no print) on the counter. At the counter's screen-left end, soft and blurred at the frame edge: the small lidless glass jar of white paper cranes; his head is turned very slightly toward it. The LEFT backpack strap is in shadow / out of frame (no keyring).
- emotion: 무심한 듯 조심스러움
- motion/direction: 손 → 삼각김밥 → 화면 오른쪽(서윤 쪽)으로 흐름
- dialogue_ref: 후드 "오늘까지인 거… 있어요?" (bubble 1) · 효과음 [딩동]
- art_space: Keep the top third of the frame, above the hood (plain fluorescent ceiling and the soft blurred tops of the drink fridges), as calm, empty background — the customer's bubble goes upper-left above his head, the door-chime sound effect upper-right.
- split: no
- gap_after: 30
- fx/note: 주황 띠 = 참치마요. 안경 반사는 한 줄뿐, 눈은 안 보임. 이 패널의 카메라·배치를 P58에서 그대로 재현한다.

### panel_003
- scene_id: E01S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① · 긴장 8 비 · ⟨복선 C1⟩
- characters: SEOYUN (OUTFIT_STORE, 업무 존댓말 → 멈칫 직전) · DOHA (후드 어깨만)
- size: medium · aspect: 3:4
- camera: over-the-shoulder from behind the hooded customer, eye level, bust shot of Seoyun.
- composition: Large charcoal hood shoulder fills the screen-left foreground (out of focus). Seoyun behind the counter screen-right-of-centre, in the plain green vest over a white shirt, sleeves rolled, scanning the orange-band rice ball with a hand scanner (small red light); sleepy heavy eyes just lifting toward the customer. White patch visible on the inside of her LEFT wrist. Behind her: cigarette shelf as soft plain colour blocks. Customer's face never shown.
- emotion: 피곤, 무감정 → 눈이 손님에게 막 닿는 순간
- motion/direction: 시선이 화면 왼쪽(손님) 쪽으로 올라오는 순간에서 컷
- dialogue_ref: 서윤 "이건 오늘까지예요." (bubble 1, 업무 존댓말 = dialogue)
- art_space: Keep the top fifth of the frame on the right, above Seoyun's head (plain fluorescent ceiling and the blurred top of the shelf), as calm, empty background.
- split: no
- gap_after: 320
- fx/note: 콜드 오픈 끝. 320 = 어젯밤 → 화요일 아침 시간 점프. 다크서클 유지.

--- SCENE BREAK --- (E01S01 LOC_CVS 밤 → E01S02 LOC_CLASSROOM 아침)

### ② 비밀 공개 — P4~P10 (화요일 아침)

### panel_004
- scene_id: E01S02 / location: LOC_CLASSROOM · mood: M_DAY (08:20)
- beat: ② · 긴장 5 위
- characters: 반 전체(엑스트라) · SEOYUN · DOHA (OUTFIT_SCHOOL, 안경 없음) · YERIN · TAEMIN — 전부 중경 이하, 작게
- size: medium-wide · aspect: 4:3
- camera: high wide from the back corner of the classroom, looking toward the front.
- composition: Windows on screen-left with cream curtains, warm low morning light laying long window-frame shadows across the desks; bright yellow ginkgo outside. Front wall: empty green chalkboard, a plain grey wall speaker above it, wall clock with tick marks and no numerals. Rows of students in navy blazers stir and turn their heads; Doha at the window seat (left), Seoyun in a middle row, small.
- emotion: 술렁임
- motion/direction: 시선 → 칠판 위 스피커
- dialogue_ref: 방송 "학업우수상, 전교 1등. 2학년 1반 백도하." (bubble 1, tail → speaker)
- art_space: Keep the top third of the frame — the cream wall around and above the plain grey speaker over the chalkboard, above the students' heads — as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 스피커 무지. 엑스트라에게 주연 헤어 특징 금지.

### panel_005
- scene_id: E01S02 / location: LOC_CLASSROOM (하단 칸 = LOC_CVS 어젯밤) · mood: M_DAY / 하단 M_NIGHT
- beat: ② · 긴장 6 위 · ⟨복선 C2 1차: 유리병⟩
- characters: SEOYUN (위: OUTFIT_SCHOOL / 아래: 손만, OUTFIT_STORE 소매)
- size: medium · aspect: 3:4
- camera: top frame: close-up of Seoyun's profile, eye level. Bottom frame: insert close-up at counter height.
- composition: Two stacked frames in one image separated by a thin plain white gutter. **Top frame (about 62% of the height):** Seoyun's stiff right-profile close-up (facing screen-left toward the speaker), jaw tight, warm morning window light, faint dark circles; her face sits in the lower half of this frame. **Bottom frame (about 38%):** last night at the convenience-store counter, cold white fluorescent light: her hand (rolled white shirt sleeve, faint tape marks on the back of the hand) dropping a small white receipt paper crane into the lidless glass jar about two-thirds full of white cranes.
- emotion: 충격, 자존심이 금 감
- motion/direction: 위 얼굴 → 아래 손(그녀의 비밀)으로 시선 하강
- dialogue_ref: 방송 "2등, 한서윤." (bubble 1, tail → off-frame speaker) · 서윤(생각) "…처음이야." (bubble 2, thought)
- art_space: Keep the upper two-fifths of the TOP frame, in front of and above her profile (blurred cream wall and soft window glow), as calm, empty background.
- split: **yes** (2칸, 위 교실 / 아래 어젯밤 계산대 인서트)
- gap_after: 30
- fx/note: 하단 칸은 회상이 아니라 어젯밤 → M_NIGHT, M_FLASH 금지. 유리병 약 2/3.

### panel_006
- scene_id: E01S02 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ② · 긴장 5 코·설 · **캡처 컷 후보(도하 첫 정면 매력 컷)**
- characters: DOHA (OUTFIT_SCHOOL, 무표정, 턱 굄, 안경 없음) · YERIN · TAEMIN
- size: medium-wide · aspect: 4:3
- camera: eye level from the front-right of the room, diagonal toward the back-left window, medium-wide; shallow focus on Doha.
- composition: Doha sharp at the window seat screen-left-of-centre, chin on his hand, flat calm face, golden window rim light on his messy hair; yellow ginkgo through the window behind him. Midground lower-right, slightly soft: Yerin covering her mouth with both hands, Taemin twisted around in his seat staring. Upper-right half: cream back wall and grey lockers, plain.
- emotion: 반은 놀람·소란 / 도하는 무심
- motion/direction: 예린·태민 시선 → 도하로 모임
- dialogue_ref: 예린 "헐. 한서윤이 2등?" (bubble 1) · 태민 "전학생 뭐야…" (bubble 2)
- art_space: Keep the right half of the frame, upper 55% (the plain cream back wall and grey lockers above Yerin's and Taemin's heads), as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 도하 왼쪽 목 점은 각도상 보이면 왼쪽에. 백팩은 책상 옆 고리, 키링 보이지 않게(또는 아주 작고 흐리게, 판별 불가).

### panel_007
- scene_id: E01S02 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ② · 긴장 6 위 · ⟨비밀 노출 V, 복선 W7: 사장님 목소리⟩
- characters: SEOYUN (OUTFIT_SCHOOL, 고개 숙임) · MISUK(목소리만, 얼굴 없음)
- size: medium · aspect: 3:4
- camera: low angle from under the desk, looking up and across at the bag on the desk hook.
- composition: Underside of the wooden desk across the top (plain, dark, calm). Middle: Seoyun's worn black backpack on the desk hook, zip half open at the bottom, the tip of a rolled vivid green vest peeking out — the only vivid green in the day scene. Her hand holds a phone near the bag, its screen showing only a soft blank white glow, slight vibration blur. Upper-right: Seoyun's face bending down into frame, whispering, eyes alert.
- emotion: 긴장, 들키면 안 됨
- motion/direction: 조끼 끝 → 휴대폰 → 숙인 얼굴
- dialogue_ref: 사장님(통화) "서윤아, 오늘 마감 가능하지?" (bubble 1, tail → phone) · 서윤(속삭임) "네. 열 시요." (bubble 2) · 효과음 [지잉— 지잉—]
- art_space: Keep the top third of the frame — the plain dark underside of the desk, left of her face — as calm, empty background; the buzzing sound effect fits beside the phone on the plain desk leg area at screen-left.
- split: no
- gap_after: 160
- fx/note: 휴대폰 화면 무지 흰빛. 조끼 로고 없음. 타이머 "열 시".

--- SCENE BREAK --- (E01S02 교실 → E01S03 정류장)

### panel_008
- scene_id: E01S03 / location: LOC_BUS_STOP_SCHOOL · mood: M_DAY_OUT
- beat: ② · 긴장 5 위 · ⟨장기 복선 W5·C13⟩
- characters: JACKET_MAN (남색 작업 점퍼, 원경, 얼굴 그림자 반측면)
- size: full-bleed · aspect: 9:16
- camera: low angle, extreme wide, from the roadside below the hill.
- composition: Bottom: wide road and the bus shelter (translucent roof, blank white ad panel, metal bench). Beside the bench under the one ginkgo tree, a middle-aged man in a navy work jacket stands looking up the hill; his face in shadow, half-profile; on the LEFT chest of the jacket a faint rectangular patch where a logo was removed, visible by angle. Top: the school building on the hilltop at the end of the ginkgo avenue, crisp blue morning sky. Ginkgo leaves drifting down. No bus.
- emotion: 정체 모를 정적
- motion/direction: 남자의 시선 아래 → 위(학교)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: 얼굴 또렷하게 금지. 로고 뗀 자국은 무늬만, 글자 없음.

--- SCENE BREAK --- (E01S03 → E01S04 교무실 문 앞)

### panel_009
- scene_id: E01S04 / location: LOC_TEACHERS_OFFICE (복도 쪽 문 앞) · mood: M_DAY (하이키)
- beat: ② · 긴장 7 위 · ⟨복선 C10/W2: 흰 봉투⟩
- characters: RYU (담임, 건조) · SEOYUN (OUTFIT_SCHOOL, 굳은 미소) · DOHA (OUTFIT_SCHOOL, 배경 작게)
- size: medium · aspect: 3:4
- camera: eye level from the corridor, medium two-shot through the open sliding door.
- composition: Foreground corridor: homeroom teacher screen-left, Seoyun screen-right facing him; her LEFT hand holds a file so the blazer sleeve slides back and a white square patch shows on the inside of her LEFT wrist. Background through the open door, small but sharp: the staff room (grey steel desks, stacked blank papers, monitors showing plain grey); Doha sets a plain white blank envelope on the teacher's desk and walks out by the other door, empty-handed. Nobody looks at him.
- emotion: 담임 건조 / 서윤 굳은 미소
- motion/direction: 전경 투샷 → 안쪽 도하(봉투) → 다음 패널 서윤 정면
- dialogue_ref: 담임 "2등도 잘한 거야. 너한텐 아니겠지만." (bubble 1)
- art_space: Keep the top fifth of the frame on the left, above the teacher's head (plain corridor ceiling and upper cream wall), as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 봉투는 무지, 크게 강조하지 않는다(언급 없음). 교무실 서류·모니터 무지.

### panel_010
- scene_id: E01S04 / location: LOC_TEACHERS_OFFICE (문 앞) · mood: M_DAY
- beat: ② · 긴장 7 위 · ⟨이중의미, 복선 W2⟩
- characters: SEOYUN (완벽한 공개 미소) · RYU (어깨 일부)
- size: medium · aspect: 3:4
- camera: eye level, slightly to Seoyun's side (three-quarter front), medium shot from the hips up.
- composition: One frame (no split): Seoyun centre-right, a perfect polite smile that does not reach the eyes, facing the teacher (his shoulder and arm at the screen-left edge, cropped). Because of the side angle, her hand hidden behind her back is visible at lower right: a tight fist, knuckles pale. Corridor and the staff-room doorway softly behind.
- emotion: 겉은 완벽, 속은 분함
- motion/direction: 위 미소 → 아래 주먹(이중 연출)
- dialogue_ref: 담임 "서진 장학, 아직 끝난 거 아니다. 기말까지 3등 안, 벌점 하나 없이. 알지?" (bubble 1, tail → screen-left) · 서윤(생각) "기말에서 뒤집으면 돼." (bubble 2, thought)
- art_space: Keep the top third of the frame, above both heads (plain upper corridor wall and ceiling light), as calm, empty background.
- split: no (style-bible §5-2-2 방식: 한 프레임 전경/후경)
- gap_after: 160
- fx/note: 주먹을 얼굴보다 작게, 그러나 분명히.

--- SCENE BREAK --- (E01S04 → E01S05 복도, 2교시 뒤)

### ③ 마찰형 첫 만남 — P11~P19

### panel_011
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY (창 역광, 금빛 림라이트)
- beat: ③ · 긴장 6 위·설
- characters: SEOYUN (공세) · DOHA (OUTFIT_SCHOOL, 백팩 왼쪽 어깨)
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, medium (knees up).
- composition: Seoyun screen-left steps in front of Doha and blocks his way; Doha screen-right, tall and slouched, backlit by the corridor windows behind him (golden rim light). Height gap clear: the top of her head at his chin. Doha's backpack on his LEFT shoulder turned away from camera (keyring not visible).
- emotion: 도전, 날 선 자존심
- motion/direction: 서윤 → 도하 (좌→우)
- dialogue_ref: 서윤 "백도하. 너 몇 개 틀렸어?" (bubble 1)
- art_space: Keep the top third of the frame on the left, above Seoyun's head (soft bright window glow and pale corridor ceiling), as calm, empty background.
- split: no
- gap_after: 30
- fx/note: S05 축 고정: 서윤 screen-left / 도하 screen-right.

### panel_012
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 5 설
- characters: DOHA (오래 머문 시선, 무표정)
- size: medium · aspect: 3:4
- camera: Seoyun's point of view, slightly low, close-up.
- composition: Doha's face centred in the middle band, flat calm expression, bangs over the eyebrows, eyes lowered slightly toward her hands (below frame). Backlit hair edged with gold. His head starts below the top fifth of the frame.
- emotion: 무심
- motion/direction: 시선 아래 → 다음 패널 손
- dialogue_ref: 도하 "안 틀렸어." (bubble 1)
- art_space: Keep the top fifth of the frame (bright blurred window glow above his hair) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 안경 없음.

### panel_013
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 6 위 · ⟨복선 C2 준비⟩
- characters: SEOYUN (공세, 한 발 다가섬) · DOHA
- size: medium · aspect: 3:4
- camera: eye level medium two-shot, slightly favouring Seoyun.
- composition: Seoyun screen-left steps closer, chin up; Doha screen-right. In the lower third, Seoyun's hand unconsciously pulls a silvery-white gum wrapper out of her blazer pocket (sharp detail).
- emotion: 공세
- motion/direction: 위 말싸움 → 아래 손(무의식)
- dialogue_ref: 서윤 "전학 오자마자 첫 시험이 만점? 전 학교 어디야." (bubble 1) · 도하 "멀어." (bubble 2)
- art_space: Keep the top third of the frame, above both heads (window glow and pale ceiling), as calm, empty background — Seoyun's bubble upper-left, Doha's short bubble upper-right.
- split: no
- gap_after: 0
- fx/note: 껌 포장지 무지 은백색.

### panel_014
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 6 비 · ⟨복선 C2 1차: 학 접는 방식⟩ · **ECU 판별 필수**
- characters: SEOYUN (손만)
- size: insert · aspect: 1:1
- camera: extreme close-up of her fingers, eye level with the hands.
- composition: Seoyun's fingers (short trimmed nails) finishing a tiny crane from a silvery-white gum wrapper, centre-to-lower frame; the two signature details clearly readable: the head tip folded down into a small hook, and the tail tip folded down once. Background: soft blurred golden corridor light.
- emotion: 버릇, 긴장
- motion/direction: 정중앙 고정, 독자가 "모양"을 기억하게
- dialogue_ref: 서윤 "학원은? 과외?" (bubble 1, tail → off-frame top-left) · 도하 "혼자." (bubble 2, tail → off-frame top-right)
- art_space: Keep the top two-fifths of the frame (soft blurred golden corridor light) as calm, empty background; the crane and fingers stay in the lower three-fifths.
- split: no
- gap_after: 30
- fx/note: 접힌 면마다 선. 학 두 특징 = 서윤 학·도하 키링 학 전용.

### panel_015
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 7 비 · ⟨복선 C3 준비⟩
- characters: DOHA (눈 클로즈업, 오래 머문 시선)
- size: medium · aspect: 3:4
- camera: close-up of Doha's eyes, frame tilted (Dutch about 10°) toward the direction of his gaze, down-left.
- composition: Doha's eyes and bangs in the upper half, his gaze lowered and resting long on something below screen-left (her hands); lower half falls away into soft golden blur along the tilt. Quiet, unreadable feeling.
- emotion: 오래 머문 시선(정체 모를 감정)
- motion/direction: 시선 대각선 아래 왼쪽 → 다음 패널 서윤
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: 서윤은 모른다(프레임에 없음).

### panel_016
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 **8** 비 · ⟨복선 C3 1차, 이중의미⟩
- characters: DOHA (무심코) · SEOYUN (멈칫, 눈 가늘게)
- size: medium · aspect: 3:4
- camera: two-shot medium close-up, slight push toward Seoyun.
- composition: Doha screen-right, mouth just closing after speaking, flat face; Seoyun screen-left in the nearer plane, frozen mid-fold, eyes narrowing in suspicion. A half-folded gum-wrapper crane in her fingers at lower left.
- emotion: 의심, 위화감
- motion/direction: 도하 대사 → 서윤 반응(우→좌)
- dialogue_ref: 도하 "아직도 이런 거 접어?" (bubble 1) · 서윤 "아직도? 우리가 언제 봤다고." (bubble 2)
- art_space: Keep the top third of the frame (bright window glow above both heads) as calm, empty background — Doha's bubble upper-right first, Seoyun's upper-left, slightly lower.
- split: no
- gap_after: 30
- fx/note: 이 컷이 ③ 긴장 정점. 바로 P17~18 코미디로 덮는다.

### panel_017
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 4 코 · ⟨복선 C3 덮기⟩
- characters: DOHA (무표정 개그, 턱짓)
- size: medium · aspect: 3:4
- camera: frontal bust, eye level.
- composition: Doha centred, deadpan, eyebrows level, pointing with his chin down toward her hands (screen-left below frame); the faintest lift at one corner of the mouth. Backlit corridor windows behind.
- emotion: 무표정 개그
- motion/direction: 턱짓 → 다음 패널 손바닥
- dialogue_ref: 도하 "…방금 1분 동안 세 개 접었잖아." (bubble 1)
- art_space: Keep the top fifth of the frame (window glow above his hair) as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 만화 기호(땀방울 등) 금지.

### panel_018
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 4 코
- characters: SEOYUN (당황, 귀까지 빨강) · TAEMIN (배경, 뿜음)
- size: medium · aspect: 3:4 (style-bible 권장 1:1에서 변경: art_space 확보)
- camera: close-up of her open palm in the foreground, her face behind, eye level.
- composition: Lower third, sharp: Seoyun's open palm holding three tiny silvery gum-wrapper cranes. Middle band, screen-right: her face flushed to the ears, eyes darting away. Middle band, screen-left background, soft: Taemin bursting out laughing behind her.
- emotion: 민망, 코미디
- motion/direction: 손바닥(증거) → 얼굴 → 태민
- dialogue_ref: 서윤 "…두 개야." (bubble 1) · 태민 "세 갠데." (bubble 2, tail → Taemin)
- art_space: Keep the top third of the frame (blurred corridor windows and ceiling above both heads) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 같은 얼굴 모델 안의 과장(치비 금지).

### panel_019
- scene_id: E01S05 / location: LOC_HALLWAY · mood: M_DAY
- beat: ③ · 긴장 6 위·설 · ⟨이중의미, 복선 W2⟩
- characters: SEOYUN (도발) · DOHA (담담)
- size: medium · aspect: 3:4
- camera: side medium at the moment she passes him, eye level.
- composition: Seoyun screen-left mid-stride, passing Doha, her hand just pressing one tiny gum-wrapper crane against his chest; Doha screen-right catching it in his palm, flat face, eyes following her. Motion of her ponytail.
- emotion: 서윤 도발 / 도하 담담
- motion/direction: 서윤 좌→우로 지나감, 도하 시선은 그녀를 따라감
- dialogue_ref: 서윤 "1등에 장학금까지. 다 가져가서 좋겠다." (bubble 1) · 도하 "안 가져가." (bubble 2)
- art_space: Keep the top third of the frame (bright window glow and pale ceiling) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 도하 손의 학은 작게(판별 불필요).

--- SCENE BREAK --- (E01S05 복도 → E01S06 교실, 4교시 끝)

### ④ 계약 — P20~P27

### panel_020
- scene_id: E01S06 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 6 위 · ⟨복선 C9·W1: 학 모양 제보 쪽지⟩
- characters: HARAM (근무 중 정중, 왼팔 진홍 완장) · 반 전체 · SEOYUN · DOHA (중경)
- size: medium · aspect: 3:4
- camera: eye level from beside the teacher's desk, medium, toward the front door.
- composition: Haram entering through the front sliding door, upright, plain crimson armband on her LEFT upper arm, thin silver rectangular glasses. In the foreground, sharp: her hand holding the tip note — a clumsy crane-shaped folded note of plain paper with a plain head and a plain tail (NOT the hook-head / folded-tail fold). Students in the midground falling silent, Seoyun and Doha among them.
- emotion: 위압, 정적
- motion/direction: 문 → 쪽지(전경) → 반
- dialogue_ref: 하람 "선도부입니다. 제보함에 제보가 들어왔습니다." (bubble 1)
- art_space: Keep the top fifth of the frame (plain cream wall and the upper edge of the empty chalkboard) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 쪽지 안쪽 무지. 아무도 모양을 언급하지 않는다. 진홍은 완장만.

### panel_021
- scene_id: E01S06 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 8 위 · ⟨복선 W1, 타이머 "내일"⟩
- characters: HARAM (단호, 정면) · SEOYUN (손만)
- size: medium · aspect: 3:4
- camera: low angle from Seoyun's desk height, Haram frontal.
- composition: One frame (no split): Haram standing in the aisle, mid-ground centre, looking down, chin slightly raised, armband on her LEFT arm (on the viewer's right). Lower third foreground, sharp: Seoyun's hand on the desk crushing a silvery gum-wrapper crane in her fist.
- emotion: 공포를 누름
- motion/direction: 위 하람 → 아래 구겨지는 학
- dialogue_ref: 하람 "우리 학년에 밤마다 편의점에서 일하는 학생이 있다는 제보입니다." (bubble 1) · 하람 "내일, 확인하겠습니다." (bubble 2)
- art_space: Keep the top third of the frame (plain classroom ceiling and fluorescent fixtures above Haram's head) as calm, empty background.
- split: no (비트시트 "정면 + 손 인서트"를 전경/후경으로 풂)
- gap_after: 160
- fx/note: 학 구겨짐 = 표정 대신.

--- SCENE BREAK --- (E01S06 교실 → E01S07 계단참, 점심)

### panel_022
- scene_id: E01S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ④ · 긴장 **9** 위·비 · ⟨복선 C4 1차, 이중의미⟩
- characters: DOHA (압박, 위 칸) · SEOYUN (아래, 뒷모습/옆)
- size: large · aspect: 9:16
- camera: low angle from below on the stairs, looking up.
- composition: Top: the locked grey steel rooftop door and the dusty window glowing apricot behind Doha; Doha stands several steps up, almost a silhouette in the backlight, rim light on hair and shoulders, a low cool stare from above. Bottom foreground: the back of Seoyun's head and shoulders (low ponytail) as she has just come up, small against him. Stacked old desks and chairs against the wall, violet shadows.
- emotion: 차가운 압박
- motion/direction: 아래(서윤) → 위(정보를 쥔 사람)
- dialogue_ref: 도하 "어젯밤 거기, 너지?" (bubble 1)
- art_space: Keep the top sixth of the frame (the plain grey steel door and hazy apricot window glow above Doha's head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 계단참 축: 위 = 정보를 쥔 사람. 노을 하늘 그리지 않음(점심).

### panel_023
- scene_id: E01S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ④ · 긴장 8 위
- characters: SEOYUN (얼어붙음)
- size: medium · aspect: 3:4
- camera: extreme close-up of her face, then her empty hand in the same frame.
- composition: One frame (no split): Seoyun's face in extreme close-up filling the upper two-thirds, eyes wide, breath held, throat swallowing, violet shadow on one side and apricot rim on the other. Lower third foreground: her empty open hand, fingers twitching — no paper to fold.
- emotion: 공포, 머릿속 계산
- motion/direction: 눈 → 빈손
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: 무대사 단독 컷.

### panel_024
- scene_id: E01S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ④ · 긴장 7 위·설 · (제안 = 주도권의 착각)
- characters: SEOYUN (공세로 전환) · DOHA
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, framed from the knees up; stairs rise from screen-left (low) to screen-right (high).
- composition: Doha screen-right on the upper step; Seoyun screen-left lifting her head and stepping up one stair, so their eye lines become level for the first time. Both heads sit at about 55–60% of the frame height. Apricot window light behind Doha, violet wall behind Seoyun.
- emotion: 결단, 반격
- motion/direction: 서윤이 좌하 → 우상으로 올라섬(구도 역전)
- dialogue_ref: 서윤 "어젯밤 내가 거기 있던 건, 너 만나러 간 거야." (bubble 1) · 서윤 "우리 사귀는 걸로 해." (bubble 2)
- art_space: Keep the left half of the frame, top 45% (plain violet-shadowed wall above Seoyun's head), as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 키 관계 유지(올라선 뒤 눈높이 같음).

### panel_025
- scene_id: E01S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ④ · 긴장 5 코·설 · ⟨복선 C5 1차: 조항 3 즉답, 이중의미⟩
- characters: SEOYUN (손·종이) · DOHA (작게)
- size: medium · aspect: 3:4
- camera: over Seoyun's shoulder, down at her hands, medium.
- composition: Lower half: Seoyun's hands writing fast with a pen on a single sheet of plain blank white paper torn from a notebook (one ragged edge), pressed against the wall. Right-middle background, small: Doha leaning on the stair rail, face at about 45% of frame height in the right third, flat face, answering too easily.
- emotion: 서윤 몰아붙임 / 도하 담담
- motion/direction: 손·종이 → 도하
- dialogue_ref: 서윤 "1조, 기말 성적 발표일까지. 2조, 학교에서만." (bubble 1) · 서윤 "3조, 밤 10시 이후엔 서로 안 묻기." (bubble 2) · 도하 "좋아." (bubble 3, small, above Doha)
- art_space: Keep the top third of the frame (dusty apricot window glow and the plain violet wall) as calm, empty background — Seoyun's two bubbles left and centre, Doha's short one at the right above his head.
- split: no
- gap_after: 30
- fx/note: 종이 무지(글씨 흔적도 없음, 펜 끝만 닿음). 말풍선 3개 허용(대본 §F).

### panel_026
- scene_id: E01S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ④ · 긴장 6 비·설 · ⟨복선 C5: "일 끝나면 연락해", 조항 5·6 씨앗⟩
- characters: DOHA (묘한 배려) · SEOYUN (등 일부 전경)
- size: medium · aspect: 3:4
- camera: medium on Doha, Seoyun's back partly in the foreground.
- composition: Doha screen-right-of-centre leaning on the stair railing, flat face, eyes on her. Lower-left foreground, soft: Seoyun's shoulder, ponytail and the torn paper in her hand. Apricot rim light on Doha.
- emotion: 서윤 경계 / 도하 묘한 배려
- motion/direction: 서윤(전경) → 도하
- dialogue_ref: 서윤 "4조, 손잡기까지. 사진 금지. 5조, 일부러 져 주면 바로 파기." (bubble 1) · 서윤 "6조, 먼저 진심 되는 쪽이 비밀 하나 말하기." (bubble 2) · 도하 "대신 네 오답노트 전부. 그리고 일 끝나면 연락해." (bubble 3)
- art_space: Keep the top two-fifths of the frame (hazy apricot window and plain violet stairwell wall above Doha's head) as calm, empty background for three bubbles.
- split: no
- gap_after: 30
- fx/note: 말풍선 3개 허용. letterer가 도하 줄을 2줄 안에.

### panel_027
- scene_id: E01S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ④ · 긴장 7 설 · 체결(P27) · **캡처 컷 후보** · ep09 조항 7 구도
- characters: SEOYUN · DOHA (두 손만)
- size: insert · aspect: 1:1
- camera: close-up of the two hands, backlit, eye level.
- composition: Centre-to-lower frame: little fingers hooked, thumbs pressed together (pinky promise seal), apricot backlight glowing through the edges of the fingers. Lower-left corner: Seoyun's other hand holding the plain blank contract folded in quarters. Soft violet blur behind.
- emotion: 체결, 묘한 설렘
- motion/direction: 정지
- dialogue_ref: 서윤 "도장." (bubble 1) · 도하 "…응." (bubble 2)
- art_space: Keep the top two-fifths of the frame (soft apricot backlight haze) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 계약서 무지. 신체 접촉은 새끼손가락까지.

--- SCENE BREAK --- (E01S07 계단참 → E01S08 교실)

### ⑤ 중반 소반전 — P28~P37

### panel_028
- scene_id: E01S08 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 4 코
- characters: SEOYUN (당당) · DOHA (무표정) · 반 전체
- size: medium-wide · aspect: 4:3
- camera: wide from the back of the class toward the front, eye level.
- composition: At the front by the chalkboard, Seoyun stands with her arm linked through Doha's, chin up; Doha deadpan. All the students in the foreground and midground frozen mid-motion (chopsticks, phones, half-turned heads).
- emotion: 서윤 당당 / 도하 무표정 / 반 일시정지
- motion/direction: 반 시선 → 앞의 두 사람
- dialogue_ref: 서윤 "우리 사귀어. 질문 받아." (bubble 1)
- art_space: Keep the top third of the frame (empty green chalkboard and cream wall above the pair) as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 칠판 빈 상태. 키링 보이지 않게.

### panel_029
- scene_id: E01S08 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 3 코
- characters: YERIN · TAEMIN · 반 전체
- size: medium-wide · aspect: 4:3
- camera: high wide over the class, big crowd motion.
- composition: Uproar: Yerin (screen-left) waving her phone (seen from the back, pale lilac case, or the screen as a soft blank white glow), Taemin (screen-right) slamming his desk, mouth wide; students laughing, standing up. Back wall and lockers in the upper band.
- emotion: 대소동, 웃음
- motion/direction: 사방 동세
- dialogue_ref: 예린 "지금 단톡 난리 났어!" (bubble 1, shout) · 태민 "전학 와서 1등 하고 한서윤이랑 사귀고, 너 뭔데!" (bubble 2, shout)
- art_space: Keep the top third of the frame (plain cream back wall and grey lockers) as calm, empty background — two bubbles side by side, Yerin's left, Taemin's right.
- split: no
- gap_after: 160
- fx/note: 휴대폰 화면 무지. 집중선·만화 기호 금지.

--- SCENE BREAK --- (E01S08 교실 → E01S09 매점)

### panel_030
- scene_id: E01S09 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑤ · 긴장 5 비 · ⟨복선 C1 2차⟩
- characters: DOHA (무심) · SEOYUN (의아) · SNACK_CLERK (등·어깨 전경)
- size: medium · aspect: 3:4
- camera: from inside the snack-shop window, medium, looking out at the counter.
- composition: Foreground screen-left: the clerk's shoulder and apron (back to camera). Through the window opening, centre: Doha holding up soft bread in a plain clear wrap with no print, chosen from the short-date shelf; Seoyun beside him screen-right, puzzled sideways look. Students queueing behind, soft.
- emotion: 무심 / 서윤 의아
- motion/direction: 직원 → 빵 → 서윤 시선
- dialogue_ref: 매점 직원 "그거 오늘까지야, 학생. 반값." (bubble 1, tail → clerk) · 도하 "알아요." (bubble 2)
- art_space: Keep the top third of the frame (the plain upper window frame and soft hallway wall beyond) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 가격표·라벨 없음.

### panel_031
- scene_id: E01S09 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑤ · 긴장 5 위
- characters: HARAM (차가운 관찰, 어깨 전경) · DOHA · SEOYUN
- size: medium · aspect: 3:4
- camera: from Haram's position at the end of the queue, medium two-shot of the pair.
- composition: Lower-left foreground: Haram's shoulder with the plain crimson armband on her LEFT upper arm and the edge of her bob and silver glasses. Midground: Seoyun (screen-left) and Doha (screen-right) at the window, turning toward her.
- emotion: 차가운 관찰
- motion/direction: 하람 시선 → 두 사람 위아래로 훑음
- dialogue_ref: 하람 "축하드려요. 1등이랑 2등이면 잘 어울리네요." (bubble 1, tail → Haram lower-left)
- art_space: Keep the top fifth of the frame (plain hallway wall and ceiling above the pair) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: —

### panel_032
- scene_id: E01S09 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑤ · 긴장 6 위 · 서프라이즈 예고
- characters: HARAM (서늘한 폭로 직전) · SEOYUN
- size: medium · aspect: 3:4
- camera: tight two-shot close-up of both faces, eye level.
- composition: Haram screen-left leans in close to Seoyun's ear, voice low, cool sidelong look; Seoyun screen-right, eyes sliding toward her. Faces in the middle band.
- emotion: 불길함
- motion/direction: 하람 입가 → 서윤 귀
- dialogue_ref: 하람 "근데, 알고 계셨어요?" (bubble 1)
- art_space: Keep the top fifth of the frame (soft yellowish snack-bar light, out of focus) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: P33 앞 30(짧게) → 반전 단독 컷으로.

### panel_033
- scene_id: E01S09 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑤ · 긴장 **8** 비 · **⟨반전 A⟩** C6 회수 · W2
- characters: HARAM (서늘한 폭로)
- size: large · aspect: 9:16
- camera: close-up, slight Dutch angle (about 8°), eye level.
- composition: Haram alone, face in the middle of the tall frame, cool sidelong look, lips close as if whispering, light flashing on her silver rectangular glasses; the snack bar blurred behind; lower part: her armband shoulder and the blurred queue.
- emotion: 서늘한 폭로
- motion/direction: 단독 정지
- dialogue_ref: 하람 "1등이 장학금 거절했대요." (bubble 1) · 하람 "그래서 순번이 2등한테 내려온 거예요." (bubble 2)
- art_space: Keep the top quarter of the frame (soft out-of-focus snack-bar ceiling light) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 반전 A = 단독 대형. 뒤 160으로 숨.

### panel_034
- scene_id: E01S09 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑤ · 긴장 7 비 · 반전 A 대가
- characters: SEOYUN (얼어붙음) · DOHA (배경 아웃포커스) · HARAM (프레임 밖)
- size: medium · aspect: 3:4
- camera: close-up of Seoyun, shallow focus.
- composition: Seoyun screen-right-of-centre, frozen, eyes wide; her hand holding a colour-blocked milk carton stopped mid-way. Background screen-left, out of focus: Doha tearing open his bread bag, unaware.
- emotion: 충격, 빚진 느낌
- motion/direction: 정지
- dialogue_ref: 하람(프레임 밖) "그러니까 이제 기록 하나면 끝이에요, 한서윤 씨." (bubble 1, tail → screen-left edge)
- art_space: Keep the top fifth of the frame on the left (blurred snack-bar light above Doha's soft figure) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 우유 팩 무지.

### panel_035
- scene_id: E01S09 / location: LOC_SNACK_BAR (서윤이 복도 쪽으로 몸을 돌림, 배경은 매점 유지) · mood: M_DAY
- beat: ⑤ · 긴장 6 비·설 · ⟨복선 W2: 답 보류⟩
- characters: SEOYUN (추궁) · DOHA (회피, 손 내밂)
- size: medium · aspect: 3:4
- camera: medium two-shot, eye level.
- composition: Seoyun screen-left turned toward Doha; Doha screen-right, glancing up toward the bell (off-frame upper right) and holding his hand out to her; the offered open hand sits at the exact centre of the frame. Snack-bar window and queue softly behind.
- emotion: 추궁 / 회피
- motion/direction: 서윤 질문 → 도하 턱짓(종) → 내민 손(중앙) → 다음 패널 손
- dialogue_ref: 서윤 "…너, 왜 거절했어?" (bubble 1) · 도하 "종 쳤어." (bubble 2) · 효과음 [예비 종]
- art_space: Keep the top third of the frame (plain hallway wall and ceiling) as calm, empty background — the bell sound effect at the top-right corner.
- split: no
- gap_after: 80
- fx/note: 종소리는 그리지 않는다(뷰어 sfx).

--- SCENE BREAK --- (E01S09 매점 → E01S10 복도)

### panel_036
- scene_id: E01S10 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑤ · 긴장 5 설 · 무대사 구간 1 시작
- characters: SEOYUN · DOHA (손만)
- size: insert · aspect: 1:1
- camera: close-up of two hands, eye level.
- composition: Seoyun's hand (white patch just visible at the inside of her LEFT wrist under the sleeve) hesitating in the air, then her fingers touching and taking Doha's open hand. Golden corridor light behind.
- emotion: 망설임 → 설렘
- motion/direction: 좌 손 → 우 손
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: —

### panel_037
- scene_id: E01S10 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑤ · 긴장 5 설 · **설렘 정지 컷 · 캡처 컷 후보**
- characters: SEOYUN · DOHA (뒷모습) · 복도 학생들(배경)
- size: full-bleed · aspect: 9:16
- camera: from behind, long wide down the corridor; tall still frame.
- composition: The two walk away from camera hand in hand down the long corridor; windows on screen-left pour golden ginkgo light across the terrazzo floor; Seoyun's ears alone are red; students along the corridor turn to look. Fewer lines, more light and planes.
- emotion: 설렘(저장각)
- motion/direction: 시선 소실점 → 정지
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: 도하 백팩은 왼쪽 어깨, 키링은 그늘/작게(판별 불가). 무대사 구간 1 끝, 320 정지.

--- SCENE BREAK --- (E01S10 복도 → E01S11 교실, 7교시 뒤)

### ⑥ 굴욕·반격 — P38~P48

### panel_038
- scene_id: E01S11 / location: LOC_CLASSROOM (오후 늦은 해) · mood: M_DAY
- beat: ⑥ · 긴장 6 위 · 타이머 붕괴("내일" → "지금")
- characters: HARAM · GEONU (뒤, 머리 하나 위) · 반 전체 · SEOYUN · DOHA
- size: medium-wide · aspect: 4:3
- camera: low angle at the doorway.
- composition: Haram in front at the classroom door, Geonu (taller, a head above, hesitant) right behind her; both with plain crimson armbands on the LEFT arm. Low late-afternoon sunlight from the windows, long shadows across the floor; seated students turning toward the door.
- emotion: 위협 재등장
- motion/direction: 문 → 교실 안
- dialogue_ref: 하람 "제보 확인 전에, 원칙상 소지품부터 보겠습니다." (bubble 1)
- art_space: Keep the top third of the frame (plain door frame, upper wall and ceiling above Haram's head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: S11 전체 = 낮아진 오후 해(같은 빛 유지).

### panel_039
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 7 위 · 서스펜스(조끼)
- characters: HARAM (손) · SEOYUN (눈)
- size: medium · aspect: 3:4
- camera: close-up of Haram's hand in the foreground, Seoyun's eyes behind.
- composition: One frame (no split): lower half foreground, sharp: Haram's hand reaching for the handle of Seoyun's worn black backpack on the desk hook. Middle-right, soft: Seoyun's eyes dropping toward the bottom of the bag where the vest is.
- emotion: 공포(독자만 조끼를 안다)
- motion/direction: 손 → 가방 바닥 ← 서윤 시선
- dialogue_ref: 하람 "한서윤 학생, 가방." (bubble 1, tail → hand side)
- art_space: Keep the top fifth of the frame on the left (plain cream wall and soft window light) as calm, empty background.
- split: no (비트시트 "손 + 눈 인서트"를 전경/후경으로 풂)
- gap_after: 30
- fx/note: 이 컷에서는 지퍼를 닫힌 상태로(초록은 P41에서).

### panel_040
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 8 위 · 굴욕
- characters: SEOYUN (굴욕) · GEONU (문가, 머뭇) · HARAM · 반 전체
- size: medium-wide · aspect: 4:3
- camera: close-up of Seoyun screen-left, the room's gazes behind.
- composition: Seoyun's humiliated face large at screen-left-of-centre, lips pressed. Behind and to the right: rows of classmates' eyes on her; at the door far right, Geonu hesitating; Haram's arm at the edge.
- emotion: 굴욕
- motion/direction: 반 시선 → 서윤
- dialogue_ref: 건우 "부장… 이거 쌤 없이 해도 돼요?" (bubble 1, small, tail → Geonu) · 하람 "확인만입니다." (bubble 2)
- art_space: Keep the top third of the frame (plain cream wall above the classmates' heads) as calm, empty background — Geonu's bubble right, Haram's centre.
- split: no
- gap_after: 0
- fx/note: —

### panel_041
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY (조명 좁힘)
- beat: ⑥ · 긴장 **9** 위 · 서스펜스 정점
- characters: HARAM (손가락) · SEOYUN 가방
- size: insert · aspect: 1:1
- camera: extreme close-up of the bag zip.
- composition: The zip half open; through the gap, the tip of a rolled vivid green vest; Haram's index finger hovering about 1 cm above it. Light narrowed onto the zip; the rest falls into soft shadow.
- emotion: 들키기 직전
- motion/direction: 정지, 손가락 끝에 집중
- dialogue_ref: 없음 (무대사) · 효과음 [지이익—]만
- art_space: none for bubbles; keep a small calm shadowed patch in the top-right corner for the zip sound effect.
- split: no
- gap_after: 0
- fx/note: 무대사 단독 컷(효과음만). 낮 장면 선명 초록 허용 지점.

### panel_042
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 8 위 · ⟨복선 C2 2차: 키링, 흐림⟩
- characters: SEOYUN (반격 시작) · HARAM · DOHA 백팩(전경)
- size: medium · aspect: 3:4
- camera: medium two-shot, eye level; foreground object out of focus.
- composition: Seoyun's hand grabs Haram's wrist; Seoyun screen-right, Haram screen-left (armband on her LEFT arm). Foreground lower-left, strongly out of focus: Doha's black backpack hanging on the hook of the next desk, its LEFT strap toward the aisle, a clear resin keyring swinging — a blurred pale ivory shape only, fold NOT readable. Focus on the two girls.
- emotion: 반격 시작
- motion/direction: 손목 잡기(정지) → 서윤
- dialogue_ref: 서윤 "첫째." (bubble 1)
- art_space: Keep the top fifth of the frame on the right, above Seoyun's head (plain cream wall), as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **키링 클로즈업 금지, 판별 불가**(P56을 위해 아낌).

### panel_043
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 7 위 · 차분한 사이다 · ⟨C2 흘림, R3⟩
- characters: SEOYUN (공세, 손가락 셈) · DOHA 백팩 키링(전경 흐림)
- size: medium · aspect: 3:4
- camera: frontal bust of Seoyun, eye level; same foreground object out of focus.
- composition: Seoyun centre, calm and sharp, chin up, counting on her fingers (two, then three). Lower-left foreground: the same blurred resin keyring swinging once more, a soft pale shape.
- emotion: 차분한 사이다
- motion/direction: 손가락 → 얼굴
- dialogue_ref: 서윤 "소지품 검사는 담임 입회. 둘째, 가방은 본인이 직접 열고." (bubble 1) · 서윤 "셋째, 남의 가방에 손대는 건 그 자체로 위반이야." (bubble 2)
- art_space: Keep the top third of the frame (plain cream wall and soft late-afternoon window light) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: P42와 같은 흐림 정도.

### panel_044
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 7 위 · 하람 균열(회차 유일의 반말)
- characters: HARAM (당황, 안경 밀어 올림)
- size: medium · aspect: 3:4
- camera: close-up, slight shake, eye level.
- composition: Haram's face, flustered, pushing her silver rectangular glasses up, mouth open mid-protest; hair swinging (motion), crimson armband at the lower edge.
- emotion: 당황, 균열
- motion/direction: 흔들림
- dialogue_ref: 하람 "…아니, 그게 아니라!" (bubble 1, shout)
- art_space: Keep the top quarter of the frame (plain cream wall) as calm, empty background for a shout bubble.
- split: no
- gap_after: 30
- fx/note: 동세는 머리카락 흔들림으로만, 집중선 금지.

### panel_045
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 6 위 · 통제권 회수
- characters: SEOYUN
- size: medium · aspect: 3:4
- camera: medium on Seoyun seated, eye level.
- composition: Seoyun zips her bag shut and sets it on her lap, both arms around it, composed tight-lipped expression, eyes up at Haram (off-frame screen-left).
- emotion: 통제권 회수
- motion/direction: 가방 → 시선 왼쪽
- dialogue_ref: 서윤 "선생님 모셔 올까? 기록 남기자, 선도부장." (bubble 1)
- art_space: Keep the top fifth of the frame (plain cream wall) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 지퍼 닫힘, 초록 안 보임.

### panel_046
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 5 위 · 굴욕을 삼킴
- characters: HARAM · GEONU (뒤)
- size: medium · aspect: 3:4
- camera: side medium, eye level.
- composition: Haram in profile screen-left, jaw tight, eyes lowered, re-adjusting the crimson armband on her LEFT arm while stepping back; Geonu behind her screen-right, taller, looking away awkwardly.
- emotion: 굴욕을 삼킴, 위협 보류
- motion/direction: 뒤로 물러섬(우→좌)
- dialogue_ref: 하람 "…다음엔, 절차대로 하겠습니다." (bubble 1)
- art_space: Keep the top fifth of the frame (plain upper wall) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: —

### panel_047
- scene_id: E01S11 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 3 코 · ⟨C1 메아리⟩
- characters: DOHA (무표정 개그) · 반 전체(웃음)
- size: medium · aspect: 3:4
- camera: bust of Doha, eye level.
- composition: Doha deadpan, holding up the soft bread in plain clear wrap beside his face, just taken out of his own bag; the bag and keyring stay below the frame. Behind: classmates bursting into laughter, soft.
- emotion: 무표정 개그
- motion/direction: 빵 → 웃는 반
- dialogue_ref: 도하 "내 가방은 내가 열게." (bubble 1) · 도하 "빵 하나. 오늘까지야." (bubble 2)
- art_space: Keep the top third of the frame (plain cream wall above the laughing class) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 대본 편집 노트 반영: 가방·키링 프레임 밖. 소유욕 연출 금지.

--- SCENE BREAK --- (E01S11 교실 → E01S12 은행나무 길 밤 21:40)

### panel_048
- scene_id: E01S12 / location: LOC_GINKGO_ROAD @NIGHT (전경 LOC_HALLWAY @NIGHT 창) · mood: M_SCHOOL_NIGHT
- beat: ⑥ · 긴장 6 위 · 타이머(21:44 버스) · 서스펜스(도하의 시선)
- characters: SEOYUN (교복, 가방 메고 뜀) · DOHA (교복, 창가 실루엣)
- size: large · aspect: 9:16
- camera: high angle from the second-floor corridor window, looking down.
- composition: Upper-left foreground: Doha's silhouette at the window frame (corridor fluorescent light behind him, window glass reflecting faintly). Below, filling the middle and lower frame: the uphill ginkgo avenue at night, leaves glowing yellow under orange streetlights, low stone wall; small figure of Seoyun running downhill with her backpack, ponytail flying.
- emotion: 서윤 다급 / 도하 지켜봄
- motion/direction: 위(도하) → 아래(뛰어가는 서윤), 다음 장면 편의점으로
- dialogue_ref: 서윤(생각) "버스까지 4분." (bubble 1, thought) · 효과음 [야자 끝 종]
- art_space: Keep the top-right sixth of the frame (dark reflective window glass) calm for the bell sound effect, and a calm dark patch of low stone wall and road in the lower-right quarter, beside the running Seoyun, for her thought bubble.
- split: no
- gap_after: 160
- fx/note: 서윤은 도하를 모른다. 도하 안경 없음(교복).

--- SCENE BREAK --- (E01S12 → E01S13 창고 21:58)

### ⑦ 감속 — P49~P55

### panel_049
- scene_id: E01S13 / location: LOC_CVS_STOCKROOM · mood: M_NIGHT (천장 형광 + 모니터 회색빛)
- beat: ⑦ · 긴장 5 위 · ⟨복선 W3: CCTV 모니터⟩
- characters: SEOYUN (OUTFIT_SCHOOL → OUTFIT_STORE 전환 중)
- size: medium · aspect: 3:4
- camera: mirror-reflection composition, eye level.
- composition: Seoyun seen in a small mirror, pulling the plain vivid green vest on over her white shirt (blazer just taken off, over her arm), tired eyes. Around the mirror: stacked cardboard boxes with no print, mop and bucket, an empty hook. Corner of the frame (upper-left, behind): a monitor showing grey blurred CCTV shapes only.
- emotion: 이중생활 전환, 피로
- motion/direction: 거울 속 얼굴 → 모니터
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: 모니터 회색 흐림만. 조끼 로고 없음.

--- SCENE BREAK --- (E01S13 창고 → E01S14 편의점)

### panel_050
- scene_id: E01S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑦ · 긴장 5 위·비 · ⟨복선 C4 2차: 미스디렉션, C2, 이중의미⟩
- characters: SEOYUN (OUTFIT_STORE, 안도)
- size: medium · aspect: 3:4
- camera: from the customer side, eye level, medium on Seoyun behind the counter.
- composition: Seoyun screen-right behind the counter, folding a discarded blank white receipt into a crane and dropping it into the lidless glass jar at the counter's screen-left end (jar about two-thirds full). Behind her: cigarette shelf as soft plain colour blocks, kept low-contrast. Empty store after the rush.
- emotion: 안도(틀린 확신)
- motion/direction: 손 → 유리병(왼쪽 끝)
- dialogue_ref: 서윤(독백) "아무도 몰라." (bubble 1, thought) · 서윤(독백) "백도하도… 어젯밤 한 번 본 게 다야." (bubble 2, thought)
- art_space: Keep the top third of the frame (plain fluorescent ceiling and the soft, plain top of the shelving) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 영수증 무지. 180도 규약.

### panel_051
- scene_id: E01S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑦ · 긴장 4 위 · ⟨제목 이중 의미, C1 메아리⟩
- characters: SEOYUN (손만)
- size: insert · aspect: 1:1
- camera: close-up of hands, scanner and bin, counter height.
- composition: Lower three-quarters: Seoyun's hands scanning expired orange-band triangle rice balls (red scanner light) and dropping them into the grey bin under the counter. Small in the upper-left corner, behind: a wall clock with tick marks and no numerals, both hands at twelve.
- emotion: 담담, 쓸쓸함
- motion/direction: 스캐너 → 폐기 바구니
- dialogue_ref: 서윤(혼잣말) "오늘까지인 것들, 수고했어." (bubble 1) · 효과음 [삑—]
- art_space: Keep the top-right quarter of the frame (plain fluorescent wall) as calm, empty background for her bubble, plus a small plain patch of counter right of the scanner for the beep sound effect.
- split: no
- gap_after: 80
- fx/note: 시계 숫자 없음. 주황 띠 = P2·P52·P58과 같은 모양.

### panel_052
- scene_id: E01S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑦ · 긴장 5 비 · ⟨복선 C7 1차: 따로 남긴 주황 띠, 이중의미⟩
- characters: SEOYUN
- size: medium · aspect: 3:4
- camera: from the customer side, medium close-up toward the right end of the counter.
- composition: Seoyun's hand placing one orange-band rice ball apart, alone, in the small green wire discount basket at the counter's screen-right end; her face turned toward the door (screen-left, out of frame), one glance. Behind, below the top fifth: the wall clock with no numerals, hands near twelve-forty.
- emotion: 무의식적 기다림
- motion/direction: 바구니 → 문 쪽 시선(왼쪽)
- dialogue_ref: 서윤(혼잣말) "…오늘은 안 오려나." (bubble 1)
- art_space: Keep the top fifth of the frame (plain fluorescent ceiling) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 설명 없는 습관. 주황 띠 하나만.

### panel_053
- scene_id: E01S14 / location: LOC_CVS (창 너머 LOC_CROSSROADS) · mood: M_NIGHT
- beat: ⑦ · 긴장 3 비 · 무대사 구간 2 시작 · ⟨복선 W8·W6⟩
- characters: SEOYUN (어깨)
- size: medium-wide · aspect: 4:3
- camera: reverse shot over Seoyun's shoulder, wide, toward the front glass.
- composition: Screen-right foreground: Seoyun's shoulder in the green vest and ponytail, soft. Beyond the glass: the empty bus stop, the quiet crossroads; diagonally across, a shuttered empty shop with a small faded red plastic stool in front (small); far off, the faint glow of a big-box store parking lot. Orange streetlights, power lines.
- emotion: 고요
- motion/direction: 어깨 → 창 밖 → 다음 패널 어둠
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: 빨간 의자·마트 불빛은 작게, 강조 금지.

--- SCENE BREAK --- (E01S14 → E01S15 여백)

### panel_054
- scene_id: E01S15 / location: LOC_CROSSROADS @NIGHT · mood: M_BLANK
- beat: ⑦ · 긴장 **2** · **빈 여백 스크롤**
- characters: 없음
- size: full-bleed · aspect: 9:16
- camera: none (almost empty frame).
- composition: Almost everything sunk into deep navy-black night; only a faint distant orange streetlight glow at the very bottom edge. No figures, no objects.
- emotion: 정적, 숨 고르기
- motion/direction: 손가락이 한 번 길게 미끄러지는 자리
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 640
- fx/note: 더 긴 이미지를 만들지 않는다. 9:16 한 장 + gap_after 640으로 "길게 늘인" 여백(style-bible §5-1).

--- SCENE BREAK --- (E01S15 → E01S14 편의점 복귀)

### panel_055
- scene_id: E01S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑦ · 긴장 4 비 · ⟨C2⟩ · 무대사 구간 2 끝
- characters: SEOYUN (졸음)
- size: medium · aspect: 3:4
- camera: close-up under the fluorescent light, eye level.
- composition: Seoyun with her chin propped on her hand at the counter, eyelids drooping; at her fingertips a half-folded blank receipt crane. Flat white light, quiet.
- emotion: 졸음, 무방비
- motion/direction: 정지
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: 320 = 클리프 직전 정적. 다음 "딩동".

--- SCENE BREAK --- (E01S14 → E01S16 수요일 00:50)

### ⑧ 클리프행어 — P56~P60

### panel_056
- scene_id: E01S16 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑧ · 긴장 7 비 · **⟨복선 C2 회수: 키링 ECU⟩** · **P57과 매치 컷 쌍(원본)**
- characters: DOHA (OUTFIT_NIGHT, 후드, 키링만) · SEOYUN (프레임 밖)
- size: insert · aspect: 1:1
- camera: extreme close-up of the keyring, viewed from its left three-quarter, very slightly from above.
- composition: Clear rounded-rectangle resin block about 4 cm tall with fine scratches and slightly cloudy edges, hanging from a small silver ring and ball chain on the D-ring of the LEFT strap of a black backpack (charcoal hoodie fabric soft behind). Sealed inside: a faded yellowed ivory paper crane, head to screen-left, tail to screen-right, both signature details clearly readable: head tip folded down into a small hook, tail tip folded down once. Crane width about 38% of the frame, crane centre at horizontal centre and 58% down.
- emotion: 정체가 드러나기 시작
- motion/direction: 정중앙 고정
- dialogue_ref: 서윤(프레임 밖, 반쯤 잠긴 업무 인사) "어서 오세…" (bubble 1, tail → right edge) · 효과음 [딩동]
- art_space: Keep the top quarter of the frame and a narrow strip along the right edge (soft blurred fluorescent store light) as calm, empty background.
- split: no
- gap_after: 0
- fx/note: **판별 필수.** 학 색 #E9DDB8(누런 아이보리), 새하얗게 그리면 REGEN. 키링은 반드시 왼쪽 끈.

### panel_057
- scene_id: E01S16 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑧ · 긴장 8 비 · **⟨C2 회수: 매치 컷⟩** · P56과 같은 각도·크기
- characters: SEOYUN (눈, 얼어붙음) · 유리병
- size: insert · aspect: 1:1
- camera: top frame: tight eye strip, eye level. Bottom frame: extreme close-up of one crane in the jar, matching panel_056 exactly.
- composition: Two stacked frames in one image separated by a thin plain white gutter. **Top frame (thin horizontal band, about 25% of the height):** Seoyun's eyes only, wide open, breath held. **Bottom frame (about 75%):** inside the lidless glass jar, one crisp white receipt crane in front of the others, seen from its left three-quarter, very slightly from above, head to screen-left, tail to screen-right, head tip folded into a small hook, tail tip folded down once; crane width about 38% of the full frame width, centred horizontally. Glass curve and other white cranes soft behind.
- emotion: 인지, 숨 멎음
- motion/direction: 눈 → 학(같은 모양)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: **yes** (2칸, 위 눈 띠 / 아래 학 ECU)
- gap_after: 80
- fx/note: 학 색 #F4F4F0(새 흰색, 얇은 광택). P56 이미지 첨부 권장(매치 컷).

### panel_058
- scene_id: E01S16 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑧ · 긴장 9 비 · **⟨C1 회수: 대사 에코, C7 2차, C8 2차⟩** · **P2 구도 재현**
- characters: DOHA (OUTFIT_NIGHT, 후드 씀, 얼굴 위쪽 그늘)
- size: medium · aspect: 3:4
- camera: identical to panel_002 — shop-floor side at counter height, slightly low angle, medium close-up of the hooded customer in three-quarter profile.
- composition: Same layout as panel_002: counter across the lower third, hooded customer screen-left-of-centre facing screen-right, only mouth and jaw visible, one thin fluorescent line on the round black glasses frame in the hood's shadow, the glass jar soft at the counter's screen-left end. His hand sets on the counter the orange-band rice ball taken from the green discount basket (the one she set apart). The only change: the clear resin keyring now swings just below his wrist.
- emotion: 데자뷔, 긴장
- motion/direction: P2와 같음
- dialogue_ref: 후드 "오늘까지인 거… 있어요?" (bubble 1, P2와 같은 자리)
- art_space: Keep the top third of the frame, above the hood (plain fluorescent ceiling and the blurred tops of the drink fridges), as calm, empty background — same place as panel_002.
- split: no
- gap_after: 80
- fx/note: P2 이미지 첨부 필수. 키링 판별은 필요 없음(P56에서 끝).

### panel_059
- scene_id: E01S16 / location: LOC_CVS (배경 단순화 시작) · mood: M_NIGHT
- beat: ⑧ · 긴장 9 비 · **⟨반전 B, C4 회수, C8⟩**
- characters: SEOYUN (얼어붙음, 반쯤 일어섬) · DOHA (후드 벗음, 뿔테 안경, 처음 정면)
- size: medium · aspect: 3:4
- camera: two-shot from the customer side, slight push-in toward Doha.
- composition: Doha screen-left, nearer and larger, pushing the charcoal hood back: messy black hair, thin round black-framed glasses, face fully visible for the first time, steady serious gaze; mole on the LEFT side of his neck. Seoyun screen-right behind the counter, half rising from her stool, frozen, eyes wide. Store background simplified, flat white fluorescent light.
- emotion: 서윤 경악 / 도하 고요
- motion/direction: 서윤 → 도하(줌인)
- dialogue_ref: 서윤 "너… 어떻게…" (bubble 1) · 도하 "어젯밤에 안 거 아니야." (bubble 2)
- art_space: Keep the top third of the frame (plain fluorescent ceiling) as calm, empty background — Seoyun's bubble upper-right, Doha's upper-left.
- split: no
- gap_after: 160
- fx/note: 180도 규약(서윤 오른쪽, 손님 왼쪽). 같은 실루엣(P1~3 의상).

### panel_060
- scene_id: E01S16 / location: LOC_CVS (배경 단순화) · mood: M_NIGHT
- beat: ⑧ · 긴장 **10** 비 · **⟨반전 B 정점, C3 의미 반전⟩** · 회차 마지막 · **캡처 컷 후보**
- characters: DOHA (고백의 정면)
- size: full-bleed · aspect: 9:16
- camera: frontal bust from Seoyun's eye line behind the counter, eye level.
- composition: Doha centred in the middle of the tall frame, hood down, thin round black-framed glasses, steady serious gaze straight into her eyes, lips slightly parted; flat white fluorescent front light on his face; background reduced to soft blurred green-white store tones. Top quarter: calm plain ceiling light. Bottom sixth: plain simple darker background (charcoal hoodie fading into shadow). Seoyun not in frame.
- emotion: 9년 묵은 고백의 시작
- motion/direction: 정면 응시, 정지
- dialogue_ref: 도하 "처음부터 알았어, 한서윤." (bubble 1) · 도하 "네가 나 기억 못 하는 것까지." (bubble 2) · 캡션 「— 2화에 계속 —」(narration, 아래)
- art_space: Keep the top quarter of the frame (plain fluorescent ceiling glow above his head) as calm, empty background for two bubbles, and the bottom sixth (plain dark hoodie shadow) as calm, empty background for the ending caption.
- split: no
- gap_after: 0
- fx/note: 서윤 리액션은 ep02 P1로 넘김. 얼굴 중앙, 위·아래 두 빈자리 모두 확보.

---

## 6. 점검 (제출 전 체크리스트)

- [x] 패널 60개(≥50, ≥55), `panel_001`~`panel_060` 3자리 연속, 대본·비트시트 번호와 1:1.
- [x] 모든 패널에 scene_id / LOC_* / mood. 같은 scene_id = 같은 LOC·빛·의상(예외 P5 하단 칸, P35 배경 매점 유지 — 비트시트·style-bible 지정).
- [x] 대사 패널 48개 전부 dialogue_ref + art_space. 무대사 12개(P1·P8·P15·P23·P36·P37·P41·P49·P53·P54·P55·P57) art_space none(P41은 효과음 자리만). 무대사 연속 최대 3컷(P53~55), P56 프레임 밖 대사로 끊음.
- [x] 화면비: 9:16 ×8 · 3:4 ×36 · 4:3 ×9 · 1:1 ×7 = 60.
- [x] split: yes = P5, P57 (2칸 이하).
- [x] 반전: P33 9:16 단독(앞 30·뒤 160). P56~60 ECU → 매치 컷 → P2 재현 → 투샷 → 9:16 마지막.
- [x] 고정 쌍: P2↔P58 같은 카메라·배치(키링만 추가), P56↔P57 같은 각도·크기(색만 다름), P54 빈 여백 + gap_after 640.
- [x] 학 판별: P14·P56·P57 ECU 필수 / P42·P43 흐림 유지 / P47 키링 프레임 밖 / P1~3 키링 안 보임.
- [x] 글자 0: 스피커·휴대폰·쪽지·계약서·영수증·시계·CCTV·간판·포장·가격표 전부 무지. 효과음 7개는 뷰어 sfx 자리만.
- [x] 한국 원작 그대로(캄보디아식 변형 없음). 신체 접촉은 손잡기·새끼손가락까지. 점퍼 남자 얼굴 흐림, 사장님 얼굴 없음.

## 7. 하류 인계

- **letterer:** 각 패널의 `art_space`·`gap_after`를 `ep01_lettering.md`에 그대로 옮긴다(gap_after는 px 정수). 말풍선 수·화자는 `dialogue_ref` 기준(P25·P26은 3개). 프레임 밖 꼬리: P4·P5(스피커), P7(휴대폰), P14(위 좌/우), P30(직원), P31(하람 왼쪽 아래), P34(왼쪽), P56(오른쪽). P60은 캡션 narration 아래 1/6. text_km은 대본 KM 그대로.
- **prompt-smith:** style-bible §6-1 조립 순서. camera/composition/subject/art_space 영어 문장을 그대로 사용. LOC 토큰은 §7 원문 + 무드 빛 문구 하나. 매치 컷 첨부: P58 ← panel_002, P57 ← panel_056. 학 ECU(P14·P56·P57)는 PROPS_sheet 첨부. SCENE BREAK 16곳(§1)을 그룹 경계로 사용.
- **art-director:** 새 LOC 요청 없음(ep01 12개 LOC 안에서 해결). 권장 화면비와 다른 곳 2개(P18 3:4, P53 4:3) 확인 바람.
