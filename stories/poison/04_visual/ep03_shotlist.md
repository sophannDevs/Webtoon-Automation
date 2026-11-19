# EP03 샷리스트 「깨끗합니다」 (시리즈 「독은 제가 먼저 먹겠습니다」 / KM «ថ្នាំពុល ខ្ញុំសូមភ្លក់មុន») — panel-director

- 작성: panel-director · 기준일 **2026-11-19** · EP03 Phase 4 step 3 · **v1** (Flow-by-hand + Khmer edition)
- 입력: `03_episode/ep03_script_final.md`(60패널 최종, **기준 문서**) · `03_episode/ep03_beatsheet.md`(§0-1 노리개 위치 · §0-4 의관 금지 목록 · §3 시간 큐 · §4 글자 없는 소품 · §6-3 큰 컷/여백 · §6-4 말풍선 자리 · §6-5 연보랏빛 3패널) · 형식 기준 `04_visual/ep02_shotlist.md` · `02_story/characters.md` §11(원 의관 · EXTRA-MED · PROP-MEDBOX) · 시리즈 자산(**읽기만, 수정 없음**): `04_visual/style-bible.md` v1 · `04_visual/character-sheets.md` v1 · `04_visual/refs/ref_prompts.md`(카드 이름) · `webtoon-khmer-edition` §4
- 다음 독자: **letterer**(`art_space` → lettering spec `art_space` · `place`, `gap_after`) → **prompt-smith**(Flow 프롬프트 · `attach`) → 사용자(Flow) → panel-validator
- 총 **60패널** (panel_001–panel_060 = 대본 P01–P60, 번호 · 순서 동일). 하한 50 충족. 팀 메시징 없는 실행이라 전달 사항은 끝의 §I에 모았다.

## 읽는 법

