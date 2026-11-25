# EP04 레터링 명세 — 「꼬맹이」 / «ឈ្មោះហៅក្រៅ» (letterer · Khmer edition)

- 작성: letterer · 2026-11-25 · Phase 4 (Khmer edition + Flow-by-hand mode)
- 입력: `03_episode/ep04_script_final.md`(Khmer review READY), `04_visual/ep04_shotlist.md`(art_space·gutter·FL7·FL8·FL12), `04_visual/style-bible.md` §7, `00_input/brief.md`(판정 HA–HG), 형식 기준 `04_visual/ep03_lettering.md`
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음은 뷰어(`km_tool.py build`)가 그린다.
  `art_space`는 이미지가 비워 둘 자리다 — prompt-smith는 괄호 안 영어(EN)를
  `Keep <EN> as calm, empty background with no important details (a speech bubble will be added there later).`로 넣는다.
- `text_km`는 대본 KM 줄 그대로(글자 단위, 검수본에서 스크립트로 기계적으로 옮김 — 크메르어는 한 글자도 고치지 않았다). `text_ko`는 참고용, 화면에 나오지 않음.
- `place`: x/y = 말풍선 중심, w = 최대 폭(패널 폭 %). 모든 말풍선 `x + w ≤ 100` 및 `x − w/2 ≥ 2`(프레임 안).
  9:16 패널 기준 1줄 말풍선 ≈ 패널 높이 6%, 2줄 ≈ 9–10%. 폭은 말풍선당 2줄 이내가 되게 잡았다(057 ②만 2–3줄).
- `gap_after`(px): tight 16 · normal 50 · wide 160 · xwide 320 (샷리스트 gutter_after, FL7). xwide = 003 · 039 · 040 · 053. 회차 끝 061 = 0.
- 같은 화자의 연속 말풍선 2개는 첫 번째에 꼬리를 달지 않고 두 번째에만 단다(001 · 006 · 011 · 016 · 019 · 030 · 055 · 057 · 058). 014는 memory 2개 모두 꼬리 없음.
- 화면 밖 화자(FL12): 005 석구 꼬리 ↘ 커튼 · 019 삼촌 꼬리 ↘ 손 쪽 · 030 삼촌 꼬리 ↗ 위 · 037 우진 꼬리 ↑ · 043 석구 꼬리 ↘ 부엌 문턱 · 045 인호 꼬리 ↑ · 055 새롬 꼬리 ↗ 위.
- 화자 표기: 손님 = `손님`(이름·얼굴 없음, 삼촌을 부르지 않음). 인호는 045 한 줄.
- 패널 61 · 말풍선 74 (대사 66 · 생각 6 — 004·015·018·023·032·052 · memory 2 — 014) · sfx 5 (003 · 022 · 031 · 043 · 045) · env 0 · 캡션 0 · 무대사 7 (002·024·029·035·040·051·061) + 효과음만 1 (003).
- **014 회상 = `memory` 말풍선 2개 유지.** EP02 P52·EP03 P46–47은 대사 없는 회상이라 무대사였고, 014는 EP01 P37 대사를 글자 그대로 다시 들려주는 회상이라
  현재 대사와 구분되는 `memory` 종류를 쓴다. 판정 HE로 두 번째 줄은 뺄 수 있었지만 art_space가 상단 40%로 넉넉하고, `km_tool.py check`가 대본의 모든 KM 줄을 요구하므로 둘 다 넣었다.
- 말풍선 3개 패널 없음. 043은 말풍선 2 + 효과음 1(대본 계획대로). **반전 050(អាតូច)은 말풍선 1개, 작게**(FL8). 057 · 058은 새롬 말풍선만 2개.
- 061 클리프행어는 무대사 — 말풍선·캡션·엔딩 카드 없음.
- 배치 패스 확인 요청(이미지 도착 후): 003·031·043·045 효과음(종·문턱·숟가락 위치 — x/y만) · 005(오른쪽 위 종과 말풍선) · 030·055(꼬리 ↗ 가 ①을 피하는지) ·
  041·046·047·049(식탁 축에서 화자 좌우 — 꼬리 방향) · 044·058(문 위 맨 전구와 말풍선 겹침) · 057 ②(2–3줄 높이가 새롬 얼굴 위 30% 안에 드는지).

---

### panel_001
- art_space: 상단 20% 노을 하늘·그늘 벽(담 위·계단 위쪽) (EN: the upper fifth of the frame: darkening sunset sky and shaded wall above the stairs and the low wall)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ហារីន! មុនចូលវេន ចូលមកលេងពូបន្តិចណា៎។"
  - text_ko: "하린아. 출근 전에 들러라."
  - place: x 34% · y 7% · w 46%
  - read_order: 1
  - note: 삼촌 ① — 같은 화자 연속, 꼬리는 ②에만
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "ពូដាំតែរង់ចាំ។"
  - text_ko: "차 끓여 놓을게."
  - place: x 58% · y 15% · w 30% · tail ↓
  - read_order: 2
  - note: 삼촌 ② — 꼬리 ↓ 아래 가운데 문간의 삼촌
