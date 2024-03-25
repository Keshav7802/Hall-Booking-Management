import { Link } from "react-router-dom";
import React from "react";
import "../css/LoginPage.css";

var textShadow = {
  textShadow: "5px 5px 10px rgba(80, 80, 80, 0.75)",
};

const columnStyle = {
  width: "50%",
  padding: "2rem 0rem 3rem 5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
};

const columnStyle2 = {
  width: "50%",
  padding: "5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
};
const boxStyle = {
  backgroundColor: "#87CEEB",
  padding: "1.5rem",
  border: "4px solid #000", // Border for the box
  borderRadius: "8px", // Border radius for the box
};

const LandingPage = () => {
  return (
    <div style={{ display: "flex", marginTop: "-2rem" }}>
      {/* Left Column - Halls Available for Booking */}
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
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#555",
            marginTop: "1rem",
          }}
        >
          HALLS AVAILABLE FOR BOOKING
        </div>
        <div style={{ marginTop: "2rem" }}>
          <a
            style={{
              color: "#0066cc",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            href="/login"
          >
            Click here
          </a>
          <span> to check availability of halls</span>
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
              color: "#333",
              fontWeight: "bold",
              fontSize: "1.6rem",
              marginBottom: "1rem",
            }}
          >
            STEPS TO BOOK A HALL
          </div>
          <ul style={{ listStyleType: "disc", marginLeft: "1.5rem" }}>
            <li>Click on Login/SignUp Button to Login in your Account</li>
            <li>
              Check the calendar for availability of the halls on specific dates
            </li>
            <li>Click "Add new request" and fill in the form and submit</li>
            <li>
              You will receive an email upon submitting this form and an email
              after request is approved
            </li>
            <li>
              Meanwhile the status of your record can be tracked from your
              dashboard
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-dark"
          to="/login"
          role="button"
          style={{ marginTop: "4rem", marginLeft: "12.5rem" }}
        >
          <text className="mx-4 my-3" style={{ color: "white" }}>
            <b>Login</b>
          </text>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
