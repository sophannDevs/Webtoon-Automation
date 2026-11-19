# EP01 레터링 스펙 — 「맑은 날의 우산」 EP1 「맑은 날의 비」 · letterer

- 작성: letterer · 2026-11-19 · Flow-by-hand + Khmer edition · v1
- 입력: `03_episode/ep01_script_final.md`(최종본 · `KM:` 줄이 크메르어 원본), `04_visual/ep01_shotlist.md`(패널별 구도 · art_space · gap), `04_visual/style-bible.md` §8, `03_episode/ep01_beatsheet.md` §6, `02_story/glossary_km.md`, 뷰어 `.claude/skills/webtoon-khmer-edition/assets/viewer-km.html`(말풍선 CSS).
- **이미지에는 글자가 없다.** 뷰어(`km_tool.py build`)가 이 파일대로 말풍선을 그리고 크메르어를 쓴다. prompt-smith는 각 패널의 `art_space`(영어 한 줄)를 그대로 프롬프트에 넣는다: `Keep <art_space> as calm, empty background with no important details (a speech bubble will be added there later).` panel-validator는 C3(b)에서 그 자리가 실제로 비었는지 본다.
- 패널 **62** = `panel_001`–`panel_062` (대본 P01–P62, 번호·순서 같음). 말풍선 66 + 끝 캡션 1 (panel_062) · 효과음 2 (panel_003, panel_055) · 무대사 22 = 글자 없는 패널 20 (`silent: true`, `art_space: none` — panel_048만 panel_041과 같은 빈자리를 둔다) + 효과음만 있는 panel_003 + 끝 캡션만 있는 panel_062.
- `text_km`은 손으로 치지 않았다. 스크립트가 대본의 `KM:` · `KM 효과음:` · `KM 캡션:` 줄을 읽어 글자 하나 바꾸지 않고 옮겼다. 대본의 따옴표 하나 = 말풍선 하나(대본이 둘로 나눈 줄은 여기서도 `bubble_1`·`bubble_2`). `text_ko`는 참고용이고 뷰어에 나오지 않는다. 화자 이름은 대본의 한국어 이름.

## 0. 읽는 법 · 규칙

| 항목 | 규칙 |
|---|---|
| `place` | `x NN% · y NN% · w NN% · tail ↙` — x, y = 말풍선 **중심**, w = 최대 폭. 모두 그 패널 폭(x, w)·높이(y)의 %. |
| **x + w ≤ 100** | 뷰어는 말풍선을 `left: x%`에 놓고 가운데 정렬하므로 폭이 최대 (100 − x)%로 잘린다. 오른쪽에 둘수록 좁아진다: 중심 x 60 → 최대 40 %, 70 → 30 %, 80 → 20 %. 그래서 오른쪽 화자의 말풍선은 중심을 55–70 %에 두고 폭을 맞췄다(일부는 화면 가운데를 넘는다 — §2 요청 참고). 모든 말풍선 x + w ≤ 100, w ≤ 85. |
| 줄 수 | 크메르어 **≤ 2줄** (Battambang, 패널 폭 360 · 430 · 720 px에서 실측, §1). 짧은 대사는 한 줄. w는 줄바꿈이 띄어쓰기나 낱말 경계에 오도록 골랐다(글로서리에서 띄어 쓴 이름 — 소단비 · 태오 씨 · 문태오 — 은 뷰어가 한 줄로 묶는다). |
| 크기 | 뷰어 글자 = 패널 폭의 3.4 %, 줄 높이 1.7, 안쪽 여백 0.7em/1.2em. 말풍선 높이(꼬리 제외) ≈ 1줄 11–12 % · 2줄 17–18 % · 3줄 23–24 % **패널 폭** → 패널 높이로는 3:4 에서 1줄 9 % · 2줄 13.5 %, 4:3 에서 1줄 16 % · 2줄 24 %, 1:1 에서 1줄 12 % · 2줄 18 %, 9:16 에서 1줄 7 % · 2줄 10 %, 16:9 에서 1줄 22 % · 2줄 32 %. 꼬리는 약 0.8em(패널 폭의 ~2.8 %) 더 나온다. |
| `tail` | `↙ ↓ ↘` = 말풍선 아래 꼬리(왼쪽 · 가운데 · 오른쪽) — 화자가 말풍선 아래에 있을 때. `↖ ↑ ↗` = 위 꼬리 — 화자가 말풍선 위에 있을 때. 화면 밖 화자는 그 가장자리 쪽: panel_017 단비 ↘(오른쪽 = 골목 쪽), panel_041 단비 ↘ · 태오 ↙, panel_038 태오 ↖(왼쪽 가장자리). 나레이션(panel_062)은 꼬리 없음. |
| `art_space` | 영어 한 줄 = 그 이미지에서 **비워 둘 자리**. 이 파일의 말풍선은 모두 그 안에 있다(얼굴 · 손 · 손잡이 · 노란 우산/실 · 열쇠 · 고리 · 구름 · 빗줄기 기둥 위 없음, 구름에서 구름 폭 하나 이상). 샷리스트 문장을 옮기되, 뷰어 때문에 넓혀야 한 곳은 넓힌 자리를 적었다(§2). 무대사 패널은 `none`. |
| `gap_after` | 패널 뒤 간격, 뷰어 px. **S = 40 · M = 120 · L = 480 · XL = 900.** 대본 ⟨gap⟩ 그대로: L = 006 · 035 · 048 · 059 · 060 · XL = 054 · M = 001 · 004 · 011 · 014 · 015 · 016 · 018 · 019 · 020 · 023 · 028 · 038 · 039 · 040 · 041 · 042–047 · 051 · 053 · 058 · 061 · 나머지 S (062는 마지막 패널, 40). |
| `sfx` | `x NN% · y NN% · size N% · rot N` — x, y = 중심, size = 글자 크기(패널 폭의 %), rot = 도(+ = 시계 방향). 뷰어가 Koulen 굵은 흰 글자 + 검은 외곽선으로 쓴다(한 줄, 줄바꿈 없음). |
| `read_order` | 패널 안 읽는 순서. 위 → 아래, 같은 높이면 왼쪽 → 오른쪽. |
| 반복 쌍 | panel_012 ↔ panel_031 (같은 문장 F03): 같은 w 42 · 같은 y 11 · 같은 한 줄 모양 · 둘 다 맨 위 띠. 화자가 바뀌어 좌우만 거울(태오 왼쪽 → 단비 오른쪽) — 단비의 흉내를 태오 머리 위에 두면 태오가 또 말한 것으로 읽힌다. panel_041 ↔ panel_048: 같은 COMP_A 프레임이라 art_space 문장도 같다(048은 말풍선 없음). |

