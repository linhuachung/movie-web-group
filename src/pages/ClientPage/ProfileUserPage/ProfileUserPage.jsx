import {
  faHistory,
  faSignOutAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GET_PROFILE_USER_SAGA_TYPE } from "../../../redux/types/QuanLyNguoiDungType/AuthUser";

function ProfileUserPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PROFILE_USER_SAGA_TYPE });
  }, [dispatch]);

  const user = useSelector((state) => state.QuanLyNguoiDungReducer.userProfile);
  console.log(user);
  return (
    <div>
      <div className="login_container profile_Container">
        <div className="profile_content">
          <div className="profile_contentTabPanel">
            <div className="h-full flex flex-col">
              <div className="profile_avatar">
                <img
                  alt={""}
                  className="w-40 h-40 rounded-full "
                  src={`https://i.pravatar.cc/150?u=${user?.taiKhoan}`}
                />
                <div>
                  <h2 className="text-lg font-semibold">{user?.taiKhoan}</h2>
                </div>
              </div>
              <div className="h-full">
                <div className="profile_contentTabPanel_itemTab">
                  <div className="tabTop w-full">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                      <li>
                        <NavLink to="profile" className="item_tap">
                          <FontAwesomeIcon icon={faUserAlt} className="mr-2" />
                          Tài Khoản
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="history" className="item_tap">
                          <FontAwesomeIcon icon={faHistory} className="mr-2" />
                          Lịch Sử Đặt Vé
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <ul className="pt-4 pb-2 space-y-1 text-sm w-full">
                    <li>
                      <NavLink to="/" className="item_tap">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        Đăng Xuất
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_contentTab">
            <div className="profile_form">
              <form>
                <div className="form_title">Thông Tin Tài Khoản</div>
                <div className="form_container">
                  <div className="formTab_content">
                    <div className="form_item">
                      <label>Tài Khoản</label>
                      <input
                        type="text"
                        name="taiKhoan"
                        value={user?.taiKhoan}
                        disabled
                      />
                    </div>
                    <div className="form_item">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={user?.email}
                        disabled
                      />
                    </div>

                    <div className="form_item">
                      <label>Họ Tên</label>
                      <input
                        type="text"
                        name="hoTen"
                        value={user?.hoTen}
                        disabled
                      />
                    </div>

                    <div className="form_item">
                      <label>Số Điện Thoại</label>
                      <input
                        type="text"
                        name="soDT"
                        value={user?.soDT}
                        disabled
                      />
                    </div>

                    <div className="form_item">
                      <label>Mật Khẩu</label>
                      <input
                        type="password"
                        name="matKhau"
                        value={user?.matKhau}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserPage;
