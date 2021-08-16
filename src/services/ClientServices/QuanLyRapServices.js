import axios from "axios";
import { DOMAIN } from "../Util";

export function GetTheaterServices() {
  return axios({
    url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
    method: "GET",
  });
}
