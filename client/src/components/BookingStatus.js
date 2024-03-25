import React from "react";
import SideNavigation from "./SideNavigation";
// import { Link } from "react-router-dom";
import "../css/LoginPage.css";

const HomePage = () => {
  return (
    <div style={{ display: "flex" , height:"85vh", marginTop: "-2rem"}}>
      <SideNavigation />
    </div>
  );
};

export default HomePage;
