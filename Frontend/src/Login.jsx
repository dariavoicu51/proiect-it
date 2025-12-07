import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pages/Login.css";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";

import chilli from "./assets/icons/sort.png";
import grill from "./assets/icons/bucatarie2.png";
import burger from "./assets/icons/burger.png";
import apron from "./assets/icons/sort.png";
import fork from "./assets/icons/knife.png";
import sausage from "./assets/icons/bucatarie.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      login(data.user); // salvăm userul în context + localStorage
      navigate("/dashboard");
    } else {
      setMessage(data.message);
    }
  }

  return (
    <>
      <Navbar />

      <div className="login-page">
        {/* ICONIȚE FUNDAL */}
        <img src={chilli} className="bg-icon icon1" alt="" />
        <img src={fork} className="bg-icon icon2" alt="" />
        <img src={sausage} className="bg-icon icon3" alt="" />
        <img src={grill} className="bg-icon icon4" alt="" />
        <img src={burger} className="bg-icon icon5" alt="" />
        <img src={apron} className="bg-icon icon6" alt="" />

        {/* CARD LOGIN */}
        <div className="login-card">
          <h2 className="login-title">Bine ai revenit</h2>
          <p className="login-subtitle">mare grătaragiu!</p>

          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />

            {message && <p className="login-error">{message}</p>}

            <button type="submit" className="login-button">
              Log in
            </button>
          </form>

          <Link to="/forgot-password" className="forgot">
            Forgot password
          </Link>

          <p className="signup-msg">
            No account? Press here to <Link to="/register">sign up</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
