import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 bg-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className='relative'>
            <img className='w-full h-36 object-cover rounded-t-lg' src="/image.webp" alt="course" />
        </div> 
        <CardContent>
           <h1>Nextjs Complete Course</h1> 
        </CardContent>
    </Card>
  )
}
export default Course 
