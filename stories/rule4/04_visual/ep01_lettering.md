# EP01 레터링 명세 「수칙 4번」 — letterer (크메르어판)

- 작성: letterer · 기준일 2026-11-17 · v1
- 입력: `03_episode/ep01_script_final.md`(KM 문구의 유일한 원천) · `04_visual/ep01_shotlist.md` v1(`bubble space` → `art_space`·`place`) · `03_episode/ep01_beatsheet.md` · `02_story/tension-curve.md` §9-2(`gap_after`) · `02_story/glossary_km.md`
- 다음 독자: **prompt-smith**(`art_space`를 Flow 프롬프트의 빈 영역 문장으로) → episode-compositor(`km_tool.py build` + 배치 점검) → quality-reviewer
- 이미지에는 글자가 없다. 이 문서의 말풍선·효과음·캡션은 전부 뷰어가 그린다(`km_tool.py build`).

## 읽는 법

- `art_space` = 그 컷의 그림이 비워 둘 조용한 배경(영문, prompt-smith가 그대로 옮긴다). 무대사 컷은 `none`(P3·P18은 반복 짝 때문에 빈 띠 유지).
- `place`: `x`/`y` = 말풍선 중심, `w` = 최대 폭(패널 대비 %). 꼬리 `↙ ↓ ↘`(아래) · `↖ ↑ ↗`(위). 괄호 = 꼬리가 가리키는 화자.
- `text_km` = 대본 `KM:` 큰따옴표 안을 글자 그대로 복사(손으로 다시 치지 않았다). `text_ko`는 참고용.
- `type`: dialogue · thought(점선, 생각 점) · shout · memory(푸른 번짐 테두리: 기억 말풍선) · narration(마감 캡션).
- 효과음 `size` = 글자 크기(패널 폭 대비 %), `rot` = 기울기(도).

## 배치 규칙 (이 회차에서 지킨 것)

1. **뷰어 폭 제약: `x + w ≤ 100`.** 뷰어 말풍선은 `left: x%`에 놓인 뒤 가운데 정렬되는데, 브라우저가 그 폭을 `100 − x`(%)로 자른다(실측: x 70·w 50 → 실제 폭 30). 그래서 오른쪽 말풍선일수록 좁아진다. 모든 말풍선을 `x + w ≤ 100`으로 잡았다. **배치 점검 때 x를 오른쪽으로 옮기면 w도 같이 줄여야 한다**(아니면 줄 수가 늘어난다).
2. 줄 수 실측(뷰어와 같은 CSS, Battambang): 모든 말풍선 2줄 이하. 폭 360·400·430·720px에서 확인. 오프라인 대체 글꼴(Khmer UI)에서만 3줄이 되는 긴 줄: P9 ① · P12 ① · P17 · P22 ① · P24 ① · P35 · P41 ① · P44 · P49 ① — 빈자리 폭의 한계라 수용(온라인 Battambang에서는 모두 2줄 이하).
3. 반복 짝(같은 구도)은 같은 말을 같은 자리에: P1=P38 · P2=P39 · P8 ①=P32 ① · P12 ①=P35 · P5 ②=P52 · 효과음 P7=P28 · P13=P36. P3(→P40)·P18(→P37)은 무대사지만 짝의 말풍선 띠를 비워 둔다.
4. 한 컷 말풍선 1–2개(효과음 별도). 같은 화자의 연속 말풍선은 위→아래로 이어 읽힌다(앞 말풍선의 꼬리가 다음 말풍선 쪽을 향해도 같은 화자다).
5. 효과음 나눔: P25 «ភ្លឹប…» / «ភ្លឹប—» 두 번 깜빡임, P42 «ក្ដុក!» 세 번(노크 리듬, 대각선으로 내려감). 뷰어 효과음은 줄바꿈이 없어 좁은 자리에 한 줄로 안 들어가므로 나눴다. km_tool은 이어 붙여 대조한다.

## 샷리스트 빈자리와 달라진 곳

- **panel_024:** 구정민 ①(w 48 이상 필요)이 위 오른쪽(x 52–97)에 2줄로 안 들어가고, 기억 말풍선을 비네트 위 1/3에 두면 기억이 질문보다 먼저 읽힌다. → ①은 위쪽 가로로 넓게(비네트의 빈 윗부분과 살짝 겹침), ② 기억 말풍선은 샷리스트의 **대안 자리(비네트 바로 아래, x 4–36, y 36–50)**, 꼬리는 위로 비네트 속 손을 향한다.
- **panel_041:** 위 오른쪽(x 48–96)만으로는 ①이 3줄이 된다. → 빈자리를 형광등 아래·그녀 머리 위로 x 37까지 넓혔다(y 10–26). 형광등(위 왼쪽, y 2–10)과 명부는 그대로 비켜 간다.
- **panel_023:** 위 오른쪽 1/4(x 50–97)에서는 «ខ្ញុំជាអ្នកទទួលបន្ទុក។»가 한 줄로 안 들어간다. → 빈자리를 x 44까지 넓혔다(그의 머리는 y 30 아래라 그대로).
- **panel_053:** 경계 띠 왼쪽(x 4–40)에서는 말풍선이 3줄이 된다. → x 46까지 넓혔다(두 스티커는 y 40 위와 y 60 아래라 걸리지 않는다).
- P17·P29·P62처럼 오른쪽 좁은 빈자리는 위 1번 제약 때문에 말풍선 중심을 빈자리 가운데보다 왼쪽에 두었다(빈자리 안에서 끝난다).

