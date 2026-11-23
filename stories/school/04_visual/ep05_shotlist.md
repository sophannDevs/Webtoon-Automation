# EP05 샷리스트 — 『유통기한 연애』 5화 「안경」 · panel-director

- 작성: panel-director · 2026-11-23 · Flow-by-hand mode + Khmer edition · v1.1 (**style-bible v1.4 · character-sheets v1.4 · refs/ref_prompts.md 15장**에 맞춤: SEOYUN_8 / DOHA_8 + `SEOYUN_8_sheet` / `DOHA_8_sheet`, §3-2 [ep05] M_FLASH 규칙 7항 + 전환 컷 3개(P52·P61·P62) 문장, §7-4 LOC_OLD_SUPER @PAST 외관 배치·P54 실내 각도 보조구·LOC_CVS_FRONT 첫 사용 메모, 사거리 = M_ALLEY_NIGHT 빛 문구, SEOYUN_OFF_SHIFT · DOHA_NIGHT_FOGGED · DOHA_EMPTY_DRING · MISUK_BEHIND_GLASS, §P HARAM_BRASS_KEY · KEYRING_IN_PALM · DOHA_EMPTY_DRING · PAST_CRANE_HANDOVER · RED_STOOL_PAST, §R-3 v1.4 첨부 행)
- 게이트: `km_review.py gate --episode 05` → **OK** (ep05_script_final.md = Khmer review READY 판본, round 1, finalized 2026-11-23 06:18, sha256 9237ec76400a…)
- 입력: `03_episode/ep05_script_final.md`(최종 대본 65패널, KM 줄, 편집 노트 §6 비주얼팀 권고), `03_episode/ep05_beatsheet.md`(패널 번호·단서 위치 고정, §D-6 제작 메모, §E art-director 준비물), `04_visual/style-bible.md` v1.4(§3-2 무드 + [ep05] M_FLASH 규칙·전환 컷, §3-3 예약색, §5 화면비·프레이밍·방향, §7-4 LOC [ep05] 메모, §9 글자 없음, §10 art_space, §11-1 ep05 드리프트, §12-7 생성 순서), `04_visual/character-sheets.md` v1.4(§2·§3 [ep05] 의상 흐름·밤 변형, §4 하람 열쇠·낭독 자세, §11 사장님 [ep05], §12-1 SEOYUN_8·DOHA_8, §P ep05 소품 5종, §R-2 15장, §R-3 ep05 첨부 행), `02_story/world.md`(§4-2 편의점, §4-3 9년 전 사거리, §6 LOC), `04_visual/ep04_shotlist.md`(형식·연결 구도), ep01~ep03 샷리스트(매치 컷 원본)
- 스킬: `webtoon-panel-breakdown` 작업 A(A-1~A-4) · `webtoon-khmer-edition` §4 · `webtoon-flow-handoff`
- **패널 65개.** `panel_001`~`panel_065` = 대본 `P01`~`P65`(번호·순서·단서 위치 그대로). 대사 패널 54 / 무대사 11(P08·P14·P20·P37·P38·P43·P47·P51·P52·P56·P61; P37은 효과음 "딩동"만). 말풍선 91개(대본 대사·생각 줄 91개와 1:1, P45만 3개). 효과음 3(P35 예비 종, P37 딩동, P40 계단 발소리), 엔딩 캡션 1(P65).
- **한국 원작 그대로.** 서울 변두리 서진고, 한국 교복·얼굴, 한국 편의점·사거리, 9년 전 한국 동네 슈퍼(빈 노란 간판, 귤 상자, 빨간 플라스틱 의자). 캄보디아식 변형 없음. 크메르어는 뷰어 말풍선 글자에만.
- 작업 언어: 한국어. prompt-smith가 그대로 옮길 **camera / composition / eyes / art_space는 영어**. 대사(dialogue_ref)는 한국어 원문(크메르어 원본은 대본 `KM:` 줄, letterer가 옮김).
- 좌/우: `LEFT/RIGHT`(대문자) = 인물 본인 기준. `screen-left/right` = 화면 기준.
- **Khmer edition (one line):** No text of any kind in any image (no letters, numbers, speech bubbles, captions, sound-effect lettering, signs or screens with writing); every panel keeps its `art_space` as calm, empty background; objects that could carry writing (Doha's flat folded note and its inside, Haram's clipboard, the tip box, the no-numeral clocks, the stockroom CCTV monitor, the convenience-store signboard, glass, packaging and receipts, the old shop's yellow signboard, the receipt roll and receipt cranes) are drawn blank, and the viewer (`km_tool.py build`) draws the Khmer bubbles there later.
- **"안경"이라는 말은 P65 대사에서 처음 나온다.** 그림은 P37·P38·P56·P61·P64·P65에서 안경을 보여 주지만, 이것은 글자가 아니라 사물이다.

---

## 1. 장소 목록 (scene_id ↔ LOC_* ↔ 무드 ↔ 배경)

| scene_id | panels | location | mood | 의상 | 배경 한 줄 |
|---|---|---|---|---|---|
| E05S01 | P1–P3 | LOC_STUDENT_OFFICE (복도 끝 모퉁이까지 한 축) | M_DAY (늦은 오후 역광, ep04 P54~60 처리) | 도하 OUTFIT_SCHOOL(블레이저 열고, 안경 없음, 백팩 왼쪽 어깨 키링) · 서윤 OUTFIT_SCHOOL(블레이저 단추 다 잠금, 초록 0 — v1.4 §2 [ep05]) | 월 16:38. ep04 P60 직후. 학생부실 앞 복도, 불투명 유리문, 벽의 잠긴 무지 제보함, 창으로 낮게 드는 늦은 오후 빛 |
| E05S02 | P4 | LOC_GINKGO_ROAD | M_DAY_OUT + 계절 추가구 | 서윤·도하 OUTFIT_SCHOOL · 엑스트라 | 화 07:50. 150 m 은행나무 오르막, 노란 잎이 떨어지기 시작 |
| E05S03 | P5–P9 | LOC_CLASSROOM | M_DAY + 계절 추가구 | 서윤·도하 OUTFIT_SCHOOL · 예린 · 태민 · 엑스트라 | 화 08:30~1교시. 2학년 1반, 왼쪽 큰 창, 숫자 없는 시계 |
| E05S04 | P10 | LOC_HALLWAY (1반 앞) | M_DAY | 하람 OUTFIT_SCHOOL + 손목 놋쇠 열쇠 · 건우 · 서윤 OUTFIT_SCHOOL(문가) | 화 10:30 쉬는 시간. 2층 복도, 창밖 은행나무 |
| E05S05 | P11 | LOC_CLASSROOM | M_DAY | 건우 · 도하 OUTFIT_SCHOOL · 반 엑스트라 | 화 12:40 점심. 같은 교실, 앞문 쪽 |
| E05S06 | P12, P16, P18(아래 칸), P20, P25, P26 | LOC_HALLWAY (모퉁이 = ep04 P56·P58과 같은 모퉁이) | M_DAY | 서윤 OUTFIT_SCHOOL · 태민(P25~26) · 건우(P26) | 화 12:43~12:47. 복도가 꺾이는 모퉁이, 소실점 끝에 학생부실 문·제보함 |
| E05S07 | P13–P15, P17, P18(위 칸), P19, P21–P24 | LOC_STUDENT_OFFICE | M_DAY | 하람 OUTFIT_SCHOOL + 무지 클립보드는 건우가 듦(P13) / 하람이 끼움(P23) · 건우 · 도하 OUTFIT_SCHOOL | 화 12:45. 학생부실 앞, 불투명 유리문, 벽의 잠긴 무지 나무 제보함 |
| E05S08 | P27–P35 | LOC_STAIR_LANDING | M_LANDING (점심, 노을 없음) | 서윤·도하 OUTFIT_SCHOOL(도하 백팩 왼쪽 어깨, 키링) | 화 12:55. 옥상 앞 계단참, 살구빛 역광, ep04 P5와 같은 축 |
| E05S09 | P36–P40, P43–P46 | LOC_CVS | M_NIGHT | 서윤 OUTFIT_STORE · 도하 OUTFIT_NIGHT(P37 후드 씀 + 김 서린 렌즈 → **P38부터 후드 내림**, 얇은 동그란 뿔테) · 사장님 MISUK(P43~) | 수 00:20~00:59. 같은 편의점, 계산대 왼쪽 끝 유리병(2/3 이상), 오른쪽 끝 초록 할인 바구니, 숫자 없는 벽시계 |
| E05S10 | P41–P42 | LOC_CVS_STOCKROOM | M_NIGHT (천장 형광 하나 + 모니터 회색빛) | 사장님 MISUK(팔짱) · 서윤 OUTFIT_STORE(문가) | 수 00:55. 창고, 회색 흐린 형체만 보이는 CCTV 모니터, 빈 고리 |
| E05S11 | P47 | LOC_CVS_FRONT (**첫 사용**, §7-4 [ep05] 메모) | M_NIGHT (유리 안 형광 흰빛 + 바깥 보도 가로등 주황, v1.4 §3-2) | 서윤 **SEOYUN_OFF_SHIFT**(조끼 벗음, 블레이저) · 도하 OUTFIT_NIGHT(후드 내림, 맑은 밤 안경, 키링 아직 왼끈) · 사장님 MISUK_BEHIND_GLASS(유리 안 중경) | 수 01:00. 밖에서 본 편의점 유리 앞면, 무지 초록 간판, 플라스틱 야외 테이블, 정류장, 주황 가로등 |
| E05S12 | P48–P52 | LOC_CROSSROADS @NIGHT | M_ALLEY_NIGHT 빛 문구(v1.4 §3-2) · P52 = 전환 컷 문장(주황 → 호박) | 서윤 SEOYUN_OFF_SHIFT(조끼 없음, **P50부터 손에 키링** KEYRING_IN_PALM) · 도하 OUTFIT_NIGHT(후드 내림 · **P50부터 DOHA_EMPTY_DRING**) | 수 01:05. 솔내동 사거리, 대각선 너머 녹슨 셔터 빈 점포 앞 빛바랜 빨간 의자(빔), 도하는 반대편 어두운 골목 어귀. 눈·입김 없음 |
| E05S13 | P53 | LOC_OLD_SUPER @PAST (외관, 길 건너; 의자 = 문 바로 왼쪽, 귤 상자 = 문 오른쪽) | **M_FLASH** + `soft blurred edges like a faded memory` | 8세 서윤(유리문 안 실루엣) · 8세 도하(빨간 의자) · 엄마 = 목소리만 | 9년 전 첫눈 밤. 작은 동네 슈퍼, 빈 노란 간판, 김 서린 유리문, 귤 상자 |
| E05S14 | P54 | LOC_OLD_SUPER @PAST + **@PAST 실내 각도 보조구**(v1.4 §7-4, 새 토큰 아님) | **M_FLASH** (실내, 눈은 유리문 너머로만) | 8세 서윤 · 8세 도하(유리문 너머 흐린 하늘색 형체) | 같은 밤, 슈퍼 안 낮은 카운터, 영수증 롤, 낮은 의자 |
| E05S15 | P55–P61 | LOC_OLD_SUPER @PAST (문 앞) | **M_FLASH** (P61 = 화이트아웃 전환 컷 문장) | 8세 서윤 · 8세 도하 | 같은 밤, 슈퍼 문 앞 눈 속, 빨간 플라스틱 의자 |
| E05S16 | P62–P65 | LOC_CROSSROADS @NIGHT | M_ALLEY_NIGHT 빛 문구 (P62 = 복귀 전환 컷 문장, 호박 → 주황) | 서윤 SEOYUN_OFF_SHIFT(손에 키링) · 도하 OUTFIT_NIGHT(후드 내림, **DOHA_EMPTY_DRING**) | 수 01:10. E05S12와 같은 사거리·같은 가로등·같은 빨간 의자 |

- `--- SCENE BREAK ---`는 22곳: P4, P5, P10, P11, P12, P13, P16, P17, P18(분할 아래 칸만 S06), P19, P20, P21, P25, P27, P36, P41, P43, P47, P48, P53, P54, P55, P62 앞. **E05S06(모퉁이) ↔ E05S07(제보함 앞)은 교차 편집**이라 scene_id가 S06 → S07 → S06 …으로 돌아간다(ep04 S01↔S02, ep03 S16↔S17과 같은 처리). 두 장소는 한 복도의 양 끝이라 빛·시간은 같다.
- 같은 scene_id = 같은 LOC 토큰 · 같은 무드 빛 · 같은 의상(style-bible §6-2-4). 씬 안에서 바뀌는 것은 대본 행동뿐: **E05S09 P37 → P38**(도하가 후드를 넘김), **E05S12 P50**(키링이 도하의 D링에서 서윤 손으로).
- **새 LOC 없음.** 기존 LOC(STUDENT_OFFICE, GINKGO_ROAD, CLASSROOM, HALLWAY, STAIR_LANDING, CVS, CVS_STOCKROOM, CVS_FRONT 첫 사용, CROSSROADS @NIGHT, OLD_SUPER @PAST 첫 사용). P54 내부 카운터 각도는 새 LOC가 아니라 같은 토큰의 실내 각도(AD v1.4, 비트시트 §E-1).
- **무드:** 기존 M_DAY · M_DAY_OUT · M_LANDING · M_NIGHT · **M_FLASH**(ep05 첫 사용) + 사거리 = **M_ALLEY_NIGHT 빛 문구**(v1.4 §3-2 씬별 무드, AD 확정; 가로등 세 개 규칙은 적용 안 함). 새 무드·LOC 없음. 규칙은 v1.4 §3-2 [ep05](아래 §1-2 요약).
- **무드별 패널:** M_DAY = P1–P3(늦은 오후 역광), P5–P26 · M_DAY_OUT = P4 · M_LANDING = P27–P35 · M_NIGHT = P36–P47(P47은 바깥에서 본 유리 앞면) · M_ALLEY_NIGHT = P48–P51, P63–P65 · M_FLASH = P53–P60 · 전환 컷(v1.4 §3-2 문장 그대로) = P52(주황 → 호박, 눈송이 정확히 하나), P61(M_FLASH + 화이트아웃, 아이는 읽힘), P62(M_ALLEY_NIGHT + 호박 → 주황 복귀).
- **계절 추가구(style-bible v1.4 §3-2 [ep05] 씬별 무드 그대로):** 낮·바깥 장면(P4, 교실 창밖, 복도 창밖)의 무드 문구 뒤에 `early November, the yellow ginkgo leaves beginning to fall`.

### 1-1. 의상 · 소품 (character-sheets v1.4 이름 — prompt-smith는 원문을 그대로 쓴다)

| 표기 (v1.4) | 쓰는 패널 | 요점 |
|---|---|---|
| SEOYUN OUTFIT_SCHOOL (§2 [ep05]) | P1–P35 | 블레이저 단추 다 잠금, 넥타이 끝까지. 조끼는 가방 속, **초록 0** |
| SEOYUN OUTFIT_STORE (§2 [ep05]) | P36, P38(띠 컷 눈만), P39–P46 (+ P41–P42 창고 문가) | **블레이저 벗음, 흰 셔츠 위에 초록 조끼**, 소매 걷음, 왼손목 파스 보임. ep01~03과 같은 근무복. 대본 "블레이저 위 초록 조끼" = AD 해석 "블레이저 대신 겉에 조끼"(조끼를 블레이저 위에 겹치지 않는다) |
| **SEOYUN_OFF_SHIFT** (§2 [ep05]) | P47–P65 | OUTFIT_SCHOOL 그대로(블레이저 다시 입고 단추 잠금, 넥타이, 흰 양말·검정 로퍼, 낡은 검정 백팩) + `the green staff vest taken off and rolled away inside her bag, no green visible anywhere on her`. **SEOYUN_night 첨부 금지** |
| 서윤 손의 키링 = **KEYRING_IN_PALM** (§P) | P50(받음), P51(손바닥 ECU + 다른 손 껌 종이 학), P62–P65(감싸 쥠) | 회차 안에서 돌려주지 않는다. 왼손목 파스는 블레이저 소매 밑으로 살짝만 |
| DOHA OUTFIT_SCHOOL (§3) | P1–P35 | 블레이저 열고, 안경 없음, 백팩 왼쪽 어깨 → **왼쪽 끈 키링**. 교실에서는 책상 옆 고리, 왼쪽 끈이 통로 쪽(P9) |
| **DOHA_NIGHT_FOGGED** (§3 [ep05]) | P37 | OUTFIT_NIGHT + `stepping in from the cold, both lenses of his thin round black-framed glasses fogged over white, his eyes not visible through the fog, the hood still up`. 후드 그늘이 렌즈를 가리지 않게. **P56 매치 원본** |
| 도하 P38 닦기 (§3 [ep05]) | P38 | `hood pushed back, messy black hair, the thin round black-framed glasses taken off and held in one hand, wiping the lenses with the charcoal hoodie sleeve pulled down over his other hand so only the fingertips show` |
| DOHA OUTFIT_NIGHT 후드 내림, 맑은 렌즈 (§3 [ep05]) | P39–P49 | DOHA_night 시트의 "후드 벗은 상태". 키링은 아직 왼끈 D링 |
| **DOHA_EMPTY_DRING** (§P · §3 [ep05]) | P50 하단 – P65 | `the D-ring on the left strap of his black backpack now empty, no keyring` — **끈이 보이는 모든 컷의 프롬프트에 쓴다**(DOHA_night 시트엔 키링이 있으므로). 키링이 끈에 있으면 REGEN |
| 도하 P64 안경 (§3 [ep05]) | P64 | `pushing his thin round black-framed glasses up the bridge of his nose with one finger`(렌즈 맑음). P65 = 고백의 정면 슬롯 |
| MISUK (§11 [ep05]) | P41–P46 | 01시 근무복(연보라 플리스 + 초록 무지 조끼 + 베이지 팔토시 + 머리 위 돋보기). **P43부터 도하와 같은 프레임 허용**, 표정은 "확인"(놀람 금지) |
| **MISUK_BEHIND_GLASS** (§11 [ep05]) | P47 | `in the middle distance behind the glass front, standing at the counter with one hand resting on the counter edge, her gaze following the boy's back` |
| HARAM OUTFIT_SCHOOL + **HARAM_BRASS_KEY** (§4 · §P) | P10, P13 (+ 손목에 P14–P24) | `small brass key on a crimson cord` + `plain brass with no engraving, number or tag`. P10 `…swinging as she walks`, P13 `the small brass key turned in the tip box's small lock, its crimson cord still looped around her wrist`. 낭독 자세(P17–P19): 펼친 쪽지는 뒷면·기울인 면만 카메라 쪽 |
| GEONU (§8 토큰만) | P10, P11, P13, P23, P26 | 큰 덩치, 진홍 완장 왼팔, 검정 무지 클립보드 |
| YERIN / TAEMIN (CLASSMATES_sheet) | P5–P7 / P6, P25–P26 | 예린 크림 카디건·흰 집게핀·연보라 휴대폰 뒷면 / 태민 소매 걷음·정수리 뻗친 머리 |
| **SEOYUN_8** (§12-1-a, 시트 SEOYUN_8_sheet) | P53(실루엣), P54, P55, P57, P58, P59, P60(손만) | CORE + OUTFIT_WINTER(빨간 니트 + 크림 패딩 조끼, 짙은 회색 면바지, 작은 흰 운동화). 실외 추가구 `a few snowflakes caught in her hair and on the shoulders of her cream padded vest`(P54 실내는 없음). 표정 슬롯: 디폴트 P54·P55 / 명령 P57·P58 / 가르침 P59. **다크서클·손목 파스·포니테일·교복 없음.** `an 8-year-old child, not a teenager` |
| **DOHA_8** (§12-1-b, 시트 DOHA_8_sheet) | P53, P54(흐린 형체), P55, P56, P57(가장자리), P58, P59, P60(손바닥만), P61 | CORE + OUTFIT_WINTER(빛바랜 하늘색 큰 패딩, 후드는 등에, 짙은 남색 바지, 작은 검정 겨울 부츠). 모든 패널 `his eyes hidden behind the fogged lenses and his lowered lashes, never clearly drawn`. **손은 항상 소매 속.** 실외 추가구 `snow collecting on the hood on his back and on his shoulders`. **17세 표식 금지**(눈썹 덮는 긴 머리, 왼쪽 목 점 → 패딩 깃에 가림, 레진 키링, 마른 체형). 프롬프트에 "Baek" 금지. `an 8-year-old child, not a teenager` |
| 엄마 HYEWON (9년 전) | P53 | **목소리만**(프레임 밖). 회상 P53–P61에 **어른은 한 명도 그리지 않는다** |
| **PAST_CRANE_HANDOVER** (§P) | P60 | 서윤의 학 토큰 + `folded from bright white blank thermal receipt paper, set down by a small bare child's hand onto a small palm half-covered by a puffy faded sky-blue sleeve cuff`. P51과 같은 각도·같은 크기 |
| **RED_STOOL_PAST** (§P) | P53, P55, P58, P59, P61 | `a small plain vivid red plastic stool with no print`(선명). 현재 P48·P63·P65는 LOC_CROSSROADS의 `faded red plastic stool`(빛바램, 녹슨 셔터 왼쪽) |
| DOHA_NOTE_FLAT (§P) | P14, P17, P19, P21, P22(위 칸), P23 | 네 번 접은 평평한 사각. **학 모양 금지.** 안쪽은 **항상 각도로 가려 보이지 않음** |
| 하람의 학 모양 첫 제보 쪽지 (§4 소품) | P22(아래 칸, 회색조 기억) | `clumsy crane-shaped folded note of plain paper with a plain head and a plain tail` — **두 특징 없음** |
| TIPBOX (§P) | P1(배경), P12(소실점), P13, P14, P19(배경) | 잠긴 무지 나무 상자, 투입구, 작은 자물쇠, 글자 0 |
| 레진 학 키링 (§P) | P1, P9, P32, P33, P37·P39·P43·P47(왼쪽 끈, 작게) → P50 이후 KEYRING_IN_PALM | 누런 아이보리 학, **P9·P51만 두 특징 판별**, P32·P33은 흐리게(미디엄) |
| 서윤의 학 (§P) | P2·P20(구겨진 껌 종이 학), P8·P9·P51(은백색 껌 종이 학, 두 특징 판별), P36(영수증 학, 유리병), P54·P59(8세의 흰 영수증 학), P60(PAST_CRANE_HANDOVER) | **학 방향 고정: 머리 = screen-left, 꼬리 = screen-right**(ep01 panel_056과 같은 방향). P8·P9·P51·P59·P60 모두 이 방향 |
| 참치마요 삼각김밥 (§P) | P36, P39, P46, P55, P57, P58 | 투명 비닐, **주황 띠**, 인쇄 없음. 9년 전과 지금 같은 모양 |

### 1-2. M_FLASH · 전환 컷 · 밤 사거리 (style-bible v1.4 §3-2 [ep05] 요약 — 원문이 우선)

- **M_FLASH = P53–P60(+ P61 전환 컷).** 빛 문구 그대로 + `soft blurred edges like a faded memory`. 색: 백열 노랑 · 눈 흰 · **선명한 빨간 의자**(RED_STOOL_PAST) · 귤 · 8세 서윤의 빨간 머리끈·니트 · 8세 도하의 빛바랜 하늘색 패딩 · 주황 띠. **선명한 조끼 초록·진홍 없음.**
  - 눈(雪): 실외 컷만 `snow falling softly` + 머리·어깨·후드에 쌓인 눈. **P54 실내는 눈 없음**(김 서린 유리문 너머로만).
  - 무지 문구(규칙 5): `blank yellow signboard with no letters, no logo and no numbers` · `the fogged glass door with no stickers or writing` · `plain cardboard tangerine boxes with no print or logo` · 영수증 롤 `blank white thermal receipt paper` · 과자 `plain-wrapped` · 삼각김밥 `plain orange band, no print`.
  - art_space(규칙 6): 회상 대사 = 뷰어 `memory` 풍선. 빈자리 = 위쪽 **눈 내리는 어두운 밤하늘**(실외) / **카운터 뒤 흐린 선반 윗부분·천장 백열등 주변**(P54). **노란 간판 위에 두지 않는다.**
  - 첨부(규칙 7): **8세 시트만**(+ 매치 원본 현재 패널 P37→P56, P51→P60). 성인 시트(SEOYUN_turnaround·_night·_expressions, DOHA_*, LEADS_lineup) 금지.
- **전환 컷 3개(한 장, 분할 없음, v1.4 문장 그대로):**
  - **P52:** `extreme close-up of her eye, the small orange streetlight reflected in her pupil blooming into a warm amber incandescent glow, the colours shifting from cold navy-black and streetlight orange at the bottom of the frame to warm amber at the top, one single snowflake drifting down from the top edge of the frame, soft blurred edges` — M_FLASH 문구 대신 이 문장. **눈송이 정확히 하나.**
  - **P61:** M_FLASH 문구 + `the snow thickening and the whole frame fading to soft warm white from the edges inward, the outer third of the frame almost pure warm white, the small boy in the centre still clearly readable` — 아이를 지우지 않는다.
  - **P62:** M_ALLEY_NIGHT 빛 문구 + `the soft warm white haze at the top edge of the frame clearing into orange streetlight, a faint trace of amber lingering only along the top edge, the cold navy night returning, no snow` — 말풍선 자리는 위쪽 흐린 띠.
- **사거리(P48–P51, P63–P65) = M_ALLEY_NIGHT 빛 문구:** `after midnight, sparse pools of orange streetlamp light on cold concrete, deep navy-black shadows between the lamps, quiet and empty`. 가로등 세 개 규칙은 적용하지 않는다. **P47 = M_NIGHT**(LOC_CVS_FRONT: 유리 안 형광 흰빛 + 바깥 보도 가로등 주황).
- **현재 밤: 눈 없음, 입김 없음.** 김 서림은 P37 렌즈뿐. 눈은 회상과 P52의 한 송이만.

## 2. 크기 → Flow 화면비 (style-bible §5-1)

| size | aspect | 패널 | 수 |
|---|---|---|---|
| large / full-bleed | **9:16** | P1, P19, P35, P43, P48, P53, P61, **P62, P63, P64, P65** | 11 |
| medium (기본) | **3:4** | P2, P3, P5–P7, P9, P10, P12, P13, P15–P18, P20, P22–P24, P26, P28–P30, P32–P34, P36–P38, P40–P42, P46, P49, P54–P57 | 36 |
| medium-wide | **4:3** | P4, P11, P21, P25, P27, P31, P39, P44, P45, P47, P58, P59 | 12 |
| insert / ECU | **1:1** | P8, P14, P50, P51, P52, P60 | 6 |
| | | **합계** | **65** |

- 9:16 11장의 이유: P1(회차 첫 장, 복도 길이만큼의 거리, ep04 P59 짝), **P19(반전 A 단독, 세로로 긴 측면 투샷)**, P35(3분위 정점 "받은 거야." + 내려가는 도하·위에 남은 서윤의 높이 차), P43(사장님·도하 첫 같은 프레임, 세로로 긴 정지), P48(사거리 하이 앵글, 원경 빨간 의자), P53(회상 첫 장, 눈 내리는 하늘 + 슈퍼 전경), P61(화이트아웃 여백), **P62–P65(클리프행어 4연속, 대본·지시 그대로 9:16)**.
- 16:9 미사용.
- **매치 컷 화면비 고정:** P37 ↔ P56 = 둘 다 3:4 · P51 ↔ P60 = 둘 다 1:1 · P27 ↔ ep04 P5 = 4:3 · P39 ↔ ep02 P03 = 4:3(ep02는 3:4였으나 비트시트가 "정면 투샷 + 유리병 왼쪽 끝"을 요구해 넓힘, 같은 축·같은 위치) · P65 ↔ ep01 P60 = 9:16.

## 3. 분할(split) · 방향 · 첨부 · 생성 순서

### 3-1. split
- **split: yes = 4개: P9, P18, P22, P38.** 모두 `two stacked frames in one image separated by a thin plain white gutter`, 최대 2칸(style-bible §5-2-2). art_space는 칸 사이 홈이 아니라 **위 칸 안**.
  - **P9** = 위 칸(약 35%): 서윤 옆얼굴 띠(생각 풍선 자리) / 아래 칸(약 65%): 비트시트의 "왼쪽 껌 종이 학 / 오른쪽 키링 학" 2분할을 **한 프레임 안의 전경(왼쪽) / 중경(오른쪽)**으로 풀었다(3칸 금지). 두 학 같은 방향·같은 화면 크기·둘 다 판별.
  - **P18** = 위 칸: 하람 입가 클로즈업(E05S07) / 아래 칸: 서윤 눈 ECU(E05S06). 교차 편집을 한 장에.
  - **P22** = 위 칸(약 62%): 하람 클로즈업 + 손안의 평평한 사각 쪽지 / 아래 칸(약 38%): 회색조 기억 인셋 — 서툰 학 모양 첫 제보 쪽지(두 특징 없음). "인셋"을 프레임 안의 작은 창 대신 아래 칸으로 처리.
  - **P38** = 위 칸(약 70%): 서윤 어깨 너머 → 안경 닦는 소매 덮인 손 클로즈업 / 아래 칸(약 30%): 서윤 눈 띠(눈동자 가장자리 노란 빛 한 점). 무대사.
- 비트시트의 다른 "얼굴 + 인서트"(P2, P16, P32, P33, P46, P50, P62)와 "교차"(P21, P28, P63)는 **한 프레임 안의 전경/후경 구도**로 풀었다.

### 3-2. 방향 규약
- **학생부실 앞 복도 축(ep04 P56~P60과 같음):** 모퉁이(서윤) ↔ 복도 끝 학생부실 불투명 유리문 + 그 옆 벽 제보함(도하·하람). 모퉁이에서 보면 제보함은 소실점 끝, 창 = screen-left 벽(늦은 오후 빛이 바닥에 비스듬히). 제보함 측면 컷(P13~P23)에서는 **제보함 = screen-left 벽, 유리문 = 그 오른쪽**, 하람이 제보함 앞, 도하가 하람 맞은편(screen-right), 건우가 하람 뒤.
- **교실(style-bible §5-3):** 칠판을 볼 때 큰 창 = 왼쪽, 도하 = 창가 열. ep04 §3-2 PD 배치 유지: 예린 = 서윤 옆자리, 태민 = 도하 옆자리, 서윤 = 태민 바로 앞 줄 → **도하는 서윤의 대각선 뒤, 통로 건너**(P9 "통로 건너"). 앞문 = 칠판을 볼 때 오른쪽 앞.
- **계단참:** ep04 P5 축 그대로. 측면 투샷 = 계단이 screen-left(아래) → screen-right(위)로 오른다, 잠긴 회색 철문 = 위쪽 오른쪽. **P27 서윤 한 칸 위 = screen-right, 도하 = screen-left 아래** → **P31 서윤이 한 칸 내려와 같은 칸**(ep04 P9·ep03 P22와 같은 칸 구도, 이번엔 서윤이 내려옴) → P35 도하가 screen-left 아래로 내려가고 서윤 혼자 위.
- **편의점 계산대 정면 투샷(§5-3 고정):** 손님 시점에서 서윤 = 화면 오른쪽(계산대 안), 손님(도하) = 화면 왼쪽, 유리병 = 계산대 왼쪽 끝, 초록 할인 바구니 = 오른쪽 끝, 회색 폐기 바구니 = 계산대 아래. 사장님은 계산대 안(서윤 쪽, 화면 오른쪽). 직원 문(창고) = 계산대 뒤.
- **사거리(E05S12·S16):** 편의점 앞 정류장 쪽(서윤이 걸어가던 방향) ↔ **대각선 너머 녹슨 셔터 빈 점포 + 빛바랜 빨간 의자** ↔ 도하가 서 있는 **반대편 어두운 골목 어귀**(W4, style-bible §7-4 P1 메모). 두 사람 투샷에서 **서윤 = screen-right, 도하 = screen-left**, 빨간 의자는 두 사람 사이 깊은 원경(P48, P63, P65 흐린 빨간 점).
- **9년 전 슈퍼(E05S13~S15):** 길 건너에서 보면 슈퍼 문 = 가운데, **빨간 의자 = 문 왼쪽(screen-left)**, 귤 상자 = 문 오른쪽. 측면 컷(P55, P58, P59)은 **8세 서윤 = screen-right(문 쪽에서 나옴), 아이 = screen-left(의자)**. 현재 사거리(P48)의 빨간 의자 위치감과 맞춘다(같은 모퉁이, 9년 뒤 녹슨 셔터).
- **손바닥 매치(P51 ↔ P60):** 위에서 수직으로, 손바닥이 화면 아래쪽 중앙, 손끝이 화면 위를 향함. 주인공 학(P51 레진 속 누런 학 / P60 흰 영수증 학)의 중심 = 가로 중앙·위에서 60% 지점, 폭 약 30%. 학 머리 = screen-left.
- **안경 매치(P37 ↔ P56):** 정면, 눈높이, 렌즈 두 개의 중심 = 위에서 약 40% 지점, 각 렌즈 **위쪽 바깥 모서리에 작은 밝은 반사 하나**(P37 형광 흰빛 / P56 노란 백열빛). 렌즈 전체가 하얗게 김 서려 눈은 보이지 않는다.

### 3-3. 앞 패널 이미지를 첨부해야 하는 패널

첨부 3장 이하(style-bible §6-2-3): 인물 시트 1~2장 + 앞 패널 1장. **ep01·ep02·ep03·ep04 이미지는 아직 하나도 없다**(네 회차 모두 `WAITING_FOR_IMAGES`, `05_panels/` 비어 있음). 아래 (a)의 **필수** 첨부는 그 이미지가 생긴 뒤에만 만들 수 있다. 권장 첨부는 없으면 시트만 붙이고 진행.

**시트 첨부 규칙 (character-sheets v1.4 §R-3 [ep05] 행 — 각 패널 fx/note보다 우선):**
- 서윤 낮(P1–P35) = SEOYUN_turnaround (+ SEOYUN_expressions). 서윤 편의점(P36–P46, 창고 문가 P41–P42 포함) = SEOYUN_night. **서윤 조끼 벗음(P47–P65, SEOYUN_OFF_SHIFT) = SEOYUN_turnaround 또는 SEOYUN_expressions — SEOYUN_night 금지**(조끼가 다시 생긴다).
- 도하 낮 = DOHA_turnaround / 투샷 LEADS_lineup(P1–P35). 도하 밤(P37–P65) = DOHA_night. **P48–P50·P63–P65에는 LEADS_lineup을 쓰지 않는다**(낮 교복 + 끈의 키링). P50 이후 DOHA_night를 붙인 컷은 프롬프트에 DOHA_EMPTY_DRING을 꼭 쓴다(시트엔 키링이 있다).
- **사장님 장면(P41–P47) = MISUK_turnaround 항상.** P41–P42 + SEOYUN_night · P43–P44 + DOHA_night · P45 MISUK_turnaround, DOHA_night, SEOYUN_night · P46 MISUK_turnaround, SEOYUN_night · **P47 MISUK_turnaround, SEOYUN_turnaround, DOHA_night**.
- 하람 놋쇠 열쇠(P10, P13) = HARAM_turnaround(+ P10 SEOYUN_turnaround, P13 DOHA_turnaround). 하람 다른 컷 = HARAM_turnaround(+ HARAM_expressions). 예린·태민 = CLASSMATES_sheet. 건우 = 토큰만.
- **회상(P53–P61) = 8세 시트만**: SEOYUN_8_sheet · DOHA_8_sheet(refs/ref_prompts.md 15장 중 14·15번). **성인 시트(SEOYUN_turnaround·_night·_expressions, DOHA_*, LEADS_lineup) 금지.** 예외는 매치 원본 패널뿐: P56 ← P37, P60 ← P51, P59 ← P55, P61 ← P56. 두 시트가 그려지기 전에는 P53–P61을 만들지 않는다.
- 전환 컷 P52·P62(현재 서윤) = SEOYUN_turnaround 또는 SEOYUN_expressions(얼어붙음 칸). 회상 시트·SEOYUN_night 금지.
- PROPS_sheet = P8, P9, P50, P51(학 두 특징·키링). P60은 3장 한도(P51 + 8세 시트 둘)라 PROPS 없음. **P14·P17·P19·P21·P22·P23(도하의 평평한 쪽지)에는 PROPS_sheet와 학 이미지를 첨부하지 않는다**(Flow가 쪽지를 학으로 접어 버림).

**(a) ep01 / ep02 / ep03 / ep04 패널을 첨부 (그 이미지가 먼저 있어야 한다)**

| 패널 | 첨부할 앞 패널 | 필수/권장 | 고정할 것 / 다를 것 |
|---|---|---|---|
| **P1** | **ep04 panel_059** | 필수 | 같은 복도 길이·같은 모퉁이 → 제보함 축·같은 늦은 오후 빛(ep04 P60 직후). 다름: 서윤은 어깨만(전경 흐림), 도하가 몸을 완전히 돌려 정면, 손 빔 |
| P2 | ep04 panel_060 | 권장 | 같은 서윤 얼굴·같은 늦은 오후 빛. 다름: 의심 → 기다림, 전경 도하 어깨, 아래 주먹 속 구겨진 껌 종이 학 |
| **P12** | **ep04 panel_056** | 필수 | 같은 모퉁이 벽 모서리·복도 끝 학생부실 문과 제보함의 소실점. 다름: 화요일 점심(빛이 높고 짧음), 서윤 바스트가 벽에 등을 붙임 |
| P12 (선택 추가) | ep04 panel_058 | 선택 | 같은 모퉁이 클로즈업 조명 |
| P13 | ep03 panel_045 | 권장 | 같은 제보함·같은 놋쇠 열쇠·자물쇠 위치·같은 유리문. ep03 P45는 학 쪽지가 없는 컷이라 허용. 다름: 도하가 앞에 섬, 건우 클립보드 |
| **P27** | **ep04 panel_005** | 필수 | 같은 계단참 측면 카메라(ep02 panel_039 → ep04 panel_005 → ep05 P27), 서윤이 한 칸 위. 다름: 화요일, 서윤이 도하 소매를 놓으며 화가 난 얼굴 |
| **P39** | **ep02 panel_003** | 필수 | 같은 계산대 축(도하 screen-left, 서윤 screen-right), 같은 유리병·삼각김밥 위치. **역할 반전**: 이번엔 서윤이 "3조"로 막는다(손가락 없이 스캐너를 든 채). 다름: 유리병 2/3 이상, 도하 후드 내림 |
| P41 | ep03 panel_048 | 권장 | 같은 창고 문가 POV·같은 CCTV 모니터·박스·거울. 다름: 사장님은 통화가 아니라 **팔짱을 끼고 모니터 앞에 서 있음**, 휴대폰 없음 |
| P46 | ep02 panel_009 | 권장 | 같은 01:00 폐기 삼각김밥 의식(사장님 손 → 서윤 손). 다름: 클로즈업, 도하가 같은 계산대에 있음(그의 빈손이 프레임 가장자리) |
| P48 | ep01 panel_053 | 권장 | 같은 사거리 지리(대각선 너머 녹슨 셔터 빈 점포 + 작은 빨간 의자, 큰 마트 주차장 불빛). 다름: 바깥 하이 앵글, 사람 둘 |
| P51 | ep01 panel_056 | 권장 | 같은 레진 블록·같은 누런 학의 두 특징·**같은 학 방향(머리 screen-left)**. 다름: 키링이 서윤 손바닥 위, 옆에 껌 종이 학 |
| P65 | ep01 panel_060 | 권장 | 같은 도하 밤 정면(후드 내림, 얇은 동그란 뿔테), 같은 마지막 대사 프레이밍(위 말풍선 + 아래 1/6 캡션). 다름: 바깥 가로등 주황 역광 + 흐린 빨간 점 |

- **첨부 금지:** P14·P17·P19·P21·P22·P23(도하의 평평한 사각 쪽지)에 학 모양 쪽지 이미지(ep01 panel_020, ep03 panel_046·058, ep04 panel_001·004)와 PROPS_sheet를 **첨부하지 않는다**. P22 아래 칸의 학 모양 쪽지도 문구로만 그린다(§7 의문 6).

**(b) ep05 안의 앞 패널을 첨부 (ep05 안 생성 순서)**

| 패널 | 첨부 | 필수/권장 | 이유 |
|---|---|---|---|
| P2, P3 | P1 | 권장 | 같은 복도 축·늦은 오후 빛 |
| P6, P7 | P5 | 권장 | 같은 교실 자리·창빛 |
| P9 | P8 | 권장 | 같은 껌 종이 학(두 특징, 같은 방향) |
| **P16, P20** | **P12** | 필수 | **같은 모퉁이 벽·같은 서윤 조명**(공포 → 무너짐) |
| P25, P26 | P12 | 권장 | 같은 모퉁이 |
| P14, P15, P17, P19, P21–P24 | P13 | 권장 | 같은 제보함·유리문·세 사람 위치 |
| P28–P30, P32–P35 | P27 | 권장 | 같은 계단참 빛·축 |
| **P31** | **P27** | 필수 | **같은 측면 카메라**, 이번엔 서윤이 한 칸 내려와 같은 칸 |
| P39 | P36 | 권장 | 같은 계산대·유리병·초록 바구니·주황 띠 삼각김밥 |
| P42 | P41 | 권장 | 같은 창고·모니터 |
| P44, P45 | P43 | 권장 | 같은 계산대·사장님과 도하 위치 |
| **P56** | **P37** | 필수 | **안경 매치 컷**: 같은 정면 앵글·같은 렌즈 높이·같은 반사 위치(현재 얇은 뿔테 ↔ 9년 전 두꺼운 동그란 안경) |
| (P58, P60) | (P38) | 첨부 안 함 | 소매가 손을 덮는 모양은 **문구로만**(회상엔 8세 시트 + 지정 매치 원본만 허용, v1.4 §R-3) |
| P49, P50, P52 | P48 | 권장 | 같은 가로등·같은 서윤 조명 |
| P51 | P50 | 권장 | 같은 키링·같은 손 |
| **P60** | **P51** | 필수 | **손바닥 매치 컷**: 위에서 같은 각도, 학 같은 위치·같은 방향(현재 누런 레진 학 ↔ 9년 전 흰 영수증 학) |
| **P59** | **P55** | 필수 (v1.4 §12-7) | **같은 빨간 의자·같은 문 위치**(외관 배치 고정: 의자 = 문 바로 왼쪽) |
| **P61** | **P56** | 필수 (v1.4 §12-7) | 같은 김 서린 렌즈, 반사 둘 |
| P54, P55, P57, P58 | — | — | 회상 안 다른 패널은 **8세 시트만**(v1.4 §R-3). 슈퍼 배치는 §7-4 고정 문구로 맞춘다 |
| P62 | P51 | 권장 | 같은 키링·같은 손 |
| **P63** | **P48** | 필수 | **같은 사거리 지리**, 원경 빨간 의자 위치 |
| P64, P65 | P63 | 권장 | 같은 가로등 역광·같은 두 사람 위치 |

### 3-4. 생성 순서 (사용자 메모)
1. **레퍼런스 시트 먼저: 15장**(기존 13 + **SEOYUN_8_sheet · DOHA_8_sheet**, `refs/ref_prompts.md` 14·15번; SEOYUN_8_sheet는 SEOYUN_turnaround를 첨부해 만든다). 회상 P53–P61은 두 8세 시트가 생긴 뒤에만. MISUK_turnaround는 P41–P47 전에 필수.
2. **아직 없을 수 있다:** ep01~ep04 이미지는 모두 대기 중이다. (a)의 필수 첨부(ep04 panel_059 → P1, ep04 panel_056 → P12, ep04 panel_005 → P27, ep02 panel_003 → P39)가 생긴 뒤에만 ep05 **P1, P12, P27, P39**를 만들 수 있다(→ 그 뒤의 필수 연쇄 P16·P20·P31도 함께 미뤄진다). 권장 첨부가 없으면 시트만 붙이고 진행해도 된다.
3. ep05 안: **P1 → P2, P3** · P5 → P6, P7 · P8 → P9 · **P12 → P16 → P20**, P12 → P25, P26 · **P13 → P14, P15, P17, P19, P21–P24** · **P27 → P31**, P27 → P28–P30, P32–P35 · P36 → P39 · **P37 → (회상) P56 → P61** · P41 → P42 · P43 → P44, P45 · **P48 → P49, P50 → P51 → P52, P62 / P48 → P63 → P64, P65** · **P55 → P59** · **P56 → P61** · **P51 → P60**.
4. 회상(P53–P61)은 **현재 쪽 매치 원본(P37, P51)을 먼저** 만든 뒤에. 그래서 실제로는 P36–P52를 먼저, 그다음 P53–P61, 마지막 P62–P65 순서가 편하다.

### 3-5. 고정 규칙 메모
- **쪽지 낭독(P11–P19, P21–P23):** 도하의 쪽지는 **평평하게 네 번 접은 작은 사각**(P14), 펼친 뒤에도 접힌 십자 자국만 보이는 무지 종이. **안쪽은 어느 컷에서도 카메라를 향하지 않는다**(뒷면이 프레임 쪽, 기울인 각도, 손가락에 가림). 비치는 글씨·잉크 번짐·자국 0. 내용은 하람의 말풍선(P17·P18·P19)으로만 전달. P22 위 칸 쪽지는 다시 접은 평평한 사각.
- **학 판별 크기:** P8, P9(두 학 모두), P51(두 학 모두), P59, P60 = 두 특징(갈고리처럼 꺾인 머리 + 한 번 접어 내린 꼬리 끝)이 판별되는 크기. P32·P33 = 흐리게(판별 불가, 미디엄). P2·P20 = 구겨진 껌 종이 학(판별 불필요). P36 = 유리병 속 작은 학들(판별 불필요). P54 = 8세가 접는 중(판별 불필요).
- **학 방향:** 판별 컷(P8, P9, P51, P59, P60) 모두 **머리 = screen-left, 꼬리 = screen-right**. 크레인 매치(P51 ↔ P60) 와 P9 "같은 각도·같은 모양"의 핵심.
- **8세 도하의 눈:** P53(원경) · P54(유리 너머 흐린 형체) · P55(옆, 김 서린 렌즈 + 고개만 듦) · **P56(정면 ECU지만 렌즈가 완전히 하얗게 김 서림)** · P58·P59(옆, 내리깐 시선, 렌즈 김) · P60(손만) · P61(정면, 렌즈에 백열등 반사 둘). **눈동자를 또렷하게 그린 컷은 하나도 없다.** 얼굴형·볼·바가지 머리·안경테는 토큰대로 분명하게.
- **회상에 어른 없음:** P53–P61 프레임 안에 어른(엄마·아빠·손님·행인)이 한 명도 없다. 엄마는 P53 프레임 밖 목소리(말풍선 꼬리 = 슈퍼 안쪽 방향)뿐. P54 슈퍼 안에도 어른 없음(안쪽 방 문은 닫힌 천 커튼).
- **사장님과 도하:** ep05 **P43부터 같은 프레임 허용.** P43 표정은 놀람이 아니라 "확인"(작은 눈이 조금 가늘어지는 정도, 과장 금지). P47 유리 너머 사장님은 중경, 얼굴은 읽히되 작게. 사장님은 도하를 안다는 말·몸짓을 하지 않는다.
- **D링:** P1–P49 도하 백팩 왼쪽 끈에 키링. **P50에서 서윤 손으로.** P50 하단부터 P65까지 도하 백팩 왼쪽 끈 D링은 **비어 있다**(작은 은색 D링만). 서윤은 P50–P65 키링을 쥐고 있다.
- **안경:** 도하 낮(P1–P35) 안경 없음. 밤(P37–P65) 얇은 동그란 검정 뿔테. P37만 김 서림. 8세 도하는 **두꺼운** 동그란 검정 안경(현재보다 테가 굵고 렌즈가 큼).
- **현재엔 눈·입김 없음.** P52 눈송이 한 송이는 기억 진입 표식. 회상(P53–P61)은 첫눈.
- **예약색(§3-3):** 선명한 조끼 초록 = 편의점 장면(P36–P46 서윤·사장님 조끼, P41 고리는 빔)뿐. P1–P35 학교, P47–P65 바깥·회상에 초록 0(P47 바깥 테이블 의자의 초록은 LOC_CVS_FRONT 토큰 = 탁한 녹색으로, 간판은 무지 초록). 진홍 = 하람·건우 완장 + 하람 손목 열쇠 끈. 주황 띠 = 참치마요 삼각김밥만. 빨간 의자 = P48·P63·P65(빛바랜, 원경) + P53·P55·P59(선명).
- **만화 기호 금지(§11-5) 대체:** P25 "동세선 과장" → 튀어나오는 태민의 머리카락·소매 모션 블러, 크게 벌린 입, 기울어진 자세. 땀방울·김(안경 김 제외)·속도선 없음.
- **신체 접촉:** 소매 잡기(P27), 손잡기(P4), 키링을 손바닥에 올려 줌(P50), 입 막기(P25 태민 — 코미디). 그 이상 없음.
- **달력(world §7-4, 11월 첫째 주):** 은행나무 노랑, 떨어지기 시작(P4, 창밖), 맑음, 밤은 쌀쌀(입김 없음). 블레이저. 유리병 **2/3 이상**.

## 4. 스크롤 리듬 · gap_after (px, letterer 레터링 스펙에 그대로)

| gap_after | 뜻 | 쓰는 곳 |
|---|---|---|
| 0 | 이어 붙임 | P65(마지막) |
| 30 | 촘촘(빠른 주고받기, 교차 편집, 클리프 오르막) | 대사 합 |
| 80 | 보통 | 기본 |
| 160 | 비트 끊기 · 씬 전환 · 반전 직전/직후 숨 | SCENE BREAK 앞, P18, P19, P24, P46, P60 |
| 320 | 시간 점프 · 기억의 문 | P3(월 → 화), P35(낮 → 수 00:20), **P52(현재 → 9년 전)**, **P61(9년 전 → 현재)** |

| 구간 | 패널 | 리듬 |
|---|---|---|
| ① 받기 | P1–P3 | **9:16 복도 길이 "응. 넣었어."**(30) → 3:4 "설명 안 해?"(30) → 3:4 하이 앵글 "됐어."(**320**) |
| ② 냉전 | P4–P10 | 4:3 손잡은 뒷모습(160) → 3:4 예린(30) → 3:4 태민(80) → 3:4 상담 주간(80) → 1:1 책상 밑 학 무대사(30) → 분할 두 학(160) → 3:4 놋쇠 열쇠(160) |
| ③ 호출 | P11–P18 | 4:3 호출(160) → 3:4 모퉁이(80) → 3:4 열쇠·"응."(30) → 1:1 평평한 사각 무대사(80) → 3:4 "읽어."(80) → 3:4 공포(80) → 3:4 낭독 1(30) → 분할 "'저입니다.'"(160) |
| ④ 반전 A + 코미디 | P19–P26 | **P19 9:16 반전 A 단독**(160) → 3:4 무너짐 무대사(80) → 4:3 "거짓말은 안 썼어."(80) → 분할 학 기억(80) → 3:4 클립보드(80) → 3:4 "뭘 본 걸까요."(160) → 4:3 "자수했어?!"(30) → 3:4 "본인 신고입니다"(160) |
| ⑤ 분노 | P27–P35 | 4:3 한 칸 위(30) → 3:4(30) → 3:4 "왜 네 맘대로 해."(80) → 3:4(80) → 4:3 같은 칸(80) → 3:4(30) → 3:4 "따라 접은 거야?"(80) → 3:4 "난 학 안 접어."(30) → **9:16 "받은 거야." + 종**(**320**) |
| ⑥ 밤 편의점 | P36–P47 | 3:4 남겨 둔 삼각김밥(80) → 3:4 김 서린 렌즈 무대사(30) → 분할 닦는 손 무대사(80) → 4:3 "3조."(80) → 3:4 발소리(160) → 3:4 창고(30) → 3:4 "30일"(160) → **9:16 첫 대면 정지** 무대사(80) → 4:3 인사(30) → 4:3 "남자친구야?"(30) → 3:4 "먹고 가."(160) → 4:3 바깥 유리 무대사(160) |
| ⑦ 사거리 · 키링 | P48–P52 | **9:16 하이 앵글**(80) → 3:4 "3조, 내가 깰게."(80) → 1:1 건넴(30) → 1:1 두 학 무대사(80) → 1:1 눈 디졸브 무대사(**320**) |
| ⑧ 회상 | P53–P61 | **9:16 눈 내리는 슈퍼**(80) → 3:4 카운터 안(160) → 3:4 "야, 너."(30) → 3:4 김 서린 안경 무대사(80) → 3:4 "오늘까지인 거야."(30) → 4:3 "먹어."(80) → 4:3 가르침(80) → 1:1 "가져."(160) → **9:16 화이트아웃** 무대사(**320**) |
| ⑨ 클리프행어 | P62–P65 | **9:16 "…이 학,"**(80) → **9:16 "내가 접은 거야?" / "응."**(80) → **9:16 안경 밀어 올림**(160) → **P65 9:16 마지막**(0) |

- 640 미사용. 반전 A(P19)는 앞 P18 160 + 뒤 160으로 정지, 세로 9:16 자체가 "시간 정지"를 맡는다(P20 리액션이 바로 붙어야 해서 320은 쓰지 않음). 회상 진입·종료만 320.
- 무대사 연속 최대 2컷(P37–P38, P51–P52). 3컷 이상 없음.

---

## 5. 샷리스트 (panel_001 ~ panel_065)

### ① 받기 — P1~P3 (월 16:38, ep04 P60 직후)

### panel_001
- scene_id: E05S01 / location: LOC_STUDENT_OFFICE (모퉁이 → 제보함 축) · mood: M_DAY (늦은 오후 역광)
- beat: ① 받기 · 긴장 **9** 비 · ⟨복선 TA-D1 · M1⟩ ⟨이중의미⟩ · ep04 P60 "…너였어?"를 곧장 받는 회차 첫 장
- characters: DOHA (OUTFIT_SCHOOL, 미디엄, 정면으로 돌아섬, 백팩 왼쪽 어깨·키링) · SEOYUN (OUTFIT_SCHOOL, 전경 어깨·뺨만, 흐림)
- size: large · aspect: 9:16
- camera: long-lens over-the-shoulder from the corridor corner, the whole length of the corridor between them compressed; same axis as ep04 panel_059, eye level.
- composition: Screen-left lower foreground, soft and out of focus: Seoyun's shoulder in the buttoned navy blazer, the edge of her low ponytail and the vertical edge of the corner wall. Middle of the tall frame, sharp, at the far end of the corridor: Doha in medium shot, turned fully around to face her, blazer open, both hands empty and loose at his sides, no hiding gesture. Beside him on the wall: the locked small wooden tip box with a slot (plain wood, no sign) and the frosted-glass door of the student-discipline office (no sign). Low slanted late-afternoon light from the corridor windows on screen-left rims his hair and shoulders; on the LEFT strap of his black backpack (on the viewer's right) the clear resin crane keyring catches the light once as a small bright glint. Long bars of golden light across the terrazzo floor between them. Top fifth: plain cream upper wall and ceiling in soft light.
- eyes: Doha looks straight down the corridor at Seoyun (toward camera), calm and open.
- emotion: 담담 / (서윤) 굳음
- motion/direction: 전경 서윤 어깨 → 복도 끝 도하 → 키링 반짝임
- dialogue_ref: 도하 "응. 넣었어." (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream upper wall and ceiling above the corridor) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 ep04 panel_059(필수)** + DOHA_turnaround + SEOYUN_turnaround. 서윤 = OUTFIT_SCHOOL(v1.4 §2 [ep05], 블레이저 단추 다 잠금), **초록 0**, SEOYUN_night 금지. 제보함·유리문 무지. 키링 학 판별 불필요(반짝임만). 말풍선 꼬리 = 복도 끝 도하 쪽 아래.

