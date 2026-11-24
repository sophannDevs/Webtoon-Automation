# 스타일 바이블: 「날개 달린 그림자」 (EP01~, 시리즈 자산)

- 작성: art-director · 2026-11-24 · 첫 작성 (Phase 4, Flow-by-hand mode, Khmer edition)
- **기본 화면비 (default aspect): 9:16** (세로 스크롤 기본값. 패널별 크기는 §5-1 표를 따른다)
- 입력: `00_input/brief.md`(LOCKED 1–11, LEADER RULINGS A–W), `02_story/characters.md` §9–§10, `02_story/world.md` §1-3·§2-2·§8·§9, `02_story/concept.md`, `02_story/twist-plan.md` EP1 §2-5·§2-6, `02_story/tension-curve.md` §2, `03_episode/ep01_script_final.md`(읽기만), `01_research/trend-brief.md` §0-4·§4-3·§6-3
- 짝 문서: `04_visual/character-sheets.md`(인물 토큰 · 표정 · 레퍼런스 카드 사양)
- 쓰는 사람: ref-sheet-artist, panel-director, letterer, prompt-smith, panel-validator, quality-reviewer
- 원칙: 이 문서는 상류 결정을 **바꾸지 않는다.** 외형·장소·규칙·연출 조건은 characters.md · world.md · twist-plan.md 그대로이고, 여기서는 작화 언어와 Flow 프롬프트 문자열로 옮겼다. 충돌과 처리는 §14.
- 표기: 영어 블록은 Flow 프롬프트에 그대로 붙여 넣는 문자열이다. 한국어는 작업 설명이다. **이미지에는 글자가 하나도 없다**(말풍선·효과음·제목·끝 캡션은 뷰어가 크메르어로 그린다).
- **인물 이름을 Flow 프롬프트에 쓰지 않는다** (ruling M). 프롬프트 속 인물은 QUEEN · HOSTAGE · CHANCELLOR · ENVOY · CAPTAIN. 레퍼런스 카드 파일 이름(LINE_, HERON_ …)은 파일·문서에서만 쓴다.

---

## 0. 한눈에 보기

| 항목 | 결정 |
|---|---|
| 장르 화풍 | 한국 스튜디오 **로맨스 판타지 풀컬러 웹툰**(서양 하이판타지 궁정물). 상위작 공통 문법: 미형 남주, 여주의 눈과 자세, 긴 세로 컷과 여백, 의상·건축 디테일 |
| 톤 | **햇빛과 칼날 그림자의 정치 로맨스.** 낮은 눈부신 흰 돌과 금빛 해, 밤은 잉크빛 남색과 횃불 주황. 감정은 시선·거리·손으로. 공포·고어 아님 |
| 수위 감각 | "15세판의 화면 + 19세판의 주제". 관능은 시선, 줄어드는 거리, 닿지 않는 손, 숨에서. 노출 0 |
| 무대 | 협곡 왕국 타렌, 바위를 깎은 로마네스크 성, **늦여름 건기**(구름·비·눈·안개 없음). EP1 밤은 **그믐**(달 없음) |
| 장소 | 정확히 5곳: `LOC_GATE` · `LOC_CORRIDOR` · `LOC_ROOMS` · `LOC_HALL` · `LOC_TERRACE` (§7) |
| 판타지 그림 | 날개 그림자 하나뿐(§8). 용의 몸은 **그리지 않는다**(EP1–3). 그는 그림자를 만들지 않는다(§9) |
| 색 대본 | 정오 흰 돌·금빛 해·청보라 칼날 그림자 / 늦은 오후 금빛 띠 / 밤 잉크 남색·횃불 주황 / 등잔 호박 / 진홍은 깃발·망토·반지 돌에만 / 금빛 피는 몇 방울, 왼팔뚝에만 (§3) |
| 화면비 | 기본 9:16. XL 9:16 · L 3:4 · M 1:1 · ST 16:9 (§5-1) |
| 글자 | **0.** 깃발은 흰 해 원반뿐, 부조는 해와 날개뿐, 문장은 도형, 조약·청원·명령은 존재하지 않는다(물건과 말로) |
| T-c 판정 | **발동하지 않는다.** 날개 그림자는 벽·바닥 그림자 단독 구도로 안정적으로 표현할 수 있다(§8-6) |
| Flow 조립 | 모든 프롬프트 = STYLE_CORE → 컷·카메라 → 인물(레퍼런스 + 토큰 + 표정 + 상처 상태) → 장소 + 빛 → 동작·그림자 → 빈 말풍선 자리 문장 → 장면 부정어 → NEGATIVE (§13-2) |

---

## 1. 복붙 블록: STYLE_CORE와 NEGATIVE [고정]

모든 패널 프롬프트의 **맨 앞에 STYLE_CORE**, **맨 끝에 NEGATIVE**를 그대로 넣는다. 줄이거나 바꾸지 않는다(바꾸면 64장이 서로 다른 화풍이 된다).

**STYLE_CORE (패널용, 약 60단어)**
```
Single full-frame illustration in polished Korean romance-fantasy webtoon (manhwa) style, full colour: clean fine dark-brown lineart, soft cel shading with subtle painterly gradients, detailed fabric and carved-stone textures. Western high-fantasy kingdom carved into a pale limestone canyon, late-summer dry season. Bright clear light against crisp, sharp-edged blue-violet shadows. Mature adult characters, realistic elegant proportions, expressive eyes and hands, cinematic framing.
```

**NEGATIVE (패널용, 맨 끝. 마지막 문장은 Khmer edition 고정 문장 그대로)**
```
No childlike or teenage faces, no oversized anime eyes, no glowing effects, sparkles or magic auras, no tattoos or symbols on skin, no nudity, no comic-page layout or panel borders. Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.
```

**REF_STYLE (레퍼런스 카드용, STYLE_CORE 대신 맨 앞)**
```
Clean character reference sheet in polished Korean romance-fantasy webtoon (manhwa) style, full colour: clean fine dark-brown lineart, soft cel shading with subtle painterly gradients, detailed fabric textures. Western high-fantasy clothing. Mature adult character, realistic elegant proportions. Even soft neutral studio light, plain light warm-grey background, no scenery, no dramatic colour grading.
```

**REF_NEGATIVE (레퍼런스 카드용, 맨 끝. 마지막 문장은 flow-handoff 고정 문장)**
```
No childlike or teenage faces, no oversized anime eyes, no glowing effects, no tattoos or symbols on skin, no grid lines, arrows or measurement marks. Avoid: any text, labels, speech bubbles, watermark.
```

- 장면별 부정어는 NEGATIVE **앞**에 한 문장으로만 더한다. 정해진 장면 부정어는 §8-5(그림자 컷), character-sheets §2-9(HOSTAGE가 나오는 컷)에 있다. **장면에 나올 리 없는 것(비, 유리, 동물 등)은 쓰지 않는다**: 부정문 속 낱말이 오히려 그것을 불러올 수 있다. Flow가 실제로 그려 넣었을 때만 그 패널의 재생성 프롬프트에 더한다.
- 레퍼런스 카드 끝 문장 `Avoid: any text, labels, speech bubbles, watermark.`, 패널 끝 문장 `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.` 이 두 문장은 각자 프롬프트의 **마지막 문장**이어야 한다.

---

## 2. 작화 스타일과 선 · 채색 처리

