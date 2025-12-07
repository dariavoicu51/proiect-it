import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Postgrill from "./pages/Postgrill";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/*  Pagina principală */}
      <Route path="/" element={<Home />} />

      {/*  Login */}
      <Route path="/login" element={<Login />} />

      {/* Register */}
      <Route path="/register" element={<Register />} />

      {/* Forgot password */}
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Profil */}
      <Route path="/profile" element={<Profile />} />

      {/* Postgrill */}
      <Route path="/post-grill" element={<Postgrill />} />
    </Routes>
  );
}
