import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import profileIcon from "../assets/profile.jpg";

const SideNavigation = ({}) => {
  return (
    <Sidebar style={{ height: "505px" }}>

<div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
        <img src= {profileIcon} alt="Profile Icon" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
        <span style={{ fontWeight: 'bold' }}>Suyash Varshney</span>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/home" />}>
          {" "}
          Dashboard
        </MenuItem>
        <MenuItem component={<Link to="/Availability" />}> Hall availability</MenuItem>
        <MenuItem component={<Link to="/HallBook" />}> Hall Booking</MenuItem>
        <MenuItem component={<Link to="/Status" />}> Booking Sattus</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNavigation;
