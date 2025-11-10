const cartService = require('../services/cartService');

exports.addToCart = async (req, res) => {
  // TODO: 장바구니에 상품 추가 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.body에서 productId와 quantity를 추출하세요 (quantity 기본값: 1)
  // 힌트 3: req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 4: productId가 없으면 400 상태코드와 에러 메시지를 반환하세요
  // 힌트 5: cartService.addToCart를 호출하여 장바구니에 추가하세요
  // 힌트 6: 성공 시 200 상태코드와 성공 메시지를 반환하세요
  // 힌트 7: 에러 발생 시 400 상태코드와 에러 메시지를 반환하세요
};

exports.getCartItems = async (req, res) => {
  // TODO: 장바구니 조회 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 3: cartService.getCartItems를 호출하여 장바구니 항목들을 가져오세요
  // 힌트 4: items.reduce를 사용하여 총 금액(totalAmount)을 계산하세요
  // 힌트 5: 성공 시 200 상태코드와 items, totalAmount, itemCount를 반환하세요
  // 힌트 6: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
};

exports.updateCartItem = async (req, res) => {
  // TODO: 장바구니 수량 수정 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.params에서 productId를, req.body에서 quantity를 추출하세요
  // 힌트 3: req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 4: quantity가 없거나 1보다 작으면 400 상태코드와 에러 메시지를 반환하세요
  // 힌트 5: cartService.updateCartItem을 호출하여 수량을 수정하세요
  // 힌트 6: 성공 시 200 상태코드와 성공 메시지를 반환하세요
  // 힌트 7: 에러 발생 시 400 상태코드와 에러 메시지를 반환하세요
};

exports.removeFromCart = async (req, res) => {
  // TODO: 장바구니에서 상품 제거 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.params에서 productId를 추출하세요
  // 힌트 3: req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 4: cartService.removeFromCart를 호출하여 상품을 제거하세요
  // 힌트 5: 성공 시 200 상태코드와 성공 메시지를 반환하세요
  // 힌트 6: 에러 발생 시 400 상태코드와 에러 메시지를 반환하세요
};

exports.clearCart = async (req, res) => {
  // TODO: 장바구니 비우기 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 3: cartService.clearCart를 호출하여 장바구니를 비우세요
  // 힌트 4: 성공 시 200 상태코드와 성공 메시지를 반환하세요
  // 힌트 5: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
}; 