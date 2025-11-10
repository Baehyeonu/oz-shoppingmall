# 🛒 쇼핑몰 프로젝트

> 풀스택 쇼핑몰 웹 애플리케이션 학습 프로젝트

---

## 📸 프로젝트 미리보기

### 메인 페이지

쇼핑몰의 홈 페이지로, 최고의 품질과 합리적인 가격을 소개합니다.

![메인 페이지](./screenshots/main-page.png)

### 로그인 후 메인 페이지

로그인하면 마이페이지와 로그아웃 버튼이 표시됩니다.

![로그인 후 메인 페이지](./screenshots/main-page-logged.png)

### 회원가입 페이지

이름, 이메일, 비밀번호를 입력하여 회원가입할 수 있습니다.

![회원가입 페이지](./screenshots/signup-page.png)

### 전체 상품 페이지

다양한 카테고리의 상품들을 한눈에 볼 수 있으며, 장바구니에 담기 버튼으로 간편하게 추가할 수 있습니다.

![전체 상품 페이지](./screenshots/products-page.png)

---

## 🛠️ 사용된 기술

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&logo=letsencrypt&logoColor=white)

### Frontend

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

### 개발 도구

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

---

## 🚀 빠른 시작

### 1. 프로젝트 클론하기

```bash
# 이 저장소 클론
git clone [여기에_GitHub_저장소_주소_입력]
cd oz-shoppingmall
```

---

## 🔗 Git 사용법

### 자신의 GitHub에 올리기

프로젝트를 클론한 후, 자신의 GitHub 저장소로 관리하고 싶다면:

```bash
# 1. GitHub에서 새 저장소 생성 (빈 저장소로)

# 2. 원격 저장소 변경
git remote remove origin  # 기존 원격 저장소 제거 (있다면)
git remote add origin https://github.com/your-username/your-repo-name.git

# 3. 브랜치 확인 및 변경 (필요시)
git branch -M main

# 4. 푸시
git push -u origin main
```

### 브랜치 만들어서 작업하기

```bash
# 새 브랜치 생성 및 이동
git checkout -b feature/login

# 작업 후 커밋
git add .
git commit -m "로그인 기능 구현"

# 푸시
git push origin feature/login
```

### Git 관련 자주 발생하는 오류

#### `fatal: not a git repository`

```bash
# 해결: Git 초기화
git init
```

#### `fatal: remote origin already exists`

```bash
# 해결: 기존 remote 제거 후 다시 추가
git remote remove origin
git remote add origin [새로운_저장소_주소]
```

#### `error: failed to push some refs`

```bash
# 해결: 먼저 pull 받기
git pull origin main --rebase
git push origin main
```

#### Permission denied (publickey)

```bash
# 해결: SSH 키 설정 또는 HTTPS 사용
git remote set-url origin https://github.com/username/repo.git
```

---

### 2. 프로젝트 실행하기

상세한 실행 방법은 **[Howtomake.md](./Howtomake.md)** 파일을 참고하세요!

간단 요약:

```bash
# 1. 백엔드 실행
cd backend && npm install && npm run dev

# 2. 프론트엔드 실행 (새 터미널)
cd frontend && npm install && npm run dev
```

---

## 📚 학습 가이드

이 프로젝트는 **학습용 프로젝트**입니다. 완성된 코드를 그대로 실행하는 것보다, **직접 구현**하면서 배우는 것을 권장합니다.

### 학습 방법

1. **[Howtomake.md](./Howtomake.md)** 파일을 열어보세요
2. 단계별 가이드를 따라 처음부터 구현해보세요
3. 막히는 부분이 있으면 완성된 코드를 참고하세요
4. 힌트가 있는 파일들 (TODO 주석)을 보고 직접 코드를 작성해보세요

### 힌트가 있는 파일들

#### Backend

- `backend/src/controllers/*` - 컨트롤러 로직
- `backend/src/routes/*` - 라우터 설정

#### Frontend

- `frontend/src/components/forms/*` - 폼 컴포넌트
- `frontend/src/components/pages/*` - 페이지 컴포넌트

---

## 📂 프로젝트 구조

