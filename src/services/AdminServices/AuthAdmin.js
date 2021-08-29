import axios from "axios";
import { DOMAIN } from "../Util";

export function LoginAdminServices(user) {
  return axios({
    url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: user,
  });
}
