"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(models.Pedido, {
        foreignKey: "ClienteId",
        as: "pedidos",
      });
      Cliente.hasMany(models.Compra, {
        foreignKey: "ClienteId",
        as: "compras",
      });
    }
  }
  Cliente.init(
    {
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      nascimetno: DataTypes.DATEONLY,
      clienteDesde: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Cliente",
    }
  );
  return Cliente;
};
