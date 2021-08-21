import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { REGISTER_USER_SAGA_TYPE } from "../../../redux/types/QuanLyNguoiDungType/AuthUser";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  let [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP00",
    hoTen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: REGISTER_USER_SAGA_TYPE,
      user: user,
      history: history,
    });
  };

  return (
    <div className="login_container">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100 form_content">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-white">Đăng Ký</h1>
        </div>
        <form
          noValidate
          action
          onSubmit={(e) => handleSubmit(e)}
          method="post"
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="taiKhoan"
                className="block mb-2 text-lg text-white"
              >
                Tài Khoản
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="taiKhoan"
                placeholder="Nhập tài khoản..."
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div>
              <label htmlFor="hoTen" className="block mb-2 text-lg text-white">
                Họ Tên
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="hoTen"
                placeholder="Nhập..."
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg text-white">
                Email
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
                placeholder="Nhập email..."
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div>
              <label htmlFor="soDt" className="block mb-2 text-lg text-white">
                Số điện thoại
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                name="soDt"
                placeholder="Nhập số điện thoại..."
                className="w-full px-3 py-2 border rounded-md "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg text-white"
                >
                  Mật Khẩu
                </label>
              </div>
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                name="matKhau"
                placeholder="Nhập mật khẩu..."
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
          </div>
          <div className="form_submit">
            <div className="text-center">
              <input
                onChange={(e) => handleChange(e)}
                type="submit"
                className="nav_Button input_submit"
                value="Đăng Ký"
              />
            </div>
            <div className="form_register text-right">
              <Link to="/client/dang-nhap" className=" ">
                Đăng nhập nếu đã có tài khoản
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
