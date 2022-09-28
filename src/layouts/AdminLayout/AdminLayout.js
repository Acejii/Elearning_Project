import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./adminLayout.scss";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user || user?.maLoaiNguoiDung !== "GV") {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>AdminLayout</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
