import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div
      style={{
        marginLeft: "34px",
        width: "50%",
        overflow: "hidden",
        border: "1px solid #212529",
        borderRadius: "5px",
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

export default Calendar;
