# EP03 샷리스트 — 『유통기한 연애』 3화 「상담 사안」 · panel-director

- 작성: panel-director · 2026-11-22 · Flow-by-hand mode + Khmer edition · v1 (style-bible v1.2 · character-sheets v1.2 기준으로 맞춤)
- 게이트: `km_review.py gate --episode 03` → **OK** (ep03_script_final.md = Khmer review READY 판본, round 1, sha256 a0fc3f3cf89b…)
- 입력: `03_episode/ep03_script_final.md`(최종 대본, 60패널, KM 줄), `03_episode/ep03_beatsheet.md`(패널 번호·단서 위치 고정, 머리말 LOC_COUNSEL_ROOM, §D-6 제작 메모), `04_visual/style-bible.md` v1.2(§3-2 무드 M_COUNSEL, §5 화면비·프레이밍·방향(상담실 행), §7 LOC(§7-2 LOC_COUNSEL_ROOM + 실루엣 보조구 + 방향 규약), §9 글자 없음, §10 art_space), `04_visual/character-sheets.md` v1.2(§R-3 상담실·엄마 첨부 행), `02_story/world.md` §3-2·§4-2·§5·§6·§7, `04_visual/ep02_shotlist.md`(형식·연결 구도)
- 스킬: `webtoon-panel-breakdown` 작업 A(A-1~A-4) · `webtoon-khmer-edition` §4 · `webtoon-flow-handoff`
- **패널 60개.** `panel_001`~`panel_060` = 대본 `P01`~`P60`(번호·순서·단서 위치 그대로). 대사 패널 51 / 무대사 9(P3·P4·P27·P31·P33·P47·P53·P55·P59). 말풍선 83개(대본 대사·생각 줄 83개와 1:1). 효과음 4(P3·P47·P51·P52), 엔딩 캡션 1(P60).
- **한국 원작 그대로.** 서울 변두리 서진고·솔내동, 한국 교복·얼굴, 한국 교무실·상담실·편의점·반지하. 캄보디아식 변형 없음. 크메르어는 뷰어 말풍선 글자에만.
- 작업 언어: 한국어. prompt-smith가 그대로 옮길 **camera / composition / eyes / art_space는 영어**. 대사(dialogue_ref)는 한국어 원문(크메르어 원본은 대본 `KM:` 줄, letterer가 옮김).
- 좌/우: `LEFT/RIGHT`(대문자) = 인물 본인 기준. `screen-left/right` = 화면 기준.
- **Khmer edition (one line):** No text of any kind in any image (no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing); every panel keeps its `art_space` as calm, empty background, objects that could carry writing (Mom's note, contract, counselling forms, clipboards, attendance book, the crane-shaped tip note, phones, clocks, CCTV monitor, bus display, packaging) are drawn blank, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.

---

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 무드 ↔ 배경)

| scene_id | panels | location | mood | 의상 | 배경 한 줄 |
|---|---|---|---|---|---|
| E03S01 | P1–P3 | LOC_CVS | M_NIGHT | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(P1 후드 벗음 → P2에서 다시 씀, 안경) | 목 00:57. ep02 P61 직후 같은 편의점. 창가 바 테이블, 계산대 왼쪽 끝 유리병(약 2/3), 숫자 없는 벽시계 |
| E03S02 | P4–P7 | LOC_HOME | M_HOME_NIGHT | 서윤 흰 셔츠·체크 치마(블레이저는 옷걸이) · 엄마 HYEWON(잠든 등, 얼굴 없음) | 목 01:20. 반지하 단칸방, 높은 창으로 가로등 빛 한 줄, 요 두 장, 낮은 접이식 책상 |
| E03S03 | P8, P11, P14 | LOC_HALLWAY (교무실 문 앞 구간) [보조구 PD 제안] | M_DAY | 서윤·도하 OUTFIT_SCHOOL(도하 안경 없음), 하람 OUTFIT_SCHOOL(P14) | 목 07:55. 한쪽 창(아침 역광), 맞은편 벽에 교무실 미닫이문 |
| E03S04 | P9, P10, P12, P13 | LOC_TEACHERS_OFFICE | M_DAY | 하람 OUTFIT_SCHOOL · 담임 RYU | 교무실 안 담임 책상, 은색 텀블러, 블라인드 창 |
| E03S05 | P15–P18 | LOC_CLASSROOM | M_DAY | 전원 교복, 담임 RYU | 08:20 아침 조회, 왼쪽 큰 창 |
| E03S06 | P19–P21 | LOC_CLASSROOM | M_DAY | 교복(예린 크림 카디건, 태민 셔츠) | 1교시 뒤 쉬는 시간, 서윤 책상 위 학 일곱 마리 |
| E03S07 | P22–P26 | LOC_STAIR_LANDING | M_LANDING | 서윤·도하 교복 | 4교시 끝(점심 직전), 옥상 앞 계단참, 살구빛 역광, 노을 없음 |
| E03S08 | P27 | LOC_HALLWAY (교무실 쪽 구간, 끝에 상담실 문) | M_DAY | 서윤·도하 교복, 하람 완장(원경) | 점심 12:35 복도 |
| E03S09 | P28–P41 | **LOC_COUNSEL_ROOM** (신규, §7-2) | **M_COUNSEL** | 서윤·도하 교복, 담임 RYU · 하람 = 유리문 너머 실루엣(P29·P41만) | 목 12:40. 원탁 + 의자 4개, 블라인드 반쯤 내린 창 ↔ 마주 보는 불투명 유리문, 문 위 숫자 없는 시계 |
| E03S10 | P42–P44 | LOC_HALLWAY (상담실 문 앞) | M_DAY | 서윤·도하 교복 | 점심, 닫힌 상담실 불투명 유리문 앞 복도 |
| E03S11 | P45–P46 | LOC_STUDENT_OFFICE | M_DAY | 하람·건우 교복 + 진홍 완장 | 오후 쉬는 시간, 학생부실 앞, 불투명 유리문, 벽의 잠긴 무지 제보함 |
| E03S12 | P47 | LOC_GINKGO_ROAD @NIGHT | M_SCHOOL_NIGHT | 서윤 교복(작게) | 21:40 야자 종, 가로등 은행나무 길, 아래 큰길 녹색 버스 불빛(전광판 무지) |
| E03S13 | P48–P50 | LOC_CVS_STOCKROOM | M_NIGHT (천장 형광 하나 + 모니터 회색빛, ep01 P49 전례) | 사장님 MISUK · 서윤 OUTFIT_SCHOOL(막 도착, 블레이저·백팩) | 21:58 창고, 박스, 회색 CCTV 모니터, 고리의 초록 조끼, 위층으로 가는 좁은 계단 문 |
| E03S14 | P51–P54 | LOC_CVS (P53 창 너머 LOC_CROSSROADS) | M_NIGHT | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(후드 씀, 안경) | 금 00:00 폐기 → 00:50 → 00:58. 같은 편의점 |
| E03S15 | P55 | LOC_UPHILL_ALLEY | M_ALLEY_NIGHT | 서윤 교복(블레이저 다시 입음, 작게) | 금 01:15 귀갓길, 가로등 세 개, 골목에 인물 없음 |
| E03S16 | P56, P59 | LOC_HALLWAY (교무실 문 앞 구간) | M_DAY | 서윤 교복 | 금 07:55. P8과 같은 복도, 창가가 비어 있음 |
| E03S17 | P57, P58, P60 | LOC_TEACHERS_OFFICE (P60 배경 단순화) | M_DAY | 담임 RYU · 하람 OUTFIT_SCHOOL | 금 07:55. P9와 같은 담임 책상 |

- `--- SCENE BREAK ---`는 21곳: P4, P8, P9, P11, P12, P14, P15, P19, P22, P27, P28, P42, P45, P47, P48, P51, P55, P56, P57, P59, P60 앞(P10은 S04 연속이라 없음). E03S03 ↔ E03S04는 문틈을 사이에 둔 **교차 편집**(복도 ↔ 교무실), E03S16 ↔ E03S17도 같은 교차 편집이다. 교차 편집 때마다 scene_id가 돌아간다(장소 토큰이 한 씬 안에서 바뀌지 않게).
- 같은 scene_id = 같은 LOC 토큰 · 같은 무드 빛 · 같은 의상(style-bible §6-2-4). 예외 없음.
- **새 무드 없음.** 상담실은 art-director가 확정한 **M_COUNSEL**(style-bible v1.2 §3-2)을 쓴다. 나머지는 모두 기존 무드(art-director §3-2 ep03 씬 대응과 같음).
- **새 LOC = LOC_COUNSEL_ROOM 하나**(style-bible v1.2 §7-2, 20번째). 토큰은 단어 그대로 쓰고, **유리문 실루엣 보조구는 P29·P41에만** 붙인다. P28·P30~P40은 유리문을 비워 둔다(흐린 복도 빛만).
- **[PD 제안] LOC 보조구 3개** (토큰 뒤에 붙이는 구절. 새 LOC가 아니다. art-director 확인 요청 §7):
  - LOC_HALLWAY 교무실 문 앞 구간 (P8·P11·P14·P56·P59): `the section outside the staff room: a wide grey sliding door on the classroom-door side, slightly open, with a narrow frosted pane and no sign, the corridor windows on the opposite side`
  - LOC_TEACHERS_OFFICE 문틈 시점 (P9·P57): `seen from the corridor through a hand-wide gap of the half-open sliding door, the two dark door edges framing a narrow vertical strip of the room`
  - LOC_HALLWAY 상담실 쪽 끝 (P27·P42~P44): `toward the staff-room end of the corridor, the frosted-glass door of the counselling room with no sign at the far end`
  - LOC_CVS_STOCKROOM 계단 문 (P49·P50): `a narrow doorway at the back opening onto steep stairs going up to the owner's flat`

## 2. 크기 → Flow 화면비 (style-bible §5-1)

| size | aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed | **9:16** | P1, P3, P8, P27, P34, P47, P55, P56, P60 | 9 |
| medium (기본) | **3:4** | P2, P5, P7, P9–P11, P13, P14, P16–P18, P21, P23–P26, P28, P30–P32, P35–P37, P40, P42–P45, P48, P50, P54, P57–P59 | 34 |
| medium-wide | **4:3** | P4, P12, P15, P19, P20, P22, P29, P38, P39, P41, P49, P51, P52, P53 | 14 |
| insert / ECU | **1:1** | P6, P33, P46 | 3 |
| | | **합계** | **60** |

- 9:16 9장의 이유: P1(회차 첫 장, ep02 클리프 받기), P3(세로로 긴 정적 + 유리병), P8(교무실 앞 복도 소실점, P56과 짝), P27(복도 끝 하람, 깊이), **P34(반전 A 단독)**, P47(은행나무 길 하이 앵글), P55(가로등 세 개가 세로로, ep02 P10 짝), P56(P8 짝, 빈 창가), **P60(반전 B 마지막)**.
- 16:9 미사용.

## 3. 분할(split) · 매치 컷 · 상담실 방향 · 첨부 · 생성 순서

### 3-1. split
- **split: yes = 2개: P11, P59** (매치 짝). `two stacked frames in one image separated by a thin plain white gutter`. 위 칸 = 문틈 가장자리의 서윤 눈 ECU, 아래 칸 = 블레이저 주머니 입구의 손 인서트(주머니 속 손은 얼굴과 한 프레임에 담을 수 없다). art_space(P11 생각 풍선)는 위 칸 안. P59는 무대사.
- 비트시트의 다른 "얼굴 + 인서트"(P13, P18, P31, P39, P46, P50, P58)는 **한 프레임 안의 전경/후경 구도**로 풀었다(style-bible §5-2-2).

### 3-2. 상담실 방향 (style-bible v1.2 §7-2 방향 규약 그대로)
- 방: 불투명 유리문 벽 ↔ 마주 보는 블라인드 창 벽, 가운데 원탁, 의자 4개. 담임 = 창 쪽 의자(블라인드 등짐, 약한 역광), 서윤·도하 = 문 쪽 의자 두 개(문 등짐, 얼굴에 블라인드 줄무늬 빛). 네 번째 의자는 담임 옆에 비어 있다. 시계는 문 위, 화분은 창 쪽 구석.
- **마스터 앵글(창 쪽 → 문):** 도하 = 화면 왼쪽, 서윤 = 화면 오른쪽, 유리문은 두 사람 뒤 가운데~약간 왼쪽. **P28, P29, P41** + 이 방향의 단독·투샷 **P31, P32, P33, P34, P37, P38**.
- **역샷(문 쪽 → 창):** 배경 = 블라인드 창, 유리문 안 보임, 어깨 전경이면 **도하 = 화면 오른쪽, 서윤 = 화면 왼쪽**. **P30, P35, P36, P39, P40.**
- **P41**은 비트시트 "두 사람 뒤에서 본 와이드"를 따르지 않고, 담임 쪽 넓은 앵글(P29와 같은 카메라)에서 두 사람을 중경, 유리문을 깊은 배경으로 둔다(§7-2-3 결정).
- 유리문 실루엣(하람): **P29(멈춤), P41(멀어짐)**에서만. 작게, 초점 밖, 얼굴·안경·머리 모양 디테일 없음, 왼팔 높이의 진홍 덩어리가 유일한 단서. 말풍선은 실루엣 위에 두지 않는다. 첨부 없음(character-sheets v1.2 §4·§R-3).

### 3-3. 앞 패널 이미지를 첨부해야 하는 패널

style-bible §6-2-3: 첨부 3장 이하(인물 시트 1~2장 + 앞 패널 1장). 상담실 기본 첨부 = `LEADS_lineup` + `RYU_sheet`(character-sheets v1.2 §R-3; 표정 컷이면 해당 인물 `_expressions` 하나로 교체). 실루엣에는 아무것도 첨부하지 않는다.

**(a) ep01 / ep02 패널을 첨부 (그 이미지가 먼저 있어야 한다)**

