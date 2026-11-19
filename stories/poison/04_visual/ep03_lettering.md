# EP03 레터링 명세 — letterer (크메르어 말풍선, 뷰어가 그림)

- 작성: letterer · 2026-11-19 · Phase 4 step 3 · v1 · Khmer edition (`webtoon-khmer-edition` §3)
- 입력: `03_episode/ep03_script_final.md`(크메르어 원문 = 기준) · `04_visual/ep03_shotlist.md`(`art_space` · `aspect` · `gap_after` · `dialogue_ref` 꼬리 = 기준) · `04_visual/style-bible.md` §8 · `02_story/glossary_km.md` · 형식 `04_visual/ep02_lettering.md`
- `art_space`는 샷리스트 문장(좌표 포함) 그대로. 모든 `place`(말풍선 중심 x/y, 폭 w)는 그 빈 자리 안. 꼬리 방향 · read_order는 샷리스트 `dialogue_ref`를 따름. `gap_after`는 샷리스트 각 패널 beat 줄(§F).
- 패널 60 / 말풍선 87(대사 58 · 생각 27 · 외침 1 + 끝 캡션 1) / 효과음 1(P32) / 소품 글씨 0 / 무대사 5(P15 · P27 · P37 · P43 · P56, + P60은 끝 캡션만)

## 원칙

1. **이미지에는 글자가 없다.** 말풍선 · 대사 · 효과음 · 캡션 글자 모두 없음. 각 패널은 `art_space` 자리를 조용한 배경으로 비운다 → prompt-smith가 영문(style-bible §8 문장)으로 옮겨 프롬프트에 넣는다.
2. **뷰어가 말풍선을 그린다**(`km_tool.py build`). `place`: x/y = 말풍선 중심, w = 최대 폭, 모두 패널 대비 %. 꼬리: ↙ ↓ ↘(아래) · ↖ ↑ ↗(위). thought · narration은 꼬리 없음. 샷리스트의 가장자리 꼬리 ← / →는 ↙ / ↘로 옮겼다.
3. `text_km`은 대본 `KM:` 문구 그대로(km_tool check로 확인). `text_ko`는 참고용, 화면에 안 나옴.
4. 위에서 아래 = `read_order`. 말풍선은 얼굴 · 손 · 은침 · 탕약 그릇 · 봉한 끈 매듭 · 행주 · 연보랏빛 번짐 · 앞섶의 흰 천 · 손수건 · 약상자 · 당번 판 · 등롱을 가리지 않는다(모두 `art_space` 밖).
5. 종류(style-bible §8): 채령 생각 = thought(27) · 왕자 P32 「គ្រហឹម!」 = shout(회차 유일) · **민 상궁은 절대 shout 아님**(15풍선 모두 흰 dialogue, P46–P55 반전 대사 12풍선 포함) · 끝 캡션만 narration · memory 미사용.
6. `gap_after`(샷리스트 각 패널 beat 줄, px): 기본 40 · P05 / P13 / P35 120 · P27 / P53 / P56 240 · P42 400(가장 긺, 아침 → 저녁) · P60 320 · 미니 반전 연쇄 P19–P21 · P23 · P25–P26 · P28–P33 20, P22 0 · 주력 반전 연쇄 P45–P52 · P54 · P57–P59 20.

---

### panel_001
- aspect: 9:16
- art_space: 위 26%(x 4–96%, y 2–26%) — 창호지 윗부분 · 들보 · 무지 병풍 윗면
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មិនថាក្នុងនោះមានអ្វីទេ…"
  - text_ko: "무엇이 들었든…"
  - place: x 50% · y 14% · w 45%
  - read_order: 1

### panel_002
- aspect: 1:1
- art_space: 위 38%(x 4–96%, y 2–38%) — 초점 밖 창호지 빛 · 병풍(생각 풍선 둘, 위아래). 손 · 천 모서리는 y 44% 아래
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…និយាយតែថា ស្អាត។"
  - text_ko: "…깨끗하다고만."
  - place: x 38% · y 12% · w 37%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បង… ថ្ងៃនេះ ខ្ញុំត្រូវកុហក។"
  - text_ko: "언니. 오늘은 거짓말을 해야 해."
  - place: x 62% · y 28% · w 50%
  - read_order: 2

