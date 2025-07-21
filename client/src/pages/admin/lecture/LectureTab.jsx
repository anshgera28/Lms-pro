import { Card,CardHeader,CardTitle,CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Progress } from '@/components/ui/progress'
import { useEditLectureMutation } from '@/features/api/courseApi'
import { useParams } from 'react-router-dom'


const MEDIA_API = "http://localhost:8080/api/v1/media";

const LectureTab = () => {


    const [lectureTitle,setLectureTitle] = useState("")
    const [uploadVideoInfo,setUploadVideoInfo] = useState(null)
    const [isFree,setIsFree] = useState(false)
    const [mediaProgress,setMediaProgress] = useState(false)
    const [uploadProgress,setUploadProgress] = useState(false)
    const  [btnDisabled,setBtnDisabled] = useState(true)
    const params = useParams();
    const {courseId,lectureId} = params;

    const [ editLecture, {data, isLoading, error, isSuccess}] = useEditLectureMutation()

    const fileChangeHandler = async(e) => {
        const file = e.target.files[0];
        if(file){
            const formData = new FormData();
            formData.append("file",file);
            setMediaProgress(true);
            try{
                const res = await axios.post(`${MEDIA_API}/upload-video`, formData, {
                   onUploadProgress: ({loaded,total}) => {
                       setUploadProgress(Math.round((loaded / total) * 100));
                   }
                })
                if(res.data.success){
                    setUploadVideoInfo({videUrl:res.data.data.url, publicId:res.data.data.public_id});
                    setBtnDisabled(false);
                    toast.success(res.data.message);
                }

            }catch(error){
                console.log(error);
                toast.error("Video upload failed");
            }finally{
                setMediaProgress(false);
            }
        }
    }

    const editLectureHandler = async() => {
        await editLecture({
          lectureTitle,
         uploadVideoInfo,
         isFree,
         courseId,
         lectureId
        })
    }

    useEffect(() => {
        if(isSuccess){
            toast.success(data.message);
        }
        if(error){
            toast.error(error.data.message);
        }
    },[isSuccess, error])

  return (
    <Card>
        <CardHeader className='flex justify-between '>
            <div>
                <CardTitle>
                    Edit Lecture
                </CardTitle>
                <CardDescription>
                    Edit your lecture details
                </CardDescription>
            </div>
            <div className='flex items-center gap-2'>
                <Button variant="destructive">Remove Lecture</Button>
            </div>
        </CardHeader>
        <CardContent>
            <div>
                <Label>Title</Label>
                <Input
                  className='mt-2'
                  type='text'
                  placeholder='Enter Lecture Title'
                  />
            </div>
            <div className='my-5'>
                <Label>Video <span className='text-red-500'>*</span></Label>
                <Input
                  className='mt-2 w-fit'
                  type='file'
                  accept='video/*'
                  onChange={fileChangeHandler}
                  placeholder='Enter Lecture Video'
                  />
            </div>
            <div className='flex items-center space-x-2 my-5'>
                <Switch id = "airplane-mode"/>
                <Label htmlFor="airplane-mode">Is this video free? </Label>
            </div>
            {
                mediaProgress ? (
                    <div className='my-4'>
                        <Progress value={uploadProgress} />
                        <p>{uploadProgress}% uploaded</p>
                    </div>
                ) : null
            }
            <div className='mt-4'>
                <Button onClick={editLectureHandler}>Update Lecture</Button>
            </div>         
        </CardContent>
    </Card>
  )
}

export default LectureTab


