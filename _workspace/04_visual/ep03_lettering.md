# EP03 레터링 명세 「인수인계」 — letterer (크메르어판)

- 작성: letterer · 기준일 2026-11-18 · v1
- 입력: `03_episode/ep03_script_final.md` v1(KM 문구의 유일한 원천) · `04_visual/ep03_shotlist.md` v1(`bubble space` → `art_space`·`place`, §D 비네트, §H 전달 사항) · `03_episode/ep03_beatsheet.md` v1(`gap_after` — 비트시트 gap 열 = 대본 메타 = 샷리스트 beat 줄, 60컷 모두 일치 확인) · `02_story/glossary_km.md` v6 · 반복 원본 자리 `04_visual/ep01_lettering.md` · `ep02_lettering.md`
- 다음 독자: **prompt-smith**(`art_space`를 Flow 프롬프트의 빈 영역 문장으로 그대로) → episode-compositor(`km_tool.py build` + 배치 점검) → quality-reviewer
- 이미지에는 글자가 없다. 이 문서의 말풍선·효과음·캡션은 전부 뷰어가 그린다(`km_tool.py build`).
- 수: 60패널 · 말풍선 81(대사 80 = `KM:` 줄 1:1 + 마감 캡션 1) · 효과음 4(대본 `KM 효과음` 4줄, 나누지 않음) · 무대사 5(P23·P26·P30·P48·P51) · 효과음만 3(P19·P24·P56) · env 0 · 기억 5 · 생각 14

## 읽는 법

- `art_space` = 그 컷의 그림이 비워 둘 조용한 배경(영문, prompt-smith가 그대로 옮긴다). 괄호 속 좌표 = 패널 왼쪽 위에서 잰 %. 같은 문장 안의 "stay clear / stays below / starts at y …" 좌표는 비울 곳이 아니라 **말풍선이 피해 가는 것**(얼굴·손·종이·시계 면 — 그림에서 그 자리에 둔다)이다. 무대사 컷은 `none`.
- `place`: `x`/`y` = 말풍선 중심, `w` = 최대 폭(패널 폭 대비 %). 꼬리 `↙ ↓ ↘`(아래) · `↖ ↑ ↗`(위). 괄호 = 꼬리가 가리키는 화자(화면 밖이면 그 가장자리).
- `text_km` = 대본 `KM:` 큰따옴표 안을 **스크립트로 그대로 복사**했다(손으로 다시 치지 않았다). `text_ko`는 참고용.
- `type`: dialogue · thought(점선, 생각 점) · memory(푸른 번짐 테두리: 기억/리플레이 말풍선) · narration(마감 캡션). P21의 `서하(쓰며 소리 내어)`, P9의 속삭임은 뷰어에 따로 종류가 없어 dialogue다. P57–P59 `목소리(창구)`는 화자가 보이지 않는 dialogue(꼬리 = 투입구·말구멍·창구 쪽).
- 효과음 `size` = 글자 크기(패널 폭 대비 %), `rot` = 기울기(도).

## 배치 규칙 (이 회차에서 지킨 것)

1. **뷰어 폭 제약: `x + w ≤ 100`, 그리고 말풍선 왼쪽 끝 `x − 실제 폭/2 ≥ 2`.** 뷰어는 말풍선을 `left: x%`에 두고 가운데 정렬하므로 폭이 `100 − x`로 잘린다(EP01·EP02 노트). 긴 말풍선은 중심을 x 32–38에 두었다. 배치 점검 때 x를 오른쪽으로 옮기면 w도 같이 줄여야 한다.
2. **줄 수·충돌 실측.** 뷰어와 같은 CSS(`viewer-km.html`의 `.bubble`·`.sfx` 규칙, 생각 점·꼬리, glossary 이름 묶기 그대로)와 Battambang·Koulen(Google Fonts)으로 패널 폭 360·375·400·430·720px에서 60컷을 그려 확인했다: 모든 말풍선 **2줄 이하**(1줄 46 · 2줄 35, 다섯 폭 모두 같다), 패널 밖 0, 같은 컷 말풍선끼리 겹침 0(꼬리·생각 점 포함, 둥근 모양 기준), 말풍선·꼬리·효과음이 `art_space` 밖이나 얼굴·손·종이·시계 면 위에 걸치는 것 0.
3. 오프라인 대체 글꼴(Khmer UI, 글자가 넓고 줄이 높다)에서만: 3줄 P7 ② · P8 ② · P37 ① · P44 ① · P46 ①, 말풍선끼리 닿음 P15 · P16 · P20 · P32 · P33 · P37 · P44 · P46 · P52, 위·아래 가장자리에 살짝 걸림 P16 · P20 · P21 · P33 · P37 · P44 · P46 · P60 캡션. 빈자리 크기의 한계라 수용(EP01·EP02와 같은 판단). 온라인 Battambang에서는 전부 위 2번대로다.
4. **반복 짝은 같은 자리.** EP03 안: P1 ↔ P14(x 40 · y 10 · w 60) · P7 ↔ P8(같은 위 34% 띠) · P21 ↔ P44(같은 문장 ② x 32 · y 29.5 · w 60) · P22 ↔ P49(① x 32 · y 10 · w 60) · P31 ↔ P46(① x 34 · y 10.5 · w 64, ② x 27 · y 29 · w 48) · P35 ↔ P41 ① ↔ P57(x 24 · y 12 · w 40 ↘). 이전 회차 구도·문장 반복: P4 = EP02 P35(① x 34 · y 10 · w 60, ② x 50 · y 25.5 · w 50, 같은 두 문장) · P29 = EP01 P23(x 65 · y 12 · w 35 ↙, 같은 문장 E10) · P34 = EP01 P40(x 50 · y 10 · w 50 ↓) · P47 = EP01 P45(x 34 · y 9 · w 56) · P60 = EP02 P58 캡션(x 50 · y 95.3 · w 50) · 효과음 P19 = EP01 P7·P28(x 84 · y 42 · size 9 · rot −6) · P24 = EP01 P13(x 83 · y 48 · size 8 · rot −8), P56은 같은 `ទីង!`을 거의 같은 자리(x 82 · y 46)에.
5. 한 컷 말풍선 1–2개(효과음 별도 — P47만 말풍선 1 + 효과음 1). 같은 화자가 두 말풍선으로 이어 말하는 컷은 위 말풍선의 꼬리가 아래 말풍선에 닿지 않게 엇갈려 놓았다: P44 ①은 오른쪽 위, ②는 왼쪽 아래(①의 꼬리는 ②의 오른쪽 끝 바깥), P45 ①의 꼬리 ↙는 ②의 왼쪽 끝 바깥, P15 ①의 꼬리 ↙는 ②의 왼쪽.
6. **효과음:** 대본 4줄 그대로(나누지 않음). P30은 효과음도 말풍선도 없다(EP01 P25 «ភ្លឹប… ភ្លឹប—»의 부재가 비트).
7. **생각 말풍선의 점은 뷰어가 항상 말풍선 아래 왼쪽에 찍는다.** 그래서 생각 말풍선은 생각하는 사람의 위에 두고, 점이 다음 말풍선·얼굴에 닿지 않게 위 말풍선은 넓게, 아래 말풍선은 조금 오른쪽으로 놓았다(P12 · P22 · P33 · P39 · P40). P6 ②만 대본대로 큰 컷 아래 띠에 있어 점이 그 띠 안(y 99 이내) 아래쪽에 찍힌다.
8. 기억 말풍선 5: P1(꼬리 ↗ 위 오른쪽 프레임 밖 — 리캡) · P6 ① · P11 · P28(비네트 안 위쪽, 꼬리는 비네트 속 인물) · P46 ②(꼬리 없음, 말구멍 왼쪽 어둠 — 대본 "프레임 위쪽에 흐릿하게"). 뷰어의 기억 말풍선은 푸른 번짐 테두리라 비네트 안·밖 어디서나 기억으로 읽힌다.
9. 이름 묶기: `អូន សឺហា`(P3 · P13) · `មន្ត្រី កាង សឺហា`(P15) · `កាង សឺហា`(P59)는 뷰어가 한 줄로 묶는다 — 실측에 포함했다.

