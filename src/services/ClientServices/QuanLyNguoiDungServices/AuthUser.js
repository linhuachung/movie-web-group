import axios from "axios";
import { DOMAIN } from "../../Util";

export function LoginUserServices(user) {
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: user,
  });
}

export function RegisterUserServices(user) {
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
    method: "POST",
    data: user,
  });
}

export function ProfileUserServices() {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
}
