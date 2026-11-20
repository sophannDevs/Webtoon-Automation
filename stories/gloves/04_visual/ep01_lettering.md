# EP01 레터링 명세 「먼저 만지지 마세요」 — letterer (크메르어판 · 말풍선은 뷰어가 그린다)

- 작품: 「장갑을 벗기 전에」 / «មុនដោះស្រោមដៃ» · EP01 (NN = 01) · 18+ 로맨스 판타지 · Khmer edition · Flow-by-hand mode
- 작성: letterer · 2026-11-20 · 첫 작성
- 입력: `03_episode/ep01_script_final.md`(native-khmer 검수 READY 판본. `text_km`은 각 패널 `KM:` 줄을 글자·띄어쓰기·문장부호까지 그대로 복사했다. 대본은 고치지 않았다) · `04_visual/ep01_shotlist.md`(구도·화면비·말풍선 자리 제안·`gap_after`) · `04_visual/style-bible.md` §5-4·§9 · `03_episode/ep01_beatsheet.md` · `02_story/twist-plan.md` EP1 · `02_story/glossary_km.md` · `00_input/brief.md` LOCKED 1–10, RULINGS A–J
- 형식: `webtoon-khmer-edition` §3. **이미지에는 글자가 하나도 없다.** 이 파일이 말풍선 문구와 위치의 유일한 출처이고, `km_tool.py build`가 이 파일로 뷰어를 만든다(뷰어 데이터를 손으로 고치지 않는다).

## 읽는 법 (prompt-smith · panel-validator · episode-compositor)

1. **`art_space`** = 그림이 비워 둘 자리. 한국어 뒤 ` | EN: ` 다음이 Flow 프롬프트에 넣을 영어 문장이다(prompt-smith는 이 영어 문장 + `(a speech bubble will be added there later)`). 자리는 샷리스트의 제안을 바탕으로, 실제 말풍선 크기를 뷰어 모형에서 재어 정했다. 샷리스트의 "오른쪽 위 1/3"보다 이 파일의 범위가 우선이다(아래 3번 이유).
2. **`place`** = `x`/`y`는 말풍선 중심, `w`는 최대 폭, 모두 패널 대비 %. 모든 말풍선이 `x + w ≤ 100`, `w ≤ 85`(최대 57.5). 두 줄로 접힌 말풍선은 폭이 정확히 `w`, 한 줄 말풍선은 글자 길이만큼 줄어든다. `w`의 소수점(36.75 등)은 줄바꿈 때문에 일부러 정한 값이니 반올림하지 않는다.
3. **뷰어의 폭 규칙 때문에 말풍선은 오른쪽 가장자리에 붙지 못한다.** 폭 `w`인 말풍선의 오른쪽 끝은 최대 `100 − w/2`(예: 폭 36이면 82%). 그래서 오른쪽 말풍선의 `art_space`는 "가운데~오른쪽(가로 약 44–82%)"처럼 잡았다.
4. **꼬리**: `↙ ↓ ↘` = 아래(말풍선 폭의 25/50/75% 지점), `↖ ↑ ↗` = 위. 생각(`thought`)과 캡션(`narration`)은 꼬리 없음. 화면 밖 화자는 그 가장자리 쪽 꼬리. 화살표 뒤 괄호는 사람이 읽는 메모다(도구는 화살표만 읽는다).
5. **줄바꿈 (크메르어는 띄어쓰기가 적어 브라우저가 낱말 사전으로 접는다):** 뷰어 웹 글꼴 Battambang 기준으로 모든 말풍선이 **2줄 이하**이고, 휴대폰(360·375·390·414·430px)과 데스크톱(720px) 폭에서 같은 자리에서 접히도록 `w`를 골랐다. 합성어(ត្រីមាស, ចាកចេញ, ទាំងអស់, ជាងស្រោមដៃ, ធ្វើឲ្យ, ពេលក្រោយ, 후렴 ខ្ញុំជាអ្នកសម្រេច)가 줄 사이에서 갈라지지 않게 했다. **배치 패스에서 `w`를 바꾸면 줄바꿈이 바뀐다:** 두 줄 말풍선은 `x`/`y`만 옮기고, `w`는 ±0.5 안에서만.
6. **화면비** (샷리스트 그대로): XL 9:16 = P01, P13, P19, P40, P46, P55, P62 · L 3:4 = P02, P06, P12, P14, P16, P18, P21, P28, P29, P35, P43, P45, P47, P49, P51, P56, P58 · ST 16:9 = P04, P09, P37 · 나머지 M 1:1. Flow에 3:4가 없어 L을 1:1로 만들어도(P02만 9:16) 이 파일의 위치는 그대로 맞는다(모형에서 확인).
7. `silent: true` = 말풍선·효과음 없음. 그림이 화면을 채워도 된다(P45만 쌍둥이 규칙으로 빈 자리 유지).

---


### panel_001
- silent: true
- gap_after: 0

### panel_002
- art_space: 오른쪽 가운데~아래(가로 약 50–95%, 세로 약 42–75%): 떨어지는 재 옆의 어두운 청록 깊이(효과음 자리). 장미·손·재의 길은 이 밖 | EN: Keep the right-middle to lower-right area (about 50–95% across, 42–75% down), the dark teal-green depth beside the falling ash, as calm, plain dark background with no important details; the rose, the hand and the ash path stay outside it.
- gap_after: 320
- sfx_1:
  - text_km: "រោយ… រោយ…"
  - text_ko: "바스스…"
  - place: x 72% · y 58% · size 5.5% · rot 8

### panel_003
- silent: true
- gap_after: 0

### panel_004
- art_space: 오른쪽 위(가로 약 60–96%, 세로 위 약 44%): 튀는 쟁반 위의 청록 어둠. 하녀의 얼굴은 왼쪽 위 가장자리 | EN: Keep the upper right (about 60–96% across, the top 44%), the teal-green darkness above the bouncing tray, as calm, plain dark background with no important details; the maid's face stays at the upper-left edge.
- gap_after: 0
- sfx_1:
  - text_km: "ក្រាំង!"
  - text_ko: "쨍그랑!"
  - place: x 79% · y 24% · size 8% · rot -10

