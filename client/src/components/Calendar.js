




import React from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import '../css/Calendar.css';

// Create a new object to customize formats and messages
const customLocalizer = momentLocalizer(moment, {
  formats: {
    yearHeaderFormat: 'YYYY',
  },
  messages: {
    year: 'Year',
  },
});

// Custom day component to render 10 columns
const CustomDay = ({ date }) => {
    const columns = Array.from({ length: 10 }, (_, index) => index + 1);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {columns.map((column, index) => (
          <div key={index}>
            <div style={{ fontWeight: 'bold' }}>{column}</div>
            {/* You can add additional content for each column if needed */}
          </div>
        ))}
      </div>
    );
  };

const MyComponent = (props) => {
    const events = [
        { title: 'Event 1', start: new Date(), column: 1 },
        { title: 'Event 2', start: new Date(), column: 3 },
        // Add more events with column information
      ];
  return (

    
    <div className="app" style={{height: '1200px'}}>
      <Calendar
        localizer={customLocalizer}
        events={[]}
        toolbar={true}
        components={{
          day: {
            event: CustomDay,
          },
        }}
        views={{
          day: true,
          week: true,
          month: true,
        }}
        messages={{ year: 'Year' }}
      />
    </div>
  );
};

export default MyComponent;



