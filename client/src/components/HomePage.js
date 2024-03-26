import React from "react";
import SideNavigation from "./SideNavigation";
import { Link } from "react-router-dom";
import "../css/LoginPage.css";

var textShadow = {
  textShadow: "5px 5px 10px rgba(80, 80, 80, 0.75)",
};

const columnStyle = {
  width: "40%",
  padding: "2rem 0rem 3rem 5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
  innerHeight: "100%",
};

const columnStyle2 = {
  width: "60%",
  padding: "5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
  innerHeight: "100%",
};

const boxStyle = {
  backgroundColor: "#212529",
  padding: "1.5rem",
  border: "4px #000",
  borderRadius: "8px",
};
const containerStyle = {
  display: "flex",
  marginTop: "-3em",
};
const contentStyle = {
  display: "flex", // Updated to column layout
  marginLeft: "231px",
  marginTop: "-3em",
  width: "90%", // Same as the width of the sidebar
  boxSizing: "border-box",
  padding: "2rem 1rem 0rem 1rem", // Adjusted padding for better spacing
  height: "640px",
};

const sidebarStyle = {
  position: "fixed",
  backgroundColor: "#f0f0f0",
};
const HomePage = () => {
  return (
    <>
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <SideNavigation />
        </div>
        {/* Left Column - Halls Available for Booking */}
        <div style={contentStyle}>
        <div style={{ ...columnStyle }}>
          <div
            style={{
              ...textShadow,
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#333",
              marginTop: "0.1rem",
            }}
          >
            HALL BOOKING
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link
              style={{
                color: "#0066cc",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              to="/Availability"
            >
              Click here
            </Link>
            <span> to check availability of halls</span>
            <span> Hall Bookings can be made for the following halls</span>
          </div>
          <ol
            style={{
              listStyleType: "decimal",
              marginLeft: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <li>Auditorium</li>
            <li>CDPC HALL</li>
            <li>SENATE HALL</li>
            <li>EE-SH</li>
            <li>ME-SH</li>
            <li>CY-SH</li>
            <li>M1 - M6</li>
            <li>CS-LAB</li>
            <li>EE-1</li>
            <li>EE-2</li>
            <li>ME-1</li>
          </ol>
        </div>

        {/* Right Column - Steps to Book a Hall in a Box */}
        <div style={{ ...columnStyle2 }}>
          <div style={{ ...boxStyle }}>
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1.6rem",
                marginBottom: "1rem",
              }}
            >
              STEPS TO BOOK A HALL
            </div>
            <ul
              style={{
                listStyleType: "disc",
                marginLeft: "1.5rem",
                color: "white",
              }}
            >
              <li>
                Check the Calender for the Hall availability on specific dates
              </li>
              <li>Click "Add new request" and fill in the form and submit</li>
              <li>
                You will receive an email upon submitting this form and an email
                after the request is approved
              </li>
              <li>
                Meanwhile, the status of your record can be tracked from your
                dashboard
              </li>
              <li>
                The Hall requests will be approved next working day before
                forenoon
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
