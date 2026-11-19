# EP02 샷리스트 「은침이 검게 변한 아침」 (시리즈 「독은 제가 먼저 먹겠습니다」 / KM «ថ្នាំពុល ខ្ញុំសូមភ្លក់មុន») — panel-director

- 작성: panel-director · 기준일 **2026-11-18** · EP02 Phase 4 step 3 · **v1** (Flow-by-hand + Khmer edition)
- 입력: `03_episode/ep02_script_final.md`(60패널 최종, **기준 문서**) · `03_episode/ep02_beatsheet.md`(§3 시간 큐 · §4 글자 없는 소품 · 노리개 위치 변경 · §6-3 큰 컷/여백 · §6-4 말풍선 자리) · 형식 기준 `04_visual/ep01_shotlist.md` · 시리즈 자산(**읽기만, 수정 없음**): `04_visual/style-bible.md` v1 · `04_visual/character-sheets.md` v1 · `04_visual/refs/ref_prompts.md`(카드 이름) · `webtoon-khmer-edition` §4
- 다음 독자: **letterer**(`art_space` → lettering spec `art_space` · `place`, `gap_after`) → **prompt-smith**(Flow 프롬프트 · `attach`) → 사용자(Flow) → panel-validator
- 총 **60패널** (panel_001–panel_060 = 대본 P01–P60, 번호 · 순서 동일). 하한 50 충족. 팀 메시징 없는 실행이라 전달 사항은 끝의 §I에 모았다.

## 읽는 법

- **좌우:** `화면 왼쪽/오른쪽` = 화면 기준. `LEFT/RIGHT`(대문자) = 인물 · 사물 **자신의** 좌우(style-bible 표기). 정면 그림에서 채령의 RIGHT 허리 노리개는 화면 왼쪽, 민 상궁의 LEFT 관자놀이 흰 머리는 화면 오른쪽, 백 감찰의 RIGHT 턱 흉터는 화면 왼쪽에 보인다.
- **좌표:** `x`/`y` = 패널 왼쪽 위에서 잰 % (x 가로, y 세로). 근사치다.
- **`art_space`:** 그 컷에서 **그림이 조용한 배경으로 비워 둘 자리**(뷰어가 크메르어 말풍선 · 효과음 · 캡션을 그 위에 그린다). 얼굴 · 손 · 은침(특히 검은 끝) · 노른자 · 그릇 테두리 · 소매 속 손 · 해독환 · 흰 천 · 손수건 · 노리개 · 당번 판 · 등롱은 그 자리에 두지 않는다. 대사 · 생각 · 효과음 · 캡션이 있는 **52패널 모두** 기재(대사/생각 51 + 캡션만 P60). 무대사 8패널은 `silent`(고정 앵글 반복 P47은 원본과 같은 자리를 조용히 둔다).
- **Khmer edition:** 어떤 이미지에도 글자 · 숫자 · 말풍선 · 가짜 글씨 · 한자 문양이 없다. 글이 적힐 만한 물건 — **당번 판 · 당번 패 · 등롱 · 병풍 · 그릇 · 뚜껑 · 향로 · 흰 천 · 해독환** — 은 **빈 면**(BLANK, 무늬 · 각인 없음)으로 그린다. EP02에는 물건 위 글씨(`env`)가 **없다**.
- **characters:** 가장 크게 보이는 1명 = **FULL**, 나머지 = **SHORT**, 손 · 뒷모습 · 실루엣 = 상태 토큰. 표정은 character-sheets 번호(예: 채령 ④)와 그 영문 문장. 시트에 없는 표정은 `변주:` 영문 구절(외형은 그대로).
- **time/light:** style-bible §3-2 LIGHT 토큰 이름. 늦은 아침(S02)만 `LIGHT_L1_MORNING` + §D-6 변주구(새 토큰 아님).
- **EP02 상태 토큰:** §D에 정의(이 샷리스트 안에서만 쓰는 **가변** 상태 문구). 시리즈 문서(style-bible · character-sheets)는 바꾸지 않았다. art-director가 원하면 character-sheets에 옮겨 적는다(§I).
- **repeat / echo:** 고정 앵글 · 구도 메아리. EP01 원본 패널을 첨부하고 **다시 그린다**(PNG 복사 금지 — flow_tool은 md5 중복을 거른다). 바뀌는 것만 `repeat:` 줄에 적었다.
- **attach:** 사용자가 Flow에 붙일 이미지(패널당 3장 이내). 표기:
  - `refs/<카드명>.png` = 시리즈 레퍼런스 카드(`refs/ref_prompts.md`의 카드 이름 그대로).
  - `ep01 panel_NNN` = EP01 원본 패널 = `_workspace/05_panels/ep01/panel_NNN.png` (**EP01 패널이 먼저 있어야 한다** — §C).
  - `ep02 panel_NNN` = 이 회차에서 먼저 만든 패널 = `_workspace/05_panels/ep02/panel_NNN.png`.
  - prompt-smith는 `attach:` 줄에 위 실제 경로를 쓴다(flow_tool은 프로젝트 루트 기준 경로를 찾는다).

### EP02 색 규칙 [고정]

- **연보라(은맹색 `#C9B6E4`) 0패널.** 이 회차에는 그늘보라 · 은맹이 재나 잿물을 만난 물건이 없다(beatsheet §0-4 · 부록 A-2). 그래서 **어느 패널에도 `lilac:` 줄이 없다.** 보라 · 바이올렛 · 라벤더 · 라일락 · 모브 0(의상 · 밤하늘 · 그림자 · 은침 변색 · 노른자 죽 · 흰 천 · 해독환 · 등롱빛 반사 포함).
- **손수건 얼룩(PROP_HANKY_STAIN) 0패널.** 민 상궁 컷은 전부 **PROP_HANKY_CLEAN**(얼룩 모서리 안쪽으로 접힘) 또는 손수건이 안 보인다.
- **민 상궁 당의 = `deep wine-red plum (dark mulberry, almost burgundy)`, NOT purple.** 밤 컷(P49–P59)에서 등롱 주황 + 남청 그림자가 겹치면 Flow가 보라로 밀기 쉽다 → 필요하면 `a long deep burgundy wine-red dangui jacket`으로 당긴다(character-sheets §3 색 규칙, 단어 순서만).
- **은침 변색 = 끝부분만 연기 낀 회흑색:** `smoky gray-black tarnish on the tip only, no purple, no blue`. 위쪽은 차가운 은빛 그대로. EP04의 "새까만" 은침과 구별되게 **새까맣게 · 전체를** 칠하지 않는다(§D-2).
- 밤 = `deep navy-blue night (not purple)`(LIGHT_L2_NIGHT 원문). 노른자 죽 = 따뜻한 노랑, 흰 천 = 순백, 해독환 = 검정.

---

## A. 장소 목록 (scene_id ↔ LOC ↔ VIEW ↔ 배경 한 줄)

| scene_id | 패널 | location | 주 VIEW | 시간 · 조명 | 배경 한 줄 |
|---|---|---|---|---|---|
| S01 | P01–P42 | LOC_L1_TASTING | VIEW_L1_MAIN · VIEW_L1_DOOR · VIEW_L1_TABLE | 3일째 아침 · LIGHT_L1_MORNING | 왕자 처소 시식방(EP01과 같은 방 · 같은 구조): 화면 왼쪽 창호지 미닫이(낮고 옅은 아침빛), 장판, 무지 병풍, 오른쪽 벽 미닫이 문, 가운데 옻칠 상(P01–P09 **빈 상** → P10부터 **아침상** + 난초 봉오리 손잡이 왕자 그릇), 앞 모서리 놋 향로 |
| S02 | P43–P46 | LOC_L1_TASTING | VIEW_L1_MAIN (가깝게) | 3일째 늦은 아침 · LIGHT_L1_MORNING + 늦은 아침 변주구(§D-6) | 같은 방, 사람들이 빠져 넓어 보임. 빛이 조금 높아져 그림자가 짧다. 상 위 빈 왕자 그릇 · 빈 기미 그릇, 향은 다 탐 |
| S03 | P47–P60 | LOC_L2_CORRIDOR | VIEW_R(P47) · 기둥 옆 근사(P49–P51 · P56–P58) · 클로즈업 | 3일째 밤 · LIGHT_L2_NIGHT (+ LIGHT_LANTERN_FACE) | 숙소 앞 회랑(EP01과 같은 구조): 짙은 남청 밤, 화면 왼쪽 1/3 기준 기둥 + 빈 당번 판(연두 끈 = **가운데 줄**), 기둥 오른쪽 처마의 **켜진** 등롱 하나, 오른쪽 흰 회벽 + 창호지 문, 왼쪽 안마당 · 기와, 차가운 달빛 |

- 같은 scene_id 안에서는 같은 LOC 문장 + 같은 LIGHT 토큰을 쓰고 컷마다 VIEW 문장만 바꾼다. 장소 · 시간 전환은 `--- SCENE BREAK ---`에서만(2곳: P42→P43 시간, P46→P47 장소 · 시간).
- S01 · S02는 EP01 S01 · S03과 **같은 방 · 같은 구조 · 같은 방향**(창 = 화면 왼쪽, 채령 = 상의 화면 오른쪽, 문 = 오른쪽 벽, 감찰 = 문가, 상궁 = 문지방, 나인 = 문 안쪽 바닥). S03은 EP01 S06과 같은 밤 회랑.
- **새 LOC 필요 없음.** L3 약재고 미사용. 회상 이미지 없음(art-director 추가 요청 없음).
- **L1 아침상:** `PROP_TABLE_BREAKFAST` + `PROP_PRINCE_BOWL`(가운데) + `PROP_YOLK_PORRIDGE`(뚜껑 열린 뒤). 점심 수라상 · 식초 종지는 **없다**(EP01 S03과 구별 — 3일째 아침 큐).

## B. 비율 · 크기

| size | Flow aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed (TALL) | **9:16** | P01 · P10 · P17 · P24 · P31 · P47 · P53 · P60 | **8** |
| small / insert / close-up (SQ) | **1:1** | P02 · P04 · P15 · P16 · P20 · P22 · P23 · P27 · P28 · P30 · P35 · P40 · P45 · P48 · P52 · P54 · P59 | **17** |
| medium (STD) | **3:4** | 나머지 (P03 · P05–P09 · P11–P14 · P18 · P19 · P21 · P25 · P26 · P29 · P32–P34 · P36–P39 · P41–P44 · P46 · P49–P51 · P55–P58) | **35** |

- 큰 컷 = beatsheet §6-3의 6개(P01 · P17 · P31 · P47 · P53 · P60) + 선택 와이드 P10 + 3단 분할 P24(EP01 P23 메아리라 같은 9:16).
- EP01 원본과 짝인 컷은 **원본과 같은 비율:** P22 = ep01 P20 (1:1) · P23 = ep01 P21 (1:1) · P24 = ep01 P23 (9:16) · P47 = ep01 P05/P48 (9:16) · P54 = ep01 P51 (1:1) · P58 = ep01 P58 (3:4) · P59 = ep01 P59 (1:1) · P60 = ep01 P60 (9:16). 예외 하나: **P55는 ep01 P53(9:16)의 빛 · 프레이밍 메아리지만 3:4** — 바로 앞 P53이 9:16 큰 컷이라 연달아 세로 큰 컷을 피했다.
- 16:9 없음. Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데에 모은다(`art_space` 비율 위치는 그대로).

## C. 고정 앵글 · 구도 메아리 — EP01 원본 → EP02

**만드는 순서:** EP02 반복 컷은 **EP01 원본 PNG가 있어야** 제대로 만든다. EP01이 아직 `WAITING_FOR_IMAGES`면 EP01 패널을 먼저 끝낸다(적어도 아래 원본 열의 패널). EP02 안의 원본(P04 · P17 · P23)은 번호 순서대로 만들면 자연히 먼저다.

| ID | 원본 (attach) | EP02 | 비율 | 같아야 하는 것 | EP02에서만 바뀌는 것 |
|---|---|---|---|---|---|
| **R-WIDE** | **ep01 panel_005** (+ 밤 빛 맞춤 ep01 panel_048) | panel_047 | 9:16 | VIEW_R 전부: 카메라 · 거리 · 높이, 화면 왼쪽 1/3 기둥(x 22–34%), 기둥의 빈 당번 판(y 48–60%), 기둥 오른쪽 처마 등롱(x 36–44%, y 10–22%), 오른쪽 숙소 문들, 왼쪽 안마당 · 기와, 조용한 오른쪽 위(x 48–96%, y 3–24%) | 빛 = 밤(ep01 P48과 같음, 등롱 켜짐) · 인물: **채령 혼자** 기둥 옆에서 노리개 끈을 푼다(상궁 없음 — 자리의 주인이 바뀐 반복) · 연두 끈 패 = 가운데 줄 |
| **R 메아리** | **ep01 panel_005** (원본) · **ep01 panel_058** (같은 밤 3:4 프레이밍) | panel_058 | 3:4 | 상궁이 채령의 붉은 댕기를 고쳐 매는 같은 손 동작, 채령 고개 조금 숙임(뒤 3/4), 기둥 = 화면 왼쪽, 오른쪽 위 조용한 자리(x 46–96%, y 3–24%) | 손수건 = LEFT 소맷부리에 접혀 꽂힘(CLEAN, ep01 P58은 안 보임) · 채령 **허리에 노리개 없음**(NORIGAE_HIDDEN — 첨부 그림의 노리개를 따라 그리지 않게 명시) · 채령 표정은 등 뒤라 안 보임 |
| **낮은 측면 코끝** | **ep01 panel_020** | panel_022 | 1:1 | 상 높이의 낮은 측면 close-up: 왼쪽 가운데 채령 옆얼굴(코끝이 그릇 가까이), 아래 오른쪽 놋 그릇 테두리, 손에 은침 | 아침빛(한낮 아님) · 국 → **노른자 죽** · 은침 끝 **회흑색** · 생각 2개라 위 빈자리 28% → 38%(얼굴을 조금 아래로) · 채령 표정 ③ 그대로 |
| **눈 ECU (낮)** | ep01 panel_021 (선택) | panel_023 | 1:1 | 눈 하나 + 눈썹 ECU, 위에 흐린 머리칼 그늘 띠 | 아침빛 · 표정 ④ 변주(안도 + 공포) · 위 띠 32% → 40%(생각 2개) |
| **3단 분할** | **ep01 panel_023** | panel_024 | 9:16 | 같은 폭 세 칸 + 가는 검은 가로 띠 두 줄, 위 = 감찰의 큰 손 / 아래 = 채령 | 위 칸: 칼자루 → **상 가장자리를 잡은 손** · 가운데 칸: 향 꽁초 → **문가에 무릎 꿇은 나인 둘의 떨리는 어깨** · 아래 칸: 주먹 → **꾹 다문 입술** · 칸 높이 28/40/28%(가운데 칸에 말풍선 2) |
| **눈 ECU (밤)** | **ep01 panel_051** (+ ep02 panel_023 프레이밍 짝) | panel_054 | 1:1 | 눈 ECU, 동공에 등롱 주황 점 하나, 주변 남청 그늘 | 위 띠 40%(생각 2개) · 표정 ④ |
| **C' 소매 속 손** | **ep01 panel_031** (손 모양 기준) | panel_021 · panel_052 | 3:4 · 1:1 | 민 상궁의 **RIGHT 손이 LEFT 소매 속**, 같은 손 모양, 손수건 안 보임 | P21: 문지방 미디엄(ep01 P31보다 크게, 손이 또렷이) · P52: 손 · 소매 클로즈업, 밤 등롱빛 |
| **등롱 얼굴 CU** | ep01 panel_053 (빛 · 프레이밍) | panel_055 | 9:16 → 3:4 | 정면 CU, 등롱이 얼굴 화면 왼쪽 반만, 오른쪽 남청 그림자, 같은 미소 | 비율 3:4 · 말풍선 2개 = 오른쪽 위 그림자 |
| **요구 사다리 CU** | **ep01 panel_059** | panel_059 | 1:1 | 민 상궁 정면 CU 같은 미소, 오른쪽 위 남청 어둠 | 말풍선 2개 → 얼굴을 화면 왼쪽으로 조금 더(x 6–58%), 오른쪽 세로 띠 비움 |
| **마지막 큰 컷** | **ep01 panel_060** | panel_060 | 9:16 | 채령 얼굴 세로 큰 컷, 대답 없음, 시선 화면 밖 왼쪽, 아래 12% 어두운 캡션 띠 | 앞섶 위 **주먹**이 아래쪽에 보인다(y 62–84%) · 노리개 없음 |
| **은침 (회차 안)** | ep02 panel_004 → ep02 panel_017 | panel_016 · 017 · 039 | — | 같은 은침(가늘고 둥근 머리, 손가락 두 마디보다 김) | P04 끝까지 은빛 → P16 끝 탁한 회색 → P17 · P39 끝 1/3 회흑색 |

