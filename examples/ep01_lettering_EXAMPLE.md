> **EXAMPLE ONLY (excerpt).** Shows what `_workspace/04_visual/ep01_lettering.md` looks like for the
> Cambodian-reader edition, for panels 1–5 and 44–56 (the real file covers all 56).
> **The Flow images contain no text at all.** The episode viewer draws every speech bubble and types the
> Khmer inside it, at the position given here, so the Khmer is always spelled right.
> Lines starting with `EN:` are English glosses added for you. The Khmer is a draft translation: please
> have a native speaker check it. Not used by the harness; safe to delete.

# EP01 레터링 명세 — letterer (크메르어 말풍선, 뷰어가 그림)

## 원칙

1. **이미지에는 글자를 그리지 않는다.** 말풍선·대사·간판·메모 글씨 모두 없음. 대신 말풍선 자리를 비워 두도록
   `art_space`를 지정한다 → prompt-smith가 프롬프트에 그대로 넣음.
2. **뷰어가 말풍선을 그린다.** 위치는 패널 크기 대비 % (`x`/`y` = 말풍선 중심, `w` = 최대 폭). 글자 크기는 패널
   폭에 맞춰 자동 조절.
3. **배치 확인 단계:** Flow 이미지가 들어온 뒤, 조립 담당이 각 패널을 보고 말풍선이 얼굴·핵심 작화를 가리지
   않도록 `x`/`y`만 미세 조정한다. 문구는 바꾸지 않는다.
4. 크메르어는 한국어보다 길다 → 한 말풍선에 2줄이 넘으면 말풍선을 나눈다.

## 말풍선 스타일 (뷰어 CSS)

| type | 모양 | 글꼴 |
|---|---|---|
| dialogue | 흰 둥근 풍선 + 검은 테두리 + 꼬리(화자 쪽) | Battambang → Khmer UI |
| thought | 점선 테두리, 둥글게, 꼬리 없음 | Battambang (회색 글자) |
| shout | 굵은 테두리, 약간 기울임 | Koulen → Khmer UI Bold |
| narration | 어두운 사각 캡션 박스 | Battambang |
| memory | dialogue와 같은 모양, 푸른 번짐 테두리 (S3 기억 장면만) | Battambang |
| env | 말풍선 없이 소품 위에 글씨 (간판·영수증·메모·휴대폰) | 손글씨: Fasthand / 간판: Koulen |
| sfx | 굵은 효과음 글자 (충격·코믹 컷만) | Koulen |

EN: Rules. The Flow images have no letters at all; each panel says which area to keep empty for a
bubble. The viewer draws the bubbles at the % positions given here, and the text scales with the panel.
After your images arrive, the assembly step nudges positions so no bubble covers a face; the words never
change. Long Khmer lines are split into two bubbles. The table lists each bubble type's look and font.

---

### panel_001
- art_space: 골목 끝 간판은 **글자 없는 빈 네온 간판**으로
- env_1:
  - text_km: "ហាងបញ្ចាំការចងចាំ"
  - on: 네온 간판
  - style: sign
  - place: x 50% · y 13% · size 7%
- sfx: 빗소리 — 그림으로만 (글자 없음)

EN: The sign is drawn blank; the viewer writes "ហាងបញ្ចាំការចងចាំ" (Memory Pawnshop) on it in a neon style.

### panel_002
- art_space: 상단 좌측 1/3 비움
- bubble_1:
  - speaker: 남자 · type: dialogue
  - text_km: "ថ្ងៃរៀបការរបស់ខ្ញុំ។"
  - text_ko: "결혼식 날이요." (참고용 — 이미지에 그리지 않음)
  - place: x 28% · y 11% · w 42% · tail ↓ (남자)
  - read_order: 1
- bubble_2:
  - speaker: 남자 · type: dialogue
  - text_km: "ឲ្យតម្លៃប៉ុន្មាន?"
  - text_ko: "얼마 쳐줍니까?"
  - place: x 34% · y 23% · w 40% · tail ↓ (남자)
  - read_order: 2

EN: Two linked bubbles: "My wedding day." / "How much will you give?" The Korean is kept only for reference.

### panel_003
- art_space: 상단 우측 1/3 비움
- bubble_1:
  - speaker: 도진 · type: dialogue
  - text_km: "ការចងចាំកាន់តែសប្បាយ តម្លៃកាន់តែថ្លៃ។"
  - text_ko: "행복한 기억일수록 비쌉니다."
  - place: x 70% · y 14% · w 52% · tail ↙ (도진 입)
  - read_order: 1

EN: Dojin: "The happier the memory, the higher the price."

### panel_004
- art_space: 상단 중앙 비움
- bubble_1:
  - speaker: 남자 (화면 밖) · type: dialogue
  - text_km: "ឥឡូវ… ខ្ញុំលែងត្រូវការវាហើយ។"
  - text_ko: "이제… 필요 없어서요."
  - place: x 50% · y 12% · w 64% · tail ↑ (패널 밖 화자)
  - read_order: 1

EN: The man speaks from off-panel, so the tail points up out of the panel: "Now… I don't need it anymore."

### panel_005
- art_space: 상단 우측 비움 (빛줄기는 좌측으로)
- bubble_1:
  - speaker: 서윤 · type: dialogue
  - text_km: "សូមបិទភ្នែក។ មួយភ្លែតប៉ុណ្ណោះ។"
  - text_ko: "눈 감으세요. 금방 끝나요."
  - place: x 72% · y 12% · w 50% · tail ↙ (서윤)
  - read_order: 1
- sfx: 빛 흐르는 소리 — 그림으로만

EN: Seoyun: "Please close your eyes. Just a moment."

*(panel_006 – panel_043: same format, omitted in this example)*

