import React from "react";
import logo from "../assets/iitlogo.png";

const Header = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          height: "7vh",
        }}
      >
        <div className="container-fluid d-flex align-items-center">
          <div
            className="text-start"
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <div>
              <img
                src={logo}
                alt=""
                style={{
                  height: "6vh",
                  width: "7vh",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div
              style={{
                fontWeight: "bold",
                marginLeft: "1rem",
                alignItems: "center",
              }}
            >
              Indian Institute of Technology Ropar
            </div>
          </div>
          <h5
            className="text-end"
            style={{
              color: "white",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            Campus Hall Booking
          </h5>
        </div>
      </nav>
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default Header;
