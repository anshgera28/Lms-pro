import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import RichTextEditor from '@/components/ui/RichTextEditor'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEditCourseMutation } from '@/features/api/courseApi'
import { usePublishCourseMutation } from '@/features/api/courseApi'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'
import { useGetCourseByIdQuery } from '@/features/api/courseApi'

const CourseTab = () => {
    const [input, setInput] = useState({
        title: '',
        subtitle: '',
        description: '',
        category: '',
        courseLevel: '',
        coursePrice: '',
        courseThumbnail: '',
    });
    const params = useParams();
    const courseId = params.courseId;
    const { data: courseByIdData, isLoading: courseByIdLoading, refetch } = useGetCourseByIdQuery(courseId, { refetchOnMountOrArgChange: true });

    const [publishCourse, { }] = usePublishCourseMutation();

    useEffect(() => {
        if (courseByIdData?.course) {
            const course = courseByIdData.course;
            setInput({
                title: course.courseTitle ?? "",
                subtitle: course.subTitle ?? "",
                description: course.description ?? "",
                category: course.category ?? "",
                courseLevel: course.courseLevel ?? "",
                coursePrice: course.coursePrice?.toString() ?? "",
                courseThumbnail: "",
            });
        }
    }, [courseByIdData]);
    const [preview, setPreview] = useState('');
    const navigate = useNavigate();


    const [editCourse, { data, isLoading, isSuccess, error }] = useEditCourseMutation();

    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const selectCategory = (value) => {
        setInput({ ...input, category: value });
    };


    const selectCourseLevel = (value) => {
        setInput({ ...input, courseLevel: value });
    }

    // get file
    const selectThumbnailHandler = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setInput({ ...input, courseThumbnail: file });
            const fileReader = new FileReader();
            fileReader.onloadend = () => setPreview(fileReader.result);
            fileReader.readAsDataURL(file);
        }
    }
    const updateCourseHandler = async () => {
        const formData = new FormData();
        formData.append("courseTitle", input.title);
        formData.append("subtitle", input.subtitle);
        formData.append("description", input.description);
        formData.append("category", input.category);
        formData.append("courseLevel", input.courseLevel);
        formData.append("coursePrice", input.coursePrice);
        formData.append("thumbnail", input.courseThumbnail);
        await editCourse({ formData, courseId });


    }

    useEffect(() => {
        if (isSuccess) {
            toast.success(data.message || "Course updated successfully");
            navigate(-1); // Go back to previous page
        }
        if (error) {
            toast.error(error.data.message || "Failed to update course")
        }
    }, [isSuccess, error, navigate]);
    if (courseByIdLoading) {
        return <Loader2 className=" h-4 w-4 animate-spin" />
    }

    const publishStatusHandler = async (action) => {
        try {
            const response = await publishCourse({ courseId, query: action });
            if (response?.data) {
                refetch();
                toast.success(response.data.message || "Course published successfully");
            }
        } catch (error) {
            toast.error(error.data.message || "Failed to publish or unpublish course");
        }
    }
    const isPublished = false;

    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <div>
                    <CardTitle>Basic Course Information</CardTitle>
                    <CardDescription>
                        Make changes to your courses here.Click save when you are done.
                    </CardDescription>
                </div>
                <div className='space-x-2'>
                    <Button variant="outline" onClick={() => publishStatusHandler(courseByIdData?.course.isPublished ? "false" : "true")}>
                        {
                            courseByIdData?.course.isPublished ? "Unpublish" : "Publish"
                        }
                    </Button>
                    <Button>Remove Course</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='space-y-4 mt-5'>
                    <div className='space-y-2'>
                        <Label>Title</Label>
                        <Input type="text" name="title" value={input.title} onChange={changeEventHandler} placeholder="Enter course title" />
                    </div>
                </div>
                <div className='space-y-4 mt-5'>
                    <div className='space-y-2'>
                        <Label>Subtitle</Label>
                        <Input type="text" name="subtitle" value={input.subtitle} onChange={changeEventHandler} placeholder="Enter course subtitle" />
                    </div>
                </div>
                <div className='space-y-4 mt-5'>
                    <div className='space-y-2 '>
                        <Label>Description</Label>
                        <RichTextEditor input={input} setInput={setInput} />
                    </div >
                    <div className='flex items-center gap-5 '>
                        <div>
                            <Label className='mb-2 flex items-center' >Category</Label>
                            <Select onValueChange={selectCategory}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        <SelectItem value="nextjs">Next.js</SelectItem>
                                        <SelectItem value="react">React</SelectItem>
                                        <SelectItem value="node">Node.js</SelectItem>
                                        <SelectItem value="python">Python</SelectItem>
                                        <SelectItem value="business">Business</SelectItem>
                                        <SelectItem value="marketing">Marketing</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="ai">AI</SelectItem>
                                        <SelectItem value="app">App</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className='mb-2 flex items-center'>Course Level</Label>
                            <Select onValueChange={selectCourseLevel}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a course level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Course Level</SelectLabel>
                                        <SelectItem value="Beginner">Beginner</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Advanced">Advanced</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className='mb-2 flex items-center w-fit'>Course Price</Label>
                            <Input type="number" name="coursePrice" value={input.coursePrice} onChange={changeEventHandler} placeholder="Enter course price" />
                        </div>

                    </div>
                    <div>
                        <Label className='mb-2 w-fit'>Course Thumbnail</Label>
                        <Input type="file" onChange={selectThumbnailHandler} accept="image/*" name="courseThumbnail" className='w-fit' />
                        {
                            preview && (
                                <img
                                    src={preview}
                                    alt="preview"
                                    className="w-72 h-32 object-cover rounded-md border"
                                />
                            )
                        }

                    </div>
                    <div>
                        <Button onClick={() => navigate('/admin/course')} variant="outline">Cancel</Button>
                        <Button disabled={isLoading} onClick={updateCourseHandler}>
                            {
                                isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait...
                                    </>
                                ) : (
                                    "Save"
                                )
                            }
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseTab




