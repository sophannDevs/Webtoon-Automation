# EP02 레터링 스펙 — 「맑은 날의 우산」 EP2 「가게 표시」 · letterer

- 작성: letterer · 2026-11-26 · Flow-by-hand + Khmer edition · v1
- 입력: `03_episode/ep02_script_final.md`(검수 완료 최종본 · `KM:` 줄이 크메르어 원본 · `km_review.py gate` OK), `04_visual/ep02_shotlist.md`(패널별 구도 · art_space 초안 · gap · FL7 · FL10 · FL11), `04_visual/style-bible.md` §8 · E6, brief 「EP02」 locked 1–8 · rulings UA–UF, `02_story/glossary_km.md`, 형식은 `04_visual/ep01_lettering.md`, 뷰어 `.claude/skills/webtoon-khmer-edition/assets/viewer-km.html`(말풍선 CSS).
- **이미지에는 글자가 없다.** 뷰어(`km_tool.py build`)가 이 파일대로 말풍선을 그리고 크메르어를 쓴다. prompt-smith는 각 패널의 `art_space`(영어 한 줄)를 그대로 프롬프트에 넣는다: `Keep <art_space> as calm, empty background with no important details (a speech bubble will be added there later).` panel-validator는 C3(b)에서 그 자리가 실제로 비었는지 본다.
- **FL10 / UF:** 이 파일의 `art_space`가 최종 문장이다. prompt-smith는 샷리스트 + 이 파일의 art_space로 프롬프트를 쓰고, 샷리스트의 art_space 줄은 이 파일에 맞춰 동기화한다(바뀐 패널은 §2).
- 패널 **60** = `panel_001`–`panel_060` (대본 P01–P60, 번호·순서 같음). 말풍선 **70** + 끝 캡션 1 (panel_060, `narration`) = 뷰어 bubble 71 · 효과음 **1** (panel_028) · env 0 · 대사 패널 46 · 글자 없는 패널 12 (`silent: true`, `art_space: none`: 001 · 005 · 018 · 032 · 034 · 037 · 039 · 045 · 047 · 054 · 055 · 057) + 효과음만 있는 panel_028 + 끝 캡션만 있는 panel_060.
- `text_km`은 손으로 치지 않았다. 스크립트가 대본의 `KM:` · `KM 효과음:` · `KM 캡션:` 줄을 읽어 글자 하나 바꾸지 않고 옮겼다. 대본의 따옴표 하나 = 말풍선 하나(대본이 둘로 나눈 줄은 여기서도 `bubble_1`·`bubble_2`). `text_ko`는 참고용이고 뷰어에 나오지 않는다. 화자 이름은 대본의 한국어 이름, 화면 밖 화자는 `(화면 밖)`.

## 0. 읽는 법 · 규칙

| 항목 | 규칙 |
|---|---|
| `place` | `x NN% · y NN% · w NN% · tail ↙` — x, y = 말풍선 **중심**, w = 최대 폭. 모두 그 패널 폭(x, w)·높이(y)의 %. |
| **x + w ≤ 100** | 뷰어는 말풍선을 `left: x%`에 놓고 가운데 정렬하므로 폭이 최대 (100 − x)%로 잘린다. 오른쪽에 둘수록 좁아진다: 중심 x 60 → 최대 40 %, 70 → 30 %. 그래서 긴 한 줄은 화면 가운데를 넘는다(§2). 모든 말풍선 x + w ≤ 100, w ≤ 61. |
| 줄 수 | 크메르어 **한 줄이 기본**, 자리가 모자라면 **두 줄**(Battambang, 패널 폭 360 · 430 · 720 px에서 실측, §1). 53 말풍선 + 캡션이 한 줄, 17 말풍선이 두 줄, 세 줄 0. 두 줄은 w를 줄바꿈이 띄어쓰기나 낱말 경계에 오도록 골랐다(글로서리에서 띄어 쓴 이름 — សូ ដាន់ប៊ី 등 — 은 뷰어가 한 줄로 묶는다). |
| 크기 | 뷰어 글자 = 패널 폭의 3.4 %, 줄 높이 1.7, 안쪽 여백 0.7em/1.2em. 말풍선 높이(꼬리 제외) ≈ 1줄 12 % · 2줄 17.8 % **패널 폭** → 패널 높이로는 3:4 에서 1줄 9 % · 2줄 13.4 %, 4:3 에서 1줄 16 % · 2줄 24 %, 1:1 에서 1줄 12 % · 2줄 18 %, 9:16 에서 1줄 7 % · 2줄 10 %, 16:9 에서 1줄 21 % · 2줄 32 %. 꼬리는 약 0.8em(패널 폭의 ~2.7 %) 더 나온다. |
| 두 화자 | 한 패널 말풍선 ≤ 2. **먼저 말하는 쪽이 위**(같은 높이면 왼쪽). 세로로 쌓는 두 말풍선은 3:4 에서 중심 간격 ≥ 14 %(폴백 글꼴에서 두 줄이 돼도 겹치지 않게). |
| `tail` | `↙ ↓ ↘` = 말풍선 아래 꼬리(왼쪽 · 가운데 · 오른쪽) — 화자가 말풍선 아래에 있을 때. `↖ ↑ ↗` = 위 꼬리 — 화자가 말풍선보다 위에 있을 때(아래쪽 자리의 말풍선: panel_021 · 031 · 046). 화면 밖 화자는 그 가장자리 쪽: panel_033 만식 ↙(왼쪽 = 앞마당), panel_050 태오 ↘(오른쪽 = 셔터 쪽). 옆으로 향한 꼬리는 뷰어에 없다. 나레이션(panel_060)은 꼬리 없음. |
| `art_space` | 영어 한 줄 = 그 이미지에서 **비워 둘 자리**. 이 파일의 말풍선은 모두 그 안에 있다(얼굴 · 손 · 손잡이 · 노란 실/우산 · 열쇠 · 열쇠 구멍 · 고리 · 동전 · 양철통 · 저금병 · 남색 자락 · 리본 없는 흰 손잡이 · 금빛 방울 · 구름 · 빗줄기 기둥 위 없음, 구름에서 구름 폭 하나 이상). 샷리스트 초안 문장을 옮기되 뷰어 때문에 넓히거나 옮긴 곳은 그 자리를 적었다(§2). 무대사 패널은 `none`. |
| `gap_after` | 패널 뒤 간격, 뷰어 px. **S = 40 · M = 120 · L = 480 · XL = 900.** 대본 ⟨gap⟩ 그대로: XL = 059 · L = 039 · 047 · 055 · M = 001 · 005 · 008 · 016 · 023 · 033 · 037 · 041 · 045 · 053 · 054 · 057 · 나머지 S (060은 마지막 패널, 40). |
| `sfx` | `x NN% · y NN% · size N% · rot N` — x, y = 중심, size = 글자 크기(패널 폭의 %), rot = 도(+ = 시계 방향). 뷰어가 Koulen 굵은 흰 글자 + 검은 외곽선으로 쓴다(한 줄). panel_028 「ព្រួស ព្រួស ព្រួស!」 = Koulen 6.54em → size 4.4 % 에서 폭 ~29 %(x ~65–93 %), 높이 ~8 % 폭 = 9:16 높이의 ~4.5 %. |
| `read_order` | 패널 안 읽는 순서 = 대본 순서. 위 → 아래, 같은 높이면 왼쪽 → 오른쪽. |
| 반복 · 메아리 | panel_010 ↔ panel_011 ①(같은 문장 「ម្ភៃប្រាំឆ្នាំ។」): 같은 한 줄 모양 · 같은 y 9 · 비슷한 x(25 → 22) — 흉내가 그림으로도 겹친다. panel_036 ↔ panel_043(「គ្រាន់តែ…」 참말 버릇): 둘 다 한 줄, 화면 위쪽. panel_046 「បាទ។」 · panel_059 「…បាទ។」: 둘 다 작은 한 줄. |

