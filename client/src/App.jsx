import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/login";
// import Navbar from "./components/ui/Navbar";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse"; 
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";

const appRouter = createBrowserRouter([ 
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:
                <>
                <HeroSection/>
                <Courses/>
               
                </>
            },
            {
              path:"/login",
              element:<Login/>
            },
            {
              path:"/my-learning",
              element:<MyLearning/>
            },
            {
              path:"/profile",
              element:<Profile/>
            },
            // Admin routes start from here
            {
                path:"/admin",
                element:<Sidebar/>,
                children:[
                    {
                        path:"dashboard",
                        element:<Dashboard/>
                    },
                    {
                        path:"course",
                        element:<CourseTable/>
                    },
                    {
                        path:"course/create",
                        element:<AddCourse/>
                    },
                    {
                        path:"course/:courseId",
                        element:<EditCourse/>
                    },
                    {
                        path:"course/:courseId/lectures",
                        element:<CreateLecture/>
                    },
                    {
                        path:"course/:courseId/lectures/:lectureId",
                        element:<EditLecture/>
                    }
                ]
            }
        ]

    }
])


function App() {
  return (
    <main className="min-h-screen p-4">
      <RouterProvider router={appRouter}/>
    </main>
  );
}
 
export default App;