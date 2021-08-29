import axios from "axios";
import { DOMAIN } from "../Util";

export function AdminGetUserListServices() {
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP11`,
    method: "GET",
  });
}