### panel_005
- art_space: 위쪽 가운데(가로 약 25–70%, 세로 위 28%): 그가 막 물러난 자리 위의 흐린 어두운 에메랄드 유리와 철골 | EN: Keep the upper centre (about 25–70% across, the top 28%), the dark emerald glass panes and iron ribs softly out of focus above the space he just stepped back from, as calm, plain background with no important details.
- gap_after: 160
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ថយទៅ។"
  - text_ko: "가라."
  - place: x 46% · y 14% · w 30% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_006
- art_space: 위쪽 오른쪽(가로 약 42–95%, 세로 위 25%): 지붕 위 옅은 아침 하늘. 사다리와 간판은 왼쪽 위, 가죽상의 실크해트 꼭대기는 세로 25%보다 아래 | EN: Keep the top quarter from about 42% across to the right edge, the pale morning sky above the rooftops, as calm, plain background with no important details; the ladder and the iron sign stay in the upper left and the merchant's top hat stays below it.
- gap_after: 0
- bubble_1:
  - speaker: 가죽상
  - type: dialogue
  - text_km: "លោះវិញបាន ត្រឹមចុងត្រីមាស។"
  - text_ko: "환매는, 분기 지대일까지요."
  - place: x 63% · y 12% · w 36.5% · tail ↘ (가죽상 쪽)
  - read_order: 1

### panel_007
- art_space: 위쪽 띠(가로 0–78%, 세로 위 약 33%): 왼쪽은 그녀 머리 위의 그늘진 회벽과 문 상인방, 가운데는 햇빛 든 회벽. 가죽상의 실크해트는 가로 78%보다 오른쪽 | EN: Keep the top third from the left edge to about 78% across, the shadowed plaster wall and door lintel above her head and the sunlit plaster wall beside it, as calm, plain background with no important details; the merchant's top hat stays near the right edge.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ថ្ងៃកំណត់។ មិនទាន់ដល់។"
  - text_ko: "기한. 아직이에요."
  - place: x 25% · y 9% · w 46% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 가죽상
  - type: dialogue
  - text_km: "ឧបករណ៍ជាវត្ថុបញ្ចាំ កញ្ញា។ តាមច្បាប់។"
  - text_ko: "연장은 담보였지요, 아가씨. 법대로입니다."
  - place: x 58% · y 24.5% · w 40% · tail ↘ (가죽상 쪽)
  - read_order: 2

### panel_008
- art_space: 오른쪽 위(가로 약 42–92%, 세로 위 28%): 빈 못 위의 그늘진 회벽. 그녀의 얼굴은 왼쪽 위 가장자리 | EN: Keep the upper right (about 42–92% across, the top 28%), the shadowed plaster wall above the bare pegs, as calm, plain background with no important details; her face stays at the upper-left edge.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្បែកនេះ ទុកសិន។ ភ្ញៀវកុម្ម៉ង់។"
  - text_ko: "이 가죽은 두고. 주문품이에요."
  - place: x 62% · y 14% · w 38% · tail ↙ (페트라 얼굴 쪽)
  - read_order: 1

### panel_009
- art_space: 위쪽 가운데~오른쪽(가로 약 38–82%, 세로 위 약 42%): 손 너머 초점 밖의 회벽과 문간 빛. 두 손·바늘·진홍 실패는 이 자리의 아래(화면 아래 절반)와 왼쪽 | EN: Keep the upper centre-right (about 38–82% across, the top 42%), the out-of-focus plaster wall and doorway light beyond the hands, as calm, plain background with no important details; the hands, needle and crimson spool stay below it in the lower half and to the left.
- gap_after: 0
- bubble_1:
  - speaker: 가죽상 (화면 밖)
  - type: dialogue
  - text_km: "ការងារពីវិមានកញ្ចក់… គ្មានអ្នកណាទទួលទេ។"
  - text_ko: "유리 저택 일은… 아무도 안 받지요."
  - place: x 60% · y 23% · w 39.5% · tail ↘ (오른쪽 가장자리 밖, 문 쪽 가죽상)
  - read_order: 1

### panel_010
- silent: true
- gap_after: 0

### panel_011
- silent: true
- gap_after: 0

### panel_012
- art_space: 왼쪽 위(가로 0–68%, 세로 위 약 28%): 낮은 지붕 위 옅은 아침 하늘. 언덕 위 작은 유리 온실은 가로 68%보다 오른쪽 | EN: Keep the top 28% from the left edge to about 68% across, the pale morning sky above the low rooftops, as calm, plain background with no important details; the small glass greenhouse on the hill stays further right.
- gap_after: 160
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ខ្ញុំទទួល។"
  - text_ko: "내가 받아요."
  - place: x 16% · y 9% · w 28% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ហាង… ខ្ញុំនឹងលោះមកវិញ។"
  - text_ko: "공방. 되찾을 거예요."
  - place: x 42% · y 22% · w 49% · tail ↙ (페트라 얼굴 쪽)
  - read_order: 2

### panel_013
- silent: true
- gap_after: 0

