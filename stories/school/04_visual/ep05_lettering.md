# EP05 레터링 명세 — 『유통기한 연애』 5화 「안경」 / «វ៉ែនតា» (letterer · Khmer edition)

- 작성: letterer · 2026-11-23 · 스킬 `webtoon-khmer-edition` §3 + `webtoon-assembly`(레터링 섹션 중 종류·읽기 순서·과밀 규칙만)
- 입력: `03_episode/ep05_script_final.md`(native-khmer 리뷰 READY본, KM 줄 원문 그대로 — 손으로 다시 치지 않고 스크립트로 복사), `ep05_beatsheet.md`(패널 번호 고정 P01~P65), `04_visual/ep05_shotlist.md` v1.1, `04_visual/style-bible.md` v1.4 §10 + §3-2 [ep05] M_FLASH 규칙 6, 형식 기준 `04_visual/ep04_lettering.md`
- **이미지에는 글자 없음.** 말풍선·효과음·캡션은 뷰어(`km_tool.py build`)가 그린다. 각 패널의 `art_space`는 prompt-smith가 "calm, empty background"로 프롬프트에 넣는다(style-bible §10-3).
- `place`: x/y = 풍선 중심, w = 풍선 상자의 최대 폭(테두리·안쪽 여백 포함, 패널 폭 대비 %). 꼬리 ↙↓↘ = 아래쪽 꼬리(화자 왼쪽/가운데/오른쪽), ↖↑↗ = 위쪽 꼬리. thought·narration은 꼬리 없음. sfx의 `size` = 글자 크기(패널 폭 대비 %), `rot` = 각도.
- **`aspect`·`art_space`·`gap_after`(px)는 `04_visual/ep05_shotlist.md` v1.1에서 그대로 옮겼다**(art_space는 샷리스트의 영어 문장 원문 = prompt-smith가 쓰는 문장). `place`의 좌우·높이는 샷리스트 composition의 인물 위치(screen-left/right)·dialogue_ref의 꼬리 지시와 art_space 안에 맞췄다.
- 회상(P53~P60) 대사는 전부 `memory` 풍선(파란 빛 테두리, style-bible §10-1 · §3-2 [ep05] M_FLASH 규칙 6). 자리는 눈 내리는 밤하늘(실외) / 흐린 선반 윗부분·전구빛(P54), 노란 간판 위에는 두지 않았다.
- `text_ko`는 참고용, 화면에 나오지 않는다.

---

### panel_001
- aspect: 9:16
- art_space: Keep the top fifth of the frame (plain cream upper wall and ceiling above the corridor) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "អឺ។ ខ្ញុំដាក់ហើយ។"
  - text_ko: "응. 넣었어."
  - place: x 50% · y 8% · w 35% · tail ↓ (도하(가운데, 복도 끝) 머리 위, 위 1/5 크림 벽·천장 — 1줄)
  - read_order: 1

### panel_002
- aspect: 3:4
- art_space: Keep the top quarter of the frame (plain warm cream corridor wall above her head) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឯងមិនពន្យល់ទេឬ?"
  - text_ko: "…설명 안 해?"
  - place: x 42% · y 10% · w 37% · tail ↓ (서윤(가운데) 머리 위, 위 1/4 크림 벽 — 띄어쓰기 없는 한 덩어리 1줄)
  - read_order: 1

### panel_003
- aspect: 3:4
- art_space: Keep the top quarter of the frame (plain corridor ceiling and upper wall) as calm, empty background.
- gap_after: 320
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…មិនបាច់ទេ។"
  - text_ko: "…됐어."
  - place: x 50% · y 10% · w 29% · tail ↓ (위 1/4 천장, 꼬리 = 아래 전경 서윤 쪽)
  - read_order: 1

### panel_004
- aspect: 4:3
- art_space: Keep the top third of the frame (soft yellow ginkgo canopy and pale sky) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "នៅសាលា យើងជាសង្សារ។ ប្រការ២។"
  - text_ko: "학교에선 연인. 2조."
  - place: x 42% · y 10% · w 58% (생각, 위 1/3 은행잎·하늘, 서윤(오른쪽) — 1줄)
  - read_order: 1

