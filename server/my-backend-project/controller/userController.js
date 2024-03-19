import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class userController {
  static userRegister = async (req, res) => {
    try {
      const { fname, lname, email, phone, password } = req.body;
      const user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ status: "failed", message: "User already registered" });
      }
      if (!fname || !lname || !email || !password || !phone) {
        return res
          .status(400)
          .json({ status: "failed", message: "All fields are required" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        fname,
        lname,
        email,
        phone,
        password: hashedPassword,
      });
      await newUser.save();
      const token = jwt.sign(
        { userID: newUser._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "5d" }
      );
      res.status(201).json({
        status: "success",
        message: "Register successfully",
        token: token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "failed", message: "Unable to Register" });
    }
  };

  //UserLogin
  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
        return res
          .status(400)
          .json({ status: "failed", message: "You are not a Registered User" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          status: "failed",
          message: "Invalid Email or Password",
        });
      }
      const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "5d",
      });
      res
        .status(200)
        .json({ status: "success", message: "Login successful", token: token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "failed", message: "Unable to Login" });
    }
  };

  //User logout
  static userlogout = async (req, res) => {
    try {
      res.cookie("jwt_token", "", {
        expires: new Date(0),
        httpOnly: false,
        withCredentials: true,
      });

      return res.status(200).json({
        success: true,
        message: "Logout successful",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Logout Failed",
        error: error,
      });
    }
  };

  //decode the response
  static decodejwt = async (req, res) => {
    
  const { token } = req.body;
  // decode
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      data: decoded,
    });
  });
};


  //Change the password
  static changePassword = async (req, res) => {
    try {
      const { password } = req.body;
      if (!password) {
        return res
          .status(400)
          .json({ status: "failed", message: "Not a valid password" });
      }
      const salt = await bcrypt.genSalt(10);
      const newhashedPassword = await bcrypt.hash(password, salt);
      // Update the password in the database with newhashedPassword
      // Return a success response
      res
        .status(200)
        .json({ status: "success", message: "Password changed successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: "failed", message: "Unable to change password" });
    }
  };

  //Get user Details
  static UserDetails = async (req, res) => {
    console.log(req.body);
    try {
      const { _id } = req.body;
      if (!_id) {
        return res
          .status(400)
          .json({ success: false, message: "Id is required" });
      }
      const user = await User.findOne({ _id: _id });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid user" });
      }
      user.password = undefined;
      res.status(200).json({ success: true, data: user });
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

export default userController;
