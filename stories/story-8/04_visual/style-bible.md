# Style Bible — 「다섯 개의 숟가락」 (story-8) · ស្លាបព្រាទាំងប្រាំ

- Panel aspect (화면비): **9:16 portrait** for every EP01 panel (Flow "9:16"). Character reference sheets: 16:9.
- 작성: art-director · 2026-11-25 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 입력: `00_input/brief.md`(LOCKED 1–7, 판정 A–AB, 특히 X–Z), `02_story/world.md` §6–§11, `02_story/characters.md` §9·§12(F9),
  `02_story/twist-plan.md` §0·§1·§3, `03_episode/ep01_script_final.md`, `03_episode/ep01_beatsheet.md`, `01_research/trend-brief.md`
- 짝 문서: `04_visual/character-sheets.md`(인물 토큰·의상·레퍼런스 시트 사양)
- 이 문서는 비주얼팀의 단일 기준(SSOT)이다. panel-director · letterer · prompt-smith · ref-sheet-artist · panel-validator가 모두 이걸 따른다.
- **이 작품 전용.** 다른 이야기(`rule4`, `poison`, `umbrella`, `gloves`, `revenge`, `story-7`)의 스타일 바이블·토큰을 재사용하지 않는다.
- Khmer edition: 이미지에는 **글자가 전혀 없다**. 말풍선은 뷰어(`km_tool.py build`)가 그린다. 아래 §7은 뷰어 말풍선을 위한 "빈자리" 규약이다.
- Flow 규칙: 프롬프트는 자기완결형. 이 문서의 토큰 이름(`LOC_*`, `PROP_*`)은 **프롬프트 안에 쓰지 않는다** — 토큰의 영문 문장을 그대로 풀어 붙인다.

---

## 1. 작화 스타일 (Art style)

현실 현대 가족 드라마. 판타지·초자연 0. 한국 언덕 동네의 생활감, 사람의 손과 물건이 이야기를 한다.

- **선화:** 깨끗하고 가는 디지털 선(얇은 균일선, 윤곽만 약간 굵게). 거친 펜·스케치 질감 금지. 머리카락은 덩어리 + 몇 가닥 잔머리.
- **채색:** 반사실(semi-realistic) 소프트 셀 셰이딩 — 2단 명암 + 부드러운 그라데이션, 피부에 은은한 홍조. 배경은 회화적 디지털 페인팅(사진 같지 않게, 그러나 구조는 정확한 원근).
- **비율:** 사실적 인체 비율(과장된 8등신·큰 눈 금지). 나이·체형 차이가 실루엣으로 읽혀야 한다(character-sheets §0 키 순서).
- **디테일:** 손·물건 클로즈업이 많다 → 손은 해부학적으로 정확하게(손가락 5개, 손톱, 마디, 굳은살·상처 표식). 물건은 재질감(크라프트지 섬유, 스테인리스 반사, 옥의 반투명)을 살린다.
- **연출 무드:** 영화적 조명(한 개의 주광원 + 깊은 그림자), 정적인 구도, 얼굴보다 손과 물건이 먼저 말한다. 과장된 만화 효과(속도선·땀방울·이모티콘 기호·집중선) 금지.
- **참조 무드(언어로만):** contemporary Korean family-drama webtoon, quiet cinematic realism, warm lamp light vs cold work light.

### 1-1. GLOBAL STYLE TOKEN (모든 패널 프롬프트 맨 앞에 그대로)

```
Contemporary Korean family-drama webtoon panel, semi-realistic digital illustration, clean thin line art, soft cel shading with gentle gradients, realistic human proportions, painterly detailed background with accurate perspective, cinematic single-source lighting, muted desaturated palette, quiet emotional realism, vertical 9:16 portrait composition.
```

### 1-2. 프롬프트 조립 순서 (prompt-smith)

