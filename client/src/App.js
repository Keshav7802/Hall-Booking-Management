import "./App.css";
import React, { useEffect, useState } from "react";
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
import Calender from "./components/Calender.js";

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

          {/* <Route path="/book-hall/"hallId" component={<HallBookingForm />} /> */}
          <Route path="/Cal" element={<Calender />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
