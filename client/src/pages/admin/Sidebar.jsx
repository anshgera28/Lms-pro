// import { ChartNoAxesColumn, SquareLibrary } from 'lucide-react'
// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className = 'hidden lg:block w-[250px] sm:w-[300px]  space-y-8 border-gray-300 dark:border-gray-700 bg-[#f0f0f0] p-5  h-screen sticky top-0'> 
//         <div className='mt-20 space-y-4'>
//           <Link to="/admin/dashboard" className='flex items-center gap-2'>
//             <ChartNoAxesColumn size={22}/>
//             <h1>Dashboard</h1>
//           </Link>
//           <Link to="/admin/courses" className='flex items-center gap-2'>
//             <SquareLibrary size={22}/>
//             <h1>Courses</h1>
//           </Link>
//         </div>
//     <div>
//         <Outlet/>
//       </div>
//     </div>
//   )
// }

// export default Sidebar


import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { ChartNoAxesColumn, SquareLibrary } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', icon: ChartNoAxesColumn, path: '/admin/dashboard' },
    { label: 'Courses', icon: SquareLibrary, path: '/admin/courses' },
  ];

  return (
    <div className='flex h-screen'>
      {/* Sidebar navigation */}
      <div className='hidden lg:block w-[250px] sm:w-[300px] border-r border-gray-300 dark:border-gray-700 bg-[#f0f0f0] p-6'>
        <nav className='mt-20 space-y-4'>
          <ul className='space-y-2'>
            {navItems.map(({ label, icon: Icon, path }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                  >
                    <Icon size={22} />
                    <span className='font-medium'>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className='flex-1 overflow-auto pt-16'>
        <div className='p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
