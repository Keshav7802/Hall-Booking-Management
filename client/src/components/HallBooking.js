// import React, { useState } from 'react';
// import SideNavigation from './SideNavigation';
// import '../css/LoginPage.css';

// const textShadow = {
//   textShadow: '5px 5px 10px rgba(80, 80, 80, 0.75)',
// };

// const columnStyle = {
//   width: '100%',
//   padding: '2rem 0rem 3rem 5rem',
//   boxSizing: 'border-box',
//   backgroundColor: '#f0f0f0',
// };

// const columnStyle2 = {
//   width: '60%',
//   padding: '5rem',
//   boxSizing: 'border-box',
//   backgroundColor: '#f0f0f0',
// };

// const boxStyle = {
//   backgroundColor: '#87CEEB',
//   padding: '1.5rem',
//   border: '4px solid #000',
//   borderRadius: '8px',
// };

// const HallBooking = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [searchInput, setSearchInput] = useState('');
  
//   // Function to handle dropdown selection
//   const handleDepartmentChange = (event) => {
//     setSelectedDepartment(event.target.value);
//     setSearchInput(''); // Clear search input when a new department is selected
//   };

//   // List of available halls (replace with your actual data)
//   const availableHalls = [
//     { id: 1, name: 'Hall 1', department: 'Computer Science' },
//     { id: 2, name: 'Hall 2', department: 'Computer Science' },
//     { id: 3, name: 'Hall 3', department: 'Electrical Engineering' },
//     { id: 4, name: 'Hall 4', department: 'Mechanical Engineering' },
//     { id: 5, name: 'Hall 5', department: 'Civil Engineering' },
//   ];

//   // Filter halls based on selected department and search input
//   const filteredHalls = availableHalls.filter((hall) => {
//     const departmentMatch = selectedDepartment === '' || hall.department === selectedDepartment;
//     const searchMatch = hall.name.toLowerCase().includes(searchInput.toLowerCase());
//     return departmentMatch && searchMatch;
//   });

//   return (
//     <div style={{ display: 'flex' }}>
//       <SideNavigation />

//       {/* Left Column - Halls Available for Booking */}
//       <div style={{ ...columnStyle }}>
//         <div style={{ ...textShadow, fontSize: '3rem', fontWeight: 'bold', color: '#333', marginTop: '0.1rem' }}>
//           HALL DETAILS
//         </div>

//         {/* Department selection dropdown */}
//         <div>
//           <label htmlFor="departmentDropdown">Department: </label>
//           <select
//             id="departmentDropdown"
//             value={selectedDepartment}
//             onChange={handleDepartmentChange}
//           >
//             <option value="">All</option>
//             <option value="Computer Science">Computer Science</option>
//             <option value="Electrical Engineering">Electrical Engineering</option>
//             <option value="Mechanical Engineering">Mechanical Engineering</option>
//             <option value="Civil Engineering">Civil Engineering</option>
//           </select>
//         </div>

//         {/* Search bar for halls */}
//         <div>
//           <label htmlFor="hallSearch">Search Halls: </label>
//           <input
//             type="text"
//             id="hallSearch"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//         </div>

//         {/* Display filtered halls */}
//         <div>
//           <h3>Available Halls:</h3>
//           <ul>
//             {filteredHalls.map((hall) => (
//               <li key={hall.id}>{hall.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HallBooking;



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

const HallBooking = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // Function to handle dropdown selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setSearchInput(''); // Clear search input when a new department is selected
  };

  // List of available halls (replace with your actual data)
  const availableHalls = [
    { id: 1, name: 'Auditorium', department: 'Major', picture: '/Users/sanjayjain/Desktop/SoftyProject/Hall-Booking-Management/client/src/assets/audi.jpg' },
    { id: 2, name: 'CS-Lab', department: 'Computer Science', picture: '/Users/sanjayjain/Desktop/SoftyProject/Hall-Booking-Management/client/src/assets/cs_lab.jpg' },
    { id: 3, name: 'EE-SH', department: 'Electrical Engineering', picture: '/Users/sanjayjain/Desktop/SoftyProject/Hall-Booking-Management/client/src/assets/ee_sh.jpg' },
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
    <div style={{ display: 'flex' }}>
      <SideNavigation />

      {/* Left Column - Halls Available for Booking */}
      <div style={{ ...columnStyle }}>
        <div style={{ ...textShadow, fontSize: '3rem', fontWeight: 'bold', color: '#333', marginTop: '0.1rem' }}>
          HALL DETAILS
        </div>

        {/* Department selection dropdown */}
        <div>
          <label htmlFor="departmentDropdown">Department: </label>
          <select
            id="departmentDropdown"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="">All</option>
            <option value="Major">Auditorium</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>

        {/* Search bar for halls */}
        <div>
          <label htmlFor="hallSearch">Search Halls: </label>
          <input
            type="text"
            id="hallSearch"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* Display filtered halls as cards */}
        <div>
          <h3>Available Halls:</h3>
          {filteredHalls.map((hall) => (
            <div key={hall.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
              <img src={"./assets/audi.jpg"} alt={hall.name} style={{ maxWidth: '100%' }} />
              <h4>{hall.name}</h4>
              <Link to={`/hall-details/${hall.id}`}>
                <button>View Hall Details</button>
              </Link>
              <Link to={`/book-hall/${hall.id}`}>
                <button>Book Hall</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HallBooking;