- 반복 · 메아리 컷은 원본과 **같은 쪽을 비운다**(P47은 무대사지만 원본 구도를 지키기 위해 오른쪽 위를 그대로 조용하게 둔다).
- 첨부한 EP01 그림에는 채령의 노리개가 허리에 있다. **P58 · P60(그리고 P54 근처 모든 밤 컷)에서 노리개를 따라 그리면 REGEN**(§D-1).

## D. EP02 상태 토큰 (이 회차 전용 · 가변 · 시리즈 문서 미수정)

> 불변 외형 토큰(FULL · SHORT · LOC · LIGHT · STYLE_GLOBAL)은 한 글자도 바꾸지 않는다. 아래는 **패널 묘사에 덧붙이는 가변 상태**다. 영문은 prompt-smith가 그대로 쓴다.

### D-1. 채령 노리개 위치 변경 [연속성 핵심]

| 토큰 | 영문 | 패널 |
|---|---|---|
| (기본) | FULL/SHORT 원문 그대로: 노리개 = RIGHT 허리 | **P01–P46** (보이는 컷), P47 시작 |
| `CHAERYEONG_UNTYING` | `standing alone beside the pillar, head bowed, both hands untying the red knot of the jade-teal butterfly ornament from her RIGHT hip` | **P47** |
| `CHAERYEONG_WRAPPING` | `her hands folding a palm-sized square of plain pure-white cotton cloth around the jade-teal butterfly ornament, the short red tassel still peeking out of the cloth` | **P48** (노리개가 마지막으로 또렷이 보이는 컷) |
| `CHAERYEONG_TUCKING` | `pushing a small bundle of plain white cloth inside the front of her spring-green jacket with one hand; nothing hangs at her hip any more` | **P49** |
| **`CHAERYEONG_NORIGAE_HIDDEN`** | `no ornament at her hip: her jade-teal butterfly ornament is wrapped in a small plain white cloth and hidden inside the front of her spring-green jacket, showing only as a slight small bulge under the jacket front; nothing hangs at her RIGHT hip` | **P49–P60 전부** (채령이 보이는 모든 컷) |
| `CHAERYEONG_HAND_ON_BUNDLE` | `one hand resting on the front of her jacket over the hidden bundle` (P60: `her hand clenched into a fist on the front of her jacket over the hidden bundle`) | P57 · P60 |

- **P49–P60에서 prompt-smith는 FULL 토큰의 `a jade-teal carved butterfly ornament (norigae) with a red knot and a short red tassel always hanging at her RIGHT hip` 구절, SHORT 토큰의 `a jade-teal butterfly ornament with a red tassel at her RIGHT hip` 구절을 빼고 그 자리에 `CHAERYEONG_NORIGAE_HIDDEN` 문장을 넣는다.** 첨부 레퍼런스(turnaround)에는 노리개가 있으므로 문장으로 반드시 덮는다. 다른 외형은 그대로.
- 흰 천은 **앞섶 안에 숨김** — 기본은 앞섶이 살짝 불룩할 뿐 천이 보이지 않는다(P49 넣는 순간만 손에 흰 천 꾸러미가 보인다).
- EP03 첫 컷의 노리개 위치는 continuity-manager가 정한다(beatsheet §4).

### D-2. 은침

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PROP_NEEDLE` (시리즈 원문) | `a thin silver needle longer than two finger joints, with a small round head, bright cool silver, the coldest sparkle in the image` | P04 · P15 (끝까지 은빛) |
| `PROP_NEEDLE_DULL` | `the same thin silver needle just lifted out of the porridge, its very tip clouded a dull gray, the rest still bright cool silver` | P16 |
| `PROP_NEEDLE_TARNISH` | `the same thin silver needle with smoky gray-black tarnish on the tip only (the last third, darkest at the very point, like soot), the upper part still bright cool silver, no purple, no blue` | P17 · P20 · P22 · P39 (+ P23 이후 받침 위에 있을 때) |

- **panel-validator 주의:** style-bible §10-3의 "은침이 검게 · 잿빛으로 → REGEN"은 EP01 규칙이다. **EP02 P16 · P17 · P20 · P22 · P39의 변색은 의도된 것**(예외). 대신 REGEN: 은침 전체가 검음 · 새까만 먹색 · 보라/푸른 기 · P04 · P15에서 이미 변색.
- 은침은 P22에서 받침에 내려놓고, P39에서 감찰이 받침에서 다시 집는다.

### D-3. 상 · 그릇 · 향

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PROP_TABLE_BARE` | `the low dark red-brown lacquered table stands bare, nothing on it yet` | P01–P09 |
| `PROP_TASTER_CUSHION` | `a plain off-white flat cushion on the floor at the right side of the table, empty` | P01 (P02부터 채령이 앉음) |
| `PROP_CENSER_EMPTY` | `the small plain brass incense burner holds only smooth soft gray ash, no incense stick yet, no smoke` | P01–P12 |
| 아침상 | `PROP_TABLE_BREAKFAST` 원문 + `in the center the prince's bowl` + `PROP_PRINCE_BOWL` 원문 | P10–P42 (뚜껑 P10 닫힘 → P14 열림) |
| `PROP_YOLK_PORRIDGE` | `warm yellow rice porridge in the prince's brass bowl, a darker yellow mound of mashed egg yolk in the center, soft steam rising, no garnish, no pattern` | P14 · P15 · P22 · P25–P27 · P30 · P31 · P33 |
| `PROP_PORRIDGE_HALF` | `the prince's bowl is about half empty` | P34 |
| `PROP_BOWLS_EMPTY` | `the prince's brass bowl and the small white taster's dish are both empty, scraped clean` | P37 · P38 · P43 |
| 향 | `PROP_INCENSE_NEW`(P13 점화 → P33까지 길게) → `PROP_INCENSE_HALF`(P34) → `PROP_INCENSE_STUB`(P37, 마지막 재가 떨어짐) → `PROP_INCENSE_OUT`(P38 이후) | — |
| 기미 | `PROP_TASTER_DISH` · `PROP_SMALL_LADLE`(죽 가운데만) · `PROP_SPOON`(놋) | P33 · P36 · P37 |

### D-4. 해독환 · 흰 천

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PROP_ANTIDOTE_PILL` | `one round black pill a little larger than a pea, slightly glossy, plain, no engraving, no marks, no wrapping` | P53 · P56 |
| `PROP_WHITE_CLOTH` | `a palm-sized square of plain pure-white cotton cloth, no embroidery, no pattern, no stain, no writing` | P48 · P49 (이후 앞섶 안, 안 보임) |

### D-5. 인물 상태 (EP02 새 자세)

| 토큰 | 영문 | 패널 |
|---|---|---|
| `PRINCE_PLOP` | `plopping down onto his cushion on the far side of the table, the wooden tiger toy held up in one hand` | P06 |
| `PRINCE_HUG_BOWL` | `hugging the brass porridge bowl to his chest with both arms, not drinking from it` | P25 · P27 |
| `PRINCE_HANDS_ON_BOWL` | `his small hands in crimson sleeves with a thin gold border clasped around the brass bowl` | P30 |
| `KITCHEN_MAIDS` | character-sheets §6 나인 원문 + `two royal-kitchen maids kneeling with heads bowed deep, faces not visible` | P10 · P12 · P18 · P24 · P42 |
| `BAEK_HAND_ON_TABLE` | `his large calloused hand gripping the edge of the low lacquered table as if to lift it` | P19 · P24(위 칸) |
| `BAEK_KNEEL` | `bending one knee to bring his eyes level with the small boy, his large hand stopped in the air above the bowl` | P26 |
| `BAEK_ARMS_FOLDED` | `standing with his thick arms folded across his chest` | P34 |
| `BAEK_HOLD_NEEDLE` | `holding the thin needle up between two thick fingers at her eye level` | P39 |
| `MIN_SLEEVE_HAND` | character-sheets §3 "손을 소매 속에" 원문(`her RIGHT hand slipped inside her LEFT sleeve, the handkerchief hidden; she alone is looking at the girl, not at the bowl`) | P21 |
| `MIN_SLEEVE_HAND_CU` | `close-up of her RIGHT hand slowly slipping inside her LEFT sleeve, the deep wine-red plum sleeve with its white cuff, nothing visible yet` | P52 |
| `MIN_PALM_PILL` | `her open RIGHT palm held out flat, one round black pill resting in its center` | P53 |
| `MIN_PILL_BACK` | `tucking the black pill back into her LEFT sleeve cuff with her RIGHT hand` | P56 |
| `MIN_HANKY_IN_CUFF` | `the folded pale celadon-green handkerchief tucked into her LEFT sleeve cuff, clean` | P58 |
| 땀 · 눈물 | `one small realistic bead of sweat at her temple (painted, not a cartoon sweat-drop symbol)` / `a single realistic tear on his cheek` | P35 / P28 (style-bible §1: 만화 기호 금지) |

### D-6. 빛 변주 (새 토큰 아님)

- **늦은 아침 (S02, P43–P46):** `LIGHT_L1_MORNING` 원문 뒤에 `— the same light, now a little higher and warmer, shadows shorter; the room feels emptier` 을 덧붙인다.
- **P01 문 빛:** LIGHT_L1_MORNING + `low morning light also falls through the open sliding door on the right, casting her long shadow leftward across the floor`(창 = 왼쪽 원칙은 그대로, 문 빛은 보조).
- **P08 문 쪽 빛:** `a soft glow from the open door on the right rims the boy's face`.

## E. 연속성 타임라인 (EP02, 그림에서 바뀌는 것만)

| 대상 | P01–P09 | P10–P13 | P14–P22 | P23–P38 | P39–P46 | P47–P60 (밤) |
|---|---|---|---|---|---|---|
| 상 | 빈 상 | 아침상, 왕자 그릇 뚜껑 닫힘 | P14 뚜껑 열림, 노른자 죽 | P25–P30 왕자가 끌어안음 → P31 채령 손 → P34 반 → P37 빈 그릇 | 빈 그릇 그대로(P43) | — |
| 향 | 재만, 향 없음 | P13 새 향 점화 | 탐 | P34 절반 → P37 꽁초 · 재 떨어짐 → P38 다 탐 | 다 탐 | — |
| 은침 | P04 집어 듦(은빛) | 손에 | P15 죽 가운데 → P16 끝 회색 → P17 끝 회흑색 → P22 받침에 내려놓음 | 받침 위 | P39 감찰이 집어 듦 | — |
| 채령 노리개 | RIGHT 허리 | RIGHT 허리 | RIGHT 허리 | RIGHT 허리 | RIGHT 허리 | P47 끈을 풂 → P48 흰 천에 쌈 → **P49–P60 앞섶 안(NORIGAE_HIDDEN)** |
| 민 상궁 | P05 문지방(손수건 CLEAN, 손 앞에 모음) | 문지방(프레임 밖이어도 됨) | P15 문지방 작게 → P21 RIGHT 손이 LEFT 소매 속 | P29 문지방 작게(마지막) · 이후 프레임에 넣지 않음 | — | P49 화면 밖 → P50 등롱 아래(RIGHT 손 CLEAN) → P52 손 소매 속(손수건 안 보임) → P53 손바닥 환약 → P56 환약 다시 소매 → P58 손수건 LEFT 소맷부리(CLEAN) |
| 백 감찰 | P09 문을 채우며 등장 | 문가 | P18 한 걸음 들어섬 · P19 상 가장자리 손 | P24 상 잡은 손 · P26 무릎 굽힘 · P29 일어섬 · P32 · P34 팔짱 | P39 은침 · P42 문틀에서 돌아봄 → 퇴장 | — |
| 수라간 나인 2 | — | P10 상을 놓음 · P12 뒷걸음 → 문 안쪽 바닥에 무릎 꿇음 | P18 문가에서 숨 들이켬 | P24 떨리는 어깨 | P42 엎드림(원경) → 퇴장 | — |
| 왕자 | P06 등장, 먼 쪽 방석 | 방석 | 방석 · P18 호랑이 끌어안고 굳음 | P25–P27 그릇 끌어안음 · P33 눈물 자국 | P43–P46 빈 그릇 · 호랑이 | — |
| 손수건 | CLEAN | CLEAN | 안 보임(P21) | CLEAN(P29 작게) | — | CLEAN(P50) · 안 보임(P52–P57) · CLEAN 소맷부리(P58) · 안 보임(P59) |
| 회랑 소품 | — | — | — | — | — | 등롱 켜짐(먼 처마 등롱 두어 개도 켜져 있어도 됨) · 당번 판 BLANK, 연두 끈 **가운데 줄** · 채령 붉은 댕기 P58 다시 고쳐 맴 |

## F. 리듬 · 여백 (letterer `gap_after` 제안, 기본 40)

| 위치 | 제안 | 이유 |
|---|---|---|
| P05 뒤 | 120 | 콜드 오픈 끝 → 왕자의 밝은 등장 |
| P13 뒤 | 120 | 향 점화 = 절차 시작, 은침 시퀀스 앞 숨 |
| P16 → P17 | 20 | 균열 → 첫 "쿵"(빠르게) |
| P19 뒤 | 120 | 제약 집행 → 미니 반전 시작 |
| P20 → P23 | 0–20 | 미니 반전 연쇄(예측 → 미스디렉션 → 냄새 → 깨달음) |
| P27 → P28 | 20 | 공개 → 정점 |
| P28 뒤 | **240** | 미니 반전 착지(beatsheet 여백↓) |
| P37 뒤 | 20 | 향 만료 → 작은 달성 |
| P38 뒤 | **240** | 몸 증명 완료 후 정지(beatsheet 여백↓) |
| P42 뒤 | 120 | 감찰 퇴장 → 늦은 아침(시간 전환) |
| P46 뒤 | **400 (가장 긺)** | 회차 최저점 → 밤(beatsheet §3) |
| P51 → P55 | 0–20 | 주력 반전 연쇄(대립 → 손 → 환약 → 이해 → 정점) |
| P56 뒤 | **240** | 답 보류 후 숨 |
| P60 뒤 | 320 | 회차 끝, 캡션 뒤 |

---

## G. 패널

--- SCENE BREAK --- S01 · LOC_L1_TASTING · 3일째 아침 · LIGHT_L1_MORNING

### panel_001
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (넓게, 빈 방)
- beat: ① 콜드 오픈 — 대답은 앉는 것(EP01 P60 수신) · 긴장 7 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (+ §D-6 P01 문 빛: 열린 문으로 낮은 빛, 그림자가 왼쪽으로 길게)
- camera: 무릎 꿇은 사람의 눈높이(낮게), wide, 상 건너편을 비스듬히 — 세로로 긴 와이드
- composition: 위 34%(y 0–34%)는 화면 왼쪽의 빛나는 창호지 윗부분 · 어두운 들보 · 무지 병풍 윗면. 가운데(x 20–70%, y 46–70%) **빈** 옻칠 상과 먼 쪽 왕자 방석(빈). 상의 화면 오른쪽 옆 바닥(x 56–84%, y 66–80%)에 **비어 있는 흰 방석**. 앞쪽 아래 모서리(x 8–30%, y 74–94%) 향 없는 놋 향로와 은침 받침. 화면 오른쪽 가장자리(x 86–100%, y 30–80%) 열린 미닫이 문틀의 밝은 틈 — 거기서 들어온 **채령의 그림자**(땋은 머리 한 갈래가 읽히는 실루엣)가 바닥을 가로질러 흰 방석 위로 길게 떨어진다. 사람은 그림자뿐
- characters: CHAERYEONG(그림자만 — 실루엣에서 한 갈래 땋은 머리가 읽히게)
- emotion: 질문 — "앉을 것인가"
- props: PROP_TABLE_BARE · PROP_TASTER_CUSHION · PROP_CENSER_EMPTY · PROP_NEEDLE_STAND
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/LOC_L1_TASTING_plate.png, refs/PROP_TABLEWARE.png
- fx/note: 플레이트는 한낮 · 수라상이므로 **구조만** 따른다(빛 = 아침, 상 = 비어 있음). 병풍 · 향로 · 상 무지.