## 1. 긴 말풍선 · 줄바꿈 실측

측정: 스크래치 페이지에 뷰어의 `.bubble` CSS를 그대로 쓰고, 이 파일의 실제 크메르어를 실제 x · y · w로 패널 폭 360 · 430 · 720 px(각 화면비)에 그려 줄 수와 줄바꿈 위치를 셌다(Chrome, Battambang = Google Fonts / 폴백 = Windows `Khmer UI`). em = 한 줄로 늘어놓은 길이(글자 크기 기준). 결과: Battambang에서 **모든 말풍선 ≤ 2줄**, 세 폭 모두 같은 줄 수, 같은 패널 안 말풍선끼리 겹침 0, 패널 밖으로 나감 0.

| 패널 · 풍선 | 화자 | 한 줄 길이 em (Battambang / 폴백) | w | 줄 (Battambang 360·430·720 / 폴백) | Battambang 줄바꿈 (360 px) |
|---|---|---|---|---|---|
| panel_042 ② | 단비 | 19.7 / 22.7 | 54 % | 2·2·2 / 2 | …ចុះព្រឹកម្សិលមិញ លោកថាម៉េច? ⏎ ទឹកស្រក់លាន់ពេក… |
| panel_021 ① | 단비 | 17.7 / 19.8 | 46 % | 2·2·2 / 2 | អំបោះលឿង… គ្រាន់តែជា ⏎ សញ្ញាសម្គាល់ហាងទេ… |
| panel_012 ② | 태오 | 16.3 / 19.2 | 46 % | 2·2·2 / 2 | «ខ្ញុំលែងមកទៀតហើយ។» ⏎ កញ្ញានិយាយអ៊ីចឹង។ |
| panel_044 ① | 단비 | 15.7 / 18.9 | 42 % | 2·2·2 / 3 | បើតែមួយឃ្លា លោក ⏎ និយាយម្ដងទៀតក៏បាន… |
| panel_046 ① | 단비 | 15.3 / 17.9 | 46 % | 2·2·2 / 2 | ថ្លៃជួសជុល… ថ្ងៃណាមួយ ⏎ ខ្ញុំសងជាមិនខាន! |
| panel_051 ① | 단비 | 15.1 / 17.5 | 40 % | 2·2·2 / 2 | យកនេះទៅប្រើសិន។ ⏎ ស្អែកយកមកវិញណា៎! |
| panel_013 ② | 단비 | 14.6 / 17.5 | 61 % | 1·1·1 / 2 | (한 줄) |
| panel_027 ② | 단비 | 14.3 / 16.5 | 61 % | 1·1·1 / 2 | (한 줄 — 「អរគុ…」에서 끊기는 것은 대본 의도) |
| panel_006 ① | 단비 | 14.0 / 16.2 | 59 % | 1·1·1 / 2 | (한 줄) |
| panel_007 ② | 단비 | 13.1 / 15.6 | 57 % | 1·1·1 / 2 | (한 줄) |

- **panel_042 ②(이 회차 최장, 45자)**: 위 1/3 전폭 띠 안에서 w 54 % 두 줄, 줄바꿈이 「?」 바로 뒤에 온다(w 52–54 %에서만 — 더 좁히면 「លោកថាម៉េច?」가, 더 넓히면 「ទឹកស្រក់」가 갈린다). ①은 그 위 한 줄.
- **panel_021 ①**: w 46 %에서 줄바꿈이 「…គ្រាន់តែជា」 뒤에 와서 회차 제목 말 「សញ្ញាសម្គាល់ហាង」이 한 줄에 온전히 남는다(w 50 % 이상이면 「សញ្ញា ⏎ សម្គាល់」로 갈린다).
- **panel_012 ②**: w 42–46 %에서만 줄바꿈이 « » 인용 바로 뒤에 온다(인용과 「កញ្ញានិយាយអ៊ីចឹង។」이 줄로 나뉜다).
- 그 밖의 두 줄 말풍선(줄바꿈): panel_004 ② រទេះអើយ ស្អែក ⏎ ម៉ោងប្រាំ… · panel_016 ① ទឹកកកឈូសស្ត្របឺរី! ⏎ យកតែស្ត្របឺរី! · panel_025 អឹះ… ឯងម៉េចក៏ ⏎ គាំងចំថ្ងៃនេះ…! · panel_033 ① ក្មួយតេអូ ថ្ងៃនេះ ⏎ លក់ដាច់ហើយ! · panel_040 ① ថ្លៃជួសជុល! ខ្ញុំថា ⏎ ស្អែកសង មែនទេ? · panel_040 ② ថ្ងៃនេះ ជាស្អែក ⏎ នោះហើយ! · panel_044 ② អត់… មិនមែន ⏎ អ៊ីចឹងទេ… · panel_049 ① អើ… នោះលេច ⏎ ទឹកហើយ? · panel_049 ② លោកតាខ្ញុំ ⏎ ជាអ្នកព្យួរ។ · panel_056 ① គេថា ផ្កាខាងចំណត ⏎ ស្អាតជាងគេ! · panel_056 ② …អ្នកណាថា? ⏎ គឺខ្ញុំឯង។
- 일부러 한 줄 대신 두 줄로 둔 곳(자리를 넓히면 핵심 그림을 덮는다): panel_016 ①(보미, 두 외침이 줄로 나뉨), panel_025(파라솔 왼쪽), panel_033 ①(FRONT 왼쪽 위 남색 자락 모서리), panel_040 ①②(뻗은 팔 위), panel_044 ①②(위 1/4 띠), panel_049 ①②(자락 반대편). panel_049 ①의 줄바꿈은 「លេច ⏎ ទឹក」로 낱말 경계지만 한 덩어리 말이 갈린다 — 자락 쪽으로 넓히지 않으려고 받아들였다. 한 줄로 바꾸려면 x 58 · w 42 (x ~37–79 %)가 필요하다.
- 한 줄 최소 폭(Battambang, 360 px)에 맞춰 w를 골랐다: 예) panel_007 ② 56 → 57, panel_013 ② 60 → 61, panel_038 48 → 49, panel_041 46 → 47, panel_059 22 → 23(20 %에서는 「… ⏎ បាទ។」로 갈렸다).

