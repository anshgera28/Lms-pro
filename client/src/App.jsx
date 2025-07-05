import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/login";
// import Navbar from "./components/ui/Navbar";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router-dom";
import Courses from "./pages/student/Courses";

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