### panel_014
- art_space: 위쪽 띠(가로 0–80%, 세로 위 약 33%): 하인들 위와 페트라 머리 위의 흐린 어두운 에메랄드 유리와 철골. 가운데 소실점의 휴고는 이 띠보다 아래 | EN: Keep the top third from the left edge to about 80% across, the dark emerald glass and black iron ribs softly out of focus above the servants and above Petra's head, as calm, plain background with no important details; Hugo at the vanishing point stays below it.
- gap_after: 0
- bubble_1:
  - speaker: 집사
  - type: dialogue
  - text_km: "ជាងមកដល់ហើយ លោកម្ចាស់។"
  - text_ko: "장갑장이가 왔습니다, 백작님."
  - place: x 22% · y 10% · w 37% · tail ↓ (집사 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ពេត្រា។ ជាងស្រោមដៃ។"
  - text_ko: "페트라. 장갑장이."
  - place: x 56% · y 26% · w 44% · tail ↘ (페트라 머리 쪽)
  - read_order: 2

### panel_015
- art_space: 왼쪽 위(가로 0–44%, 세로 위 약 28%): 흐린 어두운 에메랄드 유리와 검은 철골. 그의 얼굴과 머리 한 가닥은 가로 44%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 44% across, the top 28%), the dark emerald glass and black iron ribs softly out of focus, as calm, plain dark background with no important details; his face and the loose strand of hair stay to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "បើឃើញនេះ… គេចាកចេញទាំងអស់។"
  - text_ko: "이걸 보면… 다들 떠났소."
  - place: x 22% · y 13% · w 34.5% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_016
- art_space: 위쪽 띠(가로 약 30–90%, 세로 위 약 22%): 내민 손 위의 흐린 어두운 에메랄드 유리. 페트라의 머리(세로 약 40%)와 내민 손은 이 아래 | EN: Keep the top band (about 30–90% across, the top 22%), the dark emerald glass softly out of focus above his outstretched hand, as calm, plain background with no important details; Petra's head and his hand stay below it.
- gap_after: 60
- bubble_1:
  - speaker: 휴고 (화면 밖, 손만 보임)
  - type: dialogue
  - text_km: "ចុះអ្នក… នៅតែទទួលឬ?"
  - text_ko: "그래도 맡겠소?"
  - place: x 54% · y 11% · w 46% · tail ↘ (오른쪽 가장자리 밖, 손만 보이는 휴고 쪽)
  - read_order: 1

### panel_017
- silent: true
- gap_after: 0

### panel_018
- silent: true
- gap_after: 360

### panel_019
- silent: true
- gap_after: 0

### panel_020
- art_space: 위쪽 띠(세로 위 약 26%, 전체 폭): 왼쪽은 그녀 머리 위, 오른쪽은 그의 머리 위의 어두운 에메랄드 유리 | EN: Keep the top quarter across the whole width, the dark emerald glass above her head on the left and above his head on the right, as calm, plain background with no important details.
- gap_after: 120
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "…កិច្ចសន្យា។ ទៅតុ។"
  - text_ko: "…계약. 탁자로."
  - place: x 24% · y 10% · w 40% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…អ្នកមិនអីទេឬ?"
  - text_ko: "…아무렇지 않소?"
  - place: x 64% · y 18% · w 36% · tail ↘ (휴고 쪽)
  - read_order: 2

### panel_021
- art_space: 왼쪽 위(가로 0–45%, 세로 약 10–35%): 돔 유리 너머 짙은 파란 저녁 하늘. 매달린 램프와 불꽃은 가운데·오른쪽 | EN: Keep the upper left (from the left edge to about 45% across, about 10–35% down), the deep blue evening sky through the dome glass, as calm, plain background with no important details; the hanging lamps and their flames stay centre and right.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "តម្លៃ បីដង។"
  - text_ko: "세 배."
  - place: x 22% · y 22% · w 30% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_022
