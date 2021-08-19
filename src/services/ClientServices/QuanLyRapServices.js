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