### panel_002
- scene_id: S01 / location: LOC_L1_TASTING (클로즈업, 배경 흐림)
- beat: ① 앉음 = 요구 1단계 이행 시작 ⟨회수: EP01 P59 명령⟩ · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 앵글, medium close-up (무릎 · 손 · 노리개), 정면 3/4 — RIGHT 허리 노리개가 **화면 왼쪽**에 보이게
- composition: 아래 2/3(y 36–98%): 남색 치마의 무릎이 흰 방석 위로 막 내려앉음(x 18–82%, y 60–98%), 두 손이 무릎 위(x 34–70%, y 58–74%). 화면 왼쪽(x 10–30%, y 52–80%) RIGHT 허리의 옥빛 나비 노리개와 붉은 술이 또렷이. 연두 저고리 아랫단(y 36–52%). 위 28%는 초점 밖 창호지 · 병풍
- characters: CHAERYEONG(무릎 꿇음 상태 토큰 — 얼굴은 프레임 위 밖)
- emotion: 굴복처럼 보이는 앉음
- props: PROP_NORIGAE(RIGHT 허리) · PROP_TASTER_CUSHION(앉음)
- dialogue_ref (1): ① 채령 thought "…이번엔 입을 다물고."
- art_space: **위 28%(x 4–96%, y 2–28%)** — 초점 밖 창호지 빛 · 무지 병풍
- attach: refs/CHAERYEONG_turnaround.png, refs/PROP_KEEPSAKES.png
- fx/note: 노리개는 청록 옥(파랑 · 보라 아님). 이 회차에서 노리개가 허리에 또렷한 첫 컷 — P48과 짝.

### panel_003
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (얼굴 클로즈업)
- beat: ① 결의 ⟨회수: EP01 D1 "꼭 네가" → "꼭 내가"⟩ · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (얼굴의 밝은 쪽 = 화면 왼쪽 창 쪽)
- camera: 눈높이 정면 face close-up
- composition: 채령 얼굴(x 18–82%, y 42–96%), 등을 곧게 펴고 크게 뜬 눈으로 앞(빈 상)을 봄. 어깨 너머로 땋은 머리 끝이 살짝. 위 40%는 초점 밖 무지 병풍 · 창호지 윗부분
- characters: CHAERYEONG(FULL, 무릎 꿇음, 표정 ⑥ — `resolute, brows level, lips pressed firmly together, a steady direct gaze`)
- emotion: 굴복 속의 결의
- props: —
- dialogue_ref (2): ① 채령 thought "그래도 이 자리는 내 거야." / ② 채령 thought "왕자 마마 상 앞엔… 꼭 내가." (둘째가 이 회차 최장 풍선 49cp — 폭 넉넉히)
- art_space: **위 40%(x 4–96%, y 2–40%)** — 흐린 무지 병풍 · 창호지(생각 풍선 둘, 위아래)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 반쯤 감긴 눈 금지.

### panel_004
- scene_id: S01 / location: LOC_L1_TASTING (ECU, 배경 흐림)
- beat: ① 대답 = 행동의 마침표 · 은침 기준(은빛) · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING — 은침이 화면에서 가장 차가운 반짝임
- camera: extreme close-up, 눈높이
- composition: 채령의 손가락(화면 오른쪽 아래에서, 연두 소맷부리 · 남색 줄 끝동)이 나무 받침에서 은침 하나를 집어 듦. 은침 대각선(x 22–72%, y 22–84%), **끝까지 은빛**. 배경은 초점 밖 따뜻한 창호지 빛(화면 왼쪽)과 어두운 장판
- characters: CHAERYEONG(손 클로즈업 상태 토큰)
- emotion: 차가운 결심
- props: PROP_NEEDLE(원문, 은빛) · PROP_NEEDLE_STAND
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/PROP_TABLEWARE.png, ep01 panel_015 (선택 — 은침 모양 맞춤)
- fx/note: **회차 은침 원본** → P16 · P17 · P39가 이 은침을 따른다(같은 길이 · 둥근 머리).

### panel_005
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (문 쪽)
- beat: ① 다정한 목소리 = 목줄 · 복종의 첫 말 · 긴장 7.5 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, 문 쪽을 보는 medium wide — 채령 너머 문지방
- composition: 위 30%(y 0–30%)는 어두운 들보 · 문틀 윗부분 · 무지 병풍 윗면. 중경 가운데~왼쪽(x 18–58%, 머리 y 40–52%, 무릎 y 92%) 채령이 흰 방석에 무릎 꿇은 채 화면 왼쪽(빈 상 쪽)을 향함(옆모습, 돌아보지 않음), 등 뒤로 땋은 머리 + 붉은 댕기. 그 등 뒤 화면 오른쪽(x 64–90%) 열린 미닫이 문, **문지방에 민 상궁 작게 그러나 얼굴이 읽히게**(머리 y 32–40%, 발 y 70%), 같은 온화한 미소, 깨끗한 손수건을 쥔 두 손을 앞에 모음. 화면 왼쪽 가장자리에 빈 상 모서리 · 향로
- characters: MIN(SHORT, 문지방에 작게 상태 토큰, 표정 ②) · CHAERYEONG(FULL, 무릎 꿇음, 표정 ① `polite and composed, eyes alert and watchful`)
- emotion: 다정함이 목을 조인다
- props: PROP_HANKY_CLEAN(RIGHT 손, 두 손 앞에 모음) · PROP_TABLE_BARE · PROP_CENSER_EMPTY
- dialogue_ref (2): ① 민 상궁 dialogue "일찍 왔구나, 얘야." (위 오른쪽, 꼬리 ↘ 문지방 상궁) / ② 채령 dialogue "…예, 마마님." (위 왼쪽 조금 아래, 꼬리 ↓ 채령)
- art_space: **위 30%(x 4–96%, y 2–30%)** — 들보 · 문틀 윗부분 · 병풍 윗면. 상궁 머리는 y 32% 아래
- attach: refs/MIN_turnaround.png, refs/MIN_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 민 상궁 shout 금지. 당의 = deep wine-red plum, NOT purple. 노리개는 몸 너머(안 보여도 됨).

### panel_006
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ② 첫 온기 ⟨복선 M2①⟩ · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 medium, 밝은 움직임
- composition: 상 건너편 먼 쪽 방석(x 24–58%, 머리 y 34–48%)에 왕자가 막 털썩 앉음 — 한 손에 나무 호랑이를 들어 올림, 다른 손은 방석 짚음, 진홍 도포 자락이 퍼짐. 앞 가운데 빈 상(y 66–84%). 화면 오른쪽 가장자리(x 76–100%, y 40–92%) 무릎 꿇은 채령(SHORT, 옆모습, 놀란 눈). 위 30%는 창호지 윗부분(왼쪽) · 무지 병풍
- characters: PRINCE(FULL, PRINCE_PLOP, 변주 `beaming proudly, eyes curved with pleasure`) · CHAERYEONG(SHORT, 무릎 꿇음)
- emotion: 의기양양한 귀여움
- props: PROP_TIGER · PROP_TABLE_BARE
- dialogue_ref (1): ① 왕자 dialogue "단이! 오늘은 내가 먼저 왔어." (꼬리 ↓ 왕자)
- art_space: **위 30%(x 4–96%, y 2–30%)** — 창호지 윗부분 · 무지 병풍. 호랑이를 든 손은 y 32% 아래
- attach: refs/PRINCE_turnaround.png, refs/PRINCE_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: SD · 만화 기호 없이 몸짓으로만. 왕관 없음, 쌍상투.

### panel_007
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ② 귀여운 이완 ⟨복선 M2② 말로 심기⟩ · 긴장 5.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 two-shot, 상 너머
- composition: 화면 왼쪽~가운데 먼 쪽(x 16–50%, 머리 y 42–56%) 왕자가 가슴을 펴고 턱을 듦, 호랑이를 무릎에. 화면 오른쪽(x 56–92%, 머리 y 40–54%) 채령이 눈을 동그랗게 뜨고 입술을 다물어 웃음을 참음. 사이에 빈 상. 위 38%는 창호지 · 무지 병풍
- characters: CHAERYEONG(FULL, 표정 ②) · PRINCE(SHORT, 방석에 앉음, 변주 `proud and pleased, chin up`)
- emotion: 귀여움
- props: PROP_TIGER · PROP_TABLE_BARE · PROP_NORIGAE
- dialogue_ref (2): ① 채령 dialogue "일찍 일어나셨네요, 왕자 마마." (위 오른쪽, 꼬리 ↘ 채령) / ② 왕자 dialogue "오늘 아침은 특별한 거야." (위 왼쪽 조금 아래, 꼬리 ↓ 왕자)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 창호지 윗부분 · 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/PRINCE_turnaround.png
- fx/note: —

### panel_008
- scene_id: S01 / location: LOC_L1_TASTING (옆얼굴 미디엄, 문 쪽)
- beat: ② ⟨복선 M2③⟩ 기대 vs 작은 의심 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING + §D-6 P08 문 빛(얼굴 오른쪽 윤곽)
- camera: 앉은 눈높이, 왕자 옆얼굴 medium
- composition: 왕자 옆모습(x 34–80%, 머리 y 36–60%)이 목을 길게 빼고 화면 오른쪽(문 · 수라간 방향)을 봄, 눈이 반짝, 두 손으로 호랑이를 꼭 쥠(y 66–80%). 화면 오른쪽 가장자리에 밝은 문틈의 빛. 아래 왼쪽 가장자리(x 0–22%, y 70–100%) 초점 밖 채령의 어깨 · 땋은 머리(뒤). 위 왼쪽(x 4–52%, y 3–30%)은 창호지의 부드러운 빛
- characters: PRINCE(FULL, 표정 ④ `innocent, open, trusting face, eyes round and clear` + 변주 `eyes sparkling with expectation`) · CHAERYEONG(뒷모습 상태 토큰, 가장자리)
- emotion: 기대(재독 시 그리움)
- props: PROP_TIGER
- dialogue_ref (1): ① 채령 thought "…특별한 거?"
- art_space: **위 왼쪽(x 4–52%, y 3–30%)** — 문 반대편 창호지의 부드러운 빛
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 호랑이 깨진 귀 강조 금지(W6, 보이기만).

### panel_009
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR
- beat: ② 감찰 등장 · 숙수 구금 · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (문 밖 빛을 등진 감찰, 얼굴은 방 안 빛)
- camera: low-angle medium (권위 = 로우앵글)
- composition: 화면 가운데~오른쪽(x 38–88%, 갓 꼭대기 y 36%, 허리 y 86%) 백 감찰이 미닫이 문틀을 가득 채우며 들어섬, 환도 LEFT 허리(정면이라 화면 오른쪽). 위 34%는 문틀 위 어두운 들보 · 천장. 앞쪽 아래 왼쪽(x 4–36%, y 66–98%) 왕자가 움찔 어깨를 움츠리고 호랑이를 끌어안음
- characters: BAEK(FULL, 문가에 섬 상태 토큰, 표정 ①) · PRINCE(SHORT, 표정 ①)
- emotion: 무게가 들어온다
- props: PROP_SWORD · PROP_TIGER
- dialogue_ref (2): ① 백 감찰 dialogue "숙수는 갇혀 있다." / ② 백 감찰 dialogue "오늘 상은 수라간 나인들이 차렸다." (둘 다 꼬리 ↓ 감찰)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 갓 챙 위의 어두운 들보 · 문틀 윗부분
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 홍 숙수는 그리지 않는다(언급만). 칼을 뽑지 않음. 흉터 = RIGHT 턱선 아래(정면이라 화면 왼쪽).

### panel_010
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (하이앵글 와이드)
- beat: ② 한 상 공개 ⟨복선 M2④⟩ · 긴장 6.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (화면 왼쪽에서 낮은 빛)
- camera: high-angle wide, 상 위를 비스듬히 내려다봄
- composition: 위 16%(y 0–16%)는 상 너머 장판과 병풍 아랫단. 위 중간(x 28–58%, 머리 y 20–34%) 먼 쪽 방석의 왕자가 상 쪽으로 몸을 내밀고 눈이 반짝. 가운데(x 12–88%, y 40–72%) 옻칠 아침상 — 뚜껑 덮인 놋그릇 몇 개, **정가운데에 난초 봉오리 손잡이 뚜껑의 왕자 그릇**(뚜껑 닫힘). 상 양옆(x 4–30% / x 66–96%, y 56–90%) 회청색 옷의 나인 둘이 고개를 깊이 숙인 채 그릇을 내려놓음 — 얼굴 안 보임, 놋그릇을 놓는 손끝이 떨림. 오른쪽 아래(x 70–98%, y 84–100%) 채령의 무릎 · 남색 치마 일부. 문지방 · 감찰은 프레임 밖
- characters: PRINCE(SHORT, 방석에 앉음, 표정 ④ + 변주 `leaning eagerly toward the table`) · KITCHEN_MAIDS(엑스트라 2) · CHAERYEONG(무릎 · 치마 일부)
- emotion: 기대 + 떨리는 손(불안)
- props: PROP_TABLE_BREAKFAST + PROP_PRINCE_BOWL(**닫힘**) · PROP_CENSER_EMPTY(앞 모서리)
- dialogue_ref (1): ① 왕자 dialogue "왔다!" (꼬리 ↓ 왕자)
- art_space: **위 왼쪽(x 4–48%, y 2–17%)** — 상 너머 빈 장판 · 병풍 아랫단(왕자 머리 바로 위 왼쪽)
- attach: refs/PROP_TABLEWARE.png, refs/PRINCE_turnaround.png, refs/LOC_L1_TASTING_plate.png
- fx/note: 나인 = 회청 · 회색 옷, 이름 있는 인물 색 금지, 얼굴 디테일 없음. 그릇 · 뚜껑 무늬 · 한자 문양 없음.

### panel_011
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (바스트)
- beat: ② ⚖ 제약 선고 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 약간 로우, bust — 위에서 누르는 시선(감찰이 아래를 내려다봄)
- composition: 백 감찰 바스트(x 40–94%, 갓 꼭대기 y 30%, 얼굴 y 40–66%)가 화면 왼쪽 아래(프레임 밖의 나인들)를 내려다봄, LEFT 손을 칼자루 위에(y 80–96%). 화면 왼쪽 위(x 4–56%, y 2–40%)는 어두운 문틀 · 들보
- characters: BAEK(FULL, 칼자루에 손 상태 토큰, 표정 ②)
- emotion: 차가운 법
- props: PROP_SWORD
- dialogue_ref (2): ① 백 감찰 dialogue "어제 같은 일이 또 나면," / ② 백 감찰 dialogue "이번엔 수라간이 통째로 문초다." (둘 다 꼬리 ↘ 감찰)
- art_space: **위 왼쪽(x 4–56%, y 2–40%)** — 감찰 얼굴 옆의 어두운 문틀 · 들보(풍선 둘, 위아래)
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png
- fx/note: P19 둘째 풍선이 이 둘째 풍선과 같은 꼬리(글자 동일) — 같은 인물 · 비슷한 구도로 메아리.

