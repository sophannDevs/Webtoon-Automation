# EP02 레터링 명세 — 「같은 가로등 아래」 / «ក្រោមភ្លើងផ្លូវដដែល» (letterer · Khmer edition)

- 작성: letterer · 2026-11-26 · Phase 4 (Khmer edition + Flow-by-hand mode) · story `regression`
- 입력: `03_episode/ep02_script_final.md`(Khmer review READY, 수정하지 않음), `04_visual/ep02_shotlist.md`(art_space·화면 위치·gutter), `04_visual/style-bible.md` §8 + E2-6, `00_input/brief.md`(판정 AK·BA–BJ), `02_story/glossary_km.md`, EP01 정본 `04_visual/ep01_lettering.md`(형식·관례 그대로)
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음·시간 표지(env)는 뷰어(`km_tool.py build`)가 그린다.
  `art_space`는 이미지가 비워 둘 자리다 — prompt-smith는 괄호 안 영어(EN)를
  `Keep <EN> as calm, empty background with no important details (a speech bubble will be added there later).`로 넣는다.
- `text_km`는 대본 KM 줄 그대로(글자 단위, 스크립트로 복사). 한 줄을 두 말풍선으로 나눈 곳(004·006·009·017·041)은 KM 줄을 그 자리에서 잘랐을 뿐 글자는 그대로다(km_tool이 이어 붙여 대조). `text_ko`는 참고용, 화면에 나오지 않음.
- `place`: x/y = 말풍선 중심, w = 최대 폭(패널 폭 %). 모든 말풍선 `x + w ≤ 100` 및 `x − w/2 ≥ 2`(프레임 안).
  9:16 패널 기준 1줄 ≈ 패널 높이 6%, 2줄 ≈ 9–10%. 폭은 말풍선당 2줄 이내가 되게 잡았다(EP01과 같은 기준: 크메르어 글자 수 ≈ 폭 %).
- 꼬리: `↙ ↓ ↘`(아래) / `↖ ↑ ↗`(위). thought는 꼬리 없음. **뷰어 꼬리는 위/아래만 있다** — 화면 밖 화자(012 태호, 오른쪽 위 밖)는 꼬리 `↗`로 그 가장자리를 가리킨다.
- 말풍선 종류: 괄호 없음 = dialogue · (속말) = thought · (전화) = dialogue + 꼬리 → 폰(EP01 026 ①과 같음, 뷰어에 전화 전용 타입 없음) · (화면 밖) = 꼬리를 그 가장자리로. EP02에는 shout·memory·narration 0.
- `gap_after`(px): tight 16 · normal 50 · wide 160 · xwide 320 (샷리스트 gutter_after). **046 → 0**(047 직전 간격 0, 판정 BJ), 060 → 0(회차 끝).
- 패널 60 · 글자 패널 44 · 말풍선 55 (dialogue 43 · thought 12) · env 1 (025) · sfx 2 (025·055) · 무대사 16 (046·047은 무대사지만 오른쪽 아래 1/4 비움).

---

### panel_001
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_002
- art_space: 위쪽 40% = 밤하늘·전깃줄 사이 빈 면(속말 둘, 위 → 아래) (EN: the upper 40% of the frame: plain dark night sky between the power lines)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "ចិញ្ចៀននោះ… ដៃអ្នកណា។"
  - text_ko: "그 반지는… 누구 손이지."
  - place: x 30% · y 10% · w 30%
  - read_order: 1
  - note: 속말 ① — 꼬리 없음. 진우는 가운데 아래 1/3, 가로등·반사경은 왼쪽
- bubble_2:
  - speaker: 진우
  - type: thought
  - text_km: "ខ្ទាស់នោះ… មកពីណា។"
  - text_ko: "그 핀은… 어디서 왔지."
  - place: x 58% · y 24% · w 28%
  - read_order: 2
  - note: 속말 ② — 오른쪽 조금 아래로 이어서

### panel_003
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_004
- art_space: 위쪽 오른편 1/3 = 타워 옆 어두운 밤하늘 (EN: the upper-right third of the frame: plain dark night sky beside the tower)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "មុនដំបូង… ត្រូវយកលោក អ៊ីម ដុកបែ ចេញមកសិន។"
  - text_ko: "먼저… 임덕배부터 꺼낸다."
  - place: x 58% · y 9% · w 42%
  - read_order: 1
  - note: 속말 ① — 한 줄(54자)을 「។」에서 둘로 나눔. 경비실 노란 창(가운데 위, 타워 아래)은 가리지 않는다
- bubble_2:
  - speaker: 진우
  - type: thought
  - text_km: "ដោយគ្មានកាត។"
  - text_ko: "카드 없이."
  - place: x 74% · y 21% · w 22%
  - read_order: 2
  - note: 속말 ② — 같은 줄의 끝
- note: 경비실은 따뜻하고 평범하게 — 말풍선이 경비실 창을 덮지 않게(재독 비트).

