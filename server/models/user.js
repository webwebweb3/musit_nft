const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(42),
          allowNull: false,
          unique: true,
        },
        nationality: {
          type: Sequelize.STRING(20), // 숫자로 바꿀 예정
          allowNull: false,
        },
        genre: {
          type: Sequelize.STRING(20), // 숫자로 바꿀 예정
          allowNull: true,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
        pass: {
          type: Sequelize.STRING(200),
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
  }
};
