# Character Sheets — 「다섯 개의 숟가락」 (story-8) · EP01

- 작성: art-director · 2026-11-25 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 출처: `02_story/characters.md` §9(외형 토큰 v1 고정) · §12 F9(색 충돌) · `twist-plan.md` §1 D1-a/D1-b/D4 · `ep01_beatsheet.md` §0-1(의상 시계) · `ep01_script_final.md`
- 짝 문서: `04_visual/style-bible.md`(GLOBAL STYLE TOKEN, LOC_*, PROP_*, 말풍선 자리 규약)
- **사용법 (prompt-smith):** 패널에 나오는 인물마다 ① `APPEARANCE`(불변, 글자 그대로) + ② 그 패널의 `OUTFIT` 문장 + ③ 표정·포즈(패널 고유)를 붙인다. 레퍼런스 시트가 있으면 `attach:`에 넣고 "matching the attached reference image of <Name> (…)"로 시작한다. 토큰 이름(`HARIN_HOME` 등)은 프롬프트에 쓰지 않는다.
- 공통: 모든 인물은 Korean(동아시아) 현대인. 사실적 비율. **옷·가방·신발에 글자·로고·숫자·명찰 없음.** 채도 높은 빨강·초록 옷 금지(빨간 고무줄·초록 팔찌가 화면의 유일한 강한 색).

---

## 0. 한눈에 (identity_tag · 실루엣 · 키)

| tag | 이름 | 크메르어 | 나이 | 키 | 실루엣 한 줄 | 식별 표식 (항상 보이는 2개) |
|---|---|---|---|---|---|---|
| HARIN | 송하린 (주인공) | សុង ហារីន | 23 여 | 163 | 단단하고 가는, 낮은 포니테일 | 낮은 포니테일 + 이마 옆 잔머리 / 오른쪽 팔뚝 안쪽 작은 분홍 화상 자국 |
| UJIN | 송우진 (남동생) | សុង អ៊ូជីន | 21 남 | 178 | 길고 마른 직선, 앞으로 말린 어깨 | 눈썹 덮는 헝클어진 앞머리 / 오른손 손가락 마디 긁힌 자국 + 살색 반창고 1개 |
| INHO | 송인호 (아버지) | សុង អ៊ីនហូ | 53 남 | 172 (구부정) | 마르고 굽은 | 짙고 처진 눈썹 + 깊은 팔자주름 / 오른손 엄지 옆 굳은살·굵은 마디 |
| MIJA | 박미자 (어머니) | ប៉ាក មីចា | 48 여 | 157 | 작고 둥근, 짧은 파마 | 왼손 약지 흰 반지 자국(반지 없음) / 머스터드 앞치마(집) |
| SAEROM | 송새롬 (막내) | សុង សែរ៉ូម | 14 여 | 150 | 작고 가벼운, 반묶음 단발 | 오른쪽 귀 위 노란 별 머리핀 / 코·볼 옅은 주근깨 |
| SEOKGU | 주석구 '삼촌' (ពូ) | ជូ សុកគូ | 56 남 | 170 | 둥글고 넉넉, 배 살짝 | 목에 건 갈색 뿔테 돋보기(검은 끈) / 금붙이 전혀 없음 |
| TAK | 탁영숙 반장 (조연) | តាក់ យ៉ុងស៊ុក | 44 여 | 165 | 다부진 | 회색 플리스 조끼 + 흰 머리망 |
| YAI | 계단 할머니 (조연) | យាយ | 70대 여 | 145 | 작고 굽은 | 흰 뽀글 파마 + 자주 꽃무늬 몸빼 |

- 키 순서(한 프레임 비교): 우진 > 인호 > 석구 > 하린 > 미자 > 새롬.
- 남매 닮음: 하린·우진은 **같은 각진 턱선과 가로로 긴 홑꺼풀 눈매**.

---

## 1. 주연 6명 — 일관성 토큰

### 1-1. HARIN · 송하린 (សុង ហារីន) — 주인공, 맏딸

**APPEARANCE (불변 · 모든 하린 패널에 그대로):**
```
Harin, a 23-year-old Korean woman, shoulder-length straight black hair tied in a low ponytail at the nape with loose wisps at both temples, long calm single-eyelid dark brown eyes with faint tired shadows beneath, slim oval face with a defined angular jawline, almost no makeup, pale lips, slim firm build with straight shoulders, 163 cm, light warm skin, rough hands with short nails, a small thin pale-pink burn scar on the inner right forearm, a firm closed mouth and a near-neutral, tired expression.
```
- 표정 기본: 무표정에 가까운 단단한 입매, 눈만 지쳤다. 웃을 땐 **한쪽 입꼬리만**. 울지 않는다(P60 눈물 없음).
- 불변 금지: 머리색·길이·포니테일 위치 변경 금지, 쌍꺼풀 금지, 화장·액세서리 금지, 화상 자국 위치(오른쪽 팔뚝 안쪽) 고정.
- HAND ID: 짧은 손톱의 거친 손 + 오른쪽 팔뚝 안쪽 분홍 줄(소매가 걷혔을 때). 콜드오픈 손 = 오트밀 카디건 소매.

**OUTFITS**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| HARIN_HOME | `wearing an oversized loose oatmeal-beige knit cardigan over a light grey long-sleeve T-shirt, grey sweatpants, grey socks` | P01–04 (콜드오픈, 소매·뒷모습), P15–32 (저녁 식탁) |
| HARIN_FACTORY | `wearing a plain white snap-button factory work jacket, black jogger pants, worn white sneakers, the top of her hair flattened from a hairnet` (+ P05–06: `holding a white factory hairnet in her right hand`; + P07–14: `a plain black backpack on her shoulders, carrying a clear plastic bag of bread rolls`) | P05–06 (공장 정문), P07–08 (귀갓길), P09–14 (새벽 부엌; 백팩은 의자에/앞주머니에 봉투) |
| HARIN_COMMUTE | `wearing a faded navy padded vest over a plain grey hoodie, black jogger pants, worn white sneakers, a plain black backpack` | P33–39 (계단 밤), P40–41 (노을), P42–56 (가게·뒷방; 뒷방에선 백팩을 옆에 내려놓음), P57–60 (현관; 운동화는 벗어 턱 아래 바닥에, 오른손이 조끼 주머니 속 봉투를 쥠) |
- 팔레트: 네이비 `#2C3A55` · 오트밀 `#D9CBB2` · 웜그레이 `#8A8580`.
- 시간 표지 P04→P05: 오트밀 카디건 + 노란 전등 → 흰 작업복 + 머리망 + 새벽 푸른빛(의상·빛 두 가지 변화).

### 1-2. UJIN · 송우진 (សុង អ៊ូជីន) — 남동생

**APPEARANCE (불변):**
```
Ujin, a 21-year-old Korean man, messy black hair with a long tousled fringe covering his eyebrows and short sides and back, narrow sharp single-eyelid dark brown eyes with slightly upturned outer corners and an indifferent gaze, long face with a high nose bridge, thin lips and the same angular jawline as his sister, tall lanky build with shoulders rolled forward, 178 cm, medium skin tone, large hands, small scrapes across the knuckles of his right hand with one skin-coloured adhesive bandage, a sulky blank expression.
```
- **팔찌는 APPEARANCE에 넣지 않는다** — 패널마다 따로(아래). 이유: P29·P57–60처럼 팔찌가 **보이면 안 되는** 컷이 많다.
- 표정 기본: 뚱한 무표정, 시선을 피함. 화낼 땐 턱에 힘.
- 불변 금지: 앞머리 길이(눈썹 덮음)·홑꺼풀·반창고 위치(오른손 마디) 고정. 쌍꺼풀·염색·피어싱 금지.
- HAND ID: 오른손 = 마디 긁힌 자국 + 살색 반창고. 왼손목 = 팔찌(보일 때만) 또는 소매 안.

**WRIST RULE (panel add-on)**
| 상황 | 붙일 문장 | 패널 |
|---|---|---|
| 팔찌 보임 (복제품) | `on his left wrist a deep green jade bangle about 1.2 cm wide with one diagonal crack covered by a flat painted gold line, uniform green with no white streak` | P19 (새롬이 손목을 잡아 돌아감, 금색 선 번쩍), P20, P21 (오른손이 덮음) |
| 팔찌 숨김 | `his left wrist is hidden inside his sleeve, no bracelet visible` | P15–18·P22–32 기본, **P29 · P41 · P57–60 필수** |