### 2-1. 작화 스타일
- 한국 로판 웹툰 상위작의 **반사실 미형**: 길고 우아한 비율, 큰 눈이지만 성인 얼굴(눈 크기는 얼굴 폭의 1/5 안팎), 또렷한 턱선. 다섯 인물 모두 분명한 성인(24–약 70세 외모).
- 화려함은 **빛과 재질**에서 온다(흰 돌의 반사, 금실, 무광 금빛 눈, 횃불). 반짝이·꽃잎·보케 장식은 쓰지 않는다(장르의 "화사함"을 이 작품은 정오의 흰빛으로 대신한다).
- 배경은 **바위를 깎은 로마네스크**: 반원 아치, 원통 궁륭, 굵은 원기둥, 해 원반 + 막 날개 조각 기둥머리, 두꺼운 벽, 회칠한 실내(world §9-2). 사람 형상 부조·문자 띠 없음.

### 2-2. 선
- 가는 짙은 갈색 선, 인물 외곽선은 배경보다 조금 굵게. 흰 상복은 선이 약해지기 쉬우므로 옷 주름 선을 또렷하게 남긴다(흰 옷이 흰 돌에 녹아 사라지면 재생성 사유).
- 그림자에는 **선을 쓰지 않는다**: 그림자는 면이다. 날개 그림자는 외곽선 없는 납작한 검은 면, 가장자리는 칼날처럼 선명(§8).

### 2-3. 채색
- 소프트 셀 + 옅은 회화 그라데이션. 하이라이트는 넓고 부드럽게, 그림자는 또렷한 경계의 투명한 청보라.
- 금속(금관, 반지, 청동 흉갑, 브로치, 머리 고리)은 **무광~반광**. 빛을 내지 않는다. 금빛 눈도 무광 금속 홍채(빛나면 재생성).
- 피부: 리네 밝고 따뜻함 / 헤론 따뜻한 밝은 갈색(금빛 기) / 바실 밝고 붉은 기 / 우르 짙은 갈색 / 토라 짙게 그은 갈색. 다섯 피부색을 섞지 않는다.

---

## 3. 색 팔레트와 장면 색 대본

### 3-1. 색 토큰 [world §9-1 값 확정]

| 토큰 | HEX | 쓰임 |
|---|---|---|
| STONE_WHITE | `#ECE4D3` | 관문·계단·성의 흰 석회암. 정오에 눈부시다 |
| CANYON_RUST / RUST_DEEP | `#B4562F` / `#7E3520` | 협곡 벽의 가로 띠 |
| SAND_CREAM | `#D8C29C` | 띠 사이 사암 |
| SKY_NOON | `#A9C8DF` | 옅고 단단한 파랑, 구름 없음 |
| SUN_GOLD | `#EDBB55` | 햇빛. 늦은 오후는 더 붉게 `#E39A3E` |
| SHADOW_BLADE | `#23223A` | 모든 그림자의 청보라 먹빛. **날개 그림자는 가장 짙은 값(거의 검정 `#121222`)** |
| GRASS_DRY | `#C7A35B` | 협곡 가장자리 마른 풀 |
| BANNER_CRIMSON | `#9C1C1F` | 깃발·바실과 근위대의 망토·홍옥수 계열 |
| NIGHT_INK | `#18203D` | 그믐 별빛 밤 |
| TORCH_ORANGE / LAMP_AMBER | `#E8742B` / `#F2A84A` | 횃불·화로 / 등잔 |
| MOURNING_WHITE | `#F2EEE6` | 궁정 흰 상복(리네 `#F2EEE6`, 다른 이 `#EDE8DE`) |
| GOLD_ROYAL | `#C9A045` | 리네의 금관·금실 허리띠·반지 테. **궁정에서 리네만** |
| KIN_CHARCOAL / KIN_BRONZE | `#2E2C2B` / `#8C6B3E` | 용족 옷 숯빛·짙은 청동 |
| BLOOD_GOLD / BLOOD_DRY | `#D8A31E` / `#8A672B` | 금빛 피(무광 금속빛) / 마른 얼룩. **소량** |
| CARNELIAN | `#9B2D1F` | 반지 돌 |

- **진홍은 깃발·망토(바실, 토라, 근위대)·반지 돌에만.** 리네와 헤론의 옷에는 진홍이 없다(characters §9-8).
- **금 장신구는 리네만.** 다른 궁정 사람의 금 장신구는 재생성 사유(흰 상복 무리 속에서 리네를 가르는 장치).
- **피할 팔레트 [잠금]:** 에메랄드 유리·병 초록·겨자색·고딕 램프(`gloves`), 회청 비·우산 색(`umbrella`), 꿀빛·호박빛 궁궐 실내 전체(`poison`). 이 작품의 실내 호박빛은 **등잔 한 점의 웅덩이**로만 쓰고 방 전체를 꿀색으로 칠하지 않는다.

### 3-2. 장면 색 대본

| 구간 | 지배색 | 포인트 | 채도·명도 |
|---|---|---|---|
| B1–B2 정오 (P1–12) | STONE_WHITE · SKY_NOON | 금빛 해, 진홍 깃발, 검은 아치, 칼날 그림자 | 고명도, 강한 명암. 그림자는 가장 짙다 |
| B3 늦은 오후 (P13–20) | SUN_GOLD 띠 · 청보라 긴 그림자 | 마른 금빛 풀, 협곡 붉은 띠 | 따뜻하고 대비 큼 |
| B4 해 질 녘 (P21–28) | 회칠 벽의 회청 · 창의 주황→남색 | 검은 쇠 자물쇠·열쇠, 진홍 벽걸이(그녀의 방) | 중명도, 차분 |
| B5 연회 밤 (P29–36) | TORCH_ORANGE · 짙은 갈색 그림자 | 흰 상복 무리, 진홍 깃발, 날개 그림자 | 따뜻하고 어두움 |
| B6 테라스 별빛 (P37–42) | NIGHT_INK | 별, 흰 돌 난간의 차가운 윤곽 | 저명도, 저채도 |
| B7 횃불 (P43–48, P50) | NIGHT_INK + TORCH_ORANGE | 금빛 피 몇 방울, 절벽의 검은 왕관 그림자 | 최대 대비 |
| P49 회상 | 정오 팔레트 | 하이라이트 조금 바램 + 부드러운 흰 비네트 | 밤 컷들 사이의 흰빛 = 시간 건너뜀 |
| B8 횃불 여럿 (P51–57) | TORCH_ORANGE 여러 점 · NIGHT_INK | 흰 리넨, 흰 천 | 대비 조금 누그러짐 |
| B9 등잔 (P58–64) | LAMP_AMBER 한 점 · 짙은 갈흑 | 빛나는 문간, 흰 벽의 날개 그림자 | 저명도, 따뜻함 한 점 |

---

## 4. 빛과 시간 레시피 (시간은 빛이 말한다. 캡션 없음)

장소 토큰 뒤에 붙인다. 한 장면 안에서 빛 문장을 바꾸지 않는다.

| 토큰 | EN (프롬프트용) | 쓰는 곳 |
|---|---|---|
| LIGHT_NOON | `harsh white noon sun high in a cloudless pale hard-blue sky, white stone glaring, short razor-sharp blue-black shadows pooled directly under every figure, light bouncing up from the white stone onto faces` | P1–P12 |
| LIGHT_AFTERNOON | `low late-afternoon golden sun slanting through the columns, alternating bars of warm gold light and long blue-violet shadows across the floor and up the inner wall, dust floating in the beams` | P13–P20 |
| LIGHT_DUSK | `dusk: the sky above the courtyard fading from orange to deep blue, the chamber dim and cool, a faint warm glow at the window` | P21–P28 |
| LIGHT_HALL | `night: warm orange firelight from the great iron fire basket behind the high table and torches on the columns, deep brown-black shadows, narrow high windows black` | P29–P36 |
| LIGHT_STARS | `moonless night, only starlight, everything in deep ink-navy darkness, faces as dim cool outlines, torch stands unlit` | P37–P40, P42 |
| LIGHT_TORCH | `moonless night lit by hand-held torches, hot orange torchlight against ink-navy darkness, hard steady shadows` | P41, P43–P48, P50–P57 |
| LIGHT_LAMP | `midnight, a single small oil lamp in a wall niche is the only light, a warm amber pool, the rest of the room deep brown-black` | P58–P64 |
| LIGHT_REPLAY | LIGHT_NOON + `, highlights slightly faded and a soft white vignette at the edges, like a memory` | P49 |

