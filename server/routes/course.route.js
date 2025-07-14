import express from "express";
import { createCourse, getCreatorCourses } from "../controllers/course.Controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourses);

export default router;