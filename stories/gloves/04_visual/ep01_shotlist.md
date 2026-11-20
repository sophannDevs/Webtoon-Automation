# EP01 샷리스트 「먼저 만지지 마세요」 — panel-director

- 작품: 「장갑을 벗기 전에」 · 회차 **EP01 (NN = 01)** · 18+ 로맨스 판타지 · Khmer edition · Flow-by-hand mode
- 작성: panel-director · 2026-11-20 · 첫 작성
- 게이트: `km_review.py gate --episode 01` → **OK** (`ep01_script_final.md` = Khmer review READY 판본, round 1)
- 입력: `00_input/brief.md`(LOCKED 1–10, RULINGS A–J) · `03_episode/ep01_beatsheet.md`(패널 마스터: 62패널·플래그·손 상태 §1-3·그림 문법 §1-4·장소·긴장·gap) · `03_episode/ep01_script_final.md`(대사 패널·화자) · `04_visual/style-bible.md` · `04_visual/character-sheets.md` · `02_story/twist-plan.md`(§1-2, §2-2~§2-7, §10) · `02_story/tension-curve.md`(§1-2, §1-3, §2) · `02_story/characters.md` §6-6
- 범위: **패널 62개 = panel_001–panel_062 = P01–P62.** 비트시트의 번호·비트·플래그·긴장·gap을 그대로 옮기고 구도·카메라·화면비·말풍선 자리·금지 항목을 확정한다. 패널 수·순서·대사 패널은 바꾸지 않았다. 바꾼 것은 **P45 크기 하나**(M → L, P49와 통일, §2-4).
- **이미지에는 글자가 하나도 없다.** 말풍선·효과음·캡션은 뷰어(`km_tool.py build`)가 그린다. 이 문서의 `bubble`은 그림이 비워 둘 **조용한 면(art_space 제안)** 과 화자 위치·꼬리 방향이다. 최종 `art_space`·`place`는 letterer의 `ep01_lettering.md`가 정한다.
- `dialogue_ref`는 한국어 참조다. 크메르어 `text_km`은 letterer가 `ep01_script_final.md`의 해당 패널 `KM:` 줄에서 글자 그대로 복사한다(이 문서에 크메르어를 옮겨 적지 않았다: 사본이 어긋나는 것을 막기 위해).
- 작업 언어 한국어, 카메라·그림 키워드는 영어. 토큰 이름(`LOC_*`, `H_*`, `P_*`, `MARK_*`, `PE_*`, `HE_*`, `LIGHT_*`)은 style-bible §4·§6·§8, character-sheets §1-7·§2-7의 것이다. **Flow 프롬프트 안에는 토큰 이름을 쓰지 않고 그 영어 문장을 풀어 쓴다**(prompt-smith 몫, style-bible §12-1).

---

## 1. 장소 목록 (scene_id ↔ location ↔ 배경 한 줄)

장소는 정확히 4곳. 같은 `scene_id` 안에서는 같은 장소 토큰 + 같은 LIGHT 문장을 그대로 쓴다.

| scene_id | 패널 | location | 실내외 · 시간 | LIGHT | 배경 한 줄 | Flow 장면 앵커 |
|---|---|---|---|---|---|---|
| S1 | P01–P05 | `LOC_GREENHOUSE` 통로 | 실내 · 전날 밤 | `LIGHT_GH_NIGHT` | 흰 장미 화단 사이 연석회암 통로, 가운데 한 걸음 너비의 검은 재의 길, 사슬의 놋쇠 램프, 옅은 에메랄드 유리와 검은 철골 | P01 |
| S2a | P06–P07 | `LOC_WORKSHOP` 거리 | 실외 · 아침 | `LIGHT_WS_MORNING` | 비탈진 자갈길, 오커 회벽 목골조 집, 모퉁이의 그녀 공방, 글자 없는 쇠장갑 간판 | P06 |
| S2b | P08–P10 | `LOC_WORKSHOP` 공방 안 (압류 중) | 실내 · 아침 | `LIGHT_WS_MORNING` | 낮은 들보, 흠집 난 참나무 재단대, 빈 못·빈 선반·회벽의 옅은 사각형 자국, 격자창 | P08 |
| S2c | P11–P12 | `LOC_WORKSHOP` 거리 (이웃 공방 반문 카운터) | 실외 · 아침 | `LIGHT_WS_MORNING` | S2a와 같은 골목, 이웃 공방의 반문 카운터, 언덕 위 작은 유리 온실 | P06 |
| S3a | P13 | `LOC_GREENHOUSE` 외관 | 실외 · 해 질 녘 | `LIGHT_GH_DUSK` | 언덕 위 회색 돌 저택, 옆구리의 주철·유리 온실과 돔이 초록 금빛 등불처럼 빛남 | (단독) |
| S3b | P14–P20 | `LOC_GREENHOUSE` 입구 → 통로 | 실내 · 해 질 녘 | `LIGHT_GH_DUSK` | 입구의 흰 대리석 띠, 재의 길이 돔까지, 해 질 녘의 초록 금빛 | P14 |
| S4 | P21–P28 | `LOC_GREENHOUSE` 돔 아래 탁자 | 실내 · 초저녁 | `LIGHT_GH_EVENING` | 유리 돔 아래 긴 짙은 호두나무 탁자, 등 높은 의자 둘, 돔 너머 저무는 파란 하늘 | P21 |
| S5 | P29–P36, P38 | `LOC_BENCH` | 실내 · 밤 | `LIGHT_BENCH_LAMP` | 유리벽이 비스듬히 만나는 곁방, 연한 참나무 작업대, 테라코타 화분, 못의 회갈색 정원사 장갑, 램프 하나 | P29 (권장 카드 `LOC_BENCH`) |
| S5f | P37 | `LOC_WORKSHOP` 공방 안 (회상, 압류 전) | 실내 · 기억의 낮 | `LIGHT_MEMORY` | 모든 못과 선반이 찬 공방, 나무 손틀, 바랜 호박빛 | P08 (방만 참조, 상태는 '가득 참') |
| S6 | P39–P44 | `LOC_STUDY` | 실내 · 밤 | P39 `LIGHT_STUDY_COOLING` → P40–P44 `LIGHT_NOWAY` | 짙은 호두나무 벽판, 제목 없는 책등, 놋쇠 램프, 병 초록 커튼, 천 덮인 액자, 창가 받침 탁자의 유리 종 | P39 (권장 카드 `LOC_STUDY`) |
| S7 | P45–P50 | `LOC_STUDY` (이어서) | 실내 · 밤 | `LIGHT_NOWAY` (P45–P49 글자 그대로) | S6과 같은 방, 같은 보정 | P45 (P49의 원본) |
| S8 | P51–P58 | `LOC_BENCH` | 실내 · 깊은 밤 | `LIGHT_DEEP_NIGHT` | S5와 같은 작업대 + 돔으로 드는 은녹색 달빛 | P51 |
| S9 | P59–P62 | `LOC_BENCH` (같은 순간) | 실내 · 깊은 밤 | `LIGHT_DEEP_NIGHT` | S8 그대로(시간 점프 없음) | P51 |

- `--- SCENE BREAK ---`는 장소(또는 실내외)가 바뀌는 11곳에만 둔다: P05│P06, P07│P08, P10│P11, P12│P13, P13│P14, P20│P21, P28│P29, P36│P37, P37│P38, P38│P39, P50│P51. **P44│P45(S6→S7)와 P58│P59(S8→S9)는 같은 공간의 연속이라 SCENE BREAK가 아니다**(배경·보정이 바뀌면 안 된다).
- Flow 작업 묶음 힌트(panel-artist는 쓰지 않지만 prompt-smith의 `scene_group` 칸용): **A = S1–S3b (P01–P20, 20컷)** · **B = S4–S5 (P21–P38, 18컷)** · **C = S6–S9 (P39–P62, 24컷)**. 한 장면은 같은 날, 같은 모델로 이어서 만들고, 장면 앵커 컷을 먼저 확정해 같은 장면의 나머지에 첨부한다(style-bible §12-3-5).

---

## 2. 회차 공통 규약 (패널마다 되풀이하지 않는 것)

### 2-1. 크기 → 화면비 (style-bible §5-1)

| 크기 | 화면비 | 3:4가 없을 때 | EP1 패널 |
|---|---|---|---|
| **XL** 세로 대형 풀블리드 | **9:16** | — | **P01, P13, P19, P40, P46, P55, P62** (7개만) |
| **L** 큰 컷 | **3:4** | **1:1** (단 P02만 9:16: 떨어지는 재의 세로 흐름) | P02, P06, P12, P14, P16, P18, P21, P28, P29, P35, P43, **P45**, P47, **P49**, P51, P56, P58 (17) |
| **M** 보통 | **1:1** | — | 나머지 35 |
| **ST** 가로 띠 | **16:9** | — | P04, P09, P37 (3) |

- 기본값 9:16은 "세로 스크롤 작품"이라는 뜻이고, 패널별 비율은 위 표다. XL 7개만 9:16이어야 7개의 무게가 산다.
- **P45와 P49는 무조건 같은 비율**(둘 다 3:4, 3:4가 없으면 둘 다 1:1). 한쪽만 바꾸지 않는다.
- XL 7개는 가장자리까지 그림(흰 여백·테두리 없음). XL 중 말풍선이 있는 것은 P62뿐이다.
- 한 프롬프트 = 한 컷. 칸 나누기·패널 테두리·만화 페이지 금지.

### 2-2. 무대 축과 좌우 표지

- **기본 축: 페트라 = 화면 왼쪽, 휴고 = 화면 오른쪽.** 카메라는 늘 그녀의 오른쪽(관객 쪽)에 둔다. 이 축이면 오른손 ↔ 오른손 접촉이 화면 가운데서 만나고 휴고의 **장갑 낀 왼손이 카메라 쪽**에 와서 자주 보인다(좌우 검사에 유리).
- 의도된 예외(역샷): **P19**는 그의 **왼쪽** 어깨 너머(그래도 휴고 = 오른쪽 가장자리, 페트라 = 가운데 왼쪽), **P48**은 그녀의 **오른쪽** 어깨 너머(페트라 = 왼쪽 전경, 휴고 = 오른쪽). 둘 다 축을 넘지 않는 쪽 어깨를 골랐다. P59는 그의 시점(POV).
- **좌우 표지 셋**(모든 컷에서 검사): 페트라의 매듭 실 = **왼손목** · 휴고의 장갑 = **왼손** · 휴고의 머리 한 가닥 = **그의 오른쪽 눈썹 위**(정면에서 화면 왼쪽). 하나라도 반대면 반전 이미지 → 다시 그린다.
- 키 차이: 둘이 마주 서면 **그녀의 눈높이 = 그의 턱·크라바트 높이.** 그가 그녀 얼굴을 볼 때 눈은 살짝 내려다보고, 그녀는 살짝 올려다본다.
- 옷은 두 사람 모두 EP1 전 구간 한 벌. 바뀌는 것은 장갑·흔적·빛뿐.

### 2-3. 패널별 손 상태 · 핵심 접촉 (beatsheet §1-3 + ruling D, 패널 번호 확정)

| 패널 | 휴고 | 페트라 장갑 | 페트라 R 검지 | 핵심 접촉 (누구의 어느 손가락 → 어디) |
|---|---|---|---|---|
| P01–P02 | `H_B1` | — | — | 그의 R 맨손가락 → 장미 줄기 |
| P03 | `H_B1` | — | — | 하녀 R 검지·중지 손끝 → 그의 R 손목 안쪽 (스침, 사고) |
| P04 | (화면 밖) | — | — | 하녀 R 검지·중지 손끝 바닥 잿빛 |
| P05 | `H_B1`, R은 등 뒤 | — | — | 없음 |
| P06–P12 | — | `P_BARE` (작업 장갑은 **왼쪽 허리** 앞치마 끈) | `MARK_CLEAN` | 없음 · **P09는 골무가 R 중지** |
| P13–P14 | `H_GLOVED_BOTH` | `P_BARE` | CLEAN | 없음 |
| P15 | `H_REMOVING` | `P_BARE` | CLEAN | 없음 |
| P16 | `H_STD` (벗은 R 장갑은 장갑 낀 L이 쥠) | `P_BARE` | CLEAN | 없음 |
| P17–P19 | `H_STD` | `P_BARE` | CLEAN | **그녀 R 손 전체 ↔ 그의 R 손 전체** (악수, 무사) |
| P20 | `H_STD` (R 장갑 → 코트 주머니. **이후 EP1 끝까지 R 맨손**) | `P_BARE` | CLEAN | 손을 놓음 |
| P21–P27 | `H_STD` | `P_BARE` | CLEAN | P23 그녀 R 검지 → 양피지 |
| P28 | `H_STD` | `P_BARE` · **골무 R 중지** | CLEAN | 두 손 사이 손가락 한 마디, 닿지 않음 |
| P29 | `H_STD` (L은 무릎 위) | `P_BARE` · 실 한 길이 풀어냄(끝은 L손목) | CLEAN | 없음 (그의 R → 장미 앞에서 멈춤) |
| P30–P31 | `H_STD` (P31 장갑 낀 L → 자기 왼쪽 가슴) | `P_BARE` | CLEAN | 그녀 맨손가락들 ↔ 그의 R 손가락·마디 (무사) |
| P32 | `H_STD` (손은 화면 밖) | — | CLEAN | — |
| P33 | `H_STD` | `P_BARE` | CLEAN (아직 보이지 않음) | 실 → 그의 R 손바닥 · **그녀 R 검지 끝 하나만 → 그의 R 손목 맥박**, 엄지·나머지는 흰 셔츠 커프 위 |
| P34 | `H_STD` | `P_BARE` | **`MARK_DOT` (작게, 그러나 분명히)** | 손을 뗀 직후, 접촉 없음 |
| P35 | `H_STD` | `P_BARE` | DOT (보이지 않거나 아주 작게) | 그녀 R 손 전체 → 그의 R 손을 아래에서 받침 (무사) |
| P36 | `H_STD` (L → 다시 왼쪽 가슴) | `P_BARE` | DOT | 그녀 손가락 → 실(매듭 짓기) |
| P37 | 회상: 어머니의 **성한** 맨손 | — | — | — |
| P38 | `H_STD` | `P_BARE` | DOT (작게, 보이게) | 없음 |
| P39–P43 | `H_STD` | `P_BARE` | DOT (강조 없음) | P43 그의 R → 유리 종 위 허공 (닿지 않음) |
| P44 | `H_STD` | `P_BARE` · 실 한 길이 풀어냄 | DOT | 손을 내민다 (닿기 직전) |
| **P45** | `H_STD` (R 손바닥 위) | `P_BARE` | DOT (손끝 아래에 가려짐) | **그녀 R 검지 끝 하나만 → 그의 R 손목 맥박**, 엄지·중지·약지·새끼는 커프 위 · 실은 그의 손목에 감겨 교차점이 검지 끝 아래 |
| **P46** | `H_STD` (손목만, 흐림) | `P_BARE` | **`MARK_FRESH` 시작** | 검지가 손목에서 막 떨어짐 |
| P47–P48 | `H_HIDDEN` (R 맨손을 등 뒤로, **장갑 끼지 않음**) | `P_BARE` | FRESH | 없음 |
| **P49** | `H_STD` (등 뒤에서 끌려 나온 R) | `P_BARE` | FRESH (**P46이 끝난 길이 그대로**) | **그녀 R 손 전체(손바닥 + 다섯 손가락) → 그의 R 맨 손목, 흔적 검지 끝은 같은 맥박 자리** (무사) |
| P50 | `H_STD` | **`P_GLOVED` (처음 낌)** | (장갑 속) | 손을 놓음 |
| P51–P53 | `H_STD` | `P_GLOVED` | (장갑 속) | P53 그의 R 손바닥 위로, 한 뼘 앞에서 멈춤 |
| P54 | `H_STD` | **`P_REMOVING`** | 드러나기 시작 | 한 뼘, 닿지 않음 |
| P55–P56 | `H_STD` | `P_ONE` (L만 장갑) | FRESH (보임) | 한 마디(P55) → 숨 하나(P56), 닿지 않음 |
| P57 | `H_STD` | `P_ONE` | FRESH | **그녀 R 맨손 → 그의 R 맨손 안으로** (그녀가 닫는다, 무사) |
| P58–P62 | `H_STD` (그의 R 엄지가 그녀 손목 맥박 위에 **가볍게**) | `P_ONE` (벗은 R 장갑은 작업대 위) | FRESH | 맞잡은 R ↔ R 유지 (무사) |

- 고정 [ruling D]: ① 휴고의 **왼손은 EP1 내내 장갑**(맨 왼손 0컷). ② 모든 주요 접촉은 **그의 오른손 ↔ 그녀의 오른손.** ③ 그녀의 흔적은 **오른손 검지 끝 바닥(손바닥 쪽) 하나**, 잿빛 한 값(`ASH_GREY`), 첫 마디를 넘지 않는다. 다른 손가락·손톱·손등에 생기면 다시 그린다. ④ 매듭 실은 늘 **왼손목**(치수 잴 때는 한 길이만 풀고 끝은 왼손목에).
- 골무: **P09, P28만 오른손 중지**, 나머지 모든 컷은 쇄골 위 끈(§2-9).
- 작업 장갑: P06–P49 **왼쪽 허리**에 꽂힘(손가락이 아래로) → P50부터 손에. 허리에서 사라진다.

### 2-4. P45 ↔ P49 쌍둥이 카메라 `TWIN_CAM` [확정]

**결정: 두 컷 모두 L · 3:4.** (3:4가 없으면 **두 컷 모두 1:1**. 섞지 않는다.) 비트시트의 P45 = M을 L로 올렸다. 이유: P49는 얼굴 + 손 + 생각 말풍선 자리가 한 컷에 들어가야 하고(tension-curve §2-5: P49 = L 하드 스톱), 쌍둥이 규칙은 크기까지 같아야 한다(twist-plan §1-2·§2-7, style-bible §5-1·§13-1). 부작용: 침묵 3연타 ②의 모양이 M→XL→L에서 **L→XL→L**이 된다(정점 P46 XL은 그대로라 "부풀었다 내려앉음"은 유지).

`TWIN_CAM` (두 컷에 글자 그대로 같은 카메라):
- **shot:** medium close-up. **camera:** from her right-front side, slightly above hand height (about her chest height), 3/4 angle, looking across the hands toward her face. 극단 앵글 없음.
- **아래 45%:** 손. 그의 맨 오른쪽 아래팔이 **화면 오른쪽 가장자리**에서 들어온다(흰 셔츠 커프 + 미드나이트 블루 소매 끝), **손바닥이 위, 손목 안쪽이 위.** 맥박 자리 = 아래 절반의 정가운데(가로 50%, 세로 약 68%). 그녀의 오른손은 왼쪽에서 들어오고, **오른손 검지가 손끝부터 첫 마디까지 옆모습으로** 보인다. 화면 왼쪽 아래 모서리에 그녀의 왼손과 **왼손목의 매듭 실**.
- **위 왼쪽 55%:** 그녀의 머리와 어깨, 3/4(화면 오른쪽을 향함). 머리 꼭대기는 위에서 12–15%, 얼굴 중심은 가로 35% · 세로 30% 부근. 귀가 보인다.
- **위 오른쪽 1/3:** 초점 밖의 짙은 호두나무 벽판(조용한 면). P45에서도 비워 두고, P49에서는 생각 말풍선 자리.
- **그녀 뒤(왼쪽 가운데 높이):** 작게, 초점 밖의 유리 종. 진홍 띠가 읽히면 안 된다.
- **휴고:** 아래팔·소매·커프만(얼굴은 화면 위 오른쪽 밖). 오른쪽 아래 가장자리에 장갑 낀 왼손이 살짝 보이면 좋다(좌우 표지).
- **빛:** `LIGHT_NOWAY` 문장을 글자 하나 바꾸지 않고(P45–P49 동일). P49에 warm / glow / softer 같은 낱말 금지.
- **만드는 순서:** P45를 먼저 확정 → P49는 `panel_045.png`를 **첫 번째 첨부**로 붙여 만든다(Flow 이미지 편집이 되면 P45를 편집해 P49를 만드는 것이 가장 정확하다). 프롬프트: `Same camera, framing, crop and colour grade as the attached panel; change only her face, her other four fingers, the thread and the mark as described.`

| 항목 | P45 (일의 손 · 침묵) | P49 (원하는 손 · 생각 말풍선) |
|---|---|---|
| 얼굴 | `PE_TASK`: 닫힘, 입 일자, 턱에 힘, 홍조 없음, 시선은 매듭, 그를 보지 않음 | `PE_OPEN`: 눈을 들어 그의 얼굴(화면 위 오른쪽 밖)을 봄, 입술 살짝 벌어짐, 귀 끝 옅은 홍조 |
| 접촉 지점 | **오른손 검지 끝 하나**가 맥박 위 | **같은 검지 끝, 같은 맥박 자리** |
| 나머지 손가락 | 엄지·중지·약지·새끼 = 흰 셔츠 **커프(천) 위**, 집게처럼 짧게 | 손바닥과 엄지가 그의 손목 **등 쪽 맨살** 아래에서 받치고, 중지·약지·새끼는 손목 안쪽과 손바닥 아래쪽 **맨살** 위. 커프에 닿는 손가락 없음. 네 손가락 모두 **깨끗한 따뜻한 피부** |
| 매듭 실 | 그의 손목에 감겨 교차점이 검지 끝 아래 눌림, 다른 끝은 **팽팽하게** 그녀 왼손목으로 | 그의 손목에서 풀려, **그녀 왼손목에서 아래로 느슨히 늘어져** 화면 밖으로 |
| 흔적 | `MARK_DOT` (손끝 아래라 보이지 않음) | `MARK_FRESH`: 검지 끝 옆모습에 손끝을 감싼 무광 잿빛 + 첫 마디 주름까지(넘지 않게) 머리카락 같은 검은 실핏줄, **P46 끝 길이 그대로** |
| 그의 팔 | 앞으로 내민 아래팔 | 같은 위치(등 뒤에서 끌려 나왔다는 것은 P47–P48이 이미 보여 준다. 팔꿈치가 조금 뒤에 있는 각도는 선택) |
| 말풍선 | 없음 | 생각 말풍선 1개, 위 오른쪽 1/3 |

### 2-5. 말풍선 자리 규칙 (Khmer edition, style-bible §5-4)

- 대사 패널은 화자 쪽 **위 25–35%** 를 세계 안의 **디테일 적은 실제 면**(어두운 유리, 램프 밖 어둠, 그늘진 회벽·들보, 저녁 하늘, 초점 밖 벽판)으로 둔다. 대사 컷에서 머리 꼭대기는 화면 위에서 약 30% 아래.
- 그 자리에 얼굴·손·핵심 소품(흔적, 장갑, 인장, 유리 종, 의뢰서)·램프 불꽃·재의 길 소실점을 두지 않는다. 순백·순흑 평면이나 잘린 듯한 빈 띠는 실패.
- 말풍선 2개 패널: **먼저 말하는 사람의 말풍선이 더 위.** 휴고가 머리 하나 크므로, 그녀가 먼저 말하는 투샷에서는 그녀 쪽 위를 더 높게 비운다.
- 크메르어 줄이 긴 패널(P26②, P51, P38②, P49, P09, P33)은 조용한 면을 **화면 폭의 60% 이상**으로 넓힌다. 뷰어 규칙 `x + w ≤ 100`, 폭 ≤ 85%.
- 화면 밖 화자(P09 가죽상, P16·P43 손만 보이는 휴고, P22·P31 손만 보이는 페트라)는 그 가장자리 쪽을 비우고 꼬리를 그 가장자리로.
- 효과음(P02, P04): 떨어지는 재 옆 / 튀는 쟁반 옆에 작은 조용한 면.
- P49는 **생각 모양**(점선, 꼬리 대신 작은 점들) 말풍선 하나뿐. 말 풍선으로 그리면 그가 들은 것처럼 읽혀 B9가 무너진다(letterer).
- 침묵 패널은 `silent`. 그림이 화면을 채워도 된다.

