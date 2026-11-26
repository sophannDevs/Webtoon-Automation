# Character Sheets — 「두 번째 변론」 (story-9 `regression`) · EP01

- 작성: art-director · 2026-11-26 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 출처: `02_story/characters.md` §11(외형 토큰 v1 고정)·§12(EP01 카드 목록) · 리더 판정 N·O·Q·S·Z·AB·AD · `twist-plan.md` §0·§1(D1-a, D2, D8) ·
  `ep01_beatsheet.md` §0-1(의상 시계)·§2 · `world.md` §10·§14-3
- 짝 문서: `04_visual/style-bible.md`(GLOBAL STYLE TOKEN, 레지스터, LOC_*, PROP_*, FRAME-*, 빈자리 규약, Avoid 줄)
- **사용법 (prompt-smith):** 패널에 나오는 인물마다 ① `APPEARANCE`(불변, 글자 그대로) + ② 그 패널의 `OUTFIT` 문장 + ③ 표정·포즈(패널 고유)를 붙인다.
  레퍼런스 카드가 있으면 `attach:`에 넣고 "matching the attached reference image of <Name> (…key features…)"로 시작한다.
  **토큰 이름(`JINU28_SUIT` 등)은 프롬프트에 쓰지 않는다.** 손만 나오는 패널은 §3 HAND ID 문장을 쓴다.
- 공통 [characters §11-0]: 모든 인물은 Korean(동아시아) 현대인, 사실적 비율. **옷·가방·신발·모자에 글자·로고·숫자·명찰·휘장·자수 문구 없음.**
  **어떤 인물의 옷·소품에도 초록 계열 금지**(반지의 초록 돌만). **반지는 준서 한 명만**(결혼반지 포함 다른 모두 반지 0). 시계 문자판은 바늘만.

---

## 0. 한눈에 (identity_tag · 실루엣 · 키 · 식별 표식)

| tag | 이름 | 크메르어 | 나이 | 키 | 실루엣 한 줄 | 식별 표식 (늘 보이게 2개) |
|---|---|---|---|---|---|---|
| JINU28 | 서진우 (주인공, 두 번째 삶) | សឺ ជីនូ | 28 남 | 178 | 길고 마른 직선, 어깨가 남는 새 정장 | 오른쪽 턱 아래·귀 밑 작은 점 / 단추 소매 + 시계 없음·매끈한 손등 |
| JINU35 | 서진우 (첫 삶 끝) | សឺ ជីនូ | 35 남 | 178 | 날 선 직선, 열린 회색 코트 | 같은 점 / 왼손목 무광 은시계 + 관자놀이 흰머리 몇 가닥 |
| TAEHO | 조태호 (멘토 파트너) | ចូ តេហូ | 37 (콜드 오픈 44) 남 | 182 | 어깨 넓은 역삼각, 재킷 단추 풂 | 은색 사각 오닉스 커프스(37, 양 소매) / 넓은 웃음 + 남의 어깨에 얹힌 큰 손 |
| HANMOK | 여한목 (고문, 전직 판사) | យ៉ោ ហានម៉ុក | 71 남 | 168(굽어 165) | 작고 둥근 등, 지팡이 | 은색 둥근 손잡이 지팡이 / 가는 금테 둥근 안경 + 가슴 주머니 만년필 |
| DEOKBAE | 임덕배 (배달 기사) | អ៊ីម ដុកបែ | 54 남 | 169 | 마르고 단단, 고개 숙임 | 왼쪽 눈썹 끝 흰 흉터 / 오른손 손등 옅은 화상 자국 |
| SUA | 임수아 (기사의 딸) | អ៊ីម ស៊ូអា | 22 여 | 162 | 작고 곧은, 일자 앞머리 + 낮은 똥머리 | 일자 앞머리 + 낮은 똥머리 / 앞치마 왼쪽 가슴 검은 리본핀 (보조: 왼쪽 귓불 은색 귀걸이) |
| SANGDU | 기상두 '기 대표' (의뢰인) | គី សាំងឌូ | 56 남 | 172 | 굵은 목, 넓은 몸통 | 검게 염색한 올백 + 흰 뿌리 / 왼손목 묵직한 은시계 |
| MINJAE | 기민재 (의뢰인의 아들) | គី មីនជែ | 25 남 | 180 | 길고 흐느적, 오버핏 | 애쉬 브라운 웨이브 가운데 가르마 / **반지 없는 맨손 + 물어뜯은 손톱** |
| JUNSEO | 마준서 (고문의 외손자) — EP01 손·그림자만 | ម៉ា ជូនសឺ | 28 (그림자 35) 남 | 183 | 가장 큰 키, 긴 팔 | **오른손 가운뎃손가락 초록 돌 은반지** / 길고 깨끗한 손가락·다듬은 손톱 |
| BONGGU | 허봉구 (타워 야간 경비원) | ហឺ ប៉ុងគូ | 63 남 | 166 | 둥글고 낮은, 모자 | 무지 남색 챙 모자 / 목의 흰 수건 + 웃으면 보이는 금니 하나 |
| (무명) | 장갑 손 HAND_ANON_GLOVE | — | — | — | 손가락 셋 + 손바닥 아래 + 커프스만 | 검은 가죽 장갑 + 흰 셔츠 소매 끝 오닉스 커프스 (신원 표식 **없음**이 표식) |

- 키 순서(한 프레임 비교): 준서 183 > 태호 182 > 민재 180 > 진우 178 > 기 대표 172 > 덕배 169 > 한목 168(165처럼) > 봉구 166 > 수아 162.
- **커프스 규칙 [고정]:** EP01에서 커프스가 보이는 손 = 태호37 + 장갑 손(P07)뿐. 진우는 28·35 모두 **단추 소매**(그는 "가족"이 아니다 — 콜드 오픈 커프스가 그의 것일 수 없다). 고문은 카디건 소매 속(판정 Z: 손목 비노출). 준서는 EP01 커프스 0.

---

## 1. 얼굴로 나오는 인물 — 일관성 토큰

### 1-1. JINU · 서진우 (សឺ ជីនូ) — 주인공 (28 / 35)

두 시점은 **같은 사람**이다. 고정: 같은 눈 모양(가늘고 긴 홑꺼풀, 눈꼬리 살짝 처짐) · 같은 오른쪽 턱 아래 점 · 같은 코·입 · 같은 키. 바뀌는 것: 35세의 다크서클·미간 주름·수염 자국·관자놀이 흰머리·은시계·마른 핏줄. **28세가 35세보다 뺨이 더 마르다**(concept 지시).

