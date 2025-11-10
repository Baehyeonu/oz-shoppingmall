const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

exports.signup = async (req, res) => {
  // TODO: 회원가입 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.body에서 email, password, name을 추출하세요
  // 힌트 3: 필수 필드(email, password, name)가 없으면 400 상태코드와 에러 메시지를 반환하세요
  // 힌트 4: authService.signup을 호출하여 사용자를 생성하세요
  // 힌트 5: 성공 시 201 상태코드와 userId, 성공 메시지를 반환하세요
  // 힌트 6: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
};

exports.login = async (req, res) => {
  // TODO: 로그인 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.body에서 email, password를 추출하세요
  // 힌트 3: 필수 필드(email, password)가 없으면 400 상태코드와 에러 메시지를 반환하세요
  // 힌트 4: authService.login을 호출하여 토큰을 받아오세요
  // 힌트 5: 성공 시 200 상태코드와 token을 반환하세요
  // 힌트 6: 에러 발생 시 401 상태코드와 에러 메시지를 반환하세요
};

 