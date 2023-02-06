import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import AuthPage from "./pages/Auth";
import CardDetail from "./pages/CardDetail";

import React, { useState } from "react";

import Header from "./Components/Header";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Header
        setUser={setUser}
        openModal={openModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<CardDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
