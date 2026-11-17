# 캐릭터 시트 — 「수칙 4번은 거짓말입니다」 EP01

- 작성: art-director · 기준일 **2026-11-16** · EP01 Phase 4 · **v1** (외형 토큰 원본 = `02_story/characters.md` §4 v1)
- **v1.1 · 2026-11-17 · EP02 추가 → §10** (외형 토큰 원본 = `characters.md` §4-8 · §4-9 v1.1). **§0–§8의 토큰·표정·상태 문장은 한 글자도 바꾸지 않았다**(EP01 프롬프트가 쓴다). 신규: 남재우 JAEWOO(§10-1), EP02 상태(서하 밤샘 · 노미란 B+코트 뭉치 / 'A-정돈 중' / 손 · 선임 졸음, §10-2–§10-4), 인물 구분(§10-5), 레퍼런스 카드 17–21(§10-6), 검수표(§10-7)
- 짝 문서: `04_visual/style-bible.md` (화풍·LOC·PROP·조명·말풍선 공간·금지)
- 다음 독자: **ref-sheet-artist**(§7 → `refs/ref_prompts.md`), panel-director, prompt-smith, panel-validator(§8)
- Flow-by-hand: 아래 영문 토큰은 **그대로 붙여 넣는 완결된 영어**다. 토큰 이름(SEOHA 등)은 프롬프트에 쓰지 않는다. 인물 이름은 써도 되지만 이름만으로는 Flow가 모르므로 외형 문장을 항상 함께 넣는다.
- 좌우는 **인물 자신의 좌우**다. 정면 그림에서는 화면 반대편에 보인다.
- 공통 금지(characters §4): 빨강(의상·소품·화장·네일·넥타이·휴대폰 케이스), 글자·숫자·로고(공무원증은 빈 카드), 반지(HAND-CLIFF만 낀다).

---

## 0. 쓰는 법

| 항목 | 규칙 |
|---|---|
| FULL 토큰 | 그 컷의 주인공(가장 크게 보이는 1명), 레퍼런스 시트. characters §4의 영문 한 줄 토큰 **원문 그대로** (노미란 의상 B만 자족형으로 보강) |
| SHORT 토큰 | 같은 컷의 나머지 인물. 식별 표식·주색·실루엣만 남긴 압축형. 첨부 레퍼런스와 함께 쓴다 |
| 상태 토큰 | 손만·뒷모습·실루엣·특정 자세. 패널 묘사에 덧붙인다 |
| 표정 | 아래 표정 문장을 그대로 쓴다. 외형 토큰은 그대로 두고 표정만 바꾼다 |
| 첨부 | 보이는 인물마다 `<ID>_turnaround`, 얼굴이 크면 `<ID>_expressions`도. 패널당 3장 이내 권장 |
| 변경 | 불변 토큰을 바꾸려면 character-designer 재호출(외형 토큰 [고정]). 패널이 그려진 뒤에는 바꾸지 않는다 |

### 0-1. EP01 캐스트 요약

| ID | 이름 (KM) | 주색 | 식별 표식 (좌우) | 등장 패널 | 레퍼런스 |
|---|---|---|---|---|---|
| **SEOHA** | 강서하 (កាង សឺហា) | 머스터드 | 점 = **RIGHT** 눈 밑 · 빈 공무원증 + 네이비 목줄 | 대부분 (안 나오는 컷: P2·P16·P18·P19·P24·P26·P27·P42·P43·P45·P53·P58) | turnaround + expressions |
| **MIRAN** | 노미란 (ណូ មីរ៉ាន) | 검정·차콜 | 금테 하프림 안경 · 금색 시계 = **LEFT** 손목 · 머리 RIGHT 귀 뒤로 | A: P8–10, P32–33 (P24 인셋 = P9 크롭) · B: P43–48 | turnaround + expressions + outfitB |
| **SEONIM** | 선임 (호칭 លោកពូ) | 슬레이트블루 | 흉터 = **LEFT** 눈썹 · 목에 건 검은 줄 돋보기(쓰지 않음) | P2, P11–13, P17–18, P20–22, P34–37, P39, P50 (P19·P45 목소리, P55 인셋 = P21 크롭) | turnaround + expressions |
| **JEONGMIN** | 구정민 (គូ ជុងមីន) | 젖은 카키 | 머리부터 발끝까지 젖음 · 비닐 파일 속 연회청 빈 서식 | P1, P3, P13(손), P14–17, P22–24, P36, P38, P40–41, P44, P49 (P42 웅덩이만) | turnaround + expressions |
| **HAND-CLIFF** | 클리프의 손 (주인 = 전임자, EP01 비공개) | 차콜 니트 | **RIGHT** 손 · 검지 은반지 · 차콜 니트 소맷부리 + 흰 셔츠 커프스 · 빨간 테이프 롤 | P61–64 (P60 그림자만) | HANDCLIFF_ref |

- 같은 컷에서 주색 넷(머스터드·검정·슬레이트블루·젖은 카키)은 겹치지 않는다(characters §4-1).
- 디자인하지 않는 인물: 강지호(목소리만, 휴대폰 빈 화면), 엄마(언급), 전임자(손만 = HAND-CLIFF. 전신 토큰은 EP02 Phase 4 전 character-designer), 과장(언급). **이들을 그리지 않는다.**
- (v1.1) EP02 캐스트는 **§10-0**. 전임자 = 남재우 JAEWOO(§10-1)가 HAND-CLIFF를 물려받았다.

---

## 1. 강서하 — SEOHA (주인공)

- identity_tag: `SEOHA` · 25세 여 · 9급 신규 주무관 · 당직자(열쇠)
- 레퍼런스: `refs/SEOHA_turnaround.png`, `refs/SEOHA_expressions.png`

**FULL (characters §4-2 원문):**
```
Kang Seo-ha, a 25-year-old Korean woman, junior civil servant; petite 160 cm slim build with narrow, slightly hunched shoulders; dark brown hair in a LOW ponytail at the nape tied with a plain navy hair tie, wispy see-through bangs and a few loose strands at the temples; large round dark-brown eyes with gently drooping outer corners; light warm-toned skin, almost no makeup; a small dark mole under her RIGHT eye; an oversized muted mustard-yellow cable-knit cardigan worn open with sleeves half over her hands, a plain off-white round-collar blouse, navy straight slacks, black flat shoes; a blank white ID card in a clear holder on a dark-navy lanyard; default expression an anxious, eager-to-please half-smile; no red anywhere, no rings
```

**SHORT:**
```
Kang Seo-ha (petite 25-year-old Korean woman, dark brown LOW ponytail with wispy see-through bangs, small mole under her RIGHT eye, oversized muted mustard-yellow cable-knit cardigan over an off-white blouse, blank white ID card on a dark-navy lanyard)
```

**불변 (일관성 핵심):** 작은 키·좁고 움츠린 어깨 / 짙은 갈색 **낮은** 포니테일 + 시스루 앞머리 / 크고 둥근 처진 눈꼬리 / **RIGHT 눈 밑 점** / 헐렁한 머스터드 꽈배기 카디건(EP01 내내 같은 옷, 되감겨도 같다) / 네이비 목줄 빈 공무원증.

**표정 (가변 · 시트 8종):**

| # | 상황 | 영문 |
|---|---|---|
| ① | 디폴트 | `an anxious, eager-to-please half-smile with slightly raised eyebrows` |
| ② | 공포로 굳음 (P25, P28) | `frozen in fear, eyes wide, lips pressed shut, face rigid` |
| ③ | 상실 (P29–30) | `blank, unfocused eyes looking down at her phone, slack face, as if she has forgotten something` |
| ④ | 결연 (루프 2, P31·P41·P49) | `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` |
| ⑤ | 참는 눈물 | `eyes glistening with held-back tears, jaw clenched` |
| ⑥ | 소름 깨달음 (P56) | `trembling pupils, one hand pressed over her mouth, chilled realization` |
| ⑦ | 가장 따뜻한 얼굴 (P6) | `a relaxed, genuinely warm smile with soft eyes` |
| ⑧ | 공무원 무표정 (P15·P32–33 블랙코미디) | `a flat, polite, deadpan civil-servant face with slightly lowered eyelids` |

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 계단·앵커 | `a plain navy canvas tote bag on her LEFT shoulder, a dark gray smartphone in a plain light-gray silicone case held to her RIGHT ear with her RIGHT hand, the screen blank` | P4, P6, P7, P28 (P29–30은 휴대폰을 내려다봄) |
| 당직석 | `seated on a cracked green vinyl swivel chair at the duty desk, her navy tote bag hung on the chair back` | L1 착석 컷 |
| 손 클로즈업 | `her small hands half covered by the cuffs of an oversized mustard-yellow cable-knit cardigan, bare unpolished nails, no rings` | P5, P46, P52, P54, P57 |
| 뒷모습 | `seen from behind: a dark brown LOW ponytail tied with a navy hair tie at the nape, the back of an oversized mustard-yellow cable-knit cardigan, a dark-navy lanyard cord at her neck` | P1, P3, P23, P38, P40, P61 |

