const db = require("../models");
const Order = db.orders;
const OrderDetail = db.orderDetails;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Order.create({
    totalPrice: req.body.totalPrice,
    totalitems: req.body.totalitems,
    tableNumber: req.body.tableNumber,
  })
    .then((data) => {
      let details = [];
      req.body.items.map((dx) => {
        details.push({
          productId: dx.id,
          price: dx.price,
          qty: dx.qty,
          orderId: data.id,
        });
      });
      OrderDetail.bulkCreate(details)
        .then((data) => {
          res.status(200).json({
            status: "data Inserted",
            data: data,
          });
        })
        .catch((err) => {
          res.status(500).json({
            status: "internal Error",
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        status: "internal Error",
        message: err,
      });
    });
  // console.log(req.body);
};

exports.findAll = (req, res) => {
  Order.findAll({ order: [["createdAt", "DESC"]], include: ["details"] })
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
  Order.findByPk(req.params.id)
    .then((data) => {
      OrderDetail.findAll({ where: { orderId: data.id }, include: ["product"] })
        .then((details) => {
          let vdata = {
            ...data.dataValues,
            details: details,
          };
          res.status(200).json({
            status: "success",
            data: vdata,
          });
        })
        .catch((err) => {
          res.status(500).json({
            status: "internal Error",
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        status: "internal Error",
        message: err,
      });
    });
};