- note: EP03 P61 직결. 삼촌은 중경 가운데 문간.

### panel_002
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_003
- art_space: 효과음만 — 아래 가게 문 위 종 옆 그늘 벽(작게). 상단 하늘은 비워 둠 (EN: only the small shaded patch of wall beside the brass bell above the shop door in the lower third; the sky at the top stays empty too)
- gap_after: 320
- sfx_1:
  - text_km: "ក្រីង ក្រីង!"
  - text_ko: "딸랑"
  - place: x 64% · y 70% · size 6% · rot -8
  - note: 아래 가게 문 위 종 옆 그늘 벽(FL8) — 배치 패스에서 종 위치에 맞춰 x/y만
- note: 효과음만. 다음은 3시간 반 뒤 밤(xwide).

### panel_004
- art_space: 상단 25% 남색 밤하늘과 전선, 하린 머리 위 (EN: the upper quarter of the frame: plain navy night sky and a few power lines above Harin's head)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…ខ្ញុំទៅសួរឲ្យច្បាស់។ មិនមែនទៅជូនលុយទេ។"
  - text_ko: "…따지러 가는 거야. 돈 내러 가는 게 아니라."
  - place: x 46% · y 11% · w 50%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_005
- art_space: 상단 20% 어두운 천장 — 오른쪽 위 흔들리는 종은 피함 (EN: the upper fifth of the frame: dark shop ceiling (the swinging bell at the top right kept clear of it))
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ចូលមក ក្មួយ។ តែជិតត្រជាក់ហើយ។"
  - text_ko: "들어와라. 차 식는다."
  - place: x 44% · y 9% · w 46% · tail ↘
  - read_order: 1
  - note: 석구 화면 밖 — 꼬리 ↘ 안쪽 오른쪽 커튼 틈(FL12)

### panel_006
- art_space: 상단 20% 형광등 아래 어두운 천장·벽 (EN: the upper fifth of the frame: dark ceiling and wall under the fluorescent tube)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ថ្ងៃនេះ អង្គុយលើជណ្ដើរយូរណាស់ណា៎។"
  - text_ko: "계단에 오래 앉아 있더라."
  - place: x 34% · y 7% · w 44%
  - read_order: 1
  - note: 삼촌 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "មិនរងាទេឬ ក្មួយ?"
  - text_ko: "춥지 않았니?"
  - place: x 60% · y 15% · w 32% · tail ↓
  - read_order: 2
  - note: 삼촌 ② — 꼬리 ↓ 가운데 삼촌

### panel_007
- art_space: 상단 20% 커튼 위 어두운 천장 (EN: the upper fifth of the frame: dark ceiling above the purple curtain)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ពូឃើញហើយតើ ថាខ្ញុំជួបថៅកែ។"
  - text_ko: "…사장님 만난 거, 보셨잖아요."
  - place: x 50% · y 9% · w 44% · tail ↓
  - read_order: 1
  - note: 하린 — 가운데, 선 채

### panel_008
- art_space: 상단 25% 흐린 커튼 위쪽 어둠 (EN: the upper quarter of the frame: blurred darkness above the curtain)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "គេថា ចប់ហើយ។ ចប់តាំងពីបីឆ្នាំមុន។"
  - text_ko: "끝났대요. 3년 전에."
  - place: x 42% · y 10% · w 46% · tail ↓
  - read_order: 1
  - note: 하린 — 얼굴 가운데~왼쪽

### panel_009
- art_space: 상단 25% 머리 위 어두운 벽 (EN: the upper quarter of the frame: plain dark wall above his head)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អើ ចប់ហើយ។"
  - text_ko: "그래, 끝났지."
  - place: x 40% · y 9% · w 26% · tail ↓
  - read_order: 1
  - note: 삼촌 — 짧게

### panel_010
- art_space: 상단 25% 머리 위 어두운 벽 (EN: the upper quarter of the frame: plain dark wall above his head)
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "…ចំណែកខាងនោះ។"
  - text_ko: "…그쪽 빚은."
  - place: x 42% · y 10% · w 28% · tail ↓
  - read_order: 1
  - note: 삼촌 — 짧은 말풍선 1개 ⟨이중의미⟩ E01-G

### panel_011
- art_space: 상단 25% 두 사람 머리 위 벽(서랍장 윗부분 피함), 왼쪽 하린 위 (EN: the upper quarter of the frame, left side: plain wall above the two heads (the top of the drawer chest kept out of it))
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ចុះ… ពីរឆ្នាំរបស់ខ្ញុំ?"
  - text_ko: "그럼… 제 이 년은요."
  - place: x 24% · y 7% · w 34%
  - read_order: 1
  - note: 하린 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "ទៅណាអស់?"
  - text_ko: "어디로 갔어요."
  - place: x 36% · y 15% · w 24% · tail ↙
  - read_order: 2
  - note: 하린 ② — 꼬리 ↙ 왼쪽 하린

### panel_012
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: plain dark wall)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ពូធ្លាប់និយាយថា យកទៅដាក់ចូលបំណុលឬ?"
  - text_ko: "내가 빚에 넣는다고 했니?"
  - place: x 46% · y 10% · w 46% · tail ↓
  - read_order: 1
  - note: 삼촌 ⟨반전⟩ E04-B — 2줄

