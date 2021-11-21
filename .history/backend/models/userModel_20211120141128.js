const mongoose = require('mongoose');
cons validator = require('validator');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    require: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"]
  },
  email:{
    type: String,
    require: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"]
  },
  password:{
    type: String,
    require: [true, "Please Enter Your Password"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false
  },
  avtar:{
    {
      
    }
  }
})