# EP04 샷리스트 — 『유통기한 연애』 4화 「불시 검사」 · panel-director

- 작성: panel-director · 2026-11-22 · Flow-by-hand mode + Khmer edition · v1.1 (**style-bible v1.3 · character-sheets v1.3**에 맞춤: M_HOME_MORNING, P21 따뜻한 교실 빛 메모, 무지 문 보조구, SEOYUN_VEST_UNDER_BLAZER · DOHA_SHIRTSLEEVES · DOHA_NOTE_FLAT · SEOYUN_TORN_PAGE · TIPBOX, §R-3 v1.3 첨부 행)
- 게이트: `km_review.py gate --episode 04` → **OK** (ep04_script_final.md = Khmer review READY 판본, round 1, sha256 3a0853f70846…)
- 입력: `03_episode/ep04_script_final.md`(최종 대본, 60패널, KM 줄, 편집 노트 §6 비주얼팀 권고), `03_episode/ep04_beatsheet.md`(패널 번호·단서 위치 고정, 머리말 art-director 준비물, §D-6 제작 메모), `04_visual/style-bible.md` v1.3(§3-2 무드 + ep04 무드 메모, §3-3 예약색, §5 화면비·프레이밍·방향, §7 LOC, §9 글자 없음, §10 art_space), `04_visual/character-sheets.md` v1.3(§1 남색 니트 조끼, §2·§3 ep04 변형, §P ep04 소품, §R-3 ep04 첨부 행), `02_story/world.md`(R3, §3-4 교복·11월 니트 조끼, §5-2 정류장, §7-4 달력), `04_visual/ep03_shotlist.md`(형식·연결 구도), ep01·ep02 샷리스트(매치 컷 원본)
- 스킬: `webtoon-panel-breakdown` 작업 A(A-1~A-4) · `webtoon-khmer-edition` §4 · `webtoon-flow-handoff`
- **패널 60개.** `panel_001`~`panel_060` = 대본 `P01`~`P60`(번호·순서·단서 위치 그대로). 대사 패널 50 / 무대사 10(P16·P18·P19·P28·P37·P44·P50·P55·P56·P57). 말풍선 84개(대본 대사·생각 줄 84개와 1:1). 효과음 2(P22 종, P31 지퍼), 엔딩 캡션 1(P60).
- **한국 원작 그대로.** 서울 변두리 서진고, 한국 교복·얼굴, 한국 교무실·교실·계단참·반지하·버스 정류장. 캄보디아식 변형 없음. 크메르어는 뷰어 말풍선 글자에만.
- 작업 언어: 한국어. prompt-smith가 그대로 옮길 **camera / composition / eyes / art_space는 영어**. 대사(dialogue_ref)는 한국어 원문(크메르어 원본은 대본 `KM:` 줄, letterer가 옮김).
- 좌/우: `LEFT/RIGHT`(대문자) = 인물 본인 기준. `screen-left/right` = 화면 기준.
- **Khmer edition (one line):** No text of any kind in any image (no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing); every panel keeps its `art_space` as calm, empty background; objects that could carry writing (the crane-shaped tip note, Doha's flat folded note, Seoyun's notebook and the torn page, clipboards, chalkboard, textbook covers, the pain-patch box, bus destination display, bus-stop ad panel, the plain pale-grey corridor door, the tip box, clocks, phones) are drawn blank, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.

---

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 무드 ↔ 배경)

| scene_id | panels | location | mood | 의상 | 배경 한 줄 |
|---|---|---|---|---|---|
| E04S01 | P1, P2, P4 | LOC_TEACHERS_OFFICE (P1 문틈 시점) | M_DAY | 담임 RYU · 하람 OUTFIT_SCHOOL + 클립보드 | 금 07:58. ep03 P60 직후 같은 담임 책상, 은색 텀블러, 블라인드 창, 학 모양 제보 쪽지 |
| E04S02 | P3 | LOC_HALLWAY (교무실 문 앞 구간) | M_DAY | 서윤 OUTFIT_SCHOOL | 같은 순간, 문틈 바깥. ep03 P59 연속 |
| E04S03 | P5–P12 | LOC_STAIR_LANDING | M_LANDING | 서윤·도하 OUTFIT_SCHOOL(도하 블레이저 열고, 안경 없음) | 금 12:35 점심, 옥상 앞 계단참, 살구빛 역광, 노을 없음 |
| E04S04 | P13–P14 | LOC_HOME | **M_HOME_MORNING** (v1.3 신규, AD) | 서윤 흰 셔츠·넥타이·체크 치마(블레이저는 옷걸이) | 월 06:40. 반지하 단칸방, 높은 창으로 아침 빛, 개어 둔 요, 식탁 위 무지 흰 파스 상자, 빨래 건조대 |
| E04S05 | P15–P18 | LOC_BUS_STOP_SCHOOL (P18 원경에 은행나무 오르막 시작) | M_DAY_OUT | 서윤 OUTFIT_SCHOOL(블레이저 단추 다 잠금, 불룩한 백팩) · 도하 OUTFIT_SCHOOL + 무선 이어폰 한쪽 · JACKET_MAN(P16만) | 월 07:45. 언덕 아래 정류장, 반투명 지붕, 무지 흰 광고판, 금속 벤치, 은행나무 한 그루, 녹색 버스(전광판 무지) |
| E04S06 | P19–P20 | LOC_HALLWAY + 무지 문 보조구(style-bible v1.3 §7-2) | M_DAY | 서윤(P19 OUTFIT_SCHOOL / **P20부터 SEOYUN_VEST_UNDER_BLAZER**) · 예린(P20) | 월 08:15. 2층 복도, 표지·픽토그램·명판·창 없는 무지 연회색 문(프롬프트에는 '화장실' 단어를 쓰지 않음) |
| E04S07 | P21–P37 | LOC_CLASSROOM | M_DAY (P21만 '따뜻한 교실' 빛 메모 추가) | 서윤 SEOYUN_VEST_UNDER_BLAZER(P34~37 도하 블레이저를 어깨에) · 도하 OUTFIT_SCHOOL → **P34부터 DOHA_SHIRTSLEEVES** · 하람 OUTFIT_SCHOOL · 건우 · 담임 · 예린 · 태민 · 엑스트라(대부분 블레이저를 의자에 걸음, 몇 명 남색 니트 조끼) | 월 08:35~1교시. 해 드는 따뜻한 교실, 왼쪽 큰 창 |
| E04S08 | P38–P44 | LOC_STAIR_LANDING | M_LANDING | 서윤 SEOYUN_VEST_UNDER_BLAZER(자기 블레이저만) · 도하 DOHA_SHIRTSLEEVES(P38 돌려받은 블레이저를 손에, P39~P44 블레이저를 팔에 걸침), 백팩은 몸에 없음 — 벽의 쌓인 책상 위에 놓여 있음(P44 키링) | 월 1교시 뒤 쉬는 시간, 같은 계단참 |
| E04S09 | P45–P51 | LOC_HALLWAY | M_DAY | 서윤 SEOYUN_VEST_UNDER_BLAZER · 도하 OUTFIT_SCHOOL(블레이저 다시 입음, 열고) · 하람 + 클립보드 · 건우 | 월 12:40 점심 순찰, 2층 복도 |
| E04S10 | P52–P53 | LOC_CLASSROOM | M_DAY (오후) | 서윤 SEOYUN_VEST_UNDER_BLAZER · 도하 OUTFIT_SCHOOL · 교사 뒷모습(엑스트라) | 월 5교시. 칠판 무지, 두 책상 |
| E04S11 | P54 | LOC_CLASSROOM | M_DAY (늦은 오후 낮은 해) | 태민 · 서윤 SEOYUN_VEST_UNDER_BLAZER | 월 16:35, 7교시 끝. 도하 자리 비고 백팩 없음 |
| E04S12 | P55–P56 | LOC_HALLWAY (P56 모퉁이, 원경에 학생부실 문·제보함) | M_DAY (늦은 오후 비스듬한 빛) | 서윤 SEOYUN_VEST_UNDER_BLAZER · 도하(원경 뒷모습, OUTFIT_SCHOOL, 백팩 왼쪽 어깨) | 월 방과 후 빈 복도, 창밖 노란 은행잎 |
| E04S13 | P57–P60 | LOC_STUDENT_OFFICE (P58·P59 서윤은 모퉁이 벽 쪽) | M_DAY (늦은 오후 역광) | 도하 OUTFIT_SCHOOL + 백팩 키링 · 서윤 SEOYUN_VEST_UNDER_BLAZER | 월 16:38. 학생부실 앞, 불투명 유리문, 벽의 잠긴 무지 나무 제보함 |

- `--- SCENE BREAK ---`는 13곳: P3, P4, P5, P13, P15, P19, P21, P38, P45, P52, P54, P55, P57 앞. **P3·P4는 교차 편집**(교무실 ↔ 복도 문틈, ep03 E03S16↔S17과 같은 처리)이라 scene_id가 S01 → S02 → S01로 돌아간다.
- 같은 scene_id = 같은 LOC 토큰 · 같은 무드 빛 · 같은 의상(style-bible §6-2-4). 의상이 씬 안에서 바뀌는 곳은 이야기 속 행동으로 바뀌는 두 곳뿐이다: **E04S06** P19 → P20(화장실에서 조끼를 블레이저 안에 입고 나옴), **E04S07** P34(도하가 블레이저를 벗어 서윤 어깨에 덮음). 둘 다 대본이 요구하는 변화이고 장소·빛은 그대로다.
- **새 LOC 없음.** 기존 LOC(TEACHERS_OFFICE, HALLWAY, STAIR_LANDING, HOME, BUS_STOP_SCHOOL, CLASSROOM, STUDENT_OFFICE + 원경 GINKGO_ROAD는 배경 묘사로만). **무드:** 기존 M_DAY · M_LANDING · M_DAY_OUT + art-director가 v1.3에 추가한 **M_HOME_MORNING**(E04S04만). panel-director가 새로 만든 무드·LOC는 없다.
- **무드별 패널:** M_DAY = P1–P4, P19–P37, P45–P60(P54–P60은 늦은 오후 빛, P21은 '따뜻한 교실' 빛 메모) · M_LANDING = P5–P12, P38–P44 · M_HOME_MORNING = P13–P14 · M_DAY_OUT = P15–P18.
- **계절 추가구(style-bible v1.3):** 낮·바깥 장면의 무드 문구 뒤에 `early November, the yellow ginkgo leaves beginning to fall`.
- **P21 빛 메모(M_DAY 안, 새 무드 아님):** M_DAY 문구 뒤에 `sun-warmed classroom, bright low morning sunlight pooling across the desks and the backs of the chairs, a cosy warm haze in the air`. P22~P37은 같은 빛 방향(왼쪽 큰 창)·온도.
- **LOC 보조 구절(새 LOC 아님, 토큰 뒤에 붙임):**
  - LOC_HALLWAY 교무실 문 앞 구간 (P3): ep03 보조구 그대로 `the section outside the staff room: a wide grey sliding door on the classroom-door side, slightly open, with a narrow frosted pane and no sign, the corridor windows on the opposite side`
  - LOC_TEACHERS_OFFICE 문틈 시점 (P1): ep03 보조구 그대로 `seen from the corridor through a hand-wide gap of the half-open sliding door, the two dark door edges framing a narrow vertical strip of the room`
  - **LOC_HALLWAY 무지 문 보조구 (P19·P20, style-bible v1.3 §7-2 AD 확정본, 그대로):** `a plain solid pale-grey door set in the corridor wall, different from the sliding classroom doors, with no sign, no pictogram, no plate and no window`. **프롬프트에 나가는 문장에는 'restroom'·'toilet'을 쓰지 않는다.** 안쪽은 절대 그리지 않는다. P20을 만들 때 P19를 첨부.
  - LOC_HALLWAY 모퉁이 → 학생부실 원경 (P56) [PD, AD 확인 요청]: `seen from a corner where the corridor turns; at the far end, the frosted-glass door of the student-discipline office with the TIPBOX on the wall beside it, both blank`
  - LOC_HOME 아침 (P13·P14): 토큰 + 무드 **M_HOME_MORNING** 문구 그대로 + 소품 구 `a folding clothes-drying rack near the window, the folded floor mattresses stacked, a small table with a plain white box with no print`(파스 상자)

### 1-1. 의상 변형 · ep04 소품 (character-sheets v1.3 AD 확정본 — prompt-smith는 character-sheets 원문을 그대로 쓴다)

| 표기 (character-sheets v1.3) | 쓰는 패널 | 요점 |
|---|---|---|
| **SEOYUN_VEST_UNDER_BLAZER** (§2) | P20~P60의 모든 서윤 학교 장면 | 블레이저 단추 다 잠금, 앞판이 "살짝" 팽팽, **V자 앞섶엔 흰 셔츠·넥타이만**, 소매 걷지 않음, 가방은 홀쭉. **초록은 P33 한 컷뿐** — V자 앞섶·소매 끝·단추 틈 어디에도 없음. P33 포즈 추가구, P34~P37 덧입기 구(도하 블레이저를 어깨에)는 §2 원문 |
| OUTFIT_SCHOOL + `bulging black backpack stuffed full` (§2) | P15~P19 | 조끼가 아직 가방 속 |
| **DOHA_SHIRTSLEEVES** (§3) | P34~P38 (+ P39~P44 이어서, 아래) | 블레이저 벗음, 흰 셔츠 소매 내림(걷지 않음, 셔츠는 바지에 넣음), 넥타이 살짝 느슨, 첫 단추 풀림, 안경 없음, 왼쪽 목 점이 잘 보임. P34~P37 교실: 백팩은 책상 고리. **P38 돌려받은 블레이저를 뭉쳐 손에 듦.** P39~P44 [PD 결정, AD 위임 사항]: 셔츠 차림 유지 + 블레이저를 팔에 걸침. **P45부터 OUTFIT_SCHOOL(블레이저 다시 입음, 열고)** |
| E04S08 도하 백팩 [PD 결정] | P38~P44 | character-sheets §3 "P38 계단참에도 백팩 없음(몸에)" + 대본 P44 "엄지가 백팩 끈의 키링에" → **백팩은 씬 내내 벽에 쌓인 옛 책상 위에 놓여 있다**(P38~P43은 프레임 밖 또는 배경에 작게, P44 도하가 옆에 서서 엄지를 그 왼쪽 끈의 키링에 댐) |
| **DOHA_NOTE_FLAT** (§P) | P53, P56(원경 손안, 작게), P57 | 평평하게 네 번 접은 손바닥 반만 한 사각, 뜯긴 가장자리 하나, **학·접기 모양 금지** |
| **SEOYUN_TORN_PAGE** (§P) | P52, P53 | 무지 연회색 표지 노트, 줄 없는 흰 페이지, 뜯긴 자국. **P53 글씨는 도하의 오므린 왼손 밑에 숨고 펜 끝만 보인다** |
| **TIPBOX** (§P) | P56(원경), P57(ECU) | 학생부실 불투명 유리문 옆 벽의 잠긴 작은 나무 상자, 투입구, 작은 자물쇠, 글자·표식 0 |
| 엑스트라 니트 조끼 (§1 [ep04]) | P21, P35 등 | `navy knit sweater vest` — **남색만, 초록·회녹색 금지** |
| 서윤 집 아침 [PD] | P13, P14 | SEOYUN CORE + `white school shirt, navy striped tie, check skirt; her navy blazer hangs on the clothes rack` |

- **조끼 초록 노출(가장 중요, style-bible v1.3 예약색 ①):** P13(건조대에서 걷음)과 P14(가방 바닥에 말아 넣고 지퍼 틈 끝 한 줄)는 **집에서 독자가 "조끼는 가방에"를 보는 미스디렉션 컷**이라 초록이 보인다(대본·비트시트 그대로). **학교에 나온 뒤(P15~P60) 초록은 P33 한 컷, 블레이저 밑단 아래 허리선 한 줄뿐.** P15 가방 지퍼 닫힘·초록 없음, P19 가방 지퍼 닫힘, P20·P21·P29~P32 앞판만 팽팽, P30 지퍼 손에 초록 없음, P31~P32 가방 안 초록 없음, P39 풀린 단추 틈엔 그림자와 흰 셔츠만, P34~P37 도하 블레이저가 허리까지 덮음.

## 2. 크기 → Flow 화면비 (style-bible §5-1)

| size | aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed | **9:16** | P1, P16, P18, P33, P45, P55, P56, P60 | 8 |
| medium (기본) | **3:4** | P2–P4, P6–P8, P10–P12, P17, P23, P24, P26–P29, P31, P32, P34, P36–P44, P46–P49, P53, P58, P59 | 35 |
| medium-wide | **4:3** | P5, P9, P13, P15, P19–P22, P25, P35, P51, P52, P54 | 13 |
| insert / ECU | **1:1** | P14, P30, P50, P57 | 4 |
| | | **합계** | **60** |

