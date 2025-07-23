import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'



const Course = ({course}) => {
    return (
        <Card className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className='relative'>
                <img className='w-full h-36 object-cover rounded-t-lg ' src={course.courseThumbnail} alt="course" />
            </div>
            <CardContent className='px-5 py-4 space-y-3'>
                <h1 className='font-bold truncate hover:underline  text-lg truncate'>{course.courseTitle}</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={course.creator?.photoUrl || "https://github.com/shadcn.png"} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className='font-medium text-sm'>{course.creator?.name}</h1>
                    </div>
                    <Badge className= 'bg-blue-500 text-white rounded-full px-2 py-1 text-xs '>
                        {course.courseLevel}
                    </Badge>
                </div>
                <div className='font-bold text-lg'>
                    <span>₹{course.coursePrice}</span>
                </div>
            </CardContent>
        </Card>
    )
}
export default Course
