# EP02 샷리스트 — 『유통기한 연애』 2화 「묻지 않기로 했잖아」 · panel-director

- 작성: panel-director · 2026-11-22 · Flow-by-hand mode + Khmer edition · v1
- 게이트: `km_review.py gate --episode 02` → **OK** (ep02_script_final.md = Khmer review READY 판본, round 1, sha256 7547394f2d76…)
- 입력: `03_episode/ep02_script_final.md`(최종 대본, 61패널, KM 줄), `03_episode/ep02_beatsheet.md`(패널 번호·단서 위치 고정, §D-6 제작 메모), `04_visual/style-bible.md` v1(§3-2 무드, §5 화면비·프레이밍·방향, §7 LOC, §9 글자 없음, §10 art_space), `04_visual/character-sheets.md` v1(identity_tag, OUTFIT, 표정 슬롯, 소품), `02_story/world.md` §4·§5·§6, `04_visual/ep01_shotlist.md`(형식·연결 구도).
- 스킬: `webtoon-panel-breakdown` 작업 A(A-1~A-4) · `webtoon-khmer-edition` §4 · `webtoon-flow-handoff`
- **패널 61개.** `panel_001`~`panel_061` = 대본 `P01`~`P61`(번호·순서·단서 위치 그대로). 대사 패널 54 / 무대사 7(P8·P14·P28·P47·P50·P55·P56). 말풍선 83개(대본 대사·생각 줄 83개와 1:1). 효과음 5(P6·P47·P54·P55×2), 엔딩 캡션 1(P61).
- **한국 원작 그대로.** 서울 변두리 서진고·솔내동, 한국 교복·얼굴, 한국 편의점·골목·반지하. 캄보디아식 변형 없음. 크메르어는 뷰어 말풍선 글자에만.
- 작업 언어: 한국어. prompt-smith가 그대로 옮길 **camera / composition / eyes / art_space는 영어**. 대사(dialogue_ref)는 한국어 원문(크메르어 원본은 대본 `KM:` 줄, letterer가 옮김).
- 좌/우: `LEFT/RIGHT`(대문자) = 인물 본인 기준. `screen-left/right` = 화면 기준.
- **Khmer edition (one line):** No text of any kind in any image (no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing); every panel keeps its `art_space` as calm, empty background, objects that could carry writing (contract, phones, clipboard, clocks, chalkboard, tip box, bus display, signs, packaging) are drawn blank, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.

---

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 무드 ↔ 배경)

| scene_id | panels | location | mood | 의상 | 배경 한 줄 |
|---|---|---|---|---|---|
| E02S01 | P1–P7, P9 | LOC_CVS | M_NIGHT | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(P1~5 후드 벗음, P6부터 후드 씀) · 사장님 MISUK(P9) | 수 00:51~01:00. ep01 P60 직후 같은 편의점. 오른쪽 계산대, 왼쪽 끝 유리병, 오른쪽 끝 초록 할인 바구니, 계산대 뒤 숫자 없는 벽시계 |
| E02S02 | P8 | LOC_CVS (창 너머 LOC_CROSSROADS) | M_NIGHT | 도하 후드(원경) | 실내에서 본 유리창 너머 밤 사거리: 왼쪽 정류장, 오른쪽 어두운 골목, 대각선 너머 빈 점포 앞 빨간 의자, 멀리 마트 주차장 불빛 |
| E02S03 | P10 | LOC_UPHILL_ALLEY | **M_ALLEY_NIGHT [PD 제안]** | 서윤 OUTFIT_SCHOOL(블레이저 다시 입음) | 01:15 귀갓길 가파른 오르막 골목, 멀리 떨어진 가로등 세 개, 빈 골목 |
| E02S04 | P11 | LOC_HOME | **M_HOME_NIGHT [PD 제안]** | 서윤 흰 셔츠·체크 치마(블레이저는 옷걸이) · 엄마 HYEWON(등) | 반지하 단칸방, 높은 창으로 가로등 빛 한 줄, 요 두 장 |
| E02S05 | P12–P15 | LOC_GATE (P12 = 교문 앞 접근로) | M_DAY_OUT | 서윤·도하 OUTFIT_SCHOOL | 수 07:50. 언덕 아래 교문, 회색 돌기둥·무지 금속판, 열린 검은 철문, 그 뒤로 샛노란 은행나무 오르막 |
| E02S06 | P16–P22, P24 | LOC_GATE | M_DAY_OUT | 교복, 하람·건우 진홍 완장 | 같은 교문, 바삐 들어가는 학생들 |
| E02S07 | P23, P25–P28 | LOC_GINKGO_ROAD | M_DAY_OUT | 도하 교복, 하람 완장 | 교문 안 10m 위 은행나무 아래, 낮은 돌담, 언덕 위 학교 |
| E02S08 | P29–P33 | LOC_GATE | M_DAY_OUT | 교복, 하람·건우 완장 | 같은 교문, 조회 직전 |
| E02S09 | P34–P35 | LOC_CLASSROOM | M_DAY | 전원 교복 | 조회 직후 2학년 1반 |
| E02S10 | P36–P37 | LOC_CLASSROOM | M_DAY | 교복, 담임 RYU | 3교시 수학, 왼쪽 창 너머 언덕 아래 큰길 |
| E02S11 | P38–P41 | LOC_STAIR_LANDING | M_LANDING | 교복 | 점심, 옥상 앞 계단참(계약의 장소), 살구빛 역광 |
| E02S12 | P42–P45 | LOC_SNACK_BAR | M_DAY | 교복(예린 크림 카디건, 태민 셔츠) | 매점 줄 |
| E02S13 | P46 | LOC_STUDENT_OFFICE | M_DAY | 서윤 교복 · 하람·건우 유리문 실루엣 | 오후 쉬는 시간, 학생부실 앞 복도, 불투명 유리문, 잠긴 무지 제보함 |
| E02S14 | P47 | LOC_CLASSROOM @NIGHT | **M_SCHOOL_NIGHT_IN [PD 제안]** | 서윤 교복 | 21:40 야자 종, 형광등 교실, 검은 창 |
| E02S15 | P48–P50 | LOC_HALLWAY @NIGHT (계단 머리) | **M_SCHOOL_NIGHT_IN [PD 제안]** | 서윤·도하 교복(도하 안경 없음) | 2층 복도 끝 계단 머리, 검은 창이 복도를 비춤 |
| E02S16 | P51–P52 | LOC_HALLWAY @NIGHT (창 너머 LOC_GINKGO_ROAD @NIGHT) | M_SCHOOL_NIGHT | 도하 교복, 태민 셔츠, 서윤 교복(원경) | 2층 복도 창가, 아래 가로등 은행나무 길 |
| E02S17 | P53 | LOC_BUS_NIGHT | **M_BUS_NIGHT [PD 제안]** | 서윤 교복 | 녹색 시내버스 안, 창밖 학원가 밝은 창(간판 무지), 멀리 마트 주차장 불빛 |
| E02S18 | P54 | LOC_CVS | M_NIGHT | 서윤 OUTFIT_STORE | 목 00:00 폐기 정리, 같은 편의점 |
| E02S19 | P55–P61 | LOC_CVS (P56 창 너머 LOC_CROSSROADS) | M_NIGHT (P59~61 배경 단순화) | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(P55 후드 씀, P56부터 후드 벗음) | 목 00:50. 같은 편의점, 창가 바 테이블 |

- `--- SCENE BREAK ---`는 21곳: P8, P9(S01 복귀), P10, P11, P12, P16, P23, P24(교차 편집), P25(교차 편집), P29, P34, P36, P38, P42, P46, P47, P48, P51, P53, P54, P55 앞.
- 같은 scene_id = 같은 LOC 토큰 · 같은 무드 빛 · 같은 의상(style-bible §6-2-4). 예외 없음. 비트시트와 다르게 적은 곳 두 개(장소는 같고 표기만 맞춤):
  - **P12:** 비트시트 `LOC_GINKGO_ROAD` → `LOC_GATE`(교문 앞 접근로). E02S05의 P13~15가 LOC_GATE라 한 씬 안에서 토큰이 바뀌지 않게 했다. LOC_GATE 토큰에 "uphill avenue of tall ginkgo trees behind"가 이미 들어 있어 샛노란 은행나무는 그대로 보인다.
  - **P51:** 비트시트 `LOC_GINKGO_ROAD @NIGHT (위: LOC_HALLWAY @NIGHT 창)` → `LOC_HALLWAY @NIGHT (창 너머 LOC_GINKGO_ROAD @NIGHT)`. 카메라는 P51·P52 모두 2층 복도 창가에 있으므로 E02S16 한 씬의 토큰을 복도로 통일했다(ep01 P48과 같은 구도).
- **무드 [PD 제안] 4개**는 style-bible §3-2에 없는 장면(이 회차에서 처음 쓰는 LOC)용 임시 빛 문구다. art-director 확정 요청(§7):
  - `M_ALLEY_NIGHT`: `after midnight, sparse pools of orange streetlamp light on cold concrete, deep navy-black shadows between the lamps, quiet and empty`
  - `M_HOME_NIGHT`: `dark room at night, one thin beam of orange streetlight falling through the high narrow window, everything else in soft deep navy shadow, low contrast`
  - `M_SCHOOL_NIGHT_IN`: `night, flat white fluorescent ceiling light indoors, black windows reflecting the room, quiet and tired`
  - `M_BUS_NIGHT`: `cool blue-white bus interior light, dark night outside the window with orange streetlights and bright plain windows smearing past, faint condensation on the glass`

## 2. 크기 → Flow 화면비 (style-bible §5-1)

| size | aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed | **9:16** | P1, P8, P10, P18, P31, P38, P51, P61 | 8 |
| medium (기본) | **3:4** | P2–P5, P7, P9, P13, P15–P17, P19–P26, P29, P30, P32, P33, P35, P37, P40–P45, P48, P49, P52, P57–P60 | 37 |
| medium-wide | **4:3** | P6, P11, P12, P27, P34, P36, P39, P46, P53, P54, P55, P56 | 12 |
| insert / ECU | **1:1** | P14, P28, P47, P50 | 4 |
| | | **합계** | **61** |

- 9:16 8장의 이유: P1(회차 첫 장, ep01 클리프 받기), P8(창 너머 골목, ep01 P1의 역방향), P10(가로등 세 개가 세로로), P18(두 사람이 위아래로 갈라짐), **P31(반전 A 단독)**, P38(계단참 로우 앵글, ep01 P22 역전), P51(ep01 P48 변주), **P61(반전 B 마지막)**.
- 16:9 미사용.

## 3. 분할(split) · 매치 컷 · 고정 쌍 · 첨부

- **split: yes = 1개뿐: P20.** `two stacked frames in one image separated by a thin plain white gutter`, 위 얼굴 ECU / 아래 블레이저 주머니 속 손 인서트(주머니 속 손은 얼굴과 한 프레임에 담을 수 없다). art_space는 위 칸 안. P2·P14·P28·P32·P49·P57의 "얼굴 + 인서트"는 **한 프레임 안의 전경/후경 구도**로 풀었다(style-bible §5-2-2).
- **앞 패널 이미지를 첨부해야 하는 패널(생성 순서 주의):**

| 패널 | 첨부할 앞 패널 | 이유 | 고정할 것 / 다를 것 |
|---|---|---|---|
| **P8** | **ep01 panel_001** | 같은 창 너머 사거리, 걸음 방향만 역방향 | 같은 카메라·같은 거리 배치(정류장 screen-left, 어두운 골목 screen-right). ep01 P1은 골목에서 **걸어 나옴**, P8은 골목으로 **걸어 들어감** + 빨간 의자 쪽으로 고개 |
| **P56** | **ep02 panel_008** (+ 가능하면 ep01 panel_053) | 같은 사거리 지리(빨간 의자 = 대각선 너머 빈 점포 앞) | 의자 위치·마트 불빛 위치 동일. 다름: 창가 바 테이블에 앉은 도하의 어깨 너머(OTS), 정류장 빔 |
| **P61** | **ep01 panel_060** | 두 클리프 컷이 같은 사람·같은 형광 정면 | 같은 프레이밍(정면 바스트, 위 1/4·아래 1/6 비움), 같은 안경·후드 벗은 머리. 다름: 대사 한 줄(위 풍선 1개), 눈빛이 조금 더 부드럽고 단단함 |
| **P1** | **ep01 panel_059** | ep01 마지막 서윤 자세(반쯤 일어섬, 손에 스캐너)를 곧장 받는다 | 같은 조끼·같은 계산대. 다름: 카메라가 도하 눈높이에서 서윤 정면 |
| **P2** | **ep01 panel_060** | 후드 벗은 도하 얼굴·안경 연속 | 같은 얼굴·안경. 다름: 측면 미디엄, 턱으로 벽시계 가리킴 |
| **P38** | **ep01 panel_022** | 같은 계단참·같은 살구빛 로우 앵글, **위아래 역전** | 같은 카메라(계단 아래에서 올려다봄). 다름: 위 칸 = 서윤, 아래 전경 뒷모습 = 도하. 프롬프트에 "reversed: the girl stands above" 명시 |
| **P51** | **ep01 panel_048** | 같은 2층 창 하이 앵글, 변주 | 같은 길·가로등·뛰는 서윤. 다름: 창가 전경에 도하 + 태민 두 명 |
| **P30** | **ep02 panel_016** | 같은 교문 구도(하람 정면 + 두 사람 뒤통수) | 같은 배치. 다름: 하람 눈높이(로우 아님), 클립보드를 읽는 자세, 두 사람 손을 잡지 않음 |
| P55 (선택) | ep02 panel_005 | 같은 계산대·동전 | 계산대 소품 위치 |