- **좌우:** `화면 왼쪽/오른쪽` = 화면 기준. `LEFT/RIGHT`(대문자) = 인물 · 사물 **자신의** 좌우(style-bible 표기). 정면 그림에서 민 상궁의 LEFT 관자놀이 흰 머리는 화면 오른쪽, 백 감찰의 RIGHT 턱 흉터는 화면 왼쪽, 환도(LEFT 허리)는 화면 오른쪽에 보인다. 원 의관의 약상자는 그의 **LEFT 손**.
- **좌표:** `x`/`y` = 패널 왼쪽 위에서 잰 % (x 가로, y 세로). 근사치다.
- **`art_space`:** 그 컷에서 **그림이 조용한 배경으로 비워 둘 자리**(뷰어가 크메르어 말풍선 · 효과음 · 캡션을 그 위에 그린다). 얼굴 · 손 · 은침 · 탕약 그릇 · 봉한 끈 매듭 · 행주 · 연보랏빛 번짐 · 앞섶의 흰 천 · 손수건 · 약상자 · 당번 판 · 등롱은 그 자리에 두지 않는다. 대사 · 생각 · 효과음 · 캡션이 있는 **55패널 모두** 기재(대사/생각 54 + 캡션만 P60). 무대사 5패널(P15 · P27 · P37 · P43 · P56)은 `silent`.
- **Khmer edition:** 어떤 이미지에도 글자 · 숫자 · 말풍선 · 가짜 글씨 · 한자 문양 · 인장이 없다. 글이 적힐 만한 물건 — **탕약 그릇 · 뚜껑 · 봉한 끈 매듭 · 쟁반 · 약상자 · 행주 · 빨래 · 빨래 바구니 · 당번 판 · 당번 패 · 등롱 · 병풍 · 향로 · 은침 받침** — 은 **빈 면**(BLANK, 무늬 · 각인 · 종이 표지 없음)으로 그린다. **탕약 뚜껑은 가는 회녹 무명 끈의 단순한 매듭으로만 봉한다**(인장 · 종이 띠 · 표지 없음, character-sheets §11-3). **입궁 패는 이 회차 어디에도 그리지 않는다**(P59 · P60 포함). EP03에는 물건 위 글씨(`env`)가 **없다**.
- **characters:** 가장 크게 보이는 1명 = **FULL**, 나머지 = **SHORT**, 손 · 뒷모습 · 실루엣 · 가장자리 = 상태 토큰. 표정은 character-sheets 번호(예: 채령 ④)와 그 영문 문장. 시트에 없는 표정은 `변주:` 영문 구절(외형은 그대로).
- **원 의관 = `WON`:** character-sheets **§11**(art-director, 2026-11-19)을 따른다: FULL = §11-1 FULL(characters §11-9 원문) · SHORT = §11-1 SHORT · 표정 = §11-2 **WON ①–⑥** · 상태 = §11-2 상태 토큰 · 소품 = §11-3 · 약동 = §11-4. 레퍼런스 = **`refs/WON_turnaround.png`(카드 #17, turnaround만 — WON_expressions는 만들지 않음)**. 패널별 배정은 §D-5.
- **time/light:** style-bible §3-2 LIGHT 토큰 이름. 변주구는 §D-6(새 토큰 아님).
- **EP03 상태 토큰:** §D에 정의(이 샷리스트 안에서만 쓰는 **가변** 상태 문구). `CHAERYEONG_NORIGAE_HIDDEN`은 **ep02_shotlist §D-1 원문 그대로** 재사용. 시리즈 문서(style-bible · character-sheets)는 바꾸지 않았다(§I).
- **repeat / echo:** 고정 앵글 · 구도 메아리. 원본 패널을 첨부하고 **다시 그린다**(PNG 복사 금지 — flow_tool은 md5 중복을 거른다). 바뀌는 것만 `repeat:` 줄에 적었다.
- **attach:** 사용자가 Flow에 붙일 이미지(패널당 **3장 이내**). 표기:
  - `refs/<카드명>.png` = 시리즈 레퍼런스 카드(`refs/ref_prompts.md`의 카드 이름 그대로). 원 의관 카드는 **`refs/WON_turnaround.png`**(EP03 패널 전에 사용자가 만든다 — §C).
  - `ep01 panel_NNN` = `_workspace/05_panels/ep01/panel_NNN.png` · `ep02 panel_NNN` = `_workspace/05_panels/ep02/panel_NNN.png` (**먼저 있어야 한다** — §C).
  - `ep03 panel_NNN` = 이 회차에서 먼저 만든 패널 = `_workspace/05_panels/ep03/panel_NNN.png`.
  - prompt-smith는 `attach:` 줄에 위 실제 경로를 쓴다(flow_tool은 프로젝트 루트 기준 경로를 찾는다).

### EP03 색 규칙 [고정]

- **연보라(은맹색 `#C9B6E4`) = 정확히 3패널: P44 · P45 · P58.** 그 셋에만 `lilac:` 줄이 있다. 연보라가 있는 곳은 **잿물에 빨린 미색 삼베 행주의 한가운데 번짐 하나뿐**(PROP_WIPECLOTH_LILAC). 그 밖의 **57패널은 보라 · 바이올렛 · 라벤더 · 라일락 · 모브 0**: 탕약(짙은 갈색) · 엎지른 자국 · L1의 행주(갈색뿐) · 노을 · 그림자 · 노리개 싸개 흰 천 · 손수건 · 의관 관복(회녹) · 다른 빨래 포함. 그늘보라 꽃 그림 금지.
- **손수건 얼룩(PROP_HANKY_STAIN) 0패널.** 민 상궁 컷은 전부 **PROP_HANKY_CLEAN** 또는 손수건이 안 보인다.
- **민 상궁 당의 = `deep wine-red plum (dark mulberry, almost burgundy)`, NOT purple.** 저녁 주황 · 붉은 빛(S02)과 남청 그늘이 겹치면 Flow가 보라로 밀기 쉽다 → 필요하면 `a long deep burgundy wine-red dangui jacket`으로 당긴다(character-sheets §3 색 규칙, 단어 순서만).
- **은침 = 끝까지 은빛**(P15 · P16). EP02의 회흑색 끝과 반대. 끝이 조금이라도 흐리거나 회색이면 REGEN.
- **탕약 = `dark brown herbal decoction, no purple tint, no sheen`.** 생 그늘보라 즙은 무색이라 그리지 않는다.
- **원 의관 관복 = `dull muted gray-green (sage-gray, like dried sage leaves)`** — 밝은 초록 · 연두 · 올리브 · 청록 · 민트 금지(characters §11-9). 내의원 약동(EXTRA_MED)도 같은 회녹.
- **천 두 종류 [고정]:** 노리개 싸개 = **작고 순백 · 매끈한 무명**(앞섶 안 LEFT 가슴, P02에서만 모서리가 보임) / 행주 = **크고 미색 · 거친 삼베**(L1 상 가장자리 → 엎지른 탕약 → 빨랫줄 → 감찰 손). 둘이 한 컷에 섞이거나 닮아 보이면 REGEN.
- 노을 = `orange and amber sunset`(LIGHT_L2_EVENING 원문, `no pink or purple`). 저녁 그림자 = `cool blue-gray / warm brown shadows`.

---

## A. 장소 목록 (scene_id ↔ LOC ↔ VIEW ↔ 배경 한 줄)

| scene_id | 패널 | location | 주 VIEW | 시간 · 조명 | 배경 한 줄 |
|---|---|---|---|---|---|
| S01 | P01–P42 | LOC_L1_TASTING | VIEW_L1_MAIN · VIEW_L1_DOOR · VIEW_L1_TABLE(구조만) | 4일째 아침 · LIGHT_L1_MORNING | 왕자 처소 시식방(EP01 · EP02와 같은 방 · 같은 구조 · 같은 방향): 화면 왼쪽 창호지 미닫이(낮고 옅은 아침빛), 장판, 무지 병풍, 오른쪽 벽 미닫이 문, 가운데 옻칠 상 — **아침상 없음**: 향로 · 은침 받침 · 빈 흰 기미 그릇 · 작은 국자 · 상 가장자리에 접힌 미색 삼베 행주. P06부터 상 가운데 **밝은 무칠 나무 쟁반 + 뚜껑 덮인 흰 사기 탕약 그릇(가는 회녹 끈 매듭)** |
| S02 | P43–P60 | LOC_L2_CORRIDOR | VIEW_R(P43) · 기둥 옆 · 빨랫줄 쪽 · 클로즈업 | 4일째 저녁 · LIGHT_L2_EVENING (P53–P60 해가 더 기운 변주구 §D-6) | 숙소 앞 회랑(EP01 · EP02와 같은 구조): 주황 노을빛이 기와에, 긴 그림자, 화면 왼쪽 1/3 기준 기둥 + 빈 당번 판(연두 끈 = **가운데 줄**), 기둥 오른쪽 처마의 **꺼진** 등롱, 오른쪽 흰 회벽 + 창호지 문, 왼쪽 안마당 쪽 기둥 줄 사이에 맨 **빨랫줄**(무지 흰 · 미색 천 6~8장) |

- 같은 scene_id 안에서는 같은 LOC 문장 + 같은 LIGHT 토큰을 쓰고 컷마다 VIEW 문장만 바꾼다. 장소 · 시간 전환은 `--- SCENE BREAK ---`에서만(1곳: P42→P43 장소 · 시간).
- **L1 토큰 덮어쓰기:** LOC_L1_TASTING 전체 토큰에는 `plain brass lidded bowls`(상 위 그릇들)와 `one thin stick of mugwort incense sending up a single thin line of smoke`가 들어 있다. EP03에서는 prompt-smith가 **상 위 구절을 §D-3 `PROP_TABLE_TONIC`으로, 향 구절을 그 컷의 향 상태(§D-3)로 바꿔 쓴다**(구조 · 방향 문장은 그대로). VIEW_L1_TABLE 원문의 `orchid-bud lid knob` · `vinegar` 구절도 이 회차에는 쓰지 않는다(**왕자 난초 그릇 · 식초 종지 없음** — 내의원 그릇이다).
- **L1 인물 배치(180도 규칙, style-bible §4-3 + EP03 추가):** 창 = 화면 왼쪽 · 왕자 = 상 건너편 방석(카메라를 향함) · 채령 = 상의 화면 오른쪽 옆에 무릎 꿇음 · 문 = 오른쪽 벽, 감찰 = 문가 안쪽, 상궁 = 문지방(작게) · **원 의관 = 탕약을 놓은 뒤 상의 화면 왼쪽(창 쪽)에 무릎 꿇고 앉는다**, 약상자는 그의 곁 바닥. → 의관 얼굴은 늘 창빛을 정면으로 받는다(밝은 빛 규칙). 약동(EXTRA_MED)은 P07부터 문 밖.
- **L2 빨랫줄 위치:** 기준 기둥의 **먼 쪽 면**에서 안마당 쪽 다음 기둥까지 머리 높이로 맨 무지 새끼줄. 천은 기준 기둥 **너머**(화면 왼쪽 깊은 쪽)에 걸려 **당번 판 · 등롱을 가리지 않는다.** 새 장소가 아니라 L2 구조물에 덧붙인 소품이다.
- **새 LOC 필요 없음.** L3 약재고 미사용. 회상 이미지 없음(art-director 추가 요청 없음).

## B. 비율 · 크기

| size | Flow aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed (TALL) | **9:16** | P01 · P06 · P24 · P26 · P32 · P43 · P53 · P58 · P60 | **9** |
| small / insert / close-up (SQ) | **1:1** | P02 · P08 · P15 · P16 · P18 · P19 · P20 · P22 · P23 · P27 · P30 · P37 · P45 · P49 · P52 · P54 · P59 | **17** |
| medium (STD) | **3:4** | 나머지 (P03–P05 · P07 · P09–P14 · P17 · P21 · P25 · P28 · P29 · P31 · P33–P36 · P38–P42 · P44 · P46–P48 · P50 · P51 · P55–P57) | **34** |

- 큰 컷 = beatsheet §6-3의 8개(P01 · P06 · P26 · P32 · P43 · P53 · P58 · P60) + 3단 분할 P24(EP01 P23 · EP02 P24 메아리라 같은 9:16).
- 짝 컷은 **원본과 같은 비율:** P03 = ep02 P05 (3:4) · P14 = ep02 P13 (3:4) · P16 = ep01 P15 (1:1) · P19 = ep01 P20 · ep02 P22 (1:1) · P20 = ep02 P23 (1:1) · P21 = ep02 P21 (3:4) · P24 = ep01 P23 · ep02 P24 (9:16) · P43 = ep01 P05 · ep02 P47 (9:16) · P47 = ep02 P50 (3:4) · P48 = ep02 P51 (3:4) · P49 · P52 = ep02 P59 (1:1) · P51 = ep02 P55 (3:4) · P54 = ep02 P54 · ep03 P20 (1:1) · P60 = ep01 P60 · ep02 P60 (9:16). 예외 하나: **P58(9:16)은 P45(1:1)의 번짐과 같은 크기 비율 · 위치 · 색**이지만 컷 크기가 다르다(손 + 천 전체 큰 컷).
- 대본의 P33 "하반신 + 얼굴 인서트"는 한 장 = 한 순간 규칙(style-bible §4-2)대로 **3:4 세로 전신**(갓부터 신까지)으로 푼다. P41은 갓 · 2풍선 때문에 3:4.
- 16:9 없음. Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데에 모은다(`art_space` 비율 위치는 그대로).

## C. 고정 앵글 · 구도 메아리 — 원본 → EP03

**만드는 순서:** (1) `refs/WON_turnaround.png`(원 의관 레퍼런스 시트, characters §11-12 "EP03 레퍼런스 시트 필수") → (2) EP01 · EP02 원본 패널(아래 원본 열) → (3) EP03 번호 순서. EP03 안의 원본(P06 · P14 · P15 · P20 · P36 · P37 · P43 · P44 · P45)은 번호 순서대로 만들면 자연히 먼저다. EP01 · EP02가 아직 `WAITING_FOR_IMAGES`면 그쪽을 먼저 끝낸다.

| ID | 원본 (attach) | EP03 | 비율 | 같아야 하는 것 | EP03에서만 바뀌는 것 |
|---|---|---|---|---|---|
| **R-WIDE 저녁** | **ep01 panel_005** (+ 같은 구도 최근판 ep02 panel_047) | panel_043 | 9:16 | VIEW_R 전부: 카메라 · 거리 · 높이, 화면 왼쪽 1/3 기둥(x 22–34%), 기둥의 빈 당번 판(y 48–60%), 기둥 오른쪽 처마 등롱(x 36–44%, y 10–22%), 오른쪽 숙소 문들, 왼쪽 안마당 · 기와, 조용한 오른쪽 위(x 48–96%, y 3–24%) | 빛 = **저녁**(LIGHT_L2_EVENING, 등롱 **꺼짐**) · 연두 끈 패 = 가운데 줄 · **빨랫줄 추가**(기둥 너머 왼쪽, 흰 · 미색 천 6~8장, 연보라 안 보임) · 인물: 채령 혼자 회랑을 걸어 들어옴(노리개 없음) |
| **문지방 상궁** | **ep02 panel_005** | panel_003 | 3:4 | 채령(흰 방석에 무릎, 옆모습, 돌아보지 않음) 등 너머 오른쪽 문지방의 민 상궁 작게 · 같은 미소 · 손수건을 쥔 두 손을 앞에 모음, 위 30% 들보 | 상 위 = 아침상 아님(향로 · 받침 · 빈 기미 그릇 · 행주) · 채령 앞섶 위 오른손 · 노리개 없음 |
| **향 점화** | **ep02 panel_013** | panel_014 | 3:4 | 향로 + 화면 오른쪽에서 들어온 손이 새 쑥 향을 꽂음, 가는 연기 한 줄 | 향로 곁에 **김이 오르는 닫힌 탕약 그릇**(연기 · 김 두 줄기) · 빈자리가 왼쪽 반(풍선 2) · 왼쪽 가장자리 아래 의관 소매 |
| **은침 은빛 ECU** | **ep01 panel_015** (+ 모양 ep02 panel_004) | panel_016 | 1:1 | 같은 은침(가늘고 둥근 머리), **끝까지 은빛**, 같은 대사 "은빛이다." | 아침빛 · 뒤에 흐린 감찰 · 빈자리 = 위 왼쪽 모서리 |
| **낮은 측면 코끝** | **ep02 panel_022** (+ 원본 ep01 panel_020) | panel_019 | 1:1 | 상 높이 낮은 측면 close-up: 왼쪽 가운데 채령 옆얼굴(코끝이 그릇 가까이), 아래 오른쪽 그릇, 위 38% 흐린 병풍 | 그릇 = **흰 기미 그릇의 갈색 탕약**(놋 그릇 · 노른자 죽 아님) · 은침 없음 · 표정 ③ 그대로. 세 번째 반복 |
| **눈 ECU (낮)** | **ep02 panel_023** | panel_020 | 1:1 | 눈 하나 + 눈썹 ECU, 위 40% 흐린 머리칼 그늘 띠 | 표정 ④(깨달음) · 회차 안 원본 → P54 |
| **어깨 너머 문지방** | **ep02 panel_021** | panel_021 | 3:4 | 앞 왼쪽 채령 어깨 · 뒤통수(초점 밖), 중경 오른쪽 문지방의 민 상궁(초점), 위 왼쪽 들보 빈자리 | **상궁 두 손이 소매 밖**, 앞에 모아 깨끗한 손수건을 쥠(ep02 P21의 "소매 속 손"을 따라 그리면 REGEN) · 아래 오른쪽 구석에 김이 가늘어진 탕약 그릇 |
| **3단 분할** | **ep02 panel_024** (+ 원본 ep01 panel_023) | panel_024 | 9:16 | 같은 폭 세 칸 + 가는 검은 가로 띠 두 줄, 칸 높이 28/40/28%, 말풍선 = 가운데 칸 위쪽 | 위 칸 = **거의 다 탄 향 꽁초** · 가운데 칸 = **한 가닥 남은 탕약 김** · 아래 칸 = **호랑이를 만지작거리며 그릇을 흘끔 보는 왕자** |
| **어깨 너머 상궁 (저녁)** | **ep02 panel_050** | panel_047 | 3:4 | 앞 아래 오른쪽 돌아선 채령 어깨 · 땋은 머리, 중경 왼쪽 처마 아래로 걸어 나오는 상궁, 같은 미소, RIGHT 손 깨끗한 손수건, 위 오른쪽 어두운 기둥 · 처마 그늘 | 빛 = 저녁 주황(밤 아님), 등롱 **꺼짐** · 뒤 흐린 빨랫줄(천 구별 안 됨) |
| **채령 정면 대립** | **ep02 panel_051** | panel_048 | 3:4 | 상궁 쪽 낮은 앵글 close-up, 처음 정면으로 따짐, 두 주먹(가슴 아래), 앞섶 살짝 불룩 | 저녁빛 · 위 38% = 주황 하늘 · 처마 밑 |
| **요구 사다리 CU** | **ep02 panel_059** (+ ep01 panel_059) | panel_049 · panel_052 | 1:1 | 민 상궁 정면 CU(x 6–58%) 같은 미소, 오른쪽 세로 띠 빈자리 | 빛 = 저녁 해(얼굴 화면 왼쪽 반 따뜻) · P49 풍선 1 · P52 풍선 2 |
| **반쪽 빛 얼굴** | **ep02 panel_055** (빛 · 프레이밍) | panel_051 | 3:4 | 얼굴 반만 따뜻, 반은 그늘, 같은 미소, 오른쪽 위 그늘 빈자리 | 등롱 → **저녁 해**(§D-6 SUNSET_HALF) · 고개를 살짝 기울임 |
| **눈 ECU (저녁)** | **ep03 panel_020** (+ ep02 panel_054) | panel_054 | 1:1 | 같은 눈 ECU 프레이밍, 위 40% 띠 | 저녁빛 · 동공에 노을 주황 점 하나(등롱 아님) |
| **마지막 큰 컷** | **ep02 panel_060** (+ ep01 panel_060) | panel_060 | 9:16 | 채령 얼굴 세로 큰 컷, 대답 없음, 앞섶 위 손(숨긴 꾸러미 위), 노리개 없음, 아래 12% 어두운 캡션 띠 | 손 = **주먹이 아니라 앞섶 위에서 멈춘 오른손**(펼친 손) · 빛 = 붉은 저녁 · 입궁 패 없음 |
| **회차 안: 탕약 그릇** | ep03 panel_006 → | P07 · P09 · P14 · P15 · P22 · P28 · P32 | — | 같은 흰 사기 탕약 그릇 · 무지 뚜껑 · 가는 회녹 끈 매듭 · 밝은 무칠 나무 쟁반 | 김의 굵기(§E), 뚜껑 P15부터 열림 · 끈 풀림 |
| **회차 안: 행주** | ep03 panel_036 → **ep03 panel_037**(결 원본) | P38 · P44 · P45 · P58 | — | 같은 크기 · 같은 거친 결 · 같은 미색 삼베 · 같은 무지 가장자리 | L1 = 갈색 → 저녁 = 갈색 빠지고 한가운데 연보라 번짐(P44 · P45 · P58만) |
| **회차 안: 번짐** | **ep03 panel_045** | panel_044(먼저, 작게) · panel_058 | — | 번짐의 모양 · 크기 비율(천 폭의 약 1/4) · 위치(천 정가운데) · 색 | P58은 감찰의 손이 천 전체를 펼침, 붉은 저녁빛 |
| **회차 안: 빨랫줄** | ep03 panel_043 → **ep03 panel_044** | panel_056 | 3:4 | P44와 같은 어깨 너머 프레이밍, 같은 천들의 순서 | 그 천이 걸려 있던 자리가 **비고 줄만 처짐** |

- 반복 · 메아리 컷은 원본과 **같은 쪽을 비운다**(P43은 무대사지만 원본 구도를 지키기 위해 오른쪽 위를 그대로 조용하게 둔다).
- 첨부한 EP01 그림과 레퍼런스(turnaround)에는 채령의 노리개가 허리에 있다. **EP03 어느 컷이든 허리에 노리개를 따라 그리면 REGEN**(§D-1).

## D. EP03 상태 토큰 (이 회차 전용 · 가변 · 시리즈 문서 미수정)

> 불변 외형 토큰(FULL · SHORT · LOC · LIGHT · STYLE_GLOBAL)은 한 글자도 바꾸지 않는다. 아래는 **패널 묘사에 덧붙이는 가변 상태**다. 영문은 prompt-smith가 그대로 쓴다.

### D-1. 채령 노리개 · 흰 싸개 [연속성 핵심] (character-sheets §11-3 · §11-6)

| 토큰 | 영문 | 패널 |
|---|---|---|
| **`CHAERYEONG_NORIGAE_HIDDEN`** (ep02 §D-1 원문 + EP03 위치) | `no ornament at her hip: her jade-teal butterfly ornament is wrapped in a small plain white cloth and hidden inside the front of her spring-green jacket, showing only as a slight small bulge under the jacket front; nothing hangs at her RIGHT hip` + EP03 덧붙임 `the small bulge is on her LEFT chest` | **P01–P60 채령이 보이는 모든 컷** (뒷모습 · 손 컷 포함) |
| `PROP_NORIGAE_WRAP` (character-sheets §11-3 원문) | `a small palm-sized bundle wrapped in smooth, fine, pure white cotton, tucked inside the front fold of her spring-green jacket on her LEFT chest; only a tiny pure white corner shows between the jacket's front edges` | **P02**(모서리 또렷이) · P01 · P60(오른손 아래, 모서리 안 보여도 됨) |
| `CHAERYEONG_HAND_ON_BUNDLE` (ep02 토큰, EP03 좌우 확정) | `her RIGHT hand resting flat on the front of her jacket over her LEFT chest, over the hidden bundle` | P01 · P02 · P60 |

- **노리개 자리 = 저고리 앞섶 안 LEFT 가슴, 그 위에 RIGHT 손**(character-sheets §11-6). 정면 그림에서는 꾸러미 = 화면 오른쪽 가슴 쪽, 그 위에 얹은 손 = 그녀의 RIGHT 손(가슴을 가로질러 옴). **허리에는 아무것도 없다.**
- **모든 채령 컷에서 prompt-smith는 FULL 토큰의 `a jade-teal carved butterfly ornament (norigae) with a red knot and a short red tassel always hanging at her RIGHT hip` 구절, SHORT 토큰의 `a jade-teal butterfly ornament with a red tassel at her RIGHT hip` 구절을 빼고 그 자리에 `CHAERYEONG_NORIGAE_HIDDEN` 문장을 넣는다**(ep02 §D-1과 같은 방식). 첨부 레퍼런스에는 노리개가 있으므로 문장으로 반드시 덮는다. 다른 외형은 그대로.
- 흰 싸개는 **순백 유지**(보라 기운 금지, EP30 회수 전까지). P02 말고는 보이지 않는다(앞섶 LEFT 가슴이 살짝 불룩할 뿐). 청록 옥 · 붉은 술은 어느 컷에도 보이지 않는다.

### D-2. 행주 · 빨래 (천 동선 · 4상태) [단서 핵심] (character-sheets §11-3 원문)

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PROP_WIPECLOTH` (L1 · 기본) | `a large rectangular rough-woven unbleached off-white hemp wiping cloth, about the length of a forearm, coarse visible weave, no pattern, no embroidery, no writing` | 상 가장자리에 접힘(`folded at the near edge of the low table`): P01 · P03 · P05 · P07 · P17 · P25 (작게) |
| ① **갈색 (시식방)** | `PROP_WIPECLOTH` + 닦는 중 `in her hands, pressed into the spreading dark brown puddle on the floor` (P36) / `soaked with dark brown decoction stains, brown only` (P37 · P38 · P39) | P36 · P37 · P38 · P39(바구니 안). **연보라 0** |
| ② **연보라 (빨랫줄)** ● `PROP_WIPECLOTH_LILAC` | `the same large rough-woven unbleached off-white hemp cloth, washed in lye: the brown stains are gone, and in its center remains one soft, faint whitish-lilac blot, soft-edged like a washed-out watermark` | **P44 · P45** |
| ③ **접힘 (감찰 손, 색 없음)** `PROP_WIPECLOTH_FOLDED` | `the same rough off-white hemp cloth folded in his large hand with the plain folded side outward, no color visible on it` | **P57 — 연보라 보이면 REGEN** |
| ④ **연보라 (감찰 손)** ● `PROP_WIPECLOTH_LILAC` | ②와 같은 문장 + `held open in his hands` | **P58** (P45 PNG 첨부 → 번짐 크기 · 위치 · 색 일치) |
| `PROP_LAUNDRY_LINE` | `a plain twisted rope tied between two of the courtyard-side pillars, with six to eight plain white and off-white cloths draped over it, no clothespins, no pattern, no writing` + EP03 위치 `hanging beyond the nearest pillar so the duty board and the lantern stay clear` | P43 · P44 · P47(흐림) · P53(멀리 흐림) · P56 |
| `PROP_LAUNDRY_GAP` | `one empty gap on the line, the rope sagging where a cloth used to hang` | P56 |
| `PROP_BASKET` | `a plain bamboo basket holding a few folded plain cloths, no pattern, no writing` | P38 · P39 |

- **`lilac:` 줄 = ②④ 세 패널(P44 · P45 · P58)에만.** 문장 = 예약색 문장 `the only pale lilac in the image is that one blot in the center of one hemp cloth` + 저녁빛 덧붙임 `even in the orange evening light the blot still reads as a cool, very pale lilac, clearly different from the warm cream of the cloth, not pink, not gray`(character-sheets §11-5). 다른 패널 Avoid 줄에 색 단어를 넣지 않는다(style-bible §2-4).
- 흰 싸개(작고 순백 · 매끈) ≠ 행주(크고 미색 · 거침) ≠ 민 상궁 손수건(작고 연청). 셋이 닮으면 REGEN.

### D-3. 상 · 탕약 세트 · 향 · 은침

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PROP_TABLE_TONIC` (LOC 상 구절 대체) | `the low dark red-brown lacquered table holds no meal at all: only the small brass incense burner on its low stand at the near corner, a little wooden stand of thin silver needles, a small empty plain white porcelain taster's dish with a tiny brass ladle, and a folded coarse off-white hemp wiping cloth at its near edge` | P01–P05 (P07부터 + 탕약 세트) |
| `PROP_TONIC_SET` (닫힘, character-sheets §11-3 원문) | `a small plain unlacquered pale wooden tray carrying one plain white porcelain lidded tonic bowl; the plain lid is tied down with a thin plain dull gray-green cotton cord in a simple knot on top; no seal, no paper tag, no pattern, no writing; a little steam escaping from under the lid` | P06–P14 |
| `PROP_TONIC_OPEN` (원문) | `the white porcelain tonic bowl open on its small pale wooden tray, the lid set beside it, the thin gray-green cord lying untied in loose loops next to the lid; dark brown herbal decoction inside, no purple tint, no sheen` + 김 상태 | P15–P31 (P28–P31은 그릇만 왕자 손에, 쟁반 · 뚜껑 · 풀린 끈은 상 위) |
| `PROP_DECOCTION` (원문) | `dark brown herbal decoction, no purple tint, no sheen` | P15–P33. 쏟아짐 · 웅덩이도 **갈색뿐** |
| **세트 연속성 [고정]** | 그릇 + 쟁반은 **한 세트로 움직인다**: P06 약동이 받친 쟁반째 의관이 두 손으로 받음 → P07 쟁반째 상 가운데 → P15 상 위에서 뚜껑 열림 → P22 쟁반 위(인서트) → P28 왕자가 **그릇만** 듦(쟁반은 상 위) → P32 엎음 → P33–P41 빈 그릇은 바닥/상, 빈 쟁반은 상 위 → **P42 문밖 약동이 빈 쟁반을 받음** | P06–P42 |
| `STEAM_THICK` / `STEAM_BURST` / `STEAM_THIN` / `STEAM_ONE` / `STEAM_FAINT` | `thick steam rising` / `a big puff of steam bursting up as the lid comes off` / `the steam has thinned to a few faint wisps` / `only a single thin thread of steam remains` / `barely any steam left` | P06–P14 / P15 / P21–P23 / P24–P25 / P28 |
| `PROP_SPILL` | `the bowl tipping, dark brown decoction pouring out in a long arc through the air` | P32 |
| `PROP_PUDDLE` | `a spreading dark brown puddle of decoction on the oiled yellow paper floor` | P33–P35 (P36 닦는 중 → P37 이후 `a faint wiped brown smear on the floor`) |
| `PROP_CENSER_EMPTY` (ep02 원문) | `the small plain brass incense burner holds only smooth soft gray ash, no incense stick yet, no smoke` | P01–P13 |
| 향 | `PROP_INCENSE_NEW`(P14 점화 → P20) → `PROP_INCENSE_HALF`(P21) → `PROP_INCENSE_STUB`(P24 위 칸) → P25 `only a tiny stub left, the last bit of gray ash dropping from its tip, the smoke ending` → `PROP_INCENSE_OUT`(P26 이후) | — |
| `PROP_NEEDLE` (시리즈 원문) | `a thin silver needle longer than two finger joints, with a small round head, bright cool silver, the coldest sparkle in the image` + **EP03 덧붙임** `bright silver all the way to the very tip, no dulling, no gray` | P15 · P16 (이후 받침 위) |
| 기미 | `PROP_TASTER_DISH` + `PROP_SMALL_LADLE`(그릇 가운데만) + `a little dark brown decoction in the white dish` | P17 · P19 |

### D-4. 원 의관 소품 · 내의원 약동 (character-sheets §11-3 · §11-4 원문)

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PROP_MEDBOX` | `a closed dark chestnut-brown wooden medicine box with a plain cotton strap handle, no metal fittings, lid shut` | **LEFT 손**에 듦(P42) 또는 **장판 바닥, 그의 LEFT 곁**에 내려 둠(P06 · P07 · P09 · P10 보이면 · P35). **옻칠 상 위에 절대 올리지 않는다.** 열린 모습 · 내부 · 클로즈업 금지 |
| `EXTRA_MED` (= EXTRA-MED, **이름 없는 내의원 약동**) | `a junior palace medical attendant in the same dull muted gray-green (sage-gray) plain robe, simple black cloth cap (no hat wings), seen from behind or far away, face not detailed, carrying a small tray; no text` + 패널별 덧붙임(character-sheets §11-4): P06 `standing just behind the physician in the doorway, holding out the small wooden tray with both hands, seen from behind or from the side, head bowed, face not visible` · P07 `stepping back out through the doorway to wait outside, seen from behind, small` · P42 `outside the doorway receiving an empty small wooden tray, small and out of focus, face not visible` | P06 · P07 · P42 |
| 나인 `MAID_EXTRA` | character-sheets §6 나인 원문 + `one maid kneeling with her head bowed deep, face not visible, holding out a plain bamboo basket` | P38 · P39(뒷모습, 물러남) |

- 엑스트라 색 규칙의 **내의원 예외**(character-sheets §11-4): 약동만 회녹. 구별 = 날개 없는 검은 천 모자 · 수염 없음 · 약상자 없음 · 늘 의관 뒤/문밖. 나인은 회청 · 회색.

### D-5. 인물 상태 (EP03)

**원 의관 (WON) — character-sheets §11 기준:** FULL = §11-1 FULL(characters §11-9 원문) · SHORT = §11-1 SHORT · 표정 = §11-2 ①–⑥ · 상태 = §11-2 상태 토큰 원문. 이 샷리스트는 아래처럼 배정한다.

| 패널 | 토큰 | 표정 | 상태 (character-sheets §11-2 원문) |
|---|---|---|---|
| P06 | FULL | ① | 탕약을 넘겨받음 `stepping in through the sliding door and taking the small wooden tray with the lidded tonic bowl into his own two hands from a junior attendant behind him; his closed medicine box has been set down on the floor at his LEFT side` + P06 역광 문장 `his face and robe lit softly from the rice-paper doors on the left; the doorway behind him is not glowing` |
| P07 | FULL | ① | 탕약을 상에 내려놓음 `carefully setting the small wooden tray with the lidded tonic bowl down on the low lacquered table with both hands` (약상자는 바닥, 그의 LEFT 곁) |
| P09 | FULL | ② | 무릎 굽힘 `kneeling down to the little prince's eye level, his hands on his own knees, the wide gray-green sleeves resting on the floor` |
| P10 | FULL | ③ | 무릎 굽힘(바스트로 잘림) |
| P12 | 상태만 | ⑥ | 뒷모습 `seen from behind over his shoulder, out of focus: the back of his black samo hat with its two short rounded wings and his gray-green shoulder; his face not visible` (§11-2 ⑥ 문장과 함께) |
| P14 · P25 | 상태만 | (⑥) | 가장자리 · 목소리 `only the edge of a gray-green sleeve and the black samo wing at the side of the frame` |
| P26 | 상태만 | — | `the hem of his gray-green robe and his black shoes as he kneels` (발치) |
| P28 | SHORT | ④ | 가장자리(얼굴 작게 보임) |
| P35 | FULL | ⑤ | 무릎 굽힘 |
| P42 | FULL | (옆선 ①) | 뒷모습 퇴장 `seen from behind at the doorway, bowing slightly to the prince, the closed chestnut-brown medicine box in his LEFT hand (on the left side of the image when seen from behind), the two short rounded wings of his black samo hat` |

- `WON_LIGHT` (그의 얼굴이 보이는 모든 컷 P06 · P07 · P09 · P10 · P28 · P35 · P42): `his face fully lit by the soft morning light from the rice-paper doors on the left, seen at eye level; bright, friendly and trustworthy`.
- **원 의관 연출 금지 [고정, character-sheets §11-2 · characters §11-4 · beatsheet §0-4]:** 로우 앵글 · 얼굴 반 그늘 · 역광 실루엣 · 의심 리액션 · 의미심장한 시선 · 클로즈업 정지 · 정면 극단 클로즈업 · 그림자 연출 · 누군가 그의 등을 오래 보는 구도 **0**. 문 쪽 빛이 그를 실루엣으로 만들면 REGEN. "다른 손" 생각(P21–P23)은 그릇 · 쟁반 위에서만, 그의 얼굴과 겹치지 않는다. P13에 그의 리액션 없음. 소매로 입가를 누르는 버릇 · 약상자 여는 동작은 EP03에 없다.

**그 밖의 인물:**

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PRINCE_SHUFFLE` | `shuffling in with dragging feet, hugging the wooden tiger toy to his chest, pouting` | P05 |
| `PRINCE_TIGER_SHIELD` | `hiding half of his face behind the wooden tiger toy held up in both hands` | P08 · P11(눈만 위로) |
| `PRINCE_HOLD_TONIC` | `holding the white tonic bowl (without its tray) up in both small hands close to his lips` | P28 · P30 |
| `PRINCE_LUNGE` | `lunging forward with a playful roar, the wooden tiger toy thrust out in one hand while the tonic bowl in his other hand tips over` | P32 |
| `PRINCE_CULPRIT` | `holding the wooden tiger toy out in front of him with both hands like the guilty culprit` | P34 |
| `MIN_HANDS_FOLDED` | `both hands folded neatly in front of her, OUTSIDE her sleeves, holding the folded clean handkerchief` | P03 · P07 · P21 · P42 · P47(RIGHT 손) · P50 · P53 |
| `MIN_EYES_CLOSED` | `her eyes gently closed for a single beat, the same calm, kind closed-lip smile unchanged, perfectly still` | P27 |
| `MIN_PAT_PASS` | `walking past the girl, her RIGHT hand lightly patting the girl's shoulder; the folded clean handkerchief tucked into her LEFT sleeve cuff` | P55 |
| `BAEK_STEP_BACK` | `drawing one boot stiffly back from the spreading puddle, face completely deadpan` | P33 |
| `BAEK_FAR_SHADOW` | `standing still far down the veranda in the shadow of a pillar, the low evening light ending at his feet, the folded cloth in his RIGHT hand at his side` | P57 |
| `BAEK_HANDS_CLOTH` | `his large calloused hands in narrow black sleeves holding the cloth up and spreading it open` | P58 |
| `BAEK_PALM_OUT` | `taking one step closer and holding out his open LEFT palm toward her, waiting` | P59 |
| 땀 | `one small realistic bead of cold sweat at her temple (painted, not a cartoon sweat-drop symbol)` | P23 (style-bible §1: 만화 기호 금지) |

### D-6. 빛 변주 (새 토큰 아님)

- **S01 전체:** `LIGHT_L1_MORNING` 원문(4일째 아침 = EP02 S01과 같은 빛).
- **S02 P43–P52:** `LIGHT_L2_EVENING` 원문 + `the paper lantern under the eaves is unlit, pale and plain`.
- **`SUNSET_LOW` (P53–P60, 새 토큰 아님 — ep02 §D-6처럼 변주구):** `LIGHT_L2_EVENING` 원문 뒤에 `— the sun now lower, the orange deepening toward warm red-orange, very long shadows across the veranda; still no pink or purple in the sky or shadows` 를 덧붙인다(character-sheets §11-5 문장 그대로).
- **`SUNSET_HALF` (P51 · P52 · P53 민 상궁):** `the low sunset light warms only one half of her face, the other half in cool blue-gray shade (not purple)` — LIGHT_LANTERN_FACE의 저녁판(같은 원리: 표정은 그대로, 빛만).

## E. 연속성 타임라인 (EP03, 그림에서 바뀌는 것만)

| 대상 | P01–P05 | P06–P13 | P14–P20 | P21–P27 | P28–P35 | P36–P42 | P43–P60 (저녁 L2) |
|---|---|---|---|---|---|---|---|
| 상 | PROP_TABLE_TONIC(빈 기미 그릇 · 행주) | P06 쟁반 + 닫힌 탕약, P07 상 가운데 | P15 뚜껑 열림 · 끈 풀림 · 은침 | 열린 그릇 · 뚜껑 · 풀린 끈(P22 인서트) | P28 왕자 손 → P32 엎어짐 → 웅덩이 | 빈 그릇 · 바닥 얼룩 | — |
| 김 | — | 짙음 | P15 확 → 짙음 | P21 가늘어짐 → P24 한 가닥 | P28 거의 없음 | 없음 | — |
| 향 | 재만 | 재만 | P14 새 향 점화 | P21 절반 → P24 꽁초 → P25 마지막 재 떨어짐 | 다 탐 | 다 탐 | — |
| 은침 | 받침 | 받침 | P15 탕약 가운데 → P16 들어 올림(은빛) → 받침 | 받침(은빛) | 받침 | 받침 | — |
| 행주 | 상 가장자리에 접힘 | 접힘 | 접힘 | 접힘 | 접힘 | P36 닦음 → P37 갈색 → P38 바구니 위 → P39 바구니 안 → 퇴장 | P43 빨랫줄(구별 안 됨) → **P44 · P45 연보라** → P46 화면 밖 → P47–P55 흐림 → P56 사라짐 → P57 감찰 손(접힘) → **P58 연보라** |
| 채령 노리개 | **앞섶 안 (HIDDEN), 전 패널** · P01 · P02 오른손 앞섶 위 · P02만 흰 천 모서리 | ← | ← | ← | ← | ← | ← · P60 오른손 앞섶 위 |
| 민 상궁 | P03 문지방, 두 손 앞(CLEAN) | P07 문지방에서 맞음(CLEAN) | 화면 밖 | P21 문지방, 손 **소매 밖**(CLEAN) · P27 눈 감음(손수건 안 보임) | 화면 밖 | P42 문가, 채령 쪽을 봄(CLEAN) | P46 화면 밖 → P47 등롱 아래 RIGHT 손 CLEAN → P55 손수건 LEFT 소맷부리, RIGHT 손으로 어깨 토닥 → 회랑 끝으로 사라짐 |
| 백 감찰 | P04 문가 제자리 | 문가 | P16 흐림 | P26 발치(목화) | P32 가장자리 발 · P33 한 발 뺌 | P40 · P41 → 화면 밖 | P57 회랑 끝 기둥 그림자 · 천 RIGHT 손 → P58 펼침 → P59 LEFT 손바닥 |
| 원 의관 | — | P06 등장 · 약상자 발치 → P07 탕약을 상에 → 상 왼쪽(창 쪽)에 앉음 · P09 · P10 무릎 | P14 가장자리 소매 | P25 가장자리 · P26 발치(회녹 자락 · 검은 신) | P28 가장자리 미소 · P35 왕자 손을 살핌 | P42 약상자 LEFT 손, 퇴장 | — |
| 약동 | — | P06 의관 뒤 → P07 문 밖 | — | — | — | P42 문 밖, 빈 쟁반 | — |
| 왕자 | P05 발 끌며 등장, 방석 | 방석 · P08 호랑이 방패 · P11 눈만 | P17 손가락질 | P24 아래 칸 | P28 그릇 듦 → P32 덤벼듦 → P34 호랑이 내밂 | P42 호랑이 흔듦 | — |
| 회랑 소품 | — | — | — | — | — | — | 등롱 **꺼짐**(전 패널) · 당번 판 BLANK, 연두 끈 **가운데 줄** · 빨랫줄 |

## F. 리듬 · 여백 (letterer `gap_after` 제안, 기본 40)

| 위치 | 제안 | 이유 |
|---|---|---|
| P05 뒤 | 120 | 콜드 오픈 끝 → 의관 등장 |
| P13 뒤 | 120 | W5① 착지 → 시식 절차 시작 |
| P19 → P23 | 0–20 | 저림 → 냄새 → 깨달음 → 다른 손(미니 반전 연쇄) |
| P25 → P26 → P27 | 20 | 판결 질문 → "깨끗합니다" → 눈 감음 |
| P27 뒤 | **240** | W1 무대사 착지(beatsheet 여백↓) |
| P28 → P32 | 20 | 마지막 압박 → 제3의 수(빠르게) |
| P35 뒤 | 120 | 유머 밸브 끝 → 천 시퀀스 |
| P42 뒤 | **400 (가장 긺)** | 아침 → 저녁(beatsheet §3) |
| P45 → P52 | 20 | 연보라 → 상궁 → 주력 반전 연쇄 |
| P53 뒤 | **240** | 반전 정점 착지 |
| P56 뒤 | **240** | 빈 자리 → 감찰 |
| P57 → P59 | 20 | 걸음 3칸 계단 |
| P60 뒤 | 320 | 회차 끝, 캡션 뒤 |

---

## G. 패널

--- SCENE BREAK --- S01 · LOC_L1_TASTING · 4일째 아침 · LIGHT_L1_MORNING

### panel_001
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (넓게, 빈 상)
- beat: ① 콜드 오픈 — 무엇이 들었든 ⟨회수: EP02 P59 E4 메아리⟩ · 긴장 7 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 무릎 꿇은 사람의 눈높이(낮게), wide, 상 건너편을 비스듬히 — 세로로 긴 와이드
- composition: 위 26%(y 0–26%)는 화면 왼쪽의 빛나는 창호지 윗부분 · 어두운 들보 · 무지 병풍 윗면. 가운데(x 18–66%, y 50–70%) 아침상 없는 옻칠 상: 앞 모서리 향 없는 놋 향로(x 20–34%, y 62–74%) · 은침 받침 · 빈 흰 기미 그릇 · 상 가장자리에 접힌 미색 삼베 행주(작게). 먼 쪽 왕자 방석(빈). 상의 화면 오른쪽 옆(x 58–86%, 머리 y 38–48%, 무릎 y 78%) 채령이 이미 무릎 꿇고 앉아 빈 상을 봄 — **RIGHT 손이 LEFT 가슴 앞섶 위에 납작 얹힘**(y 54–62%), 허리에 노리개 없음
- characters: CHAERYEONG(FULL, 무릎 꿇음 상태 토큰 + **NORIGAE_HIDDEN** + HAND_ON_BUNDLE, 표정 ⑥ `resolute, brows level, lips pressed firmly together, a steady direct gaze` + 변주 `a stiff, set face`)
- emotion: 각오 — 아직 오지 않은 탕약을 기다림
- props: PROP_TABLE_TONIC(PROP_WIPECLOTH(상 가장자리, 접힘) 포함) · PROP_CENSER_EMPTY · PROP_NEEDLE_STAND
- dialogue_ref (1): ① 채령 thought "무엇이 들었든…"
- art_space: **위 26%(x 4–96%, y 2–26%)** — 창호지 윗부분 · 들보 · 무지 병풍 윗면
- attach: refs/LOC_L1_TASTING_plate.png, refs/CHAERYEONG_turnaround.png, ep02 panel_001
- fx/note: 플레이트는 한낮 · 수라상 → **구조만**(빛 = 아침, 상 = 빈 상). 첨부 turnaround의 노리개를 따라 그리면 REGEN. 상 위 그릇 · 국 · 왕자 난초 그릇 없음.

### panel_002
- scene_id: S01 / location: LOC_L1_TASTING (가슴 높이 클로즈업, 배경 흐림)
- beat: ① ⟨복선 W2 위치 — 앞섶 안⟩ ⟨복선: 거짓말 예고 → P58⟩ · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (손의 밝은 쪽 = 화면 왼쪽)
- camera: 가슴 높이 close-up, 약간 옆(3/4) — 얼굴은 프레임 위 오른쪽 밖
- composition: 아래 60%(y 40–98%): 연두 저고리 앞섶 · 흰 동정 끝 · 남색 고름. 그녀의 **RIGHT 손이 가슴을 가로질러 LEFT 가슴 위에** 얹혀(정면 3/4이라 화면 오른쪽 가슴 쪽, 손 x 40–78%, y 44–70%) 손가락에 힘이 들어감. 손 아래 앞섶 여밈 사이(x 54–64%, y 66–74%)로 **순백 매끈한 천 모서리가 아주 작게**(PROP_NORIGAE_WRAP). LEFT 가슴이 살짝 불룩. 아래 가장자리(y 86–98%) 치마 허리 — **노리개 · 붉은 술 없음**. 위 38%(y 0–38%)는 어깨 너머 초점 밖 창호지 빛 · 무지 병풍
- characters: CHAERYEONG(손 클로즈업 상태 토큰 + NORIGAE_HIDDEN + HAND_ON_BUNDLE + **PROP_NORIGAE_WRAP 모서리**)
- emotion: 결심의 손
- props: PROP_NORIGAE_WRAP(모서리만)
- dialogue_ref (2): ① 채령 thought "…깨끗하다고만." / ② 채령 thought "언니. 오늘은 거짓말을 해야 해."
- art_space: **위 38%(x 4–96%, y 2–38%)** — 초점 밖 창호지 빛 · 병풍(생각 풍선 둘, 위아래). 손 · 천 모서리는 y 44% 아래
- attach: refs/CHAERYEONG_turnaround.png, ep02 panel_049, ep02 panel_048
- fx/note: 흰 천 = 작고 순백 · 매끈 · 고운 결(P36의 미색 거친 행주와 반대). 이 회차에서 흰 천이 보이는 **유일한** 컷. 보라 기운 금지.

### panel_003
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (채령 등 너머 문지방)
- beat: ① 다정한 목줄 · 의관 예고 · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, 문 쪽을 보는 medium wide — 채령 너머 문지방 (ep02 P05 구도)
- composition: [ep02 P05와 같은 배치] 위 30%는 어두운 들보 · 문틀 윗부분 · 병풍 윗면. 중경 가운데~왼쪽(x 18–58%, 머리 y 40–52%) 채령이 무릎 꿇은 채 화면 왼쪽(빈 상)을 향함(옆모습, 돌아보지 않음), 앞섶 위 손. 화면 오른쪽(x 64–90%) 열린 미닫이 문지방에 **민 상궁 작게, 얼굴이 읽히게**(머리 y 32–40%, 발 y 70%), 같은 온화한 미소, 깨끗한 손수건을 쥔 두 손을 앞에 모음. 화면 왼쪽 가장자리 빈 상 모서리 · 향로 · 접힌 행주
- characters: MIN(SHORT, 문지방에 작게 + MIN_HANDS_FOLDED, 표정 ②) · CHAERYEONG(FULL, 무릎 꿇음 + NORIGAE_HIDDEN, 표정 ⑦ `eyes lowered to one side, a quiet, guarded face`)
- emotion: 다정함이 목을 조인다
- props: PROP_HANKY_CLEAN · PROP_TABLE_TONIC · PROP_CENSER_EMPTY
- dialogue_ref (2): ① 민 상궁 dialogue "얼굴이 굳었구나, 얘야." (위 오른쪽, 꼬리 ↘ 문지방 상궁) / ② 민 상궁 dialogue "오늘은 내의원에서 손님이 오신다." (위 조금 아래, 꼬리 ↘ 상궁)
- art_space: **위 30%(x 4–96%, y 2–30%)** — 들보 · 문틀 윗부분 · 병풍 윗면. 상궁 머리는 y 32% 아래
- repeat: 문지방 상궁 ← **ep02 panel_005**. 바뀌는 것: 상 위(아침상 없음) · 채령 앞섶 위 손 · 노리개 없음 · 풍선 둘 다 상궁
- attach: ep02 panel_005, refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 당의 = deep wine-red plum, NOT purple. 민 상궁 shout 금지.

### panel_004
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR 방향 (옆얼굴 클로즈업 + 후경 문가)
- beat: ① 복종의 모양 ⟨회수: EP02 P05 같은 대답⟩ · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (감찰은 문 밖 빛을 등져 실루엣에 가깝게)
- camera: 눈높이, 전경 옆얼굴 close + 후경 문가(약간 올려다봄)
- composition: 전경 왼쪽(x 2–52%, y 30–100%) 채령의 옆얼굴(화면 오른쪽을 향함), 고개만 숙임, 시선 아래. 후경 오른쪽(x 58–90%, 갓 꼭대기 y 26%, 허리 y 84%) 백 감찰이 미닫이 문가에 들어와 제자리에 섬 — 갓 · 넓은 어깨, 환도 LEFT 허리(정면이라 화면 오른쪽), 뒤 문빛에 윤곽. 위 왼쪽(x 4–56%, y 2–28%)은 초점 밖 어두운 들보 · 병풍
- characters: CHAERYEONG(FULL 얼굴, NORIGAE_HIDDEN, 표정 ⑦ + 변주 `head bowed in quiet submission`) · BAEK(SHORT, 문가에 섬 상태 토큰, 표정 ①)
- emotion: 순종 = 감춤
- props: PROP_SWORD
- dialogue_ref (1): ① 채령 dialogue "…예, 마마님." (꼬리 ↓ 채령)
- art_space: **위 왼쪽(x 4–56%, y 2–28%)** — 채령 머리 위의 흐린 들보 · 병풍. 감찰 갓은 그 밖 오른쪽
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png, refs/BAEK_turnaround.png
- fx/note: 감찰 역광은 허용(금지는 원 의관만). 흉터 = RIGHT 턱선 아래.

### panel_005
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ① 쓴 약 싫음 ⟨복선 → 호랑이 놀이⟩ · 긴장 6 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 medium, 상 너머
- composition: 상 건너편 먼 쪽(x 26–62%, 머리 y 36–50%) 왕자가 나무 호랑이를 가슴에 끌어안고 발을 끌며 방석에 막 앉음, 입을 삐죽. 앞 가운데 상(y 66–84%) — 향로 · 빈 기미 그릇 · 접힌 행주. 화면 오른쪽 가장자리(x 78–100%, y 42–94%) 무릎 꿇은 채령(SHORT, 옆모습). 위 32%는 창호지 윗부분(왼쪽) · 무지 병풍
- characters: PRINCE(FULL, PRINCE_SHUFFLE, 표정 ① 변주 `pouting, lower lip pushed out`) · CHAERYEONG(SHORT, 무릎 꿇음 + NORIGAE_HIDDEN)
- emotion: 아이다운 투정(EP02 P06의 신난 걸음과 반대)
- props: PROP_TIGER · PROP_TABLE_TONIC
- dialogue_ref (1): ① 왕자 dialogue "단이… 오늘은 쓴 거 온대." (꼬리 ↓ 왕자)
- art_space: **위 32%(x 4–96%, y 2–32%)** — 창호지 윗부분 · 무지 병풍
- attach: refs/PRINCE_turnaround.png, refs/PRINCE_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 만화 기호 없이 몸짓으로만. 쌍상투, 왕관 없음.

### panel_006
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (문 쪽, 밝은 실내)
- beat: ② 원 의관 첫 등장 · 한 상 공개(보약) · 긴장 5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + **WON_LIGHT**(창빛이 그의 얼굴 정면, 문 쪽 빛은 약하게 — 실루엣 금지)
- camera: **눈높이** medium full shot(선 사람 눈높이), 정면에서 약간 3/4 — 역광 · 로우 금지
- composition: 위 18%(y 0–18%)는 문틀 위 어두운 들보 · 무지 벽. 가운데(x 36–74%, 사모 꼭대기 y 22%, 발 y 90%) **원 의관**이 열린 미닫이 안쪽에 서서, 뒤에서 받쳐 든 밝은 무칠 나무 쟁반에서 **뚜껑 덮인 흰 사기 탕약 그릇**을 두 손으로 직접 넘겨받음(그릇 x 46–58%, y 52–60%, 뚜껑 틈으로 김, 가는 회녹 끈 매듭). 그의 LEFT 곁 장판 바닥(x 34–46%, y 84–94%) 닫힌 약상자(상 위 아님). 그 뒤 화면 오른쪽(x 72–96%, y 34–90%) **내의원 약동**(뒤 3/4, 얼굴 디테일 없음, 날개 없는 검은 천 모자, 회녹 옷)이 쟁반을 받침. 아래 왼쪽 구석(x 0–22%, y 74–100%) 초점 밖 왕자의 진홍 어깨 · 호랑이(작게)
- characters: WON(**FULL** character-sheets §11-1, 상태 "탕약을 넘겨받음"(§D-5), 표정 WON ①) · EXTRA_MED · PRINCE(가장자리, 상태 토큰 `blurred edge: a crimson shoulder and the wooden tiger toy`)
- emotion: 따뜻함 그 자체 — "이건 보약이다"
- props: PROP_TONIC_SET + STEAM_THICK · PROP_MEDBOX
- dialogue_ref (1): ① 원 의관 dialogue "왕자 마마. 내의원에서 보약을 들고 왔습니다." (꼬리 ↓ 의관, 폭 넉넉히)
- art_space: **위 18%(x 4–96%, y 2–18%)** — 문틀 위 어두운 들보 · 무지 벽. 사모 꼭대기는 y 22% 아래
- attach: refs/WON_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: **회차 탕약 그릇 원본.** 관복 = dull muted gray-green (sage-gray), 연두 · 올리브 · 민트 금지. 약동 = 수염 없음 · 약상자 없음 · 사모 날개 없음. 약상자 닫힘, 금속 없음. 그릇 · 뚜껑 · 쟁반 무늬 · 인장 · 종이 띠 없음.

### panel_007
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (투샷, 쟁반 중앙)
- beat: ② ⏳ 타이머 선언(식기 전에) · 이름 1회 · 긴장 5.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + WON_LIGHT
- camera: 낮은 눈높이 two-shot, 상 너머 약간 옆
- composition: 화면 왼쪽~가운데(x 10–52%, 사모 꼭대기 y 38%, 얼굴 y 42–54%) 원 의관이 상 왼쪽(창 쪽)에서 몸을 숙여 쟁반째(그릇 + 쟁반 한 세트) 탕약 그릇을 상 가운데(x 42–58%, y 64–74%)에 조심스레 내려놓음, 김이 짙음. 화면 오른쪽(x 66–88%, 머리 y 40–48%) 문지방의 민 상궁이 가볍게 고개 숙여 맞음(작게), 손수건 쥔 두 손 앞. 그 뒤 문 밖 먼 곳(x 90–98%, y 44–70%) 약동이 물러가 섬(아주 작게). 위 36%는 창호지 윗부분 · 무지 병풍 · 들보
- characters: WON(FULL, 상태 "탕약을 상에 내려놓음"(§D-5), 표정 WON ①) · MIN(SHORT, 문지방에 작게 + MIN_HANDS_FOLDED, 표정 ② + 변주 `bowing her head slightly in greeting`) · EXTRA_MED(문 밖, 아주 작게)
- emotion: 예의 바른 어른 둘
- props: PROP_TONIC_SET + STEAM_THICK · PROP_MEDBOX(의관 LEFT 곁 장판 바닥, 상 위 아님) · PROP_HANKY_CLEAN · PROP_WIPECLOTH(상 가장자리, 접힘)
- dialogue_ref (2): ① 민 상궁 dialogue "원 의관께서 직접 오셨습니까." (위 오른쪽, 꼬리 ↘ 상궁) / ② 원 의관 dialogue "왕자 마마 속이 놀라지 않게, 식기 전에 드셔야 하지요." (위 왼쪽 조금 아래, 꼬리 ↙ 의관, 48cp — 폭 넉넉히)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 창호지 윗부분 · 병풍 · 들보(풍선 둘, 위아래)
- attach: refs/WON_turnaround.png, refs/MIN_turnaround.png, ep03 panel_006
- fx/note: 당의 NOT purple. 의관 손수건 · 소매 표지 없음(소매는 무지). 그릇 = ep03 P06과 같은 것.

### panel_008
- scene_id: S01 / location: LOC_L1_TASTING (클로즈업, 배경 흐림)
- beat: ② 귀여운 거부 ⟨복선: 호랑이 = 왕자의 방패⟩ · 긴장 5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (얼굴 화면 왼쪽이 밝음)
- camera: 앉은 아이 눈높이 close-up
- composition: 왕자 얼굴(x 18–82%, y 32–92%)의 아래 반을 두 손으로 들어 올린 나무 호랑이가 가림(호랑이 x 30–70%, y 60–92%), 큰 눈만 위로. 위 28%는 흐린 무지 병풍
- characters: PRINCE(FULL, PRINCE_TIGER_SHIELD, 표정 ⑥ `peeking out timidly from behind a skirt, half his face hidden, eyes big` → 변주 `peeking out from behind the wooden tiger toy instead of a skirt`)
- emotion: 싫어!
- props: PROP_TIGER
- dialogue_ref (1): ① 왕자 dialogue "쓴 거 싫어." (꼬리 ↓ 왕자)
- art_space: **위 28%(x 4–96%, y 2–28%)** — 흐린 무지 병풍
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 호랑이 깨진 귀는 보이기만(강조 금지, W6).

### panel_009
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (아이 높이 투샷)
- beat: ② 아이 눈높이의 다정함 · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + WON_LIGHT
- camera: **앉은 아이의 눈높이**(카메라 낮게, 수평 — 올려다보는 로우 앵글 아님), two-shot
- composition: 화면 왼쪽(x 8–48%, 사모 꼭대기 y 34%, 얼굴 y 40–54%) 원 의관이 상 왼쪽 창가에서 한쪽 무릎을 굽혀 왕자와 눈높이를 맞춤, 손은 자기 무릎 위, 3/4로 화면 오른쪽을 봄 — 창빛이 얼굴 정면. 그의 LEFT 곁 장판 바닥에 약상자(x 4–16%, y 80–92%, 상 위 아님). 화면 오른쪽(x 54–86%, 머리 y 44–56%) 왕자가 방석에서 호랑이를 반쯤 들고 경계. 사이 아래 상 위 김 오르는 탕약 그릇(x 44–58%, y 70–80%). 위 32%는 밝은 창호지 · 병풍
- characters: WON(FULL, 상태 "무릎 굽힘"(§D-5), 표정 WON ② `the same warm smile, eyes soft and level with the child's, kneeling down with his hands resting on his own knees`) · PRINCE(SHORT, 방석에 앉음, 표정 ① `scared and wary, lips pressed tight, looking up, eyebrows slanting upward` + 변주 `half-hiding behind the wooden tiger toy`)
- emotion: 친절한 어른(의심 연출 0)
- props: PROP_TONIC_SET + STEAM_THICK · PROP_MEDBOX · PROP_TIGER
- dialogue_ref (1): ① 원 의관 dialogue "한 그릇만 드시면…" (위 왼쪽, 꼬리 ↓ 의관)
- art_space: **위 32%(x 4–96%, y 2–32%)** — 밝은 창호지 윗부분 · 병풍
- attach: refs/WON_turnaround.png, refs/PRINCE_turnaround.png, ep03 panel_006
- fx/note: 로우 앵글 · 반그늘 금지. 의관 손이 아이에게 닿지 않음.

### panel_010
- scene_id: S01 / location: LOC_L1_TASTING (바스트, 3/4 측면)
- beat: ② ⟨복선 H5: 내의원 꿀 → EP05⟩ ⟨이중의미⟩ · 긴장 5.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + WON_LIGHT (따뜻한 창빛)
- camera: 눈높이 bust, **3/4 측면**(정면 아님)
- composition: 원 의관 바스트(x 28–84%, 사모 꼭대기 y 38%, 얼굴 y 44–66%)가 화면 오른쪽(프레임 밖 왕자)을 향해 다정하게 웃으며 손가락 하나를 세움(손 x 66–82%, y 68–80%). 창빛이 화면 왼쪽에서 얼굴 전체에. 뒤 초점 밖 병풍. 위 36%는 흐린 따뜻한 창호지 빛 · 들보
- characters: WON(FULL, 상태 "무릎 굽힘"(바스트로 잘림), 표정 WON ③ `a warm, playful smile, eyes curving gently, one finger raised as if making a promise to a child`)
- emotion: 다정한 약속(표정 = 그냥 친절)
- props: —
- dialogue_ref (2): ① 원 의관 dialogue "입맛 돋우시게" / ② 원 의관 dialogue "내의원 꿀을 보내 드리지요." (49cp, 회차 최장 — `w` 넉넉히, 둘 다 꼬리 ↙ 의관)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 흐린 창호지 빛 · 들보(풍선 둘, 위아래)
- attach: refs/WON_turnaround.png
- fx/note: 단서는 대사에만 — 클로즈업 정지 · 의미심장한 눈빛 · 그림자 0. 정면 극단 클로즈업 금지.

### panel_011
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (투샷)
- beat: ② H5 수용 · 첫 온기 · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 two-shot
- composition: 화면 왼쪽~가운데 먼 쪽(x 18–52%, 머리 y 42–56%) 왕자가 호랑이 위로 눈만 반짝 내밂. 화면 오른쪽(x 58–90%, 머리 y 40–52%) 채령이 살짝 웃음, 앞섶 살짝 불룩. 사이 아래 상 위 탕약 그릇(김). 위 36%는 창호지 · 무지 병풍
- characters: PRINCE(FULL, PRINCE_TIGER_SHIELD, 표정 ⑥ + 변주 `eyes sparkling over the top of the wooden tiger toy`) · CHAERYEONG(SHORT, 무릎 꿇음 + NORIGAE_HIDDEN, 표정 ② `a small awkward, fond smile, trying not to laugh`)
- emotion: 아이의 기대
- props: PROP_TIGER · PROP_TONIC_SET + STEAM_THICK
- dialogue_ref (1): ① 왕자 dialogue "꿀? 진짜?" (위 왼쪽, 꼬리 ↓ 왕자)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 창호지 윗부분 · 무지 병풍
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 의관은 프레임 밖.

### panel_012
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (의관 어깨 너머 감찰)
- beat: ② ⟨복선 W5①⟩ 무게가 감찰로 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 over-the-shoulder(의관 어깨 너머), 초점은 감찰
- composition: 앞쪽 아래 왼쪽(x 0–40%, y 34–100%) 초점 밖 원 의관의 뒷모습 — 사모 뒤의 짧고 둥근 날개 둘 · 회녹 어깨, **얼굴 안 보임**. 중경 화면 오른쪽(x 50–86%, 갓 꼭대기 y 34%, 허리 y 92%) 미닫이 문가에 선 백 감찰, 움직이지 않음, 환도 LEFT 허리(화면 오른쪽). 위 32%는 문틀 위 어두운 들보 · 천장
- characters: BAEK(FULL, 문가에 섬 상태 토큰, 표정 ①) · WON(뒷모습 상태(§D-5 P12), 표정 WON ⑥ `politely asking, head turned slightly away, only the edge of his face or the back of his samo hat visible`)
- emotion: 정중한 질문 · 무심한 대답
- props: PROP_SWORD
- dialogue_ref (2): ① 원 의관 dialogue "감찰 나리께서 탕약 시식까지 보십니까?" (위 왼쪽, 꼬리 ↙ 화면 왼쪽 아래 = 의관 뒤통수) / ② 백 감찰 dialogue "1년 전, 기미 하나가 앓아 나갔소." (위 오른쪽 조금 아래, 꼬리 ↓ 감찰)
- art_space: **위 32%(x 4–96%, y 2–32%)** — 들보 · 천장. 갓 꼭대기 y 34% 아래
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png, refs/WON_turnaround.png
- fx/note: 의관 얼굴 0, 그의 어깨에 그림자 연출 없음(평범한 초점 밖 전경).

### panel_013
- scene_id: S01 / location: LOC_L1_TASTING (감찰 클로즈업 + 전경 채령)
- beat: ② ⟨복선 W5① 착지⟩ 감시자 재확인 · 긴장 6.5 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이, 감찰 close-up + 전경 흐린 옆얼굴
- composition: 화면 오른쪽~가운데(x 42–90%, 갓 꼭대기 y 34%, 얼굴 y 44–72%) 백 감찰의 얼굴, 시선은 화면 왼쪽 아래(채령). 전경 아래 왼쪽(x 0–40%, y 52–100%) 초점 밖 채령 옆얼굴, 굳음. **의관 없음.** 위 32%는 어두운 들보 · 문틀
- characters: BAEK(FULL, 표정 ① `a stern frown, mouth shut tight` + 변주 `his eyes fixed on the girl`) · CHAERYEONG(SHORT 옆얼굴, 흐림, NORIGAE_HIDDEN, 표정 ④ `eyes wide with a sudden chill, small pupils, holding her breath`)
- emotion: 앓아 나갔다고?
- props: —
- dialogue_ref (2): ① 백 감찰 dialogue "그래서 내가 여기 있소." (위 오른쪽, 꼬리 ↓ 감찰) / ② 채령 thought "…앓아 나갔다고?" (위 왼쪽 조금 아래, 채령 머리 위)
- art_space: **위 32%(x 4–96%, y 2–32%)** — 어두운 들보 · 문틀(대사 + 작은 생각)
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 의관 리액션 컷 없음(beatsheet §0-4). 흉터 = RIGHT 턱(화면 왼쪽).

### panel_014
- scene_id: S01 / location: LOC_L1_TASTING (향로 + 탕약 클로즈업)
- beat: ③ ⏳ 두 시계 동시 시작 ⟨회수: EP02 P13 같은 문장⟩ · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 상 높이 close-up, 연기와 김을 세로로 길게 (ep02 P13 메아리)
- composition: 가운데~오른쪽 아래(x 46–72%, y 64–96%) 놋 향로와 낮은 받침 — 화면 오른쪽에서 들어온 채령의 손(연두 소맷부리)이 재에 새 쑥 향을 꽂고 불씨. 향로 오른쪽(x 74–98%, y 58–80%) 쟁반 위 **닫힌 탕약 그릇**(끈 매듭), 뚜껑 틈 김이 짙게. 두 줄기가 나란히 위로: 연기(가늘고 곧게, x 58–62%, y 14–64%) · 김(조금 넓고 부드럽게, x 82–88%, y 22–58%). 왼쪽 가장자리 아래(x 0–10%, y 62–100%) 의관 회녹 소매 · 자락(가장자리 · 목소리 상태). **왼쪽 반 위(x 4–50%, y 2–48%)는 초점 밖 창호지 빛**
- characters: CHAERYEONG(손 클로즈업 상태 토큰) · WON(가장자리 · 목소리 상태 `only the edge of a gray-green sleeve and the black samo wing at the side of the frame`)
- emotion: 의식 같은 정확함 + 시간 압박
- props: PROP_CENSER + PROP_INCENSE_NEW · PROP_TONIC_SET + STEAM_THICK
- dialogue_ref (2): ① 채령 dialogue "향을 올리겠습니다." (위, 꼬리 ↘ 화면 오른쪽 아래 = 손) / ② 원 의관 dialogue "식기 전에 부탁드립니다." (조금 아래, 꼬리 ← 왼쪽 가장자리 = 의관 소매)
- art_space: **왼쪽 반 위(x 4–50%, y 2–48%)** — 연기 · 김 반대편의 흐린 창호지 빛(풍선 둘, 위아래). 소매는 y 62% 아래
- repeat: 향 점화 ← **ep02 panel_013**. 바뀌는 것: 탕약 그릇 + 김 줄기 추가 · 빈자리 왼쪽 반 · 의관 소매
- attach: ep02 panel_013, ep03 panel_006, refs/PROP_TABLEWARE.png
- fx/note: 연기 · 김은 가는 줄, 모양 만들지 않음. 향 = 이 회차 첫 점화.

### panel_015
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (하이앵글 그릇 클로즈업)
- beat: ③ 절차 2 · 탕약 갈색 · 긴장 6.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: high-angle close-up, 배경 흐림
- composition: 가운데(x 18–82%, y 24–90%) 쟁반 위 열린 흰 사기 그릇 — **짙은 갈색 탕약**, 김이 확 솟음. 뚜껑은 쟁반 위 옆(x 70–94%, y 66–86%), 그 곁에 **풀린 가는 회녹 끈**. 화면 오른쪽 위에서 들어온 채령의 손가락이 은침을 탕약 **정가운데**에 꽂음(은침 위쪽 은빛)
- characters: CHAERYEONG(손 클로즈업 상태 토큰)
- emotion: 절차의 고요
- props: PROP_TONIC_OPEN + STEAM_BURST · PROP_NEEDLE(은빛)
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: ep02 panel_015, ep03 panel_006, refs/PROP_TABLEWARE.png
- fx/note: 탕약 = dark brown, no purple tint, no sheen. 끈 · 뚜껑 무지(인장 · 종이 없음). P22 인서트의 원본 배치.

### panel_016
- scene_id: S01 / location: LOC_L1_TASTING (은침 ECU + 흐린 감찰)
- beat: ③ 은침 무반응 ⟨대비: EP02 "검다"⟩ ⟨회수: EP01 P15 같은 문장⟩ · 긴장 6.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING — 은침이 화면에서 가장 차가운 반짝임
- camera: extreme close-up, 눈높이
- composition: 채령 손가락(화면 아래 오른쪽)이 들어 올린 은침 대각선(x 24–72%, y 30–92%) — **끝까지 은빛**, 끝에 갈색 방울 하나 정도만. 뒤 화면 오른쪽 중경(x 60–92%, y 6–60%) 초점 밖 백 감찰의 검은 형태(갓 · 어깨). 위 왼쪽 모서리(x 4–48%, y 3–30%)는 흐린 어두운 들보 · 장판
- characters: CHAERYEONG(손 클로즈업) · BAEK(SHORT, 흐림)
- emotion: 안전 신호(가짜)
- props: PROP_NEEDLE(+ EP03 덧붙임 `bright silver all the way to the very tip`)
- dialogue_ref (1): ① 백 감찰 dialogue "은빛이다." (꼬리 → 화면 오른쪽 흐린 감찰)
- art_space: **위 왼쪽 모서리(x 4–48%, y 3–30%)** — 은침 반대편 흐린 배경
- repeat: 은침 ECU ← **ep01 panel_015**(같은 대사 · 같은 은빛). 바뀌는 것: 탕약에서 들어 올림 · 뒤에 흐린 감찰
- attach: ep01 panel_015, ep02 panel_004, refs/BAEK_turnaround.png
- fx/note: **은침 끝 회색 · 검정 · 보라 · 푸른 기면 REGEN**(EP02 P16–P39 변색 예외는 이 회차에 없다).

### panel_017
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (투샷)
- beat: ③ 절차 3 · 가짜 평온(이완 1컷) · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 two-shot
- composition: 화면 오른쪽(x 52–90%, 머리 y 40–54%) 채령이 작은 놋 국자로 흰 기미 그릇의 갈색 탕약을 한 모금 — 너무 써서 얼굴을 찡그림, 기미 그릇을 든 손(y 60–72%). 상 건너편 화면 왼쪽(x 14–48%, 머리 y 42–56%) 왕자가 손가락으로 채령을 가리킴, 다른 손에 호랑이. 사이 상 위 열린 탕약 그릇(김) · 접힌 행주. 위 36%는 창호지 · 병풍
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 변주 `face scrunched up at a very bitter taste`) · PRINCE(SHORT, 방석에 앉음, 변주 `pointing at her with a told-you-so grin`)
- emotion: 짧은 웃음기
- props: PROP_TASTER_DISH + PROP_SMALL_LADLE(갈색) · PROP_TONIC_OPEN · PROP_TIGER · PROP_WIPECLOTH(상 가장자리, 접힘)
- dialogue_ref (1): ① 왕자 dialogue "봐, 쓰지?" (위 왼쪽, 꼬리 ↓ 왕자)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 창호지 윗부분 · 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png, refs/PRINCE_turnaround.png
- fx/note: 찡그림은 사실적으로(SD · 기호 없음). 국자는 그릇 가운데만.

