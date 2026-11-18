# EP01 레터링 명세 — letterer (크메르어 말풍선, 뷰어가 그림)

- 작성: letterer · 2026-11-18 · Phase 4 step 3 · Khmer edition (`webtoon-khmer-edition` §3)
- 입력: `03_episode/ep01_script_final.md`(크메르어 원문 = 기준) · `03_episode/ep01_beatsheet.md` §5 말풍선 자리 · `04_visual/style-bible.md` §8 · `02_story/glossary_km.md`
- 샷리스트(`ep01_shotlist.md`)는 이 명세 작성 시점에 없었다. `art_space`는 비트시트 말풍선 자리 + style-bible §8에서 확정했다. 샷리스트 구도와 어긋나면 panel-director가 알려 주면 `place`만 맞춘다.
- 패널 60 / 말풍선 63(대사 · 생각 62 + 끝 캡션 1) / 효과음 4(P25 · P29 · P31 · P33) / 소품 글씨 0 / 무대사 9(+ P60은 끝 캡션만)

## 원칙

1. **이미지에는 글자가 없다.** 말풍선 · 대사 · 효과음 글자 모두 없음. 각 패널은 `art_space` 자리를 조용한 배경으로 비운다 → prompt-smith가 영문으로 옮겨 프롬프트에 넣는다.
2. **뷰어가 말풍선을 그린다**(`km_tool.py build`). `place`: x/y = 말풍선 중심, w = 최대 폭, 모두 패널 대비 %. 꼬리: ↙ ↓ ↘(아래) · ↖ ↑ ↗(위). thought · narration은 꼬리 없음.
3. `text_km`은 대본 `KM:` 문구 그대로(km_tool check로 확인). `text_ko`는 참고용, 화면에 안 나옴.
4. 위에서 아래 = `read_order`. 말풍선은 얼굴 · 손 · 은침 · 그릇 테두리 · 손수건 · 노리개 · 당번 판 · 등롱을 가리지 않는다.
5. 종류(style-bible §8): 채령 생각 = thought · 홍 숙수(P13 · P43) · 왕자 P39 · 채령 P25 = shout · **민 상궁은 절대 shout 아님**(반전 대사도 흰 dialogue) · 끝 캡션만 narration · memory 미사용.
6. 긴 여백(`gap_after`, tension-curve): P12 · P24 · P47(가장 긺) · P55 · P60.

---

### panel_001
- art_space: 상단 1/4: 왼쪽 위 빛나는 창호지 벽만 (채령 · 왕자 얼굴은 그 아래)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "បើមានពុល ខ្ញុំម្ចាស់ភ្លក់មុន ស្លាប់មុន។"
  - text_ko: "독이면 제가 먼저 죽습니다."
  - place: x 36% · y 8% · w 60% · tail ↘ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "នេះជាការងាររបស់ខ្ញុំម្ចាស់។"
  - text_ko: "그게 제 일이에요."
  - place: x 62% · y 19% · w 52% · tail ↙ (채령)
  - read_order: 2

### panel_002
- silent: true

