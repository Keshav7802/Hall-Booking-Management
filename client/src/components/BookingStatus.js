import { useEffect, useState } from "react";
import SideNavigation from "./SideNavigation";
import "../css/LoginPage.css";
import { usePDF } from "react-to-pdf";

const containerStyle = {
  display: "flex",
  marginTop: "-2em",
};

const sidebarStyle = {
  position: "fixed",
  backgroundColor: "#f0f0f0",
  width: "10%",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "250px",
  width: "90%",
  boxSizing: "border-box",
  padding: "2rem 1rem 0rem 1rem",
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  marginTop: "-1rem",
  marginLeft: "1rem",
};

const headingsContainerStyle = {
  display: "flex",
  fontWeight: "600",
  marginTop: "1rem",
  marginLeft: "1rem",
  flexWrap: "wrap",
};

const headingStyle = {
  fontSize: "15px",
  marginRight: "2rem", // Adjusted margin for spacing between headings
};

const squareBlockStyle = {
  width: "15px",
  height: "15px",
  marginRight: "0.6rem",
  marginTop: "0.27rem",
};

const blueSquare = {
  ...squareBlockStyle,
  backgroundColor: "blue",
};

const redSquare = {
  ...squareBlockStyle,
  backgroundColor: "red",
};

const greySquare = {
  ...squareBlockStyle,
  backgroundColor: "grey",
};

function StudentDashboardPendingRequests(props) {
  const [bookingData, setBookingData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [bookingPDFData, setBookingPDFData] = useState([{}]);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  //STUDENT ODA DETAILS
  const userData = JSON.parse(localStorage.getItem("authToken"));
  //

  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() - 1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://localhost:3001/booking/getAllBookings",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      const hallData = await data.json();

      setBookingData(hallData);
    };
    fetchData();
  }, []);

  const formatISODate = (isoDate) =>
    new Date(isoDate).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    });

  const filteredBookings =
    selectedStatus === "all"
      ? bookingData
      : bookingData.filter((booking) => booking.bookingStatus === selectedStatus);

  const getStatusClassName = (status) => {
    switch (status) {
      case "Rejected":
        return "block w-full p-4 bg-[#fe3233] rounded-lg shadow-lg hover:bg-[#f0292a] hover:cursor-default";
      case "Approved":
        return "block w-full p-4 bg-[#37b317] rounded-lg shadow-lg hover:bg-[#31a314] hover:cursor-default"; // cursor-pointer for clickable
      case "Pending":
        return "block w-full p-4 bg-[#fea501] rounded-lg shadow-lg hover:bg-[#f09c02] hover:cursor-default";
      default:
        return "bg-white cursor-default";
    }
  };

  const handleDivClick = (status, id, booking) => {
    if (status === "approved") {
      // Implement logic to print the approval PDF
      console.log(`Printing PDF for booking with ID: ${id}`);
      setBookingPDFData([booking]);
      setTimeout(() => {
        document.getElementById("pdf").style.display = "block";
        toPDF();
        document.getElementById("pdf").style.display = "none";
      }, 1000);
    }
  };

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }; //DATE OPTIONS
  const timeOptions = { hour: "numeric", minute: "numeric" }; //TIME OPTIONS

  // console.log(filteredBookings);
  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <SideNavigation />
      </div>
      <div style={contentStyle}>
        <nav className="bg-white border-gray-200 w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center flex-wrap w-full">
              <span className="self-center mr-4 text-md md:text-2xl font-bold whitespace-nowrap">
                REQUESTS :{" "}
              </span>
              <ul className="font-medium mt-2 sm:mt-0 flex flex-wrap rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
                <li className="flex items-center mr-2 text-sm sm:text-md">
                  <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
                  <div>Rejected</div>
                </li>
                <li className="flex items-center mr-2 text-sm sm:text-md">
                  <div className="h-4 w-6 bg-[#37b317] mr-2"></div>
                  <div>Approved</div>
                </li>
                <li className="flex items-center mr-2 text-sm sm:text-md">
                  <div className="h-4 w-6 bg-[#fea501] mr-2"></div>
                  <div>Pending</div>
                </li>
              </ul>
            </div>

            <div
              className="mt-2 lg:mt-0 w-full md:block md:w-auto"
              id="navbar-default"
            >
              <select
                id="email"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                required
              >
                <option value="all">All</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </nav>

        <div className="p-4 sm:p-10 max-h-[550px] flex overflow-y-auto w-full ">
          <ul>
            {filteredBookings.map((booking) => (
              <li className="p-2">
                {console.log(booking)}
                <div
                  className={`${getStatusClassName(booking.bookingStatus)}`}
                  onClick={() =>
                    handleDivClick(booking.bookingStatus, booking._id, booking)
                  }
                >
                  <h5 className="mb-2 text-xl font-bold tracking-tight">
                    {booking.hallName} |{" "}
                    {new Date(booking.startDateTime).toLocaleDateString("en-US", options)}{" "}
                    |{" "}
                    {new Date(booking.startDateTime).toLocaleTimeString("en-US", timeOptions)}{" "}
                    TO{" "}
                    {new Date(
                      booking.endDateTime
                    ).toLocaleTimeString("en-US", timeOptions)}{" "}
                  </h5>
                  <div className="flex justify-between items-end">
                    <div className="font-normal text-black text-sm">
                      <div>Affiliated Department/Club: {booking.clubName}</div>
                      <div>Reason : {booking.eventPurpose}</div>
                    </div>
                    <div className="text-sm">
                      <div>Submitted On :</div>
                      <div>{new Date(booking.bookingDateTime).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPendingRequests;
