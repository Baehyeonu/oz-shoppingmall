const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  let token;

  // Authorization 헤더에서 Bearer 토큰 확인
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (e.g., "Bearer eyJhbGciOiJI...")
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user to the request object
      req.user = decoded;
      
      // ✅ 성공적으로 인증되면 다음 미들웨어로 진행
      return next();
    } catch (error) {
      // 토큰이 유효하지 않을 경우
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // 토큰이 제공되지 않았을 경우
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};
