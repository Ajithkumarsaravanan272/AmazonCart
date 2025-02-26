const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");

const mongoose = require("mongoose");
const ProductModel = require("./models/productModel");

mongoose.connect("mongodb://localhost:27017/EcommerceApp").then(() => {
  console.log("database connected successfully");
});

app.use(cors());
app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