**소지품:** 수첩·스티커·휴대폰·공무원증 = style-bible §7-2 / characters §4-6 토큰. 수첩 표지 스티커는 늘 **새것**(되감기는 소지품).

**금지·드리프트:** 점은 RIGHT 눈 밑(정면 그림에서 화면 왼쪽) · 카디건이 주황·노랑·빨강으로 번지면 다시 · 하이 포니 금지 · 진한 화장 금지 · 공무원증에 글자·사진 금지 · 반지 금지.

---

## 2. 노미란 — MIRAN (팀장, 명부상 담당자)

- identity_tag: `MIRAN` · 47세 여 · 6급 팀장
- 레퍼런스: `refs/MIRAN_turnaround.png`(의상 A), `refs/MIRAN_expressions.png`(①–③ A, ④–⑥ B), `refs/MIRAN_outfitB.png`
- 의상 배정: **A = P8–10, P32–33** · **B = P43–48** (P24 인셋은 P9 크롭이라 A)

**FULL — 의상 A (characters §4-3 원문):**
```
Noh Mi-ran, a 47-year-old Korean woman, team leader; tall 170 cm slim angular build with very upright posture and chin slightly raised; glossy black chin-length blunt bob with a center part, the right side tucked behind her ear; narrow sharp almond-shaped dark eyes behind thin gold half-rim glasses; fair cool-toned skin, neat makeup with nude-beige lips; a tailored charcoal-gray trouser suit, an ivory silk blouse, a long black wool coat draped over her shoulders with her arms NOT in the sleeves, black low-heeled pumps; a thin gold bracelet watch on her LEFT wrist; a blank ID card on a retractable reel clipped at her waist, turned backward; default expression a polite closed-lip smile with cold, unsmiling eyes; no red anywhere, no rings
```

**FULL — 의상 B** (characters §4-3 의상 B를 얼굴 불변 요소와 합쳐 자족형으로 보강. 내용 변경 없음):
```
Noh Mi-ran, a 47-year-old Korean woman, team leader, just woken from a nap; tall 170 cm slim angular build; glossy black chin-length blunt bob with a center part, flattened and messy on one side; narrow sharp almond-shaped dark eyes behind thin gold half-rim glasses sitting crooked on her nose; fair cool-toned skin, nude-beige lips; no jacket and no coat: a wrinkled ivory silk blouse buttoned up with the sleeves pushed up, charcoal-gray trousers, gray indoor slippers, a coarse gray wool blanket clutched around her shoulders like a cape; a thin gold bracelet watch on her LEFT wrist; no red anywhere, no rings
```

**SHORT — A:**
```
Noh Mi-ran (tall, very upright 47-year-old Korean woman, glossy black chin-length blunt bob, thin gold half-rim glasses, charcoal-gray trouser suit with a long black coat draped over her shoulders, arms not in the sleeves, thin gold watch on her LEFT wrist)
```
**SHORT — B:**
```
Noh Mi-ran (47-year-old Korean woman just woken up, black chin-length bob flattened on one side, thin gold half-rim glasses askew, wrinkled ivory blouse with sleeves pushed up, coarse gray wool blanket around her shoulders, thin gold watch on her LEFT wrist)
```

**불변:** 큰 키·꼿꼿한 수직 실루엣 / 턱선 일자 단발(가운데 가르마, RIGHT 귀 뒤로) / **금테 하프림 안경** / **LEFT 손목 금색 시계** / 누드 립. 의상 A의 코트와 의상 B의 담요는 **같은 어깨 실루엣**이다(권력 → 굴욕).

**표정 (시트 6종):**

| # | 상황 | 영문 | 의상 |
|---|---|---|---|
| ① | 디폴트 (P8–10) | `a polite closed-lip smile with cold, unsmiling eyes` | A |
| ② | 귀찮음 (P44) | `irritated, rolling her eyes, one corner of her mouth twisted` | A·B |
| ③ | 명령 | `chin raised, looking down her nose, commanding` | A |
| ④ | 경악 (P43) | `shocked, glasses askew, eyes wide, mouth open` | B |
| ⑤ | 굴욕 (P48) | `humiliated, eyes averted, biting her lower lip` | B |
| ⑥ | 억지 침착 (P47) | `a trembling forced smile, struggling to stay composed` | B |

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 열쇠 흔들기 | `dangling a bunch of old steel keys from one finger` | P8, P32 |
| 명부 위 손바닥 | `her palm resting flat on a blue two-ring plastic binder` | P9, P33 (P24 인셋) |
| 퇴장 | `walking toward the cream nap-room door, the black coat draped over her shoulders, speaking over her shoulder` | P10 |
| 직인 | `reaching for a small wooden seal stamp wet with red ink` | P44–46 |
| 자백 (beatsheet P48 그대로) | `her RIGHT palm pressed flat on the glass top of the duty desk while she writes in a thick black ledger, the page hidden by her hand and pen` | P48 |

- P48의 손 배치는 beatsheet 그대로 둔다(F-23, 의미는 봉인). 수칙 종이를 보거나 만지지 않는다.

**금지·드리프트:** 코트 소매에 팔을 넣으면 다시 · 검은 뿔테 안경 금지(선임 돋보기와 겹침) · 단발이 길어지면 다시 · 립·네일 빨강 금지 · 반지 금지 · 의상 A/B를 섞지 않는다.

---

## 3. 선임 — SEONIM (당직실 붙박이, 이름 없음)

- identity_tag: `SEONIM` · 50대 후반으로 보이는 남 · 호칭 លោកពូ (프롬프트에서는 "the senior night-duty man")
- 레퍼런스: `refs/SEONIM_turnaround.png`, `refs/SEONIM_expressions.png`

**FULL (characters §4-4 원문):**
```
the senior night-duty man, a Korean man who looks about 58; big heavy-set 180 cm build with stooped shoulders and large rough hands; a salt-and-pepper buzz cut, mostly gray, with a slightly receding hairline and gray stubble; small deep-set dark eyes with heavy, half-closed lids; weathered tan skin with deep lines around the mouth; a short old scar vertically splitting his LEFT eyebrow; black-framed reading glasses hanging on a black cord around his neck, not worn; a faded slate-blue zip-up work jacket in an old 2000s office style with worn elbows and no logo, an off-white undershirt collar, brown-gray work trousers, scuffed black work shoes; no ID card, no keys, no rings; default expression a tired, unreadable frown; no red anywhere
```

**SHORT:**
```
the senior night-duty man (big, stooped Korean man about 58, gray buzz cut and gray stubble, heavy half-closed eyelids, short old scar splitting his LEFT eyebrow, black reading glasses hanging on a cord at his chest, faded slate-blue zip-up work jacket, no ID card)
```

**불변:** 가장 크고 무거운 실루엣·굽은 어깨 / 희끗한 반삭 / 무거운 눈꺼풀 / **LEFT 눈썹 흉터** / 목에 건 돋보기(**쓰지 않는다**, EP01 전체) / 빛바랜 슬레이트블루 점퍼 / 공무원증·열쇠·반지·시계 없음.

**표정 (시트 6종):**

| # | 상황 | 영문 |
|---|---|---|
| ① | 디폴트 | `a tired, unreadable frown with heavy half-closed eyelids` |
| ② | 멈칫 (P18·P37) | `pausing mid-sentence, his eyes sliding away, mouth stopped half-open` |
| ③ | 경악 (P2·P39) | `eyes suddenly wide open, leaning his whole body forward in alarm` |
| ④ | 의심 섞인 관찰 (P35) | `narrowed, suspicious eyes, head tilted, watching closely` |
| ⑤ | 드문 옅은 미소 | `a rare faint smile at only the corners of his mouth` |
| ⑥ | 한숨 | `eyes closed, a long sigh through his nose` |

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 거꾸로 앉기 (시그니처) | `sitting backwards astride a gray steel folding chair in front of the archive shelves, forearms resting on the backrest, a plain white paper cup in one big hand` | P2, P21, P39 등 |
| 외워 읊기 | `reciting from memory while looking at the young woman, not at any paper; the reading glasses stay hanging on the cord at his chest, untouched` | P12, P13, P17, P35, P36 |
| 등장 | `stepping out of the dark gap between the archive shelves, setting a plain white paper cup on the corner of the desk` | P11 |
| 퇴장 | `standing up from the folding chair holding a plain white electric kettle, heading for the entrance door` | P50 |

**금지·드리프트:** 흉터는 LEFT 눈썹(정면 그림에서 화면 오른쪽) · 돋보기를 얼굴에 쓰면 다시 · 점퍼에 로고·명찰 금지 · 공무원증·열쇠가 생기면 다시 · **초록 회전의자(당직석)에 앉은 그림은 실패** · 남색·청록 점퍼 금지.

---

## 4. 구정민 — JEONGMIN (EP01 괴이 민원인)

- identity_tag: `JEONGMIN` · 30대 중반으로 보이는 남 · 사망신고 취소 민원 · 재등장 가능(시리즈 안정 토큰)
- 레퍼런스: `refs/JEONGMIN_turnaround.png`, `refs/JEONGMIN_expressions.png`

