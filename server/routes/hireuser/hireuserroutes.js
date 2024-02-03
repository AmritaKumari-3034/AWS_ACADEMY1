//packages import
const express = require("express");
const router = express.Router();
const { authenticateToken } = require('../../middleware/authenticate')


//custom imports
const CustomAsyncMiddleware = require("../../middleware/customasync");


const {
  hireregister,
  userdetails,
  getalluser,
  decodejwt,
} = require("../../controller/hirefromus/hireuser");


//POST Methods
router.route("/hireregister").post(CustomAsyncMiddleware(hireregister));
router.route("/decode").post(decodejwt);

//GET Methods
router.route("/userdetails").get(authenticateToken, userdetails);
router.route("/getall").get(getalluser);



//PUT Methods

module.exports = router;
