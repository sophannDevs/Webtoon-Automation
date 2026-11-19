# EP02 레터링 명세 — letterer (크메르어 말풍선, 뷰어가 그림)

- 작성: letterer · 2026-11-18 · Phase 4 step 3 · v1 · Khmer edition (`webtoon-khmer-edition` §3)
- 입력: `03_episode/ep02_script_final.md`(크메르어 원문 = 기준) · `04_visual/ep02_shotlist.md`(`art_space` · `aspect` · `gap_after` · `dialogue_ref` 꼬리 = 기준) · `04_visual/style-bible.md` §8 · `02_story/glossary_km.md` · 형식 `04_visual/ep01_lettering.md`
- `art_space`는 샷리스트 문장(좌표 포함) 그대로. 모든 `place`(말풍선 중심 x/y, 폭 w)는 그 빈 자리 안. 꼬리 방향 · read_order는 샷리스트 `dialogue_ref`를 따름. `gap_after`는 샷리스트 각 패널 beat 줄(§F).
- 패널 60 / 말풍선 80(대사 59 · 생각 20 + 끝 캡션 1) / 효과음 1(P18) / 소품 글씨 0 / 무대사 8(+ P60은 끝 캡션만)

## 원칙

1. **이미지에는 글자가 없다.** 말풍선 · 대사 · 효과음 글자 모두 없음. 각 패널은 `art_space` 자리를 조용한 배경으로 비운다 → prompt-smith가 영문(style-bible §8 문장)으로 옮겨 프롬프트에 넣는다.
2. **뷰어가 말풍선을 그린다**(`km_tool.py build`). `place`: x/y = 말풍선 중심, w = 최대 폭, 모두 패널 대비 %. 꼬리: ↙ ↓ ↘(아래) · ↖ ↑ ↗(위). thought · narration은 꼬리 없음.
3. `text_km`은 대본 `KM:` 문구 그대로(km_tool check로 확인). `text_ko`는 참고용, 화면에 안 나옴.
4. 위에서 아래 = `read_order`. 말풍선은 얼굴 · 손 · 은침(특히 검은 끝) · 노른자 · 그릇 테두리 · 소매 속 손 · 해독환 · 흰 천 · 손수건 · 노리개 · 당번 판 · 등롱을 가리지 않는다(모두 `art_space` 밖).
5. 종류(style-bible §8): 채령 생각 = thought · 왕자 P25 "안 돼!" = shout(샷리스트 제안, 회차 유일) · **민 상궁은 절대 shout 아님**(P49–P59 반전 대사도 흰 dialogue) · 끝 캡션만 narration · memory 미사용.
6. `gap_after`(샷리스트 §F, px): 기본 40 · P05 / P13 / P19 / P42 120 · P28 / P38 / P56 240 · P46 400(가장 긺) · P60 320 · 미니 반전 연쇄 P16 · P20 · P21 · P23 · P27 20, P22 0 · 주력 연쇄 P49–P51 · P53 20, P52 · P54 0 · P37 20.

---

### panel_001
- aspect: 9:16
- silent: true
- gap_after: 40

### panel_002
- aspect: 1:1
- art_space: 위 28%(x 4–96%, y 2–28%) — 초점 밖 창호지 빛 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…លើកនេះ បិទមាត់ផងណា។"
  - text_ko: "…이번엔 입을 다물고."
  - place: x 50% · y 14% · w 39%
  - read_order: 1

