// 전역 에러 핸들링 미들웨어

/**
 * 404 에러 핸들러 - 존재하지 않는 라우트 처리
 */
exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * 전역 에러 핸들러 - 모든 에러를 캐치하여 일관된 형식으로 응답
 */
exports.errorHandler = (err, req, res, next) => {
  // 상태 코드 설정 (이미 설정되어 있으면 사용, 없으면 500)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  // 개발 환경에서는 스택 트레이스 포함, 프로덕션에서는 제외
  const response = {
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  // 에러 로깅 (프로덕션 환경에서는 로그 서비스로 전송 가능)
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', err);
  }

  res.json(response);
};

/**
 * 비동기 함수 래퍼 - try-catch 없이 에러를 자동으로 next()로 전달
 */
exports.asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

