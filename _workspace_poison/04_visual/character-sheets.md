# 캐릭터 시트 — 「독은 제가 먼저 먹겠습니다」 EP01

- 작성: art-director · 기준일 **2026-11-17** · EP01 Phase 4 step 1 · **v1** (외형 토큰 원본 = `02_story/characters.md` §8 v1, 전부 [고정])
- 짝 문서: `04_visual/style-bible.md` (화풍 · 팔레트 · 예약색 · LOC · 조명 · 말풍선 공간 · 금지)
- 다음 독자: **ref-sheet-artist**(§8 → `refs/ref_prompts.md`), panel-director, prompt-smith, panel-validator(§9)
- Flow-by-hand: 아래 영문 토큰은 **그대로 붙여 넣는 완결된 영어**다. 토큰 이름(CHAERYEONG, PROP_… 등)은 프롬프트에 쓰지 않는다. 인물 이름은 써도 되지만 Flow는 이름을 모르므로 외형 문장을 항상 함께 넣는다.
- Khmer edition: 모든 인물 FULL 토큰 끝에 `no text, no letters, no writing anywhere`가 이미 들어 있다(characters §8 공통 규칙). 줄이지 않는다.
- 좌우는 **인물 자신의 좌우**다. 정면 그림에서는 화면 반대편에 보인다.
- 공통 금지(characters §8): 어떤 인물 토큰에도 `purple / violet / lavender / lilac / mauve`를 쓰지 않는다. 인물당 장신구는 고정 소품 1개만. 의상은 단색 큰 면 + 테두리 한 줄.

---

## 0. 쓰는 법

| 항목 | 규칙 |
|---|---|
| FULL 토큰 | 그 컷의 주인공(가장 크게 보이는 1명), 레퍼런스 시트. characters §8의 영문 한 줄 토큰 **원문 그대로** |
| SHORT 토큰 | 같은 컷의 나머지 인물. 실루엣 · 주색 · 식별 표식 · 고정 소품만 남긴 압축형. 첨부 레퍼런스와 함께 쓴다 |
| 상태 토큰 | 손만 · 뒷모습 · 원경 · 특정 자세. 패널 묘사에 덧붙인다 |
| 표정 | 아래 표정 문장을 그대로 쓴다. 외형 토큰은 두고 표정만 바꾼다 |
| 첨부 | 보이는 인물마다 `<ID>_turnaround`, 얼굴이 크면 `<ID>_expressions`도. 소품 클로즈업은 소품 카드. 패널당 3장 이내 |
| 변경 | 불변 토큰을 바꾸려면 character-designer 재호출. 패널이 그려진 뒤에는 바꾸지 않는다 |

### 0-1. EP01 캐스트 요약

등장 패널은 대본 최종본 기준 **추정**이다. panel-director가 샷리스트에서 확정한다.

| ID | 이름 (KM, glossary) | 주색 | 식별 표식 · 고정 소품 (좌우) | 주요 등장 패널 | 레퍼런스 |
|---|---|---|---|---|---|
| **CHAERYEONG** | 채령 / 궁에서 단이 (ឆែរ៉ុង / ដានី) | 연두 + 남색 | 한 갈래 땋은 머리 + 붉은 댕기 · 옥빛 나비 노리개 = **RIGHT 허리** | 거의 모든 패널 (P07 · P09 · P16 · P18 · P34 · P43 · P48 · P50 · P52 · P53 · P56 · P59는 없거나 가장자리) | turnaround + expressions |
| **PRINCE** | 어린 왕자 "왕자 마마" | 진홍 + 금 테두리 | 쌍상투 + 붉은 끈 · 나무 호랑이 장난감 | P01 · P03 · P04 · P13 · P17 · P24 · P25 · P31 · P32(손) · P39 · P40 | turnaround + expressions |
| **MIN** | 민 상궁 (មីន) | 와인 자두 + 차콜 네이비 | 낮은 쪽머리 + 가로 은비녀 · 흰 머리 한 가닥 = **LEFT 관자놀이** · 연청 손수건 = **RIGHT 손** | P05–P10 · P11(원경) · P14(작게) · P31(작게) · P44 · P46 · P48–P50 · P52–P56 · P58 · P59 | turnaround + expressions |
| **BAEK** | 백 감찰 (ប៉ែក) | 검정 | 넓은 갓 + 호박 구슬 갓끈 · 흉터 = **RIGHT 턱선 아래** · 환도 = **LEFT 허리** | P13 · P14(흐림) · P17 · P18 · P23(손) · P27 · P31 · P32 · P33 · P34 · P37 · P38 · P40–P42 (P15 목소리) | turnaround + expressions |
| **HONG** | 홍 숙수 (ហុង) | 황토 | 흰 머릿수건 · 큰 놋 국자 = **RIGHT 손** | P13 · P43(원경 실루엣) | turnaround만 (§5) |

- 다섯 주색(연두 / 진홍 / 와인 자두 / 검정 / 황토)은 같은 컷에서 겹치지 않는다. 엑스트라는 회청 · 회색(§6).
- 그리지 않는 인물: 언니 단이(회상 이미지 없음, 노리개와 생각 말풍선으로만), 선왕 · 채령의 아버지(대사로만), 내의원 의관(미등장).

---

## 1. 채령 — CHAERYEONG (주인공, 궁에서 "단이")

- identity_tag: `CHAERYEONG` · 17세 여 · 155cm · 왕자의 기미 궁녀
- 레퍼런스: `refs/CHAERYEONG_turnaround.png`, `refs/CHAERYEONG_expressions.png`

**FULL (characters §8-1 원문):**
```
Chaeryeong, a 17-year-old East Asian palace maid (poison taster) in a fictional historical Korean-style court; slender but sturdy 155 cm build with a very straight back; long straight black hair parted in the center and worn in ONE single braid hanging down her back to her waist, tied at the end with a bright red ribbon (daenggi), no bangs, two fine loose strands by her ears; large clear dark-brown almond-shaped eyes, wide open and alert, straight dark eyebrows; oval face, small mouth; clear warm ivory skin with a faint natural blush, no freckles, no moles; a spring-green (yellow-green) hanbok jeogori jacket with a white collar band and a thin navy cuff stripe, navy ties, a long navy-blue skirt, white socks; a jade-teal carved butterfly ornament (norigae) with a red knot and a short red tassel always hanging at her RIGHT hip; default expression polite and composed, eyes watchful; no other jewelry; no text, no letters, no writing anywhere
```

**SHORT:**
```
Chaeryeong (slender 17-year-old palace maid, ONE long black braid down her back tied with a red ribbon, no bangs, large alert dark-brown eyes, spring-green jacket with a white collar and thin navy cuff stripe, long navy skirt, a jade-teal butterfly ornament with a red tassel at her RIGHT hip)
```

**불변 (일관성 핵심):** 곧은 등 / **한 갈래** 땋은 머리가 허리까지 + 끝의 붉은 댕기, 앞머리 없음 / 크게 뜬 짙은 갈색 아몬드 눈 + 곧은 일자 눈썹 / 주근깨 · 점 없음 / 연두 저고리(흰 동정, 남색 끝동) + 남색 치마 / **RIGHT 허리 옥빛 나비 노리개 + 붉은 술**. 금속 장신구 없음.

**표정 (가변 · 시트 8종):**

| # | 상황 (패널) | 영문 |
|---|---|---|
| ① | 디폴트 · 침착한 시식 (P01–P03 · P14 · P26 · P28) | `polite and composed, eyes alert and watchful` |
| ② | 난감한 다정함 · 웃음 참기 (P04 · P40) | `a small awkward, fond smile, trying not to laugh` |
| ③ | 의심 · 집중 (P16 · P19 · P20) | `eyes narrowed in sharp focus, brows slightly drawn together, lips parted` |
| ④ | 소름 깨달음 (P21 · P22) | `eyes wide with a sudden chill, small pupils, holding her breath` |
| ⑤ | 공포를 참음 · 아랫입술 깨묾 (P35 · P38) | `biting her lower lip, eyes wide and glistening, fighting her fear` |
| ⑥ | 결연 (P25 · P27 · P32 · P45) | `resolute, brows level, lips pressed firmly together, a steady direct gaze` |
| ⑦ | 눈을 내림 · 반쯤 거짓말 / 외로움 (P12 · P36) | `eyes lowered to one side, a quiet, guarded face` |
| ⑧ | 얼어붙음 · 침묵 (P56 · P57 · P60) | `frozen, face drained of color, eyes fixed and unblinking, lips closed tight` |

- 시트 밖 변주: P47 안도 `eyes softly closed in relief, face resting against someone's shoulder` · P49 걸음을 멈춤 `stopping short, eyes slowly widening`. 외형은 그대로.
- 그녀는 두려워하면서도 먹는다: 떨리는 손 컷을 아끼지 않는다(characters §1-8). 반쯤 감긴 눈 · 무심한 표정 · 괴짜 미소 금지.

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 무릎 꿇음 (L1) | `kneeling upright on the floor beside the low table, back very straight, hands resting on her navy skirt` | L1 대부분 |
| 손 클로즈업 | `her slender hands with short bare nails, the spring-green sleeve cuffs with a thin navy stripe, no rings` | P14 · P15 · P26 · P28–P30 |
| 손끝의 재 | P27 `pinching a little gray ash from the incense burner` → P28 `mixing the gray ash into the brown vinegar with one fingertip` → P41 `a faint gray smudge of ash on her fingertip` (회색. 연보라 아님) | P27–P30 · P41 |
| 노리개 쥠 | `her hand tightly gripping the jade-teal butterfly ornament at her RIGHT hip, the red tassel hanging between her fingers` | P11 · P12 · P57 |
| 주먹 (P23 아래 칸) | `her clenched fist resting on her navy skirt at the knee, the spring-green cuff with a navy stripe` | P23 |
| 뒷모습 | `seen from behind: ONE long black braid down to her waist tied with a red ribbon, the back of a spring-green jacket, a long navy skirt` | P44 · P48 근사 |
| 발 · 그림자 (P54) | `only her feet in white socks under the hem of a long navy skirt, and her shadow on the floorboards` | P54 |
| 댕기를 고쳐 매임 | `her head bowed slightly while an older woman's hands retie the red ribbon at the end of her braid` | P05 · P58 |

**금지 · 드리프트:** 머리 두 갈래 · 올림머리 · 앞머리 · 짧은 머리 금지 · 댕기가 빨강이 아닌 색 금지 · 노리개가 LEFT 허리 · 보라색 금지(청록 옥) · 연두가 노랑 · 민트로 번지면 다시 · 은침 외 금속 장신구 금지 · 진한 화장 금지.

---

## 2. 어린 왕자 — PRINCE ("왕자 마마")

- identity_tag: `PRINCE` · 8세 남 · 120cm · 이름 없음
- 레퍼런스: `refs/PRINCE_turnaround.png`, `refs/PRINCE_expressions.png`