**FULL (characters §4-5 원문):**
```
Gu Jeong-min, a Korean man who looks about 34; thin 173 cm build with narrow shoulders, standing slightly bowed in a polite posture; neat black side-parted office haircut, completely soaked and plastered to his forehead; mild single-lidded black eyes with a calm, steady, unblinking gaze; ordinary fair skin with a wet sheen, looks like a normal living person (no pale blue skin, no wounds); he is drenched from head to toe on a dry night: water dripping from his hair, chin, sleeves and coat hem, a small puddle spreading at his feet, wet footprints behind him; a dated late-2000s slim khaki-beige trench coat darkened by water and buttoned, a charcoal suit, white shirt, narrow navy tie, black leather shoes; he holds a blank pale grayish-blue form inside a clear plastic file sleeve against his chest with both hands, water beading on the plastic; default expression a polite faint smile; no rain, no umbrella, the surroundings are dry; no red anywhere, no rings
```

**SHORT:**
```
Gu Jeong-min (thin, politely bowed Korean man about 34, soaked black side-parted hair plastered to his forehead, water dripping from his chin and sleeves, a dripping water-darkened khaki-beige trench coat over a charcoal suit and narrow navy tie, a blank pale grayish-blue form in a clear plastic sleeve held to his chest, a small puddle at his feet, the surroundings dry)
```

**불변:** 마르고 좁은 어깨·공손히 숙인 자세 / 젖어 이마에 붙은 검은 옆가르마 / 홑꺼풀의 흔들림 없는 시선 / **늘 젖어 있다**(마른 버전을 그리지 않는다) / 철 지난 카키 트렌치 + 남색 넥타이 / 비닐 파일 속 연회청 빈 서식.

**표정 (시트 6종 · 화난 얼굴은 만들지 않는다):**

| # | 상황 | 영문 |
|---|---|---|
| ① | 디폴트 (P14 이후) | `a polite faint smile, a calm, steady, almost unblinking gaze` |
| ② | 질문 (P22) | `head tilted slightly in a polite question` |
| ③ | 정중한 인사 (P44·P49) | `bowing politely from the waist, water dripping from his hair` |
| ④ | 미소가 사라진 기다림 (P24 · 가장 무섭게) | `the smile gone, a completely blank, patient, waiting face` |
| ⑤ | 투입구로 서식 (P15 직전) | `his wet hand with dripping fingers sliding a blank pale grayish-blue form through a flat steel slot` |
| ⑥ | 젖음 디테일 | `close-up of his soaked hair plastered to his forehead, water running down his temple and dripping from his chin` |

**상태 토큰 (젖음은 숨기는 구도로만 숨긴다 · characters §2-4):**

| 상태 | 영문 | 패널 |
|---|---|---|
| 역광 실루엣 (첫 등장 숨김) | `a thin man's dark backlit silhouette standing behind the glass, a flat file held to his chest, his details and wetness lost in shadow` | P1, P3, P14, P38 (P40은 조금 더 보여도 된다) |
| 벨을 누른 손 | `a backlit hand pressing the brass dome call bell on the outer ledge, details in shadow` | P13 (P36은 벨 위 물방울) |
| 자락·구두만 ('발견') | `only the dripping hem of a water-darkened khaki-beige trench coat and wet black leather shoes, water dripping onto the brass call bell, a puddle on the dry terrazzo and wet footprints leading back into the dark corridor` | P16 |
| 웅덩이 단계 | P16 `a small puddle` → P17 `a slightly wider puddle` → P22 `the puddle has spread to just below the document slot` → P42 `only the puddle remains in front of the empty glass` | style-bible §7-4 |
| 돌아감 | `small beyond the glass, holding a plain white sheet with one red circular seal mark to his chest, bowing, then walking away into the dark far end of the corridor` | P49 |

**금지·드리프트:** 비·우산·젖은 배경 금지(그만 젖었다) · 시체처럼 푸르거나 창백한 피부 금지 · 상처 금지 · 유리에 이상하게 비치는 모습 금지(수칙 3번 몫) · 서식에 글자 금지 · 넥타이는 남색 · 유리를 넘어 방 안에 들어온 그림 금지(R6).

---

## 5. 클리프의 손 — HAND-CLIFF

- identity_tag: `HAND-CLIFF` · 주인 = 전임자(twist-plan §2-4, EP01 비공개). **EP01은 손과 소매만.** 이름·얼굴·몸·머리카락은 어디에도 없다.
- 레퍼런스: `refs/HANDCLIFF_ref.png`

**FULL (characters §4-6 원문):**
```
a slim pale RIGHT hand of indeterminate gender, short clean unpolished nails, a thin plain silver ring on the index finger, the cuff of a charcoal-gray knit cardigan over a white shirt cuff, holding a palm-sized roll of bright red vinyl tape; no face, no body, no hair visible
```

**상태 토큰:**

| 패널 | 영문 |
|---|---|
| P60 그림자만 | `a second person's shadow falls over the taped paper sheet from behind her; no figure, no hand, no face visible` |
| P61 들어옴 | `the slim pale RIGHT hand reaches in over her right shoulder from behind, holding the red tape roll; the arm is cropped by the frame at the forearm` |
| P62 곁에 | `the hand rests near her shoulder, cropped at the forearm; her frozen profile beside it` |
| P63 멈춘 검지 | `the ringed index finger stops just short of the white paper strip, not touching it` |
| P64 빠져나감 | `the red tape roll now sits on the desk beside her closed notebook, and the hand is slipping out of the frame at its edge` |

**검수:** 소매는 **골이 보이는 차콜 니트** + 그 아래 흰 셔츠 커프스(선임 슬레이트블루 점퍼 ✗, 노미란 의상 B 아이보리 실크 ✗) · 오른손 · 은반지는 검지 · 손가락 다섯 · 빨강은 롤에만 · 유리에 그 사람이 비치면 다시 · 얼굴·몸이 보이면 다시.

---

## 6. 인물 간 구분 (같은 컷에 둘 이상일 때)

| 짝 | 헷갈릴 수 있는 것 | 구분 장치 (프롬프트에 둘 다 넣는다) |
|---|---|---|
| 서하 ↔ 노미란 | 두 여성, 검은 머리 | 키(160 vs 170)·머리(낮은 포니 vs 턱선 단발)·주색(머스터드 vs 검정)·안경 유무 |
| 선임 ↔ 구정민 | 두 남성 | 체격(크고 굽음 vs 마르고 숙임)·머리(회색 반삭 vs 젖은 검은 옆가르마)·주색(슬레이트블루 vs 젖은 카키)·젖음 |
| 손 ↔ 노미란 B·선임 | 소매 | 차콜 니트 + 흰 커프스 + 은반지 vs 아이보리 실크 소매(반지 없음) vs 슬레이트블루 점퍼 |
| 노미란 금테 ↔ 선임 돋보기 | 안경 | 금테 하프림을 **쓰고 있음** vs 검은 뿔테를 **목에 걸고 있음** |

---

## 7. 레퍼런스 시트 사양 (ref-sheet-artist 지시서)

ref-sheet-artist는 아래 카드마다 `refs/ref_prompts.md`에 블록 하나를 쓴다(flow-handoff 형식: `### <카드명>` / `- prompt:` / `- output: _workspace/04_visual/refs/<카드명>.png` / `- aspect:`). 렌더는 사용자가 Flow에서 한다. 패널 렌더 **전에** 확정한다.

### 7-1. 공통 조건

1. 프롬프트 = **STYLE_REF**(style-bible §1) + 레이아웃 문장 + 그 인물의 **FULL 토큰** + 반드시 보일 것 + 마지막 줄 `Avoid: any text, labels, speech bubbles, watermark.`
2. 배경: 민무늬 밝은 웜그레이, 고른 스튜디오 조명, 연출색(형광 녹색·스탠드 노랑) 없음. 패널에서 조명을 바꿀 여지를 남긴다.
3. 모든 인물 그림은 **같은 옷·같은 크기**, 머리부터 발끝까지(전신 그림), 왼쪽에서 오른쪽으로 고르게.
4. 식별 표식은 크고 또렷하게. 좌우를 **인물 기준과 화면 기준 둘 다** 프롬프트에 쓴다(예: `the mole under her RIGHT eye, which appears on the left side of the image in front views`).
5. 글자·라벨·번호·화살표 없음. 소품은 카드에 적힌 것만.
6. 비율 16:9(장소 플레이트 일부만 9:16).

### 7-2. 카드 목록