## 2. 샷리스트 art_space에서 바꾼 패널 (FL10 → panel-director 동기화, prompt-smith는 이 파일 문장 사용)

뷰어 규칙(x + w ≤ 100, 오른쪽일수록 좁아짐), 한 줄 우선, ≤ 2줄, 읽기 순서 때문에 샷리스트 초안 자리에 둘 수 없던 곳. **이 파일의 `art_space`는 이미 바뀐 자리로 적었다.** 얼굴 · 핵심 소품을 덮는 대신 이렇게 바꿨다.

1. P02: Danbi's area starts at x ~42 % instead of ~50 % (a one-line bubble 37 % wide centred at x 62 reaches x 43.5).
2. P03: Same area; Danbi's bubble sits one row lower across the centre instead of the right half (side by side, her line would need three lines).
3. P07: Same band; Danbi's bubble runs across the centre (x ~14-72 %) one row below Taeo's instead of the right half only (a one-line bubble 57 % wide).
4. P13: Same band; ② runs across the centre (x ~9-70 %) one row below ① instead of the right half (a one-line bubble 61 % wide).
5. P17: Grandma's area widened to x ~1-49 % (one-line bubble 46 % wide) and Taeo's moved a little lower (y ~20-39 %) so the two do not overlap.
6. P20: Taeo's area starts at x ~36 % instead of ~52 % (a one-line bubble 42 % wide must cross the centre); heads below y ~30 %.
7. P22: Area x ~16-48 % widened to ~14-54 % so the line fits on one row (38 %); still clear of the flap and below the hook.
8. P24: Area x ~40-90 %, y ~4-22 % moved to x ~30-78 %, y ~4-32 % (the viewer cannot fit a one-line bubble 46 % wide further right; one line is ~20 % of a 16:9 height).
9. P27: Same band; ② runs across the centre (x ~9-70 %) one row below ① instead of the right half (a one-line bubble 61 % wide).
10. P30: Band kept but taller (y ~4-32 % instead of ~4-20 %): a one-line bubble is ~20 % of a 16:9 height (two lines with the offline fallback font).
11. P31: Danbi's lower-third area widened from x ~24-62 % to ~20-66 % (one-line bubble 45 % wide).
12. P35: Area x ~50-94 % moved to x ~41-81 % (a one-line bubble 39 % wide cannot sit further right in the viewer).
13. P38: Area upper-right third (x ~50-94 %) moved to the centre band x ~26-76 %, y ~4-24 % (one-line bubble 49 % wide; two lines would split ចូលចិត្ត).
14. P46: Taeo's reply moved from the upper-left (x ~4-30 %, y ~4-16 %) to the lower-left (x ~8-28 %, y ~82-94 %), below Danbi's bubble: the viewer reads top to bottom, so his reply at the top would be read before her line.
15. P48: Band kept but taller (y ~1-25 % instead of ~3-18 %): a one-line bubble is ~20 % of a 16:9 height.

- 작은 조정(자리 성격은 같고 범위만 말풍선에 맞춰 좁히거나 조금 늘림, 동기화만 하면 됨): panel_006 · 008 · 012 · 015 · 016 · 028(SFX 자리 y ~33–43 %) · 040 · 049 · 056 · 059.
- **panel_046 (FL7 확인):** 단비의 38자 말풍선은 FL7대로 아래 1/3(구름 반대편)에 두 줄로 들어간다. 다만 태오의 「បាទ។」를 초안대로 왼쪽 위에 두면 뷰어에서 위 → 아래로 읽혀 그의 대답이 그녀의 선언보다 먼저 나온다. 그래서 그녀 말풍선 바로 아래 왼쪽(의자 앞 바닥)으로 내렸다. 구도는 FL7 그대로 — 무릎 위 프레이밍, 카메라 살짝 내려다봄, 아래 가운데 마른 바닥과 테이프 선 — 이고, 아래 왼쪽 모서리(x ~8–28 %, y ~82–94 %)에 그의 발·의자 다리가 오지 않게만 하면 된다.
- **panel_030 (FL11):** 손님 대사로 두었다(대본 화자). 말풍선은 가운데 왼쪽 하늘(x ~24–52 %), 꼬리 ↘가 오른쪽 아래 줄 선 손님 쪽 — 구름(오른쪽)과는 화면 반 이상 떨어진다. 군중 목소리로 읽혀도 크메르어는 같다.
- **panel_033 · panel_050 (화면 밖 화자):** 만식은 왼쪽 위(앞마당 쪽) 꼬리 ↙, 태오는 오른쪽 말풍선 꼬리 ↘(셔터를 따라 화면 오른쪽 밖).

## 3. 폴백 글꼴에서만 달라지는 말풍선

Google Fonts(Battambang)를 못 받는 오프라인 독자는 기기 글꼴(Windows `Khmer UI` 등, 15–25 % 넓음)로 본다. 한 줄 말풍선 대부분이 폴백에서 두 줄이 되고, 아래 여섯은 세 줄이 된다. 자리는 그 높이까지 비도록 y를 잡았고(쌓은 두 말풍선은 폴백에서도 겹치지 않는다 — 실측), 폭을 넓히면 Battambang 줄바꿈이 낱말 가운데로 가거나 자리를 벗어나서 그대로 둔다.