```
oz-shoppingmall/
├── backend/
│   ├── src/
│   │   ├── config/         # 데이터베이스 설정
│   │   ├── controllers/    # 비즈니스 로직 (힌트 포함)
│   │   ├── routes/         # API 라우트 (힌트 포함)
│   │   ├── services/       # 데이터베이스 작업
│   │   ├── middlewares/    # 인증 미들웨어
│   │   └── index.js        # 서버 진입점
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/            # Next.js 페이지
│   │   ├── components/     # React 컴포넌트 (힌트 포함)
│   │   ├── lib/            # API 클라이언트, 유틸리티
│   │   ├── store/          # Zustand 스토어
│   │   └── styles/         # 글로벌 스타일
│   └── package.json
│
├── Howtomake.md           # 📖 상세 학습 가이드
└── README.md              # 이 파일
```

---

## 🗄️ 데이터베이스 설계 (ERD)

이 프로젝트의 데이터베이스는 **3개의 주요 테이블**로 구성되어 있습니다.

![ERD Diagram](./screenshots/shoppingmallERD.png)

### 테이블 구조

#### 📋 USERS (사용자)

- 회원가입한 사용자 정보를 저장합니다
- `provider` 필드로 로컬 또는 소셜 로그인 구분
- 비밀번호는 bcrypt로 암호화되어 저장됩니다

#### 📦 PRODUCTS (상품)

- 쇼핑몰의 상품 정보를 저장합니다
- `user_id`로 상품을 등록한 사용자와 연결됩니다
- 카테고리별로 상품을 분류할 수 있습니다

#### 🛒 CART (장바구니)

- 사용자별 장바구니 항목을 저장합니다
- `user_id`와 `product_id`로 사용자와 상품을 연결합니다
- 사용자 또는 상품 삭제 시 자동으로 관련 장바구니 항목도 삭제됩니다 (ON DELETE CASCADE)

### 관계 설명

- **USERS ↔ PRODUCTS**: 1:N 관계 (한 사용자가 여러 상품 등록 가능)
- **USERS ↔ CART**: 1:N 관계 (한 사용자가 여러 장바구니 항목 보유)
- **PRODUCTS ↔ CART**: 1:N 관계 (한 상품이 여러 사용자의 장바구니에 담김)

---

## ⚠️ 자주 발생하는 오류와 해결법

### 1. Git 관련 오류

#### `fatal: not a git repository`

**원인**: 현재 폴더가 Git 저장소로 초기화되지 않았을 때 발생합니다.

```bash
# 해결: Git 초기화
git init
```

#### `fatal: remote origin already exists`

**원인**: 이미 origin이라는 이름의 원격 저장소가 등록되어 있을 때 발생합니다.

```bash
# 해결: 기존 remote 제거 후 다시 추가
git remote remove origin
git remote add origin [새로운_저장소_주소]
```

#### `error: failed to push some refs`

**원인**: 원격 저장소에 로컬에 없는 커밋이 있어서 push가 거부될 때 발생합니다.

```bash
# 해결: 먼저 pull 받기
git pull origin main --rebase
git push origin main
```

#### `Updates were rejected because the tip of your current branch is behind`

**원인**: 다른 곳에서 먼저 push를 해서 원격 저장소가 로컬보다 앞서 있을 때 발생합니다. (협업 시 자주 발생)

```bash
# 해결 1: rebase 사용 (추천 - 커밋 히스토리가 깔끔함)
git pull origin main --rebase
git push origin main

# 해결 2: merge 사용 (병합 커밋 생성)
git pull origin main
git push origin main

# 해결 3: 강제 push (⚠️ 위험! 원격의 변경사항이 사라집니다)
# git push origin main --force  # 절대 사용하지 마세요!
```

#### `diverged` - 로컬과 원격이 서로 다른 커밋을 가지고 있음

**원인**: 로컬과 원격 저장소의 커밋 이력이 갈라져서(diverged) 충돌이 발생했을 때 나타납니다.

```bash
# 현재 상태 확인
git status

# 해결: pull로 병합 후 push
git pull origin main
# 충돌이 있다면 해결 후:
git add .
git commit -m "Merge conflicts resolved"
git push origin main
```

#### Permission denied (publickey)

**원인**: SSH 키가 설정되지 않았거나 GitHub에 등록되지 않았을 때 발생합니다.

```bash
# 해결: SSH 키 설정 또는 HTTPS 사용
git remote set-url origin https://github.com/username/repo.git
```

### 2. Backend 오류

#### `Error: connect ECONNREFUSED`

