# 스타일 바이블 — 「독은 제가 먼저 먹겠습니다」 (KM «ថ្នាំពុល ខ្ញុំសូមភ្លក់មុន»)

- 작성: art-director · 기준일 **2026-11-17** · EP01 Phase 4 step 1 · **v1**
- **Flow aspect 기본값: 3:4.** 패널마다 `aspect:`를 적는다. 크기 등급(3:4 / 9:16 / 1:1)과 배정은 §4.
- 입력: `03_episode/ep01_script_final.md`(60패널 최종), `03_episode/ep01_beatsheet.md`(§3 시간 큐 · §4 글자 없는 소품 · R 앵글), `02_story/characters.md` §8(외형 토큰 v1), `02_story/world.md` §8(시각 톤 · 장소 3곳 · 예약색) + 부록 A-2, `02_story/twist-plan.md` §2-5 · §7-5, `02_story/concept.md` §4 · §7 · §12, `01_research/trend-brief.md`(D7 · R4)
- 짝 문서: `04_visual/character-sheets.md` (인물 토큰 · 표정 · 소품 카드 · 레퍼런스 시트 사양)
- 다음 독자: ref-sheet-artist → panel-director → letterer → prompt-smith → (사용자의 Flow 작업) → panel-validator. 팀 메시징 없는 실행이라 전달 사항은 §11에 모았다.
- 이 프로젝트의 두 모드 (CLAUDE.md):
  - **Flow-by-hand.** 이미지는 전부 사용자가 Google Flow에서 손으로 만든다. Flow는 붙여 넣은 문장과 첨부 이미지만 본다. 그래서 이 문서의 영문 토큰은 **그대로 붙여 넣는 완결된 영어**다. prompt-smith는 토큰 **이름이 아니라 내용**을 프롬프트에 펼친다(토큰 이름 · 파일 경로 · "스타일 바이블" 같은 말을 프롬프트에 쓰지 않는다).
  - **Khmer edition.** 그림에는 글자도 말풍선도 없다. 말풍선과 크메르어는 뷰어(`km_tool.py build`)가 나중에 그린다. 그림은 말풍선 자리(`art_space`)를 조용한 배경으로 비워 둘 뿐이다(§8). upstream의 "in-image 한글 베이크" 규약은 이 프로젝트에서 쓰지 않는다.
- 표기: `코드` 안의 영문 = 프롬프트에 그대로 들어가는 문장. 좌우는 **인물 · 사물 자신의 좌우**(민 상궁의 LEFT temple은 정면 그림에서 화면 오른쪽). 화면 기준은 "화면 왼쪽(frame left)"으로 따로 쓴다.
- 이전 작품(`_workspace_20261117_080559/`)의 문서는 **형식만** 참고했다. 화풍 · 팔레트 · 토큰은 하나도 가져오지 않았다.

---

## 0. 한눈에 보기

| 항목 | 결정 |
|---|---|
| 화풍 한 줄 | 한국 플랫폼 웹툰식 **사극 서스펜스**: 가는 클린 먹선 + 부드러운 1단 셀 셰이딩, 반사실 비율, 큰 눈의 표정 연기. 의상은 **단색 큰 면 + 테두리 한 줄**, 배경은 창호지 · 나무 · 놋쇠의 단순한 면. "따뜻한 방의 차가운 공포" |
| 패널 비율 | 기본 3:4 · 큰 컷 9:16 · 클로즈업 · 인서트 1:1 (§4) |
| 장소 토큰 | `LOC_L1_TASTING`(아침 · 한낮) · `LOC_L2_CORRIDOR`(아침 · 저녁 · 해 질 녘 · 밤) · `LOC_L3_HERBSTORE`(오후) (§6) |
| 고정 앵글 | **R-WIDE**(P05 = P48) · **R-HAND**(P08 = P50) · **M1 포즈**(P04 = P24) · **R 메아리**(P05 → P58) (§5-3) |
| 예약색 | **연보랏빛(은맹색) `#C9B6E4`는 4패널뿐: P08 · P16 · P29 · P50.** 그 밖의 모든 패널은 보라 계열 0 (§2-4) |
| 글자 | 어떤 이미지에도 없다. 당번 판 · 패 · 서랍 이름표 · 등롱 · 현판 · 병풍은 빈 면 (§10-1) |
| 말풍선 | 뷰어가 그린다. 그림은 `art_space`만 조용한 배경으로 비운다 (§8) |
| 레퍼런스 | 필수 13장(인물 9 + 소품 4) + 장소 플레이트 3장 권장 → `character-sheets.md` §8 |

---

## 1. 작화 스타일

- **참조 무드:** 네이버웹툰 · 카카오페이지의 궁중 로맨스판타지 · 사극 스릴러 상위작이 쓰는 주류 디지털 작화. 독자가 "평범한 궁중 웹툰"으로 받아들이는 화사하지 않은, 단정한 화풍 위에 독살 서스펜스를 얹는다(trend-brief: 궁중 생존 × 미스터리, 수위 12~15).
- **왜 이 화풍인가 (Flow 수작업 기준):** 무늬 · 자수 · 장신구가 많은 화려한 사극 화풍은 Flow가 컷마다 다르게 그린다(trend-brief R4: 궁중 의상이 다 비슷해 보이고 흔들린다). 그래서 **단색 큰 면 + 테두리 한 줄**의 의상, 인물마다 색 1 + 소품 1, 단순한 배경 면으로 손 반복 렌더에서 같은 사람 · 같은 방이 나오게 한다.
- **선화:** 가늘고 고른 검은 먹선. 인물 외곽선은 약간 굵게, 배경 선은 더 가늘게. 거친 붓선 · 스케치 선 · 동양화 먹 번짐 금지.
- **채색:** 플랫 셀 + 부드러운 그림자 한 단계. 그라데이션은 빛줄기(창호지 · 약재고 창 · 등롱)와 어둠의 가장자리에만.
- **디테일:** 얼굴 · 손 · 소품 클로즈업(은침 · 그릇 테두리 · 손수건 · 노리개)은 정밀하게. 배경은 믿을 만하지만 단순하게: 창살은 단순 격자 + 난초 잎 하나, 무늬 없는 놋그릇, 무지 병풍.
- **얼굴:** 반사실 비율, 맑은 피부, 감정은 **눈과 입술**로. 채령은 늘 크게 뜬 눈(반쯤 감긴 눈 금지). 민 상궁은 **모든 컷에서 같은 온화한 미소**(반전은 빛으로만, §3).
- **수위:** 독의 결과는 손 떨림 · 창백함 · 식은땀까지(world §3-1). 피 · 구토 · 쓰러진 몸 · 형벌 장면 없음. EP01은 증상 컷도 없다.
- **유머 컷**(P04 · P39 · P40)도 같은 화풍이다. SD · 치비 변형, 만화 기호(땀방울 아이콘 · 혈관 · 반짝이)는 쓰지 않는다. 표정과 몸짓으로만.
- **금지 화풍:** 망가 스크린톤, 서양 코믹 해칭, 수묵화 · 유화 · 수채 질감, 3D 렌더, 포토리얼, 반짝이 파스텔 로판 효과(꽃잎 · 빛망울 · 글리터), 네온, 짙은 필름 그레인.

