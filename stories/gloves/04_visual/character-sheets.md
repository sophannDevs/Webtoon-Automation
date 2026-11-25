# 캐릭터 시트: 「장갑을 벗기 전에」 (EP01~, 시리즈 자산)

- 작성: art-director · 2026-11-20 · 첫 작성 (Phase 4, Flow-by-hand mode, Khmer edition)
- 입력: `02_story/characters.md` §2·§3·§5·§6·§7(외형 토큰 원본), `02_story/world.md` §2-2·§2-5·§9-3, `02_story/twist-plan.md` §1-2·§2-3·C5, `03_episode/ep01_beatsheet.md` §1-3·§2, brief LEADER RULINGS A–J
- 짝 문서: `04_visual/style-bible.md` (STYLE_CORE, NEGATIVE, 장소 토큰, 소품 토큰, 손 상태 코드 `H_*`·`P_*`·`MARK_*`, 쌍둥이 컷 규칙)
- 원칙: **외형 디자인은 characters.md 그대로다.** 여기서는 그 영어 문자열을 Flow에서 쓰기 좋게 세 길이(FULL · PANEL · MIN)로 나누고, 인물마다 **주 표지(primary marker) 하나**를 정했다. 고친 낱말은 §6에 모두 적었다.
- **이미지에는 글자가 없다.** 레퍼런스 카드에도 이름표·화살표·숫자·말풍선이 없다.

---

## 0. 쓰는 법

### 0-1. 토큰의 세 길이
| 판 | 언제 | 길이 |
|---|---|---|
| **FULL** | 레퍼런스 카드 프롬프트. 그 인물 혼자 나오는 얼굴 클로즈업에서 단어 여유가 있을 때 | identity + outfit 약 150–180단어 |
| **PANEL** | 한 인물이 주인공인 패널의 기본 | 약 50–65단어 |
| **MIN** | 두 인물이 함께 나오는 패널, 배경의 작은 인물, 손만 나오는 컷의 주인 표시 | 약 25–35단어 |

- 어느 판이든 **주 표지와 얼굴 앵커는 빼지 않는다**(characters §8 art-director 1).
- 패널 프롬프트의 인물 문장 = `matching the attached reference image(s) of <이름> (<얼굴 앵커>)` + 토큰 + 표정 문자열 + 손 상태 코드 문장(style-bible §8-1).
- 손이 보이면 손 상태 코드 문장을 반드시 넣는다. 장갑·흔적 정보는 인물 토큰이 아니라 손 상태 코드가 싣는다(그래서 토큰이 짧아도 된다).

### 0-2. 불변과 가변
- **불변 (모든 컷 같음):** 얼굴형, 눈썹·눈, 머리색·머리 모양, 체형, 피부색, EP1 옷 한 벌, 주 표지, 좌우 표지.
- **가변 (컷마다 지정):** 표정(§1-7, §2-7), 소품의 위치(§1-6, §2-6), 장갑·흔적 상태(style-bible §8-1), 빛(style-bible §4).
- EP1은 하루 안의 이야기라서 **두 주인공 모두 옷이 한 벌이다** [고정, characters §6-0-5]. 의상 변주는 없고 소품과 빛만 달라진다.

---

## 1. 페트라 (PETRA) — 여주

- **identity_tag:** `PETRA`
- **주 표지 (늘 보이게):** **왼손목에 여러 번 감긴 매듭 리넨 실.** 손만 나오는 컷이 가장 많은 작품이라 손에 신원 표지가 있어야 하고, 좌우 반전 검사 표지이기도 하다.
- **얼굴 앵커 (얼굴이 보이면 늘):** ① 곧고 짙은 눈썹(머리색보다 짙다) ② 살짝 각진 턱 ③ 낮은 쪽머리, 귀가 드러남(귀 끝 홍조 토큰이 보여야 한다).
- **보조 표지:** 목의 놋쇠 골무(끈), 왼쪽 허리에 꽂힌 황갈색 작업 장갑(P6–P49).
- **기본 정보:** 25세, 166cm, 마르고 단단함, 평민 장갑장이. 휴고보다 머리 하나 작다(그녀의 눈높이 = 그의 턱·크라바트).
- **색:** 흙갈색 `#7A4A2E`(옷) · 생캔버스 `#CDBB9A`(앞치마) · 꿀갈색 `#8C5E34`(머리) · 포인트 놋쇠 `#B08D57`. **빨강·진홍·병 초록 없음.**

### 1-1. FULL — identity
```
PETRA: adult woman, 25, a glove-maker; average height, lean and wiry with strong forearms, straight confident posture; warm light skin, lightly sun-tanned on hands and forearms; oval face with a firm, slightly squared jaw and defined cheekbones; straight strong dark-brown brows; warm amber-brown eyes with a level, appraising gaze; straight nose; full lips usually pressed flat; thick dark honey-brown hair twisted into a low practical bun at the nape, two short loose strands at the temples, ears uncovered; no makeup
```

### 1-2. FULL — outfit (EP1 전 구간 한 벌)
```
faded warm earth-brown wool-linen work dress (brown, never red) with a modest high neckline, cream linen chemise collar showing, sleeves rolled up to just below the elbows; heavy natural-canvas bib apron with tool pockets holding small shears and an awl; a pair of rough tan work gloves tucked into the apron waist-string at her left hip, fingers hanging down; a small brass thimble on a short thin brown leather cord resting at her collarbone just above the apron bib; undyed linen thread with small knots wound several times around her left wrist; dark brown leather ankle boots; no red or crimson on her clothes
```

### 1-3. PANEL (약 50단어)
```
Petra, adult woman of 25, lean and wiry; firm squared jaw, straight strong dark-brown brows, level amber-brown eyes; dark honey-brown hair in a low nape bun with two short temple strands, ears uncovered; faded earth-brown high-necked work dress, canvas bib apron, small brass thimble on a cord at her collarbone
```
(+ 손 상태 코드 `P_BARE` / `P_GLOVED` / `P_ONE`가 매듭 실·장갑을 싣는다)

### 1-4. MIN (약 25단어)
```
Petra (adult woman, 25; straight dark brows, squared jaw, dark honey-brown low bun; earth-brown work dress, canvas apron; knotted thread on her LEFT wrist)
```

### 1-5. 손 (손 클로즈업 컷)
```
PETRA_HANDS: capable working hands, warm light skin, slightly broad palms, short clean unpainted nails; undyed knotted linen thread wound around her LEFT wrist; sleeves rolled below the elbow
```
- 흔적 상태는 style-bible §8-1의 `MARK_CLEAN` / `MARK_DOT` / `MARK_FRESH`. 흔적은 **오른손 검지 끝 바닥(손바닥 쪽) 하나뿐**, 시리즈 내내 같은 자리 [잠금].
- 손버릇: 솔기와 매듭을 **엄지·검지·중지 세 손가락으로 집는다**(P9, P36. 어머니와 같은 손버릇, 강조하지 않는다).

### 1-6. EP1 상황별 소품 · 자세 (옷은 같다)

| 패널 | 상황 | EN 추가 문자열 |
|---|---|---|
| P6–P7 | 압류되는 공방 문간, 팔짱 | `standing in the workshop doorway with her arms folded` |
| P8 | 맨손 재단 | `cutting tan leather bare-handed with her own small shears` |
| P9 | 진홍 서명 바느질(인서트) | `her bare hands sewing a continuous band of deep crimson silk cross-stitch onto a flat tan kid-leather cuff strip, pinching the seam with thumb, index and middle finger, the brass thimble on her right middle finger with its cord hanging loose` |
| P12 | 의뢰서를 집고 올려다봄 | `holding a folded blank paper sealed with black rose-stamped wax in her bare right hand, looking up the hill` |
| P13–P20 | 도착 | `a rolled canvas tool roll tied with a leather strap under her left arm` |
| P21–P28 | 돔 탁자 | 두루마리는 그녀 왼쪽 옆에 내려놓음. P28: `the brass thimble on her right middle finger, its cord hanging loose, pressing amber-brown wax` |
| P29–P38 | 작업대, 치수 | `the canvas tool roll unrolled on the bench; one length of the knotted thread unwound, its end still wound on her LEFT wrist` |
| P44–P45 | 마지막 손목 치수 | 같은 실 운용(한 길이를 풀어냄, 끝은 왼손목) |
| P50–P53 | 처음 낀 장갑 | 손 상태 `P_GLOVED`. P51: `rolling up the canvas tool roll and tying its strap with gloved hands` |
| P54 | 스스로 오른손 장갑을 벗음 | 손 상태 `P_REMOVING` (P15 휴고 동작의 거울) |
| P55–P62 | 오른손만 맨손 | 손 상태 `P_ONE`. 벗은 오른손 장갑은 작업대 위 |

- 소매는 EP1 전 구간 팔꿈치 아래까지 걷혀 있다. 머리는 풀리지 않는다(잔머리 두 가닥만).
- 골무는 P9·P28에서만 오른손 중지, 나머지는 쇄골 위(§6 플래그 2).

### 1-7. EP1 표정 범위 (62패널이 필요로 하는 것)

