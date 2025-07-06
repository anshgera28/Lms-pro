import React from 'react'

const MyLearning = () => {
    const isLoading = true
  return (
    <div className='max-w-4xl mx-auto  my-24 px-4 md:px-0'>
        <h1 className='text-2xl font-bold mb-10 text-center'>MY LEARNING</h1>
        <div className='my-5'>
            {
                isLoading
            }
        </div>
    </div>
  )
}

export default MyLearning