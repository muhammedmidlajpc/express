const productModel = require("../models/products.model");
module.exports.getproducts = async (req, res) => {
  const products = await productModel.find();
  res.status(200).json({ message: "products!", products });
};
module.exports.addproduct = async (req, res) => {
  try {
    const product = req.body;
    const p = await productModel.findOne({ productId: product.productId });
    if (p) {
      res.status(500).json({ message: "the same product exist!" });
    } else {
      await productModel.create(product);
      res.status(500).json({ message: "product added!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.updateproduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findOne({ productId: id });
    if (product) {
      const uproduct = req.body;
      const ukeys = Object.keys(uproduct);

      for (i = 0; i < ukeys.length; i++) {
        const key = ukeys[i];
        product[key] = uproduct[key];
      }
      product.save();
      res.status(200).json({ message: "product updated", product });
    } else {
      res.status(500).json({ message: "product not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports.deleteproduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findOne({ productId: id });
    if (product) {
      await productModel.deleteOne({ productId: id });
      res.status(400).json({ message: "product deleted!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
