import { Course } from "../models/course.model.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";
import { Lecture } from "../models/lecture.model.js";




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
            // Delete the temporary file from uploads folder
            if (thumbnail.path) {
                const fs = await import('fs');
                try {
                    fs.unlinkSync(thumbnail.path);
                } catch (err) {
                    console.error('Failed to delete temp file:', err);
                }
            }
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



export const getCourseById = async (req, res) => {
    try{
        const {courseId} = req.params;
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        return res.status(200).json({message:"Course fetched successfully", course});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to get course" });
    }
}

export const createLecture = async (req, res) => {
    try{
        const {lectureTitle} = req.body;
        const {courseId} = req.params;
        if(!lectureTitle || !courseId){
            return res.status(400).json({message:"Lecture title is required"});
        }
        const lecture = await Lecture.create({
            lectureTitle
        })
        const course = await Course.findById(courseId);
        if(course){
            course.lectures.push(lecture._id);
            await course.save();
            return res.status(200).json({message:"Lecture created successfully", lecture});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to create lecture" });
    }
}

export const getCourseLecture = async (req, res) => {
    try{
        const {courseId} = req.params;
        const course = await Course.findById(courseId).populate("lectures");
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        return res.status(200).json({message:"Course fetched successfully", lectures:course.lectures});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to get lecture" });
    }
}

// hold for a minute
export const editLecture = async (req, res) => {
    try{
        const {lectureTitle,videoInfo,isPreviewFree} = req.body;
        const{ courseId,lectureId} = req.params;
        const lecture = await Lecture.findById(lectureId);
        if(!lecture){
            return res.status(404).json({message:"Lecture not found"});
        }
        if(lectureTitle) lecture.lectureTitle = lectureTitle;
        if(videoInfo?.videoUrl) lecture.videoUrl = videoInfo.videoUrl;
        if(videoInfo?.publicId) lecture.publicId = videoInfo.publicId;
        lecture.isPreviewFree = isPreviewFree;
        await lecture.save();

        const course = await Course.findById(courseId);
         if(course && !course.lectures.includes(lecture._id)){
            course.lectures.push(lecture._id);
            await course.save();
         }
        return res.status(200).json({message:"Lecture updated successfully", lecture});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to edit lecture" });
    }
}

export const removeLecture = async (req, res) => {
    try {
        const { courseId, lectureId } = req.params;

        // Delete lecture document
        const lecture = await Lecture.findByIdAndDelete(lectureId);
        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found" });
        }

        // Delete media from Cloudinary
        if (lecture.publicId) {
            await deleteMediaFromCloudinary(lecture.publicId);
        }

        // Remove lecture reference from course
        const course = await Course.findOne({ lectures: lectureId });
        if (course) {
            await Course.updateOne(
                { _id: course._id },
                { $pull: { lectures: lectureId } }
            );
        }

        return res.status(200).json({ message: "Lecture removed successfully", lecture });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to remove lecture" });
    }
};


export const getLectureById = async (req, res) => {
    try{
        const {lectureId} = req.params;
        const lecture = await Lecture.findById(lectureId);
        if(!lecture){
            return res.status(404).json({message:"Lecture not found"});
        }
        return res.status(200).json({message:"Lecture fetched successfully", lecture});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to get lecture by id" });
    }
}
  
// public unpublish 

export const tooglePublishCourse = async (req, res) => {
    try{
        const {courseId} = req.params;
        const {publish} = req.query;
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({message:"Course not found"});
        }
        course.isPublished = publish === "true";
        await course.save();
        const statusMessage = course.isPublished ? "published" : "unpublished";
        return res.status(200).json({message:`Course ${statusMessage}`, course});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to toggle publish course" });
    }
} 

export const getPublicCourses = async (_, res) => {
    try{
        const courses = await Course.find({isPublished:true}).populate({path:"creator",select:"name photoUrl"});
        if(!courses){
            return res.status(404).json({message:"Courses not found"});
        }
        return res.status(200).json({message:"Courses fetched successfully", courses});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Failed to get public courses" });
    }
}