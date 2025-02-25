

import React from "react";
import "../css/LoginPage.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from '../components/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  faHome,
  faCalendarAlt,
  faBook,
  faInfoCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "./Calendar";

const AdminSideNavigation = (props) => {
  const location = useLocation();
  const history = useNavigate();
  const { userName, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout(); // Call the logout function from UserContext
    history('/login');
  };

  return (
    <Sidebar style={{ position:"static", zIndex: 0,overflow:"hidden" , height:"85vh"}}>
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          //backgroundColor: "white",
        }}
      >
        <img
          src={profileIcon}
          alt="Profile Icon"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <span style={{ fontWeight: "bold" }}>{userName}</span>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/AdminHome" />}
            className={location.pathname === "/AdminHome" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Dashboard</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/AdminHalls" />}
            className={location.pathname === "/AdminHalls" ? "active" : ""}
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ marginRight: "8px" }}
            />
            <span style={{ marginLeft: "12px" }}>Hall Availability</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/AdminPendingRequest" />}
            className={location.pathname === "/AdminPendingRequest" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faBook} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Requests</span>
          </MenuItem>
        </div>
        {/* <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/Status" />}
            className={location.pathname === "/Status" ? "active" : ""}
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ marginRight: "8px" }}
            />
            <span style={{ marginLeft: "12px" }}>Booking Status</span>
          </MenuItem>
        </div> */}
      </Menu>
      {/* {props.calendar && <Calendar />} */}
      {/* Logout Menu */}
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
        }}
      >
         <div className="menu-wrapper">
          <MenuItem onClick={handleLogout}> {/* Call handleLogout function on click */}
            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Logout</span>
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default AdminSideNavigation;



