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

---
---

# EP02 additions (2026-11-25) — 「엄마는 웃고 있었다」

- 작성: art-director · Phase 4 · 입력 `00_input/brief.md` EP02 절 + 판정 EA–EC, `03_episode/ep02_beatsheet.md` §0-1·§6(F2–F9), `ep02_script_final.md`(편집자 권고: 간유리 역광).
- **위 EP01 섹션(§1–§9)은 바꾸지 않았다.** EP02는 아래 항목만 더한다. GLOBAL STYLE TOKEN · 조립 순서 · 9:16 · 무글자 · Avoid 줄 · 채도 규칙은 그대로 적용.
- 토큰 이름(`LOC_*`, `L-*`, `PROP_*`)은 여전히 프롬프트에 쓰지 않는다 — 영문 문장을 풀어 붙인다.

## 10. EP02 장소·조명 지도

| scene | 패널 | LOC | 조명 코드 | 비고 |
|---|---|---|---|---|
| S1 15일 21:40 | P01–06 | LOC_HOME_ENTRANCE (기존) | L-ENTRANCE-NIGHT (기존) + §10-2 메모 | EP01 P57–60 직결 |
| S2 16일 새벽 | P07–26 | LOC_ALLEY_STAIRS (기존) | **L-DAWN-STAIRS** (신규) → P26 **L-DAWN-STAIRS-LATE** | |
| S3 17일 18:40 | P27–40 | LOC_HOME_TABLE (기존) | L-DINNER (기존) | 쌀통 추가(§10-4) |
| S4 17일 ~19:30 | P41–43 | LOC_HOME_TABLE 싱크대 쪽 (기존) | L-DINNER (기존) + §10-2 메모 | 싱크대 위 작은 간유리 창 |
| (P52 회상) | P52 | LOC_HOME_TABLE (P33 원본) | L-DINNER + **FLASHBACK-INSERT** 처리(§10-6) | |
| S5 18일 노을 | P44–45 | LOC_ALLEY_STAIRS (기존) | L-SUNSET (기존, 그대로) + P45 메모 | 원경 단역(§10-5) |
| S6 18일 21:15 | P46–58 | LOC_HOME_ENTRANCE (기존, 안쪽) | **L-ENTRANCE-EVENING** (신규) | 간유리 너머 미자 실루엣 |
| S7 18일 ~21:20 | P59–62 | **LOC_HOME_YARD** (신규) | **L-YARD-NIGHT** (신규) | 간유리 안쪽 하린 실루엣 |

## 10-1. 신규 장소 — LOC_HOME_YARD (현관의 바깥 역방향, P59–62)

LOC_HOME_ENTRANCE와 **같은 집, 같은 문**을 바깥 마당에서 본다. 문틀·간유리 무늬·문 크기는 ENTRANCE 문장과 같아야 한다.
```
The small front yard of an old two-storey Korean house of red brick patched with grey cement, seen from the yard side: a narrow grey cement yard only two or three steps deep; on one side the house's sliding entrance door of textured frosted-glass panes in a worn wooden frame, glowing warm yellow from the single bare bulb inside; a few plain terracotta flowerpots along the base of the wall; a sagging laundry line overhead with one or two plain cloths; directly opposite the door, a low black iron gate, and just beyond the gate in the alley one tall yellow streetlamp; no house number, no nameplate, no writing anywhere.
```
- **배치 [고정]:** 간유리 문 ↔ 마당 2–3걸음 ↔ 낮은 철제 대문 ↔ 그 바로 너머 골목 가로등이 **한 줄로 마주 본다**. 이 배치가 S6 실루엣의 물리 근거다(가로등이 미자 뒤에서 간유리를 비춤 — 편집자 플래그). 대문을 문 옆쪽으로 옮기지 않는다.
- 카메라별: P59 측면 와이드 = 대문(가로등)과 문이 프레임 양쪽, 미자는 그 사이 / P60 미자 어깨 너머 → 문 정면(카메라 등 뒤가 대문·가로등) / P61 미자 정면, 그녀 앞(카메라 쪽)이 노란 문 / P62 문 정면, 카메라는 대문 쪽에 등을 둔다.
- 빨랫줄은 프레임 위 1/3 안에서 가늘게, 그 위 남색 하늘·담 위 어둠은 비워 둔다(무대사 컷이어도 구도 여백 유지). 화분은 아래쪽 벽 밑.
- 집 바깥에는 **외등 없음** — 마당은 가로등과 문에서 새는 빛만으로 밝다.
- 무글자: 문패·번지 판·우편함 글자·계량기 숫자 없음.

