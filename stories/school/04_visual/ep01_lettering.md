# EP01 레터링 명세 — 『유통기한 연애』 1화 「오늘까지인 거 있어요?」 (letterer · Khmer edition)

- 작성: letterer · 2026-11-22 · 스킬 `webtoon-khmer-edition` §3 + `webtoon-assembly`(레터링 섹션 중 종류·읽기 순서·과밀 규칙만)
- 입력: `03_episode/ep01_script_final.md`(native-khmer 리뷰 READY본, KM 줄 원문 그대로), `ep01_beatsheet.md`(패널 번호 고정 P01~P60), `04_visual/style-bible.md` §5·§10, `character-sheets.md`(좌우 표식)
- **이미지에는 글자 없음.** 말풍선·효과음·캡션은 뷰어(`km_tool.py build`)가 그린다. 각 패널의 `art_space`는 prompt-smith가 영어로 옮겨 "calm, empty background"로 넣는다(style-bible §10-3).
- `place`: x/y = 풍선 중심, w = 최대 폭(패널 폭 대비 %). 꼬리 ↙↓↘ = 아래쪽 꼬리(화자 왼쪽/가운데/오른쪽), ↖↑↗ = 위쪽 꼬리(프레임 밖 위 화자). thought·narration은 꼬리 없음.
- 화면비는 style-bible §5-1 권장값 기준(최종은 panel-director 샷리스트). 샷리스트 화면비나 인물 좌우가 다르면 `place`만 고친다(문구는 그대로).
- `text_ko`는 참고용, 화면에 나오지 않는다.

---

### panel_001
- aspect: 9:16
- silent: true

### panel_002
- aspect: 3:4
- art_space: 위쪽 1/4을 형광 천장·흐린 진열대 윗부분으로 비움(왼쪽 위 = 효과음, 오른쪽 위 = 말풍선). 후드 그늘 속 안경 반사는 가운데 높이
- sfx_1:
  - text_km: "ឌីងដុង"
  - text_ko: "딩동"
  - place: x 20% · y 8% · size 7% · rot -8
- bubble_1:
  - speaker: 후드(도하)
  - type: dialogue
  - text_km: "មានរបស់ផុតកំណត់ថ្ងៃនេះ… ទេ?"
  - text_ko: "오늘까지인 거… 있어요?"
  - place: x 66% · y 10% · w 50% · tail ↙ (후드 입가)
  - read_order: 1

### panel_003
- aspect: 3:4
- art_space: 위쪽 1/5 오른쪽~가운데(서윤 머리 위 형광 천장)을 비움. 후드 어깨는 왼쪽 전경
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "មួយនេះ ផុតកំណត់ថ្ងៃនេះ ចាស។"
  - text_ko: "이건 오늘까지예요."
  - place: x 62% · y 9% · w 50% · tail ↘ (서윤(오른쪽))
  - read_order: 1

### panel_004
- aspect: 4:3
- art_space: 위쪽 1/3 크림 벽(칠판 위)을 비움. 무지 스피커는 오른쪽 위 구석에 작게, 학생들 머리는 아래 2/3
- bubble_1:
  - speaker: 방송
  - type: dialogue
  - text_km: "រង្វាន់សិស្សពូកែ៖ លេខ១ទូទាំងសាលា… ឆ្នាំទី២ ថ្នាក់ទី១ ប៉ែក ដូហា។"
  - text_ko: "학업우수상, 전교 1등. 2학년 1반 백도하."
  - place: x 46% · y 15% · w 70% · tail ↗ (꼬리 = 오른쪽 위 스피커)
  - read_order: 1

### panel_005
- aspect: 3:4
- art_space: 위쪽 1/3을 흐린 교실 벽·창빛으로 비움. 서윤 옆얼굴은 가운데 높이, 모서리 인서트(유리병)는 아래 왼쪽 구석
- bubble_1:
  - speaker: 방송
  - type: dialogue
  - text_km: "លេខ២ ហាន សឺយូន។"
  - text_ko: "2등, 한서윤."
  - place: x 32% · y 8% · w 46% · tail ↖ (꼬리 = 프레임 밖 스피커)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: thought
  - text_km: "…ជាលើកដំបូង។"
  - text_ko: "…처음이야."
  - place: x 66% · y 21% · w 40%
  - read_order: 2

### panel_006
- aspect: 4:3
- art_space: 오른쪽 절반 폭의 위쪽~가운데 세로 띠(크림 벽·칠판)를 비움. 도하는 왼쪽 창가, 예린·태민은 오른쪽 아래 앞줄
- bubble_1:
  - speaker: 예린
  - type: dialogue
  - text_km: "ហា៎! ហាន សឺយូន ជាប់លេខ២?"
  - text_ko: "헐. 한서윤이 2등?"
  - place: x 72% · y 14% · w 46% · tail ↙ (예린)
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: dialogue
  - text_km: "សិស្សផ្ទេរថ្មីនោះ ជាអ្នកណាហ្នឹង…"
  - text_ko: "전학생 뭐야…"
  - place: x 72% · y 40% · w 44% · tail ↓ (태민)
  - read_order: 2