`[GLOBAL STYLE TOKEN]` + `[LOC 문장 + 그 씬의 빛 변주]` + `[등장인물 외형 문장(character-sheets) + 그 패널 의상]` + `[PROP 문장(필요한 것만)]` + `[패널 고유 묘사: 샷·구도·연기·감정]` + `[art_space 빈자리 문장]` + `[Avoid 줄]`
- 레퍼런스 이미지는 `attach:`로 붙이고, 프롬프트에는 "matching the attached reference image of <name> (…key features…)"로 쓴다.
- 패널당 ≤250 단어(brief 운영 메모).

---

## 2. 색감 / 팔레트 (Colour)

### 2-1. 마스터 팔레트 (world §11-1 확정)

| 역할 | 이름 | HEX |
|---|---|---|
| 집의 빛 | lamp honey yellow | `#F2C46D` |
| 집 벽 | cream wall | `#EFE4CC` |
| 집 나무 | worn wood brown | `#A87B4F` |
| 가게의 빛 | cold work-light white | `#E8F0F4` |
| 진열장 금 | jewellery gold | `#C9A44C` |
| 뒷방 커튼 | faded plum curtain | `#6B3550` |
| 새벽 | dawn blue | `#5F7FA6` |
| 밤 | night navy | `#1E2A44` |
| 봉투 | kraft brown | `#B08A5B` |
| **악센트 1** | rubber-band red | `#C8332B` |
| **악센트 2** | jade green | `#2F6B4F` |

### 2-2. 채도 규칙 [고정]
- **빨간 고무줄과 초록 옥팔찌가 화면에서 가장 채도 높은 두 점이다.** 나머지 전부(옷·벽·소품·하늘)는 채도를 눌러 둔다.
- 어떤 인물의 옷·소품도 채도 높은 빨강·초록을 쓰지 않는다. **녹색 계열 옷 금지.** 새롬의 코랄은 연하고 탁하게(`#EE9E8A`), 빨강으로 읽히면 안 된다.
- 색 충돌 관리(characters F9 확인): 미자 머스터드 앞치마 ↔ 진열장 금 → 미자는 가게 장면에 앞치마 없이(`MIJA_OUT`) / 할머니 자주 몸빼 ↔ 뒷방 커튼 → 할머니는 골목에만 / 새롬 코랄 ↔ 고무줄 → 코랄은 저채도. EP01에서는 세 충돌 모두 장면이 갈려 실제로 겹치지 않는다.

### 2-3. 두 온도의 세계
| | 집 (TABLE · ENTRANCE) | 삼촌 가게 (SHOP · BACKROOM) | 바깥 (STAIRS · FACTORY) |
|---|---|---|---|
| 주광 | 노란 전등 하나, 가장자리 어둠 | 차가운 흰 작업등 + 금빛 반사 / 초록 기운 형광등 | 새벽 푸른빛 · 노을 주황 · 밤 남색 + 노란 가로등 · 나트륨 주황 |
| 색 | 꿀색 · 크림 · 바랜 나무 · 스테인리스 은색 | 흰색 · 회청 · 검은 벨벳 · 금 · 자주 커튼 | 남색 · 회색 시멘트 · 주황 · 밀가루 흰색 |
| 감정 | 온기, 그러나 말할 수 없음 | 친절, 그러나 밀실 | 피로, 엇갈림, 시선 |

---

## 3. 분위기 · 조명 (시간대별 빛 = 이야기 시계)

EP01에서 시간 이동은 **빛**으로 읽힌다(시계·달력은 빈 면). 아래 문장을 그 씬의 LOC 문장 뒤에 붙인다.