- 9:16 8장의 이유: P1(회차 첫 장, "세로로 좁은" 문틈 프레임, ep03 P57 짝), P16(도하 POV 정류장, ep01 P8과 같은 세로 구도), P18(빈 벤치 하이 앵글, 남자가 사라짐), **P33(반전 A 단독, 세로로 긴 측면 로우)**, P45(점심 복도 소실점, 하람이 막아섬), P55(방과 후 빈 복도 소실점), P56(모퉁이 OTS, 복도 끝 제보함), **P60(반전 B 마지막)**.
- 16:9 미사용.

## 3. 분할(split) · 방향 · 첨부 · 생성 순서

### 3-1. split
- **split: yes = 2개: P3, P28.** `two stacked frames in one image separated by a thin plain white gutter`, 최대 2칸(style-bible §5-2-2).
  - P3 = ep03 P59와 같은 분할(위 = 문틈의 서윤 눈 ECU, 아래 = 블레이저 주머니 속 구겨진 껌 종이 학). art_space(생각 풍선)는 위 칸 안.
  - P28 = 비트시트 "세로 3분할 띠"를 **2칸으로 줄였다**(style-bible 최대 2칸). 위 칸 = 11·12·13번 책상의 열린 가방 세 개가 통로를 따라 한 줄로(리듬), 아래 칸 = 서윤 책상 밑 손이 껌 종이 학을 빠르게 접음. 무대사.
- 비트시트의 다른 "얼굴 + 인서트"(P8, P11, P26, P32, P39, P48, P59)는 **한 프레임 안의 전경/후경 구도**로 풀었다(style-bible §5-2-2).

### 3-2. 방향 규약
- **교실(style-bible §5-3):** 칠판을 볼 때 큰 창 = 왼쪽. 도하 = 창가 열. 태민 = 도하 옆자리(characters.md "도하 옆자리"), 예린 = 서윤 옆자리. **서윤 자리 = 태민 바로 앞 줄**, 그래서 도하 책상에서 서윤 책상은 **대각선 앞**(P52 "몸을 기울여" 닿는 거리, P34 "뒤에서" 다가옴). ⚠ §7 의문 4. 앞문(복도 쪽) = 칠판을 볼 때 오른쪽 앞.
- **계단참:** 측면 투샷 = 계단이 screen-left(아래) → screen-right(위)로 오른다, 잠긴 회색 철문 = 위쪽 오른쪽(ep02 P39·ep03 P22 축). **P5** 서윤이 한 칸 위 = screen-right 위, 도하 = screen-left 아래. **P9** 도하가 올라와 같은 칸(서윤 screen-right, 도하 screen-left = ep03 P22와 같음). E04S08: 도하가 꼭대기 참(창 쪽, 역광), 서윤은 한 칸 아래에서 창빛을 받는다(P41 창빛 / P42 역광).
- **손잡기(P45·P49·P50·P51):** ep02·ep03과 같이 **도하의 RIGHT 손이 서윤의 LEFT 손**. 두 사람 뒷모습이면 서윤 = screen-right.
- **교무실 문틈(P1·P3):** ep03 P9·P57과 같은 문틈 프레임. 복도 축: 창 = screen-left 벽, 교무실 미닫이문 = screen-right 벽.

### 3-3. 앞 패널 이미지를 첨부해야 하는 패널

첨부 3장 이하(style-bible §6-2-3): 인물 시트 1~2장 + 앞 패널 1장.

**시트 첨부 규칙 (character-sheets v1.3 §R-3 ep04 행 — 각 패널 fx/note보다 우선):**
- **조끼 패널(서윤, P20~P60 학교 장면, P33 포함) = SEOYUN_turnaround.** **SEOYUN_night는 ep04 어느 패널에도 절대 첨부하지 않는다**(겉에 입은 조끼·걷은 소매가 옮겨 온다). 표정 컷이면 SEOYUN_expressions를 더한다. 서윤+도하(블레이저) 투샷은 LEADS_lineup 가능.
- **도하 셔츠 차림(P34~P44) = DOHA_turnaround.** 이 구간엔 **LEADS_lineup을 쓰지 않는다**(블레이저 입은 그림).
- **하람 클립보드 패널(P2, P22~23, P25~27, P29, P31~32, P37, P45~49) = HARAM_turnaround**(+ 담임이면 RYU_sheet, 표정 컷이면 HARAM_expressions). 건우는 시트 없음.
- **P33 = SEOYUN_turnaround, HARAM_turnaround, RYU_sheet** (앞 패널 첨부 없음 — 3장 한도. 책상·책 더미·두 사람 위치는 P31·P29와 같게 문구로).
- **P34 = SEOYUN_turnaround, DOHA_turnaround, HARAM_turnaround** (앞 패널 첨부 없음 — 3장 한도. P33 직후 자세·조명은 문구로).
- **P36 = RYU_sheet, DOHA_turnaround.**
- P57만 PROPS_sheet 허용(하단 레진 키링). 프롬프트에 DOHA_NOTE_FLAT의 "not a crane"을 반드시 쓰고, PROPS의 학이 쪽지를 학으로 끌고 가면 PROPS를 빼고 다시 만든다. P53·P56은 PROPS 금지.
- 엑스트라 니트 조끼는 남색만(초록 = REGEN). **ep01·ep02·ep03 이미지는 아직 없다**(세 회차 모두 `WAITING_FOR_IMAGES`). 아래 (a)는 그 이미지가 생긴 뒤에만 만들 수 있다.

**(a) ep01 / ep02 / ep03 패널을 첨부 (그 이미지가 먼저 있어야 한다)**

| 패널 | 첨부할 앞 패널 | 필수/권장 | 고정할 것 / 다를 것 |
|---|---|---|---|
| **P1** | **ep03 panel_057** | 필수 | 같은 문틈 프레임·같은 담임 책상·텀블러. 다름: 담임이 더 가깝게, 전경 책상 위 학 모양 제보 쪽지 |
| P1 (선택 추가) | ep03 panel_058 | 선택 | 같은 서툰 학 모양 쪽지(두 특징 없음) |
| P2 (권장) | ep03 panel_060 | 권장 | 같은 하람 정면(담임 앉은 눈높이)과 교무실 빛. 다름: 살짝 로우, 클립보드를 가슴에 |
| **P3** | **ep03 panel_059** | 필수 | 같은 분할 구도(위 눈 ECU / 아래 주머니 손). 다름: 아래 칸의 학 = 구겨진 은백색 껌 종이 학 |
| **P5** | **ep02 panel_039** | 필수 | 같은 계단참 측면 카메라, 서윤이 한 칸 위. 다름: 서윤이 도하 소매를 놓는 순간, 원망하는 얼굴 |
| **P9** | **ep03 panel_022** | 필수 | 같은 카메라, 두 사람 같은 칸. 다름: 도하가 막 올라선 동작, 서윤이 자르는 얼굴 |
| P13 (권장) | ep03 panel_004 (없으면 ep02 panel_011) | 권장 | 같은 반지하 방 배치(높은 창, 요, 낮은 책상). 다름: **아침 빛**, 요 개어 둠, 엄마 없음, 건조대 |
| P15 (권장) | ep01 panel_008 | 권장 | 같은 정류장 지리(벤치·은행나무·반투명 지붕). 다름: 버스 정차, 서윤 하차 |
| **P16** | **ep01 panel_008** | 필수 | 같은 남자·같은 자리(벤치 옆 은행나무 쪽)·같은 시선·로고 뗀 자국. 다름: 도하 POV, 전경 서윤 뒤통수 흐림 |
| P45 (권장) | ep03 panel_027 | 권장 | 같은 복도 손잡기 방향·하람 점심 순찰. 다름: 하람이 가까이 막아섬, 건우 동행 |
| P56, P57 (권장) | ep03 panel_045 (없으면 ep02 panel_046) | 권장 | 같은 학생부실 불투명 유리문·벽의 잠긴 무지 제보함·투입구 위치 |

- **첨부 금지:** P53·P56·P57(도하의 평평한 사각 쪽지)에는 학 모양 쪽지가 나오는 이미지(ep01 panel_020, ep03 panel_046·058, 이 회차 P1·P4)를 **첨부하지 않는다**. PROPS_sheet는 P57에만 위 조건으로 허용. Flow가 쪽지를 학으로 접어 버리는 것을 막는다. P56·P57 제보함 참조로는 학이 없는 ep03 panel_045/ep02 panel_046만.

**(b) ep04 안의 앞 패널을 첨부 (ep04 안 생성 순서)**

| 패널 | 첨부 | 필수/권장 | 이유 |
|---|---|---|---|
| P4 | P1 | 권장 | 같은 담임 책상·텀블러·학 쪽지 |
| P6, P7, P8, P10, P11, P12 | P5 | 권장 | 같은 계단참 빛·축 |
| **P38** | **P9** | 필수 | 같은 측면 카메라·같은 칸(E04S08 계단참 기준) |
| P39–P44 | P38 | 권장 | 같은 계단참·도하 셔츠 차림 + 블레이저(P38 손 → P39~P44 팔), 백팩은 쌓인 책상 위 |
| P14 | P13 | 권장 | 같은 방·같은 아침 빛 |
| P17 | P15 | 권장 | 같은 정류장 지붕·빛 |
| **P18** | **P16** | 필수 | **같은 벤치, 남자가 사라짐**(같은 자리·같은 은행나무) |
| **P20** | **P19** | 필수 | **같은 화장실 문 구도, 가방 부피만 다름**(반전 A 시각 단서 핵심) |
| P35 | P21 | 권장 | 같은 교실 하이 와이드(블레이저 걸린 의자 줄, 니트 조끼 엑스트라) |
| P23 | P22 | 권장 | 같은 교탁·앞문 |
| P27 | P26 | 권장 | 같은 도하 책상·키링 |
| P30, P31, P32 | P29 | 권장 | 서윤 책상·담임·하람 위치 |
| P33 | (P31을 첨부하지 않음) | — | v1.3 §R-3: 시트 3장(SEOYUN·HARAM·RYU)이 한도를 채운다. P31·P29의 책상·책 더미·두 사람 자리는 문구로 맞춘다. 그래도 **P31·P29를 P33보다 먼저 만들어** 사용자가 눈으로 비교할 수 있게 |
| P34 | (P33을 첨부하지 않음) | — | v1.3 §R-3: 시트 3장(SEOYUN·DOHA·HARAM). P33 직후의 자세·조명은 문구로. P33을 먼저 만든다 |
| P37 | P34 (선택, 3장 한도 안에서) | 선택 | 도하 셔츠 차림 일치. P36은 RYU_sheet + DOHA_turnaround |
| P43 | P41 | 권장 | 같은 서윤 얼굴 조명 |
| P46–P50 | P45 | 권장 | 같은 복도 축·빛 |
| **P51** | **P45** | 필수 | 같은 복도, 반대로 멀어지는 하람 |
| P53 | P52 | 권장 | 같은 두 책상 |
| **P54** | **P52** | 필수 | **같은 두 책상, 도하 자리가 빔**(백팩 없음) |
| P56 | P55 | 권장 | 같은 늦은 오후 복도 빛 |
| P58, **P59** | **P56** | P59 필수 | 같은 모퉁이·복도 끝 제보함 지리 |
| P57 | P56 | 권장 | 같은 제보함 |
| P60 | P58 | 권장 | 같은 서윤 얼굴·늦은 오후 역광 |

### 3-4. 생성 순서 (사용자 메모)
1. **아직 없을 수 있다:** ep01·ep02·ep03 이미지는 모두 대기 중이다. (a)의 필수 첨부(ep03 panel_057·059·022, ep02 panel_039, ep01 panel_008)가 생긴 뒤에만 ep04 **P1, P3, P5, P9, P16**을 만들 수 있다. 권장 첨부(ep03 panel_004·027·045·058·060, ep02 panel_011·046, ep01 panel_008)는 없으면 시트만 붙이고 진행해도 된다. 레퍼런스 시트(13장, ep04 새 카드 없음)가 먼저다. 의상 변형·쪽지 소품은 character-sheets v1.3에 확정돼 있다.
2. ep04 안: **P1 → P4** · **P5 → P6~P12** · **P9 → P38 → P39~P44** · **P13 → P14** · **P15 → P17** · **P16 → P18** · **P19 → P20** · **P21 → P35** · P22 → P23 · P26 → P27 · **P29 → P30, P31, P32 → (비교용) P33 → P34 → P37(선택)** · P41 → P43 · **P45 → P46~P51** · **P52 → P53, P54** · P55 → P56 · **P56 → P57, P58, P59** · P58 → P60.
3. 새 레퍼런스 시트 없음(13장 유지). 건우·남색 점퍼 남자 = 토큰만. 엑스트라 교사(P52 뒷모습) = 토큰 없이 `a teacher seen from behind at the chalkboard`.

### 3-5. 고정 규칙 메모
- **하람은 가방에 손대지 않는다.** P2·P23·P25·P29·P31·P32: 하람의 손은 항상 검정 클립보드와 펜 위. 펜은 무지 종이에 닿기만 하고 표시가 보이지 않는다. 가방을 여는 손은 언제나 그 가방의 주인(1번 학생, 도하, 서윤). 건우는 문가에만(P22), 클립보드를 든 채.
- **종이학 규칙:** P1·P4 = 서툰 학 모양 제보 쪽지(**두 특징 없음**, `clumsy crane-shaped folded note of plain paper with a plain head and a plain tail`, 안쪽 무지). P3·P11·P59 = 은백색 껌 종이 학(구겨짐/반쯤 접힘, 판별 불필요). **P28 = 껌 종이 학, 두 특징(갈고리 머리 + 접어 내린 꼬리) 판별 가능한 크기.** P26·P44·P57 = 레진 키링 속 누런 아이보리 학(두 특징). **P53·P57 도하의 쪽지 = 평평한 사각(DOHA_NOTE_FLAT), 학이 아니다.** 학 종류 두 개를 한 컷에 나란히 두지 않는다(P57은 사각 쪽지 + 키링이 한 프레임이지만 키링은 프레임 아래 가장자리, 흐름).
- **도하 의상:** P1~P33 블레이저 열고 → P34~P37 DOHA_SHIRTSLEEVES(블레이저는 서윤 어깨) → P38 셔츠 + 돌려받은 블레이저를 손에 → P39~P44 셔츠 + 블레이저를 팔에 → P45 이후 다시 입음(열고). 셔츠는 바지에 넣고 소매를 걷지 않는다(태민과 구별). 낮이라 **안경 없음**(전 패널).
- **도하 키링:** 왼쪽 끈. P15(이어폰 쪽 어깨, 작게), P26(전경 클로즈업, 두 특징), P44(쌓인 책상 위 백팩, 엄지가 닿음), P56(원경, 판별 불필요), P57(프레임 아래 흔들림). 그 밖의 컷은 작고 흐리게.
- **남색 점퍼 남자:** P16 한 컷만. 원경, 반측면, 얼굴 반쯤 은행잎 그늘, 왼가슴 로고 뗀 자국(글자 없음). **P18에는 그리지 않는다.** 서윤은 그를 보지 못한다(등을 짐).
- **예약색(§3-3):** 선명한 초록 = P13·P14(집) + P33(허리선 한 줄)뿐. 진홍 = 하람·건우 완장 + 하람 손목 열쇠 끈 + 학생부실 안 고리의 완장(LOC 토큰)뿐. 엑스트라 니트 조끼는 **남색**(초록 아님). 체크 치마의 녹색은 탁한 `muted dark green`.
- **만화 기호 금지(§11-5) 대체:** P35 "동세선 과장" → 일어서는 아이들의 머리카락·소매 모션 블러와 기울어진 자세. 땀방울·김·속도선 없음.
- **신체 접촉:** 손잡기, 소매 잡기, 블레이저를 어깨에 덮어 주기까지.
- **달력(world §7-4, 11월 첫째 주):** 은행나무 노랑, **떨어지기 시작**(P16·P18 떨어지는 잎, P55 창밖), 맑음. 블레이저, 일부 엑스트라 블레이저 안 남색 니트 조끼.

## 4. 스크롤 리듬 · gap_after (px, letterer 레터링 스펙에 그대로)

| gap_after | 뜻 | 쓰는 곳 |
|---|---|---|
| 0 | 이어 붙임 | P60(마지막) |
| 30 | 촘촘(빠른 주고받기, 교차 편집, 클리프 오르막) | 대사 합 |
| 80 | 보통 | 기본 |
| 160 | 비트 끊기 · 씬 전환 · 반전 직전/직후 숨 | SCENE BREAK 앞, P32, P33, P59 |
| 320 | 시간 점프 | P12(금 → 월, 주말), P44(쉬는 시간 → 점심), P53(5교시 → 16:35) |