- 그림자의 방향은 빛의 방향을 따른다. 정오 = 발밑에 짧게, 회랑 = 안쪽 벽으로 길게, 연회 = 높은 탁자 앞 통로로, 테라스 P46 = 동쪽 절벽면으로, 등잔 = 그녀 뒤 벽과 천장으로(world §2-2).
- 그믐밤이므로 **달을 그리지 않는다.** 달빛이 생기면 재생성.

---

## 5. 화면비와 세로 스크롤 구도 문법

### 5-1. 패널 크기 → 화면비

| 크기 | 화면비 | 용도 | EP1 패널 |
|---|---|---|---|
| **XL** 세로 대형 풀블리드 | **9:16** | 시간 정지: 첫 훅, 규칙, 낙차, 반전, 관계 정점, 마지막 컷 | **P1, P4, P38, P46, P61, P64** (이 6개만, tension-curve §2-1) |
| **L** 큰 컷 | **3:4** | 장면을 여는 와이드, 무게 있는 투샷, 깊이 구도, 리플레이 | P3, P11, P13, P20, P21, P29, P41, P45, P47, **P49**, P58 (대본 표기) |
| **M** 보통 | **1:1** | 대화 컷의 기본, 얼굴과 손 클로즈업 | 대본의 M 표기 |
| **ST** 가로 띠 | **16:9** | 인서트, 손·물건의 동작, 액션 박자 | P12, P27, P33, P43, P44, P55 |

- **Flow에 비율이 없을 때 (대체 규칙):** 16:9, 9:16, 1:1은 늘 있고 3:4는 모델에 따라 없을 수 있다. **3:4가 없으면 L은 1:1로** 만든다(L을 9:16으로 만들면 XL 6개의 무게가 흐려진다). 단 세로 흐름이 핵심인 L(P41 아케이드 위에서 내려오는 궁수, P20 하늘을 보는 로우 앵글)만 9:16을 허용. 판단은 panel-director, 기록은 prompt-smith의 `aspect:` 줄.
- **짝 컷 P3 ↔ P49는 반드시 같은 비율** [잠금, ruling S]: 둘 다 3:4, 3:4가 없으면 둘 다 1:1.
- **XL 6개는 모두 풀블리드**(가장자리까지 그림). 말풍선이 있는 XL은 **P38, P61** 두 개이며 `art_space`를 크게 잡는다(§6). P4는 화면 밖 군중 말풍선 하나가 있다(위쪽 하늘·계단 끝).
- 패널 테두리, 칸 나누기, 여러 컷이 한 장에 든 만화 페이지는 만들지 않는다(한 프롬프트 = 한 컷). 패널 사이 간격(`gap_after`)은 뷰어가 만든다.

### 5-2. 세로 스크롤 읽기 흐름
- 시선은 **위 → 아래.** 원인(빛, 얼굴, 말)을 위에, 결과(그림자, 손, 물건)를 아래에. 이 작품의 대표 세로 문법은 **"빛 → 사람 → 그림자"**의 3층(P1: 하늘·관문 → 아치 → 계단의 작은 형체 / P46: 횃불 → 절벽의 거대한 그림자 → 아래의 작은 궁수들).
- **크기 = 시간.** 대화 합은 M을 이어 빠르게, 정점은 XL로 느리게. XL이 붙지 않는다(P45 L → P46 XL → P47 L).
- **손과 얼굴은 두 컷으로**: 반지 신호(P36), 참는 손(P31), 천 건네기(P56)는 손 컷을 따로 둔다. 한 컷에 둘 다 넣을 때는 얼굴 위, 손 아래.

### 5-3. 기본 무대 축 (180도 규칙)
- 둘이 마주 설 때 기본은 **QUEEN = 화면 왼쪽, HOSTAGE = 화면 오른쪽.** 이 축에서 그녀의 **오른손 반지**는 화면 가운데 쪽, 그의 **오른손 흉터**도 화면 가운데 쪽으로 와서 손 컷이 쉽게 읽힌다.
- 예외는 world·characters의 고정 배치가 이긴다: **P45** 그는 그녀의 오른쪽(서쪽, 난간 쪽) — 그녀가 카메라 쪽(남쪽)을 향하면 그가 화면 왼쪽에 온다. **P61** 등잔은 그녀 앞, 그는 한 걸음 뒤(측면 세로 구도). 한 장면 안에서 축을 이유 없이 뒤집지 않는다.
- **키 차이:** 그녀의 눈높이 = 그의 턱, 그녀의 정수리 = 그의 입 높이. 투샷마다 지킨다(P62–64는 그가 고개를 숙이고 그녀가 올려다본다).
- 방위(world §9-9): 단상은 남쪽(관문)을 향하고 정오 해는 남쪽 높이(단상에서 보면 관문 부조 위). 회랑은 서향. 테라스는 서쪽 협곡 위, 아케이드와 절벽면은 동쪽, 남서쪽 멀리 관문 실루엣.

### 5-4. 매치 컷 (앞 컷을 레퍼런스로 붙여 만드는 쌍)
뒤 컷을 만들 때 **이미 확정된 앞 컷 이미지를 Flow에 함께 붙인다.** prompt-smith는 뒤 컷 블록의 `attach:`에 앞 컷 파일을 넣는다. 앞 컷을 반드시 먼저 만든다.

| 앞 컷 → 뒤 컷 | 같게 할 것 | 다르게 할 것 |
|---|---|---|
| **P3 → P49** ★ | 화면비, 축(아치 ↔ 흰 계단 ↔ 단상 ↔ 왕성), 같은 순간(그림자가 계단 **중간**), 정오 빛, 사절단 수 4–6과 무릎 높이 | 시점이 반대편(P3 단상 쪽에서 남쪽으로 조금 높이 / P49 아치 속에서 북쪽으로 무릎 높이), P3 아치 속 형체는 알아볼 수 없게 어둡게 · P49 사절단 등은 또렷하게, P49는 LIGHT_REPLAY |
| P4 → P46 | 날개 그림자 실루엣(같은 자세, 같은 날개 뼈 수), 그녀의 작은 사람 그림자가 용의 가슴 자리 | 위에서 본 판 → 옆모습, 머리 숨김 → **관뿔 노출**, 크기(단상 → 절벽 전체) |
| P13 → P29 | 옆모습 날개 그림자, 머리를 가리는 방식 | 기둥 그림자 띠 → 높은 탁자의 그림자 |
| P15 → P25 → P47 | 우르의 몸짓 사전: 오른 주먹, 왼쪽 가슴(심장) 위, 손등이 앞 | 비켜서며 눈 내림 → 서서 주먹 → 한쪽 무릎 + 주먹 |
| P28 → P58 | 연결문과 그의 쪽 자물쇠·꽂힌 열쇠의 모양·위치 | 해 질 녘 → 한밤 등잔, 닫힘 → 한 뼘 열림(그의 쪽에서) |
| P34 → P36 | 반지(돌의 크기·색, 오른손 검지) | 시선 결투의 얼굴 → 탁자 위 두 번 두드리는 손 |
| P38 → P51 | 남쪽 끝 난간의 **같은 구리빛 갈고리** | P51은 밧줄이 늘어지고 사람 없음 |
| P5 → P64 | 그의 금빛 눈과 세로 동공의 모양 | 정오 가는 틈 → 등잔 아래 넓은 타원 |