**FULL (characters §8-2 원문):**
```
the young prince, an 8-year-old East Asian boy in a fictional historical Korean-style royal court; small thin 120 cm child; black hair tied in TWO small topknots on either side of the crown of his head with red cords, a few short wisps on his forehead; big round black eyes; fair, slightly pale skin with round cheeks; a knee-length crimson-red robe (dopo) with wide sleeves, edged with ONE thin gold border at the collar, cuffs and hem, a single small gold orchid-shaped button on the chest, white trousers and jacket underneath, small black leather shoes; he always holds or keeps beside him a palm-sized carved honey-colored wooden tiger toy with dark brown stripes and one chipped ear; default expression scared and wary, lips pressed tight, looking up; no crown, no jewelry; no text, no letters, no writing anywhere
```

**SHORT:**
```
the young prince (small, thin 8-year-old boy, TWO small topknots with red cords, big round black eyes, pale round cheeks, knee-length crimson robe with one thin gold border, a small carved honey-colored wooden tiger toy in his hand or beside him)
```

**불변:** 가장 작은 몸 / **쌍상투**(정수리 양쪽 두 개) + 붉은 끈 / 크고 동그란 검은 눈 / 진홍 도포 + **금 테두리 한 줄** + 금 난초 단추 1개 / 나무 호랑이(한쪽 귀 깨짐). 왕관 없음.

**표정 (시트 6종):**

| # | 상황 (패널) | 영문 |
|---|---|---|
| ① | 디폴트 · 겁먹은 경계 (P01 · P17) | `scared and wary, lips pressed tight, looking up, eyebrows slanting upward` |
| ② | 안도 (P03) | `shoulders relaxing, a small relieved face, his grip on the toy loosening` |
| ③ | 신나게 마심 (P04) | `happily drinking, cheeks round, eyes curved with pleasure` |
| ④ | 무구함 (P24) | `innocent, open, trusting face, eyes round and clear` |
| ⑤ | 고집 (P39) | `stubborn and determined, brows down, mouth set, chin up` |
| ⑥ | 숨어서 빼꼼 (P40 · P32) | `peeking out timidly from behind a skirt, half his face hidden, eyes big` |

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 방석에 앉음 | `seated on a flat cushion on the far side of the low table, so small that his chin is almost at table height, the wooden tiger toy beside him on the cushion` | L1 |
| M1 포즈 [고정] | `he has put down his spoon and lifts the brass soup bowl with both hands, bringing its rim to his lips` | P04 · P24 (§style-bible 5-3) |
| 손목이 잡힘 | `his small wrist in a crimson sleeve with a gold border, gripped by a girl's hand, the bowl stopped just before his lips` | P25 |
| 치맛자락 쥔 손 | `a small hand in a crimson sleeve with a thin gold border clutching a fold of a long navy skirt` | P32 · P40 |
| 뛰어듦 | `running in through a doorway, holding the wooden tiger toy up high` | P39 |

**금지 · 드리프트:** 상투 하나 · 머리 풀어 내림 · 왕관 · 익선관 금지 · 도포가 주황 · 분홍 금지 · 금 테두리가 여러 줄 · 무늬 금지 · 호랑이가 진짜 호랑이 · 봉제 인형 금지(나무 조각) · 왕실 근엄 표정 금지(아직 아이다).

---

## 3. 민 상궁 — MIN (**예약색 주의 인물**)

- identity_tag: `MIN` · 48세 여 · 158cm · 기미소 책임 상궁
- 레퍼런스: `refs/MIN_turnaround.png`, `refs/MIN_expressions.png`, `refs/PROP_HANKY_pair.png`

**FULL (characters §8-3 원문):**
```
Lady Min, a 48-year-old East Asian senior court lady in a fictional historical Korean-style palace; slim 158 cm build with very upright posture, hands folded neatly in front; black hair combed smoothly back into a LOW bun at the nape of the neck with ONE long plain silver hairpin pushed horizontally through it, a single white strand at her LEFT temple; narrow, gently down-turned soft black eyes with smile lines; warm light skin with faint lines beside the mouth; a long deep wine-red plum (dark mulberry, almost burgundy) dangui jacket reaching below the hips with side slits, a white collar band and no pattern, over a long dark charcoal-navy skirt; she always holds a folded plain pale celadon-green cotton handkerchief in her RIGHT hand (or tucked into her LEFT sleeve cuff); default expression a calm, kind closed-lip smile with crinkled eyes; no other jewelry; her clothing is dark wine-red, NOT purple, NOT violet, NOT lavender; no text, no letters, no writing anywhere
```

**SHORT:**
```
Lady Min (slim, very upright 48-year-old court lady, black hair in a LOW bun with one long horizontal silver hairpin, a single white strand at her LEFT temple, a calm kind closed-lip smile, a long deep wine-red plum jacket, NOT purple, over a charcoal-navy skirt, a folded pale celadon-green handkerchief in her RIGHT hand)
```

**불변:** 꼿꼿한 자세 · 앞으로 모은 손 / **낮은** 쪽머리 + **가로로 꽂은 긴 은비녀 하나** / **LEFT 관자놀이 흰 머리 한 가닥** / 가늘고 처진 눈 + 웃음 주름 / **짙은 와인 자두색** 긴 당의(흰 동정, 무늬 없음) + 차콜 네이비 치마 / 연청 손수건.

**색 규칙 [고정, characters §8-3]:** 당의는 `deep wine-red plum (dark mulberry, almost burgundy)`로만 쓴다. Flow가 보라 쪽으로 밀면 `burgundy`를 앞으로 당겨 `a long deep burgundy wine-red dangui jacket`으로 바꿔도 된다(색 계열은 그대로, 단어 순서만). 보라 · 바이올렛 · 라벤더로 보이면 REGEN. 연보라 견본 `#C9B6E4`와는 **한눈에 다른 계열**이어야 한다(PROP_HANKY_pair로 확인).

**표정 (시트 6종) — 모두 같은 온화한 미소의 변주 [고정]:**

반전(P52–P59)에서도 표정과 말투를 바꾸지 않는다. 바뀌는 것은 빛뿐이다(characters §3-6 · §3-7, twist-plan). 그래서 그녀의 시트에는 화난 얼굴 · 차가운 눈 · 비웃음이 **없다**.

| # | 상황 (패널) | 영문 |
|---|---|---|
| ① | 디폴트 · 정면 미소 (P07 · P52 · P53 · P59) | `a calm, kind closed-lip smile with crinkled eyes` |
| ② | 같은 미소, 3/4 각도 (P05 · P58) | `the same calm, kind closed-lip smile, seen from a three-quarter angle` |
| ③ | 염려 · 배려 (P10 · P46) | `gently concerned, head tilted slightly, soft eyebrows, a caring faint smile` |
| ④ | 조용한 응시 (P31 · P44 · P54) | `quiet and watchful, lips relaxed in a very faint smile, eyes steady` |
| ⑤ | 손을 내려다봄 (P08 얼굴이 보일 때 · P55) | `eyes lowered toward her hands, a faint kind smile` |
| ⑥ | 이름을 부름 (P56) | `the same calm, kind smile, looking straight ahead, perfectly composed, lips just parted as if speaking softly` |

- 금지 표정: 분노 · 냉소 · 비웃음 · 가늘게 찢어진 악역 눈 · 위협적인 그림자 얼굴. 반전의 무서움은 **같은 미소 + 등롱이 얼굴 반만 비추는 빛**(style-bible LIGHT_LANTERN_FACE)에서 나온다.

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 댕기를 고쳐 맴 | `her hands retying the red ribbon at the end of a girl's long braid, the folded handkerchief held between two fingers of her RIGHT hand` | P05 · P06 · P58(P58은 손수건 없음: `her handkerchief tucked away out of sight`) |
| 손가락을 닦음 (R-HAND) | `her two hands at the center of the frame, wiping her fingers with the folded pale celadon-green handkerchief, the deep wine-red plum sleeve cuffs with white trim at the edges` + PROP_HANKY_STAIN(P08 · P50) / PROP_HANKY_CLEAN(P48) | P08 · P48 · P50 |
| 당번 패를 옮김 | `her hand moving a small blank wooden tag on a spring-green cord from the top row of pegs to the middle row` | P09 |
| 어깨를 토닥임 | `her hand resting kindly on a girl's shoulder` | P10 |
| 원경 뒷모습 | `seen from far behind, walking away down the corridor: a slim upright figure in a long deep wine-red plum jacket, a low bun with a silver hairpin, soft and slightly blurred` | P11 |
| 문지방에 작게 | `small in the background, standing on the threshold of the doorway, hands folded` | P14 · P31 |
| 손을 소매 속에 (P31) | `her RIGHT hand slipped inside her LEFT sleeve, the handkerchief hidden; she alone is looking at the girl, not at the bowl` | P31 |
| 나란히 선 뒷모습 | `seen from behind, standing beside a girl on the veranda, her hand holding the folded handkerchief perfectly still` | P44 |
| 품에 안음 | `embracing a girl against her chest, her face above the girl's head, her LEFT sleeve wrapped behind the girl's back` | P46 · P47 |
| 손수건을 접어 넣음 | `slowly folding the handkerchief and tucking it into her LEFT sleeve cuff; no stain visible` | P55 |

**금지 · 드리프트:** 당의가 보라 계열 · 무늬 · 자수 금지 · 비녀 여러 개 · 꽃 장식 · 높은 머리 금지 · 흰 머리가 RIGHT 쪽 금지 · 손수건이 흰색 · 파랑 · 연보라 금지(연청 = 연한 청자빛 초록) · 예약 패널이 아닌데 얼룩이 보이면 REGEN · 반전 컷의 악역 표정 금지.

---

## 4. 백 감찰 — BAEK

- identity_tag: `BAEK` · 26세 남 · 183cm · 감찰청 무관
- 레퍼런스: `refs/BAEK_turnaround.png`, `refs/BAEK_expressions.png`

**FULL (characters §8-4 원문):**
```
Inspector Baek, a 26-year-old East Asian palace military inspector in a fictional historical Korean-style court; big rugged 183 cm build, the largest figure in any scene, broad shoulders, thick neck, large calloused hands; a black wide-brimmed traditional horsehair hat (gat) with a long chin strap of dark amber wooden beads, black hair in a topknot under it with a few short loose strands at the ears; small deep-set single-lidded black eyes, heavy straight thick eyebrows, square jaw, a small bump on the bridge of his nose as if once broken, clean-shaven with faint stubble shadow; sun-tanned, weathered medium skin; a short pale horizontal scar under the RIGHT side of his jawline; a plain black cheollik military robe with narrow sleeves and a pleated skirt below the waist, a black leather belt, tall black boots; a sheathed sword (hwando) with a black scabbard, brass fittings and a dark-brown cord-wrapped grip worn at his LEFT hip, never drawn; default expression a stern frown, mouth shut tight; rough and solid, NOT a pretty boy, NOT an elegant nobleman, NOT a eunuch; no text, no letters, no writing anywhere
```

**SHORT:**
```
Inspector Baek (huge, broad-shouldered 26-year-old military inspector, the tallest figure, black wide-brimmed gat hat with a dark amber bead chin strap, stern frown, square jaw, a short pale scar under the RIGHT side of his jaw, plain black cheollik robe, a sheathed sword at his LEFT hip)
```

