import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import RichTextEditor from '@/components/ui/RichTextEditor'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"






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
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const isPublished = false;
    const isLoading = false;
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
                    <Button variant="outline">
                        {
                            isPublished ? "Unpublish" : "Publish"
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
                            <Label className='mb-2 flex items-center'>Category</Label>
                            <Select>
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
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a course level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Course Level</SelectLabel>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="intermediate">Medium</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
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
                        <Input type="file" accept="image/*" name="courseThumbnail" />
                    </div>
                    <div>
                        <Button onClick={() => navigate('/admin/course')} variant="outline">Cancel</Button>
                        <Button disabled={isLoading}>
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