---

## 6. 빈 말풍선 자리 만드는 법 (Khmer edition)

말풍선은 뷰어가 그림 위에 얹는다(흰 바탕, 짙은 테두리, §10). 대사가 있는 패널은 letterer의 `art_space`를 **조용한 배경**으로 비워 둔다. 단, 빈칸처럼 보이면 안 된다: **세계 안에 실제로 있는, 디테일이 적은 면**을 그 자리에 둔다.

1. **위치:** 대부분 **화면 위쪽 25–35%**, 화자 쪽. 읽는 순서가 위 → 아래이므로 말풍선이 위, 그림의 핵심(그림자, 손, 얼굴)은 아래. 예외는 letterer가 정한 자리(P61은 **아래쪽 어두운 바닥**, P47은 우르 머리 위 어두운 아케이드).
2. **인물 배치:** 대사 컷(M, L)은 머리 꼭대기를 화면 위에서 약 30% 아래에. 손과 소품은 아래 1/3.
3. **장소별 조용한 면:**

| 장소 | 말풍선 자리로 쓰기 좋은 면 (EN) |
|---|---|
| `LOC_GATE` | `the plain pale hard-blue noon sky above the dais` / `the smooth pale limestone face of the gate wall, softly out of focus` |
| `LOC_CORRIDOR` | `the smooth whitewashed inner wall in a band of soft shadow` / `the pale sky between the columns` |
| `LOC_ROOMS` | `the plain whitewashed wall above the door, in dim light` / `the dark upper corner of the chamber beyond the lamp's pool` |
| `LOC_HALL` | `the dark barrel vault high above, softly out of focus` / `the half-dark empty gallery wall` |
| `LOC_TERRACE` | `the starry ink-navy sky above the parapet` / `the dark arched niches of the arcade, softly out of focus` |

4. **완성되어 보이게:** 그 면은 낮은 대비, 부드러운 그라데이션, 옅은 질감(돌결, 회벽, 별, 어둠의 깊이). 순백·순흑의 평면, 잘린 듯한 빈 띠는 실패다.
5. **흰 말풍선이 잘 읽히는 면:** 밤 컷은 거의 모두 좋다. 정오 컷은 하늘이나 그늘진 돌벽을 쓴다(눈부신 흰 돌 위는 피한다; 뷰어 말풍선에 굵은 테두리가 있어 읽히긴 한다).
6. **금지:** 그 자리에 얼굴, 손, 반지, 날개 그림자의 몸통·날개, 열쇠·자물쇠, 금빛 피, 횃불 불꽃을 두지 않는다. **날개 그림자는 말풍선에 가려지면 안 된다**(P4, P13, P29, P61).
7. **화면 밖 화자**(P4 군중): 화자가 있는 쪽 가장자리(위쪽 계단 끝·협곡 벽 쪽)를 조용하게 남긴다.
8. **효과음 패널**(P2 종, P31 금 가는 돌, P36 두드림, P41·P44·P45 등): 뷰어가 크메르어 효과음을 그린다. 소리 나는 물건 옆에 작은 조용한 면을 남긴다.
9. **프롬프트 문장 (prompt-smith가 그대로):** `Keep <art_space를 영어로, 그 면이 무엇인지까지> as calm, empty background with no important details (a speech bubble will be added there later).` 예: `Keep the upper third, the plain pale noon sky above the dais, as calm, empty background with no important details (a speech bubble will be added there later).`

---

## 7. 장소 고정 토큰 (LOC_*) [world §8 그대로, 프롬프트 길이에 맞게 다듬음]

- 각 장소에 **FULL**(와이드·장면을 여는 컷)과 **SHORT**(클로즈업·투샷, 약 20–30단어) 두 판. 같은 장면의 모든 패널은 같은 토큰을 쓴다. 프롬프트 안에는 토큰 이름이 아니라 영어 문장을 붙여 넣는다.
- 공통: 글자·숫자 없음, 군중은 실루엣, 사슬·족쇄·우리 없음. 비·구름·유리·우산 없음(장면 부정어로 쓰지는 않는다, §1).
- 장면 안에서 장소·시간대가 바뀌면 재생성(장소 급변 금지). P49만이 의도된 예외(밤 테라스 사이의 정오 관문 회상).

### 7-1. `LOC_GATE` — 「정오의 문」, 광장, 흰 계단, 단상 (B1–B2 P1–P12, P49 회상)
- **FULL:**
```
a colossal wall of pale limestone blocks closing the end of a deep canyon banded rust-red and cream, pierced at its base by one huge round arch whose deep tunnel stays pitch dark even at noon; above the arch a giant carved relief of a sun disc between two outspread membranous wings, small sun discs and folded wings carved around the arch; a sunbaked pale stone plaza; a broad flight of white stone stairs rising north to a square white dais with an inlaid bronze-gold sun disc at its center and a bronze bell in a stone frame on its east edge; long crimson banners with plain white sun discs on the canyon walls; crowds as tiny silhouettes on terraces cut into the canyon walls; no letters, no numbers
```
- **SHORT (단상 위):** `on a square white stone dais at noon, an inlaid bronze-gold sun disc in the floor, crimson banners with plain white sun discs on the rust-and-cream canyon wall behind, no letters`
- **SHORT (계단 아래):** `at the foot of broad white stone stairs on a sunbaked pale stone plaza, the pitch-dark tunnel of a huge round arch far behind, no letters`
- 빛: LIGHT_NOON (P49는 LIGHT_REPLAY). 소품: 해 원반 부조, 해 자리 원반, 청동 종, 진홍 깃발, 섭정의 지팡이(B2만).
- 앵커: **P1을 먼저 확정**하고 P2–P12의 와이드 컷에 장소 앵커로 붙인다.

### 7-2. `LOC_CORRIDOR` — 햇빛 드는 기둥 회랑 (B3 P13–P20)
- **FULL:**
```
a long open colonnade along the face of a castle carved into a canyon cliff; thick round pale limestone columns with carved sun-disc-and-wing capitals on the open west side, a smooth whitewashed rock wall with round-arched doorways on the other; worn pale stone floor; beyond the columns the opposite canyon wall banded rust-red and cream under a pale hard sky, dry golden grass on its rim; no letters, no numbers
```
- **SHORT:** `in a sunlit stone colonnade, thick pale columns, a whitewashed inner wall striped with bars of gold light and long blue-violet shadows, no letters`
- 빛: LIGHT_AFTERNOON. 하인들은 그녀를 **기둥 쪽(해 쪽)**으로 돌아 지나간다(그림자가 안쪽 벽으로 누워 있으므로).
- 앵커: P13.

