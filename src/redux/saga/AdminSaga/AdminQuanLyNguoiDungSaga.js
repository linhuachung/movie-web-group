import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  AdminAddUserServices,
  AdminGetUserListServices,
} from "../../../services/AdminServices/AdminQuanLyNguoiDungServices";
import {
  ADD_USER_ADMIN_SAGA_TYPE,
  GET_USER_LIST_ADMIN_SAGA_TYPE,
  GET_USER_LIST_ADMIN_TYPE,
} from "../../types/QuanLyNguoiDungType/AuthUser";

// Đăng nhập
function* getAdminUserList() {
  try {
    const res = yield call(() => AdminGetUserListServices());
    yield put({
      type: GET_USER_LIST_ADMIN_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e.response.data);
  }
}

export function* followGetAdminUserList() {
  return yield takeLatest(GET_USER_LIST_ADMIN_SAGA_TYPE, getAdminUserList);
}

// Thêm Người Dùng:
function* getAddUserAdminApi(action) {
  try {
    const res = yield call(() => AdminAddUserServices(action.user));
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Thêm Người Dùng Thành Công",
      });
    }
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: `${e.response.data.content}`,
    });
  }
}

export function* followGetAddYserAdminApi() {
  return yield takeLatest(ADD_USER_ADMIN_SAGA_TYPE, getAddUserAdminApi);
}