| 구간 | 패널 | 리듬 |
|---|---|---|
| ① 받기 | P1–P4 | **9:16 문틈 담임**(30) → 3:4 하람(30) → 분할 눈 ECU(30) → 3:4 서랍(160) |
| ② 작전 회의 | P5–P12 | 4:3 한 칸 위(80) → 3:4(30) → 3:4 손가락(30) → 3:4 "셋째"(80) → 4:3 같은 칸(30) → 3:4 "내 가방에"(30) → 3:4 "좀 그렇네"(80) → 3:4 앞판 누르는 손(**320**) |
| ③ 월요일 아침 + 정류장 | P13–P18 | 4:3 건조대(80) → 1:1 가방 바닥(160) → 4:3 하차(30) → **9:16 점퍼 남자** 무대사(30) → 3:4 "사람."(80) → **9:16 빈 벤치** 무대사(160) |
| ④ 카운트다운 | P19–P30 | 4:3 불룩한 가방 무대사(30) → 4:3 홀쭉한 가방(160) → 4:3 블레이저 줄(80) → 4:3 종(30) → 3:4 고지(80) → 3:4 태민(80) → 4:3 1번(80) → 3:4 키링(30) → 3:4 "다음."(80) → 분할 리듬 무대사(30) → 3:4 로우 "14번"(30) → 1:1 지퍼(30) |
| ⑤ 반전 A | P31–P37 | 3:4 "바닥까지"(30) → 3:4 빈 바닥(160) → **P33 9:16 반전 A 단독**(160) → 3:4 블레이저 떨어짐(80) → 4:3 대소동(30) → 3:4 "검사 중이다"(80) → 3:4 하람의 시선 무대사(160) |
| ⑥ 장학 거절 | P38–P44 | 3:4(30) → 3:4 "단추."(80) → 3:4 선 긋기(160) → 3:4 질문(30) → 3:4 "필요 없어서."(80) → 3:4 "주워 쓰는 거네"(160) → 3:4 혼자 남은 도하 무대사(**320**) |
| ⑦ 하람의 정밀화 | P45–P51 | **9:16 막아섬**(30) → 3:4(30) → 3:4 "한 박자 먼저"(80) → 3:4 건우(30) → 3:4 "현장"(30) → 3:4 손 ECU 무대사(80) → 4:3 "그럼 내가 끝낼게"(160) |
| ⑧ 쪽지 + 감속 | P52–P56 | 4:3 뜯기는 종이(30) → 3:4 평평한 사각(**320**) → 4:3 빈 자리(160) → **9:16 빈 복도** 무대사(30) → **9:16 제보함 앞 뒷모습** 무대사(80) |
| ⑨ 클리프행어 | P57–P60 | 1:1 투입구 무대사(30) → 3:4 "제보함…"(30) → 3:4 "학이었어"(160) → **P60 9:16 마지막**(0) |

- 640 미사용. 반전 A 뒤를 320이 아닌 **160**으로 둔 이유: P34의 블레이저는 하람의 시선이 내려가기 "한 박자 먼저" 떨어져야 한다(긴 정지는 그 타이밍을 죽인다). 반전 A의 정지는 P33 자체의 9:16 세로 길이가 맡는다.

---

## 5. 샷리스트 (panel_001 ~ panel_060)

### ① 받기 — P1~P4 (금 07:58, ep03 P60 직후)

### panel_001
- scene_id: E04S01 / location: LOC_TEACHERS_OFFICE (문틈 시점) · mood: M_DAY
- beat: ① 받기 · 긴장 8 위 · ⟨복선 C9 3차 · P-REC⟩ · ep03 P60을 곧장 받는 회차 첫 장
- characters: RYU (정면 클로즈업, 앉음) · HARAM (strip 가장자리 어깨만)
- size: large · aspect: 9:16
- camera: through the same hand-wide gap of the half-open sliding door as ep03 panel_057, pushed in on the teacher; narrow vertical framing.
- composition: Both side edges of the tall frame: the dark soft edges of the sliding door, framing a narrow vertical strip of the staff room. In the strip, middle: the homeroom teacher seated at his grey steel desk, face in close-up, tired brown eyes, light stubble, grey knit cardigan, his silver tumbler lifted halfway and frozen there, not set down. Lower part of the strip, sharp on the desk in front of him: a clumsy crane-shaped folded note of plain paper with a plain round head and a plain straight tail (NOT the hook-head / folded-tail fold), blank inside. At the screen-left edge of the strip, soft: the navy shoulder of Haram with the plain crimson armband. Window blinds behind him. Top sixth: the dark upper door edges and plain cream wall above the gap.
- eyes: the teacher looks at the paper crane, then up toward Haram (screen-left), wary and tired.
- emotion: 피곤한 경계
- motion/direction: 학 쪽지(아래) → 담임 얼굴 → 하람 쪽(왼쪽)
- dialogue_ref: 담임 "상담 기록엔 연애 문제로 끝난 일이다, 채하람." (bubble 1, KM 김 — 폭 넓게)
- bubbles: 1
- art_space: Keep the top sixth of the frame (the dark upper door edges and plain cream wall above the gap) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 ep03 panel_057(필수)** + RYU_sheet (+ 선택 ep03 panel_058). 비트시트 "커피잔" = 담임 식별 표식 은색 텀블러(ep03 처리 그대로). 쪽지 **두 특징 없음**, 안쪽 무지. 진홍은 완장 한 점.

### panel_002
- scene_id: E04S01 / location: LOC_TEACHERS_OFFICE · mood: M_DAY
- beat: ① · 긴장 8 위 · ⟨복선 R3⟩ · ep01의 실수를 뒤집은 정답
- characters: HARAM (OUTFIT_SCHOOL, 바스트)
- size: medium · aspect: 3:4
- camera: bust of Haram from the teacher's seated eye line, slightly low angle, near-frontal.
- composition: Haram in the middle from the chest up, very upright, a black clipboard with blank paper held flat against her chest with both hands, plain crimson armband on her LEFT upper arm (on the viewer's right), chin-length bob tucked behind the RIGHT ear with a black hairpin (on the viewer's left), a bright reflection sliding across her thin silver rectangular glasses. Behind her: soft staff room, window blinds, a potted plant. Top third: plain cream wall and the top of the blinds.
- eyes: Haram looks straight down at the teacher (toward camera), unwavering.
- emotion: 단단함
- motion/direction: 정면 정지
- dialogue_ref: 하람 "한 명만 보자는 게 아닙니다." (bubble 1) · 하람 "2학년 전체, 선생님 입회로. 규정대로입니다." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall and the upper blinds above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep03 panel_060 + HARAM_turnaround. 클립보드 무지. 안경 반사로 눈을 가리지 않는다(눈은 읽혀야 함).

--- SCENE BREAK --- (교차 편집: E04S01 교무실 → E04S02 문 밖 복도)

### panel_003
- scene_id: E04S02 / location: LOC_HALLWAY (교무실 문 앞 구간) · mood: M_DAY
- beat: ① · 긴장 8 위 · ⟨복선 C2⟩ · 숨이 멎음 · ep03 P59 연속
- characters: SEOYUN (눈 ECU + 손)
- size: medium · aspect: 3:4
- camera: split — the same two stacked frames as ep03 panel_059.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 60%): the dark edge of the sliding door at screen-right, Seoyun's LEFT eye and see-through bangs pressed close to the gap, faint dark circle, pupil tight; behind her, soft, the corridor window light. The upper half of this frame is plain soft cream corridor wall. BOTTOM frame (about 40%): her hand inside the navy blazer pocket mouth, crushing a small crumpled crane folded from a silvery-white gum wrapper.
- eyes: Seoyun's eye fixed on the gap, unblinking.
- emotion: 숨이 멎음
- motion/direction: 눈(위) → 구겨지는 학(아래)
- dialogue_ref: 서윤(생각) "…전체." (bubble 1, thought)
- bubbles: 1
- art_space: Keep the upper half of the top frame (plain soft cream corridor wall above her eye) as calm, empty background.
- split: yes (2칸)
- gap_after: 30
- fx/note: **첨부 ep03 panel_059(필수)** + SEOYUN_expressions. 다름: 학 = 은백색 껌 종이(대본 "껌 종이 학"), 구겨져 판별 불필요. art_space는 위 칸 안(칸 사이 홈 아님).

--- SCENE BREAK --- (교차 편집: E04S02 → E04S01 교무실 안)

### panel_004
- scene_id: E04S01 / location: LOC_TEACHERS_OFFICE · mood: M_DAY
- beat: ① · 긴장 7 위 · ⟨타이머: 월요일 1교시⟩ · A-2(불시 = 서윤만 엿들음) · 체념한 결정
- characters: RYU (미디엄, 앉음) · HARAM (screen-right, 고개 숙여 인사)
- size: medium · aspect: 3:4
- camera: low angle across the teacher's desk, his hand and the drawer in the foreground, the teacher beyond.
- composition: Lower third, sharp foreground: the teacher's hand pushing shut a grey steel desk drawer with the clumsy crane-shaped folded note of plain paper just disappearing inside (plain head, plain tail, blank). Middle: the teacher in his grey knit cardigan, mid-long-sigh, shoulders dropped, silver tumbler set down beside the monitor (plain grey screen). Screen-right edge, middle: Haram bowing her head politely, black clipboard at her side, crimson armband on her LEFT arm. Window blinds behind. Top third: plain cream wall and blinds.
- eyes: the teacher's eyes half-closed in a resigned sigh; Haram's eyes lowered in a bow.
- emotion: 체념한 결정
- motion/direction: 닫히는 서랍(아래) → 담임 → 인사하는 하람(오른쪽)
- dialogue_ref: 담임 "학생부장님 결재 받는다. 월요일 1교시, 불시로." (bubble 1, KM 김) · 담임 "우리 반은 내가 입회한다." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall and the upper window blinds above the teacher's head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 권장 첨부 P1 + RYU_sheet. 결재 서류·모니터 무지. 시계를 넣으면 숫자 없는 눈금.

--- SCENE BREAK --- (E04S01 교무실 → E04S03 계단참, 금 12:35)

### ② 작전 회의 — P5~P12 (금 12:35, 점심)

### panel_005
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 6 위 · ep03 E "도하의 정직을 원망" 받기 · 서윤이 한 칸 위
- characters: SEOYUN (screen-right, 한 칸 위) · DOHA (screen-left, 한 칸 아래)
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, stairs rising from screen-left (low) to screen-right (high) — same camera as ep02 panel_039.
- composition: Seoyun screen-right, one step higher, just letting go of the cuff of Doha's navy blazer sleeve that she dragged him up by; Doha screen-left one step lower, blazer open, flat, eyes nearly level with hers now. The locked grey steel rooftop door at upper right, two old desks and chairs stacked against the wall, dusty window with soft apricot backlight, hazy rim light on hair and shoulders, cool violet shadows on the worn concrete steps falling away at lower left. Top third on the left: plain dim stairwell wall.
- eyes: Seoyun glares down at Doha with open resentment for the first time; Doha looks back, calm.
- emotion: 처음으로 원망
- motion/direction: 소매를 놓는 손 → 서윤 얼굴
- dialogue_ref: 서윤 "거짓말 좀 하지 그랬어." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left third of the frame (plain dim stairwell wall above Doha's head) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: **첨부 ep02 panel_039(필수)** + LEADS_lineup. 대본 "늦은 오전 창빛" = M_LANDING 살구빛 역광(노을 하늘 없음). 소매 잡기까지.

### panel_006
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 5 설 · ⟨ep03 P25 메아리⟩
- characters: DOHA (바스트, 벽에 기댐) · SEOYUN (옆얼굴 전경)
- size: medium · aspect: 3:4
- camera: over Seoyun's shoulder from her higher step, slightly high angle onto Doha.
- composition: Screen-right foreground, soft: Seoyun's profile from the cheek down, jaw clenched, low ponytail. Middle screen-left: Doha leaning his shoulder on the stairwell wall, blazer open, tie low, hands in trouser pockets, flat calm face; backpack not on (left in class). Apricot window light from the upper right rimming his hair. Top fifth: plain dim stairwell wall.
- eyes: Doha looks up at her, untroubled; Seoyun's eye (edge) on him, biting back words.
- emotion: 도하 담담 / 서윤 분함
- motion/direction: 서윤(전경) → 도하
- dialogue_ref: 도하 "안 한다고 했잖아." (bubble 1, tail → Doha) · 서윤 "…알아. 그래서 더 화나." (bubble 2, tail → right foreground)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above Doha's head) as calm, empty background for two bubbles, Doha's on the left, Seoyun's on the right.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 P5 + DOHA_expressions. 이 씬에서 도하는 백팩을 메지 않는다(키링 노출 없음).

### panel_007
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 5 위 · ⟨복선 R3 · ep01 P43 메아리⟩ · 무기가 거꾸로 돌아옴
- characters: SEOYUN (바스트)
- size: medium · aspect: 3:4
- camera: frontal bust of Seoyun, eye level, her raised hand in the near foreground.
- composition: Lower foreground, sharp: Seoyun's RIGHT hand raised, counting on her fingers — index and middle finger up (two), short trimmed nails. Middle: her face, sharp, chin up, eyes narrowed, the "counting on her fingers" attack face, blazer buttoned, tie fully knotted. Behind: dim stairwell wall, apricot window glow at one side. Top fifth: plain dim stairwell wall.
- eyes: Seoyun looks at Doha (just off camera left), cold and precise.
- emotion: 냉정해지려 함
- motion/direction: 손가락(전경) → 얼굴
- dialogue_ref: 서윤 "이번엔 규정이 채하람 편이야." (bubble 1) · 서윤 "첫째, 담임 입회. 둘째, 내가 직접 열어야 돼." (bubble 2, KM 김)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: ep01 P43(손가락 세기 정면 바스트)의 거울 구도. 손가락 수 정확히(둘). 표정 슬롯 "공세".

### panel_008
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 6 위 · ⟨복선 VEST⟩ · 진짜 문제
- characters: DOHA (손만, screen-left 가장자리) · SEOYUN (손 + 얼굴)
- size: medium · aspect: 3:4
- camera: close two-hand shot in the lower half, Seoyun's face behind and above.
- composition: Lower half, sharp: Seoyun's RIGHT hand with three fingers raised (index, middle — and her ring finger just lifting), and entering from the screen-left edge Doha's hand with one long index finger raised beside hers, as if counting the third for her. Upper half, slightly soft: Seoyun's face behind her hand, the attack face giving way to a worried frown. Apricot rim light. Top fifth: plain dim stairwell wall.
- eyes: Seoyun looks at Doha's finger, then down — the real problem.
- emotion: 진짜 문제
- motion/direction: 도하 손가락(왼쪽) → 서윤 손 → 얼굴
- dialogue_ref: 도하 "셋째." (bubble 1, tail → screen-left edge) · 서윤 "조끼. 주말에 빨아서, 월요일엔 가방에 넣고 와야 돼." (bubble 2, KM 김)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two bubbles, the short one on the left.
- split: no
- gap_after: 80
- fx/note: 손가락 수 정확히(서윤 셋, 도하 하나). 비트시트 "손 클로즈업 → 서윤 얼굴" = 한 프레임 아래/위. 조끼는 말로만(그리지 않음).

### panel_009
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 6 설·비 · ⟨복선 TB-D1⟩ ⟨이중의미⟩ · 처음 정면으로 부딪힘 · 구도가 수평이 됨
- characters: SEOYUN (screen-right) · DOHA (screen-left, 같은 칸으로 올라섬)
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level — same camera as ep03 panel_022 (and P5).
- composition: Doha has just stepped up onto Seoyun's step: both now on the same level, Doha screen-left a head taller (her crown at his chin), turned toward her; Seoyun screen-right, turning her face up at him, one hand up, palm out, cutting him off. Locked grey steel door upper right, stacked old desks, dusty apricot window, violet shadows on the steps falling away at lower left. Left half of the frame above Doha's shoulder: plain dim stairwell wall.
- eyes: Doha looks down at her, steady; Seoyun looks up, refusing, sharp.
- emotion: 도하 제안 / 서윤 거부
- motion/direction: 올라서는 도하 → 손을 든 서윤
- dialogue_ref: 도하 "나한테 맡겨." (bubble 1, tail → Doha) · 서윤 "싫어. 네 맘대로 하지 마." (bubble 2, tail → Seoyun)
- bubbles: 2
- art_space: Keep the upper-left half of the frame as a vertical strip (plain dim stairwell wall above and behind Doha) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: **첨부 ep03 panel_022(필수)** + LEADS_lineup. P5(서윤 한 칸 위) → **P9 같은 칸**. P38이 이 이미지를 첨부.

### panel_010
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 4 코
- characters: DOHA (정면 미디엄) · SEOYUN (screen-right 반쪽)
- size: medium · aspect: 3:4
- camera: frontal medium shot of Doha, eye level, Seoyun cut by the screen-right edge.
- composition: Doha centre-left from the waist up, blazer open, completely deadpan, eyebrows level, pointing his chin at nothing as if it were obvious. Screen-right edge: half of Seoyun in profile, mouth open in disbelief, one hand thrown out. Apricot backlight from the dusty window behind Doha. Top third: plain dim stairwell wall.
- eyes: Doha looks at her, flat; Seoyun stares at him, incredulous.
- emotion: 코미디
- motion/direction: 도하 → 서윤(오른쪽)
- dialogue_ref: 도하 "내 가방에 넣어." (bubble 1, tail → Doha) · 서윤 "너도 2학년이야. 남자애 가방에서 여자 조끼 나오면 그게 더 난리야." (bubble 2, tail → right edge, KM 김 — letterer 분할 가능)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above both heads) as calm, empty background for two bubbles.
- split: no
- gap_after: 30
- fx/note: 표정 슬롯 도하 "무표정 개그". 만화 기호 없음.

