import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import App from "../../App";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return <App />;
};

export default ProtectedRoute;