**STYLE_GLOBAL** (모든 패널 프롬프트 끝에 한 글자도 바꾸지 않고 넣는다):
```
Korean webtoon style digital illustration of a fictional East Asian palace drama, clean fine black ink linework, soft cel shading with one shadow tone, semi-realistic proportions with expressive eyes, simple hanbok-style costumes drawn as large solid color areas with a single thin trim line and no patterns, simple uncluttered backgrounds of paper screens, dark wood and brass, restrained natural colors, quiet tense palace-suspense mood, cinematic composition
```

**STYLE_REF** (레퍼런스 시트 · 소품 카드 · 장소 플레이트 전용, character-sheets §8):
```
Korean webtoon style character model sheet: clean fine black ink linework, soft cel shading with one shadow tone, semi-realistic proportions; plain light warm-gray background, soft even studio lighting, no cast shadows, every figure at the same scale and in the identical outfit
```

---

## 2. 색감 · 팔레트

> 프롬프트에는 hex가 아니라 **오른쪽 열의 색 이름**을 쓴다. hex는 검수(panel-validator) 기준값이다.

### 2-1. 공간 팔레트 (world §8-1 채택)

| 역할 | hex | 프롬프트 색 이름 |
|---|---|---|
| 창호지 | `#EFE3C8` | warm cream rice-paper |
| 나무 (기둥 · 들보 · 문틀) | `#5A3E2B` | dark brown wood |
| 회랑 기둥 | `#9A6B3F` | warm ochre-brown wooden pillar |
| 회벽 | `#F2EEE6` | white plaster |
| 기와 | `#6E7277` | gray roof tiles |
| 장판 (L1 바닥) | `#D8B26A` | oiled yellow paper floor |
| 옻칠 상 | `#6B2A1F` | dark red-brown lacquer |
| 놋쇠 (그릇 · 향로 · 국자 · 칼 장식) | `#C9A23A` | warm brass |
| **은 (은침 · 은비녀)** | `#C8CCD0` | cool bright silver — **화면에서 가장 차가운 반짝임** |
| 흰 사기 (기미 그릇 · 식초 종지) | `#F4F1E8` | plain white porcelain |
| 쑥 재 | `#8C8A86` | soft gray ash |
| 식초 | `#7A5A32` | clear brown vinegar |
| 약재고 나무 | `#4A3424` | dark walnut brown |
| 마른 약초 | `#8A8A5C` | dusty olive and dry-grass |
| 약초 뿌리 다발 | `#7D6E5E` | gray-brown dried roots |
| **예약 연보라 (은맹색)** | `#C9B6E4` | very pale whitish lilac — **P08 · P16 · P29 · P50만** |

### 2-2. 인물 주색 (같은 컷에서 겹치지 않는다 · characters §0 · §8-8)

| 인물 | 주색 | 프롬프트 색 이름 | 주의 |
|---|---|---|---|
| 채령 CHAERYEONG | `#9CC46A` + `#26355E` | spring-green jacket, navy skirt (+ red ribbon `#B3262E`, jade-teal `#3FA39A`) | 연두가 노랑 · 민트로 번지면 다시 |
| 왕자 PRINCE | `#B0192B` + `#C9A23A` | crimson-red robe, thin gold border | 주황 · 분홍으로 번지면 다시. 큰 면적의 빨강은 왕자 도포뿐 |
| 민 상궁 MIN | `#5A1F35` + `#2B2F3A` | deep wine-red plum (dark mulberry, almost burgundy) jacket, charcoal-navy skirt (+ celadon handkerchief `#BFD8D2`) | **보라 · 바이올렛 · 라벤더로 보이면 즉시 다시**(§2-4) |
| 백 감찰 BAEK | `#1B1B1D` (+ `#8A5A2B` 구슬, `#B08D3C` 놋) | black robe and hat, dark amber bead strap | 남색 · 회색 관복으로 바뀌면 다시 |
| 홍 숙수 HONG | `#C08A3E` + `#E8DFCC` | ochre-yellow apron and arm sleeves, off-white beige jacket | |
| 엑스트라 | `#7F8C99` / `#9A9A9A` | muted gray-blue / gray | 이름 있는 인물의 다섯 색 금지 |

### 2-3. 장면 무드 팔레트 (컬러 스크립트)

| 블록 | 패널 | 장소 · 시간 | 팔레트 · 빛 |
|---|---|---|---|
| ① 콜드 오픈 | P01–P04 | L1 · 1일째 아침 | 낮고 옅은 아침빛이 화면 왼쪽 창호지로. 크림 · 연한 꿀빛, 그림자 길고 옅다 |
| ② 일상 · 단서 | P05–P12 | L2 · 1일째 아침 | 맑은 연청 하늘빛 `#CFE0E3`, 흰 회벽, 황토 기둥. 낮게 비스듬한 빛, 긴 그림자. 등롱 꺼짐. 온기 · 안심 |
| ③④⑤ 균열 · 딜레마 · 사이다 | P13–P32 | L1 · 2일째 한낮 | **해가 높은 한낮의 꿀빛 · 호박색**, 상 아래 짧고 진한 그림자, 김 오르는 상. 긴장이 올라도 빛은 따뜻하게 유지(따뜻한 방의 차가운 공포). 은침이 가장 차갑다 |
| ⑥ 심문 | P33–P42 | L3 · 2일째 오후 | 어두운 호두나무 갈색, 높은 창 하나의 비스듬한 빛줄기와 떠다니는 먼지. P39만 문이 열리며 바깥 빛이 쏟아진다 |
| ⑦ 가짜 해소 | P43–P46 | L2 · 2일째 저녁 | 주황 노을 `#E59A4B`이 기와에 걸림, 그림자 길어짐. 따뜻하지만 저물어 가는 색 |
| ⑦ 해 질 녘 | P47 | L2 | 노을이 거의 진 푸른 저녁 + 처마 등롱에 하나둘 켜지는 주황 불 |
| ⑧⑨ 반전 · 클리프 | P48–P60 | L2 · 2일째 밤 | **짙은 남청 밤 `#1E2A44` + 등롱 하나의 주황빛 `#F0A04B` + 차가운 달빛 `#A9B8CF`**. 얼굴은 등롱 쪽 반만 따뜻하다 |

- **채도 · 명도 방향:** 중간 채도, 차분한 자연색. 높은 채도는 인물 주색(특히 왕자 진홍)과 놋쇠 금빛, 밤의 등롱뿐. 하이키 파스텔 · 형광 금지.
- **밤과 노을은 보라로 흐르면 안 된다 [고정].** Flow는 밤하늘 · 노을 · 그림자를 보라빛으로 칠하기 쉽다. 이 작품에서 보라는 단서(§2-4)라 화면 아무 데나 생기면 반전이 무너진다. 밤 = `deep navy-blue night`, 노을 = `orange and amber sunset`, 그림자 = `cool blue-gray / warm brown shadows`. 보라빛 밤 · 분홍보라 노을은 REGEN.

### 2-4. 예약색 연보라(은맹색) — EP01은 네 패널뿐 [고정]

