# EP04 레터링 명세 — 『유통기한 연애』 4화 「불시 검사」 (letterer · Khmer edition)

- 작성: letterer · 2026-11-22 · 스킬 `webtoon-khmer-edition` §3 + `webtoon-assembly`(레터링 섹션 중 종류·읽기 순서·과밀 규칙만)
- 입력: `03_episode/ep04_script_final.md`(native-khmer 리뷰 READY본, KM 줄 원문 그대로 — 손으로 다시 치지 않고 스크립트로 복사), `ep04_beatsheet.md`(패널 번호 고정 P01~P60), `04_visual/ep04_shotlist.md` v1.1, `04_visual/style-bible.md` v1.3 §10, 형식 기준 `04_visual/ep03_lettering.md`
- **이미지에는 글자 없음.** 말풍선·효과음·캡션은 뷰어(`km_tool.py build`)가 그린다. 각 패널의 `art_space`는 prompt-smith가 "calm, empty background"로 프롬프트에 넣는다(style-bible §10-3).
- `place`: x/y = 풍선 중심, w = 최대 폭(패널 폭 대비 %). 꼬리 ↙↓↘ = 아래쪽 꼬리(화자 왼쪽/가운데/오른쪽), ↖↑↗ = 위쪽 꼬리. thought·narration은 꼬리 없음. sfx의 `size` = 글자 크기(패널 폭 대비 %), `rot` = 각도.
- **`aspect`·`art_space`·`gap_after`(px)는 `04_visual/ep04_shotlist.md` v1.1에서 그대로 옮겼다**(art_space는 샷리스트의 영어 문장 원문 = prompt-smith가 쓰는 문장). `place`의 좌우·높이는 샷리스트 composition의 인물 위치(screen-left/right)와 art_space 안에 맞췄다.
- `text_ko`는 참고용, 화면에 나오지 않는다.

---

### panel_001
- aspect: 9:16
- art_space: Keep the top sixth of the frame (the dark upper door edges and plain cream wall above the gap) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ក្នុងកំណត់ត្រាប្រឹក្សា រឿងនេះចប់ត្រឹមរឿងសង្សារហើយ ឆែ ហារ៉ាម។"
  - text_ko: "상담 기록엔 연애 문제로 끝난 일이다, 채하람."
  - place: x 50% · y 9% · w 80% · tail ↓ (담임(가운데 띠) 머리 위, 위 1/6 문 위 크림 벽 — 2줄)
  - read_order: 1