### 7-3. `LOC_ROOMS` — 연결문이 있는 두 방 (B4 P21–P28, B9 P58–P64)
- **FULL:**
```
two adjoining rock-cut castle chambers with whitewashed walls, joined by a heavy dark oak door in a round-arched frame with black iron strap hinges; on the smaller plain chamber's side of the door a new black iron box lock with a plain black iron key in it, on the larger chamber's side only a pale unweathered patch of wood and four filled holes where an old lock plate was removed; the larger chamber with crimson wall hangings and a deep window embrasure with open wooden shutters over a small square inner courtyard with a dry stone basin and an old olive tree; the smaller chamber plain, a wooden chest, a stool; a single oil lamp in a wall niche beside the door; no letters, no numbers
```
- **SHORT (연결문):** `at a heavy dark oak door in a round arch with black iron strap hinges, whitewashed rock walls, a black iron box lock with a key on one side, no letters`
- **SHORT (그의 방, B9):** `in a small plain whitewashed rock-cut chamber, a plain white wall, the half-open dark oak connecting door glowing with lamplight from the next room`
- 빛: B4 LIGHT_DUSK, B9 LIGHT_LAMP. **침대는 프레임 밖**(그의 방 FULL에서 "narrow bed"를 뺐다. 침대를 프롬프트에 쓰지 않는다).
- 자물쇠 쪽 규칙: **그의 쪽에 자물쇠와 열쇠, 그녀 쪽에는 떼어 낸 자국뿐** [고정]. 뒤집히면 재생성.
- 창 너머(P25, P27): 안뜰, 올리브나무, 그 건너편의 **닫힌 덧창 하나**(봉한 선왕의 방).
- 앵커: P21(B4), P58(B9).

### 7-4. `LOC_HALL` — 연회장 (B5 P29–P36)
- **FULL:**
```
a long barrel-vaulted banquet hall carved into pale rock; carved columns along both sides; an empty half-dark musicians' gallery high along one wall; rows of long white stone tables and a white stone high table on a low step at the far end; a great iron fire basket burning behind the high table, iron torch brackets on the columns; crimson banners with plain white sun discs; narrow high windows black with night; guests in white mourning clothes; no letters, no numbers
```
- **SHORT:** `at a long white stone high table in a rock-cut banquet hall, a great iron fire basket burning behind, crimson banners with plain white sun discs, no letters`
- 빛: LIGHT_HALL. 화로가 높은 탁자 **뒤**에 있으므로 그녀의 두 그림자는 **탁자 앞 통로 바닥**으로 길게 떨어진다. 잔·음식으로 위기를 만들지 않는다(빵·과일은 배경에만).
- 앵커: P29.

### 7-5. `LOC_TERRACE` — 협곡 위 밤 테라스 (B6–B8 P37–P48, P50–P57)
- **FULL:**
```
a semicircular stone terrace jutting out from a cliff castle over a deep canyon at night; a waist-high plain stone parapet; a sheer drop to a dry riverbed with a thin silver thread of water far below; behind the terrace a two-level arcade cut into the cliff, dark arched niches below and an open gallery above; iron torch stands; moonless sky crowded with stars; in the far distance the dark silhouette of a colossal stone gate closing the canyon; no letters, no numbers
```
- **SHORT:** `on a stone terrace over a dark canyon at night, a waist-high plain stone parapet, the cliff arcade's dark arches behind, a moonless starry sky`
- 빛: P37–P40·P42 LIGHT_STARS, P41·P43 이후 LIGHT_TORCH.
- **구리빛 갈고리 (D1, P38·P43·P51):** `a grappling hook of dull twisted copper hooked over the south end of the parapet, a rope hanging down into the canyon, no marks` — 타렌의 검은 쇠가 아님. P38과 P51은 같은 갈고리(§5-4).
- 앵커: P37(별빛), P45(횃불).

---

## 8. 날개 그림자 (`WINGED_SHADOW`) — 하나의 고정 실루엣 [잠금]

### 8-1. 무엇인가
- 용족 볼모(HOSTAGE)의 본모습 그림자. **여왕(QUEEN)의 발밑에 붙어 있다.** 그녀는 그림자가 **둘**이다: 자기 사람 그림자(작게, 가운데) + 그것을 감싸는 날개 그림자. 둘은 따로 읽혀야 한다.
- **스스로 움직이는 것은 P3–P4의 이양 한 번뿐.** 그 뒤로는 빛의 물리를 따르는 보통 그림자다. 감정에 반응하지 않는다: 움직이지도, 커지지도, 빛나지도, 연기처럼 번지지도 않는다. 밟아도 아무 일 없다(P30).
- 용의 몸은 **어디에도 그리지 않는다**(EP1–3). 그림자만.

### 8-2. 고정 실루엣 (모든 컷에서 같다)
- **자세:** 네 발로 서서 긴 목을 S자로 든, 막 날개를 **반쯤 편** 휴식 자세. 긴 꼬리. 날개는 **박쥐형 막 날개**(깃털 아님), 날개 손가락 뼈가 보인다(날개마다 4개).
- **자리:** 그녀의 발이 용의 **가슴(심장) 자리.** 용은 **그녀가 향하는 쪽**을 함께 향한다.
- **크기:** 날개 폭 약 16m, 몸길이 약 14m. 사방 약 10m 단상을 덮고 위쪽 계단까지 넘친다(P4). 낮은 횃불이 가까이서 타오르면 절벽면 전체로(P46). 실내 등잔 아래에서는 그녀 뒤 벽과 천장 대부분.
- **면:** 외곽선 없는 납작한 무광의 거의 검은 면, **칼날처럼 선명한 가장자리.** 같은 빛 아래 다른 그림자보다 한 단계 짙다. 빛나지 않는다.
- **관뿔:** 머리 뒤쪽을 왕관처럼 두른 짧은 뿔 고리. **P46에서 처음 보인다** [잠금, twist-plan §2-6-1]. P46 이후(B8, P61)에는 보여도 된다.

### 8-3. 프롬프트 문자열 (CORE + 시점 하나)

**SHADOW_CORE (모든 날개 그림자 컷)**
```
a flat, sharp-edged, matte near-black shadow of a huge western dragon cast on the surface, with no dragon body anywhere: four legs planted, a long S-curved neck raised, a long tapering tail, two great membranous bat-like wings half spread with visible finger bones; always the same fixed resting pose; the queen's own small human shadow lies at the dragon's chest, her feet at its heart; it faces the way she faces; the shadow does not glow
```

**시점 A — SHADOW_TOP (정오, 위에서 오는 빛: P4)**
```
seen from directly above under the high noon sun: the two wings spread wide across the whole square white dais and spill over the top stairs, the neck runs toward the stairs and the head is only a small blunt point at its end
```

**시점 B — SHADOW_SIDE_HIDDEN (P46 전, 낮은 옆빛: P13, P29, P30 등)**
```
in profile under low side light, stretched long across the floor and up the wall; the neck rises into <a dark band of column shadow / the black shadow under the high table / beyond the frame edge>, so the head is not visible
```
- `< >` 안은 장면에 맞는 하나를 고른다: 회랑 = 기둥 그림자 띠, 연회장 = 탁자 그림자, 그 밖 = 프레임 밖.

**시점 C — SHADOW_CROWN (P46, 그리고 P46 이후)**
```
in full profile, the head raised high at the top of the S-curved neck, a crown-like ring of short horns around the back of the head
```
- P46에 덧붙임(twist-plan §2-6-2 권장 '두 왕관'): `at the dragon's chest the queen's small human shadow, a thin circlet line visible on its head; the shadow is larger than the whole arcade and cliff face`.

**P3 — 이양의 순간 (유일하게 움직이는 컷)**
```
an ink-black ribbon of shadow lifting off the white stone at the kneeling man's feet and sliding up the middle of the white stairs like spilled ink, still shapeless, no wings yet
```
- P3과 P49는 이 문장을 같이 쓴다(같은 순간).

