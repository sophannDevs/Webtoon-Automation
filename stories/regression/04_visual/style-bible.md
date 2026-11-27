# Style Bible — 「두 번째 변론」 (story-9 `regression`) · ការពារក្តីលើកទីពីរ

- Panel aspect (화면비): **9:16 portrait for every EP01 panel** (Flow "9:16"). Character reference sheets: **16:9**.
- 작성: art-director · 2026-11-26 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 입력: `00_input/brief.md`(LOCKED 1–9, 리더 판정 A–AF, 특히 C·D·E·Q·S·Z·AB), `02_story/concept.md` §11, `02_story/world.md` §6–§10·§14,
  `02_story/characters.md` §11–§12, `02_story/twist-plan.md` §0·§1(D1-a), `03_episode/ep01_beatsheet.md`.
  trend-brief에는 화풍 지시가 없다(§0: 작화는 하네스 설계 그대로) → 장르 관례(현대 법정·복수 스릴러, 저채도·강명암)로 정했다.
- 짝 문서: `04_visual/character-sheets.md`(인물 외형 문장·의상·레퍼런스 카드 사양).
- 이 문서는 비주얼팀의 단일 기준(SSOT)이다. panel-director · letterer · prompt-smith · ref-sheet-artist · panel-validator가 모두 따른다.
- **이 작품 전용.** 다른 이야기(`rule4`, `poison`, `umbrella`, `gloves`, `revenge`, `school`, `story-7`, `story-8`)의 토큰·장소·소품 문장을 재사용하지 않는다.
- **Khmer edition:** 이미지에는 **글자가 전혀 없다**(말풍선·글자·숫자·가짜 글씨·로고 0). 말풍선과 크메르어는 뷰어(`km_tool.py build`)가 그린다. §8은 그 빈자리 규약이다.
- **Flow 규칙:** 프롬프트는 자기완결형. 이 문서의 토큰 이름(`LOC_*`, `PROP_*`, `L-*`, `REG-*`, `FRAME-*`)은 **프롬프트 안에 쓰지 않는다** — 아래 영문 문장을 그대로 풀어 붙인다.

---

## 1. 작화 스타일 (Art style)

현대 한국 도시의 법정·복수 스릴러. 판타지 장치는 "한 번의 회귀"뿐이고, 그것도 **빛과 몸의 변화로만** 보인다(초자연 연출 0, world V7).
차갑고 절제된 톤(긴장 8 : 온기 2). 얼굴보다 **손과 물건이 먼저 말한다** — 카드, 만년필, 커프스, 반지, 리본핀.

- **선화:** 깨끗하고 가는 디지털 선(얇은 균일선, 윤곽만 약간 굵게). 거친 펜·스케치 질감 금지. 머리카락은 덩어리 + 몇 가닥.
- **채색:** 반사실(semi-realistic) 절제된 셀 셰이딩 — 2단 명암 + 부드러운 그라데이션. 배경은 회화적 디지털 페인팅(사진처럼 보이지 않게, 원근·건축 구조는 정확).
- **비율:** 사실적 인체 비율(과장된 8등신·큰 눈·뾰족 턱 금지). 나이·체형 차이가 실루엣으로 읽혀야 한다(character-sheets §0 키 순서).
- **손·물건 디테일:** 손 클로즈업이 많은 작품이다. 손가락 5개, 손톱 모양, 마디, 핏줄·검버섯·흉터·화상 자국을 정확히. 물건은 재질(옻칠 광택, 오닉스의 검은 반사, 무광 은, 벨벳 결, 골판지 단면, 서리)을 살린다.
- **연출 무드:** 영화적 로우키 조명(주광원 하나 + 깊은 그림자), 정적인 구도, 긴 정지. 과장 만화 기호(속도선·땀방울·집중선·이모티콘·하트) 금지. 빛 번짐·렌즈 플레어·마법 광채·이중 노출 금지.
- **참조 무드(언어로만):** contemporary Korean legal-thriller webtoon, cold restrained cinematic realism, hands and objects in close-up.

### 1-1. GLOBAL STYLE TOKEN (모든 패널 프롬프트 맨 앞에 그대로)

```
Contemporary Korean legal-thriller webtoon panel, semi-realistic digital illustration, clean thin line art, restrained cel shading with soft gradients, realistic human proportions, painterly detailed background with accurate architectural perspective, cinematic low-key lighting from a single main source with deep shadows, cool muted desaturated palette, quiet tense atmosphere, precise detailed hands and objects, vertical 9:16 portrait composition.
```

### 1-2. 프롬프트 조립 순서 (prompt-smith)

`[GLOBAL STYLE TOKEN]` + `[패널 스타일 문장(§4, 현재 레지스터면 생략)]` + `[LOC 문장(§5) + 그 씬의 조명 문장(§3)]` + `[등장인물 외형 문장 + 그 패널 의상(character-sheets)]` + `[PROP 문장(§6, 필요한 것만)]` + `[패널 고유 묘사: 샷·구도·연기·감정 (+ 고정 구도 문장 §7)]` + `[art_space 빈자리 문장(§8)]` + `[blank 긍정 문장(§9-1, 해당 물건이 있으면)]` + `[Avoid 줄(§9-2)]`
- 레퍼런스 이미지는 `attach:`로 붙이고 프롬프트에는 "matching the attached reference image of <Name> (…key features…)"로 쓴다. 외형 문장도 함께 넣는다(Flow가 첨부를 덜 따를 때를 대비).
- 패널 프롬프트는 대략 한 덩어리 문단, **≤250 단어**. 사용자가 60장을 손으로 붙여 넣는다.
- 손만 나오는 패널은 외형 문장 전체 대신 character-sheets §3 HAND ID 문장만 써도 된다(얼굴 묘사가 섞이면 Flow가 얼굴을 그리려 한다).

---

## 2. 색감 / 팔레트 (Colour)

### 2-1. 마스터 팔레트 (world §14-1 확정)

| 역할 | 이름 | HEX |
|---|---|---|
| 옥상 밤 | rooftop night navy | `#14213D` |
| 서리 | frost blue | `#9FB8D0` |
| 문 전구 | cold bulb white | `#E6F0F5` |
| 도시 호박빛 | distant city amber | `#C98A4B` |
| **회귀 금빛** | regression gold | `#E8A93C` |
| 여름 저녁 | summer evening gold | `#F3C677` |
| 접견 녹색 벽 | visiting-room green wall | `#7E8F6E` |
| 형광 녹백 | green-white fluorescent | `#DDE8D8` |
| 사무 회색 | office grey | `#8A9099` |
| 유리 청록 | glass blue-green | `#A9C4C8` |
| 고문 방 문 | walnut door | `#5A3B26` |
| 분식집 노랑 | snack-shop yellow | `#F4C542` |
| 떡볶이 붉은색 | tteokbokki red | `#C7372F` |
| 가로등 흰빛 | streetlamp white | `#DCE6EA` |
| 반사경 주황 | mirror orange | `#D9762B` |
| 느티 초록 | zelkova green (environment only) | `#4F7A3A` |
| 기록 컷 녹회 | record green-grey | `#8C9A88` |
| 기억 청회 | memory blue-grey | `#6F86A0` |
| **악센트 1 — 반지 초록** | ring stone green | `#2E5E4E` |
| **악센트 2 — 리본 검정** | mourning-ribbon black | `#151515` |

### 2-2. 채도 규칙 [고정]
- **반지의 초록 돌과 리본핀의 검정(밝은 앞치마 위)이 각자 장면에서 가장 눈에 띄는 점이다.** 나머지(옷·벽·소품·하늘)는 채도를 눌러 둔다.
- **어떤 인물의 옷·소품에도 초록 계열을 쓰지 않는다**(characters §11-0). 느티나무 초록은 환경에만, 늘 반지보다 탁하고 어둡게. 반지가 나오는 컷(P50–51)에는 다른 초록이 없다.
- **회귀 금빛(`#E8A93C`)은 빛에만 쓴다** — EP01에서는 회귀 구간(P11–21)과 구치소 밖(P25–26)뿐. 옷·소품에 금빛 금지(만년필의 금색 클립·고문의 금테 안경은 작은 금속 디테일로 허용).
- 떡볶이 붉은색은 분식집 안에서만. 기 대표의 버건디 넥타이는 탁하게(빨강으로 읽히면 안 된다).

### 2-3. 두 계절의 문법 (world §8-1)

| | 첫 삶 (7년 뒤 겨울, 콜드 오픈) | 두 번째 삶 (7년 전 여름) |
|---|---|---|
| 핵심 빛 | 푸른 남색 밤, 차가운 흰 전구, 서리, 입김 | 금빛 저녁 사선 → 습한 밤, 흰 가로등, 노란 분식집 |
| 진우의 몸 | 35세, 다크서클·흰머리 몇 가닥·수염 자국, 은색 시계, 마른 핏줄 | 28세, 더 마른 뺨, 매끈한 손등, 시계 없음, 어깨 남는 새 남색 정장 |
| 느티나무 | 맨가지 | 짙은 초록 |
| 만년필 | 캡 끝 찍힘 | 흠 없음 → (가짜 제작 뒤) 펜촉 살짝 휨 |

---

## 3. 분위기 · 조명 (시간대별 빛 = 이야기 시계)

EP01의 시간은 **빛·옷·계절**로 읽힌다(시계·달력·화면 숫자 0, `env`는 P11 「7년 전, 여름」 하나). 아래 문장을 그 씬의 LOC 문장 뒤에 붙인다.
**같은 scene_id 안에서는 같은 조명 문장**을 쓴다(예외는 표에 적힌 변주만).

| 코드 | EP01 패널 | 영문 조명 문장 (프롬프트에 그대로) |
|---|---|---|
| L-ROOF-WINTER | P01–P09 | `deep navy winter night, a single caged cold-white bulb above the stairwell door, white frost glittering on the steel railing, faint amber glow of the city far below, visible breath vapour, dry cold air, no snow falling` |
| L-ALLEY-WINTER-DOWN | P10 | `winter night seen straight down from a great height, dark low rooftops and bare-branched trees, one single empty circle of cold white streetlamp light on the alley, the lower part of the image fading smoothly into pure white` |
| L-VISIT-GOLD | P11–P21 | `summer early evening, a slanting beam of warm golden sunset light through the small high barred window cuts diagonally across the glass partition, dust motes floating in the gold, the rest of the corridor lit by pale green-white fluorescent tubes, one tube faintly flickering` (P11만 `+ the image emerging from pure white into gold at the top`) |
| L-VISIT-FLUO | P22–P23 | `pale green-white fluorescent light, the golden sunset beam now thin and low on the far wall` (같은 씬의 해가 기우는 변주) |
| L-OUT-GOLD | P25–P26 | `summer early evening outdoors, warm low golden sunlight, long soft shadows on the concrete, humid air` |
| L-TOWER-NIGHT | P27 | `humid summer night, the lobby beyond the glass is dark and unlit, the only light is the beam of a handheld flashlight plus a faint bluish street glow` |
| L-BOOTH-NIGHT | P28 | `humid summer night, warm yellow light spilling from the small security-booth window, a small electric fan turning inside, cold white streetlamp glow further down the slope` |
| L-FLOOR-NIGHT | P29–P30 | `night, most of the office lights are off, only the partner's glass-walled office is lit and one desk lamp glows, dim reflections of people in the dark glass, blue darkness over the empty desks` |
| L-ROOM-LAMP | P31–P34 | `late night, a single warm desk lamp is the only light, the electric fan beside the desk, dark corners, the lit windows of the building across the street` |
| L-FLOOR-MORNING | P35–P40 | `morning, cool blue-white fluorescent light mixed with clean white daylight from the large north windows, the dark green crown of the zelkova tree visible outside` |
| L-MEETING-AFTERNOON | P41–P46, P53 | `afternoon, long bands of white window light lying across the dark table, faces half backlit, soft grey shadows` (P46: `+ the light reaches the partner's face a moment late, his face still half in shadow`) |
| L-ROOM-LAPTOP | P47, P54 | `night, the room is dark, the only light is the cold bluish blank glow of an open laptop screen falling on his face, the screen itself turned away from the viewer, the fan beside the desk` |
| L-RECORD | P48–P51 | §4 REG-RECORD 문장이 조명까지 포함한다(헤드라이트·가로등만) |
| L-MEM-VISIT | P19 | §4 REG-MEMORY + `flat fluorescent corridor light` |
| L-MEM-OFFICE | P24 | §4 REG-MEMORY + `soft diffuse afternoon light, a blurred plain grey office in the background, gentle and warm in feeling, no hard shadows` (재독 비트 — 서늘한 조명·그림자 금지) |
| L-MEM-ANCHOR | P52 | §4 REG-MEMORY + `night, a cold white streetlamp from the upper left, faint red and blue police-light reflections on the walls, no police car visible` |
| L-ALLEY-SUMMER-NIGHT | P55 | `humid summer night, one circle of cold white streetlamp light on the empty bend, warm yellow light spreading up the slope from the snack shop at the bottom` |
| L-BUNSIK | P56–P58, P60 | `warm steamy yellow light, red reflections from the tteokbokki pan, steam drifting through the air, the dark night outside the steamed-up glass door` (P60: `+ warm yellow light on one side of his face, the background lost in soft steam`) |
| L-MEM-FUNERAL | P59 | §4 REG-MEMORY + `dim soft indoor light` |

