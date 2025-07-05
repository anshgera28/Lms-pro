import React from 'react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    return (

        <div className='relative bg-gradient-to-r from -blue-500 to bg-indigo-600 dark : from-gray-800 dark:to-gray-900 py-16 px-4 text-center'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-white text-4xl font-bold mb-4'>Find the best courses for your career</h1>
                <p className='text-gray-200 dark:text-gray-400 text-lg mb-8'>Discover, Learn, and Upskill with your wide range of courses.</p>

                {/* <form action="" className='items-center bg-white dark:bg-white-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
                    <input type="text"
                        className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-100 outline-none "
                        placeholder='Search for courses'
                    />
                    <Button className='rounded-full bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800'>Search</Button>
                   
          
                </form> */}
                <form
  action=""
  className="
    flex items-center 
    bg-white 
    dark:bg-white 
    rounded-full 
    shadow-lg 
    overflow-hidden 
    max-w-xl 
    mx-auto 
    mb-6 
    w-full
  "
>
  <input
    type="text"
    placeholder="Search for courses"
    className="
      flex-grow 
      bg-white 
      text-black 
      border-none 
      focus:outline-none 
      focus-visible:ring-0 
      px-6 
      py-3 
      text-sm 
      placeholder-gray-500 
      dark:placeholder-gray-500
    "
  />
  <Button
    type="submit"
    className="
      bg-blue-600 
      text-white 
      px-6 
      py-3 
      text-sm 
      font-medium 
      hover:bg-blue-700 
      dark:hover:bg-blue-700 
      transition-colors 
      rounded-none 
      rounded-full
      focus-visible:ring-0 
      border-none 
      outline-none
      shadow-none
      mr-2
    "
  >
    Search
  </Button>
</form>


            </div>
        </div>
    )
}

export default HeroSection
