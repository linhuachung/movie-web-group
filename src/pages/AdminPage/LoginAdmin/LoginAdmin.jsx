import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_ADMIN_SAGA_TYPE } from "../../../redux/types/QuanLyNguoiDungType/AuthUser";

function LoginAdmin() {
  const [user, setUser] = useState({
    taiKhoan: "",
    matKau: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_ADMIN_SAGA_TYPE,
      user: user,
      history: history,
    });
  };

  return (
    <div className="loginAdmin_background">
      <div className="loginAdmin_container">
        <div className="loginAdmin_content">
          <div className="formAdmin_title ">
            <h1 className="text-white">Đăng Nhập Admin</h1>
          </div>
          <div className=" loginAdmin_contentForm">
            <form
              noValidate
              action
              className="formLogin_admin "
              method="post"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="space-y-4">
                <div className="formAdmin_item">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Tài Khoản
                  </label>
                  <input
                    type="text"
                    name="taiKhoan"
                    placeholder="Nhập tài khoản...."
                    className="w-full px-3 py-2 border rounded-md "
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="formAdmin_item">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Mật Khẩu
                    </label>
                  </div>
                  <input
                    type="password"
                    name="matKhau"
                    placeholder="Nhập mật khẩu..."
                    className="w-full px-3 py-2 border rounded-md "
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <input type="checkbox" className=" mr-2 rounded-md my-5" />
                  <label className="text-sm">Ghi Nhớ Tên Đăng Nhập</label>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    className="w-full px-8 py-3 rounded-md my-5 formAdmin_itemSubmit"
                    value="Đăng Nhập"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
