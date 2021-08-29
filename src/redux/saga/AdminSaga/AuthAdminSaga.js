import { call, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import { LoginAdminServices } from "../../../services/AdminServices/AuthAdmin";
import { LOGIN_ADMIN_SAGA_TYPE } from "../../types/QuanLyNguoiDungType/AuthUser";

// Đăng nhập
function* getLoginAdminApi(action) {
  try {
    const res = yield call(() => LoginAdminServices(action.user));
    if (res.status === 200) {
      if (res.data.content.maLoaiNguoiDung === "QuanTri") {
        localStorage.setItem("user", JSON.stringify(res.data.content));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        setTimeout(() => {
          action.history.push("/admin/dashboard");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Tài Khoản Hoặc Mật Khẩu Không Hợp Lệ",
        });
      }
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: `${e.response.data.content}`,
    });
  }
}

export function* followGetLoginAdminApi() {
  return yield takeLatest(LOGIN_ADMIN_SAGA_TYPE, getLoginAdminApi);
}