## 샷리스트 빈자리와 달라진 곳 (prompt-smith는 아래 `art_space`를 따른다)

- **panel_021 · panel_044:** 위 36%(1:1)에는 P44의 두 2줄 말풍선(한 줄로 쓰면 패널 폭의 82% · 70%)이 꼬리까지 들어가지 않는다. → 두 컷 모두 **위 41%(x 2–97 · y 2–41)**, **일지 면은 y 42% 아래부터**(첫 줄의 펜 끝·손끝도 샷리스트 y 44–48보다 조금 아래). 같은 문장 ②는 두 컷 같은 자리(x 32 · y 29.5 · w 60), P44 ①은 오른쪽 위(x 50 · y 10.5 · w 50)로 엇갈렸다.
- **panel_028:** 비네트 위 1/3(y 3–13)은 2줄 기억 말풍선(73%)에 낮다. → **비네트 윗부분 + 그 오른쪽 어둠 x 2–97 · y 2–18**, **비네트 속 구정민의 얼굴은 y 19% 아래부터**(비네트 x 4–60 · y 3–34는 그대로 — 얼굴을 비네트 아래쪽에 둔다).
- **panel_033:** 위 32% → **38%**, **머리카락·이마는 y 39% 아래부터**(둘째 생각 말풍선이 2줄 + 생각 점).
- **panel_045:** 형광등과 머리 사이 띠 y 12–34는 두 2줄 말풍선(70% · 72%)에 좁다. → **x 3–97 · y 11–41**, **그녀의 머리는 y 42% 아래부터**(샷리스트 y 36–50보다 아래, 든 서식은 머리 아래). 형광등 자리(x 8–48 · y 2–10)는 그대로 띠 위에 비켜 있다.
- **panel_016:** ② 꼬리를 ↘(노미란의 팔·손, 오른쪽 아래)로 — 샷리스트는 둘 다 ↗였지만 ②는 그 손이 화면 안에 있다. 꼬리 끝 때문에 띠를 y 36 → **38**(바인더는 y 44 아래, 롤 x 86–100은 그대로 비켜 감).
- **panel_031 · panel_046:** 말구멍 왼쪽 자리 y 22–38 → **y 22–40**(P31 ② 꼬리 끝이 그녀의 얼굴 윗선 y 40을 가리킨다). P46 위 띠는 y 1부터(① 2줄).
- **panel_007 · panel_008:** 샷리스트 "위 36%"는 노미란 머리(y 34)와 겹쳐 **위 34%**로 적었다(② 꼬리 끝이 그녀 머리 윗선을 가리킨다).
- 작은 조정(같은 띠 안): P6 아래 띠 y 98 → 99(생각 점) · P40 y 30 → 31(② 생각 점, 종이는 y 32부터 그대로) · P5 · P8 · P11 · P38 왼쪽 끝 x 3 → 2(넓은 말풍선). 한 줄로 만들려고 샷리스트 권장 위치를 조금 옮긴 곳: P27(x 50 · w 50, 띠 x 24–97 안) · P38 ②(x 66 · w 34).

---

### panel_001
- art_space: top band, left and centre (x 3–78%, y 2–21%): the out-of-focus frosted-glass partition beyond the counter; Nomiran's forearm entering at the upper right (x 84–100%, from y 30%) and the form (from y 26%) stay out of it; same area as panel_014
- gap_after: 40
- bubble_1:
  - speaker: 노미란(기억)
  - type: memory
  - text_km: "ចុះហត្ថលេខាត្រង់នេះបានហើយ មែនទេ?"
  - text_ko: "여기 서명만 해. 그치?"
  - place: x 40% · y 10% · w 60% · tail ↗ (위 오른쪽 프레임 밖 — 카운터 건너편 노미란의 기억 목소리)
  - read_order: 1