| # | 카드 | 필수 | aspect | 레이아웃 (영문 핵심) | 반드시 보일 것 |
|---|---|---|---|---|---|
| 1 | `SEOHA_turnaround` | 필수 | 16:9 | `five views of the same young woman side by side: full-body front, full-body three-quarter view turned to her left, full-body right profile, full-body back view, and a large head-and-shoulders front close-up` | 낮은 포니테일·네이비 머리끈(뒷모습), RIGHT 눈 밑 점(측면·클로즈업), 소매가 손등을 반쯤 덮은 머스터드 카디건, 빈 공무원증. 토트백·휴대폰 없음 |
| 2 | `SEOHA_expressions` | 필수 | 16:9 | `a grid of eight head-and-shoulders portraits of the same young woman in two rows of four, identical outfit and lighting, each with a different expression:` + §1 표정 ①–⑧ 순서대로 | 모든 칸에 RIGHT 눈 밑 점과 네이비 목줄 |
| 3 | `MIRAN_turnaround` | 필수 | 16:9 | `four full-body views of the same woman side by side (front, three-quarter turned to her left, right profile, back) plus two close-ups: her face with thin gold half-rim glasses, and her LEFT wrist with a thin gold bracelet watch` | 의상 A. 뒷모습에서 **비어 있는 코트 소매**가 늘어진 것, RIGHT 귀 뒤로 넘긴 머리, 허리 릴 홀더의 뒤집힌 빈 카드 |
| 4 | `MIRAN_expressions` | 필수 | 16:9 | `a grid of six head-and-shoulders portraits of the same woman in two rows of three; top row wearing the black coat draped over a charcoal suit with neat hair, bottom row just woken up with a gray wool blanket around her shoulders, hair flattened on one side and glasses askew; expressions:` ①–③ 위 / ④–⑥ 아래 | 모든 칸에 금테 하프림. 아래 줄은 의상 B FULL 토큰의 요소 |
| 5 | `MIRAN_outfitB` | 필수 | 16:9 | `three full-body views of the same woman just woken from a nap (front, three-quarter, back) plus a head-and-shoulders close-up with her glasses crooked` + 의상 B FULL 토큰 | 담요가 의상 A 코트와 같은 어깨 실루엣, 회색 슬리퍼, LEFT 손목 시계, 재킷·코트 없음 |
| 6 | `SEONIM_turnaround` | 필수 | 16:9 | `five views of the same big stooped man: full-body front, full-body three-quarter turned to his right, full-body left profile, full-body back, and one figure sitting backwards astride a gray steel folding chair with his forearms on the backrest and a plain white paper cup in his hand; plus a small front close-up of his face` | LEFT 눈썹 흉터(측면·클로즈업), 목에 걸린 돋보기(쓰지 않음), 로고 없는 슬레이트블루 점퍼, 공무원증·열쇠 없음 |
| 7 | `SEONIM_expressions` | 필수 | 16:9 | `a grid of six head-and-shoulders portraits of the same man in two rows of three, identical outfit and lighting:` + §3 표정 ①–⑥ | 모든 칸에 LEFT 눈썹 흉터, 가슴께의 돋보기 |
| 8 | `JEONGMIN_turnaround` | 필수 | 16:9 | `four full-body views of the same drenched man side by side (front, three-quarter, right profile, back), each standing in his own small puddle with water dripping, plus a head-and-shoulders front close-up of his soaked face` | 모든 그림에서 젖음(머리·턱·소매·자락의 물방울, 발밑 웅덩이), 앞모습은 비닐 파일을 두 손으로 가슴에, 남색 넥타이. 배경은 마른 회색(비 없음) |
| 9 | `JEONGMIN_expressions` | 필수 | 16:9 | `a grid of six panels of the same drenched man in two rows of three:` + §4 표정 ①–⑥ (⑤는 손과 투입구, ⑥은 젖은 머리 클로즈업) | 화난 얼굴 없음, 산 사람의 피부색 |
| 10 | `HANDCLIFF_ref` | 필수 | 16:9 | `three studies of the same slim pale RIGHT hand on a plain light-gray background, cropped at mid-forearm: back of the hand holding a palm-sized roll of bright red vinyl tape; palm-side three-quarter view; index finger extended and pointing, the thin plain silver ring clearly on the index finger` + HAND FULL 토큰 | 차콜 니트 소맷부리의 골 + 흰 셔츠 커프스, 짧은 맨손톱, 손가락 다섯, 얼굴·몸 없음, 빨강은 롤뿐 |
| 11 | `PROP_STICKERS_pair` | 필수 | 16:9 | `two round hand-cut stickers side by side at exactly the same size and angle on a plain light-gray background: on the left, a brand-new sticker on a patch of dusty navy linen; on the right, the identical sticker very sun-faded on a patch of yellowed cream grid paper` + style-bible PROP_STICKER_NEW / PROP_STICKER_FADED 문장 | **같은 그림**(고양이 얼굴 정면, 고양이 자신의 LEFT 귀 = 화면 오른쪽 귀가 큼, 레몬 초승달, 청록 원, 흰 별 셋), 왼쪽은 선명·광택, 오른쪽은 연크림·볏짚·잿빛 민트로 바램 + 누런 테두리 + 들뜬 가장자리 |
| 12 | `PROP_PAGES_pair` | 필수 | 16:9 | `two papers side by side on a plain light-gray background, lit evenly from the front: on the left, the old rules sheet; on the right, an A5 notebook with a dusty navy linen cover lying open, its right-hand cream grid page fresh and blank with a fresh light-brown coffee ring on the bottom-right corner and white sewn-thread binding along the gutter` + style-bible PROP_RULESHEET 문장 | 같은 모눈·같은 크림색(왼쪽만 누렇게), 왼쪽 종이의 **제본에서 뜯긴 들쭉날쭉한 왼쪽 가장자리**, 같은 오른쪽 아래 귀퉁이의 커피 링(새것 = 온전한 원 / 바랜 것 = 반원), 4번 조각과 빨간 테이프 두 줄, 오른쪽 위 바랜 스티커, 7칸 빈 모눈 |
| 13 | `LOC_L1_DUTYROOM_plate` | 권장 | 16:9 | style-bible LOC_L1_DUTYROOM 전체 토큰 + VIEW_C, `an empty room, no people`, LIGHT_L1 + LIGHT_LAMP | 방향(§6-2): 칸막이 = 책상 왼쪽 끝(화면 왼쪽), 숙직실 문 = 왼쪽 벽, 출입문 = 창구 벽 오른쪽 끝 |
| 14 | `LOC_L1_DESK_plate` | 권장 | 16:9 | style-bible VIEW_DESK 토큰, `no people, no hands`, 열쇠 없음 | 책상 고정 배치, 낮은 영수증 묶음, 인주 케이스, 빈 종이 |
| 15 | `LOC_L2_CORRIDOR_plate` | 권장 | 9:16 | LOC_L2_CORRIDOR 토큰 + VIEW_ANCHOR(문은 닫힘), `no people` | 시계 **10:00**(분침 12), 방화문 밀대, 숫자 없는 시계 |
| 16 | `LOC_L2_STAIRWELL_plate` | 권장 | 9:16 | LOC_L2_STAIRWELL 토큰, `no people`, B2 층참에서 반 층 아래 사슬 격자문이 보이는 구도 | 마른 콘크리트, 진녹 난간, 철망 전구, 사슬 문 |

- 사용자 부담: 필수 12장 + 권장 4장 = 최대 16장. 권장 플레이트를 빼면 패널 프롬프트의 LOC 문장만으로 간다(일관성은 조금 약해진다). ref-sheet-artist가 handoff에 넣을지 정하고 이유를 남긴다.
- 노미란의 의상 B 시트는 처음부터 `MIRAN_outfitB` 별도 카드로 정했다(characters §4-3 시트 메모).

### 7-3. 어떤 패널에 무엇을 첨부하나 (prompt-smith 참고 · 3장 이내)

| 레퍼런스 | 주로 붙일 패널 |
|---|---|
| `SEOHA_*` | 그녀의 얼굴·몸이 보이는 모든 컷. 손만 보이는 컷(P46·P52·P54·P57)은 소품 카드가 우선 |
| `MIRAN_turnaround` / `MIRAN_outfitB` | P8–10·P32–33 / P43–48 |
| `SEONIM_*` | §0-1 등장 패널 |
| `JEONGMIN_*` | 얼굴이 보이는 컷. 실루엣 컷(P1·P3·P14·P38)은 turnaround만 |
| `HANDCLIFF_ref` | P61–64 |
| `PROP_STICKERS_pair` | P5, P19, P51, P52, P53, P64 |
| `PROP_PAGES_pair` | P19, P51, P54, P57, P58, P63 (와이드에서 종이가 작으면 생략) |
| 장소 플레이트 | DESK → P9·P33·P27 · DUTYROOM → P8·P11·P42·P50 · CORRIDOR → P7·P31 · STAIRWELL → P4·P6 |
| 원본 패널 PNG | COMP 반복 컷(style-bible §5-3): P38←P1, P39←P2, P40←P3, P28←P7, P32←P8, P33←P9, P35←P12, P36←P13, P37←P18, P52←P5 |

### 7-4. 시트 확정 검수 (사용자 렌더 후 · ref-sheet-artist + art-director 기준)

