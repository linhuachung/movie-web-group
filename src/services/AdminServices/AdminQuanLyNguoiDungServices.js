import axios from "axios";
import { DOMAIN } from "../Util";

export function AdminGetUserListServices() {
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11`,
    method: "GET",
  });
}

// Thêm Người Dùng
export function AdminAddUserServices(user) {
  const userToken = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/ThemNguoiDung`,
    method: "POST",
    data: user,
    headers: {
      Authorization: `Bearer ${userToken.accessToken}`,
    },
  });
}

// Xóa Người Dùng
export function AdminDeleteUserServices(taiKhoan) {
  const userToken = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
    method: "DELETE",
    data: taiKhoan,
    headers: {
      Authorization: `Bearer ${userToken.accessToken}`,
    },
  });
}

// Sửa Người Dùng
export function AdminEditUserServices(user) {
  const userToken = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    method: "POST",
    data: user,
    headers: {
      Authorization: `Bearer ${userToken.accessToken}`,
    },
  });
}
