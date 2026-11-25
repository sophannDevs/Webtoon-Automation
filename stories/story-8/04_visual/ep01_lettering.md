# EP01 레터링 명세 — 「너랑 나만 아는 거다」 / «ដឹងតែយើងពីរនាក់» (letterer · Khmer edition)

- 작성: letterer · 2026-11-25 · Phase 4 (Khmer edition + Flow-by-hand mode)
- 입력: `03_episode/ep01_script_final.md`(Khmer review READY), `04_visual/ep01_shotlist.md`(art_space·gutter), `04_visual/style-bible.md` §7, `00_input/brief.md`(판정 AB·AD–AF)
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음·시간 표지는 뷰어(`km_tool.py build`)가 그린다.
  `art_space`는 이미지가 비워 둘 자리다 — prompt-smith는 괄호 안 영어(EN)를
  `Keep <EN> as calm, empty background with no important details (a speech bubble will be added there later).`로 넣는다.
- `text_km`는 대본 KM 줄 그대로(글자 단위). `text_ko`는 참고용, 화면에 나오지 않음.
- `place`: x/y = 말풍선 중심, w = 최대 폭(패널 폭 %). 모든 말풍선 `x + w ≤ 100` 및 `x − w/2 ≥ 2`(프레임 안).
  9:16 패널 기준 1줄 말풍선 ≈ 패널 높이 6%, 2줄 ≈ 9–10%. 폭은 말풍선당 2줄 이내가 되게 잡았다.
- `gap_after`(px): tight 16 · normal 50 · wide 160 · xwide 320 (샷리스트 gutter_after, FL6).
- 패널 60 · 말풍선 57 (생각 3) · sfx 5 · env 1 · 무대사 15.

---

### panel_001
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_002
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_003
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_004
- art_space: 상단 1/3 맞은편 어둠(우측 상단 중심) — 평평한 깊은 남색, 사물 없음 (EN: the upper third of the frame, centred right: flat deep navy darkness above the far side of the table, no objects)
- gap_after: 320
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "នេះ… ទាំងអស់គ្នាធ្វើតាំងពីពេលណាមក?"
  - text_ko: "이거… 다들 언제부터였어?"
  - place: x 58% · y 14% · w 40% · tail ↙
  - read_order: 1
  - note: 하린 — 왼쪽 아래 전경
- note: 꼬리는 하린(왼쪽 아래). 다음은 xwide 검은 여백(2주 전으로 점프).

### panel_005
- art_space: 상단 40% 새벽하늘 — 평평한 그라데이션, 전선·새·건물 윤곽 없음 (env 시간 표지 자리) (EN: the upper 40% of the frame: plain dawn sky gradient, no wires, birds or rooftops)
- gap_after: 50
- env_1:
  - text_km: "ពីរសប្តាហ៍មុន"
  - text_ko: "2주 전"
  - on: 새벽하늘 (시간 표지)
  - style: screen
  - place: x 50% · y 14% · size 7%
- note: env는 말풍선이 아니라 하늘 면에 뷰어가 쓰는 시간 표지(흰 글자). 금색·네온 아님.

### panel_006
- art_space: 상단 1/3 회색 공장 벽 — 왼쪽 위(하린)·오른쪽 위(반장) 두 말풍선 (EN: the upper third of the frame: flat grey factory wall across the full width)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "មិនអីទេ បងតាក់។"
  - text_ko: "괜찮아요, 반장님."
  - place: x 28% · y 10% · w 38% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽
- bubble_2:
  - speaker: 반장
  - type: dialogue
  - text_km: "យកទៅ។ ទៅដេកទៅ។"
  - text_ko: "들고 가. 가서 자."
  - place: x 64% · y 21% · w 34% · tail ↘
  - read_order: 2
  - note: 반장 — 오른쪽

