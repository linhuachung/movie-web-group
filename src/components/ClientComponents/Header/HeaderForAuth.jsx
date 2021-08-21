import React from "react";
import { NavLink } from "react-router-dom";

function HeaderForAuth() {
  return (
    <div className={`header`}>
      <div className="nav_container ">
        <div className="nav_left_responsive"></div>
        <div className="nav_left">
          <NavLink to="/" className="nav_logo">
            <img src="/image/LogoMovie.png" alt={""} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderForAuth;
