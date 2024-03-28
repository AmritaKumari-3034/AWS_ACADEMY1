// models/StudentRegistration.js
import mongoose from "mongoose";

const UserInterface = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
  week: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  // other fields you may have
});

const StudentRegistration = mongoose.model(
  "StudentRegistration",
  UserInterface
);

export default StudentRegistration;