### panel_018
- scene_id: S01 / location: LOC_L1_TASTING (입술 ECU, 배경 흐림)
- beat: ③ ⟨복선: 혀끝 저림 [고정]⟩ · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (밝은 쪽 = 화면 왼쪽)
- camera: extreme close-up, 옆얼굴 아래 반(코끝~턱), 정지
- composition: 아래 60%(x 14–86%, y 40–96%) 채령의 옆얼굴 아래 반 — 살짝 벌린 입술, 혀끝을 윗니 뒤에 대 봄(혀는 아주 조금, 사실적으로). 위 40%(y 0–40%)는 그녀 옆얼굴 너머 초점 밖 따뜻한 창호지 빛
- characters: CHAERYEONG(FULL 입, 표정 ③ `eyes narrowed in sharp focus, brows slightly drawn together, lips parted` 중 입만 + 변주 `the tip of her tongue touching the back of her upper teeth, a frozen, still moment`)
- emotion: 정지 — 이상 신호
- props: —
- dialogue_ref (2): ① 채령 thought "…혀끝이," / ② 채령 thought "저려."
- art_space: **위 40%(x 4–96%, y 2–40%)** — 흐린 창호지 빛(생각 풍선 둘, 입술 피함)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 입술 · 혀에 보라 · 이상한 색 금지(저림은 보이지 않는다).

