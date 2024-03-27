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
// import React from "react";

// function HallDetailsPage({ hall }){
//   return (
//     <div>
//       <h2>{hall.name}</h2>
//       <p>ID: {hall.id}</p>
//       <p>Department: {hall.department}</p>
//       <img src={hall.picture} alt={hall.name} />
//       {/* Additional details can be displayed here */}
//     </div>
//   );
// };

// export default HallDetailsPage;

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

// import React from "react";
// import { useLocation } from "react-router-dom";

// const HallDetailsPage = () => {
//   const location = useLocation();
//   console.log("Location State: ", location.state);

//   const { hallName = "Unknown", hallDepartment = "Unknown" } = location.state;
//   console.log("Hall Name: ", hallName);
//   console.log("Hall Department: ", hallDepartment);

//   return (
//     <div>
//       <h1>Hall Details</h1>
//       <p>Name: {hallName}</p>
//       <p>Department: {hallDepartment}</p>
//       {/* Other details here */}
//     </div>
//   );
// };

// const HallDetailsPage = () => {
//   const location = useLocation();
//   const hallName = location.state?.hallName || "Unknown";
//   const hallId = location.state?.hallId || "Unknown";
//   const hallDepartment = location.state?.hallDepartment || "Unknown";

//   return (
//     <div>
//       <h1>Hall Details</h1>
//       <p>Name: {hallName}</p>
//       <p>ID: {hallId}</p>
//       <p>Department: {hallDepartment}</p>
//       {/* Other details here */}
//     </div>
//   );
// };




import React, { useState } from "react";
import SideNavigation from "./SideNavigation";
import { useLocation, useParams } from "react-router-dom";
import UserContext from "../components/UserContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import Audi from "../assets/audi.jpg";
import cs_lab from "../assets/cs_lab.jpg";
import ee_sh from "../assets/ee_sh.jpg";
import cdpc from "../assets/cdpc.jpg";
import ee_2 from "../assets/ee_2.jpg";
import m from "../assets/m3.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import senate from "../assets/senate.jpg";

const columnStyle = {
  width: "100%",
  padding: "2rem 0rem 3rem 5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
  marginTop: "0rem"
};


const HallDetailsPage = () => {
  const { userName } = useContext(UserContext);
  const { id } = useParams();

    const {state} = useLocation();
    
  const {Department, Names, ImageUrl} = state;

  if (!userName) {
    return (
      <div>
      <div style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: '20px' }}>
        User Not Logged In, Please Login First!!!
      </div>
       <Link
       className="btn btn-dark"
       to="/login"
       role="button"
       style={{ marginTop: "4rem", marginLeft: "38rem" }}
     >
       <text className="mx-4 my-3" style={{ color: "white" }}>
         <b>Login</b>
       </text>
     </Link>
     </div>
    );
    
  }


  return (
    <div style={{ display: "flex" , marginTop : "-3rem"}}>
      <SideNavigation />
      <div style={{ ...columnStyle }}>
  
          <div className="text-3xl font-semibold text-black-700 mb-5">
            {Names}
          </div>
          <div className="flex flex-wrap">
            <img
              src={ImageUrl}
              className="w-1/2 max-h-96 pr-2"
              alt="image1"
            ></img>
            
          </div>
          <div className="text-black font-bold text-2xl my-2" style={{marginBottom: "10px"}}>ABOUT :</div>
          {/* <div className="text-justify">{selectedHall.Description}</div> */}
















       
      </div>
    </div>
  );
};

export default HallDetailsPage;


