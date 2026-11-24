# 캐릭터 시트: 「날개 달린 그림자」 (EP01~, 시리즈 자산)

- 작성: art-director · 2026-11-24 · 첫 작성 (Phase 4, Flow-by-hand mode, Khmer edition)
- 입력: `02_story/characters.md` §9(외형 토큰 블록 [고정]) · §10, `02_story/world.md` §9, `02_story/twist-plan.md` EP1 §2-6, `03_episode/ep01_script_final.md`(읽기만), `00_input/brief.md`(ruling M 등)
- 짝 문서: `04_visual/style-bible.md` (STYLE_CORE, NEGATIVE, REF_STYLE, REF_NEGATIVE, 장소·빛·그림자 문자열)
- **EP02 추가 (2026-11-24):** §10에 HOSTAGE 왼팔 W4, EP2 이름 없는 역할(의원 · 죽은 석궁수 · 간수 · 영주/표결 · 선왕 회상), EP2 소품(구리빛 비늘 · 볼모 처소의 표식 없는 문 · 감방 문 · 손등잔 · 자루), 새 레퍼런스 카드 판정(없음). §0–§9(EP1 내용)는 바꾸지 않았다.
- 원칙: 외형은 characters.md §9 그대로다. 여기서는 세 길이(FULL / PANEL / MIN)로 정리하고, 표정 코드와 레퍼런스 카드 사양을 더했다. 바꾼 낱말은 §9에 기록.
- **Flow 프롬프트에 인물 이름 금지** (ruling M). 영어 문자열은 역할 이름으로 시작한다: **QUEEN**(리네) · **HOSTAGE**(헤론) · **CHANCELLOR**(바실) · **ENVOY**(우르) · **CAPTAIN**(토라). 카드 파일 이름(LINE_, HERON_, BASIL_, UR_, THORA_)은 파일·문서에서만.

---

## 0. 쓰는 법

### 0-1. 토큰의 세 길이
| 길이 | 쓰는 곳 |
|---|---|
| **FULL** (identity + outfit) | 레퍼런스 카드 프롬프트, 그 인물이 크게 혼자 나오는 컷 |
| **PANEL** (약 50–60단어) | 패널 프롬프트의 기본 |
| **MIN** (약 25단어) | 세 사람 이상이 나오거나 250단어가 빠듯한 컷. **좌우 표지는 MIN에도 남는다** |

### 0-2. 불변과 가변
- **불변 (시즌 내내):** 얼굴, 머리색·머리 모양, 눈 색, 키·체형, 좌우 고정 표지(반지·흉터·브로치·흰 줄·팔찌).
- **EP1 고정 (하루 이야기):** 다섯 명 모두 **옷 한 벌.** 바뀌는 것은 HOSTAGE의 왼팔 상태(W0–W3)와 CHANCELLOR의 지팡이(B2만)뿐.
- **가변:** 표정(코드), 자세, 빛(style-bible §4). 표정과 빛은 토큰에 섞지 않고 따로 붙인다.

### 0-3. 좌우 고정 표지 (좌우 반전 이미지를 잡는 기준)
| 인물 | 표지 | 쪽 |
|---|---|---|
| QUEEN | 붉은 홍옥수 금반지 | **오른손 검지** |
| HOSTAGE | 곧은 옛 흉터 | **오른손 등** (검지 마디 → 손목) |
| HOSTAGE | 화살 상처 (P45부터) | **왼쪽 팔뚝** 바깥쪽 가운데 |
| CHANCELLOR | 반쯤 가려진 해 청동 브로치 | **오른쪽 어깨** |
| ENVOY | 옛 흉터 | **왼쪽** 관자놀이 → 뺨 |
| CAPTAIN | 흰 머리 한 줄 / 궁수 팔찌 / 짧은 칼 | **왼쪽** 관자놀이 / **왼쪽** 팔뚝 / **왼쪽** 허리 |
- 정면 그림에서는 인물의 왼쪽이 **화면 오른쪽**이다. 검수 때 헷갈리지 말 것.

### 0-4. 한 프레임에서 구별 (characters §9-8)
| 인물 | 키 | 실루엣 | 주색 |
|---|---|---|---|
| HOSTAGE | 190 (가장 큼) | 길고 곧은 숯빛 기둥, 묶지 않은 검은 머리, 장식 없음 | 숯빛 · 짙은 청동 · 금빛 눈 |
| ENVOY | 183 (굽어 약 178) | 조금 굽은 청동빛 긴 옷, 등 뒤 은백 땋은 머리 다발 | 짙은 청동 · 은백 |
| CHANCELLOR | 180 | 넓고 묵직한 흰 덩어리 위 진홍 망토, 턱수염 | 흰색 · 진홍 |
| CAPTAIN | 175 | 청동 상체 + 진홍 망토 + 짧은 머리 + 등의 장궁 | 청동 · 진홍 |
| QUEEN | 168 (가장 작음) | 바닥까지 끌리는 흰 기둥, 짙은 적갈색 머리, 이마의 금선 | 흰색 · 마호가니 · 금 |
- 혈육 표지: QUEEN과 CHANCELLOR는 같은 마호가니 머리와 곧고 짙은 눈썹. CHANCELLOR는 회색 관자놀이·턱수염·넓은 몸·47세 얼굴로 갈린다(남매처럼 보이면 재생성).
- 같은 금빛 눈 두 사람: HOSTAGE(검은 머리, 묶지 않음, 20대 얼굴) / ENVOY(은백 땋은 머리, 일흔 얼굴, 흉터).

---

## 1. QUEEN (리네) — 여주

- identity_tag: **QUEEN** · 파일 ID: `LINE`
- 24세, 즉위 7일째 여왕. 168cm. 상중 40일의 흰 상복.
- 색: 상복 흰색 `#F2EEE6` · 머리 마호가니 `#5A2A20` · 금 `#C9A045` · 반지 돌 `#9B2D1F`

### 1-1. FULL — identity
```
QUEEN: adult woman, 24, a young queen; medium height, slender but straight-backed and composed; fair skin with a warm undertone; oval face with a clear defined jaw and a slightly pointed chin; straight dark brows a shade darker than her hair; cool smoke-grey eyes, slightly upturned at the outer corners, level assessing gaze; straight nose; lips usually closed, the right corner lifting slightly when she is being dry; long straight dark mahogany-auburn hair, the top section drawn back from her face and coiled at the back of her head, the rest falling straight to mid-back; a thin plain gold circlet across her forehead with one small flat gold sun disc at the center of the brow
```

### 1-2. FULL — outfit (EP1 전 구간 한 벌)
```
long white mourning gown of matte linen-wool, high round neckline, long fitted sleeves that widen slightly at the wrist, floor-length full skirt with a short train spreading on the floor; a narrow plain gold-thread belt at the waist; soft white leather shoes; on her RIGHT index finger a heavy gold ring set with a flat round deep-red carnelian bearing one small plain raised circle; no other jewelry, no veil, no cloak
```

### 1-3. PANEL (약 60단어)
```
QUEEN: adult woman, 24, slender and straight-backed; fair warm skin; oval face with a defined jaw; straight dark brows; cool smoke-grey eyes slightly upturned; long straight dark mahogany-auburn hair, top section coiled at the back, the rest to mid-back; thin plain gold circlet with a small flat sun disc on the brow; long white matte mourning gown, high round neckline, long sleeves, floor-length skirt with a short train, narrow gold-thread belt; heavy gold ring with a flat deep-red carnelian on her RIGHT index finger
```

### 1-4. MIN (약 30단어)
```
QUEEN: young adult woman, dark mahogany-auburn half-up hair, smoke-grey eyes, thin gold circlet with a sun disc, high-necked white mourning gown with a gold-thread belt, red-stone gold ring on her RIGHT index finger
```