**OUTFITS**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| UJIN_HOME | `wearing a plain charcoal hoodie whose sleeves half cover his wrists, black track pants` (+ 의자 등받이: `a matte black short puffer jacket hangs on the back of his chair`) | P03 (소매), P15–32 (식탁; P31 일어섬, P32 빈 의자 + 패딩) |
| UJIN_OUT | `wearing a matte black short puffer jacket with horizontal quilted baffles and no logo over a charcoal hoodie, light-wash blue jeans, a plain black backpack, white sneakers` | P41 (노을 원경 — `a tiny distant figure seen from behind, face and wrists not visible`), P57–60 (현관; 봉투는 **오른손**) |
- 팔레트: 블랙 `#1F1F22` · 차콜 `#3E4045` · 연청 `#7D93AE`.

### 1-3. INHO · 송인호 (សុង អ៊ីនហូ) — 아버지

**APPEARANCE (불변):**
```
Inho, a 53-year-old Korean man, short hair about forty percent grey with a broad receding hairline at both temples, thick dark drooping eyebrows, deep-set tired dark brown eyes with drooping outer corners, long gaunt face with hollow cheeks, deep nasolabial lines and a shadow of stubble, thin stooped build with rounded shoulders, 172 cm but looks shorter, sallow skin, rough hands with thick knuckles and a callus beside the right thumb, a tightly closed mouth, gaze lowered.
```
- 표정 기본: 굳게 다문 입, 시선은 밥그릇. 웃음은 입가가 아주 조금 풀리는 정도(P18).
- 불변 금지: 반백·눈썹 강도·팔자주름 고정. 큰 웃음·안경 금지.
- HAND ID: 오른손 엄지 옆 굳은살 + 굵은 마디(P23 숟가락 내려놓는 손).

**OUTFITS**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| INHO_HOME | `wearing a faded dark-brown V-neck knit sweater over a white undershirt, grey trousers` | P03 (소매), P15–32 |
| INHO_GUARD | `wearing a plain dark-grey zip-up work jacket with no patches or marks, dark grey trousers, worn black dress shoes` | EP01 미등장 (EP02+) |
- 팔레트: 다크그레이 `#4A4A4D` · 진갈색 `#5A4636` · 바랜 흰색 `#E6E2DA`.

### 1-4. MIJA · 박미자 (ប៉ាក មីចា) — 어머니

**APPEARANCE (불변):**
```
Mija, a 48-year-old Korean woman, short tightly permed dark brown curly hair showing her ears with a light fringe, bright dark brown eyes that turn into crescents when she smiles with laugh lines at the corners, round face with full cheeks and a natural rosy flush, short soft plump build, 157 cm, warm skin tone, expressive hands, a pale band of lighter skin on her left ring finger where a ring used to be with no ring worn, a wide warm smile.
```
- 표정 기본: 활짝 웃음(반달 눈). 웃음이 멈추는 컷은 아껴 쓴다(EP01: P25 화면 밖, 그 외 없음).
- 불변 금지: **반지 절대 금지**(자국만). 파마·볼 홍조 고정.
- HAND ID: 왼손 약지의 흰 띠(P18 전경 손, 전등 빛 정면).

**OUTFITS**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| MIJA_HOME | `wearing a plain mustard-yellow apron over a pinkish-beige cable-knit cardigan, dark brown loose elastic-waist trousers, grey slippers` | P03 (소매 — 앞치마 없이 카디건 소매만), P14 (앞치마 끈을 매는 중, 화면 끝, 손은 등 뒤), P15–32 |
| MIJA_OUT | `wearing a camel quilted jacket over the same pinkish-beige cable-knit cardigan, carrying a plain navy cloth shopping bag` | EP01 미등장. 삼촌 가게 장면은 반드시 이것(앞치마 금지 — 진열장 금빛과 충돌) |
- 팔레트: 머스터드 `#C9A23F` · 핑크베이지 `#E3C3B3` · 카멜 `#A9805A`.

### 1-5. SAEROM · 송새롬 (សុង សែរ៉ូម) — 막내

**APPEARANCE (불변):**
```
Saerom, a 14-year-old Korean girl, chin-length straight black bob with the top section tied in a small half-up knot, a small yellow plastic star-shaped hair clip above her right ear, big round double-eyelid dark brown eyes with a bright watchful gaze, small round face with a few faint freckles on her nose and cheeks, small light build, 150 cm, fair skin, a mischievous half-smile.
```
- 표정 기본: 장난스러운 반웃음 + 상대 얼굴을 읽는 눈(관찰자).
- 불변 금지: 머리핀(노란 별, **오른쪽** 귀 위) 고정, 글자 없는 핀. 주근깨 유지.
- HAND ID: 작은 손 + 연코랄 후드 소매.

**OUTFITS**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| SAEROM_HOME | `wearing a soft muted light-coral hoodie, cream sweatpants, fuzzy socks` (식탁: `sitting on the grey metal folding chair, legs swinging`) | P03 (소매), P15–32 |
| SAEROM_SCHOOL | `wearing a plain school uniform with no emblem or name tag: white blouse, navy knit vest, grey pleated skirt, navy knee socks, black flat shoes, a plain navy backpack with a small grey cat plush keyring` | EP01 미등장 (EP02+) |
- 팔레트: 연코랄 `#EE9E8A` · 남색 `#2E3A5C` · 크림 `#F1E7D3`. 코랄은 탁하고 연하게(빨강 금지).

### 1-6. SEOKGU · 주석구 '삼촌' (ជូ សុកគូ · ពូ)

**APPEARANCE (불변):**
```
Seokgu, a 56-year-old Korean man, short salt-and-pepper hair neatly combed back with a side part, narrow kind dark brown eyes that curve downward and almost close when he smiles with deep fan-shaped laugh lines, round generous face with rosy cheeks, round stocky build with a slight belly, 170 cm, fair skin, plump clean hands with neatly trimmed nails, brown horn-rimmed reading glasses hanging on a black cord around his neck, no jewellery at all (no ring, no watch, no necklace), a warm gentle smile with his head slightly tilted.
```
- 표정 기본: 다정한 미소, 눈이 웃음 주름에 묻힘. **악역 인상 금지**(날카로운 각·찡그린 미간·짙은 눈 그림자 금지).
- **늦게 굳는 미소 [고정, P55–56]:** 1/2 `his mouth is still smiling but the laugh lines around his eyes have smoothed out and his eyes are open and still` → 2/2 `the corners of his mouth come down into a blank neutral face, eyes looking away`.
- **차가운 얼굴(T6, P46):** `no smile, eyes open and flat, a calm blank face, taking off his reading glasses and setting them down` — 소리 지르지 않는다.
- 돋보기 위치: 평소 목에 걸림 / P42 작업대 = 이마 위로 올림 / P46 벗어 탁자에.
- HAND ID: 두툼하고 깨끗한 손, 단정한 손톱, 반지·시계 없음(하린·인호의 거친 손과 대비; P37·P50 손 클로즈업).

**OUTFITS**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| SEOKGU_SHOP | `wearing a beige cable-knit sweater vest over a white shirt with sleeves rolled up twice, brown cotton trousers, brown leather indoor slippers` | P42–56 |
| SEOKGU_OUT | `wearing a plain dark-brown wool coat with three buttons over a beige sweater vest and white shirt, a plain taupe wool scarf` (+ `carrying a silver stainless thermos`) | P33–39 (계단 밤) |
- 팔레트: 베이지 `#CDB89A` · 브라운 `#6E4E37` · 셔츠 화이트 `#F3F1EC`.

---

## 2. 조연 (EP01 — 레퍼런스 시트 없음, 토큰만)

### 2-1. TAK · 탁영숙 반장 (តាក់ យ៉ុងស៊ុក · បងតាក់) — P06 한 컷
```
Tak, a 44-year-old Korean woman, short cropped hair under a white factory hairnet, small sharp eyes, square face, sturdy build, 165 cm, wearing a white factory work jacket under a plain grey fleece vest, white rubber boots, a blunt deadpan expression.
```
- 소품: 남은 빵 봉지(PROP_BREAD_BAG)를 하린 손에 툭 쥐여 준다. 하린(흰 작업복, 조끼 없음)과 **회색 플리스 조끼로 구분**.

### 2-2. YAI · 계단 할머니 (យាយ) — P33 배경, P39 한 줄
```
an elderly Korean woman in her 70s, short white tightly permed hair, small creased eyes, wrinkled round face, tiny stooped frame, 145 cm, wearing dusty plum floral loose elastic-waist trousers and a dark grey quilted vest, sitting on the old wooden platform bench peeling a mandarin orange, an unimpressed look.
```
- 골목(LOC_ALLEY_STAIRS) 전용(자주색이 뒷방 커튼과 겹치지 않게). 귤 주황은 작은 점으로만.

