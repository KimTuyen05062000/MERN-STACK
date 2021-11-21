import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';
import { hash } from 'bcrypt';

const userSchema = new Schema({
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
    validate: [isEmail, "Please Enter a valid Email"]
  },
  password:{
    type: String,
    require: [true, "Please Enter Your Password"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false
  },
  avatar:{
      public_id:{
        type: String,
        required: true
      },
      url:{
        type: String,
        required: true
      }
    },
    role:{
      type: String,
      default: 'user',
    },

    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next();
  }
  this.password = await hash(this.password,10)

})


export default model('User', userSchema)