### 1-5. 손 (손 클로즈업 컷: P9, P10, P34, P36, P54, P56)
```
QUEEN_HANDS: slender hands, short clean unpainted nails, white sleeve ends at the wrist; a heavy gold ring with a flat round deep-red carnelian bearing one small plain raised circle on her RIGHT index finger; left hand bare
```
- 손 동작 사전 (섞지 않는다):
  - **생각:** 오른손 엄지로 검지의 반지를 돌린다 `her right thumb turning the ring on her right index finger`
  - **신호 (P36):** 오른손을 돌 탁자에 대고 검지를 들어 반지 돌로 **두 번** 두드린다 `her right hand resting on the white stone table, the index finger lifted to tap the carnelian ring stone on the table`
  - **구금 (P54):** 오른손을 들어 반지 면을 CAPTAIN 쪽으로 내보인다 `raising her right hand, the face of the carnelian ring turned toward the captain`
  - **거절 (P10):** 두 손을 허리 앞에 포갬, 오른손이 위(반지가 보이게)
  - **의식 끝 (P5–6):** 편 오른손을 해를 향해 든다(반지가 하늘을 배경으로)
  - **천 (P56):** 오른손으로 접은 흰 천을 팔 길이만큼 내민다. 손가락이 닿지 않는다

### 1-6. EP1 표정 범위 (코드 → EN)
| 코드 | EN | 대표 컷 |
|---|---|---|
| `QU_LEVEL` | `composed and level, calm assessing grey eyes, mouth closed` | 기본, P4, P6, P21 |
| `QU_DRY` | `a faint dry one-sided smile lifting only the right corner of her mouth, eyes cool` | P14, P18, P32, P53 (반어) |
| `QU_COLD` | `chin level, eyes hard and still, lips pressed, a ruler's face` | P10–P11, P37, P51, P54 (결정) |
| `QU_ALONE` | `shoulders lowered, eyes closed, a long breath out, the composure off` | 혼자인 순간 |
| `QU_STRUCK` | `utterly still, lips slightly parted, eyes wide, no tears` | P48, P50 |
| `QU_BARE` | `the irony gone, no smile at all, looking up, lips parted on a held breath, soft steady eyes` | P62–P64 |

### 1-7. 절대 바꾸지 않는 것
- 머리색 `dark mahogany-auburn`(밝은 빨강·평범한 갈색으로 흐르면 재생성), 반쯤 올린 머리 모양, 회색 눈, 금관, **오른손 검지의 반지**, 흰 상복(진홍·금 장식 추가 없음), 높은 목선.

---

## 2. HOSTAGE (헤론) — 남주, 용족의 왕 (EP1에서 이름 없음)

- identity_tag: **HOSTAGE** · 파일 ID: `HERON`
- 겉보기 20대 후반 남(실제 112세, 용족, 사람 모습). 190cm, QUEEN보다 머리 하나 큼.
- 색: 겉옷 숯빛 `#2E2C2B` · 허리띠 짙은 청동 `#8C6B3E` · 눈 금빛 `#D4A535` · 머리 `#121214` · 피부 `#B98A5E`
- **용족 표지는 금빛 눈과 세로 동공뿐.** 뿔·비늘·날개·꼬리 없음. **그림자를 만들지 않는다**(style-bible §9).

### 2-1. FULL — identity
```
HOSTAGE: adult man in his late twenties, a dragon-kin in human form; very tall, about a head taller than the queen, long-limbed with broad shoulders and a lean strong build, not bulky; warm light-brown skin with a golden undertone; long angular face, high cheekbones, straight nose, firm mouth, clean-shaven; dark straight heavy brows, deep-set eyes; matte metallic-gold irises that never glow, with vertical pupils (thin slits in bright sun, wide ovals in dim light); black hair, unbraided, collar-length, pushed back loosely with a few strands falling over his forehead; a thin pale straight old scar across the back of his RIGHT hand from the index knuckle to the wrist
```

### 2-2. FULL — outfit (EP1 전 구간 한 벌)
```
dark charcoal highland long coat of heavy wool reaching below the knee, wrapped closed across the chest with hidden ties, a tall wrapped high neckline up to the jaw, long sleeves to the wrist; a wide dark-bronze cloth sash knotted at his left hip; dark trousers; worn dark leather boots; no metal, no jewelry, no buckles, no weapons, no rings in his hair
```

### 2-3. PANEL (약 60단어)
```
HOSTAGE: very tall adult man in his late twenties, a head taller than the queen, lean broad-shouldered build; warm light-brown skin with a golden undertone; long angular face, high cheekbones, clean-shaven; matte metallic-gold eyes with vertical pupils, never glowing; unbraided collar-length black hair pushed back, a few strands on his forehead; dark charcoal knee-length wrapped wool coat with a tall high neckline to the jaw, wide dark-bronze cloth sash knotted at his left hip, dark trousers, worn boots; no metal or jewelry
```

### 2-4. MIN (약 30단어)
```
HOSTAGE: very tall man in his late twenties, warm light-brown skin, matte gold eyes, loose collar-length black hair, dark charcoal high-necked long coat, dark-bronze sash at his left hip
```

### 2-5. 손 (손만 나오는 컷 P2, P31, P56에서 그의 손임을 알린다)
```
HOSTAGE_HANDS: large long-fingered hands, warm light-brown skin, short plain nails, charcoal wool sleeve ends at the wrist; a thin pale straight old scar across the back of the RIGHT hand from the index knuckle to the wrist
```
- 손 동작 사전: P2 두 손바닥을 뜨거운 흰 돌에 편다(경배 아님, 의식 자세) / P31 **편 오른손**이 흰 돌 탁자 모서리에 놓이고 손바닥 아래로 돌에 금이 간다(주먹 아님) / P45 왼쪽 팔뚝을 그녀 가슴 앞에 가로로, 한 뼘 떨어져 / P56 **오른손**(흉터)으로 천을 받는다, 손가락이 닿지 않는다 / P62 오른손은 편 채 옆에. **EP1에서 주먹을 쥐지 않는다.**

### 2-6. 왼팔 상태 (W0–W3, 왼쪽 고정)
| 코드 | 패널 | EN |
|---|---|---|
| `W0` | P1–P44, **P49(회상)** | `both coat sleeves down to the wrist, unhurt` |
| `W1` | P45–P48, P50 | `an arrow driven through the outer middle of his LEFT forearm, the coat sleeve torn there; a few drops of thick metallic-gold blood, not glowing, on the white stone` |
| `W2` | P51–P57 | `his LEFT coat sleeve rolled up to the elbow, the arrow removed, his LEFT forearm being wrapped in clean white linen` |
| `W3` | P58–P64 | `his LEFT coat sleeve rolled up to the elbow, his LEFT forearm wrapped in a clean white linen cloth he tied himself, a faint dull-bronze stain on the cloth` |
- P49 리플레이는 정오의 과거이므로 **W0**(상처 없음). 놓치기 쉽다.
- 걷은 소매 아래로 보이는 것은 **왼쪽 팔뚝**까지. 오른쪽 소매는 늘 내려져 있다.