- 조명 성향: 주광원 하나 + 깊은 그림자. 림라이트는 밤 장면에서 약하게만. 하이키 금지(예외: P11 흰 화면→금빛 전환).
- 감정 극단 클로즈업(P12, P54, P60)은 배경을 더 어둡고 단순하게 눌러 눈·손만 남긴다.
- **재독 비트는 서늘하게 그리지 않는다**(tension-curve): P24 고문의 손, P39 고문의 등장, P40 고문의 손, P27 봉구의 문장. 평범하고 다정한 빛.

---

## 4. 패널 스타일 4종 (레지스터) [고정 — world §8-2, 리더 판정 C]

| 코드 | 언제 | EP01 패널 | 말풍선(뷰어) |
|---|---|---|---|
| **REG-PRESENT** 현재 | 두 번째 삶 | P11–P18, P20–P23, P25–P47, P53–P58, P60 | dialogue · thought · shout |
| **REG-WINTER** 첫 삶 겨울 | 콜드 오픈 | P01–P10 | dialogue (P3·P6은 화면 밖 왼쪽) |
| **REG-MEMORY** 첫 삶 기억 컷 | 진우의 플래시 | P19, P24, P52, P59 | `memory` (뷰어가 파란 흐린 테두리) |
| **REG-RECORD** 기록 컷 | 블랙박스 영상 속 장면 | P48, P49, P50, P51 | 없음 (`silent: true`, 음성 없음) |

### REG-PRESENT
- 추가 문장 없음. GLOBAL + LOC + §3 조명 문장 그대로. 테두리 없음(이미지 가장자리까지 그림).

### REG-WINTER
- 추가 문장(조명 문장 앞): `a cold winter night scene in a blue-navy palette, frost and visible breath, everything tinted cold blue except the distant amber city lights`
- 표준 작화와 같은 선·채색. 흐림·탈색 없음(기억 컷과 구별: 이건 "지금 일어나는 일"이다).

### REG-MEMORY
```
rendered as a faded memory: the whole image desaturated into cold blue-grey tones, lower contrast, slightly soft focus, the edges softly blurred and fading out toward all four borders, quiet and still.
```
- 테두리 선 없음(흐린 가장자리만). 금빛·따뜻한 색 0. 인물 외형은 그대로(같은 얼굴·같은 옷).
- P24는 "다정한 선물" 기억이다 — 색은 청회색이어도 **부드러운 빛, 굳은 그림자 없음**(L-MEM-OFFICE).
- 기억 컷 안에도 글자 0(장례식 꽃·천에 글씨·리본 띠 문구 0).

### REG-RECORD — 블랙박스 영상 속 장면 [리더 판정 C, 이 작품의 고유 문법]

화면·모니터·노트북으로 **그리지 않는다.** 영상 속 장면 자체를 이 스타일로 그린다. 진우가 노트북으로 본다는 것은 P47·P54(노트북 빈 빛)가 맡는다.

```
the entire scene is shown as old dashcam footage: washed-out faded green-grey colours, crushed dark shadows, harsh light only from headlights and a streetlamp, strong wide-angle barrel distortion that bends straight lines near the edges, fine faint horizontal scan lines and light grain over the whole image, slight motion blur; the image is framed by a thin double black border line with softly rounded corners set just inside the edges of the picture, with a narrow flat black margin outside the border.
```
- **오버레이 0 [고정]:** 타임스탬프·날짜·REC 점·배터리·아이콘·프레임 카운터·제조사 로고·GPS·속도 표시 없음. 번호판은 무지. 프롬프트에 이 문장을 Avoid 줄 앞에 넣는다:
  `The footage has no on-screen overlay of any kind: no timestamp, no date, no recording dot, no icons, no numbers; any licence plate is blank.`
- **색 예외:** 반지의 초록 돌(`#2E5E4E`)만 채도를 살린다(P50–51). 그 밖의 색은 전부 녹회로 바랜다.
- **두 채널:**
  - **전방(P48–49):** `the view through the windscreen from the top centre of the car, the dark edge of the bonnet at the bottom of the frame` — 운전석 시점 광각, 수평이 살짝 기운다(P49는 더 기움).
  - **실내(P50–51):** `the cabin view from a small camera at the top of the windscreen tilted downward: the steering wheel, the driver's right hand and forearm, the gear lever area, the dark passenger side at the right edge, and through the rear window at the top of the frame the slope behind` — 얼굴·몸통 0, 조수석은 어둠.
- 테두리가 이 스타일의 가장 빠른 식별 표지다. Flow가 이중 테두리를 못 그리면 **얇은 검은 둥근 테두리 하나**까지 허용(플래그 F4).
- 15+: 충격 순간·노인의 몸·부상 0. 노인은 등만, 충격 직전에서 끊는다.

---

## 5. 장소 고정 토큰 (LOC_*) — 7곳 + 차량 세트 1 [고정, 리더 판정 J·U·AB]

각 LOC는 **자기완결 영문 문장**이다. prompt-smith는 이 문장 + §3 조명 문장을 그 씬의 모든 패널에 그대로 붙인다. 문장 속 고정 요소는 매번 같은 자리에 있다.
타이트 숏에서는 문장 전체 대신 "변주" 문장을 쓴다(아래). 새 장소는 리더 승인 없이 만들지 않는다(예비: LOC_COURT·LOC_ADVISOR_ROOM·LOC_FUNERAL — EP01 0).

### LOC_ROOFTOP — 유리 타워 옥상 (P01–P09)
```
The flat rooftop of a tall glass office tower at night: grey waterproof-painted concrete floor with a few drain grates, a waist-high steel railing on a low concrete parapet along the south edge, a grey concrete stairwell box on the north side with a single grey steel door and a wire-caged bulb above it, a cluster of air-conditioning units and a cooling tower with a steel ladder on the east side, empty open space to the west; beyond the railing, far below, a narrow sloping alley of low old rooftops with one white streetlamp, and beyond that a river and blurred city lights.
```
- **평면도 [고정, EP03·EP10·EP22 재생용]:** 직사각형 옥상. 북쪽 가운데 = 계단실(철문은 남쪽을 향해 바깥으로 열림). 동쪽 = 실외기·냉각탑(높이 2.5m). 남쪽 = 난간. 문에서 난간까지 약 12m. 서쪽 = 빈 공간.
- **각도 A (EP01 유일한 옥상 각도):** `camera at the east end of the south railing looking west along it; the railing runs from the lower right toward the centre-left of the frame; far away at the upper right, the grey stairwell door stands half open; the dark edge of the air-conditioning units' shadow fills the lower right foreground.` 각도 B(EP03)·C(EP10)는 EP01에서 쓰지 않는다.
- **P01 변주 (커튼월 바깥):** `just outside the south face of the tower, looking straight down along a vertical wall of dark glass curtain-wall panels with a faint frost haze, the far city lights deep below` — 옥상 문장 대신 이것.
- **P05·P09 (얼굴만):** 배경 = `only the dark navy night sky and breath vapour behind his face, no railing, no building, no direction cue` (위치 정보 0, TF-1).

### LOC_FIRM_FLOOR — 담하 사무 층 (P24 흐린 배경, P29–P30, P35–P40)
```
A modern law-firm office floor: dark grey carpet, white ceiling panel lights and fluorescent strips, rows of associate desks with low grey partitions in the middle of the floor, a partner's glass-walled office beside the windows with its blinds half lowered, a low black leather sofa and an empty perfectly tidy desk inside it, a large north window wall overlooking low old rooftops that end in the dark green crown of a big zelkova tree, at the far end of the corridor one single opaque dark walnut wooden door with a brass handle, a bare elevator-hall wall, a grey office-supply cabinet; every surface blank, no signs, no logos, no nameplates.
```
- **고정 자리:** 진우 자리 = 창에서 두 번째 줄 끝, 책상 위 **회색 책상 전화기**(PROP_DESK_PHONE, 배경으로만 P35. P29에는 넣지 않는다 — W12 보호).
- 고문 방 나무문 = 층에서 유일하게 불투명한 문. 문 위·옆 명패 0.
- 변주: P29 `in front of the grey office-supply cabinet, the lit glass office far behind` / P30 `at the doorway of the partner's glass office` / P37–38 `inside the partner's glass office, blinds half lowered` / P39–40 `the corridor beside the rows of desks, the walnut door at the far end`.
- P24(기억 컷): `a blurred plain grey office background` 만 — 구체 요소 그리지 않음.

### LOC_FIRM_MEETING — 담하 회의실 (P41–P46, P53)
```
A law-firm meeting room: a long dark solid-wood table for ten, black leather chairs, one wall of glass toward the corridor with a frosted opaque band at eye level, the opposite wall a large window over the city, glasses of water on the table, a few sheets of paper lying face down showing only their blank backs, no screens, no logos.
```
- **고정 좌석 [고정]:** 창 쪽 상석 = 기 대표 / 그 오른쪽 = 민재 / 기 대표의 대각 맞은편 = 태호 / 문 가까운 끝자리 = 진우(빈 수첩 + 만년필). 고문 없음.
- 9:16 와이드(P41): `high-angle view down the length of the table from the door end, the window at the top of the frame` — 세로 안에 테이블 길이를 세운다.
- 민재 휴대폰은 늘 엎어 둠(`a phone lying face down`).

