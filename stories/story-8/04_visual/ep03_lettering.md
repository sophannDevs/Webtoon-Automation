# EP03 레터링 명세 — 「3년 전에 끝난 일」 / «រឿងដែលចប់តាំងពីបីឆ្នាំមុន» (letterer · Khmer edition)

- 작성: letterer · 2026-11-25 · Phase 4 (Khmer edition + Flow-by-hand mode)
- 입력: `03_episode/ep03_script_final.md`(Khmer review READY), `04_visual/ep03_shotlist.md`(art_space·gutter·FL7·FL8·FL11), `04_visual/style-bible.md` §7, `00_input/brief.md`(판정 GA–GG), 형식 기준 `04_visual/ep02_lettering.md`
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음은 뷰어(`km_tool.py build`)가 그린다.
  `art_space`는 이미지가 비워 둘 자리다 — prompt-smith는 괄호 안 영어(EN)를
  `Keep <EN> as calm, empty background with no important details (a speech bubble will be added there later).`로 넣는다.
- `text_km`는 대본 KM 줄 그대로(글자 단위, 검수본에서 기계적으로 옮김 — 크메르어는 한 글자도 고치지 않았다). `text_ko`는 참고용, 화면에 나오지 않음.
- `place`: x/y = 말풍선 중심, w = 최대 폭(패널 폭 %). 모든 말풍선 `x + w ≤ 100` 및 `x − w/2 ≥ 2`(프레임 안).
  9:16 패널 기준 1줄 말풍선 ≈ 패널 높이 6%, 2줄 ≈ 9–10%. 폭은 말풍선당 2줄 이내가 되게 잡았다.
- `gap_after`(px): tight 16 · normal 50 · wide 160 · xwide 320 (샷리스트 gutter_after, FL7). 회차 끝 061 = 0.
- 같은 화자의 연속 말풍선 2개는 첫 번째에 꼬리를 달지 않고 두 번째에만 단다(009 · 032 · 034 · 036 미자 · 049 사장 · 058).
- 화자 표기: 냄비 공장 사장 = `사장님`(이름 없음, 판정 GB). 석구는 041 한 줄만.
- 패널 61 · 말풍선 69 (대사 67 · 생각 2 — 005·059) · sfx 3 (001 · 041 · 060) · env 0 · 캡션 0 · 무대사 12.
- 말풍선 3개 패널: 036 · 037 · 049 (샷리스트 계획대로, art_space 35%). **반전 054 · 055는 각각 말풍선 1개**(섞지 않음). 나머지는 1–2개.
- 회상 046–047은 무대사(memory 말풍선 없음). 061 클리프행어도 무대사 — 말풍선·캡션·엔딩 카드 없음.
- 041: 효과음 + 석구의 작은 선택 말풍선(대본 Q10 · FL8) — 효과음과 말풍선 모두 문간 위쪽 그늘 벽. 060 효과음은 041과 같은 자리.
- 배치 패스 확인 요청(이미지 도착 후): 001(열린 문짝 가장자리) · 039(할머니가 화면 좌우 어느 쪽인지 — 꼬리 방향) · 041·060(원경 문간·종 위치 — x/y만) ·
  050(하린 옆얼굴과 ② 말풍선 겹침) · 014·015·043(아래쪽 말풍선이 식탁 면/골목 바닥 위에 오는지).

---

### panel_001
- art_space: 상단 20% 문틀 위 어두운 벽 — 효과음은 열린 문짝 가장자리 바로 위 (EN: the upper fifth of the frame: flat dark wall above the door frame, just above the edge of the slid-open door)
- gap_after: 50
- sfx_1:
  - text_km: "គ្រូត…"
  - text_ko: "드르륵"
  - place: x 62% · y 9% · size 7% · rot 4
  - note: 열린 문짝 가장자리 위(FL8)
- note: 효과음만. EP02 P62 직결.

