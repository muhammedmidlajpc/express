const express = require("express");
const userController = require("../controller/auth.controller");
const router = express.Router();

router.post("/register", userController.registerdata);
router.post("/login", userController.logindata);


module.exports = router;
