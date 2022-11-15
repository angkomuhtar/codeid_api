const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ force: true }));

const db = require("./app/models");

// uncomment to reset DB
// db.sequelize.sync({ force: true });
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome To Product API by AngkoMuhtar" });
});

require("./app/routes/product")(app);
require("./app/routes/order")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App is Running in localhost:" + PORT);
});