### panel_005
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (cream wall, curtain edge and soft window light) as calm, empty background for two bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "ពួកឯងឈ្លោះគ្នាហ្អេស?"
  - text_ko: "너네 싸웠어?"
  - place: x 28% · y 8% · w 40% · tail ↙ (예린(왼쪽 전경) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អត់ទេ។"
  - text_ko: "아니."
  - place: x 72% · y 23% · w 22% · tail ↓ (서윤(오른쪽 전경) 머리 위)
  - read_order: 2

### panel_006
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream wall and curtain top) as calm, empty background for two bubbles; Taemin's line is long.
- gap_after: 80
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "កាន់ដៃគ្នាផង ឈ្លោះគ្នាផង? ស្នេហាសម័យនេះ អញ្ចឹងហ្អេស?"
  - text_ko: "손은 잡고 싸우네? 이게 요즘 연애냐?"
  - place: x 40% · y 10% · w 50% · tail ↓ (태민(가운데) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "គូ តែមីន។"
  - text_ko: "구태민."
  - place: x 74% · y 25% · w 25% · tail ↘ (서윤(프레임 밖 오른쪽 아래, 발) — 꼬리 = 오른쪽 아래)
  - read_order: 2

### panel_007
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream wall and soft window light) as calm, empty background for two bubbles; Yerin's line is long.
- gap_after: 80
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "គេថា សប្ដាហ៍ក្រោយ ជាសប្ដាហ៍ប្រឹក្សាអាជីព។ ម៉ាក់ឯងមកដែរទេ?"
  - text_ko: "다음 주부터 진로 상담 주간이래. 너네 엄마도 오셔?"
  - place: x 34% · y 10% · w 64% · tail ↙ (예린(왼쪽 반쪽) — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ប្រហែល។"
  - text_ko: "…아마."
  - place: x 72% · y 25% · w 27% · tail ↓ (서윤(가운데 오른쪽) 머리 위)
  - read_order: 2

### panel_008
- aspect: 1:1
- silent: true
- gap_after: 30

### panel_009
- aspect: 3:4
- art_space: Keep the upper half of the top frame (plain cream wall above her profile) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "នៅតែពាក់អាហ្នឹងទៀត។"
  - text_ko: "아직도 저걸 달고 다녀."
  - place: x 40% · y 7% · w 41% (생각, 위 칸(약 35%)의 윗부분 크림 벽 — 1줄)
  - read_order: 1

### panel_010
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall and ceiling) as calm, empty background for two bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ប្រអប់ផ្ដល់ព័ត៌មាន ខ្ញុំនឹងបើកម៉ោងថ្ងៃត្រង់។"
  - text_ko: "제보함, 점심에 엽니다."
  - place: x 34% · y 10% · w 40% · tail ↓ (하람(가운데, 왼쪽으로 걸음) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 건우
  - type: dialogue
  - text_km: "បាទ ប្រធាន។"
  - text_ko: "네, 부장."
  - place: x 70% · y 24% · w 29% · tail ↓ (건우(하람 뒤, 오른쪽) 머리 위)
  - read_order: 2

### panel_011
- aspect: 4:3
- art_space: Keep the top third of the frame (the blank chalkboard top and plain cream wall above the door) as calm, empty background; the line is long.
- gap_after: 160
- bubble_1:
  - speaker: 건우
  - type: dialogue
  - text_km: "ប៉ែក ដូហា… ប្រធានឲ្យទៅមុខការិយាល័យកិច្ចការសិស្ស។"
  - text_ko: "백도하. 부장이… 학생부실 앞으로 오래요."
  - place: x 36% · y 13% · w 64% · tail ↘ (건우(가운데 오른쪽 앞문) — 2줄, 이름 한 줄 + 긴 낱말 한 줄)
  - read_order: 1

### panel_012
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background for two thought bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ខ្ញុំមិនមែនដើរតាមគេទេ។"
  - text_ko: "따라온 거 아니야."
  - place: x 34% · y 9% · w 41% (생각 1, 위 1/3 크림 벽 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ផ្លូវនេះ ទៅបន្ទប់ទឹក។"
  - text_ko: "이쪽이 화장실이야."
  - place: x 62% · y 24% · w 38% (생각 2, 서윤(가운데 오른쪽) 위)
  - read_order: 2

### panel_013
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream wall above the tip box and the door) as calm, empty background for two bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "សំបុត្រដែលដាក់ម្សិលមិញ ជារបស់ មិត្ត ប៉ែក ដូហា មែនទេ?"
  - text_ko: "어제 넣은 쪽지, 백도하 씨 겁니까?"
  - place: x 38% · y 9% · w 51% · tail ↓ (하람(가운데 옆모습) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "អឺ។"
  - text_ko: "응."
  - place: x 80% · y 24% · w 17% · tail ↓ (도하(오른쪽) 머리 위)
  - read_order: 2

### panel_014
- aspect: 1:1
- silent: true
- gap_after: 80

### panel_015
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream wall above their heads) as calm, empty background for two bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំនឹងអានឲ្យឮ។"
  - text_ko: "소리 내서 읽겠습니다."
  - place: x 26% · y 8% · w 31% · tail ↙ (하람(왼쪽 전경 어깨))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "អានទៅ។"
  - text_ko: "읽어."
  - place: x 66% · y 22% · w 24% · tail ↓ (도하(가운데 오른쪽) 머리 위)
  - read_order: 2

### panel_016
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background for two thought bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "បើមានឈ្មោះខ្ញុំ…"
  - text_ko: "내 이름이 나오면…"
  - place: x 36% · y 9% · w 32% (생각 1, 위 1/3 크림 벽)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ចប់ហើយ។"
  - text_ko: "끝이야."
  - place: x 64% · y 24% · w 26% (생각 2, 서윤 얼굴(가운데 오른쪽) 위)
  - read_order: 2

### panel_017
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream wall above her head) as calm, empty background; the line is long.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "«សិស្សវិទ្យាល័យសឺជីន ដែលនៅ ផ្លូវបួនមុខ សុលនែដុង រាល់យប់…»"
  - text_ko: "'솔내동 사거리에 밤마다 있는 서진고 학생,'"
  - place: x 38% · y 10% · w 53% · tail ↓ (하람(가운데 왼쪽, 낭독) 머리 위 — 2줄, 지명 한 줄로)
  - read_order: 1

### panel_018
- aspect: 3:4
- art_space: Keep the upper part of the top frame (plain soft cream wall blur above her lips) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "«គឺខ្ញុំ។»"
  - text_ko: "'저입니다.'"
  - place: x 50% · y 8% · w 22% · tail ↓ (위 칸(약 55%) 윗부분 크림 벽, 하람 입가 쪽)
  - read_order: 1

### panel_019
- aspect: 9:16
- art_space: Keep the top fifth of the frame (plain cream wall and ceiling above their heads) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "«ឆ្នាំទី២ ថ្នាក់ទី១ ប៉ែក ដូហា។»"
  - text_ko: "'2학년 1반, 백도하.'"
  - place: x 34% · y 9% · w 50% · tail ↙ (하람(왼쪽 옆모습) — 1줄, 이름이 끝에 떨어짐)
  - read_order: 1