- **생성 순서:** ep01 panel_001·022·048·053·059·060이 먼저 있어야 ep02 P1·P2·P8·P38·P51·P56·P61을 첨부할 수 있다(ep01은 아직 WAITING_FOR_IMAGES). ep02 안에서는 P8 → P56, P16 → P30, P5 → P55 순서.
- 첨부 3장 한도(style-bible §6-2-3): 인물 시트 1~2장 + 앞 패널 1장. 앞 패널 첨부가 있으면 시트는 2장까지.
- **새 레퍼런스 시트 1장 필요: `MISUK_sheet` (P9, 사장님 얼굴 첫 등장).** character-sheets §11 토큰 그대로. ref-sheet-artist에게: 16:9, 전신 정면 + 3/4 + 바스트 3칸(무뚝뚝한 걱정 디폴트 / 하품 / 먹을 것을 쥐여 주는 퉁명한 다정함), 초록 무지 조끼 + 연보라 플리스, 돋보기안경 머리 위, 글자 없음. **P9 생성 전 완료.**
- **시트 없이 토큰만:** HYEWON(P11, 등만, 얼굴 없음, character-sheets §12 토큰), GEONU(P16~P33·P46).
- **사장님 ↔ 도하 같은 프레임 금지(W7, 첫 대면 ep05):** P7 = 도하 등은 유리문 밖으로 사라지는 중 + 사장님은 목소리만(프레임 밖). P9 = 사장님 얼굴, 도하 없음(창밖도 빈 거리). 어떤 패널에도 둘이 함께 보이지 않는다.
- **빨간 의자(W8):** P8(골목 입구에서 의자를 봄), P56(바 테이블에서 의자를 봄). 둘 다 **작게**, 같은 위치(대각선 너머 녹슨 셔터 빈 점포 앞), 빛바랜 #C8463C. 강조 조명 금지.
- **시계·손가락(P2~3):** P2 숫자 없는 눈금 벽시계, 시침은 1 바로 앞, 분침은 10 눈금을 조금 지난 자리(00:51). P3 도하 오른손 손가락 세 개(검지·중지·약지)를 펴서 들어 올림, 손등이 서윤 쪽. 같은 시계는 P6(시침 거의 1, 분침 12 바로 앞 = 00:58), P54(두 바늘 12)에서도 같은 벽 같은 자리.
- **학 판별 등급:** 이 회차에는 **학 ECU 판별 컷이 없다**(비트시트 D-4 "이 회차는 버릇만"). P20(주머니 속, 안 보임), P32(손안에서 구겨짐), P54(유리병 +1, 작게), P57(반쯤 접힌 학, 미디엄). 두 특징을 강조하지 않는다. **도하 키링도 클로즈업 금지:** 낮 장면은 백팩 왼쪽 끈을 카메라 반대쪽으로 돌리거나 작고 흐리게, P55만 "살짝"(판별 불가).
- **편의점 180도 규약(전 장면):** 손님 쪽 시점에서 계산대 안 서윤 = screen-right, 손님 = screen-left, 유리병 = 계산대 screen-left 끝, 초록 할인 바구니 = screen-right 끝, 회색 폐기 바구니 = 계산대 아래. 역샷(P5)은 서윤 어깨 너머로 도하. 창가 바 테이블 = 유리창을 향한 좁은 테이블, 계산대에서 보면 매장 앞쪽(문 옆).
- **교문 축:** 교문(돌기둥) = 언덕 아래, 은행나무 오르막 = 교문 안쪽 위. P18 하이 앵글은 오르막 위(은행나무 쪽)에서 교문을 내려다봄 → 위 = 교문(하람·서윤), 아래 = 은행나무 아래로 끌려오는 도하. P24는 교문에서 올려다봄.
- **계단참 축:** 옥상 철문 = 화면 위, 계단 = 아래. 측면 컷(P39)에서 계단은 screen-left 아래 → screen-right 위로 오른다 → 서윤 screen-right(위 칸), 도하 screen-left(한 칸 올라와 눈높이). ep01 P22 도하 위 → **P38 서윤 위** → P39 눈높이.
- **손잡기 방향(P12~P17):** 도하의 오른손이 서윤의 **LEFT** 손을 잡는다(서윤은 도하의 오른쪽에서 걷는다) → P14에서 손등 테이프 자국과 왼손목 안쪽 파스가 같은 손에서 읽힌다.
- **만화 기호 금지(style-bible §11-5)에 맞춘 대체:** P5 비트시트 "머리 위 김 빠지는 표현" → 축 처진 어깨·풀린 포니테일 각도·멍한 눈(몸짓으로). P50 "동세선" → 눈동자·잔머리의 약한 모션 블러. 그려진 김·땀방울·속도선 없음.

## 4. 스크롤 리듬 · gap_after (px, letterer 레터링 스펙에 그대로)

| gap_after | 뜻 | 쓰는 곳 |
|---|---|---|
| 0 | 이어 붙임(같은 순간의 연쇄) | ECU → 반응, 대사 합 중간 |
| 30 | 촘촘(빠른 주고받기) | 티키타카, 반전 직전 |
| 80 | 보통 | 기본 |
| 160 | 비트 끊기 · 씬 전환 · 반전 직후 숨 | SCENE BREAK 앞, P31 |
| 320 | 시간 점프 · 정지 컷 · 클리프 직전 정적 | P11(밤 → 아침), P33(교문 → 교실), P46(오후 → 밤), P53(버스 → 다음 자정), P56(말 없는 두 사람 → "백도하.") |

- 640 미사용(이 회차는 빈 여백 스크롤 컷이 없다).

| 구간 | 패널 | 리듬 |
|---|---|---|
| ① 받기 | P1–P3 | **9:16 서윤 정면**(30) → 3:4 시계(30) → 3:4 세 손가락(80) |
| ② 코미디 | P4–P5 | 3:4 계약서(0) → 3:4 "잘 썼어"(160) |
| ③ 교대·귀가 | P6–P11 | 4:3 문으로(30) → 3:4 붙잡힘(80) → **9:16 창 너머 골목** 무대사(80) → 3:4 사장님 첫 얼굴(160) → **9:16 가로등 세 개**(160) → 4:3 반지하(**320** 밤 → 아침) |
| ④ 교문 | P12–P22 | 4:3 걷기(30) → 3:4(0) → **1:1 손 ECU** 무대사(0) → 3:4(160) → 하람 3:4 연쇄 → **9:16 분리**(80) → 3:4 심문(30) → 분할 ECU(0) → 3:4 답(30) → 3:4 "분 단위까지"(160) |
| ⑤ 소반전 | P23–P33 | 교차 편집 3:4(80/80/30/30) → 4:3(0) → **1:1 클립보드** 무대사(160) → 3:4 속삭임(80) → 3:4 낭독(30) → **P31 9:16 단독 반전 A**(160) → 3:4 깨달음(80) → 3:4 통과(**320**) |
| ⑥ 코미디 | P34–P35 | 4:3 단톡(30) → 3:4 "통과했어"(160) |
| ⑦ 낮의 압박 | P36–P46 | 4:3 창밖(30) → 3:4(160) → **9:16 계단참 역전**(30) → 4:3(30) → 3:4(30) → 3:4(160) → 매점 3:4 연쇄(30/80/30/160) → 4:3 유리문(**320**) |
| ⑧ 버스 타이머 | P47–P53 | 1:1 종(80) → 3:4(30) → 3:4 "3분"(0) → **1:1 ECU** 무대사(160) → **9:16 창 하이 앵글**(30) → 3:4(160) → 4:3 버스(**320**) |
| ⑨ 감속 | P54–P57 | 4:3 폐기(160) → 4:3 손 두 쌍 무대사(80) → 4:3 OTS 빨간 의자 무대사(**320**) → 3:4 "백도하."(80) |
| ⑩ 클리프행어 | P58–P61 | 3:4 투샷(80) → 3:4 "전학 오기 전부터"(30) → 3:4 "그럼 전학은 왜"(160) → **P61 9:16 마지막** |

---

## 5. 샷리스트 (panel_001 ~ panel_061)

### ① 받기 — P1~P3 (수 00:51, ep01 P60 직후)

