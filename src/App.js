import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import AuthPage from "./pages/Auth";
import CardDetail from "./pages/CardDetail";
import UserProvider from "./Context/userContext";

import React, { useState } from "react";

import Header from "./Components/Header";

function App() {
  return (
    <UserProvider>
      <Header />
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<CardDetail />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