### 2-6. 모든 패널 공통 금지 (각 패널의 must NOT은 이것에 더하는 것)

- 글자·숫자·가짜 글씨·말풍선·캡션·워터마크(의뢰서·계약서·장부·책등·간판·액자·실 눈금 전부 무지). 이름판·문장(紋章)·시계(벽시계·회중시계) 없음.
- 핏줄·흔적의 실핏줄이 문자·룬·문양·대칭 무늬·문신·빛나는 선으로 보이는 것. **EP1은 핏줄이 손목 위·목·얼굴·깃 위에 0.**
- 빛나는 효과, 반짝이, 오라, 불꽃, 연기, 불씨. 저주 색은 늘 무광.
- 진홍·빨강: P09, P29(배경), P40 세 컷과 진홍 실패 밖에서 0. 두 주인공의 옷·장갑·입술·장신구에 빨강·진홍·병 초록 없음.
- 휴고의 피부가 회색으로 보이는 것(잿빛 흔적과 구분). 앳된 얼굴, 큰 아니메 눈(무조건 다시 그림).
- 노출, 열린 깃, 흐트러진 옷, 키스, 벽 몰아붙이기, 그가 그녀 손목을 세게 쥐는 그림, 침대·침실, 신체 부위에 머무는 크롭, 치마 아래 앙각.
- 동물·벌레·새, 비·우산·유리 물방울, 눈·서리·입김·얼음빛, 가스등·전기등.
- 페트라가 P50 전에 장갑을 낀 손, 휴고 오른손 장갑(P16 이후), 휴고 맨 왼손, 실이 오른손목.
- 무사한 접촉 컷이 바로 앞 컷보다 따뜻해지거나 밝아지는 것(world R3: 무사함은 아무 일도 일어나지 않음 그 자체).

### 2-7. 매치 컷 짝 (뒤 컷을 만들 때 앞 컷 확정본을 첫 첨부로)

| 앞 → 뒤 | 같게 | 다르게 |
|---|---|---|
| **P45 → P49** ★ | `TWIN_CAM` 전부: 비율·카메라·크롭·접촉 지점·배경·보정 | 그녀 얼굴, 네 손가락, 실, 흔적 |
| P03 → P17 | 그의 맨 오른손목 안쪽이 보이는 사선 앵글 | 하녀의 스침 → 페트라의 악수, 잿빛 → 아무 일 없음 |
| P05 → P47 | 물러서며 맨 오른손을 등 뒤로 감추는 자세 | 장소, 앞의 사람(하녀 → 페트라) |
| P15 → P54 | 장갑 낀 손이 다른 손 장갑의 손끝을 하나씩 집어 벗기는 동작·손 높이 | 좌우를 뒤집은 거울, 손의 주인 |
| P40 → P46 | 오른손 검지 손끝 바닥(손바닥 쪽)을 보는 각도 | 갈라진 가죽 → 그녀의 맨 손끝 |
| P34 → P46 | 흔적 자리(오른손 검지 끝 바닥) | 작은 점 → 신선한 흔적 |
| P18 → P61 | 그의 얼굴 크기·앵글, 시선이 얼굴로 올라가는 순간 | 빛(해 질 녘 → 깊은 밤), 크기(L → M) |
| P14 → P19 | 흰 대리석 띠 위 하인들의 순서(통로 쪽 집사 → 요리사 → 하녀 → 젊은 하인 → 맨 끝 장갑 시중 하녀) | 카메라 반대 방향이라 무리가 화면 왼쪽(P14) → 오른쪽(P19) |

### 2-8. 세로 스크롤 리듬 지도 (tension-curve §2)

크기 = 시간(XL 멈춤 · L 느리게 · M 걷기 · ST 달리기), `gap_after` = 기대(0 붙임 · 60–80 숨 · 120–200 전환 · 320–600 큰 멈춤). 큰 멈춤 5개 밖의 간격은 모두 200 이하.

| 비트 | 크기 흐름 (gap_after) | 차선 · 멈춤 |
|---|---|---|
| B1 P01–05 | XL(0) → L(**320**) → M(0) → ST(0) → M(160) | 멈춤 P01·P02 · 달리기 P03–04 |
| B2 P06–12 | L(0) → M(0) → M(0) → ST(0) → M(0) → M(0) → L(160) | 걷기. P09 ST 인서트가 리듬을 끊고 화면 밖 말풍선이 무텍스트 3연속을 막음 |
| B3 P13–20 | XL(0) → L(0) → M(0) → L(60) → **M(0) → L(360) → XL(0)** → M(120) | 멈춤 P13 · 하드 스톱 P16 · 침묵 3연타 ① 점층 M→L→XL, 큰 멈춤 P18 뒤 |
| B4 P21–28 | L(0) → M(0) → M(60) → M(0) → M(0) → M(60) → M(0) → L(160) | 걷기. 소프트 스톱 P23·P26. 말풍선 2개(P22, P26)와 1개를 번갈아. 휴대폰 한 화면(M 2개)이 그녀의 조항이나 그의 질문으로 끝나게: P22–23 / P24–25 / P26–27 |
| B5 P29–38 | L(0) → M(0) → M(0) → M(0) → M(0) → M(0) → L(0) → M(60) → ST(0) → M(160) | 걷기. 치수 구도가 손가락 → 마디 → 손바닥 → 손목 → 얼굴로 한 칸씩 다가간다. P34 세우지 않음, P35 소프트 스톱, P37 ST 회상이 호흡을 끊음 |
| B6 P39–44 | M(0) → XL(0) → M(0) → M(0) → L(60) → M(**0, 간격 금지**) | 느리게. 멈춤 P40 |
| B7 P45–50 | **L(400) → XL(0) → L(0)** → M(0) → L(80) → M(200) | 침묵 3연타 ② L→XL→L, 큰 멈춤 P45 뒤 · 하드 스톱 P49 |
| B8 P51–58 | L(0) → M(0) → M(**440**) → **M(0) → XL(0) → L(24)** → M(0) → L(0) | 느리게. 큰 멈춤은 3연타 **앞**(P53 뒤). 침묵 3연타 ③ M→XL→L(크롭이 가장 가까움). 접촉 뒤 큰 간격 없음 |
| B9 P59–62 | M(0) → M(0) → M(**600**) → XL(끝) | 달리기 P59–60 → 회차 최대 멈춤 P61 뒤 → XL |

- 휴대폰 기준(폭 약 390px): XL ≈ 한 화면, L ≈ 0.75화면, M ≈ 0.55화면, ST ≈ 0.3화면. 큰 간격 600px은 화면 하나를 넘지 않는다(700 상한).
- 침묵 3연타 안(P17–19, P45–47, P54–56)에는 **효과음도 없다.**

### 2-9. 골무 처리 [확인 요청 회신, 요구 (e)]

- **확인: style-bible §13-4 · character-sheets §6-2의 해석을 그대로 확정한다.** 짧은 끈을 목에 건 채로는 오른손 중지에 닿지 않는다. 그래서 **P09(바느질)와 P28(밀랍 누르기)에서는 골무를 목에서 벗겨 오른손 중지에 끼고, 짧은 갈색 가죽 끈이 손가락·손등에서 느슨히 늘어진다.** 그 두 컷에서는 쇄골 위에 골무가 없다(둘 다 손 클로즈업이라 쇄골은 화면 밖). 나머지 모든 컷은 쇄골 위 끈.
- 끈을 길게 바꾸는 안은 쓰지 않는다(외형 디자인 변경이 되고, 늘 쇄골 위에 얹힌 실루엣이 무너진다).
- **추가 플래그:** style-bible §6-3과 beatsheet P29는 작업대 두루마리 내용물에 "놋쇠 골무"를 적었다. 그러면 한 화면에 골무가 둘(목 + 두루마리)이 되어 F19(골무 밀랍 = 그녀 집안의 인장)가 흐려진다. **두루마리에는 골무를 그리지 않는다**(style-bible §7 `TOOL_ROLL` 문자열에도 골무가 없다). prompt-smith 반영 요청.

---

## 3. 패널

> 필드: scene_id / location · light — beat · tension · flags — size · aspect — camera — composition(누가 어디) — picture(동작·표정·손) — hands — emotion — light/colour — bubble(art_space 제안 · 화자 위치 · 꼬리) 또는 silent — dialogue_ref — gap_after — motion — must NOT — Flow(첨부·앵커·난이도)

### B1 · 콜드오픈: 규칙 시연 (P01–P05) · 긴장 6 · 대사 1/5

### panel_001 · P01
- scene_id: S1 / location: `LOC_GREENHOUSE` (통로·재의 길) · light: `LIGHT_GH_NIGHT`
- beat: B1 · tension 5–6 · flags: ⟨세로 대형 ①⟩ ⟨첫 시각 훅⟩ ⟨하드 스톱⟩ ⟨복선 F25 한 손만 장갑 실루엣⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: extreme long shot, low angle from the aisle entrance, one-point perspective along the ash path
- composition: 재의 길이 화면 아래 가운데에서 시작해 돔 아래 소실점(위 1/3)까지 리딩 라인. 양옆 상아빛 흰 장미 화단(가시 보임)과 회색 돌 테두리, 위로 닫히는 아치형 검은 철골과 옅은 에메랄드 유리. 휴고는 **위 1/3 가운데에 작게**, 돔 아래 금빛 램프를 등진 정면 역광 실루엣.
- picture: 키 큰 어두운 기둥, 상아색 크라바트 한 줄, 긴 코트 자락, 얼굴은 그림자(이목구비 보이지 않음). **화면 오른쪽 손(그의 왼손) = 검은 장갑, 손끝 갈라진 터진 검은 장갑을 쥠** / **화면 왼쪽 손(그의 오른손) = 맨손, 방금 꺾은 흰 장미 한 송이**(밝은 상아색이라 실루엣에서도 읽힘). 두 손을 몸에서 조금 떨어뜨려 "한 손만 장갑"이 읽히게. 재의 길 가장자리에 닿은 살아 있는 장미는 멀쩡하다.
- hands: `H_B1` · 접촉 없음
- emotion: 고요, 고립, 의식(儀式). 독자 질문 "저 손은 뭐지?"
- light / colour: 밤. 램프 아래 금빛 웅덩이, 사이사이 청록 어둠, 유리로 드는 옅은 은녹색 달빛. 그의 윤곽에 램프 림라이트.
- bubble: **silent** (화면을 꽉 채워도 된다)
- dialogue_ref: —
- gap_after: **0**
- motion: 시선 아래(길 시작) → 위(그) → 다음 컷 손 클로즈업으로 줌 인
- must NOT: 얼굴 이목구비, 길에서 오르는 연기·불씨, 재의 길 주변의 시든 장미, 이 거리에서 보이는 핏줄, 진홍.
- Flow: **S1 장면 앵커**(P02–P05에 첨부). 첨부 `HUGO_turnaround` (+선택 `LOC_GREENHOUSE`). 변형 4장. 난이도 **중**(작은 실루엣의 한 손 장갑).

### panel_002 · P02
- scene_id: S1 / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_NIGHT`
- beat: B1 · tension 6–7 · flags: ⟨큰 gap ① 320⟩ ⟨복선 F01 규칙 앞 절반 ①(사물)⟩ ⟨F26 재의 길 = 이 재⟩ ⟨효과음 1: P01–P04 무대사 4연속을 끊는 장치, 빼지 말 것⟩
- size / aspect: **L · 3:4** (3:4가 없으면 **9:16**: 세로 흐름 컷 예외)
- camera: extreme close-up, slightly low, vertical tilt-down flow from the rose to the ground
- composition: 위 1/3 = 시드는 장미 꽃송이 / 가운데 = 줄기를 쥔 그의 **맨 오른손**(손등이 카메라 쪽, 손목·흰 셔츠 커프·미드나이트 블루 소매 끝) / 아래 1/3 = 떨어지는 회흑색 재, 재의 길 끝, 검은 장화 코끝. 오른쪽 가운데~아래는 어두운 청록 깊이(효과음 자리).
- picture: 손가락이 닿은 줄기 자리에서 무광 먹빛이 줄기를 타고 꽃잎으로 번지고, 꽃잎이 오그라들어 검어진 뒤 고운 회흑색 재로 부서져 떨어진다. 재가 내려앉아 **길과 같은 색**이 된다. 가시가 보이는 줄기. 손등 핏줄: 손끝·손등에서 가장 짙고, 검지·중지 마디에서 손목 새끼손가락 쪽으로 내려가는 굵은 뿌리 하나(`VEIN_LANDMARK`), 손목에서 머리카락 같은 가닥 몇 개가 커프 밑으로 사라진다. **손은 떨지 않는다.**
- hands: `H_B1` (R 맨손, 핏줄 선명) · 접촉: 그의 맨손가락 → 장미 줄기
- emotion: 익숙한 의식, 담담한 체념
- light / colour: 뒤·위의 램프빛이 장미를 비추고 손은 반쯤 그늘. 저주 색은 무광.
- bubble: 효과음 1 · art_space 제안: **오른쪽 가운데~아래, 떨어지는 재 옆의 어두운 청록 깊이** (EN: the dark teal-green depth to the right of the falling ash) · 꼬리 없음
- dialogue_ref: [효과음] "바스스…" (script P02 `KM 효과음`)
- gap_after: **320** (큰 gap ①)
- motion: 위 → 아래 (꽃 → 손 → 재 → 길). 시선이 재를 따라 떨어진다.
- must NOT: 불꽃·연기·불씨·빛·그을음·피, 손 떨림, 커프 위로 올라온 핏줄, 재가 길과 다른 색. 장면 부정어 `no flame, no smoke, no embers, no glow.`
- Flow: 첨부 `HUGO_hands`, P01. 난이도 **중**(시드는 단계 표현 + 핏줄 무늬).

### panel_003 · P03
- scene_id: S1 / location: `LOC_GREENHOUSE` (통로 옆 판석) · light: `LIGHT_GH_NIGHT`
- beat: B1 · tension 6–7 · flags: ⟨복선 F01 ②(사람)⟩ ⟨고르지 않은 닿음 = 사고⟩ ⟨매치 컷 원본 → P17⟩
- size / aspect: **M · 1:1**
- camera: medium shot of the two hands and the tray, waist height, diagonal 3/4 angle from the maid's side, his bare RIGHT inner wrist turned toward camera
- composition: 왼쪽 = 장갑 시중 하녀(어깨 아래, 왼쪽 위 가장자리에 다급한 얼굴 반쯤), **재의 길이 아니라 옆 연석회암 판석 위**. 오른쪽 = 휴고(가슴 아래만, 얼굴은 화면 위 밖). 가운데 = 기울어진 백랍 쟁반과 미끄러지는 접힌 새 검은 장갑, 그것을 잡으려는 하녀의 **오른손 검지·중지 손끝이 그의 맨 오른손목 안쪽을 스치는 순간.** 오른쪽 아래 가장자리에 그의 장갑 낀 왼손과 터진 장갑(작게).
- picture: 그가 맨 오른손으로 장갑을 집으려 뻗었고, 쟁반이 기울었다. 하녀(20대 중반 성인, 주근깨, 흰 모자 아래 적갈색 머리, 병 초록 제복, 흰 앞치마, 맨손). 그녀의 손끝은 **아직 따뜻한 피부색**(잿빛은 P04).
- hands: `H_B1` / 하녀 맨손 · 접촉: 하녀 R 검지·중지 손끝 → 그의 R 손목 안쪽 (스침)
- emotion: 누구의 잘못도 아닌 사고. 하녀 반사적 다급함, 그는 멈칫(손만으로)
- light / colour: 밤 램프 웅덩이, 백랍 쟁반에 램프 반사.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 왼 → 오, 미끄러지는 장갑을 따라 아래로(P04 바닥으로)
- must NOT: 하녀 손끝의 잿빛(아직), 하녀가 재의 길을 밟음, 그의 얼굴, 그가 하녀를 잡거나 미는 동작, 하녀의 다른 손가락·손등 접촉.
- Flow: 첨부 `HUGO_hands`, P01 (+선택 `MAID_ref`). **이 확정본을 P17에 첨부**(손목 앵글). 난이도 **중**.

### panel_004 · P04
- scene_id: S1 / location: `LOC_GREENHOUSE` (통로 옆 판석) · light: `LIGHT_GH_NIGHT`
- beat: B1 · tension 7 · flags: ⟨B1 정점⟩ ⟨복선 F06 ASH_GREY 첫 노출⟩ ⟨효과음 1⟩
- size / aspect: **ST · 16:9**
- camera: low horizontal angle near the floor
- composition: **왼쪽 절반** = 하녀의 오른손(손바닥 쪽이 카메라)이 가슴께로 당겨지는 중, 검지·중지 손끝 바닥이 무광 잿빛. 위 가장자리에 그녀의 얼굴 아래 반(놀람 → 통증). **오른쪽 절반** = 연석회암 판석에 떨어져 튀는 백랍 쟁반과 접힌 새 검은 장갑(약간의 움직임 흔들림).
- picture: `ASH_GREY`: 시든 꽃잎 같은 마른 결, 경계는 닿은 손끝 모양, 검은 테두리 없음, 은색·흰색 아님. 그녀는 그를 노려보지 않는다.
- hands: 하녀 R 검지·중지 손끝 바닥 잿빛 · 접촉 없음
- emotion: 놀람 → 통증, **원망 없음**
- light / colour: 밤. 판석에 램프빛, 쟁반 반사.
- bubble: 효과음 1 · art_space 제안: **오른쪽 위, 튀는 쟁반 위의 청록 어둠** (EN: the teal-green darkness above the bouncing tray) · 꼬리 없음
- dialogue_ref: [효과음] "쨍그랑!" (script P04 `KM 효과음`)
- gap_after: **0**
- motion: 왼쪽(손) → 오른쪽(쟁반), 한 줄로 읽힘
- must NOT: 피·상처·비명, 원망·노려봄, 잿빛이 다른 손가락·손등으로 번짐, 은색·흰색·검은 테두리, 연기.
- Flow: 첨부 P03 (+선택 `MAID_ref`; 잿빛 값 참고로 `PETRA_hands`를 붙일 수 있으나 손 모양은 하녀의 가는 손). 우선순위: 잿빛 손끝 > 쟁반. 난이도 **중**.

### panel_005 · P05
- scene_id: S1 / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_NIGHT`
- beat: B1 · tension 6 · flags: ⟨복선 F08 숨기는 손⟩ ⟨F27 터진 장갑 = 장갑장이가 필요한 이유⟩ ⟨매치 컷 원본 → P47⟩ ⟨gap 160 밤 → 아침⟩
- size / aspect: **M · 1:1**
- camera: medium shot at his waist height, the burst glove in sharp foreground focus
- composition: **오른쪽 전경** = 그의 장갑 낀 왼손이 쥔 터진 장갑(초점). **오른쪽 중경** = 한 걸음 물러선 휴고, 맨 오른손은 등 뒤(팔 각도로 보임), 얼굴은 위쪽에 반쯤 그늘(눈은 그늘, 입·턱은 빛). **왼쪽 후경** = 반쯤 돌아서 손을 감싸 쥔 하녀(흐림). 두 사람 사이 위쪽에 빈 유리면.
- picture: `HE_SHAME`. 터진 장갑: 검지·중지 손끝 가죽이 무광 검회색으로 타고 마른 나무껍질처럼 갈라짐. 하녀 frightened and pitying.
- hands: `H_B1`, R은 등 뒤 · 접촉 없음
- emotion: 그 = 수치와 책임, 억누른 다급함 / 하녀 = 두려움과 연민
- light / colour: 밤. 그의 얼굴 위 반은 그늘(2단 등장은 B3).
- bubble: ① 휴고(오른쪽, 그늘진 얼굴) · art_space 제안: **위쪽 가운데, 그가 막 물러난 자리 위의 흐린 어두운 에메랄드 유리와 철골** (EN: the upper centre, dark emerald glass panes and iron ribs softly out of focus above the space he just stepped back from) · 꼬리 ↘ 휴고 입
- dialogue_ref: 휴고 → 하녀 "가라." (script P05) — 물러서고 손을 감춘 **뒤**의 말(지키는 명령)
- gap_after: **160**
- motion: 그가 오른쪽으로 물러난다 → 다음 장면으로 끊김
- must NOT: 그가 하녀를 밀거나 가리키는 손짓, 오른손 장갑, 얼굴 전체가 밝음, 터진 장갑에 진홍 스티치(다른 고장 장갑), 하녀의 원망.
- Flow: 첨부 `HUGO_turnaround`, `HUGO_hands`, P01. **이 확정본을 P47에 첨부**(자세). 난이도 **중**.

--- SCENE BREAK --- (S1 → S2a · `LOC_GREENHOUSE` 밤 → `LOC_WORKSHOP` 거리 아침)

### B2 · 그녀의 욕망과 상처 (P06–P12) · 긴장 5(의도된 하강) · 대사 5/7

### panel_006 · P06
- scene_id: S2a / location: `LOC_WORKSHOP` (장갑장이 거리) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 4–5 · flags: ⟨타이머: 빚 기한⟩ ⟨복선 F21 법대로⟩ ⟨페트라 첫 등장⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: long shot of the lane, eye level slightly low, from downhill
- composition: 비탈진 자갈길이 화면 오른쪽 위(언덕)로 오른다. **왼쪽** = 모퉁이 공방(오커 회벽 목골조, 가운데가 닳은 낮은 돌 문턱). 문간에 **팔짱 낀 페트라**(중경 왼쪽, 무릎 위~전신). **오른쪽 중경** = 가죽상(땅딸막한 50대, 회색 구레나룻, 높은 짙은 갈색 실크해트, 밤색 프록코트, **밤색 장갑**, 표지가 빈 갈색 장부). **왼쪽 위** = 사다리 위 사내가 휘감긴 쇠 받침대에서 **글자 없는** 검은 연철 장갑 실루엣 간판(손가락이 위로 향한 왼손 장갑)을 떼어 냄. 뒤쪽에 연장 상자·나무 손틀을 나르는 사내 둘(작게, 흐리게). **오른쪽 위 1/3** = 지붕 위 옅은 아침 하늘(말풍선 자리).
- picture: 페트라 `PE_LEVEL`(굳은 자존심, 무표정): 꿀갈색 낮은 쪽머리(귀 보임), 곧고 짙은 눈썹, 흙갈색 작업복, 팔꿈치 아래까지 걷은 소매, 캔버스 앞치마, 쇄골 위 골무, 팔짱 위로 **왼손목 매듭 실**이 보이게, **왼쪽 허리**에 황갈색 작업 장갑. 가죽상 polite, cool, ledger-like.
- hands: `P_BARE` · `MARK_CLEAN` / 가죽상 밤색 장갑 · 접촉 없음
- emotion: 압류가 진행된다. 그녀 굳은 자존심 / 그 장부 같은 공손. 장갑 낀 상인과 맨손 장인(계층)
- light / colour: 늦여름 아침 햇빛, 골목의 먼지 입자, 황갈·오커·엄버.
- bubble: ① 가죽상(오른쪽) · art_space 제안: **오른쪽 위 1/3, 지붕 위 옅은 아침 하늘** (EN: the pale morning sky above the rooftops, upper right third) · 꼬리 ↓ 가죽상
- dialogue_ref: 가죽상 → 페트라 "환매는, 분기 지대일까지요." (script P06)
- gap_after: **0**
- motion: 왼쪽(그녀) ↔ 오른쪽(가죽상) 대치, 위쪽 사다리의 간판이 내려감
- must NOT: 간판·장부·문·창의 글자·숫자, 회중시계·시곗줄, 그녀 옷의 빨강, 과장된 악역 얼굴, 그녀가 장갑을 낀 손.
- Flow: **S2 장면 앵커**(P07, P11, P12에 첨부). 첨부 `PETRA_turnaround`. 인물 4–5명 → 사내들은 작고 흐리게. 난이도 **중상**.

