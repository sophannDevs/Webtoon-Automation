# EP01 「폐하」 레터링 명세 — letterer (크메르어판, 뷰어가 말풍선을 그림)

- 입력: `03_episode/ep01_script_final.md`(text_km = 대본 KM 문구 그대로), `04_visual/ep01_shotlist.md`(bubble area → art_space, gap_after), `02_story/tension-curve.md` §2-3
- 이미지에는 글자 0. 아래 `art_space`는 prompt-smith가 Flow 프롬프트의 빈 자리 문장으로 옮긴다. `text_ko`는 참고용, 화면에 나오지 않는다.
- place: x/y = 말풍선 중심, w = 최대 폭(패널 대비 %). 모든 말풍선은 x − w/2 ≥ 0, x + w/2 ≤ 100, w ≤ 85.
- 합계: 패널 64 · 말풍선 50 + 끝 캡션 1(narration) · 효과음 6 · 패널당 최대 2 · 무대사 22

### panel_001
- silent: true
- gap_after: 0

### panel_002
- art_space: 우상단 모서리 작은 영역: 종 쪽의 햇빛 받은 민 계단 돌 (효과음 자리)
- gap_after: 0
- sfx_1:
  - text_km: "ទុង…"
  - text_ko: "데엥— (정오의 청동 종, 한 번)"
  - place: x 82% · y 12% · size 8% · rot -6

### panel_003
- silent: true
- gap_after: 0

### panel_004
- art_space: 좌상단 모서리 약 1/4: 날개 끝 너머 단상 뒤 가장자리의 민 연한 돌 (날개·머리 점에 닿지 않게)
- gap_after: 60
- bubble_1:
  - speaker: 군중 (CROWD, 화면 밖)
  - type: dialogue
  - text_km: "…ស្លាប… ធំម្ល៉េះ។"
  - text_ko: "…날개다. 저렇게 커."
  - place: x 22% · y 7% · w 38% · tail ↖ (화면 밖 좌상단 협곡 계단의 군중)
  - read_order: 1

### panel_005
- silent: true
- gap_after: 160

### panel_006
- art_space: 상단 1/3 우측 절반: 바실 위 협곡 가장자리 위의 민 연한 정오 하늘
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "មកុដទើបពាក់ប្រាំពីរថ្ងៃ ឥឡូវថែមទាំងនាគទៀត។"
  - text_ko: "칠 일 된 왕관에, 이제 용까지 얹으셨군요."
  - place: x 62% · y 9% · w 64% · tail ↓ (바실)
  - read_order: 1
- bubble_2:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ពេលកាន់ទុក្ខ តាមទំនៀម ត្រូវមានអ្នកកាន់រាជ្យជំនួស។"
  - text_ko: "상중에는 섭정이 대신 짐을 지는 게 법도지요."
  - place: x 60% · y 25% · w 70% · tail ↘ (바실)
  - read_order: 2

### panel_007
- art_space: 상단 중앙-우측: 진홍 깃발 위의 민 정오 하늘
- gap_after: 40
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ព្រះករុណា បើសោយទិវង្គត របស់នោះរួចខ្លួនភ្លាម។"
  - text_ko: "폐하, 쓰러지시면 저것은 그날로 풀려납니다."
  - place: x 58% · y 12% · w 66% · tail ↘ (바실, 화면 우측)
  - read_order: 1

### panel_008
- art_space: 상단 1/3 하늘 좌중앙~우측 (좌하단 작은 무릎 꿇은 형체는 비움)
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ស្តេចគេកំសាក ពួនដប់ឆ្នាំ ផ្ញើមកតែរបស់គ្មានតម្លៃ។"
  - text_ko: "저쪽 왕은 십 년째 숨어 지내는 겁쟁이고, 보낸 건 아무것도 아닌 놈이지요."
  - place: x 34% · y 10% · w 64% · tail ↘ (바실, 중앙 우측)
  - read_order: 1
- bubble_2:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "សូមដាក់វានៅក្រោមដី ហើយចាក់សោទ្វារចុះ។"
  - text_ko: "그러니 저것은 지하에 두고, 문을 잠그시지요."
  - place: x 64% · y 27% · w 56% · tail ↓ (바실)
  - read_order: 2

### panel_009
- art_space: 우상단 1/3: 지팡이 위 흐릿한 연한 관문 석회암 벽
- gap_after: 60
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "កាន់ម្នាក់ឯង ធ្ងន់ពេកហើយ។"
  - text_ko: "혼자 드시기엔 무겁습니다."
  - place: x 70% · y 13% · w 50% · tail ↗ (바실, 화면 밖 우상단)
  - read_order: 1

