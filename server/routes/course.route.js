import express from "express";
import { createCourse, getCreatorCourses, editCourse, getPublicCourses } from "../controllers/course.Controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
import { getCourseById, createLecture, getCourseLecture ,getLectureById,editLecture,removeLecture, tooglePublishCourse} from "../controllers/course.Controller.js";


const router = express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/published-courses").get(isAuthenticated,getPublicCourses);
router.route("/").get(isAuthenticated,getCreatorCourses);
router.route("/:courseId").put(isAuthenticated,upload.single("thumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);
router.route("/:courseId/lecture").post(isAuthenticated,createLecture);
router.route("/:courseId/lecture").get(isAuthenticated,getCourseLecture);
router.route("/lecture/:lectureId").get(isAuthenticated,getLectureById);
router.route("/:courseId/lecture/:lectureId").post(isAuthenticated,editLecture);
router.route("/lecture/:lectureId").delete(isAuthenticated,removeLecture);
router.route("/:courseId").patch(isAuthenticated,tooglePublishCourse);

export default router;