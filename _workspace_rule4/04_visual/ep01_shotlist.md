# EP01 샷리스트 「수칙 4번」 — panel-director

- 작성: panel-director · 기준일 **2026-11-17** · EP01 Phase 4 · **v1**
- 입력: `03_episode/ep01_script_final.md`(64패널, 최종) · `03_episode/ep01_beatsheet.md`(§3 COMP-*, ⊘ 무글자 소품, gap) · `04_visual/style-bible.md` v1(§4 비율, §5-3 COMP 표, §6 LOC/VIEW, §7 PROP, §3 LIGHT, §8 말풍선 공간) · `04_visual/character-sheets.md` v1(FULL/SHORT/상태 토큰, 표정 번호) · `04_visual/refs/ref_prompts.md`(카드 16장) · `02_story/tension-curve.md` §9 · `webtoon-khmer-edition` §3–4
- 다음 독자: **letterer**(`bubble space` → `art_space`·`place`, `gap_after`) → **prompt-smith**(Flow 프롬프트, `attach`) → 사용자(Flow) → panel-validator
- 총 **64패널**(panel_001–panel_064 = 대본 P01–P64, 번호·순서 동일). 팀 메시징이 없는 실행이라 상류·하류 전달 사항은 문서 끝 §H에 모았다.

## 읽는 법

- **좌우:** `화면 왼쪽/오른쪽` = 화면 기준. `LEFT/RIGHT`(대문자) = 인물·사물 **자신의** 좌우(style-bible 표기와 같다). 정면 그림에서 서하의 RIGHT 눈 밑 점은 화면 왼쪽에 보인다.
- **좌표:** `x`/`y` = 패널 왼쪽 위에서 잰 % (x 가로, y 세로). 위치는 근사치다. letterer가 `art_space`와 `place`로 옮긴다.
- **`bubble space:`** (fx/note 첫 항목) = 그 컷에서 **그림이 비워 둘 조용한 배경**(민무늬 벽·천장·유리 너머 어두운 복도·서가 사이 어둠·초점 밖 배경). 얼굴·손·핵심 소품(수칙 종이·스티커·시계 면·벨·서식)은 그 자리에 두지 않는다. 효과음(sfx)은 소리 나는 물건 곁의 작은 빈자리. 무대사 컷은 `silent`.
- **Khmer edition:** 어떤 이미지에도 글자·숫자·말풍선·가짜 글씨가 없다. 글이 적힐 물건(수칙 종이·4번 조각·명부·일지·영수증·서식·보완 요청서·수첩·휴대폰 화면·공무원증·시계·내선 버튼)은 **빈 면**으로, 그 컷의 주인공일 때는 **충분히 크게** 그린다(EP01에는 물건 위 글씨 `env`가 없다 — 내용은 전부 낭독 말풍선).
- **characters:** 주 인물(가장 크게 보이는 1명) = character-sheets **FULL**, 나머지 = **SHORT**, 손·뒷모습·실루엣 = 상태 토큰. 표정은 character-sheets 번호(예: 서하 ⑧)와 그 영문 문장을 쓴다.
- **repeat:** 고정 구도 반복. 짝 패널의 `camera`·`composition`·`lighting`(P52 제외)·`bubble space`는 **글자까지 같다**. 바뀌는 것은 `repeat:` 줄에만 적었다. 반복 컷 카드에는 원본 PNG를 첨부한다.
- **attach:** 사용자가 Flow에 손으로 붙일 이미지(패널당 3장 이내). `refs/…` = 레퍼런스 카드, `_workspace/05_panels/ep01/panel_NNN.png` = 먼저 만든 원본 패널.

---

## A. 장소 목록 (scene_id ↔ LOC ↔ VIEW ↔ 배경 한 줄)

| scene_id | 패널 | location | 주 VIEW | 조명 | 배경 한 줄 |
|---|---|---|---|---|---|
| S01 | P1–3 | LOC_L1_DUTYROOM | VIEW_B | LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 | 지하 2층 1990년대 관공서 당직실, 연녹 벽·진녹 띠, 테라조, 철망 형광등, 통유리 창구(말구멍·투입구·바깥 놋쇠 벨), 밤 (루프 2의 미래 = P38–40과 같은 순간) |
| S02a | P4–6 | LOC_L2_STAIRWELL | B2 층참 | LIGHT_STAIR | 노출 콘크리트 비상계단, 진녹 난간, 철망 전구 하나, 회색 방화문, 반 층 아래 사슬 격자문, 전부 마름 (21:5x) |
| S02b | P7 | LOC_L2_CORRIDOR | VIEW_ANCHOR | LIGHT_CORRIDOR | 방화문 안쪽 복도, 문 위 숫자 없는 시계 10:00 정각 |
| S03 | P8–10 | LOC_L1_DUTYROOM | VIEW_C · VIEW_DESK · VIEW_NAPDOOR | LIGHT_COMEDY | 같은 당직실, 평범하고 고른 사무실 빛(블랙코미디) |
| S04 | P11–21 | LOC_L1_DUTYROOM | VIEW_SIDE(신규) · VIEW_A · VIEW_B · VIEW_C | LIGHT_L1 + LIGHT_LAMP (P12 복도 끝 떨림, P15 LIGHT_COMEDY) | 같은 당직실, 녹백 형광 + 스탠드 한 점 |
| S05a | P22–27 | LOC_L1_DUTYROOM | VIEW_SIDE · VIEW_B · VIEW_DESK | LIGHT_L1 + LIGHT_LAMP → P25 LIGHT_FLICKER → P26 LIGHT_BLACKOUT → P27 LIGHT_L1 | 같은 당직실 (반전 1: 떨림 → 어둠 → 빈자리) |
| S05b | P28–30 | LOC_L2_CORRIDOR | VIEW_ANCHOR | LIGHT_CORRIDOR | 앵커 복도 (P7과 같게) |
| S06a | P31 | LOC_L2_CORRIDOR | VIEW_LONG | LIGHT_CORRIDOR | 방화문을 등지고 본 긴 복도, 중간의 불 켜진 창구, 끝 1/3 어둠 |
| S06b | P32–39 | LOC_L1_DUTYROOM | S03·S04와 같은 VIEW | P32–33 LIGHT_COMEDY · P34–39 LIGHT_L1 + LIGHT_LAMP (P35 복도 끝 떨림) | 같은 당직실 (루프 2 — 같은 색, 같은 빛) |
| S07 | P40–49 | LOC_L1_DUTYROOM | VIEW_B · VIEW_A · VIEW_C · VIEW_NAPDOOR(열림) | LIGHT_L1 + LIGHT_LAMP · P41 LIGHT_STEADY · P43 숙직실 난로빛 | 같은 당직실 |
| S08 | P50–57 | LOC_L1_DUTYROOM | VIEW_C · 클로즈업 | LIGHT_REVEAL (떨림 없음) | 같은 당직실, 스탠드 원이 그녀와 수칙 종이만 감싸고 방은 차분한 푸른 그림자 |
| S09 | P58–64 | LOC_L1_DUTYROOM | 클로즈업 · 어깨 너머 · VIEW_SIDE 축 | LIGHT_REVEAL → P60부터 LIGHT_CLIFF | 같은 당직실. **유리는 프레임 밖이거나 반사 없는 평평한 어둠**(그녀 뒤 사람이 비치면 안 된다) |

- 장소 토큰은 style-bible §6 원문을 그대로 쓴다. 같은 scene_id 안에서는 같은 LOC 문장을 쓰고, 컷마다 VIEW 문장만 바꾼다.
- S02·S05·S06은 씬 안에서 장소가 바뀌어 하위 ID(a/b)로 나눴다(style-bible §6-1 권고). 이음새는 방화문과 복도 시계다.

### A-1. 신규 카메라 뷰 VIEW_SIDE (art-director 확인 요청 · §H)

style-bible §6-2 방향(서하의 왼쪽 = 칸막이·숙직실 문, 오른쪽 = 출입문, 뒤 = 서가)을 그대로 따른, **출입문 쪽 끝에서 방을 가로지르는** 뷰다. 낭독·벨·종이컵 장면(P11·P12·P13·P20·P22·P34·P35·P36)에서 선임의 얼굴, 서하의 얼굴, 유리 너머 복도, 칸막이 종이, 숙직실 문을 **한 그림에** 담을 수 있는 유일한 각도라 정의했다. prompt-smith는 아래 영문을 LOC_L1_DUTYROOM 토큰 뒤에 VIEW 문장으로 쓴다.

```
seen from the entrance-door end of the duty room, looking across the room at seated eye level: the thick glass service window runs along the right side of the frame with the dim corridor beyond it; the gray-green duty desk and the cracked green swivel chair in the right foreground; the gray steel archive shelves with dark gaps and the gray steel folding chair along the left side; in the background, the low gray partition at the far end of the desk with the small taped paper sheet, and behind it the closed cream nap-room door in the far wall
```

## B. 비율 · 크기

| size | Flow aspect | 패널 | 수 |
|---|---|---|---|
| medium (STD) | **3:4** | P1·4·6·10·11·12·13·14·15·17·19·20·21·22·23·24·34·35·36·38·41·43·44·47·48·49·50·54·57·62 | **30** |
| large / full-bleed (TALL: 느림·공개·앵커) | **9:16** | P3·5·7·16·18·27·28·31·37·40·42·45·51·52·53·55·58·60·61·64 | **20** |
| small / insert (SQ: 클로즈업·빠름·어둠) | **1:1** | P2·8·9·25·26·29·30·32·33·39·46·56·63 | **13** |
| insert band (BAND) | **16:9** | P59 | **1** |

- style-bible §4-1 권장 배정을 따랐고, 두 곳만 바꿨다: **P55 3:4 → 9:16**(반전 2 대사 정점 + 기억 비네트 + 말풍선 2개를 한 컷에 세우려면 세로 공간이 필요), **P59 = 16:9 채택**(눈 띠 + 화면 뒤쪽 가장자리의 효과음). COMP 짝은 모두 원본과 같은 비율이다.
- Flow에 3:4가 없으면 9:16으로 만들고 중요한 것을 가운데로 모은다. 그때도 `bubble space` 비율 위치는 그대로 둔다.

## C. 고정 구도 반복 (COMP-*) — 원본 → 반복

| ID | 원본 | 반복 | 비율 | 반복 컷에서만 바뀌는 것 |
|---|---|---|---|---|
| COMP-COLD-1 | **panel_001** | panel_038 | 3:4 | 없음(같은 순간) |
| COMP-COLD-2 | **panel_002** | panel_039 | 1:1 | 없음(같은 순간) |
| COMP-COLD-3 | **panel_003** | panel_040 | 9:16 | 없음(같은 순간). P40은 대사가 있어 위 18%를 쓴다 — P3도 같은 자리를 비워 두었다 |
| COMP-ANCHOR | **panel_007** | panel_028 | 9:16 | 표정만: 통화 끝의 부드러운 얼굴 → ② 공포로 굳음 |
| COMP-HANDOVER | **panel_008** | panel_032 | 1:1 | 서하 표정·입: 입을 열다 만 불안 → ⑧ 무표정, 입 모양으로 "그치?"를 함께 |
| COMP-DESK | **panel_009** | panel_033 | 1:1 | 영수증 묶음이 조금 높다(셀 수 없게) · 서하 고개를 숙이지 않고 무표정, 눈이 묶음을 스친다 |
| COMP-READ | **panel_012** | panel_035 | 3:4 | 서하도 읊고 눈은 숙직실 문에 · 선임 ④ 실눈 · 종이컵은 펼친 수첩 오른쪽 아래 귀퉁이 · 숙직실 문틈에 불빛 |
| COMP-BELL | **panel_013** | panel_036 | 3:4 | 벨 위 물방울 · 서하가 투입구로 손을 뻗어 서식을 받는다 · 종이컵·문틈 불빛은 P35와 같은 상태 |
| COMP-PAUSE | **panel_018** | panel_037 | 9:16 | 왼쪽 아래 가장자리에 초점 밖 서하의 옆얼굴·어깨(그 멈칫을 지켜봄) |
| COMP-STICKER | **panel_005** | panel_052 | 9:16 | 장소 L2 → L1(배경: 어두운 콘크리트 → 스탠드의 따뜻한 흐림) · 손이 떨린다 |
| 기억 비네트 | **panel_009** | panel_024 (위 왼쪽 비네트) | — | §D |
| 기억 비네트 | **panel_021** | panel_055 (위 왼쪽 비네트) | — | §D |

- **만드는 순서:** 원본(P1·2·3·5·7·8·9·12·13·18·21)을 반복 컷(P24·28·32·33·35–40·52·55)보다 먼저 만든다. 번호 순서대로 만들면 자연히 지켜진다. 반복 컷도 PNG를 복사하지 않고 **다시 그린다**(flow_tool은 md5가 같은 파일을 중복으로 거른다, style-bible §5-3).
- tension-curve §9-3의 "P21 ↔ P54(기억 말풍선)"는 비트시트 R9 이전 번호다. 이 문서는 비트시트·대본대로 **P21 → P55 비네트**로 둔다.

## D. 리플레이 인셋 → 기억 비네트 (P24 · P55)

Flow는 두 이미지를 합성하지 못한다. 그래서 인셋을 **Flow가 한 장 안에 그리는 '액자 속 기억 그림'**으로 설계했다.
- **모양:** 패널 위 왼쪽에 작은 사각 그림(P24 = 폭 약 46% × 높이 약 34%, P55 = 폭 약 60% × 높이 약 30%). 3–4px 굵기의 회백색(dingy off-white) 테두리 + 아래·오른쪽의 얇은 어두운 그림자. 안의 그림은 **채도를 약 40% 낮춘 바랜 색**, 같은 화풍, 원본 컷과 같은 각도·같은 순간.
- **첨부:** 비네트의 원본 패널 PNG를 첨부하고("the small framed memory picture shows the same moment as the attached earlier panel, in faded colors"), 원본의 인물·소품 문장도 짧게 다시 쓴다(Flow가 참조를 덜 따를 때의 안전장치).
- **기억 말풍선(`type: memory`) 자리:** 원본 컷이 이미 위쪽에 빈 띠(말풍선 자리)를 갖고 있으므로, 비네트 안의 **위쪽 1/3이 그 빈 띠**가 되게 자른다 → 기억 말풍선은 대본 지시대로 "인셋 안"에 들어간다. 필요하면 비네트 오른쪽 바깥 어둠까지 넘어가도 된다.
- **이 결정의 범위:** style-bible §4-2 규칙 1(한 장 안에 테두리·콜라주 금지, 예외 P53)의 예외를 **P24·P53·P55** 셋으로 넓힌다. §4-2 규칙 5·§11 열린 항목(원본 PNG 크롭 합성)은 **대안**으로만 남긴다: Flow가 비네트를 엉뚱하게 그리거나(내용이 본 그림과 섞임) 두 번 다시 그려도 안 되면, 그 자리를 조용한 배경으로 비운 버전으로 다시 받고 합성 여부는 리더·사용자가 정한다(그림을 새로 지어내지 않는다).
- prompt-smith: 이 세 컷의 Avoid 줄에서 `panel borders`만 뺀다(나머지는 그대로).

---

## E. 패널

### panel_001
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_B
- beat: B01 ① 콜드오픈 — 결과를 모르는 선언 (루프 2의 미래 = P38과 같은 순간) · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이(eye-level), over-the-shoulder medium — 앉은 서하 뒤에서 유리 창구 쪽으로
- composition: [COMP-COLD-1] 앞쪽 아래 오른쪽(x 55–100%, y 55–100%)에 서하의 뒷머리와 오른쪽 어깨(낮은 포니테일·네이비 머리끈, 오른뺨 가장자리만). 화면 왼쪽 가장자리(x 0–18%, y 42–68%) 낮은 회색 칸막이에 작은 수칙 종이: 흰 4번 조각 + 짧은 빨간 테이프 두 줄, 오른쪽 위 귀퉁이에 색 점만 한 바랜 스티커. 가운데(x 35–65%, 머리 y 30–42%) 두꺼운 통유리 너머 복도 역광 속 마른 남자의 상반신 실루엣, 가슴에 납작한 파일. 유리의 얼굴 높이에 둥근 말구멍, 카운터 높이에 투입구. 책상 상판은 아래 가장자리에 스탠드의 따뜻한 빛 번짐만(다른 책상 소품은 프레임 밖). 위 22%는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(뒷모습 상태 토큰 + SHORT, 얼굴 안 보임) · JEONGMIN(역광 실루엣 상태 토큰 — 젖음은 그림자에 묻힘)
- props: PROP_RULESHEET_SMALL(빈 모눈, 글씨 없음) · 유리 바깥 선반의 PROP_CALLBELL(작게)
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 · 빨강 = 수칙 종이의 테이프 두 줄뿐
- dialogue_ref (1): ① 서하 dialogue "수칙 4번은 지키지 않겠습니다." (낮고 평평, 꼬리 ↘ 그녀의 뒷머리)
- repeat: COMP-COLD-1 **원본** → panel_038
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 22% 가운데~왼쪽(x 5–70%, y 2–22%) — 유리 위쪽 너머 어둑한 복도 천장. 실루엣 머리(y 30% 아래)와 칸막이 종이에 걸리지 않게. / 책상 소품을 프레임 밖에 두는 이유: P38과 같은 순간(루프 2)이라 책상 상태를 두 번 맞출 필요를 없앤다. / 젖음 공개는 P16(F-12①) — 여기서는 숨긴다.

### panel_002
- scene_id: S01 / location: LOC_L1_DUTYROOM · 서가 방향(당직석 쪽에서 본 뒷벽)
- beat: B01 ① 첫 질문 · 긴장 7 · gap_after 120
- size: small · aspect: **1:1**
- camera: 눈높이에서 약간 낮게, medium close-up — 당직석 쪽에서 선임을 정면 3/4로
- composition: [COMP-COLD-2] 선임이 거꾸로 돌려 앉은 회색 접이식 의자에서 상체를 앞으로 확 내민다. 얼굴은 가운데~오른쪽(x 40–85%, y 35–78%), 큰 두 손이 의자 등받이를 움켜쥔다(아래 가장자리). 목의 검은 줄 돋보기가 가슴께에 매달려 흔들린다. 뒤는 회색 철제 서가와 그 사이의 어두운 틈. 위 왼쪽 1/4(x 0–48%, y 0–32%)은 서가 사이 어둠.
- characters: SEONIM(FULL + 거꾸로 앉기 상태 토큰, 종이컵 없이 두 손으로 등받이) — 표정 ③ `eyes suddenly wide open, leaning his whole body forward in alarm`
- props: PROP_FOLDING_CHAIR
- lighting: LIGHT_L1(위에서 차가운 형광, 눈썹·턱 아래 짧은 그림자), 스탠드 빛은 닿지 않음
- dialogue_ref (1): ① 선임 dialogue "너 미쳤어?" (꼬리 ↘ 그의 입)
- repeat: COMP-COLD-2 **원본** → panel_039
- attach: refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- fx/note: bubble space: 위 왼쪽 1/4(x 3–48%, y 3–32%) — 서가 사이 어둠. / LEFT 눈썹 흉터(정면 그림에서 화면 오른쪽) 또렷이. 돋보기는 쓰지 않는다.