---

### panel_001
- art_space: top band, left and centre (x 5–70%, y 2–22%): the dim corridor ceiling seen above the glass; the silhouette's head (below y 30%) and the rule sheet stay out of it
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ច្បាប់ទី៤ ខ្ញុំនឹងមិនគោរពទេ។"
  - text_ko: "수칙 4번은 지키지 않겠습니다."
  - place: x 37% · y 12% · w 52% · tail ↘ (서하의 뒷머리, 아래 오른쪽)
  - read_order: 1

### panel_002
- art_space: upper-left quarter (x 3–48%, y 3–32%): the dark gap between the steel shelves
- gap_after: 120
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ឯងឆ្កួតឬអី?"
  - text_ko: "너 미쳤어?"
  - place: x 24% · y 16% · w 34% · tail ↘ (선임의 입)
  - read_order: 1

### panel_003
- art_space: top band (x 5–95%, y 2–18%): the dim corridor ceiling seen above the glass — no bubble in this panel, but kept empty because panel_040 repeats this exact frame with a bubble here
- gap_after: 480
- silent: true
- note: 무대사. 위 띠는 panel_040(같은 구도, 말풍선 있음) 때문에 비워 둔다

### panel_004
- art_space: top 40% (x 3–97%, y 2–40%): the plain upper wall of the landing fading into the darkness above
- gap_after: 40
- bubble_1:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "បង! នៅហ្នឹងឃើញផ្កាយដែរអត់?"
  - text_ko: "누나, 거기서도 별 보여?"
  - place: x 34% · y 10% · w 58% · tail ↙ (귀에 댄 휴대폰, 화면 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "បងនៅក្រោមដីណា៎។"
  - text_ko: "지하야."
  - place: x 58% · y 28% · w 40% · tail ↙ (서하의 입)
  - read_order: 2

### panel_005
- art_space: top 30% (x 4–96%, y 2–30%): soft out-of-focus dark background; the sticker (y 44–60%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "ឆ្មាព្រះចន្ទ នៅបិទជាប់ដដែលអត់?"
  - text_ko: "달냥이 아직 붙어 있지?"
  - place: x 30% · y 9% · w 52% · tail ↗ (위 오른쪽 프레임 밖의 휴대폰)
  - read_order: 1
- bubble_2:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "កុំបកវាចេញណា៎! មានតែមួយគត់ក្នុងលោក។"
  - text_ko: "떼지 마. 세상에 하나뿐이야."
  - place: x 46% · y 21% · w 54% · tail ↗ (위 오른쪽 프레임 밖의 휴대폰)
  - read_order: 2

### panel_006
- art_space: top 40% (x 3–97%, y 2–40%): the plain upper wall of the landing and the darkness above it
- gap_after: 120
- bubble_1:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "ថ្ងៃសៅរ៍ ពិធីប្រគល់រង្វាន់ បងត្រូវមកឱ្យបាន! សន្យាណា៎!"
  - text_ko: "토요일 시상식, 진짜 와야 돼. 약속!"
  - place: x 35% · y 12% · w 64% · tail ↙ (휴대폰, 화면 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "អើ សន្យា។"
  - text_ko: "응, 약속."
  - place: x 62% · y 30% · w 30% · tail ↙ (서하의 입)
  - read_order: 2

### panel_007
- art_space: (1) upper left (x 3–38%, y 3–26%): plain wall and exposed pipes left of the clock — never over the clock face; (2) sound effect: the plain steel face of the fire door at the right edge, middle height (x 72–96%, y 34–50%)
- gap_after: 240
- bubble_1:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "ស៊ូៗ បង!"
  - text_ko: "누나, 버텨!"
  - place: x 20% · y 14% · w 32% · tail ↘ (귀에 댄 휴대폰)
  - read_order: 1
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "쿵"
  - place: x 84% · y 42% · size 9% · rot -6

### panel_008
- art_space: top 40% (x 3–97%, y 2–40%): ceiling pipes, upper wall and the dark corridor above the glass
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "មន្ត្រី កាង សឺហា! យប់នេះ យើងដូរវេនគ្នាសិន មែនទេ?"
  - text_ko: "강서하 주무관, 우리 오늘 당직 좀 바꿔 주자. 그치?"
  - place: x 35% · y 11% · w 64% · tail ↙ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "លោកប្រធានការិយាល័យ ក៏ធ្លាប់ធ្វើអញ្ចឹងដែរ។"
  - text_ko: "과장님도 다 그렇게 하셨어."
  - place: x 50% · y 29% · w 50% · tail ↙ (노미란)
  - read_order: 2

### panel_009
- art_space: top 38% (x 3–97%, y 2–38%): the glass window beyond the desk and the dark corridor behind it
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ក្នុងបញ្ជីវេន មានឈ្មោះបង។ ប្រាក់ឧបត្ថម្ភ ក៏ចេញឈ្មោះបងដែរ។ ដឹងហើយណា៎?"
  - text_ko: "명부엔 내 이름 있어. 수당도 내 앞으로. 알지?"
  - place: x 34% · y 14.5% · w 64% · tail ↗ (오른쪽 프레임 밖 노미란)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "…ចាស សុំទោស ខ្ញុំយល់ហើយ។"
  - text_ko: "…아, 네. 죄송합니다, 알겠습니다."
  - place: x 30% · y 31.5% · w 52% · tail ↙ (서하, 아래 왼쪽)
  - read_order: 2

### panel_010
- art_space: top 38%, left and centre (x 3–80%, y 2–38%): the plain off-white wall above the nap-room door and the ceiling
- gap_after: 120
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "អ្នកថ្មី ទ្រាំមិនដល់បីថ្ងៃទេ។"
  - text_ko: "신입은 사흘 못 버텨."
  - place: x 30% · y 10% · w 48% · tail ↙ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "អ្នកមុនក៏ឈប់ក្រោយបីថ្ងៃដែរ។"
  - text_ko: "전임자도 사흘 만에 관뒀어."
  - place: x 44% · y 25% · w 54% · tail ↙ (노미란)
  - read_order: 2

### panel_011
- art_space: top 38%, left and centre (x 3–80%, y 2–38%): the dark tops of the shelves and the ceiling
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "កន្លែងហ្នឹង របស់ឯង។ ខ្ញុំមិនអង្គុយទេ។"
  - text_ko: "거긴 네 자리야. 난 안 앉아."
  - place: x 32% · y 10% · w 56% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "ផឹកទៅ។ គេថា យប់នេះវែង។"
  - text_ko: "마셔. 긴 밤이래."
  - place: x 40% · y 27% · w 50% · tail ↙ (선임)
  - read_order: 2

### panel_012
- art_space: top 40% (x 3–97%, y 2–40%): ceiling pipes, upper wall and the dark shelf tops; the small flickering corridor light stays just below this band (y 40–46%)
- gap_after: 0
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី១។ ពីម៉ោង១០យប់ ដល់ម៉ោង៦ព្រឹក ត្រូវទទួលពាក្យ ពីអ្នកដែលមកបញ្ជរគ្រប់រូប។"
  - text_ko: "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다."
  - place: x 38% · y 12% · w 62% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "មិនត្រូវបណ្ដេញទៅវិញឡើយ។"
  - text_ko: "돌려보내지 않는다."
  - place: x 28% · y 29% · w 48% · tail ↙ (선임)
  - read_order: 2

### panel_013
- art_space: (1) top 40% (x 3–97%, y 2–40%): ceiling pipes, upper wall and the dark shelf tops; (2) sound effect: the dim corridor seen through the glass right above the bell (x 70–96%, y 42–54%)
- gap_after: 120
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី២។ អ្នកប្រចាំការ មិនត្រូវប្រាប់ឈ្មោះខ្លួនឯងឡើយ។"
  - text_ko: "2번. 당직자는 자기 이름을 말하지 않는다."
  - place: x 34% · y 11% · w 56% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី៣។ ពេលកណ្ដឹងរោទ៍—"
  - text_ko: "3. 호출벨이 울리면—"
  - place: x 26% · y 28% · w 44% · tail ↙ (선임)
  - read_order: 2
- sfx_1:
  - text_km: "ទីង!"
  - text_ko: "띵!"
  - place: x 83% · y 48% · size 8% · rot -8

### panel_014
- art_space: top 38% (x 3–97%, y 2–38%): the corridor ceiling seen above the glass, even and dim
- gap_after: 40
- bubble_1:
  - speaker: 구정민
  - type: dialogue
  - text_km: "សូមទោស ដែលមករំខានទាំងយប់ជ្រៅ។"
  - text_ko: "늦은 시간에 죄송합니다."
  - place: x 38% · y 10% · w 60% · tail ↘ (유리 너머 구정민)
  - read_order: 1
- bubble_2:
  - speaker: 구정민
  - type: dialogue
  - text_km: "ខ្ញុំមកសុំលុបចោល ការចុះបញ្ជីមរណភាព។"
  - text_ko: "사망신고를 취소하러 왔습니다."
  - place: x 40% · y 27% · w 60% · tail ↓ (유리 너머 구정민)
  - read_order: 2

### panel_015
- art_space: top 38%, centre and right (x 15–97%, y 2–38%): the dim shelves and ceiling of the room behind the glass; the man's dark shoulder at the left edge stays out of it
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "អ្នកដាក់ពាក្យ… និងអ្នកស្លាប់ គឺមនុស្សតែមួយ។"
  - text_ko: "신청인이… 사망자 본인이시네요."
  - place: x 44% · y 11% · w 54% · tail ↓ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "…អញ្ចឹង បញ្ជាក់អត្តសញ្ញាណរួចរាល់ហើយ។"
  - text_ko: "…본인 확인되셨네요."
  - place: x 58% · y 28.5% · w 42% · tail ↓ (서하)
  - read_order: 2

### panel_016
- art_space: sound effect only: the blurred glass to the right of and above the bell (x 60–92%, y 12–28%)
- gap_after: 240
- sfx_1:
  - text_km: "តក់!"
  - text_ko: "똑"
  - place: x 76% · y 20% · size 8% · rot -6

### panel_017
- art_space: top right (x 40–96%, y 2–22%): the dim ceiling of the room seen above the glass; the man's head on the left stays out of it
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី៤។ បើអ្នកដាក់ពាក្យសួររកអ្នកទទួលបន្ទុក…"
  - text_ko: "4번. 민원인이 담당자를 찾으면…"
  - place: x 60% · y 12% · w 40% · tail ↓ (유리 너머 선임)
  - read_order: 1

### panel_018
- art_space: top 28% (x 3–97%, y 2–28%): the dark area above the shelves — no bubble in this panel, but kept empty because panel_037 repeats this exact frame with bubbles here
- gap_after: 120
- silent: true
- note: 무대사. 위 띠는 panel_037(같은 구도, 말풍선 있음) 때문에 비워 둔다

### panel_019
- art_space: top 22%, left and centre (x 3–68%, y 2–22%): out-of-focus glass and dark corridor above the paper; the faded sticker (x 72–86%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 선임(목소리)
  - type: dialogue
  - text_km: "…ត្រូវឆ្លើយថា «ខ្ញុំជាអ្នកទទួលបន្ទុក»។"
  - text_ko: "…'제가 담당자입니다'라고 답한다."
  - place: x 32% · y 11% · w 56% · tail ↙ (왼쪽 프레임 밖 선임)
  - read_order: 1

### panel_020
- art_space: top 38% (x 3–97%, y 2–38%): dark shelf tops on the left, the corridor above the glass on the right
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ច្បាប់ មានសម្រាប់គោរព មិនមែនសម្រាប់ជឿទេ។"
  - text_ko: "수칙은 지키라고 있는 거지, 믿으라고 있는 게 아니야."
  - place: x 26% · y 11% · w 46% · tail ↙ (선임, 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "លោកពូ ច្បាប់ទាំងនេះ… អ្នកណាជាអ្នកសរសេរ?"
  - text_ko: "선배님, 이 수칙… 누가 쓴 거예요?"
  - place: x 56% · y 27% · w 44% · tail ↘ (서하, 오른쪽)
  - read_order: 2

### panel_021
- art_space: top 25% (x 3–97%, y 2–25%): the dark tops of the shelves and the ceiling
- gap_after: 120
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ច្បាប់នោះ… គេថា អ្នកដែលធ្វើការងារនេះយូរជាងគេ ជាអ្នកសរសេរ។"
  - text_ko: "그 수칙, 이 일 제일 오래 한 사람이 쓴 거래."
  - place: x 36% · y 12% · w 64% · tail ↙ (선임)
  - read_order: 1

### panel_022
- art_space: top 38% (x 3–97%, y 2–38%): dark shelf tops on the left, the dim corridor above the glass on the right
- gap_after: 40
- bubble_1:
  - speaker: 구정민
  - type: dialogue
  - text_km: "តើអ្នកទទួលបន្ទុក មានវត្តមានទេ? ខ្ញុំត្រូវការត្រា។"
  - text_ko: "담당자분 계십니까? 직인이 필요합니다."
  - place: x 56% · y 11% · w 44% · tail ↘ (유리 너머 구정민, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "អាដែលបិទពីលើគេ… គឺជាការកែប្រែចុងក្រោយ។"
  - text_ko: "(맨 위에 붙은 게… 최신 개정이니까.)"
  - place: x 40% · y 27% · w 48% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_023
- art_space: upper right (x 44–97%, y 2–26%): the dim corridor above the man's head (his head starts at y 30%)
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំជាអ្នកទទួលបន្ទុក។"
  - text_ko: "제가 담당자입니다."
  - place: x 65% · y 12% · w 35% · tail ↙ (서하의 머리, 아래 왼쪽)
  - read_order: 1

### panel_024
- art_space: (1) top right (x 52–97%, y 2–30%): the dim corridor above the man's head; (2) the top third of the framed memory picture is plain dark glass (y 4–15%) — the top bubble may overlap it; (3) just below the memory picture (x 4–36%, y 36–50%): plain dim corridor for the memory bubble
- gap_after: 40
- bubble_1:
  - speaker: 구정민
  - type: dialogue
  - text_km: "អ្នកដែលគ្មានឈ្មោះក្នុងបញ្ជីវេន… ជាអ្នកទទួលបន្ទុកឬ?"
  - text_ko: "명부에 없는 분이 담당자라고요?"
  - place: x 50% · y 9.5% · w 50% · tail ↘ (구정민, 아래 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 노미란(기억)
  - type: memory
  - text_km: "ក្នុងបញ្ជីវេន មានឈ្មោះបង។"
  - text_ko: "명부엔 내 이름 있어."
  - place: x 19% · y 43.5% · w 32% · tail ↗ (비네트 속 노미란의 손)
  - read_order: 2

### panel_025
- art_space: upper left (x 3–45%, y 3–28%): the darkening ceiling beside the light fixture
- gap_after: 0
- sfx_1:
  - text_km: "ភ្លឹប…"
  - text_ko: "치직— (1/2)"
  - place: x 15% · y 11% · size 7% · rot -6
- sfx_2:
  - text_km: "ភ្លឹប—"
  - text_ko: "치직— (2/2)"
  - place: x 32% · y 23% · size 7% · rot -6

### panel_026
- art_space: none (silent — no bubble area needed)
- gap_after: 240
- silent: true

### panel_027
- art_space: none (silent — no bubble area needed)
- gap_after: 720
- silent: true

### panel_028
- art_space: (1) upper left (x 3–38%, y 3–26%): plain wall and exposed pipes left of the clock — never over the clock face; (2) sound effect: the plain steel face of the fire door at the right edge, middle height (x 72–96%, y 34–50%)
- gap_after: 120
- note: 효과음만. 위 왼쪽 빈자리는 panel_007과 같은 구도라 남긴다
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "쿵"
  - place: x 84% · y 42% · size 9% · rot -6

### panel_029
- art_space: upper right (x 55–97%, y 3–45%): the plain pale-green wall above the phone
- gap_after: 40
- bubble_1:
  - speaker: 지호(기억)
  - type: memory
  - text_km: "ស៊ូៗ បង!"
  - text_ko: "누나, 버텨!"
  - place: x 74% · y 22% · w 26% · tail ↓ (휴대폰)
  - read_order: 1

### panel_030
- art_space: upper-left quarter (x 3–48%, y 3–30%): blurred wall and pipes
- gap_after: 480
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…យើង… សន្យាអីគ្នាទៅ?"
  - text_ko: "…우리, 무슨 약속 했더라?"
  - place: x 26% · y 15% · w 46% · tail ↘ (서하의 입)
  - read_order: 1

### panel_031
- art_space: top 24% (x 4–96%, y 2–24%): the dim ceiling (the light fixtures sit below this band)
- gap_after: 120
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី១។ មិនយំឡើយ។ ទី២។ អានរហូតដល់បន្ទាត់ចុងក្រោយ។"
  - text_ko: "(하나. 울지 않는다. 둘. 마지막 줄까지 읽는다.)"
  - place: x 36% · y 11% · w 56% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_032
- art_space: top 40% (x 3–97%, y 2–40%): ceiling pipes, upper wall and the dark corridor above the glass
- gap_after: 0
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "មន្ត្រី កាង សឺហា! យប់នេះ យើងដូរវេនគ្នាសិន មែនទេ?"
  - text_ko: "강서하 주무관, 우리 오늘 당직 좀 바꿔 주자. 그치?"
  - place: x 35% · y 11% · w 64% · tail ↙ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 서하(작게, 동시에)
  - type: dialogue
  - text_km: "មែនទេ?"
  - text_ko: "그치?"
  - place: x 68% · y 21% · w 24% · tail ↘ (서하, 오른쪽 — ① 끝에 겹침)
  - read_order: 2

### panel_033
- art_space: top 38% (x 3–97%, y 2–38%): the glass window beyond the desk and the dark corridor behind it
- gap_after: 0
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "អ្នកថ្មី—"
  - text_ko: "신입은 사흘—"
  - place: x 26% · y 12% · w 26% · tail ↗ (오른쪽 프레임 밖 노미란)
  - read_order: 1
- bubble_2:
  - speaker: 서하(무표정)
  - type: dialogue
  - text_km: "…ទ្រាំមិនដល់បីថ្ងៃទេ។"
  - text_ko: "…못 버티죠."
  - place: x 40% · y 28% · w 44% · tail ↙ (서하, 아래 왼쪽)
  - read_order: 2

### panel_034
- art_space: (1) top 38%, centre and right (x 20–97%, y 2–38%): ceiling, dark shelf tops and the corridor above the glass; (2) sound effect: the dark gap between the shelves at the left edge (x 0–18%, y 38–60%), away from his face
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ផឹកទៅ។ គេថា យប់នេះវែង។"
  - text_ko: "마셔. 긴 밤이래."
  - place: x 44% · y 10% · w 50% · tail ↙ (선임)
  - read_order: 1
- sfx_1:
  - text_km: "ក្រុបក្រាប…"
  - text_ko: "부스럭"
  - place: x 10% · y 49% · size 4% · rot -12
- bubble_2:
  - speaker: 선임(돌아보지 않고)
  - type: dialogue
  - text_km: "…គេថា កណ្ដុរ។"
  - text_ko: "…쥐래."
  - place: x 40% · y 27% · w 34% · tail ↙ (선임)
  - read_order: 2

### panel_035
- art_space: top 40% (x 3–97%, y 2–40%): ceiling pipes, upper wall and the dark shelf tops; the small flickering corridor light stays just below this band (y 40–46%)
- gap_after: 0
- bubble_1:
  - speaker: 선임·서하(함께)
  - type: dialogue
  - text_km: "ទី១។ ពីម៉ោង១០យប់ ដល់ម៉ោង៦ព្រឹក ត្រូវទទួលពាក្យ ពីអ្នកដែលមកបញ្ជរគ្រប់រូប។"
  - text_ko: "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다."
  - place: x 38% · y 12% · w 62% · tail ↓ (두 화자 사이 — 선임과 서하가 함께)
  - read_order: 1

### panel_036
- art_space: (1) top 40% (x 3–97%, y 2–40%): ceiling pipes, upper wall and the dark shelf tops; (2) sound effect: the dim corridor seen through the glass right above the bell (x 70–96%, y 42–54%)
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី៣។ ពេលកណ្ដឹង—"
  - text_ko: "3. 호출벨이—"
  - place: x 22% · y 11% · w 40% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 구정민
  - type: dialogue
  - text_km: "សូមទោស ដែលមករំខានទាំងយប់ជ្រៅ។"
  - text_ko: "늦은 시간에 죄송합니다."
  - place: x 62% · y 20% · w 38% · tail ↘ (유리 너머 벨 쪽 구정민)
  - read_order: 2
- sfx_1:
  - text_km: "ទីង!"
  - text_ko: "띵"
  - place: x 83% · y 48% · size 8% · rot -8

### panel_037
- art_space: top 28% (x 3–97%, y 2–28%): the dark area above the shelves
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី៤។"
  - text_ko: "4번."
  - place: x 66% · y 8% · w 22% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "គាត់… ដឹងរឿងនេះ។"
  - text_ko: "(저 사람… 알고 있어.)"
  - place: x 26% · y 20% · w 40% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_038
- art_space: top band, left and centre (x 5–70%, y 2–22%): the dim corridor ceiling seen above the glass; the silhouette's head (below y 30%) and the rule sheet stay out of it
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ច្បាប់ទី៤ ខ្ញុំនឹងមិនគោរពទេ។"
  - text_ko: "수칙 4번은 지키지 않겠습니다."
  - place: x 37% · y 12% · w 52% · tail ↘ (서하의 뒷머리, 아래 오른쪽)
  - read_order: 1

### panel_039
- art_space: upper-left quarter (x 3–48%, y 3–32%): the dark gap between the steel shelves
- gap_after: 480
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ឯងឆ្កួតឬអី?"
  - text_ko: "너 미쳤어?"
  - place: x 24% · y 16% · w 34% · tail ↘ (선임의 입)
  - read_order: 1

### panel_040
- art_space: top 18% (x 5–95%, y 2–18%): the dim corridor ceiling seen above the glass
- gap_after: 40
- bubble_1:
  - speaker: 구정민
  - type: dialogue
  - text_km: "តើអ្នកទទួលបន្ទុក មានវត្តមានទេ? ខ្ញុំត្រូវការត្រា។"
  - text_ko: "담당자분 계십니까? 직인이 필요합니다."
  - place: x 50% · y 10% · w 50% · tail ↓ (유리 너머 실루엣)
  - read_order: 1

### panel_041
- art_space: upper right: x 46–96% from y 3% down to y 38%, widened left to x 37% between y 10% and y 26% (below the steady ceiling light, above her head): the dim shelves of the room behind the glass; the steady ceiling light (top left, y 2–10%) and the roster stay clear
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "អ្នកទទួលបន្ទុក គឺអ្នកដែលមានឈ្មោះក្នុងបញ្ជីវេន។"
  - text_ko: "담당자는 당직 명부에 계신 분입니다."
  - place: x 58.5% · y 17% · w 41.5% · tail ↙ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "…ប្រធានក្រុម ណូ មីរ៉ាន។"
  - text_ko: "…노미란 팀장님."
  - place: x 70.5% · y 31% · w 29.5% · tail ↙ (서하)
  - read_order: 2

### panel_042
- art_space: sound effect only: the plain wall beside the right frame of the nap-room door (x 30–55%, y 30–48%), away from the door's frosted window
- gap_after: 120
- sfx_1:
  - text_km: "ក្ដុក!"
  - text_ko: "똑. 똑. 똑. (1/3)"
  - place: x 37% · y 33% · size 6% · rot -6
- sfx_2:
  - text_km: "ក្ដុក!"
  - text_ko: "똑. 똑. 똑. (2/3)"
  - place: x 42% · y 39% · size 6% · rot -6
- sfx_3:
  - text_km: "ក្ដុក!"
  - text_ko: "똑. 똑. 똑. (3/3)"
  - place: x 47% · y 45% · size 6% · rot -6

### panel_043
- art_space: top 24% (x 5–95%, y 2–24%): the plain off-white wall above the door frame
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: shout
  - text_km: "អ… អីគេនេះ?!"
  - text_ko: "뭐, 뭐예요 이게?!"
  - place: x 50% · y 12% · w 44% · tail ↓ (노미란)
  - read_order: 1

### panel_044
- art_space: top 22%, centre and right (x 25–97%, y 2–22%): the corridor ceiling seen above the glass, over the bowing man's head
- gap_after: 40
- bubble_1:
  - speaker: 구정민
  - type: dialogue
  - text_km: "បាទ លោកស្រីទេតើ ជាអ្នកទទួលបន្ទុក។ សូមបោះត្រាឱ្យផង។"
  - text_ko: "담당자분이시군요. 직인 부탁드립니다."
  - place: x 51% · y 11% · w 49% · tail ↓ (유리 너머 구정민)
  - read_order: 1

### panel_045
- art_space: top 20% (x 4–96%, y 2–20%): the out-of-focus dim room
- gap_after: 120
- bubble_1:
  - speaker: 선임(목소리)
  - type: dialogue
  - text_km: "បើបោះត្រា… គេថា អ្នកបោះត្រា ចូលប្រអប់នោះជំនួស។"
  - text_ko: "찍으면… 그 칸, 찍은 사람이 채운대."
  - place: x 34% · y 9% · w 56% · tail ↙ (왼쪽 프레임 밖 선임)
  - read_order: 1

### panel_046
- art_space: top 28% (x 4–96%, y 2–28%): the out-of-focus dim room
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំសូមស្នើឱ្យបំពេញឯកសារបន្ថែម។"
  - text_ko: "서류 보완 요청드리겠습니다."
  - place: x 34% · y 13% · w 56% · tail ↙ (왼쪽 가장자리 — 서하)
  - read_order: 1

### panel_047
- art_space: top 36% (x 3–97%, y 2–36%): the dark area above the shelves
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ការស្នើនេះ ត្រូវការហត្ថលេខាអ្នកទទួលបន្ទុក ឬកំណត់ត្រាផ្ទេរសិទ្ធិ។"
  - text_ko: "보완 요청엔 담당자 서명이나 위임 기록이 필요합니다."
  - place: x 33% · y 10% · w 58% · tail ↙ (서하, 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ចុះ… ចុះបើកញ្ញា សឺហា… ចាត់ការជំនួសខ្ញុំ…"
  - text_ko: "그, 그럼… 서하 씨가 처리하시면…"
  - place: x 56% · y 27% · w 44% · tail ↘ (노미란, 오른쪽)
  - read_order: 2

### panel_048
- art_space: top 38% (x 3–97%, y 2–38%): dark shelf tops and the ceiling
- gap_after: 40
- bubble_1:
  - speaker: 노미란(쓰며 소리 내어)
  - type: dialogue
  - text_km: "…ខ្ញុំបានផ្ទេរការងារវេនយប់… ឱ្យមន្ត្រីថ្មី កាង សឺហា…"
  - text_ko: "…야간 당직 업무를… 신규 강서하에게…"
  - place: x 33% · y 11% · w 56% · tail ↙ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 노미란(쓰며 소리 내어)
  - type: dialogue
  - text_km: "…ដោយគ្មានការអនុញ្ញាត…"
  - text_ko: "…무단으로…"
  - place: x 52% · y 28% · w 48% · tail ↓ (노미란)
  - read_order: 2

### panel_049
- art_space: top 35%, left and centre (x 3–62%, y 2–35%): the dim corridor ceiling seen above the glass; the small figure of the man (x 66–84%, y 40–60%) stays clear
- gap_after: 240
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "បន្ទុកដែលប្រធានក្រុមទម្លាក់មក… ខ្ញុំគ្រាន់តែប្រគល់ជូនវិញ។"
  - text_ko: "떠넘기신 건 돌려드리는 겁니다."
  - place: x 33% · y 11% · w 58% · tail ↓ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "ជូនម្ចាស់ដើម។"
  - text_ko: "원래 주인한테."
  - place: x 36% · y 28% · w 32% · tail ↓ (서하)
  - read_order: 2

### panel_050
- art_space: top 36% (x 3–97%, y 2–36%): ceiling, upper wall and the corridor above the glass; his head stays below y 38%
- gap_after: 120
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ថ្ងៃដំបូងសោះ ម៉េចក៏ចាំលំដាប់ច្បាប់បាន?"
  - text_ko: "첫날인데 수칙 순서를 어떻게 알아?"
  - place: x 42% · y 10% · w 50% · tail ↘ (선임, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "ខ្ញុំទៅយកទឹកសិន។ អង្គុយនៅហ្នឹង។"
  - text_ko: "물 받아 올게. 앉아 있어."
  - place: x 62% · y 27% · w 38% · tail ↘ (선임, 오른쪽)
  - read_order: 2

### panel_051
- art_space: none (silent — no bubble area needed)
- gap_after: 120
- silent: true

### panel_052
- art_space: top 30% (x 4–96%, y 2–30%): soft out-of-focus warm background; the sticker (y 44–60%) stays clear
- gap_after: 480
- bubble_1:
  - speaker: 지호(기억)
  - type: memory
  - text_km: "កុំបកវាចេញណា៎! មានតែមួយគត់ក្នុងលោក។"
  - text_ko: "떼지 마. 세상에 하나뿐이야."
  - place: x 46% · y 21% · w 54% · tail none (기억 — panel_005 둘째 말풍선과 같은 자리)
  - read_order: 1

### panel_053
- art_space: the left part of the thin black middle band and the plain margins just above and below it (x 4–46%, y 44–56%), clear of both stickers (they sit above y 40% and below y 60%)
- gap_after: 120
- bubble_1:
  - speaker: 서하(작게)
  - type: dialogue
  - text_km: "មានតែមួយគត់ក្នុងលោក… តែវាមានពីរ។"
  - text_ko: "세상에 하나뿐인데… 두 개야."
  - place: x 23% · y 50% · w 42% · tail ↙ (프레임 밖 서하)
  - read_order: 1

### panel_054
- art_space: top 22% (x 4–96%, y 2–22%): out-of-focus darkness beyond the partition; the papers start below y 24%
- gap_after: 40
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "មានតែតុនេះ… ដែលមិនវិលទៅក្រោយ។"
  - text_ko: "(이 책상만… 안 돌아가.)"
  - place: x 38% · y 11% · w 60% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_055
- art_space: (1) the top third of the framed memory picture plus the calm blue darkness to its right (x 4–97%, y 3–16%); (2) the calm blue dark band below the memory picture (x 15–97%, y 35–49%), ending above her forehead (y 50%)
- gap_after: 120
- bubble_1:
  - speaker: 선임(기억)
  - type: memory
  - text_km: "ច្បាប់នោះ… គេថា អ្នកដែលធ្វើការងារនេះយូរជាងគេ ជាអ្នកសរសេរ។"
  - text_ko: "그 수칙, 이 일 제일 오래 한 사람이 쓴 거래."
  - place: x 36% · y 9.5% · w 64% · tail ↙ (비네트 속 선임)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "អ្នកដែលធ្វើការងារនេះយូរជាងគេ… គឺខ្ញុំទេតើ។"
  - text_ko: "이 일 제일 오래 한 사람… 나였어."
  - place: x 54% · y 41% · w 46% · tail ↓ (서하의 얼굴)
  - read_order: 2

### panel_056
- art_space: none (silent — no bubble area needed)
- gap_after: 720
- silent: true

### panel_057
- art_space: top 22% (x 4–96%, y 2–22%): out-of-focus darkness beyond the partition; the faded sticker (y 26–34%) stays clear
- gap_after: 240
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទុកឱ្យខ្ញុំ… ដើម្បីឱ្យខ្ញុំរស់។"
  - text_ko: "(살리려고… 남긴 거야. 나한테.)"
  - place: x 25% · y 11% · w 46% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(속삭임)
  - type: dialogue
  - text_km: "ចុះ… ច្បាប់ទី៤វិញ?"
  - text_ko: "그러면… 4번은?"
  - place: x 66% · y 15% · w 34% · tail ↙ (서하의 손, 아래)
  - read_order: 2

### panel_058
- art_space: none (silent — no bubble area needed)
- gap_after: 120
- silent: true

### panel_059
- art_space: sound effect only: the right third (x 68–98%, y 15–85%), the out-of-focus dark room behind her head
- gap_after: 240
- sfx_1:
  - text_km: "ព្រែត—"
  - text_ko: "찌이익—"
  - place: x 83% · y 48% · size 9% · rot -12

### panel_060
- art_space: none (silent — no bubble area needed)
- gap_after: 240
- silent: true

### panel_061
- art_space: none (silent — no bubble area needed)
- gap_after: 480
- silent: true

### panel_062
- art_space: upper right (x 40–97%, y 2–22%): the out-of-focus dark room; the hand enters at the upper left, away from this area
- gap_after: 240
- bubble_1:
  - speaker: 목소리(뒤)
  - type: dialogue
  - text_km: "ច្បាប់នោះ…"
  - text_ko: "그 수칙,"
  - place: x 62% · y 11% · w 30% · tail ↖ (위쪽 프레임 밖 — 뒤의 목소리)
  - read_order: 1

### panel_063
- art_space: upper-left quarter (x 3–45%, y 3–30%): the out-of-focus top of the blank grid paper; the gap between the fingertip and the strip stays clear
- gap_after: 720
- bubble_1:
  - speaker: 목소리(뒤)
  - type: dialogue
  - text_km: "នៅមិនទាន់ប្ដូរទៀតទេ?"
  - text_ko: "아직 안 바꿨네?"
  - place: x 25% · y 17% · w 44% · tail ↗ (위 오른쪽 프레임 밖 — 뒤의 목소리)
  - read_order: 1

### panel_064
- art_space: caption: the bottom 8% band (x 0–100%, y 92–100%), the dark shadow of the desk's front edge
- gap_after: 1200
- note: 대사 없음 — 마감 캡션만 패널 맨 아래
- bubble_1:
  - speaker: 캡션
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 50% · y 95.3% · w 50% · tail none (마감 캡션 박스)
  - read_order: 1
