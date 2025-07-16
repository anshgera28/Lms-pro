import { Course } from "../models/course.model.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";



export const createCourse = async (req, res) => {
    try {
        const { courseTitle, category } = req.body;
        if (!courseTitle || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const course = await Course.create({
            courseTitle,
            category,
            creator: req.id
        })
        return res.status(200).json({ message: "Course created successfully", course });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create course" });
    }
}

export const getCreatorCourses = async (req, res) => {
    try {
        const userId = req.id;
        const courses = await Course.find({ creator: userId });
        if (!courses) {
            return res.status(404).json({ message: "Courses not found", courses: [] });
        }
        return res.status(200).json({ message: "Courses fetched successfully", courses });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get courses" });
    }
}


export const editCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const {courseTitle, subtitle, description, category, courseLevel, coursePrice} = req.body;
        const thumbnail = req.file;
        let course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message:"Course not found", success:false});
        }
        let courseThumbnail;
        if (thumbnail) {
            if (course.courseThumbnail) {
                const publicId = course.courseThumbnail.split("/").pop().split(".")[0];
                await deleteMediaFromCloudinary(publicId); // delete old thumbnail
            }
            const cloudResponse = await uploadMedia(thumbnail.path);
            if (!cloudResponse || !cloudResponse.secure_url) {
                return res.status(500).json({ message: "Failed to upload thumbnail" });
            }
            courseThumbnail = cloudResponse.secure_url;
        }

        const updatedData = {
            courseTitle,
            subtitle,
            description,
            category,
            courseLevel,
            coursePrice,
            courseThumbnail:courseThumbnail?.secure_url
        }
        course = await Course.findByIdAndUpdate(courseId,updatedData,{new:true});
        return res.status(200).json({message:"Course updated successfully", course});

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to edit course" });
    }
}
