// const DB = require("../config/DB");
const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../config/dbConnect");
const database = require("../config/database.sqlite");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(DB.DB, DB.USER, DB.PASSWORD, {
//   host: DB.HOST,
//   dialect: DB.dialect,
//   operatorAliases: false,
//   pool: DB.pool,
// });

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../config/database.sqlite",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./Products.model.js")(sequelize, DataTypes);

module.exports = db;