### panel_002
- art_space: 상단 20% 문틀 위 남색 처마·밤하늘, 왼쪽 위 — 가로등 번짐(오른쪽 위) 피함 (EN: the upper fifth of the frame, left side: dark eaves and plain navy night sky above the door frame (the streetlamp glow kept to the upper right, away from it))
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…យឺតហើយ។ ទៅលឿនទៅ។"
  - text_ko: "…늦겠다. 얼른 가."
  - place: x 30% · y 9% · w 40% · tail ↘
  - read_order: 1
  - note: 미자 — 프레임 중앙

### panel_003
- art_space: 상단 25% 남색 밤하늘, 하린 머리 위(가운데~오른쪽) (EN: the upper quarter of the frame, centre to right: plain navy night sky above Harin's head)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចាស។ កូនទៅហើយ។"
  - text_ko: "…다녀올게요."
  - place: x 60% · y 10% · w 36% · tail ↓
  - read_order: 1
  - note: 하린 — 마당 가운데, 오른쪽으로 걸음

### panel_004
- silent: true
- art_space: 없음(silent)
- gap_after: 320
- note: 다음은 내리막 계단(xwide).

### panel_005
- art_space: 상단 25% 남색 밤하늘 — 생각 풍선 (EN: the upper quarter of the frame: plain navy night sky above the stairs)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…ព្រឹកស្អែក។ ត្រូវតែនិយាយ។"
  - text_ko: "…내일 아침엔. 말하자."
  - place: x 50% · y 11% · w 44%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_006
- silent: true
- art_space: 없음(silent)
- gap_after: 320
- note: 다음은 19일 새벽 부엌(xwide).

### panel_007
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_008
- art_space: 상단 25% 싱크대 위 빈 벽과 어두운 천장 — 창은 피함 (EN: the upper quarter of the frame: plain wall above the sink and dark ceiling (the small window kept out of it))
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អេះ មកហើយ? បាយជិតឆ្អិនហើយណា៎~"
  - text_ko: "어, 왔어? 밥 금방 돼~"
  - place: x 40% · y 10% · w 46% · tail ↓
  - read_order: 1
  - note: 미자 — 가면 목소리

### panel_009
- art_space: 상단 25% 어두운 앞벽·천장 (EN: the upper quarter of the frame: dark front wall and ceiling)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ម៉ែ។"
  - text_ko: "엄마."
  - place: x 24% · y 8% · w 18%
  - read_order: 1
  - note: 하린 ① — 같은 화자 연속, 꼬리는 ②에만
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "ម្សិលមិញ… កូនឮអស់ហើយ។"
  - text_ko: "어제… 다 들었어."
  - place: x 52% · y 17% · w 40% · tail ↓
  - read_order: 2
  - note: 하린 ②

### panel_010
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_011
- art_space: 상단 25% 빈 벽·천장 (EN: the upper quarter of the frame: plain wall and ceiling above the sink)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ ឮអីទៅ! ម៉ែគ្រាន់តែចេញស្រូបខ្យល់—"
  - text_ko: "아이고, 듣긴 뭘 들어. 엄마 그냥 바람 쐬면서—"
  - place: x 46% · y 11% · w 50% · tail ↓
  - read_order: 1
  - note: 미자 — 말이 잘림(—), 2줄

### panel_012
- art_space: 상단 25% 어두운 앞벽, 하린 머리 위 왼쪽 (EN: the upper quarter of the frame, left side: dark front wall above Harin's head)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចិញ្ចៀន។"
  - text_ko: "…반지."
  - place: x 30% · y 10% · w 24% · tail ↓
  - read_order: 1
  - note: 하린 — 중경 왼쪽

### panel_013
- art_space: 상단 25% 머리 위 어두운 벽 — 말풍선 작게(얼굴 안 덮음, FL11) (EN: the upper quarter of the frame: dark wall above Mija's head)
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ម៉ែ ពិបាកដូចគ្នា កូន។"
  - text_ko: "…엄마도 힘들었어."
  - place: x 50% · y 9% · w 34% · tail ↓
  - read_order: 1
  - note: 미자 — 맨얼굴 목소리, 작게

### panel_014
- art_space: 하단 20% 식탁 아래 어둠 (EN: the lower fifth of the frame: dark shadow below the table edge)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "កូនដូចគ្នា។"
  - text_ko: "나도야."
  - place: x 34% · y 90% · w 26% · tail ↖
  - read_order: 1
  - note: 하린 — 꼬리 위로 손 쪽(왼쪽)

### panel_015
- art_space: 상단 20% 어두운 벽(미자) + 하단 15% 초점 밖 식탁 면(하린, 화면 밖 왼쪽) (EN: the upper fifth of the frame (dark wall) and the lower 15% of the frame (out-of-focus table top))
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…កូនផង?"
  - text_ko: "…너도?"
  - place: x 50% · y 8% · w 22% · tail ↓
  - read_order: 1
  - note: 미자
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "ពីរឆ្នាំ។"
  - text_ko: "이 년."
  - place: x 18% · y 91% · w 22% · tail ↙
  - read_order: 2
  - note: 하린 — 화면 밖 왼쪽, 꼬리는 왼쪽 가장자리로

### panel_016
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: dark wall)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ម៉ែស្មានថា ក្មេងៗមិនដឹងទេ…"
  - text_ko: "애들은 모르는 줄…"
  - place: x 62% · y 8% · w 36% · tail ↓
  - read_order: 1
  - note: 미자 — 중경 오른쪽
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "អ៊ូជីនផង។"
  - text_ko: "우진이도."
  - place: x 22% · y 18% · w 26% · tail ↓
  - read_order: 2
  - note: 하린 — 전경 왼쪽

### panel_017
- art_space: 상단 20% 어두운 벽·천장 (EN: the upper fifth of the frame: dark wall and ceiling)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ចុះរបស់ម៉ែ… លាក់ទុកឯណា?"
  - text_ko: "엄마 건… 어디 둬?"
  - place: x 40% · y 9% · w 40% · tail ↙
  - read_order: 1
  - note: 하린 — 전경 왼쪽 어깨

### panel_018
- art_space: 상단 25% 어두운 벽·천장 (EN: the upper quarter of the frame: dark wall and ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ធុងអង្ករ?"
  - text_ko: "…쌀통?"
  - place: x 22% · y 8% · w 26% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "ដាំបាយម្ដងៗ បេះដូងម៉ែស្ទើរលោតចេញមកក្រៅ!"
  - text_ko: "밥 지을 때마다 심장이 철렁했다니까."
  - place: x 58% · y 19% · w 42% · tail ↘
  - read_order: 2
  - note: 미자 — 오른쪽, 2줄 ⟨온기⟩ E03-W

### panel_019
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: dark wall)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ពេលសែរ៉ូមរកបាយក្តាំង—"
  - text_ko: "새롬이가 누룽지 찾을 때—"
  - place: x 28% · y 8% · w 40% · tail ↓
  - read_order: 1
  - note: 하린 — 전경 왼쪽, 말이 잘림(—)
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "ពេលហ្នឹង ម៉ែដូចចង់សន្លប់!"
  - text_ko: "엄마 그때 진짜 기절하는 줄 알았어."
  - place: x 64% · y 19% · w 36% · tail ↓
  - read_order: 2
  - note: 미자 — 중경 오른쪽

### panel_020
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_021
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_022
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: dark wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ខែនេះខ្វះ… ព្រោះកូនជូនពូតិចជាងមុន។"
  - text_ko: "이번 달 모자란 거… 내가 덜 드려서야."
  - place: x 30% · y 9% · w 44% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽, 2줄
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "…កូនឯង?"
  - text_ko: "…네가?"
  - place: x 72% · y 19% · w 22% · tail ↓
  - read_order: 2
  - note: 미자 — 오른쪽, 짧게

### panel_023
- art_space: 상단 15% 어두운 벽, 왼쪽(미자 얼굴 옆) (EN: the upper 15% of the frame, left side: dark wall beside Mija's face)
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ល្អហើយ កូន។"
  - text_ko: "…잘했어."
  - place: x 28% · y 7% · w 30% · tail ↘
  - read_order: 1
  - note: 미자 — 얼굴 반이 위쪽 오른쪽

### panel_024
- art_space: 상단 25% 문틀 위 어두운 벽 (EN: the upper quarter of the frame: dark wall above the kitchen doorway)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…អីហ្នឹង?"
  - text_ko: "…뭐야, 이거."
  - place: x 50% · y 10% · w 24% · tail ↓
  - read_order: 1
  - note: 우진 — 문턱

### panel_025
- art_space: 상단 20% 어두운 벽 (EN: the upper fifth of the frame: dark wall)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…ម៉ែផង?"
  - text_ko: "…엄마도?"
  - place: x 68% · y 8% · w 22% · tail ↓
  - read_order: 1
  - note: 우진 — 가운데~오른쪽
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "យករបស់ឯងមកដាក់ផង។"
  - text_ko: "너도 꺼내."
  - place: x 30% · y 17% · w 36% · tail ↙
  - read_order: 2
  - note: 하린 — 꼬리 ↙ 전경 손

### panel_026
- art_space: 상단 20% 어두운 벽 (EN: the upper fifth of the frame: dark wall above the table)
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ដល់ទៅបីនាក់។"
  - text_ko: "…셋이나."
  - place: x 50% · y 9% · w 30% · tail ↓
  - read_order: 1
  - note: 미자 — 중경 가운데

### panel_027
- art_space: 상단 25% 천장 (EN: the upper quarter of the frame: plain ceiling)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ប៉ា និងសែរ៉ូម… កុំឲ្យដឹង។"
  - text_ko: "아빠랑 새롬이는… 모르게 하자."
  - place: x 54% · y 8% · w 40% · tail ↓
  - read_order: 1
  - note: 미자 — 가운데
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "កុំឲ្យដឹងទៀតហើយ?"
  - text_ko: "또 모르게?"
  - place: x 24% · y 19% · w 34% · tail ↓
  - read_order: 2
  - note: 우진 — 안쪽 왼쪽

### panel_028
- art_space: 상단 25% 안방 문 위 어두운 벽 (EN: the upper quarter of the frame: dark wall above the closed bedroom door)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចាស។ ប៉ា… មិនទាន់ទេ។"
  - text_ko: "…응. 아빠는, 아직."
  - place: x 50% · y 10% · w 36% · tail ↘
  - read_order: 1
  - note: 하린 — 전경 오른쪽 옆얼굴

### panel_029
- art_space: 상단 25% 천장·벽(왼쪽~가운데) (EN: the upper quarter of the frame, left to centre: plain ceiling and wall)
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ពីនេះទៅ កុំលីម្នាក់ឯងទៀត។ ទាំងពីរនាក់។"
  - text_ko: "이제 혼자 하지 마. 둘 다."
  - place: x 46% · y 9% · w 48% · tail ↘
  - read_order: 1
  - note: 미자 — 오른쪽, 2줄
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ម៉ែផង។"
  - text_ko: "…엄마도."
  - place: x 22% · y 20% · w 22% · tail ↓
  - read_order: 2
  - note: 하린 — 왼쪽

### panel_030
- art_space: 상단 25% 천장 (EN: the upper quarter of the frame: plain ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ព្រឹកព្រលឹម ធ្វើអីគ្នាហ្នឹង~? ប្រជុំសម្ងាត់មែនទេ?"
  - text_ko: "다들 아침부터 뭐 해~? 비밀 회의야?"
  - place: x 58% · y 8% · w 42% · tail ↘
  - read_order: 1
  - note: 새롬 — 전경 오른쪽, 2줄 ⟨이중의미⟩
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "ប្រជុំអីទៅ! ញ៉ាំបាយសិនចាំទៅ!"
  - text_ko: "회의는 무슨! 밥 먹고 가!"
  - place: x 42% · y 19% · w 40% · tail ↓
  - read_order: 2
  - note: 미자 — 중경 가운데

### panel_031
- art_space: 상단 20% 문틀 위 어두운 벽 (EN: the upper fifth of the frame: dark wall above the kitchen doorway)
- gap_after: 50
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "យឺតហើយ~ កូនទៅសាលាហើយណា៎!"
  - text_ko: "늦었어~ 다녀오겠습니다!"
  - place: x 50% · y 9% · w 42% · tail ↓
  - read_order: 1
  - note: 새롬 — 프레임 중앙

### panel_032
- art_space: 상단 25% 어두운 벽·천장 (EN: the upper quarter of the frame: dark wall and ceiling)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ចុះខាងនោះ… ជានរណា?"
  - text_ko: "근데. 그쪽은 누군데?"
  - place: x 36% · y 8% · w 36%
  - read_order: 1
  - note: 우진 ① — 같은 화자 연속, 꼬리는 ②에만
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "លុយដែលយើងឲ្យទាំងប៉ុន្មាន ទៅណាអស់?"
  - text_ko: "우리 낸 거, 다 어디로 가는 건데."
  - place: x 44% · y 19% · w 46% · tail ↓
  - read_order: 2
  - note: 우진 ② — 가운데 왼쪽

### panel_033
- art_space: 상단 20% 어두운 벽 (EN: the upper fifth of the frame: dark wall)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "រឿងនោះ ពូគាត់ចាត់ចែង…"
  - text_ko: "그 일은 삼촌이 다 알아서…"
  - place: x 50% · y 9% · w 38% · tail ↓
  - read_order: 1
  - note: 미자 — 말끝 …(입버릇이 스스로 멈춤)

### panel_034
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: dark wall)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "មិនមែនពូទេ។"
  - text_ko: "삼촌 말고."
  - place: x 30% · y 7% · w 28%
  - read_order: 1
  - note: 하린 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "អ្នកស្គាល់មុខពួកខាងនោះ… កូនចាំបានម្នាក់។"
  - text_ko: "그쪽 사람들 얼굴 아는 사람… 나 한 명 기억나."
  - place: x 50% · y 17% · w 48% · tail ↓
  - read_order: 2
  - note: 하린 ② — 2줄

### panel_035
- art_space: 상단 25% 어두운 벽(오른쪽) (EN: the upper quarter of the frame, right side: dark wall)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ថៅកែរោងចក្រឆ្នាំង?"
  - text_ko: "…냄비 공장 사장님?"
  - place: x 66% · y 10% · w 34% · tail ↘
  - read_order: 1
  - note: 미자 — 전경 오른쪽 옆얼굴

### panel_036
- art_space: 상단 35% 천장·어두운 벽 (말풍선 3개) (EN: the upper 35% of the frame: plain ceiling and dark wall)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ម៉ែឮគេនិយាយនៅហាងបាយ—"
  - text_ko: "식당에서 들었는데—"
  - place: x 64% · y 7% · w 36%
  - read_order: 1
  - note: 미자 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "សប្តាហ៍នេះ គាត់ចេញចូលហាងពូ យកគ្រឿងមាសទៅលក់។"
  - text_ko: "그 양반, 이번 주에 삼촌 가게로 금붙이 팔러 다닌대."
  - place: x 54% · y 18% · w 46% · tail ↘
  - read_order: 2
  - note: 미자 ② — 오른쪽, 2줄
- bubble_3:
  - speaker: 우진
  - type: dialogue
  - text_km: "ហាងពូ?"
  - text_ko: "삼촌 가게?"
  - place: x 20% · y 29% · w 20% · tail ↓
  - read_order: 3
  - note: 우진 — 안쪽 왼쪽, 짧게

### panel_037
- art_space: 상단 35% 천장 (말풍선 3개, 지그재그) (EN: the upper 35% of the frame: plain ceiling above the switched-off pendant lamp)
- gap_after: 320
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ចឹង កូនទៅចាំគាត់នៅជណ្ដើរ។"
  - text_ko: "그럼 계단에서 기다릴게."
  - place: x 30% · y 8% · w 40% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "បើពូឃើញ—"
  - text_ko: "삼촌 눈에 띄면—"
  - place: x 72% · y 18% · w 26% · tail ↓
  - read_order: 2
  - note: 미자 — 오른쪽, 말이 잘림(—)
- bubble_3:
  - speaker: 하린
  - type: dialogue
  - text_km: "មិនឲ្យឃើញទេ។"
  - text_ko: "안 띄게."
  - place: x 26% · y 28% · w 28% · tail ↓
  - read_order: 3
  - note: 하린 — 왼쪽, 짧게
- note: 다음은 19일 오후 계단(xwide).

### panel_038
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_039
- art_space: 상단 15% 흐린 하늘(할머니 머리 옆) + 하단 20% 계단 면(하린 아래) (EN: the upper 15% of the frame (pale sky beside the grandmother's head) and the lower fifth of the frame (plain stair steps below Harin))
- gap_after: 160
- bubble_1:
  - speaker: 할머니
  - type: dialogue
  - text_km: "ចាំនរណាហ្នឹង ចៅ?"
  - text_ko: "누구 기다리냐, 얘야?"
  - place: x 62% · y 7% · w 34% · tail ↙
  - read_order: 1
  - note: 할머니 — 전경 위쪽
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…អត់ទេ យាយ។ អង្គុយលេងទេ។"
  - text_ko: "…아뇨. 그냥요."
  - place: x 50% · y 90% · w 42% · tail ↑
  - read_order: 2
  - note: 하린 — 아래 중경, 꼬리 위로

### panel_040
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_041
- art_space: 상단 20% 노을 하늘·빈 담 면 + 아래 가게 문간 위쪽 그늘 벽(효과음·작은 말풍선) (EN: the upper fifth of the frame (sunset sky and plain wall top) and the shaded wall just above the shop doorway below)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ថៅកែ ដើរប្រយ័ត្នណា៎—"
  - text_ko: "살펴 가세요—"
  - place: x 40% · y 58% · w 34% · tail ↘
  - read_order: 1
  - note: 석구(작게) — 문간 위쪽 그늘, 꼬리 ↘ 문간의 삼촌. 선택 줄(대본 Q10)
- sfx_1:
  - text_km: "ក្រីង ក្រីង!"
  - text_ko: "딸랑"
  - place: x 66% · y 66% · size 6% · rot -8
  - note: 문 위 놋쇠 종 옆 그늘 벽
- note: 효과음 + 작은 말풍선(FL8). 원경 인물이 작아 배치 패스에서 문 위치에 맞춰 x/y만 조정.

### panel_042
- art_space: 상단 25% 노을 하늘 (EN: the upper quarter of the frame: plain sunset sky)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ថៅកែ។"
  - text_ko: "…사장님."
  - place: x 40% · y 9% · w 22% · tail ↓
  - read_order: 1
  - note: 하린 — 전경 위쪽 뒷모습

### panel_043
- art_space: 하단 20% 그늘진 골목 바닥 (EN: the lower fifth of the frame: plain shaded alley ground)
- gap_after: 50
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "…ចៅនេះ កូននរណា?"
  - text_ko: "…뉘 집 애더라?"
  - place: x 50% · y 90% · w 34% · tail ↑
  - read_order: 1
  - note: 사장 — 꼬리 위로, 첫 대사

### panel_044
- art_space: 상단 30% 노을 하늘 (EN: the upper 30% of the frame: plain sunset sky above the stairs)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ហាងលក់ចានឆ្នាំងនោះ… ខ្ញុំជាកូនស្រីច្បង។"
  - text_ko: "주방용품 가게… 큰딸이요."
  - place: x 50% · y 11% · w 48% · tail ↓
  - read_order: 1
  - note: 하린 — 2줄

### panel_045
- art_space: 상단 20% 초점 밖 그늘 벽 (EN: the upper fifth of the frame: out-of-focus shaded wall)
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "អើ៎… ចៅហ្នឹងហើយ ក្មេងដែលយកទឹកមកឲ្យតាផឹក!"
  - text_ko: "아이고… 너, 그 물 떠다 준 애구나!"
  - place: x 50% · y 9% · w 50% · tail ↓
  - read_order: 1
  - note: 사장 — 2줄
- note: 다음은 회상(wide).

### panel_046
- silent: true
- art_space: 없음(silent)
- gap_after: 16
- note: 회상(FLASHBACK-PAST) — 무대사, memory 말풍선 없음.

### panel_047
- silent: true
- art_space: 없음(silent)
- gap_after: 160
- note: 회상 손 ECU — 무대사. 다음은 현재로(wide).

### panel_048
- art_space: 상단 25% 노을 하늘 (EN: the upper quarter of the frame: plain sunset sky)
- gap_after: 50
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ហាៗ… ទឹកទៀតហើយ។"
  - text_ko: "허허… 또 물이네."
  - place: x 30% · y 10% · w 32% · tail ↓
  - read_order: 1
  - note: 사장 — 화면 왼쪽

### panel_049
- art_space: 상단 35% 노을 하늘·담 위 빈 면 (말풍선 3개) (EN: the upper 35% of the frame: plain sunset sky and empty wall top)
- gap_after: 50
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "យប់ច្របូកច្របល់ហ្នឹង មានតែចៅទេ ដែលយកទឹកមកឲ្យ។"
  - text_ko: "그 난리 통에, 너만 물을 떠 왔어."
  - place: x 40% · y 9% · w 50%
  - read_order: 1
  - note: 사장 ① — 꼬리는 ②에만, 2줄
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ធំធាត់ហើយ ចៅអើយ។"
  - text_ko: "많이 컸다."
  - place: x 30% · y 21% · w 32% · tail ↓
  - read_order: 2
  - note: 사장 ② — 화면 왼쪽
- bubble_3:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចាស។"
  - text_ko: "…네."
  - place: x 74% · y 28% · w 18% · tail ↓
  - read_order: 3
  - note: 하린 — 화면 오른쪽, 짧게

### panel_050
- art_space: 상단 25% 초점 밖 계단 벽 (EN: the upper quarter of the frame: out-of-focus stair wall)
- gap_after: 50
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "តាមកជម្រះរបស់ប្រពន្ធតា…"
  - text_ko: "집사람 거 정리하러 왔어."
  - place: x 32% · y 8% · w 40% · tail ↓
  - read_order: 1
  - note: 사장 — 손·보자기(가운데 아래)
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…អូ៎…"
  - text_ko: "…아."
  - place: x 58% · y 18% · w 18% · tail ↘
  - read_order: 2
  - note: 하린 — 오른쪽 위 옆얼굴(얼굴에 겹치면 배치 패스에서 x를 왼쪽으로)

### panel_051
- art_space: 상단 25% 초점 밖 노을빛 벽 (EN: the upper quarter of the frame: out-of-focus sunset-lit wall)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ថៅកែ។ រឿងនោះ… រឿងគ្រួសារខ្ញុំកាលពីមុន។"
  - text_ko: "사장님. 그때 그… 저희 집 일이요."
  - place: x 50% · y 10% · w 48% · tail ↓
  - read_order: 1
  - note: 하린 — 2줄

### panel_052
- art_space: 상단 25% 초점 밖 노을 하늘·담 (EN: the upper quarter of the frame: out-of-focus sunset sky and wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "នៅសល់… ច្រើនទៀតទេ?"
  - text_ko: "아직… 많이 남았어요?"
  - place: x 52% · y 9% · w 34% · tail ↘
  - read_order: 1
  - note: 하린 — 전경 오른쪽 어깨

### panel_053
- art_space: 상단 20% 흐린 배경 (EN: the upper fifth of the frame: blurred background)
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "សល់អី?"
  - text_ko: "남다니?"
  - place: x 50% · y 8% · w 20% · tail ↓
  - read_order: 1
  - note: 사장 — 짧게
- note: 반전 앞 정지(wide).

### panel_054
- art_space: 상단 25% 노을 하늘 (EN: the upper quarter of the frame: plain sunset sky)
- gap_after: 50
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "រឿងហ្នឹងឬ? ចប់ហើយតើ។ ចប់តាំងពីបីឆ្នាំមុនម្ល៉េះ។"
  - text_ko: "그거? 다 끝났잖니. 3년 전에."
  - place: x 44% · y 11% · w 50% · tail ↙
  - read_order: 1
  - note: 사장 — ⟨반전⟩ E03-S, 말풍선 1개(2줄), 중경 왼쪽~가운데
- note: ⟨반전⟩ 첫 줄 — 단독 말풍선. 055와 섞지 않는다. 055까지 normal로 한 호흡(FL7).

### panel_055
- art_space: 상단 25% 초점 밖 노을 하늘(오른쪽 위, 얼굴 앞쪽) (EN: the upper quarter of the frame, right side: out-of-focus sunset sky in front of the old man's face)
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "កាលហ្នឹង សុកគូ ជាអ្នកយកលើកចុងក្រោយមកឲ្យតា។"
  - text_ko: "석구 씨가 마지막 걸 들고 왔었지."
  - place: x 58% · y 11% · w 42% · tail ↙
  - read_order: 1
  - note: 사장 — ⟨반전⟩ E03-S, 말풍선 1개, 옆얼굴(오른쪽을 봄)
- note: ⟨반전⟩ 둘째 줄 — 단독 말풍선. 054와 섞지 않는다. 다음 056 무대사(wide).

### panel_056
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_057
- art_space: 상단 25% 노을 하늘·담 (EN: the upper quarter of the frame: plain sunset sky and wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចប់ទាំងអស់?"
  - text_ko: "…다요?"
  - place: x 70% · y 8% · w 28% · tail ↓
  - read_order: 1
  - note: 하린 — 화면 오른쪽, 짧게
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ហ្នឹងហើយ។ តាជាអ្នកចុងក្រោយគេ ដែលបានលុយវិញ។"
  - text_ko: "그럼. 내 게 제일 마지막이었어."
  - place: x 34% · y 19% · w 46% · tail ↓
  - read_order: 2
  - note: 사장 — 화면 왼쪽, 2줄

### panel_058
- art_space: 상단 25% 노을 하늘 (EN: the upper quarter of the frame: plain sunset sky above the stairs)
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ពីនោះមក គ្មានហេតុអីទៅរកផ្ទះចៅទៀតទេ។"
  - text_ko: "그 뒤론 찾아갈 일도 없었지."
  - place: x 40% · y 8% · w 48%
  - read_order: 1
  - note: 사장 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ឥឡូវ អស់លំបាកហើយ ចៅអើយ។"
  - text_ko: "고생 끝났잖아, 이제."
  - place: x 32% · y 19% · w 40% · tail ↙
  - read_order: 2
  - note: 사장 ② — 꼬리 ↙ 아래 왼쪽으로 멀어지는 노인
- note: ⟨이중의미⟩ L08.

### panel_059
- art_space: 상단 20% 이마 위 어두운 그늘 (EN: the upper fifth of the frame: dark shadow above the brow)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…ចុះពីរឆ្នាំរបស់ខ្ញុំ…"
  - text_ko: "…그럼, 내 이 년은."
  - place: x 50% · y 9% · w 40%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_060
- art_space: 상단 20% 노을 하늘(빈 채로) + 아래 문 위 종 옆 그늘 벽(효과음 작게) (EN: the upper fifth of the frame (darkening sunset sky) and the shaded wall beside the bell above the shop door below)
- gap_after: 160
- sfx_1:
  - text_km: "ក្រីង ក្រីង!"
  - text_ko: "딸랑"
  - place: x 66% · y 66% · size 6% · rot -8
  - note: 문 위 종 옆 그늘 벽 — 041과 같은 자리
- note: 효과음만. 041과 같은 축·같은 효과음 자리.

### panel_061
- silent: true
- art_space: 없음(silent)
- gap_after: 0
- note: 회차 끝 — 무대사. 말풍선·캡션·엔딩 카드 없음.
