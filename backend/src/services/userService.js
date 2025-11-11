const pool = require('../config/db');

exports.getUserById = async (userId) => {
  let connection;
  try {
    connection = await pool.connect();
    const result = await connection.query('SELECT id, email, name, provider FROM users WHERE id = $1', [userId]);
    return result.rows[0] || null;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};