### panel_007 · P07
- scene_id: S2a / location: `LOC_WORKSHOP` (거리, 공방 문간) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 5 · flags: ⟨위트: 값의 말 대 법의 말⟩ ⟨복선 F21⟩
- size / aspect: **M · 1:1**
- camera: medium two-shot, waist up, slightly low angle from her side
- composition: **왼쪽** = 페트라 3/4(오른쪽을 향함), 정면으로 그의 눈을 본다. **오른쪽** = 가죽상 3/4(왼쪽을 향함), 덮은 장부 위에 장갑 낀 두 손을 포갬. 두 사람 머리 꼭대기는 위에서 30–35%(그의 모자 꼭대기 약 20%). 그녀 머리 위 = 그늘진 회벽과 문 상인방, 그의 모자 옆 = 햇빛 든 회벽과 하늘.
- picture: `PE_LEVEL` / 가죽상 polite, cool, never sneering.
- hands: `P_BARE` · `MARK_CLEAN` / 밤색 장갑 · 접촉 없음
- emotion: 설전. 냉정한 위트, 모욕 없음
- light / colour: 아침빛, 그녀 얼굴 쪽은 문간의 부드러운 그늘.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 그녀 머리 위의 그늘진 회벽과 문 상인방** (EN: the shadowed plaster wall and door lintel above her head) · 꼬리 ↓ 페트라 / ② 가죽상 · art_space 제안: **오른쪽, 실크해트 옆~위의 햇빛 든 회벽과 하늘(①보다 아래), 크메르어 줄이 길어 넓게** · 꼬리 ↓ 가죽상
- dialogue_ref: ① 페트라 → 가죽상 "기한. 아직이에요." ② 가죽상 → 페트라 "연장은 담보였지요, 아가씨. 법대로입니다." (script P07)
- gap_after: **0**
- motion: 왼 → 오 (말 → 말)
- must NOT: 장부 표지 글자, 시계, 비웃음, 그가 그녀를 만짐.
- Flow: 첨부 P06, `PETRA_expressions`. 난이도 **중**.

--- SCENE BREAK --- (S2a → S2b · 거리 → 공방 안)

### panel_008 · P08
- scene_id: S2b / location: `LOC_WORKSHOP` (공방 안, 압류 중) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 4–5 · flags: ⟨복선 F09 장갑을 끼지 않는 장인⟩ ⟨위트 이어짐⟩
- size / aspect: **M · 1:1**
- camera: high angle over the scarred oak cutting table, hands and shears in focus
- composition: 가운데~아래 = 맨손으로 황갈색 가죽을 자기 작은 가위로 재단하는 두 손(초점, 왼손목 매듭 실). **위 가장자리 왼쪽** = 그녀의 얼굴(눈은 가위에, 들지 않음). **위 오른쪽** = 빈 못, 빈 선반, 회벽의 옅은 사각형 자국(낮은 디테일). 격자창 빛이 재단대에 비스듬히.
- picture: `PE_LEVEL`(일에 집중). 반쯤 빈 공방(half-emptied: bare pegs, an empty shelf, pale rectangular marks). 배경 못에 진홍 실패 하나(작게) 허용. 쇄골 위 골무.
- hands: `P_BARE` · `MARK_CLEAN` · 접촉 없음
- emotion: 압류 중에도 손을 멈추지 않는다. 일로 버틴다
- light / colour: 격자창으로 드는 아침빛, 먼지 입자.
- bubble: ① 페트라(화면 밖 사내들·가죽상에게) · art_space 제안: **오른쪽 위, 빈 못 위의 그늘진 회벽** (EN: the shadowed plaster wall above the bare pegs, upper right) · 꼬리 ↙ 페트라 얼굴
- dialogue_ref: 페트라 → 사내들·가죽상 "이 가죽은 두고. 주문품이에요." (script P08)
- gap_after: **0**
- motion: 위(얼굴) → 아래(가위), 가위 날 방향이 다음 컷 인서트로
- must NOT: 그녀 손의 장갑, 갈색 종이 본·벽의 글자·숫자, 진홍 스티치(실패만 허용).
- Flow: **S2b 장면 앵커**(P09, P10에 첨부. P37은 방 구조만 참조). 첨부 `PETRA_hands`, `PETRA_turnaround`. 난이도 **하~중**.

### panel_009 · P09
- scene_id: S2b / location: `LOC_WORKSHOP` (공방 안) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 4 · flags: ⟨복선 F16 진홍 ①⟩ ⟨F17 세 손가락 ①⟩ ⟨F21⟩ ⟨화면 밖 말풍선⟩ ⟨진홍 허용 1/3⟩ ⟨골무 → 오른손 중지(§2-9)⟩
- size / aspect: **ST · 16:9**
- camera: horizontal extreme close-up insert of the hands on the table
- composition: **왼쪽 2/3** = 두 손. **오른손 엄지·검지·중지 세 손가락이 솔기를 집고 바늘을 민다**(중지에 놋쇠 골무, 목에서 벗긴 짧은 갈색 가죽 끈이 손등에서 느슨히 늘어짐). 왼손은 납작한 **황갈색** 키드 커프 띠를 눌러 잡는다(왼손목 매듭 실 보임). 커프 가장자리를 따라 **손가락 한 마디 너비로 이어진 깊은 진홍 비단 십자 스티치 띠.** 재단대 위 진홍 실패. **오른쪽 1/3** = 문 쪽(거리 쪽), 초점 밖의 밝은 회벽과 문간 빛(조용한 면).
- picture: 정확하고 침착한 손. 세 손가락 손버릇(P36·P37과 같은 오른손 집기).
- hands: `P_BARE` · 골무 R 중지 · `MARK_CLEAN` · 접촉: 손 → 가죽·바늘
- emotion: 침착, 장인의 정확함
- light / colour: 아침빛. 진홍만 약한 비단 광택.
- bubble: ① 가죽상(**화면 밖, 오른쪽 = 문 쪽**) · art_space 제안: **오른쪽 1/3, 초점 밖의 회벽과 문간 빛**(크메르어 약 23자 → 1/3 이상) (EN: the right third, the out-of-focus plaster wall and doorway light) · 꼬리 → 오른쪽 가장자리 밖
- dialogue_ref: 가죽상(화면 밖) "유리 저택 일은… 아무도 안 받지요." (script P09) — 앞 컷 대화를 이어받는 목소리
- gap_after: **0**
- motion: 왼쪽 손 → 오른쪽 문(목소리 쪽)
- must NOT: 따로 떨어진 X자·글자·숫자처럼 보이는 스티치 배열, 피처럼 보이는 빨강, 골무가 목과 손가락에 동시에(골무는 하나), 진홍이 이 띠와 실패 밖에.
- Flow: 첨부 `PETRA_hands`, P08. 난이도 **중**(스티치가 글자처럼 보이지 않게).

### panel_010 · P10
- scene_id: S2b / location: `LOC_WORKSHOP` (공방 안, 창가) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 5 · flags: ⟨복선 F06 ASH_GREY ②: 독자만 P04와 잇는다⟩ ⟨F22 어머니의 고요⟩
- size / aspect: **M · 1:1**
- camera: interior medium shot facing the window, the mother in 3/4 profile
- composition: 가운데~오른쪽 = 창가 나무 의자에 앉은 어머니(상반신과 무릎). **무릎 위 두 손이 화면 아래 1/3에 분명히.** 왼쪽 위 = 작은 격자창 너머 언덕 위의 초록으로 반짝이는 유리 온실(작게, 흐리게).
- picture: 어머니(50대 초반, 작고 둥근 체구, 둥근 얼굴, 처진 짙은 갈색 눈, 리넨 모자 아래 흰머리 많은 짙은 갈색 쪽머리, 슬레이트 청색 옷, 바랜 겨자색 숄). **양손 엄지·검지·중지 첫 마디가 사방으로 무광 잿빛, 둘째 마디까지 옅은 회색 실선.** 눈은 창 너머 온실. 고요하고 원망 없는 얼굴. **페트라와 닮지 않게.**
- hands: 어머니 양손 세 손끝 잿빛 · 접촉 없음
- emotion: 상실을 받아들인 고요
- light / colour: 창으로 드는 아침빛, 얼굴은 부드럽게 읽힌다.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 손(아래) → 눈 → 창 밖 온실(위 왼쪽)
- must NOT: 원망·분노·눈물, 페트라와 닮은 얼굴(각진 턱·곧은 짙은 눈썹·꿀갈색 머리 금지), 잿빛의 은색·흰색·검은 테두리, 잿빛이 손바닥·손등 전체로.
- Flow: 첨부 P08 (+선택 `MOTHER_ref`). 난이도 **중**.

--- SCENE BREAK --- (S2b → S2c · 공방 안 → 거리, 이웃 공방 카운터)

### panel_011 · P11
- scene_id: S2c / location: `LOC_WORKSHOP` (거리, 이웃 공방의 반문 카운터) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 5 · flags: ⟨복선 F24 흑장미 인장⟩ ⟨F29 거리의 불문율⟩
- size / aspect: **M · 1:1**
- camera: medium shot at counter height, the sliding paper in focus
- composition: 가운데 = 반문(위가 열린 쪼갠 문) 카운터 위를 **화면 오른쪽으로** 미끄러지는 접힌 크림색 백지 의뢰서와 흑장미 검은 밀랍(초점). 카운터 너머 = 이웃 장갑장이 둘(60대 회색 수염 남, 40대 여, 앞치마, 맨손)이 고개를 젓고 눈을 피한다. 위쪽 = 그늘진 공방 안 들보.
- picture: 밀려다니는 의뢰서. 두려움, 외면.
- hands: 이웃 맨손 · 접촉: 손 → 의뢰서(밀어냄)
- emotion: 두려움, 외면
- light / colour: 아침빛이 카운터에, 안쪽은 그늘.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 의뢰서가 왼 → 오로 밀려감(다음 컷 그녀의 손이 집는다)
- must NOT: 의뢰서의 글자(완전한 백지), 밀랍의 문장·글자(장미 모양만), 간판 글자.
- Flow: 첨부 P06. 난이도 **중**.

### panel_012 · P12
- scene_id: S2c / location: `LOC_WORKSHOP` (거리) · light: `LIGHT_WS_MORNING`
- beat: B2 · tension 5–6 · flags: ⟨결정 1: 아무도 받지 않는 일을 맡는다⟩ ⟨B3로 잇는 시선⟩ ⟨gap 160 아침 → 해 질 녘⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: low angle, 3/4 rear profile from her right side, looking up the hill
- composition: **왼쪽 가운데~아래** = 페트라 옆얼굴(곧고 짙은 눈썹, 각진 턱, 귀), 위 오른쪽을 올려다봄. **오른쪽 아래 전경** = 그녀의 맨 오른손이 든 접힌 백지 의뢰서(흑장미 밀랍이 보이게). **오른쪽 위** = 지붕 너머 언덕 위 유리 온실(작게, 초록 반짝임). **왼쪽 위 40%** = 낮은 지붕 위 옅은 아침 하늘(말풍선 자리). 중경 왼쪽 = 굳은 이웃 둘(작게), 모퉁이 집에 간판이 떼어진 빈 쇠 받침대.
- picture: 결단, 값을 매기는 눈. 두려움보다 직업.
- hands: `P_BARE` · `MARK_CLEAN` · 접촉: R 손 → 의뢰서
- emotion: 결단
- light / colour: 아침빛이 얼굴 옆선에.
- bubble: ①② 페트라 · art_space 제안: **왼쪽 위 40%, 낮은 지붕 위 옅은 아침 하늘**(온실은 가리지 않는다) (EN: the pale morning sky above the low rooftops, upper left) · ① 위, ② 바로 아래 · 꼬리 ↓ 페트라 얼굴
- dialogue_ref: ① 페트라 "내가 받아요." ② 페트라 "공방. 되찾을 거예요." (script P12)
- gap_after: **160**
- motion: 시선 왼쪽 아래 → 오른쪽 위(언덕) → 다음 컷 P13(언덕 위 저택)
- must NOT: 의뢰서 글자, 간판 글자, 그녀 손의 장갑, 빨강.
- Flow: 첨부 `PETRA_turnaround`, P06. 난이도 **중**.

--- SCENE BREAK --- (S2c → S3a · `LOC_WORKSHOP` 아침 → `LOC_GREENHOUSE` 외관 해 질 녘)

### B3 · 도착 · 첫 충돌 · 첫 접촉 (P13–P20) · 긴장 7 · 대사 4/8

### panel_013 · P13
- scene_id: S3a / location: `LOC_GREENHOUSE` (외관) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 5–6 · flags: ⟨세로 대형 ②⟩ ⟨하드 스톱: 경관⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: low vertical wide from the gravel path below, looking up the hill
- composition: **위 2/3** = 낮은 언덕 위 오래된 회색 돌 저택(가파른 슬레이트 지붕, 높은 굴뚝), 남쪽 옆구리를 따라 길쭉한 검은 주철·유리 온실과 끝의 유리 돔. 옅은 에메랄드 유리가 안쪽 램프로 **초록 금빛 등불**처럼 빛난다. 돔 위 남은 짙은 파란 하늘. **아래 1/3** = 낮게 다듬은 생울타리 사이로 오르는 자갈길, **화면 아래 끝에 작게** 페트라의 뒷모습(왼팔 아래 가죽 끈으로 묶은 말린 캔버스 연장 두루마리).
- picture: 걸어 올라간다. 궁전이 아니라 오래되고 조용한 집.
- hands: (멀어서 판별 불가) · 접촉 없음
- emotion: 경관의 압도, 문턱
- light / colour: 해 질 녘. 차가운 하늘 대 따뜻한 온실빛.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 아래(그녀) → 위(돔) 큰 상승
- must NOT: 문장(紋章)·문패·글자, 궁전 같은 화려함·성채, 눈·서리·비, 새·동물.
- Flow: 첨부 `PETRA_turnaround` (+선택 `LOC_GREENHOUSE`). 변형 4장. 난이도 **하~중**.

--- SCENE BREAK --- (S3a → S3b · 외관 → 온실 입구·통로)

### panel_014 · P14
- scene_id: S3b / location: `LOC_GREENHOUSE` (입구 → 통로) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 6 · flags: ⟨남주 2단 등장 ① 풀샷⟩ ⟨복선 F28 저택의 두려움⟩ ⟨이름 '페트라' 1회⟩ ⟨매치 컷 원본 → P19 하인 배치⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: deep perspective from just behind Petra's right shoulder at the entrance, looking down the aisle to the dome
- composition: **오른쪽 전경** = 페트라 3/4 뒷모습(어깨, 쪽머리, 귀, 왼팔 아래 두루마리), 흰 대리석 띠를 막 지나 통로 머리에 선다(**아직 재의 길 위가 아니다**). **왼쪽 중경** = 바닥을 가로지르는 흰 대리석 띠 위에 한 줄로 선 하인들: 통로 쪽 맨 앞에 집사(60대, 키 크고 마름, 조금 구부정, 단정히 빗은 회백색 머리, 검은 연미복, 앞으로 모은 맨손), 그 뒤 요리사(40대, 흰 모자), 하녀(30대), 젊은 하인(20대, 병 초록 제복), **맨 끝에 장갑 시중 하녀.** **가운데** = 재의 길이 돔으로 수렴, 소실점 근처 돔 아래에 **휴고 전신(작게)**: 키 큰 어두운 기둥, 상아색 크라바트 한 줄, **양손 모두 검은 장갑.**
- picture: 집사 fearful courtesy, 하인들 굳음. 페트라는 옆얼굴 일부만(무표정, 값 매기는 눈). 휴고 멀리 정지.
- hands: `H_GLOVED_BOTH` / `P_BARE` · `MARK_CLEAN` · 접촉 없음
- emotion: 도착 알림 → 자기소개. 두려운 공손 / 값 매기는 눈 / 정지
- light / colour: 해 질 녘의 초록 금빛, 막 켠 호박색 램프.
- bubble: ① 집사(왼쪽 중경) · art_space 제안: **왼쪽 위, 하인들 위의 흐린 어두운 에메랄드 유리와 철골** · 꼬리 ↓ 집사 / ② 페트라(오른쪽 전경) · art_space 제안: **오른쪽 위, 그녀 머리 위의 유리면(①보다 조금 아래)** · 꼬리 ↓ 페트라. **가운데 소실점(휴고)은 말풍선으로 가리지 않는다.**
- dialogue_ref: ① 집사 → 휴고 "장갑장이가 왔습니다, 백작님." ② 페트라 "페트라. 장갑장이." (script P14)
- gap_after: **0**
- motion: 전경(그녀) → 깊이(재의 길) → 끝(그). 하인들은 옆으로 비켜선 벽
- must NOT: 휴고의 맨 오른손(여기선 양손 장갑), 하인이 대리석 띠를 넘음, 페트라가 재의 길 위, 길의 연기, 글자.
- Flow: **S3b 장면 앵커**(P15–P20에 첨부). 첨부 `PETRA_turnaround`, `HUGO_turnaround` (+선택 `MAID_ref`). 인물 7명 → 하인들은 작고 부드러운 초점, 휴고는 작아도 실루엣이 분명하게. 난이도 **상**.

### panel_015 · P15
- scene_id: S3b / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 6–7 · flags: ⟨남주 2단 등장 ② 클로즈업⟩ ⟨P54 거울 구도 원본⟩ ⟨복선 F27⟩ ⟨회차 최고 밀도 얼굴 컷⟩
- size / aspect: **M · 1:1**
- camera: close-up, chest up, eye level; face slightly right of centre; hands at the bottom edge
- composition: **가운데~오른쪽** = 휴고 얼굴(얼굴 앵커: **그의 오른쪽 눈썹 위로 내려온 머리 한 가닥 = 화면 왼쪽**, 처진 눈꺼풀의 옅은 유리빛 초록 눈, 눈 밑 옅은 그늘, 턱까지 채운 깃과 상아색 크라바트). 시선은 **아래 왼쪽**(화면 밖 그녀의 손). **아래 가장자리 오른쪽** = 장갑 낀 왼손이 오른손 장갑의 손끝을 하나씩 집어 천천히 당기는 동작(오른손 손가락 끝이 화면 왼쪽을 향함). **왼쪽 위 1/3** = 흐린 어두운 에메랄드 유리와 철골.
- picture: `HE_WEARY`(서늘한 친절, 한쪽 입꼬리의 건조함). 겁을 주어 알고 고르게 하려는 얼굴.
- hands: `H_REMOVING` · 접촉 없음
- emotion: 서늘한 친절
- light / colour: 해 질 녘 초록 금빛, 램프빛이 얼굴 한쪽에.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위 1/3, 흐린 에메랄드 유리와 검은 철골** (EN: the upper left third, dark emerald glass and black iron ribs softly out of focus) · 꼬리 ↘ 휴고 입
- dialogue_ref: 휴고 → 페트라 "이걸 보면… 다들 떠났소." (script P15)
- gap_after: **0**
- motion: 그의 시선 아래 왼쪽 → 다음 컷 내민 손
- must NOT: 그녀 얼굴을 보는 눈, 핏줄이 깃 위·목·얼굴에(오른손 손끝이 장갑에서 막 나오는 정도만), 반지, 초록 기가 도는 코트.
- Flow: 첨부 `HUGO_expressions`, `HUGO_turnaround`, P14. **이 확정본을 P54에 첨부**(손 동작 거울). 난이도 **중**(얼굴 + 장갑 벗는 손).

### panel_016 · P16
- scene_id: S3b / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 7 · flags: ⟨잠금 대사⟩ ⟨하드 스톱 숨 60⟩ ⟨이중의미 후보: 맡다/받다⟩ ⟨복선 F01 보강⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: from his waist height, past his extended hand, deep focus to Petra
- composition: **오른쪽 전경(크게)** = 그의 **맨 오른손**, 손바닥을 반쯤 보이며 내밂: 손끝·손등의 가장 짙은 먹빛 핏줄이 뿌리처럼 갈라지고(`VEIN_LANDMARK`), 손목에서 가늘어져 흰 셔츠 커프 밑으로 사라진다. **오른쪽 아래 가장자리** = 장갑 낀 왼손에 늘어진 벗은 오른손 장갑. **가운데 왼쪽 후경** = 재의 길에 **첫 발을 내딛는** 페트라(머리는 위에서 약 40%), 눈은 그의 손을 잰다. **오른쪽 위 1/3** = 흐린 어두운 에메랄드 유리.
- picture: 페트라 `PE_CRAFT`(공포보다 장인의 호기심, 충동적 반항).
- hands: `H_STD` (벗은 R 장갑은 L이 쥠) / `P_BARE` · `MARK_CLEAN` · 접촉 없음
- emotion: 그 = 위협이 아니라 출구 / 그녀 = 반항 + 호기심
- light / colour: 해 질 녘. 손은 램프빛을 받아 핏줄이 무광으로 또렷.
- bubble: ① 휴고(**화면 오른쪽 밖, 손만 보임**) · art_space 제안: **오른쪽 위 1/3, 내민 손 위의 흐린 에메랄드 유리** · 꼬리 → 오른쪽 가장자리(휴고) · **단독 말풍선**
- dialogue_ref: 휴고 → 페트라 **"그래도 맡겠소?"** [잠금] (script P16)
- gap_after: **60**
- motion: 전경 손 → 후경 그녀(다가옴). 다음 컷에서 두 손이 만난다
- must NOT: 커프 위로 올라온 핏줄, 빛나는 핏줄, 룬·문신 같은 무늬, 겁먹은 그녀, 그녀가 재의 길 밖으로 비켜 걸음, 글자.
- Flow: 첨부 `HUGO_hands`, `PETRA_turnaround`, P14. 난이도 **중**.

### panel_017 · P17
- scene_id: S3b / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 7–8 · flags: ⟨결정 2: 그의 맨손을 먼저 잡는다⟩ ⟨침묵 3연타 ①-1⟩ ⟨L2 #1 첫 손잡기⟩ ⟨복선 F02 '면역' 시작⟩ ⟨P03 매치 컷⟩ ⟨원하는 손⟩
- size / aspect: **M · 1:1**
- camera: close-up of the two hands, waist height, the same diagonal 3/4 angle as P03 (his bare right inner wrist visible)
- composition: 가운데 = **악수처럼 맞잡은 두 오른손.** 그녀의 맨 오른손(**왼쪽**에서, 걷은 흙갈색 소매와 따뜻한 피부)이 그의 맨 오른손(**오른쪽**에서, 흰 셔츠 커프·미드나이트 블루 소매, 먹빛 핏줄)을 **손 전체로** 쥔다. P03에서 하녀가 스친 그의 손목 안쪽이 같은 사선으로 보인다. 배경 = 흐린 재의 길과 연석회암.
- picture: **아무것도 변하지 않는다.** 그녀 손가락은 따뜻한 피부색 그대로. 단단한 쥠.
- hands: `H_STD` / `P_BARE` · `MARK_CLEAN` · 접촉: **그녀 R 손 전체 ↔ 그의 R 손 전체** (무사)
- emotion: 계약 전의 선택(일이 아니다)
- light / colour: P16과 **같은 해 질 녘 보정**(따뜻해지지 않는다).
- bubble: **silent** (3연타: 효과음도 없음)
- dialogue_ref: —
- gap_after: **0**
- motion: 왼쪽 손이 오른쪽 손으로 → 다음 컷 그의 얼굴로 올라감
- must NOT: 빛·온기·불꽃·꽃, 그녀 손가락의 잿빛, 그의 장갑 낀 왼손이 악수에 끼어듦, 손가락 수 오류, 효과음.
- Flow: 첨부 **P03 확정본(앵글)**, `HUGO_hands`, `PETRA_hands`. 난이도 **상**(두 손이 얽힘: 손가락 수, 어느 손이 누구 것인지).