**불변:** 화면에서 가장 큰 몸 / 넓은 챙 검은 갓 + 호박색 나무 구슬 갓끈 / 홑꺼풀 작고 깊은 눈 + 굵은 일자 눈썹 + 네모 턱 + 콧등의 작은 혹 / **RIGHT 턱선 아래 짧은 흰 흉터** / 검은 철릭 + 가죽 띠 + 목화 / **LEFT 허리 환도**(칼집 속). 갓을 벗지 않는다.

**표정 (시트 6종):**

| # | 상황 (패널) | 영문 |
|---|---|---|
| ① | 디폴트 · 무뚝뚝 (P13 · P27) | `a stern frown, mouth shut tight` |
| ② | 법도 선고 (P17 · P18) | `cold and level, brows drawn together, chin slightly raised, pronouncing judgment` |
| ③ | 의심 (P34 · P37 · P38) | `suspicious, eyes narrowed, studying her` |
| ④ | 아주 가까운 응시 (P41) | `an intense, searching stare at very close range, unblinking` |
| ⑤ | 서툰 꾸중 (P40) | `stiff and awkward, unsure how to scold a child, brows raised, mouth tight` |
| ⑥ | 놀람을 누름 (P29 반응 · P31) | `eyes slightly widened in surprise, lips parted, still stern` |

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 문가에 섬 | `standing just inside the sliding doorway, arms at his sides, filling the door frame` | P13 · P14(흐림) |
| 칼자루에 손 | `his large calloused LEFT hand resting on the dark-brown cord-wrapped grip of the sheathed sword at his LEFT hip` | P17 · P23(위 칸) · P27 |
| 다가섬 + 그림자 | `stepping closer from a low angle, his large shadow falling over the kneeling girl` | P27 |
| 역광 | `standing with his back to the window light, half of his face in shadow, the brim of the gat outlined by light` | P34 · P38 |
| 서랍장에 손을 짚음 | `his large hand pressed flat against the wall of small drawers beside her head, leaning one step closer` | P37 · P41 |
| 뒷모습 | `seen from behind: broad shoulders, the wide black gat brim, the plain black cheollik, the sheathed sword at his LEFT hip (on the left side of the image when seen from behind)` | P42 |

**금지 · 드리프트:** 갓 없음 · 모자 바뀜 금지 · 미남 귀공자 · 매끈한 얼굴 · 수염 금지 · 흉터가 왼쪽 · 눈썹 위 금지(이전 작품 표지라 바꾼 것) · 칼을 뽑음 · 칼이 RIGHT 허리 금지 · 철릭이 남색 · 회색 · 붉은 관복 금지 · 다른 인물보다 작아 보이면 다시.

---

## 5. 홍 숙수 — HONG

- identity_tag: `HONG` · 54세 여 · 160cm · 수라간 책임
- 레퍼런스: `refs/HONG_turnaround.png` (expressions 시트는 만들지 않는다: 얼굴이 보이는 컷이 P13 하나이고, P43은 얼굴 없는 실루엣. turnaround의 얼굴 클로즈업 한 칸을 "버럭 외침"으로 그려 대신한다. EP02 이후 비중이 커지면 그때 추가)

**FULL (characters §8-5 원문):**
```
Head Cook Hong, a 54-year-old East Asian royal-kitchen head cook in a fictional historical Korean-style palace; short 160 cm but very broad, stocky build with thick strong arms and a rounded back, standing with feet planted wide; graying black hair twisted up and wrapped in a plain white cotton headscarf; big round face, large wide bulging eyes, thick eyebrows, a big mouth usually open mid-shout; warm skin flushed red on the cheeks and nose from kitchen fires; a faded off-white beige jacket and a brown-gray skirt under a long ochre-yellow (mustard-brown) apron and ochre arm sleeves up to the elbows; she always holds a large brass ladle with a long wooden handle in her RIGHT hand (or tucked into her apron string); default expression an irritated scowl, mid-sentence; no jewelry; no text, no letters, no writing anywhere
```

**SHORT:**
```
Head Cook Hong (short, very broad, stocky 54-year-old cook, white cotton headscarf, big round flushed face mid-shout, ochre-yellow apron and arm sleeves over an off-white jacket, a big brass ladle in her RIGHT hand)
```

**불변:** 넓고 낮은 체구 / 흰 무명 머릿수건 / 둥근 큰 얼굴 + 붉은 볼 · 코끝 / 황토 앞치마 + 팔토시 / **RIGHT 손 놋 국자**.

**표정:** ① 버럭 외침 (P13) `shouting with her mouth wide open, eyes bulging, irritated scowl` · ② 디폴트 `an irritated scowl, mid-sentence`.

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 상을 들여놓음 | `setting down a large steaming lunch table with both thick arms, the big brass ladle tucked into her apron string` (또는 다른 나인이 상을 들고 그녀는 국자를 든 채 지휘 — panel-director 판단) | P13 |
| 원경 실루엣 | `a small, broad, stocky dark silhouette in a headscarf, the shape of a long ladle still in her hand, being led away between two guards across the courtyard, no face visible` | P43 |

**금지 · 드리프트:** 머릿수건 없음 · 날씬한 체형 금지 · 앞치마가 흰색 · 빨강 금지 · 국자가 LEFT 손 금지 · 장신구 금지.

---

## 6. 엑스트라 (레퍼런스 시트 없음)

- 나인 (P31 원경): `background palace maids in muted gray-blue jackets and gray skirts, seen from the side or far away, faces not detailed, no named-character colors (no spring green, no crimson, no wine-red plum, no ochre), no text`
- 군사 (P43 원경): `two palace guards in plain dark gray robes and simple black hats, seen as small far silhouettes, faces not visible, no weapons drawn, no text`
- 금지: 엑스트라가 이름 있는 인물의 다섯 색을 입음 · 얼굴 클로즈업 · 동료 기미 나인을 이름 있는 인물처럼 크게(concept §6: 쓰지 않음).

---

## 7. 소품 토큰 (PROP_*) · 상태 타임라인

> 모든 소품은 **무늬 · 글자 없음**. 영문 토큰에 이미 "blank / no writing"이 들어 있으면 줄이지 말고 넣는다. 인물 고정 소품(노리개 · 호랑이 · 국자 · 환도 · 손수건)은 characters §8-7과 **같은 문장**이다.

### 7-1. 단서 소품 (예약색) — 손수건

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_HANKY_CLEAN` | `a folded plain pale celadon-green cotton handkerchief, clean, one solid color` (얼룩 모서리는 접혀 안쪽에 있다) | 상궁이 나오는 **P08 · P50을 뺀 모든** 컷 · 레퍼런스 시트 |
| `PROP_HANKY_STAIN` | `the same pale celadon-green handkerchief, one corner shows a small faint pale lilac stain, soft-edged like a washed-out watermark` + 위치 문장 `the stained corner is at the lower right of the frame, the stain about the size of a fingertip` | **P08 · P50만** |

- P08과 P50의 얼룩은 **크기 · 위치 · 색이 같다**(R-HAND, style-bible §5-3). P50은 P08 PNG와 PROP_HANKY_pair를 함께 첨부한다.
- P48(밤 와이드)에서도 상궁은 손수건으로 손을 닦지만 **이 거리에서 얼룩은 안 보인다** → CLEAN 문장. P55의 접는 손수건도 얼룩이 이미 안쪽에 접혀 있다 → CLEAN.

### 7-2. 인물 고정 소품

| 토큰 | 영문 | 쓰는 곳 |
|---|---|---|
| `PROP_NORIGAE` | `a jade-teal carved butterfly norigae ornament with a red knot and short red tassel` | 모든 채령 컷(RIGHT 허리) · 클로즈업 P11 · P12 · P57 |
| `PROP_TIGER` | `a palm-sized carved honey-colored wooden tiger toy with dark brown stripes and one chipped ear` | 모든 왕자 컷(손 또는 곁). 깨진 귀를 강조하지 않는다(W6 떡밥, 보이기만) |
| `PROP_LADLE` | `a large brass ladle with a long wooden handle` | 홍 숙수 컷(P13 · P43 실루엣) |
| `PROP_SWORD` | `a sheathed hwando sword, black scabbard, brass fittings, dark-brown cord grip, at his LEFT hip` | 모든 백 감찰 컷 |

### 7-3. 시식방 (L1) 소품

| 토큰 | 영문 | 상태 · 패널 |
|---|---|---|
| `PROP_NEEDLE` | `a thin silver needle longer than two finger joints, with a small round head, bright cool silver, the coldest sparkle in the image` | 늘 은빛. P14 국그릇 **가운데**에 꽂음 → P15 들어 올림(익스트림 클로즈업) → P20 받침에 내려놓으려 함 |
| `PROP_NEEDLE_STAND` | `a small plain wooden stand holding a few thin silver needles` | L1 상 옆 |
| `PROP_NEEDLE_DOWN` | `a single thin silver needle laid down horizontally across the lacquered table top, alone, like a signal` | P26 (고변 신호, 이후 P27–P32 상 위에 그대로) |
| `PROP_CENSER` | `a small plain brass incense burner filled with soft gray ash, on a low wooden stand` | L1 전체. 재 = P27 증명 재료 |
| `PROP_INCENSE_NEW` | `one long, freshly lit stick of mugwort incense standing in the ash, a single thin line of smoke` | P02 · P13 (P13 = 2일째 **새** 향, P03의 꽁초와 대비) |
| `PROP_INCENSE_HALF` | `the stick of incense burned down to about half its length, a single thin line of smoke` | P19 |
| `PROP_INCENSE_STUB` | `only a short stub of incense left, a bit of gray ash just dropping from its tip` | P03 · P23(가운데 칸) |
| `PROP_INCENSE_OUT` | `the incense has burned out completely, only gray ash in the burner` | P24 이후 |
| `PROP_TABLE_BREAKFAST` | `a small low dark red-brown lacquered breakfast table with only a few plain brass bowls (rice, soup, two side dishes) and a plain brass spoon` | P01–P04 |
| `PROP_TABLE_LUNCH` | `a larger low dark red-brown lacquered lunch table crowded with more plain brass lidded bowls, steam rising, a small white porcelain dish of brown vinegar, and in the center the prince's soup bowl` | P13–P32 |
| `PROP_PRINCE_BOWL` | `the prince's soup bowl: a plain brass lidded bowl like the others, but its lid knob is shaped like a small orchid bud` | 뚜껑: P13 닫힘 → P14 채령이 열어 상 위에 놓음 → 이후 열린 채 |
| `PROP_TASTER_DISH` | `a small plain white porcelain taster's dish` | P02 · P19 · P30 |
| `PROP_SMALL_LADLE` | `a tiny brass ladle dipping only into the very center of the soup, not touching the rim` | P02 · P19 (국자 = 가운데, ④ 전제) |
| `PROP_SPOON` | `a plain brass spoon` (은 숟가락 아님 — 은침과 헷갈리지 않게) | P01 · P04 · P24 |
| `PROP_VINEGAR` | `a small plain white porcelain dish holding clear brown vinegar` | P13–P32 상 위, P28 클로즈업 |
| `PROP_SOUP_SHEEN` ● | `a clear soup surface in slanted window light; near the rim of the bowl a barely visible faint pale lilac oily sheen` | **P16만** (예약색) |
| `PROP_RIM_SPREAD` ● | `soft whitish-lilac color slowly spreading along the brass rim of the prince's bowl from her fingertip, following the curve of the rim` | **P29만** (예약색) |
| `PROP_DISH_NOCHANGE` | `the same gray paste of ash and vinegar smeared on the rim of the small white taster's dish, with no change of color at all; the prince's bowl is out of frame` | P30 (연보라 재노출 금지) |