| 패널 | 무엇 | 형태 · 크기 | 영문 (그 패널에만) |
|---|---|---|---|
| **P08** | 민 상궁 손수건 모서리 얼룩 (PROP_HANKY_STAIN) | 손가락 한 마디만 한 엷은 얼룩, 빨아서 번진 물자국처럼 가장자리 흐림. **프레임 중심은 손**, 얼룩은 주인공이 아니다 | `the only pale lilac in the image is one small faint stain on a corner of the handkerchief` |
| **P16** | 국물 표면의 윤기 | 테두리 쪽에서 번진 **아주 엷은** 기름 윤기, 비스듬한 빛을 받을 때만. 독자만 알아챌 정도 | `the only pale lilac in the image is a barely visible faint oily sheen on the soup surface near the bowl's rim, catching the slanted light` |
| **P29** | 그릇 테두리 번짐 | 채령의 손끝에서 테두리를 따라 천천히 번지는 연보라 띠. 회차의 첫 "와" — 선명하지만 여전히 **흰 기 있는 연한** 라일락 | `the only pale lilac in the image is the soft whitish-lilac color slowly spreading along the brass rim from her fingertip` |
| **P50** | 같은 손수건 얼룩 (PROP_HANKY_STAIN) | **P08과 같은 크기 · 같은 자리 · 같은 색.** 빛만 등롱빛 | P08 문장과 같음 |

- 그 밖의 모든 패널은 **보라 · 바이올렛 · 라벤더 · 라일락 · 모브 0**: 의상 · 꽃 · 병풍 · 노을 · 밤하늘 · 그림자 · 손끝 재 얼룩(회색) 포함. **그늘보라 꽃은 그리지 않는다**(world 부록 A-2). 약초는 회갈색 뿌리 다발만.
- **민 상궁 당의(와인 자두) ≠ 연보라.** 자두색은 짙고 붉은 기가 강한 어두운 색(명도 낮음), 은맹색은 흰 기 있는 아주 연한 라일락(명도 높음). 프롬프트에서 당의는 `deep wine-red plum (dark mulberry, almost burgundy)`로만 쓰고 보라 계열 단어를 쓰지 않는다. Flow가 보라 쪽으로 밀면 `burgundy` 쪽으로 더 당긴다(characters §8-3). 레퍼런스 소품 카드 `PROP_HANKY_pair`가 둘을 한 장에 나란히 놓아 확인한다(character-sheets §8).
- 프롬프트 규칙: 예약색 패널에만 위 "the only pale lilac …" 문장을 넣는다. 다른 패널의 Avoid 줄에 색 단어(purple 등)를 넣지 않는다(단어가 오히려 색을 부른다). 민 상궁이 나오는 컷은 그녀의 토큰에 이미 있는 `NOT purple, NOT violet, NOT lavender`로 충분하다.
- 노리개의 **청록 옥색**, 손수건의 **연청(청자빛)**은 보라가 아니다. 둘이 파랑 · 보라로 흐르면 다시.

---

## 3. 분위기 · 조명

**분위기 한 문단.** 늦가을의 작고 정돈된 궁. 창호지로 들어오는 꿀빛, 놋그릇의 따뜻한 반짝임, 쑥 향의 가는 연기. 모든 것이 단정하고 따뜻해서, 은침 하나의 차가운 빛과 그릇 테두리의 엷은 윤기가 더 무섭다. 공포는 사람과 제도에서 온다(초자연 없음). 민 상궁의 얼굴은 처음부터 끝까지 같은 미소이고, 반전은 **조명과 맥락**만 바꾼다: 아침의 맑은 빛 속 미소 → 밤 등롱이 얼굴 반만 비추는 같은 미소.

### 3-1. 조명 규칙

1. **L1 시식방의 빛은 늘 화면 왼쪽 창호지에서 온다**(world §8-2). 아침 = 낮고 옅다, 한낮 = 높고 진하다. 클로즈업도 빛 방향을 지킨다(얼굴의 밝은 쪽 = 창 쪽).
2. **은침은 늘 화면에서 가장 차가운 반짝임.** 검게 변하지 않는다(EP01 끝까지 은빛).
3. **L2 회랑은 구조 · 소품 위치가 고정이고 빛만 바뀐다:** 아침(연청 · 흰빛, 등롱 꺼짐) → 저녁(주황 노을) → 해 질 녘(등롱 켜짐 시작) → 밤(남청 + 등롱 하나 + 달빛).
4. **L3 약재고는 어둡다.** 빛은 높은 창 하나의 빛줄기뿐. 심문 컷에서 감찰은 **창빛을 등지고** 얼굴 반이 그늘(world §8-2).
5. **반전 컷(P52–P59)의 민 상궁:** 등롱이 얼굴 한쪽(그녀의 RIGHT 쪽 = 정면 그림에서 화면 왼쪽)만 따뜻하게 비추고 다른 반은 남청 그림자. 표정은 낮과 같다.
6. 연기는 가늘고 단순한 한 줄(향 한 대 = 타이머). 연기가 화면을 덮거나 모양을 만들면 안 된다.

### 3-2. 조명 토큰

| 토큰 | 영문 (프롬프트용) | 쓰는 곳 |
|---|---|---|
| `LIGHT_L1_MORNING` | `soft, low early-morning light coming through the rice-paper sliding doors on the left side of the room, pale and gentle, long faint shadows` | P01–P04 |
| `LIGHT_L1_NOON` | `bright midday honey-gold light falling steeply through the rice-paper sliding doors on the left, strong warm glow, short dark shadows under the table and bowls` | P13–P32 |
| `LIGHT_L2_MORNING` | `clear cool morning light, pale celadon-blue sky over the courtyard, white plaster walls, low slanting sun casting long shadows across the wooden floor; the paper lantern under the eaves is unlit` | P05–P12 |
| `LIGHT_L2_EVENING` | `orange and amber sunset light resting on the gray roof tiles, long stretched shadows along the veranda, the sky warm orange, no pink or purple` | P43–P46 |
| `LIGHT_L2_DUSK` | `the sunset has just faded into a calm blue evening, and the paper lanterns along the eaves are lighting up one by one with small warm orange glows` | P47 |
| `LIGHT_L2_NIGHT` | `deep navy-blue night (not purple), a single lit paper lantern under the eaves casting a warm orange glow, cool pale-blue moonlight on the floorboards and roof tiles, dark blue shadows` | P48–P60 |
| `LIGHT_L3` | `a dim, closed storeroom: a single small high window lets in one slanting shaft of daylight with floating dust motes, the rest of the room in warm dark-brown shadow` | P33–P38, P41–P42 |
| `LIGHT_L3_DOOR` | `the storeroom door bursts open and bright outdoor daylight floods in across the floor` | P39–P40 (P40은 열린 문의 빛이 남아 있다) |
| `LIGHT_LANTERN_FACE` | `the lantern light warms only one half of her face, the other half in deep blue shadow` | P53 (P52 · P56 · P59 선택) |

### 3-3. 씬별 조명

| scene_id | 패널 | LOC | 조명 |
|---|---|---|---|
| S01 | P01–P04 | LOC_L1_TASTING (아침) | LIGHT_L1_MORNING |
| S02 | P05–P12 | LOC_L2_CORRIDOR (아침) | LIGHT_L2_MORNING |
| S03 | P13–P32 | LOC_L1_TASTING (한낮) | LIGHT_L1_NOON |
| S04 | P33–P42 | LOC_L3_HERBSTORE | LIGHT_L3 · P39–P40 LIGHT_L3_DOOR |
| S05 | P43–P47 | LOC_L2_CORRIDOR (저녁) | P43–P46 LIGHT_L2_EVENING · P47 LIGHT_L2_DUSK |
| S06 | P48–P60 | LOC_L2_CORRIDOR (밤) | LIGHT_L2_NIGHT (+ LIGHT_LANTERN_FACE) |

---

## 4. 화면비 · 캔버스 (Flow)

### 4-1. 크기 등급

뷰어는 그림을 **폭에 맞춰 통째로** 보여 준다(자르지 않음, 폭 최대 720px, 폰 폭 약 400px).

