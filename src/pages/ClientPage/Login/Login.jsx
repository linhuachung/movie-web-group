import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LOGIN_USER_SAGA_TYPE } from "../../../redux/types/QuanLyNguoiDungType/AuthUser";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  let [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_USER_SAGA_TYPE,
      user: user,
      history: history,
    });
  };

  return (
    <div className="login_container">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 form_content text-white">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-gray-100">Đăng Nhập</h1>
        </div>
        <form
          noValidate
          action
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={(e) => handleSubmit(e)}
          method="post"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="taiKhoan" className="block mb-2 text-lg">
                Tài Khoản
              </label>
              <input
                type="text"
                name="taiKhoan"
                placeholder="Nhập tài khoản..."
                className=" input_form "
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="matKhau" className=" text-lg">
                  Mật Khẩu
                </label>
                <a
                  href="/"
                  className="text-xs hover:underline text-coolGray-400 "
                >
                  Quên mật khẩu ?
                </a>
              </div>
              <input
                type="password"
                name="matKhau"
                placeholder="Nhập mật khẩu..."
                className=" input_form"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="form_submit">
            <div className="text-center">
              <input
                type="submit"
                className="nav_Button input_submit"
                value="Đăng Nhập"
              />
            </div>
            <div className="form_register">
              <p className="px-6 text-sm text-center dark:text-coolGray-400">
                Nếu chưa có tài khoản ?
              </p>
              <Link to="/client/dang-ky" className="nav_Button input_register ">
                Đăng Ký
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