### LOC_DETENTION_VISIT — 구치소 접견 복도 (P11–P23)
```
A detention-centre visiting corridor: a long corridor lined with visiting booths, thick clear glass partitions each with a small steel shelf underneath, round stools bolted to the floor, a corded handset-style intercom phone mounted beside the glass on each side, walls painted dull dark green on the lower half and faded cream on the upper half, a row of ceiling fluorescent tubes, a small high barred window with wire mesh at the far end of the corridor; behind the glass, the inmates' side with a grey steel door; no signs, no numbers, no posters.
```
- **시그니처 구도:** 유리에 비친 진우 얼굴과 유리 너머 덕배 얼굴의 반쯤 겹침(P18, P21) — `his reflection on the glass half-overlapping the face of the man on the other side`.
- 금빛 사선은 이 장소에서 EP01 회귀 구간에만(L-VISIT-GOLD).
- 교도관: 짙은 남색 제복, 휘장·명찰 무지, 손·소매·뒷모습만.
- **승인 변주 EXT_GATE — 구치소 출구 바깥 타이트 (P25–P26, 리더 판정 AB, 레퍼런스 세트 없음):**
  `just outside the detention-centre exit: a plain grey concrete wall and the edge of a heavy grey steel gate, nothing else in the background, no signs, no plates` — 건물 전경·간판·도로 0. 배경 최소.

### LOC_HERO_ROOM — 진우의 원룸 (P31–P34, P47, P54)
```
A small, clean, nearly empty studio apartment in an old multi-family building: a small plywood desk by the window with a laptop (plain lid, no logo) and a desk lamp, a new navy suit hanging alone on the white wall, an electric fan standing on the floor, a single bed with a grey blanket, a desk drawer, through the window the lit windows of the building across the street; bare white walls with nothing on them.
```
- 노트북 화면은 **보이지 않게**(뒷면·측면) 또는 빈 빛. P31–34는 닫혀 있어도 된다.

### LOC_BACK_ALLEY — 느티재 비탈 골목 (P10, P28, P48–P49 창밖, P52, P55)
```
A single narrow sloping alley, barely one car wide, running downhill from the back of a glass office tower toward a market street: low walls and low-rise red-brick and grey-cement houses on both sides, tangled overhead power lines, potted plants; at the top, the cold grey concrete back of the tower with a small box-shaped security booth with one window and a basement car-park exit ramp with a grey roller shutter and a yellow-and-black striped barrier arm; at the middle bend, a grey concrete utility pole with a curved-arm cold white streetlamp under a dented metal shade and a round convex traffic mirror with an orange rim; a crack in the wall below the bend; at the bottom, the corner of the market street with a huge zelkova tree and the warm light of a small snack shop; no signs, no text anywhere.
```
- 표지(다른 이야기와 구별): **차가운 흰 가로등 하나 + 주황 테 볼록 반사경 + 위쪽의 유리 타워.** 노란 가로등 줄·계단 금지.
- **변주 BOOTH (P28):** `the small security booth at the top of the slope: through its open window an electric kettle, a plain unlabelled box of instant coffee sticks, a stack of plain paper cups, a small electric fan, an old radio, and a pile of hand-cut brown cardboard cup sleeves on the windowsill; beside it the car-park exit ramp with the grey shutter and the striped barrier arm, and an old small grey compact car parked next to the ramp with a blank licence plate.`
- **변주 WINTER-DOWN (P10):** `the same alley seen straight down from the rooftop high above in winter: low dark rooftops, bare zelkova branches, the white streetlamp at the bend making one empty circle of light.`
- **변주 BEND-NIGHT (P55):** `the middle bend at night seen from behind a walking man, the streetlamp circle empty, the slope dropping toward the zelkova tree and the yellow snack-shop light at the bottom.`
- **앵커 A (P52):** §7 FRAME-ANCHOR-A 문장(고정 구도).
- **승인 변주 TOWER_FRONT_DOOR — 타워 정면 유리문 타이트 (P27, 리더 판정 AB, 레퍼런스 세트 없음):**
  `a tight shot at the front entrance of the same glass office tower at night: a locked glass door with a long vertical steel pull handle, beyond the glass a dark unlit lobby with a bare stone wall, no logo, no signs, no directory board, no door stickers; the beam of a handheld flashlight sweeping in from the side.`
  — 타워 정면 전경·간판·회전문 0. 이 숏은 같은 타워 건물이라서 BACK_ALLEY 계열 토큰 아래 둔다(플래그 F3).

### LOC_BUNSIK — 느티재 분식집 (P56–P58, P60)
```
A tiny Korean snack shop on a market-street corner next to a huge zelkova tree: four small tables with plastic stools, a stainless steel counter, a large flat iron pan of tteokbokki in bubbling red sauce with rising steam near the entrance, a kimbap cutting board with silver foil beside it, a menu board on the wall that is only plain coloured rectangles with no letters or numbers, a steamed-up glass door with the zelkova silhouette outside, a small change dish on the counter, warm ceiling fluorescent light plus an incandescent lamp over the pan.
```
- 이 세계에서 가장 따뜻한 장소. 분식집 이모(배경, 등·옆): `a middle-aged woman seen from behind in a grey T-shirt, a dark brown apron and a beige head scarf`.

### SET_SEDAN_CABIN — 세단 실내 (기록 컷 전용, P48–P51)
```
Inside a large dark gunmetal sedan at night: a steering wheel, a gear lever, a dark dashboard with no numbers or readouts (only faint glow), through the windscreen the sloping alley with the white streetlamp and the orange-rimmed convex mirror.
```
- 항상 REG-RECORD와 함께. 차 외관(VEH_SEDAN)은 EP01에 나오지 않는다.

---

## 6. 고정 소품 토큰 (PROP_*) [고정 — concept §11-1, world §10, characters §11-13 확정판]

모든 소품: **글자·로고·숫자·각인·마크 없음.** 아래 영문 문장을 필요한 패널에 그대로 넣는다. 미세한 차이(긁힘·찍힘·휜 끝)는 **크게 잡은 클로즈업**에서만 기대한다.

### PROP_CARD_REAL — 진짜 메모리카드 (죄의 물건)
- `a tiny dark navy-blue microSD memory card with no label and no printing, its top-right corner chipped off in a small jagged break, one thin white scratch line running across its face`
- 보이는 패널: P16(손바닥, 엄지가 깨진 모서리를 누름), P32(나란히), P47(엄지).
- 크기: 클로즈업에서 카드가 **프레임 폭의 25% 이상**(`an extreme macro close-up so the card is large in the frame`). 긁힘을 읽으려면 크게.

### PROP_CARD_FAKE — 가짜 메모리카드
- `the same tiny dark navy-blue microSD card with the same chipped top-right corner, but its face is clean with no scratch`
- P31(펜촉으로 모서리를 깨는 중 — 깨지기 직전/직후), P32(진짜 왼쪽 / 가짜 오른쪽, 같은 방향), P37(태호 손바닥).
- **P16 ↔ P37 같은 각도 [고정]:** `the card lying on an open palm, seen from slightly above, the chipped top-right corner pointing to the upper right of the frame, the card filling about 30% of the frame width`. 차이는 긁힘 유무뿐(Q10: Flow에서 안 보이면 L06은 버려도 성립 — 플래그 F5).

### PROP_PEN — 검은 옻칠 만년필 (3 상태)
- 공통: `a black lacquer fountain pen with a glossy black body, a slim gold clip and thin gold trim, no engraving, no writing, no brand mark`
- **Y7 (첫 삶, P01):** `+ a small dent on the end of the cap catching the light`
- **NEW (받은 날, P23·P24·P46):** `+ flawless and new, no dents, no scratches`
- **BENT (가짜 제작 뒤, P31 이후 진우의 펜):** `+ the very tip of the gold nib bent slightly to one side` — P31에서 휘는 순간, 이후 펜촉이 보일 때만.
- **P01 ↔ P23 같은 각도:** `the pen lying diagonally from lower left to upper right, the cap end at the upper right` (P01은 떨어지는 중이라 근사치 허용, 캡 끝 위치만 맞춘다).
- **고문의 가슴 주머니 펜 (P39):** `the gold clip and black cap top of the same model of black lacquer fountain pen clipped in the left chest pocket of his cardigan` — 같은 모델 = 선물이 여러 개다(L47).

### PROP_PEN_BOX — 만년필 상자
- `a palm-length matte black hinged pen box with no logo, lined inside with a deep wine-red velvet bed`
- **들어 올린 상태 (P32·P47):** `+ the velvet bed lifted up like a lid, revealing a shallow hidden hollow underneath` — P23에서는 받침을 들지 않는다(은신처는 P32에 처음).

### PROP_CUFFLINK — 오닉스 커프스
- `a square cufflink with a thin polished silver frame and a flat glossy black onyx face, fastened through a white French shirt cuff`
- **누가 보이게 차는가 (EP01):** 태호37(늘, P30·P35·P36) · 이름 없는 장갑 손(P07). **진우는 두 시점 모두 단추 소매**(커프스 금지). 고문은 카디건 소매 속(보이지 않음, 판정 Z).

### PROP_GLOVE_PUSH — 밀친 손의 검은 가죽 장갑 [리더 판정 S·Z]
- `a thin, close-fitting black leather dress glove, smooth and plain with no visible seams pattern, no logo, no buttons`
- **누구의 소품도 아니다.** 어떤 인물의 외형 문장·의상 토큰·레퍼런스 카드에도 넣지 않는다(character-sheets §2-2 HAND_ANON_GLOVE). EP01에서 장갑은 **P07에만** 존재한다.
- 장갑과 코트 소매 사이로 흰 셔츠 소매 끝 + PROP_CUFFLINK가 보인다.

### PROP_RING — 반지 (화면에서 가장 채도 높은 초록)
- `a thick matte silver ring set with one small deep green stone, worn on the right middle finger`
- EP01: P50(운전대 1시 방향, 반지가 화면 중앙 쪽), P51(손바닥 안쪽에서 반지 테가 보임). **반지를 끼는 인물은 준서 하나**(다른 모든 인물 반지 0, 결혼반지 포함).

### PROP_RIBBON_PIN — 상복 리본핀
- `a small black ribbon bow about three centimetres wide, fixed on a short straight silver pin whose tip is slightly bent, the bent silver tip catching the light`
- P58: 밝은 황토 베이지 앞치마 **왼쪽 가슴**(검정이 또렷하게). P57에서는 보이지 않거나 작고 흐리게.
- P59(기억): 검은 상복 라펠, **흰 블라우스 깃 바로 옆** — 핀 끝이 휘는 순간.
- 리본에 띠·글씨·꽃 장식 0. 의미("장례식 핀")는 대사가 싣는다(판정 E).

### PROP_CUP_PLAIN / PROP_CUP_SLEEVE — 종이컵 두 종
- PLAIN: `a plain white paper cup with no print`
- SLEEVE: `a plain white paper cup of light brown instant mix coffee wrapped in a hand-cut brown corrugated-cardboard sleeve with uneven scissor-cut edges, cut from a plain box, no print`
- **콜드 오픈 P02 [고정, twist-plan D8]:** 컵 1 = 진우 가까이 파라펫 위 `a plain white paper cup with no sleeve and no steam, gone cold` / 컵 2 = 계단실 문 앞 바닥 `a paper cup in a hand-cut brown cardboard sleeve standing on the floor in front of the stairwell door, thin steam rising from it`. 둘 다 작게, 프레임 가장자리, 강조 0.
- **P28·P29·P30:** 봉구가 슬리브를 끼운 컵 두 개 → 진우가 들고 감 → P30 태호에게 내미는 컵 하나.

### PROP_CANE — 고문의 지팡이
- `a dark brown polished wooden walking cane with a small rounded plain silver knob handle`
- P39(고문 옆). **P06 [권장 선택]:** `at the far right edge of the frame, a thin dark vertical rod leaning against the railing, its top cut off by the frame, reading like a railing post` — 손잡이·은색 0.
- P50 은빛 점(L40): §7 FRAME-RECORD-INTERIOR. 지팡이로 **식별되면 안 된다**(1% 이하의 무채색 점).