### panel_019
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (낮은 측면)
- beat: ③ 냄새로는 모른다 · 긴장 7 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: [낮은 측면 코끝 — 세 번째 반복] 상 높이의 낮은 측면 close-up
- composition: [ep02 P22와 같은 배치] 아래 오른쪽(x 50–95%, y 60–96%) **흰 기미 그릇**과 그 안의 갈색 탕약 조금. 왼쪽 가운데(x 8–55%, y 42–84%) 몸을 숙인 채령의 옆얼굴, 코끝이 그릇 가까이(거리가 읽히게). 위 38%는 흐린 병풍
- characters: CHAERYEONG(FULL 얼굴, NORIGAE_HIDDEN, 표정 ③)
- emotion: 냄새를 맡는다 — 묻혔다
- props: PROP_TASTER_DISH(갈색 탕약)
- dialogue_ref (2): ① 채령 thought "쓴 약초 냄새에 묻혀서…" / ② 채령 thought "냄새로는 몰라."
- art_space: **위 38%(x 4–96%, y 2–38%)** — 그릇 반대쪽의 흐린 병풍(생각 풍선 둘)
- repeat: 낮은 측면 ← **ep02 panel_022**(원본 ep01 panel_020). 바뀌는 것: 놋 왕자 그릇 · 노른자 죽 → 흰 기미 그릇 · 갈색 탕약 · 은침 없음
- attach: ep02 panel_022, ep01 panel_020, refs/CHAERYEONG_expressions.png
- fx/note: 탕약 보라 0.