### panel_018 · P18
- scene_id: S3b / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 8 · flags: ⟨침묵 3연타 ①-2⟩ ⟨큰 gap ② 360⟩ ⟨복선 F14 그의 시선 손 → 얼굴 ①⟩ ⟨P61 매치 컷 원본⟩ ⟨회차 최고 밀도 얼굴 컷⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: close-up of his face from her eye line, slightly low (not extreme)
- composition: 가운데 = 휴고 얼굴(머리 꼭대기 위 약 15% 여백, 크라바트와 턱선까지). 배경 = 흐린 에메랄드 유리와 램프의 금빛 번짐 없는 부드러운 빛.
- picture: `HE_FIRST_LOOK`: 아주 고요하다. 시선이 **처음으로** 손에서 그녀의 얼굴로 올라온다(살짝 내려다봄 = 카메라를 향함). 입술 살짝 벌어짐, 크라바트 위 턱선의 삼킴. 얼굴 앵커 셋.
- hands: (화면 밖, 악수 유지) · 접촉: 악수 유지
- emotion: 남주가 먼저 흔들린다(열한 해 만의 닿음)
- light / colour: 해 질 녘, P17과 같은 보정.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **360** (큰 gap ②)
- motion: 시선이 위로 올라가는 순간에서 멈춤 → 큰 간격 → P19
- must NOT: 극단 앙각, 미소, 과장된 홍조, 눈물, 목·얼굴의 핏줄.
- Flow: 첨부 `HUGO_expressions`(② 첫 시선), `HUGO_turnaround`. **이 확정본을 P61에 첨부.** 변형 4장. 난이도 **중**(미세한 표정).

### panel_019 · P19
- scene_id: S3b / location: `LOC_GREENHOUSE` (통로, 입구 쪽을 보는 역샷) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 8 · flags: ⟨세로 대형 ③⟩ ⟨침묵 3연타 ①-3⟩ ⟨B3 정점⟩ ⟨**복선 F03 단서 1: 그녀의 얼굴(원함), 반전 26패널 앞**⟩ ⟨F02 피해자(하녀)와 예외(그녀)를 한 프레임에⟩ ⟨F28⟩ ⟨twist-plan 고정 구도⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: over his LEFT shoulder (his point of view), camera slightly above her eye line; three depth tiers in one tall frame
- composition: **오른쪽 가장자리 전경** = 그의 어두운 왼쪽 어깨와 청흑색 머리 뒤 일부(흐림). **위 1/3** = 페트라 얼굴(가운데 왼쪽, 그를 올려다봄, 귀가 보임). **가운데** = 그녀 뒤 멀리 입구의 흰 대리석 띠 위에 굳은 하인들(그녀 어깨 양옆으로 작게, **P14와 같은 순서**: 통로 쪽에 반쯤 든 맨손을 멈춘 집사 → 요리사 → 하녀 → 젊은 하인 → 맨 끝에 장갑 시중 하녀가 앞으로 모은 **잿빛 손끝**, 작게, 강조 없이, 그러나 보이게). 카메라가 반대 방향이라 무리는 화면 **오른쪽** 쪽. **아래 1/5** = **아직 맞잡은 두 오른손**(악수). 재의 길 가장자리 장미 멀쩡.
- picture: `PE_DARE_DRAWN`: **턱을 든 도발 + 한 박자 오래 머무는 눈 + 살짝 벌어진 입술 + 귀 끝 옅은 홍조.** 무엇을 원하는지는 모호하게(성욕으로 좁히지 않는다). 하인들 frozen in disbelief.
- hands: `H_STD` / `P_BARE` · `MARK_CLEAN` / 하녀 R 검지·중지 잿빛 · 접촉: 악수 유지 (무사)
- emotion: 정지된 순간. 도발과 끌림 / 있을 수 없는 일을 본 공포(하인들)
- light / colour: 해 질 녘 초록 금빛, **P17–P18과 같은 보정.**
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 위(얼굴) → 가운데(굳은 하인들) → 아래(맞잡은 손), 세로 3층
- must NOT: 홍조·머무는 눈이 빠진 '도발만'의 얼굴(**즉시 다시 그림**: 단서 1이 사라진다), 웃음, 시든 장미, 빛, 하녀 잿빛이 크거나 강조됨, 하인이 띠를 넘음, 성적 시선·노출.
- Flow: 첨부 `PETRA_expressions`(③ 도발+끌림), P14(하인 배치), P17(손). 우선순위 **얼굴 > 맞잡은 손 > 하인들**. 변형 4장. 난이도 **상**.

### panel_020 · P20
- scene_id: S3b / location: `LOC_GREENHOUSE` (통로) · light: `LIGHT_GH_DUSK`
- beat: B3 · tension 6–7 · flags: ⟨숨 고르기 · 위트⟩ ⟨이중의미(P20 ②)⟩ ⟨복선 F03 보강: 일로 도망⟩ ⟨gap 120 통로 → 돔 탁자⟩
- size / aspect: **M · 1:1**
- camera: medium two-shot, eye level, one step between them
- composition: **왼쪽** = 페트라(먼저 손을 놓고 한 걸음 물러섬, 얼굴은 3/4로 화면 왼쪽 깊이의 돔 탁자 쪽으로 돌림), 귀 끝 홍조가 남아 있음. **오른쪽** = 휴고(그녀보다 머리 하나 큼), 장갑 낀 왼손으로 벗은 장갑을 코트 주머니에 넣는 중, 눈은 아직 그녀의 얼굴. 그녀 머리 위에 넓은 빈 면, 그의 머리는 위에서 약 25–30%.
- picture: 페트라 `PE_FLUSTERED`(당황할수록 사무적) / 휴고 `HE_FIRST_LOOK`의 남은 시선 + 걱정.
- hands: `H_STD` (R 장갑 → 코트 주머니, **이후 EP1 끝까지 R 맨손**) / `P_BARE` · `MARK_CLEAN` · 접촉: 손을 놓음
- emotion: 당황을 일로 덮는 그녀 / 놀람보다 걱정이 먼저인 그
- light / colour: 해 질 녘, 같은 보정.
- bubble: ① 페트라 · art_space 제안: **왼쪽 맨 위, 그녀 머리 위의 어두운 에메랄드 유리** · 꼬리 ↓ 페트라 / ② 휴고 · art_space 제안: **오른쪽, 그의 머리 옆 유리면(①보다 아래)** · 꼬리 ↙ 휴고
- dialogue_ref: ① 페트라 → 휴고 "…계약. 탁자로." ② 휴고 → 페트라 "…아무렇지 않소?" (script P20)
- gap_after: **120**
- motion: 그녀의 시선 왼쪽(탁자) → 다음 장면
- must NOT: 아직 맞잡은 손, 그의 오른손에 장갑, 글자.
- Flow: 첨부 P14, `PETRA_expressions`(④ 당황), `HUGO_turnaround`. 난이도 **중**.

--- SCENE BREAK --- (S3b → S4 · 통로·해 질 녘 → 돔 아래 탁자·초저녁, 같은 `LOC_GREENHOUSE`)

### B4 · 그녀의 조건: 계약 (P21–P28) · 긴장 6(세 계단 P23 · P26 · P28) · 대사 8/8

> 하인들은 흰 대리석 띠 밖에 머물러 탁자에 없다. 연장 두루마리는 그녀 왼쪽 옆(의자 옆 탁자 끝)에 내려놓았고 B4 안에서 위치를 바꾸지 않는다. 계약서는 처음부터 끝까지 **백지 양피지**. 말풍선은 회차에서 가장 짧은 줄.

### panel_021 · P21
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 아래 탁자) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 5 · flags: ⟨결정 3 시작: 값과 조항⟩ ⟨거리 ① 탁자⟩ ⟨양피지 백지⟩ ⟨반 멈춤 L⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: high 3/4 wide from her end of the long table
- composition: **왼쪽 아래 전경** = 등 높은 의자에 꼿꼿이 앉은 페트라(3/4 뒷모습~옆얼굴), 그녀 왼쪽 옆 탁자 끝에 말린 연장 두루마리. 긴 짙은 호두나무 탁자가 오른쪽 위로 뻗고, **먼 끝 오른쪽 위** = 마주 앉은 휴고(맨 오른손을 탁자 위에). **탁자 가운데** = 백지 양피지, 호박갈색 밀랍 막대, 흑단 손잡이 흑장미 인장. 머리 위 = 사슬에 매달린 놋쇠 램프, 돔 유리 너머 저무는 짙은 파란 하늘, 주위의 흰 장미. 아주 멀리 흰 대리석 띠 뒤 하인들(작고 흐리게).
- picture: 그녀 장사꾼의 침착(`PE_LEVEL`), 그 조용한 흥미.
- hands: `H_STD` / `P_BARE` · `MARK_CLEAN` · 접촉 없음
- emotion: 협상 시작, 그녀가 값부터 부른다
- light / colour: 초저녁. 사슬 램프의 호박빛 + 돔 유리의 남은 푸른빛, 차가운 유리 앞의 따뜻한 얼굴.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 돔 유리 너머 짙은 파란 저녁 하늘(램프 불꽃은 피함)** (EN: the deep blue evening sky through the dome glass, upper left, away from the lamps) · 꼬리 ↓ 페트라
- dialogue_ref: 페트라 → 휴고 "세 배." (script P21)
- gap_after: **0**
- motion: 왼쪽 아래(그녀) → 대각선 탁자 → 오른쪽 위(그)
- must NOT: 양피지의 글자·서명, 인장 문장, 하인이 탁자 근처, 진홍.
- Flow: **S4 장면 앵커**(P22–P28에 첨부). 첨부 `PETRA_turnaround`, `HUGO_turnaround`. 난이도 **중**.

### panel_022 · P22
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 5 · flags: ⟨위트: 그의 자조 / 그녀의 값⟩
- size / aspect: **M · 1:1**
- camera: medium single on Hugo seated, eye level; her fingers in the left foreground
- composition: **가운데~오른쪽** = 앉은 휴고(머리는 위에서 약 35–40%), 시선은 그녀의 손(왼쪽 아래), 한쪽 입꼬리의 건조한 미소. **오른쪽 아래** = 탁자 위 그의 맨 오른손(핏줄). **왼쪽 가장자리 전경** = 양피지를 두드리는 그녀의 맨손가락 두 개(흐림). **위** = 돔 유리 너머 저녁 하늘.
- picture: `HE_WEARY`(값이 오히려 편하다는 자조).
- hands: `H_STD` / `P_BARE`(손가락만) · 접촉: 그녀 손가락 → 양피지
- emotion: 값의 탁구
- light / colour: 초저녁, 그의 얼굴에 램프빛.
- bubble: ① 휴고 · art_space 제안: **위쪽 가운데~오른쪽, 그의 머리 위 돔 유리와 저녁 하늘** · 꼬리 ↓ 휴고 / ② 페트라(**화면 왼쪽 밖**) · art_space 제안: **왼쪽 가운데 위, 손가락 위의 흐린 어두운 유리(①보다 아래)** · 꼬리 → 왼쪽 가장자리
- dialogue_ref: ① 휴고 → 페트라 "세 배라… 그걸로 충분하겠소?" ② 페트라 → 휴고 "선금. 절반." (script P22)
- gap_after: **0**
- motion: 위(그의 말) → 왼쪽(그녀의 값)
- must NOT: 그녀 얼굴을 보는 그의 눈, 양피지 글자.
- Flow: 첨부 P21, `HUGO_expressions`(① 지친 반쯤 미소). 난이도 **하~중**.

### panel_023 · P23
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 6 · flags: ⟨잠금 대사 = 회차 제목⟩ ⟨이중의미⟩ ⟨소프트 스톱 숨 60⟩ ⟨P1–44에서 '다르다'의 첫 스파이크⟩
- size / aspect: **M · 1:1**
- camera: medium close-up, frontal, eye level (she looks straight into the lens = into his eyes)
- composition: **가운데** = 페트라 상반신, 몸을 앞으로 숙임, 머리 꼭대기는 위에서 약 30%. **아래 1/3** = 맨 오른손 **검지 하나**가 백지 양피지를 한 번 누름(초점). **오른쪽 위** = 돔 유리와 저녁 하늘(램프는 왼쪽 위 멀리 작게).
- picture: `PE_LEVEL`: 단호함, 계약 문체의 공손함(비꼼 아님).
- hands: `P_BARE` · `MARK_CLEAN` · 접촉: R 검지 → 양피지
- emotion: 조항을 건다
- light / colour: 초저녁, 정면 램프빛 약간.
- bubble: ① 페트라 · art_space 제안: **오른쪽 위 1/3, 짙은 파란 저녁 하늘이 든 돔 유리** · 꼬리 ↙ 페트라 · **단독 말풍선**
- dialogue_ref: 페트라 → 휴고 **"먼저 만지지 마세요."** [잠금] (script P23)
- gap_after: **60**
- motion: 정면 응시 → 손가락(아래)
- must NOT: 미소, 양피지 글자, 손가락이 무언가 적힌 줄을 가리키는 듯한 그림(종이는 비어 있다).
- Flow: 첨부 `PETRA_expressions`(① 기본), P21. 난이도 **하**.

### panel_024 · P24
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 5–6 · flags: ⟨위트 + 우수⟩ ⟨이중의미⟩
- size / aspect: **M · 1:1**
- camera: high angle over his right shoulder down to his own bare right hand on the table
- composition: **오른쪽 위 전경** = 그의 어깨·볼·귀 일부(흐림). **가운데 아래** = 짙은 호두나무 탁자 위 그의 맨 오른손(손등이 위, 핏줄). 양피지는 가장자리에 일부만(백지). **왼쪽 위** = 초점 밖으로 멀어지는 무지의 짙은 호두나무 탁자 면.
- picture: 그가 자기 손을 내려다본다. 건조한 자조 + 우수.
- hands: `H_STD` · 접촉 없음
- emotion: 자조, 우수
- light / colour: 초저녁 램프빛이 손등에.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 초점 밖으로 멀어지는 무지의 짙은 호두나무 탁자 면** (EN: the plain dark walnut tabletop receding out of focus, upper left) · 꼬리 ↗ 휴고(오른쪽 위)
- dialogue_ref: 휴고 "…내가, 그럴 수 있으리라 보오?" (script P24)
- gap_after: **0**
- motion: 위 오른쪽(그) → 아래(손)
- must NOT: 커프 위로 올라온 핏줄, 양피지 글자.
- Flow: 첨부 `HUGO_hands`, P21. 난이도 **하**.

### panel_025 · P25
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 6 · flags: ⟨이중의미: 일정 조항 / 규칙 그 자체⟩ ⟨복선 F15⟩ ⟨후렴 '내가 정해요' 고정⟩
- size / aspect: **M · 1:1**
- camera: medium close-up, 3/4 (she faces screen right toward him), eye level
- composition: **왼쪽~가운데** = 페트라 3/4, 그를 똑바로 본다. **아래** = 왼손목 매듭 실의 끝을 오른손가락에 한 번 감는 손(생각하는 버릇). **오른쪽 위** = 그녀 시선 앞의 돔 유리와 저녁 하늘.
- picture: `PE_LEVEL`(통제, 확신).
- hands: `P_BARE` · `MARK_CLEAN` · 실 끝이 R 손가락에(실은 L손목에서) · 접촉 없음
- emotion: 동의가 계약이 된다
- light / colour: 초저녁.
- bubble: ① 페트라 · art_space 제안: **오른쪽 위 1/3, 그녀 시선 앞의 짙은 파란 돔 유리** · 꼬리 ↙ 페트라
- dialogue_ref: 페트라 → 휴고 "언제 만질지는 내가 정해요." (script P25)
- gap_after: **0**
- motion: 그녀의 시선 오른쪽(그) → 다음 컷 그
- must NOT: 실의 눈금·숫자·줄자 모양, 실이 오른손목에.
- Flow: 첨부 `PETRA_expressions`, `PETRA_hands`. 난이도 **하~중**.

### panel_026 · P26
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 6–7 · flags: ⟨시한폭탄 설치: 복선 F12 그의 조항⟩ ⟨소프트 스톱 숨 60⟩ ⟨크메르어 회차 최장 줄(②)⟩
- size / aspect: **M · 1:1**
- camera: medium shot of Hugo seated, eye level; the seal in the near foreground
- composition: **오른쪽~가운데** = 휴고(머리는 위에서 약 40%), 시선은 아래 왼쪽(그녀의 손과 양피지 사이, **얼굴로 올라가지 않는다**). **아래 전경** = 장갑 낀 왼손이 든 흑단 손잡이 흑장미 인장(초점). **위 1/3 전체** = 돔 유리 너머 짙은 파란 저녁 하늘(두 말풍선 자리, 넓게).
- picture: 조용한 결심. 보호의 이름으로 자기를 벌하는 조항(`HE_WEARY`에서 미소를 뺀 얼굴).
- hands: `H_STD` (인장은 장갑 낀 L) · 접촉 없음
- emotion: 조용한 결심
- light / colour: 초저녁.
- bubble: ①② 휴고 · art_space 제안: **위 1/3 전체 폭, 돔 유리와 저녁 하늘** (EN: the whole upper third, the deep blue evening sky through the dome glass) · ① 왼쪽 위, ② 그 아래(또는 오른쪽, ①보다 낮게) · 꼬리 둘 다 ↓ 휴고
- dialogue_ref: ① 휴고 "그럼, 나도 하나 더해도 되겠소?" ② 휴고 "내 살이 흔적을 남기면, 그날 밤 떠나는 거요." (script P26)
- gap_after: **60**
- motion: 위(조항) → 아래(인장)
- must NOT: 그녀 얼굴을 보는 눈, 손가락으로 가리키는 명령 몸짓, 인장의 글자·문장.
- Flow: 첨부 P21, `HUGO_turnaround`. 난이도 **하~중**.

### panel_027 · P27
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자, 그의 옆) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 6 · flags: ⟨위트: 정중한 말 = 비꼼⟩ ⟨거리 ② 탁자 옆⟩
- size / aspect: **M · 1:1**
- camera: low angle from seated eye height beside his chair; she walks into frame
- composition: **왼쪽~가운데** = 양피지를 들고 탁자를 돌아와 그의 옆에 선 페트라(허리 위, 앉은 그보다 조금 높은 눈높이). **오른쪽 가장자리** = 앉은 휴고의 어깨와 옆얼굴 일부(그녀를 올려다봄). **왼쪽 위** = 돔 유리 너머 짙은 파란 하늘(램프 사슬과 불꽃은 오른쪽으로 비켜).
- picture: `PE_SMIRK`(값을 이긴 작은 한쪽 미소).
- hands: `H_STD` / `P_BARE` · `MARK_CLEAN`(양피지를 든 손) · 접촉 없음
- emotion: 받아들이되 자기 식으로, 비꼼
- light / colour: 초저녁.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 그녀 머리 위 돔 유리와 저녁 하늘(램프 불꽃 제외)** · 꼬리 ↓ 페트라
- dialogue_ref: 페트라 → 휴고 "친절도 하셔라, 백작님." (script P27)
- gap_after: **0**
- motion: 그녀가 왼쪽에서 들어와 오른쪽(그) 쪽으로
- must NOT: 다리·치마에 머무는 앙각(카메라는 앉은 눈높이), 양피지 글자, 그녀가 그를 만짐.
- Flow: 첨부 P21, `PETRA_expressions`. 난이도 **중**.

