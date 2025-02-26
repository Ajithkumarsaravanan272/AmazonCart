const ProductModel = require("../models/productModel");

//Get product API = api/v1/products
exports.getProducts = async (req, res) => {
  try {
    let query = req.query.keyword ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        } : {};

    const products = await ProductModel.find(query);
    res.json({ success: true, products });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "unable to get product",
    });
  }
};

//Get single product API = api/v1/product/:id
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "unable to get product with that ID",
    });
  }
};
