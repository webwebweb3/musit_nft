const Sequelize = require('sequelize');

module.exports = class Music extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        albumName: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        release: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        songwriter: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        lyricist: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Music',
        tableName: 'musics',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.Music.belongsToMany(db.User, {
      foreignKey: 'subscribeId',
      as: 'Subscribers',
      through: 'Subscribe',
    });
  }
};