**판정: EP01에서 조연 2명은 시트를 만들지 않는다.** 이유: 탁 반장 1패널(P06), 할머니는 배경 원경 + 1패널(P39)뿐이고 얼굴 클로즈업이 없다. 위 토큰 문장만으로 충분하며 Flow 수작업 장수를 12장으로 묶어 둔다. 재등장 회차(할머니 = EP04 후보)에서 클로즈업이 생기면 그때 `YAI_turnaround` 1장을 추가한다.

---

## 3. EP01 의상 · 등장 매트릭스 (날짜·씬별)

| 씬 · 시각 | 패널 | LOC | 하린 | 우진 | 인호 | 미자 | 새롬 | 석구 | 조연 |
|---|---|---|---|---|---|---|---|---|---|
| S1 · 28일 ~22:00 콜드오픈 | P01–04 | HOME_TABLE | HOME (P03 소매, P04 뒷모습) | HOME (P03 소매, 손목은 소매 안) | HOME (P03 소매) | HOME 카디건 소매 (P03) | HOME (P03 소매) | — | — |
| S2 · 14일 05:55 | P05–06 | FACTORY_GATE | FACTORY + 머리망 오른손 | — | — | — | — | — | TAK (P06) |
| S3 · 14일 06:05–06:15 | P07–08 | SHOP 바깥 → ALLEY_STAIRS | FACTORY + 백팩 + 빵 봉지 | — | — | — | — | (가게 안 빛만) | — |
| S4 · 14일 06:20–06:35 | P09–14 | HOME_TABLE | FACTORY (머리 눌림) | — | — | HOME (P14 화면 끝) | — | — | — |
| S5 · 14일 18:40 | P15–32 | HOME_TABLE | HOME | HOME (+ 의자 위 검은 패딩) | HOME | HOME | HOME | — | — |
| S6 · 14일 21:30 | P33–39 | ALLEY_STAIRS | COMMUTE | — | — | — | — | OUT + 보온병 | YAI (P33·P39) |
| S7 · 15일 ~17:20 | P40–41 | ALLEY_STAIRS | COMMUTE | OUT, 원경 아주 작게 (P41) | — | — | — | — | — |
| S8 · 15일 20:40 | P42 | UNCLE_SHOP | COMMUTE | — | — | — | — | SHOP (돋보기 이마) | — |
| S9 · 15일 20:42–21:15 | P43–56 | UNCLE_BACKROOM | COMMUTE | — | — | — | — | SHOP | — |
| S10 · 15일 21:40 | P57–60 | HOME_ENTRANCE | COMMUTE (턱에 앉음) | OUT (왼손목 소매 안, 봉투 오른손) | — | — | — | — | — |

- P03 손 컷 소매 순서(beatsheet): 오트밀 카디건(하린) / 진갈색 니트(인호) / 핑크베이지 꽈배기 카디건(미자) / 차콜 후드 + 손목 소매 안(우진) / 연코랄 후드(새롬). 그림자에 눌린 색. 아무 손도 특정 봉투 가까이 두지 않는다.

---

## 4. 레퍼런스 시트 사양 (ref-sheet-artist 지시서)

**만들 시트 — 6명 × 2장 = 12장** (`refs/ref_prompts.md`, 출력 `_workspace/04_visual/refs/<TAG>_<kind>.png`, aspect **16:9**)

| 카드 | 의상 | 내용 |
|---|---|---|
| `HARIN_turnaround` | HARIN_COMMUTE (네이비 패딩 조끼 + 회색 후드 + 검은 조거 + 낡은 흰 운동화, 백팩 없이) | 전신 정면 · 3/4 · 측면(오른쪽 보기) · 후면(낮은 포니테일). 오른쪽 소매를 걷어 **오른쪽 팔뚝 안쪽 화상 자국**이 정면 포즈에서 보이게 |
| `HARIN_expressions` | HARIN_HOME (오트밀 카디건) 어깨선까지 | 6컷: 무표정(단단한 입매·지친 눈) / 한쪽 입꼬리 웃음 / 가늘어진 의심의 눈 / 창백하게 굳은 충격(눈물 없음) / 고개 들어 똑바로 보는 결의 / 눈 극단 클로즈업 1컷(홑꺼풀·다크서클) |
| `UJIN_turnaround` | UJIN_OUT (검은 숏패딩 지퍼 열어 차콜 후드 보이게 + 연청 청바지 + 흰 스니커즈, 백팩 없이) | 전신 4방향. **왼손목은 소매 안, 팔찌 그리지 않는다.** 오른손 마디 반창고가 정면·3/4에서 보이게 |
| `UJIN_expressions` | UJIN_HOME (차콜 후드) 어깨선까지 | 5컷: 뚱한 무표정·시선 회피 / 턱에 힘준 짜증 / 퉁명스럽게 흘겨봄 / 들킨 순간 굳은 얼굴 / 옆얼굴(헝클어진 앞머리) |
| `INHO_turnaround` | INHO_HOME (진갈색 V넥 니트 + 흰 런닝 + 회색 바지) | 전신 4방향, 구부정한 어깨. 손 클로즈업 inset 대신 정면 포즈에서 오른손을 앞으로 내려 엄지 옆 굳은살이 보이게 |
| `INHO_expressions` | INHO_HOME | 4컷: 굳게 다문 입·시선 아래 / 아주 조금 풀린 입가 / 무거운 "끝난 얘기다" 얼굴(눈을 내리깐 정지) / 3/4 옆얼굴(짙은 눈썹·팔자주름) |
| `MIJA_turnaround` | MIJA_HOME (머스터드 앞치마 + 핑크베이지 꽈배기 카디건 + 진갈색 바지 + 회색 슬리퍼) | 전신 4방향. **반지 없음.** 정면 포즈에서 왼손을 들어 약지의 흰 띠가 보이게 |
| `MIJA_expressions` | MIJA_HOME | 5컷: 반달 눈 활짝 웃음 / 말하는 중의 수다 얼굴 / "아이고" 당황한 웃음 / 웃음이 멈춘 얼굴(아껴 쓰는 표정) / 3/4 옆얼굴 |
| `SAEROM_turnaround` | SAEROM_HOME (연코랄 후드 + 크림 트레이닝 바지 + 수면 양말) | 전신 4방향. **노란 별 머리핀 = 오른쪽 귀 위** — 측면은 오른쪽 옆얼굴로 그려 핀이 보이게 |
| `SAEROM_expressions` | SAEROM_HOME | 5컷: 장난스러운 반웃음 / 크게 뜬 관찰하는 눈(상대 얼굴을 읽는) / 놀리는 웃음 / 입 내민 투정 / 진지하게 한 번 보는 얼굴(P25) |
| `SEOKGU_turnaround` | SEOKGU_SHOP (베이지 꽈배기 니트 조끼 + 흰 셔츠 소매 두 번 걷음 + 갈색 면바지 + 갈색 실내화, 목에 돋보기) | 전신 4방향. **금붙이 없음.** 둥근 체형·배. 손은 깨끗하고 두툼하게 |
| `SEOKGU_expressions` | SEOKGU_SHOP | 6컷: 눈이 거의 감기는 다정한 미소(고개 기울임) / 차를 따르며 웃는 3/4 / **늦게 굳는 미소 1/2**(입은 웃고 눈 주름 펴지며 눈이 뜨임) / **2/2**(입꼬리 내려온 무표정, 시선 회피) / 차가운 얼굴(미소 없이 눈 뜬 평평한 무표정, 돋보기를 벗어 든 손) / 돋보기를 이마에 올린 웃음 |

**공통 조건 (모든 시트):**
- 순백 또는 연회색 단색 배경, 균일한 스튜디오 조명, 연출 색 없음(패널에서 변주할 여지).
- 턴어라운드: 중립 자세(팔 자연스럽게 내림), 무표정에 가까운 기본 표정. 같은 키·같은 비율로 4포즈 나란히.
- 표정 시트: 같은 얼굴 크기의 머리-어깨 컷을 한 줄(또는 2줄) 격자로.
- 식별 표식과 좌/우를 프롬프트에 **명시**: 하린 화상 = 오른쪽 팔뚝 안쪽 / 우진 반창고 = 오른손 마디 / 인호 굳은살 = 오른손 엄지 옆 / 미자 흰 띠 = 왼손 약지 / 새롬 핀 = 오른쪽 귀 위 / 석구 돋보기 = 목, 검은 끈.
- 스타일 = style-bible GLOBAL STYLE TOKEN의 화풍(semi-realistic Korean webtoon, clean thin line, soft cel shading)을 그대로.
- 마지막 줄: `Avoid: any text, labels, speech bubbles, watermark.` (이름표·화살표·숫자 금지)
- 저장 이름은 위 카드 이름 그대로(`HARIN_turnaround.png` 등).

