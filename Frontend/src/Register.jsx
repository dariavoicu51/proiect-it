import { useState } from "react";
import { Link } from "react-router-dom";
import "./pages/Register.css";
import Navbar from "./components/Navbar";

import chilli from "./assets/icons/sort.png";
import grill from "./assets/icons/bucatarie2.png";
import burger from "./assets/icons/burger.png";
import apron from "./assets/icons/sort.png";
import fork from "./assets/icons/knife.png";
import sausage from "./assets/icons/bucatarie.png";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Parolele nu coincid!");
      return;
    }

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        telephone,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/login";
    } else {
      setMessage(data.message);
    }
  }

  return (
    <>
      <Navbar />

      <div className="register-page">
        {/* ICONIȚE FUNDAL */}
        <img src={chilli} className="bg-icon icon1" alt="" />
        <img src={fork} className="bg-icon icon2" alt="" />
        <img src={sausage} className="bg-icon icon3" alt="" />
        <img src={grill} className="bg-icon icon4" alt="" />
        <img src={burger} className="bg-icon icon5" alt="" />
        <img src={apron} className="bg-icon icon6" alt="" />

        {/* CARD REGISTER */}
        <div className="register-card">
          <h2 className="register-title">Gata să devii șef pe grătare?</h2>

          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="register-input"
            />

            <input
              type="tel"
              placeholder="Telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="register-input"
            />

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="register-input"
            />

            {message && <p className="register-error">{message}</p>}

            <button type="submit" className="register-button">
              Sign up
            </button>
          </form>

          <p className="login-msg">
            Ai deja cont? <Link to="/login">Log in</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