### panel_011
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 4 코 · ⟨복선 C2⟩ · 무표정 개그
- characters: DOHA (바스트, 무표정) · SEOYUN (이마 짚음, 전경)
- size: medium · aspect: 3:4
- camera: two-shot, eye level; Seoyun near in the lower-right foreground, Doha behind at upper left.
- composition: Lower-right foreground: Seoyun with her LEFT palm pressed to her forehead (white square patch on the inside of the left wrist peeking from the cuff), eyes shut; in the fingers of her other hand, low in the frame, a half-folded crane made from a silvery-white gum wrapper. Upper left, behind: Doha in bust, deadpan, one beat of thinking, eyes slightly to the side. Apricot rim light. Top fifth on the left: plain dim stairwell wall.
- eyes: Doha's eyes drift sideways, considering; Seoyun's eyes closed.
- emotion: 무표정 개그
- motion/direction: 도하(위 왼쪽) → 서윤 손(아래 오른쪽)
- dialogue_ref: 도하 "…그건 좀 그렇네." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left fifth of the frame (plain dim stairwell wall above Doha's head) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 비트시트 "컷 분할" → 한 프레임 전경/후경. 학 반쯤 접힘(판별 불필요). 파스 = 왼손목.

### panel_012
- scene_id: E04S03 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ② · 긴장 5 비 · **⟨복선 TA-V1 · TA-D1⟩** ⟨이중의미⟩ · 결심(비밀 계획)
- characters: SEOYUN (반측면 미디엄, 손 전경) · DOHA (후경, 시선)
- size: medium · aspect: 3:4
- camera: three-quarter medium of Seoyun turning to go down the stairs, her hand in the near foreground, Doha soft in the background above.
- composition: Foreground lower half, sharp: Seoyun's RIGHT palm pressed flat against the front of her own buttoned navy blazer, smoothing it down once — a casual, absent gesture. Middle: Seoyun in three-quarter view, already turned toward the steps going down (screen-left, low), decided, tight-lipped. Background upper right, softer: Doha on the landing, his eyes lowered, following her hand. Apricot backlight, violet shadows on the steps. Top fifth: plain dim stairwell wall.
- eyes: Seoyun looks down the stairs; Doha's eyes on her hand on the blazer.
- emotion: 결심
- motion/direction: 블레이저 위 손(전경) → 도하 시선(위) → 아래 계단
- dialogue_ref: 서윤 "내가 알아서 해." (bubble 1, tail → Seoyun) · 도하 "알았어." (bubble 2, tail → Doha upper right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall, left of Doha) as calm, empty background for two bubbles.
- split: no
- gap_after: 320
- fx/note: **반전 A 시각 단서 TA-V1 — 빠뜨리지 말 것.** 손바닥이 블레이저 앞판을 누르는 동작이 또렷이 읽혀야 함. 이 시점엔 조끼 없음(금요일). 320 = 금 → 월(주말).

--- SCENE BREAK --- (E04S03 계단참 → E04S04 반지하 방, 월 06:40)

### ③ 월요일 아침 + 정류장 — P13~P18 (월 06:40 ~ 07:45)

### panel_013
- scene_id: E04S04 / location: LOC_HOME · mood: M_HOME_MORNING
- beat: ③ · 긴장 6 위 · ⟨복선 VEST · E-MOM⟩ ⟨타이머: 진로 상담 주간⟩
- characters: SEOYUN (HOME_MORNING, 흰 셔츠·넥타이·체크 치마)
- size: medium-wide · aspect: 4:3
- camera: floor-level wide across the small room, the drying rack in the near foreground.
- composition: Foreground screen-right, sharp: a folding clothes-drying rack; Seoyun's hands lifting a dried plain green staff vest with no logo (vivid medium green, front zip, chest pocket) off the rack. Middle: Seoyun standing in her white shirt, tie knotted, check skirt, her navy blazer hanging on the clothes rack by the wall. Behind: the two floor mattresses folded neatly and stacked (Mom already gone to her dawn shift, no one else in the room), the small kitchen table with a plain white box with no print (pain-relief patches), the low folding desk. Upper left: the high narrow street-level window letting in pale cool daylight in one soft slanted beam, a pair of passing feet as a blur; the rest of the room in soft grey-blue shade. Upper-left half of the frame: plain pale wall and the window's soft light.
- eyes: Seoyun looks at the vest in her hands, heavy.
- emotion: 무거운 출근 같은 등교
- motion/direction: 조끼(오른쪽 전경) → 서윤 → 높은 창
- dialogue_ref: 서윤(생각) "진로 상담 주간까지 일주일." (bubble 1, thought) · 서윤(생각) "검사는 오늘." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the upper-left half of the frame as a vertical strip (the pale wall and bright high window light) as calm, empty background for two stacked thought bubbles, away from the window feet.
- split: no
- gap_after: 80
- fx/note: 무드 M_HOME_MORNING(v1.3). 권장 첨부 ep03 panel_004(방 배치, 밤 빛은 따라 하지 않음) + SEOYUN_turnaround + PROPS_sheet(조끼). **초록 노출 허용(집, 미스디렉션)**. 엄마 없음. 파스 상자 무지 흰색. 조끼 로고·명찰 없음.

### panel_014
- scene_id: E04S04 / location: LOC_HOME · mood: M_HOME_MORNING
- beat: ③ · 긴장 6 위 · **⟨복선 VEST(독자가 "가방에 있다"를 봄) · TA-D2⟩** ⟨이중의미⟩
- characters: SEOYUN (손만)
- size: insert · aspect: 1:1
- camera: top-down insert into the open backpack on the floor, close on the zip.
- composition: Lower three-fifths: the worn black backpack with frayed corners, open from above; at the very bottom, under a stack of textbooks with plain blank covers, the green vest rolled up tight; Seoyun's hands pulling the zip closed so that only the tip of the rolled vivid green vest shows as one thin strip in the last gap of the zipper. Pale cool morning light from the high window on one side, the rest in soft grey-blue shade. Upper two-fifths: the plain floor-mat surface around the bag.
- eyes: (얼굴 없음)
- emotion: 공포를 누름
- motion/direction: 지퍼 → 초록 끝 한 줄
- dialogue_ref: 서윤(혼잣말) "소지품 검사." (bubble 1) · 서윤(혼잣말) "소, 지, 품." (bubble 2)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame (plain floor-mat surface above the bag) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 권장 첨부 P13 + PROPS_sheet. **초록 노출 허용(집, 미스디렉션의 핵심)**. 교과서 표지 무지. 혼잣말 = dialogue(소리 내 말함, 대본 편집 노트 §5). 말풍선을 지퍼 틈 초록 위에 두지 않는다.

--- SCENE BREAK --- (E04S04 → E04S05 학교 앞 정류장, 07:45)

### panel_015
- scene_id: E04S05 / location: LOC_BUS_STOP_SCHOOL · mood: M_DAY_OUT
- beat: ③ · 긴장 6 위 · ⟨복선 VEST: 불룩한 가방⟩ · ep03 "그는 늘 그녀가 올 곳에 먼저 있다" 메아리
- characters: SEOYUN (OUTFIT_SCHOOL, 하차, 전경) · DOHA (OUTFIT_SCHOOL + 이어폰 한쪽, 지붕 밑)
- size: medium-wide · aspect: 4:3
- camera: medium wide at the bus stop, eye level, the bus door at screen-left.
- composition: Screen-left foreground: the open door of a green city bus with a blank destination display; Seoyun stepping down onto the pavement, blazer buttoned all the way, the worn black backpack on her back visibly bulging. Screen-right, under the translucent bus-shelter roof: Doha already there, blazer open, one plain black wireless earbud in one ear, backpack on his LEFT shoulder (keyring small), his eyes going to her bag. Blank white ad panel, metal bench, the one ginkgo tree beside the bench (yellow, a few leaves falling), the road and the hill toward school behind. Crisp clear morning, low golden sun, cool blue shadows. Upper-right half: plain pale sky and translucent roof.
- eyes: Doha looks at her bulging bag; Seoyun looks ahead, irritated, not at him.
- emotion: 서윤 신경질 / 도하 관찰
- motion/direction: 버스(왼쪽) → 불룩한 가방 → 도하(오른쪽)
- dialogue_ref: 도하 "가방." (bubble 1, tail → Doha) · 서윤 "알아서 한다고 했지." (bubble 2, tail → Seoyun)
- bubbles: 2
- art_space: Keep the upper-right half of the frame as a vertical strip (plain pale morning sky and the translucent shelter roof above Doha) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep01 panel_008 + LEADS_lineup. 가방 지퍼 닫힘, **초록 없음**. 전광판·광고판 무지. 버스 회사 표식 없음. 남색 점퍼 남자는 이 컷에 넣지 않는다(P16에서 처음).

### panel_016
- scene_id: E04S05 / location: LOC_BUS_STOP_SCHOOL · mood: M_DAY_OUT
- beat: ③ · 긴장 6 비 · **⟨복선 W5 1차 리마인드(V)⟩** · 독자 + 도하만 아는 불안
- characters: JACKET_MAN (중경) · SEOYUN (전경 뒤통수 흐림)
- size: large · aspect: 9:16
- camera: Doha's POV, slightly low, past Seoyun's shoulder toward the bench and the hill.
- composition: Bottom-left foreground, out of focus: the back of Seoyun's head and shoulder (low ponytail, navy blazer, backpack strap), her back to the bench — she cannot see him. Middle: beside the metal bench, by the one ginkgo tree, a thin man in his early fifties in a navy work jacket zipped to the chin, both hands in his pockets, standing still and looking up the hill toward the school; half-profile, face half in the ginkgo shade, never clearly drawn; on his LEFT chest a darker rectangular patch where a logo was removed (no letters, a few loose threads). Upper part: the hill and the school building at the top of the ginkgo avenue, crisp blue morning sky, yellow ginkgo leaves drifting down. Blank white ad panel.
- eyes: the man gazes up at the school, expressionless.
- emotion: 고요한 불안
- motion/direction: 서윤 뒤통수(아래) → 남자 → 언덕 위 학교
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: **첨부 ep01 panel_008(필수, 같은 남자·같은 자리)**. 토큰 JACKET_MAN 그대로. 얼굴 또렷하게 금지. **P18이 이 이미지를 첨부.**

### panel_017
- scene_id: E04S05 / location: LOC_BUS_STOP_SCHOOL · mood: M_DAY_OUT
- beat: ③ · 긴장 6 비 · ⟨복선 W5(D)⟩ · 도하의 대답은 참이고 최소
- characters: DOHA (정면 클로즈업) · SEOYUN (screen-right 반쪽, 돌아보려는 중)
- size: medium · aspect: 3:4
- camera: frontal close-up of Doha, eye level, under the shelter roof.
- composition: Doha's face centre-left, the earbud in one ear, flat face but eyes held past the camera on something behind her (the man, off-frame); low golden sun on one side of his face. Screen-right edge: half of Seoyun entering the frame, starting to turn her head to follow his look. Behind Doha: the translucent shelter roof and the blank ad panel, soft. Top fifth: plain pale sky.
- eyes: Doha's eyes fixed past her shoulder, watchful; Seoyun glances at him, puzzled.
- emotion: 도하 경계 / 서윤 의아
- motion/direction: 도하 시선 → 프레임 밖(뒤)
- dialogue_ref: 서윤 "뭘 봐?" (bubble 1, tail → right edge) · 도하 "사람." (bubble 2, tail → Doha)
- bubbles: 2
- art_space: Keep the top third of the frame (plain pale sky and the translucent roof edge) as calm, empty background for two bubbles, Seoyun's on the right.
- split: no
- gap_after: 80
- fx/note: 권장 첨부 P15 + DOHA_expressions. 안경 없음.

### panel_018
- scene_id: E04S05 / location: LOC_BUS_STOP_SCHOOL (원경 은행나무 오르막 시작) · mood: M_DAY_OUT
- beat: ③ · 긴장 5 비 · ⟨복선 W5: 사라짐⟩ · 시즌 시계(은행잎이 떨어지기 시작)
- characters: SEOYUN · DOHA (원경, 작게)
- size: large · aspect: 9:16
- camera: high angle wide over the bus stop, the empty bench in the foreground — the same bench and tree as panel_016.
- composition: Lower part, sharp: the metal bench and the one ginkgo tree beside it, now EMPTY — nobody beside the bench, only yellow ginkgo leaves falling onto the pavement. The bus pulling away out of the frame at the bottom edge (a soft green blur, display blank). Upper part: the road and the start of the uphill school avenue lined with ginkgo trees and a low stone wall; far up the slope, small, Seoyun already climbing with her bulging backpack, and a few steps behind her Doha turned half around, looking back down at the bench.
- eyes: Doha looks back at the empty bench; Seoyun faces uphill.
- emotion: 고요한 불안
- motion/direction: 빈 벤치(아래) → 뒤돌아보는 도하(위)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: **첨부 P16(필수)**. **남자를 그리지 않는다.** 비트시트 "→ LOC_GINKGO_ROAD"는 같은 씬의 원경으로만(LOC 토큰은 BUS_STOP_SCHOOL 하나, §7 의문 5).

--- SCENE BREAK --- (E04S05 → E04S06 복도 화장실 앞, 08:15)

### ④ 검사 카운트다운 — P19~P30 (월 08:15 ~ 08:50)

### panel_019
- scene_id: E04S06 / location: LOC_HALLWAY (화장실 문 앞 구간) · mood: M_DAY
- beat: ④ · 긴장 5 비 · **⟨복선 TA-A1: 가방째 들어감⟩** · 결행
- characters: SEOYUN (OUTFIT_SCHOOL, 측면)
- size: medium-wide · aspect: 4:3
- camera: side medium in the corridor, eye level, locked off — this exact camera repeats in panel_020.
- composition: Screen-right half: a plain solid pale-grey door set in the corridor wall, different from the sliding classroom doors, with no sign, no pictogram, no plate and no window, swinging half open; the space beyond it is not shown (only a thin plain shadow at the gap). Seoyun in profile stepping through it, facing screen-right, the worn black backpack on her shoulders clearly BULGING, zip closed, blazer buttoned. Screen-left: the corridor running away, windows with warm golden morning light, yellow ginkgo outside, terrazzo floor, a blank notice board. Upper-left third: plain cream upper wall and window light.
- eyes: Seoyun looks straight ahead into the door, set.
- emotion: 결행
- motion/direction: 복도(왼쪽) → 문 안(오른쪽)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: **반전 A 단서 TA-A1. P20이 이 이미지를 첨부(같은 구도).** 무지 문 보조구(v1.3 §7-2) 그대로, 프롬프트에 'restroom/toilet' 금지. 문에 글자·그림 표시 0. 안쪽 그리지 않음. 서윤 = OUTFIT_SCHOOL + `bulging black backpack stuffed full`. 초록 없음. 첨부 SEOYUN_turnaround.

### panel_020
- scene_id: E04S06 / location: LOC_HALLWAY (화장실 문 앞 구간) · mood: M_DAY
- beat: ④ · 긴장 5 코 · **⟨복선 TA-A2 · TA-D3⟩** · 가방 부피 변화
- characters: SEOYUN (**SEOYUN_VEST_UNDER_BLAZER**, 측면, 나오는 중) · YERIN (프레임 인)
- size: medium-wide · aspect: 4:3
- camera: exactly the same camera as panel_019 — side medium, eye level, locked off.
- composition: Same corridor, the same plain solid pale-grey door at screen-right (no sign, no pictogram, no plate, no window; the space beyond not shown). Seoyun coming OUT of it, now facing screen-left, the same worn black backpack on her shoulders visibly FLAT and slack; her buttoned navy blazer front fitting slightly tight across the chest and waist as if something is worn underneath, the V-opening showing only the white shirt and tie, no green anywhere. Screen-left, entering: Yerin (cream cardigan, big white claw clip, lilac-cased phone in hand, back showing) nearly bumping into her, leaning back with a surprised open mouth, pointing at the bag. Warm golden window light. Upper-left third: plain cream upper wall and window light.
- eyes: Yerin stares at the bag; Seoyun looks at Yerin with a stiff, too-calm face.
- emotion: 서윤 태연한 척 / 예린 엉뚱
- motion/direction: 예린(왼쪽) → 홀쭉한 가방 → 서윤
- dialogue_ref: 예린 "어? 화장실에 가방까지 들고 갔어?" (bubble 1, tail → Yerin) · 서윤 "…응." (bubble 2, tail → Seoyun)
- bubbles: 2
- art_space: Keep the upper-left half of the frame as a vertical strip (plain cream upper wall and soft window light above Yerin) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: **첨부 P19(필수)** + SEOYUN_turnaround + CLASSMATES_sheet (SEOYUN_night 금지). **P19와 다른 것은 가방 부피·방향·예린뿐.** 앞판 "살짝" 팽팽 — 초록 0, 가슴 강조 금지(실루엣만 약간 두툼). 휴대폰 뒷면.

--- SCENE BREAK --- (E04S06 → E04S07 교실, 08:35)

### panel_021
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 4 코 · **⟨복선 TA-V2 · TA-D4⟩** ⟨이중의미⟩ · A-6(니트 조끼 아이러니)
- characters: SEOYUN (SEOYUN_VEST_UNDER_BLAZER, 앉음) · YERIN (옆자리) · 엑스트라
- size: medium-wide · aspect: 4:3
- camera: high wide from the back corner of the classroom, looking down across the rows toward the front.
- composition: Sun-warmed classroom, bright low morning sunlight pooling across the desks and the backs of the chairs, a cosy warm haze in the air; windows on screen-left with cream curtains, long golden window shadows across the desks, yellow ginkgo outside. Almost every chair back has a navy blazer hung on it — a clear row of hanging blazers; students in white shirts, a few wearing a navy knit sweater vest over the white shirt (navy only, never green). Lower-right midground, sharper: Seoyun at her desk, the only one still wearing her navy blazer, buttoned all the way, sitting very straight; beside her Yerin (cream cardigan) leaning over, fanning herself with her hand. Front: empty green chalkboard, wall clock with tick marks and no numerals. Upper-right half: the plain cream front wall and the upper empty chalkboard.
- eyes: Yerin looks at Seoyun's blazer, puzzled; Seoyun looks forward, not meeting her eyes.
- emotion: 예린 의아 / 서윤 버팀
- motion/direction: 걸린 블레이저 줄 → 혼자 입은 서윤
- dialogue_ref: 예린 "너 오늘 왜 블레이저 안 벗어? 안 더워?" (bubble 1, tail → Yerin) · 서윤 "…그냥." (bubble 2, tail → Seoyun)
- bubbles: 2
- art_space: Keep the upper-right half of the frame as a vertical strip (the plain cream front wall and the top of the empty chalkboard) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: **반전 A 단서 TA-V2 — "혼자만 블레이저"가 한눈에 읽혀야 함.** 무드 M_DAY + **P21 빛 메모**(v1.3, 위 composition 첫 구). 첨부 SEOYUN_turnaround, CLASSMATES_sheet, LEADS_lineup. 태민 = 토큰대로 블레이저를 의자에(창가 쪽 열). 도하 자리(창가)는 작게. 니트 조끼는 남색. **P35가 이 이미지를 첨부.**

### panel_022
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 7 위 · ⟨타이머: 불시 1교시⟩ · 기습
- characters: RYU (앞문으로 들어옴) · HARAM (뒤, 완장) · GEONU (문가) · 반
- size: medium-wide · aspect: 4:3
- camera: wide from the middle rows at seated eye level, toward the front of the room and the front sliding door at front-right.
- composition: Front-right: the front sliding door open; the teacher stepping in (grey cardigan, silver tumbler), behind him Haram with the plain crimson armband on her LEFT arm and the black clipboard, and in the doorway Geonu, a head taller, armband, clipboard. Foreground and midground: rows of students in white shirts and blazers-on-chairs, heads turning, a stir going through the room (slight motion blur on hair, no speed lines). Front wall: empty green chalkboard, a plain grey wall speaker above it. Upper-left half: plain cream front wall and the empty chalkboard top.
- eyes: the teacher looks over the class, dry; Haram scans the rows.
- emotion: 기습
- motion/direction: 앞문(오른쪽) → 반
- dialogue_ref: 효과음 [1교시 종] (sfx 1, near the wall speaker) · 담임 "가방, 책상 위에." (bubble 1) · 담임 "2학년 전체 소지품 검사다." (bubble 2)
- bubbles: 2 + sfx 1
- art_space: Keep the upper-left half of the frame as a vertical strip (plain cream front wall and the top of the empty chalkboard, with the speaker) as calm, empty background for the bell sound effect and two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 RYU_sheet, HARAM_turnaround. 건우 = 토큰. 진홍 = 완장 둘(같은 컷 다른 진홍 없음). 스피커 무지. **P23이 이 이미지를 첨부(권장).**

### panel_023
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 7 위 · ⟨복선 R3⟩ · A-8(하람은 체크만) · 규정이라는 벽
- characters: RYU · HARAM (투샷)
- size: medium · aspect: 3:4
- camera: two-shot at the teacher's desk, slightly low angle from the front row.
- composition: Screen-left: the teacher at the teacher's desk, one hand flat on it, silver tumbler set down, dry tired face. Screen-right, a step beside him: Haram standing very straight, black clipboard with blank paper held in both hands at her chest, pen clipped on, plain crimson armband on her LEFT upper arm — her hands only on the clipboard, nowhere near any bag. Behind them: the empty green chalkboard with faint smudges. Top third: plain cream wall above the chalkboard.
- eyes: both look out over the class (toward camera), formal.
- emotion: 규정이라는 벽
- motion/direction: 담임 → 하람
- dialogue_ref: 담임 "사유는 제보 확인. 본인이 직접 열고, 나는 보기만 한다." (bubble 1, tail → teacher, KM 김) · 하람 "선도부는 체크만 합니다. 협조 부탁드립니다." (bubble 2, tail → Haram)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above the chalkboard) as calm, empty background for two bubbles, the teacher's on the left and Haram's on the right.
- split: no
- gap_after: 80
- fx/note: 권장 첨부 P22 + RYU_sheet, HARAM_turnaround. 칠판 무지. 하람 표정 슬롯 "근무 중 정중".

