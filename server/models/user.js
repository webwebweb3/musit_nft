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
      foreignKey: 'subscribeId',
      as: 'Subscribers',
      through: 'Subscribe',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'subscribeId',
      as: 'Subscribing',
      through: 'Subscribe',
    });
    db.User.belongsToMany(db.Genre, { through: 'UserGenre' });
    db.User.hasMany(db.Music);
  }
};
