import NavbarPrivate from "../components/NavbarPrivate";
import "./Profile.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // dacă user nu există → redirect la login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <>
        <NavbarPrivate />
        <div className="profile-loading">Loading...</div>
      </>
    );
  }

  return (
    <>
      <NavbarPrivate />

      <div className="profile-page">
        {/* CARD DATE USER */}
        <div className="profile-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>E-mail:</strong> {user.email}</p>
          <p><strong>Telephone:</strong> {user.phone || "Not provided"}</p>
        </div>

        {/* BUTON - adaugă un grătar */}
        <div className="add-grill-wrap">
          <button
            className="add-grill-btn"
            onClick={() => navigate("/post-grill")}
          >
            Post a grill
          </button>
        </div>

        {/* LISTA GRILL-URI */}
        <h2 className="grills-title">My grills</h2>

        <div className="grill-list">
          <div className="grill-item">No grills posted yet.</div>
        </div>
      </div>
    </>
  );
}