| 코드 | 표정 | 패널 | EN |
|---|---|---|---|
| `PE_LEVEL` ★카드 | 기본: 무표정, 값을 매기는 눈 | P6, P7, P12, P14, P21–P23, P39 | `unsmiling, level and businesslike, appraising amber-brown eyes looking straight ahead, lips pressed flat` |
| `PE_CRAFT` | 장인의 관찰: 공포보다 직업 | P16, P36 | `an appraising craftswoman's look measuring his hand, curiosity stronger than fear` |
| `PE_DARE_DRAWN` ★카드 | 도발 + 끌림 (단서 1) | **P19** | `chin lifted in a dare, eyes holding his one beat too long, lips slightly parted, a faint flush at the tips of her ears; defiance and attraction at once` |
| `PE_FLUSTERED` ★카드 | 당황할수록 사무적 | P20, P35, P52 | `jaw set, eyes dropped to her work, a faint flush at the tips of her ears, fingers winding the knotted thread faster, businesslike to hide it` |
| `PE_SMIRK` | 값을 이긴 작은 미소 | P27 | `a small one-sided smirk of a won bargain, eyes level` |
| `PE_LINGER` | 그의 손에 머무는 시선 | P30, P31 | `quiet, eyes resting on his hand longer than needed, face soft and unguarded` |
| `PE_TASK` ★카드 | **닫힌 일의 얼굴** (분노 아님) | **P33–P34, P44–P45** | `face closed and flat, mouth a straight line, jaw set, no flush, eyes lowered to the knotted thread, not looking at him; cold and finished, not hot anger` |
| `PE_FROZEN` | 굳은 충격 | P41, P47 | `frozen shock, eyes wide and fixed, lips parted, face drained but skin still warm` |
| `PE_ANGER` | 뜨거운 분노가 번짐 (이 한 컷만) | **P43만** | `a flash of hot anger in her eyes, brows drawn, mouth closed, not shouting` |
| `PE_UNBAR` | 빗장이 풀리기 시작 | P48 | `the anger draining from her face, eyes lifting to his face, brows easing` |
| `PE_OPEN` ★카드 | **열린 얼굴** (원하는 손) | **P49**, P57–P58 | `face open, eyes lifted to his face, lips slightly parted, a faint flush at the tips of her ears` |
| `PE_PROUD_LIE` | 투명한 거짓말, 자존심 | P50 | `chin up, eyes sliding away, mouth tight, a transparent excuse` |
| `PE_RESOLVE` | 결심, 떨림을 누름 | P54, P57 | `steady resolve, jaw firm, lips pressed, a held breath, the slightest tremble kept down` |
| `PE_CAUGHT` ★카드 | **들킨 얼굴** (대답은 가림) | **P62** | `caught: a faint flush at the tips of her ears, lips just parted then closing, eyes unable to look away, no answer, no smile` |

- ★ = `PETRA_expressions` 카드에 들어가는 6개. 나머지는 카드의 가까운 표정 + EN 문자열로 만든다.
- **표정 짝 검수 (twist-plan §2-7):** P45 `PE_TASK` ↔ P49 `PE_OPEN`의 차이가 한눈에 보여야 한다. P19는 `PE_DARE_DRAWN`에서 **귀 끝 홍조와 머무는 눈**이 빠지면 단서 1이 사라진다(재생성).
- 그녀의 시선은 위로 간다(휴고가 머리 하나 크다). `PE_OPEN`·`PE_UNBAR`는 눈이 살짝 올려다본다.

### 1-8. 절대 바꾸지 않는 것
머리색과 낮은 쪽머리(풀지 않음), 곧고 짙은 눈썹, 각진 턱, 호박갈색 눈, 흙갈색 옷(빨강 금지), 매듭 실은 **왼손목**, 장갑은 **왼쪽 허리**(P50 전), 흔적은 **오른손 검지 끝 바닥**, 성인 얼굴. 그녀는 어머니와 닮지 않는다(§3-1).

---

## 2. 휴고 (HUGO) — 남주

- **identity_tag:** `HUGO`
- **주 표지 (늘 보이게):** **왼손의 무늬 없는 검은 키드 장갑**(EP1 내내). 역광 실루엣(P1)에서도 읽히고, 좌우 반전 검사 표지다. 오른손은 P15 이후 맨손(먹빛 핏줄).
- **얼굴 앵커:** ① **그의 오른쪽 눈썹 위로 내려온 머리 한 가닥**(정면에서 보면 화면 왼쪽) ② 처진 눈꺼풀의 옅은 유리빛 초록 눈, 눈 밑 옅은 그늘 ③ 턱까지 오는 높은 깃과 상아색 크라바트.
- **기본 정보:** 30세, 186cm, 로안 백작(백작급. 공작·대공·북부 코드 없음). 반지·장신구 없음.
- **색:** 미드나이트 블루 `#1C2230`(코트, 램프빛에서 검게 읽힘) · 상아 `#EFE8D8`(크라바트) · 고동 `#6B5532`(조끼) · 머리 `#14161C` · 눈 `#9DBFA8`. 코트에 초록 기 금지(하인 제복과 겹친다).

### 2-1. FULL — identity
```
HUGO: adult man, about 30, a count; tall, a head taller than Petra, lean with broad shoulders, long arms and long elegant fingers; fair, pale but healthy skin with a cool undertone, never grey; long lean face, high cheekbones, straight long nose, firm thin lips, clean-shaven, faint fine lines at the eyes; heavy-lidded pale glass-green eyes with long dark lashes, faint shadows under the eyes, gaze usually lowered to people's hands; blue-black hair, nape-length, loosely brushed back, one lock falling over his right brow
```

### 2-2. FULL — outfit (EP1 전 구간 한 벌)
```
slightly old-fashioned, impeccably kept midnight-blue frock coat (reads black in lamplight) with a high turned-up collar; dark antique-bronze silk waistcoat; white shirt with stiff high collar points up to the jaw and an ivory cravat wound high, fully covering the neck; white shirt cuffs showing at the wrists; dark charcoal trousers; clean black leather boots; no jewelry, no medals, no fur, no cloak; his LEFT hand always in a close-fitting plain black kid-leather glove with no stitching or decoration
```
- P13–P14만 오른손에도 새 검은 장갑(`H_GLOVED_BOTH`). 그 외는 style-bible §8-1 손 상태표.

### 2-3. PANEL (약 65단어)
```
Hugo, adult man of about 30, tall, lean and broad-shouldered, a head taller than Petra; long lean face, high cheekbones, clean-shaven; heavy-lidded pale glass-green eyes, gaze lowered to hands; blue-black nape-length hair brushed back, one lock over his right brow; pale cool skin, never grey; old-fashioned midnight-blue frock coat with high turned-up collar, bronze waistcoat, stiff high collar and ivory cravat covering the neck
```
(+ 손 상태 코드 `H_STD` 등)

### 2-4. MIN (약 30단어)
```
Hugo (adult man, about 30, a head taller; blue-black hair with one lock over his right brow, heavy-lidded pale green eyes; midnight-blue frock coat, high collar, ivory cravat; black glove on his LEFT hand)
```

### 2-5. 손 (손 클로즈업 컷)
```
HUGO_RIGHT_BARE: his bare RIGHT hand, long elegant fingers, pale skin with matte ink-black veins (faintly blue-black) branching beneath the skin like tree roots or ink bleeding in water; darkest and thickest at the fingertips and on the back of the hand, where one thick root runs diagonally from the index and middle knuckles toward the little-finger side of the wrist; only fine strands on the palm; thinning toward the wrist, where a few hair-thin tendrils cross the wrist and vanish under the white shirt cuff; asymmetric and organic, never symbols, runes or letters; not raised, not glowing; normal nails
HUGO_LEFT_GLOVED: his LEFT hand in a close-fitting plain black kid glove with a short cuff
```
- 패널용 짧은 판: `his bare RIGHT hand with matte ink-black root-like veins under pale skin, darkest at the fingertips and across the back of the hand, thinning at the wrist into hair-thin tendrils under the white cuff; never runes or tattoos, not glowing`
- **핏줄 노출 [잠금]:** EP1은 손끝부터 손목까지만. 손목 위, 목, 얼굴, 깃 위로는 보이지 않는다. 기준 무늬는 `HUGO_hands` 카드(§5).
- 왼손에도 핏줄이 있다(world §2-2). 왼손 기준 무늬는 style-bible §7 `VEIN_LANDMARK`에 적어 두었고 EP1에는 그리지 않는다(왼손은 늘 장갑).

### 2-6. EP1 상황별 소품 · 자세 (옷은 같다)

| 패널 | 상황 | EN 추가 문자열 |
|---|---|---|
| P1 | 역광 실루엣, 얼굴 가림 (2단 등장 전) | `seen against the lamplight, face in shadow: a tall dark column, a thin ivory line of cravat, long coat skirts, his gloved LEFT hand holding a burst black glove, his bare RIGHT hand holding a cut white rose` |
| P2 | 장미가 시드는 손 | `his bare RIGHT fingers holding the rose stem, steady, not trembling` |
| P5 | 물러서며 손을 감춤, 얼굴 반쯤 그늘 | `stepping back, hiding his bare RIGHT hand behind his back, face half in shadow` |
| P13–P14 | 멀리, 양손 장갑 | `far away at the end of the black path, both hands gloved` |
| P15 | 오른손 장갑을 천천히 벗음 | 손 상태 `H_REMOVING` |
| P20 | 벗은 장갑을 주머니에 | `tucking the removed black glove into his coat pocket with his gloved LEFT hand` |
| P21, P26, P28 | 흑장미 인장 | `a short ebony-handled seal with a rose-shaped die` (조끼 주머니에서. P26 장갑 낀 왼손으로 집음, P28 맨 오른손으로 누름) |
| P29 | 장미로 뻗다 멈춘 손 | `his bare RIGHT hand stopped just short of a white rose, then lowered to the bench` |
| P31, P36 | 왼손이 가슴으로 (심장 타이머) | `his gloved LEFT hand resting on the left side of his chest just below the collarbone, over the coat; collar closed` |
| P43 | 유리 종 위에서 멈춘 손 | `his bare RIGHT hand hovering above the glass bell jar, not touching` |
| P47–P48 | 맨손을 등 뒤로 | 손 상태 `H_HIDDEN` |
| P53, P56 | 한 뼘·숨 하나 앞에서 멈춤 | `his bare RIGHT hand raised palm up, stopped a hand-span (P53) / a breath (P56) from hers, not closing the distance` |
| P58 | 맥박 위의 엄지 | `his thumb resting lightly on her inner wrist pulse, not gripping` |

### 2-7. EP1 표정 범위

