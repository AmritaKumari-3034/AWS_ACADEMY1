//packages import
const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../../middleware/authenticate')


//custom imports
const CustomAsyncMiddleware = require("../../middleware/customasync");


const {
  courseregister,
  userdetails,
  getalluser,
  decodejwt,
} = require("../../controller/CourseDetail/usercourses");


//POST Methods
router.route("/courseregister").post(CustomAsyncMiddleware(courseregister));
router.route("/decode").post(decodejwt);

//GET Methods
router.route("/userdetails").get(authenticateToken, userdetails);
router.route("/getall").get(getalluser);



//PUT Methods

module.exports = router;
