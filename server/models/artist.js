const Sequelize = require('sequelize');

module.exports = class Artist extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        metamask: {
          type: Sequelize.STRING(42),
          allowNull: true,
          unique: true,
        },
        name: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        nationality: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        img: {
          type: Sequelize.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Artist',
        tableName: 'artists',
        paranoid: true, // 삭제한척
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    );
  }

  static associate(db) {
    db.Artist.belongsTo(db.User);
    db.Artist.belongsToMany(db.Artist, {
      foreignKey: 'subscribeId',
      as: 'Subscribers',
      through: 'Subscribe',
    });
    db.Artist.belongsToMany(db.Artist, {
      foreignKey: 'subscribeId',
      as: 'Subscribing',
      through: 'Subscribe',
    });
    db.Artist.belongsToMany(db.Genre, { through: 'ArtistGenre' });
  }
};
