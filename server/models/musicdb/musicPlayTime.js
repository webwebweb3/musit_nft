const Sequelize = require('sequelize');

module.exports = class MusicPlayTime extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        playtime: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'MusicPlayTime',
        tableName: 'musicplaytimes',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    // 음악은 하나의 플레이타임을 가진다.
    db.MusicPlayTime.belongsTo(db.Music, {
      foreignKey: 'musicId',
      sourceKey: 'id',
    });
  }
};