### panel_012
- scene_id: S01 / location: LOC_L1_TASTING (전경 얼굴 + 원경 문가)
- beat: ② 죄책감 · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이, 전경 옆얼굴 close + 깊은 원경
- composition: 전경 왼쪽(x 2–48%, y 32–100%) 채령의 옆얼굴(화면 오른쪽을 향함), 아랫입술을 깨묾, 시선 아래. 원경 오른쪽(x 56–94%, y 54–76%) 나인 둘이 바닥에 이마를 대고 뒷걸음으로 문 쪽으로 물러남(작게, 얼굴 없음), 그 뒤 밝은 문틀. 위 30%(x 4–96%, y 2–30%)는 초점 밖 들보 · 병풍
- characters: CHAERYEONG(FULL 얼굴, 표정 ⑤ `biting her lower lip, eyes wide and glistening, fighting her fear`) · KITCHEN_MAIDS(원경)
- emotion: 죄책감
- props: —
- dialogue_ref (1): ① 채령 thought "숙수님이 갇힌 것도… 나 때문인데."
- art_space: **위 30%(x 4–96%, y 2–30%)** — 채령 머리 위의 흐린 들보 · 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 나인들은 이후 문 안쪽 바닥에 무릎 꿇고 남는다(P18 · P24 · P42).

### panel_013
- scene_id: S01 / location: LOC_L1_TASTING (향로 클로즈업)
- beat: ② ⏳ 향 점화 · 절차 1 · 긴장 6.5 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 상 높이, 향로 + 손 close-up, 연기를 세로로 길게
- composition: 아래(x 36–84%, y 64–96%) 놋 향로와 낮은 나무 받침. 화면 오른쪽에서 들어온 채령의 손(연두 소맷부리)이 재에 **새 쑥 향 한 대**를 꽂고, 끝에 막 붙은 작은 불씨. 가는 연기 한 줄이 곧게 위로(x 58–64%, y 10–64%). 위 왼쪽(x 4–52%, y 2–28%)은 초점 밖 창호지 빛 · 병풍 — 연기 반대편
- characters: CHAERYEONG(손 클로즈업 상태 토큰)
- emotion: 의식 같은 정확함
- props: PROP_CENSER + PROP_INCENSE_NEW
- dialogue_ref (1): ① 채령 dialogue "향을 올리겠습니다." (꼬리 ↘ 화면 오른쪽 아래 = 손 쪽)
- art_space: **위 왼쪽(x 4–52%, y 2–28%)** — 연기 반대편의 흐린 창호지 · 병풍
- attach: refs/PROP_TABLEWARE.png, refs/CHAERYEONG_turnaround.png
- fx/note: 연기는 가는 한 줄, 모양 만들지 않음.

### panel_014
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (그릇 하이앵글 + 상 너머 왕자)
- beat: ③ 한 상 확정(노른자) · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (그릇 김이 왼쪽 빛에)
- camera: 약간 높은 앵글, 그릇 close + 깊은 배경의 왕자
- composition: 아래(x 20–80%, y 58–96%) 왕자 놋 그릇 — 채령의 손(화면 오른쪽에서)이 난초 봉오리 뚜껑을 막 들어 올림, **김 오르는 노란 쌀죽, 가운데 진한 노른자 한 덩이**가 화면 중심의 따뜻한 노랑. 상 너머(x 30–66%, 머리 y 40–56%) 왕자가 침을 꿀꺽, 눈이 그릇에. 위 38%는 왕자 머리 위의 창호지 · 무지 병풍
- characters: PRINCE(SHORT, 표정 ④ + 변주 `swallowing hungrily, eyes fixed on the bowl`) · CHAERYEONG(손 상태 토큰)
- emotion: 따뜻한 기대
- props: PROP_PRINCE_BOWL(뚜껑 **열림**) · PROP_YOLK_PORRIDGE · PROP_TABLE_BREAKFAST
- dialogue_ref (2): ① 왕자 dialogue "그거 내 거야!" (위 왼쪽, 꼬리 ↓ 왕자) / ② 채령 dialogue "예, 왕자 마마. 먼저 보겠습니다." (위 오른쪽 조금 아래, 꼬리 ↘ 화면 오른쪽 = 채령)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 창호지 윗부분 · 무지 병풍. 왕자 머리 y 40% 아래, 김은 y 44% 아래에서 흐려짐
- attach: refs/PROP_TABLEWARE.png, refs/PRINCE_turnaround.png
- fx/note: 죽에 고명 · 문양 없음. 노랑이 주황 · 금속빛으로 번지지 않게.

### panel_015
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (손 + 그릇 클로즈업, 배경 흐림)
- beat: ③ 절차 2 · 은침 = 가운데 · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 상 높이 close-up, 약간 위에서
- composition: 아래 가운데(x 18–82%, y 46–94%) 노른자 죽 그릇, 채령의 손가락이 은침을 죽 **정가운데**(노른자 바로 곁)에 꽂음 — 죽 위로 나온 부분은 은빛. 뒤 흐림: 화면 오른쪽 중경 백 감찰의 검은 형태(x 66–90%, y 6–50%), 그 더 뒤 문지방에 민 상궁 작게(x 90–98%, y 14–34%, 자두색 형태)
- characters: CHAERYEONG(손 상태 토큰) · BAEK(SHORT, 흐림) · MIN(문지방에 작게, 흐림)
- emotion: 절차의 고요
- props: PROP_NEEDLE(은빛) · PROP_PRINCE_BOWL(열림) · PROP_YOLK_PORRIDGE
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/PROP_TABLEWARE.png, ep02 panel_004
- fx/note: 상궁 강조 금지(흐림 · 작게).

### panel_016
- scene_id: S01 / location: LOC_L1_TASTING (ECU, 채령 시점)
- beat: ③ 균열 · 은침 변색 1단계 · 긴장 7.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: extreme close-up, 채령 시점(위에서 비스듬히)
- composition: 오른쪽 위에서 들어온 채령의 손가락이 은침 머리를 쥐고 들어 올림(손가락 x 62–86%, y 26–44%). 은침이 화면 왼쪽 아래로 대각선(끝 x 26%, y 82%), **맨 끝이 탁한 회색으로 흐림**, 나머지 은빛. 아래는 초점 밖 노란 죽 · 놋 테두리. 위 왼쪽 모서리(x 4–42%, y 3–28%)는 흐린 어두운 장판
- characters: CHAERYEONG(손 상태 토큰)
- emotion: 어? — 균열
- props: PROP_NEEDLE_DULL · PROP_YOLK_PORRIDGE(흐림)
- dialogue_ref (1): ① 채령 thought "…?"
- art_space: **위 왼쪽 모서리(x 4–42%, y 3–28%)** — 은침 반대편의 흐린 배경(작은 생각 풍선)
- attach: ep02 panel_004, refs/PROP_TABLEWARE.png
- fx/note: 회색은 끝에만, 보라 · 푸른 기 금지.

### panel_017
- scene_id: S01 / location: LOC_L1_TASTING (은침 하나, 배경 어둡게 흐림)
- beat: ③ 회차 첫 "쿵" · 미니 훅 1 · 변색 2단계 · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 3일째 아침 · LIGHT_L1_MORNING — 화면 왼쪽 창빛이 은침 **위쪽만** 반짝
- camera: extreme close-up, 은침 하나를 세로로 — 정지
- composition: 은침이 화면 가운데 세로(x 46–54%, y 10–90%), 머리는 위, 끝은 아래. 맨 위 가장자리(x 42–60%, y 2–10%) 은침 머리를 쥔 손가락 끝만 살짝. **끝 1/3(y 64–90%)이 그을음 같은 회흑색**, 끝으로 갈수록 진함. 위쪽 은은 왼쪽 빛에 차갑게 반짝. 배경은 어둡게 흐린 따뜻한 갈색(장판 · 상의 그늘), 가장자리에 노란 죽의 흐린 빛 한 점
- characters: CHAERYEONG(손가락 끝만)
- emotion: 회차의 첫 충격
- props: **PROP_NEEDLE_TARNISH**
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: ep02 panel_004, refs/PROP_TABLEWARE.png
- fx/note: **변색 기준 원본** → P20 · P22 · P39가 이 색을 따른다. 전체 검정 · 새까만 먹색 · 보라 · 푸른 기면 REGEN. 앞 여백 20.

### panel_018
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (반응 와이드)
- beat: ③ 미스디렉션: 또 독 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 앉은 눈높이보다 약간 높은 wide reaction
- composition: 모든 시선이 채령 손의 은침으로. 가운데 아래(x 42–62%, y 50–92%) 무릎 꿇은 채령이 은침을 든 채 굳음. 화면 오른쪽 중경(x 58–80%, 갓 꼭대기 y 28%) 백 감찰이 한 걸음 들어섬. 화면 오른쪽 끝 문 안쪽 바닥(x 82–98%, y 52–70%) 무릎 꿇은 나인 둘이 고개를 든 채 숨을 들이켬(작게, 얼굴 디테일 없음). 화면 왼쪽 먼 쪽 방석(x 12–38%, y 40–70%) 왕자가 호랑이를 끌어안고 굳음. 문지방의 상궁은 감찰 몸에 가려 **보이지 않음**. 위 26%(x 4–56%)는 창호지 윗부분 · 병풍
- characters: BAEK(SHORT, 표정 ②) · CHAERYEONG(FULL 아님 — 작게, SHORT, 표정 ④) · PRINCE(SHORT, 표정 ①) · KITCHEN_MAIDS(작게)
- emotion: 방이 얼어붙음
- props: PROP_NEEDLE_TARNISH(작게) · PROP_TABLE_BREAKFAST · PROP_YOLK_PORRIDGE · PROP_SWORD · PROP_TIGER
- dialogue_ref (1) + sfx (1): ① 백 감찰 dialogue "검다." (위 가운데, 꼬리 ↘ 감찰) / sfx "헉"(나인들, KM អា៎!)
- art_space: **위 왼쪽~가운데(x 4–56%, y 2–26%)** — 창호지 윗부분 · 병풍 + sfx용 **문 위쪽 작은 자리(x 78–98%, y 30–46%)** — 나인들 머리 위의 어두운 문 안쪽
- attach: refs/BAEK_turnaround.png, refs/LOC_L1_TASTING_plate.png, refs/PRINCE_turnaround.png
- fx/note: 이 컷은 가장 크게 보이는 1명이 없다 → 감찰을 FULL로 써도 됨(prompt-smith 판단). 상궁 강조 금지.

### panel_019
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (로우앵글)
- beat: ③ ⚖ 집행 ⟨회수: P11 제약⟩ · 긴장 8 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: low-angle, 감찰 손 + 얼굴 (상 높이에서 올려다봄)
- composition: 앞쪽 아래(x 20–78%, y 74–96%) 상 가장자리를 잡은 감찰의 큰 손(검은 소매), 상 위 그릇들 흐림. 위로(x 34–84%, 갓 꼭대기 y 38%, 얼굴 y 46–64%) 내려다보는 감찰의 얼굴, LEFT 허리 칼자루가 화면 오른쪽 가장자리(x 80–92%, y 66–80%). 위 36%는 어두운 들보 · 천장
- characters: BAEK(FULL, BAEK_HAND_ON_TABLE, 표정 ②)
- emotion: 판결
- props: PROP_TABLE_BREAKFAST · PROP_SWORD
- dialogue_ref (2): ① 백 감찰 dialogue "상은 내가 가져간다." / ② 백 감찰 dialogue "수라간은 통째로 문초한다." (둘 다 꼬리 ↓ 감찰)
- art_space: **위 36%(x 4–96%, y 2–36%)** — 갓 위 어두운 들보 · 천장. 얼굴 · 흉터는 그 아래
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png
- fx/note: 상을 실제로 들지 않는다(잡기만).

### panel_020
- scene_id: S01 / location: LOC_L1_TASTING (얼굴 클로즈업)
- beat: ④ 미니 예측 심기 · 긴장 7.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (얼굴의 밝은 쪽 = 화면 왼쪽)
- camera: 눈높이 정면 face close-up
- composition: 채령 얼굴(x 16–80%, y 30–90%), 핏기가 가심. 아래 왼쪽 가장자리(x 4–34%, y 82–98%) 은침을 쥔 채 굳은 손가락(회흑색 끝이 살짝). 위 28%는 흐린 무지 병풍
- characters: CHAERYEONG(FULL, 표정 ④ `eyes wide with a sudden chill, small pupils, holding her breath` + 변주 `face drained of color`)
- emotion: 또 독?
- props: PROP_NEEDLE_TARNISH(일부)
- dialogue_ref (1): ① 채령 thought "또… 독?"
- art_space: **위 28%(x 4–96%, y 2–28%)** — 흐린 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: ⑧(얼어붙음)은 P60용으로 아낀다.

### panel_021
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (채령 어깨 너머 문지방)
- beat: ④ ⟨복선 C' 2차 노출⟩ 미스디렉션: 상궁 = 시험하는 자 · 긴장 8 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: over-the-shoulder, 채령 어깨 너머 문지방의 상궁 medium — 초점은 상궁
- composition: 앞쪽 아래 왼쪽(x 0–40%, y 46–100%) 돌아보는 채령의 어깨 · 뒤통수 · 땋은 머리(초점 밖). 중경 화면 오른쪽(x 54–82%, 머리 y 32–42%, 발 y 88%) 열린 문의 문지방에 선 민 상궁 — EP01 P31보다 크게, **같은 미소로 채령을 봄**, **RIGHT 손이 LEFT 소매 속**(손 모양 또렷이, y 52–62%). 위 30%(x 4–52%, y 2–30%)는 채령 쪽 위의 어두운 들보 · 병풍
- characters: MIN(FULL, MIN_SLEEVE_HAND, 표정 ④ `quiet and watchful, lips relaxed in a very faint smile, eyes steady`) · CHAERYEONG(뒷모습 상태 토큰, 초점 밖)
- emotion: 의심이 상궁에게 꽂힘
- props: 손수건 안 보임
- dialogue_ref (1): ① 채령 thought "입을 다물라는 게… 이거였어?"
- art_space: **위 왼쪽(x 4–52%, y 2–30%)** — 채령 어깨 쪽 위의 들보 · 병풍. 상궁 얼굴 · 소매는 그 밖
- attach: refs/MIN_turnaround.png, ep01 panel_031, refs/MIN_expressions.png
- fx/note: 당의 NOT purple. 손수건 · 얼룩 안 보임. ep01 P31의 손 모양과 같게.

### panel_022
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (낮은 측면)
- beat: ④ ⟨반전: 미니 1단 시작⟩ 노른자 냄새 · 쓴 냄새 없음 · 긴장 7.5 · gap_after 0
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: [낮은 측면 코끝 — ep01 P20 메아리] 상 높이의 낮은 측면 close-up
- composition: [ep01 P20과 같은 배치] 아래 오른쪽(x 50–95%, y 60–96%) 왕자 놋 그릇 테두리와 노란 죽. 왼쪽 가운데(x 8–55%, y 42–84%) 몸을 숙인 채령의 옆얼굴, 코끝이 그릇 가까이(거리가 읽히게), 손에 끝이 회흑색인 은침 — 받침(x 30–46%, y 84–96%)에 내려놓으려 함. 위 38%는 흐린 병풍
- characters: CHAERYEONG(FULL 얼굴, 표정 ③ `eyes narrowed in sharp focus, brows slightly drawn together, lips parted`)
- emotion: 냄새를 맡는다
- props: PROP_PRINCE_BOWL · PROP_YOLK_PORRIDGE · PROP_NEEDLE_TARNISH · PROP_NEEDLE_STAND
- dialogue_ref (2): ① 채령 thought "…노른자 냄새." / ② 채령 thought "쓴 냄새는… 없어."
- art_space: **위 38%(x 4–96%, y 2–38%)** — 그릇 반대쪽의 흐린 병풍(생각 풍선 둘)
- repeat: 낮은 측면 ← **ep01 panel_020**. 바뀌는 것: 한낮 → 아침빛 · 국 → 노른자 죽 · 은침 끝 회흑색 · 위 빈자리 28% → 38%(얼굴 조금 아래로)
- attach: ep01 panel_020, refs/CHAERYEONG_expressions.png, refs/PROP_TABLEWARE.png
- fx/note: 테두리 · 죽에 보라 0. 이후 은침은 받침 위.