| 등급 | Flow aspect | 폰에서의 높이 | 쓰는 곳 |
|---|---|---|---|
| **STD** | **3:4** | 화면 약 0.7 | 기본. 대화 · 미디엄 · 투샷 · 어깨 너머 |
| **TALL** | **9:16** | 화면 약 1 | 큰 컷 · 정지점 · 공개 컷 · 전신 · 3단 분할 |
| **SQ** | **1:1** | 화면 약 0.5 | 클로즈업 · 손 · 소품 인서트 · 빠른 반응 |

- Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데에 모은다. 16:9 패널은 EP01에 쓰지 않는다(세로 스크롤에서 너무 낮다). 레퍼런스 시트만 16:9.

**권장 배정** (panel-director가 바꿀 수 있다. 단 **고정 앵글 짝은 같은 비율**):

| 등급 | 패널 |
|---|---|
| TALL 9:16 | P01 · P05 = P48(R-WIDE) · P23(3단 분할) · P25 · P29 · P31 · P33 · P39 · P43 · P47 · P53 · P57 · P60 |
| SQ 1:1 | P06 · P08 = P50(R-HAND) · P09 · P11 · P14 · P15 · P16 · P20 · P21 · P22 · P28 · P30 · P35 · P51 · P56 · P59 |
| STD 3:4 | 나머지 전부 (P04 = P24 M1 포즈 포함, P58 R 메아리 포함) |

### 4-2. 구도 규칙

1. **한 장 = 한 순간.** 그림 안에 칸 나누기 · 테두리 · 콜라주 없음. **예외는 P23 하나**(아래 4).
2. **풀블리드.** 흰 여백 · 프레임 없이 가장자리까지. 패널 사이 간격은 뷰어가 만든다(긴 여백: P12 · P24 · P47 · P55 · P60 뒤, 스크립트 표시).
3. **세로 흐름.** 독자는 위에서 아래로 읽고 말풍선은 위부터 읽힌다. 화자 · 행동은 가운데~아래, 말풍선 자리는 위쪽이 기본(§8).
4. **P23 3단 분할:** 9:16 한 장 안에 같은 폭의 세 칸을 위아래로 쌓고 가는 검은 가로 띠 두 줄로 나눈다. 위 = 칼자루에 얹힌 백 감찰의 큰 손(검은 소매), 가운데 = 놋 향로에 꽁초만 남은 향과 막 떨어지는 재, 아래 = 남색 치마 무릎 위 채령의 꽉 쥔 주먹(연두 소매 끝, 남색 끝동). Flow가 칸을 섞거나 망치면 대안: 한 장의 깊이 구도(전경 아래 = 채령의 주먹, 중경 = 향 꽁초, 뒤 위 = 칼자루의 손). 어느 쪽이든 말풍선 자리는 가운데 칸 옆 빈 벽 또는 아래 칸 위쪽.
5. **안전 영역:** 얼굴 · 손 · 핵심 소품(은침 · 그릇 테두리 · 손수건 모서리 · 노리개 · 당번 패)은 가장자리에서 폭의 8% 안쪽.
6. **인물 크기 비율 [고정]:** 백 183 > 홍 160 ≈ 민 158 > 채령 155 > 왕자 120. 같은 컷에 서 있으면 키 차이가 보이게. 채령은 L1에서 대부분 **무릎 꿇은 자세**, 왕자는 방석에 앉아 상 높이에 턱이 닿을 듯.

### 4-3. 카메라 앵글 규칙

| 규칙 | 내용 |
|---|---|
| 기본 | 눈높이. L1에서는 **앉은 사람의 눈높이**(카메라를 낮게), L2 · L3에서는 선 사람의 눈높이 |
| L1 축 (180도 규칙) | 창호지 벽은 **늘 화면 왼쪽**(빛 방향 고정). 왕자는 상 건너편(창 반대쪽 방석)에서 카메라를 향하고, 채령은 상의 **화면 오른쪽 옆**에 무릎 꿇는다. 출입문은 화면 오른쪽 벽, 감찰은 그 문가에 선다. 민 상궁은 같은 문의 문지방(뒤쪽, 작게). 리버스 샷은 클로즈업에서만 |
| 권위 = 로우앵글 | 백 감찰의 법도 선고(P17) · 다가섬(P27)은 로우앵글. 그의 그림자가 채령 위로 떨어진다 |
| 고변 = 하이앵글 | P26은 상 위를 내려다보는 하이앵글: 가로로 누운 은침이 화면을 가로지른다 |
| 민 상궁 | 다정한 장면(P07)은 정면 약간 위(채령 시점의 올려다봄 아님). **반전 장면(P52–P59)은 정면 눈높이**, 얼굴 크기만 커진다. 앵글로 악역을 만들지 않는다(빛만 바뀜) |
| 채령의 발견 | P16 국 표면은 채령의 시선(위에서 비스듬히), P21 · P51 눈은 익스트림 클로즈업 |
| L2 R 앵글 | P05 · P48(와이드)과 P08 · P50(손)은 **같은 카메라 · 같은 거리 · 같은 높이**(§5-3, §6-3) |
| L3 | 서랍장은 화면 오른쪽 벽, 높은 창은 화면 왼쪽 뒤, 문은 화면 왼쪽 벽. 감찰은 창빛을 등지고 선다(역광). 거리가 좁아지는 P37 → P41은 점점 타이트하게 |
| 원경 | P43 홍 숙수 연행은 회랑에서 안마당 너머로 보는 원경, 얼굴 없음. P11 상궁 뒷모습은 회랑 끝으로 흐리게 |
| 금지 | 더치 앵글 남발(P22 · P53만 약하게 허용), 어안 · 극단적 광각, 드론 부감 |

---

## 5. 일관성 규약 (프롬프트 조립)

### 5-1. 조립 순서 (prompt-smith · 모든 패널 같은 순서)

1. `Korean webtoon panel, <shot size, camera angle>:` + 이 컷의 행동 한 문장
2. **인물:** 이름 + `matching the attached reference image(s)` + 외형 토큰(주 인물 FULL, 나머지 SHORT, character-sheets) + 이 컷의 표정 · 자세(가변)
3. **장소:** LOC 토큰(§6). 같은 씬의 모든 패널은 **같은 문장**. 클로즈업은 SHORT 배경 문장
4. **소품:** 보이는 PROP 토큰(character-sheets §7), 빈 면 문구 포함
5. **조명:** LIGHT 토큰(§3-2)
6. **예약색 문장:** P08 · P16 · P29 · P50에만 (§2-4)
7. **말풍선 자리:** `art_space` 문장(§8) — 대사 · 생각 · 효과음이 있는 컷만
8. **STYLE_GLOBAL** (§1, 바꾸지 않는다)
9. 마지막 줄: `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark, calligraphy, Chinese characters, logos, panel borders.` (P23만 `panel borders`를 빼고 `extra panels`로. 필요하면 마침표 앞에 `extra people` 등을 덧붙인다)

### 5-2. 토큰 사용 규칙