### panel_002
- scene_id: E05S01 / location: LOC_STUDENT_OFFICE (모퉁이 쪽) · mood: M_DAY (늦은 오후)
- beat: ① · 긴장 8 비 · ⟨복선 C2⟩ · 도하의 결함(침묵)
- characters: SEOYUN (OUTFIT_SCHOOL, 정면 클로즈업 + 주먹) · DOHA (전경 어깨, 흐림)
- size: medium · aspect: 3:4
- camera: frontal close-up of Seoyun from Doha's side, eye level, Doha's shoulder in the near foreground — one frame.
- composition: Screen-right near foreground, soft: Doha's navy blazer shoulder and the edge of his messy black hair. Middle: Seoyun's face, frontal-three-quarter, faint dark circles, lips pressed, waiting; late-afternoon light on one side of her face. Lower foreground, sharp: her RIGHT fist at chest height, a crumpled small crane folded from a silvery-white gum wrapper squeezed between her fingers. Top third: plain warm cream corridor wall in soft light.
- eyes: Seoyun looks at Doha (toward camera), waiting, then disappointed.
- emotion: 기다림 → 실망
- motion/direction: 얼굴 → 아래 주먹
- dialogue_ref: 서윤 "…설명 안 해?" (bubble 1)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain warm cream corridor wall above her head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep04 panel_060 + P1 + SEOYUN_expressions. 구겨진 껌 종이 학, 판별 불필요. 비트시트 "주먹 인서트" = 한 프레임 전경. 초록 0.

