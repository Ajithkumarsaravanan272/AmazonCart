const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname,"config","config.env")});

const products = require("./routes/product");
const orders = require("./routes/order");

const mongoose = require("mongoose");
mongoose.connect("mongodb://ajithkumar272:root@ac-imyjkmg-shard-00-00.igxdtdo.mongodb.net:27017,ac-imyjkmg-shard-00-01.igxdtdo.mongodb.net:27017,ac-imyjkmg-shard-00-02.igxdtdo.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-6cz19s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log("database connected successfully");
});

app.use(cors({
  origin: 'https://amazoncart-frontend.onrender.com',
  credentials: true  // if you're using cookies
}));
app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
