const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const User = require('./user');
const Artist = require('./artist');

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
db.Artist = Artist;

User.init(sequelize);
Artist.init(sequelize);

User.associate(db);
Artist.associate(db);

module.exports = db;
