import { useEffect, useState } from "react";
import UserContext from "../components/UserContext";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AdminSideNavigation from "./AdminSideNavigation";
import { toast } from "react-toastify";
import "../css/tailwind.css";
import { useNavigate } from "react-router-dom";

function AdminPendingRequests(props) {
  const [bookingData, setBookingData] = useState([]);
  const { userName } = useContext(UserContext);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();

  //STUDENT ODA DETAILS
  const userData = JSON.parse(localStorage.getItem("authToken"));
  //

  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() - 1);

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

      setBookingData(hallData);
    };
    fetchData();
  }, []);
  const filteredBookings =
    selectedStatus === "all"
      ? bookingData
      : bookingData.filter((booking) => booking.Status === selectedStatus);

  const getStatusClassName = (status) => {
    switch (status) {
      case "Rejected":
        return "block w-full p-4 bg-[#fe3233] rounded-lg shadow-lg hover:bg-[#f0292a] hover:cursor-default";
      case "Approved":
        return "block w-full p-4 bg-[#37b317] rounded-lg shadow-lg hover:bg-[#31a314] hover:cursor-default"; // cursor-pointer for clickable
      case "Pending":
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
    try {
      const response = await fetch(
        "http://localhost:3001/booking/updateBooking",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userData.token}`,
          },
          body: JSON.stringify({
            id: bookingId,
            bookingStatus: "Rejected",
            approvalDateTime: new Date(),
          }),
        }
      );

      if (response.ok) {
        // Handle success
        // console.log("Booking rejected successfully");
        toast.success("Booking Rejected Successfully");
        navigate("/AdminPendingRequest");
        // Add any additional logic or state updates as needed
      } else {
        // Handle error
        toast.error("Failed to reject booking");
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  const handleApprove = async (bookingId) => {
    console.log(bookingId)
    try {
      const response = await fetch(
        "http://localhost:3001/booking/updateBooking",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${userData.token}`,
          },
          body: JSON.stringify({
            id: bookingId,
            bookingStatus: "Approved",
            approvalDateTime: new Date(),
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        // Handle success
        // console.log("Booking Approved successfully");
        toast.success("Booking Approved Successfully");
        navigate("/AdminPendingRequest");
        // Add any additional logic or state updates as needed
      } else {
        // Handle error
        toast.error("Failed to approve booking");
      }
    } catch (error) {
      toast.error("Error:", error);
    }
  };

  if (!userName) {
    return (
      <div>
      <div style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: '20px' }}>
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
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </nav>

      <div className="p-4 sm:p-10 max-h-[550px] overflow-y-auto">
        <ul>
          {filteredBookings.map((booking) => (
            <li className="p-2">
              <div className={`${getStatusClassName(booking.bookingStatus)}`}>
                <h5 className="mb-2 text-xl font-bold tracking-tight">
                  {booking.hallName} |{" "}
                  {new Date(booking.startDateTime).toLocaleDateString("en-US", options)}{" "}
                  |{" "}
                  {new Date(booking.startDateTime).toLocaleTimeString(
                    "en-US",
                    timeOptions
                  )}{" "}
                  TO{" "}
                  {new Date(booking.endDateTime).toLocaleTimeString(
                    "en-US",
                    timeOptions
                  )}{" "}
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

                {booking.bookingStatus === "Pending" ? (
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
