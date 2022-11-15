const db = require("../models");
const Product = db.products;
const Order = db.orders;
const OrderDetail = db.orderDetails;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Product.bulkCreate([
    {
      title: "Pizza",
      price: 45000,
      type: "food",
      image:
        "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress",
    },
    {
      title: "Kings Burger",
      price: 30000,
      type: "food",
      image:
        "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress",
    },
    {
      title: "Fried Fries",
      price: 20000,
      type: "food",
      image:
        "https://images.pexels.com/photos/1309593/pexels-photo-1309593.jpeg?auto=compress",
    },
    {
      title: "Beef Steak",
      price: 65000,
      type: "food",
      image:
        "https://images.pexels.com/photos/1307658/pexels-photo-1307658.jpeg?auto=compress",
    },
    {
      title: "Cold Brew",
      price: 35000,
      type: "drinks",
      image:
        "https://images.pexels.com/photos/3749174/pexels-photo-3749174.jpeg?auto=compress",
    },
    {
      title: "coffee latte",
      price: 20000,
      type: "drinks",
      image:
        "https://images.pexels.com/photos/2648988/pexels-photo-2648988.jpeg?auto=compress",
    },
  ])
    .then((data) => {
      res.status(200).json({
        status: "Product Inserted",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "internal Error",
        message: err,
      });
    });
};

exports.findAll = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "internal Error",
        message: err,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then((data) => {
      res.status(200).json({
        status: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "internal Error",
        message: "err",
      });
    });
};

exports.update = (req, res) => {
  res.json({ message: "GET ALL" });
};

exports.createProduct = (req, res) => {
  Order.create({
    totalPrice: "200000",
    totalitems: "12",
  });
  OrderDetail.create({ productId: 1, price: 20000, qty: 12, orderId: 1 });
};