## 10-2. 신규·변주 조명 문장

| 코드 | 언제 | 영문 조명 문장 (그대로) |
|---|---|---|
| L-ENTRANCE-NIGHT 메모 (S1) | P01–06 | 기존 문장 그대로. P04만 `+ a single thin line of light leaks from under a bedroom door at the far end of the dark hallway`. 현관문 상태는 플래그 AE1. |
| **L-DAWN-STAIRS** | P07–25 | `pre-dawn blue hour on the hillside stairs, cold blue light, a faint peach glow at the far horizon, the landing streetlamp still glowing yellow, visible breath vapour in the cold air, the empty wooden bench on the middle landing` — EP01 L-DAWN-OUT에서 공장 나트륨 등을 뺀 계단판. **P14부터** 가로등 부분을 `the landing streetlamp has just switched off`로 바꾼다(P14 이후 다시 켜지지 않음). |
| **L-DAWN-STAIRS-LATE** | P26 | `early dawn, the sky brightening to pale blue with a wider peach glow along the horizon, streetlamps off, cool soft light, the small shop at the alley entrance far below still glowing white` |
| L-DINNER 메모 (S4) | P41–43 | 기존 문장 그대로 + `the small frosted-glass window above the sink is dark navy with evening outside`. 싱크대는 뒷벽, 그 위 작은 간유리 창(P42 하린 시선). |
| L-SUNSET 메모 (S5) | P44–45 | EP01 문장 **그대로**(18일 노을 = 15일과 같은 빛, 날짜 경과의 각운). P45만 `+ far below, the small corner shop already glows white in the cool shade`. |
| **L-ENTRANCE-EVENING** | P46–58 | `night, the house lights are on: the single bare incandescent bulb above the entrance glows warm yellow on the inside and a dim warm spill of light comes from the hallway behind; the frosted-glass panes of the closed sliding door glow a dim yellow-grey from a streetlamp outside that stands directly behind the door in the alley, so a person standing in the yard appears on the glass only as a soft, blurred, dark navy silhouette with no features` |
| **L-YARD-NIGHT** | P59–62 | `night in the small cement yard, deep navy sky, the yellow streetlamp beyond the low iron gate throws warm light over the gate and casts the gate bars' shadows across the cement, the frosted-glass entrance door glows warm yellow from the bare bulb inside and spills a soft yellow rectangle of light onto the yard floor, visible breath vapour in the cold air` |

**실루엣 규칙 [고정 — 편집자 플래그 3]**
- **미자 (P47–58, 안에서 본 간유리):** 빛 = 그녀 **뒤** 골목 가로등. 모양 = 짧은 파마의 둥근 머리, 둥근 어깨, 앞치마 윤곽, (통화 중) 귀에 댄 손. 문에서 한두 걸음 떨어진 P47–56은 **많이 흐리게**, 한 뼘 거리로 다가선 P57–58은 **조금 더 또렷하게**(간유리는 가까울수록 선명 — 검수에서 불일치로 보지 않는다). 얼굴·이목구비·휴대폰 화면빛 금지.
  - 대비 확보: 집 안 빛은 "전구 + 복도의 약한 번짐"까지만. 안이 너무 밝으면 유리에 실루엣이 안 보인다 → 복도 불빛을 키우지 않는다. P51만 `a faint warm reflection of the entrance bulb on the inner surface of the glass` 추가(대본 지문).
- **하린 (P60·P62, 마당에서 본 간유리):** 빛 = 그녀 **뒤** 집 안 맨 전구. 문 바로 뒤에 붙어 서 있으므로 미자보다 **진하고 또렷한** 어두운 실루엣: 낮은 포니테일, 백팩 어깨끈, 머리 뒤 전구의 노란 후광. 손바닥은 플래그 AE3대로.
- 두 방향 모두 유리 무늬(오돌토돌한 간유리 질감)와 나무 문살 칸 수를 같게.

