import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-wrap">
        <header className="header">
          <div className="title">Grills League</div>
          <div className="actions">
            {/* aici poți adăuga icon, user avatar etc */}
            <button className="btn btn-ghost" onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}>Logout</button>
          </div>
        </header>

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
