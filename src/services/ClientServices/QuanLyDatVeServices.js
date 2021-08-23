import axios from "axios";
import { DOMAIN } from "../Util";

export function GetListChairServices(maLichChieu) {
  return axios({
    url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: "GET",
  });
}