### PROP_DESK_PHONE / PROP_PHONE / PROP_LAPTOP / PROP_BRIEFCASE / PROP_NOTEPAD
- 책상 전화기: `a plain grey office desk phone with blank buttons` (P35 배경만).
- 휴대폰: `a plain black smartphone whose screen shows only a blank soft glow, no icons, no caller name` (P26 진동 — 화면은 귀 쪽으로 돌려도 된다). 민재 폰: `lying face down`.
- 노트북: `a laptop with a plain lid and no logo, its screen turned away or showing only a blank glow`.
- 서류 가방: `a plain matte black leather briefcase with no logo` (P23 열림, 안에 상자).
- 수첩(P41·P46): `a small notepad with blank pages, nothing written or drawn`.

### PROP_HANDCUFFS / PROP_HELMET / PROP_GUARD_CAP — 앵커 A의 물건 운율 (V4)
- 수갑: `plain silver police handcuffs`.
- 헬멧(P52): `a white delivery helmet with a scuff on its left side, lying on the ground in the foreground`.
- 경비원 모자: `a plain navy peaked cap with no badge` (봉구의 외형 문장에 포함. EP02에서 헬멧 자리에 떨어지는 물건).

### VEH_SCOOTER / PROP_CART / PROP_BOXES
- 스쿠터(P52 가장자리, 쓰러짐): `a small red delivery scooter with a plain white delivery box and a single round headlight, fallen on its side at the edge of the frame` — **P49에는 없다**(스쿠터 부재 = 기사 무죄).
- 외눈 헤드라이트(P50 뒷유리 너머): `a single round headlight approaching from up the slope behind`.
- 폐지 수레(P48–49): `an old hand cart with rusty handles loaded with flat cardboard boxes` / 흩어짐(P49): `flat cardboard boxes scattering across the road`.
- 노인(P48, 등만): `an elderly man seen only from behind in a faded grey jumper, pulling the cart`.

### 지폐·동전·기타
- 거스름돈(P58): `a few plain banknotes and coins in muted pale colours, completely blank, no numbers, no portraits, no symbols`.
- 은박 김밥(P56): `kimbap being rolled on silver foil`.
- 손전등(P27): `a plain black handheld flashlight`.
- 믹스커피 상자·전기 포트·라디오: 무지(BOOTH 변주 문장에 포함).
- **예비(EP01 미사용):** PROP_KNIT_GLOVES — `a pair of hand-knitted wool mittens` (앵커 B, 딸이 넣어 준 손뜨개 장갑. 색은 등장 회차에 확정, 초록 금지). PROP_GLOVE_PUSH와 혼동하지 않게 이름을 나눈다.

---

## 7. 고정 구도 문장 (FRAME-*) — "같은 각도·같은 크기" 쌍 [고정]

반전·복선이 **구도의 반복**으로 터지는 작품이다. 아래 문장은 해당 패널들에 글자 그대로 넣는다(손의 주인·소매·장갑 유무만 다르다).

### FRAME-HAND-ON-BACK — P07 ↔ P40 (진입 방향·손가락 모양·프레임 크기 일치, L13·L45-b)
```
extreme close-up from slightly behind and to the left of the man, camera at shoulder height; a hand enters from the right edge of the frame, fingers open and spread, resting lightly and flat (not gripping, not a fist), only three fingers and the lower part of the palm visible, the hand covering about one third of the frame width in the middle third of the frame, the end of the sleeve cut off at the right edge.
```
- P07: 손이 닿는 곳 = `the upper back of his dark grey wool overcoat`, 손 = PROP_GLOVE_PUSH + 소매 끝 PROP_CUFFLINK, 소매 = §7-1 TF-1 ③.
- P40: 손이 닿는 곳 = `the top of his shoulder on the navy suit jacket`, 손 = 고문의 맨손(character-sheets HAND ID: 마르고 작은 손, 검버섯, 단정한 손톱), 소매 = 회색 카디건이 손목까지, **장갑 0·커프스 0**. 시선·조명은 평범하게(서늘함 0).

### FRAME-CUFF — P07 ↔ P36 (커프스 같은 각도·같은 크기, L45-a 미스디렉션)
- 커프스 위치·크기 문장: `the square onyx cufflink face turned toward the camera in the right third of the frame, about one tenth of the frame width`.
- P36은 상하 분할 구도: 위 = 진우 어깨 위 태호의 소매 끝과 커프스(위 문장), 아래 = 책상 아래 꽉 쥔 진우의 주먹. 태호는 맨손(장갑 0).

### FRAME-COLD-OPEN-WIDE — P02 [고정, 각도 A 원형 — EP03·EP10·EP22 재생용]
```
medium-wide shot from the east end of the south railing looking west along it: in the centre-left a man in a dark grey wool overcoat leans over the frosted railing with his back and right profile to us, his empty right hand open and reaching down past the railing; the left edge of the frame is cut just outside his left shoulder, with nothing visible beyond it; far away at the upper right, the grey stairwell door is half open and in the gap stands a long thin dark shadow of a person in a long black coat, no face and no hands visible; on the floor in front of that door a paper cup in a hand-cut brown cardboard sleeve with thin steam rising; close to the man on the parapet a plain white paper cup with no sleeve and no steam; the dark edge of the air-conditioning units' shadow in the lower right foreground. No cane, no other person.
```

### FRAME-ANCHOR-A — P52 (EP02에서 같은 앵글·프레이밍·빛으로 반복 — 물건 위치 고정, world §6-1)
```
slightly low angle from further down the slope looking up at the bend: the curved-arm cold white streetlamp at the upper left, the round orange-rimmed convex mirror at the upper right with a tiny reflection of the kneeling man inside it, in the centre a man kneeling on the road with his hands pulled behind his back as silver handcuffs close on his wrists, the police shown only as dark uniform sleeves and hands, a white delivery helmet with a scuff on its left side lying on the ground in the foreground, a small red delivery scooter fallen at the edge of the frame, and up the slope behind, the light of the tower's back door.
```

### FRAME-RECORD-INTERIOR — P50 (L08·L40, TF-5)
- `the driver's right hand resting on the steering wheel at the one o'clock position in the centre of the frame, the thick matte silver ring with the small deep green stone on the right middle finger, the white shirt sleeve rolled up to the forearm, no cufflink, no watch; at the top of the frame through the rear window a single round headlight approaches from up the slope; at the far right edge of the frame, low down in the darkness of the passenger side, one tiny dull silver point of light, smaller than a fingertip in the frame, not recognisable as any object.`
- 은빛 점 = 결함 아님(TF-5). 지팡이 손잡이로 **식별되면** 오히려 REGEN(너무 읽힌다). 점이 사라지면 D5 폴백(플래그 F7).
- P51: `the same hand's palm coming toward and covering the lens, the silver band of the ring visible on the inner side of the finger, the bottom of the frame going black`.

### FRAME-BARE-HAND — P44 ↔ P53 ↔ P50 (V3 세로 연속, L07)
- P53은 P50과 **같은 폭·같은 손 크기·같은 손 각도**: `a right hand resting palm-down in the centre of the frame, seen from slightly above, the hand covering about 40% of the frame width`. P53 = 민재의 맨손(반지 0, 물어뜯은 손톱, 붉은 손끝, 거스러미), 현재 낮빛(L-MEETING-AFTERNOON), 아버지 손은 프레임 밖.
- P44는 같은 손이 "쥐어진 팔뚝" 동작의 일부로 테이블 위에 무심하게 들어온다(시선의 주인공은 기 대표의 손).

### 손 크기 맞춤 — P06 ↔ P08 ↔ P14 (V-증명 ②)
- `a man's hand in close-up at railing height, the hand covering about half of the frame width` — P06·P08 진우35(시계·핏줄·베인 자국), P14 진우28(두 손 펼침, 매끈, 시계 0, 단추 소매).

### 7-1. TF-1 콜드 오픈 렌더 규칙 [고정 — 리더 판정 S·Z, twist-plan D1-a] — P01–P10 모든 프롬프트

| # | 규칙 | 프롬프트에 넣는 것 |
|---|---|---|
| ① | 미는 손 = 검은 가죽 장갑 + 흰 셔츠 소매 끝 오닉스 커프스. **맨손 금지** | PROP_GLOVE_PUSH + PROP_CUFFLINK 문장 (P07) |
| ② | **손 크기 기준물 0** | `only three fingers and the lower palm and the cufflink are visible; no whole hand, no second hand, no face, no object for scale in the same frame` |
| ③ | 익명 소매 | `the sleeve is a dark wool coat sleeve whose colour cannot be told apart between navy and charcoal in the blue night light, no buttons, no visible texture or pattern` |
| ④ | **멘토(태호44)의 손은 콜드 오픈 어디에도 보이지 않는다** | P05·P09: `his hands are out of frame; only his face and the top of his coat collar` |
| ⑤ | 멘토의 말은 **왼쪽 프레임 밖**, 손은 **오른쪽**에서 | P03·P06: 왼쪽 30%를 어두운 빈 공간으로(§8). P07: 손은 오른쪽 가장자리에서 |
| ⑥ | P02는 진우 왼어깨 바로 바깥에서 자른다 | FRAME-COLD-OPEN-WIDE 문장 그대로 |
| + | 지팡이 손잡이·고문·준서 얼굴 0, 15+ (추락하는 몸·착지·피 0) | P08: `a thin frost scrape, no blood`. P06: `a thin cut mark from the frost, no blood` |

- **P07에는 어떤 레퍼런스 카드도 첨부하지 않는다**(태호 카드 첨부 금지 — 첨부하면 Flow가 그 사람의 손·체격을 따른다). P07 프롬프트에 이름을 쓰지 않는다: `an unseen person's gloved hand`.
- P08: 손의 미끄러짐이 밀린 결과로 읽히게 — `his hand sliding off the frosted railing forward and away, the wrist bent forward as if pushed, four thin scrape lines left in the frost; the body is not shown`. 자해로 읽힐 각도 0.
- P09: 태호44 극단 클로즈업, `eyes widening and mouth falling open`, 악의도 구조 동작도 아닌 중립적 충격. 손 프레임 밖.

---

## 8. 말풍선 자리 규약 (art_space · Khmer edition)

**이미지에는 말풍선이 없다.** 뷰어가 크메르어 말풍선을 이미지 위에 그린다(`km_tool.py build`, 위치는 letterer의 `place`). 이미지는 말풍선이 올라갈 **조용한 빈자리**를 남긴다.

- **letterer가 패널마다 `art_space`를 쓴다.** prompt-smith는 그것을 영어로 이렇게 넣는다:
  `Keep the <area> as calm, empty background with no important details (a speech bubble will be added there later).`
- **기본 빈자리 (9:16 기준):** 위쪽 15–30%(밤하늘·천장·벽·어둠) 또는 아래쪽 15–25%(바닥·테이블 면·그림자). 말풍선 2개 패널은 위·아래 둘 다 또는 위쪽 넓게.
  얼굴·손·핵심 소품(카드·만년필·커프스·반지·리본핀)은 빈자리 밖, 프레임 높이 35–75%대에 둔다.
- **장소별 좋은 빈자리:** ROOFTOP = 위쪽 남색 하늘 / FIRM_FLOOR = 천장 패널·창 위 / 밤 = 꺼진 사무 층의 어둠 · FIRM_MEETING = 창 위 흰빛·테이블 앞쪽 면 · DETENTION_VISIT = 위쪽 크림색 벽(P11 `env` 자리도 여기) · EXT_GATE = 콘크리트 벽 · HERO_ROOM = 스탠드 빛 밖 어두운 벽 · BACK_ALLEY = 밤하늘·담벼락 · BUNSIK = 김·천장.
- **화면 밖 화자 [고정]:** P03·P06 태호44 = **왼쪽 프레임 밖**. 이미지의 왼쪽 30%는 어두운 빈 밤(인물·난간 기둥 0). 꼬리는 왼쪽 가장자리를 가리킨다.
  P29 태호 = 뒤(유리방 쪽) — 위쪽 어둠. P26 태호 = 폰(꼬리는 폰 쪽) — 진우 얼굴 반대편 위쪽을 비운다. P56 진우 = 화면 밖.