### panel_020
- scene_id: S01 / location: LOC_L1_TASTING (ECU)
- beat: ③ ⟨반전: 미니 1단 — 보약이 아니다⟩ 미니 훅 1 · 긴장 7.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: extreme close-up, 눈 하나 + 눈썹 (ep02 P23 프레이밍)
- composition: 채령의 눈(x 10–90%, y 46–86%), 동공이 작아짐, 깨달음. 위 40%는 초점 밖 부드러운 이마 그늘 · 어두운 머리칼(무늬 없는 어두운 면)
- characters: CHAERYEONG(FULL 눈, 표정 ④)
- emotion: 깨달음 — 바르는 약
- props: —
- dialogue_ref (2): ① 채령 thought "생 그늘보라." / ② 채령 thought "바르는 약이야. 먹는 약이 아니야."
- art_space: **위 40% 띠(x 4–96%, y 2–40%)** — 흐린 어두운 머리칼 · 그늘
- repeat: 눈 ECU(낮) ← **ep02 panel_023**. 바뀌는 것: 표정 ④(안도 섞임 없음)
- attach: ep02 panel_023, refs/CHAERYEONG_expressions.png
- fx/note: **회차 안 원본** → P54(저녁 눈 ECU). 회상 · 꽃 이미지 없음.

### panel_021
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (채령 어깨 너머 문지방)
- beat: ④ 미스디렉션: 상궁의 시험? · ⏳ 김 가늘어짐 · 긴장 7.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: over-the-shoulder, 채령 어깨 너머 문지방의 상궁 medium — 초점은 상궁 (ep02 P21 구도)
- composition: [ep02 P21과 같은 배치] 앞쪽 아래 왼쪽(x 0–40%, y 46–100%) 돌아보는 채령의 어깨 · 뒤통수 · 땋은 머리(초점 밖). 중경 화면 오른쪽(x 54–82%, 머리 y 34–44%, 발 y 88%) 열린 문지방에 선 민 상궁, 같은 미소로 가만히 — **두 손을 소매 밖 앞에 모아 깨끗한 손수건을 쥠**(y 54–62%). 아래 오른쪽 구석(x 72–98%, y 86–100%) 상 위 열린 탕약 그릇의 **가늘어진 김**(작게). 위 왼쪽(x 4–52%, y 2–34%)은 들보 · 병풍
- characters: MIN(FULL, MIN_HANDS_FOLDED, 표정 ④ `quiet and watchful, lips relaxed in a very faint smile, eyes steady`) · CHAERYEONG(뒷모습 상태 토큰, 초점 밖, NORIGAE_HIDDEN)
- emotion: 의심이 상궁에게
- props: PROP_HANKY_CLEAN · PROP_TONIC_OPEN + STEAM_THIN
- dialogue_ref (2): ① 채령 thought "마마님이…" / ② 채령 thought "또 시험하시는 거야?"
- art_space: **위 왼쪽(x 4–52%, y 2–34%)** — 채령 어깨 쪽 위의 들보 · 병풍(생각 풍선 둘). 상궁 얼굴 · 손은 그 밖
- repeat: 어깨 너머 문지방 ← **ep02 panel_021**. 바뀌는 것: **손이 소매 밖**(손수건 보임, CLEAN) · 구석의 김
- attach: ep02 panel_021, refs/MIN_turnaround.png, refs/MIN_expressions.png
- fx/note: 첨부 ep02 P21의 "소매 속 손"을 따라 그리면 REGEN. 당의 NOT purple.

### panel_022
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (쟁반 하이앵글 인서트)
- beat: ④ ⟨반전: 미니 공개 1⟩ 봉해서 곧장 왔다 · 긴장 7.5 · gap_after 0
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (차가운 정물)
- camera: high-angle insert, 정물
- composition: 아래 60%(x 12–88%, y 40–96%) 밝은 무칠 나무 쟁반: 열린 흰 사기 그릇(갈색 탕약, 가는 김 몇 가닥) · 옆에 놓인 무지 뚜껑 · **풀린 가는 회녹 끈 매듭**(끈이 고리 모양으로 느슨하게, x 60–84%, y 70–86%). **사람 얼굴 · 손 없음.** 위 38%는 초점 밖 옻칠 상 면 · 장판(평평하고 어두운 면)
- characters: — (사람 없음)
- emotion: 증거는 매듭
- props: PROP_TONIC_OPEN + STEAM_THIN
- dialogue_ref (2): ① 채령 thought "아니야. 내의원에서 봉해서 곧장 왔어." / ② 채령 thought "마마님 손은 닿지도 않았어."
- art_space: **위 38%(x 4–96%, y 2–38%)** — 흐린 옻칠 상 면 · 장판(생각 풍선 둘)
- attach: ep03 panel_015, ep03 panel_006, refs/PROP_TABLEWARE.png
- fx/note: 끈 · 뚜껑 · 쟁반 · 그릇에 인장 · 종이 표지 · 글자 0. 의관 · 상궁 · 누구의 손도 없음.

### panel_023
- scene_id: S01 / location: LOC_L1_TASTING (정면 얼굴 클로즈업)
- beat: ④ ⟨반전: 미니 공개 2 [고정] — 다른 손⟩ · 긴장 8 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (화면 가장자리 어둡게)
- camera: 눈높이 정면 face close-up
- composition: 채령 얼굴(x 14–86%, y 34–96%), 핏기가 가심, 관자놀이에 식은땀 한 방울(화면 오른쪽 관자놀이). 이미지 네 가장자리가 어두워짐. 위 32%는 흐린 어두운 병풍 · 머리칼 그늘
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ④ + 변주 `face drained of color` + 땀 토큰)
- emotion: 새 손의 존재
- props: —
- dialogue_ref (2): ① 채령 thought "그럼…" / ② 채령 thought "다른 손이 넣은 거야."
- art_space: **위 32%(x 4–96%, y 2–32%)** — 흐린 어두운 병풍 · 그늘
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 이 컷과 앞뒤 컷에 의관 얼굴을 겹치지 않는다. 땀 = 사실적 한 방울(만화 기호 금지).

### panel_024
- scene_id: S01 / location: LOC_L1_TASTING (세 인서트)
- beat: ④ 딜레마 ⚖ ⟨회수: EP02 P24 같은 문장⟩ · ⏳ 두 시계 끝나 감 · 긴장 8 · gap_after 40
- size: large (3단 분할) · aspect: **9:16**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 세 칸 모두 close-up insert, 눈높이
- composition: **이 회차 유일한 칸 나눔 예외**(ep01 P23 · ep02 P24와 같은 형식). 세 칸을 위아래로 쌓고 가는 검은 가로 띠 두 줄로 나눔: **위 칸(y 0–28%)** = 놋 향로에 **거의 다 탄 향 꽁초**, 가는 연기, 칸 아래쪽(y 8–28%). **가운데 칸(y 30–70%)** = 상 위 열린 탕약 그릇(칸 아래쪽 y 56–70%)에서 **한 가닥만 남은 김**이 위로; 그 위(y 32–54%)는 초점 밖 무지 병풍 · 장판의 조용한 면. **아래 칸(y 72–100%)** = 왕자가 방석에서 호랑이를 만지작거리며 곁눈으로 그릇을 흘끔 봄(얼굴 x 24–76%). 대안(Flow가 칸을 망칠 때): 한 장의 깊이 구도 — 전경 아래 향 꽁초, 중경 그릇의 한 가닥 김, 뒤 위 그릇을 보는 왕자(말풍선 자리는 왕자 위 병풍)
- characters: PRINCE(SHORT 아래 칸, 표정 ④ + 변주 `fiddling with the wooden tiger toy, glancing sideways at the bowl`)
- emotion: 압박 — 말하면 정체, 안 하면 왕자
- props: PROP_CENSER + PROP_INCENSE_STUB · PROP_TONIC_OPEN + STEAM_ONE · PROP_TIGER
- dialogue_ref (2): ① 채령 thought "말하면… 재로 증명해야 해." / ② 채령 thought "그럼 또 그 약재상의 딸이 돼."
- art_space: **가운데 칸 위쪽(x 6–94%, y 32–54%)** — 김 위의 조용한 병풍 · 장판 면(생각 풍선 둘, 위아래) / 대안 구도에서는 왕자 위 병풍
- repeat: 3단 분할 ← **ep02 panel_024**(원본 ep01 panel_023). 바뀌는 것: 위 = 향 꽁초 · 가운데 = 김 한 가닥 · 아래 = 왕자
- attach: ep02 panel_024, ep01 panel_023, refs/PRINCE_turnaround.png
- fx/note: prompt-smith: Avoid 줄에서 `panel borders`를 빼고 `extra panels`로(style-bible §5-1). 김 · 연기 모양 만들지 않음.

### panel_025
- scene_id: S01 / location: LOC_L1_TASTING (향로 전경 + 후경 채령)
- beat: ④ ⏳ 향 만료 · 판결의 질문 · 긴장 7.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 상 높이, 전경 향로 close + 후경 medium
- composition: 전경 아래(x 24–60%, y 60–98%) 향로 — 꽁초 끝에서 **마지막 재가 떨어짐**, 연기가 끊김. 중경 화면 오른쪽(x 58–88%, 머리 y 38–50%) 무릎 꿇은 채령, 아랫입술을 깨묾. 왼쪽 가장자리(x 0–14%, y 42–100%) 의관의 회녹 소매 · 자락 · 무릎 위 손(얼굴 프레임 밖, 가장자리 · 목소리 상태). 상 가장자리 접힌 행주. 위 34%는 창호지 빛 · 병풍
- characters: CHAERYEONG(FULL, 무릎 꿇음 + NORIGAE_HIDDEN, 표정 ⑤ `biting her lower lip, eyes wide and glistening, fighting her fear`) · WON(가장자리 · 목소리 상태 `only the edge of a gray-green sleeve and the black samo wing at the side of the frame`)
- emotion: 판결 직전
- props: PROP_CENSER + 향 P25 문장(§D-3) · PROP_WIPECLOTH(상 가장자리, 접힘)
- dialogue_ref (2): ① 원 의관 dialogue "향이 다 탔군요." / ② 원 의관 dialogue "기미 궁녀님, 어떻습니까?" (둘 다 꼬리 ← 왼쪽 가장자리 = 의관)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 창호지 빛 · 병풍(풍선 둘, 위아래)
- attach: ep03 panel_014, refs/CHAERYEONG_expressions.png, refs/WON_turnaround.png
- fx/note: 의관 가장자리는 차분 · 밝게(그림자 · 위협 금지).

### panel_026
- scene_id: S01 / location: LOC_L1_TASTING (하이앵글 큰 컷)
- beat: ④ ⟨반전: 요구 2단계 이행 [고정]⟩ ⟨이중의미 E1: 회차 제목⟩ · 긴장 8 · gap_after 20
- size: large · aspect: **9:16**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (긴 옅은 그림자가 화면 오른쪽으로)
- camera: high-angle, 위에서 내려다봄 — 한 마디가 화면을 누른다
- composition: 가운데(x 26–74%, y 36–72%) 채령이 장판에 두 손을 짚고 깊이 엎드림 — 정수리 · 한 갈래 땋은 머리 · 붉은 댕기 · 연두 등 · 남색 치마만. 그 둘레 **모두의 발치**: 위 오른쪽(x 74–98%, y 22–54%) 백 감찰의 검은 목화와 철릭 자락 · 환도 칼집 끝 · 왼쪽 아래(x 2–30%, y 76–100%) 무릎 꿇은 의관의 회녹 자락과 검은 신 · 위 왼쪽(x 6–40%, y 22–40%) 상 모서리와 그 너머 왕자의 진홍 도포 자락 · 작은 신. **위 띠(x 4–70%, y 2–20%)는 비어 있는 장판**
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 변주 `prostrating with both hands flat on the floor, head bowed deeply; only the crown of her head, her single braid with the red ribbon and her back visible`) · BAEK(발 · 자락) · WON(자락 · 신) · PRINCE(자락 · 신)
- emotion: 거짓말의 무게
- props: PROP_TONIC_OPEN(상 위, 작게) · PROP_CENSER + PROP_INCENSE_OUT
- dialogue_ref (1): ① 채령 dialogue "…깨끗합니다." (꼬리 ↓ 정수리)
- art_space: **위 띠(x 4–70%, y 2–20%)** — 비어 있는 장판(감찰 목화는 그 밖 오른쪽)
- attach: refs/CHAERYEONG_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: 상궁은 이 컷에 넣지 않는다(P27 단독). 얼굴이 하나도 안 보여야 한다.

### panel_027
- scene_id: S01 / location: LOC_L1_TASTING (클로즈업, 문지방)
- beat: ④ ⟨복선 W1 → EP22⟩ 상궁이 한 박자 눈을 감는다 · 긴장 8 · gap_after **240**
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (얼굴의 밝은 쪽 = 화면 왼쪽)
- camera: 눈높이 정면 close-up, 정적
- composition: 민 상궁 얼굴(x 18–82%, y 20–92%), **눈을 감음**, 미소 그대로. 뒤는 초점 밖 문틀 · 밝은 문틈. 다른 인물 없음
- characters: MIN(FULL, MIN_EYES_CLOSED, 표정 ① 변주)
- emotion: 아무도 모르는 한 박자
- props: 손수건 안 보임
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/MIN_expressions.png, refs/MIN_turnaround.png
- fx/note: 눈물 · 찡그림 · 슬픈 표정 · 그림자 연출 금지 — 눈만 감는다. 흰 머리 LEFT 관자놀이(화면 오른쪽).

### panel_028
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (왕자 미디엄 클로즈 + 가장자리 의관)
- beat: ⑤ ⏳ 마지막 압박 · 미니 정점 · 긴장 8 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + WON_LIGHT(가장자리 의관 얼굴 밝게)
- camera: 낮은 눈높이 medium close
- composition: 가운데(x 30–74%, 머리 y 36–56%) 왕자가 흰 탕약 그릇을 두 손으로 들어 입술 가까이(그릇 x 40–62%, y 56–70%), 얼굴을 잔뜩 찡그림, 김은 거의 없음. 왼쪽 가장자리(x 0–26%, 얼굴 y 38–52%) 원 의관이 3/4로 밝게 고맙다는 듯 미소. 위 34%는 창호지 빛 · 병풍
- characters: PRINCE(FULL, PRINCE_HOLD_TONIC, 변주 `face scrunched up in disgust, eyes squeezed`) · WON(SHORT character-sheets §11-1, 가장자리, 표정 WON ④ `a bright, grateful smile toward the kneeling maid`)
- emotion: 독자 공포 최고
- props: PROP_TONIC_OPEN + STEAM_FAINT · PROP_TIGER(방석 곁)
- dialogue_ref (2): ① 원 의관 dialogue "식기 전에," / ② 원 의관 dialogue "단숨에 드십시오, 마마." (둘 다 꼬리 ↙ 왼쪽 가장자리 = 의관)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 창호지 빛 · 병풍(그릇 · 왕자 얼굴 피함)
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/WON_turnaround.png
- fx/note: 공포는 상황에서 — 의관 얼굴은 그냥 밝고 친절. 그릇 = P06 그릇.

### panel_029
- scene_id: S01 / location: LOC_L1_TASTING (채령 바스트)
- beat: ⑤ ⟨반전: 제3의 수 시작⟩ · 긴장 7 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (얼굴 화면 왼쪽이 밝음)
- camera: 눈높이 bust, 앞으로 쏠리는 움직임
- composition: 채령 바스트(x 18–82%, 머리 y 36–60%)가 불쑥 몸을 앞으로 내밂, 눈을 장난스럽게 반짝. 앞섶 살짝 불룩. 위 34%는 흐린 병풍 · 창호지
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ② + 변주 `suddenly bright and playful, eyes sparkling with mischief, leaning forward`)
- emotion: 온도 급반전(앞 컷 공포 → 장난)
- props: —
- dialogue_ref (2): ① 채령 dialogue "왕자 마마!" / ② 채령 dialogue "호랑이는 쓴 약을 보면 뭘 하는지 아세요?" (꼬리 ↓ 채령)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 흐린 병풍 · 창호지(풍선 둘)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 괴짜 미소 금지 — 아이를 꾀는 다정한 장난.

### panel_030
- scene_id: S01 / location: LOC_L1_TASTING (왕자 클로즈업)
- beat: ⑤ 솔깃 · 긴장 6 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 아이 눈높이 close-up
- composition: 왕자 얼굴(x 16–84%, y 30–82%), 눈을 깜박, 솔깃. 아래 가장자리(x 24–76%, y 80–100%) 아직 두 손에 든 흰 그릇 테두리. 위 26%는 흐린 병풍
- characters: PRINCE(FULL, PRINCE_HOLD_TONIC, 표정 ④ `innocent, open, trusting face, eyes round and clear` + 변주 `blinking, curious`)
- emotion: 호기심
- props: PROP_TONIC_OPEN(테두리만)
- dialogue_ref (1): ① 왕자 dialogue "…뭘 하는데?" (꼬리 ↓ 왕자)
- art_space: **위 26%(x 4–96%, y 2–26%)** — 흐린 무지 병풍
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png
- fx/note: —

### panel_031
- scene_id: S01 / location: LOC_L1_TASTING (채령 미디엄)
- beat: ⑤ 밸브 1 (유머) · 긴장 5.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 medium
- composition: 채령(x 16–84%, 머리 y 36–54%)이 두 손을 호랑이 발톱처럼 세움(손 x 18–40% · 60–82%, y 42–60%), 우스운 얼굴. 무릎 꿇은 채. 위 32%는 흐린 병풍 · 창호지
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 변주 `a silly, slightly exaggerated tiger face, both hands raised and curled like tiger claws` — 데포르메 약하게, 만화 기호 없음)
- emotion: 웃음 시작
- props: —
- dialogue_ref (1): ① 채령 dialogue "어흥! 하고 덤벼요!" (꼬리 ↓ 채령 · shout 여부 letterer 판단)
- art_space: **위 32%(x 4–96%, y 2–32%)** — 흐린 병풍 · 창호지. 세운 손은 y 42% 아래
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: SD · 이모티콘 기호 금지. 노리개 없음.