### panel_003
- aspect: 3:4
- art_space: 위 40%(x 4–96%, y 2–40%) — 흐린 무지 병풍 · 창호지(생각 풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "តែកន្លែងនេះ នៅតែជារបស់ខ្ញុំ។"
  - text_ko: "그래도 이 자리는 내 거야."
  - place: x 42% · y 12% · w 48%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ព្រះស្ងោយព្រះអង្គម្ចាស់… ត្រូវតែខ្ញុំជាអ្នកភ្លក់។"
  - text_ko: "왕자 마마 상 앞엔… 꼭 내가."
  - place: x 57% · y 29% · w 76%
  - read_order: 2

### panel_004
- aspect: 1:1
- silent: true
- gap_after: 40

### panel_005
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 들보 · 문틀 윗부분 · 병풍 윗면. 상궁 머리는 y 32% 아래
- gap_after: 120
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "មកពីព្រលឹមម្ល៉េះ កូន។"
  - text_ko: "일찍 왔구나, 얘야."
  - place: x 75% · y 9% · w 40% · tail ↘ (문지방 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "…ចាស លោកស្រី។"
  - text_ko: "…예, 마마님."
  - place: x 20% · y 22% · w 31% · tail ↓ (채령)
  - read_order: 2

### panel_006
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 창호지 윗부분 · 무지 병풍. 호랑이를 든 손은 y 32% 아래
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ដានី! ថ្ងៃនេះ ខ្ញុំមកមុន!"
  - text_ko: "단이! 오늘은 내가 먼저 왔어."
  - place: x 50% · y 15% · w 45% · tail ↓ (왕자)
  - read_order: 1

### panel_007
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 창호지 윗부분 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "តើនពីព្រលឹមម្ល៉េះ ព្រះអង្គម្ចាស់។"
  - text_ko: "일찍 일어나셨네요, 왕자 마마."
  - place: x 68% · y 11% · w 54% · tail ↘ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ព្រឹកនេះ មានរបស់ពិសេស!"
  - text_ko: "오늘 아침은 특별한 거야."
  - place: x 26% · y 28% · w 41% · tail ↓ (왕자)
  - read_order: 2

### panel_008
- aspect: 3:4
- art_space: 위 왼쪽(x 4–52%, y 3–30%) — 문 반대편 창호지의 부드러운 빛
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…របស់ពិសេស?"
  - text_ko: "…특별한 거?"
  - place: x 28% · y 15% · w 30%
  - read_order: 1

### panel_009
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 갓 챙 위의 어두운 들보 · 문틀 윗부분
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "មេចុងភៅ នៅជាប់ឃុំ។"
  - text_ko: "숙수는 갇혀 있다."
  - place: x 42% · y 10% · w 37% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ព្រះស្ងោយថ្ងៃនេះ នាងវាំងផ្ទះបាយជាអ្នករៀបចំ។"
  - text_ko: "오늘 상은 수라간 나인들이 차렸다."
  - place: x 58% · y 25% · w 65% · tail ↓ (감찰)
  - read_order: 2

### panel_010
- aspect: 9:16
- art_space: 위 왼쪽(x 4–48%, y 2–17%) — 상 너머 빈 장판 · 병풍 아랫단(왕자 머리 바로 위 왼쪽)
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "មកហើយ!"
  - text_ko: "왔다!"
  - place: x 26% · y 9% · w 30% · tail ↓ (왕자)
  - read_order: 1

### panel_011
- aspect: 3:4
- art_space: 위 왼쪽(x 4–56%, y 2–40%) — 감찰 얼굴 옆의 어두운 문틀 · 들보(풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "បើរឿងដូចម្សិលមិញ កើតឡើងទៀត…"
  - text_ko: "어제 같은 일이 또 나면,"
  - place: x 28% · y 12% · w 47% · tail ↘ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "លើកនេះ ផ្ទះបាយវាំងទាំងមូល ត្រូវសួរចម្លើយ។"
  - text_ko: "이번엔 수라간이 통째로 문초다."
  - place: x 30% · y 29% · w 50% · tail ↘ (감찰)
  - read_order: 2

### panel_012
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 채령 머리 위의 흐린 들보 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មេចុងភៅជាប់ឃុំ… ក៏ព្រោះតែខ្ញុំដែរ។"
  - text_ko: "숙수님이 갇힌 것도… 나 때문인데."
  - place: x 50% · y 15% · w 55%
  - read_order: 1

### panel_013
- aspect: 3:4
- art_space: 위 왼쪽(x 4–52%, y 2–28%) — 연기 반대편의 흐린 창호지 · 병풍
- gap_after: 120
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ខ្ញុំម្ចាស់សូមអុជធូប។"
  - text_ko: "향을 올리겠습니다."
  - place: x 31% · y 14% · w 40% · tail ↘ (화면 오른쪽 아래 = 손 쪽)
  - read_order: 1

### panel_014
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 창호지 윗부분 · 무지 병풍. 왕자 머리 y 40% 아래, 김은 y 44% 아래에서 흐려짐
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "នោះរបស់ខ្ញុំ!"
  - text_ko: "그거 내 거야!"
  - place: x 20% · y 11% · w 31% · tail ↓ (왕자)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ព្រះករុណា។ ខ្ញុំម្ចាស់សូមពិនិត្យមុន។"
  - text_ko: "예, 왕자 마마. 먼저 보겠습니다."
  - place: x 66% · y 28% · w 57% · tail ↘ (화면 오른쪽 = 채령)
  - read_order: 2

### panel_015
- aspect: 1:1
- silent: true
- gap_after: 40

### panel_016
- aspect: 1:1
- art_space: 위 왼쪽 모서리(x 4–42%, y 3–28%) — 은침 반대편의 흐린 배경(작은 생각 풍선)
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…?"
  - text_ko: "…?"
  - place: x 23% · y 14% · w 30%
  - read_order: 1

### panel_017
- aspect: 9:16
- silent: true
- gap_after: 40

### panel_018
- aspect: 3:4
- art_space: 위 왼쪽~가운데(x 4–56%, y 2–26%) — 창호지 윗부분 · 병풍 + sfx용 문 위쪽 작은 자리(x 78–98%, y 30–46%) — 나인들 머리 위의 어두운 문 안쪽
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ឡើងខ្មៅ។"
  - text_ko: "검다."
  - place: x 36% · y 13% · w 30% · tail ↘ (감찰)
  - read_order: 1
- sfx_1:
  - text_km: "អា៎!"
  - text_ko: "헉"
  - place: x 88% · y 38% · size 8% · rot -8
- note: 효과음 អា៎! = 문가 나인들의 숨. 문 위쪽 작은 빈자리(x 78–98%, y 30–46%) 안.

### panel_019
- aspect: 3:4
- art_space: 위 36%(x 4–96%, y 2–36%) — 갓 위 어두운 들보 · 천장. 얼굴 · 흉터는 그 아래
- gap_after: 120
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ព្រះស្ងោយនេះ ខ្ញុំយកទៅ។"
  - text_ko: "상은 내가 가져간다."
  - place: x 42% · y 11% · w 42% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ផ្ទះបាយវាំងទាំងមូល ត្រូវសួរចម្លើយ។"
  - text_ko: "수라간은 통째로 문초한다."
  - place: x 58% · y 26% · w 55% · tail ↓ (감찰)
  - read_order: 2

### panel_020
- aspect: 1:1
- art_space: 위 28%(x 4–96%, y 2–28%) — 흐린 무지 병풍
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ពុល… ទៀតហើយ?"
  - text_ko: "또… 독?"
  - place: x 50% · y 14% · w 30%
  - read_order: 1

### panel_021
- aspect: 3:4
- art_space: 위 왼쪽(x 4–52%, y 2–30%) — 채령 어깨 쪽 위의 들보 · 병풍. 상궁 얼굴 · 소매는 그 밖
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ឲ្យខ្ញុំបិទមាត់… គឺរឿងនេះឬ?"
  - text_ko: "입을 다물라는 게… 이거였어?"
  - place: x 28% · y 15% · w 46%
  - read_order: 1

### panel_022
- aspect: 1:1
- art_space: 위 38%(x 4–96%, y 2–38%) — 그릇 반대쪽의 흐린 병풍(생각 풍선 둘)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ក្លិនក្រហមស៊ុត។"
  - text_ko: "…노른자 냄새."
  - place: x 42% · y 11% · w 34%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ក្លិនល្វីង… គ្មានទេ។"
  - text_ko: "쓴 냄새는… 없어."
  - place: x 58% · y 28% · w 39%
  - read_order: 2

### panel_023
- aspect: 1:1
- art_space: 위 40% 띠(x 4–96%, y 2–40%) — 흐린 어두운 머리칼 · 그늘
- gap_after: 20
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ប្រាក់ ប៉ះក្រហមស៊ុត ក៏ឡើងខ្មៅដែរ។"
  - text_ko: "은은 노른자에도 검어져."
  - place: x 42% · y 12% · w 54%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ប៉ាធ្លាប់ប្រាប់។"
  - text_ko: "…아버지가 그랬어."
  - place: x 58% · y 29% · w 36%
  - read_order: 2

### panel_024
- aspect: 9:16
- art_space: 가운데 칸 위쪽(x 6–94%, y 32–55%) — 나인들 위의 무지 흰 벽 · 문 안쪽(생각 풍선 둘, 위아래) / 대안 구도에서는 뒤쪽 흰 벽
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បើនិយាយចេញ… ខ្ញុំក្លាយជាកូនស្រីអ្នកលក់ឱសថនោះទៀត។"
  - text_ko: "말하면… 또 그 약재상의 딸이 돼."
  - place: x 46% · y 38% · w 76%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បើនៅស្ងៀម… ផ្ទះបាយវាំងត្រូវគេចាប់។"
  - text_ko: "안 하면… 수라간이 끌려가."
  - place: x 54% · y 49% · w 60%
  - read_order: 2

### panel_025
- aspect: 3:4
- art_space: 위 왼쪽(x 4–60%, y 2–30%) — 빛나는 창호지 · 병풍. 그릇 · 얼굴 · 감찰 손은 그 밖
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: shout
  - text_km: "មិនបានទេ! នោះបបររបស់ខ្ញុំ!"
  - text_ko: "안 돼! 그거 내 죽이야!"
  - place: x 32% · y 15% · w 46% · tail ↓ (왕자)
  - read_order: 1

### panel_026
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 갓 위의 들보 · 병풍 · 창호지 윗부분
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ព្រះអង្គម្ចាស់។ សូមលែងដៃ។"
  - text_ko: "왕자 마마. 놓으십시오."
  - place: x 42% · y 10% · w 45% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់ឡើងខ្មៅ។"
  - text_ko: "은침이 검습니다."
  - place: x 58% · y 25% · w 38% · tail ↓ (감찰)
  - read_order: 2

### panel_027
- aspect: 1:1
- art_space: 위 38%(x 4–96%, y 2–38%) — 흐린 창호지 · 병풍
- gap_after: 20
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "មិនមែនពុលទេ…"
  - text_ko: "독 아니야…"
  - place: x 42% · y 11% · w 30% · tail ↓ (왕자)
  - read_order: 1
- bubble_2:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ខ្ញុំសុំឲ្យគេធ្វើ។"
  - text_ko: "내가 해 달라고 했어."
  - place: x 58% · y 28% · w 37% · tail ↓ (왕자)
  - read_order: 2

### panel_028
- aspect: 1:1
- art_space: 위 28%(x 4–96%, y 2–28%) — 흐린 창호지 빛
- gap_after: 240
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "នេះជាបបរដែលព្រះមាតាធ្លាប់ធ្វើឲ្យខ្ញុំញ៉ាំ។"
  - text_ko: "어마마마가 해 주시던 죽이야."
  - place: x 50% · y 14% · w 64% · tail ↓ (왕자)
  - read_order: 1

### panel_029
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 갓 위의 어두운 들보 · 문틀. 상궁 머리는 y 42% 아래
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ទោះសុំ ឬមិនសុំ ក៏ដោយ។"
  - text_ko: "청한 것이든 아니든."
  - place: x 42% · y 10% · w 40% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់ឡើងខ្មៅ ត្រូវធ្វើតាមច្បាប់វាំង។"
  - text_ko: "은침이 검으면 법도대로다."
  - place: x 58% · y 25% · w 64% · tail ↓ (감찰)
  - read_order: 2

### panel_030
- aspect: 1:1
- art_space: 위 26%(x 4–96%, y 2–26%) — 흐린 상판 · 장판
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ព្រះអង្គម្ចាស់។ សូមខ្ចីបន្តិចសិន។"
  - text_ko: "왕자 마마. 잠깐만 빌려 주세요."
  - place: x 56% · y 13% · w 54% · tail ↘ (화면 오른쪽 위 = 채령 쪽)
  - read_order: 1

### panel_031
- aspect: 9:16
- art_space: 위 28%(x 16–96%, y 2–28%) — 그녀 뒤의 흐린 무지 병풍 · 어두운 벽(감찰 소매 띠 x 0–14%는 그 밖)
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "បើមានពុល ខ្ញុំភ្លក់មុន ស្លាប់មុន។"
  - text_ko: "독이면 제가 먼저 죽습니다."
  - place: x 48% · y 9% · w 54% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "នេះជាការងាររបស់ខ្ញុំ។"
  - text_ko: "그게 제 일입니다."
  - place: x 64% · y 21% · w 40% · tail ↓ (채령)
  - read_order: 2

### panel_032
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 흐린 들보 · 병풍. 흉터 · 눈은 그 아래
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ធូបមួយដើម។"
  - text_ko: "향 한 대."
  - place: x 42% · y 10% · w 30% · tail ↓ (감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "បើនាងដួល មិនមែនផ្ទះបាយទេ គឺនាងមុនគេ។"
  - text_ko: "쓰러지면, 수라간이 아니라 너부터다."
  - place: x 58% · y 25% · w 57% · tail ↓ (감찰)
  - read_order: 2

### panel_033
- aspect: 3:4
- art_space: 위 28%(x 4–96%, y 2–28%), 특히 왼쪽 — 창호지 윗부분 · 병풍
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ដានី…"
  - text_ko: "단이…"
  - place: x 20% · y 14% · w 30% · tail ↓ (왕자)
  - read_order: 1

### panel_034
- aspect: 3:4
- silent: true
- gap_after: 40

### panel_035
- aspect: 1:1
- art_space: 위 왼쪽(x 4–60%, y 2–28%) — 흐린 창호지 빛(왕자 쪽)
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ដានី បែកញើស!"
  - text_ko: "단이, 땀나!"
  - place: x 20% · y 14% · w 30% · tail ↙ (왕자)
  - read_order: 1

### panel_036
- aspect: 3:4
- art_space: 위 24%(x 4–96%, y 2–24%) — 흐린 무지 병풍. 김은 y 70% 아래
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ក្ដៅពេក ព្រះអង្គម្ចាស់។"
  - text_ko: "뜨거워서요, 왕자 마마."
  - place: x 50% · y 12% · w 42% · tail ↓ (채령)
  - read_order: 1

### panel_037
- aspect: 3:4
- silent: true
- gap_after: 20

### panel_038
- aspect: 3:4
- art_space: 위 26%(x 4–96%, y 2–26%) — 상 너머 빈 장판
- gap_after: 240
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ខ្ញុំញ៉ាំអស់ហើយ។"
  - text_ko: "다 먹었습니다."
  - place: x 50% · y 13% · w 34% · tail ↓ (채령)
  - read_order: 1

### panel_039
- aspect: 3:4
- art_space: 위 오른쪽(x 36–96%, y 2–40%) — 은침 반대편의 흐린 병풍 · 창호지
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់ឡើងខ្មៅ…"
  - text_ko: "은침이 검은데,"
  - place: x 58% · y 12% · w 38% · tail ↙ (화면 왼쪽 = 감찰 손 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "តែនាងមិនខ្លាចសោះ។"
  - text_ko: "너는 겁먹지 않았다."
  - place: x 74% · y 29% · w 36% · tail ↙ (화면 왼쪽 = 감찰 손 쪽)
  - read_order: 2

### panel_040
- aspect: 1:1
- art_space: 위 24%(x 4–96%, y 2–24%) — 갓 챙 위의 흐린 들보 · 병풍
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាងដឹងរួចហើយ។"
  - text_ko: "알고 있었군."
  - place: x 50% · y 12% · w 31% · tail ↓ (감찰)
  - read_order: 1

### panel_041
- aspect: 3:4
- art_space: 위 40%(x 4–96%, y 2–40%) — 흐린 장판 · 그늘
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "អ្នកភ្លក់…"
  - text_ko: "기미는…"
  - place: x 42% · y 12% · w 30% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "បើខ្លាច ភ្លក់មិនកើតទេ។"
  - text_ko: "겁을 먹으면 못 먹습니다."
  - place: x 58% · y 29% · w 41% · tail ↓ (채령)
  - read_order: 2

### panel_042
- aspect: 3:4
- art_space: 위 왼쪽(x 4–56%, y 2–26%) — 무지 병풍 · 들보(감찰 반대편)
- gap_after: 120
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ដោះលែងផ្ទះបាយវាំង។"
  - text_ko: "수라간은 풀어라."
  - place: x 36% · y 13% · w 37% · tail ↘ (감찰)
  - read_order: 1

### panel_043
- aspect: 3:4
- art_space: 위 34%(x 4–96%, y 2–34%) — 창호지 윗부분 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "បបរខ្ញុំ… ដានីញ៉ាំអស់ហើយ!"
  - text_ko: "내 죽… 단이가 다 먹었어."
  - place: x 50% · y 16% · w 45% · tail ↓ (왕자)
  - read_order: 1

### panel_044
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 창호지 · 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមអភ័យទោស ព្រះអង្គ។ …ឆ្ងាញ់ណាស់។"
  - text_ko: "죄송해요. …맛있었어요."
  - place: x 68% · y 11% · w 54% · tail ↘ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ឆ្ងាញ់មែនទេ? ព្រះមាតាតែងដាក់ក្រហមស៊ុតពីរ!"
  - text_ko: "그치? 어마마마는 노른자를 꼭 두 개 넣었어."
  - place: x 36% · y 28% · w 63% · tail ↓ (왕자)
  - read_order: 2

### panel_045
- aspect: 1:1
- art_space: 위 왼쪽(x 4–60%, y 2–30%) — 빛나는 창호지(창 쪽)
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ព្រះមាតា… ពេលណាមកវិញ?"
  - text_ko: "어마마마는… 언제 와?"
  - place: x 38% · y 15% · w 40% · tail ↘ (왕자)
  - read_order: 1

### panel_046
- aspect: 3:4
- art_space: 위 40%(x 4–96%, y 2–40%) — 따뜻한 창호지 빛 · 무지 병풍
- gap_after: 400
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "បើចង់សោយទៀត សូមត្រាស់ប្រាប់។"
  - text_ko: "또 드시고 싶으면 청하세요."
  - place: x 42% · y 12% · w 48% · tail ↘ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ពេលនោះ ខ្ញុំម្ចាស់សូមភ្លក់មុន។"
  - text_ko: "그땐 제가 먼저 먹을게요."
  - place: x 58% · y 29% · w 50% · tail ↘ (채령)
  - read_order: 2

### panel_047
- aspect: 9:16
- silent: true
- gap_after: 40
- note: 무대사. ep01 P05와 같은 오른쪽 위(x 48–96%, y 3–24%)를 조용하게 유지(구도 일치용, 샷리스트).

### panel_048
- aspect: 1:1
- art_space: 위 40%(x 4–96%, y 2–40%) — 남청 어둠 · 처마 그늘(천 · 노리개는 그 아래)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "វាជារបស់បង…"
  - text_ko: "언니 거라는 걸…"
  - place: x 42% · y 12% · w 30%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មាននរណាម្នាក់ដឹងហើយ។"
  - text_ko: "아는 사람이 있어."
  - place: x 58% · y 29% · w 39%
  - read_order: 2

### panel_049
- aspect: 3:4
- art_space: 위 32%(x 4–96%, y 2–32%) — 어두운 처마 밑 · 남청 어둠(오른쪽이 더 어둡게)
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ឮថា ថ្ងៃនេះញ៉ាំបបរអស់មួយចាន កូន។"
  - text_ko: "오늘은 죽을 한 그릇 다 먹었다지, 얘야."
  - place: x 56% · y 16% · w 53% · tail ↗ (화면 오른쪽 위 가장자리 = 그녀 뒤 어둠 속 회랑)
  - read_order: 1
- note: 화자(민 상궁)는 화면 밖 — 꼬리 ↗ 오른쪽 위 가장자리(그녀 뒤 어둠 속 회랑).

### panel_050
- aspect: 3:4
- art_space: 위 오른쪽(x 50–98%, y 2–36%) — 어두운 기둥 · 남청 처마 그늘(풍선 둘, 위아래). 등롱은 화면 왼쪽 위 밖에
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "បិទមាត់បានល្អ…"
  - text_ko: "입은 다물고,"
  - place: x 74% · y 10% · w 40% · tail ↙ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ហើយចានក៏ទទេស្អាត កូន។"
  - text_ko: "그릇은 비웠구나, 얘야."
  - place: x 74% · y 27% · w 44% · tail ↙ (상궁)
  - read_order: 2

### panel_051
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 남청 하늘 · 처마 밑
- gap_after: 20
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "អ្នកដែលលាបពុលលើមាត់ចានព្រះអង្គម្ចាស់…"
  - text_ko: "왕자 마마 그릇에 독을 바르신 분이…"
  - place: x 42% · y 11% · w 59% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "មកសរសើរខ្ញុំឬ លោកស្រី?"
  - text_ko: "칭찬하러 오셨어요?"
  - place: x 58% · y 28% · w 41% · tail ↓ (채령)
  - read_order: 2

### panel_052
- aspect: 1:1
- silent: true
- gap_after: 0

### panel_053
- aspect: 9:16
- art_space: 위 30%(x 6–94%, y 3–30%) — 깊은 남청 어둠(풍선 둘). 환약 · 손은 y 50% 아래
- gap_after: 20
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ពុលតែប៉ុណ្ណឹង កាលពីម្សិលមិញ…"
  - text_ko: "어제 그 양으로는"
  - place: x 42% · y 10% · w 48% · tail ↓ (손바닥 쪽 — 상궁 본인은 프레임 밖)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "មិនអាចសម្លាប់នរណាម្នាក់បានទេ កូន។"
  - text_ko: "아무도 안 죽는다, 얘야."
  - place: x 58% · y 22% · w 54% · tail ↓ (손바닥 쪽 — 상궁 본인은 프레임 밖)
  - read_order: 2
- note: 민 상궁 본인은 프레임 밖 — 꼬리 ↓ 손바닥 쪽. 환약 · 손(y 50% 아래)은 가리지 않는다.

### panel_054
- aspect: 1:1
- art_space: 위 40% 띠(x 4–96%, y 2–40%) — 흐린 어두운 머리칼 · 남청 그늘
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ថ្នាំបន្សាបពុល… ដែលនៅក្នុងដៃអាវពេលនោះ។"
  - text_ko: "해독환… 그때 소매 속에 있던 거."
  - place: x 42% · y 12% · w 60%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ព្រឹកមិញ ក៏ដូច្នោះដែរ។"
  - text_ko: "오늘 아침에도."
  - place: x 58% · y 29% · w 41%
  - read_order: 2

### panel_055
- aspect: 3:4
- art_space: 오른쪽 위(x 50–98%, y 2–40%) — 얼굴 어두운 쪽의 남청 그림자(풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "បើគ្មានកូន…"
  - text_ko: "네가 아니었으면,"
  - place: x 74% · y 11% · w 42% · tail ↙ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្ញុំនឹងផ្ដួលចាននោះចោលដោយខ្លួនឯង។"
  - text_ko: "내가 엎었을 거다."
  - place: x 74% · y 29% · w 44% · tail ↙ (상궁)
  - read_order: 2

### panel_056
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 남청 하늘 · 처마 밑
- gap_after: 240
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "…ចុះហេតុអ្វី លោកស្រី?"
  - text_ko: "…그럼, 왜요?"
  - place: x 75% · y 11% · w 40% · tail ↘ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "រឿងនោះ មិនទាន់ដល់ពេលទេ កូន។"
  - text_ko: "그건 아직이다, 얘야."
  - place: x 28% · y 28% · w 47% · tail ↙ (상궁)
  - read_order: 2

### panel_057
- aspect: 3:4
- art_space: 위 오른쪽~가운데(x 22–96%, y 2–34%) — 남청 처마 밑(등롱 번짐은 그 밖 왼쪽)
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ស្អប់ក៏មិនបាន…"
  - text_ko: "미워할 수도…"
  - place: x 51% · y 10% · w 32%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ជឿក៏មិនបាន។"
  - text_ko: "믿을 수도 없어."
  - place: x 67% · y 25% · w 30%
  - read_order: 2

### panel_058
- aspect: 3:4
- art_space: 오른쪽 위(x 46–96%, y 3–24%) — ep01 P05 · P58과 같은 쪽의 어두운 회벽 · 처마 밑
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្ងៃស្អែក ថ្នាំស្ងោរពីមន្ទីរពេទ្យវាំងនឹងមក កូន។"
  - text_ko: "내일 내의원 탕약이 온다, 얘야."
  - place: x 71% · y 13% · w 48% · tail ↙ (상궁)
  - read_order: 1

### panel_059
- aspect: 1:1
- art_space: 오른쪽 세로 띠(x 58–98%, y 2–60%) — 얼굴 옆 남청 어둠(풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "មិនថាក្នុងនោះមានអ្វីទេ…"
  - text_ko: "무엇이 들었든,"
  - place: x 78% · y 12% · w 36% · tail ↙ (상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "និយាយតែថា ស្អាត ផងណា។"
  - text_ko: "깨끗하다고만 말해라."
  - place: x 78% · y 40% · w 36% · tail ↙ (상궁)
  - read_order: 2

### panel_060
- aspect: 9:16
- art_space: 아래 띠(x 0–100%, y 88–100%) — 평평한 어두운 배경(캡션 자리)
- gap_after: 320
- bubble_1:
  - speaker: (끝 캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៣ —"
  - text_ko: "— 3화에 계속 —"
  - place: x 50% · y 93% · w 70%
  - read_order: 1
- note: 끝 캡션은 아래 어두운 띠(y 88–100%) 안.

---

## 레터러 노트 (회차 전체)

- 2풍선 패널 28개(P03 · P05 · P07 · P09 · P11 · P14 · P19 · P22 · P23 · P24 · P26 · P27 · P29 · P31 · P32 · P39 · P41 · P44 · P46 · P48 · P50 · P51 · P53 · P54 · P55 · P56 · P57 · P59), 1풍선 23개, 3풍선 0. 대본 지정 그대로(분할 · 병합 없음).
- 가장 긴 풍선(P03 둘째 49cp · P24 첫째 48cp · P58 47cp)은 w를 넉넉히(P03 76% · P24 76% · P58은 art_space 폭 한계라 48%로 3줄 가능 → 실제 Battambang 렌더에서 넘치면 placement pass에서 y만 조정, 문구는 그대로).
- 화면 밖 화자: P49 민 상궁(꼬리 ↗ 오른쪽 위 가장자리) · P53 민 상궁(꼬리 ↓ 손바닥). 효과음 1: P18 អា៎!(문 위쪽, 나인 쪽).
- 민 상궁 대사 12풍선 모두 흰 dialogue(shout 0). shout는 P25 왕자 1개뿐.
- 이 회차에 글씨 있는 소품 없음 → `env` 0개(당번 판 · 등롱 · 흰 천 · 해독환 모두 빈칸으로 그림).
- 크메르어는 비원어민 초안(대본 §4) — 원어민 감수 후 대본과 이 명세를 함께 고친다. 문구 수정은 이미지 재생성 없이 rebuild만.
