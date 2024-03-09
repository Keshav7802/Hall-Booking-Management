// import React from "react";
// import logo from "../assets/iitlogo.jpg";


// const Header = (props) => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid flex">
//           <h5 className="text-start" style={{ color: "white" }}>
//             <img
//               src={logo}
//               className="mx-3"
//               alt=""
//               width={"40vw"}
//               height={"40vh"}
//             />
//             Indian Institute of Technology Ropar
//           </h5>
//           <h5 className="text-end" style={{ color: "white" }}>
//             Campus Hall Booking
//           </h5>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React from "react";
import logo from "../assets/iitlogo.png";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex align-items-center">
          <h5 className="text-start" style={{ color: "white", display: 'flex', alignItems: 'center' }}>
            <img
             src={logo}
              //className="mx-3"
             alt=""
              width={"60vw"}
              height={"60vh"}
              
            />
            <div style={{marginLeft: "10px", textDecoration : "bold"}}>Indian Institute of Technology Ropar</div>
             
          </h5>
          <h2 className="text-end" style={{ color: "white" }}>
            Campus Hall Booking
          </h2>
        </div>
      </nav>
    </>
  );
};

export default Header;