| 패널 | 첨부할 앞 패널 | 이유 | 고정할 것 / 다를 것 |
|---|---|---|---|
| **P1** | **ep02 panel_060** | ep02 P60~61을 곧장 받는 서윤 바스트 | 같은 조끼·같은 창가 바 테이블·같은 살짝 로우 앵글. 다름: 표정(충격 → 믿기 싫음), 손에 반쯤 접은 영수증 학 |
| **P2** | **ep02 panel_061** | 후드 벗은 도하 얼굴·안경 연속 | 같은 얼굴·안경. 다름: 측면, 스툴에서 일어나며 후드를 다시 씀, 후경 시계 |
| **P4** | **ep02 panel_011** | 같은 반지하 방, 같은 엄마 등·오른손목 파스 | 같은 방 배치(요 두 장, 높은 창). 다름: 서윤은 아직 문가(방 안에 없음), 책상 위 컵에 눌린 무지 쪽지 |
| P7 (선택) | ep02 panel_011 | 같은 요·같은 창빛 | 카메라가 위에서 내려다봄 |
| **P8** | **ep01 panel_009** | 교무실 미닫이문과 복도의 관계 | 같은 문. 다름: 복도 소실점 와이드, 창가에 기댄 도하 |
| **P22** | **ep02 panel_039** | 같은 계단참 측면 투샷 | 같은 카메라(계단 screen-left 아래 → screen-right 위). 다름: 두 사람이 **같은 칸**(꼭대기 참)에 나란히, 서윤이 도하 소매를 잡음 |
| P45 (권장) | ep02 panel_046 | 같은 학생부실 유리문·제보함 | 같은 문·제보함 위치. 다름: 카메라가 제보함 클로즈업 |
| **P47** | **ep02 panel_051** (없으면 ep01 panel_048) | 같은 은행나무 길 밤 하이 앵글 | 같은 길·가로등. 다름: 창틀·인물 전경 없음, 아래 큰길에 녹색 버스 불빛 |
| **P48** | **ep01 panel_049** | 같은 창고 | 같은 박스·거울·모니터 위치. 다름: 문가 시점, 사장님 등 |
| **P51** | **ep02 panel_054** | 같은 폐기 정리 구도 | 같은 카메라·시계(두 바늘 12). 다름: 유리병 조금 더 참 |
| **P52** | **ep02 panel_055** | 같은 손 두 쌍 구도 | 같은 계산대 배치. 다름: 프레임 위쪽에 도하 후드 아래 턱·안경 아랫테가 살짝 |
| **P53** | **ep02 panel_056** (+ ep02 panel_008) | 같은 사거리 지리(빨간 의자 위치) | 같은 OTS·같은 의자 위치. 다름: 도하 **후드 씀**, 유리 반사 속 서윤이 학을 병에 넣음 |
| **P54** | **ep02 panel_006** | 같은 문·같은 벽시계 축 | 같은 측면 카메라. 다름: 문 앞에서 멈춰 뒤돌아봄, 시계 00:58 |
| **P55** | **ep02 panel_010** | 같은 골목·가로등 세 개 | 같은 하이 앵글. 다름: 서윤이 **세 번째(맨 위) 가로등** 아래에서 뒤돌아봄. 골목은 비어 있음 |

**(b) ep03 안의 앞 패널을 첨부 (ep03 안 생성 순서)**

| 패널 | 첨부 | 이유 |
|---|---|---|
| **P56** | **P8** | 같은 복도 같은 카메라, 창가가 비어 있음(구도 짝) |
| P14 | P8 | 같은 복도 축(창 = screen-left, 교무실 문 = screen-right) |
| **P57** | **P9** | 같은 문틈 프레임(구도 짝), 담임 클로즈업으로 당김 |
| P12 (권장) | P9 | 같은 담임 책상 |
| **P59** | **P11** | 같은 분할 구도(매치 짝) |
| **P28, P38, P41** | **P29** | 상담실 마스터 앵글 = 방 배치 기준. P41은 P29와 **같은 카메라**(실루엣만 멈춤 → 멀어짐) |
| P31, P33, P37 (권장) | P29 | 같은 마스터 방향, 문 쪽 의자 |
| P35, P36, P39, P40 (권장) | P30 | 역샷 방향 기준(블라인드 창 배경) |
| **P34** | **P32** | 같은 도하 정면 클로즈업, 블라인드 줄무늬만 더 또렷 |
| **P58** | **P46** | 같은 서툰 학 모양 제보 쪽지(두 특징 없음) |
| P60 (선택) | P10 | 같은 교무실 빛 속 하람 얼굴 |

### 3-4. 생성 순서 (사용자 메모)
1. **아직 없을 수 있다:** ep01·ep02는 둘 다 `WAITING_FOR_IMAGES`다. 위 (a)의 ep01 panel_009·049, ep02 panel_006·010·011·039·046·051·054·055·056·060·061(+008)이 생긴 뒤에만 ep03 P1·P2·P4·P8·P22·P47·P48·P51~P55(+P7·P45 권장)를 만들 수 있다. 없으면 이 패널들은 미뤄 두고 나머지부터 만든다. 레퍼런스 시트(13장, MISUK_turnaround 포함)가 먼저다.
2. ep03 안: **P8 → P14, P56** · **P9 → P12, P57** · **P11 → P59** · **P29 → P28, P31, P33, P37, P38, P41** · **P30 → P35, P36, P39, P40** · **P32 → P34** · **P46 → P58** · (P10 → P60 선택).
3. 새 레퍼런스 시트 없음(character-sheets v1.2: 13장 유지). 사장님(P48~P50) = MISUK_turnaround(ep02에서 이미 카드), 엄마(P4) = HYEWON 토큰만, 건우(P45) = 토큰만.

### 3-5. 고정 규칙 메모
- **사장님 ↔ 도하 같은 프레임 금지(W7, 첫 대면 ep05):** P48~P50 = 창고, 도하 없음. P54 도하는 00:58에 나가고 사장님은 없다. 01:00 교대 컷 없음.
- **하람은 P60 전까지 지명을 말하지 않는다** — 그림에는 영향 없음. 단 **P27·P29·P41 = 반전 B 시각 단서 전부**: P27 복도 끝 작게(얼굴은 판별 가능해도 됨, 고개만 이쪽), P29·P41 유리문 너머 얼굴 없는 실루엣.
- **종이학 규칙:** P19 맨 앞 학, P53 병 속 학 = 서윤의 두 특징(갈고리 머리 + 접어 내린 꼬리). **P46·P58 제보 쪽지 학 = 두 특징 없음**(둥근 머리, 꼬리 그대로, `clumsy crane-shaped folded note of plain paper with a plain head and a plain tail`). 두 종류를 한 컷에 나란히 두지 않는다. P1·P3·P11·P18·P59의 학은 반쯤 접혔거나 구겨져 판별 불필요.
- **도하 키링:** 낮 장면(P8, P14, P21~P28, P42~P44)은 백팩 왼쪽 끈을 카메라 반대쪽 또는 작고 흐리게. 클로즈업 금지. 상담실에서는 백팩을 메지 않는다(교실에 두고 옴).
- **도하 안경:** 밤(E03S01, E03S14)만. 낮 장면 안경 없음.
- **편의점 180도 규약:** 손님 쪽 시점 계산대 안 서윤 = screen-right, 손님 = screen-left, 유리병 = 계산대 screen-left 끝, 초록 할인 바구니 = screen-right 끝, 회색 폐기 바구니 = 계산대 아래(P3, P51, P52).
- **교무실 앞 복도 축(P8·P11·P14·P56·P59):** 카메라가 복도를 따라 소실점을 볼 때 창 = screen-left 벽, 교무실 미닫이문 = screen-right 벽. 도하는 창가(screen-left), 서윤은 문 쪽(screen-right).
- **계단참 축:** ep02 P39와 같은 측면(계단 screen-left 아래 → screen-right 위). P22는 처음으로 **같은 칸**(꼭대기 참): 서윤 screen-right, 도하 screen-left.
- **손잡기 방향(P27):** ep02와 같이 도하의 오른손이 서윤의 **LEFT** 손(서윤이 도하의 오른쪽). 뒷모습이므로 서윤 = screen-right.
- **만화 기호 금지(style-bible §11-5) 대체:** P20 "동세선" → 태민·예린 머리카락·소매의 약한 모션 블러. P33 "동세선" → 포니테일·잔머리의 모션 블러. P43 "서윤 머리 위 김" → 정수리 전경 + 새빨간 귀(몸짓). 그려진 김·땀방울·속도선 없음.
- **시계(숫자 없는 눈금):** P2 = 시침 1 바로 앞, 분침 12 눈금 세 칸 전(00:57). P51 = 두 바늘 12. P54 = 시침 1 바로 앞, 분침 12 두 칸 전(00:58). 같은 벽(계산대 뒤) 같은 자리. 상담실 시계(문 위)는 바늘 위치 무관, 숫자 없음.
- **은행나무·옷:** 1주, 샛노랑 가득, 맑음, 블레이저(world §7-4). 유리병 약 2/3 → P53에서 한 마리 더.

## 4. 스크롤 리듬 · gap_after (px, letterer 레터링 스펙에 그대로)

| gap_after | 뜻 | 쓰는 곳 |
|---|---|---|
| 0 | 이어 붙임(같은 순간의 연쇄) | ECU 연쇄 |
| 30 | 촘촘(빠른 주고받기) | 교차 편집, 대사 합, 반전 직전 |
| 80 | 보통 | 기본 |
| 160 | 비트 끊기 · 씬 전환 · 반전 직후 숨 | SCENE BREAK 앞, P33, P59 |
| 320 | 시간 점프 · 정지 컷 · 반전 직후 정지 | P7(밤 → 아침), P34(반전 A 직후), P46(오후 → 밤), P55(밤 → 금요일 아침) |

| 구간 | 패널 | 리듬 |
|---|---|---|
| ① 받기 | P1–P3 | **9:16 서윤 정면**(30) → 3:4 일어서는 도하(30) → **9:16 유리병 정적** 무대사(160) |
| ② 엄마의 쪽지 | P4–P7 | 4:3 방 무대사(80) → 3:4 쪽지 낭독(80) → 1:1 필통(80) → 3:4 천장(**320**) |
| ③ 하람의 절차 | P8–P14 | **9:16 복도**(30) → 3:4 문틈(30) → 3:4 하람 옆얼굴(30) → 분할 눈 ECU(30) → 4:3 대치(30) → 3:4 양식(80) → 3:4 "절차대로"(160) |
| ④ 소환 | P15–P18 | 4:3 조회(30) → 3:4 태민·예린(30) → 3:4 담임 로우(0) → 3:4 서윤 ECU(160) |
| ⑤ 밸브 | P19–P21 | 4:3 학 일곱(30) → 4:3 3인(80) → 3:4 눈 맞춤(160) |
| ⑥ 부탁 | P22–P27 | 4:3 같은 칸(80) → 3:4(30) → 3:4 "첫째"(30) → 3:4 "거짓말은 안 해"(80) → 3:4(160) → **9:16 복도 끝 하람** 무대사(160) |
| ⑦ 상담실 | P28–P41 | 3:4 문가(80) → 4:3 실루엣 멈춤(80) → 3:4 질문(30) → 3:4 무대사(30) → 3:4 "솔내동 사거리요"(30) → 1:1 홱(160) → **P34 9:16 반전 A 단독**(**320**) → 3:4 "너도 기록이다"(80) → 3:4(30) → 3:4 독서실(80) → 4:3(80) → 4:3 기록(30) → 3:4 시한(80) → 4:3 실루엣 멀어짐(160) |
| ⑧ 코미디 | P42–P44 | 3:4(30) → 3:4(80) → 3:4(160) |
| ⑨ 하람의 쪽지 | P45–P46 | 3:4 제보함(30) → 1:1 학 쪽지(**320**) |
| ⑩ 밤의 균열 | P47–P55 | **9:16 종**(160) → 3:4 통화(30) → 4:3(30) → 3:4 조끼(160) → 4:3 폐기(160) → 4:3 손 두 쌍(80) → 4:3 OTS 무대사(160) → 3:4 "내일 봐, 한서윤"(160) → **9:16 빈 골목** 무대사(**320**) |
| ⑪ 클리프행어 | P56–P60 | **9:16 빈 창가**(30) → 3:4 문틈 담임(30) → 3:4 학 쪽지(0) → 분할 눈 ECU 무대사(160) → **P60 9:16 마지막** |

- 640 미사용.

---

## 5. 샷리스트 (panel_001 ~ panel_060)

### ① 받기 — P1~P3 (목 00:57, ep02 P61 직후)