- [ ] 한 카드 안의 모든 그림이 **같은 사람**(얼굴형·머리·체형)
- [ ] 식별 표식이 맞는 쪽: 서하 점 RIGHT 눈 밑 · 선임 흉터 LEFT 눈썹 · 노미란 시계 LEFT 손목 · 손 RIGHT, 반지 검지
- [ ] 주색: 머스터드 / 검정·차콜 / 슬레이트블루 / 젖은 카키 / 차콜 니트
- [ ] 빨강 없음(손 카드의 롤, 소품 카드의 4번 테이프만 예외)
- [ ] 글자·라벨·숫자 없음
- [ ] 소품 카드: 두 스티커가 같은 그림·같은 큰 귀, 두 종이가 같은 모눈
- [ ] 통과한 시트 목록은 `refs/INDEX.md`(ref-sheet-artist)

---

## 8. 패널 검수표 (panel-validator · 인물 축)

| 인물 | 반드시 맞아야 하는 것 | 실패 예 |
|---|---|---|
| SEOHA | RIGHT 눈 밑 점 · 낮은 포니 · 머스터드 카디건 · 빈 공무원증 · 루프 1·2 외형 동일 | 점 위치 반대, 하이 포니, 주황 카디건, 진한 화장 |
| MIRAN | 금테 하프림 · LEFT 손목 금시계 · 턱선 단발 · A: 코트 소매 빔 / B: 담요·비뚤어진 안경 | 뿔테, 코트를 입음, 반지, 빨간 립 |
| SEONIM | LEFT 눈썹 흉터 · 돋보기는 목에(쓰지 않음) · 슬레이트블루 점퍼 · 공무원증·열쇠 없음 · 당직석에 앉지 않음 | 안경 착용, 초록 회전의자, 명찰 |
| JEONGMIN | 늘 젖음 · 주변은 마름 · 산 사람 피부 · 남색 넥타이 · 비닐 파일 속 빈 서식 | 마른 옷, 비, 푸른 피부, 서식의 글씨, 이상한 반사 |
| HAND-CLIFF | RIGHT 손 · 검지 은반지 · 차콜 니트 + 흰 커프스 · 빨간 롤 · 얼굴·몸 없음 | 왼손, 반지 손가락 틀림, 슬레이트블루 소매, 얼굴 보임, 유리에 비침 |

---

## 9. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-16 | characters §4 v1 토큰을 그대로 옮김(FULL). SHORT·상태 토큰·표정 영문 추가(서하 표정 ⑦⑧ 추가: P6·블랙코미디 컷용). 노미란 의상 B FULL을 자족형으로 보강(내용 동일). 레퍼런스 카드 16장 사양(필수 12) |
| v1.1 | 2026-11-17 | **EP02 추가(§10), §0–§8 변경 0.** JAEWOO FULL = characters §4-8 영문 원문 그대로 + SHORT · 표정 6종 영문 · 상태 토큰(P1 빈손 · P2 오르는 컷 등). 서하 밤샘(원문 + 프롬프트용 풀이), 노미란 P43 B+코트 뭉치 · 'A-정돈 중'(원문 + 자족형 FULL, 내용 동일) · 손 클로즈업, 선임 졸음 등, L3 엑스트라(원문). 카드 17–21(필수 3: JAEWOO_turnaround · JAEWOO_expressions · PROP_HANDOVER_pair / 권장 2: L3 플레이트). 상태 변주는 카드 없음 |

- 새 인물(전임자 전신 등)은 이 문서에 섹션만 추가하고 글로벌 규약(style-bible)은 유지한다.

---

## 10. EP02 추가 (v1.1 · 2026-11-17)

> 원본: `characters.md` v1.1 §0-4 · §2-6(시각 메모) · §4-8 TOKEN-JAEWOO · §4-9 EP02 상태 토큰. 장면 근거: `ep02_script_final.md`(58패널) · `ep02_beatsheet.md`. 장소·조명·소품은 style-bible §6-6 · §3-4 · §7-5. **위 §0–§8은 그대로 유효하다**(서하·노미란·선임 FULL/SHORT·표정·상태 토큰). 여기에는 EP02에 새로 필요한 것만 있다.

### 10-0. EP02 캐스트 요약

| ID | 이름 (KM) | 주색 | 식별 표식 (좌우) | EP02 등장 | 레퍼런스 |
|---|---|---|---|---|---|
| **SEOHA** | 강서하 | 머스터드 | 점 = RIGHT 눈 밑 · 빈 공무원증 + 네이비 목줄 | 거의 전편 (의상 A 전편, **P26부터 밤샘 상태**, P44부터 토트백) | 기존 turnaround + expressions |
| **JAEWOO** [신규] | 남재우 (ណាម ជែវូ) · 대사 화자 `អ្នកមុន` | 무채색: 차콜·흰색·스톤 그레이 | **RIGHT 검지 은반지** · **빈 클립 짙은 회색 목줄**(카드 없음) · 다크서클 · 흰 커프스가 차콜 소맷부리 밖으로 | 손만 P1 · 손→소매→턱 P2 · 얼굴 P3, P5–P11, P13, P15, P17, P19(일부), P20, P23–P25, P34, P38, P40–P41 · 발 P12 · 손 P14, P16, P39 · 실루엣 P33 · 비네트 P55(손+서류) | **신규 2장** (§10-6) |
| **SEONIM** | 선임 | 슬레이트블루 | 흉터 = LEFT 눈썹 · 목의 돋보기 | P10 비네트, P11, P25(배경), P26, P28, P29, P32, P42, P43(배경) | 기존 |
| **MIRAN** | 노미란 | 검정·차콜 | 금테 하프림 · 금시계 LEFT 손목 | P8 비네트(A) · **P43 B + 코트 뭉치** · **P45–P49 'A-정돈 중'** · P53–P57 A (P54·P57 손) | 기존 (카드 추가 없음) |
| (목소리) | 강지호 | — | 그리지 않는다 | P50–P52 전화 목소리 | — |
| (배경) | L3 엑스트라 | 회색·베이지·짙은 녹색 | 디자인하지 않는다 | **P53–P58 09:00에만**, 초점 밖 | — |

- 구정민은 EP02에 나오지 않는다. HAND-CLIFF 토큰(§5)은 이제 **재우의 오른손 클로즈업 토큰**이다(characters §0-4). 원문은 바꾸지 않는다.
- 같은 컷의 주색: 머스터드(서하) · 무채색(재우) · 슬레이트블루(선임) · 검정(노미란) — 겹치지 않는다.

### 10-1. 남재우 — JAEWOO (전임자 · 잔류 당직자 · 클리프의 손 주인)

- identity_tag: `JAEWOO` · 25세 남(서하와 동갑) · 9급 신규, 사흘 당직 뒤 인수인계 없이 도망친 사람 · **사람으로 그린다**(정상 그림자, 마른 옷, 산 사람의 피부. EP10 전에는 어긋남 없음)
- 레퍼런스: `refs/JAEWOO_turnaround.png`(오른손 클로즈업 포함), `refs/JAEWOO_expressions.png` — characters §4-8 시트 메모의 `JAEWOO_ref`를 시리즈 관례대로 두 장으로 나눈 것

**FULL (characters §4-8 영문 원문 그대로 · 일관성 토큰):**
```
Nam Jae-woo, a 25-year-old Korean man, a young junior civil servant; lanky 177 cm slim build with narrow, slightly slumped shoulders, a long neck, thin wrists and long thin pale fingers; slightly overgrown, untidy black hair with bangs falling over his eyebrows, the sides half over his ears and the back touching his shirt collar, no styling; long dark-brown eyes with faint double eyelids and deep dark circles under them; pale cool-toned skin that still looks like a normal living person; a thin plain silver ring on his RIGHT index finger, short clean unpolished nails; a fitted fine-ribbed charcoal-gray knit cardigan, fully buttoned, with white shirt cuffs showing past the knit cuffs at his wrists, a plain white shirt with the collar out over the cardigan and the top button undone, no tie, light stone-gray slacks, scuffed off-white canvas sneakers; a dark-gray lanyard around his neck ending in an empty metal clip with NO ID card; default expression a quiet, tired, knowing look with a faint wry tilt at one corner of his mouth; no glasses, no watch, no red on his clothes
```

**SHORT:**
```
Nam Jae-woo (lanky 25-year-old Korean man, slightly overgrown untidy black hair with bangs over his eyebrows, deep dark circles under his eyes, pale but normal living skin, a fitted fine-ribbed charcoal-gray cardigan fully buttoned with white shirt cuffs and a white collar showing, a dark-gray lanyard ending in an empty clip with no ID card, a thin silver ring on his RIGHT index finger)
```