## 1. 가장 긴 말풍선 · 실측

측정: 스크래치 HTML에 뷰어의 `.bubble` CSS를 그대로 쓰고, 실제 크메르어를 실제 x · w로 패널 폭 360 · 430 · 720 px에 그려 줄 수를 셌다(Chrome, Battambang = Google Fonts / 폴백 = Windows `Khmer UI`). em = 한 줄로 늘어놓은 길이(글자 크기 기준).

| 패널 · 풍선 | 화자 | 한 줄 길이 em (Battambang / 폴백) | w | 줄 (Battambang 360·430·720 / 폴백) | Battambang 줄바꿈 (360 px) |
|---|---|---|---|---|---|
| panel_028 ① | 단비 | 20.8 / 24.6 | 56 % | 2·2·2 / 2 | អ៊ីចឹង… ភ្លៀងមក លោកលក់ដាច់។ ⏎ មេឃស្រឡះ ខ្ញុំលក់ដាច់។ |
| panel_027 ② | 옥자 | 19.8 / 24.8 | 58 % | 2·2·2 / 2 | អ្នកណាបង់ថ្លៃជួលរដូវក្ដៅ ម្ដងពីរខែបាន ⏎ អ្នកនោះបាននៅ។ |
| panel_034 ② | 태오 | 19.0 / 22.2 | 51 % | 2·2·2 / 2 | «វាសម្រាប់បាំងថ្ងៃ។» កញ្ញានិយាយ ⏎ អ៊ីចឹង អម្បាញ់មិញ។ |
| panel_028 ② | 태오 | 18.5 / 22.5 | 58 % | 2·2·2 / 2 | រដូវភ្លៀង មានតែប្រាំមួយសប្ដាហ៍។ ⏎ បន្ទាប់មក រដូវក្ដៅ។ |
| panel_020 ① | 단비 | 18.2 / 21.6 | 58 % | 2·2·2 / 2 | ខ្ញុំឈ្មោះ សូ ដាន់ប៊ី! ទឹកកកឈូសស្ត្របឺរី ⏎ ឆ្ងាញ់ជាងគេ! |
| panel_032 ② | 단비 | 16.9 / 20.7 | 48 % | 2·2·2 / 2 | អូយ… របស់ថោកៗទេ… អត់… ⏎ មិនមែនអ៊ីចឹងទេ… |
| panel_030 ① | 태오 | 16.8 / 20.4 | 48 % | 2·2·2 / 2 | ទទឹងបីម៉ែត្រហុកសិប។ ម្ខាង ⏎ មួយម៉ែត្រប៉ែតសិប។ |
| panel_026 ① | 옥자 | 15.3 / 19.5 | 46 % | 2·2·2 / 2 | អ៊ំប្រាប់ក្មួយតេអូ ឲ្យបើកបន្តដូច ⏎ លោកតាមូន… |
| panel_027 ① | 옥자 | 15.2 / 18.4 | 40 % | 2·2·2 / 3 | រហូតដល់ចប់រដូវភ្លៀង ⏎ ចែកគ្នាពាក់កណ្ដាល។ |

- 대본 편집 노트가 꼽은 세 말풍선(panel_020 단비, panel_027 ② 옥자, panel_028 태오)과 실측으로 더 긴 panel_028 ① 단비에 56–58 %를 줬다. x + w ≤ 100 때문에 이 폭이면 중심이 42–44 % 이하라, 오른쪽 화자라도 말풍선이 화면 가운데에 걸친다(panel_020: 13–71 %, panel_028 ①: 16–72 %).
- panel_027 ②(고정 문구 F06)와 panel_028 ①은 w 56–58 %에서만 Battambang 줄바꿈이 띄어쓰기에 떨어진다(위 표). 더 좁히면 F06의 「두 달 치를 한 번에」나 「맑은 하늘」이 낱말 가운데서 갈리므로 폭을 줄이지 않는다.

## 2. 샷리스트 요청 (panel-director → prompt-smith)