- **불변 토큰은 문장을 바꾸지 않는다**(머리 · 눈 · 체형 · 식별 표식 · 의상 · 고정 소품). 바꿀 일이 생기면 art-director → character-designer(외형 토큰 [고정]).
- **가변**(표정 · 자세 · 손 위치 · 소품 상태 · 조명)은 패널 묘사에만 쓴다. 표정은 character-sheets의 표정 문장을 쓴다.
- **FULL / SHORT:** 그 컷에서 가장 크게 보이는 1명 = FULL, 나머지 = SHORT. 손 · 뒷모습 · 실루엣만 보이면 상태 토큰.
- **첨부(attach):** 보이는 인물마다 `_turnaround`, 얼굴이 크면 `_expressions`도. **패널당 3장 이내**(우선순위: 주 인물 → 둘째 인물 → 소품 카드 · 장소 플레이트 · 원본 패널). 첨부해도 외형 문장은 지우지 않는다.
- **좌우 표식 (검수 항목):** 채령 노리개 = **RIGHT 허리** · 민 상궁 흰 머리 = **LEFT 관자놀이**, 손수건 = **RIGHT 손**(또는 LEFT 소매 끝) · 백 감찰 흉터 = **RIGHT 턱선 아래**, 환도 = **LEFT 허리** · 홍 숙수 국자 = **RIGHT 손**. 정면 그림에서는 화면 반대편. 뒤집히면 REGEN.
- **같은 사람 = 같은 옷.** EP01 내내 다섯 명 모두 기본 의상 1벌. 갓을 벗은 백 감찰, 머릿수건 없는 홍 숙수는 그리지 않는다.
- **인물마다 장신구 1개(고정 소품)만.** 반지 · 귀걸이 · 목걸이 · 왕관 · 다른 노리개 추가 금지.

### 5-3. 고정 앵글 반복 (beatsheet R · twist-plan §2-5)

**반복 컷 만드는 법:** 원본 패널을 먼저 만든다 → 반복 컷 카드에 **원본 PNG를 첨부**하고 원본 프롬프트를 그대로 붙인 뒤 "바뀌는 것"만 고친다. PNG를 복사하지 않고 다시 그린다(flow_tool은 md5가 같은 파일을 중복으로 거른다).

| ID | 원본 → 반복 | 비율 | 두 컷이 같아야 하는 것 | 반복 컷에서만 바뀌는 것 |
|---|---|---|---|---|
| **R-WIDE** | P05 → P48 | 9:16 | VIEW_R(§6-3): 같은 카메라 · 거리 · 높이, 화면 왼쪽 1/3의 기둥, 기둥의 당번 판, 처마의 등롱, 오른쪽으로 물러나는 숙소 창호지 문들, 안마당 쪽 기와 | 빛: 아침 → 밤(LIGHT_L2_NIGHT, 등롱 켜짐). 인물: P05 상궁 + 채령(댕기) → P48 상궁 혼자 손수건으로 손을 닦음(얼룩 안 보이는 거리). 당번 판의 연두 끈 패: P05 **위 고리** → P48 **가운데 고리**(P09 이후) |
| **R-HAND** | P08 → P50 | 1:1 | 같은 프레이밍: 상궁의 두 손이 화면 가운데, 연청 손수건으로 손가락을 닦는 같은 동작, 얼룩 모서리 = 같은 자리(화면 오른쪽 아래) · 같은 크기 · 같은 색, 자두색 소맷부리 | 빛만: 아침의 맑은 빛 → 등롱의 주황빛 + 남청 그림자. P50은 얼굴 없음(손만), P08은 화면 위 가장자리에 채령의 어깨 · 댕기가 걸려도 된다 |
| **M1 포즈** | P04 → P24 | 3:4 | 왕자 미디엄 정면: 숟가락을 내려놓고 **그릇을 두 손으로 들어 테두리에 입을 대는** 같은 포즈, 같은 크기, 상 위 같은 배치 | 빛: 아침 → 한낮. 상: 아침상 → 점심 수라상(난초 손잡이 뚜껑은 열려 상 위에). P04 = 귀엽게 마심(채령 난감한 웃음, 화면 가장자리), P24 = 입에 대기 직전의 무구한 얼굴 |
| **R 메아리** | P05 → P58 | 9:16 → 3:4 | 상궁이 채령의 붉은 댕기를 고쳐 매는 **같은 손 동작**, 채령은 고개를 조금 숙임 | 거리(와이드 → 미디엄), 빛(아침 → 밤), 손수건은 보이지 않음(소매 속), 채령은 굳은 얼굴 |

---

## 6. 장소 고정 토큰 (LOC_*)

EP01은 world §8-2의 장소 3곳만 쓴다. 같은 장소의 시간대 변화는 **같은 구조 문장 + 다른 LIGHT 토큰**으로 만든다(구조 · 소품 위치는 그대로). 새 장소는 그 회차에 LOC를 추가한다.

### 6-1. 씬 ↔ 장소 대응

| scene_id | 패널 | LOC | VIEW · 메모 |
|---|---|---|---|
| S01 | P01–P04 | LOC_L1_TASTING | 아침상(작은 상). VIEW_L1_MAIN 중심 |
| S02 | P05–P12 | LOC_L2_CORRIDOR | VIEW_R(P05) · R-HAND(P08) · 당번 판(P09) · 기둥 옆(P12) |
| S03 | P13–P32 | LOC_L1_TASTING | 점심 수라상. VIEW_L1_MAIN · VIEW_L1_DOOR(P13 · P27 · P31) · VIEW_L1_TABLE(P14 · P16 · P26 · P29 · P30) |
| S04 | P33–P42 | LOC_L3_HERBSTORE | VIEW_L3_MAIN · 서랍장과 감찰 사이 좁은 틈(P37 · P41) · 문(P39) |
| S05 | P43–P47 | LOC_L2_CORRIDOR | 저녁. P43은 회랑에서 안마당 너머 원경 |
| S06 | P48–P60 | LOC_L2_CORRIDOR | 밤. VIEW_R(P48) · R-HAND(P50) |

- 하루 점프(P12 → P13)는 글자 없이 빛 · 상 · 감찰 · 새 향으로 알린다(beatsheet §3). P01–P04와 P13 이후는 **같은 방 · 같은 구조**, 다른 빛 · 다른 상.

### 6-2. LOC_L1_TASTING — 왕자 처소 시식방