### 2-7. EP1 표정 범위
| 코드 | EN | 대표 컷 |
|---|---|---|
| `HO_STILL` | `still, level, unblinking gaze, mouth closed, reacting a beat late` | 기본, P5, P15–P17 |
| `HO_RESTRAINT` | `jaw set, face nearly still, gaze held level, breath controlled` | P31, P33, P39–P40 |
| `HO_PAIN_HELD` | `face almost still despite pain, brows drawn very slightly, eyes on her, not on the wound` | P45, P47, P56 |
| `HO_UNSEEN` | `when she cannot see him: composure dropped, eyes closed, breath held` | P20, P25 |
| `HO_RARE_SMILE` | `a small straight closed-mouth smile, never a smirk` | 드물게 (P24 무렵 선택) |
| `HO_WAIT` | `looking down at her from his height, lips closed, very still, waiting, wide oval pupils in lamplight` | P61–P64 |
- 동공: 정오·밝은 빛 = 가는 세로 틈 / 등잔·어둠 = 넓은 타원. 미디엄·와이드에서는 금빛 색이면 충분, 동공은 클로즈업(P5, P48 맞은편, P60, P64)에서만 확인한다.

### 2-8. 절대 바꾸지 않는 것
- 얼굴, 키(가장 큼), 무광 금빛 눈과 세로 동공(빛나면 재생성), 묶지 않은 검은 머리(머리 고리 없음), **오른손 등 흉터**, 턱까지 여민 숯빛 겉옷, 금속 없는 천 허리띠, **그림자 없음.**

### 2-9. HOSTAGE 금지 낱말과 장면 부정어 [잠금, characters §9-0-3 · §9-2]
- **프롬프트에 쓰지 않는 낱말:** chain, shackle, cuff, collar, bound, captive, prisoner, slave, leash. 대신: 소매 끝 `sleeve end`, 깃 `high neckline`, 감다 `wrapped`, 무릎 꿇다 `kneels of his own accord`.
- **장면 부정어 (HOSTAGE가 나오는 모든 패널, NEGATIVE 앞):**
```
No horns, scales, wings, tail, claws or fangs on him, no glowing eyes, no chains, shackles or collar, no ropes tied on him.
```
- 갈고리 밧줄이 함께 나오는 컷(P38, P43–P45, P51): 마지막 항목 `no ropes tied on him`을 빼고, 밧줄 위치를 `hooked on the south end of the parapet, far from him`으로 적는다.
- **P46·P61 판** (그림자의 관뿔과 충돌 방지): `No horns, scales, wings, tail, claws or fangs on any person, no glowing eyes, no chains, shackles or collar.`

---

## 3. CHANCELLOR (바실) — 숙부, 재상

- identity_tag: **CHANCELLOR** · 파일 ID: `BASIL`
- 47세, 180cm, 넓고 묵직함. 그녀의 추정 상속인. EP1 등장: B2(P6–P12), B5, B8(P52 이후).
- 색: 망토 진홍 `#9C1C1F` · 흰 상복 `#EDE8DE` · 청동 `#8C6B3E` · 머리 `#5A2A20` + 회색 `#8A8580`

### 3-1. FULL — identity
```
CHANCELLOR: man of 47, the chancellor and the queen's uncle; tall, broad and heavy-set with a slight paunch, upright posture; fair ruddy skin; broad face, thick neck; dark mahogany-auburn hair like the queen's, cut short and combed back, iron-grey at the temples; a short neatly trimmed beard of the same auburn heavily streaked with grey; straight dark brows like the queen's; heavy-lidded grey-brown eyes; a permanent pleasant half-smile that never reaches his eyes
```

### 3-2. FULL — outfit (EP1 전 구간 한 벌)
```
long white mourning robe with wide sleeves; a long crimson chancellor's cloak over both shoulders, fastened at his RIGHT shoulder with a round bronze brooch shaped as a half-hidden sun (a sun disc half sunk behind a straight line); no rings, no necklace, no gold
```
- **B2(P6–P12)에만:** `holding the regent's staff upright in his right hand: a tall staff of pale white wood topped with a bronze finial shaped as a half-hidden sun`. P10: 두 손으로 가로로 내민다. B5·B8에는 지팡이 없음.

### 3-3. PANEL (약 55단어)
```
CHANCELLOR: heavy-set man of 47, tall and broad with a slight paunch; fair ruddy skin; broad face; dark mahogany-auburn hair cut short and combed back, iron-grey temples; short trimmed auburn beard heavily streaked with grey; heavy-lidded grey-brown eyes, a pleasant half-smile that never reaches his eyes; long white mourning robe with wide sleeves, long crimson cloak fastened at his RIGHT shoulder with a round bronze half-hidden-sun brooch
```

### 3-4. MIN
```
CHANCELLOR: broad heavy-set man of 47, grey-streaked auburn beard, iron-grey temples, white mourning robe, crimson cloak with a bronze brooch at his RIGHT shoulder
```

### 3-5. 표정
| 코드 | EN |
|---|---|
| `CH_GENIAL` | `genial half-smile, eyes cold and appraising` |
| `CH_CONTEMPT` | `smile widening slightly, chin lifted, looking down his nose` |
| `CH_CAUGHT` | `smile frozen in place, a vein standing at his temple` (B8) |

- 절대 바꾸지 않는 것: 진홍 망토(궁정의 흰 옷 위 유일한 진홍 망토 — 근위대 망토는 갑옷 위), 오른쪽 어깨 브로치, 회색 섞인 턱수염, 반지·목걸이·금 없음. **직책 목걸이를 그리지 않는다**(프롬프트에 chain 낱말 금지).

---

## 4. ENVOY (우르) — 늙은 용족 사절

- identity_tag: **ENVOY** · 파일 ID: `UR`
- 겉보기 약 70세(실제 약 320, 용족, 사람 모습). 183cm, 조금 굽음. EP1 대사는 P47 "폐하." 하나. **몸짓이 복선이다.**
- 색: 겉옷 짙은 청동 `#8C6B3E` · 속옷 숯빛 `#2E2C2B` · 머리 은백 `#D9D6CF` · 고리 청동 `#A27C45`
- 다른 용족처럼 **보통 사람 모양의 그림자**를 드리운다(지우지 않는다).

### 4-1. FULL — identity
```
ENVOY: dragon-kin elder in human form, looks about 70; tall but slightly stooped, lean, large big-knuckled hands; deep brown weathered skin with deep lines; long face, hooked nose, clean-shaven; matte metallic-gold irises with vertical pupils, heavy lids, never glowing; an old pale scar running from his LEFT temple down across his left cheek; long silver-white hair in many thin braids gathered down his back, each braid end strung with several small plain bronze rings
```

### 4-2. FULL — outfit (EP1 전 구간 한 벌)
```
layered long robes: a charcoal under-robe and a dark-bronze outer robe with wide sleeves and a tall standing neckline, a plain dark sash, soft dark boots; no weapons; the bronze hair rings are his only metal
```

### 4-3. PANEL (약 55단어)
```
ENVOY: dragon-kin elder in human form, looks about 70, tall, lean, slightly stooped; deep brown weathered skin; long face, hooked nose; matte gold eyes with vertical pupils, heavy lids; old pale scar from his LEFT temple down his left cheek; long silver-white hair in many thin braids down his back, small plain bronze rings on the braid ends; charcoal under-robe, dark-bronze outer robe with wide sleeves and a tall standing neckline
```

### 4-4. MIN
```
ENVOY: stooped dragon-kin elder about 70, deep brown skin, matte gold eyes, scar on his LEFT cheek, silver-white braids with small bronze rings, dark-bronze layered robes
```

