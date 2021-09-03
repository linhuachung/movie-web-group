import React from "react";
import { NavLink } from "react-router-dom";

function SideBarAdmin() {
  return (
    <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-64">
      <div className="md:mt-12 md:w-64 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li className="mr-3 flex-1">
            <NavLink
              to="/admin/dashboard"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
              activeClassName="  border-b-2 border-pink-500"
              exact
            >
              <i className="fas fa-tasks pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Tổng Quan
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              to="/admin/dashboard/user-manager"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
              activeClassName="  border-b-2 border-purple-500"
            >
              <i className="fa fa-envelope pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Quản lý Người Dùng
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              to="/admin/dashboard/movie-manager"
              className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              activeClassName="  border-b-2 border-red-500"
            >
              <i className="fa fa-wallet pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Quản Lý Phim
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              to="/admin/dashboard/theater-manager"
              className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-500"
              activeClassName="  border-b-2 border-yellow-500 "
            >
              <i className="fa fa-wallet pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Quản Lý Rạp
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBarAdmin;
