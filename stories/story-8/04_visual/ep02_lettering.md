# EP02 레터링 명세 — 「엄마는 웃고 있었다」 / «ម៉ែនៅតែញញឹម» (letterer · Khmer edition)

- 작성: letterer · 2026-11-25 · Phase 4 (Khmer edition + Flow-by-hand mode)
- 입력: `03_episode/ep02_script_final.md`(Khmer review READY), `04_visual/ep02_shotlist.md`(art_space·gutter·FL6·FL7), `04_visual/style-bible.md` §7, `00_input/brief.md`(판정 EA–EF), 형식 기준 `04_visual/ep01_lettering.md`
- **이미지에는 글자가 전혀 없다.** 말풍선·크메르어·효과음은 뷰어(`km_tool.py build`)가 그린다.
  `art_space`는 이미지가 비워 둘 자리다 — prompt-smith는 괄호 안 영어(EN)를
  `Keep <EN> as calm, empty background with no important details (a speech bubble will be added there later).`로 넣는다.
- `text_km`는 대본 KM 줄 그대로(글자 단위, 검수본에서 기계적으로 옮김). `text_ko`는 참고용, 화면에 나오지 않음.
- `place`: x/y = 말풍선 중심, w = 최대 폭(패널 폭 %). 모든 말풍선 `x + w ≤ 100` 및 `x − w/2 ≥ 2`(프레임 안).
  9:16 패널 기준 1줄 말풍선 ≈ 패널 높이 6%, 2줄 ≈ 9–10%. 폭은 말풍선당 2줄 이내가 되게 잡았다.
- `gap_after`(px): tight 16 · normal 50 · wide 160 · xwide 320 (샷리스트 gutter_after, FL7). 회차 끝 062 = 0.
- 같은 화자의 연속 말풍선 2개는 첫 번째에 꼬리를 달지 않고 두 번째에만 단다(꼬리가 아래 말풍선을 찌르지 않게).
- **문 너머 대사(판정 EB-Q5, FL6) — 선택한 스타일:** km_tool이 지원하는 종류(dialogue · thought · shout · narration · memory) 안에서
  **`type: dialogue` + 꼬리를 간유리(문) 쪽으로**. 말풍선은 언제나 간유리 바깥 면(문틀 위 벽 / 문틀 아랫막이·바닥)에 두고 미자 실루엣 위에는 절대 두지 않는다.
  꼬리 끝은 유리 테두리에서 멈춘다(실루엣을 찌르지 않음). 다른 종류를 쓰지 않은 이유: thought(점선)는 하린의 속말(054·056)과 섞이고,
  memory(푸른 번짐)는 회상 표시라 052 회상과 혼동되며, narration(캡션 상자)은 화자를 잃는다. 해당 말풍선 note에 `문 너머`를 달았다.
- 패널 62 · 말풍선 69 (생각 3 · 외침 1 · 문 너머 10) · sfx 4 · env 0 · 무대사 15.
- 말풍선 3개 패널: 022 · 024 (대본 1:1, 샷리스트 계획대로). 나머지는 1–2개.
- 배치 패스 확인 요청(이미지 도착 후): 004(문틈 위치) · 005(닫히는 옆문 쪽) · 026(뒤에서 본 컷의 좌우) · 048·050·053(간유리가 화면 어느 쪽에 그려졌는지 — 꼬리 방향만 바꾸면 됨).

---

