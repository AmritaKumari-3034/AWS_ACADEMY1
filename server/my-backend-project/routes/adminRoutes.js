import { Router } from "express";
import {
  getAllUsers,
  getCourseUsers,
  getHireUsers,
} from "../controller/adminController.js";

const router = Router();

router.route("/users").get(getAllUsers);
router.route("/courseusers").get(getCourseUsers);
router.route("/hireusers").get(getHireUsers);

export default router; // Export as default
