import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import IconAfterLogin from "./IconAfterLogin";

function Header() {
  // click to show side bar
  const [showSideBar, setShowSideBar] = useState(false);
  const handleShowSideBar = () => {
    setShowSideBar((show) => !show);
  };
  const showMenuRes = () => {
    if (window.innerWidth > 1200) {
      setShowSideBar(false);
    }
  };
  useEffect(() => {
    // Hiện nav khi scroll xuống
    window.addEventListener("resize", showMenuRes);
    // Xóa nav khi scroll lên cùng
    return () => {
      window.removeEventListener("resize", showMenuRes);
    };
  }, []);

  // Show navbar
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    // Hiện nav khi scroll xuống
    window.addEventListener("scroll", controlNavbar);
    // Xóa nav khi scroll lên cùng
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={`header ${show && `header_scroll nav_roll`}`}>
      <div className="nav_container ">
        <div className="nav_left_responsive">
          <button onClick={handleShowSideBar}>
            <FontAwesomeIcon icon={faBars} className="button_showMenu" />
          </button>
        </div>
        <div className="nav_left">
          <NavLink to="/" className="nav_logo">
            <img src="/image/LogoMovie.png" alt={""} />
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact className="nav_item ">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/danh-sach-phim"
                  className="nav_item"
                  activeClassName="active"
                >
                  Phim
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/thong-tin"
                  className="nav_item"
                  activeClassName="active"
                >
                  Thông tin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ho-tro"
                  className="nav_item"
                  activeClassName="active"
                >
                  Hỗ trợ
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav_right">
          {user === null ? (
            <Link
              to="/client/dang-nhap"
              className="nav_Button hover:text-white duration-500"
            >
              Đăng nhập
            </Link>
          ) : user.maLoaiNguoiDung === "KhachHang" ? (
            <IconAfterLogin />
          ) : (
            <Link
              to="/client/dang-nhap"
              className="nav_Button hover:text-white duration-500"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
      {showSideBar ? <SideBar handleShowSideBar={handleShowSideBar} /> : null}
    </div>
  );
}

export default Header;
