# EP01 레터링 명세 — letterer (크메르어 말풍선, 뷰어가 그림)

- 작성: letterer · 2026-11-18 · Phase 4 step 3 · v2(샷리스트 정렬) · Khmer edition (`webtoon-khmer-edition` §3)
- 입력: `03_episode/ep01_script_final.md`(크메르어 원문 = 기준) · `03_episode/ep01_beatsheet.md` §5 말풍선 자리 · `04_visual/style-bible.md` §8 · `02_story/glossary_km.md`
- v2 (2026-11-18): `art_space`를 `04_visual/ep01_shotlist.md`의 문장(좌표 포함) 그대로 옮기고, 모든 `place`를 그 빈 자리 안으로 다시 맞췄다(문구 변경 없음). 꼬리 방향 · read_order는 샷리스트 `dialogue_ref`를 따름. `gap_after`는 샷리스트 §D.
- 패널 60 / 말풍선 63(대사 · 생각 62 + 끝 캡션 1) / 효과음 4(P25 · P29 · P31 · P33) / 소품 글씨 0 / 무대사 9(+ P60은 끝 캡션만)

## 원칙

1. **이미지에는 글자가 없다.** 말풍선 · 대사 · 효과음 글자 모두 없음. 각 패널은 `art_space` 자리를 조용한 배경으로 비운다 → prompt-smith가 영문으로 옮겨 프롬프트에 넣는다.
2. **뷰어가 말풍선을 그린다**(`km_tool.py build`). `place`: x/y = 말풍선 중심, w = 최대 폭, 모두 패널 대비 %. 꼬리: ↙ ↓ ↘(아래) · ↖ ↑ ↗(위). thought · narration은 꼬리 없음.
3. `text_km`은 대본 `KM:` 문구 그대로(km_tool check로 확인). `text_ko`는 참고용, 화면에 안 나옴.
4. 위에서 아래 = `read_order`. 말풍선은 얼굴 · 손 · 은침 · 그릇 테두리 · 손수건 · 노리개 · 당번 판 · 등롱을 가리지 않는다.
5. 종류(style-bible §8): 채령 생각 = thought · 홍 숙수(P13 · P43) · 왕자 P39 · 채령 P25 = shout · **민 상궁은 절대 shout 아님**(반전 대사도 흰 dialogue) · 끝 캡션만 narration · memory 미사용.
6. `gap_after`(샷리스트 §D, px): 기본 40 · P12 / P24 / P55 240 · P47 400(가장 긺) · P60 320 · 반전 연쇄 P20–P22 · P49–P52 10.

---

### panel_001
- aspect: 9:16
- art_space: 위 28% 전체(x 5–95%, y 2–28%), 특히 오른쪽 위 — 창호지 윗부분 · 무지 병풍. 두 인물의 머리는 y 34% 아래. 연기 줄은 y 30% 아래에서 끝나게
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "បើមានពុល ខ្ញុំម្ចាស់ភ្លក់មុន ស្លាប់មុន។"
  - text_ko: "독이면 제가 먼저 죽습니다."
  - place: x 40% · y 8% · w 58% · tail ↘ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "នេះជាការងាររបស់ខ្ញុំម្ចាស់។"
  - text_ko: "그게 제 일이에요."
  - place: x 62% · y 19% · w 54% · tail ↘ (채령)
  - read_order: 2

### panel_002
- aspect: 3:4
- silent: true
- gap_after: 40

### panel_003
- aspect: 3:4
- art_space: 위 24%(x 5–95%, y 2–24%) — 창호지 윗부분과 병풍. 왕자 머리 y 32% 아래
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមសោយបានហើយ ព្រះអង្គម្ចាស់។"
  - text_ko: "드셔도 됩니다, 왕자 마마."
  - place: x 50% · y 11% · w 62% · tail ↘ (화면 오른쪽 채령)
  - read_order: 1

### panel_004
- aspect: 3:4
- art_space: 위 38%(x 3–97%, y 2–38%) — 창호지 윗부분 · 무지 병풍. 왕자 머리 꼭대기 y 40% 아래
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមប្រើស្លាបព្រាផង ព្រះអង្គ។"
  - text_ko: "숟가락으로 드셔야지요."
  - place: x 66% · y 10% · w 52% · tail ↘ (채령, 오른쪽 가장자리)
  - read_order: 1