### panel_001
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① 받기 · 긴장 8 비 · (단서 없음) · ep01 P60을 곧장 받는 회차 첫 장
- characters: SEOYUN (OUTFIT_STORE, 반쯤 일어선 자세, 오른손에 스캐너)
- size: large · aspect: 9:16
- camera: frontal bust from the customer's eye line across the counter, slightly high angle (he is taller), normal lens.
- composition: Seoyun centred in the lower-middle of the tall frame, half risen from her stool behind the counter, green staff vest over a white shirt with rolled sleeves, a hand scanner in her RIGHT hand (red light off), white patch on the inside of her LEFT wrist (on the viewer's right) visible on the counter edge. On the counter in front of her, small at the bottom: the orange-band triangle rice ball in clear wrap. Behind her: the cigarette shelf as soft plain colour blocks, the wall clock just out of frame. Top sixth: plain fluorescent ceiling glow. Cold flat white light, sharp contrast on her eyes.
- eyes: Seoyun looks straight up at the viewer (at Doha, off-frame camera side), eyes narrowed, sharp and guarded.
- emotion: 경악 → 날 선 경계
- motion/direction: 정면 응시 고정 → 다음 패널(도하)로
- dialogue_ref: 서윤 "…무슨 소리야." (bubble 1)
- bubbles: 1
- art_space: Keep the top sixth of the frame (plain fluorescent ceiling glow above her head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 첨부 ep01 panel_059(자세·조끼 연속). 다크서클 유지. 계산대 위 주황 띠 = ep01 P58의 그 삼각김밥.

### panel_002
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① · 긴장 7 비 · ⟨복선 K3 · C5 메아리 · C8⟩ · **시계 00:51**
- characters: DOHA (OUTFIT_NIGHT, 후드 벗음, 얇은 동그란 검정 뿔테)
- size: medium · aspect: 3:4
- camera: side view from the shop floor at counter height, medium shot of Doha in near profile, wide enough to include the wall behind the counter.
- composition: Doha screen-left-of-centre, standing at the counter facing screen-right, hood pushed back on his shoulders, messy black hair over his eyebrows, thin round black-framed glasses; he tips his chin up and to the right instead of answering. Upper-right: on the plain wall behind the counter, a round wall clock with tick marks and **no numerals**, hour hand just before one, minute hand a little past the ten mark (00:51), clearly readable as a shape. Counter edge across the bottom; Seoyun out of frame screen-right. Mole on the LEFT side of his neck hidden (his right side faces camera).
- eyes: Doha's eyes slide up-right toward the clock, not at her; calm, evasive.
- emotion: 무심, 회피
- motion/direction: 도하 턱 → 오른쪽 위 시계(시선 유도)
- dialogue_ref: 도하 "열 시 넘었어." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left quarter of the frame, above Doha's head (plain fluorescent ceiling and the soft tops of the drink fridges), as calm, empty background.
- split: no (비트시트의 "상단 시계 인서트" = 같은 프레임 오른쪽 위 시계)
- gap_after: 30
- fx/note: 첨부 ep01 panel_060(후드 벗은 얼굴·안경). 시계에 숫자·로고 없음. 백팩 키링은 프레임 밖/그늘.

### panel_003
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① · 긴장 7 비 · **⟨복선 TA-D1: 조항 3으로 피함⟩** · 세 손가락
- characters: DOHA (OUTFIT_NIGHT, 후드 벗음, 안경) · SEOYUN (OUTFIT_STORE, 멈칫)
- size: medium · aspect: 3:4
- camera: two-shot from the customer side, eye level, slightly favouring Doha's raised hand.
- composition: 180° rule: Doha screen-left (nearer, larger, waist up), Seoyun screen-right behind the counter. Doha lifts his RIGHT hand at shoulder height with three fingers held up (index, middle, ring), back of the hand toward her, the hand clearly separated against the plain fridge glow. Seoyun freezes mid-breath, scanner lowered. On the counter's screen-left end, small and soft: the lidless glass jar about two-thirds full of white paper cranes. The orange-band rice ball between them on the counter.
- eyes: Doha looks at her flatly; Seoyun stares at his three fingers.
- emotion: 서윤 당황 / 도하 담담
- motion/direction: 도하 손가락 → 서윤 얼굴
- dialogue_ref: 도하 "3조." (bubble 1, upper-left) · 서윤 "…뭐?" (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain fluorescent ceiling) as calm, empty background — Doha's bubble upper-left, Seoyun's upper-right; keep the raised three fingers below this area.
- split: no
- gap_after: 80
- fx/note: 손가락 세 개가 정확히 세 개로 읽혀야 한다(Flow 손가락 수 오류 → REGEN). ep01 P59와 같은 좌우 배치.

### ② 코미디 밸브 — P4~P5

### panel_004
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ② · 긴장 4 코 · ⟨복선 K3: 계약서 소품⟩
- characters: SEOYUN (OUTFIT_STORE, 손·종이, 얼굴 위쪽)
- size: medium · aspect: 3:4
- camera: slightly high angle from across the counter, medium close-up on her hands with her face at the top of the frame.
- composition: Lower two-thirds: on the counter, an open navy fabric pencil case; Seoyun's hands (faint box-tape marks on the backs, white patch on the inside of the LEFT wrist) unfold a single sheet of plain blank white paper folded in quarters, one ragged torn edge — completely blank, no writing, no lines. Upper third, right-of-centre: her face bent over it, glaring at the paper, lips pressed. Upper-left corner: soft fridge glow.
- eyes: Seoyun glares down at the blank paper.
- emotion: 분함, 민망
- motion/direction: 얼굴 → 종이(아래)
- dialogue_ref: 서윤 "그건 내가 쓴…" (bubble 1)
- bubbles: 1
- art_space: Keep the top-left quarter of the frame (soft blurred cyan fridge glow beside her head) as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 계약서 = 완전 무지(조항 글씨 금지). 필통은 계산대 아래 가방에서 막 꺼낸 것.

### panel_005
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ② · 긴장 4 코 · ⟨복선 C7: 그가 산다⟩
- characters: DOHA (OUTFIT_NIGHT, 후드 벗음, 안경, 무표정) · SEOYUN (전경 어깨·뒤통수)
- size: medium · aspect: 3:4
- camera: reverse shot over Seoyun's shoulder from behind the counter, eye level, bust of Doha facing camera.
- composition: Screen-right foreground, soft: Seoyun's slumped shoulder in the green vest and her low ponytail hanging limp (deflated body language, no drawn symbols). Centre-left: Doha's bust facing camera, deadpan, glasses catching one thin fluorescent line. Foreground on the counter, sharp: his long-sleeved hand setting down a few plain coins (no markings) beside the orange-band rice ball. Behind Doha: the dark storefront glass and aisle shelves as soft colour blocks.
- eyes: Doha looks at her (into the camera's near side), flat; Seoyun's head droops toward the counter.
- emotion: 무표정 개그 / 서윤 김 빠짐
- motion/direction: 동전 → 도하 얼굴
- dialogue_ref: 도하 "응. 잘 썼어." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain fluorescent ceiling above the dark glass) as calm, empty background, left of centre above Doha.
- split: no
- gap_after: 160
- fx/note: 비트시트 "김 빠지는 표현" → 몸짓으로 대체(§3). 동전 무늬·숫자 없음. P55에서 같은 계산대·동전 재사용.

### ③ 01:00 교대 · 귀가 — P6~P11

### panel_006
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ③ · 긴장 5 위 · 타이머(01:00 교대) · **시계 00:58**
- characters: DOHA (OUTFIT_NIGHT, 후드 다시 씀) · SEOYUN (배경, 계산대 안)
- size: medium-wide · aspect: 4:3
- camera: side medium from the shop floor, eye level, Doha moving left to right toward the door.
- composition: Doha screen-left-of-centre in side view, mid-step toward the glass door at screen-right, pulling the charcoal hood up over his head with one hand, the other pocketing the rice ball into his hoodie; black backpack on his back, LEFT strap away from camera (keyring not visible). Background centre: Seoyun behind the counter, soft, leaning forward. Upper background on the wall behind the counter: the same no-numeral wall clock, hour hand almost at one, minute hand just before twelve. Screen-right edge: the glass door, dark night beyond. A plain grey staff door behind the counter at the far back (closed).
- eyes: Doha looks ahead to the door; Seoyun watches him.
- emotion: 서윤 조급 / 도하 담담
- motion/direction: 왼쪽 → 오른쪽(문)
- dialogue_ref: 효과음 [쿵, 쿵] 위층 계단 발소리(sfx 1) · 도하 "내일, 학교에서." (bubble 1)
- bubbles: 1 + sfx 1
- art_space: Keep the top third of the frame on the left half, above Doha (plain fluorescent ceiling), as calm, empty background for his bubble, and a small plain patch of ceiling at the top right, above the staff door, for the footstep sound effect.
- split: no
- gap_after: 30
- fx/note: 발소리는 그리지 않는다(뷰어 sfx). 여기서부터 후드 씀.

### panel_007
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ③ · 긴장 6 위 · ⟨W7: 사장님 목소리만⟩
- characters: SEOYUN (OUTFIT_STORE, 앞으로 쏠린 자세) · DOHA (문 밖 후드 등, 작게) · MISUK (목소리만, 프레임 밖)
- size: medium · aspect: 3:4
- camera: from inside the store near the counter's end, eye level, medium on Seoyun with the front door behind her.
- composition: Seoyun screen-right-of-centre, half out from behind the counter, body pitched forward toward screen-left, one hand on the counter edge; her feet stop. Background screen-left: the glass front door just swinging shut; through it, outside in the dark, only the back of a charcoal hood walking away, small. Screen-right edge: the plain grey staff door behind the counter, slightly ajar, a strip of warmer light from the back. Nobody else in frame.
- eyes: Seoyun looks back over her shoulder toward the staff door (screen-right), torn.
- emotion: 붙잡고 싶음 / 묶임
- motion/direction: 몸은 왼쪽(문), 고개는 오른쪽(안쪽 문)
- dialogue_ref: 서윤 "야, 백도하!" (bubble 1, upper-left, toward the door) · 사장님(프레임 밖) "서윤아, 교대하자." (bubble 2, tail → right edge / staff door)
- bubbles: 2
- art_space: Keep the top third of the frame (plain fluorescent ceiling across the store) as calm, empty background — Seoyun's bubble upper-left, the off-frame owner's bubble upper-right above the staff door.
- split: no
- gap_after: 80
- fx/note: 사장님 얼굴 없음. 도하와 사장님 같은 프레임 금지. 안쪽 문은 LOC_CVS 토큰 밖의 보조구(`a plain grey staff door behind the counter`, art-director 확인 §7).

--- SCENE BREAK --- (E02S01 계산대 → E02S02 창 너머)

### panel_008
- scene_id: E02S02 / location: LOC_CVS (창 너머 LOC_CROSSROADS) · mood: M_NIGHT
- beat: ③ · 긴장 6 비 · **⟨복선 TA-V1 = W4 메아리 · TB-V1 = W8 메아리 · W6 배경⟩**
- characters: DOHA (OUTFIT_NIGHT, 후드, 원경 실루엣)
- size: full-bleed · aspect: 9:16
- camera: eye level from inside the store, wide, looking out through the front glass; tall vertical frame — same camera as ep01 panel_001.
- composition: Bottom sixth: the near end of the counter in soft focus, cold white light. Middle and top: the dark storefront glass and the late-night crossroads beyond. Screen-left: the empty bus stop directly in front of the store. Screen-right background: the mouth of a dark side alley; the small charcoal-hooded figure has walked AWAY from the bus stop and stands at the alley mouth, paused, head turned toward screen-left across the street. Diagonally across, centre-left far side: a shuttered empty shop with a rusty roll-down shutter and a small faded red plastic stool in front (small, not lit specially). Far off at the top: the faint glow of a big-box store parking lot. Orange streetlights, power lines, a shuttered pharmacy.
- eyes: the hooded figure looks diagonally across at the red stool (no face visible).
- emotion: 고요, 미지
- motion/direction: 정류장(왼쪽) → 골목(오른쪽) → 의자(대각선)로 시선 왕복
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: **첨부 ep01 panel_001**(같은 창·같은 거리 배치, 걸음 방향만 역방향). 빨간 의자·마트 불빛은 작게. 간판·약국 셔터 무지.

--- SCENE BREAK --- (E02S02 → E02S01 계산대 복귀, 01:00)

### panel_009
- scene_id: E02S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ③ · 긴장 5 위 · **⟨W7: 사장님 얼굴 첫 등장, 도하를 못 봄⟩** · R5 매일의 의식
- characters: MISUK (첫 얼굴, 하품) · SEOYUN (OUTFIT_STORE, 숨김)
- size: medium · aspect: 3:4
- camera: two-shot inside the counter area, eye level, from the shop floor at the counter's right end.
- composition: Behind the counter: Misuk screen-left (short tight dark-brown permed curls with grey roots, reading glasses pushed up on her head, lavender fleece under a plain green staff vest, beige arm sleeves), mid-yawn, pressing one orange-band triangle rice ball from the grey bin into Seoyun's hand; Seoyun screen-right, taking it, her face turned half away toward the dark front window (screen-left background, empty street, no one outside). Counter, receipt printer, the green wire basket at the right end in the foreground. Doha is NOT in the frame or the window.
- eyes: Misuk looks at Seoyun with sleepy gruff care; Seoyun glances at the window, then down.
- emotion: 사장님 무뚝뚝한 다정함 / 서윤 숨김
- motion/direction: 사장님 손 → 서윤 손 → 서윤 시선(창 → 아래)
- dialogue_ref: 사장님 "먹고 가. 아까 누구 왔었어?" (bubble 1, upper-left) · 서윤 "…그냥 단골이요." (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain fluorescent ceiling and the plain upper wall behind the counter) as calm, empty background — Misuk's bubble upper-left, Seoyun's upper-right.
- split: no
- gap_after: 160
- fx/note: **MISUK_sheet 첨부 필수(신규 카드)** + SEOYUN_night. 사장님 조끼 = 같은 초록 무지 조끼(로고 없음). 창밖에 후드 실루엣 금지.

--- SCENE BREAK --- (E02S01 편의점 → E02S03 귀갓길 01:15)

### panel_010
- scene_id: E02S03 / location: LOC_UPHILL_ALLEY · mood: M_ALLEY_NIGHT [PD 제안]
- beat: ③ · 긴장 5 비 · **⟨복선 C5 메아리(D) · W3 씨앗(V): 빈 골목 · 가로등 세 개⟩** · ⟨이중의미⟩
- characters: SEOYUN (OUTFIT_SCHOOL, 블레이저 다시 입음, 작게)
- size: large · aspect: 9:16
- camera: high angle from the top of the alley, long shot looking down the steep slope.
- composition: A narrow steep residential alley running down the tall frame; three streetlamps far apart stacked one above another, each a small pool of orange light. Seoyun small in the middle pool, climbing, one hand holding the orange-band rice ball, the other a phone whose screen shows only a soft blank white glow; she has turned to look back down the alley. Below and behind her the alley is EMPTY — no figure, no shadow of a person. Gas meters, potted plants, a parked scooter, a stray cat on concrete steps. Top sixth: dark rooftops and deep navy sky.
- eyes: Seoyun looks back down the empty alley over her shoulder.
- emotion: 피로, 미묘한 기척
- motion/direction: 위(카메라) → 아래 빈 골목, 가로등 세 개로 세로 리듬
- dialogue_ref: 서윤(생각) "일 끝나면 연락하라며." (bubble 1, thought)
- bubbles: 1 (thought)
- art_space: Keep the top sixth of the frame (dark rooftops and plain navy night sky) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: **골목에 인물을 그리지 않는다**(W3, ep10 회수 전 공정한 빈칸). 휴대폰 화면 무지. 가로등 정확히 세 개.

--- SCENE BREAK --- (E02S03 → E02S04 반지하 방)

### panel_011
- scene_id: E02S04 / location: LOC_HOME · mood: M_HOME_NIGHT [PD 제안]
- beat: ③ · 긴장 5 비 · 엄마 첫 등장(등만)
- characters: SEOYUN (흰 셔츠·체크 치마, 이불 위에 누움) · HYEWON (엄마, 등을 돌리고 잠듦, 얼굴 없음)
- size: medium-wide · aspect: 4:3
- camera: floor-level wide, from the foot of the mattresses, looking across the small room toward the high window.
- composition: Two thin floor mattresses side by side. Foreground screen-right: Seoyun lying on her back on top of the blanket, still in her white school shirt and check skirt (blazer hung on the clothes rack behind), eyes open, staring at the ceiling. Middle screen-left: her mother lying on her LEFT side, back turned to the camera, grey fleece, shoulder-length black hair streaked with grey pinned up low with a black claw clip; her RIGHT arm rests on top of the blanket along her hip with the inside of the RIGHT wrist toward the camera, a plain white square pain-relief patch clearly readable. Upper left: the high narrow street-level window, one thin beam of orange streetlight crossing the ceiling. Low folding desk with an unlit lamp, kitchenette corner in shadow.
- eyes: Seoyun stares up at the ceiling, unblinking; mother's face never shown.
- emotion: 불면, 질문
- motion/direction: 창빛 → 천장 → 서윤 눈
- dialogue_ref: 서윤(생각) "처음부터면… 그게 언젠데." (bubble 1, thought)
- bubbles: 1 (thought)
- art_space: Keep the top third of the frame on the right half (plain dark ceiling and upper wall to the right of the window beam) as calm, empty background.
- split: no
- gap_after: 320
- fx/note: **엄마 오른손목 파스가 읽혀야 한다**(서윤 왼손목 파스와 같은 흰 사각, 반대 손). HYEWON 토큰만(시트 없음). 320 = 밤 → 수요일 아침 시간 점프.

--- SCENE BREAK --- (E02S04 → E02S05 교문, 수 07:50)

### ④ 교문 — P12~P22 (하람의 분리 대조, 서윤 차례)

### panel_012
- scene_id: E02S05 / location: LOC_GATE (교문 앞 접근로) · mood: M_DAY_OUT
- beat: ④ · 긴장 4 설 · ⟨K2: 학교에서만 연인⟩
- characters: SEOYUN (OUTFIT_SCHOOL, 다크서클 짙음) · DOHA (OUTFIT_SCHOOL, 안경 없음, 백팩 왼쪽 어깨)
- size: medium-wide · aspect: 4:3
- camera: side medium two-shot, eye level, from the roadside, low golden sun behind them (yellow backlight).
- composition: Both walking toward screen-right up the last stretch to the school gate; grey stone gate pillars just ahead at the screen-right edge, the bright yellow ginkgo avenue rising behind the gate. Doha nearer the gate (screen-right), Seoyun on his right side (screen-left, nearer camera). Doha holds out his RIGHT hand low; Seoyun stiffly puts her LEFT hand in it. Golden rim light on hair, ginkgo leaves drifting. Other students small and soft in the background.
- eyes: Doha looks ahead at the gate; Seoyun glances sideways at him, wary.
- emotion: 서윤 경계 / 설렘 미세
- motion/direction: 왼쪽 → 오른쪽(교문), 손 → 손
- dialogue_ref: 도하 "교문이야. 2조." (bubble 1)
- bubbles: 1
- art_space: Keep the top third of the frame on the left half (soft out-of-focus golden sky and ginkgo canopy, no hard detail) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 비트시트 LOC_GINKGO_ROAD → LOC_GATE 접근로(§1). 키링은 왼쪽 끈이 카메라 반대쪽(보이지 않음). 신발: 서윤 흰 양말·검정 로퍼, 도하 검정 운동화.

### panel_013
- scene_id: E02S05 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 6 비 · "언제부터" 1회
- characters: SEOYUN · DOHA (OUTFIT_SCHOOL)
- size: medium · aspect: 3:4
- camera: close two-shot favouring Seoyun, eye level at her height, just outside the gate pillar.
- composition: Seoyun screen-left-of-centre in close-up, pulling their joined hands toward her so Doha leans down slightly (screen-right, his face partly cropped at the right edge, chin at her eye level). Her voice low, lips tight. Behind: grey stone pillar and soft yellow ginkgo.
- eyes: Seoyun looks up hard into Doha's eyes; Doha looks down at her.
- emotion: 추궁
- motion/direction: 서윤 → 도하(위)
- dialogue_ref: 서윤 "언제부터야?" (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame on the left (soft plain grey stone of the gate pillar above her head) as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 키 관계: 서윤 정수리 = 도하 턱.

### panel_014
- scene_id: E02S05 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 6 비 · **⟨복선 TA-V2: 그는 밤 근무의 흔적을 읽는다⟩**
- characters: SEOYUN (LEFT 손) · DOHA (RIGHT 손, 내려다보는 눈)
- size: insert · aspect: 1:1
- camera: extreme close-up of the joined hands at waist height, seen from slightly below.
- composition: Centre and lower two-thirds, sharp: Seoyun's LEFT hand held in Doha's larger RIGHT hand; the back of her hand faces camera with faint pale box-tape marks; her navy blazer cuff has slid back and, with her wrist turned slightly, the edge of a plain white square patch on the inside of her LEFT wrist shows. Top quarter, out of focus: Doha's lowered eyes and messy bangs, looking down at the hand. Soft golden light.
- eyes: Doha looks down at her hand (the tape marks and patch).
- emotion: 관찰(그만 아는 것)
- motion/direction: 도하 눈(위) → 손(아래)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no (비트시트 "손 ECU + 도하 눈 띠" = 한 프레임 전경/후경)
- gap_after: 0
- fx/note: **테이프 자국과 파스 둘 다 판독 가능해야 한다**(D-6). 파스는 왼손목. 손잡기 이상의 접촉 없음.

### panel_015
- scene_id: E02S05 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 6 비 · **⟨복선 TA-D2: 낮인데도 조항 3⟩** · ⟨이중의미⟩
- characters: DOHA (OUTFIT_SCHOOL) · SEOYUN (전경 어깨)
- size: medium · aspect: 3:4
- camera: close-up of Doha over Seoyun's shoulder, slight low angle.
- composition: Screen-left foreground, soft: Seoyun's shoulder and low ponytail. Doha centre-right in close-up, raising his eyes from her hand to her face, flat calm, short answer. Behind him: the yellow ginkgo avenue beyond the open black iron gate, soft.
- eyes: Doha meets her eyes, level and calm.
- emotion: 회피 / 서윤 막힘
- motion/direction: 도하 → 서윤(왼쪽)
- dialogue_ref: 도하 "어젯밤 열 시 넘은 일이잖아. 3조." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (soft out-of-focus yellow ginkgo canopy, no hard detail) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 낮 = 안경 없음.

--- SCENE BREAK --- (E02S05 → E02S06 하람 등장)

### panel_016
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 7 위 · 하람 등장 · **P30과 구도 쌍(원본)**
- characters: HARAM (OUTFIT_SCHOOL, 완장, 클립보드, 열쇠) · GEONU (뒤) · SEOYUN · DOHA (전경 뒷모습, 손 잡음)
- size: medium · aspect: 3:4
- camera: low angle, frontal on Haram, from behind and between Seoyun and Doha.
- composition: Foreground bottom: the backs of Seoyun (screen-left, low ponytail) and Doha (screen-right, taller), their joined hands low between them. Centre: Haram facing camera, blocking the way inside the gate, chin-length bob, thin silver rectangular glasses, plain crimson armband on her LEFT upper arm (on the viewer's right), black clipboard with blank paper held to her chest, small brass key on a crimson cord at her wrist. Behind her, a head taller: Geonu, crew cut, armband, uneasy. Grey stone pillars and the ginkgo avenue behind.
- eyes: Haram looks down at the two of them, firm.
- emotion: 위압
- motion/direction: 전경 두 사람 → 하람(정면)
- dialogue_ref: 하람 "한서윤 학생, 백도하 학생. 잠깐 서 주세요." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain pale morning sky above the gate pillars) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: HARAM_turnaround 첨부. 하람·건우 신발은 밖이므로 검정 로퍼/운동화(SHOES_INDOOR 대신). 완장·클립보드 무지.

### panel_017
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 6 위 · R4
- characters: HARAM · SEOYUN (+ 도하 손·팔 일부)
- size: medium · aspect: 3:4
- camera: confrontation two-shot, eye level, side-on.
- composition: Haram screen-left, Seoyun screen-right facing her, half a head apart in height (Haram slightly taller). Haram's eyes drop once to the joined hands at the bottom centre (Doha's arm entering from the screen-right edge). Seoyun lifts her chin. Gate pillar and students flowing behind, soft.
- eyes: Haram glances down at the joined hands; Seoyun stares straight at Haram, chin up.
- emotion: 하람 의심 / 서윤 방어
- motion/direction: 하람 시선(손) → 서윤 턱
- dialogue_ref: 하람 "제보가 공개된 날, 공개 연애. 시기가 공교롭네요." (bubble 1, upper-left) · 서윤 "연애는 교칙 위반 아니야." (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain pale sky and the soft top of the stone pillar) as calm, empty background — Haram's bubble upper-left, Seoyun's upper-right.
- split: no
- gap_after: 80
- fx/note: 하람 완장 왼팔. 손잡기 유지.

### panel_018
- scene_id: E02S06 / location: LOC_GATE (교문 안 은행나무 쪽 포함) · mood: M_DAY_OUT
- beat: ④ · 긴장 7 위 · 타이머(조회 전까지) · 분리
- characters: HARAM · SEOYUN (위, 교문) · GEONU · DOHA (아래, 은행나무 쪽) · 학생들
- size: large · aspect: 9:16
- camera: high angle wide from up the ginkgo avenue, looking down toward the gate.
- composition: Top third: the open gate and the wide road beyond it; Haram with her clipboard and Seoyun standing apart by the stone pillar, Seoyun's hand now empty. Middle: a stream of students in navy blazers hurrying in through the gate and up the slope. Bottom third, nearer: Geonu leading Doha up the slope toward a big ginkgo tree, Doha glancing back once. The two pairs clearly separated vertically by the flow of students. Bright yellow leaves on the ground.
- eyes: Doha glances back up the frame toward Seoyun; Seoyun watches him go; Haram looks at Seoyun.
- emotion: 분리, 불안
- motion/direction: 위(교문) ↔ 아래(은행나무), 학생 흐름이 사이를 끊음
- dialogue_ref: 하람 "그러니까 확인만 하겠습니다. 따로요." (bubble 1) · 하람 "조회 전까지 끝내죠." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame (the plain grey asphalt of the wide road beyond the gate) as calm, empty background for two stacked bubbles, tails down to Haram.
- split: no
- gap_after: 80
- fx/note: 교문 시계 그리지 않음(조회 임박은 학생 흐름으로). 도하 키링 판별 불가(작게).

### panel_019
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 8 위 · 심문
- characters: HARAM (근무 중 정중, 공문 어투)
- size: medium · aspect: 3:4
- camera: close-up of Haram, eye level, from Seoyun's position, with the pen tip in the foreground.
- composition: Foreground lower-left, sharp: a black pen held upright over the blank clipboard. Centre: Haram's face, formal cool neutral expression, light on her silver rectangular glasses, black hairpin behind her RIGHT ear (on the viewer's left). Background: soft gate pillar and yellow ginkgo.
- eyes: Haram looks straight at Seoyun (the camera).
- emotion: 심문
- motion/direction: 펜 끝 → 하람 눈
- dialogue_ref: 하람 "어젯밤 몇 시에, 어디서 만났습니까?" (bubble 1) · 하람 "헤어진 건요?" (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain pale sky and soft out-of-focus ginkgo, no hard detail) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 클립보드 종이 무지.

### panel_020
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 7 위 · ⟨복선 C2: 긴장 버릇⟩
- characters: SEOYUN (얼굴 ECU / 주머니 속 손)
- size: medium · aspect: 3:4
- camera: top frame: extreme close-up of Seoyun's face, eye level. Bottom frame: insert close-up of her blazer pocket.
- composition: Two stacked frames in one image separated by a thin plain white gutter. **Top frame (about 60% of the height):** Seoyun's face, eyes moving fast as she calculates, jaw set, faint dark circles; her face in the lower two-thirds of this frame, soft morning sky above. **Bottom frame (about 40%):** her navy blazer pocket, the fabric bulging as her fingers inside find the corner of a blank receipt and start folding; just the tip of white paper visible at the pocket edge.
- eyes: Seoyun's eyes dart sideways, thinking, not at Haram.
- emotion: 계산, 공포 누름
- motion/direction: 위 눈 → 아래 주머니 손
- dialogue_ref: 서윤(생각) "지어내면 어긋나." (bubble 1, thought) · 서윤(생각) "진짜 시간을 말해." (bubble 2, thought)
- bubbles: 2 (thought)
- art_space: Keep the upper third of the TOP frame (plain pale morning sky above her head) as calm, empty background for two thought bubbles.
- split: **yes** (2칸, 위 얼굴 ECU / 아래 주머니 인서트)
- gap_after: 0
- fx/note: 학은 보이지 않는다(접기 시작만). 이 회차 유일한 분할 컷.

### panel_021
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 8 위 · TA 준비(실제 시각 21:44 · 21:57 · 01:00)
- characters: SEOYUN (결단, 담대한 척)
- size: medium · aspect: 3:4
- camera: frontal bust of Seoyun, eye level, from Haram's position.
- composition: Seoyun centred, lifting her eyes, chin up, speaking fast and precise; blazer buttoned, tie knotted; gate pillar and ginkgo soft behind. Haram's clipboard edge just visible at the bottom-left corner, blank.
- eyes: Seoyun looks directly at Haram (the camera), steady.
- emotion: 결단, 담대한 척
- motion/direction: 정면 응시
- dialogue_ref: 서윤 "9시 44분 버스. 57분에 내렸어." (bubble 1) · 서윤 "내린 정류장에서 만났고, 1시에 헤어졌어." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain pale sky and soft out-of-focus ginkgo canopy) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 지명 없음. 숫자는 그림에 없다(말풍선만).