### panel_003
- scene_id: E05S01 / location: LOC_STUDENT_OFFICE → 복도(같은 축) · mood: M_DAY (늦은 오후)
- beat: ① · 긴장 7 비 · 거절
- characters: SEOYUN (전경, 멀어지는 뒷모습) · DOHA (원경)
- size: medium · aspect: 3:4
- camera: high angle wide down the corridor from above the corner, looking toward the tip box end.
- composition: Lower foreground: Seoyun from behind and above, walking fast away toward the bottom of the frame, ponytail swinging, backpack on, blazer buttoned. Far middle distance, small, at the tip box end of the corridor: Doha, one hand half raised toward her and frozen there, about to drop. The long empty corridor between them, slanted golden light bars across the floor, frosted-glass door and blank tip box small beside him. Top third: plain corridor ceiling and upper wall.
- eyes: Doha looks after her; (Seoyun's face not visible).
- emotion: 거절
- motion/direction: 원경 도하의 반쯤 든 손 → 전경 서윤(화면 아래로 빠져나감)
- dialogue_ref: 서윤 "…됐어." (bubble 1)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain corridor ceiling and upper wall) as calm, empty background.
- split: no
- gap_after: 320
- fx/note: 권장 첨부 P1 + LEADS_lineup. 320 = 월 → 화 시간 점프. 말풍선 꼬리 = 아래 서윤.

--- SCENE BREAK --- (E05S01 → E05S02 화 07:50 은행나무 오르막)

### ② 냉전 — P4~P10 (화 07:50 ~ 10:30)

### panel_004
- scene_id: E05S02 / location: LOC_GINKGO_ROAD · mood: M_DAY_OUT + `early November, the yellow ginkgo leaves beginning to fall`
- beat: ② 냉전 · 긴장 5 설 · ⟨복선 K2⟩ · 손은 잡고 말은 없다
- characters: SEOYUN · DOHA (둘 다 OUTFIT_SCHOOL, 뒷모습) · 엑스트라 학생 몇 명(원경)
- size: medium-wide · aspect: 4:3
- camera: medium two-shot from behind, slightly low, walking uphill with them.
- composition: Seoyun screen-right and Doha screen-left walking up the ginkgo avenue away from camera, their joined hands exactly in the centre of the frame (Doha's RIGHT hand holding Seoyun's LEFT hand), but their heads turned to opposite sides — Seoyun looking off to screen-right, Doha to screen-left. Doha's black backpack on his LEFT shoulder (away from Seoyun). Yellow ginkgo leaves drifting down between them, low golden morning sun, cool blue shadows, a few students far up the slope near the school building. Top third: yellow ginkgo canopy and pale morning sky.
- eyes: (뒷모습) 서로 반대쪽.
- emotion: 냉전
- motion/direction: 가운데 잡은 손 → 양 끝으로 갈라진 머리
- dialogue_ref: 서윤(생각) "학교에선 연인. 2조." (bubble 1, thought)
- bubbles: 1
- art_space: Keep the top third of the frame (soft yellow ginkgo canopy and pale sky) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 첨부 LEADS_lineup. 손잡기 방향은 ep02~04와 같다(도하 RIGHT ↔ 서윤 LEFT, 뒷모습에서 서윤 = screen-right). 입김 없음. 초록 0.

--- SCENE BREAK --- (E05S02 → E05S03 08:30 교실)

### panel_005
- scene_id: E05S03 / location: LOC_CLASSROOM · mood: M_DAY + 계절 추가구
- beat: ② · 긴장 4 코 · 예린의 눈치
- characters: SEOYUN (OUTFIT_SCHOOL, 앉음) · YERIN (서윤 책상에 턱을 굄) · DOHA (후경 뒤통수)
- size: medium · aspect: 3:4
- camera: two-shot at desk height, from the aisle, slightly angled.
- composition: Foreground right: Seoyun seated upright, writing, profile-three-quarter, composed tight-lipped face. Foreground left: Yerin leaning over Seoyun's desk with her chin on her hands, big white claw clip, cream cardigan sleeves over her hands, lilac phone (back side) by her elbow. Background, soft, diagonally behind across the aisle by the left windows: the back of Doha's head (messy black hair), turned away toward the window. Warm low morning light from the left windows. Top third: cream wall, edge of the curtain and soft window light.
- eyes: Yerin peers at Seoyun's face; Seoyun keeps her eyes on her notebook.
- emotion: 예린 눈치 / 서윤 단답
- motion/direction: 예린 → 서윤 → 후경 도하 뒤통수
- dialogue_ref: 예린 "너네 싸웠어?" (bubble 1) · 서윤 "아니." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (cream wall, curtain edge and soft window light) as calm, empty background for two bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 LEADS_lineup + CLASSMATES_sheet. 노트 무지. 휴대폰 뒷면. P6·P7이 이 이미지 참조.

### panel_006
- scene_id: E05S03 / location: LOC_CLASSROOM · mood: M_DAY + 계절 추가구
- beat: ② · 긴장 4 코 · 반 개그
- characters: TAEMIN (미디엄, 통로로 몸을 들이밂) · SEOYUN (발 + 얼굴 일부) · DOHA (화면 가장자리 반쪽)
- size: medium · aspect: 3:4
- camera: medium on Taemin in the aisle between the two desks, eye level, slightly low.
- composition: Middle: Taemin leaning into the aisle between Seoyun's and Doha's desks with a big open-mouthed grin, sleeves rolled up, loose tie, cowlick at the crown, black sports watch with a blank face. Lower foreground: Seoyun's foot in a white indoor slipper pushing the leg of Taemin's chair, the chair tilting slightly. Screen-left edge, cut in half by the frame: Doha's deadpan face looking out the window. Top third: plain cream wall and the top of the window curtain.
- eyes: Taemin grins at both of them; Doha looks away; Seoyun's eyes off-frame.
- emotion: 반 개그
- motion/direction: 태민 얼굴 → 아래 서윤 발 → 왼쪽 도하
- dialogue_ref: 태민 "손은 잡고 싸우네? 이게 요즘 연애냐?" (bubble 1) · 서윤 "구태민." (bubble 2, 프레임 밖 → 오른쪽 아래)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream wall and curtain top) as calm, empty background for two bubbles; Taemin's line is long.
- split: no
- gap_after: 80
- fx/note: 첨부 CLASSMATES_sheet + LEADS_lineup (+ 권장 P5). 시계 화면 무지. 땀·기호 없음.

