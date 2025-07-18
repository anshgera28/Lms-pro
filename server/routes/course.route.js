import express from "express";
import { createCourse, getCreatorCourses, editCourse } from "../controllers/course.Controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
import { getCourseById } from "../controllers/course.Controller.js";

const router = express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourses);
router.route("/:courseId").put(isAuthenticated,upload.single("thumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);

export default router;