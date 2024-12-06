const express = require("express");
const registerController = require("../controller/register.controller");
const router = express.Router();

router.post("/register", registerController.registerdata);
router.post("/login", registerController.logindata);


module.exports = router;