### panel_007
- scene_id: E05S03 / location: LOC_CLASSROOM · mood: M_DAY + 계절 추가구
- beat: ② · 긴장 6 위 · ⟨타이머: 진로 상담 주간⟩ ⟨복선 E-MOM⟩
- characters: SEOYUN (바스트) · YERIN (프레임 반쪽)
- size: medium · aspect: 3:4
- camera: bust of Seoyun at her desk, eye level, Yerin half in frame.
- composition: Middle-right: Seoyun from the chest up, pen stopped mid-word above a blank notebook, her face going still. Screen-left half cut by the frame edge: Yerin casually scrolling her phone (back side, lilac case), not looking. Warm window light from the left. Top third: cream wall and soft window light.
- eyes: Seoyun stares at her stopped pen; Yerin looks at her phone.
- emotion: 시한의 압박
- motion/direction: 예린(왼쪽) → 멈춘 펜 → 서윤 얼굴
- dialogue_ref: 예린 "다음 주부터 진로 상담 주간이래. 너네 엄마도 오셔?" (bubble 1, 긴 KM) · 서윤 "…아마." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream wall and soft window light) as calm, empty background for two bubbles; Yerin's line is long.
- split: no
- gap_after: 80
- fx/note: 첨부 SEOYUN_expressions + CLASSMATES_sheet (+ 권장 P5). 노트·휴대폰 무지/뒷면.

### panel_008
- scene_id: E05S03 / location: LOC_CLASSROOM (책상 밑) · mood: M_DAY
- beat: ② · 긴장 5 비 · ⟨복선 C2⟩ · 긴장 버릇
- characters: SEOYUN (손만)
- size: insert · aspect: 1:1
- camera: extreme close-up under the desk, slightly from above.
- composition: Under the wooden desk top, in soft shade: Seoyun's two hands on her navy check skirt, quickly folding a tiny crane from a silvery-white gum wrapper. The finished crane shape is clearly readable at the centre and lower middle, head pointing to screen-left and folded down into a small hook, tail pointing to screen-right with its tip folded down once. Short trimmed nails, the white square patch just visible at the inside of her LEFT wrist under the cuff. Upper quarter: the dark underside of the desk.
- eyes: (얼굴 없음)
- emotion: 긴장 버릇
- motion/direction: 손 → 학
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 30
- fx/note: 첨부 PROPS_sheet + SEOYUN_turnaround. **두 특징 판별 크기, 학 머리 screen-left.** P9가 이 학 참조.

### panel_009
- scene_id: E05S03 / location: LOC_CLASSROOM · mood: M_DAY + 계절 추가구
- beat: ② · 긴장 5 비 · ⟨복선 TB-V1 · C2⟩ · 같은 접는 방식 2차 노출(ep01 P56~57 메아리)
- characters: SEOYUN (옆얼굴 띠 + 손) · DOHA (백팩만, 시선은 띠 밖)
- size: medium · aspect: 3:4
- camera: split — two stacked frames.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 35%): a horizontal strip of Seoyun's profile facing screen-left, eyes sliding sideways toward the aisle, annoyed; the upper half of this strip is plain cream wall. BOTTOM frame (about 65%), one deep-focus frame across the aisle at desk height: screen-left foreground, sharp: Seoyun's fingertips holding the tiny silvery-white gum-wrapper crane; screen-right middle distance, equally sharp: the clear resin crane keyring hanging from the LEFT strap of Doha's black backpack on the hook beside his chair, the faded yellowed ivory crane inside. Both cranes appear the same size on screen, at the same height, at the same angle, head to screen-left folded into a small hook, tail to screen-right folded down once — the same shape, white vs yellowed ivory.
- eyes: Seoyun (top) glances at Doha's gaze; Doha's eyes are outside the frame.
- emotion: 서윤 짜증 / 도하 응시(화면 밖)
- motion/direction: 위 서윤 옆얼굴 → 아래 왼쪽 껌 종이 학 → 오른쪽 키링 학
- dialogue_ref: 서윤(생각) "아직도 저걸 달고 다녀." (bubble 1, thought)
- bubbles: 1
- art_space: Keep the upper half of the top frame (plain cream wall above her profile) as calm, empty background.
- split: yes (2칸)
- gap_after: 160
- fx/note: 첨부 PROPS_sheet + SEOYUN_turnaround + 권장 P8. 비트시트 "2분할 + 띠 컷" = 3칸이라 **2칸으로 줄이고 두 학은 아래 칸 한 프레임의 왼쪽/오른쪽에**. 두 학 모두 두 특징 판별. 도하 얼굴은 그리지 않는다(시선은 대본이 맡음; 그의 손이 가까이 있어도 됨). 서윤이 학을 주먹에 쥐는 동작은 다음 컷으로 넘기지 않고 생략(위 칸 시선만).

--- SCENE BREAK --- (E05S03 → E05S04 10:30 쉬는 시간 복도)

### panel_010
- scene_id: E05S04 / location: LOC_HALLWAY (1반 앞) · mood: M_DAY + 계절 추가구
- beat: ② · 긴장 6 위 · ⟨타이머: 점심⟩ ⟨복선 TA-V2⟩ · 다가오는 시각
- characters: HARAM (OUTFIT_SCHOOL, 지나가는 중) · GEONU (뒤따름) · SEOYUN (OUTFIT_SCHOOL, 후경 교실 문가)
- size: medium · aspect: 3:4
- camera: corridor medium, eye level, Haram's wrist in the near foreground.
- composition: Lower foreground, sharp: Haram's wrist swinging as she walks, a small brass key on a crimson cord around it, the key mid-swing catching the window light. Middle: Haram in profile walking toward screen-left, upright, thin silver rectangular glasses, crimson armband on her LEFT arm, speaking over her shoulder; behind her, a head taller, Geonu with a black blank clipboard. Background, soft: the open sliding door of class 2-1 and Seoyun standing in the doorway, frozen. Corridor windows on one side with yellow ginkgo outside. Top third: plain cream upper wall and ceiling.
- eyes: Haram looks ahead (formal); Seoyun stares at the key.
- emotion: 다가오는 시각
- motion/direction: 전경 열쇠 → 하람 → 후경 문가 서윤
- dialogue_ref: 하람 "제보함, 점심에 엽니다." (bubble 1) · 건우 "네, 부장." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall and ceiling) as calm, empty background for two bubbles.
- split: no
- gap_after: 160
- fx/note: 첨부 HARAM_turnaround + SEOYUN_turnaround. HARAM_BRASS_KEY(§P) 동작구 `the small brass key on a crimson cord around her wrist swinging as she walks` + `plain brass with no engraving, number or tag`. 진홍 = 완장 둘 + 끈뿐. 클립보드 무지.

--- SCENE BREAK --- (E05S04 → E05S05 12:40 교실)

### ③ 호출 — P11~P18 (화 12:40 ~ 12:45)

### panel_011
- scene_id: E05S05 / location: LOC_CLASSROOM (앞문 쪽) · mood: M_DAY
- beat: ③ 호출 · 긴장 6 위 · ⟨복선 M1⟩
- characters: GEONU (앞문, 중경) · DOHA (전경, 일어섬) · 반 엑스트라
- size: medium-wide · aspect: 4:3
- camera: wide from the window side toward the front door, Doha in the near foreground.
- composition: Screen-left foreground: Doha rising from his window-side desk without hurry, blazer open, one hand on the desk. Middle-right: Geonu filling the front sliding door, big and gentle, crimson armband on his LEFT arm, black blank clipboard, hesitant face. Between them, the class turning in their seats, a murmur (heads turning, some navy knit vests on extras). Noon light from the left windows. Top third: the plain empty green chalkboard area and cream wall above the door.
- eyes: Geonu looks at Doha; the class looks back and forth; Doha looks at Geonu, calm.
- emotion: 호출
- motion/direction: 앞문 건우 → 반 → 전경 도하
- dialogue_ref: 건우 "백도하. 부장이… 학생부실 앞으로 오래요." (bubble 1, 긴 KM)
- bubbles: 1
- art_space: Keep the top third of the frame (the blank chalkboard top and plain cream wall above the door) as calm, empty background; the line is long.
- split: no
- gap_after: 160
- fx/note: 첨부 DOHA_turnaround + CLASSMATES_sheet. 칠판 무지, 시계 숫자 없음. 엑스트라 니트 조끼는 남색만. 서윤은 그리지 않거나 아주 작게.

--- SCENE BREAK --- (E05S05 → E05S06 모퉁이)

### panel_012
- scene_id: E05S06 / location: LOC_HALLWAY (모퉁이) · mood: M_DAY
- beat: ③ · 긴장 5 코·비 · ep04 P56 구도 메아리 · 자존심 개그
- characters: SEOYUN (OUTFIT_SCHOOL, 바스트, 벽에 등을 붙임)
- size: medium · aspect: 3:4
- camera: bust of Seoyun against the corner wall, the wall edge in the near foreground, long lens down the corridor behind her.
- composition: Screen-left foreground, soft: the vertical edge of the corner wall (pale green lower wall, cream upper wall). Middle-right: Seoyun with her back flat against the wall, chin up, pretending not to listen, sideways glance. Deep behind her shoulder, at the vanishing point of the corridor: the frosted-glass door of the student-discipline office with the blank locked wooden tip box beside it, small. Midday light higher and shorter than ep04. Top third: plain cream upper wall.
- eyes: Seoyun's eyes slide sideways toward the far end of the corridor.
- emotion: 자존심 개그
- motion/direction: 서윤 → 어깨 너머 소실점 제보함
- dialogue_ref: 서윤(생각) "따라온 거 아니야." (bubble 1, thought) · 서윤(생각) "이쪽이 화장실이야." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background for two thought bubbles.
- split: no
- gap_after: 80
- fx/note: **첨부 ep04 panel_056(필수)** + SEOYUN_expressions (+ 선택 ep04 panel_058). **P16·P20·P25·P26이 이 이미지 참조.** 화장실 문은 그리지 않는다(대사만, 프롬프트에 'restroom' 금지).

--- SCENE BREAK --- (교차 편집: E05S06 모퉁이 → E05S07 제보함 앞)

### panel_013
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ③ · 긴장 6 위 · ⟨복선 TA-V2 · TA-D⟩ · 절차
- characters: HARAM (열쇠 꽂은 손) · GEONU (클립보드) · DOHA (OUTFIT_SCHOOL, 정면에 섬)
- size: medium · aspect: 3:4
- camera: side medium along the wall with the tip box, Haram's hand and the key in the near foreground.
- composition: Screen-left foreground, sharp: the locked small wooden tip box with a slot mounted on the wall (plain wood, small lock, no sign, label or writing), the small brass key turned in the tip box's small lock, its crimson cord still looped around Haram's wrist (plain brass with no engraving, number or tag). Middle: Haram in profile, silver rectangular glasses, bob tucked behind the RIGHT ear with a black hairpin, crimson armband on her LEFT arm; behind her shoulder, Geonu holding a black clipboard with blank paper. Screen-right: Doha standing in front of them, blazer open, hands empty, calm. Beside the box: the plain frosted-glass door. Top third: plain cream wall above the box and the door.
- eyes: Haram looks at Doha while turning the key; Doha looks at her, steady.
- emotion: 절차
- motion/direction: 열쇠(전경) → 하람 → 도하
- dialogue_ref: 하람 "어제 넣은 쪽지, 백도하 씨 겁니까?" (bubble 1, 긴 KM) · 도하 "응." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream wall above the tip box and the door) as calm, empty background for two bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep03 panel_045(같은 제보함·열쇠) + HARAM_turnaround + DOHA_turnaround (3장 한도 → ep03 이미지가 없으면 그 자리에 HARAM_expressions 대신 넣지 말고 2장으로). **P14·P15·P17·P19·P21~P24가 이 이미지 참조.** 학 이미지 첨부 금지.

### panel_014
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE (제보함 안) · mood: M_DAY
- beat: ③ · 긴장 6 비 · ⟨복선 TA-V3⟩ · 평평한 사각 = ep04 P53·P57
- characters: HARAM (손가락만)
- size: insert · aspect: 1:1
- camera: extreme close-up into the opened tip box, from just above its lid.
- composition: The open wooden tip box (plain bare wood inside, nothing else in it). Centre and lower middle, sharp: Haram's two fingers lifting out a single small plain white paper note folded flat in four into a small square about half the size of a palm — crisp straight creases, one slightly ragged edge from a torn notebook page, blank on every visible side, NOT a crane and not folded into any shape: no head, no tail, no wings. The open lid and the small brass key on its crimson cord at the edge of the frame. Upper quarter: plain soft wood and shadow.
- eyes: (얼굴 없음)
- emotion: 확인
- motion/direction: 손가락 → 사각 쪽지
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: DOHA_NOTE_FLAT(§P) 원문. **학 모양이 생기면 REGEN.** 첨부 HARAM_turnaround + 권장 P13. **PROPS_sheet·학 이미지 첨부 금지.**

### panel_015
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ③ · 긴장 7 위·비 · ⟨복선 TA-D2⟩ · 읽히길 마다하지 않는 제보자
- characters: HARAM (OTS 전경) · DOHA (바스트)
- size: medium · aspect: 3:4
- camera: over Haram's shoulder onto Doha's bust, eye level.
- composition: Screen-left foreground, soft: Haram's shoulder with the crimson armband and the edge of her silver glasses with a bright reflection sliding across the lens; in her lowered hand, the small folded flat square note, still closed. Middle-right: Doha from the chest up, blazer open, flat calm face, no hesitation. Plain frosted-glass door behind him. Top third: plain cream wall above their heads.
- eyes: Doha looks straight at Haram; Haram's eyes hidden behind the lens glare (only the reflection).
- emotion: 하람 경계 / 도하 담담
- motion/direction: 전경 하람(왼쪽) → 도하(오른쪽)
- dialogue_ref: 하람 "소리 내서 읽겠습니다." (bubble 1, 왼쪽 위) · 도하 "읽어." (bubble 2, 오른쪽 위)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream wall above their heads) as calm, empty background for two bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 HARAM_turnaround + DOHA_turnaround + 권장 P13. 쪽지는 닫힌 평평한 사각, 학 금지.

--- SCENE BREAK --- (교차 편집: E05S07 → E05S06 모퉁이)

### panel_016
- scene_id: E05S06 / location: LOC_HALLWAY (모퉁이) · mood: M_DAY
- beat: ③ · 긴장 8 위 · 공포
- characters: SEOYUN (얼굴 클로즈업 + 벽 짚은 손)
- size: medium · aspect: 3:4
- camera: close-up of Seoyun at the same corner as P12, the wall edge in the near foreground.
- composition: Screen-left foreground, sharp: her RIGHT hand pressed against the corner wall edge, fingertips white from pressure. Middle-right: Seoyun's face close, three-quarter, breath held, eyes fixed down the corridor, faint dark circles, a loose strand at the temple. Top third: plain cream upper wall.
- eyes: Seoyun stares toward the tip box end of the corridor (screen-left depth), afraid.
- emotion: 공포
- motion/direction: 하얀 손끝(전경) → 서윤 눈
- dialogue_ref: 서윤(생각) "내 이름이 나오면…" (bubble 1, thought) · 서윤(생각) "끝이야." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background for two thought bubbles.
- split: no
- gap_after: 80
- fx/note: **첨부 P12(필수)** + SEOYUN_expressions(얼어붙음). 비트시트 "손 인서트" = 한 프레임 전경.

--- SCENE BREAK --- (교차 편집: E05S06 → E05S07)

### panel_017
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ③ · 긴장 8 위 · 낭독 1 · 이미지 글자 0(내용은 대사로만)
- characters: HARAM (바스트, 펼친 쪽지) · DOHA (전경 어깨)
- size: medium · aspect: 3:4
- camera: bust of Haram from Doha's side, Doha's shoulder in the near foreground.
- composition: Screen-right foreground, soft: Doha's navy blazer shoulder. Middle-left: Haram from the chest up reading aloud, the unfolded note held up at chin height in both hands with its plain blank back toward the camera — only the faint cross of its fold creases shows, nothing written or showing through, its inside facing her and hidden by the angle. Her face fully readable above it: silver rectangular glasses, cool focus, lips mid-word. Plain frosted-glass door behind. Top third: plain cream wall above her head.
- eyes: Haram reads the note.
- emotion: 낭독
- motion/direction: 쪽지(무지 뒷면) → 하람 입
- dialogue_ref: 하람 "'솔내동 사거리에 밤마다 있는 서진고 학생,'" (bubble 1, 긴 KM — 폭 넓게)
- bubbles: 1
- art_space: Keep the top third of the frame across the whole width (plain cream wall above her head) as calm, empty background; the line is long.
- split: no
- gap_after: 30
- fx/note: 첨부 HARAM_turnaround + 권장 P13. **쪽지 안쪽 절대 안 보임, 뒷면·주름만, 비침 0.** 학 이미지·PROPS 첨부 금지. 쪽지가 얼굴을 가리지 않게(턱 높이).

### panel_018
- scene_id: E05S07 (위 칸) + E05S06 (아래 칸) / location: LOC_STUDENT_OFFICE + LOC_HALLWAY (모퉁이) · mood: M_DAY
- beat: ③ · 긴장 8 비 · 예상이 흔들림
- characters: HARAM (입가) · SEOYUN (눈)
- size: medium · aspect: 3:4
- camera: split — two stacked frames, cross-cut.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 55%): close-up of Haram's lower face, lips mid-word, the bottom rim of her silver glasses at the top edge, the blank back of the note at the lower edge; the upper part of this frame is a plain soft cream wall blur. BOTTOM frame (about 45%): extreme close-up of Seoyun's LEFT eye at the corner, widening, see-through bangs, the edge of the corner wall.
- eyes: Seoyun's eye goes wide.
- emotion: 예상이 흔들림
- motion/direction: 위 하람 입 → 아래 서윤 눈
- dialogue_ref: 하람 "'저입니다.'" (bubble 1, 위 칸)
- bubbles: 1
- art_space: Keep the upper part of the top frame (plain soft cream wall blur above her lips) as calm, empty background.
- split: yes (2칸)
- gap_after: 160
- fx/note: 첨부 HARAM_turnaround + SEOYUN_expressions + 권장 P16. 쪽지 안쪽 안 보임. 160 = 반전 A 직전 숨.

--- SCENE BREAK --- (E05S07 반전 A)

### ④ 반전 A + 코미디 — P19~P26 (화 12:45)

### panel_019
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ④ · 긴장 **9** 비 · **⟨반전 A 정점⟩** ⟨복선 회수: ep04 P51·P53, P01·P13·P15 · M1 해소⟩ · 도하는 자기 자신을 신고했다
- characters: HARAM (측면, 쪽지) · DOHA (정면에 가까움)
- size: full-bleed · aspect: 9:16
- camera: tall side two-shot at eye level, the note exactly between them.
- composition: Screen-left: Haram in profile from the waist up, holding the unfolded note at chest height out between them, its plain blank back angled toward the camera (fold creases only, inside hidden). Screen-right: Doha standing square, turned toward the camera more than toward her, blazer open, hands loose, completely flat face. On the wall behind them: the blank locked tip box, its lid open, and the frosted-glass door. Calm midday corridor light, very still. A lot of plain wall above them. Top fifth: plain cream wall and ceiling.
- eyes: Haram reads the last line; Doha looks ahead, unblinking.
- emotion: 충격(독자) / 담담(도하)
- motion/direction: 정지 — 쪽지(가운데) → 도하 얼굴
- dialogue_ref: 하람 "'2학년 1반, 백도하.'" (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (plain cream wall and ceiling above their heads) as calm, empty background.
- split: no
- gap_after: 160
- fx/note: 첨부 HARAM_turnaround + DOHA_turnaround + 권장 P13. **단독 대형 반전 컷**(앞 P18 160, 뒤 160). 쪽지 안쪽·글씨 0, 학 금지. 말풍선 꼬리 = 하람.

--- SCENE BREAK --- (교차 편집: E05S07 → E05S06)

### panel_020
- scene_id: E05S06 / location: LOC_HALLWAY (모퉁이) · mood: M_DAY
- beat: ④ · 긴장 8 비 · 반전 직후 리액션 1컷 · 뒤집힌 의심
- characters: SEOYUN (반신, 살짝 하이)
- size: medium · aspect: 3:4
- camera: slightly high angle, half-body, at the same corner wall.
- composition: Seoyun from the waist up against the corner wall, her RIGHT hand sliding down the wall edge, shoulders dropping; her other hand at her side opening loosely, the crumpled silvery-white gum-wrapper crane in her palm half unfolding as her grip goes slack. Eyes wide, lips parted, no tears. Corridor floor and wall around her, midday light.
- eyes: Seoyun stares at nothing in front of her.
- emotion: 뒤집힌 의심
- motion/direction: 미끄러지는 손 → 풀리는 손바닥의 학
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: **첨부 P12(필수)** + SEOYUN_expressions. 학 판별 불필요.

--- SCENE BREAK --- (교차 편집: E05S06 → E05S07)

### panel_021
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ④ · 긴장 6 비 · ⟨복선 D-5: ep03 "거짓말은 안 해"⟩ ⟨이중의미⟩
- characters: HARAM (바스트) · DOHA (바스트)
- size: medium-wide · aspect: 4:3
- camera: side two-shot at bust level, facing each other.
- composition: Screen-left: Haram from the chest up in three-quarter, refolding the note flat along its creases (blank side out), a judging look. Screen-right: Doha from the chest up, facing her, flat calm face. The frosted-glass door between them in the background. Their heads in the lower three-fifths of the frame. Top two-fifths: plain cream wall across the whole width.
- eyes: Haram looks at Doha, assessing; Doha looks back, steady.
- emotion: 담담
- motion/direction: 하람(왼쪽) → 도하(오른쪽)
- dialogue_ref: 하람 "본인 신고네요." (bubble 1, 왼쪽 위) · 도하 "거짓말은 안 썼어." (bubble 2, 오른쪽 위)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain cream wall) as calm, empty background for two bubbles, one above each speaker.
- split: no
- gap_after: 80
- fx/note: 첨부 HARAM_turnaround + DOHA_turnaround + 권장 P13. 비트시트 "교차" = 한 프레임 측면 투샷. 쪽지 무지 평평한 사각.

