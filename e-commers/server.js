const mongoose = require("mongoose");
const express = require("express");
const dbConnect = require("./config/db.config");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/products.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
dbConnect();
app.use(userRouter);
app.use(productRouter)

app.listen(process.env.PORT, (err) => {
  console.log("server is running!");
});