- **뷰어 말풍선 종류(그림이 아니라 뷰어가 그린다):** `dialogue`(흰 둥근 풍선 + 꼬리) · `thought`(속말: 구름/점선, 꼬리 없음 — 이 작품의 속말이 많다) · `shout`(P20 「잠깐만요!」) · `narration`(사각 캡션, EP01 없음) · `memory`(P19·P24·P59, 파란 흐린 테두리).
- `env`(P11 「7년 전, 여름」)와 `sfx`(매미·숨·지팡이 두 번 톡 톡)도 뷰어가 쓴다 → 해당 자리를 비운다. 이미지에 의성어 그림 0.
- **무대사 패널**(`silent: true`, 빈자리 억지로 만들지 않음): P01·02·05·07·08·09·10·12·14·15·17·18·22·23·31·32·37·48·49·50·51·53·55·58 (최종은 letterer).
- **기록 컷 P48–51은 말풍선 0**(음성 없음). 이미지 전체를 기록 컷 테두리 안에 그린다.
- 말풍선 폭 규칙(뷰어): `x + w ≤ 100`. 프레임 가장자리 화자는 꼬리 공간을 생각한다.

---

## 9. 금지 / 주의 (Prohibitions)

### 9-1. 무글자 규칙 [고정 — concept §11, world §9]

| 대상 | 그리는 법 (영문 긍정 문장) |
|---|---|
| 날짜·시간 | 달력·시계 숫자·폰 화면 날짜 0. 시간은 빛·계절·몸으로(§2-3). 손목시계는 `a plain dial with hands only, no numbers` |
| 휴대폰 | `the phone screen shows only a blank soft glow` / 엎어 둠. 발신자 이름 0 |
| 노트북 | `plain lid, no logo; screen turned away or blank glow` |
| 블랙박스 영상 | 화면·모니터로 그리지 않는다 → REG-RECORD. 타임스탬프·REC·UI 0 |
| 차량 번호판 | `a blank licence plate` |
| 서류·판결문·명함·봉투 | 등장시키지 않거나 `sheets of paper lying face down, blank backs` |
| 간판·문패·로고·층 표시·명판 | `blank surfaces, no signs` |
| 수의 번호 패치 / 교도관·경찰·경비 휘장·명찰 | `a completely blank chest patch` / `no badge, no name tag` |
| 만년필 | `no engraving, no writing` |
| 메모리카드 | `no label, no printing` |
| 선물 상자 | 카드·쪽지 0 |
| 복수 명단 | **종이에 쓰지 않는다**(P34 빈 책상, 손가락만) |
| 뉴스·TV | 쓰지 않는다 |
| 분식집 메뉴판·가격표 | `plain coloured rectangles with no letters or numbers` |
| 지폐·동전 | `completely blank, muted pale colours` |
| 계기판 | `no numbers, only faint glow` |
| 커피 상자·종이컵·슬리브 | `plain, unlabelled, no print` |
| 옷·가방·신발 | `no logos, no letters, no prints` |
| 장례식 꽃·천(P59) | 조화 리본 띠·글씨 0 |

### 9-2. 모든 프롬프트의 마지막 줄 [고정 — webtoon-khmer-edition §4, webtoon-flow-handoff]
- 패널: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
- 레퍼런스 시트: `Avoid: any text, labels, speech bubbles, watermark.`
- 그 앞에 "blank" 긍정 문장(§9-1)을 넣는다. 기록 컷은 §4의 "no on-screen overlay" 문장도 Avoid 줄 바로 앞에.

### 9-3. 연출 금지
- **씬 안에서 장소·시간대·조명이 바뀌지 않는다**(배경 급변 금지). 예외는 §3에 적힌 변주(P11 흰→금, P22–23 금빛 약화)뿐.
- 초자연 연출 금지(V7): 회귀 순간에도 광채·소용돌이·시계 이미지·이중 노출 0. **평범한 석양 금빛**이 전부.
- 과장 만화 기호(땀방울·집중선·이모티콘·하트) 금지. 렌즈 플레어·빛 번짐 금지.
- 15+: 피·부상·추락하는 몸·착지·충격 순간 0. 베인 자국은 가는 선 하나, 피 없음. 기록 컷은 충격 직전에서 끊는다.
- **밀침은 타인의 손이 분명**(P07–08). 자해로 읽히는 구도 0.
- **고문을 악역 인상으로 그리지 않는다:** 찡그린 미간·짙은 눈 그림자·아래서 비추는 조명·의미심장한 시선 0. P24·P39·P40은 다정하고 평범하게.
- **반전 보호 (EP01):**
  - P07 장갑 손에 어떤 인물의 레퍼런스도 첨부 금지, 손 전체·손 크기 단서 금지.
  - 태호44의 손·소매 노출 금지(P05·P09).
  - 고문의 손목·커프스 노출 금지(P24·P39·P40, 카디건 소매가 손목까지).
  - 준서의 얼굴 0(P02 그림자, P50–51 손만).
  - P27 봉구 문장 장면에 진우 리액션 클로즈업·의미 있는 조명 0. P29에 진우 자리·책상 전화 0.
  - P50 은빛 점 강조·줌 0.
  - P57 수아의 아는 눈빛·의미심장한 조명 0, 리본핀은 P58 전까지 작고 흐리게.
  - 수아 기억(회상) 컷 0. P59는 **진우의** 기억이다(그의 떨리는 손).
- 다른 이야기의 소품·장소 금지: 노란 가로등 줄·언덕 계단(story-8), 차 대접 의식, 비 오는 여름 장면(umbrella), 학교 공간(revenge·school).

---

## 10. 일관성 규약 + 체크리스트 (Consistency)

### 10-1. 규약
1. **불변 vs 가변.** 인물 외형 문장(character-sheets `APPEARANCE`)은 글자 하나 바꾸지 않고 매 패널 붙인다. 표정·포즈·의상·조명만 패널마다 바꾼다.
2. **의상은 날짜·장면에 묶인다**(character-sheets §4 장면표). 같은 씬 안에서 옷이 바뀌지 않는다.
3. **장소는 씬에 묶인다.** 같은 scene_id = 같은 LOC 문장 + 같은 조명 문장. 장소 전환은 SCENE BREAK에서만.
4. **소품은 하나의 문장.** 같은 PROP은 모든 패널에서 같은 영문 문장(§6). 카드·만년필·커프스·반지·리본핀은 반전의 증거 — 모양·색·흠집 위치가 같아야 한다.
5. **고정 구도는 글자 그대로**(§7). 특히 P02·P07·P36·P40·P50·P52·P53.
6. **손만 나오는 컷의 신원:** 얼굴이 없으면 소매·손 표식으로 누구인지 보이게(character-sheets §3 HAND ID). 장갑 손만 예외 — 신원이 **보이지 않아야** 한다.
7. **레지스터 혼동 금지:** 기억 컷(청회·흐린 가장자리·테두리 선 0) ↔ 기록 컷(녹회·광각·스캔 라인·이중 검은 둥근 테두리) ↔ 겨울(푸른 남색, 흐림 0).

### 10-2. 패널 검수 체크리스트 (panel-validator · quality-reviewer)
- [ ] 9:16 세로. 글자·숫자·가짜 글씨·말풍선·로고·워터마크 0 (C3 무글자).
- [ ] `art_space` 영역이 실제로 비어 있다(얼굴·손·핵심 소품 0).
- [ ] 레지스터가 맞다(§4): P01–10 겨울 / P19·24·52·59 기억 / P48–51 기록(테두리 + 오버레이 0) / 나머지 현재.
- [ ] 장소 고정 요소가 제자리(§5): 옥상 각도 A, 회의실 좌석, 골목의 흰 가로등·주황 반사경·타워, 접견 유리·인터폰·녹색 벽.
- [ ] 진우: 오른쪽 턱 아래 점 / **단추 소매(커프스 0)** / 28 = 시계 0·손등 매끈 / 35 = 왼손목 은시계·흰머리 몇 가닥·다크서클.
- [ ] 커프스는 태호와 P07 장갑 손에만. 반지는 P50–51 손에만. **초록은 반지에만**(옷·소품 초록 0).
- [ ] TF-1: P07 장갑·커프스·익명 소매·손 크기 기준물 0 / 태호44 손 0 / P02 왼어깨 바깥 크롭 / P03·P06 왼쪽 빈 어둠.
- [ ] P40 = P07과 진입 방향·손가락 모양·크기 일치, 장갑·커프스 0. P36 커프스 = P07 각도·크기.
- [ ] P16·P32 진짜 카드 긁힘 있음 / P37 가짜 긁힘 없음(보이지 않으면 ACCEPT — 긁힘이 **생긴** 경우만 REGEN).
- [ ] 만년필: P01 캡 끝 찍힘 / P23 흠 없음 / P31 이후 펜촉 휨(보일 때만). 각인 0.
- [ ] P44·P53 민재 손: 반지 0, 물어뜯은 손톱. P50 손: 길고 깨끗한 손톱 + 초록 돌 은반지. P53 폭·크기 = P50.
- [ ] P49 스쿠터 없음. P52 앵커 A 요소 전부(가로등 왼쪽 위·반사경 오른쪽 위·수갑·헬멧·타워 불빛).
- [ ] P58 리본핀: 앞치마 왼쪽 가슴, 은색 핀 끝 휨. P59 흰 깃 옆 라펠.
- [ ] 고문이 다정하게 보인다(악역 인상 0). 자해로 읽히는 컷 0, 피 0.

---

## 11. 하류 전달 요약

- **panel-director:** 모든 패널에 `scene_id` + `LOC_*`(+ 변주 이름) + 조명 코드(§3) + 레지스터(§4). EP01 지도: S1 P01–09 ROOFTOP(L-ROOF-WINTER, REG-WINTER) · P10 BACK_ALLEY WINTER-DOWN · S2–S3 P11–23 DETENTION_VISIT(P19 기억) · P24 기억(FIRM_FLOOR 흐림) · S4 P25–26 DETENTION_VISIT EXT_GATE · S5 P27 TOWER_FRONT_DOOR → P28 BACK_ALLEY BOOTH · S6 P29–30 FIRM_FLOOR 밤 · S7 P31–34 HERO_ROOM · S8 P35–40 FIRM_FLOOR 아침 · S9 P41–46 FIRM_MEETING · S10 P47 HERO_ROOM → P48–51 SEDAN_CABIN 기록 → P52 BACK_ALLEY 앵커 A 기억 → P53 FIRM_MEETING(V3) → P54 HERO_ROOM · S11 P55 BACK_ALLEY BEND-NIGHT → P56–60 BUNSIK(P59 기억, 장소 없음). 고정 구도(§7) 표시.
- **letterer:** §8 빈자리 규약, 9:16 % 좌표, P03·P06 왼쪽 밖 화자, 기록 컷 silent.
- **prompt-smith:** §1-2 조립 순서, §3 조명, §4 레지스터 문장, §5 LOC 문장, §6 PROP 문장, §7 고정 구도, §9-2 Avoid 줄. `aspect: 9:16`. P07에는 attach 없음.
- **ref-sheet-artist:** character-sheets §5 카드 사양, `aspect: 16:9`, 무글자.
- **panel-validator:** §10-2 체크리스트. C2 배경 연속성 = §5 고정 요소, C3 = 무글자 + art_space 비움, 소품·구도 쌍(§7) 일치, P50 은빛 점은 결함 아님(TF-5).

