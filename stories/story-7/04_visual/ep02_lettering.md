# EP02 「오늘은 여기까지」 레터링 명세 — letterer (크메르어판, 뷰어가 말풍선을 그림)

- 입력: `03_episode/ep02_script_final.md`(text_km = 대본 KM 문구 그대로, 읽기만), `04_visual/ep02_shotlist.md`(bubble area → art_space, gap_after), `02_story/tension-curve.md` EP2
- 이미지에는 글자 0. 아래 `art_space`는 prompt-smith가 Flow 프롬프트의 빈 자리 문장으로 옮긴다. `text_ko`는 참고용, 화면에 나오지 않는다.
- place: x/y = 말풍선 중심, w = 최대 폭(패널 대비 %). 모든 말풍선은 x − w/2 ≥ 0, x + w/2 ≤ 100, w ≤ 85.
- panel_024: 샷리스트는 바실 말풍선을 우하단, 리네를 좌상단에 두었으나 위→아래 읽기 순서를 지키려고 바실(1)을 우측 중간, 리네(2)를 하단에 둔다. art_space도 그에 맞춤.
- P43 회상은 무텍스트(대본 · 샷리스트 모두 회상 캡션 없음) → memory 말풍선 없음, silent.
- 합계: 패널 55 · 말풍선 50 + 끝 캡션 1(narration) · 효과음 1 · 패널당 최대 2 · 무대사 22 + 효과음만 1

### panel_001
- silent: true
- gap_after: 0

### panel_002
- art_space: 좌상단 1/3: 그녀 쪽 문 아치 위의 어둑한 민 흰 회벽
- gap_after: 40
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "យប់នេះ ត្រឹមនេះសិន។"
  - text_ko: "오늘은 여기까지예요."
  - place: x 30% · y 12% · w 48% · tail ↘ (리네, 전경 좌측 어깨)
  - read_order: 1

### panel_003
- art_space: 우상단 1/3: 문틈 위 짙은 참나무 문짝의 민 면
- gap_after: 0
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "យល់ព្រម។"
  - text_ko: "예."
  - place: x 70% · y 12% · w 34% · tail ↙ (헤론, 문틈)
  - read_order: 1

### panel_004
- silent: true
- gap_after: 0

### panel_005
- silent: true
- gap_after: 60

### panel_006
- art_space: 상단 1/3: 문간 위 어두운 통로 천장과 민 흰 회벽
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "កណ្ដាលអធ្រាត្រ ដូចខ្ញុំផ្ដាំ។"
  - text_ko: "자정에 보고하라 했죠."
  - place: x 28% · y 9% · w 50% · tail ↓ (리네, 좌측)
  - read_order: 1
- bubble_2:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "ចាស ព្រះករុណា។"
  - text_ko: "예, 폐하."
  - place: x 70% · y 22% · w 44% · tail ↓ (토라, 우측)
  - read_order: 2

### panel_007
- art_space: 우상단 1/3: 토라 너머 어두운 통로
- gap_after: 40
- bubble_1:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "អ្នកបាញ់ស្នានៅក្នុងគុក ស្លាប់ហើយ។"
  - text_ko: "감옥의 석궁수가 죽었습니다."
  - place: x 60% · y 11% · w 70% · tail ↓ (토라, 중앙 우측)
  - read_order: 1

### panel_008
- silent: true
- gap_after: 0

