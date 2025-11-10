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

### 2. 백엔드 설정 및 실행

```bash
# 백엔드 폴더로 이동
cd backend

# 의존성 설치
npm install

# 환경 변수 설정
# .env 파일을 생성하고 아래 내용 입력
cat > .env << EOF
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=shopping_mall
JWT_SECRET=your_jwt_secret_key_here
EOF

# MySQL 데이터베이스 생성
mysql -u root -p
# MySQL 콘솔에서:
# CREATE DATABASE shopping_mall;
# exit;

# 서버 실행
npm run dev
```

**✅ 백엔드가 `http://localhost:3001`에서 실행됩니다**

### 3. 프론트엔드 설정 및 실행

```bash
# 새 터미널을 열고 프론트엔드 폴더로 이동
cd frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

**✅ 프론트엔드가 `http://localhost:3000`에서 실행됩니다**

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

## 🔧 기술 스택

### Backend

- **Node.js** + **Express.js** - 서버 프레임워크
- **MySQL** - 데이터베이스
- **JWT** - 인증/인가
- **bcrypt** - 비밀번호 암호화

### Frontend

- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Zustand** - 상태 관리

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

## 🔗 Git 사용법

### 자신의 GitHub에 올리기

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

---

## ⚠️ 자주 발생하는 오류와 해결법

### 1. Git 관련 오류

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

### 2. Backend 오류

#### `Error: connect ECONNREFUSED`

- MySQL이 실행 중인지 확인하세요

```bash
# macOS
brew services list | grep mysql
brew services start mysql

# Windows
# 서비스 관리자에서 MySQL 시작
```

#### `ER_ACCESS_DENIED_ERROR`

- `.env` 파일의 데이터베이스 비밀번호를 확인하세요
- MySQL 사용자 권한을 확인하세요

#### `Cannot find module 'express'`

```bash
# 해결: 의존성 재설치
cd backend
rm -rf node_modules package-lock.json
npm install
```

### 2. Frontend 오류

#### `CORS policy error`

- 백엔드가 실행 중인지 확인하세요 (`http://localhost:3001`)
- 백엔드의 CORS 설정을 확인하세요

#### `Module not found: Can't resolve`

```bash
# 해결: 의존성 재설치
cd frontend
rm -rf node_modules package-lock.json .next
npm install
```

#### Port 3000 is already in use

```bash
# 해결: 다른 프로세스 종료
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [PID번호] /F
```

### 3. 데이터베이스 오류

#### `Unknown database 'shopping_mall'`

```bash
# 해결: 데이터베이스 생성
mysql -u root -p
CREATE DATABASE shopping_mall;
exit;
```

#### 테이블이 생성되지 않음

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
