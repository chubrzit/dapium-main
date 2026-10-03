# DAPiUM Main

AI와 기술로 작은 아이디어를 실제 서비스로 만들고 직접 운영하는 DAPiUM의 메인 랜딩 페이지 목업입니다.

현재는 별도의 빌드 도구나 프레임워크 없이 HTML, CSS, JavaScript로 구성된 정적 목업입니다. GitHub에 올릴 수 있는 가벼운 시작점으로 만들었으며, 실제 서비스 허브로 확장할 수 있도록 정보 구조와 시각적 우선순위를 먼저 정리했습니다.

## 핵심 메시지

> AI로 작게 시작해, 아이디어를 실제 서비스로 만들고 꾸준히 키웁니다.

방문자가 DAPiUM을 이해하고, 운영 중인 서비스를 발견하고, 제작 과정과 콘텐츠를 탐색하는 흐름을 목표로 합니다.

## 현재 페이지 구조

```text
Header
  ↓
Hero
  ↓
Featured Services
  ↓
How We Build
  ↓
Contents
  ↓
About DAPiUM
  ↓
Newsletter
  ↓
Footer
```

### Header

- DAPiUM 로고와 브랜드 마크
- Services, Contents, About, Contact
- Light / Dark 테마 토글
- 모바일 메뉴

### Hero

- DAPiUM의 핵심 메시지
- 서비스 둘러보기 CTA
- DAPiUM 알아보기 CTA
- Idea, Build, Grow를 표현한 타이포그래피 중심의 시각 요소

### Services

현재 서비스 카드는 데스크톱에서 4열 컴팩트 레이아웃으로 표시하며, 모바일에서는 1열로 표시합니다.

| 서비스 | 상태 | 현재 연결 |
| --- | --- | --- |
| 이자정원 | 운영 중 | `https://calc.dapium.com` |
| 사주정원 | 운영 중 | `https://saju.dapium.com` |
| DAPiUM Audit | 개발 중 | 소개용 목업 링크 |
| 문제은행 | 준비 중 | 소개용 목업 링크 |

이자정원과 사주정원은 기존 서비스에서 만든 아이콘을 사용합니다.

### How We Build

```text
Idea → Build → Launch → Grow
```

완벽하게 준비한 뒤 시작하기보다, 작게 만들고 실제로 운영하면서 개선한다는 제작 방식을 설명합니다.

### Contents

현재는 대표 콘텐츠 3개를 목업으로 표시합니다.

- AI를 실제 업무에 적용하면서 배운 것
- 작은 서비스는 어떻게 시작할까
- 직접 운영하며 배우는 프로젝트 관리

각 카드에는 내용을 직관적으로 전달하기 위한 UI 일러스트가 들어 있습니다.

### About

메인에서는 DAPiUM을 작은 스튜디오로 소개합니다. 개인 경력과 상세 프로필은 향후 About 페이지로 분리할 계획입니다.

### Newsletter

Newsletter 영역은 현재 UI 목업입니다. 이메일 입력 후 상태 피드백은 표시하지만, 실제 이메일 수집 서비스와 연결되어 있지 않습니다.

## 파일 구조

```text
dapium_main/
├── index.html
├── styles.css
├── script.js
├── GOAL_PROMPT.md
├── AGENTS.md
├── README.md
└── assets/
    ├── favicon.svg
    ├── interest-garden-icon.svg
    └── saju-garden-icon.png
```

## 실행 방법

별도 설치 없이 정적 서버로 실행할 수 있습니다.

```bash
cd /Users/jinhwan.cha/Documents/ai-workspace/dapium_main
python3 -m http.server 4173
```

브라우저에서 다음 주소를 엽니다.

`http://127.0.0.1:4173/`

JavaScript 문법 검사는 다음과 같이 실행합니다.

```bash
node --check script.js
```

## 배포 상태

Cloudflare Pages 프로젝트 `dapium-main`에 정적 파일을 직접 배포하고 있습니다.

- 운영 도메인: `https://main.dapium.com`
- Pages 주소: `https://dapium-main.pages.dev`
- 최근 배포 확인: 사주정원 카드의 `운영 중` 상태와 `https://saju.dapium.com/` 링크가 실제 운영 화면에 반영됨

## 디자인 결정

### 상위 브랜드 중심

DAPiUM은 개별 서비스 하나의 소개 페이지가 아니라 여러 서비스를 연결하는 상위 브랜드로 설계했습니다. 개인 브랜드는 About에서만 점진적으로 드러내고, 메인에서는 서비스 발견을 우선합니다.

### 타이포그래피 중심

Hero와 섹션 제목은 큰 타이포그래피와 충분한 여백을 사용합니다. 복잡한 3D, 자동 재생 영상, 과도한 패럴랙스는 사용하지 않습니다.

### 컴팩트한 서비스 카드

초기 2×2 카드가 화면을 많이 차지한다는 피드백을 반영해 데스크톱 4열 카드로 변경했습니다. 서비스명, 설명, 상태, 기존 아이콘을 한 화면에서 비교하는 것이 목적입니다.

### 기존 아이콘 재사용

이자정원에는 기존 `interest-garden-icon.svg`, 사주정원에는 기존 `saju-garden-icon.png`를 사용합니다. DAPiUM 메인에는 헤더 로고와 일치하는 `assets/favicon.svg`를 사용합니다. 브랜드 자산이 확정되면 파일 이름과 경로를 공식 디자인 시스템 기준으로 정리할 수 있습니다.