1. panel_033 ① (만식, w 32 %): ក្មួយតេអូ ថ្ងៃ ⏎ នេះលក់ដាច់ ⏎ ហើយ!
2. panel_040 ① (단비, w 34 %): ថ្លៃជួសជុល! ខ្ញុំថា ⏎ ស្អែកសង ⏎ មែនទេ?
3. panel_044 ① (단비, w 42 %): បើតែមួយឃ្លា លោក ⏎ និយាយម្ដងទៀត ⏎ ក៏បាន…
4. panel_044 ② (단비, w 30 %): អត់… ⏎ មិនមែន ⏎ អ៊ីចឹងទេ…
5. panel_049 ② (태오, w 24 %): លោកតា ⏎ ខ្ញុំជាអ្នក ⏎ ព្យួរ។
6. panel_056 ① (단비, w 34 %): គេថា ផ្កាខាង ⏎ ចំណត ស្អាត ⏎ ជាងគេ!

- 폴백에서만 닿는 곳: panel_017 할머니 말풍선(폴백 두 줄)의 오른쪽 아래 둥근 모서리와 태오 말풍선의 왼쪽 위 둥근 모서리가 x ~43–48 % 에서 거의 맞닿는다(직사각형으로는 겹치고, 알약 모양으로는 닿을 듯 말 듯). Battambang에서는 1 % 떨어져 있다. 폴백을 위해 넓히면 Battambang 한 줄이 무너져 그대로 둔다.
- panel_003은 두 말풍선 폭을 폴백 한 줄 폭(46 % · 56 %)으로 잡아 폴백에서도 한 줄이다.

## 4. 배치 패스 플래그 (episode-compositor · panel-validator C3(b) — 이미지가 들어오면 먼저 볼 곳)

1. panel_017 (4:3): Taeo's one-line bubble sits at y ~21-37 % (x ~44-80 %) - check that the rail's ribbons and the black umbrella he lifts stay below it; if not, nudge it up to y 27 and Grandma's to y 11.
2. panel_020 (3:4): Taeo's bubble crosses the centre at y ~18-28 % (x ~38-78 %) - Taeo is tall at screen-right; his head must be below y ~30 %.
3. panel_022 (4:3): one-line bubble at x ~15-53 %, y ~6-22 % - right of the navy flap and just under the hook; check the flap's fringe does not hang into it.
4. panel_024 / panel_030 (16:9): the bubbles reach y ~27 % (a one-line bubble is ~21 % of a 16:9 height) - check the distant white clouds (P24) and the opening umbrellas (P30) stay below/outside.
5. panel_026 (3:4): Taeo's bubble (x ~6-44 %, y ~5-15 %) vs the diagonal shaft of his folded yellow umbrella reaching to the latch - nothing yellow inside the bubble area.
6. panel_035 (3:4): bubble moved to the centre-right band (x ~42-80 %, y ~5-15 %) - check the flap at the top-left and the customer's head.
7. panel_038 (4:3): one-line bubble across the centre band (x ~28-74 %, y ~4-20 %) - check Danbi's bun (foreground right) and the leaving customers' heads.
8. panel_046 (3:4): Taeo's reply at the lower-left (x ~10-27 %, y ~84-93 %) - check his stool legs/feet; Danbi's bubble (x ~21-67 %, y ~68-82 %) must stay off her puddle at the right.
9. panel_049 (3:4): both bubbles at the right (x ~52-83 %, y ~3-33 %) - check Danbi's upturned face (mid-ground centre) and that the flap stays fully at the top-left.
10. panel_056 (3:4): both of Danbi's bubbles sit beside Taeo's head (as drafted) with tails ↙ to her - make sure they do not read as his lines (keep them clearly above/right of his head, off his face).
11. panel_021 (3:4): bubbles on the lower-left pavers (x ~5-51 %, y ~49-76 %) - Taeo and Grandma must stay small and above y ~45 % in the plaza.
12. panel_031 (4:3): Danbi's lower-third bubble (x ~22-64 %, y ~72-88 %) - outside her drip ring and off the tape line's far end.
13. panel_003 (1:1): Danbi's bubble bottom at y ~28.5 % - the keys and hands must start below y ~30 %.
14. panel_042 (3:4): ② bottom at y ~30 % - her head must stay below y ~34 % (Flow tends to fill the dark storage with clutter; ask for a plain dark interior).
15. panel_059 (3:4): small bubble at the top-right (x ~66-86 %, y ~3-13 %) - well away from his smile.

## 5. 패널

### panel_001
- silent: true
- art_space: none
- gap_after: 120

### panel_002
- art_space: two areas on the blank lowered shutter face: upper-right (x ~42-84 %, y ~6-19 %) above Danbi's raised key for her one-line bubble, and upper-left (x ~12-36 %, y ~17-30 %) above Taeo's bowed head, a little lower than hers (she speaks first) - her raised key stays below y ~30 %
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្ងៃនេះ ខ្ញុំមកមុនគេ…!"
  - text_ko: "오늘은 제가 일등…!"
  - place: x 62% · y 12% · w 37% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "ទីពីរ។"
  - text_ko: "두 번째입니다."
  - place: x 24% · y 23% · w 18% · tail ↓
  - read_order: 2

### panel_003
- art_space: top quarter of the image, full width (x ~3-73 %, y ~2-30 %): plain blank shutter face above the keys - Taeo's bubble at the upper left, Danbi's one row below it across the centre; the keys, both hands and the keyhole stay below y ~30 %
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "អ្នកមកមុន ជាអ្នកបើក។"
  - text_ko: "먼저 온 사람이 엽니다."
  - place: x 27% · y 8.5% · w 46% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ច្បាប់នេះ អ្នកណាជាអ្នកកំណត់?!"
  - text_ko: "그런 규칙 누가 정했어요?!"
  - place: x 44% · y 22.5% · w 56% · tail ↘
  - read_order: 2

### panel_004
- art_space: upper third of the image from x ~16 % to ~84 % (y ~4-31 %): the dark open storage interior under the rising shutter box - Taeo's small bubble at x ~16-44 %, Danbi's two-line bubble at x ~49-83 %; the flap (top-left corner, x < 16 %), the hook at the very top edge and the rag stay clear
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "លោកតាខ្ញុំ។"
  - text_ko: "할아버지."
  - place: x 30% · y 12% · w 27% · tail ↓
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "រទេះអើយ ស្អែកម៉ោងប្រាំ…"
  - text_ko: "카트야, 내일은 다섯 시다…"
  - place: x 66% · y 18% · w 32% · tail ↘
  - read_order: 2

