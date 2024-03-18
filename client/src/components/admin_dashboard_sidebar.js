import dashboard_icon_grey from "../assets/dashboard_icon_grey.jpg";
import dashboard_icon_white from "../assets/dashboard_icon_white.png";
import calendar_icon_white from "../assets/calendar_icon_white.png";
import calendar_icon_grey from "../assets/calendar_icon_grey.png";
import message_icon_grey from "../assets/message_icon_grey.png";
import message_icon_white from "../assets/message_icon_white.png";
import logout_icon_grey from "../assets/logout_icon_grey.png";
import profile from "../assets/admin_profile_icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminDashboardSidebar(props) {
    const navigate = useNavigate();
    const styles = {
        backgroundColor: "rgb(14, 165, 233)",
        color: "rgb(255, 255, 255)",
    };

    const [showModal, setShowModal] = useState(false);
    //   const userData = JSON.parse(localStorage.getItem("authToken"));

    return (
        <div
            className="p-2 bg-white w-full flex justify-end md:w-96 md:flex md:flex-col md:justify-between"
            id="sideNav"
        >
            <div className="md:hidden flex items-center">
                <button
                    id="menuBtn"
                    className="bg-neutral-100 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-neutral-300"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <nav className="hidden md:block">
                <div className="flex justify-start items-center mt-2 mb-6 p-2">
                    <div className="bg-gray-300 h-14 w-14 mr-3 rounded-full flex justify-center items-center">
                        <img src={profile} className="h-10 w-10" alt="profile-icon"></img>
                    </div>
                    {/* <div className="font-bold text-xl">{userData.adminName}</div>
           */}
                    <div className="font-bold text-xl">Drishti Jain</div>
                </div>
                <a
                    className="block text-gray-500 py-2.5 px-4 my-2 rounded"
                    style={props.data === "dashboard" ? styles : {}}
                    href="/admin/dashboard"
                >
                    <div className="flex items-center">
                        <img
                            src={
                                props.data === "dashboard"
                                    ? dashboard_icon_white
                                    : dashboard_icon_grey
                            }
                            className="h-5 w-5 mr-2"
                            alt="dashboard-icon"
                        />

                        <div className="text-grey">Dashboard</div>
                    </div>
                </a>
                <a
                    className="block text-gray-500 py-2.5 px-4 my-2 rounded"
                    style={props.data === "hall_availability" ? styles : {}}
                    href="/admin/dashboard/hall_availability"
                >
                    <div className="flex items-center">
                        <img
                            src={
                                props.data === "hall_availability"
                                    ? calendar_icon_white
                                    : calendar_icon_grey
                            }
                            className="h-5 w-5 mr-2"
                            alt="hall-icon"
                        ></img>
                        <div className="text-grey">Hall Availability</div>
                    </div>
                </a>
                <a
                    className="block text-gray-500 py-2.5 px-4 my-2 rounded"
                    style={props.data === "pending_requests" ? styles : {}}
                    href="/admin/dashboard/pending_requests"
                >
                    <div className="flex items-center">
                        <img
                            src={
                                props.data === "pending_requests"
                                    ? message_icon_white
                                    : message_icon_grey
                            }
                            className="h-5 w-5 mr-2"
                            alt="message-icon"
                        ></img>
                        <div className="text-grey">Pending Requests</div>
                    </div>
                </a>
                <button
                    className="text-gray-500 w-full py-2.5 px-4 my-2 rounded hidden md:flex"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <div className="flex items-center">
                        <img
                            src={logout_icon_grey}
                            className="h-5 w-5 mr-2"
                            alt="logout-icon"
                        ></img>
                        <div className="text-grey">Logout</div>
                    </div>
                </button>
            </nav>


            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed px-20">
                                        Do you really want to logout ?
                                    </p>
                                </div>

                                <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 hover:bg-red-100 rounded font-semibold px-4 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        No
                                    </button>
                                    <button
                                        className="bg-sky-500 text-white hover:bg-sky-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowModal(false);
                                            localStorage.removeItem("authToken");

                                            props.changeRefreshState();
                                            navigate("/");
                                        }}

                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}

export default AdminDashboardSidebar;
