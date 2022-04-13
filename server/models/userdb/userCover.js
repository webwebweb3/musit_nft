const Sequelize = require('sequelize');

module.exports = class userCover extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        backgroundImg: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'UserCover',
        tableName: 'usercovers',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.Genre.belongsTo(db.User, { through: 'UserCover' });
  }
};
