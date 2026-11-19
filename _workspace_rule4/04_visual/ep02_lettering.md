# EP02 레터링 명세 「퇴근하세요」 — letterer (크메르어판)

- 작성: letterer · 기준일 2026-11-18 · v1
- 입력: `03_episode/ep02_script_final.md` v1(KM 문구의 유일한 원천) · `04_visual/ep02_shotlist.md` v1(`bubble space` → `art_space`·`place`, §D 비네트, §H 전달 사항) · `03_episode/ep02_beatsheet.md` v1(`gap_after` — 비트시트 gap 열 = 대본 메타 = 샷리스트 beat 줄, 58컷 모두 일치 확인) · `02_story/glossary_km.md` v4
- 다음 독자: **prompt-smith**(`art_space`를 Flow 프롬프트의 빈 영역 문장으로 그대로) → episode-compositor(`km_tool.py build` + 배치 점검) → quality-reviewer
- 이미지에는 글자가 없다. 이 문서의 말풍선·효과음·캡션은 전부 뷰어가 그린다(`km_tool.py build`).
- 수: 58패널 · 말풍선 82(대사 81 = `KM:` 줄 1:1 + 마감 캡션 1) · 효과음 7조각(대본 `KM 효과음` 5줄, P10·P30은 둘로 나눔) · 무대사 2(P3·P55) · env 0 · 기억 7 · 생각 9

## 읽는 법

- `art_space` = 그 컷의 그림이 비워 둘 조용한 배경(영문, prompt-smith가 그대로 옮긴다). 괄호 속 좌표 = 패널 왼쪽 위에서 잰 %. 같은 문장 안의 "never over …/stays clear" 좌표는 비울 곳이 아니라 **피할 것**(시계 면·얼굴·종이)이다. 무대사 컷은 `none`.
- `place`: `x`/`y` = 말풍선 중심, `w` = 최대 폭(패널 폭 대비 %). 꼬리 `↙ ↓ ↘`(아래) · `↖ ↑ ↗`(위). 괄호 = 꼬리가 가리키는 화자(화면 밖이면 그 가장자리).
- `text_km` = 대본 `KM:` 큰따옴표 안을 **스크립트로 그대로 복사**했다(손으로 다시 치지 않았다). `text_ko`는 참고용.
- `type`: dialogue · thought(점선, 생각 점) · memory(푸른 번짐 테두리: 기억/리플레이 말풍선) · narration(마감 캡션). P27의 `서하(작게)`는 작은 소리지만 뷰어에 작은 말풍선 종류가 없어 dialogue로 둔다.
- 효과음 `size` = 글자 크기(패널 폭 대비 %), `rot` = 기울기(도).

## 배치 규칙 (이 회차에서 지킨 것)

1. **뷰어 폭 제약: `x + w ≤ 100`, 그리고 `x − w/2 ≥ 2`.** 뷰어는 말풍선을 `left: x%`에 두고 가운데 정렬하므로 실제 폭이 `100 − x`로 잘린다(EP01 노트). 그래서 **오른쪽 가장자리에 붙은 좁은 빈자리(x 52–97 등)에는 폭 약 32% 이하 말풍선만 들어간다** — 이번 회차에서 샷리스트 빈자리를 고친 곳은 거의 이 이유다(아래). 배치 점검 때 x를 오른쪽으로 옮기면 w도 같이 줄여야 한다.
2. **줄 수·충돌 실측.** 뷰어와 같은 CSS(`viewer-km.html`의 `.bubble`·`.sfx` 규칙과 이름 묶기 그대로)와 Battambang(Google Fonts)으로 패널 폭 360·375·400·430·720px에서 전 컷을 그려 확인했다: 모든 말풍선 **2줄 이하**(360px 기준 1줄 45 · 2줄 37), 패널 밖으로 나가는 것 0, 같은 컷 말풍선끼리 겹침 0, 말풍선·효과음이 `art_space` 밖이나 얼굴·시계 면·종이 위에 걸치는 것 0.
3. 오프라인 대체 글꼴(Khmer UI, 글자가 약 20% 넓다)에서만 3줄: P8 ①② · P20 ①② · P28 ①② — 빈자리 폭의 한계라 수용(EP01과 같은 판단). 같은 대체 글꼴에서 위 띠가 꽉 차 말풍선끼리 살짝 닿는 곳: P16 · P27 · P28, P58 캡션은 2줄. 온라인 Battambang에서는 전부 위 2번대로다.
4. **반복 짝은 같은 자리:** P5 ↔ P23(같은 위 26% 띠, 같은 y 13 — 말하는 사람 쪽만 좌우가 다르다) · P26 ↔ P42(두 말풍선 x·y·w 동일) · P54 ↔ P57(x 27 · y 14 · w 46 동일) · P22 ↔ P39 «ទេ។»(x 36 · y 13 · w 30 동일, 꼬리만 화자 쪽). EP01 구도 반복은 EP01 자리를 이었다: P19 = EP01 P63(x 25 · y 17 · w 44 ↗) · P24 ≈ EP01 P49 ① · P43 = EP01 P43 띠 · P50 = EP01 P6(① x 35 · y 12 · w 64, ② x 62 · y 30 · w 30) · P58 = EP01 P64 캡션.
5. 한 컷 말풍선 1–2개(효과음 별도, P10만 말풍선 2 + 기억 효과음). 같은 화자의 연속 말풍선은 위→아래로 이어 읽힌다.
6. **효과음 나눔:** P10 기억 효과음 «ក្រុប» / «ក្រាប…»(비네트 안 좁은 서가 틈에 위아래로), P30 «ធឹប…» / «ធឹប…»(계단 발소리 두 걸음, 대각선으로 내려옴). 뷰어 효과음은 줄바꿈이 없어 좁은 자리에 한 줄로 안 들어가므로 나눴다. km_tool은 이어 붙여 대조한다(EP01 P25·P42와 같은 방식).
7. **생각 말풍선의 점은 뷰어가 항상 말풍선 아래 왼쪽에 찍는다.** 그래서 생각 말풍선은 생각하는 사람의 위 또는 위 오른쪽에 두었다(P21 ②·P26 ②·P32 ②·P36의 점은 서하 쪽). P28만 예외(아래).
8. 기억 말풍선: P1 ×2(위쪽 화면 밖 목소리) · P8 · P10 · P20 · P47(비네트 안 위 1/3) · P37(비네트 위 1/3 + 오른쪽 어둠). 효과음·캡션은 비네트 테두리를 넘지 않는다.