### panel_002
- art_space: top 30% (x 3–90%, y 2–30%): the plain, out-of-focus off-white wall above both heads (Nomiran from y 34%, Seoha from y 40%)
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំសូមអានសិន ទើបចុះហត្ថលេខា។"
  - text_ko: "읽어 보고 서명하겠습니다."
  - place: x 48% · y 15% · w 52% · tail ↘ (서하, 오른쪽)
  - read_order: 1

### panel_003
- art_space: upper band (x 3–92%, y 6–30%): the plain off-white wall above Nomiran's head (head from y 32%); the lower edge of the dark display strip (y 0–5%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "…អូន សឺហា ម៉ត់ចត់ណាស់ មែនទេ?"
  - text_ko: "…서하 씨는 참 꼼꼼해. 그치?"
  - place: x 46% · y 18% · w 54% · tail ↓ (노미란)
  - read_order: 1

### panel_004
- art_space: top 34% (x 3–97%, y 2–34%): the out-of-focus frosted-glass partition and off-white wall beyond the form — never on the form itself (from y 36%); same bubble spots as EP02 panel_035
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

### panel_005
- art_space: top 18% (x 2–97%, y 2–18%): the out-of-focus frosted-glass partition beyond the counter — the paper (from y 20%) and her fingers lifting its corner (y 18–30%) stay below
- gap_after: 480
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "…អ្នកទទួលវេន ទទួលយកឋានៈ ជាអ្នកទទួលបន្ទុក ក្នុងបញ្ជីវេនផងដែរ។"
  - text_ko: "…인수자는, 당직 명부상 담당자 지위를 함께 인수한다."
  - place: x 34% · y 9% · w 64% · tail ↙ (화면 밖 서하 — 종이 귀퉁이를 든 그녀의 손 쪽)
  - read_order: 1

### panel_006
- art_space: (1) the memory picture's top third and the blurred wall to its right (x 4–96%, y 3–12%): out-of-focus dark desk glass inside the frame, plain off-white wall outside it — the remembered hand on the binder stays below y 13%; (2) bottom band (x 4–96%, y 85–99%): the plain, out-of-focus grey front edge of the counter — her eyes (y 34–56%) and the back of the form (y 58–84%) stay clear
- gap_after: 120
- bubble_1:
  - speaker: 노미란(기억)
  - type: memory
  - text_km: "ក្នុងបញ្ជីវេន មានឈ្មោះបង។"
  - text_ko: "명부엔 내 이름 있어."
  - place: x 32% · y 7.5% · w 52% · tail ↓ (비네트 속 노미란의 손)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "អ្នកទទួលបន្ទុក… គឺអ្នកដែល អ្នកដាក់ពាក្យមកសួររក។"
  - text_ko: "(담당자… 민원인이 찾아오는 사람.)"
  - place: x 38% · y 91% · w 62% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_007