**불변 (일관성 핵심):** 마르고 길쭉한 몸·좁고 처진 어깨·긴 목·길고 가는 손가락 / 웃자란 흑발(앞머리가 눈썹을 덮음, 뒷머리가 깃에 닿음) / **짙은 다크서클**(얼굴 앵커) / 창백하지만 산 사람의 피부 / **RIGHT 검지 은반지**(이 작품에서 반지를 끼는 유일한 사람) / 단추를 다 잠근 몸에 맞는 **가는 골지 차콜 카디건**(앞주머니 둘) + **소맷부리 밖 흰 셔츠 커프스** + 깃 밖 흰 셔츠 깃(노타이) / 스톤 그레이 슬랙스 / **해진 오프화이트 캔버스 운동화**(다섯 인물 중 유일한 밝은 신발) / **끝이 빈 클립인 짙은 회색 목줄**. 의상 B 없음(늘 같은 옷). 안경·시계·넥타이·공무원증 없음.

**표정 (가변 · 시트 6종 · characters §4-8):**

| # | 상황 | 영문 | EP02 |
|---|---|---|---|
| ① | 디폴트 — 조용히 지친, 다 아는 얼굴 | `a quiet, tired, knowing look with a faint wry tilt at one corner of his mouth` | P3 |
| ② | 코웃음 | `eyes lowered, a short dry laugh through his nose, one corner of his mouth lifting` | P7 · P13 · P41(→④) |
| ③ | 다급한 경고 ("떼려고 하지 마") | `eyes suddenly wide, leaning forward with one hand reaching out, urgent and alarmed` | P19(프레임 가장자리 얼굴 일부) |
| ④ | 상처 (그녀가 그를 모른다) | `his gaze dropping away, lips pressed together, his smile stiffening and fading` | P6 · P41 |
| ⑤ | 간절한 미소 (05:59) | `a soft, earnest smile, his eyes glistening and slightly wet at the rims` | P34 |
| ⑥ | 빈 정중함 (EP06용, 시트에 미리) | `a polite, unfocused, blank look of a stranger meeting her for the first time` | (EP06) |

**상태 토큰 (패널 묘사에 덧붙인다 · 빛은 style-bible `LIGHT_LAMP_EDGE`):**

| 상태 | 영문 | 패널 |
|---|---|---|
| 빈손 (얼굴 전 · HAND-CLIFF 원문의 불변 부분 + 이 컷의 상태) | `a slim pale RIGHT hand of indeterminate gender, short clean unpolished nails, a thin plain silver ring on the index finger, the cuff of a charcoal-gray knit cardigan over a white shirt cuff, now empty, resting on top of the back of her green vinyl swivel chair; no face, no body, no hair visible` | P1 (롤은 이미 책상 위 수첩 옆) |
| 손에서 얼굴 쪽으로 오르는 컷 | `seen from his RIGHT hand resting on the chair back, up along the sleeve of a fitted fine-ribbed charcoal-gray knit cardigan with a white shirt cuff at the wrist, to a narrow, slightly slumped shoulder, a white shirt collar out over the buttoned cardigan with the top button undone, and a dark-gray lanyard ending in an empty metal clip with no ID card; the frame cuts off at his jawline, no face visible` | P2 |
| 서가에 기댐 (characters 원문) | `both hands in the front pockets of his charcoal cardigan, one shoulder leaning against the shelf at the edge of the lamplight` | P11 (선임 바로 옆) |
| 운동화 (마름 = 사람) | `close-up of a pair of scuffed off-white canvas sneakers standing on dry gray speckled terrazzo, the hems of light stone-gray slacks above them; no puddle, no water, no footprints` | P12 |
| 반지 돌리기 (습관 · 권장) | `his RIGHT thumb absently turning the thin silver ring on his RIGHT index finger` | P14 |
| 띠와 접힌 서류 (b1) | `taking a blank ruler-cut strip of bright-white paper out of the front pocket of his charcoal cardigan, where the corner of a folded white sheet with a bold dark-gray double-line border also sticks out` | P15 (권장 LEFT 앞주머니, style-bible §7-5) |
| 테이프 롤 (characters 원문) | `holding a palm-sized roll of bright red vinyl tape in his RIGHT hand; the red is only on the tape roll` | P15 · P16 |
| 롤을 굴림 | `calmly rolling the red tape roll back and forth in his open palm` | P17 |
| 귀퉁이를 먼저 덮는 손 | `his RIGHT hand with the silver ring on the index finger covering the lifted corner of the lower red tape first; her fingertip touches the back of his hand and stops` | P19 |
| 퇴장 | `putting the white paper strip and the red tape roll into his cardigan pocket and walking out through the entrance door into the dark corridor, speaking over his shoulder; no red visible any more` | P25 |
| 문틀 실루엣 | `a tall, thin silhouette standing in the entrance doorframe with the dark corridor behind him, his overgrown hair and slumped shoulders outlined, his face in shadow; only the single white sheet of paper in his hand catches the warm lamp light` | P33 |
| 인수인계서 (characters 원문) | `holding out a single blank white form with a double-line border in both hands, nothing written on it` + style-bible `PROP_HANDOVER_A` | P34 · P40(돌려받음) · P41(내림) |
| 열쇠 쪽 손 | `his RIGHT hand with the silver ring reaching into the warm lamp light toward the bunch of keys on the desk for the first time, while his body stays at the edge of the light` | P38 |
| 멈춘 손가락 | `his ringed RIGHT index finger stopped a hand's width short of the keys, her palm already laid over them` | P39 |

**금지 · 드리프트 (characters §4-8 그대로 · panel-validator):**
- 반지는 **RIGHT 검지**, 은색 하나. 왼손·다른 손가락·금색(노미란의 금과 섞임)·둘이면 다시. 정면 그림에서 그의 RIGHT 손은 **화면 왼쪽**.
- **흰 셔츠 커프스가 차콜 소맷부리 밖으로**(EP01 P61과 일치). 소매가 슬레이트블루·머스터드로 바뀌면 다시.
- 목줄 끝은 **빈 클립**. 카드가 생기면(빈 카드여도) 다시.
- 안경·시계·넥타이 금지. 같은 컷의 선임 얼굴에도 안경이 생기지 않았는지 본다.
- **유령으로 그리지 않는다:** 푸르거나 투명한 피부, 흐려지는 발, 없는 그림자 금지. 젖지 않았다(구정민과 구별).
- 다크서클은 재우만. 같은 컷의 서하에게 번지지 않게.
- 머리는 조금 웃자란 정도. 장발·묶은 머리·탈색·흰머리 금지.
- 빨강은 테이프 롤에만, **손에 들었을 때만**. 주머니 밖으로 비치지 않는다.
- 몸·얼굴 전체가 스탠드의 노란 원 안에 들어가지 않는다(얼굴은 반만 따뜻하게, 손만 원 안). 초록 회전의자에 앉지 않는다. 로맨스 코드(클로즈 투샷의 홍조·반짝임)로 연출하지 않는다.

### 10-2. 강서하 — EP02 상태 (FULL/SHORT·표정은 §1 그대로)

**밤샘 (P26–P58) — characters §4-9 원문:**
```
a few more loose strands of hair after a sleepless night, tired eyes, otherwise exactly the same
```
**프롬프트용 풀이 (서하 문장 뒤에 덧붙인다):**
```
after a sleepless night: a few more loose strands of hair slipping from her low ponytail and around her temples, slightly tired, heavy eyelids; the skin under her eyes smooth and clear; otherwise exactly the same, in the same outfit
```
- **다크서클 금지**(재우의 얼굴 앵커). 서하 문장과 Avoid 줄에 "dark circles"라는 말을 쓰지 않는다 — 같은 컷의 재우에게서 다크서클이 빠진다. 피로는 잔머리와 눈꺼풀로만.

**상태 토큰:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 의자를 밀고 굳음 | `pushed back in her green swivel chair until her back hits the edge of the desk` + 표정 ② | P4 |
| 7번 자리까지 손끝 | `her fingertip running down the rules sheet, past the white strip, and stopping at the very bottom row` | P27 (P37 비네트 원본) |
| 서류를 끝까지 읽는 손끝 | `her fingertip running down the blank boxes of the form and stopping on the lower signature line` | P35 |
| 열쇠를 먼저 덮는 손 | `her small hand, half covered by the cuff of her oversized mustard-yellow cardigan, laid flat over the bunch of keys first` | P39 |
| 방화문을 미는 뒷모습 | `seen from behind: a dark brown LOW ponytail tied with a navy hair tie, the back of an oversized mustard-yellow cable-knit cardigan, a plain navy canvas tote bag on her LEFT shoulder, her LEFT hand pushing the horizontal push bar, her phone buzzing in her RIGHT hand` | P44 |
| L3 (characters §4-9 권장) | `a plain navy canvas tote bag on her LEFT shoulder` | P45–P53 |
| 대기 의자 통화 | `sitting on a navy-gray waiting chair with a thick black ledger and her navy linen notebook on her lap, her dark gray smartphone in a plain light-gray silicone case held to her RIGHT ear with her RIGHT hand, the screen blank` | P50–P52 |
| 스티커를 쓰다듬는 엄지 | `her LEFT thumb gently stroking the new sticker on the cover of the notebook on her lap` | P52 (COMP-STICKER와 같은 LEFT 손) |
| 펜 | `her small RIGHT hand, half covered by the mustard cardigan cuff, holding a plain ballpoint pen stopped a hand's width above the empty lower signature line` | P58 (얼굴은 프레임 밖) |

