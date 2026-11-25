# EP02 레터링 명세 「원하는 손만」 / «មានតែដៃដែលចង់» — letterer (크메르어판 · 말풍선은 뷰어가 그린다)

- 작품: 「장갑을 벗기 전에」 / «មុនដោះស្រោមដៃ» · EP02 (NN = 02) · 18+ 로맨스 판타지 · Khmer edition · Flow-by-hand mode
- 작성: letterer · 2026-11-25 · 첫 작성
- 입력: `03_episode/ep02_script_final.md`(native-khmer 검수 READY 판본. `text_km`은 각 패널 `KM:` 줄을 글자·띄어쓰기·문장부호까지 그대로 복사했다. 대본은 고치지 않았다) · `04_visual/ep02_shotlist.md`(구도·화면비·말풍선 자리 제안 §2-5·화면 밖 화자·`gap_after`·FL9·FL14) · `04_visual/style-bible.md` §5-4·§9 · `00_input/brief.md` EP02 잠금 1–8, RULINGS EA–EJ · `04_visual/ep01_lettering.md`(형식)
- 형식: `webtoon-khmer-edition` §3. **이미지에는 글자가 하나도 없다.** 이 파일이 말풍선 문구와 위치의 유일한 출처이고, `km_tool.py build`가 이 파일로 뷰어를 만든다(뷰어 데이터를 손으로 고치지 않는다).

## 읽는 법 (prompt-smith · panel-validator · episode-compositor)

1. **`art_space`** = 그림이 비워 둘 자리. 한국어 뒤 ` | EN: ` 다음이 Flow 프롬프트에 넣을 영어 문장이다(prompt-smith는 이 영어 문장 + `(a speech bubble will be added there later)`). **ruling EJ: 자리는 샷리스트 §3의 `art_space` 제안과 같은 곳이다(옮기지 않았다).** 이 파일은 그 자리에 가로·세로 범위(%)를 붙였을 뿐이고, 모든 말풍선(꼬리 포함)이 그 범위 안에 있다. 그래서 prompt-smith가 샷리스트의 영어 문장으로 먼저 작업해도 어긋나지 않는다. 범위가 샷리스트의 "1/3"보다 넓은 곳은 노트 4에 적었다.
2. **`place`** = `x`/`y`는 말풍선 중심, `w`는 최대 폭, 모두 패널 대비 %. 모든 말풍선이 `x + w ≤ 100`, `x ≥ w/2`, `w ≤ 85`(최대 57). 한 줄 말풍선은 글자 길이만큼 줄어든다(실제 폭 = 글자 폭 + 여백). `w`는 Battambang 한 줄 폭 + 약 2.5%로 잡았다.
3. **뷰어의 폭 규칙 때문에 말풍선은 오른쪽 가장자리에 붙지 못한다.** 폭 `w`인 말풍선의 오른쪽 끝은 최대 `100 − w/2`. 그래서 긴 줄의 오른쪽 화자(P23·P48 휴고)는 말풍선 중심이 가운데 쪽에 온다.
4. **꼬리**: `↙ ↓ ↘` = 아래(말풍선 폭의 25/50/75% 지점), `↖ ↑ ↗` = 위. 캡션(`narration`)은 꼬리 없음. 화면 밖 화자는 그 가장자리 쪽 꼬리. 뷰어에는 옆 꼬리(← →)가 없어서 샷리스트의 ←는 `↙`, →는 `↘`로 바꿨다(P16, P18②, P20, P27②, P30, P32①). 화살표 뒤 괄호는 사람이 읽는 메모다(도구는 화살표만 읽는다).
5. **한 줄 원칙:** 뷰어 웹 글꼴 Battambang으로 재어 보니 **51개 중 49개가 한 줄**이다(360·390·430·720px 패널 폭에서 같다). 두 줄은 P24·P30 두 개뿐이고, 둘 다 띄어쓰기 자리에서 접힌다: P24 «អ្នកណាដេរ? | រញ៉េរញ៉ៃ។», P30 «ចុងអំបោះ… | អ្នករុំជារង្វង់។». 최장 줄 P48② (글자 폭 44%), P07(43.6%), P50(43%), P04(40.5%), P25(39.2%)는 한 줄로 넣으려고 폭을 52–57%로 주었다. **배치 패스에서 `w`를 줄이면 줄바꿈이 생긴다:** `x`/`y`만 옮기고, `w`는 그대로 두거나 늘린다(`x + w ≤ 100` 안에서).
6. **화면비** (샷리스트 §2-1 = ruling EJ): XL 9:16 = P03, P39, P45, P56 · L 3:4 (없으면 1:1) = P01, P09, P12, P23, P33, P41, P52 · ST 16:9 = P17, P30 · 나머지 M 1:1. L을 1:1로 만들어도 말풍선은 패널 안에 있다(말풍선 키는 패널 폭에 비례하므로 1:1에서는 세로로 조금 더 차지할 뿐이다).
7. `silent: true` = 말풍선·효과음 없음. 그림이 화면을 채워도 된다. 이 회차 효과음 0, 사물 위 글씨(env) 0, 생각 말풍선 0.
8. 말풍선 2개 패널은 **먼저 말하는 사람의 말풍선이 더 위**(샷리스트 §2-5). 단독 말풍선 다섯 컷(P14, P15, P20, P21, P56)은 자리를 하나만 비운다.

---

### panel_001
- silent: true
- gap_after: 0

### panel_002
- silent: true
- gap_after: 0

### panel_003
- silent: true
- gap_after: 320

### panel_004
- art_space: 위 왼쪽(가로 0–55%, 세로 위 약 19%): 램프 밖 청록 어둠과 옅은 은녹색 달빛 유리. 그의 코끝~입·턱(위 오른쪽)은 가로 55%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 55% across, the top 19%), the blue-green darkness beyond the lamp and the faint silver-green moonlit glass, as calm, plain dark background with no important details; his nose, mouth and chin stay to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…ដូច្នេះ យប់នេះ អ្នកចាកចេញឬ?"
  - text_ko: "…그럼, 오늘 밤이오?"
  - place: x 28% · y 10% · w 53% · tail ↘ (위 오른쪽 휴고 입 쪽)
  - read_order: 1

