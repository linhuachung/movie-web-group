import axios from "axios";
import { DOMAIN } from "../Util";

// Thêm Phim
export function AdminAddMovieServices(data) {
  return axios({
    url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
    method: "POST",
    data: data,
  });
}

// Xóa phim
export function AdminDeleteMovieServices(maPhim) {
  const userToken = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
    method: "DELETE",
    data: maPhim,
    headers: {
      Authorization: `Bearer ${userToken.accessToken}`,
    },
  });
}