### panel_005
- silent: true
- art_space: none
- gap_after: 120

### panel_006
- art_space: upper quarter of the image (x ~3-83 %, y ~4-30 %): the dark open storage interior and eave underside above her bun - bubble ① long (one line) at the upper left, bubble ② small at the right just below it; not over the parasol tip
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ដបសន្សំអើយ គេថាថ្ងៃនេះមេឃស្រឡះ។"
  - text_ko: "저금병아, 오늘은 해 난대."
  - place: x 33% · y 9% · w 59% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "…ខ្ញុំជាអ្នកកំណត់។"
  - text_ko: "…내가 정했어."
  - place: x 65% · y 23% · w 35% · tail ↙
  - read_order: 2

### panel_007
- art_space: upper third of the image under the shutter box (x ~3-72 %, y ~4-30 %): the dark open storage interior - Taeo's bubble at the upper left (he speaks first), Danbi's one-line bubble one row below, across the centre toward her side
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ម៉ោងបីរសៀល។ ភ្លៀងមួយមេ។"
  - text_ko: "오후 세 시. 소나기."
  - place: x 28% · y 9.5% · w 49% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "អត់ភ្លៀងទេ! មេឃស្រឡះពេញមួយថ្ងៃ!"
  - text_ko: "비 안 와요! 오늘은 하루 종일 해!"
  - place: x 43% · y 23.5% · w 57% · tail ↘
  - read_order: 2

### panel_008
- art_space: the pale sky band above Mansik, centre (x ~40-64 %, y ~10-34 %), just under the eave edge - not in the plane tree, not over the flap fringe
- gap_after: 120
- bubble_1:
  - speaker: 만식
  - type: dialogue
  - text_km: "ជុំទីពីរ!"
  - text_ko: "2라운드!"
  - place: x 52% · y 22% · w 20% · tail ↓
  - read_order: 1

### panel_009
- art_space: upper-left quarter of the image (x ~4-46 %, y ~4-17 %): pale morning sky over the plaza above Bomi's head, small bubble
- gap_after: 40
- bubble_1:
  - speaker: 보미
  - type: dialogue
  - text_km: "ពូ! ឆ័ត្រខូចទៀតហើយ!"
  - text_ko: "아저씨! 우산 또 고장 났어요!"
  - place: x 25% · y 10% · w 39% · tail ↘
  - read_order: 1

### panel_010
- art_space: upper-left fifth of the image (x ~10-40 %, y ~4-16 %): dark storage interior above Taeo's head
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ម្ភៃប្រាំឆ្នាំ។"
  - text_ko: "스물다섯입니다."
  - place: x 25% · y 9% · w 25% · tail ↘
  - read_order: 1

### panel_011
- art_space: upper quarter of the image (x ~8-84 %, y ~4-25 %): dark storage interior and the eave underside - Danbi's bubble at the left (higher), Bomi's at the right a little lower
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ម្ភៃប្រាំឆ្នាំ។"
  - text_ko: "스물다섯입니다."
  - place: x 22% · y 9% · w 26% · tail ↓
  - read_order: 1
- bubble_2:
  - speaker: 보미
  - type: dialogue
  - text_km: "ដូចបេះបិទ!"
  - text_ko: "똑같아!"
  - place: x 68% · y 18% · w 28% · tail ↓
  - read_order: 2

### panel_012
- art_space: left column of the image (x ~3-51 %, y ~4-33 %): plain dark storage interior beside his head - two bubbles stacked vertically (① above, ② below, two lines), clear of his face and of the umbrella ribs in the lower third
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ម្សិលមិញ ម៉ោងបួនដប់នាទី។"
  - text_ko: "어제 네 시 십 분."
  - place: x 27% · y 9% · w 45% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "«ខ្ញុំលែងមកទៀតហើយ។» កញ្ញានិយាយអ៊ីចឹង។"
  - text_ko: "'다신 안 와요.'"
  - place: x 27% · y 24% · w 46% · tail ↘
  - read_order: 2

### panel_013
- art_space: upper quarter of the image (x ~3-70 %, y ~4-30 %): eave underside and dark storage above her bun - ① at the upper left, ② (one long line) one row below across the centre; her hands stay below y ~32 %
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "នោះគ្រាន់តែនិយាយលេងទេ!"
  - text_ko: "그건 그냥 하는 말이죠!"
  - place: x 26% · y 9% · w 45% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ពាក្យហ្នឹង ខ្ញុំនិយាយជាងមួយរយដងហើយ!"
  - text_ko: "그런 말은 백 번도 넘게 했다고요!"
  - place: x 39% · y 23.5% · w 61% · tail ↘
  - read_order: 2

### panel_014
- art_space: upper-left third of the image (x ~10-34 %, y ~4-25 %): pale morning sky over the plaza above Taeo, clear of Mansik and the open clear umbrella
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ពីរដង។"
  - text_ko: "두 번입니다."
  - place: x 22% · y 14% · w 22% · tail ↘
  - read_order: 1

### panel_015
- art_space: top quarter of the image, centre (x ~20-74 %, y ~5-21 %): soft dark storage interior above her head - not over the syrup jar
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ស្ត្របឺរីអើយ… គាត់ចាំគ្រប់ពាក្យ…"
  - text_ko: "딸기야… 저 사람, 말을 다 외우나 봐…"
  - place: x 47% · y 12% · w 53% · tail ↓
  - read_order: 1

### panel_016
- art_space: upper-left (x ~4-46 %, y ~3-19 %) over the dark storage interior for Bomi's two-line bubble, and upper-right (x ~52-86 %, y ~15-27 %) over the pale plaza sky for Danbi's, a little lower
- gap_after: 120
- bubble_1:
  - speaker: 보미
  - type: dialogue
  - text_km: "ទឹកកកឈូសស្ត្របឺរី! យកតែស្ត្របឺរី!"
  - text_ko: "딸기 빙수! 딸기만!"
  - place: x 25% · y 11% · w 38% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ភ្ញៀវដំបូងថ្ងៃនេះ!"
  - text_ko: "오늘 첫 손님!"
  - place: x 69% · y 20.5% · w 31% · tail ↓
  - read_order: 2

