
const productModel = require("../models/productModel");
const orderModel=require("../models/orderModel");

//create order
exports.createOrder=async (req,res)=>{
try{
    const cartItems=req.body;
    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
    const status="pending";
    const order=await orderModel.create({cartItems,amount,status});
    
//updating product stock
     await Promise.all(
       cartItems.map(async (item) => {
         const product = await productModel.findById(item.product._id);
         product.stock -= item.qty;
         await product.save();
       })
     );
    res.json({success:true,order});
   }catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}       
