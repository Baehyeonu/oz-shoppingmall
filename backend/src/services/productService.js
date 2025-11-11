const pool = require('../config/db');

exports.createProduct = async (productData) => {
  const { name, description, price, imageUrl, stock, userId } = productData;
  const connection = await pool.connect();
  try {
    const result = await connection.query(
      'INSERT INTO products (name, description, price, image_url, stock, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [name, description || null, price, imageUrl || null, stock, userId]
    );
    return result.rows[0].id;
  } finally {
    connection.release();
  }
};

exports.getProducts = async (page, limit) => {
  const connection = await pool.connect();
  try {
    const offset = (page - 1) * limit;

    // Query to get the total number of products
    const countResult = await connection.query('SELECT COUNT(*) as total FROM products');
    const total = parseInt(countResult.rows[0].total);

    // Query to get the products for the current page
    const productsResult = await connection.query(
      'SELECT * FROM products ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    
    return {
      products: productsResult.rows,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalProducts: total
    };
  } finally {
    connection.release();
  }
};

exports.getProductById = async (productId) => {
  const connection = await pool.connect();
  try {
    const result = await connection.query('SELECT * FROM products WHERE id = $1', [productId]);
    return result.rows[0] || null;
  } finally {
    connection.release();
  }
}; 

exports.updateProduct = async (productId, userId, productData) => {
  const connection = await pool.connect();
  try {
    const checkResult = await connection.query('SELECT user_id FROM products WHERE id = $1', [productId]);
    if (checkResult.rows.length === 0) {
      throw new Error('Product not found');
    }

    const product = checkResult.rows[0];
    if (product.user_id !== userId) {
      throw new Error('User not authorized');
    }

    const fieldsToUpdate = Object.keys(productData).filter(key => productData[key] !== undefined);
    if (fieldsToUpdate.length === 0) {
      const currentResult = await connection.query('SELECT * FROM products WHERE id = $1', [productId]);
      return currentResult.rows[0];
    }
    
    // PostgreSQL placeholder 생성 ($1, $2, ...)
    const setClause = fieldsToUpdate.map((field, index) => `${field} = $${index + 1}`).join(', ');
    const values = fieldsToUpdate.map(field => productData[field]);
    values.push(productId);

    await connection.query(
      `UPDATE products SET ${setClause} WHERE id = $${values.length}`,
      values
    );

    const updatedResult = await connection.query('SELECT * FROM products WHERE id = $1', [productId]);
    return updatedResult.rows[0];
  } finally {
    connection.release();
  }
};

exports.deleteProduct = async (productId, userId) => {
  const connection = await pool.connect();
  try {
    const checkResult = await connection.query('SELECT user_id FROM products WHERE id = $1', [productId]);
    if (checkResult.rows.length === 0) {
      throw new Error('Product not found');
    }

    const product = checkResult.rows[0];
    if (product.user_id !== userId) {
      throw new Error('User not authorized');
    }

    await connection.query('DELETE FROM products WHERE id = $1', [productId]);
    return true;
  } finally {
    connection.release();
  }
};
