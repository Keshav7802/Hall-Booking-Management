import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";

function App() {
  return (
    <BrowserRouter>
      <div className="vh-100">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
