import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";
import LandingPage from "./components/LandingPage.js";
import HallAvailability from "./components/HallAvailability.js";
import BookingStatus from "./components/BookingStatus.js";
import HallBooking from "./components/HallBooking.js";
import HallBookingForm from "./components/HallBookingForm.js";
<<<<<<< HEAD
import Calender from "./components/Calendar.js";
=======
import Calender from "./components/Calender.js";
import HallInfo from "./components/HallInfo.js";
>>>>>>> 39e720e3f691f1b7b6a4c3d71ce65db32353d54c

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Availability" element={<HallAvailability />} />
          <Route path="/Status" element={<BookingStatus />} />
          <Route path="/HallBook" element={<HallBooking />} />
          <Route path="/HallBookForm" element={<HallBookingForm />} />
          <Route path="/HallDetails" element={<HallInfo/>}/>
          <Route path="/Cal" element={<Calender />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
