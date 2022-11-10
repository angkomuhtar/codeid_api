module.exports = (app) => {
  const product = require("../controller/products.controller");
  let router = require("express").Router();

  // Create a new post
  router.post("/", product.create);

  // Retrieve all product
  router.get("/", product.findAll);

  //   // Retrieve published product
  //   router.get("/published", product.findAllPublished);

  //   // Retrieve single post
  //   router.get("/:id", product.findOne);

  //   // Update post
  //   router.put("/:id", product.update);

  //   // Delete single post
  //   router.delete("/:id", product.delete);

  //   // Delete all product
  //   router.delete("/", product.deleteAll);

  app.use("/api/product", router);
};
