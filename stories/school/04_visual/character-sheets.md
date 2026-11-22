# 캐릭터 시트: 『유통기한 연애』 · 일관성 토큰 + 레퍼런스 시트 사양 (시리즈 자산)

- 작성: art-director · 2026-11-21 · v1 (ep01) · v1.1 (ep02) · v1.2 (2026-11-22, ep03 추가) · v1.3 (2026-11-22, ep04 추가) · Flow-by-hand mode + Khmer edition
- 입력: `02_story/characters.md` §4(외형 토큰 블록), §5(소품 토큰), §6(레퍼런스 시트 우선순위) · `02_story/world.md` §3-4(교복), §7 · `03_episode/ep01_beatsheet.md` D-6
- 스킬: `webtoon-panel-breakdown` B-2·B-3·B-7 · `webtoon-flow-handoff`(카드 형식) · `webtoon-khmer-edition`(글자 없음)
- 함께 읽기: `style-bible.md`(STYLE_CORE/STYLE_REF, 무드 빛, LOC, 조립 순서)
- **원칙:** EN 토큰은 characters.md §4의 EN token 문장을 **단어 그대로** 옮기고, 불변(CORE)과 가변(OUTFIT·표정)으로만 나눴다. CORE + OUTFIT + 표정 디폴트를 이어 붙이면 §4 원문과 같은 내용이 된다. art-director가 추가한 문구는 **[AD]** 로 표시했다.
- **글자 없음:** 명찰·배지·완장·조끼·휴대폰·종이 모두 무지. 시트에도 이름표·라벨·화살표 글씨를 넣지 않는다.
- **한국 원작 그대로:** 이름·얼굴·교복·헤어 모두 한국식. 캄보디아식으로 바꾸지 않는다.

## 0. 사용법 (prompt-smith)

1. 패널에 나오는 인물마다: `matching the attached reference image of <Name> (` + **CORE** + 그 씬의 **OUTFIT** + 표정 슬롯 `)`.
2. CORE는 한 글자도 바꾸지 않는다. 표정·포즈·조명만 바꾼다.
3. 좌우는 인물 본인 기준. 카메라를 향한 컷에서는 `(on the viewer's right)`처럼 화면 쪽을 덧붙인다.
4. 한 패널에 여러 인물이면 각자의 **식별 표식**이 프롬프트에 하나 이상 들어가야 한다(서윤 = 낮은 포니테일+시스루 앞머리, 도하 = 눈썹 덮는 흐트러진 머리+키링, 하람 = 단발+은테 사각 안경+진홍 완장).
5. 참조 첨부는 3장 이하. 투샷이면 `LEADS_lineup` 한 장 우선.

### 0-1. identity_tag 목록

| tag | 인물 | ep01 화면 | 시트 |
|---|---|---|---|
| SEOYUN | 한서윤 | 거의 모든 패널 | 있음 (1순위) |
| DOHA | 백도하 (+ 밤 후드 변형) | P1~3, P6, P9, P11~19, P22~37, P42~43, P47~48, P56~60 | 있음 (2순위) |
| HARAM | 채하람 | P20~21, P31~34, P38~46 | 있음 (3순위) |
| RYU | 류진혁 (담임) | P9~10 | 있음 (4순위) |
| YERIN / TAEMIN | 나예린 / 구태민 | P4, P6, P18, P28~29, P47 | 한 장 (5순위) |
| MISUK | 오미숙 (사장님) | 목소리만 (P7) | 6순위. ep01 보류 → **ep02 제작: MISUK_turnaround** (§R-2) |
| GEONU | 임건우 | P38, P40, P46 | 토큰만 |
| JACKET_MAN | 남색 점퍼 남자 | P8 원경 | 토큰만 |
| SNACK_CLERK | 매점 직원 (엑스트라) | P30 | 토큰만 [AD] |
| HYEWON | 정혜원 (엄마) | 미등장 | 등장 회차에 시트 |
| SEOYUN_8 / DOHA_8 | 8세 서윤 / 8세 도하 | 미등장(회상) | 등장 회차에 시트 |

---

## 1. 공통 교복 토큰 (서진고 동복, 10월 말) [characters §4 머리말 원문]

- **UNIFORM_BASE:** `navy wool blazer with a small plain metal shield badge (no letters) on the left chest pocket, plain white plastic name bar (blank) on the right chest, white shirt, navy tie with thin grey diagonal stripes`
- **UNIFORM_GIRL:** UNIFORM_BASE + `knee-length pleated skirt in navy, grey and dark green check`
- **UNIFORM_BOY:** UNIFORM_BASE + `dark charcoal trousers`
- **SHOES_INDOOR:** `white slipper-type indoor shoes with a green rubber band (2nd year)` — 학교 건물 안
- **SHOES_OUTDOOR [AD]:** `white socks and black loafers` (여학생, characters §4-1/4-3 복장) / 남학생은 `black sneakers` — 건물 밖(P48)·편의점
  - **[ep02 확인, AD]** 교문·은행나무 오르막 장면 P16~P33(E02S06~S08, 건물 밖)에서는 **하람과 건우도 실외화**를 신는다: 하람 `white socks and black loafers`, 건우 `black sneakers`. 하람 OUTFIT_SCHOOL의 SHOES_INDOOR는 건물 안 장면(교실·복도·계단참·매점·학생부실, 예: ep02 P46)에만 쓴다. 같은 교문의 서윤(흰 양말·검정 로퍼)·도하(검정 운동화)도 P12~P33 실외화.