| 코드 | 표정 | 패널 | EN |
|---|---|---|---|
| `HE_WEARY` ★카드 | 기본: 차분하고 지친 눈, 건조한 반쯤 미소 | P15, P22, P24, P26, P33 | `composed and weary, a faint dry half-smile at one corner of the mouth, heavy-lidded eyes lowered to someone's hands` |
| `HE_SHAME` | 물러섬, 수치와 다급함 | P5, P47 | `stepping back, shame and held-down urgency, mouth tight` |
| `HE_FIRST_LOOK` ★카드 | **시선이 손에서 얼굴로** (사건) | **P18**, P20(눈은 아직 그녀 얼굴), **P61** | `very still, eyes lifted from her hands to her face, lips slightly parted, a swallow visible at the jaw line above the cravat` |
| `HE_MELANCHOLY` | 우수 | P32 | `melancholy, eyes on her fingers resting on his hand, lamplight on one side of his face` |
| `HE_HELD_BREATH` ★카드 | 숨을 참음, 시선을 피함 | P35 | `head turned aside, holding his breath, a swallow at the jaw line, eyes averted` |
| `HE_GUILT` ★카드 | 담담한 죄책감 | P42, P43 | `quiet guilt, eyes lowered to the gloves, mouth set, no self-pity` |
| `HE_CRUMBLE` ★카드 | **무너진 얼굴** (차갑지 않다) | **P48** | `not cold: a crumbling face, brows knitted up in pain, jaw trembling, eyes wet but no tears` |
| `HE_ASKING` ★카드 | 묻는 남자: 절제와 갈망 | P51–P53, P56, P58 | `restraint and longing, eyes on her hand, brows slightly drawn, lips soft, asking without moving closer` |
| `HE_REALISING` | 깨달음이 오는 중 | P59–P60 | `quiet shock dawning, eyes lowered to their joined hands, lips parted` |

- ★ = `HUGO_expressions` 카드의 6개.
- 그의 시선은 **기본이 손**이다. 얼굴로 올라가는 것은 P18과 P61 두 번뿐인 사건이다(characters §3-9). 그녀가 더 작으므로 그가 그녀 얼굴을 볼 때 눈은 살짝 내려다본다.
- P58: 시선이 그녀 입술 높이까지 갔다가 **멈추고 손으로 돌아간다**(눈은 마주치지 않는다).

### 2-8. 절대 바꾸지 않는 것
청흑색 목덜미 길이 머리와 **그의 오른쪽 눈썹 위** 한 가닥, 옅은 유리빛 초록 눈, 창백하되 회색이 아닌 피부, 미드나이트 블루 코트(초록 기 금지), 끝까지 채운 깃과 상아색 크라바트, **왼손 장갑**, 핏줄은 손목까지, 반지·망토·모피·훈장 없음, 성인 얼굴.

---

## 3. 조연 (모두 EP1에서 이름 없음)

### 3-1. 어머니 (MOTHER)
- **주 표지:** **양손 엄지·검지·중지 첫 마디가 사방으로 잿빛**(`ASH_GREY`, 하녀·페트라와 같은 값), 둘째 마디까지 옅은 회색 실선.
- 보조: 바랜 겨자색 뜨개 숄, 리넨 모자.
- 등장: **P10**(얼굴, 창가 의자) · P37(회상, **성한 맨손만, 얼굴은 화면 밖**).
- **FULL**
```
the mother: woman in her early 50s, small and softly rounded, round soft face, heavy-lidded dark-brown eyes, weathered light skin with fine lines, dark brown hair heavily streaked with grey in a low bun under a plain linen cap; dark slate-blue wool dress, faded mustard-ochre knitted shawl; sits in a wooden chair by the small-paned window, hands resting on her knees; on BOTH hands the first segment of the thumb, index and middle fingers is matte ash-grey all around, faint grey hairline threads up to the second knuckle; normal nails; looks nothing like Petra
```
- **PANEL:** `the mother, early 50s, small and rounded, round face, heavy-lidded dark eyes, grey-streaked dark hair under a linen cap, slate-blue dress and faded mustard shawl; on both hands the first segments of thumb, index and middle fingers matte ash-grey`
- **P37 회상 손:** `the same small weathered hands of an older woman, healthy, no grey at all, tying a knot in the knotted linen thread with thumb, index and middle finger beside a wooden hand form` (얼굴 없음, `LIGHT_MEMORY`)
- 표정 (P10): `quiet and accepting, eyes on the green glass house on the distant hill, no resentment`. **원망·분노 금지** [잠금].
- 페트라와 닮지 않게 [고정]: 둥근 얼굴 vs 각진 달걀형, 처진 짙은 갈색 눈 vs 곧은 호박갈색 눈, 흰머리 섞인 짙은 갈색 vs 꿀갈색, 작고 둥근 체형 vs 마르고 단단함.

### 3-2. 장갑 시중 하녀 (MAID)
- **주 표지:** 사고 전(P3) = **백랍 쟁반 위 접힌 새 검은 장갑**. 사고 후(P4~) = **오른손 검지·중지 손끝 바닥의 잿빛**(`ASH_GREY`). P19에서 독자는 앞으로 모은 손의 이 잿빛으로 그녀를 알아본다(작게, 강조 없이).
- 보조: 흰 모자 아래 적갈색 머리, 옅은 주근깨, 병 초록 제복.
- 등장: P3, P4, P5(후경), P14(맨 뒤), P19(맨 뒤, 작게).
- **FULL**
```
the glove maid: adult woman in her mid-20s, slim, round face, light freckles, auburn-chestnut hair tucked under a white mob cap; dark bottle-green manor uniform dress, white apron, white cuffs; bare hands; carries a pewter tray with a folded pair of new plain black kid gloves
```
- 사고 후 추가: `the palm-side pads of her RIGHT index and middle fingertips turned matte ash-grey`
- **PANEL/MIN:** `the glove maid (adult woman, mid-20s, freckles, auburn hair under a white mob cap, bottle-green uniform, white apron, bare hands)`
- 표정: P3 `reflexive urgency, reaching for the sliding glove` / P4 `surprise turning to pain, drawing her hand to her chest, no resentment` / P5 `frightened and pitying, half-turned away, cradling her hand` / P19 `frozen with fear at the back, her greyed fingertips clasped in front`. **그를 노려보지 않는다** [잠금].

### 3-3. 가죽상 (CREDITOR)과 사내들 (CREDITOR_MEN)
- **주 표지 (가죽상):** **높은 짙은 갈색 실크해트.** 필수 의상: **밤색 키드 장갑**(맨손의 장인 앞에 선 장갑 낀 상인 = 계층).
- 등장: P6, P7 (P9는 화면 밖 목소리, 그리지 않는다).
- **FULL**
```
the leather merchant: man in his 50s, stout and broad, clean-shaven with grey mutton-chop side-whiskers, small cool eyes, tall dark-brown top hat, good chestnut-brown frock coat, buff waistcoat, chestnut-brown kid gloves, holding a closed brown leather ledger with nothing written on the cover
```
- **MIN:** `the leather merchant (stout man in his 50s, grey side-whiskers, tall dark-brown top hat, chestnut frock coat, chestnut kid gloves, closed blank brown ledger)`
- 표정: `polite, cool and ledger-like, never sneering`. 회중시계·시곗줄 없음. **악당이 아니라 법이다**(과장된 악역 얼굴 금지).
- **사내들:** `two or three burly working men in their 30s–40s, shirtsleeves rolled, leather aprons, flat caps; one on a ladder unhooking a blank wrought-iron glove-shaped sign, the others carrying a tool chest and wooden hand forms` (P6. 얼굴은 중요하지 않다)

### 3-4. 집사 (STEWARD)와 하인들 (STAFF_GROUP)
- **주 표지 (집사):** **단정히 빗은 회백색 머리**(긴 얼굴, 조금 구부정한 큰 키).
- 등장: P14(도착 알림, 대사 1), P19(굳음, 반쯤 든 손), P21(멀리 흐리게).
- **FULL**
```
the steward: man in his 60s, tall and thin, slightly stooped, neatly combed white-grey hair, long clean-shaven face, black tailcoat, plain low white cravat, bare hands clasped in front, standing on the white marble band at the conservatory entrance
```
- **MIN:** `the steward (tall stooped man in his 60s, neatly combed white-grey hair, black tailcoat, bare hands)`
- 표정: P14 `fearful courtesy` / P19 `frozen, one bare hand half-raised and stopped`.
- **하인들 (P14, P19, P21 배경):** `household staff frozen behind the white marble band: a plump cook in her 40s in a white cap and white apron over a bottle-green dress, a housemaid in her 30s in bottle-green with white apron and cap, a young footman in his 20s in a bottle-green livery coat; all bare-handed` (+ 맨 뒤에 장갑 시중 하녀). 표정: `frozen in disbelief`.
- 하인 제복의 병 초록은 **하인 전용**이다.

### 3-5. 이웃 장갑장이 (NEIGHBORS)
- 등장: P11, P12(뒤에서 굳음). 대사 0.
- `two or three neighbouring glove-makers, bare-handed adults in work aprons (a grey-bearded man in his 60s, a woman in her 40s), shaking their heads and pushing away a folded blank paper sealed with black wax`
- 표정: `averting their eyes, afraid`.

### 3-6. 한 프레임에서 구별 (characters §6-5 요약)
| | 실루엣 | 주색 | 손 |
|---|---|---|---|
| 휴고 | 키 큰 세로 기둥, 긴 코트 자락, 높은 깃 | 어둠 + 상아 한 줄 | 왼손 검정, 오른손 창백 + 먹빛 |
| 페트라 | 낮은 쪽머리 + 앞치마 = 작은 삼각형, 걷은 소매 | 따뜻한 흙갈색 + 밝은 캔버스 | 맨손, 왼손목 실 |
| 어머니 | 앉은 둥근 덩어리 + 숄 | 서늘한 슬레이트 + 겨자 | 양손 세 손끝 잿빛 |
| 가죽상 | 넓은 몸 + 높은 실크해트 | 밤색 + 담황 | 밤색 장갑 |
| 하인들 | 병 초록 + 흰 앞치마·모자 | 병 초록 | 맨손 |

---

## 4. 잿빛 손끝이 있는 사람 (같은 값, 다른 자리) [잠금]