### panel_022
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ④ · 긴장 7 위 · 하람 의심 날카로워짐
- characters: HARAM (손·클립보드 + 눈)
- size: medium · aspect: 3:4
- camera: close-up from slightly above and in front of the clipboard, Haram's eyes above its top edge.
- composition: Lower half: the black clipboard with blank white paper, Haram's hand holding the pen, which has stopped mid-stroke (no writing visible on the page). Middle: above the clipboard's top edge, Haram's eyes behind thin silver rectangular glasses, narrowing slightly. Crimson cord of the brass key at her wrist.
- eyes: Haram's eyes lift from the paper toward Seoyun (screen-right, off-frame).
- emotion: 의심이 날카로워짐
- motion/direction: 멈춘 펜 → 눈 → 오른쪽(서윤)
- dialogue_ref: 하람 "…분 단위까지 기억하시네요." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (soft plain pale sky and blurred gate stone above her head) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 클립보드 종이 완전 무지(펜 자국도 글자처럼 보이면 REGEN).

--- SCENE BREAK --- (E02S06 교문 → E02S07 은행나무 아래, 교차 편집 시작)

### ⑤ 소반전 — P23~P33 (도하 차례 → 분 단위 일치 → 통과, 그러나)

### panel_023
- scene_id: E02S07 / location: LOC_GINKGO_ROAD · mood: M_DAY_OUT
- beat: ⑤ · 긴장 7 위 · 같은 압박
- characters: HARAM (전경 어깨) · DOHA (OUTFIT_SCHOOL, 백팩 왼쪽 어깨, 손 주머니)
- size: medium · aspect: 3:4
- camera: medium on Doha over Haram's shoulder, eye level, under the ginkgo tree.
- composition: Screen-left foreground, soft: Haram's shoulder with the crimson armband and the edge of the clipboard. Doha centre-right, standing under a big ginkgo tree beside the low stone wall, backpack on his LEFT shoulder with the strap turned away from camera (keyring not visible), both hands in his trouser pockets, relaxed slouch. Yellow leaves on the ground; the school building at the top of the slope behind.
- eyes: Doha looks down at Haram, calm.
- emotion: 같은 압박 / 도하 평온
- motion/direction: 하람(전경) → 도하
- dialogue_ref: 하람 "같은 질문입니다. 어젯밤 몇 시, 어디서." (bubble 1, tail → left edge)
- bubbles: 1
- art_space: Keep the top fifth of the frame (soft out-of-focus yellow ginkgo canopy, no hard detail) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: S07 = 교문 안 10m 위. 교문은 화면 밖 아래.