### panel_032
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (역동 대각선 큰 컷)
- beat: ⑤ ⟨반전: 미니 — 제3의 수 실행 [고정]⟩ 밸브 2 · 긴장 5 · gap_after 20
- size: large · aspect: **9:16**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, 약간 기울인 역동 구도(대각선 — 더치 앵글은 아주 약하게만)
- composition: 위 왼쪽에서 아래 오른쪽으로 흐르는 대각선: 왕자(x 12–58%, 머리 y 22–36%)가 "어흥!" 하며 나무 호랑이를 쥔 손을 앞으로 내밀고 덤벼듦. 다른 손의 흰 그릇(x 56–68%, y 44–54%)이 기울어 **갈색 탕약이 포물선으로 쏟아짐**(x 56–92%, y 48–80%, 장판 쪽으로). 아래 오른쪽 가장자리(x 80–100%, y 80–100%) 백 감찰의 검은 목화 끝. **위 20%(y 2–20%)는 흐린 병풍 · 창호지**, 물줄기 위 오른쪽(x 70–96%, y 28–44%)은 조용한 병풍 면
- characters: PRINCE(FULL, PRINCE_LUNGE, 변주 `mouth open in a playful roar, eyes bright with glee`) · BAEK(목화 끝만)
- emotion: 해방 — 엎질러졌다
- props: PROP_SPILL · PROP_TIGER
- dialogue_ref (1): ① 왕자 dialogue "어흥!" (위, 꼬리 ↓ 왕자 · shout 가능) + sfx_1 KM 효과음 "ព្រូស!" (쏟아지는 물줄기 곁 위 오른쪽)
- art_space: **위 20%(x 4–96%, y 2–20%)** — 흐린 병풍 · 창호지(대사) + **효과음 작은 자리(x 70–96%, y 28–44%)** — 물줄기 위 조용한 병풍 면
- attach: refs/PRINCE_turnaround.png, refs/PRINCE_expressions.png, ep03 panel_028
- fx/note: **채령 손은 그릇에 닿지 않는다**(T2: 엎은 건 왕자). 탕약 갈색, 보라 · 윤기 0. 속도선 · 효과 글자 그리지 않음.

### panel_033
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR 방향 (감찰 세로 전신)
- beat: ⑤ 밸브 3 · 웃긴 정색 · 긴장 4.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이, 갓부터 목화까지 세로 전신(대본의 "하반신 + 얼굴"을 한 장으로)
- composition: 백 감찰 전신(x 40–84%, 갓 꼭대기 y 6%, 얼굴 y 12–26%, 목화 y 92%) 문가에 서서 **한 발을 뻣뻣하게 뒤로 뺌**, 무표정. 아래(x 10–80%, y 82–100%) 갈색 웅덩이가 그의 목화 끝 바로 앞까지 번짐(닿지 않음). 위 왼쪽(x 4–38%, y 4–26%)은 어두운 문틀 · 들보
- characters: BAEK(FULL, BAEK_STEP_BACK, 표정 ①)
- emotion: 웃긴 정색
- props: PROP_PUDDLE · PROP_SWORD
- dialogue_ref (1): ① 백 감찰 dialogue "……" (얼굴 옆 작은 말줄임 풍선, 꼬리 → 감찰)
- art_space: **위 왼쪽(x 4–38%, y 4–26%)** — 감찰 얼굴 옆 어두운 문틀 · 들보
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png
- fx/note: 웅덩이는 목화 · 옷에 닿지 않는다(빨래 대상 아님). 감찰이 다른 인물보다 커 보이게.

### panel_034
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (투샷)
- beat: ⑤ 밸브 4 · 회차 최저점 · 긴장 4.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 two-shot
- composition: 화면 왼쪽(x 14–50%, 머리 y 40–54%) 왕자가 굳었다가 나무 호랑이를 두 손으로 범인처럼 앞으로 내밂. 화면 오른쪽(x 56–88%, 머리 y 40–52%) 채령이 진지하게 고개를 끄덕임. 아래(y 80–100%) 장판 위 갈색 웅덩이 · 빈 그릇. 위 36%는 창호지 · 병풍
- characters: PRINCE(FULL, PRINCE_CULPRIT, 변주 `wide-eyed, frozen, then pointing the blame at the toy`) · CHAERYEONG(SHORT, NORIGAE_HIDDEN, 표정 ⑥ + 변주 `nodding gravely, perfectly serious`)
- emotion: 웃음
- props: PROP_TIGER · PROP_PUDDLE
- dialogue_ref (2): ① 왕자 dialogue "호랑이가 그랬어." (위 왼쪽, 꼬리 ↓ 왕자) / ② 채령 dialogue "…호랑이가 그랬네요." (위 오른쪽 조금 아래, 꼬리 ↓ 채령)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 창호지 · 병풍(풍선 둘)
- attach: refs/PRINCE_turnaround.png, refs/PRINCE_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: —

### panel_035
- scene_id: S01 / location: LOC_L1_TASTING (3/4 측면 미디엄)
- beat: ⑤ 밸브 5 · 다정함 유지 · 긴장 5 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + WON_LIGHT (따뜻한 빛)
- camera: 눈높이 medium, 의관 3/4 측면
- composition: 화면 왼쪽(x 10–56%, 사모 꼭대기 y 36%, 얼굴 y 42–56%) 원 의관이 화내지 않고 나지막이 웃으며 몸을 기울여 왕자의 손부터 들여다봄 — 손은 대지 않음. 그의 LEFT 곁 장판 바닥에 약상자(x 4–16%, y 82–94%, 상 위 아님). 화면 오른쪽(x 56–88%, 머리 y 44–56%) 왕자가 두 손(과 호랑이)을 내민 채 안도. 아래 웅덩이 일부. 위 34%는 밝은 창호지 · 병풍
- characters: WON(FULL, 상태 "무릎 굽힘", 표정 WON ⑤ `a soft, low laugh, gently concerned, looking down at the boy's hands without touching them`) · PRINCE(SHORT, 표정 ② `shoulders relaxing, a small relieved face, his grip on the toy loosening`)
- emotion: 그냥 친절한 어른(1독)
- props: PROP_MEDBOX(닫힘) · PROP_TIGER · PROP_PUDDLE
- dialogue_ref (2): ① 원 의관 dialogue "다치신 데는 없으십니까." / ② 원 의관 dialogue "약은 또 달이면 되지요." (둘 다 꼬리 ↙ 의관)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 밝은 창호지 · 병풍(풍선 둘)
- attach: refs/WON_turnaround.png, refs/PRINCE_turnaround.png
- fx/note: 의미심장한 표정 · 그림자 금지. 약상자 닫힘.

### panel_036
- scene_id: S01 / location: LOC_L1_TASTING (미디엄, 바쁜 손)
- beat: ⑥ ⟨천 ①⟩ 행주를 집는다 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 약간 위 눈높이 medium
- composition: 채령(x 28–86%, 머리 y 34–48%)이 무릎으로 몸을 앞으로 숙여 상 가장자리에서 집은 **크고 거친 미색 삼베 행주**로 장판 위 갈색 탕약을 재빨리 훔침(행주 · 손 x 26–62%, y 66–88%). 앞섶은 살짝 불룩할 뿐 흰 천 안 보임. 위 30%는 흐린 병풍 · 창호지
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ① `polite and composed, eyes alert and watchful` + 변주 `quick, busy hands`)
- emotion: 수습 — 증거를 손에 쥐다
- props: PROP_WIPECLOTH(닦는 중, §D-2) · PROP_PUDDLE
- dialogue_ref (1): ① 채령 dialogue "제가 닦겠습니다." (꼬리 ↓ 채령)
- art_space: **위 30%(x 4–96%, y 2–30%)** — 흐린 병풍 · 창호지
- attach: refs/CHAERYEONG_turnaround.png, ep03 panel_001
- fx/note: **행주 = 크고 미색 · 거친 결**(손수건보다 훨씬 큼) — P02 흰 천(작고 순백 · 매끈)과 한눈에 달라야 한다. 행주에 보라 0.

### panel_037
- scene_id: S01 / location: LOC_L1_TASTING (행주 ECU)
- beat: ⑥ ⟨천 ②⟩ 독자의 기억에 박는 컷 · 긴장 6.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 4일째 아침 · LIGHT_L1_MORNING (결이 보이게 비스듬한 빛)
- camera: extreme close-up, 천의 결
- composition: 프레임 대부분(x 6–94%, y 10–94%) 갈색 탕약을 흠뻑 먹은 행주 — 거친 삼베 결, 미색 바탕에 갈색 얼룩, 무지 가장자리 올이 풀림. 손가락 끝이 가장자리에 조금
- characters: CHAERYEONG(손가락 끝만)
- emotion: 이것을 기억하라
- props: PROP_WIPECLOTH(갈색, §D-2)
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: ep03 panel_036
- fx/note: **행주 결 원본** → P44 · P45 · P58. 갈색뿐, 보라 · 푸른 기 0.

### panel_038
- scene_id: S01 / location: LOC_L1_TASTING (하이앵글)
- beat: ⑥ ⟨천 ③⟩ ⟨복선: 잿물 → P45⟩ · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: high-angle, 바구니 + 멈춘 손 + 숙인 정수리
- composition: 화면 왼쪽(x 12–42%, y 38–56%) 고개 깊이 숙인 나인의 정수리(얼굴 없음, 회청 저고리). 그녀가 내민 무지 대바구니(x 18–70%, y 54–88%, 접힌 천들). 화면 오른쪽 위에서 들어온 채령의 손(x 46–80%, y 40–58%)이 갈색 행주를 든 채 바구니 위에서 **멈칫**. 위 36%는 비어 있는 장판
- characters: MAID_EXTRA · CHAERYEONG(손 클로즈업 상태 토큰 + 변주 `her hand frozen in mid-air above the basket, still holding the brown-stained rag`)
- emotion: 서스펜스 — 잿물이 무엇을 만들지 안다
- props: PROP_BASKET · PROP_WIPECLOTH(갈색, §D-2)
- dialogue_ref (2): ① 채령 thought "빨래터…" / ② 채령 thought "잿물."
- art_space: **위 36%(x 4–96%, y 2–36%)** — 비어 있는 장판(생각 풍선 둘)
- attach: ep03 panel_037, refs/CHAERYEONG_turnaround.png
- fx/note: 나인 = 회청 · 회색, 얼굴 디테일 없음, 이름 있는 인물 색 금지.

### panel_039
- scene_id: S01 / location: LOC_L1_TASTING (옆얼굴 전경 + 멀어지는 뒷모습)
- beat: ⑥ ⟨천 ④⟩ 놓아 보냄 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이, 전경 옆얼굴 close + 원경
- composition: 전경 왼쪽(x 0–48%, y 30–100%) 채령 옆얼굴(화면 오른쪽을 향함), 시선이 나인을 따라감. 중경 오른쪽(x 58–84%, y 46–80%) 바구니(안에 갈색 행주 끝이 살짝)를 든 나인이 뒷걸음으로 문 쪽으로 물러남(작게, 얼굴 없음). 그 뒤 밝은 문틀. 위 34%는 흐린 들보 · 병풍
- characters: CHAERYEONG(FULL 얼굴, NORIGAE_HIDDEN, 표정 ⑦) · MAID_EXTRA(뒷모습, 원경)
- emotion: 선택의 대가
- props: PROP_BASKET(행주 들어감)
- dialogue_ref (2): ① 채령 thought "지금 붙들면…" / ② 채령 thought "더 이상해."
- art_space: **위 34%(x 4–96%, y 2–34%)** — 흐린 들보 · 병풍(생각 풍선 둘)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: —

### panel_040
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR 방향 (로우앵글 미디엄)
- beat: ⑥ 감찰 의심 재점화 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: low-angle medium (권위 = 로우앵글, 감찰에게만 허용)
- composition: 화면 가운데~오른쪽(x 36–86%, 갓 꼭대기 y 32%, 얼굴 y 40–58%) 백 감찰이 장판의 닦인 갈색 자국을 내려다봤다가 채령을 봄. 아래 왼쪽 전경(x 4–40%, y 64–100%) 고개 숙인 채령의 정수리 · 어깨. 바닥(y 86–100%) 닦인 갈색 자국. 위 30%는 어두운 들보 · 천장
- characters: BAEK(FULL, 표정 ③ `suspicious, eyes narrowed, studying her`) · CHAERYEONG(SHORT, NORIGAE_HIDDEN, 표정 ⑦)
- emotion: 차가운 관찰
- props: PROP_SWORD · 닦인 자국(§D-3)
- dialogue_ref (2): ① 백 감찰 dialogue "기미가 장난도 칠 줄 아는군." (위 오른쪽, 꼬리 ↓ 감찰) / ② 채령 dialogue "쓴 걸 싫어하셔서요." (위 왼쪽 조금 아래, 꼬리 ↙ 채령)
- art_space: **위 30%(x 4–96%, y 2–30%)** — 어두운 들보 · 천장(풍선 둘)
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 그의 그림자가 채령 쪽으로 떨어져도 됨.

### panel_041
- scene_id: S01 / location: LOC_L1_TASTING (감찰 얼굴 클로즈업)
- beat: ⑥ 미니 훅 2 ⟨이중의미 E2⟩ · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 close-up
- composition: 백 감찰 얼굴(x 20–80%, 갓 꼭대기 y 36%, 얼굴 y 46–86%), 눈이 천천히 가늘어짐. 흉터 = RIGHT 턱선 아래(화면 왼쪽). 위 34%는 어두운 들보 · 문틀
- characters: BAEK(FULL, 표정 ③ + 변주 `eyes slowly narrowing, a dry, unamused look`)
- emotion: 빈정 — 이미 의심한다
- props: —
- dialogue_ref (2): ① 백 감찰 dialogue "깨끗한 약이면," / ② 백 감찰 dialogue "엎어도 아까울 게 없겠지." (꼬리 ↓ 감찰)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 어두운 들보 · 문틀(풍선 둘, 흉터 · 눈 피함)
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png
- fx/note: 수염 금지(수염은 원 의관뿐).

### panel_042
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (미디엄 와이드)
- beat: ⑥ ⟨복선 H5 2차⟩ 평범한 퇴장 · 긴장 6.5 · gap_after **400**
- size: medium · aspect: **3:4**
- time/light: 4일째 아침 · LIGHT_L1_MORNING + WON_LIGHT(옆선에 창빛)
- camera: 눈높이 medium wide, 문 쪽
- composition: 화면 오른쪽 미닫이 문(x 60–100%)으로 원 의관이 나가며(x 62–84%, 사모 꼭대기 y 30%, 옆선 · 뒷모습) 문턱에서 왕자 쪽으로 가볍게 고개 숙임, **LEFT 손에 닫힌 약상자**. 문 밖(x 86–98%, y 40–70%) 약동이 빈 쟁반을 받음(작게). 화면 왼쪽 먼 쪽(x 10–36%, 머리 y 44–56%) 왕자가 호랑이를 흔듦. 문 안쪽 옆(x 46–60%, 머리 y 32–42%) 민 상궁은 **채령 쪽**(화면 오른쪽 아래)을 봄. 아래 오른쪽 전경(x 66–100%, y 74–100%) 초점 밖 채령의 어깨 · 땋은 머리. 위 28%는 들보 · 문틀 윗부분
- characters: WON(FULL, 상태 "뒷모습 퇴장"(§D-5), 표정 WON ① 옆선) · MIN(SHORT, MIN_HANDS_FOLDED, 표정 ④) · PRINCE(SHORT, 변주 `waving the wooden tiger toy happily`) · EXTRA_MED(문 밖) · CHAERYEONG(뒷모습, 초점 밖, NORIGAE_HIDDEN)
- emotion: 아무 일 없는 아침의 끝
- props: PROP_MEDBOX(LEFT 손) · PROP_HANKY_CLEAN · PROP_TIGER
- dialogue_ref (1): ① 원 의관 dialogue "꿀은 꼭 보내 드리겠습니다, 마마." (49cp, 위 오른쪽, 꼬리 ↘ 의관)
- art_space: **위 28%(x 4–96%, y 2–28%)** — 들보 · 문틀 윗부분. 사모 꼭대기 y 30% 아래
- attach: refs/WON_turnaround.png, refs/MIN_turnaround.png, refs/PRINCE_turnaround.png
- fx/note: **그의 등을 오래 보는 사람 없음**(상궁 시선 = 채령, EP10 몫 보호). 역광 실루엣 금지. 회차에서 가장 긴 여백 앞.

--- SCENE BREAK --- S02 · LOC_L2_CORRIDOR · 4일째 저녁 · LIGHT_L2_EVENING (등롱 꺼짐 · P53부터 SUNSET_LOW)

### panel_043
- scene_id: S02 / location: LOC_L2_CORRIDOR · VIEW_R
- beat: ⑦ 아침의 소동 → 저녁의 고요 ⟨R⟩ · 긴장 6.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + `the paper lantern under the eaves is unlit, pale and plain`
- camera: [R-WIDE] ep01 P05 · ep02 P47과 같은 카메라 · 거리 · 높이
- composition: [R-WIDE 반복] 둥근 황토 기둥 x 22–34%, 기둥의 빈 당번 판 y 48–60%(연두 끈 = **가운데 줄**), 기둥 오른쪽 처마 등롱(x 36–44%, y 10–22%) **꺼짐**, 오른쪽 숙소 창호지 문들, 왼쪽 안마당 · 기와에 주황 노을. **기준 기둥 너머 왼쪽 깊은 쪽(x 0–22%, y 30–60%)에 빨랫줄**, 무지 흰 · 미색 천 6~8장(이 거리 · 각도에서는 모두 흰색 · 미색으로만 읽힘). 회랑 마루 중경(x 44–64%, y 50–90%) 채령이 걸어 들어옴(앞을 향함, 작게). **오른쪽 위(x 48–96%, y 3–24%)는 흰 회벽 · 처마 밑** — 조용히
- characters: CHAERYEONG(FULL 원문 — 작게 · NORIGAE_HIDDEN, 변주 `walking slowly along the veranda, a quiet, tired face`)
- emotion: 또 그 자리
- props: PROP_DUTYBOARD(BLANK, 연두 끈 가운데 줄) · PROP_LANTERN(꺼짐, 무지) · PROP_LAUNDRY_LINE
- dialogue_ref: — 무대사 —
- art_space: silent (단 ep01 P05와 같은 오른쪽 위를 조용하게 유지 — 구도 일치용)
- repeat: R-WIDE ← **ep01 panel_005**(원본) · ep02 panel_047(최근판). 바뀌는 것: 빛 = 저녁 · 등롱 꺼짐 · 빨랫줄 추가 · 채령 혼자 걸어 들어옴
- attach: ep01 panel_005, ep02 panel_047, refs/LOC_L2_R_plate.png
- fx/note: 앞 여백 400 뒤 등장. 구조물 위치(기둥 · 등롱 · 당번 판 · 문 개수)가 ep01 P05와 다르면 REGEN. 빨래가 당번 판 · 등롱을 가리면 REGEN. **연보라 0**(어느 천도). 노을이 분홍 · 보라로 흐르면 REGEN.