## 10-3. 신규 소품 — PROP_PHONE (미자의 휴대폰)
- `a plain dark charcoal smartphone with no logo, its screen always turned toward her body or pressed against her cheek, the screen never visible and giving off no glow`
- P46 가슴 쪽으로 화면을 돌려 꼭 쥠 / P47–58 실루엣에서는 귀에 댄 손 모양만 / P59 내려서 가슴에 누름(화면은 몸 쪽). **어떤 컷에서도 화면·화면빛·알림 없음.**

## 10-4. 신규 소품 — PROP_RICE_BIN (쌀통, EP03 은닉처)
- `a plain faded-cream plastic rice bin standing on the floor beside the sink, about knee-to-thigh height, boxy with rounded corners, a flat lid hinged along its back edge so that it opens upward, a small moulded grip on the front edge of the lid, completely blank with no writing, no markings and no measuring scale`
- 자리 [고정]: 싱크대 옆 바닥, 레인지 쪽 = 미자 자리 바로 뒤. P27(배경)·P32(화면 중심)·P33(미자 왼손이 뚜껑을 누름)·P52(회상).
- **EP02에서는 절대 열린 모습을 그리지 않는다** — 뚜껑은 늘 닫혀 평평(프롬프트에 `the lid is closed`). P32 새롬 손은 앞쪽 손잡이에 닿기 직전까지. 경첩은 뒤쪽(EP03에서 위로 열려 뚜껑 안쪽이 보인다).
- 색은 바랜 크림(냉장고 민트·벽 크림과 구분되게 약간 노르스름). 빨강·초록 금지.

## 10-5. 원경 단역 — 냄비 공장 사장 (P45, 이름 없음, 얼굴 없음)
- `far in the distance, one tiny stooped elderly man seen from behind, in a plain grey quilted padded jacket and a dark flat cap, holding a small faded indigo cloth bundle tied at the top, standing at the shop's glowing glass door; his face is not visible, he is no more than one tenth of the frame height`
- **얼굴 금지 · 프레임 높이 1/10 이하**(EP01 P41 원경 문법과 같음). 하린은 다른 쪽(할머니)을 본다.
- 레퍼런스 카드 없음(판정 EA). **EP03 연속성:** 얼굴로 나오면 같은 회색 누빔 점퍼 + 짙은 납작 모자 + 남빛 보자기로 이어 간다(그때 APPEARANCE 문장과 카드 필요 여부를 다시 정한다).

## 10-6. 처리 — FLASHBACK-INSERT (P52 회상 인서트)
- P33과 **같은 구도, 조금 더 가깝게**(미자의 왼손이 닫힌 쌀통 뚜껑을 누름, 약지 흰 띠). 패널 전체에 아래 문장을 붙인다:
  `a brief memory insert: the whole image is desaturated to near-greyscale with only a faint warm sepia trace of the lamp light, a soft dark vignette closing in from the edges, slightly soft focus toward the borders, still and silent; no frame lines, no caption`
- 회상 안에는 채도 높은 점(빨간 고무줄·옥)이 없다. 새롬의 손은 빼거나 흐린 가장자리에만. 뷰어 쪽 처리는 letterer 소관 — 이미지에는 글자 없음.

## 10-7. EP02 기존 소품 재사용 메모
- PROP_ENVELOPE (빈 것): P01–02·P04(형태만)·P06·P09·P24·P26 — 하린 것과 우진 것은 **완전히 같은** 봉투(P09 탑다운 두 개 나란히).
- PROP_BRACELET_COPY: **P17에서만** 보임 — §5-5 "같은 각도·같은 크기" 문장 그대로(납작한 금색 칠 선, 흰 구름 무늬 없음). 흰 무늬가 그려지면 재그림(TW6).
- PROP_RING_MARK: P27(작게)·P33·P43·P52. 반지 금지.
- PROP_SPOONS: P28 하린 숟가락 끝은 밥그릇에 가림(휜 끝 노출 금지, W5). P37 아버지 = 곧은 숟가락, EP01 P23과 같은 구도.
- PROP_BLACK_PUFFER: S1·S2 우진 착용, S3–S4 우진 의자 등받이.
- 장바구니(P44): `a plain navy cloth shopping bag`(MIJA_OUT 문장의 그것) — 안의 물건은 무지 봉지·채소 정도, 상표 없음.