- 표정 사용(§1 번호): ② P4 · ④ P22 · P48 · ⑤ P52 · ⑥ P36 · ⑦ P50 · ③ P51 · ⑧ P29 · P46. 09:00까지 **의상 A**(실내, characters §4-9 권장). 바깥 의상(네이비 롱 패딩)은 EP02에 없다.

### 10-3. 노미란 — EP02 상태 (의상 A·B FULL·표정은 §2 그대로)

| 패널 | 상태 | 쓰는 문장 |
|---|---|---|
| P8 비네트 | 의상 A (EP01 P10 크롭) | §2 SHORT — A + 퇴장 상태 토큰 |
| **P43** | 의상 B + 코트·재킷 뭉치 | §2 FULL — 의상 B + 아래 상태 토큰 |
| **P45–P49** | **'A-정돈 중'** | 아래 FULL / SHORT |
| P53 · P56 | 의상 A 원문(완전 복구 = 권력 회복) | §2 FULL — 의상 A |
| P54 · P57 | 손 클로즈업 | 아래 손 토큰 |

**P43 상태 토큰 (의상 B 문장 뒤에):**
```
her long black coat and charcoal suit jacket bundled over one arm; she snaps the thick black hardcover ledger on the duty desk shut and tucks it under her other arm
```

**'A-정돈 중' — characters §4-9 원문:**
```
the same woman Noh Mi-ran at dawn, back in her charcoal trouser suit with the long black coat draped over her shoulders again, arms not in the sleeves, but her black bob is still flattened on one side and her ivory blouse is wrinkled; thin gold half-rim glasses now straight; gold watch on her LEFT wrist; no red anywhere
```
**FULL — 'A-정돈 중'** (위 원문을 의상 A의 불변 요소와 합쳐 자족형으로 보강. 내용 변경 없음):
```
Noh Mi-ran, a 47-year-old Korean woman, team leader, at dawn after a bad night, back in her suit; tall 170 cm slim angular build with very upright posture; glossy black chin-length blunt bob with a center part, still flattened and messy on one side; narrow sharp almond-shaped dark eyes behind thin gold half-rim glasses, now sitting straight; fair cool-toned skin, nude-beige lips; a tailored charcoal-gray trouser suit over a wrinkled ivory silk blouse, the long black wool coat draped over her shoulders again with her arms NOT in the sleeves, black low-heeled pumps; a thin gold bracelet watch on her LEFT wrist; no blanket; no red anywhere, no rings
```
**SHORT — 'A-정돈 중':**
```
Noh Mi-ran (tall, upright 47-year-old Korean woman at dawn, black chin-length bob still flattened on one side, thin gold half-rim glasses, charcoal-gray trouser suit over a wrinkled ivory blouse, long black coat draped over her shoulders with arms not in the sleeves, thin gold watch on her LEFT wrist)
```

**손 클로즈업 (P47 · P54 · P57 · 권장 LEFT 손 — 금시계가 신원 앵커, P55 비네트의 재우 오른손·은반지와 대비):**
```
Noh Mi-ran's LEFT hand: fair cool-toned skin, short neat nude nails, no rings, a thin gold bracelet watch on the wrist, the cuff of a charcoal-gray suit sleeve over an ivory silk blouse cuff
```
- P47(A-정돈 중)도 같은 손 문장. 블라우스 소매는 구겨져도 된다.

**그 밖의 상태:**

| 상태 | 영문 | 패널 |
|---|---|---|
| 일지를 끼고 정문으로 | `walking toward the glass entrance doors with the thick black ledger tucked under her arm` | P45 |
| 퇴장 (역광 실루엣) | `seen from behind, walking out through the glass doors into the cold blue dawn, the long black coat draped over her shoulders making a tall, straight silhouette` | P49 |
| 카운터에 기댐 (↺COMP-HANDOVER 자세) | `leaning over the counter toward her` + 표정 ① | P56 |

- 표정(§2 번호): ⑥ 억지 침착 P43(말더듬) · ① P46 · P53 · P56 · ⑥→⑤ P48. 표정 시트 ⑤⑥은 아래 줄(의상 B)에 있지만 얼굴은 같으므로 'A-정돈 중'에도 그대로 쓴다.
- **빨강 0**(몸·립·네일·소지품·낮 책상). P53–P58은 카운터 위만, 그녀의 책상 면은 프레임 밖(R11).

### 10-4. 선임 · 지호 · L3 엑스트라 — EP02

**선임 상태 토큰 (FULL/SHORT·표정은 §3 그대로):**

| 상태 | 영문 | 패널 |
|---|---|---|
| 물 붓기 (재우를 보지 않음) | `sitting backwards astride the gray steel folding chair, pouring hot water from a plain white electric kettle into two plain white paper cups on the small side table, never once looking at the young man leaning on the shelf beside him` | P11 |
| 졸음 | `sitting backwards astride the gray steel folding chair, arms folded on the backrest, eyes closed as if dozing, head slightly bowed` | P26 · P28 · P32 |
| 한쪽 눈 | `one eye opened to a slit, the other still closed, otherwise motionless` | P29 |
| 06:00 | 눈을 뜨고 표정 ⑤ `a rare faint smile at only the corners of his mouth` | P42 |
| 배경 | 표정 ④ 실눈(P25) / 숙직실 문간의 노미란을 보지 않음(P43) | P25 · P43 |

- 재우와 같은 컷: 선임은 그를 **한 번도 보지 않는다**(시선은 컵·서하·허공). 재우도 선임을 보지 않는다. 선임 얼굴에 안경이 생기지 않게(돋보기는 목에).

**강지호:** 그리지 않는다(목소리만, 서하 휴대폰의 빈 화면). 디자인은 EP14.

**L3 엑스트라 (09:00 · P53–P58 배경만) — characters §4-9 원문:**
```
background: a few ordinary office workers and citizens in muted winter clothes (gray, beige, dark green), simplified faces, slightly out of focus; nobody wears a mustard-yellow cardigan, a long black coat draped over the shoulders, a slate-blue work jacket, a khaki trench coat, or a charcoal cardigan with a white shirt; no red, no ID card text, no signs, no text anywhere
```
- 새벽 L3(P45–P52)는 **비어 있다**(서하·노미란 둘뿐). characters §4-9의 '원거리 방호원 1명' 대안은 쓰지 않는다 — 새벽 컷 Avoid 줄에 `extra people`.

### 10-5. 인물 간 구분 — EP02 추가 (§6에 덧붙임)

| 짝 | 헷갈릴 수 있는 것 | 구분 장치 (프롬프트에 둘 다 넣는다) |
|---|---|---|
| 서하 ↔ 재우 | 동갑, 둘 다 카디건 | **오버사이즈 머스터드 꽈배기·열림** vs **몸에 맞는 차콜 가는 골지·잠김** · 낮은 포니 vs 웃자란 짧은 머리 · 네이비 목줄 + 빈 카드 vs 짙은 회색 목줄 + 빈 클립 · 점(서하 RIGHT 눈 밑) vs 다크서클(재우만). 프롬프트에서 옷으로 부른다: `the young woman in the mustard cardigan` / `the young man in the charcoal cardigan` |
| 재우 ↔ 선임 | 당직실의 두 남자 | 길쭉하고 마름 vs 크고 굽음 · 검은 웃자란 머리 vs 회색 반삭 · 차콜 니트 vs 슬레이트블루 점퍼 · 빈 클립 목줄 vs 목줄 없음(목에 돋보기) · 반지 vs 흉터(LEFT 눈썹) |
| 재우 손 ↔ 노미란 손 | P55 비네트(재우가 내민 서류 A) ↔ 큰 컷(노미란의 서류 B) | **RIGHT 손 · 은반지(검지) · 차콜 니트 + 흰 커프스** vs **LEFT 손 · 금시계 · 차콜 정장 소매 + 아이보리 커프스 · 반지 없음** |
| 재우 ↔ HAND-CLIFF | 같은 사람 | 같은 손(§5 원문)이어야 한다 — 카드 17이 HANDCLIFF_ref를 첨부한다(§10-6) |

### 10-6. 레퍼런스 카드 — EP02 (ref-sheet-artist 지시서 · §7 공통 조건 그대로)

ref-sheet-artist는 `refs/ref_prompts.md`에 아래 블록을 **추가만** 한다(기존 16장 블록은 그대로). 프롬프트 = STYLE_REF(style-bible §1) + 레이아웃 + FULL 토큰(또는 소품·장소 토큰) + 반드시 보일 것 + `Avoid: any text, labels, speech bubbles, watermark.`

