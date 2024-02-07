const { DataTypes } = require("sequelize");

const sequelize = require("../utils/utils");

module.exports = sequelize.define("Voucher", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