| 코드 | 언제 (EP01 패널) | 영문 조명 문장 (프롬프트에 그대로) |
|---|---|---|
| L-NIGHT-LAMP | 28일 밤 콜드오픈 P01–04 | `late night, the single yellow pendant lamp is the only light, a tight warm pool on the table, everything beyond the table falls into deep navy-black shadow, still and silent` |
| L-DAWN-OUT | 14일 새벽 05:55–06:15 P05–08 | `pre-dawn blue hour, cold blue light, faint peach glow at the far horizon, streetlamps still glowing yellow, visible breath vapour in the cold air` (공장 앞엔 `+ orange sodium lamp above the staff door`) |
| L-DAWN-KITCHEN | 14일 새벽 06:20–06:35 P09–14 | `early morning, cold grey-blue light through the small frosted window, one fluorescent tube above the stove, the pendant lamp is off, quiet and empty` |
| L-DINNER | 14일 18:40 P15–32 | `evening family dinner, the warm yellow pendant lamp glows over the table, steam rising from rice bowls, cosy honey-coloured light with soft shadows at the room edges` |
| L-NIGHT-STAIRS | 14일 21:30 P33–39 | `night, deep navy sky, one yellow streetlamp on each landing making pools of warm light down the stairs, cool night air` |
| L-SUNSET | 15일 ~17:20 P40–41 | `late-autumn sunset, low orange sunlight cutting diagonally across the cement steps, long shadows, the alley below already in cool shade` |
| L-SHOP-NIGHT | 15일 20:40 P42 | `night, the dark alley outside, the small shop is the only bright white place, cold white work lamp, warm gold glints from the display cases` |
| L-BACKROOM | 15일 20:42–21:15 P43–56 | `a single ceiling fluorescent tube with a faint greenish tint, cramped and dim, a thin blade of cold white light through the curtain gap` |
| L-ENTRANCE-NIGHT | 15일 21:40 P57–60 | `night, all house lights off, only the single bare incandescent bulb above the entrance glows warm yellow, outside the door the alley is navy dark with one yellow streetlamp` |

- 조명 성향: 한 개의 주광원 + 깊은 그림자. 림라이트는 밤 장면에서만 약하게. 하이키 금지.
- 감정 컷(P53–56, P60)은 배경을 더 어둡고 단순하게 눌러 얼굴·손만 남긴다.

---

## 4. 화면비 · 캔버스 (Aspect / canvas)

- **모든 패널: 9:16 세로(Flow `9:16`).** 와이드 샷(탑다운 P01, 계단 하이앵글 P41, 식탁 와이드 P15·P24)도 9:16 안에서 위·아래 공간으로 연출한다. 프롬프트 끝 GLOBAL 토큰의 "vertical 9:16 portrait composition"과 Flow 설정 둘 다 9:16.
- Flow에 9:16이 없으면 가장 가까운 세로 비율(3:4)을 고른다. 패널마다 비율을 바꾸지 않는다(뷰어 리듬·말풍선 % 좌표 일관).
- **레퍼런스 시트: 16:9 가로**(턴어라운드 4포즈 / 표정 4–6컷이 한 줄에 들어감).
- 패널 크기감(large/medium/small/insert)은 뷰어의 `gap_after`와 구도(인물 크기)로 만든다. 이미지 비율로 만들지 않는다.
- 모든 패널은 **위쪽 15–30% 또는 아래쪽 15–25%** 중 최소 한 곳에 말풍선용 빈자리를 남긴다(§7).

---

## 5. 일관성 규약 (Consistency)