### panel_023
- scene_id: S01 / location: LOC_L1_TASTING (ECU)
- beat: ④ ⟨반전: 미니 1단 = 거짓 경보⟩ · 긴장 7.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: extreme close-up, 눈 하나 + 눈썹 (ep01 P21 프레이밍)
- composition: 채령의 눈(x 10–90%, y 46–86%), 동공이 흔들림, 눈가가 살짝 젖음. 위 40%는 초점 밖의 부드러운 이마 그늘 · 어두운 머리칼(무늬 없는 어두운 면)
- characters: CHAERYEONG(FULL 눈, 표정 ④ + 변주 `relief and fear at the same time, eyes glistening`)
- emotion: 안도와 공포(지식 = 정체)
- props: —
- dialogue_ref (2): ① 채령 thought "은은 노른자에도 검어져." / ② 채령 thought "…아버지가 그랬어."
- art_space: **위 40% 띠(x 4–96%, y 2–40%)** — 흐린 어두운 머리칼 · 그늘
- repeat: 눈 ECU(낮) ← ep01 panel_021(선택). 바뀌는 것: 아침빛 · 표정 · 위 띠 40%
- attach: refs/CHAERYEONG_expressions.png, ep01 panel_021
- fx/note: **회차 안 원본** → P54(밤 눈 ECU)와 같은 프레이밍.

### panel_024
- scene_id: S01 / location: LOC_L1_TASTING (세 인서트)
- beat: ④ 딜레마 ⚖ (EP01 P23 메아리) · 긴장 8 · gap_after 40
- size: large (3단 분할) · aspect: **9:16**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 세 칸 모두 close-up insert, 눈높이
- composition: **이 회차 유일한 칸 나눔 예외**(ep01 P23과 같은 형식). 세 칸을 위아래로 쌓고 가는 검은 가로 띠 두 줄로 나눔: **위 칸(y 0–28%)** = 상 가장자리를 잡고 들어 올리려는 백 감찰의 큰 손(검은 소매), 칸의 아래쪽(y 10–28%). **가운데 칸(y 30–70%)** = 문 안쪽 바닥에 무릎 꿇은 나인 둘의 떨리는 회청색 어깨 · 숙인 뒤통수, 칸 아래쪽(y 56–70%)에 작게; 그 위(y 32–55%)는 밝은 문틀 옆의 무지 흰 벽 · 문 안쪽의 조용한 면. **아래 칸(y 72–100%)** = 채령의 꾹 다문 입술 · 턱(아래 얼굴 close-up, x 20–80%). 대안(Flow가 칸을 망칠 때): 한 장의 깊이 구도 — 전경 아래 꾹 다문 입술, 중경 상을 잡은 손, 뒤 위 문가의 나인들(말풍선 자리는 뒤쪽 흰 벽)
- characters: BAEK(BAEK_HAND_ON_TABLE) · KITCHEN_MAIDS(뒷모습 · 어깨) · CHAERYEONG(아래 얼굴, 표정 ⑥ 입술만 `lips pressed firmly together`)
- emotion: 압박 — 말하면 정체, 안 하면 수라간
- props: PROP_TABLE_BREAKFAST(가장자리)
- dialogue_ref (2): ① 채령 thought "말하면… 또 그 약재상의 딸이 돼." (48cp) / ② 채령 thought "안 하면… 수라간이 끌려가."
- art_space: **가운데 칸 위쪽(x 6–94%, y 32–55%)** — 나인들 위의 무지 흰 벽 · 문 안쪽(생각 풍선 둘, 위아래) / 대안 구도에서는 뒤쪽 흰 벽
- repeat: 3단 분할 ← **ep01 panel_023**. 바뀌는 것: 위 칼자루 → 상을 잡은 손 · 가운데 향 꽁초 → 나인 어깨 · 아래 주먹 → 입술 · 칸 높이 28/40/28
- attach: ep01 panel_023, refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: prompt-smith: Avoid 줄에서 `panel borders`를 빼고 `extra panels`로(style-bible §5-1, ep01 P23과 같음).

### panel_025
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ④ 왕자의 고집 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이, 왕자 정면 medium
- composition: 왕자(x 24–70%, 머리 y 34–50%)가 노른자 죽 그릇을 두 팔로 가슴에 꼭 끌어안음 — 입에 대지 않음(그릇 y 58–78%). 화면 오른쪽 위에서(x 70–100%, y 26–46%) 상 쪽으로 뻗다 멈춘 감찰의 검은 소매 · 큰 손. 위 왼쪽(x 4–60%, y 2–30%)은 빛나는 창호지 · 병풍
- characters: PRINCE(FULL, PRINCE_HUG_BOWL, 표정 ⑤ `stubborn and determined, brows down, mouth set, chin up`) · BAEK(손 · 소매)
- emotion: 작은 몸의 고집 (독자: "독일지도 모르는데")
- props: PROP_PRINCE_BOWL · PROP_YOLK_PORRIDGE · PROP_TIGER(방석 위)
- dialogue_ref (1): ① 왕자 dialogue(shout 가능 — letterer) "안 돼! 그거 내 죽이야!" (꼬리 ↓ 왕자)
- art_space: **위 왼쪽(x 4–60%, y 2–30%)** — 빛나는 창호지 · 병풍. 그릇 · 얼굴 · 감찰 손은 그 밖
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/BAEK_turnaround.png
- fx/note: 그릇 테두리가 입에 닿으면 REGEN(EP01 M1과 다르다 — 먹지 않는다).

### panel_026
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ④ ⚖ 서툰 다정함 + 법 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 two-shot — 거대한 감찰 vs 작은 왕자
- composition: 화면 오른쪽(x 44–94%, 갓 꼭대기 y 36%) 백 감찰이 한쪽 무릎을 굽혀 왕자와 눈높이를 맞춤, 큰 손이 그릇 위 공중에서 멈춤(x 40–56%, y 62–72%). 화면 왼쪽(x 8–42%, 머리 y 48–60%) 그릇을 끌어안은 왕자. 몸집 차이가 또렷이. 위 34%는 들보 · 병풍 · 창호지 윗부분
- characters: BAEK(FULL, BAEK_KNEEL, 표정 ⑤ `stiff and awkward, unsure how to scold a child, brows raised, mouth tight`) · PRINCE(SHORT, PRINCE_HUG_BOWL, 표정 ①)
- emotion: 법의 벽 앞의 아이
- props: PROP_PRINCE_BOWL · PROP_YOLK_PORRIDGE · PROP_SWORD
- dialogue_ref (2): ① 백 감찰 dialogue "왕자 마마. 놓으십시오." / ② 백 감찰 dialogue "은침이 검습니다." (둘 다 꼬리 ↓ 감찰)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 갓 위의 들보 · 병풍 · 창호지 윗부분
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png, refs/PRINCE_turnaround.png
- fx/note: 감찰 키 > 왕자, 무릎을 굽혀도 여전히 가장 큰 몸.

### panel_027
- scene_id: S01 / location: LOC_L1_TASTING (클로즈업)
- beat: ④ ⟨반전: 미니 2단 공개⟩ ⟨회수 M2⟩ · 긴장 7.5 · gap_after 20
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 face close-up
- composition: 왕자 얼굴(x 16–80%, y 40–82%), 팔(八)자 눈썹, 눈에 눈물이 고임. 아래(y 82–100%) 더 꼭 끌어안은 놋 그릇 테두리와 진홍 소매. 위 38%는 흐린 창호지 · 병풍
- characters: PRINCE(FULL, PRINCE_HUG_BOWL, 표정 ① `scared and wary, lips pressed tight, looking up, eyebrows slanting upward` + 변주 `eyes brimming with tears`)
- emotion: 위협의 정체가 흔들림
- props: PROP_PRINCE_BOWL
- dialogue_ref (2): ① 왕자 dialogue "독 아니야…" / ② 왕자 dialogue "내가 해 달라고 했어." (짧게, 꼬리 ↓ 왕자)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 흐린 창호지 · 병풍
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 왕실 근엄 표정 금지(아이 얼굴).

### panel_028
- scene_id: S01 / location: LOC_L1_TASTING (ECU)
- beat: ④ ⟨반전: 미니 정점⟩ ⟨복선 W6⟩ 위협 → 그리움 · 긴장 8 · gap_after **240**
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (창 쪽 화면 왼쪽이 밝음)
- camera: extreme close-up, 왕자 얼굴
- composition: 왕자 얼굴(x 8–86%, y 30–90%, 이마 위쪽은 잘림), 한쪽 뺨에 **눈물 한 방울**. 아래 띠(y 88–100%) 진홍 깃 + 금 테두리 한 줄. 위 28%는 흐린 창호지 빛
- characters: PRINCE(FULL, 표정 ① + 변주 `a single tear rolling down his cheek, lips trembling`)
- emotion: 그리움
- props: —
- dialogue_ref (1): ① 왕자 dialogue "어마마마가 해 주시던 죽이야." (꼬리 ↓ 왕자)
- art_space: **위 28%(x 4–96%, y 2–28%)** — 흐린 창호지 빛
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 눈물은 사실적으로(만화 눈물 기호 금지). 뒤 여백 240 — 미니 반전 착지.

### panel_029
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (로우앵글)
- beat: ⑤ ⚖ 법의 벽 · ⟨복선 E3: 상궁의 침묵⟩ · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: low-angle medium
- composition: 화면 가운데~왼쪽(x 26–70%, 갓 꼭대기 y 36%) 일어선 백 감찰, 흔들림 없이 내려다봄, 칼은 LEFT 허리. 뒤 화면 오른쪽 문지방(x 76–92%, 머리 y 42–48%) 민 상궁이 **작게**, 미소 그대로, 두 손을 앞에 모음, 아무 말 없음. 위 34%는 어두운 들보 · 문틀 윗부분
- characters: BAEK(FULL, 표정 ②) · MIN(SHORT, 문지방에 작게 상태 토큰, 표정 ④)
- emotion: 법 + 침묵의 관찰
- props: PROP_SWORD · PROP_HANKY_CLEAN(작게, 손에 접힘)
- dialogue_ref (2): ① 백 감찰 dialogue "청한 것이든 아니든." / ② 백 감찰 dialogue "은침이 검으면 법도대로다." (둘 다 꼬리 ↓ 감찰)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 갓 위의 어두운 들보 · 문틀. 상궁 머리는 y 42% 아래
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png, refs/MIN_turnaround.png
- fx/note: 상궁 강조 금지(작게 · 조명 평범). 상궁이 보이는 **마지막 L1 컷** — 이후 L1 컷에는 넣지 않는다.

### panel_030
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (손 클로즈업)
- beat: ⑤ 부드러움 · 금기 T2 회피 · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 상 높이 close-up two-shot (손만)
- composition: 가운데 아래(x 14–86%, y 34–94%) 놋 그릇 테두리를 감싼 왕자의 작은 두 손(진홍 소매 · 금 테두리), 그 **손 위에** 채령의 두 손(연두 소맷부리)이 가만히 포개짐 — 채령 손은 그릇에 닿지 않음. 그릇 안 노란 죽이 살짝. 위 26%는 흐린 장판 · 상판
- characters: PRINCE(PRINCE_HANDS_ON_BOWL) · CHAERYEONG(손 클로즈업 상태 토큰)
- emotion: 다정함
- props: PROP_PRINCE_BOWL · PROP_YOLK_PORRIDGE
- dialogue_ref (1): ① 채령 dialogue "왕자 마마. 잠깐만 빌려 주세요." (꼬리 ↘ 화면 오른쪽 위 = 채령 쪽)
- art_space: **위 26%(x 4–96%, y 2–26%)** — 흐린 상판 · 장판
- attach: refs/PROP_TABLEWARE.png, refs/PRINCE_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 반지 · 장신구 없음. 채령 맨손이 그릇 테두리에 닿으면 REGEN.

### panel_031
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (채령 정면, 감찰 쪽에서)
- beat: ⑤ ⟨이중의미 E1⟩ ⟨회수: EP01 P01⟩ 지식 0 · 직무만 · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 약간 높은 눈높이(서 있는 감찰 쪽에서), 채령 정면 medium — 세로 큰 컷
- composition: 채령 정면(x 28–72%, 머리 y 32–46%) 무릎 꿇은 채 등을 곧게, 노른자 죽 그릇을 두 손으로 받쳐 들고(y 58–70%), 감찰을 정면으로 올려다봄. RIGHT 허리 노리개는 화면 왼쪽(x 26–34%, y 72–82%). 화면 왼쪽 위 가장자리(x 0–14%, y 0–42%) 초점 밖 감찰의 검은 소매 · 갓 챙 일부, 그의 그림자가 채령 앞 장판에 비스듬히. 위 28%(x 16–96%)는 그녀 뒤의 흐린 무지 병풍 · 어두운 벽
- characters: CHAERYEONG(FULL, 무릎 꿇음, 표정 ⑥) · BAEK(소매 · 갓 챙, 그림자)
- emotion: 몸으로 증명하겠다는 선언
- props: PROP_PRINCE_BOWL · PROP_YOLK_PORRIDGE · PROP_NORIGAE
- dialogue_ref (2): ① 채령 dialogue "독이면 제가 먼저 죽습니다." / ② 채령 dialogue "그게 제 일입니다." (꼬리 ↓ 채령)
- art_space: **위 28%(x 16–96%, y 2–28%)** — 그녀 뒤의 흐린 무지 병풍 · 어두운 벽(감찰 소매 띠 x 0–14%는 그 밖)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png, refs/BAEK_turnaround.png
- fx/note: 큰 컷. 리버스 샷(감찰 쪽 시점)이므로 창은 화면 오른쪽 밖일 수 있다 — 미디엄 이상에서만 허용(EP01 P32와 같은 예외).

### panel_032
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR (바스트)
- beat: ⑤ ⏳ 재설정 · ⚖ 판돈 이동 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (얼굴의 밝은 쪽 = 화면 왼쪽)
- camera: 눈높이보다 약간 낮게, bust close-up
- composition: 백 감찰 바스트(x 30–90%, 갓 챙 y 34–42%, 얼굴 y 42–80%), 오래 내려다보다 눈만 화면 왼쪽 아래(향로 쪽)로 돌림. RIGHT 턱선 아래 흉터(정면이라 화면 왼쪽)와 콧등 혹이 보임. 위 34%는 초점 밖 어두운 들보 · 무지 병풍
- characters: BAEK(FULL, 표정 ③ `suspicious, eyes narrowed, studying her`)
- emotion: 허락 = 판돈
- props: —
- dialogue_ref (2): ① 백 감찰 dialogue "향 한 대." / ② 백 감찰 dialogue "쓰러지면, 수라간이 아니라 너부터다." (둘 다 꼬리 ↓ 감찰)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 흐린 들보 · 병풍. 흉터 · 눈은 그 아래
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png
- fx/note: —

### panel_033
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ⑤ 절차 3 · 몸 증명 시작 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 낮은 눈높이 medium, 향 연기를 전경에
- composition: 앞쪽 왼쪽 아래(x 4–30%, y 60–96%) 놋 향로에 **아직 긴 향**, 가는 연기 한 줄(y 30% 아래에서 흐려짐). 가운데~오른쪽(x 46–92%, 머리 y 30–44%) 채령이 작은 놋 국자로 죽 **가운데**를 떠 흰 기미 그릇에 덜고, 놋 숟가락으로 첫 숟가락을 입에 넣음 — 왕자 그릇에는 입을 대지 않음. 먼 쪽(x 18–44%, 머리 y 34–46%) 왕자가 눈물 자국 그대로 지켜봄. 위 28%는 창호지 윗부분 · 병풍
- characters: CHAERYEONG(FULL, 무릎 꿇음, 표정 ① `polite and composed, eyes alert and watchful`) · PRINCE(SHORT, 표정 ① + 변주 `tear-streaked cheeks`)
- emotion: 조용한 각오
- props: PROP_CENSER + PROP_INCENSE_NEW(긴 향) · PROP_SMALL_LADLE · PROP_TASTER_DISH · PROP_SPOON · PROP_PRINCE_BOWL · PROP_YOLK_PORRIDGE
- dialogue_ref (1): ① 왕자 dialogue "단이…" (위 왼쪽, 꼬리 ↓ 왕자)
- art_space: **위 28%(x 4–96%, y 2–28%)**, 특히 왼쪽 — 창호지 윗부분 · 병풍
- attach: refs/CHAERYEONG_turnaround.png, refs/PROP_TABLEWARE.png, refs/PRINCE_turnaround.png
- fx/note: 숟가락은 놋(은 아님).

