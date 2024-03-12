import React from "react";


const Footer = () => {
  return (
    <footer className="decoration-white mt-auto" style={{ backgroundColor: "#151515" , padding : "1rem", }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h5 className="text-start mx-3" style={{ color: "white" }}>
              Campus Hall Booking System
            </h5>
          </div>
          <div className="col-6 text-end">
            <span className="text-muted mx-3" style={{ color: "white" }}>
              Developed by Team 1
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;