1. **불변 vs 가변.** 인물 외형 문장(character-sheets의 APPEARANCE)은 글자 하나 바꾸지 않고 매 패널 붙인다. 표정·포즈·의상·조명만 패널마다 바꾼다.
2. **의상은 날짜·장면에 묶인다.** 같은 씬 안에서 옷이 바뀌지 않는다(character-sheets §1 의상표).
3. **장소는 씬에 묶인다.** 같은 scene_id 안에서 LOC 문장·조명 문장이 같다. 장소 전환은 SCENE BREAK에서만.
4. **소품은 하나의 문장.** 같은 PROP은 모든 패널에서 같은 영문 문장(§6-B). 특히 봉투·팔찌·숟가락은 반전의 증거이므로 모양·색·접힘·고무줄 위치가 패널마다 같아야 한다.
5. **"같은 각도·같은 크기" 쌍:** P19(우진 손목의 팔찌) ↔ P48(서랍 속 팔찌). 둘 다 `bangle seen at a three-quarter angle from slightly above, filling about 40% of the frame width, the cracked and gold-repaired section facing the camera at the upper right of the ring`. 차이는 §6-B의 진품/복제품 문장뿐.
6. **봉투 쌍:** P50(삼촌이 하린에게 준 납작한 빈 봉투) ↔ P58(우진 패딩에서 떨어진 납작한 빈 봉투) ↔ P13·P10(하린 봉투) ↔ P01(다섯 개) — 같은 봉투 문장, 빈/찬 변주만.
7. **3회 노출 패딩:** P15·P27·P32(의자 등받이) → P41(노을 원경, 아주 작게) → P57(현관) — 같은 검은 숏패딩 문장.
8. **손만 나오는 컷의 신원 표식:** 얼굴이 없으면 소매·손 표식으로 누구인지 보이게 한다(character-sheets §2의 HAND ID).

---

## 6. 장소 고정 토큰 (LOC_*) — 6곳 [고정, 리더 판정 L]

각 LOC는 **자기완결 영문 문장**이다. prompt-smith는 이 문장 + §3 조명 문장을 그 씬의 모든 패널에 그대로 붙인다. 문장 속 고정 요소는 매번 같은 자리에 있다.

### LOC_HOME_TABLE — 집 부엌 겸 식탁 (S1 · S4 · S5)
```
A cramped kitchen-dining room on the ground floor of an old Korean house: yellowish vinyl linoleum floor, pale cream wallpaper with a tiny faded pattern, a square light-brown wooden dining table with chipped paint on its corners, five mismatched chairs (four plain wooden chairs and one grey metal folding chair), a single cream plastic-shaded pendant lamp hanging low over the table, a gas stove and a stainless steel sink against the back wall with a plain dish shelf above, a pale mint-green refrigerator with a few plain round magnets and no notes, a blank wall calendar of plain paper with no numbers, one small frosted-glass window.
```
- 자리 배치 [고정]: 머리 자리 = 아버지(창 반대편 끝) · 레인지 쪽 = 어머니 · 아버지 오른쪽 = 하린 · 하린 맞은편 = 우진 · 철제 접이식 의자(아버지 맞은편 끝) = 새롬. 우진 의자 등받이에 검은 숏패딩(S5 내내).
- 식기: 스테인리스 밥그릇·국그릇, 흰 사기 반찬 접시, PROP_SPOONS, 스테인리스 납작 젓가락.
- **콜드오픈 탑다운(P01):** `seen from directly above, straight top-down view from just under the pendant lamp, the table fills the frame; the head of the table is at the top of the frame`. 이 앵글은 시리즈에서 콜드오픈과 아크 1 피날레에만.
- S4 새벽: 펜던트 꺼짐, 레인지 위 형광등 + 창의 회청빛. S1·S5: 펜던트.

### LOC_HOME_ENTRANCE — 집 현관 (S10)
```
The entrance of an old Korean house seen from inside: a low raised wooden step-up ledge where shoes are taken off, a grey cement floor below it with a few pairs of family shoes, a plain wooden shoe cabinet with a small dish on top, a single bare incandescent light bulb above the doorway, a sliding entrance door made of textured frosted-glass panes in a worn wooden frame; when the door is open, a small cement yard, an iron gate and the dark alley are visible beyond.
```
- 신발 [고정]: 하린 = 낡은 흰 운동화(바닥, 턱 아래) · 아버지 = 굽 닳은 검은 구두 · 그 밖 평범한 슬리퍼·운동화 몇 켤레(글자·로고 없음). 우진 = 흰 스니커즈(하린 것보다 덜 낡음).
- 간유리 너머 실루엣은 흐릿하게만(EP02 재사용). P57 카메라: 집 안쪽, 하린 등 뒤에서 열린 문틀을 향해.