### panel_007
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_008
- art_space: 상단 1/4 푸른 하늘·담 면(왼쪽 위 중심) — 생각 풍선 (EN: the upper quarter of the frame, centred left: plain blue dawn sky and flat wall top)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "ត្រឹមល្ងាចស្អែក… ត្រូវរកឲ្យគ្រប់។"
  - text_ko: "내일 저녁까지는… 맞춰야 돼."
  - place: x 34% · y 11% · w 52%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_009
- art_space: 우측 상단 1/3 크림색 벽(달력은 왼쪽) (EN: the upper-right third of the frame: plain cream wallpaper (calendar kept on the left))
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ម៉ែគ្របទុកឲ្យទៀតហើយ។"
  - text_ko: "…또 덮어 놨네."
  - place: x 66% · y 12% · w 34% · tail ↙
  - read_order: 1
  - note: 하린

### panel_010
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_011
- art_space: 우측 상단 1/3 흐린 벽 면 (EN: the upper-right third of the frame: blurred plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…មិនគ្រប់ទេ។"
  - text_ko: "…모자라."
  - place: x 70% · y 20% · w 28% · tail ↖
  - read_order: 1
  - note: 하린 — 턱이 프레임 위 가장자리

### panel_012
- art_space: 우측 1/3 상단 초점 밖 배경 (EN: the upper part of the right third of the frame: out-of-focus kitchen background)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ត្រឹមតែដល់ប្អូនរៀនចប់។"
  - text_ko: "동생 졸업할 때까지만."
  - place: x 70% · y 18% · w 30% · tail ↙
  - read_order: 1
  - note: 하린 — 얼굴 왼쪽 1/3

### panel_013
- art_space: 상단 40% 흐린 배경 (EN: the upper 40% of the frame: blurred dark background beyond the table)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "កុំឲ្យអ្នកណាដឹង។"
  - text_ko: "아무도 몰라야 돼."
  - place: x 50% · y 14% · w 44% · tail ↓
  - read_order: 1
  - note: 하린 — 손만(화면 아래)

### panel_014
- art_space: 상단 가로 띠 40%(왼쪽 = 하린 말풍선, 오른쪽 = 미자 말풍선) + 우측 상단 문 위 벽(작은 sfx). 얼굴은 프레임 아래 절반 (EN: the upper 40% band of the frame (left and right) including the wall above the bedroom door at the upper right; faces stay in the lower half)
- gap_after: 320
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "មកហើយ? ម៉ែកម្ដៅបាយឲ្យណា៎?"
  - text_ko: "왔어? 밥 데워 줄까?"
  - place: x 62% · y 17% · w 36% · tail ↘
  - read_order: 1
  - note: 미자 — 오른쪽 끝 문 앞
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "មិនអីទេ ម៉ែ។"
  - text_ko: "괜찮아."
  - place: x 28% · y 30% · w 32% · tail ↓
  - read_order: 2
  - note: 하린 — 왼쪽 아래
- sfx_1:
  - text_km: "គ្រឹត…"
  - text_ko: "끼익"
  - place: x 84% · y 7% · size 6% · rot 6
- note: 읽기 순서: 끼익(sfx, 오른쪽 위) → 미자(오른쪽) → 하린(왼쪽 아래).

### panel_015
- art_space: 상단 1/4 펜던트 옆 어두운 천장(왼쪽 위, 아버지 쪽) — 펜던트 자체는 피함 (EN: the upper quarter of the frame on the left: dark ceiling beside the pendant lamp)
- gap_after: 50
- bubble_1:
  - speaker: 인호
  - type: dialogue
  - text_km: "ញ៉ាំទៅ។"
  - text_ko: "먹어."
  - place: x 24% · y 10% · w 26% · tail ↓
  - read_order: 1
  - note: 인호 — 왼쪽 끝

### panel_016
- art_space: 상단 1/3 따뜻한 벽 면 — 오른쪽 위(새롬) 먼저, 왼쪽 위(우진) 다음 (EN: the upper third of the frame: plain warm wall across the full width)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "នោះរបស់អូន!"
  - text_ko: "그거 내 거!"
  - place: x 70% · y 9% · w 28% · tail ↘
  - read_order: 1
  - note: 새롬 — 오른쪽
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "មានសរសេរឈ្មោះឯងឬ?"
  - text_ko: "이름 써 놨냐?"
  - place: x 30% · y 20% · w 36% · tail ↙
  - read_order: 2
  - note: 우진 — 왼쪽

### panel_017
- art_space: 상단 1/3 흐린 벽·선반(하린 눈 위를 피해서) (EN: the upper third of the frame: blurred wall and shelf, above Harin's eyes)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "បងស្រី! ផេនដាមករស់ក្រោមភ្នែកបងឬ? ឃើញអស់ហើយ~"
  - text_ko: "언니 눈 밑에 판다 살아? 다 보여~"
  - place: x 50% · y 11% · w 50% · tail ↘
  - read_order: 1
  - note: 새롬 — 오른쪽 아래 전경

### panel_018
- art_space: 상단 1/4 어두운 천장(가운데~오른쪽) (EN: the upper quarter of the frame, centre to right: dark ceiling)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ផេនដាញ៉ាំនំបុ័ងតិចជាងអូនទៀត។"
  - text_ko: "판다가 너보다 빵은 덜 먹어."
  - place: x 60% · y 10% · w 40% · tail ↓
  - read_order: 1
  - note: 하린 — 중경

### panel_019
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_020
- art_space: 상단 1/3 벽 — 오른쪽 위(새롬) → 왼쪽 위(우진) (EN: the upper third of the frame: plain warm wall above both heads, full width)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "កងដៃហ្នឹងលក់ បាននំបុ័ងប៉ុន្មានថង់~?"
  - text_ko: "그 팔찌 팔면 빵 몇 봉지야~?"
  - place: x 62% · y 10% · w 38% · tail ↘
  - read_order: 1
  - note: 새롬 — 오른쪽
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "នេះ ខ្ញុំមិនលក់ដាច់ខាត។"
  - text_ko: "이거 절대 안 팔아."
  - place: x 30% · y 24% · w 40% · tail ↙
  - read_order: 2
  - note: 우진 — 왼쪽

### panel_021
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_022
- art_space: 상단 40% 벽 — 같은 화자 말풍선 2개 위→아래 (EN: the upper 40% of the frame: flat wall above the stove and dish shelf)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ ពូផ្ញើអង្ករមកទៀតហើយ។"
  - text_ko: "아이고, 삼촌은 또 쌀을 보내셨어."
  - place: x 50% · y 9% · w 44% · tail ↓
  - read_order: 1
  - note: 미자
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "រឿងនោះ ពូគាត់ចាត់ចែងឲ្យអស់ បើគ្មានគាត់ទេ…"
  - text_ko: "그 일도 삼촌이 다 알아서 해 주셨지, 그 양반 아니었으면—"
  - place: x 50% · y 22% · w 50% · tail ↓
  - read_order: 2
  - note: 미자

### panel_023
- art_space: 상단 1/3 어두운 배경(sfx만) (EN: the upper third of the frame: dark out-of-focus background)
- gap_after: 160
- sfx_1:
  - text_km: "ទក់!"
  - text_ko: "탁"
  - place: x 50% · y 16% · size 9% · rot -6

### panel_024
- art_space: 상단 1/3 아버지 머리 위 어두운 벽(펜던트는 프레임 위로 잘라냄) (EN: the upper third of the frame: dark wall above the father's head (pendant lamp cropped out above))
- gap_after: 160
- bubble_1:
  - speaker: 인호
  - type: dialogue
  - text_km: "…រឿងហ្នឹង ចប់ហើយ។"
  - text_ko: "…끝난 얘기다."
  - place: x 50% · y 12% · w 36% · tail ↓
  - read_order: 1
  - note: 인호 — 중앙

### panel_025
- art_space: 상단 1/3 오른쪽 흐린 벽 — 꼬리는 프레임 오른쪽 가장자리(화면 밖 미자) (EN: the upper third of the frame, right side: blurred warm wall)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ នៅលើតុបាយ ម៉ែទៅនិយាយរឿងអីចឹង…"
  - text_ko: "아이고, 밥상에서 내가 무슨 소리를…"
  - place: x 66% · y 11% · w 34% · tail ↘
  - read_order: 1
  - note: 미자 화면 밖 — 꼬리는 오른쪽 가장자리

### panel_026
- art_space: 상단 1/3 오른쪽(새롬 머리 위) 펜던트 옆 따뜻한 어둠 (EN: the upper third of the frame, right side above Saerom's head: warm dim background)
- gap_after: 160
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ប៉ា! បើពងមាន់ចៀនហ្នឹងប៉ាមិនញ៉ាំ ឲ្យកូនណា៎!"
  - text_ko: "아빠, 그 계란말이 안 먹을 거면 내 거!"
  - place: x 56% · y 12% · w 44% · tail ↘
  - read_order: 1
  - note: 새롬 — 오른쪽

### panel_027
- art_space: 상단 1/3 벽(왼쪽 위) (EN: the upper third of the frame, left side: plain wall and shelf above Ujin's head)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ខ្ញុំឆ្អែតហើយ។"
  - text_ko: "나 배불러."
  - place: x 32% · y 11% · w 34% · tail ↘
  - read_order: 1
  - note: 우진 — 중앙

### panel_028
- art_space: 왼쪽 절반 흐린 따뜻한 배경(말풍선 2–3줄) (EN: the left half of the frame: blurred warm background)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "បងប្រុស សព្វថ្ងៃម៉េចមិនសូវញ៉ាំម្ហូប? សម្រកខ្លួន? ឬមានសង្សារ?"
  - text_ko: "오빠 요즘 왜 반찬 안 먹어? 다이어트? 연애?"
  - place: x 27% · y 28% · w 48% · tail ↘
  - read_order: 1
  - note: 새롬 — 얼굴 오른쪽 절반

### panel_029
- art_space: 우측 상단 절반 흐린 배경 (EN: the upper-right half of the frame: blurred background)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ខ្ញុំថែមម៉ោងបង្រៀនគួរ។ ញ៉ាំនៅក្រៅ។"
  - text_ko: "과외 알바 늘렸어. 밖에서 먹어."
  - place: x 66% · y 14% · w 34% · tail ↙
  - read_order: 1
  - note: 우진 — 얼굴 왼쪽 절반

### panel_030
- art_space: 상단 1/3 벽 — 왼쪽 위(하린), 오른쪽 위(우진) (EN: the upper third of the frame: plain wall above both heads, full width)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ថែម? តាំងពីពេលណា?"
  - text_ko: "늘렸어? 언제부터?"
  - place: x 28% · y 10% · w 36% · tail ↙
  - read_order: 1
  - note: 하린 — 왼쪽
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "កុំរវល់។"
  - text_ko: "신경 꺼."
  - place: x 70% · y 21% · w 24% · tail ↘
  - read_order: 2
  - note: 우진 — 오른쪽

### panel_031
- art_space: 상단 왼쪽 1/3 어두운 천장(하린) + 우진 머리 왼쪽 옆 중간 높이 벽(우진) — 우진 얼굴 위는 비우지 않음 (EN: the upper-left third of the frame (dark ceiling beside the pendant) and the plain wall just left of Ujin's head at mid height)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ឯងរៀនតែមួយមុខទៅ។ លុយ ចាំបងរក។"
  - text_ko: "너는 공부만 해. 돈은 내가 벌어."
  - place: x 30% · y 10% · w 44% · tail ↙
  - read_order: 1
  - note: 하린 — 왼쪽 아래 전경
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "បងមើលខ្លួនឯងទៅ។"
  - text_ko: "누나나 잘해."
  - place: x 52% · y 30% · w 32% · tail ↗
  - read_order: 2
  - note: 우진 — 오른쪽, 머리 왼쪽 옆
- note: 하린은 상단 왼쪽, 우진은 머리 왼쪽 옆 중간 높이 — 우진 얼굴 위는 비우지 않는다.

### panel_032
- art_space: 상단 가운데 빈 의자 위 벽(생각 풍선) + 우측 상단 방문 근처 벽(sfx) (EN: the upper third of the frame: plain wall above the empty chair and near the closed door at the upper right)
- gap_after: 320
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…នៅខាងក្រៅ ធ្វើអីខ្លះ?"
  - text_ko: "…밖에서 뭘 하길래."
  - place: x 44% · y 16% · w 40%
  - read_order: 1
  - note: 하린 생각 — 빈 의자 위, 꼬리 없음
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "탁"
  - place: x 84% · y 12% · size 8% · rot 8
- note: sfx는 문 쪽(오른쪽 위), 생각 풍선은 빈 의자 위.

### panel_033
- art_space: 우측 하단~중단 담벼락 면(삼촌 옆, 평평한 시멘트 담). 상단 하늘도 비움 (EN: the right side of the frame from mid to lower height: flat cement wall beside the uncle; the top sky also stays plain)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ហារីន ទៅធ្វើការហើយឬ ក្មួយ? ពូដើរលេងបន្តិច។"
  - text_ko: "하린아, 출근하니? 삼촌은 산책 중이다."
  - place: x 58% · y 66% · w 42% · tail ↙
  - read_order: 1
  - note: 삼촌 — 아래쪽, 말풍선 왼쪽

### panel_034
- art_space: 상단 1/3 남색 하늘: 왼쪽 위(삼촌 대사) + 오른쪽 위(생각 풍선) (EN: the upper third of the frame: plain navy night sky and dark wall top, full width)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ល្ងាចស្អែកកុំភ្លេចណា៎។ ស្អែកឯងថ្ងៃសម្រាកហ្នឹង។"
  - text_ko: "내일 저녁 잊지 마라. 너 내일 쉬는 날이잖아."
  - place: x 34% · y 10% · w 56% · tail ↙
  - read_order: 1
  - note: 삼촌 — 중경 왼쪽
- bubble_2:
  - speaker: 하린
  - type: thought
  - text_km: "…មិនដែលប្រាប់ពូផង។"
  - text_ko: "…삼촌한테 말한 적 없는데."
  - place: x 72% · y 24% · w 28%
  - read_order: 2
  - note: 하린 생각 — 발 쪽(오른쪽 아래), 꼬리 없음
- note: 삼촌 대사(왼쪽 위) → 하린 생각(오른쪽, 더 낮게).

### panel_035
- art_space: 상단 45% 남색 하늘: 왼쪽 위 삼촌 말풍선 2개(위→아래), 오른쪽 중단 하린 말풍선 1개 — 두 사람 얼굴은 하단 55% (EN: the upper 45% of the frame: plain navy night sky and dark wall top (street lamp pushed to the right edge); both faces stay in the lower 55%)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ដែលខ្វះពីថ្ងៃទី១ហ្នឹង ខាងនោះគេប្រញាប់ចង់បានណា៎។"
  - text_ko: "1일에 모자랐던 거, 그쪽에서 급하대."
  - place: x 36% · y 8% · w 60% · tail ↙
  - read_order: 1
  - note: 삼촌 — 왼쪽 아래
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "ពូមានរឿងចង់និយាយជាមួយឯងផង។"
  - text_ko: "삼촌이 할 얘기도 있고."
  - place: x 32% · y 20% · w 46% · tail ↙
  - read_order: 2
  - note: 삼촌 — 왼쪽 아래
- bubble_3:
  - speaker: 하린
  - type: dialogue
  - text_km: "…អ៊ូជីន ឬម៉ែ មិនដឹងមែនទេ ពូ?"
  - text_ko: "…우진이나 엄마는, 정말 모르죠?"
  - place: x 66% · y 34% · w 34% · tail ↘
  - read_order: 3
  - note: 하린 — 오른쪽(하단 55% 안의 위쪽)
- note: ★ 말풍선 3개(대본 1:1). 삼촌 2개 왼쪽 위→아래, 하린 1개 오른쪽 아래쪽.

### panel_036
- art_space: 우측 상단 1/3 남색 하늘 (EN: the upper-right third of the frame: plain navy night sky and wall)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ប្អូនឯងដឹងម៉េចកើត។ គ្មាននរណាដឹងទេ។"
  - text_ko: "네 동생이 어떻게 알아. 아무도 몰라."
  - place: x 66% · y 13% · w 34% · tail ↙
  - read_order: 1
  - note: 삼촌 — 아래 2/3 약간 왼쪽

### panel_037
- art_space: 상단 40% 남색 하늘 — 긴 말풍선 2개, 꼬리는 프레임 왼쪽(손의 주인 쪽) (EN: the upper 40% of the frame: plain navy night sky and dark wall top)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ប៉ាឯងទ្រាំម្នាក់ឯងមិនរួច យើងពីរនាក់ជួយបន្ថែមស្ងាត់ៗ…"
  - text_ko: "네 아버지 혼자 못 버티는 거, 우리 둘이 조용히 보태는 거…"
  - place: x 36% · y 10% · w 64% · tail ↙
  - read_order: 1
  - note: 삼촌 — 화면 왼쪽 밖(손의 주인)
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "រឿងនេះ ដឹងតែឯងនិងពូទេ ណា៎។"
  - text_ko: "이건 너랑 나만 아는 거다."
  - place: x 42% · y 23% · w 50% · tail ↙
  - read_order: 2
  - note: 삼촌 — 화면 왼쪽 밖
- note: ★ 첫 말풍선이 가장 김(52자) — w 64%(x+w=100)로 2줄 이내.

### panel_038
- art_space: 왼쪽 절반 어두운 담 면 (EN: the left half of the frame: dark plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចាស ពូ។ ក្មួយនឹងប្រយ័ត្ន។"
  - text_ko: "…네, 삼촌. 조심할게요."
  - place: x 28% · y 30% · w 44% · tail ↘
  - read_order: 1
  - note: 하린 — 얼굴 오른쪽 절반

### panel_039
- art_space: 오른쪽 중단 평평한 시멘트 담 면 — 위쪽 어둠의 삼촌 실루엣은 가리지 않게 (EN: the right side of the frame at mid height: flat plain cement wall)
- gap_after: 320
- bubble_1:
  - speaker: 할머니
  - type: dialogue
  - text_km: "រកមនុស្សដូចសុកគូ មិនបានទេចៅ។ អត់មានទេ។"
  - text_ko: "석구 같은 사람 없어. 암, 없지."
  - place: x 60% · y 50% · w 40% · tail ↙
  - read_order: 1
  - note: 할머니 — 왼쪽 중단 평상

### panel_040
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_041
- silent: true
- art_space: 없음(silent)
- gap_after: 320

### panel_042
- art_space: 상단 1/4 어두운 유리 윗부분·천장 면(오른쪽, 삼촌 위) — 작업등 머리 피함 (EN: the upper quarter of the frame, right side: dark upper glass and ceiling above the uncle (work lamp head kept lower))
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "មកហើយ ក្មួយ។ តោះ ចូលទៅខាងក្រោយ។"
  - text_ko: "왔구나. 뒤로 가자."
  - place: x 64% · y 10% · w 36% · tail ↓
  - read_order: 1
  - note: 삼촌 — 유리 너머 중경 오른쪽

### panel_043
- art_space: 상단 1/4 빈 벽(왼쪽~가운데) — 서랍장·금고·형광등 피함 (EN: the upper quarter of the frame, left to centre: plain bare wall)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អង្គុយចុះ ក្មួយ។ ផឹកតែមួយពែងសិនទៅ។"
  - text_ko: "앉아라. 차부터 한 잔 하고."
  - place: x 44% · y 10% · w 50% · tail ↘
  - read_order: 1
  - note: 삼촌 — 오른쪽 안쪽

### panel_044
- art_space: 상단 왼쪽 1/3 흐린 벽 — 짧은 말풍선 위, 긴 말풍선 아래 (EN: the upper-left part of the frame (top third): blurred plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "…ស្រាលបន្តិចហ្ន៎។"
  - text_ko: "…가볍네."
  - place: x 28% · y 8% · w 36% · tail ↘
  - read_order: 1
  - note: 삼촌 — 위쪽 중단 눈
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "ខាងនោះគេប្ដូរការប្រាក់។ ខែក្រោយ ថែមបន្តិចទៀតណា៎…"
  - text_ko: "그쪽에서 이자가 바뀌었대. 다음 달부턴 조금만 더…"
  - place: x 32% · y 20% · w 56% · tail ↘
  - read_order: 2
  - note: 삼촌

### panel_045
- art_space: 상단 1/4 어두운 벽(머리 위, 얼굴 침범 금지) (EN: the upper quarter of the frame: dark wall above Harin's head)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ខែនេះ ខ្ញុំឲ្យបានប៉ុណ្ណឹងទេ ពូ។"
  - text_ko: "이번 달은 이것만 드릴게요."
  - place: x 50% · y 10% · w 48% · tail ↓
  - read_order: 1
  - note: 하린 — 중앙

### panel_046
- art_space: 상단 1/4 빈 벽(짧은 말풍선 하나) (EN: the upper quarter of the frame: plain bare wall above the uncle's head)
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ប៉ុណ្ណឹង?"
  - text_ko: "그게 다니?"
  - place: x 50% · y 10% · w 28% · tail ↓
  - read_order: 1
  - note: 삼촌 — 중앙

### panel_047
- art_space: 왼쪽 위 커튼 쪽 어둠(sfx) + 오른쪽 위 1/3 서랍장 위 빈 벽(말풍선) (EN: the upper-left corner (dark curtain side) and the upper-right third (plain wall above the drawer chest))
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អង្គុយចាំសិន។"
  - text_ko: "앉아 있어라."
  - place: x 70% · y 14% · w 28% · tail ↙
  - read_order: 1
  - note: 삼촌 — 중앙
- sfx_1:
  - text_km: "ក្រីង ក្រីង!"
  - text_ko: "딸랑"
  - place: x 20% · y 9% · size 6% · rot -6

### panel_048
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_049
- art_space: 상단 1/4 빈 벽(왼쪽~가운데, 삼촌 말풍선) + 왼쪽 중단 커튼 면(작은 sfx) (EN: the upper quarter of the frame, left to centre: plain wall under the fluorescent light; plus a small plain patch of curtain at the left edge, mid height)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អូយ មុខស្លេកអស់ហើយ ក្មួយ។ ពូមិនគួរនិយាយអីចឹងទេ។"
  - text_ko: "아이고, 얼굴 하얗게 질린 것 좀 봐라. 삼촌이 괜히 그랬다."
  - place: x 40% · y 10% · w 60% · tail ↘
  - read_order: 1
  - note: 삼촌 — 중경 오른쪽
- sfx_1:
  - text_km: "ស្រូត…"
  - text_ko: "스륵"
  - place: x 14% · y 46% · size 5% · rot -4

### panel_050
- art_space: 상단 왼쪽 1/3 흐린 벽 (EN: the upper-left third of the frame: blurred plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ស្រោមសំបុត្រខែក្រោយ។ នៅមានពូទេតើ ក្មួយ។"
  - text_ko: "다음 달 봉투다. 삼촌이 있잖아."
  - place: x 34% · y 12% · w 56% · tail ↘
  - read_order: 1
  - note: 삼촌 — 손(중앙~오른쪽)

### panel_051
- art_space: 상단 1/3 벽(가운데~왼쪽, 같은 화자 2개) — 오른쪽 서랍장 윗부분 피함 (EN: the upper third of the frame, centre to left: plain wall above both heads)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ខែនេះខ្វះប៉ុន្មាន ពូរកវិធីបំពេញឲ្យ។"
  - text_ko: "이번 달 모자란 건 삼촌이 어떻게든 맞춰 볼게."
  - place: x 38% · y 9% · w 54% · tail ↘
  - read_order: 1
  - note: 삼촌 — 오른쪽
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "កុំរ៉ាប់រងម្នាក់ឯងពេក ក្មួយ។"
  - text_ko: "너무 혼자 지려고 하지 마라."
  - place: x 44% · y 22% · w 48% · tail ↘
  - read_order: 2
  - note: 삼촌 — 오른쪽

### panel_052
- art_space: 상단 40% 형광등 아래 평평한 빈 벽(왼쪽 위 중심) (EN: the upper 40% of the frame, centred left: flat bare wall under the fluorescent light)
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "កុំបារម្ភ។ ខែនេះ វាក៏យកមកឲ្យទាន់ថ្ងៃហើយដែរ—"
  - text_ko: "걱정 마. 걔도 이번 달은 날짜 맞춰 냈으니까—"
  - place: x 36% · y 14% · w 56% · tail ↘
  - read_order: 1
  - note: 삼촌 — 중단~하단 오른쪽
- note: ★ 반전 트리거 — 단독 말풍선. 앞뒤 wide 여백.

### panel_053
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_054
- art_space: 상단 1/3 어두운 벽(짧은 말풍선) (EN: the upper third of the frame: dark plain wall)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "……អ្នកណា?"
  - text_ko: "……누구요?"
  - place: x 50% · y 14% · w 24% · tail ↓
  - read_order: 1
  - note: 하린 — 중앙
- note: 반전 직후 짧은 질문, 단독.

### panel_055
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_056
- art_space: 상단 1/3 빈 벽(가운데~왼쪽, 같은 화자 2개) (EN: the upper third of the frame, centre to left: plain bare wall)
- gap_after: 320
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "…ភ្ញៀវទេ។ ក្មេងក្នុងភូមិ។"
  - text_ko: "…손님 얘기다. 동네 애."
  - place: x 40% · y 9% · w 44% · tail ↘
  - read_order: 1
  - note: 삼촌 — 오른쪽
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "យប់ហើយ។ ឆាប់ទៅផ្ទះទៅ។"
  - text_ko: "늦었다. 얼른 들어가라."
  - place: x 46% · y 21% · w 40% · tail ↘
  - read_order: 2
  - note: 삼촌 — 오른쪽

### panel_057
- art_space: 상단 1/4 왼쪽 어두운 벽·천장 — 전구는 피함 (EN: the upper quarter of the frame, left side: dark wall and ceiling (bulb kept away from it))
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…អីហ្នឹង? មិនបើកភ្លើងផង។"
  - text_ko: "…뭐야. 불도 안 켜고."
  - place: x 28% · y 10% · w 40% · tail ↘
  - read_order: 1
  - note: 우진 — 문틀(중앙)
- note: 꼬리는 문틀 안 우진. 말풍선이 전구(위쪽 중앙)를 가리지 않게 왼쪽에 둔다.

### panel_058
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_059
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_060
- silent: true
- art_space: 없음(silent)
- gap_after: 0