### panel_009
- art_space: 좌상단 1/3: 손 뒤 어두운 통로 바닥과 벽 (비늘·손바닥은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "នៅក្នុងកណ្ដាប់ដៃអ្នកស្លាប់។"
  - text_ko: "죽은 자의 주먹에 있었습니다."
  - place: x 38% · y 12% · w 64% · tail ↘ (토라, 화면 밖 우하단)
  - read_order: 1

### panel_010
- silent: true
- gap_after: 120

### panel_011
- art_space: 상단 1/3: 어두운 통로 천장 (뒤쪽 작은 헤론 얼굴은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ទុកសពនៅដដែល។ ខ្ញុំនឹងទៅមើលដោយខ្លួនឯង។"
  - text_ko: "시신은 그대로 둬요. 내가 직접 가서 봐요."
  - place: x 40% · y 9% · w 76% · tail ↙ (리네, 좌측)
  - read_order: 1
- bubble_2:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "ជួងដំបូង លោកមហាមន្ត្រីកោះប្រជុំនៅសាលបល្ល័ង្ក។"
  - text_ko: "재상께서 첫 종에 옥좌 홀 회의를 부르셨습니다."
  - place: x 58% · y 26% · w 78% · tail ↘ (토라, 우측)
  - read_order: 2

### panel_012
- silent: true
- gap_after: 300

### panel_013
- silent: true
- gap_after: 0

### panel_014
- art_space: 상단 1/3: 바실 위·뒤의 흐릿한 흰 회벽과 진홍 깃발
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ព្រះករុណា យប់មិញ សត្វនោះប៉ុនប៉ងធ្វើឃាត។"
  - text_ko: "폐하, 어젯밤 짐승이 목숨을 노렸습니다."
  - place: x 50% · y 9% · w 80% · tail ↓ (바실)
  - read_order: 1
- bubble_2:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ឮថា ក្នុងដៃអ្នកស្លាប់ មានស្រកានាគផង។"
  - text_ko: "죽은 자의 손에서 용의 비늘이 나왔다지요."
  - place: x 50% · y 25% · w 76% · tail ↓ (바실)
  - read_order: 2

### panel_015
- art_space: 상단 1/3 좌측: 부조 왼쪽의 흐릿한 민 흰 회벽 (부조 날개·얼굴은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "លោកពូដឹងដំណឹងលឿនម្ល៉េះ។"
  - text_ko: "소식이 빠르시네요."
  - place: x 34% · y 9% · w 60% · tail ↘ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ខ្ញុំទើបតែដឹងពេលកណ្ដាលអធ្រាត្រទេ។"
  - text_ko: "나는 자정에야 들었는데요."
  - place: x 36% · y 24% · w 64% · tail ↘ (리네)
  - read_order: 2

### panel_016
- art_space: 상단 1/3: 바실 뒤 흐릿한 흰 회벽과 깃발 (얼굴은 비움)
- gap_after: 40
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "រឿងរាជវាំង រាជវាំងដឹងមុនជាធម្មតា។"
  - text_ko: "궁정의 일이니, 궁정이 먼저 알지요."
  - place: x 50% · y 9% · w 76% · tail ↓ (바실)
  - read_order: 1
- bubble_2:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "ពេលកាន់ទុក្ខ សូមតាំងអ្នកកាន់រាជ្យជំនួស ហើយដាក់របស់នោះក្រោមដីចុះ។"
  - text_ko: "상중에는 섭정을 세우시고, 저것은 지하에 두시지요."
  - place: x 50% · y 25% · w 84% · tail ↓ (바실)
  - read_order: 2

### panel_017
- art_space: 좌상단 1/3: 흐릿한 진홍 깃발과 기둥
- gap_after: 0
- bubble_1:
  - speaker: 영주 (LORDS, 속삭임)
  - type: dialogue
  - text_km: "ឮថា ក្សត្រីជាប់មន្តសត្វនោះ…"
  - text_ko: "짐승에게 홀린 여왕이라더니…"
  - place: x 34% · y 11% · w 60% · tail ↙ (속삭이는 영주들)
  - read_order: 1

### panel_018
- art_space: 우상단 1/3: 옥좌 옆 민 흰 회벽 (리네 얼굴 위쪽 끝은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "សម្រាប់មកុដទើបពាក់ប្រាំពីរថ្ងៃ បន្ទុកនេះធ្ងន់ពេកហើយ។"
  - text_ko: "칠 일 된 왕관에는, 무거운 짐이지요."
  - place: x 62% · y 11% · w 70% · tail ↙ (바실)
  - read_order: 1

### panel_019
- art_space: 상단 1/3 좌측: 부조 왼쪽의 민 흰 회벽 (부조 날개·그녀 얼굴은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "មិនមែនប្រាំពីរថ្ងៃទេ។ ដប់ថ្ងៃហើយ។"
  - text_ko: "칠 일이 아니라 열흘이에요."
  - place: x 32% · y 9% · w 56% · tail ↘ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ដង្ហើមផុត មកុដឆ្លងភ្លាម។"
  - text_ko: "왕관은 숨과 함께 넘어오니까요."
  - place: x 32% · y 23% · w 50% · tail ↘ (리네)
  - read_order: 2

### panel_020
- silent: true
- gap_after: 60

### panel_021
- art_space: 좌상단 1/3: 위쪽 민 흰 회벽과 진홍 깃발
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "អ៊ីចឹង សូមស្ដាប់ឆន្ទៈរាជវាំងចុះ។"
  - text_ko: "그럼, 궁정의 뜻을 여쭙지요."
  - place: x 34% · y 10% · w 60% · tail ↓ (바실, 좌측 계단 아래)
  - read_order: 1

### panel_022
- art_space: 상단 1/3 좌측: 부조 왼쪽의 민 흰 회벽
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "សន្ធិសញ្ញា មាត្រាទីបី។"
  - text_ko: "조약 3조."
  - place: x 30% · y 8% · w 44% · tail ↘ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ការចាត់ចែងចំណាប់ខ្មាំង ស្រេចលើរាជវាំងរបស់អ្នកកាន់ស្រមោល។"
  - text_ko: "볼모의 처우는 맡은 군주의 궁정이 정한다."
  - place: x 42% · y 22% · w 80% · tail ↘ (리네)
  - read_order: 2

### panel_023
- art_space: 상단 1/4: 옥좌 쪽 어둑한 위쪽 벽
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ្នកកាន់ស្រមោល គឺខ្ញុំ។"
  - text_ko: "맡은 군주는 나예요."
  - place: x 32% · y 7% · w 48% · tail ↑ (리네, 화면 밖 위 옥좌)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "លើកដៃបាន តែពេលខ្ញុំហៅ។"
  - text_ko: "표결은 내가 부를 때 열려요."
  - place: x 62% · y 18% · w 56% · tail ↑ (리네, 화면 밖 위 옥좌)
  - read_order: 2

### panel_024
- art_space: 우측 중간: 바실 머리 위 옅은 벽 / 하단 1/4: 계단 아래 민 옅은 바닥 (두 얼굴·날개 그림자는 비움)
- gap_after: 0
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "អ៊ីចឹង សូមប្រាប់ថា នឹងហៅពេលណា?"
  - text_ko: "그럼 언제 부르시렵니까?"
  - place: x 66% · y 40% · w 60% · tail ↓ (바실)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ថ្ងៃដែលខ្ញុំនាំដៃខ្មៅ ដែលសម្លាប់អ្នកបាញ់ស្នា មកឈរក្នុងសាលនេះ។"
  - text_ko: "석궁수를 죽인 손을, 이 홀에 세우는 날에요."
  - place: x 44% · y 86% · w 80% · tail ↖ (리네, 전경 좌상단)
  - read_order: 2

### panel_025
- art_space: 상단 1/3: 바실 뒤 깃발과 벽
- gap_after: 40
- bubble_1:
  - speaker: 바실 (CHANCELLOR)
  - type: dialogue
  - text_km: "បើថ្ងៃនោះមកយឺត ដៃរាជវាំងប្រហែលជាលើកមុនហើយ។"
  - text_ko: "그날이 늦어지면, 궁정의 손이 먼저 올라가겠지요."
  - place: x 50% · y 10% · w 80% · tail ↓ (바실)
  - read_order: 1

### panel_026
- silent: true
- gap_after: 320

### panel_027
- art_space: 상단 1/3: 그늘 진 민 흰 안벽
- gap_after: 40
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ដៃអ្នកម៉េចហើយ?"
  - text_ko: "팔은요?"
  - place: x 28% · y 8% · w 44% · tail ↓ (리네, 좌측)
  - read_order: 1
- bubble_2:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "កំពុងផ្សះ។"
  - text_ko: "붙고 있습니다."
  - place: x 72% · y 20% · w 36% · tail ↓ (헤론, 우측)
  - read_order: 2

### panel_028
- art_space: 우상단 1/3: 기둥 사이 옅은 하늘
- gap_after: 0
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ខ្ញុំនឹងទៅជួបពួកគ្នាខ្ញុំ នៅខ្លោងទ្វារ ដោយខ្លួនឯង។"
  - text_ko: "아치에서 내 동족을 직접 만나겠습니다."
  - place: x 58% · y 11% · w 76% · tail ↓ (헤론, 중앙 우측)
  - read_order: 1

### panel_029
- art_space: 상단 1/3: 그늘 진 민 흰 안벽 (얼굴은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "មិនបានទេ។"
  - text_ko: "안 돼요."
  - place: x 30% · y 8% · w 34% · tail ↘ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "បើចំណាប់ខ្មាំងទៅខ្លោងទ្វារ លោកពូនឹងហៅថាឃុបឃិត។"
  - text_ko: "볼모가 아치에 가면, 숙부님은 그걸 음모라고 부를 거예요."
  - place: x 50% · y 22% · w 84% · tail ↓ (리네)
  - read_order: 2

### panel_030
- art_space: 상단 1/3: 두 사람 뒤 옅은 하늘과 기둥머리
- gap_after: 0
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ស្រកានោះ ជារឿងខាងខ្ញុំ។"
  - text_ko: "비늘은 내 쪽 일입니다."
  - place: x 68% · y 8% · w 52% · tail ↘ (헤론, 우측)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "រឿងខាងអ្នក កើតក្នុងវាំងខ្ញុំ។ អ៊ីចឹង ជារឿងខ្ញុំ។"
  - text_ko: "당신 쪽 일이 내 성 안에서 일어났어요. 그럼 내 일이에요."
  - place: x 40% · y 23% · w 76% · tail ↙ (리네, 좌측)
  - read_order: 2

### panel_031
- art_space: 상단 1/3: 좌측 그녀 뒤 흰 벽 / 우측 기둥 사이 옅은 하늘
- gap_after: 40
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "កាត់ក្ដីនៅមុខរាជវាំង។ ឲ្យគ្រប់គ្នាឃើញ។"
  - text_ko: "궁정 앞에서 재판해요. 모두가 보는 데서."
  - place: x 36% · y 9% · w 66% · tail ↓ (리네, 중앙 좌측)
  - read_order: 1
- bubble_2:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ចន្លោះពេលនោះ ពួកគេនឹងមកទៀត។"
  - text_ko: "그사이 그들은 또 옵니다."
  - place: x 64% · y 24% · w 60% · tail ↘ (헤론, 전경 우측)
  - read_order: 2

### panel_032
- art_space: 좌상단 1/3: 그늘 진 민 흰 안벽 (얼굴은 비움)
- gap_after: 60
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ខ្ញុំដឹង។ ប៉ុន្តែនៅតែកាត់ក្ដី។"
  - text_ko: "알아요. 그래도 재판이에요."
  - place: x 38% · y 10% · w 64% · tail ↓ (리네)
  - read_order: 1

### panel_033
- art_space: 우상단 1/3: 그의 옆얼굴 위 기둥 사이 옅은 하늘
- gap_after: 120
- bubble_1:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "យល់ព្រម។ ខ្ញុំនឹងធ្វើតាមវិធីអ្នក។"
  - text_ko: "예. 당신 방식으로 하겠습니다."
  - place: x 58% · y 10% · w 74% · tail ↘ (헤론, 전경 우측)
  - read_order: 1

### panel_034
- silent: true
- gap_after: 0

### panel_035
- art_space: 좌하단 작은 영역: 손에서 떨어진 난간 윗면의 민 돌 (효과음 자리, 손·금은 비움)
- gap_after: 0
- sfx_1:
  - text_km: "ក្រាក់…"
  - text_ko: "빠직"
  - place: x 24% · y 80% · size 8% · rot -6

### panel_036
- silent: true
- gap_after: 360

### panel_037
- art_space: 상단 1/4: 계단 위 어두운 궁륭 (궁륭의 날개 그림자는 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "អ្នកជាសាក្សី។ មើលតែប៉ុណ្ណោះ។"
  - text_ko: "당신은 증인이에요. 보기만 해요."
  - place: x 30% · y 6% · w 52% · tail ↓ (리네, 앞서 내려감)
  - read_order: 1
- bubble_2:
  - speaker: 헤론 (HOSTAGE)
  - type: dialogue
  - text_km: "ខ្ញុំនឹងមើល។"
  - text_ko: "보겠습니다."
  - place: x 72% · y 16% · w 36% · tail ↓ (헤론)
  - read_order: 2

### panel_038
- silent: true
- gap_after: 0

### panel_039
- silent: true
- gap_after: 0

### panel_040
- silent: true
- gap_after: 0

### panel_041
- art_space: 좌상단 1/4: 벤치 너머 어둡고 거친 돌벽 (작게)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "…សក់សើម។"
  - text_ko: "…젖었어요."
  - place: x 26% · y 10% · w 34% · tail ↗ (리네, 손이 들어오는 우상단)
  - read_order: 1

### panel_042
- art_space: 우상단 1/3: 의원 위 어둡고 거친 돌벽
- gap_after: 40
- bubble_1:
  - speaker: 의원 (PHYSICIAN)
  - type: dialogue
  - text_km: "គ្មានស្នាមរបួសទេ។"
  - text_ko: "상처는 없습니다."
  - place: x 66% · y 9% · w 50% · tail ↓ (의원)
  - read_order: 1
- bubble_2:
  - speaker: 의원 (PHYSICIAN)
  - type: dialogue
  - text_km: "បេះដូងឈប់លោត ទាំងដេកលក់។"
  - text_ko: "잠든 채 심장이 멎었습니다."
  - place: x 62% · y 23% · w 62% · tail ↓ (의원)
  - read_order: 2

### panel_043
- silent: true
- gap_after: 0

### panel_044
- art_space: 상단 1/4: 두 사람 위 어두운 바위 궁륭 (날개 그림자 부분은 비움)
- gap_after: 400
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ឪពុកខ្ញុំ ក៏ស្លាប់បែបនេះដែរ។"
  - text_ko: "아버지도 이렇게 돌아가셨어요."
  - place: x 50% · y 8% · w 62% · tail ↓ (리네)
  - read_order: 1

### panel_045
- silent: true
- gap_after: 440

### panel_046
- art_space: 상단 1/3: 그녀 뒤 어둡고 거친 돌벽 (얼굴은 비움)
- gap_after: 0
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ទឹកបានចូលមក ហើយចេញទៅវិញ។"
  - text_ko: "물은 들어왔다가 나갔어요."
  - place: x 46% · y 9% · w 70% · tail ↓ (리네)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ដៃខ្មៅនោះ នៅក្នុងវាំងនេះនៅឡើយ។"
  - text_ko: "그 손이 아직 이 성 안에 있어요."
  - place: x 50% · y 24% · w 70% · tail ↓ (리네)
  - read_order: 2

### panel_047
- art_space: 상단 1/3: 문 위 통로의 어두운 궁륭
- gap_after: 120
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ទុកសពនេះនៅទីនេះ ដល់ថ្ងៃកាត់ក្ដី។ អ្នកជាអ្នកយាម។"
  - text_ko: "시신은 재판 날까지 여기 둬요. 당신이 지켜요."
  - place: x 40% · y 9% · w 76% · tail ↙ (리네, 좌측)
  - read_order: 1
- bubble_2:
  - speaker: 토라 (CAPTAIN)
  - type: dialogue
  - text_km: "ចាស ព្រះករុណា។"
  - text_ko: "예, 폐하."
  - place: x 72% · y 25% · w 40% · tail ↓ (토라, 우측)
  - read_order: 2

### panel_048
- silent: true
- gap_after: 0

### panel_049
- silent: true
- gap_after: 0

### panel_050
- silent: true
- gap_after: 0

### panel_051
- art_space: 좌상단 1/3: 그녀 뒤로 솟은 그늘 진 민 흰 안뜰 벽
- gap_after: 40
- bubble_1:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "ថ្ងៃនេះ លោកក៏នៅក្នុងសាលដែរ។"
  - text_ko: "오늘 홀에 계셨죠."
  - place: x 36% · y 9% · w 64% · tail ↓ (리네, 중앙 좌측)
  - read_order: 1
- bubble_2:
  - speaker: 리네 (QUEEN)
  - type: dialogue
  - text_km: "លោកមានអ្វីចង់និយាយឬ?"
  - text_ko: "할 말이 있으신가요."
  - place: x 34% · y 23% · w 56% · tail ↓ (리네)
  - read_order: 2

### panel_052
- silent: true
- gap_after: 60

### panel_053
- art_space: 상단 1/3: 벽 위 짙푸른 네모 하늘 (우르 얼굴은 비움)
- gap_after: 480
- bubble_1:
  - speaker: 우르 (ENVOY)
  - type: dialogue
  - text_km: "ព្រឹកព្រលឹមថ្ងៃនោះ គ្មាននាគណាហោះទៅវិញទេ។"
  - text_ko: "그날 새벽, 하늘을 난 용은 없었습니다."
  - place: x 56% · y 10% · w 80% · tail ↓ (우르, 중앙 우측)
  - read_order: 1

### panel_054
- silent: true
- gap_after: 560

### panel_055
- art_space: 하단 1/3: 안뜰 바닥의 고요한 깊은 그늘 (끝 캡션 자리, 그녀 얼굴은 비움)
- gap_after: 640
- bubble_1:
  - speaker: (캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៣ —"
  - text_ko: "— 3화에 계속 —"
  - place: x 50% · y 84% · w 60%
  - read_order: 1
