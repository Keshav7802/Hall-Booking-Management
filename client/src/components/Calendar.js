import React from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import '../css/Calendar.css';

const customLocalizer = momentLocalizer(moment, {
  formats: {
    yearHeaderFormat: 'YYYY',
  },
  messages: {
    year: 'Year',
  },
});

const CustomDay = ({ date }) => {
  const columns = Array.from({ length: 10}, (_, index) => index + 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {columns.map((column, index) => (
        <div key={index}>
          <div style={{ fontWeight: 'bold' }}>{column}</div>
        </div>
      ))}
    </div>
  );
};

const CalendarMain = ({ selectedDate }) => {
  const events = [
    { title: 'Event 1', start: new Date(), column: 1 },
    { title: 'Event 2', start: new Date(), column: 3 },
  ];

  return (
    <div className="app" style={{ height: '1200px'}}>
      <Calendar
        localizer={customLocalizer}
        events={events}
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

export default CalendarMain;

