import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar(props) {
  const handleShowSideBar = props.handleShowSideBar;
  return (
    <div>
      <div className="nav_container_responsive " onClick={handleShowSideBar}>
        <nav className="animation_sidebar">
          <div className="title_sideBar">
            <Link to="/">
              <img src="/image/LogoMovie.png" alt={""} />
              <p>Movie Start</p>
            </Link>
          </div>
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
    </div>
  );
}

export default SideBar;
