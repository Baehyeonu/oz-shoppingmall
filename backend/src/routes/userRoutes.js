const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// @route   GET /api/users/me
// @desc    현재 사용자 정보 조회
// @access  Private
router.get('/me', protect, );

module.exports = router; 