### panel_044
- scene_id: S02 / location: LOC_L2_CORRIDOR (어깨 너머 POV, 빨랫줄 쪽)
- beat: ⑦ ⟨천 ⑤⟩ LILAC 1/3 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING — 빨래는 처마 그늘 속(번짐이 주황에 물들지 않게)
- camera: 눈높이 over-the-shoulder POV, 채령 어깨 너머 빨랫줄
- composition: 전경 오른쪽(x 60–100%, y 48–100%) 멈춘 채령의 어깨 · 땋은 머리 · 붉은 댕기(초점 밖). 중경(x 0–80%, y 28–80%) 기둥 사이 빨랫줄에 널린 흰 · 미색 천들 — 그중 **한 장의 크고 거친 미색 삼베 천**(x 30–52%, y 36–68%) 한가운데(x 38–46%, y 48–56%) **엷은 연보랏빛 번짐**, 작지만 분명히. 위 24%(y 2–24%)는 처마 밑면 · 서까래 그늘
- characters: CHAERYEONG(뒷모습 상태 토큰 + NORIGAE_HIDDEN)
- emotion: …!
- props: PROP_LAUNDRY_LINE · PROP_WIPECLOTH + **PROP_WIPECLOTH_LILAC**
- lilac: `the only pale lilac in the image is that one blot in the center of one hemp cloth` + `even in the orange evening light the blot still reads as a cool, very pale lilac, clearly different from the warm cream of the cloth, not pink, not gray`
- dialogue_ref (1): ① 채령 thought "…!" (작게)
- art_space: **위 24%(x 4–96%, y 2–24%)** — 처마 밑면 · 서까래 그늘(천 피함)
- attach: ep03 panel_043, ep03 panel_037, refs/CHAERYEONG_turnaround.png
- fx/note: 연보라는 그 천 한가운데 한 점뿐 — 다른 천 · 노을 · 그림자 · 댕기 · 기둥 0. 번짐이 분홍 · 갈색 · 주황으로 물들면 REGEN. 같은 천임이 읽히게 P37 결 · 크기.

### panel_045
- scene_id: S02 / location: LOC_L2_CORRIDOR (번짐 ECU, 역광)
- beat: ⑦ ⟨회수: EP01 P28 "재에 닿으면 본색"⟩ LILAC 2/3 · 긴장 8 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING — 천 뒤에서 비치는 역광(결이 빛남), 번짐은 차갑고 엷게
- camera: extreme close-up, 역광의 천 결
- composition: 아래 60%(x 4–96%, y 40–100%) 줄에 걸린 삼베 천 면 — 갈색은 완전히 빠지고, 한가운데(x 36–64%, y 52–80%) **엷은 연보라 번짐**이 물 자국처럼(가장자리 흐림). 천 위쪽 가장자리와 새끼줄이 y 40% 근처. 위 40%(y 0–40%)는 천 너머 초점 밖 처마 그늘 · 따뜻한 저녁 하늘
- characters: — (천만)
- emotion: 색이 곧 증거
- props: PROP_WIPECLOTH + **PROP_WIPECLOTH_LILAC**
- lilac: `the only pale lilac in the image is that one blot in the center of one hemp cloth` + `even in the orange evening light the blot still reads as a cool, very pale lilac, clearly different from the warm cream of the cloth, not pink, not gray`
- dialogue_ref (2): ① 채령 thought "잿물을 만나서… 본색이 나왔어." / ② 채령 thought "역시, 그늘보라."
- art_space: **위 40%(x 4–96%, y 2–40%)** — 천 너머 흐린 처마 그늘 · 하늘(생각 풍선 둘, 번짐 피함)
- attach: ep03 panel_044, ep03 panel_037
- fx/note: **회차 번짐 원본** → P58(크기 비율 · 위치 · 색 일치). 번짐 색 = 흰 기 도는 아주 연한 라일락(`#C9B6E4` 기준) — 진한 보라 · 분홍 · 주황 반사 금지. 꽃 · 무늬 없음.

### panel_046
- scene_id: S02 / location: LOC_L2_CORRIDOR (옆얼굴 + 뻗은 손)
- beat: ⑦ 상궁 등장(목소리) · 연보라 0 · 긴장 8 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING (얼굴 오른쪽에 주황빛)
- camera: 눈높이 medium close
- composition: 채령 옆얼굴(x 10–60%, 머리 y 38–54%)이 화면 오른쪽을 향함, 오른손을 화면 오른쪽 밖으로 뻗다가 **허공에서 멈춤**(손 x 58–92%, y 50–62%). **천은 화면 밖.** 그녀 등 뒤(화면 왼쪽)는 처마 그늘 · 기둥. 위 왼쪽(x 4–60%, y 2–32%)은 어두운 처마 밑
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ④ + 변주 `her hand stopped in mid-air, stiffening at a voice behind her`) · MIN(화면 밖)
- emotion: 들켰다
- props: —
- dialogue_ref (1): ① 민 상궁(화면 밖) dialogue "저녁 바람이 차구나, 얘야." (꼬리 ↖ 위 왼쪽 가장자리 = 그녀 등 뒤 처마 그늘)
- art_space: **위 왼쪽(x 4–60%, y 2–32%)** — 채령 등 뒤의 어두운 처마 밑
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 프레임 안에 빨래 · 연보라 0.

### panel_047
- scene_id: S02 / location: LOC_L2_CORRIDOR (상궁 미디엄 + 채령 어깨)
- beat: ⑧ ⟨회수: EP02 P49 "ឮថា…"⟩ 다정한 확인 = 감시 · 긴장 8 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING
- camera: 눈높이 over-the-shoulder (채령 어깨 너머 상궁) — ep02 P50 구도
- composition: [ep02 P50과 같은 배치] 앞쪽 아래 오른쪽(x 58–100%, y 50–100%) 돌아선 채령의 어깨 · 땋은 머리 · 붉은 댕기(초점 밖). 중경 왼쪽~가운데(x 16–56%, 머리 y 34–48%) 민 상궁이 처마 아래 **꺼진 등롱** 밑으로 걸어 나옴, 같은 미소, RIGHT 손에 깨끗한 손수건(y 64–74%). 뒤 왼쪽 깊은 쪽 빨랫줄은 흐림(천 구별 안 됨). 위 오른쪽(x 50–98%, y 2–36%)은 어두운 기둥 · 처마 그늘
- characters: MIN(FULL, MIN_HANDS_FOLDED(RIGHT 손 손수건), 표정 ①) · CHAERYEONG(SHORT 뒷모습 상태 토큰, NORIGAE_HIDDEN)
- emotion: 칭찬의 온도 = 감시의 증거
- props: PROP_HANKY_CLEAN · PROP_LANTERN(꺼짐) · PROP_LAUNDRY_LINE(흐림)
- dialogue_ref (2): ① 민 상궁 dialogue "오늘 탕약은," / ② 민 상궁 dialogue "깨끗했다지, 얘야." (꼬리 ↙ 상궁)
- art_space: **위 오른쪽(x 50–98%, y 2–36%)** — 어두운 기둥 · 처마 그늘(풍선 둘)
- repeat: 어깨 너머 상궁 ← **ep02 panel_050**. 바뀌는 것: 밤 → 저녁 · 등롱 꺼짐 · 뒤 빨랫줄
- attach: ep02 panel_050, refs/MIN_turnaround.png, refs/MIN_expressions.png
- fx/note: 당의 NOT purple(주황 + 그늘에서 burgundy 유지). 얼룩 0. 빨래에 연보라 보이면 REGEN.

### panel_048
- scene_id: S02 / location: LOC_L2_CORRIDOR (클로즈업, 상궁 쪽 낮은 앵글)
- beat: ⑧ ⟨회수: EP02 E4 "무엇이 들었든" 시작⟩ 처음 따져 묻는다 · 긴장 8.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING (주황빛이 얼굴 한쪽)
- camera: 상궁 쪽에서 약간 낮은 앵글, close-up (ep02 P51 구도)
- composition: 채령 얼굴 · 어깨(x 16–84%, 얼굴 y 40–76%)가 상궁을 정면으로 봄, 두 주먹(가슴 아래, y 84–98%). 앞섶 살짝 불룩(천 안 보임). 위 38%는 주황 하늘 · 처마 밑
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ⑥ + 변주 `facing her squarely, fists clenched, demanding an answer for the first time`)
- emotion: 추궁
- props: —
- dialogue_ref (2): ① 채령 dialogue "깨끗하다고만 말하라고 하셨잖아요." / ② 채령 dialogue "…뭐가 들었는지, 알고 계셨죠?" (꼬리 ↓ 채령)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 주황 하늘 · 처마 밑(풍선 둘)
- repeat: 채령 정면 대립 ← **ep02 panel_051**. 바뀌는 것: 밤 → 저녁빛
- attach: ep02 panel_051, refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: shout 아님(낮은 목소리 · 존대).

### panel_049
- scene_id: S02 / location: LOC_L2_CORRIDOR (클로즈업)
- beat: ⑧ ⟨반전: 주력 — 예측 강화⟩ 한패 시인? · 긴장 8.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING (얼굴 화면 왼쪽에 노을빛)
- camera: 정면 close-up (ep02 P59 프레이밍)
- composition: 민 상궁 얼굴(x 6–60%, y 22–96%), 미소 그대로. 화면 오른쪽 세로 띠(x 60–98%, y 2–56%)는 처마 밑 그늘
- characters: MIN(FULL, 표정 ①)
- emotion: 같은 미소의 "알았다"
- props: —
- dialogue_ref (1): ① 민 상궁 dialogue "알았다." (꼬리 ↙ 상궁)
- art_space: **오른쪽 세로 띠(x 60–98%, y 2–56%)** — 얼굴 옆 처마 그늘
- repeat: 요구 사다리 CU ← **ep02 panel_059**. 바뀌는 것: 밤 등롱 → 저녁 해 · 풍선 하나
- attach: ep02 panel_059, refs/MIN_expressions.png
- fx/note: 악역 표정 금지. 손수건 안 보임.

### panel_050
- scene_id: S02 / location: LOC_L2_CORRIDOR (투샷 미디엄)
- beat: ⑧ ⟨반전: 주력 — 미스디렉션 정점⟩ · 긴장 8.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING
- camera: 눈높이 two-shot, 채령 쪽으로 약간 기운 구도
- composition: 화면 오른쪽(x 46–90%, 머리 y 38–52%) 채령이 반 걸음 다가섬, 떨리는 입술, 앞섶 살짝 불룩. 화면 왼쪽(x 8–42%, 머리 y 38–50%) 민 상궁, 같은 미소, 두 손 앞에 손수건(CLEAN). 사이 깊은 회랑. 위 36%는 처마 밑 · 주황 하늘
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ⑤ + 변주 `her voice trembling, half a step closer`) · MIN(SHORT, MIN_HANDS_FOLDED, 표정 ①)
- emotion: 독자 예측을 채령 입으로
- props: PROP_HANKY_CLEAN
- dialogue_ref (2): ① 채령 dialogue "그럼 마마님도…" / ② 채령 dialogue "그 손이랑 한패세요?" (위 오른쪽, 꼬리 ↓ 채령)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 처마 밑 · 주황 하늘(풍선 둘)
- attach: refs/CHAERYEONG_turnaround.png, refs/CHAERYEONG_expressions.png, refs/MIN_turnaround.png
- fx/note: 당의 NOT purple.

### panel_051
- scene_id: S02 / location: LOC_L2_CORRIDOR (상궁 바스트)
- beat: ⑧ ⟨반전: 주력 공개 1⟩ · 긴장 8.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + **SUNSET_HALF**(주황빛이 얼굴 화면 왼쪽 반만)
- camera: 정면 눈높이 bust (ep02 P55 빛 · 프레이밍)
- composition: 민 상궁 바스트(x 12–64%, 얼굴 y 34–64%)가 고개를 살짝 기울임, 다정하게, 입술을 살짝 열고 말함. 노을 쪽(화면 왼쪽) 반만 따뜻, 반은 회청 그늘. LEFT 관자놀이 흰 머리 = 화면 오른쪽. 화면 오른쪽 위(x 50–98%, y 2–38%)는 그늘진 처마 밑
- characters: MIN(FULL, 표정 ③ `gently concerned, head tilted slightly, soft eyebrows, a caring faint smile` + 변주 `lips just parted, speaking softly`)
- emotion: 다정한 설명
- props: PROP_HANKY_CLEAN(RIGHT 손, 보이면)
- dialogue_ref (2): ① 민 상궁 dialogue "네가 거기서 소리쳤으면," / ② 민 상궁 dialogue "놓은 자는 누가 알아챘는지 알았겠지." (꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 50–98%, y 2–38%)** — 얼굴 어두운 쪽의 처마 그늘(풍선 둘)
- repeat: 반쪽 빛 얼굴 ← **ep02 panel_055**. 바뀌는 것: 등롱 → 저녁 해 · 고개 기울임
- attach: ep02 panel_055, refs/MIN_expressions.png, refs/MIN_turnaround.png
- fx/note: 차가운 · 악한 표정 금지(빛만). shout 금지. 그늘은 회청(보라 금지).

### panel_052
- scene_id: S02 / location: LOC_L2_CORRIDOR (정면 클로즈업)
- beat: ⑧ ⟨반전: 주력 공개 2 [고정]⟩ ⟨회수: EP02 P59 E4⟩ · 긴장 9 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_HALF
- camera: 정면 close-up (ep02 P59 · ep01 P59 프레이밍)
- composition: 민 상궁 얼굴(x 6–58%, y 22–96%) 같은 미소, 같은 온도. 노을 쪽(화면 왼쪽) 따뜻. 화면 오른쪽 세로 띠(x 58–98%, y 2–60%)는 처마 그늘
- characters: MIN(FULL, 표정 ①)
- emotion: 그래서였다
- props: —
- dialogue_ref (2): ① 민 상궁 dialogue "그래서 깨끗하다고만 말하라 한 거다." / ② 민 상궁 dialogue "놓는 자가 눈치채지 못하게." (꼬리 ↙ 상궁, read_order 1 · 2)
- art_space: **오른쪽 세로 띠(x 58–98%, y 2–60%)** — 얼굴 옆 처마 그늘(풍선 둘, 위아래)
- repeat: 요구 사다리 CU ← **ep02 panel_059**(원본 ep01 panel_059). 바뀌는 것: 밤 → 저녁 해(반쪽)
- attach: ep02 panel_059, ep01 panel_059, refs/MIN_expressions.png
- fx/note: shout 금지. 손수건 안 보임.

### panel_053
- scene_id: S02 / location: LOC_L2_CORRIDOR (미디엄 풀샷 큰 컷)
- beat: ⑧ ⟨반전: 주력 정점 · Q1 둘째 조각 [고정]⟩ · 긴장 9 · gap_after **240**
- size: large · aspect: **9:16**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + **SUNSET_LOW**(해가 더 기운 붉은 주황) + SUNSET_HALF(몸의 반)
- camera: 정면 눈높이 medium full shot — 앵글로 악역을 만들지 않음
- composition: 회랑 마루 가운데(x 28–70%, 머리 y 30–40%, 발 y 90%) 민 상궁 전신, 반은 붉은 노을빛 · 반은 회청 그늘, 두 손 앞에 깨끗한 손수건, 같은 미소. **긴 그림자**가 마루를 따라 화면 오른쪽 아래로 길게(x 50–100%, y 86–100%). 뒤 회랑 깊이 · 꺼진 등롱 · 왼쪽 깊은 쪽 아주 작고 흐린 빨랫줄(천 구별 안 됨). 위 28%(y 2–28%)는 그늘진 처마 밑 · 서까래
- characters: MIN(FULL, MIN_HANDS_FOLDED, 표정 ①)
- emotion: 같은 얼굴, 다른 의미 — 사냥꾼
- props: PROP_HANKY_CLEAN · PROP_LANTERN(꺼짐) · PROP_LAUNDRY_LINE(멀리 흐림)
- dialogue_ref (2): ① 민 상궁 dialogue "나는 놓는 사람이 아니다, 얘야." / ② 민 상궁 dialogue "놓는 자를 사냥하는 중이지." (꼬리 ↓ 상궁)
- art_space: **위 28%(x 4–96%, y 2–28%)** — 그늘진 처마 밑 · 서까래(풍선 둘). 머리 y 30% 아래
- attach: refs/MIN_turnaround.png, refs/MIN_expressions.png, ep03 panel_043
- fx/note: **회차 반전 정점.** 노을 = 붉은 주황(분홍 · 보라 금지), 그늘 = 회청. 당의 burgundy 유지 — 붉은 빛에서 보라로 흐르면 REGEN. 위협적 그림자 얼굴 금지.

### panel_054
- scene_id: S02 / location: LOC_L2_CORRIDOR (ECU)
- beat: ⑧ ⟨회수: 미니 "다른 손" ↔ 주력⟩ · 긴장 8.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW
- camera: extreme close-up, 눈 (ep03 P20 프레이밍)
- composition: 채령의 눈(x 10–90%, y 46–86%), 동공에 노을 주황 점 하나. 위 40%는 흐린 머리칼 · 처마 그늘
- characters: CHAERYEONG(FULL 눈, 표정 ④)
- emotion: 두 반전이 맞물린다
- props: —
- dialogue_ref (2): ① 채령 thought "다른 손을…" / ② 채령 thought "쫓고 있었어?"
- art_space: **위 40% 띠(x 4–96%, y 2–40%)** — 흐린 어두운 머리칼 · 그늘
- repeat: 눈 ECU ← **ep03 panel_020**(회차 안 원본) · ep02 panel_054. 바뀌는 것: 아침 → 저녁빛, 동공 주황 점
- attach: ep03 panel_020, ep02 panel_054, refs/CHAERYEONG_expressions.png
- fx/note: 동공 반사 = 주황(보라 금지).

### panel_055
- scene_id: S02 / location: LOC_L2_CORRIDOR (투샷 → 상궁 지나감)
- beat: ⑧ ⟨회수: EP02 P50 E3 "입은 다물고"⟩ ⟨이중의미 E3: 코⟩ 대가 = 사냥개 · 긴장 8.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW
- camera: 눈높이 two-shot medium
- composition: 화면 오른쪽(x 56–90%, 머리 y 40–52%) 그 자리에 굳어 선 채령(앞섶 살짝 불룩). 화면 가운데~왼쪽(x 26–60%, 머리 y 36–48%) 민 상궁이 채령 곁을 지나가며 RIGHT 손으로 그녀 어깨를 가볍게 토닥임, 몸은 이미 화면 왼쪽 회랑 끝을 향함(3/4). 손수건은 LEFT 소맷부리에 접혀 꽂힘(CLEAN). 왼쪽 뒤 회랑이 노을 속으로 이어짐. 위 34%는 처마 밑 · 붉은 주황 하늘
- characters: MIN(FULL, MIN_PAT_PASS, 표정 ② `the same calm, kind closed-lip smile, seen from a three-quarter angle`) · CHAERYEONG(SHORT, NORIGAE_HIDDEN, 변주 `standing very still, stunned`)
- emotion: 칭찬 = 너는 내 사냥개
- props: PROP_HANKY_CLEAN(LEFT 소맷부리)
- dialogue_ref (2): ① 민 상궁 dialogue "입은 다물고, 탕약은 엎었구나. 잘했다." / ② 민 상궁 dialogue "사냥에는 코가 필요하거든, 얘야." (꼬리 ↙ 걸어가는 상궁)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 처마 밑 · 하늘(풍선 둘)
- attach: refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png, refs/MIN_expressions.png
- fx/note: 상궁은 이 컷 뒤 프레임에 다시 나오지 않는다. 얼룩 0.

### panel_056
- scene_id: S02 / location: LOC_L2_CORRIDOR (채령 등 너머 빨랫줄)
- beat: ⑨ ⟨천 ⑥⟩ 없는 것이 충격 · 긴장 8.5 · gap_after **240**
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW
- camera: 눈높이, 채령 등 너머 빨랫줄 medium (ep03 P44 프레이밍)
- composition: [P44와 같은 배치] 전경 오른쪽(x 56–98%, y 44–100%) 빨랫줄로 돌아선 채령의 뒷모습 · 땋은 머리. 중경(x 0–76%, y 26–72%) 같은 흰 · 미색 천들 — **그 천이 걸려 있던 자리(x 28–42%)가 비어 있고 줄만 처짐**
- characters: CHAERYEONG(뒷모습 상태 토큰 + NORIGAE_HIDDEN)
- emotion: 사라졌다
- props: PROP_LAUNDRY_LINE + PROP_LAUNDRY_GAP
- dialogue_ref: — 무대사 —
- art_space: silent
- repeat: 빨랫줄 ← **ep03 panel_044**. 바뀌는 것: 그 천만 없음 · 빛이 더 붉음
- attach: ep03 panel_044, refs/CHAERYEONG_turnaround.png
- fx/note: **연보라 0**(남은 천 어디에도). 빈 자리가 한눈에 읽히게.

### panel_057
- scene_id: S02 / location: LOC_L2_CORRIDOR (와이드, 회랑 깊이)
- beat: ⑨ ⟨걸음 3칸 시작 [고정]⟩ ⟨회수: P26⟩ · 긴장 9 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW — 노을빛이 감찰 발치에서 끊김
- camera: 눈높이 wide, 전경 뒤통수 + 원거리
- composition: 전경 오른쪽(x 50–96%, y 54–100%) 채령 뒤통수 · 어깨(초점 밖). 회랑 끝 중경(x 22–38%, 갓 꼭대기 y 30%, 목화 y 62%) 기둥 그림자 속에 선 **백 감찰**(작게, 그림자 속이지만 갓 · 넓은 어깨 · LEFT 허리 환도가 읽힘), RIGHT 손에 **작게 접힌 천**(바깥 미색 면만, 색 안 읽힘). 노을빛 띠가 그의 발 앞 마루에서 끊김. 위 왼쪽(x 4–60%, y 2–26%)은 처마 그늘 · 서까래
- characters: BAEK(SHORT, BAEK_FAR_SHADOW, 표정 ①) · CHAERYEONG(뒷모습 상태 토큰 + NORIGAE_HIDDEN)
- emotion: 잡혔다
- props: PROP_WIPECLOTH_FOLDED · PROP_SWORD
- dialogue_ref (1): ① 백 감찰 dialogue "깨끗하다고 했지." (꼬리 ↓ 먼 감찰)
- art_space: **위 왼쪽(x 4–60%, y 2–26%)** — 감찰 머리 위 처마 그늘 · 서까래
- attach: refs/BAEK_turnaround.png, ep03 panel_043, refs/CHAERYEONG_turnaround.png
- fx/note: **연보라 0 — 접힌 천에 연보라가 조금이라도 보이면 REGEN**(PROP_WIPECLOTH_FOLDED, 접힌 바깥 미색 면만). 구조물 위치는 R 앵글 체계(기둥 · 문 · 등롱 꺼짐) 그대로.

### panel_058
- scene_id: S02 / location: LOC_L2_CORRIDOR (손 + 천 인서트 큰 컷)
- beat: ⑨ ⟨걸음 3칸 [고정]⟩ ⟨회수: 천 ⑦ · P02 "거짓말"⟩ LILAC 3/3 · 긴장 9 · gap_after 20
- size: large · aspect: **9:16**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW — 붉은 노을이 손 · 소매에, **천은 노을을 등진 역광**(번짐이 차갑고 엷게 읽히게)
- camera: 가슴 높이 insert, 정면
- composition: 감찰의 큰 두 손(검은 좁은 소매)이 천 위쪽 두 모서리를 잡고(x 12–26% · 74–88%, y 28–38%) 천을 펼쳐 듦 — 천(x 10–90%, y 30–92%)은 P37 · P45와 같은 크고 거친 미색 삼베. 한가운데(x 40–60%, y 54–70%) **엷은 연보라 번짐**, P45와 같은 모양 · 크기 비율(천 폭의 약 1/4) · 색. 위 24%(y 0–24%)는 천 너머 어두운 처마 그늘
- characters: BAEK(BAEK_HANDS_CLOTH — 손 · 소매만)
- emotion: 증거
- props: PROP_WIPECLOTH + **PROP_WIPECLOTH_LILAC**
- lilac: `the only pale lilac in the image is that one blot in the center of one hemp cloth` + `even in the orange evening light the blot still reads as a cool, very pale lilac, clearly different from the warm cream of the cloth, not pink, not gray`
- dialogue_ref (1): ① 백 감찰 dialogue "거짓말이었다." (꼬리 ↓ 위쪽 바깥 = 프레임 밖 감찰 얼굴 쪽)
- art_space: **위 24%(x 4–96%, y 2–24%)** — 천 너머 어두운 처마 그늘(번짐 · 손 피함)
- repeat: 번짐 ← **ep03 panel_045**(원본). 바뀌는 것: 1:1 ECU → 9:16 손 + 천 전체 · 붉은 노을
- attach: ep03 panel_045, ep03 panel_037, refs/BAEK_turnaround.png
- fx/note: 번짐이 노을에 물들어 분홍 · 주황 · 갈색이 되거나 진한 보라면 REGEN. 손 · 소매 · 하늘 · 그림자에 보라 0. 입궁 패 없음.

### panel_059
- scene_id: S02 / location: LOC_L2_CORRIDOR (감찰 얼굴 클로즈업)
- beat: ⑨ ⟨걸음 3칸 완결 [고정 클리프 대사]⟩ · 긴장 9 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW (얼굴 한쪽에 붉은빛)
- camera: 눈높이 close-up, 한 걸음 다가옴
- composition: 백 감찰 얼굴(x 28–90%, 갓 챙 y 24–34%, 얼굴 y 34–80%), 한 걸음 다가서며 앞 아래(x 4–42%, y 66–100%) 초점 밖 펼친 **LEFT 손바닥**을 카메라(채령) 쪽으로 내밂 — 손바닥은 **비어 있다**. 천은 프레임 밖(RIGHT 손). 위 22%(y 2–22%)는 어두운 처마 그늘
- characters: BAEK(FULL, BAEK_PALM_OUT, 표정 ② `cold and level, brows drawn together, chin slightly raised, pronouncing judgment`)
- emotion: 결정 대사
- props: PROP_SWORD(보이면)
- dialogue_ref (1): ① 백 감찰 dialogue "…네 입궁 패를 보자." (꼬리 ↓ 감찰)
- art_space: **위 22%(x 4–96%, y 2–22%)** — 어두운 처마 그늘. 갓 챙 y 24% 아래
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png
- fx/note: **입궁 패 그리지 않음**(손바닥에 아무것도 없음). 흉터 RIGHT 턱(화면 왼쪽).

### panel_060
- scene_id: S02 / location: LOC_L2_CORRIDOR (클로즈업)
- beat: ⑨ 결과 보류 클리프행어 · 긴장 9 · gap_after **320**(끝)
- size: large · aspect: **9:16**
- time/light: 4일째 저녁 · LIGHT_L2_EVENING + SUNSET_LOW (붉은빛이 얼굴 한쪽만)
- camera: 눈높이 face close-up, 세로 큰 컷 (ep02 · ep01 P60 프레이밍)
- composition: 채령 얼굴(x 14–86%, y 20–56%), 대답 없음, 시선은 화면 밖(감찰 쪽). 아래(x 30–72%, y 62–84%) **RIGHT 손이 LEFT 가슴 앞섶 위에서 멈춤** — 펼친 손, 숨긴 흰 꾸러미 위(천 안 보임). 위(y 0–18%)는 어두운 처마 그늘. **아래 12%(y 88–100%)는 평평한 어두운 띠**(끝 캡션)
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN + HAND_ON_BUNDLE(`her RIGHT hand stopped flat on the front of her jacket over her LEFT chest, over the hidden bundle`), 표정 ⑧ `frozen, face drained of color, eyes fixed and unblinking, lips closed tight`)
- emotion: 결과 보류 — 침묵
- props: —
- dialogue_ref: 대사 없음 · narration 캡션 1 — KM 캡션 "— នៅមានតក្នុងភាគទី ៤ —"
- art_space: **아래 띠(x 0–100%, y 88–100%)** — 평평한 어두운 배경(캡션 자리)
- repeat: 마지막 큰 컷 ← **ep02 panel_060**(원본 ep01 panel_060). 바뀌는 것: 주먹 → 앞섶 위에서 멈춘 펼친 손 · 밤 → 붉은 저녁
- attach: ep02 panel_060, ep01 panel_060, refs/CHAERYEONG_expressions.png
- fx/note: 회차 마지막 큰 컷. **입궁 패 · 노리개 없음.** 캡션 띠는 비워 둘 뿐 글자를 그리지 않는다.

---

## H. 점검

- [x] 패널 수 **60**(≥50), panel_001–panel_060 연속, 대본 P01–P60과 1:1
- [x] 모든 패널에 scene_id / location(LOC_*) / time·light. 같은 씬 = 같은 장소 · 시간대 · 실내외. SCENE BREAK 1곳(S01→S02 장소 · 시간). 새 LOC 없음
- [x] `art_space` 기재 **55패널**: 대사 · 생각 54(2풍선 32: P02 · P03 · P07 · P10 · P12 · P13 · P14 · P18 · P19 · P20 · P21 · P22 · P23 · P24 · P25 · P28 · P29 · P34 · P35 · P38 · P39 · P40 · P41 · P45 · P47 · P48 · P50 · P51 · P52 · P53 · P54 · P55 / 1풍선 22: P01 · P04 · P05 · P06 · P08 · P09 · P11 · P16 · P17 · P26 · P30 · P31 · P32(+sfx) · P33 · P36 · P42 · P44 · P46 · P49 · P57 · P58 · P59) + 캡션만 P60. 무대사 silent 5: P15 · P27 · P37 · P43 · P56 — script-editor 통계(무대사 6 = 이 5 + P60)와 일치
- [x] 생각 풍선 27(P01 · P02×2 · P13 · P18×2 · P19×2 · P20×2 · P21×2 · P22×2 · P23×2 · P24×2 · P38×2 · P39×2 · P44 · P45×2 · P54×2) · 대사 59 · sfx 1(P32) · 캡션 1(P60). 3풍선 패널 없음
- [x] 화면 밖 · 가장자리 화자: P12(의관 뒤통수 ↙) · P14 · P25 · P28(의관 왼쪽 가장자리) · P46(상궁, ↖ 그녀 등 뒤 처마 그늘) · P58(감찰 얼굴 프레임 밖 ↑). sfx 자리: P32(물줄기 위 오른쪽)
- [x] **연보라 정확히 3패널 · `lilac:` 줄 3개(P44 · P45 · P58)** — 모두 PROP_WIPECLOTH_LILAC(잿물 빤 행주 한가운데). 그 밖 57패널 0. **STAIN 0** — 손수건 CLEAN(P03 · P07 · P21 · P42 · P47 · P50 · P51 · P53 · P55) 또는 안 보임. 민 상궁 당의 `deep wine-red plum, NOT purple`(P03 · P07 · P21 · P47 · P50 · P51 · P53 메모)
- [x] **노리개:** 전 패널 허리에 없음 — 채령이 보이는 모든 컷 characters 줄에 `NORIGAE_HIDDEN`(ep02 §D-1 원문). 흰 싸개 = 앞섶 안 LEFT 가슴(PROP_NORIGAE_WRAP), 모서리는 P02만. 그 위 RIGHT 손 P01 · P02 · P60
- [x] **천 두 종류 구별:** 흰 싸개(작고 순백 · 매끈, P02) vs 행주(크고 미색 · 거침, P01 접힘 → P36–P39 갈색 → P44 · P45 · P58 연보라 · P57 접힘). 같은 행주임이 읽히게 P37 결 원본을 P38 · P44 · P45 · P58에 첨부
- [x] 글이 적힐 물건 BLANK: 탕약 그릇 · 뚜껑(가는 회녹 끈 매듭, 인장 · 종이 없음) · 쟁반 · 약상자(닫힘) · 행주 · 빨래 · 바구니 · 당번 판 · 패 · 등롱 · 병풍 · 향로. **입궁 패 0**(P59 손바닥 비어 있음, P60 없음). `env` 0
- [x] 은침 끝까지 은빛(P15 · P16, EP02 변색 예외 없음). 탕약 짙은 갈색, 보라 · 윤기 0
- [x] **원 의관:** 밝은 빛 · 눈높이 · 3/4 · 가장자리 · 뒷모습만(P06 · P07 · P09 · P10 · P12 · P14 · P25 · P26 · P28 · P35 · P42). 로우 · 반그늘 · 역광 · 정면 극단 CU · 의심 리액션 0. P13 리액션 없음. "다른 손" 생각(P21–P23)은 그릇 · 쟁반 위에서만. 약상자 닫힘, LEFT 손. 그의 등을 오래 보는 구도 0(P42 상궁 시선 = 채령)
- [x] **엑스트라:** 이름 없는 내의원 약동(EXTRA_MED, 회녹, 날개 없는 검은 천 모자, 수염 · 약상자 없음) P06(의관 뒤) · P07 · P42(문 밖) / 나인(회청, 얼굴 없음) P38 · P39. 홍 숙수 0
- [x] 고정 앵글 · 메아리: P43 ← ep01 P05(+ep02 P47) · P03 ← ep02 P05 · P14 ← ep02 P13 · P16 ← ep01 P15 · P19 ← ep02 P22(ep01 P20) · P20 ← ep02 P23 · P21 ← ep02 P21 · P24 ← ep02 P24(ep01 P23) · P47 ← ep02 P50 · P48 ← ep02 P51 · P49 · P52 ← ep02 P59 · P51 ← ep02 P55 · P54 ← ep03 P20 · P60 ← ep02 P60(ep01 P60) · 회차 안 P06 그릇 · P37 행주 · P45 번짐 · P44 → P56. 짝은 같은 비율(P58만 1:1 → 9:16, §B 이유)
- [x] 큰 컷 · 정지: P01 · P06 · P24 · P26 · P32 · P43 · P53 · P58 · P60. 반전 연쇄(P19–P23, P45–P52)는 SQ · 짧은 gap. 긴 여백: P27 · P42(400) · P53 · P56 · P60
- [x] attach 패널당 3장 이내, 카드 이름 = `refs/ref_prompts.md` 그대로 + `refs/WON_turnaround.png`(EP03 새 카드)

## I. 하류 인계 (팀 메시징 대체)

| 대상 | 가져갈 것 |
|---|---|
| **letterer** | 각 패널 `art_space`(그대로 lettering spec `art_space`로) · `dialogue_ref`의 read_order · 꼬리 방향 · 가장자리/화면 밖 화자(P12 ↙ 의관 뒤통수 · P14 · P25 · P28 ← 왼쪽 가장자리 의관 · P46 ↖ 등 뒤 처마 · P58 ↑ 프레임 밖 감찰) · sfx 자리(P32 물줄기 위 오른쪽, `ព្រូស!`) · P60 캡션 띠 · §F gap_after. 최장 풍선 P10②(49cp) · P42(49cp) · P07②(48cp)은 `w` 넉넉히. P31 · P32 "어흥"은 shout 판단, 민 상궁 shout 금지 |
| **prompt-smith** | §A 장소 표(LOC · VIEW · LIGHT) + **L1 토큰 덮어쓰기**(상 구절 → PROP_TABLE_TONIC, 향 구절 → 그 컷의 향 상태, 난초 그릇 · 식초 없음) · §D 상태 토큰 영문(특히 **D-1 NORIGAE_HIDDEN: 전 패널에서 FULL/SHORT 노리개 구절 교체**, D-2 행주 · 빨래(**`lilac:` 문장은 P44 · P45 · P58에만**), D-3 탕약 · 김 · 향 · 은침, D-4 약상자 · 약동, D-5 **WON = character-sheets §11-1 FULL/SHORT · §11-2 표정 ①–⑥ · 상태 원문**, D-6 빛 변주) · `aspect` · `characters` · `props` · §C 메아리(원본 PNG 경로, 다시 그림) · `attach` · P24 Avoid 줄 예외(`extra panels`) · 각 art_space를 style-bible §8 영문 문장으로 · 탕약 = character-sheets §11-3 `PROP_TONIC_SET`/`PROP_TONIC_OPEN` 원문(가는 회녹 끈 매듭, 그릇 + 쟁반 한 세트 P06–P42) · 약상자는 LEFT 손 또는 장판 바닥 LEFT 곁(상 위 금지) · P44 · P45 · P58 `lilac:` 줄은 저녁빛 덧붙임 포함 |
| **panel-validator** | §C 짝 비교 기준(좌표) · **연보라는 P44 · P45 · P58의 행주 번짐만**(다른 곳에 보이면 REGEN, 세 패널 번짐이 분홍 · 주황 · 진보라면 REGEN, P45 ↔ P58 모양 · 크기 · 색 일치) · STAIN 0 · **어느 컷이든 허리 노리개 보이면 REGEN** · 흰 싸개(P02)와 행주가 닮으면 REGEN · 은침 끝까지 은빛(회색 끝 = REGEN) · 탕약 갈색 · **원 의관 로우 · 반그늘 · 역광 실루엣 · 악역 표정이면 REGEN**, 관복이 연두 · 올리브 · 민트 · 회청이면 REGEN · 약동에 수염 · 사모 날개 · 약상자 있으면 REGEN · 입궁 패 보이면 REGEN · BLANK 물건 · art_space 비었는지 · 노을이 분홍 · 보라면 REGEN |
| **art-director** | character-sheets §11(WON)에 맞췄다: FULL/SHORT · 표정 ①–⑥ · 상태 · PROP_TONIC_SET/OPEN · PROP_DECOCTION · PROP_WIPECLOTH 4상태 · PROP_NORIGAE_WRAP · PROP_MEDBOX · EXTRA-MED 원문, `refs/WON_turnaround.png`(#17). 새 LOC 요청 없음. 이 샷리스트 안의 가변 문구(SUNSET_HALF · 김 단계 · PROP_TABLE_TONIC · MIN/BAEK/PRINCE 상태)는 시리즈 자산으로 남기려면 character-sheets · style-bible에 옮겨 적는다(이 실행에서는 수정하지 않았다) |
| **continuity-manager** | EP03 끝 상태: 노리개 = 흰 천에 싸서 저고리 앞섶 안(허리 없음, 전 패널) · 연보랏빛 행주 = **백 감찰 RIGHT 손** · 손수건 CLEAN, 상궁 LEFT 소맷부리 · 회랑 등롱 꺼짐 · 당번 판 연두 끈 가운데 줄 · 빨랫줄에 그 천 자리 빔 · 원 의관 첫 등장(약상자 닫힘) · 4일째 저녁 끝. 입궁 패 미등장(EP04 첫 화면) |
| **사용자 (Flow 순서)** | ① `refs/WON_turnaround.png`(원 의관 레퍼런스) → ② EP01 · EP02 원본(ep01 panel_005 · 015 · 020 · 023 · 059 · 060 / ep02 panel_001 · 005 · 013 · 015 · 021 · 022 · 023 · 024 · 047 · 048 · 049 · 050 · 051 · 054 · 055 · 059 · 060) → ③ EP03 번호 순서(회차 안 원본 P06 · P14 · P15 · P20 · P36 · P37 · P43 · P44 · P45가 먼저 오게) |
