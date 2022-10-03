import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import logo from "assets/images/logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="wrapper">
        <div className="logo">
          <Link to="/" className="logo">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
            <p className="logo-title">TLearning</p>
          </Link>
        </div>

        <div className="row">
          <div className="col col-3">
            <div className="policies">
              <p className="title">Chính sách & quy định</p>
              <a href="#" className="item">
                Thoả thuận sử dụng
              </a>
              <a href="#" className="item">
                Quy chế hoạt động
              </a>
              <a href="#" className="item">
                Chính sách bảo mật
              </a>
              <a href="#" className="item">
                Quyền lợi thành viên
              </a>
            </div>
          </div>
          <div className="col col-3">
            <p className="title">Kết nối</p>
            <div className="item">
              <a
                href="https://www.facebook.com/"
                className="facebook-icon"
                target="_blank"
              >
                <FaFacebookSquare size="24px" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPirl83_oKGi1403q6IzyTg"
                className="youtube-icon"
                target="_blank"
              >
                <FaYoutube size="28px" />
              </a>
            </div>
          </div>
          <div className="col col-3 contact">
            <p className="title">Liên hệ</p>
            <a href="mailto:hoangthu7331@gmail.com" className="item">
              <div className="icon">
                <AiOutlineMail />
              </div>
              <div className="content">hoangthu7331@gmail</div>
            </a>
            <a href="tel:+84976480450" className="item">
              <div className="icon">
                <AiOutlinePhone />
              </div>
              <div className="content">0976 480 450</div>
            </a>
            <div className="item">
              <div className="icon">
                <GoLocation />
              </div>
              <div className="content">Lê Đức Thọ, Gò Vấp</div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Coppyright @ 2022 TLearning</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
