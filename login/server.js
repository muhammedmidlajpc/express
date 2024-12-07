const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/db.config");
require("dotenv").config()

const app = express();
app.use(express.json());
dbConnect();
const Register = require("./model/user.model");
const registerRouter = require("./routes/registe.routes");

app.use(registerRouter)


app.listen(process.env.PORT, (err) => {
  console.log("server is running!");
});

