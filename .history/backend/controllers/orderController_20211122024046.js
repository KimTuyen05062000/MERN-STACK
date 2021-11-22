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
  })
})