'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  sequelize.options.modelsCache=null;
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.hasMany(models.Packs, {
        foreignKey: "packs_id",
        sourceKey: 'code',
        onDelete: "CASCADE"
      })
      Produtos.hasMany(models.Packs, {
        foreignKey: "produto_id",
        sourceKey: 'code',
        onDelete: "CASCADE"
      })
    }
  }
  Produtos.init({
    code: DataTypes.BIGINT,
    name: DataTypes.STRING,
    cost_price: DataTypes.FLOAT,
    sales_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};