### 테마

테마는 Light와 Dark만 제공합니다. 기본값은 Light이며 선택값은 `localStorage`에 저장합니다. Dark 모드에서는 About과 Footer도 충분한 대비를 유지하도록 별도 배경값을 사용합니다.

## 현재 제한 사항

- Newsletter는 실제 이메일 수집과 연결되지 않았습니다.
- Contents 카드와 일부 서비스 카드는 실제 상세 페이지가 없습니다.
- Contact는 임시 앵커 영역입니다.
- SEO 메타데이터, Open Graph 이미지, sitemap, robots.txt는 기본 수준만 있거나 아직 미구현입니다.
- Newsletter, 상세 콘텐츠, 각 서비스 상세 페이지는 아직 목업 범위입니다.

## 작업 히스토리

### 1. 초기 정보 구조 설계

- DAPiUM을 서비스 허브로 정의
- Header, Hero, Services, How We Build, Contents, About, Newsletter, Footer 순서 확정
- 메인 방문자의 첫 행동을 운영 중인 서비스 발견으로 설정
- Services, Contents, About, Contact의 장기 사이트 구조 정의

### 2. 첫 HTML 목업 제작

- 정적 HTML, CSS, JavaScript로 첫 화면 구현
- Hero와 서비스 카드 4개 구현
- How We Build의 Idea, Build, Launch, Grow 과정 구현
- Contents 3개와 About, Newsletter, Footer 구현
- 반응형 모바일 메뉴와 스크롤 등장 효과 추가

### 3. 테마와 상호작용 개선

- Light, Dark, System 메뉴에서 Light, Dark 토글 방식으로 변경
- 테마 선택값을 브라우저에 저장
- 모바일 메뉴 동작 확인
- Newsletter 입력 피드백 추가

### 4. 로고와 Contents 시각 요소 개선

- DAPiUM 로고 마크를 라임 컬러 기반의 강한 D 형태로 변경
- Contents 카드에 AI 대화, 브라우저 서비스 화면, 프로젝트 로드맵 시각 요소 추가
- 추상 문자와 단순 도형만 사용하던 기존 카드 이미지를 직관적인 UI 일러스트로 변경

### 5. 서비스 카드와 Newsletter 조정

- 이자정원과 사주정원의 기존 아이콘 자산을 목업에 복사해 적용
- 서비스 카드를 4열 컴팩트 레이아웃으로 축소
- 모바일에서는 1열로 유지
- Newsletter 제목을 2줄로 고정
- Newsletter 영역 높이를 약 20% 축소

### 6. 제목 줄 간격과 Dark 모드 수정

- Hero, How We Build, Contents 제목 줄 간격을 조금 넓힘
- Newsletter 제목 줄 간격을 별도로 조정
- Dark 모드에서 About 패널과 Footer가 밝게 뒤집히는 문제 수정
- Dark 모드에서 본문과 링크의 대비를 확인

### 7. DAPiUM favicon 추가

- 헤더의 라임색 D 마크를 기반으로 SVG favicon 제작
- `index.html`에 `assets/favicon.svg` 연결
- 로컬 브라우저 탭에서 favicon 링크와 자산 응답 확인

## 검증 기록

- `node --check script.js` 통과
- 데스크톱 Hero 확인
- 데스크톱 서비스 4열 확인
- 모바일 서비스 1열 확인
- Light / Dark 토글 확인
- Dark 모드 About 패널 확인
- Dark 모드 Footer 확인
- Contents 시각 요소 확인
- 브라우저 콘솔 오류 없음

## 향후 작업 TO-DO

- [x] DAPiUM 헤더 로고와 일치하는 favicon 제작
- [x] favicon을 `index.html`에 연결하고 브라우저 탭에서 확인
- [ ] 공식 로고, 색상, 타이포그래피를 브랜드 시스템 문서로 정리
- [ ] `/services` 전체 서비스 페이지 구현
- [ ] `/services/{service}` 상세 페이지 구현
- [ ] 이자정원 실제 링크와 상태를 외부 URL에서 재확인
- [ ] DAPiUM Audit, 문제은행의 상세 소개 페이지 추가
- [ ] `/contents` 목록 페이지 구현
- [ ] `/contents/{slug}` 콘텐츠 상세 페이지 구현
- [ ] 목업 콘텐츠를 실제 글과 날짜로 교체
- [ ] `/about` 페이지 구현
- [ ] `/contact` 페이지와 실제 문의 방식 결정
- [ ] Newsletter 제공자와 개인정보 처리 방식을 결정한 뒤 실제 연동
- [ ] Open Graph 이미지와 추가 SEO 메타데이터 보강
- [ ] `sitemap.xml`, `robots.txt` 추가
- [ ] 키보드 탐색, 포커스 표시, 색상 대비, reduced motion 접근성 점검
- [ ] 모바일 실제 기기에서 서비스 카드와 Newsletter 레이아웃 재확인
- [ ] 분석 도구와 개인정보 고지 범위 결정
- [x] 실제 배포 환경과 공개 도메인 결정
- [x] 배포 후 루트와 `main.dapium.com`, `saju.dapium.com` 연결 경로를 외부 환경에서 확인
- [x] GitHub 저장소에 커밋하고 README와 실제 배포 상태를 동기화
