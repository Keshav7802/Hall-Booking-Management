

import React from "react";
import "../css/LoginPage.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../assets/profile.jpg";
import Cal from "./calendarMini";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faBook,
  faInfoCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const SideNavigation = () => {
  const location = useLocation();

  return (
    <Sidebar style={{ height: "630px", position: "relative" }}>
      <div
        style={{
          padding: "15px",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
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
        <span style={{ fontWeight: "bold" }}>Suyash Varshney</span>
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
            component={<Link to="/home" />}
            className={location.pathname === "/home" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Dashboard</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
          <MenuItem
            component={<Link to="/Availability" />}
            className={location.pathname === "/Availability" ? "active" : ""}
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
            component={<Link to="/HallBook" />}
            className={location.pathname === "/HallBook" ? "active" : ""}
          >
            <FontAwesomeIcon icon={faBook} style={{ marginRight: "8px" }} />
            <span style={{ marginLeft: "12px" }}>Hall Booking</span>
          </MenuItem>
        </div>
        <div className="menu-wrapper">
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
        </div>
      </Menu>

      

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
          bottom: "15px",
          width: "100%",
        }}
      >
        <div className="menu-wrapper">
          <MenuItem>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ marginRight: "8px", transform: "rotate(180deg)" }}
            />
            <span style={{ marginLeft: "12px" }}>Logout</span>
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideNavigation;
