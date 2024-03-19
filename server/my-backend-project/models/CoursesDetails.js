import mongoose from "mongoose";

const CoursesDetailSchema = new mongoose.Schema({
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
  courses: {
    type: String,
    required: true,

  },
});

const CoursesDetails = mongoose.model("coursesuser", CoursesDetailSchema);

export default CoursesDetails;
