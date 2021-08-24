import { all } from "@redux-saga/core/effects";
import {
  followGetBookingApi,
  followGetListChairApi,
} from "./ClientSaga/QuanLyDatVeSaga";
import {
  followGetLoginUserApi,
  followGetRegisterUserApi,
} from "./ClientSaga/QuanLyNguoiDungSaga/AuthUserSaga";
import {
  followGetDetailMovieApi,
  followGetMovieListApi,
} from "./ClientSaga/QuanLyPhimSaga";
import {
  followGetFilmShowTimeinfomationApi,
  followGetFilmShowTimeinfomationTheaterApi,
  followGetInfoTheaterApi,
  followGetTheaterApi,
} from "./ClientSaga/QuanLyRapSaga";

export function* rootSaga() {
  yield all([
    // Quản Lý Đặt Vé
    followGetListChairApi(),
    followGetBookingApi(),
    // Quản Lý Phim
    followGetMovieListApi(),
    followGetDetailMovieApi(),
    // Quản Lý Rạp
    followGetTheaterApi(),
    followGetInfoTheaterApi(),
    followGetFilmShowTimeinfomationApi(),
    followGetFilmShowTimeinfomationTheaterApi(),
    // Quản lý Người Dùng
    followGetLoginUserApi(),
    followGetRegisterUserApi(),
  ]);
}