## 10-8. 플래그 (EP02 · art-director)

| # | 내용 | 제안 |
|---|---|---|
| AE1 | EP01 P57–60에서 현관문은 **열려** 있었는데 EP02 비트시트 S1은 "현관문은 닫힘" | panel-director가 정한다. 권장: P01에서 이미 닫힘(우진이 들어오며 닫음) — 간유리 밖 남색 + 가로등 번짐 |
| AE2 | EP01 P57에서 하린 백팩은 **턱 위 옆에 내려놓음** | S1 하린 = COMMUTE, 백팩은 메지 않고 옆에 놓인 채(비트시트 "백팩 없음" = "착용 안 함"으로 해석). character-sheets §7 표 반영 |
| AE3 | P58 손바닥이 **나무 문틀** 위에만 있으면 마당 쪽(P60·P62)에서 손 그림자가 안 보인다 | 권장: `her palm flat on the wooden frame with her fingertips spreading onto the edge of the frosted glass` — P58·P60·P62 공통 |
| AE4 | 신발 연속성 | S1(15일, 아버지 근무) = 아버지 검은 구두 **없음**(EP01 P57과 같음). S6(18일, 아버지 휴무·집에 있음) = 굽 닳은 검은 구두 **있음**, 우진 흰 스니커즈 있음, 미자 슬리퍼는 신고 나감 |
| AE5 | 비트시트 S2 머리말 "팔찌 P16–P18" ↔ 체크리스트 "P17만" | **P17만 보임**으로 고정. P18 팔찌는 화면 밖, P19 소매를 끌어내림 = 숨김 |
| AE6 | P08 우진 "후드를 쓴 채" | P08만 후드 씀, P09부터 벗음(앉으며 젖힘) — 씬 안에서 다시 쓰지 않는다 |
| AE7 | P30 비트시트 "코믹 속도선" | §1·§8-3 만화 효과 금지와 충돌 → 속도선 없이 의자 기울기·약한 움직임 흐림으로 |

---
---

# EP03 additions (2026-11-25) — 「3년 전에 끝난 일」

- 작성: art-director · Phase 4 · 입력 `00_input/brief.md` EP03 절 + 판정 GA–GE, `03_episode/ep03_beatsheet.md` §0-1·§2·§6(F2–F10), `02_story/world.md` §2(주방용품 도매 가게), `characters.md` §2.
- **위 EP01 섹션(§1–§9)과 EP02 섹션(§10)은 바꾸지 않았다.** EP03은 아래 항목만 더한다. GLOBAL STYLE TOKEN · 조립 순서 · 9:16 · 무글자 · Avoid 줄 · 채도 규칙은 그대로.
- 토큰 이름(`LOC_*`, `L-*`, `PROP_*`, `FLASHBACK-*`)은 여전히 프롬프트에 쓰지 않는다 — 영문 문장을 풀어 붙인다.
- 장소는 기존 6곳 + LOC_HOME_YARD 그대로. **신규는 회상 전용 배경 1곳(LOC_FLASH_OLDSHOP)뿐**이다(판정 GD). 현재 시점의 새 장소는 없다.

## 11. EP03 장소·조명 지도

