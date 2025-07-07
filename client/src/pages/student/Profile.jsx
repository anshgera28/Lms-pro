import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogFooter, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import Course from './Course'
import { useLoadUserQuery } from '@/features/api/authApi'







const Profile = () => {

  const{data,isLoading} = useLoadUserQuery();
console.log(data);

  const enrolledCourses = [1];
  if(isLoading){
    return <h1>Profile Loading...</h1>
  }


  return (
    <div className='max-w-4xl mx-auto my-24 px-4'>
      <h1 className='text-2xl font-bold text-center md:text-left'>Profile</h1>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
        <div className='flex flex-col items-center '>
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className='mb-2'>
            <h1 className='font-semibold text-gray-900 dark:text-gray-200  '>
              Name:
              <span className='font-normal text-gray-700 dark:text-gray-400 ml-2'> Ansh Gera</span>
            </h1>
          </div>
          <div className='mb-2'>
            <h1 className='font-semibold text-gray-900 dark:text-gray-200  '>
              Email:
              <span className='font-normal text-gray-700 dark:text-gray-400 ml-2'> anshgera@gmail.com</span>
            </h1>
          </div>
          <div className='mb-2'>
            <h1 className='font-semibold text-gray-900 dark:text-gray-200  '>
              Role:
              <span className='font-normal text-gray-700 dark:text-gray-400 ml-2'> Instructor</span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2" variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Save to apply any changes.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <label>Name:</label>
                  <Input type=" text" placeholder='Name' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <label>Profile Photo:</label>
                  <Input type="file" accept='image/*' placeholder='Profile Photo' className='col-span-3' />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {
                    isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please wait...
                      </>
                    ) : "save changes"
                  }
                </Button>
              </DialogFooter>

            </DialogContent>
          </Dialog>
        </div>
      </div>
      <h1 className='font-medium text-lg'>Courses you are enrolled in</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
        {
          enrolledCourses.length === 0 ? <h1>You have not enrolled in any courses yet</h1> : (
            enrolledCourses.map((course, index) => (
              <Course key={index} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Profile