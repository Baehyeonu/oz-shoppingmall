const userService = require('../services/userService');

exports.getMe = async (req, res) => {
  // TODO: 현재 사용자 정보 조회 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.user.userId에서 사용자 ID를 가져오세요 (authMiddleware에서 제공)
  // 힌트 3: userService.getUserById를 호출하여 사용자 정보를 조회하세요
  // 힌트 4: 사용자가 없으면 404 상태코드와 'User not found' 메시지를 반환하세요
  // 힌트 5: 성공 시 200 상태코드와 사용자 정보를 반환하세요
  // 힌트 6: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
}; 