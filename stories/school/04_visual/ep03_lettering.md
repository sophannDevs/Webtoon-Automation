# EP03 레터링 명세 — 『유통기한 연애』 3화 「상담 사안」 (letterer · Khmer edition)

- 작성: letterer · 2026-11-22 · 스킬 `webtoon-khmer-edition` §3 + `webtoon-assembly`(레터링 섹션 중 종류·읽기 순서·과밀 규칙만)
- 입력: `03_episode/ep03_script_final.md`(native-khmer 리뷰 READY본, KM 줄 원문 그대로 — 손으로 다시 치지 않고 스크립트로 복사), `ep03_beatsheet.md`(패널 번호 고정 P01~P60), `04_visual/ep03_shotlist.md` v1, `04_visual/style-bible.md` v1.2 §10, 형식 기준 `04_visual/ep02_lettering.md`
- **이미지에는 글자 없음.** 말풍선·효과음·캡션은 뷰어(`km_tool.py build`)가 그린다. 각 패널의 `art_space`는 prompt-smith가 "calm, empty background"로 프롬프트에 넣는다(style-bible §10-3).
- `place`: x/y = 풍선 중심, w = 최대 폭(패널 폭 대비 %). 꼬리 ↙↓↘ = 아래쪽 꼬리(화자 왼쪽/가운데/오른쪽), ↖↑↗ = 위쪽 꼬리. thought·narration은 꼬리 없음. sfx의 `size` = 글자 크기(패널 폭 대비 %), `rot` = 각도.
- **`aspect`·`art_space`·`gap_after`(px)는 `04_visual/ep03_shotlist.md` v1에서 그대로 옮겼다**(art_space는 샷리스트의 영어 문장 원문 = prompt-smith가 쓰는 문장). `place`의 좌우·높이는 샷리스트 composition의 인물 위치(screen-left/right)와 art_space 안에 맞췄다.
- `text_ko`는 참고용, 화면에 나오지 않는다.

---

### panel_001
- aspect: 9:16
- art_space: Keep the top sixth of the frame (plain fluorescent ceiling glow above her head) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ព្រោះតែខ្ញុំ?"
  - text_ko: "…나 때문에?"
  - place: x 50% · y 8% · w 40% · tail ↓ (서윤(가운데), 위 1/6 형광 천장)
  - read_order: 1

### panel_002
- aspect: 3:4
- art_space: Keep the top-left fifth of the frame, above Doha's head (plain fluorescent ceiling and the soft dark top of the window glass), as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "…ស្អែកជួបគ្នា។"
  - text_ko: "…내일 봐."
  - place: x 30% · y 9% · w 36% · tail ↓ (도하(가운데 왼쪽) 머리 위, 오른쪽 위 시계는 비움)
  - read_order: 1

### panel_003
- aspect: 9:16
- art_space: Keep a small patch at the top right of the frame (plain dark glass above the door) as calm, empty background for the door-chime sound effect.
- gap_after: 160
- sfx_1:
  - text_km: "ឌីងដុង"
  - text_ko: "딩동"
  - place: x 80% · y 7% · size 7% · rot -6 (유리문 위 어두운 유리, 오른쪽 위)

### panel_004
- aspect: 4:3
- silent: true
- gap_after: 80

### panel_005
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dark shadow of the ceiling) as calm, empty background — room for one long bubble or two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(속삭임)
  - type: dialogue
  - text_km: "«មកពីបន្ទប់អានសៀវភៅវិញ ចាក់សោទ្វារឲ្យជាប់ណាកូន ហើយសឹមគេង។»"
  - text_ko: "'독서실 끝나면 문 꼭 잠그고 자.'"
  - place: x 50% · y 13% · w 76% · tail ↓ (입가(가운데) 위 어두운 천장, 속삭임 = dialogue)
  - read_order: 1

### panel_006
- aspect: 1:1
- art_space: Keep the top two-fifths of the frame (plain dark wooden desk surface) as calm, empty background for two stacked thought bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ប្រាប់ម៉ាក់ថា បន្ទប់អានសៀវភៅ។ ប្រាប់សាលាថា មានសង្សារ។"
  - text_ko: "엄마한텐 독서실. 학교엔 남자친구."
  - place: x 45% · y 12% · w 74% (생각 1, 책상 면 위쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "…ពាក្យកុហក ចេះតែកើនមួយៗ។"
  - text_ko: "…거짓말만 하나씩 늘어."
  - place: x 58% · y 31% · w 50% (생각 2, 필통 위)
  - read_order: 2

### panel_007
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dark floor and pillow edge above her head) as calm, empty background for two stacked thought bubbles.
- gap_after: 320
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "«ដើម្បីមកទីនេះ»…"
  - text_ko: "'여기 오려고'…"
  - place: x 34% · y 7% · w 34% (생각 1, 베개 위 바닥)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ទីនេះ គឺឯណា? សាលា? …ផ្លូវបួនមុខ សុលនែដុង?"
  - text_ko: "여기가 어딘데. 학교? …솔내동 사거리?"
  - place: x 58% · y 20% · w 62% (생각 2)
  - read_order: 2