### panel_002
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall and the upper blinds above her head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំមិនមែនសុំឆែកតែម្នាក់ទេ ចាស។"
  - text_ko: "한 명만 보자는 게 아닙니다."
  - place: x 40% · y 7% · w 52% · tail ↓ (하람(가운데) 머리 위, 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ឆ្នាំទី២ទាំងមូល ដោយមានលោកគ្រូនៅជាមួយ។ តាមវិន័យសាលា។"
  - text_ko: "2학년 전체, 선생님 입회로. 규정대로입니다."
  - place: x 56% · y 21% · w 66% · tail ↓ (하람 — 2줄)
  - read_order: 2

### panel_003
- aspect: 3:4
- art_space: Keep the upper half of the top frame (plain soft cream corridor wall above her eye) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "…ទាំងមូល។"
  - text_ko: "…전체."
  - place: x 34% · y 13% · w 30% (위 칸(약 60%)의 윗부분 크림 벽, 눈은 오른쪽 문틈 쪽)
  - read_order: 1

### panel_004
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall and the upper window blinds above the teacher's head) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "គ្រូនឹងសុំការអនុម័តពីប្រធានកិច្ចការសិស្ស។ ថ្ងៃច័ន្ទ ម៉ោងទី១ ដោយមិនប្រាប់មុន។"
  - text_ko: "학생부장님 결재 받는다. 월요일 1교시, 불시로."
  - place: x 46% · y 9% · w 64% · tail ↓ (담임(가운데) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "ថ្នាក់យើង គ្រូនៅមើលផ្ទាល់។"
  - text_ko: "우리 반은 내가 입회한다."
  - place: x 40% · y 24% · w 46% · tail ↓ (담임 — 1줄, 인사하는 하람(오른쪽)은 비움)
  - read_order: 2

### panel_005
- aspect: 4:3
- art_space: Keep the top-left third of the frame (plain dim stairwell wall above Doha's head) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ម៉េចមិនកុហកបន្តិចទៅ?"
  - text_ko: "거짓말 좀 하지 그랬어."
  - place: x 26% · y 12% · w 40% · tail ↘ (서윤(오른쪽, 한 칸 위)을 향해, 도하 머리 위 왼쪽 벽)
  - read_order: 1

### panel_006
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above Doha's head) as calm, empty background for two bubbles, Doha's on the left, Seoyun's on the right.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំប្រាប់ហើយថា ខ្ញុំមិនកុហក។"
  - text_ko: "안 한다고 했잖아."
  - place: x 27% · y 9% · w 46% · tail ↓ (도하(가운데 왼쪽, 벽에 기댐) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ដឹងហើយ។ អញ្ចឹងបានជាកាន់តែខឹង។"
  - text_ko: "…알아. 그래서 더 화나."
  - place: x 73% · y 21% · w 44% · tail ↘ (서윤(오른쪽 전경 옆얼굴) — 2줄)
  - read_order: 2

### panel_007
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "លើកនេះ វិន័យសាលានៅខាង ឆែ ហារ៉ាម។"
  - text_ko: "이번엔 규정이 채하람 편이야."
  - place: x 44% · y 7% · w 62% · tail ↓ (서윤(가운데) 머리 위, 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ទីមួយ មានគ្រូបន្ទុកថ្នាក់នៅជាមួយ។ ទីពីរ ខ្ញុំត្រូវបើកកាបូបខ្លួនឯង។"
  - text_ko: "첫째, 담임 입회. 둘째, 내가 직접 열어야 돼."
  - place: x 54% · y 21% · w 62% · tail ↓ (서윤 — 2줄)
  - read_order: 2

### panel_008
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two bubbles, the short one on the left.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ទីបី។"
  - text_ko: "셋째."
  - place: x 18% · y 9% · w 18% · tail ↙ (도하 손(왼쪽 가장자리))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អាវកាក់។ ចុងសប្ដាហ៍ខ្ញុំបោកវា ដល់ថ្ងៃច័ន្ទត្រូវដាក់ក្នុងកាបូបយកមក។"
  - text_ko: "조끼. 주말에 빨아서, 월요일엔 가방에 넣고 와야 돼."
  - place: x 60% · y 20% · w 64% · tail ↓ (서윤(가운데) 머리 위 — 2줄)
  - read_order: 2

### panel_009
- aspect: 4:3
- art_space: Keep the upper-left half of the frame as a vertical strip (plain dim stairwell wall above and behind Doha) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ទុកឲ្យខ្ញុំ។"
  - text_ko: "나한테 맡겨."
  - place: x 18% · y 10% · w 24% · tail ↓ (도하(왼쪽) 머리 위 왼쪽 띠)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អត់ទេ។ កុំសម្រេចតាមចិត្តឯង។"
  - text_ko: "싫어. 네 맘대로 하지 마."
  - place: x 26% · y 30% · w 48% · tail ↘ (서윤(오른쪽)을 향해 — 1줄)
  - read_order: 2

### panel_010
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above both heads) as calm, empty background for two bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ដាក់ក្នុងកាបូបខ្ញុំទៅ។"
  - text_ko: "내 가방에 넣어."
  - place: x 30% · y 8% · w 36% · tail ↓ (도하(가운데 왼쪽) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឯងក៏ឆ្នាំទី២ដែរ។ បើគេឃើញអាវកាក់ស្រីក្នុងកាបូបក្មេងប្រុស រឿងកាន់តែធំ។"
  - text_ko: "너도 2학년이야. 남자애 가방에서 여자 조끼 나오면 그게 더 난리야."
  - place: x 56% · y 22% · w 78% · tail ↘ (서윤(오른쪽 가장자리 반쪽) — 2줄)
  - read_order: 2

### panel_011
- aspect: 3:4
- art_space: Keep the top-left fifth of the frame (plain dim stairwell wall above Doha's head) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "…អាហ្នឹង មិនសូវល្អមែន។"
  - text_ko: "…그건 좀 그렇네."
  - place: x 28% · y 9% · w 40% · tail ↓ (도하(왼쪽 위 후경) 머리 위, 위 1/5 왼쪽)
  - read_order: 1

### panel_012
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall, left of Doha) as calm, empty background for two bubbles.
- gap_after: 320
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំចាត់ចែងខ្លួនឯង។"
  - text_ko: "내가 알아서 해."
  - place: x 24% · y 8% · w 34% · tail ↘ (서윤(가운데, 계단 쪽으로 돌아섬))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "យល់ហើយ។"
  - text_ko: "알았어."
  - place: x 50% · y 20% · w 26% · tail ↘ (도하(오른쪽 위 후경))
  - read_order: 2

### panel_013
- aspect: 4:3
- art_space: Keep the upper-left half of the frame as a vertical strip (the pale wall and bright high window light) as calm, empty background for two stacked thought bubbles, away from the window feet.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "នៅមួយសប្ដាហ៍ទៀត ដល់សប្ដាហ៍ប្រឹក្សាអាជីព។"
  - text_ko: "진로 상담 주간까지 일주일."
  - place: x 26% · y 14% · w 46% (생각 1, 왼쪽 띠 위 — 2줄, 창 아래 발 그림자는 피함)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ការឆែក គឺថ្ងៃនេះ។"
  - text_ko: "검사는 오늘."
  - place: x 22% · y 37% · w 34% (생각 2, 왼쪽 띠)
  - read_order: 2

### panel_014
- aspect: 1:1
- art_space: Keep the top two-fifths of the frame (plain floor-mat surface above the bag) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(혼잣말)
  - type: dialogue
  - text_km: "ការឆែករបស់របរ។"
  - text_ko: "소지품 검사."
  - place: x 32% · y 9% · w 34% · tail ↓ (가방(아래 3/5) 위 바닥 매트, 혼잣말 = dialogue)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(혼잣말)
  - type: dialogue
  - text_km: "ឆែក… របស់… របរ។"
  - text_ko: "소, 지, 품."
  - place: x 62% · y 25% · w 34% · tail ↓ (혼잣말, 끊어 읽기)
  - read_order: 2

### panel_015
- aspect: 4:3
- art_space: Keep the upper-right half of the frame as a vertical strip (plain pale morning sky and the translucent shelter roof above Doha) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "កាបូប។"
  - text_ko: "가방."
  - place: x 80% · y 10% · w 22% · tail ↓ (도하(오른쪽 지붕 밑) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំប្រាប់ហើយថា ខ្ញុំចាត់ចែងខ្លួនឯង។"
  - text_ko: "알아서 한다고 했지."
  - place: x 74% · y 31% · w 46% · tail ↙ (서윤(왼쪽 전경, 하차)을 향해 — 2줄)
  - read_order: 2

### panel_016
- aspect: 9:16
- silent: true
- gap_after: 30

### panel_017
- aspect: 3:4
- art_space: Keep the top third of the frame (plain pale sky and the translucent roof edge) as calm, empty background for two bubbles, Seoyun's on the right.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "មើលអី?"
  - text_ko: "뭘 봐?"
  - place: x 78% · y 8% · w 22% · tail ↘ (서윤(오른쪽 가장자리 반쪽), 먼저 읽힘)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "មនុស្សម្នាក់។"
  - text_ko: "사람."
  - place: x 36% · y 18% · w 28% · tail ↓ (도하(가운데 왼쪽) 머리 위)
  - read_order: 2

### panel_018
- aspect: 9:16
- silent: true
- gap_after: 160

### panel_019
- aspect: 4:3
- silent: true
- gap_after: 30

### panel_020
- aspect: 4:3
- art_space: Keep the upper-left three-fifths of the frame as a vertical strip (plain cream upper wall and soft window light above Yerin) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "ហ៎? ឯងយកទាំងកាបូបចូលបន្ទប់ទឹកទៀត?"
  - text_ko: "어? 화장실에 가방까지 들고 갔어?"
  - place: x 30% · y 14% · w 54% · tail ↙ (예린(왼쪽, 들어옴) — 2줄, 왼쪽 3/5 띠 안)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អឺ។"
  - text_ko: "…응."
  - place: x 44% · y 36% · w 16% · tail ↘ (서윤(문 쪽, 오른쪽))
  - read_order: 2

### panel_021
- aspect: 4:3
- art_space: Keep the upper-right half of the frame as a vertical strip (the plain cream front wall and the top of the empty chalkboard) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "ថ្ងៃនេះ ម៉េចឯងមិនដោះអាវធំ? មិនក្ដៅទេ?"
  - text_ko: "너 오늘 왜 블레이저 안 벗어? 안 더워?"
  - place: x 74% · y 14% · w 46% · tail ↓ (예린(오른쪽 아래, 서윤 옆) — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អត់អីទេ។"
  - text_ko: "…그냥."
  - place: x 80% · y 36% · w 24% · tail ↓ (서윤(오른쪽 아래))
  - read_order: 2

### panel_022
- aspect: 4:3
- art_space: Keep the upper-left half of the frame as a vertical strip (plain cream front wall and the top of the empty chalkboard, with the speaker) as calm, empty background for the bell sound effect and two stacked bubbles.
- gap_after: 30
- sfx_1:
  - type: sfx
  - text_km: "ក្រិង… ក្រិង…"
  - text_ko: "1교시 종"
  - place: x 22% · y 7% · size 6% · rot -6 (왼쪽 위 칠판 위 벽 스피커 쪽)
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "កាបូប ដាក់លើតុ។"
  - text_ko: "가방, 책상 위에."
  - place: x 26% · y 25% · w 32% · tail ↘ (담임(오른쪽 앞문)을 향해)
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "ឆែករបស់របរ ឆ្នាំទី២ទាំងមូល។"
  - text_ko: "2학년 전체 소지품 검사다."
  - place: x 27% · y 43% · w 46% · tail ↘ (담임 — 1줄)
  - read_order: 2

### panel_023
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall above the chalkboard) as calm, empty background for two bubbles, the teacher's on the left and Haram's on the right.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "មូលហេតុ គឺពិនិត្យព័ត៌មានដែលគេដាក់មក។ ម្ចាស់កាបូបបើកខ្លួនឯង គ្រូគ្រាន់តែមើល។"
  - text_ko: "사유는 제보 확인. 본인이 직접 열고, 나는 보기만 한다."
  - place: x 46% · y 9% · w 76% · tail ↙ (담임(왼쪽 교탁) — 2줄, 위 1/3 가로로 넓게)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ក្រុមវិន័យ គ្រាន់តែគូសធីកប៉ុណ្ណោះ។ សូមសហការផង។"
  - text_ko: "선도부는 체크만 합니다. 협조 부탁드립니다."
  - place: x 68% · y 25% · w 56% · tail ↘ (하람(오른쪽) — 2줄)
  - read_order: 2

### panel_024
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall and curtain top above Taemin) as calm, empty background for two bubbles, the teacher's on the right.
- gap_after: 80
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "លោកគ្រូ! កាបូបខ្ញុំ មានតែនំទេ បាទ!"
  - text_ko: "쌤, 제 가방엔 과자밖에 없어요!"
  - place: x 40% · y 8% · w 54% · tail ↓ (태민(가운데) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "អញ្ចឹង ឆាប់ចប់ហើយ។"
  - text_ko: "그럼 금방 끝나겠네."
  - place: x 72% · y 21% · w 38% · tail ↘ (담임(프레임 밖 오른쪽) — 꼬리 = 오른쪽 가장자리)
  - read_order: 2

### panel_025
- aspect: 4:3
- art_space: Keep the upper-right half of the frame as a vertical strip (plain cream back wall and the tops of the grey lockers, above Seoyun) as calm, empty background for two stacked thought bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "តាមលេខរៀង។"
  - text_ko: "출석 번호 순."
  - place: x 70% · y 12% · w 32% (생각 1, 오른쪽 띠(뒷벽·사물함 위))
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ខ្ញុំលេខ១៤។"
  - text_ko: "나는 14번."
  - place: x 78% · y 30% · w 28% (생각 2, 원경 서윤(오른쪽 아래) 위)
  - read_order: 2

### panel_026
- aspect: 3:4
- art_space: Keep the top-right fifth of the frame (plain cream wall beside Haram's eyes) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ឆ្លងផុត។"
  - text_ko: "통과."
  - place: x 78% · y 9% · w 24% · tail ↘ (담임(프레임 밖 오른쪽) — 꼬리 = 오른쪽 가장자리, 하람 눈(위 띠) 오른쪽)
  - read_order: 1

### panel_027
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain cream wall and curtain top above Doha) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "បន្ទាប់។"
  - text_ko: "다음."
  - place: x 58% · y 9% · w 24% · tail ↓ (도하(가운데) 머리 위)
  - read_order: 1

### panel_028
- aspect: 3:4
- silent: true
- gap_after: 30

### panel_029
- aspect: 3:4
- art_space: Keep the top third of the frame (the plain cream ceiling above their heads) as calm, empty background for two bubbles, the teacher's on the left and Haram's on the right.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ហាន សឺយូន។"
  - text_ko: "한서윤."
  - place: x 28% · y 9% · w 30% · tail ↓ (담임(왼쪽) 머리 위 천장)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "លេខ១៤ ហាន សឺយូន។"
  - text_ko: "14번, 한서윤."
  - place: x 70% · y 21% · w 42% · tail ↓ (하람(오른쪽) 머리 위 — 1줄)
  - read_order: 2

### panel_030
- aspect: 1:1
- art_space: Keep the top quarter of the frame (plain soft cream wall, out of focus) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ខ្ញុំបើកហើយ ចាស។"
  - text_ko: "…열게요."
  - place: x 50% · y 10% · w 38% · tail ↓ (서윤 손(가운데 아래)을 향해, 위 1/4 흐린 벽)
  - read_order: 1

### panel_031
- aspect: 3:4
- art_space: Keep the top-left half of the frame (plain cream ceiling and wall beside Haram's face; Haram's face stays on the right) as calm, empty background for one bubble, and a small patch near the open zip edge for the zip sound effect.
- gap_after: 30
- sfx_1:
  - type: sfx
  - text_km: "ស្រឺត…"
  - text_ko: "지이익"
  - place: x 18% · y 46% · size 7% · rot -10 (왼쪽 가방 입구(열린 지퍼 가장자리) 옆 — 배치 확인)
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "សូមបង្ហាញឲ្យឃើញដល់បាតកាបូប។"
  - text_ko: "바닥까지 보여 주세요."
  - place: x 28% · y 8% · w 54% · tail ↘ (하람(오른쪽 위 얼굴) — 1줄, 띄어쓰기 없는 한 덩어리라 최소 폭 54, 왼쪽 절반 경계를 약 4% 넘음)
  - read_order: 1

### panel_032
- aspect: 3:4
- art_space: Keep the top-left third of the frame (plain cream wall beside Haram's face) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "នេះ បាតកាបូប ចាស។"
  - text_ko: "바닥입니다."
  - place: x 24% · y 10% · w 38% · tail ↓ (서윤 손(아래, 책 더미)을 향해, 왼쪽 위 크림 벽)
  - read_order: 1

### panel_033
- aspect: 9:16
- art_space: Keep the top quarter of the frame (the plain cream ceiling above the raised bag) as calm, empty background for two stacked thought bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ឆែករបស់របរ គឺឆែកកាបូប។"
  - text_ko: "소지품 검사는 가방이야."
  - place: x 36% · y 6% · w 44% (생각 1, 위 1/4 천장 — 들린 가방 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "មិនមែនឆែកខ្លួនទេ។"
  - text_ko: "몸이 아니라."
  - place: x 60% · y 15% · w 34% (생각 2)
  - read_order: 2

### panel_034
- aspect: 3:4
- art_space: Keep the top-left third of the frame (plain cream wall above Haram's edge, away from the faces) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "បើរងា ពាក់ទៅ។"
  - text_ko: "추우면 입어."
  - place: x 28% · y 10% · w 30% · tail ↘ (도하(오른쪽 위 후경)를 향해, 하람 얼굴(왼쪽 가장자리) 위 벽)
  - read_order: 1

### panel_035
- aspect: 4:3
- art_space: Keep the upper-right half of the frame as a vertical strip (plain cream front wall and the top of the empty chalkboard) as calm, empty background for two shout bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 예린
  - type: shout
  - text_km: "ឆ្កួតហើយ!!"
  - text_ko: "미쳤다!!"
  - place: x 66% · y 12% · w 30% · tail ↙ (예린(입 막음))
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: shout
  - text_km: "កំពុងឆែកផងហ្អេស?!"
  - text_ko: "검사 중에?!"
  - place: x 74% · y 32% · w 44% · tail ↙ (태민(책상 침))
  - read_order: 2

### panel_036
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall above the teacher's head) as calm, empty background for two bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "…ប៉ែក ដូហា។ កំពុងឆែកណា។"
  - text_ko: "…백도하. 검사 중이다."
  - place: x 34% · y 9% · w 46% · tail ↓ (담임(가운데 왼쪽) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "បាទ។"
  - text_ko: "네."
  - place: x 80% · y 21% · w 18% · tail ↘ (도하(오른쪽 전경 어깨))
  - read_order: 2

### panel_037
- aspect: 3:4
- silent: true
- gap_after: 160

### panel_038
- aspect: 3:4
- art_space: Keep the top-left fifth of the frame (plain dim stairwell wall above Doha's head) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "យកទៅវិញ។"
  - text_ko: "가져가."
  - place: x 24% · y 9% · w 28% · tail ↘ (서윤(오른쪽)을 향해, 도하 머리 위 왼쪽 벽)
  - read_order: 1

### panel_039
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above Doha's head) as calm, empty background for two bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឡេវ។"
  - text_ko: "단추."
  - place: x 30% · y 8% · w 18% · tail ↓ (도하(위 절반) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ដឹងហើយ។"
  - text_ko: "…알아."
  - place: x 72% · y 20% · w 26% · tail ↘ (서윤(아래 전경 단추 손, 오른쪽 가장자리 귀))
  - read_order: 2

### panel_040
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two bubbles, the short one on the left.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំមិនអរគុណទេណា។ ខ្ញុំមិនបានសុំឯងផង។"
  - text_ko: "고맙다곤 안 해. 부탁한 적도 없어."
  - place: x 64% · y 11% · w 44% · tail ↓ (서윤(가운데 오른쪽) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "អឺ។"
  - text_ko: "응."
  - place: x 18% · y 22% · w 16% · tail ↙ (도하(왼쪽 전경 어깨))
  - read_order: 2

### panel_041
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above her head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឥឡូវពេលថ្ងៃ អញ្ចឹងខ្ញុំសួរតែមួយ។"
  - text_ko: "낮이니까 하나만 물을게."
  - place: x 42% · y 7% · w 50% · tail ↓ (서윤(가운데) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អាហារូបករណ៍ ហេតុអីឯងបដិសេធ?"
  - text_ko: "장학금, 왜 거절했어."
  - place: x 56% · y 19% · w 52% · tail ↓ (서윤 — 1줄)
  - read_order: 2

### panel_042
- aspect: 3:4
- art_space: Keep the top fifth of the frame (the soft plain haze of the window glow above his head) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ព្រោះមិនត្រូវការ។"
  - text_ko: "필요 없어서."
  - place: x 50% · y 9% · w 32% · tail ↓ (도하(가운데) 머리 위 창빛)
  - read_order: 1

### panel_043
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above and in front of her face) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អ្វីដែលឯងមិនត្រូវការ ហើយបោះចោល"
  - text_ko: "…네가 필요 없어서 버린 걸,"
  - place: x 38% · y 7% · w 58% · tail ↘ (서윤(옆얼굴, 왼쪽을 봄) — 얼굴 앞 위쪽 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំជាអ្នករើសយកមកប្រើ។"
  - text_ko: "내가 주워 쓰는 거네."
  - place: x 46% · y 19% · w 40% · tail ↓ (서윤)
  - read_order: 2

### panel_044
- aspect: 3:4
- silent: true
- gap_after: 320

### panel_045
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain cream upper wall and ceiling above Haram) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំកំពុងល្បាតម៉ោងថ្ងៃត្រង់។"
  - text_ko: "점심 순찰 중입니다."
  - place: x 42% · y 6% · w 42% · tail ↓ (하람(가운데 중경) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "សុំតែមួយភ្លែតប៉ុណ្ណោះ។"
  - text_ko: "잠깐이면 됩니다."
  - place: x 56% · y 15% · w 38% · tail ↓ (하람)
  - read_order: 2

### panel_046
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper wall above Doha's head) as calm, empty background for two stacked bubbles on the left side.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "នៅមុខបន្ទប់លោកគ្រូ ក៏មកដល់មុនគេ"
  - text_ko: "교무실 앞에도 먼저 와 있었고,"
  - place: x 30% · y 8% · w 54% · tail ↙ (하람(왼쪽 전경 어깨) — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ពេលឆែកថ្ងៃនេះ ក៏ដូច្នោះដែរ។"
  - text_ko: "오늘 검사 때도 그랬고요."
  - place: x 28% · y 20% · w 46% · tail ↙ (하람)
  - read_order: 2

### panel_047
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain cream upper wall above her head) as calm, empty background for one wide bubble.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ហេតុអី មិត្ត ប៉ែក ដូហា តែងតែធ្វើមុនគេមួយជំហាន?"
  - text_ko: "백도하 씨는 왜 늘 한 박자 먼저 움직이죠?"
  - place: x 50% · y 9% · w 70% · tail ↓ (하람(가운데) 머리 위, 넓은 풍선 1개 — 1줄)
  - read_order: 1

### panel_048
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper wall) as calm, empty background for two bubbles, Doha's on the left and Geonu's on the right.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ព្រោះប្រសើរជាងយឺត។"
  - text_ko: "늦는 것보다 나아서."
  - place: x 26% · y 9% · w 38% · tail ↓ (도하(가운데 왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 건우
  - type: dialogue
  - text_km: "ប្រធាន… គេឆ្លើយពូកែមែន។"
  - text_ko: "…부장, 쟤 대답 잘하는데요."
  - place: x 72% · y 21% · w 44% · tail ↘ (건우(오른쪽 후경))
  - read_order: 2

### panel_049
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper wall above her head) as calm, empty background for two stacked wide bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "បើរកក្នុងកាបូបមិនឃើញ បន្ទាប់ គឺទីកន្លែងផ្ទាល់។"
  - text_ko: "가방에서 안 나왔으면, 다음은 현장입니다."
  - place: x 46% · y 7% · w 68% · tail ↓ (하람(가운데) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ផ្លូវបួនមុខ សុលនែដុង ខ្ញុំនឹងទៅមើលផ្ទាល់ ហើយរាយការណ៍តាមគោលការណ៍។"
  - text_ko: "솔내동 사거리, 제가 직접 확인하고 원칙대로 보고드리겠습니다."
  - place: x 52% · y 22% · w 66% · tail ↓ (하람 — 2줄)
  - read_order: 2

### panel_050
- aspect: 1:1
- silent: true
- gap_after: 80

### panel_051
- aspect: 4:3
- art_space: Keep the upper-left half of the frame as a vertical strip (plain cream upper wall and ceiling above Doha) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "អញ្ចឹង ខ្ញុំជាអ្នកបញ្ចប់។"
  - text_ko: "그럼 내가 끝낼게."
  - place: x 24% · y 12% · w 38% · tail ↓ (도하(왼쪽 뒷모습, 옆얼굴) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…បញ្ចប់អី?"
  - text_ko: "…뭘?"
  - place: x 36% · y 32% · w 24% · tail ↘ (서윤(오른쪽 뒷모습))
  - read_order: 2

### panel_052
- aspect: 4:3
- art_space: Keep the top-left third of the frame (plain cream wall and curtain top above Doha) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤(속삭임)
  - type: dialogue
  - text_km: "ហេ៎ នោះសៀវភៅខ្ញុំ—"
  - text_ko: "야, 그거 내 노트—"
  - place: x 22% · y 10% · w 36% · tail ↘ (서윤(가운데, 몸을 비틂) — 속삭임 = dialogue, 왼쪽 위 크림 벽)
  - read_order: 1

### panel_053
- aspect: 3:4
- art_space: Keep the top third of the frame (plain soft cream wall) as calm, empty background.
- gap_after: 320
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "…សរសេរអីហ្នឹង?"
  - text_ko: "…뭘 쓰는 거야."
  - place: x 50% · y 10% · w 32% (생각, 위 1/3 크림 벽)
  - read_order: 1

### panel_054
- aspect: 4:3
- art_space: Keep the top third of the frame across its whole width (plain cream wall and curtain top above Seoyun and above Taemin's raised arms) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "ប៉ែក ដូហា? ខ្ញុំឃើញទៅខាងការិយាល័យកិច្ចការសិស្ស។"
  - text_ko: "백도하? 학생부실 쪽 가던데."
  - place: x 50% · y 9% · w 76% · tail ↓ (태민(가운데, 올린 팔 위) — 1줄, 위 1/3 가로로 넓게)
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: dialogue
  - text_km: "ទៅសារភាពខ្លួនឬអី?"
  - text_ko: "자수하러 가나?"
  - place: x 66% · y 25% · w 34% · tail ↓ (태민 — 서윤(오른쪽) 쪽 위 벽)
  - read_order: 2

### panel_055
- aspect: 9:16
- silent: true
- gap_after: 30

### panel_056
- aspect: 9:16
- silent: true
- gap_after: 80

### panel_057
- aspect: 1:1
- silent: true
- gap_after: 30

### panel_058
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall above her head) as calm, empty background for two stacked thought bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ប្រអប់ផ្ដល់ព័ត៌មាន…"
  - text_ko: "제보함…"
  - place: x 46% · y 8% · w 34% (생각 1, 서윤(가운데 오른쪽) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "«អញ្ចឹង ខ្ញុំជាអ្នកបញ្ចប់។»"
  - text_ko: "'그럼 내가 끝낼게.'"
  - place: x 60% · y 20% · w 42% (생각 2, P51 인용)
  - read_order: 2

### panel_059
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall and ceiling above the corridor) as calm, empty background for two stacked thought bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "សំបុត្រដំបូងនោះ…"
  - text_ko: "첫 번째 제보도…"
  - place: x 38% · y 8% · w 34% (생각 1, 복도 위 크림 벽·천장)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ក៏ជារូបក្រៀលដែរ។"
  - text_ko: "학이었어."
  - place: x 58% · y 20% · w 34% (생각 2)
  - read_order: 2

### panel_060
- aspect: 9:16
- art_space: Keep the top sixth of the frame (plain soft warm blur above her head) as calm, empty background for one bubble, and the bottom sixth (plain dark navy blazer shadow) as calm, empty background for the ending caption.
- gap_after: 0
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…គឺឯងទេតើ?"
  - text_ko: "…너였어?"
  - place: x 50% · y 8% · w 28% · tail ↓ (서윤(가운데) 머리 위, 위 1/6)
  - read_order: 1
- bubble_2:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៥ —"
  - text_ko: "— 5화에 계속 —"
  - place: x 50% · y 92% · w 50% (엔딩 캡션, 아래 1/6 남색 블레이저 그림자)
  - read_order: 2

---

## 레터러 노트 (회차 전체)

- 말풍선 85개 = 대본 대사·생각 줄 84개(1:1, 나누거나 합치지 않음) + 엔딩 캡션 1개(P60) · 크메르어 효과음 2개(P22 종 `ក្រិង… ក្រិង…`, P31 지퍼 `ស្រឺត…`, 대본 `KM 효과음` 그대로) · 소품 글씨(env) 0개(대본에 「…」 줄 없음 — 쪽지·노트·클립보드·칠판·제보함은 모두 무지).
- `text_km`은 대본 `KM:` 줄을 스크립트로 글자 그대로 복사했다(손으로 다시 치지 않음). P51 ↔ P58 `អញ្ចឹង ខ្ញុំជាអ្នកបញ្ចប់។`(P58은 «…» 인용), P12 ↔ P15 `ខ្ញុំចាត់ចែងខ្លួនឯង`, P14 ↔ P22 ↔ P33 `ឆែក…របស់…របរ`, P49 `ផ្លូវបួនមុខ សុលនែដុង`(ep03 P07·P32·P51·P60과 같은 글자)이 같은 글자로 이어진다.
- 무대사(`silent: true`) 10패널: P16, P18, P19, P28, P37, P44, P50, P55, P56, P57(샷리스트·대본과 같음). P22·P31은 효과음 + 대사가 함께 있다.
- 패널당 말풍선은 모두 1~2개. 3개인 패널은 없다(P22 = 담임 2 + 효과음, P31 = 하람 1 + 효과음, P60 = 서윤 1 + 엔딩 캡션 1). 긴 한 줄(P04 76자, P23 75자, P10·P07·P08 66~68자, P49 64자)도 모두 2줄 안에 들어가므로 나누지 않았다. **3줄 이상인 풍선은 없다**(최악의 경우 = 띄어쓰기에서만 끊긴다고 보고 잰 값).
- 종류: thought = P03, P13(2), P25(2), P33(2), P53, P58(2), P59(2)(KM `(គិត)` 줄과 1:1, 12개). shout = P35 예린·태민(샷리스트 "shout"). P14 서윤 혼잣말·P52 서윤 속삭임은 소리 내 말하는 줄이라 dialogue(KM `សឺយូន៖`, ep03 P05·P46과 같은 처리). narration = P60 엔딩 캡션(아래 1/6, y 92%).
- 프레임 밖·가장자리 꼬리(샷리스트 dialogue_ref 그대로): P06 서윤 → 오른쪽 전경(↘), P08 도하 → 왼쪽 가장자리 손(↙), P17 서윤 → 오른쪽 가장자리(↘), P24·P26 담임(프레임 밖) → 오른쪽 가장자리(↘), P36 도하 → 오른쪽 전경 어깨(↘), P39 서윤 → 아래 전경 손·오른쪽 귀(↘), P40 도하 → 왼쪽 전경 어깨(↙), P46 하람 → 왼쪽 전경 어깨(↙ 2개), P54 태민 → 가운데(↙, 풍선은 오른쪽 띠).
- **반전 줄:** P33 반전 A 두 생각 풍선 각 1줄(위 1/4 천장, 들린 가방 위), P60 "…គឺឯងទេតើ?" 1줄(위 1/6) + 캡션(아래 1/6). P51·P58 "ខ្ញុំជាអ្នកបញ្ចប់" 각 1줄.
- 폭: Battambang(외침은 Koulen) 글꼴로 실제 글자 폭을 재어(뷰어 수치: 글자 3.4%·외침 4%, 좌우 여백 1.2em·위아래 0.7em·줄 간격 1.7) 줄 수를 맞췄다. 브라우저가 띄어쓰기에서만 끊는다고 보는 최악의 경우로 쟀고, 이름(용어집 여러 낱말 이름)은 한 줄로 묶어 쟀다. w 16~80%, 모두 85% 이하. 풍선 상자는 모두 패널 안, 같은 패널 풍선끼리 겹치지 않는다.
- `gap_after`(샷리스트 §4 그대로): 0 마지막(P60) · 30 촘촘 · 80 보통 · 160 비트 끊기(P04, P14, P18, P20, P32, P33, P37, P40, P43, P51, P54, P59) · 320 시간 점프(P12 금→월, P44 쉬는 시간→점심, P53 5교시→16:35).
- 짝 패널은 같은 자리 감각으로: P05 ↔ P09 ↔ P38 계단참 측면(왼쪽 위 벽), P19 ↔ P20 화장실 문(P20만 풍선, 왼쪽 띠), P45 ↔ P49 하람 머리 위 계단식 두 풍선, P51 ↔ P58 "그럼 내가 끝낼게" 같은 글자.

### art_space 수정 반영 (코디네이터, 2026-11-22 — 샷리스트 문장 그대로 옮김)
- **P20**: art_space "upper-left three-fifths". 예린 풍선 w 54(x 약 3~57, y 약 3~26%), 서윤 "…អឺ។" x 44 · y 36. 둘 다 왼쪽 3/5 띠 안.
- **P31**: art_space "top-left half, Haram's face stays on the right". 하람 풍선 w 54(띄어쓰기 없는 12.6em 한 덩어리가 넘치지 않는 최소 폭, x 28 → 상자 x 약 2~54, y 약 4~12%). **왼쪽 절반 경계를 약 4% 넘는다** — 하람 얼굴이 가로 55%보다 왼쪽으로 오지 않으면 문제없다. 완전히 절반 안에 넣으려면 KM 줄에 띄어쓰기가 필요하다(예: សូមបង្ហាញ ឲ្យឃើញដល់បាតកាបូប។ — 리뷰어 몫).
- **P54**: art_space "top third across its whole width, above Taemin's raised arms". 태민 b1을 1줄로 넓게(x 50 · y 9 · w 76 → x 약 12~88, y 약 1~17%), b2 x 66 · y 25(y 약 17~33%). 둘 다 위 1/3 안, 꼬리 ↓ 태민(가운데).

### 남은 확인 (배치 확인 단계, episode-compositor)
- **P31 효과음** "ស្រឺត…"는 열린 지퍼 가장자리 옆 작은 빈자리(x 18% · y 46%)로 짐작해 두었다. 그림에서 지퍼 끝이 어디 오는지 보고 x/y만 옮긴다.
- **P22 효과음** "ក្រិង… ក្រិង…"은 칠판 위 벽 스피커 쪽(왼쪽 위, x 22% · y 7%)으로 두었다. 스피커가 다른 쪽에 그려지면 왼쪽 띠 안에서 옮긴다.
- **4:3 세로 띠 패널(P09, P13, P15, P20, P21, P22, P25, P35, P51)**: 두 번째 풍선이 패널 높이의 약 38~51%까지 내려온다(P22 b2가 가장 낮음, 약 35~51%). 그 높이에 인물 머리가 그려졌으면 y만 올리거나 x를 띠 바깥쪽으로 민다.
- **P23**: 담임 줄이 길어(75자) 위 1/3을 가로로 넓게(x 8~84%, 2줄) 쓰고, 하람 풍선은 그 아래 오른쪽(x 40~96%, y 약 19~32%)에 계단식으로 두었다. 샷리스트 "teacher's on the left, Haram's on the right"는 꼬리 방향(↙/↘)과 좌우 무게로 지켰다.
- **P35 외침 2개**: 오른쪽 띠 안에 계단식(예린 위, 태민 아래). 예린·태민이 그림에서 왼쪽에 있으면 꼬리는 그대로(↙) 두면 된다.