### 4-5. 몸짓 사전 [고정, twist-plan §2-6-4] — 주먹은 늘 **오른 주먹, 왼쪽 가슴(심장) 위, 손등이 앞**
| 패널 | EN |
|---|---|
| P15 | `stepping aside against a column to let the hostage pass first, eyes lowered` (그녀가 지나갈 때는 제자리에서 짧게 눈만 내린다) |
| P25 | `standing in the courtyard by the olive tree, right fist pressed over his heart, facing the hostage's window` |
| **P47** | `the old ENVOY kneels on one knee before the HOSTAGE, eyes lowered, right fist pressed over his heart, his back turned to the QUEEN` |
| P49 | `seen from behind inside the arch tunnel: four to six dragon-kin kneeling on one knee, braided hair with small bronze rings, the silver-white braids of the elder among them` |
- 표정: `EN_STILL` = `motionless weathered face, mouth closed, eyes lowered`.
- 절대 바꾸지 않는 것: 은백 땋은 머리와 청동 고리, **왼쪽** 얼굴 흉터, 청동·숯빛 겹옷, 무기 없음.

---

## 5. CAPTAIN (토라) — 근위대장 (여성)

- identity_tag: **CAPTAIN** · 파일 ID: `THORA`
- 41세 여성, 175cm, 어깨 넓고 단단함. 투구 없음(일반 근위병과 갈리는 표지). 삼각관계 신호 없음.
- 색: 흉갑 청동 `#A27C45` · 망토 진홍 `#9C1C1F` · 가죽 `#5C3D24` · 머리 `#3A2A20` + 흰 줄

### 5-1. FULL — identity
```
CAPTAIN: adult woman, 41, captain of the queen's guard; tall, broad-shouldered, strong and compact; deep tan brown skin; square face, fine lines at the eyes, a firm straight mouth; dark brown eyes with a direct gaze; short cropped dark-brown hair with one white streak at the LEFT temple; bareheaded
```

### 5-2. FULL — outfit (EP1 전 구간 한 벌)
```
bronze breastplate with a small plain embossed sun disc at the center, a skirt of dark leather straps over dark trousers, a knee-length crimson cloak; a brown leather archer's bracer on her LEFT forearm; a short sword at her left hip; a longbow slung across her back; dark boots
```

### 5-3. PANEL (약 60단어)
```
CAPTAIN: adult woman, 41, tall, broad-shouldered and strong; deep tan brown skin; square face, fine lines at the eyes, firm mouth; direct dark brown eyes; short cropped dark-brown hair with one white streak at the LEFT temple, bareheaded; bronze breastplate with a small plain sun disc, dark leather strap skirt, knee-length crimson cloak, brown leather archer's bracer on her LEFT forearm, short sword at her left hip, longbow across her back
```

### 5-4. MIN
```
CAPTAIN: strong bareheaded woman of 41, short dark hair with a white streak at the LEFT temple, bronze breastplate, crimson cloak, leather bracer on her LEFT forearm, longbow on her back
```

### 5-5. 몸짓 · 표정
- **사람의 손** [고정, twist-plan §2-6-5]: QUEEN에게 왕실 호칭을 말할 때(P37, P54) `open right palm pressed flat on her breastplate, a short nod`. 주먹 아님(주먹은 용족의 몸짓).
- 표정 `CA_FLAT` = `expressionless, steady eyes, mouth set`. P34 신호를 받을 때 `the smallest nod`.
- 절대 바꾸지 않는 것: 투구 없음, **왼쪽** 흰 머리 줄, **왼쪽** 팔뚝 궁수 팔찌, 청동 흉갑, 진홍 망토, 등의 장궁(근위 궁수의 장궁과 같은 형, 암살자의 석궁·굽은 활과 다름).

---

## 6. 레퍼런스 카드 사양 (ref-sheet-artist 지시서)

사용자가 Flow에서 **카드 하나하나를 손으로** 만든다. 그래서 수를 아꼈다: **필수 12장**이면 EP1을 만들 수 있고, **권장·선택 4장**은 시간이 있을 때만(대신 장면 앵커 패널을 쓴다).

### 6-0. 카드 목록 (= 만드는 순서)

| # | 카드 이름 (= 파일 이름) | 등급 | 비율 | 내용 한 줄 | 만들 때 첨부 | 주로 쓰는 패널 |
|---|---|---|---|---|---|---|
| 1 | `LINE_turnaround` | **필수** | 16:9 | QUEEN 전신 4방향, EP1 옷·금관·반지 | 없음 | QUEEN 전신·상반신 컷 전부 |
| 2 | `HERON_turnaround` | **필수** | 16:9 | HOSTAGE 전신 4방향, W0, 오른손 흉터 | 없음 | HOSTAGE 전신·상반신 컷 전부 |
| 3 | `LINE_expressions` | **필수** | 16:9 | 얼굴 6개(3×2): §1-6 코드 6개 | `LINE_turnaround` | 얼굴이 큰 컷 |
| 4 | `HERON_expressions` | **필수** | 16:9 | 얼굴 6개(3×2): §2-7 코드 6개 | `HERON_turnaround` | 얼굴이 큰 컷 |
| 5 | `LINE_hands` | **필수** | 16:9 | 손 4칸: 반지 고정(오른손 검지) | `LINE_turnaround` | P9, P10, P34, P36, P54, P56 |
| 6 | `HERON_hands` | **필수** | 16:9 | 손·팔 4칸: 흉터 + 왼팔 W1·W3 | `HERON_turnaround` | P2, P31, P45, P56, B9 |
| 7 | `BASIL_ref` | **필수** | 16:9 | 한 장 시트: 전신 3방향(1개는 지팡이) + 얼굴 2개 | `LINE_turnaround`(혈육 닮음 비교용) | B2, B5, B8 |
| 8 | `UR_ref` | **필수** | 16:9 | 한 장 시트: 전신 3방향 + **한쪽 무릎·주먹** 자세 + 얼굴 클로즈업 | 없음 | P15, P25, P47, P49 |
| 9 | `THORA_ref` | **필수** | 16:9 | 한 장 시트: 전신 3방향 + 손바닥을 흉갑에 + 얼굴 클로즈업 | 없음 | P34, P37, P41–P42, P46, P51–P54 |
| 10 | `WINGED_SHADOW_top` | **필수** | 1:1 | 위에서 본 날개 그림자, 흰 돌 위 | 없음 | P4, P6–P11 |
| 11 | `WINGED_SHADOW_side` | **필수** | 16:9 | 옆모습 날개 그림자, **머리는 프레임 밖** | `WINGED_SHADOW_top` | P13–P19, P29–P30 (P46 전) |
| 12 | `WINGED_SHADOW_crown` | **필수** | 16:9 | 옆모습 전체, **관뿔 노출** | `WINGED_SHADOW_side` | **P46**, B8, P61 (P46 이후만) |
| 13 | `LOC_TERRACE` | 권장 | 16:9 | 사람 없는 밤 테라스, 별빛 | 없음 | B6–B8 P37–P57 (19컷) |
| 14 | `LOC_ROOMS` | 권장 | 16:9 | 사람 없는 연결문(그의 쪽에서), 해 질 녘 | 없음 | B4 P21–P28, B9 P58–P64 |
| 15 | `PROP_HOOK` | 선택 | 1:1 | 구리빛 갈고리와 밧줄(난간 위) | 없음 | P38, P43, P51 (EP4 재등장) |
| 16 | `LOC_GATE` | 선택 | 9:16 | 사람 없는 정오의 문, 계단, 단상 | 없음 | P1–P12, P49 (대신: P1을 앵커로) |

- **카드 없음:** 이름 없는 역할(영주, 의원, 두 암살자, 근위·궁수, 하인, 신하, 사절단, 종지기). 등장이 적고 군중은 실루엣이라 토큰(§7) + 첫 등장 패널 앵커로 충분하다.
- 권장·선택 카드의 우선순위: `LOC_TERRACE` > `LOC_ROOMS` > `PROP_HOOK` > `LOC_GATE`. 장소 카드를 만들지 않은 장면은 style-bible §13-3-5의 앵커 패널을 쓴다.
- 조연은 각 **한 장**(턴어라운드 + 얼굴을 한 시트에). 표정 범위가 좁아 따로 표정 카드를 두지 않는다.

