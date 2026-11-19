# Character Sheets — 「맑은 날의 우산」 (작업 제목 「처마 밑 반반」)

- 작성: art-director · 2026-11-19 · v1 · 입력: characters §7(토큰 원문), world §1-2·§3·§7, `style-bible.md`
- **토큰은 characters §7 원문 그대로다. 한 글자도 바꾸지 않는다.** 바꿔 끼우는 것은 세 가지뿐이다: (1) Flow phrase 끝의 **표정 슬롯**, (2) 의상 치환구, (3) 젖음 상태구.
- 이미지에 글자 없음, 노랑 독점(#F6C400, 태오 계열만), 인물 의상에 청보라 없음 — style-bible §2·§9.
- 레퍼런스 경로는 카드가 확정되면 ref-sheet-artist가 `refs/INDEX.md`에 기록한다.

## 0. 좌/우 표식표 (LEFT/RIGHT = 인물 본인 기준)

| 인물 | 표식 | 본인 기준 | 카메라를 향한 정면 컷에서 |
|---|---|---|---|
| 태오 | 황동 시계 | LEFT 손목 | 화면 오른쪽 |
| 태오 | 나무 연필 | RIGHT 귀 뒤 | 화면 왼쪽 |
| 단비 | 빨간 딸기핀 | LEFT 귀 위 | 화면 오른쪽 |
| 단비 | 민트 머리끈 (손 컷) | RIGHT 손목 | 화면 왼쪽 |
| 옥자 | 열쇠 꾸러미 | RIGHT 허리 | 화면 왼쪽 |
| 만식 | 어묵 꼬치 | RIGHT 손 | 화면 왼쪽 |
| 보미 | 투명 비닐 우산 | LEFT 손 | 화면 오른쪽 |

프롬프트에는 두 기준을 함께 쓴다: `brass watch on his left wrist (on the viewer's right)`.

---

## 1. 문태오 — A, 우산 수선공

- **identity_tag:** `TAEO`
- **불변 토큰 (Flow phrase, 원문):**
  `Korean man, 25, tall lean, short straight black hair, brow-length fringe, narrow monolid dark-brown eyes, light tan skin, rolled-sleeve faded denim shirt, dark navy work apron, black rain boots, brass watch on left wrist, wooden pencil behind right ear, deadpan`
  - 마지막 단어 `deadpan`이 **표정 슬롯**이다. 표정이 다르면 이 한 단어만 아래 표의 슬롯으로 바꾼다.
- **한 줄 토큰 (원문):** `태오/25세 남/183cm 마른 장신/짧은 흑발 직모·눈썹 닿는 일자 앞머리/외꺼풀 가는 눈·짙은 갈색/웜 라이트탄/걷은 데님 셔츠+남색 캔버스 앞치마+차콜 바지+검은 장화/왼손목 황동 시계·오른귀 뒤 나무 연필/무표정`
- **보조구 (characters §7-1 국문을 EN으로, 필요할 때만 덧붙인다):**
  - 체형·속옷: `183 cm, back slightly stooped from repair work, white T-shirt under the shirt, charcoal straight trousers`
  - 시계 클로즈업: `round brass wristwatch, cream dial with plain bar markers and no numbers, brown leather strap`
  - 연필: `unpainted natural-wood carpenter's pencil`
  - 손 (B7 전용): `long fingers, short clean nails, light calluses, rolled denim cuffs, brass watch on his left wrist, edge of a navy apron at the frame edge`
- **식별 표식:** ① LEFT 손목의 황동 시계 ② RIGHT 귀 뒤의 나무 연필.

**표정 변주 (슬롯)**

| # | 슬롯 EN | 쓰임 |
|---|---|---|
| T1 | `deadpan` | 기본. 일자 입, 살짝 내리깐 눈꺼풀, '듣는 얼굴' |
| T2 | `deadpan, eyes down on his hands, focused` | 수선, 자로 재기 |
| T3 | `deadpan side glance at her hands and the umbrella handle, deliberately not looking up` | 시선 습관 = 공정한 단서(B2, B6) |
| T4 | `deadpan, one eyebrow raised a hair` | 그녀의 말을 그대로 인용할 때 |
| T5 | `deadpan, glancing at the brass watch on his left wrist` | 당황 신호. 시간은 읽지 않는다 |
| T6 | `slightly widened eyes, otherwise still` | 작은 놀람 |
| T7 | `soft look, eyes softened, mouth still flat` | 숫자 없는 말의 드문 순간 |
| T8 | `mouth closing, eyes turning away` | "…아뇨."로 대화를 닫을 때 |
| T9 | `calm, chin raised, looking straight up at the sky above her` | **B10 반전 컷 전용** |
| T10 | `deadpan, ear tips faintly pink` | **EP3부터.** EP1에서는 금지 |

- **의상:** O1 기본 = Flow phrase 그대로(EP1 낮, 밤, 아침 모두). O2 큰비 이동 = `+ unzipped dark navy hooded raincoat over his work clothes`(EP1 미사용).
- **젖음:** 우산을 씌워 줄 때 `his outer shoulder darkened by rain`.
- **금지 드리프트:** 갈색 머리·웨이브·긴 머리, 쌍꺼풀, 안경, 수염, 모자 / 시계가 오른손목으로 감, 숫자 문자판 / 노란 연필 / 노란 옷, 로고 / 앞치마 색 변경 / EP1의 활짝 웃음 / B10 전에 위를 보는 시선 / 단비보다 작아짐.
- **레퍼런스:** `refs/TAEO_turnaround.png`, `refs/TAEO_expressions.png`, `refs/LEADS_lineup.png`, `refs/HANDS_FIX_SEQUENCE.png`

---

## 2. 소단비 — B, 빙수 노점 주인

- **identity_tag:** `DANBI`
- **불변 토큰 (Flow phrase, 원문):**
  `Korean woman, 22, petite, fluffy shoulder-length chestnut-brown hair, top bun with mint scrunchie, wispy bangs, red strawberry clip above left ear, big round hazel eyes, fair rosy skin, mint denim pinafore dress, cream T-shirt, pale pink rain boots, eager smile`
  - 마지막 두 단어 `eager smile`이 **표정 슬롯**이다.
- **한 줄 토큰 (원문):** `단비/22세 여/158cm 작고 동글/어깨길이 밤색 웨이브·정수리 똥머리·시스루 앞머리/크고 둥근 쌍꺼풀 헤이즐 눈/밝은 피부·분홍 볼/크림 티+민트 데님 멜빵 원피스+연분홍 장화/민트 곱창 밴드·왼귀 위 빨간 딸기핀/애써 밝은 미소`
- **복장 2 치환구 (원문):** `mint denim pinafore dress, cream T-shirt` → `pink round-collar short-sleeve blouse, cream wide-leg trousers`
- **보조구 (EN):**
  - 체형: `158 cm, round face with soft full cheeks, knee-length A-line pinafore with two big front pockets, white ankle socks`
  - 손 (마지막 엄지 컷): `small hand, short unpainted nails, thin mint hair tie on her right wrist`
- **식별 표식:** ① 정수리 똥머리의 민트 곱창 밴드(항상) ② LEFT 귀 위의 빨간 딸기핀 ③ 손 컷에서 RIGHT 손목의 민트 머리끈.
- **감정 신호 순서 (characters §2):** 볼·귀 분홍(D5) → 우산 손잡이를 두 손으로 꽉 쥠(`gripping the umbrella handle with both hands`) → 구름.

**표정 변주 (슬롯)**

| # | 슬롯 EN | 쓰임 |
|---|---|---|
| D1 | `eager smile` | 기본. '애써 밝은 얼굴' |
| D2 | `flustered rambling, mouth open mid-sentence, eyebrows up, hands waving` | 묻지 않은 핑계 수다 |
| D3 | `wincing self-correction, eyes squeezed shut, one palm raised` | "아니, 그게 아니라…" |
| D4 | `trailing off, mouth half-open, eyes drifting aside, sheepish smile` | 말끝 흐림 |
| D5 | `cheeks and ear tips flushed pink, lips pressed together` | 감정 신호 1단계, 구름 직전 |
| D6 | `startled, big round eyes, shoulders up` | 놀람, B9 "…네?" |
| D7 | `delighted open smile, eyes curved into crescents` | 기쁨(빙수, 손님) |
| D8 | `mock-serious deadpan, chin tucked, lips pressed flat, half-lidded eyes` | 그의 말투 흉내. T1보다 과장된 정색 |
| D9 | `embarrassed laugh, waving one hand, eyes down` | 칭찬 손사래 |
| D10 | `quiet stunned look, lips parted, eyes glistening, no smile` | B8 지연 리액션(회차 최대 정적) |

- **의상:** O1 = 1일째(B1–B7). O2 = 2일째 아침(B8–B10), 글자 없이 '다음 날'을 알리는 장치다. 장화와 헤어는 같다.
- **젖음 (characters §7-2 국문을 EN으로):**
  - L1: `fringe slightly damp`
  - L2: `hair and shoulders damp`
  - L3–L4: `hair wet and darkened, flattened, strands stuck to her cheeks, top bun drooping, shoulders and top of her clothes darkened with water, a puddle only at her feet, dry ground around`
  - 구름이 걷혀도 그 씬 동안 젖음은 남는다.
- **금지 드리프트:** 검정·금발 머리, 앞머리나 똥머리가 사라짐, 곱창 밴드 색 변경 / 딸기핀이 오른쪽으로 감 / 노란 소품·노란 우비 / 청보라 옷 / 태오의 어깨보다 커짐 / 짙은 화장 / 15+ 밖의 신체 강조.
- **레퍼런스:** `refs/DANBI_wet_states.png`, `refs/DANBI_turnaround.png`, `refs/DANBI_expressions.png`, `refs/DANBI_day2_cloud.png`, `refs/LEADS_lineup.png`

---

## 3. 조연 (로맨스 라인 없음)

### 고옥자 — 상인회장 · `CHAIR_OKJA`
- Flow phrase (원문): `Korean woman, 63, short stout build, short tight salt-and-pepper perm, reading glasses pushed up on head with beaded chain, smiling crescent eyes, brick-red quilted vest, cream blouse, grey trousers, big ring of keys on right hip, broad warm grin` · 슬롯 = `broad warm grin`
- 한 줄 토큰 (원문): `옥자/63세 여/155cm 다부진 통통/짧은 뽀글 파마 흑회색/반달 눈/벽돌색 누빔 조끼+크림 블라우스/머리 위 돋보기+구슬줄·오른허리 열쇠 꾸러미/크게 웃음`
- 표정: 크게 웃음 / 연극적인 공정 선언(`raising one hand like a referee, mock-stern`) / 안경 찾기(`patting her pockets, puzzled, glasses still on her head`).
- 금지: 안경이 코 위로 내려옴(개그는 '머리 위에 있는데 찾는다'), 열쇠 꾸러미가 왼쪽으로 감, 노란 태그, 악역 같은 표정.

### 공만식 — 맞은편 어묵 노점 · `NEIGHBOR_MANSIK`
- Flow phrase (원문): `Korean man, 52, stocky with round belly, grey buzz-cut hair, droopy eyes, thick brows, ruddy tan cheeks, grey T-shirt, dark olive rubber apron, white towel around neck, Korean fish-cake skewer in right hand, black rain boots, amused grin` · 슬롯 = `amused grin`
- 한 줄 토큰 (원문): `만식/52세 남/170cm 둥근 배/회색 스포츠머리/처진 눈·굵은 눈썹/회색 티+올리브 고무 앞치마+검은 장화/목 흰 수건·오른손 어묵 꼬치/씩 웃음`
- 표정: 구경꾼의 씩 웃음 / 중계하듯 입 벌림(`calling out like a sports commentator`) / 냄비를 내려다보기.
- 금지: **위를 보는 시선**(그는 늘 김 나는 냄비를 본다), 꼬치가 왼손으로 감.

### 진보미 — 단골 꼬마 · `KID_BOMI` (EP1 선택)
- Flow phrase (원문): `Korean girl, 8, small, black bowl-cut bob with blunt bangs, big round black eyes, missing front tooth, red hooded raincoat, white rain boots, small clear plastic umbrella in left hand, curious wide-eyed face` · 슬롯 = `curious wide-eyed face`
- 한 줄 토큰 (원문): `보미/8세 여/125cm/검은 바가지 단발/크고 까만 눈·앞니 빠짐/빨간 후드 비옷+흰 장화/왼손 투명 비닐 우산/호기심 눈`
- 금지: 빨간 비옷이 노란 우산에 닿거나 겹침(style-bible §2), 우산이 오른손으로 감, 로고.

### 문덕수 (故) · `GRANDPA_DEOKSU` — 예약
- Flow phrase (원문, 회상 전용): `elderly Korean man, 78, thin, short white hair, grey herringbone flat cap, narrow monolid eyes, deep smile lines, beige work vest over white shirt, brass watch on left wrist, quiet gentle smile`
- **EP1에서는 렌더하지 않고 카드도 없다.** 사물(시계, 공구 롤, 낮은 의자, 고리)로만 나온다.

---

## 4. 투샷 실루엣 (characters §7-7)

태오는 어두운 세로 막대 + 노란 원, 단비는 밝고 둥근 덩어리 + 분홍 원이다. 단비의 정수리는 태오의 어깨 높이다. 머리 윤곽은 납작하고 단정(태오) 대 똥머리로 둥글(단비)이고, 몸은 직사각형(긴 앞치마) 대 A라인이다. 태오는 움직임이 적고, 단비는 손이 바쁘고 상체가 앞으로 쏠린다. 썸네일 크기에서도 이 대비가 남아야 한다.

---

## 5. 소품 토큰 (원문, 모두 글자 없음)

| 토큰 | Flow phrase (원문) |
|---|---|
| `PROP_YELLOW_UMBRELLA` | `large long umbrella, solid bright sunflower-yellow canopy, eight ribs, light natural-wood crook handle, black tip, no logo, no pattern` |
| `PROP_DANBI_UMBRELLA_BROKEN` | `medium umbrella, pastel strawberry-milk pink canopy, short white crook handle, one rib bent outward and wrapped in lumpy grey cloth tape, canopy sagging at that rib, no logo` |
| `PROP_DANBI_UMBRELLA_FIXED` | `same pastel pink umbrella, canopy taut and smooth, repaired rib straight, its joint wrapped in a thick band of many turns of bright yellow thread, small bright-yellow cap on that rib tip` |
| `PROP_YELLOW_THREAD` | `spool and strands of bright sunflower-yellow thread` |
| `PROP_TOOL_ROLL` | `unrolled faded khaki-olive canvas tool roll with brown leather ties, pockets holding pliers, small awl, spare silver umbrella ribs, black thread spools and one bright yellow spool` |
| `PROP_ICE_CART` | `small wooden push cart painted pastel mint with cream trim, folded strawberry-pink parasol, silver hand-crank ice shaver, glass bowls, jars of red strawberry syrup and red beans, blank cream board, no text` |
| `PROP_SHUTTER_KEYS` | `two identical small brass keys; one darker and worn on a brass ring with a blank dark-brown leather tab, one bright and new on a mint-green spiral coil wrist keychain with a tiny red strawberry charm` |
| `PROP_REPAIR_HOOK` | `old brass S-hook on a wooden rail at the back of the stall` |
| `PROP_GRANDPA_STOOL` | `low worn wooden stool with round seat polished by years of use` |
| `PROP_BENT_RIB` | `single bent silver umbrella rib with scraps of grey tape` |

**사용 규칙**
- **고리 위치 정정:** `PROP_REPAIR_HOOK`의 위치구 `on a wooden rail at the back of the stall`은 world §1-2와 충돌한다. characters §8이 걸이 위치를 world에 맡겼으므로 프롬프트에서는 위치구만 `hanging from the centre of the shutter box, about head height`로 바꾼다. 모양(old brass S-hook)은 그대로다. trend-brief의 '수선 걸이' = 이 가운데 고리다.
- **문제의 살은 언제나 카메라 쪽이다.** 이야기상 '왼쪽에서 세 번째 살'이고, 그림에서는 부러진 상태도 고친 상태도 같은 자리에 있다.
- **노란 실 서명:** 이음매에 8–10바퀴, 폭 약 2cm 띠, 그리고 살 끝 노란 캡. 미디엄 샷에서도 보여야 한다. 작게 그려 사라지면 REGEN.
- **구도 A 걸린 상태 (art-director 보조구, 우산 토큰 뒤에 붙인다):**
  - 부러진 상태: `folded loosely and hanging from the hook by its white crook handle, tip down, the taped bent rib bulging toward the camera at mid-height`
  - 고친 상태: `neatly furled and hanging from the same hook at the same angle, tip down, the straight repaired rib with its thick yellow-thread band facing the camera at mid-height, small yellow cap at that rib tip`
- **열쇠:** 모양과 홈은 똑같다(같은 권리). 구분은 고리뿐이다. 놋쇠는 `aged dull brass`로 쓰고 노랑과 경쟁하지 않게 한다. 각인과 숫자는 없다.
- **수선 레일 (world 보조, art-director):** `iron-pipe rail of repaired umbrellas, each tagged with a half-cut cloth ribbon in muted blue, green, lilac or white`. 리본에 노랑·빨강·주황은 쓰지 않는다.
- 노란 우산·실·캡·실패가 나오는 인서트에는 시럽 병, 딸기 참, 보미의 비옷을 함께 두지 않는다.

---

## 6. 레퍼런스 카드 명세 (ref-sheet-artist가 `refs/ref_prompts.md`로 옮긴다)

**공통 규칙**
- 카드 하나 = 이미지 하나. 출력은 `_workspace/04_visual/refs/<NAME>.png`이고, 블록 헤딩은 카드 이름 그대로다.
- 인물 카드: 단색 따뜻한 연회색 배경, 고른 부드러운 빛, 전신, 비 없음(01, 13 제외), 소품은 식별 표식만.
- 칸 구분은 여백으로만 한다. 라벨, 이름, 화살표, 색 코드는 없다. 마지막 줄은 `Avoid: any text, labels, speech bubbles, watermark.`
- **attach는 앞 번호 카드만, 3장 이하.** 붙일 때도 외형 키워드를 다 쓴다(`matching the attached reference image of Danbi (…)`).

| # | 카드 · 출력 | aspect | attach | 상태 |
|---|---|---|---|---|
| 01 | `DANBI_wet_states` (= REF_CLOUD) · `refs/DANBI_wet_states.png` | 16:9 | — | **필수 · 첫 렌더 테스트** |
| 02 | `DANBI_turnaround` · `refs/DANBI_turnaround.png` | 16:9 | 01 | 필수 |
| 03 | `TAEO_turnaround` · `refs/TAEO_turnaround.png` | 16:9 | — | 필수 |
| 04 | `PROP_UMBRELLAS` · `refs/PROP_UMBRELLAS.png` | 4:3 | — | 필수 |
| 05 | `LOC_EAVES_STALL_day` · `refs/LOC_EAVES_STALL_day.png` | 16:9 | — | 필수 |
| 06 | `LOC_PLAZA_ARCH` · `refs/LOC_PLAZA_ARCH.png` | 16:9 | 05 | 필수 |
| 07 | `DANBI_expressions` · `refs/DANBI_expressions.png` | 16:9 | 02 | 필수 |
| 08 | `TAEO_expressions` · `refs/TAEO_expressions.png` | 16:9 | 03 | 필수 |
| 09 | `LEADS_lineup` · `refs/LEADS_lineup.png` | 16:9 | 02, 03, 04 | 필수 |
| 10 | `PROP_KEYS_AND_HOOK` · `refs/PROP_KEYS_AND_HOOK.png` | 1:1 | 05 | 필수 |
| 11 | `HANDS_FIX_SEQUENCE` · `refs/HANDS_FIX_SEQUENCE.png` | 16:9 | 03, 04, 02 | 필수 |
| 12 | `LOC_EAVES_STALL_night_compA` · `refs/LOC_EAVES_STALL_night_compA.png` | 1:1 | 05, 04, 10 | 필수 |
| 13 | `DANBI_day2_cloud` · `refs/DANBI_day2_cloud.png` | 16:9 | 01, 04, 05 | 필수 |
| 14 | `CAST_OKJA_MANSIK_BOMI` · `refs/CAST_OKJA_MANSIK_BOMI.png` | 16:9 | — | 필수 |
| 15 | `LOC_HYDRANGEA_ALLEY` · `refs/LOC_HYDRANGEA_ALLEY.png` | 9:16 | 06 | 권장 |
| 16 | `LOC_ASSOC_OFFICE` · `refs/LOC_ASSOC_OFFICE.png` | 16:9 | 05, 06 | 권장 |

**01 DANBI_wet_states (= REF_CLOUD)**
- 내용: 같은 단비의 전신 3칸, 같은 3/4 자세(화면 왼쪽으로 살짝 돌아 LEFT 귀의 딸기핀이 보이게), 복장 1, 우산 없음. 배경은 맑은 파란 하늘과 마른 연회색 보도뿐(`W_BREAK`). ① 마름, 구름 없음, D1 ② `CLOUD_BASE` + L1, 앞머리 촉촉, D6 ③ `CLOUD_BASE` + L3, L3–L4 젖음 전체, 발밑 웅덩이, 주변 보도는 마름, D2.
- 왜: 시리즈의 전제(맑은 날 그녀에게만 내리는 비)를 Flow가 그리는지 **가장 먼저** 확인한다(trend-brief §8-2, world §3-7). ①칸이 단비의 첫 외형 기준이 된다. EP1의 P2, B2, B5, B8–B10.
- 판정: style-bible §7의 실패 처방으로 3회까지 다시 그린다. 그래도 실패하면 다른 카드로 가기 전에 리더에게 알린다.

**02 DANBI_turnaround** — 전신 4방향(정면 / 3/4 / LEFT 옆모습 / 뒷모습), 복장 1, D1, 마름. 뒷모습에 똥머리와 민트 곱창 밴드, 옆모습에 딸기핀. 왜: 단비가 나오는 모든 패널의 기준.

**03 TAEO_turnaround** — 전신 4방향(정면 / 3/4 / RIGHT 옆모습 / 뒷모습), O1, T1. 정면에서 LEFT 손목 시계가 화면 오른쪽, RIGHT 옆모습에서 귀 뒤 연필. 노랑은 없다. 왜: 태오의 기준. 01·02를 붙이지 않는 이유는 얼굴이 섞이지 않게 하려는 것이다.

**04 PROP_UMBRELLAS** — 사람 없는 2×2: ① 노란 우산 펼침 ② 분홍 우산 부러짐(테이프 살이 카메라 쪽, 캔버스 처짐) ③ 같은 우산 수선 후(팽팽함, 노란 실 띠, 노란 캡) ④ 이음매 클로즈업: 노란 실 8–10바퀴. 왜: P3 부러짐, P5–6 노란 우산, 구도 A, 엔딩 엄지. 노란 실이 작아서 사라지는 위험(§8-2)을 먼저 막는다.

**05 LOC_EAVES_STALL_day** — FRONT, 눈높이, `W_BREAK` 한낮, 사람 없음, 셔터 UP. 양쪽 반의 보조구 전부, 가운데 고리, 열쇠 구멍, 테이프 선 있음(B5 이후 상태), 레일 우산 3–4개(색 리본). 간판은 없다. 왜: EP1 주 무대. 패널 대부분의 배경 기준.

**06 LOC_PLAZA_ARCH** — FACADE 와이드, `W_BREAK` 한낮, 사람 없음. 아치와 줄무늬 차양(왼쪽), 2층 사무실 창, 처마칸(오른쪽, 05와 같은 모습), 골목 입구의 청보라 수국, 플라타너스, 보도블록, 배수구, 전깃줄. 아치 위 판은 빈 판이거나 잘린다. 왜: P1 콜드 오픈과 캡처 컷의 공간 관계.

**07 DANBI_expressions** — 가슴 위 클로즈업 2×4, O1: D1 D2 D3 D4 D5 D6 D8 D10. 왜: 대사 위주 회차의 리액션. 그녀의 말투(핑계, 정정, 흐림)를 얼굴이 운반한다.

**08 TAEO_expressions** — 2×4: T1 T2 T3 T4 T5 T6 T7 T9. 왜: 무표정 안의 작은 차이가 그의 연기 전부다. T3(위를 보지 않음)과 T9(올려다봄)이 반전의 쌍이다.

**09 LEADS_lineup** — 두 칸, FRONT 규약(태오 왼쪽, 단비 오른쪽), 마른 보도, 구름 없음. ① 나란히 선 전신: 그녀의 정수리가 그의 어깨 높이, 그는 접은 노란 우산, 그녀는 부러진 분홍 우산 ② 그가 펼친 노란 우산을 그녀 머리 위로 들고 있다(캡처 컷 자세), T1 / D6. 왜: EP1에서 투샷이 가장 많다. 이 한 장으로 두 사람을 첨부해 슬롯을 아끼고, 키 비율과 실루엣을 고정한다.

**10 PROP_KEYS_AND_HOOK** — 무지 바탕: 똑같은 열쇠 두 개 나란히(고리만 다름), 놋쇠 S자 고리, 셔터 아래쪽의 열쇠 구멍 하나 클로즈업. 각인과 숫자는 없다. 왜: B4 열쇠 두 개(닿을 뻔), 구도 A의 고리.

**11 HANDS_FIX_SEQUENCE** — 4칸. ①–③ 밤, 백열등 아래 짙은 작업대에서 태오의 손(손 토큰): 펜치로 휜 살 빼기 / 새 은색 살 끼우기 / 노란 실 감기. 옆에 펼친 공구 롤. ④ 부드러운 낮빛, 단비의 작은 손, 엄지가 노란 실 띠 위에, RIGHT 손목에 민트 머리끈. 왜: B7 무대사 손 컷 6–7장과 마지막 엄지 컷. 손만 나오는 컷에서는 시계와 머리끈이 유일한 신원 표시다.

**12 LOC_EAVES_STALL_night_compA** — 같은 COMP_A 프레임 두 칸(각 칸은 세로로 길게): 셔터 DOWN, 밤, 작업대 위 전구의 따뜻한 원, 고리는 빛의 가장자리. 왼쪽 칸은 부러진 우산이 걸려 있고, 오른쪽 칸은 고친 우산이 같은 각도로 걸려 있다. 사람 없음. 왜: '같은 구도, 바뀐 상태'(B6 → B7 → B8)가 이 회차의 서명 구도다. 프레임이 흔들리면 수선이 읽히지 않는다.

**13 DANBI_day2_cloud** — 같은 단비, O2(분홍 블라우스, 크림 와이드 바지), 3칸. ① 마름, 전신 정면, 고친 우산을 접어 들고 ② 처마 아래 `CLOUD_EAVE` + L2, 고친 우산을 편다(팽팽한 캔버스, 노란 실 띠) ③ 처마 밖 햇빛 속 측면, L4 장대비가 펼친 우산만 두드린다(물보라, 우산 끝 물줄기, 웅덩이, 주변은 마름). 왜: 2일째 아침(B8–B10)은 회차의 절정이다. 의상 교체, 처마 밑 구름, 가장 센 비가 한꺼번에 나온다.

**14 CAST_OKJA_MANSIK_BOMI** — 세 사람 전신 정면, 실제 키 비율(155 / 170 / 125cm), 기본 표정, 단색 배경, 각자 옆에 가슴 위 클로즈업 하나. 왜: B4 판정(옥자), 코믹 목격자(만식), 다가오는 손님(보미, 선택).

**15 LOC_HYDRANGEA_ALLEY (권장)** — ALLEY-MOUTH, `W_BREAK` 오후, 사람 없음, 1주째 수국(진한 청보라, 꽉 찬 송이). 왜: B3 수국과 시즌 시계의 1주째 기준. 없으면 06의 골목 입구로 대신한다.

**16 LOC_ASSOC_OFFICE (권장)** — WINDOW-DOWN: 철제 책상, 선풍기, 마이크, 열쇠 판(색 천 태그, 노랑 없음), 큰 창 너머 화면 왼쪽 아래로 처마칸의 짙은 초록 처마 지붕. 사람 없음, 종이 없음. 왜: 판정이 사무실에서 일어나면 B4에 쓰고, 이후 회차의 '2층 창의 회장' 들킬 뻔에 쓴다.

---

## 7. 먼저 만들 카드 (1차 묶음, 6장)

1. **01 DANBI_wet_states**를 혼자 먼저 만들고 바로 검수한다(구름 렌더 테스트).
2. 통과하면 **02 DANBI_turnaround · 03 TAEO_turnaround · 04 PROP_UMBRELLAS · 05 LOC_EAVES_STALL_day · 06 LOC_PLAZA_ARCH**.
3. 2차는 07–14(필수), 마지막으로 15–16(권장). 번호 순서대로 만들면 첨부할 카드가 언제나 이미 있다.

---

## 8. 반환된 시트 검수 체크리스트 (사람이 눈으로)

- [ ] **한 사람:** 모든 칸에서 얼굴형, 머리, 의상, 키가 같다. 02는 01①칸과 같은 얼굴이고, 07은 02, 08은 03과 같은 얼굴이다.
- [ ] **좌/우 표식:** §0 표대로다(정면 컷에서 태오의 시계는 화면 오른쪽, 단비의 딸기핀은 화면 오른쪽).
- [ ] **강한 노랑 하나:** 인물 카드(01–03, 07, 08, 13, 14)에는 노란 물체가 없다(13의 노란 실 띠만 예외). 소품·플레이트 카드에서는 노란 우산·실·캡·실패에만 있다. 연필은 나무색이고, 놋쇠는 칙칙한 갈색 금빛이다.
- [ ] **글자 없음:** 라벨, 이름, 화살표, 숫자, 색 코드, 시계 숫자, 로고, 서명, 워터마크가 없다. 간판, 셔터, 카트 보드에도 가짜 글씨가 없다.
- [ ] **구름(01, 13):** 구름은 하나이고, 머리 위 약 1m 틈, 평평하고 어두운 밑면, 외곽선 없음, 곧은 수직 기둥이다. 기둥 밖은 마르고 웅덩이는 발밑에만 있다. 풍선이나 후광처럼 보이지 않는다.
- [ ] **소품:** 휜 살에 회색 테이프 덩어리, 노란 실 띠가 미디엄에서 보임, 노란 캡, 열쇠 두 개의 모양이 같음, 고리는 놋쇠 S자.
- [ ] **장소:** FRONT에서 아치 쪽은 왼쪽, 골목 쪽은 오른쪽이다. 고리는 셔터 박스 정중앙에 있고 열쇠 구멍은 하나다. 사람은 없다.
- [ ] **화풍:** STYLE_REF와 같은 선과 채색이다. 실사, 3D, 치비가 아니고, 테두리나 칸 나눔선이 없다.
- 실패하면 어느 항목인지 적는다. ref-sheet-artist가 그 블록에 `redraw_reason`을 붙인다. 3회 뒤에는 ACCEPT-FLAG.