| 사람 | 자리 | EP1 |
|---|---|---|
| 하녀 | 오른손 검지·중지 손끝 바닥 | P4부터 |
| 어머니 | 양손 엄지·검지·중지 첫 마디 사방 + 둘째 마디까지 옅은 실선 | P10 (P37은 성한 손) |
| 페트라 | **오른손 검지 끝 바닥 하나** | P34 작은 점 → P46 신선한 흔적(첫 마디까지 검은 실핏줄) |

- 세 사람 모두 style-bible §7 `ASH_GREY` 문자열 하나를 쓴다. 은색·흰색·검은 테두리면 재생성.

---

## 5. 레퍼런스 카드 사양 (ref-sheet-artist 지시서)

사용자가 Flow에서 **카드 하나하나를 손으로** 만든다. 그래서 수를 아꼈다: **필수 6장**만 있으면 EP1을 만들 수 있고, **권장 2장**은 반전·정점 무대의 배경 일관성을 크게 올리며, **선택 4장**은 시간이 있을 때만(대신 "장면 앵커 패널"을 쓰면 된다).

### 5-0. 카드 목록

| # | 카드 이름 (= 파일 이름) | 등급 | 비율 | 내용 한 줄 | 만들 때 첨부 | 주로 쓰는 패널 |
|---|---|---|---|---|---|---|
| 1 | `PETRA_turnaround` | **필수** | 16:9 | 전신 4방향(정면·3/4·측면·후면), EP1 옷과 소품 | 없음 | 페트라의 전신·상반신 컷 전부 |
| 2 | `HUGO_turnaround` | **필수** | 16:9 | 전신 4방향, 왼손 장갑 · 오른손 맨손 핏줄 | 없음 | 휴고의 전신·상반신 컷 전부, P1 실루엣 |
| 3 | `PETRA_expressions` | **필수** | 16:9 | 얼굴 6개(3×2): 기본 · 일의 얼굴 · 도발+끌림 · 당황 · 열린 얼굴 · 들킨 얼굴 | `PETRA_turnaround` | 얼굴이 큰 컷(P19, P34, P44–45, P48–49, P62 등) |
| 4 | `HUGO_expressions` | **필수** | 16:9 | 얼굴 6개(3×2): 지친 반쯤 미소 · 첫 시선 · 숨 참기 · 죄책감 · 무너진 얼굴 · 묻는 얼굴 | `HUGO_turnaround` | 얼굴이 큰 컷(P15, P18, P35, P42, P48, P53, P60–61 등) |
| 5 | `HUGO_hands` | **필수** | 16:9 | 손 4칸: 오른손 등 · 오른손 바닥 · 손목 안쪽(맥박 자리) · 장갑 낀 왼손이 쥔 터진 장갑 | `HUGO_turnaround` | 그의 맨손이 보이는 모든 컷(약 30컷) |
| 6 | `PETRA_hands` | **필수** | 16:9 | 손 4칸: 깨끗한 오른손 · 작은 점 · 신선한 흔적 · 왼손 장갑 + 오른손 맨손 | `PETRA_turnaround` | 손 클로즈업, 반전 컷(P34, P45–46, P49, P54–59) |
| 7 | `LOC_BENCH` | **권장** | 16:9 | 사람 없는 작업대, 램프 하나 | 없음 | B5 P29–38, B8–B9 P51–62 (21컷, 두 구간) |
| 8 | `LOC_STUDY` | **권장** | 16:9 | 사람 없는 서재, 창가 유리 종 | 없음 | B6–B7 P39–50 (12컷, 쌍둥이 컷 포함) |
| 9 | `LOC_GREENHOUSE` | 선택 | 16:9 | 사람 없는 온실 통로, 입구에서 돔까지 | 없음 | P1–5, P14–20, P21–28 (대신: P1, P14, P21을 앵커로) |
| 10 | `LOC_WORKSHOP` | 선택 | 16:9 | 사람 없는 공방 안(압류 전), 창 너머 골목 | 없음 | P6–12, P37 (대신: P6, P8을 앵커로) |
| 11 | `MOTHER_ref` | 선택 | 16:9 | 앉은 상반신 2방향 + 양손 잿빛 손끝 클로즈업 | `PETRA_turnaround`(닮지 않았는지 비교용, 프롬프트는 "다른 사람") | P10 (대신: 토큰만) |
| 12 | `MAID_ref` | 선택 | 16:9 | 쟁반 든 전신 + 3/4 상반신 + 오른손 잿빛 손끝 클로즈업 | 없음 | P3–5, P14, P19 (대신: P3을 앵커로) |

- **카드 없음:** 가죽상·사내들·집사·하인들·이웃. 등장 컷이 적고 서로 붙어 있어서(P6→P7, P14→P19) 토큰 + 첫 등장 패널을 앵커로 쓰면 충분하다.
- 선택 카드의 우선순위(시간이 조금만 있을 때): `MAID_ref` > `LOC_GREENHOUSE` > `MOTHER_ref` > `LOC_WORKSHOP`.
- characters §7이 권한 `HANDS_ASH`(하녀·어머니 손 카드)는 따로 두지 않았다: 잿빛 값은 `PETRA_hands`의 흔적 칸과 `ASH_GREY` 문자열로 고정하고, 하녀·어머니 손은 선택 카드 11·12에 넣었다(카드 수 절약).
- **장면 앵커 패널:** 장소 카드를 만들지 않은 장면은 그 장면의 첫 와이드 컷을 먼저 확정하고 같은 장면의 다른 패널에 첨부한다(style-bible §12-3-5).

### 5-1. 모든 카드 공통 규칙
1. 프롬프트 = `REF_STYLE`(style-bible §1) → 카드 내용 → 인물 FULL 토큰(identity + outfit) → `REF_NEGATIVE`. 마지막 문장은 `Avoid: any text, labels, speech bubbles, watermark.`
2. **배경:** 밝은 따뜻한 회색 단색(장소 카드 제외). **빛:** 고르고 부드러운 중립광. 색보정·역광·극적 그림자 없음(패널에서 변주할 여지를 남긴다).
3. **글자 0:** 이름표, 칸 번호, 화살표, 치수선, 격자선, 말풍선, 서명 없음. 칸 사이는 여백으로만 나눈다.
4. **같은 사람:** 한 카드 안의 모든 칸이 같은 얼굴·같은 옷·같은 키 비율. 다른 사람이 섞이면 버린다.
5. **좌우 표지가 보이게:** 페트라 왼손목 실, 휴고 왼손 장갑, 휴고 오른쪽 눈썹 위 머리 한 가닥. **정면 칸에서는 인물의 왼쪽이 화면 오른쪽**이다(검수 때 헷갈리지 말 것).
6. **성인:** 앳된 얼굴이면 앵커가 맞아도 버린다.
7. **변형 4장**을 만들어 가장 정확한 것을 고른다(가장 예쁜 것이 아니라).
8. 저장: `_workspace/04_visual/refs/<카드 이름>.png` (시리즈 자산, EP2부터 재사용).

### 5-2. 카드별 내용

#### 카드 1 `PETRA_turnaround` — 필수 · 16:9
- **배치:** 한 줄에 전신 4개, 왼쪽부터 ① 정면 ② 3/4 정면(몸이 화면 왼쪽을 향함) ③ 오른쪽 옆모습 ④ 뒷모습. 같은 크기, 발끝까지.
- **자세:** 똑바로 선 중립 자세, 팔은 몸에서 살짝 떨어뜨려 **손이 보이게**, 손가락은 펴서.
- **표정:** `PE_LEVEL`(무표정, 값을 매기는 눈).
- **옷 · 소품:** §1-2 FULL outfit 전부. 목의 놋쇠 골무(끈), **왼손목 매듭 실**, **왼쪽 허리** 앞치마 끈에 꽂힌 황갈색 작업 장갑(손가락이 아래로), 앞치마 주머니의 작은 가위와 송곳, 흙갈색 발목 장화. 연장 두루마리는 넣지 않는다(상황 소품).
- **머리:** 뒷모습에서 낮은 쪽머리가 분명히, 관자놀이 잔머리 두 가닥, 귀가 보인다.
- **검수:** 네 칸이 같은 얼굴인가 / 눈썹이 머리색보다 짙은가 / 정면 칸에서 실이 **화면 오른쪽 손목**(그녀의 왼손목)에 있는가 / 장갑이 그녀 왼쪽 허리에 있는가 / 옷에 빨강 없음 / 성인 체형.

#### 카드 2 `HUGO_turnaround` — 필수 · 16:9
- **배치:** 카드 1과 같은 4방향.
- **자세:** 똑바로 선 중립 자세, 손이 보이게. 오른손은 손등이 보이도록 살짝 돌린다.
- **표정:** `HE_WEARY`보다 더 중립(입꼬리만 아주 옅게), 시선은 정면.
- **옷 · 손:** §2-2 FULL outfit 전부. **왼손 = 무늬 없는 검은 키드 장갑**, **오른손 = 맨손, 먹빛 핏줄이 손끝·손등에서 짙고 손목에서 가늘어져 셔츠 커프 밑으로 사라진다.** 깃·크라바트는 턱까지. 반지·망토·모피 없음.
- **검수:** 정면 칸에서 장갑이 **화면 오른쪽 손**(그의 왼손) / 머리 한 가닥이 **화면 왼쪽 눈썹 위**(그의 오른쪽) / 핏줄이 손목 위로 안 올라감 / 피부가 회색이 아님 / 코트에 초록 기 없음 / 키 크고 어깨 넓은 성인.

