const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    productId: {
    type: Number,
    default: Date.now()
  },
  productName: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  price: {
    type: Number
  }
});
const productModel=mongoose.model("products",productSchema)
module.exports=productModel