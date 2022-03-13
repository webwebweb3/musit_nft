const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const User = require('./User');
const Artist = require('./Artist');
const Genre = require('./Genre');

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
db.Genre = Genre;

User.init(sequelize);
Artist.init(sequelize);
Genre.init(sequelize);

User.associate(db);
Artist.associate(db);
Genre.associate(db);

module.exports = db;
