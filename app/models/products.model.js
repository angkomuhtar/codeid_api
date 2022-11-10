module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  });

  return product;
};