### panel_001
- art_space: 상단 1/4 왼쪽, 하린 머리 위 어두운 벽 — 전구 피함 (EN: the upper quarter of the frame on the left: flat dark wall above Harin's head, the bare bulb kept away from it)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…តាំងពីពេលណាមក?"
  - text_ko: "…언제부터야?"
  - place: x 26% · y 10% · w 32% · tail ↓
  - read_order: 1
  - note: 하린 — 왼쪽 턱
- note: EP01 P59 직결. 첫 대사.

### panel_002
- art_space: 상단 1/5 어두운 문틀 위 벽(오른쪽 위 중심) (EN: the upper fifth of the frame, centred right: flat dark wall above the door frame)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "អត់ដឹង។"
  - text_ko: "몰라."
  - place: x 66% · y 9% · w 24% · tail ↙
  - read_order: 1
  - note: 우진 — 중앙, 시선 회피

### panel_003
- art_space: 왼쪽 위 1/4 어두운 천장·벽 (EN: the upper-left quarter of the frame: plain dark ceiling and wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "អ៊ូជីន…"
  - text_ko: "우진아."
  - place: x 26% · y 11% · w 24% · tail ↙
  - read_order: 1
  - note: 하린 — 왼쪽 아래 전경(뒷머리)

### panel_004
- art_space: 상단 1/3 복도 천장의 평평한 어둠 (EN: the upper third of the frame: flat darkness of the hallway ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អ៊ូជីន មកហើយឬកូន? ញ៉ាំបាយហើយឬនៅ?"
  - text_ko: "우진이 왔어? 밥은 먹었고?"
  - place: x 50% · y 12% · w 44% · tail ↓
  - read_order: 1
  - note: 미자 화면 밖(안방) — 꼬리는 복도 끝 문틈 빛(중앙 원경)
- note: 화면 밖 화자: 샷리스트 메모는 ↑/↗였으나 문틈이 말풍선 아래(원경 중앙)라 ↓로 문틈을 가리킨다.

### panel_005
- art_space: 상단 1/3 복도 천장 어둠 — 왼쪽 위 말풍선, 효과음은 닫히는 옆문 바로 위 (EN: the upper third of the frame: flat darkness of the hallway ceiling (left side for a bubble, right side above the closing side door))
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ញ៉ាំហើយ ម៉ែ។"
  - text_ko: "먹었어."
  - place: x 30% · y 10% · w 24% · tail ↓
  - read_order: 1
  - note: 우진 — 중경, 복도로 걸어감
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "탁"
  - place: x 72% · y 22% · size 8% · rot 6
- note: 효과음 ផាំង! 은 닫히는 옆문 위(오른쪽). 문 위치가 반대면 배치 패스에서 x만 옮긴다.

### panel_006
- silent: true
- art_space: 없음(silent)
- gap_after: 320

### panel_007
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_008
- art_space: 상단 30% 평평한 새벽하늘 — 전선은 왼쪽 가장자리로 (EN: the upper 30% of the frame: plain blue dawn sky (wires kept to the left edge))
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ថ្ងៃសម្រាក បងនៅតែភ្ញាក់ម៉ោងនេះ?"
  - text_ko: "쉬는 날인데도 이 시간에 깨?"
  - place: x 40% · y 9% · w 44% · tail ↓
  - read_order: 1
  - note: 우진 — 위쪽 계단, 중경
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ទម្លាប់ហើយ។"
  - text_ko: "…버릇이야."
  - place: x 68% · y 22% · w 28% · tail ↘
  - read_order: 2
  - note: 하린 — 오른쪽 아래 전경

### panel_009
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_010
- art_space: 상단 30% 위쪽 담과 새벽하늘 (EN: the upper 30% of the frame: plain wall top and dawn sky)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…ចុះបង តាំងពីពេលណា?"
  - text_ko: "…누나는 언제부터?"
  - place: x 24% · y 9% · w 37% · tail ↓
  - read_order: 1
  - note: 우진 — 왼쪽 한 칸 위
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "ពីរឆ្នាំ។"
  - text_ko: "이 년."
  - place: x 70% · y 20% · w 22% · tail ↓
  - read_order: 2
  - note: 하린 — 오른쪽

### panel_011
- art_space: 상단 25% 흐린 새벽하늘·담(왼쪽 위 중심) (EN: the upper quarter of the frame, centred left: blurred dawn sky and wall)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…ខ្ញុំ មួយឆ្នាំជាង។"
  - text_ko: "…난 일 년 좀 넘었어."
  - place: x 28% · y 10% · w 34% · tail ↘
  - read_order: 1
  - note: 우진 — 중앙, 오른쪽으로 고개

### panel_012
- art_space: 상단 25% 흐린 하늘·담 (EN: the upper quarter of the frame: blurred dawn sky and wall)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "តែរបស់ខ្ញុំក្រាស់ជាង។"
  - text_ko: "그래도 내 게 더 두꺼웠어."
  - place: x 50% · y 10% · w 37% · tail ↓
  - read_order: 1
  - note: 우진 — 중앙

### panel_013
- art_space: 상단 25% 흐린 하늘·담 (EN: the upper quarter of the frame: blurred dawn sky and wall)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…រឿងហ្នឹងយកមកអួត?"
  - text_ko: "…그게 자랑이야?"
  - place: x 50% · y 10% · w 39% · tail ↓
  - read_order: 1
  - note: 하린 — 중앙

### panel_014
- art_space: 상단 30% 밝아진 새벽하늘 (EN: the upper 30% of the frame: plain brightening dawn sky)
- gap_after: 160
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ពិតមែនតើ!"
  - text_ko: "진짜라니까."
  - place: x 26% · y 9% · w 24% · tail ↓
  - read_order: 1
  - note: 우진 — 왼쪽
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ល្ងង់។"
  - text_ko: "…바보."
  - place: x 70% · y 19% · w 22% · tail ↓
  - read_order: 2
  - note: 하린 — 오른쪽
- note: 웃음 비트. 다음은 wide 여백.

### panel_015
- art_space: 상단 25% 흐린 하늘·담(오른쪽 위) (EN: the upper quarter of the frame, centred right: blurred dawn sky and wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "កងដៃហ្នឹង… បងឃើញនៅក្នុងថតរបស់ពូ។"
  - text_ko: "그 팔찌… 삼촌 서랍에 있더라."
  - place: x 54% · y 11% · w 44% · tail ↘
  - read_order: 1
  - note: 하린 — 오른쪽

### panel_016
- art_space: 상단 30% 흐린 하늘·담 — 오른쪽 위(하린) 먼저, 왼쪽 그 아래(우진) (EN: the upper 30% of the frame: blurred dawn sky and wall across the full width)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ឯងលក់ហើយ?"
  - text_ko: "…팔았어?"
  - place: x 68% · y 9% · w 28% · tail ↓
  - read_order: 1
  - note: 하린 — 오른쪽 중경
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "មិនបានលក់ទេ។ បញ្ចាំ។"
  - text_ko: "안 팔았어. 맡긴 거야."
  - place: x 28% · y 21% · w 39% · tail ↙
  - read_order: 2
  - note: 우진 — 왼쪽 전경, 외면
- note: ⟨이중의미⟩ លក់ / បញ្ចាំ 구분 — 글자 그대로.

### panel_017
- art_space: 상단 25% 초점 밖 시멘트 면 + 하단 15% 초점 밖 계단 면 (EN: the upper quarter of the frame and the bottom 15% of the frame: out-of-focus plain cement steps)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ចុះអានេះ…"
  - text_ko: "그럼 이건…"
  - place: x 74% · y 10% · w 22% · tail ↘
  - read_order: 1
  - note: 하린 화면 밖(오른쪽) — 꼬리는 오른쪽 가장자리
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "អាក្លែងទេ។ ថ្ងៃយកទៅបញ្ចាំហ្នឹង ពូហុចឲ្យភ្លាម។"
  - text_ko: "가짜. 맡기러 간 그날, 삼촌이 바로 내주더라."
  - place: x 46% · y 91% · w 46% · tail ↑
  - read_order: 2
  - note: 우진 — 손목(중앙) 쪽으로 꼬리, 하단 15% 띠
- note: 팔찌 컷: 위·아래 띠만 사용, 팔찌(중앙 45–65%)는 비운다.

### panel_018
- art_space: 상단 30% 초점 밖 담·푸른 면 (EN: the upper 30% of the frame: out-of-focus wall and plain blue tone)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ភ្លាម?"
  - text_ko: "…바로?"
  - place: x 24% · y 9% · w 22% · tail ↘
  - read_order: 1
  - note: 하린 — 중앙 얼굴
- bubble_2:
  - speaker: 하린
  - type: thought
  - text_km: "ថ្ងៃនោះតែម្ដង… ដូចបេះបិទ ត្រៀមទុកជាមុន?"
  - text_ko: "그날 바로… 똑같은 걸, 미리?"
  - place: x 52% · y 21% · w 46%
  - read_order: 2
  - note: 하린 생각 — 꼬리 없음
- note: ⟨작은 반전⟩. 말 → 생각 순서.

### panel_019
- art_space: 왼쪽 위 1/4 옆 담의 평평한 시멘트 면 (EN: the upper-left quarter of the frame: flat cement surface of the side wall)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ដូចណាស់មែនទេ? បងមើលមិនដឹងផង។"
  - text_ko: "감쪽같지? 누나도 몰랐잖아."
  - place: x 26% · y 11% · w 44% · tail ↘
  - read_order: 1
  - note: 우진 — 화면 오른쪽(뒤에서 본 컷, 좌우 뒤집힘)

### panel_020
- art_space: 상단 30% 흐린 하늘·담 — 오른쪽 위(하린) → 왼쪽 그 아래(우진) (EN: the upper 30% of the frame: blurred dawn sky and wall across the full width)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ធ្វើបែបហ្នឹងហេតុអី?"
  - text_ko: "…왜 그랬어."
  - place: x 60% · y 8% · w 37% · tail ↘
  - read_order: 1
  - note: 하린 — 오른쪽 가장자리 어깨
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "ពូថា បើបងដឹង បងនឹងធ្វើការរោងចក្រច្រើនម៉ោងជាងនេះ។"
  - text_ko: "삼촌이 그러더라. 누나가 알면 공장 일 더 늘린다고."
  - place: x 30% · y 20% · w 49% · tail ↓
  - read_order: 2
  - note: 우진 — 왼쪽 중심

### panel_021
- art_space: 상단 25% 흐린 하늘·담 (EN: the upper quarter of the frame: blurred dawn sky and wall)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចំណែកបង ពូថា បើប៉ាដឹង ប៉ានឹងបាក់ចិត្ត។"
  - text_ko: "…나한테는, 아빠가 알면 무너진대."
  - place: x 50% · y 11% · w 44% · tail ↓
  - read_order: 1
  - note: 하린 — 중앙

### panel_022
- art_space: 상단 35% 평평한 새벽하늘·담 — 전선·가로등 없음 (EN: the upper 35% of the frame: plain dawn sky and wall top, no wires or lamp post)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "តែពូ ដឹងទាំងថ្ងៃសម្រាករបស់បងទៀត។"
  - text_ko: "근데 삼촌, 누나 쉬는 날까지 알더라."
  - place: x 26% · y 8% · w 44%
  - read_order: 1
  - note: 우진 ① — 왼쪽 위, 같은 화자 연속(꼬리는 ②에)
- bubble_2:
  - speaker: 우진
  - type: dialogue
  - text_km: "ម្សិលមិញ ពូសួរខ្ញុំថា បងឯងថ្ងៃសម្រាកមែនទេ។"
  - text_ko: "어제 나한테, 누나 쉬는 날 맞냐고 묻던데."
  - place: x 28% · y 19% · w 45% · tail ↓
  - read_order: 2
  - note: 우진 ② — 왼쪽
- bubble_3:
  - speaker: 하린
  - type: dialogue
  - text_km: "…បងមិនដែលប្រាប់ពូផង។"
  - text_ko: "…나, 삼촌한테 말한 적 없어."
  - place: x 58% · y 30% · w 41% · tail ↘
  - read_order: 3
  - note: 하린 ③ — 오른쪽, 얼굴은 40–55% 높이
- note: ★ 말풍선 3개(대본 1:1). 우진 ①② 왼쪽 위→아래, 하린 ③ 오른쪽 맨 아래. 하린 손(65–85%)은 비운다.

### panel_023
- art_space: 상단 30% 흐린 하늘·담 (EN: the upper 30% of the frame: blurred dawn sky and wall)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ម្សិលមិញពេលថ្ងៃលិច បងនៅលើជណ្ដើរមែនទេ? ខ្ញុំឃើញពេលចូលហាង។"
  - text_ko: "어제 노을 질 때 계단에 있었지? 가게 들어가다 봤어."
  - place: x 32% · y 9% · w 55% · tail ↓
  - read_order: 1
  - note: 우진 — 왼쪽 (긴 KM 2줄)
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…បងមិនបានឃើញឯងទេ។"
  - text_ko: "…난 못 봤어."
  - place: x 60% · y 22% · w 39% · tail ↘
  - read_order: 2
  - note: 하린 — 오른쪽
- note: 우진 KM이 회차에서 가장 긴 줄 — w 55로 2줄 이내.

### panel_024
- art_space: 상단 35% 새벽하늘·담 (EN: the upper 35% of the frame: plain dawn sky and wall top)
- gap_after: 16
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "ខែនេះ… បងជូនពូតិចជាងមុន។"
  - text_ko: "나 이번 달… 덜 드렸어."
  - place: x 54% · y 8% · w 44%
  - read_order: 1
  - note: 하린 ① — 오른쪽 위, 같은 화자 연속(꼬리는 ②에)
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "លើកដំបូង បងប្រាប់ពូថាមិនបាន។"
  - text_ko: "처음으로 안 된다고 했어."
  - place: x 54% · y 19% · w 44% · tail ↘
  - read_order: 2
  - note: 하린 ② — 오른쪽
- bubble_3:
  - speaker: 우진
  - type: dialogue
  - text_km: "បង? ហ៊ានប្រាប់ពូ?"
  - text_ko: "누나가? 삼촌한테?"
  - place: x 22% · y 30% · w 34% · tail ↓
  - read_order: 3
  - note: 우진 ③ — 왼쪽
- note: ★ 말풍선 3개(대본 1:1). 하린 ①② 오른쪽 위→아래, 우진 ③ 왼쪽 맨 아래(읽기 순서상 가장 낮게). 봉투(55–65%)는 비운다.

### panel_025
- art_space: 상단 30% 밝아진 하늘·담 (EN: the upper 30% of the frame: plain brightening sky and wall)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "…ល្អហើយ។"
  - text_ko: "…잘했네."
  - place: x 24% · y 9% · w 24% · tail ↓
  - read_order: 1
  - note: 우진 — 왼쪽
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…អ៊ូជីន។ ចុះឥឡូវ យើងធ្វើម៉េច?"
  - text_ko: "…우진아. 우리, 이제 어떻게 해?"
  - place: x 54% · y 21% · w 44% · tail ↘
  - read_order: 2
  - note: 하린 — 오른쪽
- note: ⟨작은 승리⟩.

### panel_026
- art_space: 상단 25% 복숭아빛 새벽하늘 (EN: the upper quarter of the frame: plain peach-tinted dawn sky above the rooftops)
- gap_after: 320
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "ម៉ែ ប៉ា និងសែរ៉ូម… កុំឲ្យដឹងដាច់ខាត។"
  - text_ko: "엄마 아빠, 새롬이는. 절대 모르게."
  - place: x 54% · y 9% · w 44% · tail ↓
  - read_order: 1
  - note: 우진 — 뒤에서 본 컷이라 화면 오른쪽(좌우 뒤집힘)
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…អើ។ ដាច់ខាត។"
  - text_ko: "…응. 절대."
  - place: x 30% · y 20% · w 30% · tail ↘
  - read_order: 2
  - note: 하린 — 화면 왼쪽
- note: 샷리스트 art_space 메모는 '왼쪽(우진)'이지만 구도가 뒤에서 본 컷(019와 같이 좌우 뒤집힘)이라 우진 = 화면 오른쪽으로 배치. 다음은 xwide.

### panel_027
- art_space: 상단 25% 선반 위 어두운 벽·천장(오른쪽 위 중심) — 펜던트는 프레임 위로 잘림 (EN: the upper quarter of the frame, centred right: dark wall and ceiling above the dish shelf (pendant lamp cropped out at the top))
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ ថ្ងៃនេះម៉ែដើរកាត់មុខហាង—"
  - text_ko: "아이고, 오늘 가게 앞을 지나는데—"
  - place: x 50% · y 8% · w 44%
  - read_order: 1
  - note: 미자 ① — 같은 화자 연속(꼬리는 ②에)
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "ពូសួរថា សែរ៉ូមនៅតែខ្ពស់ឡើងទៀតឬអត់~"
  - text_ko: "삼촌이, 새롬이 요즘도 키 크냐고 물으시더라~"
  - place: x 54% · y 19% · w 44% · tail ↓
  - read_order: 2
  - note: 미자 ② — 안쪽 긴 면 오른쪽

### panel_028
- silent: true
- art_space: 없음(silent)
- gap_after: 16

### panel_029
- art_space: 상단 25% 따뜻한 크림색 벽 (EN: the upper quarter of the frame: plain warm cream wall)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ពូចាត់ទុកអូនដូចកូនង៉ារហូត~"
  - text_ko: "삼촌은 나 맨날 애기 취급해~"
  - place: x 50% · y 11% · w 44% · tail ↓
  - read_order: 1
  - note: 새롬 — 중앙
- note: L14 복선 대사 — 글자 그대로.

### panel_030
- art_space: 상단 30% 따뜻한 벽 — 왼쪽 위(우진) → 오른쪽 그 아래(새롬) (EN: the upper 30% of the frame: plain warm wall across the full width)
- gap_after: 16
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "កូនង៉ាមែនហ្នឹង។"
  - text_ko: "애기 맞잖아."
  - place: x 22% · y 9% · w 30% · tail ↓
  - read_order: 1
  - note: 우진 — 왼쪽 전경
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "បងប្រុស! អូនរៀនថ្នាក់ទី៨ហើយណា៎!"
  - text_ko: "오빠! 나 중2거든?"
  - place: x 54% · y 21% · w 44% · tail ↓
  - read_order: 2
  - note: 새롬 — 오른쪽 중경, 까치발

### panel_031
- art_space: 상단 25% 펜던트 옆 어두운 천장(왼쪽~가운데) — 펜던트는 프레임 위로 잘림 (EN: the upper quarter of the frame, left to centre: dark ceiling beside the pendant lamp (lamp cropped out at the top))
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ដាក់កែងជើងចុះ អូន។"
  - text_ko: "…까치발 내려."
  - place: x 30% · y 10% · w 37% · tail ↓
  - read_order: 1
  - note: 하린 — 앞쪽 긴 면(3/4 옆얼굴)

### panel_032
- art_space: 상단 25% 선반 위 평평한 크림색 벽·어두운 천장(오른쪽 위) (EN: the upper quarter of the frame, centred right: plain cream wall and dark ceiling above the shelf)
- gap_after: 16
- bubble_1:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ម៉ែលាក់បាយក្តាំងក្នុងធុងអង្ករមែនទេ? ឃើញអស់ហើយ~"
  - text_ko: "엄마 쌀통에 누룽지 숨겼지? 다 보여~"
  - place: x 52% · y 11% · w 47% · tail ↘
  - read_order: 1
  - note: 새롬 — 오른쪽 중경, 쌀통 앞

### panel_033
- art_space: 상단 30% 초점 밖 어두운 하부장 면 — 효과음 왼쪽 위, 외침 오른쪽 위 (EN: the upper 30% of the frame: out-of-focus dark lower cabinet surface)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: shout
  - text_km: "កុំប៉ះត្រង់ហ្នឹង!"
  - text_ko: "거기 손대지 마!"
  - place: x 62% · y 14% · w 36% · tail ↙
  - read_order: 1
  - note: 미자 — 손(가운데 띠) 쪽, 화면 밖 미자
- sfx_1:
  - text_km: "ប៉ាំង!"
  - text_ko: "쾅"
  - place: x 22% · y 12% · size 9% · rot -8
- note: 외침(shout). 읽기 순서: 쾅(sfx, 왼쪽 위) → 외침(오른쪽). 반지 자국 손(45–70% 띠)은 비운다.

### panel_034
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_035
- art_space: 상단 30% 선반 위 벽 — 왼쪽 위(미자, 2줄) → 오른쪽 그 아래(새롬) (EN: the upper 30% of the frame: plain wall above the shelf across the full width)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…អូយ! បើកទៅ ល្អិតចូលអស់! បាយក្តាំងនៅក្នុងទូចានទេតើ~"
  - text_ko: "…아이고, 열면 벌레 들어가! 누룽지는 찬장에 있어~"
  - place: x 30% · y 10% · w 52% · tail ↓
  - read_order: 1
  - note: 미자 — 왼쪽~가운데
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "ហឹម… ម៉ែគួរឲ្យខ្លាចម៉្លេះ…"
  - text_ko: "치, 무섭게…"
  - place: x 70% · y 23% · w 30% · tail ↘
  - read_order: 2
  - note: 새롬 — 오른쪽 가장자리

### panel_036
- art_space: 상단 30% 레인지 위 평평한 벽 (EN: the upper 30% of the frame: plain wall above the stove)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អេះ នឹកឃើញហើយ! ថ្ងៃនេះម៉ែឃើញថៅកែរោងចក្រឆ្នាំងនៅផ្លូវធំ—"
  - text_ko: "아 맞다, 오늘 큰길에서 냄비 공장 사장님 봤어—"
  - place: x 46% · y 9% · w 50%
  - read_order: 1
  - note: 미자 ① — 같은 화자 연속(꼬리는 ②에)
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "គាត់ចាស់ទៅច្រើនណាស់—"
  - text_ko: "그 양반 많이 늙었더라—"
  - place: x 52% · y 21% · w 34% · tail ↓
  - read_order: 2
  - note: 미자 ② — 중앙
- note: 냄비 공장 사장 복선(EP03) — 글자 그대로.

### panel_037
- art_space: 상단 1/3 초점 밖 어두운 배경(효과음만) (EN: the upper third of the frame: out-of-focus dark background)
- gap_after: 160
- sfx_1:
  - text_km: "ទក់!"
  - text_ko: "탁"
  - place: x 50% · y 16% · size 9% · rot -6
- note: 효과음만. EP01 P23 효과음 위치와 같은 각운.

### panel_038
- art_space: 상단 1/3 아버지 머리 위 어두운 벽 — 펜던트는 프레임 위로 잘림 (EN: the upper third of the frame: dark wall above the father's head (pendant lamp cropped out at the top))
- gap_after: 160
- bubble_1:
  - speaker: 인호
  - type: dialogue
  - text_km: "…ល្មមហើយ។"
  - text_ko: "…됐다."
  - place: x 50% · y 12% · w 26% · tail ↓
  - read_order: 1
  - note: 인호 — 중앙 머리 자리

### panel_039
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_040
- art_space: 상단 30% 어두운 천장·벽 — 가운데 위(미자) → 오른쪽 그 아래(새롬) (EN: the upper 30% of the frame: dark ceiling and wall across the full width)
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "អូយ មើលម៉ែនេះ ភ្លេចខ្លួនទៀតហើយ។ ញ៉ាំបាយសិនទៅ!"
  - text_ko: "아이고 내 정신 좀 봐. 밥부터 먹어!"
  - place: x 44% · y 9% · w 45% · tail ↓
  - read_order: 1
  - note: 미자 — 중앙 배경
- bubble_2:
  - speaker: 새롬
  - type: dialogue
  - text_km: "គ្មានបាយក្តាំងសោះ~!"
  - text_ko: "누룽지 없잖아아~!"
  - place: x 64% · y 22% · w 34% · tail ↘
  - read_order: 2
  - note: 새롬 — 오른쪽 찬장 앞
- note: 다음은 wide(같은 저녁 50분 뒤).

### panel_041
- art_space: 상단 25% 싱크대 위 평평한 벽(오른쪽 위) (EN: the upper quarter of the frame, centred right: plain wall above the sink)
- gap_after: 50
- bubble_1:
  - speaker: 우진
  - type: dialogue
  - text_km: "បងឃើញប៉ាទេ? …ឬមួយប៉ាទៀត?"
  - text_ko: "아빠 봤지? …혹시 아빠까지?"
  - place: x 54% · y 11% · w 44% · tail ↘
  - read_order: 1
  - note: 우진 — 오른쪽 (작게 말함)
- note: 우진 (작게) — km_tool에 속삭임 종류가 없어 일반 대사 풍선.

### panel_042
- art_space: 상단 30% 창 위 어두운 벽 (EN: the upper 30% of the frame: plain dark wall above the small window)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: dialogue
  - text_km: "…មិនដឹងទេ។"
  - text_ko: "…모르겠어."
  - place: x 30% · y 8% · w 26%
  - read_order: 1
  - note: 하린 ① — 같은 화자 연속(꼬리는 ②에)
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "តែម៉ែ… ម៉ែមិនត្រូវដឹងដាច់ខាត។"
  - text_ko: "엄마는. 엄마만큼은 절대 몰라야 돼."
  - place: x 44% · y 19% · w 44% · tail ↓
  - read_order: 2
  - note: 하린 ② — 옆얼굴

### panel_043
- silent: true
- art_space: 없음(silent)
- gap_after: 320

### panel_044
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_045
- silent: true
- art_space: 없음(silent)
- gap_after: 320

### panel_046
- art_space: 상단 25% 전구 옆 어두운 벽·천장 — 왼쪽 위(미자) → 오른쪽 그 아래(하린) (EN: the upper quarter of the frame: dark wall and ceiling beside the bare bulb (bulb at the door-side edge))
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ម៉ែចេញទៅស្រូបខ្យល់បន្តិចណា៎~"
  - text_ko: "엄마 잠깐 바람 좀 쐬고 올게~"
  - place: x 26% · y 9% · w 44% · tail ↓
  - read_order: 1
  - note: 미자 — 하린 뒤 깊은 쪽
- bubble_2:
  - speaker: 하린
  - type: dialogue
  - text_km: "…ចាស ម៉ែ។"
  - text_ko: "…응."
  - place: x 70% · y 20% · w 23% · tail ↓
  - read_order: 2
  - note: 하린 — 턱 위

### panel_047
- art_space: 상단 25% 문틀 위 어두운 벽(왼쪽~가운데) — 효과음은 문 가장자리 근처 (EN: the upper quarter of the frame, left to centre: dark wall above the door frame)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ចាស ចាស។ ចាំមួយភ្លែត។"
  - text_ko: "…네, 네. 잠깐만요."
  - place: x 40% · y 11% · w 43% · tail ↘
  - read_order: 1
  - note: 미자 문 너머 — 꼬리는 오른쪽 간유리 쪽
- sfx_1:
  - text_km: "គ្រូត…"
  - text_ko: "드르륵"
  - place: x 82% · y 8% · size 6% · rot 4
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. 효과음 គ្រូត… 은 문틀 위 오른쪽(실루엣 위 아님).

### panel_048
- art_space: 상단 25% 어두운 벽·천장 — 간유리 실루엣 위쪽은 피함 (EN: the upper quarter of the frame: dark wall and ceiling, kept above the silhouette in the frosted glass)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ចាស បងសុកគូ។ ប៉ាក្មេងៗនៅក្នុងផ្ទះ។"
  - text_ko: "…네, 석구 씨. 애들 아빠가 안에 있어서요."
  - place: x 50% · y 10% · w 44% · tail ↙
  - read_order: 1
  - note: 미자 문 너머 — 꼬리는 하린 오른쪽 어깨 뒤 간유리(화면 왼쪽 가정)
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. 간유리가 화면 오른쪽으로 그려지면 배치 패스에서 꼬리만 ↘로.

### panel_049
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_050
- art_space: 상단 25% 문틀 위 어두운 벽 (EN: the upper quarter of the frame: dark wall above the door frame)
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ខែនេះខ្វះមែនទេ?"
  - text_ko: "…이번 달이 모자라다고요?"
  - place: x 28% · y 10% · w 30% · tail ↙
  - read_order: 1
  - note: 미자 문 너머 — 꼬리는 배경 간유리 쪽
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. 다음은 wide(반전 앞).

### panel_051
- art_space: 상단 20% 문틀 윗막이·어두운 벽 + 하단 20% 문틀 아랫막이·시멘트 바닥 (EN: the upper 20% of the frame (top rail of the door frame and dark wall) and the bottom 20% of the frame (bottom rail of the door frame and cement floor))
- gap_after: 160
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "លុយលក់ចិញ្ចៀនហ្នឹង គ្រប់សម្រាប់ខែនេះហើយតើ…"
  - text_ko: "반지 판 걸로 이번 달 건 다 됐잖아요…"
  - place: x 50% · y 10% · w 48% · tail ↓
  - read_order: 1
  - note: 미자 문 너머 — 상단 20% 띠, 꼬리는 간유리 윗막이까지만(실루엣 30% 높이 위)
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "បងសុកគូ…"
  - text_ko: "석구 씨…"
  - place: x 50% · y 90% · w 24% · tail ↑
  - read_order: 2
  - note: 미자 문 너머 — 하단 20% 띠에 단독, 꼬리는 간유리 아랫막이 쪽
- note: ★ 반전 컷. 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. 두 번째 「បងសុកគូ…」는 하단 20%에 단독 박자. 앞뒤 wide 여백.

### panel_052
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_053
- art_space: 상단 25% 어두운 벽 — 뒤 간유리 실루엣 위쪽은 피함 (EN: the upper quarter of the frame: dark wall, kept above the blurred silhouette behind her)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "…ថែមទៀត?"
  - text_ko: "…더요?"
  - place: x 28% · y 10% · w 24% · tail ↙
  - read_order: 1
  - note: 미자 문 너머 — 꼬리는 하린 뒤 간유리 쪽
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽.

### panel_054
- art_space: 왼쪽 위 1/4 하린 뒤 어두운 복도 벽 (EN: the upper-left quarter of the frame: dark hallway wall behind her)
- gap_after: 50
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…ខ្ញុំជូនតិចប៉ុណ្ណា ម៉ែត្រូវថែមប៉ុណ្ណឹង។"
  - text_ko: "…내가 덜 드린 만큼, 엄마가 더."
  - place: x 27% · y 11% · w 46%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음

### panel_055
- art_space: 상단 25% 어두운 천장(전구 반대쪽, 가운데) (EN: the upper quarter of the frame, centre, on the side away from the bulb: dark ceiling)
- gap_after: 16
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ពីរឆ្នាំកន្លះហើយ បងសុកគូ។ មិនដែលខកមួយខែណាទេ។"
  - text_ko: "이 년 반이에요, 석구 씨. 한 달도 안 빠지고."
  - place: x 48% · y 10% · w 47% · tail ↓
  - read_order: 1
  - note: 미자 문 너머 — 꼬리는 하린 너머 간유리 쪽
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. 전구 쪽 위 모서리는 비운다.

### panel_056
- art_space: 상단 25% 평평한 어둠 (EN: the upper quarter of the frame: flat warm darkness)
- gap_after: 160
- bubble_1:
  - speaker: 하린
  - type: thought
  - text_km: "…មុនខ្ញុំទៅទៀត។"
  - text_ko: "…나보다 먼저."
  - place: x 50% · y 10% · w 32%
  - read_order: 1
  - note: 하린 생각 — 꼬리 없음
- note: ⟨반전 확정⟩. 다음은 wide.

### panel_057
- art_space: 상단 25% 문틀 윗막이 위 어두운 벽 (EN: the upper quarter of the frame: dark wall above the top rail of the door frame)
- gap_after: 50
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ប៉ុន្មានឆ្នាំនេះ បងធ្វើឲ្យគ្មាននរណាតេមកផ្ទះមួយដងសោះ…"
  - text_ko: "그동안 집에 전화 한 통 안 오게 해 주신 거…"
  - place: x 48% · y 8% · w 49%
  - read_order: 1
  - note: 미자 문 너머 ① — 같은 화자 연속(꼬리는 ②에)
- bubble_2:
  - speaker: 미자
  - type: dialogue
  - text_km: "ខ្ញុំដឹង។ ដឹងហើយ…"
  - text_ko: "알아요. 알아요…"
  - place: x 62% · y 19% · w 34% · tail ↘
  - read_order: 2
  - note: 미자 문 너머 ② — 꼬리는 오른쪽 절반 간유리 쪽
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. ① KM은 회차에서 가장 긴 줄 중 하나(2줄).

### panel_058
- art_space: 상단 25% 문틀 윗부분 위 어두운 벽 (EN: the upper quarter of the frame: dark wall above the top of the door frame)
- gap_after: 320
- bubble_1:
  - speaker: 미자
  - type: dialogue
  - text_km: "ក្មេងៗមិនដឹងទេ។ មិនត្រូវឲ្យដឹង។"
  - text_ko: "애들은 몰라요. 몰라야 돼요."
  - place: x 50% · y 10% · w 44% · tail ↓
  - read_order: 1
  - note: 미자 문 너머 — 꼬리는 손 너머 간유리 쪽(문틀 위에서 멈춤)
- note: 문 너머 — 간유리 바깥 미자. 말풍선은 문틀 위 벽(실루엣 위 아님), 꼬리는 간유리 쪽. 다음은 xwide(마당으로).

### panel_059
- silent: true
- art_space: 없음(silent)
- gap_after: 50

### panel_060
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_061
- silent: true
- art_space: 없음(silent)
- gap_after: 160

### panel_062
- silent: true
- art_space: 없음(silent)
- gap_after: 0