### LOC_ALLEY_STAIRS — 언덕 골목 계단 (S3 P08 · S6 · S7)
```
A narrow zigzag cement stair alley climbing an old hillside residential neighbourhood, just wide enough for two people to pass, low cement-and-brick walls on both sides with cracked flowerpots and a cat on top, a few electric wires overhead, one yellow streetlamp on a pole at each landing, an old low wooden outdoor platform bench on the middle landing; far below, the alley entrance at the corner where a small shop glows white.
```
- 할머니의 평상은 중간 층계참. 가게의 흰 불빛은 **아래쪽 골목 입구**(위에서 내려다볼 때 프레임 아래쪽).
- P41 하이앵글: 계단 위에서 내려다본 골목, 가게 모퉁이가 프레임 아래쪽 작게.

### LOC_UNCLE_SHOP — 삼촌 금은방 앞가게 (S3 P07 바깥 · S8 P42)
```
A narrow, deep little gold and jewellery buying-and-repair shop on the corner where a wide road turns up into a hillside alley: a full glass storefront and glass door with a small brass bell above it, a blank white acrylic sign board above the window with nothing on it, two low glass display cases with gold necklaces and rings laid on black velvet and no price tags, behind them a workbench with a folding-arm cold white work lamp, a jeweller's loupe, a small scale, a silver thermos and a small wooden photo frame seen only from the back, one round customer stool, a plain wall clock with hands only and no numerals, a dark plum-purple cloth curtain at the back leading to a back room.
```
- P07(새벽, 바깥): 진열장은 어둡고, 가게 깊숙이 흰 작업등 한 줄만 켜져 있다. P42(밤, 유리문 밖→안): 골목에서 유일하게 하얀 가게.
- 사진 액자는 **항상 뒷면만**(갈색 나무 받침). 시계는 바늘만.

### LOC_UNCLE_BACKROOM — 삼촌 가게 뒷방 (S9 · 반전의 방)
```
A small, cramped back room behind a faded dark plum-purple cloth curtain: a low wooden floor table with two flat floor cushions, a silver stainless thermos and two plain white teacups on the table, a small closed black-covered ledger on the table, a wooden chest of many small drawers with brass pulls against the wall with a stack of folded plain kraft envelopes bundled with red rubber bands on top of it, a small black steel safe in the corner with its dial turned away, a single ceiling fluorescent tube.
```
- **문제의 서랍 [고정]:** 서랍장 **왼쪽 줄, 위에서 두 번째 칸**. 안쪽에 남색 천이 깔려 있다. P47 반쯤 열림 → P48 하린 시점 극단 클로즈업 → P49 삼촌이 손끝으로 밀어 닫음.
- 앉는 법: 바닥 방석. 삼촌은 서랍장 쪽, 하린은 커튼 쪽(입구 등지고).
- 장부는 늘 덮임 — 삼촌 손바닥이 덮는다. 금고 다이얼 숫자는 보이지 않게.

### LOC_FACTORY_GATE — 제빵 공장 정문 (S2)
```
The side entrance of a mid-sized industrial bakery on a wide road: a grey metal panel wall, a large closed roller shutter, a staff steel door with an orange sodium lamp above it, a small guard booth, a row of grey steel lockers with no name tags near the door, stacks of empty plain plastic bread crates under the shutter, dry cement ground.
```
- P05: 위쪽 하늘 면을 비워 둔다(`env` 「2주 전」 자리).

---

## 6-B. 고정 소품 토큰 (PROP_*) [고정]

모든 소품: **글자·로고·숫자·마크 없음.** 아래 영문 문장을 필요한 패널에 그대로.