- bubble_2:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ផឹកអីចឹង ឆ្ងាញ់ជាង!"
  - text_ko: "이게 더 맛있어."
  - place: x 34% · y 26% · w 44% · tail ↓ (왕자)
  - read_order: 2

### panel_005
- aspect: 9:16
- art_space: 오른쪽 위(x 48–96%, y 3–24%) — 흰 회벽 · 처마 밑면. 등롱(x 36–44%)과 기둥은 그 밖
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្សែបូសក់រលុងទៀតហើយ កូន។"
  - text_ko: "댕기가 또 풀렸구나, 얘야."
  - place: x 72% · y 11% · w 44% · tail ↙ (민 상궁)
  - read_order: 1

### panel_006
- aspect: 1:1
- art_space: 위 28%(x 5–95%, y 2–28%) — 초점 밖 흰 회벽 · 처마 밑
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ដៃលោកស្រី… មានក្លិនល្វីង។"
  - text_ko: "마마님 손에서… 쓴 냄새가 나요."
  - place: x 50% · y 12% · w 64% · tail ↓ (채령)
  - read_order: 1

### panel_007
- aspect: 3:4
- art_space: 위 22%(x 5–95%, y 2–22%), 얼굴 왼쪽 위로 조금 넓게 — 흐린 처마 밑 · 하늘
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ច្រមុះនៅតែមុតដដែល កូន។"
  - text_ko: "코는 여전하구나, 얘야."
  - place: x 40% · y 10% · w 56% · tail ↓ (민 상궁, 얼굴 옆)
  - read_order: 1

### panel_008
- aspect: 1:1
- art_space: 위 38%(x 4–96%, y 2–38%) — 얼룩 모서리에서 먼 쪽, 흐린 회벽
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ទើបផ្សំថ្នាំបន្សាបពុលរួច។"
  - text_ko: "해독환을 빚었단다."
  - place: x 34% · y 10% · w 52% · tail ↑ (프레임 위 밖 상궁 얼굴)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ប៉ះរបស់ល្វីង ជាការងាររបស់ខ្ញុំ។"
  - text_ko: "쓴 걸 만지는 게 내 일이지."
  - place: x 64% · y 27% · w 58% · tail ↑ (프레임 위 밖 상궁 얼굴)
  - read_order: 2

### panel_009
- aspect: 1:1
- art_space: 위 28%(x 5–95%, y 2–28%) — 판 위쪽의 무늬 없는 기둥 면
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្ងៃត្រង់ស្អែក លោកអធិការនឹងមកអង្គុយមើល។"
  - text_ko: "내일 점심엔 감찰 나리가 배석하신다."
  - place: x 50% · y 13% · w 70% · tail ↘ (화면 오른쪽 가장자리 상궁)
  - read_order: 1

