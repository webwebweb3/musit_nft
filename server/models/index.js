const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const User = require('./userdb/user');
const Genre = require('./userdb/genre');
const Music = require('./musicdb/music');
// const MusicLike = require('./musicdb/musicLike');
const MusicPlayTime = require('./musicdb/musicPlayTime');
const UserCover = require('./userdb/userCover');
const PlayList = require('./streaming/playList');

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
// db.MusicLike = MusicLike;
db.MusicPlayTime = MusicPlayTime;
db.UserCover = UserCover;
db.PlayList = PlayList;

User.init(sequelize);
Genre.init(sequelize);
Music.init(sequelize);
// MusicLike.init(sequelize);
MusicPlayTime.init(sequelize);
UserCover.init(sequelize);
PlayList.init(sequelize);

User.associate(db);
Genre.associate(db);
Music.associate(db);
// MusicLike.associate(db);
MusicPlayTime.associate(db);
UserCover.associate(db);
PlayList.associate(db);

module.exports = db;