### panel_001
- scene_id: E03S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① 받기 · 긴장 8 비 · (단서 없음) · ep02 P61을 곧장 받는 회차 첫 장
- characters: SEOYUN (OUTFIT_STORE, 창가 바 테이블 옆에 선 채) · DOHA (OUTFIT_NIGHT, 후드 벗음, 전경 가장자리 흐림)
- size: large · aspect: 9:16
- camera: bust of Seoyun from Doha's seated eye line at the window bar, slightly low angle looking up, near-frontal — same framing as ep02 panel_060.
- composition: Seoyun in the middle of the tall frame from the chest up, standing beside the window bar in the plain green vest over her white shirt, sleeves rolled; in her RIGHT hand at chest height a half-folded blank white receipt crane, fingers stopped mid-fold. Behind her: the store interior soft (aisle shelves as colour blocks, fridge glow). Screen-left edge, very soft and out of focus: the edge of Doha's charcoal hoodie shoulder and the rim of his round black glasses. Top quarter: plain fluorescent ceiling glow. Flat cold white light on her face.
- eyes: Seoyun looks down at Doha (toward the camera), eyes wide, wet at the rims, refusing to believe it.
- emotion: 충격 → 믿기 싫음
- motion/direction: 정면 응시 → 다음 패널(도하)
- dialogue_ref: 서윤 "…나 때문에?" (bubble 1)
- bubbles: 1
- art_space: Keep the top sixth of the frame (plain fluorescent ceiling glow above her head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 ep02 panel_060**(같은 프레이밍·조끼). 비트시트 "도하 후경 흐림"은 카메라가 도하 눈높이라 **전경 가장자리 흐림**으로 바꿨다. 학은 반쯤 접힘(판별 불필요). 다크서클 유지.

### panel_002
- scene_id: E03S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① · 긴장 7 비 · ⟨복선 C8⟩ · 타이머(01:00 교대) · **시계 00:57**
- characters: DOHA (OUTFIT_NIGHT, 후드를 다시 쓰는 중, 얇은 동그란 검정 뿔테)
- size: medium · aspect: 3:4
- camera: side medium from the shop floor, eye level, Doha in near profile rising from the window-bar stool.
- composition: Doha screen-left-of-centre, half risen from the stool, facing screen-right, pulling the charcoal hood up over his messy black hair with his RIGHT hand; thin round black-framed glasses catching one thin line of fluorescent light. Upper-right background, on the plain wall behind the counter: the round wall clock with tick marks and no numerals, hour hand just before one, minute hand three ticks before twelve (00:57), clearly readable as a shape. Counter edge soft at the right; the dark window glass at the left edge. Mole on the LEFT side of his neck hidden (his right side faces camera). Backpack LEFT strap away from camera.
- eyes: Doha's eyes lowered, not on her; he keeps his answer in.
- emotion: 말을 아낌
- motion/direction: 도하 일어섬 → 오른쪽 위 시계
- dialogue_ref: 도하 "…내일 봐." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left fifth of the frame, above Doha's head (plain fluorescent ceiling and the soft dark top of the window glass), as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 ep02 panel_061**(후드 벗은 얼굴·안경). 시계 숫자·로고 없음. 이 패널에서 후드를 다시 씀. P54 "내일 봐, 한서윤"과 짝.

### panel_003
- scene_id: E03S01 / location: LOC_CVS · mood: M_NIGHT
- beat: ① · 긴장 6 비 · ⟨복선 C2⟩ · 질문만 남음
- characters: SEOYUN (OUTFIT_STORE, 혼자, 후경)
- size: large · aspect: 9:16
- camera: from the customer side at counter height, the jar sharp in the foreground, deep focus falling off to Seoyun in the middle distance.
- composition: Lower third, sharp: the counter's screen-left end with the small lidless glass jar about two-thirds full of tiny white paper cranes. Middle: Seoyun standing alone in the aisle between the window bar and the counter, small, holding the half-folded receipt crane against her vest. Upper part, background: the glass front door just closing, the dark night beyond with an empty bus stop and orange streetlights; no figure outside. Lots of plain fluorescent ceiling and dark glass above her — a long vertical silence.
- eyes: Seoyun looks at the closing door.
- emotion: 질문만 남음
- motion/direction: 유리병(아래) → 서윤 → 닫히는 문(위)
- dialogue_ref: 효과음 [딩동] (sfx 1, door chime) · 대사 없음
- bubbles: 0 + sfx 1
- art_space: Keep a small patch at the top right of the frame (plain dark glass above the door) as calm, empty background for the door-chime sound effect.
- split: no
- gap_after: 160
- fx/note: silent(효과음만). 문 밖에 도하를 그리지 않는다. 유리병 = 학 판별 불필요.

--- SCENE BREAK --- (E03S01 편의점 → E03S02 반지하 방, 01:20)

### ② 엄마의 쪽지 — P4~P7 (목 01:20)

### panel_004
- scene_id: E03S02 / location: LOC_HOME · mood: M_HOME_NIGHT
- beat: ② · 긴장 5 비 · ⟨복선 E-MOM: 쪽지 소품⟩
- characters: HYEWON (엄마, 등을 돌리고 잠듦, 얼굴 없음) · (서윤 = 카메라, 문가)
- size: medium-wide · aspect: 4:3
- camera: floor-level wide from the doorway, looking across the small room toward the high window.
- composition: Two thin floor mattresses. Middle screen-right: the mother asleep on her LEFT side with her back to the camera, grey fleece, shoulder-length black hair streaked with grey pinned up low with a black claw clip; her RIGHT arm on top of the blanket with the inside of the RIGHT wrist toward camera, a plain white square pain-relief patch clearly readable. Foreground screen-left: the low folding desk with an unlit lamp; on it, a small plain glass cup weighing down a small square of plain blank white paper folded in four (completely blank, no writing). Upper left: the high narrow street-level window, one thin beam of orange streetlight across the ceiling. Kitchenette corner in shadow. The second mattress (Seoyun's) empty.
- eyes: (얼굴 없음)
- emotion: 조용한 미안함
- motion/direction: 쪽지(왼쪽 전경) → 엄마 등(오른쪽)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: **첨부 ep02 panel_011**(같은 방·엄마 등·파스). 엄마 = HYEWON 토큰만(시트 없음). 쪽지 무지.

### panel_005
- scene_id: E03S02 / location: LOC_HOME · mood: M_HOME_NIGHT
- beat: ② · 긴장 5 비 · **⟨복선 TA-V1 · TA-D1 · E-MOM: 독서실 거짓말 첫 노출⟩**
- characters: SEOYUN (흰 셔츠, 손 + 입가)
- size: medium · aspect: 3:4
- camera: close-up from slightly below, her hands and the note in front, her lower face above.
- composition: Lower half, sharp: Seoyun's hands (faint box-tape marks, white patch on the inside of the LEFT wrist) holding the unfolded small square note — plain blank white paper with fold creases only, no writing at all — catching the thin orange beam of streetlight. Middle: her lips close to the paper, whispering; face cropped at the nose. Top third: dark plain shadow of the room ceiling.
- eyes: (눈 프레임 밖; 입가만)
- emotion: 찔림
- motion/direction: 쪽지 → 입가
- dialogue_ref: 서윤(속삭임) "'독서실 끝나면 문 꼭 잠그고 자.'" (bubble 1 — KM이 길다: letterer가 read_order 1·2로 나눌 수 있음)
- bubbles: 1 (최대 2)
- art_space: Keep the top third of the frame (plain dark shadow of the ceiling) as calm, empty background — room for one long bubble or two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 쪽지에 글씨·선·서명 없음. 내용은 대사로만. 속삭임 = dialogue(letterer 판단).

### panel_006
- scene_id: E03S02 / location: LOC_HOME · mood: M_HOME_NIGHT
- beat: ② · 긴장 5 비 · ⟨K2 · E-MOM⟩ · 두 종이 나란히
- characters: SEOYUN (손만)
- size: insert · aspect: 1:1
- camera: top-down insert into an open pencil case on the low desk.
- composition: Lower three-fifths: an open navy fabric pencil case; inside the lid pocket, two papers side by side — a single sheet of plain blank white paper folded in quarters with one ragged torn edge (the contract) and the small square note folded in four. Seoyun's fingers slide the note in next to it. A few pens. Thin orange streetlight across one corner. Upper two-fifths: the plain dark desk surface.
- eyes: (얼굴 없음)
- emotion: 거짓말을 세는 마음
- motion/direction: 손 → 두 종이
- dialogue_ref: 서윤(생각) "엄마한텐 독서실. 학교엔 남자친구." (bubble 1) · 서윤(생각) "…거짓말만 하나씩 늘어." (bubble 2)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame (plain dark wooden desk surface) as calm, empty background for two stacked thought bubbles.
- split: no
- gap_after: 80
- fx/note: 두 종이 모두 무지. 계약서 = 뜯긴 가장자리로 구별.

### panel_007
- scene_id: E03S02 / location: LOC_HOME · mood: M_HOME_NIGHT
- beat: ② · 긴장 5 비·설 · **⟨복선 TA-D2: "여기"의 이중 의미, 지명 첫 노출(속말)⟩**
- characters: SEOYUN (이불 위에 누움)
- size: medium · aspect: 3:4
- camera: top-down bust, looking straight down at her lying on the mattress.
- composition: Seoyun on her back on top of the blanket in her white shirt, ponytail spread to one side on the pillow, eyes open, one hand resting on her chest. A diagonal beam of orange streetlight crosses the lower part of the frame over the blanket. Edge of the mother's grey fleece shoulder at the screen-right edge, soft. Top third: plain dark floor and pillow edge.
- eyes: Seoyun stares up at the ceiling (toward camera), unfocused, thinking.
- emotion: 혼란, 설렘의 기미
- motion/direction: 정지
- dialogue_ref: 서윤(생각) "'여기 오려고'…" (bubble 1) · 서윤(생각) "여기가 어딘데. 학교? …솔내동 사거리?" (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dark floor and pillow edge above her head) as calm, empty background for two stacked thought bubbles.
- split: no
- gap_after: 320
- fx/note: 선택 첨부 ep02 panel_011. 320 = 밤 → 아침.

--- SCENE BREAK --- (E03S02 → E03S03 교무실 앞 복도, 목 07:55)

### ③ 하람의 절차 — P8~P14 (목 07:55, 복도 ↔ 교무실 교차 편집)

### panel_008
- scene_id: E03S03 / location: LOC_HALLWAY (교무실 문 앞 구간) · mood: M_DAY
- beat: ③ · 긴장 6 비 · **⟨복선 TA-V2: 부르지 않았는데 먼저 와 있다⟩** · P56과 구도 짝
- characters: SEOYUN (OUTFIT_SCHOOL, 전경 뒷모습) · DOHA (OUTFIT_SCHOOL, 안경 없음, 창가에 기댐)
- size: large · aspect: 9:16
- camera: eye level from behind Seoyun at the corner of the corridor, long lens down the corridor to the vanishing point.
- composition: Screen-right foreground: Seoyun from behind, low ponytail, backpack, just turning the corner, stopped. Corridor running into depth: windows along the screen-left wall with low golden morning backlight; along the screen-right wall, a wide grey sliding door of the staff room, slightly open, with a narrow frosted pane and no sign. Midground screen-left: Doha leaning against the window frame directly across from that door, hands in pockets, rim-lit gold against the window, tipping his chin toward the staff-room door. Terrazzo floor with long window shadows. Top quarter: plain cream upper wall and ceiling.
- eyes: Doha looks at Seoyun, then flicks toward the door; Seoyun (back) looks at him.
- emotion: 서윤 의아 / 도하 담담
- motion/direction: 서윤(앞) → 도하(창가) → 교무실 문
- dialogue_ref: 서윤 "…너 왜 여기 있어?" (bubble 1, right, from the foreground) · 도하 "채하람 들어갔어." (bubble 2, left, above Doha)
- bubbles: 2
- art_space: Keep the top quarter of the frame (plain cream upper wall and ceiling of the corridor) as calm, empty background — Seoyun's bubble upper-right, Doha's upper-left.
- split: no
- gap_after: 30
- fx/note: **첨부 ep01 panel_009**(교무실 문과 복도). [PD 보조구] 교무실 문 앞 구간(§1). 다크서클 짙게. 키링은 작고 흐리게. **P56에서 같은 카메라로 창가가 비어 있어야 한다 → P56이 P8을 첨부.**

--- SCENE BREAK --- (교차 편집: E03S03 복도 → E03S04 교무실 안, 문틈 시점)

### panel_009
- scene_id: E03S04 / location: LOC_TEACHERS_OFFICE (문틈 시점) · mood: M_DAY
- beat: ③ · 긴장 6 위 · 공식적 위협 · P57과 구도 짝
- characters: HARAM (뒷모습, 왼팔 진홍 완장, 무지 클립보드) · RYU (담임, 앉아서 정면)
- size: medium · aspect: 3:4
- camera: from the corridor through a hand-wide gap of the half-open sliding door, eye level.
- composition: Both side thirds of the frame: the dark soft edges of the sliding door, framing a narrow vertical strip of the staff room in the middle. In the strip: Haram from behind, very upright, chin-length bob tucked behind the RIGHT ear with a black hairpin, plain crimson armband with no letters on her LEFT upper arm (screen-left), a black clipboard with blank paper held at her side; beyond her, seated at a grey steel desk facing the camera, the homeroom teacher in a grey knit cardigan holding a silver tumbler, mid-sip, looking up at her. Stacked blank papers, a monitor showing plain grey, a potted plant, window blinds behind him. Top third of the strip and the door edges: plain cream wall and the upper door frame.
- eyes: Haram looks at the teacher; the teacher looks up at Haram over his tumbler.
- emotion: 공식적 위협
- motion/direction: 문틈 → 하람 등 → 담임
- dialogue_ref: 하람 "선도부장 채하람입니다." (bubble 1) · 하람 "보고드릴 사안이 있습니다." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the dark upper door edges and plain cream wall above the gap) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: [PD 보조구] 문틈 시점(§1). 비트시트 "커피잔" = 담임 은색 텀블러(식별 표식). 클립보드 무지. **P57이 P9를 첨부.**

### panel_010
- scene_id: E03S04 / location: LOC_TEACHERS_OFFICE · mood: M_DAY
- beat: ③ · 긴장 7 위 · ⟨TB 전제: 지명 없음⟩ · 자기 알리바이가 증거
- characters: HARAM (옆얼굴 클로즈업)
- size: medium · aspect: 3:4
- camera: close-up of Haram in profile facing screen-right, eye level, pen tip sharp in the near foreground.
- composition: Lower foreground, sharp: the tip of a black ballpoint pen resting on the clipboard's blank paper. Haram's profile in the middle-right of the frame, thin silver rectangular glasses, bob with the black hairpin behind the RIGHT ear (her right side faces camera), reading out precisely. Soft background: blinds, the staff room. Top third: plain cream wall.
- eyes: Haram looks ahead at the teacher (screen-right, off-frame), cool and exact.
- emotion: 정확함이 무섭다
- motion/direction: 펜 끝 → 하람 시선(오른쪽)
- dialogue_ref: 하람 "1반 한서윤 학생, 본인 진술입니다." (bubble 1) · 하람 "화요일 밤 9시 57분부터 1시까지, 보호자 없이 외출." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame on the left (plain cream wall behind her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 클립보드 종이 무지(펜 끝만). 하람 오른쪽 옆얼굴이라 완장(왼팔)은 안 보여도 된다.

--- SCENE BREAK --- (교차 편집: E03S04 → E03S03 복도)

### panel_011
- scene_id: E03S03 / location: LOC_HALLWAY (교무실 문 앞 구간) · mood: M_DAY
- beat: ③ · 긴장 7 위 · ⟨C2 긴장 버릇⟩ · 자기 말에 베임 · P59와 매치 짝
- characters: SEOYUN (눈 ECU + 손) · DOHA (흐림)
- size: medium · aspect: 3:4
- camera: split — top: extreme close-up of her eye at the door gap; bottom: insert of her hand at the blazer pocket.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 60%): the dark edge of the sliding door at screen-right, Seoyun's LEFT eye and see-through bangs pressed close to the gap, faint dark circle, pupil tight; behind her, very soft, Doha's navy shoulder by the window. The upper half of this frame is plain soft cream corridor wall. BOTTOM frame (about 40%): her hand half inside the navy blazer pocket, fingertips folding down the corner of a blank white receipt.
- eyes: Seoyun's eye fixed through the gap (screen-right).
- emotion: 자기 말에 베임
- motion/direction: 눈(위) → 손(아래)
- dialogue_ref: 서윤(생각) "…내 입으로 한 말이야." (bubble 1)
- bubbles: 1
- art_space: Keep the top half of the TOP frame (plain soft cream corridor wall above her eye) as calm, empty background.
- split: yes (2칸)
- gap_after: 30
- fx/note: 영수증 무지. **P59가 P11을 첨부**(같은 분할 구도).

--- SCENE BREAK --- (교차 편집: E03S03 → E03S04 교무실 안)

### panel_012
- scene_id: E03S04 / location: LOC_TEACHERS_OFFICE · mood: M_DAY
- beat: ③ · 긴장 7 위 · ⟨R4⟩ · 담임 귀찮음 / 하람 단단함
- characters: RYU (앉음) · HARAM (선 채)
- size: medium-wide · aspect: 4:3
- camera: side two-shot inside the staff room, eye level.
- composition: Screen-left: the teacher seated at his grey steel desk, leaning back, silver tumbler in hand, dry and tired. Screen-right: Haram standing very straight in front of the desk, black clipboard against her chest, crimson armband on her LEFT upper arm facing camera, chin slightly raised. Between them the desk with stacked blank papers and a monitor showing plain grey. Background: window blinds, potted plants, kettle. Top third: plain cream wall and blinds.
- eyes: they look at each other.
- emotion: 담임 귀찮음 / 하람 단단함
- motion/direction: 왼쪽 ↔ 오른쪽 대치
- dialogue_ref: 담임 "연애는 교칙 위반 아니다, 채하람." (bubble 1, upper-left) · 하람 "위반이 아니라 상담 사안입니다. 보호자 없는 심야 외출이니까요." (bubble 2, upper-right; KM 김)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across its width (plain cream wall and the upper blinds) as calm, empty background — the teacher's bubble upper-left, Haram's longer bubble upper-right.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 P9(같은 책상). 첨부: RYU_sheet, HARAM_turnaround.

### panel_013
- scene_id: E03S04 / location: LOC_TEACHERS_OFFICE · mood: M_DAY
- beat: ③ · 긴장 7 위 · **⟨복선 TB-D1 · P-REC: 상담 양식 첫 등장⟩**
- characters: RYU (손) · HARAM (바스트)
- size: medium · aspect: 3:4
- camera: close on the teacher's hand and drawer in the foreground, Haram's bust behind, slightly high angle.
- composition: Lower half, sharp: the teacher's hand pulling a single sheet of plain blank white form paper out of an open grey desk drawer (no lines, no print). Middle-upper, softer: Haram's bust standing beyond the desk, glasses, armband, holding the black clipboard close, adding one more thing. Top fifth: plain cream wall.
- eyes: Haram looks down at the form, measured.
- emotion: 담임 체념 / 하람 보류
- motion/direction: 양식(아래) → 하람(위)
- dialogue_ref: 담임 "…틀린 말은 아니네." (bubble 1, tail → bottom-left / hand) · 하람 "제보 건은, 확인되면 따로 보고드리겠습니다." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall behind Haram's head) as calm, empty background for two stacked bubbles.
- split: no (비트시트 "인서트 + 바스트" = 한 프레임 전경/후경)
- gap_after: 80
- fx/note: 양식 = 완전 무지(P39·P28과 같은 종이).

--- SCENE BREAK --- (교차 편집: E03S04 → E03S03 복도)

### panel_014
- scene_id: E03S03 / location: LOC_HALLWAY (교무실 문 앞 구간) · mood: M_DAY
- beat: ③ · 긴장 6 위 · ep02 P46 "이번엔 절차대로 간다" 메아리
- characters: HARAM (정면 미디엄) · SEOYUN (screen-right) · DOHA (screen-left)
- size: medium · aspect: 3:4
- camera: eye level, frontal medium of Haram walking toward camera down the corridor.
- composition: Centre: Haram just stepped out of the staff-room door, walking toward camera between the two, clipboard under her arm, crimson armband on her LEFT upper arm (on the viewer's right), giving a short cool nod. Screen-left, nearer: Doha by the window, backlit gold. Screen-right, nearer: Seoyun by the staff-room door, stiff. Corridor into depth behind Haram. Top fifth: plain cream upper wall and ceiling.
- eyes: Haram glances sideways at Seoyun — she knows they listened.
- emotion: 차가운 예의
- motion/direction: 하람이 카메라 쪽으로 → 두 사람 사이를 지나감
- dialogue_ref: 하람 "절차대로 했습니다." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream upper corridor wall above Haram's head) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 권장 첨부 P8(같은 복도 축). 첨부: HARAM_turnaround, LEADS_lineup.

--- SCENE BREAK --- (E03S03 복도 → E03S05 교실, 08:20 조회)

### ④ 소환 — P15~P18 (목 08:20)

### panel_015
- scene_id: E03S05 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 7 위 · 공개 소환
- characters: RYU (교탁) · 반 학생들(뒤통수) · SEOYUN (앞줄 뒤통수)
- size: medium-wide · aspect: 4:3
- camera: from behind the front rows at seated eye level, toward the teacher at the front.
- composition: Foreground bottom: backs of heads in navy blazers of the front rows; Seoyun's low ponytail with the black elastic at screen-right among them. Midground centre: the teacher at the lectern closing a plain black attendance book (blank cover), looking straight at her. Behind him: the empty green chalkboard, a plain grey wall speaker, the wall clock with no numerals. Wide windows on the screen-left with cream curtains, warm low morning light. Top third: the plain chalkboard and cream wall.
- eyes: the teacher looks at Seoyun (screen-right foreground).
- emotion: 공개 소환
- motion/direction: 담임 → 서윤 뒤통수
- dialogue_ref: 담임 "자, 조용." (bubble 1) · 담임 "한서윤, 점심시간에 상담실로 와." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain empty green chalkboard and cream wall above the teacher) as calm, empty background for two bubbles.
- split: no
- gap_after: 30
- fx/note: 칠판·출석부 무지. 엑스트라 반 학생은 주요 인물 헤어 특징 금지.

### panel_016
- scene_id: E03S05 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 5 코 · 소란(작게)
- characters: TAEMIN · YERIN
- size: medium · aspect: 3:4
- camera: two-shot at their back-row desks, eye level.
- composition: Screen-left: Taemin (cowlick, rolled sleeves, blazer on his chair) leaning forward, mouth too open, whispering too loud. Screen-right: Yerin (cream cardigan, big white claw clip) jabbing his ribs with her elbow, finger to her lips. Back-wall grey lockers behind. Top fifth: plain cream wall above the lockers.
- eyes: Taemin looks toward the front (Seoyun); Yerin glares at Taemin.
- emotion: 소란(작게)
- motion/direction: 태민 ← 예린 팔꿈치
- dialogue_ref: 태민 "상담실? 한서윤이?" (bubble 1, upper-left) · 예린 "쉿!" (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above the lockers) as calm, empty background — Taemin's bubble left, Yerin's right.
- split: no
- gap_after: 30
- fx/note: 첨부 CLASSMATES_sheet.

### panel_017
- scene_id: E03S05 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 8 위 · 타이머(오늘 중 보호자 연락) · E-MOM 위협
- characters: RYU (바스트)
- size: medium · aspect: 3:4
- camera: bust of the teacher, slight low angle from the students' seats.
- composition: The teacher centred from the chest up, grey knit cardigan, blank white ID card on a lanyard, one hand resting on the plain attendance book, flat calm face. Behind: the empty green chalkboard, softly lit. Top fifth: plain chalkboard.
- eyes: the teacher looks down at Seoyun (toward camera), flat.
- emotion: 시한 선고
- motion/direction: 정면
- dialogue_ref: 담임 "그리고 오늘 중으로 어머님께 전화드린다." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (the plain empty chalkboard above his head) as calm, empty background.
- split: no
- gap_after: 0
- fx/note: 첨부 RYU_sheet.

### panel_018
- scene_id: E03S05 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ④ · 긴장 8 위 · ⟨C2 · E-MOM⟩ · 공포를 누름
- characters: SEOYUN (얼굴 + 책상 밑 손)
- size: medium · aspect: 3:4
- camera: low side angle at desk height, beside her desk, so both her face above the desk edge and her hands below it are in one frame.
- composition: The desk top as a horizontal band across the middle of the frame. Above it, upper-middle: Seoyun's face in three-quarter, composed mask cracking, jaw tight, faint dark circles. Below it, lower half, sharp: her hands in her lap under the desk folding a tiny crane out of a silvery-white gum wrapper, fingers quick. Top fifth: plain cream wall and window light.
- eyes: Seoyun stares straight ahead, not blinking.
- emotion: 공포를 누름
- motion/direction: 얼굴(위) → 손(아래)
- dialogue_ref: 서윤(생각) "엄마한테 전화 가면…" (bubble 1) · 서윤(생각) "독서실 거짓말, 다 들켜." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame on the left (plain cream wall and soft window light beside her head) as calm, empty background for two stacked thought bubbles.
- split: no (비트시트 "얼굴 ECU + 손 인서트" = 낮은 측면 한 프레임)
- gap_after: 160
- fx/note: 껌 포장지 학 = 판별 불필요(접는 중). 포장지 무지.

--- SCENE BREAK --- (E03S05 조회 → E03S06 1교시 뒤 쉬는 시간)

### ⑤ 밸브 — P19~P21 (1교시 뒤 쉬는 시간)

### panel_019
- scene_id: E03S06 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 4 코 · ⟨C2: 학 일곱 마리, 맨 앞 한 마리 두 특징⟩
- characters: SEOYUN (손·팔, 얼굴 일부) · YERIN
- size: medium-wide · aspect: 4:3
- camera: high angle over Seoyun's desk, the crane row sharp in the foreground.
- composition: Lower half: on the wooden desk top, a neat row of seven tiny paper cranes, some silvery-white gum wrapper, some blank white receipt paper; the front one large enough to read its two details — the head tip folded down into a small hook and the tail tip folded down once. Seoyun's arm and the edge of her blazer at the bottom edge. Screen-right: Yerin leaning in over the desk, cream cardigan sleeves over her hands, big white claw clip, round eyes, mouth open in shock, then a loyal thumbs-up. Screen-left half above the desk: plain floor and cream wall softly out of focus.
- eyes: Yerin looks at the crane row, then at Seoyun.
- emotion: 과장된 걱정
- motion/direction: 학 줄(왼쪽→오른쪽) → 예린 얼굴
- dialogue_ref: 예린 "헐. 너 몇 개째야?" (bubble 1) · 예린 "상담 별거 아냐! 나도 받아 봤어." (bubble 2)
- bubbles: 2
- art_space: Keep the left half of the frame above the desk (soft plain cream wall and floor, top 55%) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 학 = 서윤 두 특징(맨 앞 한 마리 판별). 첨부 PROPS_sheet, CLASSMATES_sheet.

### panel_020
- scene_id: E03S06 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 3 코 · 반 개그(회차 바닥)
- characters: TAEMIN · YERIN · SEOYUN
- size: medium-wide · aspect: 4:3
- camera: three-person medium at desk height, eye level.
- composition: Centre-bottom: Seoyun with her forehead down on the desk beside the crane row, ponytail flopped, ears red. Screen-left behind her: Taemin leaning in with a big grin. Screen-right: Yerin swinging her cardigan-sleeved hand to smack his back — slight motion blur on her sleeve and his cowlick (no drawn speed lines). Wide window light from the left. Top third: plain cream wall and curtains.
- eyes: Taemin grins at Yerin; Yerin glares; Seoyun's face hidden.
- emotion: 반 개그
- motion/direction: 태민 ← 예린 손
- dialogue_ref: 태민 "넌 짝사랑 상담이었잖아." (bubble 1, upper-left) · 예린 "야!" (bubble 2, upper-right, shout 가능)
- bubbles: 2
- art_space: Keep the top third of the frame across its width (plain cream wall and curtains) as calm, empty background — Taemin's bubble left, Yerin's right.
- split: no
- gap_after: 80
- fx/note: 비트시트 "동세선" → 모션 블러(만화 기호 금지). 첨부 CLASSMATES_sheet, SEOYUN_expressions.

### panel_021
- scene_id: E03S06 / location: LOC_CLASSROOM · mood: M_DAY
- beat: ⑤ · 긴장 5 비 · **⟨복선 TA-V3: 그는 그녀의 버릇을 본다⟩** · 결심
- characters: DOHA (창가 자리) · (서윤 시점)
- size: medium · aspect: 3:4
- camera: Seoyun's POV from her desk, eye level, across the room to the window seat.
- composition: Foreground bottom, out of focus: the blurred row of small white cranes on her desk. Midground screen-left: Doha at his window-side desk, half turned, chin on his hand, already looking at her crane row; no glasses; warm window light from the left behind him rims his messy hair. His backpack hangs on the desk hook with the LEFT strap facing away. Classmates soft in between. Top fifth: the plain cream wall and curtain top.
- eyes: Doha's eyes rise from the cranes to meet hers (camera).
- emotion: 결심
- motion/direction: 흐린 학(아래) → 도하 눈(위 왼쪽)
- dialogue_ref: 서윤(생각) "…알리바이엔 사람이 둘이야." (bubble 1)
- bubbles: 1
- art_space: Keep the top-right fifth of the frame (plain cream wall above the classmates) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 키링 안 보이게. 창 = screen-left(교실 방향 규약).

--- SCENE BREAK --- (E03S06 → E03S07 4교시 끝, 계단참)

### ⑥ 부탁 — P22~P27 (점심 직전 ~ 점심)

### panel_022
- scene_id: E03S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 5 설 · 관계 변화(처음 하는 부탁) · 처음으로 **같은 칸**
- characters: SEOYUN (screen-right) · DOHA (screen-left)
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, stairs rising from screen-left (low) to screen-right (high) — same camera as ep02 panel_039.
- composition: On the top landing below the locked grey steel rooftop door (upper right): Seoyun screen-right, still gripping the cuff of Doha's navy blazer sleeve where she dragged him up; Doha screen-left beside her on the same level, a head taller, looking down at her hand. Two old desks and chairs stacked against the wall behind. Dusty window at upper right with soft apricot backlight, cool violet shadows on the worn concrete steps falling away at the lower left. Top third on the left: plain dim stairwell wall.
- eyes: Seoyun looks at the floor, then up at him; Doha looks at her hand on his sleeve.
- emotion: 처음 하는 부탁
- motion/direction: 계단(왼쪽 아래) → 같은 칸의 두 사람
- dialogue_ref: 서윤 "같이 들어가 줘." (bubble 1)
- bubbles: 1
- art_space: Keep the top-left third of the frame (plain dim stairwell wall above the stacked desks) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: **첨부 ep02 panel_039**. ep01 P22(도하 위) → ep02 P38(서윤 위) → **ep03 P22 같은 칸**. 노을 하늘 없음(점심 직전). 소매 잡기까지(신체 접촉 수위).

### panel_023
- scene_id: E03S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 5 설 · ⟨K 계약⟩ · 자존심 / 받아 줌
- characters: SEOYUN (옆얼굴 클로즈업) · DOHA (화면 왼쪽 반쪽)
- size: medium · aspect: 3:4
- camera: close-up of Seoyun in profile facing screen-left, Doha's face half cut off at the screen-left edge.
- composition: Screen-right/centre: Seoyun's profile, eyes sliding away from him, ears turning red, two loose strands at the temple lit apricot. Screen-left edge: half of Doha's face, one eyebrow raised under his bangs, the faintest lift at one corner of the mouth. Hazy apricot rim light, violet shadow. Top third: plain dim wall.
- eyes: Seoyun looks away (down-right); Doha looks at her.
- emotion: 자존심 / 받아 줌
- motion/direction: 서윤 시선 회피 ↔ 도하 눈썹
- dialogue_ref: 서윤 "…계약상." (bubble 1, upper-right) · 도하 "계약상." (bubble 2, upper-left)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall above both heads) as calm, empty background — Seoyun's bubble right, Doha's left.
- split: no
- gap_after: 30
- fx/note: 첨부 LEADS_lineup, SEOYUN_expressions.

