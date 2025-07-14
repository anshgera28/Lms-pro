// import { Button } from '@/components/ui/button'
// import React from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { useNavigate } from "react-router-dom"
// import { useGetCreatorCoursesQuery } from "@/features/api/courseApi"
// import { Badge, Edit } from "lucide-react"







const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

// const CourseTable = () => {


//   const navigate = useNavigate();
//   const {data, isLoading} = useGetCreatorCoursesQuery();

//   if(isLoading) return <h1>Loading...</h1>
 
  
//   return (
//     <div>
//       <Button onClick={() => navigate('/admin/course/create')}>Create a new course</Button>
//       <Table>
//         <TableCaption>A list of your recent Courses.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Price</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Title</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//       <TableBody>
//       {data?.courses.map((course) => (
//           <TableRow key={course._id}>
//             <TableCell className="font-medium">{course?.coursePrice || "Free"}</TableCell>
//             <TableCell><Badge className="bg-green-500"> {course?.isPublished ? "Published" : "Draft"}</Badge></TableCell>
//             <TableCell>{course?.courseTitle}</TableCell>
//             <TableCell className="text-right">{course.price}</TableCell>
//             <TableCell className="text-right">
//                 <Button size="sm" variant="ghost"><Edit/></Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//     </div>
//   )
// }

// export default CourseTable


import { useNavigate } from 'react-router-dom';
import { useGetCreatorCoursesQuery } from '@/features/api/courseApi'; 
import { Button } from '@/components/ui/button';
import { Table, TableCaption, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Edit } from 'lucide-react';

const CourseTable = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCreatorCoursesQuery();

  if (isLoading) return <h1 className="text-center text-xl font-semibold mt-10">Loading...</h1>;

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Your Courses</h2>
        <Button onClick={() => navigate('/admin/course/create')}>Create New Course</Button>
      </div>

      <Table>
        <TableCaption className="text-sm text-muted-foreground mt-2">A list of your recent courses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Price</TableHead>
            <TableHead className="w-[120px]">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right w-[100px]">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.courses.map((course) => (
            <TableRow key={course._id}>
              <TableCell className="font-medium">
                {course?.coursePrice ? `$${course.coursePrice}` : 'Free'}
              </TableCell>
              <TableCell>
                <Badge className={course?.isPublished ? 'bg-green-500' : 'bg-black'}>
                  {course?.isPublished ? 'Published' : 'Draft'}
                </Badge>
              </TableCell>
              <TableCell className="truncate max-w-xs">{course?.courseTitle}</TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;





