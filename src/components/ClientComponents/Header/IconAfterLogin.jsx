import {
  faChevronDown,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function IconAfterLogin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const infoPage = (value) => {
    history.push(`/thong-tin-tai-khoan/${value}`);
  };
  const logOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  const menu = (
    <Menu className="avartar_content">
      <Menu.Item className="dropDown_item">
        <button
          onClick={() => infoPage(user?.taiKhoan)}
          className="text-xl text-left w-full button_dropdown"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="button_showMenu showMenu_avatar cursor-pointer text-xl mr-2"
          />
          Tài Khoản
        </button>
      </Menu.Item>
      <Menu.Item className="dropDown_item">
        <button
          onClick={logOut}
          className="text-xl text-left w-full button_dropdown"
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="button_showMenu showMenu_avatar cursor-pointer text-xl mr-2"
          />
          Đăng Xuất
        </button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div children>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <div className="flex space-x-5 items-center">
          <img
            alt={""}
            className="w-10 h-10 rounded-full ring-2 ring-offset-4 ring-coolGray-700 ring-offset-coolGray-800"
            src={`https://i.pravatar.cc/150?u=${user?.taiKhoan}`}
          />
          <div className="showMenu_avatar">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="button_showMenu  cursor-pointer text-xl"
            />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default IconAfterLogin;