--- SCENE BREAK --- (교차 편집: E02S07 → E02S06 교문)

### panel_024
- scene_id: E02S06 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ⑤ · 긴장 5 코 · 심문 중 밸브
- characters: SEOYUN · GEONU (전경 손) · HARAM · DOHA (원경, 작게)
- size: medium · aspect: 3:4
- camera: Seoyun's point of view from the gate looking up the slope, long, with Geonu's hand in the near foreground.
- composition: Middle band: far up the ginkgo avenue, small under the big tree, Haram and Doha facing each other (no detail, no sound). Lower-left foreground, large and sharp: Geonu's big hand held out low and careful, a small wrapped candy on his palm in a plain single-colour wrapper with no print. Screen-right edge: Seoyun's profile partly in frame, turning toward the candy. Top third: soft yellow ginkgo canopy and pale sky.
- eyes: Seoyun's eyes go from the distant pair down to the candy, deadpan.
- emotion: 긴장 속 엉뚱함
- motion/direction: 원경 두 사람 → 전경 사탕 → 서윤
- dialogue_ref: 건우 "…사탕 드실래요?" (bubble 1, tail → lower-left) · 서윤 "…지금?" (bubble 2, tail → right edge)
- bubbles: 2
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy and pale sky, no hard detail) as calm, empty background — keep the distant Haram and Doha below it.
- split: no
- gap_after: 80
- fx/note: 사탕 포장 무지. 건우 얼굴은 프레임 밖이어도 된다(손이 크다).

--- SCENE BREAK --- (교차 편집: E02S06 → E02S07 은행나무 아래)

### panel_025
- scene_id: E02S07 / location: LOC_GINKGO_ROAD · mood: M_DAY_OUT
- beat: ⑤ · 긴장 8 비 · **⟨복선 TA-D3 · W4: "전 원래 그 동네에 있어요."⟩** · ⟨이중의미⟩
- characters: DOHA (클로즈업) · HARAM (프레임 밖)
- size: medium · aspect: 3:4
- camera: close-up of Doha, eye level, from Haram's position.
- composition: Doha's face centre-right, flat calm, short answer, bangs over his eyebrows, golden light through the ginkgo on one side of his face. Background: soft yellow leaves and the low stone wall.
- eyes: Doha looks at Haram (camera-left), unhurried.
- emotion: 담담 / 하람 집요(프레임 밖)
- motion/direction: 도하 → 왼쪽(하람)
- dialogue_ref: 도하 "전 원래 그 동네에 있어요." (bubble 1) · 하람(프레임 밖) "몇 시에요?" (bubble 2, tail → left edge)
- bubbles: 2
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy, no hard detail) as calm, empty background — Doha's bubble upper-right, Haram's off-frame bubble upper-left.
- split: no
- gap_after: 30
- fx/note: 대본 수정본 문구. 시각은 말하지 않는다(연출 변화 없음).

### panel_026
- scene_id: E02S07 / location: LOC_GINKGO_ROAD · mood: M_DAY_OUT
- beat: ⑤ · 긴장 8 비 · TA(분 단위 정보)
- characters: HARAM (미디엄, 빠르게 적음) · DOHA (전경 어깨, 말하는 쪽)
- size: medium · aspect: 3:4
- camera: medium on Haram over Doha's shoulder, eye level.
- composition: Screen-right foreground, soft: Doha's shoulder in the navy blazer. Haram centre-left, pen moving fast over the blank clipboard (slight motion blur on the pen only), her eyebrows lifting a fraction. Ginkgo trunk and stone wall behind.
- eyes: Haram looks down at the clipboard, then flicks up at Doha.
- emotion: 하람 멈칫
- motion/direction: 도하(전경) → 하람 펜
- dialogue_ref: 도하 "한서윤은 9시 44분 버스 타요." (bubble 1, tail → right edge) · 도하 "57분에 내리고요." (bubble 2, tail → right edge)
- bubbles: 2
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy) as calm, empty background for two stacked bubbles on the right half.
- split: no
- gap_after: 30
- fx/note: 클립보드 무지.

### panel_027
- scene_id: E02S07 / location: LOC_GINKGO_ROAD · mood: M_DAY_OUT
- beat: ⑤ · 긴장 8 비 · **⟨W3 씨앗(D): 퇴근길을 지켜본다⟩** · ⟨이중의미⟩
- characters: HARAM · DOHA
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, under the ginkgo tree.
- composition: Haram screen-left, clipboard raised, leaning in slightly with suspicion; Doha screen-right, calm, hands in pockets, a head taller. The big ginkgo trunk between and behind them, yellow leaves falling; the slope down to the gate soft at the far left.
- eyes: Haram watches Doha's face closely; Doha looks back, serene.
- emotion: 하람 의심 / 도하 평온
- motion/direction: 하람 → 도하
- dialogue_ref: 하람 "헤어진 건요?" (bubble 1, upper-left) · 도하 "1시 넘어서요. 집 쪽 골목 올라가는 거 보고." (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy, no hard detail) as calm, empty background — Haram's short bubble upper-left, Doha's longer bubble upper-right.
- split: no
- gap_after: 0
- fx/note: 도하 왼쪽 목 점은 각도상 보이면 왼쪽에.

### panel_028
- scene_id: E02S07 / location: LOC_GINKGO_ROAD · mood: M_DAY_OUT
- beat: ⑤ · 긴장 7 위 · 의외 → 의심
- characters: HARAM (손·클립보드 + 눈)
- size: insert · aspect: 1:1
- camera: low close-up from just below the clipboard, looking up.
- composition: Lower half, sharp: the black clipboard, a blank page lifted mid-flip by Haram's fingers, the pages beneath also blank, the pen stopped and still. Upper half, above the clipboard edge: Haram's eyes behind thin silver rectangular glasses, narrowing, light glinting on one lens. Soft yellow ginkgo behind.
- eyes: Haram stares at the blank page, then past it.
- emotion: 의외 → 의심
- motion/direction: 넘기는 종이 → 하람 눈
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no (비트시트 "클립보드 ECU + 하람 눈 띠" = 한 프레임)
- gap_after: 160
- fx/note: 모든 페이지 무지(글자 무늬 금지).

--- SCENE BREAK --- (E02S07 → E02S08 교문, 두 사람 다시 나란히)

### panel_029
- scene_id: E02S08 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ⑤ · 긴장 6 비·설 · ⟨이중의미: "사실대로."⟩ · 도하는 거짓말하지 않는다
- characters: SEOYUN · DOHA (OUTFIT_SCHOOL)
- size: medium · aspect: 3:4
- camera: close two-shot at shoulder height, eye level, slightly from Seoyun's side.
- composition: Doha has come back and stands at Seoyun's side by the gate pillar, facing forward (toward Haram, off-frame). Seoyun screen-left, nearer, barely moving her lips, eyes sideways; Doha screen-right, taller, face calm, eyes forward. Their shoulders close but not touching.
- eyes: Seoyun looks sideways up at Doha; Doha keeps looking forward.
- emotion: 서윤 공포 / 도하 평온
- motion/direction: 서윤 → 도하
- dialogue_ref: 서윤 "…뭐라고 했어?" (bubble 1, upper-left) · 도하 "사실대로." (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain pale sky and the soft top of the stone pillar) as calm, empty background — Seoyun's bubble upper-left, Doha's upper-right.
- split: no
- gap_after: 80
- fx/note: 속삭임 = dialogue(letterer가 작게).

### panel_030
- scene_id: E02S08 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ⑤ · 긴장 8 위 · 판결 직전 · **P16 구도 쌍**
- characters: HARAM (정면, 클립보드 읽음) · SEOYUN · DOHA (전경 뒤통수) · GEONU (뒤)
- size: medium · aspect: 3:4
- camera: frontal on Haram at eye level, from behind and between Seoyun and Doha (as panel_016, but not low angle).
- composition: Foreground bottom: the backs of Seoyun's head (screen-left, low ponytail) and Doha's head (screen-right, taller), standing side by side, NOT holding hands. Centre: Haram reading from the blank clipboard word by word, formal; Geonu behind her, uneasy. Gate pillars and ginkgo behind.
- eyes: Haram's eyes go from the clipboard up to the two of them.
- emotion: 판결 직전
- motion/direction: 전경 두 뒤통수 → 하람
- dialogue_ref: 하람 "9시 44분. 57분. 1시." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain pale morning sky above the gate pillars) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 ep02 panel_016**(같은 배치). 반전 직전 30.

### panel_031
- scene_id: E02S08 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ⑤ · 긴장 **9** 비 · **⟨반전 A⟩** (C5·K3 재독)
- characters: HARAM (단독, 서늘한 판정)
- size: large · aspect: 9:16
- camera: close-up of Haram, slight Dutch angle (about 8°), eye level.
- composition: Haram alone in the middle of the tall frame, snapping the black clipboard shut against her chest with one hand; her face a mix of acceptance and disbelief, mouth flat, light flashing across her silver rectangular glasses. Lower part: her crimson armband shoulder and the clipboard. Background: soft gate stone and blurred yellow ginkgo. Nobody else in frame.
- eyes: Haram looks from one to the other (camera-left to camera-right), cool and level.
- emotion: 서늘한 판정
- motion/direction: 단독 정지
- dialogue_ref: 하람 "따로 물었는데." (bubble 1) · 하람 "둘 다 분 단위로 똑같네요." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame (plain pale morning sky, soft and empty) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: **반전 A = 단독 대형**(앞 30·뒤 160). ep01 P33과 같은 문법. 대본 수정본 문구("따로 물었는데.").

### panel_032
- scene_id: E02S08 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ⑤ · 긴장 8 비 · ⟨반전 A 리액션 · 복선 C2⟩
- characters: SEOYUN (얼굴 + 손) · DOHA (흐린 배경)
- size: medium · aspect: 3:4
- camera: tight close-up of Seoyun, eye level, her hand raised into the lower frame.
- composition: Upper-middle: Seoyun's face, eyes wide, realization and shame, colour draining. Lower third, sharp: her LEFT hand at chest height, out of the pocket, crushing a half-folded white receipt crane in her fist (crumpled, details not readable); white patch peeking at the inside of the wrist. Background screen-right, out of focus: Doha in profile looking away at the ginkgo trees.
- eyes: Seoyun stares at nothing in front of her; Doha looks off at the ginkgo.
- emotion: 깨달음, 수치(하루 전체가 보였다)
- motion/direction: 얼굴 → 구겨지는 손 → 흐린 도하
- dialogue_ref: 서윤(생각) "…나, 버스 시간 말한 적 없는데." (bubble 1, thought)
- bubbles: 1 (thought)
- art_space: Keep the top fifth of the frame (plain pale sky above her head) as calm, empty background.
- split: no (비트시트 "얼굴 ECU + 손 인서트" = 손을 가슴 높이로 올린 한 프레임)
- gap_after: 80
- fx/note: 학 판별 불필요(구겨짐).

### panel_033
- scene_id: E02S08 / location: LOC_GATE · mood: M_DAY_OUT
- beat: ⑤ · 긴장 7 위 · ⟨반전 A의 대가⟩
- characters: HARAM (뒷모습) · GEONU (옆) · (원경 서윤·도하 작게)
- size: medium · aspect: 3:4
- camera: medium from behind Haram as she walks away up the slope, eye level.
- composition: Haram's back centre, bob and black hairpin behind her RIGHT ear visible, crimson armband on her LEFT arm (on the viewer's left), clipboard under her arm; Geonu walking beside her (screen-right), a head taller, glancing down at her. Ahead: the ginkgo avenue rising to the school. Small at the bottom edge behind: the gate pillar.
- eyes: Haram looks ahead, half-turning her head toward Geonu as she mutters; Geonu looks at her.
- emotion: 위협 보류, 의심 이동
- motion/direction: 아래 → 위(멀어짐)
- dialogue_ref: 하람 "통과입니다." (bubble 1, formal) · 하람(돌아서며, 혼잣말) "…너무 잘 맞네." (bubble 2, smaller)
- bubbles: 2
- art_space: Keep the top third of the frame (soft out-of-focus yellow ginkgo canopy, no hard detail) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 320
- fx/note: 320 = 교문 → 조회 후 교실 + 반전 뒤 숨.

--- SCENE BREAK --- (E02S08 교문 → E02S09 교실, 조회 직후)

### ⑥ 코미디 — P34~P35

