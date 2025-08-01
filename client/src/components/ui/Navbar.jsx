

import { School } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DarkMode from '@/DarkMode'
import { Menu } from 'lucide-react'
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Link } from "react-router-dom"




import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "./dropdown-menu"


import {

   Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,

} from "./sheet"
import { toast } from "sonner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../features/api/authApi";
import { useSelector } from "react-redux";


const Navbar = () => {
    const {user: authUser, isAuthenticated} = useSelector((state) => state.auth);
    const user = authUser?.user; // Access the nested user object
    
    // console.log('Navbar - User data:', { 
    //     hasUser: !!user, 
    //     isAuthenticated,
    //     userData: user,
    //     userRole: user?.role || 'No role found',
    //     userKeys: user ? Object.keys(user) : 'No user object'
    // });
    
    // Get the avatar URL with timestamp to prevent caching issues
    const getAvatarUrl = () => {
        if (!user?.photoUrl) return "https://github.com/shadcn.png";
        // Add timestamp to prevent caching
        const timestamp = new Date().getTime();
        return `${user.photoUrl}?${timestamp}`;
    };
    
    const [logoutUser, {data, isSuccess}] = useLogoutUserMutation();
    const navigate = useNavigate();
    const handleLogout = async() => {
        await logoutUser()
    }
    useEffect(()=>{
        if(isSuccess){
            toast.success(data.message || "Logout successful");
            navigate("/login");
            
        }
    },[isSuccess])


    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 z-10'>
            <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center h-full px-4'>

                {/* Left Side - Logo + Brand */}
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <School size={30} />
                      <Link to = "/">
                      <h1 className='font-extrabold text-2xl hidden md:block'>E-Learning</h1>
                      </Link>
                    </div>
                </div>

                {/* Right Side - User Dropdown or Login/Signup */}
                <div className='flex items-center gap-8'>
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild> 
                                <Avatar className="cursor-pointer">
                                    <AvatarImage 
                                        src={getAvatarUrl()}
                                        alt={user?.name || 'User'} 
                                        onError={(e) => {
                                            e.target.src = "https://github.com/shadcn.png";
                                        }}
                                        className="object-cover w-full h-full"
                                    />
                                    <AvatarFallback className="bg-primary/10">
                                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Link to="/my-learning">My Learning</Link>
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="/profile">Edit Profile</Link>
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {user?.role === "instructor" && (
                                    <>
                                        <DropdownMenuItem>
                                            <Link to="/dashboard" className="w-full">Instructor Dashboard</Link>
                                            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                    </>
                                )}
                                <DropdownMenuItem onClick={handleLogout}>
                                    Log out
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <Button variant="outline" onClick = {()=> navigate("/login")}>Login</Button>
                            <Button onClick = {()=> navigate("/login")}>Signup</Button>
                        </div>
                    )}
                    <DarkMode />
                </div>
            </div>
            {/* mobile devices  */}
            <div className=' flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='font-extrabold text-2xl '>E-learning</h1>
                  <MobileNavbar />
            </div>


        </div>
    )
}

export default Navbar



const MobileNavbar = () => {
    const role = "instructor"

    return (
           <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" className='rounded-full bg-gray-200 hover:bg-gray-200 ' variant="outline">
                    <Menu size={20} />
                </Button>
            </SheetTrigger>
                 <SheetContent className='flex flex-col'>
                   <SheetHeader className= 'flex flex-row items-center justify-between mt-4'>
                     <SheetTitle>E-learning</SheetTitle>
                    <DarkMode/>
                </SheetHeader>
                <Separator className='mr-2'/>
                <nav className='flex flex-col space-y-4 ml-4'>
                    <span>My Learning</span>
                    <span>Edit-Profile</span>
                    <p>Logout</p>
                </nav>
                {
                    role === "instructor" && (
                     <SheetFooter>
                     <Button type="submit">Dashboard</Button>
                     <SheetClose asChild>
                       <Button variant="outline">Close</Button>
                     </SheetClose>
                   </SheetFooter>
                    )
                }

                 </SheetContent>
               </Sheet>
    )
}