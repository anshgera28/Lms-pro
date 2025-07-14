import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import CourseTab from './CourseTab'

const EditCourse = () => {
  return (
    <div className='flex-1'>
        <div className='flex items-center justify-between mb-5'>
            <h1 className='font-bold text-xl'>Add detail information regarding the course</h1>
            <Link to="lectures">
            <Button className='hover:text-blue-500 ' variant="link">Go to lectures page</Button>
            </Link>
        </div>
     <CourseTab/>
    </div>
  )
}

export default EditCourse