뷰어 규칙(x + w ≤ 100, 오른쪽일수록 좁아짐)과 ≤ 2줄 때문에 샷리스트의 빈자리 안에 둘 수 없던 곳. **이 파일의 `art_space`는 이미 요청한 자리로 적었다** — prompt-smith는 이 파일 문장을 쓰면 되고, panel-director는 샷리스트를 이에 맞춰 고쳐 주면 된다. 얼굴·핵심 소품을 덮는 대신 이렇게 요청한다.

1. P15 (16:9): widen the empty area from the upper-right third to the right half, top two-thirds (x ~42-88 %, y 0-70 %). The viewer cannot put a two-line bubble inside the right third (a bubble centred at x can be at most 100-x % wide), and two stacked bubbles need ~65 % of a 16:9 height.
2. P16 (4:3): the two Danbi bubbles must sit side by side across the centre (x ~15-83 %), so the hook has to be at the very top edge (top ~6 %) or out of frame, and the upper third from x ~14 % to ~84 % must be clear. Right of a centred hook the viewer allows only ~30 % width (3+ lines).
3. P19 (4:3): Danbi's bubble (38 % wide, x 43-81 %) crosses the centre, so the hook must be at the very top edge (top ~6 %) or out of frame.
4. P24 (4:3): Danbi's bubble (44 % wide, x 34-78 %) crosses the centre, so the hook must be at the very top edge (top ~6 %) or out of frame.
5. P27 (4:3): the verdict is two long bubbles (40 % and 58 % wide, both two lines; the 58 % one must cross the centre). They cannot sit side by side in the top third, so they stack: keep the top ~60 % clear (wider shot with headroom, figures in the lower part, hook small at the very top centre). Better alternative: make P27 3:4, then the original top-third works (positions for 3:4: b1 x 21 y 10 w 40, b2 x 42 y 28.5 w 58 - top ~37 %).
6. P28 (4:3): both lines are long (56 % and 58 % wide, two lines each), so they cannot sit side by side; stacked they need the top ~57 % clear (camera higher, looking down more at the floor and the tape roll, the hook just out of frame above). Better alternative: make P28 3:4 (positions for 3:4: b1 x 44 y 9 w 56, b2 x 30 y 25.5 w 58 - top third).
7. P29 (4:3): two Danbi bubbles (30 % and 36 % wide) do not fit stacked in the right half; they sit side by side across the centre (x ~14-82 %), so the hook must be at the very top edge and the upper third clear from x ~13 % to ~84 %.
8. P41 / P48 (COMP_A, 9:16): Danbi's 2-line bubble (40 % wide) cannot sit right of the centred umbrella (the viewer allows ~27 % there = 3-4 lines). Start the COMP_A frame a little higher so the top ~14 % is a calm band (plain shutter-box housing / eave edge) with the hook just below it; her bubble crosses the centre in that band, above the hook. Taeo's one-word reply stays in the upper-left quarter. Same framing for P48 (identical frame, no bubbles).
9. P48 (COMP_A): the shot list says art_space none; because P41 and P48 are the identical frame, P48 keeps the same empty areas as P41 (top band above the hook + upper-left quarter), with no bubbles.
10. P49 (3:4): Danbi's two bubbles start at x ~52 % (right of the hook, the viewer allows no wider there), so the neatly furled umbrella must hang within x ~46-51 % and the upper third right of it must be clear (x ~51-86 %, top ~36 %).
11. P56: 'w <= 35 %' gives three lines of Khmer (measured); the bubble is 41 % wide (two lines), so the empty area above his shoulder must be ~44 % wide (x 0-44 %, top fifth). Still small, still upper-left, no SFX nearby.

- 공통 메모(4:3 FRONT 투샷 · panel_016 · 019 · 024 · 027 · 028 · 029): 가운데 고리 오른쪽에는 2줄 말풍선이 들어가지 못한다(최대 ~30 %). 그래서 고리는 맨 위 가장자리(위 ~6 %) 또는 프레임 밖, 말풍선 띠는 그 아래로 정했다. panel_020 · 021 · 031(3:4)도 같은 이유로 고리를 맨 위 가장자리에 둔다(샷리스트 panel_020과 같다).

## 3. 폴백 글꼴에서만 3줄이 되는 말풍선

Google Fonts(Battambang)를 못 받는 오프라인 독자는 기기 글꼴(Windows `Khmer UI` 등)로 본다. 이 글꼴은 15–25 % 넓어서 아래 말풍선은 3줄이 된다(Battambang에서는 모두 2줄 이하). 자리는 3줄 높이까지 비도록 y를 잡았다. 폭을 넓히면 Battambang 줄바꿈이 낱말 가운데로 가거나 자리를 벗어나서 그대로 둔다.