| scene | 패널 | LOC | 조명 코드 | 비고 |
|---|---|---|---|---|
| S1 18일 ~21:20 | P01–02 | LOC_HOME_ENTRANCE (기존, 안쪽) | L-ENTRANCE-EVENING (기존 EP02) + §11-2 메모 | 문이 **밖에서 열림** — 문틀 안 미자, 등 뒤 가로등 |
| S1 | P03–04 | LOC_HOME_YARD (기존 EP02) | L-YARD-NIGHT (기존 EP02) + §11-2 메모 | P04 = EP02 P62의 좌우·구도 거울 |
| S2 18일 ~21:25 | P05 | LOC_ALLEY_STAIRS (기존) | L-NIGHT-STAIRS (기존) | 평상 비어 있음 |
| S2 18일 ~21:30 | P06 | LOC_UNCLE_SHOP 바깥 (기존) | L-SHOP-NIGHT (기존) | P61과 같은 가게 정면·같은 미소 |
| S3 19일 ~06:40 | P07–28 | LOC_HOME_TABLE (기존) | L-DAWN-KITCHEN (기존) + §11-2 메모 | 쌀통 처음 열림(P21) |
| S3 19일 ~07:00 | P29–37 | LOC_HOME_TABLE (기존) | **L-MORNING-KITCHEN** (신규) | 첫 햇살 한 줄 |
| S4 19일 ~15:30 | P38–39 | LOC_ALLEY_STAIRS 맨 아래 층계참 (기존, §11-3 배치) | **L-AFTERNOON-STAIRS** (신규) | |
| S4–S6 19일 ~17:00–17:20 | P40–45 · P48–61 | LOC_ALLEY_STAIRS 맨 아래 층계참 + 아래 LOC_UNCLE_SHOP 문간 | L-SUNSET (기존) + §11-2 메모 | P60 가로등 켜짐(선택) |
| (6년 전 밤 — 회상) | P46–47 | **LOC_FLASH_OLDSHOP** (신규, 회상 전용) | **FLASHBACK-PAST** 처리(§11-4) | |

## 11-1. 신규 회상 배경 — LOC_FLASH_OLDSHOP (6년 전 밤, 아버지의 주방용품 도매 가게, P46–47 전용)

현재 시점 장소가 아니다. **회상 처리(§11-4)와 반드시 함께** 쓴다. 디테일은 적게, 고정 요소는 두 가지: **반쯤 내린 셔터 + 쌓인 냄비 더미**.
```
The narrow interior of a small kitchenware wholesale shop late at night six years ago: a grey corrugated steel roller shutter pulled half-way down across the shop front, the dark empty street just visible in the gap beneath it; along both sides of a cramped aisle, tall stacks of stainless steel cooking pots, nested bowls and bundles of plain stainless spoons, piled beside plain unmarked cardboard boxes; a single bare fluorescent tube on the ceiling; an upturned plastic crate on the bare cement floor; the back of the shop falls into darkness where two or three faceless adult figures stand blurred and indistinct; everything is completely blank, no shop sign, no labels, no price tags, no writing on any box.
```
- **배치 [고정]:** 셔터 = 프레임 한쪽 위(반쯤 내려 아래 틈으로 어두운 거리) · 냄비·그릇 더미 = 통로 양옆 · 엎은 플라스틱 상자(노인이 앉음) = 통로 가운데 · 안쪽 어둠 = 인영.
- **안쪽 인영 [고정 — beatsheet F10-④, EP05 보호]:** 얼굴 없음, 흐린 어두운 형체만. **진갈색 니트·굳은살 손·반백 머리 등 아버지(INHO)를 식별할 특징 금지.** 프롬프트에 `their faces and clothing are lost in shadow and cannot be made out` 추가.
- 냄비·숟가락은 **무지 스테인리스**(로고·각인 없음) — 집 식탁 숟가락(PROP_SPOONS)의 출처라는 정서만, 특정 숟가락을 클로즈업하지 않는다(휜 숟가락 금지).
- 무글자: 간판·상자 인쇄·가격표·영수증·달력 없음. 셔터에도 글자·낙서 없음.
- 재사용 예정: EP26(가안) — 그때도 이 문장 + 회상 처리 그대로.

## 11-2. 신규·변주 조명 문장

