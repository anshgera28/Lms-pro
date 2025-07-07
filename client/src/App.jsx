import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/login";
// import Navbar from "./components/ui/Navbar";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";

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