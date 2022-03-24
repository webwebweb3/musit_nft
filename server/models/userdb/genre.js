const Sequelize = require('sequelize');

module.exports = class Genre extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.STRING(10),
          allowNull: true,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'Genre',
        tableName: 'genres',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.Genre.belongsToMany(db.User, { through: 'UserGenre' });
  }
};