### panel_034
- scene_id: E02S09 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 4 코
- characters: YERIN (휴대폰) · TAEMIN (책상 침) · SEOYUN · DOHA (중경, 작게) · 반
- size: medium-wide · aspect: 4:3
- camera: medium-wide at eye level from the front of the room, Yerin nearest.
- composition: Yerin screen-left in the foreground, holding her phone up (lilac case back to the class, the screen side toward her showing only a soft blank white glow), reading aloud with an excited open mouth. Taemin screen-right slamming his palm on his desk, big grin. Midground soft: Seoyun at her desk sinking down, Doha at the window seat, chin on hand. Windows on screen-left with cream curtains, warm morning light. Classmates turning around.
- eyes: Yerin looks at her phone; Taemin looks at Doha and Seoyun; classmates look at the two.
- emotion: 소란, 웃음
- motion/direction: 예린 → 태민 → 중경의 두 사람
- dialogue_ref: 예린 "단톡 봐. '1반 한서윤 백도하, 아침부터 교문에서 선도부 면담'…" (bubble 1, upper-left) · 태민 "연애도 검사받냐!" (bubble 2, upper-right, shout)
- bubbles: 2
- art_space: Keep the top 40% of the frame (the plain cream wall and the soft top of the windows and curtains, above everyone's heads) as calm, empty background — Yerin's long bubble upper-left, Taemin's shout upper-right.
- split: no
- gap_after: 30
- fx/note: 휴대폰 화면 무지(단톡 내용은 말풍선으로만). CLASSMATES_sheet 첨부.

### panel_035
- scene_id: E02S09 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑥ · 긴장 3 코 · 회차 바닥
- characters: DOHA (무표정 개그) · SEOYUN (책상에 이마) · 반(배경)
- size: medium · aspect: 3:4
- camera: eye level, Doha's bust in the upper half, Seoyun's desk in the lower foreground.
- composition: Upper-middle: Doha seated, deadpan, eyebrows level, one hand raised slightly as if to say "nothing to see". Lower foreground: Seoyun face-down with her forehead on her desk, ponytail flopped over, ears red. Background: classmates bursting out laughing, soft and simple (no main-cast hair features on extras).
- eyes: Doha looks flatly at the class; Seoyun's face hidden.
- emotion: 무표정 개그 / 민망
- motion/direction: 도하 → 아래 서윤
- dialogue_ref: 도하 "통과했어." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream wall above Doha's head) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 도하 낮 안경 없음.

--- SCENE BREAK --- (E02S09 → E02S10 3교시 수학)

### ⑦ 낮의 압박 — P36~P46

### panel_036
- scene_id: E02S10 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑦ · 긴장 5 코·비 · **⟨복선 TB-V2: 그가 보는 곳⟩**
- characters: DOHA (창가, 턱 굄) · RYU (담임, 분필로 가리킴)
- size: medium-wide · aspect: 4:3
- camera: eye level from the front-right of the room, diagonal toward the back-left window, medium-wide, focus on Doha.
- composition: Doha screen-left-of-centre at the window seat, chin on his hand, looking out through the left window: down the hill, beyond the yellow ginkgo avenue, the wide road where a small green city bus (blank destination display) is going. Screen-right foreground, partly cropped: the homeroom teacher (grey knit cardigan, white shirt, no tie) at the chalkboard edge, arm extended, pointing a piece of chalk at Doha. Chalkboard behind him empty with faint smudges only.
- eyes: Doha gazes out of the window down the hill; Ryu looks at Doha, dry.
- emotion: 도하 먼 곳 / 담임 건조한 유머
- motion/direction: 담임 분필 → 도하 → 창밖 큰길
- dialogue_ref: 담임 "백도하, 창밖에 답 있냐." (bubble 1, upper-right) · 도하 "…없어요." (bubble 2, upper-left)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above the chalkboard on the right, the soft upper curtain on the left) as calm, empty background — the teacher's bubble upper-right, Doha's upper-left.
- split: no
- gap_after: 30
- fx/note: RYU_sheet 첨부. 칠판 무지 얼룩만. 큰길 = 서윤의 버스 방향.

### panel_037
- scene_id: E02S10 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑦ · 긴장 6 비 · ⟨복선 TB-V2⟩
- characters: SEOYUN (옆줄) · DOHA (흐린 전경)
- size: medium · aspect: 3:4
- camera: from just behind Seoyun's shoulder in the next row, following her gaze past Doha to the window.
- composition: Screen-right foreground: Seoyun's profile, faint dark circles, eyes following the line toward the window. Middle, soft: Doha's shoulder and messy hair at the window seat. Through the window, sharp in the distance: the hill sloping down, the ginkgo avenue, the wide road and the far green bus. Warm window light.
- eyes: Seoyun looks past Doha out of the window toward the wide road.
- emotion: 의문
- motion/direction: 서윤 → 도하 → 창밖 큰길
- dialogue_ref: 서윤(생각) "…저쪽, 내 버스 가는 길인데." (bubble 1, thought)
- bubbles: 1 (thought)
- art_space: Keep the top fifth of the frame (soft cream curtain and plain upper window glow) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 버스 전광판 무지.

--- SCENE BREAK --- (E02S10 → E02S11 점심, 계단참)

### panel_038
- scene_id: E02S11 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑦ · 긴장 6 비 · ⟨복선 K3 역이용⟩ · **ep01 P22 구도 역전**
- characters: SEOYUN (위 칸, 주도권) · DOHA (아래, 뒷모습)
- size: large · aspect: 9:16
- camera: low angle from below on the stairs, looking up — reversed from ep01 panel_022.
- composition: Top: the locked grey steel rooftop door and the dusty window glowing apricot; Seoyun stands several steps up in front of them, arms crossed, chin up, rim light on her ponytail and shoulders, half in backlight. Bottom foreground: the back of Doha's head and shoulders (messy hair, navy blazer), stopped below her. Two old desks and chairs stacked against the wall, violet shadows.
- eyes: Seoyun looks down at Doha, sharp and narrowed; Doha looks up at her.
- emotion: 서윤 주도권 되찾기
- motion/direction: 아래(도하) → 위(서윤)
- dialogue_ref: 서윤 "지금은 낮이야. 3조 아니지." (bubble 1) · 서윤 "언제부터야." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame (the plain grey steel door and hazy apricot window glow above Seoyun's head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: **첨부 ep01 panel_022**(같은 계단참·빛, 위아래 역전 명시). 노을 하늘 금지(점심).

### panel_039
- scene_id: E02S11 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑦ · 긴장 6 비 · ⟨복선 K6⟩
- characters: DOHA · SEOYUN
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, stairs rising from screen-left (low) to screen-right (high).
- composition: Seoyun screen-right on the upper step; Doha screen-left has just stepped up one step so their eyes are level, close. Apricot backlight from the window at upper right, violet shadows on the steps.
- eyes: Doha looks straight into Seoyun's eyes; Seoyun blinks, thrown.
- emotion: 도하 침착 / 서윤 당황
- motion/direction: 도하 한 칸 올라옴(왼쪽 → 오른쪽)
- dialogue_ref: 도하 "6조." (bubble 1, upper-left) · 서윤 "…뭐?" (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain upper stairwell wall in soft violet shadow) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 계단참 축 유지.

### panel_040
- scene_id: E02S11 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑦ · 긴장 7 비·설 · **⟨복선 TB-D1 · K6 메아리⟩** · ⟨이중의미⟩
- characters: DOHA (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Doha at Seoyun's eye level.
- composition: Doha's face centred in the lower two-thirds, calm, steady; hazy apricot rim light from the dusty window at the side catching his hair and jaw; violet shadow behind. Upper third: soft plain stairwell wall.
- eyes: Doha looks straight into her eyes (into the camera).
- emotion: 진심을 숨긴 담담함
- motion/direction: 정면 응시
- dialogue_ref: 도하 "그거 말하면 진심이야." (bubble 1) · 도하 "먼저 진심 되는 쪽이 비밀 말하기. 네가 썼잖아." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain stairwell wall in soft apricot haze) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 대본 수정본 문구. 표정 슬롯 "steady serious gaze"는 아끼고 디폴트에 가까운 담담함.

### panel_041
- scene_id: E02S11 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑦ · 긴장 5 코·설 · 설렘·민망 밸브
- characters: SEOYUN (귀까지 빨개짐) · DOHA (내려가는 등)
- size: medium · aspect: 3:4
- camera: medium on Seoyun from slightly below, Doha descending in the lower foreground.
- composition: Upper-middle: Seoyun on the upper step, flustered, ears red, crumpling a blank white receipt in her fist. Lower-left foreground: Doha's back going down the stairs, unhurried, one hand in his pocket. Apricot backlight behind her.
- eyes: Seoyun glares down at Doha's back; Doha does not look back.
- emotion: 설렘·민망
- motion/direction: 서윤(위) → 도하 등(아래로 멀어짐)
- dialogue_ref: 서윤 "…누가 진심이래!" (bubble 1, upper-right) · 도하 "그러니까. 지금은 안 말해." (bubble 2, tail → lower-left)
- bubbles: 2
- art_space: Keep the top fifth of the frame (plain grey steel door and hazy window glow) as calm, empty background for Seoyun's bubble, and the plain shadowed wall on the left middle beside Doha's head for his bubble.
- split: no
- gap_after: 160
- fx/note: 영수증 무지. 도하 백팩 없음(점심).

--- SCENE BREAK --- (E02S11 → E02S12 매점)

### panel_042
- scene_id: E02S12 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑦ · 긴장 6 비 · **⟨복선 TB-D2: 여기 볼 게 있어서⟩** · ⟨이중의미⟩
- characters: TAEMIN · DOHA (앞줄) · SEOYUN · YERIN (몇 칸 뒤)
- size: medium · aspect: 3:4
- camera: medium from inside the snack-shop window looking out at the queue, eye level.
- composition: Foreground: the edge of the counter with plain-wrapped bread. Taemin screen-left picking bread, talking; Doha screen-right holding a soft bread in a plain clear plastic wrap with no print. A few places back, smaller and soft: Seoyun and Yerin in the queue. Corridor wall behind.
- eyes: Taemin looks at Doha; Doha looks at the bread; Seoyun looks toward Doha.
- emotion: 태민 무신경 / 도하 담담
- motion/direction: 태민 → 도하 → 뒤 서윤
- dialogue_ref: 태민 "너 전학 왜 왔냐? 전에 다니던 학교가 더 좋잖아." (bubble 1, upper-left) · 도하 "여기 볼 게 있어서." (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream corridor wall above the queue) as calm, empty background — Taemin's bubble upper-left, Doha's upper-right.
- split: no
- gap_after: 30
- fx/note: 포장 무지. 도하 백팩 없음(키링 없음).

### panel_043
- scene_id: E02S12 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑦ · 긴장 6 비 · **⟨W4 메아리(D) · TB-D3: "근처."⟩**
- characters: DOHA · TAEMIN (전경, 흐림) · SEOYUN (후경, 초점)
- size: medium · aspect: 3:4
- camera: rack focus — foreground soft, background sharp; eye level.
- composition: Foreground, out of focus: Doha (screen-right) and Taemin (screen-left) from the shoulders, mid-conversation. Background, sharp, between their shoulders: Seoyun in the queue, ears pricked, eyes narrowing. Yerin beside her, soft.
- eyes: Seoyun stares at Doha's back, narrowing.
- emotion: 서윤 경계
- motion/direction: 전경 두 사람 → 후경 서윤
- dialogue_ref: 태민 "어디 사는데?" (bubble 1, upper-left) · 도하 "근처." (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream corridor wall above everyone's heads) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 서윤 얼굴이 초점의 중심.

### panel_044
- scene_id: E02S12 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑦ · 긴장 5 비 · **⟨복선 W1 단서 1(D): 예린 22시 학원가⟩**
- characters: YERIN (우유 고름, 수다) · SEOYUN
- size: medium · aspect: 3:4
- camera: medium two-shot of the two girls, eye level.
- composition: Yerin screen-left (large white claw clip, cream cardigan, sleeves over her hands) choosing a milk carton from colour-coded packs with no print, chatting brightly; Seoyun screen-right beside her, half listening, eyes still on Doha off-frame. Snack-shop shelves soft behind.
- eyes: Yerin looks at the milk; Seoyun glances off-frame screen-left (toward Doha).
- emotion: 예린 밝음 / 서윤 경계
- motion/direction: 예린 → 서윤
- dialogue_ref: 예린 "나 평일엔 학원가에서 열 시에 끝나잖아." (bubble 1) · 예린 "그 시간 버스 진짜 지옥이야." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above the shelves) as calm, empty background for two stacked bubbles on the left.
- split: no
- gap_after: 30
- fx/note: 우유 팩 무지 색 블록.

### panel_045
- scene_id: E02S12 / location: LOC_SNACK_BAR · mood: M_DAY
- beat: ⑦ · 긴장 6 비 · ⟨W1 미스디렉션⟩
- characters: SEOYUN (클로즈업) · YERIN (흐린 배경)
- size: medium · aspect: 3:4
- camera: close-up of Seoyun, eye level, Yerin soft behind.
- composition: Seoyun centre-right, a small relieved exhale, shoulders loosening; Yerin out of focus screen-left behind her, still chatting with the milk.
- eyes: Seoyun looks down and aside, relieved.
- emotion: 안도(틀린 확신)
- motion/direction: 정지
- dialogue_ref: 서윤(생각) "…괜찮아. 내 버스는 그 전에 지나가." (bubble 1, thought)
- bubbles: 1 (thought)
- art_space: Keep the top fifth of the frame (plain cream wall) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 독자만 아는 아이러니 — 표정은 가볍게.

--- SCENE BREAK --- (E02S12 → E02S13 학생부실 앞, 오후)

### panel_046
- scene_id: E02S13 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ⑦ · 긴장 8 위 · ⟨반전 A의 대가 → ep03 엔진⟩
- characters: SEOYUN (굳은 옆얼굴) · HARAM · GEONU (불투명 유리문 너머 실루엣)
- size: medium-wide · aspect: 4:3
- camera: corridor medium, eye level, Seoyun in profile in the foreground.
- composition: Screen-right foreground: Seoyun in profile, stopped mid-step, face frozen, listening. Centre-left: the frosted glass door of the student-discipline office filling the upper middle; behind the frosted glass, two blurred silhouettes — a shorter one with a bob (Haram) and a tall one (Geonu). On the wall beside the door: a locked small wooden tip box with a slot, completely blank. Afternoon light along the corridor floor.
- eyes: Seoyun's eyes fixed sideways on the door.
- emotion: 위협 재점화
- motion/direction: 유리문 실루엣 → 서윤 옆얼굴
- dialogue_ref: 하람(문 너머) "분 단위로 똑같이 말하는 연인은 없어. 외운 거야." (bubble 1, tail → door) · 하람(문 너머) "…이번엔 절차대로 간다." (bubble 2, tail → door)
- bubbles: 2
- art_space: Keep the upper part of the frosted glass door, above the silhouettes' heads, plus the plain wall above the door (the left half of the frame, top 45%) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 320
- fx/note: 제보함·문 무지(명패 없음). 실루엣은 흐리게, 얼굴 없음. 320 = 오후 → 밤 21:40.

--- SCENE BREAK --- (E02S13 → E02S14 야자 교실, 21:40)

### ⑧ 버스 타이머 — P47~P53

### panel_047
- scene_id: E02S14 / location: LOC_CLASSROOM @NIGHT · mood: M_SCHOOL_NIGHT_IN [PD 제안]
- beat: ⑧ · 긴장 6 위 · 타이머(21:40 야자 종)
- characters: SEOYUN (손·가방)
- size: insert · aspect: 1:1
- camera: close-up of the desk and bag from slightly above.
- composition: Lower three-quarters: Seoyun's hands sweeping books into her worn black backpack on the desk; through the half-open zipper at the bottom, the tip of a rolled vivid green vest. Upper-right corner, small and behind: the wall clock with tick marks and no numerals, hour hand just before ten, minute hand at the eight mark (21:40). Flat white fluorescent light, black window reflecting at the edge.
- eyes: (얼굴 없음)
- emotion: 다급
- motion/direction: 손 → 가방 → 시계
- dialogue_ref: 효과음 [야자 끝 종] (sfx 1) · 대사 없음
- bubbles: 0 + sfx 1
- art_space: Keep the top-left quarter of the frame (plain cream wall under flat fluorescent light) as calm, empty background for the bell sound effect.
- split: no
- gap_after: 80
- fx/note: silent(효과음만). 낮이 아닌 장면이지만 선명한 초록은 지퍼 틈 조끼 끝뿐(§3-3).

--- SCENE BREAK --- (E02S14 → E02S15 복도 계단 머리)

### panel_048
- scene_id: E02S15 / location: LOC_HALLWAY @NIGHT (계단 머리) · mood: M_SCHOOL_NIGHT_IN [PD 제안]
- beat: ⑧ · 긴장 7 위·비 · ⟨K3: 10시 전엔 물어도 된다⟩
- characters: SEOYUN (가방 멤, 소매 잡음) · DOHA (OUTFIT_SCHOOL, 안경 없음)
- size: medium · aspect: 3:4
- camera: two-shot from a few steps down the stairwell, slight low angle, the frame turning down the stairs.
- composition: At the head of the stairs at the end of the corridor: Seoyun screen-left on the top step, already turned to go down, twisting back to grab the cuff of Doha's navy blazer sleeve; Doha screen-right in the corridor, a head taller, looking down at her hand. Lower-left: the first concrete steps dropping out of frame. Behind: the corridor fluorescent lights, black windows reflecting.
- eyes: Seoyun looks up at Doha, sharp, clever; Doha looks at her hand on his sleeve.
- emotion: 집요, 영리함
- motion/direction: 계단 아래(왼쪽 아래) ↔ 소매 잡은 손
- dialogue_ref: 서윤 "지금 대답해." (bubble 1) · 서윤 "아직 10시 전이야." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper corridor wall and ceiling light) as calm, empty background for two stacked bubbles on the left.
- split: no
- gap_after: 30
- fx/note: 소매 잡기까지(신체 접촉 수위). 키링 판별 불가.

