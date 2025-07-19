import React from 'react'

const Lecture = ({lecture,courseId,index}) => {
  return (
    <div className='flex items-center justify-between bg-[#F7F9FA] dark:bg-[#1E1E1E] px-4 py-2 rounded-md my-2'>
        <h1 className='font-bold text-gray-800 dark:text-gray-200'>{lecture.lectureTitle}</h1>
    </div>
  )
}

export default Lecture