### 7-4. 회랑 (L2) 소품

| 토큰 | 영문 | 상태 · 패널 |
|---|---|---|
| `PROP_DUTYBOARD` | `a small plain wooden duty board hung on the pillar at chest height, with three rows of small wooden pegs (top, middle, bottom); a few blank finger-sized wooden tags hang from the pegs on colored cords: spring green, gray-blue, faded brown and off-white; no writing, numbers, symbols or carvings anywhere on the board or tags` | 연두 끈 패: P05 **위 줄** → P09 상궁 손이 **위 → 가운데**로 옮김(다른 패는 그대로) → P12 · P43–P60 **가운데 줄** |
| `PROP_LANTERN` | `a plain round white paper lantern with a dark wooden frame, no writing, no characters` | 꺼짐 P05–P12 · 저녁 P43–P46 꺼짐 · P47 켜지기 시작 · P48–P60 켜짐(주황) |

### 7-5. 약재고 (L3) 소품 (LOC 문장에 포함)

| 토큰 | 영문 | 메모 |
|---|---|---|
| `PROP_CABINET` | `a tall dark walnut-brown apothecary cabinet of dozens of small drawers with round brass pulls, each label slot a small blank white paper` | 이름표는 빈 흰 종이 |
| `PROP_POISON_DRAWER` | `one larger drawer at the bottom end of the cabinet with a black iron lock plate that has two keyholes` | P33 배경에서만, 클로즈업 금지 |
| `PROP_HERB_BUNDLES` | `bundles of dried gray-brown roots and dusty olive herbs tied with string, no flowers` | 뒤쪽 들보. 꽃 금지 |
| `PROP_SCALE` / `PROP_CUTTER` | `a simple brass balance scale with two pans` / `a heavy wooden herb-cutting blade` | 작업대 위 |

### 7-6. 연속성 타임라인 (그림에서 바뀌는 것만)

| 대상 | 1일째 아침 (P01–P12) | 2일째 한낮 (P13–P32) | 2일째 오후 (P33–P42) | 2일째 저녁 · 밤 (P43–P60) |
|---|---|---|---|---|
| 향 | P02 새 향 → P03 꽁초 | P13 새 향 → P19 절반 → P23 꽁초 → P24 다 탐 | — | — |
| 상 | 아침상 | 점심 수라상, 왕자 국그릇 뚜껑 P14 열림 | — | — |
| 은침 | 받침 | P14 가운데 → P15 은빛 → P26 상 위에 가로로 눕힘 | — | — |
| 채령 손끝 | 깨끗 | P27 재 → P28 재 식초 → P29 · P30 문지름 | P41 회색 재 얼룩 남음 | 깨끗해도 무방(시간 경과) |
| 손수건 | P05–P07 CLEAN · **P08 STAIN** · P09–P10 CLEAN · P11 원경 | P14 · P31 작게(P31 손은 소매 속) | — | P44 · P46 CLEAN · P48 CLEAN(원거리) · P49 CLEAN · **P50 STAIN** · P52–P54 CLEAN · P55 접어 소매에 · P58–P59 안 보임 |
| 당번 판 연두 패 | P05 위 줄 → P09 가운데 줄로 | — | — | 가운데 줄 그대로 |
| 등롱 | 꺼짐 | — | — | P43–P46 꺼짐 · P47 켜짐 시작 · P48 이후 켜짐 |
| 채령 댕기 | P05 상궁이 고쳐 맴 | — | — | P58 다시 고쳐 맴 |
| 백 감찰 | 없음 | P13 처음 등장(문가) | 약재고 | 없음 |

---

## 8. 레퍼런스 시트 사양 (ref-sheet-artist 지시서)

ref-sheet-artist는 아래 카드마다 `refs/ref_prompts.md`에 블록 하나를 쓴다(flow-handoff 형식: `### <카드명>` / `- prompt:` / `- output: _workspace/04_visual/refs/<카드명>.png` / `- aspect:`). 렌더는 사용자가 Flow에서 한다. 패널 렌더 **전에** 확정한다.

### 8-1. 공통 조건

1. 인물 카드 프롬프트 = **STYLE_REF**(style-bible §1) + 레이아웃 문장 + 그 인물의 **FULL 토큰** + 반드시 보일 것 + 마지막 줄 `Avoid: any text, labels, speech bubbles, watermark.`
2. 배경: 민무늬 밝은 웜그레이, 고른 스튜디오 조명, 연출색(꿀빛 · 노을 · 밤 남청 · 등롱 주황) 없음. 패널에서 조명을 바꿀 여지를 남긴다.
3. 모든 인물 그림은 **같은 옷 · 같은 크기**, 머리부터 발끝까지, 왼쪽에서 오른쪽으로 고르게.
4. 식별 표식은 크고 또렷하게. 좌우를 **인물 기준과 화면 기준 둘 다** 쓴다(예: `the white strand at her LEFT temple, which appears on the right side of the image in front views`).
5. 글자 · 라벨 · 번호 · 화살표 · 색 견본 칸의 글씨 없음. 소품은 카드에 적힌 것만.
6. 비율 16:9(장소 플레이트 L2만 9:16).
7. **레퍼런스에는 예약색이 없다.** 유일한 예외는 `PROP_HANKY_pair`의 얼룩 한 점(색 대조 확인용).

### 8-2. 카드 목록

| # | 카드 | 필수 | aspect | 레이아웃 (영문 핵심) | 반드시 보일 것 |
|---|---|---|---|---|---|
| 1 | `CHAERYEONG_turnaround` | 필수 | 16:9 | `four full-body standing views of the same young woman side by side (front, three-quarter turned to her left, right profile, back), plus one full-body side view of her kneeling upright on the floor, plus a large head-and-shoulders front close-up` | 뒷모습: **한 갈래** 땋은 머리가 허리까지 + 붉은 댕기. 정면 · 오른쪽 측면: RIGHT 허리 노리개(정면에서는 화면 왼쪽). 앞머리 없음, 주근깨 · 점 없음. 손에 아무것도 없음 |
| 2 | `CHAERYEONG_expressions` | 필수 | 16:9 | `a grid of eight head-and-shoulders portraits of the same young woman in two rows of four, identical outfit and lighting, each with a different expression:` + §1 표정 ①–⑧ 순서대로 | 모든 칸에 연두 저고리 · 흰 동정, 어깨 너머로 보이는 땋은 머리. ⑤의 아랫입술 깨묾, ⑧의 창백함 |
| 3 | `PRINCE_turnaround` | 필수 | 16:9 | `four full-body views of the same small boy side by side (front, three-quarter, left profile, back), plus one view of him seated on a flat floor cushion, plus a head-and-shoulders front close-up; he holds the wooden tiger toy in the front view and the seated view` | 쌍상투 두 개(뒷모습 · 측면에서 분명히) + 붉은 끈, 금 테두리 한 줄, 금 난초 단추 1개, 호랑이의 깨진 귀. 키가 작은 아이 비율 |
| 4 | `PRINCE_expressions` | 필수 | 16:9 | `a grid of six head-and-shoulders portraits of the same small boy in two rows of three, identical outfit and lighting:` + §2 표정 ①–⑥ | 모든 칸에 쌍상투 · 진홍 도포 깃의 금 테두리 |
| 5 | `MIN_turnaround` | 필수 | 16:9 | `four full-body views of the same middle-aged woman side by side (front, three-quarter turned to her right, left profile, back), plus a head-and-shoulders front close-up; in every full-body view she holds a folded plain pale celadon-green handkerchief in her RIGHT hand` | 뒷모습 · 측면: 목덜미 **낮은** 쪽머리 + 가로 은비녀 하나. 왼쪽 측면 · 클로즈업: LEFT 관자놀이 흰 머리(정면에서는 화면 오른쪽). 당의 = 짙은 와인 자두(보라 아님). 손수건은 깨끗한 단색(얼룩 없음) |
| 6 | `MIN_expressions` | 필수 | 16:9 | `a grid of six head-and-shoulders portraits of the same middle-aged woman in two rows of three, identical outfit and lighting, all variations of the same calm, kind smile:` + §3 표정 ①–⑥ | 모든 칸에 은비녀 · 흰 머리 한 가닥 · 와인 자두 당의. **화난 얼굴 · 차가운 얼굴이 하나도 없어야 한다** |
| 7 | `BAEK_turnaround` | 필수 | 16:9 | `four full-body views of the same big man side by side (front, three-quarter turned to his left, right profile, back), plus a head-and-shoulders front close-up showing the scar under the right side of his jaw and the bump on his nose` | 넓은 챙 갓 + 호박 구슬 갓끈, RIGHT 턱선 아래 흉터(정면에서는 화면 왼쪽, 오른쪽 측면에서 분명히), LEFT 허리 칼집 환도(뒷모습에서는 화면 왼쪽), 거칠고 큰 손. 칼을 뽑지 않음 |
| 8 | `BAEK_expressions` | 필수 | 16:9 | `a grid of six head-and-shoulders portraits of the same big man in two rows of three, identical outfit and lighting, wearing the black gat hat in every portrait:` + §4 표정 ①–⑥ | 모든 칸에 갓 · 흉터 · 콧등 혹 |
| 9 | `HONG_turnaround` | 필수 | 16:9 | `four full-body views of the same short, very broad woman side by side (front, three-quarter, right profile, back), plus a head-and-shoulders front close-up of her shouting with her mouth wide open; she holds a big brass ladle in her RIGHT hand in every full-body view` | 흰 머릿수건, 넓은 체구 · 둥근 등, 황토 앞치마 + 팔토시, RIGHT 손 국자 |
| 10 | `PROP_HANKY_pair` | 필수 | 16:9 | `two identical folded pale celadon-green cotton handkerchiefs side by side at exactly the same size and angle, lying on the edge of a deep wine-red plum (almost burgundy) silk sleeve with a white cuff, on a plain light-gray background, lit evenly from the front: the one on the left is clean, one solid color; the one on the right shows on its lower-right corner a small faint pale lilac stain about the size of a fingertip, soft-edged like a washed-out watermark` | **색 대조 확인:** 와인 자두 소매(짙고 붉은 기)와 연보라 얼룩(흰 기 있는 아주 연한 라일락)이 한눈에 다른 계열. 손수건은 청자빛 초록(파랑 · 흰색 아님). P08 · P50의 얼룩 기준 |
| 11 | `PROP_TABLEWARE` | 필수 | 16:9 | `a neat still-life arrangement on a plain light-gray background, evenly lit: the prince's plain brass lidded soup bowl shown twice (once closed with its orchid-bud-shaped lid knob, once open with the lid beside it), a small plain white porcelain taster's dish, a tiny brass ladle, a small white porcelain dish of clear brown vinegar, a small wooden stand holding a few thin bright silver needles with round heads, a small plain brass incense burner full of gray ash with one stick of incense, and a plain brass spoon` | 무늬 · 한자 문양 없음, 난초 봉오리 손잡이, 은침의 차가운 은빛, 놋쇠의 따뜻한 금빛 |
| 12 | `PROP_DUTYBOARD` | 필수 | 16:9 | `the same small plain wooden duty board shown twice side by side on a plain light-gray background, with three rows of small wooden pegs and blank finger-sized wooden tags on colored cords (spring green, gray-blue, faded brown, off-white): on the left the spring-green-cord tag hangs on the top row; on the right the same board with the spring-green-cord tag moved to the middle row, all other tags unchanged` | 판 · 패 어디에도 글자 · 숫자 · 기호 · 새김 없음. 끈 색에 보라 · 빨강 없음 |
| 13 | `PROP_KEEPSAKES` | 필수 | 16:9 | `four objects in a row on a plain light-gray background, evenly lit: a jade-teal carved butterfly norigae ornament with a red knot and a short red tassel; a palm-sized carved honey-colored wooden tiger toy with dark brown stripes and one chipped ear; a large brass ladle with a long wooden handle; a sheathed hwando sword with a black scabbard, brass fittings and a dark-brown cord-wrapped grip` | 노리개 = 청록 옥(파랑 · 보라 아님), 호랑이 = 나무 조각(인형 아님), 칼은 칼집 속 |
| 14 | `LOC_L1_TASTING_plate` | 권장 | 16:9 | style-bible LOC_L1_TASTING 전체 토큰 + 점심 수라상 문장 + VIEW_L1_MAIN, `an empty room, no people`, LIGHT_L1_NOON | 방향: 창호지 = 화면 왼쪽, 출입문 = 오른쪽 벽, 상 가운데 왕자 국그릇(난초 손잡이), 앞 모서리 향로 |
| 15 | `LOC_L2_R_plate` | 권장 | 9:16 | style-bible LOC_L2_CORRIDOR 전체 토큰 + VIEW_R, `no people`, LIGHT_L2_MORNING, 당번 판의 연두 끈 패는 위 줄 | 기둥 = 화면 왼쪽 1/3, 기둥의 당번 판, 기둥 오른쪽 처마의 꺼진 등롱, 오른쪽 숙소 문들, 오른쪽 위의 조용한 회벽 · 처마 밑. **P05 · P48 · P12 · P47의 기준** |
| 16 | `LOC_L3_HERBSTORE_plate` | 권장 | 16:9 | style-bible LOC_L3_HERBSTORE 전체 토큰 + VIEW_L3_MAIN, `no people`, LIGHT_L3 | 서랍장 = 오른쪽, 빈 흰 이름표, 열쇠 구멍 두 개 서랍(작게), 왼쪽 위 창빛, 꽃 없는 약초 다발 |