### panel_003
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 들보 · 문틀 윗부분 · 병풍 윗면. 상궁 머리는 y 32% 아래
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "មុខតឹងម្ល៉េះ កូន។"
  - text_ko: "얼굴이 굳었구나, 얘야."
  - place: x 76% · y 10% · w 37% · tail ↘ (문지방 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្ងៃនេះ មានភ្ញៀវមកពីមន្ទីរពេទ្យវាំង។"
  - text_ko: "오늘은 내의원에서 손님이 오신다."
  - place: x 64% · y 22% · w 61% · tail ↘ (상궁)
  - read_order: 2

### panel_004
- aspect: 3:4
- art_space: 위 왼쪽(x 4–56%, y 2–28%) — 채령 머리 위의 흐린 들보 · 병풍. 감찰 갓은 그 밖 오른쪽
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "…ចាស លោកស្រី។"
  - text_ko: "…예, 마마님."
  - place: x 30% · y 15% · w 32% · tail ↓ (채령)
  - read_order: 1

### panel_005
- aspect: 3:4
- art_space: 위 32%(x 4–96%, y 2–32%) — 창호지 윗부분 · 무지 병풍
- gap_after: 120
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ដានី… ថ្ងៃនេះ គេយករបស់ល្វីងមក។"
  - text_ko: "단이… 오늘은 쓴 거 온대."
  - place: x 50% · y 17% · w 54% · tail ↓ (왕자)
  - read_order: 1

### panel_006
- aspect: 9:16
- art_space: 위 18%(x 4–96%, y 2–18%) — 문틀 위 어두운 들보 · 무지 벽. 사모 꼭대기는 y 22% 아래
- gap_after: 40
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ព្រះអង្គម្ចាស់។ ទូលបង្គំយកថ្នាំប៉ូវ មកថ្វាយ។"
  - text_ko: "왕자 마마. 내의원에서 보약을 들고 왔습니다."
  - place: x 50% · y 10% · w 71% · tail ↓ (의관)
  - read_order: 1

### panel_007
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 창호지 윗부분 · 병풍 · 들보(풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "លោកគ្រូពេទ្យ វ៉ុន អញ្ជើញមកផ្ទាល់ឬ?"
  - text_ko: "원 의관께서 직접 오셨습니까."
  - place: x 65% · y 11% · w 58% · tail ↘ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ដើម្បីឲ្យស្រួលព្រះឧទរ… ត្រូវសោយមុនវាត្រជាក់ បាទ។"
  - text_ko: "왕자 마마 속이 놀라지 않게, 식기 전에 드셔야 하지요."
  - place: x 44% · y 27% · w 76% · tail ↙ (의관)
  - read_order: 2

### panel_008
- aspect: 1:1
- art_space: 위 28%(x 4–96%, y 2–28%) — 흐린 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ខ្ញុំស្អប់របស់ល្វីង!"
  - text_ko: "쓴 거 싫어."
  - place: x 50% · y 15% · w 41% · tail ↓ (왕자)
  - read_order: 1

### panel_009
- aspect: 3:4
- art_space: 위 32%(x 4–96%, y 2–32%) — 밝은 창호지 윗부분 · 병풍
- gap_after: 40
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "បើព្រះអង្គសោយតែមួយចាន…"
  - text_ko: "한 그릇만 드시면…"
  - place: x 28% · y 17% · w 44% · tail ↓ (의관)
  - read_order: 1

### panel_010
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 흐린 창호지 빛 · 들보(풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ដើម្បីឲ្យព្រះអង្គសោយឆ្ងាញ់…"
  - text_ko: "입맛 돋우시게"
  - place: x 31% · y 11% · w 50% · tail ↙ (의관)
  - read_order: 1
- bubble_2:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ទូលបង្គំនឹងផ្ញើទឹកឃ្មុំពីមន្ទីរពេទ្យវាំង មកថ្វាយ។"
  - text_ko: "내의원 꿀을 보내 드리지요."
  - place: x 44% · y 27% · w 77% · tail ↙ (의관)
  - read_order: 2

### panel_011
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 창호지 윗부분 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ទឹកឃ្មុំ? ពិតមែន?"
  - text_ko: "꿀? 진짜?"
  - place: x 24% · y 19% · w 37% · tail ↓ (왕자)
  - read_order: 1

### panel_012
- aspect: 3:4
- art_space: 위 32%(x 4–96%, y 2–32%) — 들보 · 천장. 갓 꼭대기 y 34% 아래
- gap_after: 40
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "លោកអធិការ ក៏មកមើលការភ្លក់ថ្នាំស្ងោរដែរឬ?"
  - text_ko: "감찰 나리께서 탕약 시식까지 보십니까?"
  - place: x 39% · y 10% · w 66% · tail ↙ (화면 왼쪽 아래 = 의관 뒤통수)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "មួយឆ្នាំមុន អ្នកភ្លក់ម្នាក់ឈឺ ហើយចេញពីវាំង។"
  - text_ko: "1년 전, 기미 하나가 앓아 나갔소."
  - place: x 59% · y 24% · w 70% · tail ↓ (감찰)
  - read_order: 2

### panel_013
- aspect: 3:4
- art_space: 위 32%(x 4–96%, y 2–32%) — 어두운 들보 · 문틀(대사 + 작은 생각)
- gap_after: 120
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ហេតុនេះ ខ្ញុំនៅទីនេះ។"
  - text_ko: "그래서 내가 여기 있소."
  - place: x 73% · y 10% · w 42% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ឈឺ ហើយចេញពីវាំង?"
  - text_ko: "…앓아 나갔다고?"
  - place: x 24% · y 24% · w 37%
  - read_order: 2

### panel_014
- aspect: 3:4
- art_space: 왼쪽 반 위(x 4–50%, y 2–48%) — 연기 · 김 반대편의 흐린 창호지 빛(풍선 둘, 위아래). 소매는 y 62% 아래
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ខ្ញុំម្ចាស់សូមអុជធូប។"
  - text_ko: "향을 올리겠습니다."
  - place: x 27% · y 14% · w 42% · tail ↘ (화면 오른쪽 아래 = 손)
  - read_order: 1
- bubble_2:
  - speaker: 원 의관(화면 가장자리)
  - type: dialogue
  - text_km: "សូមភ្លក់មុនវាត្រជាក់ បាទ។"
  - text_ko: "식기 전에 부탁드립니다."
  - place: x 27% · y 36% · w 44% · tail ↙ (왼쪽 가장자리 = 의관 소매)
  - read_order: 2
- note: 의관 대사(read_order 2)는 화면 왼쪽 가장자리 소매 쪽으로 꼬리 ↙(샷리스트의 ←를 아래 왼쪽 꼬리로).

### panel_015
- aspect: 1:1
- silent: true
- gap_after: 40

### panel_016
- aspect: 1:1
- art_space: 위 왼쪽 모서리(x 4–48%, y 3–30%) — 은침 반대편 흐린 배경
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នៅតែពណ៌ប្រាក់។"
  - text_ko: "은빛이다."
  - place: x 29% · y 16% · w 34% · tail ↘ (화면 오른쪽 흐린 감찰)
  - read_order: 1
- note: 샷리스트 꼬리 →(오른쪽 흐린 감찰)를 ↘로. 은침은 풍선 오른쪽 밖.

### panel_017
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 창호지 윗부분 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ឃើញទេ? ល្វីងមែនទេ?"
  - text_ko: "봐, 쓰지?"
  - place: x 25% · y 19% · w 38% · tail ↓ (왕자)
  - read_order: 1

### panel_018
- aspect: 1:1
- art_space: 위 40%(x 4–96%, y 2–40%) — 흐린 창호지 빛(생각 풍선 둘, 입술 피함)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ចុងអណ្ដាត…"
  - text_ko: "…혀끝이,"
  - place: x 38% · y 12% · w 30%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ស្ពឹក។"
  - text_ko: "저려."
  - place: x 62% · y 30% · w 24%
  - read_order: 2

### panel_019
- aspect: 1:1
- art_space: 위 38%(x 4–96%, y 2–38%) — 그릇 반대쪽의 흐린 병풍(생각 풍선 둘)
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ក្លិនល្វីងរបស់ឱសថ គ្របវាបាត់…"
  - text_ko: "쓴 약초 냄새에 묻혀서…"
  - place: x 38% · y 12% · w 52%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ធុំក្លិន ក៏មិនដឹង។"
  - text_ko: "냄새로는 몰라."
  - place: x 62% · y 28% · w 38%
  - read_order: 2

### panel_020
- aspect: 1:1
- art_space: 위 40% 띠(x 4–96%, y 2–40%) — 흐린 어두운 머리칼 · 그늘
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មានឫសស្វាយម្លប់ឆៅ។"
  - text_ko: "생 그늘보라."
  - place: x 38% · y 12% · w 38%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ជាថ្នាំលាប… មិនត្រូវលេបទេ។"
  - text_ko: "바르는 약이야. 먹는 약이 아니야."
  - place: x 62% · y 30% · w 48%
  - read_order: 2

### panel_021
- aspect: 3:4
- art_space: 위 왼쪽(x 4–52%, y 2–34%) — 채령 어깨 쪽 위의 들보 · 병풍(생각 풍선 둘). 상궁 얼굴 · 손은 그 밖
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "លោកស្រី…"
  - text_ko: "마마님이…"
  - place: x 18% · y 11% · w 26%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "សាកល្បងខ្ញុំទៀតឬ?"
  - text_ko: "또 시험하시는 거야?"
  - place: x 32% · y 25% · w 37%
  - read_order: 2

### panel_022
- aspect: 1:1
- art_space: 위 38%(x 4–96%, y 2–38%) — 흐린 옻칠 상 면 · 장판(생각 풍선 둘)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ទេ។ វាបិទជិត មកត្រង់ពីមន្ទីរពេទ្យវាំង។"
  - text_ko: "아니야. 내의원에서 봉해서 곧장 왔어."
  - place: x 38% · y 12% · w 64%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ដៃលោកស្រី មិនបានប៉ះសោះ។"
  - text_ko: "마마님 손은 닿지도 않았어."
  - place: x 62% · y 28% · w 45%
  - read_order: 2

### panel_023
- aspect: 1:1
- art_space: 위 32%(x 4–96%, y 2–32%) — 흐린 어두운 병풍 · 그늘
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ដូច្នេះ…"
  - text_ko: "그럼…"
  - place: x 38% · y 10% · w 26%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មានដៃមួយទៀត លួចដាក់ឫសនោះចូល។"
  - text_ko: "다른 손이 넣은 거야."
  - place: x 62% · y 24% · w 51%
  - read_order: 2

### panel_024
- aspect: 9:16
- art_space: 가운데 칸 위쪽(x 6–94%, y 32–54%) — 김 위의 조용한 병풍 · 장판 면(생각 풍선 둘, 위아래) / 대안 구도에서는 왕자 위 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បើនិយាយចេញ… ត្រូវយកផេះធូបមកបញ្ជាក់។"
  - text_ko: "말하면… 재로 증명해야 해."
  - place: x 38% · y 38% · w 60%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ហើយខ្ញុំក្លាយជាកូនស្រីអ្នកលក់ឱសថនោះទៀត។"
  - text_ko: "그럼 또 그 약재상의 딸이 돼."
  - place: x 60% · y 48% · w 65%
  - read_order: 2
- note: 3단 분할의 가운데 칸 위쪽(y 32–54%) 안에서만. 위 칸(향 꽁초) · 아래 칸(왕자)과 칸 사이 검은 띠에는 걸치지 않는다.

### panel_025
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 창호지 빛 · 병풍(풍선 둘, 위아래)
- gap_after: 20
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ធូបឆេះអស់ហើយ។"
  - text_ko: "향이 다 탔군요."
  - place: x 22% · y 11% · w 32% · tail ↙ (왼쪽 가장자리 = 의관)
  - read_order: 1
- bubble_2:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "យ៉ាងម៉េចដែរ ប្អូនអ្នកភ្លក់?"
  - text_ko: "기미 궁녀님, 어떻습니까?"
  - place: x 31% · y 25% · w 50% · tail ↙ (왼쪽 가장자리 = 의관)
  - read_order: 2

### panel_026
- aspect: 9:16
- art_space: 위 띠(x 4–70%, y 2–20%) — 비어 있는 장판(감찰 목화는 그 밖 오른쪽)
- gap_after: 20
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "…ស្អាត ចាស។"
  - text_ko: "…깨끗합니다."
  - place: x 37% · y 11% · w 30% · tail ↓ (정수리)
  - read_order: 1

### panel_027
- aspect: 1:1
- silent: true
- gap_after: 240

### panel_028
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 창호지 빛 · 병풍(그릇 · 왕자 얼굴 피함)
- gap_after: 20
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "មុនវាត្រជាក់…"
  - text_ko: "식기 전에,"
  - place: x 22% · y 11% · w 32% · tail ↙ (왼쪽 가장자리 = 의관)
  - read_order: 1
- bubble_2:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "សូមសោយឲ្យអស់ ក្នុងមួយដង្ហើម ព្រះអង្គ។"
  - text_ko: "단숨에 드십시오, 마마."
  - place: x 37% · y 25% · w 62% · tail ↙ (왼쪽 가장자리 = 의관)
  - read_order: 2

### panel_029
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 흐린 병풍 · 창호지(풍선 둘)
- gap_after: 20
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ព្រះអង្គម្ចាស់!"
  - text_ko: "왕자 마마!"
  - place: x 38% · y 11% · w 35% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ជ្រាបទេ ខ្លាឃើញថ្នាំល្វីង វាធ្វើអ្វី?"
  - text_ko: "호랑이는 쓴 약을 보면 뭘 하는지 아세요?"
  - place: x 62% · y 25% · w 62% · tail ↓ (채령)
  - read_order: 2

### panel_030
- aspect: 1:1
- art_space: 위 26%(x 4–96%, y 2–26%) — 흐린 무지 병풍
- gap_after: 20
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "…ធ្វើអ្វី?"
  - text_ko: "…뭘 하는데?"
  - place: x 50% · y 14% · w 28% · tail ↓ (왕자)
  - read_order: 1

### panel_031
- aspect: 3:4
- art_space: 위 32%(x 4–96%, y 2–32%) — 흐린 병풍 · 창호지. 세운 손은 y 42% 아래
- gap_after: 20
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "គ្រហឹម! ហើយលោតចូលខាំ!"
  - text_ko: "어흥! 하고 덤벼요!"
  - place: x 50% · y 17% · w 42% · tail ↓ (채령)
  - read_order: 1

### panel_032
- aspect: 9:16
- art_space: 위 20%(x 4–96%, y 2–20%) — 흐린 병풍 · 창호지(대사) + 효과음 작은 자리(x 70–96%, y 28–44%) — 물줄기 위 조용한 병풍 면
- gap_after: 20
- bubble_1:
  - speaker: 왕자
  - type: shout
  - text_km: "គ្រហឹម!"
  - text_ko: "어흥!"
  - place: x 50% · y 11% · w 30% · tail ↓ (왕자)
  - read_order: 1
- sfx_1:
  - text_km: "ព្រូស!"
  - text_ko: "철퍽"
  - place: x 83% · y 36% · size 9% · rot -10
- note: 외침(shout)은 이 회차 유일 — 왕자의 장난 「어흥!」. P31 채령의 「어흥!」은 흰 dialogue(설명하는 말투). 효과음 ព្រូស!(철퍽)은 물줄기 위 오른쪽 작은 빈자리(x 70–96%, y 28–44%) 안.

### panel_033
- aspect: 3:4
- art_space: 위 왼쪽(x 4–38%, y 4–26%) — 감찰 얼굴 옆 어두운 문틀 · 들보
- gap_after: 20
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "……"
  - text_ko: "……"
  - place: x 24% · y 15% · w 24% · tail ↘ (감찰)
  - read_order: 1
- note: 말줄임만 있는 작은 풍선. 샷리스트 꼬리 →(감찰 얼굴)를 ↘로.

### panel_034
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 창호지 · 병풍(풍선 둘)
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ខ្លាជាអ្នកធ្វើ!"
  - text_ko: "호랑이가 그랬어."
  - place: x 24% · y 11% · w 35% · tail ↓ (왕자)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "…ខ្លាជាអ្នកធ្វើមែន។"
  - text_ko: "…호랑이가 그랬네요."
  - place: x 74% · y 27% · w 40% · tail ↓ (채령)
  - read_order: 2

### panel_035
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 밝은 창호지 · 병풍(풍선 둘)
- gap_after: 120
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ព្រះអង្គ មិនអីទេឬ?"
  - text_ko: "다치신 데는 없으십니까."
  - place: x 25% · y 11% · w 38% · tail ↙ (의관)
  - read_order: 1
- bubble_2:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ថ្នាំ… ស្ងោរថ្មីក៏បាន ព្រះអង្គ។"
  - text_ko: "약은 또 달이면 되지요."
  - place: x 34% · y 25% · w 55% · tail ↙ (의관)
  - read_order: 2

### panel_036
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 흐린 병풍 · 창호지
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ខ្ញុំសូមជូត។"
  - text_ko: "제가 닦겠습니다."
  - place: x 50% · y 16% · w 31% · tail ↓ (채령)
  - read_order: 1

### panel_037
- aspect: 1:1
- silent: true
- gap_after: 40

### panel_038
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 비어 있는 장판(생각 풍선 둘)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "កន្លែងបោកគក់…"
  - text_ko: "빨래터…"
  - place: x 38% · y 11% · w 32%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ទឹកផេះ។"
  - text_ko: "잿물."
  - place: x 62% · y 27% · w 25%
  - read_order: 2

### panel_039
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 흐린 들보 · 병풍(생각 풍선 둘)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បើឃាត់នាងឥឡូវ…"
  - text_ko: "지금 붙들면…"
  - place: x 38% · y 11% · w 34%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "កាន់តែគួរឲ្យសង្ស័យ។"
  - text_ko: "더 이상해."
  - place: x 62% · y 25% · w 40%
  - read_order: 2

### panel_040
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 어두운 들보 · 천장(풍선 둘)
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកភ្លក់ ក៏ចេះលេងសើចដែរ។"
  - text_ko: "기미가 장난도 칠 줄 아는군."
  - place: x 70% · y 10% · w 47% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ព្រោះព្រះអង្គម្ចាស់ស្អប់របស់ល្វីង។"
  - text_ko: "쓴 걸 싫어하셔서요."
  - place: x 35% · y 22% · w 58% · tail ↙ (채령)
  - read_order: 2

### panel_041
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 어두운 들보 · 문틀(풍선 둘, 흉터 · 눈 피함)
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "បើជាថ្នាំស្អាត…"
  - text_ko: "깨끗한 약이면,"
  - place: x 38% · y 11% · w 35% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ផ្ដួលចោល ក៏មិនស្ដាយដែរ។"
  - text_ko: "엎어도 아까울 게 없겠지."
  - place: x 62% · y 25% · w 45% · tail ↓ (감찰)
  - read_order: 2

### panel_042
- aspect: 3:4
- art_space: 위 28%(x 4–96%, y 2–28%) — 들보 · 문틀 윗부분. 사모 꼭대기 y 30% 아래
- gap_after: 400
- bubble_1:
  - speaker: 원 의관
  - type: dialogue
  - text_km: "ទឹកឃ្មុំ ទូលបង្គំនឹងផ្ញើមកថ្វាយជាមិនខាន ព្រះអង្គ។"
  - text_ko: "꿀은 꼭 보내 드리겠습니다, 마마."
  - place: x 56% · y 15% · w 77% · tail ↘ (의관)
  - read_order: 1

### panel_043
- aspect: 9:16
- silent: true
- gap_after: 40

### panel_044
- aspect: 3:4
- art_space: 위 24%(x 4–96%, y 2–24%) — 처마 밑면 · 서까래 그늘(천 피함)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…!"
  - text_ko: "…!"
  - place: x 50% · y 13% · w 24%
  - read_order: 1

### panel_045
- aspect: 1:1
- art_space: 위 40%(x 4–96%, y 2–40%) — 천 너머 흐린 처마 그늘 · 하늘(생각 풍선 둘, 번짐 피함)
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ប៉ះទឹកផេះហើយ ចេញពណ៌ពិត…"
  - text_ko: "잿물을 만나서… 본색이 나왔어."
  - place: x 38% · y 12% · w 45%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ពិតជាឫសស្វាយម្លប់មែន។"
  - text_ko: "역시, 그늘보라."
  - place: x 62% · y 30% · w 42%
  - read_order: 2

### panel_046
- aspect: 3:4
- art_space: 위 왼쪽(x 4–60%, y 2–32%) — 채령 등 뒤의 어두운 처마 밑
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁(화면 밖)
  - type: dialogue
  - text_km: "ខ្យល់ល្ងាចត្រជាក់ណាស់ កូន។"
  - text_ko: "저녁 바람이 차구나, 얘야."
  - place: x 30% · y 17% · w 48% · tail ↖ (위 왼쪽 가장자리 = 그녀 등 뒤 처마 그늘)
  - read_order: 1
- note: 화면 밖 화자(민 상궁, 채령 등 뒤) — 꼬리 ↖ 위 왼쪽 가장자리.

### panel_047
- aspect: 3:4
- art_space: 위 오른쪽(x 50–98%, y 2–36%) — 어두운 기둥 · 처마 그늘(풍선 둘)
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្នាំស្ងោរថ្ងៃនេះ…"
  - text_ko: "오늘 탕약은,"
  - place: x 71% · y 11% · w 38% · tail ↙ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ឮថា ស្អាត មែនទេ កូន?"
  - text_ko: "깨끗했다지, 얘야."
  - place: x 72% · y 27% · w 41% · tail ↙ (상궁)
  - read_order: 2

### panel_048
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 주황 하늘 · 처마 밑(풍선 둘)
- gap_after: 20
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "លោកស្រីប្រាប់ឲ្យខ្ញុំនិយាយតែថា ស្អាត។"
  - text_ko: "깨끗하다고만 말하라고 하셨잖아요."
  - place: x 38% · y 12% · w 62% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "…ក្នុងនោះមានអ្វី លោកស្រីដឹងរួចហើយ មែនទេ?"
  - text_ko: "…뭐가 들었는지, 알고 계셨죠?"
  - place: x 62% · y 28% · w 66% · tail ↓ (채령)
  - read_order: 2

### panel_049
- aspect: 1:1
- art_space: 오른쪽 세로 띠(x 60–98%, y 2–56%) — 얼굴 옆 처마 그늘
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្ញុំដឹងរួចហើយ។"
  - text_ko: "알았다."
  - place: x 80% · y 29% · w 35% · tail ↙ (상궁)
  - read_order: 1

### panel_050
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 처마 밑 · 주황 하늘(풍선 둘)
- gap_after: 20
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ចុះលោកស្រី…"
  - text_ko: "그럼 마마님도…"
  - place: x 38% · y 11% · w 30% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ជាពួកតែមួយនឹងដៃនោះឬ?"
  - text_ko: "그 손이랑 한패세요?"
  - place: x 74% · y 27% · w 41% · tail ↓ (채령)
  - read_order: 2

### panel_051
- aspect: 3:4
- art_space: 오른쪽 위(x 50–98%, y 2–38%) — 얼굴 어두운 쪽의 처마 그늘(풍선 둘)
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "បើកូនស្រែកនៅទីនោះ…"
  - text_ko: "네가 거기서 소리쳤으면,"
  - place: x 71% · y 12% · w 38% · tail ↙ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "អ្នកលួចដាក់វា នឹងដឹងថា អ្នកណាមើលដឹង។"
  - text_ko: "놓은 자는 누가 알아챘는지 알았겠지."
  - place: x 74% · y 28% · w 46% · tail ↙ (상궁)
  - read_order: 2

### panel_052
- aspect: 1:1
- art_space: 오른쪽 세로 띠(x 58–98%, y 2–60%) — 얼굴 옆 처마 그늘(풍선 둘, 위아래)
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ហេតុនេះ បានជាខ្ញុំឲ្យកូននិយាយតែថា ស្អាត។"
  - text_ko: "그래서 깨끗하다고만 말하라 한 거다."
  - place: x 78% · y 18% · w 38% · tail ↙ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "កុំឲ្យអ្នកលួចដាក់វា ដឹងខ្លួន។"
  - text_ko: "놓는 자가 눈치채지 못하게."
  - place: x 78% · y 44% · w 38% · tail ↙ (상궁)
  - read_order: 2
- note: art_space 폭(40%)이 좁아 두 풍선 모두 w 38% → 3줄이 될 수 있다. 세로 띠가 길어(y 2–60%) 위아래 간격 충분. 문구는 그대로.

### panel_053
- aspect: 9:16
- art_space: 위 28%(x 4–96%, y 2–28%) — 그늘진 처마 밑 · 서까래(풍선 둘). 머리 y 30% 아래
- gap_after: 240
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្ញុំមិនមែនជាអ្នកលួចដាក់វាទេ កូន។"
  - text_ko: "나는 놓는 사람이 아니다, 얘야."
  - place: x 38% · y 9% · w 57% · tail ↓ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្ញុំកំពុងបរបាញ់អ្នកលួចដាក់វា។"
  - text_ko: "놓는 자를 사냥하는 중이지."
  - place: x 62% · y 21% · w 54% · tail ↓ (상궁)
  - read_order: 2

### panel_054
- aspect: 1:1
- art_space: 위 40% 띠(x 4–96%, y 2–40%) — 흐린 어두운 머리칼 · 그늘
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ដៃមួយទៀតនោះ…"
  - text_ko: "다른 손을…"
  - place: x 38% · y 12% · w 31%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "គាត់កំពុងតាមបរបាញ់ឬ?"
  - text_ko: "쫓고 있었어?"
  - place: x 62% · y 30% · w 41%
  - read_order: 2

### panel_055
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 처마 밑 · 하늘(풍선 둘)
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "បិទមាត់បានល្អ… ផ្ដួលចានក៏បានល្អ។"
  - text_ko: "입은 다물고, 탕약은 엎었구나. 잘했다."
  - place: x 34% · y 11% · w 56% · tail ↙ (걸어가는 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ការបរបាញ់ ត្រូវការច្រមុះមុត កូន។"
  - text_ko: "사냥에는 코가 필요하거든, 얘야."
  - place: x 34% · y 25% · w 56% · tail ↙ (걸어가는 상궁)
  - read_order: 2

### panel_056
- aspect: 3:4
- silent: true
- gap_after: 240

### panel_057
- aspect: 3:4
- art_space: 위 왼쪽(x 4–60%, y 2–26%) — 감찰 머리 위 처마 그늘 · 서까래
- gap_after: 20
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាងថា ស្អាត។"
  - text_ko: "깨끗하다고 했지."
  - place: x 32% · y 14% · w 31% · tail ↓ (먼 감찰)
  - read_order: 1

### panel_058
- aspect: 9:16
- art_space: 위 24%(x 4–96%, y 2–24%) — 천 너머 어두운 처마 그늘(번짐 · 손 피함)
- gap_after: 20
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នោះជាការកុហក។"
  - text_ko: "거짓말이었다."
  - place: x 50% · y 13% · w 32% · tail ↑ (프레임 위 밖의 감찰 얼굴)
  - read_order: 1
- note: 화자(백 감찰) 얼굴은 프레임 위 밖 — 꼬리 ↑(샷리스트 §H · §I의 「↑ 프레임 밖 감찰」).

### panel_059
- aspect: 1:1
- art_space: 위 22%(x 4–96%, y 2–22%) — 어두운 처마 그늘. 갓 챙 y 24% 아래
- gap_after: 20
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "…បង្ហាញបន្ទះឈើចូលវាំងរបស់នាងមក។"
  - text_ko: "…네 입궁 패를 보자."
  - place: x 50% · y 12% · w 55% · tail ↓ (감찰)
  - read_order: 1

### panel_060
- aspect: 9:16
- art_space: 아래 띠(x 0–100%, y 88–100%) — 평평한 어두운 배경(캡션 자리)
- gap_after: 320
- bubble_1:
  - speaker: (끝 캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៤ —"
  - text_ko: "— 4화에 계속 —"
  - place: x 50% · y 94% · w 70%
  - read_order: 1
- note: 끝 캡션은 아래 어두운 띠(y 88–100%) 안. 패널 자체는 무대사.

---

## 레터러 노트 (회차 전체)

- 2풍선 패널 32개(P02 · P03 · P07 · P10 · P12 · P13 · P14 · P18 · P19 · P20 · P21 · P22 · P23 · P24 · P25 · P28 · P29 · P34 · P35 · P38 · P39 · P40 · P41 · P45 · P47 · P48 · P50 · P51 · P52 · P53 · P54 · P55), 1풍선 22개(P32는 + 효과음), 3풍선 0. 대본 지정 그대로(분할 · 병합 없음, 모든 풍선 31 글자 묶음 이하).
- 가장 긴 풍선(P10 둘째 · P42 49cp · P07 둘째 48cp)은 w를 넉넉히(P10 77% · P42 77% · P07 76%). 좁은 세로 띠(P49 · P52, 폭 38–40%)와 오른쪽 위(P47 · P51, 폭 48%)는 3줄 가능 → 실제 Battambang 렌더에서 넘치면 placement pass에서 y만 조정, 문구는 그대로.
- 화면 밖 · 가장자리 화자: P12 의관 뒤통수(↙) · P14 · P25 · P28 의관 왼쪽 가장자리(↙) · P46 민 상궁 등 뒤 처마(↖) · P58 프레임 밖 감찰(↑). 효과음 1: P32 ព្រូស!(물줄기 위 오른쪽).
- 민 상궁 대사 15풍선(반전 P46–P55 12풍선 포함) 모두 흰 dialogue(shout 0). shout는 P32 왕자 1개뿐.
- 이 회차에 글씨 있는 소품 없음 → `env` 0개(탕약 그릇 · 끈 매듭 · 약상자 · 행주 · 빨래 · 당번 판 · 등롱 모두 빈칸으로 그림, 입궁 패는 그리지 않음).
- 크메르어는 비원어민 초안(대본 §4 [감수]) — 원어민 감수 후 대본과 이 명세를 함께 고친다. 문구 수정은 이미지 재생성 없이 rebuild만.
