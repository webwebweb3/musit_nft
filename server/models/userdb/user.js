const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        metamask: {
          type: Sequelize.STRING(42),
          allowNull: false,
          unique: true,
        },
        name: {
          type: Sequelize.STRING(16),
          allowNull: true,
        },
        nationality: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        pass: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        role: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: '0',
        },
        subscription: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: '0',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.User.belongsToMany(db.User, {
      foreignKey: 'subscribers',
      as: 'subscribers',
      through: 'subscribe',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'subscribing',
      as: 'subscribing',
      through: 'subscribe',
    });
    db.User.belongsToMany(db.Genre, { through: 'UserGenre' });
    // 유저는 여러개의 음악을 가질 수 있다.
    db.User.hasMany(db.PlayList);
    db.User.hasMany(db.Music, { foreignKey: 'uploader', sourceKey: 'id' });
    db.User.hasOne(db.UserCover, { foreignKey: 'user', through: 'id' });
    db.User.belongsToMany(db.Music, {
      foreignKey: 'user',
      as: 'user',
      through: 'musiclikes',
    });
  }
};
