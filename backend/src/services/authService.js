const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (email, password, name) => {
  const connection = await pool.connect();
  try {
    // Check if user already exists
    const checkResult = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
    if (checkResult.rows.length > 0) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await connection.query(
      'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id',
      [email, hashedPassword, name]
    );

    return result.rows[0].id;
  } finally {
    connection.release();
  }
};

exports.login = async (email, password) => {
  const connection = await pool.connect();
  try {
    // Find user by email
    const result = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      throw new Error('Invalid email or password');
    }

    const user = result.rows[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    // Generate JWT
    const payload = {
      userId: user.id,
      email: user.email,
      name: user.name
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h' // Token expires in 1 hour
    });

    return token;

  } finally {
    connection.release();
  }
};
