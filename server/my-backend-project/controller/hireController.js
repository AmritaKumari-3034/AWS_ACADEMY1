import HireUser from "../models/HireUser.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Register Hire
class hireController {
  static hireRegister = async (req, res) => {
    const { fullname, email, phone, password, company } = req.body;
    const user = await HireUser.findOne({ email: email });
    // const existiPhone = await User.findOne({phone: phone})
    // if (existiPhone){
    //   res.status(400).send({ status: "failed", message: "User already registered" });
    // }
    if (user) {
      res.send({ status: "failed", message: "User already registered" });
    } else {
      if (fullname && email && password && phone && company) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          console.log(hashedPassword);
          const user = new HireUser({
            fullname: fullname,
            company: company,
            email: email,
            phone: phone,
            password: hashedPassword,
          });
          await user.save();
          const saved_user = await HireUser.findOne({ email: email });

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

  //Login Hire
  static hireLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await HireUser.findOne({ email: email });

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
  static HireUserDetails = async (req, res) => {
    try {
      const { _id } = req.body;
      if (!_id) {
        return res
          .status(400)
          .json({ success: false, message: "Id is required" });
      }
      const hireuser = await HireUser.findOne({ _id: _id });
      if (!hireuser) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid user" });
      }
      hireuser.password = undefined;
      res.status(200).json({ success: true, data: hireuser });
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

export default hireController;
