

import { School } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DarkMode from '@/DarkMode'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "./dropdown-menu" 


const Navbar = () => {
    const user = false // Replace this with actual auth logic

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
                                    my-learning
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    edit profile
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
         
        </div>
    )
}

export default Navbar