#### 카드 3 `PETRA_expressions` — 필수 · 16:9 · 첨부 `PETRA_turnaround`
- **배치:** 머리와 어깨 6개, 3열 × 2줄. 크림 슈미즈 깃과 골무 끈이 보이는 높이까지. 같은 빛.
- **윗줄 (왼쪽부터):** ① `PE_LEVEL` 정면 ② `PE_TASK` 3/4, 눈을 내리깐 닫힌 얼굴(분노 아님, 홍조 없음) ③ `PE_DARE_DRAWN` 정면, 턱을 든 도발 + 머무는 눈 + 살짝 벌어진 입술 + 귀 끝 홍조
- **아랫줄:** ④ `PE_FLUSTERED` 3/4, 눈을 내리고 턱에 힘, 귀 끝 홍조 ⑤ `PE_OPEN` 3/4, 키 큰 사람을 올려다보는 눈, 살짝 벌어진 입술, 귀 끝 홍조 ⑥ `PE_CAUGHT` 정면 가까이, 귀 끝 홍조, 벌어졌다 다무는 입술, 피하지 못한 눈, 웃음 없음
- 각 칸의 EN 문자열은 §1-7 그대로 쓴다.
- **검수:** 여섯 칸이 같은 사람 / ②와 ⑤의 차이가 한눈에(반전 쌍 P45↔P49) / ③에 홍조와 머무는 눈이 있음(P19 단서) / 귀가 머리에 가려지지 않음.

#### 카드 4 `HUGO_expressions` — 필수 · 16:9 · 첨부 `HUGO_turnaround`
- **배치:** 카드 3과 같은 3×2. 깃과 크라바트가 보이는 높이.
- **윗줄:** ① `HE_WEARY` 3/4, 내리깐 눈, 한쪽 입꼬리의 건조한 반쯤 미소 ② `HE_FIRST_LOOK` 정면, 아주 고요, 손에서 얼굴로 들린 눈(살짝 내려다보는 높이), 살짝 벌어진 입술, 크라바트 위 턱선의 삼킴 ③ `HE_HELD_BREATH` 고개를 옆으로 돌리고 숨을 참음
- **아랫줄:** ④ `HE_GUILT` 3/4~옆모습, 내리깐 눈, 다문 입 ⑤ `HE_CRUMBLE` 정면, 아프게 올라간 눈썹, 떨리는 턱, 젖은 눈(눈물은 흐르지 않음), 차갑지 않음 ⑥ `HE_ASKING` 3/4, 아래(그녀의 손)를 보는 눈, 살짝 모인 눈썹, 부드러운 입
- **검수:** 여섯 칸이 같은 사람 / 머리 한 가닥이 늘 그의 오른쪽 / 눈이 옅은 유리빛 초록 / 깃 위로 핏줄 없음.

#### 카드 5 `HUGO_hands` — 필수 · 16:9 · 첨부 `HUGO_turnaround`
이 작품에서 얼굴만큼 중요한 카드다. 모든 맨손 컷의 **기준 핏줄 무늬**가 된다.
- **배치:** 손 4칸, 한 줄, 밝은 따뜻한 회색 바탕, 중립광.
- ① **오른손 등**, 손가락을 살짝 벌림, 손목에 흰 셔츠 커프와 미드나이트 블루 소매 끝. 기준 무늬: 손끝마다 짙고 촘촘한 먹빛, 손등에서 굵은 뿌리, **검지·중지 마디에서 손목 새끼손가락 쪽으로 사선으로 내려가는 굵은 뿌리 하나**(`VEIN_LANDMARK`), 손목에서 머리카락처럼 가는 가닥 몇 개가 커프 밑으로 사라짐.
- ② **오른손 바닥**, 손바닥이 위: 손끝 바닥은 짙고 손바닥에는 가는 가닥만.
- ③ **오른손목 안쪽 클로즈업**(손바닥이 위): 가는 가닥이 손목을 건너 커프 밑으로. 가닥 사이에 맥박 자리가 보이는 **깨끗한 피부 한 점**(P34·P45·P49에서 그녀의 검지 끝이 놓이는 자리).
- ④ **왼손 = 무늬 없는 검은 키드 장갑**, 그 손에 쥔 **터진 검은 장갑**(검지·중지 손끝이 무광 검회색으로 타고 마른 나무껍질처럼 갈라짐, 연기·불씨 없음).
- **검수:** 핏줄이 대칭·직선·원·고리·글자·룬·문신처럼 보이지 않음 / 빛나지 않음, 튀어나오지 않음 / 손톱 보통 / 손목 위로 안 올라감 / 장갑에 스티치·장식 없음.

#### 카드 6 `PETRA_hands` — 필수 · 16:9 · 첨부 `PETRA_turnaround`
반전을 싣는 손이다. 흔적의 자리·크기·색을 고정한다.
- **배치:** 4칸, 한 줄, 같은 바탕과 빛.
- ① **오른손, 손바닥이 위**, 깨끗함(`MARK_CLEAN`). 팔꿈치 아래까지 걷은 소매, 짧고 깨끗한 손톱, 이 손목에는 실이 **없다**.
- ② **오른손 검지 끝, 손바닥 쪽 클로즈업**: `MARK_DOT` (손끝 바닥의 약 1/3 크기 동그란 무광 잿빛 점. 작지만 색은 잿빛 그대로).
- ③ **②와 같은 구도**: `MARK_FRESH` (손끝 바닥이 무광 잿빛, 머리카락처럼 가는 검은 실핏줄이 첫 마디 주름까지만, 뿌리처럼 유기적. 피·상처·빛 없음).
- ④ **두 손**: 왼손은 거친 황갈색 스웨이드 작업 장갑, 장갑 커프 위로 감긴 매듭 실 / 오른손은 맨손, 검지 끝에 ③과 같은 흔적(`P_ONE` 상태, B8–B9의 모양).
- **검수:** 흔적이 **오른손 검지 끝 바닥 하나**뿐 / 다른 손가락·손톱에 없음 / ②③의 회색이 같은 값 / 실핏줄이 첫 마디를 넘지 않음 / 실은 왼손목에만 / 장갑에 진홍·스티치 없음.

#### 카드 7 `LOC_BENCH` — 권장 · 16:9
- **사람 없음.** style-bible §6-3 FULL 토큰 + `LIGHT_BENCH_LAMP`.
- **카메라:** 곁방 입구에서 본 3/4 와이드, 램프가 화면 가운데. 유리벽이 비스듬히 만나는 모퉁이, 낮은 벽돌 벽, 문질러 닦은 연한 참나무 작업대, 테라코타 화분, 못에 걸린 회갈색 낡은 정원사 장갑과 전지칼, 철골 위 흰 장미, 등받이 없는 의자 둘, 펼친 캔버스 두루마리(바늘, 송곳, 가위, 분필, 밀랍, **작은 진홍 실패**).
- **넣지 않는 것:** 진홍 커프 띠(P29 전용), 사람, 매듭 실 눈금, 달빛(B8–B9 프롬프트가 더한다).
- **검수:** 램프가 유일한 빛 / 웅덩이 밖은 청록 어둠 / 유리에 불꽃이 희미하게 비침 / 글자 없음.

#### 카드 8 `LOC_STUDY` — 권장 · 16:9
- **사람 없음.** style-bible §6-4 FULL 토큰 + `LIGHT_STUDY_COOLING`(아직 청회색 아님. 청회색은 패널 프롬프트가 더한다).
- **카메라:** 문간에서 방 안을 본 와이드. 짙은 호두나무 벽판, 제목 없는 책등, 책상과 놋쇠 램프, 병 초록 벨벳 커튼, 초록빛이 드는 키 큰 유리문, 불 없는 벽난로와 그 위 **천으로 덮인 큰 액자**, 창가의 작은 둥근 받침 탁자와 **유리 종**.
- **유리 종 장갑은 멀리 작게:** 크림색 장갑과 검게 탄 손끝은 보이되, 진홍 띠는 이 거리에서 읽히지 않게 한다(진홍 노출은 P40에서).
- **검수:** 액자 천 아래가 보이지 않음 / 책등·액자에 글자 없음 / 벽난로에 불 없음 / 시계 없음.

#### 카드 9 `LOC_GREENHOUSE` — 선택 · 16:9
- **사람 없음.** style-bible §6-2 FULL 토큰 + `LIGHT_GH_NIGHT`.
- **카메라:** 입구의 흰 대리석 띠를 전경에 두고 재의 길을 따라 돔까지 이어지는 깊은 원근. 돔 아래 긴 호두나무 탁자가 끝에 작게.
- **검수:** 길 가장자리의 살아 있는 장미가 멀쩡함 / 길에 연기·불씨 없음 / 유리에 물방울 없음.

#### 카드 10 `LOC_WORKSHOP` — 선택 · 16:9
- **사람 없음.** style-bible §6-1 공방 안 PANEL + FULL + `LIGHT_WS_MORNING`. **압류 전**(모든 못과 선반이 차 있음. P37 회상과 같은 상태, P8은 프롬프트에서 비운다).
- 창가의 어머니 의자, 나무 손틀 줄, 가죽, 실패(진홍 하나), 글자 없는 갈색 종이 손 본. 작은 격자창 너머로 비탈진 골목.
- **검수:** 종이 본에 글자·숫자 없음 / 간판(창밖)이 실루엣뿐.

#### 카드 11 `MOTHER_ref` — 선택 · 16:9
- **배치:** 왼쪽 2/3에 창가 나무 의자에 앉은 상반신 두 방향(정면, 3/4), 오른쪽 1/3에 **무릎 위 두 손 클로즈업**(양손 엄지·검지·중지 첫 마디 사방 잿빛 + 둘째 마디까지 옅은 실선).
- §3-1 FULL 토큰, 표정은 고요(원망 없음).
- **검수:** `PETRA_turnaround`와 나란히 놓았을 때 **닮지 않음**(얼굴형·눈·머리색·체형) / 잿빛이 하녀·페트라와 같은 값.

#### 카드 12 `MAID_ref` — 선택 · 16:9
- **배치:** 왼쪽에 백랍 쟁반(접힌 새 검은 장갑)을 받쳐 든 정면 전신, 가운데 3/4 상반신, 오른쪽에 **오른손 손바닥 쪽 클로즈업**(검지·중지 손끝 바닥 잿빛, 사고 후 상태).
- §3-2 FULL 토큰. 분명한 20대 성인.
- **검수:** 성인 얼굴 / 맨손 / 잿빛은 두 손끝 바닥만.