### panel_024
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 6 코 · 반 개그(긴장 속 숨)
- characters: TAEMIN (미디엄) · (담임 프레임 밖)
- size: medium · aspect: 3:4
- camera: medium on Taemin at his desk by the window row, eye level.
- composition: Taemin (two-block cut with one cowlick sticking up, shirt sleeves rolled, loose tie, blazer hung on his chair, black sports watch with a blank face) hugging his backpack to his chest with both arms, mouth wide open in protest, leaning back. Warm window light from screen-left. Beside him, soft at the screen-left edge: the corner of Doha's window desk. Top fifth: plain cream wall and curtain top.
- eyes: Taemin looks toward the front (screen-right, off-frame teacher), outraged.
- emotion: 반 개그
- motion/direction: 태민 → 프레임 밖 담임(오른쪽)
- dialogue_ref: 태민 "쌤, 제 가방엔 과자밖에 없어요!" (bubble 1, tail → Taemin) · 담임 "그럼 금방 끝나겠네." (bubble 2, tail → screen-right edge)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall and curtain top above Taemin) as calm, empty background for two bubbles, the teacher's on the right.
- split: no
- gap_after: 80
- fx/note: 첨부 CLASSMATES_sheet. 시계 화면 무지. 만화 기호 없음.

### panel_025
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 7 위 · ⟨타이머: 출석 번호 줄⟩ · 줄이 줄어든다
- characters: 1번 학생(엑스트라) · RYU · HARAM · SEOYUN (원경)
- size: medium-wide · aspect: 4:3
- camera: eye level from the side aisle near the front row, looking along the row of desks toward the back.
- composition: Screen-left foreground-midground: desk no. 1 in the front row; a plain male extra student opening his own backpack with his own hands; the teacher leaning to look in; Haram beside him, her pen touching the blank paper on her black clipboard (a tick motion, no visible marks), her hands only on the clipboard. The row of desks recedes toward the back of the room to screen-right; at the far end, lower right, small: Seoyun sitting stiffly in her buttoned blazer, waiting. Warm window light. Upper-right half: plain cream back wall and grey lockers.
- eyes: the teacher and Haram look into the bag; Seoyun's small face watches from far away.
- emotion: 줄이 줄어든다
- motion/direction: 1번 가방(왼쪽) → 책상 줄 → 서윤(오른쪽 끝)
- dialogue_ref: 서윤(생각) "출석 번호 순." (bubble 1, thought) · 서윤(생각) "나는 14번." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the upper-right half of the frame as a vertical strip (plain cream back wall and the tops of the grey lockers, above Seoyun) as calm, empty background for two stacked thought bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 HARAM_turnaround, RYU_sheet, SEOYUN_turnaround. 엑스트라 얼굴 단순하게, 주요 인물 헤어 특징 금지. 클립보드 무지. 1번 가방 속 교과서 표지 무지.

### panel_026
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 7 비 · **⟨복선 M1-V1 · TB-V1⟩** · 하람의 의심 씨앗
- characters: DOHA (책상, 손) · HARAM (눈, 후경) · (담임 프레임 밖)
- size: medium · aspect: 3:4
- camera: high angle onto Doha's window desk, the keyring sharp in the near foreground, Haram's eyes in a band at the top.
- composition: Lower-left foreground, sharp: the LEFT strap of Doha's black backpack with the clear rounded-rectangle resin block keyring swinging, a faded yellowed ivory paper crane sealed inside (head tip folded into a small hook, tail tip folded down), small silver ring and ball chain. Middle: the backpack open on the desk, only textbooks with plain blank covers inside; Doha's hands holding it open, blazer cuffs. Window light from the left. Upper band: Haram leaning slightly, her eyes behind thin silver rectangular glasses stopped on the keyring, the rest of her face cropped. Top fifth on the right: plain cream wall.
- eyes: Haram's eyes fixed on the keyring.
- emotion: 의심의 씨앗
- motion/direction: 키링(전경) → 하람 눈(위)
- dialogue_ref: 담임 "통과." (bubble 1, tail → screen-right edge)
- bubbles: 1
- art_space: Keep the top-right fifth of the frame (plain cream wall beside Haram's eyes) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 첨부 PROPS_sheet(키링), DOHA_turnaround, HARAM_turnaround. **키링 = 왼쪽 끈, 누런 아이보리, 두 특징.** 비트시트 "하람 눈 띠 컷" = 한 프레임 위쪽 띠(분할 아님). **P27·P57이 이 이미지 참조.**

### panel_027
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 6 비·코 · ⟨M1-V1⟩ · 도하 담담 / 하람 기억함
- characters: HARAM (OTS 전경) · DOHA (바스트) · TAEMIN (옆자리)
- size: medium · aspect: 3:4
- camera: over Haram's shoulder onto Doha seated, eye level of a standing person looking slightly down.
- composition: Screen-left foreground, soft: Haram's navy shoulder with the crimson armband and the edge of her bob. Middle: Doha seated at his window desk, blazer open, closing his backpack zip with one hand and pointing his chin toward the next desk, completely deadpan. Screen-right, softer: Taemin beside him snorting with a grin. Window light rimming Doha's hair, yellow ginkgo outside. Top fifth: plain cream wall and curtain top.
- eyes: Doha looks past Haram toward the next desk; Haram's gaze (implied) on his face.
- emotion: 도하 담담 / 하람 기억함
- motion/direction: 하람 어깨 → 도하 턱짓 → 다음 자리
- dialogue_ref: 도하 "다음." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream wall and curtain top above Doha) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 권장 첨부 P26 + HARAM_turnaround + DOHA_expressions(무표정 개그). 키링은 지퍼 닫힌 가방 끈에서 작게.

### panel_028
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 8 위 · ⟨복선 C2⟩ · 다가오는 차례 · 리듬 컷
- characters: 엑스트라 3명(손·가방만) · SEOYUN (손만)
- size: medium · aspect: 3:4
- camera: split — top: a shallow-angle shot down the aisle of three open bags; bottom: extreme close-up under Seoyun's desk.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 50%): three desks in a row along the aisle (nos. 11, 12, 13), each with an open backpack held open by its owner's hands, textbooks with plain blank covers inside, the teacher's grey cardigan sleeve and Haram's black clipboard edge passing above them — a quick repeating rhythm. BOTTOM frame (about 50%): under Seoyun's desk, her hands in her lap folding a tiny crane from a silvery-white gum wrapper fast, the two signature details clearly readable (head tip folded down into a small hook, tail tip folded down once); above her hands, the bottom edge of her navy blazer, buttoned all the way.
- eyes: (얼굴 없음)
- emotion: 다가오는 차례
- motion/direction: 가방 세 개(위, 왼→오) → 학 접는 손(아래)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: yes (2칸)
- gap_after: 30
- fx/note: 비트시트 "세로 3분할 띠"는 style-bible 최대 2칸 규칙에 맞춰 위 칸 하나에 가방 세 개를 줄로. 첨부 PROPS_sheet(학 두 특징). **학 = 두 특징 판별 가능.** 블레이저 밑단 아래 초록 없음.

### panel_029
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 8 위 · ⟨복선 R3⟩ · 압박
- characters: RYU · HARAM (위에서 내려다봄) · (서윤 = 카메라)
- size: medium · aspect: 3:4
- camera: Seoyun's seated POV, low angle looking up at the two standing at her desk.
- composition: Lower edge, foreground: the near edge of Seoyun's desk with her flat closed backpack on it. Middle: the teacher standing in front of the desk screen-left, grey cardigan, looking down; a step to the screen-right Haram, very upright, both hands fixed on the black clipboard, pen ready, not touching anything, crimson armband on her LEFT arm. Their heads at about the middle height of the frame. Top third: the plain cream classroom ceiling with a soft fluorescent strip, between and above their heads.
- eyes: both look down at Seoyun (camera).
- emotion: 압박
- motion/direction: 두 사람이 내려다봄
- dialogue_ref: 담임 "한서윤." (bubble 1, tail → teacher) · 하람 "14번, 한서윤." (bubble 2, tail → Haram)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain cream ceiling above their heads) as calm, empty background for two bubbles, the teacher's on the left and Haram's on the right.
- split: no
- gap_after: 30
- fx/note: 첨부 RYU_sheet, HARAM_turnaround. **P30~P33이 이 이미지를 참조(서윤 책상·두 사람 위치).**

### panel_030
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 8 위 · ⟨복선 VEST: 독자는 아직 "가방에 있다"고 믿음⟩ · 숨을 고름
- characters: SEOYUN (손) · YERIN · 반 (흐림)
- size: insert · aspect: 1:1
- camera: extreme close-up on Seoyun's hand on the backpack zip pull, shallow focus.
- composition: Lower-middle, sharp: Seoyun's RIGHT hand pinching the zip pull of the worn black backpack on her desk, knuckles tense, short trimmed nails, the zip still closed. Behind, out of focus: blurred faces of the class holding their breath, and Yerin biting her lip with her hand half over her mouth. Upper quarter: plain soft cream wall, blurred.
- eyes: (서윤 눈 프레임 밖) Yerin's blurred eyes on the bag.
- emotion: 숨을 고름
- motion/direction: 지퍼 손 → 흐린 반
- dialogue_ref: 서윤 "…열게요." (bubble 1)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain soft cream wall, out of focus) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 첨부 SEOYUN_turnaround, CLASSMATES_sheet. 지퍼 닫힘, **초록 없음**. 손목 소매 아래 파스는 왼손목이라 이 컷(오른손)에선 보이지 않아도 된다.

### ⑤ 반전 A — P31~P37 (1교시)

