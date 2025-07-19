import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import LectureTab from './LectureTab'
const EditLecture = () => {
    const params = useParams();
    const courseId = params.courseId;
  return (
    <div className='flex-1 items-center justify-between mb-5'>
        <div className='flex items-center gap-2'>
            <Link to = {`/admin/course/${courseId}/lectures`}>
            <Button size="icon" variant="outline" className='hover:text-blue-500 rounded-full mb-3'>
                <ArrowLeft size={16}/>
            </Button>
            </Link>
            <h1 className='font-bold text-xl mb-3'>Update Your Lecture</h1>
        </div>
        <LectureTab/>
    </div>
  )
}

export default EditLecture