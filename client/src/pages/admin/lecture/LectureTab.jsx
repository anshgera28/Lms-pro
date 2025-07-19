import { Card,CardHeader,CardTitle,CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

const LectureTab = () => {
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
                  placeholder='Enter Lecture Video'
                  />
            </div>
            <div className='flex items-center space-x-2 my-5'>
                <Switch id = "airplane-mode"/>
                <Label htmlFor="airplane-mode">Is this video free? </Label>
            </div>
            <div className='mt-4'>
                <Button variant="default">Update Lecture</Button>
            </div>         
        </CardContent>
    </Card>
  )
}

export default LectureTab