### panel_017
- art_space: upper third of the image under the shutter box: Grandma's bubble at the upper-left (x ~1-49 %, y ~3-21 %), Taeo's below and to the right of it (x ~42-82 %, y ~20-39 %), over the dark storage interior - the rail's ribbons (mid-height) and the hook at the very top edge stay clear
- gap_after: 40
- bubble_1:
  - speaker: 할머니
  - type: dialogue
  - text_km: "ចៅ! ឆ័ត្រយាយរួចហើយឬនៅ?"
  - text_ko: "총각, 내 우산 다 됐수?"
  - place: x 25% · y 12% · w 46% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "បាទ។ តំណពីរកន្លែង។"
  - text_ko: "네. 이음매 두 군데."
  - place: x 62% · y 29% · w 38% · tail ↙
  - read_order: 2

### panel_018
- silent: true
- art_space: none
- gap_after: 40

### panel_019
- art_space: upper-left fifth of the image (x ~12-32 %, y ~4-15 %): plain dark storage interior, a small bubble
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អូ៎…"
  - text_ko: "아…"
  - place: x 22% · y 9% · w 16% · tail ↘
  - read_order: 1

### panel_020
- art_space: upper third of the image: Grandma's bubble upper-left (x ~1-51 %, y ~4-16 %), Taeo's one row lower from the centre to the right (x ~36-80 %, y ~18-30 %), over the dark storage interior and eave underside - both heads stay below y ~30 %
- gap_after: 40
- bubble_1:
  - speaker: 할머니
  - type: dialogue
  - text_km: "ដៃចៅ ដូចលោកតាមូនណាស់។"
  - text_ko: "손끝이 영감님 닮았네."
  - place: x 26% · y 9% · w 48% · tail ↓
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "មិនទាន់ស្មើលោកតាខ្ញុំទេ។"
  - text_ko: "아직 멀었습니다."
  - place: x 58% · y 23% · w 42% · tail ↘
  - read_order: 2

### panel_021
- art_space: lower-left of the image (x ~4-52 %, y ~47-77 %): sunlit, drying plaza pavers - two bubbles stacked (① two lines on top, ② one line below), on the opposite side and more than a cloud-width away from the cloud at the top-right; Taeo and Grandma stay small above this area
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អំបោះលឿង… គ្រាន់តែជាសញ្ញាសម្គាល់ហាងទេ…"
  - text_ko: "노란 실은… 그냥 이 가게 표시구나…"
  - place: x 28% · y 56% · w 46% · tail ↗
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ត្រូវហើយ… គឺអ៊ីចឹងឯង…"
  - text_ko: "그렇지, 그런 거지…"
  - place: x 30% · y 71% · w 42% · tail ↗
  - read_order: 2

### panel_022
- art_space: upper band of the image on the arch side (x ~14-54 %, y ~6-24 %): the dark storage interior right of the flap and under the hook (the hook sits at the very top edge, above y ~6 %) - opposite the cloud at the top-right, a long tail to Danbi
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្ងៃនេះ ថ្ងៃខ្លាំងណាស់…"
  - text_ko: "오늘 해가 세네…"
  - place: x 34% · y 14% · w 38% · tail ↘
  - read_order: 1

### panel_023
- art_space: upper-left of the image (x ~5-43 %, y ~4-17 %): dark storage interior and eave underside, away from the fading cloud at the top-right
- gap_after: 120
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "សូ ដាន់ប៊ី! លក់ដូរទៅ!"
  - text_ko: "소단비! 장사하자!"
  - place: x 24% · y 10% · w 37% · tail ↘
  - read_order: 1

### panel_024
- art_space: upper band of clear blue sky, centre-right (x ~30-78 %, y ~4-32 %), above the stall and the queue - not over the distant big white clouds' bright edges
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ទឹកកកឈូសស្ត្របឺរី! ត្រជាក់ៗ!"
  - text_ko: "딸기 빙수 있어요! 시원해요!"
  - place: x 54% · y 16% · w 46% · tail ↘
  - read_order: 1

### panel_025
- art_space: upper-left of the image (x ~6-42 %, y ~4-19 %): blazing clear sky over the plaza, left of the half-open parasol
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អឹះ… ឯងម៉េចក៏គាំងចំថ្ងៃនេះ…!"
  - text_ko: "읏… 너 왜 하필 오늘…!"
  - place: x 24% · y 11% · w 34% · tail ↘
  - read_order: 1

### panel_026
- art_space: upper-left of the image (x ~5-45 %, y ~4-17 %): blazing sky beyond the eave edge on the arch side, above Taeo - not over the yellow umbrella, the crook or the parasol
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ខ្ញុំមិនបានឆ្លងបន្ទាត់ទេ។"
  - text_ko: "선은 안 넘었습니다."
  - place: x 25% · y 10% · w 39% · tail ↓
  - read_order: 1

### panel_027
- art_space: upper quarter of the image (x ~4-70 %, y ~4-30 %): the plain underside of the pink parasol above her head - ① at the upper left, ② (one long line) one row below across the centre
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ខ្ញុំធ្វើខ្លួនឯងក៏បាន…"
  - text_ko: "혼자 할 수 있었는데…"
  - place: x 22% · y 9% · w 35% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "អត់… មិនមែនអ៊ីចឹងទេ… អរគុ… អត់…"
  - text_ko: "아니, 그게 아니라… 고맙… 아니…"
  - place: x 39% · y 23.5% · w 61% · tail ↓
  - read_order: 2

### panel_028
- art_space: SFX patch only: right side at mid-height (x ~62-96 %, y ~33-43 %), clear blazing sky/sunlit wall beside the parasol, outside the rain column and more than a cloud-width below-right of the cloud, above the customers' heads
- gap_after: 40
- sfx_1:
  - text_km: "ព្រួស ព្រួស ព្រួស!"
  - text_ko: "후두둑 후두둑"
  - place: x 79% · y 38% · size 4.4% · rot -8

### panel_029
- art_space: upper-left of the image (x ~7-37 %, y ~4-17 %): blazing clear sky above the customer - more than a cloud-width away from the parasol top and the cloud at the upper-right
- gap_after: 40
- bubble_1:
  - speaker: 손님
  - type: dialogue
  - text_km: "អេ៎? ភ្លៀង…?"
  - text_ko: "어? 비…?"
  - place: x 22% · y 10% · w 29% · tail ↓
  - read_order: 1

### panel_030
- art_space: upper band of clear sky, centre-left (x ~23-53 %, y ~4-32 %), above the opening umbrellas and well away from the small cloud at the right
- gap_after: 40
- bubble_1:
  - speaker: 손님
  - type: dialogue
  - text_km: "ភ្លៀងមកហើយ!"
  - text_ko: "소나기 오나 봐!"
  - place: x 38% · y 16% · w 29% · tail ↘
  - read_order: 1