### panel_013
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: plain dark wall)
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ពូថា ជួយបន្ថែមទេតើ ក្មួយ។"
  - text_ko: "보태자고 했지."
  - place: x 44% · y 10% · w 38% · tail ↓
  - read_order: 1
  - note: 삼촌 ⟨반전⟩ E04-B / E01-T1b
- note: 다음은 회상 진입(wide).

### panel_014
- art_space: 상단 40% 세피아 하늘·담 위 어둠 (EN: the upper two-fifths of the frame: sepia-faded night sky and darkness above the wall)
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: memory
  - text_km: "ប៉ាឯងទ្រាំម្នាក់ឯងមិនរួច យើងពីរនាក់ជួយបន្ថែមស្ងាត់ៗ…"
  - text_ko: "네 아버지 혼자 못 버티는 거, 우리 둘이 조용히 보태는 거…"
  - place: x 40% · y 10% · w 52%
  - read_order: 1
  - note: 석구 기억 ① — memory, 꼬리 없음(말하는 얼굴이 프레임 밖), 2줄
- bubble_2:
  - speaker: 석구
  - type: memory
  - text_km: "រឿងនេះ ដឹងតែឯងនិងពូទេ ណា៎។"
  - text_ko: "이건 너랑 나만 아는 거다."
  - place: x 56% · y 25% · w 40%
  - read_order: 2
  - note: 석구 기억 ② — memory, 꼬리 없음. 판정 HE로 뺄 수 있었으나 40% 빈자리가 넉넉해 유지(T1 「너랑 나만」 짝)
- note: 세피아 회상 인서트. 대사가 있는 회상이라 `memory` 말풍선(파란 흐린 테두리)으로 현재와 구분 — EP02 P52·EP03 P46–47은 대사 없는 회상이라 무대사였다.

### panel_015
- art_space: 상단 25% 흐린 어둠 (EN: the upper quarter of the frame: blurred plain darkness)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…តាំងពីដំបូង ពូគ្រាន់តែថា ជួយបន្ថែម។"
  - text_ko: "…처음부터, 보탠다고만 했어."
  - place: x 50% · y 11% · w 46%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음
- note: 회상 이탈(wide).