### panel_024
- scene_id: E03S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 6 비 · ⟨TA-D3 준비⟩ · 통제하려는 불안
- characters: SEOYUN (바스트, 손가락 전경)
- size: medium · aspect: 3:4
- camera: bust of Seoyun from Doha's side, slight low angle, her raised hand sharp in the foreground.
- composition: Foreground lower-left, sharp: Seoyun's RIGHT hand with one index finger raised (exactly one finger), blazer sleeve sliding back. Behind it: her bust, chin up, eyes narrowed, counting on her fingers, apricot backlight on her hair. Top third: plain dim wall and the soft glow of the dusty window.
- eyes: Seoyun looks up at Doha (camera), sharp.
- emotion: 통제하려는 불안
- motion/direction: 손가락 → 얼굴
- dialogue_ref: 서윤 "첫째, 선생님 앞에선 아무 말도 하지 마." (bubble 1) · 서윤 "거짓말 못 하겠으면." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall and soft window glow above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 손가락 정확히 한 개(수 오류 → REGEN). 첨부 SEOYUN_turnaround, SEOYUN_expressions.

### panel_025
- scene_id: E03S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 7 비 · **⟨복선 TA-D3 · 이중의미: 안심 / 경고⟩**
- characters: DOHA (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Doha, eye level (they stand on the same level), soft backlight.
- composition: Doha's face centred, bangs over his eyebrows, no glasses, flat calm expression, the dusty window behind his head giving an apricot rim on his hair and shoulders, face in soft shade. Background: the dim stairwell, violet shadow. Top fifth: plain soft window glow.
- eyes: Doha looks straight at Seoyun (camera), steady.
- emotion: 고요한 원칙
- motion/direction: 정면 정지
- dialogue_ref: 도하 "거짓말은 안 해." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain hazy window glow above his head) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 첨부 DOHA_turnaround, DOHA_expressions. 재독 시 P32·P34와 같은 얼굴로 읽혀야 한다(표정 디폴트).

