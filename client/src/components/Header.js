import React from "react";
import logo from "../assets/iitlogo.jpg";


const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid flex">
          <h5 className="text-start" style={{ color: "white" }}>
            <img
              src={logo}
              className="mx-3"
              alt="Indian Institute of Technology Ropar logo"
              width={"40vw"}
              height={"40vh"}
            />
            Indian Institute of Technology Ropar
          </h5>
          <h5 className="text-end" style={{ color: "white" }}>
            Campus Hall Booking
          </h5>
        </div>
      </nav>
    </>
  );
};

export default Header;