### 6-1. 모든 카드 공통 규칙
1. 프롬프트 = `REF_STYLE`(style-bible §1) → 카드 내용 → 인물 FULL 토큰(identity + outfit) → `REF_NEGATIVE`. 마지막 문장은 `Avoid: any text, labels, speech bubbles, watermark.` (그림자·장소·소품 카드는 REF_STYLE의 인물 문장 대신 §6-2의 문장)
2. **배경:** 밝은 따뜻한 회색 단색(그림자·장소 카드 제외). **빛:** 고르고 부드러운 중립광. 색보정·역광·극적 그림자 없음.
3. **글자 0:** 이름표, 칸 번호, 화살표, 치수선, 격자선, 말풍선, 서명 없음. 칸 사이는 여백으로만.
4. **같은 사람:** 한 카드 안의 모든 칸이 같은 얼굴·같은 옷·같은 키 비율. 다른 사람이 섞이면 버린다.
5. **좌우 표지가 보이게**(§0-3). 정면 칸에서 인물의 왼쪽이 화면 오른쪽.
6. **성인:** 앳된 얼굴이면 다른 앵커가 맞아도 버린다.
7. **변형 4장**을 만들어 가장 정확한 것을 고른다(가장 예쁜 것이 아니라).
8. 이름은 프롬프트에 쓰지 않는다(QUEEN, HOSTAGE …). HOSTAGE 카드에는 §2-9 금지 낱말을 쓰지 않고, 장면 부정어 문장을 REF_NEGATIVE 앞에 넣는다.
9. **HOSTAGE 카드(2, 4, 6)에서는 바닥 그림자를 그리지 않는다:** 단색 배경 위 떠 있는 듯한 도감 그림이면 된다(접지 그림자가 생겨도 카드는 통과. 패널의 그림자 규칙은 style-bible §9가 다룬다).
10. 저장: `_workspace/04_visual/refs/<카드 이름>.png` (시리즈 자산, EP2부터 재사용).

### 6-2. 카드별 내용

#### 카드 1 `LINE_turnaround` — 필수 · 16:9
- **배치:** 한 줄에 전신 4개: ① 정면 ② 3/4 정면 ③ 오른쪽 옆모습 ④ 뒷모습. 같은 크기, 옷자락 끝까지.
- **자세:** 똑바로 선 중립 자세, 팔을 몸에서 살짝 떼어 **손이 보이게**, 오른손은 손등이 보이게 돌려 반지가 보인다.
- **표정:** `QU_LEVEL`.
- **옷:** §1-2 전부. 뒷모습에서 **위쪽을 틀어 올린 머리 + 등 중간까지 내린 머리**, 옷자락의 짧은 끌림.
- **검수:** 네 칸 같은 얼굴 / 정면 칸에서 반지가 **화면 왼쪽 손**(그녀의 오른손) 검지 / 머리가 짙은 마호가니(빨강·갈색 아님) / 금관의 작은 해 원반이 이마 가운데 / 높은 둥근 목선 / 옷에 진홍·다른 금 장식 없음 / 성인 얼굴.

#### 카드 2 `HERON_turnaround` — 필수 · 16:9
- **배치:** 카드 1과 같은 4방향.
- **자세:** 똑바로 선 중립 자세, 손이 보이게. 오른손은 손등이 보이도록 살짝 돌려 **흉터**가 보인다.
- **표정:** `HO_STILL`.
- **옷 · 상태:** §2-2 전부, `W0`(두 소매 내림). 뒷모습에서 묶지 않은 목덜미 길이의 검은 머리(땋음·고리 없음).
- **검수:** 키가 크고 어깨 넓은 성인(우람하지 않음) / 정면 칸에서 흉터가 **화면 왼쪽 손**(그의 오른손) 등 / 눈이 무광 금빛, 빛나지 않음 / 턱까지 여민 높은 목선 / 허리띠 매듭이 **그의 왼쪽 허리**(정면 칸 화면 오른쪽) / 금속·버클·장신구 없음 / 뿔·비늘 없음.

#### 카드 3 `LINE_expressions` — 필수 · 16:9 · 첨부 `LINE_turnaround`
- **배치:** 머리와 어깨 6개, 3열 × 2줄. 높은 목선과 금관이 보이는 높이. 같은 빛.
- **윗줄:** ① `QU_LEVEL` 정면 ② `QU_DRY` 3/4 (오른쪽 입꼬리만) ③ `QU_COLD` 정면
- **아랫줄:** ④ `QU_STRUCK` 정면 가까이 ⑤ `QU_BARE` 3/4, 키 큰 사람을 올려다보는 눈 ⑥ `QU_ALONE` 3/4, 눈 감음
- 각 칸 EN은 §1-6 그대로.
- **검수:** 여섯 칸 같은 사람 / ②의 미소가 **오른쪽** 입꼬리 / ⑤에 반어가 전혀 없음(P63의 기준) / ④에 눈물 없음.

#### 카드 4 `HERON_expressions` — 필수 · 16:9 · 첨부 `HERON_turnaround`
- **배치:** 카드 3과 같은 3×2. 높은 목선까지.
- **윗줄:** ① `HO_STILL` 정면, 가는 세로 동공(밝은 빛 기준) ② `HO_RESTRAINT` 3/4 ③ `HO_PAIN_HELD` 3/4 (상처는 칸 밖, 얼굴만)
- **아랫줄:** ④ `HO_UNSEEN` 옆모습에 가까운 3/4, 눈 감음 ⑤ `HO_RARE_SMILE` 정면 ⑥ `HO_WAIT` 약간 내려다보는 높이의 클로즈업, **넓은 타원 동공**(어두운 빛의 기준. 이 칸만 배경을 조금 어둡게 해도 된다)
- **검수:** 여섯 칸 같은 사람 / 금빛 눈 무광 / ①의 동공은 가는 틈, ⑥은 넓은 타원 / ⑤가 비웃음(smirk)이 아님 / 머리 고리 없음.

#### 카드 5 `LINE_hands` — 필수 · 16:9 · 첨부 `LINE_turnaround`
- **배치:** 손 4칸, 한 줄, 밝은 따뜻한 회색 바탕.
- ① **오른손 등**, 손가락을 살짝 벌림, 흰 소매 끝. 검지의 반지: 손톱만 한 납작하고 둥근 짙은 붉은 홍옥수, 돌 위에 작은 민 돋을 원 하나, 묵직한 금 테.
- ② **반지 클로즈업** (돌의 면이 정면으로): 원 하나만, 글자·문양 없음.
- ③ **오른손 엄지가 검지의 반지를 돌리는 손**(생각 버릇).
- ④ **흰 돌 위에 오른손을 대고 검지를 든 손**(P36 신호 직전).
- **검수:** 반지는 늘 **오른손 검지** / 왼손은 맨손 / 돌의 색이 깃발 진홍과 같은 계열 / 손톱 칠 없음 / 돌 위 원에 글자 없음.

