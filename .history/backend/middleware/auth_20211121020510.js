const ErrorHander = require('../utils/errorhander');
const catchAsyncErrors = require('./catchAsyncErrors');
const jwt = require('jsonwebtoken')

exports.isAuthenticatedUser = catchAsyncErrors( async (req, res, next) => {
  const { token} = req.cookies;
  if(!token){
    return next(new ErrorHander('Please Login to access this resource', 401));
  }
});