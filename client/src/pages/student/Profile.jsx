import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'




const Profile = () => {
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
              <Button size="sm"className="mt-2" variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Save to apply any changes.
                </DialogDescription>
              </DialogHeader>
              <div>

              </div>
            </DialogContent>
          </Dialog>
         </div>
      </div>
    </div>
  )
}

export default Profile