### 8-4. 컷별 쓰임

| 패널 | 시점 | 빛 | 머리 | 메모 |
|---|---|---|---|---|
| P3 / P49 | 이양 문장 | 정오 | — (형체 없음) | 계단 **중간** |
| **P4** | A TOP | 정오 | 작은 점, 뿔 안 보임 | 흰 옷자락이 단상에 넓게 퍼져 그 밑으로 스며든 것이 읽히게. 신하들은 그림자 가장자리에서 물러선다 |
| P6–P11 (단상) | A TOP의 일부 | 정오 | 화면 밖 | 단상 바닥의 날개 끝·막만 보여도 충분. 머리 쪽(계단 방향)은 프레임 밖 |
| **P13** | B SIDE_HIDDEN | 늦은 오후 | 기둥 그림자 띠 속 | 안쪽 벽의 그림자 행렬, **그의 자리만 빈 빛의 띠** (§9) |
| P14–P19 | B (일부) | 늦은 오후 | 숨김 | 날개 끝이 벽에 걸치는 정도 |
| **P29–P30** | B SIDE_HIDDEN | 화로 | 탁자 그림자 속 | 통로 바닥. P30 장화가 한가운데를 딛어도 그림자는 그대로 |
| **P46** | C SHADOW_CROWN | 횃불(서쪽 난간 곁 낮은 곳) | **관뿔 첫 노출** | 동쪽 절벽면 전체, 남쪽을 향한 옆모습. 아래쪽에 작게 얼어붙은 궁수들과 CAPTAIN. HOSTAGE는 절벽에 아무것도 드리우지 않는다(어려우면 프레임 밖) |
| B8 (P51–P57) | 필요하면 C | 횃불 여럿 | 보여도 됨 | 흔들리지 않는 보통 그림자. 주인공으로 다루지 않는다 |
| **P61** | C(조용히) | 등잔(그녀 앞) | 보여도 됨, **그의 머리와 겹치지 않는 벽 위쪽** | 그녀 뒤 흰 벽에 떨어진 두 날개가 **그의 양어깨에 얹힌 것처럼** 겹친다(구도이지 마법이 아님) |

### 8-5. 그림자 컷의 장면 부정어 (NEGATIVE 앞에 한 문장)
- P46 전 (P4, P13, P29, P30 등): `No dragon body, no horns visible, no smoke, no glow.`
- P46·P61: `No dragon body, no smoke, no glow.` (뿔은 그림자 안에서만. HOSTAGE 쪽 Avoid는 character-sheets §2-9의 P46 판을 쓴다)
- P3·P49: `No dragon body, no smoke, no glow, no wings yet.`

### 8-6. 트리거 T-c 판정 (trend-brief §0-4) — **발동하지 않는다 [art-director 판정]**

질문: 날개 그림자를 **그림자 단독 컷(벽·바닥이 주인공인 구도)으로도** 안정적으로 표현할 수 있는가? → **예.**

근거:
1. **납작한 실루엣은 이미지 모델이 가장 잘 지키는 형태다.** 그림자 단독 컷은 "사람이 그림자를 드리운다"는 물리 계산을 요구하지 않고, 밝은 면(흰 돌, 회칠 벽, 절벽) 위의 검은 도형 하나를 그리면 된다. 선명한 대비가 오히려 안정성을 올린다.
2. **실루엣이 하나로 고정되어 있다.** 자세 하나, 시점 둘(위 / 옆)만 쓴다. 레퍼런스 카드 3장(`WINGED_SHADOW_top` · `_side` · `_crown`, character-sheets §6)을 첨부해 모양을 고정한다.
3. **위험한 부분(머리·뿔)을 구도로 피한다.** P46 전에는 머리를 프레임 밖·그림자 띠 속에 두므로, 실패의 대부분(뿔이 일찍 보임)이 크롭으로 해결된다. 사용자가 크롭만으로 고칠 수 있는 실패다.
4. **이야기가 그림 한 장에 기대지 않는다.** 그림자의 존재는 하인의 우회(P13–16), 밟는 장화(P30), 숙부의 대사(P8), 군중의 말(P4)이 함께 나른다(concept §4-5).

조건(이것을 지키면 안정적):
- 그림자 컷은 **표면이 화면의 주인공**이 되게 짠다: 위에서 본 단상(P4), 안쪽 벽(P13), 통로 바닥(P29–30), 절벽면(P46), 흰 벽(P61). 사람은 작게 또는 가장자리에.
- 그림자에 용의 몸·눈·불·연기가 붙으면 재생성(§8-5 부정어).
- **P4·P46이 3회 다시 그려도 실패하면** 대안 구도: P4 = 신하를 빼고 단상과 그녀만 위에서 / P46 = 사람을 모두 빼고 절벽면과 그림자만(궁수들은 P47 전경으로). 둘 다 실패하면 리더에게 보고(그때 T-c를 다시 본다). 현재 판단으로는 필요 없을 것이다.

---

## 9. 그림자 없는 남자: 구도 규칙 [잠금, world §2-2-6]

- HOSTAGE는 **어떤 빛에서도 그림자를 만들지 않는다.** 빛은 받는다(얼굴에 하이라이트, 옷에 그늘 주름은 있다). 그의 뒤 바닥과 벽은 그가 없는 것처럼 밝다. **다른 사람의 그림자는 그의 몸 위에 떨어질 수 있다**(P61).
- 이미지 모델은 사람 발밑에 그림자를 자동으로 넣는다. 그래서 **이야기를 이 한 그림에 기대지 않고**, 아래 다섯 구도로 짠다.

| # | 구도 | 쓰는 컷 | EN 문장 (prompt-smith) |
|---|---|---|---|
| 1 | **남의 그림자는 고이고, 그의 둘레만 밝다.** 사선 부감, 정오. 근위병들은 화면 가장자리에서 발밑에 짧은 검은 그림자 | **P2** | `every guard at the frame edge stands on a short pool of black shadow, while the white stone around the kneeling man's knees and hands is evenly bright and bare, as if no one were there` |
| 2 | **벽 그림자 단독:** 사람은 프레임 밖이나 가장자리, 안쪽 벽에 모두의 긴 그림자 행렬, 그의 자리만 빈 빛의 띠 | **P13** | `on the whitewashed inner wall a procession of long shadows of the walking servants and the queen, with one unbroken band of gold light where the tall man walks, no shadow of his own` |
| 3 | **발밑을 프레임 밖으로** (기본값) | 그가 나오는 대부분의 컷, P20 | 발이 보이지 않는 크롭(허리 위, 무릎 위, 로우 앵글로 하늘 배경) |
| 4 | **그늘 속에 둔다:** 지붕 아래, 아치 안, 탁자 뒤, 빛 밖 | P29–P36(탁자 끝), 실내 컷 | 직사광 없는 자리. 그림자가 생길 빛이 없게 |
| 5 | **절벽·벽에 그녀의 그림자만** | **P46**, P61 | `the tall man casts nothing on the wall` / 어려우면 그를 프레임 밖으로 |

- **증거 컷 = P2, P13, P46** (그리고 P61의 벽). 이 컷에서 그의 그림자가 생기면 **재생성.** 그 밖의 컷은 3·4번 구도로 문제가 애초에 생기지 않게 하고, 판정은 characters §9-2를 따른다(증거 컷만 REGEN).
- **'그림자 없음'을 부정어로 쓰지 않는다**(`no shadow under him`은 오히려 그림자를 부른다). 위 표처럼 **밝은 바닥·빛의 띠를 긍정문으로** 쓴다.
- 다른 용족(ENVOY, 사절단)은 **보통 사람 모양의 그림자**를 드리운다(world §2-0). 우르에게 그림자를 지우지 않는다.

