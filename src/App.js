import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@mui/material/CssBaseline";
import AuthPage from "./pages/Auth";
import CardDetail from "./pages/CardDetail";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