**APPEARANCE — JINU28 (불변 · P11–P60의 모든 진우 패널에 그대로):**
```
Jinu, a 28-year-old Korean man, short natural black hair with a loose side part and a few strands falling onto his forehead, no hair product, long narrow single-eyelid dark brown eyes with slightly drooping outer corners and a low, lingering gaze, a lean oval face with thin hollow cheeks, a straight nose bridge, thin lips, clean-shaven, a small mole under the right side of his jaw just below the right ear, 178 cm tall with a long lean build, light medium skin, long slender fingers, smooth unmarked backs of the hands, no wristwatch, no ring, a blank expression with a firmly closed mouth.
```

**APPEARANCE — JINU35 (불변 · P02–P08):**
```
Jinu, a 35-year-old Korean man, short black hair combed into a side part but tousled by the wind, a few grey strands at the temples, long narrow single-eyelid dark brown eyes with slightly drooping outer corners, dark circles under the eyes, one vertical frown line between the brows, a lean face with a sharp jawline and faint stubble, a straight nose bridge, thin lips, a small mole under the right side of his jaw just below the right ear, 178 cm tall lean build with firmer shoulders, pale medium skin, long fingers with dry prominent veins on the backs of the hands, a matte silver wristwatch with a plain hands-only dial on his left wrist, no ring, an exhausted, sharp-edged expression.
```

- 표정 기본: 28 = 무표정, 굳게 다문 입, 감정은 턱 근육과 깜빡임 정지로 / 35 = 지치고 날 선 얼굴, P04에서 처음 원망.
- EP01 표정 범위(28): 숨을 들이켬·관자놀이 땀(P12) / 반사 속 낯섦(P13) / 눈을 내리깐 죄책(P19 기억) / 처음으로 똑바로 보는 결의(P21) / 조금 풀린 얼굴(P28) / 정중하고 차가운 무표정(P36·P40·P46·P57) / 깜빡임이 멈춘 눈 극단 클로즈업(P54·P60).
- 버릇(손 연기 표지): **엄지로 카드의 깨진 모서리를 누른다**(P16·P47·P54).
- 불변 금지: 쌍꺼풀 금지 · 점 위치(오른쪽 턱 아래) 고정 · **커프스 금지(단추 소매만)** · 28세에 시계·손등 상처·수염 금지 · 35세에 장갑 금지(맨손이 난간을 쥔다) · 반지 금지.
- HAND ID: 28 = 길고 마른 손가락, 매끈한 손등, 흰 단추 소매, 시계 없음 / 35 = 같은 손 + 마른 핏줄 + 왼손목 은시계 + (P06 이후) 서리에 베인 가는 자국(피 없음).
- 팔레트: 남색 `#26324A` · 셔츠 흰색 `#F2F2EE` · 차콜 `#3A3D42` / 35: 회색 코트 `#3F4247` · 차콜 정장 `#2E3035` · 시계 은색 `#A7ADB3`.

**OUTFITS — JINU**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| JINU35_WINTER | `wearing an open dark grey wool overcoat with no logo, a charcoal suit, a white shirt with plain buttoned cuffs and no cufflinks, a loosened navy tie, black shoes, no gloves` | P02–P08 |
| JINU28_SUIT | `wearing a new navy-blue suit whose shoulders are slightly too big for him, a crisp white shirt with plain buttoned cuffs and no cufflinks, a plain charcoal tie, black leather shoes` (+ 들고 있을 때: `carrying a plain matte black leather briefcase with no logo`) | P11–P23, P25–P26, P35–P46 (P19 기억판 동일) |
| JINU28_NIGHT | `wearing a white shirt with the sleeves rolled up to the elbows, plain buttoned cuffs, no tie, collar open, navy suit trousers, black shoes` | P27–P34 |
| JINU28_HOME | `wearing a plain grey short-sleeved T-shirt and black track pants, barefoot` | P47, P54 |
| JINU28_OUT_NIGHT | `wearing a navy suit jacket thrown on open over a plain grey short-sleeved T-shirt, black track pants, black sneakers` | P55–P58, P60 (장면 내 고정 — 판정 AD·Q9) |
| JINU30_FUNERAL (손만) | `a man's trembling hand in a black suit sleeve with a white shirt cuff with a plain button, no cufflink, no watch visible, no ring` | P59 (기억) |

### 1-2. TAEHO · 조태호 (ចូ តេហូ) — 멘토 파트너 (37 / 44)

**APPEARANCE — TAEHO37 (불변 · P26 이후 모든 태호 패널):**
```
Taeho, a 37-year-old Korean man, short neat black hair with the sides cut short and the top swept back, dark brown double-eyelid eyes with deep crow's-feet when he smiles, a square jaw, a broad forehead, even white teeth, healthy golf-tanned skin, 182 cm tall broad-shouldered inverted-triangle build with a thick chest, large thick hands, no ring, no wristwatch, a wide easy grin.
```
- **커프스는 APPEARANCE가 아니라 OUTFIT에 둔다**(사무실 의상에 늘 포함). 이유: 44세판(콜드 오픈)에서 손·소매를 **보여서는 안 되기** 때문.
- 표정 기본: 넓게 웃는 얼굴. 웃지 않을 때 눈이 의외로 작고 차갑다.
- **늦게 굳는 미소 [고정, P45–P46]:** 1/2 = 입은 아직 웃는데 눈가 주름이 먼저 펴진다 / 2/2 = 입꼬리가 굳는다. 2컷 분할.
- 연기 표지: 어소시에이트 자리로 **걸어와 서서** 어깨에 손을 얹는다. P35는 **크고 무겁게 움켜쥠**(두툼한 손 전체가 보임) — P07·P40의 "가볍게 얹힌 손"과 반대로.
- 불변 금지: 반지·시계 금지 · 머리 모양 고정 · 넥타이 금지(37) · **장갑 금지(어떤 시점·어떤 의상에도)**.
- HAND ID: 크고 두툼한 그을린 손, 소매 끝 오닉스 커프스.
- 팔레트: 차콜 `#34373C` · 셔츠 흰색 `#F4F4F1` · 커프스 은/오닉스 `#B8BCC2`/`#121212`.