### panel_003
- art_space: 상단 좌측 1/3: 창호지 벽 (두 사람 얼굴 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមសោយបានហើយ ព្រះអង្គម្ចាស់។"
  - text_ko: "드셔도 됩니다, 왕자 마마."
  - place: x 32% · y 11% · w 52% · tail ↘ (채령)
  - read_order: 1

### panel_004
- art_space: 상단 40%: 좌우 두 자리 (왼쪽 채령 위 · 오른쪽 왕자 위, 그릇 · 입 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមប្រើស្លាបព្រាផង ព្រះអង្គ។"
  - text_ko: "숟가락으로 드셔야지요."
  - place: x 30% · y 9% · w 48% · tail ↓ (채령)
  - read_order: 1
- bubble_2:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ផឹកអីចឹង ឆ្ងាញ់ជាង!"
  - text_ko: "이게 더 맛있어."
  - place: x 70% · y 22% · w 46% · tail ↓ (왕자)
  - read_order: 2

### panel_005
- art_space: 화면 오른쪽 위: 기둥 반대편 흰 회벽 · 처마 밑 (VIEW_R, 기둥은 왼쪽 1/3)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្សែបូសក់រលុងទៀតហើយ កូន។"
  - text_ko: "댕기가 또 풀렸구나, 얘야."
  - place: x 68% · y 11% · w 52% · tail ↙ (민 상궁)
  - read_order: 1

### panel_006
- art_space: 상단 1/4: 머리 위 흐린 배경 (손 · 코끝 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ដៃលោកស្រី… មានក្លិនល្វីង។"
  - text_ko: "마마님 손에서… 쓴 냄새가 나요."
  - place: x 50% · y 9% · w 58% · tail ↓ (채령)
  - read_order: 1

### panel_007
- art_space: 얼굴 옆 상단: 화면 오른쪽 위 흐린 회벽 (눈 · 미소 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ច្រមុះនៅតែមុតដដែល កូន។"
  - text_ko: "코는 여전하구나, 얘야."
  - place: x 70% · y 10% · w 48% · tail ↙ (민 상궁)
  - read_order: 1

### panel_008
- art_space: 상단 40%: 얼룩 모서리에서 먼 쪽 흐린 배경 (손 · 손수건 · 얼룩 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ទើបផ្សំថ្នាំបន្សាបពុលរួច។"
  - text_ko: "해독환을 빚었단다."
  - place: x 38% · y 8% · w 56% · tail ↖ (프레임 위 밖 상궁 얼굴 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ប៉ះរបស់ល្វីង ជាការងាររបស់ខ្ញុំ។"
  - text_ko: "쓴 걸 만지는 게 내 일이지."
  - place: x 62% · y 22% · w 58% · tail ↗ (프레임 위 밖 상궁)
  - read_order: 2

### panel_009
- art_space: 판 위쪽 기둥 여백 (상단 1/4, 패 · 고리 · 손 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្ងៃត្រង់ស្អែក លោកអធិការនឹងមកអង្គុយមើល។"
  - text_ko: "내일 점심엔 감찰 나리가 배석하신다."
  - place: x 50% · y 10% · w 66% · tail ↑ (프레임 밖 상궁)
  - read_order: 1

### panel_010
- art_space: 상단 40%: 처마 밑 흰 회벽 (두 사람 얼굴은 그 아래)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "បើគ្មានកូន ព្រះអង្គម្ចាស់មិនព្រមសោយទេ។"
  - text_ko: "왕자 마마는 너 없인 숟가락을 안 드시지."
  - place: x 36% · y 9% · w 58% · tail ↘ (민 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ត្រូវតែកូនជាអ្នកភ្លក់ណា។"
  - text_ko: "꼭 네가 시식해라."
  - place: x 62% · y 22% · w 48% · tail ↙ (민 상궁)
  - read_order: 2

### panel_011
- silent: true

### panel_012
- art_space: 상단 40%: 채령 머리 위 기둥 옆 조용한 처마 밑 (얼굴 · 노리개 피함)
- gap_after: 200
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បង… ថ្ងៃនេះ ខ្ញុំនៅរស់បានទៀត ក្រោមឈ្មោះបង។"
  - text_ko: "언니, 오늘도 언니 이름으로 살아남았어."
  - place: x 40% · y 9% · w 64%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ឆែរ៉ុង ឈ្មោះពិតខ្ញុំ… មិនទាន់មាននរណាដឹងទេ។"
  - text_ko: "채령이는… 아직 아무도 몰라."
  - place: x 58% · y 24% · w 66%
  - read_order: 2

### panel_013
- art_space: 상단 절반: 사람들 위의 무지 병풍 · 창호지 문 (홍 숙수 쪽 왼쪽 위로 몰고, 감찰 얼굴 · 향로 피함)
- gap_after: 0
- bubble_1:
  - speaker: 홍 숙수
  - type: shout
  - text_km: "អើ! លោកអធិការក៏អញ្ជើញមកដែរ!"
  - text_ko: "감찰 나리까지 납셨네!"
  - place: x 30% · y 8% · w 54% · tail ↓ (홍 숙수)
  - read_order: 1
- bubble_2:
  - speaker: 홍 숙수
  - type: dialogue
  - text_km: "ស៊ុបព្រះអង្គម្ចាស់ ខ្ញុំស្ងោរផ្ទាល់ ដួសផ្ទាល់!"
  - text_ko: "왕자 마마 국은 내가 직접 끓이고 직접 펐어."
  - place: x 40% · y 21% · w 62% · tail ↙ (홍 숙수)
  - read_order: 2
- bubble_3:
  - speaker: 홍 숙수
  - type: shout
  - text_km: "ឯង! ឲ្យទ្រង់សោយ មុនវាត្រជាក់!"
  - text_ko: "식기 전에 드시게 해!"
  - place: x 32% · y 35% · w 52% · tail ↓ (홍 숙수)
  - read_order: 3
- note: 홍 숙수 3풍선(대본 지정, 이 회차 유일). 1 · 3번은 shout, 2번은 dialogue(가장 긴 줄).

### panel_014
- silent: true

### panel_015
- art_space: 은침 옆 어두운 흐린 배경, 화면 왼쪽 위 1/3 (은침 끝 반짝임 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰(화면 밖)
  - type: dialogue
  - text_km: "នៅតែពណ៌ប្រាក់។"
  - text_ko: "은빛이군."
  - place: x 28% · y 14% · w 42% · tail ↖ (화면 밖 감찰, 왼쪽 위 가장자리)
  - read_order: 1
- note: 화면 밖 감찰: 꼬리를 왼쪽 위 가장자리로.

### panel_016
- art_space: 그릇 밖 오른쪽 위 모서리 작은 자리 (국물 표면 · 보랏빛 윤기 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…?"
  - text_ko: "…?"
  - place: x 80% · y 9% · w 26%
  - read_order: 1

### panel_017
- art_space: 갓 챙 위 상단 1/4: 어두운 천장 · 병풍 (갓 · 칼자루 손 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកភ្លក់ដែលរកពុលមិនឃើញ ត្រូវស្លាប់…"
  - text_ko: "독을 놓친 기미는 죽고,"
  - place: x 50% · y 8% · w 66% · tail ↓ (백 감찰)
  - read_order: 1

### panel_018
- art_space: 얼굴 옆 상단: 화면 오른쪽 위 흐린 배경 (흉터 · 눈 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកភ្លក់ដែលប្ដឹងពុលដែលគ្មាន ក៏ស្លាប់ដែរ។"
  - text_ko: "없는 독을 고한 기미도 죽는다."
  - place: x 66% · y 10% · w 58% · tail ↙ (백 감찰)
  - read_order: 1

### panel_019
- art_space: 상단 1/4: 향 연기 위 창호지 벽 (향로 · 채령 얼굴 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មិនអីទេ។ …មិនអីទេ តែ…"
  - text_ko: "괜찮아. …괜찮은데."
  - place: x 50% · y 9% · w 58%
  - read_order: 1

### panel_020
- art_space: 상단 좌측: 그릇 반대쪽 흐린 배경 (코끝 · 그릇 테두리 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ក្លិនល្វីង។"
  - text_ko: "…쓴 냄새."
  - place: x 30% · y 10% · w 42%
  - read_order: 1

### panel_021
- art_space: 눈 위 상단 띠 (눈 · 반사광 속 그릇 테두리 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "មិនមែនកណ្ដាលទេ។ គឺមាត់ចាន។"
  - text_ko: "가운데가 아니야. 테두리야."
  - place: x 50% · y 8% · w 66%
  - read_order: 1

### panel_022
- art_space: 그림자 쪽(왼쪽) 상단 40%: 어두운 흐린 배경 (밝은 쪽 얼굴 · 눈 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "ពុលដែលប្រាក់មើលមិនឃើញ។"
  - text_ko: "은이 못 보는 독."
  - place: x 34% · y 9% · w 56%
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "រឿងប៉ាពីមុន ម្ជុលប្រាក់ក៏ស្អាតដែរ។"
  - text_ko: "은침은 아버지 때도 깨끗했어."
  - place: x 40% · y 23% · w 60%
  - read_order: 2

### panel_023
- art_space: 가운데 칸 오른쪽 절반의 빈 벽 (향로 · 꽁초 · 재는 가운데 칸 왼쪽, 위 칸 손 · 아래 칸 주먹 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "បើនិយាយចេញ… ខ្ញុំក្លាយជាកូនស្រីអ្នកលក់ឱសថនោះ។"
  - text_ko: "말하면… 그 약재상의 딸이 돼."
  - place: x 66% · y 50% · w 54%
  - read_order: 1
- note: 9:16 세로 3단. 생각 풍선은 가운데(향) 칸 안에만. 3단 대안 구도(깊이 구도)일 때는 x 66% · y 34% 로 옮긴다.

### panel_024
- art_space: 상단 좌측 1/3: 창호지 벽 (그릇 · 입 · 얼굴 피함)
- gap_after: 160
- bubble_1:
  - speaker: 왕자
  - type: dialogue
  - text_km: "ឥឡូវញ៉ាំបានហើយ?"
  - text_ko: "이제 먹어도 돼?"
  - place: x 30% · y 10% · w 46% · tail ↘ (왕자)
  - read_order: 1

### panel_025
- art_space: 상단 1/4 (채령 대사) + 손목 오른쪽 옆 작은 빈자리 (효과음, 손목 · 그릇 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: shout
  - text_km: "សូមចាំសិន!"
  - text_ko: "잠깐만요."
  - place: x 50% · y 9% · w 44% · tail ↓ (채령)
  - read_order: 1
- sfx_1:
  - text_km: "ផាប់!"
  - text_ko: "탁"
  - place: x 76% · y 46% · size 9% · rot -8

### panel_026
- art_space: 상 위쪽 빈 장판 영역, 화면 위 1/4 (은침 · 그릇 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "សូមលើកព្រះស្ងោយចេញ។"
  - text_ko: "상을 물리십시오."
  - place: x 50% · y 10% · w 58% · tail ↓ (채령)
  - read_order: 1

### panel_027
- art_space: 감찰 머리 위 상단 1/3: 어두운 천장 · 병풍 (갓 · 칼자루 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់ស្អាត។"
  - text_ko: "은침은 깨끗했다."
  - place: x 40% · y 8% · w 44% · tail ↘ (백 감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "បញ្ជាក់មក។"
  - text_ko: "증명해라."
  - place: x 60% · y 18% · w 36% · tail ↓ (백 감찰)
  - read_order: 2

### panel_028
- art_space: 상단 40%: 손 위쪽 흐린 배경 (종지 · 손가락 · 재 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "នេះជាផេះធូប លាយទឹកខ្មេះ។"
  - text_ko: "식초에 갠 쑥재입니다."
  - place: x 40% · y 9% · w 58% · tail ↖ (프레임 위 밖 채령)
  - read_order: 1
- bubble_2:
  - speaker: 채령
  - type: dialogue
  - text_km: "ពុលរុក្ខជាតិដែលប្រាក់មើលមិនឃើញ ប៉ះផេះហើយ ចេញពណ៌ពិត។"
  - text_ko: "은이 못 보는 풀독은, 재를 만나면 제 색을 드러냅니다."
  - place: x 56% · y 24% · w 70% · tail ↗ (프레임 위 밖 채령)
  - read_order: 2

### panel_029
- art_space: 효과음 작은 자리: 번짐 반대편 그릇 테두리 위쪽 (번지는 연보랏빛 · 손가락 피함)
- gap_after: 0
- sfx_1:
  - text_km: "ស្រឹប…"
  - text_ko: "스르륵"
  - place: x 30% · y 22% · size 10% · rot -6

### panel_030
- art_space: 상단 1/4: 두 그릇 위쪽 흐린 상 표면 (두 그릇 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ចានភ្លក់របស់ខ្ញុំ មិនប្រែពណ៌ទេ។"
  - text_ko: "제 그릇은 그대로입니다."
  - place: x 50% · y 10% · w 60% · tail ↑ (프레임 밖 채령)
  - read_order: 1

### panel_031
- art_space: 효과음 작은 자리: 상궁 반대편(왼쪽) 상단 (문지방의 상궁 · 인물들 얼굴 피함)
- gap_after: 0
- sfx_1:
  - text_km: "អា៎!"
  - text_ko: "헉 (나인들)"
  - place: x 22% · y 12% · size 8% · rot -6

### panel_032
- art_space: 상단 1/4: 채령 머리 위 창호지 벽 (얼굴 · 치맛자락 쥔 손 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ម្ជុលប្រាក់អាចកុហក តែអណ្ដាតអ្នកភ្លក់ មិនកុហកទេ។"
  - text_ko: "은침은 거짓말을 해도, 기미의 혀는 안 합니다."
  - place: x 50% · y 10% · w 72% · tail ↓ (채령)
  - read_order: 1

### panel_033
- art_space: 효과음 작은 자리: 닫히는 문 곁, 화면 오른쪽 위 어두운 천장 그늘 (빛줄기 · 서랍장 · 두 열쇠 서랍 피함)
- gap_after: 0
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "쿵 (문 닫히는 소리)"
  - place: x 76% · y 26% · size 11% · rot 6

### panel_034
- art_space: 창빛 쪽 상단(왼쪽 위): 앞쪽 위 어두운 천장 그늘 (감찰 얼굴 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាងភ្លក់ម្ហូប រៀនល្បិចអ្នកលក់ឱសថ មកពីណា។"
  - text_ko: "기미 궁녀가 약재상 수법을 어디서 배웠지."
  - place: x 36% · y 10% · w 66% · tail ↘ (백 감찰)
  - read_order: 1

### panel_035
- art_space: 상단 오른쪽 작은 자리: 흐린 서랍장 면 (입술 · 눈 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "……"
  - text_ko: "……."
  - place: x 68% · y 9% · w 22% · tail ↙ (채령)
  - read_order: 1

### panel_036
- art_space: 상단 1/4: 앞쪽 위 어두운 천장 그늘 (얼굴 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "ខ្ញុំ… ធ្លាប់ធ្វើការតូចតាច នៅហាងថ្នាំស្រុកកំណើត។"
  - text_ko: "고향 약방에서… 허드렛일을 했습니다."
  - place: x 50% · y 10% · w 70% · tail ↓ (채령)
  - read_order: 1

### panel_037
- art_space: 상단 40%: 어두운 천장 그늘 (두 얼굴 · 서랍장 짚은 손 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នរណាប៉ះមាត់ចាននោះ។"
  - text_ko: "그 테두리에 누가 손을 댔지."
  - place: x 38% · y 8% · w 48% · tail ↘ (백 감찰)
  - read_order: 1
- bubble_2:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "មេចុងភៅថា ស៊ុបនោះ ខ្លួនដួសផ្ទាល់។"
  - text_ko: "그 국은 숙수가 직접 펐다고 했지."
  - place: x 58% · y 21% · w 60% · tail ↓ (백 감찰)
  - read_order: 2

### panel_038
- art_space: 상단 띠(감찰 대사) + 왼쪽 가장자리 흐린 배경(채령 생각) (채령 얼굴 · 감찰 어깨 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "អ្នកប៉ះចានចុងក្រោយ គឺមេចុងភៅ។"
  - text_ko: "마지막으로 그릇에 손댄 건 숙수다."
  - place: x 62% · y 9% · w 56% · tail ↘ (어깨 너머 백 감찰)
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "វែក… ដួសតែកណ្ដាលចានទេ…"
  - text_ko: "국자는… 가운데만 뜨는데."
  - place: x 24% · y 30% · w 40%
  - read_order: 2

### panel_039
- art_space: 문틀 위 상단 1/4 (쏟아지는 빛 속, 왕자 얼굴 · 호랑이 피함)
- gap_after: 0
- bubble_1:
  - speaker: 왕자
  - type: shout
  - text_km: "ខ្ញុំភ្លក់មុន! មិនឲ្យដានីភ្លក់ទេ!"
  - text_ko: "단이가 아니라 내가 먼저 먹을 거야!"
  - place: x 50% · y 9% · w 66% · tail ↓ (왕자)
  - read_order: 1

### panel_040
- art_space: 감찰 갓 위 상단 1/4: 어두운 천장 그늘 (세 인물 얼굴 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "ព្រះអង្គម្ចាស់។ ទីនេះ ជាកន្លែងហាមចូល។"
  - text_ko: "왕자 마마. 여기는 봉한 곳입니다."
  - place: x 38% · y 9% · w 56% · tail ↘ (백 감찰)
  - read_order: 1

### panel_041
- art_space: 두 얼굴 사이 위쪽의 좁은 어두운 서랍장 면 (두 얼굴 · 손끝 재 얼룩 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាងដឹងច្រើនពេក។"
  - text_ko: "너는 너무 많이 안다."
  - place: x 50% · y 12% · w 36% · tail ↓ (백 감찰)
  - read_order: 1

### panel_042
- art_space: 문 밖 빛 쪽 상단(오른쪽 위) (감찰 뒷모습 · 채령 피함)
- gap_after: 0
- bubble_1:
  - speaker: 백 감찰
  - type: dialogue
  - text_km: "នាំមេចុងភៅមក។"
  - text_ko: "숙수를 데려와라."
  - place: x 66% · y 10% · w 42% · tail ↙ (백 감찰)
  - read_order: 1

### panel_043
- art_space: 노을 하늘 상단 1/4 (기와 선 위, 원경 실루엣은 그 아래)
- gap_after: 0
- bubble_1:
  - speaker: 홍 숙수(소리)
  - type: shout
  - text_km: "ស៊ុបខ្ញុំស្អាត! ឆ្នាំងខ្ញុំ ថែសាមសិបឆ្នាំ!"
  - text_ko: "내 국은 깨끗해! 삼십 년 지킨 솥이야!"
  - place: x 50% · y 11% · w 68% · tail ↓ (원경 홍 숙수 실루엣)
  - read_order: 1
- note: 홍 숙수 목소리(원경). shout, 꼬리는 원경 실루엣 쪽.

### panel_044
- silent: true

### panel_045
- art_space: 상단 1/4: 처마 밑 (위쪽 상궁 얼굴 · 아래 채령 얼굴 피함, 왼쪽으로)
- gap_after: 0
- bubble_1:
  - speaker: 채령
  - type: dialogue
  - text_km: "មេចុងភៅ… មិនមែនជាអ្នកធ្វើទេ។"
  - text_ko: "숙수님은… 아니에요."
  - place: x 32% · y 9% · w 56% · tail ↓ (채령)
  - read_order: 1

### panel_046
- art_space: 상단 1/4: 상궁 머리 위 처마 밑 (두 얼굴 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "របស់ល្វីង ក៏ត្រូវលេប ទើបរស់បាន កូន។"
  - text_ko: "쓴 것을 삼켜야 사는 거란다, 얘야."
  - place: x 50% · y 8% · w 62% · tail ↓ (민 상궁)
  - read_order: 1

### panel_047
- silent: true
- gap_after: 320

### panel_048
- silent: true

### panel_049
- art_space: 상단 40%: 등롱 역광 위 남청 밤하늘 · 처마 (채령 얼굴 · 상궁 머리 피함)
- gap_after: 0
- bubble_1:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "…ក្លិនល្វីង។"
  - text_ko: "…쓴 냄새."
  - place: x 30% · y 9% · w 38%
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ច្រមុះនៅតែមុតដដែល កូន។"
  - text_ko: "코는 여전하구나, 얘야."
  - place: x 64% · y 22% · w 52% · tail ↘ (등 돌린 민 상궁)
  - read_order: 2

### panel_050
- silent: true

### panel_051
- silent: true

### panel_052
- art_space: 상궁 머리 옆(왼쪽) 어두운 기둥 쪽 (얼굴 · 미소 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ពុលនោះ មិនមែនសម្រាប់ព្រះអង្គម្ចាស់ទេ។"
  - text_ko: "독은 왕자 마마 것이 아니었다."
  - place: x 26% · y 20% · w 46% · tail ↘ (민 상궁)
  - read_order: 1

### panel_053
- art_space: 어두운 쪽(왼쪽) 상단 40%: 등롱빛이 닿지 않는 밤 그림자 (얼굴 · 눈 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ពុលដែលម្ជុលប្រាក់ចាប់មិនបាន…"
  - text_ko: "은침이 못 잡는 독을"
  - place: x 34% · y 8% · w 56% · tail ↘ (민 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ខ្ញុំកំពុងរកក្មេងម្នាក់ ដែលមើលវាដឹង។"
  - text_ko: "알아볼 아이를 찾고 있었지."
  - place: x 40% · y 21% · w 62% · tail ↘ (민 상궁)
  - read_order: 2

### panel_054
- art_space: 상단 1/4: 그림자 위 어두운 처마 (상궁 어깨 · 채령 발 · 그림자 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "គ្រប់គ្នាមើលតែព្រះអង្គម្ចាស់។ ខ្ញុំ… មើលកូន។"
  - text_ko: "다들 왕자 마마를 보더구나. 나는 너를 봤다."
  - place: x 50% · y 9% · w 68% · tail ↓ (민 상궁, 앞쪽)
  - read_order: 1

### panel_055
- art_space: 상단 1/4(상궁 대사) + 채령 쪽(왼쪽) 가장자리 밤 그림자(생각) (두 얼굴 · 손수건 인서트 피함)
- gap_after: 200
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ហេតុនេះហើយ បានជាត្រូវតែកូនជាអ្នកភ្លក់។"
  - text_ko: "그래서 꼭 네가 앉아야 했던 거란다."
  - place: x 42% · y 8% · w 66% · tail ↘ (민 상궁)
  - read_order: 1
- bubble_2:
  - speaker: 채령(생각)
  - type: thought
  - text_km: "គាត់ដាក់នុយ… ស្ទូចខ្ញុំ។"
  - text_ko: "나를… 낚은 거야."
  - place: x 24% · y 28% · w 40%
  - read_order: 2

### panel_056
- art_space: 얼굴 옆(왼쪽) 어두운 배경 한쪽 띠 (입가 · 눈 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ឆែរ៉ុង។"
  - text_ko: "채령아."
  - place: x 18% · y 22% · w 28% · tail ↘ (민 상궁 입가)
  - read_order: 1

### panel_057
- silent: true

### panel_058
- art_space: 상단 1/4: 처마 밑 밤하늘 (두 얼굴 · 댕기 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "ថ្ងៃស្អែក ភ្លក់ទៀតណា។"
  - text_ko: "내일도 시식해라."
  - place: x 56% · y 9% · w 46% · tail ↙ (민 상궁)
  - read_order: 1

### panel_059
- art_space: 얼굴 옆 상단(오른쪽 위) 어두운 배경 (눈 · 미소 피함)
- gap_after: 0
- bubble_1:
  - speaker: 민 상궁
  - type: dialogue
  - text_km: "លើកនេះ បិទមាត់ផងណា។"
  - text_ko: "이번엔 입을 다물고."
  - place: x 72% · y 10% · w 44% · tail ↙ (민 상궁)
  - read_order: 1

### panel_060
- art_space: 하단 띠 약 15%: 어두운 밤 배경 (끝 캡션 자리, 얼굴 · 시선 피함)
- gap_after: 240
- bubble_1:
  - speaker: (끝 캡션)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 50% · y 91% · w 70%
  - read_order: 1

---

## 레터러 노트 (회차 전체)

- 2풍선 패널 13개(P01 · P04 · P08 · P10 · P12 · P22 · P27 · P28 · P37 · P38 · P49 · P53 · P55), 3풍선 1개(P13, 대본 지정). 나머지는 1풍선.
- 가장 긴 풍선(P28 둘째 · P32, 각 약 31 글자 묶음)은 w 70~72%로 2줄 안에 들게 했다. 실제 Battambang 렌더에서 3줄이 되면 placement pass에서 w만 넓힌다(문구는 그대로).
- 손만 나오는 컷(P08 · P09 · P28 · P30)은 화자가 프레임 위 밖 → 꼬리를 위(↖ ↑ ↗)로. P15 감찰도 화면 밖 → 왼쪽 위 가장자리.
- 이 회차에 글씨 있는 소품 없음 → `env` 0개(당번 판 · 서랍 이름표 · 등롱 모두 빈칸으로 그림).
- 크메르어는 비원어민 초안(대본 §4) — 원어민 감수 후 대본과 이 명세를 함께 고친다. 문구 수정은 이미지 재생성 없이 rebuild만.
