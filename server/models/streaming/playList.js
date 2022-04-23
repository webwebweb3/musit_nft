const Sequelize = require('sequelize');

module.exports = class PlayList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'PlayList',
        tableName: 'playLists',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.PlayList.belongsTo(db.User);
    db.PlayList.belongsToMany(db.Music, { through: 'PlayListMusic' });
  }
};
