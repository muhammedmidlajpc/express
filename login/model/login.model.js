const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
const loginModel = mongoose.model("login", loginSchema);
module.exports = loginModel;
