import { call, put, takeLatest } from "redux-saga/effects";
import { AdminGetUserListServices } from "../../../services/AdminServices/AdminQuanLyNguoiDungServices";
import {
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
