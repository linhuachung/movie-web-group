import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderDashboardAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));
  // click to show side bar
  const [showSideBar, setShowSideBar] = useState(false);
  const handleShowSideBar = () => {
    setShowSideBar((show) => !show);
  };
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          <Link to="/admin/dashboard" className="flex items-center">
            <img src="/image/LogoMovie.png" alt={"logo"} className="w-10" />
            <span className="text-xl pl-2">Movie Start Manager</span>
          </Link>
        </div>
        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
          <span className="relative w-full">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
            />
            <div
              className="absolute search-icon"
              style={{ top: "1rem", left: ".8rem" }}
            >
              <svg
                className="fill-current pointer-events-none text-white w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </span>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="flex-1 md:flex-none md:mr-3">
              <Link className="text-white" to="/">
                Go To Home Page
              </Link>
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <div className="relative inline-block">
                <button
                  onClick={handleShowSideBar}
                  className=" text-white focus:outline-none flex items-center"
                >
                  <span className="pr-2">
                    <img
                      alt={""}
                      className="w-10 h-10 rounded-full "
                      src={`https://i.pravatar.cc/150?u=${user?.taiKhoan}`}
                    />
                  </span>
                  Hi, User
                  <svg
                    className="h-3 fill-current inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                {showSideBar ? (
                  <div className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30">
                    <input
                      type="text"
                      className="drop-search p-2 text-gray-600"
                      placeholder="Search.."
                      id="myInput"
                      onkeyup="filterDD('myDropdown','myInput')"
                    />
                    <Link
                      to="/admin/profile/profile-user"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-user fa-fw" /> Profile
                    </Link>

                    <div className="border border-gray-800" />
                    <Link
                      to="/"
                      onClick={logOut}
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw" /> Log Out
                    </Link>
                  </div>
                ) : null}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderDashboardAdmin;