### PROP_ENVELOPE — 갈색 봉투 (시리즈 핵심 증거)
- 공통: `a plain kraft-brown paper envelope (#B08A5B tone) folded three times into a compact palm-sized rectangular packet with crisp visible fold creases, held by a single thin bright red rubber band wrapped once horizontally around its middle, completely blank with no writing or marks`
- **빈 것(FLAT):** `+ flat and thin, clearly empty` — P50 삼촌이 접어 주는 것, P58–59 우진의 것, P61 없음, 서랍장 위 다발(빈 봉투 묶음: 여러 개를 빨간 고무줄로 묶은 다발).
- **찬 것(FULL):** `+ slightly puffed and thicker, with a stack of banknotes inside` — P44 하린이 내미는 것(그래도 "가볍다": `only slightly thicker than an empty one`).
- **콜드오픈(P01):** 다섯 개가 **완전히 같은** 모양으로 부채꼴, **맨 위 하나만 살짝 부풂**(과장 금지), 그 끝이 프레임 위쪽(머리 자리)을 향함.
- 펼친 상태(P10 하린이 펴서 돈을 넣을 때): `the same kraft envelope unfolded flat on the table, its red rubber band set aside beside it`.
- 다섯 개 + 삼촌 다발 = 전부 같은 크기·색·고무줄. 다른 색 고무줄·다른 봉투 모양 금지.

### PROP_BANKNOTES — 지폐
- `a small stack of plain paper banknotes in muted grey-green and pale tan, completely blank: no numbers, no portraits, no letters, no symbols, only a faint plain border`
- P10: `as each note is counted, its top-right corner is folded down into a small triangle`(손 극단 클로즈업, 설명 없음).
- 많고 적음은 **두께**로만. P11: 얇은 다발.

### PROP_SPOONS — 숟가락 다섯 개
- `plain stainless steel Korean spoons with a shallow round bowl and a long flat straight handle, simple and slightly worn`
- **하린 것만:** `the handle tip of Harin's spoon is slightly bent upward` — **P09·P14에서만 보이게.**
- **콜드오픈 P01–02 [고정, 판정 Y/TW2]:** 숟가락 넷과 식은 밥그릇이 **자리별이 아니라 봉투 주변에 흐트러져** 있다. **모든 숟가락 손잡이 끝은 그릇·봉투·그림자에 가려 휘었는지 보이지 않는다.** P02: 장판 위 숟가락 하나, `its handle end hidden in the shadow of a chair leg`.
- P23 아버지가 내려놓는 숟가락은 평범한 곧은 숟가락.

### PROP_BRACELET (진품) / PROP_BRACELET_COPY (복제품) — 판정 Z 최종: 두 개
- 공통 베이스: `a deep green jade bangle (#2F6B4F), smooth and rounded, about 1.2 cm wide, with one diagonal crack on its outer side`
- **진품(서랍, P48):** `+ the crack is wrapped by a thin raised gold repair band (about 3 mm wide, slightly embossed, catching the light), and a single thin white cloud-like streak runs inside the jade` — `lying on navy cloth inside a half-open wooden drawer, next to a flat kraft envelope with a red rubber band`.
- **복제품(우진 손목, P19–21):** `+ the crack is covered by a flat painted gold line (not raised), and the jade has no white streak, uniform green`.
- **두 개의 차이는 "도드라진 금 테 + 흰 구름 무늬" 단 둘뿐.** 색·폭·금 간 위치·각도·크기는 같다(§5-5). P19에서는 스케일상 도드라짐 차이가 거의 안 보여도 된다; **흰 구름 무늬가 없는 것**만은 지킨다.
- **우진 손목에서 보이는 곳:** P19(새롬이 손목을 잡아 돌아감, 금색 선 번쩍), P20(빼는 손목), P21(오른손이 덮음). **P29·P57–60: 왼손목은 소매 안, 팔찌 보이지 않음.**

### PROP_RING_MARK — 미자의 반지 자국
- `on Mija's left ring finger, a pale band of lighter skin about 5 mm wide where a ring used to be; no ring is worn` — **어떤 장면에도 반지를 그리지 않는다.** P18 전경 손.

### PROP_BLACK_PUFFER — 우진의 검은 숏패딩 (3회 노출)
- `a matte black short puffer jacket with horizontal quilted baffles, hip length, stand collar, plain with no logo`
- P15·P27·P32: 우진 의자 등받이에 걸림(배경) / P41: 원경의 아주 작은 뒷모습 + 검은 백팩 / P57–59: 착용, 안주머니에서 봉투가 미끄러짐.