- **ARMBAND:** `plain crimson armband on the left upper arm (no letters)` — 선도부(하람·건우)
- 화풍 전제: 한국 웹툰 원작 스타일, 현실 비율 고교생(7.5~8등신), 동아시아인 얼굴.
- 체크 치마의 짙은 녹색은 탁한 녹색이다. 조끼 초록(#2F8F5B)과 섞이지 않게 `muted dark green`으로 유지.
- **[ep04] 11월 엑스트라 니트 조끼 (world §3-4, 11월 허용):** 1반 엑스트라 몇 명(P21·P35 등)만 `navy knit sweater vest under the navy blazer` 또는 블레이저를 의자에 건 컷에서는 `navy knit sweater vest over the white shirt`. **색은 반드시 남색**(교복 남색 #1F2A44 계열). 초록·회녹색 니트 조끼 금지(서윤의 초록 직원 조끼와 겹치면 반전 A가 깨진다). 주요 인물(서윤·도하·하람·예린·태민·건우)에게는 주지 않는다.

---

## 2. 한서윤 — identity_tag: SEOYUN (주인공, 17, 여)

- **CORE (불변):**
  `Han Seoyun, 17-year-old Korean girl, chest-length straight black hair in a neat low ponytail with a plain black elastic, thin see-through bangs parted slightly right, two loose strands at the temples, sharp dark-brown almond eyes slightly upturned, faint dark circles under the eyes, slim oval face, straight thick eyebrows, thin lips, 163 cm slim build, light warm ivory skin, white square pain-relief patch on the inside of the left wrist, short trimmed nails`
- **OUTFIT_SCHOOL (낮, 학교):**
  `perfectly neat Korean school uniform (blazer buttoned, tie fully knotted)` + UNIFORM_GIRL + `worn black backpack with frayed corners` [AD: characters §4-1 복장 A의 EN화]
  - 블레이저 소매에 파스가 대부분 가려진다. 손을 들 때·소매가 밀릴 때만 보인다(P9).
- **OUTFIT_STORE (밤, 편의점·창고):**
  `same face and hair, blazer off, plain green staff vest with no logo over the white school shirt and check skirt, shirt sleeves rolled to the elbows, faint box-tape marks on the back of the hands, tired shoulders` + `one ballpoint pen in the vest's chest pocket` [AD: §5 조끼 토큰]
  - 넥타이: 매지 않음 [AD 제안: 조끼 속 셔츠 첫 단추까지 잠금]. 파스는 걷은 소매 덕분에 항상 보인다.
- **[ep04] SEOYUN_VEST_UNDER_BLAZER (낮, 학교 · ep04 P20~P60의 학교 장면) [AD]:**
  `same face and hair, perfectly neat Korean school uniform (blazer buttoned, tie fully knotted), the buttoned navy blazer front fitting slightly tight across the chest and waist as if something is worn underneath, the blazer's V-opening showing only the white shirt and tie, no green visible anywhere` + UNIFORM_GIRL + `worn black backpack with frayed corners, now flat and nearly empty`
  - 비트시트 A-4·D-6: 초록 직원 조끼(민소매, 앞 지퍼)를 화장실에서 블레이저 **안**, 셔츠 **위**에 입었다. 민소매라 소매 끝으로는 초록이 보이지 않는다. 블레이저 V자 앞섶에도 셔츠와 넥타이만(조끼 앞판은 단추 잠긴 블레이저 밑에 숨는다). 조끼 가슴 주머니의 볼펜도 보이지 않는다. 소매는 걷지 않는다(OUTFIT_STORE와 다름).
  - **초록이 보이는 것은 P33 한 컷뿐**이다. 그 밖의 모든 패널(P20~32, P34~60)에서는 초록이 한 픽셀도 없다. 앞판이 "살짝" 팽팽할 뿐, 불룩하거나 옷이 터질 듯하게 그리지 않는다(독자가 재독 때 알아채는 정도).
  - **P39:** 맨 아래 단추가 풀려 있다가 잠근다. 풀린 틈에는 그림자와 흰 셔츠만, 초록 없음.
  - **P15~P19 (조끼가 아직 가방 속):** OUTFIT_SCHOOL 그대로 + 가방만 `bulging black backpack stuffed full`. P19 ↔ P20 비교 컷은 같은 구도에서 가방 부피(불룩 → 홀쭉)와 블레이저 앞판(평소 → 살짝 팽팽)만 다르다.
  - **P33 포즈 추가구 (반전 A):** `both arms raised high above her head, holding her open, empty black backpack upside down and shaking it out; the raised arms lift the buttoned blazer hem, revealing one single thin horizontal strip of vivid medium green (#2F8F5B) staff-vest hem at her waistline, between the blazer hem and the waistband of the check skirt; the blazer sleeves slide down her forearms` — 초록 띠는 작고 선명하게, 화면 중앙. 조끼의 지퍼·주머니·나머지 부분은 보이지 않는다(밑단 한 줄만). 팔을 들어 소매가 내려가므로 왼손목 안쪽 파스가 보여도 된다(보이면 왼손목). 하람·담임의 시선은 위로 들린 가방에.
  - **P34~P37 덧입기:** 위 토큰 + `a second, larger navy school blazer (Doha's, open, no badge text) draped loosely over her shoulders on top of her own buttoned blazer`. 도하 블레이저가 어깨와 허리선을 덮는다. P38에서 뭉쳐 돌려준다.
  - **첨부:** SEOYUN_turnaround(§R-3). **SEOYUN_night는 이 변형에 절대 첨부하지 않는다**(밤 시트의 겉에 입은 조끼·걷은 소매가 그대로 옮겨 온다).
- **시그니처 소품 (보일 때만):** `small white folded paper crane in her fingers` · 남색 천 필통 `navy fabric pencil case` [AD] · 가방 지퍼 틈 `the tip of a rolled green vest peeking through the half-open zipper at the bottom of her bag`
- **표정 디폴트:** `composed tight-lipped expression`
- **표정 슬롯 [AD, 시트의 3종 + ep01 필요분]:**
  | 슬롯 | EN | 쓰는 곳 |
  |---|---|---|
  | 디폴트 | `composed tight-lipped expression` | 대부분 |
  | 당황 | `flustered, blinking fast, ears turning red, fingers reaching for a scrap of paper` | P16, P18, P37(귀만 빨강) |
  | 웃음(드묾) | `small reluctant smile at one corner of the mouth` | 시트용, 후반 회차 |
  | 완벽한 공개 미소 | `perfect polite smile that does not reach the eyes` | P10 |
  | 얼어붙음 | `frozen in shock, eyes wide, breath held` | P23, P34, P57, P59 |
  | 공세 | `sharp, chin up, eyes narrowed, counting on her fingers` | P11, P13, P24, P42~45 |
  | 업무 존댓말 | `blank tired customer-service politeness` | P3, P56 |
  | 졸음 | `heavy-lidded, chin propped on her hand, drowsy` | P55 |
- **식별 표식:** ① 왼손목 안쪽 흰 사각 파스 ② 낮은 포니테일 + 오른쪽으로 살짝 갈라진 시스루 앞머리 + 관자놀이 잔머리 두 가닥 ③ 옅은 다크서클(항상)
- **금지:** 앞머리 없애기·풀어 내린 머리·파스 오른손목·다크서클 지우기·화장 진하게·낮 장면에 조끼 착용.
  - **[ep04] 예외 메모:** ep04 P20 이후에는 조끼를 블레이저 **안에** 입고 있지만 "보이는 조끼 착용"은 여전히 금지다. 화면에 초록이 허용되는 곳은 P33 허리선 한 줄뿐(위 SEOYUN_VEST_UNDER_BLAZER). 겉으로 조끼를 입은 낮 장면은 REGEN.
- **레퍼런스(예정):** `_workspace/04_visual/refs/SEOYUN_turnaround.png` · `SEOYUN_night.png` · `SEOYUN_expressions.png`

---

## 3. 백도하 — identity_tag: DOHA (남주인공, 17, 남)

- **CORE (불변):**
  `Baek Doha, 17-year-old Korean boy, soft slightly long messy black hair with bangs covering the eyebrows and nape-length back, sleepy half-lidded dark-brown eyes with inner double eyelids, long face, defined jawline, high nose bridge, 182 cm lean long-limbed build, slight leaning slouch, light neutral skin, small mole on the left side of the neck below the ear`
- **OUTFIT_SCHOOL (낮):**
  `Korean school uniform worn neat but loose (blazer open, tie knotted slightly low, top shirt button undone)` + UNIFORM_BOY + `black backpack on one shoulder with a clear resin keyring holding a faded yellowed ivory paper crane clipped to the left strap` + `no glasses` [AD]
  - [AD 결정] 백팩은 **왼쪽 어깨**에 멘다 → 왼쪽 끈의 키링이 가슴 높이에서 보인다. 교실에서는 책상 옆 고리에 걸려 있고 왼쪽 끈이 통로 쪽(P42~43 전경).
  - 낮에는 콘택트렌즈 → **안경 없음.**
- **OUTFIT_NIGHT (후드 손님):**
  `same face and hair, plain charcoal grey hoodie with the hood pulled up, thin round black-framed glasses, black jogger pants, white sneakers, same black backpack with the clear resin crane keyring`
  - 후드 쓴 상태(P1~3, P56~58): `face above the mouth hidden in the hood's shadow, a thin line of fluorescent light reflecting on the round glasses frame` [AD]
  - 후드 벗은 상태(P59~60): `hood pushed back, messy black hair, thin round black-framed glasses, face fully visible` [AD]
  - P1~3에서는 키링이 보이지 않게(끈이 프레임 밖 또는 그늘). 처음 또렷이 보이는 것은 P56 ECU.
- **[ep04] DOHA_SHIRTSLEEVES (낮, 블레이저 벗음 · ep04 P34~P38) [AD]:**
  `same face and hair, blazer off, white school shirt with long sleeves worn loose (cuffs unbuttoned, not rolled), navy tie with thin grey diagonal stripes knotted slightly low, top shirt button undone, dark charcoal trousers, no glasses` + SHOES_INDOOR
  - 비트시트 D-6: P1~33 블레이저(열고) → **P34~37 셔츠 차림**(그의 블레이저는 서윤 어깨 위) → **P38 셔츠 차림 + 돌려받은 블레이저를 뭉쳐 손에 듦** → P44 계단참 혼자(셔츠 차림 유지 또는 블레이저를 팔에 걸침, 샷리스트가 정함) → P45 이후 OUTFIT_SCHOOL(다시 입음, 열어 둠).
  - 블레이저가 없어 **왼쪽 목 귀 아래 점**이 평소보다 잘 보인다. 식별 표식으로 적극 쓴다.
  - 교실(P34~37)에서 백팩은 몸에 없다. 책상 옆 고리에 걸려 있고 키링은 왼쪽 끈, 통로 쪽(ep01 P42~43 규칙). P38 계단참에도 백팩 없음(쉬는 시간). P44에서 엄지가 키링에 닿는 컷은 샷리스트에서 백팩 위치를 정한다(메고 있으면 왼쪽 어깨).
  - 낮이므로 **안경 없음**. 셔츠 차림이 태민(소매 걷음·셔츠 빠짐·넥타이 느슨, 정수리 뻗친 머리)과 헷갈리지 않게 도하는 소매를 걷지 않고 셔츠를 바지에 넣는다.
- **시그니처 소품:** 레진 학 키링(§P) · `one plain black wireless earbud in one ear` · 매점 빵 `soft bread in a plain clear plastic wrap with no print`
- **표정 디폴트:** `flat calm expression`
- **표정 슬롯 [AD]:**
  | 슬롯 | EN | 쓰는 곳 |
  |---|---|---|
  | 디폴트 | `flat calm expression` | 대부분 |
  | 0.5초 웃음 | `the faintest lift at one corner of the mouth` | P17, P27 |
  | 무표정 개그 | `deadpan, eyebrows level, pointing with his chin` | P17, P47 |
  | 오래 머문 시선 | `quiet lingering gaze lowered to her hands` | P12, P15 |
  | 고백의 정면 | `steady serious gaze straight into her eyes, lips slightly parted` | P59~60 |
  | 압박 | `low cool stare from above, face half in backlight` | P22 |
- **식별 표식:** ① 백팩 왼쪽 끈의 투명 레진 학 키링(누런 아이보리 학) ② 왼쪽 목덜미 귀 아래 작은 점 ③ 눈썹을 덮는 앞머리
- **금지:** 낮 안경, 키링 오른쪽 끈, 짧게 친 머리·올린 앞머리, 능글맞은 웃음, 근육질 체형.
- **레퍼런스(예정):** `refs/DOHA_turnaround.png` · `DOHA_night.png` · `DOHA_expressions.png`

---

## 4. 채하람 — identity_tag: HARAM (선도부장, 17, 여)

- **CORE (불변):**
  `Chae Haram, 17-year-old Korean girl, chin-length blunt-cut straight dark brown-black bob with a side part, tucked behind the right ear with one plain black hairpin, sharp double-lidded dark-brown eyes behind thin silver rectangular glasses, defined jaw, 167 cm upright athletic slim build, cool-neutral light skin`
- **OUTFIT_SCHOOL:**
  `Korean school uniform worn exactly to regulation (blazer fully buttoned), plain crimson armband with no letters on the left upper arm` + UNIFORM_GIRL + SHOES_INDOOR
- **소품:** `black clipboard with blank paper` · `small brass key on a crimson cord around the wrist` · P20 제보 쪽지 `clumsy crane-shaped folded note of plain paper with a plain head and a plain tail` [AD, 두 특징 없음]
- **표정 디폴트:** `firm unsmiling expression with chin slightly raised`
- **표정 슬롯 [AD]:** 근무 중 정중 `formal, polite, cool neutral face` (P20, P31) · 서늘한 폭로 `cool sidelong look, voice-low expression, lips close to the other girl's ear` (P32~33) · 균열 `flustered, pushing her glasses up, mouth open mid-protest` (P44) · 굴욕을 삼킴 `jaw tight, eyes lowered, adjusting her armband` (P46)
- **식별 표식:** ① 왼팔 진홍 무지 완장 ② 얇은 은테 사각 안경 ③ 오른쪽 귀 뒤 검정 실핀
- **금지:** 둥근 안경, 완장 오른팔, 긴 머리, 악역식 비웃음(그녀는 규칙의 집행자).
- **[ep03] 유리문 실루엣 (P29·P41):** 하람은 얼굴 없이 상담실 불투명 유리문 너머 흐린 실루엣으로만 나온다. CORE 토큰도 시트 첨부도 쓰지 않고 style-bible §7-2 LOC_COUNSEL_ROOM의 실루엣 보조구만 쓴다(진홍 완장 덩어리가 유일한 단서, 얼굴·안경·글자 없음). CORE 변경 없음.
- **레퍼런스(예정):** `refs/HARAM_turnaround.png` · `HARAM_expressions.png`

---

## 5. 류진혁 (담임) — identity_tag: RYU (41, 남)

- **CORE+OUTFIT (원문):**
  `Ryu Jinhyuk, 41-year-old Korean male homeroom teacher, short neat black hair with a left part, tired brown eyes, no glasses, light stubble, 176 cm average build, white shirt without tie under a grey knit cardigan, navy slacks, blank white staff ID card on a lanyard, holding a silver tumbler, dry tired expression`
- **식별 표식:** ① 은색 텀블러 ② 회색 니트 가디건
- **금지:** 안경, 넥타이, 정장 재킷.
- **레퍼런스(예정):** `refs/RYU_sheet.png`

## 6. 나예린 — identity_tag: YERIN (17, 여, 1반)

- **CORE+OUTFIT (원문):**
  `Na Yerin, 17-year-old Korean girl, long light natural brown wavy hair in a half-up style held by a large white claw clip, big round brown eyes, round face, 160 cm average build, Korean school uniform with a cream cardigan instead of the blazer, sleeves pulled over her hands, phone always in hand with its back showing (lilac case), excited open-mouthed smile`
- 휴대폰 화면이 보일 때(P29): `phone screen showing only a soft blank white glow`.
- **식별 표식:** ① 큰 흰 집게핀 ② 연보라 케이스 휴대폰 ③ 크림 카디건
- **레퍼런스(예정):** `refs/CLASSMATES_sheet.png`

## 7. 구태민 — identity_tag: TAEMIN (17, 남, 1반)

- **CORE+OUTFIT (원문):**
  `Gu Taemin, 17-year-old Korean boy, short black two-block haircut with one cowlick sticking up at the crown, narrow smiling brown eyes, 178 cm broad-shouldered basketball build, blazer off and hung on his chair, shirt sleeves rolled up and half untucked, loose tie, black sports watch with a blank face, big open-mouthed grin`
- **식별 표식:** ① 정수리 뻗친 머리 한 가닥 ② 검정 스포츠 시계(화면 무지)
- **레퍼런스(예정):** `refs/CLASSMATES_sheet.png`

## 8. 임건우 — identity_tag: GEONU (17, 남, 선도부원) · 토큰만

- `Im Geonu, 17-year-old Korean boy, 185 cm big gentle build, short black crew cut, small kind eyes, Korean school uniform with the blazer fully buttoned, plain crimson armband with no letters on the left upper arm, holding a black clipboard, hesitant uneasy expression`
- 하람 뒤, 문가. 하람보다 머리 하나 이상 크다.

## 9. 남색 점퍼 남자 — identity_tag: JACKET_MAN (50대 초반) · 토큰만

- `a thin Korean man in his early fifties, short greying buzz-cut hair, gaunt angular face partly in shadow, 172 cm slim build with slightly hunched shoulders, navy work jacket zipped to the chin with a darker rectangular patch mark on the left chest where a logo was removed (no letters, a few loose threads), grey work trousers, worn brown work shoes, both hands in jacket pockets, standing still beside a bus-stop bench looking up toward the school, expressionless`
- ep01 P8: 원경, 반측면, 얼굴은 그림자 속. **얼굴을 또렷하게 그리지 않는다.** 로고 뗀 자국이 보이는 각도. 재등장 때 같은 점퍼·같은 자리.

## 10. 매점 직원 — identity_tag: SNACK_CLERK (엑스트라) · 토큰만 [AD]

- `middle-aged Korean woman behind a school snack-shop window, plain white apron over a beige cardigan, hair tied back under a plain white cap, friendly brisk expression`
- P30 한 컷. 얼굴은 단순하게, 주요 인물과 겹치는 특징 없음.

## 11. 오미숙 (사장님) — identity_tag: MISUK (54, 여) · 시트 보류

- `Oh Misuk, 54-year-old Korean woman convenience-store owner, short tight dark brown permed curls with grey roots, reading glasses pushed up on her head, small droopy brown eyes with deep smile lines, 158 cm sturdy round build, sun-tanned warm skin with faint freckles, lavender fleece zip jacket under a plain green staff vest with no logo, beige arm sleeves, black fleece trousers, grey slippers, small round gold stud earrings, gruff worried expression`
- ep01은 목소리만(P7 통화). **얼굴을 그리지 않는다.** 얼굴이 처음 나오는 회차에 `MISUK_sheet` 제작.
- **[ep02] 보류 해제:** 얼굴 첫 등장 = ep02 P9. 시트 카드 이름은 **`MISUK_turnaround`**(`refs/MISUK_turnaround.png`, §R-2). ep02에서 도하와 같은 프레임에 그리지 않는다.

## 12. 시리즈 대기 토큰 (ep01 미등장, 원문 고정)

- **HYEWON (엄마, 44):** `Jeong Hyewon, 44-year-old Korean mother, shoulder-length black hair streaked with grey, pinned up low with a black claw clip, tired droopy dark-brown almond eyes like her daughter's, 160 cm thin build with a slight stoop, warm light skin, rough hands, grey zip-up fleece and black cotton trousers, white square pain-relief patch on the right wrist, faint apologetic smile` — 파스는 **오른손목**(서윤과 반대). 공장 복장 변형: `white hygiene cap, white hygiene gown, arm sleeves, rubber boots`.
- **SEOYUN_8 (회상):** `Han Seoyun at 8 years old, small Korean girl, black hair in two low pigtails with red knit hair ties, bright sharp dark-brown almond eyes (no dark circles), round cheeks pink from the cold, red knit sweater under a cream padded vest, folding a tiny paper crane from a white receipt at a shop counter, bossy confident little smile`
- **DOHA_8 (회상):** `Doha at 8 years old, chubby quiet Korean boy, black bowl-cut hair, round thick black-framed glasses fogged at the edges, red cold cheeks, oversized faded sky-blue puffer jacket with sleeves covering his hands, sitting alone on a red plastic stool outside a small grocery shop at night in the snow, shy downcast eyes`
- 회상 패널은 style-bible M_FLASH + LOC_OLD_SUPER @PAST.

---

## P. 소품 토큰 [characters §5 원문]

| 소품 | EN 토큰 | 고정 규칙 |
|---|---|---|
| **서윤의 종이학** | `tiny white paper crane about 3 cm wide, classic crane fold with two signature details: the head tip folded down into a small hook, and the tail tip folded down once` | 서윤이 접는 모든 학, 유리병 속 학, 도하 키링 학만 이 두 특징. 재료: 흰 감열지 영수증(얇고 살짝 광택) 또는 은백색 껌 포장지(P13~19: `made of a silvery-white gum wrapper` [AD]) |
| **레진 학 키링** | `clear rounded-rectangle resin block about 4 cm tall with fine scratches and slightly cloudy edges, a faded yellowed ivory paper crane sealed inside (head tip folded into a small hook, tail tip folded down), hanging from a small silver ring and short silver ball chain clipped to the D-ring on the left strap of a black backpack` | 항상 왼쪽 끈. 학은 영수증 학보다 누렇다(9년). P56 ECU에서 두 특징 판별 |
| **초록 직원 조끼** | `plain green staff vest (#2F8F5B) with no logo or letters, front zip, one chest pocket with a ballpoint pen` | 서윤·사장님만. 학교에서는 가방 바닥에 말려 끝만 |
| **종이학 유리병** | `small lidless glass jar about two-thirds full of tiny white paper cranes, at the left end of the convenience-store counter` | ep01 약 2/3 |
| **흰 사각 파스** | `plain white square pain-relief patch, no print` | 서윤 왼손목 안쪽 / 엄마 오른손목 |
| **계약서** | `a single sheet of plain blank white paper folded in quarters` | 서윤 남색 천 필통 안쪽. P25 `torn from a notebook, one ragged edge` [AD] |
| **제보함 열쇠** | `small brass key on a crimson cord` | 하람 손목 |
| **참치마요 삼각김밥** | `triangle rice ball in clear plastic wrap with a plain orange band, no print` | 9년 전과 지금 같은 주황 띠 |
| **DOHA_NOTE_FLAT** [ep04, AD] 도하의 평평한 쪽지 | `a small plain white paper note folded flat in four into a small square about half the size of a palm, crisp straight creases, one slightly ragged edge from a torn notebook page, blank on every visible side, not a crane and not folded into any shape` | ep04 P53(접는 손), P56(원경 손안, 작게), P57(제보함 투입구에 반쯤 들어감). **학 모양 금지, 접힌 머리·꼬리·날개 없음**(ep05 하람 "이건 아니네요" 회수의 대비). 하람의 학 모양 제보 쪽지(두 특징 없음)·서윤의 학(두 특징)과 같은 컷에서 섞이지 않게. 계약서(한 장 전체를 4등분, 서윤 필통 속)와 같은 패널에 두지 않는다. 글씨·자국 보이지 않음 |
| **SEOYUN_TORN_PAGE** [ep04, AD] 서윤 노트 + 뜯긴 페이지 | 노트: `Seoyun's plain notebook with a plain pale grey cover with no print and unlined blank white pages, one page torn out leaving a narrow ragged stub along the binding` / 뜯긴 페이지: `a single torn-out unlined blank white notebook page with one ragged edge` | ep04 P52(도하가 뜯어 감, 뜯기는 순간), P53(도하가 쓴다: **왼손을 종이 위에 오므려 덮어 글씨를 가리고**, 오른손의 펜 끝만 보인다 → `his cupped left hand covering the page so nothing written can be seen, only the pen tip showing`). 펼친 페이지·노트 표지 모두 무지, 줄 없음. 손 밖으로 나온 부분에 글씨·선·낙서가 보이면 REGEN. 이 종이가 접혀 DOHA_NOTE_FLAT가 된다(같은 흰색, 뜯긴 가장자리) |
| **TIPBOX** [ep04, AD] 제보함 | `the locked small wooden tip box with a slot mounted on the wall` (style-bible §7-2 LOC_STUDENT_OFFICE 토큰의 같은 구) + `plain wood, a small lock, no sign, label, number or writing anywhere on it` | 기존 별도 소품 토큰은 없었다(ep02·ep03은 LOC 토큰 구로만 그림) → 같은 구를 그대로 소품 토큰으로 승격. 학생부실 불투명 유리문 옆 벽. ep04 P56(원경), P57(투입구 ECU). 열쇠는 하람 손목의 놋쇠 열쇠(이 회차엔 안 씀) |

- **flat 표기:** Flow 프롬프트에 HEX(#2F8F5B)는 그대로 둬도 되지만 `vivid medium green`을 함께 쓴다[AD].

---

## R. 레퍼런스 시트 사양 (ref-sheet-artist 지시서 · Flow 수동 렌더)

ref-sheet-artist는 아래 카드를 `_workspace/04_visual/refs/ref_prompts.md`에 **프롬프트 블록으로 작성**한다(렌더하지 않는다. 사용자가 Flow에서 만든다). 형식은 `webtoon-flow-handoff` 참조:

```
### SEOYUN_turnaround
- prompt: "<STYLE_REF + 카드 내용 + Avoid 줄>"
- output: _workspace/04_visual/refs/SEOYUN_turnaround.png
- aspect: 16:9
```

### R-1. 공통 조건 (모든 카드)

1. 맨 앞 **STYLE_REF**(style-bible §1-2), 맨 끝 `Avoid: any text, labels, speech bubbles, watermark.`
2. **중립:** 단색 연한 웜그레이 배경, 균일한 스튜디오 조명, 무드 색 없음, 그림자 최소.
3. **글자 없음:** 이름표·라벨·화살표 글씨·색상 칩 글씨 없음. 명찰·배지·완장도 무지.
4. 각도: 정면 / 3/4 / 측면 / 후면 **전신**(턴어라운드), 같은 크기·같은 높이로 나란히. 표정은 같은 각도(3/4 바스트) 클로즈업.
5. **식별 표식을 또렷하게, 좌우 정확히:** 서윤 파스 = 왼손목 안쪽(한 뷰에서 손바닥을 위로), 도하 점 = 왼쪽 목 귀 아래·키링 = 왼쪽 끈, 하람 완장 = 왼팔·실핀 = 오른쪽 귀 뒤.
6. 키 관계는 실제 비율대로(§style-bible 5-4).
7. 프롬프트는 자기완결: 파일 경로·토큰 이름·"style bible"을 프롬프트 안에 쓰지 않는다. CORE/OUTFIT 문구를 풀어서 넣는다.

### R-2. 우선순위와 카드 목록 (characters §6 순서)

| 순위 | 카드 | aspect | 내용 | 이유 |
|---|---|---|---|---|
| 1 | **SEOYUN_turnaround** | 16:9 | CORE + OUTFIT_SCHOOL(블레이저 단정, 넥타이 끝까지), 흰 양말·검정 로퍼. 전신 4뷰, 무표정 디폴트. 측면·후면에서 낮은 포니테일과 검정 고무줄이 보이게. 정면 뷰 왼손을 살짝 돌려 손목 안쪽 파스가 보이게 | 거의 모든 패널 |
| 1 | **SEOYUN_night** | 16:9 | 같은 얼굴·머리 + OUTFIT_STORE(초록 무지 조끼, 셔츠 소매 팔꿈치까지, 체크 치마, 손등 옅은 테이프 자국, 처진 어깨). 전신 4뷰. 파스 보이게 | 낮과 밤 두 얼굴이 같은 사람이어야 한다 |
| 1 | **SEOYUN_expressions** | 16:9 | 3/4 바스트 4칸(교복): 디폴트 / 당황(귀 빨강, 빠른 깜빡임) / 웃음(드문 한쪽 입꼬리) / 얼어붙음(눈 크게) + 손 클로즈업 1칸: 왼손 손바닥 위, 손목 안쪽 흰 사각 파스, 짧은 손톱, 손가락 사이 작은 흰 종이학(갈고리 머리 + 접은 꼬리) | 표정 범위 + 손 단서 |
| 2 | **DOHA_turnaround** | 16:9 | CORE + OUTFIT_SCHOOL(블레이저 열고 넥타이 살짝 느슨, 첫 단추 풀림), 안경 없음, 검정 백팩 왼쪽 어깨·왼쪽 끈 키링. 전신 4뷰. 후면·측면에서 목덜미 길이 머리, 측면(왼쪽)에서 목의 점 | 낮의 1등 |
| 2 | **DOHA_night** | 16:9 | 같은 얼굴 + OUTFIT_NIGHT. 전신 3뷰(정면·3/4·측면) **후드 쓴 상태**(얼굴 위쪽 그늘, 동그란 검정 뿔테에 빛 한 줄) + 바스트 1칸 **후드 벗은 상태**(흐트러진 머리 + 동그란 검정 뿔테, 얼굴 전체) | 콜드 오픈 실루엣 = 클리프행어 실루엣, 반전 성립 |
| 2 | **DOHA_expressions** | 16:9 | 3/4 바스트 4칸(교복, 안경 없음): 디폴트 무표정 / 0.5초 웃음 / 무표정 개그(턱짓) / 고백의 정면 응시 | 표정 변화가 적은 인물의 미세 차이 |
| 3 | **HARAM_turnaround** | 16:9 | CORE + OUTFIT_SCHOOL(완전 규정 착용, 왼팔 진홍 무지 완장), 검정 클립보드, 손목 진홍 끈 놋쇠 열쇠. 전신 4뷰. 측면(오른쪽)에서 귀 뒤 실핀 | 제보·미드포인트·가방 검사 |
| 3 | **HARAM_expressions** | 16:9 | 3/4 바스트 4칸: 단호한 디폴트(턱 살짝 듦) / 근무 중 정중 / 당황(안경 밀어 올림) / 굴욕을 삼킴 | 존댓말↔반말 균열의 얼굴 |
| 4 | **RYU_sheet** | 16:9 | 원문 토큰. 전신 정면 + 3/4 + 바스트 3칸(피곤한 디폴트 / 옅은 걱정 / 무덤덤한 칭찬). 은색 텀블러, 무지 교직원 카드 | 장학 조건, 규정의 기준 |
| 5 | **CLASSMATES_sheet** | 16:9 | 예린·태민 각자 전신 정면 + 3/4, 바스트 2칸씩(예린: 들뜬 웃음 / 놀람 입 막기, 태민: 크게 벌린 웃음 / 책상 치며 항의). 예린 휴대폰은 뒷면(연보라 케이스) | 교실 대소동 코미디 |
| — | **LEADS_lineup** [AD] | 16:9 | 서윤(OUTFIT_SCHOOL)과 도하(OUTFIT_SCHOOL) 나란히 정면 전신, **서윤 정수리 = 도하 턱 높이**, 둘 다 무표정 | 투샷 패널의 단일 첨부용(첨부 3장 한도) |
| — | **PROPS_sheet** (characters §6 권장) | 16:9 | 흰 배경 위 정물 배열: ① 레진 학 키링(정면·측면, 누런 아이보리 학, 갈고리 머리 + 접은 꼬리, 은색 고리·볼체인) ② 서윤의 영수증 학 두 각도(측면에서 갈고리 머리, 뒤에서 접은 꼬리) + 껌 포장지 학 하나 ③ 초록 무지 조끼(펼친 상태, 지퍼, 가슴 주머니 볼펜) ④ 학이 약 2/3 찬 뚜껑 없는 유리병 ⑤ 주황 띠 참치마요 삼각김밥 ⑥ 흰 사각 파스 | C2 회수(P56~57)의 성패 = 접는 방식 일치 |
| 6 | **MISUK_turnaround** [ep02] | 16:9 | §11 원문 토큰. 위 줄 전신 4뷰(정면·3/4·측면·후면), 아래 줄 3/4 바스트 3칸(무뚝뚝 / 조용한 걱정 / 드문 웃음). 01시 근무복: 연보라 플리스 + 서윤과 같은 초록 무지 조끼(명찰·글자 없음), 베이지 팔토시, 회색 슬리퍼. 모든 뷰에서 머리 위 돋보기안경, 금 귀걸이. 한 장에 턴어라운드와 표정(별도 `_expressions` 없음). 카드 = `refs/ref_prompts.md` "MISUK_turnaround" | **보류 해제(ep02).** 사장님 얼굴 첫 등장 = ep02 P9, **P9 생성 전 필수**. ep02에서 도하와 같은 프레임에 그리지 않는다(첫 대면 ep05) |

- **카드 합계(ep01): 12장** — SEOYUN 3 · DOHA 3 · HARAM 2 · RYU 1 · CLASSMATES 1 · LEADS_lineup 1 · PROPS 1. **ep02: +1장(MISUK_turnaround) = 13장.**
- **[ep03] 새 카드 없음 (13장 유지).** ep03 캐스트 = 서윤, 도하(낮 교복 + 밤 후드·안경), 하람, 건우, 담임, 예린, 태민, 사장님(P48~50, MISUK_turnaround 이미 있음), 엄마(P4 잠든 뒷모습·오른손목 파스만, 얼굴 없음 → §12 HYEWON 토큰만, ep02 P11과 같은 처리). 새 인물 없음, 새 토큰 없음. 학 모양 제보 쪽지(P46·P58)는 기존 하람 소품 토큰(두 특징 없음), 상담 양식·휴지·엄마 쪽지는 style-bible §9-2 무지 문구로 충분.
- **[ep04] 새 카드 없음 (13장 유지).** ep04 캐스트 확인: 서윤(낮 교복 / 조끼를 블레이저 안에 입은 변형 / 도하 블레이저를 어깨에 덮은 상태 → 모두 SEOYUN_turnaround로 충분, 밤 조끼 장면 없음), 도하(낮 교복 / 셔츠 차림 → DOHA_turnaround로 충분, 후드·안경 장면 없음), 하람(클립보드·완장 → HARAM_turnaround·HARAM_expressions), 담임 류진혁(RYU_sheet), 예린·태민(CLASSMATES_sheet), 건우(토큰만, §8), 남색 점퍼 남자 P16(시트 없음, §9 토큰만), 1반 엑스트라(1번 학생 포함, 교복 토큰 + 11월 남색 니트 조끼 일부, §1). 사장님·엄마 얼굴 없음(엄마는 P13 파스 상자 소품만), 학생부장은 대사로만. 새 인물 없음. 새 소품 3종(DOHA_NOTE_FLAT·SEOYUN_TORN_PAGE·TIPBOX)은 모두 무지 종이·나무 상자라 텍스트 토큰으로 충분하고 PROPS_sheet를 다시 만들 필요 없다. 의상 변형 2종(SEOYUN_VEST_UNDER_BLAZER·DOHA_SHIRTSLEEVES)도 기존 턴어라운드의 얼굴·체형을 그대로 쓰고 옷만 문구로 바꾸므로 별도 시트 불필요.
- characters §6의 "각 시트 = 4뷰 + 표정 3종"을 지키되, 1·2순위는 낮/밤 변형이 커서 `_night` 카드를 따로 둔다(flow-handoff 기본 2장 + 1장). 4·5순위는 턴어라운드와 표정을 한 카드에 합쳐 사용자 작업량을 줄인다.
- **시트 불필요(토큰만):** GEONU, JACKET_MAN, SNACK_CLERK, (ep01) MISUK. HYEWON·SEOYUN_8·DOHA_8은 등장 회차에 시트.
- **검수(ref-sheet-artist → art-director):** 이미지가 들어오면 ① 한 시트 안에서 같은 사람인가 ② 식별 표식·좌우가 맞나 ③ 글자·라벨이 없나 ④ SEOYUN_turnaround와 SEOYUN_night, DOHA_turnaround와 DOHA_night가 같은 얼굴인가 ⑤ PROPS의 학 두 특징이 판별되나. 통과하면 `refs/INDEX.md`에 확정 경로를 적고, 이 파일 각 인물의 "레퍼런스" 줄을 "(확정)"으로 바꾼다.

### R-3. 패널 첨부 권장 (prompt-smith `attach:`)

| 패널 유형 | attach (3장 이하) |
|---|---|
| 서윤 단독(낮) | SEOYUN_turnaround, SEOYUN_expressions |
| 서윤 단독(밤) | SEOYUN_night, SEOYUN_expressions |
| 서윤 + 도하(낮) | LEADS_lineup, DOHA_expressions 또는 SEOYUN_expressions |
| 후드 손님(밤) | DOHA_night (+ SEOYUN_night) |
| 서윤 + 하람 | SEOYUN_turnaround, HARAM_turnaround |
| 학·키링 ECU (P14, P56, P57) | PROPS_sheet (+ 매치 컷 원본 패널) |
| 교실 그룹 | LEADS_lineup, CLASSMATES_sheet (+ HARAM_turnaround) |
| 담임 | RYU_sheet, SEOYUN_turnaround |
| 사장님 MISUK 패널 [ep02 P9~] | MISUK_turnaround (+ 서윤이 함께면 SEOYUN_night). 도하는 같은 프레임에 없다 |
| 엄마 HYEWON 등만 [ep02 P11] | 엄마 시트 없음: §12 HYEWON 토큰만 프롬프트에(얼굴 없음, **오른손목 흰 사각 파스가 읽히게**). 첨부는 서윤 쪽 시트만 |
| 엄마 잠든 뒷모습 [ep03 P4] | 위 ep02 P11과 같음(§12 HYEWON 토큰만, 얼굴 없음, 오른손목 파스). 첨부 SEOYUN_night 또는 SEOYUN_turnaround(01:20 귀가 복장에 맞춰) |
| 상담실 담임 + 서윤 + 도하 [ep03 P28~41] | LEADS_lineup, RYU_sheet (+ 표정 컷이면 해당 인물 `_expressions`로 하나 교체). 하람 실루엣(P29·P41)은 첨부 없음, 문구만 |
| 서윤 조끼-블레이저 안 [ep04 P20~P60 학교 장면, SEOYUN_VEST_UNDER_BLAZER] | **SEOYUN_turnaround** (+ 같은 컷 인물 시트 또는 SEOYUN_expressions). **SEOYUN_night는 절대 첨부하지 않는다**(낮 조끼 패널 전부, P33 포함): 밤 시트를 붙이면 Flow가 조끼를 겉에 그리고 소매를 걷는다. P33(반전 A) = SEOYUN_turnaround, HARAM_turnaround, RYU_sheet. P15~19(조끼가 아직 가방 속)도 SEOYUN_turnaround |
| 도하 셔츠 차림 [ep04 P34~P38, DOHA_SHIRTSLEEVES] | **DOHA_turnaround** (+ SEOYUN_turnaround / HARAM_turnaround / RYU_sheet 중 그 컷 인물). LEADS_lineup은 도하가 블레이저를 입은 그림이라 이 구간엔 쓰지 않는다. P34 = SEOYUN_turnaround, DOHA_turnaround, HARAM_turnaround. P36 = RYU_sheet, DOHA_turnaround |
| 하람 클립보드 [ep04 P2, P22~23, P25~27, P29, P31~32, P37, P45~49] | **HARAM_turnaround** (+ 담임과 함께면 RYU_sheet, 교실 그룹이면 CLASSMATES_sheet 또는 LEADS_lineup, 표정 컷이면 HARAM_expressions). 클립보드는 `black clipboard with blank paper`, 완장 왼팔. 건우(P22, P45~48)는 시트 없이 §8 토큰만 |
| 남색 점퍼 남자 [ep04 P16] | 시트 없음: §9 JACKET_MAN 토큰만 + 서윤 뒷모습이 전경이면 SEOYUN_turnaround. ep01 P8 이미지가 생긴 뒤라면 같은 자리·같은 점퍼 매치용으로 함께 첨부 권장(아직 대기 중이면 생략, 문구로). 얼굴은 반쯤 그늘, P18에는 그리지 않는다 |
| 쪽지·제보함 [ep04 P52~53, P56~57] | 인물 시트(DOHA_turnaround, P53 서윤 전경이면 SEOYUN_turnaround). PROPS_sheet는 P57(하단 레진 학 키링)에만 허용하되 프롬프트에 DOHA_NOTE_FLAT "not a crane"을 반드시 쓴다(PROPS의 학이 쪽지를 학으로 끌고 가면 PROPS를 빼고 다시) |

- **ep01 패널 첨부 의존 [ep02]:** ep02 P1, P2, P8, P38, P51, P56, P61은 `attach:`에 ep01 패널(P59, P60, P1, P22, P48, P53, P60)이 있어 **그 ep01 이미지가 생긴 뒤에만** 만들 수 있다(style-bible §12-6).

---

## 변경 기록

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-21 | 최초 작성(ep01). characters §4 EN 토큰 12종을 CORE/OUTFIT로 분리(단어 그대로), §5 소품 토큰 8종, §6 우선순위 → 카드 12장. [AD] 결정: 도하 백팩 왼쪽 어깨·낮 안경 없음 명시, 서윤 OUTFIT_SCHOOL 신발·백팩 EN화, SNACK_CLERK 엑스트라 토큰, LEADS_lineup·SEOYUN_night·DOHA_night 카드 추가, MISUK 시트 ep01 보류 |
| v1.1 | 2026-11-22 | ep02 추가만(토큰 변경 없음): §1 SHOES_OUTDOOR에 교문 장면(P16~P33) 하람·건우 실외화 확인, §R-2 MISUK_turnaround 카드(보류 해제, P9 전 필수, 도하와 같은 프레임 금지), §R-3 사장님·엄마 첨부 행 + ep01 첨부 의존 패널 메모, §0-1·§11 MISUK 상태 표기 |
| v1.2 | 2026-11-22 | ep03 추가만(토큰 변경 없음): ep03 캐스트 확인 결과 새 인물·새 토큰·새 레퍼런스 카드 없음(13장 유지, §R-2 메모). §4 HARAM에 상담실 유리문 실루엣(P29·P41) 처리 메모, §R-3 엄마 잠든 뒷모습(P4)·상담실 3인(P28~41) 첨부 행 |
| v1.3 | 2026-11-22 | ep04 추가만(기존 토큰·문구 변경 없음): §1 11월 엑스트라 남색 니트 조끼 메모, §2 SEOYUN_VEST_UNDER_BLAZER 변형(초록은 P33 허리선 한 줄만, P33 가방 머리 위 포즈 추가구, P34~37 도하 블레이저 덧입기, P15~19 불룩한 가방) + 금지 항목 예외 메모, §3 DOHA_SHIRTSLEEVES 변형(P34~38), §P 소품 DOHA_NOTE_FLAT·SEOYUN_TORN_PAGE·TIPBOX(기존 LOC 구 승격) 전부 무지, §R-2 ep04 캐스트 확인 = 새 카드 없음(13장 유지), §R-3 ep04 첨부 행 5개(조끼 변형 = SEOYUN_turnaround, SEOYUN_night 금지 / 셔츠 = DOHA_turnaround / 하람 클립보드 = HARAM_turnaround / 점퍼 남자 / 쪽지·제보함) |

