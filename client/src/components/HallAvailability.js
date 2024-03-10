import React from 'react';
import Hall_Navigation from './HallAvailability_sidebar';
import CalendarMain from './Calendar';
import '../css/LoginPage.css';
import Calendar from 'react-calendar';

const containerStyle = {
  display: 'flex',
  marginTop: '-1em',
};

const sidebarStyle = {
  position: 'fixed',
  backgroundColor: '#f0f0f0',
};

const contentStyle = {
  marginLeft: '250px',
  width: '90%',// Same as the width of the sidebar
  boxSizing: 'border-box',
  padding: '0rem 0rem 0rem 1rem',
};

const HomePage = () => {
  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Hall_Navigation />
      </div>
      <div style={contentStyle}>
        <CalendarMain />
      </div>
    </div>
  );
};

export default HomePage;