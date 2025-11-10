const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

// @route   POST /api/products
// @desc    상품 생성
// @access  Private
// @body    { name: string, description: string, price: number, imageUrl: string, stock: number }
router.post('/', protect, );

// @route   GET /api/products
// @desc    상품 목록 조회 (페이지네이션)
// @access  Public
// @query   { page: number, limit: number }
router.get('/', );

// @route   GET /api/products/:id
// @desc    특정 상품 조회
// @access  Public
router.get('/:id', );

// @route   PUT /api/products/:id
// @desc    상품 수정
// @access  Private
// @body    { name: string, description: string, price: number, imageUrl: string, stock: number }
router.put('/:id', protect, );

// @route   DELETE /api/products/:id
// @desc    상품 삭제
// @access  Private
router.delete('/:id', protect, );

module.exports = router; 