**원인**: MySQL 서버가 실행되지 않았거나 연결할 수 없을 때 발생합니다.

```bash
# macOS
brew services list | grep mysql
brew services start mysql

# Windows
# 서비스 관리자에서 MySQL 시작
```

#### `ER_ACCESS_DENIED_ERROR`

**원인**: 데이터베이스 접속 정보(사용자명, 비밀번호)가 잘못되었을 때 발생합니다.

- `.env` 파일의 데이터베이스 비밀번호를 확인하세요
- MySQL 사용자 권한을 확인하세요

#### `Cannot find module 'express'`

**원인**: 필요한 npm 패키지가 설치되지 않았을 때 발생합니다.

```bash
# 해결: 의존성 재설치
cd backend
rm -rf node_modules package-lock.json
npm install
```

### 3. Frontend 오류

#### `CORS policy error`

**원인**: 브라우저가 다른 도메인의 API 요청을 차단할 때 발생합니다. (보안 정책)

- 백엔드가 실행 중인지 확인하세요 (`http://localhost:3001`)
- 백엔드의 CORS 설정을 확인하세요

#### `Module not found: Can't resolve`

**원인**: import한 모듈을 찾을 수 없거나 npm 패키지가 설치되지 않았을 때 발생합니다.

```bash
# 해결: 의존성 재설치
cd frontend
rm -rf node_modules package-lock.json .next
npm install
```

#### Port 3000 is already in use

**원인**: 3000번 포트를 다른 프로그램이 사용 중일 때 발생합니다.

```bash
# 해결: 다른 프로세스 종료
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID번호] /F
```

### 4. 데이터베이스 오류

#### `Unknown database 'shopping_mall'`

**원인**: `shopping_mall` 데이터베이스가 MySQL에 생성되지 않았을 때 발생합니다.

```bash
# 해결: 데이터베이스 생성
mysql -u root -p
CREATE DATABASE shopping_mall;
exit;
```

#### 테이블이 생성되지 않음

**원인**: 데이터베이스는 있지만 테이블이 없을 때 발생합니다. 이 프로젝트는 자동으로 테이블을 생성합니다.

```bash
# 해결: 서버를 한 번 실행하면 자동으로 테이블 생성됨
cd backend
npm run dev
# 로그에서 "Tables checked/created successfully" 확인
```

---

## 📝 환경 변수 템플릿

### backend/.env

```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=shopping_mall
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

### 주의사항

- ⚠️ `.env` 파일은 절대 Git에 올리지 마세요!
- ⚠️ JWT_SECRET은 랜덤한 긴 문자열로 변경하세요
- ⚠️ 실제 운영 환경에서는 더 강력한 보안 설정이 필요합니다

---

## 🎯 기능 목록

- ✅ 회원가입 / 로그인 (JWT 인증)
- ✅ 상품 목록 조회 (페이지네이션)
- ✅ 상품 상세 조회
- ✅ 장바구니 추가/수정/삭제
- ✅ 마이페이지 (프로필 조회/수정)
- ✅ 반응형 디자인

---

## 💡 학습 목표

이 프로젝트를 통해 다음을 학습할 수 있습니다:

1. **Backend**: Express.js로 RESTful API 만들기
2. **Database**: MySQL 데이터베이스 설계 및 쿼리
3. **Authentication**: JWT 기반 인증 시스템
4. **Frontend**: Next.js와 TypeScript로 모던 웹 개발
5. **State Management**: Zustand로 상태 관리
6. **API Integration**: Frontend-Backend 통신
7. **Git**: 버전 관리 및 협업

---

## 📖 참고 문서

- [Howtomake.md](./Howtomake.md) - 상세한 단계별 구현 가이드
- [Express.js 공식 문서](https://expressjs.com/)
- [Next.js 공식 문서](https://nextjs.org/docs)
- [MySQL 공식 문서](https://dev.mysql.com/doc/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)

---

## 🤝 기여하기

이 프로젝트는 학습용 프로젝트입니다. 개선 사항이나 버그를 발견하면:

1. Issue를 생성해주세요
2. Fork 후 수정하여 Pull Request를 보내주세요

---

## 📄 라이선스

이 프로젝트는 학습 목적으로 자유롭게 사용할 수 있습니다.

---

**🎓 행복한 코딩 되세요! 화이팅! 🚀**