### PROP_HAIRNET — 하린의 흰 공장 머리망
- `a white disposable-style elastic factory hairnet` — P05–06: 벗어서 **오른손**에 쥠. 정수리 머리가 눌려 납작.

### PROP_LEDGER — 삼촌 장부
- `a palm-sized notebook with a plain black cover and worn corners, always closed` — 펼친 면 금지. P43: 삼촌 손바닥이 덮는다.

### PROP_THERMOS — 보온병과 찻잔
- `a silver stainless steel thermos and two plain white ceramic teacups without handles` — P33–39: 삼촌이 들고 걷는다. S9: 탁자 위. P53: 찻잔 속 차 표면 잔물결.

### PROP_PHOTO_FRAME — 뒷면만 보이는 액자
- `a small photo frame seen only from the back, plain brown wooden back with a fold-out stand` — 작업대 위. 앞면 금지.

### PROP_BREAD_BAG — 남은 빵 봉지
- `a clear plain plastic bag holding a few soft plain bread rolls, no label` — P06·P07·P09, P15–16(빵 한 개 남음).

### PROP_RICE_SACK (선택, 판정 Y/TW8)
- `a plain off-white woven rice sack tied at the top, no print` — P15·P22 조리대 위(미자가 국자로 가리킴).

### PROP_DRAWER_CHEST · PROP_SAFE (뒷방 고정물)
- 서랍장: `a wooden chest of many small drawers with small brass pulls` / 금고: `a small black steel safe, dial turned away, no numbers visible`.

### PROP_SHOP_BELL
- `a small brass bell hanging above the shop's glass door` — 소리는 뷰어 `sfx`(딸랑). 이미지에는 종만(필요할 때).

### 기타 무글자 물건
- 휴대폰(EP01 등장 없음): 화면 꺼짐·뒤집힘·손으로 가림.
- 백팩: 검은 무지(하린·우진), 남색 무지(새롬, EP01 미등장). 로고 없음.

---

## 7. 말풍선 자리 규약 (art_space · Khmer edition)

**이미지에는 말풍선이 없다.** 뷰어가 크메르어 말풍선을 이미지 위에 그린다(`km_tool.py build`, 위치는 letterer의 `place`). 그래서 이미지는 말풍선이 올라갈 **조용한 빈자리**를 남긴다.

- **letterer가 패널마다 `art_space`를 쓴다**(예: "upper 25% of the frame, plain navy night sky"). prompt-smith는 그것을 영어로 이렇게 넣는다:
  `Keep the <area> as calm, empty background with no important details (a speech bubble will be added there later).`
- **기본 빈자리 (9:16 기준):** 위쪽 15–30%(하늘·천장·벽·어둠) 또는 아래쪽 15–25%(바닥·식탁 면·그림자). 대사 2–3개 패널(P35 등)은 위·아래 둘 다.
  얼굴·손·핵심 소품(봉투·팔찌·숟가락)은 빈자리 밖, 프레임 중앙 40–75% 높이대에 둔다.
- **장소별 좋은 빈자리:** TABLE = 펜던트 위 어두운 천장 / 탑다운이면 식탁 가장자리 어둠 · ENTRANCE = 전구 위 어두운 벽, 문틀 밖 남색 밤 · STAIRS = 남색 하늘·노을 하늘 · SHOP = 어두운 천장·유리 밖 어둠 · BACKROOM = 어두운 천장·커튼 면 · FACTORY = 새벽 하늘(P05 `env` 자리).
- 뷰어 말풍선 종류(그림이 아니라 뷰어가 그린다): `dialogue`(흰 둥근 풍선 + 꼬리) · `thought`(구름/점선, 꼬리 없음) · `shout` · `narration`(사각 캡션) · `memory`. 글꼴: Battambang(대사) · Fasthand(손글씨) · Koulen(외침·효과음·간판).
- `env`(P05 「2주 전」)와 `sfx`(끼익·탁·딸랑·스륵)도 뷰어가 쓴다 → 해당 자리 비움.
- 무대사 패널(P01·02·03·07·10·19·21·40·41·48·53·55·58·59·60)은 빈자리를 억지로 만들지 않아도 된다(`silent: true`).
- 말풍선 폭 규칙(뷰어): `x + w ≤ 100`. 프레임 가장자리에 화자를 두면 꼬리가 들어갈 공간을 생각한다.

