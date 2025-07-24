

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import { Lock, PlayCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import BuyCourseButton from '@/components/ui/BuyCourseButton'






const CourseDetail = () => {
  const PurchasedCourse = false
  return (
    <div className='mt-20 space-y-5 '>
      <div className='bg-[#2D2F31] text-white p-4 md:p-3'>
        <div className='max-w-7xl mx-auto p-y-8 px-4 md:px-8 flex flex-col gap-2'>
          <h1 className='text-2xl font-bold md:text-3xl'>Course Title</h1>
          <p className='text-base md:text-lg'>Course subtitle</p>
          <p>created By{""}<span className='text-[#C0C4FC] underline italic'> - John Doe</span></p>
          <div className='flex items-center gap-2 text-sm'>
            <p>Last updated 11-11-2025</p>
          </div>
          <p>Students enrolled: 10</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10'>
        <div className='w-full lg:w-1/2 space-y-5'>
          <h1 className='font-bold text-xl md:text-2xl'> Description</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perspiciatis provident dicta ducimus quia! Nemo asperiores non, perspiciatis aspernatur eos eveniet sequi omnis est soluta, cum maiores incidunt unde iste.</p>
          <Card>
            <CardHeader>
              <CardTitle>
                Course Content
              </CardTitle>
              <CardDescription>
                4 Lectures
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              {
                [1, 2, 3, 4].map((_, index) => (
                  <div key={index} className='flex items-center gap-3 text-sm'>
                    <span>
                      {

                        false ? (<PlayCircle size={14} />) : <Lock size={14} />

                      }
                    </span>
                    <p>lecture title</p>
                  </div>
                ))
              }

            </CardContent>
          </Card>
        </div>
        <div className='w-full lg:w-1/3'>
        <Card>
          <CardContent className='p-4 flex flex-col'>
            <div className = 'w-full aspect-video mb-4'>
              video ayga
            </div>
             <h1>Lecture Title</h1>
             <Separator className='my-2'/>
             <h1 className='text-lg md:text-xl font-semibold'>Course Price</h1>
          </CardContent>
          <CardFooter className=' flex justify-center p-4'>
            {
              PurchasedCourse ? (
                <Button className = "w-full">Continue Course</Button>
              ):(
               <BuyCourseButton/>
              )
            }
          </CardFooter>
        </Card> 
            
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