**APPEARANCE — TAEHO44 (P05·P09 얼굴만):**
```
Taeho at 44, a Korean man: the same face as at 37 — short neat black hair with the sides cut short and the top swept back, dark brown double-eyelid eyes, a square jaw, a broad forehead, golf-tanned skin — now with grey strands at the temples, deeper crow's-feet and nasolabial lines, no smile, small cold eyes.
```
- P05: 웃음 없는 정면 응시, 차가운 압력. P09: 눈이 커지고 입이 벌어진다(죄책감으로도, 붙잡으려다 늦은 사람으로도 읽히게 — 악의도 구조 동작도 그리지 않는다).
- **TF-1 ④: 손·소매·어깨선은 프레임 밖.** 배경은 밤하늘과 입김뿐(위치 정보 0).

**OUTFITS — TAEHO**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| TAEHO37_OFFICE | `wearing a well-fitted lightweight charcoal suit with the jacket on and unbuttoned, a white shirt with French cuffs fastened by square silver-framed black onyx cufflinks, no tie, the top shirt button undone` | P29 (유리방 안, 작게·흐리게), P30, P35–P38, P41, P45–P46 |
| TAEHO44_WINTER | `wearing a dark navy wool overcoat over a charcoal suit, the white shirt collar just visible; only his face and the top of his coat collar are in the frame` | P05, P09 |
| (목소리만) | P26 폰 통화 — 그리지 않음 | P26 |

> **characters §11-11의 `TAEHO44_WINTER` "소매 끝 커프스가 코트 밖으로 보임 · 등에 닿는 손 = 커프스 노출 각도 고정"은 판정 S·Z로 대체됐다.**
> 콜드 오픈의 미는 손은 태호의 토큰이 아니라 §2-2 `HAND_ANON_GLOVE`다. 태호44 의상에는 커프스·장갑·손이 **없다**.

### 1-3. HANMOK · 여한목 (យ៉ោ ហានម៉ុក) — 고문, 전직 판사

**APPEARANCE (불변 · P39 얼굴, P24·P40 손):**
```
Hanmok, a 71-year-old Korean man, thick silver-white hair neatly combed back, gentle downturned eyes with smile lines that almost close when he smiles, thin gold round-rimmed glasses, a round soft face with white eyebrows and warm cheeks, 168 cm small slight build with a slightly bent back, small thin clean hands with age spots on the backs and neatly trimmed nails, no ring, no visible wristwatch, a kind gentle smile with his head tilted slightly.
```
- **악역 인상 금지 [고정, characters §3-6]:** 찡그림·날카로운 그림자·아래서 비추는 조명·의미 있는 시선 0. 다정한 어른으로만.
- 표정 기본: 다정한 미소, 고개를 살짝 기울임. EP01 범위: 처진 눈이 먼저 웃는 얼굴(P39) / 부드러운 질문의 얼굴. ("미소 그대로 멈춘 위협"은 EP01에서 쓰지 않는다.)
- 손 [고정]: 어깨에 **가볍게** 얹히지만 떨어지지 않는다(P40 = style-bible FRAME-HAND-ON-BACK).
- 불변 금지: 안경 모양(가는 금테 둥근) 고정 · **손목·커프스 노출 금지(EP01, 판정 Z/D2)** · 반지 금지 · 장갑 금지(EP01).
- HAND ID: 마르고 작은 손, 검버섯, 단정한 손톱, 회색 카디건 소매가 손목까지.
- 팔레트: 은회색 카디건 `#A3A6AA` · 셔츠 흰색 `#F3F1EC` · 지팡이 짙은 갈색 `#4A3324`.

**OUTFITS — HANMOK**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| HANMOK_OFFICE | `wearing a thin soft grey cardigan over a white shirt, the cardigan sleeves reaching down over the wrists and hiding the shirt cuffs completely, grey trousers, black shoes, holding a dark brown polished wooden walking cane with a small rounded plain silver knob handle in his left hand, the gold clip and black cap of a black lacquer fountain pen showing from the cardigan's left chest pocket` | P24 (손만, 기억), P39, P40 (손만) |
| HANMOK_CUFF | 카디건 소매를 걷어 오닉스 커프스가 보이는 변형 — **EP01 사용 금지**(twist-plan D2: 첫 노출 EP10/EP12) | — |

### 1-4. DEOKBAE · 임덕배 (អ៊ីម ដុកបែ) — 배달 기사

**APPEARANCE (불변):**
```
Deokbae, a 54-year-old Korean man, very short-cropped salt-and-pepper hair, thick dark bushy eyebrows with a small white scar splitting the outer end of his LEFT eyebrow, gentle drooping eyes, a sun-tanned angular face with three deep horizontal lines across the forehead and hollow cheeks, 169 cm lean wiry build with sinewy forearms and slightly hunched shoulders, deep bronze skin, rough knuckly hands with grease under the nails and a faint old burn mark on the back of his RIGHT hand, no ring, a humble head-bowed expression, looking up with only his eyes.
```
- 키 컷: **유리 너머 돌아보는 얼굴**(P17).
- EP01 표정 범위: 끌려가며 돌아봄(P17) / 유리에 몸을 기울이는 간절함(P19 기억) / 멈칫 돌아섬(P20) / 말없이 깊이 숙인 고개(P22) / 무릎 꿇은 채 고개 숙임(P52 기억, 작게).
- 불변 금지: 흉터 위치(왼쪽 눈썹 끝)·화상 위치(오른손 손등) 고정 · 반지·시계 금지.
- HAND ID: 거칠고 마디 굵은 손, 손톱 밑 기름때, 오른손 손등 화상 자국, 수의 소매.
- 팔레트: 수의 `#9DB0BE` · 구릿빛 피부 `#9C6B4A` · 배달 조끼 남색 `#2F3A52`.

**OUTFITS — DEOKBAE**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| DEOKBAE_INMATE | `wearing a pale blue-grey prison uniform top and trousers with a completely blank rectangular patch on the chest, grey rubber slippers` | P17–P22 (P19 기억판 동일) |
| DEOKBAE_DELIVERY | `wearing a grey short-sleeved T-shirt, a plain navy delivery vest with no logo, dark work trousers, his short hair pressed flat from a helmet` (+ P52: `his white delivery helmet with a scuff on its left side lying on the ground in front of him`) | P52 (기억, 앵커 A) |