### panel_034
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (와이드)
- beat: ⑤ ⏳ 절반 · 시간의 무게 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (그림자 길이는 P33과 같음 — 시간은 향으로만)
- camera: 앉은 눈높이보다 약간 높은 wide
- composition: 세 요소가 한 화면: 앞쪽 왼쪽 아래(x 4–28%, y 62–96%) 향로의 **절반 탄 향**과 가는 연기. 가운데(x 30–70%, y 50–80%) 상 위 **반쯤 빈** 왕자 그릇, 그 오른쪽에 무릎 꿇고 계속 먹는 채령(x 58–76%). 화면 오른쪽 중경(x 74–96%, 갓 꼭대기 y 14%) 팔짱 끼고 선 백 감찰. 먼 쪽 방석에 왕자 작게(x 22–40%). 문지방은 감찰 뒤로 가려 안 보임
- characters: BAEK(SHORT, BAEK_ARMS_FOLDED, 표정 ①) · CHAERYEONG(SHORT, 무릎 꿇음) · PRINCE(SHORT)
- emotion: 숨죽인 기다림
- props: PROP_INCENSE_HALF · PROP_PORRIDGE_HALF · PROP_TASTER_DISH · PROP_TABLE_BREAKFAST · PROP_SWORD
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/LOC_L1_TASTING_plate.png, refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 상궁 넣지 않음.

### panel_035
- scene_id: S01 / location: LOC_L1_TASTING (옆얼굴 클로즈업)
- beat: ⑤ 가짜 증상 서스펜스 · 긴장 8 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 side close-up
- composition: 채령 옆얼굴(x 32–92%, y 30–96%, 화면 왼쪽을 향함), 관자놀이에 **땀 한 방울**(x 64–70%, y 40–48%, 사실적). 화면 왼쪽 가장자리(x 0–26%, y 38–84%) 겁에 질려 몸을 내민 왕자(초점 약간 밖, 쌍상투 · 진홍 깃이 읽히게). 위 왼쪽(x 4–60%, y 2–28%)은 흐린 창호지 빛
- characters: CHAERYEONG(FULL, 표정 ① + 변주 `a single bead of sweat at her temple, still composed`) · PRINCE(SHORT, 표정 ①)
- emotion: 증상인가?
- props: —
- dialogue_ref (1): ① 왕자 dialogue "단이, 땀나!" (위 왼쪽, 꼬리 ↙ 왕자)
- art_space: **위 왼쪽(x 4–60%, y 2–28%)** — 흐린 창호지 빛(왕자 쪽)
- attach: refs/CHAERYEONG_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 땀은 사실적 한 방울(만화 땀방울 기호 금지). 창백 · 쓰러짐 없음.

### panel_036
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_MAIN (바스트)
- beat: ⑤ 밸브(유머 1컷) · 긴장 6.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 눈높이 bust
- composition: 채령 바스트(x 22–80%, 머리 y 26–44%), 숟가락을 든 채 작게 웃음. 앞 아래(x 30–70%, y 74–96%) 김이 오르는 흰 기미 그릇. 위 24%는 흐린 무지 병풍
- characters: CHAERYEONG(FULL, 표정 ② `a small awkward, fond smile, trying not to laugh`)
- emotion: 짧은 숨
- props: PROP_TASTER_DISH(김) · PROP_SPOON · PROP_NORIGAE(보이면 RIGHT 허리)
- dialogue_ref (1): ① 채령 dialogue "뜨거워서요, 왕자 마마." (꼬리 ↓ 채령)
- art_space: **위 24%(x 4–96%, y 2–24%)** — 흐린 무지 병풍. 김은 y 70% 아래
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: SD · 만화 기호 없음.

### panel_037
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (3요소 인서트 구도)
- beat: ⑤ ⏳ 만료 · 숨 멈춤 · 긴장 8 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 상 높이 close, 깊이 구도(한 장, 칸 나눔 없음)
- composition: 앞쪽 왼쪽(x 4–34%, y 46–94%) 향로의 **꽁초**에서 마지막 재가 막 떨어짐(선명). 가운데(x 30–70%, y 54–80%) 상 위 **빈** 왕자 그릇(열린 난초 뚜껑 곁)과 **빈** 흰 기미 그릇. 앞쪽 오른쪽(x 62–96%, y 60–92%) 놋 숟가락을 상에 내려놓는 채령의 손 — 떨림 없음. 위 30%는 흐린 장판 · 병풍
- characters: CHAERYEONG(손 클로즈업 상태 토큰)
- emotion: 끝났다
- props: PROP_INCENSE_STUB · PROP_BOWLS_EMPTY · PROP_PRINCE_BOWL · PROP_SPOON
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: refs/PROP_TABLEWARE.png, refs/CHAERYEONG_turnaround.png
- fx/note: 칸 나눔 · 테두리 금지(P24만 예외).

### panel_038
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_TABLE (하이앵글)
- beat: ⑤ 작은 달성 1 — 몸이 증명이 됨 · 긴장 7 · gap_after **240**
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: high-angle medium, 내려다봄
- composition: 가운데 아래(x 26–74%, y 44–94%) 빈 그릇들 앞의 작은 채령 — 두 손을 바닥에 짚고 고개를 숙임(얼굴은 3/4로 아래를 향하지만 읽히게: 멀쩡한 혈색, 입술 색 그대로). 앞쪽 가장자리에 상과 빈 그릇 · 꺼진 향로. 위 26%(x 4–96%, y 2–26%)는 상 너머 빈 장판
- characters: CHAERYEONG(FULL, 변주 `bowing with both hands on the floor, face calm with healthy color, lips their natural color`)
- emotion: 담담한 완수
- props: PROP_BOWLS_EMPTY · PROP_INCENSE_OUT · PROP_NORIGAE
- dialogue_ref (1): ① 채령 dialogue "다 먹었습니다." (꼬리 ↓ 채령)
- art_space: **위 26%(x 4–96%, y 2–26%)** — 상 너머 빈 장판
- attach: refs/CHAERYEONG_turnaround.png, refs/CHAERYEONG_expressions.png
- fx/note: 창백 · 식은땀 없음(멀쩡함이 증명).

### panel_039
- scene_id: S01 / location: LOC_L1_TASTING (전경 은침 + 후경 채령)
- beat: ⑥ 걸음 2칸 준비 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING — 은침 위쪽이 차갑게 반짝
- camera: 눈높이, 전경 소품 close + 후경 인물 (깊은 초점 대비)
- composition: 앞쪽 왼쪽(x 10–34%, y 30–84%) 감찰의 굵은 두 손가락이 집어 세운 은침 — **끝 1/3 회흑색**(선명), 검은 소매가 화면 왼쪽 가장자리로. 후경 오른쪽(x 44–92%, y 50–98%) 고개를 숙인 채령(초점 약간 밖). 위 오른쪽(x 36–96%, y 2–40%)은 흐린 병풍 · 창호지
- characters: BAEK(BAEK_HOLD_NEEDLE — 손 · 소매) · CHAERYEONG(SHORT, 고개 숙임)
- emotion: 차가운 관찰
- props: PROP_NEEDLE_TARNISH
- dialogue_ref (2): ① 백 감찰 dialogue "은침이 검은데," / ② 백 감찰 dialogue "너는 겁먹지 않았다." (꼬리 ↙ 화면 왼쪽 = 감찰 손 쪽)
- art_space: **위 오른쪽(x 36–96%, y 2–40%)** — 은침 반대편의 흐린 병풍 · 창호지
- attach: ep02 panel_017, refs/BAEK_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 은침 색은 P17과 같게.

### panel_040
- scene_id: S01 / location: LOC_L1_TASTING (클로즈업)
- beat: ⑥ ⟨걸음 2칸 · 미니 훅 2⟩ · 긴장 8 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 아침 · LIGHT_L1_MORNING (얼굴의 밝은 쪽 = 화면 왼쪽)
- camera: 눈높이보다 약간 낮게, face close-up
- composition: 백 감찰 얼굴(x 10–80%, 갓 챙 y 24–36%, 눈 y 50%, 턱 y 86%), 눈만 가늘어짐. RIGHT 턱 흉터(화면 왼쪽) · 콧등 혹. 위 24%는 초점 밖 들보 · 병풍
- characters: BAEK(FULL, 표정 ③ + 변주 `only his eyes narrowing to slits`)
- emotion: 단정
- props: —
- dialogue_ref (1): ① 백 감찰 dialogue "알고 있었군." (꼬리 ↓ 감찰)
- art_space: **위 24%(x 4–96%, y 2–24%)** — 갓 챙 위의 흐린 들보 · 병풍
- attach: refs/BAEK_expressions.png, refs/BAEK_turnaround.png
- fx/note: EP01 P41 "너는 너무 많이 안다"의 다음 계단(같은 클로즈업 무게).

### panel_041
- scene_id: S01 / location: LOC_L1_TASTING (클로즈업)
- beat: ⑥ 지식 대신 직분 · 긴장 7.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING
- camera: 약간 높은 눈높이(감찰 시점), face close-up
- composition: 채령 얼굴(x 18–82%, y 42–96%), 고개를 숙인 채 **눈만 위로** 들어 감찰을 봄. 위 40%는 흐린 장판 · 상 그늘(높은 시점이라 배경이 바닥)
- characters: CHAERYEONG(FULL, 표정 ⑦ `eyes lowered to one side, a quiet, guarded face` + 변주 `head still bowed, only her eyes lifted to meet his`)
- emotion: 말을 삼킨 대답
- props: —
- dialogue_ref (2): ① 채령 dialogue "기미는…" / ② 채령 dialogue "겁을 먹으면 못 먹습니다." (꼬리 ↓ 채령)
- art_space: **위 40%(x 4–96%, y 2–40%)** — 흐린 장판 · 그늘
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: —

### panel_042
- scene_id: S01 / location: LOC_L1_TASTING · VIEW_L1_DOOR
- beat: ⑥ ⚖ 해제 = 작은 달성 2 · 남은 의심 · 긴장 6.5 · gap_after **120**
- size: medium · aspect: **3:4**
- time/light: 3일째 아침 · LIGHT_L1_MORNING + 열린 문 밖의 밝은 아침빛
- camera: 방 안에서 문 쪽, 눈높이 medium
- composition: 화면 오른쪽(x 52–86%, 갓 꼭대기 y 26%) 미닫이 문틀 안에 선 백 감찰의 뒷모습(칼 = LEFT 허리 → 뒤에서 화면 왼쪽), 고개만 돌려 옆얼굴로 방 안을 한 번 돌아봄. 그의 손이 문가 쪽으로 손짓. 문 밖 밝은 회랑 바닥(x 84–98%, y 60–76%)에 엎드린 나인 둘(원경, 작게). 위 왼쪽(x 4–56%, y 2–26%)은 병풍 · 어두운 들보
- characters: BAEK(FULL, 뒷모습 상태 토큰 + 변주 `glancing back over his shoulder once`, 표정 ③) · KITCHEN_MAIDS(원경, 엎드림)
- emotion: 해제 + 남은 의심
- props: PROP_SWORD
- dialogue_ref (1): ① 백 감찰 dialogue "수라간은 풀어라." (꼬리 ↘ 감찰)
- art_space: **위 왼쪽(x 4–56%, y 2–26%)** — 무지 병풍 · 들보(감찰 반대편)
- attach: refs/BAEK_turnaround.png, refs/BAEK_expressions.png
- fx/note: 상궁 넣지 않음. 문 밖 빛은 아침빛(한낮 꿀빛 아님).

--- SCENE BREAK --- S02 · LOC_L1_TASTING · 3일째 늦은 아침 · LIGHT_L1_MORNING + 늦은 아침 변주구(§D-6)

### panel_043
- scene_id: S02 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ⑦ 밸브 시작(유머) · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 늦은 아침 · LIGHT_L1_MORNING + `now a little higher and warmer, shadows shorter; the room feels emptier`
- camera: 낮은 눈높이 two-shot medium
- composition: 사람들이 빠진 방, 상 위엔 빈 그릇 둘 · 꺼진 향로. 화면 왼쪽~가운데(x 18–52%, 머리 y 40–54%) 왕자가 빈 놋 그릇을 두 손으로 들여다보며 입을 삐죽임. 화면 오른쪽(x 58–92%, 머리 y 38–52%) 곁에 무릎 꿇은 채령. 위 34%는 창호지 · 무지 병풍(빛이 조금 높고 그림자 짧음)
- characters: PRINCE(FULL, 변주 `pouting, lower lip pushed out, peering into the empty bowl`) · CHAERYEONG(SHORT, 무릎 꿇음)
- emotion: 사랑스러운 투정
- props: PROP_BOWLS_EMPTY · PROP_PRINCE_BOWL · PROP_INCENSE_OUT · PROP_TIGER · PROP_NORIGAE
- dialogue_ref (1): ① 왕자 dialogue "내 죽… 단이가 다 먹었어." (꼬리 ↓ 왕자)
- art_space: **위 34%(x 4–96%, y 2–34%)** — 창호지 윗부분 · 무지 병풍
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/CHAERYEONG_turnaround.png
- fx/note: 감찰 · 상궁 · 나인 없음.

### panel_044
- scene_id: S02 / location: LOC_L1_TASTING · VIEW_L1_MAIN
- beat: ⑦ ⟨복선 W6②⟩ 그리움이 자랑으로 · 긴장 4.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 늦은 아침 · LIGHT_L1_MORNING + 늦은 아침 변주구 (따뜻한 빛)
- camera: 눈높이 two-shot
- composition: 화면 오른쪽(x 52–90%, 머리 y 40–54%) 채령이 미안한 듯 웃음. 화면 왼쪽(x 12–48%, 머리 y 42–56%) 왕자가 금세 눈을 반짝이며 채령을 올려다봄, 손가락 둘을 펴 보임(노른자 "두 개"). 위 38%는 창호지 · 병풍
- characters: CHAERYEONG(FULL, 표정 ②) · PRINCE(SHORT, 변주 `eyes lighting up, proud, holding up two fingers`)
- emotion: 따뜻함
- props: PROP_BOWLS_EMPTY · PROP_TIGER · PROP_NORIGAE
- dialogue_ref (2): ① 채령 dialogue "죄송해요. …맛있었어요." (위 오른쪽, 꼬리 ↘ 채령) / ② 왕자 dialogue "그치? 어마마마는 노른자를 꼭 두 개 넣었어." (위 왼쪽 조금 아래, 꼬리 ↓ 왕자)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 창호지 · 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/PRINCE_turnaround.png
- fx/note: 손가락 둘은 자연스러운 손짓(숫자 기호 · 글자 아님).

### panel_045
- scene_id: S02 / location: LOC_L1_TASTING (클로즈업, 창 쪽)
- beat: ⑦ ⟨복선 W6③⟩ 대답 없는 질문 · 긴장 4.5 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 늦은 아침 · LIGHT_L1_MORNING + 늦은 아침 변주구 — 창호지 빛이 얼굴 화면 왼쪽에
- camera: 눈높이 close-up, 3/4 (화면 왼쪽 창을 봄)
- composition: 왕자(x 30–92%, 머리 y 32–70%)가 나무 호랑이를 가슴에 끌어안고 작아짐(호랑이 y 72–92%), 시선은 화면 왼쪽 빛나는 창호지 밖. 위 왼쪽(x 4–60%, y 2–30%)은 빛나는 창호지
- characters: PRINCE(FULL, 변주 `quiet and wistful, small, looking toward the glowing window, hugging the tiger toy`)
- emotion: 그리움
- props: PROP_TIGER(깨진 귀 강조 없음)
- dialogue_ref (1): ① 왕자 dialogue "어마마마는… 언제 와?" (꼬리 ↘ 왕자)
- art_space: **위 왼쪽(x 4–60%, y 2–30%)** — 빛나는 창호지(창 쪽)
- attach: refs/PRINCE_expressions.png, refs/PRINCE_turnaround.png, refs/PROP_KEEPSAKES.png
- fx/note: 창 밖 풍경은 그리지 않는다(창호지 빛만).

