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
import { useEffect } from 'react'
import { useRemoveLectureMutation } from '@/features/api/courseApi'
import { Loader2 } from 'lucide-react'
import { useGetLectureByIdQuery } from '@/features/api/courseApi'


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

    const {data:lectureData} = useGetLectureByIdQuery(lectureId)
    const lecture = lectureData?.lecture; 

    useEffect(() => {
        if(lecture){
            setLectureTitle(lecture.lectureTitle);
            setIsFree(lecture.isPreviewFree);
            setUploadVideoInfo(lecture.videoInfo);
        }
    },[lecture])




    const [ editLecture, {data, isLoading, error, isSuccess}] = useEditLectureMutation()
    const [removeLecture,{ data:removeData,isLoading:removeLoading,isSuccess:removeSuccess} ] = useRemoveLectureMutation()

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
                    setUploadVideoInfo({videoUrl:res.data.data.url, publicId:res.data.data.public_id});
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
          videoInfo : uploadVideoInfo,
         isPreviewFree : isFree,
         courseId,
         lectureId
        })
    }

    const removeLectureHandler = async() => {
        await removeLecture(lectureId)
    }

    useEffect(() => {
        if(isSuccess){
            toast.success(data.message);
        }
        if(error){
            toast.error(error.data.message);
        }
    },[isSuccess, error])

   useEffect(() => {
    if(removeSuccess){
        toast.success(removeData.message);
    }
   },[removeSuccess])

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
                <Button variant="destructive" onClick={removeLectureHandler}>{removeLoading ? "Please wait..." : "Remove Lecture"}</Button>
            </div>
        </CardHeader>
        <CardContent>
            <div>
                <Label>Title</Label>
                <Input
                  className='mt-2'
                  type='text'
                  value={lectureTitle}
                  onChange={(e) => setLectureTitle(e.target.value)}
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
                <Button disabled={isLoading} onClick={editLectureHandler}>
                    {
                        isLoading ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait...
                        </> : "Update Lecture"
                    }
                </Button>
            </div>         
        </CardContent>
    </Card>
  )
}

export default LectureTab


