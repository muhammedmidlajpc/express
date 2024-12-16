const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
module.exports.register = async (req, res) => {
  try {
    const User = req.body;
    const user = await userModel.findOne({ username: User.username });

    if (user) {
      res.status(401).json({ message: "user already exist!try login!" });
    } else {
      console.log(User);
      await userModel.create(User);
      res.status(200).json({ message: "your data has been registered!", User });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        res.status(200).json({ message: "welcome user!", user });
      } else {
        res.status(500).json({ message: "invalid password!" });
      }
    } else {
      res.status(500).json({ message: "user doesn't exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