### panel_049
- scene_id: E02S15 / location: LOC_HALLWAY @NIGHT · mood: M_SCHOOL_NIGHT_IN [PD 제안]
- beat: ⑧ · 긴장 8 위 · 타이머(3분) · ⟨복선 C5 메아리: 그는 그녀의 버스를 안다⟩
- characters: DOHA (클로즈업)
- size: medium · aspect: 3:4
- camera: close-up of Doha, eye level, the corridor wall clock behind him over his shoulder.
- composition: Doha's face screen-left-of-centre, just turning back from glancing at the clock; behind him, upper-right on the corridor wall, sharp enough to read as a shape: a round wall clock with tick marks and no numerals, hour hand just before ten, minute hand a little past the eight mark (21:41). Fluorescent light flat on his face.
- eyes: Doha looks back down at Seoyun (camera-low-left), calm.
- emotion: 도하 담담 / 압박
- motion/direction: 시계 → 도하 눈 → 서윤(아래)
- dialogue_ref: 도하 "버스, 3분 남았어." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left quarter of the frame (plain cream corridor wall above his head) as calm, empty background.
- split: no (비트시트 "시계 인서트" = 같은 프레임 배경)
- gap_after: 0
- fx/note: 시계 숫자 없음.

### panel_050
- scene_id: E02S15 / location: LOC_HALLWAY @NIGHT · mood: M_SCHOOL_NIGHT_IN [PD 제안]
- beat: ⑧ · 긴장 8 위 · 갈등 정점(대답 vs 버스)
- characters: SEOYUN (얼굴 ECU)
- size: insert · aspect: 1:1
- camera: extreme close-up of Seoyun's eyes and upper face, eye level.
- composition: Her eyes fill the middle band of the square, darting — a slight motion blur on the irises and two loose temple strands (no drawn speed lines); one eye toward her hand on his sleeve, the other glance toward the stairs below. Plain soft fluorescent background.
- eyes: darting between the sleeve (up-right) and the stairs (down-left).
- emotion: 갈등 정점
- motion/direction: 위 ↔ 아래 흔들림
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: 비트시트 "동세선" → 모션 블러(§3, 만화 기호 금지).

--- SCENE BREAK --- (E02S15 → E02S16 복도 창가, 잠시 뒤)

### panel_051
- scene_id: E02S16 / location: LOC_HALLWAY @NIGHT (창 너머 LOC_GINKGO_ROAD @NIGHT) · mood: M_SCHOOL_NIGHT
- beat: ⑧ · 긴장 4 코 · ⟨C5 메아리⟩ · **ep01 P48 변주**
- characters: DOHA · TAEMIN (창가 전경) · SEOYUN (아래 길, 작게)
- size: large · aspect: 9:16
- camera: high angle from the second-floor corridor window, looking down — same as ep01 panel_048.
- composition: Upper foreground: Doha (screen-left) and Taemin (screen-right, cowlick, rolled sleeves) at the window frame, seen from behind and the side, corridor fluorescent light behind them, glass reflecting faintly. Below, filling the middle and lower frame: the uphill ginkgo avenue at night, leaves glowing yellow under orange streetlights, low stone wall; small figure of Seoyun running downhill with her backpack, ponytail flying.
- eyes: both boys look down at the running Seoyun.
- emotion: 코미디 밸브
- motion/direction: 위(두 남학생) → 아래(뛰는 서윤)
- dialogue_ref: 태민 "한서윤 맨날 왜 저렇게 뛰어?" (bubble 1) · 도하 "44분 버스." (bubble 2)
- bubbles: 2
- art_space: Keep a calm dark patch of low stone wall and empty road in the lower-right quarter (beside, not over, the running Seoyun) and the dark reflective window glass at the top right as calm, empty background — Taemin's bubble top-right, Doha's in the lower-right patch or below his head.
- split: no
- gap_after: 30
- fx/note: **첨부 ep01 panel_048.** 도하 안경 없음.

### panel_052
- scene_id: E02S16 / location: LOC_HALLWAY @NIGHT (창가) · mood: M_SCHOOL_NIGHT
- beat: ⑧ · 긴장 4 코 · 침묵 개그
- characters: TAEMIN (고개 돌림) · DOHA (옆얼굴, 왼쪽 목 점)
- size: medium · aspect: 3:4
- camera: two-shot favouring Taemin, eye level, from Doha's LEFT side.
- composition: Taemin screen-left-of-centre, turning his head to look at Doha, puzzled. Doha screen-right in profile facing the black window, unmoved; the small mole on the LEFT side of his neck below the ear visible (his left side toward camera). The window reflects the corridor; orange glow from below.
- eyes: Taemin stares at Doha; Doha looks out of the window only.
- emotion: 태민 의아 / 도하 침묵
- motion/direction: 태민 → 도하 → 창밖
- dialogue_ref: 태민 "…근데 넌 그걸 왜 아는데?" (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain corridor ceiling and upper wall) as calm, empty background, upper-left above Taemin.
- split: no
- gap_after: 160
- fx/note: 점 = 왼쪽. 좌우 반전 주의(Flow).

--- SCENE BREAK --- (E02S16 → E02S17 버스 안)

### panel_053
- scene_id: E02S17 / location: LOC_BUS_NIGHT · mood: M_BUS_NIGHT [PD 제안]
- beat: ⑧ · 긴장 6 비 · **⟨복선 W6 메아리(V): 마트 불빛⟩**
- characters: SEOYUN (OUTFIT_SCHOOL, 숨 참)
- size: medium-wide · aspect: 4:3
- camera: side close-up of Seoyun at the bus window, eye level, lights streaking past outside.
- composition: Screen-left: Seoyun in profile facing screen-right, forehead resting against the cool window glass, breath fogging it a little, strands loose from running. Through the glass, moving right to left: bright windows of cram-school buildings with signboards glowing plain blank white and blue, orange streetlights smearing; farther off, small, the wide glow of a big-box store parking lot. Bus interior: blue-grey seat back, a hand strap, cool light.
- eyes: Seoyun's eyes half-closed, looking out at nothing.
- emotion: 자기혐오 섞인 피로
- motion/direction: 창밖 빛 오른쪽 → 왼쪽 흐름
- dialogue_ref: 서윤(생각) "…왜 내가 도망친 기분이지." (bubble 1, thought)
- bubbles: 1 (thought)
- art_space: Keep the top third of the frame on the left half (plain dark bus ceiling panel above her head) as calm, empty background.
- split: no
- gap_after: 320
- fx/note: 간판 무지. 버스 내부 안내 화면 없음. 320 = 21:4x → 목요일 00:00.

--- SCENE BREAK --- (E02S17 → E02S18 편의점, 목 00:00)

### ⑨ 감속 — P54~P57

### panel_054
- scene_id: E02S18 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑨ · 긴장 5 비 · **⟨복선 C7 메아리(A) · C2 유리병 +1⟩**
- characters: SEOYUN (OUTFIT_STORE, 손 위주)
- size: medium-wide · aspect: 4:3
- camera: from the customer side, slightly high, medium close-up across the whole counter.
- composition: Centre: Seoyun's hands moving expired orange-band triangle rice balls into the grey bin under the counter; one rice ball paused in her RIGHT hand, then set apart alone in the small green wire discount basket at the counter's screen-right end. Screen-left end of the counter: the lidless glass jar of white paper cranes, a touch fuller than before (one more crane on top). Upper left on the back wall, small: the no-numeral wall clock, both hands at twelve. Her face only from the chin down.
- eyes: (얼굴 대부분 프레임 밖, 손에 시선)
- emotion: 알면서도 남기는 마음
- motion/direction: 폐기 바구니 → 멈칫 → 오른쪽 할인 바구니
- dialogue_ref: 효과음 [삑—] (sfx 1) · 서윤(생각) "…안 남겨도 되는데." (bubble 1, thought)
- bubbles: 1 (thought) + sfx 1
- art_space: Keep the top third of the frame on the right half (plain fluorescent wall above the discount basket) as calm, empty background for her thought bubble, plus a small plain patch of counter left of centre for the beep sound effect.
- split: no
- gap_after: 160
- fx/note: 시계 숫자 없음. 주황 띠 = 같은 모양. 유리병 +1은 작게(강조 금지).

--- SCENE BREAK --- (E02S18 → E02S19 목 00:50)

