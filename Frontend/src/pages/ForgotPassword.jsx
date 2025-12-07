import { useState } from "react";
import Navbar from "../components/Navbar";
import "./ForgotPassword.css";

import chilli from "../assets/icons/sort.png";
import grill from "../assets/icons/bucatarie2.png";
import burger from "../assets/icons/burger.png";
import apron from "../assets/icons/sort.png";
import fork from "../assets/icons/knife.png";
import sausage from "../assets/icons/bucatarie.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Recovery email sent!");
  }

  return (
    <>
      <Navbar />

      <div className="forgot-page">

        {/* BACKGROUND ICONS */}
        <img src={chilli} className="bg-icon icon1" />
        <img src={fork} className="bg-icon icon2" />
        <img src={sausage} className="bg-icon icon3" />
        <img src={grill} className="bg-icon icon4" />
        <img src={burger} className="bg-icon icon5" />
        <img src={apron} className="bg-icon icon6" />

        <div className="forgot-card">
          <h2 className="forgot-title">Forgot password</h2>

          <form onSubmit={handleSubmit} className="forgot-form">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="forgot-input"
            />

            <button type="submit" className="forgot-button">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
