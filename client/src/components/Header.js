

import React from "react";
import logo from "../assets/iitlogo.png";

const Header = (props) => {
  return (
    <>
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