### panel_010
- art_space: 우상단 1/3: 민 정오 하늘
- gap_after: 60
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ត្រូវហើយ ធ្ងន់មែន។"
  - text_ko: "맞아요, 무겁죠."
  - place: x 70% · y 12% · w 44% · tail ↙ (리네)
  - read_order: 1

### panel_011
- art_space: 상단 1/3 좌측 절반: 단상 위 민 연한 정오 하늘 (리네 머리 위)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ដូច្នេះហើយ ខ្ញុំកាន់ដោយខ្លួនឯង។"
  - text_ko: "그러니 내가 들어요."
  - place: x 32% · y 8% · w 52% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ភ្ញៀវមិនស្នាក់ក្រោមដីទេ។ ស្នាក់បន្ទប់ជាប់នឹងខ្ញុំ។"
  - text_ko: "손님은 지하가 아니라, 내 옆방에 묵습니다."
  - place: x 38% · y 21% · w 72% · tail ↓ (리네)
  - read_order: 2

### panel_012
- silent: true
- gap_after: 200

### panel_013
- silent: true
- gap_after: 0

### panel_014
- art_space: 좌상단 1/3: 그녀 위 부드러운 그늘 띠 속 매끈한 회칠 안쪽 벽
- gap_after: 60
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "សូមអបអរសាទរ។"
  - text_ko: "축하해요."
  - place: x 26% · y 9% · w 36% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ្នកជាភ្ញៀវថ្លៃជាងគេក្នុងនគរនេះហើយ។"
  - text_ko: "이 나라에서 제일 비싼 손님이 됐네요."
  - place: x 34% · y 23% · w 58% · tail ↓ (리네)
  - read_order: 2

### panel_015
- art_space: 우상단 모서리: 그의 머리 위 매끈한 회칠 벽 (중앙-좌측 배경의 우르는 완전히 비움)
- gap_after: 0
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "មិនមែនភ្ញៀវទេ។ ខ្ញុំជាតម្លៃ។"
  - text_ko: "손님이 아닙니다. 값입니다."
  - place: x 72% · y 11% · w 52% · tail ↓ (헤론)
  - read_order: 1

### panel_016
- art_space: 좌상단 1/3: 부드러운 그늘 속 회칠 벽
- gap_after: 60
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "តម្លៃនោះ ត្រូវបង់ដល់ពេលណា?"
  - text_ko: "그 값, 얼마나 버티는데요?"
  - place: x 30% · y 11% · w 50% · tail ↓ (리네)
  - read_order: 1

### panel_017
- art_space: 우상단 1/3: 그의 머리 위 회칠 벽
- gap_after: 40
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ដរាបណាអ្នកនៅរស់។"
  - text_ko: "당신이 사는 만큼입니다."
  - place: x 68% · y 9% · w 40% · tail ↓ (헤론)
  - read_order: 1
- bubble_2:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ដូច្នេះ សូមរស់នៅឲ្យយូរ។"
  - text_ko: "그러니 오래 사십시오."
  - place: x 66% · y 22% · w 46% · tail ↓ (헤론)
  - read_order: 2

### panel_018
- art_space: 우상단 1/3: 부드러운 그늘의 회칠 벽
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ពរល្អណាស់។ បើខ្ញុំរស់យូរ អ្នកក៏បង់យូរដែរ។"
  - text_ko: "좋은 덕담이네요. 내가 오래 살면, 당신도 오래 치르죠."
  - place: x 64% · y 13% · w 62% · tail ↙ (리네)
  - read_order: 1

### panel_019
- silent: true
- gap_after: 0

### panel_020
- silent: true
- gap_after: 200

### panel_021
- art_space: 상단 1/3 중앙 좌측: 어스름 속 문 아치 위의 민 회칠 벽
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ក្បែរភ្ញៀវជាប់ឃុំ ខ្ញុំដេកមិនលក់ទេ។"
  - text_ko: "갇힌 손님 옆에선 잠이 안 와요."
  - place: x 36% · y 10% · w 56% · tail ↓ (리네)
  - read_order: 1

### panel_022
- art_space: 상단 1/3: 손 위의 어두운 참나무 문짝과 흐린 회칠 벽
- gap_after: 0
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "អ្នកអាចចាក់សោខ្ញុំទុកបាន។"
  - text_ko: "나를 잠가 둘 수 있습니다."
  - place: x 56% · y 12% · w 50% · tail ↘ (헤론, 그의 쪽)
  - read_order: 1

