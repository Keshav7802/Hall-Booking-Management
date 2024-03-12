// import React from 'react';
// import SideNavigation from './SideNavigation';
// import { Link } from 'react-router-dom';
// import '../css/LoginPage.css';

// const HomePage = () => {

//   var style = {
//     display: "none",
//   };

//   return (

//     <div style={{ display: 'flex' }}>
//       <SideNavigation />,
//       <div className="bg-neutral-100 w-full min-h-[70vh]">
//       <nav className="bg-white border-gray-200">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <div className="flex items-center flex-wrap">
//             <span className="self-center mr-4 text-md md:text-2xl font-bold whitespace-nowrap">
//               REQUESTS :{" "}
//             </span>
//             <ul className="font-medium mt-2 sm:mt-0 flex flex-wrap rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
//               <li className="flex items-center mr-2 text-sm sm:text-md">
//                 <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
//                 <div>Rejected</div>
//               </li>
//               <li className="flex items-center mr-2 text-sm sm:text-md">
//                 <div className="h-4 w-6 bg-[#37b317] mr-2"></div>
//                 <div>Approved</div>
//               </li>
//               <li className="flex items-center mr-2 text-sm sm:text-md">
//                 <div className="h-4 w-6 bg-[#fea501] mr-2"></div>
//                 <div>Pending</div>
//               </li>
//             </ul>
//           </div>

//           <div
//             className="mt-2 lg:mt-0 w-full md:block md:w-auto"
//             id="navbar-default"
//           >
//             <select
//               id="email"
//               // value={selectedStatus}
//               // onChange={(e) => setSelectedStatus(e.target.value)}
//               className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
//               required
//             >
//               <option value="all">All</option>
//               <option value="approved">Approved</option>
//               <option value="pending">Pending</option>
//               <option value="rejected">Rejected</option>
//             </select>
//           </div>
//         </div>
//       </nav>

//       </div>

//     </div>
//   );
// }

// export default HomePage;

import React from "react";
import SideNavigation from "./SideNavigation";
import { Link } from "react-router-dom";
import "../css/LoginPage.css";

const HomePage = () => {
  return (
    <div style={{ display: "flex" , height:"85vh"}}>
      <SideNavigation />
      {/* <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
            <span className="mr-4 text-md md:text-2xl font-bold whitespace-nowrap">
              REQUESTS:
            </span>
            <ul className="font-medium flex flex-wrap rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
                <div>Rejected</div>
              </li>
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#37b317] mr-2"></div>
                <div>Approved</div>
              </li>
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#fea501] mr-2"></div>
                <div>Pending</div>
              </li>
            </ul>
          </div>

          <div className="mt-2 lg:mt-0 w-full md:block md:w-auto">
            <select
              id="email"
              className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              required
            >
              <option value="all">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default HomePage;
