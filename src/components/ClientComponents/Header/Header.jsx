import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

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
  return (
    <div className="header">
      <div className="nav_container ">
        <div className="nav_left_responsive">
          <button onClick={handleShowSideBar}>
            <FontAwesomeIcon icon={faBars} className="button_showMenu" />
          </button>
        </div>
        <div className="nav_left">
          <Link to="/" className="nav_logo">
            <img src="/image/LogoMovie.png" alt={""} />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav_item">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/" className="nav_item">
                  Phim
                </Link>
              </li>
              <li>
                <Link to="/" className="nav_item">
                  Thông tin
                </Link>
              </li>
              <li>
                <Link to="/" className="nav_item">
                  Hỗ trợ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav_right">
          <div className="nav_Button">
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
      {showSideBar ? <SideBar handleShowSideBar={handleShowSideBar} /> : null}
    </div>
  );
}

export default Header;