### panel_026
- scene_id: E03S07 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑥ · 긴장 7 비 · **⟨복선 TA-D4⟩** · 서윤 불안 / 도하 단단함
- characters: SEOYUN · DOHA
- size: medium · aspect: 3:4
- camera: two-shot, eye level, slightly tilted toward Seoyun's side.
- composition: Seoyun screen-right, larger and nearer, leaning in, half-pointing at him; Doha screen-left, a head taller, unmoved, hands in pockets. Frame tilted a few degrees so the composition leans toward her. Apricot backlight between them from the window; the rooftop door at the top edge. Top third: plain dim wall.
- eyes: Seoyun glares up; Doha looks down at her, calm.
- emotion: 서윤 불안 / 도하 단단함
- motion/direction: 서윤 → 도하
- dialogue_ref: 서윤 "…그러니까 입 다물고 있으라고." (bubble 1, upper-right) · 도하 "물어보면 대답은 해." (bubble 2, upper-left)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stairwell wall and the grey rooftop door's plain upper part) as calm, empty background — Seoyun's bubble right, Doha's left.
- split: no
- gap_after: 160
- fx/note: 첨부 LEADS_lineup.

--- SCENE BREAK --- (E03S07 계단참 → E03S08 점심 복도)

### panel_027
- scene_id: E03S08 / location: LOC_HALLWAY (교무실 쪽 구간, 끝에 상담실 문) · mood: M_DAY
- beat: ⑥ · 긴장 6 위 · **⟨복선 TB-V1: 점심 순찰 중인 하람⟩** · ⟨K2 손잡기⟩
- characters: SEOYUN · DOHA (뒷모습, 손잡음) · HARAM (소실점 끝, 작게)
- size: large · aspect: 9:16
- camera: eye level from behind the two, long lens down the corridor to the vanishing point.
- composition: Lower half foreground: Seoyun (screen-right) and Doha (screen-left) from behind, walking away from camera hand in hand — Doha's RIGHT hand holding her LEFT hand — her back stiff, his loose. The corridor running deep ahead: windows along one side with midday light, classroom-type sliding doors on the other; at the far end, the frosted-glass door of the counselling room with no sign. At the very end of the corridor, small but clear: Haram on lunch patrol, crimson armband on her left arm, black clipboard, her head turning toward them. Upper part: plain cream wall and ceiling lights receding.
- eyes: Haram (tiny) turns her head toward the two; the two look ahead.
- emotion: 행진, 저음의 불안
- motion/direction: 두 사람 뒷모습 → 소실점(상담실 문·하람)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: **반전 B 시각 단서 1/3 — 빠뜨리지 말 것.** 하람은 작게(존재만 읽히게). [PD 보조구] 상담실 쪽 끝(§1). 키링 판별 불가.

--- SCENE BREAK --- (E03S08 복도 → E03S09 상담실, 12:40)

### ⑦ 상담실 정점 — P28~P41 (목 12:40) · LOC_COUNSEL_ROOM · M_COUNSEL

> 이 씬 전 패널: LOC_COUNSEL_ROOM 토큰(style-bible §7-2) 단어 그대로 + M_COUNSEL 빛 문구. 방향은 §3-2. 유리문 실루엣 보조구는 P29·P41에만. 첨부 기본 = LEADS_lineup, RYU_sheet. **P29를 먼저 만들고** 방 배치 기준으로 쓴다.

### panel_028
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 6 위·코 · ⟨이중의미: 조항 2, 학교 안 = 연인, 참⟩
- characters: RYU (전경 어깨·손) · DOHA (문가, screen-left) · SEOYUN (문가, screen-right)
- size: medium · aspect: 3:4
- camera: master angle — the teacher's eye line from his window-side seat, looking across the round table at the door.
- composition: Foreground bottom, sharp: the round light-wood table with a single blank white form and a pen in front of the teacher's hand, the box of plain white tissues, his silver tumbler. Midground: the frosted-glass door standing open; in the doorway Doha (screen-left) and Seoyun (screen-right), their hands just letting go. Doha unbothered, as if it is obvious; Seoyun stiff. The frosted glass of the door shows only soft blurred corridor light — no figure. Above the door: the wall clock with tick marks and no numerals. Thin blind stripes of pale light across the table. Top fifth: plain cream wall around the clock.
- eyes: Doha looks at the teacher (camera), calm; Seoyun looks at the floor.
- emotion: 담임 의외 / 도하 태연
- motion/direction: 전경 양식 → 문가 두 사람
- dialogue_ref: 담임(전경, 프레임 밖 얼굴) "한서윤만 불렀는데." (bubble 1, tail → bottom edge) · 도하 "남자친구라서요." (bubble 2, above Doha, left)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall around the clock above the door) as calm, empty background for two bubbles.
- split: no
- gap_after: 80
- fx/note: **첨부 P29**(방 배치) + LEADS_lineup + RYU_sheet. 유리문 비움(실루엣 없음). 도하 백팩 없음.