**패널에 붙이는 법 (prompt-smith `attach:`):** 인물이 얼굴로 나오는 패널 = 그 인물의 `_turnaround` + `_expressions`. 손·소매만 나오는 패널은 `_turnaround`만(또는 생략). 원경 실루엣(P41)은 붙이지 않는다(작게 그려야 하므로). 3인 이상 패널은 주인공 쪽 2명까지만 붙이고 나머지는 APPEARANCE 문장으로.

### 4-1. 선택 카드 (권장): `PROPS_keyprops` — 반전 소품 시트 1장
- 이유: 반전이 **물건**으로 터진다(P19↔P48 팔찌, P01·P50·P58 봉투). Flow는 소품을 패널마다 다르게 그리기 쉽다. 소품 시트 하나를 P01·P10–13·P19–21·P44·P48·P50·P58에 `attach`하면 일치율이 크게 오른다.
- 내용(16:9, 무글자, 흰 배경, 균일 조명, 같은 축척): ① 빈 봉투(납작, 세 번 접힘, 빨간 고무줄) ② 찬 봉투(살짝 부풂) ③ 진품 팔찌(도드라진 금 테 + 흰 구름 무늬) ④ 복제품 팔찌(납작한 금색 선, 무늬 없음) — ③④는 같은 3/4 각도로 나란히 ⑤ 스테인리스 숟가락(곧은 것) + 하린 숟가락(손잡이 끝 살짝 휨) ⑥ 무지 지폐 작은 다발(한 장의 오른쪽 위 모서리 삼각 접힘).
- 문구는 style-bible §6-B PROP 문장 그대로. 리더가 승인하면 ref-sheet-artist가 `ref_prompts.md`에 13번째 카드로 추가한다.

---

## 5. 금지 요약 (인물)

- 머리색·길이·눈매(홑/쌍꺼풀)·식별 표식 위치 변경 금지.
- 미자 반지 · 석구 금붙이 · 옷의 글자/로고 · 녹색 옷 · 채도 높은 빨강 옷 금지.
- 삼촌 악역 인상 금지(차가움 = 웃음이 사라진 무표정).
- 우진 팔찌: P19–21에서만 보이고(복제품, 흰 구름 무늬 없음), P29·P41·P57–60에서는 보이지 않는다.
- 레퍼런스 시트에 글자·라벨·화살표 금지.

---

## 6. 플래그 (리더에게)

| # | 내용 | 제안 |
|---|---|---|
| A1 | HARIN_FACTORY로 새벽 바깥(P07–08)을 걷는다 — 늦가을 새벽에 흰 작업복만 입은 셈 | beatsheet 고정을 따랐다. 춥게 보이면 panel-director가 "입김 + 팔짱"으로 연출. 의상 추가(조끼)는 P05 시간 표지(의상 변화)를 흐리므로 권하지 않음 |
| A2 | 우진 팔찌를 APPEARANCE에서 뺐다(패널 add-on으로) | 팔찌가 보이면 안 되는 컷(P29·P57–60)에서 Flow가 레퍼런스를 따라 팔찌를 그리지 않게. 같은 이유로 `UJIN_turnaround`도 팔찌 없이 |
| A3 | 조연 2명 시트 없음 | EP01 클로즈업 없음. 재등장 회차에 추가 |
| A4 | `PROPS_keyprops` 선택 카드 | 리더 승인 시 Flow 카드 13장(인물 12 + 소품 1) |
| A5 | 뒷방 서랍 위치를 "왼쪽 줄, 위에서 두 번째 칸"으로 고정(world "왼쪽 위에서 두 번째"의 해석) | panel-director·prompt-smith는 이 해석으로 통일 |
| A6 | 레퍼런스 시트는 각 인물 EP01 주 의상 2종에 걸쳐 나눴다(하린 COMMUTE/HOME, 우진 OUT/HOME) | 한 시트에 의상 2개를 섞지 않고 두 의상 모두 시각 기준을 갖게 함 |

---
---

# EP02 additions (2026-11-25) — 「엄마는 웃고 있었다」

- 작성: art-director · Phase 4 · 입력 `ep02_beatsheet.md`(F6·F8·F9), `ep02_script_final.md`, brief 판정 EA–EC. 짝: `style-bible.md` "EP02 additions"(§10).
- **위 EP01 섹션(§0–§6)은 바꾸지 않았다.** APPEARANCE 문장·의상 영문 문장·WRIST RULE은 글자 그대로 재사용한다.
- **신규 의상 없음 · 신규 인물 토큰 없음**(냄비 공장 사장은 얼굴 없는 원경 — style-bible §10-5 문장만).

## 7. EP02 의상 · 등장 · 패널별 표 (P01–P62)

약어: H = HARIN · U = UJIN · I = INHO · M = MIJA · S = SAEROM. 의상 코드는 §1의 영문 문장을 그대로 쓴다. "(손)" = 손·소매만, "(실루엣)" = 간유리 실루엣.
우진 손목: 별도 표기 없으면 WRIST RULE "팔찌 숨김"(`his left wrist is hidden inside his sleeve, no bracelet visible`).

### S1 · 15일 21:40 · LOC_HOME_ENTRANCE (EP01 P57–60 직결)
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P01 | H HARIN_COMMUTE (턱에 앉음) · U UJIN_OUT (검은 백팩 멤) | 하린 백팩은 메지 않고 턱 위 옆에 놓임(AE2), 낡은 흰 운동화는 턱 아래 바닥 · 우진 오른손에 빈 봉투(반창고 보임), 팔찌 숨김 필수 |
| P02 | U UJIN_OUT | 오른손이 봉투를 패딩 안주머니에 넣음, 팔찌 숨김 필수 |
| P03 | U UJIN_OUT (등) · H HARIN_COMMUTE | 우진 흰 스니커즈는 벗어 시멘트 바닥에 |
| P04 | H (손) HARIN_COMMUTE — 오른손이 조끼 주머니 속을 쥠 · U (등) UJIN_OUT · M 화면 밖 | 주머니 속 봉투는 형태만 |
| P05 | U (등) UJIN_OUT · H (등) HARIN_COMMUTE | |
| P06 | H (손) HARIN_COMMUTE — 회색 후드 소매 | 바닥: 하린 낡은 흰 운동화 + 우진 흰 스니커즈 나란히 · 빈 봉투 |

### S2 · 16일 새벽 · LOC_ALLEY_STAIRS
하린 HARIN_COMMUTE **백팩 없음** · 우진 UJIN_OUT **백팩 없음**, P08만 후드 씀(AE6).
| P | 인물 | 추가 |
|---|---|---|
| P07 | H | 무릎 위 두 손에 빈 봉투 |
| P08 | U (후드 씀, 두 손 패딩 주머니) · H | |
| P09 | U (손) · H (손) | 탑다운: 같은 빈 봉투 두 개 · 프레임 끝에 하린 낡은 흰 운동화 + 우진 흰 스니커즈 앞코 |
| P10–P14 | U · H (P11·P12 = U 단독, P13 = H 단독) | 팔찌 숨김 · 손가락 틈 연기(P12–14) |
| P15 | H · U (전경 왼소매) | 우진이 왼손을 무릎 사이로 감춤 |
| P16 | H · U | 우진 오른손 반창고 보임 |
| P17 | U (왼손목·오른손) | **팔찌 보임 (복제품)** — 패딩 소매와 후드 소매를 걷어 올림, style-bible §5-5 각도·크기 + PROP_BRACELET_COPY 문장 · 이 회차 유일한 팔찌 노출 |
| P18 | H | 팔찌는 화면 밖(AE5) |
| P19 | U · H | 우진이 소매를 끌어내림 = 팔찌 숨김 |
| P20–P25 | U · H (P21 = H 단독) | 팔찌 숨김 · P24 하린이 빈 봉투를 쥠 |
| P26 | U · H (원경 실루엣) | 두 사람이 봉투를 주머니에 넣음 |

