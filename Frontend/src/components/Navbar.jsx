import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Pimp Your Grill</div>

      <nav>
        <Link to="/best-grills">Best grills</Link>
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