### panel_010
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 흰 회벽 윗부분 · 처마 밑
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "បើគ្មានកូន ព្រះអង្គម្ចាស់មិនព្រមសោយទេ។"
  - text_ko: "왕자 마마는 너 없인 숟가락을 안 드시지."
  - place: x 42% · y 10% · w 62% · tail ↙ (민 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ត្រូវតែកូនជាអ្នកភ្លក់ណា។"
  - text_ko: "꼭 네가 시식해라."
  - place: x 58% · y 27% · w 48% · tail ↙ (민 상궁)
  - read_order: 2

### panel_011
- aspect: 1:1
- silent: true
- gap_after: 40

### panel_012
- aspect: 3:4
- art_space: 오른쪽 위(x 40–97%, y 2–38%) — 흰 회벽 · 처마 밑면. 등롱 · 당번 판은 그 밖
- gap_after: 240
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បង… ថ្ងៃនេះ ខ្ញុំនៅរស់បានទៀត ក្រោមឈ្មោះបង។"
  - text_ko: "언니, 오늘도 언니 이름으로 살아남았어."
  - place: x 68% · y 10% · w 54%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ឆែរ៉ុង ឈ្មោះពិតខ្ញុំ… មិនទាន់មាននរណាដឹងទេ។"
  - text_ko: "채령이는… 아직 아무도 몰라."
  - place: x 68% · y 27% · w 56%
  - read_order: 2

### panel_013
- aspect: 9:16
- art_space: 위 36%(x 3–70%, y 2–36%) — 감찰 얼굴(화면 오른쪽)을 피해 가운데~왼쪽 · 창호지 윗부분 · 무지 병풍 · 들보
- gap_after: 40
- bubble_1:
  - speaker: 홍 숙수
  - type: shout
  - text_km: "អើ! លោកអធិការក៏អញ្ជើញមកដែរ!"
  - text_ko: "감찰 나리까지 납셨네!"
  - place: x 30% · y 7% · w 50% · tail ↓ (홍 숙수)
  - read_order: 1
- bubble_2:
  - speaker: 홍 숙수
  - type: dialogue
  - text_km: "ស៊ុបព្រះអង្គម្ចាស់ ខ្ញុំស្ងោរផ្ទាល់ ដួសផ្ទាល់!"
  - text_ko: "왕자 마마 국은 내가 직접 끓이고 직접 펐어."
  - place: x 38% · y 19% · w 62% · tail ↓ (홍 숙수)
  - read_order: 2
- bubble_3:
  - speaker: 홍 숙수
  - type: shout
  - text_km: "ឯង! ឲ្យទ្រង់សោយ មុនវាត្រជាក់!"
  - text_ko: "식기 전에 드시게 해!"
  - place: x 32% · y 30% · w 50% · tail ↓ (홍 숙수)
  - read_order: 3
- note: 9:16(샷리스트 §B). 홍 숙수 3풍선(대본 지정, 이 회차 유일), 감찰 얼굴(오른쪽)을 피해 x 3–70% 안 계단식. 1 · 3번 shout, 2번 dialogue.

### panel_014
- aspect: 1:1
- silent: true
- gap_after: 40

### panel_015
- aspect: 1:1
- art_space: 위 오른쪽 모서리(x 55–96%, y 3–30%) — 어두운 흐린 배경
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰(화면 밖)
  - type: dialogue
  - text_km: "នៅតែពណ៌ប្រាក់។"
  - text_ko: "은빛이군."
  - place: x 76% · y 14% · w 38% · tail ↗ (화면 밖 감찰, 오른쪽 가장자리 = 문가)
  - read_order: 1
- note: 화면 밖 감찰: 꼬리를 오른쪽 위 가장자리(문가)로.

### panel_016
- aspect: 1:1
- art_space: 위 오른쪽 모서리(x 60–96%, y 3–28%) — 그릇 밖 어두운 옻칠 상판
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…?"
  - text_ko: "…?"
  - place: x 80% · y 12% · w 26%
  - read_order: 1

### panel_017
- aspect: 3:4
- art_space: 위 20%(x 4–96%, y 2–20%) — 갓 챙 위의 단순한 들보 · 천장
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកភ្លក់ដែលរកពុលមិនឃើញ ត្រូវស្លាប់…"
  - text_ko: "독을 놓친 기미는 죽고,"
  - place: x 50% · y 10% · w 70% · tail ↓ (백 감찰)
  - read_order: 1

### panel_018
- aspect: 3:4
- art_space: 위 24%(x 4–96%, y 2–24%) — 흐린 무지 병풍. 흉터 · 눈은 그 아래
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកភ្លក់ដែលប្ដឹងពុលដែលគ្មាន ក៏ស្លាប់ដែរ។"
  - text_ko: "없는 독을 고한 기미도 죽는다."
  - place: x 50% · y 11% · w 72% · tail ↓ (백 감찰)
  - read_order: 1

### panel_019
- aspect: 3:4
- art_space: 위 25%(x 4–96%, y 2–25%) — 창호지 윗부분 · 무지 병풍. 연기는 y 28% 아래에서 흐려짐
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មិនអីទេ។ …មិនអីទេ តែ…"
  - text_ko: "괜찮아. …괜찮은데."
  - place: x 50% · y 11% · w 64%
  - read_order: 1

### panel_020
- aspect: 1:1
- art_space: 위 28%(x 4–96%, y 2–28%) — 그릇 반대쪽의 흐린 병풍
- gap_after: 10
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ក្លិនល្វីង។"
  - text_ko: "…쓴 냄새."
  - place: x 50% · y 12% · w 46%
  - read_order: 1

### panel_021
- aspect: 1:1
- art_space: 위 32% 띠(x 4–96%, y 2–32%) — 흐린 어두운 머리칼 · 그늘. 눈 · 반사광은 그 아래
- gap_after: 10
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មិនមែនកណ្ដាលទេ។ គឺមាត់ចាន។"
  - text_ko: "가운데가 아니야. 테두리야."
  - place: x 50% · y 13% · w 70%
  - read_order: 1

### panel_022
- aspect: 1:1
- art_space: 오른쪽 위(x 50–98%, y 2–44%) — 그림자 쪽 어두운 배경(생각 풍선 둘, 위아래)
- gap_after: 10
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ពុលដែលប្រាក់មើលមិនឃើញ។"
  - text_ko: "은이 못 보는 독."
  - place: x 74% · y 11% · w 44%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "រឿងប៉ាពីមុន ម្ជុលប្រាក់ក៏ស្អាតដែរ។"
  - text_ko: "은침은 아버지 때도 깨끗했어."
  - place: x 74% · y 31% · w 46%
  - read_order: 2

### panel_023
- aspect: 9:16
- art_space: 가운데 칸 오른쪽(x 52–96%, y 38–60%) — 향 꽁초 옆 빈 벽 / 대안 구도에서는 중경 오른쪽의 흐린 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បើនិយាយចេញ… ខ្ញុំក្លាយជាកូនស្រីអ្នកលក់ឱសថនោះ។"
  - text_ko: "말하면… 그 약재상의 딸이 돼."
  - place: x 74% · y 49% · w 42%
  - read_order: 1
- note: 9:16 세로 3단. 생각 풍선은 가운데 칸 오른쪽(x 52–96%, y 38–60%) 안에만.

### panel_024
- aspect: 3:4
- art_space: 위 38%(x 3–97%, y 2–38%) — P04와 같은 자리
- gap_after: 240
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ឥឡូវញ៉ាំបានហើយ?"
  - text_ko: "이제 먹어도 돼?"
  - place: x 34% · y 12% · w 46% · tail ↓ (왕자)
  - read_order: 1

### panel_025
- aspect: 9:16
- art_space: 위 18%(x 4–96%, y 2–18%) + sfx용 작은 빈자리 손목 왼쪽(x 6–24%, y 50–62%) — 흐린 상 · 장판
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: shout
  - text_km: "សូមចាំសិន!"
  - text_ko: "잠깐만요."
  - place: x 50% · y 8% · w 44% · tail ↘ (채령)
  - read_order: 1
- sfx_1:
  - text_km: "ផាប់!"
  - text_ko: "탁"
  - place: x 15% · y 56% · size 9% · rot -8

### panel_026
- aspect: 3:4
- art_space: 위 28%(x 4–96%, y 2–28%) — 상 너머 빈 장판
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមលើកព្រះស្ងោយចេញ។"
  - text_ko: "상을 물리십시오."
  - place: x 50% · y 12% · w 58% · tail ↘ (화면 오른쪽 아래 채령)
  - read_order: 1

### panel_027
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 갓 위의 들보 · 병풍
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់ស្អាត។"
  - text_ko: "은침은 깨끗했다."
  - place: x 40% · y 10% · w 44% · tail ↓ (백 감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "បញ្ជាក់មក។"
  - text_ko: "증명해라."
  - place: x 58% · y 25% · w 36% · tail ↓ (백 감찰)
  - read_order: 2

### panel_028
- aspect: 1:1
- art_space: 위 40%(x 4–96%, y 2–40%) — 흐린 상판(풍선 둘)
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "នេះជាផេះធូប លាយទឹកខ្មេះ។"
  - text_ko: "식초에 갠 쑥재입니다."
  - place: x 40% · y 9% · w 58% · tail ↓ (화면 아래 채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ពុលរុក្ខជាតិដែលប្រាក់មើលមិនឃើញ ប៉ះផេះហើយ ចេញពណ៌ពិត។"
  - text_ko: "은이 못 보는 풀독은, 재를 만나면 제 색을 드러냅니다."
  - place: x 54% · y 28% · w 76% · tail ↓ (화면 아래 채령)
  - read_order: 2

### panel_029
- aspect: 9:16
- art_space: sfx용 위 왼쪽 작은 자리(x 6–40%, y 8–26%) — 번짐 반대편의 흐린 상판
- gap_after: 40
- sfx_1:
  - text_km: "ស្រឹប…"
  - text_ko: "스르륵"
  - place: x 23% · y 17% · size 10% · rot -6

### panel_030
- aspect: 1:1
- art_space: 위 26%(x 4–96%, y 2–26%)
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ចានភ្លក់របស់ខ្ញុំ មិនប្រែពណ៌ទេ។"
  - text_ko: "제 그릇은 그대로입니다."
  - place: x 50% · y 12% · w 64% · tail ↓ (채령)
  - read_order: 1

### panel_031
- aspect: 9:16
- art_space: sfx용 위 왼쪽(x 5–38%, y 6–22%) — 상궁 반대편의 창호지 윗부분
- gap_after: 40
- sfx_1:
  - text_km: "អា៎!"
  - text_ko: "헉 (나인들)"
  - place: x 21% · y 14% · size 8% · rot -6

### panel_032
- aspect: 3:4
- art_space: 위 22%(x 20–96%, y 2–22%) — 흐린 무지 병풍
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់អាចកុហក តែអណ្ដាតអ្នកភ្លក់ មិនកុហកទេ។"
  - text_ko: "은침은 거짓말을 해도, 기미의 혀는 안 합니다."
  - place: x 58% · y 11% · w 72% · tail ↓ (채령)
  - read_order: 1

### panel_033
- aspect: 9:16
- art_space: sfx용 문 오른쪽 옆 작은 자리(x 28–46%, y 34–48%) — 어두운 벽
- gap_after: 40
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "쿵 (문 닫히는 소리)"
  - place: x 37% · y 41% · size 8% · rot 6

### panel_034
- aspect: 3:4
- art_space: 위 왼쪽(x 3–60%, y 2–24%) — 창 쪽 부드러운 빛 안개 · 어두운 천장. 얼굴은 그 밖
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាងភ្លក់ម្ហូប រៀនល្បិចអ្នកលក់ឱសថ មកពីណា។"
  - text_ko: "기미 궁녀가 약재상 수법을 어디서 배웠지."
  - place: x 31% · y 12% · w 54% · tail ↘ (백 감찰)
  - read_order: 1

### panel_035
- aspect: 1:1
- art_space: 위 26%(x 4–96%, y 2–26%) — 어두운 흐린 배경
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "……"
  - text_ko: "……."
  - place: x 50% · y 12% · w 22% · tail ↓ (채령)
  - read_order: 1

### panel_036
- aspect: 3:4
- art_space: 위 24%(x 4–96%, y 2–24%) — 어두운 천장 그늘
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ខ្ញុំ… ធ្លាប់ធ្វើការតូចតាច នៅហាងថ្នាំស្រុកកំណើត។"
  - text_ko: "고향 약방에서… 허드렛일을 했습니다."
  - place: x 50% · y 11% · w 72% · tail ↓ (채령)
  - read_order: 1

### panel_037
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 깊은 그늘(이름표가 읽히지 않을 만큼 어둡게)
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នរណាប៉ះមាត់ចាននោះ។"
  - text_ko: "그 테두리에 누가 손을 댔지."
  - place: x 42% · y 10% · w 54% · tail ↓ (백 감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "មេចុងភៅថា ស៊ុបនោះ ខ្លួនដួសផ្ទាល់។"
  - text_ko: "그 국은 숙수가 직접 펐다고 했지."
  - place: x 56% · y 27% · w 62% · tail ↓ (백 감찰)
  - read_order: 2

### panel_038
- aspect: 3:4
- art_space: 위 25%(x 10–96%, y 2–25%) + 오른쪽 띠(x 72–98%, y 28–58%) — 어두운 천장 · 그늘진 서랍장
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកប៉ះចានចុងក្រោយ គឺមេចុងភៅ។"
  - text_ko: "마지막으로 그릇에 손댄 건 숙수다."
  - place: x 52% · y 11% · w 66% · tail ↙ (화면 왼쪽 백 감찰)
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "វែក… ដួសតែកណ្ដាលចានទេ…"
  - text_ko: "국자는… 가운데만 뜨는데."
  - place: x 85% · y 43% · w 24%
  - read_order: 2
- note: 생각 풍선은 오른쪽 띠(x 72–98%, y 28–58%) 안, 좁아서 3줄이 될 수 있음(띠 높이 충분).

### panel_039
- aspect: 9:16
- art_space: 위 18%(x 6–80%, y 2–18%) — 문틀 위 어두운 벽
- gap_after: 40
- bubble_1:
  - speaker: 왕자
  - type: shout
  - text_km: "ខ្ញុំភ្លក់មុន! មិនឲ្យដានីភ្លក់ទេ!"
  - text_ko: "단이가 아니라 내가 먼저 먹을 거야!"
  - place: x 43% · y 9% · w 70% · tail ↓ (왕자)
  - read_order: 1

### panel_040
- aspect: 3:4
- art_space: 위 20%(x 4–96%, y 2–20%) — 갓 위 어두운 천장
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ព្រះអង្គម្ចាស់។ ទីនេះ ជាកន្លែងហាមចូល។"
  - text_ko: "왕자 마마. 여기는 봉한 곳입니다."
  - place: x 50% · y 10% · w 66% · tail ↙ (백 감찰)
  - read_order: 1

### panel_041
- aspect: 3:4
- art_space: 위 가운데(x 20–80%, y 2–28%) — 깊은 그늘 속 서랍장 면(이름표가 보이지 않게 어둡게)
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាងដឹងច្រើនពេក។"
  - text_ko: "너는 너무 많이 안다."
  - place: x 50% · y 13% · w 44% · tail ↙ (백 감찰)
  - read_order: 1

### panel_042
- aspect: 3:4
- art_space: 위 22%(x 4–70%, y 2–22%) — 문 위 어두운 벽 · 빛 안개
- gap_after: 40
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាំមេចុងភៅមក។"
  - text_ko: "숙수를 데려와라."
  - place: x 37% · y 11% · w 46% · tail ↓ (백 감찰)
  - read_order: 1

### panel_043
- aspect: 9:16
- art_space: 하늘(x 6–94%, y 7–32%) — 조용한 주황 하늘
- gap_after: 40
- bubble_1:
  - speaker: 홍 숙수(소리)
  - type: shout
  - text_km: "ស៊ុបខ្ញុំស្អាត! ឆ្នាំងខ្ញុំ ថែសាមសិបឆ្នាំ!"
  - text_ko: "내 국은 깨끗해! 삼십 년 지킨 솥이야!"
  - place: x 50% · y 17% · w 70% · tail ↓ (원경 홍 숙수 실루엣)
  - read_order: 1
- note: 홍 숙수 목소리(원경). shout, 꼬리는 원경 실루엣 쪽.

### panel_044
- aspect: 3:4
- silent: true
- gap_after: 40

### panel_045
- aspect: 3:4
- art_space: 위 22%(x 4–96%, y 2–22%) — 처마 밑 · 하늘
- gap_after: 40
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "មេចុងភៅ… មិនមែនជាអ្នកធ្វើទេ។"
  - text_ko: "숙수님은… 아니에요."
  - place: x 50% · y 11% · w 62% · tail ↘ (채령)
  - read_order: 1

### panel_046
- aspect: 3:4
- art_space: 위 22%(x 4–96%, y 2–22%) — 상궁 머리 위 처마 · 하늘
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "របស់ល្វីង ក៏ត្រូវលេប ទើបរស់បាន កូន។"
  - text_ko: "쓴 것을 삼켜야 사는 거란다, 얘야."
  - place: x 50% · y 11% · w 66% · tail ↓ (민 상궁)
  - read_order: 1

### panel_047
- aspect: 9:16
- silent: true
- gap_after: 400

### panel_048
- aspect: 9:16
- silent: true
- gap_after: 40

### panel_049
- aspect: 3:4
- art_space: 위 28%(x 4–96%, y 2–28%) — 남청 하늘 · 처마 밑. 등롱은 y 30% 아래
- gap_after: 10
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ក្លិនល្វីង។"
  - text_ko: "…쓴 냄새."
  - place: x 72% · y 8% · w 36%
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ច្រមុះនៅតែមុតដដែល កូន។"
  - text_ko: "코는 여전하구나, 얘야."
  - place: x 36% · y 19% · w 52% · tail ↓ (등 돌린 민 상궁)
  - read_order: 2

### panel_050
- aspect: 1:1
- silent: true
- gap_after: 10

### panel_051
- aspect: 1:1
- silent: true
- gap_after: 10

### panel_052
- aspect: 3:4
- art_space: 머리 오른쪽(x 62–98%, y 4–32%) — 어두운 기둥 · 밤 그늘
- gap_after: 10
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ពុលនោះ មិនមែនសម្រាប់ព្រះអង្គម្ចាស់ទេ។"
  - text_ko: "독은 왕자 마마 것이 아니었다."
  - place: x 80% · y 17% · w 34% · tail ↙ (민 상궁)
  - read_order: 1

### panel_053
- aspect: 9:16
- art_space: 오른쪽 위(x 46–98%, y 2–32%) — 얼굴 어두운 쪽의 남청 그림자(풍선 둘, 위아래)
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ពុលដែលម្ជុលប្រាក់ចាប់មិនបាន…"
  - text_ko: "은침이 못 잡는 독을"
  - place: x 72% · y 9% · w 48% · tail ↙ (민 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្ញុំកំពុងរកក្មេងម្នាក់ ដែលមើលវាដឹង។"
  - text_ko: "알아볼 아이를 찾고 있었지."
  - place: x 72% · y 23% · w 50% · tail ↙ (민 상궁)
  - read_order: 2

### panel_054
- aspect: 3:4
- art_space: 위 30%(x 4–96%, y 2–30%) — 그림자 위 어두운 처마 밑
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "គ្រប់គ្នាមើលតែព្រះអង្គម្ចាស់។ ខ្ញុំ… មើលកូន។"
  - text_ko: "다들 왕자 마마를 보더구나. 나는 너를 봤다."
  - place: x 50% · y 13% · w 70% · tail ↙ (민 상궁)
  - read_order: 1

### panel_055
- aspect: 3:4
- art_space: 위 38%(x 4–96%, y 2–38%) — 남청 밤하늘 · 처마 밑
- gap_after: 240
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ហេតុនេះហើយ បានជាត្រូវតែកូនជាអ្នកភ្លក់។"
  - text_ko: "그래서 꼭 네가 앉아야 했던 거란다."
  - place: x 38% · y 10% · w 62% · tail ↓ (민 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "គាត់ដាក់នុយ… ស្ទូចខ្ញុំ។"
  - text_ko: "나를… 낚은 거야."
  - place: x 72% · y 28% · w 40%
  - read_order: 2

### panel_056
- aspect: 1:1
- art_space: 오른쪽 위(x 70–98%, y 6–40%) — 얼굴 옆 어두운 배경
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ឆែរ៉ុង។"
  - text_ko: "채령아."
  - place: x 84% · y 22% · w 24% · tail ↙ (민 상궁 입)
  - read_order: 1

### panel_057
- aspect: 9:16
- silent: true
- gap_after: 40

### panel_058
- aspect: 3:4
- art_space: 오른쪽 위(x 46–96%, y 3–24%) — P05와 같은 쪽의 어두운 회벽 · 처마 밑
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្ងៃស្អែក ភ្លក់ទៀតណា។"
  - text_ko: "내일도 시식해라."
  - place: x 71% · y 12% · w 46% · tail ↙ (민 상궁)
  - read_order: 1

### panel_059
- aspect: 1:1
- art_space: 오른쪽 위(x 56–98%, y 2–30%) — 얼굴 옆 어두운 배경
- gap_after: 40
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "លើកនេះ បិទមាត់ផងណា។"
  - text_ko: "이번엔 입을 다물고."
  - place: x 77% · y 14% · w 38% · tail ↙ (민 상궁)
  - read_order: 1

### panel_060
- aspect: 9:16
- art_space: 아래 띠(x 0–100%, y 88–100%) — 평평한 어두운 배경(캡션 자리)
- gap_after: 320
- bubble_1:
  - speaker: (끝 캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 50% · y 91% · w 70%
  - read_order: 1
- note: 끝 캡션은 아래 어두운 띠(y 88–100%) 안.

---

## 레터러 노트 (회차 전체)

- 2풍선 패널 13개(P01 · P04 · P08 · P10 · P12 · P22 · P27 · P28 · P37 · P38 · P49 · P53 · P55), 3풍선 1개(P13, 대본 지정). 나머지는 1풍선.
- 가장 긴 풍선(P28 둘째 · P32, 각 약 31 글자 묶음)은 w 70~72%로 2줄 안에 들게 했다. 실제 Battambang 렌더에서 3줄이 되면 placement pass에서 w만 넓힌다(문구는 그대로).
- 손만 나오는 컷(P08 · P09 · P28 · P30)은 화자가 프레임 위 밖 → 꼬리를 위(↖ ↑ ↗)로. P15 감찰도 화면 밖 → 왼쪽 위 가장자리.
- 이 회차에 글씨 있는 소품 없음 → `env` 0개(당번 판 · 서랍 이름표 · 등롱 모두 빈칸으로 그림).
- 크메르어는 비원어민 초안(대본 §4) — 원어민 감수 후 대본과 이 명세를 함께 고친다. 문구 수정은 이미지 재생성 없이 rebuild만.
