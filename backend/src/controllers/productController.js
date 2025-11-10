const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
  // TODO: 상품 생성 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.body에서 name, description, price, imageUrl, stock을 추출하세요
  // 힌트 3: req.user.userId에서 사용자 ID를 가져오세요 (authMiddleware에서 제공)
  // 힌트 4: 필수 필드(name, price, stock)가 없으면 400 상태코드와 에러 메시지를 반환하세요
  // 힌트 5: productData 객체를 만들어 productService.createProduct를 호출하세요
  // 힌트 6: 성공 시 201 상태코드와 productId, 성공 메시지를 반환하세요
  // 힌트 7: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
};

exports.getProducts = async (req, res) => {
  // TODO: 상품 목록 조회 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.query에서 page와 limit을 추출하고 정수로 변환하세요 (기본값: page=1, limit=10)
  // 힌트 3: productService.getProducts를 호출하여 결과를 받아오세요
  // 힌트 4: 성공 시 200 상태코드와 결과를 반환하세요
  // 힌트 5: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
};

exports.getProductById = async (req, res) => {
  // TODO: 특정 상품 조회 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.params.id에서 상품 ID를 가져오세요
  // 힌트 3: productService.getProductById를 호출하여 상품을 조회하세요
  // 힌트 4: 상품이 없으면 404 상태코드와 'Product not found' 메시지를 반환하세요
  // 힌트 5: 성공 시 200 상태코드와 상품 정보를 반환하세요
  // 힌트 6: 에러 발생 시 500 상태코드와 에러 메시지를 반환하세요
};

exports.updateProduct = async (req, res) => {
  // TODO: 상품 수정 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.params.id에서 상품 ID를, req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 3: req.body에서 수정할 상품 데이터를 가져오세요
  // 힌트 4: productService.updateProduct를 호출하여 상품을 수정하세요
  // 힌트 5: 성공 시 200 상태코드와 수정된 상품 정보를 반환하세요
  // 힌트 6: 에러 메시지에 따라 적절한 상태코드를 반환하세요
  //         - 'Product not found': 404
  //         - 'User not authorized': 403
  //         - 기타: 500
};

exports.deleteProduct = async (req, res) => {
  // TODO: 상품 삭제 로직을 구현하세요
  // 힌트 1: try-catch 문을 사용하여 에러를 처리하세요
  // 힌트 2: req.params.id에서 상품 ID를, req.user.userId에서 사용자 ID를 가져오세요
  // 힌트 3: productService.deleteProduct를 호출하여 상품을 삭제하세요
  // 힌트 4: 성공 시 200 상태코드와 'Product deleted successfully' 메시지를 반환하세요
  // 힌트 5: 에러 메시지에 따라 적절한 상태코드를 반환하세요
  //         - 'Product not found': 404
  //         - 'User not authorized': 403
  //         - 기타: 500
}; 