const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please Enter product Name"]
  },
  description:{
    type: String,
    required: [true, "Please Enter product Description"]
  },
  price:{
    type: Number,
    required: [true, "Please Enter product Price"]
    maxLength: [8, "Price cannot exceed 8 characters"]
  },
  rating:{
    type: Number,
    default: 0
  }
})