### S3 · 17일 18:40 · LOC_HOME_TABLE · 전원 집옷
H HARIN_HOME · U UJIN_HOME (+ 의자 등받이에 검은 숏패딩) · I INHO_HOME · M MIJA_HOME (머스터드 앞치마) · S SAEROM_HOME.
| P | 인물 | 추가 |
|---|---|---|
| P27 | 전원 | 미자 왼손 약지 흰 띠 작게 · 쌀통 배경(닫힘) |
| P28 | H (손, 오트밀 카디건 소매) · U (손, 차콜 후드 소매) + 두 눈 | 하린 숟가락 끝 밥그릇에 가림 |
| P29 | S | 노란 별 머리핀(오른쪽 귀 위) |
| P30 | U · S | S 철제 의자에서 일어나 까치발 |
| P31 | 전원 | |
| P32 | S · M (등) | 쌀통 화면 중심, 뚜껑 닫힘 |
| P33 | M (손, 핑크베이지 카디건 소매) · S (손, 연코랄 후드 소매) | 왼손 약지 흰 띠, 펜던트 빛 정면 · 뚜껑 닫힌 채 누름 |
| P34 | 전원 (M 뒷모습·옆얼굴 일부) | 미자 정면 무표정 금지(P61 전용) |
| P35–P36 | M (+ S / 배경 I) | |
| P37 | I (손, 진갈색 니트 소매) | 오른손 엄지 옆 굳은살, 곧은 숟가락 |
| P38 | 전원 | EP01 P24와 같은 정면 와이드 |
| P39 | H · U | |
| P40 | I (일어서 나감, INHO_HOME 그대로) · M · S · H (전경) | 우진은 화면 밖이거나 배경 · INHO_GUARD 쓰지 않음(갈아입는 건 화면 밖) |

### S4 · 17일 ~19:30 · LOC_HOME_TABLE 싱크대 쪽
| P | 인물 | 추가 |
|---|---|---|
| P41 | H HARIN_HOME (카디건 소매 걷음) · U UJIN_HOME (**오른쪽 소매만** 걷음, 왼손목 소매 안) · 배경 M · S | 아버지 빈 자리 + 반쯤 남은 밥그릇 · 소매를 걷은 하린 오른팔 안쪽 화상 자국은 보여도 됨 |
| P42 | H HARIN_HOME | 거품 묻은 손 |
| P43 | M MIJA_HOME · S SAEROM_HOME (하린 어깨 너머) | 식탁 위 미자 왼손 흰 띠 |

### S5 · 18일 노을 · LOC_ALLEY_STAIRS
| P | 인물 | 추가 |
|---|---|---|
| P44 | H HARIN_COMMUTE **백팩 없음** + 남색 무지 천 장바구니(MIJA_OUT 문장의 `a plain navy cloth shopping bag`) · YAI 토큰(§2-2) | 할머니는 평상, 귤 |
| P45 | H (전경 귀퉁이 작게, 같은 차림) · 원경 냄비 공장 사장(style-bible §10-5) | 얼굴 없음, 1/10 이하 |

### S6 · 18일 21:15 · LOC_HOME_ENTRANCE 안쪽 · L-ENTRANCE-EVENING
하린 HARIN_COMMUTE **+ 검은 백팩 멤**(출근 직전) · 미자 MIJA_HOME **앞치마 그대로 + 회색 슬리퍼** + PROP_PHONE.
| P | 인물 | 추가 |
|---|---|---|
| P46 | H · M | 미자 밝은 웃음, 휴대폰 화면은 가슴 쪽 · 바닥에 아버지 검은 구두·우진 스니커즈(AE4) |
| P47 | M (실루엣) · H (전경 등) | |
| P48 | H · M (실루엣, 귀에 휴대폰) | |
| P49 | H (손) | 회색 후드 소매 끝, 오른쪽 팔뚝 안쪽 화상 자국 |
| P50–P51 | H · M (실루엣) / P51 = M 실루엣 단독 | |
| P52 | M (손, 회상) | MIJA_HOME 카디건 소매 + 흰 띠 · style-bible §10-6 처리 |
| P53 | H | 등 뒤 흐린 실루엣 |
| P54 | H (손 + 입) | 백팩 어깨끈을 쥔 손 |
| P55–P57 | H · M (실루엣; P57 한 뼘 거리, 더 또렷) / P56 = H 단독 | P55 한쪽 운동화 끈 풀림 |
| P58 | H (손) · M (실루엣 뒷모습) | 손바닥 = AE3 |

### S7 · 18일 ~21:20 · LOC_HOME_YARD · L-YARD-NIGHT
| P | 인물 | 추가 |
|---|---|---|
| P59 | M MIJA_HOME (앞치마, 회색 슬리퍼) | 휴대폰을 가슴에 누름(화면 몸 쪽), 옆얼굴 반만, 입김 |
| P60 | M (어깨·뒷머리) · H (실루엣) | 하린 실루엣 = 낮은 포니테일 + 백팩 어깨끈 + 손가락 그림자 |
| P61 | M | MIJA_expressions "웃음이 멈춘 얼굴" — 반달 눈 없음, 눈물 없음 |
| P62 | H (실루엣) | 문 앞 바닥에 미자 슬리퍼 그림자 끝만 |

**EP02에 나오지 않는 것:** HARIN_FACTORY · INHO_GUARD · MIJA_OUT(인물 의상으로는 미사용, 장바구니만) · SAEROM_SCHOOL · SEOKGU 전부(목소리도 없음) · TAK.

## 8. EP02 레퍼런스 카드 판정

- **신규 카드 없음.** EP01 카드 12장 + `PROPS_keyprops`를 그대로 쓴다.
  - 냄비 공장 사장 = 얼굴 없는 원경(P45) → 카드 불필요(판정 EA). EP03에서 얼굴이 나오면 그때 토큰·카드를 정한다.
  - 쌀통·휴대폰·장바구니 = 단순한 무지 물건, 문장만으로 충분(PROPS_keyprops 갱신 불필요).
  - 할머니(P44) = 배경, 대사 없음 → EP01 판정 그대로 카드 없음.
- 첨부 권장(prompt-smith): 인물 얼굴 컷 = 그 인물의 `_turnaround` + `_expressions` · P17 = `UJIN_turnaround` + `PROPS_keyprops`(복제 팔찌) · P06·P09 = `PROPS_keyprops`(빈 봉투) · P33·P52 = `MIJA_turnaround`(왼손 흰 띠) · P61 = `MIJA_expressions`(웃음이 멈춘 얼굴) · 실루엣 컷(P47–58의 미자, P60·P62의 하린)과 P45 원경에는 붙이지 않는다(작게·흐리게 그려야 하므로).
- 주의: `MIJA_turnaround`는 앞치마 차림이라 S6–S7과 맞다. `HARIN_turnaround`는 백팩 없는 COMMUTE — S6 백팩은 프롬프트 문장으로 더한다.

---
---

# EP03 additions (2026-11-25) — 「3년 전에 끝난 일」

- 작성: art-director · Phase 4 · 입력 `ep03_beatsheet.md`(F2·F6–F10), brief 판정 GA–GE, `characters.md` §2·§3. 짝: `style-bible.md` "EP03 additions"(§11).
- **위 EP01 섹션(§0–§6)과 EP02 섹션(§7–§8)은 바꾸지 않았다.** 기존 APPEARANCE 문장·의상 영문 문장·WRIST RULE은 글자 그대로 재사용한다.
- 신규: **SUPPLIER 인물 토큰 1명**(+ 회상판 문장) · **HARIN_TEEN 회상 의상**(카드 없음) · **SUPPLIER 레퍼런스 카드 2장**. 그 밖의 의상은 전부 기존 코드.
- `SAEROM_SCHOOL`(§1-5)은 EP03 P30–31에서 **처음 쓴다**(문장 그대로, 새 토큰 아님).

## 9. 신규 인물 — SUPPLIER · 냄비 공장 사장 (옛 거래처 사장, 이름 없음)

| tag | 이름 | 크메르어 화자 표기 | 나이 | 키 | 실루엣 한 줄 | 식별 표식 (항상 보이는 2개) |
|---|---|---|---|---|---|---|
| SUPPLIER | 「사장님」 (이름 없음, 판정 GB) | ថៅកែ (자칭 តា, 하린을 ចៅ) | 60대 중반 남 | 168 (구부정 — 실제보다 작아 보임) | 마르고 굽은 등, 머리가 앞으로 | 짙은 납작 모자(늘 씀) / 크고 거친 손(굵은 마디·갈라진 손끝) |

