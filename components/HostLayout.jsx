import { Outlet, Link } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav>
        <div className="nav-links">
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
