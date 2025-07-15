import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle,CardDescription, CardContent } from '@/components/ui/card'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import RichTextEditor from '@/components/ui/RichTextEditor'





const CourseTab = () => {
    const isPublished = false;
  return (
    <Card>
        <CardHeader className ="flex flex-row justify-between">
          <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes to your courses here.Click save when you are done.
          </CardDescription>
          </div>
          <div className='space-x-2'>
            <Button variant="outline">
                {
                    isPublished ? "Unpublish" : "Publish"
                }
            </Button>
            <Button>Remove Course</Button>
          </div>
        </CardHeader>
        <CardContent>
            <div className='space-y-4 mt-5'>
              <div className='space-y-2'>
                <Label>Title</Label>
                <Input type="text" name="title" placeholder="Enter course title" />
                </div>  
            </div>
            <div className='space-y-4 mt-5'>
              <div className='space-y-2'>
                <Label>Subtitle</Label>
                <Input type="text" name="subtitle" placeholder="Enter course subtitle" />
                </div>  
            </div>
            <div className='space-y-4 mt-5'>
              <div className='space-y-2'>
                <Label>Description</Label>
               <RichTextEditor />
                </div>  
            </div>
        </CardContent>
    </Card>
  )
}

export default CourseTab