import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  lname: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("user", UserSchema);
export default User;

