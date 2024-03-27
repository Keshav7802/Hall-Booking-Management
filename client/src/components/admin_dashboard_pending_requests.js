import { useEffect, useState } from "react";

import AdminSideNavigation from "./AdminSideNavigation";
import "../css/tailwind.css";

function AdminPendingRequests(props) {
  const [bookingData, setBookingData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [refresh, setRefresh] = useState(true);

  //STUDENT ODA DETAILS
  const userData = JSON.parse(localStorage.getItem("authToken"));
  //

  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() - 1);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(
//         "https://au-hallbooking-backend.onrender.com/api/booking/adminBookings",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${userData.token}`,
//           },
//         }
//       );
//       const hallData = await data.json();

//       setBookingData(hallData);
//     };
//     fetchData();
//   }, [refresh]);

  const filteredBookings =
    selectedStatus === "all"
      ? bookingData
      : bookingData.filter((booking) => booking.Status === selectedStatus);

  const getStatusClassName = (status) => {
    switch (status) {
      case "rejected":
        return "block w-full p-4 bg-[#fe3233] rounded-lg shadow-lg hover:bg-[#f0292a] hover:cursor-default";
      case "approved":
        return "block w-full p-4 bg-[#37b317] rounded-lg shadow-lg hover:bg-[#31a314] hover:cursor-default"; // cursor-pointer for clickable
      case "pending":
        return "block w-full p-4 bg-[#c9c9c9] rounded-lg shadow-lg hover:bg-[#c0c0c0] hover:cursor-default";
      default:
        return "bg-white cursor-default";
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleDivClick = (status, id) => {
    if (status === "pending") {
      setShowModal(true);
      console.log(`Printing PDF for booking with ID: ${id}`);
    }
  };

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }; //DATE OPTIONS
  const timeOptions = { hour: "numeric", minute: "numeric" }; //TIME OPTIONS

  const handleReject = async (bookingId) => {
//     try {
//       const response = await fetch(
//         "https://au-hallbooking-backend.onrender.com/api/booking/updateBooking",
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${userData.token}`,
//           },
//           body: JSON.stringify({
//             _id: bookingId,
//             Status: "rejected",
//           }),
//         }
//       );

//       if (response.ok) {
//         // Handle success
//         console.log("Booking rejected successfully");
//         setRefresh(refresh ? false : true);
//         // Add any additional logic or state updates as needed
//       } else {
//         // Handle error
//         console.error("Failed to reject booking");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
  };

  const handleApprove = async (bookingId) => {
//     try {
//       const response = await fetch(
//         "https://au-hallbooking-backend.onrender.com/api/booking/updateBooking",
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${userData.token}`,
//           },
//           body: JSON.stringify({
//             _id: bookingId,
//             Status: "approved",
//           }),
//         }
//       );
//       console.log(response);
//       if (response.ok) {
//         // Handle success
//         const data = await response.json();
//         console.log(data);
//         console.log("Booking Approved successfully");
//         // Add any additional logic or state updates as needed
//       } else {
//         // Handle error
//         console.error("Failed to reject booking");
//       }

//       setRefresh(refresh ? false : true);
//     } catch (error) {
//       console.error("Error:", error);
//     }
  };

  return (
    // <div className="flex flex-col md:flex-row">
    <div
        style={{
          display: "flex",
          height:"85vh",
          marginTop: "-3rem"
        }}
      >
         {/* <AdminDashboardSidebar data={props.data} /> */}
         
          <AdminSideNavigation/>
    <div className="bg-neutral-100 w-full">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center flex-wrap">
            <span className="self-center mr-4 text-md md:text-2xl font-bold whitespace-nowrap">
              REQUESTS :{" "}
            </span>
            <ul className="font-medium mt-2 sm:mt-0 flex flex-wrap rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
                <div>Rejected</div>
              </li>
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#37b317] mr-2"></div>
                <div>Approved</div>
              </li>
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#c9c9c9] mr-2"></div>
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
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </nav>

      <div className="p-4 sm:p-10 max-h-[550px] overflow-y-auto">
        <ul>
          {filteredBookings.map((booking) => (
            <li className="p-2">
              <div className={`${getStatusClassName(booking.Status)}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight">
                  {booking.Hall_Name} |{" "}
                  {new Date(booking.Date).toLocaleDateString("en-US", options)}{" "}
                  |{" "}
                  {new Date(booking.Time_From).toLocaleTimeString(
                    "en-US",
                    timeOptions
                  )}{" "}
                  TO{" "}
                  {new Date(booking.Time_To).toLocaleTimeString(
                    "en-US",
                    timeOptions
                  )}{" "}
                </h5>
                <div className="flex justify-between items-end">
                  <div className="font-normal text-black text-sm">
                    <div>Affiliated Department/Club: {booking.Affiliated}</div>
                    <div>Reason : {booking.Reason}</div>
                  </div>
                  <div className="text-sm">
                    <div>Submitted On :</div>
                    <div>{new Date(booking.createdAt).toLocaleString()}</div>
                  </div>
                </div>

                {booking.Status === "pending" ? (
                  <div className="flex justify-end">
                    <button
                      className="bg-green-500 text-white hover:bg-green-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg mr-2"
                      onClick={() => handleApprove(booking._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white hover:bg-red-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg"
                      onClick={() => handleReject(booking._id)}
                    >
                      Reject
                    </button>
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}
export default AdminPendingRequests;