### panel_055
- scene_id: E02S19 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑨ · 긴장 5 비 · **⟨C7: 그가 가져간다 · C8 밤 안경⟩** · 침묵의 의식
- characters: DOHA (OUTFIT_NIGHT, 후드 씀, 손) · SEOYUN (OUTFIT_STORE, 손)
- size: medium-wide · aspect: 4:3
- camera: medium on the counter top at counter height from the customer side, two pairs of hands.
- composition: 180° rule. Screen-left: Doha's long-sleeved charcoal hands placing the orange-band rice ball (taken from the green discount basket) and a few plain coins on the counter; at the left edge, his black backpack's LEFT strap with the clear resin keyring just glimpsed, small and soft (not readable). Screen-right: Seoyun's hands scanning it, red scanner light; green wire basket now empty at the right end. Top edge: only the hood's lower edge and his jaw, glasses not in frame; her vest at the right edge. Nobody's face.
- eyes: (얼굴 없음)
- emotion: 침묵의 의식
- motion/direction: 왼쪽 손 → 가운데 삼각김밥 → 오른쪽 손
- dialogue_ref: 효과음 [딩동] (sfx 1, door chime) · 효과음 [삑] (sfx 2) · 대사 없음
- bubbles: 0 + sfx 2
- art_space: Keep the top-left and top-right corners of the frame (plain fluorescent background above the counter) as small calm, empty patches for the two sound effects.
- split: no
- gap_after: 80
- fx/note: silent(효과음만). 첨부 권장 ep02 panel_005(같은 계산대·동전). 키링 클로즈업 금지.

### panel_056
- scene_id: E02S19 / location: LOC_CVS (창 너머 LOC_CROSSROADS) · mood: M_NIGHT
- beat: ⑨ · 긴장 4 비 · **⟨복선 TB-V3 = W8 메아리: 빨간 의자⟩**
- characters: DOHA (창가 바 테이블, 후드 벗음, 뒷모습) · SEOYUN (후경 계산대, 작게)
- size: medium-wide · aspect: 4:3
- camera: over-the-shoulder from behind Doha seated at the window bar, wide.
- composition: Screen-left foreground: Doha seated at the narrow window bar, hood pushed back, messy black hair from behind, the orange-band rice ball unopened beside his hand. Through the glass: the empty bus stop directly in front, the quiet crossroads, diagonally across the shuttered empty shop with the small faded red plastic stool (small, same place as panel_008), far off the big-box parking-lot glow. Reflected faintly in the glass, small at the right: the counter behind him with Seoyun's back in the green vest — the two facing away from each other.
- eyes: Doha looks at the red stool across the street; Seoyun (reflection) faces the counter.
- emotion: 고요, 묻지 않은 질문
- motion/direction: 도하 뒤통수 → 빨간 의자 → 유리 반사 속 서윤
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: **첨부 ep02 panel_008**(+ ep01 panel_053) — 같은 거리 배치. 의자 작게. 320 = 클리프 직전 정적. 후드는 여기서부터 벗음.

### panel_057
- scene_id: E02S19 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑨ · 긴장 6 비 · ⟨C2⟩ · 결심
- characters: SEOYUN (손 → 얼굴)
- size: medium · aspect: 3:4
- camera: from the customer side at counter height, close on her hand with her face rising at the top.
- composition: Lower half, sharp: on the counter, Seoyun's fingers stopping on a half-folded blank white receipt crane, then setting it down. Upper half: her face lifting into frame, eyes rising toward screen-left (the window bar), jaw set. Cigarette shelf soft behind.
- eyes: Seoyun looks up and across toward Doha (screen-left, off-frame).
- emotion: 결심
- motion/direction: 손(아래) → 얼굴(위) → 왼쪽
- dialogue_ref: 서윤 "백도하." (bubble 1, tail → screen-left)
- bubbles: 1
- art_space: Keep the top-left fifth of the frame (plain fluorescent ceiling and soft blurred fridge glow) as calm, empty background.
- split: no (비트시트 "손 ECU → 얼굴 상단" = 한 프레임 아래/위)
- gap_after: 80
- fx/note: 학 판별 불필요(반쯤 접힘).

### ⑩ 클리프행어 — P58~P61 (목 00:5x)

### panel_058
- scene_id: E02S19 / location: LOC_CVS (창가 바 테이블) · mood: M_NIGHT
- beat: ⑩ · 긴장 8 비 · ⟨K3 위반: 서윤 스스로⟩
- characters: SEOYUN (OUTFIT_STORE, 서 있음) · DOHA (OUTFIT_NIGHT, 후드 벗음, 안경, 앉음)
- size: medium · aspect: 3:4
- camera: side two-shot along the window bar, eye level, angled so the dark glass reflects them both.
- composition: Seoyun screen-right, standing at the window bar beside Doha in her green vest, arms tight at her sides; Doha screen-left, seated on a stool, turned slightly toward her. Background: the dark front glass with their two reflections faintly overlapping the night street (bus stop, streetlights). Flat fluorescent light from behind.
- eyes: Seoyun looks down at Doha, set; Doha looks at her reflection, then at her.
- emotion: 각오, 규칙을 깨는 쪽
- motion/direction: 서윤 → 도하
- dialogue_ref: 서윤 "3조 위반이야. 알아." (bubble 1) · 서윤 "대답해. 언제부터야." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame on the right (dark plain night glass above her head, no reflections of lights there) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 같은 실루엣(P1~6 의상). 접촉 없음.

### panel_059
- scene_id: E02S19 / location: LOC_CVS (배경 단순화 시작) · mood: M_NIGHT
- beat: ⑩ · 긴장 9 비 · **⟨복선 TB-D4: 시간 경계 공개 · C8⟩**
- characters: DOHA (클로즈업)
- size: medium · aspect: 3:4
- camera: close-up of Doha, slightly low angle, from beside the window bar.
- composition: Doha turned on his stool, face tilted up toward her (screen-upper-right, off-frame), thin round black-framed glasses with a fluorescent reflection across one lens, messy hair, calm. Background simplified to the dark glass and soft green-white store tones.
- eyes: Doha looks up at Seoyun (upper-right, off-frame), steady.
- emotion: 고요한 진실
- motion/direction: 도하 → 오른쪽 위(서윤)
- dialogue_ref: 도하 "전학 오기 전부터." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left fifth of the frame (plain dark night glass) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 안경 반사는 한 줄, 눈은 보이게.

### panel_060
- scene_id: E02S19 / location: LOC_CVS (배경 단순화) · mood: M_NIGHT
- beat: ⑩ · 긴장 9 비 · 혼란 → 다가감
- characters: SEOYUN (바스트)
- size: medium · aspect: 3:4
- camera: bust of Seoyun, slightly high angle from Doha's seated eye line looking up — reversed to a near-frontal angle.
- composition: Seoyun centred, green vest, lips parted, words stuck, then forcing the next question; behind her the dark front glass of the night (near-black navy), a faint streetlight smear. Flat white light on her face.
- eyes: Seoyun looks down at Doha (camera), searching.
- emotion: 혼란 → 다가감
- motion/direction: 정면
- dialogue_ref: 서윤 "…전학?" (bubble 1) · 서윤 "그럼 전학은 왜." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dark night glass above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 160 = 마지막 패널 앞 숨.

### panel_061
- scene_id: E02S19 / location: LOC_CVS (배경 단순화) · mood: M_NIGHT
- beat: ⑩ · 긴장 **10** 비 · **⟨반전 B 정점 · "여기" 이중의미⟩** · 회차 마지막 · **캡처 컷 후보**
- characters: DOHA (정면 바스트)
- size: full-bleed · aspect: 9:16
- camera: frontal bust from Seoyun's eye line, eye level — same framing as ep01 panel_060.
- composition: Doha centred in the middle of the tall frame, hood down, thin round black-framed glasses, steady serious gaze straight into her eyes, lips slightly parted; flat white fluorescent front light on his face; background reduced to soft blurred green-white store tones. Top quarter: calm plain ceiling light. Bottom sixth: plain simple darker background (charcoal hoodie fading into shadow). Seoyun not in frame.
- eyes: Doha looks straight into the camera (her eyes), unwavering.
- emotion: 담담한 고백
- motion/direction: 정면 응시, 정지
- dialogue_ref: 도하 "…여기 오려고 전학 온 거야." (bubble 1) · 캡션 「— 3화에 계속 —」(narration, 아래)
- bubbles: 1 + caption 1
- art_space: Keep the top quarter of the frame (plain fluorescent ceiling glow above his head) as calm, empty background for one bubble, and the bottom sixth (plain dark hoodie shadow) as calm, empty background for the ending caption.
- split: no
- gap_after: 0
- fx/note: **첨부 ep01 panel_060**(같은 프레이밍). 서윤 리액션은 ep03 P1로 넘김. 얼굴 중앙, 위·아래 두 빈자리 모두 확보.

---

## 6. 점검 (제출 전 체크리스트)

- [x] 패널 61개(≥50, ≥55), `panel_001`~`panel_061` 3자리 연속, 대본·비트시트 번호와 1:1.
- [x] 모든 패널에 scene_id / LOC_* / mood. 같은 scene_id = 같은 LOC·빛·의상(P12·P51 표기 통일, §1).
- [x] 대사 패널 54개 전부 dialogue_ref + art_space, 말풍선 83개 = 대본 대사·생각 줄 83개. 무대사 7개(P8·P14·P28·P47·P50·P55·P56) art_space none(P47·P55는 효과음 자리만). 무대사 연속 최대 2컷(P55~56).
- [x] 화면비: 9:16 ×8 · 3:4 ×37 · 4:3 ×12 · 1:1 ×4 = 61.
- [x] split: yes = P20 하나(2칸).
- [x] 반전: A = P31 9:16 단독(앞 30·뒤 160). B = P58~61 투샷 → 클로즈업 → 바스트 → 9:16 마지막.
- [x] 단서 위치 비트시트 그대로: TA-D1 P3 · TA-V1/TB-V1 P8 · TA-V2 P14 · TA-D2 P15 · TA-D3 P25 · W3 P10·P27 · TB-V2 P36~37 · TB-D1 P40 · TB-D2 P42 · TB-D3/W4 P43 · W1 P44~45 · W6 P8·P53 · C7 P5·P54·P55 · C8 P2·P55·P59 · TB-V3 P56 · TB-D4 P59 · C2 P20·P32·P54·P57.
- [x] 글자 0: 계약서·휴대폰·클립보드·시계·칠판·제보함·유리문·버스·간판·사탕·빵·우유·동전 전부 무지. 효과음 5개는 뷰어 sfx 자리만.
- [x] 사장님 ↔ 도하 같은 프레임 없음(P7 목소리만, P9 도하 없음). P10 골목 빈칸. P11 엄마 등 + 오른손목 파스. 빨간 의자 P8·P56 작게.
- [x] 한국 원작 그대로(캄보디아식 변형 없음). 신체 접촉은 손잡기·소매 잡기까지. 만화 기호(김·속도선) 없음.

## 7. 하류 인계

- **letterer:** 각 패널의 `art_space`·`gap_after`를 `ep02_lettering.md`에 그대로 옮긴다(gap_after는 px 정수). 말풍선 수·화자는 `dialogue_ref`/`bubbles` 기준. 프레임 밖 꼬리: P7(사장님 → 오른쪽 안쪽 문), P23(하람 → 왼쪽), P24(건우 → 왼쪽 아래, 서윤 → 오른쪽), P25(하람 → 왼쪽), P26(도하 → 오른쪽), P41(도하 → 왼쪽 아래), P46(하람 둘 다 → 유리문), P57(서윤 → 왼쪽). 효과음 자리: P6·P47·P54·P55(2). P61 캡션 narration 아래 1/6. thought = P10, P11, P20(2), P32, P37, P45, P53, P54. shout = P34 태민. text_km은 대본 KM 그대로.
- **prompt-smith:** style-bible §6-1 조립 순서. camera/composition/eyes/art_space 영어 문장 그대로. LOC 토큰은 §7 원문 + 무드 빛 문구 하나([PD 제안] 4개는 art-director 확정본으로). 앞 패널 첨부: P1 ← ep01_059, P2 ← ep01_060, P8 ← ep01_001, P30 ← ep02_016, P38 ← ep01_022, P51 ← ep01_048, P56 ← ep02_008(+ep01_053), P61 ← ep01_060, P55 ← ep02_005(선택). P9 = MISUK_sheet 필수. SCENE BREAK 21곳(§1)을 그룹 경계로 사용.
- **art-director / ref-sheet-artist (요청):**
  1. **MISUK_sheet 신규 카드**(P9 전에). character-sheets §11 "시트 보류" → 이번 회차 제작. R-2 표·refs/INDEX.md에 추가.
  2. **새 LOC는 필요 없다**(19개 안에서 해결). 단 이 회차가 처음 쓰는 LOC 4종(UPHILL_ALLEY, HOME, BUS_NIGHT, CLASSROOM/HALLWAY @NIGHT 실내)에 맞는 **무드 빛 문구가 style-bible §3-2에 없다** → §1의 [PD 제안] `M_ALLEY_NIGHT`·`M_HOME_NIGHT`·`M_SCHOOL_NIGHT_IN`·`M_BUS_NIGHT` 확정 요청. (LOC_GATE·STUDENT_OFFICE는 M_DAY_OUT·M_DAY로 충분.)
  3. **LOC 보조구 2개 추가 요청:** LOC_CVS `a plain grey staff door behind the counter leading to the back`(P6·P7 안쪽 문), LOC_HALLWAY @NIGHT `at the head of the stairwell, the first concrete steps going down`(P48~50 계단 머리).
  4. 하람·건우 교문 장면(밖) 신발: HARAM OUTFIT_SCHOOL의 SHOES_INDOOR 대신 실외화(SHOES_OUTDOOR) 사용 확인.
