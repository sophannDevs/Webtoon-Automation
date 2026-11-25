# EP02 샷리스트 — 「엄마는 웃고 있었다」 (ម៉ែនៅតែញញឹម) · 「다섯 개의 숟가락」 story-8

- 작성: panel-director · 2026-11-25 · Phase 4 (Flow-by-hand mode + Khmer edition)
- 입력: `03_episode/ep02_script_final.md` (Khmer review READY — `km_review.py gate --episode 02` 통과 확인 후 읽음, sha256 4bd642f256a2…),
  `03_episode/ep02_beatsheet.md`, `02_story/twist-plan.md` §4 EP02, `00_input/brief.md` 판정 AD–AF·EA–EC + EP02 절,
  `04_visual/style-bible.md`, `character-sheets.md`, 형식·관례 기준 `04_visual/ep01_shotlist.md`(EP01 파일은 읽기만 함).
- 스킬: `webtoon-panel-breakdown` 작업 A + `references/composition-grammar.md`, `webtoon-khmer-edition` §3–4.
- **패널 수 62** = panel_001 … panel_062 = 대본 P01 … P62 (1:1, 번호 그대로). 무대사 15 (006·007·009·028·034·039·043·044·045·049·052·059·060·061·062) ·
  `env` 0 · 효과음 4 (005·033·037·047) · 문 너머 대사 패널 8 (047·048·050·051·053·055·057·058).
- 하류: prompt-smith(Flow 프롬프트), letterer(`ep02_lettering.md`의 `art_space`·`place`·`gap_after`), art-director(EP02 신규 토큰 이름 확인 — §5-3).

---

## 0. 전역 규칙 (모든 패널 공통 — EP01 §0 그대로 + EP02 추가)

1. **이미지 안에 글자가 전혀 없다.** 말풍선·캡션·효과음 글자·문자·숫자·가짜 글씨·로고·워터마크 모두 금지. 말풍선과 크메르어는 뷰어(`km_tool.py build`)가 그린다.
   각 패널 끝 `no_text` 줄은 그 패널에서 글자가 생기기 쉬운 물건이다. prompt-smith는 모든 프롬프트 끝에
   `Avoid: any text, letters, numbers, writing, speech bubbles, captions, watermark.`를 붙인다.
2. **무지 물건:** 봉투(완전 무지 크라프트) · **휴대폰(PROP_PHONE: 화면은 어떤 패널에서도 보이지 않는다 — 가슴 쪽으로 돌림 / 귀에 댐 / 실루엣 속)** ·
   **쌀통(PROP_RICE_BIN: 무지, 뚜껑은 EP02 내내 닫힘 — 안은 절대 보이지 않는다)** · 장바구니(남색 무지 천) · 옷(로고·프린트 없음) · 신발(로고 없음) · 보자기 꾸러미(무늬 없음).
3. **`art_space`** = 말풍선이 들어갈 자리. 그 영역은 **차분하고 비어 있는 배경**(벽·하늘·어둠·바닥 면)으로 두고 얼굴·손·핵심 소품·간유리 실루엣을 넣지 않는다.
   letterer는 이 칸을 그대로 옮기고 `place`를 그 안에 잡는다. 무대사 패널은 `art_space: 없음(silent)`.
