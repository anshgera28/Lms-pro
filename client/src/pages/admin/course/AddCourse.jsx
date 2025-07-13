import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

const AddCourse = () => {
    const navigate = useNavigate();
    return (
        <div className='flex-1 mx-10'>
            <div className='mb-4'>
                <h1 className='text-xl font-bold'>Lets add course, add some basic course details</h1>
                <p className='text-sm'>Fill up the form below to add a new course</p>

            </div>
            <div className='space-y-4'>
                <div>
                    <Label> Title</Label>
                    <Input type="text" name="courseTitle" placeholder="Enter Your Course Name." />
                </div>
                <div>
                    <Label>Category</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                <SelectItem value="nextjs">Next.js</SelectItem>
                                <SelectItem value="react">React</SelectItem>
                                <SelectItem value="node">Node.js</SelectItem>
                                <SelectItem value="python">Python</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="ai">AI</SelectItem>
                                <SelectItem value="app">App</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant="outline" onClick={() => navigate('/admin/course')}>Back</Button>
                    <Button>Create</Button>
                </div>
            </div>
        </div>
    )
}

export default AddCourse


// import * as React from "react"

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export function SelectDemo() {
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Fruits</SelectLabel>
//           <SelectItem value="apple">Apple</SelectItem>
//           <SelectItem value="banana">Banana</SelectItem>
//           <SelectItem value="blueberry">Blueberry</SelectItem>
//           <SelectItem value="grapes">Grapes</SelectItem>
//           <SelectItem value="pineapple">Pineapple</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   )
// }


// 6:49 
