const UserCoursesDetails = require("../../models/usercoursesdetail");
const jwt = require("jsonwebtoken");

/** POST: http://localhost:8080/api/v1/user/register
 * @param : {
  "name" : "Amrita Kumari",
  "password" : "Amu@3030",
  "email": "amrita09876543211@gmail.com",
  "phone": 9608886504,
}
*/
const courseregister = async (req, res) => {
  try {
    //get the user data from request body
    const { name, email, phone, password } = req.body;
    if (!(name && email && password && phone)) {
      if (!name) {
        return res
          .status(400)
          .json({ success: false, message: "name is required" });
      }
      if (!email) {
        return res
          .status(400)
          .json({ success: false, message: "email is required" });
      }
      if (!password) {
        return res
          .status(400)
          .json({ success: false, message: "password is required" });
      }
      if (!phone) {
        return res
          .status(400)
          .json({ success: false, message: "phone is required" });
      }
    }
    //check for existing email and phone no in the database
    const existingEmail = await UserCoursesDetails.findOne({ email: email });
    const existingPhone = await UserCoursesDetails.findOne({ phone: phone });
    if (existingPhone && existingEmail) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Email and Phone Number is already registered",
        });
    }
    if (existingEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered" });
    }
    if (existingPhone) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Phone Number is already registered",
        });
    }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await UserCoursesDetails.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
    });
    console.log(user.id);
    //generate a token for user and send it
    const token = jwt.sign(
      { id: user.id }, //payload of user
      process.env.JWT_SECRET, //secret
      {
        expiresIn: "2h",
      }
    );

    // user.token = token;
    user.password = undefined;
    res.cookie("jwt_token", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    });
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

/** GET: http://localhost:8080/api/v1/user/userdetails
 * @param : {
  "email": "surajlal3838@gmail.com"
}
*/
const userdetails = async (req, res) => {
  try {
    //check data for email in request
    const { _id } = req.userData;
    if (!_id) {
      return res.status(400).json({
        success: false,
        message: "Id is required",
      });
    }

    //check for existing email in the database
    const user = await UserCoursesDetails.findOne({ _id: _id });
    if (!user) {
      return res.status(400).json({ success: false, message: "invalid user" });
    }
    user.password = undefined;
    //send the user data
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};
/** POST: http://localhost:8080/api/v1/user/decode
 * @param : {
 *   "token": ""
 * }
 */
const decodejwt = (req, res) => {
  const { token } = req.body;

  // decode
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      data: decoded,
    });
  });
};

const getalluser = async (req, res) => {
  try {
    const user = await UserCoursesDetails.find({});
    res.status(200).json({
      success: true,
      message: "Successfull Response",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

module.exports = {
  courseregister,
  decodejwt,
  userdetails,
  getalluser,
};