- 사용자 부담: 필수 13장 + 권장 3장 = 최대 16장. 플레이트를 빼면 패널 프롬프트의 LOC 문장만으로 간다(일관성이 조금 약해진다). **LOC_L2_R_plate는 강하게 권장**한다: 반전의 핵심인 R-WIDE(P05 = P48)가 같은 회랑으로 보여야 하기 때문이다(concept §12-3). ref-sheet-artist가 handoff에 넣을지 정하고 이유를 남긴다.
- flow-handoff의 "주요 인물 2블록" 원칙은 채령 · 왕자 · 민 상궁 · 백 감찰에 적용한다. 홍 숙수는 1블록(§5 이유).

### 8-3. 어떤 패널에 무엇을 첨부하나 (prompt-smith 참고 · 3장 이내)

| 레퍼런스 | 주로 붙일 패널 |
|---|---|
| `CHAERYEONG_*` | 그녀의 얼굴 · 몸이 보이는 모든 컷. 손만 보이는 컷(P14 · P15 · P23 · P26 · P28–P30)은 소품 카드가 우선 |
| `PRINCE_*` | §0-1 등장 패널. 손만(P25 · P32)은 turnaround만 |
| `MIN_*` | §0-1 등장 패널. 원경(P11) · 작게(P14 · P31)는 turnaround만 |
| `BAEK_*` | §0-1 등장 패널. 손만(P23)은 turnaround만 |
| `HONG_turnaround` | P13 (P43 실루엣에도 붙여 체형만 맞춘다) |
| `PROP_HANKY_pair` | **P08 · P50 필수**, P48 · P55 권장 |
| `PROP_TABLEWARE` | P02 · P14 · P15 · P16 · P19 · P20 · P26 · P28 · P29 · P30 |
| `PROP_DUTYBOARD` | P05 · P09 · P48 (P12 배경이 크면) |
| `PROP_KEEPSAKES` | P11 · P12 · P57(노리개) · P03 · P24(호랑이가 크면) |
| 장소 플레이트 | L1 → P01 · P13 · P27 · P31 · L2 R → P05 · P12 · P43 · P47 · P48 · L3 → P33 · P34 · P42 |
| 원본 패널 PNG | 고정 앵글 반복 컷(style-bible §5-3): **P48 ← P05 · P50 ← P08 · P24 ← P04 · P58 ← P05** |

### 8-4. 시트 확정 검수 (사용자 렌더 후 · ref-sheet-artist + art-director 기준)

- [ ] 한 카드 안의 모든 그림이 **같은 사람**(얼굴형 · 머리 · 체형)
- [ ] 식별 표식이 맞는 쪽: 채령 노리개 RIGHT 허리 · 민 상궁 흰 머리 LEFT 관자놀이 · 백 감찰 흉터 RIGHT 턱선 아래 · 환도 LEFT 허리 · 홍 숙수 국자 RIGHT 손
- [ ] 주색: 연두 + 남색 / 진홍 + 금 테두리 / 와인 자두(**보라 아님**) / 검정 / 황토
- [ ] **실루엣 검사:** 다섯 턴어라운드를 나란히 놓고 그림자만으로 구별된다(땋은 머리 / 쌍상투 작은 몸 / 낮은 쪽머리 + 긴 당의 / 넓은 갓 + 칼 / 넓은 체구 + 머릿수건 + 국자)
- [ ] 키 순서: 백 > 홍 ≈ 민 > 채령 > 왕자
- [ ] PROP_HANKY_pair: 자두색 소매 ≠ 연보라 얼룩(한눈에 다른 계열), 얼룩은 한 점
- [ ] 연보라는 PROP_HANKY_pair 얼룩 외에 어디에도 없음
- [ ] 글자 · 라벨 · 숫자 · 한자 문양 없음
- [ ] 통과한 시트 목록은 `refs/INDEX.md`(ref-sheet-artist)

---

## 9. 패널 검수표 (panel-validator · 인물 축)

| 인물 | 반드시 맞아야 하는 것 | 실패 예 |
|---|---|---|
| CHAERYEONG | 한 갈래 땋은 머리 + 붉은 댕기 · 앞머리 없음 · 크게 뜬 눈 · 연두 저고리 + 남색 치마 · RIGHT 허리 옥빛 노리개 | 두 갈래 · 올림머리, 노리개 LEFT, 보라 노리개, 반쯤 감긴 눈, 주근깨 |
| PRINCE | 쌍상투 + 붉은 끈 · 진홍 도포 + 금 테두리 한 줄 · 나무 호랑이 · 가장 작은 몸 | 상투 하나, 왕관, 주황 · 분홍 도포, 봉제 인형 |
| MIN | 낮은 쪽머리 + 가로 은비녀 하나 · LEFT 관자놀이 흰 머리 · 와인 자두 당의 · 연청 손수건 · 같은 온화한 미소 | 보라 당의, 흰 머리 RIGHT, 비녀 여러 개, 악역 표정, 예약 패널 밖의 얼룩 |
| BAEK | 넓은 갓 + 호박 구슬 갓끈 · RIGHT 턱선 흉터 · 검은 철릭 · LEFT 허리 칼집 환도 · 가장 큰 몸 | 갓 없음, 흉터 왼쪽 · 눈썹, 칼을 뽑음, 미남 귀공자 얼굴 |
| HONG | 흰 머릿수건 · 넓은 체구 · 황토 앞치마 + 팔토시 · RIGHT 손 놋 국자 | 머릿수건 없음, 날씬함, 국자 LEFT |
| 엑스트라 | 회청 · 회색, 원경, 얼굴 디테일 없음 | 이름 있는 인물 색, 얼굴 클로즈업 |

---

## 10. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-17 | characters §8 v1 토큰을 그대로 옮김(FULL). SHORT · 상태 토큰 · 표정 영문 추가(채령 8 · 왕자 6 · 민 6(모두 같은 미소의 변주) · 백 6 · 홍 2). 소품 토큰 · 상태 타임라인. 레퍼런스 카드 16장 사양(필수 13: 인물 9 + 소품 4, 권장 장소 플레이트 3) |

- 새 인물은 이 문서에 섹션만 추가하고 글로벌 규약(style-bible)은 유지한다. 외형 토큰(§1–§5 FULL)은 characters §8 [고정]과 같아야 한다.

---

## 11. 원 의관 — WON (EP03 추가 · 2026-11-19)

- 작성: art-director · 기준일 **2026-11-19** · EP03 준비(Flow-by-hand + Khmer edition) · **이 절만 덧붙였다. §0~§10(EP01 v1)은 한 글자도 바꾸지 않았다.**
- 입력: `02_story/characters.md` **§11**(§11-9 외형 토큰 v1 · §11-10 소품 · 엑스트라 · §11-11 구별 점검 · §11-4 연출 규칙), `03_episode/ep03_beatsheet.md`(§0-1 · §0-4 · §4 · §5 · §7), `03_episode/ep03_script_final.md`(원 의관 등장 패널 · 지문)
- 패널 번호는 **비트시트 · 대본 최종본 기준 추정**이다. panel-director가 EP03 샷리스트에서 확정한다.
- 공통 규칙은 §0 그대로: 좌우 = **인물 자신의 좌우**, FULL = 그 컷의 주인공, SHORT = 나머지, 토큰 이름은 프롬프트에 쓰지 않는다.

### 11-0. EP03 캐스트 요약 (이 회차에 등장하는 사람만)

