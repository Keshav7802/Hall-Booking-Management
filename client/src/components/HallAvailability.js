import React, { useState } from "react";
import HallNavigation from "./SideNavigation";
import CalendarMain from "./Calendar";
import "../css/LoginPage.css";
import UserContext from "../components/UserContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";

// import Select, { components } from "react-select";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const containerStyle = {
  display: "flex",
  marginTop: "-3em",
};

const sidebarStyle = {
  position: "fixed",
  backgroundColor: "#f0f0f0",
  width: "10%",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "250px",
  width: "90%",
  boxSizing: "border-box",
  padding: "2rem 1rem 0rem 1rem",
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  marginTop: "-1rem",
  marginLeft: "1rem",
};

const headingsContainerStyle = {
  display: "flex",
  fontWeight: "600",
  marginTop: "1rem",
  marginLeft: "1rem",
  flexWrap:"wrap",
};

const headingStyle = {
  fontSize: "15px",
  marginRight: "2rem", // Adjusted margin for spacing between headings
};

const squareBlockStyle = {
  width: "15px",
  height: "15px",
  marginRight: "0.6rem",
  marginTop: "0.27rem",
};

const blueSquare = {
  ...squareBlockStyle,
  backgroundColor: "blue",
};

const redSquare = {
  ...squareBlockStyle,
  backgroundColor: "red",
};

const greySquare = {
  ...squareBlockStyle,
  backgroundColor: "grey",
};

// const customSelectStyles = {
//   container: (provided) => ({
//     ...provided,
//     width: "400px", // Adjust the width as needed
//     marginLeft: "23rem",
//     marginTop: "-3rem",
//   }),
//   control: (provided) => ({
//     ...provided,
//     borderRadius: "20px", // Add rounded corners
//     border: "2px solid black",
//     display: "flex", // Added to align items
//     alignItems: "center", // Align items in the center
//     paddingLeft: "0.5rem",

//     // Add border
//   }),
//   placeholder: (provided) => ({
//     ...provided,
//     marginLeft: "0.5rem",
//     order: -1, // Set margin-left for the placeholder
//   }),
// };

// const filterOptions = [
//   { value: "option1", label: "Option 1" },
//   { value: "option2", label: "Option 2" },
//   // Add more options as needed
// ];

// const DropdownIndicator = (props) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <FontAwesomeIcon
//         icon={faSearch}
//         style={{ marginRight: "0.5rem", color: "black" }}
//       />
//     </components.DropdownIndicator>
//   );
// };

const HallAvailable = () => {
  const { userName } = useContext(UserContext);
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
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <HallNavigation calendar="true" />
      </div>
      <div style={contentStyle}>
        <div style={titleStyle}>AVAILABILITY OF HALLS / HALL BOOKING</div>
        <div style={headingsContainerStyle}>
          <div style={{ ...greySquare }}></div>
          <div style={headingStyle}>Not Available</div>
          <div style={{ ...redSquare }}></div>
          <div style={headingStyle}>Partly Available</div>
          <div style={{ ...blueSquare }}></div>
          <div style={headingStyle}>Available</div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <CalendarMain />
        </div>
      </div>
    </div>
  );
};

export default HallAvailable;
