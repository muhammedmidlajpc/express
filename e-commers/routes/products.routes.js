const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");

router.get("/products", productController.getproducts);
router.post("/products", productController.addproduct);
router.put("/products/:id", productController.updateproduct);
router.delete("/products/:id", productController.deleteproduct);

module.exports = router;