1. panel_009 ① (단비, w 38 %): ថ្ងៃក្ដៅខ្លាំងណាស់… ⏎ ពេទ្យស្បែក ⏎ គាត់ថា…
2. panel_015 ① (단비, w 33 %): ស្ត្របឺរីអើយ ថ្ងៃ ⏎ នេះថ្ងៃដំបូង ⏎ ហើយ…
3. panel_016 ① (단비, w 32 %): ហាងដំបូង ⏎ របស់ខ្ញុំ នៅ ⏎ មាត់ផ្សារនេះ!
4. panel_016 ② (단비, w 36 %): មុនរដូវក្ដៅ ⏎ មកដល់… ដោយ ⏎ កម្លាំងខ្លួនឯង!
5. panel_019 ① (단비, w 38 %): មនុស្សដើរកាត់ ⏎ ទីនេះ មួយថ្ងៃរាប់ ⏎ ពាន់នាក់!
6. panel_019 ② (태오, w 35 %): មួយម៉ោង ⏎ កន្លងមក ដប់ ⏎ ប្រាំពីរនាក់។
7. panel_021 ① (단비, w 41 %): អ៊ីចឹង លោក តេអូ ⏎ ខ្ញុំបើកទ្វាររមូរ ⏎ ហើយណា៎!
8. panel_026 ② (옥자, w 34 %): ក្មួយដាន់ប៊ីដាក់ ⏎ ពាក្យ អ៊ំក៏ឲ្យ ⏎ កូនសោថ្មីទៅ!
9. panel_027 ① (옥자, w 40 %): រហូតដល់ចប់រដូវ ⏎ ភ្លៀង ចែកគ្នា ⏎ ពាក់កណ្ដាល។
10. panel_032 ① (태오, w 36 %): កាំបិតឈូស ⏎ ទឹកកក។ មុំត្រឹម ⏎ ត្រូវ។
11. panel_041 ① (단비, w 40 %): ព្យួរឲ្យស្ងួតទេណា៎! ⏎ មិនមែនផ្ញើជួសជុល ⏎ ទេ!
12. panel_049 ① (단비, w 32 %): ឆ័ត្រម្សិលមិញ… ⏎ មិនមែនផ្ញើ ⏎ ទេណា៎!

## 4. 패널

### panel_001
- silent: true
- art_space: none
- gap_after: 120

### panel_002
- silent: true
- art_space: none
- gap_after: 40

### panel_003
- art_space: a small clear patch of sunlit background to the right of the snapping rib, centre-right of the image (about x 72-96 %, y 8-50 %), outside the rain column and far from the yellow canopy at the left edge
- gap_after: 40
- sfx_1:
  - text_km: "ក្រាក់!"
  - text_ko: "뚝!"
  - place: x 84% · y 28% · size 7% · rot -8

### panel_004
- silent: true
- art_space: none
- gap_after: 120

### panel_005
- silent: true
- art_space: none
- gap_after: 40

### panel_006
- silent: true
- art_space: none
- gap_after: 480

### panel_007
- art_space: upper-left corner of the image (left ~45 % x top ~22 %): clear blue sky beyond the canopy's left rim, above Taeo's head
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "សូមកុំបើកច្រាសខ្យល់។ វាក្រឡាប់។"
  - text_ko: "바람 쪽으로 펴지 마세요. 뒤집힙니다."
  - place: x 22% · y 10% · w 39% · tail ↘
  - read_order: 1

### panel_008
- art_space: upper-left third of the image (left ~42 % x top ~30 %): clear blue sky beyond the canopy's left rim, above Danbi's waving hands
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អូ៎! ឆ័ត្រនេះឬ?"
  - text_ko: "아, 이 우산요?"
  - place: x 20% · y 8% · w 34% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "វាសម្រាប់បាំងថ្ងៃ។"
  - text_ko: "해 가리는 거예요."
  - place: x 25% · y 20% · w 38% · tail ↘
  - read_order: 2

### panel_009
- art_space: upper-left third of the image (left ~44 % x top ~35 %): clear blue sky above the canopy's left rim - above the rim, the water stream and Taeo's face
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្ងៃក្ដៅខ្លាំងណាស់… ពេទ្យស្បែកគាត់ថា…"
  - text_ko: "요즘 햇볕이 엄청 세서… 피부과 선생님이 그러는데…"
  - place: x 21% · y 9.5% · w 38% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "អត់… មិនមែនអ៊ីចឹងទេ…"
  - text_ko: "아니, 그게 아니라…"
  - place: x 22% · y 26.5% · w 41% · tail ↘
  - read_order: 2

### panel_010
- art_space: upper-left corner of the image (left ~45 % x top ~22 %): clear sky beyond the canopy's left rim - away from the hands, the handle and the cloud at the top-right
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "មិនអីទេ ខ្ញុំកាន់ខ្លួនឯង—"
  - text_ko: "괜찮아요, 제가 들—"
  - place: x 23% · y 10% · w 41% · tail ↘
  - read_order: 1

### panel_011
- art_space: upper quarter of the image, left half: soft-focus empty background (dry plaza, a slice of sky) - nothing over the hands
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "សូមកាន់ត្រង់ចុងដង។"
  - text_ko: "손잡이 끝을 잡으세요."
  - place: x 25% · y 11% · w 44% · tail ↘
  - read_order: 1

### panel_012
- art_space: upper-left fifth of the image (left ~45 % x top ~20 %): clear sky beyond the canopy's left rim, above Taeo's head
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ឆ្អឹងទីបី។ កោងហើយ។"
  - text_ko: "세 번째 살. 휘었네요."
  - place: x 22% · y 11% · w 42% · tail ↘
  - read_order: 1

### panel_013
- art_space: upper-left corner of the image (left ~45 % x top ~22 %): clear sky beyond the canopy's left rim - away from the hands and the fading cloud at the top-right
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អរគុណ អរគុណ លោកថៅកែ!"
  - text_ko: "고마워요, 고마워요, 사장님!"
  - place: x 20% · y 10% · w 34% · tail ↘
  - read_order: 1

