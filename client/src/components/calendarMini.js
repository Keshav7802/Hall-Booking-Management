import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalendarCom() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div
      style={{
        padding: "5px",
        boxSizing: "border-box",
        width: "95%",
        // overflow: "hidden",
      }}
    >
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="custom-calendar"
        dateFormat="dd/MM/yyyy"
        calendarClassName="custom-calendar"
        popperProps={{ placement: "bottom" }}
      />
    </div>
  );
}

export default CalendarCom;