### panel_007
- aspect: 3:4
- art_space: 위쪽 1/3(책상 밑면의 단순한 그림자)을 비움. 휴대폰은 왼쪽 아래, 서윤 얼굴은 오른쪽 가운데, 가방 속 조끼 끝은 아래
- sfx_1:
  - text_km: "វឺត… វឺត…"
  - text_ko: "지잉— 지잉—"
  - place: x 20% · y 40% · size 6% · rot -10
- bubble_1:
  - speaker: 사장님(통화)
  - type: dialogue
  - text_km: "សឺយូន យប់នេះចូលវេនបានអត់?"
  - text_ko: "서윤아, 오늘 마감 가능하지?"
  - place: x 34% · y 9% · w 50% · tail ↙ (꼬리 = 휴대폰)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ចាស។ ម៉ោងដប់។"
  - text_ko: "네. 열 시요."
  - place: x 66% · y 23% · w 36% · tail ↘ (서윤(속삭임))
  - read_order: 2

### panel_008
- aspect: 9:16
- silent: true

### panel_009
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽(담임 머리 위 문틀·벽)을 비움. 담임 = 왼쪽, 서윤 = 오른쪽, 배경 도하·봉투는 가운데 높이(가리지 않게)
- bubble_1:
  - speaker: 담임
  - type: dialogue
  - text_km: "លេខ២ ក៏ពូកែដែរ។ តែសម្រាប់ឯង ប្រហែលមិនមែនទេ។"
  - text_ko: "2등도 잘한 거야. 너한텐 아니겠지만."
  - place: x 30% · y 9% · w 52% · tail ↓ (담임(왼쪽))
  - read_order: 1

### panel_010
- aspect: 3:4
- art_space: 위쪽 1/5(서윤 머리 위 복도 벽) + 아래 오른쪽 1/4(등 뒤 주먹 옆 단순한 배경)을 비움. 얼굴은 가운데
- bubble_1:
  - speaker: 담임(프레임 밖)
  - type: dialogue
  - text_km: "អាហារូបករណ៍ មិនទាន់ចប់ទេ។ ដល់ឆមាស ត្រូវនៅក្នុងលេខ៣ ហើយពិន័យមួយក៏មិនបាន។ ដឹងហើយណា?"
  - text_ko: "서진 장학, 아직 끝난 거 아니다. 기말까지 3등 안, 벌점 하나 없이. 알지?"
  - place: x 50% · y 9% · w 78% · tail ↖ (꼬리 = 프레임 밖 담임)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: thought
  - text_km: "ឆមាសនេះ ខ្ញុំដណ្ដើមយកមកវិញ។"
  - text_ko: "기말에서 뒤집으면 돼."
  - place: x 70% · y 88% · w 46%
  - read_order: 2

### panel_011
- aspect: 4:3
- art_space: 왼쪽 1/3의 위쪽(서윤 머리 위 창빛 역광)을 비움. 서윤 = 왼쪽(키가 작아 머리 위 여백), 도하 = 오른쪽
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប៉ែក ដូហា។ ឯងខុសប៉ុន្មានចំណុច?"
  - text_ko: "백도하. 너 몇 개 틀렸어?"
  - place: x 30% · y 14% · w 48% · tail ↓ (서윤(왼쪽))
  - read_order: 1

### panel_012
- aspect: 3:4
- art_space: 위쪽 1/5 오른쪽(창빛)을 비움
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "មិនខុសទេ។"
  - text_ko: "안 틀렸어."
  - place: x 70% · y 9% · w 34% · tail ↙ (도하)
  - read_order: 1