### panel_014
- art_space: upper-left fifth of the image (left ~45 % x top ~20 %): the flat blank mint shutter face and the shaded eave underside above Taeo's head
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "មិនមែនថៅកែទេ។ ជាងជួសជុល។"
  - text_ko: "사장 아닙니다. 수선공입니다."
  - place: x 22% · y 10% · w 36% · tail ↓
  - read_order: 1

### panel_015
- art_space: right half of the image from the top down to about two-thirds height (x ~42-88 %, y 0-70 %): clear sky above the stone wall's flat top and the plain upper wall face - no hydrangea heads or streetlamp there
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ស្ត្របឺរីអើយ ថ្ងៃនេះថ្ងៃដំបូងហើយ…"
  - text_ko: "딸기야, 오늘이 첫날이다…"
  - place: x 60% · y 22% · w 33% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "កុំញ័រណា៎…"
  - text_ko: "떨지 마…"
  - place: x 72% · y 55% · w 26% · tail ↙
  - read_order: 2

### panel_016
- art_space: upper third of the image from x ~14 % to ~84 % (blank mint shutter face under the eave); the small hook sits at the very top edge above this band (or just out of frame); Taeo, the rail with the yellow umbrella at the far left and the opened parasol at the right stay outside it
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ហាងដំបូងរបស់ខ្ញុំ នៅមាត់ផ្សារនេះ!"
  - text_ko: "이 시장 입구에, 내 첫 가게!"
  - place: x 28.5% · y 16.5% · w 32% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "មុនរដូវក្ដៅមកដល់… ដោយកម្លាំងខ្លួនឯង!"
  - text_ko: "여름 오기 전에… 혼자 힘으로!"
  - place: x 64% · y 20% · w 36% · tail ↘
  - read_order: 2

### panel_017
- art_space: upper third of the image: plain dark-wood back edge of the workbench and the shadowed wall, soft - nothing over the yellow spool
- gap_after: 40
- bubble_1:
  - speaker: 단비 (화면 밖)
  - type: dialogue
  - text_km: "វ៉ាវ… ឧបករណ៍ទាំងនេះ ចាស់ជាងខ្ញុំទៀត!"
  - text_ko: "우와… 공구들이 저보다 나이 많겠어요!"
  - place: x 57% · y 11% · w 43% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "របស់លោកតាខ្ញុំ។"
  - text_ko: "할아버지 겁니다."
  - place: x 18% · y 24% · w 35% · tail ↘
  - read_order: 2

### panel_018
- art_space: upper third of the image, centre-right (x ~34-80 %): the blank mint shutter face above the workbench, right of the bulb - not on Taeo's face, not on the rail
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "កន្លែងនេះ លោកតាខ្ញុំអង្គុយសែសិបឆ្នាំ។"
  - text_ko: "이 자리, 할아버지가 사십 년 앉으셨습니다."
  - place: x 57% · y 9% · w 41% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "រដូវភ្លៀងនេះ ខ្ញុំបើកជំនួស។"
  - text_ko: "이번 장마는 제가 대신 엽니다."
  - place: x 55% · y 25% · w 45% · tail ↙
  - read_order: 2

### panel_019
- art_space: upper third of the image across the full width (blank mint shutter face); the small hook sits at the very top edge above this band (or just out of frame); Danbi's raised hands and both heads stay below it
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "មនុស្សដើរកាត់ទីនេះ មួយថ្ងៃរាប់ពាន់នាក់!"
  - text_ko: "여기 하루에 몇천 명은 지나가요!"
  - place: x 62% · y 18% · w 38% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "មួយម៉ោងកន្លងមក ដប់ប្រាំពីរនាក់។"
  - text_ko: "지난 한 시간, 열일곱 명입니다."
  - place: x 20% · y 21% · w 35% · tail ↙
  - read_order: 2

### panel_020
- art_space: upper third of the image across the full width: blank mint shutter face below the small hook at the very top edge - no heads or hands in it
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ខ្ញុំឈ្មោះ សូ ដាន់ប៊ី! ទឹកកកឈូសស្ត្របឺរី ឆ្ងាញ់ជាងគេ!"
  - text_ko: "저는 소단비예요! 딸기 빙수, 이 동네 최고예요!"
  - place: x 42% · y 13% · w 58% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "មូន តេអូ។"
  - text_ko: "문태오입니다."
  - place: x 14% · y 27% · w 26% · tail ↓
  - read_order: 2

### panel_021
- art_space: upper third of the image across the full width: blank mint shutter face (the hook, if visible, small at the very top edge) - keys, hands and the keyhole stay below it
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អ៊ីចឹង លោក តេអូ ខ្ញុំបើកទ្វាររមូរហើយណា៎!"
  - text_ko: "그럼 태오 씨, 저 셔터 열게요!"
  - place: x 59% · y 15% · w 41% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "ខ្ញុំក៏បើកដែរ។"
  - text_ko: "저도 엽니다."
  - place: x 17% · y 22% · w 30% · tail ↓
  - read_order: 2

### panel_022
- art_space: upper quarter of the image: plain blank mint shutter face - nothing over the keys, the keyhole or the fingers
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "…អូ។"
  - text_ko: "…어."
  - place: x 24% · y 12% · w 20% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ហ៎?!"
  - text_ko: "어?!"
  - place: x 74% · y 12% · w 20% · tail ↘
  - read_order: 2

