//packages import
const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../../middleware/authenticate");

//custom imports
const CustomAsyncMiddleware = require("../../middleware/customasync");

const {
  register,
  login,
  logout,
  userdetails,
  getalluser,
  decodejwt,
} = require("../../controller/Register/registeruser");

//POST Methods
router.route("/register").post(CustomAsyncMiddleware(register));
router.route("/login").post(CustomAsyncMiddleware(login));

router.route("/decode").post(decodejwt);

//GET Methods
router.route("/logout").get(logout);
router.route("/userdetails").get(authenticateToken, userdetails);
router.route("/getall").get(getalluser);

//PUT Methods

module.exports = router;