### panel_023
- art_space: 좌상단 1/3: 흐린 회칠 벽
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ៊ីចឹង អ្នកជាចំណាប់ខ្មាំង ខ្ញុំជាឆ្មាំគុក។"
  - text_ko: "그러면 당신은 볼모고, 나는 간수죠."
  - place: x 36% · y 12% · w 64% · tail ↓ (리네)
  - read_order: 1

### panel_024
- art_space: 좌상단 1/3: 아치 왼쪽, 그녀 머리 위 회칠 벽
- gap_after: 80
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ្វីដែលខ្ញុំកាន់ គឺស្រមោលអ្នក មិនមែនខ្លួនអ្នកទេ។"
  - text_ko: "내가 맡은 건 당신 그림자지, 당신이 아니에요."
  - place: x 31% · y 12% · w 60% · tail ↓ (리네)
  - read_order: 1

### panel_025
- silent: true
- gap_after: 0

### panel_026
- art_space: 상단 1/3: 흐린 회칠 벽 / 방의 어두운 윗모서리 (#1 그녀 위 중앙, #2 그 위 우측)
- gap_after: 40
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "មនុស្សរបស់អ្នក ហាក់ស្អប់អ្នកណាស់។"
  - text_ko: "당신네 사람들, 당신을 미워하네요."
  - place: x 44% · y 10% · w 54% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "នោះជាការភ័យខ្លាច។"
  - text_ko: "두려워하는 겁니다."
  - place: x 78% · y 24% · w 38% · tail ↓ (헤론)
  - read_order: 2

### panel_027
- silent: true
- gap_after: 0

### panel_028
- art_space: 상단 1/3: 문 아치 위 민 회칠 벽
- gap_after: 200
- bubble_1:
  - speaker: 리네 (QUEEN, 문 너머)
  - type: dialogue
  - text_km: "រាត្រីសួស្តី។ ទ្វារនេះ អ្នកជាអ្នកសម្រេច។"
  - text_ko: "잘 자요. 문은 당신이 정해요."
  - place: x 46% · y 12% · w 62% · tail ↘ (문틈 쪽, 문 너머 리네)
  - read_order: 1

### panel_029
- silent: true
- gap_after: 0

### panel_030
- art_space: 상단 1/3: 높고 흐릿한 어두운 원통 궁륭
- gap_after: 0
- bubble_1:
  - speaker: 영주 (LORD_HORN)
  - type: dialogue
  - text_km: "អូ៎ សុំទោស។"
  - text_ko: "아, 실례를."
  - place: x 50% · y 12% · w 34% · tail ↓ (영주, 장화 위 화면 밖)
  - read_order: 1

### panel_031
- art_space: 좌상단 작은 영역: 탁자 모서리 너머 어두운 흐린 배경 (효과음 자리)
- gap_after: 0
- sfx_1:
  - text_km: "ក្រាក់…"
  - text_ko: "빠직"
  - place: x 22% · y 14% · size 9% · rot -8

### panel_032
- art_space: 좌상단 1/3: 그녀 위의 어두운 원통 궁륭
- gap_after: 40
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ស្រមោលខ្ញុំ ប្រហែលជាត្រូវចិត្តលោកហើយ។"
  - text_ko: "제 그림자가 마음에 드셨나 봐요."
  - place: x 32% · y 10% · w 58% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ដល់ថ្នាក់ចង់ជាន់។"
  - text_ko: "밟고 싶을 만큼."
  - place: x 28% · y 25% · w 40% · tail ↓ (리네)
  - read_order: 2

### panel_033
- silent: true
- gap_after: 0

### panel_034
- silent: true
- gap_after: 60

### panel_035
- art_space: 좌상단 1/3: 바실 위 어두운 원통 궁륭 (우상단 악사석 인영은 완전히 비움)
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "សត្វនោះ ចេះស្លូតលឿនម្ល៉េះ។"
  - text_ko: "짐승이 벌써 길이 들었군요."
  - place: x 28% · y 11% · w 50% · tail ↓ (바실)
  - read_order: 1

### panel_036
- art_space: 우하단 작은 영역: 손 옆 민 흰 탁자면 (효과음 자리)
- gap_after: 200
- sfx_1:
  - text_km: "តុក… តុក…"
  - text_ko: "톡, 톡"
  - place: x 76% · y 82% · size 7% · rot 0

### panel_037
- art_space: 좌상단 1/3: 난간 위 별빛 먹남색 하늘 (우측 위 회랑·벽감은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ទាំងអស់គ្នា ចេញទៅបានហើយ។"
  - text_ko: "모두 물러가세요."
  - place: x 28% · y 9% · w 46% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "ចាស ព្រះករុណា។"
  - text_ko: "예, 폐하."
  - place: x 36% · y 22% · w 36% · tail ↘ (토라, 우측)
  - read_order: 2

### panel_038
- art_space: 상단 1/3: 난간 위 별빛 먹남색 하늘 (큰 말풍선)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "សេរីភាពនៅជិតម្ល៉េះ មិនរុញខ្ញុំទេឬ?"
  - text_ko: "자유가 이렇게 가까운데, 안 밀어요?"
  - place: x 46% · y 10% · w 62% · tail ↙ (리네, 화면 좌측)
  - read_order: 1

### panel_039
- art_space: 상단 1/3 별하늘: #1 우상단(더 높게), #2 좌상단(조금 낮게)
- gap_after: 60
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "សូមថយចេញពីគែម។"
  - text_ko: "가장자리에서 물러서십시오."
  - place: x 70% · y 9% · w 40% · tail ↓ (헤론)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ខ្លាចខ្ញុំធ្លាក់ឬ?"
  - text_ko: "떨어질까 봐요?"
  - place: x 30% · y 20% · w 42% · tail ↓ (리네)
  - read_order: 2

### panel_040
- art_space: 우상단 모서리: 그의 머리 위 흐릿한 어두운 아치 벽감 (좌상단 석궁 반짝임은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ខ្លាចខ្ញុំមានសេរីភាព។"
  - text_ko: "내가 자유로워질까 봐."
  - place: x 72% · y 11% · w 46% · tail ↓ (헤론)
  - read_order: 1

### panel_041
- art_space: 우상단 작은 영역: 석궁 옆 어두운 아치 (효과음 자리)
- gap_after: 0
- sfx_1:
  - text_km: "វ៉ឺត! ក្រាំង!"
  - text_ko: "슉— 쨍!"
  - place: x 76% · y 10% · size 8% · rot -8

### panel_042
- art_space: #1 좌상단: 그녀 위 별하늘 / #2 좌하단 띠: 어두운 테라스 돌바닥 (두 얼굴은 비움)
- gap_after: 240
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អង្គរក្សមិនបានចេញទេ។ ខ្ញុំលាក់ទុក។"
  - text_ko: "근위는 물린 게 아니라, 숨긴 거예요."
  - place: x 30% · y 10% · w 56% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 토라 (CAPTAIN, 화면 밖 아래층)
  - type: dialogue
  - text_km: "ចាប់បានហើយ។"
  - text_ko: "잡았습니다."
  - place: x 22% · y 90% · w 30% · tail ↓ (토라, 화면 밖 아래층)
  - read_order: 2

### panel_043
- silent: true
- gap_after: 0

### panel_044
- art_space: 좌상단 작은 영역: 어두운 하늘 (효과음 자리)
- gap_after: 0
- sfx_1:
  - text_km: "ផាត់!"
  - text_ko: "휙"
  - place: x 18% · y 20% · size 9% · rot -10

### panel_045
- art_space: 우상단 작은 영역: 별하늘 (효과음 자리)
- gap_after: 120
- sfx_1:
  - text_km: "ផុប!"
  - text_ko: "퍽!"
  - place: x 80% · y 12% · size 10% · rot 8

### panel_046
- silent: true
- gap_after: 320

### panel_047
- art_space: 상단 중앙-우측: 우르 머리 위 어두운 아케이드 아치 (얼굴·주먹·상처에 닿지 않게)
- gap_after: 400
- bubble_1:
  - speaker: 우르 (ENVOY)
  - type: dialogue
  - text_km: "ព្រះករុណា។"
  - text_ko: "폐하."
  - place: x 64% · y 12% · w 30% · tail ↙ (우르)
  - read_order: 1

### panel_048
- silent: true
- gap_after: 80

### panel_049
- silent: true
- gap_after: 0

### panel_050
- silent: true
- gap_after: 440

### panel_051
- art_space: 좌상단 1/3: 난간 위 별빛 먹남색 하늘, 갈고리 위 (갈고리는 하단 절반에 그대로 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "យប់នេះ នៅទីនេះ គ្មានអ្នកណាឃើញអ្វីទេ។"
  - text_ko: "오늘 밤 여기서 본 사람은 아무도 없어요."
  - place: x 32% · y 10% · w 58% · tail ↓ (리네)
  - read_order: 1

### panel_052
- art_space: 우상단 1/3: 바실 위 어두운 아케이드 아치
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "សត្វនោះ រៀបចំរឿងនេះឯង។"
  - text_ko: "저 짐승이 꾸민 겁니다."
  - place: x 68% · y 8% · w 46% · tail ↓ (바실)
  - read_order: 1
- bubble_2:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ហ៊ានឲ្យព្រួញមុតដៃខ្លួនឯងទៀតផង—"
  - text_ko: "자기 팔에 화살을 맞혀 가면서까지—"
  - place: x 64% · y 21% · w 54% · tail ↓ (바실)
  - read_order: 2

### panel_053
- art_space: 좌상단 1/3: 그녀 위 별하늘
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ៊ីចឹង លោកពូសាកត្រូវព្រួញម្តងទៅ។"
  - text_ko: "그럼 숙부님도 한번 맞아 보세요."
  - place: x 32% · y 10% · w 54% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ពេលនោះ ខ្ញុំនឹងជឿ។"
  - text_ko: "그러면 믿어 드릴게요."
  - place: x 28% · y 24% · w 40% · tail ↓ (리네)
  - read_order: 2

### panel_054
- art_space: #1 좌상단: 리네 위 별하늘 / #2 우상단: 토라 위 어두운 아케이드 (중좌측 반지와 바실 얼굴은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ្នកបាញ់នៅជាន់លើ ត្រូវឃុំខ្លួន ដោយចិញ្ចៀនខ្ញុំ។"
  - text_ko: "위층의 사수는, 내 반지로 가둡니다."
  - place: x 30% · y 11% · w 58% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "ចាស ព្រះករុណា។"
  - text_ko: "예, 폐하."
  - place: x 78% · y 24% · w 34% · tail ↓ (토라)
  - read_order: 2

### panel_055
- silent: true
- gap_after: 60

### panel_056
- art_space: 좌상단 1/3: 그녀 위 별하늘
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ចំណងចុងក្រោយ អ្នកចងខ្លួនឯង។"
  - text_ko: "마지막 매듭은 직접 매요."
  - place: x 30% · y 11% · w 50% · tail ↓ (리네)
  - read_order: 1

### panel_057
- silent: true
- gap_after: 480

### panel_058
- silent: true
- gap_after: 60

### panel_059
- art_space: 좌상단 1/3: 빛나는 문간 위 방의 어두운 윗모서리
- gap_after: 60
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ហេតុអ្វីស្តេចមកធ្វើចំណាប់ខ្មាំងនៅនគរគេ?"
  - text_ko: "왕이 왜 남의 나라 볼모가 돼요?"
  - place: x 32% · y 10% · w 60% · tail ↓ (리네)
  - read_order: 1

### panel_060
- art_space: 좌상단 1/3: 방의 어두운 윗모서리
- gap_after: 80
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ខ្ញុំមិនទាន់អាចប្រាប់បានទេ។"
  - text_ko: "아직은 말 못 합니다."
  - place: x 30% · y 9% · w 50% · tail ↘ (헤론)
  - read_order: 1
- bubble_2:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ខ្ញុំមិនកុហកទេ។"
  - text_ko: "거짓말은 하지 않습니다."
  - place: x 28% · y 22% · w 40% · tail ↘ (헤론)
  - read_order: 2

### panel_061
- art_space: 하단 1/3: 두 사람 앞 어두운 바닥 (날개·용 머리·두 얼굴은 비움)
- gap_after: 120
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "បើអ្នកប្រាប់ឲ្យខ្ញុំថយ ខ្ញុំនឹងថយ។"
  - text_ko: "물러서라고 하면, 물러서겠습니다."
  - place: x 56% · y 86% · w 60% · tail ↗ (헤론)
  - read_order: 1

### panel_062
- silent: true
- gap_after: 160

### panel_063
- art_space: 좌상단 1/3: 방의 어두운 윗모서리
- gap_after: 560
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "…ខ្ញុំនឹងមិននិយាយទេ។ ពាក្យនោះ។"
  - text_ko: "…안 할 거예요. 그 말."
  - place: x 30% · y 10% · w 52% · tail ↓ (리네)
  - read_order: 1

### panel_064
- art_space: 하단 1/3: 조용한 어둠 (끝 캡션 자리)
- gap_after: 640
- bubble_1:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 50% · y 82% · w 60%
  - read_order: 1
