# EP01 레터링 명세 — 「그날 나는 증거를 숨겼다」 / «ថ្ងៃនោះ ខ្ញុំបានលាក់ភស្តុតាង» (letterer · Khmer edition)

- 작성: letterer · 2026-11-26 · Phase 4 (Khmer edition + Flow-by-hand mode) · story `regression`
- 입력: `03_episode/ep01_script_final.md`(Khmer review READY, 수정하지 않음), `04_visual/ep01_shotlist.md`(art_space·화면 위치·gutter — 판정 AJ: 샷리스트 연출이 EP01 정본), `04_visual/style-bible.md` §8, `00_input/brief.md`(판정 S·Z·AD·AJ), `02_story/glossary_km.md`
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음·시간 표지(env)는 뷰어(`km_tool.py build`)가 그린다.
  `art_space`는 이미지가 비워 둘 자리다 — prompt-smith는 괄호 안 영어(EN)를
  `Keep <EN> as calm, empty background with no important details (a speech bubble will be added there later).`로 넣는다.
- `text_km`는 대본 KM 줄 그대로(글자 단위, 스크립트로 복사). `text_ko`는 참고용, 화면에 나오지 않음.
- `place`: x/y = 말풍선 중심, w = 최대 폭(패널 폭 %). 모든 말풍선 `x + w ≤ 100` 및 `x − w/2 ≥ 2`(프레임 안).
  9:16 패널 기준 1줄 ≈ 패널 높이 6%, 2줄 ≈ 9–10%. 폭은 말풍선당 2줄 이내가 되게 잡았다(크메르어 글자 수 기준).
- 꼬리: `↙ ↓ ↘`(아래) / `↖ ↑ ↗`(위). thought는 꼬리 없음. **뷰어 꼬리는 위/아래만 있다** — 화면 밖 왼쪽 화자(003·006)는 말풍선을 왼쪽 가장자리(x − w/2 = 2)에 붙이고 꼬리 `↙`(왼쪽 아래 모서리)로 프레임 밖 왼쪽을 가리킨다.
- 말풍선 종류: 괄호 없음 = dialogue · (속말) = thought · (외침) = shout · (기억) = memory · (전화) = dialogue + 꼬리 → 폰 · (낮게) = dialogue(작은 폭, 뷰어에 whisper 타입 없음) · (화면 밖) = 꼬리를 그 가장자리로.
- `gap_after`(px): tight 16 · normal 50 · wide 160 · xwide 320 (샷리스트 gutter_after). 052 → 0(053 직전 간격 0), 060 → 0(회차 끝).
- 패널 60 · 말풍선 48 (생각 12 · 기억 3 · 외침 1) · sfx 3 (011·012·039) · env 1 (011) · 무대사 23.

---

### panel_001
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_002
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_003
- art_space: 화면 왼쪽 1/3, 위쪽에서 가운데까지 = 빈 남색 어둠 (사람 형체·그림자·손 0) (EN: the left third of the frame from the top down to the middle: empty flat navy darkness, no figure, shadow or hand)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "គឺឯងទេតើ ដែលលាក់វា។ តាំងពីដំបូងមក។"
  - text_ko: "네가 숨긴 거잖아. 처음부터."
  - place: x 19% · y 24% · w 34% · tail ↙
  - read_order: 1
  - note: 화면 밖·왼쪽 화자 — 말풍선을 왼쪽 가장자리에 붙이고 꼬리는 왼쪽 아래 모서리(왼쪽 프레임 밖 쪽)

### panel_004
- art_space: 위쪽 왼편 1/3 = 빈 남색 밤하늘 (EN: the upper-left third of the frame: plain empty navy night sky)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…គឺបងទេតើ ដែលប្រើឲ្យខ្ញុំធ្វើ។"
  - text_ko: "…선배가 시켰잖아요."
  - place: x 24% · y 14% · w 36% · tail ↘
  - read_order: 1
  - note: 진우35 — 오른쪽 아래 2/3

