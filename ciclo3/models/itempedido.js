"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ItemPedido.belongsTo(models.Pedido);
      ItemPedido.belongsTo(models.Servico);
    }
  }
  ItemPedido.init(
    {
      PedidoId: DataTypes.INTEGER,
      ServicoId: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      valor: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "ItemPedido",
    }
  );
  return ItemPedido;
};
