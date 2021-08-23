import { call, put, takeLatest } from "redux-saga/effects";
import {
  GetFilmShowTimeInfomationServices,
  GetFilmShowTimeInfomationTheaterServices,
  GetInfoTheaterServices,
  GetTheaterServices,
} from "../../../services/ClientServices/QuanLyRapServices";
import {
  GET_FILM_SHOWTIME_INFOMATION_SAGA_TYPE,
  GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE,
  GET_FILM_SHOWTIME_INFOMATION_THEATER_TYPE,
  GET_FILM_SHOWTIME_INFOMATION_TYPE,
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

// Lấy thông tin lich chiếu phim
function* getFilmShowTimeinfomationApi(action) {
  try {
    const res = yield call(() =>
      GetFilmShowTimeInfomationServices(action.maPhim)
    );
    yield put({
      type: GET_FILM_SHOWTIME_INFOMATION_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetFilmShowTimeinfomationApi() {
  yield takeLatest(
    GET_FILM_SHOWTIME_INFOMATION_SAGA_TYPE,
    getFilmShowTimeinfomationApi
  );
}

// Lấy chi tiết lịch chiếu hệ thống rạp

function* getFilmShowTimeinfomationTheaterApi(action) {
  try {
    const res = yield call(() =>
      GetFilmShowTimeInfomationTheaterServices(action.maHeThongRap)
    );
    yield put({
      type: GET_FILM_SHOWTIME_INFOMATION_THEATER_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetFilmShowTimeinfomationTheaterApi() {
  yield takeLatest(
    GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE,
    getFilmShowTimeinfomationTheaterApi
  );
}
