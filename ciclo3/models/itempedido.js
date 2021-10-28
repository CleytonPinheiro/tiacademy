"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Itempedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itempedido.belongsTo(models.Pedido);
      Itempedido.belongsTo(models.Servico);
    }
  }
  Itempedido.init(
    {
      quantidade: DataTypes.INTEGER,
      valor: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Itempedido",
    }
  );
  return Itempedido;
};
