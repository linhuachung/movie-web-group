import axios from "axios";
import { DOMAIN } from "../Util";

export function GetTheaterServices() {
  return axios({
    url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  });
}

export function GetInfoTheaterServices() {
  return axios({
    url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP11`,
    method: "GET",
  });
}

//  Lấy thông tin lịch chiếu phim
export function GetFilmShowTimeInfomationServices(maPhim) {
  return axios({
    method: "GET",
    url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
  });
}

// Lấy thông tin lịch chiếu hệ thống rạp
export function GetFilmShowTimeInfomationTheaterServices(maHeThongRap) {
  return axios({
    method: "GET",
    url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP13`,
  });
}

// Lấy Thông Tin Cụm Rạp Theo Hệ Thống
export function GetInfoTheaterBySystem(maHeThongRap) {
  return axios({
    method: "GET",
    url: `${DOMAIN}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
    data: maHeThongRap,
  });
}
