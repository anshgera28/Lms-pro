import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCreateLectureMutation } from '@/features/api/courseApi'
import { toast } from 'sonner'


const CreateLecture = () => {
    const [lectureTitle, setLectureTitle] = useState('');
    const params = useParams();
    const courseId = params.courseId;
    const navigate = useNavigate();


    const [createLecture, {data, isLoading, error, isSuccess}] = useCreateLectureMutation();
    const createLectureHandler = async () => {
        await createLecture({lectureTitle, courseId});
        
    };


    useEffect(() => {
        if(isSuccess){
            toast.success(data.message);
        }
        if(error){
            toast.error(error.data.message);
        }
    }, [isSuccess, error]);



     return (
           <div className='flex-1 mx-10'>
               <div className='mb-4'>
                   <h1 className='text-xl font-bold'>Lets add lecture, add some basic lecture details</h1>
                   <p className='text-sm'>Fill up the form below to add a new lecture</p>
   
               </div>
               <div className='space-y-4'>
                   <div>
                       <Label> Title</Label>
                       <Input className = "mt-2"type="text" value={lectureTitle} onChange={(e) => setLectureTitle(e.target.value)} placeholder="Enter Your Lecture Title." />
                   </div>
                   
                   <div className='flex items-center gap-2'>
                       <Button variant="outline" onClick={() => navigate(`/admin/course/${courseId}`)}>Back to course</Button>
                       <Button disabled={isLoading} onClick={createLectureHandler}>{
                           isLoading ? (
                               <>
                               <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                               please wait...
                               </>
                           ): "Create Lecture"
                       }</Button>
                   </div>
               </div>
           </div>
       )
}

export default CreateLecture