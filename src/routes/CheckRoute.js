import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckAdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user && user.maLoaiNguoiDung !== "GV") {
    return <Navigate to="/" />;
  }

  return children;
};

export default CheckRoute;
