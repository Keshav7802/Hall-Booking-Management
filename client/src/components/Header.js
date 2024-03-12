

import React from "react";
import logo from "../assets/iitlogo.png";

const Header = (props) => {
  return (
    <>
<<<<<<< HEAD
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, height: '65px' }}>
        <div className="container-fluid d-flex align-items-center">
          <h5 className="text-start" style={{ color: "white", display: 'flex', alignItems: 'center' }}>
            <img
             src={logo}
             alt=""
             width={"72vw"}
             height={"72vh"}
             style={{ marginRight: '10px', marginLeft: '-10px'}}

            />
            <div style={{ fontWeight: "bold", marginLeft: "1rem", alignItems: "center" }}>Indian Institute of Technology Ropar</div>
=======
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
        style={{ height: "10vh" }}
      >
        <div className="container-fluid d-flex align-items-center">
          <h5
            className="text-start"
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="" width={"60vw"} height={"60vh"} />
            <div style={{ marginLeft: "10px", textDecoration: "bold" }}>
              Indian Institute of Technology Ropar
            </div>
>>>>>>> 39e720e3f691f1b7b6a4c3d71ce65db32353d54c
          </h5>
          <h5 className="text-end" style={{ color: "white", marginRight: '1rem'}}>
            Campus Hall Booking
          </h5>
        </div>
      </nav>
      <div style={{ height: '100px' }}></div> 
    </>
  );
};

export default Header;
