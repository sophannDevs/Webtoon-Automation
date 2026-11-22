# EP02 레터링 명세 — 『유통기한 연애』 2화 「묻지 않기로 했잖아」 (letterer · Khmer edition)

- 작성: letterer · 2026-11-22 · 스킬 `webtoon-khmer-edition` §3 + `webtoon-assembly`(레터링 섹션 중 종류·읽기 순서·과밀 규칙만)
- 입력: `03_episode/ep02_script_final.md`(native-khmer 리뷰 READY본, KM 줄 원문 그대로 — 손으로 다시 치지 않고 스크립트로 복사), `ep02_beatsheet.md`(패널 번호 고정 P01~P61), `04_visual/ep02_shotlist.md` v1, `04_visual/style-bible.md` §10, 형식 기준 `04_visual/ep01_lettering.md`
- **이미지에는 글자 없음.** 말풍선·효과음·캡션은 뷰어(`km_tool.py build`)가 그린다. 각 패널의 `art_space`는 prompt-smith가 "calm, empty background"로 프롬프트에 넣는다(style-bible §10-3).
- `place`: x/y = 풍선 중심, w = 최대 폭(패널 폭 대비 %). 꼬리 ↙↓↘ = 아래쪽 꼬리(화자 왼쪽/가운데/오른쪽), ↖↑↗ = 위쪽 꼬리. thought·narration은 꼬리 없음. sfx의 `size` = 글자 크기(패널 폭 대비 %), `rot` = 각도.
- **`aspect`·`art_space`·`gap_after`(px)는 `04_visual/ep02_shotlist.md` v1에서 그대로 옮겼다**(art_space는 샷리스트의 영어 문장 원문 = prompt-smith가 쓰는 문장). `place`의 좌우·높이는 샷리스트 composition의 인물 위치(screen-left/right)와 art_space 안에 맞췄다.
- `text_ko`는 참고용, 화면에 나오지 않는다.

---

### panel_001
- aspect: 9:16
- art_space: Keep the top sixth of the frame (plain fluorescent ceiling glow above her head) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឯងនិយាយអីហ្នឹង?"
  - text_ko: "…무슨 소리야."
  - place: x 50% · y 8% · w 44% · tail ↓ (서윤(가운데))
  - read_order: 1

### panel_002
- aspect: 3:4
- art_space: Keep the top-left quarter of the frame, above Doha's head (plain fluorescent ceiling and the soft tops of the drink fridges), as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ហួសម៉ោង១០ហើយ។"
  - text_ko: "열 시 넘었어."
  - place: x 30% · y 10% · w 42% · tail ↓ (도하(왼쪽 가운데))
  - read_order: 1

### panel_003
- aspect: 3:4
- art_space: Keep the top third of the frame (plain fluorescent ceiling) as calm, empty background — Doha's bubble upper-left, Seoyun's upper-right; keep the raised three fingers below this area.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ប្រការ៣។"
  - text_ko: "3조."
  - place: x 24% · y 9% · w 30% · tail ↓ (도하(왼쪽), 세 손가락 위쪽은 피함)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អីគេ?"
  - text_ko: "…뭐?"
  - place: x 76% · y 20% · w 26% · tail ↘ (서윤(오른쪽))
  - read_order: 2

### panel_004
- aspect: 3:4
- art_space: Keep the top-left quarter of the frame (soft blurred cyan fridge glow beside her head) as calm, empty background.
- gap_after: 0
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "នោះ ខ្ញុំជាអ្នកសរសេរ…"
  - text_ko: "그건 내가 쓴…"
  - place: x 28% · y 10% · w 46% · tail ↘ (서윤 얼굴(오른쪽 위))
  - read_order: 1

### panel_005
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain fluorescent ceiling above the dark glass) as calm, empty background, left of centre above Doha.
- gap_after: 160
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "អឺ។ សរសេរល្អណាស់។"
  - text_ko: "응. 잘 썼어."
  - place: x 36% · y 9% · w 46% · tail ↓ (도하(가운데 왼쪽))
  - read_order: 1

### panel_006
- aspect: 4:3
- art_space: Keep the top third of the frame on the left half, above Doha (plain fluorescent ceiling), as calm, empty background for his bubble, and a small plain patch of ceiling at the top right, above the staff door, for the footstep sound effect.
- gap_after: 30
- sfx_1:
  - text_km: "ទុប… ទុប…"
  - text_ko: "쿵, 쿵 (위층 계단 발소리)"
  - place: x 82% · y 10% · size 6% · rot -6 (안쪽 문 위 천장)
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ស្អែក ជួបគ្នានៅសាលា។"
  - text_ko: "내일, 학교에서."
  - place: x 30% · y 13% · w 44% · tail ↓ (도하(왼쪽 가운데))
  - read_order: 1

