import React from 'react'


const CourseDetail = () => {
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
        </div>
      </div>
    </div>
  )
}

export default CourseDetail