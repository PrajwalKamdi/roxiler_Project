import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [log, setLog] = React.useState(null);
  // console.log(localStorage.getItem("isLoggedIn"));
  const handleLog = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setLog(isLoggedIn === "true");
  };
  useEffect(() => {
    handleLog();
  }, []);
  if(log === null) {
    return <div>Loading...</div>;
  }
  return log  ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
