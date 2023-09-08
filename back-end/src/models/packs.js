'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Packs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Packs.belongsTo(models.Produtos, {
        foreignKey: 'packs_id',
        targetKey: "code",
        onDelete: "CASCADE"
      });
      Packs.belongsTo(models.Produtos, {
        foreignKey: 'produto_id',
        targetKey: "code",
        onDelete: "CASCADE"
      });
    }
  }
  Packs.init({
    qty: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Packs',
  });
  return Packs;
};