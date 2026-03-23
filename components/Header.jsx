import { Link, NavLink } from "react-router-dom";
import imageUrl from "../src/assets/images/user_circle.png";

export default function Header() {

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  
  return (
    <nav>
      <Link to="/">#VANLIFE</Link>
      <div className="nav-links">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>

        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>Logout</button>
      </div>
    </nav>
  );
}