### panel_029
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 6 위 · **⟨복선 TB-V2: 문 밖의 하람 — 실루엣 멈춤⟩** · **상담실 마스터 컷**
- characters: RYU (screen-left 전경, 손짓) · DOHA (screen-left 중경, 앉는 중) · SEOYUN (screen-right 중경, 앉는 중) · 실루엣(유리문 너머)
- size: medium-wide · aspect: 4:3
- camera: master angle, wide from the window side over the teacher's shoulder, looking toward the frosted-glass door, eye level.
- composition: Screen-left foreground, soft: the teacher's grey cardigan shoulder and his hand gesturing to the chairs with a sigh. Centre: the round light-wood table with four chairs — the empty fourth chair beside the teacher in the near foreground. Midground: Doha (screen-left) and Seoyun (screen-right) sitting down on the two door-side chairs, backs to the door. Background, centre to slightly left, between their heads: the closed frosted-glass door with no sign; behind the frosted glass, small and out of focus, the blurred faceless silhouette of a girl in a navy blazer with a smear of crimson at her left upper arm, stopped mid-step. Wall clock with no numerals above the door; small potted plant in the window-side corner at the edge; thin parallel stripes of pale blind light across the table and their faces. Top third: plain cream wall above the door.
- eyes: the two look at the teacher; nobody looks at the door.
- emotion: 착석, 압박 시작
- motion/direction: 담임 손짓 → 의자 → (깊이) 유리문 실루엣
- dialogue_ref: 담임 "…앉아. 둘 다." (bubble 1, tail → screen-left)
- bubbles: 1
- art_space: Keep the top third of the frame on the left (plain cream wall above the teacher's shoulder) as calm, empty background — keep the bubble off the frosted-glass silhouette.
- split: no
- gap_after: 80
- fx/note: **반전 B 시각 단서 2/3.** LOC_COUNSEL_ROOM 토큰 + P29 실루엣 보조구(§7-2) 그대로. 실루엣 = 얼굴·안경·머리 디테일 없음, 진홍 덩어리만. 첨부 LEADS_lineup + RYU_sheet(실루엣 첨부 없음). **P28·P31·P33·P37·P38·P41이 이 이미지를 첨부.**

### panel_030
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 8 위 · 심문(지명 없이)
- characters: RYU (바스트) · (전경 서윤 어깨, screen-left)
- size: medium · aspect: 3:4
- camera: reverse shot from the door side toward the window, eye level, the pen tip sharp in the foreground.
- composition: Foreground bottom, sharp: the pen held upright on the blank white form on the table. Screen-left edge foreground, soft: Seoyun's navy blazer shoulder and ponytail. Centre: the teacher's bust, grey cardigan, blank ID card, light stubble, slightly backlit by the window behind him; behind him the window with white blinds half lowered, pale stripes. Top third: the plain upper part of the white blinds.
- eyes: the teacher looks across at Seoyun (screen-left), tired but sharp.
- emotion: 심문
- motion/direction: 펜 끝 → 담임 → 서윤(왼쪽)
- dialogue_ref: 담임 "채하람 보고로는 화요일 밤, 9시 57분부터 1시." (bubble 1) · 담임 "어디서, 뭐 했어?" (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain upper part of the white blinds above his head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: **역샷 기준 컷**(P35·P36·P39·P40이 첨부 권장). 유리문 안 보임. 양식 무지.

### panel_031
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 8 위 · 말문이 막힘
- characters: SEOYUN (얼굴 + 탁자 밑 손)
- size: medium · aspect: 3:4
- camera: low side angle at table height from the window side, so her face above the table edge and her hands below it are in one frame.
- composition: The table edge as a horizontal band across the middle. Above it: Seoyun's face in three-quarter, lips parted then pressing shut, eyes wide, pale blind stripes across her cheek. Below it, sharp: her hands in her lap gripping the hem of her check skirt, knuckles white, the white patch on the inside of her LEFT wrist peeking from the sleeve. Background: the frosted door softly blurred with only plain corridor light (no figure).
- eyes: Seoyun looks at the teacher, frozen.
- emotion: 말문이 막힘
- motion/direction: 얼굴(위) → 손(아래)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no (비트시트 "얼굴 ECU + 손 인서트" = 낮은 측면 한 프레임)
- gap_after: 30
- fx/note: 권장 첨부 P29. 첨부 SEOYUN_expressions(얼어붙음).

### panel_032
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 8 비 · **⟨복선 TB-D2: 지명을 말한 사람 = 도하 · W1⟩**
- characters: DOHA (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Doha from the teacher's eye line (master direction), eye level.
- composition: Doha's face centred, no glasses, bangs over his eyebrows, flat calm expression, lips just parted after speaking; faint pale stripes of blind light across his face and shoulders. Behind him, very soft: the frosted-glass door with only plain blurred corridor light. Top fifth: plain cream wall above the door.
- eyes: Doha looks straight at the teacher (camera), unblinking.
- emotion: 담담
- motion/direction: 정면
- dialogue_ref: 도하 "솔내동 사거리요." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream wall above the door behind him) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **P34가 이 이미지를 첨부**(같은 얼굴·같은 구도). 첨부 DOHA_expressions, RYU_sheet는 불필요(담임 없음) → DOHA_turnaround + DOHA_expressions.

### panel_033
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 8 위 · 경악("입 다물라고 했잖아")
- characters: SEOYUN (옆얼굴 ECU)
- size: insert · aspect: 1:1
- camera: extreme close-up of Seoyun's face from the teacher's side (master direction), her head snapping toward screen-left (toward Doha, who sits on her RIGHT, screen-left in this direction).
- composition: Seoyun's face turning sharply from the teacher to screen-left, into near profile, pupils wide, lips parted, the low ponytail and two temple strands flung out with slight motion blur (no drawn speed lines). Pale blind stripes across the cheek. Background plain soft cream. Upper quarter: plain cream wall.
- eyes: Seoyun's wide eyes snap to Doha (screen-left, off-frame).
- emotion: 경악
- motion/direction: 정면 → 왼쪽(도하 쪽)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: 비트시트 "동세선" → 머리카락 모션 블러. 마스터 방향(§3-2): 도하 = 화면 왼쪽 = 서윤의 RIGHT 쪽. 서윤이 자기 오른쪽(화면 왼쪽)으로 고개를 홱 돌린다. 160 = 반전 A 직전 숨.

### panel_034
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 **9** 비·설 · **⟨반전 A 정점 · C11 심기 · 이중의미⟩** · 단독 대형 · **캡처 컷 후보**
- characters: DOHA (정면 클로즈업)
- size: full-bleed · aspect: 9:16
- camera: frontal close-up of Doha from the teacher's eye line, eye level — the same face and framing as panel_032, pulled a little closer.
- composition: Doha's face in the middle of the tall frame, calm and steady, lips slightly parted; the clearest parallel stripes of pale blind light and shadow fall across his face, neck and shoulders (stripes never covering his eyes). Navy blazer, white shirt, tie slightly low. Background reduced to soft cream and the blurred frosted door with plain light only. Top quarter: plain cream wall above his head.
- eyes: Doha keeps his eyes on the teacher (camera), unwavering — he does not look at Seoyun.
- emotion: 고요한 진실
- motion/direction: 정면 정지(시간 정지)
- dialogue_ref: 도하 "제가 밤마다 거기 가요." (bubble 1) · 도하 "서윤이 보러요." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame (plain cream wall above his head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 320
- fx/note: **반전 A 단독**(앞 P33 gap 160, 뒤 320). **첨부 P32** + DOHA_expressions(고백의 정면). M_COUNSEL 줄무늬가 가장 또렷한 컷(style-bible §3-2). 유리문 실루엣 없음.

### panel_035
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 5 코 · 반전 A의 대가(도하도 기록) · 건조한 유머
- characters: RYU (바스트) · DOHA (전경 어깨, screen-right)
- size: medium · aspect: 3:4
- camera: reverse shot from the door side over Doha's shoulder toward the teacher, eye level.
- composition: Screen-right foreground, soft: Doha's navy blazer shoulder and the back of his messy hair. Centre-left: the teacher's bust, pen stopped over the blank form, a long exhale, eyes half-closed in dry resignation, one hand rubbing his brow. Behind him: the white blinds half lowered. Top third: the plain upper blinds.
- eyes: the teacher looks at Doha (screen-right) from under heavy lids.
- emotion: 건조한 유머
- motion/direction: 담임 → 도하 어깨
- dialogue_ref: 담임 "…백도하, 너도 기록이다." (bubble 1, left) · 도하 "네." (bubble 2, small, right, tail → Doha's shoulder)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain upper part of the white blinds) as calm, empty background — the teacher's bubble left, Doha's short bubble right.
- split: no
- gap_after: 80
- fx/note: 역샷 → 도하 = 화면 오른쪽(§7-2-4). 권장 첨부 P30.

### panel_036
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 8 위 · 타이머(보호자 연락) · 친절한 위협
- characters: RYU (미디엄) · (전경 휴대폰)
- size: medium · aspect: 3:4
- camera: reverse shot from the door side, slightly toward Seoyun's chair (screen-left), eye level, the phone in the foreground.
- composition: Foreground bottom, sharp: a smartphone lying face down on the table, seen from the back (plain case, no logo), the teacher's fingers resting on it. Centre: the teacher turned toward screen-left (toward Seoyun), leaning in, voice softened, kind but heavy. Behind him the white blinds. Top third: the plain upper blinds.
- eyes: the teacher looks at Seoyun (screen-left, off-frame), gentle.
- emotion: 친절한 위협
- motion/direction: 휴대폰 → 담임 → 왼쪽(서윤)
- dialogue_ref: 담임 "어머님은 아시니?" (bubble 1) · 담임 "지금 전화드릴까?" (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain upper part of the white blinds) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 휴대폰 뒷면만. 권장 첨부 P30.

### panel_037
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 8 비 · **⟨반전 A 2단 · E-MOM · 이중의미⟩** · 사실을 반만
- characters: SEOYUN (바스트, 무릎 위 주먹)
- size: medium · aspect: 3:4
- camera: bust of Seoyun from the teacher's side (master direction), slightly high angle.
- composition: Seoyun centred, eyes lowered, shoulders drawn in, both fists resting on her knees at the bottom of the frame, the white patch on the inside of her LEFT wrist showing at the sleeve. Pale blind stripes across her blazer. Behind her: the frosted-glass door softly blurred with plain corridor light only. Top third: plain cream wall above the door.
- eyes: Seoyun looks down at her fists, then forces her eyes up halfway.
- emotion: 수치, 결단
- motion/direction: 위에서 내려다봄 → 주먹
- dialogue_ref: 서윤 "엄마는…" (bubble 1) · 서윤 "제가 독서실에 있는 줄 알아요." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream wall above the frosted door) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 권장 첨부 P29 + SEOYUN_expressions. 유리문 실루엣 없음.

### panel_038
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 7 비 · 반전 A 대가(담임이 "독서실"을 앎) · 오해가 알리바이를 굳힘
- characters: DOHA (screen-left) · SEOYUN (screen-right) · RYU (프레임 밖, 시점)
- size: medium-wide · aspect: 4:3
- camera: master angle, the teacher's eye line, two-shot of the pair side by side across the table.
- composition: Doha screen-left and Seoyun screen-right seated next to each other on the door-side chairs, the round table in the foreground with the blank form and the tissue box; Doha calm, Seoyun stiff with her eyes down, not correcting anything. Blind stripes across both. Behind them the frosted door with plain light only, the clock above. Top third: plain cream wall around the clock.
- eyes: Doha looks at the teacher (camera); Seoyun looks at the table.
- emotion: 오해가 알리바이를 굳힘
- motion/direction: 담임 시선이 두 사람을 번갈아(왼쪽 ↔ 오른쪽)
- dialogue_ref: 담임(프레임 밖) "…남자친구 만난다곤 말 못 했겠네." (bubble 1, tail → bottom edge / camera side)
- bubbles: 1
- art_space: Keep the top third of the frame (plain cream wall around the clock above the door) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: **첨부 P29** + LEADS_lineup.

### panel_039
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 7 위 · **⟨복선 P-REC 심기: 기록 = 권력⟩**
- characters: RYU (손 + 눈)
- size: medium-wide · aspect: 4:3
- camera: reverse direction, low close angle at table height from across the table, the pen hand sharp.
- composition: Right half of the frame: lower right, sharp — the teacher's hand writing on the blank white form with a pen (only the movement of the pen, no letters or lines appear on the paper); upper right — his face cropped from the nose up, tired eyes lowered to the form, a strip of pale blind stripes across his brow. Left half: the window with white blinds half lowered, soft and plain.
- eyes: the teacher's eyes on the form.
- emotion: 기록이라는 권력
- motion/direction: 눈(오른쪽 위) → 펜(오른쪽 아래)
- dialogue_ref: 담임 "보호자 연락은 이번만 미룬다." (bubble 1) · 담임 "대신 상담 기록은 남긴다." (bubble 2)
- bubbles: 2
- art_space: Keep the left half of the frame (the plain soft white blinds, from top to about 70% down) as calm, empty background for two stacked bubbles.
- split: no (비트시트 "양식·손 클로즈업 + 눈 띠 컷" = 한 프레임 오른쪽 위/아래)
- gap_after: 30
- fx/note: 양식에 글자·선 없음(펜 움직임만). 권장 첨부 P30.

### panel_040
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 7 위 · 타이머(진로 상담 주간 = ep06) · 유예, 그러나 시계가 생김
- characters: RYU (클로즈업)
- size: medium · aspect: 3:4
- camera: reverse shot, close-up of the teacher, his pen pointing toward Seoyun (screen-left, toward the lens's left side), pen tip sharp in the foreground.
- composition: Foreground lower-left, sharp: the tip of the pen aimed at Seoyun. Centre: the teacher's face, serious and quiet, light stubble, eyes on her. Behind him: the white blinds half lowered with pale stripes. Top third: plain upper blinds.
- eyes: the teacher looks at Seoyun (screen-left, just off the lens).
- emotion: 유예, 그러나 시계가 생김
- motion/direction: 펜 끝(왼쪽 아래) → 담임 눈
- dialogue_ref: 담임 "진로 상담 주간까지, 어머님께 네가 직접 말씀드려." (bubble 1) · 담임 "그때 내가 확인한다." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain upper part of the white blinds) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 권장 첨부 P30 + RYU_sheet.

### panel_041
- scene_id: E03S09 / location: LOC_COUNSEL_ROOM · mood: M_COUNSEL
- beat: ⑦ · 긴장 6 비 · **⟨복선 TB-V3: 문 밖에서 들었다 — 실루엣 멀어짐⟩** · 넘겼다는 안도 / 독자만 아는 불안
- characters: RYU (screen-left 전경 어깨) · DOHA (screen-left 중경) · SEOYUN (screen-right 중경) · 실루엣(유리문 너머)
- size: medium-wide · aspect: 4:3
- camera: master angle — exactly the same camera as panel_029: wide from the teacher's window side, the two in the midground, the frosted door deep in the background.
- composition: Same layout as panel_029: teacher's cardigan shoulder soft at screen-left foreground (pen now laid down on the blank form), the empty fourth chair, the round table; Doha (screen-left) and Seoyun (screen-right) seated, Seoyun's head dipped as she answers small, her shoulders loosening. Deep background between them: the closed frosted-glass door; behind the frosted glass, small and out of focus, the same blurred faceless silhouette with a smear of crimson at the upper arm, quietly moving away toward the right edge of the glass, fainter than before. Clock above the door, blind stripes across the table. Top third: plain cream wall above the door.
- eyes: Seoyun looks down; Doha looks at the teacher; nobody looks back at the door.
- emotion: 안도 / 독자만 아는 불안
- motion/direction: 두 사람(중경) → 유리문(깊이) → 실루엣이 오른쪽으로 빠짐
- dialogue_ref: 서윤 "…네." (bubble 1, small, above Seoyun, right)
- bubbles: 1
- art_space: Keep the top-right part of the frame (plain cream wall above Seoyun and to the right of the clock, top third) as calm, empty background — keep the bubble off the frosted-glass silhouette.
- split: no
- gap_after: 160
- fx/note: **반전 B 시각 단서 3/3.** **첨부 P29**(같은 카메라, 실루엣 위치만 변화) + LEADS_lineup + RYU_sheet. P41 실루엣 보조구(§7-2) 그대로. 비트시트 "두 사람 뒤에서 본 와이드"는 art-director §7-2-3 결정대로 담임 쪽 와이드로 바꿈.

--- SCENE BREAK --- (E03S09 상담실 → E03S10 상담실 앞 복도)

### ⑧ 코미디 — P42~P44 (점심 복도)

### panel_042
- scene_id: E03S10 / location: LOC_HALLWAY (상담실 문 앞) · mood: M_DAY
- beat: ⑧ · 긴장 4 코·설 · "서윤이?"
- characters: SEOYUN (앞, screen-right) · DOHA (screen-left)
- size: medium · aspect: 3:4
- camera: two-shot medium in the corridor, eye level, favouring Seoyun.
- composition: Behind them: the frosted-glass door of the counselling room just shut (plain, no figure behind it). Seoyun nearer, screen-right, has grabbed the cuff of Doha's blazer sleeve to stop him, face and ears bright red, glaring up. Doha screen-left, stopped mid-step, flat. Corridor windows with warm midday light on one side. Top third: plain cream upper wall.
- eyes: Seoyun glares up at Doha; Doha looks down at her.
- emotion: 민망한 분노
- motion/direction: 서윤 손 → 도하 소매
- dialogue_ref: 서윤 "…서윤이?" (bubble 1) · 서윤 "언제부터 서윤이야." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper corridor wall) as calm, empty background for two stacked bubbles on the right.
- split: no
- gap_after: 30
- fx/note: [PD 보조구] 상담실 쪽 끝(§1). 첨부 LEADS_lineup, SEOYUN_expressions(당황).

### panel_043
- scene_id: E03S10 / location: LOC_HALLWAY (상담실 문 앞) · mood: M_DAY
- beat: ⑧ · 긴장 4 코·설 · 무표정 개그 · 호칭 "한서윤" 복귀
- characters: DOHA (바스트 정면) · SEOYUN (전경 정수리)
- size: medium · aspect: 3:4
- camera: bust of Doha from Seoyun's eye line, slight low angle, the top of her head in the foreground.
- composition: Bottom foreground, soft: the top of Seoyun's head (see-through bangs, the low ponytail's elastic) and her very red ears. Centre: Doha's bust facing camera, deadpan, eyebrows level, no glasses. Behind him: corridor windows, warm light. Top third: plain cream wall.
- eyes: Doha looks down at her (camera), deadpan.
- emotion: 무표정 개그 / 설렘
- motion/direction: 정면
- dialogue_ref: 도하 "선생님 앞이잖아." (bubble 1) · 도하 "싫으면 다시 한서윤." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper corridor wall above his head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 비트시트 "서윤 머리 위 김" → 새빨간 귀(만화 기호 금지). 첨부 DOHA_expressions(무표정 개그).

### panel_044
- scene_id: E03S10 / location: LOC_HALLWAY (상담실 문 앞) · mood: M_DAY
- beat: ⑧ · 긴장 5 설 · 고마움을 돌려 말함
- characters: SEOYUN (앞모습 미디엄) · DOHA (후경)
- size: medium · aspect: 3:4
- camera: front medium of Seoyun walking toward camera, eye level, Doha behind.
- composition: Seoyun nearer and centred, striding ahead fast, chin up, ears still red, eyes away. Behind her in the corridor, softer: Doha following a few steps back, hands in his pockets, the faintest lift at one corner of his mouth. Window light down the corridor. Top fifth: plain cream upper wall.
- eyes: Seoyun looks ahead (past camera); Doha looks at her back.
- emotion: 고마움을 돌려 말함
- motion/direction: 서윤이 카메라 쪽으로 → 뒤의 도하
- dialogue_ref: 서윤 "…됐어." (bubble 1) · 서윤 "오답노트, 내일 줄게." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (plain cream upper corridor wall above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 첨부 LEADS_lineup.

--- SCENE BREAK --- (E03S10 → E03S11 학생부실 앞, 오후)

### ⑨ 하람의 쪽지 — P45~P46 (목 오후)

### panel_045
- scene_id: E03S11 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ⑨ · 긴장 6 비 · ⟨W1⟩ · 하람 무표정의 집중
- characters: HARAM (옆얼굴, 손) · GEONU (어깨)
- size: medium · aspect: 3:4
- camera: close on the wall tip box and her hand, Haram's profile beyond, Geonu's shoulder at the edge.
- composition: Lower half, sharp: the locked small wooden tip box with a slot mounted on the wall (completely blank, no sign), Haram's hand turning a small brass key on a crimson cord in its lock. Upper middle: Haram's profile, silver rectangular glasses, bob, cool focus. Screen-left edge: Geonu's big navy-blazer shoulder with his crimson armband, leaning in to say something quietly. Beside the box: the frosted glass door of the student-discipline office, plain. Afternoon light. Top fifth: plain cream wall.
- eyes: Haram looks at the box, not at Geonu.
- emotion: 하람 무표정의 집중
- motion/direction: 열쇠 → 하람 옆얼굴
- dialogue_ref: 건우 "부장, 1반 건… 연애 상담으로 끝났대요." (bubble 1, tail → screen-left edge)
- bubbles: 1
- art_space: Keep the top fifth of the frame on the left (plain cream wall above Geonu's shoulder) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep02 panel_046(같은 문·제보함). 건우 = 토큰만. 진홍 = 완장 두 개 + 열쇠 끈(선도부 소품, §3-3-4 허용 범위).

### panel_046
- scene_id: E03S11 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ⑨ · 긴장 7 비 · **⟨복선 TB-V4 · TB-D3 · C9 2차⟩** · 확인
- characters: HARAM (손 + 눈)
- size: insert · aspect: 1:1
- camera: extreme close-up of the note in her fingers, her eyes out of focus behind.
- composition: Lower centre, sharp: Haram's fingers refolding a clumsy crane-shaped folded note of plain paper along its old creases — the crane shape clearly readable, with a plain round head and a plain straight tail (NOT the hook-head / folded-tail fold), one wing still half open showing the blank inside (no writing). Behind, upper middle, soft: Haram's eyes behind thin silver rectangular glasses, looking long at it. Upper quarter: plain soft cream wall.
- eyes: Haram stares at the note, still.
- emotion: 확인
- motion/direction: 쪽지 → 하람 눈
- dialogue_ref: 하람(혼잣말) "…사실만 보고하면 돼." (bubble 1)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain soft cream wall above her eyes) as calm, empty background.
- split: no
- gap_after: 320
- fx/note: **두 특징 없음**(서윤 학과 대비, 나란히 두지 않음). 첨부 HARAM_expressions, PROPS_sheet(대비 확인용, 선택). **P58이 이 이미지를 첨부.** 320 = 오후 → 밤.

--- SCENE BREAK --- (E03S11 → E03S12 은행나무 길, 21:40)

### ⑩ 밤의 균열 — P47~P55 (목 21:40 ~ 금 01:15)

### panel_047
- scene_id: E03S12 / location: LOC_GINKGO_ROAD @NIGHT · mood: M_SCHOOL_NIGHT
- beat: ⑩ · 긴장 6 위 · 타이머(BUS 21:44)
- characters: SEOYUN (작게, 뛰어 내려감)
- size: large · aspect: 9:16
- camera: high angle long shot looking down the ginkgo avenue from above — the same road geometry as ep02 panel_051, without the window frame or figures in the foreground.
- composition: The uphill ginkgo avenue at night running down the tall frame, leaves glowing bright yellow under orange streetlights, low stone wall. Small in the middle: Seoyun running downhill with her backpack, ponytail flying, slight motion blur. Bottom of the frame: the wide road below the hill with the glow of a green city bus with a blank destination display pulling toward the stop. Top: the school building's windows lit flat white, deep navy sky.
- eyes: (작게, 앞을 봄)
- emotion: 매일의 타이머
- motion/direction: 위 → 아래(버스)
- dialogue_ref: 효과음 [야자 끝 종] (sfx 1) · 대사 없음
- bubbles: 0 + sfx 1
- art_space: Keep a patch at the top of the frame (plain deep navy sky beside the lit school windows) as calm, empty background for the bell sound effect.
- split: no
- gap_after: 160
- fx/note: silent(효과음만). **첨부 ep02 panel_051**(없으면 ep01 panel_048). 버스 전광판 무지. 비트시트 "동세선" → 모션 블러.

--- SCENE BREAK --- (E03S12 → E03S13 편의점 창고, 21:58)

### panel_048
- scene_id: E03S13 / location: LOC_CVS_STOCKROOM · mood: M_NIGHT (천장 형광 하나 + 모니터 회색빛)
- beat: ⑩ · 긴장 7 위 · **⟨복선 P-HQ 심기 · W3 배경 모니터⟩** · 들으면 안 되는 것을 들음
- characters: MISUK (등 반쯤) · (서윤 = 카메라, 문가)
- size: medium · aspect: 3:4
- camera: Seoyun's POV from the stockroom doorway, eye level, medium on the owner's back.
- composition: Screen-left foreground edge, soft: the open stockroom door frame and Seoyun's hand on it (navy blazer sleeve). Centre: the owner half turned away, back toward camera, a phone seen from the back pressed to her ear (plain case, no logo), shoulders stiff; short dark brown permed curls with grey roots, reading glasses pushed up on her head, lavender fleece under the plain green vest, beige arm sleeves. Behind her on the wall: a monitor showing grey blurred CCTV shapes only. Stacked cardboard boxes with no print, mop and bucket, a small mirror, a green staff vest on a hook. One flat fluorescent tube overhead. Top fifth: plain dim ceiling.
- eyes: the owner looks at the floor while talking; we see only the side of her cheek.
- emotion: 들으면 안 되는 것을 들음
- motion/direction: 문가 → 사장님 등 → 모니터
- dialogue_ref: 사장님(통화) "네, 본사요…" (bubble 1, tail → phone) · 사장님(통화) "야간은 제가 서요." (bubble 2, tail → phone)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stockroom ceiling and the upper wall above the boxes) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: **첨부 ep01 panel_049**(같은 창고) + MISUK_turnaround. 도하 없음(W7). 모니터 = 회색 흐린 형체만(글자·시간 표시 없음).

### panel_049
- scene_id: E03S13 / location: LOC_CVS_STOCKROOM · mood: M_NIGHT
- beat: ⑩ · 긴장 6 비 · ⟨P-HQ⟩ · 사장님 숨김 / 서윤 의심
- characters: MISUK (screen-left) · SEOYUN (OUTFIT_SCHOOL, 문가, screen-right)
- size: medium-wide · aspect: 4:3
- camera: side two-shot in the stockroom, eye level.
- composition: Screen-left: the owner turning toward the door with a forced ordinary face, her hand just laying the phone face down on top of a cardboard box (sharp, plain back). Screen-right: Seoyun in the doorway in her navy blazer with her backpack, holding still, eyes narrowing. Behind: the grey CCTV monitor, boxes, the small mirror, and at the back a narrow doorway opening onto steep stairs going up. Top third: plain dim ceiling.
- eyes: the owner smiles at Seoyun too quickly; Seoyun looks at the face-down phone.
- emotion: 사장님 숨김 / 서윤 의심
- motion/direction: 엎어진 휴대폰 ↔ 서윤 시선
- dialogue_ref: 사장님 "왔어? 밥은?" (bubble 1, upper-left) · 서윤 "…누구예요?" (bubble 2, upper-right)
- bubbles: 2
- art_space: Keep the top third of the frame (plain dim stockroom ceiling) as calm, empty background — the owner's bubble left, Seoyun's right.
- split: no
- gap_after: 30
- fx/note: [PD 보조구] 계단 문(§1). 첨부 MISUK_turnaround, SEOYUN_turnaround. 휴대폰 뒷면.

### panel_050
- scene_id: E03S13 / location: LOC_CVS_STOCKROOM · mood: M_NIGHT
- beat: ⑩ · 긴장 6 비 · ⟨P-HQ⟩ · 무뚝뚝한 다정함 / 찜찜함
- characters: MISUK (손, 등) · SEOYUN (눈)
- size: medium · aspect: 3:4
- camera: close on the hand-off in the foreground, Seoyun's eyes behind.
- composition: Lower foreground, sharp: the owner's hand in a beige arm sleeve holding out the plain green staff vest (no logo) taken from the hook; the hook behind now empty. Middle: Seoyun's face from the nose up, taking the vest, eyes sliding past it toward the back doorway. Background screen-right, soft: the owner's lavender-fleece back already turning to the narrow stairs going up. Top fifth: plain dim wall.
- eyes: Seoyun watches the owner's back.
- emotion: 무뚝뚝한 다정함 / 찜찜함
- motion/direction: 조끼(아래) → 서윤 눈 → 계단 쪽 등(오른쪽)
- dialogue_ref: 사장님 "아무것도 아냐. 먹고 해." (bubble 1, tail → the owner's back)
- bubbles: 1
- art_space: Keep the top-left fifth of the frame (plain dim stockroom wall) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 조끼 = 선명한 초록(편의점 장면 허용). 첨부 MISUK_turnaround, SEOYUN_expressions.

--- SCENE BREAK --- (E03S13 창고 → E03S14 계산대, 금 00:00)

### panel_051
- scene_id: E03S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑩ · 긴장 5 비 · **⟨C7 메아리 · TB 미스디렉션 + TB-D4 · P-REC · 이중의미⟩** · 틀린 안도
- characters: SEOYUN (OUTFIT_STORE, 손 위주)
- size: medium-wide · aspect: 4:3
- camera: from the customer side, slightly high, medium close-up across the whole counter — same camera as ep02 panel_054.
- composition: Centre: Seoyun's hands moving expired orange-band triangle rice balls into the grey bin under the counter; one rice ball set apart alone in the small green wire discount basket at the counter's screen-right end. Screen-left end: the lidless glass jar of white paper cranes, about two-thirds full. A hand scanner with its red light on. Upper left on the back wall, small: the wall clock with tick marks and no numerals, both hands at twelve. Her face only from the chin down; her mouth set, calm.
- eyes: (얼굴 턱 아래만)
- emotion: 안도(틀린 확신)
- motion/direction: 폐기 바구니 → 할인 바구니(오른쪽)
- dialogue_ref: 효과음 [삑—] (sfx 1, scanner) · 서윤(생각) "기록엔 솔내동 사거리, 남자친구." (bubble 1) · 서윤(생각) "편의점은 없어." (bubble 2)
- bubbles: 2 + sfx 1
- art_space: Keep the top third of the frame on the right half (plain fluorescent ceiling and the soft tops of the cigarette shelf) as calm, empty background for two stacked thought bubbles, and a small plain patch near the scanner's red light for the sound effect.
- split: no
- gap_after: 160
- fx/note: **첨부 ep02 panel_054**. 포장 무지(주황 띠만). 시계 두 바늘 12.

### panel_052
- scene_id: E03S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑩ · 긴장 5 설 · ⟨C7 · C8 · K3⟩ · 퉁명스러운 고마움
- characters: DOHA (OUTFIT_NIGHT, 후드 씀, 손 + 턱·안경 아랫테) · SEOYUN (OUTFIT_STORE, 손 + 옆얼굴 일부)
- size: medium-wide · aspect: 4:3
- camera: medium on the counter top at counter height from the customer side — same camera as ep02 panel_055, framed a little higher.
- composition: 180° rule. Screen-left: Doha's long charcoal-sleeved hands placing the orange-band rice ball (from the discount basket) and a few plain coins on the counter; at the top-left edge, under the shadow of his hood, his jaw and the lower rim of thin round black-framed glasses catching a line of light. Screen-right: Seoyun's hands scanning it, the red scanner light; her face turned away at the right edge, only cheek and ear. Green wire basket now empty at the right end, glass jar at the left end. Upper middle: plain fluorescent background.
- eyes: Seoyun avoids his eyes (looks down-right); Doha looks at her.
- emotion: 퉁명스러운 고마움
- motion/direction: 왼쪽 손 → 삼각김밥 → 오른쪽 손
- dialogue_ref: 효과음 [딩동] (sfx 1, door chime, 패널 앞쪽) · 서윤 "고맙다곤 안 해." (bubble 1, upper-right) · 도하 "안 해도 돼." (bubble 2, upper-left)
- bubbles: 2 + sfx 1
- art_space: Keep the top third of the frame in the middle (plain fluorescent background between his hood and her shoulder) as calm, empty background — Seoyun's bubble right, Doha's left, and a small plain patch at the top-left corner for the door chime.
- split: no
- gap_after: 80
- fx/note: **첨부 ep02 panel_055** + DOHA_night. 키링 클로즈업 금지(왼쪽 끈은 프레임 밖). 동전 무늬·숫자 없음.

### panel_053
- scene_id: E03S14 / location: LOC_CVS (창 너머 LOC_CROSSROADS) · mood: M_NIGHT
- beat: ⑩ · 긴장 4 비 · **⟨W8 메아리: 빨간 의자 · C2 병 +1⟩** · 고요
- characters: DOHA (창가 바 테이블, 후드 씀, 뒷모습) · SEOYUN (유리 반사, 작게)
- size: medium-wide · aspect: 4:3
- camera: over-the-shoulder from behind Doha seated at the window bar, wide — same camera as ep02 panel_056.
- composition: Screen-left foreground: Doha seated at the narrow window bar from behind, charcoal hood up, the orange-band rice ball beside his hand. Through the glass: the empty bus stop directly in front, the quiet crossroads, diagonally across the shuttered empty shop with the small faded red plastic stool (small, same place as before, no special light), far off the big-box parking-lot glow. Reflected faintly in the dark glass at the right: the counter behind him and Seoyun in her green vest dropping one more white receipt crane into the glass jar, the jar a touch fuller.
- eyes: Doha looks at the red stool across the street; Seoyun (reflection) looks at the jar.
- emotion: 고요
- motion/direction: 도하 뒤통수 → 빨간 의자 → 유리 반사 속 서윤
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: **첨부 ep02 panel_056**(+ ep02 panel_008). 비트시트 "후경 계산대 서윤"은 카메라가 창을 보므로 **유리 반사**로 풀었다(ep02 P56과 같은 방법). 의자 작게. 병 속 학 = 서윤 두 특징(판별 불요, 작음).

### panel_054
- scene_id: E03S14 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑩ · 긴장 5 설 · ⟨W7 · P2 "내일 봐" 메아리⟩ · 담담한 약속 · **시계 00:58**
- characters: DOHA (OUTFIT_NIGHT, 후드 씀, 문가) · SEOYUN (후경, 계산대 안)
- size: medium · aspect: 3:4
- camera: side medium from the shop floor, eye level — the same axis as ep02 panel_006.
- composition: Screen-right: Doha at the glass door, one hand on it, half turned back toward screen-left, hood up, the round glasses catching a thin line of light under the hood. Background left: Seoyun behind the counter, soft, looking up. Upper left on the wall behind the counter: the wall clock with tick marks and no numerals, hour hand just before one, minute hand two ticks before twelve (00:58). Beyond the door: dark night. Top fifth: plain fluorescent ceiling.
- eyes: Doha looks back at Seoyun (screen-left).
- emotion: 담담한 약속
- motion/direction: 문(오른쪽) → 돌아보는 시선(왼쪽)
- dialogue_ref: 도하 "내일 봐, 한서윤." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame on the right (plain fluorescent ceiling above the door) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: **첨부 ep02 panel_006** + DOHA_night. 사장님 없음(W7). 직원 문 닫힘.

--- SCENE BREAK --- (E03S14 → E03S15 귀갓길, 01:15)

### panel_055
- scene_id: E03S15 / location: LOC_UPHILL_ALLEY · mood: M_ALLEY_NIGHT
- beat: ⑩ · 긴장 5 비 · **⟨W3 메아리: 빈 골목⟩** · 피로, 기척
- characters: SEOYUN (OUTFIT_SCHOOL, 블레이저 다시 입음, 작게)
- size: large · aspect: 9:16
- camera: high angle from the top of the alley, long shot looking down the steep slope — same camera as ep02 panel_010.
- composition: The narrow steep alley running down the tall frame; three streetlamps far apart stacked one above another, each a small pool of orange light. Seoyun small under the THIRD (topmost, nearest) lamp, stopped, turning to look back down the alley. Below and behind her the alley is EMPTY — no figure, no shadow of a person. Gas meters, potted plants, a parked scooter, a stray cat on concrete steps. Top sixth: dark rooftops and deep navy sky.
- eyes: Seoyun looks back down the empty alley.
- emotion: 피로, 기척
- motion/direction: 위 → 아래(빈 골목)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: **첨부 ep02 panel_010**. 인물 그리지 않음(W3, 공정한 빈칸). 다름: ep02는 가운데 가로등, 이번엔 맨 위 가로등. 320 = 밤 → 금요일 아침, 클리프 직전 정적.

--- SCENE BREAK --- (E03S15 → E03S16 교무실 앞 복도, 금 07:55)

### ⑪ 클리프행어 — P56~P60 (금 07:55, 복도 ↔ 교무실 교차 편집)

### panel_056
- scene_id: E03S16 / location: LOC_HALLWAY (교무실 문 앞 구간) · mood: M_DAY
- beat: ⑪ · 긴장 8 위 · P8 구도의 반전(이번엔 혼자)
- characters: SEOYUN (OUTFIT_SCHOOL, 중경) · HARAM (문 너머 목소리만)
- size: large · aspect: 9:16
- camera: the same camera as panel_008 — eye level from the corner of the corridor, long lens to the vanishing point.
- composition: Same corridor as panel_008: windows along the screen-left wall with low golden morning backlight, the staff room's wide grey sliding door on the screen-right wall, slightly open. The spot by the window across from the door where Doha leaned is EMPTY — just light on the floor. Seoyun is now in the midground beside the staff-room door (screen-right), stopped mid-step, backpack on, head turned toward the gap of the door. Top quarter: plain cream upper wall and ceiling.
- eyes: Seoyun looks at the door gap (screen-right).
- emotion: 불길함
- motion/direction: 빈 창가(왼쪽) → 서윤 → 문틈
- dialogue_ref: 하람(문 너머) "선생님. 어제 상담 건, 확인된 사실만 보고드리겠습니다." (bubble 1, tail → the door gap; KM 김)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain cream upper wall and ceiling of the corridor) as calm, empty background for one long bubble on the right, above the door.
- split: no
- gap_after: 30
- fx/note: **첨부 P8**(같은 카메라, 빈 창가). 다크서클 짙게.

--- SCENE BREAK --- (교차 편집: E03S16 → E03S17 교무실 안, 문틈 시점)

### panel_057
- scene_id: E03S17 / location: LOC_TEACHERS_OFFICE (문틈 시점) · mood: M_DAY
- beat: ⑪ · 긴장 8 위 · 담임 경계 · P9와 구도 짝
- characters: RYU (정면 클로즈업) · (하람 어깨 가장자리)
- size: medium · aspect: 3:4
- camera: through the same hand-wide door gap as panel_009, pushed in closer on the teacher's face.
- composition: The dark soft edges of the sliding door on both sides; in the narrow strip: the teacher seated at his desk, closer now, setting down his silver tumbler, brows drawn together in a frown. At the screen-left edge of the strip, soft: the navy shoulder of Haram with the crimson armband. Blinds behind him. Top third of the strip and door edges: plain cream wall and the upper door frame.
- eyes: the teacher looks up at Haram (screen-left), wary.
- emotion: 담임 경계
- motion/direction: 문틈 → 담임 얼굴
- dialogue_ref: 담임 "끝난 일이다, 채하람." (bubble 1) · 담임 "…엿들었냐?" (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the dark upper door edges and plain cream wall above the gap) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: **첨부 P9**(같은 문틈 프레임) + RYU_sheet.

### panel_058
- scene_id: E03S17 / location: LOC_TEACHERS_OFFICE · mood: M_DAY
- beat: ⑪ · 긴장 9 위 · **⟨복선 TB-V5 · TB-D5: 실루엣 회수 · C9⟩** · 판이 커진다
- characters: HARAM (손) · RYU (눈)
- size: medium · aspect: 3:4
- camera: low close angle across the teacher's desk, the note sharp in the foreground, the teacher's face beyond.
- composition: Lower half, sharp: Haram's hand (navy blazer cuff, small brass key on a crimson cord at the wrist) setting the clumsy crane-shaped folded note of plain paper on the desk beside the silver tumbler — plain round head, plain straight tail (NOT the hook-head / folded-tail fold), blank. Middle, softer: the teacher's face from the nose up, eyes dropping to the paper crane. Top third: the plain white blinds behind him.
- eyes: the teacher stares at the paper crane.
- emotion: 판이 커진다
- motion/direction: 하람 손 → 학 쪽지 → 담임 눈
- dialogue_ref: 하람 "점심 순찰 중이었습니다." (bubble 1, tail → bottom-left / her hand side) · 하람 "화요일에 공개한 그 제보입니다." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame (the plain upper part of the white blinds behind the teacher) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 0
- fx/note: **첨부 P46**(같은 학 모양 쪽지) + RYU_sheet. 두 특징 없음. 비트시트 "클로즈업 + 손 + 눈" = 한 프레임 아래/가운데.

--- SCENE BREAK --- (교차 편집: E03S17 → E03S16 복도)

### panel_059
- scene_id: E03S16 / location: LOC_HALLWAY (교무실 문 앞 구간) · mood: M_DAY
- beat: ⑪ · 긴장 9 위 · ⟨C2⟩ · 숨이 멎음 · P11과 매치 짝
- characters: SEOYUN (눈 ECU + 손)
- size: medium · aspect: 3:4
- camera: split — the same two stacked frames as panel_011.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 60%): the dark edge of the sliding door at screen-right, Seoyun's LEFT eye at the gap, pupil shrunk, breath held, faint dark circle; the window spot behind her empty (no Doha). BOTTOM frame (about 40%): her hand inside the navy blazer pocket mouth crushing a half-folded blank white receipt crane in her fist.
- eyes: Seoyun's eye frozen on the gap.
- emotion: 숨이 멎음
- motion/direction: 눈(위) → 구겨지는 학(아래)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: yes (2칸)
- gap_after: 160
- fx/note: **첨부 P11**(같은 분할 구도). P11과 다름: 뒤에 도하 없음, 학이 구겨짐. 160 = 마지막 패널 앞 숨.