### panel_013
- aspect: 3:4
- art_space: 위쪽 1/3을 복도 창빛으로 비움. 서윤 = 왼쪽, 도하 = 오른쪽 가장자리, 서윤 손은 아래
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ទើបផ្ទេរមក ប្រឡងដំបូងបានពិន្ទុពេញ? សាលាចាស់នៅឯណា?"
  - text_ko: "전학 오자마자 첫 시험이 만점? 전 학교 어디야."
  - place: x 36% · y 9% · w 62% · tail ↙ (서윤(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឆ្ងាយ។"
  - text_ko: "멀어."
  - place: x 78% · y 23% · w 26% · tail ↓ (도하(오른쪽))
  - read_order: 2

### panel_014
- aspect: 1:1
- art_space: 위쪽 2/5를 흐린 복도 배경으로 비움. 손·학은 가운데~아래(학 두 특징 가리지 않게)
- bubble_1:
  - speaker: 서윤(프레임 밖)
  - type: dialogue
  - text_km: "រៀនគួរនៅណា? ឬជួលគ្រូ?"
  - text_ko: "학원은? 과외?"
  - place: x 30% · y 10% · w 44% · tail ↖ (꼬리 = 프레임 밖 위)
  - read_order: 1
- bubble_2:
  - speaker: 도하(프레임 밖)
  - type: dialogue
  - text_km: "រៀនម្នាក់ឯង។"
  - text_ko: "혼자."
  - place: x 72% · y 28% · w 36% · tail ↗ (꼬리 = 프레임 밖 위)
  - read_order: 2

### panel_015
- aspect: 3:4
- silent: true

### panel_016
- aspect: 3:4
- art_space: 위쪽 1/3을 비움. 도하 = 오른쪽(키가 커서 머리가 더 위), 서윤 = 왼쪽
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ឯងនៅតែបត់អាហ្នឹងទៀត?"
  - text_ko: "아직도 이런 거 접어?"
  - place: x 66% · y 8% · w 44% · tail ↘ (도하(오른쪽))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "នៅតែ? យើងធ្លាប់ជួបគ្នាពីអង្កាល់?"
  - text_ko: "아직도? 우리가 언제 봤다고."
  - place: x 34% · y 22% · w 52% · tail ↙ (서윤(왼쪽))
  - read_order: 2

### panel_017
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽~가운데를 비움
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "…ទើបតែមួយនាទី ឯងបត់បានបីហើយ។"
  - text_ko: "…방금 1분 동안 세 개 접었잖아."
  - place: x 36% · y 9% · w 54% · tail ↘ (도하)
  - read_order: 1

### panel_018
- aspect: 1:1
- art_space: 위쪽 2/5의 좌우 양끝을 비움. 서윤 빨개진 얼굴은 위 가운데, 태민은 오른쪽 배경 가운데 높이, 손바닥 학 세 마리는 아래
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ពីរទេ។"
  - text_ko: "…두 개야."
  - place: x 18% · y 12% · w 26% · tail ↘ (서윤)
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: dialogue
  - text_km: "បីណា៎។"
  - text_ko: "세 갠데."
  - place: x 82% · y 30% · w 24% · tail ↓ (태민(배경))
  - read_order: 2

### panel_019
- aspect: 3:4
- art_space: 위쪽 1/3을 비움. 서윤 = 왼쪽, 도하 = 오른쪽(손에 학)
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "លេខ១ផង អាហារូបករណ៍ផង។ យកអស់ សប្បាយហើយ។"
  - text_ko: "1등에 장학금까지. 다 가져가서 좋겠다."
  - place: x 34% · y 9% · w 60% · tail ↓ (서윤(왼쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "មិនយកទេ។"
  - text_ko: "안 가져가."
  - place: x 78% · y 23% · w 26% · tail ↓ (도하(오른쪽))
  - read_order: 2

### panel_020
- aspect: 3:4
- art_space: 위쪽 1/5(문 위 교실 벽)을 비움. 하람은 왼쪽 가운데, 학 모양 쪽지는 화면 앞쪽
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ខ្ញុំមកពីក្រុមវិន័យសិស្ស។ មានគេដាក់សំបុត្រក្នុងប្រអប់ផ្ដល់ព័ត៌មាន។"
  - text_ko: "선도부입니다. 제보함에 제보가 들어왔습니다."
  - place: x 50% · y 10% · w 76% · tail ↙ (하람)
  - read_order: 1

### panel_021
- aspect: 3:4
- art_space: 위쪽 1/3을 흐린 교실 천장·벽으로 비움(로우 앵글이라도 하람 얼굴은 가운데 높이). 손 인서트는 아래
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "គេប្រាប់ថា ឆ្នាំទី២ យើង មានសិស្សម្នាក់ធ្វើការនៅហាង២៤ម៉ោងរាល់យប់។"
  - text_ko: "우리 학년에 밤마다 편의점에서 일하는 학생이 있다는 제보입니다."
  - place: x 50% · y 9% · w 74% · tail ↓ (하람)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "ថ្ងៃស្អែក ខ្ញុំនឹងពិនិត្យ។"
  - text_ko: "내일, 확인하겠습니다."
  - place: x 64% · y 24% · w 46% · tail ↙ (하람)
  - read_order: 2

### panel_022
- aspect: 9:16
- art_space: 위쪽 1/6 왼쪽(먼지 낀 창의 살구빛 역광)을 비움. 도하는 위 칸, 머리는 위 1/6 아래
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "យប់មិញ នៅកន្លែងនោះ គឺឯងមែនទេ?"
  - text_ko: "어젯밤 거기, 너지?"
  - place: x 34% · y 7% · w 52% · tail ↘ (도하(위 칸))
  - read_order: 1

### panel_023
- aspect: 3:4
- silent: true

### panel_024
- aspect: 4:3
- art_space: 왼쪽 절반 폭의 위쪽~가운데 세로 띠(창 역광)를 비움. 서윤 = 왼쪽, 얼굴은 아래 절반
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "យប់មិញ ខ្ញុំនៅកន្លែងនោះ ព្រោះទៅជួបឯង។"
  - text_ko: "어젯밤 내가 거기 있던 건, 너 만나러 간 거야."
  - place: x 27% · y 13% · w 48% · tail ↘ (서윤)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "យើងធ្វើជាសង្សារគ្នាទៅ។"
  - text_ko: "우리 사귀는 걸로 해."
  - place: x 27% · y 37% · w 42% · tail ↘ (서윤)
  - read_order: 2

### panel_025
- aspect: 3:4
- art_space: 위쪽 1/3 왼쪽~가운데 + 오른쪽 가운데 도하 작은 컷 위 작은 빈자리. 종이는 아래(무지)
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប្រការ១ ដល់ថ្ងៃប្រកាសលទ្ធផលឆមាស។ ប្រការ២ តែនៅសាលាប៉ុណ្ណោះ។"
  - text_ko: "1조, 기말 성적 발표일까지. 2조, 학교에서만."
  - place: x 38% · y 9% · w 66% · tail ↙ (서윤)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប្រការ៣ ក្រោយម៉ោង១០យប់ មិនសួររឿងគ្នា។"
  - text_ko: "3조, 밤 10시 이후엔 서로 안 묻기."
  - place: x 34% · y 23% · w 56% · tail ↙ (서윤)
  - read_order: 2
- bubble_3:
  - speaker: 도하
  - type: dialogue
  - text_km: "យល់ព្រម។"
  - text_ko: "좋아."
  - place: x 80% · y 40% · w 24% · tail ↓ (도하 작은 컷)
  - read_order: 3

### panel_026
- aspect: 3:4
- art_space: 위쪽 1/3 + 아래쪽 1/5(아래 계단)을 비움. 서윤 등은 왼쪽 아래 전경, 도하는 오른쪽 가운데 난간
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប្រការ៤ ត្រឹមកាន់ដៃ ហាមថតរូប។ ប្រការ៥ បើធ្វើជាចាញ់ឲ្យ ផ្ដាច់កិច្ចសន្យាភ្លាម។"
  - text_ko: "4조, 손잡기까지. 사진 금지. 5조, 일부러 져 주면 바로 파기."
  - place: x 50% · y 9% · w 78% · tail ↙ (서윤(전경))
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ប្រការ៦ អ្នកណាស្រលាញ់ពិតមុន ត្រូវប្រាប់អាថ៌កំបាំងមួយ។"
  - text_ko: "6조, 먼저 진심 되는 쪽이 비밀 하나 말하기."
  - place: x 40% · y 24% · w 62% · tail ↙ (서윤(전경))
  - read_order: 2
- bubble_3:
  - speaker: 도하
  - type: dialogue
  - text_km: "ជាថ្នូរ សៀវភៅលំហាត់ខុសរបស់ឯងទាំងអស់។ ហើយបើរួចការ ទាក់ទងមក។"
  - text_ko: "대신 네 오답노트 전부. 그리고 일 끝나면 연락해."
  - place: x 58% · y 89% · w 66% · tail ↑ (도하)
  - read_order: 3

### panel_027
- aspect: 1:1
- art_space: 위쪽 1/4 양끝(살구빛 역광)을 비움. 두 손은 가운데
- bubble_1:
  - speaker: 서윤(프레임 밖)
  - type: dialogue
  - text_km: "បោះត្រា។"
  - text_ko: "도장."
  - place: x 26% · y 10% · w 28% · tail ↙ (서윤 손 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 도하(프레임 밖)
  - type: dialogue
  - text_km: "…អឺ។"
  - text_ko: "…응."
  - place: x 76% · y 14% · w 22% · tail ↘ (도하 손 쪽)
  - read_order: 2

### panel_028
- aspect: 4:3
- art_space: 위쪽 1/3(칠판 위 벽)을 비움. 서윤·도하는 가운데
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "យើងជាសង្សារគ្នា។ មានសំណួរ សួរមក។"
  - text_ko: "우리 사귀어. 질문 받아."
  - place: x 34% · y 14% · w 52% · tail ↘ (서윤)
  - read_order: 1

### panel_029
- aspect: 4:3
- art_space: 위쪽 절반(천장·칠판 위 벽)을 비움. 예린 = 왼쪽, 태민 = 오른쪽, 군중 머리는 아래 절반
- bubble_1:
  - speaker: 예린
  - type: shout
  - text_km: "គ្រុបថ្នាក់ផ្ទុះហើយឥឡូវ!"
  - text_ko: "지금 단톡 난리 났어!"
  - place: x 28% · y 13% · w 44% · tail ↓ (예린(휴대폰))
  - read_order: 1
- bubble_2:
  - speaker: 태민
  - type: shout
  - text_km: "ទើបផ្ទេរមក ជាប់លេខ១ បានសង្សារ ហាន សឺយូន ទៀត។ ឯងជាអ្នកណាហ្នឹង!"
  - text_ko: "전학 와서 1등 하고 한서윤이랑 사귀고, 너 뭔데!"
  - place: x 62% · y 38% · w 66% · tail ↘ (태민)
  - read_order: 2

### panel_030
- aspect: 3:4
- art_space: 위쪽 1/3을 매점 창구 윗부분으로 비움. 직원 = 왼쪽 아래 전경(뒷모습), 도하 = 오른쪽 창구 너머, 서윤 = 옆
- bubble_1:
  - speaker: 매점 직원
  - type: dialogue
  - text_km: "នំនោះផុតកំណត់ថ្ងៃនេះណា ក្មួយ។ ពាក់កណ្ដាលថ្លៃ។"
  - text_ko: "그거 오늘까지야, 학생. 반값."
  - place: x 32% · y 9% · w 58% · tail ↙ (직원(전경))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ដឹងហើយបាទ។"
  - text_ko: "알아요."
  - place: x 74% · y 24% · w 30% · tail ↓ (도하)
  - read_order: 2

### panel_031
- aspect: 3:4
- art_space: 아래쪽 1/5(하람 시점의 카운터 앞 바닥)을 비움. 서윤·도하 투샷은 위~가운데
- bubble_1:
  - speaker: 하람(시점, 프레임 밖)
  - type: dialogue
  - text_km: "សូមអបអរសាទរ។ លេខ១ និងលេខ២ សមគ្នាណាស់។"
  - text_ko: "축하드려요. 1등이랑 2등이면 잘 어울리네요."
  - place: x 50% · y 90% · w 62% · tail ↓ (꼬리 = 아래 프레임 밖 하람)
  - read_order: 1

### panel_032
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽을 비움. 하람 = 왼쪽, 서윤 = 오른쪽
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "ប៉ុន្តែ… មិត្តដឹងទេ?"
  - text_ko: "근데, 알고 계셨어요?"
  - place: x 30% · y 9% · w 44% · tail ↘ (하람 입가)
  - read_order: 1

### panel_033
- aspect: 9:16
- art_space: 위쪽 1/4을 단순한 배경으로 비움. 하람 얼굴은 가운데(더치)
- gap_after: 80
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "គេថា លេខ១ បដិសេធអាហារូបករណ៍។"
  - text_ko: "1등이 장학금 거절했대요."
  - place: x 40% · y 6% · w 56% · tail ↘ (하람)
  - read_order: 1
- bubble_2:
  - speaker: 하람
  - type: dialogue
  - text_km: "អញ្ចឹងហើយ បានជាវេនធ្លាក់មកលេខ២។"
  - text_ko: "그래서 순번이 2등한테 내려온 거예요."
  - place: x 58% · y 15% · w 58% · tail ↓ (하람)
  - read_order: 2

### panel_034
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽~가운데를 비움. 서윤 얼굴은 가운데, 흐린 도하는 오른쪽 배경
- bubble_1:
  - speaker: 하람(프레임 밖)
  - type: dialogue
  - text_km: "អញ្ចឹង ឥឡូវបើមានកំណត់ត្រាតែមួយ ក៏ចប់ហើយ មិត្ត ហាន សឺយូន។"
  - text_ko: "그러니까 이제 기록 하나면 끝이에요, 한서윤 씨."
  - place: x 42% · y 9% · w 66% · tail ↖ (꼬리 = 왼쪽 위 프레임 밖 하람)
  - read_order: 1

### panel_035
- aspect: 3:4
- art_space: 위쪽 1/3을 비움(맨 위 가운데 = 효과음). 서윤 = 왼쪽, 도하 = 오른쪽, 내민 손은 가운데
- sfx_1:
  - text_km: "ក្រិង… ក្រិង…"
  - text_ko: "예비 종"
  - place: x 50% · y 5% · size 6% · rot 0
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ឯង ហេតុអីបដិសេធ?"
  - text_ko: "…너, 왜 거절했어?"
  - place: x 30% · y 16% · w 40% · tail ↓ (서윤)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "កណ្ដឹងរោទ៍ហើយ។"
  - text_ko: "종 쳤어."
  - place: x 72% · y 26% · w 34% · tail ↓ (도하)
  - read_order: 2

### panel_036
- aspect: 1:1
- silent: true

### panel_037
- aspect: 9:16
- silent: true

### panel_038
- aspect: 4:3
- art_space: 위쪽 1/3 왼쪽(교실 천장·벽)을 비움. 문 = 오른쪽, 하람 앞·건우 뒤
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "មុននឹងពិនិត្យព័ត៌មាន តាមគោលការណ៍ ខ្ញុំសុំឆែករបស់របរសិន។"
  - text_ko: "제보 확인 전에, 원칙상 소지품부터 보겠습니다."
  - place: x 36% · y 14% · w 62% · tail ↘ (하람)
  - read_order: 1

### panel_039
- aspect: 3:4
- art_space: 위쪽 1/5을 비움. 하람 손·가방 손잡이는 가운데, 서윤 눈 인서트는 아래
- bubble_1:
  - speaker: 하람(프레임 밖)
  - type: dialogue
  - text_km: "សិស្ស ហាន សឺយូន… កាបូប។"
  - text_ko: "한서윤 학생, 가방."
  - place: x 40% · y 9% · w 50% · tail ↗ (꼬리 = 프레임 밖 하람)
  - read_order: 1

### panel_040
- aspect: 4:3
- art_space: 위쪽 1/3을 비움(오른쪽 = 문가 건우 머리 위, 왼쪽 = 하람 쪽 프레임 가장자리). 서윤 얼굴은 가운데 아래
- bubble_1:
  - speaker: 건우
  - type: dialogue
  - text_km: "ប្រធាន… អត់មានលោកគ្រូ ធ្វើបានដែរឬ?"
  - text_ko: "부장… 이거 쌤 없이 해도 돼요?"
  - place: x 68% · y 13% · w 50% · tail ↘ (건우(문가))
  - read_order: 1
- bubble_2:
  - speaker: 하람(프레임 밖)
  - type: dialogue
  - text_km: "គ្រាន់តែពិនិត្យទេ។"
  - text_ko: "확인만입니다."
  - place: x 24% · y 33% · w 34% · tail ↖ (꼬리 = 왼쪽 프레임 밖 하람)
  - read_order: 2

### panel_041
- aspect: 1:1
- art_space: 위쪽 1/4(효과음 자리)을 흐린 배경으로 비움. 지퍼·초록 끝은 가운데~아래
- sfx_1:
  - text_km: "ស្រឺត…"
  - text_ko: "지이익—"
  - place: x 50% · y 13% · size 10% · rot -6

### panel_042
- aspect: 3:4
- art_space: 위쪽 1/5 오른쪽을 비움. 서윤 = 오른쪽, 하람 = 왼쪽, 흐린 키링은 아래 왼쪽 전경
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ទីមួយ។"
  - text_ko: "첫째."
  - place: x 68% · y 9% · w 28% · tail ↓ (서윤)
  - read_order: 1

### panel_043
- aspect: 3:4
- art_space: 위쪽 1/3을 비움. 서윤 얼굴은 가운데, 흐린 키링은 아래 왼쪽 전경
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឆែករបស់របរ ត្រូវមានគ្រូបន្ទុកថ្នាក់នៅជាមួយ។ ទីពីរ ម្ចាស់កាបូបបើកខ្លួនឯង។"
  - text_ko: "소지품 검사는 담임 입회. 둘째, 가방은 본인이 직접 열고."
  - place: x 50% · y 8% · w 78% · tail ↙ (서윤)
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ទីបី គ្រាន់តែប៉ះកាបូបអ្នកដទៃ ក៏ជាការល្មើសហើយ។"
  - text_ko: "셋째, 남의 가방에 손대는 건 그 자체로 위반이야."
  - place: x 54% · y 23% · w 60% · tail ↓ (서윤)
  - read_order: 2

### panel_044
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽~가운데를 비움
- bubble_1:
  - speaker: 하람
  - type: shout
  - text_km: "…អត់ទេ! មិនមែនអញ្ចឹងទេ!"
  - text_ko: "…아니, 그게 아니라!"
  - place: x 40% · y 10% · w 52% · tail ↘ (하람)
  - read_order: 1

### panel_045
- aspect: 3:4
- art_space: 위쪽 1/5를 비움. 가방 안은 손은 아래
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ចង់ឲ្យខ្ញុំទៅហៅលោកគ្រូទេ? កត់ត្រាទុកទៅ ប្រធានក្រុមវិន័យ។"
  - text_ko: "선생님 모셔 올까? 기록 남기자, 선도부장."
  - place: x 50% · y 9% · w 66% · tail ↓ (서윤)
  - read_order: 1

### panel_046
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽을 비움. 하람 측면 = 가운데, 건우 = 오른쪽 뒤
- bubble_1:
  - speaker: 하람
  - type: dialogue
  - text_km: "…លើកក្រោយ ខ្ញុំនឹងធ្វើតាមនីតិវិធី។"
  - text_ko: "…다음엔, 절차대로 하겠습니다."
  - place: x 34% · y 9% · w 52% · tail ↘ (하람)
  - read_order: 1

### panel_047
- aspect: 3:4
- art_space: 위쪽 1/3 왼쪽~가운데를 비움. 빵은 얼굴 오른쪽 옆, 웃는 반은 배경
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "កាបូបខ្ញុំ ខ្ញុំបើកខ្លួនឯង។"
  - text_ko: "내 가방은 내가 열게."
  - place: x 34% · y 9% · w 52% · tail ↘ (도하)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "មាននំមួយ។ ផុតកំណត់ថ្ងៃនេះ។"
  - text_ko: "빵 하나. 오늘까지야."
  - place: x 34% · y 23% · w 46% · tail ↘ (도하)
  - read_order: 2

### panel_048
- aspect: 9:16
- art_space: 위쪽 1/6 오른쪽(밤하늘·창유리, 효과음) + 길 위 서윤 바로 위 가운데 띠(은행나무 길, 생각 풍선)를 비움. 도하 실루엣은 위 왼쪽 창틀
- sfx_1:
  - text_km: "ក្រិង… ក្រិង…"
  - text_ko: "야자 끝 종"
  - place: x 74% · y 8% · size 8% · rot 6
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "ឡានក្រុង… បួននាទីទៀត។"
  - text_ko: "버스까지 4분."
  - place: x 52% · y 58% · w 46%
  - read_order: 1

### panel_049
- aspect: 3:4
- silent: true

### panel_050
- aspect: 3:4
- art_space: 위쪽 1/3 가운데~오른쪽(형광 천장)을 비움. 유리병 = 왼쪽 끝(가리지 않게), 서윤 = 가운데 오른쪽
- bubble_1:
  - speaker: 서윤
  - type: thought
  - text_km: "គ្មាននរណាដឹងទេ។"
  - text_ko: "아무도 몰라."
  - place: x 64% · y 8% · w 36%
  - read_order: 1
- bubble_2:
  - speaker: 서윤
  - type: thought
  - text_km: "ប៉ែក ដូហា ក៏អញ្ចឹង… គ្រាន់តែឃើញម្ដងយប់មិញប៉ុណ្ណោះ។"
  - text_ko: "백도하도… 어젯밤 한 번 본 게 다야."
  - place: x 58% · y 21% · w 62%
  - read_order: 2

### panel_051
- aspect: 1:1
- art_space: 위쪽 1/4 왼쪽~가운데를 비움. 숫자 없는 시계는 위 오른쪽 구석, 스캐너는 오른쪽 가운데, 바구니는 아래
- sfx_1:
  - text_km: "ពីប!"
  - text_ko: "삑—"
  - place: x 78% · y 44% · size 8% · rot -10
- bubble_1:
  - speaker: 서윤(프레임 밖)
  - type: dialogue
  - text_km: "របស់ផុតកំណត់ថ្ងៃនេះ… ពួកឯងខំហើយណា។"
  - text_ko: "오늘까지인 것들, 수고했어."
  - place: x 40% · y 11% · w 58% · tail ↑ (꼬리 = 위 프레임 밖 서윤)
  - read_order: 1

### panel_052
- aspect: 3:4
- art_space: 위쪽 1/5 왼쪽(문 쪽 형광 천장)을 비움. 서윤·초록 할인 바구니 = 오른쪽
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "…ថ្ងៃនេះ មិនមកទេមើលទៅ។"
  - text_ko: "…오늘은 안 오려나."
  - place: x 34% · y 9% · w 46% · tail ↘ (서윤)
  - read_order: 1

### panel_053
- aspect: 16:9 또는 4:3
- silent: true

### panel_054
- aspect: 9:16
- silent: true
- gap_after: 240

### panel_055
- aspect: 3:4
- silent: true
- gap_after: 40

### panel_056
- aspect: 1:1
- art_space: 위쪽 1/4을 흐린 배경으로 비움(왼쪽 = 효과음, 오른쪽 = 말풍선). 키링은 가운데~아래
- sfx_1:
  - text_km: "ឌីងដុង"
  - text_ko: "딩동"
  - place: x 24% · y 10% · size 8% · rot -8
- bubble_1:
  - speaker: 서윤(프레임 밖)
  - type: dialogue
  - text_km: "សូមស្វាគ…"
  - text_ko: "어서 오세…"
  - place: x 72% · y 12% · w 34% · tail ↗ (꼬리 = 오른쪽 위 프레임 밖 서윤)
  - read_order: 1

### panel_057
- aspect: 1:1
- silent: true
- gap_after: 60

### panel_058
- aspect: 3:4
- art_space: P02와 같음: 위쪽 1/4 오른쪽(형광 천장)을 비움. 안경 반사·삼각김밥·키링은 가운데~아래
- bubble_1:
  - speaker: 후드(도하)
  - type: dialogue
  - text_km: "មានរបស់ផុតកំណត់ថ្ងៃនេះ… ទេ?"
  - text_ko: "오늘까지인 거… 있어요?"
  - place: x 66% · y 10% · w 50% · tail ↙ (후드 입가)
  - read_order: 1

### panel_059
- aspect: 3:4
- art_space: 위쪽 1/3을 비움. 서윤 = 오른쪽, 도하(손님) = 왼쪽
- gap_after: 120
- bubble_1:
  - speaker: 서윤
  - type: dialogue
  - text_km: "ឯង… ម៉េចក៏…"
  - text_ko: "너… 어떻게…"
  - place: x 72% · y 9% · w 36% · tail ↓ (서윤(오른쪽))
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំមិនមែនទើបដឹងយប់មិញទេ។"
  - text_ko: "어젯밤에 안 거 아니야."
  - place: x 32% · y 22% · w 52% · tail ↓ (도하(왼쪽))
  - read_order: 2

### panel_060
- aspect: 9:16
- art_space: 위쪽 1/4(도하 말풍선 2개) + 아래 1/6(엔딩 캡션)을 단순한 어두운 배경으로 비움. 도하 얼굴은 가운데
- bubble_1:
  - speaker: 도하
  - type: dialogue
  - text_km: "ខ្ញុំដឹងតាំងពីដំបូង ហាន សឺយូន។"
  - text_ko: "처음부터 알았어, 한서윤."
  - place: x 42% · y 6% · w 56% · tail ↘ (도하)
  - read_order: 1
- bubble_2:
  - speaker: 도하
  - type: dialogue
  - text_km: "សូម្បីតែរឿងដែលឯងចាំខ្ញុំមិនបាន។"
  - text_ko: "네가 나 기억 못 하는 것까지."
  - place: x 58% · y 15% · w 60% · tail ↓ (도하)
  - read_order: 2
- bubble_3:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 50% · y 92% · w 60%
  - read_order: 3

---

## 레터러 노트 (회차 전체)

- 말풍선 75개(엔딩 캡션 1개 포함) · 크메르어 효과음 7개(P02·P07·P35·P41·P48·P51·P56) · 소품 글씨(env) 0개(대본에 「…」 줄 없음).
- 무대사(`silent: true`) 11패널: P01, P08, P15, P23, P36, P37, P49, P53, P54, P55, P57. P41은 효과음만 있어 silent가 아니다.
- 패널당 풍선 3개는 P25·P26(조항 낭독, 대본·style-bible §10-1 허용)과 P60(도하 2 + 엔딩 캡션, §10-4-5)뿐. 나머지는 1~2개.
- 긴 대사는 나누지 않고 대본 KM 한 줄 = 풍선 하나로 두었다. 대신 63자 이상(P04·P10·P20·P21·P26·P29·P43)은 w 70~78%로 넓혀 약 2줄 안에 들어가게 했다(뷰어 3.4cqw 기준). 배치 확인 단계에서 3줄이 되면 같은 문장을 `។` 위치에서 풍선 2개로 나눠도 된다(문구 변경 없이).
- 종류: thought = P05·P10·P48·P50(서윤 속말·독백, KM `(គិត)`). P51·P52 혼잣말은 KM에 `(គិត)`이 없어 dialogue. shout = P29(예린·태민), P44(하람 균열). 방송(P04·P05)·통화(P07)·프레임 밖 화자(P10·P14·P27·P31·P34·P39·P40·P51·P56)는 꼬리를 화자 쪽 가장자리로.
- 반전 간격(`gap_after`): P33 80 · P54 240(빈 여백 스크롤) · P55 40 · P57 60 · P59 120(P60 마지막 한 줄 앞 정적).
- P02 ↔ P58: 같은 구도, 같은 문장, 같은 `place`(매치).
- panel-director에게: `art_space`의 인물 좌우는 style-bible §5-3(편의점 손님 = 왼쪽, 서윤 = 오른쪽)과 비트시트 구도에서 정했다. 샷리스트에서 좌우·화면비가 바뀌면 알려 주면 `place`를 맞춘다. P10은 한 프레임이면 아래 오른쪽(주먹 옆)에 빈자리 필요.
