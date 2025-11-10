const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST /api/auth/signup
// @desc    회원가입
// @access  Public
// @body    { email: string, password: string, name: string }
router.post('/signup', );

// @route   POST /api/auth/login
// @desc    로그인
// @access  Public
// @body    { email: string, password: string }
router.post('/login', );

module.exports = router; 