--- SCENE BREAK --- (교차 편집: E03S16 → E03S17 교무실 안)

### panel_060
- scene_id: E03S17 / location: LOC_TEACHERS_OFFICE (배경 단순화) · mood: M_DAY
- beat: ⑪ · 긴장 **10** 위 · **⟨반전 B 정점 · W1 "정확한 장소" · C11·P32가 칼이 됨⟩** · 회차 마지막 · **캡처 컷 후보**
- characters: HARAM (정면 클로즈업)
- size: full-bleed · aspect: 9:16
- camera: frontal close-up of Haram from the teacher's seated eye line, eye level.
- composition: Haram's face in the middle of the tall frame, formal cool expression, chin slightly raised, light flashing across her thin silver rectangular glasses, bob tucked behind the RIGHT ear with the black hairpin (on the viewer's left). At the lower screen-right edge: just a hint of the plain crimson armband on her LEFT upper arm. Background reduced to soft plain staff-room cream and the blur of window blinds. Top quarter: plain soft cream wall. Bottom sixth: plain simple darker navy (her blazer fading into shadow). Teacher and Seoyun not in frame.
- eyes: Haram looks straight at the teacher (camera), exact and unblinking.
- emotion: 정확한 칼
- motion/direction: 정면 정지
- dialogue_ref: 하람 "제보에 적힌 편의점, 솔내동 사거리예요." (bubble 1) · 캡션 「— 4화에 계속 —」(narration, 아래)
- bubbles: 1 + caption 1
- art_space: Keep the top quarter of the frame (plain soft cream wall above her head) as calm, empty background for one bubble, and the bottom sixth (plain dark navy blazer shadow) as calm, empty background for the ending caption.
- split: no
- gap_after: 0
- fx/note: 선택 첨부 P10(같은 교무실 빛) + HARAM_turnaround, HARAM_expressions. 담임·서윤 리액션은 ep04 P1로 넘김. 진홍은 완장 한 점뿐. 얼굴 중앙, 위·아래 두 빈자리 모두 확보.

