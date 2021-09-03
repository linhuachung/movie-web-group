import axios from "axios";
import { DOMAIN } from "../Util";

export function GetListChairServices(maLichChieu) {
  return axios({
    url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: "GET",
  });
}

// Đặt vé
export function BookingServices(data) {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
    method: "POST",
    data: data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
}

// Tạo Lịch Chiếu
export function CreateShowTime(data) {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios({
    url: `${DOMAIN}/api/QuanLyDatVe/TaoLichChieu`,
    method: "POST",
    data: data,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
}
