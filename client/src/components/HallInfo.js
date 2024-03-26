// import React from "react";
// import { useLocation } from "react-router-dom";
// import SideNavigation from "./SideNavigation";
// const columnStyle = {
//   width: "100%",
//   padding: "2rem 0rem 3rem 5rem",
//   backgroundColor: "#f0f0f0",
// };
// const HallInfo = () => {
//   const location = useLocation();
//   const propsData = location.state;
//   console.log(propsData);
//   const Name = "Hello";
//   const Department = " CSE";
//   return (
//     <div style={{ display: "flex", height: "85vh" , marginTop: "-2rem"}}>
//       <SideNavigation />
//       <div style={{ ...columnStyle }}>
//         <div className="text-3xl font-semibold text-green-700 mb-5">{Name}</div>
//         <div className="flex flex-wrap">
//           <img src="" className="w-1/2 max-h-96 pr-2" alt="image1"></img>
//           <img src="" className="w-1/2 max-h-96 pl-2" alt="image2"></img>
//         </div>
//         <div className="text-black font-bold text-2xl my-2">ABOUT :</div>
//         <div className="text-justify">{Department}</div>
//         <button
//           type="button"
//           className="text-black bg-sky-500 hover:bg-sky-600 w-36 h-10 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm my-5"
//         >
//           Book Hall
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HallInfo;
// HallDetailsPage.js
import React from "react";

const HallDetailsPage= ({ hall }) => {
  return (
    <div>
      <h2>{hall.name}</h2>
      <p>ID: {hall.id}</p>
      <p>Department: {hall.department}</p>
      <img src={hall.picture} alt={hall.name} />
      {/* Additional details can be displayed here */}
    </div>
  );
};

export default HallDetailsPage;

// import { useNavigate } from "react-router-dom";
// import StudentHallBookingBookingForm from "./HallBookingForm";
// import { useState } from "react";
// function HallDetailsPage({ selectedHall }) {
//   const navigate = useNavigate();
//   const [booking, setBooking] = useState(false);
//   return (
//     <>
//       {booking ? (
//         <StudentHallBookingBookingForm selectedHall={selectedHall} />
//       ) : (
//         <div className="p-10 bg-zinc-100">
//           <div className="text-3xl font-semibold text-green-700 mb-5">
//             {selectedHall.Hall_Name}
//           </div>
//           <div className="flex flex-wrap">
//             <img
//               src={selectedHall.Image1}
//               className="w-1/2 max-h-96 pr-2"
//               alt="image1"
//             ></img>
//             <img
//               src={selectedHall.Image2}
//               className="w-1/2 max-h-96 pl-2"
//               alt="image2"
//             ></img>
//           </div>
//           <div className="text-black font-bold text-2xl my-2">ABOUT :</div>
//           <div className="text-justify">{selectedHall.Description}</div>
//           <button
//             type="button"
//             className="text-white bg-sky-500 hover:bg-sky-600 w-36 h-10 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm my-5"
//             onClick={(e) => {
//               e.preventDefault();
//               const token = localStorage.getItem("authToken");
//               if (!token) navigate("/login");
//               setBooking(true);
//             }}
//           >
//             Book Hall
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default HallDetailsPage;