---

## Flags for the leader

| # | 플래그 | 요청 |
|---|---|---|
| F1 | **레지스터 4종을 확정**했다. 기록 컷 = 녹회 탈색 + 광각 휘어짐 + 가는 스캔 라인 + **이미지 안에 그린 얇은 이중 검은 테두리(둥근 모서리)** + 오버레이 0. 뷰어는 패널 테두리를 그리지 못하므로 테두리는 그림에 들어가야 한다 | 확인 |
| F2 | 9:16 단일 비율(story-8과 같음). 와이드가 필요한 P02·P15·P41·P52는 세로 안에서 깊이·하이앵글로 푼다(P41 = 문 쪽에서 테이블 길이를 내려다보는 하이앵글) | 확인 |
| F3 | **P27 타워 정면 유리문**은 판정 AB대로 레퍼런스 세트 없는 타이트 변주로 두었고, 같은 타워 건물이라 LOC_BACK_ALLEY 계열 아래 `TOWER_FRONT_DOOR`로 적었다(실제로는 뒷문이 아니라 앞문). P25–26은 `LOC_DETENTION_VISIT · EXT_GATE` | 이름 배치만 확인 |
| F4 | 기록 컷에서 Flow가 블랙박스처럼 **타임스탬프·REC 표시를 저절로 그릴 위험**이 크다. 오버레이 금지 문장을 Avoid 줄 앞에 넣었다. 생기면 REGEN. 이중 테두리를 못 그리면 단일 얇은 둥근 테두리까지 ACCEPT | panel-validator 기준으로 전달 |
| F5 | 진짜/가짜 카드의 긁힘 차이를 유지하되 카드를 프레임 폭 25–30% 이상 매크로로 잡게 했다. P37에서 긁힘이 안 보이는 것은 ACCEPT, **긁힘이 생긴** 경우만 REGEN(Q10과 정합) | 확인 |
| F6 | 지팡이 손잡이를 **작고 둥근 은색 손잡이(knob)**로 정했다(지금까지 "은색 손잡이"만 있었음). P50 은빛 점이 형태 없이 점으로 읽히기 쉽다. EP03·EP10 그림자 대조도 이 모양으로 | 확인 |
| F7 | P50 은빛 점(L40)은 Flow가 지우거나 너무 또렷한 지팡이로 그릴 수 있다. 또렷하면 REGEN, 사라지면 2회 재시도 후 twist-plan D5 폴백(L40 포기, EP11은 W7+W8로) | 결과 나오면 리더 판정 |
| F8 | P24 기억 컷은 청회색 레지스터지만 "다정하게" 그려야 해서 **부드러운 확산광·굳은 그림자 0**으로 규정(L-MEM-OFFICE) | 확인 |
| F9 | 느티나무 초록은 "초록은 반지에만" 규칙의 예외(환경). 늘 반지보다 탁하고 어둡게, 반지 컷(P50–51)에는 초록 환경 0 | 확인 |
| F10 | 회의실·사무 층의 "고문 방 나무문" 외에 신규 장소·예비 장소 사용 0. P59 장례식은 장소 토큰 없이 클로즈업(검은 천·흰 국화 꽃잎) | — |
| F11 | trend-brief에 화풍 지시가 없어 장르 관례(저채도·로우키·손 클로즈업)로 정했다. 폴백 트리거 발동 없음 | — |

---

# EP02 additions (「같은 가로등 아래」 · ក្រោមភ្លើងផ្លូវដដែល) — art-director · 2026-11-26

- 근거: `00_input/brief.md` EP02 절 + 판정 BA–BF, `03_episode/ep02_beatsheet.md`(F1–F16, Q1–Q11), EP01 `04_visual/ep01_shotlist.md` panel_052 · `ep01_prompts.md` panel_052 · `ep01_lettering.md` panel_052.
- **위의 §1–§11과 EP01 플래그는 그대로 유효하다.** 이 절은 EP02가 새로 필요로 하는 것만 더한다. GLOBAL STYLE TOKEN·레지스터 문장·LOC 문장·PROP 문장·Avoid 줄은 바뀌지 않는다.
- EP02 레지스터: **REG-PRESENT**(P46 외 전부) · **REG-MEMORY**(P46 하나 = 앵커 A 원본). REG-WINTER·REG-RECORD 0.
- EP02 장소: LOC_BACK_ALLEY(아래 모퉁이·굽이·BOOTH·맨 위·비탈 중간) · LOC_DETENTION_VISIT(+EXT_GATE) · LOC_FIRM_FLOOR(책상 줄·파트너 유리방 낮/밤) · LOC_BUNSIK. **새 LOC 0.** ROOFTOP·HERO_ROOM·FIRM_MEETING·SEDAN_CABIN 미사용.
- 화면비: 모든 EP02 패널 **9:16**. 새 레퍼런스 카드 0(character-sheets "EP02 additions" §E2-0).

## E2-1. 조명 코드 (EP02 신규 + 재사용 지도)

같은 scene_id = 같은 조명 문장(§3 원칙 그대로). 아래 신규 문장은 LOC 문장 뒤에 그대로 붙인다.

| 코드 | EP02 패널 | 영문 조명 문장 (프롬프트에 그대로) |
|---|---|---|
| **L-ALLEY-BOTTOM-NIGHT** (재사용 변주) | P01 | `humid summer night at the bottom of the slope, warm yellow light glowing through the steamed-up glass door of the snack shop behind him, the dark green crown of the huge zelkova tree above, cold white streetlamp glow further up the alley` — 유리문 안은 노란 흐림뿐, 사람 실루엣 0 |
| L-ALLEY-SUMMER-NIGHT (EP01 재사용) | P02–P04 | EP01 §3 문장 그대로. P04는 `+ far up the slope, the small warm yellow window of the security booth` |
| **L-VISIT-DAY** | P05–P08 | `late morning, flat pale green-white fluorescent light evenly along the whole corridor, the small high barred window at the far end showing only plain white daylight, no golden light, no sunset beam, no dust motes, cool and ordinary` |
| **L-ALLEY-DAY** | P09–P10 | `midsummer noon, hard white sunlight from almost directly overhead, short dark shadows pooled under the walls and the utility pole, pale sun-bleached asphalt, a hazy white sky, the streetlamp switched off, the convex mirror reflecting only the empty sunlit alley` (매미는 효과음 — 그림에 0) |
| **L-FLOOR-AFTERNOON** | P11–P24 | `afternoon, clean white daylight from the large north windows mixed with cool fluorescent light, the dark green crown of the zelkova tree outside` · 유리방 안(P15–P24): `+ white afternoon light falling through the half-lowered blinds in soft horizontal stripes across the room` |
| **L-FLOOR-LATE** | P25–P27 | `late afternoon, the window light now lower and slightly warmer, long soft shadows across the desks, the zelkova crown outside` (금빛 아님 — 회귀 금빛 `#E8A93C` 금지) |
| L-OUT-GOLD (EP01 재사용) | P28 | EP01 §3 문장 그대로 + `two long shadows on the concrete` |
| **L-BUNSIK-EVENING** | P29–P36 | `warm steamy yellow light, red reflections from the tteokbokki pan, steam drifting through the air, beyond the steamed-up glass door the outside is still a deep blue summer dusk, not black night, the zelkova silhouette dark against the blue` (EP01 L-BUNSIK = 바깥 검은 밤 → EP02는 바깥 푸른 저녁으로 구별, beatsheet Q11) |
| L-FLOOR-MORNING (EP01 재사용) | P37–P39 | EP01 §3 문장 그대로 |
| L-BOOTH-NIGHT (EP01 재사용) | P40–P42 | EP01 §3 문장 그대로(따뜻하고 평범하게 — 재독 비트) |
| **L-BOOTH-OFF** (불 꺼진 BOOTH 변주) | P43 | `humid summer night, the security booth's light is switched off and its inside is dim, lit only by a faint cold white glow from the streetlamp down the slope and a weak bluish street glow, the small electric fan still turning by itself in the dark, no warm yellow light anywhere` |
| **L-ALLEY-TOP-NIGHT** | P44–P45 | `humid summer night seen from the top of the slope, the cold grey back wall of the tower behind, the narrow alley dropping away below into darkness, far below one circle of cold white streetlamp light at the bend, faint red and blue lights flickering alternately on the walls around the bend, no police car visible, no people visible` · P45(비탈 중간, 달림): `+ the red and blue reflections stronger on the walls ahead, the power lines overhead` |
| L-MEM-ANCHOR (EP01 재사용) | P46 | EP01 panel_052 프롬프트의 Light 문장 그대로(§E2-4) |
| **L-ANCHOR-PRESENT** | P47–P56, P59–P60 | `night, a cold white streetlamp from the upper left, faint red and blue police-light reflections alternating on the walls, no police car visible; normal full colour and sharp focus, not faded, no blurred edges` · 얼굴 컷(P49·P51·P52·P54·P60): `+ red and blue light alternating across his face` |
| L-FLOOR-NIGHT (EP01 재사용) | P57–P58 | EP01 §3 문장 그대로. 유리방 밖 어두운 사무 층만 — **호두나무 문·복도 끝은 프레임 밖** |

- **L-ANCHOR-PRESENT = L-MEM-ANCHOR의 광원 배치 그대로**(가로등 왼쪽 위, 경광 반사는 벽, 경찰차 0)이고 **레지스터만 현재**다. 청회 탈색·소프트 포커스·가장자리 흐림 문장을 절대 붙이지 않는다(P46과 P47의 차이는 레지스터와 사람·물건뿐).
- 경광은 **반사로만**: 붉은빛·푸른빛이 벽과 얼굴에 약하게. 경광등·경찰차·사이렌 형태 0. 붉은·푸른 빛 번짐·렌즈 플레어 금지(§9-3).
- **회귀 금빛 사용 (EP02):** P28 구치소 철문 밖(L-OUT-GOLD, EP01 P25 운율) 한 곳뿐. 접견 복도(P05–P08)에 금빛 0. P25–P27 오후빛은 따뜻해도 금빛으로 읽히지 않게.
- 재독 비트(서늘하게 그리지 않음): P04 경비실 창, P34 덕배의 「건물 손님이…」, P37 들뜬 태호, P40–P41 봉구의 커피·양말.

## E2-2. 장소 변주 (새 LOC 아님 — 기존 LOC 문장 + 변주 문장)

