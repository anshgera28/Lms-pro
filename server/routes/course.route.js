import express from "express";
import { createCourse, getCreatorCourses, editCourse } from "../controllers/course.Controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourses);
router.route("/:courseId").put(isAuthenticated,upload.single("thumbnail"),editCourse);

export default router;