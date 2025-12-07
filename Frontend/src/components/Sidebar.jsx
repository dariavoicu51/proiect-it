import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkCls = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div style={{fontSize:14, color:'#bfdbfe'}}>🔥 Grill League</div>
        <div style={{fontSize:12, color:'#a3bffa', marginTop:6}}>Share & Vote</div>
      </div>

      <nav>
        <NavLink to="/dashboard" className={linkCls}>🏠 Dashboard</NavLink>
        <NavLink to="/profile" className={linkCls}>👤 Profile</NavLink>
        <NavLink to="/settings" className={linkCls}>⚙️ Settings</NavLink>
      </nav>
    </aside>
  );
}
