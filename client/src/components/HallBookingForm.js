import React, { useState } from "react";
import SideNavigation from "./SideNavigation";
import UserContext from "../components/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const columnStyle = {
  width: "100%",
  padding: "2rem 0rem 3rem 5rem",
  boxSizing: "border-box",
  backgroundColor: "#f0f0f0",
  marginTop: "0rem",
};
const placeholderStyle = {
  borderRadius: "5px",
  height: "30px",
  border: "0.5px solid #212529",
  width: "400px",
};

const HallBookingForm = () => {
  const { userName } = useContext(UserContext);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [eventType, setEventType] = useState("");
  const [selectedHall, setSelectedHall] = useState("");
  const [selectedAffiliatedDepartment, setSelectedAffiliatedDepartment] =
    useState("");
  // const [date, setDate] = useState(Date());
  const [DatetimeFrom, setDateTimeFrom] = useState(Date());
  const [DatetimeTo, setDateTimeTo] = useState(Date());
  const [reason, setReason] = useState("");
  const [eventName, setEventName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/booking/createBooking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventName: eventName,
            eventType: eventType,
            hallName: selectedHall,
            departmentBlock: selectedDepartment,
            clubName: selectedAffiliatedDepartment,
            eventPurpose: reason,
            startDateTime: DatetimeFrom,
            endDateTime: DatetimeTo,
            bookingStatus: "Pending",
            bookingDateTime: new Date(),
            // ticketBooking: false,
            // ticketID: null,
          }),
        }
      );
      if (response.ok) {
        toast.success("Form Submitted Successfully");
        navigate('/Status')
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Form not submitted");
    }
  };

  if (!userName) {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          User Not Logged In, Please Login First!!!
        </div>
        <Link
          className="btn btn-dark"
          to="/login"
          role="button"
          style={{ marginTop: "4rem", marginLeft: "38rem" }}
        >
          <text className="mx-4 my-3" style={{ color: "white" }}>
            <b>Login</b>
          </text>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", marginTop: "-3rem" }}>
      <SideNavigation />
      <div style={{ ...columnStyle }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "1rem",
          }}
        >
          Fill the following details and click submit to book the hall
        </h1>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="eventName"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>EVENT NAME :</strong>
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              style={{ ...placeholderStyle }}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="eventType"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>Event TYPE :</strong>
            </label>
            <input
              type="text"
              id="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              style={{ ...placeholderStyle }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="department"
              style={{
                display: "inline-block",
                width: "200px",
              }}
            >
              <strong>DEPARTMENT : </strong>
            </label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              style={{ ...placeholderStyle }}
            >
              <option value="">Select Department</option>

              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics and Computing">
                Mathematics and Computing
              </option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
            </select>
          </div>

          {/* Dropdown for Hall for booking */}
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="hall"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>HALL FOR BOOKING :</strong>
            </label>
            <select
              id="hall"
              value={selectedHall}
              onChange={(e) => setSelectedHall(e.target.value)}
              style={{ ...placeholderStyle }}
            >
              <option value="">Select Hall</option>
              <option value="Major">Auditorium</option>
              <option value="Computer Science">CS-Lab</option>
              <option value="Electrical Engineering">EE-SH</option>
              <option value="Mechanical Engineering">ME4</option>
              <option value="LHC">M5</option>
              <option value="LHC">M6</option>
            </select>
          </div>
          {/* Dropdown for affiliated club */}
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="affiliatedDepartment"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>AFFILIATED CLUB :</strong>
            </label>
            <select
              id="affiliatedDepartment"
              value={selectedAffiliatedDepartment}
              onChange={(e) => setSelectedAffiliatedDepartment(e.target.value)}
              style={{ ...placeholderStyle }}
            >
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
          {/* <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="date"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>DATE :</strong>
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ ...placeholderStyle }}
            />
          </div> */}
          {/* Dropdown for Time from */}
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="timeFrom"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>TIME FROM :</strong>
            </label>
            <input
              type="datetime-local"
              id="timeFrom"
              value={DatetimeFrom}
              onChange={(e) => {
                setDateTimeFrom(e.target.value);
                console.log(DatetimeFrom);
              }}
              style={{ ...placeholderStyle }}
            />
          </div>
          {/* Dropdown for Time to */}
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="timeTo"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>TIME TO :</strong>
            </label>
            <input
              type="datetime-local"
              id="timeTo"
              value={DatetimeTo}
              onChange={(e) => setDateTimeTo(e.target.value)}
              style={{ ...placeholderStyle }}
            />
          </div>
          {/* Dropdown for Reason */}

          <div
            className="form-group"
            style={{
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              htmlFor="reason"
              style={{ display: "inline-block", width: "200px" }}
            >
              <strong>REASON :</strong>
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{
                borderRadius: "5px",
                height: "200px",
                border: "0.5px solid #212529",
                width: "400px",
                padding: "0.9rem",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#212529",
              color: "#fff",
              padding: "5px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              marginTop: "1rem",
              marginLeft: "20rem",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HallBookingForm;