### 5-3. 만드는 순서와 넘기는 법
1. 1 → 2 → 3 → 4 → 5 → 6 (→ 7 → 8 → 선택 카드). 뒤 카드는 앞 카드를 첨부해 같은 사람으로 묶는다(§5-0 "만들 때 첨부").
2. ref-sheet-artist는 `_workspace/04_visual/refs/ref_prompts.md`에 카드마다 블록 하나를 쓴다(webtoon-flow-handoff 형식):
```
### PETRA_expressions
- prompt: "<REF_STYLE … 카드 내용 … FULL 토큰 … REF_NEGATIVE>"
- attach: refs/PETRA_turnaround.png
- output: _workspace/04_visual/refs/PETRA_expressions.png
- aspect: 16:9
```
3. 권장·선택 카드는 블록 첫 줄에 등급을 적지 말고(카드 이름은 그대로), ref-sheet-artist가 핸드오프 전에 리더와 몇 장을 넣을지 정한다. 기본은 **필수 6 + 권장 2 = 8장**.
4. 카드가 확정되면 ref-sheet-artist가 `refs/INDEX.md`에 카드별 확정 파일과 검수 결과를 적는다(사용자가 이미지를 넣은 뒤).

---

## 6. 충돌 · 다듬은 낱말 기록 (디자인 변경 없음)

| # | 내용 | 처리 |
|---|---|---|
| 1 | **`MARK_DOT` 문자열.** characters §6-6은 "a barely visible pale ash-grey dot". twist-plan C5(ruling J로 twist-plan 우선)는 "작을 뿐 같은 ASH_GREY" | style-bible §8-1에서 "a tiny round matte ash-grey dot, about a third of the fingertip pad … the same ash-grey as the maid's fingertips"로 고쳤다. 크기만 작고 색은 같다 |
| 2 | **골무 위치.** characters §6-4는 "늘 목에, B4에서 손가락에"와 "바느질·밀랍 누를 때 오른손 중지에 낀다(끈째로)"를 함께 적었다. 짧은 끈을 목에 건 채로는 중지에 닿지 않는다 | P9·P28 = 오른손 중지, **목에서 벗긴 끈이 손에서 늘어진다**. 나머지 컷 = 쇄골 위. panel-director 확인 요청 |
| 3 | **"ears uncovered"를 페트라 토큰에 더함.** characters에는 없는 낱말이지만 낮은 쪽머리라 원래 귀가 보이는 디자인이다. 귀 끝 홍조(P19, P35, P49, P62)가 그녀의 원함을 싣는 토큰이라 Flow가 귀를 머리로 덮지 않게 명시했다 | 디자인 그대로, 낱말만 추가 |
| 4 | **낡은 정원사 장갑 색.** world는 "갈라진 낡은 정원사 장갑"만 적었다 | **회갈색**으로 지정(그녀의 황갈색, 그의 검정과 섞이지 않게) |
| 5 | **진홍 커프 띠의 가죽 색.** P9는 P8의 손님 주문품(황갈색 가죽), P29는 그를 위한 장갑(검은 키드) | P9 = 황갈색 커프 띠, P29 = 검은 커프 띠. 진홍 띠 자체는 같다 |
| 6 | characters §6-2 outfit의 "his LEFT hand always … glove"와 P13–P14 양손 장갑 | 충돌 아님. outfit은 왼손을 고정하고, 오른손은 style-bible §8-1 손 상태표가 정한다 |
| 7 | characters §7 리스크 1은 표정 레퍼런스 **4종**(기본, 도발/자조, 당황, 들킨 얼굴)을 권했다 | 6종으로 늘렸다(반전 쌍 `PE_TASK`/`PE_OPEN`, `HE_CRUMBLE`/`HE_ASKING`이 EP1 핵심 컷이라서). 4종은 모두 포함 |
| 8 | characters §7 레퍼런스 세트 6종(`HANDS_ASH` 포함) | `HANDS_ASH`는 따로 만들지 않고 `PETRA_hands` + 선택 카드 11·12로 나눴다(카드 수 절약). 나머지 5종은 같은 내용 |
| 9 | **P45 ↔ P49 화면비** (style-bible §13-1) | 두 컷을 같은 비율로. panel-director 확정 |

---

## EP02 additions (2026-11-25)

- 작성: art-director · 2026-11-25 · EP02 「원하는 손만」 추가분. **위의 EP1 토큰(FULL · PANEL · MIN · 표정 · 카드 1–12 사양)은 바꾸지 않았다.** EP2는 그것을 그대로 쓰고, 새것만 여기에 더한다.
- 입력: brief EP02 잠금 1–8 · RULINGS EA–EG, `03_episode/ep02_beatsheet.md` §1-3 · §2 · §6(V1–V3, P1), `02_story/characters.md` §5-2 · §6-2, `02_story/world.md` §2-2 · R5, `04_visual/refs/ref_prompts.md`.
- 짝 문서: `style-bible.md` "EP02 additions (2026-11-25)" (빛 문장 E-1, 저주 토큰 `NECK_STRAND` E-3, 소품 E-4, 손 상태 코드 E-5, 매치 컷 E-6, 옷 결정 E-7).
- **옷:** 두 주인공·하녀·집사·하인 모두 EP1 토큰의 옷 그대로(다음 날이어도 의상 변주 없음, style-bible E-7). 휴고의 깃과 크라바트는 P1–P56 내내 턱까지 닫혀 있다.

### E2-1. 휴고: 맨 왼손 `HUGO_LEFT_BARE` [리더 V1 · EB]

- **불변:** 왼손 핏줄은 **오른손보다 짙고 촘촘하다**, **손목에서 가늘어지지 않는다**(굵은 뿌리 두세 가닥이 커프 밑 소매 안으로), 랜드마크는 오른손과 다른 사선(**약지·새끼 마디 → 엄지 쪽 손목**, style-bible §7 `VEIN_LANDMARK`의 EP1 왼손 문장 그대로), **팔뚝은 보이지 않는다**(커프는 늘 내려와 있다).
- 이 무늬가 단서 3(P12, 반전 33패널 앞)이다. 오른손과 같아 보이면 단서가 사라진다.

**FULL (손 클로즈업 · 카드용)**
```
HUGO_LEFT_BARE: his bare LEFT hand, long elegant fingers, pale cool-toned skin, never grey, normal nails; matte ink-black veins (faintly blue-black) beneath the skin, branching like tree roots or ink bleeding in water, visibly darker and denser than on his right hand: the fingertips nearly solid ink-black, thick roots crowding the back of the hand, where one thick landmark root runs from the ring and little-finger knuckles diagonally toward the thumb side of the wrist; more fine strands on the palm than on his right palm; the roots do not thin at the wrist: two or three thick roots, the landmark root among them, cross the wrist and disappear under the white shirt cuff into the sleeve; the cuff stays down and the forearm is never shown; asymmetric and organic, never symbols, runes or letters; flat under the skin, not raised, not glowing
```
**PANEL (짧은 판)** — style-bible E-3 표의 문장과 같다.
```
his bare LEFT hand with matte ink-black root-like veins under pale skin, visibly darker and denser than his right hand, fingertips nearly ink-black, one thick root running from the ring and little-finger knuckles diagonally to the thumb side of the wrist; the roots stay thick at the wrist and two or three of them cross it and disappear under the white shirt cuff; the cuff stays down, the forearm is never shown; never runes or tattoos, not glowing
```
- **오른손과 나란히 보일 때(이 회차엔 없음, 참고):** 오른손 = 손목에서 머리카락 같은 가닥만, 손목 안쪽에 깨끗한 맥박 자리 한 점. 왼손 = 손목을 굵게 건너감, 손목 안쪽에 깨끗한 점 없음.
- 패널: P11(드러나기 시작) · **P12** 손등(L) · P13–P14 · P15–P19 손바닥 위/종이 위 · P20–P21 손바닥 위로 내밀다 멈춤 · P22 다시 낌. 손 상태 코드 `H_REMOVING_LEFT` / `H_LEFT_BARE` / `H_REGLOVING_LEFT`(style-bible E-5).
- 금지: 커프 걷기, 소매 속 팔뚝, 손목 위 핏줄이 소매 **밖으로** 보이는 것, 오른손 랜드마크(검지·중지 → 새끼 쪽) 복제, 빛남·부풂·괴물 손톱.

### E2-2. 휴고: 목의 가닥 `NECK_STRAND` [리더 V2 · EB]

- EN 문자열은 style-bible E-3 `NECK_STRAND`(전문)를 쓴다. 여기서는 **인물 쪽 고정값**만 적는다.
- **자리:** 그의 목 **왼쪽**(정면에서 화면 오른쪽), 왼쪽 귓불 바로 아래 선, 크라바트 윗가장자리 바로 위. **하나**, 머리카락 굵기, 끝에서 한 번 갈라짐, 끝은 크라바트 가장자리 위 **반 마디**(EP2 기준 높이 = 시리즈 시계의 0점).
- **조건:** 왼팔을 어깨높이로 든 자세 때문에 셔츠 깃 끝과 크라바트가 왼쪽에서 손가락 한 마디쯤 비켜난 **P45 한 컷에서만** 보인다. 깃은 열리지 않는다. 팔을 내리면(P46) 다시 가려진다.
- **얼굴 · 턱 · 귀 · 목의 나머지는 깨끗하다.** `HUGO_expressions` 카드의 "clean unmarked face and neck"은 그대로 맞다(크라바트가 제자리일 때의 그림).
- P45 표정: `HE_UNAWARE`(아래 E2-4) — 들린 자기 장갑 손을 보는 눈, 그녀의 시선을 모른다.

### E2-3. 장갑 시중 하녀: 얼굴이 읽히는 크기용 보강 [리더 V3 · EB]

EP1 토큰(§3-2)은 "둥근 얼굴, 옅은 주근깨, 흰 모자 속 적갈색 머리"까지라 미디엄 클로즈업(P34, P36, P37)에서 얼굴이 매번 달라질 수 있다. **디자인은 그대로 두고(characters §5-2) 얼굴 앵커만 더한다.** 더한 낱말은 art-director 추정이다(characters에 없음 → 리더 플래그 AE4).