---

## 6. 점검 (제출 전 체크리스트)

- [x] 패널 60개(≥50, ≥55), `panel_001`~`panel_060` 3자리 연속, 대본·비트시트 번호와 1:1.
- [x] 모든 패널에 scene_id / LOC_* / mood. 같은 scene_id = 같은 LOC·빛·의상. 교차 편집(S03↔S04, S16↔S17)은 scene_id를 돌려 씬 안 토큰 변화 없음.
- [x] 대사 패널 51개 전부 dialogue_ref + art_space, 말풍선 83개 = 대본 대사·생각 줄 83개. 무대사 9개(P3·P4·P27·P31·P33·P47·P53·P55·P59) — P3·P47은 효과음 자리만, 나머지 art_space none. 무대사 연속 최대 2컷(P3~P4).
- [x] 화면비: 9:16 ×9 · 3:4 ×34 · 4:3 ×14 · 1:1 ×3 = 60.
- [x] split: yes = P11, P59(매치 짝, 각 2칸).
- [x] 반전: A = P34 9:16 단독(앞 P33 gap 160, 뒤 320). B = P56~P60 교차 편집 → P60 9:16 마지막.
- [x] 단서 위치 비트시트 그대로: TA-V1/TA-D1 P5 · TA-D2 P7 · TA-V2 P8 · TB 전제 P10 · TB-D1 P13 · TA-V3 P21 · TA-D3 P25 · TA-D4 P26 · **TB-V1 P27 · TB-V2 P29 · TB-V3 P41(실루엣)** · TB-D2 P32 · 반전 A P34 · P-REC P13·P39·P51 · TB-V4/TB-D3/C9 P46 · P-HQ P48~P50 · C7 P51·P52 · C8 P2·P52 · TB-D4 P51 · W8 P53 · W3 P48·P55 · TB-V5/TB-D5 P58 · 반전 B P60 · C2 P1·P3·P11·P18·P19·P53·P59.
- [x] 글자 0: 엄마 쪽지·계약서·상담 양식·클립보드·출석부·칠판·제보함·학 모양 쪽지 안쪽·휴대폰(뒷면)·시계·CCTV 모니터·버스 전광판·동전·포장 전부 무지. 효과음 4개는 뷰어 sfx 자리만.
- [x] 하람 유리문 실루엣 P29·P41 = 얼굴·글자 없음, 진홍 덩어리만, 첨부 없음, 말풍선이 실루엣 위에 없음. P27 하람 원경.
- [x] 상담실 방향 = style-bible v1.2 §7-2(마스터 P28·P29·P31~P34·P37·P38·P41, 역샷 P30·P35·P36·P39·P40, 의자 4개).
- [x] 사장님 ↔ 도하 같은 프레임 없음. P55 골목 빈칸. P4 엄마 등 + 오른손목 파스. 빨간 의자 P53 작게.
- [x] 한국 원작 그대로(캄보디아식 변형 없음). 신체 접촉은 손잡기·소매 잡기까지. 만화 기호(김·속도선) 없음.

## 7. 하류 인계

- **letterer:** 각 패널의 `art_space`·`gap_after`를 `ep03_lettering.md`에 그대로 옮긴다(gap_after는 px 정수). 말풍선 수·화자는 `dialogue_ref`/`bubbles` 기준. 프레임 밖 꼬리: P13(담임 → 아래 왼쪽 손), P28(담임 → 아래 가장자리), P38(담임 → 아래 가장자리), P45(건우 → 왼쪽), P48(사장님 → 휴대폰), P50(사장님 → 뒤돌아선 등), P56(하람 → 문틈, 오른쪽), P58(하람 → 아래 왼쪽 손). 효과음 자리: P3(딩동), P47(종), P51(삑), P52(딩동). P60 캡션 narration 아래 1/6. thought = P6(2), P7(2), P11, P18(2), P21, P51(2). 긴 KM: P5, P10, P12, P30, P40, P56, P60 — 풍선 폭/분할 주의. **P29·P41 말풍선은 유리문 실루엣 위 금지.** text_km은 대본 KM 그대로.
- **prompt-smith:** style-bible §6-1 조립 순서. camera/composition/eyes/art_space 영어 문장 그대로. LOC 토큰은 §7 원문(LOC_COUNSEL_ROOM은 §7-2 단어 그대로, 실루엣 보조구는 P29·P41만) + 무드 빛 문구 하나(상담실 = M_COUNSEL). [PD 보조구] 4개(§1)는 art-director 확인본으로. 첨부: §3-3 표 그대로(상담실 = LEADS_lineup + RYU_sheet + 앞 패널 하나, 실루엣 첨부 없음). 생성 순서는 §3-4를 카드 순서/메모에 반영. SCENE BREAK 21곳(§1)을 그룹 경계로 사용.
- **art-director (요청):**
  1. 새 무드·새 LOC 추가 요청 없음(M_COUNSEL·LOC_COUNSEL_ROOM 확정본 사용).
  2. **LOC 보조구 4개 확인 요청**(§1 [PD 제안]): LOC_HALLWAY 교무실 문 앞 구간 / LOC_TEACHERS_OFFICE 문틈 시점 / LOC_HALLWAY 상담실 쪽 끝 / LOC_CVS_STOCKROOM 계단 문.
  3. 새 레퍼런스 시트 없음(13장 유지) 확인.