### panel_003
- scene_id: S01 / location: LOC_L1_DUTYROOM · VIEW_B
- beat: B02 ① 결과를 자른다 · 시간 점프 정지점 · 긴장 7 · gap_after 480
- size: large · aspect: **9:16**
- camera: 앉은 눈높이보다 조금 높게, wide — 서하 뒤에서 창구 전체를
- composition: [COMP-COLD-3] 아래 30%(y 70–100%) 앞쪽에 당직석에 앉은 서하의 뒷모습(뒷머리·어깨·초록 회전의자 등받이, 가운데에서 약간 오른쪽). 가운데(y 30–68%) 두꺼운 통유리 너머, 복도 역광 속 마른 남자 실루엣이 유리의 말구멍 쪽으로 천천히 상체를 숙인다(얼굴은 그림자). 화면 왼쪽 가장자리 구석(x 0–15%, y 50–65%) 칸막이의 작은 수칙 종이, 흰 4번 조각과 짧은 빨간 테이프 두 줄. 스탠드의 따뜻한 빛은 왼쪽 아래 그녀의 어깨에만. 위 18%(y 0–18%)는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(뒷모습 상태 토큰) · JEONGMIN(역광 실루엣 상태 토큰, 숙이는 자세)
- props: PROP_RULESHEET_SMALL · PROP_CALLBELL(작게)
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 · 빨강 = 테이프 두 줄뿐
- dialogue_ref: 없음(무대사)
- repeat: COMP-COLD-3 **원본** → panel_040
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: silent(이 컷은 말풍선 없음) — 단 P40 짝과 같은 구도라 위 18%(x 5–95%, y 2–18%) 유리 위쪽 너머 어둑한 복도 천장은 그림에서 비워 둔다. / 결과는 자른다: 손이 유리를 넘거나 무슨 일이 벌어지는 그림 금지.

--- SCENE BREAK --- (S01 → S02a · L1 당직실 → L2 비상계단 · 시간 되돌림: 21:5x)

### panel_004
- scene_id: S02a / location: LOC_L2_STAIRWELL · B2 층참
- beat: B03 ② 마른 밤 기준선 · 사슬 문 · 긴장 3 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 약간 high-angle(위 계단참에서), medium — 허리 위
- composition: 서하가 화면 왼쪽~가운데(x 15–55%), 머리 y 42–55%, 층참에 서서 휴대폰을 귀에. 진녹 철제 난간이 대각선으로 오른쪽 아래로 내려가고, 반 층 아래 계단이 오른쪽 아래 어둠(x 55–100%, y 58–100%)으로 이어져 굵은 사슬·자물쇠가 걸린 철제 격자문에서 끝난다(사슬만 희미하게 반짝). 화면 왼쪽 가장자리에 회색 방화문 일부(가로 밀대). 위 40%는 층참 윗벽(누런 회백)과 그 위 어둠.
- characters: SEOHA(FULL + 계단·앵커 상태 토큰: RIGHT 손으로 휴대폰을 RIGHT 귀에 = 화면 왼쪽, LEFT 어깨 네이비 토트백) — 표정: 편안한 통화 얼굴(① 기본보다 풀린 `a relaxed small smile`)
- props: 휴대폰(무지 연회색 실리콘 케이스, 화면은 뺨에 붙어 안 보임) · 토트백(무지) · 사슬 격자문
- lighting: LIGHT_STAIR · 모든 면이 마름(F-13) · 빨강 없음
- dialogue_ref (2): ① 지호(전화) dialogue "누나, 거기서도 별 보여?" (꼬리 → 휴대폰, 화면 왼쪽) ② 서하 dialogue "지하야." (꼬리 → 입)
- attach: refs/SEOHA_turnaround.png, refs/LOC_L2_STAIRWELL_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 층참 윗벽과 위쪽 어둠. ①은 왼쪽, ②는 오른쪽 아래로 엇갈리게. / 사슬 문은 배경으로만(대사로 말하지 않는다, F-15). 비상구 표지·초록 피난 그림 금지.

### panel_005
- scene_id: S02a / location: LOC_L2_STAIRWELL · 층참(클로즈업)
- beat: B03 ② 세상에 하나뿐인 것 심기 ⟨이중의미⟩ · 긴장 3 · gap_after 40
- size: large · aspect: **9:16**
- camera: close-up, 눈높이보다 약간 위에서 내려다봄
- composition: [COMP-STICKER] 서하의 LEFT 손이 네이비 리넨 수첩의 오른쪽 가장자리를 잡고 세로로 든다. 표지 오른쪽 위 귀퉁이의 새 달냥이 스티커(지름 약 폭의 28%)가 화면 가운데(x 40–70%, y 44–60%), 그 위를 LEFT 엄지가 쓰다듬는다. 머스터드 카디건 소매가 손등을 반쯤 덮는다. 수첩 표지가 가운데~아래(y 38–100%)를 채우고 흰 실 제본이 왼쪽에. 위 30%(y 0–30%)는 초점 밖 배경.
- characters: SEOHA(손 클로즈업 상태 토큰 — LEFT 손, RIGHT 손은 프레임 밖에서 휴대폰을 귀에)
- props: PROP_NOTEBOOK(표지, 글씨·로고 없음) · **PROP_STICKER_NEW**(고양이 자신의 LEFT 귀 = 화면 오른쪽 귀가 크다, 황금빛 주황 — 빨강 아님)
- lighting: LIGHT_STAIR — 배경은 어두운 콘크리트 층참과 철망 전구의 희미한 흰 번짐, 스티커는 화면에서 가장 채도 높은 색
- dialogue_ref (2): ① 지호(전화) dialogue "달냥이 아직 붙어 있지?" ② 지호(전화) dialogue "떼지 마. 세상에 하나뿐이야." (둘 다 꼬리 ↗ 위 오른쪽 가장자리 = 프레임 밖 휴대폰)
- repeat: COMP-STICKER **원본** → panel_052
- attach: refs/PROP_STICKERS_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 30%(x 4–96%, y 2–30%) — 초점 밖 배경. 스티커(y 44–60%)는 절대 덮지 않는다. / 반전 2(P53)의 생명: 큰 귀의 쪽과 그림이 PROP_STICKERS_pair와 같아야 한다.

### panel_006
- scene_id: S02a / location: LOC_L2_STAIRWELL · B2 층참
- beat: B03 ② 잃을 것 = 약속 · 긴장 3 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 눈높이, 약간 옆에서 medium — 허리 위
- composition: 서하가 진녹 난간에 등을 기대고 편하게 서 있다, 가운데(x 25–75%), 머리 y 40–52%. 뒤로 층참 벽, 오른쪽 아래로 계단이 어둠으로 내려간다(사슬 문은 보이지 않아도 된다). 위 40%는 층참 윗벽과 위쪽 어둠(철망 전구는 프레임 위 밖, 빛만 위에서).
- characters: SEOHA(FULL + 계단·앵커 상태 토큰) — 표정 ⑦ `a relaxed, genuinely warm smile with soft eyes` (회차에서 가장 따뜻한 얼굴)
- props: 휴대폰(무지, 화면 안 보임) · 토트백
- lighting: LIGHT_STAIR · 빨강 없음
- dialogue_ref (2): ① 지호(전화) dialogue "토요일 시상식, 진짜 와야 돼. 약속!" (꼬리 → 휴대폰, 화면 왼쪽) ② 서하 dialogue "응, 약속." (꼬리 → 입)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_STAIRWELL_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 층참 윗벽. / 약속(F-11①)은 그림이 아니라 말로만 — 시상식 이미지 금지.

--- SCENE BREAK --- (S02a → S02b · 비상계단 → 방화문 안쪽 복도)

### panel_007
- scene_id: S02b / location: LOC_L2_CORRIDOR · VIEW_ANCHOR
- beat: B04+B05 ② **앵커 컷 원본** · 긴장 4 · gap_after 240
- size: large · aspect: **9:16**
- camera: 복도 안 눈높이, 방화문을 정면으로 본 frontal medium — 허리 위
- composition: [COMP-ANCHOR] 서하가 화면 가운데(x 25–75%), 머리 y 30–45%, 허리 위까지. 그녀 바로 뒤에서 무거운 회색 철제 방화문이 닫히는 중(가로 밀대가 보임). 문 위 가운데(x 50%, y 8–20%)에 숫자 없는 흰 둥근 시계: 정확히 10시 정각(짧은 시침 = 10시 방향, 긴 분침 = 정확히 위). RIGHT 손으로 휴대폰을 RIGHT 귀에(정면이라 화면 왼쪽), LEFT 어깨에 네이비 캔버스 토트백(화면 오른쪽), 마른 옷. 양옆 연녹 벽과 진녹 띠, 위로 노출 배관. 위 왼쪽(x 3–38%, y 3–26%)은 민무늬 벽과 배관뿐. 방화문 오른쪽 가장자리 중간(x 72–96%, y 34–50%)은 민무늬 문면.
- characters: SEOHA(FULL + 계단·앵커 상태 토큰) — 표정: 통화 끝의 부드러운 얼굴 `a soft, slightly wistful half-smile, gentle eyes`
- props: PROP_CLOCK(10:00, 숫자·로고 없음) · 휴대폰(무지, 화면 안 보임) · 토트백
- lighting: LIGHT_CORRIDOR · 빨강 없음(소화전함은 회색)
- dialogue_ref (1 + sfx): ① 지호(전화) dialogue "누나, 버텨!" (꼬리 ↘ 휴대폰, 화면 왼쪽 — 통화의 마지막 말풍선) · sfx "쿵" (방화문)
- repeat: COMP-ANCHOR **원본** → panel_028
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_CORRIDOR_plate.png
- fx/note: bubble space: 위 왼쪽(x 3–38%, y 3–26%) — 시계 왼쪽의 민무늬 벽·배관, 시계 면은 절대 덮지 않는다 · sfx: 방화문 오른쪽 가장자리 중간(x 72–96%, y 34–50%)의 민무늬 문면. / 시계가 10:10이면 REGEN(반전 1은 P7·P28 시계가 같아야 선다). 좌우 표식(점·휴대폰 손·토트백 어깨) 뒤집히면 REGEN.

--- SCENE BREAK --- (S02b → S03 · L2 복도 → L1 당직실)

### panel_008
- scene_id: S03 / location: LOC_L1_DUTYROOM · VIEW_C
- beat: B06 ② 떠넘김 1 (굴욕 1/3) · 긴장 4 · gap_after 40
- size: small · aspect: **1:1**
- camera: 눈높이 medium wide — 방 안쪽(서가 쪽)에서 창구 벽 방향, 무릎 위
- composition: [COMP-HANDOVER] 화면 가운데 왼쪽(x 18–55%) 당직석 책상 옆에 선 노미란: 검정 코트를 어깨에만 걸치고(소매가 비어 늘어짐) 한 손가락에 열쇠 꾸러미를 걸어 흔든다. 화면 오른쪽(x 68–95%) 창구 벽 끝 출입문 문간에 선 서하(토트백), 노미란 쪽을 본다. 두 사람 머리는 40% 선 아래(y 40–55%). 배경: 빈 초록 회전의자, 통유리 창구와 그 너머 어둑한 복도, 책상 왼쪽 끝 칸막이. 위 40%(y 0–40%)는 천장 배관·윗벽·유리 위쪽 너머 어두운 복도.
- characters: MIRAN(FULL 의상 A + 열쇠 흔들기 상태 토큰) — 표정 ① `a polite closed-lip smile with cold, unsmiling eyes` · SEOHA(SHORT) — 입을 열다 만 불안 `an anxious, eager-to-please half-smile, lips parted as if about to speak`
- props: PROP_KEYS · 노미란 허리 릴의 공무원증(뒤집혀 빈 뒷면) · 서하의 빈 공무원증
- lighting: LIGHT_COMEDY(고르고 평평, 떨림 없음) · 빨강 = 칸막이 종이의 테이프(작게)뿐
- dialogue_ref (2): ① 노미란 dialogue "강서하 주무관, 우리 오늘 당직 좀 바꿔 주자. 그치?" ② 노미란 dialogue "과장님도 다 그렇게 하셨어." (둘 다 꼬리 ↙ 노미란)
- repeat: COMP-HANDOVER **원본** → panel_032
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 천장·윗벽·유리 위쪽 어둠. / 배치: ①(긴 줄, w 약 60%)은 위 왼쪽, ②는 그 아래 오른쪽. / 블랙코미디는 표정과 구도로만(땀방울·만화 기호 금지). 코트 소매에 팔이 들어가면 REGEN.

### panel_009
- scene_id: S03 / location: LOC_L1_DUTYROOM · VIEW_DESK
- beat: B06 ② 명부 ≠ 열쇠 · 다리 단서 원본 (굴욕 2/3) ⟨이중의미⟩ · 긴장 4 · gap_after 40
- size: small · aspect: **1:1**
- camera: high-angle 약 45° 부감, 책상 와이드 — 회전의자 뒤쪽 위에서, 책상의 좌우 = 앉은 사람의 좌우
- composition: [COMP-DESK] 위 38%(y 0–38%)는 책상 너머 통유리 창구와 그 너머 어둑한 복도. 가운데~아래에 책상 고정 배치: 앞 왼쪽 흰 거위목 스탠드, 앞 오른쪽 베이지 내선 전화, 오른쪽에 파란 2공 바인더와 그 위쪽 절반에 얹힌 검은 일지, 안쪽 가운데 철제 서류함의 낮은 연노랑 영수증 묶음, 그 옆 누런 테이프 디스펜서, 작은 나무 상자의 직인과 둥근 인주 케이스, 펜꽂이. 왼쪽 끝 칸막이에 작은 수칙 종이(왼쪽 가장자리, y 40–60%). 오른쪽 가장자리에서 노미란의 팔이 들어온다(어깨에서 잘림): LEFT 손바닥(가는 금색 팔찌시계)이 바인더의 드러난 파란 표지 위, RIGHT 손가락에서 열쇠 꾸러미가 떨어진다. 아래 가운데(x 30–60%, y 78–100%) 책상 앞 모서리 위로 내민 서하의 두 손바닥이 열쇠를 받는다. 왼쪽 아래(x 0–35%, y 70–100%)에 선 서하를 위·뒤에서 본 3/4: 오른쪽(노미란 쪽)으로 돌린 얼굴 옆선, 시스루 앞머리, 낮은 포니테일.
- characters: MIRAN(SHORT 의상 A — 팔·손만, 명부 위 손바닥 상태 토큰) · SEOHA(SHORT) — 반사적으로 고개를 숙인다 `head bowed reflexively, eyes down`
- props: PROP_ROSTER(닫힘, 빈 표지) · PROP_DUTYLOG(닫힘) · **PROP_RECEIPTS**(낮은 묶음, 빈 연노랑 + 글자 없는 작은 붉은 원) · PROP_SEAL · PROP_DISPENSER · PROP_EXT_PHONE(숫자 없는 버튼) · PROP_LAMP · PROP_KEYS · 유리 상판 밑 빈 종이
- lighting: LIGHT_COMEDY + 스탠드는 켜져 있음(작은 노란 원) · 빨강 = 인주 케이스·영수증의 작은 원·칸막이 종이 테이프뿐
- dialogue_ref (2): ① 노미란 dialogue "명부엔 내 이름 있어. 수당도 내 앞으로. 알지?" (꼬리 ↗ 오른쪽 가장자리 = 프레임 밖 노미란) ② 서하 dialogue "…아, 네. 죄송합니다, 알겠습니다." (꼬리 ↙ 서하)
- repeat: COMP-DESK **원본** → panel_033 · **기억 비네트 원본** → panel_024
- attach: refs/LOC_L1_DESK_plate.png, refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 책상 너머 유리와 어두운 복도. / 배치: ①은 긴 줄(w 60% 이상)이라 위 왼쪽에 넓게, ②는 그 아래. / 소품은 전부 빈 면, 영수증은 셀 수 없게 낮은 묶음(F-16①). P24 비네트가 이 컷 오른쪽 가운데(바인더 위 손)를 다시 그리므로 손·시계·바인더를 또렷하게.

### panel_010
- scene_id: S03 / location: LOC_L1_DUTYROOM · VIEW_NAPDOOR
- beat: B06 ② 떠넘김 3 · 퇴장 (굴욕 3/3) · 긴장 4 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 눈높이 medium — 서하의 오른쪽 어깨 너머(전경 초점 밖)에서 숙직실 문 쪽
- composition: 화면 오른쪽 앞(x 62–100%, y 40–100%) 초점 밖 서하의 옆얼굴·어깨, 시선은 왼쪽 문으로. 화면 왼쪽 중경(x 10–50%) 크림색 숙직실 문으로 걸어가는 노미란, 코트를 어깨에 걸친 뒷모습 3/4, 어깨 너머로 고개를 돌려 말한다. 문 윗선은 y 38% 아래. 위 38%는 문 위의 회백 윗벽과 천장.
- characters: MIRAN(FULL 의상 A + 퇴장 상태 토큰) — 표정 ① · SEOHA(SHORT, 전경 초점 밖) — 닫히는 문을 좇는 시선
- props: VIEW_NAPDOOR 문(간유리 창, 놋쇠 손잡이)
- lighting: LIGHT_COMEDY · 빨강 없음
- dialogue_ref (2): ① 노미란 dialogue "신입은 사흘 못 버텨." ② 노미란 dialogue "전임자도 사흘 만에 관뒀어." (둘 다 꼬리 ↙ 노미란)
- attach: refs/MIRAN_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 38%(x 3–80%, y 2–38%) — 문 위 민무늬 윗벽과 천장. / EP03 '그 시선' 리플레이 원본(F-10): 서하의 시선이 문을 향한다는 것이 분명해야 한다.

--- SCENE BREAK --- (S03 → S04 · 장소 동일 L1 · 선임 등장)

