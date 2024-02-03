const User = require("../models/register");
const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  //get the token
  const token = req.cookies.jwt_token;
  //check if the token exists
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }
  //verify the token
  const userId = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid token", error: err });
    }

    // Add the decoded token payload to the request object for later use.
    return decoded.id;
  });
  //check for id exist  in the database
  const userData = await User.findOne({ _id: userId });
  if (!userData) {
    return res.status(400).json({ success: false, message: "User Not found" });
  }
  req.userData = userData;
  next();
};

module.exports = {
  authenticateToken,
};