### 1-5. SUA · 임수아 (អ៊ីម ស៊ូអា) — 기사의 딸

**APPEARANCE (불변 · P56–P58 현재):**
```
Sua, a 22-year-old Korean woman, black hair with straight blunt-cut bangs just above the eyebrows, shoulder-length hair tied in a low bun at the nape with a plain brown hair tie, dark brown single-eyelid eyes with slightly upturned outer corners and a steady unblinking gaze, a small slim oval face with a clear jawline, no makeup, level mouth corners, 162 cm slim straight-backed build, light warm skin, small quick hands with short nails, one small silver stud earring on her LEFT earlobe only, no ring, a blank, coolly polite expression.
```
- 표정 기본: 무표정, 차갑게 정중함, **눈을 먼저 피하지 않는다.** EP01은 웃지 않는다.
- **반전 보호 [🔒 EP1–5]:** 아는 눈빛·의미심장한 조명·눈물·회상 0. P56은 얼굴이 프레임 위쪽에서 잘리거나 김에 가린다.
- 불변 금지: 일자 앞머리 + 낮은 똥머리 고정 · 귀걸이는 왼쪽 하나만 · 앞치마는 **밝게**(검은 리본이 또렷해야 함; 이모의 짙은 갈색 앞치마와 구별) · 반지 금지.
- HAND ID: 작고 빠른 손, 짧은 손톱, 반팔·맨 손목.
- 팔레트: 앞치마 `#D8C29A` · 흰 티 `#F5F3EE` · 리본 검정 `#151515`.

**OUTFITS — SUA**
| code | 영문 문장 | EP01 패널 |
|---|---|---|
| SUA_WORK | `wearing a plain white short-sleeved T-shirt, a bright ochre-beige neck-strap apron with a small black ribbon pin on the LEFT side of the chest, dark jeans, black sneakers` (리본핀 문장은 style-bible PROP_RIBBON_PIN. P57: `the ribbon pin small and out of focus`) | P56–P58 |
| SUA_FUNERAL_MEMORY (가슴께만) | `the chest of a young woman in a black mourning jacket with a white blouse collar; the small black ribbon pin is being fixed on the lapel right beside the white collar; no face visible` | P59 (기억) |

### 1-6. SANGDU · 기상두 '기 대표' (គី សាំងឌូ) — 의뢰인

**APPEARANCE (불변):**
```
Sangdu, a 56-year-old Korean man, dyed jet-black hair slicked straight back with oil, white roots showing at the hairline and parting, small sharp eyes under heavy puffy eyelids, a wide fleshy face with three deep horizontal forehead wrinkles, a thick neck, 172 cm broad stocky torso, ruddy reddish skin, thick short-fingered hands, no ring, a heavy silver wristwatch with a plain hands-only dial on his left wrist, his chin raised in an arrogant expression.
```
- 표정: 턱을 든 거만함(P41) / 낮은 경고 "…민재야"(P44) / **두려움**: 눈이 커지기보다 얼굴색이 빠지고 입이 굳는다(P45) — 놀람 금지.
- 손 [P44 표지]: 아들의 크림 린넨 팔뚝을 쥐는 두툼한 손, 시계가 보인다.
- 팔레트: 남색 정장 `#1F2840` · 버건디 `#6A2430`(탁하게) · 시계 은색 `#9EA3A8`.

**OUTFIT — SANGDU_SUIT:** `wearing a dark navy suit, a white shirt and a plain muted burgundy tie` — P41, P44–P45.

### 1-7. MINJAE · 기민재 (គី មីនជែ) — 의뢰인의 아들

**APPEARANCE (불변):**
```
Minjae, a 25-year-old Korean man, ash-brown dyed wavy hair with a centre part, long enough to cover his ears, large dark double-eyelid eyes with a restless darting gaze, a handsome slim face, pale skin, a smirk that lifts only one corner of his mouth, 180 cm tall loose lanky build, a thin fine silver chain necklace, bare hands with no rings at all, badly bitten ragged fingernails with red raw fingertips and hangnails.
```
- **반전 복선 [고정]:** 손에는 **아무것도 없다**(반지 0). 은색 체인은 가늘게 — P44·P53에서는 **프레임 밖**(반지 은색과 혼동 금지).
- 표정: 한쪽 입꼬리 비웃음·다리 떨기·엎어 둔 폰 돌리기·손톱 물기(P41–42) / 발끈해 몸을 앞으로 숙이며 손가락질하는 득의양양함 → 말끝에서 굳기 시작(P43) / 비웃음이 굳고 눈만 아버지 쪽으로 미끄러짐.
- HAND ID: 길지만 물어뜯은 들쭉날쭉한 손톱, 붉은 손끝, 거스러미, 맨손, 걷은 린넨 소매.
- 팔레트: 크림 린넨 `#EDE4D3` · 베이지 `#C9B79C` · 애쉬 브라운 `#7A6A5C`.

**OUTFIT — MINJAE_CASUAL:** `wearing an oversized cream linen shirt with the sleeves half rolled up, beige slacks, brown loafers without socks` (+ 체인은 APPEARANCE에 포함, P44·P53은 프레임 밖) — P41–P44, P53.

### 1-8. BONGGU · 허봉구 (ហឺ ប៉ុងគូ) — 타워 야간 경비원

**APPEARANCE (불변 — 모자·수건 포함):**
```
Bonggu, a 63-year-old Korean man, short grey hair thinning on top under a plain navy peaked cap with no badge, small smiling eyes with drooping outer corners, a round face with saggy cheeks, one gold tooth beside the canine that shows when he laughs, 166 cm short round build with a belly, sunburnt reddish skin, a white towel draped around his neck, thick short fingers, no ring, a hearty laughing expression.
```
- 표정: 허허 웃는 얼굴(P28) / 평범한 안내 얼굴, 손전등(P27 — 의미 부여 0).
- 손: 두툼하고 짧은 손가락, 종이컵에 갈색 골판지 슬리브를 끼우는 손(PROP_CUP_SLEEVE).
- 불변 금지: 모자 휘장 0 · 안경 줄 금지(흰 수건으로 대체, 판정 Q/C-F6 — story-8 돋보기와 구별) · 반지 금지.
- 팔레트: 남색 근무복 `#2B3550` · 흰 수건 `#F1F0EB` · 골판지 갈색 `#A27A50`.