- 시간대: 1일째 아침(S01) / 2일째 한낮(S03). 조명 LIGHT_L1_MORNING / LIGHT_L1_NOON.
- **방향 [고정]:** 창호지 미닫이 벽 = 화면 왼쪽(빛) · 왕자 = 상 건너편 방석(창 반대편), 카메라를 향함 · 채령 = 상의 화면 오른쪽 옆에 무릎 꿇음 · 향로 = 채령 곁 상 모서리 앞의 낮은 받침 위 · 출입문 = 화면 오른쪽 벽의 미닫이 문, 감찰은 그 문가 안쪽에 서고 민 상궁은 같은 문의 문지방에 작게 · 뒤 벽 = 무지 병풍.
- 전체 토큰 (와이드 · 첫 등장):
```
a small, tidy tasting room in the young prince's quarters of a fictional East Asian palace: the whole left wall is a row of cream rice-paper sliding doors with a simple wooden lattice and a single small orchid-leaf motif; oiled yellow paper-covered floor; dark brown wooden posts and ceiling beams; a plain undecorated folding screen in muted cream along the back wall; a sliding wooden door in the right wall; in the center a low dark red-brown lacquered meal table set with plain brass lidded bowls; a flat cushion for the prince on the far side of the table; at the near front corner of the table a small brass incense burner full of soft gray ash on a low wooden stand, with one thin stick of mugwort incense sending up a single thin line of smoke; beside the table a small plain white porcelain taster's dish and a tiny ladle, and a little wooden stand holding a few thin silver needles; no calligraphy, no signs, no patterns with characters, no text anywhere
```
- **아침상 (S01):** `a small breakfast table with only a few plain brass bowls (rice, soup, two side dishes)`
- **점심 수라상 (S03):** `a larger lunch table crowded with more plain brass lidded bowls, steam rising, a small white porcelain dish of brown vinegar among them, and in the center the prince's soup bowl, a brass lidded bowl whose lid knob is shaped like a small orchid bud`
- **VIEW_L1_MAIN** — 기본 (P01–P04, P17–P25, P32 등):
```
seen from low, at the height of people kneeling on the floor, across the low meal table: the rice-paper sliding doors glowing on the left of the frame, the prince seated on his cushion on the far side of the table facing the camera, the poison taster kneeling at the right side of the table, the brass incense burner at the near corner
```
- **VIEW_L1_DOOR** — 문 쪽을 넓게 (P13 · P27 · P31):
```
a wider view of the tasting room toward the sliding wooden door on the right: the doorway with its dark wooden frame, the meal table and kneeling taster in the middle ground, the glowing rice-paper doors at the far left edge
```
- **VIEW_L1_TABLE** — 상 위 클로즈업 · 부감 (P14 · P16 · P26 · P29 · P30):
```
a close view of the lacquered table top: plain brass bowls, the prince's soup bowl with its orchid-bud lid knob, the small white porcelain dish of vinegar, the white taster's dish, the wooden needle stand, warm light from the left
```
- 비고: 그릇 · 종지 · 향로는 **무늬 없는 놋 · 흰 사기, 단순 테두리 선만**. 壽 · 福 같은 한자 문양 금지(beatsheet §4). 병풍은 무지.

### 6-3. LOC_L2_CORRIDOR — 기미 궁녀 숙소 앞 회랑

- 시간대: 1일째 아침(S02) / 2일째 저녁 · 해 질 녘(S05) / 2일째 밤(S06). 조명은 §3-3.
- **방향 [고정]:** 회랑 마루가 화면 깊이 방향으로 이어진다. 화면 **왼쪽 = 안마당 쪽**(기둥 줄 너머 안마당 · 맞은편 기와지붕), 화면 **오른쪽 = 숙소 방문들**(흰 회벽 + 창호지 문 3~4개). 기준 기둥 = 화면 왼쪽 1/3 선. 당번 판 = 기준 기둥의 카메라 쪽 면, 가슴 높이. 등롱 = 기준 기둥 바로 오른쪽 처마 들보에 매달림.
- 전체 토큰:
```
a covered wooden veranda corridor in front of the palace maids' quarters in a fictional East Asian palace, late autumn: polished dark wooden floorboards running into the distance; on the right, white plaster walls with a row of three or four cream rice-paper doors to small rooms; on the left, a row of round warm ochre-brown wooden pillars open to an inner courtyard of packed earth with a few dry fallen leaves and the gray tiled roof of the opposite building; dark wooden eaves and rafters overhead; one plain round white paper lantern with a dark wooden frame hangs from the eave beam beside the nearest pillar; on that pillar, at chest height, hangs a small plain wooden duty board; no calligraphy, no signs, no writing anywhere
```
- **VIEW_R** — 기준 앵글 [고정] (P05 · P48, P12 · P47 근사):
```
fixed reference view: camera standing on the veranda at eye level, looking along the corridor at a slight angle; the nearest round ochre-brown pillar stands upright on the left third of the frame, dividing it vertically, with the small blank wooden duty board on its face; the paper lantern hangs from the eave just right of the pillar; the rice-paper doors of the maids' rooms recede along the right side; the courtyard and the opposite gray tile roof open beyond the pillars on the left; the upper right is calm white plaster wall and the plain underside of the eaves
```
- 등롱 상태: 아침 `the lantern is unlit, pale and plain` / 해 질 녘 `the lantern and a few farther lanterns along the eaves are just lighting up` / 밤 `the lantern is lit, glowing warm orange`.
- 원경 (P43): `from the veranda, looking across the courtyard: beyond the pillars and the packed-earth yard, small dark silhouettes of guards leading away a broad, stocky woman, faces not visible, under the orange sunset on the roof tiles`
- 비고: 아침 · 저녁 · 밤 사이에 **구조물 · 소품 위치가 바뀌면 REGEN**(기둥 위치, 등롱 위치, 당번 판 위치, 문 개수). 낙엽은 몇 장뿐.

### 6-4. LOC_L3_HERBSTORE — 내의원 약재고

- 시간대: 2일째 오후(S04). 조명 LIGHT_L3 · LIGHT_L3_DOOR.
- **방향 [고정]:** 약재 서랍장 = 화면 오른쪽 벽 전체 · 높은 창 = 화면 왼쪽 뒤 벽 위쪽(빛줄기가 화면 왼쪽 위에서 오른쪽 아래로) · 문 = 화면 왼쪽 벽 · 작업대 = 가운데 · 독 서랍 = 서랍장 맨 아래 끝(화면 오른쪽 아래 깊은 곳), 배경으로만.
- 전체 토큰:
```
a dim, sealed palace herb storeroom: the entire right wall is a tall dark walnut-brown apothecary cabinet of dozens of small drawers with round brass pulls, each drawer's label slot a small blank white paper with nothing written on it; at the bottom end of the cabinet one larger drawer with a black iron lock plate that has two keyholes; bundles of dried gray-brown roots and dusty olive herbs tied with string hang from a ceiling beam at the back; in the middle a heavy wooden workbench with a herb-cutting blade and a simple brass balance scale with two pans; a plain wooden door in the left wall; a single small high window in the back-left wall; no flowers, no calligraphy, no labels with writing, no text anywhere
```
- **VIEW_L3_MAIN** (P33 · P34 · P36 · P42):
```
seen from inside the storeroom: the tall drawer cabinet along the right side of the frame, the shaft of window light crossing from the upper left, the workbench in the middle ground, the door on the left
```
- **VIEW_L3_GAP** — 좁은 틈 (P37 · P38 · P41): `a tight space between the tall drawer cabinet and the inspector: the wall of small blank-labeled drawers fills the background, his large hand pressed flat against the drawers`
- 비고: 독 서랍은 **클로즈업 금지**, P33 와이드 배경에서만 형태가 읽힌다(W3). 약초에 꽃 없음(부록 A-2). 위쪽 들보의 약초 다발은 **뒤쪽 들보에만**: 앞쪽 위는 어두운 천장 그늘로 비워 말풍선 자리를 만든다.

---

## 7. 소품 토큰 (요약)

소품 영문 토큰과 상태 타임라인은 **character-sheets §7**에 있다(인물에 딸린 소품과 장면 소품을 한 곳에 모음). 원칙만 여기에 둔다.

1. 글이 적힐 만한 물건은 전부 **빈 면**: 당번 판 · 당번 패(빈 나무패 + 색 끈) · 서랍 이름표(빈 흰 종이) · 등롱(무지 한지) · 병풍(무지) · 현판(화면 밖).
2. 그릇 · 종지 · 향로 · 국자는 무늬 없음. 왕자 국그릇은 **난초 봉오리 모양 뚜껑 손잡이**로만 구별.
3. 은침은 **끝까지 은빛**. 검게 변한 은침은 EP01에 없다.
4. 재는 회색. 채령 손끝의 재 얼룩(P28 이후 · P41)도 회색이지 연보라가 아니다.
5. 연보라는 §2-4의 네 패널에만.

---

## 8. 말풍선 공간 규약 (Khmer edition)