### panel_005
- art_space: 위쪽 25% = 크림색 벽 빈 면(왼쪽 진우 위) (EN: the upper 25% of the frame: plain pale cream wall above Jinu on the left)
- gap_after: 50
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "រឿងយប់នោះ សូមលោកនិយាយម្តងទៀត ពីដើមមក បាទ។"
  - text_ko: "그날 밤 일, 처음부터 다시 말씀해 주세요."
  - place: x 30% · y 10% · w 42% · tail ↙
  - read_order: 1
  - note: 진우 — 왼쪽, 수화기를 귀에

### panel_006
- art_space: 위쪽 왼편 1/3 = 유리 너머 크림 벽 (EN: the upper-left third of the frame: plain cream wall behind the glass)
- gap_after: 16
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "មានឡានមួយ ចេញទៅមុន។"
  - text_ko: "먼저 간 차가 있었어요."
  - place: x 22% · y 9% · w 30% · tail ↘
  - read_order: 1
  - note: 덕배 ① — 오른쪽 가운데(유리 너머). 한 줄(54자)을 「។」에서 둘로 나눔
- bubble_2:
  - speaker: 덕배
  - type: dialogue
  - text_km: "ភ្លើងក្រហមខាងក្រោយ… បត់ចុះទៅក្រោម។"
  - text_ko: "빨간 뒷불이… 아래로 꺾였어요."
  - place: x 30% · y 21% · w 38% · tail ↘
  - read_order: 2
  - note: 덕배 ② — 같은 줄의 끝
- note: 아래쪽 손 몸짓(비탈을 그리는 손)은 가리지 않는다.

### panel_007
- art_space: 위쪽 오른편 1/4 = 유리 너머 흐린 크림 벽 (EN: the upper-right quarter of the frame: blurred plain cream wall behind the glass)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "លើកនេះ ខ្ញុំកត់ទុក ដូចលោកនិយាយទាំងអស់ បាទ។"
  - text_ko: "그 말, 그대로 씁니다. 이번엔."
  - place: x 60% · y 10% · w 40% · tail ↙
  - read_order: 1
  - note: 진우 — 입·턱은 위쪽 왼편, 꼬리 → 입
- note: 아래 가운데 수첩·손·유리에 비친 덕배 얼굴은 가리지 않는다.

### panel_008
- art_space: 위쪽 30% = 크림 벽 빈 면(① 오른쪽 덕배 위, ② 왼쪽 진우 위 조금 아래) (EN: the upper 30% of the frame on both sides of the glass partition: plain cream wall)
- gap_after: 160
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "ស៊ូអា… មិនដឹងជាវាហូបបាយទៀងពេលឬអត់ទេ…"
  - text_ko: "수아는… 밥은 먹고 다니는지."
  - place: x 60% · y 9% · w 38% · tail ↘
  - read_order: 1
  - note: 덕배 — 오른쪽(유리 너머)
- bubble_2:
  - speaker: 진우
  - type: dialogue
  - text_km: "…លោកចេញមក ហើយមើលកូនស្រីផ្ទាល់ភ្នែកចុះ បាទ។"
  - text_ko: "…나오셔서, 직접 보세요."
  - place: x 28% · y 22% · w 42% · tail ↙
  - read_order: 2
  - note: 진우 — 왼쪽, 바로 대답

### panel_009
- art_space: 위쪽 1/3 = 흐린 흰 하늘(가운데~오른쪽) (EN: the upper third of the frame, centre to right: hazy plain white sky)
- gap_after: 50
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "បើម៉ូតូបុក… ត្រឹមស្មងជើង។"
  - text_ko: "스쿠터였다면, 정강이."
  - place: x 54% · y 9% · w 32%
  - read_order: 1
  - note: 속말 ① — 한 줄(49자)을 「។」에서 둘로 나눔. 왼쪽 위 꺼진 가로등·반사경은 피함
- bubble_2:
  - speaker: 진우
  - type: thought
  - text_km: "តែស្នាមរបួស… ត្រឹមភ្លៅ។"
  - text_ko: "상처는… 허벅지 높이."
  - place: x 64% · y 20% · w 32%
  - read_order: 2
  - note: 속말 ② — 같은 줄의 끝

### panel_010
- art_space: 위쪽 왼편 1/4 = 흰 하늘·타워 벽 빈 면 (EN: the upper-left quarter of the frame: plain white sky and bare tower wall)
- gap_after: 160
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "កាមេរ៉ានោះ។ ត្រឹមតែយប់នោះ… គ្មានរូបសោះ។"
  - text_ko: "저 카메라. 그날 밤만… 비어 있었지."
  - place: x 24% · y 9% · w 40%
  - read_order: 1
  - note: 속말 — 셔터 위 CCTV 카메라(위쪽 1/3 높이)는 가리지 않는다