### panel_020
- aspect: 3:4
- silent: true
- gap_after: 80

### panel_021
- aspect: 4:3
- art_space: Keep the top two-fifths of the frame across the whole width (plain cream wall) as calm, empty background for two bubbles, one above each speaker.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "មិត្តប្ដឹងខ្លួនឯង។"
  - text_ko: "본인 신고네요."
  - place: x 26% · y 12% · w 31% · tail ↓ (하람(왼쪽) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំមិនបានសរសេរកុហកទេ។"
  - text_ko: "거짓말은 안 썼어."
  - place: x 55% · y 30% · w 45% · tail ↘ (도하(오른쪽) — 1줄, 띄어쓰기 없는 한 덩어리)
  - read_order: 2

### panel_022
- aspect: 3:4
- art_space: Keep the upper half of the top frame (plain soft cream wall above her head) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "សំបុត្រដំបូង គេបត់ជារូបក្រៀល…"
  - text_ko: "첫 번째 제보는 학으로 접혀 있었는데."
  - place: x 36% · y 8% · w 51% · tail ↓ (위 칸(약 62%)의 위 절반 크림 벽, 하람 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "តែមួយនេះ មិនមែនទេ។"
  - text_ko: "이건 아니네요."
  - place: x 59% · y 22% · w 41% · tail ↓ (하람 — 1줄)
  - read_order: 2

### panel_023
- aspect: 3:4
- art_space: Keep the top two-fifths of the frame across the whole width (plain cream wall above their heads) as calm, empty background for two long stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ម្ចាស់ខ្លួនប្រាប់ហើយថានៅទីនោះ។ ទីកន្លែងផ្ទាល់ គ្មានអីឲ្យខ្ញុំមើលទៀតទេ។"
  - text_ko: "본인이 거기 있다고 썼으니, 현장에서 제가 확인할 건 없네요."
  - place: x 38% · y 9% · w 59% · tail ↓ (하람(가운데) 머리 위 — 2줄, 위 2/5 전폭)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំនឹងរាយការណ៍ជូនគ្រូបន្ទុកថ្នាក់ ដូចដែលបានសរសេរ។"
  - text_ko: "담임 선생님께 그대로 올리겠습니다."
  - place: x 50% · y 27% · w 50% · tail ↓ (하람 — 2줄)
  - read_order: 2

### panel_024
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain soft cream wall blur) as calm, empty background for two bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ចុះអ្នកដាក់សំបុត្រដំបូង…"
  - text_ko: "그럼 첫 번째로 넣은 사람은,"
  - place: x 34% · y 8% · w 41% · tail ↘ (하람(가운데 오른쪽 얼굴)을 향해 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "តើគេបានឃើញអ្វីទៅ?"
  - text_ko: "뭘 본 걸까요."
  - place: x 60% · y 23% · w 39% · tail ↓ (하람 — 1줄)
  - read_order: 2

### panel_025
- aspect: 4:3
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background; the shout is long.
- gap_after: 30
- bubble_1:
  - speaker: 태민
  - type: shout
  - text_km: "សារភាពខ្លួនហើយ?! ប៉ែក ដូហា ទៅសារភាពខ្លួនមែនហ្អេស?!"
  - text_ko: "자수했어?! 백도하 진짜 자수했어?!"
  - place: x 40% · y 16% · w 60% · tail ↘ (태민(오른쪽, 튀어나옴) — 외침 2줄, 위 1/3 전폭)
  - read_order: 1

### panel_026
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background for two bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 건우
  - type: dialogue
  - text_km: "…មិនមែនសារភាពខ្លួនទេ។ គឺប្ដឹងខ្លួនឯង។"
  - text_ko: "…자수가 아니라 본인 신고입니다."
  - place: x 57% · y 9% · w 43% · tail ↘ (건우(오른쪽, 크게) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: dialogue
  - text_km: "អ៊ឹប… ដូចគ្នាហ្នឹងហើយ!"
  - text_ko: "흡, 그게 그거잖아."
  - place: x 26% · y 25% · w 40% · tail ↙ (태민(왼쪽, 입 막힘) — 1줄)
  - read_order: 2

### panel_027
- aspect: 4:3
- art_space: Keep the top third of the frame (plain soft apricot haze and wall above their heads) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឯងឆ្កួតហើយឬ?"
  - text_ko: "너 미쳤어?"
  - place: x 44% · y 13% · w 31% · tail ↘ (서윤(오른쪽, 한 칸 위)을 향해, 왼쪽 위 살구빛 벽 — 오른쪽 위 철문은 비움)
  - read_order: 1

### panel_028
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain soft apricot haze around the window) as calm, empty background for two bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ក្រដាសនោះ នឹងធ្វើឲ្យឈ្មោះឯងចូលកំណត់ត្រា។"
  - text_ko: "그 쪽지로 네 이름이 기록에 올라가."
  - place: x 46% · y 9% · w 54% · tail ↘ (서윤(가운데 오른쪽, 위) — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ចូលតាំងពីមុនហើយ។"
  - text_ko: "이미 올라가 있어."
  - place: x 26% · y 25% · w 38% · tail ↙ (도하(왼쪽 아래 전경 어깨))
  - read_order: 2

### panel_029
- aspect: 3:4
- art_space: Keep the top quarter of the frame (plain soft apricot haze above her head) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ហេតុអីឯងសម្រេចតាមចិត្តឯង?"
  - text_ko: "왜 네 맘대로 해."
  - place: x 50% · y 9% · w 49% · tail ↓ (서윤(가운데 얼굴) 머리 위, 위 1/4 살구빛 — 1줄, 얼굴에 안 겹침)
  - read_order: 1

### panel_030
- aspect: 3:4
- art_space: Keep the top two-fifths of the frame across the whole width (plain soft wall and violet shadow above his head) as calm, empty background for two bubbles; the first line is long.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "បើ ឆែ ហារ៉ាម មកផ្លូវបួនមុខ ឯងគ្មានកន្លែងលាក់ខ្លួនទេ។"
  - text_ko: "채하람이 사거리에 오면, 넌 숨을 데가 없어."
  - place: x 40% · y 10% · w 46% · tail ↓ (도하(가운데 아래) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំ នៅទីនោះក៏មិនអីដែរ។"
  - text_ko: "난 거기 있어도 돼."
  - place: x 58% · y 27% · w 42% · tail ↓ (도하 — 1줄)
  - read_order: 2

### panel_031
- aspect: 4:3
- art_space: Keep the top two-fifths of the frame across the whole width (plain soft apricot haze) as calm, empty background for two bubbles, one above each speaker.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អញ្ចឹង ឯងសម្រេចម្នាក់ឯង? មិនសួរខ្ញុំផង?"
  - text_ko: "그래서 네가 정했어? 나한테 묻지도 않고?"
  - place: x 55% · y 13% · w 45% · tail ↘ (서윤(오른쪽) 머리 위 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "…ខ្ញុំមិនបានសួរ។"
  - text_ko: "…안 물었어."
  - place: x 16% · y 28% · w 32% · tail ↙ (도하(왼쪽) 머리 위)
  - read_order: 2

### panel_032
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain soft apricot haze) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំមិនដែលសុំឲ្យឯងបិទបាំងឲ្យខ្ញុំទេ។"
  - text_ko: "나 덮어 달라고 한 적 없어."
  - place: x 44% · y 9% · w 55% · tail ↘ (서윤(가운데 오른쪽 옆얼굴) — 띄어쓰기 없는 한 덩어리 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "មួយដងក៏អត់។"
  - text_ko: "한 번도."
  - place: x 66% · y 24% · w 30% · tail ↓ (서윤 머리 위)
  - read_order: 2

### panel_033
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain soft apricot haze and wall) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ក្រៀលនោះក៏អញ្ចឹង។ វាបត់តាមរបៀបខ្ញុំ។"
  - text_ko: "그 학도 그래. 내 식으로 접혀 있더라."
  - place: x 40% · y 10% · w 38% · tail ↘ (서윤(오른쪽 전경, 가리키는 손) — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឯងបត់តាមខ្ញុំឬ?"
  - text_ko: "따라 접은 거야?"
  - place: x 69% · y 26% · w 31% · tail ↘ (서윤(오른쪽 전경))
  - read_order: 2

### panel_034
- aspect: 3:4
- art_space: Keep the top quarter of the frame (plain soft apricot haze above his head) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំមិនបត់ក្រៀលទេ។"
  - text_ko: "난 학 안 접어."
  - place: x 50% · y 9% · w 36% · tail ↓ (도하(가운데 얼굴) 머리 위, 위 1/4)
  - read_order: 1

### panel_035
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain soft apricot haze above the window and the upper stairwell wall) as calm, empty background for two bubbles and the bell sound effect.
- gap_after: 320
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អញ្ចឹងម៉េចវិញ?"
  - text_ko: "그럼 뭔데."
  - place: x 62% · y 6% · w 30% · tail ↘ (서윤(오른쪽 위, 높은 칸) — 창 위 살구빛)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "គេឲ្យខ្ញុំ។"
  - text_ko: "받은 거야."
  - place: x 30% · y 16% · w 23% · tail ↙ (도하(왼쪽 아래, 계단을 내려감) — 꼬리 = 아래 왼쪽)
  - read_order: 2
- sfx_1:
  - text_km: "ក្រិង… ក្រិង…"
  - text_ko: "예비 종"
  - place: x 80% · y 17% · size 5.5% · rot 8 (종, 창 쪽 오른쪽 가장자리)

### panel_036
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain fluorescent ceiling and soft shelf tops) as calm, empty background for two thought bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "«គេឲ្យខ្ញុំ»…"
  - text_ko: "받은 거라니."
  - place: x 36% · y 9% · w 26% (생각 1, 위 1/3 형광 천장)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "…អ្នកណា?"
  - text_ko: "…누구한테."
  - place: x 60% · y 24% · w 25% (생각 2, 서윤(가운데) 위)
  - read_order: 2

### panel_037
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain dark glass and the door frame above his hood) as calm, empty background for the door-chime sound effect.
- gap_after: 30
- sfx_1:
  - text_km: "ឌីងដុង"
  - text_ko: "딩동"
  - place: x 62% · y 9% · size 7% · rot -4 (문 위쪽 어두운 유리·문틀, 후드 위)

### panel_038
- aspect: 3:4
- silent: true
- gap_after: 80

### panel_039
- aspect: 4:3
- art_space: Keep the top two-fifths of the frame across the whole width (plain fluorescent ceiling and soft shelves) as calm, empty background for two bubbles, one above each speaker.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "សួរបាន។"
  - text_ko: "물어봐도 돼."
  - place: x 22% · y 9% · w 24% · tail ↓ (도하(왼쪽) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ហួសម៉ោង១០ហើយ។ ប្រការ៣។"
  - text_ko: "열 시 넘었어. 3조."
  - place: x 48% · y 30% · w 52% · tail ↘ (서윤(오른쪽, 계산대 안)을 향해 — 1줄)
  - read_order: 2

### panel_040
- aspect: 3:4
- art_space: Keep the top quarter of the frame across the whole width (plain fluorescent ceiling and upper wall above the staff door and the clock) as calm, empty background for one bubble and the footstep sound effect.
- gap_after: 160
- sfx_1:
  - text_km: "ទុប… ទុប…"
  - text_ko: "계단 발소리"
  - place: x 24% · y 8% · size 6% · rot -6 (왼쪽 직원 문 위 벽)
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ថៅកែ? មកហើយ?"
  - text_ko: "…사장님? 벌써?"
  - place: x 62% · y 16% · w 37% · tail ↓ (서윤(가운데 오른쪽) 머리 위 — 1줄, 시계(중간 높이)는 비움)
  - read_order: 1

### panel_041
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain dim stockroom ceiling) as calm, empty background for two bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ថ្ងៃនេះ ថៅកែចុះមកឆាប់ ចាស។"
  - text_ko: "일찍 내려오셨네요."
  - place: x 30% · y 9% · w 50% · tail ↙ (서윤(왼쪽 전경 문틀의 손) — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ដេកមិនលក់។"
  - text_ko: "잠이 안 와서."
  - place: x 66% · y 24% · w 29% · tail ↙ (사장님(가운데, 등) 머리 위)
  - read_order: 2

### panel_042
- aspect: 3:4
- art_space: Keep the top two-fifths of the frame across the whole width (plain dim wall and ceiling) as calm, empty background for two bubbles; the owner's line is long.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ថៅកែមើលអី ចាស?"
  - text_ko: "뭐 보세요?"
  - place: x 63% · y 8% · w 37% · tail ↗ (서윤(프레임 밖 오른쪽 위) — 꼬리 = 오른쪽 위 가장자리)
  - read_order: 1
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "វីដេអូថត។ ទុកបាន៣០ថ្ងៃ។ ហួសពីហ្នឹង វាលុបខ្លួនឯង។"
  - text_ko: "녹화. 30일은 남아. 지나면 알아서 지워지고."
  - place: x 40% · y 26% · w 46% · tail ↘ (사장님(가운데 오른쪽 옆얼굴) — 2줄)
  - read_order: 2

### panel_043
- aspect: 9:16
- silent: true
- gap_after: 80

### panel_044
- aspect: 4:3
- art_space: Keep the top two-fifths of the frame across the whole width (plain fluorescent ceiling and soft shelf tops) as calm, empty background for two bubbles, one above each speaker.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ជម្រាបសួរ បាទ។"
  - text_ko: "안녕하세요."
  - place: x 24% · y 9% · w 33% · tail ↓ (도하(왼쪽, 인사) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "…ឯងហ្នឹងហើយ ភ្ញៀវប្រចាំនោះ។"
  - text_ko: "…네가 그 단골이구나."
  - place: x 49% · y 30% · w 51% · tail ↘ (사장님(오른쪽, 계산대 안)을 향해 — 1줄)
  - read_order: 2

### panel_045
- aspect: 4:3
- art_space: Keep the top two-fifths of the frame across the whole width (plain fluorescent ceiling and soft shelves) as calm, empty background for three short bubbles side by side.
- gap_after: 30
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "សង្សារឯងហ្អេស?"
  - text_ko: "남자친구야?"
  - place: x 50% · y 9% · w 33% · tail ↓ (사장님(가운데) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អត់ទេ ចាស!"
  - text_ko: "아니요!"
  - place: x 72% · y 27% · w 28% · tail ↓ (서윤(오른쪽) 머리 위 — 도하와 같은 높이)
  - read_order: 2
- bubble_3:
  - speaker: 도하
  - type: dialogue
  - text_km: "បាទ។"
  - text_ko: "네."
  - place: x 22% · y 27% · w 20% · tail ↓ (도하(왼쪽) 머리 위 — 서윤과 같은 높이)
  - read_order: 3

### panel_046
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (plain fluorescent ceiling above her head) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "…ពីរនាក់ឯង ទៅព្រមព្រៀងគ្នាឲ្យស្រួលសិនមក។"
  - text_ko: "…둘이 합의 좀 하고 와."
  - place: x 40% · y 9% · w 53% · tail ↘ (사장님(가운데 위 얼굴) 쪽 — 2줄)
  - read_order: 1
- bubble_2:
  - speaker: 사장님
  - type: dialogue
  - text_km: "ញ៉ាំសិនទៅ។"
  - text_ko: "먹고 가."
  - place: x 70% · y 24% · w 28% · tail ↙ (사장님(가운데) — 1줄)
  - read_order: 2

### panel_047
- aspect: 4:3
- silent: true
- gap_after: 160

### panel_048
- aspect: 9:16
- art_space: Keep the top quarter of the frame (deep navy-black sky and dark power lines) as calm, empty background for two bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឯងមិនទៅទេឬ?"
  - text_ko: "…안 가?"
  - place: x 66% · y 7% · w 33% · tail ↘ (서윤(오른쪽 아래, 작게)을 향해, 위 1/4 남흑 하늘)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំនៅចាំ។"
  - text_ko: "기다렸어."
  - place: x 30% · y 16% · w 24% · tail ↙ (도하(가운데 왼쪽 골목 어귀))
  - read_order: 2

### panel_049
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (deep navy-black sky beside the streetlight glow) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប្រការ៣ លើកនេះខ្ញុំជាអ្នកល្មើស។"
  - text_ko: "3조, 내가 깰게."
  - place: x 30% · y 9% · w 42% · tail ↘ (서윤(가운데) — 2줄, 가로등 빛 반대쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ក្រៀលនោះ អ្នកណាឲ្យឯង?"
  - text_ko: "그 학, 누구한테 받았어."
  - place: x 34% · y 26% · w 45% · tail ↘ (서윤 — 1줄)
  - read_order: 2

### panel_050
- aspect: 1:1
- art_space: Keep the top third of the frame (plain dark night background) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "មើលផ្ទាល់ទៅ។"
  - text_ko: "직접 봐."
  - place: x 50% · y 16% · w 31% · tail ↑ (도하(프레임 밖 위) — 꼬리 = 위 가장자리)
  - read_order: 1

### panel_051
- aspect: 1:1
- silent: true
- gap_after: 80

### panel_052
- aspect: 1:1
- silent: true
- gap_after: 320

### panel_053
- aspect: 9:16
- art_space: Keep the top quarter of the frame (dark snowy night sky with soft falling flakes) as calm, empty background for two bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 엄마(프레임 밖)
  - type: memory
  - text_km: "សឺយូន ធ្វើកិច្ចការផ្ទះរួចហើយឬនៅ?"
  - text_ko: "서윤아, 숙제 다 했어?"
  - place: x 40% · y 7% · w 54% · tail ↘ (엄마(프레임 밖, 슈퍼 안쪽) — 꼬리 = 아래 유리문 안쪽, 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "រួចហើយ!"
  - text_ko: "다 했어!"
  - place: x 60% · y 17% · w 24% · tail ↙ (8세 서윤(유리문 안 카운터 실루엣) — 꼬리 = 아래 유리문)
  - read_order: 2

### panel_054
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (soft blurred shelf tops and the warm bulb glow near the ceiling) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "ក្មេងនោះ នៅទៀតហើយ។"
  - text_ko: "쟤 또 있네."
  - place: x 34% · y 9% · w 44% · tail ↘ (8세 서윤(가운데) — 1줄, 위 1/3 흐린 선반 윗부분·전구빛)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "អង្គុយនៅហ្នឹងរាល់ថ្ងៃ។"
  - text_ko: "맨날 저기 앉아 있어."
  - place: x 60% · y 25% · w 39% · tail ↓ (8세 서윤 머리 위 — 1줄)
  - read_order: 2

### panel_055
- aspect: 3:4
- art_space: Keep the top quarter of the frame (dark snowy sky above the shop door) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "ហេ៎ ឯង!"
  - text_ko: "야, 너."
  - place: x 70% · y 11% · w 23% · tail ↓ (8세 서윤(오른쪽, 문을 밀고 나옴) 머리 위, 위 1/4 눈 오는 하늘)
  - read_order: 1

### panel_056
- aspect: 3:4
- silent: true
- gap_after: 80

### panel_057
- aspect: 3:4
- art_space: Keep the top third of the frame across the whole width (dark snowy sky above the signboard) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "មួយនេះ ផុតកំណត់ថ្ងៃនេះ។"
  - text_ko: "이거 오늘까지인 거야."
  - place: x 36% · y 9% · w 45% · tail ↘ (8세 서윤(가운데) — 1줄, 간판 위가 아니라 하늘)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "បើថ្ងៃនេះមិនញ៉ាំ គេបោះចោល។"
  - text_ko: "오늘 안 먹으면 버려."
  - place: x 50% · y 25% · w 50% · tail ↓ (8세 서윤 머리 위 — 1줄)
  - read_order: 2

### panel_058
- aspect: 4:3
- art_space: Keep the top third of the frame (dark snowy sky above them) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "អញ្ចឹង ញ៉ាំទៅ!"
  - text_ko: "그러니까 먹어."
  - place: x 70% · y 14% · w 30% · tail ↓ (8세 서윤(오른쪽) 머리 위, 위 1/3 눈 오는 하늘)
  - read_order: 1

### panel_059
- aspect: 4:3
- art_space: Keep the top two-fifths of the frame across the whole width (dark snowy sky above the door) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "ក្បាល បត់បែបនេះ។ កន្ទុយ បត់ចុះម្ដង។"
  - text_ko: "머리는 이렇게 꺾고, 꼬리는 한 번 접어."
  - place: x 40% · y 9% · w 60% · tail ↘ (8세 서윤(오른쪽 전경, 쪼그림)을 향해 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "ទើបជារបស់ខ្ញុំ។"
  - text_ko: "그래야 내 거야."
  - place: x 69% · y 30% · w 31% · tail ↓ (8세 서윤 머리 위)
  - read_order: 2

### panel_060
- aspect: 1:1
- art_space: Keep the top two-fifths of the frame (soft dark snowy ground above the hands) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "យកទៅ!"
  - text_ko: "가져."
  - place: x 28% · y 9% · w 23% · tail ↓ (8세 서윤 맨손(가운데 아래)을 향해)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(8세)
  - type: memory
  - text_km: "មួយនេះ មិនផុតកំណត់ថ្ងៃនេះទេ។"
  - text_ko: "이건 오늘까지 아니야."
  - place: x 48% · y 26% · w 52% · tail ↓ (8세 서윤 손 쪽 — 1줄)
  - read_order: 2

### panel_061
- aspect: 9:16
- silent: true
- gap_after: 320

### panel_062
- aspect: 9:16
- art_space: Keep the top fifth of the frame (the soft blurred warm-white-to-orange haze band) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ក្រៀលមួយនេះ…"
  - text_ko: "…이 학,"
  - place: x 50% · y 7% · w 34% · tail ↓ (위 1/5 흐린 띠, 서윤(가운데 반 얼굴) 쪽 — 1줄)
  - read_order: 1

### panel_063
- aspect: 9:16
- art_space: Keep the top quarter of the frame across the whole width (deep navy-black sky and dark power lines) as calm, empty background for two bubbles, one above each speaker.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំជាអ្នកបត់?"
  - text_ko: "내가 접은 거야?"
  - place: x 68% · y 7% · w 27% · tail ↘ (서윤(오른쪽 아래 전경) — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "អឺ។"
  - text_ko: "응."
  - place: x 26% · y 17% · w 17% · tail ↓ (도하(왼쪽 가운데) 머리 위)
  - read_order: 2

### panel_064
- aspect: 9:16
- art_space: Keep the top quarter of the frame across the whole width (deep navy-black sky) as calm, empty background for two stacked bubbles on Seoyun's side.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "អញ្ចឹង ក្មេងប្រុសនោះ…"
  - text_ko: "그럼 그 남자애…"
  - place: x 58% · y 7% · w 39% · tail ↓ (서윤(오른쪽) — 1줄, 서윤 쪽 위에 계단식)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឈ្មោះអីហ្ន៎…"
  - text_ko: "이름이 뭐였더라."
  - place: x 72% · y 17% · w 27% · tail ↓ (서윤(오른쪽) 머리 위)
  - read_order: 2

### panel_065
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain deep navy-black night blur above his head) as calm, empty background for two stacked bubbles, and the bottom sixth (plain dark charcoal hoodie shadow) as calm, empty background for the ending caption.
- gap_after: 0
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឯងមិនដឹងឈ្មោះផង។"
  - text_ko: "이름 몰랐잖아."
  - place: x 40% · y 7% · w 39% · tail ↓ (도하(가운데 얼굴) 머리 위 — 1줄)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឯងហៅខ្ញុំថា «អាវ៉ែនតា»។"
  - text_ko: "넌 날 '안경'이라고 불렀어."
  - place: x 57% · y 18% · w 43% · tail ↓ (도하 — 1줄, «អាវ៉ែនតា» 한 덩어리)
  - read_order: 2
- bubble_3:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៦ —"
  - text_ko: "— 6화에 계속 —"
  - place: x 50% · y 92% · w 50% (엔딩 캡션, 아래 1/6 후드 그림자)
  - read_order: 3

---

## 레터러 노트 (회차 전체)

- 말풍선 92개 = 대본 대사·생각 줄 91개(1:1, 나누거나 합치지 않음) + 엔딩 캡션 1개(P65) · 크메르어 효과음 3개(P35 예비 종 `ក្រិង… ក្រិង…`, P37 딩동 `ឌីងដុង`, P40 계단 발소리 `ទុប… ទុប…`, 대본 `KM 효과음` 그대로) · 소품 글씨(env) 0개(대본에 「…」 줄 없음 — 쪽지·클립보드·제보함·시계·CCTV 모니터·간판·영수증은 모두 무지, 쪽지 내용은 P17~P19 하람의 낭독 말풍선으로만).
- `text_km`은 대본 `KM:` 줄을 스크립트로 글자 그대로 복사했다(손으로 다시 치지 않음). 같은 글자로 이어지는 줄: P35 `គេឲ្យខ្ញុំ។` ↔ P36 `«គេឲ្យខ្ញុំ»…` ↔ P49 `អ្នកណាឲ្យឯង?`, P39 `ហួសម៉ោង១០ហើយ។ ប្រការ៣។`(ep02 P02~03 그대로), P57 `មួយនេះ ផុតកំណត់ថ្ងៃនេះ។` ↔ P60 `មួយនេះ មិនផុតកំណត់ថ្ងៃនេះទេ។`, P21 `ប្ដឹងខ្លួនឯង` ↔ P26 `ប្ដឹងខ្លួនឯង`(태민 `សារភាពខ្លួន`과 구분), P17 `ផ្លូវបួនមុខ សុលនែដុង`(ep03·ep04와 같은 글자).
- 무대사(`silent: true`) 10패널: P08, P14, P20, P38, P43, P47, P51, P52, P56, P61. **P37은 효과음 `ឌីងដុង`만 있는 무대사 컷**이라 `silent`를 쓰지 않고 art_space(위 1/5)와 sfx_1만 적었다(샷리스트 "bubbles 0 + sfx 1"과 같음). P35·P40은 효과음 + 대사.
- 패널당 말풍선: P45만 3개(사장님 가운데 위 → 서윤 오른쪽·도하 왼쪽 같은 높이 y 27, 세 개 모두 한 낱말 1줄). P65 = 도하 2개(위 1/4) + 엔딩 캡션(아래 1/6, y 92). 나머지는 1~2개.
- **반전 A 낭독(P17~P19):** 하람의 소리 내 읽기를 말풍선 3개(패널당 1개)로 나눈 대본 그대로: P17 장소·대상(2줄, 지명 `ផ្លូវបួនមុខ សុលនែដុង`은 한 줄) → P18 `«គឺខ្ញុំ។»`(분할 위 칸) → **P19 `«ឆ្នាំទី២ ថ្នាក់ទី១ ប៉ែក ដូហា។»` 1줄, 이름이 끝에 떨어진다**(9:16 위 1/5, 꼬리 ↙ 하람). 모두 dialogue(낭독).
- **반전 B(P63~P65):** P63 `ខ្ញុំជាអ្នកបត់?` / `អឺ។` 각 1줄, P64 서윤 쪽(오른쪽) 계단식 2개, **P65 `ឯងមិនដឹងឈ្មោះផង។` → `ឯងហៅខ្ញុំថា «អាវ៉ែនតា»។` 각 1줄**(둘째 풍선에 «អាវ៉ែនតា», 꼬리 ↓ 도하 얼굴), 캡션 `— នៅមានតក្នុងភាគទី ៦ —` 아래 1/6.
- 종류: thought 8 = P04, P09, P12(2), P16(2), P36(2)(KM `(គិត)` 줄과 1:1) · shout 1 = P25 태민 · memory 12 = P53(엄마·8세 서윤), P54(2), P55, P57(2), P58, P59(2), P60(2) · narration 1 = P65 캡션 · 나머지 70 dialogue(P17~P19 낭독, P41~P42 서윤 업무 존댓말 포함).
- 프레임 밖·가장자리 꼬리(샷리스트 §8 그대로): P03 서윤 → 아래 전경(↓), P06 서윤 → 오른쪽 아래(↘), P28 도하 → 왼쪽 아래 전경 어깨(↙), P35 도하 → 아래 왼쪽 계단(↙), P41 서윤 → 왼쪽 전경 문틀(↙), P42 서윤 → 오른쪽 위 가장자리(↗), P50 도하 → 위 가장자리(↑), P53 엄마 → 아래 유리문 안쪽(↘) · 8세 서윤 → 유리문(↙).
- 효과음: P35 종 = 오른쪽 가장자리 창 쪽(x 80 · y 17, 도하 풍선과 같은 높이 = 동시), P37 딩동 = 후드 위 문틀(x 62 · y 9), P40 발소리 = 왼쪽 직원 문 위(x 24 · y 8, 서윤 풍선보다 먼저 읽힘). 세 개 모두 각 패널 art_space 안.
- `gap_after`(샷리스트 §4 그대로): 0 마지막(P65) · 30 촘촘 · 80 보통 · 160 비트 끊기 · 320 시간 점프·기억의 문(P03 월 → 화, P35 낮 → 수 00:20, P52 현재 → 9년 전, P61 9년 전 → 현재).

### 폭·줄 수 측정 (2026-11-23)
- 크메르어는 **띄어쓰기에서만 끊긴다고 보는 최악의 경우**로, 용어집의 여러 낱말 이름(`ប៉ែក ដូហា`, `មិត្ត ប៉ែក ដូហា`, `ឆែ ហារ៉ាម`, `គូ តែមីន`, `ឆ្នាំទី២ ថ្នាក់ទី១`, `ផ្លូវបួនមុខ សុលនែដុង`)은 한 덩어리로 쟀다. Battambang(외침 Koulen) 글꼴, 뷰어 수치 그대로(글자 3.4cqw·외침 4cqw, 안쪽 여백 0.7em/1.2em, 줄 간격 1.7, 테두리 3px·외침 4px, `box-sizing: border-box`라 w = 풍선 상자 전체 폭).
- HarfBuzz로 폭을 잰 뒤 w를 정하고(글자 폭 + 여백 + 2.5% 여유), **실제 뷰어 CSS를 headless Chrome에 그려 320 · 400 · 720 px 패널 폭에서 다시 확인했다**(낱말마다 줄바꿈 금지 span으로 최악의 경우 재현). 세 폭 모두: 모든 풍선 2줄 이하, 넘침 0, 패널 안, art_space 상자 안, 같은 패널 풍선끼리 겹침 0.
- 결과: 92개 중 **2줄 17개**(P06, P07 예린, P10 하람, P11, P13 하람, P17, P23(2), P25 외침, P26 건우, P28 서윤, P30 도하, P31 서윤, P33 서윤, P42 사장님, P46 사장님, P49 서윤), 나머지 75개 1줄. 3줄 이상 0. w 17~64%, 모두 85% 이하.
- **뷰어 폭 한계에 맞춤:** 현재 `viewer-km.html`의 풍선은 `left: x%` 절대 위치 + 자동 폭이라 상자 폭이 **(100 − x)%를 넘지 못한다**(Chrome에서 확인: x 70 · w 60 → 실제 30%). 그래서 모든 풍선을 **w ≤ 100 − x**로 잡았다(오른쪽 화자의 긴 줄은 풍선을 가운데 쪽에 두고 꼬리 ↘로 화자를 가리킴). 이렇게 하면 지금 뷰어와, 나중에 이 한계를 고친 뷰어에서 똑같이 그려진다.
- 꼬리 끝이 art_space 아래 선을 조금 넘는 곳(화자를 가리키는 꼬리라 의도): P21 b2·P39 b2·P44 b2·P59 b2(4:3, 위 2/5 선 아래 약 2.6%), P25 외침(위 1/3 선 아래 약 2.2%), P31 b2(0.6%). 풍선 몸통은 모두 art_space 안.

### 남은 확인 (배치 확인 단계, episode-compositor)
- **P49:** 샷리스트가 "가로등 빛 덩어리를 피해 반대쪽"이라고만 하고 빛의 좌우를 정하지 않았다. 두 풍선을 왼쪽 띠(x 10~55%)에 두었다. 그림에서 가로등 빛이 왼쪽 위에 그려지면 두 풍선을 오른쪽으로 옮긴다. 단 뷰어 폭 한계(w ≤ 100 − x) 때문에 b1(w 42)은 x 58, b2(w 45)는 x 55까지만 갈 수 있다(꼬리는 ↙로 바꿔 서윤을 가리킴).
- **분할 패널 P09·P18·P22:** 풍선은 위 칸 윗부분(P09 위 17.5% 안, P18 위 25% 안, P22 위 31% 안). 위 칸 높이가 그림에서 더 작게 나오면 y만 올린다(칸 사이 흰 홈 위에 걸치지 않게).
- **P35 종 효과음**은 창 쪽 오른쪽 가장자리(x 80 · y 17)로 짐작해 두었다. 서윤(오른쪽 위 높은 칸)의 머리가 그 높이까지 올라오면 x 84 · y 10 정도로 옮긴다.
- **P40** 발소리는 직원 문(왼쪽) 위 벽으로 두었다. 시계(중간 높이)는 비어 있다. 직원 문이 오른쪽에 그려지면 효과음과 풍선의 x를 맞바꾼다.
- **P53:** 엄마 풍선(1줄, x 14~66%)이 위 1/4 하늘 대부분을 가로지른다. 눈송이 외에 중요한 것이 없는 하늘이라 그대로 두었다.
