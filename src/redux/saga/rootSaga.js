import { all } from "@redux-saga/core/effects";
import { followGetAdminUserList } from "./AdminSaga/AdminQuanLyNguoiDungSaga";
import { followGetLoginAdminApi } from "./AdminSaga/AuthAdminSaga";
import {
  followGetBookingApi,
  followGetListChairApi,
} from "./ClientSaga/QuanLyDatVeSaga";
import {
  followGetLoginUserApi,
  followGetProfileUserApi,
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
    followGetProfileUserApi(),

    // Admin
    // Quản Lý Người Dùng
    followGetLoginAdminApi(),
    followGetAdminUserList(),
  ]);
}