| 코드 | 언제 | 영문 조명 문장 (그대로) |
|---|---|---|
| L-ENTRANCE-EVENING 메모 (S1) | P01–02 | EP02 문장의 앞부분(전구 + 복도의 약한 번짐)만 쓰고, 문이 열렸으므로 간유리 실루엣 부분은 빼고 `+ the sliding frosted-glass door has just been slid open from outside; Mija stands in the open doorway, the yellow streetlamp in the alley directly behind her softly haloing her outline, her face lit warm from the entrance bulb inside`. 바닥: 아버지 검은 구두 있음(18일 휴무, AE4). |
| L-YARD-NIGHT 메모 (S1) | P03–04 | EP02 문장 그대로. **P04만** `+ behind the glowing frosted-glass door stands Mija's dark, soft-edged silhouette, lit from behind by the bare bulb inside: short permed rounded hair, round shoulders, apron outline` — EP02 P60·P62 하린 실루엣 규칙(뒤 전구 → 진하고 또렷)과 같은 물리. 하린은 대문 앞 전경, 낮게. |
| L-DAWN-KITCHEN 메모 (S3) | P07–28 | EP01 문장 그대로(펜던트 꺼짐, 레인지 위 형광등, 작은 간유리 창의 회청빛). 창은 **싱크대 위 뒷벽**(EP02 §10-2 S4 메모와 같은 창). P20만 `+ the frosted window is a shade brighter`(햇살 줄은 아직 없음 — P29부터). |
| **L-MORNING-KITCHEN** | P29–37 | `early morning in the kitchen, the pendant lamp is off and the single fluorescent tube above the stove is still on, cool grey-blue room light, and now one thin ray of pale warm golden sunlight comes through the small frosted-glass window above the sink and falls diagonally across the wooden table in a narrow bright band, fine dust motes in the ray, the rest of the room still cool and quiet` |
| **L-AFTERNOON-STAIRS** | P38–39 | `late-autumn afternoon on the hillside stairs, flat pale white daylight under a thin overcast sky, short soft faint shadows, the streetlamps are off, cool neutral colours, the small shop at the alley entrance below looks ordinary in daylight with its white interior light barely noticeable` |
| L-SUNSET 메모 (S4–S6) | P40–45 · P48–61 | EP01 문장 **그대로** + EP02 P45 메모 `far below, the small corner shop already glows white in the cool shade`(= **가게 불 켜짐**, 문간은 흰빛). 하린이 앉은 층계참에는 낮은 주황 노을이 비스듬히, **아래 골목과 가게 문간은 이미 서늘한 그늘**(주황 없음). |
| L-SUNSET P60 (선택) | P60 | `+ the streetlamp on the landing beside her has just flickered on, a faint new yellow glow against the fading orange sky` — 노을 끝 = 시간이 다 됐다. 켜면 P61 배경 위쪽에도 같은 약한 노란 기운(가로등 자체는 P61 프레임 밖). 안 켜도 무방(panel-director 결정). |
| L-SUNSET P61 메모 | P61 | 삼촌 얼굴 = `his face in soft cool shade light, a rim of cold white light from the shop's work lamp behind him outlining his shoulders and hair, no orange sunset light on him`. 문간은 그늘 속이므로 주황을 얹지 않는다(P60과 같은 빛). |

- 날짜 경과는 빛으로만(beatsheet §0-1): 밤 간유리 → 밤 계단·흰 가게 → 새벽 회청 부엌 → 첫 햇살(P29) → 흰 낮(P38) → 노을 주황 + 그늘 속 흰 가게(P40–).
- P38 ↔ P40은 **같은 구도, 빛만 다름**(기다림의 길이) — 하린 자세·담·가게 각도를 같게 쓴다.

## 11-3. LOC_ALLEY_STAIRS 맨 아래 층계참 배치 (S4–S6, 신규 LOC 아님)

기존 LOC_ALLEY_STAIRS 문장을 그대로 쓰고, 아래 배치 문장을 덧붙인다.
```
The lowest landing of the stair alley, only a few steps above the alley entrance: a waist-high cement-and-brick wall on the shop side of the landing; looking down past the corner of that wall, the small corner shop's glass door faces up toward the stairs, while the shop's display window is hidden behind the wall; higher up the stairs, the middle landing with the old wooden platform bench.
```
- **시선 아이러니 [고정 — beatsheet S5 대화 자리]:** 진열창에서는 담에 가려 안 보이고, **유리문(문간)에서는 이 층계참이 곧장 올려다보인다.** P41·P60은 같은 축(하린 위치 → 가게 문간), P06·P61은 같은 가게 정면.
- 대화 자리(P48–P57): 같은 계단 칸에 나란히 — 사장 왼쪽 / 하린 오른쪽(카메라가 계단 위쪽·옆일 때 기준). 가게는 프레임 아래쪽.
- P49 유리 안 둥근 인영: 프레임 높이 **1/12 이하**, 얼굴 없음(EP01 P41·TW7 원경 문법).

