import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillSetting } from "react-icons/ai";
import { MdAdminPanelSettings, MdLogout } from "react-icons/md";
import { logout } from "modules/Auth/slices/authSlice";
import { toast } from "react-toastify";

import avatar from "assets/images/user-avatar.jpg";
import "./overlayContent.scss";
import toastMessage from "components/Toast/toastMessage";

const OverlayContent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = async () => {
    const id = toast.loading("Please wait...");
    await setTimeout(() => {
      dispatch(logout());
      toast.update(id, {
        render: "Đăng xuất thành công",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1300);
  };

  const handleCLickAdmin = () => {
    if (user && user.maLoaiNguoiDung === "GV") {
      navigate("/admin");
    } else {
      toast.warn(
        toastMessage("Truy cập bị từ chối", "Tài khoản không có quyền Quản trị")
      );
    }
  };

  return (
    <div className="overlayContent">
      <div className="wrapper">
        <div className="avatar">
          <div className="avatar-icon">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="name">{user?.hoTen}</p>
        </div>
        <div className="line"></div>

        <Link to="/profile" className="profile">
          <p>Xem trang cá nhân</p>
        </Link>

        <div className="main">
          <div className="item">
            <div className="icon">
              <AiFillSetting size={20} />
            </div>
            <div className="content">Cài đặt & Quyền riêng tư</div>
          </div>
          <div className="item">
            <div className="icon">
              <MdAdminPanelSettings size={20} />
            </div>
            <div className="content" onClick={handleCLickAdmin}>
              Quyền quản trị
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <MdLogout size={20} />
            </div>
            <div className="content" onClick={handleLogout}>
              Đăng xuất
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayContent;