### panel_008
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain cream upper wall and ceiling of the corridor) as calm, empty background — Seoyun's bubble upper-right, Doha's upper-left.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឯងមកឈរនៅទីនេះធ្វើអី?"
  - text_ko: "…너 왜 여기 있어?"
  - place: x 66% · y 7% · w 46% · tail ↘ (서윤(오른쪽 전경 뒷모습), 먼저 읽힘)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឆែ ហារ៉ាម ចូលទៅហើយ។"
  - text_ko: "채하람 들어갔어."
  - place: x 32% · y 16% · w 42% · tail ↙ (도하(왼쪽 창가 중경))
  - read_order: 2

### panel_009
- aspect: 3:4
- art_space: Keep the top third of the frame (the dark upper door edges and plain cream wall above the gap) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំ ឆែ ហារ៉ាម ប្រធានក្រុមវិន័យ។"
  - text_ko: "선도부장 채하람입니다."
  - place: x 44% · y 8% · w 56% · tail ↓ (하람(가운데 문틈) 위, 문 가장자리 위쪽 크림 벽)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំមានរឿងត្រូវរាយការណ៍ជូន ចាស។"
  - text_ko: "보고드릴 사안이 있습니다."
  - place: x 56% · y 21% · w 54% · tail ↓ (하람)
  - read_order: 2