- art_space: 위쪽(세로 위 약 34%, 가로 0–80%): 그의 머리 위 돔 유리와 저녁 하늘, 왼쪽은 그녀 손가락 위의 흐린 어두운 유리. 그의 머리 꼭대기(세로 35–40%)는 이 아래 | EN: Keep the top third from the left edge to about 80% across, the dome glass and evening sky above his head and the blurred dark glass above her fingers, as calm, plain background with no important details; his head stays below it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "បីដង… តើគ្រប់គ្រាន់ឬ?"
  - text_ko: "세 배라… 그걸로 충분하겠소?"
  - place: x 54% · y 12% · w 46% · tail ↓ (휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라 (화면 밖, 손가락만 보임)
  - type: dialogue
  - text_km: "កក់មុន។ ពាក់កណ្ដាល។"
  - text_ko: "선금. 절반."
  - place: x 24% · y 28% · w 44% · tail ↙ (왼쪽 가장자리 밖, 손만 보이는 페트라 쪽)
  - read_order: 2

### panel_023
- art_space: 오른쪽 위(가로 약 45–90%, 세로 위 28%): 짙은 파란 저녁 하늘이 든 돔 유리 | EN: Keep the upper right (about 45–90% across, the top 28%), the dome glass with the deep blue evening sky, as calm, plain background with no important details.
- gap_after: 60
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "សូមកុំប៉ះខ្ញុំមុន។"
  - text_ko: "먼저 만지지 마세요."
  - place: x 66% · y 14% · w 34% · tail ↙ (페트라 쪽)
  - read_order: 1

### panel_024
- art_space: 왼쪽 위(가로 0–50%, 세로 위 약 32%): 초점 밖으로 멀어지는 무지의 짙은 호두나무 탁자 면 | EN: Keep the upper left (from the left edge to about 50% across, the top third), the plain dark walnut tabletop receding out of focus, as calm, plain background with no important details.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…គិតថាខ្ញុំហ៊ានឬ?"
  - text_ko: "…내가, 그럴 수 있으리라 보오?"
  - place: x 26% · y 16% · w 38% · tail ↗ (오른쪽 위 휴고 쪽)
  - read_order: 1

### panel_025
- art_space: 위쪽 가운데~오른쪽(가로 약 20–80%, 세로 위 25%): 그녀 시선 앞의 짙은 파란 돔 유리. 그녀의 머리 꼭대기는 세로 28%보다 아래 | EN: Keep the top quarter from about 20% to 80% across, the deep blue dome glass in front of her gaze, as calm, plain background with no important details; her head stays below it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ប៉ះពេលណា ខ្ញុំជាអ្នកសម្រេច។"
  - text_ko: "언제 만질지는 내가 정해요."
  - place: x 48% · y 12% · w 52% · tail ↙ (페트라 쪽)
  - read_order: 1

### panel_026
- art_space: 위쪽 약 38%(가로 0–80%): 돔 유리 너머 짙은 파란 저녁 하늘. 말풍선 두 개(위 오른쪽, 그 아래 왼쪽~가운데). 그의 머리 꼭대기(세로 40%)와 인장은 이 아래 | EN: Keep the whole top 38% (from the left edge to about 80% across), the deep blue evening sky through the dome glass, as calm, plain background with no important details; his head and the seal stay below it.
- gap_after: 60
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ខ្ញុំសុំថែមលក្ខខណ្ឌមួយដែរ បានទេ?"
  - text_ko: "그럼, 나도 하나 더해도 되겠소?"
  - place: x 56% · y 10% · w 44% · tail ↘ (휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "បើស្បែកខ្ញុំបន្សល់ស្នាម… យប់នោះឯង អ្នកនឹងចាកចេញ។"
  - text_ko: "내 살이 흔적을 남기면, 그날 밤 떠나는 거요."
  - place: x 31% · y 29% · w 57.5% · tail ↘ (휴고 쪽)
  - read_order: 2

### panel_027
- art_space: 왼쪽 위(가로 0–50%, 세로 위 25%): 그녀 머리 위의 돔 유리와 저녁 하늘. 램프 사슬과 불꽃은 오른쪽 | EN: Keep the upper left (from the left edge to about 50% across, the top quarter), the dome glass and evening sky above her head, as calm, plain background with no important details; the lamp chain and flame stay to the right.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ចិត្តល្អម្ល៉េះ លោកម្ចាស់។"
  - text_ko: "친절도 하셔라, 백작님."
  - place: x 26% · y 11% · w 44% · tail ↘ (페트라 쪽)
  - read_order: 1

### panel_028
- art_space: 위쪽(가로 0–60%, 세로 위 25%): 양피지 위쪽 가장자리 너머 무지의 짙은 호두나무 탁자 면 | EN: Keep the top quarter from the left edge to about 60% across, the plain dark walnut tabletop beyond the parchment's top edge, as calm, plain background with no important details.
- gap_after: 160
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "កិច្ចសន្យា រួច។ ធ្វើការ។"
  - text_ko: "계약 끝. 일 시작."
  - place: x 24% · y 13% · w 29% · tail ↙ (왼쪽 아래 그녀 손 쪽)
  - read_order: 1

### panel_029
- art_space: 왼쪽 위(가로 0–42%, 세로 위 25%): 그녀 머리 위, 램프 웅덩이 밖의 청록 어둠. 램프(가운데)와 흰 장미(오른쪽 위)는 이 밖 | EN: Keep the upper left (from the left edge to about 42% across, the top quarter), the blue-green darkness beyond the lamp's pool above her head, as calm, plain dark background with no important details; the lamp in the centre and the white rose at the upper right stay outside it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ដៃស្ដាំសិន។"
  - text_ko: "오른손부터."
  - place: x 20% · y 12% · w 30% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_030
- art_space: 오른쪽 위(가로 약 38–88%, 세로 위 30%): 작업대 너머 청록 어둠. 그녀 얼굴 일부는 왼쪽 위 가장자리 | EN: Keep the upper right (about 38–88% across, the top 30%), the blue-green darkness beyond the bench, as calm, plain dark background with no important details; her partial face stays at the upper-left edge.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ដៃ។"
  - text_ko: "손."
  - place: x 50% · y 9% · w 24% · tail ↙ (페트라 얼굴 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "លាតម្រាមដៃ។"
  - text_ko: "펴요."
  - place: x 66% · y 22% · w 32% · tail ↙ (페트라 쪽)
  - read_order: 2

### panel_031
- art_space: 왼쪽 위(가로 0–46%, 세로 위 28%): 그의 머리 왼쪽, 램프 밖 청록 어둠 | EN: Keep the upper left (from the left edge to about 46% across, the top 28%), the blue-green darkness beyond the lamp to the left of his head, as calm, plain dark background with no important details.
- gap_after: 0
- bubble_1:
  - speaker: 페트라 (화면 밖, 손만 보임)
  - type: dialogue
  - text_km: "វា… យូរប៉ុណ្ណាហើយ?"
  - text_ko: "그것. 얼마나 됐어요?"
  - place: x 24% · y 13% · w 40% · tail ↙ (왼쪽 가장자리 밖, 손만 보이는 페트라 쪽)
  - read_order: 1

### panel_032
- art_space: 왼쪽 위(가로 0–46%, 세로 위 약 26%): 빛이 닿지 않는 쪽의 청록 어둠(유리에 비친 불꽃 없음). 그의 얼굴은 가로 46%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 46% across, the top quarter), the blue-green darkness on the unlit side with no reflected flame, as calm, plain dark background with no important details; his face stays to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…ដប់មួយរដូវរងាហើយ។"
  - text_ko: "…열한 번의 겨울."
  - place: x 20% · y 13% · w 28.5% · tail ↘ (휴고 쪽)
  - read_order: 1

### panel_033
- art_space: 왼쪽 위(가로 0–52%, 세로 위 28%): 청록 어둠. 그의 입꼬리와 턱은 오른쪽 위 가장자리, 손은 가운데 아래 | EN: Keep the upper left (from the left edge to about 52% across, the top 28%), the blue-green darkness, as calm, plain dark background with no important details; his mouth and jaw stay at the upper-right edge and the hands in the lower centre.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ដៃដែលផ្កាទ្រាំមិនបានមួយដង្ហើម… វាស់ធ្វើអ្វី—"
  - text_ko: "꽃도 한 숨을 못 버티는 손을… 재서 뭘—"
  - place: x 26% · y 14% · w 46% · tail ↗ (오른쪽 위 휴고 입 쪽)
  - read_order: 1

### panel_034
- art_space: 왼쪽 위(가로 약 5–55%, 세로 위 28%): 그녀 머리 위, 램프 밖 청록 어둠. 손끝의 잿빛 점(왼쪽 아래)과는 멀리 | EN: Keep the upper left (about 5–55% across, the top 28%), the blue-green darkness beyond the lamp above her head, as calm, plain dark background with no important details; the grey spot on her fingertip at the lower left stays far from it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "គ្រាន់តែធូលីស្បែក។"
  - text_ko: "가죽 먼지네."
  - place: x 30% · y 14% · w 40% · tail ↓ (페트라 입 쪽)
  - read_order: 1

### panel_035
- art_space: 위쪽 가운데(가로 약 22–66%, 세로 위 18%): 돌린 그의 머리 왼쪽의 어두운 유리 + 왼쪽 가운데(가로 0–40%, 세로 약 22–40%): 숙인 그녀 머리 옆의 청록 어둠. 비친 불꽃 없음 | EN: Keep the top band at the centre (about 22–66% across, the top 18%), the dark glass beside his turned head, and the left-middle area (from the left edge to about 40% across, 22–40% down), the blue-green darkness beside her bowed head, as calm, plain dark background with no important details and no reflected flame.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…ខ្ញុំដកដង្ហើមបានទេ?"
  - text_ko: "…숨은, 쉬어도 되겠소?"
  - place: x 44% · y 9% · w 44% · tail ↘ (오른쪽 위 휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "…ដកដង្ហើមទៅ។ ស្ងាត់ៗ។"
  - text_ko: "…쉬어요. 조용히."
  - place: x 21% · y 30% · w 36% · tail ↘ (페트라 쪽)
  - read_order: 2

### panel_036
- art_space: 왼쪽 위(가로 0–45%, 세로 위 25%): 램프 밖 청록 어둠. 그의 입·턱은 가운데 위, 그녀의 눈(왼쪽 가장자리 가운데)은 이 아래 | EN: Keep the upper left (from the left edge to about 45% across, the top quarter), the blue-green darkness beyond the lamp, as calm, plain dark background with no important details; his mouth and chin stay at the upper centre and her eyes at the left edge lower down.
- gap_after: 60
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…របួសចាស់មួយ។"
  - text_ko: "…오래된 상처요."
  - place: x 24% · y 12% · w 36% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_037
- silent: true
- gap_after: 0

### panel_038
- art_space: 위쪽 띠(가로 0–80%, 세로 위 약 23%): 왼쪽은 그녀 머리 위 청록 어둠, 가운데~오른쪽은 어두운 비스듬한 유리벽(비친 불꽃 없음). 일어서는 휴고의 머리 꼭대기는 세로 25%보다 아래 | EN: Keep the top band (the top 23%, from the left edge to about 80% across), the blue-green darkness above her head and the dark angled glass wall with no reflected flame, as calm, plain dark background with no important details; Hugo's head stays below it as he rises.
- gap_after: 160
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "កដៃ… ចាំពេលក្រោយ។"
  - text_ko: "손목은, 나중에."
  - place: x 15% · y 12.5% · w 26.75% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ស្រោមដៃដែលធ្លាប់ត្រូវដៃ… មានមួយគូ។ មើលទេ?"
  - text_ko: "맞던 장갑이… 한 켤레 있소. 보겠소?"
  - place: x 55% · y 12.5% · w 45% · tail ↘ (휴고 쪽)
  - read_order: 2

### panel_039
- art_space: 왼쪽 위(가로 0–42%, 세로 위 26%): 그녀 머리 위의 초점 밖 짙은 호두나무 벽판과 서가. 천 덮인 액자와 유리 종은 이 밖 | EN: Keep the upper left (from the left edge to about 42% across, the top quarter), the dark walnut panelling and shelves softly out of focus above her head, as calm, plain background with no important details; the covered picture frame and the bell jar stay outside it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្រោមដៃនោះ? នៅឯណា?"
  - text_ko: "그 장갑. 어디요?"
  - place: x 20% · y 12% · w 34% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_040
- silent: true
- gap_after: 0

### panel_041
- art_space: 왼쪽 위(가로 0–44%, 세로 위 26%): 유리 종 위의 어두운 공간과 초점 밖 벽판. 그녀의 얼굴은 가운데(머리 꼭대기 세로 30%) | EN: Keep the upper left (from the left edge to about 44% across, the top quarter), the dim space above the bell jar with dark walnut panelling out of focus, as calm, plain background with no important details; her face stays in the centre below it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្រោមដៃអ្នកណា?"
  - text_ko: "누구 장갑이에요?"
  - place: x 24% · y 13% · w 36% · tail ↘ (페트라 쪽)
  - read_order: 1

### panel_042
- art_space: 왼쪽 위(가로 0–50%, 세로 위 26%): 유리 종 위의 어두운 공간. 그의 옆얼굴(코끝 포함)은 가로 50%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 50% across, the top quarter), the dim space above the bell jar, as calm, plain background with no important details; his profile, nose included, stays to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ជារបស់ជាងស្រោមដៃមុន។"
  - text_ko: "전 장갑장이의 것이오."
  - place: x 26% · y 13% · w 48% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_043
- art_space: 오른쪽 위(가로 약 48–90%, 세로 위 25%): 그의 손 위의 초점 밖 짙은 호두나무 벽판. 그녀의 얼굴은 가로 48%보다 왼쪽 | EN: Keep the upper right (about 48–90% across, the top quarter), the dark walnut panelling softly out of focus above his hand, as calm, plain background with no important details; her face stays to the left of it.
- gap_after: 60
- bubble_1:
  - speaker: 휴고 (화면 밖, 손만 보임)
  - type: dialogue
  - text_km: "…ខ្ញុំជាអ្នកធ្វើឲ្យដៃគាត់ខូច។"
  - text_ko: "…내가 그 손을 망쳤소."
  - place: x 66% · y 12% · w 33% · tail ↘ (오른쪽 가장자리 밖, 손만 보이는 휴고 쪽)
  - read_order: 1

### panel_044
- art_space: 오른쪽 위(가로 약 50–88%, 세로 위 26%): 초점 밖 짙은 호두나무 벽판 | EN: Keep the upper right (about 50–88% across, the top quarter), the dark walnut panelling softly out of focus, as calm, plain background with no important details.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ដៃ។ ឥឡូវ។"
  - text_ko: "손. 지금."
  - place: x 68% · y 14% · w 30% · tail ↙ (페트라 쪽)
  - read_order: 1

### panel_045
- silent: true
- art_space: (말풍선 없음 · 쌍둥이 규칙) P49와 같은 위 오른쪽(가로 약 44–100%, 세로 위 약 24%)을 초점 밖 짙은 호두나무 벽판으로 비워 둔다. P49가 이 컷의 카메라·크롭을 그대로 쓰므로 여기서도 비어 있어야 한다 | EN: Keep the upper right (from about 44% across to the right edge, the top quarter), the dark walnut panelling softly out of focus, as calm, plain background with no important details (the same empty area as panel 49; no bubble in this panel).
- gap_after: 400

### panel_046
- silent: true
- gap_after: 0

### panel_047
- silent: true
- gap_after: 0

### panel_048
- art_space: 왼쪽 위(가로 0–50%, 세로 위 26%): 그녀 머리 위의 초점 밖 짙은 호두나무 벽판. 그의 얼굴은 가운데~오른쪽(머리 꼭대기 세로 35%) | EN: Keep the upper left (from the left edge to about 50% across, the top quarter), the dark walnut panelling softly out of focus above her head, as calm, plain background with no important details; his face stays centre-right below it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ការសន្យា… អ្នកនៅចងចាំឬ?"
  - text_ko: "약속은… 기억하오?"
  - place: x 26% · y 13% · w 48% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_049
- art_space: 위 오른쪽(가로 약 44–100%, 세로 위 약 24%): 초점 밖 짙은 호두나무 벽판(P45와 같은 자리, P45에서도 비워 둔다). 그녀 머리의 오른쪽 끝(이마·머리카락)은 가로 44% 안쪽 | EN: Keep the upper right (from about 44% across to the right edge, the top quarter), the dark walnut panelling softly out of focus, the same area kept empty in panel 45, as calm, plain background with no important details; her head and hair stay to the left of it.
- gap_after: 80
- bubble_1:
  - speaker: 페트라
  - type: thought
  - text_km: "មិនមែនរឿងដៃខ្ញុំទេ។ …គឺរឿងខ្ញុំចង់ ឬអត់។"
  - text_ko: "내 손이 아니야. …내가 원하느냐야."
  - place: x 63% · y 10% · w 36.75%
  - read_order: 1

### panel_050
- art_space: 위쪽 가운데(가로 약 35–68%, 세로 위 34%): 두 머리 사이의 초점 밖 짙은 호두나무 벽판. 휴고의 얼굴은 오른쪽 위 가장자리, 페트라의 머리 꼭대기는 세로 30% | EN: Keep the upper centre (about 35–68% across, the top third), the dark walnut panelling softly out of focus between their two heads, as calm, plain background with no important details; his face stays at the upper-right edge and her head below it on the left.
- gap_after: 200
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ចុះ… មុននេះ?"
  - text_ko: "그럼… 아까는?"
  - place: x 52% · y 11% · w 32% · tail ↗ (오른쪽 위 휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "បន្លាកុលាប។"
  - text_ko: "가시예요."
  - place: x 52% · y 26% · w 30% · tail ↙ (페트라 쪽)
  - read_order: 2

### panel_051
- art_space: 위쪽 띠(가로 약 20–78%, 세로 위 22%): 작업대 위 어두운 비스듬한 유리벽(달빛이 옅게, 비친 불꽃 없음). 휴고의 머리 꼭대기(세로 25%)와 램프는 이 아래 | EN: Keep the top band from about 20% to 78% across (the top 22%), the dark angled glass wall above the bench with faint moonlight and no reflected flame, as calm, plain dark background with no important details; Hugo's head and the lamp stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ជាងស្រោមដៃ ដែលមិនពាក់ស្រោមដៃ… មិនមែនទេឬ?"
  - text_ko: "장갑을 안 끼는 장갑장이… 아니었소?"
  - place: x 48% · y 12% · w 52% · tail ↘ (휴고 쪽)
  - read_order: 1

### panel_052
- art_space: 왼쪽 위(가로 0–46%, 세로 위 28%): 그녀 머리 뒤 램프 밖 청록 어둠 | EN: Keep the upper left (from the left edge to about 46% across, the top 28%), the blue-green darkness beyond the lamp behind her head, as calm, plain dark background with no important details.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "តាមលក្ខខណ្ឌ។ យប់នេះ ខ្ញុំចេញ។"
  - text_ko: "조항대로. 오늘 밤 가요."
  - place: x 24% · y 14% · w 40% · tail ↘ (페트라 쪽)
  - read_order: 1

### panel_053
- art_space: 왼쪽 위(가로 0–46%, 세로 위 26%): 램프 밖 청록 어둠과 어두운 유리. 그의 얼굴과 두 손 사이 한 뼘은 이 밖 | EN: Keep the upper left (from the left edge to about 46% across, the top quarter), the blue-green darkness beyond the lamp and the dark glass, as calm, plain dark background with no important details; his face and the hand-span gap stay outside it.
- gap_after: 440
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…តើអ្នកអនុញ្ញាតទេ?"
  - text_ko: "…허락해 주겠소?"
  - place: x 25% · y 13% · w 42% · tail ↘ (휴고 쪽)
  - read_order: 1

### panel_054
- silent: true
- gap_after: 0

### panel_055
- silent: true
- gap_after: 0

### panel_056
- silent: true
- gap_after: 24

### panel_057
- art_space: 오른쪽 위(가로 약 44–80%, 세로 위 24%): 그녀 턱 옆의 램프 밖 어둠. 입술과 턱은 왼쪽 위 가장자리, 맞잡는 손은 가운데 아래 | EN: Keep the upper right (about 44–80% across, the top quarter), the darkness beyond the lamp beside her chin, as calm, plain dark background with no important details; her lips and chin stay at the upper-left edge and the hands in the lower centre.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "…ឥឡូវ។"
  - text_ko: "…지금."
  - place: x 58% · y 12% · w 26% · tail ↙ (페트라 입 쪽)
  - read_order: 1

### panel_058
- silent: true
- gap_after: 0

### panel_059
- silent: true
- gap_after: 0

### panel_060
- art_space: 왼쪽 위(가로 0–46%, 세로 위 28%): 램프 밖 청록 어둠과 어두운 유리. 그의 얼굴은 가로 46%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 46% across, the top 28%), the blue-green darkness beyond the lamp and the dark glass, as calm, plain dark background with no important details; his face stays to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ដៃដដែល… តែមុននេះ វាខាំអ្នក។"
  - text_ko: "같은 손인데… 아까는 물었고."
  - place: x 25% · y 14% · w 39.5% · tail ↘ (휴고 쪽)
  - read_order: 1

### panel_061
- art_space: 왼쪽 위(가로 0–44%, 세로 위 20%): 램프 밖 청록 어둠. 그의 머리(꼭대기 세로 약 20%)는 가로 44%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 44% across, the top 20%), the blue-green darkness beyond the lamp, as calm, plain dark background with no important details; his head stays to the right of it.
- gap_after: 600
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ឥឡូវ… វាមិនខាំទេ។"
  - text_ko: "지금은… 아니군."
  - place: x 24% · y 11% · w 40% · tail ↘ (휴고 쪽)
  - read_order: 1

### panel_062
- art_space: 위 25%(전체 폭): 그녀 머리카락 위의 어둠(램프 밖 청록 어둠, 말풍선 자리) + 맨 아래 약 9%: 크라바트 높이의 깃 그늘(엔딩 캡션 자리). 눈·입·귀는 이 사이 | EN: Keep the top quarter across the whole width, the blue-green darkness above her hair, and the bottom 9%, the soft shadow at collar height, as calm, plain dark background with no important details; her eyes, lips and ear stay between them.
- gap_after: 0
- bubble_1:
  - speaker: 휴고 (화면 위 밖)
  - type: dialogue
  - text_km: "តាំងពីដំបូង… អ្នកចង់ស្រាប់ហើយឬ?"
  - text_ko: "처음부터… 원했던 거요?"
  - place: x 50% · y 12% · w 40% · tail ↑ (위쪽 가장자리 밖 휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 캡션 (엔딩)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 48% · y 95% · w 52%
  - read_order: 2

## 노트

### 1. 수치

| 항목 | 수 | 패널 |
|---|---|---|
| 패널 | 62 | panel_001–panel_062 |
| 글자가 있는 패널 | 44 | 대사 42 + 효과음만 2 (P02, P04) |
| `silent` 패널 | 18 | P01, P03, P10, P11, P13, P17–P19, P37, P40, P45–P47, P54–P56, P58, P59 (침묵 3연타 안에 효과음 0) |
| `bubble` 항목 | 53 | 대사 51 + 생각 1 (P49) + 엔딩 캡션 1 (P62, `narration`) |
| └ 말풍선(대사 + 생각) | 52 | 대본 머리말 "말풍선 52"와 같다 |
| 말풍선 2개 패널 | 10 | P07, P12, P14, P20, P22, P26, P30, P35, P38, P50 (P62는 말풍선 1 + 캡션 상자 1) |
| 두 줄 말풍선 (Battambang) | 21 | P06, P07②, P08, P09, P14①, P15, P26①②, P28, P32, P33, P35②, P38①②, P39, P43, P49, P51, P52, P60, P62① · 나머지 32개(캡션 포함)는 한 줄 |
| `sfx` | 2 | P02 «រោយ… រោយ…», P04 «ក្រាំង!» |
| `env` | 0 | 이 회차에 사물 위 글씨 없음 |
| 큰 `gap_after` | 5 | P02 320 · P18 360 · P45 400 · P53 440 · P61 600 |
| 그 밖의 gap | — | 200 P50 · 160 P05, P12, P28, P38 · 120 P20 · 80 P49 · 60 P16, P23, P26, P36, P43 · 24 P56 · 0 나머지(P44 → P45 = 0, P58 = 0, P62 = 0 회차 끝) |

### 2. 검증

- `km_tool.py check --episode 01`: OK (exit 0) · 44패널 일치 · bubbles 53. `km_review.py gate --episode 01`: OK (exit 0, 대본은 검수 판본 그대로).
- 뷰어 템플릿(`viewer-km.html`)과 같은 CSS로 만든 모형(작업용 임시 파일, 프로젝트 밖)에서 재었다: 모든 말풍선이 패널 안, 같은 패널 안 말풍선끼리 겹침 0, 꼬리 끝이 다른 말풍선에 닿지 않음, 각 말풍선이 자기 `art_space` 안(±2%). 360–720px 폭, L을 1:1로 바꾼 경우에도 같다.
- **오프라인 대체 글꼴(Windows의 Khmer UI)** 은 Battambang보다 15–20% 넓다. 그 경우에만 P09, P15, P32, P38①②, P49가 3줄이 된다(패널 밖으로 나가지는 않게 P38을 y 12.5로 내렸다). 이 여섯을 Khmer UI에서도 2줄로 만들면 Battambang 줄바꿈이 합성어를 가르거나 말풍선이 얼굴 쪽으로 넓어져서 웹 글꼴을 우선했다.

### 3. 그림에서 위험한 자리 (위험한 순서)

panel-director의 구도(얼굴·손 위치)는 **바꾸지 않았고 바꿔 달라고 하지도 않는다.** 아래는 그 구도 안에서 이 파일의 `art_space`를 지켜야 하는 곳이다.

1. **P09 (ST 16:9 인서트)**: 샷리스트는 두 손을 "왼쪽 2/3", 말풍선을 "오른쪽 1/3"에 두었지만, 2줄 말풍선(폭 39.5%)은 뷰어 규칙상 가로 40–80%에 놓일 수밖에 없다(3번 이유, 헤더 참조). 그래서 손·바늘·진홍 실패가 그 구간에서는 **화면 아래 절반**에 있어야 한다. 가장 위험. 손이 높게 그려지면 panel-validator C3(b)로 REGEN, 또는 말풍선을 y 20까지 올리는 정도만 가능.
2. **P49 (쌍둥이 컷, 생각 말풍선)**: `TWIN_CAM`의 얼굴 중심이 가로 35%라, 말풍선 왼쪽 끝(44.6%)과 그녀의 이마·머리카락 오른쪽 끝이 가깝다. 위 1/4에서 머리는 가로 44% 안쪽. **P45도 같은 자리를 비운다**(panel_045에 `art_space`를 적었다). 겹치면 y 9까지만 올린다(더 내리면 얼굴을 가린다).
3. **P26**: 두 줄 말풍선 둘이 위 38%를 다 쓴다. 그의 머리 꼭대기 40%(샷리스트 값)가 지켜져야 ②의 꼬리가 머리카락에 닿지 않는다. 순서는 ① 위 오른쪽 → ② 그 아래 왼쪽~가운데(①의 꼬리가 ②를 찌르지 않게 샷리스트 제안의 좌우를 바꿨다).
4. **P38**: 두 줄 말풍선 둘이 위 23%에 나란히(페트라 왼쪽, 휴고 오른쪽 = 읽는 순서). 일어서는 휴고의 머리 꼭대기 25% 이상(샷리스트 25–30%)이 지켜져야 한다.
5. **P07**: ② 가죽상 말풍선이 가로 38–78%, 세로 16–33%. 실크해트(꼭대기 약 20%)가 가로 78% 오른쪽에 있어야 한다.
6. **P15 (얼굴 클로즈업)**: 말풍선이 가로 5–39%. 그의 얼굴과 머리 한 가닥이 가로 42% 오른쪽에 있어야 한다.
7. **P14**: ② 페트라 말풍선이 세로 22–31%(3:4). 오른쪽 전경 그녀의 머리 꼭대기가 세로 33% 아래. 가운데 소실점의 휴고는 가리지 않는다.
8. P12 언덕 위 온실은 가로 68% 오른쪽 · P62 얼굴(눈·입·귀)은 위 25%와 아래 9% 사이 · P43 그녀 얼굴은 가로 48% 왼쪽.

### 4. 샷리스트 제안과 다르게 정한 것 (이유)

- **P36**: 제안(오른쪽 위, 어깨 뒤) 대신 **왼쪽 위**. 가슴~턱 크롭이라 오른쪽 위에 놓으면 폭 규칙 때문에 말풍선이 그의 입·턱 위로 밀린다.
- **P20 ②**: 휴고 머리 "옆"이 아니라 **머리 위**(가로 50–79%, 세로 12–24%). 옆자리는 폭 규칙상 그의 얼굴과 겹친다.
- **P06, P08, P09, P16, P23, P30, P43, P44, P49, P51, P57**: "오른쪽 1/3"을 "가운데~오른쪽"으로 넓혔다(헤더 3번).
- **P30**: 제안의 "← 그녀 얼굴" 꼬리는 뷰어에 없다(위·아래 꼬리뿐) → 두 말풍선 모두 `↙`.
- **꼬리 방향(화면 밖 화자)**: P09 `↘`(오른쪽 문 쪽 가죽상) · P16, P43 `↘`(손만 보이는 휴고) · P22②, P31 `↙`(손만 보이는 페트라) · P62 `↑`(화면 위 밖 휴고).

### 5. 플래그

- **P62 엔딩 캡션**: `km_tool`은 대본의 `KM 캡션:`을 같은 패널의 `type: narration` 말풍선으로만 맞춰 본다. 그래서 P62에는 `bubble` 항목이 둘이지만, 말풍선은 휴고의 것 하나뿐이고 둘째는 맨 아래 깃 그늘 띠의 어두운 캡션 상자다(얼굴·말풍선과 떨어져 있다).
- **P49**는 `type: thought`(점선, 꼬리 대신 작은 점) 하나뿐. 말 말풍선이 아니어서 B9의 "그는 듣지 못했다"가 산다.
- **줄바꿈은 문구가 아니라 폭으로 정해진다.** 크메르어 원어민이 빌드된 뷰어에서 볼 만한 줄바꿈: P06 «…ត្រឹមចុង | ត្រីមាស។»(폭에 따라 «…ត្រឹម | ចុងត្រីមាស។»), P15 «…គេ | ចាកចេញទាំងអស់។», P33 «…មួយ | ដង្ហើម…», P43 «…ធ្វើឲ្យដៃ | គាត់ខូច។», P52 «…យប់នេះ | ខ្ញុំចេញ។», P62 «…អ្នកចង់ | ស្រាប់ហើយឬ?». 바꾸고 싶으면 `w`만 바꾼다(문구는 그대로).
- 효과음 크기: P02 `size 5.5`(회전 8°, 떨어지는 재 방향), P04 `size 8`(회전 −10°). 효과음 글꼴 Koulen은 온라인에서만 로드된다.
- 이 파일 밖은 아무것도 고치지 않았다(대본·샷리스트·스타일 바이블 그대로).