### panel_023
- art_space: upper-right: the blank mint shutter face receding near the camera (x ~36-82 %, top ~20 %); upper-left, a little lower: the bright sky beyond the eave edge (x ~0-40 %, y ~15-30 %) - not on faces or keys
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ម៉េចក៏កូនសោលោក ដូចរបស់ខ្ញុំបេះបិទ?"
  - text_ko: "왜 태오 씨 열쇠가 제 거랑 똑같아요?"
  - place: x 58% · y 10% · w 42% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "កូនសោលោកតាខ្ញុំ។"
  - text_ko: "할아버지 열쇠입니다."
  - place: x 20% · y 24% · w 40% · tail ↘
  - read_order: 2

### panel_024
- art_space: upper third of the image across the full width (blank mint shutter face); the small hook sits at the very top edge above this band (or just out of frame); Okja's raised hands and all heads stay below it
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "លោកស្រីប្រធាន! តូបនេះរបស់ខ្ញុំមែនទេ?"
  - text_ko: "회장님! 여기 제 칸 맞죠?"
  - place: x 56% · y 18% · w 44% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 옥자
  - type: dialogue
  - text_km: "ក្មួយតេអូ?!"
  - text_ko: "태오야?!"
  - place: x 16% · y 24% · w 26% · tail ↙
  - read_order: 2

### panel_025
- art_space: upper fifth of the image, full width: the blank shutter face above Okja's perm - off her face and the keys
- gap_after: 40
- bubble_1:
  - speaker: 옥자
  - type: dialogue
  - text_km: "ស្លាប់ហើយ… កូនសោពិតទាំងពីរ!"
  - text_ko: "아이고… 둘 다 진짜네!"
  - place: x 50% · y 9% · w 39% · tail ↓
  - read_order: 1

### panel_026
- art_space: upper third of the image across the full width: blank shutter face above Okja - clear of her raised hand and face
- gap_after: 40
- bubble_1:
  - speaker: 옥자
  - type: dialogue
  - text_km: "អ៊ំប្រាប់ក្មួយតេអូ ឲ្យបើកបន្តដូចលោកតាមូន…"
  - text_ko: "태오한텐 문 영감님처럼 계속 열라고 해 놓고…"
  - place: x 24% · y 9% · w 46% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 옥자
  - type: dialogue
  - text_km: "ក្មួយដាន់ប៊ីដាក់ពាក្យ អ៊ំក៏ឲ្យកូនសោថ្មីទៅ!"
  - text_ko: "단비 씨가 신청을 하니까 새 열쇠를 줬지 뭐야!"
  - place: x 66% · y 20% · w 34% · tail ↙
  - read_order: 2

### panel_027
- art_space: top ~60 % of the image across the full width: blank shutter face and eave underside, with only the small hook at the very top centre; Okja's raised hand-blade (frozen at chest height) and all three heads stay below it
- gap_after: 40
- bubble_1:
  - speaker: 옥자
  - type: dialogue
  - text_km: "រហូតដល់ចប់រដូវភ្លៀង ចែកគ្នាពាក់កណ្ដាល។"
  - text_ko: "장마 끝날 때까지 반반."
  - place: x 21% · y 16% · w 40% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 옥자
  - type: dialogue
  - text_km: "អ្នកណាបង់ថ្លៃជួលរដូវក្ដៅ ម្ដងពីរខែបាន អ្នកនោះបាននៅ។"
  - text_ko: "여름 두 달 치를 한 번에 낼 수 있는 사람이 남는다."
  - place: x 42% · y 47.5% · w 58% · tail ↓
  - read_order: 2

### panel_028
- art_space: top ~57 % of the image across the full width: blank shutter face (the shutter box and the hook just out of frame above) - both heads, the bare floor and the tape roll stay below it
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អ៊ីចឹង… ភ្លៀងមក លោកលក់ដាច់។ មេឃស្រឡះ ខ្ញុំលក់ដាច់។"
  - text_ko: "그러니까… 비 오면 태오 씨가 잘 팔고, 해 나면 제가 잘 팔고."
  - place: x 44% · y 13% · w 56% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "រដូវភ្លៀង មានតែប្រាំមួយសប្ដាហ៍។ បន្ទាប់មក រដូវក្ដៅ។"
  - text_ko: "장마는 6주뿐입니다. 그다음은 여름입니다."
  - place: x 30% · y 41.5% · w 58% · tail ↙
  - read_order: 2

### panel_029
- art_space: upper third of the image from x ~13 % to ~84 %, just under the rolled shutter box: the dark open storage interior and the eave underside; the small hook under the box stays at the very top edge above this band
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "សុំមួយចំអាមទៀតណា៎!"
  - text_ko: "한 뼘만 더요!"
  - place: x 29% · y 16% · w 30% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "កង់រទេះខ្ញុំ វាលៀនចេញបន្តិច…"
  - text_ko: "카트 바퀴가 좀 튀어나와서요…"
  - place: x 64% · y 21% · w 36% · tail ↘
  - read_order: 2

### panel_030
- art_space: upper fifth of the image (x ~14-66 %): the dark, flat storage interior and eave underside above Taeo's head
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ទទឹងបីម៉ែត្រហុកសិប។ ម្ខាង មួយម៉ែត្រប៉ែតសិប។"
  - text_ko: "폭 3미터 60. 한쪽에 1미터 80입니다."
  - place: x 40% · y 9% · w 48% · tail ↓
  - read_order: 1