### panel_005
- art_space: 위 왼쪽(가로 0–40%, 세로 위 약 19%): 작업대 끝 너머 램프 밖 청록 어둠. 양피지·밀랍·두루마리 끈은 이 아래, 램프 굴뚝은 오른쪽 위 | EN: Keep the upper left (from the left edge to about 40% across, the top 19%), the blue-green darkness past the far end of the bench beyond the lamp, as calm, plain dark background with no important details; the parchment, the seals and the tool-roll strap stay below it and the lamp chimney at the upper right.
- gap_after: 0
- bubble_1:
  - speaker: 페트라 (화면 왼쪽 밖, 손만 보임)
  - type: dialogue
  - text_km: "លក្ខខណ្ឌ។ ត្រូវកែ។"
  - text_ko: "조항. 수정."
  - place: x 20% · y 10% · w 36.5% · tail ↙ (왼쪽 가장자리 밖 페트라 쪽)
  - read_order: 1

### panel_006
- art_space: 위 1/3 왼쪽~가운데(가로 0–50%, 세로 위 약 19%): 양피지 위쪽 너머 무지의 어두운 참나무 작업대 면. 밀랍 셋·골무는 아래 2/3, 램프 굴뚝은 오른쪽 위(가로 55%보다 오른쪽) | EN: Keep the upper left to centre (from the left edge to about 50% across, the top 19%), the plain dark oak bench top beyond the parchment's top edge, as calm, plain dark background with no important details; the three seals and the thimble stay in the lower two thirds and the lamp chimney at the upper right.
- gap_after: 0
- bubble_1:
  - speaker: 페트라 (화면 밖, 손만 보임)
  - type: dialogue
  - text_km: "ចេញ ឬនៅ ខ្ញុំជាអ្នកសម្រេច។"
  - text_ko: "떠날지는, 내가 정해요."
  - place: x 25% · y 10% · w 47.5% · tail ↙ (왼쪽 아래 그녀 손 쪽)
  - read_order: 1

### panel_007
- art_space: 위 왼쪽 넓게(가로 0–58%, 세로 위 약 20%): 램프 밖 청록 어둠과 옅은 달빛 유리. 그의 머리 꼭대기(세로 약 30%)는 이 아래, 양피지와 그녀 손은 아래 가장자리 | EN: Keep a wide area across the upper left (from the left edge to about 58% across, the top 20%), the blue-green darkness and faint moonlit glass beyond the lamp, as calm, plain dark background with no important details; the top of his head stays below it and the parchment and her hand stay at the bottom edge.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "លើកក្រោយ… បើលើសចុងម្រាមដៃ?"
  - text_ko: "다음엔… 손끝이 아니라면?"
  - place: x 29% · y 10% · w 56% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_008
- art_space: 위 왼쪽(가로 0–47%, 세로 위 약 19%): 그녀 머리 위 램프 밖 청록 어둠. 그녀 머리 꼭대기(세로 약 32%)는 이 아래, 그의 얼굴은 오른쪽 | EN: Keep the upper left (from the left edge to about 47% across, the top 19%), the blue-green darkness above her head beyond the lamp, as calm, plain dark background with no important details; the top of her head stays below it and his face stays on the right.
- gap_after: 200
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "នោះក៏ខ្ញុំជាអ្នកសម្រេចដែរ។"
  - text_ko: "그것도 내가 정해요."
  - place: x 24% · y 10% · w 44.5% · tail ↓ (페트라 입 쪽)
  - read_order: 1

