// "use client"

// import './globals.css';
// import { useState, useEffect, Fragment } from 'react';
// import Link from 'next/link';
// // import SideBar from './components/SideBar';
// // import TopBar from './components/TopBar';
// import Head from 'next/head';
// import { Transition } from "@headlessui/react";

// export default function RootLayout({ children }) {
//   const [showNav, setShowNav] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [toggleScreen, setToggleScreen] = useState(false);

//   function handleResize() {
//     if (typeof window !== 'undefined' && window.innerWidth <= 640) {
//       setShowNav(false);
//       setIsMobile(true);
//     } else {
//       setShowNav(true);
//       setIsMobile(false);
//     }
//   }

//   useEffect(() => {
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);


//   return (
//     <html lang="en">
//       <Head>
//         <title>Greenie</title>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//       </Head>
//       <body>
//         {/* <TopBar showNav={showNav} setShowNav={setShowNav} /> */}
//         {/* <Transition
//           as={Fragment}
//           show={showNav}
//           enter="transform transition duration-[400ms]"
//           enterFrom="-translate-x-full"
//           enterTo="translate-x-0"
//           leave="transform duration-[400ms] transition ease-in-out"
//           leaveFrom="translate-x-0"
//           leaveTo="-translate-x-full"
//         >
//           <SideBar showNav={showNav} />
//         </Transition> */}
//         <main
//           className={`pt-8 transition-all duration-[400ms] ${showNav && !isMobile ? 'pl-56' : ''
//             }`}
//         >
//           <div className="px-4 md:px-16">
//             {/* {isMobile && ( */}
//               <div className="flex justify-between mb-4 py-6 bg-white shadow-md rounded-md">
//                 <img
//                   className="w-32 h-auto"
//                   src="/logo.png"
//                   alt="greenie"
//                   width="150"
//                   height="100"
//                 />
//                 <div className="flex px-4 space-x-3">
//                   <Link href="/">
//                     <button className={`px-4 py-2 rounded-md ${toggleScreen ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
//                       View User
//                     </button>
//                   </Link>
//                   <Link href="/create">
//                     <button className={`px-4 py-2 rounded-md ${!toggleScreen ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
//                       Create User
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             {/* )} */}
//             {children}
//           </div>

//         </main>
//       </body>
//     </html>
//   );
// }

import TopBar from './components/TopBar';
import './globals.css';

export const metadata = {
  title: 'Greenie',
  description: 'A website build as part of assignment',
}

export default function RootLayout({children,}) {

  return (
    <html lang="en">
      <body>
        <TopBar />
        <main className='px-4 md:px-16 lg:px-16'>
        {children}
        </main>
        </body>
    </html>
  )
}