| ID | 이름 (KM, glossary) | 주색 | 식별 표식 · 고정 소품 (좌우) | EP03 등장 패널 (추정) | 레퍼런스 |
|---|---|---|---|---|---|
| **WON** | 원 의관 (វ៉ុន · 부를 때 លោកគ្រូពេទ្យ) | **회녹** `#687A62` | 짧고 단정한 검은 턱수염 + 콧수염(이름 있는 인물 중 유일) · 검은 사모(뒤쪽 짧고 둥근 날개 2개) · 닫힌 밤색 약상자 = **LEFT 손** | P06 · P07 · P09 · P10 · P12(뒷모습/가장자리, 얼굴 밖) · P14(가장자리, 목소리) · P25(가장자리, 얼굴 반 이하) · P28(가장자리) · P35 · P42(뒷모습) | **turnaround만** (§11-7) |
| EXTRA-MED | 내의원 약동 (이름 없음, 대사 없음) | 회녹 (같은 색) | 날개 없는 검은 천 모자 · 수염 없음 · 약상자 없음 | P06(뒤, 쟁반) · P07(문밖으로 물러남) · P42(문밖, 빈 쟁반을 받음) | 없음 (토큰만) |
| (기존) CHAERYEONG · PRINCE · MIN · BAEK | §1–§4 그대로 | | **EP03 상태 변화 1건:** 채령 노리개가 허리에 없다(§11-6) | | 기존 시트 재사용 |

- 홍 숙수 EP03 미등장. 나인 엑스트라(P38–P39)는 §6 토큰(회청 · 얼굴 숙임).

---

### 11-1. identity · 레퍼런스

- identity_tag: `WON` · 41세 남 · 172cm · 내의원 의관(왕자의 탕약 · 보약 · 진맥 담당)
- 레퍼런스: `refs/WON_turnaround.png` (EP03 패널 전 확정 필수 · characters §11-12)
- **가면 규칙 [고정, characters §11-4]:** 외형에 의심의 표지 0개. 독자가 그림만 보고 "좋은 어른"으로 읽어야 한다. 의심은 이야기에서만 온다.

**FULL (characters §11-9 영문 한 줄 토큰 원문 그대로):**
```
Physician Won, a 41-year-old East Asian royal palace physician in a fictional historical Korean-style court; slender, long-limbed 172 cm build with narrow shoulders, leaning slightly forward toward whoever he is talking to; black hair in a neat topknot under a black official samo hat with a rounded crown and two short rounded wings at the back; large round warm dark-brown eyes with double eyelids, soft gently arched eyebrows, a long oval face with a high forehead; a short neat black beard closely covering the chin and a short trimmed mustache, scholarly and gentle; clear light neutral skin with faint smile lines at the eyes; an ankle-length round-collared official robe (danryeong style) in a dull muted gray-green (sage-gray, like dried sage leaves) with wide plain sleeves, no pattern, no badge, no cuff band, a white inner collar showing at the neck, a thin dark-brown sash, black shoes; he always carries a closed dark chestnut-brown wooden medicine box with a plain cotton strap handle and no metal fittings in his LEFT hand or sets it down beside him; plain hands, no rings; default expression a warm, kind smile with lips slightly parted, eyes wide and soft, eyebrows lifted with gentle concern; bright, friendly and trustworthy, NOT sinister, NOT narrow-eyed, NOT smirking; no other jewelry; no text, no letters, no writing anywhere
```

**SHORT** (characters §11-9에 SHORT 원문이 없어 FULL에서 줄였다. 새 사실 없음 · 단어는 FULL과 같다):
```
Physician Won (slender, long-limbed 41-year-old palace physician, black official samo hat with two short rounded wings at the back, a short neat black beard and short trimmed mustache, large round warm dark-brown eyes, a warm kind smile, an ankle-length plain round-collared robe in dull muted gray-green (sage-gray, like dried sage leaves) with no cuff band, a thin dark-brown sash, a closed dark chestnut-brown wooden medicine box in his LEFT hand, plain hands, no rings)
```

**KO 한 줄 토큰 (검수 대조용, characters §11-9 원문):** `원 의관/41세 남/172cm 가늘고 긴 몸, 좁은 어깨, 상체를 살짝 숙인 자세/검은 상투+검은 사모(둥근 모정, 뒤쪽 짧고 둥근 날개 2개)/둥글고 큰 쌍꺼풀의 따뜻한 짙은 갈색 눈, 부드럽게 휜 눈썹, 갸름한 긴 얼굴/짧고 단정한 검은 턱수염+짧은 콧수염/맑고 밝은 뉴트럴 피부, 눈가 옅은 웃음 주름/회녹색 단령형 관복(무늬 없음, 소매 끝 띠 없음)+흰 속깃+가는 짙은 갈색 띠+검은 신/왼손에 짙은 밤색 나무 약상자(닫힘, 금속 없음)/입술을 살짝 연 따뜻한 미소/글자 없음(no text)`

**불변 (일관성 핵심):** 가늘고 긴 몸 · 좁은 어깨 · 살짝 숙인 상체 / **검은 사모**(둥근 모정 + 뒤쪽 **짧고 둥근** 날개 2개) / **짧고 단정한 검은 턱수염 + 짧은 콧수염** / 크고 둥근 쌍꺼풀의 따뜻한 짙은 갈색 눈 + 부드럽게 휜 눈썹 / **회녹 단령**(무늬 · 흉배 · 소매 끝 띠 없음) + 흰 속깃 + 가는 짙은 갈색 띠 + 검은 신 / **LEFT 손 닫힌 밤색 약상자**. 몸에 금속 0.

---

### 11-2. 표정 (가변 · EP03에 필요한 것만)

EP03의 그의 얼굴은 **모두 같은 따뜻한 미소의 변주**다(가면의 완성 = 엎어도 웃음). 화난 얼굴 · 굳은 얼굴 · 의미심장한 정지 · 정면 극단 클로즈업은 EP03에 없다(beatsheet §0-4 · §7).

| # | 상황 (패널) | 영문 | 거리 |
|---|---|---|---|
| ① | 디폴트 · 들어서며 인사 · 탕약을 내려놓음 (P06 · P07) | `a warm, kind smile with lips slightly parted, eyes wide and soft, eyebrows lifted with gentle concern` (FULL 디폴트 그대로) | 미디엄 풀샷 · 투샷 |
| ② | 아이 눈높이로 무릎 굽힘 (P09) | `the same warm smile, eyes soft and level with the child's, kneeling down with his hands resting on his own knees` | 투샷 |
| ③ | 꿀 약속 · 손가락 하나 (P10) | `a warm, playful smile, eyes curving gently, one finger raised as if making a promise to a child` | **3/4 측면 바스트 (EP03 그의 가장 큰 얼굴)** |
| ④ | 고마운 듯 밝은 미소 (P28, 가장자리) | `a bright, grateful smile toward the kneeling maid` | 가장자리 · 작게 |
| ⑤ | 화내지 않고 나지막이 웃으며 아이 손을 살핌 (P35) | `a soft, low laugh, gently concerned, looking down at the boy's hands without touching them` | 3/4 측면 미디엄 |
| ⑥ | 정중히 묻는 옆선 (P12 · P25) | `politely asking, head turned slightly away, only the edge of his face or the back of his samo hat visible` | 뒷모습 · 가장자리(얼굴 반 이하) |

- **상태 토큰** (얼굴이 작거나 없는 컷):

| 상태 | 영문 | 패널 |
|---|---|---|
| 탕약을 넘겨받음 | `stepping in through the sliding door and taking the small wooden tray with the lidded tonic bowl into his own two hands from a junior attendant behind him; his closed medicine box has been set down on the floor at his LEFT side` | P06 |
| 탕약을 상에 내려놓음 | `carefully setting the small wooden tray with the lidded tonic bowl down on the low lacquered table with both hands` | P07 |
| 무릎 굽힘 (아이 눈높이) | `kneeling down to the little prince's eye level, his hands on his own knees, the wide gray-green sleeves resting on the floor` | P09 · P35 |
| 가장자리 · 목소리 | `only the edge of a gray-green sleeve and the black samo wing at the side of the frame` | P14 · P25 · P28 |
| 뒷모습 퇴장 | `seen from behind at the doorway, bowing slightly to the prince, the closed chestnut-brown medicine box in his LEFT hand (on the left side of the image when seen from behind), the two short rounded wings of his black samo hat` | P42 |

- **연출 규칙 [고정, characters §11-4 · beatsheet §0-4]:** 밝은 빛 · 눈높이 · 아이와 같은 높이. **로우 앵글 · 얼굴 반 그늘 · 역광 실루엣 금지.** P09 "낮은 앵글"은 **무릎 꿇은 아이 눈높이의 카메라**라는 뜻이다(그를 올려다보는 앵글이 아님).
  - **P06 역광 주의:** 그는 화면 오른쪽 벽의 문으로 들어온다. 문밖 빛이 그의 등 뒤에서 실루엣을 만들면 REGEN. 얼굴은 **화면 왼쪽 창호지의 아침빛**을 정면에 가깝게 받고, 문 쪽은 밝지 않게: `his face and robe lit softly from the rice-paper doors on the left; the doorway behind him is not glowing`.
- **EP03에서 쓰지 않는 것:** 소매로 입가를 누르는 버릇(characters §11-7, 후보 · 그는 EP03에서 맛보지 않는다) · 약상자 여는 동작 · 수상한 시선 · 의관 리액션 클로즈업.

**금지 · 드리프트:** 수염 없음 · 긴 수염 · 콧수염만(악당형) · 염소수염 / 사모 없음 · 갓 · 날개가 길고 가는 사모 / 관복에 무늬 · 흉배 · 소매 끝 띠 · 금속 장식 / 회녹이 연두 · 올리브 · 청록 · 민트 · 회청으로 / 가는 눈 · 비뚤어진 웃음 · 반그늘 얼굴 · 검은 장갑 · 반지 / 약상자가 열림 · RIGHT 손 · 금속 장식 · 붉은 옻칠 / 백 감찰보다 크거나 넓어 보임.

---

### 11-3. 소품 토큰 (원 의관 · EP03 탕약 · 천)

> 모두 **무늬 · 글자 · 인장 · 종이 표지 없음.** 영문 그대로 쓴다.