- art_space: top 34% (x 3–97%, y 2–34%): the plain, out-of-focus off-white wall above both heads (Nomiran from y 34%, Seoha from y 40%); same band as panel_008
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ការប្ដូរបញ្ជីវេន ជាសមត្ថកិច្ចរបស់ ការិយាល័យរដ្ឋបាល។"
  - text_ko: "명부 변경은 총무과 소관입니다."
  - place: x 50% · y 9% · w 50% · tail ↘ (서하, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ការិយាល័យរដ្ឋបាល បងដាក់រួចហើយ។ ចាំតែការឯកភាព ពីលោកប្រធានការិយាល័យ។"
  - text_ko: "총무과엔 벌써 올렸어. 과장님 결재만 나면 끝이야."
  - place: x 36% · y 25.5% · w 64% · tail ↙ (노미란, 왼쪽)
  - read_order: 2

### panel_008
- art_space: top 34% (x 2–97%, y 2–34%): the plain, out-of-focus off-white wall above both heads (Nomiran from y 34%, Seoha from y 40%); same band as panel_007
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "សៀវភៅកំណត់ហេតុ… កត់ថា ការផ្ទេរការងារ ដោយគ្មានការអនុញ្ញាត។"
  - text_ko: "일지엔… 무단 전가로 남아 있습니다."
  - place: x 36% · y 9% · w 64% · tail ↘ (서하, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "អញ្ចឹងហើយ បានជាយើងធ្វើជាផ្លូវការ។ ពេលនេះ មានការអនុញ្ញាតហើយ មែនទេ?"
  - text_ko: "그러니까 정식으로 하자는 거잖아. 이러면 무단이 아니지."
  - place: x 34% · y 25.5% · w 64% · tail ↙ (노미란, 왼쪽)
  - read_order: 2

### panel_009
- art_space: top 38% (x 3–97%, y 2–38%): the plain off-white wall above Nomiran's head (from y 40%); the foreground hand (from y 64%) stays clear
- gap_after: 120
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "មុនគេចុះធ្វើសវនកម្ម រៀបចំឱ្យរួចសិន ល្អទាំងអស់គ្នា។"
  - text_ko: "감사 들어오기 전에 정리해야 서로 좋지."
  - place: x 36% · y 9% · w 62% · tail ↓ (노미란(속삭임))
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ការវាយតម្លៃកម្មសិក្សា… អ្នកណាជាអ្នកសរសេរ ដឹងហើយណា៎?"
  - text_ko: "시보 평정, 누가 쓰는지 알지?"
  - place: x 38% · y 26% · w 60% · tail ↓ (노미란(속삭임))
  - read_order: 2

### panel_010
- art_space: top 40% (x 3–97%, y 2–40%): the plain off-white wall above Nomiran's head (from y 40%) — the edge of the dark display strip stays at the very top edge, out of it
- gap_after: 120
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "មិនចង់ ក៏មិនអីដែរ។ ខែក្រោយ មានមន្ត្រីថ្មីមកទៀត។"
  - text_ko: "싫으면 말고. 다음 달에 신규 또 와."
  - place: x 36% · y 11% · w 62% · tail ↙ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "វាមិនអានដល់ខាងខ្នងទេ មើលទៅ។"
  - text_ko: "걔는 뒷면까지 안 읽을걸."
  - place: x 48% · y 30% · w 52% · tail ↙ (노미란)
  - read_order: 2

### panel_011
- art_space: the memory picture's top third and the blurred wall to its right (x 2–96%, y 3–12%): the dim corridor above the glass inside the frame, plain off-white wall outside it — Jaewoo's half-lit face in the memory picture stays below y 12%
- gap_after: 40
- bubble_1:
  - speaker: 전임자(기억)
  - type: memory
  - text_km: "ព្រោះគ្នារត់ចោល ទើបឯងមកនៅទីនេះទេតើ។"
  - text_ko: "내가 도망쳐서 네가 온 거잖아."
  - place: x 34% · y 7.5% · w 64% · tail ↘ (비네트 속 재우)
  - read_order: 1

### panel_012
- art_space: top 40% (x 3–97%, y 2–40%): the out-of-focus frosted-glass partition and wall above her forehead (from y 40%)
- gap_after: 120
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី១។ បើខ្ញុំមិនទទួល… អ្នកបន្ទាប់ត្រូវទទួល។"
  - text_ko: "(하나. 내가 안 받으면… 다음 사람이 받는다.)"
  - place: x 34% · y 10% · w 64% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី២។ អ្នកនោះ… មិនអានដល់ខាងខ្នងឡើយ។"
  - text_ko: "(둘. 그 사람은… 뒷면을 안 읽는다.)"
  - place: x 36% · y 28% · w 64% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_013
- art_space: upper band (x 3–80%, y 2–20%): the high upper wall and ceiling of the two-storey lobby, out of focus — both heads (from y 30%), the desk set and the red roll stay below
- gap_after: 480
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "មក… អូន សឺហា។"
  - text_ko: "자, 서하 씨."
  - place: x 50% · y 13% · w 40% · tail ↓ (노미란)
  - read_order: 1

### panel_014
- art_space: top band (x 3–90%, y 2–21%): the out-of-focus frosted-glass partition beyond the counter — the form (from y 26%) stays below; same area as panel_001
- gap_after: 240
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ខ្ញុំទទួល… ទាំងដឹងខ្លួន។"
  - text_ko: "(알고… 받는 거야.)"
  - place: x 40% · y 10% · w 60% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_015
- art_space: upper band (x 3–80%, y 6–30%): the plain off-white wall above Nomiran's head (head from y 32%); the lower edge of the dark display strip (y 0–5%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "អ្នកទទួលវេន… មន្ត្រី កាង សឺហា។"
  - text_ko: "인수자, 강서하 주무관."
  - place: x 36% · y 11.5% · w 54% · tail ↙ (노미란)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "សម្រេចចិត្តត្រូវហើយ អូន។"
  - text_ko: "잘 생각했어."
  - place: x 54% · y 24% · w 46% · tail ↓ (노미란)
  - read_order: 2

### panel_016
- art_space: top 38%, left and centre (x 3–80%, y 2–38%): the back of the high counter front and the out-of-focus bright lobby beyond it — the red roll in the right corner (x 86–100%, y 36–50%) and the binder stay clear
- gap_after: 40
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ឥឡូវ បញ្ជីវេនក៏ជារបស់អូនហើយ។"
  - text_ko: "이제 명부도 네 거야."
  - place: x 30% · y 10% · w 56% · tail ↗ (오른쪽 위 프레임 밖 노미란)
  - read_order: 1
- bubble_2:
  - speaker: 노미란
  - type: dialogue
  - text_km: "ប្រាក់ឧបត្ថម្ភ ក៏ចេញឈ្មោះអូនដែរ។ ល្អ មែនទេ?"
  - text_ko: "수당도 네 앞으로 나와. 좋잖아?"
  - place: x 36% · y 26.5% · w 62% · tail ↘ (노미란의 팔·손, 오른쪽 아래)
  - read_order: 2

### panel_017
- art_space: upper-left band (x 3–66%, y 2–20%): the high upper wall and ceiling of the hall, out of focus — the top of the staircase (x 80–100%) and Nomiran's head (from y 24%) stay clear
- gap_after: 120
- bubble_1:
  - speaker: 노미란
  - type: dialogue
  - text_km: "បងឡើងទៅសុំការឯកភាព ពីលោកប្រធានការិយាល័យសិន។"
  - text_ko: "과장님 결재 받고 올게."
  - place: x 34% · y 10% · w 62% · tail ↘ (계단의 노미란, 오른쪽 아래)
  - read_order: 1

### panel_018
- art_space: top 28% (x 3–90%, y 2–28%): the high upper wall of the lobby, out of focus — her bowed head (from y 36%) stays below
- gap_after: 480
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "…ជាលើកដំបូង ដែលខ្ញុំចាញ់។"
  - text_ko: "(…처음으로, 졌다.)"
  - place: x 52% · y 20% · w 48% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_019
- art_space: sound effect only: the plain steel face of the fire door at its right edge, middle (x 72–96%, y 34–50%), as in EP01 panel_007/028; the upper-left wall (x 3–38%, y 3–26%) stays plain like the original, and the clock face stays clear
- gap_after: 240
- sfx_1:
  - text_km: "ផាំង!"
  - text_ko: "쿵"
  - place: x 84% · y 42% · size 9% · rot -6

### panel_020
- art_space: top 38% (x 3–97%, y 2–38%): the glass window beyond the desk and the dim corridor behind it
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ឯងកាន់បញ្ជីវេនមកឬ?"
  - text_ko: "명부를 네가 들고 왔어?"
  - place: x 56% · y 10% · w 42% · tail ↗ (오른쪽 프레임 밖 선임)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "…គេថា ឥឡូវជារបស់ខ្ញុំហើយ។"
  - text_ko: "…이제 제 거래요."
  - place: x 32% · y 27% · w 50% · tail ↙ (서하, 아래 왼쪽)
  - read_order: 2

### panel_021
- art_space: top 41% (x 2–97%, y 2–41%): out-of-focus darkness beyond the journal — the journal pages start at y 42% or lower and are never under a bubble; same area as panel_044
- gap_after: 40
- bubble_1:
  - speaker: 서하(쓰며 소리 내어)
  - type: dialogue
  - text_km: "ម៉ោង១០យប់ ចាប់ផ្ដើមវេនប្រចាំការ។"
  - text_ko: "22시, 당직 개시."
  - place: x 44% · y 9% · w 56% · tail ↘ (그녀의 손(펜), 아래 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하(쓰며 소리 내어)
  - type: dialogue
  - text_km: "អ្នកប្រចាំការ និងអ្នកទទួលបន្ទុក… គឺមនុស្សតែមួយ។"
  - text_ko: "당직자와 담당자… 동일인."
  - place: x 32% · y 29.5% · w 60% · tail ↘ (그녀의 손(펜), 아래 오른쪽)
  - read_order: 2

### panel_022
- art_space: top 34% (x 3–97%, y 2–34%): the shaded grey-green steel side of the desk above the drawers and the out-of-focus dark room above it; the bottom drawer stays plain; same area as panel_049
- gap_after: 120
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី១។ ស៊ូរហូតដល់ម៉ោង៦ព្រឹក។"
  - text_ko: "(하나. 06시까지 버틴다.)"
  - place: x 32% · y 10% · w 60% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទី២។ អ្វីដែលទទួល… ខ្ញុំជាអ្នកចាត់ការ។"
  - text_ko: "(둘. 받은 건… 내가 처리한다.)"
  - place: x 42% · y 24% · w 58% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_023
- art_space: none (silent — no bubble area needed)
- gap_after: 40
- silent: true
- note: 무대사 — 복도 끝 떨림, 보따리 실루엣

### panel_024
- art_space: sound effect only: the dim corridor seen through the glass right above the bell (x 70–96%, y 42–54%), as in EP01 panel_013; the top 40% stays plain as in the original
- gap_after: 120
- sfx_1:
  - text_km: "ទីង!"
  - text_ko: "띵!"
  - place: x 83% · y 48% · size 8% · rot -8

### panel_025
- art_space: top 38% (x 3–97%, y 2–38%): the corridor ceiling seen above the glass, even and dim — her head (from y 48%) and the speaking grille (y 38–46%) stay below
- gap_after: 40
- bubble_1:
  - speaker: 민원인
  - type: dialogue
  - text_km: "នាងខ្ញុំ សូមដាក់ពាក្យមួយ។"
  - text_ko: "신고 하나, 하겠습니다."
  - place: x 50% · y 24% · w 44% · tail ↓ (유리 너머 그녀의 머리)
  - read_order: 1

### panel_026
- art_space: none (silent — no bubble area needed)
- gap_after: 120
- silent: true
- note: 무대사 — 흰 양말과 벗어 둔 신발

### panel_027
- art_space: top 36%, centre and right (x 24–97%, y 2–36%): the dark shelf tops and the dim corridor above the glass — her head (from y 46%) and Seoha's (from y 40%) stay below
- gap_after: 40
- bubble_1:
  - speaker: 민원인
  - type: dialogue
  - text_km: "តើអ្នកទទួលបន្ទុក មានវត្តមានទេ?"
  - text_ko: "담당자분 계십니까?"
  - place: x 50% · y 11% · w 50% · tail ↘ (유리 너머 민원인, 오른쪽)
  - read_order: 1

### panel_028
- art_space: the memory picture's upper part and the calm darkness to its right (x 2–97%, y 2–18%): the dim corridor above Koo's head inside the frame (his face in the memory picture starts at y 19% or lower), the glass and dim corridor beyond the desk outside it; the open roster (from y 40%) stays clear
- gap_after: 40
- bubble_1:
  - speaker: 구정민(기억)
  - type: memory
  - text_km: "អ្នកដែលគ្មានឈ្មោះក្នុងបញ្ជីវេន… ជាអ្នកទទួលបន្ទុកឬ?"
  - text_ko: "명부에 없는 분이 담당자라고요?"
  - place: x 34% · y 9.5% · w 64% · tail ↘ (비네트 속 구정민)
  - read_order: 1

### panel_029
- art_space: upper band, centre and right (x 30–97%, y 2–28%): the dim corridor above her head (her head from y 46%) — same bubble spot as EP01 panel_023; the rule sheet and Seoha's head stay clear
- gap_after: 0
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំជាអ្នកទទួលបន្ទុក។"
  - text_ko: "제가 담당자입니다."
  - place: x 65% · y 12% · w 35% · tail ↙ (서하의 머리, 아래 왼쪽)
  - read_order: 1

### panel_030
- art_space: none (silent — no bubble area needed)
- gap_after: 720
- silent: true
- note: 무대사·무음 — 떨리지 않는 형광등 (EP01 P25의 효과음이 없다)

### panel_031
- art_space: (1) top band (x 3–97%, y 2–22%) and (2) left of the speaking grille (x 3–54%, y 22–40%): plain darkness beyond the glass — her face (from y 40%) and the grille (x 58–78%, y 24–38%) stay clear; same areas as panel_046
- gap_after: 40
- bubble_1:
  - speaker: 민원인
  - type: dialogue
  - text_km: "លោកស្រីទេតើ ជាអ្នកទទួលបន្ទុក។"
  - text_ko: "담당자분이시군요."
  - place: x 34% · y 10.5% · w 64% · tail ↘ (유리 너머 민원인, 아래 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 민원인
  - type: dialogue
  - text_km: "នាងខ្ញុំ បានអានរួចហើយ… ក្នុងបញ្ជីវេន។"
  - text_ko: "명부에서… 이미 읽었습니다."
  - place: x 27% · y 29% · w 48% · tail ↘ (유리 너머 민원인, 아래 오른쪽)
  - read_order: 2

### panel_032
- art_space: top 25% (x 3–97%, y 2–25%): the dark shelf tops and the ceiling — the senior's head (from y 28%) stays below
- gap_after: 120
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា ច្បាប់ មិនកុហកទេ។"
  - text_ko: "수칙은 거짓말 안 한대."
  - place: x 28% · y 8% · w 46% · tail ↙ (선임)
  - read_order: 1
- bubble_2:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា វាប្រើឱ្យកុហក។"
  - text_ko: "거짓말을 시킨대."
  - place: x 54% · y 18.5% · w 40% · tail ↙ (선임)
  - read_order: 2

### panel_033
- art_space: top 38% (x 3–97%, y 2–38%): out-of-focus darkness above her head — her hair and forehead start at y 39% or lower
- gap_after: 240
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ពាក្យដដែល… តែលើកនេះ វាជាការពិត។"
  - text_ko: "(같은 말인데… 이번엔 사실이야.)"
  - place: x 36% · y 9% · w 62% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "អញ្ចឹង ចាប់ពីពេលនេះ… អ្វីៗទាំងអស់ មករកខ្ញុំ។"
  - text_ko: "(그러니까 이제… 다 나한테 와.)"
  - place: x 52% · y 24.5% · w 48% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_034
- art_space: top 18% (x 5–95%, y 2–18%): the dim corridor ceiling seen above the glass — same bubble spot as EP01 panel_040
- gap_after: 40
- bubble_1:
  - speaker: 민원인
  - type: dialogue
  - text_km: "នាងខ្ញុំ នឹងផ្លាស់មកនៅ… ក្នុងបន្ទប់ប្រចាំការនេះ។"
  - text_ko: "이 당직실로 전입하겠습니다."
  - place: x 50% · y 10% · w 50% · tail ↓ (유리 너머 민원인)
  - read_order: 1

### panel_035
- art_space: upper left (x 3–46%, y 2–40%): the dark corridor beyond the glass — the coat front and hands behind the glass (x 48–92%) stay clear; same bubble spot as panel_041 and panel_057
- gap_after: 0
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ទេ។ នោះ—"
  - text_ko: "아니요, 그건—"
  - place: x 24% · y 12% · w 40% · tail ↘ (그녀의 손, 아래 오른쪽)
  - read_order: 1

### panel_036
- art_space: top 28% (x 4–96%, y 2–28%): the out-of-focus dim glass and room above the two hands
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ទី១។"
  - text_ko: "1번."
  - place: x 18% · y 14% · w 24% · tail ↙ (왼쪽에서 들어온 선임의 손)
  - read_order: 1

### panel_037
- art_space: top 30% (x 4–96%, y 2–30%): out-of-focus darkness beyond the partition, above the top edge of the paper (the paper starts at y 30% or lower); the faded sticker stays clear
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ទី១។ ពីម៉ោង១០យប់ ដល់ម៉ោង៦ព្រឹក ត្រូវទទួលពាក្យ ពីអ្នកដែលមកបញ្ជរគ្រប់រូប។"
  - text_ko: "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다."
  - place: x 36% · y 9% · w 64% · tail ↙ (왼쪽 아래 프레임 밖 서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "មិនត្រូវបណ្ដេញទៅវិញឡើយ។"
  - text_ko: "돌려보내지 않는다."
  - place: x 46% · y 23% · w 50% · tail ↙ (왼쪽 아래 프레임 밖 서하)
  - read_order: 2

### panel_038
- art_space: top 38% (x 2–97%, y 2–38%): the dark shelf tops on the left, the dim corridor above the glass on the right — all three heads stay below
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "គេថា បើមិនទទួល… ខាងនោះ នឹងចូលមកខាងនេះ។"
  - text_ko: "안 받으면, 저쪽이 이쪽으로 들어온대."
  - place: x 28% · y 11% · w 52% · tail ↙ (선임, 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 민원인
  - type: dialogue
  - text_km: "នាងខ្ញុំ នឹងរង់ចាំ។"
  - text_ko: "기다리겠습니다."
  - place: x 66% · y 28% · w 34% · tail ↘ (유리 너머 노부인, 오른쪽 가장자리)
  - read_order: 2

### panel_039
- art_space: top 40% (x 3–97%, y 2–40%): the out-of-focus darkness of the shelves behind her — her forehead (from y 40%) stays below
- gap_after: 240
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "បើចូលមក… ការរស់នៅទីនេះ នឹងក្លាយជាការពិត។"
  - text_ko: "(들어오면… 여기 사는 게 사실이 돼.)"
  - place: x 36% · y 10% · w 60% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "នោះហើយ… ជាអ្វីដែលគាត់ចង់បាន។"
  - text_ko: "(그게… 이 사람이 원하는 거야.)"
  - place: x 50% · y 28% · w 48% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_040
- art_space: top 31%, left and centre (x 3–70%, y 2–31%): out-of-focus glass and dim corridor above the paper (paper from y 32%); the faded sticker (x 72–86%) stays clear
- gap_after: 120
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "មិនត្រូវបណ្ដេញទៅវិញ… គឺតែនៅមុខបញ្ជរ។"
  - text_ko: "(돌려보내지 않는다… 창구 앞에서는.)"
  - place: x 34% · y 9% · w 64% · 생각 점(꼬리 없음)
  - read_order: 1
- bubble_2:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ទទួលពាក្យ… មិនមែនអនុម័តទេ។"
  - text_ko: "(받는 건… 들어주는 게 아니야.)"
  - place: x 44% · y 23% · w 52% · 생각 점(꼬리 없음)
  - read_order: 2

### panel_041
- art_space: upper-left half (x 3–48%, y 2–54%): the dim corridor beyond the glass — her mouth and chin (x 52–90%) stay clear; same bubble spot as panel_035 and panel_057
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំសូមទទួលពាក្យនេះ។"
  - text_ko: "접수하겠습니다."
  - place: x 24% · y 12% · w 40% · tail ↘ (서하의 손, 아래)
  - read_order: 1
- bubble_2:
  - speaker: 민원인
  - type: dialogue
  - text_km: "…លោកស្រីទទួលទេតើ។"
  - text_ko: "…받으시는군요."
  - place: x 28% · y 30% · w 42% · tail ↗ (유리 너머 그녀의 입가, 오른쪽 위)
  - read_order: 2

### panel_042
- art_space: top 38% (x 3–97%, y 2–38%): the dim shelves and ceiling of the room behind the glass — her head (from y 38%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ពាក្យចុះបញ្ជីស្នាក់នៅ… អាសយដ្ឋានថ្មី បន្ទប់ប្រចាំការ ជាន់ក្រោមដីទី២។"
  - text_ko: "전입신고… 새 주소, 지하 2층 당직실."
  - place: x 38% · y 11% · w 62% · tail ↘ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "អាសយដ្ឋានមុន… ទុកទទេ។"
  - text_ko: "전 주소는… 비어 있네요."
  - place: x 56% · y 28% · w 40% · tail ↓ (서하)
  - read_order: 2

### panel_043
- art_space: top 40% (x 3–97%, y 2–40%): the dim corridor ceiling seen above the glass — her bowed head and the bundle (from y 40%) stay below
- gap_after: 120
- bubble_1:
  - speaker: 민원인
  - type: dialogue
  - text_km: "ឥវ៉ាន់ មានតែប៉ុណ្ណេះ។ នាងខ្ញុំ នឹងនៅស្ងៀមៗ។"
  - text_ko: "짐은 이것뿐입니다. 조용히 지내겠습니다."
  - place: x 50% · y 10% · w 50% · tail ↓ (유리 너머 노부인)
  - read_order: 1
- bubble_2:
  - speaker: 선임(목소리)
  - type: dialogue
  - text_km: "គេថា បើមិនចាត់ការមុនម៉ោង៦ព្រឹក វាទៅរកអ្នកទទួលបន្ទុក ក្នុងបញ្ជីវេន។"
  - text_ko: "06시까지 처리 못 하면, 명부상 담당자한테 간대."
  - place: x 36% · y 28% · w 64% · tail ↙ (화면 밖 선임 — 왼쪽 아래 가장자리, 그녀 뒤)
  - read_order: 2

### panel_044
- art_space: top 41% (x 2–97%, y 2–41%): out-of-focus darkness beyond the journal — the journal pages start at y 42% or lower and are never under a bubble; same area as panel_021
- gap_after: 40
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "យប់នេះ សៀវភៅកំណត់ហេតុបន្ទប់នេះ… មានតែមនុស្សម្នាក់។"
  - text_ko: "오늘 밤 이 방 일지엔… 한 사람뿐입니다."
  - place: x 50% · y 10.5% · w 50% · tail ↘ (그녀의 손끝, 아래 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "អ្នកប្រចាំការ និងអ្នកទទួលបន្ទុក… គឺមនុស្សតែមួយ។"
  - text_ko: "당직자와 담당자… 동일인."
  - place: x 32% · y 29.5% · w 60% · tail ↘ (그녀의 손끝, 아래 오른쪽)
  - read_order: 2

### panel_045
- art_space: the band between the ceiling light and her head (x 3–97%, y 11–41%): the dim shelves of the room behind the glass — the steady light (x 8–48%, y 2–10%) stays clear above it; her head starts at y 42% or lower and the form she holds sits below her head
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "លោកយាយ មិនដែលបានចូលមក ក្នុងបន្ទប់នេះទេ។"
  - text_ko: "신고하신 분은 이 방에 들어오신 적이 없습니다."
  - place: x 34% · y 18% · w 60% · tail ↙ (서하)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "ពាក្យនេះ មិនត្រូវនឹងការពិត… ខ្ញុំសូមបង្វិលពាក្យវិញ។"
  - text_ko: "사실과 다른 신고라, 반려합니다."
  - place: x 46% · y 33% · w 54% · tail ↓ (서하)
  - read_order: 2

### panel_046
- art_space: (1) top band (x 2–97%, y 1–22%) and (2) left of the speaking grille (x 3–54%, y 22–40%): plain darkness beyond the glass — her face (from y 40%) and the grille (x 58–78%, y 24–38%) stay clear; same areas as panel_031
- gap_after: 40
- bubble_1:
  - speaker: 민원인
  - type: dialogue
  - text_km: "លើលិខិតបង្វិលពាក្យ… នាងខ្ញុំ នឹងយកឈ្មោះ អ្នកទទួលបន្ទុកទៅជាមួយ។"
  - text_ko: "반려 통지엔… 담당자님 성함을 받아 가겠습니다."
  - place: x 34% · y 10.5% · w 64% · tail ↘ (유리 너머 민원인, 아래 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 선임(기억)
  - type: memory
  - text_km: "ទី២។ អ្នកប្រចាំការ មិនត្រូវប្រាប់ឈ្មោះខ្លួនឯងឡើយ។"
  - text_ko: "2번. 당직자는 자기 이름을 말하지 않는다."
  - place: x 27% · y 29% · w 48% · tail none (기억 — 꼬리 없음, 흐릿하게)
  - read_order: 2

### panel_047
- art_space: (1) top 20% (x 4–96%, y 2–20%): the out-of-focus dim room; (2) sound effect: the dark desk surface right of the hand with the seal (x 72–96%, y 34–48%) — the seal, the hand and the notice stay clear
- gap_after: 120
- bubble_1:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំសូមបោះត្រាជំនួសឈ្មោះ។"
  - text_ko: "직인으로 갈음합니다."
  - place: x 34% · y 9% · w 56% · tail ↘ (직인을 쥔 그녀의 손)
  - read_order: 1
- sfx_1:
  - text_km: "ផាប់!"
  - text_ko: "탁!"
  - place: x 84% · y 41% · size 8% · rot -8

### panel_048
- art_space: none (silent — no bubble area needed)
- gap_after: 240
- silent: true
- note: 무대사 — 신발을 다시 신고 떠난다 (검수 노트 D-k)

### panel_049
- art_space: top 34% (x 3–97%, y 2–34%): the shaded grey-green steel side of the desk above the drawers and the out-of-focus dark room above it; the bottom drawer stays plain; same area as panel_022
- gap_after: 240
- bubble_1:
  - speaker: 선임(목소리)
  - type: dialogue
  - text_km: "គេថា ឥឡូវ ឯងជាអ្នកទទួលបន្ទុកហើយ។"
  - text_ko: "이제 네가 담당이래."
  - place: x 32% · y 10% · w 60% · tail ↖ (위 왼쪽 프레임 밖 선임 — 그녀 뒤 서가 쪽)
  - read_order: 1

### panel_050
- art_space: top 38%, left and centre (x 3–80%, y 2–38%): the dark shelf tops and the ceiling — both heads stay below
- gap_after: 40
- bubble_1:
  - speaker: 선임
  - type: dialogue
  - text_km: "ផឹកទៅ។ គេថា យប់នេះវែង។"
  - text_ko: "마셔. 긴 밤이래."
  - place: x 30% · y 11% · w 46% · tail ↙ (선임, 왼쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "…លើកនេះ ខ្ញុំនឹងផឹក។"
  - text_ko: "…이번엔 마실게요."
  - place: x 56% · y 26% · w 40% · tail ↘ (서하, 오른쪽)
  - read_order: 2

### panel_051
- art_space: none (silent — no bubble area needed)
- gap_after: 120
- silent: true
- note: 무대사 — 복도 맞은편 대기 의자의 재우

### panel_052
- art_space: top 22% (x 5–95%, y 2–22%): the ceiling — his head (from y 26%) stays below
- gap_after: 40
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…ឯងមិនគួរទទួលវាសោះ។"
  - text_ko: "…그거 받으면 안 됐는데."
  - place: x 56% · y 7% · w 44% · tail ↘ (문틀의 재우)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "ខ្ញុំទទួល ទាំងដឹងខ្លួន។"
  - text_ko: "알고 받았어요."
  - place: x 30% · y 15.5% · w 40% · tail ↙ (왼쪽 아래 프레임 밖 — 당직석의 서하)
  - read_order: 2

### panel_053
- art_space: upper left (x 3–60%, y 2–40%): the dark shelf tops and the ceiling — his head (x 50–92%, from y 28%) and hers (from y 50%) stay clear
- gap_after: 40
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "បើប្រគល់ទៅអ្នកបន្ទាប់ ឯងរួចខ្លួនហើយ។"
  - text_ko: "다음 사람한테 넘기면, 넌 풀려."
  - place: x 30% · y 10% · w 52% · tail ↘ (재우, 오른쪽)
  - read_order: 1
- bubble_2:
  - speaker: 서하
  - type: dialogue
  - text_km: "ចុះអ្នកនោះ… ជាប់ជំនួសខ្ញុំវិញទេតើ។"
  - text_ko: "그럼 그 사람이 묶이잖아요."
  - place: x 27% · y 27% · w 46% · tail ↙ (서하, 왼쪽 아래)
  - read_order: 2

### panel_054
- art_space: top 28% (x 3–97%, y 2–28%): the ceiling and the darkness above the door frame — his head (from y 28%) stays below
- gap_after: 240
- bubble_1:
  - speaker: 전임자
  - type: dialogue
  - text_km: "…ឈ្មោះដែលមានក្នុងបញ្ជីវេន… នៅទីនេះ គេអានទាំងអស់។"
  - text_ko: "…명부에 적힌 이름은, 여기선 다 읽어."
  - place: x 38% · y 9% · w 62% · tail ↘ (재우)
  - read_order: 1
- bubble_2:
  - speaker: 전임자
  - type: dialogue
  - text_km: "ប្រយ័ត្នផង។"
  - text_ko: "조심해."
  - place: x 70% · y 21% · w 28% · tail ↙ (재우)
  - read_order: 2

### panel_055
- art_space: top 40%, centre and right (x 24–97%, y 2–40%): ceiling pipes and the dark shelf tops — never over the clock face (x 6–22%, y 8–22%)
- gap_after: 120
- bubble_1:
  - speaker: 서하(생각)
  - type: thought
  - text_km: "ឈ្មោះខ្លួនឯង… ខ្ញុំមិនដែលប្រាប់ ម្ដងណាឡើយ។"
  - text_ko: "(이름은… 한 번도 말한 적 없어.)"
  - place: x 54% · y 12% · w 46% · 생각 점(꼬리 없음)
  - read_order: 1

### panel_056
- art_space: sound effect only: the dark glass at the right side, toward the bell out of frame (x 66–96%, y 38–52%); nothing is drawn there
- gap_after: 240
- sfx_1:
  - text_km: "ទីង!"
  - text_ko: "띵!"
  - place: x 82% · y 46% · size 8% · rot -8

### panel_057
- art_space: upper left (x 3–56%, y 2–40%): the flat dark glass above the slot, with no reflection; same bubble spot as panel_035 and panel_041
- gap_after: 120
- bubble_1:
  - speaker: 목소리(창구)
  - type: dialogue
  - text_km: "ពាក្យសុំប្ដូរឈ្មោះ។"
  - text_ko: "개명 신청입니다."
  - place: x 24% · y 12% · w 40% · tail ↘ (화면 오른쪽 아래 — 서식을 미는 손, 투입구 쪽 화면 밖)
  - read_order: 1

### panel_058
- art_space: the dark glass above the speaking grille (x 5–95%, y 8–32%) — the grille itself (y 36–64%) stays clear
- gap_after: 480
- bubble_1:
  - speaker: 목소리(창구)
  - type: dialogue
  - text_km: "ឈ្មោះថ្មីដែលសុំប្ដូរទៅ…"
  - text_ko: "바꾸려는 새 이름은…"
  - place: x 50% · y 24% · w 50% · tail ↓ (말구멍)
  - read_order: 1

### panel_059
- art_space: top 30% (x 3–97%, y 2–30%): the dark desk surface outside the lamp's circle — both papers (from y 32%) stay clear
- gap_after: 720
- bubble_1:
  - speaker: 목소리(창구)
  - type: dialogue
  - text_km: "…គឺ កាង សឺហា។"
  - text_ko: "…강서하입니다."
  - place: x 50% · y 13% · w 40% · tail ↑ (위쪽 프레임 밖 — 창구)
  - read_order: 1

### panel_060
- art_space: caption: the bottom 8% band (x 0–100%, y 92–100%), a plain dark strip (the shaded desk edge)
- gap_after: 1200
- note: 대사 없음 — 마감 캡션만 패널 맨 아래
- bubble_1:
  - speaker: 캡션
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៤ —"
  - text_ko: "— 4화에 계속 —"
  - place: x 50% · y 95.3% · w 50% · tail none (마감 캡션 박스)
  - read_order: 1