| # | 카드 | 필수 | aspect | 레이아웃 (영문 핵심) | 반드시 보일 것 | 첨부 |
|---|---|---|---|---|---|---|
| 17 | `JAEWOO_turnaround` | **필수** | 16:9 | `four full-body views of the same lanky young man side by side (front, three-quarter turned to his left, right profile, back), plus two close-ups: a head-and-shoulders front view of his face, and his RIGHT hand with the thin plain silver ring on the index finger and a crisp white shirt cuff showing past the ribbed charcoal knit cuff` + §10-1 FULL | RIGHT 검지 은반지(`which appears on the left side of the image in front views`), 소맷부리 밖 흰 커프스, **빈 클립** 목줄(카드 없음), 다크서클, 눈썹을 덮는 앞머리와 깃에 닿는 뒷머리(뒷모습), 단추를 다 잠근 차콜 가는 골지 카디건 + 앞주머니 둘, 깃 밖 흰 셔츠 깃, 스톤 그레이 슬랙스, 해진 오프화이트 캔버스 운동화. 롤·안경·시계·넥타이·빨강 없음 | `refs/HANDCLIFF_ref.png` (있으면 — 손 클로즈업이 그 손과 같아야 한다) |
| 18 | `JAEWOO_expressions` | **필수** | 16:9 | `a grid of six head-and-shoulders portraits of the same young man in two rows of three, identical outfit and lighting, each with a different expression:` + §10-1 표정 ①–⑥ 순서대로 | 모든 칸에 다크서클·웃자란 앞머리·흰 깃·빈 클립 목줄. ③ 칸에 뻗은 손이 보이면 RIGHT 검지 은반지 | `refs/JAEWOO_turnaround.png` |
| 19 | `PROP_HANDOVER_pair` | **필수** | 16:9 | `two sheets of paper side by side at exactly the same size and angle on a plain light-gray background, lit evenly from the front: on the left the completely blank form, on the right the identical form with one red seal mark` + style-bible `PROP_HANDOVER_A` · `PROP_HANDOVER_B` 문장 | 같은 굵은 이중 테두리·같은 빈 칸·아래쪽 같은 두 서명란과 줄 끝 원. **오른쪽 종이의 위 줄 원에만** 글자 없는 붉은 원. 글씨·서명·제목·번호 없음, 접힌 자국 없음. 빨강은 그 원 하나 | — |
| 20 | `LOC_L3_LOBBY_dawn_plate` | 권장 | 16:9 | style-bible LOC_L3_LOBBY 전체 토큰 + VIEW_L3_OUTWARD + LIGHT_L3_DAWN, `an empty hall, no people` | 유리 정문 줄의 푸른 새벽, 바닥의 긴 빛 사각형, 카운터 = 화면 오른쪽, 의자 = 왼쪽, 꺼진 검은 표시 면, **녹색 형광빛 없음**, 간판·글자 없음 | — |
| 21 | `LOC_L3_LOBBY_day_plate` | 권장 | 16:9 | LOC_L3_LOBBY 전체 토큰 + VIEW_L3_INWARD + LIGHT_L3_DAY + 시계 `PROP_CLOCK_TIME_0900`, `the same hall as in the attached image, now in the daytime, empty, no people` | 같은 배치(카운터 = 왼쪽 벽, 시계 = 카운터 가운데 위, 계단 철문 = 안쪽 오른쪽 구석), 시계 09:00(시침 왼쪽 + 분침 위 = 직각), 표시 면은 꺼진 검은 면 | `refs/LOC_L3_LOBBY_dawn_plate.png` |

- **만드는 순서:** `HANDCLIFF_ref`(EP01 카드 10) → 17 → 18 → 19 → 20 → 21. EP01 카드가 아직 Flow 제작 전이므로, 17을 HANDCLIFF_ref보다 먼저 만들게 되면 반대로 **HANDCLIFF_ref 카드에 17을 첨부**한다(나중에 만드는 쪽이 먼저 만든 쪽을 첨부 → 두 회차의 손이 처음부터 같다, characters §4-8 시트 메모).
- 사용자 부담: EP02 필수 3장 + 권장 2장 = 최대 5장. 권장 플레이트를 빼면 L3 문장만으로 간다(새벽·낮이 같은 공간으로 보이는 힘이 약해진다 — 6+6컷이라 권장).

**별도 카드가 필요 없는 EP02 상태 (판단):**

| 상태 | 카드 | 이유 · 대신 첨부할 것 |
|---|---|---|
| 노미란 'A-정돈 중' (P45–P49) | **불필요** | 의상 A 그대로 + 두 가지 흐트러짐(눌린 단발·구겨진 블라우스)뿐. `MIRAN_turnaround`(A) + `MIRAN_expressions`를 첨부하고 흐트러짐은 문장으로. 5컷짜리 과도기 상태라 카드로 굳히면 오히려 A와 섞인다 |
| 노미란 의상 B + 코트 뭉치 (P43) | 불필요 | `MIRAN_outfitB` + EP01 panel_043 PNG(같은 문·같은 의상) |
| 서하 밤샘 (P26–P58) | **불필요** | 잔머리·눈꺼풀만 달라지는 미세 변주. 카드로 만들면 피로가 과장되거나(다크서클) 기준 외형이 둘로 갈린다. `SEOHA_turnaround` / `SEOHA_expressions` + §10-2 문장 |
| 선임 졸음 · 한쪽 눈 | 불필요 | `SEONIM_turnaround` + 상태 문장 |
| L3 엑스트라 | 불필요 | 디자인하지 않는 배경 인물(초점 밖) |

**어떤 패널에 무엇을 첨부하나 (prompt-smith 참고 · 3장 이내):**

| 레퍼런스 | 주로 붙일 패널 |
|---|---|
| `JAEWOO_turnaround` | 그의 몸·얼굴이 보이는 모든 컷(P2 · P3 · P5–P11 · P13 · P15 · P17 · P20 · P23–P25 · P33 · P34 · P38 · P40 · P41) |
| `JAEWOO_expressions` | 얼굴이 큰 컷: P3 · P6 · P13 · P19 · P34 · P41 |
| `HANDCLIFF_ref` | 손만 보이는 컷: P1 · P16 · P19 · P39 (P2는 JAEWOO_turnaround 우선) |
| `MIRAN_outfitB` / `MIRAN_turnaround` + `MIRAN_expressions` | P43 / P45–P49 · P53 · P56 (손 컷 P47 · P54 · P57은 turnaround만) |
| `SEONIM_*` | §10-0 등장 패널 |
| `SEOHA_*` | 그녀의 얼굴·몸이 보이는 컷. 손 컷(P27 · P35 · P39 · P58)은 소품 카드 우선 |
| `PROP_HANDOVER_pair` | P34 · P35 · P40 · P54 · P55 · P57 · P58 |
| `PROP_PAGES_pair` / `PROP_STICKERS_pair` | 수칙 종이 클로즈업 P16 · P18 · P19 · P27 · P37 / P52 |
| L3 플레이트 | dawn → P45–P52 · day → P53 · P56 |
| EP01 패널 PNG | style-bible §5-5 · beatsheet §3-1의 재사용 구도, 기억 비네트 원본(style-bible §4-3) |

### 10-7. 패널 검수표 — EP02 인물 축 (§8에 덧붙임 · panel-validator)

| 인물 | 반드시 맞아야 하는 것 | 실패 예 |
|---|---|---|
| JAEWOO | RIGHT 검지 은반지 · 흰 커프스가 차콜 소맷부리 밖 · 빈 클립 목줄 · 다크서클 · 웃자란 앞머리 · 오프화이트 운동화 · 정상 그림자·마른 옷·산 사람 피부 · 몸은 빛 가장자리(손만 노란 원 안) · 롤은 손에 들 때만 | 왼손 반지·금반지·반지 둘, 목줄에 카드, 안경, 푸르거나 투명한 피부, 그림자 없음, 젖음, 장발, 당직석에 앉음, 주머니로 비치는 빨강 |
| JAEWOO 손 (P1 · P16 · P19 · P39) | EP01 HAND-CLIFF와 같은 손 · P1은 **빈손**(롤은 책상 위) · P2는 턱선에서 잘림(얼굴 없음) | P1에 롤을 든 손, P2에 얼굴이 보임 |
| SEOHA (EP02) | §8 그대로 + P26부터 잔머리·피곤한 눈 · **다크서클 없음** · P44부터 토트백 LEFT 어깨 · 09:00까지 의상 A | 다크서클, 패딩·바깥 옷, 머리를 푼 모습 |
| MIRAN (EP02) | P43 B(담요·비뚤어진 안경) + 팔의 코트 뭉치 · P45–P49 코트를 다시 어깨에(팔은 소매 밖) + 눌린 단발 + 구겨진 블라우스 + **안경 똑바로** · P53–P57 A 완전 복구 · 금시계 LEFT 손목 · 빨강 0 | 'A-정돈 중'에 담요, 코트 소매에 팔, P53 이후 흐트러진 머리, 립·네일 빨강, 책상 위 빨간 롤 |
| SEONIM (EP02) | §8 그대로 + 재우를 보지 않음 · 졸 때 눈 감음 | 재우와 눈 맞춤, 안경 착용 |
| L3 엑스트라 | 09:00에만 · 초점 밖 · 주요 인물의 주색·실루엣 없음 | 새벽에 사람, 머스터드·검은 코트·차콜 카디건 차림, 명찰 글씨 |
