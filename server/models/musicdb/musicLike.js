const Sequelize = require('sequelize');

module.exports = class MusicLike extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        likes: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'MusicLike',
        tableName: 'musiclikes',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    // 음악은 하나의 좋아요를 가진다.
    db.MusicLike.belongsTo(db.Music, {
      foreignKey: 'musicId',
      sourceKey: 'id',
    });
  }
};
