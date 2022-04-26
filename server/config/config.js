require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'musit',
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '1234',
    database: 'musit_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'musit',
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};