#### 카드 6 `HERON_hands` — 필수 · 16:9 · 첨부 `HERON_turnaround`
- **배치:** 4칸, 한 줄, 같은 바탕과 빛.
- ① **오른손 등**, 손가락을 살짝 벌림, 숯빛 소매 끝: 검지 마디에서 손목까지 **곧은 가는 흰 흉터 한 줄**.
- ② **두 손바닥을 편 채 아래로**(P2의 손, 위에서 본 각도), 흉터가 보이는 오른손.
- ③ **왼쪽 팔뚝 W1:** 소매가 찢어진 자리로 화살이 팔뚝 바깥쪽 가운데를 꿰뚫음, 금빛 피 몇 방울(무광 금속빛, 빛나지 않음). 손은 편 채.
- ④ **왼쪽 팔뚝 W3:** 팔꿈치까지 걷은 소매, 깨끗한 흰 리넨 천으로 감긴 팔뚝, 희미한 청동빛 얼룩 하나.
- **검수:** 흉터는 **오른손 등**에만 / 상처는 **왼쪽 팔뚝**에만 / 피가 적고 빛나지 않음, 고어 없음 / 주먹 없음 / 손목·팔에 띠·고리·밧줄 같은 것 없음(묶인 것처럼 보이면 버린다) / 피부색이 카드 2와 같음.

#### 카드 7 `BASIL_ref` — 필수 · 16:9 · 첨부 `LINE_turnaround`
- **배치:** 왼쪽에 전신 3개 ① 정면 ② 3/4, **오른손에 섭정의 지팡이를 세워 든** ③ 뒷모습(진홍 망토가 등을 덮음) / 오른쪽에 머리·어깨 2개 ④ `CH_GENIAL` ⑤ `CH_CAUGHT`.
- **옷:** §3-2. 지팡이는 ②에만.
- 프롬프트에 "같은 마호가니 머리와 곧은 짙은 눈썹, 그러나 다른 사람(47세, 회색 관자놀이, 턱수염, 넓은 얼굴)"을 적는다. 첨부는 혈육 닮음 비교용.
- **검수:** 브로치가 **그의 오른쪽 어깨**(정면 칸 화면 왼쪽) / 회색 섞인 턱수염 / 반지·목걸이·금 없음 / 리네의 남매처럼 젊어 보이지 않음 / 지팡이 꼭대기는 반쯤 가려진 해(글자 없음).

#### 카드 8 `UR_ref` — 필수 · 16:9
- **배치:** 왼쪽에 전신 3개 ① 정면 ② 3/4 ③ 뒷모습(땋은 머리 다발과 청동 고리가 또렷) / 오른쪽에 ④ **한쪽 무릎을 꿇고 눈을 내리고 오른 주먹을 왼쪽 가슴(심장) 위에, 손등이 앞**(P47 자세, 3/4 각도) ⑤ 얼굴 클로즈업 `EN_STILL`.
- **검수:** 흉터가 **그의 왼쪽** 관자놀이 → 뺨(정면 칸 화면 오른쪽) / 금빛 눈 무광, 세로 동공 / 주먹이 **오른** 주먹이고 **왼쪽 가슴** 위 / 무기 없음 / 일흔 얼굴, 조금 굽은 등.

#### 카드 9 `THORA_ref` — 필수 · 16:9
- **배치:** 왼쪽에 전신 3개 ① 정면 ② 3/4 ③ 뒷모습(장궁과 진홍 망토) / 오른쪽에 ④ **편 오른 손바닥을 흉갑에 대고 짧게 끄덕이는** 상반신 ⑤ 얼굴 클로즈업 `CA_FLAT`.
- **검수:** 투구 없음 / 흰 머리 줄이 **그녀의 왼쪽** 관자놀이 / 팔찌가 **왼쪽 팔뚝**, 칼이 **왼쪽 허리** / 흉갑의 해 원반에 글자 없음 / ④가 주먹이 아니라 **편 손바닥** / 분명한 41세 여성.

#### 카드 10 `WINGED_SHADOW_top` — 필수 · 1:1
- **사람 크기:** 흰 상복의 작은 여인 한 명(QUEEN MIN 토큰, 얼굴은 알아볼 필요 없음)이 사방 약 10m의 흰 돌 단 한가운데 청동빛 금 원반 위에 서 있다, 바로 위에서.
- **문장:** style-bible §8-3 `SHADOW_CORE` + `SHADOW_TOP` + LIGHT_NOON. 흰 옷자락이 바닥에 넓게 퍼지고 그 밑에서 그림자가 시작된다. 그녀 자신의 작은 사람 그림자가 가운데(용의 가슴 자리).
- **장면 부정어:** `No dragon body, no horns visible, no smoke, no glow.` 그 뒤 REF_NEGATIVE.
- **검수:** 날개 두 장이 단상 전체를 덮고 위쪽 계단까지 넘침 / **막 날개, 손가락 뼈 4개씩**(깃털 아님) / 머리는 계단 쪽 작은 점, 뿔이 읽히지 않음 / 납작한 거의 검은 면, 선명한 가장자리, 빛 없음 / 그녀의 작은 그림자가 따로 읽힘 / 용의 몸 없음.

#### 카드 11 `WINGED_SHADOW_side` — 필수 · 16:9 · 첨부 `WINGED_SHADOW_top`
- **사람 없음.** 낮은 옆빛을 받는 긴 회칠 벽과 연한 돌 바닥(LOC_CORRIDOR의 SHORT 표현, 기둥은 없어도 됨). 벽에 날개 그림자의 **옆모습**: 네 발, 긴 꼬리, 반쯤 편 막 날개, S자로 오르는 목은 **화면 위 가장자리 밖으로** 나가 머리가 보이지 않는다. 가슴 자리에 작은 여인의 그림자(긴 치마, 머리에 가는 관의 선).
- **문장:** `SHADOW_CORE` + `SHADOW_SIDE_HIDDEN`(beyond the frame edge) + LIGHT_AFTERNOON.
- **장면 부정어:** `No dragon body, no horns visible, no smoke, no glow.`
- **검수:** 머리·뿔이 화면 안에 없음 / 날개 모양·자세가 카드 10과 같은 동물로 읽힘 / 사람 없음 / 글자 없음.

#### 카드 12 `WINGED_SHADOW_crown` — 필수 · 16:9 · 첨부 `WINGED_SHADOW_side`
- **사람 없음.** 밤, 아래쪽 화면 밖 낮은 횃불 하나가 비추는 거대한 연한 절벽면(LOC_TERRACE 뒤 아케이드의 위쪽 벽 느낌). 그 위에 **옆모습 전체**: 카드 11과 같은 몸·날개, 그리고 S자 목 끝에 높이 든 머리, **머리 뒤를 왕관처럼 두른 짧은 뿔 고리.** 가슴 자리에 작은 여인의 그림자와 그 머리의 가는 관 선(두 왕관).
- **문장:** `SHADOW_CORE` + `SHADOW_CROWN` + LIGHT_TORCH.
- **장면 부정어:** `No dragon body, no smoke, no glow.`
- **검수:** 카드 11과 같은 실루엣에 머리만 더해졌는가 / 뿔 고리가 왕관 모양으로 읽힘(긴 뿔 두 개가 아님) / 그림자가 횃불에서 생긴 크기 / 빛·연기·눈 없음.
- **이 카드는 P46과 그 뒤 패널에만 첨부한다.** P46 전 패널에 붙이면 관뿔이 새어 나온다.

#### 카드 13 `LOC_TERRACE` — 권장 · 16:9
- **사람 없음.** style-bible §7-5 FULL + LIGHT_STARS. 테라스 안쪽에서 난간과 협곡 쪽을 보는 3/4 와이드, 뒤쪽 아케이드가 화면 한쪽에, 멀리 남서쪽 관문 실루엣. 갈고리는 **넣지 않는다**(P38 프롬프트가 더한다). 달 없음.
- **검수:** 그믐 별빛 / 아케이드 2층(아래 어두운 벽감, 위 열린 회랑) / 글자 없음.

