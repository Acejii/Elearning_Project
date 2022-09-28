import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown } from "antd";
import { useSelector, useDispatch } from "react-redux";
import AuthModal from "modules/Auth/components/AuthModal";
import OverlayContent from "./components/OverlayContent";

import logo from "../../assets/images/logo.png";
import avatar from "assets/images/user-avatar.jpg";
import "./header.scss";
import Search from "./components/Search";
import Cart from "components/Cart";
import { openAuthModal } from "modules/Auth/slices/authSlice";

const Header = () => {
  const [isLogin, setLogin] = useState(false);

  const { user, isOpenModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const header = document.getElementById("header");
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        if (prevScrollpos > currentScrollPos) {
          header.classList.remove("hide");
        } else {
          header.classList.add("hide");
        }
      } else {
        header.classList.remove("hide");
      }
      prevScrollpos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
  });

  const handleClickSignin = () => {
    dispatch(openAuthModal());
    setLogin(true);
  };

  const handleClickSignup = () => {
    dispatch(openAuthModal());
    setLogin(false);
  };

  return (
    <div id="header" className="header">
      <div className="header-wrapper container">
        {/*Begin  Header left */}
        <div className="left">
          {/* logo */}
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p className="logo-title">TLearn</p>
            </div>
          </Link>

          {/* nav */}
          <div className="main-nav">
            <NavLink to="/" className="item">
              Trang chủ
            </NavLink>
            <NavLink to="/courses" className="item">
              Khoá học
            </NavLink>
            <NavLink to="/blog" className="item">
              Blog
            </NavLink>
          </div>
        </div>
        {/*End Header left */}

        {/*Begin Header right */}

        <div className="right">
          {/* Search */}

          <Search />

          {/* cart */}
          <Cart />

          {user ? (
            <Dropdown
              overlay={<OverlayContent />}
              trigger={["click"]}
              placement="bottomRight"
            >
              <div className="avatar">
                <div className="avatar-icon">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="dropdown-icon">
                  <IoMdArrowDropdown fontSize={24} color="white" />
                </div>
              </div>
            </Dropdown>
          ) : (
            <>
              <button className="signin" onClick={handleClickSignin}>
                Đăng nhập
              </button>
              <button className="signup" onClick={handleClickSignup}>
                Đăng ký
              </button>
            </>
          )}
        </div>
        {/*End Header right */}
      </div>

      {/* AuthModal */}
      <AuthModal isLogin={isLogin} setLogin={setLogin} />
    </div>
  );
};

export default Header;