### panel_016
- art_space: 상단 25% 두 사람 머리 위 벽, 왼쪽 하린 위(서랍장 윗부분 피함) (EN: the upper quarter of the frame, left side: plain wall above Harin's head (the top of the drawer chest kept out of it))
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ជួយបន្ថែមអី?"
  - text_ko: "…뭘 보탠 건데요."
  - place: x 22% · y 7% · w 30%
  - read_order: 1
  - note: 하린 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "លុយហ្នឹង ពូយកទៅធ្វើអី?"
  - text_ko: "그 돈, 어디다 쓰셨어요."
  - place: x 34% · y 15% · w 38% · tail ↙
  - read_order: 2
  - note: 하린 ② — 꼬리 ↙ 왼쪽 하린

### panel_017
- art_space: 상단 25% 어두운 벽 (EN: the upper quarter of the frame: plain dark wall)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "បើចង់ដឹង ទៅសួរប៉ាឯងមើលទៅ ក្មួយ។"
  - text_ko: "궁금하면 네 아버지한테 물어봐라."
  - place: x 44% · y 10% · w 44% · tail ↓
  - read_order: 1
  - note: 삼촌 FACE-3 ⟨이중의미⟩ E04-P

### panel_018
- art_space: 상단 20% 어두운 벽 (EN: the upper fifth of the frame: plain dark wall)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…ដឹងស្រាប់ហើយ ថាខ្ញុំសួរប៉ាមិនបាន។"
  - text_ko: "…못 묻는 거, 알면서."
  - place: x 48% · y 9% · w 46%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_019
- art_space: 상단 1/3 초점 밖 어두운 방 (EN: the upper third of the frame: out-of-focus dark room)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ផឹកទៅ ក្មួយ។ ក្រែងត្រជាក់អស់។"
  - text_ko: "식는다. 마셔라."
  - place: x 36% · y 9% · w 40%
  - read_order: 1
  - note: 삼촌 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "មានពេលណា ពូមិននៅខាងពួកឯង?"
  - text_ko: "삼촌이 언제 너희 편 아닌 적 있니."
  - place: x 56% · y 21% · w 40% · tail ↘
  - read_order: 2
  - note: 삼촌 ② — 꼬리 ↘ 오른쪽 삼촌 손 쪽(얼굴은 프레임 밖)

### panel_020
- art_space: 상단 20% 좌탁 너머 어두운 방석·바닥 면 (EN: the upper fifth of the frame: dark cushion and floor surface beyond the low table)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…របស់ខែនេះ។"
  - text_ko: "…이번 달 거예요."
  - place: x 40% · y 9% · w 26% · tail ↓
  - read_order: 1
  - note: 하린 — 꼬리 ↓ 봉투를 내려놓는 손

### panel_021
- art_space: 상단 왼쪽 1/3 흐린 벽 (EN: the upper-left third of the frame: blurred plain wall)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "…លើកនេះ ធ្ងន់បន្តិចហ្ន៎។"
  - text_ko: "…이번엔 묵직하네."
  - place: x 26% · y 12% · w 36% · tail ↘
  - read_order: 1
  - note: 삼촌 — 꼬리 ↘ 가운데 웃는 눈

### panel_022
- art_space: 상단 오른쪽 1/3 서랍장 위 빈 벽(말풍선) + 왼쪽 위 커튼 쪽 어둠(효과음) (EN: the upper-right third of the frame: empty wall above the drawer chest, and the dark curtain side at the upper left)
- gap_after: 50
- sfx_1:
  - text_km: "ក្រីង ក្រីង!"
  - text_ko: "딸랑"
  - place: x 20% · y 9% · size 7% · rot -8
  - note: 앞가게 종소리 — 왼쪽 위 커튼 쪽 어둠(FL8)
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អង្គុយចាំសិន។"
  - text_ko: "앉아 있어라."
  - place: x 66% · y 12% · w 30% · tail ↙
  - read_order: 1
  - note: 삼촌 — 꼬리 ↙ 가운데 반쯤 일어선 삼촌

### panel_023
- art_space: 상단 20% 형광등 아래 어두운 천장 (EN: the upper fifth of the frame: dark ceiling under the fluorescent tube)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…លើកនេះ ខ្ញុំបើកខ្លួនឯង។"
  - text_ko: "…이번엔 내가 연다."
  - place: x 44% · y 9% · w 40%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_024
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_025
- art_space: 상단 20% 어두운 천장 (EN: the upper fifth of the frame: dark shop ceiling)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "បងស្រី មើលមួយនេះមើល។ សព្វថ្ងៃ គេចូលចិត្តជាងគេ។"
  - text_ko: "언니, 이거 한번 보세요. 요즘 제일 많이들 찾아요."
  - place: x 44% · y 9% · w 52% · tail ↓
  - read_order: 1
  - note: 삼촌 — 중경 작업대 앞, 2줄. 손님 호칭 បងស្រី

### panel_026
- art_space: 상단 20% 어두운 천장, 가운데 (EN: the upper fifth of the frame, centre: dark shop ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "…ហារីន?"
  - text_ko: "…하린아?"
  - place: x 48% · y 9% · w 22% · tail ↓
  - read_order: 1
  - note: 삼촌 — 중앙 안쪽

### panel_027
- art_space: 상단 20% 하린 머리 위 어두운 유리 밖 골목 (EN: the upper fifth of the frame: the dark alley seen through the glass above Harin's head)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ពូ។ លុយនេះ ខ្ញុំយកមកលោះកងដៃរបស់អ៊ូជីន។"
  - text_ko: "삼촌. 이걸로 우진이 팔찌 찾아갈게요."
  - place: x 40% · y 9% · w 50% · tail ↓
  - read_order: 1
  - note: 하린 ⟨사이다⟩ E04-R — 중앙~왼쪽, 2줄

### panel_028
- art_space: 상단 20% 어두운 천장 (EN: the upper fifth of the frame: dark shop ceiling)
- gap_after: 160
- bubble_1:
  - speaker: 손님
  - type: dialogue
  - text_km: "អូ៎ មកលោះរបស់ដែលបញ្ចាំទុកទេដឹង។"
  - text_ko: "어머, 맡긴 거 찾으러 왔나 보네."
  - place: x 26% · y 7% · w 42% · tail ↓
  - read_order: 1
  - note: 손님 — 왼쪽, 꼬리 ↓ 뒷머리
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "…បាទ បាទ ត្រូវហើយ។ ចាំពូបន្តិចណា៎ ហារីន។"
  - text_ko: "…그럼요, 그럼. 기다려라, 하린아."
  - place: x 54% · y 15% · w 46% · tail ↓
  - read_order: 2
  - note: 삼촌 — 가운데, 2줄

### panel_029
- silent: true
- art_space: 없음(silent)
- gap_after: 160
- note: 회차 유일 차가운 얼굴 — 무대사.

### panel_030
- art_space: 상단 1/3 흐린 진열장 너머 작업대·어두운 벽 (EN: the upper third of the frame: blurred workbench and dark wall beyond the display case)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "កងដៃជីដូនឯងណា៎។"
  - text_ko: "할머니 팔찌다."
  - place: x 30% · y 9% · w 32%
  - read_order: 1
  - note: 삼촌 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "ប្រាប់ប្អូនឯងផង លើកនេះទុកឲ្យល្អៗ ក្មួយ។"
  - text_ko: "이번엔 잘 간수하라고 해라."
  - place: x 58% · y 20% · w 40% · tail ↗
  - read_order: 2
  - note: 삼촌 ② — 꼬리 ↗ 위(얼굴은 프레임 위 밖, FL12). ①을 피해 오른쪽 위로

### panel_031
- art_space: 상단 20% 문 위 가게 앞 어두운 처마·벽 (EN: the upper fifth of the frame: dark eaves and wall above the shop door)
- gap_after: 160
- bubble_1:
  - speaker: 손님
  - type: dialogue
  - text_km: "សម័យនេះ រកអ្នកចិត្តល្អបែបនេះ មិនបានទេ។"
  - text_ko: "요즘 이런 분이 어디 있어요."
  - place: x 34% · y 9% · w 46% · tail ↓
  - read_order: 1
  - note: 손님 — 꼬리 ↓ 가게 안 진열장 앞 손님(등, 작게)
- sfx_1:
  - text_km: "ក្រីង ក្រីង!"
  - text_ko: "딸랑"
  - place: x 74% · y 12% · size 6% · rot -8
  - note: 문 위 안쪽 종 옆(FL8)

### panel_032
- art_space: 상단 1/3 초점 밖 시멘트 계단과 어둠 (EN: the upper third of the frame: out-of-focus concrete steps and darkness)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…បានមកវិញហើយ។"
  - text_ko: "…찾았다."
  - place: x 50% · y 12% · w 32%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_033
- art_space: 상단 20% 위쪽 계단·담 위 남색 밤 (EN: the upper fifth of the frame: plain navy night sky above the upper steps and the wall)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…ពូថាម៉េច?"
  - text_ko: "…삼촌이 뭐래."
  - place: x 24% · y 7% · w 28% · tail ↓
  - read_order: 1
  - note: 우진 — 왼쪽 위
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "គាត់មិនប្រកែកទេ។"
  - text_ko: "아니라고는 안 하더라."
  - place: x 66% · y 14% · w 32% · tail ↓
  - read_order: 2
  - note: 하린 — 오른쪽 아래

### panel_034
- art_space: 상단 25% 남색 하늘 (EN: the upper quarter of the frame: plain navy night sky)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "លាដៃមក។"
  - text_ko: "손."
  - place: x 70% · y 8% · w 24% · tail ↓
  - read_order: 1
  - note: 하린 — 오른쪽
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "…អីហ្នឹង?"
  - text_ko: "…뭔데."
  - place: x 28% · y 16% · w 24% · tail ↓
  - read_order: 2
  - note: 우진 — 왼쪽

### panel_035
- silent: true
- art_space: 없음(silent)
- gap_after: 160
- note: 진품·복제품 나란히 비교 컷 — 무대사.

### panel_036
- art_space: 상단 25% 두 사람 머리 위 남색 밤 (EN: the upper quarter of the frame: plain navy night sky above both heads)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ខ្សែមាសនេះ ដើមឡើយ នរណាជួសជុលឲ្យ?"
  - text_ko: "이 테, 원래 누가 고친 거야?"
  - place: x 56% · y 7% · w 42% · tail ↘
  - read_order: 1
  - note: 하린 — 오른쪽 위
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "ជីដូនយកទៅជួសជុល… នៅហាងពូ។ តាំងពីយូរណាស់មកហើយ។"
  - text_ko: "할머니가… 삼촌 가게에서. 아주 옛날에."
  - place: x 36% · y 18% · w 50% · tail ↙
  - read_order: 2
  - note: 우진 — 왼쪽, 2줄 ⟨이중의미⟩ E04-W (W6)

### panel_037
- art_space: 상단 1/4 어두운 패딩 면 (EN: the upper quarter of the frame: dark padded-jacket fabric and shadow)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…អាក្លែងហ្នឹង ខ្ញុំបោះចូលថតចោល។"
  - text_ko: "…가짜는 서랍에 처박아 둘 거야."
  - place: x 46% · y 10% · w 44% · tail ↑
  - read_order: 1
  - note: 우진 — 손 컷, 꼬리 ↑ 화면 밖(FL12)

### panel_038
- art_space: 상단 25% 남색 밤하늘·담 위 (EN: the upper quarter of the frame: plain navy night sky above the wall)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…ញ៉ាំបាយឲ្យទៀងទៅ។ ឃើញហើយមួម៉ៅ។"
  - text_ko: "…밥 좀 먹고 다녀, 짜증 나게."
  - place: x 46% · y 10% · w 44% · tail ↓
  - read_order: 1
  - note: 우진 ⟨온기⟩ E04-U

### panel_039
- art_space: 상단 20% 남색 밤하늘·전선 (EN: the upper fifth of the frame: plain navy night sky and power lines)
- gap_after: 320
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ឯងវិញហ្នឹង។"
  - text_ko: "너나."
  - place: x 56% · y 9% · w 26% · tail ↓
  - read_order: 1
  - note: 하린 — 아래쪽 작게(FL12). 왼쪽 위 우진 후드는 피함

### panel_040
- silent: true
- art_space: 없음(silent)
- gap_after: 320
- note: 20일 16:20 원경 — 무대사.

### panel_041
- art_space: 상단 20% 펜던트 위 어두운 천장, 오른쪽 미자 위 (EN: the upper fifth of the frame, right side: dark ceiling above the pendant lamp, over Mi-ja)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ ថ្ងៃនេះថ្ងៃអីហ្នឹង មកជុំគ្នាគ្រប់គ្នា~ ញ៉ាំបាយសិនទៅ!"
  - text_ko: "오늘은 웬일로 다 모였네~ 밥부터 먹어!"
  - place: x 48% · y 9% · w 50% · tail ↘
  - read_order: 1
  - note: 미자 — 안쪽 오른쪽, 2줄

### panel_042
- art_space: 상단 25% 펜던트 빛 아래 따뜻한 벽 (EN: the upper quarter of the frame: plain warm wall lit by the pendant lamp)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ប៉ា… កូន—"
  - text_ko: "아빠, 저—"
  - place: x 60% · y 10% · w 24% · tail ↓
  - read_order: 1
  - note: 하린 — 중앙~오른쪽, 끊긴 말(—)

### panel_043
- art_space: 상단 30% 펜던트 위 어두운 천장과 오른쪽 부엌 문턱 위 벽 (EN: the upper three-tenths of the frame: dark ceiling above the pendant lamp and the wall above the kitchen doorway on the right)
- gap_after: 16
- sfx_1:
  - text_km: "គ្រូត…"
  - text_ko: "드르륵"
  - place: x 84% · y 10% · size 7% · rot 6
  - note: 미닫이 소리 — 오른쪽 부엌 문턱 위(FL8)
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អ៊ីនហូ~ ញ៉ាំបាយហើយឬនៅ?"
  - text_ko: "인호야~ 밥 먹냐?"
  - place: x 40% · y 8% · w 38% · tail ↘
  - read_order: 1
  - note: 석구 화면 밖 — 꼬리 ↘ 오른쪽 부엌 문턱(FL12)
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ! បងសុកគូ!"
  - text_ko: "어머, 석구 씨!"
  - place: x 66% · y 21% · w 28% · tail ↓
  - read_order: 2
  - note: 미자 — 오른쪽, 반쯤 일어섬
- note: 말풍선 2 + 효과음 1 (대본 계획 3개).

### panel_044
- art_space: 상단 20% 전구 위 어두운 벽·천장(전구 피함) (EN: the upper fifth of the frame: dark wall and ceiling above the bare bulb (the bulb itself kept out of it))
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ក្រូចខ្វិចផ្អែមល្អ ពូយកមកឲ្យក្មេងៗញ៉ាំ។"
  - text_ko: "귤이 달길래. 애들 먹으라고."
  - place: x 46% · y 9% · w 46% · tail ↓
  - read_order: 1
  - note: 삼촌 — 중경 시멘트 바닥, 2줄

### panel_045
- art_space: 상단 1/3 초점 밖 어둠 (EN: the upper third of the frame: out-of-focus darkness above the table)
- gap_after: 50
- sfx_1:
  - text_km: "ទក់!"
  - text_ko: "탁"
  - place: x 62% · y 24% · size 8% · rot 0
  - note: 숟가락 위 어둠(FL8)
- bubble_1:
  - speaker: 인호
  - type: dialogue
  - text_km: "…មកហើយ?"
  - text_ko: "…왔냐."
  - place: x 30% · y 9% · w 24% · tail ↑
  - read_order: 1
  - note: 인호 — 손 컷, 꼬리 ↑ 화면 밖 아버지(FL12)

### panel_046
- art_space: 상단 20% 펜던트 위 어두운 천장 (EN: the upper fifth of the frame: dark ceiling above the pendant lamp)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ញ៉ាំបាយសិនទៅ បងសុកគូ~ ខ្ញុំដួសឲ្យភ្លាមណា៎!"
  - text_ko: "드시고 가세요~ 밥 금방 퍼요!"
  - place: x 36% · y 7% · w 46% · tail ↓
  - read_order: 1
  - note: 미자 — 안쪽 가운데
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "ទេ ទេ។ ពូគ្រាន់តែបកក្រូចឲ្យក្មេងៗ រួចទៅវិញ។"
  - text_ko: "아니, 아니. 귤만 까 주고 갈게."
  - place: x 56% · y 16% · w 44% · tail ↘
  - read_order: 2
  - note: 삼촌 — 오른쪽 새롬 옆 모서리, 2줄

### panel_047
- art_space: 상단 25% 펜던트 위 어두운 천장 (EN: the upper quarter of the frame: dark ceiling above the pendant lamp)
- gap_after: 50
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "ហារីន យប់នេះចូលវេនមែនទេ? ម្សិលមិញ ហត់ដល់យប់ជ្រៅណា៎។"
  - text_ko: "하린이는 오늘 출근이지? 어제도 늦게까지 고생하더니."
  - place: x 50% · y 8% · w 50% · tail ↘
  - read_order: 1
  - note: 삼촌 — 전경 오른쪽, 2줄 ⟨이중의미⟩ E04-Y
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចាស។"
  - text_ko: "…네."
  - place: x 22% · y 18% · w 18% · tail ↓
  - read_order: 2
  - note: 하린 — 중경 왼쪽, 작게

### panel_048
- art_space: 상단 1/3 펜던트 빛 아래 따뜻한 벽 (EN: the upper third of the frame: plain warm wall lit by the pendant lamp)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "នោះរបស់អូន!"
  - text_ko: "그거 내 거!"
  - place: x 70% · y 8% · w 28% · tail ↘
  - read_order: 1
  - note: 새롬 — 오른쪽
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "មានសរសេរឈ្មោះឯងឬ?"
  - text_ko: "이름 써 놨냐?"
  - place: x 28% · y 18% · w 34% · tail ↙
  - read_order: 2
  - note: 우진 — 왼쪽

### panel_049
- art_space: 상단 25% 어두운 천장 (EN: the upper quarter of the frame: dark ceiling)
- gap_after: 160
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ពូ! មួយហ្នឹងធំជាងគេណា៎!"
  - text_ko: "삼촌! 그거 제일 큰 거잖아요!"
  - place: x 40% · y 7% · w 34% · tail ↓
  - read_order: 1
  - note: 새롬 — 꼬리 ↓ 전경 아래 가운데 새롬 손
- bubble_2:
  - speaker: 석구
  - type: dialogue
  - text_km: "មួយធំជាងគេ ត្រូវជារបស់អ្នកតូចជាងគេ។"
  - text_ko: "제일 큰 건, 제일 작은 사람 거지."
  - place: x 56% · y 17% · w 44% · tail ↘
  - read_order: 2
  - note: 삼촌 — 전경 오른쪽 ⟨이중의미⟩ E04-S
- note: 반전 직전 정지(wide).

### panel_050
- art_space: 상단 20% 펜던트 위 어두운 천장 (EN: the upper fifth of the frame: dark ceiling above the pendant lamp)
- gap_after: 160
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "នែ ញ៉ាំឲ្យច្រើនទៅ អាតូច។"
  - text_ko: "자. 많이 먹어라, 꼬맹이."
  - place: x 38% · y 9% · w 34% · tail ↓
  - read_order: 1
  - note: 삼촌 — 화면 왼쪽~가운데. 낮고 다정한 목소리 → 작은 말풍선 1개(FL8). អាតូច 회차 유일 1회
- note: ⟨단서 호칭⟩ ⟨반전⟩ E04-T4 — 단독 말풍선.

### panel_051
- silent: true
- art_space: 없음(silent)
- gap_after: 160
- note: 045와 거울 쌍 — 무대사.

### panel_052
- art_space: 상단 1/3 흐린 따뜻한 벽, 왼쪽 하린 쪽 (EN: the upper third of the frame, left side: blurred plain warm wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…ក្នុងផ្ទះយើង គ្មាននរណាហៅសែរ៉ូមបែបនោះទេ។"
  - text_ko: "…우리 집에서 새롬이를 저렇게 부르는 사람은, 없어."
  - place: x 30% · y 12% · w 48%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음, 2줄

### panel_053
- art_space: 상단 20% 펜던트 위 어두운 천장 (EN: the upper fifth of the frame: dark ceiling above the pendant lamp)
- gap_after: 320
- bubble_1:
  - speaker: 석구
  - type: dialogue
  - text_km: "អ៊ីនហូ។ ក្មេងៗធំអស់ហើយណា៎។"
  - text_ko: "인호야. 애들 다 컸다."
  - place: x 52% · y 9% · w 38% · tail ↓
  - read_order: 1
  - note: 삼촌 — 식탁 건너 가운데, 선 채 ⟨이중의미⟩
- note: 다음은 21:20 현관(xwide).

### panel_054
- art_space: 상단 20% 복도 위 어두운 천장, 새롬 위 (EN: the upper fifth of the frame: dark hallway ceiling above Sae-rom)
- gap_after: 50
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "បងស្រី។"
  - text_ko: "언니."
  - place: x 56% · y 9% · w 20% · tail ↓
  - read_order: 1
  - note: 새롬 — 중경 복도 마루

### panel_055
- art_space: 상단 1/3 초점 밖 어두운 복도 벽 (EN: the upper third of the frame: out-of-focus dark hallway wall)
- gap_after: 160
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ថ្ងៃនេះ អូនយកទៅឲ្យហើយ។"
  - text_ko: "나 오늘 냈어."
  - place: x 34% · y 9% · w 38%
  - read_order: 1
  - note: 새롬 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ម៉ោងបួន ម្ភៃនាទី។"
  - text_ko: "네 시 이십 분에."
  - place: x 62% · y 21% · w 30% · tail ↗
  - read_order: 2
  - note: 새롬 ② — 손 컷, 꼬리 ↗ 위(화면 밖 새롬). ①을 피해 오른쪽

### panel_056
- art_space: 상단 20% 어두운 천장 (EN: the upper fifth of the frame: dark ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "……អី?"
  - text_ko: "……뭐?"
  - place: x 24% · y 8% · w 18% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ប្រាំបីខែហើយ។"
  - text_ko: "여덟 달 됐어."
  - place: x 62% · y 15% · w 28% · tail ↓
  - read_order: 2
  - note: 새롬 — 오른쪽, 장난 어미 없음

### panel_057
- art_space: 상단 30% 어두운 복도 천장·벽 (EN: the upper three-tenths of the frame: dark hallway ceiling and wall)
- gap_after: 160
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "អូនដឹងមុនគេ។"
  - text_ko: "내가 제일 먼저 알았어."
  - place: x 30% · y 7% · w 28%
  - read_order: 1
  - note: 새롬 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ព្រឹកព្រលឹមថ្ងៃទៅបោះជំរុំ… អូនឃើញបងស្រីចូលហាងពូតាមទ្វារក្រោយ។"
  - text_ko: "수련회 가던 날 새벽에… 언니가 삼촌 가게 뒷문으로 들어가는 거 봤어."
  - place: x 40% · y 19% · w 58% · tail ↓
  - read_order: 2
  - note: 새롬 ② — 회차에서 가장 긴 줄, 넓게(2–3줄). ⟨반전⟩ E04-F
- note: ⟨반전⟩ 새롬 고백 — 말풍선은 새롬 것만.

### panel_058
- art_space: 상단 20% 전구 옆 어두운 벽(전구 피함) (EN: the upper fifth of the frame: dark wall beside the bare bulb (the bulb itself kept out of it))
- gap_after: 50
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "អូនទៅសួរពូ។ ពូថា—"
  - text_ko: "삼촌한테 물어봤어. 그랬더니—"
  - place: x 30% · y 7% · w 34%
  - read_order: 1
  - note: 새롬 ① — 꼬리는 ②에만
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "បើអូនជួយបន្ថែមបន្តិច បងស្រីបានថ្ងៃសម្រាកមួយថ្ងៃ។"
  - text_ko: "내가 조금만 보태면, 언니가 하루 쉰대."
  - place: x 46% · y 16% · w 50% · tail ↙
  - read_order: 2
  - note: 새롬 ② — 꼬리 ↙ 왼쪽 전경 새롬, 2줄 ⟨단서어⟩ E04-T1c

### panel_059
- art_space: 상단 20% 신발장 위 어두운 벽 (EN: the upper fifth of the frame: dark wall above the shoe cabinet)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…សុំទោស អូន។"
  - text_ko: "…미안해."
  - place: x 24% · y 8% · w 26% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "មិនមែនកំហុសបងស្រីទេ។"
  - text_ko: "언니 탓 아니야."
  - place: x 64% · y 15% · w 34% · tail ↓
  - read_order: 2
  - note: 새롬 — 오른쪽

### panel_060
- art_space: 상단 20% 어두운 벽·천장, 오른쪽(신발장 반대편) (EN: the upper fifth of the frame, right side: dark wall and ceiling, away from the shoe cabinet)
- gap_after: 160
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "បងស្រី។ មានរបស់ប៉ាផង។"
  - text_ko: "언니. 아빠 것도 있어."
  - place: x 62% · y 9% · w 34% · tail ↙
  - read_order: 1
  - note: 새롬 — 꼬리 ↙ 가운데 새롬 ⟨반전⟩ E04-D
- note: 클리프행어 1/2.

### panel_061
- silent: true
- art_space: 없음(silent)
- gap_after: 0
- note: 회차 끝 — 무대사. 말풍선·효과음·캡션·엔딩 카드 없음.