### panel_031
- art_space: upper third of the image across the full width: the dark storage interior and eave underside (the hook, if in frame, small at the very top edge) - not on faces
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ឆ្អឹងទីបី។ កោងហើយ។"
  - text_ko: "세 번째 살. 휘었네요."
  - place: x 58% · y 11% · w 42% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "ទីបី រាប់ពីឆ្វេង។"
  - text_ko: "왼쪽에서 세 번째입니다."
  - place: x 19% · y 22% · w 34% · tail ↓
  - read_order: 2

### panel_032
- art_space: upper-left half of the image (x ~0-50 %, top ~35 %): the dark storage interior and eave underside, at least one cloud-width from the flat cloud in the top-right corner
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "កាំបិតឈូសទឹកកក។ មុំត្រឹមត្រូវ។"
  - text_ko: "빙삭기 날. 각이 정확합니다."
  - place: x 20% · y 10% · w 36% · tail ↓
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "អូយ… របស់ថោកៗទេ… អត់… មិនមែនអ៊ីចឹងទេ…"
  - text_ko: "아유… 싼 거예요… 아니, 그게 아니라…"
  - place: x 25% · y 28% · w 48% · tail ↘
  - read_order: 2

### panel_033
- art_space: the clear sky band over the plaza, centre-right (x ~44-76 %), above Mansik and just below the eave edge - on the opposite side from the cloud at the upper-left, not in the plane tree
- gap_after: 40
- bubble_1:
  - speaker: 만식
  - type: dialogue
  - text_km: "ចង្អូរលេចហើយ!"
  - text_ko: "물받이 새네!"
  - place: x 60% · y 28% · w 36% · tail ↙
  - read_order: 1

### panel_034
- art_space: upper-left half of the image (x ~0-52 %, top ~34 %): the dark storage interior and eave underside on the arch side; the cloud stays in the top-right corner
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ចាស ចាស ចាស! ចង្អូរលេច!"
  - text_ko: "네네네! 물받이요!"
  - place: x 20% · y 9% · w 35% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "«វាសម្រាប់បាំងថ្ងៃ។» កញ្ញានិយាយអ៊ីចឹង អម្បាញ់មិញ។"
  - text_ko: "'해 가리는 거예요.' 아까 그러셨죠."
  - place: x 26.5% · y 25% · w 51% · tail ↙
  - read_order: 2

### panel_035
- silent: true
- art_space: none
- gap_after: 480

### panel_036
- art_space: upper-left third of the image (left ~47 % x top ~28 %): warm late-afternoon sky over the plaza toward the arch
- gap_after: 40
- bubble_1:
  - speaker: 보미
  - type: dialogue
  - text_km: "បងស្រី! ឆ័ត្របងក៏ខូចដែរ!"
  - text_ko: "언니! 언니 우산도 고장 났다!"
  - place: x 24% · y 8% · w 44% · tail ↓
  - read_order: 1
- bubble_2:
  - speaker: 보미
  - type: dialogue
  - text_km: "រុំស្កុតទៀត!"
  - text_ko: "테이프도 감았어!"
  - place: x 18% · y 22% · w 28% · tail ↓
  - read_order: 2

### panel_037
- art_space: lower-left third of the image (x ~0-45 %, y ~65-90 %): dry sunlit pavement and long shadows beside Danbi, outside the rain column - never in the upper-right with the cloud
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "នេះ… ចេតនារុំទេ!"
  - text_ko: "이건… 일부러 감은 거야!"
  - place: x 22% · y 72% · w 38% · tail ↗
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ម៉ូដសម័យនេះទេតើ…"
  - text_ko: "요즘 이게 유행이거든…"
  - place: x 24% · y 82% · w 44% · tail ↗
  - read_order: 2

### panel_038
- art_space: lower-left third of the image (x ~0-40 %, y ~64-80 %): dry sunlit pavement beside Taeo's legs, far from the cloud at the top-right
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "បូមី។ ឆ័ត្រ។"
  - text_ko: "보미. 우산."
  - place: x 22% · y 72% · w 30% · tail ↖
  - read_order: 1

### panel_039
- silent: true
- art_space: none
- gap_after: 120

### panel_040
- silent: true
- art_space: none
- gap_after: 120

### panel_041
- art_space: two empty areas: a calm band across the top ~14 % of the image, centre-right (x ~36-80 %), on the plain shutter-box housing and eave edge above the hook; and the upper-left quarter on the arch side just below it (x ~6-32 %, y ~15-26 %) on the blank shutter face - the hook, the crook handle, the hanging umbrella and the bent rib stay clear
- gap_after: 120
- bubble_1:
  - speaker: 단비 (화면 밖)
  - type: dialogue
  - text_km: "ព្យួរឲ្យស្ងួតទេណា៎! មិនមែនផ្ញើជួសជុលទេ!"
  - text_ko: "말리려고 걸어 두는 거예요! 맡기는 거 아니에요!"
  - place: x 58% · y 7% · w 40% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오 (화면 밖)
  - type: dialogue
  - text_km: "បាទ។"
  - text_ko: "네."
  - place: x 20% · y 20% · w 22% · tail ↙
  - read_order: 2

### panel_042
- silent: true
- art_space: none
- gap_after: 120

### panel_043
- silent: true
- art_space: none
- gap_after: 120

### panel_044
- silent: true
- art_space: none
- gap_after: 120

