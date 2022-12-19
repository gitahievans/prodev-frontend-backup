import React from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ user, setUser }) {
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => setUser(data));
  //       <Navigate to="/" />;
  //     }
  //   });
  // }, [user]);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
