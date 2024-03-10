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
    <div className="flex flex-col md:flex-row">
      <SideNavigation calendar="true"/>

      {/* <div style={{ ...columnStyle }}> <Cal /></div> */}
    </div>
  );
};

export default HomePage;