### panel_010
- aspect: 3:4
- art_space: Keep the top third of the frame on the left (plain cream wall behind her head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "នេះជាចម្លើយផ្ទាល់របស់ សិស្ស ហាន សឺយូន ថ្នាក់ទី១។"
  - text_ko: "1반 한서윤 학생, 본인 진술입니다."
  - place: x 40% · y 9% · w 66% · tail ↘ (하람 옆얼굴(가운데 오른쪽), 왼쪽 위 크림 벽)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "យប់ថ្ងៃអង្គារ ពីម៉ោង៩ ៥៧នាទី ដល់ម៉ោង១ ចេញក្រៅដោយគ្មានអាណាព្យាបាល។"
  - text_ko: "화요일 밤 9시 57분부터 1시까지, 보호자 없이 외출."
  - place: x 38% · y 24% · w 64% · tail ↘ (하람)
  - read_order: 2

### panel_011
- aspect: 3:4
- art_space: Keep the top half of the TOP frame (plain soft cream corridor wall above her eye) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "…ពាក្យនោះ ចេញពីមាត់ខ្ញុំខ្លួនឯង។"
  - text_ko: "…내 입으로 한 말이야."
  - place: x 40% · y 12% · w 54% (위 칸(약 60%)의 윗부분 크림 벽, 눈 위)
  - read_order: 1

### panel_012
- aspect: 4:3
- art_space: Keep the top third of the frame across its width (plain cream wall and the upper blinds) as calm, empty background — the teacher's bubble upper-left, Haram's longer bubble upper-right.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "មានសង្សារ មិនមែនជាការល្មើសវិន័យសាលាទេ ឆែ ហារ៉ាម។"
  - text_ko: "연애는 교칙 위반 아니다, 채하람."
  - place: x 23% · y 17% · w 44% · tail ↙ (담임(왼쪽 책상) — 3줄)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "មិនមែនជាការល្មើសទេ តែជារឿងដែលត្រូវប្រឹក្សា។ ព្រោះជាការចេញក្រៅយប់ជ្រៅ ដោយគ្មានអាណាព្យាបាល។"
  - text_ko: "위반이 아니라 상담 사안입니다. 보호자 없는 심야 외출이니까요."
  - place: x 72% · y 20% · w 54% · tail ↘ (하람(오른쪽, 서 있음) — 긴 줄 3~4줄, 위 약 40% 필요: 배치 확인)
  - read_order: 2

### panel_013
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall behind Haram's head) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "…និយាយត្រូវដែរ។"
  - text_ko: "…틀린 말은 아니네."
  - place: x 26% · y 8% · w 34% · tail ↙ (담임 손(왼쪽 아래 서랍) 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ចំណែករឿងព័ត៌មាននោះ បើពិនិត្យច្បាស់ហើយ ខ្ញុំនឹងរាយការណ៍ដាច់ដោយឡែក។"
  - text_ko: "제보 건은, 확인되면 따로 보고드리겠습니다."
  - place: x 56% · y 22% · w 66% · tail ↓ (하람(가운데 위) 머리 위)
  - read_order: 2

### panel_014
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain cream upper corridor wall above Haram's head) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំធ្វើតាមនីតិវិធីហើយ។"
  - text_ko: "절차대로 했습니다."
  - place: x 50% · y 8% · w 44% · tail ↓ (하람(가운데) 머리 위, 위 1/5)
  - read_order: 1

### panel_015
- aspect: 4:3
- art_space: Keep the top third of the frame (the plain empty green chalkboard and cream wall above the teacher) as calm, empty background for two bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ស្ងាត់សិន។"
  - text_ko: "자, 조용."
  - place: x 20% · y 10% · w 24% · tail ↘ (담임(가운데 교탁))
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "ហាន សឺយូន ម៉ោងសម្រាកថ្ងៃត្រង់ មកបន្ទប់ប្រឹក្សា។"
  - text_ko: "한서윤, 점심시간에 상담실로 와."
  - place: x 64% · y 22% · w 60% · tail ↓ (담임, 칠판 앞)
  - read_order: 2

### panel_016
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall above the lockers) as calm, empty background — Taemin's bubble left, Yerin's right.
- gap_after: 30
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "បន្ទប់ប្រឹក្សា? ហាន សឺយូន ហ្នឹងហ្អេស?"
  - text_ko: "상담실? 한서윤이?"
  - place: x 32% · y 9% · w 52% · tail ↙ (태민(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 예린
  - type: dialogue
  - text_km: "ស្ងាត់មាត់!"
  - text_ko: "쉿!"
  - place: x 76% · y 22% · w 28% · tail ↘ (예린(오른쪽))
  - read_order: 2

### panel_017
- aspect: 3:4
- art_space: Keep the top fifth of the frame (the plain empty chalkboard above his head) as calm, empty background.
- gap_after: 0
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ហើយថ្ងៃនេះ គ្រូនឹងទូរស័ព្ទទៅម្ដាយឯង។"
  - text_ko: "그리고 오늘 중으로 어머님께 전화드린다."
  - place: x 50% · y 9% · w 62% · tail ↓ (담임(가운데) 머리 위 칠판)
  - read_order: 1

### panel_018
- aspect: 3:4
- art_space: Keep the top third of the frame on the left (plain cream wall and soft window light beside her head) as calm, empty background for two stacked thought bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "បើគ្រូទូរស័ព្ទទៅម៉ាក់…"
  - text_ko: "엄마한테 전화 가면…"
  - place: x 32% · y 7% · w 46% (생각 1, 왼쪽 위 크림 벽)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "រឿងបន្ទប់អានសៀវភៅ… ធ្លាយអស់។"
  - text_ko: "독서실 거짓말, 다 들켜."
  - place: x 36% · y 20% · w 50% (생각 2, 얼굴 왼쪽 옆)
  - read_order: 2

### panel_019
- aspect: 4:3
- art_space: Keep the left half of the frame above the desk (soft plain cream wall and floor, top 55%) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "ហា៎! ឯងបត់ប៉ុន្មានហើយ?"
  - text_ko: "헐. 너 몇 개째야?"
  - place: x 27% · y 13% · w 44% · tail ↘ (예린(오른쪽) 쪽, 왼쪽 위 크림 벽)
  - read_order: 1
- bubble_2:
  - speaker: 예린
  - type: dialogue
  - text_km: "ប្រឹក្សា មិនអីសោះ! ខ្ញុំក៏ធ្លាប់ដែរ!"
  - text_ko: "상담 별거 아냐! 나도 받아 봤어."
  - place: x 30% · y 38% · w 52% · tail ↘ (예린, 학 줄보다 위)
  - read_order: 2

### panel_020
- aspect: 4:3
- art_space: Keep the top third of the frame across its width (plain cream wall and curtains) as calm, empty background — Taemin's bubble left, Yerin's right.
- gap_after: 80
- bubble_1:
  - speaker: 태민
  - type: dialogue
  - text_km: "ចុះឯង ទៅប្រឹក្សារឿងស្រលាញ់គេម្ខាងតើ។"
  - text_ko: "넌 짝사랑 상담이었잖아."
  - place: x 30% · y 13% · w 50% · tail ↓ (태민(왼쪽 뒤))
  - read_order: 1
- bubble_2:
  - speaker: 예린
  - type: shout
  - text_km: "ហេ៎!"
  - text_ko: "야!"
  - place: x 78% · y 15% · w 20% · tail ↓ (예린(오른쪽) 외침)
  - read_order: 2

### panel_021
- aspect: 3:4
- art_space: Keep the top-right fifth of the frame (plain cream wall above the classmates) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "…ក្នុងលេសនេះ មានមនុស្សពីរនាក់។"
  - text_ko: "…알리바이엔 사람이 둘이야."
  - place: x 66% · y 9% · w 52% (서윤 시점 속말, 오른쪽 위 크림 벽)
  - read_order: 1

### panel_022
- aspect: 4:3
- art_space: Keep the top-left third of the frame (plain dim stairwell wall above the stacked desks) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ចូលជាមួយខ្ញុំផង។"
  - text_ko: "같이 들어가 줘."
  - place: x 30% · y 12% · w 38% · tail ↘ (서윤(오른쪽)을 향해, 왼쪽 위 계단 벽)
  - read_order: 1

### panel_023
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall above both heads) as calm, empty background — Seoyun's bubble right, Doha's left.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…តាមកិច្ចសន្យា។"
  - text_ko: "…계약상."
  - place: x 68% · y 8% · w 38% · tail ↘ (서윤(오른쪽 옆얼굴))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "តាមកិច្ចសន្យា។"
  - text_ko: "계약상."
  - place: x 30% · y 19% · w 36% · tail ↙ (도하(왼쪽 가장자리))
  - read_order: 2

### panel_024
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall and soft window glow above her head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ទីមួយ នៅមុខលោកគ្រូ កុំនិយាយអីទាំងអស់។"
  - text_ko: "첫째, 선생님 앞에선 아무 말도 하지 마."
  - place: x 46% · y 9% · w 64% · tail ↓ (서윤(가운데) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "បើឯងកុហកមិនកើត។"
  - text_ko: "거짓말 못 하겠으면."
  - place: x 56% · y 23% · w 38% · tail ↓ (서윤)
  - read_order: 2

### panel_025
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain hazy window glow above his head) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំមិនកុហកទេ។"
  - text_ko: "거짓말은 안 해."
  - place: x 50% · y 8% · w 36% · tail ↓ (도하(가운데) 머리 위 창빛)
  - read_order: 1

### panel_026
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stairwell wall and the grey rooftop door's plain upper part) as calm, empty background — Seoyun's bubble right, Doha's left.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អញ្ចឹងហើយ បានជាខ្ញុំឲ្យឯងនៅស្ងៀម។"
  - text_ko: "…그러니까 입 다물고 있으라고."
  - place: x 64% · y 9% · w 56% · tail ↘ (서윤(오른쪽, 앞))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "បើគេសួរ ខ្ញុំឆ្លើយ។"
  - text_ko: "물어보면 대답은 해."
  - place: x 30% · y 22% · w 40% · tail ↙ (도하(왼쪽))
  - read_order: 2

### panel_027
- aspect: 9:16
- silent: true
- gap_after: 160

### panel_028
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall around the clock above the door) as calm, empty background for two bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "គ្រូហៅតែ ហាន សឺយូន ទេតើ។"
  - text_ko: "한서윤만 불렀는데."
  - place: x 62% · y 8% · w 50% · tail ↓ (담임(프레임 밖 전경 아래) — 꼬리 = 아래 가장자리, 시계 겹침 허용)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ព្រោះខ្ញុំជាសង្សារគេ បាទ។"
  - text_ko: "남자친구라서요."
  - place: x 30% · y 21% · w 42% · tail ↙ (도하(왼쪽 문가))
  - read_order: 2

### panel_029
- aspect: 4:3
- art_space: Keep the top third of the frame on the left (plain cream wall above the teacher's shoulder) as calm, empty background — keep the bubble off the frosted-glass silhouette.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "…អង្គុយចុះ។ ទាំងពីរនាក់។"
  - text_ko: "…앉아. 둘 다."
  - place: x 19% · y 14% · w 30% · tail ↙ (담임 어깨(왼쪽 전경) — 유리문 실루엣(가운데~약간 왼쪽) 피함, 풍선 오른쪽 끝 약 34%)
  - read_order: 1

### panel_030
- aspect: 3:4
- art_space: Keep the top third of the frame (the plain upper part of the white blinds above his head) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ឆែ ហារ៉ាម រាយការណ៍ថា យប់ថ្ងៃអង្គារ ពីម៉ោង៩ ៥៧នាទី ដល់ម៉ោង១។"
  - text_ko: "채하람 보고로는 화요일 밤, 9시 57분부터 1시."
  - place: x 50% · y 10% · w 70% · tail ↓ (담임(가운데) 위 블라인드 윗부분)
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "នៅឯណា ធ្វើអី?"
  - text_ko: "어디서, 뭐 했어?"
  - place: x 60% · y 25% · w 30% · tail ↓ (담임)
  - read_order: 2

### panel_031
- aspect: 3:4
- silent: true
- gap_after: 30

### panel_032
- aspect: 3:4
- art_space: Keep the top fifth of the frame (plain cream wall above the door behind him) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ផ្លូវបួនមុខ សុលនែដុង បាទ។"
  - text_ko: "솔내동 사거리요."
  - place: x 50% · y 8% · w 46% · tail ↓ (도하(가운데) 머리 위)
  - read_order: 1

### panel_033
- aspect: 1:1
- silent: true
- gap_after: 160

### panel_034
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain cream wall above his head) as calm, empty background for two stacked bubbles.
- gap_after: 320
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំទៅទីនោះរាល់យប់ បាទ។"
  - text_ko: "제가 밤마다 거기 가요."
  - place: x 44% · y 7% · w 46% · tail ↓ (도하(가운데) 머리 위 크림 벽)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ទៅមើល សឺយូន។"
  - text_ko: "서윤이 보러요."
  - place: x 57% · y 16% · w 36% · tail ↓ (도하, 단독 반전 — 두 풍선만)
  - read_order: 2

### panel_035
- aspect: 3:4
- art_space: Keep the top third of the frame (the plain upper part of the white blinds) as calm, empty background — the teacher's bubble left, Doha's short bubble right.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "…ប៉ែក ដូហា ឯងក៏ចូលកំណត់ត្រាដែរ។"
  - text_ko: "…백도하, 너도 기록이다."
  - place: x 38% · y 9% · w 54% · tail ↓ (담임(가운데 왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "បាទ។"
  - text_ko: "네."
  - place: x 82% · y 23% · w 20% · tail ↘ (도하 어깨(오른쪽 전경))
  - read_order: 2

### panel_036
- aspect: 3:4
- art_space: Keep the top third of the frame (the plain upper part of the white blinds) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ម្ដាយឯងដឹងទេ?"
  - text_ko: "어머님은 아시니?"
  - place: x 40% · y 8% · w 32% · tail ↙ (담임(가운데, 왼쪽 서윤 쪽으로 기울어짐))
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "ឲ្យគ្រូទូរស័ព្ទទៅឥឡូវតែម្ដងទេ?"
  - text_ko: "지금 전화드릴까?"
  - place: x 50% · y 21% · w 52% · tail ↓ (담임)
  - read_order: 2

### panel_037
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream wall above the frosted door) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ម៉ាក់ខ្ញុំ…"
  - text_ko: "엄마는…"
  - place: x 40% · y 8% · w 28% · tail ↓ (서윤(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "គាត់គិតថា ខ្ញុំនៅបន្ទប់អានសៀវភៅ ចាស។"
  - text_ko: "제가 독서실에 있는 줄 알아요."
  - place: x 56% · y 21% · w 58% · tail ↓ (서윤, 유리문 위 크림 벽)
  - read_order: 2

### panel_038
- aspect: 4:3
- art_space: Keep the top third of the frame (plain cream wall around the clock above the door) as calm, empty background.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "…ប្រាកដជាមិនហ៊ានប្រាប់ថា ទៅជួបសង្សារទេ។"
  - text_ko: "…남자친구 만난다곤 말 못 했겠네."
  - place: x 50% · y 14% · w 60% · tail ↓ (담임(프레임 밖, 카메라 쪽) — 꼬리 = 아래 가장자리, 시계 겹침 허용)
  - read_order: 1

### panel_039
- aspect: 4:3
- art_space: Keep the left half of the frame (the plain soft white blinds, from top to about 70% down) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "លើកនេះម្ដង គ្រូពន្យារការទាក់ទងអាណាព្យាបាលសិន។"
  - text_ko: "보호자 연락은 이번만 미룬다."
  - place: x 27% · y 17% · w 50% · tail ↘ (담임(오른쪽 위 얼굴), 왼쪽 블라인드)
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "តែកំណត់ត្រាប្រឹក្សា គ្រូនឹងទុក។"
  - text_ko: "대신 상담 기록은 남긴다."
  - place: x 27% · y 46% · w 46% · tail ↘ (담임)
  - read_order: 2

### panel_040
- aspect: 3:4
- art_space: Keep the top third of the frame (the plain upper part of the white blinds) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "ត្រឹមសប្ដាហ៍ប្រឹក្សាអាជីព ឯងត្រូវប្រាប់ម្ដាយដោយខ្លួនឯង។"
  - text_ko: "진로 상담 주간까지, 어머님께 네가 직접 말씀드려."
  - place: x 50% · y 10% · w 74% · tail ↓ (담임(가운데) 위 블라인드)
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "ពេលនោះ គ្រូនឹងឆែកមើល។"
  - text_ko: "그때 내가 확인한다."
  - place: x 56% · y 25% · w 46% · tail ↓ (담임)
  - read_order: 2

### panel_041
- aspect: 4:3
- art_space: Keep the top-right part of the frame (plain cream wall above Seoyun and to the right of the clock, top third) as calm, empty background — keep the bubble off the frosted-glass silhouette.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ចាស។"
  - text_ko: "…네."
  - place: x 80% · y 12% · w 22% · tail ↓ (서윤(오른쪽) 위, 시계 오른쪽 — 유리문 실루엣 피함)
  - read_order: 1

### panel_042
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper corridor wall) as calm, empty background for two stacked bubbles on the right.
- gap_after: 30
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…«សឺយូន»?"
  - text_ko: "…서윤이?"
  - place: x 64% · y 8% · w 28% · tail ↘ (서윤(오른쪽, 앞))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ហៅខ្ញុំ សឺយូន តាំងពីពេលណា?"
  - text_ko: "언제부터 서윤이야."
  - place: x 62% · y 20% · w 48% · tail ↘ (서윤)
  - read_order: 2

### panel_043
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper corridor wall above his head) as calm, empty background for two stacked bubbles.
- gap_after: 80
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "នៅមុខលោកគ្រូតើ។"
  - text_ko: "선생님 앞이잖아."
  - place: x 42% · y 8% · w 36% · tail ↓ (도하(가운데) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "បើមិនចូលចិត្ត ហៅ ហាន សឺយូន វិញ។"
  - text_ko: "싫으면 다시 한서윤."
  - place: x 56% · y 21% · w 56% · tail ↓ (도하)
  - read_order: 2

### panel_044
- aspect: 3:4
- art_space: Keep the top third of the frame (plain cream upper corridor wall above her head) as calm, empty background for two stacked bubbles.
- gap_after: 160
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…បានហើយ។"
  - text_ko: "…됐어."
  - place: x 40% · y 8% · w 26% · tail ↓ (서윤(가운데))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "សៀវភៅលំហាត់ខុស ស្អែកខ្ញុំឲ្យ។"
  - text_ko: "오답노트, 내일 줄게."
  - place: x 56% · y 20% · w 52% · tail ↓ (서윤)
  - read_order: 2

### panel_045
- aspect: 3:4
- art_space: Keep the top fifth of the frame on the left (plain cream wall above Geonu's shoulder) as calm, empty background.
- gap_after: 30
- bubble_1:
  - speaker: 건우
  - type: dialogue
  - text_km: "ប្រធាន… រឿងថ្នាក់ទី១ គេថាចប់ត្រឹមប្រឹក្សារឿងសង្សារ។"
  - text_ko: "부장, 1반 건… 연애 상담으로 끝났대요."
  - place: x 30% · y 9% · w 52% · tail ↙ (건우(왼쪽 가장자리 어깨) — 위 1/5 왼쪽, 하람 옆얼굴(가운데 위) 피함)
  - read_order: 1

### panel_046
- aspect: 1:1
- art_space: Keep the top quarter of the frame (plain soft cream wall above her eyes) as calm, empty background.
- gap_after: 320
- bubble_1:
  - speaker: 하람(혼잣말)
  - type: dialogue
  - text_km: "…គ្រាន់តែរាយការណ៍ការពិតបានហើយ។"
  - text_ko: "…사실만 보고하면 돼."
  - place: x 50% · y 11% · w 58% · tail ↓ (하람 눈(가운데 위) 위, 혼잣말 = dialogue)
  - read_order: 1

### panel_047
- aspect: 9:16
- art_space: Keep a patch at the top of the frame (plain deep navy sky beside the lit school windows) as calm, empty background for the bell sound effect.
- gap_after: 160
- sfx_1:
  - text_km: "ក្រិង… ក្រិង…"
  - text_ko: "야자 끝 종"
  - place: x 28% · y 6% · size 7% · rot -4 (남색 하늘, 불 켜진 학교 창 옆 (꼭대기 왼쪽))

### panel_048
- aspect: 3:4
- art_space: Keep the top third of the frame (plain dim stockroom ceiling and the upper wall above the boxes) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 사장님(통화)
  - type: dialogue
  - text_km: "ចាស ក្រុមហ៊ុនមេ…"
  - text_ko: "네, 본사요…"
  - place: x 40% · y 8% · w 36% · tail ↓ (사장님(가운데, 등) — 휴대폰 쪽, 통화)
  - read_order: 1
- bubble_2:
  - speaker: 사장님(통화)
  - type: dialogue
  - text_km: "វេនយប់ ខ្ញុំនៅមើលហាងខ្លួនឯង ចាស។"
  - text_ko: "야간은 제가 서요."
  - place: x 54% · y 21% · w 54% · tail ↓ (사장님 통화)
  - read_order: 2

### panel_049
- aspect: 4:3
- art_space: Keep the top third of the frame (plain dim stockroom ceiling) as calm, empty background — the owner's bubble left, Seoyun's right.
- gap_after: 30
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "មកហើយ? ញ៉ាំបាយហើយឬនៅ?"
  - text_ko: "왔어? 밥은?"
  - place: x 28% · y 12% · w 50% · tail ↓ (사장님(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…អ្នកណាហ្នឹង ថៅកែ?"
  - text_ko: "…누구예요?"
  - place: x 72% · y 25% · w 36% · tail ↓ (서윤(오른쪽 문가))
  - read_order: 2

### panel_050
- aspect: 3:4
- art_space: Keep the top-left fifth of the frame (plain dim stockroom wall) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 사장님
  - type: dialogue
  - text_km: "គ្មានអីទេ។ ញ៉ាំសិនទៅ ចាំធ្វើការ។"
  - text_ko: "아무것도 아냐. 먹고 해."
  - place: x 26% · y 9% · w 42% · tail ↘ (사장님 등(오른쪽 뒤, 계단 쪽))
  - read_order: 1

### panel_051
- aspect: 4:3
- art_space: Keep the top third of the frame on the right half (plain fluorescent ceiling and the soft tops of the cigarette shelf) as calm, empty background for two stacked thought bubbles, and a small plain patch near the scanner's red light for the sound effect.
- gap_after: 160
- sfx_1:
  - text_km: "ពីប!"
  - text_ko: "삑—"
  - place: x 36% · y 20% · size 5.5% · rot -8 (스캐너 빨간 불 근처 — 배치 확인 때 불빛 옆으로)
- bubble_1:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "ក្នុងកំណត់ត្រា មានតែ ផ្លូវបួនមុខ សុលនែដុង និងសង្សារ។"
  - text_ko: "기록엔 솔내동 사거리, 남자친구."
  - place: x 70% · y 13% · w 56% (생각 1, 오른쪽 위 형광 천장)
  - read_order: 1
- bubble_2:
  - speaker: 서윤(생각)
  - type: thought
  - text_km: "គ្មានហាង២៤ម៉ោងទេ។"
  - text_ko: "편의점은 없어."
  - place: x 70% · y 33% · w 40% (생각 2 — 오른쪽 위 약 40% 필요: 배치 확인)
  - read_order: 2

### panel_052
- aspect: 4:3
- art_space: Keep the top third of the frame in the middle (plain fluorescent background between his hood and her shoulder) as calm, empty background — Seoyun's bubble right, Doha's left, and a small plain patch at the top-left corner for the door chime.
- gap_after: 80
- sfx_1:
  - text_km: "ឌីងដុង"
  - text_ko: "딩동"
  - place: x 10% · y 7% · size 5% · rot -6 (왼쪽 위 모서리, 도하 턱 위쪽 — 딩동(들어온 순간))
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ខ្ញុំមិនអរគុណទេណា។"
  - text_ko: "고맙다곤 안 해."
  - place: x 64% · y 10% · w 36% · tail ↘ (서윤(오른쪽, 얼굴 돌림))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "មិនបាច់ក៏បាន។"
  - text_ko: "안 해도 돼."
  - place: x 38% · y 26% · w 30% · tail ↙ (도하(왼쪽 위 후드))
  - read_order: 2

### panel_053
- aspect: 4:3
- silent: true
- gap_after: 160

### panel_054
- aspect: 3:4
- art_space: Keep the top fifth of the frame on the right (plain fluorescent ceiling above the door) as calm, empty background.
- gap_after: 160
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ស្អែកជួបគ្នា ហាន សឺយូន។"
  - text_ko: "내일 봐, 한서윤."
  - place: x 62% · y 8% · w 44% · tail ↘ (도하(오른쪽 문) 위 천장)
  - read_order: 1

### panel_055
- aspect: 9:16
- silent: true
- gap_after: 320

### panel_056
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain cream upper wall and ceiling of the corridor) as calm, empty background for one long bubble on the right, above the door.
- gap_after: 30
- bubble_1:
  - speaker: 하람(문 너머)
  - type: dialogue
  - text_km: "លោកគ្រូ។ រឿងប្រឹក្សាម្សិលមិញ ខ្ញុំសុំរាយការណ៍តែការពិតដែលពិនិត្យរួច។"
  - text_ko: "선생님. 어제 상담 건, 확인된 사실만 보고드리겠습니다."
  - place: x 58% · y 10% · w 76% · tail ↘ (문틈(오른쪽 벽 교무실 문) — 문 너머 하람, 문 위)
  - read_order: 1

### panel_057
- aspect: 3:4
- art_space: Keep the top third of the frame (the dark upper door edges and plain cream wall above the gap) as calm, empty background for two stacked bubbles.
- gap_after: 30
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "រឿងនោះចប់ហើយ ឆែ ហារ៉ាម។"
  - text_ko: "끝난 일이다, 채하람."
  - place: x 44% · y 8% · w 50% · tail ↓ (담임(문틈 가운데))
  - read_order: 1
- bubble_2:
  - speaker: 담임
  - type: dialogue
  - text_km: "…ឯងលួចស្ដាប់ឬ?"
  - text_ko: "…엿들었냐?"
  - place: x 58% · y 20% · w 34% · tail ↓ (담임)
  - read_order: 2

### panel_058
- aspect: 3:4
- art_space: Keep the top third of the frame (the plain upper part of the white blinds behind the teacher) as calm, empty background for two stacked bubbles.
- gap_after: 0
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ពេលនោះ ខ្ញុំកំពុងល្បាតម៉ោងថ្ងៃត្រង់ ចាស។"
  - text_ko: "점심 순찰 중이었습니다."
  - place: x 44% · y 9% · w 66% · tail ↙ (하람(프레임 밖, 왼쪽 아래 손 쪽))
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "នេះជាព័ត៌មានដែលខ្ញុំប្រកាសកាលពីថ្ងៃអង្គារ។"
  - text_ko: "화요일에 공개한 그 제보입니다."
  - place: x 52% · y 23% · w 66% · tail ↙ (하람(프레임 밖))
  - read_order: 2

### panel_059
- aspect: 3:4
- silent: true
- gap_after: 160

### panel_060
- aspect: 9:16
- art_space: Keep the top quarter of the frame (plain soft cream wall above her head) as calm, empty background for one bubble, and the bottom sixth (plain dark navy blazer shadow) as calm, empty background for the ending caption.
- gap_after: 0
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ហាង២៤ម៉ោងក្នុងព័ត៌មាននោះ… នៅ ផ្លូវបួនមុខ សុលនែដុង។"
  - text_ko: "제보에 적힌 편의점, 솔내동 사거리예요."
  - place: x 50% · y 10% · w 68% · tail ↓ (하람(가운데) 머리 위)
  - read_order: 1
- bubble_2:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៤ —"
  - text_ko: "— 4화에 계속 —"
  - place: x 50% · y 92% · w 60% (엔딩 캡션, 아래 1/6 남색 그림자)
  - read_order: 2

---

## 레터러 노트 (회차 전체)

- 말풍선 84개 = 대본 대사·생각 줄 83개(1:1, 나누거나 합치지 않음) + 엔딩 캡션 1개(P60) · 크메르어 효과음 4개(P03·P47·P51·P52, 대본 `KM 효과음` 그대로) · 소품 글씨(env) 0개(대본에 「…」 줄 없음).
- `text_km`은 대본 `KM:` 줄을 스크립트로 글자 그대로 복사했다(손으로 다시 치지 않음). 솔내동 사거리 `ផ្លូវបួនមុខ សុលនែដុង` P07·P32·P51·P60, 편의점 `ហាង២៤ម៉ោង` P51·P60, "내일 봐" `ស្អែកជួបគ្នា` P02·P54가 같은 글자로 이어진다.
- 무대사(`silent: true`) 7패널: P04, P27, P31, P33, P53, P55, P59. P03·P47은 효과음만 있어 silent가 아니다(샷리스트의 "무대사 9"는 이 둘을 포함한 수).
- 패널당 말풍선은 모두 1~2개. 3개인 패널은 없다(P60 = 하람 1 + 엔딩 캡션 1). 긴 한 줄(P05 58자, P56 67자, P60 50자)도 2줄 안에 들어가므로 나누지 않았다.
- 종류: thought = P06(2), P07(2), P11, P18(2), P21, P51(2)(KM `(គិត)` 줄과 1:1). shout = P20 예린 "ហេ៎!"만(샷리스트 "shout 가능"). P05 서윤 속삭임·P46 하람 혼잣말(소리 내 말함, KM `(គិត)` 아님)·P48 사장님 통화·P56 하람 문 너머는 dialogue. narration = P60 엔딩 캡션(아래 1/6, y 92%).
- 프레임 밖·가장자리 꼬리(샷리스트 dialogue_ref 그대로): P13 담임 → 왼쪽 아래 손(↙), P28·P38 담임(프레임 밖, 카메라 쪽) → 아래 가장자리(↓), P29 담임 → 왼쪽 전경 어깨(↙), P35 도하 → 오른쪽 전경 어깨(↘), P45 건우 → 왼쪽 가장자리(↙), P50 사장님 → 오른쪽 뒤 등(↘), P56 하람(문 너머) → 오른쪽 문틈(↘), P58 하람(프레임 밖) → 왼쪽 아래 손(↙ 2개), P22 서윤 → 오른쪽(↘, 풍선은 왼쪽 위 빈자리).
- **P29·P41 유리문 실루엣 위에는 풍선이 없다.** P29 담임 풍선은 왼쪽 위(x 19%, 오른쪽 끝 약 34%, 2줄), P41 서윤 풍선은 시계 오른쪽(x 80%). 실루엣(가운데~약간 왼쪽, 머리 사이 깊은 배경)과 떨어져 있다.
- 폭: Battambang 글꼴로 실제 글자 폭을 재어(뷰어 수치: 글자 3.4%·좌우 여백 1.2em·줄 간격 1.7) 줄 수를 맞췄다. w 20~76%, 모두 85% 이하. 반전 줄은 모두 2줄 이하: P34 두 풍선 각 1줄, P60 2줄.
- `gap_after`(샷리스트 §4 그대로): 0 이어 붙임(P17·P58·P60) · 30 촘촘 · 80 보통 · 160 비트 끊기 · 320 시간 점프·정지(P07·P34·P46·P55).
- 짝 패널은 같은 자리 감각으로: P02 ↔ P54 "내일 봐"(화자 위 1줄), P08 ↔ P56 복도 위 1/4, P09 ↔ P57 문틈 위 두 풍선 계단식, P32 ↔ P34 도하 머리 위 가운데.

### 남은 확인 (배치 확인 단계, episode-compositor)
- **P12 (4:3, 2풍선 나란히)**: 담임 48자는 w44에서 3줄, 하람 89자는 w54에서 3줄(띄어쓰기에서만 끊기면 4줄). 위 1/3 안에 다 들어가지 않고 오른쪽 위 약 40%가 필요하다. 하람(오른쪽, 서 있음) 머리가 그보다 낮게 그려졌는지 확인하고, 얼굴에 걸리면 하람 풍선을 x/y만 조정한다(문구는 바꾸지 않음, 풍선 3개 금지라 나누지 않음). 그림을 만들기 전에 panel-director/prompt-smith가 P12 art_space를 "top 40% on the right"로 넓히는 것을 권한다.
- **P39 b1** 담임 45자(w50, 왼쪽 절반): `គ្រូពន្យារការទាក់ទងអាណាព្យាបាលសិន។`가 띄어쓰기 없는 긴 한 덩어리라 브라우저가 단어 사이에서 끊어 주면 2줄, 아니면 3줄. 3줄이면 y 17 → 19로 내린다(왼쪽 블라인드는 70%까지 비어 있음).
- **P51 생각 2**: 오른쪽 위 1/3 아래로 약 7% 내려온다(y 25~41%). 오른쪽 담배 진열대 윗부분이 비어 있는지 확인. 효과음 "ពីប!"(x 36% · y 20%)은 스캐너 빨간 불 옆으로 x/y만 옮긴다.
- **P52 효과음** "ឌីងដុង"은 왼쪽 위 모서리(x 10%) — 도하 턱·안경 아랫테가 위쪽 가장자리에 오므로 겹치면 아래로 조금 옮긴다.
- **P28·P38** 담임(프레임 밖) 꼬리는 아래 가장자리(↓)를 향한다. 두 학생 머리 사이를 가리키므로 화자가 헷갈리면 꼬리를 화면 아래 가장자리 쪽으로 더 가깝게(y만 내림) 옮긴다.
