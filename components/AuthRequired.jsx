import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");
  let location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must be log in first.", from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