### panel_045
- silent: true
- art_space: none
- gap_after: 120

### panel_046
- silent: true
- art_space: none
- gap_after: 120

### panel_047
- silent: true
- art_space: none
- gap_after: 120

### panel_048
- silent: true
- art_space: two empty areas: a calm band across the top ~14 % of the image, centre-right (x ~36-80 %), on the plain shutter-box housing and eave edge above the hook; and the upper-left quarter on the arch side just below it (x ~6-32 %, y ~15-26 %) on the blank shutter face - the hook, the crook handle, the hanging umbrella and the bent rib stay clear
- gap_after: 480

### panel_049
- art_space: upper-right third of the image (x ~51-86 %, top ~36 %): the blank mint shutter face right of the hook - the hook and the hanging umbrella stay clear (keep the umbrella narrow, left of x ~51 %)
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ឆ័ត្រម្សិលមិញ… មិនមែនផ្ញើទេណា៎!"
  - text_ko: "어제 그 우산… 맡긴 거 아니에요!"
  - place: x 68% · y 10% · w 32% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ព្យួរឲ្យស្ងួតប៉ុណ្ណោះ!"
  - text_ko: "말리려고 건 거예요!"
  - place: x 70% · y 28% · w 30% · tail ↘
  - read_order: 2

### panel_050
- art_space: upper-left third of the image (x ~0-42 %, top ~28 %): the receding blank shutter face above Taeo's head - the hook and Danbi's umbrella (mid-ground) stay clear
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ស្ងួតហើយ។"
  - text_ko: "말랐습니다."
  - place: x 16% · y 8% · w 28% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "ឆ្អឹងទីបី។ ប្ដូរហើយ។"
  - text_ko: "세 번째 살. 갈았습니다."
  - place: x 21% · y 20% · w 38% · tail ↘
  - read_order: 2

### panel_051
- art_space: upper fifth of the image, centre-to-right (x ~16-86 %): the soft, shadowed eave underside / shutter - clear of Taeo's hand and the yellow handle at the left edge
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ប្ដូរ… ប្ដូរហើយ? ខ្ញុំ… គឺថា…"
  - text_ko: "가, 갈았…? 저는… 그러니까…"
  - place: x 34% · y 10% · w 32% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "អត់… មិនមែនអ៊ីចឹងទេ…"
  - text_ko: "아니, 그게 아니라…"
  - place: x 68% · y 10% · w 32% · tail ↙
  - read_order: 2

### panel_052
- art_space: lower-left of the image (x ~10-40 %, y ~74-88 %): dry sunlit pavement in the foreground, far from the cloud at the top-right
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "…ហ៎?"
  - text_ko: "…어?"
  - place: x 24% · y 80% · w 20% · tail ↗
  - read_order: 1

### panel_053
- silent: true
- art_space: none
- gap_after: 120

### panel_054
- silent: true
- art_space: none
- gap_after: 900

### panel_055
- art_space: upper-left of the image (x ~0-44 %, top ~34 %): the blank shutter face above Taeo's head and below the eave line; plus a patch at mid-height in the gap between the two figures, just left of the rain column (x ~28-58 %, y ~44-60 %) for the rain sound - never on the cloud or a face
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ទឹកស្រក់ពីចុងដំបូលទេ!"
  - text_ko: "이거 처마 물이에요!"
  - place: x 22% · y 9% · w 40% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្លៃជួសជុល ស្អែកខ្ញុំសងជាមិនខាន!"
  - text_ko: "수선비는 내일 꼭 드릴게요!"
  - place: x 24% · y 25% · w 37% · tail ↘
  - read_order: 2
- sfx_1:
  - text_km: "ព្រួស ព្រួស ព្រួស!"
  - text_ko: "후두두두둑"
  - place: x 43% · y 52% · size 4.8% · rot 25

### panel_056
- art_space: upper-left of the image (x ~0-44 %, top ~20 %): the blank shutter face above Taeo's shoulder - well away from the rain curtain at the right
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ឥឡូវ បើភ្លៀងធម្មតា វាលែងក្រឡាប់ហើយ។"
  - text_ko: "이제 웬만한 비엔 안 뒤집혀요."
  - place: x 22% · y 9% · w 41% · tail ↘
  - read_order: 1

### panel_057
- art_space: left edge of the image at mid-to-lower height (x ~0-30 %, y ~55-70 %): dry sunlit blank shutter face below Danbi's leaning head, outside the rain column and more than a cloud-width from the cloud
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "…ចាស?"
  - text_ko: "…네?"
  - place: x 14% · y 62% · w 24% · tail ↗
  - read_order: 1

### panel_058
- art_space: upper-left fifth of the image (x ~0-35 %, top ~18 %): the blank shutter face - away from the rain at the right
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "…អត់ទេ។"
  - text_ko: "…아뇨."
  - place: x 16% · y 9% · w 26% · tail ↘
  - read_order: 1

### panel_059
- silent: true
- art_space: none
- gap_after: 480

### panel_060
- silent: true
- art_space: none
- gap_after: 480

### panel_061
- silent: true
- art_space: none
- gap_after: 120

### panel_062
- art_space: bottom sixth of the image, full width: plain soft-focus pink canopy fabric (caption strip) - nothing important there
- gap_after: 40
- bubble_1:
  - speaker: 캡션
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 48% · y 92% · w 52%
  - read_order: 1