| 토큰 | 영문 | 쓰는 곳 · 상태 |
|---|---|---|
| `PROP_MEDBOX` (= characters PROP-MEDBOX) | `a closed dark chestnut-brown wooden medicine box with a plain cotton strap handle, no metal fittings, lid shut` | 원 의관 전신 · 미디엄 컷. **LEFT 손** 또는 내려 둘 때 **바닥, 그의 LEFT 곁**. 옻칠 상(`#6B2A1F`) 위에 올리지 않는다(색이 묻힘, 장판 위에 둔다). **EP40 전 열린 모습 · 내부 클로즈업 금지** |
| `PROP_TONIC_SET` (닫힘) | `a small plain unlacquered pale wooden tray carrying one plain white porcelain lidded tonic bowl; the plain lid is tied down with a thin plain dull gray-green cotton cord in a simple knot on top; no seal, no paper tag, no pattern, no writing; a little steam escaping from under the lid` | P06–P14. 김 = 시계(P06–P14 짙게) |
| `PROP_TONIC_OPEN` | `the white porcelain tonic bowl open on its small pale wooden tray, the lid set beside it, the thin gray-green cord lying untied in loose loops next to the lid; dark brown herbal decoction inside, no purple tint, no sheen` + 김 상태 | P15 · P21(김 가늘어짐) · **P22 인서트**(사람 · 손 없음, 풀린 매듭이 "봉해서 곧장 왔다"의 근거) · P24(한 가닥) · P28(거의 없음) |
| `PROP_DECOCTION` | `dark brown herbal decoction, no purple tint, no sheen` | P15–P33 전부. 쏟아짐(P32) · 웅덩이(P33)도 **갈색뿐** |
| `PROP_WIPECLOTH` (L1, 갈색) | `a large rectangular rough-woven unbleached off-white hemp wiping cloth, about the length of a forearm, coarse visible weave, no pattern, no embroidery, no writing` + P37 `soaked with dark brown decoction stains, brown only` | P36 · P37 · P38 · P39. **연보라 0** |
| `PROP_LAUNDRY_LINE` | `a plain twisted rope tied between two of the courtyard-side pillars, with six to eight plain white and off-white cloths draped over it, no clothespins, no pattern, no writing` | P43 · P47–P55(흐림) · P56(그 천이 걸렸던 자리가 **비어 있음**: `one empty gap on the line, the rope sagging where a cloth used to hang`) |
| `PROP_WIPECLOTH_LILAC` ● | `the same large rough-woven unbleached off-white hemp cloth, washed in lye: the brown stains are gone, and in its center remains one soft, faint whitish-lilac blot, soft-edged like a washed-out watermark` + 예약색 문장 `the only pale lilac in the image is that one blot in the center of one hemp cloth` | **P44 · P45 · P58만** (§11-5) |
| `PROP_WIPECLOTH_FOLDED` | `the same rough off-white hemp cloth folded in his large hand with the plain folded side outward, no color visible on it` | P57 (색 읽히지 않음 = 연보라 0) |
| `PROP_NORIGAE_WRAP` | `a small palm-sized bundle wrapped in smooth, fine, pure white cotton, tucked inside the front fold of her spring-green jacket on her LEFT chest; only a tiny pure white corner shows between the jacket's front edges` | P02(모서리 또렷이) · P01 · P60(오른손 아래, 모서리 안 보여도 됨). **순백 유지, 보라 기운 금지(EP30 회수 전까지)** |
| `PROP_HONEY` (참고) | characters §11-10 원문 | **EP05용.** EP03에 그리지 않는다(꿀은 대사로만) |

- **쟁반 연속성 [art-director 결정 · panel-director 확인]:** 비트시트 P06("약동의 쟁반에서 그릇을 넘겨받는다")과 P22("쟁반 위 열린 그릇") · P42("빈 쟁반은 약동이 받는다")를 한 줄로 잇기 위해, **탕약 그릇은 작은 나무 쟁반째 한 세트**로 다룬다: P06 약동이 받쳐 든 쟁반(그릇 포함)을 의관이 두 손으로 받는다 → P07 쟁반째 상에 → P22 쟁반 위 → P32 왕자가 그릇만 들고 엎음 → P42 문밖 약동이 빈 쟁반을 받는다. 쟁반은 **밝은 무칠 나무**라 짙은 옻칠 상과 구별된다.
- **그릇 재질 [결정]:** 흰 사기 + 무지 뚜껑. 수라간의 놋그릇 · 왕자 국그릇(난초 봉오리 손잡이)과 한눈에 다르게(내의원 그릇). 기미 그릇(작은 흰 사기 접시)보다 크고 **뚜껑이 있다**.
- **매듭 끈 색 [결정]:** 회녹 무명 끈 = "내의원에서 봉해 온 것"을 글자 없이 말한다. 회녹은 **기관의 색**(characters §11-9 · series-arc §8)이고 EP05 PROP-HONEY의 회녹 천과 같은 언어다. 의관 개인의 표지가 아니다. 끈은 가늘게(면적 작게).

---

### 11-4. 내의원 약동 — EXTRA-MED (이름 없음 · 레퍼런스 시트 없음)

**토큰 (characters §11-10 원문):**
```
a junior palace medical attendant in the same dull muted gray-green (sage-gray) plain robe, simple black cloth cap (no hat wings), seen from behind or far away, face not detailed, carrying a small tray; no text
```

| 패널 | 상태 (덧붙임) |
|---|---|
| P06 | `standing just behind the physician in the doorway, holding out the small wooden tray with both hands, seen from behind or from the side, head bowed, face not visible` |
| P07 | `stepping back out through the doorway to wait outside, seen from behind, small` |
| P42 | `outside the doorway receiving an empty small wooden tray, small and out of focus, face not visible` |

- 구별 [고정, characters §11-10]: **날개 없는 검은 천 모자 · 수염 없음 · 약상자 없음 · 얼굴 디테일 없음.** 원 의관보다 작고 늘 그의 뒤 · 문밖. 같은 컷에서 두 사람의 회녹은 같은 색이어도 된다(기관의 색) — 구별은 모자 · 수염 · 약상자 · 거리로 한다.
- 원 의관 레퍼런스를 약동에게 쓰지 않는다. 약동이 사모 · 수염을 얻으면 REGEN.
- §6의 "엑스트라는 이름 있는 인물의 색 금지"에서 **내의원 엑스트라만 예외**(characters §11-10 예외 규칙).

---

### 11-5. 색 구별 규칙 (EP03 · panel-validator 기준값)

**인물 색 — 회녹은 다른 어떤 주색과도 한눈에 다른 계열이어야 한다:**

| 비교 | hex | 구별 기준 | Flow가 흐를 때 |
|---|---|---|---|
| **원 회녹** vs **채령 연두** | `#687A62` vs `#9CC46A` | 회녹 = 채도 낮고 어둡고 탁한 마른 세이지 / 연두 = 밝고 노란 기 강한 고채도. 같은 컷(P06 가장자리 · P28)에서 둘이 "같은 초록 집안"으로 보이면 실패 | 관복이 연두 · 올리브로 밝아지면 `dull muted gray-green (sage-gray, like dried sage leaves)`를 앞으로 당긴다 |
| **원 회녹** vs **예약색 연보라** | `#687A62` vs `#C9B6E4` | 색상 · 명도 모두 반대편. 그의 몸 · 소품 어디에도 보라 기운 0 | 그림자가 보라로 끼면 REGEN |
| **원 회녹** vs **민 와인 자두** | `#687A62` vs `#5A1F35` | 녹 계열 vs 붉은 계열. P07 투샷에서 나란히 선다 | 자두가 보라로 가면 §3 규칙(REGEN) |
| **원 회녹** vs **민 손수건 연청** | `#687A62` vs `#BFD8D2` | 손수건은 훨씬 밝은 청자빛, 회녹은 어둡고 파란 기 없음 | — |
| **원 회녹** vs **엑스트라 회청** | `#687A62` vs `#7F8C99` | 회녹 = 노란 기 도는 **따뜻한** 회녹 / 회청 = 차가운 파란 회색 | L1 아침빛(연청 기운)에서 관복이 회청으로 식으면 `sage` · `warm` 쪽으로 당긴다 |
| **원 회녹** vs **약재고 올리브** | `#687A62` vs `#8A8A5C` | EP03은 L3가 없다(참고만, characters §11-9) | — |
| **약상자 밤색** vs **옻칠 상** | `#5B3A26` vs `#6B2A1F` | 가깝다 → 약상자는 상 위에 두지 않는다(§11-3) | — |

- 금속 언어(§8-8 · characters §11-11): 그의 몸 · 약상자 · 탕약 그릇에 **금속 0**. EP03 화면의 놋쇠는 향로 · 은침 받침 · 왕자 그릇 쪽 기존 소품뿐.

**연보랏빛 = 잿물로 빤 삼베 행주, 정확히 3패널 [고정 · beatsheet §0-4 · §6-5]:**

| 패널 | 무엇 | 그리는 법 |
|---|---|---|
| **P44** | 빨랫줄의 행주 한 장, 한가운데 엷은 번짐 (채령 어깨 너머 POV) | 작지만 분명히. 다른 천 5~7장은 흰색 · 미색 그대로 |
| **P45** | 같은 번짐 익스트림 클로즈업, 천 결이 보이게 | 갈색은 다 빠지고 연보라만, EP01 손수건 얼룩과 같은 결(물자국처럼 가장자리 흐림) |
| **P58** | 백 감찰이 펼쳐 든 같은 천 | **P45와 번짐 크기 · 위치(한가운데) · 색 일치.** P58 카드에 P45 PNG 첨부 권장(style-bible §5-3 R-HAND와 같은 방식) |

- 그 밖의 **57패널 연보라 0**: 탕약 · 쏟아진 탕약 · 웅덩이 · L1 행주(P36–P39, 갈색뿐) · P43(먼 거리, 미색) · P46(천 프레임 밖) · P47–P55(빨랫줄 흐림) · P56(천 없음) · P57(접힌 면) · 노리개 싸개 · 손수건(STAIN 0, 전 패널 CLEAN) · 의상 · 노을 · 그림자.
- **저녁빛 속의 연보라:** L2 저녁(LIGHT_L2_EVENING)의 주황빛은 미색 삼베를 주황 크림으로, 연보라 번짐을 분홍 · 회색으로 바꾸기 쉽다. P44 · P45 · P58에는 예약색 문장 뒤에 `even in the orange evening light the blot still reads as a cool, very pale lilac, clearly different from the warm cream of the cloth, not pink, not gray`를 덧붙인다. 분홍 · 회색 · 진보라로 보이면 REGEN.
- **해가 더 기운 P53–P60:** 새 조명 토큰을 만들지 않는다(같은 장소 · 같은 시간대, EP02 §D-6 "변주구" 방식). LIGHT_L2_EVENING 원문 뒤에 `— the sun now lower, the orange deepening toward warm red-orange, very long shadows across the veranda; still no pink or purple in the sky or shadows`를 덧붙인다(panel-director가 샷리스트에 변주구로 등록). 붉은 저녁이 보라 · 분홍으로 흐르면 REGEN(style-bible §2-3 "노을은 보라로 흐르면 안 된다").

**흰 천 두 종류 — 절대 혼동 금지 [고정 · beatsheet §4 · §7]:**

| | 노리개 싸개 (`PROP_NORIGAE_WRAP`) | 행주 (`PROP_WIPECLOTH`) |
|---|---|---|
| 색 | **순백** (`#FAFAF7` 근처) | **미색 · 생삼베색** (`#E3D9C2` 근처) |
| 결 | 매끈하고 고운 무명 | 거칠고 굵은 삼베 결이 보인다 |
| 크기 | 손바닥만 한 작은 꾸러미 | 팔뚝 길이의 큰 직사각형 (손수건보다 훨씬 큼) |
| 자리 | 채령 저고리 앞섶 안, LEFT 가슴 (P01 · P02 · P60) | L1 상 가장자리 → 바구니 → 빨랫줄 → 감찰 손 |
| 보라 | **0** (EP30 회수 전까지 순백) | P44 · P45 · P58에서만 한가운데 번짐 |

- 민 상궁 손수건(접은 연청 무명, 손바닥만 함)은 세 번째 천이다. 흰색 · 미색으로 그리지 않는다(§3).