### panel_011
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: B07 ② 선임 등장(서프) · 긴장 5 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 눈높이 medium wide (VIEW_SIDE) — 무릎 위
- composition: 화면 왼쪽(x 0–45%) 서가 사이 어두운 틈에서 걸어 나오는 선임(크고 굽은 실루엣, 얼굴 3/4), 오른손으로 흰 종이컵을 책상 모서리(가운데, x 45–55%, y 62–70%)에 내려놓는다. 그 뒤에 거꾸로 놓인 회색 접이식 의자. 화면 오른쪽(x 58–100%) 초록 회전의자 등받이를 잡은 채 흠칫 몸을 뒤로 빼며 그를 돌아보는 서하. 오른쪽 가장자리는 통유리 창구와 어둑한 복도. 위 38%는 서가 꼭대기 어둠과 천장.
- characters: SEONIM(FULL + 등장 상태 토큰) — 표정 ① · SEOHA(SHORT) — 흠칫 놀람 `startled, eyes wide, shoulders pulled in`
- props: PROP_PAPER_CUP(무지, 손대지 않음) · PROP_FOLDING_CHAIR · PROP_SWIVEL_CHAIR
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 칸막이 종이 테이프(배경, 작게)뿐
- dialogue_ref (2): ① 선임 dialogue "거긴 네 자리야. 난 안 앉아." ② 선임 dialogue "마셔. 긴 밤이래." (둘 다 꼬리 ↙ 선임)
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 38%(x 3–80%, y 2–38%) — 서가 꼭대기 어둠과 천장. / 선임은 초록 회전의자에 앉지 않는다(F-07①). 종이컵은 이후 P12·P21에서도 같은 모서리, 손대지 않음(F-49①).

### panel_012
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: B08 ② 수칙 1 · 습관 단서 · 긴장 5 · gap_after 0
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE)
- composition: [COMP-READ] 화면 오른쪽 앞(x 52–100%, 머리 y 32–50%) 당직석에 앉은 서하, 몸은 오른쪽 유리 쪽, 고개는 왼쪽 선임 쪽으로 돌려 얼굴 3/4(RIGHT 눈 밑 점이 보인다). 화면 왼쪽 중경(x 0–42%, 머리 y 40–55%) 서가 앞 접이식 의자에 거꾸로 앉은 선임, 팔뚝을 등받이에 얹고 서하를 보며 외워 읊는다(빈손, 돋보기는 목줄에 걸린 채 손대지 않음). 가운데 안쪽 배경: 책상 왼쪽 끝 낮은 칸막이와 작은 수칙 종이(흰 4번 조각·짧은 빨간 테이프 두 줄), 그 뒤 벽에 닫힌 크림색 숙직실 문. 오른쪽 가장자리: 통유리 창구, 그 너머 어둑한 복도 깊은 곳(y 40–46%)의 작은 형광등. 책상 위 종이컵(위치는 props). 위 40%(y 0–40%)는 천장 배관·윗벽·서가 꼭대기 어둠.
- characters: SEONIM(FULL + 거꾸로 앉기 + 외워 읊기 상태 토큰) — 표정 ① · SEOHA(SHORT) — 입술이 소리 없이 반 박자 먼저 움직인다 `lips slightly parted, silently mouthing words` (말풍선 없음)
- props: PROP_RULESHEET_SMALL · PROP_PAPER_CUP(책상 앞 모서리, 손대지 않음) · 숙직실 문 닫힘(문틈 불빛 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_FLICKER(유리 너머 복도 끝 형광등 한 개만) · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2): ① 선임 dialogue "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다." ② 선임 dialogue "돌려보내지 않는다." (둘 다 꼬리 ↙ 선임)
- repeat: COMP-READ **원본** → panel_035
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 천장 배관·윗벽·서가 꼭대기 어둠. 복도 끝 떨리는 형광등(y 40–46%)은 그 아래에 남긴다. / 배치: ①은 긴 수칙 문구(w 60% 이상 필요)라 위 왼쪽에 넓게, ②는 그 아래 짧게. / F-14①: 서하의 입 모양이 보여야 한다. 수칙 종이는 작은 배경 소품(빈 모눈).

### panel_013
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: B09 ③ 수칙 2 → 첫 민원인(호출벨) · 긴장 6 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE)
- composition: [COMP-BELL] COMP-READ와 같은 카메라·같은 배치. 화면 왼쪽 중경(x 0–42%) 접이식 의자에 거꾸로 앉은 선임. 화면 오른쪽 앞(x 52–100%) 당직석의 서하. 오른쪽 유리 너머 바깥 선반(x 72–92%, y 55–66%) 위 작은 놋쇠 돔 호출벨과 그것을 누른 역광의 손(디테일은 그림자). 가운데 안쪽 배경: 칸막이의 작은 수칙 종이, 닫힌 크림색 숙직실 문. 위 40%(y 0–40%)는 천장 배관·윗벽·서가 꼭대기 어둠. 벨 바로 위 유리(x 70–96%, y 42–54%)는 어둑한 복도.
- characters: SEONIM(SHORT, 낭독하던 입 모양 그대로) · SEOHA(FULL) — 창구 쪽으로 고개를 홱 돌린다(오른쪽 옆얼굴), 놀람 · JEONGMIN(벨을 누른 손 상태 토큰)
- props: PROP_CALLBELL · PROP_RULESHEET_SMALL · PROP_PAPER_CUP(책상 앞 모서리, 손대지 않음) · 숙직실 문 닫힘(문틈 불빛 없음)
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2 + sfx): ① 선임 dialogue "2번. 당직자는 자기 이름을 말하지 않는다." ② 선임 dialogue "3. 호출벨이 울리면—" (둘 다 꼬리 ↙ 선임) · sfx "띵!" (벨)
- repeat: COMP-BELL **원본** → panel_036
- attach: _workspace/05_panels/ep01/panel_012.png, refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 천장·윗벽·서가 꼭대기 어둠 · sfx: 벨 바로 위 유리의 어둑한 복도(x 70–96%, y 42–54%). / P12와 G0으로 붙는 같은 순간의 연속 — P12 PNG를 첨부해 방·인물 배치를 맞춘다.

### panel_014
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_B 축(방 안에서 유리 너머로, 서하 어깨 없이)
- beat: B10 ③ 위협 진입 · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 방 안에서 통유리 너머의 남자를 정면으로
- composition: 화면 가운데(x 25–75%, 머리 y 40–52%) 통유리 너머 복도 역광 속 마른 남자의 상반신 실루엣, 비닐 파일을 가슴에 안고 정중히 고개를 숙인다. 얼굴 높이에 둥근 말구멍, 아래 가장자리 근처(y 85–95%)에 납작한 투입구와 바깥 선반의 놋쇠 벨. 아래 왼쪽 가장자리(x 0–20%, y 85–100%)에 서하의 머스터드 어깨 끝(초점 밖). 위 38%는 유리 위쪽 너머 복도 천장(고른 흐린 빛).
- characters: JEONGMIN(역광 실루엣 상태 토큰 — 젖음이 보이지 않는다) · SEOHA(어깨 끝만)
- props: PROP_CALLBELL · 비닐 파일(실루엣)
- lighting: LIGHT_L1 + LIGHT_LAMP(방 안), 유리 너머 복도 역광 · 빨강 없음
- dialogue_ref (2): ① 구정민 dialogue "늦은 시간에 죄송합니다." ② 구정민 dialogue "사망신고를 취소하러 왔습니다." (둘 다 꼬리 ↓ 유리 너머 그의 머리)
- attach: refs/JEONGMIN_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 유리 위쪽 너머 복도 천장. / P14 ① = P36 ② 대사 원본(구도 반복은 아님). style-bible §6-1의 "VIEW_A(P14)"를 바꿨다: 역광 실루엣("behind the glass" 상태 토큰)은 방 안에서 유리 너머로만 성립한다.

### panel_015
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_A
- beat: B11 ③ 블랙코미디 밸브 · 접수 ⟨이중의미⟩ · 긴장 5 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이보다 약간 높게, 정면 medium — 복도 쪽에서 통유리 너머의 서하
- composition: 화면 가운데(x 25–80%, 머리 y 38–52%) 유리 너머 당직석에 앉아 정면을 향한 서하, 두 손 아래 책상 위에 연회청 빈 서식이 앞면을 위로 하고 놓여 있다(x 30–75%, y 62–82%, 크게). 화면 왼쪽 가장자리 앞(x 0–18%, y 30–100%) 초점 밖의 어두운 남자 어깨·옆머리(그림자, 물기 안 보임). 아래 가장자리에 말구멍·투입구·바깥 놋쇠 벨. 오른쪽(그녀의 LEFT) 칸막이와 스탠드. 위 38%는 유리 너머 방 안쪽 서가와 천장의 어둑함(유리는 옅은 정상 반사만).
- characters: SEOHA(FULL) — 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids` · JEONGMIN(전경 초점 밖 그림자 — 젖음 숨김)
- props: **PROP_FORM_DEATH**(비닐 없이, 빈 칸·빈 직인 원, 글씨 없음, 크게) · PROP_CALLBELL · PROP_LAMP
- lighting: LIGHT_COMEDY(평상 조명, 떨림 없음) · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 서하 dialogue "신청인이… 사망자 본인이시네요." ② 서하 dialogue "…본인 확인되셨네요." (둘 다 꼬리 ↓ 서하)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JEONGMIN_turnaround.png
- fx/note: bubble space: 위 38%(x 15–97%, y 2–38%) — 유리 너머 방 안쪽 서가·천장 어둠(전경 남자 어깨가 있는 왼쪽 가장자리는 피함). / F-53①: 서식은 빈 면으로 크게. 웃음은 무표정과 정면 구도로만.

### panel_016
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_A(창구 바깥 — 복도 쪽, 클로즈업)
- beat: B12 ③ 어긋남 '발견' · 긴장 6 · gap_after 240
- size: large · aspect: **9:16**
- camera: high-angle close-up — 복도 쪽에서 바깥 선반과 바닥을 내려다봄
- composition: 위쪽(x 25–55%, y 18–32%) 유리 앞 바깥 선반 위 놋쇠 돔 벨, 그 위로 떨어지는 물방울 한 개. 화면 왼쪽(x 0–30%, y 10–62%) 물에 젖어 짙어진 카키 트렌치코트 자락이 늘어져 물이 떨어진다. 아래(y 64–92%) 젖은 검정 구두와 마른 테라조 바닥의 작은 웅덩이, 젖은 발자국이 아래 오른쪽 복도 끝 어둠으로 이어진다. 벨 뒤 유리 너머는 당직실의 흐린 따뜻한 빛.
- characters: JEONGMIN(자락·구두만 상태 토큰 — 얼굴·몸 위쪽 없음)
- props: PROP_CALLBELL(`water drops beaded on its brass dome`) · 웅덩이 1단계 `a small puddle`
- lighting: LIGHT_L1이 유리 너머에서 새고 복도는 LIGHT_CORRIDOR의 어둑함, 물에 차가운 하이라이트 · 빨강 없음
- dialogue_ref (sfx): sfx "똑" (벨 위 물방울)
- attach: refs/JEONGMIN_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: sfx — 벨 오른쪽 유리의 흐린 면(x 60–92%, y 12–28%). / F-12①: 비는 없다, 젖은 것은 그와 물방울·웅덩이·발자국뿐(P4 마른 밤과 충돌). 웅덩이 타이머 시작.

### panel_017
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_A(복도 쪽에서 유리 너머)
- beat: B13 ③ 4번 낭독 시작(서스) · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 눈높이 medium wide — 복도 쪽, 기다리는 민원인의 뒤쪽 3/4에서 유리 너머 방 안
- composition: 화면 왼쪽 앞(x 0–35%, 머리 y 24–42%) 유리 앞에 선 구정민의 뒷모습 3/4(젖은 머리·어깨, 물이 떨어짐), 발밑에 조금 넓어진 웅덩이(아래 왼쪽). 유리 너머 가운데~오른쪽: 당직석에 앉아 정면을 향한 서하, 그 뒤 접이식 의자에 거꾸로 앉아 읽는 선임. 화면 오른쪽(그녀의 LEFT) 칸막이와 작은 수칙 종이, 스탠드. 위 22% 오른쪽은 유리 위쪽 너머 방 천장의 어둑함.
- characters: SEONIM(FULL + 외워 읊기 상태 토큰, 유리 너머) · SEOHA(SHORT, 불안) · JEONGMIN(SHORT, 뒷모습 — P16 이후라 젖음이 보여도 된다)
- props: PROP_RULESHEET_SMALL · 웅덩이 2단계 `a slightly wider puddle` · PROP_CALLBELL
- lighting: 방 안 LIGHT_L1 + LIGHT_LAMP, 복도 쪽 LIGHT_CORRIDOR의 어둑함 · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 선임 dialogue "4번. 민원인이 담당자를 찾으면…" (꼬리 ↓ 유리 너머 선임)
- attach: refs/SEONIM_turnaround.png, refs/JEONGMIN_turnaround.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 오른쪽(x 40–96%, y 2–22%) — 유리 위쪽 너머 방 천장 어둠(구정민 머리가 있는 왼쪽은 피함). / 제목 서스펜스: 4번 문장은 여기서 끊긴다.

### panel_018
- scene_id: S04 / location: LOC_L1_DUTYROOM · 서가 방향(당직석 쪽에서)
- beat: B13 ③ 멈칫 · 레드 헤링 · 긴장 7 · gap_after 120
- size: large · aspect: **9:16**
- camera: 눈높이 close-up(머리·어깨) — 당직석 쪽에서
- composition: [COMP-PAUSE] 선임의 얼굴이 가운데 아래쪽(x 20–80%, y 38–78%), 어깨가 아래 가장자리. 뒤는 회색 철제 서가와 그 틈의 어둠(초점 밖). 위 28%(y 0–28%)는 서가 위쪽 어둠. 왼쪽 아래 가장자리(x 0–22%, y 60–100%)는 초점 밖 전경 자리로 비어 있다.
- characters: SEONIM(FULL) — 표정 ② `pausing mid-sentence, his eyes sliding away, mouth stopped half-open`
- props: 목줄 돋보기(쓰지 않음)
- lighting: LIGHT_L1(위에서 차가운 빛, 눈두덩 그림자) + 스탠드의 옅은 따뜻한 가장자리빛 한쪽 · 빨강 없음
- dialogue_ref: 없음(무대사)
- repeat: COMP-PAUSE **원본** → panel_037
- attach: refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- fx/note: bubble space: silent(이 컷은 말풍선 없음) — 단 P37 짝과 같은 구도라 위 28%(x 3–97%, y 2–28%) 서가 위쪽 어둠은 그림에서 비워 둔다. / F-06①: 시선을 비키는 반 박자가 읽혀야 한다.

### panel_019
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_B 축(칸막이 클로즈업)
- beat: B13 ③ 4번 조각 · 바랜 스티커 · 긴장 7 · gap_after 40
- size: medium(인서트 클로즈업) · aspect: **3:4**
- camera: 앉은 눈높이 close-up — 칸막이에 붙은 수칙 종이를 정면에서 약간 비스듬히
- composition: 수칙 종이 전체가 가운데(x 12–88%, y 24–96%): 누렇게 바랜 크림 모눈 A5, 왼쪽 가장자리는 제본에서 뜯긴 들쭉날쭉한 선, 네 귀퉁이의 바랜 누런 테이프. 위에서 4/7 지점에 폭 90%의 새하얀 4번 조각, 위·아래 가장자리를 따라 빨간 비닐테이프 두 줄. 오른쪽 위 귀퉁이(x 72–86%, y 27–36%)에 바랜 달냥이 스티커, 오른쪽 아래 귀퉁이에 바랜 커피 반원. 7칸 자리는 전부 빈 모눈. 종이 윗선 위(y 0–22%)는 칸막이 윗면 너머 초점 밖 유리와 어둑한 복도.
- characters: 없음(선임은 화면 밖 목소리)
- props: **PROP_RULESHEET**(클로즈업 문장 전체, 글씨·숫자·줄 긋기 없음) · PROP_STICKER_FADED · PROP_RING_FADED
- lighting: LIGHT_L1 + 스탠드의 따뜻한 빛이 종이 아래쪽 일부에 · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 선임(목소리) dialogue "…'제가 담당자입니다'라고 답한다." (꼬리 → 왼쪽 프레임 가장자리 = 화면 밖 선임)
- attach: refs/PROP_PAGES_pair.png, refs/PROP_STICKERS_pair.png
- fx/note: bubble space: 위 22% 왼쪽~가운데(x 3–68%, y 2–22%) — 종이 위의 초점 밖 유리·어둠. 오른쪽 위 스티커(x 72–86%)를 덮지 않게 왼쪽으로 치우친다. / F-04②: 바랜 스티커가 보여야 한다. 가짜 글씨·번호가 생기면 REGEN. 종이는 빈 면으로 크게.

### panel_020
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_SIDE(가깝게)
- beat: B14 ③ 이중 의미 1 + 질문 ⟨이중의미⟩ · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE, P12보다 가깝게 — 가슴 위)
- composition: 화면 왼쪽(x 0–45%, 머리 y 38–52%) 거꾸로 앉은 선임의 옆얼굴 3/4, 무뚝뚝하게 서하 쪽을 본다. 화면 오른쪽(x 52–100%, 머리 y 40–54%) 회전의자에서 몸을 돌려 그를 향한 서하, 카디건 소매를 움켜쥔 손. 둘 사이 안쪽 배경에 초점 밖 칸막이와 숙직실 문. 위 38%는 서가 꼭대기 어둠(왼쪽)과 유리 위쪽 너머 복도(오른쪽).
- characters: SEONIM(SHORT) — 표정 ① · SEOHA(FULL) — 매달리는 불안 `anxious, eyebrows raised, clutching her cardigan cuffs`
- props: (작게) PROP_RULESHEET_SMALL · PROP_PAPER_CUP(책상 모서리)
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 쪽만 따뜻) · 빨강 = 테이프(작게)뿐
- dialogue_ref (2): ① 선임 dialogue "수칙은 지키라고 있는 거지, 믿으라고 있는 게 아니야." (위 왼쪽, 꼬리 ↙ 선임) ② 서하 dialogue "선배님, 이 수칙… 누가 쓴 거예요?" (위 오른쪽, 꼬리 ↘ 서하)
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — ①은 왼쪽 서가 위 어둠, ②는 오른쪽 유리 위쪽 너머 복도. 읽는 순서 = 왼쪽 → 오른쪽(화자 위치와 같다). / E8 원본.

### panel_021
- scene_id: S04 / location: LOC_L1_DUTYROOM · VIEW_C 축(서가 쪽 근경)
- beat: B14 ③ **에코 원본** ⟨이중의미⟩ · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 눈높이 medium — 선임 근경, 책상은 원경
- composition: [COMP-E1] 화면 왼쪽~가운데 앞(x 5–60%, 머리 y 28–46%) 접이식 의자에 거꾸로 앉은 선임, 얼굴 3/4(화면 오른쪽으로 약간 돌림), 두 손에 흰 종이컵을 쥐고 컵 속을 내려다본다. 화면 오른쪽 원경(x 62–96%, y 40–80%) 당직석 책상 위 베이지 내선 전화(조용히, 울리지 않음)와 그 곁에 작게 앉아 그를 돌아보는 서하. 위 25%(y 0–25%)는 서가 꼭대기 어둠과 천장.
- characters: SEONIM(FULL + 거꾸로 앉기 상태 토큰, 종이컵) — 표정 ① 무표정, 시선은 컵 속 · SEOHA(SHORT, 작게)
- props: PROP_PAPER_CUP(선임 손) · PROP_EXT_PHONE(숫자 없는 버튼) · PROP_FOLDING_CHAIR
- lighting: LIGHT_L1, 원경 책상에 LIGHT_LAMP · 빨강 없음
- dialogue_ref (1): ① 선임 dialogue "그 수칙, 이 일 제일 오래 한 사람이 쓴 거래." (꼬리 ↙ 선임)
- repeat: **기억 비네트 원본** → panel_055 (비네트 = 이 컷의 왼쪽 위 2/3: 선임·종이컵·위 띠)
- attach: refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 25%(x 3–97%, y 2–25%) — 서가 꼭대기 어둠. 말풍선이 길어(w 60% 이상) 넓게 둔다. / E1·E7 원본, F-03①. P55 비네트가 이 컷을 다시 그리므로 선임의 자세·컵·위 빈 띠를 또렷하게.

--- SCENE BREAK --- (S04 → S05a · 장소 동일 L1 · 블록 ④ 반전 1, 유머 없음)

### panel_022
- scene_id: S05a / location: LOC_L1_DUTYROOM · VIEW_SIDE(넓게)
- beat: B15 ④ 판돈의 질문 + 결함 ⟨이중의미⟩ · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium wide (VIEW_SIDE)
- composition: 화면 오른쪽(x 62–100%, 머리 y 38–52%) 통유리 너머 말구멍에 대고 묻는 구정민(젖은 상반신, 고개를 살짝 기울임), 바깥 선반이 젖어 투입구 아래에 물이 고였다. 가운데(x 35–65%, 머리 y 40–54%) 당직석의 서하가 왼쪽 어깨 너머로 고개를 돌려 선임을 본다. 화면 왼쪽(x 0–30%) 거꾸로 앉은 선임이 얼굴을 서가 쪽으로 돌려 피한다. 가운데 안쪽 배경: 칸막이의 작은 수칙 종이(흰 조각이 스탠드 빛에 걸림). 위 38%는 천장·서가 꼭대기 어둠·유리 위쪽 너머 복도.
- characters: JEONGMIN(SHORT) — 표정 ② `head tilted slightly in a polite question` · SEOHA(FULL) — 의심이 스치는 얼굴 · SEONIM(SHORT) — 얼굴을 돌린다
- props: PROP_RULESHEET_SMALL · 젖은 바깥 선반(웅덩이 3단계: 이 각도에서 바닥은 카운터에 가려 안 보이므로 선반의 고인 물로 보여 준다)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2): ① 구정민 dialogue "담당자분 계십니까? 직인이 필요합니다." (위 오른쪽, 꼬리 ↓ 구정민) ② 서하 thought "(맨 위에 붙은 게… 최신 개정이니까.)" (위 왼쪽, 구름형·꼬리 없음)
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/SEONIM_turnaround.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 오른쪽은 유리 위쪽 너머 복도(①), 왼쪽은 서가 꼭대기 어둠(②). / E5 원본, F-54①, F-06②(선임이 얼굴을 돌림 = 미스디렉션).

### panel_023
- scene_id: S05a / location: LOC_L1_DUTYROOM · VIEW_B
- beat: B16 ④ 치명적 선택 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 over-the-shoulder medium
- composition: 앞쪽 아래 가운데~왼쪽(x 15–60%, y 60–100%) 서하의 뒷머리와 오른뺨 가장자리, 말구멍 쪽으로 몸을 약간 내민다. 화면 왼쪽 가장자리(x 0–16%, y 38–60%) 칸막이의 작은 수칙 종이(흰 4번 조각과 빨간 테이프 두 줄이 프레임 안에 걸림). 유리 너머 가운데~오른쪽(x 40–85%, 머리 y 30–45%) 젖은 구정민의 상반신, 공손히 숙인 자세, 흔들림 없는 시선, 비닐 파일. 바깥 선반의 놋쇠 벨. 위 오른쪽 1/4(x 50–97%, y 2–26%)은 그의 머리 위 어둑한 복도.
- characters: SEOHA(뒷모습 상태 토큰 + SHORT) · JEONGMIN(FULL) — 표정 ① `a polite faint smile, a calm, steady, almost unblinking gaze`
- props: PROP_RULESHEET_SMALL · PROP_CALLBELL · 비닐 파일
- lighting: LIGHT_L1 + LIGHT_LAMP(그녀 어깨와 책상에만 따뜻) · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 서하 dialogue "제가 담당자입니다." (꼬리 ↙ 그녀의 머리)
- attach: refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png, refs/PROP_PAGES_pair.png
- fx/note: bubble space: 위 오른쪽 1/4(x 50–97%, y 2–26%) — 구정민 머리 위의 어둑한 복도(style-bible §5-4 예시와 같다). / E10 원본. 수칙 종이가 프레임 안에 반드시 걸린다.

### panel_024
- scene_id: S05a / location: LOC_L1_DUTYROOM · VIEW_B 축(유리 너머 클로즈업) + 기억 비네트
- beat: B17 ④ 새 정보 ⟨반전⟩ · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 close-up — 방 안에서 유리 너머 구정민의 얼굴
- composition: 화면 오른쪽 아래 2/3(x 35–98%, y 34–98%) 유리 너머 구정민의 얼굴 클로즈업, 고개를 살짝 기울였고 미소는 사라졌다. 말구멍 가장자리가 입가 근처, 유리에 옅은 정상 반사. **위 왼쪽 기억 비네트**(x 4–50%, y 4–36%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — panel_009와 같은 부감 각도로 파란 바인더 위에 놓인 노미란의 LEFT 손바닥(가는 금색 팔찌시계), 검은 일지 모서리, 비네트의 위 1/3은 그 컷처럼 책상 너머 어두운 유리. 비네트 아래(x 4–34%, y 36–98%)와 위 오른쪽(x 52–97%, y 2–30%)은 어둑한 복도.
- characters: JEONGMIN(FULL) — 표정 ④ `the smile gone, a completely blank, patient, waiting face`, 고개 기울임 · MIRAN(비네트 안 손만, 의상 A 소매)
- props: 비네트 안 PROP_ROSTER(닫힘, 빈 표지) · PROP_DUTYLOG
- lighting: LIGHT_L1 + LIGHT_LAMP, 그의 얼굴에 차가운 물 하이라이트 · 비네트는 바랜 색 · 빨강 없음
- dialogue_ref (2): ① 구정민 dialogue "명부에 없는 분이 담당자라고요?" (위 오른쪽, 꼬리 ↓ 구정민) ② 노미란(기억) memory "명부엔 내 이름 있어." (비네트 안 위쪽, 꼬리 → 비네트 속 손)
- repeat: 기억 비네트 — 원본 **panel_009** 첨부(§D)
- attach: _workspace/05_panels/ep01/panel_009.png, refs/JEONGMIN_turnaround.png, refs/JEONGMIN_expressions.png
- fx/note: bubble space: ① 위 오른쪽(x 52–97%, y 2–30%) — 그의 머리 위 어둑한 복도 · ② 비네트 안 위 1/3(x 6–48%, y 6–17%) — 비네트 속 어두운 유리(대안: 비네트 바로 아래 x 4–34%, y 37–48%의 어둠). / **인셋 처리:** Flow가 한 장으로 그리는 액자형 기억 비네트(§D). panel_009를 첨부하고 "the small framed memory picture in the upper-left shows the same moment as the attached earlier panel, faded". 안 되면 위 왼쪽을 조용한 배경으로 비운 버전으로 받고 합성 여부는 리더가 정한다. Avoid 줄에서 `panel borders`만 뺀다. / F-48③: 왜 틀렸는지가 같은 컷에서 보여야 한다.

### panel_025
- scene_id: S05a / location: LOC_L1_DUTYROOM · 서하 클로즈업(살짝 올려다봄)
- beat: B18 ④ 정정 ① 떨림 · 긴장 8 · gap_after 0
- size: small · aspect: **1:1**
- camera: 약간 low-angle close-up — 그녀 얼굴과 머리 위 형광등 기구
- composition: 서하의 얼굴이 가운데 아래(x 15–80%, y 32–92%). 위 가장자리 오른쪽(x 50–95%, y 0–16%) 머리 위 철망 형광등 기구, 관이 더듬거리며 어두워진다. 위 왼쪽(x 3–45%, y 3–28%)은 어두워지는 천장.
- characters: SEOHA(FULL) — 표정 ② `frozen in fear, eyes wide, lips pressed shut, face rigid`
- props: 형광등 기구(철망)
- lighting: LIGHT_FLICKER(그녀 바로 위 관만), 스탠드 빛이 아래에서 약하게 · 빨강 없음
- dialogue_ref (sfx): sfx "치직—" (형광등)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: sfx — 위 왼쪽 천장(x 3–45%, y 3–28%), 기구 곁. / 정정 문법 ①(world §5-5). 괴물·피·비명 얼굴 금지.

### panel_026
- scene_id: S05a / location: LOC_L1_DUTYROOM · (완전한 어둠)
- beat: B18 ④ 정정 ② 어둠 한 컷 · 긴장 8 · gap_after 240
- size: small · aspect: **1:1**
- camera: —
- composition: 완전한 어둠 한 장. 형체·실루엣·빛 없음.
- characters: 없음
- props: 없음
- lighting: LIGHT_BLACKOUT
- dialogue_ref: 없음(무대사)
- attach: (없음)
- fx/note: bubble space: silent. / 프롬프트 = `a completely black image, total darkness, no shapes, no silhouettes, no light`. Flow가 거부하거나 거의 검정이면 그대로 ACCEPT(실루엣만 없으면). 뒤 240px 간격과 이어져 어둠이 길어진다.

### panel_027
- scene_id: S05a / location: LOC_L1_DUTYROOM · VIEW_DESK(세로)
- beat: B19 ④ 정정 ③ 빈자리 · **정지점** · 긴장 7 · gap_after **720**
- size: large · aspect: **9:16**
- camera: high-angle 부감 — 회전의자 뒤쪽 위에서 책상과 창구
- composition: 아래(y 66–100%) 빈 초록 회전의자가 천천히 돌고 있다(등받이 가장자리만 살짝 흐림). 가운데(y 36–66%) 책상: 굴러가는 볼펜, 연회청 빈 서식의 직인 원에 반쯤만 찍힌 붉은 반원, 스탠드·내선·바인더·서류함 고정 배치. 위(y 10–34%) 통유리 너머 바깥 선반의 놋쇠 벨이 손 없이 혼자 떨린다(아주 작은 진동 표시), 유리 너머 복도는 비었다. 사람 없음.
- characters: 없음
- props: PROP_SWIVEL_CHAIR(`the empty chair still slowly turning`) · PROP_PEN(`rolling across the desk`) · **PROP_FORM_DEATH**(`a half-pressed red circular seal mark on the form's seal circle`) · PROP_CALLBELL(`trembling by itself`) · VIEW_DESK 고정 소품
- lighting: 불이 돌아온 LIGHT_L1 + LIGHT_LAMP, 정적 · 빨강 = 반원 직인 자국·인주 케이스·칸막이 테이프뿐
- dialogue_ref: 없음(무대사)
- attach: refs/LOC_L1_DESK_plate.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: silent. / 죽음은 화면 밖 — 몸·피·흔적 금지, 빈자리로만. 서식은 빈 칸(글씨 없음). 반전 직전 최대 정지(720).

