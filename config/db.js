// db.js — placeholder MySQL connection (use dotenv in production)
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'airdocs',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
