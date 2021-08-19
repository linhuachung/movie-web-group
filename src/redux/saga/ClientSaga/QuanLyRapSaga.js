import { call, put, takeLatest } from "redux-saga/effects";
import {
  GetInfoTheaterServices,
  GetTheaterServices,
} from "../../../services/ClientServices/QuanLyRapServices";
import {
  GET_INFO_THEATER_SAGA_TYPE,
  GET_INFO_THEATER_TYPE,
  GET_THEATER_SAGA_TYPE,
  GET_THEATER_TYPE,
} from "../../types/QuanLyRapType/QuanLyRapType";

// Lấy danh sách rạp
function* getTheaterApi() {
  try {
    const res = yield call(() => GetTheaterServices());
    yield put({
      type: GET_THEATER_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetTheaterApi() {
  yield takeLatest(GET_THEATER_SAGA_TYPE, getTheaterApi);
}

// Lấy thông tin lịch chiếu hệ thống rạp

function* getInfoTheaterApi() {
  try {
    const res = yield call(() => GetInfoTheaterServices());
    yield put({
      type: GET_INFO_THEATER_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetInfoTheaterApi() {
  yield takeLatest(GET_INFO_THEATER_SAGA_TYPE, getInfoTheaterApi);
}
