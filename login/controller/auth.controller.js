const mongoose = require("mongoose");
const Register = require("../model/user.model");
const { json } = require("express");
module.exports.registerdata = async (req, res) => {
  try {
    const userName = req.body;
    const user = await Register.findOne({ userName: userName.userName });
    if (user) {
      res.send("user already exist!");
    } else {
      await Register.create(userName);
      res.send("your data has been registered!")
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.logindata = async (req, res) => {
  try {
    const userName = req.body;

    const user = await Register.findOne({ userName: userName.userName });
    console.log(user);
    if (user) {
      if (userName.password == user.password) {
        res.send("welcome user!");
      } else {
        res.send("incorrect password!");
      }
    } else {
      res.send("user not found!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