## 11-4. 처리 — FLASHBACK-PAST (P46–47, 6년 전 회상)

EP02 P52의 FLASHBACK-INSERT(며칠 전 기억 = 따뜻한 세피아 흔적)와 **같은 문법**(채도 뺌 · 가장자리 어둠 · 테두리 쪽 흐림 · 글자/프레임선/캡션 없음)이되, **색의 흔적만 차갑게** 바꿔 "먼 과거"로 구분한다. 화풍(선·셰이딩·비율)은 현재와 똑같다.
```
a memory from years ago: the whole image is desaturated to near-greyscale with only a faint cold blue-grey trace of the single fluorescent light, a soft dark vignette closing in from all edges, slightly soft focus toward the borders, quiet and still; same art style as the present-day panels; no frame lines, no caption
```
- 회상 안에 채도 높은 점(빨간 고무줄·옥) 없음. 봉투 없음.
- P46(미디엄 와이드)·P47(손 ECU) 두 컷 모두 같은 문장. 앞뒤 현재 컷(P45·P48)의 노을 주황과 대비되어 시간 점프가 읽힌다 — 이미지에 글자·연도 표시 없음(`env` 없음).
- EP02 P52(세피아)와 **섞지 않는다**: 가까운 기억 = 따뜻한 세피아 / 먼 과거 = 차가운 청회색. 이후 회차 회상도 이 두 가지로만.

## 11-5. 신규·변주 소품 (전부 무글자)

### PROP_RICE_BIN — 열린 상태 (P21만)
- EP02 §10-4 문장 그대로 + `the lid is swung fully open upward on its back hinge so its inner underside faces the camera; taped to the centre of the inner side of the lid with two short strips of clear tape is one flat empty envelope` + PROP_ENVELOPE 공통 문장 + 빈 것(FLAT) 문장 + `; inside the bin, plain white rice grains`.
- 테이프 두 줄은 봉투 위·아래 가로로, 빨간 고무줄은 봉투 가운데 그대로(테이프가 고무줄을 덮지 않음). 쌀통 안에 계량컵·눈금·글자 없음.
- **열린 모습은 P21 한 컷.** P07·P17·P31은 닫힘(`the lid is closed`) — P31은 미자의 손이 닫힌 뚜껑 위.

### PROP_DAD_BOWL — 아버지 몫 밥상 (P07 · P26 · P28)
- `at the head of the table, a stainless steel rice bowl covered with its own stainless steel lid, and laid straight across the top of the lid one plain stainless steel Korean spoon with a shallow round bowl and a long flat straight handle; the spoon is perfectly straight along its whole length, its handle tip fully visible and not bent`
- **곧은 숟가락 [고정 — EP05 G 회수]:** 손잡이 끝까지 보이게, 휘지 않음. P28은 초점(하린 옆얼굴 전경 + 숟가락), P07·P26은 배경(흐려도 곧음).
- 하린의 휜 숟가락은 EP03 어떤 컷에도 나오지 않는다(W5).

### PROP_WATER_BOTTLE — 무지 물병 (P38 조끼 주머니 · P48–58)
- `a small clear plastic water bottle with a plain muted pale-blue screw cap, no label, no printing, no markings`
- 뚜껑 색은 탁한 연하늘(채도 규칙 — 빨강·초록 금지). P48 하린이 두 손으로 내밂(P46 유리컵과 **같은 몸짓**) → P49–58 사장 손에. P55 뚜껑을 돌림.

### PROP_INDIGO_CLOTH — 빈 남빛 보자기 (P41 · P43 · P50 · P58)
- `a faded indigo cotton wrapping cloth, empty and folded flat into a small square, soft and worn`
- EP02 §10-5의 묶인 보자기(`a small faded indigo cloth bundle tied at the top`)가 **비어 접힌** 상태(팔고 난 뒤). 같은 남빛·같은 바램. 무늬·글자 없음.

### PROP_GLASS — 무지 유리컵 (회상 P46–47)
- `a plain clear drinking glass tumbler, more than half full of water, no pattern, no markings`
- 회상 처리 안에서 거의 무채색. 소녀의 두 손이 감싸고, 노인의 크고 거친 두 손이 받는다(P47).

