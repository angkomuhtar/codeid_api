const { Sequelize, DataTypes } = require("sequelize");
const database = require("../config/database.db");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../config/database.db",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./products.model.js")(sequelize, Sequelize);
db.orders = require("./orders.model.js")(sequelize, Sequelize);
db.orderDetails = require("./orderdetails.model.js")(sequelize, Sequelize);

db.orders.hasMany(db.orderDetails, { as: "details" });
db.products.hasMany(db.orderDetails, { as: "details" });
db.orderDetails.belongsTo(db.orders, { foreignKey: "orderId", as: "order" });
db.orderDetails.belongsTo(db.products, {
  foreignKey: "productId",
  as: "product",
});

module.exports = db;