### panel_007
- aspect: 3:4
- art_space: Keep the top third of the frame (plain fluorescent ceiling across the store) as calm, empty background — Seoyun's bubble upper-left, the off-frame owner's bubble upper-right above the staff door.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ហេ៎ ប៉ែក ដូហា!"
  - text_ko: "야, 백도하!"
  - place: x 32% · y 9% · w 38% · tail ↘ (서윤(오른쪽 가운데), 문 쪽으로 외침)
  - read_order: 1
- bubble_2:
  - speaker: 사장님(프레임 밖)
  - type: dialogue
  - text_km: "សឺយូន ដូរវេនមក។"
  - text_ko: "서윤아, 교대하자."
  - place: x 72% · y 22% · w 40% · tail ↘ (꼬리 = 오른쪽 가장자리 안쪽 문)
  - read_order: 2

### panel_008
- aspect: 9:16
- silent: true
- gap_after: 80

### panel_009
- aspect: 3:4
- art_space: Keep the top third of the frame (plain fluorescent ceiling and the plain upper wall behind the counter) as calm, empty background — Misuk's bubble upper-left, Seoyun's upper-right.
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ញ៉ាំសិនទៅ។ មុននេះ មានអ្នកណាមក?"
  - text_ko: "먹고 가. 아까 누구 왔었어?"
  - place: x 30% · y 10% · w 52% · tail ↓ (사장님(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…គ្រាន់តែភ្ញៀវប្រចាំទេ ចាស។"
  - text_ko: "…그냥 단골이요."
  - place: x 68% · y 24% · w 50% · tail ↘ (서윤(오른쪽))
  - read_order: 2

### panel_010
- aspect: 9:16
- art_space: Keep the top sixth of the frame (dark rooftops and plain navy night sky) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "គេថា បើរួចការ ឲ្យទាក់ទងទៅ…"
  - text_ko: "일 끝나면 연락하라며."
  - place: x 50% · y 8% · w 60%
  - read_order: 1

### panel_011
- aspect: 4:3
- art_space: Keep the top third of the frame on the right half (plain dark ceiling and upper wall to the right of the window beam) as calm, empty background.
- gap_after: 320
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "តាំងពីដំបូង… ចុះដំបូងនោះ ពេលណា?"
  - text_ko: "처음부터면… 그게 언젠데."
  - place: x 70% · y 15% · w 52%
  - read_order: 1

### panel_012
- aspect: 4:3
- art_space: Keep the top third of the frame on the left half (soft out-of-focus golden sky and ginkgo canopy, no hard detail) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ដល់មាត់ទ្វារសាលាហើយ។ ប្រការ២។"
  - text_ko: "교문이야. 2조."
  - place: x 32% · y 13% · w 50% · tail ↘ (도하(오른쪽, 교문 쪽))
  - read_order: 1

### panel_013
- aspect: 3:4
- art_space: Keep the top fifth of the frame on the left (soft plain grey stone of the gate pillar above her head) as calm, empty background.
- gap_after: 0
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឯងដឹងតាំងពីពេលណា?"
  - text_ko: "언제부터야?"
  - place: x 30% · y 9% · w 40% · tail ↓ (서윤(왼쪽 가운데))
  - read_order: 1

### panel_014
- aspect: 1:1
- silent: true
- gap_after: 0

### panel_015
- aspect: 3:4
- art_space: Keep the top fifth of the frame (soft out-of-focus yellow ginkgo canopy, no hard detail) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "នោះរឿងយប់មិញ ក្រោយម៉ោង១០ហ្នឹង។ ប្រការ៣។"
  - text_ko: "어젯밤 열 시 넘은 일이잖아. 3조."
  - place: x 56% · y 10% · w 62% · tail ↓ (도하(가운데 오른쪽))
  - read_order: 1

### panel_016
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain pale morning sky above the gate pillars) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "សិស្ស ហាន សឺយូន សិស្ស ប៉ែក ដូហា។ សូមឈប់បន្តិច។"
  - text_ko: "한서윤 학생, 백도하 학생. 잠깐 서 주세요."
  - place: x 50% · y 10% · w 66% · tail ↓ (하람(가운데))
  - read_order: 1

### panel_017
- aspect: 3:4
- art_space: Keep the top third of the frame (plain pale sky and the soft top of the stone pillar) as calm, empty background — Haram's bubble upper-left, Seoyun's upper-right.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ថ្ងៃដែលព័ត៌មានត្រូវបានប្រកាស ក៏ប្រកាសស្នេហាដែរ។ ចៃដន្យល្អណាស់។"
  - text_ko: "제보가 공개된 날, 공개 연애. 시기가 공교롭네요."
  - place: x 36% · y 11% · w 66% · tail ↙ (하람(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "មានសង្សារ មិនមែនជាការល្មើសវិន័យសាលាទេ។"
  - text_ko: "연애는 교칙 위반 아니야."
  - place: x 64% · y 26% · w 54% · tail ↘ (서윤(오른쪽))
  - read_order: 2

### panel_018
- aspect: 9:16
- art_space: Keep the top quarter of the frame (the plain grey asphalt of the wide road beyond the gate) as calm, empty background for two stacked bubbles, tails down to Haram.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "អញ្ចឹង ខ្ញុំគ្រាន់តែពិនិត្យប៉ុណ្ណោះ។ ដាច់ពីគ្នា។"
  - text_ko: "그러니까 확인만 하겠습니다. 따로요."
  - place: x 40% · y 6% · w 62% · tail ↓ (하람(위쪽 교문 기둥 옆))
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ឲ្យចប់មុនម៉ោងចូលរៀន។"
  - text_ko: "조회 전까지 끝내죠."
  - place: x 56% · y 16% · w 42% · tail ↓ (하람)
  - read_order: 2

### panel_019
- aspect: 3:4
- art_space: Keep the top third of the frame (plain pale sky and soft out-of-focus ginkgo, no hard detail) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "យប់មិញ មិត្តជួបគ្នាម៉ោងប៉ុន្មាន នៅឯណា?"
  - text_ko: "어젯밤 몇 시에, 어디서 만났습니까?"
  - place: x 44% · y 9% · w 56% · tail ↓ (하람(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ហើយលាគ្នាម៉ោងប៉ុន្មាន?"
  - text_ko: "헤어진 건요?"
  - place: x 58% · y 23% · w 40% · tail ↓ (하람)
  - read_order: 2

### panel_020
- aspect: 3:4
- art_space: Keep the upper third of the TOP frame (plain pale morning sky above her head) as calm, empty background for two thought bubbles.
- gap_after: 0
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "បើប្រឌិត ចម្លើយនឹងខុសគ្នា។"
  - text_ko: "지어내면 어긋나."
  - place: x 36% · y 6% · w 48%
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: thought
  - text_km: "និយាយម៉ោងពិតទៅ។"
  - text_ko: "진짜 시간을 말해."
  - place: x 62% · y 15% · w 38%
  - read_order: 2

### panel_021
- aspect: 3:4
- art_space: Keep the top third of the frame (plain pale sky and soft out-of-focus ginkgo canopy) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឡានក្រុងម៉ោង៩ ៤៤នាទី។ ចុះម៉ោង៩ ៥៧នាទី។"
  - text_ko: "9시 44분 버스. 57분에 내렸어."
  - place: x 40% · y 9% · w 56% · tail ↓ (서윤(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ជួបគ្នានៅចំណតដែលខ្ញុំចុះ ហើយលាគ្នាម៉ោង១។"
  - text_ko: "내린 정류장에서 만났고, 1시에 헤어졌어."
  - place: x 60% · y 23% · w 58% · tail ↓ (서윤)
  - read_order: 2

### panel_022
- aspect: 3:4
- art_space: Keep the top fifth of the frame (soft plain pale sky and blurred gate stone above her head) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "…មិត្តចាំច្បាស់ដល់នាទីទៀត។"
  - text_ko: "…분 단위까지 기억하시네요."
  - place: x 50% · y 9% · w 50% · tail ↓ (하람 눈(가운데))
  - read_order: 1

### panel_023
- aspect: 3:4
- art_space: Keep the top fifth of the frame (soft out-of-focus yellow ginkgo canopy, no hard detail) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "សំណួរដដែល។ យប់មិញ ម៉ោងប៉ុន្មាន នៅឯណា?"
  - text_ko: "같은 질문입니다. 어젯밤 몇 시, 어디서."
  - place: x 42% · y 9% · w 58% · tail ↙ (꼬리 = 왼쪽 가장자리 전경 하람 어깨)
  - read_order: 1

### panel_024
- aspect: 3:4
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy and pale sky, no hard detail) as calm, empty background — keep the distant Haram and Doha below it.
- gap_after: 80
- bubble_1:
  - speaker: 건우
  - type: dialogue
  - text_km: "…យកស្ករគ្រាប់មួយទេ?"
  - text_ko: "…사탕 드실래요?"
  - place: x 32% · y 9% · w 42% · tail ↙ (꼬리 = 왼쪽 아래 건우 손)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឥឡូវនេះ?"
  - text_ko: "…지금?"
  - place: x 76% · y 20% · w 26% · tail ↘ (꼬리 = 오른쪽 가장자리 서윤 옆얼굴)
  - read_order: 2

### panel_025
- aspect: 3:4
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy, no hard detail) as calm, empty background — Doha's bubble upper-right, Haram's off-frame bubble upper-left.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំនៅតំបន់នោះស្រាប់។"
  - text_ko: "전 원래 그 동네에 있어요."
  - place: x 64% · y 9% · w 46% · tail ↓ (도하(가운데 오른쪽))
  - read_order: 1
- bubble_2:
  - speaker: 하람(프레임 밖)
  - type: dialogue
  - text_km: "ម៉ោងប៉ុន្មាន?"
  - text_ko: "몇 시에요?"
  - place: x 24% · y 22% · w 30% · tail ↙ (꼬리 = 왼쪽 가장자리, 프레임 밖 하람)
  - read_order: 2

### panel_026
- aspect: 3:4
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy) as calm, empty background for two stacked bubbles on the right half.
- gap_after: 30
- bubble_1:
  - speaker: 도하(전경 어깨)
  - type: dialogue
  - text_km: "ហាន សឺយូន ជិះឡានក្រុងម៉ោង៩ ៤៤នាទី។"
  - text_ko: "한서윤은 9시 44분 버스 타요."
  - place: x 60% · y 9% · w 58% · tail ↘ (꼬리 = 오른쪽 가장자리 도하 어깨)
  - read_order: 1
- bubble_2:
  - speaker: 도하(전경 어깨)
  - type: dialogue
  - text_km: "ចុះម៉ោង៩ ៥៧នាទី។"
  - text_ko: "57분에 내리고요."
  - place: x 70% · y 22% · w 36% · tail ↘ (꼬리 = 오른쪽 가장자리 도하 어깨)
  - read_order: 2

### panel_027
- aspect: 4:3
- art_space: Keep the top third of the frame (soft out-of-focus ginkgo canopy, no hard detail) as calm, empty background — Haram's short bubble upper-left, Doha's longer bubble upper-right.
- gap_after: 0
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ហើយលាគ្នាម៉ោងប៉ុន្មាន?"
  - text_ko: "헤어진 건요?"
  - place: x 22% · y 10% · w 32% · tail ↓ (하람(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ក្រោយម៉ោង១។ មើលគេឡើងផ្លូវតូចទៅផ្ទះសិន។"
  - text_ko: "1시 넘어서요. 집 쪽 골목 올라가는 거 보고."
  - place: x 66% · y 20% · w 54% · tail ↘ (도하(오른쪽))
  - read_order: 2

### panel_028
- aspect: 1:1
- silent: true
- gap_after: 160

### panel_029
- aspect: 3:4
- art_space: Keep the top third of the frame (plain pale sky and the soft top of the stone pillar) as calm, empty background — Seoyun's bubble upper-left, Doha's upper-right.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឯងឆ្លើយថាម៉េច?"
  - text_ko: "…뭐라고 했어?"
  - place: x 30% · y 9% · w 38% · tail ↓ (서윤(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "តាមការពិត។"
  - text_ko: "사실대로."
  - place: x 70% · y 20% · w 30% · tail ↓ (도하(오른쪽))
  - read_order: 2

### panel_030
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain pale morning sky above the gate pillars) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ម៉ោង៩ ៤៤នាទី។ ៥៧នាទី។ ម៉ោង១។"
  - text_ko: "9시 44분. 57분. 1시."
  - place: x 50% · y 9% · w 52% · tail ↓ (하람(가운데))
  - read_order: 1

### panel_031
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain pale morning sky, soft and empty) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំសួរដាច់ពីគ្នាហើយ…"
  - text_ko: "따로 물었는데."
  - place: x 42% · y 6% · w 48% · tail ↓ (하람(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "តែអ្នកទាំងពីរ ឆ្លើយដូចគ្នាដល់នាទី។"
  - text_ko: "둘 다 분 단위로 똑같네요."
  - place: x 56% · y 16% · w 56% · tail ↓ (하람)
  - read_order: 2

### panel_032
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain pale sky above her head) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "…ខ្ញុំមិនដែលប្រាប់គេពីម៉ោងឡានក្រុងផង។"
  - text_ko: "…나, 버스 시간 말한 적 없는데."
  - place: x 50% · y 9% · w 60%
  - read_order: 1

### panel_033
- aspect: 3:4
- art_space: Keep the top third of the frame (soft out-of-focus yellow ginkgo canopy, no hard detail) as calm, empty background for two stacked bubbles.
- gap_after: 320
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ឆ្លងផុត។"
  - text_ko: "통과입니다."
  - place: x 40% · y 9% · w 30% · tail ↓ (하람 뒷모습(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 하람(돌아서며, 혼잣말)
  - type: dialogue
  - text_km: "…ត្រូវគ្នាល្អពេកហើយ។"
  - text_ko: "…너무 잘 맞네."
  - place: x 54% · y 21% · w 40% · tail ↓ (하람)
  - read_order: 2

### panel_034
- aspect: 4:3
- art_space: Keep the top 40% of the frame (the plain cream wall and the soft top of the windows and curtains, above everyone's heads) as calm, empty background — Yerin's long bubble upper-left, Taemin's shout upper-right.
- gap_after: 30
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "មើលគ្រុបថ្នាក់! «ហាន សឺយូន ប៉ែក ដូហា ត្រូវក្រុមវិន័យហៅសួរនៅមាត់ទ្វារតាំងពីព្រឹក»…"
  - text_ko: "단톡 봐. '1반 한서윤 백도하, 아침부터 교문에서 선도부 면담'…"
  - place: x 36% · y 13% · w 62% · tail ↙ (예린(왼쪽 전경))
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: shout
  - text_km: "មានសង្សារ ក៏ត្រូវគេឆែកដែរហ្អេស!"
  - text_ko: "연애도 검사받냐!"
  - place: x 77% · y 31% · w 36% · tail ↘ (태민(오른쪽))
  - read_order: 2

### panel_035
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain cream wall above Doha's head) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឆ្លងផុតហើយ។"
  - text_ko: "통과했어."
  - place: x 50% · y 8% · w 36% · tail ↓ (도하(위 가운데))
  - read_order: 1

### panel_036
- aspect: 4:3
- art_space: Keep the top third of the frame (plain cream wall above the chalkboard on the right, the soft upper curtain on the left) as calm, empty background — the teacher's bubble upper-right, Doha's upper-left.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ប៉ែក ដូហា ចម្លើយនៅក្រៅបង្អួចឬ?"
  - text_ko: "백도하, 창밖에 답 있냐."
  - place: x 72% · y 12% · w 46% · tail ↘ (꼬리 = 오른쪽 담임)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "…អត់ទេ បាទ។"
  - text_ko: "…없어요."
  - place: x 26% · y 24% · w 30% · tail ↓ (도하(왼쪽 창가))
  - read_order: 2

### panel_037
- aspect: 3:4
- art_space: Keep the top fifth of the frame (soft cream curtain and plain upper window glow) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "…ខាងនោះ ជាផ្លូវឡានក្រុងខ្ញុំទៅ។"
  - text_ko: "…저쪽, 내 버스 가는 길인데."
  - place: x 52% · y 9% · w 58%
  - read_order: 1

### panel_038
- aspect: 9:16
- art_space: Keep the top quarter of the frame (the plain grey steel door and hazy apricot window glow above Seoyun's head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឥឡូវថ្ងៃត្រង់។ មិនមែនប្រការ៣ទេ។"
  - text_ko: "지금은 낮이야. 3조 아니지."
  - place: x 42% · y 6% · w 52% · tail ↓ (서윤(위 가운데))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឯងដឹងតាំងពីពេលណា។"
  - text_ko: "언제부터야."
  - place: x 58% · y 16% · w 40% · tail ↓ (서윤)
  - read_order: 2

### panel_039
- aspect: 4:3
- art_space: Keep the top third of the frame (plain upper stairwell wall in soft violet shadow) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ប្រការ៦។"
  - text_ko: "6조."
  - place: x 24% · y 12% · w 24% · tail ↓ (도하(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អីគេ?"
  - text_ko: "…뭐?"
  - place: x 74% · y 22% · w 22% · tail ↓ (서윤(오른쪽))
  - read_order: 2

### panel_040
- aspect: 3:4
- art_space: Keep the top third of the frame (plain stairwell wall in soft apricot haze) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "បើប្រាប់រឿងហ្នឹង គឺស្រលាញ់ពិតហើយ។"
  - text_ko: "그거 말하면 진심이야."
  - place: x 40% · y 8% · w 54% · tail ↓ (도하(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "អ្នកណាស្រលាញ់ពិតមុន ត្រូវប្រាប់អាថ៌កំបាំងមួយ។ ឯងជាអ្នកសរសេរខ្លួនឯង។"
  - text_ko: "먼저 진심 되는 쪽이 비밀 말하기. 네가 썼잖아."
  - place: x 56% · y 22% · w 70% · tail ↓ (도하)
  - read_order: 2

### panel_041
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain grey steel door and hazy window glow) as calm, empty background for Seoyun's bubble, and the plain shadowed wall on the left middle beside Doha's head for his bubble.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អ្នកណាថាស្រលាញ់ពិត!"
  - text_ko: "…누가 진심이래!"
  - place: x 62% · y 9% · w 44% · tail ↓ (서윤(위 가운데))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "អញ្ចឹងហើយ។ ឥឡូវ មិនប្រាប់ទេ។"
  - text_ko: "그러니까. 지금은 안 말해."
  - place: x 26% · y 50% · w 42% · tail ↙ (꼬리 = 왼쪽 아래 내려가는 도하 등)
  - read_order: 2

### panel_042
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream corridor wall above the queue) as calm, empty background — Taemin's bubble upper-left, Doha's upper-right.
- gap_after: 30
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "ឯងផ្ទេរមកទីនេះធ្វើអី? សាលាចាស់ឯងល្អជាងតើ។"
  - text_ko: "너 전학 왜 왔냐? 전에 다니던 학교가 더 좋잖아."
  - place: x 34% · y 9% · w 58% · tail ↙ (태민(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ព្រោះនៅទីនេះ មានអ្វីដែលខ្ញុំចង់មើល។"
  - text_ko: "여기 볼 게 있어서."
  - place: x 66% · y 24% · w 52% · tail ↘ (도하(오른쪽))
  - read_order: 2

### panel_043
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream corridor wall above everyone's heads) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "ចុះឯងនៅឯណា?"
  - text_ko: "어디 사는데?"
  - place: x 26% · y 9% · w 32% · tail ↙ (태민(왼쪽 전경))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ជិតៗ។"
  - text_ko: "근처."
  - place: x 76% · y 19% · w 20% · tail ↘ (도하(오른쪽 전경))
  - read_order: 2

### panel_044
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall above the shelves) as calm, empty background for two stacked bubbles on the left.
- gap_after: 30
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "ថ្ងៃធម្មតា ខ្ញុំចេញពីតំបន់រៀនគួរម៉ោង១០យប់ណា។"
  - text_ko: "나 평일엔 학원가에서 열 시에 끝나잖아."
  - place: x 36% · y 9% · w 60% · tail ↓ (예린(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 예린
  - type: dialogue
  - text_km: "ឡានក្រុងម៉ោងហ្នឹង ណែនដូចនរក!"
  - text_ko: "그 시간 버스 진짜 지옥이야."
  - place: x 34% · y 23% · w 48% · tail ↓ (예린)
  - read_order: 2

### panel_045
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain cream wall) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "…មិនអីទេ។ ឡានក្រុងខ្ញុំ ឆ្លងកាត់មុនម៉ោងហ្នឹង។"
  - text_ko: "…괜찮아. 내 버스는 그 전에 지나가."
  - place: x 56% · y 10% · w 64%
  - read_order: 1

### panel_046
- aspect: 4:3
- art_space: Keep the upper part of the frosted glass door, above the silhouettes' heads, plus the plain wall above the door (the left half of the frame, top 45%) as calm, empty background for two stacked bubbles.
- gap_after: 320
- bubble_1:
  - speaker: 하람(문 너머)
  - type: dialogue
  - text_km: "គ្មានគូស្នេហ៍ណាឆ្លើយដូចគ្នាដល់នាទីទេ។ គេទន្ទេញទុក។"
  - text_ko: "분 단위로 똑같이 말하는 연인은 없어. 외운 거야."
  - place: x 30% · y 13% · w 54% · tail ↓ (꼬리 = 유리문 실루엣)
  - read_order: 1
- bubble_2:
  - speaker: 하람(문 너머)
  - type: dialogue
  - text_km: "…លើកនេះ ធ្វើតាមនីតិវិធី។"
  - text_ko: "…이번엔 절차대로 간다."
  - place: x 28% · y 34% · w 40% · tail ↓ (꼬리 = 유리문 실루엣)
  - read_order: 2

### panel_047
- aspect: 1:1
- art_space: Keep the top-left quarter of the frame (plain cream wall under flat fluorescent light) as calm, empty background for the bell sound effect.
- gap_after: 80
- sfx_1:
  - text_km: "ក្រិង… ក្រិង…"
  - text_ko: "야자 끝 종"
  - place: x 24% · y 14% · size 8% · rot -6 (왼쪽 위 크림 벽)

### panel_048
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper corridor wall and ceiling light) as calm, empty background for two stacked bubbles on the left.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឆ្លើយឥឡូវ។"
  - text_ko: "지금 대답해."
  - place: x 30% · y 8% · w 30% · tail ↓ (서윤(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "មិនទាន់ម៉ោង១០ផង។"
  - text_ko: "아직 10시 전이야."
  - place: x 36% · y 20% · w 40% · tail ↓ (서윤)
  - read_order: 2

### panel_049
- aspect: 3:4
- art_space: Keep the top-left quarter of the frame (plain cream corridor wall above his head) as calm, empty background.
- gap_after: 0
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឡានក្រុង… នៅបីនាទីទៀត។"
  - text_ko: "버스, 3분 남았어."
  - place: x 30% · y 10% · w 44% · tail ↓ (도하(왼쪽 가운데))
  - read_order: 1

### panel_050
- aspect: 1:1
- silent: true
- gap_after: 160

### panel_051
- aspect: 9:16
- art_space: Keep a calm dark patch of low stone wall and empty road in the lower-right quarter (beside, not over, the running Seoyun) and the dark reflective window glass at the top right as calm, empty background — Taemin's bubble top-right, Doha's in the lower-right patch or below his head.
- gap_after: 30
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "ហាន សឺយូន ម៉េចក៏រត់អញ្ចឹងរាល់ថ្ងៃ?"
  - text_ko: "한서윤 맨날 왜 저렇게 뛰어?"
  - place: x 70% · y 5% · w 50% · tail ↓ (태민(오른쪽 위 창가))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឡានក្រុងម៉ោង៩ ៤៤នាទី។"
  - text_ko: "44분 버스."
  - place: x 70% · y 72% · w 40% · tail ↖ (꼬리 = 위쪽 창가 도하(왼쪽 위))
  - read_order: 2

### panel_052
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain corridor ceiling and upper wall) as calm, empty background, upper-left above Taemin.
- gap_after: 160
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "…ចុះឯង ម៉េចក៏ដឹង?"
  - text_ko: "…근데 넌 그걸 왜 아는데?"
  - place: x 34% · y 9% · w 44% · tail ↓ (태민(왼쪽 가운데))
  - read_order: 1

### panel_053
- aspect: 4:3
- art_space: Keep the top third of the frame on the left half (plain dark bus ceiling panel above her head) as calm, empty background.
- gap_after: 320
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "…ម៉េចក៏ខ្ញុំមានអារម្មណ៍ដូចរត់គេចអញ្ចឹង?"
  - text_ko: "…왜 내가 도망친 기분이지."
  - place: x 30% · y 14% · w 54%
  - read_order: 1

### panel_054
- aspect: 4:3
- art_space: Keep the top third of the frame on the right half (plain fluorescent wall above the discount basket) as calm, empty background for her thought bubble, plus a small plain patch of counter left of centre for the beep sound effect.
- gap_after: 160
- sfx_1:
  - text_km: "ពីប!"
  - text_ko: "삑—"
  - place: x 38% · y 62% · size 6% · rot -6 (계산대 가운데 왼쪽 빈자리)
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "…មិនបាច់ទុកក៏បាន…"
  - text_ko: "…안 남겨도 되는데."
  - place: x 70% · y 14% · w 46%
  - read_order: 1

### panel_055
- aspect: 4:3
- art_space: Keep the top-left and top-right corners of the frame (plain fluorescent background above the counter) as small calm, empty patches for the two sound effects.
- gap_after: 80
- sfx_1:
  - text_km: "ឌីងដុង"
  - text_ko: "딩동"
  - place: x 14% · y 12% · size 7% · rot -8 (왼쪽 위 = 문 차임)
- sfx_2:
  - text_km: "ពីប!"
  - text_ko: "삑"
  - place: x 86% · y 12% · size 6% · rot 6 (오른쪽 위 = 스캐너)

### panel_056
- aspect: 4:3
- silent: true
- gap_after: 320

### panel_057
- aspect: 3:4
- art_space: Keep the top-left fifth of the frame (plain fluorescent ceiling and soft blurred fridge glow) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប៉ែក ដូហា។"
  - text_ko: "백도하."
  - place: x 28% · y 9% · w 32% · tail ↘ (서윤 얼굴(가운데 위), 시선은 왼쪽 창가)
  - read_order: 1

### panel_058
- aspect: 3:4
- art_space: Keep the top third of the frame on the right (dark plain night glass above her head, no reflections of lights there) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ល្មើសប្រការ៣។ ខ្ញុំដឹង។"
  - text_ko: "3조 위반이야. 알아."
  - place: x 64% · y 8% · w 46% · tail ↘ (서윤(오른쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឆ្លើយមក។ ឯងដឹងតាំងពីពេលណា?"
  - text_ko: "대답해. 언제부터야."
  - place: x 62% · y 21% · w 50% · tail ↘ (서윤)
  - read_order: 2

### panel_059
- aspect: 3:4
- art_space: Keep the top-left fifth of the frame (plain dark night glass) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "តាំងពីមុនខ្ញុំផ្ទេរសាលា។"
  - text_ko: "전학 오기 전부터."
  - place: x 30% · y 9% · w 44% · tail ↘ (도하(가운데))
  - read_order: 1

### panel_060
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dark night glass above her head) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ផ្ទេរសាលា?"
  - text_ko: "…전학?"
  - place: x 40% · y 8% · w 30% · tail ↓ (서윤(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អញ្ចឹង ផ្ទេរសាលាហេតុអី?"
  - text_ko: "그럼 전학은 왜."
  - place: x 56% · y 20% · w 44% · tail ↓ (서윤)
  - read_order: 2

### panel_061
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain fluorescent ceiling glow above his head) as calm, empty background for one bubble, and the bottom sixth (plain dark hoodie shadow) as calm, empty background for the ending caption.
- gap_after: 0
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "…ខ្ញុំផ្ទេរសាលា ដើម្បីមកទីនេះ។"
  - text_ko: "…여기 오려고 전학 온 거야."
  - place: x 50% · y 9% · w 56% · tail ↓ (도하(가운데))
  - read_order: 1
- bubble_2:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៣ —"
  - text_ko: "— 3화에 계속 —"
  - place: x 50% · y 92% · w 60%
  - read_order: 2
---

## 레터러 노트 (회차 전체)

- 말풍선 84개 = 대본 대사·생각 줄 83개(1:1, 나누거나 합치지 않음) + 엔딩 캡션 1개(P61) · 크메르어 효과음 5개(P06·P47·P54·P55×2) · 소품 글씨(env) 0개(대본에 「…」 줄 없음).
- 무대사(`silent: true`) 5패널: P08, P14, P28, P50, P56. P47·P55는 효과음만 있어 silent가 아니다(샷리스트의 "무대사 7"은 이 둘을 포함한 수).
- 패널당 말풍선은 모두 1~2개. 3개인 패널은 없다(P61 = 도하 1 + 엔딩 캡션 1).
- 종류: thought = P10, P11, P20(2), P32, P37, P45, P53, P54(KM `(គិត)` 줄과 1:1). shout = P34 태민뿐(샷리스트 인계). P07 "야, 백도하!"·P41 "…누가 진심이래!"는 문 너머/당황한 외침이지만 샷리스트·style-bible §10-1에 맞춰 dialogue로 두었다. narration = P61 엔딩 캡션(아래 1/6).
- 프레임 밖·가장자리 꼬리(샷리스트 §7 인계 그대로): P07 사장님 → 오른쪽 안쪽 문, P23 하람 → 왼쪽 가장자리, P24 건우 → 왼쪽 아래 손 / 서윤 → 오른쪽 가장자리, P25 하람 → 왼쪽 가장자리, P26 도하 → 오른쪽 전경 어깨(2개), P41 도하 → 왼쪽 아래 등, P46 하람 2개 → 유리문 실루엣, P51 도하 → 위쪽 창가(↖).
- P57: 샷리스트 인계는 "서윤 → 왼쪽"이지만 서윤은 프레임 안(위 절반 가운데)에 있으므로 풍선은 왼쪽 위 art_space, 꼬리는 서윤 얼굴 쪽(↘). "왼쪽"은 그녀의 시선 방향(창가 도하)이다.
- 폭: KM 길이에 맞춰 w 20~70%(긴 줄 P17 하람 62자 w66, P34 예린 81자 w62, P40 둘째 줄 67자 w70). 모두 85% 이하. P34 예린 줄은 2줄을 넘을 수 있다 — 배치 확인 단계에서 3줄이 되면 w를 70%까지 넓히되 태민 외침과 겹치지 않게 태민 풍선을 y 34%까지 내린다(문구는 바꾸지 않음. 풍선 3개 금지라 나누지 않는다).
- `gap_after`(샷리스트 §4 그대로): 0 이어 붙임 · 30 촘촘 · 80 보통 · 160 비트 끊기 · 320 시간 점프·정지(P11·P33·P46·P53·P56).
- 반복 묶음은 같은 자리 감각으로: P13·P38·P58 "언제부터야"(화자 위), P30 하람 낭독은 P16과 같은 위쪽 1/5 가운데, P61은 ep01 P60과 같은 위 1/4 + 아래 캡션 y 92%.
- 남은 확인(배치 확인 단계, episode-compositor): P51 도하 풍선이 오른쪽 아래 빈자리(돌담·빈 길)에 있어 꼬리가 길다 — 이미지에서 도하 머리 아래가 비면 그쪽(x 30% · y 30% 부근)으로 옮긴다. P41 도하 풍선(왼쪽 가운데 벽)과 P54 효과음(계산대 빈자리)은 이미지의 실제 빈자리에 맞춰 x/y만 조정.
