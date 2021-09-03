import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  BookingServices,
  CreateShowTime,
  GetListChairServices,
} from "../../../services/ClientServices/QuanLyDatVeServices";
import {
  BOOKING_SAGA_TYPE,
  CREATE_SHOW_TIME_SAGA_TYPE,
  GET_LIST_CHAIR_SAGA_TYPE,
  GET_LIST_CHAIR_TYPE,
} from "../../types/QuanLyDatVeType/QuanLyDatVeType";

// Lấy danh sách ghế
function* getListChairApi(action) {
  try {
    const res = yield call(() => GetListChairServices(action.maLichChieu));
    yield put({
      type: GET_LIST_CHAIR_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetListChairApi() {
  return yield takeLatest(GET_LIST_CHAIR_SAGA_TYPE, getListChairApi);
}

// Đặt vé
function* getBookingApi(action) {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = yield call(() => BookingServices(action.data));
    console.log(res);
    console.log(user);
    // if (user.taiKhoan === null) {
    //   Swal.fire({
    //     icon: "error",
    //     title: `Vui lòng đăng nhập để tiếp tục đặt vé`,
    //   });
    // } else {
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Đặt vé thành công",
      });
    }
    // }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: `${e.response.data.content}`,
    });
  }
}
export function* followGetBookingApi() {
  return yield takeLatest(BOOKING_SAGA_TYPE, getBookingApi);
}

// Tạo Lịch Chiếu
function* getCreateShowTimeApi(action) {
  try {
    const res = yield call(() => CreateShowTime(action.data));
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Tạo lịch chiếu thành công",
      });
    }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: `${e.response.data.content}`,
    });
  }
}
export function* followGetCreateShowTimeApi() {
  return yield takeLatest(CREATE_SHOW_TIME_SAGA_TYPE, getCreateShowTimeApi);
}
