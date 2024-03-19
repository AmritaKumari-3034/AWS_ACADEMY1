import jwt from "jsonwebtoken";
import User from "../models/User.js";




var checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Brearer")) {
    try {
      //Get Token from header
      token = authorization.split(' ')[1];
      //console.log('Token', token);
      //console.log('Authorization', authorization);

      //Verify Token
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(User)

      //Get User from Token
      req.user = await User.findById(userID).select
      ("-password")
      console.log(req.user);
      next();
    } catch (error) {
      consolog.log(error);
      res.status(401).send({ status: "failed", message: " Unauthorized User" });
    }
    if (!token) {
      res
        .status(401)
        .send({ status: "failed", message: " Unauthorized User, No Token" });
    }
  }
};

export default checkUserAuth;
