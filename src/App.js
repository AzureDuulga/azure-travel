import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import AuthPage from "./pages/Auth";
import CardDetail from "./pages/CardDetail";
import Header from "./Components/Header";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header handleClose={handleClose} setUser={setUser} open={open} />
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
