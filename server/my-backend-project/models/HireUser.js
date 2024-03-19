import mongoose from "mongoose";

const HireUserSchema = new mongoose.Schema({
  fullname: {
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
  company: {
    type: String,
    required: true,
  },
});

const HireUser = mongoose.model("hireuser", HireUserSchema);

export default HireUser;
