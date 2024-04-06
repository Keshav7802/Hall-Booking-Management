import React, { useState } from "react";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/LoginPage.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from '../components/UserContext';
import {
  faHome,
  faCalendarAlt,
  faBook,
  faInfoCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const SideNavigation = (props) => {
  const location = useLocation();
  const history = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const { userName } = useContext(UserContext);
  const { userName, logout } = useContext(UserContext); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from UserContext
    history('/login');
  };

  
  return (
    <>
    <Sidebar
      style={{
        marginTop: "5px",
        marginBottom: "5px",
        position: "static",
        top: "7vh",
        left: 0,
        width: "calc(10vw + 16px)",
        height: "calc(100vh - 14vh)",
        zIndex: 0,
        overflow: "auto",
      }}
    >
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={profileIcon}
          alt="Profile Icon"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <span style={{ fontWeight: "bold" }}>{userName}</span>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/home" />}
            className={location.pathname === "/home" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Dashboard</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/Availability" />}
            className={location.pathname === "/Availability" ? "active" : ""}
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ marginRight: "8px" }}
            />
            <span style={{ marginLeft: "12px" }}>Hall Availability</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/HallBook" />}
            className={location.pathname === "/HallBook" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faBook} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Hall Booking</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/Status" />}
            className={location.pathname === "/Status" ? "active" : ""}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ marginRight: "8px" }}
            />
            <span style={{ marginLeft: "12px" }}>Booking Status</span>
          </MenuItem>
        </div>
      </Menu>
      {props.calendar && (
        <>
          <div
            style={{
              padding: "15px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                padding: "4px",
                boxSizing: "border-box",
                width: "95%",
                marginLeft: "-0.35rem",
                // overflow: "hidden",
              }}
            >
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="custom-calendar"
                dateFormat="dd/MM/yyyy"
                calendarClassName="custom-calendar"
                popperProps={{ placement: "bottom" }}
              />
            </div>
          </div>
        </>
      )}
      {/* Logout Menu */}
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
        }}
      >
         <div className="menu-wrapper">
           <MenuItem onClick={handleLogout}> 
             <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
             <span style={{ marginLeft: "12px" }}>Logout</span>
           </MenuItem>
     </div>
      </Menu>
    </Sidebar>
    </>
  );
};

export default SideNavigation;


// import React, { useState, useContext } from "react";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link, useLocation } from "react-router-dom";
// import profileIcon from "../assets/profile.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import UserContext from '../components/UserContext';
// import {
//   faHome,
//   faCalendarAlt,
//   faBook,
//   faInfoCircle,
//   faSignOutAlt,
// } from "@fortawesome/free-solid-svg-icons";

// const SideNavigation = (props) => {
//   const location = useLocation();
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const { userName, logout } = useContext(UserContext); // Accessing logout function from UserContext

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleLogout = () => {
//     logout(); // Call the logout function from UserContext
//   };

//   return (
//     <Sidebar
//       style={{
//         marginTop: "5px",
//         marginBottom: "5px",
//         position: "static",
//         top: "7vh",
//         left: 0,
//         width: "calc(10vw + 16px)",
//         height: "calc(100vh - 14vh)",
//         zIndex: 0,
//         overflow: "auto",
//       }}
//     >
//       <div
//         style={{
//           padding: "15px",
//           borderBottom: "1px solid #eee",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={profileIcon}
//           alt="Profile Icon"
//           style={{
//             width: "30px",
//             height: "30px",
//             borderRadius: "50%",
//             marginRight: "10px",
//           }}
//         />
//         <span style={{ fontWeight: "bold" }}>{userName}</span>
//       </div>
//       <Menu
//         menuItemStyles={{
//           button: {
//             [`&.active`]: {
//               backgroundColor: "#13395e",
//               color: "#b6c8d9",
//             },
//           },
//         }}
//       >
//         {/* Menu items */}
//       </Menu>
//       {/* Calendar component */}
//       {props.calendar && (
//         <div style={{ padding: "15px", boxSizing: "border-box" }}>
//           <div style={{ padding: "4px", boxSizing: "border-box", width: "95%", marginLeft: "-0.35rem" }}>
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               className="custom-calendar"
//               dateFormat="dd/MM/yyyy"
//               calendarClassName="custom-calendar"
//               popperProps={{ placement: "bottom" }}
//             />
//           </div>
//         </div>
//       )}
//       {/* Logout Menu */}
//       <Menu
//         menuItemStyles={{
//           button: {
//             [`&.active`]: {
//               backgroundColor: "#13395e",
//               color: "#b6c8d9",
//             },
//           },
//         }}
//         style={{ position: "absolute", bottom: "30px", width: "100%" }}
//       >
//         <div className="menu-wrapper">
//           <MenuItem onClick={handleLogout}> {/* Call handleLogout function on click */}
//             <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
//             <span style={{ marginLeft: "12px" }}>Logout</span>
//           </MenuItem>
//         </div>
//       </Menu>
//     </Sidebar>
//   );
// };

// export default SideNavigation;
