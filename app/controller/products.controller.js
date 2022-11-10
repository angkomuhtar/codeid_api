const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  //   res.json({ message: "test API" });
  //   if (!req.body.title) {
  //     res.status(400).json({
  //       message: "Error when Create",
  //     });
  //     return;
  //   }

  Product.create({
    title: "Nasi Kuning",
    price: 20000,
    image:
      "https://unsplash.com/photos/kcA-c3f_3FE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
  })
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
  Product.findAll().then((data) => {
    res.status(200).json({
      status: "success",
      data: data,
    });
  });
};

exports.findOne = (req, res) => {
  res.json({ message: "GET ALL" });
};
