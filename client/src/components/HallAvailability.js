import React from "react";
import "../css/LoginPage.css";
import SideNavigation from "./SideNavigation";
const columnStyle = {
  width: "100%",
  //padding: '2rem 0rem 3rem 5rem',
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
};

const HomePage = () => {
  return (
    <div style={{ display: "flex" , height:"85vh"}}>
      <SideNavigation calendar="true"/>
    </div>
  );
};

export default HomePage;