| 변주 | 패널 | 영문 변주 문장 (기존 LOC 문장 대신 또는 뒤에) |
|---|---|---|
| BACK_ALLEY · **BOTTOM-DOOR** | P01 | `the bottom of the sloping alley at the corner of the market street: the steamed-up glass door of the tiny snack shop just closing behind a man, the huge zelkova tree beside it, the alley climbing away uphill` |
| BACK_ALLEY · **BEND-SIDE** | P02–P03 | `the middle bend at night seen from the side and slightly above (not from down the slope): the grey utility pole with the curved-arm cold white streetlamp, the orange-rimmed convex mirror, the crack in the wall below the bend` — **앵커 A 각도 금지**(P46–P47 전용) |
| BACK_ALLEY · **LOOK-UP-BOOTH** | P04 | `from the bend looking up the slope over his shoulder: at the very top, the cold grey back of the tower, the small security booth with its warm yellow window, a round silhouette in a cap and a small turning fan inside (too small to show a face), the outline of the car-park shutter and the barrier arm` |
| BACK_ALLEY · **BEND-NOON** | P09 | `the same middle bend at noon, seen from the side: the utility pole, the switched-off streetlamp, the convex mirror, the crack in the wall, empty road, no cars, no people` — 앵커 A 각도·로우 앵글 금지 |
| BACK_ALLEY · **RAMP-NOON** | P10 | `looking up at the top of the slope at noon: the basement car-park exit ramp with the grey roller shutter and the yellow-and-black striped barrier arm, a small plain security camera on a short bracket on the wall just above the shutter, the grey compact car parked next to the ramp, the security booth beside it with its window shut and nobody inside` (+ PROP 문장 §E2-3) |
| BACK_ALLEY · BOOTH (EP01 변주 재사용) | P40–P42 | EP01 §5 BOOTH 문장 그대로. 셔터가 프레임에 들어오면 CCTV 카메라 구절을 더한다 |
| BACK_ALLEY · **BOOTH-EMPTY** | P43 | `looking in through the open window of the small security booth: an empty chair, on the windowsill one paper cup in a hand-cut brown cardboard sleeve with no steam (the coffee gone cold), the small electric fan turning by itself, the old radio switched off, a bare nail on the wall where a cap usually hangs` |
| BACK_ALLEY · **TOP-LOOK-DOWN** | P44 | `from the very top of the slope beside the security booth, looking down over a man's shoulder: the narrow alley dropping away, tangled power lines, low rooftops, and far below at the bend the white streetlamp circle with red and blue light flickering on the walls; the bend itself hidden behind a wall, nobody visible` |
| BACK_ALLEY · **MID-SLOPE-RUN** | P45 | `the middle of the slope seen from behind a running man, the horizon tilted, power lines swaying overhead, below him the white streetlamp circle at the bend and red and blue light on the walls` |
| BACK_ALLEY · **ANCHOR-A** | P46 · P47 | §E2-4 / §E2-5 고정 구도 |
| BACK_ALLEY · **MIRROR-CLOSE** | P50 | `an extreme close-up of the round orange-rimmed convex mirror at the bend, filling most of the frame: inside its curved glass, the bent reflection of the alley with a tiny kneeling figure in the centre and, near the upper edge of the mirror at a wall corner up the slope, an even smaller standing silhouette of a man in a white shirt` |
| BACK_ALLEY · **BEND-CORNER** | P51–P56, P60 | `at the corner of a low wall just up the slope from the bend, a man half hidden behind the wall corner, the bend below out of focus` (P54·P56 배경 흐림 속 경찰 손·봉구 실루엣) |
| BACK_ALLEY · **BEND-HIGH-DOWN** | P59 | `a high-angle close view down onto the asphalt inside the empty circle of streetlamp light` (앵커 A 각도 아님) |
| DETENTION_VISIT (EP01 LOC 재사용) | P05–P08 | EP01 LOC 문장 그대로. P07 시그니처 반사: `the reflection of the man behind the glass half-overlapping the writing hand` |
| DETENTION_VISIT · EXT_GATE (EP01 변주 재사용) | P28 | EP01 문장 그대로. 이번엔 두 사람: `a man stepping out of the heavy grey steel gate and bowing deeply to a younger man waiting for him` |
| FIRM_FLOOR (EP01 LOC 재사용) | P11–P14, P25–P27, P37–P39 | EP01 LOC 문장 그대로. **진우 자리 컷(P11·P25·P37) = 회색 책상 전화기 프레임 밖**(beatsheet F13). P14 배경: `the partner's glass office by the window, a stocky thick-necked man seated on the low sofa inside, seen as a blurred silhouette` |
| FIRM_FLOOR · 파트너 유리방 안 (EP01 P37–38 변주 재사용) | P15–P24 | `inside the partner's glass office, blinds half lowered` + 기존 소파·정돈된 책상. 책상 위 `a plain file folder lying closed, showing only its blank back`. **호두나무 문 프레임 밖** |
| FIRM_FLOOR · 유리방 밤 | P57–P58 | `inside the lit glass office at night, a man standing by the dark window, the dark empty office floor reflected in the glass` — 호두나무 문·복도 끝 프레임 밖(🔒 「위」) |
| BUNSIK (EP01 LOC 재사용) | P29–P36 | EP01 LOC 문장 그대로 + L-BUNSIK-EVENING. 덕배 테이블 = 입구 쪽 작은 테이블 하나로 고정(P29–P35 같은 테이블), 진우는 그 맞은편 |

- 골목 표지 그대로: 흰 가로등 하나 + 주황 테 반사경 + 비탈 위 유리 타워. 낮(P09–P10)에도 같은 전봇대·반사경·벽 금이 같은 자리에 있다.
- **앵커 A 각도(비탈 아래에서 약간 로우 앵글로 굽이를 올려다봄)는 P46·P47 두 장에만** 쓴다. P02·P09·P45·P59는 다른 각도로(앵커 A 희석 방지).

## E2-3. 소품 토큰 (EP02 신규 · 확정판)

모든 소품: 글자·로고·숫자·각인·불빛 표시 없음(§9-1 그대로).

### PROP_BABY_SOCKS — 아기 양말 한 켤레 (L34, P41)
- `a pair of tiny plain white baby socks, each sock no longer than two fingers, soft cotton with a small folded cuff, no pattern, no print, no label, no lace, held together as a pair`
- 봉구의 두툼하고 짧은 손가락 사이, 근무복 가슴 주머니에서 막 꺼낸 순간. 양말이 손가락보다 작아 보이게(크기 대비가 감정). 색은 흰색만(초록·분홍 무늬 0).

### PROP_CCTV — 주차장 셔터 위 카메라 (L16, P10 · 셔터가 보이는 컷)
- `a small plain grey-white box-shaped security camera on a short wall bracket just above the car-park roller shutter, its lens tilted down at the ramp, no logo, no sticker, no lights, no LED, no text`
- 불빛(빨간 점)·안테나·경고판 0. 작게, 셔터 폭의 1/6 이하. P10에서 진우 시선의 끝(구도의 위쪽 3분의 1).
- EP02부터 셔터가 프레임에 들어오면 늘 같은 자리에 있다(P04 윤곽·P40 배경). EP01 P28 프롬프트에는 없다 — 아주 작으므로 EP01 이미지에 없어도 ACCEPT(플래그 E2-F5).

### PROP_PLASTIC_BAG — 무지 비닐봉지 (P01, P28)
- `a plain thin semi-transparent white plastic carrier bag with no print`
- P01 진우: `+ a roll of kimbap wrapped in silver foil faintly visible inside`. P28 덕배: `+ a folded navy vest faintly visible inside`. P29–P35에서는 덕배 의자 옆 바닥에(작게, 강조 0).

### PROP_FLASHLIGHT — 봉구의 손전등 (EP01 P27 손전등을 정식 토큰화, 판정 BA F2)
- 기본(EP01 P27과 같은 물건): `a plain black handheld flashlight`
- **LIT-ON-GROUND (P47 · P59):** `the same plain black handheld flashlight lying on its side on the asphalt, still switched on, its narrow white beam lying flat along the ground and pointing up the slope, away from the camera`
- P47에서는 **원본의 쓰러진 스쿠터 자리(왼쪽 가장자리)**에. 빛줄기는 비탈 위쪽(화면 안쪽)을 향해 누워 **오른쪽 아래 1/4 빈 면에 닿지 않는다.** 빛줄기는 가는 선 — 빛 번짐·광채·플레어 0(V7: 비현실은 "똑같다"는 것뿐).

### VEH_COMPACT — 낡은 회색 경차 (L48, P10 · P40 배경)
- `an old small grey compact hatchback car, slightly dusty, with a blank licence plate, no logo, no badge, parked next to the car-park exit ramp`
- EP01 BOOTH 변주의 `an old small grey compact car parked next to the ramp with a blank licence plate`와 **같은 차·같은 자리**. EP01 panel_028 이미지가 생기면 그 차의 위치(경사로의 어느 쪽, 차 앞이 향하는 쪽)를 그대로 따른다. 강조 0 — 배경의 일부, 프레임 가장자리, 초점 밖.

### PROP_HANDCUFFS — 수갑 (P46 원본 · P47 · P48)
- `plain silver police handcuffs with no engraving and no numbers` (EP01 §6 `plain silver police handcuffs`와 같은 물건; P46은 EP01 052 문자열 그대로)
- 닫히는 순간만. 손목의 상처·붉은 자국 0(15+).

### PROP_GUARD_CAP — 땅 위의 남색 모자 (V4, P47 · P59)
- `a plain navy peaked cap with no badge lying upside-down on the asphalt, the brim toward the camera`
- **P47 = 원본 헬멧 자리(앞쪽 땅, 왼쪽 가운데)**, 헬멧과 비슷한 크기로. P59 = 같은 모자 + 흰 수건 + 손전등 빛줄기.

### PROP_TOWEL_GROUND — 떨어진 흰 수건 (P48 · P59)
- `a white cotton towel lying crumpled on the asphalt`
- 봉구 외형 문장의 목 수건이 P48부터 땅에 있다(character-sheets EP02 additions §E2-1 BONGGU_ARRESTED).

### 기타 EP02 소품
- 테이크아웃 컵(P37, 태호): `a plain white takeaway coffee cup with a plain white lid and no print`.
- 떡볶이 접시(P29·P32): `a plain white plate of tteokbokki in bubbling red sauce with rising steam`, `plain wooden disposable chopsticks`.
- 폰 진동(P25·P55): PROP_PHONE + `the phone shown slightly trembling as a faint soft blur, no motion lines, no symbols, the screen only a blank soft glow`. P55: `+ red and blue reflections on the phone's glass`. 진동 표현은 뷰어 효과음이 맡는다(속도선·물결 기호 0).
- 수첩·만년필(P05·P07·P39): PROP_NOTEPAD(빈 쪽) + PROP_PEN 공통 문장. **EP01 P31 이후 진우의 펜은 BENT 상태**이지만 EP02에서는 **펜촉이 보이지 않게** — `the nib hidden behind his fingers`. 펜촉 클로즈업 0(L05는 EP03 마지막 컷 전용). P07 종이 면: `the page is a blank bright surface, no marks visible`.
- 진짜 카드(P03·P53): PROP_CARD_REAL — **주머니 가장자리로 깨진 오른쪽 위 모서리만** 보이고 엄지가 누른다. 긁힘이 안 보여도 ACCEPT(주머니 속). P53: `+ the thumbnail whitening from pressing hard`.
- 경비실 소품(P40·P43): EP01 BOOTH 문장 그대로(전기 포트, 무지 믹스커피 상자, 종이컵 더미, 선풍기, 라디오, 손으로 자른 슬리브 더미).

## E2-4. P46 규칙 — EP01 panel_052를 글자 그대로 복사 (판정 BB F9)

- P46은 **EP02 자기 패널 프롬프트**다(파일 공유 0, 출력 `_workspace/05_panels/ep02/panel_046.png`). 그러나 내용은 EP01 panel_052와 **같은 그림**이어야 한다.
- **prompt-smith 규칙:** `04_visual/ep01_prompts.md`의 panel_052 `prompt:` 문자열을 **처음부터 끝까지 한 글자도 바꾸지 않고** P46 prompt로 복사한다(GLOBAL 축약판·Panel style·Setting·Light·Character·Shot (fixed framing)·빈자리 문장·Avoid 줄 전부). 축약·재서술·순서 변경 금지.
  - panel-director의 P46 camera·composition·art_space 줄도 `ep01_shotlist.md` panel_052의 해당 줄을 글자 그대로 옮긴다.
  - 빈자리 문장(`Keep the lower-right quarter of the frame: dark empty asphalt and wall shadow as calm, empty background ...`)도 그대로 둔다 — P46은 무대사지만 **오른쪽 아래 1/4 빈 면은 앵커 A 구도의 일부**다(P47과 같은 자리가 비어야 운율이 선다).
