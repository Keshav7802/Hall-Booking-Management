import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import "../css/LoginPage.css";
import Audi from "../assets/audi.jpg"
import cs_lab from "../assets/cs_lab.jpg"
import ee_sh from "../assets/ee_sh.jpg"

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
    { id: 2, name: 'CS-Lab', department: 'Computer Science', picture:cs_lab },
    { id: 3, name: 'EE-SH', department: 'Electrical Engineering', picture: ee_sh },
    { id: 4, name: 'Hall 4', department: 'Mechanical Engineering', picture: 'hall4.jpg' },
    { id: 5, name: 'Hall 5', department: 'Civil Engineering', picture: 'hall5.jpg' },
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
        <div style={{ ...columnStyle , overflow:"auto"}}>
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
              <option value="Major">Auditorium</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
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
            {filteredHalls.map((hall) => (
              <div
                key={hall.id}
                style={{
                  border: "1px solid #212529",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={Audi}
                  alt={hall.name}
                  style={{ maxWidth: "100%" }}
                />
                <h4>{hall.name}</h4>
                <Link
                  to="/HallDetails"
                  state={{
                    Name: "HELLO",
                    Department: "CSE",
                  }}
                >
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
                <Link to={"/HallBookForm"}>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HallBooking;