### panel_011
- art_space: 위쪽 1/4 = 천장 패널·창 위 흰 빛 (EN: the upper quarter of the frame: plain ceiling panels and white light above the window)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "កម្ពស់របួស។ យប់ដែលគ្មានរូប។ ឡានដែលចេញទៅមុន។"
  - text_ko: "높이. 비어 있던 밤. 먼저 간 차."
  - place: x 50% · y 9% · w 46%
  - read_order: 1
  - note: 속말 — 세 낱말 조각, 손가락 셋 위

### panel_012
- art_space: 위쪽 왼편 1/3 = 칸막이 너머 흐린 사무 층 (EN: the upper-left third of the frame: blurred office floor and desk rows beyond the partition)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អូនជីនូ សព្វថ្ងៃរវល់ម្ល៉េះ? ហាៗ"
  - text_ko: "우리 진우, 요즘 바쁘네? 하하."
  - place: x 30% · y 10% · w 34% · tail ↗
  - read_order: 1
  - note: 태호 (화면 밖·오른쪽 위) — 얼굴은 프레임 위로 잘림, 꼬리 → 오른쪽 위 프레임 밖
- note: 오른쪽에서 들어온 손(움켜쥠)은 가리지 않는다.

### panel_013
- art_space: 위쪽 오른편 1/3 = 흐린 창빛·천장(긴 말풍선 — 넓게) (EN: the upper-right third of the frame, extending toward the centre: blurred window light and plain ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "ខ្ញុំកំពុងសុំដោះលែងលោក អ៊ីម ដុកបែ បណ្តោះអាសន្ន បង។"
  - text_ko: "임덕배 씨 보석 청구, 준비합니다."
  - place: x 52% · y 11% · w 48% · tail ↙
  - read_order: 1
  - note: 진우 — 왼쪽 가운데. 이 회차 가장 긴 말풍선 중 하나(50자, 2줄)

### panel_014
- art_space: 위쪽 1/4 = 천장 패널 빈 면(오른쪽 태호 위) (EN: the upper quarter of the frame: plain ceiling panels above Taeho on the right)
- gap_after: 50
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "…ចូលបន្ទប់បងមក។ លោកប្រធានកំពុងចាំ។"
  - text_ko: "…내 방으로. 대표님 와 계셔."
  - place: x 60% · y 9% · w 36% · tail ↓
  - read_order: 1
  - note: 태호 — 오른쪽 가운데

### panel_015
- art_space: 위쪽 1/4 = 블라인드 위 흰 창빛·천장(가운데 기 대표 위) (EN: the upper quarter of the frame: plain white window light and ceiling above the blinds)
- gap_after: 50
- bubble_1:
  - speaker: 기 대표
  - type: dialogue
  - text_km: "ដោះលែង? យកអាដឹកម្ហូបនោះចេញមកធ្វើអី?"
  - text_ko: "보석? 그 배달꾼을 왜 꺼내."
  - place: x 50% · y 9% · w 38% · tail ↓
  - read_order: 1
  - note: 기 대표 — 가운데 아래 소파, 꼬리 ↓

### panel_016
- art_space: 위쪽 30% = 블라인드 줄무늬 위 흐린 유리벽(① 오른쪽, ② 왼쪽 조금 아래) (EN: the upper 30% of the frame: blurred plain glass wall above the blind stripes)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "រឿងកាត មិនលើកមកនិយាយទេ មែនទេ?"
  - text_ko: "카드 얘기는 안 나오지?"
  - place: x 62% · y 9% · w 32% · tail ↘
  - read_order: 1
  - note: 태호 — 앞쪽 오른편
- bubble_2:
  - speaker: 진우
  - type: dialogue
  - text_km: "ខ្ញុំធ្វើដោយគ្មានកាត បង។"
  - text_ko: "카드 없이 합니다."
  - place: x 28% · y 21% · w 28% · tail ↓
  - read_order: 2
  - note: 진우 — 왼쪽 가운데

### panel_017
- art_space: 위쪽 왼편 1/3 = 블라인드 위 흐린 창빛 (EN: the upper-left third of the frame: blurred window light above the blinds)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អ្នកដឹកម្ហូបនោះ ទុកនៅដដែលទៅ។"
  - text_ko: "기사는 그대로 둬."
  - place: x 26% · y 9% · w 34% · tail ↘
  - read_order: 1
  - note: 태호 ① — 오른쪽 가운데. 한 줄(53자)을 「។」에서 둘로 나눔
- bubble_2:
  - speaker: 태호
  - type: dialogue
  - text_km: "កុំធ្វើរឿងឲ្យធំឥតការណា៎។"
  - text_ko: "괜히 일 키우지 말고."
  - place: x 34% · y 21% · w 30% · tail ↘
  - read_order: 2
  - note: 태호 ② — 같은 줄의 끝

### panel_018
- art_space: 위쪽 오른편 1/3 = 흐린 배경 빈 면 (EN: the upper-right third of the frame: plain blurred background)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "គាត់ជាប់ឃុំកាន់តែយូរ… ការកាត់ក្តីក៏កាន់តែអូស។"
  - text_ko: "기사가 오래 갇혀 있을수록, 재판이 길어집니다."
  - place: x 56% · y 11% · w 44% · tail ↙
  - read_order: 1
  - note: 진우 — 왼쪽 가운데

### panel_019
- art_space: 위쪽 왼편 1/3 = 진우 위 흐린 유리벽 (EN: the upper-left third of the frame: blurred plain glass wall above Jinu in the background)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "កាត់ក្តីអូសយូរ… រឿងឡាននឹងផុសឡើង បាទ។"
  - text_ko: "재판이 길어지면, 차 얘기가 나옵니다."
  - place: x 26% · y 10% · w 38% · tail ↓
  - read_order: 1
  - note: 진우 — 배경 왼쪽(초점 약간 밖), 꼬리 → 배경 진우(전경 기 대표 아님)
- note: 전경 오른쪽 아래 기 대표의 얼굴·시계 위 손가락은 가리지 않는다.

### panel_020
- art_space: 위쪽 30% = 블라인드 위 창빛(왼쪽 진우 위) (EN: the upper 30% of the frame: plain window light above the blinds, above Jinu on the left)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "បើចង់ការពារកូនក្តី… ត្រូវឲ្យគាត់ចេញឆាប់ៗ។"
  - text_ko: "의뢰인을 지키려면, 빨리 내보내야죠."
  - place: x 28% · y 10% · w 42% · tail ↓
  - read_order: 1
  - note: 진우 — 왼쪽 ⟨이중의미⟩

### panel_021
- art_space: 위쪽 1/4 = 어둑한 블라인드 위쪽 빈 면 (EN: the upper quarter of the frame: dim plain area above the blinds)
- gap_after: 160
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…ព្រោះយើងជាគ្រួសារតែមួយ។"
  - text_ko: "…가족이니까요."
  - place: x 50% · y 10% · w 30% · tail ↓
  - read_order: 1
  - note: 진우 — 가운데, 단독 말풍선(사이다 정점)

### panel_022
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_023
- art_space: 위쪽 30% = 블라인드 위 창빛(① 왼쪽, ② 오른쪽 조금 아래) (EN: the upper 30% of the frame: plain window light above the blinds, above both men)
- gap_after: 16
- bubble_1:
  - speaker: 기 대표
  - type: dialogue
  - text_km: "…ក្មេងនោះ និយាយត្រូវដែរ មេធាវីចូ។"
  - text_ko: "…저 친구 말이 맞네, 조 변호사."
  - place: x 28% · y 9% · w 36% · tail ↙
  - read_order: 1
  - note: 기 대표 — 왼쪽 아래 소파
- bubble_2:
  - speaker: 태호
  - type: dialogue
  - text_km: "…អើ។ ធ្វើទៅ អូន។"
  - text_ko: "…그래. 해 봐."
  - place: x 70% · y 20% · w 24% · tail ↓
  - read_order: 2
  - note: 태호 — 오른쪽
- note: 진우는 프레임 밖(왼쪽 문) — 말풍선에 진우 없음.

### panel_024
- art_space: 위쪽 왼편 1/3 = 유리벽 위 흐린 천장 (EN: the upper-left third of the frame: blurred plain ceiling above the glass wall)
- gap_after: 320
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អូនជីនូរបស់បង ពូកែមែន។ ហាៗ"
  - text_ko: "역시 우리 진우. 하하."
  - place: x 28% · y 10% · w 32% · tail ↘
  - read_order: 1
  - note: 태호 — 전경 오른쪽, 꼬리 → 전경 태호(배경 진우 아님)

### panel_025
- art_space: 위쪽 1/3 = 흐린 창 위 빈 면(`env`) + 폰 오른쪽 옆 빈 책상 면(효과음) (EN: the upper third of the frame: plain blurred area above the window; and a small patch of empty desk to the right of the phone)
- gap_after: 16
- env_1:
  - text_km: "បីថ្ងៃក្រោយ"
  - text_ko: "사흘 뒤"
  - on: 시간 표지 — 위쪽 창 위 빈 면
  - style: screen
  - place: x 50% · y 12% · size 6%
- sfx_1:
  - text_km: "វឺត… វឺត…"
  - text_ko: "부르르… (폰 진동, 폰 오른쪽 옆)"
  - place: x 74% · y 58% · size 6% · rot -6
- note: env는 말풍선이 아니라 뷰어가 쓰는 시간 표지(EP01 P11과 같은 screen 스타일).
- note: 효과음은 폰 오른쪽 옆 — 오른쪽 가장자리로 다가오는 진우 손끝은 가리지 않는다.

### panel_026
- art_space: 위쪽 왼편 1/3 = 흐린 창 위 빈 면 (EN: the upper-left third of the frame: plain blurred area above the window)
- gap_after: 50
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…បាទ។ អនុញ្ញាតឲ្យគាត់ចេញហើយ?"
  - text_ko: "…네. 보석, 허가요."
  - place: x 26% · y 9% · w 34% · tail ↘
  - read_order: 1
  - note: 진우 ① — 가운데 약간 왼쪽, 폰은 오른쪽 귀
- bubble_2:
  - speaker: 진우
  - type: dialogue
  - text_km: "…អរគុណ បាទ។"
  - text_ko: "…감사합니다."
  - place: x 30% · y 20% · w 20% · tail ↘
  - read_order: 2
  - note: 진우 ② — 같은 화자
- note: 상대(법원 쪽) 목소리 말풍선 0.

### panel_027
- art_space: 위쪽 1/3 = 창 위 흐린 흰 빛 (EN: the upper third of the frame: soft plain white light above the window)
- gap_after: 160
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "លើកដំបូង… ខ្ញុំប្តូររឿងមួយបាន។"
  - text_ko: "처음으로… 하나를 바꿨다."
  - place: x 40% · y 11% · w 34%
  - read_order: 1
  - note: 속말 ⟨이중의미⟩ — 진우 옆얼굴은 오른쪽

### panel_028
- art_space: 위쪽 1/3 = 금빛 받은 콘크리트 벽 빈 면(오른쪽 덕배 위) (EN: the upper third of the frame: plain concrete wall in golden evening light, above Deokbae on the right)
- gap_after: 50
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "លោកមេធាវី… អរគុណច្រើនណាស់។"
  - text_ko: "변호사님… 고맙습니다."
  - place: x 62% · y 11% · w 32% · tail ↓
  - read_order: 1
  - note: 덕배 — 오른쪽, 허리를 숙임

### panel_029
- art_space: 위쪽 1/4 = 김·천장 형광 빛(가운데 수아 위) (EN: the upper quarter of the frame: soft steam and plain ceiling light)
- gap_after: 16
- bubble_1:
  - speaker: 수아
  - type: dialogue
  - text_km: "ប៉ា… ញ៉ាំសិនទៅ។"
  - text_ko: "아빠. 드세요."
  - place: x 50% · y 9% · w 22% · tail ↓
  - read_order: 1
  - note: 수아 — 가운데, 아버지에게

### panel_030
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_031
- art_space: 위쪽 왼편 1/3 = 문 위 김 서린 벽·천장 (EN: the upper-left third of the frame: steamy plain wall and ceiling above the door)
- gap_after: 16
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "កូនស៊ូអា ដាក់មួយចានឲ្យលោកមេធាវីផង។"
  - text_ko: "수아야, 변호사님 것도 한 접시."
  - place: x 28% · y 10% · w 36% · tail ↘
  - read_order: 1
  - note: 덕배 — 앞쪽 오른편, 꼬리 → 덕배(문간 진우 아님)

### panel_032
- art_space: 위쪽 1/4 = 김·천장(왼쪽 진우 위, 수아 팔 옆) (EN: the upper quarter of the frame on the left: soft steam and plain ceiling, beside the daughter's arm)
- gap_after: 50
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…អញ្ចឹង ខ្ញុំសុំញ៉ាំ បាទ។"
  - text_ko: "…잘 먹겠습니다."
  - place: x 24% · y 9% · w 30% · tail ↓
  - read_order: 1
  - note: 진우 — 왼쪽
- note: 위에서 내려오는 수아의 팔은 가리지 않는다(🔒 얼굴 0).

### panel_033
- art_space: 위쪽 왼편 1/3 = 김 서린 벽 (EN: the upper-left third of the frame: steamy plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "យប់នោះ… ខ្ញុំចូលផ្លូវតូចនោះ ព្រោះ…"
  - text_ko: "그날 밤… 제가 그 골목으로 간 건요."
  - place: x 28% · y 10% · w 36% · tail ↘
  - read_order: 1
  - note: 덕배 — 오른쪽 가운데

### panel_034
- art_space: 위쪽 1/3 = 김·천장, 왼쪽~가운데(긴 말풍선 — 넓게) (EN: the upper third of the frame, left to centre: soft steam and plain ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "ភ្ញៀវនៅក្នុងអគារ ប្រាប់ឲ្យខ្ញុំវាងមកខាងក្រោយ…"
  - text_ko: "건물 손님이 뒷문으로 오라고 해서…"
  - place: x 44% · y 10% · w 46% · tail ↘
  - read_order: 1
  - note: 덕배 — 오른쪽 가운데, 「뒤쪽」 손짓 ⟨이중의미⟩
- note: W12 🔒 — 033과 같은 자리·같은 크기 감각(특별해 보이지 않게).

### panel_035
- art_space: 위쪽 왼편 1/3 = 김 서린 벽 (EN: the upper-left third of the frame: steamy plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 덕배
  - type: dialogue
  - text_km: "…រឿងចាស់ហើយ។ ពិសាទៅ លោកមេធាវី។"
  - text_ko: "…다 지난 일이죠. 드세요, 변호사님."
  - place: x 28% · y 10% · w 34% · tail ↘
  - read_order: 1
  - note: 덕배 — 오른쪽 가운데

### panel_036
- silent: true
- art_space: 없음(silent)
- gap_after: 320

### panel_037
- art_space: 위쪽 1/4 = 천장 패널·창 위 흰 빛(오른쪽 태호 위) (EN: the upper quarter of the frame: plain ceiling panels and white window light above Taeho on the right)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "ឮថា ចៅលោកតា ក៏ប្រឡងជាប់ឆ្នាំនេះដែរ។ ហាៗ"
  - text_ko: "고문님 손주도 올해 시험 붙었다더라. 하하."
  - place: x 58% · y 9% · w 40% · tail ↓
  - read_order: 1
  - note: 태호 — 오른쪽, 들뜬 얼굴

### panel_038
- art_space: 위쪽 왼편 40% = 흐린 사무 층 천장·창빛(둘, 위 → 아래) (EN: the upper-left 40% of the frame: blurred plain office ceiling and window light)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "រឿងកាមេរ៉ាសុវត្ថិភាព ដែលអូនលើកមកនោះ…"
  - text_ko: "네가 짚은 그 CCTV 말이야."
  - place: x 28% · y 9% · w 38% · tail ↘
  - read_order: 1
  - note: 태호 ① — 오른쪽 가운데, 낮은 목소리
- bubble_2:
  - speaker: 태호
  - type: dialogue
  - text_km: "ប៉ូលិសថា ឥឡូវនឹងស៊ើបរឿងអ្នកយាមវេនយប់នោះហើយ។"
  - text_ko: "경찰이 이제, 그날 밤 당직을 본대."
  - place: x 34% · y 22% · w 44% · tail ↘
  - read_order: 2
  - note: 태호 ② — 같은 화자

### panel_039
- art_space: 위쪽 1/3 = 수첩 너머 흐린 책상 면 (EN: the upper third of the frame: blurred plain desk surface beyond the notepad)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "អ្នកយាមវេន… យប់នោះ។"
  - text_ko: "그날 밤… 당직."
  - place: x 50% · y 12% · w 26%
  - read_order: 1
  - note: 속말 — 손·펜은 가운데

### panel_040
- art_space: 위쪽 왼편 40% = 남색 밤하늘·경비실 지붕 위 빈 면(둘 세로로) (EN: the upper-left 40% of the frame: plain navy night sky above the guard booth roof)
- gap_after: 16
- bubble_1:
  - speaker: 봉구
  - type: dialogue
  - text_km: "ប៉ូលិសថា យប់ស្អែក ចង់មកមើលកន្លែងកើតហេតុម្តង។"
  - text_ko: "경찰이 내일 밤에, 현장 한 번 보자네."
  - place: x 30% · y 9% · w 44% · tail ↘
  - read_order: 1
  - note: 봉구 ① — 가운데~오른쪽 경비실 창 안. 긴 말풍선(2줄)
- bubble_2:
  - speaker: 봉구
  - type: dialogue
  - text_km: "យប់នោះ ពូជាអ្នកយាមវេន។ ហឹៗ"
  - text_ko: "그날 당직이 나였거든. 허허."
  - place: x 32% · y 22% · w 32% · tail ↘
  - read_order: 2
  - note: 봉구 ② — 같은 화자
- note: 창 오른쪽 아래 슬리브 컵(043 매치)은 가리지 않는다. 따뜻하게(재독 비트).

### panel_041
- art_space: 아래 1/4 = 창턱 아래 어두운 벽 빈 면 (EN: the lower quarter of the frame: plain dark wall below the windowsill)
- gap_after: 16
- bubble_1:
  - speaker: 봉구
  - type: dialogue
  - text_km: "អាទិត្យក្រោយ ចៅពូខួបមួយឆ្នាំហើយ។"
  - text_ko: "다음 주가 우리 손주 돌이야."
  - place: x 40% · y 81% · w 40% · tail ↗
  - read_order: 1
  - note: 봉구 ① — 입은 프레임 위쪽, 꼬리 ↑ 쪽. 한 줄(49자)을 「។」에서 둘로 나눔
- bubble_2:
  - speaker: 봉구
  - type: dialogue
  - text_km: "ម៉េចនឹងមានរឿងអី?"
  - text_ko: "별일 있겠어?"
  - place: x 72% · y 91% · w 24% · tail ↗
  - read_order: 2
  - note: 봉구 ② — 같은 줄의 끝(오른쪽 아래로 이어서)
- note: 가운데 아기 양말과 손가락(크기 대비)은 가리지 않는다.

### panel_042
- art_space: 위쪽 1/3 = 경비실 지붕 위 밤하늘(① 왼쪽 진우 위, ② 오른쪽 창 위) (EN: the upper third of the frame: plain night sky above the guard booth roof)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "ពូ… យប់នោះ ក្រែងពូ—"
  - text_ko: "아저씨, 그날 밤에 혹시—"
  - place: x 26% · y 9% · w 28% · tail ↓
  - read_order: 1
  - note: 진우 — 앞쪽 왼쪽 가운데, 끊긴 말(—)
- bubble_2:
  - speaker: 봉구
  - type: dialogue
  - text_km: "ហឹៗ ផឹកសិនទៅ ក្មួយ មុនវាត្រជាក់។"
  - text_ko: "허허, 식기 전에 마셔, 젊은 양반."
  - place: x 60% · y 21% · w 36% · tail ↘
  - read_order: 2
  - note: 봉구 — 배경 오른쪽 창 안(돌아앉는 중)

### panel_043
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_044
- art_space: 위쪽 1/4 = 전깃줄 위 어두운 밤하늘 (EN: the upper quarter of the frame: plain dark night sky above the power lines)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "…ពូ។"
  - text_ko: "…아저씨."
  - place: x 40% · y 10% · w 16%
  - read_order: 1
  - note: 속말 — 가장 짧은 속말, 진우 어깨는 앞쪽 오른편

### panel_045
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_046
- silent: true
- art_space: 오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘 — 무대사지만 비운다(앵커 A 구도의 일부, 말풍선 0) (EN: the lower-right quarter of the frame: dark empty asphalt and wall shadow)
- gap_after: 0
- note: 앵커 A 원본(기억). EP01 052의 속말은 반복하지 않는다. 047 직전 간격 0(같은 폭, 판정 BJ).

### panel_047
- silent: true
- art_space: 오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘 — 무대사지만 비운다(046과 같은 자리) (EN: the lower-right quarter of the frame: dark empty asphalt and wall shadow)
- gap_after: 160
- note: 앵커 A 반복(현재). 캡션·전환 글자 0.

### panel_048
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_049
- art_space: 위쪽 왼편 1/3 = 흐린 담·밤 빈 면 (EN: the upper-left third of the frame: blurred plain wall and night)
- gap_after: 50
- bubble_1:
  - speaker: 봉구
  - type: dialogue
  - text_km: "…ហឹៗ… នេះ… រឿងអីហ្នឹង…"
  - text_ko: "…허허. 이게, 무슨…"
  - place: x 26% · y 11% · w 30% · tail ↘
  - read_order: 1
  - note: 봉구 — 오른쪽 가운데, 웃음이 꺼짐

### panel_050
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_051
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_052
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_053
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_054
- art_space: 위쪽 왼편 1/3 = 어두운 밤·담 위 빈 면 (EN: the upper-left third of the frame: plain dark night above the wall)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "ទើបតែដោះលែងបាន… បីថ្ងៃ។"
  - text_ko: "풀려난 지… 사흘째."
  - place: x 28% · y 11% · w 30%
  - read_order: 1
  - note: 속말 — 반전 정점, 단독. 배경 왼쪽 아래 봉구 실루엣은 가리지 않는다

### panel_055
- art_space: 폰 왼쪽 옆 어두운 빈 면(효과음) (EN: the plain dark area just to the left of the phone)
- gap_after: 16
- sfx_1:
  - text_km: "វឺត… វឺត…"
  - text_ko: "부르르… (폰 진동, 폰 왼쪽 옆)"
  - place: x 22% · y 48% · size 7% · rot -8
- note: 025와 같은 글자의 효과음(진동 운율). 말풍선 0.

### panel_056
- art_space: 위쪽 오른편 1/3 = 폰 쪽 위 어두운 담·밤 빈 면 (EN: the upper-right third of the frame: plain dark wall and night above the phone side)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អូនជីនូ។"
  - text_ko: "진우야."
  - place: x 72% · y 12% · w 22% · tail ↙
  - read_order: 1
  - note: 태호 (전화) — 폰에서 나오는 말풍선, 꼬리 → 진우 오른쪽 귀의 폰
- note: 뷰어에 전화 전용 타입이 없어 EP01 026 ①처럼 dialogue + 꼬리 → 폰. 등 뒤 아래 봉구 실루엣은 가리지 않는다.

### panel_057
- art_space: 위쪽 왼편 1/3 = 어두운 창 위 빈 면 (EN: the upper-left third of the frame: plain dark window area)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "ខាងលើ… ឆែកមើលហើយ។"
  - text_ko: "위에서 확인했대."
  - place: x 30% · y 11% · w 28% · tail ↘
  - read_order: 1
  - note: 태호 — 오른쪽 가운데, 폰을 귀에. 화면에 보이는 화자라 dialogue, 꼬리 → 태호 입(폰도 같은 쪽)
- note: 판정 BD: phone 타입 허용 — 화자가 화면에 보이므로 dialogue로 정함(뷰어에서 두 타입은 같은 모양, 꼬리 대상만 다름).

### panel_058
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_059
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_060
- art_space: 위쪽 1/3 = 어둠(폰 가장자리 위쪽) (EN: the upper third of the frame: plain darkness above the edge of the phone)
- gap_after: 0
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "…គេថា កាតនោះ ទទេស្អាត។"
  - text_ko: "…빈 카드라더라."
  - place: x 30% · y 12% · w 28% · tail ↙
  - read_order: 1
  - note: 태호 (전화) — 꼬리 → 왼쪽 가장자리의 폰. 회차 끝, 엔딩 카드 없음
- note: 클리프행어 — 단독 말풍선. 눈(가운데)은 가리지 않는다.
---

## Flags for the leader

| # | 내용 | 요청 |
|---|---|---|
| LT2-F1 | **긴 줄 다섯 개를 두 말풍선으로 나눴다**(004 속말 54자 · 006 덕배 54자 · 009 속말 49자 · 017 태호 53자 · 041 봉구 49자). 모두 문장 끝 `។`에서 잘랐고 글자는 대본 그대로 — km_tool check가 이어 붙여 대조한다. 그 결과 말풍선 수 = 대사 50줄 + 5 = 55. 패널당 말풍선은 여전히 ≤ 2(같은 화자의 이어지는 말) | 확인만 |
| LT2-F2 | **나누지 않은 긴 말풍선:** 013 진우(50자, w 48)·034 덕배(45자, w 46)·040 ① 봉구(44자, w 44)·018 진우(45자, w 44). 샷리스트가 넓은 art_space를 준 곳이라 한 말풍선 2줄로 뒀다. 013은 art_space(위쪽 오른편 1/3)보다 가운데 쪽으로 넓다(x 52 · 28–76%) — `x + w ≤ 100` 때문에 오른쪽에 붙일 수 없다 | episode-compositor 배치 단계에서 실제 이미지로 확인, 3줄이 되면 y만 조정 |
| LT2-F3 | **004:** art_space는 위쪽 오른편 1/3인데 ①(41자)은 `x + w ≤ 100` 때문에 가운데 위쪽(37–79%)까지 걸친다. 경비실 노란 창(재독 비트)은 타워 아래라 말풍선(y 4–14%)보다 낮다고 보았다 | prompt-smith: 위쪽 가운데~오른쪽 하늘도 비워 두기. 배치 단계에서 창을 덮으면 y만 조정 |
| LT2-F4 | **057 = dialogue**(판정 BD로 phone 타입도 허용). 태호가 화면에 보이는 컷이라 꼬리 → 태호(입·폰 같은 쪽). 뷰어에 전화 전용 타입이 없어 056·060(전화)도 dialogue + 꼬리 → 진우 귀의 폰(EP01 LT-F2와 같음) | 리더 확인 |
| LT2-F5 | **012 화면 밖 화자:** 태호 얼굴이 프레임 위로 잘림 → 꼬리 `↗`(위쪽, 오른편)로 오른쪽 위 프레임 밖을 가리킨다. 꼬리가 프레임 밖까지 나가지는 않는다(EP01 LT-F1과 같은 뷰어 한계) | — |
| LT2-F6 | **041:** art_space가 아래 1/4이라 말풍선 둘을 아래에 두고 꼬리 `↗`를 위쪽(봉구의 입·손)으로 — EP01 036과 같은 방식. 꼬리에서 입까지 멀다 | 배치 단계에서 확인 |
| LT2-F7 | **025 env 「បីថ្ងៃក្រោយ」 = `style: screen`**(EP01 P11 시간 표지와 같은 흰 글씨). 늦은 오후 창 위의 밝은 면에서는 흐릴 수 있다(EP01 LT-F5와 같은 위험). 효과음(x 74 · y 58)은 폰 오른쪽 옆 책상 — 오른쪽 가장자리의 진우 손끝과 가까우니 배치 단계에서 확인 | episode-compositor |
| LT2-F8 | **046·047 = silent + art_space(오른쪽 아래 1/4)** — 말풍선 0이지만 빈 면 문장은 넣었다(샷리스트 PD2-F4, 판정 BJ). `gap_after` 046 = 0, 047 = 160(wide) | prompt-smith: 046·047에도 빈 면 문장 |
| LT2-F9 | 019(꼬리 → 배경 진우, 전경 기 대표 아님)·024(꼬리 → 전경 태호)·031(꼬리 → 앞쪽 덕배) — 전경-배경 두 사람 컷에서 화자 쪽을 note에 적었다. 023은 진우가 프레임 밖이라 말풍선 둘 다 화면 안 화자 | — |
| LT2-F10 | EP01 파일 수정 0. `ep02_script_final.md` 수정 0 | — |