### panel_031
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 8 위 · ⟨복선 R3: 본인 개봉⟩ · 하람 집요함
- characters: SEOYUN (손) · HARAM (얼굴, 위) · RYU (어깨)
- size: medium · aspect: 3:4
- camera: high angle looking straight down into the open bag, Haram's face looming at the top.
- composition: Lower two-thirds: the backpack open on the desk, Seoyun's own hands holding the mouth wide and tilting it toward the teacher; inside: textbooks with plain blank covers and a navy fabric pencil case. Top-right: Haram's face leaning in over the bag, glasses catching the light, bob falling forward; her hands still on the clipboard at the frame edge. Top-left edge, soft: the teacher's grey cardigan shoulder. Top-left third beside Haram: plain cream ceiling and wall.
- eyes: Haram stares down into the bag, insistent.
- emotion: 하람 집요함
- motion/direction: 하람(위) → 가방 안(아래)
- dialogue_ref: 효과음 [지이익] (sfx 1, by the zip) · 하람 "바닥까지 보여 주세요." (bubble 1, tail → Haram)
- bubbles: 1 + sfx 1
- art_space: Keep the top-left third of the frame (plain cream ceiling and wall beside Haram's face) as calm, empty background for one bubble, and a small patch near the open zip edge for the zip sound effect.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 P29 + HARAM_turnaround + SEOYUN_turnaround. 가방 안 **초록 없음**. 하람 손 = 클립보드. P33의 책상 배치 기준(P33은 이 이미지를 첨부하지 않고 문구로 맞춘다).

### panel_032
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 8 위 · ⟨VEST 부재⟩ · 하람 당혹 / 서윤 침착
- characters: SEOYUN (손) · HARAM (클로즈업)
- size: medium · aspect: 3:4
- camera: insert of the bag bottom in the lower half, Haram's close-up above — one frame.
- composition: Lower half, sharp: the backpack now emptied, its bare black bottom fully visible and EMPTY; beside it on the desk a neat stack of textbooks with plain blank covers that Seoyun has taken out one by one, her hand placing the last one. Upper right: Haram in close-up, light flashing across her thin silver rectangular glasses, mouth set, face stiff. Upper-left third: plain cream wall.
- eyes: Haram's eyes locked on the empty bottom, thrown.
- emotion: 하람 당혹 / 서윤 침착
- motion/direction: 빈 바닥 → 하람
- dialogue_ref: 서윤 "바닥입니다." (bubble 1, tail → bottom edge / her hand)
- bubbles: 1
- art_space: Keep the top-left third of the frame (plain cream wall beside Haram's face) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 첨부 HARAM_turnaround, SEOYUN_turnaround (+ 선택 P31). 비트시트 "인서트 + 클로즈업" = 한 프레임. 바닥 **비어 있음, 초록 없음**. 160 = 반전 직전 숨.

### panel_033
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 **9** 위·비 · **⟨반전 A 정점⟩ ⟨이중의미 회수⟩** · TA-V1·V2·A1·A2·D1~D4 회수 · 대담한 비밀
- characters: SEOYUN (SEOYUN_VEST_UNDER_BLAZER + P33 전용 구, 전신에 가까움) · HARAM · RYU (시선이 위로)
- size: full-bleed · aspect: 9:16
- camera: tall side view from a low angle at desk height, Seoyun in profile facing screen-left, the raised bag high in the frame.
- composition: Upper-middle: the empty worn black backpack held up high above Seoyun's head in both hands, turned upside down and being shaken — nothing falling out. Middle: Seoyun standing beside her desk in profile, arms stretched up, buttoned navy blazer; because her arms are raised, the blazer hem has ridden up, and exactly at the centre of the frame, at her waist between the blazer hem and the skirt waistband, one thin crisp strip of vivid medium green (#2F8F5B) vest hem shows — small, clear, the only green in the image. Screen-left, midground: the teacher and Haram, both faces tilted UP toward the raised bag, their eye lines clearly on the bag above, not on her waist. Lower part: the desk with the stack of blank-covered textbooks, check skirt. Top quarter: the plain cream classroom ceiling above the bag.
- eyes: Seoyun looks up at her own bag, calm and daring; Haram and the teacher look up at the bag.
- emotion: 대담한 비밀
- motion/direction: 들린 가방(위) → 초록 한 줄(중앙) → 위를 보는 두 시선
- dialogue_ref: 서윤(생각) "소지품 검사는 가방이야." (bubble 1, thought) · 서윤(생각) "몸이 아니라." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the top quarter of the frame (the plain cream ceiling above the raised bag) as calm, empty background for two stacked thought bubbles.
- split: no
- gap_after: 160
- fx/note: **첨부 SEOYUN_turnaround, HARAM_turnaround, RYU_sheet**(v1.3 §R-3, SEOYUN_night 금지, 앞 패널 첨부 없음 — 책상·책 더미·두 사람 자리는 P31·P29와 같게 문구로). SEOYUN_VEST_UNDER_BLAZER + **P33 포즈 추가구(character-sheets §2 원문)**: 초록은 허리선 밑단 한 줄만, 조끼 지퍼·주머니 안 보임, 소매가 내려가 왼손목 파스가 보여도 됨(왼손목). **이 회차에서 학교에 나온 뒤 초록이 보이는 유일한 컷.** 한 줄, 작고 선명, 중앙. 하람·담임 시선 = 위(그들은 초록을 못 봄, 독자만 봄). 말풍선은 초록 줄·얼굴 위 금지. 가슴·몸 강조 없음(허리선 한 줄만). 모션 블러는 가방에만, 속도선 없음. P34보다 먼저 만든다.

### panel_034
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 6 설 · ⟨반전 A의 대가 시작: 한 박자 먼저 → P47⟩ ⟨이중의미⟩ · 설렘 정지
- characters: SEOYUN (바스트) · DOHA (**DOHA_SHIRTSLEEVES**, 후경) · HARAM (가장자리)
- size: medium · aspect: 3:4
- camera: bust of Seoyun, eye level, slightly from the front, Doha behind her.
- composition: Middle: Seoyun's arms just coming down, the empty bag lowering, and a navy blazer (Doha's, open, larger) dropping onto her shoulders from behind, falling down past her waist. Behind her, upper right: Doha in shirt sleeves — white school shirt with long sleeves down (cuffs unbuttoned, not rolled), shirt tucked in, tie knotted slightly low, top button undone, no blazer, the small mole on the LEFT side of his neck visible — his hand just letting go of the blazer collar, flat face, looking away casually. Screen-left edge, soft: Haram's face with glasses, her eyes just starting to drop downward — too late. Warm window light. Top third on the left: plain cream wall.
- eyes: Seoyun's eyes wide, surprised; Doha looks off to the side, indifferent; Haram's eyes beginning to lower.
- emotion: 설렘 정지
- motion/direction: 떨어지는 블레이저(위 → 아래) → 서윤 얼굴
- dialogue_ref: 도하 "추우면 입어." (bubble 1, tail → Doha upper right)
- bubbles: 1
- art_space: Keep the top-left third of the frame (plain cream wall above Haram's edge, away from the faces) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: **첨부 SEOYUN_turnaround, DOHA_turnaround, HARAM_turnaround**(v1.3 §R-3, LEADS_lineup 금지, 앞 패널 첨부 없음). 서윤 = SEOYUN_VEST_UNDER_BLAZER + 덧입기 구(도하 블레이저를 어깨에), 도하 = DOHA_SHIRTSLEEVES. 도하 블레이저가 서윤 허리까지 덮음 → **초록 없음**. 도하 안경 없음, 왼쪽 목 점. 도하 백팩은 책상 고리에(키링 없음).

### panel_035
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 4 코 · 반 개그
- characters: YERIN · TAEMIN · 반 (엑스트라) · (서윤·도하 작게)
- size: medium-wide · aspect: 4:3
- camera: high wide from the back corner — the same camera as panel_021.
- composition: The same sunlit classroom, blazers on the chair backs, a few plain NAVY knit vests. Uproar: students half-standing out of their seats, turning, leaning (motion blur on hair and sleeves, no speed lines); Yerin with both hands clapped over her mouth; Taemin slamming his palm on his desk, mouth wide. In the middle, small: Seoyun under Doha's big blazer and Doha in his white shirt behind her; the teacher and Haram standing beside them. Upper-right half: plain cream front wall and the top of the empty chalkboard.
- eyes: everyone stares at Seoyun and Doha.
- emotion: 반 개그
- motion/direction: 반 전체 → 가운데 두 사람
- dialogue_ref: 예린 "미쳤다!!" (bubble 1, shout, tail → Yerin) · 태민 "검사 중에?!" (bubble 2, shout, tail → Taemin)
- bubbles: 2
- art_space: Keep the upper-right half of the frame as a vertical strip (plain cream front wall and the top of the empty chalkboard) as calm, empty background for two shout bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 P21 + CLASSMATES_sheet + DOHA_turnaround(셔츠 차림, LEADS_lineup 금지). 만화 기호 없음. 니트 조끼 남색만. 초록 없음.

### panel_036
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 3 코 · 검사 정식 통과(거짓말 없이) · 건조한 유머
- characters: RYU (바스트) · DOHA (DOHA_SHIRTSLEEVES, 어깨 전경)
- size: medium · aspect: 3:4
- camera: bust of the teacher over Doha's shoulder, eye level.
- composition: Screen-right foreground, soft: Doha's white-shirt shoulder and loose tie, the back of his messy black hair. Middle screen-left: the teacher, dry tired face, light stubble, pointing his pen past them toward the next desk. Window light. Top third: plain cream wall and the top of the curtains.
- eyes: the teacher looks at Doha, deadpan; Doha (from behind) nods slightly.
- emotion: 건조한 유머
- motion/direction: 담임 펜 → 다음 자리(왼쪽)
- dialogue_ref: 담임 "…백도하. 검사 중이다." (bubble 1, tail → teacher) · 도하 "네." (bubble 2, tail → foreground shoulder)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above the teacher's head) as calm, empty background for two bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 RYU_sheet, DOHA_turnaround(v1.3 §R-3). DOHA_SHIRTSLEEVES.

### panel_037
- scene_id: E04S07 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 6 비 · **⟨복선 TB-V2: 의심 이동⟩** · M1 준비
- characters: HARAM (클로즈업 전경) · DOHA (DOHA_SHIRTSLEEVES, 원경 창가)
- size: medium · aspect: 3:4
- camera: close-up of Haram in the foreground, focus pulled to Doha far behind at the window seat.
- composition: Screen-left foreground, slightly soft: Haram's profile walking on toward desk 15, clipboard against her chest, but her eyes turned back, narrowing behind the thin silver rectangular glasses. Background, in focus: Doha back at his window desk in his white shirt, sitting loosely, looking out of the window; golden window light, yellow ginkgo outside. Seoyun NOT in focus or out of frame. No top art space needed.
- eyes: Haram's narrowed eyes on Doha; Doha looks outside.
- emotion: 의심의 화살이 옮겨 감
- motion/direction: 하람 눈(전경) → 도하(원경)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: **반전 B 시각 단서 TB-V2 — 빠뜨리지 말 것.** 하람이 보는 것은 서윤이 아니라 도하. 첨부 HARAM_turnaround, HARAM_expressions, DOHA_turnaround. 도하 = DOHA_SHIRTSLEEVES(소매 내림, 셔츠는 바지에).

--- SCENE BREAK --- (E04S07 교실 → E04S08 계단참, 1교시 뒤 쉬는 시간)

### ⑥ 장학 거절 — P38~P44 (1교시 뒤 쉬는 시간)

### panel_038
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 5 설 · 고마움 대신 화
- characters: SEOYUN (SEOYUN_VEST_UNDER_BLAZER, screen-right) · DOHA (DOHA_SHIRTSLEEVES, screen-left, 백팩 왼쪽 어깨)
- size: medium · aspect: 3:4
- camera: side two-shot, eye level — the same stairwell axis as panel_009, closer, favouring the hands.
- composition: Middle: Seoyun screen-right shoving Doha's navy blazer, bundled up in both fists, hard into his chest; Doha screen-left in shirt sleeves (white shirt tucked in, sleeves down, tie slightly low, top button undone, no backpack on him) taking it against his chest with one hand. Her own blazer buttoned. Locked grey door and dusty apricot window at upper right, stacked desks, violet shadows. Top fifth on the left: plain dim stairwell wall.
- eyes: Seoyun glares at his chest, not his face; Doha looks down at her, flat.
- emotion: 고마움 대신 화
- motion/direction: 서윤 주먹 → 도하 가슴
- dialogue_ref: 서윤 "가져가." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left fifth of the frame (plain dim stairwell wall above Doha's head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 P9(필수, 카메라·칸만 참고 — P9의 도하 블레이저는 따라 하지 않음)** + SEOYUN_turnaround + DOHA_turnaround (LEADS_lineup 금지). E04S08 의상: 도하 DOHA_SHIRTSLEEVES + 돌려받은 블레이저를 손에. 백팩은 몸에 없음(벽의 쌓인 책상 위, 이 컷에선 프레임 밖이거나 배경에 작게). 초록 없음. **P39~P44가 이 이미지 참조.**

### panel_039
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 4 코·설 · ⟨복선 VEST: 아직 입고 있음⟩ · 무표정 개그 / 설렘
- characters: DOHA (DOHA_SHIRTSLEEVES, 바스트) · SEOYUN (단추 손 전경)
- size: medium · aspect: 3:4
- camera: Doha's bust in the upper half, Seoyun's hands at her blazer hem in the near lower foreground — one frame.
- composition: Lower foreground, sharp: Seoyun's fingers hurriedly closing the bottom button of her navy blazer; in the small gap only shadow and white shirt show — nothing green. A glimpse of her bright red ear at the edge. Upper half: Doha in shirt sleeves (white shirt tucked in, sleeves down), his navy blazer folded over his forearm, deadpan, pointing with his chin down at her button. Apricot backlight behind him. Top fifth: plain dim stairwell wall.
- eyes: Doha looks down at the button; (Seoyun's face out of frame, ear red).
- emotion: 무표정 개그 / 설렘
- motion/direction: 도하 턱짓(위) → 단추 손(아래)
- dialogue_ref: 도하 "단추." (bubble 1, tail → Doha) · 서윤 "…알아." (bubble 2, tail → bottom foreground)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above Doha's head) as calm, empty background for two bubbles.
- split: no
- gap_after: 80
- fx/note: **초록 노출 금지 — 풀린 단추 틈엔 그림자와 흰 셔츠만**(character-sheets §2 P39). 비트시트 "바스트 + 인서트" = 한 프레임. 첨부 P38, DOHA_turnaround, DOHA_expressions(무표정 개그). 도하 = 셔츠 + 블레이저를 팔에.

### panel_040
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 5 설 · ⟨ep03 P52 메아리⟩ · 자존심
- characters: SEOYUN (바스트) · DOHA (어깨 전경)
- size: medium · aspect: 3:4
- camera: over Doha's shoulder onto Seoyun, eye level.
- composition: Screen-left foreground, soft: Doha's white-shirt shoulder, the bundled blazer over his forearm. Middle screen-right: Seoyun in bust, chin up, arms crossed over her buttoned blazer, ears still faintly red, drawing a line. Dusty apricot window light on her face. Top third: plain dim stairwell wall.
- eyes: Seoyun looks straight at Doha, proud; avoids softening.
- emotion: 자존심
- motion/direction: 도하 어깨 → 서윤
- dialogue_ref: 서윤 "고맙다곤 안 해. 부탁한 적도 없어." (bubble 1, tail → Seoyun) · 도하 "응." (bubble 2, tail → left foreground shoulder)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two bubbles, the short one on the left.
- split: no
- gap_after: 160
- fx/note: 첨부 SEOYUN_turnaround, SEOYUN_expressions. 160 = 질문 앞 비트 끊기.

### panel_041
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 6 비 · **⟨복선 K3 · W2⟩** · 진지
- characters: SEOYUN (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Seoyun, eye level, the window light falling on her face from in front.
- composition: Seoyun's face centre, expression changed — serious, steady, the anger set aside; soft apricot window light on her face, see-through bangs, faint dark circles. Behind her: dim stairwell wall in violet shadow. Top fifth: plain dim stairwell wall.
- eyes: Seoyun looks straight at Doha (toward camera), asking for real.
- emotion: 진지
- motion/direction: 정면
- dialogue_ref: 서윤 "낮이니까 하나만 물을게." (bubble 1) · 서윤 "장학금, 왜 거절했어." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 SEOYUN_turnaround, SEOYUN_expressions. **P43이 이 이미지 참조.**

### panel_042
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 6 비 · **⟨복선 W2 · C10⟩** ⟨이중의미⟩ · 말을 아낌
- characters: DOHA (DOHA_SHIRTSLEEVES, 정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Doha, eye level, backlit by the dusty window behind him.
- composition: Doha's face centre, half in backlight, apricot rim light on his messy hair and shoulders, white shirt collar open, tie loose; flat calm expression, one beat late. Behind him: the dusty window glowing, the locked grey door edge. Top fifth: soft hazy window glow (plain, no detail).
- eyes: Doha looks at her, then slightly away — keeping the rest in.
- emotion: 말을 아낌
- motion/direction: 정면
- dialogue_ref: 도하 "필요 없어서." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (the soft plain haze of the window glow above his head) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 첨부 DOHA_turnaround, DOHA_expressions(LEADS_lineup 금지). DOHA_SHIRTSLEEVES. 역광이어도 얼굴은 읽히게. 안경 없음.

### panel_043
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 6 비 · ⟨복선 W2: ep08 회수 전조⟩ · 모욕감
- characters: SEOYUN (옆얼굴 클로즈업)
- size: medium · aspect: 3:4
- camera: side close-up of Seoyun, slightly high angle.
- composition: Seoyun in profile facing screen-left, face hardening, lips pressed, eyes lowered and glistening with hurt pride, a jaw muscle tight; low ponytail and temple strands. Apricot window light on the near cheek, violet shadow behind. Top third: plain dim stairwell wall.
- eyes: Seoyun looks down and away, wounded.
- emotion: 모욕감
- motion/direction: 옆얼굴 → 왼쪽(아래 계단)
- dialogue_ref: 서윤 "…네가 필요 없어서 버린 걸," (bubble 1) · 서윤 "내가 주워 쓰는 거네." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above and in front of her face) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 권장 첨부 P41 + SEOYUN_turnaround + SEOYUN_expressions. 울지 않는다(눈가만).

### panel_044
- scene_id: E04S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 5 비 · 도하 결함(침묵) · 키링 · 말하지 못한 것
- characters: DOHA (DOHA_SHIRTSLEEVES, 혼자)
- size: medium · aspect: 3:4
- camera: high angle from above the landing looking down on Doha and the emptying stairs.
- composition: Middle: Doha alone on the landing in shirt sleeves (white shirt tucked in, sleeves down), his navy blazer over his forearm, standing beside the two old desks stacked against the wall where his black backpack lies; his mouth slightly open as if to speak, then not; his thumb resting on the clear resin keyring clipped to the D-ring of the backpack's left strap (faded ivory crane inside, small). Below him: the worn concrete steps going down, empty — at the bottom edge, just the last sliver of Seoyun's check skirt disappearing around the turn. Apricot light, violet shadows.
- eyes: Doha looks down the stairs where she went.
- emotion: 말하지 못한 것
- motion/direction: 도하 → 빈 계단(아래)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: 권장 첨부 P38 + DOHA_turnaround. 백팩은 쌓인 책상 위(몸에 메지 않음, character-sheets §3 P38 규칙과 대본 P44를 함께 만족). 키링 작게(두 특징 판별 불필요). 320 = 쉬는 시간 → 점심.

--- SCENE BREAK --- (E04S08 계단참 → E04S09 복도, 12:40 점심 순찰)

### ⑦ 하람의 정밀화 — P45~P51 (월 12:40)

### panel_045
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 6 위 · **⟨복선 K2⟩** · 하람의 점심 순찰(ep03 사실 유지) · 다시 막힘
- characters: SEOYUN · DOHA (OUTFIT_SCHOOL, 블레이저 다시 입음, 뒷모습) · HARAM (정면 중경) · GEONU
- size: large · aspect: 9:16
- camera: eye level from behind the two, long lens down the corridor to the vanishing point.
- composition: Lower third foreground: Seoyun (screen-right) and Doha (screen-left) from behind, walking hand in hand — Doha's RIGHT hand holding her LEFT hand — Doha's blazer back on, open. Middle: blocking the corridor ahead, close now, Haram facing camera on lunch patrol, crimson armband on her LEFT arm (screen-right on her), black clipboard, formal; a step behind her Geonu, a head taller, armband, clipboard, uneasy. The corridor running deep behind them: windows along one side with midday light and yellow ginkgo, classroom sliding doors on the other, terrazzo floor. Top quarter: plain cream upper wall and ceiling lights receding.
- eyes: Haram looks at the two, formal; Geonu glances away.
- emotion: 다시 막힘
- motion/direction: 두 사람 뒷모습 → 하람
- dialogue_ref: 하람 "점심 순찰 중입니다." (bubble 1) · 하람 "잠깐이면 됩니다." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame (plain cream upper wall and ceiling above Haram) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep03 panel_027 + LEADS_lineup + HARAM_turnaround. 손잡기 방향 ep02·ep03 그대로. **P46~P51이 이 이미지 참조.**

### panel_046
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 7 비 · **⟨복선 TB-D2⟩** · ep03 P8 메아리 · 정확한 관찰
- characters: HARAM (OTS 전경) · DOHA (바스트) · (서윤 가장자리)
- size: medium · aspect: 3:4
- camera: over Haram's shoulder onto Doha, eye level.
- composition: Screen-left foreground, soft: Haram's shoulder with the crimson armband and the back of her bob (black hairpin behind the right ear). Middle: Doha in bust, blazer open, flat, looking down at her. Screen-right edge, soft: Seoyun's shoulder, skipped over. Corridor windows with midday light behind. Top third: plain cream upper wall.
- eyes: Doha meets Haram's look, unbothered.
- emotion: 정확한 관찰
- motion/direction: 하람(전경) → 도하
- dialogue_ref: 하람 "교무실 앞에도 먼저 와 있었고," (bubble 1, tail → left foreground) · 하람 "오늘 검사 때도 그랬고요." (bubble 2, tail → left foreground)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper wall above Doha's head) as calm, empty background for two stacked bubbles on the left side.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 P45 + DOHA_turnaround + HARAM_turnaround.

### panel_047
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 8 비·위 · **⟨복선 TB-D3: 의심 이동 완성⟩** · 의심의 확정
- characters: HARAM (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Haram, slightly low angle.
- composition: Haram's face centre, one finger pushing her thin silver rectangular glasses up at the bridge, a flash of light on the lenses that still lets her eyes show, bob with the black hairpin behind the RIGHT ear (on the viewer's left), crimson armband just at the lower edge. Behind: soft corridor windows. Top fifth: plain cream upper wall.
- eyes: Haram looks straight at Doha (toward camera), sharp as a blade.
- emotion: 의심의 확정
- motion/direction: 정면
- dialogue_ref: 하람 "백도하 씨는 왜 늘 한 박자 먼저 움직이죠?" (bubble 1, KM 김)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream upper wall above her head) as calm, empty background for one wide bubble.
- split: no
- gap_after: 80
- fx/note: 첨부 HARAM_turnaround, HARAM_expressions(안경 밀어 올림). 악역식 비웃음 금지.

### panel_048
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 5 코 · 무표정 개그
- characters: DOHA (바스트) · GEONU (작게, 후경)
- size: medium · aspect: 3:4
- camera: Doha's bust in the foreground, Geonu small behind Haram's position — one frame.
- composition: Middle screen-left: Doha in bust, blazer open, deadpan, eyebrows level. Background screen-right, smaller: Geonu, big and gentle, crimson armband, clipboard to his chest, leaning to murmur, eyes wide with reluctant admiration. Corridor windows with midday light. Top third: plain cream upper wall.
- eyes: Doha looks at Haram (off-frame right), flat; Geonu looks at Doha, impressed.
- emotion: 무표정 개그
- motion/direction: 도하 → 건우
- dialogue_ref: 도하 "늦는 것보다 나아서." (bubble 1, tail → Doha) · 건우 "…부장, 쟤 대답 잘하는데요." (bubble 2, tail → Geonu)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper wall) as calm, empty background for two bubbles, Doha's on the left and Geonu's on the right.
- split: no
- gap_after: 30
- fx/note: 건우 = 토큰만. 비트시트 "건우 얼굴 소컷" = 한 프레임 후경.

### panel_049
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 8 위 · **⟨타이머: 현장⟩ ⟨복선 TB 원인⟩** · 새 위협
- characters: HARAM (바스트) · SEOYUN·DOHA (잡은 손 전경 흐림)
- size: medium · aspect: 3:4
- camera: bust of Haram, eye level, with the couple's joined hands soft in the near foreground.
- composition: Lower foreground, out of focus: the two joined hands — Doha's RIGHT hand holding Seoyun's LEFT hand — navy blazer cuffs. Middle: Haram in bust, ignoring Geonu, formal and cool, clipboard against her chest, crimson armband on her LEFT arm, chin slightly raised. Corridor windows behind with midday light. Top third: plain cream upper wall.
- eyes: Haram looks at both of them, steady.
- emotion: 새 위협
- motion/direction: 하람 → 잡은 손(전경)
- dialogue_ref: 하람 "가방에서 안 나왔으면, 다음은 현장입니다." (bubble 1, KM 김) · 하람 "솔내동 사거리, 제가 직접 확인하고 원칙대로 보고드리겠습니다." (bubble 2, KM 김 — letterer 분할 주의)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper wall above her head) as calm, empty background for two stacked wide bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 HARAM_turnaround, LEADS_lineup. 손 흐림(파스는 서윤 왼손목, 흐려도 왼쪽).

### panel_050
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 7 위 · ⟨K2⟩ · 공포 / 버팀
- characters: SEOYUN · DOHA (손만)
- size: insert · aspect: 1:1
- camera: extreme close-up of the joined hands.
- composition: Centre: Doha's RIGHT hand holding Seoyun's LEFT hand; her fingers tightening, knuckles pale, the white square pain-relief patch on the inside of her LEFT wrist just visible at the cuff; his thumb lying still over the back of her hand, not moving. Navy blazer cuffs. Soft terrazzo floor and window light behind.
- eyes: (얼굴 없음)
- emotion: 공포 / 버팀
- motion/direction: 힘이 들어간 손가락 ↔ 움직이지 않는 엄지
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: 손가락 수 정확히. 파스 = 왼손목(서윤).

### panel_051
- scene_id: E04S09 / location: LOC_HALLWAY · mood: M_DAY
- beat: ⑦ · 긴장 7 비 · **⟨복선 TB-D4⟩ ⟨이중의미⟩** · P9 "나한테 맡겨" 회수 · 결정(혼자서)
- characters: SEOYUN · DOHA (뒷모습 + 도하 옆얼굴) · HARAM · GEONU (멀어짐)
- size: medium-wide · aspect: 4:3
- camera: from behind the two at eye level, the corridor deep ahead; Doha's face turned in profile.
- composition: Foreground: Seoyun (screen-right) and Doha (screen-left) from behind, still holding hands; Doha's head turned so his profile shows, eyes on the backs walking away; Seoyun turning her head up toward him. Midground-far: Haram and Geonu walking away down the corridor, small, crimson armbands. Windows with midday light. Upper-left half: plain cream upper wall and ceiling.
- eyes: Doha watches Haram's back, quiet and decided; Seoyun looks up at him.
- emotion: 결정(혼자서)
- motion/direction: 멀어지는 하람 → 도하 옆얼굴 → 서윤
- dialogue_ref: 도하 "그럼 내가 끝낼게." (bubble 1, tail → Doha) · 서윤 "…뭘?" (bubble 2, tail → Seoyun)
- bubbles: 2
- art_space: Keep the upper-left half of the frame as a vertical strip (plain cream upper wall and ceiling above Doha) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: **첨부 P45(필수)**. 예비 종은 대본 효과음 줄이 없으므로 그리지도 쓰지도 않는다(지문만). **반전 B 대사 단서 — P58이 글자 그대로 회수.**

--- SCENE BREAK --- (E04S09 복도 → E04S10 교실, 5교시)

### ⑧ 쪽지 + 감속 — P52~P56 (5교시 ~ 16:35)

### panel_052
- scene_id: E04S10 / location: LOC_CLASSROOM · mood: M_DAY (오후)
- beat: ⑧ · 긴장 5 비·코 · **⟨복선 TB-V3: 그녀의 노트 종이⟩** · 서윤 짜증 / 도하 태연
- characters: SEOYUN · DOHA (두 책상) · 교사(뒷모습, 원경)
- size: medium-wide · aspect: 4:3
- camera: high angle onto two desks diagonal to each other (Doha's window desk behind-left, Seoyun's desk in front-right).
- composition: Middle: Seoyun's desk with her plain notebook open — a plain pale grey cover with no print, unlined blank white pages; from the upper-left, Doha leaning forward over the corner of his own desk, his long fingers tearing one blank page out along the binding (a narrow ragged stub left). Seoyun twisting toward him, hissing, reaching for the page too late. Upper-right background, small and soft: a teacher's back at the empty green chalkboard (no writing). Afternoon window light from the left. Upper-left third: plain cream wall and curtain top.
- eyes: Seoyun glares at Doha's hand; Doha looks only at the paper, unbothered.
- emotion: 서윤 짜증 / 도하 태연
- motion/direction: 도하 손 → 뜯기는 종이 → 서윤
- dialogue_ref: 서윤(속삭임) "야, 그거 내 노트—" (bubble 1, small)
- bubbles: 1
- art_space: Keep the top-left third of the frame (plain cream wall and curtain top above Doha) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: SEOYUN_TORN_PAGE(character-sheets v1.3 §P). 첨부 LEADS_lineup (+ SEOYUN_turnaround). 노트·칠판 무지. 자리 배치 §3-2(대각선 앞, §7 의문 4). 카메라를 두 책상에만 붙여 교실 전체 배치를 보여 주지 않는다. **P53·P54가 이 이미지 참조.** 속삭임 = dialogue(letterer 판단, 작은 글자).

### panel_053
- scene_id: E04S10 / location: LOC_CLASSROOM · mood: M_DAY (오후)
- beat: ⑧ · 긴장 6 비 · **⟨복선 TB-V4: 손으로 가림 · 평평한 접기(ep05 회수용)⟩** · 의심의 싹
- characters: SEOYUN (OTS 전경) · DOHA (손 클로즈업)
- size: medium · aspect: 3:4
- camera: over Seoyun's shoulder, close on Doha's hands on his desk.
- composition: Screen-left foreground, soft: Seoyun's shoulder and cheek, peeking sideways. Middle-lower, sharp: Doha's hands on his desk — his cupped LEFT hand covering the torn-out unlined page so nothing written can be seen, only the pen tip showing in his right hand; beside it, the same white paper already folded once in the next beat's shape — a small plain white paper note folded flat in four into a small square about half the size of a palm, crisp straight creases, one slightly ragged edge, blank on every visible side, not a crane and not folded into any shape. Afternoon window light from the left. Top third: plain soft cream wall.
- eyes: Seoyun's sideways glance on his hands (implied).
- emotion: 의심의 싹
- motion/direction: 서윤 어깨 → 도하 손 → 평평한 사각
- dialogue_ref: 서윤(생각) "…뭘 쓰는 거야." (bubble 1, thought)
- bubbles: 1
- art_space: Keep the top third of the frame (plain soft cream wall) as calm, empty background.
- split: no
- gap_after: 320
- fx/note: **글씨 보이지 않음(손으로 가림), 쪽지는 평평한 사각 — 학 금지.** DOHA_NOTE_FLAT + SEOYUN_TORN_PAGE(v1.3 §P). PROPS_sheet·학 이미지 첨부 금지(§3-3). 첨부 DOHA_turnaround, SEOYUN_turnaround + 권장 P52. 320 = 5교시 → 16:35.

--- SCENE BREAK --- (E04S10 → E04S11 교실, 16:35 7교시 끝)

### panel_054
- scene_id: E04S11 / location: LOC_CLASSROOM · mood: M_DAY (늦은 오후 낮은 해)
- beat: ⑧ · 긴장 5 코·비 · **⟨복선 TB-V5 · TB-D5⟩** · ep05 태민 "자수했어?!" 씨앗 · 눈치 없는 개그 / 불길함
- characters: TAEMIN (미디엄) · SEOYUN (반쪽) · (도하 빈 자리)
- size: medium-wide · aspect: 4:3
- camera: the same two desks as panel_052, from a lower angle; the empty window desk in the foreground.
- composition: Screen-left foreground, sharp: Doha's window desk EMPTY — chair pushed in, nothing on the desk hook, no backpack. Middle: Taemin beside it, stretching with both arms up, yawning grin, cowlick, shirt sleeves rolled. Screen-right edge: half of Seoyun at her desk, blazer buttoned, turning to look at the empty seat. Low late-afternoon sun through the windows, long shadows, yellow ginkgo outside. Upper-right half: plain cream wall and curtain top.
- eyes: Taemin looks at Seoyun, careless; Seoyun stares at the empty desk.
- emotion: 눈치 없는 개그 / 불길함
- motion/direction: 빈 자리(왼쪽) → 태민 → 서윤
- dialogue_ref: 태민 "백도하? 학생부실 쪽 가던데." (bubble 1) · 태민 "자수하러 가나?" (bubble 2)
- bubbles: 2
- art_space: Keep the upper-right half of the frame as a vertical strip (plain cream wall and curtain top above Seoyun) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: **첨부 P52(필수, 같은 두 책상, 비었음)** + CLASSMATES_sheet + SEOYUN_turnaround. 빈 고리 = 백팩 없음.

--- SCENE BREAK --- (E04S11 교실 → E04S12 방과 후 복도)

### panel_055
- scene_id: E04S12 / location: LOC_HALLWAY · mood: M_DAY (늦은 오후 비스듬한 빛)
- beat: ⑧ · 긴장 5 비 · 쫓아감
- characters: SEOYUN (SEOYUN_VEST_UNDER_BLAZER, 작게)
- size: large · aspect: 9:16
- camera: eye level, long lens down the empty corridor to the vanishing point.
- composition: The after-school corridor completely empty except Seoyun, small in the middle distance, walking fast toward camera-far end (her back to us), blazer buttoned, backpack on. Long slanted late-afternoon light falling through the windows on one side in golden bars across the terrazzo floor; yellow ginkgo leaves outside, a few drifting. Classroom sliding doors closed on the other side. Lots of empty ceiling and wall above.
- eyes: (뒷모습)
- emotion: 쫓아감
- motion/direction: 소실점으로
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: 첨부 SEOYUN_turnaround. 무대사 3연속(P55~P57) 시작. 게시판 무지. **P56이 이 이미지 참조.**

### panel_056
- scene_id: E04S12 / location: LOC_HALLWAY (모퉁이 → 학생부실 원경) · mood: M_DAY (늦은 오후)
- beat: ⑧ · 긴장 7 비 · ep03 P56(복도 끝 시선)의 짝 · 숨을 죽임
- characters: SEOYUN (OTS 전경) · DOHA (원경 뒷모습)
- size: large · aspect: 9:16
- camera: over Seoyun's shoulder from the corner where the corridor turns, long lens to the far end.
- composition: Screen-left foreground: the edge of the corner wall and Seoyun's shoulder and cheek pressed close to it, stopped. Deep in the frame, small at the far end of the corridor: the frosted-glass door of the student-discipline office (no sign), and on the wall beside it a locked small wooden tip box with a slot (blank); in front of it, Doha from behind, blazer open, black backpack on his LEFT shoulder, standing very still, a tiny flat white square of paper in his fingers (not a crane). Slanted late-afternoon light across the floor. Lots of plain wall and ceiling above.
- eyes: Seoyun stares at Doha's back.
- emotion: 숨을 죽임
- motion/direction: 모퉁이(전경) → 복도 끝 도하·제보함
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: TIPBOX + DOHA_NOTE_FLAT(원경 손안, 작게). 권장 첨부 P55 + ep03 panel_045(제보함 지리) + SEOYUN_turnaround. PROPS_sheet 금지. 제보함·문 무지. **P57·P58·P59가 이 이미지 참조.**

--- SCENE BREAK --- (E04S12 → E04S13 학생부실 앞, 16:38)

### ⑨ 클리프행어 — P57~P60 (16:38)

### panel_057
- scene_id: E04S13 / location: LOC_STUDENT_OFFICE · mood: M_DAY (늦은 오후)
- beat: ⑨ · 긴장 8 비 · **⟨반전 B 행동⟩ ⟨복선 M1-V2⟩** · ep01 P20의 짝(이번엔 평평한 사각) · 돌이킬 수 없음
- characters: DOHA (손가락 + 백팩 끈)
- size: insert · aspect: 1:1
- camera: extreme close-up on the slot of the wall tip box.
- composition: Centre: the slot of the locked small wooden tip box with a slot mounted on the wall — plain wood, a small lock, no sign, label, number or writing anywhere on it — Doha's long fingers pushing a small plain white paper note folded flat in four into a small square about half the size of a palm (crisp straight creases, one slightly ragged edge, blank, not a crane and not folded into any shape) halfway into the slot. Bottom edge of the frame: the LEFT strap of his black backpack with the clear resin keyring swinging, the faded ivory crane inside soft and slightly blurred. Edge of the frosted-glass door at one side. Upper quarter: plain cream wall above the box.
- eyes: (얼굴 없음)
- emotion: 돌이킬 수 없음
- motion/direction: 손가락 → 투입구 / 키링 흔들림(아래)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: TIPBOX + DOHA_NOTE_FLAT(v1.3 §P). **쪽지는 평평한 사각, 학 금지.** 첨부(v1.3 §R-3): DOHA_turnaround + PROPS_sheet(하단 키링용, 허용) + 권장 P56 또는 ep03 panel_045(제보함). 프롬프트에 "not a crane" 필수; PROPS의 학이 쪽지를 학으로 끌고 가면 PROPS를 빼고 다시. 학 모양 제보 쪽지 이미지(ep03 panel_046·058, P1) 첨부 금지. 키링은 흐림(판별 불필요)이라 쪽지와 학이 "나란히" 읽히지 않는다.

### panel_058
- scene_id: E04S13 / location: LOC_STUDENT_OFFICE (모퉁이 쪽) · mood: M_DAY (늦은 오후)
- beat: ⑨ · 긴장 9 비 · ⟨이중의미 회수: P51⟩ · 배신감의 시작
- characters: SEOYUN (얼굴 클로즈업)
- size: medium · aspect: 3:4
- camera: close-up of Seoyun at the corner, eye level, the edge of the corner wall in the near foreground.
- composition: Screen-left foreground, soft: the vertical edge of the corner wall (pale green lower wall, cream upper). Middle-right: Seoyun's face, three-quarter, eyes wide and going cold, lips parted, faint dark circles; slanted late-afternoon light on one side of her face. Top third: plain cream wall above her head.
- eyes: Seoyun stares down the corridor at the tip box.
- emotion: 배신감의 시작
- motion/direction: 벽 모서리 → 서윤 시선(오른쪽 깊이)
- dialogue_ref: 서윤(생각) "제보함…" (bubble 1, thought) · 서윤(생각) "'그럼 내가 끝낼게.'" (bubble 2, thought — P51 인용)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above her head) as calm, empty background for two stacked thought bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 P56 + SEOYUN_turnaround + SEOYUN_expressions(얼어붙음). **P60이 이 이미지 참조.** LOC는 STUDENT_OFFICE 씬이지만 서윤은 모퉁이 벽 쪽(같은 복도의 끝 구간).

### panel_059
- scene_id: E04S13 / location: LOC_STUDENT_OFFICE · mood: M_DAY (늦은 오후)
- beat: ⑨ · 긴장 9 비 · **⟨복선 M1-D1 · C9 · C2⟩** · 연결(틀린 연결)
- characters: DOHA (원경, 고개를 돌림) · SEOYUN (주먹 전경)
- size: medium · aspect: 3:4
- camera: long two-shot down the length of the corridor from the corner, Seoyun's fist in the near lower foreground — one frame.
- composition: Lower foreground, sharp: Seoyun's RIGHT fist crushing a small crane folded from a silvery-white gum wrapper, the paper crumpling between her fingers. Middle-far, at the end of the corridor beside the frosted-glass door and the blank tip box: Doha, turning his head to look straight back at her down the whole corridor — no excuse, no hiding gesture, his hands at his sides, backpack on the LEFT shoulder. The corridor's length between them, slanted late-afternoon light across the floor. Top third: plain cream wall and ceiling.
- eyes: Doha looks at her, steady and open; (Seoyun's face out of frame).
- emotion: 틀린 연결
- motion/direction: 구겨지는 학(전경) → 복도 끝 도하
- dialogue_ref: 서윤(생각) "첫 번째 제보도…" (bubble 1, thought) · 서윤(생각) "학이었어." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall and ceiling above the corridor) as calm, empty background for two stacked thought bubbles.
- split: no
- gap_after: 160
- fx/note: **첨부 P56(필수)** + SEOYUN_turnaround + DOHA_turnaround. 비트시트 "투샷 롱 + 주먹 인서트" = 한 프레임 전경/원경. 머릿속 학 모양 쪽지·키링 겹침은 그리지 않는다(대사가 맡음). 구겨진 학 판별 불필요. 160 = 마지막 패널 앞 숨.

### panel_060
- scene_id: E04S13 / location: LOC_STUDENT_OFFICE (배경 단순화) · mood: M_DAY (늦은 오후 역광)
- beat: ⑨ · 긴장 **10** 비 · **⟨반전 B 정점 · M1 시작⟩** · 회차 마지막 · **캡처 컷 후보**
- characters: SEOYUN (정면 클로즈업)
- size: full-bleed · aspect: 9:16
- camera: frontal close-up of Seoyun, eye level, from Doha's side of the corridor.
- composition: Seoyun's face in the middle of the tall frame, late-afternoon backlight from behind her rimming her hair and the loose temple strands in gold, her face in soft shadow but fully readable: eyes wide, wet at the rims, hurt turning into suspicion, lips just parted. Background reduced to a soft blur of warm corridor light. Top sixth: plain soft warm blur above her head. Bottom sixth: plain simple darker navy (her buttoned blazer fading into shadow).
- eyes: Seoyun looks straight at Doha (toward camera).
- emotion: 의심
- motion/direction: 정면 정지
- dialogue_ref: 서윤 "…너였어?" (bubble 1) · 캡션 「— 5화에 계속 —」(narration, 아래)
- bubbles: 1 + caption 1
- art_space: Keep the top sixth of the frame (plain soft warm blur above her head) as calm, empty background for one bubble, and the bottom sixth (plain dark navy blazer shadow) as calm, empty background for the ending caption.
- split: no
- gap_after: 0
- fx/note: 권장 첨부 P58 + SEOYUN_turnaround + SEOYUN_expressions. 도하의 대답은 프레임 밖(ep05 P1). 얼굴 중앙, 위·아래 두 빈자리 모두 확보. 초록 없음.

---

## 6. 점검 (제출 전 체크리스트)

- [x] 패널 60개(≥50, ≥55), `panel_001`~`panel_060` 3자리 연속, 대본·비트시트 번호와 1:1.
- [x] style-bible v1.3 · character-sheets v1.3에 맞춤(M_HOME_MORNING, P21 빛 메모, 무지 문 보조구, 의상·소품 변형 이름, §R-3 첨부 행).
- [x] 모든 패널에 scene_id / LOC_* / mood. 같은 scene_id = 같은 LOC·빛. 교차 편집(S01↔S02)은 scene_id를 돌림. 씬 안 의상 변화는 대본 행동 두 곳(P20 조끼 입고 나옴, P34 블레이저 벗음)뿐.
- [x] 대사 패널 50개 전부 dialogue_ref + art_space, 말풍선 84개 = 대본 대사·생각 줄 84개. 무대사 10개(P16·P18·P19·P28·P37·P44·P50·P55·P56·P57) art_space none. 무대사 연속 최대 3컷(P55~P57).
- [x] 화면비: 9:16 ×8 · 3:4 ×35 · 4:3 ×13 · 1:1 ×4 = 60.
- [x] split: yes = P3(ep03 P59 매치), P28(2칸으로 축소).
- [x] 반전: A = P33 9:16 단독(앞 P32 gap 160, 뒤 160 — "한 박자 먼저" 타이밍 보존). B = P55~P60 감속 → P60 9:16 마지막.
- [x] 단서 위치 비트시트 그대로: C9 P1·P4 · R3 P2·P7·P23·P29·P31 · C2 P3·P11·P28·P59 · TA-V1/TA-D1 P12 · VEST P8·P13·P14·P15·P30·P32·P39 · TA-D2 P14 · W5 P16·P17·P18 · TA-A1 P19 · TA-A2/TA-D3 P20 · TA-V2/TA-D4 P21 · M1-V1/TB-V1 P26·P27 · **반전 A P33** · TB-V2 P37 · K3/W2 P41 · W2/C10 P42·P43 · K2 P45·P50 · TB-D2 P46 · TB-D3 P47 · TB 원인 P49 · TB-D4 P51 · TB-V3 P52 · TB-V4 P53 · TB-V5/TB-D5 P54 · 반전 B 행동/M1-V2 P57 · P51 회수 P58 · M1-D1 P59 · **반전 B P60**.
- [x] 조끼 초록: 집 P13·P14(미스디렉션) + 학교 **P33 한 줄**뿐. P15·P19·P20·P21·P30·P31·P32·P34~P39 초록 0(명시).
- [x] 하람은 가방에 손대지 않음(P23·P25·P29·P31·P32 손 = 클립보드). 서윤은 가방째 화장실 → 홀쭉해져 나옴(P19↔P20 같은 구도). 서윤만 블레이저(P21). 남색 점퍼 남자 P16만(P18 없음).
- [x] 도하 쪽지 = 평평한 사각(P53·P57), 학 이미지 첨부 금지. 학 모양 제보 쪽지(P1·P4) 두 특징 없음. P28 학 두 특징.
- [x] 글자 0: 학 쪽지 안쪽·도하 쪽지·노트·뜯긴 종이·클립보드·칠판·교과서 표지·파스 상자·버스 전광판·광고판·화장실 문(표지·픽토그램 없음)·제보함·시계·휴대폰(뒷면) 전부 무지. 효과음 2개는 뷰어 sfx 자리만.
- [x] 한국 원작 그대로(캄보디아식 변형 없음). 신체 접촉은 손잡기·소매·블레이저 덮어 주기까지. 만화 기호 없음.

## 7. 의문 · 확인 요청 (art-director / 리더)

**v1.3으로 해결됨:** (a) E04S04 무드 = M_HOME_MORNING(AD 신규). (b) 계절 = 계절 추가구 `early November, the yellow ginkgo leaves beginning to fall`. (c) 의상·소품 변형 = character-sheets v1.3(SEOYUN_VEST_UNDER_BLAZER, DOHA_SHIRTSLEEVES, DOHA_NOTE_FLAT, SEOYUN_TORN_PAGE, TIPBOX, 남색 니트 조끼), "낮 장면 조끼 착용 금지"의 ep04 예외 메모 포함. (d) 무지 문 보조구 = style-bible v1.3 §7-2 원문.

남은 것:
1. **교실 자리 배치.** P52(도하가 몸을 기울여 서윤의 노트를 뜯음)·P34(뒤에서 블레이저)는 두 책상이 가까워야 하는데, ep01 P4는 "서윤 가운데 줄", ep03 P21은 "서윤 자리에서 방을 가로질러 창가"로 그렸다. characters.md(태민 = 도하 옆자리, 예린 = 서윤 옆자리)와 모순되지 않게 **서윤 = 태민 바로 앞 줄, 도하에게서 대각선 앞**으로 정했다. ep03 P21 이미지가 아직 없으니 실제 충돌은 없지만 시리즈 고정으로 할지 확인 요청. P52는 두 책상만 잡아 교실 전체 배치를 보여 주지 않는다.
2. **E04S08 도하 백팩(P38~P44).** character-sheets v1.3 §3은 "P38 계단참에도 백팩 없음", 대본 P44는 "엄지가 백팩 끈의 키링에". 둘을 함께 만족하도록 **백팩을 씬 내내 벽의 쌓인 옛 책상 위에 놓았다**(몸에 메지 않음). P39~P44 도하는 셔츠 차림 + 블레이저를 팔에(AD가 샷리스트에 위임한 부분).
3. **P33·P34 앞 패널 첨부 없음.** v1.3 §R-3의 시트 3장이 한도를 채워 P31→P33, P33→P34 매치 첨부를 뺐다. 연속성은 문구 + 생성 순서(P29·P31 → P33 → P34)로 맞춘다.
4. **P18·P56 장소.** 비트시트 "LOC_BUS_STOP_SCHOOL → LOC_GINKGO_ROAD"를 한 패널 안에서 토큰 두 개로 바꾸지 않고 BUS_STOP_SCHOOL 토큰 + 원경 묘사로 처리(같은 scene_id = 같은 LOC). P56도 HALLWAY 토큰 + 원경 학생부실 문·TIPBOX. P56 모퉁이 구절은 PD 작성 — AD 확인 요청.
5. **P3 학 재료.** ep03 P59(직전 컷)는 영수증 학, ep04 P3 대본은 "껌 종이 학". 대본대로 은백색 껌 종이(판별 불필요 크기).
6. **P28 3분할 → 2칸.** style-bible 최대 2칸 규칙 때문에 위 칸 하나에 11·12·13번 가방 세 개를 줄로 세웠다.

## 8. 하류 인계

- **letterer:** 각 패널의 `art_space`·`gap_after`를 `ep04_lettering.md`에 그대로(gap_after px 정수). 말풍선 수·화자는 `dialogue_ref`/`bubbles` 기준. 프레임 밖/가장자리 꼬리: P8(도하 → 왼쪽 가장자리), P10(서윤 → 오른쪽 가장자리), P17(서윤 → 오른쪽), P24(담임 → 오른쪽), P26(담임 → 오른쪽), P32(서윤 → 아래 손), P36(도하 → 전경 어깨), P39(서윤 → 아래 전경), P40(도하 → 왼쪽 전경 어깨), P46(하람 → 왼쪽 전경). 효과음: P22 종(스피커 쪽), P31 지퍼(가방 지퍼 옆). P60 캡션 narration 아래 1/6. thought = P3, P13(2), P25(2), P33(2), P53, P58(2), P59(2). shout = P35(2). 긴 KM: P1, P4, P7, P8, P10, P23, P47, P49 — 풍선 폭/분할 주의. **P33 말풍선은 초록 줄·얼굴·들린 가방 위 금지, P14는 지퍼 틈 초록 위 금지.** text_km은 대본 KM 그대로.
- **prompt-smith:** style-bible v1.3 §6-1 조립 순서. camera/composition/eyes/art_space 영어 그대로. LOC 토큰 §7 원문 + 무드 빛 문구 하나(E04S04 = **M_HOME_MORNING**) + 계절 추가구 + P21만 '따뜻한 교실' 빛 메모. P19·P20은 무지 문 보조구 원문, **프롬프트에 'restroom'·'toilet' 금지**. 의상·소품은 character-sheets v1.3 원문(SEOYUN_VEST_UNDER_BLAZER + P33 포즈 추가구 + P34~37 덧입기 구, DOHA_SHIRTSLEEVES, DOHA_NOTE_FLAT, SEOYUN_TORN_PAGE, TIPBOX, 남색 니트 조끼). 첨부: §3-3 시트 규칙 + 표(필수 표시 지킬 것; SEOYUN_night 금지; 셔츠 구간 LEADS_lineup 금지; P33·P34 시트 3장; PROPS_sheet는 P57만). 생성 순서 §3-4를 카드 순서/메모에. SCENE BREAK 13줄(§1)을 그룹 경계로. 빈 물체 = style-bible §9-2 문구.
- **art-director:** §7 남은 의문 1·2·4 확인 요청. 새 LOC·새 무드·새 시트 요청 없음.
