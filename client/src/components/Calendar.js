import React from 'react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useEffect, useState } from "react";

const localizer = momentLocalizer(moment);

const CalendarMain = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/booking/getAllBookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${userData.token}`,
        },
      });
      const hallData = await data.json();

      // Transform booking data into events list
      const events = hallData.map((booking) => ({
        title: booking.eventName,
        start: new Date(booking.startDateTime),
        end: new Date(booking.endDateTime),
      }));

      // Set the events list in state
      setEvents(events);
    };
    fetchData();
  }, []);


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