### panel_031
- art_space: Mansik's bubble in the clear sky band centre-right (x ~43-81 %, y ~15-31 %), above Mansik, below the eave edge, not in the plane tree; Danbi's bubble in the lower third, centre (x ~20-66 %, y ~70-88 %), on the dry concrete beside the tape line, outside her drip ring - both more than a cloud-width from the column at the upper-left
- gap_after: 40
- bubble_1:
  - speaker: 만식
  - type: dialogue
  - text_km: "ចង្អូរលេចទៀតហើយ!"
  - text_ko: "또 물받이 새네!"
  - place: x 62% · y 23% · w 37% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ចាស! ចង្អូរលេច! ចង្អូរលេច!"
  - text_ko: "네! 물받이요, 물받이!"
  - place: x 43% · y 80% · w 45% · tail ↖
  - read_order: 2

### panel_032
- silent: true
- art_space: none
- gap_after: 40

### panel_033
- art_space: upper third under the shutter box, over the dark storage interior: Mansik's off-frame bubble at the upper-left (x ~14-46 %, y ~4-27 %, two lines, tail to the left edge toward the plaza; the flap corner at x < 14 % stays clear), Danbi's at the upper-right a little lower (x ~52-84 %, y ~14-30 %) above her head, left of the cropped parasol
- gap_after: 120
- bubble_1:
  - speaker: 만식 (화면 밖)
  - type: dialogue
  - text_km: "ក្មួយតេអូ ថ្ងៃនេះលក់ដាច់ហើយ!"
  - text_ko: "태오 총각은 오늘 대박이네!"
  - place: x 30% · y 16% · w 32% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ចុះភ្ញៀវខ្ញុំវិញ…?"
  - text_ko: "제 손님은요…?"
  - place: x 68% · y 22% · w 31% · tail ↘
  - read_order: 2

### panel_034
- silent: true
- art_space: none
- gap_after: 40

### panel_035
- art_space: upper band of the image, centre-right (x ~41-81 %, y ~4-15 %): clear sky over the plaza and the eave underside above the customer - the flap at the top-left corner stays clear
- gap_after: 40
- bubble_1:
  - speaker: 손님
  - type: dialogue
  - text_km: "ប៉ុន្មាន? ប៉ុណ្ណេះគ្រប់ទេ?"
  - text_ko: "얼마예요? 이 정도면 돼요?"
  - place: x 61% · y 10% · w 39% · tail ↘
  - read_order: 1

### panel_036
- art_space: top quarter of the image, centre (x ~32-68 %, y ~5-21 %): soft dark storage interior above the hands - not over the two fingers or the coins
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "គ្រាន់តែតម្រង់វិញ។"
  - text_ko: "펴기만 했습니다."
  - place: x 50% · y 12% · w 35% · tail ↙
  - read_order: 1

### panel_037
- silent: true
- art_space: none
- gap_after: 120

### panel_038
- art_space: upper band of the image across the centre (x ~26-76 %, y ~4-24 %): dark storage interior and eave underside above the customers' heads and Danbi's bun
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "…គាត់មិនចូលចិត្តលុយទេឬអី?"
  - text_ko: "…저 사람, 돈 싫어하나?"
  - place: x 51% · y 12% · w 49% · tail ↘
  - read_order: 1

### panel_039
- silent: true
- art_space: none
- gap_after: 480

### panel_040
- art_space: upper-right of the image (x ~48-82 %, y ~3-34 %): dark storage interior above Danbi's head - two bubbles stacked (both two lines), clear of her stretched arm and the coins
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្លៃជួសជុល! ខ្ញុំថាស្អែកសង មែនទេ?"
  - text_ko: "수선비요! 내일 드린다고 했죠?"
  - place: x 65% · y 10.5% · w 34% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្ងៃនេះ ជាស្អែកនោះហើយ!"
  - text_ko: "오늘이 그 내일이에요!"
  - place: x 66% · y 26.5% · w 32% · tail ↘
  - read_order: 2

### panel_041
- art_space: upper-left of the image above Taeo's head (x ~3-51 %, y ~4-17 %): the dark storage interior - not over the white handle, the rail ribbons or the coins
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "កញ្ញាមិនដែលផ្ញើជួសជុលទេ។"
  - text_ko: "맡기신 적 없습니다."
  - place: x 27% · y 10% · w 47% · tail ↘
  - read_order: 1

### panel_042
- art_space: the whole upper third of the image, full width (x ~3-74 %, y ~3-33 %): plain dark storage interior and eave underside - ① one line at the upper left, ② the episode's longest bubble (45 chars, 54 % wide, two lines) across the centre below it; her head stays below y ~34 %
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "នោះ… ខ្ញុំនិយាយអ៊ីចឹងមែន…"
  - text_ko: "그건… 제가 그렇게 말하긴 했는데…"
  - place: x 27% · y 8% · w 47% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "…ចុះព្រឹកម្សិលមិញ លោកថាម៉េច? ទឹកស្រក់លាន់ពេក…"
  - text_ko: "…그럼 어제 아침엔 뭐라고 하셨어요? 물 소리가 너무 커서…"
  - place: x 46% · y 23% · w 54% · tail ↓
  - read_order: 2

### panel_043
- art_space: upper-left of the image (x ~7-41 %, y ~4-16 %): plain dark storage interior beside his head
- gap_after: 40
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "គ្រាន់តែមួយឃ្លា។"
  - text_ko: "별말 아니었어요."
  - place: x 24% · y 9% · w 33% · tail ↘
  - read_order: 1

### panel_044
- art_space: upper quarter of the image, full width (x ~4-84 %, y ~3-24 %): plain dark storage interior - ① two lines at the left, ② two lines at the right a little lower; the hand on the yellow handle (left edge, y ~40-70 %) stays clear below
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "បើតែមួយឃ្លា លោកនិយាយម្ដងទៀតក៏បាន…"
  - text_ko: "별말 아니면 그냥 다시 말해 주셔도…"
  - place: x 25% · y 10% · w 42% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "អត់… មិនមែនអ៊ីចឹងទេ…"
  - text_ko: "아니, 그게 아니라…"
  - place: x 68% · y 15% · w 30% · tail ↙
  - read_order: 2

### panel_045
- silent: true
- art_space: none
- gap_after: 120

