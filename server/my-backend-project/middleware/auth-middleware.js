import jwt from "jsonwebtoken";
import User from "../models/User.js";
//import CoursesDetails from "../models/CourseDetails.js";

const  checkUserAuth = async (req, res, next) => {
 const token = req.header("Authorization");

 if(!token) {
  // if yuo attempt to use an expired token, you'll receive a "401 Unauthorized" error

  return res
  .status(401)
  .json({ message: " Unauthorized HTTP request, Token not provided"});
 }
 console.log("Token from auth middleware", token);
 //Assuming token is in the format "Bearer <jwt-token>, Removing the 'Bearer prefix"
 const jwtToken = token.replace("Bearer", "").trim();
 console.log("Token from auth middleware", jwtToken);

 try {
   const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

   //Generate the token for user registration data
   const userData = await User.findOne({ email: isVerified.email }).select({
     password: 0,
   });
   console.log(userData);

  //  //Generate the token for user registration data
  //  const userData1 = await CoursesDetails.findOne({
  //    email: isVerified.email,
  //  }).select({
  //    password: 0,
  //  });
  //  console.log(userData1);

   req.token = token;
   req.user = userData;
   req.userID = User._id;

   next();
 } catch (error) {
  return res.status(401).json({message: "Unauthorized invaid token."}); 
  
 }

 
};

export default checkUserAuth;