### panel_022
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY (아래 칸 = 회색조 기억)
- beat: ④ · 긴장 7 비 · ⟨복선 W1 · C9(4차)⟩ · 첫 제보자는 따로
- characters: HARAM (클로즈업 + 손) — 아래 칸은 손만(기억)
- size: medium · aspect: 3:4
- camera: split — two stacked frames.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 62%): close-up of Haram looking down, silver glasses, the small flat square note refolded in her fingers at the lower edge (folded flat in four, crisp creases, blank, NOT a crane); the upper half of this frame is plain soft cream wall. BOTTOM frame (about 38%): a desaturated grey-toned memory image — Haram's fingers holding a clumsy crane-shaped folded note of plain paper with a plain round head and a plain straight tail (NOT the hook-head / folded-tail fold), one wing half open showing a blank inside, soft edges, washed-out grey.
- eyes: Haram looks down at the flat square, thinking precisely.
- emotion: 정밀한 의심
- motion/direction: 위 평평한 사각 → 아래 학 모양 쪽지(대비)
- dialogue_ref: 하람 "첫 번째 제보는 학으로 접혀 있었는데." (bubble 1, 긴 KM) · 하람 "이건 아니네요." (bubble 2)
- bubbles: 2
- art_space: Keep the upper half of the top frame (plain soft cream wall above her head) as calm, empty background for two stacked bubbles.
- split: yes (2칸)
- gap_after: 80
- fx/note: 첨부 HARAM_turnaround + HARAM_expressions + 권장 P13. 비트시트 "기억 인셋" = 아래 칸(회색조). **위 칸 쪽지 = 평평한 사각, 아래 칸 = 학 모양(두 특징 없음).** ep03 panel_046 첨부는 하지 않는다(위 칸 사각을 학으로 끌고 갈 위험, §7 의문 6). 두 쪽지 모두 안쪽 무지.

### panel_023
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE · mood: M_DAY
- beat: ④ · 긴장 6 위 · ⟨복선 회수: ep04 P49 현장 / P-REC⟩ · 하람의 계산
- characters: HARAM (미디엄, 클립보드) · DOHA (가장자리) · GEONU (뒤)
- size: medium · aspect: 3:4
- camera: medium on Haram, her clipboard hand in the near foreground.
- composition: Lower foreground, sharp: a black clipboard with blank paper, Haram's fingers sliding the small folded flat square note under its clip (blank, not a crane). Middle: Haram from the waist up, upright, closing the matter with a cool face, crimson armband on her LEFT arm. Behind her shoulder: Geonu, big, watching. Screen-right edge, soft: Doha's open blazer and hand. Top two-fifths: plain cream wall above their heads.
- eyes: Haram looks at the clipboard, then up at Doha.
- emotion: 하람의 계산
- motion/direction: 클립보드(전경) → 하람 얼굴
- dialogue_ref: 하람 "본인이 거기 있다고 썼으니, 현장에서 제가 확인할 건 없네요." (bubble 1, 긴 KM) · 하람 "담임 선생님께 그대로 올리겠습니다." (bubble 2, 긴 KM)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain cream wall above their heads) as calm, empty background for two long stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 HARAM_turnaround + 권장 P13. 클립보드·쪽지 무지, 펜 자국 없음. 긴 KM 두 줄 → 위쪽 2/5 전폭.

### panel_024
- scene_id: E05S07 / location: LOC_STUDENT_OFFICE (모퉁이 방향) · mood: M_DAY
- beat: ④ · 긴장 7 비·위 · ⟨복선 W1 유지⟩ · 화살이 "현장"에서 "첫 제보자"로
- characters: HARAM (정면 클로즈업, 돌아서는 중) · (원경 모퉁이, 사람 판별 불가)
- size: medium · aspect: 3:4
- camera: frontal close-up of Haram turning, long lens, the far corner of the corridor blurred behind her.
- composition: Middle-right: Haram's face close, three-quarter, mid-turn, her eyes sliding once toward screen-left. Deep behind her at screen-left, very soft: the corner of the corridor where it turns (pale green lower wall, cream upper) — no clear figure, at most an unreadable shadow at the wall edge, so it stays ambiguous whether anyone is there. Midday light. Top third: plain cream wall blur.
- eyes: Haram's eyes flick toward the far corner (screen-left depth) — ambiguous.
- emotion: 더 정확해진 위협
- motion/direction: 하람 얼굴 → 시선 → 원경 모퉁이
- dialogue_ref: 하람 "그럼 첫 번째로 넣은 사람은," (bubble 1) · 하람 "뭘 본 걸까요." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain soft cream wall blur) as calm, empty background for two bubbles.
- split: no
- gap_after: 160
- fx/note: 첨부 HARAM_expressions + HARAM_turnaround. **모퉁이에 서윤을 또렷이 그리지 않는다**(봤는지는 모호).

--- SCENE BREAK --- (교차 편집: E05S07 → E05S06 모퉁이 코미디)

### panel_025
- scene_id: E05S06 / location: LOC_HALLWAY (모퉁이) · mood: M_DAY
- beat: ④ · 긴장 4 코 · ⟨복선 회수: ep04 P54 "자수하러 가나?"⟩
- characters: TAEMIN (튀어나옴) · SEOYUN (기겁)
- size: medium-wide · aspect: 4:3
- camera: two-shot at the corner, eye level, slightly tilted.
- composition: Screen-right: Taemin popping out from behind the corner right behind Seoyun, leaning forward, mouth wide open mid-shout, cowlick up, sleeves rolled, motion blur on his hair and loose tie. Screen-left: Seoyun spinning around in shock, eyes huge, her RIGHT hand flying up toward his mouth. Exaggerated tilted poses only (no speed lines, no sweat drops, no symbols). Corner wall between them. Top third: plain cream upper wall.
- eyes: Taemin looks down the corridor, thrilled; Seoyun glares at him in horror.
- emotion: 반 개그
- motion/direction: 태민(오른쪽) → 서윤 손(왼쪽)
- dialogue_ref: 태민 "자수했어?! 백도하 진짜 자수했어?!" (bubble 1, shout, 긴 KM)
- bubbles: 1
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background; the shout is long.
- split: no
- gap_after: 30
- fx/note: 첨부 CLASSMATES_sheet + SEOYUN_expressions + 권장 P12. 만화 기호 대체 = 모션 블러·기울어진 자세.

### panel_026
- scene_id: E05S06 / location: LOC_HALLWAY (모퉁이) · mood: M_DAY
- beat: ④ · 긴장 3 코 · 건조한 개그
- characters: GEONU (미디엄, 지나감) · TAEMIN (입 막힘) · SEOYUN (손으로 막음)
- size: medium · aspect: 3:4
- camera: medium from the corridor side, eye level.
- composition: Screen-right, larger: Geonu passing by the corner after Haram, big gentle build, crimson armband on his LEFT arm, black blank clipboard, small kind eyes, hesitant face turned toward the two. Screen-left, smaller: Seoyun with her hand clamped over Taemin's mouth, Taemin's cheeks puffed, mumbling. Haram is out of frame ahead. Top third: plain cream upper wall.
- eyes: Geonu looks at Taemin, slowly; Taemin's eyes roll toward Seoyun.
- emotion: 건조한 개그
- motion/direction: 건우(오른쪽 위) → 막힌 태민(왼쪽 아래)
- dialogue_ref: 건우 "…자수가 아니라 본인 신고입니다." (bubble 1, 오른쪽 위) · 태민 "흡, 그게 그거잖아." (bubble 2, 왼쪽 위, 작게)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain cream upper wall) as calm, empty background for two bubbles.
- split: no
- gap_after: 160
- fx/note: 첨부 CLASSMATES_sheet + SEOYUN_turnaround + 권장 P12. 건우 토큰만. 비트시트 "태민 웅얼 소컷" = 한 프레임 왼쪽.

--- SCENE BREAK --- (E05S06 → E05S08 12:55 계단참)

### ⑤ 분노 — P27~P35 (화 12:55)

### panel_027
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ 분노 · 긴장 6 위 · ⟨구도: ep04 P5⟩ · 폭발 직전
- characters: SEOYUN (한 칸 위) · DOHA (한 칸 아래, 백팩 왼쪽 어깨)
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level, stairs rising from screen-left (low) to screen-right (high) — same camera as ep04 panel_005.
- composition: Seoyun screen-right, one step higher, just letting go of the cuff of Doha's navy blazer sleeve she dragged him up by, her face hard. Doha screen-left one step lower, blazer open, black backpack on his LEFT shoulder (strap toward camera, the resin keyring small and soft at chest height). The locked grey steel rooftop door at upper right, two old desks and chairs stacked against the wall, dusty window with soft apricot backlight, hazy rim light on hair and shoulders, cool violet shadows on the worn concrete steps. Top third on the left: plain soft apricot haze and wall.
- eyes: Seoyun glares down at Doha; Doha looks up at her, calm.
- emotion: 폭발 직전
- motion/direction: 놓는 손 → 서윤 얼굴
- dialogue_ref: 서윤 "너 미쳤어?" (bubble 1)
- bubbles: 1
- art_space: Keep the top third of the frame (plain soft apricot haze and wall above their heads) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: **첨부 ep04 panel_005(필수)** + LEADS_lineup. 노을 없음(점심). **P28~P35가 이 이미지 참조, P31은 필수.**

### panel_028
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 6 위 · ⟨복선 P-REC⟩ · 사실 대 사실
- characters: SEOYUN (바스트, 위) · DOHA (전경 어깨, 아래)
- size: medium · aspect: 3:4
- camera: over Doha's shoulder looking up at Seoyun on the higher step, slight low angle.
- composition: Lower left foreground, soft: Doha's shoulder and the back of his messy black hair. Middle-right, higher: Seoyun from the chest up, arms folded, pressing her point with a sharp face, apricot rim light on her ponytail. Rooftop door and dusty window above and behind her. Top third: plain soft apricot haze around the window.
- eyes: Seoyun looks down at Doha, sharp; (Doha's face out of frame).
- emotion: 서윤 분노 / 도하 담담
- motion/direction: 서윤 → 전경 도하 어깨
- dialogue_ref: 서윤 "그 쪽지로 네 이름이 기록에 올라가." (bubble 1, 오른쪽 위) · 도하 "이미 올라가 있어." (bubble 2, 왼쪽, 꼬리 → 전경 어깨)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain soft apricot haze around the window) as calm, empty background for two bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 SEOYUN_expressions + DOHA_turnaround + 권장 P27. 비트시트 "교차" = 한 프레임 OTS.

### panel_029
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 7 비 · ⟨복선 FLAW: ep04 P9 회수⟩ · 이 회차의 핵심 대사
- characters: SEOYUN (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up, slightly low angle, backlit.
- composition: Seoyun's face filling the middle of the frame, frontal, slightly from below, apricot backlight from the dusty window behind her rimming her hair and the loose temple strands, her face in soft shadow but fully readable: jaw set, eyes bright with anger, faint dark circles. Top quarter: plain soft apricot haze.
- eyes: Seoyun looks straight down at Doha (toward camera).
- emotion: 분노
- motion/direction: 정면 정지
- dialogue_ref: 서윤 "왜 네 맘대로 해." (bubble 1)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain soft apricot haze above her head) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 첨부 SEOYUN_expressions + 권장 P27. 말풍선이 얼굴에 겹치지 않게.

### panel_030
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 7 비 · ⟨복선 FLAW⟩ ⟨이중의미⟩ · 처음 말하는 이유
- characters: DOHA (정면 바스트, 위를 봄)
- size: medium · aspect: 3:4
- camera: frontal bust of Doha from Seoyun's higher eye line, slight high angle.
- composition: Doha from the chest up, frontal, looking up toward the camera (her), blazer open, the LEFT strap of his backpack on his shoulder (on the viewer's right) with the resin keyring small and soft at the lower edge. Apricot window light falls on his face from above. Worn concrete steps and violet shadow below and behind him. His head in the lower-middle of the frame. Top two-fifths: plain soft wall and violet shadow above his head.
- eyes: Doha looks up into her eyes, steady, protective.
- emotion: 보호
- motion/direction: 정면 정지
- dialogue_ref: 도하 "채하람이 사거리에 오면, 넌 숨을 데가 없어." (bubble 1, 긴 KM) · 도하 "난 거기 있어도 돼." (bubble 2)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain soft wall and violet shadow above his head) as calm, empty background for two bubbles; the first line is long.
- split: no
- gap_after: 80
- fx/note: 첨부 DOHA_expressions + DOHA_turnaround + 권장 P27. 키링 판별 불필요.

### panel_031
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 6 비 · ⟨복선 FLAW⟩ · 같은 칸, 사과 없음
- characters: SEOYUN · DOHA (같은 높이)
- size: medium-wide · aspect: 4:3
- camera: side two-shot, eye level — the same camera as P27.
- composition: Seoyun has stepped down one step and now stands on the same step as Doha: Seoyun screen-right, Doha screen-left, face to face, the top of her head at his chin. She looks up at him, hurt under the anger; he looks down at her, plain and unapologetic. Same rooftop door upper right, stacked desks, dusty window apricot backlight, violet shadows. Heads in the lower three-fifths. Top two-fifths: plain soft apricot haze across the whole width.
- eyes: Seoyun looks up into his face; Doha looks straight back.
- emotion: 서윤 상처 / 도하 인정
- motion/direction: 서윤(오른쪽) ↔ 도하(왼쪽)
- dialogue_ref: 서윤 "그래서 네가 정했어? 나한테 묻지도 않고?" (bubble 1, 오른쪽 위, 긴 KM) · 도하 "…안 물었어." (bubble 2, 왼쪽 위)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain soft apricot haze) as calm, empty background for two bubbles, one above each speaker.
- split: no
- gap_after: 80
- fx/note: **첨부 P27(필수)** + LEADS_lineup. ep04 P9의 "같은 칸" 구도, 이번엔 서윤이 내려옴.

### panel_032
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 6 비 · 서윤 want(숨긴 채 이기기) · 키링
- characters: SEOYUN (옆얼굴 클로즈업) · DOHA (엄지·키링, 전경)
- size: medium · aspect: 3:4
- camera: close profile of Seoyun, Doha's hand at the backpack strap in the near foreground — one frame.
- composition: Middle-right: Seoyun's profile close, facing screen-left, chin up, proud, apricot rim light along her nose and lips. Lower-left foreground, soft: Doha's thumb resting on the clear resin crane keyring on the LEFT strap of his backpack, the faded ivory crane inside blurred (features not readable). Top third: plain soft apricot haze.
- eyes: Seoyun looks ahead past him, refusing to look at him.
- emotion: 자존심
- motion/direction: 서윤 옆얼굴 → 아래 엄지·키링
- dialogue_ref: 서윤 "나 덮어 달라고 한 적 없어." (bubble 1, 긴 KM) · 서윤 "한 번도." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain soft apricot haze) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 SEOYUN_expressions + DOHA_turnaround + 권장 P27. **키링 흐림(판별 불가).** 비트시트 "인서트" = 한 프레임 전경.

### panel_033
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 7 비 · ⟨복선 TB-D1 · C3 · C2⟩ · 독자의 예측(따라 접었다)을 서윤이 말로 꺼냄
- characters: SEOYUN (손가락) · DOHA (엄지·키링·가슴)
- size: medium · aspect: 3:4
- camera: medium close on the keyring at chest height, Seoyun's pointing finger entering from screen-right.
- composition: Middle: Doha's chest in the open blazer and the LEFT backpack strap, his thumb just lifting off the clear resin crane keyring; the faded ivory crane inside visible as a shape but soft and not sharp enough to read its fold details. Screen-right foreground: Seoyun's index finger pointing at it, her blazer cuff, the white patch hidden. Doha's chin at the top edge. Top third: plain soft apricot haze and wall.
- eyes: (얼굴 거의 없음) Seoyun's gaze implied on the keyring.
- emotion: 의심
- motion/direction: 서윤 손가락(오른쪽) → 키링(가운데)
- dialogue_ref: 서윤 "그 학도 그래. 내 식으로 접혀 있더라." (bubble 1, 긴 KM) · 서윤 "따라 접은 거야?" (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain soft apricot haze and wall) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 DOHA_turnaround + 권장 P27. **학 두 특징 흐리게(판별 불가) — P51을 위해 아낀다**(style-bible §5-2-5 원칙). PROPS_sheet 첨부 금지.

### panel_034
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 8 비 · ⟨복선 TB-D2⟩ · 예측 해제 1
- characters: DOHA (정면 클로즈업)
- size: medium · aspect: 3:4
- camera: frontal close-up of Doha, eye level (she is on the same step).
- composition: Doha's face in the middle, frontal, bangs over his eyebrows, sleepy half-lidded eyes now fully open on her, mouth closed after the line, no smile; apricot side light, mole on the LEFT side of his neck below the ear (on the viewer's right) just visible. Top quarter: plain soft apricot haze.
- eyes: Doha looks straight at Seoyun (toward camera).
- emotion: 말을 아낌
- motion/direction: 정면 정지
- dialogue_ref: 도하 "난 학 안 접어." (bubble 1)
- bubbles: 1
- art_space: Keep the top quarter of the frame (plain soft apricot haze above his head) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 첨부 DOHA_expressions + 권장 P27.

### panel_035
- scene_id: E05S08 / location: LOC_STAIR_LANDING · mood: M_LANDING
- beat: ⑤ · 긴장 **9** 비 · **⟨복선 TB-D3 = 끝 반전 1단계⟩** ⟨이중의미⟩ · 3분위 정점 · 예측이 부서짐
- characters: SEOYUN (위, 혼자) · DOHA (내려가는 등)
- size: large · aspect: 9:16
- camera: tall side view of the stairwell from the landing, slightly high angle.
- composition: Upper right of the tall frame: Seoyun alone on the higher step, small against the dusty apricot window and the locked grey rooftop door, one hand half lifted. Lower left: Doha already several steps down, seen from behind and above, walking down without looking back, blazer open, black backpack on his LEFT shoulder, the resin keyring a tiny soft shape on the strap. The worn concrete flight between them falling away into cool violet shadow. Dust motes in the backlight. Top fifth: plain soft apricot haze above the window.
- eyes: Seoyun stares after him; (Doha's face not visible).
- emotion: 예측이 부서짐
- motion/direction: 위 서윤 → 아래로 멀어지는 도하
- dialogue_ref: 서윤 "그럼 뭔데." (bubble 1, 위 오른쪽) · 도하 "받은 거야." (bubble 2, 꼬리 → 아래 도하) · 효과음 예비 종 (sfx, 창 쪽)
- bubbles: 2 + sfx 1
- art_space: Keep the top quarter of the frame (plain soft apricot haze above the window and the upper stairwell wall) as calm, empty background for two bubbles and the bell sound effect.
- split: no
- gap_after: 320
- fx/note: 첨부 LEADS_lineup + 권장 P27. 종 효과음은 뷰어(이미지에 글자·스피커 표시 없음). 320 = 낮 → 수요일 00:20.

--- SCENE BREAK --- (E05S08 → E05S09 수 00:20 편의점)

### ⑥ 밤 편의점 · 01:00 교대 — P36~P47 (수 00:20 ~ 01:00)

### panel_036
- scene_id: E05S09 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑥ · 긴장 5 비 · ⟨복선 C7 · C2⟩ · 화가 났어도 남겨 두는 손
- characters: SEOYUN (OUTFIT_STORE)
- size: medium · aspect: 3:4
- camera: side medium along the counter from its left end, the glass jar in the near foreground.
- composition: Lower-left foreground, sharp: the small lidless glass jar more than two-thirds full of tiny white paper cranes at the counter's left end; Seoyun's fingers dropping one more white receipt crane into it. Middle: Seoyun behind the counter in the plain green staff vest over her white shirt, sleeves rolled, the white square patch on the inside of her LEFT wrist, tired shoulders, frowning slightly. Far right end of the counter: the small green wire basket with a single triangle rice ball in clear wrap with a plain orange band, set apart on purpose. Flat cool white fluorescent light, cigarette shelf as plain colour blocks behind. Top third: plain fluorescent ceiling and the soft tops of the shelves.
- eyes: Seoyun looks at the orange-band rice ball in the basket.
- emotion: 화가 났어도 남겨 두는 손
- motion/direction: 유리병(전경) → 서윤 → 오른쪽 끝 주황 띠
- dialogue_ref: 서윤(생각) "받은 거라니." (bubble 1, thought) · 서윤(생각) "…누구한테." (bubble 2, thought)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain fluorescent ceiling and soft shelf tops) as calm, empty background for two thought bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 SEOYUN_night + PROPS_sheet(유리병·삼각김밥). 영수증·포장 무지. 유리병 2/3 이상. P39가 이 계산대 참조.