- **attach:** `refs/DEOKBAE_sheet.png` + **`05_panels/ep01/panel_052.png`(그 이미지가 생긴 뒤)**. 그것을 첨부할 때만 프롬프트 맨 앞에 한 문장을 더한다: `Recreate the attached panel image as exactly as possible: same camera, same framing, same positions, same light.` 이 문장 외에는 EP01 문자열 그대로.
  - EP01 052가 아직 없으면 P46 카드 note에 "EP01 panel_052를 먼저 만들 것 / 만들어지면 그 이미지를 첨부" 표시.
- 검수: P46 = EP01 052와 가로등·반사경·덕배·헬멧·스쿠터·타워 불빛·빈 오른쪽 아래 1/4의 **위치가 같다**. 청회 탈색·가장자리 흐림(REG-MEMORY).

## E2-5. P47 규칙 — 앵커 A 현재 반복 (FRAME-ANCHOR-A-PRESENT)

P46(= EP01 052)과 **같은 카메라·같은 프레이밍·같은 광원 배치·같은 오른쪽 아래 1/4 빈 면**. 바뀌는 것은 ① 레지스터(현재: 정상 색·선명) ② 사람(덕배 → 봉구) ③ 물건 두 개(헬멧 → 남색 모자, 스쿠터 → 켜진 손전등). **진우는 프레임에 없다**(판정 BA F1).

**고정 구도 문장 (P47 prompt에 글자 그대로 — EP01 052의 Shot 문장에서 사람·물건만 바꾼 것):**
```
Shot (fixed framing, identical to the attached earlier panel): slightly low angle from down the slope up at the bend: a curved-arm cold white streetlamp upper left, a round orange-rimmed convex mirror upper right with a tiny reflection of the kneeling man; centre, a short round man kneels seen from behind, bare-headed, head bowed, a white towel around his neck, as plain silver handcuffs close on his wrists behind his back; a plain navy peaked cap with no badge lying upside-down on the ground, left-centre foreground, exactly where a helmet would lie; a plain black flashlight lying on its side at the left edge, still switched on, its narrow white beam lying flat along the ground pointing up the slope; up the slope, the small light of the tower's back door.
```
- 프롬프트 조립: GLOBAL STYLE TOKEN(EP01 052와 같은 축약판) → **Panel style 문장 없음**(현재 레지스터) → Setting: EP01 052의 `a narrow sloping alley bend at night, low brick walls; no signs.` 그대로 → Light: L-ANCHOR-PRESENT → Character: 봉구(모자 없는 외형 변주 + `BONGGU_ARRESTED`, character-sheets EP02 additions §E2-1·§E2-2) + `police only as dark sleeves and hands` → 위 고정 구도 문장 → 빈자리 문장(EP01 052와 **같은 글자**: `Keep the lower-right quarter of the frame: dark empty asphalt and wall shadow as calm, empty background with no important details (a speech bubble will be added there later).`) → `No other person in the frame; the cap is on the ground, not on his head.` → Avoid 줄(EP01 052와 같은 글자).
- **attach:** `refs/BONGGU_sheet.png` + **EP02 `panel_046.png`(없으면 EP01 `panel_052.png`)** — 구도 기준 이미지. 카드의 봉구는 모자를 썼으므로 `bare-headed` + 마지막 문장을 반드시 넣는다(플래그 E2-F3).
- 물건 위치 고정: 모자 = 헬멧 자리(앞쪽 땅 왼쪽 가운데) · 손전등 = 스쿠터 자리(왼쪽 가장자리) · 반사경 속 작은 무릎 꿇은 사람(V8) · 타워 뒷문 불빛(위 가운데, 작게) · 경광 반사(벽, 경찰차 0).
- 빈자리: **오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘** — 손전등 빛줄기·수건·경찰 손이 침범하면 REGEN. P47이 무대사여도 비운다(구도 운율 우선).
- 세로 배치: P46 → P47 **같은 폭, gap 0**(letterer `gap_after: 0`), 캡션·화살표 0.
- 15+: 수갑이 닫히는 순간과 등만. 경찰 얼굴·휘장 0. 넘어뜨림·제압 동작 0.
- **P48–P56·P59–P60**은 같은 굽이·같은 L-ANCHOR-PRESENT이지만 **앵커 A 각도를 쓰지 않는다**(E2-2 변주들).

## E2-6. 말풍선 자리 (art_space) — EP02 메모

- §8 규약 그대로. 장소별 빈자리: 접견 낮 = 위쪽 크림색 벽 / 한낮 골목 = 하얀 하늘 / 유리방 = 블라인드 위쪽 / 분식집 = 김·천장 / 밤 골목 = 밤하늘·담 그늘 / 유리방 밤 = 어두운 창 위쪽.
- **P25 `env` 「사흘 뒤」** = 위쪽 빈 면(창 위·천장). 폰 진동 효과음(P25·P55)은 폰 옆 빈 자리.
- **폰 화자(P56·P57·P60 태호):** P56·P60은 꼬리가 진우 귀의 폰을 향하므로 폰 쪽 위를 비운다. P57은 태호 본인이 보이는 컷 — 어두운 창 위쪽.
- **P46·P47 오른쪽 아래 1/4은 무대사여도 비운다**(구도의 일부, E2-4·E2-5).

## E2-7. 금지 / 반전 보호 (EP02 추가)

- **앵커 A 각도는 P46·P47만.** P47에 진우 0. P46과 P47 사이에 각도·크기 차이 0.
- 초자연 연출 0(V7): P46→P47 전환에 빛 번짐·이중 노출·겹침 효과·잔상 0. 손전등 빛줄기는 평범한 가는 빛.
- 🔒 「위에서」의 정체: 고문 0, 지팡이 0, 호두나무 문 0(P14·P15–P24·P57–P58 모두 프레임 밖). 태호는 P57에서 웃음 0이지만 악역 조명(아래서 비춤) 0 — 차갑게, 평범한 유리방 불빛.
- 🔒 수아(P29–P36): 아버지 어깨의 손은 평범한 딸의 손. 진우를 보는 시선·의미 있는 조명·리본핀 클로즈업 0(리본핀은 의상 연속성으로 작게 보이기만).
- W12: P34 덕배의 「건물 손님이…」 컷에 진우 얼굴·리액션 0, 조명 변화 0.
- L05: 진우의 만년필 펜촉 클로즈업 0(P05·P07·P39). L11: 진우 자리 컷에 책상 전화기 0.
- 법원·판사·법정 0(P26 전화는 진우만, 상대 0).
- 봉구 체포 15+: 얼굴 상처·넘어짐·제압·피 0. 웃음이 사라진 얼굴(P49)은 당혹으로, 울음·비명 표정 0.
- CCTV 카메라·경차·손전등에 로고·불빛 표시·번호판 글자 0.

## E2-8. EP02 체크리스트 추가 (panel-validator · quality-reviewer — §10-2에 더함)

- [ ] P05–P08 접견 복도에 **금빛 0**(흰 낮빛 + 형광). P28만 금빛 저녁.
- [ ] P29–P36 분식집 유리문 밖 = **푸른 저녁**(EP01 검은 밤과 다름).
- [ ] P10 셔터 위 무지 CCTV 카메라(불빛·로고 0), 회색 경차 번호판 무지·강조 0.
- [ ] P41 아기 양말 흰 무지, 손가락보다 작게.
- [ ] **P46 = EP01 052 같은 구도**(가로등 왼쪽 위·반사경 오른쪽 위·가운데 등·헬멧 왼쪽 가운데 앞·스쿠터 왼쪽 가장자리·타워 불빛·오른쪽 아래 1/4 비움), 청회 기억 레지스터.
- [ ] **P47 = P46 같은 카메라·광원·빈 면**, 현재 레지스터(탈색·흐림 0), 봉구 모자 없음 + 땅 위 남색 모자(헬멧 자리) + 켜진 손전등(스쿠터 자리, 빛줄기는 위쪽으로), 반사경 속 작은 사람, **진우 0**.
- [ ] P48 흰 수건 땅에. P49 봉구 모자 없음·금니 안 보임·웃음 꺼짐.
- [ ] P50 반사경 안 = 가운데 작은 무릎 꿇은 사람 + 가장자리 더 작은 흰 셔츠 실루엣.
- [ ] P57–P58 유리방 밤 — 호두나무 문 0, 태호 웃음 0, 커프스 강조 0.
- [ ] P12 태호의 손 = 크고 무겁게 움켜쥠(가볍게 얹는 FRAME-HAND-ON-BACK 구도 아님).
- [ ] 펜촉 클로즈업 0, 책상 전화 0, 수아 아는 눈빛 0.

## EP02 flags for the leader (style-bible)

| # | 플래그 | 요청 |
|---|---|---|
| E2-F1 | **P46 = EP01 panel_052 프롬프트 글자 그대로 복사**(판정 BB). 052 이미지가 생기면 첨부하고 `Recreate the attached panel image as exactly as possible…` 한 문장만 앞에 더한다. 052 이미지를 그대로 복사해 panel_046.png로 저장하는 길(가장 정확, 작업 1장 감소)은 판정 BB "파일 공유 0"에 따라 **적지 않았다** | 복사 저장을 허용할지만 결정 |
| E2-F2 | **P47 고정 구도 문장**은 EP01 052의 Shot 문장에서 사람·물건만 바꿨고, Setting·빈자리·Avoid 문장은 052와 같은 글자. Panel style(기억) 문장만 뺐다. attach = BONGGU_sheet + panel_046(없으면 EP01 052) | 확인 |
| E2-F3 | BONGGU_sheet의 봉구는 **모자를 썼다** → P47–P49·P54·P56에서 Flow가 모자를 다시 씌울 위험. `bare-headed` + `the cap is on the ground, not on his head` 고정. 모자를 씌우면 REGEN | panel-validator 기준으로 전달 |
| E2-F4 | **손전등 빛줄기는 비탈 위쪽(화면 안쪽)으로** 눕혔다 — 오른쪽 아래 1/4 빈 면을 지키고 빛 번짐을 막기 위해. 빛줄기가 빈 면에 닿거나 광채처럼 그려지면 REGEN | 확인 |
| E2-F5 | **CCTV 카메라는 EP02부터** 셔터 위 고정 소품. EP01 panel_028 프롬프트엔 없다(작아서 괜찮다고 판단, EP01 파일은 건드리지 않음). EP01 이미지에 없어도 ACCEPT | 확인 |
| E2-F6 | 비트시트에 이름이 없던 조명 **L-ALLEY-BOTTOM-NIGHT(P01)·L-FLOOR-AFTERNOON(P11–24)·L-FLOOR-LATE(P25–27)**를 문장으로 고정했다(비트시트의 "L-FLOOR-MORNING 계열/변주"). 새 장소 아님 | 확인 |
| E2-F7 | 비트시트 P05의 "PROP_PEN 새 펜"은 EP01 P31 이후 상태와 어긋난다 — **진우의 펜은 BENT 상태**이고 EP02에서는 펜촉을 가린다(L05 보호). 그림 결과는 같다 | 확인 |
| E2-F8 | P59는 앵커 A 각도가 아닌 하이 앵글 클로즈업(모자·수건·손전등 빛줄기). 경찰 손(선택)은 넣어도 얼굴 0 | panel-director 선택 |