---

## 8. 금지 / 주의 (Prohibitions)

### 8-1. 무글자 규칙 [고정 — world §8]
| 물건 | 그리는 법 |
|---|---|
| 봉투 | 완전 무지 크라프트, 앞뒤 아무 표시 없음 |
| 지폐 | 숫자·초상·문자·기호 없는 흐린 녹회색/연갈색 종이 |
| 장부 | 검은 표지, 늘 덮임 |
| 가게 간판 | 흰 아크릴 판, 빈 면 |
| 달력 / 시계 | 빈 종이 / 바늘만, 숫자 없음 |
| 금고 다이얼 | 돌아가 있어 숫자 안 보임 |
| 휴대폰 | 화면 꺼짐·뒤집힘·가림 |
| 빵 봉지·바구니·쌀 포대 | 무지 |
| 옷·가방·신발 | 로고·글자·숫자·명찰·엠블럼 없음 |
| 공장 사물함·경비실·버스정류장 | 이름표·표지 없음 |

### 8-2. 모든 프롬프트의 마지막 줄 [고정]
- 패널: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`
- 레퍼런스 시트: `Avoid: any text, labels, speech bubbles, watermark.`
- 필요하면 그 앞에 "blank" 묘사를 긍정형으로 넣는다(예: `the sign board is blank white`, `the banknotes are completely blank`).

### 8-3. 연출 금지
- **씬 안에서 장소·시간대·조명이 바뀌지 않는다**(배경 급변 금지).
- 과장된 만화 기호(땀방울·집중선·이모티콘·하트) 금지. 판타지 광채·마법 효과 금지.
- 15+: 피·부상 묘사 없음(우진 손 마디는 작은 긁힌 자국 + 반창고 1개까지).
- **삼촌을 악역 인상으로 그리지 않는다**: 날카로운 각·찡그린 미간·짙은 눈 그림자 금지. 차가움은 "웃음이 사라진 무표정"으로만(P46, P55–56).
- 금붙이를 걸친 삼촌 금지(반지·시계·목걸이 없음).
- 미자의 반지 금지(자국만).
- 반전 보호: P01–02 숟가락 손잡이 끝 노출 금지 · P41 원경 인물 얼굴·팔찌 노출 금지(아주 작게) · P57–60 우진 팔찌 노출 금지 · P19 팔찌에 흰 구름 무늬 금지.
- 다른 이야기의 소품·장소 금지(우산 소품 금지 — 비 장면 없음).

---

## 9. 하류 전달 요약

- **panel-director:** 모든 패널에 `scene_id`/`LOC_*` + 조명 코드(§3). S1/S4/S5 = TABLE, S2 = FACTORY, S3 = SHOP 바깥(P07) → STAIRS(P08), S6·S7 = STAIRS, S8 = SHOP, S9 = BACKROOM, S10 = ENTRANCE. 빈자리(§7) 고려한 구도.
- **letterer:** §7 빈자리 규약. 9:16 % 좌표.
- **prompt-smith:** §1-2 조립 순서, §3 조명 문장, §6 LOC 문장, §6-B PROP 문장, §8-2 Avoid 줄. `aspect: 9:16`.
- **ref-sheet-artist:** character-sheets §4 사양, `aspect: 16:9`.
- **panel-validator:** C2 배경 연속성 = §6 고정 요소, C3 = 무글자 + art_space 비움, 소품 쌍(§5-5·5-6) 일치 확인.
