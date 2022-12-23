import React from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ user }) {
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