---

### 11-6. 좌우 · 상태 검수표 (panel-validator · EP03)

좌우는 **인물 자신의 좌우**. 정면 그림에서는 화면 반대편, 뒷모습에서는 같은 편.

| 인물 | 항목 | 맞는 쪽 · 상태 | 정면에서 보이는 자리 | 실패 = REGEN |
|---|---|---|---|---|
| WON | 약상자 | **LEFT 손**에 듦 / 내려 두면 바닥, 그의 **LEFT 곁** | 화면 오른쪽 | RIGHT 손 · 열림 · 금속 장식 · 상 위 |
| WON | 탕약 세트 | P06 · P07은 **두 손**(약상자는 내려 둠) | — | 한 손으로 그릇 · 약상자를 든 채 쟁반 |
| WON | 수염 | 짧은 턱수염 + 짧은 콧수염, 좌우 대칭 | — | 수염 없음 · 길다 · 콧수염만 · 염소수염 |
| WON | 사모 날개 | 뒤쪽 **양옆** 짧고 둥근 날개 2개 | 정면에서 머리 뒤로 양쪽 끝이 살짝 보임 | 날개 없음 · 길고 가는 날개 · 갓 |
| WON | 소매 · 손 | 양쪽 소매 끝 띠 없음, 양손 반지 · 흉터 · 얼룩 없음 | — | 소매 띠 · 반지 · 장갑 |
| WON | 키 · 체형 | 백(183) > **원(172)** > 민(158) > 채령(155) > 왕자(120). 가늘고 좁은 어깨 | — | 백보다 크거나 넓음 |
| EXTRA-MED | 구별 | 날개 없는 검은 천 모자 · 수염 없음 · 약상자 없음 · 얼굴 없음 | — | 사모 · 수염 · 약상자 · 얼굴 디테일 |
| CHAERYEONG | **노리개 (EP03 상태)** | **허리에 없음.** 흰 천 꾸러미째 저고리 앞섶 안 **LEFT 가슴**, 긴장하면 **RIGHT 손**이 그 위에 얹힘(P01 · P02 · P60) | 꾸러미 = 화면 오른쪽 가슴 쪽, 얹은 손 = 화면 왼쪽 손 | 허리에 노리개 · 청록 옥이 보임 · 싸개가 미색 · 보라 |
| MIN | 손수건 | **RIGHT 손**, 전 패널 CLEAN(STAIN 0) | 화면 왼쪽 | 얼룩이 보임 |
| MIN | 흰 머리 | **LEFT 관자놀이** | 화면 오른쪽 | RIGHT |
| BAEK | 흉터 · 환도 | 흉터 **RIGHT 턱선 아래** · 환도 **LEFT 허리** | 흉터 화면 왼쪽 · 환도 화면 오른쪽 | 뒤집힘 · 칼을 뽑음 |
| BAEK | 천 (P57 · P58) | P57 접힌 면 바깥(색 없음) → P58 펼쳐 든 손 + 연보라 번짐 | — | P57에 연보라 보임 |

- **원 의관 연출 검수:** 로우 앵글 · 얼굴 반 그늘 · 역광 실루엣 · 의미심장한 클로즈업 = REGEN(characters §11-4). P06 문빛 역광 주의(§11-2).
- **실루엣 6명 검사 [characters §11-11]:** 땋은 머리 / 쌍상투 작은 몸 / 낮은 쪽머리 + 긴 당의 / 넓고 납작한 갓 챙 + 칼 / 넓은 체구 + 머릿수건 + 국자 / **둥근 사모 + 뒤쪽 작은 날개 2개 + 발목까지 오는 길고 가는 관복 + 손에 든 네모 상자**. 갓(넓은 원반)과 사모(둥근 모정 + 날개)가 그림자로도 달라야 한다.

---

### 11-7. 레퍼런스 시트 사양 (ref-sheet-artist · EP03 추가 카드 1장)

**판단: `WON_turnaround` 1장만 만든다. `WON_expressions`는 EP03에 만들지 않는다.**
- 이유: EP03에서 그의 얼굴은 모두 **같은 따뜻한 미소의 변주**(§11-2 ①–⑤)이고, 가장 큰 얼굴이 P10의 3/4 바스트다. 정면 극단 클로즈업은 금지(beatsheet §7). 서로 다른 표정의 얼굴 컷이 3개 이상 필요하지 않다. 대신 turnaround에 **얼굴 클로즈업 2칸**(정면 디폴트 · 3/4 꿀 약속 미소)을 넣어 P10 · P35를 덮는다.
- `WON_expressions`는 표정 폭이 커지는 회차(EP25 "얼굴을 보고 멈춘다" 이전, 또는 EP09 · EP10 등장이 커질 때) art-director가 다시 판단한다.
- 사용자 부담: EP03 새 카드 **1장**. 기존 16장 사양(§8)은 바뀌지 않는다(EP01 시트가 아직 없으면 그것이 먼저).

| # | 카드 | 필수 | aspect | 레이아웃 (영문 핵심) | 반드시 보일 것 |
|---|---|---|---|---|---|
| 17 | `WON_turnaround` | 필수 (EP03 패널 전) | 16:9 | `four full-body standing views of the same slender middle-aged man side by side (front, three-quarter turned to his left, left profile, back), plus one full-body side view of him kneeling down on one knee as if to a small child's eye level, plus two head-and-shoulders close-ups: one front view with his default warm smile, one three-quarter view with a warm, playful smile; in every standing view he holds a closed dark chestnut-brown wooden medicine box in his LEFT hand` | 뒷모습 · 측면: 사모 뒤쪽 **짧고 둥근 날개 2개**. 클로즈업: 짧은 턱수염 + 콧수염, 크고 둥근 쌍꺼풀 눈. 정면: LEFT 손 약상자 = 화면 오른쪽(`which appears on the right side of the image in front views`), 왼쪽 측면에서 분명히. 관복 = 마른 세이지 회녹(연두 · 올리브 · 회청 아님), 무늬 · 흉배 · 소매 띠 · 금속 0. 반지 없음. 약상자 닫힘. **모든 그림이 다정한 얼굴** |

- 프롬프트 = STYLE_REF(style-bible §1) + 위 레이아웃 + **FULL 토큰(§11-1)** + 반드시 보일 것 + 마지막 줄 `Avoid: any text, labels, speech bubbles, watermark.`
- 배경 · 조명은 §8-1 공통 조건 그대로(민무늬 밝은 웜그레이, 고른 스튜디오 조명). **연보라 · 탕약 · 쟁반 · 약동은 카드에 넣지 않는다**(소품은 약상자만, 사람은 원 의관 한 명).
- 출력: `_workspace/04_visual/refs/WON_turnaround.png` → `refs/ref_prompts.md`에 `### WON_turnaround` 블록 추가(기존 블록은 건드리지 않는다).
- **색 대조 확인은 카드 밖에서 한다:** 렌더 후 art-director · ref-sheet-artist가 `WON_turnaround`를 `CHAERYEONG_turnaround`(연두) · `MIN_turnaround`(자두 · 연청 손수건) · `PROP_HANKY_pair`(연보라 얼룩 견본)와 **나란히 놓고** §11-5 표를 본다. 카드 안에 색 견본 칸 · 연보라를 넣지 않는다(§8-1 7: 레퍼런스에 예약색 없음).

**첨부 규칙 (prompt-smith · 패널당 3장 이내):**

| 레퍼런스 | EP03 패널 |
|---|---|
| `WON_turnaround` | P06 · P07 · P09 · P10 · P35 (P28 · P42는 크면). P12 · P14 · P25(가장자리 · 얼굴 밖)는 붙이지 않아도 된다 |
| (붙이지 않음) | 약동(EXTRA-MED) 단독 · **EP12 소매 컷(PROP-SLEEVE-GG)에는 절대 붙이지 않는다**(characters §11-10) |
| 원본 패널 PNG | **P58 ← P45**(번짐 일치) · P43 ← EP01 P05/P48 또는 EP02 P47(R 앵글, 기존 규칙) |

**시트 확정 검수 (사용자 렌더 후):**
- [ ] 한 카드 안의 모든 그림이 같은 사람(얼굴형 · 수염 · 사모 · 체형)
- [ ] 약상자 LEFT 손, 닫힘, 금속 없음
- [ ] 사모 날개 짧고 둥근 2개(갓 · 긴 날개 아님)
- [ ] 관복 회녹 = 마른 세이지(§11-5 표의 다섯 비교 통과), 무늬 · 흉배 · 소매 띠 없음
- [ ] 다정한 얼굴만(가는 눈 · 비웃음 · 반그늘 없음)
- [ ] 실루엣 6명 검사 통과(§11-6), 키: 백 > 원 > 민
- [ ] 글자 · 라벨 · 숫자 없음 → 통과하면 `refs/INDEX.md`에 추가(ref-sheet-artist)

---

### 11-8. 패널 검수표 추가 (§9에 더하는 행)

| 인물 · 소품 | 반드시 맞아야 하는 것 | 실패 예 |
|---|---|---|
| WON | 검은 사모(짧고 둥근 날개 2개) · 짧은 턱수염 + 콧수염 · 크고 둥근 쌍꺼풀 눈 · 회녹 단령(무늬 · 소매 띠 없음) · LEFT 손 닫힌 밤색 약상자 · 다정한 얼굴 · 밝은 눈높이 빛 | 수염 없음, 갓, 연두 · 회청 관복, 열린 약상자, 로우 앵글 · 반그늘 · 역광 |
| EXTRA-MED | 회녹 옷 · 날개 없는 검은 천 모자 · 얼굴 없음 · 뒤/문밖 | 사모 · 수염 · 약상자, 얼굴 디테일 |
| 탕약 | 흰 사기 뚜껑 그릇 + 밝은 나무 쟁반 + 가는 회녹 끈 매듭, 짙은 갈색 · 윤기 없음 | 놋그릇 · 난초 손잡이, 인장 · 종이 표지, 보라 기운 |
| 천 | 싸개 = 작고 순백 · 매끈 / 행주 = 크고 미색 · 거침. 연보라 = 행주 한가운데 · P44 · P45 · P58만 | 싸개가 미색 · 보라, 행주가 순백, 예약 패널 밖 연보라 |

### 11-9. 변경 이력 (이 절)

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1-EP03 | 2026-11-19 | 원 의관 WON 추가: FULL(characters §11-9 원문) · SHORT(FULL 압축) · 표정 6(같은 미소의 변주) · 상태 토큰 · 소품(PROP_MEDBOX · PROP_TONIC_SET/OPEN · PROP_DECOCTION · PROP_WIPECLOTH 4상태 · PROP_LAUNDRY_LINE · PROP_NORIGAE_WRAP) · EXTRA-MED · 색 구별 · 좌우 검수 · 레퍼런스 카드 1장(WON_turnaround, expressions 보류). §0–§10 무변경. style-bible 무변경(새 조명 토큰 없음, P53–P60은 LIGHT_L2_EVENING 변주구) |