### panel_005
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_006
- art_space: 위쪽 왼편 1/3 = 빈 어둠 (EN: the upper-left third of the frame: empty flat darkness)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "ចុះទៅ ហើយសារភាពឲ្យអស់ ដោយមាត់ឯងផ្ទាល់។"
  - text_ko: "내려가서, 네 입으로 다 말해."
  - place: x 21% · y 15% · w 38% · tail ↙
  - read_order: 1
  - note: 화면 밖·왼쪽 화자 — 왼쪽 가장자리에 붙이고 꼬리는 왼쪽 아래 모서리
- note: 오른쪽 끝 세로 막대·가운데 아래 손은 가리지 않는다.

### panel_007
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_008
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_009
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_010
- silent: true
- art_space: 없음(silent)
- gap_after: 320

### panel_011
- art_space: 위쪽 가운데~왼편의 빈 크림 벽 띠(env) + 오른쪽 위 높은 창 바로 아래 벽(효과음, 작게) (EN: a wide empty band of pale cream wall across the upper centre-left of the frame, and a small patch of plain wall just below the high barred window at the upper right)
- gap_after: 50
- env_1:
  - text_km: "ប្រាំពីរឆ្នាំមុន រដូវក្តៅ"
  - text_ko: "7년 전, 여름"
  - on: 시간 표지 — 위쪽 크림 벽 띠
  - style: screen
  - place: x 38% · y 14% · size 6%
- sfx_1:
  - text_km: "រ៉ឺងៗៗ…"
  - text_ko: "맴맴… (작게, 창 쪽에서)"
  - place: x 78% · y 29% · size 5% · rot -6
  - note: 매미 — 작게, 창 쪽
- note: env는 말풍선이 아니라 벽면에 뷰어가 쓰는 시간 표지. 아라비아 숫자 0(glossary).

### panel_012
- art_space: 왼쪽 위 1/3 = 흐린 녹색 벽 (EN: the upper-left third of the frame: blurred plain green wall)
- gap_after: 16
- sfx_1:
  - text_km: "ហឹក!"
  - text_ko: "헉"
  - place: x 22% · y 17% · size 9% · rot -8
  - note: 숨 들이켜는 소리 — 판정 AJ: silent 아님

### panel_013
- art_space: 위쪽 1/3 = 고른 금빛 유리 반사 면 (EN: the upper third of the frame: an even, featureless golden reflection on the glass)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "…ទីនេះ…"
  - text_ko: "…여긴."
  - place: x 50% · y 13% · w 26%
  - read_order: 1
  - note: 속말 — 꼬리 없음

### panel_014
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_015
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_016
- art_space: 위쪽 1/3 = 흐린 녹색 벽 (EN: the upper third of the frame: blurred plain green wall)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "កាតនេះ… នៅក្នុងដៃខ្ញុំនៅឡើយ។"
  - text_ko: "카드가… 아직 내 손에 있다."
  - place: x 50% · y 13% · w 36%
  - read_order: 1
  - note: 속말 — 꼬리 없음, 카드·엄지 위

### panel_017
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_018
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_019
- art_space: 위쪽 30% 띠(오른쪽 = 말풍선 ①) + 왼쪽 가운데 녹색 벽(말풍선 ②) (EN: the upper 30% of the frame as a calm band (bubble on the right), and the plain green wall at the middle left)
- gap_after: 16
- bubble_1:
  - speaker: 덕배
  - type: memory
  - text_km: "លោកមេធាវី… កាមេរ៉ាឡាន ពិតជាមិនមានមែនទេ?"
  - text_ko: "변호사님… 블랙박스요, 정말 없었어요?"
  - place: x 58% · y 10% · w 40% · tail ↘
  - read_order: 1
  - note: 덕배 — 유리 너머 오른쪽, 머리가 위쪽
- bubble_2:
  - speaker: 진우
  - type: memory
  - text_km: "…មិនមានទេ។"
  - text_ko: "…없었습니다."
  - place: x 22% · y 46% · w 26% · tail ↓
  - read_order: 2
  - note: 진우 — 왼쪽 아래, 눈을 내리깖
- note: 기억 컷 — 두 말풍선 모두 memory 타입(파란 흐린 테두리), 위 → 아래.

### panel_020
- art_space: 위쪽 왼편 1/3 = 녹색·크림 벽 (EN: the upper-left third of the frame: plain green and cream wall)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: shout
  - text_km: "ចាំសិន!"
  - text_ko: "잠깐만요!"
  - place: x 24% · y 14% · w 26% · tail ↓
  - read_order: 1
  - note: 진우 — 왼쪽, 유리를 두드림