4. **채도 규칙:** 빨간 고무줄(#C8332B)과 초록 팔찌(#2F6B4F)가 화면에서 가장 채도 높은 두 점. 녹색 옷 금지. 새롬 코랄은 탁하게. 미자 머스터드 앞치마는 집 장면만(EP02 가게 장면 없음).
5. **장소 연속성:** 같은 scene_id = 같은 LOC·같은 시간대·같은 빛. LOC가 바뀌는 곳에만 `--- SCENE BREAK ---`.
6. **반전 보호 (EP02):** 우진 팔찌는 **panel_017(–019 끌어내리는 순간)에서만** 보인다 · 미자 **반지는 어떤 패널에도 없다**(약지 흰 자국만) ·
   쌀통 뚜껑은 열리지 않는다 · 휴대폰 화면 안 보임 · 삼촌(석구)은 EP02에 **화면에도 목소리로도 나오지 않는다** · 냄비 공장 사장은 얼굴 없는 원경 1컷(045)뿐 ·
   하린 숟가락의 휜 손잡이 끝은 EP02에서 보이지 않게(W5 — EP05 보호) · 미자의 **웃음 없는 얼굴은 panel_061에서 처음**(그 전엔 웃음/당황/반쯤 열린 입까지만).
7. **문 너머 대사(S6, 047–058):** 미자는 간유리 너머 **흐린 남색 실루엣**으로만 보인다(얼굴·이목구비·휴대폰 화면 없음). 실루엣은 **마당 너머 골목 가로등이 그녀 뒤에서 비춰** 간유리에 맺힌다.
   집 안 전구 빛은 유리 안쪽 면에 노랗게 번진다. art_space는 유리 위 문틀·벽, 또는 유리 아래 문틀·바닥에 잡아 실루엣을 가리지 않게 한다(말풍선 꼬리는 letterer가 유리 쪽으로).
8. **모든 패널 이미지는 9:16 세로**(판정 AD). 아래 `height`는 프레이밍·리듬 메모일 뿐 이미지 비율이 아니다.

### 0-1. 높이·여백 범례 (세로 스크롤 리듬 — 판정 AD: 화면비는 전부 9:16)

| height (프레이밍 메모) | 9:16 안에서의 뜻 | 쓰임 |
|---|---|---|
| `tall` | 위아래 깊이를 다 쓰는 구도(하늘·계단·문틀·천장까지) | 설정샷, 정점, 반전, 원근이 긴 계단·복도·문 |
| `normal` | 인물이 프레임 중앙 40–75% 높이대 | 기본 대화·클로즈업 |
| `short` | 주제가 가로 띠 한 줄에 모임(위아래는 어둠/초점 밖 면) | 인서트·손·빠른 합·바닥 높이 컷 |

| gutter_after | 여백(px, letterer `gap_after` 참고값) | 쓰임 |
|---|---|---|
| `tight` | 0–20 | 연속 동작, 빠른 대화 |
| `normal` | 40–60 | 기본 |
| `wide` | 140–180 | 정적, 반전 앞뒤, 긴장 정지 |
| `xwide` | 280–360 (빈/검은 여백) | 날짜 점프, 씬 대전환 |

size 어휘: `insert` / `small` / `medium` / `large` / `full-bleed` (composition-grammar §1).

---

## 1. 장소 목록 (scene_id ↔ LOC ↔ 배경)

| scene_id | 패널 | location | 시각 · 빛 코드 | 한 줄 배경 |
|---|---|---|---|---|
| S1 | 001–006 | LOC_HOME_ENTRANCE | 15일 21:40 · `L-ENTRANCE-NIGHT` (집 안 불 꺼짐, 현관 위 맨 백열전구 하나, 열린 문밖 남색 밤 + 노란 가로등) | EP01 S10과 같은 현관: 간유리 미닫이문(나무 틀, **EP01 P57–60처럼 열려 있음**), 신발 벗는 턱, 신발장 + 작은 접시, 시멘트 바닥. 안쪽은 어두운 복도, 끝에 안방 문틈 빛 한 줄 |
| S2 | 007–026 | LOC_ALLEY_STAIRS | 16일 ~05:50–06:20 · `L-DAWN-OUT` (**나트륨 등 문장 빼고**), 014에서 층계참 가로등 꺼짐, 026 하늘 끝 복숭아빛 더 밝게 | EP01과 같은 계단 골목, 중간 층계참의 **빈** 평상(새벽 — 할머니 없음), 아래 골목 입구에 가게의 흰빛 한 점 |
| S3 | 027–040 | LOC_HOME_TABLE | 17일 18:40 · `L-DINNER` | EP01 S5와 같은 식탁·같은 자리·같은 소품. **신규 PROP_RICE_BIN**: 뒷벽 싱크대 옆 바닥(미자 자리와 새롬 의자 사이). 우진 의자 등받이에 검은 숏패딩 |
| S4 | 041–043 | LOC_HOME_TABLE (싱크대 쪽) | 17일 ~19:30 · `L-DINNER` (같은 펜던트, 밥 김 없음) | 같은 부엌, 스테인리스 싱크대 앞. 식탁엔 미자·새롬, 아버지 자리는 비고 반쯤 남은 밥그릇 |
| S5 | 044–045 | LOC_ALLEY_STAIRS | 18일 ~17:20 · `L-SUNSET` | 같은 계단 골목, 중간 층계참 평상에 할머니(귤). 아래 골목 입구 가게 모퉁이 |
| S6 | 046–058 | LOC_HOME_ENTRANCE (안쪽) | 18일 21:15 · **신규 `L-ENTRANCE-EVENING`** (맨 전구 + 복도 쪽 집 안 따뜻한 불빛, 간유리 밖 남색 밤, 미자 실루엣은 골목 가로등 역광) | 같은 현관. **문은 047부터 닫힘.** 간유리 너머 마당의 미자 = 흐린 남색 실루엣 |
| S7 | 059–062 | **신규 LOC_HOME_YARD** | 18일 ~21:20 · **신규 `L-YARD-NIGHT`** (골목 가로등 + 간유리 안쪽에서 새는 노란빛) | 현관 바깥 좁은 시멘트 마당: 빨랫줄, 담 밑 화분, 낮은 철제 대문 너머 골목 가로등, 노랗게 빛나는 간유리 미닫이 현관문(바깥면) |

- S1과 S6은 같은 LOC_HOME_ENTRANCE지만 **빛이 다르다**(집 안 불 꺼짐 + 문 열림 / 집 안 불 켜짐 + 문 닫힘). S3·S4는 같은 LOC·같은 빛(시간만 50분 뒤 — 밥 김 없음).
- S2·S5는 같은 LOC_ALLEY_STAIRS, 빛만 다름(새벽 청 / 노을 주황).
- S7 LOC_HOME_YARD는 EP02 신규(판정 EA) — LOC_HOME_ENTRANCE의 **바깥 리버스**. 현관 쪽 고정 요소(간유리 미닫이문·나무 틀·문 위 맨 전구)는 같은 집으로 보여야 한다.

### 1-1. 고정 동선·배치 (180° 규칙)

- **S1 현관 (EP01 P57–60 직결):** 카메라 기본 = 집 안쪽. 하린은 턱에 앉아 **열린 문을 향한다**, 검은 백팩은 옆 턱 위에 내려놓음, 낡은 흰 운동화는 턱 아래.
  측면 투샷(001)은 EP01 P59와 같은 축 — **하린 = 화면 왼쪽(턱), 우진 = 화면 오른쪽(문 쪽 시멘트 바닥)**. 003에서 우진이 신발을 벗고 턱 위로 올라 하린 옆을 지나 집 안쪽으로.
  004–005는 **반대 방향(집 안 복도 쪽)**을 본다 — 하린이 턱 위에서 몸을 틀어 복도를 돌아본 상태라 허용.
- **S2 새벽 계단:** 남매는 **아래(골목 입구·가게) 쪽을 향해** 계단에 앉는다. **우진은 하린의 오른쪽, 한 칸 위.** 그래서 우진의 **왼소매가 하린 바로 옆**(015·017).
  아래에서 올려다보는 컷(010·011–016·020–025): **우진 = 화면 왼쪽(한 칸 위), 하린 = 화면 오른쪽.** 뒤·위에서 내려다보는 컷(007·019·026)은 화면 좌우가 뒤집혀 보이지만 실제 배치(우진 = 하린 오른쪽 한 칸 위)는 그대로.
  018은 우진 쪽 약간 위에서 하린 얼굴을 본 컷 — 배경이 내리막(가게 흰빛).
- **S3 식탁 (EP01 §1-1 고정 그대로):** 기준 와이드(027·031) 카메라는 창 쪽에서 레인지 벽을 본다 — 화면 왼쪽 끝 아버지, 오른쪽 끝 새롬(철제 접이식 의자),
  앞쪽 긴 면 하린(뒷모습 3/4, 아버지 가까이), 안쪽 긴 면 우진(왼쪽, 아버지 가까이, 하린 정면)과 미자(오른쪽, 레인지·새롬 가까이). 뒷벽 레인지·싱크대·그릇 선반.
  **쌀통 = 뒷벽 오른쪽 싱크대 옆 바닥, 미자 자리와 새롬 의자 사이**(미자 왼손이 옆으로 뻗으면 닿는 거리). 우진 의자 등받이에 검은 숏패딩.
  예외 축: **034** = 미자 어깨 너머 리버스(레인지 벽 쪽에서 창 쪽) / **038·039** = EP01 P24와 같은 머리 자리 정면(아버지가 카메라를 봄 → **하린 = 화면 왼쪽**).
- **S4 설거지대:** 남매는 싱크대(뒷벽)를 향해 나란히 — **하린이 헹구고(왼쪽), 우진이 닦는다(오른쪽).** 카메라는 싱크대 끝 모서리에서 비스듬히, 그들 너머로 식탁이 흐리게.
- **S5 노을 계단:** 하린은 심부름에서 돌아오며 **계단을 오른다**(집 = 위). 할머니 평상 = 중간 층계참. 가게 = 아래 골목 입구(045 프레임 아래쪽).
- **S6 현관 (EP02 고정 — §5-3 FL2):** 하린은 턱 위에 **옆으로 비스듬히 앉아**(몸은 신발장 쪽, 한쪽 발을 턱 끝에 올려 끈을 맴) **간유리 문이 그녀의 오른쪽 어깨 뒤**에 온다.
  그래서 "등 뒤 간유리"(048·053), "고개를 돌려 간유리를 본다"(050)가 성립한다. 미자는 복도(집 안)에서 나와 하린 뒤를 지나 문밖 마당으로 나가 **문을 등지고** 선다.
  057–058에서 하린은 일어나 간유리 앞에 선다: **하린 = 유리 안쪽, 미자 = 유리 바로 바깥, 한 뼘 거리.**
- **S7 마당:** 카메라는 처음으로 바깥. 미자는 통화 내내 **대문(골목 가로등) 쪽을 보고 문을 등지고** 서 있었다 → 059 옆얼굴 반만 → 060 돌아섬 → 061 정면 얼굴(간유리 빛이 정면).

---

## 2. 소품 상태 추적 (패널 간 연속성)

| 소품 | 상태 변화 |
|---|---|
| PROP_ENVELOPE (하린의 다음 달 빈 봉투, **납작**) | EP01 P59 조끼 주머니 속 → 004 오른손이 조끼 주머니 속에서 움켜쥠(형태만) → 006 꺼내 손에 쥠(운동화 위) → 007 무릎 위 두 손 → 009 계단 한 칸 위에 내려놓음(우진 것 옆) → 024 집어 납작함을 확인하듯 쥠 → 026 조끼 주머니에 넣음 → 이후 안 보임 |
| PROP_ENVELOPE (우진의 빈 봉투, **납작**) | 001 오른 주먹 속(빨간 고무줄 끝만) → 002 패딩 안주머니에 쑤셔 넣음 → 009 꺼내 계단 위에 내려놓음 → 020 손끝으로 만지작 → 026 패딩 주머니에 넣음 |
| 두 봉투 | 009·010 계단 한 칸 위에 나란히 — **완전히 같은** 모양·접힘·고무줄 위치(EP01 P50·P58과 같은 FLAT 문장) |
| PROP_BRACELET_COPY (우진 왼손목) | 001–016 **보이지 않음**(왼손목 소매 안; 015 왼손을 무릎 사이로 감춤) → **017 소매를 걷어 공개**(EP01 P19·P48과 같은 각도·크기, 납작한 금색 칠 선, 흰 구름 무늬 없음) → 018 화면 밖 → 019 소매를 끌어내림(초록이 소매 끝으로 사라지는 순간, 작게) → 020 이후 EP02 끝까지 **보이지 않음**(041 오른쪽 소매만 걷음) |
| PROP_RING_MARK (미자 왼손 약지) | 027 손짓 중 작게 스침 → **033 쌀통 뚜껑 위, 펜던트 빛 정면에 또렷이** → 035–036 자연스럽게 → **043 식탁 위 왼손, 빛 정면** → **052 회상(033 구도, 채도 뺌)** → 059·061 손이 보이면 자연스럽게. **반지는 어떤 패널에도 그리지 않는다** |
| PROP_RICE_BIN (신규) | 027 배경, 뚜껑 닫힘 → 032 새롬이 뚜껑 손잡이에 손을 뻗음 → 033 미자 왼손이 뚜껑을 내리누름 → 034 화면 아래 가장자리(미자 손이 위에) → 035–040 배경, 닫힘 → 052 회상. **열린 모습 없음** |
| PROP_PHONE (신규, 미자) | 046 화면이 가슴 쪽을 향하게 꼭 쥠 → 047–058 실루엣 속 귀에 댐(형태만) → 059 내려서 화면이 몸 쪽으로 가게 가슴에 누름 → 060–061 손에 쥔 채 아래(화면 안 보임) |
| PROP_SPOONS | 028 하린·우진 숟가락 멈춤(**하린 숟가락 끝은 밥그릇에 가려짐**) → 036 아버지 손에 숟가락 → 037 아버지가 내려놓음(평범한 곧은 숟가락, EP01 P23 구도) → 038 놓인 자리 |
| 아버지 밥그릇 | 040 반쯤 남긴 채 자리에 → 041 배경, 빈 자리 위 반쯤 남은 밥그릇 |
| 검은 숏패딩 (우진) | S1 착용 → S2 착용(후드 위로 씀) → S3 우진 의자 등받이 |
| 검은 백팩 (하린) | S1 옆 턱 위에 내려놓음 → S6 메고 있음(054 어깨끈 움켜쥠, 060 실루엣의 어깨끈) |
| 검은 백팩 (우진) | S1 메고 있음(EP01 P57 그대로) → S2 없음 |
| 하린 운동화 (낡은 흰색) | 001 턱 아래 바닥 → 006 우진 스니커즈와 나란히 → S6 신고 끈을 맴 → 049 묶다 멈춤 → **055 한쪽 끈이 풀린 채 바닥에 끌림** → 057–058 끈 풀린 채 |
| 우진 스니커즈 (흰색, 덜 낡음) | 001 신은 채 → 003 벗고 턱 위로 → 006 시멘트 바닥에 하린 것과 나란히 |
| 남색 천 장바구니 | 044 하린 손(엄마 심부름) |
| 할머니 귤 | 044 평상에서 까는 중(작은 주황 점) |

---

## 3. 의상 (씬별, character-sheets 토큰)

| scene | 하린 | 그 외 |
|---|---|---|
| S1 | `HARIN_COMMUTE` (조끼 차림, 백팩은 옆 턱 위, 운동화는 턱 아래) | 우진 `UJIN_OUT`(검은 숏패딩 + 차콜 후드 + 연청 청바지 + 검은 백팩 + 흰 스니커즈, **왼손목 소매 안**) · 미자 목소리만(화면 밖) |
| S2 | `HARIN_COMMUTE` (**백팩 없음**) | 우진 `UJIN_OUT` (**백팩 없음, 후드를 머리에 씀** — 008부터. 017 소매를 걷을 때만 손목 노출) |
| S3–S4 | `HARIN_HOME` (오트밀 카디건) | 인호 `INHO_HOME` · 미자 `MIJA_HOME`(머스터드 앞치마) · 우진 `UJIN_HOME`(차콜 후드, 왼손목 소매 안; 041 오른쪽 소매만 걷음) · 새롬 `SAEROM_HOME`(연코랄 후드, 노란 별 머리핀 오른쪽 귀 위) |
| S5 | `HARIN_COMMUTE` (**백팩 없음**) + 남색 무지 천 장바구니 | 할머니 `TOKEN-YAI` · 원경 노인 = art-director의 **faceless distant pot-factory boss** 문장(회색 누빔 점퍼, 납작 모자, 작은 보자기 꾸러미, 얼굴 없음) |
| S6 | `HARIN_COMMUTE` (**검은 백팩 멤**, 운동화 신는 중) | 미자 `MIJA_HOME`(앞치마 차림 그대로 + 회색 슬리퍼) + PROP_PHONE — 047부터 간유리 실루엣 |
| S7 | 간유리 뒤 실루엣만(낮은 포니테일, 백팩 어깨끈, 조끼 윤곽) | 미자 `MIJA_HOME` + 회색 슬리퍼 + PROP_PHONE |

---

## 4. 패널

### panel_001
- scene_id: S1 / location: LOC_HOME_ENTRANCE
- time/light: 15일 21:40 · `L-ENTRANCE-NIGHT` — 집 안 불 꺼짐, 현관 위 맨 백열전구 하나가 두 사람 사이 위에서, 열린 문밖 남색 밤 + 노란 가로등
- beat: 직결 — 「…언제부터야?」 (긴장 9) · L35◐ · T2
- size: medium · height: normal · gutter_after: tight
- camera: eye-level(두 사람 눈높이가 같음), **측면 two-shot, EP01 P59보다 조금 물러난 medium**
- composition: EP01 P59의 정지 상태 그대로, 한 걸음 뒤로. **화면 왼쪽**: 신발 벗는 나무 턱에 앉은 하린(문을 향한 옆모습), 옆 턱 위에 내려놓은 검은 백팩. **화면 오른쪽**: 문 안쪽 시멘트 바닥에서 하린과 같은 눈높이로 반쯤 숙인 우진, **오른 주먹** 속에서 빨간 고무줄 끝이 전구 빛에 보임, **왼손목은 패딩 소매 안**. 두 사람 사이 바닥에 하린의 낡은 흰 운동화(턱 아래)와 우진이 신고 있는 흰 스니커즈. 뒤로 **열린 간유리 미닫이문**(나무 틀), 문밖 남색 밤 마당과 노란 가로등. 전구는 프레임 위쪽 오른쪽(문틀 위). **상단 1/4 왼쪽은 하린 머리 위 어두운 벽 면.**
- characters: 하린 `HARIN_COMMUTE`(무표정, 시선 고정, 입을 막 뗌) · 우진 `UJIN_OUT`(굳은 얼굴, 들킨 눈)
- props: 우진 봉투(주먹 속, 고무줄 끝만), 백팩 둘, 운동화 두 켤레, 열린 문
- emotion/tension: 숨 막힌 정지 → 첫 말.
- motion/direction: 하린(왼쪽) → 우진 주먹(오른쪽 아래) → 우진 얼굴.
- dialogue_ref: 하린: "…언제부터야?" / KM: ហារីន៖ "…តាំងពីពេលណាមក?"
- art_space: **상단 1/4 왼쪽, 하린 머리 위 어두운 벽** — 평평한 어둠, 전구 피함. 꼬리 ↓ 하린
- fx/note: ★ EP01 P59와 같은 축(하린 왼쪽 / 우진 오른쪽)·같은 옷·같은 자세. 팔찌 노출 금지(D1-b). 봉투는 **오른손**.
- no_text: 간유리 스티커·글자 없음, 신발·백팩 로고 없음.

### panel_002
- scene_id: S1 / location: LOC_HOME_ENTRANCE
- time/light: 같은 밤 · 전구 빛이 우진 얼굴 위쪽에서
- beat: 「몰라.」 (긴장 9) · E02-A · L15◐
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **정면 close-up**(가슴 위)
- composition: 프레임 중앙 우진. 시선은 옆으로 피함, 턱에 힘. **오른손**(마디 긁힌 자국 + 살색 반창고 또렷)이 납작한 봉투를 열린 숏패딩 **안주머니에 쑤셔 넣는** 중 — 빨간 고무줄 끝이 주머니 입구에 마지막으로 보임. 왼팔은 프레임 밖 아래(손목 안 보임). 뒤는 초점 밖 열린 문틀과 남색 밤. **상단 1/5은 앞머리 위 어두운 문틀 위 벽.**
- characters: 우진 `UJIN_OUT` — 부정으로 굳는 얼굴
- props: 봉투(→ 안주머니), 반창고
- emotion/tension: 들킨 얼굴 → 닫힘.
- motion/direction: 얼굴 → 봉투가 사라지는 안주머니.
- dialogue_ref: 우진: "몰라." / KM: អ៊ូជីន៖ "អត់ដឹង។"
- art_space: **상단 1/5 어두운 벽**(오른쪽 위 중심) — 짧은 말풍선 하나
- fx/note: 왼손목 노출 금지.
- no_text: 패딩·반창고 무지.

### panel_003
- scene_id: S1 / location: LOC_HOME_ENTRANCE
- time/light: 같은 밤 · 우진의 몸이 전구를 가려 그의 어깨 뒤로 노란 후광
- beat: 「우진아.」 — 멈춘 등 (긴장 8)
- size: large · height: tall · gutter_after: normal
- camera: **low-angle, 하린 어깨 너머**(앉은 하린의 왼쪽 어깨 높이에서 올려다봄)
- composition: **전경 왼쪽 아래**: 고개를 들어 부르는 하린의 뒷머리(낮은 포니테일)와 조끼 어깨, 두 손은 무릎 위(그를 잡지 않음). **중경**: 신발을 벗고 턱 위로 올라선 우진이 하린 옆을 지나쳐 **집 안쪽을 향해 등을 보인 채 멈춤** — 긴 키가 전구를 가려 어깨 윤곽에 노란 후광. 검은 숏패딩 + 검은 백팩의 등. 바닥 시멘트 위에 방금 벗은 흰 스니커즈. **왼쪽 위 1/4은 어두운 천장·벽.**
- characters: 하린 `HARIN_COMMUTE`(뒷모습, 손은 무릎) · 우진 `UJIN_OUT`(등, 어깨가 멈춤)
- props: 스니커즈(벗음), 전구(가려짐)
- emotion/tension: 부르지만 잡지 않는다.
- motion/direction: 하린 뒷머리 → 위로 우진의 등 → 전구 후광.
- dialogue_ref: 하린: "우진아." / KM: ហារីន៖ "អ៊ូជីន…"
- art_space: **왼쪽 위 1/4 어두운 천장·벽** — 꼬리 ↙ 하린
- fx/note: 우진 왼손목은 몸 앞쪽(안 보임).
- no_text: 글자 없음.

### panel_004
- scene_id: S1 / location: LOC_HOME_ENTRANCE (집 안 복도 쪽을 봄)
- time/light: 같은 밤 · 복도는 어둠, 끝의 안방 문틈으로 따뜻한 빛 한 줄, 등 뒤 전구 빛이 하린 손에 약하게
- beat: 엄마의 밝은 목소리 (긴장 8) · 제목 복선 · R2
- size: medium · height: tall · gutter_after: tight
- camera: 하린 손 높이, 턱 위에서 **어두운 복도 깊이**를 보는 구도(전경 인서트 + 깊은 원근)
- composition: **전경 오른쪽 아래**: 하린의 **오른손이 네이비 패딩 조끼 주머니 속에서 무언가를 움켜쥠**(주머니가 손 모양으로 불룩, 봉투는 보이지 않음). **중경**: 나무 마루에 선 우진의 등, 어깨가 굳음. **원경**: 좁고 어두운 복도 끝, **조금 열린 안방 문틈의 세로 빛 한 줄**. **상단 1/3은 복도 천장의 평평한 어둠.**
- characters: 하린(손만, `HARIN_COMMUTE`) · 우진(등) · 미자(화면 밖, 안방)
- props: 조끼 주머니(손), 안방 문틈 빛
- emotion/tension: 들킬 뻔한 반 박자. 밝은 목소리가 둘을 얼린다.
- motion/direction: 주먹 쥔 손 → 우진 등 → 복도 끝 빛 한 줄(말풍선 꼬리 방향).
- dialogue_ref: 미자 (화면 밖): "우진이 왔어? 밥은 먹었고?" / KM: មីចា៖ "អ៊ូជីន មកហើយឬកូន? ញ៉ាំបាយហើយឬនៅ?"
- art_space: **상단 1/3 복도 천장 어둠** — 꼬리 ↑/↗ 복도 끝 문틈(화면 밖 화자)
- fx/note: 하린 주머니 속 봉투는 형태만(EP01 P59 거울). 안방 안은 보이지 않는다.
- no_text: 글자 없음.

### panel_005
- scene_id: S1 / location: LOC_HOME_ENTRANCE (복도 쪽)
- time/light: 같은 밤 · 복도 어둠, 안방 문틈 빛, 닫히는 방문
- beat: 「먹었어.」 + 탁 — 대화의 단절 (긴장 7)
- size: medium · height: tall · gutter_after: normal
- camera: eye-level(앉은 높이), **하린 등 뒤에서 복도를 보는 medium**
- composition: **전경 아래**: 턱 위에서 몸을 틀어 복도를 돌아본 하린의 뒷머리·조끼 어깨(초점 약간 밖). **중경**: 어두운 복도로 걸어 들어가는 우진의 뒷모습, 고개만 안쪽으로 살짝(대답 중). **복도 옆 문 하나가 닫히는 중** — 좁아지는 어둠의 틈. 끝의 안방 문틈 빛은 그대로. **상단 1/3은 복도 천장 어둠.**
- characters: 하린(뒷모습) · 우진 `UJIN_OUT`(뒷모습)
- props: 방문(닫힘)
- emotion/tension: 닫힘.
- motion/direction: 하린 어깨 → 우진 → 닫히는 문.
- dialogue_ref: 우진: "먹었어." / KM: អ៊ូជីន៖ "ញ៉ាំហើយ ម៉ែ។" → [효과음] 탁 / KM 효과음: ផាំង!
- art_space: **상단 1/3 복도 천장 어둠** — 왼쪽 위 우진 말풍선, 효과음은 닫히는 문 바로 위
- fx/note: 우진 손목 안 보임(뒷모습).
- no_text: 문에 명패·스티커 없음.

### panel_006
- scene_id: S1 / location: LOC_HOME_ENTRANCE
- time/light: 같은 밤 · 전구 빛이 바닥을 정면으로
- beat: 거울 이미지 — 같은 봉투, 같은 신발 (긴장 7) · L01◐
- size: medium · height: short · gutter_after: **xwide (다음 날 새벽으로)**
- camera: **바닥 높이 close-up**(EP01 P58과 같은 높이)
- composition: 시멘트 바닥에 **나란히 놓인 두 켤레** — 왼쪽 하린의 낡은 흰 운동화, 오른쪽 우진의 흰 스니커즈(덜 낡음). EP01 P58에서 봉투가 떨어졌던 바로 그 자리. **프레임 위쪽**에서 하린의 오른손이 **자기 빈 봉투**(세 번 접힘, 빨간 고무줄, **납작**)를 쥐고 내려다보듯 신발 위에. 위쪽 가장자리에 턱의 나무 모서리. 나머지는 따뜻한 어둠.
- characters: 하린(손만)
- props: **PROP_ENVELOPE FLAT** (EP01 P50·P58과 같은 문장), 운동화 두 켤레
- emotion/tension: 정적.
- motion/direction: 봉투 → 아래 두 켤레.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 봉투 접힘·고무줄 위치 = EP01 P50·P58. 신발 로고 없음.
- no_text: 봉투·신발 무지.

--- SCENE BREAK --- (S1 → S2 · 16일 새벽 계단 · 빛: 맨 전구 → 새벽 푸른빛 · 하린 백팩 없음)

### panel_007
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 16일 ~05:50 · `L-DAWN-OUT`(나트륨 등 없음) — 새벽 푸른빛, 하늘 끝 옅은 복숭아, 층계참 노란 가로등이 꺼지기 직전, 입김
- beat: 새 날 — 리셋 (긴장 4)
- size: large · height: tall · gutter_after: normal
- camera: **high-angle, long shot**(계단 위에서 내려다봄)
- composition: 지그재그 시멘트 계단이 프레임을 대각선으로 내려간다. 중간 층계참의 **빈 낡은 평상** 옆 계단에 **웅크려 앉은 하린**(작게, 전신), 무릎 위 두 손에 빈 봉투, 입김. 낮은 담·금 간 화분·전선. 층계참 가로등(흐린 노랑). **맨 아래 골목 입구에 가게의 흰빛 한 점.** 위쪽 1/4은 계단 위 담과 푸른 하늘.
- characters: 하린 `HARIN_COMMUTE`(백팩 없음) — 웅크린 자세
- props: 봉투(무릎), 빈 평상, 가게 흰빛
- emotion/tension: 고요한 리셋(9→4).
- motion/direction: 위 → 하린 → 아래 가게 흰빛.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 할머니 없음(새벽). 가게 위치 = EP01 P08·P41과 같은 아래쪽.
- no_text: 담·전봇대에 전단·번호판 없음.

### panel_008
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 어색한 휴전 (긴장 4)
- size: medium · height: tall · gutter_after: normal
- camera: **low-angle**, 하린 옆·뒤에서 위쪽 계단을 올려다봄
- composition: **전경 오른쪽 아래**: 몸을 틀어 위를 올려다보는 하린(3/4 뒷모습, 낮은 포니테일). **중경 위쪽**: 위쪽 계단에서 내려오는 우진 — **후드를 머리에 쓰고 양손을 패딩 주머니에 넣음**(손목 안 보임), 입김. 계단 위로 푸른 새벽하늘. **상단 30%는 평평한 새벽하늘.**
- characters: 하린 `HARIN_COMMUTE` · 우진 `UJIN_OUT`(백팩 없음, 후드 씀, 무심한 얼굴)
- props: —
- emotion/tension: 어색한 휴전.
- motion/direction: 하린 → 위로 우진 → 하늘(말풍선).
- dialogue_ref: 우진: "쉬는 날인데도 이 시간에 깨?" / KM: អ៊ូជីន៖ "ថ្ងៃសម្រាក បងនៅតែភ្ញាក់ម៉ោងនេះ?" → 하린: "…버릇이야." / KM: ហារីន៖ "…ទម្លាប់ហើយ។"
- art_space: **상단 30% 새벽하늘** — 위쪽(우진) → 아래 오른쪽(하린) 순서
- fx/note: 전선이 하늘 면을 가르지 않게(왼쪽 가장자리로).
- no_text: 글자 없음.

### panel_009
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽 · 고른 푸른빛
- beat: 물건으로 하는 첫 고백 (긴장 5) · L01◐ · 작은 승리 시작
- size: insert · height: short · gutter_after: normal
- camera: **top-down**, 계단 한 칸 위로
- composition: 회색 시멘트 계단 한 칸. 왼쪽에서 **우진의 오른손**(마디 반창고)이 자기 빈 봉투를 말없이 내려놓고, 오른쪽에서 **하린의 손**(짧은 손톱, 회색 후드 소매 끝)이 그 옆에 자기 봉투를 내려놓는다. **똑같은 납작한 크라프트 봉투 두 개, 같은 접힘, 같은 빨간 고무줄**이 나란히, 프레임 중앙. 아래 가장자리에 두 켤레 흰 운동화 앞코.
- characters: 우진(오른손) · 하린(손)
- props: **PROP_ENVELOPE FLAT ×2**
- emotion/tension: 말 대신 물건.
- motion/direction: 왼손 → 두 봉투 → 오른손.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 두 봉투는 완전히 같아야 한다(크기·색·접힘·고무줄 위치). 빨간 고무줄 두 줄이 화면에서 가장 채도 높은 점.
- no_text: 봉투 무지, 계단에 낙서 없음.

### panel_010
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「언제부터?」「이 년.」 (긴장 5)
- size: medium · height: normal · gutter_after: tight
- camera: **low two-shot**, 계단 아래에서 올려다봄
- composition: 한 칸 차이로 나란히 앉은 남매 — **화면 왼쪽 한 칸 위 우진**, **화면 오른쪽 하린**. 둘 다 시선은 아래(두 사람 사이 계단 위 봉투 두 개, 프레임 아래쪽에 작게). 우진 양손은 무릎 위 패딩 소매 안. 뒤로 위쪽 계단과 담. **상단 30%는 위쪽 담과 새벽하늘.**
- characters: 우진 `UJIN_OUT`(후드, 조용한 질문) · 하린 `HARIN_COMMUTE`(담담)
- props: 봉투 두 개(아래)
- emotion/tension: 조용한 질문.
- motion/direction: 왼쪽 위 우진 → 오른쪽 하린.
- dialogue_ref: 우진: "…누나는 언제부터?" / KM: អ៊ូជីន៖ "…ចុះបង តាំងពីពេលណា?" → 하린: "이 년." / KM: ហារីន៖ "ពីរឆ្នាំ។"
- art_space: **상단 30% 담·새벽하늘** — 왼쪽(우진) → 오른쪽(하린)
- fx/note: §1-1 S2 축 기준 컷.
- no_text: 글자 없음.

### panel_011
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「…난 일 년 좀 넘었어.」 (긴장 5)
- size: medium · height: normal · gutter_after: tight
- camera: 약간 low, **close-up** 우진
- composition: 우진이 놀라 **화면 오른쪽(하린 쪽)**으로 고개를 돌린 얼굴, 후드 가장자리, 앞머리 아래 눈이 커짐. 입김이 끊겨 입가에 남은 김 한 줄. 배경 초점 밖 담. **상단 25% 흐린 새벽 하늘·담.**
- characters: 우진 `UJIN_OUT` — 경쟁심과 미안함이 섞인 놀람
- props: —
- emotion/tension: 기간 비교의 기준점.
- motion/direction: 우진 시선 → 화면 오른쪽(하린).
- dialogue_ref: 우진: "…난 일 년 좀 넘었어." / KM: អ៊ូជីន៖ "…ខ្ញុំ មួយឆ្នាំជាង។"
- art_space: **상단 25% 흐린 하늘·담**(왼쪽 위 중심)
- fx/note: —
- no_text: 글자 없음.

### panel_012
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「그래도 내 게 더 두꺼웠어.」 — 온기 ① (긴장 3)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **medium** 우진
- composition: 지기 싫은 얼굴의 우진이 **오른손**(반창고) 엄지와 검지를 벌려 두께를 보여 줌 — 손가락 틈이 프레임 중앙. 왼손은 패딩 주머니 속. **상단 25% 흐린 하늘·담.**
- characters: 우진 `UJIN_OUT` — 유치한 자존심
- props: —
- emotion/tension: 코믹 전환.
- motion/direction: 얼굴 → 손가락 틈.
- dialogue_ref: 우진: "그래도 내 게 더 두꺼웠어." / KM: អ៊ូជីន៖ "តែរបស់ខ្ញុំក្រាស់ជាង។"
- art_space: **상단 25% 흐린 하늘·담**
- fx/note: 금액은 손가락 틈으로만. 과장 기호 없음.
- no_text: 글자 없음.

### panel_013
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「…그게 자랑이야?」 — 온기 ② (긴장 3)
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **medium close-up** 하린
- composition: 무표정의 하린이 **더 넓은** 엄지-검지 틈을 들어 보임(손이 얼굴 옆, 프레임 중앙 높이). 후드 소매는 내려져 있음. **상단 25% 흐린 하늘·담.**
- characters: 하린 `HARIN_COMMUTE` — 건조한 반격(눈만 살짝 장난)
- props: —
- emotion/tension: 건조한 웃음.
- motion/direction: 손가락 틈 → 무표정.
- dialogue_ref: 하린: "…그게 자랑이야?" / KM: ហារីន៖ "…រឿងហ្នឹងយកមកអួត?"
- art_space: **상단 25% 흐린 하늘·담**
- fx/note: 012와 대구(손가락 틈 크기 차이가 읽히게).
- no_text: 글자 없음.

### panel_014
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽 · **층계참 가로등이 꺼진다**(전구가 어두운 회색), 하늘이 한 톤 밝아짐
- beat: 처음 같이 웃음 — 온기 ③ (긴장 3, 회차 밸브 바닥)
- size: large · height: normal · gutter_after: wide
- camera: eye-level 약간 low, **two-shot wide**
- composition: 화면 왼쪽 우진이 **두 손을 말도 안 되게 넓게 벌림**(패딩 소매가 손목을 덮음 — 손목 안 보임). 화면 오른쪽 하린이 참지 못하고 코웃음, 고개를 살짝 숙임. **두 사람의 입김 두 줄기가 같이 흩어짐.** 뒤 층계참 가로등이 막 꺼진 상태. **상단 30% 밝아진 새벽하늘.**
- characters: 우진(과장된 손짓, 진지한 척) · 하린(한쪽 입꼬리 코웃음)
- props: 꺼진 가로등
- emotion/tension: 회차 최저 긴장 = 처음 같이 웃음.
- motion/direction: 우진 두 손 → 입김 → 하린.
- dialogue_ref: 우진: "진짜라니까." / KM: អ៊ូជីន៖ "ពិតមែនតើ!" → 하린: "…바보." / KM: ហារីន៖ "…ល្ងង់។"
- art_space: **상단 30% 새벽하늘** — 왼쪽(우진) → 오른쪽(하린)
- fx/note: 웃음은 작게(하린은 한쪽 입꼬리). 땀·기호 없음.
- no_text: 글자 없음.

### panel_015
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「그 팔찌… 삼촌 서랍에 있더라.」 — 공기 전환 (긴장 5) · L04◐
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **close-up 하린 + 전경 우진 왼소매**
- composition: **화면 오른쪽** 하린 얼굴, 웃음이 가라앉고 시선이 아래로(우진의 왼소매). **전경 화면 왼쪽(초점 밖)**: 우진의 검은 패딩 왼소매 — 왼손을 **무릎 사이로 감추는** 동작. 손목 안 보임. **상단 25% 흐린 하늘·담.**
- characters: 하린 `HARIN_COMMUTE`(조용히 가라앉은 눈) · 우진(왼소매만)
- props: 우진 왼소매
- emotion/tension: 공기가 식는다.
- motion/direction: 하린 시선 → 전경 소매.
- dialogue_ref: 하린: "그 팔찌… 삼촌 서랍에 있더라." / KM: ហារីន៖ "កងដៃហ្នឹង… បងឃើញនៅក្នុងថតរបស់ពូ។"
- art_space: **상단 25% 흐린 하늘·담**(오른쪽 위)
- fx/note: 팔찌 노출 금지(017 전까지).
- no_text: 글자 없음.

### panel_016
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「…팔았어?」「안 팔았어. 맡긴 거야.」 (긴장 6) · E02-B ⟨이중의미⟩ · L38◎ · L15◐
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **한 이미지 안 숏-리버스숏 two-shot**(분할 없음)
- composition: **화면 오른쪽 중경** 하린이 3/4로 우진을 **똑바로** 본다. **화면 왼쪽 전경** 우진은 옆얼굴로 **고개를 돌려 외면**(얼굴이 화면 왼쪽 위로). 우진의 **오른손**은 무릎 위, 마디 반창고가 보임. 왼손목은 여전히 소매 안. **상단 30% 흐린 하늘·담.**
- characters: 하린(정면 응시) · 우진(외면, 턱에 힘)
- props: 반창고
- emotion/tension: 말장난이 날을 세운다.
- motion/direction: 하린 시선 → 우진 옆얼굴(외면).
- dialogue_ref: 하린: "…팔았어?" / KM: ហារីន៖ "…ឯងលក់ហើយ?" → 우진: "안 팔았어. 맡긴 거야." / KM: អ៊ូជីន៖ "មិនបានលក់ទេ។ បញ្ចាំ។"
- art_space: **상단 30% 흐린 하늘·담** — 오른쪽 위(하린) → 왼쪽 위(우진)
- fx/note: 분할 프레임·인셋 금지(EP01 FL8과 같은 원칙).
- no_text: 글자 없음.

### panel_017
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽 · 고른 새벽 푸른빛이 옥 표면에 부드럽게(번쩍임·흰 하이라이트 줄 없음)
- beat: 손목 공개 — 복제품 (긴장 6) · E02-C · L05◐ · L39●
- size: large · height: short · gutter_after: normal
- camera: **손목을 약간 위에서 내려다보는 extreme-close-up** (★ EP01 panel_019 · panel_048과 **같은 앵글·같은 크기**)
- composition: 우진의 **오른손**(반창고)이 검은 패딩 소매와 차콜 후드 소매를 함께 걷어 올린다 → 드러난 **왼손목의 진초록 옥팔찌**. style-bible §5-5 문장 그대로: **3/4 각도, 약간 위에서, 프레임 폭의 약 40%, 프레임 중앙(세로 45–65% 높이), 금 간 자리가 링의 오른쪽 위에서 카메라를 향함.** 금 간 자리 위 **납작한 금색 칠 선(도드라짐 없음, 입체 테 아님)**, **옥 안 흰 구름 무늬 없음 — 고르게 진초록.** 배경은 초점 밖 회색 시멘트 계단과 검은 패딩 무릎. 위쪽 25%·아래쪽 15%는 초점 밖 시멘트 면.
- characters: 우진(왼손목·오른손만)
- props: **PROP_BRACELET_COPY** + 우진 WRIST RULE "팔찌 보임" 문장
- emotion/tension: 증거 제시.
- motion/direction: 걷어 올리는 소매 → 팔찌 → 금색 칠 선.
- dialogue_ref: 하린: "그럼 이건…" / KM: ហារីន៖ "ចុះអានេះ…" → 우진: "가짜. 맡기러 간 그날, 삼촌이 바로 내주더라." / KM: អ៊ូជីន៖ "អាក្លែងទេ។ ថ្ងៃយកទៅបញ្ចាំហ្នឹង ពូហុចឲ្យភ្លាម។"
- art_space: **상단 25% 초점 밖 시멘트 면**(하린 짧은 말풍선, 꼬리 → 오른쪽 가장자리 화면 밖) + **하단 15% 초점 밖 계단 면**(우진 긴 말풍선)
- fx/note: ★ 특별 주의 — **흰 구름 무늬·도드라진 금 테·흰 반짝임 줄이 보이면 재그림**(TW6). EP01 P19와 차이는 빛 색(새벽 청 vs 펜던트 노랑)뿐; 각도·크기·위치·금 자리 방향은 같다. 재독 독자가 EP01 P48 진품과 나란히 놓을 수 있어야 한다. `PROPS_keyprops` 카드 attach 권장.
- no_text: 팔찌 각인·글자 없음.

### panel_018
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽 · 얼굴에 차가운 푸른빛, 배경 아래쪽 초점 밖 가게의 흰 불빛 한 점
- beat: 「…바로?」 — 작은 반전 (긴장 7) · L39●
- size: large · height: normal · gutter_after: **wide**
- camera: **우진 쪽 약간 위에서 본 정면 close-up**(하린이 팔찌를 내려다보는 얼굴)
- composition: 프레임 중앙 하린의 얼굴이 **천천히 식는다** — 눈은 화면 아래 왼쪽(팔찌, 화면 밖)에서 떨어지지 않음, 입은 반쯤 열림. 배경: 하린 어깨 너머 내리막 계단이 흐리게 떨어지고 **아래쪽에 가게의 흰 불빛 한 점**(초점 밖 보케). **상단 30%는 초점 밖 담과 푸른 면.**
- characters: 하린 `HARIN_COMMUTE` — 서늘한 깨달음(가늘어지는 눈, 눈물 없음)
- props: 가게 흰빛(보케)
- emotion/tension: 작은 반전 — "미리 만들어 뒀다".
- motion/direction: 하린 눈 → 아래 가게 흰빛.
- dialogue_ref: 하린: "…바로?" / KM: ហារីន៖ "…ភ្លាម?" → 하린 (생각): "그날 바로… 똑같은 걸, 미리?" / KM: ហារីន (គិត)៖ "ថ្ងៃនោះតែម្ដង… ដូចបេះបិទ ត្រៀមទុកជាមុន?"
- art_space: **상단 30% 초점 밖 담·푸른 면** — 왼쪽 위 말풍선(짧게) → 오른쪽 위 생각 풍선(꼬리 없음)
- fx/note: 가게 흰빛은 얼굴과 겹치지 않게 아래쪽 1/4에.
- no_text: 글자 없음.

### panel_019
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「감쪽같지?」 — 정보 격차 (긴장 6)
- size: medium · height: tall · gutter_after: normal
- camera: **뒤 약간 위에서 본 rear 3/4 two-shot**(계단 위쪽에서 남매 등 너머 내리막)
- composition: 뒤에서 본 남매(좌우가 뒤집혀 보임 — 우진 = 화면 오른쪽 한 칸 위, 하린 = 화면 왼쪽). 우진은 어깨를 으쓱하며 **왼소매를 끌어내림**(초록이 소매 끝으로 사라지는 순간, 아주 작게). 하린의 고개는 **내리막 계단 아래 골목 입구 가게의 흰 불빛** 쪽(프레임 아래쪽). **왼쪽 위 1/4은 옆 담의 평평한 시멘트 면.**
- characters: 우진(으쓱, 의미를 모름) · 하린(뒷머리, 시선 아래 가게)
- props: 팔찌(소매 끝으로 사라짐), 가게 흰빛
- emotion/tension: 하린만 안다.
- motion/direction: 우진 → 하린 시선 → 아래 가게 흰빛.
- dialogue_ref: 우진: "감쪽같지? 누나도 몰랐잖아." / KM: អ៊ូជីន៖ "ដូចណាស់មែនទេ? បងមើលមិនដឹងផង។"
- art_space: **왼쪽 위 1/4 담의 시멘트 면** — 꼬리 ↘ 우진
- fx/note: 팔찌는 거의 다 가려진 작은 초록 한 점까지만. 이후 EP02 내내 노출 없음.
- no_text: 글자 없음.

### panel_020
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「…왜 그랬어.」「누나가 알면 공장 일 더 늘린다고.」 (긴장 6) · E02-L
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **medium close-up** 우진
- composition: 화면 왼쪽 중심 우진, 시선은 아래, 퉁명. **오른손 손끝**으로 무릎 위 자기 봉투를 만지작(봉투가 프레임 아래쪽에). 하린은 화면 오른쪽 가장자리에 어깨만(초점 밖). **상단 30% 흐린 하늘·담.**
- characters: 우진 `UJIN_OUT` — 퉁명스러운 고백
- props: 우진 봉투(손끝)
- emotion/tension: 각자 다른 이유.
- motion/direction: 하린 어깨(오른쪽) → 우진 얼굴 → 봉투.
- dialogue_ref: 하린: "…왜 그랬어." / KM: ហារីន៖ "…ធ្វើបែបហ្នឹងហេតុអី?" → 우진: "삼촌이 그러더라. 누나가 알면 공장 일 더 늘린다고." / KM: អ៊ូជីន៖ "ពូថា បើបងដឹង បងនឹងធ្វើការរោងចក្រច្រើនម៉ោងជាងនេះ។"
- art_space: **상단 30% 흐린 하늘·담** — 오른쪽 위(하린, 꼬리 → 오른쪽 가장자리) → 왼쪽 위(우진, 긴 말풍선)
- fx/note: 왼손목 소매 안.
- no_text: 봉투 무지.

### panel_021
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「…나한테는, 아빠가 알면 무너진대.」 (긴장 6)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **close-up** 하린(가슴 위 + 무릎의 손이 아래 가장자리)
- composition: 하린의 **한쪽 입꼬리가 쓰게 올라감**(웃음 아님), 시선은 앞 아래. 프레임 아래쪽에 무릎 위에서 **맞잡히는 두 손**. **상단 25% 흐린 하늘·담.**
- characters: 하린 `HARIN_COMMUTE` — 같은 사람이 둘에게 다른 이유를 댔다는 걸 아는 얼굴
- props: —
- emotion/tension: 쓴 깨달음.
- motion/direction: 입꼬리 → 맞잡은 손.
- dialogue_ref: 하린: "…나한테는, 아빠가 알면 무너진대." / KM: ហារីន៖ "…ចំណែកបង ពូថា បើប៉ាដឹង ប៉ានឹងបាក់ចិត្ត។"
- art_space: **상단 25% 흐린 하늘·담**
- fx/note: —
- no_text: 글자 없음.

### panel_022
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「삼촌, 누나 쉬는 날까지 알더라.」 — 서늘한 작은 정점 (긴장 7) · E02-K · L12◐
- size: large · height: tall · gutter_after: normal
- camera: eye-level 약간 low, **two-shot + 전경 하린 손(한 이미지 안 구도)**
- composition: 중경: 화면 왼쪽 우진이 생각난 듯 무심하게 말함(옆얼굴, 하린 쪽). 화면 오른쪽 하린, 얼굴이 굳는다. **전경 아래(세로 65–85%)**: 무릎 위 맞잡고 있던 **하린의 두 손이 멈춤**(손가락이 굳은 상태, 초점이 손에). 두 얼굴은 세로 40–55% 높이. **상단 35%는 평평한 새벽하늘·담.**
- characters: 우진(무심) · 하린(굳음)
- props: —
- emotion/tension: 삼촌은 근무표까지 안다.
- motion/direction: 우진 → 하린 얼굴 → 아래 멈춘 손.
- dialogue_ref: 우진: "근데 삼촌, 누나 쉬는 날까지 알더라." / KM: អ៊ូជីន៖ "តែពូ ដឹងទាំងថ្ងៃសម្រាករបស់បងទៀត។" → 우진: "어제 나한테, 누나 쉬는 날 맞냐고 묻던데." / KM: អ៊ូជីន៖ "ម្សិលមិញ ពូសួរខ្ញុំថា បងឯងថ្ងៃសម្រាកមែនទេ។" → 하린: "…나, 삼촌한테 말한 적 없어." / KM: ហារីន៖ "…បងមិនដែលប្រាប់ពូផង។"
- art_space: **상단 35% 새벽하늘·담** — 말풍선 3개: 왼쪽 위 우진① → 왼쪽 그 아래 우진② → 오른쪽 위 하린③
- fx/note: 말풍선 3개 패널. 전선·가로등을 상단 35%에 두지 말 것. 분할 프레임 금지.
- no_text: 글자 없음.

### panel_023
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「어제 노을 질 때 계단에 있었지?」 (긴장 5) · L13◎ (선택 패널 — 판정 EA로 유지)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **two-shot**(아래에서 약간 비스듬히)
- composition: 화면 왼쪽 우진이 **턱으로 계단 아래 골목 입구 쪽**(화면 오른쪽 아래 프레임 밖)을 가리킴. 화면 오른쪽 하린이 고개를 젓는다. **상단 30% 흐린 하늘·담.**
- characters: 우진(턱짓) · 하린(고개 저음)
- props: —
- emotion/tension: 재독자용 작은 회수.
- motion/direction: 우진 턱 → 아래 오른쪽 → 하린.
- dialogue_ref: 우진: "어제 노을 질 때 계단에 있었지? 가게 들어가다 봤어." / KM: អ៊ូជីន៖ "ម្សិលមិញពេលថ្ងៃលិច បងនៅលើជណ្ដើរមែនទេ? ខ្ញុំឃើញពេលចូលហាង។" → 하린: "…난 못 봤어." / KM: ហារីន៖ "…បងមិនបានឃើញឯងទេ។"
- art_space: **상단 30% 흐린 하늘·담** — 왼쪽 위(우진, 긴 말풍선 2줄) → 오른쪽(하린)
- fx/note: 우진 KM이 긴 편(letterer 폭 조정).
- no_text: 글자 없음.

### panel_024
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽
- beat: 「나 이번 달… 덜 드렸어.」 — D10 준비 (긴장 5)
- size: medium · height: tall · gutter_after: tight
- camera: eye-level, **medium** 하린 → 우진 리액션(한 이미지)
- composition: 화면 오른쪽 하린이 계단 위 **자기 봉투를 집어** 엄지와 검지로 **납작함을 확인하듯** 쥠(봉투가 가슴 높이, 세로 55–65%). 화면 왼쪽 우진이 놀라 하린 쪽으로 몸을 돌림. 두 얼굴은 세로 40–55%. **상단 35% 새벽하늘·담.**
- characters: 하린(조용한 고백) · 우진(놀람)
- props: 하린 봉투(FLAT)
- emotion/tension: 거절의 고백.
- motion/direction: 봉투 → 하린 얼굴 → 우진.
- dialogue_ref: 하린: "나 이번 달… 덜 드렸어." / KM: ហារីន៖ "ខែនេះ… បងជូនពូតិចជាងមុន។" → 하린: "처음으로 안 된다고 했어." / KM: ហារីន៖ "លើកដំបូង បងប្រាប់ពូថាមិនបាន។" → 우진: "누나가? 삼촌한테?" / KM: អ៊ូជីន៖ "បង? ហ៊ានប្រាប់ពូ?"
- art_space: **상단 35% 새벽하늘·담** — 말풍선 3개: 오른쪽 위 하린① → 오른쪽 그 아래 하린② → 왼쪽 위 우진③
- fx/note: 말풍선 3개 패널. 봉투는 납작(돈 없음).
- no_text: 봉투 무지.

### panel_025
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽 · 하늘이 조금 더 밝아짐
- beat: 「…잘했네.」「우리, 이제 어떻게 해?」 — 작은 승리 (긴장 6)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **two-shot medium close-up**
- composition: 화면 왼쪽 우진의 **삐뚜름한 첫 미소**(한쪽 입꼬리). 화면 오른쪽 하린이 동생 쪽으로 얼굴을 돌려 **처음으로 묻는** 얼굴 — 눈썹이 살짝 흔들림. 둘 사이 거리가 가까워짐. **상단 30% 밝아진 하늘·담.**
- characters: 우진(삐뚜름한 미소) · 하린(흔들리는 질문)
- props: —
- emotion/tension: 혼자가 아니다(반쪽 승리).
- motion/direction: 우진 → 하린.
- dialogue_ref: 우진: "…잘했네." / KM: អ៊ូជីន៖ "…ល្អហើយ។" → 하린: "…우진아. 우리, 이제 어떻게 해?" / KM: ហារីន៖ "…អ៊ូជីន។ ចុះឥឡូវ យើងធ្វើម៉េច?"
- art_space: **상단 30% 하늘·담** — 왼쪽 위(우진) → 오른쪽 위(하린)
- fx/note: 웃음은 작게. 눈물 없음.
- no_text: 글자 없음.

### panel_026
- scene_id: S2 / location: LOC_ALLEY_STAIRS
- time/light: 같은 새벽 · **하늘 끝 복숭아빛이 더 밝게**, 가로등 꺼짐
- beat: 「절대 모르게.」 — 남매의 맹세 (긴장 5) · L11◐
- size: large · height: tall · gutter_after: **xwide (다음 날 저녁으로)**
- camera: **high-angle wide**(계단 위에서 내려다보며 멀리 지붕선·하늘까지)
- composition: 계단 중간에 나란히 앉은 **두 실루엣**(작게, 뒤에서 — 좌우 뒤집힘), 동시에 자기 봉투를 집어 주머니에 넣는 동작. 아래로 계단이 떨어지고 **골목 입구 가게의 흰 불빛은 아직 켜져 있음**(프레임 아래쪽). 멀리 언덕 동네 지붕선 위 **상단 25%는 복숭아빛이 번진 새벽하늘.**
- characters: 우진·하린(작은 실루엣)
- props: 봉투 둘(→ 주머니), 가게 흰빛
- emotion/tension: 결속이지만 아이러니(비밀이 둘의 비밀로 커짐).
- motion/direction: 하늘(말풍선) → 두 실루엣 → 아래 가게 흰빛.
- dialogue_ref: 우진: "엄마 아빠, 새롬이는. 절대 모르게." / KM: អ៊ូជីន៖ "ម៉ែ ប៉ា និងសែរ៉ូម… កុំឲ្យដឹងដាច់ខាត។" → 하린: "…응. 절대." / KM: ហារីន៖ "…អើ។ ដាច់ខាត។"
- art_space: **상단 25% 복숭아빛 새벽하늘** — 왼쪽(우진) → 오른쪽(하린)
- fx/note: 007과 같은 계단 각도(같은 장소 확인).
- no_text: 지붕·간판에 글자 없음.

--- SCENE BREAK --- (S2 → S3 · 17일 18:40 저녁 식탁 · 빛: 새벽 청 → 노란 펜던트 · 의상: COMMUTE → HOME)

### panel_027
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 17일 18:40 · `L-DINNER` — 노란 펜던트, 밥그릇 김, 꿀색 빛
- beat: 다섯 식구, 엄마의 수다 (긴장 4) · L07◐ · L06◐ · 쌀통 첫 등장
- size: large · height: normal · gutter_after: normal
- camera: eye-level, **wide**(§1-1 기준 축 — 창 쪽에서 레인지 벽)
- composition: 화면 왼쪽 끝 아버지, 오른쪽 끝 철제 접이식 의자의 새롬, 앞쪽 긴 면 하린(뒷모습 3/4, 아버지 가까이), 안쪽 긴 면 우진(왼쪽)과 미자(오른쪽). **미자가 손을 크게 휘두르며 수다** — 왼손 약지의 흰 띠가 **작게** 스침. 뒷벽 레인지·싱크대·그릇 선반, **싱크대 옆 바닥(미자와 새롬 사이 뒤쪽)에 뚜껑 닫힌 무지 쌀통.** 우진 의자 등받이에 검은 숏패딩. 하린·우진은 너무 평범하게 밥만 먹음. 펜던트는 프레임 위 가장자리로 잘림. **상단 25%는 그릇 선반 위 어두운 벽·천장.**
- characters: 인호 `INHO_HOME` · 미자 `MIJA_HOME`(반달 눈 수다) · 하린 `HARIN_HOME` · 우진 `UJIN_HOME`(왼손목 소매 안) · 새롬 `SAEROM_HOME`
- props: **PROP_RICE_BIN**(닫힘, 배경), PROP_RING_MARK(작게), 밥그릇·숟가락, 숏패딩(의자)
- emotion/tension: 평온 = 잃을 것.
- motion/direction: 미자 손짓 → 식탁 → 배경 쌀통.
- dialogue_ref: 미자: "아이고, 오늘 가게 앞을 지나는데—" / KM: មីចា៖ "អូយ ថ្ងៃនេះម៉ែដើរកាត់មុខហាង—" → 미자: "삼촌이, 새롬이 요즘도 키 크냐고 물으시더라~" / KM: មីចា៖ "ពូសួរថា សែរ៉ូមនៅតែខ្ពស់ឡើងទៀតឬអត់~"
- art_space: **상단 25% 선반 위 어두운 벽·천장**(오른쪽 위 중심) — 같은 화자 말풍선 2개 위→아래, 꼬리 ↓ 미자
- fx/note: 탑다운 금지. 자리 배치 = EP01 P15. 반지 그리지 않음. 하린 숟가락 끝 안 보이게.
- no_text: 쌀통·그릇 무지, 달력 빈 종이.

### panel_028
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 두 숟가락이 같은 순간 멈춘다 (긴장 5)
- size: medium · height: normal · gutter_after: tight
- camera: 식탁 면 높이, 식탁 축을 따라 — **손 인서트 + 눈(한 이미지 안 상하 구도)**
- composition: **아래 절반**: 식탁을 사이에 둔 두 손이 숟가락을 든 채 밥그릇 위에서 **같은 순간 멈춤** — 앞 화면 왼쪽 하린 손(오트밀 카디건 소매, **숟가락 끝은 밥그릇에 가려짐**), 맞은편 화면 오른쪽 우진 손(차콜 후드 소매, 오른손 반창고). **위 절반**: 맞은편 우진의 얼굴(초점 약간 밖)이 시선을 들어 **하린 쪽을 봄**, 화면 왼쪽 가장자리에 하린의 옆얼굴 눈. 김이 둘 사이에.
- characters: 하린·우진(손 + 눈)
- props: 숟가락 둘, 밥그릇
- emotion/tension: 새 공범의 반 박자.
- motion/direction: 멈춘 두 숟가락 → 위로 마주친 시선.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 분할 프레임 금지(한 장의 깊이 구도). 하린 숟가락 휜 끝 노출 금지(W5).
- no_text: 숟가락 각인 없음.

### panel_029
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「삼촌은 나 맨날 애기 취급해~」 (긴장 3) · E02-D · L14● · 온기 ①
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **close-up** 새롬
- composition: 젓가락을 입에 문 채 **입을 삐죽 내민** 새롬, 오른쪽 귀 위 노란 별 머리핀이 또렷. 볼에 주근깨. 배경 초점 밖 따뜻한 벽. **상단 25% 따뜻한 크림색 벽.**
- characters: 새롬 `SAEROM_HOME` — 투정
- props: 젓가락, 머리핀
- emotion/tension: 웃음.
- motion/direction: 정면.
- dialogue_ref: 새롬: "삼촌은 나 맨날 애기 취급해~" / KM: សែរ៉ូម៖ "ពូចាត់ទុកអូនដូចកូនង៉ារហូត~"
- art_space: **상단 25% 크림색 벽**
- fx/note: 머리핀 = 오른쪽 귀 위.
- no_text: 핀에 글자 없음.

### panel_030
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「애기 맞잖아.」「나 중2거든?」 — 온기 ② (긴장 3)
- size: medium · height: tall · gutter_after: tight
- camera: eye-level, **two-shot**(우진 전경 왼쪽, 새롬 중경 오른쪽)
- composition: **전경 화면 왼쪽** 우진이 밥을 먹으며 무심하게 한마디(옆얼굴, 왼손목 소매 안). **중경 화면 오른쪽** 새롬이 철제 접이식 의자에서 **벌떡 일어나 까치발로** 손바닥을 머리 위에 대고 키를 재는 시늉 — 의자가 살짝 기울어 덜컹. **상단 30% 따뜻한 벽.**
- characters: 우진 `UJIN_HOME`(무심) · 새롬 `SAEROM_HOME`(발끈)
- props: 철제 의자
- emotion/tension: 남매 놀림.
- motion/direction: 우진 → 새롬.
- dialogue_ref: 우진: "애기 맞잖아." / KM: អ៊ូជីន៖ "កូនង៉ាមែនហ្នឹង។" → 새롬: "오빠! 나 중2거든?" / KM: សែរ៉ូម៖ "បងប្រុស! អូនរៀនថ្នាក់ទី៨ហើយណា៎!"
- art_space: **상단 30% 벽** — 왼쪽 위(우진) → 오른쪽 위(새롬, 꼬리 ↓)
- fx/note: 속도선·집중선 금지(style-bible §1) — 의자 기울기와 몸짓으로만.
- no_text: 글자 없음.

### panel_031
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 가장 따뜻한 펜던트 빛
- beat: 웃음 정점 — 회차 저점 (긴장 2) · 온기 ③ (EP01 P18 각운)
- size: large · height: normal · gutter_after: normal
- camera: eye-level, **medium-wide**(기준 축)
- composition: 까치발로 선 새롬(오른쪽), 앞쪽 하린의 **한쪽 입꼬리 웃음**(3/4 옆얼굴), 왼쪽 끝 아버지 입가가 살짝 풀림, 안쪽 미자의 **반달 눈 웃음**, 우진 피식. 식탁 전체가 노란 빛 안. 배경 쌀통 닫힘. **상단 25% 펜던트 옆 어두운 천장.**
- characters: 전원(HOME 의상)
- props: 쌀통(배경)
- emotion/tension: 온기 정점.
- motion/direction: 새롬 → 식탁 한 바퀴 → 하린.
- dialogue_ref: 하린: "…까치발 내려." / KM: ហារីន៖ "…ដាក់កែងជើងចុះ អូន។"
- art_space: **상단 25% 어두운 천장**(왼쪽~가운데) — 꼬리 ↓ 하린
- fx/note: 펜던트는 프레임 위로 잘라 천장 면을 비움.
- no_text: 글자 없음.

### panel_032
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 쌀통으로 뻗는 손 (긴장 4) · 쌀통 심기 ①
- size: medium · height: tall · gutter_after: tight
- camera: eye-level, **medium**(기준 축, 새롬 중심)
- composition: **중경 화면 오른쪽**: 일어선 김에 뒷벽 싱크대 옆 **쌀통** 앞에 간 새롬이 **뚜껑 손잡이에 손을 뻗음**, 장난스러운 얼굴(어깨 너머로 식탁을 돌아보며). **전경 화면 왼쪽**: 안쪽 자리에 앉은 미자가 식탁(카메라) 쪽을 향해 아직 수다 중 — **새롬에게 등을 보인 채**, 모름. 쌀통이 처음으로 화면 중심 높이에. **상단 25% 그릇 선반 위 평평한 크림색 벽·어두운 천장.**
- characters: 새롬 `SAEROM_HOME`(장난) · 미자 `MIJA_HOME`(모르고 웃는 중)
- props: **PROP_RICE_BIN**(뚜껑 닫힘, 손잡이)
- emotion/tension: 작은 위험.
- motion/direction: 미자(전경) → 뒤의 새롬 손 → 쌀통 뚜껑.
- dialogue_ref: 새롬: "엄마 쌀통에 누룽지 숨겼지? 다 보여~" / KM: សែរ៉ូម៖ "ម៉ែលាក់បាយក្តាំងក្នុងធុងអង្ករមែនទេ? ឃើញអស់ហើយ~"
- art_space: **상단 25% 선반 위 벽·천장**(오른쪽 위) — 꼬리 ↓ 새롬
- fx/note: 쌀통은 art-director PROP_RICE_BIN 문장 그대로(§5-3 FL1). 뚜껑 열림 금지.
- no_text: 쌀통 무지(브랜드·눈금 없음).

### panel_033
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · **펜던트 빛이 미자 왼손 등을 정면에서**
- beat: 「거기 손대지 마!」 — 쾅 (긴장 6) · E02-E · 쌀통 ② · L06◐ · **P52 회상의 원본 구도**
- size: large · height: short · gutter_after: tight
- camera: 쌀통 뚜껑 높이, **extreme-close-up** 손(약간 위에서)
- composition: 쌀통 뚜껑 윗면이 프레임 가로 띠(세로 45–70%). **미자의 왼손이 뚜껑 위를 손바닥 펴서 내리누름**(손가락 다섯 펼침, 핑크베이지 카디건 소매 끝) — **약지의 피부보다 한 톤 밝은 5mm 하얀 반지 자국이 빛 정면에 또렷**, 반지 없음. **화면 오른쪽**: 손잡이 직전에서 **움찔 물러나는 새롬의 작은 손**(연코랄 후드 소매). 뚜껑에 작은 충격 진동선 정도. 아래는 초점 밖 싱크대 하부장·장판. **상단 30%는 초점 밖 어두운 하부장 면.**
- characters: 미자(왼손) · 새롬(손)
- props: **PROP_RICE_BIN**(닫힘), **PROP_RING_MARK**
- emotion/tension: 드문 날카로움, 소리가 크게.
- motion/direction: 내리누르는 손 → 반지 자국 → 물러나는 새롬 손.
- dialogue_ref: [효과음] 쾅 / KM 효과음: ប៉ាំង! → 미자: "거기 손대지 마!" / KM: មីចា៖ "កុំប៉ះត្រង់ហ្នឹង!"
- art_space: **상단 30% 초점 밖 어두운 하부장 면** — 효과음(왼쪽 위) + 외침 말풍선(오른쪽 위, 꼬리 ↙ 손 쪽 화면 밖 미자)
- fx/note: ★ 특별 주의 — **반지 금지**, 반지 자국 또렷. 이 구도(손 위치·각도·뚜껑 가로 띠)를 052가 그대로 쓴다.
- no_text: 쌀통 무지.

### panel_034
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 펜던트 빛은 같지만 공기가 식음
- beat: 얼어붙은 식탁 (긴장 6) · L36◐ · 미자 무표정 아끼기
- size: large · height: normal · gutter_after: wide
- camera: eye-level, **미자 오른쪽 어깨 너머 리버스 wide**(레인지 벽 쪽에서 창 쪽 — §1-1 예외 축)
- composition: **전경 왼쪽(초점 밖)**: 미자의 어깨·짧은 파마 뒷머리·머스터드 앞치마 끈 — **얼굴은 보이지 않음.** 프레임 아래 가장자리에 쌀통 뚜껑 위 미자 왼손 끝. **중경**: 식탁 맞은편 하린(정면, 놀람), 화면 오른쪽 끝 머리 자리의 아버지(젓가락이 멈춤), 가까운 쪽 우진(옆얼굴, 미자 쪽으로 돌아봄). **화면 왼쪽 중경**: 쌀통 옆에 선 새롬이 **손을 가슴에 모음**, 눈이 반 박자 **미자의 왼손**으로 내려감. 뒤로 작은 반투명 창. **상단 25%는 창 위 어두운 벽.**
- characters: 하린·우진(놀람) · 인호(멈춤) · 새롬(손을 가슴에, 시선 아래) · 미자(뒷모습)
- props: 쌀통(아래 가장자리), 미자 손
- emotion/tension: 정적.
- motion/direction: 미자 어깨 → 식구들 얼굴 → 새롬 시선 → 아래 미자 손.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 미자 얼굴 노출 금지(웃음 없는 얼굴은 061에서 처음). 리버스 축이라 아버지가 화면 오른쪽.
- no_text: 글자 없음.

### panel_035
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 웃음으로 덮는 가면 (긴장 5) · R4 자가 수습 · 제목 복선
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **medium** 미자(기준 축)
- composition: 미자가 **순식간에 다시 웃으며** 오른손을 휘휘 젓는다, 몸은 화면 오른쪽(새롬) 쪽으로 돌림 — 과장된 "아이고" 얼굴(반달 눈). 화면 오른쪽 가장자리에 새롬의 어깨·옆얼굴(입 삐죽). 뒤 쌀통 닫힘. **상단 30% 선반 위 벽.**
- characters: 미자(과장된 웃음) · 새롬(삐죽)
- props: 쌀통(배경)
- emotion/tension: 가면.
- motion/direction: 미자 → 새롬.
- dialogue_ref: 미자: "…아이고, 열면 벌레 들어가! 누룽지는 찬장에 있어~" / KM: មីចា៖ "…អូយ! បើកទៅ ល្អិតចូលអស់! បាយក្តាំងនៅក្នុងទូចានទេតើ~" → 새롬: "치, 무섭게…" / KM: សែរ៉ូម៖ "ហឹម… ម៉ែគួរឲ្យខ្លាចម៉្លេះ…"
- art_space: **상단 30% 벽** — 왼쪽 위(미자, 2줄) → 오른쪽 위(새롬)
- fx/note: "웃음이 멈춘 얼굴" 쓰지 않음(당황한 웃음까지).
- no_text: 글자 없음.

### panel_036
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「아 맞다, 냄비 공장 사장님」 — 지뢰 (긴장 6) · E02-F · L09● · 미스디렉션 시작
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **medium** 미자 + 배경 인호
- composition: 자리로 돌아온 미자가 빠르게 말하며 **반찬 접시(흰 사기)를 화면 왼쪽 아버지 쪽으로 밂.** **배경 화면 왼쪽(초점 밖)**: 숟가락을 든 아버지의 손(굵은 마디)과 옆모습. **상단 30% 레인지 위 평평한 벽.**
- characters: 미자(밝은 수다, 화제 전환) · 인호(배경, 굳어 가는 손)
- props: 반찬 접시, 아버지 숟가락
- emotion/tension: 밝은 수다가 지뢰를 밟음.
- motion/direction: 미자 → 접시 → 배경 아버지 손.
- dialogue_ref: 미자: "아 맞다, 오늘 큰길에서 냄비 공장 사장님 봤어—" / KM: មីចា៖ "អេះ នឹកឃើញហើយ! ថ្ងៃនេះម៉ែឃើញថៅកែរោងចក្រឆ្នាំងនៅផ្លូវធំ—" → 미자: "그 양반 많이 늙었더라—" / KM: មីចា៖ "គាត់ចាស់ទៅច្រើនណាស់—"
- art_space: **상단 30% 벽** — 같은 화자 말풍선 2개 위→아래(첫 번째가 길다), 꼬리 ↓ 미자
- fx/note: —
- no_text: 글자 없음.

### panel_037
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 숟가락을 내려놓는다 (긴장 7) · L10◐ (★ EP01 P23 구도 반복)
- size: insert · height: short · gutter_after: wide
- camera: eye-level(식탁 면 높이), **extreme-close-up** 손 — **EP01 panel_023과 같은 프레이밍**
- composition: 아버지의 **오른손이 숟가락을 나무 식탁 위, 밥그릇 옆에 내려놓는 순간**. **엄지 옆 굳은살과 굵은 마디**, 진갈색 니트 소매 끝. 평범한 곧은 숟가락. 손과 숟가락은 프레임 중앙 가로 띠. **위쪽 1/3은 초점 밖 어두운 배경**(sfx 자리).
- characters: 인호(오른손)
- props: 숟가락(곧은 것), 밥그릇
- emotion/tension: 작은 소리가 크게.
- motion/direction: 위→아래로 내려놓는 동작.
- dialogue_ref: [효과음] 탁 / KM 효과음: ទក់!
- art_space: **상단 1/3 어두운 배경** (sfx만)
- fx/note: ★ EP01 P23과 손 각도·숟가락 위치·밥그릇 위치·카메라 높이를 맞춘다(재독 각운). 작은 충격선 정도만.
- no_text: 숟가락 각인 없음.

### panel_038
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁 · 공기가 식음(채도 살짝 낮춤)
- beat: 「…됐다.」 — 얼어붙은 식탁 (긴장 7) · L10◐ (★ EP01 P24 구도 반복)
- size: large · height: normal · gutter_after: wide
- camera: eye-level, **정면 wide — EP01 panel_024와 같은 구도**(머리 자리 정면, 아버지가 프레임 중앙 뒤쪽)
- composition: 중앙 배치·좌우 대칭. 맞은편 끝 중앙에 아버지, **밥그릇만 내려다봄**. 아버지 오른쪽 = **화면 왼쪽에 하린**(굳은 옆얼굴), 화면 오른쪽에 우진(시선 내림)과 미자(**입이 반쯤 열린 채, 웃음 흔적이 남은 얼굴** — 무표정 아님). **전경 아래 가장자리**: 새롬의 뺨·눈 일부(뒤 3/4), 눈이 아버지에게. 밥그릇 김. **상단 1/3은 아버지 뒤 어두운 벽**(펜던트는 프레임 위로 잘림).
- characters: 인호(굳은 입, 시선 아래) · 하린 · 우진 · 미자(반쯤 열린 입) · 새롬(눈만)
- props: 놓인 숟가락
- emotion/tension: 냉기.
- motion/direction: 정지, 시선은 중앙 아버지로 수렴.
- dialogue_ref: 인호: "…됐다." / KM: អ៊ីនហូ៖ "…ល្មមហើយ។"
- art_space: **상단 1/3 아버지 머리 위 어두운 벽** — 꼬리 ↓ 아버지
- fx/note: ★ EP01 P24와 같은 카메라 위치·대칭. 아버지가 카메라를 보므로 **하린이 화면 왼쪽**. 미자 얼굴은 "웃음이 멈춘 얼굴"까지 가지 않는다.
- no_text: 글자 없음.

### panel_039
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 「다음은 아빠?」 — 미스디렉션 최대 (긴장 7)
- size: medium · height: tall · gutter_after: normal
- camera: 식탁 면 높이, **새롬 쪽 끝에서 식탁 축을 따라 본 대각 구도(한 이미지 — 분할 없음)**
- composition: 식탁이 깊이로 뻗는다. **화면 오른쪽 위(가까움)**: 우진의 3/4 얼굴, 턱으로 아버지 쪽을 **아주 작게** 가리킴, 눈은 하린에게. **화면 왼쪽 아래(조금 멀리)**: 하린의 눈이 우진에서 **아버지 쪽으로** 움직임. **원경 중앙(초점 밖)**: 머리 자리의 아버지, 고개 숙임. 두 얼굴을 잇는 대각선이 화면을 가른다.
- characters: 우진·하린(눈), 인호(원경)
- props: —
- emotion/tension: 독자 예측 ② 고정.
- motion/direction: 우진 턱 → 하린 눈 → 원경 아버지.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 대본의 "대각 분할"은 **한 장의 대각선 구도**로 그린다(분할 프레임·인셋 금지, EP01 FL8).
- no_text: 글자 없음.

### panel_040
- scene_id: S3 / location: LOC_HOME_TABLE
- time/light: 같은 저녁
- beat: 다시 칠한 밝음 — 하린만 웃지 않는다 (긴장 5)
- size: large · height: tall · gutter_after: **wide (같은 저녁 50분 뒤)**
- camera: eye-level, **전경 하린 + 배경 깊이**
- composition: **전경 화면 왼쪽**: 하린의 굳은 옆얼굴(웃지 않음). **배경**: 반쯤 남은 밥그릇을 두고 말없이 **안쪽 방문 쪽으로 걸어가는 아버지의 등**, 손뼉을 치며 다시 밝아진 미자(반달 눈), 레인지 옆 **찬장 앞**에서 문을 열어 놓고 투덜대며 웃는 새롬. **상단 30% 어두운 천장·벽.**
- characters: 하린(전경) · 인호(등) · 미자(손뼉) · 새롬(찬장 앞)
- props: 아버지의 반쯤 남은 밥그릇, 찬장(안은 그림자, 누룽지 없음)
- emotion/tension: 균열 위에 다시 칠한 밝음.
- motion/direction: 하린 → 배경 웃음 → 떠나는 아버지.
- dialogue_ref: 미자: "아이고 내 정신 좀 봐. 밥부터 먹어!" / KM: មីចា៖ "អូយ មើលម៉ែនេះ ភ្លេចខ្លួនទៀតហើយ។ ញ៉ាំបាយសិនទៅ!" → 새롬: "누룽지 없잖아아~!" / KM: សែរ៉ូម៖ "គ្មានបាយក្តាំងសោះ~!"
- art_space: **상단 30% 천장·벽** — 가운데 위(미자) → 오른쪽 위(새롬)
- fx/note: 찬장 안은 어둡게(물건 식별 불가).
- no_text: 찬장 안 포장지 글자 없음.

### panel_041
- scene_id: S4 / location: LOC_HOME_TABLE (싱크대 쪽)
- time/light: 17일 ~19:30 · `L-DINNER`(같은 펜던트, 밥 김 없음)
- beat: 「…혹시 아빠까지?」 (긴장 6) · 미스디렉션 언어화
- size: medium · height: normal · gutter_after: normal
- camera: 싱크대 끝 모서리에서 **비스듬한 two-shot**(허리 위)
- composition: 스테인리스 싱크대 앞에 나란한 남매 — 화면 왼쪽 하린이 그릇을 헹굼(거품), 화면 오른쪽 우진이 행주로 닦음, **우진은 오른쪽 소매만 걷음(왼소매는 손목까지 내려옴)**. 둘의 옆얼굴. **등 뒤 흐린 배경**: 식탁의 미자와 새롬, **비어 있는 아버지 자리와 반쯤 남은 밥그릇.** **상단 25% 싱크대 위 평평한 벽.**
- characters: 하린 `HARIN_HOME` · 우진 `UJIN_HOME`(속삭임) · 미자·새롬(배경 흐림)
- props: 그릇·거품·행주, 아버지 밥그릇(배경)
- emotion/tension: 속삭임.
- motion/direction: 우진 입 → 하린 → 배경 빈 자리.
- dialogue_ref: 우진 (작게): "아빠 봤지? …혹시 아빠까지?" / KM: អ៊ូជីន៖ "បងឃើញប៉ាទេ? …ឬមួយប៉ាទៀត?"
- art_space: **상단 25% 싱크대 위 벽**(오른쪽 위) — 작은 말풍선, 꼬리 ↓ 우진
- fx/note: 팔찌 노출 금지(왼소매 내림).
- no_text: 세제 통·행주에 글자 없음.

### panel_042
- scene_id: S4 / location: LOC_HOME_TABLE (싱크대 쪽)
- time/light: 같은 저녁 · 창의 반투명 유리는 어두운 밤빛, 얼굴엔 펜던트 빛이 등 뒤에서
- beat: 「엄마만큼은 절대 몰라야 돼.」 — 회차 최대 극적 아이러니 (긴장 6)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **옆얼굴 close-up** 하린
- composition: 하린의 옆얼굴(화면 오른쪽을 향함), 눈은 앞의 작은 **반투명 유리창**(어두운 면). 프레임 아래쪽 **거품 묻은 손이 멈춤**. 등 뒤는 초점 밖 따뜻한 방(웃음소리의 공간). **상단 30% 창 위 어두운 벽.**
- characters: 하린 `HARIN_HOME` — 결심
- props: 거품, 창
- emotion/tension: 아이러니.
- motion/direction: 옆얼굴 → 창 → 멈춘 손.
- dialogue_ref: 하린: "…모르겠어." / KM: ហារីន៖ "…មិនដឹងទេ។" → 하린: "엄마는. 엄마만큼은 절대 몰라야 돼." / KM: ហារីន៖ "តែម៉ែ… ម៉ែមិនត្រូវដឹងដាច់ខាត។"
- art_space: **상단 30% 어두운 벽** — 같은 화자 2개 위→아래
- fx/note: 창 유리에 반사 인물 그리지 않음.
- no_text: 글자 없음.

### panel_043
- scene_id: S4 / location: LOC_HOME_TABLE (싱크대 쪽에서 식탁)
- time/light: 같은 저녁 · 펜던트 빛이 미자 왼손을 정면에서
- beat: 제목 그림 — 「엄마는 웃고 있었다」 (긴장 5) · L06◐ (반전 직전 마지막 노출)
- size: large · height: tall · gutter_after: **xwide (다음 날 노을로)**
- camera: eye-level, **over-the-shoulder**(싱크대 쪽 하린 어깨 너머 → 식탁)
- composition: **전경 왼쪽(초점 밖)**: 싱크대를 향한 하린의 어깨·낮은 포니테일 뒷머리 — **돌아보지 않음.** **중경**: 노란 펜던트 아래 식탁, 미자가 **새롬의 어깨를 끌어안고 반달 눈으로 크게 웃음**, 새롬도 웃음. 식탁 위에 놓인 **미자의 왼손, 약지의 흰 띠가 펜던트 빛 정면에**(아무도 보지 않음). 아버지 빈 자리. 따뜻한 빛인데 슬프게.
- characters: 하린(어깨) · 미자(활짝 웃음) · 새롬(웃음)
- props: **PROP_RING_MARK**, 빈 자리
- emotion/tension: 따뜻한데 슬프다.
- motion/direction: 하린 어깨 → 웃는 미자 → 식탁 위 왼손.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 반지 금지. 미자 웃음은 크게(061과 정반대가 되도록).
- no_text: 글자 없음.

--- SCENE BREAK --- (S4 → S5 · 18일 ~17:20 노을 계단 · 빛: 펜던트 → 노을 주황 · 의상: HOME → COMMUTE)

### panel_044
- scene_id: S5 / location: LOC_ALLEY_STAIRS
- time/light: 18일 ~17:20 · `L-SUNSET` — 노을 주황이 계단을 비스듬히 자름, 긴 그림자, 아래 골목은 이미 서늘한 그늘
- beat: 날짜 경과 밸브 (긴장 4) · L23◐
- size: large · height: tall · gutter_after: normal
- camera: eye-level, **medium-wide**
- composition: 중간 층계참. **남색 무지 천 장바구니**를 든 하린이 계단을 올라 층계참에 이름(옆모습, 시선은 발밑). 낡은 평상에 앉은 할머니가 귤을 까다 **손을 들어** 인사. 하린은 **고개만 까딱**. 주황 사선 빛과 긴 그림자, 담 위 화분. 위쪽 1/4 노을 하늘.
- characters: 하린 `HARIN_COMMUTE`(백팩 없음, 장바구니) · 할머니 `TOKEN-YAI`(귤, 무심한 얼굴)
- props: 장바구니, 귤(작은 주황 점), 평상
- emotion/tension: 정적.
- motion/direction: 할머니 손 → 하린의 작은 끄덕임 → 위쪽 계단.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: EP01 P40 노을과 같은 빛 각도. 할머니 레퍼런스 카드 없음(토큰 문장만).
- no_text: 장바구니 무지.

### panel_045
- scene_id: S5 / location: LOC_ALLEY_STAIRS
- time/light: 같은 노을 · 위쪽 계단엔 주황, 아래 골목 입구는 그늘 속 가게의 흰빛
- beat: 원경 카메오 — 냄비 공장 사장 (긴장 4) · L09●
- size: large · height: tall · gutter_after: **xwide (같은 날 밤 21:15로)**
- camera: **high-angle, extreme long shot**(계단 위에서 골목 아래로)
- composition: EP01 P41과 같은 하이앵글 문법. **전경 아래 귀퉁이(작게)**: 층계참의 하린 — 고개가 **할머니(평상) 쪽**을 향해 아래를 보지 않음. 계단이 아래로 떨어지고 **맨 아래 골목 입구 가게 모퉁이, 흰 불빛 유리문 앞에 아주 작은 구부정한 노인 한 명** — 회색 누빔 점퍼, 납작 모자, 손에 작은 보자기 꾸러미. **얼굴 없음, 프레임 높이의 1/10 이하.** 가게 간판은 빈 흰 판.
- characters: 하린(작게) · 원경 노인 = art-director **faceless distant pot-factory boss** 문장
- props: 보자기 꾸러미, 가게 흰빛
- emotion/tension: 재독자 전용.
- motion/direction: 하린 → 아래로 긴 계단 → 아주 작은 노인.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 노인은 식별 불가 크기(얼굴·이목구비 없음). 레퍼런스 카드 없음, attach 없음. 삼촌은 가게 안에도 보이지 않는다.
- no_text: **간판 빈 흰 판**, 유리 스티커·영업시간 없음.

--- SCENE BREAK --- (S5 → S6 · 18일 21:15 현관 안쪽 · 빛: 노을 → 맨 전구 + 집 안 불빛 · 하린 검은 백팩)

### panel_046
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 18일 21:15 · `L-ENTRANCE-EVENING` — 현관 위 맨 백열전구 + 복도 안쪽에서 새는 따뜻한 집 안 불빛, 닫힌 간유리 밖 남색 밤
- beat: 일상 — 웃는 엄마가 나간다 (긴장 5) · 제목 · PROP_PHONE
- size: medium · height: normal · gutter_after: normal
- camera: eye-level(앉은 높이보다 약간 위), **하린 옆 medium**
- composition: §1-1 S6 고정 — **턱 위에 옆으로 비스듬히 앉은 하린**(검은 백팩 멤), 한쪽 발을 턱 끝에 올려 **낡은 흰 운동화 끈을 맴**. **하린 뒤(화면 깊은 쪽)**: 복도에서 종종걸음으로 나온 미자가 지나가며 **회색 슬리퍼를 꿰신음** — 머스터드 앞치마 차림, **휴대폰을 화면이 가슴 쪽을 향하게 두 손으로 꼭 쥠**(화면 안 보임), 밝게 웃는 얼굴. 한쪽 가장자리에 닫힌 간유리 미닫이문. **상단 25% 전구 옆 어두운 벽·천장**(전구는 문 쪽 가장자리).
- characters: 하린 `HARIN_COMMUTE`(무심, 끈에 집중) · 미자 `MIJA_HOME`(반달 눈, 바쁜 웃음)
- props: **PROP_PHONE**(화면 가슴 쪽), 회색 슬리퍼, 운동화, 백팩
- emotion/tension: 직전 최저 박자.
- motion/direction: 미자(뒤) → 하린 → 문.
- dialogue_ref: 미자: "엄마 잠깐 바람 좀 쐬고 올게~" / KM: មីចា៖ "ម៉ែចេញទៅស្រូបខ្យល់បន្តិចណា៎~" → 하린: "…응." / KM: ហារីន៖ "…ចាស ម៉ែ។"
- art_space: **상단 25% 어두운 벽·천장** — 왼쪽 위(미자) → 오른쪽 위(하린)
- fx/note: ★ 휴대폰 화면 절대 안 보임. 미자 왼손 약지 흰 자국 — 보이면 자연스럽게, 반지 금지.
- no_text: 휴대폰 뒷면 로고 없음.

### panel_047
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤 · 간유리 밖 마당 너머 골목 가로등이 미자를 뒤에서 비춤 → 유리에 흐린 남색 실루엣 + 옅은 노란 테
- beat: 문이라는 막(幕)의 설치 — 문 너머 대사 시작 (긴장 5)
- size: large · height: tall · gutter_after: normal
- camera: eye-level(서 있는 높이보다 낮게), **하린 등 너머 간유리**(하린 왼쪽 뒤에서)
- composition: **전경 왼쪽 아래**: 다시 운동화 끈 쪽으로 몸을 숙인 하린의 등 3/4(백팩, 낮은 포니테일). **중경 오른쪽**: 방금 **밖에서 닫힌 간유리 미닫이문**(나무 틀), 유리 너머 흐린 남색 실루엣이 **두어 걸음 물러나 문을 등지고 섬** — 한 손이 귀로 올라가는 중(휴대폰은 실루엣 형태 속). 유리 안쪽 면에 전구의 노란 번짐. **상단 25%(왼쪽 중심)는 문틀 위 어두운 벽.**
- characters: 하린(등) · 미자(간유리 실루엣)
- props: 간유리 문(닫힘), PROP_PHONE(실루엣)
- emotion/tension: 막이 내려온다.
- motion/direction: 하린 등 → 문 → 실루엣의 귀로 가는 손.
- dialogue_ref: [효과음] 드르륵 / KM 효과음: គ្រូត… → 미자 (문 너머): "…네, 네. 잠깐만요." / KM: មីចា៖ "…ចាស ចាស។ ចាំមួយភ្លែត។"
- art_space: **상단 25% 문틀 위 어두운 벽**(왼쪽~가운데) — 효과음(문 가장자리 근처) + 문 너머 말풍선(꼬리 → 간유리)
- fx/note: ★ 실루엣에 얼굴·이목구비·휴대폰 화면 없음. 이 회차 첫 문 너머 대사.
- no_text: 간유리 글자·스티커 없음.

### panel_048
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤
- beat: 「…네, 석구 씨.」 — 통화 상대 (긴장 6)
- size: medium · height: tall · gutter_after: tight
- camera: **low-angle, 하린 앞쪽 medium**(신발장 쪽에서)
- composition: **전경 아래**: 운동화 끈을 매는 하린의 두 손(초점). **중경**: 하린의 숙인 얼굴·어깨. **하린의 오른쪽 어깨 뒤(초점 밖)**: 간유리에 **휴대폰을 귀에 댄 짧은 파마 실루엣**(흐린 남색, 가로등 역광). **상단 25%는 문틀 위 어두운 벽·천장.**
- characters: 하린(끈 매는 중, 아직 무심) · 미자(실루엣)
- props: 운동화 끈, 실루엣
- emotion/tension: 목소리가 낮아진다.
- motion/direction: 손 → 하린 → 어깨 뒤 실루엣.
- dialogue_ref: 미자 (문 너머): "…네, 석구 씨. 애들 아빠가 안에 있어서요." / KM: មីចា៖ "…ចាស បងសុកគូ។ ប៉ាក្មេងៗនៅក្នុងផ្ទះ។"
- art_space: **상단 25% 어두운 벽·천장**(실루엣 위쪽 피함) — 꼬리 → 간유리
- fx/note: 실루엣 초점 밖. 휴대폰은 실루엣 윤곽으로만.
- no_text: 글자 없음.

### panel_049
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤 · 전구 빛이 손가락에
- beat: 소리 없는 경보 (긴장 7) · L24
- size: insert · height: short · gutter_after: normal
- camera: **extreme-close-up** 손
- composition: 운동화 끈을 **반쯤 묶다 멈춘** 하린의 손가락(끈 고리가 공중에). 회색 후드 소매가 살짝 밀려 **오른쪽 팔뚝 안쪽 작은 분홍 화상 자국**이 소매 끝에 보임. 아래 낡은 흰 운동화 앞코. 배경 어둠.
- characters: 하린(손)
- props: 운동화 끈
- emotion/tension: 정지.
- motion/direction: 정지.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: 화상 자국 = **오른쪽** 팔뚝 안쪽.
- no_text: 운동화 로고 없음.

### panel_050
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤
- beat: 「…이번 달이 모자라다고요?」 (긴장 7) · L33◐ · D10
- size: medium · height: normal · gutter_after: wide
- camera: eye-level, **close-up 하린 + 배경 실루엣**
- composition: 하린이 **천천히 오른쪽 어깨 너머로 고개를 돌려** 간유리를 봄(3/4 옆얼굴, 눈이 커지기 직전). **배경(초점 밖)**: 간유리의 실루엣이 **고개를 숙임**. **상단 25% 문틀 위 어두운 벽.**
- characters: 하린(경계) · 미자(실루엣)
- props: —
- emotion/tension: 이번 달 = 하린이 덜 낸 달.
- motion/direction: 하린 눈 → 실루엣.
- dialogue_ref: 미자 (문 너머): "…이번 달이 모자라다고요?" / KM: មីចា៖ "…ខែនេះខ្វះមែនទេ?"
- art_space: **상단 25% 어두운 벽** — 꼬리 → 간유리
- fx/note: —
- no_text: 글자 없음.

### panel_051
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤 · 유리 안쪽 면에 노란 전구 빛 번짐, 실루엣은 가로등 역광의 흐린 남색
- beat: 「반지 판 걸로 이번 달 건 다 됐잖아요…」 — **큰 반전** (긴장 9) · E02-G ⟨반전⟩ · L06◎
- size: full-bleed · height: tall · gutter_after: **wide**
- camera: **하린 시점(POV), 간유리 정면 medium**
- composition: 프레임 대부분이 닫힌 **간유리 미닫이문 정면** — 낡은 나무 틀, 무늬 있는 간유리 판. 유리 너머 **흐린 남색 실루엣이 이마에 손을 짚음**(짧은 파마 윤곽, 다른 손은 귀에), 중앙 세로 30–80% 높이. 유리 안쪽 면에 **노란 전구 빛이 번짐**. **상단 20%는 문틀 윗막이와 어두운 벽, 하단 20%는 문틀 아랫막이와 시멘트 바닥.**
- characters: 미자(실루엣만)
- props: 간유리 문
- emotion/tension: 반전.
- motion/direction: 실루엣 얼굴 위치 → 이마의 손.
- dialogue_ref: 미자 (문 너머): "반지 판 걸로 이번 달 건 다 됐잖아요…" / KM: មីចា៖ "លុយលក់ចិញ្ចៀនហ្នឹង គ្រប់សម្រាប់ខែនេះហើយតើ…" → 미자 (문 너머): "석구 씨…" / KM: មីចា៖ "បងសុកគូ…"
- art_space: **상단 20% 문틀 윗막이·어두운 벽**(첫 말풍선, 긴 KM 2줄) + **하단 20% 문틀 아랫막이·바닥**(두 번째 짧은 말풍선 「បងសុកគូ…」, 단독 박자)
- fx/note: ★ 반전 컷 — 앞뒤 wide 여백. 실루엣에 얼굴·휴대폰 화면 없음. 반지 그리지 않음(말이 반전).
- no_text: 간유리에 글자·스티커 없음.

### panel_052
- scene_id: S6 / location: LOC_HOME_ENTRANCE → **회상 인서트**(S3 LOC_HOME_TABLE의 033 구도)
- time/light: 회상 — art-director의 **P52 desaturated flashback insert** 문장(채도를 뺀 색, 가장자리 어둡게 비네트)
- beat: 조각이 맞춰진다 (긴장 8) · L06◎ · 쌀통 ③
- size: large · height: short · gutter_after: **wide**
- camera: **extreme-close-up** — **panel_033과 같은 구도, 조금 더 가깝게**
- composition: 033의 그 손 — **쌀통 뚜껑을 손바닥으로 누른 미자의 왼손**, **약지의 하얀 반지 자국**이 중앙. 새롬 손은 없거나 가장자리에 흐리게. 색은 거의 회색조(펜던트 노랑이 바랜 베이지), 네 가장자리 어둡게.
- characters: 미자(왼손, 회상)
- props: PROP_RICE_BIN(닫힘), PROP_RING_MARK
- emotion/tension: 반지 = 팔았다, 쌀통 = 숨긴다.
- motion/direction: 반지 자국 하나로 수렴.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 033과 손 위치·각도·뚜껑 가로 띠를 맞추고 배율만 키운다. **반지 금지.** 회상 표시는 채도·비네트로만(글자 캡션 없음).
- no_text: 쌀통 무지.

### panel_053
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤 · 얼굴 앞쪽에 전구 빛, 배경 더 어둡게 눌림(감정 컷)
- beat: 「…더요?」 (긴장 9) · E02-H · D10 대가
- size: medium · height: normal · gutter_after: tight
- camera: eye-level, **정면 close-up** 하린
- composition: 하린의 **창백하게 굳은 얼굴**, 눈물 없음, 입 다묾. **등 뒤(초점 밖)**: 간유리의 흐린 실루엣. **상단 25% 어두운 벽.**
- characters: 하린 — 창백한 충격(`HARIN_expressions` "창백하게 굳은 충격")
- props: —
- emotion/tension: 충격.
- motion/direction: 정면 얼굴 → 뒤 실루엣.
- dialogue_ref: 미자 (문 너머): "…더요?" / KM: មីចា៖ "…ថែមទៀត?"
- art_space: **상단 25% 어두운 벽**(실루엣 위쪽 피함) — 꼬리 → 뒤 간유리
- fx/note: 눈물 금지.
- no_text: 글자 없음.

### panel_054
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤
- beat: 「…내가 덜 드린 만큼, 엄마가 더.」 — D10 (긴장 8)
- size: medium · height: normal · gutter_after: normal
- camera: eye-level, **손 + 입 medium close-up**(코 아래에서 잘림)
- composition: 화면 오른쪽 중앙에 하린의 **입술을 문** 아래 얼굴(세로 30–45%). 그 아래 **백팩 어깨끈을 움켜쥔 오른손, 마디가 하얘짐**(세로 50–70%). 회색 후드·네이비 조끼. **왼쪽 위 1/4은 그녀 뒤 어두운 복도 벽.**
- characters: 하린 — 죄책감
- props: 백팩 어깨끈
- emotion/tension: 작은 승리의 비용.
- motion/direction: 입술 → 움켜쥔 손.
- dialogue_ref: 하린 (생각): "…내가 덜 드린 만큼, 엄마가 더." / KM: ហារីន (គិត)៖ "…ខ្ញុំជូនតិចប៉ុណ្ណា ម៉ែត្រូវថែមប៉ុណ្ណឹង។"
- art_space: **왼쪽 위 1/4 어두운 복도 벽** — 생각 풍선(꼬리 없음)
- fx/note: —
- no_text: 백팩 로고 없음.

### panel_055
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤
- beat: 「이 년 반이에요.」 — 가장 오래 (긴장 8) · E02-M
- size: large · height: tall · gutter_after: tight
- camera: **low-angle**, 바닥 가까이에서 일어서는 하린 너머 간유리
- composition: **전경 아래**: 시멘트 바닥에 **풀린 운동화 끈 한 가닥이 끌림**. **중경**: 끈을 풀린 채로 두고 **천천히 일어서는 하린**(무릎을 펴는 중, 백팩). **배경**: 그녀 너머 간유리의 실루엣이 **고개를 듦**. 전구는 프레임 위 한쪽 가장자리. **상단 25%(전구 반대쪽)는 어두운 천장.**
- characters: 하린(일어섬) · 미자(실루엣)
- props: 풀린 끈
- emotion/tension: 계산이 시작된다.
- motion/direction: 끌리는 끈 → 일어서는 하린 → 실루엣.
- dialogue_ref: 미자 (문 너머): "이 년 반이에요, 석구 씨. 한 달도 안 빠지고." / KM: មីចា៖ "ពីរឆ្នាំកន្លះហើយ បងសុកគូ។ មិនដែលខកមួយខែណាទេ។"
- art_space: **상단 25% 어두운 천장**(전구 반대쪽) — 꼬리 → 간유리
- fx/note: 기간만(금액·숫자 그림 없음).
- no_text: 글자 없음.

### panel_056
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤 · 눈동자에 전구 빛 한 점, 배경 거의 검게
- beat: 「…나보다 먼저.」 — 반전 확정 (긴장 9)
- size: large · height: normal · gutter_after: **wide**
- camera: **close-up**(극단 클로즈업 직전 — 눈·코·입)
- composition: 하린의 **눈이 흔들림**(동공이 옆으로), 눈동자에 **전구 빛 한 점**. 이마 옆 잔머리. 주변은 따뜻한 어둠. **상단 25% 평평한 어둠.**
- characters: 하린 — 계산이 끝나는 얼굴(눈물 없음)
- props: —
- emotion/tension: 가장 오래 낸 사람 = 엄마.
- motion/direction: 정지.
- dialogue_ref: 하린 (생각): "…나보다 먼저." / KM: ហារីន (គិត)៖ "…មុនខ្ញុំទៅទៀត។"
- art_space: **상단 25% 어둠** — 생각 풍선
- fx/note: EP01 P60 눈 컷과 같은 얼굴 문법(홑꺼풀, 다크서클).
- no_text: 글자 없음.

### panel_057
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤 · 하린 얼굴 옆면에 전구 빛, 유리 너머 실루엣은 역광 남색
- beat: 유리 한 장 — 가장 가까운데 가장 멀다 (긴장 8) · E02-I ⟨이중의미⟩ · L08● · L07◐
- size: large · height: tall · gutter_after: normal
- camera: eye-level, **문 면에 45°로 본 two-shot**(집 안쪽에서)
- composition: **화면 왼쪽**: 간유리 앞까지 다가선 하린(3/4 옆모습, 백팩), **오른손이 문틀 손잡이 높이로 올라가 있지만 밀지 않음.** **화면 오른쪽 절반**: 간유리 판, 그 너머 **문을 등지고 한 뼘 거리에 선 미자의 흐린 실루엣**(같은 높이, 휴대폰은 귀). 두 사람 사이 = 유리 한 장. **상단 25%는 문틀 윗막이 위 어두운 벽.**
- characters: 하린(손이 멈춤) · 미자(실루엣)
- props: 간유리 문, 문틀 손잡이 홈
- emotion/tension: 묻지 않는다(결함).
- motion/direction: 하린 → 멈춘 손 → 유리 → 실루엣.
- dialogue_ref: 미자 (문 너머): "그동안 집에 전화 한 통 안 오게 해 주신 거…" / KM: មីចា៖ "ប៉ុន្មានឆ្នាំនេះ បងធ្វើឲ្យគ្មាននរណាតេមកផ្ទះមួយដងសោះ…" → 미자 (문 너머): "알아요. 알아요…" / KM: មីចា៖ "ខ្ញុំដឹង។ ដឹងហើយ…"
- art_space: **상단 25% 어두운 벽** — 같은 화자 2개 위→아래(첫 번째 KM이 회차에서 가장 길다, 2줄), 꼬리 → 간유리
- fx/note: 실루엣과 하린이 같은 눈높이로 겹치듯 마주 서게(서로를 보지는 않음 — 미자는 등).
- no_text: 글자 없음.

### panel_058
- scene_id: S6 / location: LOC_HOME_ENTRANCE (안쪽)
- time/light: 같은 밤
- beat: 「애들은 몰라요. 몰라야 돼요.」 — 문 너머 마지막 대사 (긴장 9) · E02-J · L11◐
- size: medium · height: normal · gutter_after: **xwide (마당으로 — 카메라가 처음 바깥으로)**
- camera: eye-level, **close-up** 손
- composition: 낡은 **나무 문틀 위에 펴서 얹은 하린의 오른손바닥**(밀지 않음, 손가락 다섯, 짧은 손톱) — 프레임 중앙. 손 너머 간유리에 **흐린 엄마의 뒷모습**(어깨·짧은 파마 윤곽). **상단 25%는 문틀 윗부분 위 어두운 벽.**
- characters: 하린(손) · 미자(실루엣)
- props: 문틀
- emotion/tension: 회차가 끊기는 말. 하린의 맹세(042)와 거울.
- motion/direction: 손바닥 → 유리 너머 등.
- dialogue_ref: 미자 (문 너머): "애들은 몰라요. 몰라야 돼요." / KM: មីចា៖ "ក្មេងៗមិនដឹងទេ។ មិនត្រូវឲ្យដឹង។"
- art_space: **상단 25% 어두운 벽** — 꼬리 → 간유리
- fx/note: 이 손바닥 그림자가 060에서 바깥에서 보인다(위치 맞춤).
- no_text: 글자 없음.

--- SCENE BREAK --- (S6 → S7 · 같은 밤 21:20 무렵 마당 · 신규 LOC_HOME_YARD · `L-YARD-NIGHT` · 대사 없음)

### panel_059
- scene_id: S7 / location: LOC_HOME_YARD
- time/light: 18일 ~21:20 · `L-YARD-NIGHT` — 낮은 철제 대문 너머 골목 가로등(노랑) + 간유리 현관문 안쪽에서 새는 노란빛, 입김
- beat: 통화가 끝난 고요 (긴장 8)
- size: large · height: tall · gutter_after: normal
- camera: eye-level, **측면 wide**(처음으로 마당 쪽 카메라)
- composition: 좁은 시멘트 마당 — 위쪽에 가로지른 **빨랫줄**(빈 집게 몇 개), 담 밑 금 간 화분, **낮은 철제 대문** 너머 골목의 노란 가로등. 마당 가운데 미자: **휴대폰을 내려 화면이 몸 쪽으로 가게 가슴에 꼭 누르고** 길게 숨을 내쉼 — 입김 한 줄. **얼굴은 대문 쪽, 옆얼굴 반만**(표정 읽히지 않게, 가로등 역광으로 얼굴은 그림자). **프레임 한쪽 가장자리**: 노랗게 빛나는 간유리 현관문(바깥면, 나무 틀).
- characters: 미자 `MIJA_HOME`(앞치마, 회색 슬리퍼) — 표정 읽히지 않음
- props: **PROP_PHONE**(화면 몸 쪽), 빨랫줄, 화분, 대문
- emotion/tension: 고요.
- motion/direction: 가장자리 빛나는 문 → 미자 → 대문 가로등.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: LOC_HOME_YARD 설정 컷 — art-director 토큰 문장 그대로. 현관 간유리·나무 틀은 S6과 같은 문(바깥면).
- no_text: 대문·담에 번지·문패·전단 없음. 휴대폰 화면 안 보임.

### panel_060
- scene_id: S7 / location: LOC_HOME_YARD
- time/light: 같은 밤 · 간유리가 집 안 전구 빛으로 노랗게 빛남, 하린은 그 빛을 등진 짙은 실루엣
- beat: 원인 컷 — 간유리의 실루엣 (긴장 9)
- size: large · height: tall · gutter_after: wide
- camera: eye-level, **over-the-shoulder**(돌아서는 미자 어깨 너머)
- composition: **전경 왼쪽(초점 밖)**: 막 돌아선 미자의 어깨와 짧은 파마 뒷머리(얼굴 안 보임). **중경**: 노랗게 빛나는 **간유리 미닫이문**(나무 틀, 위에 맨 전구 빛이 유리 안쪽에서 번짐), 그 **바로 뒤에 선 하린의 짙은 실루엣** — 낮은 포니테일, 백팩 어깨끈 윤곽, 문틀 높이에 **펴서 얹은 손바닥 그림자**(058과 같은 위치). 아래 시멘트 바닥에 문빛.
- characters: 미자(어깨) · 하린(실루엣)
- props: 간유리 문
- emotion/tension: "엄마는 하린이 들은 걸 안다" — 직전.
- motion/direction: 미자 어깨 → 빛나는 문 → 실루엣 → 손바닥 그림자.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 하린 실루엣은 **집 안 전구가 그녀 뒤에서** 비춘 그림자(S6과 반대 방향 빛). 얼굴 없음.
- no_text: 간유리 글자 없음.

### panel_061
- scene_id: S7 / location: LOC_HOME_YARD
- time/light: 같은 밤 · **간유리의 노란빛이 정면에서** 얼굴을 비춤, 뒤에서 골목 가로등의 아주 약한 테
- beat: 웃지 않는 엄마 — 시리즈 처음 (긴장 9) · 제목 반전
- size: full-bleed · height: normal · gutter_after: wide
- camera: eye-level, **정면 close-up**
- composition: 미자의 얼굴이 프레임 중앙. **반달 눈이 없다** — 눈을 뜬 채 정지, 미소가 완전히 사라진 평평한 얼굴, 입은 다묾. 볼의 홍조는 그대로(같은 사람). 눈물 없음. 배경은 남색 밤의 어둠.
- characters: 미자 — `MIJA_expressions` "웃음이 멈춘 얼굴"(**이 회차·시리즈 첫 사용**)
- props: —
- emotion/tension: 제목(ម៉ែនៅតែញញឹម)과 맞선다.
- motion/direction: 정지.
- dialogue_ref: 무대사
- art_space: 없음(silent)
- fx/note: ★ 특별 주의 — 웃음 흔적·눈가 주름 접힘 없이 평평하게, 그러나 **악의·분노로 읽히면 재그림**(놀람·두려움도 과장 금지 — 조용한 정지).
- no_text: 글자 없음.

### panel_062
- scene_id: S7 / location: LOC_HOME_YARD
- time/light: 같은 밤 · 간유리 안쪽 전구가 하린 머리 뒤에서 노란 후광
- beat: 클리프행어 `B` — 아무도 문을 열지 않는다 (긴장 9)
- size: full-bleed · height: tall · gutter_after: — (회차 끝)
- camera: eye-level, **정면 정지 컷**(마당에서 간유리 미닫이문을 정면으로)
- composition: 프레임 중앙에 닫힌 **간유리 미닫이문**(나무 틀) 정면. 유리 뒤 **움직이지 않는 하린의 실루엣**(서 있음, 낮은 포니테일·백팩 끈 윤곽), **머리 뒤로 맨 전구의 노란 후광이 번짐.** 문 앞 **시멘트 바닥 아래 가장자리에 엄마의 슬리퍼 그림자 끝만**(엄마 몸은 프레임 밖, 카메라 쪽). 문 양옆은 어두운 벽.
- characters: 하린(실루엣) · 미자(슬리퍼 그림자 끝만)
- props: 간유리 문, 그림자
- emotion/tension: 질문을 연 채 끝("엄마는 어떻게 나올까? 하린은 말할까?").
- motion/direction: 정지 — 회차 끝.
- dialogue_ref: 무대사 (엔딩 카드 없음, 판정 AB-Q5와 같음)
- art_space: 없음(silent)
- fx/note: 060과 같은 문·같은 실루엣 위치(정면으로). 손잡이·문은 닫혀 있다.
- no_text: 글자·캡션 없음.

---

## 5. 점검 · 플래그

### 5-1. 품질 체크
- [x] 패널 62, panel_001–062 연속, 대본 P01–P62와 1:1(번호 그대로, 선택 P23 = panel_023 유지).
- [x] 모든 패널에 scene_id / location(LOC_*) / time·light(빛 코드) / size / height / gutter / camera / composition / characters / props / emotion / motion / dialogue_ref / art_space / fx / no_text.
- [x] 같은 scene_id = 같은 LOC·같은 빛. SCENE BREAK 5곳(006↓·026↓·043↓·045↓·058↓, S3→S4는 같은 LOC·같은 빛 연속이라 표시 없이 scene_id만 변경).
- [x] 대사 패널 47개 전부 `dialogue_ref`(KO + KM, 대본 그대로) + `art_space`. 무대사 15개는 `art_space: 없음(silent)`.
- [x] 효과음 4개(005·033·037·047) 자리 지정. `env` 0.
- [x] 말풍선 3개 패널(022·024) art_space 35%로 넓힘. 같은 화자 2개(027·036·042·051·057) 위→아래.
- [x] 반전 구간: 046–058 = 13패널, 반전 트리거 051 full-bleed + 앞뒤 wide, 052 회상 wide, 053–056 하린 리액션과 문 너머 대사 교대. 클리프행어 059–062 무대사 4컷.
- [x] 글자 금지: 모든 패널 `no_text` 줄.

### 5-2. 특별 주의 패널 (렌더·검증에서 재그림 사유)
| 패널 | 주의 |
|---|---|
| 001–016 · 018 · 020–043 | 우진 **왼손목 소매 안**(팔찌 안 보임). 001–002 봉투는 **오른손** |
| 001 | EP01 P59 축 그대로(하린 왼쪽 턱 / 우진 오른쪽 바닥), 문 열림 |
| 006 · 009 | 봉투 FLAT, EP01 P50·P58과 같은 접힘·고무줄 위치. 009 두 봉투 완전 동일 |
| **017** | **EP01 P19·P48과 같은 앵글(약간 위 3/4)·같은 크기(폭 40%)·같은 위치(중앙, 금 자리 링 오른쪽 위)**. 납작한 금색 칠 선, **흰 구름 무늬·도드라진 테·흰 반짝임 줄 = 재그림** |
| 019 | 팔찌는 소매 끝으로 사라지는 작은 초록 한 점까지만 |
| 027 · 033 · 043 · 052 | 미자 약지 **흰 자국만, 반지 금지**. 033·043·052는 빛 정면에 또렷 |
| **033 ↔ 052** | 같은 구도(뚜껑 가로 띠, 손바닥 펴서 누름, 반지 자국 중앙). 052는 조금 더 가깝게 + 채도 뺌 + 비네트 |
| 032–035 · 052 | 쌀통 뚜껑 **열림 금지**, 무지 |
| **037 ↔ EP01 023** · **038 ↔ EP01 024** | 같은 프레이밍(손 인서트 / 머리 자리 정면 대칭, 하린 화면 왼쪽) |
| 034 · 035 · 038 | 미자 "웃음이 멈춘 얼굴" 쓰지 않음(뒷모습 / 당황한 웃음 / 반쯤 열린 입) |
| **045** | 원경 노인 **얼굴 없음, 프레임 높이 1/10 이하**, attach 없음 |
| 046 · 059–060 | 휴대폰 **화면 안 보임** |
| **047–058** | 미자 = 간유리 너머 **흐린 남색 실루엣**(골목 가로등 역광), 얼굴·이목구비·휴대폰 화면 없음. art_space가 실루엣을 덮지 않게 |
| 051 | 반전 컷 full-bleed, 상하 20% 문틀 면 비움 |
| **061** | 시리즈 첫 웃지 않는 엄마 — 평평한 정지, 악의·분노 인상 금지, 눈물 없음 |
| **060 · 062** | 하린 실루엣은 **집 안 전구가 뒤에서** 비춘 그림자(S6과 빛 방향 반대), 손바닥 그림자 위치 = 058 |

### 5-3. 플래그 (리더·하류)
- **FL1 (art-director / prompt-smith — 신규 토큰 이름):** 아래 이름을 그대로 썼다. art-director가 병행 작성 중인 style-bible/character-sheets EP02 추가분과 이름이 다르면 알려 주면 맞춘다:
  `LOC_HOME_YARD`, `L-ENTRANCE-EVENING`(S6), `L-YARD-NIGHT`(S7), `PROP_RICE_BIN`, `PROP_PHONE`, "faceless distant pot-factory boss"(045), "P52 desaturated flashback insert"(052).
  쌀통의 모양·색·크기는 PROP_RICE_BIN 문장을 따른다(샷리스트는 "무지, 뚜껑 + 뚜껑 손잡이, 싱크대 옆 바닥"만 고정). S2 빛은 `L-DAWN-OUT`에서 **공장 나트륨 등 문장을 뺀다**.
- **FL2 (prompt-smith / art-director — S6 하린 자세):** 대본 048·050·053("등 뒤 간유리", "고개를 돌려 간유리를 본다")을 성립시키려고 S6의 하린은 턱 위에 **옆으로 비스듬히** 앉는다(간유리 문 = 오른쪽 어깨 뒤). EP01 S10·EP02 S1(문을 정면으로 향함)과 다르다 — 의도된 차이.
- **FL3 (prompt-smith / letterer — S1 문 상태):** beatsheet S1 메모는 "현관문 닫힘"이지만, EP01 P57–60(문 열림)과의 연속을 위해 **S1 내내 문 열림**으로 그렸다(001–003만 문이 보임). 문은 S6 047에서 닫힌다. 리더가 닫힌 문을 원하면 001–003 배경 문장만 바꾸면 된다.
- **FL4 (prompt-smith — 분할 금지):** 대본의 "숏-리버스숏(016)", "투샷 → 손 인서트(022)", "손 인서트 + 눈(028)", "대각 분할(039)"은 모두 **한 장의 깊이/대각 구도**로 썼다(분할 프레임·인셋 금지, EP01 FL8). 030의 beatsheet "속도선"은 style-bible §1 금지라 몸짓·의자 기울기로 대체.
- **FL5 (prompt-smith — 180° 축):** S2 = 우진이 하린 오른쪽 한 칸 위(아래에서 본 컷: 우진 화면 왼쪽). 뒤/위에서 본 019·026은 좌우가 뒤집혀 보이는 게 맞다. S3 예외 축 = 034(리버스), 038·039(머리 자리 정면, 하린 화면 왼쪽).
- **FL6 (letterer — 문 너머 말풍선):** 문 너머 8패널(047·048·050·051·053·055·057·058)의 art_space는 모두 간유리 **바깥 면(문틀 위 벽 / 문틀 아랫막이)**에 잡았다. 꼬리는 간유리 쪽. 말풍선 스타일은 판정 EB-Q5대로 letterer 소관(km_tool이 지원하는 범위). 051은 두 번째 말풍선 「បងសុកគូ…」를 하단 20%에 단독 박자로.
- **FL7 (letterer — gutter):** xwide = 006(→16일 새벽)·026(→17일 저녁)·043(→18일 노을)·045(→18일 밤)·058(→마당). 반전 정지 wide = 014·018·034·037·038·040·050·051·052·056·060·061.
- **FL8 (ref-sheet / prompt-smith):** 새 레퍼런스 카드 없음(얼굴을 보이는 신규 인물 없음). 017·033·052에 `PROPS_keyprops` attach 권장(팔찌 복제품 / 반지 자국 손은 `MIJA_turnaround`). 045 원경 노인·044 할머니는 attach 없음. 061은 `MIJA_expressions`(웃음이 멈춘 얼굴) attach.
- **FL9 (art-director — EP01 style-bible 문구):** style-bible §6-B PROP_BRACELET 줄은 "우진 손목에서 보이는 곳 P19–21"(EP01 기준)이다. EP02는 **017(+019 끌어내림)**만 보인다 — EP02 추가분에 한 줄 넣어 주면 validator가 헷갈리지 않는다.