#### 카드 14 `LOC_ROOMS` — 권장 · 16:9
- **사람 없음.** style-bible §7-3 FULL + LIGHT_DUSK. **그의 방 쪽에서** 연결문을 정면으로: 검은 쇠 상자 자물쇠와 꽂힌 열쇠, 쇠 띠 경첩, 반원 아치틀, 옆 벽감의 꺼진 등잔. 침대는 화면 밖.
- **검수:** 자물쇠가 이 쪽(그의 쪽)에만 / 글자 없음 / 침대 없음. (그녀 쪽의 떼어 낸 자국은 P22–P23 프롬프트가 다룬다.)

#### 카드 15 `PROP_HOOK` — 선택 · 1:1
- 흰 돌 난간 모서리에 걸린 **무광 구리빛 꼬인 갈고리**(꼬인 구리 마디 같은 형태, 세 갈래), 아래로 늘어진 밧줄. 밤 횃불빛. 사람 없음. 글자·문양 없음, 검은 쇠 아님.
- **검수:** 구리색(쇠·금 아님) / 문양·각인 없음.

#### 카드 16 `LOC_GATE` — 선택 · 9:16
- **사람 없음**(군중 실루엣만 아주 작게 허용). style-bible §7-1 FULL + LIGHT_NOON. 하늘 → 관문과 부조 → 캄캄한 아치 → 광장 → 흰 계단 → 단상의 세로 구도(P1과 같은 방향).
- **검수:** 부조는 해 원반과 두 막 날개뿐(사람 형상·글자 없음) / 아치 속이 캄캄 / 깃발은 흰 해 원반뿐.

---

## 7. 이름 없는 역할 토큰 (카드 없음, characters §9-6 그대로)

| ID | EN (프롬프트용) | 나오는 곳 |
|---|---|---|
| LORD_HORN | `a lord in his 50s, tall and big-bellied, shaved head, thick black beard streaked with grey, white mourning tunic with a bronze brooch shaped like a curved horn on his chest, heavy black boots with bronze toe-caps` | B5 P29–P32 |
| PHYSICIAN | `the court physician, a thin man in his 60s, bald on top with a white fringe, short white beard, white mourning robe under a plain grey sleeveless over-robe, a leather satchel, rolls of clean white linen` | B8 |
| ASSASSIN_1 | `a lean man in close-fitting dark grey clothes and a hood, lower face wrapped in dark cloth, aiming a crossbow` / unmasked: `a hollow-cheeked man in his 30s with cropped black hair and a crooked nose` | P40–P42, P55 |
| ASSASSIN_2 | `a lean figure in close-fitting sandstone-beige climbing clothes, head and face fully wrapped in the same cloth, eyes hidden in shadow, a short curved bow and a quiver` (**눈 금지**) | P43–P45 |
| GUARDS · ARCHERS | `royal guards in bronze breastplates with a small plain sun disc, open-faced bronze helmets, crimson cloaks, longbows or spears` | 전 구간 |
| SERVANTS | `household servants, men and women in plain white mourning tunics and white linen caps` | B3, B5 |
| COURTIERS | `courtiers, men and women in long white mourning clothes, small bronze brooches shaped as a half-hidden sun, a curved horn, or two parallel canyon lines` (금 장신구 없음) | B1–B2, B5 |
| DRAGON_DELEGATION | P3: `four to six low dark shapes at knee height deep inside the pitch-dark arch tunnel, barely distinguishable` / P49: §4-5 문장 | P3, P49 |
| BELL_KEEPER | `an old man in white mourning clothes holding a bronze mallet beside the bronze bell` | P2 |
| CROWD | `crowds as tiny silhouettes on terraces cut into the canyon walls` | B1 |

---

## 8. 고정 소품 (프롬프트 문장)

| 토큰 | EN | 나오는 곳 |
|---|---|---|
| PROP_RING | `a heavy gold ring set with a flat round deep-red carnelian the size of a fingernail, one small plain raised circle on the stone, no letters, on the queen's RIGHT index finger` | 전 구간 (카드 5) |
| PROP_CIRCLET | `a thin plain gold circlet with one small flat gold sun disc at the center of the brow` | 전 구간 |
| PROP_REGENT_STAFF | `a tall staff of pale white wood topped with a bronze finial shaped as a half-hidden sun` | **B2만** |
| PROP_KEY | `a plain black iron key with an oval bow` | B4, B9 (그의 쪽 자물쇠에 꽂힌 채) |
| PROP_CLEAN_CLOTH | `a folded clean white linen cloth held out at arm's length; their fingers do not touch` | P56, B9(그의 왼팔에 감긴 채) |
| PROP_HOOK | `a grappling hook of dull twisted copper hooked over the south end of the parapet, a rope hanging down into the canyon, no marks` | P38, P43, P51 |

---

## 9. 상류 문자열에서 바꾼 것

| 원문 (characters.md) | 여기서 | 이유 |
|---|---|---|
| §9-2 B9: "LEFT forearm **bound** in a clean white linen cloth" | "LEFT forearm **wrapped** in a clean white linen cloth" | §9-0-3 금지 낱말(bound) |
| §9-2 B8: "the physician wrapping the forearm" | "his LEFT forearm being wrapped in clean white linen" (W2) | 인물 문자열 안에 다른 인물(의원)을 넣지 않고 패널 프롬프트가 더하게 |
| §9-2 Avoid 추가 줄 | §2-9의 문장형 + P46·P61 판(`on any person`) | 그림자의 관뿔 문장과 충돌 방지 (style-bible §14-2) |
| §9-3 outfit "no chain of office" | "no gold" | 프롬프트에 chain 낱말을 남기지 않는다(world §9-3의 취지) |
| §9-1~§9-5 외형 | 그대로 | — |

---

## 10. EP02 추가 토큰 [EP2부터 시리즈 자산]

- 근거: brief ruling M · Z · AB · AC, `03_episode/ep02_beatsheet.md` §1-3 · P37–P47 · P43, `ep02_script_final.md`(읽기만), characters.md §9-6 · §10. 이름 있는 다섯 명의 토큰(§1–§5)은 **그대로** 쓴다(EP1과 같은 옷 한 벌, 상중 10일째).
- Flow 프롬프트에 이름 금지(ruling M). 의원과 간수는 EP2에서 이름 없음(ruling Z).

### 10-1. HOSTAGE 왼팔 상태 추가 (W3 → W4)

| 코드 | 패널 | EN |
|---|---|---|
| `W3` | **EP2 P01–P11** (제0일 한밤, EP1 P58–P64 그대로) | §2-6 그대로 |
| `W4` | **EP2 P13–P55** (제1일) | `both coat sleeves down to the wrist; the edge of a clean white linen wrap just visible above his LEFT wrist under the sleeve` |
- P27(그녀의 시선이 가는 컷)과 P10 · P39(의원의 눈)에서는 왼쪽 손목 위 흰 천 끝이 **보이게.** 오른쪽 손목에 천이 보이면 재생성(좌우 반전).
- EP2에서도 **주먹 없음**: P04 · P10 · P35 모두 편 손(§2-5).

### 10-2. EP2 이름 없는 역할 (카드 없음)