- 키 순서에 넣으면: 우진 > 인호 ≈ 사장 > 석구 > 하린 > 미자 > 새롬(사장은 굽어서 석구와 비슷해 보인다).
- 이름이 대사에 나오지 않으므로 크메르어 이름 검사 불필요(판정 GB). 그는 `ពូ`·`ក្មួយ`를 쓰지 않는다 — 그림과는 무관하지만 레터링·검수 참고.

**APPEARANCE (불변 · 모든 사장 패널에 그대로):**
```
the old kitchenware supplier, a Korean man in his mid-60s, short thin white hair under a dark charcoal wool flat cap that he always wears, sparse white eyebrows, gentle drooping eyes under heavy creased eyelids, a long lean weathered face with deep forehead and eye-corner wrinkles, sunken cheeks and a short white stubble on his chin and jaw, sun-darkened tanned skin, a thin wiry build with a noticeably stooped back and his head carried forward, about 168 cm, large rough work-worn hands with thick knuckles and cracked fingertips, no glasses, no jewellery, a mild, slightly shy expression.
```

**OUTFIT**
| code | 영문 문장 | EP03 패널 |
|---|---|---|
| SUPPLIER_OUT | `wearing a plain grey quilted padded jacket zipped half-way over a dark charcoal crew-neck sweater, loose dark grey work trousers, worn black lace-up shoes, no logos` (+ P41–58: `holding a faded indigo cotton wrapping cloth, empty and folded flat into a small square`; + P48–58: `holding a small clear plastic water bottle with a plain muted pale-blue cap`) | P41 (작게, 문간에서 나옴) · P42 (작게) · P43–45 · P48–58 |
- 팔레트: 누빔 회색 `#8C8D8F` · 차콜 `#3B3C40` · 바랜 남빛 `#4A5677`(보자기). 녹색·빨강 없음.
- EP02 P45 원경(style-bible §10-5)과 **같은 점퍼·모자·보자기** — EP02는 묶인 보자기, EP03은 비어 접힌 보자기.

**석구(SEOKGU)와 한눈에 구분 [고정]**
| | SUPPLIER | SEOKGU |
|---|---|---|
| 체형 | 마르고 굽음, 머리가 앞으로 | 둥글고 넉넉, 배 살짝, 반듯 |
| 머리 | 짧은 흰머리 + **늘 짙은 납작 모자** | 뒤로 빗어 넘긴 반백, 가르마, 모자 없음 |
| 얼굴 | 길고 여윈, 그을림, 흰 수염 자국, 처진 눈 | 둥글고 혈색, 깨끗이 면도, 웃음에 묻히는 눈 |
| 안경 | **없음** | 목에 갈색 뿔테 돋보기 |
| 손 | 크고 거칠고 갈라진 손 | 두툼하고 깨끗한 손 |
| 옷 | 회색 누빔 점퍼 · 차콜 | 베이지 꽈배기 조끼 · 흰 셔츠 |
- P41(두 사람이 문간에 함께)은 이 대비가 원경에서도 실루엣으로 읽혀야 한다: 마르고 굽은 회색 + 모자 / 둥근 베이지 + 맨머리.
- **인호(INHO)와도 구분**(style-bible AG1): 인호 = 반백·넓은 M자 이마·짙은 검은 처진 눈썹·진갈색 니트 / 사장 = 흰머리·모자·옅은 흰 눈썹·회색 점퍼·그을린 피부.

**표정 범위 (EP03 패널)**
- P43 가늘게 뜬 눈, 못 알아봄 → P45 주름이 웃음으로 접히는 활짝 알아본 얼굴(손바닥으로 무릎) → P48 "허허" 쓴웃음 → P49–50 먼 데 보는 얼굴 → P53 **진심으로 어리둥절**(눈썹 올라감, 악의·숨김 없음) → P54 가볍게 손을 휘젓는 다정한 얼굴 → P55 무심히 고개 끄덕이는 옆얼굴 → P57 오히려 자랑스러운 끄덕임.
- **금지:** 악의·교활·음모의 얼굴(P54–55는 다정하고 가벼워야 아프다). 안경·금붙이·삼촌식 능글맞은 미소(고개 기울인 반달 눈) 금지.
- HAND ID: 크고 거친 손 + 회색 누빔 점퍼 소매(P47 회상 손, P50 보자기를 쓰다듬는 손).

**회상판 — SUPPLIER_YOUNG (6년 전, P46–47, 카드 없음 · 문장 차이만)**
- 같은 사람, 여섯 살 젊게. **같은 짙은 납작 모자, 같은 회색 누빔 점퍼, 같은 크고 거친 손.** 차이: 등이 덜 굽음(아주 살짝), 모자 밑 머리가 흰색이 아니라 **대부분 회색**, 주름이 적고 얕음, 수염 자국 없음, 얼굴이 조금 덜 여윔.
- 그날 밤의 자세: 엎은 플라스틱 상자에 앉아 고개를 떨군 채, 두 손을 무릎 사이로.
- 영문 덧문장(APPEARANCE 대신): `the same old kitchenware supplier six years younger: standing a little straighter with only a slight stoop, the short hair under the same dark charcoal wool flat cap still mostly grey rather than white, fewer and shallower wrinkles, no stubble, a lean but less sunken face, the same large rough work-worn hands, the same plain grey quilted padded jacket, no glasses`
- 회상 처리(style-bible §11-4)로 거의 무채색.

## 10. 신규 레퍼런스 카드 — SUPPLIER (ref-sheet-artist 지시서, `refs/ref_prompts.md`에 14·15번째로 추가)

출력 `_workspace/04_visual/refs/<card>.png`, aspect **16:9**. §4 공통 조건(단색 연회색 배경, 균일 조명, 무글자, 마지막 줄 `Avoid: any text, labels, speech bubbles, watermark.`) 그대로.

| 카드 | 의상 | 내용 |
|---|---|---|
| `SUPPLIER_turnaround` | SUPPLIER_OUT (회색 누빔 점퍼 반쯤 잠금 + 차콜 니트 + 진회색 작업 바지 + 낡은 검은 끈 구두, **소품 없이**) | 전신 4방향: 정면 · 3/4 · 측면 · 후면. **납작 모자는 네 포즈 모두 씀**(벗은 모습 없음). 측면·후면에서 **굽은 등과 앞으로 나온 머리**가 분명히. 정면·3/4에서 두 손을 자연스럽게 내려 **크고 거친 손(굵은 마디)** 이 보이게. 안경·금붙이 없음. 같은 키·같은 비율 |
| `SUPPLIER_expressions` | SUPPLIER_OUT 어깨선까지, 모자 씀 | **6컷(2줄 × 3):** ① 가늘게 뜬 눈으로 상대를 알아보려는 얼굴(못 알아봄, P43) ② 주름이 웃음으로 접히는 활짝 알아본 반가운 웃음(P45) ③ 고개를 조금 숙인 "허허" 쓴웃음, 눈가 주름(P48) ④ 먼 데를 보는 조용한 얼굴, 입 다묾(P49–50) ⑤ 진심으로 어리둥절 — 눈썹이 올라가고 고개를 갸웃, 숨김없는 얼굴(P53) ⑥ 큰 손 하나를 가볍게 휘저으며 짓는 다정하고 무심한 얼굴, 3/4 각도(P54–55) |

- **공통 명시:** 마르고 굽음 · 흰머리 · 늘 모자 · 그을린 피부 · 흰 수염 자국 · **no glasses** · 손 크고 거칠다. 석구 카드와 나란히 놓고 봐도 다른 사람으로 읽혀야 한다.
- 악의·교활한 표정 금지(⑤⑥은 다정하고 순하게). 회상판(젊은 얼굴)은 카드로 만들지 않는다.
- **첨부 권장(prompt-smith):** 사장 얼굴 컷(P43·P45·P48–50·P53–55·P57) = `SUPPLIER_turnaround` + `SUPPLIER_expressions` · P41·P42(작게)·P58(등·뒷모습) = `SUPPLIER_turnaround`만 · P46 회상 = `SUPPLIER_turnaround`(모자·점퍼·얼굴형 참고) + 프롬프트에 SUPPLIER_YOUNG 문장(머리 회색, 주름 적게) · P47 손 = 첨부 없음 또는 turnaround.
- 카드 총수: EP01 13장(인물 12 + PROPS_keyprops) + EP03 2장 = **15장**.

## 11. 신규 의상 — HARIN_TEEN (17세 하린, 회상 P46–47 전용, 카드 없음)