### panel_037
- scene_id: E05S09 / location: LOC_CVS (문 쪽) · mood: M_NIGHT
- beat: ⑥ · 긴장 6 비 · ⟨복선 TB-V2 · W4⟩ · 김 서린 동그란 안경 = 8세 토큰 메아리
- characters: DOHA (**DOHA_NIGHT_FOGGED**: OUTFIT_NIGHT, 후드 씀, 김 서린 렌즈)
- size: medium · aspect: 3:4
- camera: frontal from inside the store toward the door, eye level, chest-up framing. **Match frame for P56.**
- composition: Doha just inside the glass door, frontal, from the chest up, charcoal hood still up and framing his face, the hood's shadow only over his forehead; his thin round black-framed glasses completely fogged flat white from the cold outside air, his eyes not visible behind them, the two lenses centred at about 40% down from the top of the frame, a small bright highlight at the upper outer corner of each lens. The LEFT strap of his black backpack (on the viewer's right) with the small resin keyring, soft. Behind him: the dark glass door swinging shut, deep navy-black night, one orange streetlight. Flat cool white fluorescent light on his face. Top fifth: plain dark glass and door frame.
- eyes: hidden behind fogged lenses.
- emotion: 정적
- motion/direction: 정면 정지 — 하얀 렌즈
- dialogue_ref: 없음 (무대사) · 효과음 딩동 (sfx, 문 위쪽)
- bubbles: 0 + sfx 1
- art_space: Keep the top fifth of the frame (plain dark glass and the door frame above his hood) as calm, empty background for the door-chime sound effect.
- split: no
- gap_after: 30
- fx/note: 첨부 DOHA_night. **P56이 이 이미지 첨부(필수 매치 원본).** 렌즈 높이·반사 위치를 정확히 기록용으로 유지. 효과음 글자·차임 표시는 그리지 않는다.

### panel_038
- scene_id: E05S09 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑥ · 긴장 6 비 · ⟨복선 TB-V3⟩ · 이상한 기시감
- characters: DOHA (후드 내림, 손 + 안경) · SEOYUN (OTS 전경 + 눈 띠)
- size: medium · aspect: 3:4
- camera: split — two stacked frames.
- composition: Two stacked frames in one image separated by a thin plain white gutter. TOP frame (about 70%): over Seoyun's shoulder (screen-left foreground, soft: her ponytail and green vest shoulder) onto Doha across the counter, hood pushed back now, messy black hair; close on his hands: he has pulled the charcoal hoodie sleeves down over his hands and wipes the fogged thin round black-framed glasses with the sleeve-covered fingers, his bare eyes looking down at the lenses. BOTTOM frame (about 30%): a horizontal strip of Seoyun's eyes, still, watching; at the very edge of one iris, a single tiny point of warm yellow light.
- eyes: Doha looks at his glasses; Seoyun's eyes linger on his sleeve-covered hands.
- emotion: 이상한 기시감
- motion/direction: 위 소매 덮인 손·렌즈 → 아래 서윤 눈(노란 점)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: yes (2칸)
- gap_after: 80
- fx/note: 첨부 DOHA_night + SEOYUN_night + 권장 P37. 노란 점은 아주 작게(회상 예고, M_FLASH 아님). 도하는 DOHA_NIGHT 문구의 P38 닦기 구. 이 소매 손은 P58·P60과 **문구로만** 맞춘다(회상엔 현재 패널 첨부 금지, P51·P37 매치 원본 제외).

### panel_039
- scene_id: E05S09 / location: LOC_CVS (계산대 정면) · mood: M_NIGHT
- beat: ⑥ · 긴장 6 비 · ⟨복선 K3 역할 반전: ep02 P02~03 · C1⟩
- characters: DOHA (후드 내림, 안경, screen-left) · SEOYUN (OUTFIT_STORE, screen-right)
- size: medium-wide · aspect: 4:3
- camera: frontal two-shot from the customer side at counter height — the same axis as ep02 panel_003.
- composition: 180° rule: Doha screen-left (nearer, waist up), hood down, thin round black-framed glasses, setting the orange-band triangle rice ball from the discount basket and a few plain coins on the counter, leaning slightly toward her for the first time. Seoyun screen-right behind the counter, scanner in her RIGHT hand, not looking up, closed face, green vest, sleeves rolled, patch on the LEFT wrist. At the counter's screen-left end, small and soft: the lidless glass jar more than two-thirds full of white paper cranes. Green wire basket at the right end, now empty. Doha's backpack LEFT strap with the small keyring, soft. Their heads in the lower three-fifths. Top two-fifths: plain fluorescent ceiling and soft blurred shelves, one half above each of them.
- eyes: Doha looks at her; Seoyun keeps her eyes on the scanner.
- emotion: 냉전 / 역할 반전
- motion/direction: 도하(왼쪽) → 서윤(오른쪽)
- dialogue_ref: 도하 "물어봐도 돼." (bubble 1, 왼쪽 위) · 서윤 "열 시 넘었어. 3조." (bubble 2, 오른쪽 위)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain fluorescent ceiling and soft shelves) as calm, empty background for two bubbles, one above each speaker.
- split: no
- gap_after: 80
- fx/note: **첨부 ep02 panel_003(필수)** + DOHA_night + SEOYUN_night. 동전·포장 무지(숫자·각인 없음). 서윤은 손가락 셋을 들지 않는다(대사만, ep02의 손짓은 도하 것).

### panel_040
- scene_id: E05S09 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑥ · 긴장 7 위 · ⟨타이머 붕괴: 00:58 퇴장⟩ · W7 준비
- characters: SEOYUN (바스트) · DOHA (전경 옆얼굴)
- size: medium · aspect: 3:4
- camera: bust of Seoyun behind the counter, Doha's profile in the near foreground, eye level.
- composition: Screen-left foreground, soft: Doha's profile, glasses, his eyes turned toward the plain grey staff door behind the counter — not moving, not leaving. Middle-right: Seoyun from the chest up, startled, turning her head toward the staff door. Background wall behind the counter: the plain grey staff door with no sign at screen-left, and at mid height beside it a round wall clock with tick marks and no numerals, hour hand almost at one, minute hand pointing at eleven (00:55), clearly readable as a shape and not covered. Top quarter: plain fluorescent ceiling and upper wall.
- eyes: both look toward the staff door.
- emotion: 서윤 당황 / 도하 선택
- motion/direction: 전경 도하 시선 → 직원 문 → 서윤
- dialogue_ref: 서윤 "…사장님? 벌써?" (bubble 1, 오른쪽 위) · 효과음 계단 발소리 (sfx, 직원 문 위)
- bubbles: 1 + sfx 1
- art_space: Keep the top quarter of the frame across the whole width (plain fluorescent ceiling and upper wall above the staff door and the clock) as calm, empty background for one bubble and the footstep sound effect.
- split: no
- gap_after: 160
- fx/note: 첨부 SEOYUN_night + DOHA_night. 시계 숫자 0, 말풍선이 시계를 덮지 않게(시계는 중간 높이).

--- SCENE BREAK --- (E05S09 → E05S10 창고)

### panel_041
- scene_id: E05S10 / location: LOC_CVS_STOCKROOM · mood: M_NIGHT (천장 형광 하나 + 모니터 회색빛)
- beat: ⑥ · 긴장 6 비 · ⟨복선 HQ · W3⟩ · ep06 소반전 시각 단서 "모니터 앞에 오래 서 있다"
- characters: MISUK (등 미디엄, 팔짱) · SEOYUN (문가, 손만)
- size: medium · aspect: 3:4
- camera: Seoyun's POV from the stockroom doorway, eye level — same doorway POV as ep03 panel_048.
- composition: Screen-left foreground edge, soft: the open stockroom door frame and Seoyun's hand on it (green vest edge, rolled white sleeve). Centre: the owner with her back three-quarter toward camera, arms crossed, standing very still in front of a monitor on the wall that shows grey blurred CCTV shapes only; short tight dark-brown permed curls with grey roots, reading glasses pushed up on her head, lavender fleece under the plain green staff vest, beige arm sleeves, grey slippers. Stacked cardboard boxes with no print, mop and bucket, a small mirror, an empty hook. One flat ceiling fluorescent. Top third: plain dim ceiling.
- eyes: the owner stares at the monitor; (Seoyun's face out of frame).
- emotion: 사장님 피곤 / 서윤 의아
- motion/direction: 문틀(전경) → 사장님 등 → 회색 모니터
- dialogue_ref: 서윤 "일찍 내려오셨네요." (bubble 1, 꼬리 → 왼쪽 전경) · 사장님 "잠이 안 와서." (bubble 2, 오른쪽 위)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain dim stockroom ceiling) as calm, empty background for two bubbles.
- split: no
- gap_after: 30
- fx/note: 권장 첨부 ep03 panel_048 + MISUK_turnaround + SEOYUN_night. 휴대폰 없음. 모니터 = 회색 흐린 형체만(사람 얼굴·글자·타임스탬프 0). 고리는 빔(서윤이 조끼를 입고 있음).

### panel_042
- scene_id: E05S10 / location: LOC_CVS_STOCKROOM · mood: M_NIGHT
- beat: ⑥ · 긴장 6 비 · ⟨복선 W3 · W7⟩ · 말하지 않는 어른
- characters: MISUK (옆얼굴) · (서윤 목소리, 프레임 밖)
- size: medium · aspect: 3:4
- camera: close on the monitor in the near foreground, the owner's profile beyond.
- composition: Lower-left foreground, sharp: the edge of the monitor, its screen showing only soft grey blurred shapes (no faces, no text, no numbers, no timestamp). Middle-right: the owner's profile facing the screen, small droopy eyes reflecting the grey glow, deep smile lines, reading glasses on her head, mouth flat; she does not turn around. Dim stockroom behind. Top two-fifths: plain dim wall and ceiling.
- eyes: the owner keeps staring at the monitor.
- emotion: 말하지 않는 어른
- motion/direction: 모니터(전경) → 사장님 옆얼굴
- dialogue_ref: 서윤 "뭐 보세요?" (bubble 1, 꼬리 → 오른쪽 프레임 밖) · 사장님 "녹화. 30일은 남아. 지나면 알아서 지워지고." (bubble 2, 긴 KM)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain dim wall and ceiling) as calm, empty background for two bubbles; the owner's line is long.
- split: no
- gap_after: 160
- fx/note: 첨부 MISUK_turnaround + 권장 P41. 모니터 글자 0.

--- SCENE BREAK --- (E05S10 → E05S09 계산대)

### panel_043
- scene_id: E05S09 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑥ · 긴장 7 비 · ⟨복선 W7⟩ · **사장님과 도하, 처음으로 같은 프레임** · 확인의 시선(재독)
- characters: MISUK (OTS, 잃은 옆얼굴) · DOHA (정면 미디엄, 후드 내림, 안경)
- size: large · aspect: 9:16
- camera: over the owner's shoulder from behind the counter, eye level, tall still frame.
- composition: Screen-right foreground, large and soft: the owner's shoulder in the lavender fleece and green vest, her permed curls, the reading glasses on her head, and the edge of her cheek with one small droopy eye in lost profile, narrowing very slightly — recognition, not surprise. Middle-left, across the counter, sharp: Doha in medium shot, frontal, hood down, messy black hair, thin round black-framed glasses, standing still and not looking away, black backpack LEFT strap with the small keyring (on the viewer's right of him), soft. The counter edge across the lower part, the glass jar small at its left end. Flat cool white light, green-and-white store tones, very still. Top fifth: plain fluorescent ceiling.
- eyes: the owner looks long at Doha; Doha meets her eyes.
- emotion: 확인의 시선
- motion/direction: 사장님 어깨(전경) → 도하
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: 첨부 MISUK_turnaround + DOHA_night. 사장님 표정 과장 금지(가늘어지는 눈 정도). **P44·P45가 이 이미지 참조.** 서윤은 프레임 밖(또는 아주 작게 흐리게).

### panel_044
- scene_id: E05S09 / location: LOC_CVS (계산대 측면) · mood: M_NIGHT
- beat: ⑥ · 긴장 7 비 · ⟨복선 W7(D): ep02 "그냥 단골이요"⟩ ⟨이중의미⟩
- characters: DOHA (인사, screen-left) · MISUK (계산대 안, screen-right)
- size: medium-wide · aspect: 4:3
- camera: side two-shot across the counter, eye level.
- composition: Screen-left: Doha bowing his head politely from the customer side, hood down, glasses. Screen-right: the owner behind the counter, arms uncrossed now, hands on the counter edge, chin up, gruff flat face. The counter between them, receipt printer, card terminal with a blank screen. Behind the owner, soft: Seoyun half visible, glancing between them. Their heads in the lower three-fifths. Top two-fifths: plain fluorescent ceiling and the soft tops of the shelves.
- eyes: Doha lowers his eyes in the bow; the owner looks at him, unreadable.
- emotion: 사장님 무뚝뚝 / 도하 정중
- motion/direction: 도하(왼쪽) → 사장님(오른쪽)
- dialogue_ref: 도하 "안녕하세요." (bubble 1, 왼쪽 위) · 사장님 "…네가 그 단골이구나." (bubble 2, 오른쪽 위)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (plain fluorescent ceiling and soft shelf tops) as calm, empty background for two bubbles, one above each speaker.
- split: no
- gap_after: 30
- fx/note: 첨부 MISUK_turnaround + DOHA_night + 권장 P43. 단말기 화면 무지.

### panel_045
- scene_id: E05S09 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑥ · 긴장 4 코 · ⟨복선: ep03 P28⟩ ⟨이중의미⟩ · 동시에 다른 답
- characters: DOHA (screen-left) · MISUK (가운데) · SEOYUN (screen-right)
- size: medium-wide · aspect: 4:3
- camera: three-person medium from the customer side, eye level.
- composition: Screen-left: Doha across the counter, calm, nodding. Centre, behind the counter: the owner turned toward Seoyun, leaning a little, low voice. Screen-right, behind the counter: Seoyun, flustered, ears turning red, one hand up in denial. All three in the lower three-fifths. Top two-fifths across the whole width: plain fluorescent ceiling and soft blurred shelves.
- eyes: the owner looks at Seoyun; Seoyun looks at the owner in panic; Doha looks at the owner, calm.
- emotion: 코미디
- motion/direction: 사장님(가운데) → 서윤(오른쪽) / 도하(왼쪽) 동시
- dialogue_ref: 사장님 "남자친구야?" (bubble 1, 가운데 위) · 서윤 "아니요!" (bubble 2, 오른쪽) · 도하 "네." (bubble 3, 왼쪽) — 2·3은 같은 높이(동시)
- bubbles: 3 (이 회차 유일, 모두 짧게)
- art_space: Keep the top two-fifths of the frame across the whole width (plain fluorescent ceiling and soft shelves) as calm, empty background for three short bubbles side by side.
- split: no
- gap_after: 30
- fx/note: 첨부 MISUK_turnaround + SEOYUN_night + DOHA_night (3장 한도 → P43 첨부 생략, 배치는 문구로). 만화 기호 없음(귀 빨강만).

### panel_046
- scene_id: E05S09 / location: LOC_CVS · mood: M_NIGHT
- beat: ⑥ · 긴장 3 코 · ⟨사장님의 01:00 의식, R5⟩ · 직원에게만
- characters: MISUK (손 + 무표정 얼굴) · SEOYUN (손) · DOHA (빈손, 가장자리)
- size: medium · aspect: 3:4
- camera: close on hands over the counter, the owner's face above, eye level.
- composition: Lower middle, sharp: the owner's rough hand with a beige arm sleeve pressing one triangle rice ball in clear wrap with a plain orange band (from the grey bin) into Seoyun's open palm, the white patch on the inside of Seoyun's LEFT wrist. Screen-left lower edge, soft: Doha's empty hand resting on the counter edge — given nothing. Upper middle: the owner's face, completely blank, gruff, reading glasses on her head. Top third: plain fluorescent ceiling.
- eyes: the owner looks at nobody in particular, flat.
- emotion: 건조한 개그 / 의식
- motion/direction: 사장님 얼굴 → 건네는 손 → 서윤 손바닥
- dialogue_ref: 사장님 "…둘이 합의 좀 하고 와." (bubble 1, 긴 KM) · 사장님 "먹고 가." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (plain fluorescent ceiling above her head) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 권장 첨부 ep02 panel_009(같은 의식) + MISUK_turnaround + SEOYUN_night. 포장 무지.

--- SCENE BREAK --- (E05S09 → E05S11 편의점 앞, 01:00)

### panel_047
- scene_id: E05S11 / location: LOC_CVS_FRONT (첫 사용) · mood: M_NIGHT (유리 안 형광 흰빛 + 바깥 보도 가로등 주황, v1.4 §3-2·§7-4)
- beat: ⑥ · 긴장 6 비 · ⟨복선 W7(2차)⟩ · 말하지 않는 어른
- characters: SEOYUN (**SEOYUN_OFF_SHIFT**, 블레이저 + 백팩) · DOHA (OUTFIT_NIGHT, 후드 내림, 맑은 밤 안경, 키링 아직 왼끈, 문을 잡음) · MISUK (**MISUK_BEHIND_GLASS**, 유리 안 중경)
- size: medium-wide · aspect: 4:3
- camera: wide from the street outside, eye level.
- composition: The corner convenience store seen from the street at night, its glowing glass front, blank green signboard with no logo, two plastic outdoor tables with muted dark green chairs, the bus stop in front, orange streetlights. Foreground: Seoyun stepping out of the door in her buttoned navy blazer with her black backpack (no green vest — it is folded away in her bag), and Doha holding the glass door open for her with one arm, hood down, glasses, backpack on his LEFT shoulder with the small resin keyring. Middle distance through the glass: the owner behind the counter, small, her hand on the counter edge, watching Doha's back for a long moment; her face readable but small. Inside the glass the store reads as the same shop: the counter on the screen-right side of the interior, the small glass jar at the counter's left end. The glass front with no posters, stickers or writing; the bus-stop ad panel blank white. No snow, no breath.
- eyes: the owner watches Doha's back; Seoyun looks ahead into the street; Doha looks down at the door.
- emotion: 말하지 않는 어른
- motion/direction: 전경 두 사람 → 유리 안 사장님 시선 → 도하 등
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 160
- fx/note: 첨부 MISUK_turnaround + SEOYUN_turnaround + DOHA_night(v1.4 §R-3). **LOC_CVS_FRONT 첫 사용**(§7-4 [ep05] 메모). 간판 `blank green signboard with no logo`, 유리 `the glass front with no posters, stickers or writing`, 광고판 `blank white ad panel`. 야외 의자의 초록은 편의점 쪽 초록(허용). **서윤 초록 0**(SEOYUN_OFF_SHIFT). **SEOYUN_night 첨부 금지.** P47 이후 서윤에 조끼 = REGEN.

--- SCENE BREAK --- (E05S11 → E05S12 01:05 사거리)

### ⑦ 사거리 · 키링 — P48~P52 (수 01:05)

### panel_048
- scene_id: E05S12 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT 빛 문구
- beat: ⑦ · 긴장 6 설·비 · ⟨복선 W4 · W8⟩ ⟨이중의미⟩ · 멈춤
- characters: SEOYUN (SEOYUN_OFF_SHIFT, 전경 아래, 돌아봄) · DOHA (반대편 골목 어귀)
- size: large · aspect: 9:16
- camera: high angle wide over the crossroads, looking down.
- composition: The quiet old-neighbourhood crossroads late at night from above: the convenience store glowing on one corner, a shuttered pharmacy, power lines crossing the frame. Lower right: Seoyun small, a few steps along the pavement toward the bus-stop side, turned back to look over her shoulder, blazer and backpack. Middle left: Doha standing at the mouth of a dark side alley on the opposite side of the crossroads — the direction he always disappeared to — hood down, hands in his pockets, waiting, in a pool of orange streetlight. Deep in the frame, diagonally across, small: an empty shop with a rusty roll-down shutter and a faded red plastic stool in front of it, just to the left of the shutter, empty, nobody sitting. Distant glow of a big-box store parking lot. No snow, no breath. Top quarter: deep navy-black sky and dark power lines.
- eyes: Seoyun looks back at Doha; Doha looks at her.
- emotion: 멈춤
- motion/direction: 아래 서윤 → 왼쪽 골목 도하 → 원경 빨간 의자
- dialogue_ref: 서윤 "…안 가?" (bubble 1, 아래 쪽 꼬리) · 도하 "기다렸어." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame (deep navy-black sky and dark power lines) as calm, empty background for two bubbles.
- split: no
- gap_after: 80
- fx/note: 권장 첨부 ep01 panel_053(사거리 지리·빨간 의자) + SEOYUN_turnaround + DOHA_night(LEADS_lineup 금지). 빨간 의자 = 빛바랜 #C8463C, 셔터 왼쪽(9년 전 문 왼쪽과 같은 위치감), 비어 있음. 키링은 아직 도하 왼끈(작게). 눈·입김 없음. **P63이 이 이미지 첨부(필수).** 간판 무지.