### panel_046
- scene_id: S02 / location: LOC_L1_TASTING (투샷 클로즈)
- beat: ⑦ 회차 최저점 · ⟨이중의미 E2: 제목 · 내일의 탕약⟩ · 긴장 4 · gap_after **400**(가장 긺)
- size: medium · aspect: **3:4**
- time/light: 3일째 늦은 아침 · LIGHT_L1_MORNING + 늦은 아침 변주구 — 회차에서 가장 따뜻한 빛
- camera: 눈높이(왕자 높이) close two-shot
- composition: 채령이 왕자 옆에 바짝 다가앉아 눈높이를 맞춤: 화면 왼쪽(x 8–46%, 머리 y 44–60%) 호랑이를 안은 왕자가 고개를 돌려 채령을 봄, 화면 오른쪽(x 46–90%, 머리 y 40–56%) 채령이 몸을 낮춰 다정하게 웃음. 위 40%는 따뜻한 창호지 빛 · 병풍
- characters: CHAERYEONG(FULL, 변주 `a gentle, warm smile, eyes soft, leaning down to his eye level`) · PRINCE(SHORT, 표정 ② `shoulders relaxing, a small relieved face`)
- emotion: 온기(재독 시 내일의 탕약)
- props: PROP_TIGER · PROP_NORIGAE(RIGHT 허리, 허리에 있는 **마지막 낮 컷**)
- dialogue_ref (2): ① 채령 dialogue "또 드시고 싶으면 청하세요." / ② 채령 dialogue "그땐 제가 먼저 먹을게요." (꼬리 ↘ 채령)
- art_space: **위 40%(x 4–96%, y 2–40%)** — 따뜻한 창호지 빛 · 무지 병풍
- attach: refs/CHAERYEONG_expressions.png, refs/PRINCE_expressions.png
- fx/note: 뒤 여백 400 = 낮 → 밤.

--- SCENE BREAK --- S03 · LOC_L2_CORRIDOR · 3일째 밤 · LIGHT_L2_NIGHT

### panel_047
- scene_id: S03 / location: LOC_L2_CORRIDOR · VIEW_R
- beat: ⑧ 같은 자리, 바뀐 주인 ⟨R⟩ · 긴장 6.5 · gap_after 40
- size: large · aspect: **9:16**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT (짙은 남청 밤, 켜진 등롱 하나, 차가운 달빛)
- camera: [R-WIDE] ep01 P05 · P48과 같은 카메라 · 거리 · 높이
- composition: [R-WIDE 반복] ep01 P05와 같은 배치: 둥근 황토 기둥 x 22–34%, 기둥의 빈 당번 판 y 48–60%(연두 끈 = **가운데 줄**), 기둥 오른쪽 처마 등롱(x 36–44%, y 10–22%) **켜짐**, 오른쪽 숙소 창호지 문들, 왼쪽 안마당 · 기와(달빛). 기둥 옆(x 40–66%, y 46–90%)에 **채령 혼자** 서서 고개를 숙이고 RIGHT 허리의 노리개 끈을 두 손으로 푸는 중(정면 3/4이라 노리개는 화면 왼쪽 쪽). 상궁 없음. **오른쪽 위(x 48–96%, y 3–24%)는 어두운 회벽 · 처마 밑** — 조용히
- characters: CHAERYEONG(FULL, CHAERYEONG_UNTYING, 변주 `alone, head bowed, a quiet, guarded face`)
- emotion: 낮의 온기 → 밤의 냉기
- props: PROP_DUTYBOARD(BLANK, 연두 끈 가운데 줄) · PROP_LANTERN(켜짐, 무지) · PROP_NORIGAE(풀리는 중)
- dialogue_ref: — 무대사 —
- art_space: silent (단 ep01 P05와 같은 오른쪽 위를 조용하게 유지 — 구도 일치용)
- repeat: R-WIDE ← **ep01 panel_005**(원본). 바뀌는 것: 빛 아침 → 밤(ep01 P48과 같음) · 인물: 상궁 + 채령 → 채령 혼자, 노리개 끈을 풂 · 연두 끈 위 → 가운데 줄
- attach: ep01 panel_005, ep01 panel_048, refs/CHAERYEONG_turnaround.png
- fx/note: 앞 여백 400 뒤 등장. 구조물 위치(기둥 · 등롱 · 당번 판 · 문 개수)가 ep01 P05와 다르면 REGEN. 밤이 보라로 흐르면 REGEN.

### panel_048
- scene_id: S03 / location: LOC_L2_CORRIDOR (손 클로즈업, 배경 어둠)
- beat: ⑧ ⟨복선 W2: 흰 천⟩ 노리개를 감춘다 · 긴장 7 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT — 등롱 주황빛이 손 위에
- camera: 가슴 높이, 손 close-up, 약간 위에서
- composition: 아래 가운데(x 18–82%, y 44–92%) 채령의 두 손(연두 소맷부리 · 남색 끝동)이 손바닥만 한 **무지 순백 무명 천**으로 옥빛 나비 노리개를 싸는 중 — 붉은 술이 천 밖으로 살짝. 노리개가 이 회차에서 마지막으로 또렷이 보인다. 위 40%는 초점 밖 남청 어둠 · 처마 그늘
- characters: CHAERYEONG(CHAERYEONG_WRAPPING — 손 클로즈업)
- emotion: 감춤
- props: PROP_NORIGAE · PROP_WHITE_CLOTH
- dialogue_ref (2): ① 채령 thought "언니 거라는 걸…" / ② 채령 thought "아는 사람이 있어."
- art_space: **위 40%(x 4–96%, y 2–40%)** — 남청 어둠 · 처마 그늘(천 · 노리개는 그 아래)
- attach: refs/PROP_KEEPSAKES.png, refs/CHAERYEONG_turnaround.png
- fx/note: 흰 천은 순백 — 자수 · 무늬 · 얼룩 · 글자 없음, 등롱빛에 따뜻해 보여도 됨, 보라 기운 금지(EP30 회수 전까지).

### panel_049
- scene_id: S03 / location: LOC_L2_CORRIDOR (기둥 옆, 등 뒤 어둠)
- beat: ⑧ 노리개 없음 시작 · 상궁 등장(목소리) · 긴장 7 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT (등롱빛이 채령 앞면에, 등 뒤는 남청 어둠)
- camera: 눈높이 medium (채령 앞에서)
- composition: 채령(x 26–74%, 머리 y 34–48%, 허리 y 86%)이 카메라 쪽을 향해 서서 한 손으로 흰 천 꾸러미를 저고리 앞섶 안에 밀어 넣는 순간(손 y 58–70%) — 등이 굳고 눈이 커짐. **허리에 노리개 없음.** 화면 왼쪽 가장자리(x 0–16%)에 기둥 일부. 그녀 뒤 회랑 깊이는 어둠(화면 오른쪽 위로 사라지는 처마 · 문들). 위 32%(x 4–96%, y 2–32%)는 어두운 처마 밑 · 남청 어둠
- characters: CHAERYEONG(FULL, CHAERYEONG_TUCKING → **CHAERYEONG_NORIGAE_HIDDEN**, 변주 `stopping short, eyes slowly widening, her back going stiff`) · MIN(화면 밖)
- emotion: 들켰다
- props: PROP_WHITE_CLOTH(꾸러미, 앞섶에 들어가는 중) · PROP_LANTERN(켜짐, 프레임 위 밖 또는 가장자리)
- dialogue_ref (1): ① 민 상궁(화면 밖) dialogue "오늘은 죽을 한 그릇 다 먹었다지, 얘야." (꼬리 ↗ 화면 오른쪽 위 가장자리 = 그녀 뒤 어둠 속 회랑)
- art_space: **위 32%(x 4–96%, y 2–32%)** — 어두운 처마 밑 · 남청 어둠(오른쪽이 더 어둡게)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: **이 컷부터 P60까지 NORIGAE_HIDDEN**(§D-1). 첨부 레퍼런스의 노리개를 따라 그리면 REGEN.

### panel_050
- scene_id: S03 / location: LOC_L2_CORRIDOR (상궁 미디엄 + 채령 어깨)
- beat: ⑧ ⟨이중의미 E3: 칭찬 → 지켜봤다⟩ ⟨회수: 요구 1단계 이행 확인⟩ · 긴장 7.5 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT — 등롱빛이 상궁의 RIGHT 쪽(화면 왼쪽)을 데움
- camera: 눈높이 over-the-shoulder (채령 어깨 너머 상궁)
- composition: 앞쪽 아래 오른쪽(x 58–100%, y 50–100%) 돌아선 채령의 어깨 · 땋은 머리 · 붉은 댕기(초점 밖, 허리 안 보임). 중경 왼쪽~가운데(x 16–58%, 머리 y 34–48%) 민 상궁이 등롱 아래로 걸어 나옴, 같은 미소, RIGHT 손에 접힌 깨끗한 손수건(y 64–74%). 위 오른쪽(x 50–98%, y 2–36%)은 어두운 기둥 · 남청 처마 그늘
- characters: MIN(FULL, 표정 ① `a calm, kind closed-lip smile with crinkled eyes`) · CHAERYEONG(SHORT 뒷모습 상태 토큰, NORIGAE_HIDDEN)
- emotion: 칭찬의 온도 = 감시의 증거
- props: PROP_HANKY_CLEAN(RIGHT 손) · PROP_LANTERN(켜짐, 상궁 위쪽 화면 왼쪽)
- dialogue_ref (2): ① 민 상궁 dialogue "입은 다물고," / ② 민 상궁 dialogue "그릇은 비웠구나, 얘야." (꼬리 ↙ 상궁)
- art_space: **위 오른쪽(x 50–98%, y 2–36%)** — 어두운 기둥 · 남청 처마 그늘(풍선 둘, 위아래). 등롱은 화면 왼쪽 위 밖에
- attach: refs/MIN_turnaround.png, refs/MIN_expressions.png, ep01 panel_052
- fx/note: 얼룩 0(CLEAN). 당의 NOT purple — 등롱 주황 + 남청이 겹쳐도 burgundy. 악역 표정 금지.

### panel_051
- scene_id: S03 / location: LOC_L2_CORRIDOR (클로즈업, 상궁 쪽 낮은 앵글)
- beat: ⑧ 대립 첫 말 · 주력 예측 심기 · 긴장 8 · gap_after 20
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT (등롱빛이 얼굴 한쪽)
- camera: 상궁 쪽에서 약간 낮은 앵글, close-up
- composition: 채령 얼굴 · 어깨(x 16–84%, 얼굴 y 40–76%)가 처음으로 상궁을 정면으로 노려봄, 두 주먹을 쥠(가슴 아래, y 84–98%). 앞섶은 살짝 불룩(흰 천 꾸러미, 천은 안 보임). 위 38%는 남청 밤하늘 · 처마 밑
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN, 표정 ⑥ + 변주 `glaring straight at her for the first time, fists clenched`)
- emotion: 분노
- props: —
- dialogue_ref (2): ① 채령 dialogue "왕자 마마 그릇에 독을 바르신 분이…" / ② 채령 dialogue "칭찬하러 오셨어요?" (꼬리 ↓ 채령)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 남청 하늘 · 처마 밑
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 채령 shout 아님(낮은 목소리 · 존대).

### panel_052
- scene_id: S03 / location: LOC_L2_CORRIDOR (손 · 소매 클로즈업)
- beat: ⑨ ⟨복선 C' 회수 직전⟩ 칼? 독? · 긴장 8.5 · gap_after 0
- size: insert · aspect: **1:1**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT — 등롱 주황빛이 손등에, 소매 속은 어둠
- camera: 가슴 높이, 손 close-up
- composition: 가운데(x 18–82%, y 26–86%) 민 상궁의 **RIGHT 손이 LEFT 소매 속으로 천천히** 들어감(ep01 P31과 같은 손 모양), 자두색 소매 + 흰 소맷부리. 무엇이 나올지 보이지 않음. 배경은 남청 어둠
- characters: MIN(MIN_SLEEVE_HAND_CU)
- emotion: 숨 멈춤
- props: 손수건 안 보임
- dialogue_ref: — 무대사 —
- art_space: silent
- attach: ep02 panel_021, ep01 panel_031, refs/MIN_turnaround.png
- fx/note: 소매 = deep wine-red plum, NOT purple. 칼 · 병 등 다른 물건 암시 금지.

### panel_053
- scene_id: S03 / location: LOC_L2_CORRIDOR (손바닥 ECU, 배경 어둠)
- beat: ⑨ ⟨반전: 주력 공개 1⟩ ⟨회수 C'⟩ W1 첫 조각 · 긴장 9 · gap_after 20
- size: large · aspect: **9:16**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT — 등롱빛이 손바닥에, 환약 위에 작은 주황 반사 점 하나
- camera: extreme close-up, 손바닥 정면, 정지
- composition: 아래 가운데(x 20–80%, y 50–88%) 펼쳐진 민 상궁의 RIGHT 손바닥, 자두색 소맷부리가 아래 가장자리. 손바닥 한가운데(x 44–56%, y 62–70%) **검은 둥근 환약 한 알** — 각인 없음, 위에 등롱빛 점 하나. 위 46%(y 0–46%)는 깊은 남청 어둠
- characters: MIN(MIN_PALM_PILL — 손)
- emotion: 반전 — 독이 아니라 해독
- props: PROP_ANTIDOTE_PILL
- dialogue_ref (2): ① 민 상궁 dialogue "어제 그 양으로는" / ② 민 상궁 dialogue "아무도 안 죽는다, 얘야." (꼬리 ↓ 손바닥 쪽 — 상궁 본인은 프레임 밖)
- art_space: **위 30%(x 6–94%, y 3–30%)** — 깊은 남청 어둠(풍선 둘). 환약 · 손은 y 50% 아래
- attach: refs/MIN_turnaround.png, ep02 panel_052
- fx/note: 큰 컷. 환약에 글자 · 무늬 · 포장 없음, 보라 반사 금지.

### panel_054
- scene_id: S03 / location: LOC_L2_CORRIDOR (ECU)
- beat: ⑨ ⟨회수 C': EP01 P31 + EP02 P21⟩ ⟨회수: EP01 P08 해독환⟩ · 긴장 8.5 · gap_after 0
- size: insert · aspect: **1:1**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT
- camera: extreme close-up, 눈 (ep01 P51 · ep02 P23 프레이밍)
- composition: 채령의 눈(x 10–90%, y 46–86%), 동공에 등롱 주황 점 하나. 위 40%는 흐린 머리칼 · 남청 그늘
- characters: CHAERYEONG(FULL 눈, 표정 ④)
- emotion: 이해 — 그때도, 오늘 아침에도
- props: —
- dialogue_ref (2): ① 채령 thought "해독환… 그때 소매 속에 있던 거." / ② 채령 thought "오늘 아침에도."
- art_space: **위 40% 띠(x 4–96%, y 2–40%)** — 흐린 어두운 머리칼 · 남청 그늘
- repeat: 눈 ECU(밤) ← **ep01 panel_051** · 회차 안 짝 ep02 panel_023. 바뀌는 것: 위 띠 40%(생각 둘) · 표정 ④
- attach: ep01 panel_051, ep02 panel_023, refs/CHAERYEONG_expressions.png
- fx/note: 회상 이미지 없음(독자 기억으로). 동공 빛은 주황, 보라 반사 금지.

### panel_055
- scene_id: S03 / location: LOC_L2_CORRIDOR (정면 클로즈업)
- beat: ⑨ ⟨반전: 주력 정점⟩ · 긴장 9 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT + **LIGHT_LANTERN_FACE**(얼굴 화면 왼쪽 반만 따뜻, 반은 남청 그림자)
- camera: 정면 눈높이 close-up (앵글로 악역을 만들지 않음)
- composition: 민 상궁 얼굴(x 8–64%, y 30–86%), 같은 온화한 미소. 등롱 쪽(화면 왼쪽) 반만 따뜻. LEFT 관자놀이 흰 머리는 화면 오른쪽, y 30% 아래. 화면 오른쪽 위(x 50–98%, y 2–40%)는 깊은 남청 그림자
- characters: MIN(FULL, 표정 ①)
- emotion: 같은 얼굴, 다른 의미
- props: —
- dialogue_ref (2): ① 민 상궁 dialogue "네가 아니었으면," / ② 민 상궁 dialogue "내가 엎었을 거다." (꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 50–98%, y 2–40%)** — 얼굴 어두운 쪽의 남청 그림자(풍선 둘, 위아래)
- repeat: 등롱 얼굴 CU ← ep01 panel_053(빛 · 프레이밍). 바뀌는 것: 9:16 → 3:4
- attach: ep01 panel_053, refs/MIN_expressions.png, refs/MIN_turnaround.png
- fx/note: 차가운 · 악한 표정 금지(빛만 바뀜). 민 상궁 shout 금지.

