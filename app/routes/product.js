module.exports = (app) => {
  const product = require("../controller/products.controller");
  let router = require("express").Router();

  router.post("/", product.create);
  router.get("/", product.findAll);
  router.get("/:id", product.findOne);

  app.use("/api/product", router);
};