--- SCENE BREAK --- (S05a → S05b · L1 당직실 → L2 앵커 복도 · 되감김 22:00)

### panel_028
- scene_id: S05b / location: LOC_L2_CORRIDOR · VIEW_ANCHOR
- beat: B20 ④ **반전 1 공개: 되감김(정점)** ⟨반전⟩ · 긴장 **8** · gap_after 120
- size: large · aspect: **9:16**
- camera: 복도 안 눈높이, 방화문을 정면으로 본 frontal medium — 허리 위
- composition: [COMP-ANCHOR] 서하가 화면 가운데(x 25–75%), 머리 y 30–45%, 허리 위까지. 그녀 바로 뒤에서 무거운 회색 철제 방화문이 닫히는 중(가로 밀대가 보임). 문 위 가운데(x 50%, y 8–20%)에 숫자 없는 흰 둥근 시계: 정확히 10시 정각(짧은 시침 = 10시 방향, 긴 분침 = 정확히 위). RIGHT 손으로 휴대폰을 RIGHT 귀에(정면이라 화면 왼쪽), LEFT 어깨에 네이비 캔버스 토트백(화면 오른쪽), 마른 옷. 양옆 연녹 벽과 진녹 띠, 위로 노출 배관. 위 왼쪽(x 3–38%, y 3–26%)은 민무늬 벽과 배관뿐. 방화문 오른쪽 가장자리 중간(x 72–96%, y 34–50%)은 민무늬 문면.
- characters: SEOHA(FULL + 계단·앵커 상태 토큰) — 표정 ② `frozen in fear, eyes wide, lips pressed shut, face rigid`
- props: PROP_CLOCK(10:00, 숫자·로고 없음) · 휴대폰(무지, 화면 안 보임) · 토트백
- lighting: LIGHT_CORRIDOR · 빨강 없음(소화전함은 회색)
- dialogue_ref (sfx): sfx "쿵" (방화문)
- repeat: COMP-ANCHOR 반복 · 원본 **panel_007** 첨부 · 바뀌는 것: **표정만**(통화 끝의 부드러운 얼굴 → ② 공포로 굳음). 시계·문·휴대폰·토트백·옷·거리·높이 전부 같다
- attach: _workspace/05_panels/ep01/panel_007.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 왼쪽(x 3–38%, y 3–26%) — 시계 왼쪽의 민무늬 벽·배관, 시계 면은 절대 덮지 않는다 · sfx: 방화문 오른쪽 가장자리 중간(x 72–96%, y 34–50%)의 민무늬 문면. / (P28은 효과음만 — 위 왼쪽 빈자리는 P7과 같은 구도라서 남는다.) 시계가 P7과 다르면(10:10 등) REGEN.

### panel_029
- scene_id: S05b / location: LOC_L2_CORRIDOR · VIEW_ANCHOR 축(가깝게)
- beat: B21 ④ 대가 ① 기억나는 말 · 긴장 8 · gap_after 40
- size: small · aspect: **1:1**
- camera: 약간 high-angle medium close-up — 숙인 머리 너머로 손의 휴대폰
- composition: 화면 왼쪽 위~가운데(x 8–55%, y 10–52%) 고개 숙인 서하의 얼굴, 눈은 아래. 화면 오른쪽 아래(x 45–82%, y 55–88%) RIGHT 손에 쥔 휴대폰, 화면이 위를 향한 **빈 검은 화면**. 뒤는 연녹 벽과 닫힌 방화문 일부. 오른쪽 위(x 55–97%, y 3–45%)는 민무늬 연녹 벽.
- characters: SEOHA(FULL) — 표정 ③ `blank, unfocused eyes looking down at her phone, slack face, as if she has forgotten something`
- props: 휴대폰(**빈 검은 화면** — 아이콘·시각·글자 없음, 충분히 크게) · 토트백(LEFT 어깨)
- lighting: LIGHT_CORRIDOR, 따뜻한 빛 없음 · 빨강 없음
- dialogue_ref (1): ① 지호(기억) memory "누나, 버텨!" (휴대폰 위쪽, 흐린 테)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_CORRIDOR_plate.png
- fx/note: bubble space: 위 오른쪽(x 55–97%, y 3–45%) — 휴대폰 위쪽의 민무늬 벽(얼굴과 휴대폰 사이를 피함). / E4 회수.

### panel_030
- scene_id: S05b / location: LOC_L2_CORRIDOR · VIEW_ANCHOR 축(클로즈업)
- beat: B21 ④ 대가 ② 사라진 약속 · 긴장 8 · gap_after 480
- size: small · aspect: **1:1**
- camera: 눈높이 close-up
- composition: 서하의 얼굴이 가운데~오른쪽(x 30–92%, y 28–85%), 초점 없는 눈. 왼쪽 아래 가장자리(x 0–35%, y 70–100%) 휴대폰을 쥔 손이 천천히 내려간다(약간 흐림). 위 왼쪽 1/4(x 3–48%, y 3–30%)은 흐린 연녹 벽과 배관.
- characters: SEOHA(FULL) — 표정 ③(눈은 정면 아래 허공)
- props: 휴대폰(내려가는 중, 화면 안 보임)
- lighting: LIGHT_CORRIDOR · 빨강 없음
- dialogue_ref (1): ① 서하 dialogue "…우리, 무슨 약속 했더라?" (꼬리 ↘ 입)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 왼쪽 1/4(x 3–48%, y 3–30%) — 흐린 벽. / 방화문 안쪽이라 지호의 이름을 말하지 않는다(R11). F-11② 더블탭.

--- SCENE BREAK --- (S05b → S06a · 같은 L2 복도, 반대 방향 · 블록 ⑤)

