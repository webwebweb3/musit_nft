const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
/* 왜 안될까 이유가 멀까 */
console.log(typeof env);
console.log(env);
const config = require('../config/config')[env];
// const config = require('../config/config')['test'];
console.log(config);

const User = require('./User');
const Genre = require('./Genre');
const Music = require('./music');

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.Genre = Genre;
db.Music = Music;

User.init(sequelize);
Genre.init(sequelize);
Music.init(sequelize);

User.associate(db);
Genre.associate(db);
Music.associate(db);

module.exports = db;