- **주 표지 (EP2부터 늘):** **오른손 검지·중지 손끝 바닥의 잿빛**(`ASH_GREY`, 페트라 검지·어머니와 **같은 값**). EP2에서는 쟁반이 없으므로 이것이 유일한 주 표지다.
- **얼굴 앵커:** ① 코와 볼에 흩어진 옅은 주근깨 ② **부드럽게 휜 옅은 적갈색 눈썹**(페트라의 곧고 짙은 눈썹과 반대) ③ 흰 모자 가장자리로 빠져나온 적갈색 잔머리 몇 가닥.
- **페트라와 구별:** 둥근 얼굴·작고 둥근 코·휜 옅은 눈썹·둥근 연갈색 눈·적갈색 머리·조금 더 작은 키 vs 각진 턱·곧은 짙은 눈썹·호박갈색 눈·꿀갈색 쪽머리.

**FULL (카드용 · 얼굴 큰 컷)**
```
the glove maid: adult woman in her mid-20s, clearly adult, slim, a little shorter than Petra; round soft face, small rounded nose, light freckles scattered across her nose and cheeks; softly arched pale auburn brows; round light-brown eyes; auburn-chestnut hair in a neat bun tucked under a white mob cap, a few loose auburn wisps at the cap's edge; dark bottle-green manor uniform dress, white apron, white cuffs; bare hands; the palm-side pads of her RIGHT index and middle fingertips matte dull ash-grey, dry like a withered petal, not silver, not white, no black outline, all other fingers clean
```
**PANEL / MIN (EP2)**
```
the glove maid (adult woman, mid-20s; round face, light freckles across nose and cheeks, softly arched pale auburn brows, auburn wisps under a white mob cap; bottle-green uniform, white apron; bare hands, the pads of her RIGHT index and middle fingertips ash-grey)
```
- **EP2 손:** `the leather bundle carried across both forearms, not gripped with her fingers` (P34). P35 클로즈업에서 그녀의 잿빛 두 손끝과 페트라의 흔적 검지가 **같은 회색**이어야 한다. 두 사람의 맨손은 닿지 않는다.
- **EP2 표정:**

| 코드 | 패널 | EN |
|---|---|---|
| `MAID_SHY` | P34 | `shy politeness, eyes lowered, holding the bundle out across her forearms` |
| `MAID_NOTICING` | P35 | `her eyes caught on Petra's fingertip, quiet recognition and worry` |
| `MAID_PLEADING` | P36–P37 | `worried and earnest, lifting her greyed fingertips a little toward her chest, quick to defend the count, no resentment, no fear of him` |
| `MAID_LOOKS_DOWN` | P39 (작게, 원경) | `head bowed, looking at her own fingertips` |

- 금지: 원망·공포·그를 노려보는 얼굴, 앳된 얼굴, 잿빛이 손가락 둘 밖으로 번진 그림.

### E2-4. EP2 표정 추가 (EP1 표정은 그대로 재사용)

**재사용:** 페트라 `PE_OPEN`(P3), `PE_LEVEL`(P9 등), `PE_DARE_DRAWN`(P8), `PE_FLUSTERED` 계열(P15–P17 머무는 시선 + 귀 끝 홍조) · 휴고 `HE_WEARY`(P8, P25, P31), `HE_FIRST_LOOK`(P4: 손끝에서 얼굴로 올라갔다 다시 흔적으로), `HE_GUILT`(P18), `HE_ASKING`(P14, P20, P42), `HE_HELD_BREATH`(P54, 단 시선은 자기 가슴 위 그녀의 손).

**새 코드:**

| 코드 | 패널 | EN |
|---|---|---|
| `PE_RESOLVE` | P1–P2 | `lips closed, eyes steady and composed, the moment before a decision, faint flush still at her ear tips, not fleeing` |
| `PE_NOT_YET` | P21 | `refusing without coldness: lips closed but jaw relaxed, eyes steady on his face, not looking away, not hurt, not angry` |
| `PE_APPRAISING` | P24 | `one eyebrow raised, a craftsman's near-contempt for the clumsy repair, dry` |
| `PE_PROUD` | P27 | `chin up, a craftswoman naming her price, confident` |
| `PE_HIDE_CRIMSON` | P28 | `a brief flicker of hurt, then a set face` |
| `PE_CRAFT_FOCUS` | P43, P52–P53, P55 | `absorbed craftsman's concentration, eyes on the knots, lips lightly pressed, open and calm, not the closed task face` |
| `PE_SEEING` | P44 | `her eyes stopped mid-count, lifting from his sleeve toward his neck, fingers frozen on a knot` |
| `PE_LOGIC_CRACKS` | P48 | `brows drawn together, mouth set, her certainty cracking, no tears` |
| `HE_ACCEPTS` | P22 | `not hurt: a quiet accepting calm, the faintest lift at one corner of his mouth, eyes on the glove he is pulling on` |
| `HE_SHEEPISH` | P25 | `faintly embarrassed dry half-smile, eyes on the repaired glove in her hand` |
| `HE_EASE` | P40 | `the most at ease he has been, a faint real smile` |
| `HE_UNAWARE` | P43–P45 | `looking at his own raised gloved hand, unaware of where her eyes have gone` |
| `HE_PLAIN_TRUTH` | P47, P50 | `calm, eyes on her face, a plain truth, no self-pity, no pain on his face` |
| `HE_QUIET_ASSENT` | P56 | `looking down at her, not at her hand: quiet assent more than surprise, a faint sadness, still` |

- 휴고의 **통증 얼굴 금지**(찡그림, 가슴 움켜쥐기). `HE_CRUMBLE`은 EP2에 쓰지 않는다.
- 페트라의 `PE_TASK`(닫힌 일의 얼굴)는 EP2에 쓰지 않는다(일의 손 그림 0).

### E2-5. 집사 · 하인들 (EP2 변주)

- 토큰은 §3-4 그대로. **집사는 무대사**, P33·P34·P39에 하녀 뒤 반 걸음.
- 하인들 표정 (P33, P39): `turning their heads to each other and whispering, surprised and curious rather than afraid, bodies moving, all staying behind the white marble band` (EP1의 `frozen in disbelief`를 대신).

### E2-6. 레퍼런스 카드 추가 (ref-sheet-artist 지시서) [리더 EB]

**기존 카드 1–12의 사양과 `refs/ref_prompts.md`의 기존 블록은 바꾸지 않는다.** 아래 카드를 블록으로 **덧붙인다.** 공통 규칙은 §5-1 그대로(REF_STYLE → 내용 → 토큰 → REF_NEGATIVE, 마지막 문장 `Avoid: any text, labels, speech bubbles, watermark.`, 밝은 따뜻한 회색 바탕, 중립광, 글자·화살표·치수선 0, 변형 4장).

| # | 카드 이름 (= 파일 이름) | 등급 | 비율 | 내용 한 줄 | 만들 때 첨부 | 주로 쓰는 패널 |
|---|---|---|---|---|---|---|
| 13 | `HUGO_left_hand` | **필수 (EP2)** | 16:9 | 맨 왼손 3칸 + 목의 가닥 1칸 | `HUGO_turnaround` + `HUGO_hands` | P11–P22, **P45** (이후 EP8 · EP11의 가닥 높이 기준) |
| 12' | `MAID_ref` (EP2판 배치) | **필수 (EP2)** | 16:9 | 전신 + 3/4 상반신 + 얼굴 + 오른손 잿빛 손끝 | 없음 | P33–P39 (EP4 끝, EP12) |
| 14 | `EP2_props` | 권장 | 16:9 | 무텍스트 소품 4칸 | 없음 | P5–P8, P19, P23–P27, P29–P32, P34–P41, P49 (대신: P6, P23, P30, P34를 앵커로) |

#### 카드 13 `HUGO_left_hand` — 필수 (EP2) · 16:9 · 첨부 `HUGO_turnaround` + `HUGO_hands`
- **배치:** 한 줄 4칸, 같은 바탕과 빛. ①–③은 `HUGO_hands`와 같은 크기·같은 높이(두 카드를 나란히 놓고 비교할 수 있게).
- ① **왼손 등**, 손가락을 살짝 벌림, 손목에 흰 셔츠 커프와 미드나이트 블루 소매 끝. `HUGO_LEFT_BARE` FULL: 오른손보다 짙고 촘촘, 손끝은 거의 먹빛, **약지·새끼 마디에서 엄지 쪽 손목으로 내려가는 굵은 랜드마크 뿌리**, 그 뿌리를 포함한 굵은 뿌리 두세 가닥이 손목을 굵게 건너 **커프 밑으로** 사라진다.
- ② **왼손 바닥**(손바닥이 위): 손끝 바닥은 짙고, 손바닥의 가는 가닥이 오른손보다 촘촘.
- ③ **왼손목 안쪽 + 커프 클로즈업**(손바닥이 위): 굵은 뿌리가 손목 안쪽을 건너 커프 가장자리 밑으로 들어간다. **커프는 내려와 있다, 팔뚝은 보이지 않는다.** 깨끗한 맥박 자리 한 점은 **없다**(오른손 ③과의 차이).
- ④ **`NECK_STRAND`**: 그의 **왼쪽**에서 본 머리·어깨·들린 팔(가슴 위까지), 왼팔을 어깨높이로 옆으로 든 자세(코트 소매), 고개는 들린 자기 장갑 손 쪽으로. 셔츠 깃 끝과 상아색 크라바트가 왼쪽에서 손가락 한 마디쯤 비켜났고, 그 가장자리 바로 위 왼쪽 귓불 아래 선에 **머리카락 굵기의 먹빛 가닥 하나**(끝에서 한 번 갈라짐, 끝은 크라바트 위 반 마디). 깃은 닫혀 있고 쇄골·가슴은 보이지 않는다. 얼굴·턱·귀는 깨끗하다. 왼손은 검은 장갑(이 칸은 반전 컷의 상태: 양손 장갑).
- **카드에서 바꿀 문장:** `HUGO_hands`의 `No veins above the wrist.` 대신 `On the left hand the veins continue under the cuff; the forearm itself is never shown. No veins on his face, jaw or ears, and none on his neck except the one strand in the fourth view.`
- **검수:** ①–③이 `HUGO_hands`의 오른손보다 **분명히** 짙다 / 랜드마크가 약지·새끼 → 엄지 쪽(오른손 랜드마크의 복제가 아님) / 굵은 뿌리가 커프 밑으로 들어간다 / 팔뚝 노출 0 / ④ 가닥이 **하나**, 목의 **왼쪽**(이 칸은 그의 왼쪽 옆모습이라 보이는 쪽 목이 곧 왼쪽. 오른쪽 옆모습으로 그려졌다면 버린다) / 깃 닫힘, 단추 풀림 0 / 핏줄이 글자·룬·대칭·문신 같지 않음, 빛나지 않음 / 피부가 회색이 아님 / 같은 사람(머리 한 가닥이 오른쪽 눈썹 위라 ④에서는 보이지 않아도 된다).