## 샷리스트 빈자리와 달라진 곳 (prompt-smith는 아래 `art_space`를 따른다)

- **panel_008:** ①(x 52–97)은 위 1번 제약으로 3줄이 된다. → ①을 x 40–80 · y 2–16으로 넓혀 **비네트의 민무늬 윗벽 오른쪽 끝(x 40–50)을 살짝 덮는다**(그 자리는 그림에서도 윗벽만). ② 기억 말풍선은 비네트 안 위 1/3(x 5–37) 그대로. ①의 윗선이 ②보다 2% 높다(읽는 순서 ① → ②).
- **panel_020:** ②(x 52–97)도 같은 이유로 2줄이 안 되고, 왼쪽으로 넓히면 비네트 속 손을 덮는다. → ②를 샷리스트의 대안 자리 **비네트 아래 어둠**에 두고 x 3–51 · y 37–53으로 넓혔다(말풍선은 x 3–50 · y 38–52) — **그의 머리는 x 52%보다 오른쪽**. ① 기억 말풍선은 비네트 위 왼쪽 x 5–31 · y 5–18(비네트 속 손·롤은 x 32 오른쪽, 4번 조각은 y 20 아래). 위 오른쪽은 비워 둔다.
- **panel_027:** ② 자리(오른쪽 어둠 x 64–96)는 뷰어에서 폭 약 24%만 들어가 4줄이 된다. → 두 말풍선 모두 **위 띠에 위아래로**: ① 2줄(x 4–56), ② 1줄 넓게(x 6–66 · y 15–24). 띠를 y 25까지 넓혔다 — **종이 윗선은 y 26% 이하**.
- **panel_028:** ②가 원경 서하 머리 위(x 62–97)로 내려오면 폭이 모자란다. → ②를 ① 아래 위 띠에 쌓았다(x 32–78 · y 15–28). 띠 = 위 28% — **선임 머리는 y 30% 아래**. 생각 점이 x 약 45 · y 28–31(선임 머리 위 빈 어둠)에 찍힌다 — 내용이 분명히 서하의 것이라 수용.
- **panel_032:** ① 자리(x 62–97 · y 2–22)는 폭이 모자라고 그 아래는 시계다. → ①을 **시계 위 띠에 한 줄로**(x 22–74 · y 3–12), 꼬리 ↘는 오른쪽(계단 쪽). 시계 면(y 14–26)은 그대로 비켜 간다. ② 생각 말풍선은 x 32–48 · y 27–36(시계 아래, 두 머리 사이 — 점이 서하 쪽).
- **panel_053:** ② 자리(x 66–97)는 시계(x 50–64) 때문에 폭 약 22%만 남아 «នឿយហត់ហើយ អូន សឺហា។»(이름은 한 줄로 묶인다)가 들어가지 않는다. → ②를 **시계 오른쪽 아래, 노미란 머리 위**(x 52–84 · y 18–31)에 두었다. 얇은 빈 표시 면의 오른쪽 부분을 덮는다(샷리스트는 표시 면 가장자리를 피하라 했지만 글자 없는 배경 소품이고, 노미란 가까이에 다른 자리가 없다). 시계 면은 덮지 않는다.
- 긴 줄(P5 · P7 ② · P11 ② · P16 ① · P17 · P24 · P27 ② · P35 ① · P36 · P37 · P48 · P50 ①)은 샷리스트 띠 안에서 w를 크게(58–64) 잡고 중심을 왼쪽에 두었다(위 1번). 오른쪽 화자의 말풍선도 같은 이유로 중심이 빈자리 가운데보다 왼쪽이다.

---

### panel_001
- art_space: top band, left and centre (x 3–68%, y 2–28%): the dark far side of the thick glass desktop beyond the lamp light; the forearm entering at the upper right (x 72–100%) and the hand on the chair back stay out of it
- gap_after: 0
- bubble_1:
  - speaker: 목소리(기억)
  - type: memory
  - text_km: "ច្បាប់នោះ…"
  - text_ko: "그 수칙,"
  - place: x 22% · y 8% · w 30% · tail ↗ (위 오른쪽 프레임 밖 — 팔의 주인, 뒤의 목소리)
  - read_order: 1
- bubble_2:
  - speaker: 목소리(기억)
  - type: memory
  - text_km: "នៅមិនទាន់ប្ដូរទៀតទេ?"
  - text_ko: "아직 안 바꿨네?"
  - place: x 46% · y 19% · w 42% · tail ↗ (위 오른쪽 프레임 밖 — 팔의 주인, 뒤의 목소리)
  - read_order: 2

