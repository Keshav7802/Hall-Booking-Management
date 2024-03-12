import React from 'react';
import SideNavigation from './SideNavigation';
import { Link } from 'react-router-dom';
import '../css/LoginPage.css';

var textShadow = {
  textShadow: '5px 5px 10px rgba(80, 80, 80, 0.75)',
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
  backgroundColor: '#87CEEB',
  padding: '1.5rem',
  border: '4px solid #000',
  borderRadius: '8px',
};

const HomePage = () => {
  return (
    <div style={{ display: 'flex', marginTop: '-2em' }}>
    
      <SideNavigation />
    
      {/* Left Column - Halls Available for Booking */}
      <div style={{ ...columnStyle }}>
        <div style={{ ...textShadow, fontSize: '3rem', fontWeight: 'bold', color: '#333', marginTop: '0.1rem' }}>
          HALL BOOKING
        </div>
       
        <div style={{ marginTop: '2rem' }}>
          <a style={{ color: '#0066cc', textDecoration: 'underline', cursor: 'pointer' }} href="/Availability">
            Click here
          </a>
          <span> to check availability of Halls</span><br></br>
          <span> Hall Bookings can be made for the following halls</span>
        </div>
        <ol style={{ listStyleType: 'disc', marginLeft: '1.5rem', marginTop: '2rem' }}>
          <li>Drawing Hall 48</li>
          <li>Drawing Hall 49</li>
          <li>Vivekanandha Auditorium</li>
          <li>Lecture Hall No. 82</li>
          <li>Lecture Hall No. 83</li>
          <li>Lecture Hall No. 84</li>
          <li>Lecture Hall No. 13</li>
          <li>Srinivasa Ramanujan Seminar Hall</li>
          
        </ol>
      </div>

      {/* Right Column - Steps to Book a Hall in a Box */}
      <div style={{ ...columnStyle2 }}>
        <div style={{ ...boxStyle }}>
          <div style={{ color: '#333', fontWeight: 'bold', fontSize: '1.6rem', marginBottom: '1rem' }}>
            STEPS TO BOOK A HALL
          </div>
          <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
            <li>Check the Calender for the Hall availability on specific dates</li>
            <li>Click "Add new request" and fill in the form and submit</li>
            <li>You will receive an email upon submitting this form and an email after the request is approved</li>
            <li>Meanwhile, the status of your record can be tracked from your dashboard</li>
            <li>The Hall requests will be approved next working day before forenoon</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
