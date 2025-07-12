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
import { useLoadUserQuery, useUpdateUserMutation } from '@/features/api/authApi'
import { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'sonner'













const Profile = () => {
  // State hooks
  const [name, setName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  
  // API hooks
  const { data, isLoading, refetch } = useLoadUserQuery();
  const [
    updateUser, 
    { 
      isLoading: updateUserIsLoading, 
      isError, 
      error, 
      isSuccess 
    }
  ] = useUpdateUserMutation();

  // Derived state
  const user = data?.user;

  // Effects
  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success(data?.message || "Profile updated successfully");
    }
    if (isError && error) {
      toast.error(error?.data?.message || "Failed to update profile");
    }
  }, [isSuccess, isError, error, data]);


  useEffect(() => {
    refetch();
  }, []);

  // Handlers
  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const UpdateUserHandler = async () => {
    if (!name && !profilePhoto) {
      toast.warning("No changes to save");
      return;
    }
    
    const formData = new FormData();
    if (name) formData.append("name", name);
    if (profilePhoto) formData.append("profilePhoto", profilePhoto);
    
    try {
      await updateUser(formData);
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  // Loading state
  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h1>Loading profile...</h1>
      </div>
    );
  }
  return (
    <div className='max-w-4xl mx-auto my-24 px-4'>
      <h1 className='text-2xl font-bold text-center md:text-left'>Profile</h1>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
        <div className='flex flex-col items-center '>
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src={user?.photoUrl ||"https://github.com/shadcn.png"}/>
            <AvatarFallback>CN</AvatarFallback> 
          </Avatar>
        </div>
        <div>
          <div className='mb-2'>
            <h1 className='font-semibold text-gray-900 dark:text-gray-200  '>
              Name:
              <span className='font-normal text-gray-700 dark:text-gray-400 ml-2'> {user?.name}</span>
            </h1>
          </div>
          <div className='mb-2'>
            <h1 className='font-semibold text-gray-900 dark:text-gray-200  '>
              Email:
              <span className='font-normal text-gray-700 dark:text-gray-400 ml-2'> {user?.email}</span>
            </h1>
          </div>
          <div className='mb-2'>
            <h1 className='font-semibold text-gray-900 dark:text-gray-200  '>
              Role:
              <span className='font-normal text-gray-700 dark:text-gray-400 ml-2'> {user?.role.toUpperCase()}</span>
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
                  <Input type=" text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='col-span-3' />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <label>Profile Photo:</label>
                  <Input type="file" onChange={onChangeHandler} accept='image/*' placeholder='Profile Photo' className='col-span-3' />
                </div>
              </div>
              <DialogFooter> 
                <Button disabled={updateUserIsLoading} onClick={UpdateUserHandler}>
                  {
                    updateUserIsLoading ? (
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
          user?.enrolledCourses.length === 0 ? <h1>You have not enrolled in any courses yet</h1> : (
            user?.enrolledCourses.map((course) => (
              <Course course={course} key={course._id} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Profile


