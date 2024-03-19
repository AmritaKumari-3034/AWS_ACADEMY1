import express from 'express';
const router = express.Router();
import checkUserAuth from '../middleware/auth-middleware.js';
import userController from '../controller/userController.js';
import courseController from '../controller/courseController.js';
import hireController from '../controller/hireController.js';

//import UserDetails from '../controller/userDetails.js';

//Public User routes
router.post('/register', userController.userRegister)
router.post("/login", userController.userLogin);
router.get("/userdetails", userController.UserDetails);
router.get("/logout", userController.userlogout);
router.post("/decode", userController.decodejwt);




//Public Courses routes
router.post("/courseregister", courseController.courseRegister);
router.post("/courselogin", courseController.courseLogin);
router.get("/usercoursedetails", courseController.UserCourseDetails);

//Public Hire routes
router.post("/hireregister", hireController.hireRegister);
router.post("/hirelogin", hireController.hireLogin);
router.get("/hireuserdetails", hireController.HireUserDetails);


//Protected User routes
router.post("/changepassword", userController.changePassword);


//Routes level middleware- to protected Routes
router.use('/changepassword', checkUserAuth)


export default router