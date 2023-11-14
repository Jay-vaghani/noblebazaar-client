import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ component, isAuthenticated }) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return navigate("/login");
  });

  return component;
}

export default ProtectedRoute;
