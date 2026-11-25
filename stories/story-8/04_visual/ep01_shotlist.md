# EP01 샷리스트 — 「너랑 나만 아는 거다」 (ដឹងតែយើងពីរនាក់) · 「다섯 개의 숟가락」 story-8

- 작성: panel-director · 2026-11-25 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 입력: `03_episode/ep01_script_final.md` (Khmer review READY, `km_review.py gate --episode 01` 통과 확인 후 읽음),
  `03_episode/ep01_beatsheet.md`, `02_story/world.md` §6–9·§11, `characters.md` §9, `twist-plan.md` §0·§1·§3, `00_input/brief.md` 판정 A–AB.
- 스킬: `webtoon-panel-breakdown` 작업 A + `references/composition-grammar.md`, `webtoon-khmer-edition` §3–4.
- **패널 수 60** = panel_001 … panel_060 = 대본 P01 … P60 (1:1, 번호 그대로). 무대사 15 · `env` 1 (P05) · 효과음 5 (P14·P23·P32·P47·P49).
- 하류: prompt-smith(Flow 프롬프트), letterer(`ep01_lettering.md`의 `art_space`·`place`·`gap_after`), ref-sheet/art-director(LOC·토큰 확인).

---

## 0. 전역 규칙 (모든 패널 공통)

1. **이미지 안에 글자가 전혀 없다.** 말풍선·캡션·효과음 글자·문자·숫자·가짜 글씨·로고·워터마크 모두 금지. 말풍선과 크메르어는 뷰어(`km_tool.py build`)가 그린다.
   각 패널 끝의 `no_text` 줄은 그 패널에서 특히 글자가 생기기 쉬운 물건을 적은 것이다. prompt-smith는 모든 프롬프트 끝에
   `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`를 붙인다.
2. **무지 물건:** 봉투(완전 무지 크라프트)·지폐(숫자·초상·문자 없는 흐린 녹회색/연갈색 종이)·장부(검은 표지, 늘 덮임)·간판(흰 아크릴 빈 면)·
   달력(빈 종이)·시계(바늘만)·쌀 포대(무지)·빵 봉지(무지 투명 비닐)·빵 바구니(무지)·옷(로고·프린트 없음)·금고(다이얼 숫자 안 보이게)·사진 액자(뒷면만).
3. **`art_space`** = 말풍선이 들어갈 자리. 그 영역은 **차분하고 비어 있는 배경**(벽·하늘·어둠·바닥 면)으로 두고 얼굴·손·핵심 소품을 넣지 않는다.
   letterer는 이 칸을 그대로 `art_space`에 옮기고 `place`를 그 안에 잡는다. 무대사 패널은 `art_space: 없음(silent)`.
