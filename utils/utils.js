const Sequelize = require("sequelize");

const sequelize = new Sequelize("customer-voucher", "root", "Vivaan@2810", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