### panel_028 · P28
- scene_id: S4 / location: `LOC_GREENHOUSE` (돔 탁자 위) · light: `LIGHT_GH_EVENING`
- beat: B4 · tension 6–7 · flags: ⟨B4 세 번째 계단⟩ ⟨복선 F19 골무 밀랍⟩ ⟨F24 흑장미 인장⟩ ⟨거리 ②' 닿을락 말락, 첫 '거의'⟩ ⟨골무 → 오른손 중지(§2-9)⟩ ⟨gap 160 초저녁 → 밤⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: near top-down high angle close-up on the parchment
- composition: **아래 2/3** = 백지 양피지. **왼쪽** = 그녀의 오른손: 중지에 놋쇠 골무, **목에서 벗긴 짧은 갈색 가죽 끈이 손가락에서 느슨히 늘어져** 양피지 위에 걸침, 골무 머리로 호박갈색 밀랍을 눌러 둥근 오톨도톨한 자국. **오른쪽** = 그의 맨 오른손이 흑단 인장을 검은 밀랍에 눌러 장미 모양 자국. 두 밀랍 자국이 가로 한 줄. 두 손 사이에 **손가락 한 마디 너비의 빈틈**(분명히 보이게). **위 1/3** = 양피지 위쪽 가장자리 너머 무지의 짙은 호두나무 탁자 면.
- picture: 인장 두 개로 계약 성립. 그녀의 작은 승리, 첫 '거의 닿음'의 정전기.
- hands: `H_STD` / `P_BARE` · 골무 R 중지 · `MARK_CLEAN` · 접촉: **없음**(한 마디 앞)
- emotion: 작은 승리 + 정전기
- light / colour: 초저녁 램프빛이 밀랍에 반사.
- bubble: ① 페트라(손만 보임, 왼쪽) · art_space 제안: **위 1/3, 양피지 너머 무지의 짙은 호두나무 탁자** (EN: the plain dark walnut tabletop beyond the parchment's top edge) · 꼬리 ↙ 왼쪽(그녀 손 쪽)
- dialogue_ref: 페트라 "계약 끝. 일 시작." (script P28)
- gap_after: **160**
- motion: 왼쪽 밀랍 → 오른쪽 밀랍, 가운데 빈틈에서 멈춤
- must NOT: 두 손이 닿음, 양피지 글자·서명, 밀랍의 글자·문장, 골무가 쇄골에도 있음, 진홍.
- Flow: 첨부 `PETRA_hands`, `HUGO_hands`, P21. 난이도 **중**(두 손 + 빈틈 + 끈).

--- SCENE BREAK --- (S4 → S5 · `LOC_GREENHOUSE` 돔 탁자 → `LOC_BENCH` 밤, 램프 하나)

### B5 · 치수 재기: 슬로번 (P29–P38) · 긴장 7 · 대사 9/10

> 치수 구도는 손가락(P30) → 마디(P31) → 손바닥(P33) → 손목(P33–35) → 얼굴(P35)로 **매번 한 칸씩** 다가간다(같은 구도 반복 금지). 말풍선 2개 패널(P30, P35, P38)과 1개 패널을 번갈아. 램프 하나가 유일한 빛, 같은 `LIGHT_BENCH_LAMP` 문장(P35에서 램프가 가장 가까운 것은 구도이지 색 변화가 아니다). 그녀의 골무는 쇄골 위, 두루마리에 골무를 그리지 않는다(§2-9).

### panel_029 · P29
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 6–6.5 · flags: ⟨복선 F16 진홍 ②(배경, 그의 시선 밖)⟩ ⟨F23 꽃에 뻗다 멈추는 손⟩ ⟨진홍 허용 2/3⟩ ⟨반 멈춤 L⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: side wide of the potting bench, eye level, the lamp near the centre
- composition: 유리벽 두 장이 비스듬히 만나는 곁방, 낮은 벽돌 벽 앞 문질러 닦은 연한 참나무 작업대, 한쪽 끝 테라코타 화분, 못에 걸린 **회갈색** 낡은 정원사 장갑과 전지칼, 철골 위로 타고 오른 흰 장미 한 줄기(위 오른쪽). **가운데** = 놋쇠 램프(유리 굴뚝), 뒤 유리에 불꽃이 희미하게 비침. 작업대 위 펼친 캔버스 두루마리(바늘, 송곳, 작은 가위, 분필, 밀랍, 진홍 실패) + **그녀 쪽 끝에 진홍 서명 띠를 놓은 납작한 검은 키드 커프 띠(작게, 배경)**. **왼쪽** = 등받이 없는 의자의 페트라, 왼손목 매듭 실을 한 길이 풀어냄(끝은 왼손목). **오른쪽** = 맞은편 의자의 휴고, 맨 오른손이 머리 위 흰 장미로 뻗다가 **꽃잎 손가락 한 마디 앞에서 멈춤**(한 순간만 그린다), 장갑 낀 왼손은 무릎 위.
- picture: 그녀 일의 얼굴(`PE_LEVEL`), 그 원하지만 닿지 않는 사람(조용한 갈망).
- hands: `H_STD` (L 무릎 위) / `P_BARE` · `MARK_CLEAN` · 실 한 길이 · 접촉 없음
- emotion: 준비. 일 대 갈망
- light / colour: 밤. 램프 하나의 호박 웅덩이, 그 밖은 청록 어둠.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 그녀 머리 위 램프 웅덩이 밖의 청록 어둠** (EN: the blue-green darkness beyond the lamp's pool, upper left) · 꼬리 ↓ 페트라. 램프(가운데)와 장미(오른쪽 위)는 비운다.
- dialogue_ref: 페트라 → 휴고 "오른손부터." (script P29)
- gap_after: **0**
- motion: 왼쪽(그녀의 실) ↔ 오른쪽(멈춘 손) → 다음 컷 손 클로즈업
- must NOT: 실의 눈금·숫자, 진홍 커프 띠가 크거나 그의 시선 안, 두루마리 속 두 번째 골무, 장미가 시듦(닿지 않았다), 글자.
- Flow: **S5 장면 앵커**(P30–P38에 첨부, 권장 카드 `LOC_BENCH`가 있으면 그것도). 첨부 `PETRA_turnaround`, `HUGO_turnaround`. 난이도 **중**.

### panel_030 · P30
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 6.5 · flags: ⟨거리 ③ 실 한 가닥⟩ ⟨L2 #2 치수⟩ ⟨복선 F05 실 = 일의 도구, 첫 등장⟩ ⟨F09 맨손 치수⟩ ⟨F02 '면역' 착시 강화⟩ ⟨원하는 손: 시선이 머묾⟩
- size / aspect: **M · 1:1**
- camera: high angle close-up of the hands on the bench
- composition: **가운데** = 그녀의 맨손가락이 그의 맨 오른손가락을 **하나씩 펴는** 순간, 매듭 실이 그의 검지를 따라 놓임(그녀 손은 왼쪽에서, 그의 손은 오른쪽에서 손바닥이 위). **위 가장자리 왼쪽** = 그녀의 얼굴 일부(눈썹~턱), 시선이 그의 손에 머묾. **위 오른쪽** = 작업대가 어둠으로 넘어가는 청록 어둠. 왼쪽 아래 가장자리에 실이 감긴 그녀의 왼손목.
- picture: `PE_LINGER`(필요보다 오래 머무는 시선, 부드러운 얼굴). 아무 일도 없다.
- hands: `H_STD` / `P_BARE` · `MARK_CLEAN` · 접촉: **그녀 맨손가락들 ↔ 그의 R 손가락** (무사)
- emotion: 일 + 머무름
- light / colour: 램프 웅덩이가 두 손 위에.
- bubble: ①② 페트라(짧게) · art_space 제안: **오른쪽 위, 작업대 너머 청록 어둠** · ① 위, ② 아래 · 꼬리 ← 그녀 얼굴(왼쪽 위)
- dialogue_ref: ① 페트라 → 휴고 "손." ② 페트라 → 휴고 "펴요." (script P30)
- gap_after: **0**
- motion: 손가락이 펴지는 방향(왼 → 오)
- must NOT: 어느 손가락에든 잿빛, 빛·온기, 실의 눈금.
- Flow: 첨부 `HUGO_hands`, `PETRA_hands`, P29. 난이도 **중상**(손가락 얽힘).

### panel_031 · P31
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 7 · flags: ⟨복선 F18 심장 타이머 ①⟩ (EP2에서 같은 구도로 회수)
- size / aspect: **M · 1:1**
- camera: medium shot of Hugo's upper body, eye level
- composition: **가운데~오른쪽** = 앉은 휴고 상반신, 머리는 위에서 약 30%, 깃은 닫혀 있음. **위쪽(그의 왼쪽 가슴 = 화면 오른쪽)** = 장갑 낀 **왼손**이 무심히 왼쪽 쇄골 아래 가슴(코트 위)에 얹힘. **아래** = 마디마다 매듭을 대는 그녀의 손(왼쪽에서 들어옴, 얼굴은 화면 밖). **왼쪽 위** = 램프 밖 청록 어둠.
- picture: 그녀는 눈을 들지 않고 묻는다(손만). 그의 손짓은 회피.
- hands: `H_STD` (L → 왼쪽 가슴) / `P_BARE` · `MARK_CLEAN` · 접촉: 그녀 손가락 ↔ 그의 R 손가락 마디
- emotion: 일 질문 / 회피의 손짓
- light / colour: 램프빛이 아래에서 손과 그의 턱을.
- bubble: ① 페트라(**화면 왼쪽 밖, 손만 보임**) · art_space 제안: **왼쪽 위, 그의 머리 왼쪽의 램프 밖 청록 어둠** · 꼬리 ↙ 왼쪽 가장자리(그녀 쪽)
- dialogue_ref: 페트라 → 휴고 "그것. 얼마나 됐어요?" (script P31)
- gap_after: **0**
- motion: 아래(재는 손) ↔ 위(가슴의 손)
- must NOT: 가슴·목·깃 위의 핏줄, 열린 깃, 맨 오른손이 가슴에(가슴에 가는 손은 장갑 낀 왼손).
- Flow: 첨부 `HUGO_turnaround`, P29. 난이도 **중**.

### panel_032 · P32
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 6.5–7 · flags: —
- size / aspect: **M · 1:1**
- camera: 3/4 close-up of Hugo's face, eye level; hands out of frame
- composition: **가운데~오른쪽** = 휴고 3/4(화면 왼쪽 아래를 향함), 램프빛이 얼굴 한쪽(오른쪽)에만. **왼쪽 위** = 빛이 닿지 않는 쪽의 청록 어둠.
- picture: `HE_MELANCHOLY`. 시선은 자기 손 위의 그녀 손가락(화면 밖 아래). 아무도 원해서 그를 만지지 않은 시간.
- hands: (화면 밖) · 접촉: 치수 중
- emotion: 우수
- light / colour: 한쪽 램프빛, 반대쪽 깊은 그늘.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 빛이 닿지 않는 청록 어둠(유리에 비친 불꽃은 피함)** · 꼬리 ↘ 휴고
- dialogue_ref: 휴고 → 페트라 "…열한 번의 겨울." (script P32)
- gap_after: **0**
- motion: 아래로 떨군 시선 → 다음 컷 손바닥
- must NOT: 겨울·눈 이미지, 미소.
- Flow: 첨부 `HUGO_expressions`. 난이도 **하**.

### panel_033 · P33
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 6–6.5 · flags: ⟨숨 고르기 · 위트(그의 빈정거림)⟩ ⟨판정 접촉 ① 시작(사다리 밖)⟩ ⟨일의 손⟩ ⟨잡아챔은 이 컷, 점은 P34⟩
- size / aspect: **M · 1:1**
- camera: close-up of his palm and wrist, slightly high
- composition: **가운데** = 그의 맨 오른손바닥을 가로지르는 매듭 실(손바닥 치수). 그 순간 **그녀의 오른손이 왼쪽에서 그의 손목을 잡아챈다: 오른손 검지 끝 하나로 실의 교차점을 그의 손목 맥박 위에 누르고, 엄지와 나머지 손가락은 흰 셔츠 커프 위.** **위 가장자리 오른쪽** = 그의 입꼬리와 턱(건조한 반쯤 미소가 끊김). **왼쪽 위** = 청록 어둠. 그녀의 얼굴은 화면 밖(일의 손 문법은 손이 싣는다).
- picture: 빈정거림 → 그녀가 말을 끊듯 잡아챈다. 짧고 효율적인 집게 같은 손.
- hands: `H_STD` / `P_BARE` · `MARK_CLEAN`(점은 아직 손끝 아래, 보이지 않음) · 접촉: **그녀 R 검지 끝 하나만 → 그의 R 손목 맥박**, 엄지·나머지는 커프(천) 위
- emotion: 그의 자조의 갑옷 / 그녀의 짜증
- light / colour: 램프빛이 손바닥에.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 청록 어둠**(크메르어 약 21자 → 넓게) · 꼬리 → 오른쪽 위(그의 입)
- dialogue_ref: 휴고 → 페트라 "꽃도 한 숨을 못 버티는 손을… 재서 뭘—" (script P33, 말이 끊긴 꼴)
- gap_after: **0**
- motion: 왼쪽에서 들어오는 빠른 손 → 다음 컷 손을 거둠
- must NOT: 그녀의 손 전체가 그의 맨살에 닿음(검지 끝만), 이 컷에서 보이는 잿빛, 그가 그녀를 잡음.
- Flow: 첨부 `HUGO_hands`, `PETRA_hands`, P29. 난이도 **중상**.

### panel_034 · P34
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 7 · flags: ⟨**복선 F04 단서 2: 잿빛 점 + 거짓 설명**⟩ ⟨F06 ASH_GREY ③⟩ ⟨F07 같은 손가락 ①⟩ ⟨F05 손목 치수가 끝나지 않은 채 남음⟩ ⟨⟨반전⟩ 복선⟩ ⟨**세우지 않는다**: M, 간격 0⟩ ⟨회상을 옆에 붙이지 않는다(P37)⟩
- size / aspect: **M · 1:1** (ST로 줄이지 않는다: 점이 사라진다)
- camera: reader-only angle — low, from her side, close on her drawn-back right hand; the fingertip pad faces the camera and away from him
- composition: **왼쪽 아래 전경(크게)** = 손을 거두는 그녀의 오른손, **검지를 자기 쪽으로 오므려 손끝 바닥(손바닥 쪽)이 카메라를 향함**: 바닥 약 1/3 크기의 **작고 동그란 무광 잿빛 점**, 엄지가 그 점을 털고 있으나 그대로. 이 손에는 실이 없다(실은 왼손목). **왼쪽 위** = 그녀의 얼굴 3/4, 손끝을 내려다봄(머리 꼭대기는 위에서 약 35%). **오른쪽 가운데** = 그의 맨 오른손목, 맥박 위에 눌린 매듭과 흐트러진 실. 그의 얼굴은 화면 밖(또는 오른쪽 위 가장자리에 내려간 눈만, **시선은 자기 손목의 매듭**). 그의 눈높이에서는 그녀의 손등만 보이는 각도.
- picture: `PE_TASK`(짜증으로 닫힌 얼굴, 홍조 없음). 대수롭지 않은 척(자존심). 점: **작을 뿐 하녀·어머니와 같은 ASH_GREY**, 검은 테두리 없음.
- hands: `H_STD` / `P_BARE` · **`MARK_DOT` 시작** · 접촉 없음(막 뗌)
- emotion: 대수롭지 않은 척
- light / colour: 램프빛이 손끝 바닥에 닿아 점이 읽히게.
- bubble: ① 페트라(혼잣말) · art_space 제안: **왼쪽 위, 그녀 머리 옆~위의 램프 밖 청록 어둠** — **그녀 얼굴 쪽**에 둬서 시선을 손끝에서 얼굴로 끌어간다(배치 미스디렉션) · 꼬리 ↓ 그녀 입. 점은 절대 가리지 않는다.
- dialogue_ref: 페트라(혼잣말) "가죽 먼지네." (script P34)
- gap_after: **0**
- motion: 손끝(아래) → 얼굴·말풍선(위)으로 끌어올림 → 바로 다음 컷
- must NOT: 점이 너무 옅음·은색·흰색·검은 테두리, 점이 손톱 쪽·다른 손가락·왼손, 그가 그녀 손끝을 봄, 점이 화면 정중앙에서 강조됨, 실이 그녀 오른손목.
- Flow: 첨부 `PETRA_hands`(② 작은 점 칸), `PETRA_expressions`(② 일의 얼굴), P29. 이중 지정 문구 `her RIGHT hand (the hand without the thread bracelet), INDEX finger`. 난이도 **상**(작은 점의 생존 + 손 방향).

### panel_035 · P35
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 7–8 · flags: ⟨B5 정점⟩ ⟨거리 ③' 손목 맥박 위로 숙인 얼굴⟩ ⟨L2 #3 손목⟩ ⟨위트 + 관능⟩ ⟨복선 F13 묻는 남자 ①⟩ ⟨F03 보강: 당황한 손은 무사⟩ ⟨원하는 손⟩ ⟨소프트 스톱(L)⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: at her head height, diagonal composition; the lamp closest of the whole of B5
- composition: 사선 하나: **왼쪽 아래** = 그의 맨 오른손목과 손, 그녀의 맨 오른손이 그 손을 **아래에서 손 전체로 받침** → **가운데 왼쪽** = 흐트러진 실을 다시 놓으려 그의 손목 맥박 위로 **숙인 그녀의 얼굴**(입술과 손목 사이에 분명한 빈틈), 귀 끝 홍조, 왼손가락은 왼손목의 매듭 실을 **빠르게** 감음 → **오른쪽 위** = 고개를 옆(화면 오른쪽)으로 돌린 휴고의 턱선, 크라바트 위 삼킴. 위쪽 가운데~오른쪽 = 어두운 유리, 왼쪽 가운데 = 청록 어둠.
- picture: 페트라 `PE_FLUSTERED` / 휴고 `HE_HELD_BREATH`. 회차에서 가장 따뜻한 관능, 둘 다 당황. 점은 받치는 손 아래에 가려지거나 아주 작게(강조 금지).
- hands: `H_STD` / `P_BARE` · `MARK_DOT`(안 보이거나 아주 작게) · 접촉: **그녀 R 손 전체 → 그의 R 손을 아래에서 받침** (무사)
- emotion: 숨 멎는 가까움, 둘 다 당황
- light / colour: 램프가 화면 안 가장 가까이(호박빛이 두 얼굴에). 보정은 P34와 같다.
- bubble: ① 휴고 · art_space 제안: **위쪽 가운데~오른쪽, 돌린 그의 머리 위의 어두운 유리(비친 불꽃 제외)** · 꼬리 ↓ 그의 입 / ② 페트라 · art_space 제안: **왼쪽 가운데, 숙인 그녀 머리 옆의 청록 어둠(①보다 아래)** · 꼬리 → 그녀
- dialogue_ref: ① 휴고 → 페트라 "…숨은, 쉬어도 되겠소?" ② 페트라 → 휴고 "…쉬어요. 조용히." (script P35)
- gap_after: **0**
- motion: 왼쪽 아래(손) → 그녀 얼굴 → 오른쪽 위(그의 턱), 사선 상승
- must NOT: 그녀 입술이 그의 손목에 닿음(키스로 읽힘), 잿빛 강조, 다른 손가락 잿빛, P34보다 따뜻해진 색, 그가 그녀를 봄(그는 고개를 돌렸다).
- Flow: 첨부 `PETRA_expressions`(④ 당황), `HUGO_expressions`(③ 숨 참기), P29. 난이도 **상**(사선 세 요소 + 두 얼굴).

### panel_036 · P36
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 7 · flags: ⟨이중의미⟩ ⟨복선 F18 심장 타이머 ②⟩ ⟨F17 세 손가락 ②⟩ ⟨P37 매치 컷 원본(매듭 짓는 손)⟩ ⟨숨 60⟩
- size / aspect: **M · 1:1**
- camera: medium shot at his chest height
- composition: **가운데~오른쪽** = 휴고 가슴~턱(입과 턱은 위쪽에), 장갑 낀 **왼손이 다시** 왼쪽 쇄골 아래 가슴(코트 위, 화면 오른쪽)에. **왼쪽 가장자리 가운데** = 그 손을 올려다보는 그녀의 눈과 눈썹(얼굴 일부). **아래** = 실에 매듭 하나를 짓는 그녀의 **오른손, 엄지·검지·중지로 집는 모양**(오른손 검지 끝의 점은 손끝 바닥이 아래를 향해 보이지 않게). **오른쪽 위** = 그의 어깨 뒤 청록 어둠.
- picture: 그는 거짓 아닌 회피(조용함), 그녀는 한순간 장인의 관찰(`PE_CRAFT`).
- hands: `H_STD` (L → 왼쪽 가슴) / `P_BARE` · `MARK_DOT` · 접촉: 그녀 손가락 → 실
- emotion: 회피 / 관찰
- light / colour: 램프빛이 아래에서.
- bubble: ① 휴고 · art_space 제안: **오른쪽 위, 그의 어깨 뒤 청록 어둠(가슴의 손보다 위)** · 꼬리 ↙ 그의 입
- dialogue_ref: 휴고 → 페트라 "…오래된 상처요." (script P36)
- gap_after: **60**
- motion: 가슴의 손 ↔ 그녀의 눈 → 아래 매듭 짓는 손(다음 컷 회상으로 매치)
- must NOT: 가슴·목의 핏줄, 열린 깃, 맨손이 가슴에.
- Flow: 첨부 `HUGO_turnaround`, `PETRA_hands`, P29. **이 확정본을 P37에 첨부**(손 모양 매치). 난이도 **중**.

--- SCENE BREAK --- (S5 → S5f · 회상 인서트, `LOC_WORKSHOP` 압류 전)

### panel_037 · P37
- scene_id: S5f / location: `LOC_WORKSHOP` (공방 안, 회상, 압류 전 '가득 참') · light: `LIGHT_MEMORY`
- beat: B5 · tension 6–6.5 · flags: ⟨**어머니 회상 인서트 [잠금 위치 P37]**⟩ (P34에서 3패널, P49에서 12패널) ⟨복선 F17 세 손가락 ③⟩ ⟨**성한 손**: 잿빛끼리 나란히 두지 않는다⟩
- size / aspect: **ST · 16:9**
- camera: horizontal close-up of the hands on the oak table, match-cut with P36's knotting hand
- composition: **가운데** = 어머니의 **성한** 맨손(작고 볕에 그은 나이 든 여자의 손, **잿빛 전혀 없음**)이 같은 매듭 리넨 실에 매듭을 짓는다: **오른손 엄지·검지·중지로 집는 모양**(P09·P36과 같은 손 모양). 옆에 나무 손틀. 배경 = 모든 못과 선반이 찬 공방(초점 밖). 얼굴은 화면 밖.
- picture: 따뜻하게 바랜 기억의 빛, 부드럽게 흐린 가장자리.
- hands: 어머니 성한 맨손 · 접촉: 손 → 실
- emotion: 그리움, 온기가 식기 시작(B6 예열)
- light / colour: `LIGHT_MEMORY`: 바랜 호박빛 낮, 낮은 대비, 흐린 비네트 가장자리.
- bubble: **silent** (회상 캡션 없음: 빛으로만 구분)
- dialogue_ref: —
- gap_after: **0**
- motion: P36 손 → P37 손(같은 동작의 메아리) → P38로 돌아옴
- must NOT: **잿빛 손끝**(사고 전이다), 어머니 얼굴, 저택·휴고·가봉 장면, 회상 테두리·캡션·파란 번짐 테두리 그래픽, 페트라의 손처럼 보이는 젊은 손, 진홍 스티치.
- Flow: 첨부 **P36 확정본**(손 모양), P08(방) (+선택 `MOTHER_ref`의 손 칸, 단 잿빛 없이). 난이도 **중**.

--- SCENE BREAK --- (S5f → S5 · 회상 → 작업대로 돌아옴)

### panel_038 · P38
- scene_id: S5 / location: `LOC_BENCH` · light: `LIGHT_BENCH_LAMP`
- beat: B5 · tension 7 · flags: ⟨복선 F05 남은 손목 치수 → P44⟩ ⟨F13 묻는 남자 ②⟩ ⟨F04 공정성: 점이 작게 보임⟩ ⟨gap 160 작업대 → 서재⟩
- size / aspect: **M · 1:1**
- camera: medium two-shot, the rewinding thread in the foreground
- composition: **왼쪽 아래 전경** = 실을 왼손목에 다시 감는 그녀의 두 손(오른손 검지 끝 바닥의 **작은 점이 보이지만 강조 없이**, 손이 감는 동작 중 잠깐 위를 향함). **왼쪽 중경** = 페트라 얼굴 3/4(당황을 일로 정리, `PE_LEVEL`). **오른쪽** = 의자에서 일어서는 휴고(머리는 위에서 약 25–30%, 완전히 프레임 안), 오른쪽 깊이의 서재 쪽 유리문을 본다. 위 왼쪽 = 청록 어둠, 오른쪽 = 어두운 비스듬한 유리벽.
- picture: 치수 중단 → 그의 제안. 그는 망설이다가 위험을 숨기지 않는 사람으로서 보여 주기로.
- hands: `H_STD` / `P_BARE` · `MARK_DOT`(작게 보이게) · 접촉 없음
- emotion: 그녀 정리 / 그 결심
- light / colour: 램프 웅덩이, 일어서는 그의 얼굴은 반쯤 어둠으로.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 그녀 머리 위 청록 어둠** · 꼬리 ↓ 페트라 / ② 휴고 · art_space 제안: **오른쪽, 그의 머리 높이 또는 바로 아래의 어두운 비스듬한 유리벽(①보다 아래, 크메르어 약 23자 → 넓게, 비친 불꽃 제외)** · 꼬리 ↙ 휴고
- dialogue_ref: ① 페트라 → 휴고 "손목은, 나중에." ② 휴고 → 페트라 "맞던 장갑이… 한 켤레 있소. 보겠소?" (script P38)
- gap_after: **160**
- motion: 감기는 실(왼쪽 아래) → 그의 시선(오른쪽 깊이, 다음 장면의 문)
- must NOT: 점이 크거나 강조됨, 점이 사라짐(공정성), 다른 손가락의 잿빛, 글자.
- Flow: 첨부 `PETRA_hands`(② 점), `HUGO_turnaround`, P29. 난이도 **중**.

--- SCENE BREAK --- (S5 → S6 · `LOC_BENCH` → `LOC_STUDY` 밤)

### B6 · No Way: 어머니의 장갑 (P39–P44) · 긴장 7(온도는 내리고 긴장은 올린다 6.5 → 8) · 대사 5/6 · 위트 0

> B6 안에 회상 없음. 진홍 띠가 **읽히는** 것은 P40 한 컷. P41–P45에서 유리 종이 보이면 장갑은 작거나 흐리게. 청회색은 서리가 아니다(입김·성에·얼음빛 없음). 피부에는 따뜻한 하이라이트 한 점을 남겨 잿빛과 구분한다.

### panel_039 · P39
- scene_id: S6 / location: `LOC_STUDY` · light: `LIGHT_STUDY_COOLING`
- beat: B6 · tension 6.5 · flags: ⟨복선 F20 천 덮인 액자(배경)⟩ ⟨톱니: B5 끝(7)보다 낮게 시작⟩
- size / aspect: **M · 1:1**
- camera: wide view from the doorway into the study, eye level
- composition: 짙은 호두나무 벽판, 제목 없는 낡은 가죽 책등의 높은 서가(왼쪽 벽), 책상 위 놋쇠 램프 하나(가운데 깊이), 병 초록 벨벳 커튼, 온실 쪽 키 큰 유리문의 희미한 초록빛(오른쪽), 불 없는 벽난로 위 **짙은 천으로 덮인 큰 액자**(가운데 뒤, 아무도 보지 않음), 창가 작은 둥근 받침 탁자의 유리 종은 **오른쪽 가장자리 어둠 속에 작게**. **오른쪽 중경** = 한 걸음 앞선 휴고(뒤 3/4), **왼쪽 전경 쪽** = 한 걸음 뒤의 페트라(3/4).
- picture: 그녀 일의 얼굴(`PE_LEVEL`), 그 말없는 무게.
- hands: `H_STD` / `P_BARE` · `MARK_DOT`(보이지 않아도 됨) · 접촉 없음
- emotion: 들어선다. 색이 식기 시작한다
- light / colour: 어두운 서재, 책상 램프 하나, 유리문의 초록빛, 따뜻함이 빠지기 시작.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 그녀 머리 위의 초점 밖 짙은 호두나무 벽판과 서가** (EN: the dark walnut panelling and shelves softly out of focus, upper left) · 꼬리 ↓ 페트라. 액자와 유리 종은 말풍선 밖.
- dialogue_ref: 페트라 → 휴고 "그 장갑. 어디요?" (script P39)
- gap_after: **0**
- motion: 문간(왼쪽 앞) → 방 깊이 → 오른쪽 가장자리 유리 종(다음 컷)
- must NOT: 책등 제목, 액자 이름판, 천 아래가 보임, 벽난로의 불, 시계, 유리 종 속 진홍이 읽힘.
- Flow: **S6–S7 장면 앵커**(P40–P50에 첨부, 권장 카드 `LOC_STUDY`가 있으면 그것도). 첨부 `PETRA_turnaround`, `HUGO_turnaround`. 난이도 **중상**(1:1에 방 전체).

### panel_040 · P40
- scene_id: S6 / location: `LOC_STUDY` (창가 받침 탁자) · light: **`LIGHT_NOWAY` (급전환)**
- beat: B6 · tension 7–8 · flags: ⟨세로 대형 ④⟩ ⟨하드 스톱⟩ ⟨복선 F16 진홍 ③(독자 회수, 그는 EP3)⟩ ⟨F07 같은 손가락 ②⟩ ⟨진홍 허용 3/3⟩ ⟨P46 매치 컷 원본(각도)⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: frontal, slightly high, tall vertical: darkness above → bell jar → pedestal table below
- composition: **위 1/3** = 서재의 어둠. **가운데** = 작은 둥근 받침 탁자 위 **유리 종.** 그 아래 염색하지 않은 연한 크림색 키드 가봉용 장갑 한 켤레, **손바닥이 위, 손가락이 살짝 굽음**, 손가락이 화면 위쪽을 향하게 나란히: 왼쪽 장갑(엄지가 바깥 왼쪽) · **오른쪽 장갑(엄지가 바깥 오른쪽), 그 검지(엄지 옆 손가락) 손끝이 갈라져 있다.** 모든 손끝이 검게 탔고, 커프 안쪽 가장자리를 따라 **이어진 깊은 진홍 비단 십자 스티치 띠**, 솔기 몇 곳에 남은 시침실. 유리에 **그녀의 얼굴이 희미하게** 비친다(유령처럼 보이지 않게, 아주 옅게). **아래 1/3** = 받침 탁자 기둥과 어둠.
- picture: 정지. 갈라진 가죽 = 장갑이 실패했다(사고). 오른손 검지 손끝 바닥이 보이는 각도(P46과 운율).
- hands: (사람 손 없음) · 접촉 없음
- emotion: 충격(독자와 그녀만 아는 서스펜스)
- light / colour: **호박 → 차가운 청회색으로 급전환**, 채도 낮춤. 유리 종에 차가운 반사.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 위 어둠 → 종 → 장갑의 갈라진 검지(시선이 멈추는 곳)
- must NOT: 피처럼 보이는 진홍, 따로 떨어진 X자·글자 같은 스티치, 서리·성에·얼음빛, 반사된 얼굴이 또렷한 두 번째 인물, 연기, 장갑이 검정(크림색이라야 탄 손끝이 읽힌다), 글자.
- Flow: 첨부 P39 (+권장 `LOC_STUDY`). 변형 4장. **이 확정본을 P46에 참고 첨부**(각도). 난이도 **중상**(오른쪽 장갑의 검지 위치 + 진홍 띠 + 옅은 반사).

### panel_041 · P41
- scene_id: S6 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B6 · tension 7 · flags: ⟨극적 아이러니⟩
- size / aspect: **M · 1:1**
- camera: her face seen through the bell jar; the glass curve blurred in the foreground
- composition: **가운데** = 굳은 페트라의 얼굴(머리 꼭대기는 위에서 약 30%), 눈은 진홍 띠(화면 아래, 유리 너머)에 박혀 있다. **아래 전경** = 유리 종의 곡면과 그 안 장갑(흐림, 진홍은 읽히지 않을 만큼 흐리게). **왼쪽 위** = 유리 종 위의 어두운 공간과 초점 밖 벽판.
- picture: `PE_FROZEN`(굳은 충격, 차오르는 것). 피부에 따뜻한 하이라이트 한 점.
- hands: (화면 밖) · 접촉 없음
- emotion: 굳는다, 이미 알면서 묻는다
- light / colour: 청회색, 얼굴에 따뜻한 하이라이트 한 점.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 유리 종 위의 어두운 공간과 초점 밖 벽판** (EN: the dim space above the bell jar, dark walnut panelling out of focus) · 꼬리 ↘ 페트라
- dialogue_ref: 페트라 → 휴고 "누구 장갑이에요?" (script P41)
- gap_after: **0**
- motion: 눈 → 아래(장갑)
- must NOT: 또렷이 읽히는 진홍 띠, 회색 피부, 서리, 눈물.
- Flow: 첨부 `PETRA_expressions`, P40. 난이도 **중**(유리 너머 얼굴).

### panel_042 · P42
- scene_id: S6 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B6 · tension 7–8 · flags: ⟨극적 아이러니⟩
- size / aspect: **M · 1:1**
- camera: medium profile of Hugo beside the bell jar; the jar blurred in the near foreground
- composition: **왼쪽 아래 전경** = 유리 종(흐림). **오른쪽** = 휴고 옆얼굴(화면 왼쪽을 향함, 머리 한 가닥), 시선은 유리 종 속 장갑(그녀 얼굴 아님). 맨 오른손은 몸 옆으로 늘어뜨림(손 일부가 아래에). **왼쪽 위** = 유리 종 위의 어두운 공간.
- picture: `HE_GUILT`(담담한 죄책감, 자기연민 없음).
- hands: `H_STD` (R 몸 옆) · 접촉 없음
- emotion: 죄책감, 담담한 고백
- light / colour: 청회색, 옆얼굴 윤곽에 차가운 빛 + 따뜻한 하이라이트 한 점.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 유리 종 위의 어두운 공간** · 꼬리 ↘ 휴고 입
- dialogue_ref: 휴고 → 페트라 "전 장갑장이의 것이오." (script P42)
- gap_after: **0**
- motion: 그의 시선 왼쪽 아래(종)
- must NOT: 그녀를 보는 눈, 읽히는 진홍, 커프 위 핏줄.
- Flow: 첨부 `HUGO_expressions`(④ 죄책감), P39. 난이도 **하~중**.

### panel_043 · P43
- scene_id: S6 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B6 · tension 7–8 · flags: ⟨이중의미(극적 아이러니)⟩ ⟨ruling B: 주어는 그 자신⟩ ⟨뜨거운 분노는 이 한 컷만⟩ ⟨숨 60⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: deep focus past his hand to her face
- composition: **오른쪽 아래 전경** = 유리 종 위 허공에 멈춘 그의 맨 오른손(닿지 않는다, 손과 유리 사이 빈틈 분명히), 아래에 유리 종 윗부분(흐림, 장갑은 읽히지 않게). **왼쪽 위~가운데 후경** = 그녀의 얼굴: 뜨거운 분노가 한순간 번진다. **오른쪽 위 1/3** = 손 위의 초점 밖 짙은 호두나무 벽판.
- picture: 그녀 `PE_ANGER`(눈이 탄다, 눈썹이 모임, 입은 다묾, 소리치지 않음). 그는 책임을 진다(손만).
- hands: `H_STD` (R → 유리 종 위 허공) / `P_BARE`(화면 밖) · 접촉 없음
- emotion: 그의 자기 탓 / 그녀의 분노
- light / colour: 청회색, 그녀 눈가에 따뜻한 하이라이트 한 점.
- bubble: ① 휴고(**손만 보임, 오른쪽 가장자리 밖**) · art_space 제안: **오른쪽 위 1/3, 그의 손 위의 초점 밖 짙은 호두나무 벽판** · 꼬리 → 오른쪽 가장자리(그 쪽). 그녀 얼굴은 비운다.
- dialogue_ref: 휴고 → 페트라 "…내가 그 손을 망쳤소." (script P43)
- gap_after: **60**
- motion: 전경 손 → 후경 얼굴(분노가 다음 컷에서 식는다)
- must NOT: 소리치는 입, 눈물, 이 악물기, 그의 손이 유리에 닿음, 읽히는 진홍.
- Flow: 첨부 `PETRA_expressions`(가까운 표정 + EN 문자열), `HUGO_hands`, P39. 난이도 **중**.

### panel_044 · P44
- scene_id: S6 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B6 · tension 8 · flags: ⟨**⟨반전⟩ 전환점**⟩ ⟨B6 정점(코일)⟩ ⟨복선 F11 '지금' ①⟩ ⟨F05 남은 손목 치수⟩ ⟨**gap 0, 간격 금지**⟩ ⟨P44–P47 한 공간에서 잇는다⟩
- size / aspect: **M · 1:1**
- camera: medium shot of her upper body, eye level, her eyes lowered
- composition: **가운데~왼쪽** = 페트라 상반신 3/4(머리 꼭대기 위에서 약 30%), 시선을 내림. **아래** = 왼손목의 매듭 실을 한 길이 풀어내는 손(끝은 왼손목에), 오른손을 **오른쪽 아래 가장자리에서 들어온 그의 맨 오른손** 쪽으로 내민다(아직 닿기 전). **오른쪽 위** = 초점 밖 짙은 호두나무 벽판. 유리 종은 화면에 넣지 않거나 아주 흐리게.
- picture: `PE_TASK`: **분노가 식어 닫힌다.** 입 일자, 턱에 힘, 홍조 없음, 그를 보지 않는다. 남은 손목 치수를 끝내고, 돈을 받고, 떠나려는 손. **차갑게 닫힌 일, 뜨거운 분노가 아니다**(EP4 공정성 조건).
- hands: `H_STD` (R 손바닥 위로) / `P_BARE` · `MARK_DOT` · 실 한 길이 · 접촉: 닿기 직전
- emotion: 차가운 일
- light / colour: 청회색, 피부에 따뜻한 하이라이트 한 점.
- bubble: ① 페트라 · art_space 제안: **오른쪽 위, 초점 밖 짙은 호두나무 벽판** · 꼬리 ↙ 페트라
- dialogue_ref: 페트라 → 휴고 "손. 지금." (script P44)
- gap_after: **0** (간격 금지: 명령과 쥠 사이에 숨을 주지 않는다)
- motion: 내민 손 → 바로 P45 쥠
- must NOT: 뜨거운 분노·노려봄·이 악물기·번진 눈물·고함, 그를 보는 눈, 홍조.
- Flow: 첨부 `PETRA_expressions`(② 일의 얼굴), P39. 난이도 **하~중**.

(SCENE BREAK 없음: S6 → S7은 같은 서재, 같은 보정, 같은 순간의 연속)

### B7 · 반전: 원하지 않은 손 (P45–P50) · 긴장 9 · 대사 3/6

> 통제된 실험. P45와 P49 사이에 바뀌는 것은 **그녀의 얼굴, 손의 머무름(네 손가락), 실, 흔적**뿐이다. **P45–P49 색보정 동일**(`LIGHT_NOWAY` 글자 그대로). P48–P50에 어머니의 손·유리 종 클로즈업·회상을 두지 않는다(허용: P45와 그 복제 P49 배경의 작고 흐린 유리 종). twist-plan §2-7의 8조건 중 그림 몫 1·2·3·4·8을 아래에 반영했다.

### panel_045 · P45
- scene_id: S7 / location: `LOC_STUDY` · light: `LIGHT_NOWAY` (P45–P49 글자 그대로)
- beat: B7 · tension 8–9 · flags: ⟨⟨반전⟩ twist-plan §2-7 조건 1⟩ ⟨침묵 3연타 ②-1⟩ ⟨**큰 gap ③ 400**⟩ ⟨판정 접촉 ②(사다리 밖)⟩ ⟨일의 손⟩ ⟨**TWIN_CAM 원본 → P49**⟩
- size / aspect: **L · 3:4** (비트시트 M에서 변경, P49와 통일. 3:4가 없으면 P45·P49 **둘 다** 1:1)
- camera: **`TWIN_CAM`** (§2-4): medium close-up; from her right-front side, slightly above hand height (about her chest height), 3/4 angle, looking across the hands toward her face
- composition (`TWIN_CAM` 배치 그대로): **아래 45%** = 그의 맨 오른쪽 아래팔이 오른쪽 가장자리에서 들어옴(흰 셔츠 커프 + 미드나이트 블루 소매), **손바닥이 위, 손목 안쪽이 위**, 맥박 자리가 아래 절반의 정가운데. 그녀의 오른손이 왼쪽에서 들어와 **오른손 검지가 손끝부터 첫 마디까지 옆모습.** 왼쪽 아래 모서리에 그녀의 왼손과 **왼손목의 매듭 실.** **위 왼쪽 55%** = 그녀의 머리와 어깨 3/4(화면 오른쪽을 향함, 귀 보임). **위 오른쪽 1/3** = 초점 밖 짙은 호두나무 벽판(비워 둠). **그녀 뒤 왼쪽 가운데 높이** = 작고 흐린 유리 종. 휴고의 얼굴은 화면 밖.
- picture: **`TASK_HAND`**: 매듭 실을 그의 맨 오른손목에 감고, **교차점을 오른손 검지 끝 하나로 맥박 위에 누른다. 엄지·중지·약지·새끼는 그의 흰 셔츠 커프(천) 위**(집게처럼 짧고 효율적, 나무 손틀을 다루듯). 실의 다른 끝은 **팽팽하게** 그녀의 왼손목으로. 얼굴 **`PE_TASK`**: 닫힘, 입 일자, 턱에 힘, **홍조 없음**, 시선은 매듭, 그를 보지 않는다.
- hands: `H_STD` (R 손바닥 위) / `P_BARE` · `MARK_DOT`(손끝 아래라 안 보임) · 접촉: **그녀 R 검지 끝 하나만 → 그의 R 손목 맥박**
- emotion: 차갑게 쥔다(몇 초). 끝내고 떠나려는 일
- light / colour: `LIGHT_NOWAY`: 차가운 청회색, 채도 낮음, 램프의 온기가 빠짐, 피부에 따뜻한 하이라이트 한 점.
- bubble: **silent** (위 오른쪽 1/3은 P49와 같게 비워 둔다)
- dialogue_ref: —
- gap_after: **400** (큰 gap ③: "이번에는 일어날 것인가")
- motion: 손(아래) → 닫힌 얼굴(위 왼쪽) → 긴 간격 → P46
- must NOT: **검지 끝 외의 맨살 접촉**(엄지·다른 손가락이 그의 피부에 닿으면 다시 그림), 소리치는 얼굴·노려보는 눈·뜨거운 분노·홍조, 그를 보는 눈, 효과음, 또렷한 유리 종·진홍, 손바닥만 쥐는 구도.
- Flow: 첨부 `PETRA_expressions`(② 일의 얼굴), `PETRA_hands`, `HUGO_hands`(③ 손목 안쪽), P39. 변형 4장. **확정 후 P49의 첫 첨부.** 난이도 **상**.

### panel_046 · P46
- scene_id: S7 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B7 · tension 9–10 · flags: ⟨세로 대형 ⑤⟩ ⟨침묵 3연타 ②-2⟩ ⟨**반전 정점**⟩ ⟨⟨반전⟩⟩ ⟨복선 회수 F01(그녀에게도 작동) · F04(같은 자리) · F06(같은 잿빛) · F07(같은 손가락)⟩ ⟨P40 · P34 매치 컷⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: extreme close-up of her right index fingertip, tall vertical, the pad seen at the same angle as the split glove fingertip in P40
- composition: **가운데(크게)** = 그녀의 **오른손 검지**, 그의 손목에서 **막 몇 밀리 떨어져** 살짝 굽은 채 손끝 바닥(손바닥 쪽)이 카메라를 향함. **아래** = 초점 밖으로 흐린 그의 맨 손목 안쪽과 흰 커프. **아래 가장자리 왼쪽** = 초점 밖의 그녀 왼손목 매듭 실(좌우 검사 표지). 위쪽 = 청회색 어둠.
- picture: **`MARK_FRESH` 시작**: 손끝 바닥이 무광 잿빛(시든 꽃잎 같은 마른 결)이 되고, 머리카락처럼 가는 **검은 실핏줄**이 첫 마디 주름 쪽으로 파고든다(뿌리처럼 유기적, 그의 핏줄과 같은 먹빛). **P34의 점이 있던 같은 자리**가 덮이며 짙어진다. **첫 마디를 넘지 않는다.** 다른 손가락은 깨끗.
- hands: `H_STD` (손목만, 흐림) / `P_BARE` · **`MARK_FRESH`** · 접촉: 막 떨어짐
- emotion: 물림. 차가운 통증(손만으로)
- light / colour: `LIGHT_NOWAY` 그대로. 잿빛은 무광, 실핏줄은 무광 먹빛.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 손끝 정지 → 바로 P47(물러서는 그)
- must NOT: 피·상처·빛·연기, 문자·룬·문양처럼 보이는 실핏줄, 대칭 무늬, 다른 손가락·손톱·손등의 잿빛, 첫 마디를 넘는 실핏줄, 왼손 검지(좌우 반전), 은색·흰색 회색.
- Flow: 첨부 `PETRA_hands`(③ 신선한 흔적 칸), P45, (참고) P40. 이중 지정 `her RIGHT hand (the hand without the thread bracelet), INDEX finger`. 장면 부정어 `no blood, no wound, no glow.` 변형 4장. 난이도 **상**.

### panel_047 · P47
- scene_id: S7 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B7 · tension 9 · flags: ⟨침묵 3연타 ②-3⟩ ⟨**ruling C: 장갑을 다시 끼지 않는다**⟩ ⟨복선 F08 숨기는 손 ②⟩ ⟨P05 매치 컷⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: medium-wide two-shot, eye level
- composition: **오른쪽** = 한 걸음 물러선 휴고, **맨 오른손을 등 뒤로 감춘다**(P05와 같은 자세), 장갑 낀 왼손은 몸 옆. **왼쪽** = 페트라, 들린 오른손 그대로 자기 손끝을 내려다봄. 둘 사이 한 걸음, 그 사이로 **느슨히 늘어진 매듭 실**(그녀 왼손목에서 그의 등 뒤 손 쪽으로 처짐. 이 실은 우선순위 낮음, 사라져도 통과). 배경 = 짙은 벽판, 유리 종은 넣지 않는다.
- picture: 휴고 `HE_SHAME`(수치와 공포: 또 다치게 했다) / 페트라 `PE_FROZEN`(충격).
- hands: **`H_HIDDEN`** / `P_BARE` · `MARK_FRESH`(들린 손, 작아서 안 보여도 됨) · 접촉 없음
- emotion: 물러섬, 감춤 / 충격
- light / colour: `LIGHT_NOWAY` 그대로.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 그가 오른쪽으로 물러난다(P05의 메아리)
- must NOT: **그가 장갑을 끼는 그림**, 그가 그녀 손목을 잡는 그림, 소리치는 얼굴, 오른손에 장갑, 유리 종.
- Flow: 첨부 **P05 확정본**(자세), `HUGO_turnaround`, `PETRA_turnaround`, P39. 난이도 **중**.

### panel_048 · P48
- scene_id: S7 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B7 · tension 8–9 · flags: ⟨⟨반전⟩ 조건 3: 그녀가 돌아서는 이유⟩ ⟨복선 F12 발동 → '오늘 밤' 시한⟩ ⟨어머니 이미지·유리 종 금지 시작(P48–P50)⟩ ⟨회차 최고 밀도 얼굴 컷⟩
- size / aspect: **M · 1:1**
- camera: over her RIGHT shoulder (keeps her screen-left, him screen-right), medium close-up on his face, looking slightly up
- composition: **왼쪽 아래 전경** = 그녀의 오른쪽 어깨, 쪽머리, 귀와 볼의 옆선(옆얼굴 일부: 눈썹이 풀리기 시작). **가운데~오른쪽** = 휴고 얼굴(머리 꼭대기는 위에서 약 35%), 어깨 각도로 손이 아직 등 뒤임을 보인다. **왼쪽 위** = 그녀 머리 위의 초점 밖 짙은 호두나무 벽판.
- picture: 휴고 **`HE_CRUMBLE`**: 차갑지 않다. 아프게 올라간 눈썹, 떨리는 턱, 젖은 눈(눈물은 흐르지 않음). 페트라 `PE_UNBAR`: 그 얼굴을 올려다보고, **닫힌 빗장이 풀리기 시작**(그녀를 다치게 한 일로 그가 다친 얼굴을 봤기 때문).
- hands: `H_HIDDEN` / `P_BARE` · `MARK_FRESH`(화면 밖) · 접촉 없음
- emotion: 자기를 벌하는 사람의 고통 / 분노가 빠져나감
- light / colour: `LIGHT_NOWAY` 그대로, 그의 눈에 젖은 반사 한 점.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 그녀 머리 위의 초점 밖 짙은 호두나무 벽판** · 꼬리 ↘ 휴고 입
- dialogue_ref: 휴고 → 페트라 "약속은… 기억하오?" (script P48) — **질문, 명령 아님**
- gap_after: **0**
- motion: 그녀 시선(왼쪽 아래 → 오른쪽 위) 그의 얼굴로
- must NOT: 차가운 얼굴, 흐르는 눈물, 명령·가리키는 몸짓, **유리 종·장갑·어머니**, 핏줄이 깃 위로.
- Flow: 첨부 `HUGO_expressions`(⑤ 무너진 얼굴), `PETRA_turnaround`. 변형 2–4장. 난이도 **중상**(어깨 너머 + 미세한 표정).

### panel_049 · P49
- scene_id: S7 / location: `LOC_STUDY` · light: `LIGHT_NOWAY` (**P45와 글자 그대로**)
- beat: B7 · tension 9 · flags: ⟨**⟨반전⟩ 반전의 심장** — twist-plan §2-7 조건 2·4·5·6·7⟩ ⟨결정 4: 규칙을 확인하려고 일부러 다시 잡는다⟩ ⟨판정 접촉 ③⟩ ⟨원하는 손⟩ ⟨생각 말풍선 하나, 다른 말풍선 금지⟩ ⟨하드 스톱 숨 80⟩ ⟨복선 회수 F03 · F05(실이 떨어짐) · F08 · F15⟩ ⟨**TWIN_CAM 복제**⟩
- size / aspect: **L · 3:4** (**P45와 같은 비율**. P45가 1:1이면 이것도 1:1)
- camera: **`TWIN_CAM`** — P45와 같은 카메라·높이·크롭·배경(같은 자리의 작고 흐린 유리 종, 같은 벽판)
- composition: P45 배치 그대로. 손 위치(맥박 자리 = 아래 절반 정가운데), 그녀 머리 위치(위 왼쪽), 위 오른쪽 1/3의 벽판까지 같다.
- picture (P45에서 바뀌는 것만): **① 얼굴 `PE_OPEN`**: 눈을 들어 그의 얼굴(화면 위 오른쪽 밖)을 본다, 열린 얼굴, 입술 살짝 벌어짐, 귀 끝 옅은 홍조. **② 손**: 등 뒤에서 끌어낸 그의 맨 오른손목을 **아래에서 받치듯** 잡았다 — 손바닥과 엄지는 그의 손목 등 쪽 맨살 아래, 중지·약지·새끼는 손목 안쪽과 손바닥 아래쪽 맨살 위, **흔적 난 검지 끝은 일부러 같은 맥박 자리**에. 커프에 닿은 손가락 없음. **네 손가락 모두 깨끗한 따뜻한 피부.** **③ 실**: 그의 손목에서 풀려, **그녀 왼손목에서 아래로 느슨히 늘어져** 화면 밖으로. **④ 흔적**: 검지 끝 옆모습에 손끝을 감싼 무광 잿빛 + 첫 마디 주름까지의 머리카락 같은 검은 실핏줄, **P46이 끝난 길이 그대로**(자라지도 옅어지지도 않음). 그의 팔은 P45와 같은 위치면 충분(팔꿈치가 조금 뒤인 각도는 선택).
- hands: `H_STD` (끌려 나온 R) / `P_BARE` · `MARK_FRESH` · 접촉: **그녀 R 손 전체(손바닥 + 다섯 손가락) → 그의 R 맨 손목, 검지 끝은 같은 맥박 자리** (무사)
- emotion: 열림, 깨달음
- light / colour: **`LIGHT_NOWAY` P45와 동일.** 무사함은 아무 일도 일어나지 않음 그 자체.
- bubble: ① 페트라 **생각**(점선 테두리, 꼬리 대신 작은 점들, 그녀 머리 쪽) · art_space 제안: **위 오른쪽 1/3, 초점 밖 짙은 호두나무 벽판** (EN: the upper right third, dark walnut panelling softly out of focus) · 크메르어 약 23자 → 그 면을 넓게, 얼굴·손을 가리지 않게 · **이 패널에 다른 말풍선 금지**
- dialogue_ref: 페트라(생각) "내 손이 아니야. …내가 원하느냐야." (script P49, `(គិត)`)
- gap_after: **80**
- motion: 같은 손(아래) → 열린 얼굴(위 왼쪽) → 생각 말풍선(위 오른쪽)
- must NOT: **화면이 따뜻해지는 색·빛·온기·꽃**, 흔적이 옅어지거나 자람, 다른 손가락의 잿빛, **손바닥만 잡는 구도**("손목은 물고 손바닥은 안 문다"는 오독), 다른 앵글·다른 크롭·다른 비율, 실을 손에 쥠, 어머니·유리 종 클로즈업.
- Flow: **첫 첨부 = `panel_045.png` 확정본** + `PETRA_expressions`(⑤ 열린 얼굴) + `PETRA_hands`(③). 프롬프트에 `Same camera, framing, crop and colour grade as the attached panel; change only her face, her other four fingers, the thread and the mark as described.` Flow 이미지 편집이 되면 P45를 편집해서 만든다. 변형 4장. 난이도 **최상**.

### panel_050 · P50
- scene_id: S7 / location: `LOC_STUDY` · light: `LIGHT_NOWAY`
- beat: B7 · tension 8 · flags: ⟨복선 F09 처음 끼는 장갑⟩ ⟨**F10 거짓말 '가시예요' → P54–55에서 그녀가 깬다(10패널 이내)**⟩ ⟨정보 격차 역전⟩ ⟨gap 200 서재 → 작업대, 깊은 밤⟩
- size / aspect: **M · 1:1**
- camera: medium shot centred on her hands; his gaze comes down from the top of the frame
- composition: **가운데 아래** = 황갈색 스웨이드 작업 장갑을 **처음으로** 끼는 그녀의 손: 왼손은 이미 장갑, 오른손에 두 번째 장갑을 당겨 끼는 중(검지 끝은 이미 장갑 속), 왼쪽 장갑 커프 위로 매듭 실. 허리에는 더 이상 장갑이 없다. **왼쪽 가운데** = 페트라 얼굴 3/4(머리 꼭대기 위에서 약 30%). **오른쪽 위 가장자리** = 휴고의 얼굴 일부(이마 위는 잘림), 그녀의 손을 내려다봄, 맨 오른손은 몸 옆. **위쪽 가운데** = 두 머리 사이의 초점 밖 벽판.
- picture: 페트라 `PE_PROUD_LIE`(턱을 듦, 눈을 피함, 입을 다묾: 투명한 핑계) / 휴고 추론의 시작(`HE_REALISING` 초입).
- hands: `H_STD` / **`P_GLOVED` 시작** · 흔적은 장갑 속 · 접촉: 손을 놓음
- emotion: 장갑을 낀다 = 숨는다. 자존심 / 추론의 시작
- light / colour: `LIGHT_NOWAY` 그대로(B7 마지막 청회색).
- bubble: ① 휴고 · art_space 제안: **위쪽 가운데, 두 머리 사이의 초점 밖 짙은 호두나무 벽판** · 꼬리 ↗ 휴고(오른쪽 위) / ② 페트라 · art_space 제안: **왼쪽, ① 바로 아래 그녀 볼 옆의 어두운 벽판** · 꼬리 → 페트라
- dialogue_ref: ① 휴고 → 페트라 "그럼… 아까는?" ② 페트라 → 휴고 "가시예요." (script P50)
- gap_after: **200**
- motion: 위(그의 시선) → 아래(장갑 끼는 손)
- must NOT: 장갑의 진홍·스티치·서명, 장갑 너머로 비치는 흔적, 허리에 남은 장갑, 그가 그녀 손을 잡음, 유리 종·어머니.
- Flow: 첨부 `PETRA_hands`(④ 장갑 칸), `PETRA_expressions`, P39. 난이도 **중**.

--- SCENE BREAK --- (S7 → S8 · `LOC_STUDY` → `LOC_BENCH` 깊은 밤)

### B8 · 관능 정점: 묻는 남자 (P51–P58) · 긴장 9 · 대사 4/8

> 절제. 그는 묻고 멈추며, 그녀는 스스로 장갑을 벗고 마지막 거리를 닫는다. 거리 사다리 한 뼘(P53–54) → 한 마디(P55) → 숨 하나(P56) → 0(P57). 큰 간격은 접촉 **앞**(P53 뒤)에만. 노골 0, 키스 0, 벗는 것은 장갑뿐. `LIGHT_DEEP_NIGHT` 문장은 P51–P62 끝까지 바뀌지 않는다(P58 닿음 이후에도, 암전·화이트아웃 없음). 그의 피부와 그녀의 손끝 사이에 빛·불꽃·반짝임을 그리지 않는다.

### panel_051 · P51
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 7–8 · flags: ⟨이중의미⟩ ⟨**마지막 위트(이 뒤로 이완 없음)**⟩ ⟨복선 F09 ②⟩ ⟨톱니: B7 끝보다 낮게 시작⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: side wide of the bench, eye level, one step between them
- composition: P29와 같은 곁방(같은 작업대·화분·회갈색 정원사 장갑·흰 장미). **왼쪽** = 장갑 낀 두 손으로 캔버스 연장 두루마리를 말아 가죽 끈을 묶는 페트라(떠날 짐). **오른쪽** = 한 걸음 거리에 와서 선 휴고(머리는 위에서 약 25–30%), 시선은 그녀의 장갑 낀 손. 가운데 = 램프 하나, 위로 돔 유리에서 드는 은녹색 달빛. **위쪽 가운데~오른쪽** = 작업대 위 어두운 비스듬한 유리벽(달빛이 옅게).
- picture: 그녀 `PE_LEVEL`(사무적), 그 건조한 위트 속 진심(`HE_ASKING` 초입).
- hands: `H_STD` / `P_GLOVED` · 흔적은 장갑 속 · 접촉 없음
- emotion: 짐을 싼다 / 그가 온다. 마지막 이완
- light / colour: 깊은 밤, 램프 호박빛 + 은녹색 달빛이 두 사람 위에서 만남.
- bubble: ① 휴고 · art_space 제안: **위쪽 가운데~오른쪽, 작업대 위의 어두운 비스듬한 유리벽(달빛이 옅게, 비친 불꽃 제외)** · 크메르어 약 24자 → 넓게 · 꼬리 ↘ 휴고
- dialogue_ref: 휴고 → 페트라 "장갑을 안 끼는 장갑장이… 아니었소?" (script P51)
- gap_after: **0**
- motion: 오른쪽(그) → 왼쪽(그녀의 장갑 낀 손)
- must NOT: 진홍 커프 띠(P29 전용; 진홍 실패는 허용), 두루마리 속 두 번째 골무, 차가운 청백색 달빛(은녹색).
- Flow: **S8 장면 앵커**(P52–P62에 첨부, 권장 카드 `LOC_BENCH`가 있으면 그것도) + P29(같은 장소). 첨부 `PETRA_turnaround`, `HUGO_turnaround`. 난이도 **중**.

### panel_052 · P52
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 8 · flags: ⟨그녀는 조항(떠남)을 따르는 척한다 → EP2가 행동으로 답한다⟩
- size / aspect: **M · 1:1**
- camera: medium 3/4 on Petra, eye level; her gloved right index finger in focus at the bottom
- composition: **왼쪽~가운데** = 페트라 3/4(화면 오른쪽 아래를 향함), 눈은 두루마리만 본다. **아래** = 두루마리 위 그녀의 장갑 낀 오른손, **검지에 초점.** **오른쪽 가장자리** = 반 걸음 다가선 휴고의 어두운 어깨와 소매(얼굴은 화면 밖). **왼쪽 위** = 그녀 머리 뒤 램프 밖 청록 어둠.
- picture: `PE_FLUSTERED`(당황할수록 사무적). 그의 시선이 그녀의 장갑 낀 오른손 검지로 내려간다는 것은 그의 몸 방향과 다음 컷 P53이 싣는다.
- hands: `H_STD`(화면 밖) / `P_GLOVED` · 접촉 없음
- emotion: 사무적 회피
- light / colour: 깊은 밤, 같은 보정.
- bubble: ① 페트라 · art_space 제안: **왼쪽 위, 그녀 머리 뒤 램프 밖 청록 어둠** · 꼬리 ↘ 페트라
- dialogue_ref: 페트라 → 휴고 "조항대로. 오늘 밤 가요." (script P52)
- gap_after: **0**
- motion: 위(얼굴) → 아래(장갑 낀 검지) → 다음 컷 그의 손
- must NOT: 장갑 너머 흔적, 장갑에 스티치·진홍.
- Flow: 첨부 `PETRA_expressions`(④), P51. 난이도 **하~중**.

### panel_053 · P53
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 8–9 · flags: ⟨잠금 대사⟩ ⟨**큰 gap ④ 440**⟩ ⟨하드 스톱: 질문이 걸린 채⟩ ⟨거리 ④ 한 뼘⟩ ⟨복선 F13 묻는 남자 회수⟩
- size / aspect: **M · 1:1**
- camera: medium close-up on Hugo; the hand-span between the two hands visible in the lower part
- composition: **가운데~오른쪽 위** = 휴고 얼굴(머리 꼭대기 위에서 약 30%), 시선은 그녀의 손. **아래 가운데** = 그의 맨 오른손이 **손바닥을 위로** 살짝 들려, 왼쪽에서 들어온 그녀의 장갑 낀 오른손 **한 뼘 앞에서 멈춤**(두 손 사이 빈 공간이 분명히). **왼쪽 위** = 램프 밖 청록 어둠과 어두운 유리.
- picture: `HE_ASKING`(절제, 갈망, 두려움; 더 다가가지 않는다).
- hands: `H_STD` / `P_GLOVED` · 접촉: **없음(한 뼘)**
- emotion: 묻는다
- light / colour: 깊은 밤, 램프빛이 두 손 사이 공간에.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 램프 밖 청록 어둠과 어두운 유리** · 꼬리 ↘ 휴고 · **단독 말풍선**
- dialogue_ref: 휴고 → 페트라 **"…허락해 주겠소?"** [잠금] (script P53)
- gap_after: **440** (큰 gap ④: 그녀의 대답을 기다림)
- motion: 얼굴(위) → 멈춘 손(아래) → 긴 간격
- must NOT: 두 손이 닿음, 그가 몸을 기울여 다가옴, 손등이 위(손바닥이 위여야 '묻는' 손), 글자.
- Flow: 첨부 `HUGO_expressions`(⑥ 묻는 얼굴), `HUGO_hands`, P51. 난이도 **중**.

### panel_054 · P54
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 9 · flags: ⟨**결정 5-1: 스스로 장갑을 벗는다**⟩ ⟨침묵 3연타 ③-1⟩ ⟨L3 접근⟩ ⟨**P15 거울 구도**⟩ ⟨벗는 것은 장갑뿐⟩
- size / aspect: **M · 1:1**
- camera: close-up centred on the two hands, the same hand height as P15, mirrored left-right
- composition: **왼쪽~가운데** = 그녀의 **장갑 낀 왼손**이 오른손 장갑의 손끝을 하나씩 집어 벗기는 중(오른손 손가락 끝이 화면 **오른쪽**을 향함 = P15의 거울), 검지 끝이 막 드러나기 시작. **오른쪽** = 한 뼘 앞에서 손바닥을 위로 한 채 기다리는 그의 맨 오른손가락. 배경 = 램프 웅덩이와 어둠(흐림).
- picture: 대답 = 행동. 결심, 떨림을 누른 손(얼굴은 화면 밖).
- hands: `H_STD`(대기) / **`P_REMOVING`** · 흔적 드러나기 시작 · 접촉: **없음(한 뼘)**
- emotion: 결심
- light / colour: 깊은 밤, 같은 보정.
- bubble: **silent** (3연타: 효과음 없음)
- dialogue_ref: —
- gap_after: **0**
- motion: 벗겨지는 장갑 방향(왼쪽으로) ↔ 기다리는 손(오른쪽)
- must NOT: 장갑 외에 벗는 것, 두 손이 닿음, 효과음, 그의 손이 다가옴, 그녀의 왼손 장갑이 벗겨짐(벗는 것은 오른손 장갑뿐).
- Flow: 첨부 **P15 확정본**(손 동작, 좌우 뒤집기 지시), `PETRA_hands`(④), P51. 난이도 **상**(장갑 벗는 손 + 기다리는 손).

### panel_055 · P55
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 9 · flags: ⟨세로 대형 ⑥⟩ ⟨침묵 3연타 ③-2⟩ ⟨거리 ⑤ 한 마디⟩ ⟨**복선 F10 회수: '가시예요'가 깨진다**⟩ ⟨하드 스톱⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: tall vertical, from the hands up to the two figures; eye line rises from bottom to top
- composition: **아래 1/3** = 그녀의 맨 오른손이 그의 맨손 쪽으로 올라오고, **검지 끝의 신선한 흔적**(잿빛 + 첫 마디까지 검은 실핏줄)이 그를 향해 드러난다. 그의 손가락은 **손가락 한 마디 길이 앞에서** 멈춰 있다. 그녀의 왼손은 아직 장갑(아래 왼쪽 가장자리), 벗은 오른손 장갑은 작업대 위. **위 2/3** = 달빛 속 옷 입은 두 사람의 상체와 턱선(왼쪽 = 그녀, 오른쪽 = 그, 그녀의 눈높이 = 그의 턱·크라바트). 얼굴은 화면 위 끝에 걸치거나 턱까지만.
- picture: 자기 거짓말을 스스로 깨는 노출. 그녀가 흔적을 그에게 보인다.
- hands: `H_STD` / **`P_ONE`** · `MARK_FRESH`(보임) · 접촉: **없음(한 마디)**
- emotion: 드러냄, 숨 멎음
- light / colour: 램프 + 은녹색 달빛, 같은 보정.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0**
- motion: 아래(흔적 난 손끝) → 위(두 사람의 턱선), 손에서 위로 올라가는 시선
- must NOT: 가슴·몸을 강조하는 크롭(옷 입은 상체의 구도일 뿐), 열린 깃, 키스나 얼굴 접촉, 손이 닿음, 빛·반짝임.
- Flow: 첨부 `PETRA_hands`(④ P_ONE 흔적), `HUGO_hands`, P51. 변형 4장. 난이도 **상**(세로 구도 두 상체 + 손 사이 빈틈 + 흔적).

### panel_056 · P56
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 9–10 · flags: ⟨침묵 3연타 ③-3⟩ ⟨**관능 정점**⟩ ⟨거리 ⑥ 숨 하나⟩ ⟨그는 먼저 만지지 않는다(그녀의 조항)⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: extreme close-up on the same axis as P55, the tightest crop of the episode
- composition: **가운데** = 두 맨 오른손의 손끝, 그 사이 **숨 하나만큼의 빈 공기**. 그녀의 손은 왼쪽 아래에서 올라오고(흔적 난 검지가 보임), 그의 손은 오른쪽에서 손바닥을 위로 한 채 멈춰 있다. 배경 = 어둠 속 부드러운 흐림(빛 번짐 없음).
- picture: **그는 닫지 않는다.** 절제의 극점.
- hands: `H_STD` / `P_ONE` · `MARK_FRESH` · 접촉: **없음(숨 하나)**
- emotion: 절제의 극점
- light / colour: 같은 보정, 손가락 사이 공간은 어둡게.
- bubble: **silent**
- dialogue_ref: —
- gap_after: **24** (허용 0–24)
- motion: 빈틈에서 정지 → 다음 컷 그녀가 닫는다
- must NOT: **손끝 사이의 불꽃·빛·전기·반짝임**(이미지 생성기의 흔한 클리셰), 닿음, 다른 손가락의 잿빛, 흔적이 사라짐.
- Flow: 첨부 P55, `PETRA_hands`, `HUGO_hands`. 장면 부정어 `no spark, no glow between the fingertips.` 난이도 **중상**.

### panel_057 · P57
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 9 · flags: ⟨**결정 5-2: 마지막 거리를 닫는다**⟩ ⟨이중의미: P44 '지금'(물림)의 역상(무사)⟩ ⟨복선 F11 '지금' ②⟩ ⟨원하는 손⟩
- size / aspect: **M · 1:1**
- camera: close-up of the two hands with the lower half of her face at the top
- composition: **아래 가운데** = 그녀의 맨 오른손이 그의 맨 오른손 **안으로 들어간다**(그녀가 먼저 닿는다), 그의 손은 손바닥을 위로 받는 그대로. **위 가장자리 왼쪽** = 그녀의 입술과 턱(결심). **오른쪽 위** = 램프 밖 어둠.
- picture: `PE_RESOLVE`(입술을 다묾, 턱에 힘, 참은 숨). 선택.
- hands: `H_STD` / `P_ONE` · `MARK_FRESH` · 접촉: **그녀 R 맨손 → 그의 R 맨손 안으로** (무사)
- emotion: 닫는다. 선택
- light / colour: 같은 보정(따뜻해지지 않는다).
- bubble: ① 페트라 · art_space 제안: **오른쪽 위, 그녀 턱 옆의 램프 밖 어둠** · 꼬리 ↙ 그녀 입 · **단독 말풍선**
- dialogue_ref: 페트라 → 휴고 "…지금." (script P57)
- gap_after: **0**
- motion: 왼쪽 손이 오른쪽 손 안으로 → 다음 컷 닿음 유지
- must NOT: 입술이 그의 피부 가까이, 키스 암시, 그가 세게 쥠, 빛·온기.
- Flow: 첨부 `PETRA_hands`, `HUGO_hands`, `PETRA_expressions`, P51. 난이도 **중**.

### panel_058 · P58
- scene_id: S8 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B8 · tension 9 · flags: ⟨**L3 멈춤 1회**⟩ ⟨키스 없음⟩ ⟨원하는 손 문법의 마지막 확인⟩ ⟨P59와 같은 순간·같은 접촉(시간 점프 없음)⟩ ⟨gap 0–40, 암전 금지⟩
- size / aspect: **L · 3:4** (없으면 1:1)
- camera: close two-shot from the chest up, eye level, both in profile; the joined hands below
- composition: **왼쪽** = 페트라 옆얼굴(화면 오른쪽을 향함), **오른쪽** = 휴고 옆얼굴(화면 왼쪽을 향함), **두 얼굴 사이 숨 하나**(그녀의 눈높이 = 그의 턱·크라바트). **아래** = 맞잡은 두 오른손: 그의 엄지가 그녀 손목 맥박 위에 **가볍게** 얹힘, 그녀의 다섯 손가락 모두 맨살·깨끗, 검지 흔적은 그대로, 그녀의 왼손은 장갑. 위쪽 = 돔에서 드는 은녹색 달빛과 어둠.
- picture: 휴고 `HE_ASKING`: 시선이 그녀의 입술 높이까지 갔다가 **멈추고 손으로 돌아가는 중**(눈꺼풀이 내려가 손 쪽을 향함). 페트라 `PE_OPEN`의 고요한 판: 시선은 맞잡은 손에 머묾. **두 사람의 눈은 마주치지 않는다.**
- hands: `H_STD` (엄지가 그녀 맥박 위에 가볍게) / `P_ONE` · `MARK_FRESH` · 접촉: 맞잡은 R ↔ R (무사)
- emotion: 숨 멎는 가까움, 그의 절제
- light / colour: 램프 + 달빛, **보정 변화 없음.**
- bubble: **silent**
- dialogue_ref: —
- gap_after: **0** (허용 0–40, 암전처럼 읽히는 간격 금지)
- motion: 얼굴 사이 숨 → 그의 시선이 아래(손)로 → 다음 컷 손 클로즈업(그의 시점)
- must NOT: **키스, 얼굴이나 입술 접촉**, 그의 시선이 입술에 머문 채 끝남, 그가 그녀 손목을 세게 쥠, 열린 깃·노출, 벽·몸을 몰아붙이는 자세, 암전·화이트아웃·빛 번짐.
- Flow: 첨부 `PETRA_turnaround`, `HUGO_turnaround`, `HUGO_expressions`(⑥), P51. 변형 4장. 난이도 **상**(가까운 두 옆얼굴 + 아래 손 + 미세한 시선).

(SCENE BREAK 없음: S8 → S9는 같은 작업대, 같은 순간, 같은 접촉)

### B9 · 클리프행어 (P59–P62) · 긴장 10 · 대사 3/4

> 공개(오해 아님). 그가 규칙을 읽는다. 짧은 줄 셋(P60 · P61 · P62). P59–P60은 달리기(간격 0), P61 뒤 회차 최대 멈춤 600, P62 XL. 대답할 권리는 그녀에게 남는다. 그가 그 정보를 지렛대로 쓰는 뉘앙스(다가오는 몸, 웃음) 금지.

### panel_059 · P59
- scene_id: S9 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B9 · tension 9 · flags: ⟨달리기 속도(간격 0)⟩ ⟨그의 시선 ①②: 손을 보는 남자가 손에서 읽는다⟩
- size / aspect: **M · 1:1**
- camera: his point of view, high angle close-up of the joined hands
- composition: **한 컷에 증거 둘**: **위 왼쪽~가운데** = 그녀 오른손 검지 끝의 검은 흔적(잿빛 + 첫 마디까지 실핏줄, 손끝 옆모습이 보이게 살짝 기울어짐). **아래 오른쪽** = 그녀 손목 안쪽에 닿아 있는 그의 맨 엄지와 손가락(그의 핏줄은 그의 손에만), **그녀 손목 피부에는 새 잿빛 없음**(따뜻한 피부). 그녀의 장갑 낀 왼손은 가장자리에 살짝.
- picture: 깨달음이 오는 중(손만으로).
- hands: `H_STD` (엄지가 그녀 맥박 위) / `P_ONE` · `MARK_FRESH` · 접촉: 맞잡은 R ↔ R (무사)
- emotion: 읽기
- light / colour: 같은 보정, 램프빛이 두 손 위에.
- bubble: **silent** (대사는 P60–P62 세 줄)
- dialogue_ref: —
- gap_after: **0**
- motion: 흔적(위 왼쪽) → 깨끗한 손목(아래 오른쪽) → 바로 P60 그의 얼굴
- must NOT: 그녀 손목·다른 손가락의 잿빛, 그의 핏줄이 그녀 피부로 번짐, 빛·온기, 세게 쥔 손.
- Flow: 첨부 `PETRA_hands`(④), `HUGO_hands`, P58. 난이도 **중상**(누구 손가락인지 읽혀야 한다).

### panel_060 · P60
- scene_id: S9 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B9 · tension 9–10 · flags: ⟨⟨반전⟩ 재진술: 규칙 설명이 아니라 관찰⟩ ⟨잠금 대사(C1 교체 대사)⟩
- size / aspect: **M · 1:1**
- camera: close-up of his face, eye level, eyes lowered
- composition: **가운데~오른쪽** = 휴고 얼굴(머리 꼭대기 위에서 약 30%), 눈은 아직 아래(손). **왼쪽 위** = 램프 밖 청록 어둠과 어두운 유리.
- picture: `HE_REALISING`(조용한 충격이 밝아 옴, 입술이 살짝 벌어짐).
- hands: (화면 밖, 맞잡은 채) · 접촉 유지
- emotion: 본 것을 말한다. 추론
- light / colour: 램프빛 아래에서, 달빛 위에서, 같은 보정.
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 램프 밖 청록 어둠과 어두운 유리** · 꼬리 ↘ 휴고
- dialogue_ref: 휴고 → 페트라 **"같은 손인데… 아까는 물었고."** [잠금] (script P60)
- gap_after: **0**
- motion: 내려간 눈 → 다음 컷 올라가는 눈
- must NOT: 미소, 그녀를 보는 눈(아직 손), 몸을 기울임.
- Flow: 첨부 `HUGO_expressions`, P58. 난이도 **하~중**.

### panel_061 · P61
- scene_id: S9 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B9 · tension 10 · flags: ⟨**큰 gap ⑤ 600, 회차 최대 멈춤**⟩ ⟨복선 F14 회수: 시선 손 → 얼굴(P18 이후 두 번째 '사건')⟩ ⟨F11 '지금' ③⟩ ⟨P18 매치 컷⟩
- size / aspect: **M · 1:1**
- camera: medium close-up of his face, the same face size and angle as P18 (her eye line, slightly low, not extreme)
- composition: **가운데~오른쪽** = 휴고 얼굴, P18과 같은 크기·각도(머리 위 여백 약 20%), 눈이 손에서 **그녀의 얼굴로 올라옴**(살짝 내려다봄 = 카메라 쪽). **왼쪽 위** = 램프 밖 청록 어둠.
- picture: `HE_FIRST_LOOK`의 두 번째 판: 이번엔 그녀의 진실을 안 채로 — 고요하고 확신에 가까운 눈, 입술 살짝 벌어짐, 크라바트 위 삼킴. 웃지 않는다.
- hands: (화면 밖, 맞잡은 채) · 접촉 유지
- emotion: 확신에 가까운 질문 직전
- light / colour: 깊은 밤 같은 보정(P18의 해 질 녘과 빛은 다르고 얼굴 구도는 같다).
- bubble: ① 휴고 · art_space 제안: **왼쪽 위, 램프 밖 청록 어둠** · 꼬리 ↘ 휴고
- dialogue_ref: 휴고 → 페트라 "지금은… 아니군." (script P61)
- gap_after: **600** (큰 gap ⑤)
- motion: 올라간 눈에서 멈춤 → 회차 최대 간격 → P62
- must NOT: 미소·히죽거림(지렛대 뉘앙스), 몸을 기울여 다가옴, 극단 앵글, 목·얼굴의 핏줄.
- Flow: 첨부 **P18 확정본**(얼굴 크기·각도), `HUGO_expressions`(② 첫 시선), P58. 난이도 **중**.

### panel_062 · P62
- scene_id: S9 / location: `LOC_BENCH` · light: `LIGHT_DEEP_NIGHT`
- beat: B9 · tension 10 · flags: ⟨세로 대형 ⑦⟩ ⟨⟨반전⟩⟩ ⟨**잠금 대사 · 마지막 줄**⟩ ⟨공개형 클리프행어(오해 아님)⟩ ⟨말풍선을 지워도 질문이 남는 얼굴⟩ ⟨회차 최고 밀도 얼굴 컷⟩
- size / aspect: **XL · 9:16 풀블리드**
- camera: extreme close-up of her face, tall vertical, eye level to very slightly high (he is taller), no extreme angle
- composition: **위 약 25%** = 그녀 머리카락 위의 어둠(램프 밖 청록 어둠, 말풍선 자리). **가운데~아래 3/4** = 그녀의 얼굴: 이마 위는 잘려도 되지만 **눈·입은 반드시 화면 안**, 쪽머리 옆 **귀가 보이게**. **맨 아래 약 8%** = 크라바트 높이의 깃 그늘(엔딩 캡션 자리; 맞잡은 손은 이 컷에 넣지 않는다 — 캡션이 손을 덮지 않게).
- picture: **`PE_CAUGHT`**: 들킨 얼굴. 귀 끝 홍조, 살짝 벌어졌다 다무는 입술, 피하지 못한 눈(그를 향해 살짝 올려다봄). **대답은 가린다**(입을 열지 않는다, 웃지 않는다).
- hands: (화면 밖, 맞잡은 채) · 접촉 유지
- emotion: 질문을 받는다. 들킴. 대답할 권리는 그녀에게
- light / colour: 램프 호박빛이 얼굴 한쪽, 은녹색 달빛이 다른 쪽, 같은 보정.
- bubble: ① 휴고(**화면 위 밖**) · art_space 제안: **위 25%, 그녀 머리카락 위의 어둠** (EN: the darkness above her hair, the top quarter) · 꼬리 ↑ 위쪽 가장자리(그 쪽) · **말풍선은 이것 하나뿐** / 엔딩 캡션(뷰어, narration) · art_space 제안: **맨 아래 띠, 깃 그늘**
- dialogue_ref: 휴고 → 페트라 **"처음부터… 원했던 거요?"** [잠금] + 캡션 "— 2화에 계속 —" (script P62 `KM:`, `KM 캡션:`)
- gap_after: — (회차 끝)
- motion: 위 말풍선 → 눈 → 입술(다문다), 끝
- must NOT: 대답하려는 입, 미소, 눈물, 암전 컷, 그의 몸이 다가오는 그림, 극단 앵글, 앳된 얼굴, 귀를 덮은 머리카락.
- Flow: 첨부 `PETRA_expressions`(⑥ 들킨 얼굴), `PETRA_turnaround`, P58. 변형 4장. 난이도 **중상**(미세한 표정 + 위·아래 빈 면).

---

## 4. 한 장 요약

### 4-1. 수치

| 항목 | 수 | 패널 |
|---|---|---|
| 총 패널 | **62** | panel_001–panel_062 (P01–P62), 번호 연속 |
| 장소 | **4** | `LOC_GREENHOUSE` 21 · `LOC_WORKSHOP` 8 · `LOC_BENCH` 21 · `LOC_STUDY` 12 |
| └ `LOC_GREENHOUSE` | 21 | P01–P05 (통로·밤) · P13 (외관) · P14–P20 (입구·통로·해 질 녘) · P21–P28 (돔 탁자·초저녁) |
| └ `LOC_WORKSHOP` | 8 | P06–P07, P11–P12 (거리) · P08–P10 (공방 안) · P37 (회상) |
| └ `LOC_BENCH` | 21 | P29–P36, P38 (밤 램프) · P51–P62 (깊은 밤) |
| └ `LOC_STUDY` | 12 | P39–P50 |
| scene_id | 13 | S1, S2a, S2b, S2c, S3a, S3b, S4, S5, S5f, S6, S7, S8, S9 · SCENE BREAK 11곳 |
| 화면비 9:16 (XL, 세로 대형 풀블리드) | **7** | P01, P13, P19, P40, P46, P55, P62 |
| 화면비 3:4 (L) | **17** | P02, P06, P12, P14, P16, P18, P21, P28, P29, P35, P43, P45, P47, P49, P51, P56, P58 |
| 화면비 1:1 (M) | **35** | P03, P05, P07, P08, P10, P11, P15, P17, P20, P22–P27, P30–P34, P36, P38, P39, P41, P42, P44, P48, P50, P52–P54, P57, P59–P61 |
| 화면비 16:9 (ST) | **3** | P04, P09, P37 |
| (Flow에 3:4가 없을 때) | 9:16 **8** · 1:1 **51** · 16:9 **3** | L 16개 → 1:1, P02만 → 9:16. P45·P49는 둘 다 1:1 |
| 완전 무대사 (silent) | **18** | P01, P03, P10, P11, P13, P17, P18, P19, P37, P40, P45, P46, P47, P54, P55, P56, P58, P59 |
| 효과음만 | **2** | P02, P04 (빼지 말 것: P01–P04 무대사 4연속 방지) |
| 대사 패널 | **42** | 말풍선 52 (대사 51 + 생각 1 = P49) |
| └ 말풍선 2개 패널 | 10 | P07, P12, P14, P20, P22, P26, P30, P35, P38, P50 |
| └ 단독 말풍선(잠금·무게) | — | P16, P23, P53, P57, P62 (+ P49 생각 단독) |
| 화면 밖 화자 말풍선 | 6 | P09(가죽상), P16·P43(손만 보이는 휴고), P22·P31(손만 보이는 페트라), P62(위 가장자리 밖 휴고) |
| 침묵 3연타 | **3회** | ① P17–P19 (M→L→XL) · ② P45–P47 (**L→XL→L**) · ③ P54–P56 (M→XL→L) · 안에 효과음 0 |
| 큰 `gap_after` | **5** | P02 **320** · P18 **360** · P45 **400** · P53 **440** · P61 **600** (나머지 전부 ≤ 200) |
| 그 밖의 gap | — | 200: P50 · 160: P05, P12, P28, P38 · 120: P20 · 80: P49 · 60: P16, P23, P26, P36, P43 · 24: P56 · 0: 나머지 (**P44 → P45 = 0 간격 금지**, P58 → P59 = 0) |
| 인물 3명 이상 컷 | 3 | P06 (4–5명), P14 (7명), P19 (얼굴 + 하인 5 + 손). 나머지는 1–2명(+손) |
| 매치 컷 짝 | 8 | P45→P49 ★, P03→P17, P05→P47, P15→P54, P40→P46, P34→P46, P18→P61, P14→P19 |

### 4-2. 손 · 흔적 점검 (요구 b·c·d)

- 휴고의 **왼손 장갑 62/62컷**(맨 왼손 0). 오른손 장갑은 P13–P15만, **P16부터 P62까지 오른손 맨손**, P47–P48은 등 뒤로 감출 뿐 장갑을 끼지 않는다(ruling C). P47은 P05의 메아리.
- 주요 접촉은 전부 **그의 오른손 ↔ 그녀의 오른손**: P17–P19, P30–P31, P33, P35, P45, P49, P57–P59.
- 그녀의 흔적은 **오른손 검지 끝 바닥 하나**, 잿빛 한 값: P34 `MARK_DOT`(작게, 같은 ASH_GREY, 잡아챔은 P33, 점은 손을 뗀 P34) → P35–P45 작게·강조 없이 → P46 `MARK_FRESH` → P49 같은 길이 → P55–P62 보임.
- **검지 끝 하나만 그의 맨살에 닿는 컷**: P33(잡아챔), P45(차가운 쥠). 그 결과를 보이는 컷: P34(점), P46(흔적).
- 손 전체가 닿고 무사한 컷: P17–P19, P30, P35, P49, P57–P58. 이 컷들은 바로 앞 컷보다 따뜻해지지 않는다.

### 4-3. 18+ 점검 (요구 g)

키스 0 · 노출 0 · 열린 깃 0 · 벗는 것은 장갑뿐(P15 그, P54 그녀) · 벽 몰아붙이기 0 · 그가 세게 쥐는 손목 0(P58 엄지는 **가볍게**) · 신체 부위에 머무는 크롭 0(P55 "가슴과 턱선"은 옷 입은 상체 구도) · 두 사람 모두 분명한 성인(25 / 약 30) · 관능은 시선(P18, P19, P58, P61), 거리(한 뼘 → 한 마디 → 숨 하나 → 0), 손(P35, P53–P58)으로만 · 모든 마지막 거리는 그녀가 닫는다(P17, P49, P57).

---

## 5. Flow 리스크 목록 (가장 어려운 컷과, 결과 이미지에서 사용자가 확인할 것)

| # | 패널 | 왜 어려운가 | 결과 이미지에서 확인할 것 (하나라도 아니면 다시 생성) |
|---|---|---|---|
| 1 | **P45 ↔ P49** (쌍둥이) | 두 번 따로 만들면 카메라·크롭이 달라진다. 손가락 배치가 복잡하다 | **두 장을 나란히 놓고:** 같은 비율·같은 크롭·같은 손 위치(맥박 자리가 같은 점)·같은 청회색. **P45:** 그의 피부에 닿은 것은 그녀 **오른손 검지 끝 하나**, 엄지·다른 손가락은 흰 커프 위 · 실이 그의 손목에 감겨 팽팽 · 얼굴 닫힘, 홍조 없음, 눈은 매듭. **P49:** 같은 검지 끝이 **같은 자리** · 나머지 네 손가락이 그의 **맨살**에 닿고 **깨끗** · 실은 그녀 왼손목에서 아래로 늘어짐 · 얼굴 열림(그를 올려다봄, 입술 살짝, 귀 끝 홍조) · 검지 흔적 길이가 P46 끝과 같음 · 따뜻한 빛·꽃·빛남 없음 · 위 오른쪽이 비어 있음 |
| 2 | **P46** | 흔적이 글자·문신처럼 그려지기 쉽고, 좌우 반전에 약하다 | 흔적이 **오른손 검지** 끝 바닥 하나(실이 감긴 손이 아닌 손) · 무광 잿빛 + 머리카락 같은 검은 실핏줄이 **첫 마디 주름까지만** · 뿌리처럼 불규칙(대칭·문자·룬 아님) · 피·상처·빛 없음 · 프레임 가장자리 실이 **왼손목** · 다른 손가락 깨끗 |
| 3 | **P19** | 세로 3층(얼굴/하인/손) + 미세한 표정 | 얼굴에 **귀 끝 홍조 + 오래 머무는 눈 + 살짝 벌어진 입술**(셋 중 홍조·머무는 눈이 없으면 무조건 다시) · 귀가 보임 · 하인들이 작게, 맨 끝 하녀의 잿빛 손끝이 **보이되 작게** · 아래 끝에 맞잡은 두 **오른손** · 시든 것 없음 · P17–P18보다 따뜻하지 않음 |
| 4 | **P17 · P18** | 악수하는 두 손의 손가락 수·소유가 섞이기 쉽다 / 미세한 시선 | **P17:** 그녀의 오른손(왼쪽, 걷은 흙갈색 소매) ↔ 그의 오른손(오른쪽, 흰 커프·핏줄) · 손가락 수 정상 · 그의 장갑 낀 왼손은 악수에 없음 · 잿빛·빛 없음 · 손목 앵글이 P03과 비슷. **P18:** 눈이 카메라 쪽으로 들림, 크라바트 위 삼킴, 머리 한 가닥이 **그의 오른쪽 눈썹 위(화면 왼쪽)** |
| 5 | **P34** | 작은 점이 사라지거나 옅어지고, 손 방향이 바뀐다 | 점이 **오른손 검지 끝 바닥**에(손톱 쪽 아님), 손끝 바닥의 약 1/3 크기 · 색이 P04 하녀 손끝과 **같은 잿빛**(옅은 회색·은색·흰색 아님, 검은 테두리 없음) · 손끝 바닥이 카메라 쪽, 그의 쪽이 아님 · 그의 눈은 자기 손목의 매듭 · 그녀 얼굴 닫힘 · 실은 왼손목 |
| 6 | **P54 · P55 · P56** | 장갑 벗는 손 + 기다리는 손 / 세로 두 상체 + 손 사이 빈틈 / 손끝 사이 '불꽃' 클리셰 | **P54:** 그녀의 **장갑 낀 왼손**이 **오른손** 장갑을 벗김(P15의 좌우 거울) · 그의 맨손가락은 한 뼘 앞, 손바닥 위 · 닿지 않음. **P55:** 맨 오른손 검지에 흔적이 보임 · 왼손은 아직 장갑 · 손가락 사이 한 마디 빈틈 · 옷 입은 상체, 몸 강조 없음. **P56:** 손끝 사이 빈 공기만, **빛·불꽃·반짝임 없음**, 닿지 않음 |
| 7 | **P58** | 가까운 두 옆얼굴이 키스처럼 보이기 쉽다 | 얼굴 사이 숨 하나의 **분명한 빈틈** · 입술 닿음 0 · 그의 눈은 아래(손 쪽)로 · 그의 엄지가 그녀 손목에 **가볍게**(쥐지 않음) · 그녀 왼손 장갑 · 다섯 손가락 깨끗, 검지 흔적 그대로 · 빛 번짐·암전 없음 |
| 8 | **P40** | 어느 장갑의 어느 손가락이 갈라졌는지 틀리기 쉽고, 진홍이 피·글자처럼 보일 수 있다 | 손바닥이 위인 한 켤레 중 **오른쪽 장갑(엄지가 바깥 오른쪽)의 검지** 손끝이 갈라짐 · 모든 손끝 검게 탐 · 진홍은 **이어진 띠**(따로 떨어진 X자·글자·피 아님) · 장갑은 크림색 · 유리에 비친 얼굴은 아주 옅게 · 서리·얼음빛 없음 · 글자 없음 |
| 9 | **P14** | 인물 7명 + 깊은 원근 | 휴고가 작아도 **양손 모두 장갑**인 실루엣 · 하인들이 흰 대리석 띠 위(넘지 않음), 집사가 통로 쪽 맨 앞 · 페트라는 아직 재의 길 밖 · 소실점(휴고) 위에 말풍선 자리 없음 · 글자 없음 |
| 10 | **P02 · P62** | 시듦의 단계 표현 / 미세한 들킨 표정 + 위·아래 빈 면 | **P02:** 줄기부터 먹빛 → 꽃잎 오그라듦 → 재가 길과 같은 색 · 연기·불꽃·빛 없음 · 핏줄은 커프 아래에서 사라짐 · 손이 떨지 않음. **P62:** 귀 끝 홍조, 입술은 벌어졌다 다무는 중(말하지 않음), 웃음 없음 · 귀가 보임 · 위 25% 어둠이 비어 있음 · 눈·입이 화면 안 · 성인 얼굴 |

- 모든 이미지 공통 확인: **글자·숫자·말풍선 0** · 좌우 표지 셋(그녀 실 = 왼손목, 그의 장갑 = 왼손, 그의 머리 한 가닥 = 그의 오른쪽 눈썹 위) · 장갑 상태가 §2-3 표와 같음 · 진홍이 P09·P29·P40 밖에 없음 · 휴고 피부가 회색이 아님 · 각 대사 패널의 조용한 면에 얼굴·손·핵심 소품이 없음.
- 3번 다시 그려도 안 되면 그 컷은 ACCEPT-FLAG로 두고 넘어간다(webtoon-flow-handoff 3회 상한, panel-validator 기록). 단 **P45, P46, P49, P19, P34**는 반전·단서 컷이라 ACCEPT-FLAG 전에 리더에게 알린다.

---

## 6. 결정 · 플래그 (리더 확인용)

| # | 내용 | 처리 |
|---|---|---|
| 1 | **P45 ↔ P49 크기 통일** (비트시트 P45 = M, P49 = L) | **둘 다 L · 3:4** (3:4가 없으면 둘 다 1:1). `TWIN_CAM`(§2-4)을 두 컷에 글자 그대로. 침묵 3연타 ② 모양이 M→XL→L에서 **L→XL→L**로 바뀐다(정점 P46 XL은 그대로). 패널 수·순서 불변 |
| 2 | **골무** (요구 e, style-bible §13-4 · character-sheets §6-2 확인 요청) | **확정:** P09·P28만 목에서 벗겨 오른손 중지에, 끈이 손에서 늘어진다. 나머지 컷은 쇄골 위. **추가:** 작업대 두루마리에 골무를 그리지 않는다(한 화면에 골무 둘 → F19 흐려짐). style-bible §6-3 목록과 beatsheet P29의 "놋쇠 골무"는 prompt-smith가 빼 주기 바람 |
| 3 | **세 손가락 손버릇의 손** | P09·P36·P37 모두 **오른손** 엄지·검지·중지 집기로 통일(P09는 그 중지에 골무). 같은 모양이 세 번 반복돼야 F17이 읽힌다 |
| 4 | **P46 손끝의 위치** | 흔적이 손끝 바닥에 있으므로, 그의 손목에서 **막 몇 밀리 떨어진** 순간으로 그렸다(눌린 채로는 바닥이 안 보인다). P40의 손바닥이 위인 장갑과 같은 각도 |
| 5 | **P47–P49의 매듭 실** | P45 팽팽(그의 손목에 감김) → P47 둘 사이에 느슨히 처짐(우선순위 낮음) → P49 그의 손목에서 풀려 **그녀 왼손목에서 아래로 늘어짐**. "실을 놓았다 = 일을 놓았다"는 P45 ↔ P49 대비로 읽힌다 |
| 6 | **P49 그의 팔** | "등 뒤에서 끌려 나온" 팔꿈치 각도는 선택으로 두었다(P47–P48이 이미 감춘 손을 보여 줌). Flow가 그 각도를 넣다가 카메라가 흔들리면 **P45와 같은 팔 위치를 우선** |
| 7 | **P29 한 순간** | 비트시트의 "뻗다가 멈추고 → 내려놓는다" 두 동작 중 **장미 한 마디 앞에서 멈춘 손** 하나만 그린다(Flow는 한 장에 한 순간) |
| 8 | **P33 · P52 얼굴 생략** | P33은 그녀 얼굴을 화면 밖에 두고 일의 손 문법을 손이 싣는다(닫힌 얼굴은 바로 P34에서 크게). P52는 휴고의 얼굴을 빼고 어깨만(그의 시선은 P53이 싣는다). 둘 다 한 컷의 인물·요소 수를 줄이려는 Flow 실무 판단 |
| 9 | **P58 그녀의 시선** | 비트시트는 그의 시선만 정했다. 그녀의 시선은 **맞잡은 손에 머묾**으로 정했다(원하는 손 문법 "그의 손에 머무는 시선", 눈이 마주치는 두 번째 사건은 P61로 아낌) |
| 10 | **P62 엔딩 캡션 자리** | 맞잡은 손(비트시트 '선택')을 넣지 않고 맨 아래 깃 그늘 띠를 캡션 자리로 비웠다. 캡션 위치는 letterer가 정한다 |
| 11 | **gap 단일값** | P56 = 24(허용 0–24), P58 = 0(허용 0–40). 최종값은 letterer |
| 12 | **P49 배경의 유리 종** | 비트시트가 허용한 "P45 후경의 흐린 종"을 P49 복제에도 같은 자리에 둔다(쌍둥이 조건이 우선). 작고 초점 밖, 진홍이 읽히지 않게. P48·P50에는 유리 종을 넣지 않는다 |
| 13 | **어깨 너머 역샷의 어깨** | P19 = 그의 **왼쪽** 어깨, P48 = 그녀의 **오른쪽** 어깨. 둘 다 무대 축(페트라 왼쪽 · 휴고 오른쪽)을 넘지 않는 쪽 |
| 14 | 다음 단계 | letterer: 이 문서의 `bubble` 제안으로 `art_space`·`place`를 확정(P49 생각 모양, 화면 밖 화자 꼬리, 긴 크메르어 줄의 넓은 면). prompt-smith: `TWIN_CAM`·매치 컷 첨부 순서·장면 앵커·§2-6 공통 금지·골무 처리(플래그 2) 반영 |