### panel_031
- scene_id: S06a / location: LOC_L2_CORRIDOR · VIEW_LONG
- beat: B22 ⑤ 결심 · 긴장 6 · gap_after 120
- size: large · aspect: **9:16**
- camera: 눈높이, 방화문 쪽에서 복도 끝을 본 wide — 서하는 근경
- composition: 길게 뻗은 복도가 가운데 소실점(y 45%)으로. 화면 오른쪽 벽 중간에 불 켜진 창구의 따뜻한 사각형(x 62–78%, y 42–55%), 맞은편 왼쪽 벽에 파란 대기 의자 셋, 하나 걸러 켜진 형광등, 끝 1/3은 어둠. 화면 왼쪽 아래 근경(x 5–50%, y 52–100%) 창구를 향해 걸어가는 서하의 등과 옆얼굴(오른뺨 쪽, 굳은 턱선). 위 24%는 천장(배관이 드문 쪽).
- characters: SEOHA(FULL, 뒷모습 3/4) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze`
- props: 토트백 · 대기 의자 · 회색 소화전함
- lighting: LIGHT_CORRIDOR · 빨강 없음
- dialogue_ref (1): ① 서하 thought "(하나. 울지 않는다. 둘. 마지막 줄까지 읽는다.)" (구름형, 꼬리 없음)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/LOC_L2_CORRIDOR_plate.png
- fx/note: bubble space: 위 24%(x 4–96%, y 2–24%) — 어둑한 천장(형광등 기구는 이 띠 밖 아래쪽에). / 번호 매긴 속마음(반전 2 보조 근거).

--- SCENE BREAK --- (S06a → S06b · L2 복도 → L1 당직실 · 루프 2 반복)

### panel_032
- scene_id: S06b / location: LOC_L1_DUTYROOM · VIEW_C
- beat: B23 ⑤ 유머 숨 고르기 ① · 긴장 5 · gap_after 0
- size: small · aspect: **1:1**
- camera: 눈높이 medium wide — 방 안쪽(서가 쪽)에서 창구 벽 방향, 무릎 위
- composition: [COMP-HANDOVER] 화면 가운데 왼쪽(x 18–55%) 당직석 책상 옆에 선 노미란: 검정 코트를 어깨에만 걸치고(소매가 비어 늘어짐) 한 손가락에 열쇠 꾸러미를 걸어 흔든다. 화면 오른쪽(x 68–95%) 창구 벽 끝 출입문 문간에 선 서하(토트백), 노미란 쪽을 본다. 두 사람 머리는 40% 선 아래(y 40–55%). 배경: 빈 초록 회전의자, 통유리 창구와 그 너머 어둑한 복도, 책상 왼쪽 끝 칸막이. 위 40%(y 0–40%)는 천장 배관·윗벽·유리 위쪽 너머 어두운 복도.
- characters: MIRAN(FULL 의상 A + 열쇠 흔들기 상태 토큰) — 표정 ① · SEOHA(SHORT) — 표정 ⑧ `a flat, polite, deadpan civil-servant face with slightly lowered eyelids`, 입술이 노미란과 함께 같은 말을 만든다
- props: PROP_KEYS · 노미란 허리 릴의 공무원증(뒤집혀 빈 뒷면) · 서하의 빈 공무원증
- lighting: LIGHT_COMEDY(고르고 평평, 떨림 없음) · 빨강 = 칸막이 종이의 테이프(작게)뿐
- dialogue_ref (2): ① 노미란 dialogue "강서하 주무관, 우리 오늘 당직 좀 바꿔 주자. 그치?" (꼬리 ↙ 노미란) ② 서하(작게, 동시에) dialogue "그치?" (작은 말풍선, 첫 말풍선 끝에 겹치게, 꼬리 ↘ 서하)
- repeat: COMP-HANDOVER 반복 · 원본 **panel_008** 첨부 · 바뀌는 것: 서하 표정·입만(입을 열다 만 불안 → ⑧ 무표정 + 함께 말하는 입). 노미란 자세·열쇠·배치는 같다
- attach: _workspace/05_panels/ep01/panel_008.png, refs/MIRAN_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 천장·윗벽·유리 위쪽 어둠. / 배치: 노미란 말풍선(긴 줄, w 약 60%)은 위 왼쪽, 서하의 작은 말풍선은 그 끝에 겹치게. / 데자뷔 블랙코미디(같은 그림 = 루프의 확인).

### panel_033
- scene_id: S06b / location: LOC_L1_DUTYROOM · VIEW_DESK
- beat: B23 ⑤ 유머 ② + 다리 단서 묻기 · 긴장 5 · gap_after 0
- size: small · aspect: **1:1**
- camera: high-angle 약 45° 부감, 책상 와이드 — 회전의자 뒤쪽 위에서, 책상의 좌우 = 앉은 사람의 좌우
- composition: [COMP-DESK] 위 38%(y 0–38%)는 책상 너머 통유리 창구와 그 너머 어둑한 복도. 가운데~아래에 책상 고정 배치: 앞 왼쪽 흰 거위목 스탠드, 앞 오른쪽 베이지 내선 전화, 오른쪽에 파란 2공 바인더와 그 위쪽 절반에 얹힌 검은 일지, 안쪽 가운데 철제 서류함의 낮은 연노랑 영수증 묶음, 그 옆 누런 테이프 디스펜서, 작은 나무 상자의 직인과 둥근 인주 케이스, 펜꽂이. 왼쪽 끝 칸막이에 작은 수칙 종이(왼쪽 가장자리, y 40–60%). 오른쪽 가장자리에서 노미란의 팔이 들어온다(어깨에서 잘림): LEFT 손바닥(가는 금색 팔찌시계)이 바인더의 드러난 파란 표지 위, RIGHT 손가락에서 열쇠 꾸러미가 떨어진다. 아래 가운데(x 30–60%, y 78–100%) 책상 앞 모서리 위로 내민 서하의 두 손바닥이 열쇠를 받는다. 왼쪽 아래(x 0–35%, y 70–100%)에 선 서하를 위·뒤에서 본 3/4: 오른쪽(노미란 쪽)으로 돌린 얼굴 옆선, 시스루 앞머리, 낮은 포니테일.
- characters: MIRAN(SHORT 의상 A — 팔·손만, 명부 위 손바닥 상태 토큰) · SEOHA(SHORT) — 고개를 숙이지 않는다, 무표정 ⑧, 눈이 서류함 묶음을 한 번 스친다
- props: PROP_ROSTER(닫힘, 빈 표지) · PROP_DUTYLOG(닫힘) · **PROP_RECEIPTS**(`the stack of pale-yellow slips is slightly higher than before, just a little`) · PROP_SEAL · PROP_DISPENSER · PROP_EXT_PHONE · PROP_LAMP · PROP_KEYS · 유리 상판 밑 빈 종이
- lighting: LIGHT_COMEDY + 스탠드는 켜져 있음(작은 노란 원) · 빨강 = 인주 케이스·영수증의 작은 원·칸막이 종이 테이프뿐
- dialogue_ref (2): ① 노미란 dialogue "신입은 사흘—" (꼬리 ↗ 오른쪽 가장자리 = 프레임 밖 노미란) ② 서하(무표정) dialogue "…못 버티죠." (꼬리 ↙ 서하)
- repeat: COMP-DESK 반복 · 원본 **panel_009** 첨부 · 바뀌는 것: 영수증 묶음이 **조금** 높다(셀 수 없게, F-16②) · 서하가 고개를 숙이지 않고 무표정, 눈이 묶음을 스친다. 나머지 배치·각도·노미란 손은 같다
- attach: _workspace/05_panels/ep01/panel_009.png, refs/MIRAN_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 책상 너머 유리와 어두운 복도. / 배치: ①은 위 왼쪽, ②는 그 아래. / 영수증은 장수를 세지 않는다(말로도 그림으로도).

### panel_034
- scene_id: S06b / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: B24 ⑤ 커피 링 + 루프 2에만 있는 소리 ⟨이중의미⟩ · 긴장 6 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE)
- composition: 화면 왼쪽 중경(x 10–45%, 머리 y 40–54%) 선임이 서가 앞에서 종이컵을 내민다, 얼굴은 서하 쪽 — 그 왼쪽 뒤로 서가 사이의 어두운 틈(x 0–18%, y 38–60%). 화면 오른쪽 앞(x 52–100%) 당직석의 서하가 컵을 받아 책상 위 펼친 수첩의 오른쪽 페이지 오른쪽 아래 귀퉁이에 내려놓는다(x 60–85%, y 72–88%). 가운데 안쪽 배경: 칸막이, 그 뒤 **닫힌 크림색 숙직실 문과 문 아래 틈의 가는 불빛**. 위 38%는 천장·서가 꼭대기 어둠·유리 위쪽 너머 복도.
- characters: SEONIM(FULL) — 표정 ①, 서가 쪽 소리에 돌아보지 않는다 · SEOHA(SHORT) — 담담, 컵을 수첩에 내려놓는 손
- props: PROP_PAPER_CUP · **PROP_NOTEBOOK_OPEN**(빈 모눈, 글씨 없음) · 숙직실 문(`a thin line of light under the closed door`)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 칸막이 테이프(작게)뿐 · 커피는 갈색
- dialogue_ref (2 + sfx): ① 선임 dialogue "마셔. 긴 밤이래." (꼬리 ↙ 선임) · sfx "부스럭" (서가 사이 어둠) · ② 선임 dialogue "…쥐래." (꼬리 ↙ 선임)
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/PROP_PAGES_pair.png
- fx/note: bubble space: 위 38%(x 20–97%, y 2–38%) — 천장·유리 위쪽 너머 복도(①은 위 왼쪽~가운데, ②는 위 오른쪽) · sfx: 왼쪽 서가 사이 어두운 틈(x 0–18%, y 38–60%), 선임 얼굴과 겹치지 않게. / F-49②(새 링의 시작), F-50①(서가 어둠의 소리). 컵을 내려놓는 귀퉁이 = P54의 링 자리.

### panel_035
- scene_id: S06b / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: B25 ⑤ 함께 읊기 · 목표 응시 · 긴장 6 · gap_after 0
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE)
- composition: [COMP-READ] 화면 오른쪽 앞(x 52–100%, 머리 y 32–50%) 당직석에 앉은 서하, 몸은 오른쪽 유리 쪽, 고개는 왼쪽 선임 쪽으로 돌려 얼굴 3/4(RIGHT 눈 밑 점이 보인다). 화면 왼쪽 중경(x 0–42%, 머리 y 40–55%) 서가 앞 접이식 의자에 거꾸로 앉은 선임, 팔뚝을 등받이에 얹고 서하를 보며 외워 읊는다(빈손, 돋보기는 목줄에 걸린 채 손대지 않음). 가운데 안쪽 배경: 책상 왼쪽 끝 낮은 칸막이와 작은 수칙 종이(흰 4번 조각·짧은 빨간 테이프 두 줄), 그 뒤 벽에 닫힌 크림색 숙직실 문. 오른쪽 가장자리: 통유리 창구, 그 너머 어둑한 복도 깊은 곳(y 40–46%)의 작은 형광등. 책상 위 종이컵(위치는 props). 위 40%(y 0–40%)는 천장 배관·윗벽·서가 꼭대기 어둠.
- characters: SEONIM(FULL + 거꾸로 앉기 + 외워 읊기 상태 토큰) — 표정 ④ `narrowed, suspicious eyes, head tilted, watching closely` · SEOHA(SHORT) — 담담하게 함께 읊는 입, 눈은 선임 너머 안쪽의 숙직실 문에 박혀 있다
- props: PROP_RULESHEET_SMALL · PROP_PAPER_CUP(**펼친 수첩 오른쪽 아래 귀퉁이 위**) · PROP_NOTEBOOK_OPEN · 숙직실 문 닫힘 + `a thin line of light under the closed door`
- lighting: LIGHT_L1 + LIGHT_LAMP + LIGHT_FLICKER(유리 너머 복도 끝 형광등 한 개만) · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 선임·서하(함께) dialogue "1번. 22시부터 06시까지 창구를 찾은 민원인은 모두 접수한다." (꼬리 둘: ↙ 선임 · ↘ 서하 — letterer 판단)
- repeat: COMP-READ 반복 · 원본 **panel_012** 첨부 · 바뀌는 것: 서하도 읊고 **눈은 숙직실 문** · 선임 ④ 실눈 · 종이컵은 펼친 수첩 위(P34 이후) · 숙직실 문틈 불빛
- attach: _workspace/05_panels/ep01/panel_012.png, refs/SEOHA_expressions.png, refs/SEONIM_expressions.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 천장 배관·윗벽·서가 꼭대기 어둠. 복도 끝 떨리는 형광등(y 40–46%)은 그 아래에 남긴다. / 배치: 함께 읊는 말풍선 1개(긴 수칙 문구, w 60% 이상) — 위 25% 안쪽 가운데. / F-14②. 서하의 시선 방향(숙직실 문)이 읽혀야 한다.

### panel_036
- scene_id: S06b / location: LOC_L1_DUTYROOM · VIEW_SIDE
- beat: B25 ⑤ 같은 벨, 같은 첫 대사 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium two-shot (VIEW_SIDE)
- composition: [COMP-BELL] COMP-READ와 같은 카메라·같은 배치. 화면 왼쪽 중경(x 0–42%) 접이식 의자에 거꾸로 앉은 선임. 화면 오른쪽 앞(x 52–100%) 당직석의 서하. 오른쪽 유리 너머 바깥 선반(x 72–92%, y 55–66%) 위 작은 놋쇠 돔 호출벨과 그것을 누른 역광의 손(디테일은 그림자). 가운데 안쪽 배경: 칸막이의 작은 수칙 종이, 닫힌 크림색 숙직실 문. 위 40%(y 0–40%)는 천장 배관·윗벽·서가 꼭대기 어둠. 벨 바로 위 유리(x 70–96%, y 42–54%)는 어둑한 복도.
- characters: SEONIM(SHORT, 낭독하던 입 모양 그대로) · SEOHA(FULL) — 벨이 울리기도 전에 RIGHT 손을 투입구로 뻗어 서식을 받는다, 표정 ⑧에 가까운 침착 · JEONGMIN(벨을 누른 손 + 투입구로 서식을 미는 젖은 손 — expressions ⑤)
- props: PROP_CALLBELL(`water drops beaded on its brass dome`) · PROP_FORM_DEATH(투입구에서 반쯤 나온 빈 서식) · PROP_RULESHEET_SMALL · PROP_PAPER_CUP(펼친 수첩 위) · 숙직실 문 닫힘 + 문틈 불빛
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2 + sfx): ① 선임 dialogue "3. 호출벨이—" (위 왼쪽, 꼬리 ↙ 선임) · sfx "띵" (벨) · ② 구정민 dialogue "늦은 시간에 죄송합니다." (위 오른쪽, 꼬리 ↘ 유리 너머 벨 쪽)
- repeat: COMP-BELL 반복 · 원본 **panel_013** 첨부 · 바뀌는 것: **벨 위 물방울** · 서하가 고개를 돌리는 대신 투입구로 손을 뻗어 서식을 받는다 · 종이컵(수첩 위)·문틈 불빛은 P35와 같은 상태
- attach: _workspace/05_panels/ep01/panel_013.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_expressions.png
- fx/note: bubble space: 위 40%(x 3–97%, y 2–40%) — 천장·윗벽·서가 꼭대기 어둠 · sfx: 벨 바로 위 유리의 어둑한 복도(x 70–96%, y 42–54%). / ECHO: P13 효과음·P14 ①과 같은 말. F-12.

### panel_037
- scene_id: S06b / location: LOC_L1_DUTYROOM · 서가 방향(당직석 쪽에서)
- beat: B25 ⑤ 같은 멈칫 + 의심 고정 · 긴장 7 · gap_after 40
- size: large · aspect: **9:16**
- camera: 눈높이 close-up(머리·어깨) — 당직석 쪽에서
- composition: [COMP-PAUSE] 선임의 얼굴이 가운데 아래쪽(x 20–80%, y 38–78%), 어깨가 아래 가장자리. 뒤는 회색 철제 서가와 그 틈의 어둠(초점 밖). 위 28%(y 0–28%)는 서가 위쪽 어둠. 왼쪽 아래 가장자리(x 0–22%, y 60–100%)는 초점 밖 전경 자리로 비어 있다.
- characters: SEONIM(FULL) — 표정 ② `pausing mid-sentence, his eyes sliding away, mouth stopped half-open` · SEOHA(전경 가장자리, 초점 밖) — 그 멈칫을 지켜보는 옆얼굴 가장자리와 머스터드 어깨
- props: 목줄 돋보기(쓰지 않음)
- lighting: LIGHT_L1(위에서 차가운 빛, 눈두덩 그림자) + 스탠드의 옅은 따뜻한 가장자리빛 한쪽 · 빨강 없음
- dialogue_ref (2): ① 선임 dialogue "4번." (꼬리 ↓ 선임) ② 서하 thought "(저 사람… 알고 있어.)" (구름형, 꼬리 없음)
- repeat: COMP-PAUSE 반복 · 원본 **panel_018** 첨부 · 바뀌는 것: 왼쪽 아래 가장자리 빈 전경 자리에 초점 밖 서하의 옆얼굴 가장자리·어깨(점이 보이면 RIGHT 눈 밑)
- attach: _workspace/05_panels/ep01/panel_018.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 28%(x 3–97%, y 2–28%) — 서가 위쪽 어둠. / 배치: ①은 짧게 위 오른쪽, ②는 위 왼쪽. / F-06③: 미스디렉션 고정(선임).

### panel_038
- scene_id: S06b / location: LOC_L1_DUTYROOM · VIEW_B
- beat: B26 ⑤ 콜드오픈 도달 · 첫 "아니요" · 긴장 7 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이(eye-level), over-the-shoulder medium — 앉은 서하 뒤에서 유리 창구 쪽으로
- composition: [COMP-COLD-1] 앞쪽 아래 오른쪽(x 55–100%, y 55–100%)에 서하의 뒷머리와 오른쪽 어깨(낮은 포니테일·네이비 머리끈, 오른뺨 가장자리만). 화면 왼쪽 가장자리(x 0–18%, y 42–68%) 낮은 회색 칸막이에 작은 수칙 종이: 흰 4번 조각 + 짧은 빨간 테이프 두 줄, 오른쪽 위 귀퉁이에 색 점만 한 바랜 스티커. 가운데(x 35–65%, 머리 y 30–42%) 두꺼운 통유리 너머 복도 역광 속 마른 남자의 상반신 실루엣, 가슴에 납작한 파일. 유리의 얼굴 높이에 둥근 말구멍, 카운터 높이에 투입구. 책상 상판은 아래 가장자리에 스탠드의 따뜻한 빛 번짐만(다른 책상 소품은 프레임 밖). 위 22%는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(뒷모습 상태 토큰 + SHORT, 얼굴 안 보임) · JEONGMIN(역광 실루엣 상태 토큰 — 젖음은 그림자에 묻힘)
- props: PROP_RULESHEET_SMALL (빈 모눈, 글씨 없음) · 유리 바깥 선반의 PROP_CALLBELL(작게)
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 · 빨강 = 수칙 종이의 테이프 두 줄뿐
- dialogue_ref (1): ① 서하 dialogue "수칙 4번은 지키지 않겠습니다." (낮고 평평, 꼬리 ↘ 그녀의 뒷머리)
- repeat: COMP-COLD-1 반복 · 원본 **panel_001** 첨부 · 바뀌는 것: **없음**(같은 순간 — 새로 그리되 같게)
- attach: _workspace/05_panels/ep01/panel_001.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- fx/note: bubble space: 위 22% 가운데~왼쪽(x 5–70%, y 2–22%) — 유리 위쪽 너머 어둑한 복도 천장. 실루엣 머리(y 30% 아래)와 칸막이 종이에 걸리지 않게. / E6 회수(P1과 KM 동일). 인생 첫 "아니요" — 멈칫(P37)의 틈을 자르고 들어간다.

### panel_039
- scene_id: S06b / location: LOC_L1_DUTYROOM · 서가 방향(당직석 쪽에서 본 뒷벽)
- beat: B26 ⑤ **미니 클리프(61%)** · 긴장 8 · gap_after 480
- size: small · aspect: **1:1**
- camera: 눈높이에서 약간 낮게, medium close-up — 당직석 쪽에서 선임을 정면 3/4로
- composition: [COMP-COLD-2] 선임이 거꾸로 돌려 앉은 회색 접이식 의자에서 상체를 앞으로 확 내민다. 얼굴은 가운데~오른쪽(x 40–85%, y 35–78%), 큰 두 손이 의자 등받이를 움켜쥔다(아래 가장자리). 목의 검은 줄 돋보기가 가슴께에 매달려 흔들린다. 뒤는 회색 철제 서가와 그 사이의 어두운 틈. 위 왼쪽 1/4(x 0–48%, y 0–32%)은 서가 사이 어둠.
- characters: SEONIM(FULL + 거꾸로 앉기 상태 토큰, 종이컵 없이 두 손으로 등받이) — 표정 ③ `eyes suddenly wide open, leaning his whole body forward in alarm`
- props: PROP_FOLDING_CHAIR
- lighting: LIGHT_L1(위에서 차가운 형광, 눈썹·턱 아래 짧은 그림자), 스탠드 빛은 닿지 않음
- dialogue_ref (1): ① 선임 dialogue "너 미쳤어?" (꼬리 ↘ 그의 입)
- repeat: COMP-COLD-2 반복 · 원본 **panel_002** 첨부 · 바뀌는 것: **없음**(같은 순간)
- attach: _workspace/05_panels/ep01/panel_002.png, refs/SEONIM_turnaround.png, refs/SEONIM_expressions.png
- fx/note: bubble space: 위 왼쪽 1/4(x 3–48%, y 3–32%) — 서가 사이 어둠. / E6 회수(P2와 KM 동일). 뒤 480px = 미니 클리프 정지점.

--- SCENE BREAK --- (S06b → S07 · 장소 동일 L1 · 블록 ⑥ 첫 반격, P40 = P3과 같은 순간)

### panel_040
- scene_id: S07 / location: LOC_L1_DUTYROOM · VIEW_B
- beat: B27 ⑥ 그녀를 죽인 질문 · 긴장 8 · gap_after 40
- size: large · aspect: **9:16**
- camera: 앉은 눈높이보다 조금 높게, wide — 서하 뒤에서 창구 전체를
- composition: [COMP-COLD-3] 아래 30%(y 70–100%) 앞쪽에 당직석에 앉은 서하의 뒷모습(뒷머리·어깨·초록 회전의자 등받이, 가운데에서 약간 오른쪽). 가운데(y 30–68%) 두꺼운 통유리 너머, 복도 역광 속 마른 남자 실루엣이 유리의 말구멍 쪽으로 천천히 상체를 숙인다(얼굴은 그림자). 화면 왼쪽 가장자리 구석(x 0–15%, y 50–65%) 칸막이의 작은 수칙 종이, 흰 4번 조각과 짧은 빨간 테이프 두 줄. 스탠드의 따뜻한 빛은 왼쪽 아래 그녀의 어깨에만. 위 18%(y 0–18%)는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(뒷모습 상태 토큰) · JEONGMIN(역광 실루엣 상태 토큰, 숙이는 자세)
- props: PROP_RULESHEET_SMALL · PROP_CALLBELL(작게)
- lighting: LIGHT_L1 + LIGHT_LAMP, 유리 너머 복도 역광 · 빨강 = 테이프 두 줄뿐
- dialogue_ref (1): ① 구정민 dialogue "담당자분 계십니까? 직인이 필요합니다." (꼬리 ↓ 유리 너머 실루엣)
- repeat: COMP-COLD-3 반복 · 원본 **panel_003** 첨부 · 바뀌는 것: **없음**(같은 순간. Flow가 실루엣 얼굴을 조금 더 보여 주면 ACCEPT — style-bible §5-3)
- attach: _workspace/05_panels/ep01/panel_003.png, refs/SEOHA_turnaround.png, refs/JEONGMIN_turnaround.png
- fx/note: bubble space: 위 18%(x 5–95%, y 2–18%) — 유리 위쪽 너머 어둑한 복도 천장. / E5 회수(P22와 KM 동일).

### panel_041
- scene_id: S07 / location: LOC_L1_DUTYROOM · VIEW_A
- beat: B27 ⑥ 사실 기록으로 답하기 · 긴장 8 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium — 복도 쪽에서 통유리 너머의 서하
- composition: 화면 가운데 왼쪽(x 15–60%, 머리 y 30–46%) 유리 너머 서하가 결연하게 정면을 본다. 그 아래(x 18–78%, y 48–84%) 그녀가 펼쳐 **유리에 바짝 댄 파란 명부**: 빈 칸 표가 이쪽을 향한다, 그녀의 오른손 검지가 빈 칸 하나를 짚는다(크게). 위 왼쪽(x 5–45%, y 2–10%) 그녀 머리 위 형광등 관이 **흔들림 없이** 켜져 있다. 아래 오른쪽 가장자리(x 80–100%, y 58–100%) 초점 밖 구정민의 젖은 어깨와 옆머리. 아래 가장자리에 말구멍·투입구. 오른쪽(그녀의 LEFT) 칸막이·스탠드. 위 오른쪽(x 48–96%, y 3–38%)은 유리 너머 방 안쪽 서가의 어둑함.
- characters: SEOHA(FULL) — 표정 ④ `resolute, level eyebrows, lips pressed firmly together, a steady straight gaze` · JEONGMIN(SHORT, 전경 가장자리 초점 밖)
- props: **PROP_ROSTER**(펼침 `open to a page of blank grid table cells, no writing`, 크게) · PROP_RULESHEET_SMALL
- lighting: LIGHT_L1 + LIGHT_LAMP + **LIGHT_STEADY**(안도 신호 — 떨림 없음) · 빨강 = 테이프(작게)뿐
- dialogue_ref (2): ① 서하 dialogue "담당자는 당직 명부에 계신 분입니다." ② 서하 dialogue "…노미란 팀장님." (둘 다 꼬리 ↙ 서하)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JEONGMIN_turnaround.png
- fx/note: bubble space: 위 오른쪽(x 48–96%, y 3–38%) — 유리 너머 방 안쪽 서가 어둠, 두 말풍선을 위아래로. 머리 위 형광등(위 왼쪽)과 명부를 가리지 않는다. / E3 회수 · E9 원본 · F-52①. 명부 칸은 빈칸(이름 글씨 없음 — 이름은 말풍선으로만).

### panel_042
- scene_id: S07 / location: LOC_L1_DUTYROOM · VIEW_C 축(숙직실 문 + 창구 왼쪽 모서리)
- beat: B28 ⑥ 빈 유리 · 노크 · 긴장 8 · gap_after 120
- size: large · aspect: **9:16**
- camera: 서 있는 눈높이 medium wide — 서가 쪽에서 왼쪽 벽 방향으로 비스듬히
- composition: 화면 왼쪽 절반(x 0–50%, y 22–95%) 옆벽의 닫힌 크림색 숙직실 문(간유리 창, 놋쇠 손잡이, 문 아래 틈의 가는 불빛). 화면 오른쪽 절반(x 52–100%, y 25–75%) 통유리 창구 끝부분: 유리 앞은 비었다 — 바깥 선반에 흘린 물과 투입구 아래 고인 물만, 그 너머 빈 복도. 사람 없음. 오른쪽 아래 가장자리에 당직석 스탠드의 따뜻한 빛 번짐만. 위 20%는 천장.
- characters: 없음(노크하는 존재는 보여 주지 않는다)
- props: 숙직실 문(`a thin line of light under the closed door`) · 바깥 선반의 고인 물(웅덩이 4단계 `only the puddle remains in front of the empty glass`) · PROP_CALLBELL
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 없음
- dialogue_ref (sfx): sfx "똑. 똑. 똑." (숙직실 문)
- attach: refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: sfx — 숙직실 문 오른쪽 문틀 곁 민무늬 벽(x 30–55%, y 30–48%), 문 위쪽 간유리 창은 피한다. / 노크하는 손·형체 금지(R6). 유리를 넘는 그림 없음.

### panel_043
- scene_id: S07 / location: LOC_L1_DUTYROOM · VIEW_NAPDOOR(열림)
- beat: B29 ⑥ 해방형 유머 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 눈높이 medium — 문 정면, 문틀이 프레임 안 프레임
- composition: 화면 가운데(x 25–75%, 머리 y 28–42%) 활짝 열린 숙직실 문틀 안에서 튀어나온 노미란, 회색 담요를 어깨에 움켜쥐고. 문 앞(아래쪽 바닥)은 비어 있다. 그녀 뒤 문틀 너머: 창 없는 좁은 숙직실, 낮은 나무 평상 모서리와 회색 담요, 작은 전기난로의 주황 불빛(아래쪽, 작게). 위 24%는 문틀 위 회백 윗벽.
- characters: MIRAN(FULL 의상 B) — 표정 ④ `shocked, glasses askew, eyes wide, mouth open`
- props: VIEW_NAPDOOR 열림 문장 · 난로빛(주황, 빨강으로 번지지 않게)
- lighting: 당직실 LIGHT_L1 + 문틀 너머 주황 난로빛 · 빨강 없음
- dialogue_ref (1): ① 노미란 dialogue "뭐, 뭐예요 이게?!" (꼬리 ↓ 노미란)
- attach: refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 24%(x 5–95%, y 2–24%) — 문틀 위 민무늬 윗벽. / 코트 → 담요: 같은 어깨 실루엣의 몰락. 금테 하프림(뿔테 금지).

### panel_044
- scene_id: S07 / location: LOC_L1_DUTYROOM · VIEW_C
- beat: B30 ⑥ 요구가 담당자에게 닿는다 · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 medium wide — 방 안쪽에서 창구 벽 방향
- composition: 위~가운데 유리 너머(x 40–75%, 머리 y 26–40%) 다시 유리 앞에 선 구정민이 허리를 숙여 노미란에게 정중히 인사한다, 머리에서 물이 떨어진다. 화면 왼쪽(x 5–40%, 머리 y 34–48%) 책상 왼쪽 끝 쪽에 선 노미란(담요), 귀찮은 얼굴로 책상 위 작은 나무 직인 상자에 손을 뻗는다. 화면 오른쪽(x 65–100%) 회전의자에서 몸을 돌려 지켜보는 서하. 책상 위 연회청 빈 서식. 위 22%는 유리 위쪽 너머 복도 천장.
- characters: JEONGMIN(FULL) — 표정 ③ `bowing politely from the waist, water dripping from his hair` · MIRAN(SHORT 의상 B) — 표정 ② `irritated, rolling her eyes, one corner of her mouth twisted` · SEOHA(SHORT)
- props: PROP_SEAL(직인 상자·인주 케이스) · PROP_FORM_DEATH(책상 위, 빈 칸) · 웅덩이(바깥, 보이지 않아도 됨)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 인주·칸막이 테이프(작게)뿐
- dialogue_ref (1): ① 구정민 dialogue "담당자분이시군요. 직인 부탁드립니다." (꼬리 ↓ 유리 너머 구정민)
- attach: refs/JEONGMIN_turnaround.png, refs/MIRAN_outfitB.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 22%(x 25–97%, y 2–22%) — 숙인 구정민 머리 위의 유리 너머 복도 천장. / 구정민은 유리 밖에만 있다(R6, 유리를 넘는 그림 금지).

### panel_045
- scene_id: S07 / location: LOC_L1_DUTYROOM · 책상 클로즈업(세로)
- beat: B30 ⑥ 직인 카운트다운 + 판돈 공개 · 긴장 8 · gap_after 120
- size: large · aspect: **9:16**
- camera: 약간 high-angle close-up — 책상 위 서식과 멈춘 직인
- composition: 가운데(x 30–70%, y 26–50%) 노미란의 RIGHT 손이 쥔 원통형 나무 직인, 끝에 붉은 인주가 묻은 채 서식 위 허공에 멈춰 있다(아이보리 실크 소매는 걷어 올림). 아래(x 10–95%, y 50–100%) 책상 위 연회청 빈 서식이 크게, 오른쪽 아래의 빈 직인 원이 직인 바로 밑. 그녀의 LEFT 손(가는 금색 팔찌시계)이 서식 가장자리를 누른다. 위 20%(y 0–20%)는 초점 밖 어둑한 방.
- characters: MIRAN(손만 — 의상 B 소매, 직인 상태 토큰)
- props: **PROP_FORM_DEATH**(빈 칸·빈 직인 원, 크게) · PROP_SEAL(`its end wet with red ink`)
- lighting: LIGHT_L1 + LIGHT_LAMP(서식에 따뜻한 원) · 빨강 = 직인 끝 인주(와 인주 케이스)뿐
- dialogue_ref (1): ① 선임(목소리) dialogue "찍으면… 그 칸, 찍은 사람이 채운대." (꼬리 → 왼쪽 프레임 가장자리 = 화면 밖 선임)
- attach: refs/MIRAN_outfitB.png, refs/LOC_L1_DESK_plate.png
- fx/note: bubble space: 위 20%(x 4–96%, y 2–20%) — 초점 밖 어둑한 방. / F-55①: 직인 = 물리적 카운트다운. 서식에 글씨 금지, 직인 자국은 아직 없다.

### panel_046
- scene_id: S07 / location: LOC_L1_DUTYROOM · 손 클로즈업
- beat: B31 ⑥ 전환점: 절차로 멈춘다 · 긴장 8 · gap_after 40
- size: small(insert) · aspect: **1:1**
- camera: 눈높이 close-up — 손목과 직인
- composition: 가운데(x 15–90%, y 32–78%) 왼쪽에서 들어온 서하의 손(머스터드 카디건 소매가 반쯤 덮음)이 직인을 쥔 노미란의 RIGHT 손목(걷어 올린 아이보리 실크 소매)을 잡는다. 직인은 서식에서 한 뼘 위. 아래(y 78–100%) 연회청 빈 서식의 일부. 위 28%(y 0–28%)는 초점 밖 어둑한 방.
- characters: SEOHA(손 클로즈업 상태 토큰) · MIRAN(손목만, 의상 B)
- props: PROP_SEAL(끝에 붉은 인주) · PROP_FORM_DEATH(일부, 빈 면)
- lighting: LIGHT_L1 + LIGHT_LAMP · 빨강 = 직인 끝 인주뿐
- dialogue_ref (1): ① 서하 dialogue "서류 보완 요청드리겠습니다." (꼬리 → 왼쪽 가장자리 = 그녀 쪽)
- attach: refs/SEOHA_turnaround.png, refs/MIRAN_outfitB.png
- fx/note: bubble space: 위 28%(x 4–96%, y 2–28%) — 초점 밖 어둑한 방. / 첫 반격. 반지 없음(두 손 모두).

### panel_047
- scene_id: S07 / location: LOC_L1_DUTYROOM · 투샷(서가 쪽 배경)
- beat: B32 ⑥ 절차가 자백을 요구한다 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 눈높이 medium two-shot — 가슴 위
- composition: 화면 왼쪽(x 3–48%, 머리 y 44–58%) 서하, 여전히 노미란의 손목을 잡고 차분히 길게 말한다. 화면 오른쪽(x 50–97%, 머리 y 38–52%) 더 큰 노미란(담요), 손목을 잡힌 채 떨리는 억지 미소. 뒤는 초점 밖 서가와 그 틈의 어둠. 위 36%는 서가 위쪽 어둠.
- characters: SEOHA(SHORT) — 표정 ④(절차 모드, 침착) · MIRAN(FULL 의상 B) — 표정 ⑥ `a trembling forced smile, struggling to stay composed`
- props: PROP_SEAL(노미란 손)
- lighting: LIGHT_L1 + LIGHT_LAMP(서하 쪽 따뜻) · 빨강 = 직인 인주뿐
- dialogue_ref (2): ① 서하 dialogue "보완 요청엔 담당자 서명이나 위임 기록이 필요합니다." (위 왼쪽, 꼬리 ↙ 서하) ② 노미란 dialogue "그, 그럼… 서하 씨가 처리하시면…" (위 오른쪽, 꼬리 ↘ 노미란)
- attach: refs/SEOHA_turnaround.png, refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png
- fx/note: bubble space: 위 36%(x 3–97%, y 2–36%) — 서가 위쪽 어둠, 읽는 순서 왼쪽(서하) → 오른쪽(노미란). 노미란이 더 커서 머리가 높으니 ②는 오른쪽 위 모서리 쪽으로 붙인다. / 법칙② 위임 기록.

### panel_048
- scene_id: S07 / location: LOC_L1_DUTYROOM · 당직석(창구 쪽에서 방 안으로)
- beat: B32 ⑥ 자백 · 긴장 7 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 약간 high-angle medium — 책상 너머 창구 쪽에서
- composition: 가운데(x 15–85%, 머리 y 40–55%) 당직석 책상 위로 몸을 숙인 노미란(담요): **RIGHT 손바닥을 책상 유리 상판에 납작하게 짚고** 검은 일지에 쓴다 — 펜은 그녀의 LEFT 손(금색 팔찌시계), 손과 펜이 쓰는 자리를 가린다. 아래(y 62–95%) 펼친 일지의 빈 줄. 오른쪽 가장자리(x 85–100%) 칸막이가 초점 밖. 뒤는 서가의 어둠. 위 38%는 서가 꼭대기 어둠과 천장.
- characters: MIRAN(FULL 의상 B + 자백 상태 토큰 원문) — 표정 ⑤ `humiliated, eyes averted, biting her lower lip` (서하는 화면 밖에서 지켜본다)
- props: **PROP_DUTYLOG**(펼침 `open to blank ruled lines` — 글씨가 보이지 않는 각도, 크게) · 펜(무지)
- lighting: LIGHT_L1 + LIGHT_LAMP(일지 위 따뜻한 원) · 빨강 = 칸막이 테이프(초점 밖, 작게)뿐
- dialogue_ref (2): ① 노미란(쓰며 소리 내어) dialogue "…야간 당직 업무를… 신규 강서하에게…" ② 노미란 dialogue "…무단으로…" (둘 다 꼬리 ↓ 노미란, 쓰는 손의 리듬대로)
- attach: refs/MIRAN_outfitB.png, refs/MIRAN_expressions.png, refs/LOC_L1_DESK_plate.png
- fx/note: bubble space: 위 38%(x 3–97%, y 2–38%) — 서가 꼭대기 어둠·천장, ①은 왼쪽 위, ②는 오른쪽 조금 아래. / F-22①·F-23①(의미 봉인, EP19 리플레이 원본): 손 배치는 character-sheets 상태 토큰 그대로 — RIGHT 손바닥이 상판을 짚으니 펜은 LEFT 손이 된다. 강조하지 말고 그대로 그린다. 수칙 종이를 보거나 만지지 않는다.

### panel_049
- scene_id: S07 / location: LOC_L1_DUTYROOM · VIEW_C 축(창구 벽을 등진 서하)
- beat: B33 ⑥ **인용 대사 · 사이다 정점** · 긴장 7 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 눈높이 frontal medium — 방 안쪽에서 창구 벽 방향
- composition: 가운데 왼쪽(x 15–60%, 머리 y 36–50%) 통유리를 등지고 선 서하가 화면 정면(= 노미란 자리)을 똑바로 본다, 스탠드 빛이 얼굴 한쪽에. 그녀 뒤 유리 너머 오른쪽(x 66–84%, y 40–60%) 작게, 흰 보완 요청서(붉은 원 하나)를 가슴에 안은 구정민이 고개를 숙이고 복도 끝 어둠으로 돌아간다. 칸막이는 프레임 밖. 위 35%는 유리 위쪽 너머 어둑한 복도 천장.
- characters: SEOHA(FULL) — 표정 ④ · JEONGMIN(돌아감 상태 토큰, 작게)
- props: **PROP_NOTICE**(`a plain white sheet with one red circular seal mark and no writing`)
- lighting: LIGHT_L1 + LIGHT_LAMP(얼굴에 따뜻한 빛) · 빨강 = 보완 요청서의 붉은 원뿐
- dialogue_ref (2): ① 서하 dialogue "떠넘기신 건 돌려드리는 겁니다." ② 서하 dialogue "원래 주인한테." (한 박자 뒤, 짧게 — 둘 다 꼬리 ↓ 서하)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/JEONGMIN_turnaround.png
- fx/note: bubble space: 위 35%(x 3–62%, y 2–35%) — 유리 위쪽 너머 복도 천장(①은 w 60% 이상 필요해 위 왼쪽에 넓게, ②는 그 아래 짧게). 작은 구정민(x 66–84%, y 40–60%)은 덮지 않는다. / E12 원본, F-12(다시 올 빚).

--- SCENE BREAK --- (S07 → S08 · 장소 동일 L1 · 블록 ⑦ 반전 2, 유머·떨림 없음)

### panel_050
- scene_id: S08 / location: LOC_L1_DUTYROOM · VIEW_C
- beat: B34 ⑦ 밸브 + 의문 + 선임 퇴장 · 긴장 6 · gap_after 120
- size: medium · aspect: **3:4**
- camera: 서 있는 눈높이 wide — 방 안쪽(서가 쪽)에서 창구 벽 방향
- composition: 왼쪽 앞(x 0–28%, y 55–100%) **빈 회색 접이식 의자**(거꾸로 놓임). 가운데(x 30–65%, y 45–90%) 당직석에 다시 앉아 숨을 내쉬는 서하의 뒷모습 3/4, 스탠드의 노란 빛 원 안에 펼친 수첩(오른쪽 페이지 오른쪽 아래의 새 커피 링, 작게), 빈 종이컵은 책상 모서리로 밀려 있다. 화면 오른쪽(x 68–96%, 머리 y 38–50%) 흰 전기 포트를 들고 일어나 출입문으로 가는 선임, 반쯤 돌아본 얼굴. 왼쪽 벽 닫힌 숙직실 문(문틈 불빛 없음). 위 36%는 천장·윗벽·유리 위쪽 너머 복도.
- characters: SEONIM(FULL + 퇴장 상태 토큰) — 표정 ①(무덤덤, 농담 아님) · SEOHA(SHORT, 뒷모습 3/4) — 대답하지 못하는 정지
- props: PROP_FOLDING_CHAIR(빈) · PROP_KETTLE · PROP_NOTEBOOK_OPEN · PROP_RING_NEW · PROP_PAPER_CUP(빈, 모서리)
- lighting: LIGHT_REVEAL(떨림 없음, 스탠드 원) · 빨강 = 칸막이 테이프(작게)뿐
- dialogue_ref (2): ① 선임 dialogue "첫날인데 수칙 순서를 어떻게 알아?" ② 선임 dialogue "물 받아 올게. 앉아 있어." (둘 다 꼬리 ↘ 선임)
- attach: refs/SEONIM_turnaround.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DUTYROOM_plate.png
- fx/note: bubble space: 위 36%(x 3–97%, y 2–36%) — 천장·윗벽·유리 위쪽 너머 복도(선임 머리 y 38% 아래). / F-14③ · **F-07②**(빈 접이식 의자가 근경에 또렷이) · 선임 부재(⑧ 미스디렉션 준비).

### panel_051
- scene_id: S08 / location: LOC_L1_DUTYROOM · 칸막이(서하 오른쪽 어깨 너머)
- beat: B35 ⑦ 시선이 바랜 스티커로 · 긴장 7 · gap_after 120
- size: large · aspect: **9:16**
- camera: 앉은 눈높이 over-the-shoulder medium — 그녀의 왼쪽 눈높이 칸막이를 향해
- composition: 위~가운데(x 12–82%, y 8–62%) 칸막이에 붙은 수칙 종이, 약간 비스듬히, 또렷하게: 빈 모눈, 흰 4번 조각과 빨간 테이프 두 줄, **오른쪽 위 귀퉁이의 바랜 스티커가 컷의 주인공**(x 60–76%, y 12–22%, 초점이 가장 선명). 아래 오른쪽(x 52–100%, y 62–100%) 초점 밖 서하의 뒷머리·오른뺨 가장자리, 시선은 종이로. 종이 뒤는 차분한 푸른 그림자.
- characters: SEOHA(뒷모습 상태 토큰, 초점 밖)
- props: **PROP_RULESHEET**(글씨 없음) · PROP_STICKER_FADED · PROP_RING_FADED
- lighting: LIGHT_REVEAL(스탠드 원이 종이와 그녀만) · 빨강 = 테이프 두 줄뿐
- dialogue_ref: 없음(무대사)
- attach: refs/PROP_PAGES_pair.png, refs/PROP_STICKERS_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: silent. / F-04③ 시작. 스티커 그림 = PROP_STICKERS_pair 오른쪽(바랜 것), 큰 귀는 화면 오른쪽.

### panel_052
- scene_id: S08 / location: LOC_L1_DUTYROOM · 수첩 클로즈업
- beat: B36 ⑦ 새 스티커 · 떨리는 손 · 공개 1컷 전 · 긴장 8 · gap_after **480**
- size: large · aspect: **9:16**
- camera: close-up, 눈높이보다 약간 위에서 내려다봄
- composition: [COMP-STICKER] 서하의 LEFT 손이 네이비 리넨 수첩의 오른쪽 가장자리를 잡고 세로로 든다. 표지 오른쪽 위 귀퉁이의 새 달냥이 스티커(지름 약 폭의 28%)가 화면 가운데(x 40–70%, y 44–60%), 그 위를 LEFT 엄지가 쓰다듬는다. 머스터드 카디건 소매가 손등을 반쯤 덮는다. 수첩 표지가 가운데~아래(y 38–100%)를 채우고 흰 실 제본이 왼쪽에. 위 30%(y 0–30%)는 초점 밖 배경.
- characters: SEOHA(손 클로즈업 상태 토큰 — LEFT 손, 떨린다)
- props: PROP_NOTEBOOK(표지, 글씨·로고 없음) · **PROP_STICKER_NEW**(고양이 자신의 LEFT 귀 = 화면 오른쪽 귀가 크다, 황금빛 주황 — 빨강 아님)
- lighting: LIGHT_REVEAL — 배경은 스탠드의 따뜻한 빛이 번진 초점 밖 당직실과 차분한 푸른 그림자, 스티커는 화면에서 가장 채도 높은 색 (**P5와 다른 유일한 줄**: 장소가 L1)
- dialogue_ref (1): ① 지호(기억) memory "떼지 마. 세상에 하나뿐이야." (흐린 파란 테, 꼬리 없음 또는 위쪽)
- repeat: COMP-STICKER 반복 · 원본 **panel_005** 첨부 · 바뀌는 것: 장소 L2 → L1(배경: 어두운 콘크리트 → 스탠드의 따뜻한 흐림), **손이 떨린다**(엄지가 스티커 위에서 멈칫, 표지 가장자리가 살짝 흔들려 흐림 — 만화 기호 없이)
- attach: _workspace/05_panels/ep01/panel_005.png, refs/PROP_STICKERS_pair.png
- fx/note: bubble space: 위 30%(x 4–96%, y 2–30%) — 초점 밖 배경. 스티커(y 44–60%)는 절대 덮지 않는다. / E2 회수(P5 ②와 KM 동일), F-47②. 뒤 480px = 공개 1컷 전 정지.

### panel_053
- scene_id: S08 / location: LOC_L1_DUTYROOM · 익스트림 클로즈업 2분할
- beat: B37 ⑦ **반전 2 시각 공개(정점)** ⟨반전⟩ · 긴장 **9** · gap_after 120
- size: full-bleed · aspect: **9:16**
- camera: extreme close-up 두 개를 위아래로 — 같은 크기·같은 각도(정면)
- composition: 한 장 안에 두 칸, 가운데 가는 검은 가로 띠(y 47–53%)로 나눈다. 위 칸: 네이비 리넨 위의 **새 스티커**, 선명·광택. 아래 칸: 누렇게 바랜 모눈 종이 위의 **바랜 스티커**, 연크림·볏짚·잿빛 민트, 누런 테두리, 들뜬 가장자리. 두 스티커의 중심 = x 58%, 지름 = 폭의 약 55%, 위 중심 y 24% / 아래 중심 y 76%. **같은 그림, 같은 큰 귀**(고양이 자신의 LEFT 귀 = 화면 오른쪽). 스티커 왼쪽(x 0–30%)은 두 칸 모두 민무늬 리넨/빈 모눈 여백.
- characters: 없음
- props: PROP_STICKER_NEW · PROP_STICKER_FADED · PROP_NOTEBOOK(리넨 표지) · PROP_RULESHEET(모눈 일부, 빈 면)
- lighting: LIGHT_REVEAL — 두 칸 같은 따뜻한 스탠드 빛 · 빨강 없음
- dialogue_ref (1): ① 서하(작게) dialogue "세상에 하나뿐인데… 두 개야." (아주 작은 말풍선, 경계 띠 위)
- repeat: — (P5·P19/P51에 그려진 두 스티커를 첨부해 같은 그림을 맞춘다)
- attach: refs/PROP_STICKERS_pair.png, _workspace/05_panels/ep01/panel_005.png, _workspace/05_panels/ep01/panel_019.png
- fx/note: bubble space: 가운데 경계 띠 왼쪽(x 4–40%, y 44–56%) — 검은 띠와 그 위아래 민무늬 여백, 어느 스티커에도 걸리지 않게. / style-bible §4-2 예외 컷(칸 나눔 허용) — Avoid 줄에서 `panel borders`만 뺀다. **대안:** Flow가 둘을 섞거나 그림이 다르면 1:1 한 컷으로 — 그녀가 수첩 표지를 칸막이의 수칙 종이 옆에 실제로 나란히 댄다(같은 크기·같은 각도, 같은 큰 귀). 큰 귀 쪽이 다르면 REGEN(반전 2의 생명).

### panel_054
- scene_id: S08 / location: LOC_L1_DUTYROOM · 칸막이 클로즈업
- beat: B38 ⑦ 사물 증거 사슬 ⟨반전⟩ · 긴장 8 · gap_after 40
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 close-up — 칸막이 정면
- composition: 가운데(y 24–86%) 두 종이가 나란히: 왼쪽(x 4–50%) 칸막이의 수칙 종이(바랜 크림, 뜯긴 들쭉날쭉한 왼쪽 가장자리, 흰 4번 조각·빨간 테이프, 오른쪽 아래 바랜 커피 반원), 오른쪽(x 50–96%) 서하의 떨리는 손이 그 옆에 댄 펼친 수첩 페이지(새 크림 모눈, 제본 쪽 흰 실, 오른쪽 아래 새 커피 링 — 같은 귀퉁이). 같은 모눈선·같은 칸 크기. 아래 왼쪽(x 4–35%, y 86–100%) 책상 위 테이프 디스펜서에서 한 뼘 당겨 나온 누런 투명 테이프(종이 귀퉁이의 테이프와 같은 것). 위 22%(y 0–22%)는 칸막이 너머 초점 밖 어둠.
- characters: SEOHA(손 클로즈업 상태 토큰 — 손이 떨린다)
- props: **PROP_RULESHEET** · **PROP_NOTEBOOK_OPEN** · PROP_RING_NEW · PROP_RING_FADED · PROP_DISPENSER(`a hand-length strip of the yellowed clear tape pulled out from the dispenser`) — 전부 글씨 없음, 크게
- lighting: LIGHT_REVEAL · 빨강 = 테이프 두 줄뿐 · 커피 링은 갈색
- dialogue_ref (1): ① 서하 thought "(이 책상만… 안 돌아가.)" (구름형, 꼬리 없음)
- attach: refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png, refs/LOC_L1_DESK_plate.png
- fx/note: bubble space: 위 22%(x 4–96%, y 2–22%) — 칸막이 너머 초점 밖 어둠. 종이 윗선(y 24%) 위에서 끝낸다. / F-49③ · F-16③. 뜯긴 제본 가장자리와 같은 귀퉁이의 두 링이 분명해야 한다(script-editor 주의).

### panel_055
- scene_id: S08 / location: LOC_L1_DUTYROOM · 서하 클로즈업 + 기억 비네트
- beat: B39 ⑦ **반전 2 대사 공개(정점)** ⟨반전⟩ · 긴장 **9** · gap_after 120
- size: full-bleed(large) · aspect: **9:16**
- camera: 눈높이 close-up — 스탠드 빛 속 그녀의 얼굴(아래 절반)
- composition: 아래 절반(x 8–92%, y 50–100%) 스탠드의 따뜻한 원 속 서하의 얼굴 클로즈업. **위 왼쪽 기억 비네트**(x 4–64%, y 3–33%): 회백 테두리 + 얇은 그림자, 채도 약 40% 낮춘 바랜 그림 — panel_021과 같은 각도의 선임: 접이식 의자에 거꾸로 앉아 두 손에 종이컵, 컵 속을 내려다봄, 비네트의 위 1/3은 그 컷처럼 서가 꼭대기 어둠. 비네트 오른쪽(x 64–97%, y 3–33%)과 비네트 아래 띠(x 4–97%, y 34–49%)는 차분한 푸른 어둠.
- characters: SEOHA(FULL) — 깨닫기 직전의 정지 `eyes wide and unfocused, lips slightly parted, color drained from her face, perfectly still` (손으로 입을 가리는 ⑥은 P56) · SEONIM(비네트 안, 바랜 색)
- props: 비네트 안 PROP_PAPER_CUP · PROP_FOLDING_CHAIR
- lighting: LIGHT_REVEAL(얼굴만 따뜻, 나머지 푸른 그림자) · 비네트는 바랜 차가운 색 · 빨강 없음
- dialogue_ref (2): ① 선임(기억) memory "그 수칙, 이 일 제일 오래 한 사람이 쓴 거래." (비네트 위 1/3에서 오른쪽 바깥 어둠까지, 흐린 파란 테) ② 서하 dialogue "이 일 제일 오래 한 사람… 나였어." (비네트 아래 띠, 천천히 — 꼬리 ↓ 그녀)
- repeat: 기억 비네트 — 원본 **panel_021** 첨부(§D)
- attach: _workspace/05_panels/ep01/panel_021.png, refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png
- fx/note: bubble space: ① 비네트 위 1/3 + 그 오른쪽 어둠(x 4–97%, y 3–16%) — 비네트 속 서가 꼭대기 어둠과 그 옆의 푸른 어둠(① 말풍선은 w 60% 이상 필요) · ② 비네트 아래 띠(x 15–97%, y 35–49%) — 차분한 푸른 어둠, 그녀 이마(y 50%) 위에서 끝낸다. / **인셋 처리:** Flow가 한 장으로 그리는 액자형 기억 비네트(§D). panel_021을 첨부하고 "the small framed memory picture in the upper-left shows the same moment as the attached earlier panel, faded". 안 되면 위쪽을 조용한 배경으로 비운 버전으로 받고 합성 여부는 리더가 정한다. Avoid 줄에서 `panel borders`만 뺀다. / E1 회수(인셋 = P21과 KM 동일).

### panel_056
- scene_id: S08 / location: LOC_L1_DUTYROOM · 익스트림 클로즈업
- beat: B40 ⑦ 경악 침묵 · 긴장 9 · gap_after **720**
- size: small · aspect: **1:1**
- camera: 눈높이 extreme close-up — 눈과 입을 가린 손
- composition: 위 절반(y 12–50%)에 흔들리는 두 눈(RIGHT 눈 밑 점 = 화면 왼쪽), 아래 절반(y 50–100%) 입을 누르는 손(카디건 소매가 반쯤 덮음). 프레임을 꽉 채운다.
- characters: SEOHA(FULL) — 표정 ⑥ `trembling pupils, one hand pressed over her mouth, chilled realization`
- props: 없음
- lighting: LIGHT_REVEAL(얼굴에 스탠드의 따뜻한 빛, 가장자리는 푸른 그림자) · 빨강 없음
- dialogue_ref: 없음(무대사)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: silent. / 뒤 720px = 반전 침묵(G5). 스크린톤·만화 기호 금지.

### panel_057
- scene_id: S08 / location: LOC_L1_DUTYROOM · 칸막이 클로즈업
- beat: B41 ⑦ 동기 암시 + 질문 이월 · 긴장 9 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 close-up — 칸막이 정면에서 약간 오른쪽
- composition: 가운데 왼쪽(x 6–62%, y 24–96%) 수칙 종이: 빈 모눈 7칸 자리, 서하의 RIGHT 검지 끝이 위에서 1번·2번 자리를 차례로 짚고 내려와 흰 4번 조각 위에서 멈춘다(지금 멈춘 자리 = 4번 조각). 오른쪽(x 62–96%, y 30–92%) 그녀의 LEFT 손이 종이 옆에 댄 수첩 페이지 — 나란히 놓고 보면 4번 조각만 다른 종이(새하얀 사무용지 vs 크림 모눈). 위 22%(y 0–22%)는 칸막이 너머 초점 밖 어둠.
- characters: SEOHA(손 클로즈업 상태 토큰)
- props: **PROP_RULESHEET**(빈 모눈) · **PROP_NOTEBOOK_OPEN** · PROP_TAPE_LIFT는 선택(그리지 않아도 된다 — 첫 강조는 P58)
- lighting: LIGHT_REVEAL · 빨강 = 테이프 두 줄뿐
- dialogue_ref (2): ① 서하 thought "(살리려고… 남긴 거야. 나한테.)" (구름형, 위 왼쪽) ② 서하(속삭임) dialogue "그러면… 4번은?" (아주 작은 말풍선, 위 오른쪽)
- attach: refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: 위 22%(x 4–96%, y 2–22%) — 칸막이 너머 초점 밖 어둠, ①은 왼쪽 넓게, ②는 오른쪽 작게. 종이 오른쪽 위의 바랜 스티커(y 26–34%)는 덮지 않는다. / 동기(공정성④), 4번은 질문으로만.

--- SCENE BREAK --- (S08 → S09 · 장소 동일 L1 · 블록 ⑧ 클리프, 감속 4단 · 유리 반사 금지)

### panel_058
- scene_id: S09 / location: LOC_L1_DUTYROOM · 4번 조각 익스트림 클로즈업
- beat: B42 ⑧ 마지막 정적 · 긴장 8 · gap_after 120
- size: large(세로로 긴 좁은 컷) · aspect: **9:16**
- camera: extreme close-up — 4번 조각의 오른쪽 끝을 정면에서
- composition: 새하얀 4번 조각이 가로 띠로 화면을 가로지른다(y 45–58%, 양옆 가장자리에서 잘림): 자로 자른 곧은 가장자리, 위·아래 가장자리를 따라 광택 있는 빨간 비닐테이프 두 줄 — 화면의 유일한 빨강. **아래 줄 테이프의 오른쪽 끝이 살짝 들려 말려 있다**(x 70–85%, 가는 그림자). 위아래(y 0–45%, 58–100%)는 누렇게 바랜 빈 모눈 종이의 넓은 여백.
- characters: 없음
- props: **PROP_RULE4_PATCH** + **PROP_TAPE_LIFT**(F-51①) · PROP_RULESHEET(모눈 여백, 글씨 없음)
- lighting: LIGHT_REVEAL(고요한 따뜻한 빛) · 빨강 = 테이프 두 줄뿐
- dialogue_ref: 없음(무대사)
- attach: refs/PROP_PAGES_pair.png
- fx/note: bubble space: silent. / 빈 모눈 여백에 가짜 글씨·번호가 생기면 REGEN.

### panel_059
- scene_id: S09 / location: LOC_L1_DUTYROOM · 눈 띠
- beat: B43 ⑧ 소리 기척 · 긴장 9 · gap_after 240
- size: insert(band) · aspect: **16:9**
- camera: 눈높이 extreme close-up — 눈 띠
- composition: 화면 왼쪽~가운데 2/3(x 4–66%, y 15–85%) 스탠드 빛 속 그녀의 두 눈과 콧등, 얼굴 3/4로 화면 왼쪽(수칙 종이 쪽)을 향하고, 눈동자만 뒤쪽을 의식해 굳는다. 화면 오른쪽 1/3(x 68–98%)은 그녀 머리 뒤 초점 밖 어두운 방.
- characters: SEOHA(FULL) — 굳은 눈 `eyes wide and frozen, listening, not turning yet` (점이 보이면 RIGHT 눈 밑)
- props: 없음
- lighting: LIGHT_REVEAL(얼굴에 따뜻한 빛, 뒤는 푸른 어둠) · 빨강 없음
- dialogue_ref (sfx): sfx "찌이익—" (등 뒤에서 테이프를 롤에서 뜯는 소리 — 화면 뒤쪽 가장자리)
- attach: refs/SEOHA_expressions.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: sfx — 오른쪽 1/3(x 68–98%, y 15–85%), 그녀 머리 뒤 어둠(= 화면 뒤쪽 가장자리). / Flow에 16:9가 없으면 1:1로(style-bible §4-1), 그때도 sfx는 오른쪽 1/3.

### panel_060
- scene_id: S09 / location: LOC_L1_DUTYROOM · 칸막이(서하 왼쪽 어깨 곁)
- beat: B44 ⑧ 그림자 · 긴장 9 · gap_after 240
- size: large · aspect: **9:16**
- camera: 앉은 눈높이 medium — 칸막이의 수칙 종이 쪽
- composition: 가운데(x 15–85%, y 22–68%) 칸막이의 수칙 종이가 스탠드의 따뜻한 원 안에 있다. 위 오른쪽에서 **두 번째 그림자**가 종이 위로 겹쳐 들어와 따뜻한 원을 반쯤 깬다 — 부드럽고 형체 없는 어둠(머리·손·얼굴 윤곽 없음). 아래 왼쪽 가장자리(x 0–30%, y 72–100%) 서하의 어깨 가장자리(머스터드). 유리는 프레임 밖.
- characters: SEOHA(어깨 가장자리만) · HAND-CLIFF(P60 그림자만 상태 토큰 — 형체 없음)
- props: PROP_RULESHEET(빈 모눈)
- lighting: **LIGHT_CLIFF** · 빨강 = 테이프 두 줄뿐
- dialogue_ref: 없음(무대사)
- attach: refs/PROP_PAGES_pair.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: silent. / 그림자에 형체가 생기면 REGEN. 유리에 사람이 비치면 REGEN.

### panel_061
- scene_id: S09 / location: LOC_L1_DUTYROOM · 어깨 너머(뒤 위에서)
- beat: B45 ⑧ 손 공개(일부) · 긴장 **10** · gap_after 480
- size: large · aspect: **9:16**
- camera: 약간 high-angle over-the-shoulder — 앉은 서하의 뒤 위에서 책상과 칸막이를 내려다봄
- composition: 가운데 왼쪽~아래(x 10–60%, y 50–100%) 서하의 뒷머리(낮은 포니테일·네이비 머리끈)와 어깨. 위 오른쪽 가장자리에서 **슬림한 창백한 RIGHT 손**이 들어와(팔은 아래팔에서 프레임에 잘림) 그녀의 RIGHT 어깨 위로 내려온다(x 50–92%, y 8–50%): 검지의 가는 은반지, 골이 보이는 차콜 니트 소맷부리 + 흰 셔츠 커프스, 손바닥만 한 광택 빨간 비닐테이프 롤. 그 너머 책상과 왼쪽 칸막이의 수칙 종이(초점 밖). 유리는 프레임 밖.
- characters: HAND-CLIFF(FULL + P61 들어옴 상태 토큰) · SEOHA(뒷모습 상태 토큰)
- props: **PROP_TAPE_ROLL_RED** · PROP_RULESHEET_SMALL(초점 밖)
- lighting: LIGHT_CLIFF · 빨강 = 테이프 롤과 수칙 종이 테이프뿐
- dialogue_ref: 없음(무대사)
- attach: refs/HANDCLIFF_ref.png, refs/SEOHA_turnaround.png
- fx/note: bubble space: silent. / F-17①·F-18①: 소매가 슬레이트블루가 아니다(선임 아님) — 차콜 니트 + 흰 커프스가 또렷해야 한다. 손가락 다섯, RIGHT 손, 반지는 검지 하나. 얼굴·몸·머리카락 금지.

### panel_062
- scene_id: S09 / location: LOC_L1_DUTYROOM · 옆얼굴 클로즈(VIEW_SIDE 축)
- beat: B46 ⑧ 대사 분절 ① · 긴장 10 · gap_after 240
- size: medium · aspect: **3:4**
- camera: 앉은 눈높이 medium close-up — 그녀의 오른쪽 옆에서
- composition: 가운데(x 20–80%, y 30–80%) 굳은 서하의 RIGHT 옆얼굴(화면 오른쪽을 향함, RIGHT 눈 밑 점이 보임). 위 왼쪽 가장자리에서 내려온 손이 그녀의 RIGHT 어깨 곁 근경에 머문다(x 0–35%, y 22–62%, 아래팔에서 잘림, 은반지·차콜 니트 소맷부리). 그녀 얼굴 앞(화면 오른쪽)은 초점 밖 어둠에서 프레임이 끝난다 — 유리는 프레임 밖. 위 오른쪽(x 40–97%, y 2–22%)은 초점 밖 어두운 방.
- characters: SEOHA(FULL) — 표정 ② `frozen in fear, eyes wide, lips pressed shut, face rigid` · HAND-CLIFF(SHORT + P62 곁에 상태 토큰)
- props: PROP_TAPE_ROLL_RED(손 안, 일부)
- lighting: LIGHT_CLIFF · 빨강 = 테이프 롤뿐
- dialogue_ref (1): ① 목소리(뒤) dialogue "그 수칙," (꼬리 ↑ 위쪽 프레임 밖)
- attach: refs/SEOHA_turnaround.png, refs/SEOHA_expressions.png, refs/HANDCLIFF_ref.png
- fx/note: bubble space: 위 오른쪽(x 40–97%, y 2–22%) — 초점 밖 어두운 방, 손이 들어오는 위 왼쪽은 피한다. / E7 회수(P21 첫 구절과 KM 동일, 다른 목소리).

### panel_063
- scene_id: S09 / location: LOC_L1_DUTYROOM · 4번 조각 클로즈업
- beat: B46 ⑧ 대사 분절 ② ⟨이중의미⟩ · 긴장 10 · gap_after **720**
- size: small · aspect: **1:1**
- camera: 눈높이 close-up — 칸막이의 4번 조각
- composition: 아래 가운데(y 52–72%) 새하얀 4번 조각과 빨간 테이프 두 줄이 화면을 가로지르고, 아래 줄 테이프 오른쪽 끝이 살짝 들려 있다. 위 오른쪽에서 들어온 손(아래팔에서 잘림)의 반지 낀 검지가 조각 바로 위에서 멈춘다 — 닿지 않는다(x 45–75%, y 20–50%), 손바닥에 빨간 롤 일부. 위 왼쪽 1/4(x 3–45%, y 3–30%)은 초점 밖 빈 모눈 종이 윗부분.
- characters: HAND-CLIFF(FULL + P63 멈춘 검지 상태 토큰)
- props: **PROP_RULE4_PATCH** + **PROP_TAPE_LIFT** · PROP_TAPE_ROLL_RED(일부) · PROP_RULESHEET(빈 모눈)
- lighting: LIGHT_CLIFF · 빨강 = 테이프 두 줄 + 롤뿐
- dialogue_ref (1): ① 목소리(뒤) dialogue "아직 안 바꿨네?" (꼬리 ↑ 위쪽 프레임 밖)
- attach: refs/HANDCLIFF_ref.png, refs/PROP_PAGES_pair.png
- fx/note: bubble space: 위 왼쪽 1/4(x 3–45%, y 3–30%) — 초점 밖 빈 모눈 여백(글씨 없음). 검지와 조각 사이 틈은 덮지 않는다. / F-24①. 뒤 720px.

### panel_064
- scene_id: S09 / location: LOC_L1_DUTYROOM · VIEW_SIDE 축(세로, 유리는 프레임 밖)
- beat: B47 ⑧ **최종 컷: 정체 공개 1컷 전** · 긴장 **10** · gap_after **1200**
- size: full-bleed · aspect: **9:16**
- camera: 앉은 눈높이 medium — 그녀의 오른쪽 뒤편(손 주인이 선 자리 근처)에서
- composition: 위 절반(x 15–85%, y 8–50%) 고개를 이쪽(그녀의 RIGHT 어깨 너머)으로 돌리기 시작한 서하, 크게 뜬 눈, 얼굴 3/4(RIGHT 눈 밑 점). 아래(y 54–86%) 책상 위 그녀의 닫힌 수첩(표지 오른쪽 위 새 스티커가 보임) 옆에 놓인 빨간 비닐테이프 롤. 손은 오른쪽 가장자리로 빠져나가는 중(x 86–100%, y 56–72%, 손가락 끝만). 손 주인의 얼굴·몸은 프레임 밖. 유리는 프레임 밖. 아래 8%(y 92–100%)는 책상 앞 가장자리의 어두운 그림자.
- characters: SEOHA(FULL) — 크게 뜬 눈 `eyes wide, beginning to turn her head toward the viewer` · HAND-CLIFF(P64 빠져나감 상태 토큰)
- props: PROP_NOTEBOOK(닫힘) + **PROP_STICKER_NEW** · **PROP_TAPE_ROLL_RED**
- lighting: LIGHT_CLIFF(깨진 스탠드 원) · 빨강 = 테이프 롤뿐 — 화면에서 가장 강한 색
- dialogue_ref (caption): 캡션 narration "— 2화에 계속 —" (패널 맨 아래)
- attach: refs/SEOHA_turnaround.png, refs/HANDCLIFF_ref.png, refs/PROP_STICKERS_pair.png
- fx/note: bubble space: 캡션 — 아래 8% 띠(x 0–100%, y 92–100%), 어두운 책상 그림자(style-bible §8 캡션 문장). / 가리는 것 = 얼굴 하나(C1). 유리 반사 금지(수칙 3 몫). 뒤 1200px = 회차 끝.

---

## F. 첨부 사용 요약 (사용자가 Flow에서 붙일 것)

| 카드 | 패널 |
|---|---|
| SEOHA_turnaround | 1·3·4·5·6·7·8·9·10·11·12·13·15·17·20·21·22·23·25·28·29·30·31·34·36·37·38·40·41·44·46·47·49·50·51·54·55·56·57·59·60·61·62·64 |
| SEOHA_expressions | 6·7·15·20·25·28·29·30·31·32·33·35·41·49·55·56·59·62 |
| MIRAN_turnaround | 8·9·10·32·33 |
| MIRAN_outfitB | 43·44·45·46·47·48 |
| MIRAN_expressions | 43·47·48 |
| SEONIM_turnaround | 2·11·12·13·17·18·20·21·22·34·39·50 |
| SEONIM_expressions | 2·18·21·35·39 |
| JEONGMIN_turnaround | 1·3·14·15·16·17·22·23·24·38·40·41·44·49 |
| JEONGMIN_expressions | 24·36 |
| HANDCLIFF_ref | 61·62·63·64 |
| PROP_STICKERS_pair | 5·19·51·52·53·64 |
| PROP_PAGES_pair | 19·23·34·51·54·57·58·60·63 |
| LOC_L1_DUTYROOM_plate | 1·3·8·10·11·12·14·16·27·42·43·50 |
| LOC_L1_DESK_plate | 9·27·45·48·54 |
| LOC_L2_CORRIDOR_plate | 7·29·31 |
| LOC_L2_STAIRWELL_plate | 4·6 |
| 원본 패널 PNG | P13←012 · P24←009 · P28←007 · P32←008 · P33←009 · P35←012 · P36←013 · P37←018 · P38←001 · P39←002 · P40←003 · P52←005 · P53←005·019 · P55←021 |

- P26은 첨부 없음. 모든 패널 3장 이내.

## G. 자가 점검

- [x] 패널 64 = 대본 P01–P64, panel_001–panel_064 연속 3자리, 순서 동일
- [x] 모든 패널에 scene_id / location(LOC_* + VIEW), size · aspect, camera, composition, characters + 표정, props, lighting/빨강, dialogue_ref, attach, fx/note
- [x] 같은 scene_id = 같은 장소(장소가 바뀌는 S02·S05·S06은 a/b로 나눔), 장소 전환마다 SCENE BREAK
- [x] 대사·효과음·캡션이 있는 55컷 모두 `bubble space:` 기재, 무대사 9컷(P3·18·26·27·51·56·58·60·61)은 `silent`(P3·P18은 반복 짝을 위해 빈자리를 남김). 말풍선 수 = 대본(패널당 대사 ≤2 + 효과음)
- [x] 글이 적힐 물건은 전부 빈 면, 주인공 컷(P9·15·19·33·41·45·48·51·54·57·58)은 크게. 휴대폰 화면이 보이는 컷(P29)은 빈 검은 화면
- [x] COMP 10쌍: 짝의 camera·composition·bubble space가 글자까지 같고, 원본 표시 + 원본 PNG 첨부, 바뀌는 것은 `repeat:` 줄에만
- [x] 인셋 P24·P55 = Flow가 한 장에 그리는 기억 비네트(원본 PNG 첨부), 대안 경로 명시
- [x] 반전 컷(P28·P53·P55) 단독 대형 + 앞뒤 큰 gap(P27 720 · P52 480 · P56 720), 클리프 감속(P58–64)
- [x] 빨강 세 범주 외 0, 좌우 표식(점 RIGHT 눈 밑 · 흉터 LEFT 눈썹 · 시계 LEFT 손목 · 손 RIGHT/검지 반지) 명시
- [x] 첨부 패널당 3장 이내

## H. 하류·상류 전달 (팀 메시징 대체)

| 대상 | 내용 |
|---|---|
| **letterer** | `bubble space:`를 `art_space`(한국어 그대로 가능)로, 말풍선 위치를 `place`로 옮긴다. `gap_after`는 각 패널 beat 줄의 값(= 대본·tension-curve §9-2와 같다). 긴 말풍선(w 60% 이상): P9 ① · P12 ① · P21 · P35 · P49 ① · P55 ① — 해당 컷의 빈자리를 그 폭으로 잡아 두었다. 기억 말풍선 P24 ②·P55 ①은 비네트 안 위쪽(§D). 화면 밖 목소리 꼬리: P5(위 오른쪽), P9 ①(오른쪽), P19·P45(왼쪽 가장자리), P33 ①(오른쪽), P46(왼쪽), P62·P63(위쪽 밖). P32 ②는 ① 끝에 겹치게, P53은 경계 띠 위 아주 작게. P64 캡션은 아래 8% 띠 |
| **prompt-smith** | style-bible §5-1 조립 순서대로 옮긴다. VIEW_SIDE 영문은 §A-1. 반복 컷은 원본 프롬프트를 그대로 붙이고 `repeat:`의 "바뀌는 것"만 고친다(원본 PNG를 attach 첫 자리에). P24·P53·P55는 Avoid 줄에서 `panel borders`만 뺀다. 빨강이 있는 컷은 "the only red in the image is …"를 한 번 적는다(각 패널 lighting 줄). 첨부는 각 패널 `attach:` 그대로(3장 이내) |
| **art-director** | ① **VIEW_SIDE**(§A-1)를 style-bible §6-3에 VIEW로 추가해 달라(§6-2 방향과 일치 확인 부탁). ② P14 VIEW를 §6-1의 VIEW_A에서 "VIEW_B 축(방 안에서 유리 너머)"으로 바꿨다 — 역광 실루엣 상태 토큰이 "behind the glass"라 방 안 시점에서만 성립. VIEW_A는 P15·P16·P17·P41에 썼다. ③ 인셋(§4-2 규칙 5·§11 열린 항목)을 리더 지시대로 **Flow 비네트**로 정했다 — §4-2 규칙 1의 예외가 P24·P53·P55로 늘었다. ④ 비율: P55 3:4 → 9:16, P59 16:9 채택 |
| **tension-engineer / 리더** | tension-curve §9-3의 리플레이 짝 "P21 ↔ P54"는 비트시트 R9 이전 번호다(현재 P21 → P55 비네트). §9-2 gap 값은 바꾸지 않았다 |
| **리더(Flow 핸드오프)** | 원본 패널(P1·2·3·5·7·8·9·12·13·18·19·21)을 반복·비네트 컷보다 먼저 만들게 안내한다(번호 순서대로면 자연히 지켜진다). P24·P55 비네트가 두 번 시도에도 안 되면 대안(빈자리 + 합성)은 사용자 결정 사항이다 |

## I. 변경 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| v1 | 2026-11-17 | 최초 작성: 64패널, 비율 3:4×30 · 9:16×20 · 1:1×13 · 16:9×1, COMP 10쌍 + 기억 비네트 2, VIEW_SIDE 신규, bubble space 55컷 |
