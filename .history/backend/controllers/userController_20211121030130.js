const ErrorHander = require('../utils/errorHander');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');

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
  sendToken(user, 201, res);
});

//Login User
exports.loginUser = catchAsyncErrors( async (req, res, next) => {
  const {email, password} = req.body;

  //checking if user has given password and email both
  if(!email || !password) {
    return next(new ErrorHander('Please Enter Email & Password', 400));
  }
  const user = await User.findOne({email}).select('+password');
  if(!user){
    return next(new ErrorHander('Invalid email or password', 401));
  }
    const isPasswordMatched = user.comparePassword(password);
    if(!isPasswordMatched){
      return next(new ErrorHander('Invalid email or password', 401));
    }
    sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncErrors( async (req, res, next) => {
  res.cookie('token', null,{
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'Logged Out'
  })
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors( async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if(!user) {
    return next(new ErrorHander('User not found', 404));
  }
})