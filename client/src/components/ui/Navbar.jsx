

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



const Navbar = () => {
    const user = true // Replace this with actual auth logic


    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 z-10'>
            <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center h-full px-4'>

                {/* Left Side - Logo + Brand */}
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <School size={30} />
                        <h1 className='font-extrabold text-2xl hidden md:block'>E-Learning</h1>
                    </div>
                </div>

                {/* Right Side - User Dropdown or Login/Signup */}
                <div className='flex items-center gap-8'>
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Link to="/my-learning">My Learning</Link>
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Edit Profile
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Log out
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    dashboard
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <Button variant="outline">Login</Button>
                            <Button>Signup</Button>
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