### panel_021
- art_space: 위쪽 왼편 1/3 = 진우 머리 위 빈 벽 (EN: the upper-left third of the frame: empty wall above Jinu's head)
- gap_after: 50
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…ខ្ញុំនឹងរកវាឲ្យឃើញ លោក។"
  - text_ko: "…찾겠습니다."
  - place: x 24% · y 13% · w 34% · tail ↓
  - read_order: 1
  - note: 진우 — 왼쪽

### panel_022
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_023
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_024
- art_space: 위쪽 1/3 = 흐린 사무 층 배경 (EN: the upper third of the frame: soft blurred grey office background)
- gap_after: 320
- bubble_1:
  - speaker: 한목
  - type: memory
  - text_km: "មេធាវីល្អ តែងសរសេរដោយប៉ាកកាល្អ។"
  - text_ko: "좋은 변호사는 좋은 펜으로 쓰는 법이야."
  - place: x 50% · y 14% · w 40% · tail ↓
  - read_order: 1
  - note: 한목 — 얼굴 0. 꼬리는 아래 가운데 상자를 건네는 손 쪽
- note: 기억 컷 — memory 타입. 다정한 장면, 꼬리는 손으로.

### panel_025
- art_space: 위쪽 왼편 1/3 = 빈 콘크리트 벽·금빛 하늘 (EN: the upper-left third of the frame: plain concrete wall and golden evening sky)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "បីវិនាទីទៀត… បងនឹងតេមក។"
  - text_ko: "3초 뒤, 선배가 전화한다."
  - place: x 26% · y 13% · w 34%
  - read_order: 1
  - note: 속말 — 꼬리 없음, 진우는 가운데~오른쪽

### panel_026
- art_space: 위쪽 오른편 1/3(폰 위, 말풍선 ①) + 왼쪽 가운데 빈 벽(말풍선 ②) (EN: the upper-right third of the frame above the phone, and the plain wall at the middle left)
- gap_after: 320
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អូនជីនូ… ព្រឹកស្អែក យកកាតមកឲ្យបងផង ណា៎?"
  - text_ko: "진우야. 카드, 내일 아침에 가져와. 응?"
  - place: x 58% · y 12% · w 40% · tail ↘
  - read_order: 1
  - note: 전화 — 폰(오른쪽 귀)에서 나오는 말풍선, 꼬리 → 폰
- bubble_2:
  - speaker: 진우
  - type: dialogue
  - text_km: "បាទ បង។"
  - text_ko: "네, 선배."
  - place: x 20% · y 48% · w 24% · tail ↘
  - read_order: 2
  - note: 진우 — 얼굴은 가운데, 꼬리 → 입
- note: ①은 폰 속 목소리 — 뷰어에 전화 전용 타입이 없어 dialogue + 꼬리를 폰으로.

### panel_027
- art_space: 위쪽 오른편 1/3 = 어두운 로비 유리 윗면(봉구 머리 위) (EN: the upper-right third of the frame: the dark upper part of the lobby glass above the guard's head)
- gap_after: 50
- bubble_1:
  - speaker: 봉구
  - type: dialogue
  - text_km: "ទ្វារមុខចាក់សោហើយ។ សូមវាងមកខាងក្រោយ។"
  - text_ko: "앞문 잠겼어요, 뒤로 오세요."
  - place: x 60% · y 12% · w 38% · tail ↘
  - read_order: 1
  - note: 봉구 — 오른쪽 가운데, 손전등
- note: K-08 — 평범하게. 진우(왼쪽, 뒷모습) 반응 0.

### panel_028
- art_space: 위쪽 왼편 40% = 남색 밤하늘·경비실 지붕 위 빈 면(말풍선 두 개 세로로) (EN: the upper-left 40% of the frame: plain navy night sky above the guard booth roof)
- gap_after: 50
- bubble_1:
  - speaker: 봉구
  - type: dialogue
  - text_km: "ក្តៅណាស់ ផឹកកាហ្វេមួយកែវសិនទៅ ក្មួយ។"
  - text_ko: "더운데 이거 한 잔 하고 가, 젊은 양반."
  - place: x 22% · y 9% · w 38% · tail ↘
  - read_order: 1
  - note: 봉구 — 가운데~오른쪽 경비실 창 안
- bubble_2:
  - speaker: 봉구
  - type: dialogue
  - text_km: "មួយទៀត យកឡើងទៅជាន់លើផង ភ្លើងគេនៅភ្លឺ។ ហឹៗ"
  - text_ko: "하나는 위층에 갖다 드려. 불이 아직 켜져 있던데. 허허."
  - place: x 24% · y 22% · w 40% · tail ↘
  - read_order: 2
  - note: 봉구 — 같은 화자, 아래로 이어서

### panel_029
- art_space: 위쪽 가운데~오른편 어두운 천장(말풍선 ①, 꼬리 → 유리방) + 왼쪽 가운데 어두운 책상 줄 위(말풍선 ②) (EN: the dark ceiling across the upper centre-right of the frame, and the dark space above the desk row at the middle left)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អូនជីនូ? មិនទាន់ទៅផ្ទះទៀតអី?"
  - text_ko: "진우야? 아직 안 갔어?"
  - place: x 62% · y 10% · w 34% · tail ↘
  - read_order: 1
  - note: 태호 — 뒤쪽 오른편 멀리 유리방(실루엣), 꼬리 → 유리방
- bubble_2:
  - speaker: 진우
  - type: dialogue
  - text_km: "…ខ្ញុំភ្លេចរបស់ បាទ។"
  - text_ko: "…두고 간 게 있어서요."
  - place: x 22% · y 40% · w 28% · tail ↙
  - read_order: 2
  - note: 진우 — 앞쪽 왼편 어깨·옆얼굴

### panel_030
- art_space: 위쪽 오른편 40% = 어두운 유리벽·블라인드(태호 위, 두 개 세로) (EN: the upper-right 40% of the frame: dark glass wall and half-lowered blinds above Taeho)
- gap_after: 320
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "បងមិនផឹកកាហ្វេពេលយប់ទេ។ ហាៗ"
  - text_ko: "난 밤엔 커피 안 마셔. 하하."
  - place: x 62% · y 10% · w 34% · tail ↓
  - read_order: 1
  - note: 태호 — 오른쪽 책상
- bubble_2:
  - speaker: 태호
  - type: dialogue
  - text_km: "ព្រឹកស្អែក កុំភ្លេចណា៎ អូន។"
  - text_ko: "내일 아침, 잊지 말고."
  - place: x 64% · y 23% · w 34% · tail ↓
  - read_order: 2
  - note: 태호 — 같은 화자

### panel_031
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_032
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_033
- art_space: 위쪽 왼편 40% = 어두운 빈 벽(생각 풍선 두 개) (EN: the upper-left 40% of the frame: plain dark empty wall)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "លើកនេះ ខ្ញុំក៏លាក់វាទៀត។"
  - text_ko: "이번에도 숨깁니다."
  - place: x 24% · y 10% · w 36%
  - read_order: 1
  - note: 속말 ①
- bubble_2:
  - speaker: 진우
  - type: thought
  - text_km: "…តែលើកនេះ គឺលាក់ពីពួកអ្នកវិញ។"
  - text_ko: "…이번엔, 당신들한테서."
  - place: x 28% · y 23% · w 40%
  - read_order: 2
  - note: 속말 ②

### panel_034
- art_space: 위쪽 45% = 어두운 벽·창(생각 풍선 두 개) (EN: the upper 45% of the frame: dark wall and window with only a few soft distant lit windows)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "បង។ ប្រធានគី និងកូន។ ដៃដែលរុញខ្ញុំ។"
  - text_ko: "선배. 기 대표 부자. 날 민 손."
  - place: x 40% · y 11% · w 44%
  - read_order: 1
  - note: 속말 ①
- bubble_2:
  - speaker: 진우
  - type: thought
  - text_km: "ឈ្មោះចុងក្រោយ… គឺខ្ញុំ។"
  - text_ko: "마지막 이름은, 나."
  - place: x 56% · y 27% · w 36%
  - read_order: 2
  - note: 속말 ② — 새끼손가락 위, 손은 아래 절반

### panel_035
- art_space: 위쪽 왼편 40% = 천장 조명 패널·빈 벽(태호 머리 위) (EN: the upper-left 40% of the frame: plain ceiling light panels and empty wall above Taeho)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "អូនជីនូ។ យើងជាគ្រួសារតែមួយ។"
  - text_ko: "우리 진우. 우린 가족이야."
  - place: x 24% · y 9% · w 36% · tail ↓
  - read_order: 1
  - note: 태호 — 앞쪽 왼편
- bubble_2:
  - speaker: 태호
  - type: dialogue
  - text_km: "ចូលមកបន្ទប់បងបន្តិចណា៎។"
  - text_ko: "내 방으로 와."
  - place: x 28% · y 21% · w 32% · tail ↓
  - read_order: 2
  - note: 태호 — 같은 화자

### panel_036
- art_space: 아래쪽 왼편 1/4 = 책상 밑 어둠(주먹 쪽 여백) (EN: the lower-left quarter of the frame: plain darkness under the desk)
- gap_after: 50
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "បាទ បង។"
  - text_ko: "네, 선배."
  - place: x 20% · y 88% · w 26% · tail ↗
  - read_order: 1
  - note: 진우 — 꼬리 → 오른쪽 위 주먹
- note: 위쪽 절반 커프스(FRAME-CUFF)는 가리지 않는다.

### panel_037
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_038
- art_space: 위쪽 오른편 1/3 = 흐린 유리벽 (EN: the upper-right third of the frame: blurred glass wall and soft office behind it)
- gap_after: 50
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "បងមិនមើលទេ។ ហាៗ ដឹងហើយមែនទេ?"
  - text_ko: "난 안 봐. 하하. 알지?"
  - place: x 62% · y 12% · w 34% · tail ↙
  - read_order: 1
  - note: 태호 — 가운데~오른쪽

### panel_039
- art_space: 아래 왼편 바닥(효과음, 지팡이 끝 옆) + 위쪽 오른편 1/3 = 흰 천장·빈 벽(말풍선, 고문 머리 위) (EN: the plain floor at the lower left beside the cane tip, and the upper-right third of the frame: white ceiling and empty wall above the old man's head)
- gap_after: 16
- bubble_1:
  - speaker: 한목
  - type: dialogue
  - text_km: "ប៉ាកកានោះ ចៅចូលចិត្តទេ?"
  - text_ko: "펜은, 마음에 드나?"
  - place: x 64% · y 10% · w 32% · tail ↓
  - read_order: 1
  - note: 한목 — 가운데~오른쪽
- sfx_1:
  - text_km: "តុក… តុក…"
  - text_ko: "톡, 톡 (지팡이)"
  - place: x 22% · y 87% · size 6% · rot -4
  - note: 지팡이 두 번 — 작게
- note: 다정하게. 손목은 원래 가려져 있다(TF-6).

### panel_040
- art_space: 위쪽 왼편 1/3 = 흐린 복도 벽 (EN: the upper-left third of the frame: blurred plain corridor wall)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…បាទ លោកតា។"
  - text_ko: "…네, 고문님."
  - place: x 22% · y 14% · w 28% · tail ↙
  - read_order: 1
  - note: 진우 — 왼쪽 아래 가장자리 턱선
- note: 오른쪽 가장자리 손(FRAME-HAND-ON-BACK)은 가리지 않는다.

### panel_041
- art_space: 위쪽 25% = 하얗게 밝은 창 면(기 대표 위, 말풍선 두 개 가로로) (EN: the upper 25% of the frame: plain bright white window)
- gap_after: 50
- bubble_1:
  - speaker: 기 대표
  - type: dialogue
  - text_km: "កូនខ្ញុំ យប់នោះនៅផ្ទះ។"
  - text_ko: "우리 애는 그날 밤 집에 있었어."
  - place: x 30% · y 8% · w 34% · tail ↘
  - read_order: 1
  - note: 기 대표 — 멀리 가운데 창 앞(역광)
- bubble_2:
  - speaker: 기 대표
  - type: dialogue
  - text_km: "ទាំងអស់គ្នា និយាយឲ្យត្រូវគ្នាតាមហ្នឹងទៅ។"
  - text_ko: "다들 그렇게 맞추면 돼."
  - place: x 60% · y 18% · w 40% · tail ↙
  - read_order: 2
  - note: 기 대표 — 같은 화자, 오른쪽 조금 아래

### panel_042
- art_space: 위쪽 40%, 왼편~가운데 = 흐린 벽·창빛(②가 가장 긴 말풍선 — 폭 넓게) (EN: the upper 40% of the frame across the left and centre: blurred plain wall and window light)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "…យប់នោះ គាត់នៅផ្ទះ បាទ។"
  - text_ko: "…집에 계셨다고요."
  - place: x 22% · y 8% · w 32% · tail ↓
  - read_order: 1
  - note: 진우 (낮게) — 원경 왼쪽 위. 뷰어에 whisper 타입이 없어 dialogue로, 짧고 작은 풍선
- bubble_2:
  - speaker: 진우
  - type: dialogue
  - text_km: "ឮថាម៉ោងហ្នឹង បារក្រោមដីត្រើយទន្លេម្ខាង មានគេបំបែកដបស្រា ហើយរត់គេច។"
  - text_ko: "그 시간, 강 건너 지하 바에선 누가 술병을 깨고 도망갔다던데요."
  - place: x 34% · y 22% · w 64% · tail ↙
  - read_order: 2
  - note: 진우 — 이 회차 가장 긴 말풍선(2줄)
- note: 민재(전경 오른쪽) 얼굴은 가리지 않는다.

### panel_043
- art_space: 위쪽 35% 띠 = 밝은 창빛·흐린 벽(①은 왼쪽 위, ②는 오른쪽 아래로 끊긴 채) (EN: the upper 35% of the frame: bright window light and blurred plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 민재
  - type: dialogue
  - text_km: "រត់គេចអី! ថ្លៃដបហ្នឹង អញសងគេអស់ហើយ ដឹងអត់?"
  - text_ko: "도망은 무슨, 병값은 내가 다 물어 줬거든?"
  - place: x 23% · y 8% · w 42% · tail ↘
  - read_order: 1
  - note: 민재 — 왼쪽~가운데
- bubble_2:
  - speaker: 민재
  - type: dialogue
  - text_km: "ក្រោយពីវាចេញទៅមុន—"
  - text_ko: "걔가 먼저 간 다음에—"
  - place: x 66% · y 24% · w 28% · tail ↙
  - read_order: 2
  - note: 민재 — 끊긴 말(—)

### panel_044
- art_space: 위쪽 1/3 = 흐린 회의실 배경(작은 whisper 말풍선) (EN: the upper third of the frame: soft blurred meeting room)
- gap_after: 16
- bubble_1:
  - speaker: 기 대표
  - type: dialogue
  - text_km: "…មីនជែ។"
  - text_ko: "…민재야."
  - place: x 50% · y 14% · w 24% · tail ↓
  - read_order: 1
  - note: 기 대표 (낮게) — 얼굴은 프레임 밖, 꼬리 → 팔뚝을 쥔 손

### panel_045
- art_space: 위쪽 오른편 1/3 = 흐린 창빛(태호 머리 위) (EN: the upper-right third of the frame: soft blurred window light above Taeho)
- gap_after: 16
- bubble_1:
  - speaker: 태호
  - type: dialogue
  - text_km: "ហាៗ រឿងផឹកស៊ី ទុកត្រឹមហ្នឹងសិនទៅបាទ។"
  - text_ko: "하하, 술자리 얘기는 이쯤 하시죠."
  - place: x 58% · y 11% · w 40% · tail ↘
  - read_order: 1
  - note: 태호 — 원경 오른쪽
- note: 전경 왼쪽 기 대표 얼굴은 가리지 않는다.

### panel_046
- art_space: 왼쪽 가운데 띠 = 흐린 테이블·벽(태호 입과 진우 손 사이) (EN: a calm band at the middle left of the frame: blurred table and wall between the mouth close-up and the hand)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "អញ្ចឹង ខ្ញុំកត់ទុកថា យប់នោះ គាត់នៅផ្ទះ បាទ។"
  - text_ko: "그럼 그날 밤은, 댁에 계셨던 걸로 하겠습니다."
  - place: x 26% · y 50% · w 44% · tail ↙
  - read_order: 1
  - note: 진우 — 아래 왼편 흐린 전경의 손

### panel_047
- art_space: 위쪽 왼편 1/3 = 어두운 방 (EN: the upper-left third of the frame: plain dark room)
- gap_after: 160
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "ពេលនោះ… ខ្ញុំមិនបានមើលដល់ចប់ទេ។"
  - text_ko: "그땐… 끝까지 못 봤지."
  - place: x 22% · y 13% · w 36%
  - read_order: 1
  - note: 속말

### panel_048
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_049
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_050
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_051
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_052
- art_space: 오른쪽 아래 1/4 = 어두운 빈 아스팔트·담 그늘 (EN: the lower-right quarter of the frame: dark empty asphalt and wall shadow)
- gap_after: 0
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "…ឡាននោះទៅបាត់ ម្ភៃវិនាទីក្រោយមក…"
  - text_ko: "…그 차가 가고, 20초 뒤."
  - place: x 64% · y 84% · w 36%
  - read_order: 1
  - note: 속말(현재의 진우) — 기억 컷 위지만 대본이 속말이므로 thought
- note: 앵커 A — EP02 재사용 기준 자리. 053 직전 간격 0.

### panel_053
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_054
- art_space: 위쪽 1/3 = 어둠 (EN: the upper third of the frame: plain darkness)
- gap_after: 320
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "…អ្នកបើកឡាន… មិនមែនមីនជែទេ។"
  - text_ko: "…운전한 사람이, 기민재가 아니었어."
  - place: x 50% · y 14% · w 34%
  - read_order: 1
  - note: 속말 — 반전 정점, 단독

### panel_055
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_056
- art_space: 아래 20% 스테인리스 카운터 가장자리(①, 꼬리 → 아래 밖) + 위쪽 오른편 김 (EN: the bottom 20% of the frame: plain stainless counter edge; the soft steam at the upper right also stays calm)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "សុំគីមបាប់មួយដើម ខ្ចប់យកទៅ បាទ។"
  - text_ko: "김밥 한 줄, 포장해 주세요."
  - place: x 36% · y 87% · w 40% · tail ↓
  - read_order: 1
  - note: 진우 (화면 밖·아래) — 꼬리는 아래 프레임 밖
- bubble_2:
  - speaker: 수아
  - type: dialogue
  - text_km: "ចាស។"
  - text_ko: "네."
  - place: x 82% · y 90% · w 16% · tail ↖
  - read_order: 2
  - note: 수아 — 꼬리 → 위 가운데 손
- note: ② 위치 변경: 샷리스트는 ②를 위쪽 오른편 김에 두었으나, 그러면 대답(②)이 주문(①)보다 먼저 읽힌다. 두 말풍선을 아래 띠에 왼→오로 나란히 둔다. 위쪽 김 자리도 비워 두면 배치 조정 때 쓸 수 있다.

### panel_057
- art_space: 위쪽 30% 띠 = 김 서린 벽·천장(①은 왼쪽 위 넓게 — 두 문장, ②는 오른쪽 조금 아래) (EN: the upper 30% of the frame: steamy plain wall and ceiling light (keep any blank menu boards out of this band))
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: dialogue
  - text_km: "ខ្ញុំជាមេធាវីរបស់លោក អ៊ីម ដុកបែ។ ឪពុកកញ្ញា នឹងមិនអីទេ។"
  - text_ko: "임덕배 씨 변호인입니다. 아버님은 괜찮으실 겁니다."
  - place: x 28% · y 9% · w 52% · tail ↓
  - read_order: 1
  - note: 진우 — 왼쪽
- bubble_2:
  - speaker: 수아
  - type: dialogue
  - text_km: "ខ្ញុំមិនដែលជួបលោកពីមុនទេ។"
  - text_ko: "처음 뵙는 분이네요."
  - place: x 66% · y 22% · w 32% · tail ↓
  - read_order: 2
  - note: 수아 — 오른쪽

### panel_058
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_059
- art_space: 위쪽 1/3 = 검은 천 (EN: the upper third of the frame: plain black cloth)
- gap_after: 16
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "ថ្ងៃបុណ្យសពឪពុកនាង… ខ្ញុំជាអ្នកខ្ទាស់ឲ្យ…"
  - text_ko: "아버님 장례식 날, 내가 달아 준…"
  - place: x 50% · y 13% · w 44%
  - read_order: 1
  - note: 속말(현재의 진우) — 기억 컷 위지만 대본이 속말이므로 thought

### panel_060
- art_space: 아래 1/3 = 노란 김 흐림 (EN: the lower third of the frame: soft blurred yellow steam)
- gap_after: 0
- bubble_1:
  - speaker: 진우
  - type: thought
  - text_km: "របស់នោះ… វានៅមិនទាន់មានផងតើ។"
  - text_ko: "그건… 아직 생기지 않은 물건인데."
  - place: x 50% · y 84% · w 34%
  - read_order: 1
  - note: 속말 — 회차 끝, 엔딩 카드 없음
---

## Flags for the leader

| # | 내용 | 요청 |
|---|---|---|
| LT-F1 | **화면 밖 왼쪽 화자(003·006):** 뷰어(`viewer-km.html`) 꼬리는 위/아래 6방향뿐이고 왼쪽 꼬리가 없다. 말풍선을 왼쪽 가장자리(x − w/2 = 2)에 붙이고 `↙`로 처리했다. 꼬리가 프레임 밖까지 나가지는 않는다 | 리더 확인. 왼쪽 꼬리가 꼭 필요하면 km_tool/뷰어 변경이 필요(이 작업 범위 밖) |
| LT-F2 | **(낮게) whisper(042 ①·044)와 (전화)(026 ①):** 뷰어에 전용 타입이 없어 dialogue로, whisper는 작은 폭으로, 전화는 꼬리 → 폰으로만 구분했다 | 리더 확인 |
| LT-F3 | **052·059 = thought(속말), memory 아님.** style-bible §8은 059 말풍선을 memory로 적었지만 대본은 `진우 (속말)` — 기억 컷 위에 현재의 진우가 생각하는 말이라 thought로 했다(대본 우선). memory 타입은 대본에 (기억)이 붙은 019 ①②·024만 | art-director: §8 목록 정정 여부 |
| LT-F4 | **056 ② 위치를 샷리스트와 다르게 잡았다.** 샷리스트 art_space는 ②(수아 「ចាស។」)를 위쪽 오른편 김에 두었는데, 그러면 대답이 주문(①, 아래 띠)보다 먼저 읽힌다. 두 말풍선을 아래 20% 카운터 띠에 왼→오로 나란히 놓았다(이미지 요구는 같음 — 아래 띠는 원래 비워 둔다) | panel-director 확인(판정 AJ: 샷리스트 연출이 정본). 거부되면 ②를 `x 74% · y 12% · w 20% · tail ↙`로 되돌린다 |
| LT-F5 | **011 env 대비:** 시간 표지를 `style: screen`(흰 글씨, 외곽선 없음)으로 했다. 시간 표지에 맞는 다른 스타일이 없다(hand = 파란 손글씨, sign = 네온). 바랜 크림 벽 위의 흰 글씨는 흐릴 수 있다 | episode-compositor 배치 단계에서 실제 이미지로 가독 확인. 흐리면 벽의 더 어두운 쪽으로 옮기거나 리더가 스타일 결정 |
| LT-F6 | **042 ②(66자)가 이 회차 가장 긴 말풍선:** 폭 64%(프레임 제약상 최대)로 2줄. 3개로 나누면 패널당 2개 규칙을 넘어서 나누지 않았다. 057 ①은 폭 52%로 2줄 | 빌드 후 3줄이 되면 compositor가 y만 조정 |
| LT-F7 | 024 한목 = 얼굴이 프레임 밖이라 꼬리 ↓를 상자를 건네는 손(가운데 아래)으로. 044 기 대표도 얼굴 밖, 꼬리 → 팔뚝을 쥔 손 | — |
| LT-F8 | 029 ①: 대본은 「화면 밖·뒤 유리방 쪽」, 샷리스트는 유리방 안 태호 실루엣이 작게 보인다 → 꼬리 ↘를 유리방 쪽으로(프레임 밖 처리 아님) | — |
