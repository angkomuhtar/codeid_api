const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ force: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome To Product API by AngkoMuhtar" });
});

require("./app/routes/product")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App is Running in localhost:" + PORT);
});