> upstream B-6의 "in-image 말풍선 베이크" 규약을 **대체**한다. 이 프로젝트의 그림에는 말풍선도 글자도 없다. 말풍선은 뷰어(`km_tool.py build`)가 lettering spec의 `place`에 따라 HTML로 그 위에 그리고, 크메르어를 넣는다. 그림은 그 자리를 비워 둘 뿐이다.

**뷰어가 그리는 것** (모양은 뷰어 기본값, 이 작품의 쓰임만 정한다):

| 종류 (`type`) | 모양 | EP01 쓰임 |
|---|---|---|
| dialogue | 흰 둥근 말풍선, 가는 검은 테두리, 꼬리가 화자 쪽 | 대부분. 화면 밖 목소리(P15 감찰, P43 홍 숙수의 소리)는 꼬리가 그 가장자리 · 원경 실루엣 쪽 |
| thought | 구름형, 꼬리 없음 | 채령의 생각(P12 · P16 · P19–P23 · P38 · P49 · P55). 채령 속마음(언니에게 하는 말)의 목소리 |
| shout | 뾰족한 폭발형 | 홍 숙수(P13 · P43)와 왕자의 고집(P39), 채령 P25 "잠깐만요"는 letterer 판단. **민 상궁은 절대 shout 아님**(목소리를 높이지 않는다, characters §3-7) |
| narration | 사각 캡션 상자 | P60 끝 캡션만 |
| memory | 가장자리가 푸르게 흐린 말풍선 | EP01 미사용(회상 이미지 없음) |
| sfx | 말풍선 없는 큰 크메르어 글자 | P25 · P29 · P31 · P33 |

- 말풍선은 흰 바탕 + 검은 글자. **보라 · 라일락 계열 말풍선 금지**(예약색), 빨강 말풍선 금지(왕자 진홍과 겹침).
- 민 상궁의 반전 대사(P52–P59)도 같은 흰 dialogue 말풍선이다. 말풍선 모양으로 악역을 표시하지 않는다(말투 · 표정을 바꾸지 않는 원칙과 같은 이유).

**그림이 지키는 것 (`art_space`):**
1. 대사 · 생각 · 효과음이 있는 패널은 letterer의 `art_space` 자리를 **조용한 배경**으로 비운다: 창호지 벽, 무지 병풍, 흰 회벽, 처마 밑, 하늘, 어두운 천장, 밤 그림자, 흐린 배경. 얼굴 · 손 · 은침 · 그릇 테두리 · 손수건 · 노리개 · 당번 판 · 등롱이 그 자리에 오면 안 된다.
2. 기본 위치는 **위쪽**(읽는 순서). 화자는 가운데~아래.
3. 크기 기준 (크메르어 약 2줄 = 말풍선 폭 약 60%):
   - 3:4 — 1개: 위 약 20% / 2개: 위 약 35–40% / 3개(P13, 이 회차 유일): 위 약 45–50%
   - 9:16 — 1개: 위 약 15% / 2개: 위 약 25–30% / 3개: 위 약 35% (P13을 9:16으로 올릴 경우)
   - 1:1 — 1개: 위 약 25% / 2개: 위 약 40% 또는 위 왼쪽 · 위 오른쪽 두 모서리
4. 효과음은 소리 나는 곳 곁에 작은 빈자리: P25 손목 곁 · P29 테두리 위쪽 · P31 상궁의 **반대편** 위(beatsheet) · P33 닫히는 문 곁.
5. 장소별 자연스러운 빈자리: L1 = 화면 왼쪽 위의 빛나는 창호지 · 뒤의 무지 병풍 · L2 = 화면 오른쪽 위 흰 회벽과 처마 밑(VIEW_R), 밤에는 남청 하늘 · L3 = 앞쪽 위의 어두운 천장 그늘 · 클로즈업 = 흐린 배경 쪽 옆면.
6. 무대사 패널(P02 · P11 · P14 · P44 · P47 · P48 · P50 · P51 · P57 · P60)은 빈자리 없이 구도를 다 쓴다. 단 **P60은 아래쪽 띠를 비운다**(끝 캡션).

**영문 문장 (prompt-smith가 `art_space`를 옮길 때):**
- 위: `Keep the top third of the image as calm, empty background with no important details (a speech bubble will be added there later).`
- 모서리: `Keep the upper-left quarter of the image as calm, empty background with no important details (a speech bubble will be added there later).` (upper-right도 같은 꼴)
- 두 개: `Keep the top forty percent of the image as calm, empty background with no important details (two speech bubbles will be added there later).`
- 세 개(P13): `Keep the top half of the image, the plain screen and paper doors above the people, as calm, empty background with no important details (three speech bubbles will be added there later).`
- 생각: `Keep the upper area beside her head as soft, calm, empty background (a thought bubble will be added there later).`
- 효과음: `Leave a small calm area next to <the wrist / the bowl rim / the closing door> (a sound effect will be added there later).`
- 캡션(P60): `Keep a thin strip along the bottom edge as plain dark background (a caption will be added there later).`

---

## 9. 레퍼런스 시트 (요약 · 상세는 character-sheets §8)

| 구분 | 카드 | 비율 |
|---|---|---|
| 인물 (필수) | CHAERYEONG · PRINCE · MIN · BAEK 각 `_turnaround` + `_expressions`, HONG `_turnaround` | 16:9 |
| 소품 (필수) | PROP_HANKY_pair (깨끗한 / 얼룩 손수건 + 자두색 소매 = 색 대조) · PROP_TABLEWARE (왕자 국그릇 · 기미 그릇 · 식초 종지 · 은침 받침 · 향로 · 향 3단계) · PROP_DUTYBOARD (빈 당번 판 · 패, 연두 끈 위/가운데) · PROP_KEEPSAKES (노리개 · 나무 호랑이 · 놋 국자 · 환도) | 16:9 |
| 장소 플레이트 (권장) | LOC_L1_TASTING_plate · LOC_L2_R_plate · LOC_L3_HERBSTORE_plate | 16:9 / 9:16 / 16:9 |

- 레퍼런스만은 연출색 없는 중립 조명(STYLE_REF). 텍스트 · 라벨 없음. 저장: `_workspace/04_visual/refs/<카드명>.png`. 패널 렌더 전에 확정, 시리즈 외형 기준(회차 간 재사용).
- **실루엣 검사 [고정 · characters §0]:** 다섯 인물 턴어라운드가 나오면 art-director가 나란히 놓고 검은 그림자만으로 구별되는지 본다(땋은 머리 / 쌍상투 작은 몸 / 낮은 쪽머리 + 긴 당의 / 넓은 갓 + 칼 / 넓은 체구 + 머릿수건 + 국자).

---

## 10. 금지 · 주의

### 10-1. 전역 무글자 규칙 [고정 · Khmer edition]

- **어떤 Flow 이미지에도 글자가 없다:** 문자(어느 언어든), 한자 · 서예 · 현판 글씨, 숫자, 가짜 글씨, 도장, 말풍선, 캡션, 효과음 글자, 로고, 워터마크.
- **글이 적힐 물건은 빈 면:** 당번 판 · 당번 패 · 서랍 이름표 · 등롱 · 병풍 · 현판 · 그릇 문양. EP01에는 문서 · 쪽지 · 장부 · 입궁 패가 **나오지 않는다**.
- 단서는 색 · 모양 · 위치 · 행동 · 시선 · 대사로만. EP01에는 `env`(물건 위 글씨)가 없다.
- 프롬프트 끝은 항상 §5-1의 Avoid 줄. 레퍼런스 시트는 `Avoid: any text, labels, speech bubbles, watermark.`