**OUTFIT — BONGGU_SUMMER:** `wearing a navy short-sleeved security guard uniform shirt with no badge and no name tag, dark grey trousers, black sneakers` (+ P27: `holding a plain black handheld flashlight`) — P27–P28.

---

## 2. 손·그림자·무명 인물

### 2-1. JUNSEO · 마준서 (ម៉ា ជូនសឺ) — EP01: 손 카드 + 그림자만 (얼굴 레퍼런스 없음)

**HAND APPEARANCE — JUNSEO28 (불변 · P50–P51):**
```
the right hand of a 28-year-old Korean man: long straight fingers with slender knuckles, clean neatly trimmed nails, fair skin, a thick matte silver ring set with one small deep green stone on the right middle finger, a white dress-shirt sleeve rolled up to mid-forearm, no cufflink, no wristwatch.
```
- 기록 컷 안에서는 녹회로 바래지만 **초록 돌만 채도 유지**(style-bible REG-RECORD).
- 손 구별 [고정]: 민재 손(물어뜯은 손톱·맨손)과 **반드시 다르게** — P50 ↔ P53 대비가 EP01 반전의 핵심.

**SHADOW — JUNSEO35 (P02):** `a long, thin dark shadow of a tall person in a long black coat standing in the gap of a half-open door, no face and no hands visible` — 레퍼런스 첨부 없음, 작게.
- 얼굴 토큰(characters §11-9)은 EP03 이후 공개 회차에 확정. EP01에서는 쓰지 않는다.

### 2-2. HAND_ANON_GLOVE — 콜드 오픈의 미는 손 [리더 판정 S·Z, TF-1] (glove variant)

**누구의 토큰도 아니다.** 이 손은 어떤 인물의 APPEARANCE·OUTFIT·레퍼런스 카드와도 연결하지 않는다.
- 태호의 토큰(37·44)에는 장갑을 **넣지 않는다**. 진우35는 맨손. 고문·준서의 EP01 토큰에도 장갑 0.
- 이 손의 주인은 twist-plan의 소관(EP10 각도 C)이다. 비주얼팀은 EP01에서 그 답을 그림에 싣지 않는다 — 그래서 손 크기·소매 색·체격 단서를 모두 지운다.

**HAND TOKEN (P07 전용, 글자 그대로):**
```
an unseen person's hand in a thin close-fitting black leather dress glove, plain with no logo and no buttons; between the glove's edge and the coat sleeve a strip of white shirt cuff fastened with a square silver-framed black onyx cufflink; the sleeve is a dark wool coat sleeve whose colour cannot be told apart between navy and charcoal in the blue night light, with no buttons and no visible texture; only three fingers, the lower part of the palm and the cufflink are visible, nothing else of the person.
```
- 구도는 style-bible §7 FRAME-HAND-ON-BACK(P40과 같은 진입 방향·손가락 모양·크기) + FRAME-CUFF(P36과 같은 커프스 각도·크기).
- **attach 없음.** 이름 없음. 손 전체·두 번째 손·얼굴·크기 기준물 0. 주먹·움켜쥠 0(가볍게 얹힘).

### 2-3. 단역 (카드 없음 · 토큰만)
| tag | 누구 | 영문 문장 | EP01 패널 |
|---|---|---|---|
| IMO | 분식집 이모 | `a middle-aged woman seen from behind or in side view, a grey short-sleeved T-shirt, a dark brown apron, a beige head scarf` (얼굴 정면 0) | P56 배경 |
| GUARD_OFFICER | 교도관 | `a correctional officer in a plain dark navy uniform with no badge or name tag, seen only as a sleeve, a hand or from behind` | P17, P20, P22 |
| POLICE | 경찰 | `police officers shown only as dark uniform sleeves and hands, no badges` | P52 |
| OLD_MAN | 폐지 줍는 할아버지 | `an elderly man seen only from behind in a faded grey jumper, pulling a hand cart` | P48 |
| ASSOCIATES | 어소시에이트들 | `office workers in plain dark suits standing up at their desks, small and out of focus in the background` | P39 |

---

## 3. HAND ID — 손만 나오는 컷의 신원 표 [characters §11-12 확정판]

| 인물 | 손 문장 (손만 나오는 패널에 사용) | 손목·소매 |
|---|---|---|
| 진우 28 | `long slender fingers, smooth unmarked skin` | `white shirt with a plain buttoned cuff, no wristwatch` |
| 진우 35 | `long fingers with dry prominent veins` (+ P06 이후 `a thin cut mark from the frost, no blood`) | `white buttoned cuff under a dark grey overcoat sleeve, matte silver wristwatch on the left wrist` |
| 진우 30 (기억) | `a trembling hand` | `black suit sleeve, white buttoned cuff, no watch visible` |
| 태호 37 | `large thick golf-tanned hand` | `white French cuff with a square onyx cufflink, charcoal suit sleeve` |
| 장갑 손 | §2-2 HAND TOKEN | §2-2 (익명) |
| 한목 | `a small thin clean hand with age spots on the back and neatly trimmed nails` | `soft grey cardigan sleeve reaching over the wrist, no cuff visible` |
| 덕배 | `a rough knuckly hand with grease under the nails and a faint old burn mark on the back` | `pale blue-grey prison uniform sleeve` |
| 수아 | `a small quick hand with short nails` | `short sleeve, bare wrist` |
| 기 대표 | `a thick short-fingered ruddy hand` | `navy suit sleeve, heavy silver wristwatch on the left wrist` |
| 민재 | `a long hand with badly bitten ragged nails, red raw fingertips and hangnails, no ring` | `cream linen sleeve half rolled up` |
| 준서 | §2-1 HAND APPEARANCE | `white shirt sleeve rolled to mid-forearm, no cufflink, no watch` |
| 봉구 | `a thick short-fingered sunburnt hand` | `navy short sleeve` |

---

## 4. EP01 의상 · 등장 · 레퍼런스 첨부 표 (P01–P60)

attach 약어: J28T/J28E = JINU28_turnaround/_expressions · J35 = JINU35_sheet · T37T/T37E = TAEHO37_turnaround/_expressions · T44 = TAEHO44_heads ·
HM = HANMOK_sheet · DB = DEOKBAE_sheet · SA = SUA_sheet · SD = SANGDU_sheet · MJ = MINJAE_sheet · BG = BONGGU_sheet · JSH = JUNSEO_hand · PR = PROPS_keyprops(승인 시).
원칙: 얼굴 패널 = 그 인물 카드(최대 2명분 — 3인 이상이면 주인공 쪽 2명까지). 손만 = turnaround/sheet 하나 또는 생략. 아주 작은 원경 = 첨부 없음.

