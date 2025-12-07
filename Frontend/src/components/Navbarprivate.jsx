import { Link } from "react-router-dom";
import "./Navbarprivate.css";

export default function NavbarPrivate() {

  function handleLogout() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/dashboard" className="logo">Pimp Your Grill</Link>
      </div>

      <div className="navbar-right">
        <Link to="/profile">Profile</Link>
        <Link to="/best-grills">Best grills</Link>
        <button onClick={handleLogout} className="btn-outline">Logout</button>
      </div>
    </nav>
  );
}