### panel_002
- art_space: sound effect only: the out-of-focus darkness in the lower-left corner beside the chair back (x 3–26%, y 80–96%); the hand on the chair back stays clear
- gap_after: 480
- sfx_1:
  - text_km: "គ្រេត—"
  - text_ko: "끼익—"
  - place: x 14% · y 88% · size 7% · rot -8

### panel_003
- art_space: none (silent — no bubble area needed)
- gap_after: 120
- silent: true
- note: 무대사 — T-a 공개(얼굴)

### panel_004
- art_space: top 22% (x 5–95%, y 2–22%): the dim corridor ceiling seen above the glass; her head (from y 34%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…លោកជានរណា?"
  - text_ko: "…누구세요?"
  - place: x 50% · y 12% · w 40% · tail ↓ (서하)
  - read_order: 1

### panel_005
- art_space: top 26%, left and centre (x 3–72%, y 2–26%): the dark shelf tops and the ceiling — his head (from y 28%) stays below; same band as panel_023
- gap_after: 240
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "ឯងធ្វើតាមច្បាប់ទី៤ទៀតហើយ ត្រូវទេ?"
  - text_ko: "이번에도 4번 따라 했지?"
  - place: x 36% · y 13% · w 60% · tail ↙ (재우, 왼쪽)
  - read_order: 1

### panel_006
- art_space: top 34% (x 3–97%, y 2–34%): the corridor above the glass on the right, the dark shelf tops on the left; both heads stay below
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…ទៀតហើយ?"
  - text_ko: "이번에도…요?"
  - place: x 70% · y 9% · w 30% · tail ↘ (서하, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "អូ… មែនហើយ។ អ្នកចាំមិនបានទេ។"
  - text_ko: "아… 맞다. 기억 안 나시죠."
  - place: x 32% · y 25% · w 56% · tail ↙ (재우, 왼쪽)
  - read_order: 2

### panel_007
- art_space: top 40% (x 3–97%, y 2–40%): the dim corridor above the glass; her head (from y 40%) and his shoulder (from y 44%) stay below
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…តើលោកអាចប្រាប់ឈ្មោះបានទេ?"
  - text_ko: "…성함이 어떻게 되시죠?"
  - place: x 60% · y 9.5% · w 40% · tail ↓ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "នៅទីនេះ មិនប្រាប់ឈ្មោះទេ។ …ឯងប្រាប់គ្នាខ្លួនឯងទេតើ។"
  - text_ko: "이름은 여기서 말하는 거 아니라며. …네가 그랬잖아."
  - place: x 34% · y 28% · w 60% · tail ↙ (재우의 어깨, 왼쪽 앞)
  - read_order: 2

### panel_008
- art_space: (1) the memory picture's top third: the plain upper wall above the nap-room door inside the frame (x 5–48%, y 5–18%) — the remembered Nomiran stays below it; (2) top right (x 40–97%, y 2–17%): the dark shelf tops and ceiling right of the memory picture; this bubble also covers the memory picture's top-right corner (x 40–50%), so only plain wall is drawn there; his head (from y 42%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "ប្រធានក្រុម និយាយអញ្ចឹងទៀតហើយ ត្រូវទេ?"
  - text_ko: "팀장님이 또 그러지?"
  - place: x 60% · y 9% · w 40% · tail ↓ (재우)
  - read_order: 1
- bubble_2:
  - speaker: 노미란(기억)
  - type: memory
  - text_km: "អ្នកមុនក៏ឈប់ក្រោយបីថ្ងៃដែរ។"
  - text_ko: "전임자도 사흘 만에 관뒀어."
  - place: x 21% · y 11.5% · w 32% · tail ↙ (비네트 속 노미란)
  - read_order: 2

### panel_009
- art_space: top 34% (x 3–97%, y 2–34%): the dark shelf tops and ceiling; his head (from y 36%) stays below
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…លោកជាអ្នកមុនឬ?"
  - text_ko: "…전임자세요?"
  - place: x 64% · y 8.5% · w 36% · tail ↘ (서하, 오른쪽 앞)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "បីថ្ងៃ ពិតមែន។ …គឺគ្នារត់ចោល។"
  - text_ko: "사흘은 맞아. …도망친 거지."
  - place: x 36% · y 24% · w 52% · tail ↓ (재우)
  - read_order: 2

### panel_010
- art_space: (1) the memory picture's top third: the ceiling and shelf-top darkness (x 18–48%, y 5–15%); (2) the dark gap between the shelves at the memory picture's left edge, for the remembered sound (x 5–16%, y 16–30%); (3) top right (x 51–97%, y 2–34%): the dark shelf tops and ceiling right of the memory picture; his head (from y 42%) stays below
- gap_after: 40
- sfx_1:
  - text_km: "ក្រុប"
  - text_ko: "부스럭 (기억) — 1/2"
  - place: x 10% · y 20% · size 3.6% · rot -12
- sfx_2:
  - text_km: "ក្រាប…"
  - text_ko: "부스럭 (기억) — 2/2"
  - place: x 10.5% · y 26.5% · size 3.6% · rot -12
- bubble_1:
  - speaker: 선임(기억)
  - type: memory
  - text_km: "…គេថា កណ្ដុរ។"
  - text_ko: "…쥐래."
  - place: x 33% · y 10% · w 30% · tail ↙ (비네트 속 선임)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "មិនមែនកណ្ដុរទេ។ គឺគ្នាទេតើ។"
  - text_ko: "쥐 아니야. 나야."
  - place: x 67% · y 21% · w 33% · tail ↓ (재우)
  - read_order: 2

### panel_011
- art_space: top 38% (x 3–97%, y 2–38%): the dark shelf tops and the ceiling; all three heads stay below (his head from y 36%)
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "លោកពូ… ស្គាល់អ្នកនេះទេ?"
  - text_ko: "선배님, 이분… 아세요?"
  - place: x 57% · y 9% · w 43% · tail ↘ (서하, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា ក្នុងបន្ទប់ប្រចាំការ មានតែឯង និងខ្ញុំ។"
  - text_ko: "당직실엔 너랑 나뿐이래."
  - place: x 33% · y 26% · w 62% · tail ↙ (선임, 왼쪽)
  - read_order: 2

### panel_012
- art_space: top 26% (x 4–96%, y 2–26%): the out-of-focus dry floor and the shadows of the desk legs
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…លោកជាមនុស្សឬ?"
  - text_ko: "…사람이에요?"
  - place: x 50% · y 12% · w 40% · tail ↑ (위쪽 프레임 밖 — 서하)
  - read_order: 1

### panel_013
- art_space: upper-left quarter (x 3–50%, y 3–28%): the dark shelf tops; his face (from x 28%, y 30%) stays out of it
- gap_after: 240
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…សម្រាប់ពេលនេះ។"
  - text_ko: "아직은."
  - place: x 24% · y 15% · w 40% · tail ↘ (재우의 얼굴)
  - read_order: 1

### panel_014
- art_space: top 38% (x 3–97%, y 2–38%): the glass window beyond the desk and the dim corridor behind it
- gap_after: 120
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "រាល់ដងដែលយប់វិលទៅក្រោយ… គ្នាក៏បានបង់ដែរ។"
  - text_ko: "되감길 때마다… 나도 냈어."
  - place: x 30% · y 11% · w 52% · tail ↗ (오른쪽 프레임 밖 재우)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…តាមដែលឯងបង្រៀនគ្នា។"
  - text_ko: "…네가 가르쳐 준 대로."
  - place: x 57% · y 29% · w 43% · tail ↗ (오른쪽 프레임 밖 재우)
  - read_order: 2

### panel_015
- art_space: top 24% (x 3–97%, y 2–24%): the dark shelf tops and the ceiling; his head (from y 26%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…បង់អ្វី?"
  - text_ko: "…뭘요?"
  - place: x 16% · y 9% · w 24% · tail ↙ (서하, 왼쪽 아래 앞)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "តោះ បិទពីលើវា។ ច្បាប់ទី៤។"
  - text_ko: "덮자. 4번."
  - place: x 56% · y 14% · w 44% · tail ↓ (재우)
  - read_order: 2

### panel_016
- art_space: top 22% band (x 3–97%, y 2–22%): the out-of-focus glass and dim corridor above the rule sheet; the faded sticker (x 72–86%, y 27–36%) and his hand stay clear
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ស្កុតនោះ… ដូចអានៅលើច្បាប់ទី៤ បេះបិទ។"
  - text_ko: "그 테이프… 4번이랑 똑같네요."
  - place: x 34% · y 7% · w 64% · tail ↙ (왼쪽 프레임 밖 서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "លោកជាអ្នកបិទវាឬ?"
  - text_ko: "당신이 붙였어요?"
  - place: x 64% · y 16% · w 36% · tail ↙ (왼쪽 프레임 밖 서하)
  - read_order: 2

### panel_017
- art_space: top 22% (x 5–95%, y 2–22%): the dark shelf tops above his head (head from y 24%)
- gap_after: 120
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "បើគ្នាជាអ្នកបិទ គ្នាបកវាចេញយូរហើយ។"
  - text_ko: "내가 붙였으면, 내가 뗐겠지."
  - place: x 40% · y 11% · w 60% · tail ↓ (재우)
  - read_order: 1

### panel_018
- art_space: upper left (x 4–62%, y 4–30%): the blank, slightly out-of-focus grid margin of the paper (no writing); the lifted tape corner (x 70–85%) stays clear
- gap_after: 0
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "នៅក្រោមនេះ… មានច្បាប់ទី៤ដើម។"
  - text_ko: "(이 밑에… 원래 4번이.)"
  - place: x 32% · y 15% · w 56% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_019
- art_space: upper-left quarter (x 3–45%, y 3–30%): the out-of-focus blank grid at the top of the paper; his face (upper right) and both hands stay clear
- gap_after: 120
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "កុំបកវាចេញ។"
  - text_ko: "떼려고 하지 마."
  - place: x 25% · y 17% · w 44% · tail ↗ (위 오른쪽 그의 얼굴)
  - read_order: 1

### panel_020
- art_space: (1) the memory picture's top-left part: out-of-focus blank grid (x 5–31%, y 5–18%) — the remembered hand and roll stay right of x 32% and the strip below y 20%; (2) below the memory picture, left (x 3–51%, y 37–53%): calm out-of-focus darkness — his head stays right of x 52%
- gap_after: 120
- bubble_1:
  - speaker: 목소리(기억)
  - type: memory
  - text_km: "នៅមិនទាន់ប្ដូរទៀតទេ?"
  - text_ko: "아직 안 바꿨네?"
  - place: x 18% · y 11.5% · w 26% · tail ↗ (위 오른쪽 프레임 밖 — 뒤의 목소리)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…លើកមុន ឯងចង់បិទពីលើវា។ ទើបគ្នាយកស្កុតមក។"
  - text_ko: "…저번엔 네가 덮자고 했거든. 그래서 가져온 거야."
  - place: x 26.5% · y 45% · w 47% · tail ↘ (재우, 오른쪽)
  - read_order: 2

### panel_021
- art_space: top 38% (x 3–97%, y 2–38%): the dim upper wall above the nap-room door and the ceiling; her head (from y 40%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "អាដែលបិទពីលើគេ… គឺជាការកែប្រែចុងក្រោយ។"
  - text_ko: "(맨 위에 붙은 게… 최신 개정이니까.)"
  - place: x 28% · y 10% · w 48% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "បើបិទពីលើ… លើកនេះ យើងក្លាយជាអ្នកបិទពីលើវិញ។"
  - text_ko: "(덮으면… 이번엔 우리가 덧댄 사람이 돼.)"
  - place: x 48% · y 27% · w 52% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_022
- art_space: top 25%, left and centre (x 5–60%, y 3–25%): out-of-focus darkness above her head (head from y 28%)
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ទេ។"
  - text_ko: "아니요."
  - place: x 36% · y 13% · w 30% · tail ↓ (서하)
  - read_order: 1

### panel_023
- art_space: top 26%, centre and right (x 28–97%, y 2–26%): the dark shelf tops and the ceiling — same band as panel_005; his head (from y 28%) and hers (from y 42%) stay below
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំត្រូវដឹងថា អ្នកណាជាអ្នកបិទពីលើ។"
  - text_ko: "누가 덧댔는지 알아야 해요."
  - place: x 60% · y 13% · w 40% · tail ↘ (서하, 오른쪽)
  - read_order: 1

### panel_024
- art_space: top 35%, left and centre (x 3–62%, y 2–35%): the dim upper wall above the nap-room door and the ceiling; the rule sheet (x 64–82%) and his back (x 82–100%) stay clear
- gap_after: 240
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ការបកវាចេញ… ជាបន្ទុករបស់អ្នកនោះ។"
  - text_ko: "떼는 건… 그 사람 몫이에요."
  - place: x 33% · y 12% · w 58% · tail ↓ (서하)
  - read_order: 1

### panel_025
- art_space: top 28%, left and centre (x 3–84%, y 2–28%): ceiling pipes and the dark shelf tops; the open door frame at the right edge stays clear
- gap_after: 480
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…អញ្ចឹង រកមើលទៅ។"
  - text_ko: "…그럼 찾아봐."
  - place: x 34% · y 9% · w 40% · tail ↘ (재우, 어깨 너머로)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "គ្នានឹងនៅឯជណ្ដើរ។"
  - text_ko: "난 계단에 있을게."
  - place: x 62% · y 21% · w 36% · tail ↓ (재우)
  - read_order: 2

### panel_026
- art_space: top 40%, centre and right (x 26–97%, y 2–40%): ceiling pipes and the dark shelf tops — never over the clock face (x 6–22%, y 8–22%); same area as panel_042
- gap_after: 40
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី១។ ស៊ូឱ្យដល់ម៉ោង៦ព្រឹក។"
  - text_ko: "(하나. 06시까지 버틴다.)"
  - place: x 50% · y 10% · w 46% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី២។ រកឱ្យឃើញថា យើងសន្យាអីគ្នា។"
  - text_ko: "(둘. 우리가 무슨 약속을 했는지 알아낸다.)"
  - place: x 60% · y 27% · w 40% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_027
- art_space: top 25% band (x 4–96%, y 1–25%): out-of-focus darkness beyond the partition, above the top edge of the paper — the paper starts at y 26% or lower; the faded sticker stays clear
- gap_after: 40
- bubble_1:
  - speaker: 서하(작게)
  - type: dialogue
  - text_km: "ទី៧។ មុនម៉ោង៦ព្រឹក មិនត្រូវចេញពីធ្វើការឡើយ។"
  - text_ko: "7번. 06시 전에는 퇴근하지 않는다."
  - place: x 30% · y 8% · w 52% · tail ↙ (작은 소리 — 왼쪽 아래 프레임 밖 서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하(작게)
  - type: dialogue
  - text_km: "ទោះអ្នកណាប្រាប់ឱ្យចេញពីធ្វើការក៏ដោយ។"
  - text_ko: "누가 퇴근하라고 해도."
  - place: x 36% · y 19.8% · w 64% · tail ↙ (작은 소리 — 왼쪽 아래 프레임 밖 서하)
  - read_order: 2

### panel_028
- art_space: top 28% band (x 3–97%, y 1–28%): the dark shelf tops and the ceiling — the senior's head stays below y 30%; the dark corridor beyond the glass above her far head (x 62–97%, y 28–40%) also stays plain
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា ពេលព្រលឹម ចាំតែបន្ទាត់នោះបានហើយ។"
  - text_ko: "새벽엔 그 줄만 기억하래."
  - place: x 24% · y 8% · w 42% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "បើខ្ញុំជាអ្នកសរសេរ… អ្នកណាធ្លាប់ប្រាប់ខ្ញុំ ឱ្យចេញពីធ្វើការ?"
  - text_ko: "(내가 쓴 거면… 누가 그랬던 거야? 퇴근하라고.)"
  - place: x 55% · y 21.5% · w 45% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_029
- art_space: top 38% (x 3–97%, y 2–38%): the dark shelf tops on the left, the corridor above the glass on the right; both heads stay below
- gap_after: 240
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "លោកពូ ចេញពីធ្វើការម៉ោងប៉ុន្មានដែរ?"
  - text_ko: "선배님은 퇴근 몇 시에 하세요?"
  - place: x 60% · y 9.5% · w 40% · tail ↘ (서하, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា មិនបានចូលធ្វើការ ក៏គ្មានចេញពីធ្វើការដែរ។"
  - text_ko: "출근을 안 했으니, 퇴근도 없대."
  - place: x 32% · y 27% · w 52% · tail ↙ (선임, 왼쪽)
  - read_order: 2

### panel_030
- art_space: sound effect only: the dark gap between the shelves at the left edge (x 2–26%, y 40–68%), away from the clock face and her eyes
- gap_after: 40
- sfx_1:
  - text_km: "ធឹប…"
  - text_ko: "저벅… — 1/2"
  - place: x 12% · y 48% · size 6% · rot -10
- sfx_2:
  - text_km: "ធឹប…"
  - text_ko: "저벅… — 2/2"
  - place: x 15% · y 61% · size 6% · rot -10

### panel_031
- art_space: upper right (x 40–96%, y 3–30%): the corridor ceiling and pipes — the clock above the fire door (x 20–32%, y 22–32%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 목소리(계단)
  - type: dialogue
  - text_km: "អ្នកនឿយហត់ហើយ។"
  - text_ko: "수고했어요."
  - place: x 62% · y 13% · w 38% · tail ↙ (방화문 너머 계단 — 화면 왼쪽 아래의 문)
  - read_order: 1

### panel_032
- art_space: (1) top band (x 20–80%, y 2–13%): the dim shelves and ceiling of the room behind the glass, above the clock — never over the clock face (x 44–58%, y 14–26%); (2) between the senior's head and hers (x 28–50%, y 27–37%): the dark shelf behind her, below the clock
- gap_after: 40
- bubble_1:
  - speaker: 목소리(계단)
  - type: dialogue
  - text_km: "ឥឡូវ អ្នកចេញពីធ្វើការបានហើយ។"
  - text_ko: "이제 퇴근해요."
  - place: x 48% · y 7.5% · w 52% · tail ↘ (오른쪽 프레임 밖 — 계단 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី៧។"
  - text_ko: "(7번.)"
  - place: x 40% · y 31.5% · w 20% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_033
- art_space: top 20% (x 5–95%, y 2–20%): the ceiling; the silhouette's head (from y 24%) stays below
- gap_after: 480
- bubble_1:
  - speaker: 목소리
  - type: dialogue
  - text_km: "ការងារនៅសល់ ទុកឱ្យខ្ញុំទទួលបន្ទុក។"
  - text_ko: "나머진 내가 받을게요."
  - place: x 56% · y 11% · w 44% · tail ↘ (문틀의 실루엣)
  - read_order: 1

### panel_034
- art_space: top 14% (x 5–95%, y 2–14%): the ceiling; his head (from y 16%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "លិខិតប្រគល់វេន។ ប្រអប់របស់គ្នា បំពេញរួចហើយ។"
  - text_ko: "인수인계서야. 내 칸은 채웠어."
  - place: x 50% · y 7.5% · w 50% · tail ↓ (재우)
  - read_order: 1

### panel_035
- art_space: top 34% (x 3–97%, y 2–34%): the out-of-focus charcoal of his cardigan and the dark door frame above the form — never on the form itself (from y 36%)
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "អ្នកទទួលវេន… ទទួលយកបាច់សោ និងរាល់កិច្ចការនៃយប់នេះ។"
  - text_ko: "인수자는… 당직 열쇠와 이 밤의 모든 일을 인수한다."
  - place: x 34% · y 10% · w 60% · tail ↙ (왼쪽 아래 프레임 밖 서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "…អ្នកប្រគល់វេន ចេញពីធ្វើការ។"
  - text_ko: "…인계자는, 퇴근한다."
  - place: x 50% · y 25.5% · w 50% · tail ↙ (왼쪽 아래 프레임 밖 서하)
  - read_order: 2

### panel_036
- art_space: top 28% (x 4–96%, y 2–28%): out-of-focus blue darkness above her forehead (from y 30%)
- gap_after: 40
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ពាក្យប្រាប់ឱ្យចេញពីធ្វើការ… គឺពាក្យសុំនៅជំនួស។"
  - text_ko: "(퇴근하라는 말은… 대신 남겠다는 말이었어.)"
  - place: x 40% · y 13% · w 60% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_037
- art_space: (1) the memory picture's top third and the calm blue darkness to its right (x 4–97%, y 3–13%): out-of-focus darkness above the paper; (2) bottom band (x 6–94%, y 83–98%): the plain, out-of-focus grey steel of the partition below the paper — line 7 (y 70–78%) and the number-4 strip stay clear
- gap_after: 720
- bubble_1:
  - speaker: 서하(기억)
  - type: memory
  - text_km: "ទោះអ្នកណាប្រាប់ឱ្យចេញពីធ្វើការក៏ដោយ។"
  - text_ko: "누가 퇴근하라고 해도."
  - place: x 35% · y 8% · w 64% · tail ↙ (비네트 속 그녀의 손끝)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ច្បាប់ទី៧… គឺដើម្បីការពារអ្នកដែលព្រមទទួលជំនួសខ្ញុំទេតើ។"
  - text_ko: "(7번은… 받아 줄 사람을 지키는 거였어.)"
  - place: x 40% · y 90.5% · w 60% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_038
- art_space: upper left (x 3–56%, y 2–32%): the dim corridor above the glass; his head (x 50–88%, from y 32%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "ព្រោះគ្នារត់ចោល ទើបឯងមកនៅទីនេះទេតើ។"
  - text_ko: "내가 도망쳐서 네가 온 거잖아."
  - place: x 30% · y 9% · w 52% · tail ↘ (재우, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "លើកនេះ គ្នានឹងនៅជំនួស។ ឯងឡើងទៅលើទៅ។"
  - text_ko: "이번엔 내가 대신 남을게. 넌 올라가."
  - place: x 30% · y 24% · w 50% · tail ↘ (재우, 오른쪽)
  - read_order: 2

### panel_039
- art_space: top 28%, left and centre (x 4–66%, y 3–28%): the out-of-focus dim room — never over the clock in the top-right corner (x 72–94%, y 3–24%)
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ទេ។"
  - text_ko: "아니요."
  - place: x 36% · y 13% · w 30% · tail ↙ (왼쪽에서 들어오는 그녀의 손)
  - read_order: 1

### panel_040
- art_space: upper left (x 3–48%, y 2–36%) and the top band up to x 60% (x 3–60%, y 2–27%): the dark shelf tops and ceiling; his head (x 52–92%, from y 28%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "វេននេះ ជាវេនរបស់ខ្ញុំ។"
  - text_ko: "제 당직이에요."
  - place: x 26% · y 10% · w 40% · tail ↓ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំនឹងចេញពីធ្វើការ… ម៉ោង៦ព្រឹក។"
  - text_ko: "퇴근은… 06시에 할게요."
  - place: x 27% · y 25% · w 42% · tail ↓ (서하)
  - read_order: 2

### panel_041
- art_space: top 22% (x 4–96%, y 2–22%): the ceiling and the darkness above the door frame; his head (from y 26%) stays below
- gap_after: 240
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…គ្នាដឹងស្រាប់ហើយ។"
  - text_ko: "…그럴 줄 알았어."
  - place: x 48% · y 12% · w 42% · tail ↓ (재우)
  - read_order: 1

### panel_042
- art_space: top 40%, centre and right (x 26–97%, y 2–40%): ceiling pipes and the dark shelf tops — never over the clock face (x 6–22%, y 8–22%); same area as panel_026
- gap_after: 480
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា ហួសម៉ោង៦ព្រឹកហើយ។"
  - text_ko: "06시 넘었대."
  - place: x 50% · y 10% · w 46% · tail ↙ (선임, 왼쪽 앞)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "…គេថា ចេញពីធ្វើការបានហើយ។"
  - text_ko: "…퇴근해도 된대."
  - place: x 60% · y 27% · w 40% · tail ↙ (선임, 왼쪽 앞)
  - read_order: 2

### panel_043
- art_space: top 24% (x 5–95%, y 2–24%): the plain off-white wall above the door frame
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "នេះ… នេះ ខ្ញុំចាត់ការខ្លួនឯង។"
  - text_ko: "이, 이건 내가 정리할게."
  - place: x 50% · y 12% · w 48% · tail ↓ (노미란)
  - read_order: 1

### panel_044
- art_space: (1) sound effect: the steel face of the door beside the left end of the push bar (x 4–30%, y 46–60%); (2) sound effect: the plain wall right of the phone (x 72–96%, y 54–68%); the upper-left wall (x 3–38%, y 3–26%) stays plain as in EP01 panel_007/028, and the clock face stays clear
- gap_after: 240
- sfx_1:
  - text_km: "ក្រឹក!"
  - text_ko: "철컥"
  - place: x 17% · y 53% · size 8% · rot -6
- sfx_2:
  - text_km: "វឺ… វឺ…"
  - text_ko: "지잉—"
  - place: x 84% · y 61% · size 5.5% · rot 6

### panel_045
- art_space: top 32%, centre and right (x 30–96%, y 3–30%): the high white ceiling panels and upper wall — the clock (x 12–24%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ប្រធានក្រុម!"
  - text_ko: "팀장님!"
  - place: x 72% · y 24% · w 28% · tail ↘ (안쪽 오른쪽 구석의 서하)
  - read_order: 1

### panel_046
- art_space: top 38% (x 3–97%, y 2–38%): the high upper wall and ceiling above the glass doors in blue-grey shade — never over the bright glass (from y 40%)
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "យប់មិញ គ្មានរឿងអីកើតឡើងទេ មែនទេ?"
  - text_ko: "어젯밤엔 아무 일도 없었어. 그치?"
  - place: x 58% · y 10% · w 42% · tail ↓ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "ក្នុងសៀវភៅកំណត់ហេតុ មានកត់ទុក។"
  - text_ko: "일지에는 있습니다."
  - place: x 26% · y 28% · w 44% · tail ↙ (서하, 왼쪽 앞)
  - read_order: 2

### panel_047
- art_space: (1) the memory picture's top third: the out-of-focus far side of the journal page, blank lines only (x 5–49%, y 5–15%); (2) upper right (x 52–97%, y 16–36%): the out-of-focus high wall of the lobby
- gap_after: 40
- bubble_1:
  - speaker: 노미란(기억)
  - type: memory
  - text_km: "…ដោយគ្មានការអនុញ្ញាត…"
  - text_ko: "…무단으로…"
  - place: x 27% · y 10% · w 45% · tail ↓ (비네트 속 쓰는 손)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "តែមួយសន្លឹកនេះ ចប់រឿង។"
  - text_ko: "이 한 장이면 끝이야."
  - place: x 68% · y 26% · w 32% · tail ↓ (아래 그녀의 손)
  - read_order: 2

### panel_048
- art_space: top 40% (x 3–97%, y 2–40%): the high off-white wall above the counter and the ceiling in blue-grey shade; the dark display strip (from y 42%) stays clear
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "បើយកទៅ មានកំណត់ត្រាយកចេញ។ បើហែក មានកំណត់ត្រាកែតម្រូវ។"
  - text_ko: "가져가시면 반출 기록, 찢으시면 정정 기록이 남습니다."
  - place: x 34% · y 10% · w 64% · tail ↙ (서하, 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "មូលហេតុកែតម្រូវ… ប្រធានក្រុមនឹងសរសេរថាដូចម្ដេច?"
  - text_ko: "정정 사유엔… 뭐라고 쓰실 거예요?"
  - place: x 36% · y 27% · w 56% · tail ↙ (서하, 왼쪽)
  - read_order: 2

### panel_049
- art_space: top 38% (x 3–97%, y 2–38%): the high upper wall above the glass doors in blue-grey shade — never over the bright glass (from y 40%)
- gap_after: 240
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "…យកទៅដាក់កន្លែងដើមវិញ។"
  - text_ko: "…제자리에 갖다 놔."
  - place: x 52% · y 28% · w 48% · tail ↓ (유리문의 노미란 실루엣)
  - read_order: 1

### panel_050
- art_space: top 40% (x 3–97%, y 2–40%): the high off-white wall beyond the rows of seats in blue-grey shade; her head (from y 40%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "បង! ខលពេញមួយយប់ មិនចូលសោះ។ បងនៅរស់អត់?"
  - text_ko: "누나! 밤새 전화 안 되던데. 살아 있어?"
  - place: x 35% · y 12% · w 64% · tail ↓ (그녀의 귀에 댄 휴대폰, 화면 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "អើ។ បងនៅរស់។"
  - text_ko: "응. 살아 있어."
  - place: x 62% · y 30% · w 30% · tail ↙ (서하의 입)
  - read_order: 2

### panel_051
- art_space: top 24%, left and centre (x 3–70%, y 2–24%): the out-of-focus wall just above the phone
- gap_after: 120
- bubble_1:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "កុំភ្លេចការសន្យាណា៎! បងភ្លេចរហូត។"
  - text_ko: "약속 잊지 마! 누나 맨날 까먹잖아."
  - place: x 32% · y 12% · w 56% · tail ↙ (휴대폰)
  - read_order: 1

### panel_052
- art_space: upper left (x 3–46%, y 2–32%): out-of-focus grey-blue seats and the blue floor light — her face (upper right), the phone and the sticker (y 44–60%) stay clear
- gap_after: 720
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "អើ ប្រាកដហើយ។"
  - text_ko: "응, 당연하지."
  - place: x 24% · y 10% · w 36% · tail ↘ (위 오른쪽 그녀의 입)
  - read_order: 1
- bubble_2:
  - speaker: 지호(전화)
  - type: dialogue
  - text_km: "ស៊ូៗ បង!"
  - text_ko: "누나, 버텨!"
  - place: x 30% · y 22% · w 30% · tail ↗ (귀에 댄 휴대폰)
  - read_order: 2

### panel_053
- art_space: (1) upper left (x 3–47%, y 3–26%): the plain blurred wall above Seoha's head; (2) right of and below the clock (x 51–86%, y 17–32%): plain off-white wall and the right half of the thin blank display strip — nothing important there; the clock face (x 50–64%, y 3–17%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំសូមប្រគល់បាច់សោវិញ។"
  - text_ko: "열쇠 반납하겠습니다."
  - place: x 25% · y 10% · w 44% · tail ↙ (서하, 왼쪽 앞)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "នឿយហត់ហើយ អូន សឺហា។"
  - text_ko: "수고했어, 서하 씨."
  - place: x 68% · y 24.5% · w 32% · tail ↓ (노미란)
  - read_order: 2

### panel_054
- art_space: upper left (x 3–50%, y 3–30%): the blurred frosted-glass partition beyond the counter — Nomiran's upper body (right) stays clear; same bubble spot as panel_057
- gap_after: 120
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "មុនចេញពីធ្វើការ… តែមួយនេះសិន។"
  - text_ko: "퇴근 전에, 이것만."
  - place: x 27% · y 14% · w 46% · tail ↗ (오른쪽 위 노미란)
  - read_order: 1

### panel_055
- art_space: none (silent — no bubble area needed)
- gap_after: 480
- silent: true
- note: 무대사 — 같은 서류, 반대 손(클리프 정지)

### panel_056
- art_space: top 40% (x 3–97%, y 6–40%): the plain off-white wall above Nomiran's head; the lower edge of the dark display strip (top edge of the frame) stays clear
- gap_after: 240
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "អូន សឺហា…"
  - text_ko: "서하 씨,"
  - place: x 35% · y 26% · w 40% · tail ↙ (노미란)
  - read_order: 1

### panel_057
- art_space: top 24%, left and centre (x 3–66%, y 2–24%): the out-of-focus frosted-glass partition beyond the counter — her hand entering at the upper right stays clear; same bubble spot as panel_054
- gap_after: 720
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ចុះហត្ថលេខាត្រង់នេះបានហើយ មែនទេ?"
  - text_ko: "여기 서명만 해. 그치?"
  - place: x 27% · y 14% · w 46% · tail ↗ (오른쪽 위 노미란)
  - read_order: 1

### panel_058
- art_space: caption: the bottom 8% band (x 0–100%, y 92–100%), the plain grey face of the counter's front edge in shadow
- gap_after: 1200
- note: 대사 없음 — 마감 캡션만 패널 맨 아래
- bubble_1:
  - speaker: 캡션
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៣ —"
  - text_ko: "— 3화에 계속 —"
  - place: x 50% · y 95.3% · w 50% · tail none (마감 캡션 박스)
  - read_order: 1