| P | 장면·장소 | 인물 / 의상 | attach |
|---|---|---|---|
| 01 | ROOFTOP 커튼월 바깥 | 물건만(PROP_PEN Y7) | PR |
| 02 | ROOFTOP 각도 A | JINU35 `JINU35_WINTER`(등·오른쪽 옆) · JUNSEO35 그림자 | J35 |
| 03 | ROOFTOP | JINU35 옆얼굴 | J35 |
| 04 | ROOFTOP | JINU35 3/4 | J35 |
| 05 | ROOFTOP(밤하늘) | TAEHO44 `TAEHO44_WINTER` 얼굴만 | T44 |
| 06 | ROOFTOP | JINU35 손(맨손·은시계) | J35 |
| 07 | ROOFTOP | JINU35 코트 등 + **HAND_ANON_GLOVE** | **없음** |
| 08 | ROOFTOP | JINU35 손 | J35 |
| 09 | ROOFTOP(밤하늘) | TAEHO44 얼굴만 | T44 |
| 10 | BACK_ALLEY WINTER-DOWN | 없음 | — |
| 11 | DETENTION_VISIT | 없음(복도) | — |
| 12–13 | DETENTION_VISIT | JINU28 `JINU28_SUIT` 얼굴 / 유리 반사 | J28E (+J28T) |
| 14 | DETENTION_VISIT | JINU28 두 손 | J28T |
| 15 | DETENTION_VISIT | JINU28 전신(작게) | J28T |
| 16 | DETENTION_VISIT | JINU28 손 + PROP_CARD_REAL | PR |
| 17 | DETENTION_VISIT | DEOKBAE `DEOKBAE_INMATE` + 교도관 | DB |
| 18 | DETENTION_VISIT | JINU28 · DEOKBAE 유리 겹침 | J28E, DB |
| 19 | 기억(접견) | DEOKBAE · JINU28 수화기 | J28E, DB |
| 20 | DETENTION_VISIT | JINU28 · DEOKBAE · 교도관 | J28T, DB |
| 21 | DETENTION_VISIT | JINU28 · DEOKBAE 수화기 | J28E, DB |
| 22 | DETENTION_VISIT | DEOKBAE · 교도관 손 | DB |
| 23 | DETENTION_VISIT(선반 위 가방) | JINU28 손 + PROP_PEN_BOX + PEN NEW | PR |
| 24 | 기억(흐린 사무 층) | HANMOK 손 `HANMOK_OFFICE` · JINU28 받는 손 | HM |
| 25–26 | DETENTION_VISIT EXT_GATE | JINU28 `JINU28_SUIT` (+ 폰) | J28T, J28E |
| 27 | TOWER_FRONT_DOOR | JINU28 `JINU28_NIGHT`(뒷/옆) · BONGGU `BONGGU_SUMMER` | BG, J28T |
| 28 | BACK_ALLEY BOOTH | BONGGU · JINU28 | BG, J28E |
| 29 | FIRM_FLOOR 밤 | JINU28 · TAEHO37 `TAEHO37_OFFICE`(유리방 안 작게) | J28T |
| 30 | FIRM_FLOOR 유리방 문간 | JINU28 · TAEHO37 | J28T, T37E |
| 31–32 | HERO_ROOM | JINU28 손 + 카드·펜 | PR |
| 33 | HERO_ROOM | JINU28 `JINU28_NIGHT` 얼굴 | J28E |
| 34 | HERO_ROOM | JINU28 손 + 얼굴 아래쪽 | J28T |
| 35 | FIRM_FLOOR 아침 | JINU28 `JINU28_SUIT` · TAEHO37 | J28T, T37T |
| 36 | FIRM_FLOOR | JINU28 주먹 · TAEHO37 소매·커프스 | T37T |
| 37 | FIRM_FLOOR 유리방 | JINU28 손 · TAEHO37 손바닥 + PROP_CARD_FAKE | PR |
| 38 | FIRM_FLOOR 유리방 | TAEHO37 · JINU28(어깨 너머) | T37E |
| 39 | FIRM_FLOOR 복도 | HANMOK `HANMOK_OFFICE` · JINU28 · 어소시에이트 | HM, J28T |
| 40 | FIRM_FLOOR 복도 | JINU28 어깨 + HANMOK 손 | HM |
| 41 | FIRM_MEETING | SANGDU `SANGDU_SUIT` · MINJAE `MINJAE_CASUAL` · TAEHO37 · JINU28 | SD, MJ |
| 42 | FIRM_MEETING | MINJAE · JINU28(원경) | MJ |
| 43 | FIRM_MEETING | MINJAE · SANGDU(원경) | MJ |
| 44 | FIRM_MEETING | SANGDU 손 · MINJAE 팔뚝·맨손 | SD, MJ |
| 45 | FIRM_MEETING | SANGDU 얼굴 · TAEHO37 얼굴 | SD, T37E |
| 46 | FIRM_MEETING | TAEHO37 입가 · JINU28(흐린 전경, 펜 캡) | T37E |
| 47 | HERO_ROOM | JINU28 `JINU28_HOME` | J28E |
| 48–49 | 기록(SEDAN 전방) | 노인 등(P48) | — |
| 50–51 | 기록(SEDAN 실내) | JUNSEO28 손 | JSH |
| 52 | 기억(앵커 A) | DEOKBAE `DEOKBAE_DELIVERY` · 경찰 손 | DB |
| 53 | FIRM_MEETING | MINJAE 맨손 | MJ |
| 54 | HERO_ROOM | JINU28 눈 `JINU28_HOME` | J28E |
| 55 | BACK_ALLEY BEND-NIGHT | JINU28 `JINU28_OUT_NIGHT` 뒷모습(작게) | — |
| 56 | BUNSIK | SUA `SUA_WORK` 손 · IMO 배경 | SA |
| 57 | BUNSIK | JINU28 `JINU28_OUT_NIGHT` · SUA | J28E, SA |
| 58 | BUNSIK | SUA 손 + 앞치마 가슴(리본핀) · JINU28 받는 손 | SA (+PR) |
| 59 | 기억(장례식 클로즈업) | JINU30 손 `JINU30_FUNERAL` · SUA24 가슴께 `SUA_FUNERAL_MEMORY` | PR (SA 첨부 금지 — 앞치마가 섞인다) |
| 60 | BUNSIK | JINU28 눈 | J28E |