#### 카드 12' `MAID_ref` (EP2판 배치) — 필수 (EP2) · 16:9 · 첨부 없음
- 카드 12(§5-2)의 사양은 "쟁반 든 전신"이었다. EP2부터 그녀는 **사고 뒤**이고 쟁반 없이 나오므로 배치를 EP2판으로 정한다(리더 플래그 AE5). 파일 이름은 `MAID_ref` 그대로(EP1 카드 목록에서 빠져 있던 카드라 충돌하는 파일이 없다).
- **배치:** 4칸. ① 정면 전신, 두 손을 앞으로 가볍게 모음(손등이 보인다) ② 3/4 상반신, 공손한 기본 얼굴(`MAID_SHY`) ③ 머리와 어깨 정면, `MAID_PLEADING`(걱정스럽고 진지함, 원망 없음) ④ **오른손 손바닥이 위인 클로즈업**: 검지·중지 손끝 바닥만 `ASH_GREY`, 나머지 손가락 깨끗, 흰 소맷부리.
- 토큰: E2-3 FULL. 분명한 20대 성인.
- **검수:** 네 칸이 같은 사람 / 성인 얼굴 / 페트라와 닮지 않음(눈썹·턱·머리색) / 잿빛은 오른손 검지·중지 바닥 둘뿐, `PETRA_hands` ③과 같은 회색 / 원망·공포 얼굴 아님 / 제복은 병 초록, 흰 앞치마·모자.
- EP1 P3(사고 전, 쟁반)에 이 카드를 붙일 때는 그 패널 프롬프트가 "her fingertips clean"이라고 적어야 한다(카드의 잿빛 손끝이 사고 전 컷으로 새지 않게).

#### 카드 14 `EP2_props` — 권장 · 16:9 · 첨부 없음
- **판단:** 소품이 5–8패널씩 이어지고, 무텍스트(계약서 · 종이 본)와 검정 위 검정(띠)이 Flow에서 흔들리기 쉬운 것들이라 카드 하나가 값을 한다. 시간이 없으면 건너뛰고 각 소품의 첫 패널(P6, P23, P30, P34)을 앵커로 쓴다.
- **배치:** 사람 없음, 4칸, 작업대 높이에서 본 정물, 밝은 따뜻한 회색 바탕, 중립광.
- ① `FAILED_GLOVE_BOX` 뚜껑 열린 무지 나무 상자, 켤레마다 조금씩 다른 손끝 탄 검은 장갑 열 켤레 남짓 + 맨 위에 `REPAIRED_GLOVE`(서투른 검은 실 땀, 오그라든 가죽).
- ② `BLACK_STITCH_BAND` 납작한 검은 키드 커프 띠, 은은한 광택의 검은 비단실 십자땀 띠(이어진 장식 띠), 한쪽 끝 실꼬리가 작은 고리로 감겨 있음, 옆에 장갑 바늘 하나와 검은 비단 실패.
- ③ `CONTRACT_EP2`(P6 이후 상태): 네 번 접혔던 자국이 있는 백지 양피지, 밀랍 셋(골무 · 흑장미 · 새 골무).
- ④ `HAND_PATTERN` 분필 왼손 윤곽선만 있는 갈색 종이 + 그 옆에 `LEATHER_BUNDLE`(끈으로 묶은 접힌 검은 키드 가죽 묶음).
- **넣지 않는 것:** 진홍(띠·실패·스티치 모두), 사람 손, 글자·숫자·치수선·라벨·낙인, 연기·불씨.
- **검수:** 양피지·종이에 글씨 같은 얼룩 0 / 밀랍 자국에 글자·문양 0 / 검은 띠의 땀이 띠로 읽힘(따로 떨어진 X자 아님) / 상자 속 장갑이 켤레마다 다름 / 진홍 0.

#### 만드는 순서 · 넘기는 법 (EP2)
1. EP1 카드 1–6이 먼저다(`HUGO_left_hand`는 `HUGO_turnaround` · `HUGO_hands`를 첨부하므로). EP1 카드가 아직 없으면(EP01 = WAITING_FOR_IMAGES) EP1 카드 → 13 → 12' → (14) 순서.
2. ref-sheet-artist는 `refs/ref_prompts.md`에 위 카드마다 블록 하나를 **덧붙인다**(기존 블록·카드 목록 표는 고치지 않고, 표 아래에 "EP2 cards" 소제목을 새로 단다). 형식은 §5-3 그대로:
```
### HUGO_left_hand
- prompt: "<REF_STYLE … 4칸 내용 … HUGO FULL identity/outfit … HUGO_LEFT_BARE FULL … NECK_STRAND … 바꾼 문장 … REF_NEGATIVE>"
- attach: refs/HUGO_turnaround.png, refs/HUGO_hands.png
- output: _workspace/04_visual/refs/HUGO_left_hand.png
- aspect: 16:9
```
3. 프롬프트 길이: 카드는 패널 250단어 상한 밖이지만, `HUGO_left_hand`는 손 3칸 + 목 1칸이라 길어지기 쉽다. 줄일 때 HUGO outfit 문장을 MIN으로 줄이고 `HUGO_LEFT_BARE` · `NECK_STRAND` 문장은 줄이지 않는다.

### E2-7. 리더 플래그 (AE)

| # | 내용 | 제안 |
|---|---|---|
| AE1 | **옷 결정:** 다음 날(P9–P56)에도 두 사람의 보이는 옷은 EP1과 같다. 휴고의 크라바트는 높이·매는 법·색이 그대로이고 깃은 늘 닫혀 있다(가닥 높이의 기준선이 크라바트 가장자리라서). | 확인만(series-arc 표 E와 같음). |
| AE2 | **검정 위 검정 띠:** 검은 키드에 검은 실 십자땀은 Flow에서 사라지기 쉽다. "matte black kid + black silk with a faint sheen"으로 정했다. | 확인. P30은 세 손가락 집기로 통과 가능, P41·P49는 땀이 질감으로라도 보여야 한다(validator 항목). |
| AE3 | **가닥 vs world R5 "끝은 왼쪽 쇄골 아래":** 목의 가닥을 쇄골 아래 뿌리에서 목 옆으로 오른 **가는 곁가닥**으로 정의했다. 세계 규칙은 그대로, 시계의 본체(쇄골 아래 → 심장 한 뼘)는 옷 위 측정이 보여 준다. | continuity-manager가 "EP2 가닥 높이 = 크라바트 위 반 마디, 목 왼쪽, 왼쪽 귓불 아래 선"을 기록해 EP8 · EP11의 기준으로 쓰게 한다. |
| AE4 | **하녀 얼굴 앵커는 추정:** 휜 옅은 적갈색 눈썹, 둥근 연갈색 눈, 작고 둥근 코, 모자 밖 잔머리는 characters §5-2에 없던 낱말이다(디자인 변경 아님, 페트라와 구별하려는 보강). | 승인 요청. character-designer 확인이 필요하면 그쪽으로. |
| AE5 | **`MAID_ref` 배치 변경:** 카드 12의 "쟁반 든 전신"을 EP2판(사고 뒤, 쟁반 없음, 얼굴 칸 + 잿빛 손 칸)으로 바꿨다. EP1 `ref_prompts.md`는 이 카드를 일부러 뺐으므로 충돌 파일은 없다. EP1 P3–P5에 이 카드를 붙이면 P3 프롬프트에 "fingertips clean"을 적어야 한다. | 승인 요청. |
| AE6 | **EP2 진홍 0 (P28 제외) → 두루마리의 진홍 실패도 뺀다:** EP1 `TOOL_ROLL` 펼침 문자열에는 진홍 실패가 있고 EP1 규칙은 실패를 허용했다. EP2는 "진홍을 숨기는 회차"라 EP2 전용 `TOOL_ROLL_EP2`(검은 실패)를 만들었다. EP1 문자열은 그대로. | 승인 요청(X1의 연장). |
| AE7 | **계약서 밀랍 순서:** EP1이 정하지 않아 "골무(왼) · 흑장미 · 새 골무(흑장미 바로 오른쪽)"로 정했다. EP1 P28 이미지가 생겨 순서가 다르면 그 이미지를 따른다. | 확인. |
| AE8 | **`LOC_BENCH` 카드는 밤빛:** 낮(P9–P32) · 해 질 녘(P41–P56)에는 기하 참고로만 붙이고, 확정된 P9 · P41을 구간 앵커로 쓴다. 낮 패널에는 `LOC_BENCH` FULL 토큰(어둠 문구)을 쓰지 않는다. | prompt-smith · 핸드오프 노트에 반영. |
| AE9 | **카드 추가:** 13 `HUGO_left_hand`(필수), 12' `MAID_ref`(필수), 14 `EP2_props`(권장, 건너뛰면 P6 · P23 · P30 · P34 앵커). EP2 패널은 13 없이 시작하지 않는다(단서 3과 반전 가닥의 기준). | ref-sheet-artist에 지시, 카드 수 확정(기본 2장, 여유가 있으면 3장). |
| AE10 | **EP1 왼손 랜드마크 재사용:** style-bible §7 `VEIN_LANDMARK` 칸에 EP1 때 적어 둔 왼손 문장(약지·새끼 마디 → 엄지 쪽 손목)을 그대로 썼다. EP1 토큰 변경 없음. | 확인만. |