### 10-2. 그 밖의 금지

1. 연보라는 §2-4 네 패널 밖에 없다. 보라빛 밤 · 노을 · 그림자, 보라 꽃, 보라 의상 금지.
2. 민 상궁 당의가 보라 · 바이올렛 · 라벤더로 보이면 REGEN. 반전 장면에서도 그녀의 표정을 차갑게 · 악하게 그리지 않는다(같은 미소).
3. 인물당 장신구 1개(고정 소품)만. 채령 몸에는 금속 장신구 없음(은침은 손에 들 때만).
4. 피 · 구토 · 쓰러진 몸 · 형벌 · 칼을 뽑은 장면 금지(EP01 환도는 칼집 속).
5. 같은 씬 안에서 배경 · 장소 · 시간대가 바뀌면 안 된다. L2는 빛만 바뀌고 구조는 같다.
6. 엑스트라는 회청 · 회색 옷, 원경 · 뒷모습, 얼굴 디테일 없음(P31 나인들, P43 군사들). 이름 있는 인물의 다섯 색 금지.
7. 실존 왕조를 특정하는 상징(용 문양 곤룡포 · 일월오봉도 · 태극 · 국기) 금지. 가상 왕국이다.
8. 왕자에게 왕관 · 익선관 금지(쌍상투 + 붉은 끈). 백 감찰을 미남 귀공자 · 내관으로 그리지 않는다.
9. 채령의 반쯤 감긴 눈 · 주근깨 · 점 금지. 앞머리 금지.
10. SD · 치비, 스크린톤, 포토리얼, 3D, 수묵 · 유화, 반짝이 로판 효과 금지.
11. 한 이미지 안의 칸 나누기 · 테두리 금지(P23만 예외).

### 10-3. Flow 드리프트 감시 목록 (panel-validator)

| 자주 생기는 일 | 판정 |
|---|---|
| 현판 · 병풍 · 그릇 · 등롱 · 이름표에 한자 · 가짜 글씨 | REGEN (C3 text-free) |
| 민 상궁 당의가 보라 · 라벤더로 | REGEN |
| 밤하늘 · 노을 · 그림자가 보라빛 | REGEN (예약색 보호) |
| 예약 패널이 아닌데 연보라(손수건 얼룩이 보임, 국물 윤기) | REGEN |
| P08 · P50 얼룩의 자리 · 크기 · 색이 다름 | REGEN (P50 필수) |
| 좌우 표식 뒤집힘(노리개 허리 · 흰 머리 · 흉터 · 환도 · 국자 손) | REGEN |
| 채령 머리가 두 갈래 · 올림머리, 댕기 색이 다름 | REGEN |
| 왕자 머리가 상투 하나 · 왕관 | REGEN |
| 백 감찰 갓이 없음 · 너무 잘생긴 얼굴 · 칼을 뽑음 | REGEN |
| 고정 앵글 짝(R-WIDE · R-HAND · M1)에서 기둥 · 등롱 · 손 위치가 다름 | REGEN |
| 은침이 검게 · 잿빛으로 | REGEN |
| 장신구 추가(반지 · 귀걸이 · 비녀 여러 개) | REGEN |
| `art_space` 자리에 얼굴 · 핵심 소품 | REGEN 또는 letterer에 `place` 이동 제안 |

---

## 11. 하류 인계 · 결정 · 열린 항목 (팀 메시징 대체)

| 대상 | 가져갈 것 |
|---|---|
| **ref-sheet-artist** | character-sheets §8 카드 사양 → `refs/ref_prompts.md` (필수 13 + 권장 3). STYLE_REF와 레퍼런스 Avoid 줄. 텍스트 없는 깨끗한 도감. MIN 시트 · PROP_HANKY_pair에서 자두색 ≠ 연보라 확인 |
| **panel-director** | §4 비율 권장(고정 앵글 짝은 같은 비율), §4-3 카메라 규칙, §5-3 고정 앵글 표, §6-1 씬 ↔ LOC, §6 방향 고정, character-sheets §7 소품 타임라인, §8 자연스러운 빈자리. 모든 패널에 scene_id · location. 예약색 4패널 · STAIN 2패널 표기 |
| **letterer** | §8 말풍선 종류 · 크기 기준, 민 상궁 shout 금지, `art_space`는 한국어로 써도 됨(prompt-smith가 영문화) |
| **prompt-smith** | §5-1 조립 순서, STYLE_GLOBAL · LOC · VIEW · LIGHT 토큰 원문, §2-4 예약색 문장, §8 영문 문장, 첨부 규칙(패널당 3장 이내), Avoid 줄 |
| **panel-validator** | §2-4 예약색 표, §10 금지 · 드리프트 표, character-sheets §9 인물 검수표 |

**이 문서에서 정한 것 (상류 문서와의 정합):**
1. L1 방향: 창 = 화면 왼쪽(world §8-2 권장 채택), 채령 = 상의 화면 오른쪽, 출입문 = 화면 오른쪽 벽, 감찰 = 문가, 민 상궁 = 같은 문의 문지방.
2. L2 VIEW_R: 기둥 = 화면 왼쪽 1/3, 안마당 = 왼쪽, 숙소 문 = 오른쪽, 등롱 = 기둥 오른쪽 처마. 화면 오른쪽 위가 말풍선 자리(beatsheet P05 "기둥 반대편 상단").
3. 당번 판: 연두 끈 패 P05 위 고리 → P09 손으로 옮김 → P48 가운데 고리. 다른 패의 끈 = 회청 · 바랜 갈색 · 흰색(보라 · 빨강 금지).
4. 왕자 국그릇 = 난초 **봉오리** 모양 뚜껑 손잡이(world §8-2 "청란 모양"을 Flow가 그리기 쉬운 형태로).
5. P23 3단 분할 허용(유일한 칸 나눔 예외) + 깊이 구도 대안.
6. 밤 · 노을의 "보라 금지"를 조명 토큰에 넣었다(예약색 보호의 확장).

**열린 항목:**
- **P13 3풍선:** 3:4 와이드에서 자리가 모자라면 panel-director가 9:16으로 올리거나 letterer가 3번 풍선을 지운다(script-editor 허용).
- **P23**이 Flow에서 3단으로 안 나오면 §4-2 4의 깊이 구도로(panel-director).
- **P47 등롱 "하나둘":** VIEW_R의 등롱 하나 + 먼 처마의 작은 등롱 두어 개. 먼 등롱은 밤 컷(P48 이후)에도 켜진 채 배경에 남아도 된다(새 구조물이 아니라 원래 있던 등롱). 아침 · 저녁 컷에서는 너무 작아 안 보이는 거리.

---

## 12. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-17 | 최초 작성: 화풍 · STYLE_GLOBAL/REF, 팔레트 · 예약 연보라 4패널, 밤/노을 보라 금지, 조명 토큰 9개, Flow 비율 등급 · 배정, 카메라 규칙, 조립 순서 · 고정 앵글 4종, LOC 3개(+VIEW), 말풍선 공간(Khmer edition), 금지 · 드리프트 |

- 일관성 토큰(STYLE_GLOBAL, LOC, LIGHT)은 패널이 그려진 뒤에는 바꾸지 않는다. 바꾸면 영향 패널 목록을 이 표에 적고 prompt-smith에게 알린다(이 실행에서는 문서로).