### panel_049
- scene_id: E05S12 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT
- beat: ⑦ · 긴장 7 비 · ⟨복선 K3: ep02 P58 메아리⟩ · FLAW의 거울(이번엔 그녀가 정한다)
- characters: SEOYUN (정면 바스트)
- size: medium · aspect: 3:4
- camera: frontal bust of Seoyun from Doha's position, eye level, backlit by a streetlight.
- composition: Seoyun from the chest up, frontal, an orange streetlight behind and above her rimming her hair and shoulders, her face in soft shadow but readable: she has taken a breath, chin up, decided. Blazer buttoned, no green. Dark quiet crossroads blurred behind her. No breath vapour. Top third: deep navy-black night sky and the soft glow of the streetlight.
- eyes: Seoyun looks straight at Doha (toward camera).
- emotion: 결심
- motion/direction: 정면 정지
- dialogue_ref: 서윤 "3조, 내가 깰게." (bubble 1) · 서윤 "그 학, 누구한테 받았어." (bubble 2)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (deep navy-black sky beside the streetlight glow) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 SEOYUN_expressions + SEOYUN_turnaround + 권장 P48. 말풍선이 가로등 빛 덩어리를 피해 반대쪽으로.

### panel_050
- scene_id: E05S12 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT
- beat: ⑦ · 긴장 7 비·설 · ⟨복선 TB-V4⟩ · 키링이 그녀 손으로 · 빈 D링 시작
- characters: DOHA (손 + 백팩 끈) · SEOYUN (손바닥)
- size: insert · aspect: 1:1
- camera: close-up of the two hands at chest height, slightly from above.
- composition: Middle: Doha's long fingers setting the clear resin crane keyring (small silver ring and ball chain) down onto Seoyun's open upturned palm, the moment of handing over; the faded ivory crane inside soft. Bottom edge of the frame: the LEFT strap of Doha's black backpack with its small silver D-ring now empty. Orange streetlight from above, deep navy shadows. Upper third: plain dark night background.
- eyes: (얼굴 없음)
- emotion: 맡김
- motion/direction: 도하 손가락 → 서윤 손바닥 → 아래 빈 D링
- dialogue_ref: 도하 "직접 봐." (bubble 1, 꼬리 → 위 프레임 밖)
- bubbles: 1
- art_space: Keep the top third of the frame (plain dark night background) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 첨부 DOHA_night + PROPS_sheet + 권장 P48 (v1.4 §R-3: SEOYUN_turnaround·DOHA_night + PROPS; 3장 한도라 P48은 SEOYUN_turnaround 대신 선택). KEYRING_IN_PALM(건네는 순간) + **DOHA_EMPTY_DRING `the D-ring on the left strap of his black backpack now empty, no keyring`을 프롬프트에 쓴다, 하단에 또렷이.** 이 컷부터 P65까지 도하 D링은 빔. P51이 이 이미지 참조.

### panel_051
- scene_id: E05S12 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT
- beat: ⑦ · 긴장 7 비 · **⟨복선 C2 판별 ECU · TB-V5⟩** · 숨이 멎음 · **P60 매치 원본**
- characters: SEOYUN (손만)
- size: insert · aspect: 1:1
- camera: extreme close-up straight down from above onto her palm. **Match frame for P60.**
- composition: Seoyun's LEFT palm open at the lower centre of the frame, fingers pointing toward the top, the white square patch on the inside of her wrist at the bottom edge. On the palm: the clear rounded-rectangle resin block, fine scratches, cloudy edges, a faded yellowed ivory paper crane sealed inside — head to screen-left folded down into a small hook, tail to screen-right with its tip folded down once — the crane centred horizontally about 60% down the frame, about 30% of the frame wide. Beside it, held at the same angle between the fingertips of her RIGHT hand: the tiny silvery-white gum-wrapper crane with exactly the same two details, the same direction. Both sharp, both fold details clearly readable. Orange streetlight from above. Upper quarter: plain dark asphalt in soft focus.
- eyes: (얼굴 없음)
- emotion: 숨이 멎음
- motion/direction: 누런 학 ↔ 은백 학 (같은 모양)
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: KEYRING_IN_PALM(§P) 원문. 첨부(v1.4 §R-3) SEOYUN_expressions(손 칸) + PROPS_sheet + 권장 ep01 panel_056(같은 레진·같은 방향; 없으면 P50). **두 학 모두 두 특징 판별. P60이 이 이미지 첨부(필수).** 위치·크기·방향을 그대로 유지.

