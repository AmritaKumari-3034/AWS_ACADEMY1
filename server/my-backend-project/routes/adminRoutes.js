import { Router } from "express";
import {
  getAllUsers,
  getCourseUsers,
  getHireUsers,
} from "../controller/adminController.js";
import { deleteUserById } from "../controller/adminController.js"; // Use curly braces for named exports
import { deleteCoursesById } from "../controller/adminController.js"; 
import { getUserById, updateUserById } from "../controller/adminController.js";
import checkUserAuth from "../middleware/auth-middleware.js";
import getRegistrationCountByPeriod from "../controller/UserInterfaceController.js";

const router = Router();

//Registered user data filtered
router.route("/users").get(checkUserAuth, getAllUsers);
router
  .route("/users/userinterface")
  .get(checkUserAuth, getRegistrationCountByPeriod);

router.route("/users/:id").get(checkUserAuth, getUserById); //update  user by id
router.route("/users/update/:id").patch(checkUserAuth, updateUserById);
router.route("/users/delete/:id").delete(checkUserAuth, deleteUserById); //delete user


//Courses Registerd user data filtered
router.route("/courseusers").get(checkUserAuth, getCourseUsers);
router.route("/courseusers/delete/:id").delete(checkUserAuth, deleteCoursesById); //delete course


router.route("/hireusers").get(checkUserAuth, getHireUsers);



export default router; // Export as default
