module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define("orders", {
    totalPrice: {
      type: DataTypes.INTEGER,
    },
    totalitems: {
      type: DataTypes.INTEGER,
    },
    tableNumber: {
      type: DataTypes.INTEGER,
    },
  });

  return orders;
};
