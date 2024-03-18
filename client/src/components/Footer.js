import React from "react";


const Footer = () => {
  return (
    <footer className="decoration-white mt-auto" style={{ backgroundColor: "#151515" , padding : "1rem", zIndex: 1000, position: 'relative' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h5 className="text-start mx-3" >
              <div style={{display: "flex", color: "grey", fontSize: '18px' }}>Copyright @ 
              <div style={{ color: "white", marginLeft : '0.8rem'}}>Campus Hall Booking System</div></div>
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