import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import Course from './Course'
import { useGetPublicCoursesQuery } from '@/features/api/courseApi'


// const courses = [1,2,3,4,5,6,7,8]

const  Courses = () => {
  const {data, isLoading, isError} = useGetPublicCoursesQuery()

  if(isError) return <p>Something went wrong</p>

  return (
    <div className='bg-gray-50'>
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-10 text-center'>Our Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
              isLoading ?Array.from({length: 8}).map((_, index) => <CourseSkeleton key={index} />):data?.courses &&data.courses.map((course,index)=>(<Course key={index} course={course}/>))
            }

            </div>
        </div>
    </div>
  )
}

export default Courses

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};

