
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from './SideNavigation';
import '../css/LoginPage.css';

const textShadow = {
  textShadow: '5px 5px 10px rgba(80, 80, 80, 0.75)',
};

const columnStyle = {
  width: '100%',
  padding: '2rem 0rem 3rem 5rem',
  boxSizing: 'border-box',
  backgroundColor: '#f0f0f0',
};

const columnStyle2 = {
  width: '60%',
  padding: '5rem',
  boxSizing: 'border-box',
  backgroundColor: '#f0f0f0',
};

const boxStyle = {
  backgroundColor: '#87CEEB',
  padding: '1.5rem',
  border: '4px solid #000',
  borderRadius: '8px',
};

const HallBookingForm = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedHall, setSelectedHall] = useState('');
  const [selectedAffiliatedDepartment, setSelectedAffiliatedDepartment] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    // <div className="hall-booking-form">
    

    <div style={{ display: 'flex', flexDirection: 'column',marginBottom:'1rem' , alignItems: 'center', justifyContent: 'center', height: '70vh' , backgroundColor: '#f0f0f0'  , padding:'20px', borderRadius: '10px'}}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Fill the following details and click submit to book the hall</h1>
      <form onSubmit={handleSubmit} style={{width: '50%'}}>
        <div className="form-group"  style={{marginBottom: '1rem' }}>
          <label htmlFor="department"  style={{ display: 'inline-block', width: '150px',  marginRight:'12rem'}} ><strong>DEPARTMENT :</strong></label>
          <select id="department" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}
          style={{width:'200px'}}
          >
            <option value="">Select Department</option>
            
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics and Computing">Mathematics and Computing</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>

       {/* Dropdown for Hall for booking */}
        <div className="form-group" style={{marginBottom: '1rem'}} >
          <label htmlFor="hall" style={{marginRight:'11.5rem'}}  ><strong>HALL FOR BOOKING :</strong></label>
          <select id="hall" value={selectedHall} onChange={(e) => setSelectedHall(e.target.value)} 
          style={{width:'200px'}}
          >
            <option value="">Select Hall</option>
            <option value="Major">Auditorium</option>
            <option value="Computer Science">CS-Lab</option>
            <option value="Electrical Engineering">EE-SH</option>
            <option value="Mechanical Engineering">Hall 4</option>
            <option value="LHC">M5</option>
            <option value="LHC">M6</option>
          </select>
        </div>
        {/* Dropdown for affiliated club */}
        <div className="form-group"   style={{marginBottom: '1rem'}}>
          <label htmlFor="affiliatedDepartment" style={{marginRight:'13rem'}} ><strong>AFFILIATED CLUB :</strong></label>
          <select id="affiliatedDepartment" value={selectedAffiliatedDepartment} onChange={(e) => setSelectedAffiliatedDepartment(e.target.value)} style={{width:'200px'}} >
            <option value="">Select Affiliated Department/Club</option>
            <option value="Drama Club">Undekha</option>
            <option value="Dancing Club">Dcypher</option>
            <option value="Debating Club">Debsok</option>
            <option value="Coding Club">Coding</option>
            <option value="Oratory Club">Oratory</option>
            <option value="MUN Club">MUN</option>
            <option value="Enigma Club">Enigma </option>
            <option value="Monochrome Club">Monochrome</option>
            <option value="Zenith Club">Zenith</option>
            <option value="Automotive Club">Automotive</option>
            <option value="Arturo Club">Arturo</option>
            <option value="Alpha Club">Alpha </option>

            
          </select>
        </div>
        {/* Dropdown for Date */}
        <div className="form-group"  style={{marginBottom: '1rem'}}>
          <label htmlFor="date"  style={{marginRight:'18.75rem'}} ><strong>DATE :</strong></label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} style={{width:'200px'}} />
        </div>
        {/* Dropdown for Time from */}
        <div className="form-group"  style={{marginBottom: '1rem'}}>
          <label htmlFor="timeFrom" style={{marginRight:'15.7rem'}} ><strong>TIME FROM :</strong></label>
          <input type="time" id="timeFrom" value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} style={{width:'200px'}} />
        </div>
        {/* Dropdown for Time to */}
        <div className="form-group" style={{marginBottom: '1rem'}}>
          <label htmlFor="timeTo"   style={{marginRight:'17.38rem'}}><strong>TIME TO :</strong></label>
          <input type="time" id="timeTo" value={timeTo} onChange={(e) => setTimeTo(e.target.value)} style={{width:'200px'}} />
        </div>
        {/* Dropdown for Reason */}
        
        <div className="form-group" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
  <label htmlFor="reason" style={{ marginRight: '17.39rem' }}><strong>REASON :</strong></label>
  <textarea
    id="reason"
    value={reason}
    onChange={(e) => setReason(e.target.value)}
    style={{  width :'200px' }} // Allow textarea to grow dynamically
  />
</div>

        <button type="submit" 
         style={{ 
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '5px 20px',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '1rem',
      marginLeft: '12rem',
      }} 
       >Submit</button>

      </form>
    </div>
  );
};

export default HallBookingForm;
