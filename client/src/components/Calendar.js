import React from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import events from './Events'

// const customLocalizer = momentLocalizer(moment, {
//   formats: {
//     yearHeaderFormat: 'YYYY',
//   },
//   messages: {
//     year: 'Year',
//   },
// });

// const CustomDay = ({ date }) => {
//   const columns = Array.from({ length: 10}, (_, index) => index + 1);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row' }}>
//       {columns.map((column, index) => (
//         <div key={index}>
//           <div style={{ fontWeight: 'bold' }}>{column}</div>
//         </div>
//       ))}
//     </div>
//   );
// };


const localizer = momentLocalizer(moment);

const CalendarMain = () => {


  return (
    <div style={{ height: '1200px'}}>
      <Calendar
        localizer={localizer}
        events={events}
        views={{
        
          week: true,
          month: true,
        }}
        messages={{ year: 'Year' }}
      />
    </div>
  );
};

export default CalendarMain;

