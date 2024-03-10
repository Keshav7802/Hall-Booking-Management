// import React from 'react';
// import Hall_Navigation from './HallAvailability_sidebar';
// import CalendarMain from './Calendar'
// import '../css/LoginPage.css';
// import Calendar from 'react-calendar';
// const columnStyle = {
//   width: '100%',
//   padding: '0rem 0rem 0rem 1rem',
//   boxSizing: 'border-box',
//   backgroundColor: '#f0f0f0',
// };

// const HomePage = () =>  {
//   return (
//     <div className="flex flex-col md:flex-row">
//       <Hall_Navigation
//       />
      
//       <div style={{ ...columnStyle }}> <CalendarMain /></div>
//     </div>
//   );
// }

// export default HomePage;
import React from 'react';
import Hall_Navigation from './HallAvailability_sidebar';
import CalendarMain from './Calendar';
import '../css/LoginPage.css';



const HomePage = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{position: 'fixed'}}>
        <Hall_Navigation />
      </div>
      <div style={{marginLeft: '250px', width: '100%'}}>
        <CalendarMain />
      </div>
    </div>
  );
};

export default HomePage;