### panel_044
- art_space: 상단 우측 1/3을 단순한 어두운 배경으로 비움
- bubble_1:
  - speaker: 서윤 · type: dialogue
  - text_km: "អ្នកលក់… ហាន សឺយូន?"
  - text_ko: "판매자… 한서윤?"
  - place: x 70% · y 13% · w 50% · tail ↙ (서윤 입)
  - read_order: 1

EN: "Seller… Han Seoyun?" in the empty top-right area.

### panel_045
- art_space: 서명란은 **빈 줄**로 (글씨 없음)
- env_1:
  - text_km: "ហាន សឺយូន"
  - on: 영수증 서명란
  - style: hand
  - place: x 50% · y 56% · size 10% · rot -6

EN: The signature line is drawn empty; the viewer writes "ហាន សឺយូន" on it in a blue handwriting style.

### panel_046
- art_space: 머리 위 좌측 비움
- bubble_1:
  - speaker: 서윤 · type: thought
  - text_km: "ខ្ញុំ… បានលក់វា?"
  - text_ko: "내가… 팔았다고?"
  - place: x 38% · y 15% · w 56%
  - read_order: 1

EN: Thought bubble: "I… sold it?"

### panel_047
- art_space: 영수증 뒷면은 **빈 종이**로, 화면 중앙에 평평하게
- env_1:
  - text_km: "កុំស្វែងរកមនុស្សនោះ។"
  - on: 영수증 뒷면
  - style: hand
  - place: x 50% · y 49% · size 6.6% · rot -3

EN: The twist note "Don't look for that person." is typed by the viewer onto the blank paper in handwriting style.

### panel_048
- silent: true

EN: Silent panel. Nothing written.

### panel_049
- art_space: 상단 좌측 비움
- bubble_1:
  - speaker: 서윤 · type: dialogue
  - text_km: "កុំឲ្យរក?"
  - text_ko: "찾지 말라고?"
  - place: x 26% · y 11% · w 36% · tail ↓ (서윤)
  - read_order: 1
- bubble_2:
  - speaker: 서윤 · type: dialogue
  - text_km: "ខ្ញុំ… ប្រាប់ខ្លួនឯង?"
  - text_ko: "내가, 나한테?"
  - place: x 36% · y 23% · w 44% · tail ↓ (서윤)
  - read_order: 2

EN: "Don't look?" / "Me… telling myself?"

### panel_050
- art_space: 상단과 하단 우측 비움
- bubble_1:
  - speaker: 서윤 · type: dialogue
  - text_km: "ខ្ញុំមិនមែនទិញវាវិញទេ។"
  - text_ko: "되사는 게 아니야."
  - place: x 50% · y 11% · w 62% · tail ↓
  - read_order: 1
- bubble_2:
  - speaker: 서윤 · type: dialogue
  - text_km: "គ្រាន់តែមើលប៉ុណ្ណោះ។"
  - text_ko: "보기만 할 거야."
  - place: x 70% · y 87% · w 52% · tail ↑
  - read_order: 2

EN: "I'm not buying it back." / "I'm only looking."

### panel_051
- sfx: 빗소리 — 그림으로만

### panel_052
- silent: true

### panel_053
- silent: true

EN (051–053): No text. The rain is shown in the drawing.

### panel_054
- art_space: 상단 우측 비움
- bubble_1:
  - speaker: 도진 · type: memory
  - text_km: "កញ្ញា សឺយូន សូមភ្លេចរឿងនេះចោលទៅ។"
  - text_ko: "서윤 씨, 이건 잊어요."
  - place: x 70% · y 14% · w 54% · tail ↙ (도진)
  - read_order: 1

EN: Memory-style bubble (blue blurred edge): "Miss Seoyun, please forget this."

### panel_055
- art_space: 문간 오른쪽 위 여백 비움 (두 사람 얼굴 피해서)
- bubble_1:
  - speaker: 도진 · type: dialogue
  - text_km: "កញ្ញា សឺយូន។ កំពុងមើលអ្វី?"
  - text_ko: "서윤 씨. 뭘 보고 있어요?"
  - place: x 76% · y 9% · w 44% · tail ↙ (도진)
  - read_order: 1

EN: A normal sharp bubble again, back in the present: "Miss Seoyun. What are you looking at?"

### panel_056
- art_space: 하단 띠 비움
- bubble_1:
  - speaker: (캡션) · type: narration
  - text_km: "— នៅមានតក្នុងភាគទី ២ —"
  - text_ko: "— 2화에 계속 —"
  - place: x 50% · y 90% · w 70%
  - read_order: 1

EN: End caption: "To be continued in Episode 2."

---

## 레터러 노트 (회차 전체)

- 크메르어 말풍선 45개 (한국어판 41개 → 길이 때문에 P07·P13·P32·P35를 2개로 나눔) / 패널당 최대 2개.
- 뷰어가 넣는 소품 글씨 6곳: P01 간판 · P10 휴대폰 · P31 메모지 · P41 영수증 · P45 서명 · P47 메모.
- 크메르어 효과음 2곳: P21 «ក្រាំង!» · P26 «មៀវ~». 나머지 효과음은 그림으로만.
- 이미지 검사 기준이 바뀜: "한글 철자 정확" 대신 **"이미지에 글자가 없고, art_space가 비어 있는가"**.
- 글자가 이미지 밖에 있어서, 글자 때문에 다시 그릴 일은 없음. 번역 수정도 이미지 재생성 없이 문구만 바꾸면 됨.
- 크메르어는 번역 초안 — 원어민 검수 후 확정.

EN (notes): 45 Khmer bubbles (four long lines split in two); six places where the viewer writes on
objects; two Khmer sound effects; images are now checked for "no letters, and the bubble area is empty"
instead of Korean spelling; text never forces a redraw, and fixing a translation only means editing words.