---

## 5. 레퍼런스 카드 사양 (ref-sheet-artist 지시서) — `refs/ref_prompts.md`

출력: `_workspace/04_visual/refs/<card>.png` · **aspect 16:9** · 무글자. 카드 이름 = 블록 제목 그대로.

**필수 13장 (얼굴 인물 12 + 손 카드 1)** — characters §12의 "9 + 손 카드"를 Flow 일관성 위해 주연 두 명(진우28·태호37)만 2장으로 나누고 태호44를 분리했다(플래그 F1).

| # | 카드 | 의상 | 내용 |
|---|---|---|---|
| 1 | `JINU28_turnaround` | JINU28_SUIT (가방 없이) | 전신 4포즈: 정면 · 3/4 · **오른쪽 측면**(오른쪽 턱 아래 점이 보이게) · 후면. 팔 자연스럽게 내려 **흰 단추 소매·시계 없는 손목** 보이게. 어깨가 살짝 남는 정장 |
| 2 | `JINU28_expressions` | JINU28_SUIT 어깨선까지 | 6컷: 무표정(굳게 다문 입) / 숨을 들이켠 얼굴(관자놀이 땀) / 눈을 내리깐 죄책 / 처음으로 똑바로 보는 결의 / 아주 조금 풀린 얼굴 / 눈 극단 클로즈업(홑꺼풀, 깜빡임 멈춤) |
| 3 | `JINU35_sheet` | JINU35_WINTER | 왼쪽 절반 전신 3포즈(정면 · 3/4 · 후면, 코트 열림, **장갑 없음**, 왼손목 은시계 보이게) / 오른쪽 절반 머리 3컷(정면 지친 얼굴 — **#2의 첫 컷과 같은 정면 각도**로 비교 가능하게 / 3/4 원망이 섞인 얼굴 / 오른쪽 옆얼굴 — 점, 관자놀이 흰머리) |
| 4 | `TAEHO37_turnaround` | TAEHO37_OFFICE | 전신 4포즈. 정면 포즈에서 손을 내려 **양 소매 끝 오닉스 커프스**가 보이게. 크고 두툼한 손. 재킷 단추 풂 |
| 5 | `TAEHO37_expressions` | TAEHO37_OFFICE 어깨선까지 | 6컷: 넓은 웃음(눈가 주름) / 고개 숙인 채 웃는 3/4(P30) / 웃지 않는 작고 차가운 눈 / **늦게 굳는 미소 1/2**(입은 웃고 눈가 주름 펴짐) / **2/2**(입꼬리 굳음) / 옆얼굴 |
| 6 | `TAEHO44_heads` | TAEHO44_WINTER (코트 깃까지만) | 머리-어깨 3컷: 정면 웃음 없는 차가운 응시 / 3/4 같은 표정 / 정면 극단 클로즈업 눈이 커지고 입이 벌어진 얼굴. **손·소매·장갑·커프스 0.** 관자놀이 흰머리, 깊어진 주름 |
| 7 | `HANMOK_sheet` | HANMOK_OFFICE | 왼쪽 전신 3포즈(정면 · 3/4 · 측면, **지팡이 왼손**, 살짝 굽은 등, 가슴 주머니 펜 클립) / 오른쪽 머리 2컷(처진 눈이 웃는 다정한 미소 · 고개 기울인 부드러운 질문) + **오른손 클로즈업 1컷**(손가락을 편 채 가볍게 얹은 손, 검버섯, 카디건 소매가 손목까지, 커프스 0). 악역 인상 0 |
| 8 | `DEOKBAE_sheet` | DEOKBAE_INMATE + DEOKBAE_DELIVERY | 수의 전신 정면 · 3/4 / 배달 차림 전신 정면(흰 헬멧을 손에, 왼쪽 긁힘 보이게) / 머리 2컷(고개 숙여 눈만 든 얼굴 · 어깨 너머 돌아보는 얼굴). **왼쪽 눈썹 끝 흉터 · 오른손 손등 화상**이 보이게. 가슴 패치 무지 |
| 9 | `SUA_sheet` | SUA_WORK | 전신 정면 · 3/4 · 후면(낮은 똥머리) / 머리 2컷(차갑게 정중한 정면 · 똑바로 보는 3/4) + **앞치마 왼쪽 가슴 리본핀 클로즈업 1컷**(은색 핀 끝 휨). 귀걸이 왼쪽만. 앞치마 밝게 |
| 10 | `SANGDU_sheet` | SANGDU_SUIT | 전신 정면 · 3/4 / 머리 2컷(턱을 든 거만함 · 얼굴색이 빠진 두려움). 왼손목 묵직한 은시계, 흰 뿌리 보이게 |
| 11 | `MINJAE_sheet` | MINJAE_CASUAL | 전신 정면 · 3/4 / 머리 2컷(한쪽 입꼬리 비웃음 · 굳어 버린 비웃음) + **맨손 클로즈업 1컷**(반지 0, 물어뜯은 손톱, 붉은 손끝). 가는 은색 체인 |
| 12 | `BONGGU_sheet` | BONGGU_SUMMER | 전신 정면 · 3/4 · 후면(남색 모자, 흰 수건) / 머리 2컷(금니 보이는 허허 웃음 · 평범한 안내 얼굴). 근무복 휘장·명찰 0 |
| 13 | `JUNSEO_hand` | JUNSEO28_RECORD | 손 카드만: 오른손 4컷 — 손등(운전대를 1시 방향에서 쥔 각도) / 손등 정면 평평하게 / 측면 / 손바닥이 카메라 쪽(손가락 안쪽에서 반지 테가 보임). 흰 셔츠 소매 팔뚝 중간까지 걷음, 커프스·시계 0. **얼굴·몸 0** |

**선택(권장) 1장 — 리더 승인 시 14번째:**
| 14 | `PROPS_keyprops` | — | 흰 배경 소품 도감(각 칸 확대, 축척 무관): ① 진짜 카드(깨진 오른쪽 위 모서리 + 흰 긁힘) 와 가짜 카드(같은 모서리, 긁힘 없음) 나란히 크게 ② 만년필 3개 나란히: 캡 끝 찍힘 / 흠 없음 / 펜촉 끝 살짝 휨 ③ 만년필 상자, 와인색 벨벳 받침을 들어 올려 아래 빈 공간 ④ 오닉스 커프스 ⑤ 초록 돌 은반지 ⑥ 리본핀(휜 핀 끝) ⑦ 무지 종이컵 / 손으로 자른 골판지 슬리브 컵 ⑧ 둥근 은색 손잡이 지팡이 ⑨ 검은 가죽 장갑 한 짝(손 없이 놓인 것). 문구는 style-bible §6 PROP 문장 그대로 |

**공통 조건 (모든 카드):**
- 순백 또는 연회색 단색 배경, 균일한 스튜디오 조명, 연출 색 없음(패널에서 변주할 여지). 레지스터 효과(겨울 청색·기억 탈색·기록 녹회) 0.
- 턴어라운드: 중립 자세, 무표정에 가까운 기본 표정, 같은 키·같은 비율로 나란히. 표정 칸: 같은 얼굴 크기 머리-어깨 컷 격자.
- 식별 표식과 좌/우를 프롬프트에 **명시**: 진우 점 = 오른쪽 턱 아래·귀 밑 / 진우35 시계 = 왼손목 / 덕배 흉터 = 왼쪽 눈썹 끝, 화상 = 오른손 손등 / 수아 귀걸이 = 왼쪽 귓불, 리본핀 = 앞치마 왼쪽 가슴 / 기 대표 시계 = 왼손목 / 준서 반지 = 오른손 가운뎃손가락 / 한목 지팡이 = 왼손.
- 스타일 = style-bible GLOBAL STYLE TOKEN의 화풍 그대로(semi-realistic Korean webtoon, clean thin line, restrained cel shading). 비율만 16:9.
- 마지막 줄: `Avoid: any text, labels, speech bubbles, watermark.` (이름표·화살표·숫자·색 견본 글자 0)
- **장갑을 어떤 인물 카드에도 그리지 않는다**(장갑은 PROPS_keyprops에 "손 없이 놓인 물건"으로만).

**확정 절차:** 사용자가 Flow로 만든 카드를 ref-sheet-artist가 "한 사람으로 일관"한지 확인 → `refs/INDEX.md`. art-director는 진우28 ↔ 진우35(같은 사람인가), 태호37 ↔ 태호44(같은 사람인가), 준서 손 ↔ 민재 손(확실히 다른가)을 우선 대조한다.

---

## 6. 금지 요약 (인물)

- 머리색·길이·눈매(홑/쌍꺼풀)·식별 표식 위치 변경 금지.
- **진우 커프스 금지**(단추 소매만) · 진우28 시계·손등 상처 금지 · 진우35 장갑 금지.
- **태호 장갑 금지**(모든 시점) · 태호44 손·소매 노출 금지(EP01) · 태호 넥타이 금지(37).
- **고문 손목·커프스 노출 금지(EP01)** · 고문 악역 인상 금지 · 고문 장갑 금지(EP01).
- **반지는 준서 손에만** · 민재 손에 반지·장신구 금지 · 민재 체인은 손 클로즈업에서 프레임 밖.
- **초록 옷·소품 금지**(전원). 회귀 금빛 옷 금지.
- 수아: 앞치마 어둡게 금지, 귀걸이 양쪽 금지, 아는 눈빛·회상 금지(EP01).
- 봉구: 안경 줄 금지, 휘장 금지.
- 준서 얼굴 금지(EP01). 장갑 손에 신원 단서(손 크기·소매 색·체격) 금지.
- 옷·모자·가방·신발에 로고·글자·숫자·명찰·번호 금지.

---

## Flags for the leader

| # | 플래그 | 요청 |
|---|---|---|
| F1 | **레퍼런스 카드 13장 + 선택 1장.** 판정 Q(C-F9)의 "9장 + 손 카드"보다 3장 많다: 진우28·태호37은 패널 수가 많아 turnaround/expressions 2장으로(Flow 스킬 기본), 태호44는 나이 섞임을 막으려 별도 머리 카드. **최소안(10장)**으로 줄이려면: #1+#2 → `JINU28_sheet`, #4+#5 → `TAEHO37_sheet`, #6 삭제(T44 대신 T37 카드 + 44세 문장만 — 나이 일관성 위험) | 13장 승인 또는 최소안 지시. `PROPS_keyprops` 추가 여부도 |
| F2 | **장갑 변형 처리:** 미는 손은 `HAND_ANON_GLOVE`(§2-2) — 어느 인물의 토큰·의상·카드와도 연결하지 않는다. 태호의 37·44 토큰 모두 장갑 0, 커프스는 APPEARANCE가 아닌 사무실 OUTFIT에만. P07은 attach 없음 | 확인 |
| F3 | **characters §11-11 `TAEHO44_WINTER`의 "커프스가 코트 소매 밖으로 보임 / 등에 닿는 손 = 커프스 노출 각도 고정" 문구는 판정 S·Z와 충돌해 대체했다**(태호44 = 얼굴만). characters.md 자체는 고치지 않았다 | 필요하면 character-designer가 한 줄 정정 |
| F4 | **`JINU28_OUT_NIGHT` 확정:** 회색 반팔 티 위에 남색 정장 재킷(열림) + 검은 트레이닝 바지 + 검은 운동화(판정 AD·Q9 권장안). P55–58·P60 장면 내 고정 | 확인 |
| F5 | 고문 지팡이는 **왼손**, P40 어깨에 얹는 손은 **오른손**(오른쪽 뒤에서 진입)으로 정했다. 가슴 주머니 펜 = 카디건 왼쪽 가슴 주머니 | 확인 |
| F6 | 봉구 APPEARANCE에 모자·흰 수건을 넣었다(EP01 유일 의상이고 둘 다 식별 표식). EP02 앵커 A에서 모자가 땅에 떨어지는 컷은 그 회차 OUTFIT에서 "cap on the ground"로 빼면 된다 | 확인 |
| F7 | P59 장례식 기억 컷에는 SUA_sheet를 첨부하지 않는다(Flow가 앞치마를 섞을 위험). PROPS_keyprops가 있으면 리본핀용으로 첨부, 없으면 문장만 | 확인 |
| F8 | 분식집 이모·교도관·경찰·노인·어소시에이트는 카드 없이 토큰 문장만(얼굴 정면 0) | — |