**APPEARANCE 대체 문장 (회상 컷에서만 성인 HARIN APPEARANCE 대신):**
```
Harin at seventeen, a Korean teenage girl with the same face as adult Harin but younger: a softer, rounder face with fuller cheeks, the same long single-eyelid dark brown eyes but bright and clear with no tired shadows beneath, the same shoulder-length straight black hair tied in a low ponytail at the nape with loose wisps at both temples, slim build, about 161 cm, smooth unmarked forearms with no scar at all, a quiet worried but gentle expression.
```
**OUTFIT**
| code | 영문 문장 | 패널 |
|---|---|---|
| HARIN_TEEN | `wearing a plain grey zip-up school tracksuit jacket over a white collared shirt, dark grey tracksuit trousers, white sneakers, no emblem, no name tag, no stripes, no logos` | P46 (미디엄 와이드, 물 한 잔을 두 손으로 내밂) · P47 (손 ECU — 회색 체육복 소매 끝 + 흰 깃 셔츠 소맷부리) |
- **새롬 교복(SAEROM_SCHOOL: 흰 블라우스 + 남색 니트 조끼 + 회색 주름치마)과 겹치지 않는다** — 하린은 회색 체육복 지퍼 상의 + 바지, 남색·치마 없음.
- **화상 자국 없음 [고정, L24]:** P47 오른팔 안쪽 피부가 깨끗해야 한다. 프롬프트에 `her right inner forearm is smooth and unmarked, no scar` 명시.
- 다크서클 없음, 볼이 둥글다 — 성인 하린과 같은 사람으로 읽히되 6년의 차이가 보이게.
- 첨부: P46 = `HARIN_turnaround`(얼굴형·머리 참고) + 프롬프트에 `younger, rounder face, no tired shadows, not wearing the navy vest` · **P47 = HARIN 카드 첨부하지 않는다**(턴어라운드에 화상 자국이 정면으로 그려져 있어 Flow가 옮겨 그릴 위험).
- 회상 처리(style-bible §11-4)로 거의 무채색.

## 12. EP03 의상 · 등장 · 패널별 표 (P01–P61)

약어: H = HARIN · U = UJIN · M = MIJA · S = SAEROM · SK = SEOKGU · SP = SUPPLIER. 의상 코드는 §1·§9·§11의 영문 문장을 그대로 쓴다. "(손)" = 손·소매만, "(실루엣)" = 간유리 실루엣.
우진 손목: 모든 우진 컷에서 WRIST RULE "팔찌 숨김"(`his left wrist is hidden inside his sleeve, no bracelet visible`) **필수** — EP03 팔찌 노출 없음.
아버지(INHO): 화면에 없음(안방 문과 PROP_DAD_BOWL만).

### S1 · 18일 ~21:20 · LOC_HOME_ENTRANCE → LOC_HOME_YARD (EP02 P62 직결)
H HARIN_COMMUTE **+ 검은 백팩 멤**, 한쪽 운동화 끈 풀림(P01–03) → P04에서 묶음 · M MIJA_HOME **앞치마 + 회색 슬리퍼** + PROP_PHONE(화면 몸 쪽).
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P01 | H (등·어깨, 오버 숄더) · M (열린 문틀 안, 역광 윤곽) | 하린 손바닥이 문틀에서 미끄러져 내림 · 바닥에 아버지 검은 구두(AE4) |
| P02 | M (정면 클로즈업) | 웃음이 다시 조립되는 중(반달 눈 반쯤), 눈 밑 붉음, 눈물 없음, 휴대폰 쥔 손 가슴에 |
| P03 | H · M (마당 측면 와이드) | 하린 풀린 운동화 끈이 시멘트에 끌림 · 입김 두 줄 |
| P04 | H (대문 앞 한쪽 무릎, 끈 묶음, 전경 낮게) · M (간유리 실루엣, style-bible §11-2 P04) | EP02 P62 거울 |

### S2 · 18일 ~21:25–21:30 · LOC_ALLEY_STAIRS → LOC_UNCLE_SHOP 바깥
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P05 | H HARIN_COMMUTE + 검은 백팩 (뒷모습, 작게) | 끈 묶인 상태 · 평상 비어 있음 |
| P06 | H (전경 옆모습, 같은 차림) · SK SEOKGU_SHOP (유리 너머 작업대, 돋보기 목에) | 삼촌이 손을 들고 찻잔을 살짝 들어 보임 · 장부 덮임(배경) |

### S3 · 19일 ~06:40–07:20 · LOC_HOME_TABLE · L-DAWN-KITCHEN → P29부터 L-MORNING-KITCHEN
H **HARIN_FACTORY**(흰 작업복, 정수리 머리 눌림 — 머리망은 없음) **+ 검은 백팩**(P07–08 멤 → P09 의자에) · M MIJA_HOME(앞치마, 회색 슬리퍼) · U UJIN_HOME(차콜 후드, 팔찌 숨김) · S **SAEROM_SCHOOL 첫 사용**(남색 백팩 + 회색 고양이 키링, 노란 별 핀 오른쪽).
하린 HARIN_FACTORY에서 P07–14 문장의 "carrying a clear plastic bag of bread rolls"는 **넣지 않는다**(EP03 빵 봉지 없음). 조끼는 화면 밖(백팩 안, beatsheet F2 그대로).
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P07 | M (등, 싱크대에서 쌀 씻음) · H (문턱, 백팩 멤) | 쌀통 닫힘 · PROP_DAD_BOWL 배경 |
| P08 | M | 반달 눈 웃음(가면), 앞치마에 손 닦는 척 |
| P09 | H | 백팩을 의자에 내려놓음 |
| P10 | M (손) | 쌀뜨물 속 두 손, 왼손 약지 흰 띠(형광등 빛) · 핑크베이지 카디건 소매 걷힘 |
| P11 | M | 웃으며 손 휘휘, 시선은 냄비로 |
| P12 | H · M (전경 어깨) | |
| P13 | M (레인지 쪽 자기 의자에 앉음) | 웃음 없는 얼굴(MIJA_expressions "웃음이 멈춘 얼굴"의 무른 쪽), 눈물 없음 · 등 뒤 쌀통 닫힘 |
| P14 | H (손, 흰 작업복 소매) · M | 백팩 앞주머니에서 빈 봉투 하나 → 식탁 위 |
| P15 | M | 손이 입으로 |
| P16 | M · H | |
| P17 | H (어깨 너머) · M · 쌀통(배경, 닫힘) | |
| P18 | H · M | 하린 한쪽 입꼬리 · 미자 손바닥으로 가슴 |
| P19 | H · M | 미자 두 손으로 얼굴 반쯤 가림 |
| P20 | H · M | **같이 웃음** — 하린 `a rare, real laugh with both corners of her mouth, head bowed, shoulders shaking`(HARIN_expressions에 없는 표정 → 문장) · 미자 진짜 반달 눈 · 창 한 단계 밝게 |
| P21 | M (손) | **쌀통 열림**(style-bible §11-5) — 뚜껑 안쪽 테이프 두 줄 + 빈 봉투 |
| P22 | H · M | 같은 빈 봉투 **두 개** 나란히(전경) |
| P23 | M (손) · H (손, 흰 작업복 소맷부리) | 미자 왼손 흰 띠 + 하린 거친 손·짧은 손톱 · 반쯤 미자 얼굴(젖은 눈, 웃음기) |
| P24 | U UJIN_HOME (부엌 문턱) · H · M (전경) | 헝클어진 앞머리, 오른손 반창고 · 팔찌 숨김 |
| P25 | U (클로즈업) · H (손 전경) | 팔찌 숨김 |
| P26 | U (손, 차콜 후드 소매) · M · H | 같은 빈 봉투 **정확히 세 개** 한 줄 · PROP_DAD_BOWL 흐리게 · 팔찌 숨김 |
| P27 | M · U · H | 미자 손바닥이 봉투 셋을 덮음 |
| P28 | H (옆얼굴 전경) · 배경 아버지 자리 | **PROP_DAD_BOWL 초점 — 곧은 숟가락, 손잡이 끝 보임** · 닫힌 안방 문 |
| P29 | M · H · U | **L-MORNING-KITCHEN 시작** — 햇살 한 줄이 세 손에 · 미자 작은 진짜 미소(입만) · 미자 흰 띠 · 우진 고개 돌림, 팔찌 숨김 |
| P30 | S SAEROM_SCHOOL (문턱, 백팩 한쪽 어깨) · H · M · U | 셋이 봉투를 쓸어 담음: 하린 = 작업복 주머니 · 우진 = 후드 주머니 · 미자 = 앞치마 주머니 · 미자 벌써 반달 눈 |
| P31 | S (등 미디엄 + 돌아본 옆얼굴) · 배경 M | **회색 고양이 키링 초점** · 노란 별 핀(오른쪽 — 오른쪽 옆얼굴로 돌아봄) · 미자 손이 **닫힌** 쌀통 뚜껑 위 |
| P32 | U · H · M | 우진 의자 등받이에 기댐 · 팔찌 숨김 |
| P33 | M (클로즈업) | 입 반쯤 열린 채 멈춤 |
| P34 | H (정면 클로즈업) | 단단한 입매, 식탁 위 주먹 |
| P35 | M (옆얼굴 전경) · H (배경, 시선 안방 문) | |
| P36 | M · U · H | 셋의 머리가 모임 · 팔찌 숨김 |
| P37 | H (일어섬) · M | 미자가 하린 손목을 잡음 → 하린이 뗌 · 작업복 주머니 속 봉투 |

