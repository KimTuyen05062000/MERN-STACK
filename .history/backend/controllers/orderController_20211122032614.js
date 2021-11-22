const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorHander');
const catchAsyncErrors = require('../middleware/catchAsyncError');

// Create new Order
exports.newOrder = catchAsyncErrors( async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// Get single Order
exports.getSingleOrder = catchAsyncErrors( async (req, res, next) => {
  const order = await Oder.findById(req.params.id).populate(
    "user",
    "name email",
  )

  if(!order) {
    return next(new ErrorHander('Order not found with this Id',404));
  }
  
  res.status(200).jso({
    success: true,
    order,
  });
});