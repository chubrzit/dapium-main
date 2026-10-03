# DAPiUM Main 작업 목표

## 목표

현재 HTML 목업을 바탕으로 DAPiUM을 서비스, 콘텐츠, About, Newsletter가 연결되는 상위 브랜드 허브로 발전시킨다.

DAPiUM은 AI와 기술을 활용해 작은 아이디어를 실제 서비스로 만들고 직접 운영하는 작은 스튜디오로 표현한다. 메인 페이지의 첫 번째 목적은 방문자가 DAPiUM의 정체성을 이해하고 운영 중인 서비스를 발견하게 하는 것이다.

핵심 메시지:

> AI로 작게 시작해, 아이디어를 실제 서비스로 만들고 꾸준히 키웁니다.

## 현재 구현 범위

- 정적 HTML, CSS, JavaScript 기반 메인 랜딩 페이지
- Hero
- Featured Services
- How We Build
- Contents
- About DAPiUM
- Newsletter 목업
- Footer
- Light / Dark 테마 토글
- 모바일 메뉴
- 반응형 데스크톱, 태블릿, 모바일 레이아웃
- 스크롤 등장 애니메이션
- 뉴스레터 입력 피드백
- DAPiUM 헤더 로고와 일치하는 SVG favicon

## 서비스 정보

- 이자정원: 운영 중, `https://calc.dapium.com` 연결
- 사주정원: 운영 중, `https://saju.dapium.com` 연결
- DAPiUM Audit: 개발 중
- 문제은행: 준비 중

이자정원과 사주정원 카드는 실제 서비스에서 만든 아이콘을 사용한다. 새로운 추상 아이콘으로 교체하지 않는다.

## 페이지 우선순위

1. Hero에서 DAPiUM이 무엇을 하는지 5초 안에 전달한다.
2. Services에서 운영 중인 서비스가 가장 먼저 발견되게 한다.
3. How We Build에서 Idea, Build, Launch, Grow 흐름을 설명한다.
4. Contents에서 제작과 운영 과정의 배움을 보여준다.
5. About에서 DAPiUM을 소개하고 개인 브랜드는 과도하게 앞세우지 않는다.
6. Newsletter는 보조 CTA로 둔다.

## 앞으로의 구현 방향

- `/services`, `/services/{service}` 등 실제 서비스 구조 추가
- `/contents`, `/contents/{slug}` 등 실제 콘텐츠 구조 추가
- `/about`, `/contact` 페이지 추가
- 뉴스레터 실제 수집 연동
- Open Graph, 추가 SEO 메타데이터, sitemap 추가
- 실제 배포와 사용자 관점의 외부 URL 검증

## 작업 방식

작업을 시작하기 전에 현재 파일, 로컬 상태, 기존 자산을 확인한다. 사용자가 요청하지 않은 배포, 외부 서비스 연동, 도메인 변경은 실행하지 않는다. 변경 후에는 문법 검사와 로컬 브라우저 확인을 수행하고, 확인하지 못한 사항은 검증되지 않았다고 명시한다.