### panel_056
- scene_id: S03 / location: LOC_L2_CORRIDOR (투샷 + 소매 손)
- beat: ⑨ W1 경계 · 해독환 = 상궁이 쥔다 · 답 보류 · 긴장 8.5 · gap_after **240**
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT
- camera: 눈높이 two-shot medium, 손이 읽히는 거리
- composition: 화면 왼쪽(x 6–46%, 머리 y 40–54%) 민 상궁이 RIGHT 손으로 검은 환약을 LEFT 소맷부리 안에 다시 넣음 — 손(y 64–76%)이 앞쪽에 또렷이(인서트 역할, 칸 나눔 없음). 화면 오른쪽(x 54–90%, 머리 y 40–54%) 채령이 반 걸음 다가섬, 앞섶 살짝 불룩. 위 38%는 남청 하늘 · 처마 밑
- characters: MIN(FULL, MIN_PILL_BACK, 표정 ⑤ `eyes lowered toward her hands, a faint kind smile`) · CHAERYEONG(SHORT, NORIGAE_HIDDEN, 표정 ⑥)
- emotion: 아직은 말해 주지 않는다
- props: PROP_ANTIDOTE_PILL(소매로 들어가는 중)
- dialogue_ref (2): ① 채령 dialogue "…그럼, 왜요?" (위 오른쪽, 꼬리 ↘ 채령) / ② 민 상궁 dialogue "그건 아직이다, 얘야." (위 왼쪽 조금 아래, 꼬리 ↙ 상궁)
- art_space: **위 38%(x 4–96%, y 2–38%)** — 남청 하늘 · 처마 밑
- attach: refs/MIN_turnaround.png, refs/CHAERYEONG_turnaround.png, ep02 panel_053
- fx/note: 환약을 채령에게 주지 않는다(EP05 보호). 손수건 안 보임.

### panel_057
- scene_id: S03 / location: LOC_L2_CORRIDOR (바스트, 등롱 역광)
- beat: ⑩ 반전의 대가 · 긴장 8.5 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT — 등롱이 그녀 뒤 위(역광), 얼굴 가장자리에 주황 테
- camera: 눈높이 bust
- composition: 채령 바스트(x 18–82%, 머리 y 36–58%), 한 손을 저고리 앞섶의 숨긴 꾸러미 위에 얹고(y 76–90%) 화면 밖 상궁을 봄. 분노와 안도가 엉킨 얼굴. 뒤 위쪽 화면 왼쪽(x 6–20%, y 6–18%) 등롱의 번진 주황빛. 위 34%(x 22–96%, y 2–34%)는 남청 처마 밑 · 밤
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN + CHAERYEONG_HAND_ON_BUNDLE, 표정 ⑤ + 변주 `anger and relief tangled together, eyes glistening`)
- emotion: 미워할 수도 믿을 수도 없다
- props: PROP_LANTERN(켜짐, 역광)
- dialogue_ref (2): ① 채령 thought "미워할 수도…" / ② 채령 thought "믿을 수도 없어."
- art_space: **위 오른쪽~가운데(x 22–96%, y 2–34%)** — 남청 처마 밑(등롱 번짐은 그 밖 왼쪽)
- attach: refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 꾸러미의 흰 천은 거의 안 보임(불룩함 + 손).

### panel_058
- scene_id: S03 / location: LOC_L2_CORRIDOR · VIEW_R 방향 (기둥 옆)
- beat: ⑩ ⟨회수: 댕기를 고치는 손⟩ 같은 다정함 = 목줄 · 긴장 9 · gap_after 40
- size: medium · aspect: **3:4**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT
- camera: [R 메아리] 눈높이 medium — ep01 P58과 같은 프레이밍
- composition: [ep01 P58과 같은 배치] 기둥이 화면 왼쪽(x 4–18%), 민 상궁(3/4, x 22–62%)이 채령(x 44–86%, 고개 조금 숙임, 뒤 3/4)의 땋은 머리 끝 붉은 댕기를 다시 고쳐 맴 — 같은 손. 상궁의 LEFT 소맷부리에 접힌 깨끗한 손수건. **채령 허리에 노리개 없음**(첨부 그림과 다름). 오른쪽 위(x 46–96%, y 3–24%) 어두운 회벽 · 처마 밑
- characters: MIN(FULL, 댕기를 고쳐 맴 상태 토큰 + MIN_HANKY_IN_CUFF, 표정 ②) · CHAERYEONG(SHORT, 댕기를 고쳐 매임 + NORIGAE_HIDDEN)
- emotion: 같은 다정함
- props: PROP_HANKY_CLEAN(LEFT 소맷부리) · PROP_DUTYBOARD(BLANK, 일부) · PROP_LANTERN(켜짐)
- dialogue_ref (1): ① 민 상궁 dialogue "내일 내의원 탕약이 온다, 얘야." (47cp, 꼬리 ↙ 상궁)
- art_space: **오른쪽 위(x 46–96%, y 3–24%)** — ep01 P05 · P58과 같은 쪽의 어두운 회벽 · 처마 밑
- repeat: R 메아리 ← **ep01 panel_005**(원본) · ep01 panel_058(같은 밤 프레이밍). 바뀌는 것: 손수건 LEFT 소맷부리(보임, CLEAN) · 채령 노리개 없음
- attach: ep01 panel_058, ep01 panel_005, refs/MIN_turnaround.png
- fx/note: 의관 · 탕약은 그리지 않는다(말로만). 첨부 그림의 노리개를 따라 그리면 REGEN.

### panel_059
- scene_id: S03 / location: LOC_L2_CORRIDOR (클로즈업)
- beat: ⑩ ⟨이중의미 E4⟩ ⟨반전: 요구 2단계⟩ · 긴장 9 · gap_after 40
- size: insert · aspect: **1:1**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT + LIGHT_LANTERN_FACE
- camera: 정면 close-up (ep01 P59 프레이밍)
- composition: 민 상궁 얼굴(x 6–58%, y 22–96%) 같은 미소 — ep01 P59보다 조금 화면 왼쪽. 등롱 쪽(화면 왼쪽) 따뜻. 화면 오른쪽 세로 띠(x 58–98%, y 2–60%)는 남청 어둠
- characters: MIN(FULL, 표정 ①)
- emotion: 다정한 명령 — 침묵에서 거짓말로
- props: —
- dialogue_ref (2): ① 민 상궁 dialogue "무엇이 들었든," (혼자 서는 풍선) / ② 민 상궁 dialogue "깨끗하다고만 말해라." (꼬리 ↙ 상궁)
- art_space: **오른쪽 세로 띠(x 58–98%, y 2–60%)** — 얼굴 옆 남청 어둠(풍선 둘, 위아래)
- repeat: 요구 사다리 CU ← **ep01 panel_059**. 바뀌는 것: 얼굴 조금 왼쪽 · 빈 띠가 아래로 더 길게(풍선 둘)
- attach: ep01 panel_059, refs/MIN_expressions.png
- fx/note: 민 상궁 shout 금지. 손수건 안 보임.

### panel_060
- scene_id: S03 / location: LOC_L2_CORRIDOR (클로즈업)
- beat: ⑩ 결과 보류 클리프행어 · 긴장 9 · gap_after **320**(끝)
- size: large · aspect: **9:16**
- time/light: 3일째 밤 · LIGHT_L2_NIGHT (등롱이 얼굴 한쪽만)
- camera: 눈높이 face close-up, 세로 큰 컷 (ep01 P60 프레이밍)
- composition: 채령 얼굴(x 14–86%, y 20–56%), 대답 없음, 시선은 화면 밖 왼쪽 어둠(내일 상이 들어올 쪽). 아래(x 30–70%, y 62–84%) 저고리 앞섶 위에 쥔 주먹 — 숨긴 꾸러미 위. 위(y 0–18%)는 남청 어둠. **아래 12%(y 88–100%)는 평평한 어두운 띠**(끝 캡션)
- characters: CHAERYEONG(FULL, NORIGAE_HIDDEN + CHAERYEONG_HAND_ON_BUNDLE(주먹), 표정 ⑧ `frozen, face drained of color, eyes fixed and unblinking, lips closed tight`)
- emotion: 결과 보류 — 침묵
- props: —
- dialogue_ref: 대사 없음 · narration 캡션 1 — KM 캡션 "— នៅមានតក្នុងភាគទី ៣ —"
- art_space: **아래 띠(x 0–100%, y 88–100%)** — 평평한 어두운 배경(캡션 자리)
- repeat: 마지막 큰 컷 ← **ep01 panel_060**. 바뀌는 것: 앞섶 위 주먹이 보임 · 노리개 없음
- attach: ep01 panel_060, refs/CHAERYEONG_expressions.png, refs/CHAERYEONG_turnaround.png
- fx/note: 회차 마지막 큰 컷. 캡션 띠는 그림이 비워 둘 뿐 글자를 그리지 않는다.

---

## H. 점검

- [x] 패널 수 **60**(≥50), panel_001–panel_060 연속, 대본 P01–P60과 1:1
- [x] 모든 패널에 scene_id / location(LOC_*) / time·light. 같은 씬 = 같은 장소 · 시간대 · 실내외. SCENE BREAK 2곳(S01→S02 시간, S02→S03 장소 · 시간). 새 LOC 없음
- [x] `art_space` 기재 **52패널**: 대사 · 생각 51(2풍선 28: P03 · P05 · P07 · P09 · P11 · P14 · P19 · P22 · P23 · P24 · P26 · P27 · P29 · P31 · P32 · P39 · P41 · P44 · P46 · P48 · P50 · P51 · P53 · P54 · P55 · P56 · P57 · P59 / 1풍선 23: P02 · P06 · P08 · P10 · P12 · P13 · P16 · P18(+sfx) · P20 · P21 · P25 · P28 · P30 · P33 · P35 · P36 · P38 · P40 · P42 · P43 · P45 · P49 · P58) + 캡션만 P60. 무대사 silent 8: P01 · P04 · P15 · P17 · P34 · P37 · P47 · P52 — script-editor 통계(무대사 9 = 이 8 + P60)와 일치
- [x] 생각 풍선 20(P02 · P03×2 · P08 · P12 · P16 · P20 · P21 · P22×2 · P23×2 · P24×2 · P48×2 · P54×2 · P57×2) · 대사 59 · sfx 1(P18) · 캡션 1(P60). 3풍선 패널 없음
- [x] 화면 밖 화자: P49(상궁, 꼬리 ↗ 그녀 뒤 어둠). sfx 자리: P18(문 위쪽, 나인 쪽)
- [x] **연보라 0 · `lilac:` 줄 0 · STAIN 0** — 손수건 CLEAN(P05 · P29 · P50 · P58) 또는 안 보임. 민 상궁 당의 `deep wine-red plum, NOT purple`(P05 · P21 · P50 · P52 · P55 · P58 메모)
- [x] 은침 변색 = `smoky gray-black tarnish on the tip only, no purple, no blue`(P17 원본 → P20 · P22 · P39), P16 탁한 회색, P04 · P15 은빛
- [x] **노리개 연속성:** P01–P46 RIGHT 허리 → P47 풂 → P48 흰 천에 쌈 → **P49–P60 NORIGAE_HIDDEN**(앞섶 안, 허리 없음). 해당 패널 characters 줄에 상태 토큰 명시
- [x] 글이 적힐 물건 BLANK: 당번 판 · 패(P47 · P58) · 등롱 · 병풍 · 그릇 · 뚜껑 · 향로 · 흰 천 · 해독환. `env` 0
- [x] 고정 앵글 · 메아리: P47 ← ep01 P05 · P58 ← ep01 P05/P58 · P22 ← ep01 P20 · P24 ← ep01 P23 · P54 ← ep01 P51 · P59 ← ep01 P59 · P60 ← ep01 P60 · P21/P52 ← ep01 P31(손 모양) · 회차 안 P04 → P16 · P17 → P39 · P23 → P54. 짝은 같은 비율(P55만 9:16 → 3:4, §B 이유)
- [x] 큰 컷 · 정지: P01 · P10 · P17 · P24 · P31 · P47 · P53 · P60. 반전 연쇄(P20–P23, P51–P55)는 SQ · 짧은 gap. 긴 여백: P28 · P38 · P46(400) · P56 · P60
- [x] 엑스트라 나인 = 회청 · 회색, 얼굴 없음. 홍 숙수 · 의관 그리지 않음. 상궁은 L1에서 P05 · P15 · P21 · P29만(작게, 강조 없음)
- [x] attach 패널당 3장 이내, 카드 이름 = `refs/ref_prompts.md` 그대로

## I. 하류 인계 (팀 메시징 대체)

| 대상 | 가져갈 것 |
|---|---|
| **letterer** | 각 패널 `art_space`(그대로 lettering spec `art_space`로) · `dialogue_ref`의 read_order · 꼬리 방향 · 화면 밖 화자(P49 → 오른쪽 위 가장자리 어둠) · sfx 자리(P18 문 위쪽) · P60 캡션 띠 · §F gap_after. 최장 풍선 P03②(49cp) · P24①(48cp) · P58(47cp)은 `w` 넉넉히. P25 왕자 "안 돼!"는 shout 판단, 민 상궁 shout 금지 |
| **prompt-smith** | §A 장소 표(LOC · VIEW · LIGHT) · §D EP02 상태 토큰 영문(특히 **D-1 NORIGAE_HIDDEN: P49–P60에서 FULL/SHORT의 노리개 구절 교체**, D-2 은침 변색, D-3 노른자 죽 · 빈 상 · 향 없는 향로, D-4 해독환 · 흰 천) · `aspect` · `characters`(FULL/SHORT/상태 · 표정 번호 · 변주) · `props` · §C 메아리(EP01 원본 PNG 경로 `_workspace/05_panels/ep01/panel_NNN.png`, 다시 그림) · `attach` · P24 Avoid 줄 예외(`extra panels`) · `lilac:` 문장 **없음** · 각 art_space를 style-bible §8 영문 문장으로 |
| **panel-validator** | §C 짝 비교 기준(좌표) · **은침 변색은 EP02 의도(P16 · P17 · P20 · P22 · P39) — EP01 §10-3 "은침 검게 → REGEN" 적용 제외**, 대신 전체 검정 · 보라 · 푸른 기면 REGEN · 연보라 0 · STAIN 0 · **P49–P60 허리 노리개 보이면 REGEN** · 흰 천 순백 · 환약 무각인 · BLANK 물건 · art_space 비었는지 |
| **art-director** | 새 LOC 요청 없음. §D 상태 토큰은 이 샷리스트 안의 가변 문구다 — 시리즈 자산으로 남기려면 character-sheets §7(소품) · §1/§3/§4 상태 표에 옮겨 적고 버전을 올린다(이 실행에서는 수정하지 않았다). 선택 제안: 늦은 아침 빛을 `LIGHT_L1_LATEMORNING` 토큰으로 승격 |
| **continuity-manager** | EP02 끝 상태: 노리개 = 흰 천에 싸서 저고리 앞섶 안(허리 없음) · 해독환 = 상궁 LEFT 소매 · 손수건 CLEAN, LEFT 소맷부리 · 회랑 당번 판 연두 끈 가운데 줄 · 3일째 밤. EP03 첫 컷 노리개 위치 결정 필요 |
| **사용자 (Flow 순서)** | EP02 반복 컷은 EP01 원본(panel_005 · 020 · 021 · 023 · 031 · 048 · 051 · 052 · 053 · 058 · 059 · 060)이 먼저 있어야 한다. EP01이 아직 이미지 대기 중이면 EP01부터 |
