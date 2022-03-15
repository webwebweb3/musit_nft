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
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true, // 삭제한척
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.User.hasMany(db.Artist);
    db.User.belongsToMany(db.Genre, { through: 'UserGenre' });
  }
};