### S4 · 19일 ~15:30 → ~17:05 · LOC_ALLEY_STAIRS 맨 아래 층계참 · L-AFTERNOON-STAIRS → L-SUNSET
H HARIN_COMMUTE **백팩 없음** + 조끼 주머니에 PROP_WATER_BOTTLE.
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P38 | H (담 뒤 계단, 무릎 세우고 앉음) | 흰 낮빛 · 물병은 조끼 주머니 |
| P39 (선택) | YAI 토큰(§2-2, 위쪽 평상, 귤) · H | 할머니 하이 앵글 |
| P40 | H | P38과 같은 구도, 노을 · 손가락에 입김 |
| P41 | SP SUPPLIER_OUT (작게, 문간에서 나옴, 빈 보자기) · SK SEOKGU_SHOP (문간, 두 손 모아 배웅) · H (전경, 담 뒤로 몸 낮춤) | SP는 turnaround만 첨부, 작게 · 석구 돋보기 목에 |
| P42 | H (내려서는 뒷모습) · SP (아래, 작게) · SK (문 닫히는 뒷모습) | 문 위 놋쇠 종 |

### S5 · 19일 노을 · LOC_ALLEY_STAIRS 맨 아래 층계참 (+ 회상 LOC_FLASH_OLDSHOP) · L-SUNSET / FLASHBACK-PAST
H HARIN_COMMUTE 백팩 없음 · SP SUPPLIER_OUT.
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P43 | SP (얼굴 첫 공개, 하이 앵글 클로즈업) | 가늘게 뜬 눈 · 빈 보자기 |
| P44 | H | 두 손 모으고 고개 숙임 |
| P45 | SP (클로즈업) | 활짝 알아본 웃음, 손바닥으로 무릎 · 노을 정면 |
| P46 | **H HARIN_TEEN** · **SP SUPPLIER_YOUNG**(엎은 상자에 앉아 고개 떨굼) · 안쪽 얼굴 없는 인영 | **회상** — FLASHBACK-PAST + LOC_FLASH_OLDSHOP · PROP_GLASS 두 손으로 내밂 · 인영에 인호 특징 금지 |
| P47 | H HARIN_TEEN (손, 회색 체육복 소매) · SP SUPPLIER_YOUNG (손, 회색 누빔 소매) | **회상** 손 ECU · PROP_GLASS · **하린 오른팔 안쪽 화상 자국 없음** · HARIN 카드 첨부 금지 |
| P48 | SP · H (같은 칸 나란히) | 하린이 조끼 주머니에서 물병을 꺼내 두 손으로 내밂(P46과 같은 몸짓) · 이후 물병은 SP 손 |
| P49 | SP · H · 원경 가게 유리 안 둥근 인영(SK, 1/12 이하, 얼굴 없음) | SP 물병 쥠, 먼 데 봄 |
| P50 | SP (손 + 보자기) · H (옆얼굴) | 빈 보자기를 쓰다듬는 크고 거친 손 |
| P51 | H (클로즈업) | 무릎 위 하얗게 맞쥔 두 손 |
| P52 | H (어깨 너머) · SP (클로즈업) | SP 물병 든 채 갸웃 |
| P53 | SP (정면 클로즈업) | **진심으로 어리둥절**, 악의 없음 |
| P54 | SP (미디엄 클로즈업) · H (전경, 초점 밖 옆얼굴) | 손을 가볍게 휘저음, 다정 · 얼굴 반 노을 주황 |
| P55 | SP (옆얼굴 클로즈업) | 물병 뚜껑을 돌림, 무심히 끄덕임 |
| P56 | H (정면 클로즈업) | HARIN_expressions "창백하게 굳은 충격", 눈물 없음, 배경 흐림 |
| P57 | H · SP | 하린 입술만 · SP 자랑스러운 끄덕임 |

### S6 · 19일 ~17:20 · LOC_ALLEY_STAIRS → 아래 LOC_UNCLE_SHOP 문간 · L-SUNSET
| P | 인물 · 의상 | 추가 |
|---|---|---|
| P58 | SP (일어서 계단을 내려가는 등, 물병 + 빈 보자기) · H (앉은 채, 뒤 위쪽에서) | SP turnaround만 첨부 · 아래 가게 유리문 닫힘 |
| P59 | H (눈 극단 클로즈업) | 노을 주황이 한쪽 눈동자에, 눈물 없음 |
| P60 | SK SEOKGU_SHOP (작게, 열린 유리문 문간, 이쪽을 올려다봄) · H (전경 뒤통수·어깨, 백팩 없음) | 종이 아직 흔들림 · 가로등(선택, style-bible §11-2) |
| P61 | SK SEOKGU_SHOP (미디엄 클로즈업, 계단 위에서 내려다본 각도) | **SEOKGU_expressions ① "눈이 거의 감기는 다정한 미소, 고개 기울임"** — 늦게 굳는 미소·차가운 얼굴 금지 · 돋보기 목에 · 한 손 문틀 · 얼굴에 주황 없음(style-bible AG4) · 배경 작업등 + 뒷면 액자 |

**EP03에 나오지 않는 것:** HARIN_HOME · UJIN_OUT · INHO 전부(얼굴·손·목소리 없음) · MIJA_OUT · SEOKGU_OUT · TAK · PROP_BREAD_BAG · PROP_BLACK_PUFFER · 팔찌 두 개 모두.

**첨부 요약(prompt-smith):** 인물 얼굴 컷 = 그 인물의 `_turnaround` + `_expressions`(3인 이상은 2명까지) · P21·P22·P26 = `PROPS_keyprops`(봉투) · P13 = `MIJA_expressions` · P61 = `SEOKGU_turnaround` + `SEOKGU_expressions` · P31 = `SAEROM_turnaround` · SUPPLIER = §10 · 회상 = §10·§11 · P04 실루엣·P41/P42/P49/P60 원경 인물에는 해당 인물 `_expressions`를 붙이지 않는다(작게 그려야 하므로; P41·P42·P58 SP는 turnaround만).

## 13. 플래그 (EP03 · art-director)

| # | 내용 | 제안 |
|---|---|---|
| AG8 | SUPPLIER ↔ INHO 실루엣 혼동 위험(둘 다 마르고 굽음) | §9 구분표 + style-bible AG1. 핵심은 **늘 쓰는 모자 + 흰머리 + 회색 점퍼**. 회상 안쪽 인영은 얼굴·옷 식별 불가 |
| AG9 | HARIN_TEEN에 HARIN 카드 첨부 시 화상 자국·조끼 전이 위험 | P46만 `HARIN_turnaround` + 덮어쓰기 문장, P47(손)은 첨부 금지 |
| AG10 | 비트시트 F2: S3 하린 = 작업복(조끼 없음) | 그대로 승인(EP01 새벽 귀가 정본, A1). 조끼 덧입히기 하지 않음 · 빵 봉지 문구는 뺀다 |
| AG11 | SUPPLIER_YOUNG 카드 없음 | 2컷·회상 처리라 문장 차이로 충분. P46에 SUPPLIER_turnaround 첨부 시 흰머리가 옮겨질 수 있음 → 검수 기준: 모자 아래 머리가 회색이면 OK, 흰색이어도 회상 처리로 구분 불가하면 재그림 불필요 |
| AG12 | P61 표정 | SEOKGU_expressions 컷 ①만. ③④⑤(굳는 미소·차가운 얼굴)가 섞이면 재그림 — "아무것도 바뀌지 않은 미소"가 클리프행어의 전부 |
| AG13 | 신규 카드 2장(SUPPLIER) → 총 15장 | ref-sheet-artist가 `ref_prompts.md`에 append. EP01 카드 13장은 손대지 않는다 |
