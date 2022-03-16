require('dotenv').config();
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
/* 왜 안될까 이유가 멀까 */
const config = require('../config/config')[env];
// const config = require('../config/config')['test'];
console.log(config);

const User = require('./User');
const Genre = require('./Genre');
const Music = require('./musicdb/music');
const MusicLike = require('./musicdb/musicLike');
const MusicPlayTime = require('./musicdb/musicPlayTime');

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
db.MusicLike = MusicLike;
db.MusicPlayTime = MusicPlayTime;

User.init(sequelize);
Genre.init(sequelize);
Music.init(sequelize);
MusicLike.init(sequelize);
MusicPlayTime.init(sequelize);

User.associate(db);
Genre.associate(db);
Music.associate(db);
MusicLike.associate(db);
MusicPlayTime.associate(db);

module.exports = db;
