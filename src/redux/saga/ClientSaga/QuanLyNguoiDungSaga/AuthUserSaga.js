import { call, takeLatest } from "redux-saga/effects";
import {
  LoginUserServices,
  RegisterUserServices,
} from "../../../../services/ClientServices/QuanLyNguoiDungServices/AuthUser";
import Swal from "sweetalert2";
import {
  LOGIN_USER_SAGA_TYPE,
  REGISTER_USER_SAGA_TYPE,
} from "../../../types/QuanLyNguoiDungType/AuthUser";

// Đăng nhập
function* getLoginUserApi(action) {
  try {
    const res = yield call(() => LoginUserServices(action.user));
    if (res.status === 200) {
      if (res.data.content.maLoaiNguoiDung === "KhachHang") {
        localStorage.setItem("user", JSON.stringify(res.data.content));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        setTimeout(() => {
          action.history.push("");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Vui lòng đăng nhập bằng tài khoản khách hàng",
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

export function* followGetLoginUserApi() {
  return yield takeLatest(LOGIN_USER_SAGA_TYPE, getLoginUserApi);
}

// Đăng Ký
function* getRegisterUserApi(action) {
  try {
    const res = yield call(() => RegisterUserServices(action.user));
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Đăng Ký tài khoản thành công",
      });
      setTimeout(() => {
        action.history.push("/client/dang-nhap");
      }, 2000);
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: `${e.response.data.content}`,
    });
  }
}

export function* followGetRegisterUserApi() {
  return yield takeLatest(REGISTER_USER_SAGA_TYPE, getRegisterUserApi);
}