| ID | EN (프롬프트용) | 나오는 곳 | 메모 |
|---|---|---|---|
| PHYSICIAN | `the court physician, a thin man in his 60s, bald on top with a white fringe, short white beard, white mourning robe under a plain grey sleeveless over-robe, a leather satchel` | P39, P42, P45, P47(배경) | §7 문자열 그대로(EP1 P52 · P56의 같은 사람, ruling AC). EP2에는 리넨 두루마리를 빼고 **두 손을 모은 자세 / 가방 끈을 쥔 손**. 첨부: EP1 P52 또는 P56 확정 이미지 1장 |
| CROSSBOWMAN_DEAD | `a dead man in his 30s lying still on his back on a low stone bench as if asleep, eyes closed, hollow cheeks, cropped black hair, a crooked nose, close-fitting dark grey clothes with the hood down; no wound, no blood, no bruises; his hands open and empty; only his hair is wet, plastered to his forehead and temples, one drop of water at the edge of the bench` | P40, P41(머리 일부), P44(전경 흐림) | EP1 §7 ASSASSIN_1 벗겨진 얼굴 그대로(ruling AC). 첨부: **EP1 P55 확정 이미지**(얼굴 앵커). 끔찍하지 않게, 피부색은 그냥 창백한 정도 |
| JAILER | `a stocky middle-aged jailer in a plain undyed brown wool tunic and a wide leather belt, close-cropped grey hair, heavy shoulders, his face half in shadow, standing in the background beside a stool and a lamp` | P37, P45(복도 끝 실루엣) | **배경에만** [잠금, ruling AC]. 초점·클로즈업 없음. 짧은 회색 머리 + 무거운 어깨 + 갈색 민 튜닉이 이후 회차(B8 · EP7–8) 앵커가 된다. P45는 `a small dark silhouette of a stocky man beside a lamp at the far end of the passage` |
| LORDS | `two lines of court lords in long white mourning robes standing between the columns facing the center aisle, small bronze brooches shaped as a half-hidden sun, a curved horn, or two parallel canyon lines, faces simple and softly out of focus` | P13, P17, P21, P23, P26 | §7 COURTIERS의 영주판. 금 장신구 없음. 얼굴은 기준 없음(군중 규칙) |
| LORDS_VOTE | `several lords raising an open right hand palm forward at shoulder height, others hesitating with their hands still lowered` | P21, P23 | 표결 = **편 오른손**뿐. 주먹(용족 충성)과 헷갈리지 않게 "open … palm forward". 용지·나무패·기록 없음 |
| LORD_HORN | §7 문자열 그대로 | P17 (웃음을 참는 거구의 영주) | EP1 B5와 같은 사람 |
| GUARDS | §7 GUARDS · ARCHERS 그대로 | P12(등 돌린 근위 둘), P37 · P48 배경 | — |
| LATE_KING_MEMORY | `close-up of a still older man's RIGHT hand resting on a white linen pillow, fair ruddy skin with faint age lines, broad square fingers, a heavy gold ring with a flat round deep-red carnelian on his RIGHT index finger; beside it his wet grey hair, a few faded dark mahogany-auburn strands, plastered to the white pillow; his face out of frame` | **P43만**(회상 클로즈업) | 가족 닮음: 숙부와 같은 **흰 붉은기 피부 · 넓은 손**, 머리는 그녀 · 숙부와 같은 **마호가니가 바랜 회색**(50대 중반 [권장]). **얼굴 · 방은 그리지 않는다.** 빛 `LIGHT_MEMORY_DAWN`(style-bible §15-4) |
| QUEEN_HAND_MEMORY | `a young woman's slender RIGHT hand reaching in from the frame edge, short clean unpainted nails, no ring on any finger, fingertips touching the wet grey hair` | P43 | 같은 날 새벽의 그녀. **반지는 아직 아버지 손에** → 그녀 손은 맨손. 소매는 프레임 밖. P41(지금의 손, 반지)과 **같은 각도 · 같은 손 모양** 짝 컷(style-bible §5-4 매치 컷: P41을 첫 첨부) |

- 금지 낱말(§2-9)은 이 역할들에도 적용(특히 JAILER · CROSSBOWMAN_DEAD 문장에 chain · prisoner · captive 없음).
- 사슬 · 족쇄 · 창살이 Flow에 의해 생기면 그 패널의 재생성 프롬프트에만 장면 부정어를 더한다(style-bible §1).

### 10-3. EP2 소품 (프롬프트 문장)

| 토큰 | EN | 나오는 곳 |
|---|---|---|
| PROP_SCALE | `one single loose scale the size of the center of a palm, shield-shaped with one rounded end and one sharp point, slightly curved like a large reptile scale, matte reddish-copper colour with only its edge faintly brighter, smooth and completely plain, not glowing` | **P09** (토라의 편 오른 손바닥 위). 이후 다시 나오지 않는다(시신의 주먹은 비어 있다) |
| PROP_HOSTAGE_DOOR | `one old plain heavy dark oak door among the row, its wood darker and worn smooth at hand height, no bolt on its outer side, completely unmarked` | **P38** (그의 걸음이 늦어지는 문). 문 · 문틀 · 벽 어디에도 표식 · 긁힘 · 새김 없음 |
| PROP_CELL_DOOR | `a heavy dark oak door with a thick plain iron bolt on its outer side and a palm-sized sliding wooden shutter at eye level, plain unmarked wood and iron` | P39, P45, P47 |
| PROP_HAND_LAMP | `a small open clay oil lamp with a loop handle and a single small flame` | P06–P11(토라), P37–P47(그녀) |
| PROP_SACK | `a plain undyed hemp sack with no marks` | P12 (토라가 갈고리를 넣는다) |
| PROP_HOOK | §8 그대로. P12: `a grappling hook of dull twisted copper being unhooked from the south end of the parapet, its rope coiled, no marks` | P12 |
| PROP_SCRAPES | `bright fresh scrape marks on the pale stone at the south end of the parapet, no rope, no hook` | P36 |
| PROP_REGENT_STAFF | §8 그대로 | **EP2 P13–P25** (숙부의 손: P13 세워 듦, P18 두 손에 가로로) |
- 구리빛은 비늘과 갈고리에만. 비늘을 금 · 놋쇠 · 녹색 동록으로 그리면 재생성. 비늘에 무늬 · 새김 · 글자처럼 보이는 결이 생기면 재생성.

### 10-4. 새 레퍼런스 카드 판정: **없음**

- EP1 카드 12장(§6-0 #1–#12)으로 EP2를 만든다(ruling Z). 새 이름 있는 인물 없음, 옷 변화 없음.
- 이름 없는 역할은 EP1과 같은 방식: 토큰 + **패널 앵커**. 의원 = EP1 P52/P56 확정 이미지, 죽은 석궁수 = EP1 P55 확정 이미지, 간수 = 배경뿐이라 앵커 불필요(EP2 P37을 이후 회차 앵커로 보관).
- 새 장소 둘은 카드 대신 **장면 앵커 패널**: `LOC_THRONE` = P13, `LOC_CELLS` = P37(회랑) · P40(감방 안), 안뜰 = P48(style-bible §15).
- 비늘(P09)과 표식 없는 문(P38)은 각 한 컷뿐이라 카드가 필요 없다.
- 선택(시간이 있을 때만, 필수 아님): `LOC_THRONE` 빈 홀 카드(16:9, 사람 없음, `LIGHT_THRONE_MORNING`). 옥좌 홀이 EP3 · EP7–9에 다시 나오므로 이득이 있지만, P13이 잘 나오면 P13으로 대신한다.

---

## EP02 추가 (2026-11-24)

- 추가: §10 (HOSTAGE W4 · EP2 이름 없는 역할 9줄: PHYSICIAN · CROSSBOWMAN_DEAD · JAILER · LORDS · LORDS_VOTE · LORD_HORN · GUARDS · LATE_KING_MEMORY · QUEEN_HAND_MEMORY · EP2 소품 8줄 · 새 카드 판정), 머리말에 한 줄.
- 결정: 새 레퍼런스 카드 **없음**. P43 반지는 선왕 손에만, 젊은 그녀의 손은 맨손(비트시트 [권장]을 채택).
- §0–§9(EP1 내용)는 바꾸지 않았다.
