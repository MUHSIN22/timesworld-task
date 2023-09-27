import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RouteProtector() {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (loggedIn === "true") {
    return <Outlet />;
  } else {
    <Navigate to="/login" replace />;
  }
}