### panel_046
- art_space: lower third of the image: Danbi's two-line bubble centre-left (x ~20-68 %, y ~67-83 %), over the dry concrete beside the tape line, outside her puddle - opposite the cloud at the top-right; Taeo's small reply just below it at the lower-left (x ~8-28 %, y ~82-94 %) over the floor in front of his stool - nothing important in either area
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ថ្លៃជួសជុល… ថ្ងៃណាមួយ ខ្ញុំសងជាមិនខាន!"
  - text_ko: "수선비는… 언젠가 꼭 갚을 거예요!"
  - place: x 44% · y 75% · w 46% · tail ↗
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "បាទ។"
  - text_ko: "네."
  - place: x 18% · y 88% · w 17% · tail ↖
  - read_order: 2

### panel_047
- silent: true
- art_space: none
- gap_after: 480

### panel_048
- art_space: upper band of the image, centre-right (x ~52-80 %, y ~1-25 %): the darkening sky and plain market wall above the eave - not over the flap at the left
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ម៉ោងបីមែន…"
  - text_ko: "진짜 세 시네…"
  - place: x 66% · y 12% · w 25% · tail ↘
  - read_order: 1

### panel_049
- art_space: upper-right of the image (x ~50-84 %, y ~3-36 %): the eave underside and the grey rainy plaza beyond - two two-line bubbles stacked, Danbi's above, Taeo's below; the flap at the top-left stays completely clear
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "អើ… នោះលេចទឹកហើយ?"
  - text_ko: "저기… 저거 새는데요?"
  - place: x 67% · y 10% · w 31% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오
  - type: dialogue
  - text_km: "លោកតាខ្ញុំជាអ្នកព្យួរ។"
  - text_ko: "할아버지가 단 겁니다."
  - place: x 70% · y 26.5% · w 24% · tail ↙
  - read_order: 2

### panel_050
- art_space: Bomi's bubble upper-left (x ~5-45 %, y ~4-17 %) over the grey rainy sky above her; Taeo's off-frame bubble upper-right a little lower (x ~52-84 %, y ~15-28 %) over the eave underside, its tail toward the right edge
- gap_after: 40
- bubble_1:
  - speaker: 보미
  - type: dialogue
  - text_km: "ឆ័ត្របាក់ទៀតហើយ…"
  - text_ko: "또 부러졌어요…"
  - place: x 25% · y 10% · w 39% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 태오 (화면 밖)
  - type: dialogue
  - text_km: "ឆ្អឹងពីរ។ ស្អែក។"
  - text_ko: "살 두 개. 내일입니다."
  - place: x 68% · y 21% · w 31% · tail ↘
  - read_order: 2

### panel_051
- art_space: Danbi's two-line bubble upper-left (x ~5-47 %, y ~3-18 %) over the eave underside above her head; Bomi's upper-right a little lower (x ~53-83 %, y ~15-27 %) above the pink canopy over the rain beyond the eave
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "យកនេះទៅប្រើសិន។ ស្អែកយកមកវិញណា៎!"
  - text_ko: "이거 쓰고 가. 내일 꼭 가져와!"
  - place: x 26% · y 10% · w 40% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 보미
  - type: dialogue
  - text_km: "ចុះបងស្រីវិញ?"
  - text_ko: "언니는요?"
  - place: x 68% · y 20.5% · w 29% · tail ↓
  - read_order: 2

### panel_052
- art_space: upper quarter of the image (x ~3-81 %, y ~3-22 %): eave underside and grey rain above her waving hands - ① left, ② right a little lower; her hands stay below y ~28 %
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ចូលចិត្តភ្លៀងតាំងពីដើមមក!"
  - text_ko: "원래 비 좋아해!"
  - place: x 25% · y 9% · w 43% · tail ↘
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "ពិតមែន!"
  - text_ko: "진짜야!"
  - place: x 68% · y 15.5% · w 24% · tail ↙
  - read_order: 2

### panel_053
- art_space: upper-left of the image above the yellow canopy (x ~3-51 %, y ~3-17 %): the blank lowered mint shutter face - not on the yellow fabric
- gap_after: 120
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "ចំណតឡានក្រុង។ ទិសដូចគ្នា។"
  - text_ko: "버스 정류장. 같은 방향입니다."
  - place: x 27% · y 9% · w 48% · tail ↙
  - read_order: 1

### panel_054
- silent: true
- art_space: none
- gap_after: 120

### panel_055
- silent: true
- art_space: none
- gap_after: 480

### panel_056
- art_space: right side of the image below the canopy edge (x ~48-85 %, y ~20-52 %): the plain wet market wall above the hydrangea tubs, ahead of their walk, beside Taeo's head - two two-line bubbles stacked; not on the yellow canopy
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "គេថា ផ្កាខាងចំណត ស្អាតជាងគេ!"
  - text_ko: "정류장 쪽 수국이 제일 예쁘대요!"
  - place: x 66% · y 27.5% · w 34% · tail ↙
  - read_order: 1
- bubble_2:
  - speaker: 단비
  - type: dialogue
  - text_km: "…អ្នកណាថា? គឺខ្ញុំឯង។"
  - text_ko: "…누가 그랬냐면, 제가요."
  - place: x 70% · y 44% · w 28% · tail ↙
  - read_order: 2

### panel_057
- silent: true
- art_space: none
- gap_after: 120

### panel_058
- art_space: upper-left corner of the image (x ~5-45 %, y ~4-17 %): the sunlit wet market wall beyond the canopy's rim on her side - not on the yellow fabric, not over her pointing hand
- gap_after: 40
- bubble_1:
  - speaker: 단비
  - type: dialogue
  - text_km: "ស្មាឆ្វេង។ ទទឹកហើយ។"
  - text_ko: "왼쪽 어깨. 젖었습니다."
  - place: x 25% · y 10% · w 39% · tail ↘
  - read_order: 1

### panel_059
- art_space: top-right corner of the image (x ~64-88 %, y ~2-15 %): the sunlit wet wall beyond the canopy's rim, a small bubble - well away from his mouth
- gap_after: 900
- bubble_1:
  - speaker: 태오
  - type: dialogue
  - text_km: "…បាទ។"
  - text_ko: "…네."
  - place: x 76% · y 8% · w 23% · tail ↙
  - read_order: 1

### panel_060
- art_space: bottom sixth of the image, full width: plain wet pavement (caption strip) - nothing important there
- gap_after: 40
- bubble_1:
  - speaker: 캡션
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី៣ —"
  - text_ko: "— 3화에 계속 —"
  - place: x 48% · y 92% · w 52%
  - read_order: 1
