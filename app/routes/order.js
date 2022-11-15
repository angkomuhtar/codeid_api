module.exports = (app) => {
  const order = require("../controller/orders.controller");
  let router = require("express").Router();

  router.post("/", order.create);
  router.get("/", order.findAll);
  router.get("/:id", order.findOne);

  app.use("/api/order", router);
};
