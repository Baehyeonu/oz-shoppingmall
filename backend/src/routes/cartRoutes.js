const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { protect } = require('../middlewares/authMiddleware');

// @route   POST /api/cart
// @desc    장바구니에 상품 추가
// @access  Private
// @body    { productId: number, quantity: number }
router.post('/', protect, );

// @route   GET /api/cart
// @desc    장바구니 조회
// @access  Private
router.get('/', protect, );

// @route   PUT /api/cart/:productId
// @desc    장바구니 수량 수정
// @access  Private
// @body    { quantity: number }
router.put('/:productId', protect, );

// @route   DELETE /api/cart/:productId
// @desc    장바구니에서 상품 제거
// @access  Private
router.delete('/:productId', protect, );

// @route   DELETE /api/cart
// @desc    장바구니 비우기
// @access  Private
router.delete('/', protect, );

module.exports = router; 