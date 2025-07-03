
// // import { School } from 'lucide-react'
// // import { Button } from "@/components/ui/button" // ✅ Add this line

// // import {
// //     DropdownMenu,
// //     DropdownMenuContent,
// //     DropdownMenuItem,
// //     DropdownMenuLabel,
// //     DropdownMenuSeparator,
// //     DropdownMenuShortcut,
// //     DropdownMenuSub,
// //     DropdownMenuSubContent,
// //     DropdownMenuSubTrigger,
// //     DropdownMenuTrigger,
// //     DropdownMenuPortal,
// //     DropdownMenuGroup,
// // } from "@/components/ui/dropdown-menu"

// // const Navbar = () => {
// //     const user = true
// //     return (
// //         <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
// //             <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-2 h-full px-4'>
// //                 <div className='flex items-center gap-2'>
// //                     <School size={30} />
// //                     <h1 className='hidden md:block font-extrabold text-2xl'>E-Learning</h1>
// //                 </div>
// //                 <div>
// //                     {user ? (
// //                         <DropdownMenu>
// //                             <DropdownMenuTrigger asChild>
// //                                 <Button variant="outline">Open</Button>
// //                             </DropdownMenuTrigger>
// //                             <DropdownMenuContent className="w-56" align="start">
// //                                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
// //                                 <DropdownMenuGroup>
// //                                     <DropdownMenuItem>
// //                                         Profile
// //                                         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
// //                                     </DropdownMenuItem>
// //                                     <DropdownMenuItem>
// //                                         Billing
// //                                         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
// //                                     </DropdownMenuItem>
// //                                     <DropdownMenuItem>
// //                                         Settings
// //                                         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
// //                                     </DropdownMenuItem>
// //                                     <DropdownMenuItem>
// //                                         Keyboard shortcuts
// //                                         <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
// //                                     </DropdownMenuItem>
// //                                 </DropdownMenuGroup>
// //                                 <DropdownMenuSeparator />
// //                                 <DropdownMenuGroup>
// //                                     <DropdownMenuItem>Team</DropdownMenuItem>
// //                                     <DropdownMenuSub>
// //                                         <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
// //                                         <DropdownMenuPortal>
// //                                             <DropdownMenuSubContent>
// //                                                 <DropdownMenuItem>Email</DropdownMenuItem>
// //                                                 <DropdownMenuItem>Message</DropdownMenuItem>
// //                                                 <DropdownMenuSeparator />
// //                                                 <DropdownMenuItem>More...</DropdownMenuItem>
// //                                             </DropdownMenuSubContent>
// //                                         </DropdownMenuPortal>
// //                                     </DropdownMenuSub>
// //                                     <DropdownMenuItem>
// //                                         New Team
// //                                         <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
// //                                     </DropdownMenuItem>
// //                                 </DropdownMenuGroup>
// //                                 <DropdownMenuSeparator />
// //                                 <DropdownMenuItem>GitHub</DropdownMenuItem>
// //                                 <DropdownMenuItem>Support</DropdownMenuItem>
// //                                 <DropdownMenuItem disabled>API</DropdownMenuItem>
// //                                 <DropdownMenuSeparator />
// //                                 <DropdownMenuItem>
// //                                     Log out
// //                                     <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
// //                                 </DropdownMenuItem>
// //                             </DropdownMenuContent>
// //                         </DropdownMenu>
// //                     ) : (
// //                         <div className='flex items-center gap-2'>
// //                             <Button variant="outline">Login</Button>
// //                             <Button>Signup</Button>
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Navbar


// // components/Navbar.tsx

// import { School } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// const Navbar = () => {
//   const user = true // Change to false to see login/signup

//   return (
//     <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 z-10'>
//       <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center h-full px-4'>

//         {/* Left - Logo and Brand */}
//         <div className='flex items-center gap-2'>
//           <School size={30} />
//           <h1 className='font-extrabold text-2xl hidden md:block'>E-Learning</h1>
//         </div>

//         {/* Right - User Menu or Auth Buttons */}
//         <div>
//           {user ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="outline">Account</Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56" align="end">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuItem>
//                   Profile
//                   <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   Billing
//                   <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   Settings
//                   <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   Log out
//                   <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className='flex items-center gap-2'>
//               <Button variant="outline">Login</Button>
//               <Button>Signup</Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// components/Navbar.tsx

import { School } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

                    {/* Dashboard Link */}
                    {/* {user && (
            <a href="/dashboard" className="text-sm font-medium hover:underline">
              Dashboard
            </a>
          )} */}
                </div>

                {/* Right Side - User Dropdown or Login/Signup */}
                <div>
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
                </div>
            </div>
        </div>
    )
}

export default Navbar


