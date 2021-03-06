const ErrorHander = require('../utils/errorHander');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const User = require('../models/userModel');

// Register a User
exports.registerUser = catchAsyncErrors( async(req, res, next) => {
  const {name, email, password} = req.body;

  const user = await User.create({
    name, email, password,
    avatar:{
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  })
});

//Login User
exports.loginUser = catchAsyncErrors( async (req, res, next) => {
  const {email, password} = req.body;

  //checking if user has given password and email both
  if(!email || !password) {
    return next(new ErrorHander('Please Enter Email & Password', 400))
  }
})