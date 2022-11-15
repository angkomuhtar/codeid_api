module.exports = (sequelize, DataTypes) => {
  const orderDetails = sequelize.define("orderDetails", {
    productId: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
    orderId: {
      type: DataTypes.INTEGER,
    },
  });

  return orderDetails;
};
