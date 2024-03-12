import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import "../css/LoginPage.css";
import Audi from "../assets/audi.jpg"
import cs_lab from "../assets/cs_lab.jpg"
import ee_sh from "../assets/ee_sh.jpg"
import cdpc from "../assets/cdpc.jpg"
import ee_2 from "../assets/ee_2.jpg"
import m from "../assets/m3.jpg"
import m5 from "../assets/m5.jpg"
import m6 from "../assets/m6.jpg"
import senate from "../assets/senate.jpg"

const textShadow = {
  textShadow: "5px 5px 10px rgba(80, 80, 80, 0.75)",
};

const columnStyle = {
  width: "100%",
  padding: "2rem 0rem 3rem 5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
};

const HallBooking = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Function to handle dropdown selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setSearchInput(""); // Clear search input when a new department is selected
  };

  // List of available halls (replace with your actual data)
  const availableHalls = [
    { id: 1, name: 'Auditorium', department: 'Major', picture: Audi },
    { id: 2, name: 'CS-Lab', department: 'Computer Science', picture: cs_lab },
    { id: 3, name: 'EE-SH', department: 'Electrical Engineering', picture: ee_sh },
    { id: 4, name: 'ME-SH', department: 'Mechanical Engineering', picture: ee_sh},
    { id: 5, name: 'CY-SH', department: 'Chemistry Block', picture: ee_sh },
    { id: 6, name: 'M1', department: 'LHC', picture: m },
    { id: 7, name: 'M2', department: 'LHC', picture: m },
    { id: 8, name: 'M3', department: 'LHC', picture: m },
    { id: 9, name: 'M4', department: 'LHC', picture: m },
    { id: 10, name: 'M5', department: 'LHC', picture: m5 },
    { id: 17, name: 'M5', department: 'LHC', picture: m6 },
    // { id: 11, name: 'CS-SH', department: 'Computer Science', ee_sh },
    { id: 12, name: 'CDPC Hall', department: 'Major', picture: cdpc },
    { id: 13, name: 'Senate', department: 'Major', picture: senate },
    { id: 14, name: 'EE-1', department: 'Electrical Engineering', picture: ee_2 },
    { id: 15, name: 'EE-2', department: 'Electrical Engineering', picture: ee_2 },
    { id: 16, name: 'ME-1', department: 'Mechanical Engineering', picture: ee_2 },

    
  ];

  // Filter halls based on selected department and search input
  const filteredHalls = availableHalls.filter((hall) => {
    const departmentMatch = selectedDepartment === '' || hall.department === selectedDepartment;
    const searchMatch = hall.name.toLowerCase().includes(searchInput.toLowerCase());
    return departmentMatch && searchMatch;
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNavigation />
        {/* Left Column - Halls Available for Booking */}
        <div style={{ ...columnStyle, overflow: "auto" }}>
          <div
            style={{
              ...textShadow,
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#333",
              marginTop: "0.1rem",
            }}
          >
            HALL DETAILS
          </div>

          {/* Department selection dropdown */}
          <div className="my-3">
            <label className="mx-3" htmlFor="departmentDropdown">
              Department:{" "}
            </label>
            <select
              id="departmentDropdown"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              style={{
                borderRadius: "5px",
                height: "25px",
                border: "0.5px solid #212529",
                width: "200px",
              }}
            >
              <option value="">All</option>
              <option value="Major">Major</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="LHC">LHC</option>
              <option value="Chemistry Block">Chemistry Block</option>

            </select>
          </div>

          {/* Search bar for halls */}
          <div className="my-3">
            <label className="mx-3" htmlFor="hallSearch">
              Search Halls:{" "}
            </label>
            <input
              type="text"
              id="hallSearch"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{
                borderRadius: "5px",
                height: "25px",
                border: "0.5px solid #212529",
                width: "200px",
              }}
            />
          </div>
          {/* Display filtered halls as cards */}
          <div>
            <h2 className="mx-3">
              <b>Available Halls</b>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {filteredHalls.map((hall) => (
                <div
                  key={hall.id}
                  style={{
                    border: "1px solid #212529",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "5px",
                    width: "calc(50% - 20px)", // 50% width with margin
                    boxSizing: "border-box", // Include padding and border in the width calculation
                    height: "340px",
                  }}
                >
                  <img
                    src={hall.picture}
                    alt={hall.name}
                    
                    style={{ maxWidth: "90%", margin: "0 auto", maxHeight: "230px" ,borderRadius: "5px"}}
                  />

                  <h2 style={{ textAlign: "center", margin: "10px 0", fontSize: "24px" }}>{hall.name}</h2>

                  <div style={{ textAlign: "center" }}>
                    <Link to="/HallDetails">
                      <button
                        style={{
                          backgroundColor: "#212529",
                          color: "#fff",
                          padding: "5px 20px",
                          borderRadius: "10px",
                          border: "none",
                          cursor: "pointer",
                          marginRight: "3px",
                        }}
                      >
                        View Hall Details
                      </button>
                    </Link>
                    <Link to="/HallBookForm">
                      <button
                        style={{
                          backgroundColor: "#212529",
                          color: "#fff",
                          padding: "5px 20px",
                          borderRadius: "10px",
                          border: "none",
                          cursor: "pointer",
                          marginLeft: "3px",
                        }}
                      >
                        Book Hall
                      </button>
                    </Link>
                  </div>

                </div>
              ))}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HallBooking;