4. **채도 규칙:** 빨간 고무줄(#C8332B)과 초록 팔찌(#2F6B4F)가 화면에서 가장 채도 높은 두 점. 다른 빨강·초록은 채도를 누른다. 녹색 옷 금지.
5. **장소 연속성:** 같은 scene_id = 같은 LOC·같은 시간대·같은 빛. LOC가 바뀌는 곳에만 `--- SCENE BREAK ---`.
6. **삼촌(석구) 악역 인상 금지:** 날카로운 각·찡그린 미간·짙은 눈 그림자 없음. 차가운 순간도 "눈만" 바뀐다.

### 0-1. 높이·여백 범례 (세로 스크롤 리듬)

style-bible.md가 아직 없어 **잠정값**이다(art-director 확정 후 재점검 플래그 — §5 FL1).

| height | Flow 화면비(잠정) | 쓰임 |
|---|---|---|
| `tall` | 9:16 (세로) | 설정샷, 정점, 반전, 원근이 긴 계단·문틀 |
| `normal` | 3:4 (또는 1:1) | 기본 대화·클로즈업 |
| `short` | 16:9 (가로 띠) | 인서트·손·빠른 합·바닥 높이 컷 |

| gutter_after | 여백(px, letterer `gap_after` 참고값) | 쓰임 |
|---|---|---|
| `tight` | 0–20 | 연속 동작, 빠른 대화 |
| `normal` | 40–60 | 기본 |
| `wide` | 140–180 | 정적, 반전 앞뒤, 긴장 정지 |
| `xwide` | 280–360 (빈/검은 여백) | 시간 점프, 씬 대전환, 반전 직후 |

size 어휘: `insert` / `small` / `medium` / `large` / `full-bleed` (composition-grammar §1).

---

## 1. 장소 목록 (scene_id ↔ LOC ↔ 배경)

| scene_id | 패널 | location | 시각 · 빛 | 한 줄 배경 |
|---|---|---|---|---|
| S1 | 001–004 | LOC_HOME_TABLE | 28일 ~22:00 · 노란 펜던트 하나, 가장자리 깊은 남색 그림자 | 낡은 집 부엌 겸 식탁, 밝은 갈색 나무 식탁, 크림색 플라스틱 갓 펜던트, 누런 장판 |
| S2 | 005–006 | LOC_FACTORY_GATE | 14일 05:55 · 새벽 푸른빛 + 나트륨 주황 등, 입김 | 회색 패널 벽 제빵 공장, 직원용 철문 위 나트륨 등, 회색 사물함 줄, 셔터 아래 무지 빵 바구니 더미, 마른 시멘트 바닥 |
| S3a | 007 | LOC_UNCLE_SHOP (바깥) | 14일 06:05 · 새벽 푸른빛, 꺼지기 직전 노란 가로등 | 큰길에서 언덕으로 꺾이는 모퉁이의 좁은 금은방, 통유리, 빈 흰 아크릴 간판, 어두운 진열장, 안쪽 깊숙이 흰 작업등 한 줄 |
| S3b | 008 | LOC_ALLEY_STAIRS | 14일 06:15 · 새벽 푸른빛, 꺼지기 직전 노란 가로등 | 지그재그 시멘트 계단 골목, 낮은 담·화분·고양이·전선, 층계참 노란 가로등, 아래 골목 입구에 가게의 흰빛 한 점 |
| S4 | 009–014 | LOC_HOME_TABLE | 14일 06:20–06:35 · 창의 차가운 회청빛 + 레인지 위 형광등 하나, 펜던트 꺼짐 | S1과 같은 부엌·식탁(같은 소품 같은 자리), 빈 벽걸이 달력, 민트색 냉장고 |
| S5 | 015–032 | LOC_HOME_TABLE | 14일 18:40 · 노란 펜던트, 김 오르는 밥, 따뜻한 꿀색 | 같은 식탁, 다섯 식구, 조리대 위 무지 쌀 포대, 우진 의자 등받이의 검은 숏패딩 |
| S6 | 033–039 | LOC_ALLEY_STAIRS | 14일 21:30 · 남색 밤하늘, 층계참마다 노란 가로등 점선 | S3b와 같은 계단 골목, 중간 층계참의 낡은 평상(할머니, 귤) |
| S7 | 040–041 | LOC_ALLEY_STAIRS | 15일 ~17:20 · 노을 주황이 계단을 비스듬히 자름, 긴 그림자 | 같은 계단 골목. 위에서 내려다보면 아래 골목 입구 모퉁이에 금은방 |
| S8 | 042 | LOC_UNCLE_SHOP | 15일 20:40 · 바깥 어둠, 가게만 차가운 흰 작업등 + 진열장 금빛 반사 | 금은방 앞 유리문 → 안: 낮은 유리 진열장 두 칸(검은 벨벳 위 금붙이, 가격표 없음), 작업대(팔 접히는 흰 작업등·루페·작은 저울·은색 보온병·뒷면 사진 액자), 바늘만 있는 벽시계 |
| S9 | 043–056 | LOC_UNCLE_BACKROOM | 15일 20:42–21:15 · 천장 형광등 하나(약간 초록 기운) + 커튼 틈으로 새는 흰 작업등 | 바랜 자주색 천 커튼 안 좁은 밀실, 앉은뱅이 탁자·방석 둘, 은색 보온병·흰 찻잔 둘, 검은 장부, 구석 작은 검은 금고, 벽쪽 낮은 나무 서랍장(놋쇠 손잡이) + 그 위 빨간 고무줄 봉투 다발 |
| S10 | 057–060 | LOC_HOME_ENTRANCE | 15일 21:40 · 집 안 불 꺼짐, 현관 위 맨 백열전구 하나(따뜻한 노랑), 문밖 남색 밤 + 노란 가로등 | 간유리 미닫이 현관문(나무 틀), 신발 벗는 낮은 턱, 신발장 + 위의 작은 열쇠 접시, 턱 아래 신발 |

- S3은 대본에서 한 씬(S3)이지만 장소가 둘이라 **S3a / S3b로 나눴다**(같은 scene_id = 같은 장소 원칙).
- S1·S4·S5는 같은 LOC_HOME_TABLE이지만 **빛이 다르다**(밤 펜던트 + 어둠 / 새벽 회청빛 + 형광등 / 저녁 펜던트 온기). prompt-smith는 LOC 토큰 + 시간대 변주구로 넣는다.
- S3b·S6·S7도 같은 LOC_ALLEY_STAIRS, 빛만 다름(새벽 청 / 밤 남색 + 가로등 / 노을 주황).

### 1-1. 고정 동선·배치 (180° 규칙)

- **S5 식탁 배치 (world §7 고정):** 아버지 = 머리 자리 / 새롬 = 반대 끝 철제 접이식 의자 / 하린 = 아버지 오른쪽 / 우진 = 하린 맞은편 / 미자 = 레인지 쪽.
  **기준 와이드(panel_015·024)의 카메라는 창 쪽에서 레인지 벽을 본다:** 화면 왼쪽 끝 아버지, 오른쪽 끝 새롬, 앞쪽(카메라 쪽) 긴 면에 하린(뒷모습 3/4, 아버지 가까이),
  안쪽 긴 면에 우진(왼쪽, 아버지 가까이, 하린 정면)과 미자(오른쪽, 레인지와 새롬 가까이). 배경 벽에 가스레인지·싱크대·그릇 선반, 조리대 위 쌀 포대.
  우진 의자 등받이에 검은 숏패딩. 이후 투샷·리버스숏은 이 축(하린 ↔ 우진이 식탁을 사이에 두고 마주봄)을 넘지 않는다.
- **S1 탑다운(panel_001):** 펜던트 바로 아래 수직 부감. **프레임 위쪽 = 아버지 머리 자리 방향.** EP05에서 같은 구도·같은 배치로 재사용(L27) — 이 패널 묘사는 EP05용 고정 기준이다.
- **S6 계단:** 하린은 위에서 아래로 내려가고(출근), 삼촌은 아래에서 올라온다. 하린 = 위쪽 계단, 삼촌 = 한 칸 아래. P39에서 삼촌은 위쪽 어둠으로 올라가 사라진다(하린을 지나쳐).
- **S9 뒷방 배치 (art-director LOC 토큰과 맞출 것 — §5 FL4):** 하린은 **커튼(입구)을 등지고** 앉는다. 앉은뱅이 탁자 건너 삼촌은 벽을 등지고 앉는다.
  **낮은 나무 서랍장**은 삼촌 왼쪽 벽(하린 시점 화면 오른쪽)에, 윗줄 서랍이 **앉은 사람 눈높이보다 약간 아래** — 그래서 하린이 앉은 채로 **위에서 살짝 내려다보며** 반쯤 열린
  "왼쪽 위에서 두 번째 칸" 안을 볼 수 있다(panel_048 = panel_019와 같은 앵글). 금고는 하린 시점 화면 왼쪽 구석. 봉투 다발은 서랍장 위. 커튼은 하린 등 뒤(카메라 뒤쪽).
- **S10 현관:** 카메라는 집 안쪽(하린 등 뒤). 하린은 턱에 앉아 문을 향한다. 문틀 안 우진, 그 뒤 밤 골목. 아버지는 근무 중이라 **아버지의 검은 구두는 없다.**

---

## 2. 소품 상태 추적 (패널 간 연속성)

| 소품 | 상태 변화 |
|---|---|
| PROP_ENVELOPE (하린 것) | 010 빈 봉투를 펴고 지폐를 넣음 → 013 세로 세 번 접고 빨간 고무줄(얇게 조금 도톰) → 014 백팩 앞주머니 → (S6–S8 화면 밖 / 040 패딩 조끼 주머니를 손으로 누름) → 044 조끼 주머니에서 꺼내 내밈, 삼촌 손바닥 위(뜯지 않음) → 047 서랍장 왼쪽 위 두 번째 칸 → 048 서랍 안 팔찌 옆 → 049 서랍 닫힘 |
| PROP_ENVELOPE (다음 달 빈 봉투, 하린) | 043 다발로 서랍장 위 → 050 삼촌이 하나 빼서 세 번 접고 고무줄, 하린 손바닥에(**납작**) → 051 이후 하린 조끼 주머니(보이지 않음) → 059 하린 오른손이 조끼 주머니 속에서 쥠(형태만) |
| PROP_ENVELOPE (우진 것) | 058 우진 패딩 안주머니에서 바닥으로 미끄러짐(**납작**, 세 번 접힘, 빨간 고무줄 — 050과 똑같은 모양) → 059 우진 오른손에 |
| 콜드오픈 봉투 다섯 | 001 부채꼴, 맨 위 하나만 **살짝** 부풂(과장 금지), 그 끝이 프레임 위쪽 |
| PROP_BRACELET_COPY (우진 손목) | 019 돌아가며 금색 **납작한 칠 선** 번쩍, **흰 구름 무늬 없음** → 020 손목을 홱 뺌 → 021 소매를 끌어내리고 오른손으로 덮음 → 029 왼손 소매 속 → 057–060 **보이지 않음**(왼손목은 패딩 소매 안) |
| PROP_BRACELET (진품) | 048 서랍 안 남색 천 위: **도드라진 금색 수리 테 + 옥 안 흰 구름 무늬 한 줄**, 019와 같은 각도·같은 크기 |
| PROP_SPOONS | 001 숟가락 넷, 봉투 주변에 흐트러짐, **모든 손잡이 끝 가림** → 002 바닥 숟가락 하나, 손잡이 끝 의자 다리 그림자에 덮임 → 009·014 하린의 **손잡이 끝 살짝 휜** 숟가락(새벽, 처음 소개) → 022 하린 숟가락 멈춤(배경) → 023 아버지 숟가락 내려놓음 |
| PROP_RING_MARK (미자 왼손 약지) | 003 손은 그림자 속, 약지 읽히지 않게 → 014 손이 등 뒤(숨김) → **018 전등 빛 정면에 처음 또렷이** → 이후 자연스럽게. **반지는 어떤 패널에도 그리지 않는다** |
| 검은 숏패딩 (우진) | 015·027·032 우진 의자 등받이(①) → 041 노을 원경 아주 작은 뒷모습(②) → 057 우진이 입고 있음(③) |
| 쌀 포대 (무지) | 015 조리대 위 → 022 미자가 국자로 가리킴 |
| 남은 빵 봉지 (무지 투명 비닐) | 006 반장이 쥐여 줌 → 007 흔들림 → 009 식탁에 내려놓음 → 015 식탁 가운데, 빵 한 개 남음 → 016 쟁탈 → 017 새롬 손에 빵 |
| 은색 보온병 · 흰 찻잔 둘 | 033 삼촌 손 → 035 뚜껑 돌림 → 039 흔들며 올라감 → 042 작업대 위 → 043 찻잔에 따름 → 051 찻잔을 하린 쪽으로 밀어 줌, 하린 두 손으로 듦 → 053 잔물결 → 056 삼촌이 정리 |
| 삼촌 돋보기 (갈색 뿔테, 검은 끈) | 033–039 목에 걸림 → 042 이마로 올림 → 043–045 이마 위 → **046 벗어서 탁자에 내려놓음** → 047–056 탁자 위 장부 옆에 놓인 채 |
| PROP_LEDGER (검은 장부) | 043 탁자 위, 삼촌 손바닥이 덮음 → 이후 탁자 위 **덮인 채** 삼촌 쪽 |
| PROP_HAIRNET (흰 머리망) | 005 오른손에 쥠 → 006 손에 → 이후 S3–S4 작업복 주머니 또는 손(보이지 않아도 됨). 정수리는 머리망에 눌려 납작(005–014) |

---

## 3. 의상 (씬별, characters §9 토큰)

| scene | 하린 | 그 외 |
|---|---|---|
| S1 | `HARIN_HOME` (오트밀 카디건) | 003: 다섯 식구 소매만 — 진갈색 니트(인호) / 핑크베이지 꽈배기 카디건(미자) / 차콜 후드, 손목은 소매 안(우진) / 연코랄 후드(새롬). 그림자로 색을 눌러 둠 |
| S2–S4 | `HARIN_FACTORY` (흰 작업복 상의, 검은 조거, 낡은 흰 운동화) + 검은 백팩(로고 없음) + 빵 봉지 | 006 탁 반장 `TOKEN-TAK` / 014 미자 `MIJA_HOME` |
| S5 | `HARIN_HOME` | 인호 `INHO_HOME` · 미자 `MIJA_HOME`(머스터드 앞치마) · 우진 `UJIN_HOME`(차콜 후드, 소매가 손목 반쯤) · 새롬 `SAEROM_HOME`(연코랄 후드, 노란 별 머리핀 오른쪽 귀 위) |
| S6 | `HARIN_COMMUTE` (네이비 패딩 조끼 + 회색 후드티 + 검은 백팩) | 석구 `SEOKGU_OUT`(진갈색 울 코트 + 회갈색 목도리, 목에 돋보기) · 할머니 `TOKEN-YAI` |
| S7–S9 | `HARIN_COMMUTE` | S8–S9 석구 `SEOKGU_SHOP`(베이지 꽈배기 니트 조끼 + 흰 셔츠 소매 걷음, 코트 없음) |
| S10 | `HARIN_COMMUTE` (조끼 차림, 집 안이라 백팩은 옆에 내려놓음) | 우진 `UJIN_OUT`(검은 숏패딩 + 차콜 후드 + 연청 청바지 + 검은 백팩 + 흰 스니커즈) |

---

## 4. 패널

### panel_001
- scene_id: S1 / location: LOC_HOME_TABLE
- time/light: 28일 ~22:00 · 노란 펜던트 하나가 식탁만 비춤, 가장자리 깊은 남색 그림자
- beat: 콜드오픈 — 다섯 개의 봉투 (긴장 6) · L01·L03·L27 심기
- size: full-bleed · height: tall · gutter_after: tight
- camera: bird-eye, 펜던트 바로 아래 **수직 탑다운**, wide (식탁이 프레임을 꽉 채움)
- composition: 중앙 배치. 밝은 갈색 나무 식탁(모서리 칠 벗겨짐) 가운데 **똑같은 무지 크라프트 봉투 다섯 개가 부채꼴**로 겹쳐 모여 있다. 맨 위 하나만 살짝 부풀었고 그 끝이 **프레임 위쪽(머리 자리 방향)**을 향한다. 식은 밥그릇(김 없음)과 숟가락 넷이 **자리별이 아니라 봉투 주변에 흐트러져** 있다. 식탁 밖 네 가장자리는 어둠으로 떨어진다. 펜던트 갓의 가장자리가 프레임 맨 위에 살짝.
- characters: 없음
- props: 봉투 다섯(세로 세 번 접힘, 빨간 고무줄 한 줄, 완전 동일) · 숟가락 넷(**손잡이 끝 전부 그릇 그림자·봉투에 가려 휘었는지 안 보임**) · 밥그릇
- emotion/tension: 정지된 침묵, 불길함. 빨간 고무줄 다섯 줄이 화면에서 가장 채도 높은 점.
- motion/direction: 시선이 부채꼴 중심 → 맨 위 도톰한 봉투 → 아래로(다음 패널 바닥).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: **EP05에서 같은 구도·같은 배치로 재사용하는 고정 기준 컷**(twist-plan §4 EP05 정합). 어느 자리 숟가락이 빠졌는지 읽히지 않게(W5).
- no_text: 봉투 앞뒤 무지, 그릇·숟가락 각인 없음. 글자·숫자·말풍선 없음.

### panel_002
- scene_id: S1 / location: LOC_HOME_TABLE
- time/light: 같은 밤 · 식탁 아래, 펜던트 빛이 식탁 가장자리 너머로 조금만 새어듦
- beat: 바닥의 숟가락 (긴장 6) · L02
- size: insert · height: short · gutter_after: tight
- camera: low-angle, 바닥 높이 close-up
- composition: 누런 장판 위 **숟가락 하나**가 비스듬히 놓여 있다. 숟가락 머리는 빛 쪽, **손잡이 끝은 의자 다리 그림자에 완전히 덮임**. 의자 다리(나무) 하나가 프레임 오른쪽 세로선. 위쪽 1/4은 식탁 밑면의 어둠.
- characters: 없음
- props: 스테인리스 숟가락 하나(휘었는지 판단 불가)
- emotion/tension: 정적 박자, 무언가 떨어졌다.
- motion/direction: 숟가락 머리 → 그림자 속 손잡이로 시선이 사라짐.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: EP05 P2와 같은 구도로 재사용 예정(W5 회수). 손잡이 끝이 조금이라도 보이면 재그림.
- no_text: 글자·숫자 없음.

### panel_003
- scene_id: S1 / location: LOC_HOME_TABLE
- time/light: 같은 밤 · 펜던트 빛이 식탁 면만, 사람들은 어깨 위가 어둠
- beat: 다섯 사람의 손, 아무도 집지 않는다 (긴장 7)
- size: medium · height: short · gutter_after: tight
- camera: eye-level(식탁 높이), tight wide
- composition: 식탁 가장자리를 따라 **다섯 사람의 손과 소매**만 프레임 안. 얼굴은 프레임 위로 잘림. 식탁 위 봉투 더미 가장자리가 가운데에 살짝. 어떤 손도 특정 봉투 가까이 있지 않다(손은 식탁 모서리·무릎 쪽).
- characters: 소매만 — 오트밀 카디건(하린) / 진갈색 V넥 니트(인호, 굵은 마디) / 핑크베이지 꽈배기 카디건(미자, **손은 그림자 속, 약지 읽히지 않게**) / 차콜 후드(우진, **손목은 소매 안, 팔찌 안 보임**) / 연코랄 후드(새롬, 작은 손). 모두 그림자로 색이 눌림.
- props: 봉투 더미 가장자리
- emotion/tension: 침묵의 압력, 다섯 명 전원 참석(재독용).
- motion/direction: 좌→우로 손 다섯 개를 훑음.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 반지 자국은 panel_018에서 처음 보인다 — 여기서 드러나면 재그림.
- no_text: 글자·숫자 없음, 옷 무지.

### panel_004
- scene_id: S1 / location: LOC_HOME_TABLE
- time/light: 같은 밤 · 펜던트 아래, 맞은편은 완전한 어둠
- beat: 장기 질문 「다들 언제부터였어?」 (긴장 7)
- size: medium · height: normal · gutter_after: **xwide (검은 여백 — 2주 전으로 시간 점프)**
- camera: over-the-shoulder (하린 오른쪽 어깨 너머), 약간 높은 eye-level
- composition: 전경 왼쪽 아래에 하린의 낮은 포니테일·이마 옆 잔머리·오트밀 카디건 어깨(뒷모습). 그 너머 식탁 위 봉투 더미, 그 위에서 **멈춘 하린의 오른손**(봉투에 닿지 않음). 맞은편 의자들과 사람은 어둠에 잠겨 형체만. **위쪽 1/3은 어둠**.
- characters: 하린 `HARIN_HOME` — 뒷모습, 손만 보임(떨리지 않음)
- props: 봉투 더미(001과 같은 배치를 다른 각도로)
- emotion/tension: 조용하고 무거운 질문.
- motion/direction: 어깨 → 손 → 봉투 → 위쪽 어둠(말풍선).
- dialogue_ref: 하린: "이거… 다들 언제부터였어?" / KM: ហារីន៖ "នេះ… ទាំងអស់គ្នាធ្វើតាំងពីពេលណាមក?"
- art_space: **상단 1/3 맞은편 어둠**(우측 상단 중심) — 평평한 깊은 남색, 사물 없음
- fx/note: 말풍선 꼬리는 하린(왼쪽 아래)을 향함.
- no_text: 글자·숫자 없음.

--- SCENE BREAK --- (S1 → S2 · 2주 전 · 빛: 노란 전등 → 새벽 푸른빛 / 의상: 카디건 → 작업복)

### panel_005
- scene_id: S2 / location: LOC_FACTORY_GATE
- time/light: 14일 05:55 · 새벽 푸른빛(#5F7FA6), 철문 위 나트륨 주황 등, 입김
- beat: 시간 표지 「2주 전」 + 퇴근 (긴장 3)
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium-wide (전신 + 환경)
- composition: **위쪽 40%는 비어 있는 새벽하늘**(구름 없는 푸른 그라데이션, 하늘 끝 연한 복숭아색) — `env` 시간 표지 자리. 아래쪽에 회색 패널 벽 공장, 큰 셔터, 그 옆 직원용 철문을 나서는 하린(화면 중앙 약간 왼쪽, 전신). 철문 위 나트륨 등이 그녀 머리 위에 주황 빛. 오른쪽에 회색 철제 사물함 줄(이름표 없음), 셔터 아래 무지 플라스틱 빵 바구니 더미.
- characters: 하린 `HARIN_FACTORY` — 흰 작업복 상의, **흰 머리망을 벗어 오른손에 쥠**, 정수리가 머리망에 눌려 납작, 검은 백팩 한쪽 어깨, 입김, 지친 눈·단단한 입매
- props: 머리망(오른손), 빵 바구니(무지)
- emotion/tension: 리셋, 노동 뒤의 피로.
- motion/direction: 하린이 오른쪽으로 걸어 나옴(다음 패널 반장 쪽).
- dialogue_ref: `env` 「2주 전」 / KM: ពីរសប្តាហ៍មុន (뷰어가 하늘 면에 씀)
- art_space: **상단 40% 새벽하늘** — 평평한 그라데이션, 전선·새·건물 윤곽 없음
- fx/note: 빛(노랑→청)과 의상(카디건→작업복) 두 가지 변화로 시간 이동을 알린다.
- no_text: 공장 벽·셔터·철문·사물함·바구니에 간판·로고·번호·이름표 없음.

### panel_006
- scene_id: S2 / location: LOC_FACTORY_GATE
- time/light: 같은 새벽 · 푸른빛 + 나트륨 주황
- beat: 남은 빵 (긴장 3) · L26
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, medium two-shot (허리 위)
- composition: 화면 오른쪽 탁 반장이 **무지 투명 비닐 빵 봉지**를 하린 손에 툭 쥐여 준다. 왼쪽 하린은 거절하려고 왼손을 살짝 든 채, 봉지는 이미 오른손에. 둘 사이 입김. 뒤로 철문과 사물함 일부. **위쪽 1/3은 공장 회색 벽 면**.
- characters: 하린 `HARIN_FACTORY`(당황 반, 미안함 반) · 탁 반장 `TOKEN-TAK`(흰 작업복 + 회색 플리스 조끼 + 흰 머리망, 무뚝뚝한 무표정, 시선은 딴 데)
- props: 빵 봉지(무지 투명 비닐, 빵 몇 개)
- emotion/tension: 무뚝뚝한 다정함.
- motion/direction: 반장 손 → 하린 손으로 건네는 동선(우→좌).
- dialogue_ref: 하린: "괜찮아요, 반장님." / KM: ហារីន៖ "មិនអីទេ បងតាក់។" → 반장: "들고 가. 가서 자." / KM: បងតាក់៖ "យកទៅ។ ទៅដេកទៅ។"
- art_space: **상단 1/3 회색 공장 벽** — 왼쪽 위(하린)·오른쪽 위(반장) 두 말풍선이 들어갈 평평한 면
- fx/note: 화자 2명, 좌(하린) → 우(반장) 읽기 순서.
- no_text: 빵 봉지 무지, 작업복 명찰·로고 없음.

--- SCENE BREAK --- (S2 → S3a · 귀갓길, 골목 입구 모퉁이)

### panel_007
- scene_id: S3a / location: LOC_UNCLE_SHOP (바깥, 골목 입구 모퉁이)
- time/light: 14일 06:05 · 새벽 푸른빛, 가게 안쪽 깊숙이 차가운 흰 작업등 한 줄
- beat: 이 가게 (긴장 4)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, long shot (가게 정면을 크게)
- composition: 프레임 대부분이 큰길에서 언덕으로 꺾이는 모퉁이의 **좁은 금은방** 정면: 통유리, 위에 **빈 흰 아크릴 간판**, 어두운 유리 진열장, 가게 안쪽 깊은 곳에서 **흰 작업등 빛 한 줄**이 새어 나옴. 하린은 **화면 오른쪽 끝**, 유리 쪽으로 고개를 한 번 돌리며 걸음이 늦어짐. 손의 빵 봉지가 흔들림. 왼쪽으로 언덕 골목 입구 계단 시작.
- characters: 하린 `HARIN_FACTORY` — 옆얼굴, 무표정, 시선만 가게로
- props: 빵 봉지, 빈 간판
- emotion/tension: 첫 그림자. 이름 없이 "이 가게"를 각인.
- motion/direction: 하린은 왼쪽(골목 계단)으로 향함 → 다음 패널 계단.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 새벽에도 안쪽 불이 켜져 있다(재독용). 진열장 금붙이는 어두워 거의 안 보임.
- no_text: **간판 완전히 빈 흰 판**, 유리 스티커·영업시간·가격표·번호 없음.

--- SCENE BREAK --- (S3a → S3b · 계단 골목)

### panel_008
- scene_id: S3b / location: LOC_ALLEY_STAIRS
- time/light: 14일 06:15 · 새벽 푸른빛, 꺼지기 직전 노란 가로등
- beat: 타이머 — 내일 저녁까지 (긴장 4)
- size: large · height: tall · gutter_after: wide (집으로, 시간 경과 짧음)
- camera: high-angle, long shot (계단 위에서 내려다봄)
- composition: 지그재그 시멘트 계단이 프레임을 대각선으로 오른다. 중간쯤 계단을 오르는 하린(작게, 전신), 입김. 층계참의 노란 가로등(흐리게 깜빡이는 직전), 머리 위 전선 두세 가닥, 낮은 담 위 화분과 고양이. **맨 아래 골목 입구에 가게의 흰빛 한 점.** **위쪽 1/4은 계단 위쪽 담과 푸른 하늘의 평평한 면.**
- characters: 하린 `HARIN_FACTORY` + 백팩 + 빵 봉지 — 고개 숙인 피로한 걸음
- props: 가로등, 가게 흰빛(아래)
- emotion/tension: 피로, 맞춰야 한다는 압박.
- motion/direction: 아래(가게) → 하린 → 위로 오르는 계단(시선은 위로 가지만 다음 패널은 집 안으로 끊음).
- dialogue_ref: 하린 (생각): "내일 저녁까지는… 맞춰야 돼." / KM: ហារីន (គិត)៖ "ត្រឹមល្ងាចស្អែក… ត្រូវរកឲ្យគ្រប់។"
- art_space: **상단 1/4 푸른 하늘·담 면**(왼쪽 위 중심) — 생각 풍선(꼬리 없음)
- fx/note: 계단·가로등·평상 위치는 S6·S7과 같은 골목으로 보이게(같은 LOC 토큰).
- no_text: 담·전봇대에 전단·번호판·표지 없음.

--- SCENE BREAK --- (S3b → S4 · 새벽 부엌)

### panel_009
- scene_id: S4 / location: LOC_HOME_TABLE
- time/light: 14일 06:20 · 창의 차가운 회청빛 + 레인지 위 형광등 하나, **펜던트 꺼짐**
- beat: 혼자 먹는 밥 (긴장 3)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, medium shot
- composition: 빈 부엌. 하린 자리(아버지 자리 오른쪽)에 **접시로 덮어 둔 밥그릇**과 **손잡이 끝이 살짝 휜 숟가락**. 하린이 빵 봉지를 식탁에 내려놓고 혼자 앉는다, 백팩은 무릎에. 뒤 벽에 **빈 벽걸이 달력**(종이만), 민트색 냉장고 일부, 작은 반투명 창. 빈 의자 넷. **오른쪽 위 1/3은 크림색 벽지 면.**
- characters: 하린 `HARIN_FACTORY` — 앉아서 덮인 그릇을 내려다봄, 작은 쓴웃음 직전
- props: 덮인 밥그릇, 휜 숟가락(처음 소개 — 휜 끝이 읽히게), 빵 봉지, 빈 달력
- emotion/tension: 외로운 식탁, 엄마의 돌봄.
- motion/direction: 하린 → 덮인 그릇.
- dialogue_ref: 하린: "…또 덮어 놨네." / KM: ហារីន៖ "…ម៉ែគ្របទុកឲ្យទៀតហើយ។"
- art_space: **우측 상단 1/3 크림색 벽** (달력은 왼쪽에 두어 겹치지 않게)
- fx/note: 저녁 식탁(S5)과 같은 공간, 빛만 다름.
- no_text: **달력 빈 종이(숫자·월 없음)**, 냉장고 자석에 메모·글자 없음, 빵 봉지 무지.

### panel_010
- scene_id: S4 / location: LOC_HOME_TABLE
- time/light: 같은 새벽 · 회청빛 + 형광등, 손 위에 차가운 빛
- beat: 돈을 세는 손 (긴장 4) · **L16 심기(EP14)** · 봉투 문법 ①
- size: insert · height: short · gutter_after: tight
- camera: bird-eye(탑다운), extreme-close-up 손
- composition: 나무 식탁 위, 펼친 **납작한 빈 크라프트 봉투**(빨간 고무줄은 옆에 벗겨 둠)와 작은 천 주머니. 하린의 두 손이 지폐를 한 장씩 세어 봉투에 넣는데, **한 장마다 오른쪽 위 모서리를 작은 삼각형으로 접는다** — 접힌 삼각형 모서리가 몇 장 또렷이 보인다. 작업복 소매가 걷혀 **오른쪽 팔뚝 안쪽의 작은 화상 자국(옅은 분홍 가는 줄)**이 보인다.
- characters: 하린(손만) — 거칠고 손톱 짧은 손, 습관적인 정확함
- props: 빈 봉투(펼침), 빨간 고무줄(옆), 지폐(숫자·초상·문자 없는 흐린 녹회색 종이), 천 주머니
- emotion/tension: 조용한 의식.
- motion/direction: 오른쪽(주머니) → 왼쪽(봉투)으로 지폐가 이동.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: **삼각 접기는 설명 없이 또렷하게만**(EP14 반전의 유일한 물증). 지폐가 특정 국가 화폐처럼 보이면 재그림.
- no_text: **지폐에 숫자·초상·문자·무늬 글씨 없음**, 봉투 무지.

### panel_011
- scene_id: S4 / location: LOC_HOME_TABLE
- time/light: 같은 새벽
- beat: 모자라 (긴장 5) · 위협
- size: small · height: short · gutter_after: tight
- camera: eye-level 약간 위, medium-close-up (손 + 턱 아래 얼굴)
- composition: 왼쪽에 세던 손이 멈춘 채 봉투 위에. 오른쪽에 봉투 옆 **얇은 지폐 다발**(두께로 "적다"가 읽힘). 프레임 위 가장자리에 하린의 턱·입매(아래로 향한 시선). **오른쪽 위 1/3은 흐린 벽/어둠.**
- characters: 하린 `HARIN_FACTORY` — 숨이 한 번 멎은 입매
- props: 얇은 지폐 다발, 봉투
- emotion/tension: 결핍.
- motion/direction: 손 → 얇은 다발.
- dialogue_ref: 하린: "…모자라." / KM: ហារីន៖ "…មិនគ្រប់ទេ។"
- art_space: **우측 상단 1/3** 흐린 벽 면
- fx/note: —
- no_text: 지폐 무지.

### panel_012
- scene_id: S4 / location: LOC_HOME_TABLE
- time/light: 같은 새벽 · 창의 푸른빛이 얼굴 반쪽에, 나머지 반은 형광등의 흐린 흰빛
- beat: 욕망 한 줄 (긴장 5) · H2
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up 정면
- composition: 하린 얼굴 정면, 약간 왼쪽 1/3에. 옅은 다크서클, 단단한 입매, 정수리는 머리망 자국으로 납작, 낮은 포니테일, 이마 옆 잔머리. 얼굴 왼쪽 절반에 창의 푸른빛. **오른쪽 1/3은 흐린 부엌 배경(초점 밖)**.
- characters: 하린 `HARIN_FACTORY` — 결심, 눈만 지침
- props: —
- emotion/tension: 결심.
- motion/direction: 정면 응시.
- dialogue_ref: 하린: "동생 졸업할 때까지만." / KM: ហារីន៖ "ត្រឹមតែដល់ប្អូនរៀនចប់។"
- art_space: **우측 1/3 상단** 초점 밖 배경
- fx/note: 반전 후 재독 — "그 동생도 내고 있다".
- no_text: 글자 없음.

### panel_013
- scene_id: S4 / location: LOC_HOME_TABLE
- time/light: 같은 새벽
- beat: 봉투 접기 — 아무도 몰라야 돼 (긴장 5) · 봉투 접힘 형태 각인
- size: insert · height: short · gutter_after: tight
- camera: eye-level 약간 위, close-up 손 (얼굴 아랫부분이 프레임 위 가장자리)
- composition: 두 손이 봉투를 **세로로 세 번 접고 빨간 고무줄 한 줄을 가로로 감는** 순간. 봉투는 지폐가 들어 조금 도톰. 프레임 중앙 아래쪽에 손. **위쪽 40%는 흐린 식탁 너머 어둠·벽.**
- characters: 하린(손 + 턱)
- props: PROP_ENVELOPE(세 번 접힘, 빨간 고무줄) — **050·058과 똑같은 접힘·고무줄 위치**
- emotion/tension: 조용한 맹세.
- motion/direction: 손 동작 → 아래(다음 패널).
- dialogue_ref: 하린: "아무도 몰라야 돼." / KM: ហារីន៖ "កុំឲ្យអ្នកណាដឹង។"
- art_space: **상단 40%** 흐린 배경
- fx/note: 접힘 방향·고무줄 위치를 PROP_ENVELOPE 토큰으로 고정(050·058과 일치).
- no_text: 봉투 무지.

### panel_014
- scene_id: S4 / location: LOC_HOME_TABLE
- time/light: 같은 새벽 · 안방 문틈으로 따뜻한 빛 한 줄이 새로 듦
- beat: 들킬 뻔 (긴장 6)
- size: medium · height: normal · gutter_after: **xwide (같은 날 저녁으로 점프)**
- camera: eye-level, medium shot (하린 중심)
- composition: 하린이 봉투를 **백팩 앞주머니에 재빨리 밀어 넣고**(봉투 끝과 빨간 고무줄이 주머니 입구에 막 사라짐) 오른손으로 휜 숟가락에 밥을 뜬다. **화면 오른쪽 끝**에 막 열린 안방 문, 그 앞에 앞치마 끈을 묶는 미자(상반신 일부, **두 손은 등 뒤** — 반지 자국 숨김). **왼쪽 위 1/3은 크림색 벽·빈 공간.**
- characters: 하린 `HARIN_FACTORY` — 태연한 척, 시선은 밥 / 미자 `MIJA_HOME`(머스터드 앞치마 끈 묶는 중, 부스스, 반달 눈 미소)
- props: 백팩 앞주머니, 휜 숟가락, 밥그릇(덮개 접시는 옆에)
- emotion/tension: 반 박자 아슬아슬.
- motion/direction: 오른쪽 문(소리) → 왼쪽 하린.
- dialogue_ref: [효과음] 끼익 / KM 효과음: គ្រឹត… → 미자: "왔어? 밥 데워 줄까?" / KM: មីចា៖ "មកហើយ? ម៉ែកម្ដៅបាយឲ្យណា៎?" → 하린: "괜찮아." / KM: ហារីន៖ "មិនអីទេ ម៉ែ។"
- art_space: **우측 상단(문 위 벽, 작은 sfx 자리) + 상단 가로 띠 40%**(미자 말풍선 오른쪽, 하린 말풍선 왼쪽). 얼굴은 프레임 아래 절반에.
- fx/note: 말풍선 2 + sfx 1. 미자 손은 반드시 등 뒤.
- no_text: 글자 없음.

--- SCENE BREAK --- (S4 → S5 · 같은 날 저녁, 노란 펜던트)

### panel_015
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 14일 18:40 · 노란 펜던트 켜짐, 김 오르는 밥, 따뜻한 꿀색 · 가장자리는 부드러운 어둠
- beat: 다섯 식구의 저녁 — 잃을 것 (긴장 2) · L37·L41①·L26
- size: large · height: tall · gutter_after: normal
- camera: eye-level, long shot (식탁 전체) — **탑다운 금지**
- composition: §1-1 기준 와이드. 위쪽 1/4에 펜던트와 그 위 어둠 천장. 식탁: 왼쪽 끝 아버지, 오른쪽 끝 새롬(철제 접이식 의자), 앞쪽 하린(뒷모습 3/4), 안쪽 우진(왼쪽)·미자(오른쪽). 아버지가 말없이 반찬 접시를 새롬 쪽으로 민다. 식탁 가운데 **빵 한 개 남은 무지 비닐 봉지**. 뒤 조리대 위 **무지 쌀 포대**. 우진 의자 등받이에 **검은 숏패딩**. 김 오르는 밥, 숟가락 다섯.
- characters: 인호 `INHO_HOME`(굳게 다문 입, 접시를 미는 손) · 미자 `MIJA_HOME`(활짝 웃음) · 하린 `HARIN_HOME`(뒷모습) · 우진 `UJIN_HOME`(뚱한 얼굴) · 새롬 `SAEROM_HOME`(신남, 노란 별 머리핀)
- props: 쌀 포대(무지), 빵 봉지, 검은 숏패딩(의자), 반찬 접시
- emotion/tension: 평온, 온기 = 잃을 것.
- motion/direction: 아버지 손 → 접시 → 새롬 (좌→우).
- dialogue_ref: 인호: "먹어." / KM: អ៊ីនហូ៖ "ញ៉ាំទៅ។"
- art_space: **상단 1/4 펜던트 옆 어두운 천장**(왼쪽 위, 아버지 쪽) — 펜던트 자체는 피함
- fx/note: S5 전체 배치·축의 기준 컷. 미자 왼손은 이 컷에서 강조하지 않는다(반지 자국 첫 노출은 018).
- no_text: **쌀 포대 무지(상표·글자 없음)**, 빵 봉지 무지, 냉장고·달력 무지.

### panel_016
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 노란 펜던트
- beat: 빵 쟁탈전 (긴장 2) · 웃음
- size: small · height: short · gutter_after: tight
- camera: eye-level, medium two-shot
- composition: 식탁 오른쪽 끝, 마지막 빵 하나를 두고 **새롬(오른쪽)과 우진(왼쪽)이 동시에 손을 뻗는다.** 빵이 중앙. 새롬의 다리가 접이식 의자에서 흔들림. **상단 1/3은 펜던트 빛 아래 따뜻한 벽 면.**
- characters: 새롬 `SAEROM_HOME`(장난, 입 크게) · 우진 `UJIN_HOME`(귀찮은 듯 무심, 차콜 후드 소매가 손목 반쯤 덮음 — 팔찌는 아직 소매 안)
- props: 빵 봉지/빵 하나
- emotion/tension: 코믹, 가벼움.
- motion/direction: 두 손이 가운데로 모임.
- dialogue_ref: 새롬: "그거 내 거!" / KM: សែរ៉ូម៖ "នោះរបស់អូន!" → 우진: "이름 써 놨냐?" / KM: អ៊ូជីន៖ "មានសរសេរឈ្មោះឯងឬ?"
- art_space: **상단 1/3 따뜻한 벽 면** — 오른쪽 위(새롬) 먼저, 왼쪽 위(우진) 다음
- fx/note: 가벼운 속도선(손 동작) 허용. 빵 봉지에 이름·글씨를 그리지 말 것(대사 "이름 써 놨냐?"를 그림으로 만들지 않음).
- no_text: 빵·봉지에 이름·글자 없음.

### panel_017
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 얼굴을 읽는 아이 (긴장 3) · L36 예열
- size: medium · height: normal · gutter_after: tight
- camera: over-the-shoulder(새롬 어깨 너머로 하린), close-up
- composition: 전경 오른쪽 아래 새롬의 단발·노란 별 머리핀·빵을 쥔 손(초점 약간 밖). 중경 하린 얼굴이 가깝게 — 옅은 다크서클, 놀람을 감추는 반 박자(눈만 살짝 커짐). **상단 1/3은 하린 뒤 흐린 벽·그릇 선반.**
- characters: 새롬(뒤통수·손, 하린 얼굴을 빤히 들여다봄) · 하린 `HARIN_HOME`
- props: 빵(새롬 손)
- emotion/tension: 웃음 속에 "다 보는 눈".
- motion/direction: 새롬 시선 → 하린 눈 밑.
- dialogue_ref: 새롬: "언니 눈 밑에 판다 살아? 다 보여~" / KM: សែរ៉ូម៖ "បងស្រី! ផេនដាមករស់ក្រោមភ្នែកបងឬ? ឃើញអស់ហើយ~"
- art_space: **상단 1/3 흐린 벽·선반** (하린 눈 위를 피해서)
- fx/note: 말풍선이 길다(2줄). 꼬리는 전경 새롬 쪽(오른쪽 아래).
- no_text: 글자 없음.

### panel_018
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 펜던트 빛이 전경 미자의 손을 정면에서 비춤
- beat: 웃음 정점 (긴장 2, 회차 최저) · **L06 심기 — 반지 자국 첫 노출**
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, medium-wide
- composition: 중경에 웃는 식탁 — 하린의 한쪽 입꼬리 웃음, 새롬 깔깔, 아버지 입가가 살짝 풀림, 우진 피식. **전경 왼쪽 아래**에 반찬 접시를 건네는 **미자의 왼손**, 약지에 **피부보다 한 톤 밝은 5mm 하얀 반지 자국**(반지 없음)이 펜던트 빛 정면에 또렷이. 아무도 손을 보지 않는다. **상단 1/4은 펜던트 옆 어두운 천장.**
- characters: 하린(한쪽 입꼬리) · 새롬(웃음) · 인호(입가 풀림) · 우진(피식) · 미자(손만 전경)
- props: PROP_RING_MARK, 반찬 접시
- emotion/tension: 온기 정점.
- motion/direction: 전경 손 → 중경 웃음.
- dialogue_ref: 하린: "판다가 너보다 빵은 덜 먹어." / KM: ហារីន៖ "ផេនដាញ៉ាំនំបុ័ងតិចជាងអូនទៀត។"
- art_space: **상단 1/4 어두운 천장**(가운데~오른쪽)
- fx/note: **반지는 절대 그리지 않는다.** 반지 자국은 미묘하지만 읽혀야 함.
- no_text: 글자 없음.

### panel_019
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 펜던트 빛이 팔찌 금색 선에 한 번 반짝
- beat: 팔찌 번쩍 (긴장 4) · **L04① · L05 (복제품)**
- size: insert · height: short · gutter_after: tight
- camera: **손목을 약간 위에서 내려다보는 extreme-close-up** (★ panel_048과 같은 앵글·같은 크기)
- composition: 새롬의 작은 손이 빵을 낚아채려다 **우진의 왼손목을 잡는다**. 차콜 후드 소매가 밀려 올라가며 **진초록 옥팔찌가 돌아가** 금 간 자리가 카메라를 향한다. **팔찌가 프레임 폭의 약 40%, 프레임 중앙**, 금 간 자리 위의 **금색 선이 한 번 반짝**. 배경은 초점 밖 나무 식탁.
- characters: 새롬(손) · 우진(왼손목)
- props: **PROP_BRACELET_COPY** — 진초록 옥 1.2cm 둥근 뱅글, 비스듬한 금 위 **납작한 금색 칠 선(도드라짐 없음)**, **옥 안 흰 구름 무늬 없음**
- emotion/tension: 웃음 속 한 번의 번쩍임.
- motion/direction: 새롬 손 → 팔찌 → 다음 패널.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 특별 주의 — **흰 구름 무늬가 그려지면 재그림**(TW6). 048과 앵글·크기·팔찌 위치(중앙, 40%, 금 자리 정면)를 반드시 맞춘다. 차이는 금색 선의 도드라짐과 구름 무늬뿐.
- no_text: 팔찌에 각인·글자 없음.

### panel_020
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「절대 안 팔아」 (긴장 4) · E01-B ⟨이중의미⟩ · L38
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium two-shot
- composition: 오른쪽 새롬(빵을 쥐고 장난스럽게 고개를 기울임), 왼쪽 우진이 손목을 홱 빼서 가슴 쪽으로 당김, 턱에 힘. 팔찌는 움직임 속에 소매 끝으로 반쯤 가려짐(초록 한 점). **상단 1/3은 두 사람 머리 위 따뜻한 벽.**
- characters: 새롬 `SAEROM_HOME`(장난) · 우진 `UJIN_HOME`(정색, 턱에 힘, 시선을 피하지 않음)
- props: 팔찌(소매 끝 초록 한 점), 빵
- emotion/tension: 정색이 웃음을 살짝 끊는다.
- motion/direction: 오른쪽 새롬 → 왼쪽 우진.
- dialogue_ref: 새롬: "그 팔찌 팔면 빵 몇 봉지야~?" / KM: សែរ៉ូម៖ "កងដៃហ្នឹងលក់ បាននំបុ័ងប៉ុន្មានថង់~?" → 우진: "이거 절대 안 팔아." / KM: អ៊ូជីន៖ "នេះ ខ្ញុំមិនលក់ដាច់ខាត។"
- art_space: **상단 1/3 벽** — 오른쪽 위(새롬) → 왼쪽 위(우진)
- fx/note: 우진 오른손 반창고는 여기서는 강조하지 않음(021에서).
- no_text: 글자 없음.

### panel_021
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 덮는 손 (긴장 4) · L04② · **L15 (반창고)**
- size: insert · height: short · gutter_after: normal
- camera: eye-level 약간 위, close-up 손
- composition: 우진이 왼손 소매를 끌어내리고 그 위를 **오른손으로 덮는다**. 오른손 손가락 마디의 **긁힌 자국과 살색 반창고 하나**가 프레임 중앙에 또렷. 팔찌는 완전히 가려짐. 배경 식탁 초점 밖.
- characters: 우진(손만)
- props: 반창고, 소매
- emotion/tension: 감추는 동작(재독 단서).
- motion/direction: 정지.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 반창고에 무늬·글씨 없음.
- no_text: 글자 없음.

### panel_022
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「그 일도 삼촌이」 (긴장 5) · E01-M ⟨이중의미⟩ · L07·L37
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium shot (미자 중심)
- composition: 미자가 레인지 쪽 자리에서 몸을 반쯤 돌려 **오른손 국자로 조리대 위 무지 쌀 포대를 가리키며** 밝게 수다. 쌀 포대는 오른쪽 배경. **배경 왼쪽, 초점 밖**: 하린의 숟가락이 밥그릇 위에서 아주 살짝 멈춤, 그 옆 아버지 옆모습. **상단 40%는 레인지 위 벽·그릇 선반 위쪽의 평평한 벽.**
- characters: 미자 `MIJA_HOME`(밝은 반달 눈, 큰 손짓) · 하린(배경, 숟가락 멈춤) · 인호(배경)
- props: 쌀 포대(무지), 국자
- emotion/tension: 밝음 속 균열의 시작.
- motion/direction: 국자 → 쌀 포대(오른쪽), 시선은 왼쪽 배경 하린으로 되돌아옴.
- dialogue_ref: 미자: "아이고, 삼촌은 또 쌀을 보내셨어." / KM: មីចា៖ "អូយ ពូផ្ញើអង្ករមកទៀតហើយ។" → 미자: "그 일도 삼촌이 다 알아서 해 주셨지, 그 양반 아니었으면—" / KM: មីចា៖ "រឿងនោះ ពូគាត់ចាត់ចែងឲ្យអស់ បើគ្មានគាត់ទេ…"
- art_space: **상단 40% 벽** — 같은 화자 말풍선 2개를 위→아래로(두 번째가 길다)
- fx/note: —
- no_text: **쌀 포대 무지**, 그릇 선반 무지.

### panel_023
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 숟가락을 내려놓는다 (긴장 6) · **L10**
- size: insert · height: short · gutter_after: wide (정적)
- camera: eye-level(식탁 면 높이), extreme-close-up 손
- composition: 아버지의 오른손이 숟가락을 나무 식탁 위, 밥그릇 옆에 내려놓는 순간. **엄지 옆 굳은살과 굵은 마디.** 진갈색 니트 소매 끝. **위쪽 1/3은 초점 밖 어두운 배경**(sfx 자리).
- characters: 인호(손)
- props: 숟가락(곧은 것 — 휜 끝 강조 없음), 밥그릇
- emotion/tension: 작은 소리가 크게.
- motion/direction: 위→아래로 내려놓는 동작.
- dialogue_ref: [효과음] 탁 / KM 효과음: ទក់!
- art_space: **상단 1/3 어두운 배경** (sfx만)
- fx/note: 작은 충격 라인 정도만.
- no_text: 숟가락 각인 없음.

### panel_024
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 펜던트 빛은 같지만 공기가 식음(채도 살짝 낮춤)
- beat: 「…끝난 얘기다.」 — 얼어붙은 식탁 (긴장 6) · E01-F ⟨이중의미⟩ · L32
- size: large · height: normal · gutter_after: wide
- camera: eye-level, **정면 wide** (아버지 머리 자리 정면에서 식탁 전체 — 아버지가 프레임 중앙 뒤쪽)
- composition: 중앙 배치·좌우 대칭. 식탁 맞은편 끝 중앙에 아버지, 밥그릇만 내려다봄. 양쪽 긴 면의 식구들이 멈춤(왼쪽 하린·오른쪽 우진/미자, 맨 앞 새롬 뒤통수는 전경 아래 가장자리 — 또는 생략). 아무도 젓가락을 움직이지 않는다. 밥그릇들에서 김만 오름. **상단 1/3은 아버지 뒤 어두운 벽.**
- characters: 인호(굳은 입, 시선 아래) · 하린(굳은 옆얼굴) · 우진(시선 내림) · 미자(웃음이 멈춘 입) · 새롬(눈만 움직임)
- props: 김, 숟가락 놓인 자리
- emotion/tension: 냉기.
- motion/direction: 정지, 시선은 중앙 아버지로 수렴.
- dialogue_ref: 인호: "…끝난 얘기다." / KM: អ៊ីនហូ៖ "…រឿងហ្នឹង ចប់ហើយ។"
- art_space: **상단 1/3 아버지 머리 위 어두운 벽** (펜던트를 화면 가운데 위에 두지 말고 프레임 위로 잘라냄)
- fx/note: 이 컷은 015와 **반대 방향 축(머리 자리 정면)** — 설정용 정면 컷이라 허용. 식구 위치는 §1-1 배치를 머리 자리 쪽에서 본 그대로(하린 = 아버지 오른쪽 = 화면 왼쪽... ※ 아버지가 카메라를 보고 있으므로 **아버지의 오른쪽 = 화면 왼쪽**에 하린).
- no_text: 글자 없음.

### panel_025
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 새롬이 하린을 한 번 본다 (긴장 4) · **L36 (EP04)**
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up (새롬)
- composition: 새롬 얼굴이 화면 오른쪽 2/3, 시선은 왼쪽 전경으로. **전경 왼쪽, 초점 밖**: 하린의 굳은 옆얼굴(오트밀 카디건 어깨). 새롬의 노란 별 머리핀이 또렷. 반 박자 읽는 눈. **상단 1/3 흐린 따뜻한 벽.**
- characters: 새롬 `SAEROM_HOME`(웃음기 없는 관찰하는 눈 — 반 박자) · 하린(전경, 흐림)
- props: 노란 별 머리핀
- emotion/tension: 아이가 무언가 안다.
- motion/direction: 새롬 시선 → 왼쪽 하린.
- dialogue_ref: 미자 (화면 밖): "아이고, 밥상에서 내가 무슨 소리를…" / KM: មីចា៖ "អូយ នៅលើតុបាយ ម៉ែទៅនិយាយរឿងអីចឹង…"
- art_space: **상단 1/3 오른쪽** 흐린 벽 — 꼬리는 프레임 오른쪽 가장자리(화면 밖 미자 = 레인지 쪽)
- fx/note: 새롬 얼굴은 웃지 않지만 무섭지도 않게.
- no_text: 글자 없음.

### panel_026
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 펜던트 온기 회복
- beat: 침묵을 깨는 계란말이 (긴장 4) · 온기
- size: medium · height: normal · gutter_after: wide (식사 후반으로)
- camera: eye-level, medium-wide
- composition: 새롬이 접이식 의자에서 몸을 쭉 내밀며 **젓가락으로 아버지 앞 계란말이 접시를 가리킨다**(오른쪽→왼쪽). 왼쪽 아버지가 말없이 접시를 밀어 줌. 배경의 미자·하린 입가에 웃음 복귀. **상단 1/3 펜던트 옆 따뜻한 어둠.**
- characters: 새롬(장난, 활짝) · 인호(무표정, 손만 친절) · 미자·하린(배경 웃음)
- props: 계란말이 접시, 젓가락
- emotion/tension: 공기를 구하는 막내.
- motion/direction: 새롬 → 아버지 앞 접시 (우→좌).
- dialogue_ref: 새롬: "아빠, 그 계란말이 안 먹을 거면 내 거!" / KM: សែរ៉ូម៖ "ប៉ា! បើពងមាន់ចៀនហ្នឹងប៉ាមិនញ៉ាំ ឲ្យកូនណា៎!"
- art_space: **상단 1/3 오른쪽**(새롬 머리 위)
- fx/note: —
- no_text: 글자 없음.

### panel_027
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁, 식사 후반 · 김이 줄어듦
- beat: 「나 배불러」 (긴장 4) · L41①(숏패딩)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, medium shot (우진, 하린 쪽에서)
- composition: 우진 앞 반찬이 거의 그대로. 우진이 반찬 접시를 식탁 건너 하린 쪽(카메라 쪽)으로 밀어 놓는다. **우진 등 뒤 의자 등받이에 검은 숏패딩**(무광, 로고 없음)이 또렷. 전경 아래 가장자리에 하린 손/그릇 일부. **상단 1/3 우진 머리 위 벽·선반.**
- characters: 우진 `UJIN_HOME` — 무심한 척, 시선은 접시
- props: 반찬 접시, 검은 숏패딩
- emotion/tension: 무심한 척, 재독 = 누나 걱정.
- motion/direction: 우진 → 접시 → 하린(카메라).
- dialogue_ref: 우진: "나 배불러." / KM: អ៊ូជីន៖ "ខ្ញុំឆ្អែតហើយ។"
- art_space: **상단 1/3 벽** (왼쪽 위)
- fx/note: 숏패딩은 057과 같은 옷으로 알아볼 수 있게(색·광택·길이).
- no_text: 패딩 로고·글자 없음.

### panel_028
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「다이어트? 연애?」 (긴장 5)
- size: small · height: short · gutter_after: tight
- camera: eye-level, close-up (새롬)
- composition: 새롬이 턱을 괴고 우진(화면 왼쪽 밖)을 놀리듯 곁눈질. 얼굴은 화면 오른쪽 절반. **왼쪽 절반은 흐린 따뜻한 배경.**
- characters: 새롬 `SAEROM_HOME` — 장난스러운 반쯤 웃는 얼굴, 눈은 상대를 읽는 중
- props: —
- emotion/tension: 농담이 핵심을 찌름.
- motion/direction: 새롬 시선 → 왼쪽(다음 패널 우진).
- dialogue_ref: 새롬: "오빠 요즘 왜 반찬 안 먹어? 다이어트? 연애?" / KM: សែរ៉ូម៖ "បងប្រុស សព្វថ្ងៃម៉េចមិនសូវញ៉ាំម្ហូប? សម្រកខ្លួន? ឬមានសង្សារ?"
- art_space: **왼쪽 절반** 흐린 배경 (말풍선 2줄)
- fx/note: —
- no_text: 글자 없음.

### panel_029
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「과외 알바 늘렸어」 (긴장 5) · 가짜 용의자 · L15
- size: small · height: short · gutter_after: tight
- camera: eye-level, close-up (우진)
- composition: 우진이 시선을 오른쪽 아래로 피하며 **오른손으로 숟가락을 쥔다** — 손등 반창고가 보임. **왼손은 소매 속**(팔찌 안 보임). 얼굴은 화면 왼쪽 절반. **오른쪽 위 절반은 흐린 배경.**
- characters: 우진 `UJIN_HOME` — 뚱한 무표정, 시선 회피
- props: 숟가락, 반창고
- emotion/tension: 수상한 거짓말.
- motion/direction: 시선 회피(오른쪽 아래).
- dialogue_ref: 우진: "과외 알바 늘렸어. 밖에서 먹어." / KM: អ៊ូជីន៖ "ខ្ញុំថែមម៉ោងបង្រៀនគួរ។ ញ៉ាំនៅក្រៅ។"
- art_space: **우측 상단 절반** 흐린 배경
- fx/note: 028과 좌우 반전 대칭(핑퐁).
- no_text: 글자 없음.

### panel_030
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「언제부터?」/「신경 꺼」 (긴장 5)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, shot-reverse-shot을 한 컷에 — 식탁 옆에서 본 **측면 two-shot** (하린 왼쪽, 우진 오른쪽, 식탁을 사이에 두고 마주봄)
- composition: 왼쪽 하린(눈이 가늘어짐, 앞으로 살짝 기울임), 오른쪽 우진(턱을 든 반항, 시선은 옆). 사이 식탁 위 반찬 접시. **상단 1/3 두 사람 머리 위 벽**, 말풍선 왼쪽→오른쪽.
- characters: 하린 `HARIN_HOME`(의심) · 우진 `UJIN_HOME`(퉁명)
- props: 반찬
- emotion/tension: 의심 대 차단.
- motion/direction: 좌(하린) → 우(우진).
- dialogue_ref: 하린: "늘렸어? 언제부터?" / KM: ហារីន៖ "ថែម? តាំងពីពេលណា?" → 우진: "신경 꺼." / KM: អ៊ូជីន៖ "កុំរវល់។"
- art_space: **상단 1/3 벽** — 왼쪽 위(하린), 오른쪽 위(우진)
- fx/note: §1-1 축 유지: 하린 화면 왼쪽, 우진 화면 오른쪽(031·032까지 동일).
- no_text: 글자 없음.

### panel_031
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 일어서는 우진이 펜던트 빛을 가려 얼굴에 그림자 조금
- beat: 「돈은 내가 벌어」/「누나나 잘해」 (긴장 6, 구간 정점) · ⟨이중의미⟩
- size: large · height: tall · gutter_after: tight
- camera: **low-angle**, 앉은 하린 높이에서 일어서는 우진을 올려다봄
- composition: 프레임 오른쪽에 의자를 밀고 일어서는 우진(178cm, 길고 마른 실루엣, 위로 길게). 왼쪽 아래 전경에 앉은 하린의 어깨·옆얼굴(단단한 입매). 배경 중간에 인호와 미자의 오가는 눈길(작게). **상단 왼쪽 1/3은 펜던트 옆 어두운 천장 면** — 하린 말풍선, **우진 머리 왼쪽 옆 중간 높이 벽 면** — 우진 말풍선.
- characters: 우진 `UJIN_HOME`(턱에 힘, 내려다봄) · 하린 `HARIN_HOME`(단호) · 인호·미자(배경, 눈길)
- props: 밀려난 의자(등받이 패딩이 흔들림)
- emotion/tension: 충돌.
- motion/direction: 아래(하린) → 위(우진) → 다음 패널 방문.
- dialogue_ref: 하린: "너는 공부만 해. 돈은 내가 벌어." / KM: ហារីន៖ "ឯងរៀនតែមួយមុខទៅ។ លុយ ចាំបងរក។" → 우진: "누나나 잘해." / KM: អ៊ូជីន៖ "បងមើលខ្លួនឯងទៅ។"
- art_space: **상단 왼쪽 1/3 어두운 천장**(하린) + **우진 얼굴 왼쪽 옆 중간 벽**(우진) — 우진 얼굴 위는 비우지 않음
- fx/note: 우진은 패딩을 입지 않고 일어선다(패딩은 의자에 남음 — 032).
- no_text: 글자 없음.

### panel_032
- scene_id: S5 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 우진 자리가 비어 펜던트 빛이 빈 의자에
- beat: 빈 자리 (긴장 5) · L41①(재노출)
- size: medium · height: normal · gutter_after: **xwide (그날 밤 계단으로)**
- camera: over-the-shoulder (하린 오른쪽 어깨 너머 → 맞은편 빈 의자)
- composition: 전경 왼쪽 하린의 어깨·옆얼굴(의심하는 눈). 맞은편 **우진의 빈 자리**: 거의 그대로인 반찬, 밀려난 의자 등받이에 걸린 **검은 숏패딩**. 배경 오른쪽 끝에 방금 닫힌 방문(복도 쪽). **상단 1/3 빈 의자 위 벽.**
- characters: 하린 `HARIN_HOME`
- props: 검은 숏패딩(의자), 남은 반찬, 닫힌 방문
- emotion/tension: 의심.
- motion/direction: 하린 시선 → 빈 의자 → 방문.
- dialogue_ref: [효과음] 탁 / KM 효과음: ផាំង! → 하린 (생각): "…밖에서 뭘 하길래." / KM: ហារីន (គិត)៖ "…នៅខាងក្រៅ ធ្វើអីខ្លះ?"
- art_space: **우측 상단 방문 근처 벽**(sfx) + **상단 가운데 빈 의자 위 벽**(생각 풍선)
- fx/note: —
- no_text: 글자 없음.

--- SCENE BREAK --- (S5 → S6 · 같은 날 21:30 계단 골목, 남색 밤)

### panel_033
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 14일 21:30 · 남색 하늘(#1E2A44), 층계참마다 노란 가로등 점선
- beat: 가장 다정한 어른의 등장 (긴장 4)
- size: large · height: tall · gutter_after: normal
- camera: high-angle, long shot (계단을 비스듬히 내려다봄)
- composition: 프레임 위쪽에서 하린이 서둘러 계단을 내려오는 중(뒷모습 3/4), 아래쪽에서 은색 보온병을 든 삼촌이 올라오며 반갑게 한 손을 든다. 중간 층계참에 **낡은 평상**, 할머니가 앉아 귤을 깐다(작게). 층계참 노란 가로등 두 개가 점선처럼. **상단 1/4 남색 하늘·지붕선**(하린 머리 위 쪽은 하늘만).
- characters: 하린 `HARIN_COMMUTE`(네이비 패딩 조끼, 검은 백팩, 급한 걸음) · 석구 `SEOKGU_OUT`(진갈색 울 코트, 회갈색 목도리, 목에 돋보기, 반가운 웃음 — 눈이 거의 감김) · 할머니 `TOKEN-YAI`(평상, 귤, 심드렁)
- props: PROP_THERMOS(은색), 귤, 평상
- emotion/tension: 다정함의 등장, 독자는 경계.
- motion/direction: 하린 하강 / 삼촌 상승 — 두 동선이 중간에서 만남.
- dialogue_ref: 석구: "하린아, 출근하니? 삼촌은 산책 중이다." / KM: សុកគូ៖ "ហារីន ទៅធ្វើការហើយឬ ក្មួយ? ពូដើរលេងបន្តិច។"
- art_space: **우측 하단~중단 담벼락 면**(삼촌 옆, 평평한 시멘트 담) — 꼬리는 삼촌 쪽. 하늘(상단)은 다음 컷 여유로 비워둠
- fx/note: S3b와 같은 계단(가로등·평상 위치 같게).
- no_text: 담·전봇대 전단·번지판 없음, 보온병 무지.

### panel_034
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 같은 밤 · 가로등 노란빛이 삼촌 얼굴 위에서
- beat: 「너 내일 쉬는 날이잖아」 — 보조 반전 (긴장 7) · E01-D · **L12**
- size: medium · height: normal · gutter_after: normal
- camera: low-angle, 하린 발 옆 계단 높이(무릎 높이)에서 아래 계단을 봄 — **close-up + 발 인서트를 한 이미지 안 구도로**
- composition: **전경 오른쪽 아래(크게)**: 계단 모서리 위에서 **멈춘 하린의 낡은 흰 운동화**(한 발은 다음 칸에 닿기 전, 반 박자 정지). **중경 왼쪽**: 한 칸 아래에서 고개를 들어 목소리를 낮추는 삼촌의 둥근 얼굴(웃는 눈, 웃음 주름). **상단 1/3 남색 하늘·담 위 어둠.**
- characters: 석구 `SEOKGU_OUT`(다정, 목소리 낮춤) · 하린(발·종아리만)
- props: 계단 모서리
- emotion/tension: 서늘한 작은 정점.
- motion/direction: 삼촌 얼굴 → 멈춘 발.
- dialogue_ref: 석구: "내일 저녁 잊지 마라. 너 내일 쉬는 날이잖아." / KM: សុកគូ៖ "ល្ងាចស្អែកកុំភ្លេចណា៎។ ស្អែកឯងថ្ងៃសម្រាកហ្នឹង។" → 하린 (생각): "…삼촌한테 말한 적 없는데." / KM: ហារីន (គិត)៖ "…មិនដែលប្រាប់ពូផង។"
- art_space: **상단 1/3 남색 하늘**: 왼쪽 위(삼촌 대사, 꼬리 ↙ 삼촌) + 오른쪽 위(생각 풍선, 꼬리 없음, 발 쪽)
- fx/note: Flow 단일 이미지로 "얼굴 + 발"을 한 프레임에 담는 구도(분할 프레임 금지). 하린 얼굴은 안 보여도 된다.
- no_text: 글자 없음.

### panel_035
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 같은 밤 · 가로등 아래
- beat: 「그쪽에서 급하대」 + 「우진이나 엄마는 정말 모르죠?」 (긴장 6) · E01-G · E01-Q · L33
- size: large · height: tall · gutter_after: tight
- camera: eye-level(하린 쪽이 한 칸 위라 살짝 내려다봄), medium two-shot
- composition: 왼쪽 아래 삼촌(한 칸 아래) — 보온병 뚜껑을 돌리며 "어쩔 수 없다"는 듯 눈썹을 올린 다정한 얼굴. 오른쪽 위 하린 — 백팩 끈을 쥐고 그의 얼굴을 살핌. 둘은 **프레임 아래 55%**에. **상단 45%는 남색 하늘 + 담 위 어둠**(가로등은 프레임 오른쪽 가장자리로 비켜 둠).
- characters: 석구 `SEOKGU_OUT`(곤란한 척하는 다정함) · 하린 `HARIN_COMMUTE`(살피는 눈, 굳은 입)
- props: 보온병(뚜껑 돌림)
- emotion/tension: 압력의 출처가 흐려짐.
- motion/direction: 삼촌 말 2개(위 왼쪽) → 하린 말(오른쪽 아래쪽).
- dialogue_ref: 석구: "1일에 모자랐던 거, 그쪽에서 급하대." / KM: សុកគូ៖ "ដែលខ្វះពីថ្ងៃទី១ហ្នឹង ខាងនោះគេប្រញាប់ចង់បានណា៎។" → 석구: "삼촌이 할 얘기도 있고." / KM: សុកគូ៖ "ពូមានរឿងចង់និយាយជាមួយឯងផង។" → 하린: "…우진이나 엄마는, 정말 모르죠?" / KM: ហារីន៖ "…អ៊ូជីន ឬម៉ែ មិនដឹងមែនទេ ពូ?"
- art_space: **상단 45% 남색 하늘**: 왼쪽 위 삼촌 말풍선 2개(위→아래), 오른쪽 중단 하린 말풍선 1개
- fx/note: ★ 말풍선 3개(대본 1:1 유지) — 그래서 tall + 넓은 빈 하늘. 둘의 얼굴은 하단 절반에서 벗어나지 않게.
- no_text: 글자 없음.

### panel_036
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 같은 밤 · 가로등 노란빛 바로 아래 둥근 얼굴
- beat: 「네 동생이 어떻게 알아」 (긴장 6) · E01-N ⟨단서 호칭⟩ · L40
- size: medium · height: normal · gutter_after: tight
- camera: eye-level(하린 시점, 약간 내려다봄), medium-close-up (삼촌)
- composition: 삼촌이 웃음 섞어 고개를 젓는다. 둥근 얼굴, 눈이 웃음 주름에 묻힘, 붉은 볼. 얼굴은 화면 아래 2/3, 약간 왼쪽. **오른쪽 위 1/3은 남색 하늘·담.** 가로등은 화면 밖 위에서 빛만.
- characters: 석구 `SEOKGU_OUT` — 안심시키는 얼굴(악역 인상 금지)
- props: 목에 건 돋보기
- emotion/tension: 거짓 안심.
- motion/direction: —
- dialogue_ref: 석구: "네 동생이 어떻게 알아. 아무도 몰라." / KM: សុកគូ៖ "ប្អូនឯងដឹងម៉េចកើត។ គ្មាននរណាដឹងទេ។"
- art_space: **우측 상단 1/3 남색 하늘**
- fx/note: 052와 같은 "웃음 주름에 묻힌 눈"(같은 얼굴이 대사만 바뀐다 — ប្អូនឯង → វា 대비).
- no_text: 글자 없음.

### panel_037
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 같은 밤 · 가로등 아래
- beat: T1 「이건 너랑 나만 아는 거다」 (긴장 7) · E01-T1 ⟨이중의미⟩ · L11·L43
- size: large · height: tall · gutter_after: normal
- camera: eye-level, close-up 손 → 그 너머 얼굴 (전경 가림 foreground occlusion)
- composition: **전경 중앙~왼쪽**: 하린의 네이비 패딩 조끼 어깨 위에 얹혀 두드리는 **삼촌의 두툼하고 깨끗한 손**(손톱 단정, 반지·시계 없음, 진갈색 코트 소매). **손 너머 오른쪽 중단**: 하린의 얼굴이 반쯤(눈과 코, 굳은 입은 손에 가림). **상단 40%는 남색 하늘·담 위 어둠** — 긴 말풍선 2개.
- characters: 석구(손·소매) · 하린 `HARIN_COMMUTE`(무표정, 눈만 지침)
- props: —
- emotion/tension: 다정한 결박.
- motion/direction: 손 → 하린 눈.
- dialogue_ref: 석구: "네 아버지 혼자 못 버티는 거, 우리 둘이 조용히 보태는 거…" / KM: សុកគូ៖ "ប៉ាឯងទ្រាំម្នាក់ឯងមិនរួច យើងពីរនាក់ជួយបន្ថែមស្ងាត់ៗ…" → 석구: "이건 너랑 나만 아는 거다." / KM: សុកគូ៖ "រឿងនេះ ដឹងតែឯងនឹងពូទេ ណា៎។"
- art_space: **상단 40% 남색 하늘** — 첫 말풍선이 가장 길다(2줄), 꼬리는 프레임 왼쪽 가장자리(손의 주인 쪽)
- fx/note: 하린의 거친 손과 삼촌의 깨끗한 손 대비는 이 컷의 핵심(하린 손은 아래 가장자리에 백팩 끈을 쥔 채 살짝 보여도 좋음).
- no_text: 글자 없음.

### panel_038
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 같은 밤
- beat: 「네, 삼촌. 조심할게요.」 (긴장 6) · ⟨단서 호칭⟩ 기준점
- size: small · height: short · gutter_after: tight
- camera: eye-level 약간 위, close-up
- composition: 고개를 숙여 대답하는 하린, 얼굴은 화면 오른쪽 절반, 아래쪽에 **백팩 끈을 꽉 쥔 손**. **왼쪽 절반은 담·어둠.**
- characters: 하린 `HARIN_COMMUTE` — 공손하지만 말이 짧음, 시선 아래
- props: 백팩 끈
- emotion/tension: 순응.
- motion/direction: 고개 숙임.
- dialogue_ref: 하린: "…네, 삼촌. 조심할게요." / KM: ហារីន៖ "…ចាស ពូ។ ក្មួយនឹងប្រយ័ត្ន។"
- art_space: **왼쪽 절반** 어두운 담 면
- fx/note: 045와 대비되도록 이 컷의 하린은 시선을 내린다.
- no_text: 글자 없음.

### panel_039
- scene_id: S6 / location: LOC_ALLEY_STAIRS
- time/light: 같은 밤 · 위쪽 계단은 가로등 사이 어둠
- beat: 돌아보지 않는 삼촌, 동네 여론 (긴장 5) · L23
- size: large · height: tall · gutter_after: **xwide (다음 날 노을로 시간 점프)**
- camera: low-angle, long shot (하린 뒤 아래에서 계단 위를 봄)
- composition: 프레임 위쪽, 보온병을 흔들며 계단 위 어둠으로 올라가는 삼촌의 뒷모습(작게, 코트·목도리 실루엣), 돌아보지 않음. 중간 전경에 돌아보는 하린의 상반신 뒷모습 3/4(아래 계단 쪽에 서서 위를 봄). **왼쪽 중단 층계참 평상**에 귤 까는 할머니(혀를 차는 입). **오른쪽 중단은 평평한 시멘트 담 면.**
- characters: 석구(뒷모습) · 하린 `HARIN_COMMUTE`(돌아봄) · 할머니 `TOKEN-YAI`(심드렁, 귤)
- props: 보온병, 귤, 평상, 가로등
- emotion/tension: 여운, 동네의 신뢰라는 벽.
- motion/direction: 하린 → 위로 사라지는 삼촌 / 할머니 말.
- dialogue_ref: 할머니: "석구 같은 사람 없어. 암, 없지." / KM: យាយ៖ "រកមនុស្សដូចសុកគូ មិនបានទេចៅ។ អត់មានទេ។"
- art_space: **오른쪽 중단 시멘트 담 면**(할머니 쪽으로 꼬리 ←), 위쪽 어둠의 삼촌 실루엣은 가리지 않게
- fx/note: 할머니는 골목 장면에만(자주색 몸뻬 — 가게 커튼과 혼동 없게 채도 낮춤).
- no_text: 글자 없음.

--- SCENE BREAK --- (S6 → S7 · 15일 노을, 같은 계단 · 시간 경과는 빛으로만, 두 번째 env 없음)

### panel_040
- scene_id: S7 / location: LOC_ALLEY_STAIRS
- time/light: 15일 ~17:20 · **노을 주황 사선**이 계단을 비스듬히 자름, 긴 그림자
- beat: 숨 고르기 (긴장 3) · 시간 경과 밸브
- size: large · height: tall · gutter_after: normal
- camera: eye-level, medium-wide
- composition: 같은 계단 골목의 층계참. 주황 사선이 계단·담을 대각선으로 가르고, 하린은 빛과 그림자의 경계에 서서 숨을 고름. 시선은 발밑, **한 손이 패딩 조끼 주머니(안의 봉투)를 누름**. 평상은 비어 있음. 위쪽은 따뜻한 하늘.
- characters: 하린 `HARIN_COMMUTE`(세탁소 일 뒤 피로, 고개 숙임)
- props: 조끼 주머니(봉투는 안 보임, 손이 누르는 모양만)
- emotion/tension: 정적, 각오.
- motion/direction: 아래로 내려가는 시선 → 다음 패널(위에서 내려다본 골목).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 새벽 청(008) → 밤 남색(033) → 노을 주황(040)으로 날짜 경과를 빛으로만 보여 준다.
- no_text: 글자 없음.

### panel_041
- scene_id: S7 / location: LOC_ALLEY_STAIRS
- time/light: 같은 노을 · 골목 아래쪽은 이미 그늘, 위쪽만 주황
- beat: 아주 작은 검은 숏패딩 (긴장 4) · **L13 · L41②**
- size: large · height: tall · gutter_after: **xwide (그날 밤 가게로)**
- camera: high-angle, extreme-long shot (계단 위에서 골목 전체를 내려다봄)
- composition: 전경 위쪽 귀퉁이(왼쪽 위)에 고개 숙인 하린의 머리·어깨(작게, 뒤에서). 아래로 길게 이어지는 지그재그 계단·지붕·전선. **맨 아래 골목 입구, 금은방 모퉁이**로 **아주 작은 인물 하나 — 검은 숏패딩 + 검은 백팩의 뒷모습**이 꺾여 사라지는 중(프레임 높이의 3–5% 크기). 얼굴·손목 안 보임. 하린은 그쪽을 보지 않는다.
- characters: 하린 `HARIN_COMMUTE`(전경, 작게) · 원경 인물(우진 — **식별 불가 크기**)
- props: 금은방 모퉁이(흰 간판 빈 면, 노을 그늘 속)
- emotion/tension: 재독자 전용 서스펜스.
- motion/direction: 하린 → 계단 → 맨 아래 작은 뒷모습(시선을 끝까지 내려보냄).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 원경 인물은 **아주 작게**. 얼굴·팔찌·특징 없이 검은 숏패딩 + 검은 백팩 실루엣만(027·057과 같은 옷으로 "다시 볼 때" 연결). 너무 크면 재그림.
- no_text: 간판 빈 면, 글자 없음.

--- SCENE BREAK --- (S7 → S8 · 15일 20:40 금은방 앞)

### panel_042
- scene_id: S8 / location: LOC_UNCLE_SHOP
- time/light: 15일 20:40 · 바깥 골목은 어둠, 가게만 차가운 흰 작업등(#E8F0F4) + 진열장 금빛 반사
- beat: 하얀 가게 (긴장 5) · L17
- size: large · height: tall · gutter_after: normal
- camera: eye-level, 유리문 밖에서 안으로 (프레임 인 프레임)
- composition: **전경 왼쪽**: 유리문 앞에서 숨을 고르는 하린의 옆·뒷모습(어둠 속, 흰빛이 얼굴 반쪽에). **유리 너머 중경**: 낮은 유리 진열장 두 칸(검은 벨벳 위 금 목걸이·반지, 가격표 없음), 그 뒤 작업대에 **앉은 삼촌**이 갈색 뿔테 돋보기를 이마로 올리며 웃는다. 작업대 위: 팔 접히는 흰 작업등, 루페, 작은 저울, 은색 보온병, **뒷면만 보이는 사진 액자(갈색 나무 받침)**. 벽에 바늘만 있는 시계. 진열장 뒤 깊숙이 바랜 자주색 커튼 끝이 살짝. **상단 1/4: 가게 위 빈 흰 간판 아래의 어두운 유리 윗부분/천장 면.**
- characters: 하린 `HARIN_COMMUTE`(긴장, 숨 고름, 서 있음) · 석구 `SEOKGU_SHOP`(베이지 니트 조끼, 흰 셔츠 소매 걷음, 앉아서 반가운 미소)
- props: 진열장, 작업대 소품, 액자(뒷면), 시계(바늘만)
- emotion/tension: 집의 노랑 ↔ 가게의 흰빛 온도 전환. 앉은 자(권력)와 선 자.
- motion/direction: 하린 → 유리 → 삼촌.
- dialogue_ref: 석구: "왔구나. 뒤로 가자." / KM: សុកគូ៖ "មកហើយ ក្មួយ។ តោះ ចូលទៅខាងក្រោយ។"
- art_space: **상단 1/4 어두운 유리 윗부분/천장 면**(오른쪽, 삼촌 위) — 작업등 머리를 피함
- fx/note: 사진 액자는 **반드시 뒷면**(나무 받침)만. 유리 반사는 약하게(글자처럼 보이는 반사 금지).
- no_text: **간판·유리문에 글자·스티커·영업시간 없음, 진열장 가격표 없음, 시계 숫자 없음, 저울 눈금 숫자 없음.**

--- SCENE BREAK --- (S8 → S9 · 뒷방, 커튼 안)

### panel_043
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 15일 20:42 · 천장 형광등 하나(약간 초록 기운) + 커튼 틈으로 새는 흰 작업등 한 줄
- beat: 밀실 — 차를 따르는 손, 장부를 덮는 손 (긴장 6) · L18·L19 · 봉투 다발(050 준비)
- size: large · height: tall · gutter_after: normal
- camera: eye-level(앉은 높이), medium-wide (방 전체)
- composition: §1-1 배치 기준 컷. 바랜 자주색 커튼(하린 등 뒤, 프레임 왼쪽 가장자리)을 지나 좁은 방. 앉은뱅이 탁자, 방석 둘. 오른쪽 안쪽에 앉은 삼촌이 **은색 보온병으로 흰 찻잔에 차를 따른다**(차 따르는 손이 프레임 중심). 탁자 위 **검은 표지 장부** — 하린이 방석에 앉는 순간 **삼촌의 왼손바닥이 자연스럽게 장부를 덮고** 있다. 하린 시점 화면 오른쪽 벽쪽에 **낮은 나무 서랍장**(작은 서랍 여러 칸, 놋쇠 손잡이), 그 위 **빨간 고무줄로 묶인 빈 갈색 봉투 다발**. 화면 왼쪽 안쪽 구석에 **작은 검은 철제 금고**. **상단 1/4: 형광등 아래 빈 벽면(왼쪽~가운데).**
- characters: 석구 `SEOKGU_SHOP`(돋보기는 이마 위, 다정한 미소, 차 따름) · 하린 `HARIN_COMMUTE`(앉는 중, 백팩은 옆에 내려놓음)
- props: PROP_THERMOS + 찻잔 둘, PROP_LEDGER(덮임), 금고, 서랍장, 봉투 다발
- emotion/tension: 친절한 밀실.
- motion/direction: 차 따르는 손 → 장부를 덮은 손 → 서랍장(복선 위치 각인).
- dialogue_ref: 석구: "앉아라. 차부터 한 잔 하고." / KM: សុកគូ៖ "អង្គុយចុះ ក្មួយ។ ផឹកតែមួយពែងសិនទៅ។"
- art_space: **상단 1/4 빈 벽**(왼쪽~가운데) — 서랍장·금고·형광등은 피함
- fx/note: 이 컷이 뒷방 배치의 기준. 서랍장 "왼쪽 위 두 번째 칸"이 하린 쪽에서 보이는 높이로.
- no_text: **장부 덮임(표지 무지), 금고 다이얼 숫자 안 보이게, 봉투 무지, 서랍 라벨 없음.**

### panel_044
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 형광등 + 커튼 틈 흰빛
- beat: 「…가볍네」 — 뜯지 않고 무게만 (긴장 7) · E01-G 변주 · **L34 (EP18)**
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, close-up (봉투 얹은 손바닥) + 그 위 삼촌의 웃는 눈
- composition: 프레임 아래 절반 중앙: 삼촌의 두툼한 손바닥 위에 **뜯지 않은 하린의 봉투**(세 번 접힘, 빨간 고무줄)가 얹혀 있고 손이 살짝 위아래로(무게를 다는 동작, 약한 모션). 프레임 왼쪽 가장자리에 봉투를 막 내민 하린의 손끝(조끼 소매). 위쪽 중단에 삼촌의 **웃는 눈**(이마 위 돋보기). **상단 왼쪽 1/3은 흐린 벽.**
- characters: 석구(손·눈, 웃는 눈) · 하린(손끝)
- props: 하린의 봉투(조금 도톰, 뜯지 않음)
- emotion/tension: 다정한 말투의 압박.
- motion/direction: 하린 손 → 봉투 → 삼촌 눈.
- dialogue_ref: 석구: "…가볍네." / KM: សុកគូ៖ "…ស្រាលបន្តិចហ្ន៎។" → 석구: "그쪽에서 이자가 바뀌었대. 다음 달부턴 조금만 더…" / KM: សុកគូ៖ "ខាងនោះគេប្ដូរការប្រាក់។ ខែក្រោយ ថែមបន្តិចទៀតណា៎…"
- art_space: **상단 왼쪽 1/3 흐린 벽** — 짧은 말풍선 위, 긴 말풍선 아래(같은 화자 2개)
- fx/note: 봉투를 **절대 뜯지 않는다**(EP18 복선).
- no_text: 봉투 무지.

### panel_045
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 형광등의 차가운 빛이 정면에서
- beat: 「이번 달은 이것만 드릴게요」 — 작은 승리 (긴장 8) · E01-W ⟨단서 호칭⟩
- size: medium · height: tall · gutter_after: tight
- camera: eye-level, **정면 close-up** (하린) — 세로 컷 안에 위→아래: 얼굴 / 아래 가장자리에 무릎 위 주먹
- composition: 하린 얼굴이 프레임 중단~상단 중앙, **고개를 들어 삼촌(카메라)을 똑바로 봄**. 눈은 지쳤지만 입매가 단단. 프레임 맨 아래 가장자리에 무릎 위에서 **꽉 쥔 주먹**. **상단 1/4 하린 머리 위 어두운 벽/커튼 그늘.**
- characters: 하린 `HARIN_COMMUTE` — 처음으로 "아니요"를 말하는 얼굴
- props: —
- emotion/tension: 작은 승리.
- motion/direction: 정면 응시(046의 정면 삼촌과 거울).
- dialogue_ref: 하린: "이번 달은 이것만 드릴게요." / KM: ហារីន៖ "ខែនេះ ខ្ញុំឲ្យបានប៉ុណ្ណឹងទេ ពូ។"
- art_space: **상단 1/4** 어두운 벽 (머리 위, 얼굴 침범 금지)
- fx/note: 038(시선 아래)과 대비 — 이 컷은 시선이 정면.
- no_text: 글자 없음.

### panel_046
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 형광등의 초록 기운이 조금 더 차갑게
- beat: 「그게 다니?」 — 처음 식는 얼굴 (긴장 8) · E01-C · L29 예열
- size: medium · height: tall · gutter_after: wide
- camera: eye-level, **정면 close-up** (삼촌) — 045와 같은 프레이밍(거울)
- composition: 삼촌 얼굴 정면, 프레임 중단~상단. **미소 없이 눈을 뜬 무표정**(웃음 주름이 펴짐, 소리 지르지 않음). 프레임 아래 가장자리에 **돋보기(갈색 뿔테)를 벗어 탁자에 내려놓는 손**. **상단 1/4 머리 위 빈 벽.**
- characters: 석구 `SEOKGU_SHOP` — T6 차가운 얼굴(눈만 차갑고 얼굴 형태는 둥글고 부드러운 그대로)
- props: 돋보기 → 탁자 위(이후 047–056 탁자 위에 놓인 채)
- emotion/tension: 승리의 대가.
- motion/direction: 정면.
- dialogue_ref: 석구: "그게 다니?" / KM: សុកគូ៖ "ប៉ុណ្ណឹង?"
- art_space: **상단 1/4** 빈 벽 (짧은 말풍선 하나)
- fx/note: 악역 인상 금지 — 각진 그림자·찡그림 없이 "웃음이 빠진" 얼굴. 055–056의 "늦게 굳는 미소"와는 다른 얼굴(이건 의도적인 차가움).
- no_text: 글자 없음.

### panel_047
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 커튼 틈 흰빛이 조금 흔들림(앞가게 문 열림)
- beat: 종소리 — 봉투는 서랍으로, 서랍은 반쯤 열린 채 (긴장 6) · **L42 (하린 봉투만 서랍)**
- size: medium · height: normal · gutter_after: **wide (발견 앞 정지)**
- camera: 앉은 하린의 시점 높이(eye-level 앉은 높이), 삼촌이 위에 있음 → 살짝 low-angle, medium shot
- composition: 전경 왼쪽 아래에 앉은 하린의 어깨(흐림). 중앙: 반쯤 일어서며 **하린의 봉투를 서랍장 "왼쪽 위 두 번째 칸"에 넣는** 삼촌의 손 — 동시에 몸은 이미 커튼 쪽(카메라 쪽)으로 돌아서며 **미소를 다시 조립하는 중**(입꼬리부터). 서랍은 **반쯤 열린 채**(안쪽은 이 컷에서 보이지 않음). 탁자 위 돋보기·덮인 장부·찻잔. **상단 오른쪽 1/3: 서랍장 위 빈 벽**(sfx는 왼쪽 위 커튼 쪽 어둠).
- characters: 석구 `SEOKGU_SHOP`(반쯤 일어섬, 미소 재조립) · 하린(어깨)
- props: 하린 봉투 → 서랍, 반쯤 열린 서랍, 봉투 다발(서랍장 위)
- emotion/tension: 미니 밸브(긴장 풀리는 척).
- motion/direction: 손(서랍) → 삼촌 몸(커튼 쪽) — 열린 서랍을 남기고 나감.
- dialogue_ref: [효과음] 딸랑 / KM 효과음: ក្រីង ក្រីង! → 석구: "앉아 있어라." / KM: សុកគូ៖ "អង្គុយចាំសិន។"
- art_space: **왼쪽 위 커튼 쪽 어둠**(sfx, 소리 출처 = 앞가게) + **오른쪽 위 1/3 서랍장 위 빈 벽**(말풍선)
- fx/note: 열린 서랍의 위치는 043·048·049와 동일해야 함.
- no_text: 서랍 라벨 없음, 봉투 무지.

### panel_048
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 형광등 + 서랍 안으로 드는 흰빛 한 줄이 팔찌 금색 테에 닿음
- beat: 서랍 속 팔찌 — 물건 회수 (긴장 8) · **L04③ 회수 · L05 (진품) · L20**
- size: large · height: short · gutter_after: wide
- camera: 하린 시점(POV), **약간 위에서 내려다보는 extreme-close-up** (★ panel_019와 같은 앵글·같은 크기)
- composition: 반쯤 열린 나무 서랍 안. 왼쪽에 **방금 넣은 하린의 봉투**(세 번 접힘, 빨간 고무줄). 그 옆 **남색 천 위에 진초록 옥팔찌** — **프레임 폭의 약 40%, 프레임 중앙**, 금 간 자리가 카메라를 향함, 그 위 **도드라진 가는 금색 수리 테(폭 3mm, 입체감)**, 옥 안에 **흰 구름 무늬 한 줄**. 놋쇠 손잡이 끝이 프레임 아래 가장자리에. 서랍 안 다른 물건은 그림자 속(구체적으로 그리지 않음).
- characters: 없음(하린 시점)
- props: **PROP_BRACELET(진품)**, 하린 봉투, 남색 천, 놋쇠 손잡이
- emotion/tension: 숨 멎음. 독자 가짜 해석 강화("우진이 팔찌를 넘겼다").
- motion/direction: 봉투 → 팔찌(빨강 → 초록, 화면에서 가장 채도 높은 두 점이 한 프레임에).
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 특별 주의 — 019와 **같은 앵글·같은 크기·같은 위치**. 차이는 금색 테 도드라짐 + 흰 구름 무늬뿐. 반지나 다른 가족 물건을 서랍에 그리지 말 것(EP02·16 보호). 앞뒤 넓은 여백.
- no_text: 팔찌·서랍·봉투에 글자·각인·라벨 없음.

### panel_049
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 커튼이 걷히며 흰빛이 하린 등 뒤에서 쏟아짐
- beat: 손을 뻗지 않는다 / 서랍이 닫힌다 / 가장 다정한 얼굴 (긴장 7) · 미스디렉션 최대
- size: large · height: tall · gutter_after: normal
- camera: eye-level, close-up(하린 전경) + 배경(삼촌) — 깊은 초점
- composition: **전경 아래쪽**: 하린의 창백한 얼굴(하단 1/3 왼쪽), **손은 무릎 위에서 굳어 뻗지 않음**. **중경 오른쪽**: 커튼을 걷고 돌아온 삼촌이 지나가며 **보지도 않고 손끝으로 서랍을 밀어 닫는** 동작, 얼굴은 이미 가장 다정한 걱정의 미소(고개 기울임). 커튼은 하린 등 뒤(프레임 왼쪽 가장자리)에서 걷힘. **상단 1/4: 형광등 아래 빈 벽(왼쪽~가운데).**
- characters: 하린 `HARIN_COMMUTE`(창백, 굳음, 시선 고정) · 석구 `SEOKGU_SHOP`(오독한 다정함)
- props: 서랍(닫히는 중), 커튼
- emotion/tension: 섬뜩한 다정함.
- motion/direction: 커튼(왼쪽) → 삼촌(오른쪽) → 닫히는 서랍.
- dialogue_ref: [효과음] 스륵 / KM 효과음: ស្រូត… → 석구: "아이고, 얼굴 하얗게 질린 것 좀 봐라. 삼촌이 괜히 그랬다." / KM: សុកគូ៖ "អូយ មុខស្លេកអស់ហើយ ក្មួយ។ ពូមិនគួរនិយាយអីចឹងទេ។"
- art_space: **상단 1/4 빈 벽**(삼촌 말풍선, 꼬리 ↘ 삼촌) + **왼쪽 중단 커튼 면**(작은 sfx)
- fx/note: 삼촌은 서랍 쪽을 보지 않는다(하린이 봤다는 걸 모른다).
- no_text: 글자 없음.

### panel_050
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 따뜻해 보이는 빛(커튼 틈 흰빛이 손 위에)인데 차갑게 읽힘
- beat: 다음 달 빈 봉투 (긴장 7) · **L35 (클리프행어의 거울)** · 봉투 문법 ③
- size: medium · height: normal · gutter_after: tight
- camera: eye-level 약간 위, close-up 두 손
- composition: 프레임 중앙: 하린의 거친 손바닥 위에 **납작한 빈 봉투**(세로 세 번 접힘, 빨간 고무줄 한 줄 — 013·058과 같은 모양)가 놓이고, **삼촌의 두툼하고 깨끗한 손이 그녀 손가락을 위에서 덮어 오므려 준다.** 프레임 오른쪽 위 가장자리에 서랍장 위 봉투 다발(한 장 빠진 자리)이 흐리게. **상단 왼쪽 1/3 흐린 벽.**
- characters: 석구(손) · 하린(손)
- props: 다음 달 빈 봉투(**납작** — 044의 도톰한 봉투와 두께 차이가 보이게), 봉투 다발
- emotion/tension: 따뜻한 결박.
- motion/direction: 삼촌 손 → 하린 손 → (나중에 058).
- dialogue_ref: 석구: "다음 달 봉투다. 삼촌이 있잖아." / KM: សុកគូ៖ "ស្រោមសំបុត្រខែក្រោយ។ នៅមានពូទេតើ ក្មួយ។"
- art_space: **상단 왼쪽 1/3** 흐린 벽
- fx/note: ★ 058의 봉투와 **완전히 같은 모양·같은 접힘·같은 고무줄 위치**로(PROP_ENVELOPE 토큰). 삼촌의 손은 반지·시계 없음.
- no_text: 봉투 무지.

### panel_051
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 21:00 무렵 · 형광등, 찻잔에서 김 조금
- beat: 가짜 안도 — 반전 직전 최대 다정함 (긴장 6)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level(앉은 높이), medium two-shot (탁자 옆에서, 하린 왼쪽·삼촌 오른쪽)
- composition: 오른쪽 삼촌이 찻잔을 하린 쪽으로 밀어 준다, 고개를 기울인 다정한 미소. 왼쪽 하린이 **기계적으로 두 손으로 찻잔을 든다**(봉투는 이미 조끼 주머니 안 — 보이지 않음). 탁자 위 돋보기·덮인 장부(삼촌 쪽). **상단 1/3 두 사람 머리 위 벽**(오른쪽 서랍장 윗부분은 피함).
- characters: 석구 `SEOKGU_SHOP`(가장 다정) · 하린 `HARIN_COMMUTE`(멍한 얼굴, 두 손 찻잔)
- props: 찻잔(하린 두 손), 보온병, 장부(덮임), 돋보기(탁자 위)
- emotion/tension: 가짜 안도.
- motion/direction: 삼촌 손 → 찻잔 → 하린.
- dialogue_ref: 석구: "이번 달 모자란 건 삼촌이 어떻게든 맞춰 볼게." / KM: សុកគូ៖ "ខែនេះខ្វះប៉ុន្មាន ពូរកវិធីបំពេញឲ្យ។" → 석구: "너무 혼자 지려고 하지 마라." / KM: សុកគូ៖ "កុំរ៉ាប់រងម្នាក់ឯងពេក ក្មួយ។"
- art_space: **상단 1/3 벽** (가운데~왼쪽, 같은 화자 2개, 꼬리 ↘ 삼촌)
- fx/note: 이 축(하린 왼쪽·삼촌 오른쪽)을 056까지 유지.
- no_text: 글자 없음.

### panel_052
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 가장 편안한 빛(형광등 기운을 살짝 누르고 커튼 틈 흰빛이 삼촌 얼굴에 부드럽게)
- beat: 「걔도 이번 달은 날짜 맞춰 냈으니까—」 — 말실수 (긴장 9) · **E01-S ⟨반전⟩ 트리거** · L11◎ · L40◎
- size: large · height: tall · gutter_after: **wide (시간 정지)**
- camera: eye-level, medium-close-up (삼촌), 약간 넓게 — 몸을 뒤로 기댄 자세가 보이게
- composition: 삼촌이 벽 쪽으로 **몸을 뒤로 기대며** 가장 편안한 얼굴로 말한다 — 눈이 웃음 주름에 완전히 묻힘(036과 같은 눈), 한 손은 무릎, 한 손은 탁자 위 찻잔 근처. 얼굴은 프레임 중단~하단 오른쪽. **상단 40%는 형광등 아래 평평한 빈 벽(왼쪽 위 중심).** 서랍장은 화면 오른쪽 가장자리에 닫힌 채 아주 조금.
- characters: 석구 `SEOKGU_SHOP` — 무방비, 가장 다정
- props: 찻잔, 닫힌 서랍장 가장자리
- emotion/tension: 정점 트리거 — 아무 일 없는 얼굴로 터지는 말.
- motion/direction: 정지. 말풍선 → 아래 패널.
- dialogue_ref: 석구: "걱정 마. 걔도 이번 달은 날짜 맞춰 냈으니까—" / KM: សុកគូ៖ "កុំបារម្ភ។ ខែនេះ វាក៏យកមកឲ្យទាន់ថ្ងៃហើយដែរ—"
- art_space: **상단 40% 빈 벽**(왼쪽 위) — 말풍선 하나(길다), 꼬리 ↘ 삼촌
- fx/note: ★ 반전 트리거는 **그림이 아니라 말**이다. 얼굴은 아무 변화 없이 편안해야 한다(긴장 연출 효과 금지). 앞뒤 여백으로 무게를 준다.
- no_text: 글자 없음.

### panel_053
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤
- beat: 멈춘 손, 찻물 잔물결 (긴장 9) · 반응 1
- size: insert · height: short · gutter_after: tight
- camera: eye-level 약간 위, extreme-close-up (손 + 찻잔)
- composition: 찻잔을 두 손으로 쥔 하린의 손가락이 멈춤. **찻물 표면에 동심원 잔물결.** 배경 완전히 초점 밖(탁자 나무색).
- characters: 하린(손)
- props: 흰 찻잔(무지)
- emotion/tension: 소리 없는 충격.
- motion/direction: 잔물결이 퍼짐.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: —
- no_text: 찻잔 무지.

### panel_054
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤 · 형광등이 하린 얼굴 정면, 차갑게
- beat: 「……누구요?」 (긴장 9) · 반응 2
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **정면 close-up** (하린)
- composition: 하린이 천천히 고개를 든다 — 얼굴은 프레임 중단~하단, 눈이 정면(삼촌)에 고정. 눈은 크게 뜨지 않음(조용한 질문). **상단 1/3 어두운 벽.**
- characters: 하린 `HARIN_COMMUTE` — 고정된 눈, 표정 없음
- props: —
- emotion/tension: 조용한 질문.
- motion/direction: 정면.
- dialogue_ref: 하린: "……누구요?" / KM: ហារីន៖ "……អ្នកណា?"
- art_space: **상단 1/3** 어두운 벽 (짧은 말풍선)
- fx/note: 045의 정면과 같은 프레이밍이지만 빛이 더 차갑다.
- no_text: 글자 없음.

### panel_055
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤
- beat: 늦게 굳는 미소 1/2 (긴장 9) · **L29 (W3)**
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **정면 close-up** (삼촌) — 046과 같은 프레이밍
- composition: 삼촌 얼굴 정면. **입꼬리는 아직 웃는데, 눈의 웃음 주름이 먼저 펴지고 눈이 뜨인다.** 얼굴 형태·조명은 그대로(날카로운 그림자 금지). 상단 여백은 일반.
- characters: 석구 `SEOKGU_SHOP` — 입은 웃음 / 눈은 뜸
- props: —
- emotion/tension: 삼촌도 실수를 안다.
- motion/direction: —
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 특별 주의 — "입은 웃고 눈만 뜸"이 정확히 그려져야 한다(입까지 굳으면 056과 겹침 → 재그림). 악역 인상 금지.
- no_text: 글자 없음.

### panel_056
- scene_id: S9 / location: LOC_UNCLE_BACKROOM
- time/light: 같은 밤
- beat: 늦게 굳는 미소 2/2 + 덮는 해명 (긴장 8) · E01-X · 말 사슬 회수
- size: medium · height: normal · gutter_after: **xwide (빈/검은 여백 — 집으로)**
- camera: eye-level, 055와 같은 앵글에서 **약간 와이드** (medium shot)
- composition: 오른쪽 삼촌 — **입꼬리가 내려왔고**, 먼저 시선을 피해 아래를 보며 찻잔·보온병을 정리한다(평소 말투로 덮는 손). 왼쪽 전경 하린의 어깨·옆얼굴(흐림, 움직이지 않음). 탁자 위 돋보기·덮인 장부. **상단 1/3 빈 벽**(가운데~왼쪽).
- characters: 석구 `SEOKGU_SHOP`(무표정에 가까운, 시선 회피) · 하린(전경)
- props: 찻잔·보온병(정리 중), 장부(덮임), 돋보기
- emotion/tension: 덮는 대사 = 확정의 역설, 클리프 직전 한 단 하강.
- motion/direction: 삼촌 시선 아래·옆 → 다음 씬.
- dialogue_ref: 석구: "…손님 얘기다. 동네 애." / KM: សុកគូ៖ "…ភ្ញៀវទេ។ ក្មេងក្នុងភូមិ។" → 석구: "늦었다. 얼른 들어가라." / KM: សុកគូ៖ "យប់ហើយ។ ឆាប់ទៅផ្ទះទៅ។"
- art_space: **상단 1/3 빈 벽** (같은 화자 2개, 꼬리 ↘ 삼촌)
- fx/note: 055 → 056은 같은 얼굴의 2단계(눈 먼저, 입 나중).
- no_text: 글자 없음.

--- SCENE BREAK --- (S9 → S10 · 15일 21:40 현관, 불 꺼진 집)

### panel_057
- scene_id: S10 / location: LOC_HOME_ENTRANCE
- time/light: 15일 21:40 · 집 안 불 꺼짐, **현관 위 맨 백열전구 하나**(따뜻한 노랑), 문밖 남색 밤 골목 + 노란 가로등. 안쪽 방문 틈 빛 한 줄
- beat: 문이 열린다 — 검은 숏패딩 (긴장 8) · **L41③**
- size: large · height: tall · gutter_after: tight
- camera: eye-level(앉은 높이보다 약간 위), 집 안쪽에서 하린의 등 너머로 현관문 — 프레임 인 프레임
- composition: **전경 아래**: 신발 벗는 턱에 앉아 문을 향한 하린의 등(낮은 포니테일, 네이비 패딩 조끼), 턱 아래 그녀의 **낡은 흰 운동화**. 옆에 내려놓은 검은 백팩. **중경**: 열린 간유리 미닫이 현관문(나무 틀), **문틀 안에 우진**(검은 숏패딩, 검은 백팩, 막 들어서며 멈칫), **왼손은 패딩 소매 안**. 그 뒤로 남색 밤 골목과 노란 가로등. 현관 위 백열전구가 프레임 위쪽 중앙 근처. 신발장과 위의 작은 열쇠 접시(오른쪽). **아버지의 검은 구두는 없다.** **상단 1/4 왼쪽: 현관 위 어두운 벽/천장 면**(전구를 피함).
- characters: 하린 `HARIN_COMMUTE`(등, 미동 없음) · 우진 `UJIN_OUT`(놀람 반, 퉁명 반)
- props: 간유리 문, 백열전구, 신발장, 열쇠 접시, 운동화
- emotion/tension: 원인 컷.
- motion/direction: 하린 등 → 문틀 안 우진.
- dialogue_ref: 우진: "…뭐야. 불도 안 켜고." / KM: អ៊ូជីន៖ "…អីហ្នឹង? មិនបើកភ្លើងផង។"
- art_space: **상단 1/4 왼쪽 어두운 벽/천장** — 꼬리 ↘ 우진(문틀)
- fx/note: ★ 우진의 **팔찌는 보이지 않는다**(왼손목 소매 안, D1-b). 숏패딩은 027·041과 같은 옷.
- no_text: 간유리에 글자·스티커 없음, 신발 로고 없음.

### panel_058
- scene_id: S10 / location: LOC_HOME_ENTRANCE
- time/light: 같은 밤 · 백열전구 빛이 바닥의 봉투를 정면으로
- beat: 미끄러지는 빈 봉투 — 반전 확정 (긴장 9) · L35◎ · L01◎
- size: large · height: short · gutter_after: tight
- camera: **바닥 높이(worm-eye 가까운)**, close-up
- composition: 현관 바닥 높이. 프레임 왼쪽에 **우진의 흰 스니커즈**(신발을 벗으려 한쪽 뒤축에 손가락), 오른쪽에 **하린의 낡은 흰 운동화**. 그 **사이 바닥에 방금 떨어진 납작한 크라프트 봉투**(세 번 접힘, 빨간 고무줄) — 패딩 안주머니에서 미끄러진 궤적의 여운. 위쪽 가장자리에 숙인 우진의 패딩 앞자락. 전구 빛에 갈색과 빨간 고무줄이 또렷.
- characters: 우진(손가락·신발·패딩 자락) · 하린(운동화)
- props: **PROP_ENVELOPE — 050과 완전히 같은 납작한 빈 봉투**
- emotion/tension: 정보 하나 — "동생도 냈다".
- motion/direction: 패딩 → 바닥 봉투 → 두 신발.
- dialogue_ref: 무대사 (sfx 없음 — 완전 무음, 판정 AB Q4)
- art_space: 없음(silent)
- fx/note: ★ 특별 주의 — 봉투 두께는 **납작**(돈이 든 044와 다름). 접힘·고무줄 위치가 013·050과 같아야 한다. 우진 왼손목 안 보임.
- no_text: 봉투·신발 무지.

### panel_059
- scene_id: S10 / location: LOC_HOME_ENTRANCE
- time/light: 같은 밤 · 백열전구가 두 사람 사이 위에서
- beat: 침묵 대치 (긴장 9) · 판정 F · L15
- size: medium · height: normal · gutter_after: **wide**
- camera: eye-level(두 사람 눈높이가 같음), **측면 two-shot** (문턱을 사이에 둔 옆모습)
- composition: 화면 오른쪽: 봉투를 **오른손으로 낚아채 쥔 채** 반쯤 숙인 자세로 굳은 우진(손등 반창고 보임, **왼손목은 소매 안**). 화면 왼쪽: 턱에 앉은 하린, 그와 같은 눈높이. 둘 다 말이 없다. 하린의 **오른손은 조끼 주머니 속에 들어가 무언가를 쥐고 있다**(주머니가 손 모양으로 불룩, 안의 봉투는 보이지 않음). 둘 사이 위쪽에 전구 빛, 뒤는 열린 문밖 남색 밤.
- characters: 우진 `UJIN_OUT`(굳은 얼굴, 들킨 눈) · 하린 `HARIN_COMMUTE`(표정 없음, 시선 고정)
- props: 봉투(우진 오른손), 조끼 주머니(하린 손)
- emotion/tension: 침묵 대치.
- motion/direction: 좌우 시선 교차.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 팔찌 노출 금지. 하린 주머니 속 봉투는 형태만(보이면 정보가 늘어난다).
- no_text: 글자 없음.

### panel_060
- scene_id: S10 / location: LOC_HOME_ENTRANCE
- time/light: 같은 밤 · 눈동자에 백열전구 빛 한 점
- beat: 하린의 눈 (긴장 10, 회차 최고점) · 클리프행어 `A`
- size: full-bleed · height: short (가로 눈 띠) · gutter_after: — (회차 끝)
- camera: extreme-close-up (눈)
- composition: 하린의 눈(오른쪽 눈 중심, 또는 두 눈의 가로 띠). **홑꺼풀, 짙은 갈색, 옅은 다크서클**, 눈동자에 **백열전구 빛 한 점**. 눈물 없음. 이마 옆 잔머리 몇 가닥. 주변은 따뜻한 어둠.
- characters: 하린 — 질문을 연 채 멈춘 눈
- props: —
- emotion/tension: 반전 → 반응 → 침묵. "언제부터? 왜 같은 사람에게? 그럼 또 누가?"
- motion/direction: 정지 — 회차 끝.
- dialogue_ref: 무대사 (엔딩 카드 없음, 판정 AB Q5)
- art_space: 없음(silent)
- fx/note: 눈물·과장된 반짝임 금지. 004의 질문 「다들」로 연결.
- no_text: 글자·캡션 없음.

---

## 5. 점검 · 플래그

### 5-1. 품질 체크
- [x] 패널 60, panel_001–060 연속, 대본 P01–P60과 1:1.
- [x] 모든 패널에 scene_id / location(LOC_*) / time·light / size / height / gutter / camera / composition / emotion. 같은 scene_id = 같은 LOC (S3 → S3a/S3b 분리).
- [x] 대사 패널 45개 전부 `dialogue_ref`(KO + KM, 대본 그대로) + `art_space`. 무대사 15개는 `art_space: 없음(silent)`.
- [x] sfx 5개(014·023·032·047·049) 자리 지정, env 1개(005 하늘).
- [x] 반전 구간 잘게: 044–056 = 13패널, 반전 트리거 052 앞뒤 wide 여백, 048·052 대형, 053–056 4패널 정지.
- [x] 글자 금지: 모든 패널 `no_text` 줄.

### 5-2. 특별 주의 패널 (렌더·검증에서 재그림 사유)
| 패널 | 주의 |
|---|---|
| 001 | EP05 재사용 기준. 봉투 다섯 동일, 맨 위 하나만 살짝 도톰(끝이 프레임 위), 숟가락 넷 흐트러짐 + **손잡이 끝 전부 가림** |
| 002 | 바닥 숟가락 **손잡이 끝이 그림자에 완전히** 덮임 |
| 003 | 미자 약지·우진 손목 읽히지 않게 |
| 010 | 지폐 삼각 접기 또렷(EP14 유일 물증), 지폐 무지 |
| 018 | 반지 자국 첫 노출, **반지 금지** |
| 019 ↔ 048 | **같은 앵글(약간 위)·같은 크기(폭 40%)·같은 위치(중앙, 금 자리 정면)**. 019 = 납작한 금색 칠 선 + 구름 무늬 없음 / 048 = 도드라진 금색 테 + 흰 구름 무늬 한 줄 |
| 035 | 말풍선 3개 — 상단 45% 하늘을 반드시 비움 |
| 041 | 원경 숏패딩 인물 **아주 작게**(식별 불가), 얼굴·팔찌 없음 |
| 042 | 액자 뒷면만, 간판·가격표·시계 숫자 없음 |
| 044 | 봉투 뜯지 않음 |
| 046 | 차가운 얼굴이지만 악역 인상 금지 |
| 050 ↔ 058 (↔ 013) | 봉투 모양·접힘·빨간 고무줄 위치 동일, 050·058은 **납작** |
| 052 | 얼굴은 편안한 그대로(말이 반전) |
| 055 → 056 | 눈 먼저(입은 웃음) → 다음 컷 입꼬리 하강 |
| 057–060 | 우진 팔찌 **보이지 않음**(왼손목 소매 안), 봉투는 오른손 |

### 5-3. 플래그 (리더·하류)
- **FL1 (art-director / prompt-smith):** style-bible.md가 아직 없어 height→화면비(tall 9:16 / normal 3:4 / short 16:9)는 **잠정**. style-bible 확정 후 맞지 않으면 panel-director가 재점검한다.
- **FL2 (prompt-smith / letterer):** 대본 S3을 **S3a(P07, LOC_UNCLE_SHOP 바깥) / S3b(P08, LOC_ALLEY_STAIRS)**로 나눴다. lettering·프롬프트의 scene 표기는 이 샷리스트를 따른다.
- **FL3 (art-director):** S2–S4의 `HARIN_FACTORY`에 **검은 백팩**을 더했다(대본 P09·P10·P14가 백팩을 씀). characters §9-1은 백팩을 `HARIN_COMMUTE`에만 둔다 — 토큰에 "백팩 포함 변주"로 반영 요청.
- **FL4 (art-director, LOC_UNCLE_BACKROOM 토큰):** 뒷방 배치를 고정했다 — 하린은 커튼을 등지고, 삼촌은 벽을 등지고, **낮은 서랍장은 삼촌 왼쪽 벽(하린 시점 화면 오른쪽)**, 윗줄 서랍이 앉은 눈높이보다 약간 아래(그래야 048이 019와 같은 "약간 위에서" 앵글이 된다), 금고는 화면 왼쪽 구석. LOC 토큰이 다르면 알려 주면 맞춘다.
- **FL5 (letterer):** 035는 말풍선 3개(석구 2 + 하린 1), 014·034는 말풍선 + sfx/생각 2–3개, 022·037·044·051·056은 같은 화자 2개. 각 `art_space`를 그 수에 맞춰 넓게 잡았다. 037 첫 말풍선이 가장 길다.
- **FL6 (letterer):** gutter_after 참고값은 §0-1 표. xwide = 004(→2주 전)·014(→저녁)·032(→밤 계단)·039(→다음 날 노을)·041(→밤 가게)·056(→현관). 반전 정지 wide = 023·024·047·048·052·059.
- **FL7 (prompt-smith):** 024는 015와 반대 방향(머리 자리 정면) 설정 컷 — 아버지가 카메라를 보므로 **하린이 화면 왼쪽**. 그 외 S5 컷은 §1-1 축(하린 왼쪽/앞, 우진 오른쪽/안쪽)을 넘지 않는다.
- **FL8 (prompt-smith):** 034는 "삼촌 얼굴 + 멈춘 발"을 **한 이미지 안 구도**(무릎 높이 로우 앵글)로 그린다. 분할 프레임·인셋 금지.
- **FL9:** 새 장소·새 인물 없음. LOC_* 6곳만 사용.