### panel_052
- scene_id: E05S12 (진입 전환 컷) / location: LOC_CROSSROADS @NIGHT · mood: **전환 컷 문장(v1.4 §3-2, M_FLASH 문구 대신)** — 주황 → 호박
- beat: ⑦ · 긴장 7 회·비 · 기억의 문 · 첫눈(9년 전 눈)
- characters: SEOYUN (SEOYUN_OFF_SHIFT, 눈 ECU, 표정 = 얼어붙음 `frozen in shock, eyes wide, breath held`)
- size: insert · aspect: 1:1
- camera: extreme close-up of Seoyun's eye, frontal.
- composition: Extreme close-up of her eye (Seoyun's LEFT eye, faint dark circle below, see-through bangs at the top edge, frozen in shock, eyes wide, breath held), the small orange streetlight reflected in her pupil blooming into a warm amber incandescent glow, the colours shifting from cold navy-black and streetlight orange at the bottom of the frame to warm amber at the top, one single snowflake drifting down from the top edge of the frame, soft blurred edges.
- eyes: unfocused, looking inward.
- emotion: 기억의 문
- motion/direction: 위에서 떨어지는 눈송이 → 동공의 노란 빛
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: 첨부 SEOYUN_expressions(얼어붙음 칸) 또는 SEOYUN_turnaround (+ 권장 P49). 회상 시트·SEOYUN_night 금지. **v1.4 §3-2 전환 컷 문장 그대로, 한 장·분할 없음. 눈송이 정확히 하나**(여러 개면 REGEN), 현재 배경엔 눈 없음. 320 = 현재 → 9년 전.

--- SCENE BREAK --- (E05S12 → E05S13 9년 전 겨울 밤, 회상 시작)

### ⑧ 회상 — P53~P61 (9년 전 겨울 밤, 첫눈) · 어른 없음 · 그 아이의 눈은 끝까지 안 보임 · "안경"이라는 말 없음

### panel_053
- scene_id: E05S13 / location: LOC_OLD_SUPER @PAST (외관, 길 건너) · mood: **M_FLASH** + `soft blurred edges like a faded memory`
- beat: ⑧ 회상 · 긴장 5 회 · ⟨FB · 복선 W8 · TB-D4⟩ · 그리움 · 엄마 목소리 = 도하가 그녀 이름만 안 경로
- characters: DOHA_8 (원경, 빨간 의자) · SEOYUN_8 (유리문 안 실루엣) · 엄마 = 목소리만
- size: large · aspect: 9:16
- camera: wide from across the street, eye level, tall frame.
- composition: Snow falling softly over a small crossroads nine years ago. Lower half: the tiny neighbourhood grocery shop on the corner — the fogged glass door in the centre with no stickers or writing, glowing amber; above it a blank yellow signboard with no letters, no logo and no numbers; directly to the left of the door (screen-left), a small plain vivid red plastic stool with no print, a chubby little boy sitting on it, small, in an oversized faded sky-blue puffer jacket, snow collecting on the hood on his back and on his shoulders, his round thick black glasses a tiny pale fogged glint, face too far to read; to the right of the door, stacked plain cardboard tangerine boxes with no print or logo. Through the fogged glass, at the counter inside, the small soft silhouette of a little girl with two low pigtails. No adults anywhere. Faded film grain, soft dark vignette, soft blurred edges like a faded memory, gently desaturated warm colours. Top quarter: dark snowy night sky with falling flakes. Both are 8-year-old children, not teenagers.
- eyes: (원경 — 판별 불가)
- emotion: 그리움
- motion/direction: 눈 내리는 하늘 → 노란 간판 → 빨간 의자의 아이 → 유리문 안 실루엣
- dialogue_ref: 엄마(프레임 밖) "서윤아, 숙제 다 했어?" (bubble 1, memory, 꼬리 → 슈퍼 안쪽) · 8세 서윤 "다 했어!" (bubble 2, memory, 꼬리 → 유리문 안)
- bubbles: 2
- art_space: Keep the top quarter of the frame (dark snowy night sky with soft falling flakes) as calm, empty background for two bubbles.
- split: no
- gap_after: 80
- fx/note: 첨부 **DOHA_8_sheet + SEOYUN_8_sheet만**(v1.4 §R-3, 성인 시트·현재 패널 금지). 외관 배치 고정(§7-4): 의자 = 문 바로 왼쪽, 귤 상자 = 오른쪽, 문 위 빈 노란 간판. **어른 0.** RED_STOOL_PAST(선명). 말풍선은 간판 위가 아니라 하늘에.

--- SCENE BREAK --- (E05S13 → E05S14 슈퍼 안 카운터)

### panel_054
- scene_id: E05S14 / location: LOC_OLD_SUPER @PAST + @PAST 실내 각도 보조구(v1.4 §7-4, 새 토큰 아님) · mood: M_FLASH + `soft blurred edges like a faded memory` (실내 눈 없음)
- beat: ⑧ · 긴장 5 회 · ⟨FB · 복선 C2 기원⟩ · 호기심
- characters: SEOYUN_8 (카운터 안 낮은 의자) · DOHA_8 (유리문 너머 흐린 하늘색 형체)
- size: medium · aspect: 3:4
- camera: medium inside the shop behind the low counter, eye level of a seated child, the receipt roll in the near foreground.
- composition: Inside the same tiny neighbourhood grocery shop nine years ago at night, a low wooden counter with a blank receipt roll and a small low stool behind it, shelves of plain-wrapped snacks with no labels, stacked plain tangerine boxes with no print, warm yellow bulb light, the fogged glass door showing a blurred small figure in a sky-blue puffer on a red stool outside in the snow. Lower-left foreground, sharp: the blank white thermal receipt roll. Middle: 8-year-old Seoyun on the small low stool behind the counter in side view to three-quarter, two low pigtails with red knit hair ties, red knit sweater under a cream padded vest, round cheeks, folding a tiny paper crane from a white receipt, glancing out with a bossy confident little smile. The figure behind the glass is small, blurred and faceless. A back-room doorway closed with a plain cloth curtain — no adult visible. No snow indoors. Top third: soft blurred shelf tops and the warm bulb glow near the ceiling. An 8-year-old child, not a teenager.
- eyes: little Seoyun looks out through the glass door at the shape outside.
- emotion: 호기심
- motion/direction: 영수증 롤(전경) → 서윤 손의 학 → 유리 너머 하늘색 형체
- dialogue_ref: 8세 서윤 "쟤 또 있네." (bubble 1, memory) · 8세 서윤 "맨날 저기 앉아 있어." (bubble 2, memory)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (soft blurred shelf tops and the warm bulb glow near the ceiling) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: 첨부 **SEOYUN_8_sheet + DOHA_8_sheet**(유리 너머 형체, v1.4 §R-3). 실내 각도 보조구 문장 그대로(위 composition 첫 문장). 영수증·포장 무지. 학은 접는 중(판별 불필요). **어른 0**(커튼 닫힘).

--- SCENE BREAK --- (E05S14 → E05S15 슈퍼 문 앞 눈 속)

### panel_055
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST (문 앞) · mood: M_FLASH
- beat: ⑧ · 긴장 6 회 · ⟨FB · 복선 C1 · C7⟩ · 당돌함
- characters: SEOYUN_8 (전신 측면, screen-right) · DOHA_8 (빨간 의자, screen-left)
- size: medium · aspect: 3:4
- camera: side medium at the shop door, eye level of the children.
- composition: Screen-right: little Seoyun pushing the fogged glass door open with her shoulder and stepping out into the snow, full body in side view, red knit sweater, cream padded vest, pigtails with red ties, snowflakes landing on her hair, holding out a triangle rice ball in clear wrap with a plain orange band. Screen-left: the chubby boy on the bright red plastic stool lifting his head toward her, side view, oversized faded sky-blue puffer, sleeves covering his hands, black bowl-cut hair, thick round black glasses fogged white so his eyes cannot be seen, red cold cheeks. Snow falling softly, warm amber bulb glow spilling from the door, tangerine boxes. No adults. Top quarter: dark snowy sky above the door. Both are 8-year-old children, not teenagers. Snow only outdoors; the boy's eyes hidden behind the fogged lenses and his lowered lashes, never clearly drawn.
- eyes: little Seoyun looks at the boy; the boy's eyes hidden behind fogged lenses.
- emotion: 당돌함
- motion/direction: 서윤(오른쪽, 문에서 나옴) → 아이(왼쪽)
- dialogue_ref: 8세 서윤 "야, 너." (bubble 1, memory)
- bubbles: 1
- art_space: Keep the top quarter of the frame (dark snowy sky above the shop door) as calm, empty background.
- split: no
- gap_after: 30
- fx/note: 첨부 **SEOYUN_8_sheet + DOHA_8_sheet만**. 주황 띠 포장 무지. RED_STOOL_PAST(문 바로 왼쪽). **P59가 이 이미지 첨부(필수, v1.4 §12-7).**

### panel_056
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST · mood: M_FLASH
- beat: ⑧ · 긴장 6 회 · **⟨복선 회수 TB-V2·V3 = P37~38 매치 컷 · C8⟩** · 수줍음
- characters: DOHA_8 (정면 얼굴)
- size: medium · aspect: 3:4
- camera: frontal close-up of the boy's face, eye level — the same frontal angle and lens position as P37.
- composition: The chubby boy's face frontal, black bowl-cut hair dusted with snow, thick round black-framed glasses completely fogged flat white, his eyes not visible at all, the two lenses centred at about 40% down from the top of the frame exactly as in P37, a small bright warm-yellow highlight from the shop bulb at the upper outer corner of each lens. Red cold cheeks, small closed mouth. At the bottom of the frame: his two hands at chin level, hidden inside the long faded sky-blue puffer sleeves. Snowflakes drifting across the frame. Soft vignette, film grain. Top fifth: dark snowy blur. An 8-year-old child, not a teenager. No neck mole, no keyring on the child.
- eyes: hidden behind fogged lenses (never visible).
- emotion: 수줍음
- motion/direction: 정면 정지 — 하얀 렌즈
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 80
- fx/note: **첨부 P37(필수 매치)** + DOHA_8_sheet (v1.4 §R-3). DOHA_8 P56 문구 `round thick black-framed glasses completely fogged over white, no eyes visible behind the lenses, a warm yellow bulb reflection on each lens`. 같은 렌즈 높이·같은 반사 위치. **눈동자를 그리면 REGEN.** **P61이 이 이미지 첨부(필수).**

### panel_057
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST · mood: M_FLASH
- beat: ⑧ · 긴장 6 회 · ⟨복선 C1 9년 전 의미⟩ · 똑 부러짐
- characters: SEOYUN_8 (바스트, 살짝 로우) · (아이 시점)
- size: medium · aspect: 3:4
- camera: bust of little Seoyun from the seated boy's eye line, slight low angle, her outstretched hand in the near foreground.
- composition: Lower foreground, sharp: her small bare hand thrusting the orange-band triangle rice ball straight toward camera. Middle: little Seoyun frontal-three-quarter from the chest up, chin raised, bossy determined little face, bright dark-brown almond eyes, round pink cheeks, snow on her pigtails and red ties. Behind her: the fogged glowing glass door and the blank yellow signboard edge, falling snow. Top third: dark snowy sky above the signboard. An 8-year-old child, not a teenager.
- eyes: little Seoyun looks straight down at the boy (toward camera), firm.
- emotion: 똑 부러짐
- motion/direction: 삼각김밥(전경) → 서윤 얼굴
- dialogue_ref: 8세 서윤 "이거 오늘까지인 거야." (bubble 1, memory) · 8세 서윤 "오늘 안 먹으면 버려." (bubble 2, memory)
- bubbles: 2
- art_space: Keep the top third of the frame across the whole width (dark snowy sky above the signboard) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 30
- fx/note: 첨부 **SEOYUN_8_sheet**(+ 가장자리에 아이 소매가 보이면 DOHA_8_sheet). 표정 슬롯 = 명령. 간판·포장 무지, 말풍선은 간판 위가 아니라 하늘에.

### panel_058
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST · mood: M_FLASH
- beat: ⑧ · 긴장 6 회 · ⟨복선 C1 완결 대사⟩ · 다정한 명령
- characters: SEOYUN_8 (screen-right) · DOHA_8 (screen-left)
- size: medium-wide · aspect: 4:3
- camera: side two-shot at the children's eye level.
- composition: Screen-left: the boy on the red stool taking the orange-band rice ball with both hands hidden in his long faded sky-blue puffer sleeves, head lowered, fogged glasses, eyes not visible. Screen-right: little Seoyun standing, lifting her chin, arms now crossed. The rice ball exactly between them in the centre. Falling snow, warm amber door glow behind, tangerine boxes. Their heads in the lower three-fifths. Top two-fifths: dark snowy sky. Both are 8-year-old children, not teenagers. The boy's hands stay inside the sleeves.
- eyes: little Seoyun looks down at him, satisfied; the boy looks down at the rice ball (eyes hidden).
- emotion: 다정한 명령
- motion/direction: 서윤(오른쪽) → 가운데 삼각김밥 → 아이 소매 손
- dialogue_ref: 8세 서윤 "그러니까 먹어." (bubble 1, memory, 오른쪽 위)
- bubbles: 1
- art_space: Keep the top third of the frame (dark snowy sky above them) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 첨부 **SEOYUN_8_sheet + DOHA_8_sheet만**. 소매 덮인 손 = 문구(`holding the triangle rice ball in both sleeve-covered hands`). 어른 0.

### panel_059
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST · mood: M_FLASH
- beat: ⑧ · 긴장 7 회 · ⟨복선 TB-D5 · C2 기원⟩ ⟨이중의미⟩ · 가르침
- characters: SEOYUN_8 (쪼그려 앉음, 전경 오른쪽) · DOHA_8 (빨간 의자, 왼쪽)
- size: medium-wide · aspect: 4:3
- camera: side medium-wide at low height, little Seoyun in the near foreground.
- composition: Screen-right foreground: little Seoyun crouched beside the stool in side view, folding a crane from a white blank receipt on her knee, the crane large enough to read: head to screen-left folded down into a small hook, tail to screen-right with its tip folded down once, bright clean white. Screen-left middle: the boy on the bright red plastic stool, oversized sky-blue puffer, leaning forward, his fogged glasses turned down toward her hands only, eyes not visible. Snow falling between them, the shop door glowing amber behind, tangerine boxes. No adults. Top two-fifths: dark snowy sky across the whole width. Both are 8-year-old children, not teenagers.
- eyes: the boy watches only her hands (eyes hidden); little Seoyun looks at the crane.
- emotion: 가르침
- motion/direction: 서윤 손의 학(전경) ← 아이의 시선
- dialogue_ref: 8세 서윤 "머리는 이렇게 꺾고, 꼬리는 한 번 접어." (bubble 1, memory, 긴 KM) · 8세 서윤 "그래야 내 거야." (bubble 2, memory)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame across the whole width (dark snowy sky above the door) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 80
- fx/note: **첨부 P55(필수, 같은 의자·문 위치, v1.4 §12-7)** + SEOYUN_8_sheet + DOHA_8_sheet. 표정 슬롯 = 가르침. **학 두 특징 판별, 머리 screen-left.** 영수증 무지.

### panel_060
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST · mood: M_FLASH
- beat: ⑧ · 긴장 7 회 · **⟨반전 B 시각 정점 직전: P51 매치 컷⟩** ⟨이중의미 · 제목⟩ · 건넴
- characters: SEOYUN_8 (작은 맨손) · DOHA_8 (소매 덮인 손바닥)
- size: insert · aspect: 1:1
- camera: extreme close-up straight down from above — exactly the same angle as P51.
- composition: Extreme close-up straight down from above, exactly the same angle as P51. At the lower centre of the frame, fingers pointing toward the top: one small palm turned up, the puffy faded sky-blue sleeve cuff covering his fingers and half of the palm. A small bare child's hand setting down onto it a tiny white paper crane folded from bright white blank thermal receipt paper — head to screen-left with the head tip folded down into a small hook, tail to screen-right with the tail tip folded down once — the crane centred horizontally about 60% down the frame, about 30% of the frame wide, exactly where the resin crane sits in P51. A few snowflakes on the sleeve. Warm amber light, film grain, soft blurred edges like a faded memory. Upper quarter: soft dark snowy ground.
- eyes: (얼굴 없음)
- emotion: 건넴
- motion/direction: 작은 손 → 흰 학 → 소매 손바닥
- dialogue_ref: 8세 서윤 "가져." (bubble 1, memory) · 8세 서윤 "이건 오늘까지 아니야." (bubble 2, memory)
- bubbles: 2
- art_space: Keep the top two-fifths of the frame (soft dark snowy ground above the hands) as calm, empty background for two stacked bubbles.
- split: no
- gap_after: 160
- fx/note: **첨부 P51(필수 매치)** + SEOYUN_8_sheet(손 칸) + DOHA_8_sheet(손바닥 칸) — 3장 한도(v1.4 §R-3). PAST_CRANE_HANDOVER(§P). 현재 누렇게 ↔ 그때 깨끗한 흰색. 학 두 특징 판별. P51과 위치·크기·방향 동일.

### panel_061
- scene_id: E05S15 / location: LOC_OLD_SUPER @PAST · mood: M_FLASH + **화이트아웃 전환 컷 문장(v1.4 §3-2)**
- beat: ⑧ · 긴장 6 회 · ⟨회상 종료⟩ · 그리움 정지(정점 직전 밸브)
- characters: DOHA_8 (정면 미디엄)
- size: large · aspect: 9:16
- camera: frontal medium of the boy on the stool, eye level, tall frame.
- composition: Middle of the tall frame: the boy on the small vivid red plastic stool, frontal, holding the white paper crane in both sleeve-covered hands against his chest, head slightly lowered, two small warm yellow bulb reflections on his white-fogged lenses, his eyes never visible. The snow thickening and the whole frame fading to soft warm white from the edges inward, the outer third of the frame almost pure warm white, the small boy in the centre still clearly readable. No pattern in the white that could look like writing. An 8-year-old child, not a teenager.
- eyes: hidden behind fogged lenses with two bulb reflections.
- emotion: 그리움 정지
- motion/direction: 가장자리 → 가운데로 번지는 흰빛
- dialogue_ref: 없음 (무대사)
- art_space: none (silent)
- split: no
- gap_after: 320
- fx/note: **첨부 P56(필수, v1.4 §12-7)** + DOHA_8_sheet. 완전한 흰 이미지(아이 안 보임) = REGEN. 320 = 9년 전 → 현재. 눈동자 그리면 REGEN.

--- SCENE BREAK --- (회상 종료: E05S15 → E05S16 01:10 사거리)

### ⑨ 클리프행어 — P62~P65 (수 01:10) · 9:16 연속

### panel_062
- scene_id: E05S16 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT 빛 문구 + **복귀 전환 컷 문장(v1.4 §3-2)** — 호박 → 주황
- beat: ⑨ · 긴장 8 비 · 반전 B 오르막 · 깨달음의 입구
- characters: SEOYUN (SEOYUN_OFF_SHIFT, 손 + 얼굴 반, KEYRING_IN_PALM 감싸 쥠)
- size: large · aspect: 9:16
- camera: close-up from slightly above, her hand in the lower part, half her face above.
- composition: Lower half: Seoyun's LEFT hand closing around the clear resin crane keyring (KEYRING_IN_PALM), fingers trembling, the faded ivory crane half hidden in her grip, the blazer cuff over her wrist. Middle: half of her face (one eye, part of the nose and cheek), wide-eyed, lips parted, see-through bangs. The soft warm white haze at the top edge of the frame clearing into orange streetlight, a faint trace of amber lingering only along the top edge, the cold navy night returning, no snow. Top fifth: the soft blurred haze band.
- eyes: her one visible eye stares at nothing, then down at the keyring.
- emotion: 깨달음의 입구
- motion/direction: 위 하얀 여백 → 얼굴 → 아래 떨리는 손
- dialogue_ref: 서윤 "…이 학," (bubble 1)
- bubbles: 1
- art_space: Keep the top fifth of the frame (the soft blurred warm-white-to-orange haze band) as calm, empty background.
- split: no
- gap_after: 80
- fx/note: 첨부 SEOYUN_expressions 또는 SEOYUN_turnaround (+ 권장 P51). 회상 시트·SEOYUN_night 금지. 키링 판별 불필요. 눈 없음.

### panel_063
- scene_id: E05S16 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT
- beat: ⑨ · 긴장 **9** 비 · **⟨반전 B 1단 회수⟩** ⟨복선 회수 C2 · C3⟩ · 충격
- characters: SEOYUN (전경 클로즈업, screen-right) · DOHA (바스트, screen-left)
- size: large · aspect: 9:16
- camera: low over-the-shoulder from just behind Seoyun, tall frame.
- composition: Screen-right lower foreground, sharp: Seoyun's three-quarter face lifted toward him, eyes wide and wet at the rims, the keyring held against her chest. Screen-left middle: Doha's bust, hood down, thin round black-framed glasses, steady, quiet face, the LEFT strap of his backpack with an empty small silver D-ring. Deep in the background between them, small and blurred: the faded red plastic stool in front of the rusty shutter across the crossroads. Orange streetlight from above, navy-black night. No snow, no breath. Top quarter: deep navy-black sky and dark power lines. His backpack's LEFT strap: the D-ring on the left strap of his black backpack now empty, no keyring.
- eyes: Seoyun looks up at Doha; Doha looks down at her.
- emotion: 충격
- motion/direction: 서윤(전경 오른쪽) → 도하(왼쪽) → 원경 빨간 의자
- dialogue_ref: 서윤 "내가 접은 거야?" (bubble 1, 오른쪽 위) · 도하 "응." (bubble 2, 왼쪽 위)
- bubbles: 2
- art_space: Keep the top quarter of the frame across the whole width (deep navy-black sky and dark power lines) as calm, empty background for two bubbles, one above each speaker.
- split: no
- gap_after: 80
- fx/note: **첨부 P48(필수, 사거리 지리·빨간 의자)** + SEOYUN_turnaround + DOHA_night(LEADS_lineup 금지). 비트시트 "교차" = 한 프레임 OTS. **DOHA_EMPTY_DRING 문구 필수**(시트의 키링이 끈에 그려지면 REGEN). 서윤 = SEOYUN_OFF_SHIFT, 키링 쥠. 눈·입김 없음. P64·P65가 이 이미지 참조.

### panel_064
- scene_id: E05S16 / location: LOC_CROSSROADS @NIGHT · mood: M_ALLEY_NIGHT
- beat: ⑨ · 긴장 9 비 · ⟨복선 C8 · TB-V2 메아리⟩ · 빈칸
- characters: SEOYUN (screen-right) · DOHA (screen-left, 안경을 밀어 올림)
- size: large · aspect: 9:16
- camera: two-shot medium, eye level, backlit by the streetlight behind Doha.
- composition: Screen-left: Doha from the waist up, raising one hand to push his thin round black-framed glasses up the bridge of his nose with one finger — the gesture clear and emphasised in the light; on the LEFT strap of his black backpack (toward camera), the small silver D-ring hangs empty and visible. Screen-right: Seoyun from the waist up, the keyring in her hand, brow knotted, searching a blank in her memory. Orange streetlight behind Doha rimming his hair and the glasses frame. Quiet crossroads blurred behind. Top quarter: deep navy-black sky.
- eyes: Seoyun looks at him, searching; Doha looks at her through the glasses.
- emotion: 빈칸
- motion/direction: 서윤(오른쪽) → 도하의 손·안경(왼쪽)
- dialogue_ref: 서윤 "그럼 그 남자애…" (bubble 1) · 서윤 "이름이 뭐였더라." (bubble 2)
- bubbles: 2
- art_space: Keep the top quarter of the frame across the whole width (deep navy-black sky) as calm, empty background for two stacked bubbles on Seoyun's side.
- split: no
- gap_after: 160
- fx/note: 첨부 SEOYUN_turnaround + DOHA_night + 권장 P63 (LEADS_lineup 금지). **DOHA_EMPTY_DRING 문구 필수, 빈 D링 또렷이.** 안경 동작 = `pushing his thin round black-framed glasses up the bridge of his nose with one finger`(렌즈 맑음). 손이 얼굴을 가리지 않게. 서윤 손에 키링.

### panel_065
- scene_id: E05S16 / location: LOC_CROSSROADS @NIGHT (배경 단순화) · mood: M_ALLEY_NIGHT
- beat: ⑨ · 긴장 **10** 비·설 · **⟨반전 B 정점⟩** ⟨복선 회수 C8 · ep01 P60⟩ ⟨이중의미⟩ · 회차 마지막 · **캡처 컷 후보**
- characters: DOHA (정면 클로즈업)
- size: full-bleed · aspect: 9:16
- camera: frontal close-up of Doha from Seoyun's eye line, eye level — the bookend of ep01 panel_060.
- composition: Doha's face in the middle of the tall frame, frontal, hood down, messy black hair over his eyebrows, thin round black-framed glasses clear now, steady serious gaze straight into her eyes, lips slightly parted after speaking; orange streetlight rim on his hair and the glasses frame, his face in soft light. Background reduced to soft orange streetlight bokeh and one small blurred red dot low in the distance (the stool). Top quarter: plain deep navy-black night blur. Bottom sixth: plain simple darker background (his charcoal hoodie fading into shadow).
- eyes: Doha looks straight at Seoyun (toward camera).
- emotion: 9년의 무게
- motion/direction: 정면 정지
- dialogue_ref: 도하 "이름 몰랐잖아." (bubble 1) · 도하 "넌 날 '안경'이라고 불렀어." (bubble 2) · 캡션 「— 6화에 계속 —」(narration, 아래)
- bubbles: 2 + caption 1
- art_space: Keep the top quarter of the frame (plain deep navy-black night blur above his head) as calm, empty background for two stacked bubbles, and the bottom sixth (plain dark charcoal hoodie shadow) as calm, empty background for the ending caption.
- split: no
- gap_after: 0
- fx/note: 권장 첨부 ep01 panel_060 + DOHA_night + 권장 P63. 표정 = 고백의 정면 슬롯. 서윤의 반응은 ep06 P1. 얼굴 중앙, 위·아래 두 빈자리. 빨간 점은 흐린 원경 하나뿐. 백팩 끈이 보이면 빈 D링(DOHA_EMPTY_DRING).

---

## 6. 점검 (제출 전 체크리스트)

- [x] 패널 65개(≥50, ≥55), `panel_001`~`panel_065` 3자리 연속, 대본·비트시트 번호와 1:1.
- [x] 모든 패널에 scene_id / LOC_* / mood. 같은 scene_id = 같은 LOC·빛·의상. 교차 편집(S06↔S07)은 scene_id를 돌림. 씬 안 변화는 대본 행동 두 곳(P38 후드 내림, P50 키링 건넴)뿐. 전환 컷 P52·P62는 표기.
- [x] 대사 패널 54개 전부 dialogue_ref + art_space, 말풍선 91개 = 대본 대사·생각 줄 91개(P45만 3개). 무대사 11개 art_space none(P37은 sfx 자리만). 효과음 3(P35·P37·P40), 캡션 1(P65). 무대사 연속 최대 2컷.
- [x] 화면비: 9:16 ×11 · 3:4 ×36 · 4:3 ×12 · 1:1 ×6 = 65. P62–P65 9:16.
- [x] split: yes = P9, P18, P22, P38 (모두 2칸).
- [x] art_space: 2말풍선 패널은 전부 **위쪽 1/3 이상 전폭**(3:4) / 위쪽 2/5 전폭(4:3, 1:1 둘) / 위쪽 1/4(9:16). 긴 KM(P7·P11·P13·P17·P22·P23·P25·P30·P31·P32·P33·P42·P46·P59)은 1/3~2/5 전폭. 얇은 띠 없음.
- [x] 반전: A = P19 9:16 단독(앞뒤 160). B = P51 → P52(320) → 회상 9컷 → P61(320) → P62–P65 9:16.
- [x] 단서 위치 비트시트 그대로: TA-D1 P1 · C2 P2·P8·P9·P20·P33·P36·P51·P54·P59·P60 · K2 P4 · E-MOM P7 · TB-V1 P9 · TA-V2 P10·P13 · M1 P1·P11 · TA-V3 P14 · TA-D2 P15 · **반전 A P19** · D-5 P21 · W1/C9 P22·P24 · P-REC P23·P28 · FLAW P29–P31 · TB-D1 P33 · TB-D2 P34 · TB-D3 P35 · C7 P36 · TB-V2 P37 · TB-V3 P38 · K3 P39·P49 · 타이머 붕괴 P40 · HQ/W3 P41·P42 · W7 P43·P44·P47 · W4/W8 P48 · TB-V4 P50 · TB-V5 P51 · FB P53–P61 · TB-D4 P53 · C1 P55·P57·P58 · TB-V2·V3 회수 P56 · TB-D5 P59 · P51 매치 P60 · **반전 B P63–P65** · C8 P64·P65.
- [x] 쪽지 = 평평한 사각, 안쪽 어디서도 안 보임(P14·P17·P19·P21·P22·P23), 학 이미지·PROPS 첨부 금지. 내용은 낭독 말풍선만.
- [x] 매치 컷: P37 ↔ P56(3:4, 같은 렌즈 위치), P51 ↔ P60(1:1, 같은 각도·위치·방향), P55 → P59(같은 의자·문), P56 → P61, P9 두 학 같은 각도, P48 ↔ P63 빨간 의자(9년 전 문 왼쪽 = 현재 셔터 왼쪽), P27 ↔ ep04 P5, P31 ↔ P27, P39 ↔ ep02 P3, P65 ↔ ep01 P60.
- [x] 회상: 8세 도하 눈 0컷, 어른 0명, "안경"이라는 말 0(대사), 첫눈. 현재 눈·입김 0(P52 한 송이 표식만).
- [x] 사장님·도하 같은 프레임 P43부터(사장님 = MISUK_turnaround 항상, 놀람 금지). DOHA_EMPTY_DRING P50 하단 → P63·P64·P65 프롬프트에 문구로.
- [x] v1.4 정렬: 서윤 P1–P35 OUTFIT_SCHOOL / P36–P46 OUTFIT_STORE(블레이저 벗음, 셔츠 위 조끼) / P47–P65 SEOYUN_OFF_SHIFT(조끼 벗음, 블레이저) + P50–P65 KEYRING_IN_PALM. 회상 첨부 = 8세 시트만(+ P56←P37, P59←P55, P60←P51, P61←P56). P47 SEOYUN_night 금지. 전환 컷 P52·P61·P62 = §3-2 문장 그대로. P54 = §7-4 실내 각도 보조구. 사거리 = M_ALLEY_NIGHT 빛 문구, P47 = M_NIGHT. 새 소품 HARAM_BRASS_KEY(P10·P13)·KEYRING_IN_PALM·DOHA_EMPTY_DRING·PAST_CRANE_HANDOVER(P60)·RED_STOOL_PAST(P53·P55·P58·P59·P61).
- [x] 글자 0: 쪽지·클립보드·제보함·시계·CCTV 모니터·간판·유리·포장·영수증·영수증 롤·노란 간판·동전·단말기 전부 무지. 효과음은 뷰어 sfx 자리만.
- [x] 한국 원작 그대로(캄보디아식 변형 없음). 신체 접촉은 손잡기·소매·키링 건넴·입 막기(코미디)까지. 만화 기호 없음.

## 7. 의문 · 확인 요청 (art-director / 리더)

**v1.4로 해결됨:** (a) 사거리 무드 = M_ALLEY_NIGHT 빛 문구, P47 = M_NIGHT. (b) M_FLASH 규칙 7항 + 전환 컷 3개 문장. (c) 서윤 의상 흐름(P36–P46 OUTFIT_STORE = 블레이저 벗고 셔츠 위 조끼, P47부터 SEOYUN_OFF_SHIFT). (d) SEOYUN_8 / DOHA_8 토큰·시트 이름, DOHA_NIGHT_FOGGED, DOHA_EMPTY_DRING, MISUK_BEHIND_GLASS, 새 소품 5종. (e) LOC_OLD_SUPER @PAST 외관 배치·P54 실내 각도 보조구, LOC_CVS_FRONT 첫 사용 메모. (f) P1–P3 서윤 = OUTFIT_SCHOOL(v1.4 §2 [ep05]; ep04 P60의 "조끼를 블레이저 안에"와 겉모습이 같아 연속성 문제 없음).

남은 것:
1. **P22 아래 칸 학 모양 쪽지.** 같은 이미지의 위 칸에 도하의 평평한 사각이 있어, ep03 panel_046을 붙이면 Flow가 사각도 학으로 접을 위험이 크다. **첨부 없이 문구로만** 그리게 했다. 위 칸 사각이 학이 되면 REGEN.
2. **P9 3칸 → 2칸.** 비트시트 "2분할 인서트 + 띠 컷"(3칸)을 style-bible 최대 2칸 규칙에 맞춰 **아래 칸 한 프레임 안의 왼쪽 전경 껌 종이 학 / 오른쪽 중경 키링 학**(깊은 초점, 같은 화면 크기)으로 풀었다. 서윤이 학을 주먹에 쥐는 동작은 그림에서 생략(위 칸 시선만).
3. **P1 빛 방향.** ep04 P60은 서윤 뒤 역광, ep05 P1 대본은 도하 쪽 역광 → 복도 한쪽 창의 낮게 비스듬한 빛(양쪽 림라이트)으로 처리. ep04 이미지가 생기면 맞춰 조정.
4. **P39 화면비.** 원본 ep02 P03은 3:4, 이번은 4:3(정면 투샷 + 유리병 왼쪽 끝 + 2말풍선). 같은 축·같은 좌우라 매치에 지장 없다고 판단.
5. **P50 첨부 3장 한도.** v1.4 §R-3은 SEOYUN_turnaround·DOHA_night + PROPS_sheet. 손 클로즈업이라 SEOYUN_turnaround 자리에 P48을 선택으로 두었다(얼굴 없음). 반대로 원하면 P48을 빼면 된다.
6. **ep01~ep04 이미지 없음.** 필수 크로스 첨부 4장(ep04 panel_059·056·005, ep02 panel_003)이 생기기 전에는 P1·P12·P27·P39(와 필수 연쇄 P16·P20·P31)를 미룬다.

## 8. 하류 인계

- **letterer:** 각 패널의 `art_space`·`gap_after`를 `ep05_lettering.md`에 그대로(gap_after px 정수). 말풍선 수·화자는 `dialogue_ref`/`bubbles` 기준. **type:** thought = P4, P9, P12(2), P16(2), P36(2) · shout = P25 · **memory = P53–P60의 모든 회상 대사(P53 엄마 포함)** · narration = P65 캡션 · 나머지 dialogue. sfx = P35 예비 종(창 쪽 위), P37 딩동(문 위), P40 계단 발소리(직원 문 위). 프레임 밖/가장자리 꼬리: P3(서윤 → 아래), P6(서윤 → 오른쪽 아래), P28(도하 → 왼쪽 전경 어깨), P35(도하 → 아래 계단), P41(서윤 → 왼쪽 전경 문틀), P42(서윤 → 오른쪽 프레임 밖), P50(도하 → 위 프레임 밖), P53(엄마 → 슈퍼 안쪽, 서윤 → 유리문). **P45 = 3개(사장님 가운데 위, 서윤·도하 같은 높이 좌우).** P40 말풍선은 시계를 덮지 않게. P49 가로등 빛 덩어리 피하기. P65 캡션은 아래 1/6. 긴 KM: P7, P11, P13, P17, P22, P23(둘 다), P25, P30, P31, P32, P33, P42, P46, P59 — 폭/분할 주의. text_km은 대본 KM 그대로.
- **prompt-smith:** style-bible §6-1 조립 순서. camera/composition/eyes/art_space 영어 그대로. LOC 토큰 §7 원문 + 무드 빛 문구 하나(§1 표; 사거리 = M_ALLEY_NIGHT, P47 = M_NIGHT, 회상 = M_FLASH + `soft blurred edges like a faded memory`, 전환 컷 P52·P61·P62 = §1-2의 v1.4 문장 그대로) + 계절 추가구(낮·바깥). P54는 style-bible v1.4 §7-4 실내 각도 보조구, 회상은 §3-2 규칙 5 무지 문구. 의상·소품은 character-sheets v1.4 원문(SEOYUN_OFF_SHIFT, DOHA_NIGHT_FOGGED, DOHA_EMPTY_DRING, MISUK_BEHIND_GLASS, SEOYUN_8 / DOHA_8 + `an 8-year-old child, not a teenager`, HARAM_BRASS_KEY, KEYRING_IN_PALM, PAST_CRANE_HANDOVER, RED_STOOL_PAST). 첨부: §3-3 시트 규칙 + 표(필수 표시 지킬 것; P1–P35·P47–P65 SEOYUN_night 금지; 회상은 8세 시트 + 지정 매치 원본만; 쪽지 패널 PROPS·학 이미지 금지). 생성 순서 §3-4를 카드 순서/메모에. SCENE BREAK(§1)를 그룹 경계로. 빈 물체 = style-bible §9-2 문구. **"안경"을 뜻하는 말은 프롬프트에 사물 묘사(glasses)로만 — 이미지에 글자로 들어가는 일은 없다.**
- **art-director:** v1.4로 대부분 해결. §7 남은 1(P22 첨부 없이 문구)·2(P9 2칸)·5(P50 첨부) 확인만 요청. 새 LOC·무드·시트 요청 없음.
- **리더:** `ep05_flow_status.md` 순서 메모에 §3-4 1·2·4를 옮길 것(시트 15장: 기존 13 + SEOYUN_8_sheet·DOHA_8_sheet, 필수 크로스 첨부 4장, 회상은 P37·P51 뒤, P55 → P59, P56 → P61).