---

## 10. 말풍선 시각 규약 (Khmer edition: 뷰어가 그린다)

- **이미지에는 말풍선이 하나도 없다.** 말풍선, 크메르어, 효과음, 회차 제목, 끝 캡션은 `km_tool.py build`가 뷰어에서 그린다(손으로 쓰지 않는다). 업스트림의 "이미지 안 한글 말풍선 베이크" 규칙과 말풍선 레터링 톤은 이 프로젝트에서 쓰지 않는다.
- 작화 쪽의 책임은 §6의 **조용한 빈 면**을 남기는 것까지다. 위치·종류·문구는 letterer의 `ep01_lettering.md`가 정한다.
- 뷰어가 그리는 모양(작화가 비워 둘 자리의 크기를 정하는 기준): `dialogue` 흰 바탕·짙은 테두리·꼬리 / `thought` 점선 / `shout` 굵은 테두리 / `narration` 어두운 사각 상자 / `sfx` 그림 위 크메르어 글자. 패널 하나에 말풍선 **2개 이하**(ruling S), `x + w ≤ 100`.
- 꼬리 방향은 화자 쪽. **P47 꼬리는 우르**(그의 등은 그녀 쪽, 얼굴은 HOSTAGE 쪽). 화면 밖 화자(P4 군중)는 그 가장자리로.
- 침묵 컷(P1, P3, P5, P12, P13, P20, P25, P27, P33, P34, P46, P48–P50, P55, P57, P58, P62, P64 등, tension-curve §2-2)에는 빈 자리를 억지로 만들지 않는다. 화면을 그림으로 채운다(효과음 컷은 §6-8).

---

## 11. 18+ 시각 가드레일 [brief 7 · trend-brief §4-3 잠금]

- **분명한 성인:** QUEEN 24, HOSTAGE 20대 후반 외모, CAPTAIN 41, CHANCELLOR 47, ENVOY 약 70 외모. 모든 인물 문자열에 나이. 아이 같은 큰 눈, 가녀린 몸, 앳된 얼굴은 **무조건 재생성.**
- **완전히 입은 옷:** QUEEN의 목선은 높고 둥글며 소매는 손목까지. HOSTAGE의 겉옷은 **턱까지 여며져** 있다. EP1에서 드러나는 맨살은 얼굴, 손, 그리고 P45 이후 **HOSTAGE의 왼쪽 팔뚝**(걷어 올린 소매)뿐. 젖은 옷, 흐트러진 옷, 열린 깃 없음.
- **사슬·족쇄·우리·목줄 없음** [잠금]. 그는 스스로 걸어 들어오고 스스로 무릎 꿇는다. HOSTAGE 프롬프트 금지 낱말: *chain, shackle, cuff, collar, bound, captive, prisoner, slave, leash*(소매 끝 = `sleeve end`, 깃 = `high neckline`, 감다 = `wrapped`). CHANCELLOR에게 직책 목걸이 없음. 밧줄은 **암살자의 갈고리 밧줄, 남쪽 끝 난간에만.**
- **상처는 왼쪽 팔뚝에만, 적게:** 화살 하나가 팔뚝 바깥쪽 가운데를 꿰뚫음, 찢어진 소매, 흰 돌 위 **금빛 피 몇 방울**(무광 금속빛, 빛나지 않음). 피 웅덩이·튀는 피·벌어진 상처·뼈 없음. B8–B9는 흰 리넨, 희미한 청동빛 얼룩 하나.
- **관능은 시선·거리·손·숨으로:** 줄어드는 거리(계단 아래 ↔ 단상 → 회랑 몇 걸음 → 연결문 한 뼘 → 팔 길이의 천 → 한 걸음 → 숨 하나). 카메라는 얼굴과 손에 머문다. 가슴·엉덩이·다리에 머무는 크롭, 로우 앵글로 치마 아래, 이유 없는 신체 부위 클로즈업 없음.
- **EP1에 없는 것:** 키스, 침대(프레임 밖, 프롬프트에 쓰지 않음), 벽에 몰아붙이기, 손목 끌기·움켜쥐기, 소유를 드러내는 몸짓, 암전·화이트아웃 미끼.
- **닿지 않는다:** P45 그의 팔과 그녀 가슴 사이 손바닥 한 뼘 / P56 천의 길이만큼 떨어진 손가락 / P61 한 걸음 / P64 숨 하나. **닿는 그림이 나오면 재생성.**
- **동의의 그림:** 거리를 줄이는 것은 늘 **그녀**다(P62의 반 걸음, B9의 문턱). 그는 움직이지 않는다, 오른손은 편 채 옆에. 그는 EP1에서 **주먹을 쥐지 않는다**(주먹은 우르의 몸짓 전용).

---

## 12. 금지 / 주의

**화풍 · 코드**
- 마법 연출: 빛나는 눈·그림자·선, 오라, 마법진, 반짝이, 연기, 불꽃 날개. 이 작품의 유일한 판타지 그림은 **납작한 그림자**다.
- 용의 몸, 하늘을 나는 용, 사람 모습에 뿔·비늘·날개·꼬리·발톱·송곳니(EP1–3).
- 다른 작품 코드: 유리 온실·유리 종·장갑 클로즈업(`gloves`), 비·우산·구름(`umbrella`), 독잔·시식·꿀빛 궁궐(`poison`). 북부·눈·모피.
- 시대 밖 물건: 유리창, 시계, 총, 등유 램프(등잔은 **열린 기름 등잔**).

**글자 (Khmer edition)**
- 이미지 속 글자·숫자·가짜 글씨·말풍선·캡션·워터마크 0. 깃발은 흰 해 원반뿐, 관문 부조는 해와 날개뿐, 문장·브로치는 도형(해 원반, 반쯤 가려진 해, 휜 뿔, 두 줄기 협곡). **조약문·두루마리·청원서·명령서·좌석 카드·문패·비문·마법진 문자는 존재하지 않는다.** 정보는 얼굴·손·물건·빛·말로.
- 의원의 리넨 두루마리, 탁자의 빵·과일에도 무늬·글씨 없음. 돌의 금(P31)이 문자처럼 보이면 재생성.

**연속성**
- 같은 장면 안에서 배경·장소·시간대가 바뀌면 재생성(장소 급변 금지).
- 다섯 명 모두 **EP1 전 구간 한 벌.** 바뀌는 것은 HOSTAGE의 왼팔 상태와 CHANCELLOR의 지팡이(B2만)뿐(character-sheets).
- 좌우 고정 표지(반지 = 그녀 오른손 검지, 흉터 = 그의 오른손 등, 상처 = 그의 왼쪽 팔뚝, 브로치 = 바실 오른쪽 어깨, 흉터 = 우르 왼쪽 얼굴, 흰 머리 줄·팔찌 = 토라 왼쪽)가 뒤집히면 재생성(좌우 반전 이미지).
- 진홍이 깃발·망토·반지 돌 밖에(특히 QUEEN·HOSTAGE의 옷에) 나오면 재생성. 금 장신구가 QUEEN 아닌 사람에게 있으면 재생성.
- 그믐밤에 달이 있으면 재생성.