### panel_009
- art_space: 위 약 25% 전체(가로 0–80%): 초점 밖의 부드러운 초록빛 에메랄드 유리와 검은 철골. 가운데~오른쪽(휴고 머리 위)이 더 높은 말풍선 자리, 왼쪽(그녀 머리 위)이 조금 낮은 자리. 두 사람의 머리 꼭대기(세로 약 30%)·꺼진 램프·흰 장미(오른쪽 가운데)는 이 밖 | EN: Keep the top quarter from the left edge to about 80% across, the soft green-lit emerald glass and black iron ribs out of focus above both of them, as calm, plain background with no important details; their heads, the unlit lamp and the white rose stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…អ្នកបានដេកលក់ទេ?"
  - text_ko: "…잠은, 잤소?"
  - place: x 58% · y 7% · w 40% · tail ↘ (오른쪽 휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "វាស់។ ដៃឆ្វេង។"
  - text_ko: "치수. 왼손."
  - place: x 20% · y 17% · w 31.5% · tail ↓ (왼쪽 페트라 쪽)
  - read_order: 2

### panel_010
- art_space: 위 왼쪽(가로 0–43%, 세로 위 약 19%): 작업대 너머 무지의 연한 참나무 면과 흐린 초록 유리 아래쪽. 그의 장갑 낀 왼손(가운데~오른쪽)과 그녀의 오른손(왼쪽 아래)은 이 아래 | EN: Keep the upper left (from the left edge to about 43% across, the top 19%), the plain scrubbed oak bench top beyond and the blurred green glass, as calm, plain background with no important details; his gloved left hand and her waiting right hand stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라 (화면 왼쪽 밖, 손만 보임)
  - type: dialogue
  - text_km: "ស្រោមដៃ។ ដោះចេញ។"
  - text_ko: "장갑. 벗어요."
  - place: x 22% · y 10% · w 41% · tail ↙ (왼쪽 가장자리 밖 페트라 쪽)
  - read_order: 1

### panel_011
- art_space: 위 왼쪽(가로 0–49%, 세로 위 약 19%): 초점 밖의 초록빛 에메랄드 유리와 검은 철골. 그의 얼굴과 머리 한 가닥은 가로 49%보다 오른쪽, 벗겨지는 장갑은 아래 1/3 | EN: Keep the upper left (from the left edge to about 49% across, the top 19%), the soft green-lit emerald glass and black iron ribs out of focus, as calm, plain background with no important details; his face and the loose strand of hair stay to the right of it and the glove coming off stays in the lower third.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…ដៃខាងនេះដែរ… មើលទេ?"
  - text_ko: "…이쪽도, 보겠소?"
  - place: x 25% · y 10% · w 48% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_012
- silent: true
- gap_after: 60

### panel_013
- art_space: 위쪽 띠(가로 0–74%, 세로 위 약 30%): 왼쪽 높은 자리 = 그녀 머리 위 초록빛 유리, 그 아래 가운데~오른쪽 = 그의 머리 옆 유리와 철골. 그녀 머리 꼭대기(세로 약 32%)·그의 머리 꼭대기(세로 약 28–30%)·두 손은 이 밖 | EN: Keep the top band from the left edge to about 74% across (the top 30%), the soft green-lit glass and iron ribs above each of them (her side higher, his side a little lower), as calm, plain background with no important details; their heads and both hands stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ដៃឆ្វេង។ ខ្មៅជាង។"
  - text_ko: "왼손. 더 짙네요."
  - place: x 19% · y 8.5% · w 35.5% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ចំពោះស្បែក… មិនទាក់ទងទេឬ?"
  - text_ko: "가죽엔… 상관없지 않소?"
  - place: x 48% · y 21% · w 51.5% · tail ↘ (휴고 쪽)
  - read_order: 2

### panel_014
- art_space: 위 왼쪽(가로 0–30%, 세로 위 약 19%): 초점 밖의 초록빛 에메랄드 유리, 말풍선 하나 자리. 그의 얼굴(눈~턱)은 위 오른쪽, 두 손은 아래 2/3. 두 번째 빈 면을 만들지 않는다 | EN: Keep the upper left (from the left edge to about 30% across, the top 19%), the soft green-lit emerald glass out of focus, as calm, plain background with no important details; his face stays at the upper right and the hands in the lower two thirds.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…បានទេ?"
  - text_ko: "…되겠소?"
  - place: x 16% · y 10% · w 25.5% · tail ↘ (위 오른쪽 휴고 입 쪽)
  - read_order: 1

### panel_015
- art_space: 위 오른쪽(가로 약 60–84%, 세로 위 약 19%): 초점 밖의 초록빛 유리와 철골, 말풍선 하나 자리. 그녀 얼굴 아래쪽·귀 끝은 위 왼쪽, 두 손은 아래 2/3 | EN: Keep the upper right (about 60–84% across, the top 19%), the soft green-lit glass and iron ribs out of focus, as calm, plain background with no important details; her lower face and ear stay at the upper left and the hands in the lower two thirds.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "បាន។"
  - text_ko: "돼요."
  - place: x 72% · y 10% · w 20% · tail ↙ (위 왼쪽 페트라 입 쪽)
  - read_order: 1

### panel_016
- art_space: 위 오른쪽(가로 약 43–82%, 세로 위 약 19%): 작업대 너머 초점 밖 초록빛 유리. 그녀 얼굴(눈썹~턱)은 위 왼쪽 가장자리(가로 40%보다 왼쪽), 손가락과 실은 가운데 | EN: Keep the upper right (about 43–82% across, the top 19%), the blurred green-lit glass beyond the bench, as calm, plain background with no important details; her face stays at the upper-left edge and the hands and thread in the centre.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ម្រាមដៃ។ ម្ដងមួយ។"
  - text_ko: "손가락. 하나씩."
  - place: x 62% · y 10% · w 36.5% · tail ↙ (위 왼쪽 페트라 얼굴 쪽)
  - read_order: 1

### panel_017
- silent: true
- gap_after: 0

### panel_018
- art_space: 왼쪽 위~왼쪽 가운데(위 18%는 가로 0–46%, 그 아래 세로 18–35%는 가로 0–29%): 초점 밖 초록빛 유리와 철골. 그의 얼굴(가운데~오른쪽, 머리 꼭대기 세로 약 30%)은 이 오른쪽, 두 손은 아래 가장자리 | EN: Keep the upper left (from the left edge to about 46% across, the top 18%) and below it the left side (from the left edge to about 29% across, down to about 35%), the blurred green-lit glass and iron ribs, as calm, plain background with no important details; his face stays to the right and the hands at the bottom edge.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ចុងម្រាមដៃនោះ… ឈឺទេ?"
  - text_ko: "그 손끝은… 아프오?"
  - place: x 24% · y 9% · w 44.5% · tail ↘ (휴고 입 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라 (화면 왼쪽 밖)
  - type: dialogue
  - text_km: "ធ្វើការបាន។"
  - text_ko: "일엔 지장 없어요."
  - place: x 15% · y 26% · w 27% · tail ↙ (왼쪽 가장자리 밖 페트라 쪽)
  - read_order: 2

### panel_019
- art_space: 위 왼쪽(가로 0–29%, 세로 위 약 19%): 종이 너머 무지의 참나무 작업대와 흐린 초록 유리. 커프를 끌어내리는 그의 장갑 낀 오른손(위 오른쪽)과 종이·분필(가운데~아래)은 이 밖 | EN: Keep the upper left (from the left edge to about 29% across, the top 19%), the plain oak bench and blurred green glass beyond the paper, as calm, plain background with no important details; his gloved right hand pulling the cuff stays at the upper right and the paper and chalk below.
- gap_after: 0
- bubble_1:
  - speaker: 페트라 (화면 왼쪽 밖, 손만 보임)
  - type: dialogue
  - text_km: "នៅស្ងៀម។"
  - text_ko: "가만히."
  - place: x 15% · y 10% · w 26% · tail ↙ (왼쪽 가장자리 밖 페트라 쪽)
  - read_order: 1

### panel_020
- art_space: 위 오른쪽(가로 약 59–86%, 세로 위 약 19%): 초점 밖 초록빛 유리와 그의 소매 쪽, 말풍선 하나 자리. 두 손과 한 마디 빈틈은 가운데 | EN: Keep the upper right (about 59–86% across, the top 19%), the blurred green-lit glass toward his sleeve, as calm, plain background with no important details; the two hands and the finger-joint gap stay in the centre.
- gap_after: 0
- bubble_1:
  - speaker: 휴고 (화면 오른쪽 밖, 손만 보임)
  - type: dialogue
  - text_km: "…បានទេ?"
  - text_ko: "…되겠소?"
  - place: x 72% · y 10% · w 25.5% · tail ↘ (오른쪽 가장자리 밖 휴고 쪽)
  - read_order: 1

### panel_021
- art_space: 위 왼쪽(가로 약 7–37%, 세로 위 약 19%): 그녀 머리 위 초점 밖 초록빛 유리, 말풍선 하나 자리. 그녀 머리 꼭대기(세로 약 30%)는 이 아래 | EN: Keep the upper left (about 7–37% across, the top 19%), the blurred green-lit glass above her head, as calm, plain background with no important details; the top of her head stays below it.
- gap_after: 360
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "មិនទាន់ទេ។"
  - text_ko: "아직."
  - place: x 22% · y 10% · w 27% · tail ↓ (페트라 입 쪽)
  - read_order: 1

### panel_022
- silent: true
- gap_after: 0

### panel_023
- art_space: 위 약 25% 전체(가로 0–76%): 초록빛 유리와 철골. 가운데~오른쪽 높은 자리 = 그의 머리 위, 왼쪽 낮은 자리 = 그녀 머리 위. 그의 머리 꼭대기(세로 약 25%)·그녀 머리 꼭대기(약 33%)·상자는 이 아래 | EN: Keep the top band from the left edge to about 76% across (the top quarter), the soft green-lit glass and iron ribs above them, his side higher, as calm, plain background with no important details; their heads and the box stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ស្រោមដៃមុនៗ… មើលដែរទេ?"
  - text_ko: "지난 것들도, 보겠소?"
  - place: x 50% · y 7% · w 49% · tail ↘ (오른쪽 휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ទាំងអស់។"
  - text_ko: "전부."
  - place: x 15% · y 17% · w 25% · tail ↓ (왼쪽 페트라 쪽)
  - read_order: 2

### panel_024
- art_space: 위 오른쪽(가로 약 54–86%, 세로 위 약 24%): 초점 밖의 초록빛 유리와 철골. 그녀 얼굴(눈썹~입)은 위 왼쪽~가운데(가로 52%보다 왼쪽), 장갑은 아래 2/3 | EN: Keep the upper right (about 54–86% across, the top 24%), the blurred green-lit glass and iron ribs, as calm, plain background with no important details; her face stays to the left of it and the glove in the lower two thirds.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "អ្នកណាដេរ? រញ៉េរញ៉ៃ។"
  - text_ko: "누가 기웠어요? 엉망."
  - place: x 70% · y 11% · w 28% · tail ↙ (위 왼쪽 페트라 입 쪽)
  - read_order: 1

### panel_025
- art_space: 위 왼쪽 넓게(가로 0–53%, 세로 위 약 19%): 초점 밖의 초록빛 유리와 철골. 그의 머리 꼭대기(세로 약 32%)와 얼굴은 이 아래·오른쪽 | EN: Keep a wide area across the upper left (from the left edge to about 53% across, the top 19%), the blurred green-lit glass and iron ribs, as calm, plain background with no important details; his head and face stay below and to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…ខ្ញុំសាកធ្វើ តាមដែលបានរៀន។"
  - text_ko: "…배운 대로 해 본 거요."
  - place: x 27% · y 10% · w 52% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_026
- art_space: 위쪽 띠(가로 0–78%, 세로 위 약 29%): 왼쪽 높은 자리 = 그녀 머리 위 유리, 그 아래 가운데~오른쪽 = 그의 머리 위 유리. 그녀 머리 꼭대기(세로 약 32%)·그의 머리 꼭대기(세로 약 30%)·장갑은 이 아래 | EN: Keep the top band from the left edge to about 78% across (the top 29%), the soft green-lit glass above each of them (hers higher), as calm, plain background with no important details; both heads and the glove in her hands stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "មួយគូ ទ្រាំបានយូរប៉ុណ្ណា?"
  - text_ko: "얼마나 버텼어요?"
  - place: x 21.5% · y 8% · w 42.5% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…បានប៉ុន្មានអាទិត្យដែរ។"
  - text_ko: "…몇 주씩은."
  - place: x 57% · y 20.8% · w 42.5% · tail ↘ (휴고 쪽)
  - read_order: 2

### panel_027
- art_space: 위 왼쪽(가로 0–41%, 세로 위 약 18%) + 위 오른쪽(가로 약 56–85%, 세로 약 11–27%): 그녀 머리 위 초록빛 유리와 그의 옆얼굴 위 유리. 그녀 머리 꼭대기(세로 약 30%), 그의 머리 꼭대기(세로 약 25–28%)는 이 아래 | EN: Keep the upper left (from the left edge to about 41% across, the top 18%) and the upper right (about 56–85% across, down to about 27%), the blurred green-lit glass above her and above his profile, as calm, plain background with no important details; both heads stay below them.
- gap_after: 60
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "របស់ខ្ញុំ… ទ្រាំយូរជាង។"
  - text_ko: "내 건, 더 가요."
  - place: x 21% · y 9% · w 40.5% · tail ↓ (페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…អ្នកធានាឬ?"
  - text_ko: "…장담하오?"
  - place: x 70% · y 19% · w 29.5% · tail ↘ (오른쪽 가장자리 휴고 옆얼굴 쪽)
  - read_order: 2

### panel_028
- silent: true
- gap_after: 0

### panel_029
- art_space: 위 오른쪽(가로 약 58–86%, 세로 위 약 18%) + 위 왼쪽(가로 0–43%, 세로 약 12–29%): 초록빛 유리와 철골, 그의 쪽이 더 높다. 그의 머리 꼭대기(세로 약 25%), 그녀 머리 꼭대기(세로 약 35%), 바늘과 띠는 이 아래 | EN: Keep the upper right (about 58–86% across, the top 18%) and the upper left (from the left edge to about 43% across, down to about 29%), the soft green-lit glass and iron ribs above them, his side higher, as calm, plain background with no important details; both heads and the needlework stay below them.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "អំបោះខ្មៅឬ?"
  - text_ko: "검은 실이군."
  - place: x 72% · y 9% · w 27.5% · tail ↘ (휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្រោមដៃខ្មៅ… ត្រូវខ្មៅ។"
  - text_ko: "검은 장갑엔, 검정."
  - place: x 22% · y 20% · w 42.5% · tail ↓ (페트라 쪽)
  - read_order: 2

### panel_030
- art_space: 오른쪽 위(가로 약 55–87%, 세로 위 약 40%): 초점 밖의 연한 참나무 작업대와 초록빛 유리. 두 손·띠·실패는 가로 55%보다 왼쪽, 그의 장갑 손끝은 오른쪽 아래 가장자리 | EN: Keep the upper right (about 55–87% across, the top 40%), the out-of-focus pale oak bench and green-lit glass, as calm, plain background with no important details; the hands, the cuff band and the spool stay to the left of it and his gloved fingertips at the lower-right edge.
- gap_after: 0
- bubble_1:
  - speaker: 휴고 (화면 오른쪽 밖, 손끝만 보임)
  - type: dialogue
  - text_km: "ចុងអំបោះ… អ្នករុំជារង្វង់។"
  - text_ko: "끝을… 고리로 감는군."
  - place: x 71% · y 20% · w 28% · tail ↘ (오른쪽 가장자리 밖 휴고 쪽)
  - read_order: 1

### panel_031
- art_space: 위 왼쪽(가로 약 9–31%, 세로 위 약 19%): 그녀 머리 위 초점 밖 초록빛 유리. 그녀 머리 꼭대기(세로 약 32%)는 이 아래, 그의 어깨는 오른쪽 가장자리 | EN: Keep the upper left (about 9–31% across, the top 19%), the blurred green-lit glass above her head, as calm, plain background with no important details; the top of her head stays below it and his shoulder at the right edge.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ទម្លាប់។"
  - text_ko: "버릇."
  - place: x 20% · y 10% · w 22% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_032
- art_space: 위쪽 띠(가로 0–74%, 세로 위 약 29%): 왼쪽 높은 자리 = 초점 밖 초록빛 유리, 그 아래 가운데~오른쪽 = 그의 머리 위 유리. 그의 머리 꼭대기(세로 약 30%)·깃을 누르는 왼손·멈춘 그녀 손(왼쪽 가운데)은 이 아래 | EN: Keep the top band from the left edge to about 74% across (the top 29%), the blurred green-lit glass, higher on the left and a little lower above his head, as calm, plain background with no important details; his head, the hand guarding his collar and her stopped hand stay below it.
- gap_after: 160
- bubble_1:
  - speaker: 페트라 (화면 왼쪽 밖, 손만 보임)
  - type: dialogue
  - text_km: "ស្មា។ មួយភ្លែត។"
  - text_ko: "어깨. 잠깐."
  - place: x 18% · y 9% · w 32.5% · tail ↙ (왼쪽 가장자리 밖 페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…កអាវ… អាចទុកដដែលទេ?"
  - text_ko: "…깃은, 그대로 두겠소?"
  - place: x 51% · y 21% · w 48.5% · tail ↘ (휴고 입 쪽)
  - read_order: 2

### panel_033
- silent: true
- gap_after: 0

### panel_034
- art_space: 위 왼쪽(가로 약 7–29%, 세로 위 약 19%): 페트라 머리 위, 햇살 기둥 사이 초록 그늘이 진 유리 지붕과 검은 철골. 햇살 기둥과 하녀·집사는 이 밖 | EN: Keep the upper left (about 7–29% across, the top 19%), the soft green shade of the glass roof and iron ribs between the sunbeams above Petra's head, as calm, plain background with no important details; the sunbeams, the maid and the steward stay outside it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្បែក។"
  - text_ko: "가죽."
  - place: x 18% · y 10% · w 22% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_035
- silent: true
- gap_after: 0

### panel_036
- art_space: 위 왼쪽(가로 0–49%, 세로 위 약 19%): 햇살 기둥 사이 초록 그늘의 유리 지붕과 철골. 하녀 얼굴(가운데~오른쪽, 머리 꼭대기 세로 약 30%)은 이 아래·오른쪽, 페트라의 어깨는 왼쪽 가장자리 아래쪽 | EN: Keep the upper left (from the left edge to about 49% across, the top 19%), the soft green shade of the glass roof and iron ribs between the sunbeams, as calm, plain background with no important details; the maid's face stays below and to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 하녀
  - type: dialogue
  - text_km: "មិនមែនកំហុសលោកម្ចាស់ទេ។"
  - text_ko: "백작님 탓 아니에요."
  - place: x 25% · y 10% · w 48% · tail ↘ (하녀 입 쪽)
  - read_order: 1

### panel_037
- art_space: 위 가운데~오른쪽(가로 약 41–79%, 세로 위 약 19%): 하녀 머리 위 초록 그늘의 유리 지붕. 하녀 머리 꼭대기(세로 약 32%)는 이 아래, 페트라의 어깨·뺨은 왼쪽 가장자리 | EN: Keep the upper centre to right (about 41–79% across, the top 19%), the soft green shade of the glass roof above the maid's head, as calm, plain background with no important details; the top of the maid's head stays below it and Petra's shoulder at the left edge.
- gap_after: 0
- bubble_1:
  - speaker: 하녀
  - type: dialogue
  - text_km: "គឺស្រោមដៃ… ធ្លាយ។"
  - text_ko: "장갑이… 터진 거예요."
  - place: x 60% · y 10% · w 38.5% · tail ↓ (하녀 입 쪽)
  - read_order: 1

### panel_038
- art_space: 위 왼쪽(가로 0–53%, 세로 위 약 19%): 초록 그늘의 유리 지붕과 철골. 페트라 머리 꼭대기(세로 약 30%)는 이 아래, 하녀는 오른쪽 가장자리 | EN: Keep the upper left (from the left edge to about 53% across, the top 19%), the soft green shade of the glass roof and iron ribs, as calm, plain background with no important details; the top of Petra's head stays below it and the maid at the right edge.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្រោមដៃក្រោយ… មិនធ្លាយទេ។"
  - text_ko: "다음 장갑은, 안 터져요."
  - place: x 27% · y 10% · w 52% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_039
- silent: true
- gap_after: 0

### panel_040
- art_space: 위쪽 띠(가로 약 4–78%, 세로 위 약 28%): 돔의 유리와 철골(햇살 기둥 사이 그늘). 가운데~오른쪽 높은 자리 = 그의 머리 위, 왼쪽 낮은 자리 = 그녀 머리 위. 그의 머리 꼭대기(세로 약 25%)·그녀 머리 꼭대기(세로 약 32%)는 이 아래 | EN: Keep the top band (about 4–78% across, the top 28%), the dome's glass and iron ribs in soft shade between the sunbeams, his side higher, as calm, plain background with no important details; both heads stay below it.
- gap_after: 200
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ផ្លូវរបស់ខ្ញុំ… អ្នកក៏ដើរដែរឬ?"
  - text_ko: "내 길을… 당신도 걷는 거요?"
  - place: x 54% · y 8.5% · w 46% · tail ↘ (휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ផ្លូវកាត់។"
  - text_ko: "지름길이에요."
  - place: x 16% · y 19% · w 23% · tail ↓ (페트라 쪽)
  - read_order: 2

### panel_041
- art_space: 위 왼쪽(가로 0–39%, 세로 위 약 16%): 그녀 머리 위, 램프 웅덩이 밖 유리벽의 마지막 짙은 푸른빛. 램프(가운데)와 비친 불꽃은 가로 40%보다 오른쪽 | EN: Keep the upper left (from the left edge to about 39% across, the top 16%), the last deep blue of the evening sky in the glass wall beyond the lamp's pool above her head, as calm, plain dark background with no important details; the lamp and its reflected flame stay to the right of it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ដៃអាវ។ វាស់ប្រវែង។"
  - text_ko: "소매. 길이."
  - place: x 20% · y 8% · w 37.5% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_042
- art_space: 위 오른쪽(가로 약 60–84%, 세로 위 약 18%) + 위 왼쪽(가로 약 8–28%, 세로 약 12–28%): 유리벽의 짙은 푸른빛, 그의 쪽이 더 높다. 그의 머리 꼭대기(세로 약 25%)·그녀 머리 꼭대기(세로 약 33%)는 이 아래 | EN: Keep the upper right (about 60–84% across, the top 18%) and the upper left (about 8–28% across, down to about 28%), the deep blue dusk glass above each of them, his side higher, as calm, plain dark background with no important details; both heads stay below them.
- gap_after: 0
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…បានទេ?"
  - text_ko: "…되겠소?"
  - place: x 72% · y 9% · w 25.5% · tail ↘ (휴고 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 페트라
  - type: dialogue
  - text_km: "បាន។"
  - text_ko: "돼요."
  - place: x 18% · y 19% · w 20% · tail ↓ (페트라 쪽)
  - read_order: 2

### panel_043
- silent: true
- gap_after: 0

### panel_044
- silent: true
- gap_after: 400

### panel_045
- silent: true
- gap_after: 0

### panel_046
- art_space: 위 왼쪽(가로 0–40%, 세로 위 약 19%): 그녀 머리 위 램프 밖 짙은 푸른 유리. 그녀 머리 꼭대기(세로 약 33%)는 이 아래, 그의 목과 얼굴은 오른쪽 | EN: Keep the upper left (from the left edge to about 40% across, the top 19%), the deep blue dusk glass above her head beyond the lamp's pool, as calm, plain dark background with no important details; the top of her head stays below it and his neck and face on the right.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "វា… ដល់ណាហើយ?"
  - text_ko: "어디까지예요?"
  - place: x 21% · y 10% · w 38% · tail ↓ (페트라 쪽)
  - read_order: 1

### panel_047
- art_space: 위 왼쪽(가로 0–40%, 세로 위 약 19%): 램프 밖 짙은 푸른 유리. 그의 머리 꼭대기(세로 약 30%)와 얼굴은 이 오른쪽 아래, 가슴의 장갑 손은 가운데~오른쪽 | EN: Keep the upper left (from the left edge to about 40% across, the top 19%), the deep blue dusk glass beyond the lamp, as calm, plain dark background with no important details; his head and face stay below and to the right of it and his gloved hand on his chest in the centre-right.
- gap_after: 440
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…មកដល់នេះហើយ។"
  - text_ko: "…여기까지요."
  - place: x 21% · y 10% · w 39% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_048
- art_space: 위쪽 띠(가로 0–72%, 세로 위 약 30%): 왼쪽 높은 자리 = 그녀 머리 위 짙은 푸른 유리, 그 아래 가운데~오른쪽 넓게 = 그의 머리 위 유리. 그녀 쪽머리·옆얼굴(왼쪽 전경, 세로 약 30% 아래)과 그의 머리 꼭대기(세로 약 32%)는 이 아래 | EN: Keep the top band from the left edge to about 72% across (the top 30%), the deep blue dusk glass, higher on the left above her and wide and a little lower above him, as calm, plain dark background with no important details; her hair and profile and his head stay below it.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ស្រោមដៃ… មិនជួយទេឬ?"
  - text_ko: "장갑으론…?"
  - place: x 23% · y 8.5% · w 44% · tail ↙ (왼쪽 전경 페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 휴고
  - type: dialogue
  - text_km: "ស្រោមដៃ… សម្រាប់ការពារអ្នកដទៃ។"
  - text_ko: "장갑은, 남을 지키는 거요."
  - place: x 44% · y 21.5% · w 56% · tail ↘ (휴고 쪽)
  - read_order: 2

### panel_049
- silent: true
- gap_after: 0

### panel_050
- art_space: 위 왼쪽 넓게(가로 0–56%, 세로 위 약 19%): 램프 밖 짙은 푸른 유리. 그의 머리 꼭대기(세로 약 30%)와 얼굴은 이 아래·오른쪽 | EN: Keep a wide area across the upper left (from the left edge to about 56% across, the top 19%), the deep blue dusk glass beyond the lamp, as calm, plain dark background with no important details; his head and face stay below and to the right of it.
- gap_after: 80
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…អ្នកទទួលតែស្រោមដៃ… ព្រមទេ?"
  - text_ko: "…장갑만, 맡아 주겠소?"
  - place: x 28.5% · y 10% · w 55.5% · tail ↘ (휴고 입 쪽)
  - read_order: 1

### panel_051
- art_space: 위 왼쪽(가로 0–34%, 세로 위 약 19%): 그녀 머리 위 짙은 푸른 유리. 그녀 머리 꼭대기(세로 약 30%)는 이 아래, 그의 장갑 손은 오른쪽 가장자리 | EN: Keep the upper left (from the left edge to about 34% across, the top 19%), the deep blue dusk glass above her head, as calm, plain dark background with no important details; the top of her head stays below it and his gloved hand at the right edge.
- gap_after: 0
- bubble_1:
  - speaker: 페트라
  - type: dialogue
  - text_km: "ដៃ។ ដកចេញ។"
  - text_ko: "손. 치워요."
  - place: x 18% · y 10% · w 31.5% · tail ↘ (페트라 쪽)
  - read_order: 1

### panel_052
- silent: true
- gap_after: 0

### panel_053
- silent: true
- gap_after: 0

### panel_054
- silent: true
- gap_after: 0

### panel_055
- art_space: 위 왼쪽 모서리(가로 0–27%, 세로 위 약 19%): 그의 오른쪽 어깨 너머 짙은 푸른 유리. 그의 턱·크라바트(위 가운데), 멈춘 장갑 손(왼쪽 가장자리 가운데), 매듭과 그녀 손은 이 밖 | EN: Keep the upper-left corner (from the left edge to about 27% across, the top 19%), the deep blue dusk glass past his right shoulder, as calm, plain dark background with no important details; his chin and cravat, his stopped gloved hand, the knot and her fingers stay outside it.
- gap_after: 600
- bubble_1:
  - speaker: 휴고
  - type: dialogue
  - text_km: "…ប៉ុន្មាន?"
  - text_ko: "…얼마요?"
  - place: x 15% · y 12% · w 24.5% · tail ↗ (위 가운데 그의 턱 쪽)
  - read_order: 1

### panel_056
- art_space: 두 곳. ① 왼쪽 가운데(가로 0–34%, 세로 약 46–58%): 그의 오른쪽 몸 옆 너머 초점 밖 짙은 푸른 유리(말풍선 자리). 실을 집은 손과 매듭 실(오른쪽 가운데)은 가로 36%보다 오른쪽. ② 맨 아래 약 10%(가로 약 25–75%): 그녀 머리 윗부분의 흐린 그늘(엔딩 캡션 자리). 그의 얼굴은 위 40% | EN: Keep the mid-left (from the left edge to about 34% across, about 46–58% down), the out-of-focus deep blue dusk glass beside his body, and the bottom tenth, the soft blurred shadow of the top of her head, as calm, plain dark background with no important details; her pinching fingers and the knotted thread stay to the right of the first area and his face in the top 40%.
- gap_after: 0
- bubble_1:
  - speaker: 페트라 (화면 아래 밖, 머리 윗부분만)
  - type: dialogue
  - text_km: "…មួយចំអាម។"
  - text_ko: "…한 뼘."
  - place: x 18% · y 52% · w 30.5% · tail ↓ (아래 가장자리 밖 페트라 쪽)
  - read_order: 1
- bubble_2:
  - speaker: 캡션 (엔딩)
  - type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ៣ —"
  - text_ko: "— 3화에 계속 —"
  - place: x 50% · y 95% · w 48%
  - read_order: 2


## 노트

### 1. 수치

| 항목 | 수 | 패널 |
|---|---|---|
| 패널 | 56 | panel_001–panel_056 |
| 글자가 있는 패널 | 39 | 대본의 대사 패널 39와 같다 |
| `silent` 패널 | 17 | P01–P03, P12, P17, P22, P28, P33, P35, P39, P43–P45, P49, P52–P54 (침묵 3연타 세 번 안에 효과음 0) |
| `bubble` 항목 | 51 | 대사 50 + 엔딩 캡션 1 (P56, `narration`) · 생각 0 |
| └ 말풍선(대사) | 50 | 대본 머리말 "말풍선 50 (대사 50, 생각 0)"과 같다 |
| 말풍선 2개 패널 | 11 | P09, P13, P18, P23, P26, P27, P29, P32, P40, P42, P48 (샷리스트 §2-5와 같다. P56은 말풍선 1 + 캡션 상자 1) |
| 단독 말풍선 | 5 | P14, P15, P20, P21, P56 |
| 화면 밖 화자 | 9 | P05, P06, P10, P19, P32① (손만 보이는 페트라, `↙`) · P18② (페트라, `↙`) · P20, P30 (손만 보이는 휴고, `↘`) · P56① (머리 윗부분만인 페트라, `↓`) |
| 두 줄 말풍선 (Battambang) | 2 | P24, P30 (띄어쓰기 자리에서 접힘) · 나머지 49개(캡션 포함)는 한 줄 |
| `sfx` | 0 | 이 회차 효과음 0 |
| `env` | 0 | 계약서 백지, 매듭 실 눈금 없음, 상자 무지 |
| 큰 `gap_after` | 5 | P03 320 · P21 360 · P44 400 · P47 440 · P55 600 |
| 그 밖의 gap | — | 200 P08, P40 · 160 P32 · 80 P50 · 60 P12, P27 · 0 나머지(P56 = 0 회차 끝) |

### 2. 검증

- `km_tool.py check --episode 02`: OK (exit 0) · 대사 패널 script 39 / lettering 39 일치 · bubbles 51. `km_review.py gate --episode 02`는 샷리스트 단계에서 OK(대본은 검수 판본 그대로, 이 파일은 대본을 읽기만 했다).
- 뷰어 템플릿(`viewer-km.html`)과 같은 CSS(`box-sizing: border-box`, 글자 3.4cqw, 줄 높이 1.7, 여백 0.7em/1.2em, 테두리 3px)와 Battambang 웹 글꼴로 만든 모형(작업용 임시 파일, 프로젝트 밖)에서 쟀다: 360·390·430·720px 폭 모두 **모든 말풍선이 패널 안, 같은 패널 안 말풍선끼리 겹침 0, 꼬리 끝이 다른 말풍선에 닿지 않음**, 두 줄은 P24·P30뿐. L 7개를 1:1로 만든 경우에도 같다(P09·P23·P41 확인).
- **오프라인 대체 글꼴(Windows의 Khmer UI)** 은 Battambang보다 훨씬 넓다. 그 경우 긴 줄(P04, P06–P09, P11, P13, P16, P18, P21, P23, P25–P27, P29, P32, P36, P38, P40, P48, P50, P56①)이 두 줄, P30이 세 줄이 되고, 2개짜리 패널 몇 곳(P09, P13, P18, P23, P26, P32, P48)에서 말풍선이 서로 닿거나 위 가장자리를 넘는다. 웹 글꼴을 기준으로 했다(EP01과 같은 판단). 오프라인 독자가 많다면 이 패널들만 `y`를 2–3% 벌리는 배치 패스가 필요하다.

### 3. 그림에서 위험한 자리 (위험한 순서)

panel-director의 구도(얼굴·손 위치)는 **바꾸지 않았고 바꿔 달라고 하지도 않는다.** 아래는 그 구도 안에서 이 파일의 `art_space`를 지켜야 하는 곳이다.

1. **P26**: 두 한 줄 말풍선(글자 폭 각 30%)이 가로로 겹쳐서 위아래로 쌓을 수밖에 없다. ② 휴고 말풍선이 세로 15–27%(꼬리 끝 29%), 가로 38–76%. 샷리스트의 휴고 머리 꼭대기 "약 25%"면 머리카락 끝에 닿는다 → **머리 꼭대기 약 30%** 가 지켜져야 한다(art_space에 적었다). 페트라 말풍선을 두 줄로 접으면 띄어쓰기가 아니라 «…យូរ | ប៉ុណ្ណា?»(‘얼마나’가 갈림)에서 접혀서 쓰지 않았다.
2. **P13**: ② 휴고 말풍선이 가로 24–72%, 세로 15–27%(꼬리 끝 29%). 그의 머리 꼭대기(샷리스트 약 28%)가 그보다 조금 아래여야 한다.
3. **P48**: ② 휴고 줄이 회차 최장(글자 폭 44%)이라 폭 규칙상 말풍선 중심이 가로 44%(가로 18–71%, 세로 16–28%)다. 샷리스트의 "위 오른쪽, 넓게" 안이지만 가운데 쪽으로 넓다. 왼쪽 전경 페트라의 쪽머리·옆얼굴이 세로 30% 아래여야 한다.
4. **P23 (L)**: ① 휴고 말풍선이 가로 27–73%로 가운데에 걸친다(줄 길이 + 폭 규칙). 위 25% 전체가 조용한 면이어야 한다(샷리스트 제안 그대로).
5. **P56 (XL)**: 말풍선이 왼쪽 가운데(가로 5–31%, 세로 49–55%), 엔딩 캡션이 맨 아래(가로 28–72%, 세로 92–98%). 실을 집은 손가락과 매듭 실은 가로 36%보다 오른쪽, 그녀 머리 윗부분의 그늘이 맨 아래 10%에 있어야 한다(FL9). 캡션은 손·실과 떨어져 있다.
6. **P30 (ST)**: 두 줄 말풍선이 가로 57–85%, 세로 4–36%(꼬리 끝 40%). 두 손·띠·실패가 가로 55% 왼쪽에 있어야 한다(샷리스트 "왼쪽 2/3"보다 조금 더 왼쪽).
7. **P04, P11, P36, P38, P50, P07, P25**: 한 줄로 넣으려고 위 왼쪽 자리를 가로 49–58%까지 썼다. 화자 얼굴(위 오른쪽 또는 가운데~오른쪽)은 그 오른쪽, 머리 꼭대기는 세로 약 25–30% 아래.
8. **P16, P24**: 위 오른쪽 자리. 그녀 얼굴이 위 왼쪽 가장자리(P16 가로 40% 왼쪽, P24 가로 52% 왼쪽)에 있어야 한다. P24는 그래서 두 줄로 좁혔다.

### 4. 샷리스트 제안과 다르게 정한 것 (이유)

- **자리(art_space)는 하나도 옮기지 않았다**(ruling EJ). 숫자 범위만 붙였다. "1/3"보다 넓게 잡은 곳(가로 범위): P04 0–55, P06 0–50, P07 0–58, P11 0–49, P25 0–53, P36 0–49, P38 0–53, P50 0–56 (모두 샷리스트가 말한 "위 왼쪽" 안, 한 줄 말풍선 폭 때문), P16 43–82(위 오른쪽), P37 41–79(위 가운데~오른쪽), P30 55–87(오른쪽 1/3 → 조금 왼쪽까지).
- **꼬리**: 뷰어에 옆 꼬리가 없어서 P16 ←, P18② ←, P32① ← → `↙` · P20 →, P27② →, P30 → → `↘`.
- **P18 ②**: "왼쪽 가운데"를 세로 20–32%(왼쪽 위 아래쪽)에 두었다. 더 내리면 그녀의 손이 들어오는 아래 가장자리 쪽 그림과 가까워진다.
- **P27 ②**: "그의 옆얼굴 앞" 대신 **그의 옆얼굴 위**(가로 57–83%, 세로 13–25%). 오른쪽 가장자리 옆얼굴 앞에는 폭 규칙상 말풍선이 들어가지 않는다.
- **P55**: 샷리스트대로 위 왼쪽 모서리 + `↗`(위 가운데 그의 턱 쪽).

### 5. 플래그

- **P56 엔딩 캡션**: `km_tool`은 대본의 `KM 캡션:`을 같은 패널의 `type: narration` 항목으로만 맞춰 본다. 그래서 P56에는 `bubble` 항목이 둘이지만 말풍선은 페트라의 것 하나뿐이고, 둘째는 맨 아래 띠의 어두운 캡션 상자다.
- **의식 문형 글자 동일 확인:** P14 = P20 = P42① «…បានទេ?», P15 = P42② «បាន។», P21 «មិនទាន់ទេ។»(1회). P37·P38 «ធ្លាយ» 같은 낱말. P06·P08 후렴 «ខ្ញុំជាអ្នកសម្រេច» EP1 철자 그대로(모두 대본에서 복사).
- **대본 머리말 표가 옛 크메르어를 인용한다:** `ep02_script_final.md` "이 회차의 고정 크메르어" 표의 P25 칸은 검수 전 «សាកធ្វើ តាមអ្វីដែលបានរៀន»이다. 실제 KM 줄과 glossary는 검수 후 «តាមដែលបានរៀន». 이 파일은 KM 줄을 따랐다(km_review.md가 이미 알린 사항, KM 줄이 아니라 check에 걸리지 않는다).
- 이 파일 밖은 아무것도 고치지 않았다(대본·샷리스트·스타일 바이블·EP01 파일 그대로).
