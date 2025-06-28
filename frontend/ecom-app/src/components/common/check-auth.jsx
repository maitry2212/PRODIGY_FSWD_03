import React from "react";
import { Navigate } from "react-router-dom";

export default function CheckAuth({ isAuthenticated, user, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/unauth-page" replace />;
  }

  return children || <Navigate to="/shop/home" replace />;
} 