**군중 = 실루엣 [잠금, trend-brief §6-3]**
- 군중(협곡 벽의 단, 연회 손님 무리)은 **작은 실루엣이나 초점 밖의 흰 상복 형체**로. 얼굴을 또렷하게 그리지 않는다. 이름 있는 다섯 명만 얼굴이 기준을 가진다.
- 이름 없는 역할(뿔 문장 영주, 의원, 두 암살자, 근위·궁수, 하인, 신하, 사절단, 종지기)은 character-sheets §7 토큰을 쓰고 레퍼런스 카드가 없다. 두 번째 암살자의 **눈은 보이지 않는다**(twist-plan §2-6-10).

---

## 13. Flow 실무

### 13-1. 기본 사실
- **Flow는 프롬프트 하나에 이미지 한 장**을 만든다. 앞 프롬프트를 기억하지 않는다. 그래서 **모든 프롬프트는 혼자서 완전해야 한다**: STYLE_CORE, 인물 외형, 장소, 빛, 상처 상태를 매번 다시 쓴다. 토큰 이름(`LOC_TERRACE`, `SHADOW_CORE`)이나 "앞 컷과 같은", "스타일 바이블대로"를 프롬프트 안에 쓰지 않는다.
- Flow가 보는 것은 붙여 넣은 글과 **첨부한 이미지**뿐이다. 레퍼런스 카드는 사용자가 직접 첨부한다(핸드오프 페이지의 "Attach in Flow" 목록).

### 13-2. 프롬프트 조립 순서와 길이 (패널 ≤ 250단어)

| 순서 | 내용 | 대략 단어 |
|---|---|---|
| 1 | STYLE_CORE (§1) | 60 |
| 2 | 컷 종류 + 카메라 (예: `Low-angle medium close-up:`) | 8 |
| 3 | 인물: `matching the attached reference image of the QUEEN (...)` + PANEL 토큰 + 표정 + 상처 상태 | 인물당 35–55 |
| 4 | 장소 FULL 또는 SHORT + LIGHT 문장 | 30–70 |
| 5 | 동작, 핵심 물건, 그림자 문장(§8 또는 §9) | 20–50 |
| 6 | 빈 말풍선 자리 문장 (§6-9) | 25 |
| 7 | 장면 부정어 한 문장(§8-5, character-sheets §2-9) + NEGATIVE (§1) | 35–50 |

- 두 인물 + 장소 + 그림자가 다 들어가는 컷은 250단어에 빠듯하다. 줄일 순서: ① 장소 FULL → SHORT ② 인물 PANEL → MIN(단, **좌우 표지와 식별 특징은 남긴다**) ③ 동작 묘사. **STYLE_CORE, 상처 상태, 그림자 문장, 빈 자리 문장, NEGATIVE는 줄이지 않는다.**

### 13-3. 얼굴을 64장 내내 같게 유지하는 법
1. **레퍼런스 카드부터** 만든다(character-sheets §6). 패널은 카드가 확정된 뒤에.
2. 첨부는 **한 패널에 3장 이하**: 얼굴이 큰 컷 = `_expressions` (+ `_turnaround`), 전신·상반신 = `_turnaround`, 손 클로즈업 = `_hands`, 그림자 컷 = 해당 `WINGED_SHADOW_*` 카드, 장면 와이드 = 그 장면의 확정된 첫 와이드 컷. 매치 컷(§5-4)은 앞 컷을 첫 첨부로.
3. **P46 전 컷에 `WINGED_SHADOW_crown`을 첨부하지 않는다**(관뿔이 새어 나온다).
4. 프롬프트에 레퍼런스를 말로도 묶는다: `matching the attached reference image of the HOSTAGE (matte gold eyes with vertical pupils, loose collar-length black hair, thin pale scar on the back of his RIGHT hand)`. 첨부가 안 먹을 때를 대비해 외형 키워드는 늘 함께 쓴다.
5. 한 장면의 패널은 **가능하면 한 번에 이어서** 만든다(같은 날, 같은 모델). 장면 앵커: P1(관문), P13(회랑), P21(두 방 해 질 녘), P29(연회장), P37(테라스 별빛), P45(테라스 횃불), P58(두 방 한밤).

### 13-4. 권장 생성 설정 (쉬운 말로)
- **모델:** 회차를 시작할 때 Flow의 이미지 모델 하나를 골라 **EP1 끝까지 바꾸지 않는다.** 레퍼런스(첨부 이미지)를 받아 주는 모델을 고른다.
- **비율:** 카드와 패널 블록의 `aspect:` 그대로(§5-1). 없는 비율은 §5-1 대체 규칙.
- **변형 수:** 프롬프트마다 **2장**. 레퍼런스 카드 전부와 핵심 패널(P1, P3, P4, P13, P45, P46, P47, P49, P61, P64)은 **4장.** 고르는 기준은 "가장 예쁜 것"이 아니라 **레퍼런스와 가장 같은 것**(얼굴, 좌우 표지, 상처 상태, 그림자 실루엣, 그의 그림자 없음, 빈 말풍선 자리).
- **고칠 때:** 편집이 되면 틀린 부분만(뿔이 보이는 그림자 머리, 그의 발밑 그림자, 글자처럼 생긴 얼룩) 고치거나 **크롭**한다. 크롭은 비율이 바뀌지 않게.
- 다시 그려도 3번 안 되면 ACCEPT-FLAG로 두고 넘어간다(webtoon-flow-handoff 3회 상한). P46·P4만은 §8-6의 대안 구도를 먼저 쓴다.

### 13-5. 만드는 순서 (권장)
1. 레퍼런스 카드: character-sheets §6-0 순서.
2. 패널: 장면 순서대로, 각 장면의 앵커 컷 먼저. **P3은 P49보다 먼저**, P4는 P46보다 먼저, P28은 P58보다 먼저, P38은 P51보다 먼저(§5-4).

---

## 14. 충돌 · 리스크 기록

| # | 내용 | 처리 |
|---|---|---|
| 1 | characters §9-2 B9 상처 문자열의 *bound*("forearm bound in a clean white linen cloth")가 같은 문서 §9-0-3 금지 낱말과 충돌 | character-sheets에서 **wrapped**로 바꿨다(뜻 같음). prompt-smith는 character-sheets 문자열을 쓴다 |
| 2 | HOSTAGE Avoid 줄의 *horns*와 P46 그림자 문장의 *ring of horns* 충돌 | P46·P61(HOSTAGE가 함께 나오는 경우)에는 Avoid의 `horns`를 `horns on any person`으로 바꾼다(character-sheets §2-9). 그림자 문장은 그대로 |
| 3 | world FULL 토큰의 "narrow bed"(그의 방) vs 침대는 프레임 밖 가드레일 | LOC_ROOMS FULL에서 뺐다. 침대를 프롬프트에 쓰지 않는다 |
| 4 | Flow 3:4 메뉴 유무가 모델마다 다름 | §5-1 대체 규칙(L → 1:1, P3·P49는 같은 비율) |
| 5 | 관뿔이 P46 이후 보여도 되는가 | 보여도 된다(twist-plan의 조건은 "P46에서 처음"). P61은 벽 위쪽, 그의 머리와 겹치지 않게 |
| 6 | 그의 그림자가 모델에 의해 생김 | §9 구도. 증거 컷(P2, P13, P46)만 REGEN, 부정어 대신 긍정문 |
| 7 | 날개 그림자에 용의 몸·눈·연기가 붙음 | §8-5 장면 부정어, 그림자 카드 첨부, 표면이 주인공인 구도 |
| 8 | "crown" 낱말 | P46 그림자 문장(`crown-like ring of horns`)에만. QUEEN의 관은 `circlet` |
| 9 | T-c | **발동하지 않는다**(§8-6). P4·P46 3회 실패 시 대안 구도, 그래도 실패하면 리더에게 보고 |
