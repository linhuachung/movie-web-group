import axios from "axios";
import { DOMAIN } from "../Util";

// Lấy danh sách Phim
export function GetMovieListServices() {
  return axios({
    method: "GET",
    url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11`,
  });
}

// Lấy chi tiết Phim
export function GetDetailMovieServices(maPhim) {
  return axios({
    method: "GET",
    url: `${DOMAIN}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
  });
}
