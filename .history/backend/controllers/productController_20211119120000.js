const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorHander');
const catchAsyncErrors = require('../middleware/catchAsyncError')

//Create Product -- Admin
exports.createProduct = async (req,res,next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success:true, product})
}

//Get All Product
exports.getAllProducts = async (req,res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products
  })
}

//Get Product Details
exports.getProductDetails = async (req,res,next) => {
  const product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHander('Product not found',404));
  }

  res.status(200).json({
    success: true,
    product
  })
}

//Update Product -- Admin
exports.updateProduct = async (req,res,next) => {
  let product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHander('Product not found',404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true,
    useFindAndModify: false
  });
  res.status(200).json({
    success: true,
    product
  })
}

//Delete Product
exports.deleteProduct = async(req,res,next) => {
  const product = await Product.findById(req.params.id);
  if(!product) {
    return next(new ErrorHander('Product not found',404));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: 'Product deleted successfully'
  })
}