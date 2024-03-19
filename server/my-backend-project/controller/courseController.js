import CoursesDetails from "../models/CoursesDetails.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Courses Register  
class courseController {
  
  static courseRegister = async (req, res) => {
    console.log(req.body);
    const { fullname, email, phone, password, courses } = req.body;
    const user = await CoursesDetails.findOne({ email: email });
    // const existiPhone = await User.findOne({phone: phone})
    // if (existiPhone){
    //   res.status(400).send({ status: "failed", message: "User already registered" });
    // }
    if (user) {
      res.send({ status: "failed", message: "User already registered" });
    } else {
      if (fullname && email && password && phone && courses) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          console.log(hashedPassword);
          const user = new CoursesDetails({
            fullname: fullname,
            email: email,
            phone: phone,
            courses: courses,
            password: hashedPassword,
          });
          await user.save();
          const saved_user = await CoursesDetails.findOne({ email: email });

          //Generate JWT token
          const token = jwt.sign(
            { userID: saved_user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );
          res.status(201).send({
            status: "success",
            message: " Register successfully",
            token: token,
          });
        } catch (error) {
          console.log(error);
          res.send({ status: "failed", message: "Unable to Register" });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    }
  };

  //Login Courses
  static courseLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await CoursesDetails.findOne({ email: email });

        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            //Generate JWT token
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            res.send({
              status: "success",
              message: "Login successful",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Email or Password does not match",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not a Registered User",
          });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to Login" });
    }
  };

  //Get User Details
  static UserCourseDetails = async (req, res) => {
    try {
      const { _id } = req.body;
      if (!_id) {
        return res
          .status(400)
          .json({ success: false, message: "Id is required" });
      }
      const coursesuser = await CoursesDetails.findOne({ _id: _id });
      if (!coursesuser) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid user" });
      }
      coursesuser.password = undefined;
      res.status(200).json({ success: true, data: coursesuser });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error,
      });
    }
  };
}

export default courseController;