### PROP_ENVELOPE ×2 · ×3 — 나란히 놓인 같은 봉투 (P22 · P26)
- P22 두 개: `exactly two identical flat empty envelopes lying side by side on the wooden table` + PROP_ENVELOPE 공통 + FLAT.
- **P26 세 개:** `exactly three identical flat empty envelopes lying in a neat straight row on the wooden table, evenly spaced and parallel, each with its single red rubber band around the middle at the same position` + PROP_ENVELOPE 공통 + FLAT.
- **"exactly three"를 꼭 쓴다** — Flow는 봉투를 늘리기 쉽다(넷·다섯이 되면 콜드오픈 반전을 미리 말해 버림 → 재그림). 크기·색·접힘·고무줄 모두 동일, 한 개만 다르면 재그림.
- P14(하린 하나)·P21(뚜껑 안쪽 하나)·P30(세 사람이 쓸어 담음)도 같은 봉투 문장.

### 기타 무글자 물건
- 쌀 씻는 냄비(P07·P10): `a plain stainless steel pot with water and rice` — 무지. 쌀뜨물 잔물결(P10 멎음).
- 새롬 백팩 키링(P31): character-sheets SAEROM_SCHOOL 문장의 `a small grey cat plush keyring` — 글자·태그 없음.
- 사장 금붙이: 화면에 나오지 않는다(이미 팔았다). 가게 안 진열장 금빛은 원경에서만.

## 11-6. EP03 기존 소품 재사용 메모
- PROP_RING_MARK: P10(손 ECU, 형광등 빛)·P13·P23·P29. 반지 금지.
- PROP_PHONE: P01–02 미자 가슴에, 화면 몸 쪽. 화면빛 없음.
- PROP_SHOP_BELL: P06(유리문 위)·P41·P42·P60(아직 흔들림). 소리는 뷰어 `sfx`.
- PROP_PHOTO_FRAME: P61 배경 작업대 위, 뒷면만.
- PROP_LEDGER: P06 작업대 위 덮인 채(배경).
- PROP_BRACELET / _COPY: **EP03 노출 없음.** 우진 왼손목은 늘 소매 안.
- PROP_BLACK_PUFFER: EP03 화면에 없음(아침 부엌 — 의자 등받이에 걸지 않는다).

## 11-7. 플래그 (EP03 · art-director)

| # | 내용 | 제안 |
|---|---|---|
| AG1 | SUPPLIER와 INHO가 둘 다 "마르고 구부정" | 구분 고정: 사장 = 60대 중반·흰머리·**늘 짙은 납작 모자**·그을린 피부·흰 수염 자국·회색 누빔 점퍼 / 인호 = 반백·넓은 M자 이마·짙은 검은 눈썹·진갈색 니트. 회상 P46 안쪽 인영엔 인호 특징 금지(§11-1) |
| AG2 | 회상 처리 두 가지(세피아 vs 청회색) | 먼 과거(P46–47) = 청회색 FLASHBACK-PAST, 가까운 기억(EP02 P52) = 세피아 FLASHBACK-INSERT. 화풍·비네팅은 같음 |
| AG3 | P04 미자 실루엣은 **집 안 전구가 뒤에서** 비춤 | EP02 P47–58(가로등이 뒤 → 흐림)과 반대 방향 → EP02 P60·P62 하린처럼 진하고 또렷. 검수에서 불일치로 보지 않는다 |
| AG4 | P61 삼촌 얼굴에 노을 주황 금지 | 문간은 그늘 + 뒤에서 흰 작업등 림. 주황은 층계참(하린 쪽)에만 |
| AG5 | P26 "봉투 셋" 개수 오류 위험 | prompt-smith: `exactly three` + PROPS_keyprops 첨부. 넷 이상이면 재그림 |
| AG6 | P60 가로등 켜짐 | 선택. 켜면 P61 상단에 약한 노란 기운만, 가로등 자체는 프레임 밖 |
| AG7 | PROPS_keyprops 갱신 안 함 | 쌀통 열림·물병·보자기·유리컵·아버지 그릇은 단순 물건 → 문장만. 신규 카드는 SUPPLIER 2장뿐(character-sheets §10) |
