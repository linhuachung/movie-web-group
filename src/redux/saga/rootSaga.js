import { all } from "@redux-saga/core/effects";
import {
  followGetAddYserAdminApi,
  followGetAdminUserList,
  followGetDeleteUserApi,
  followGetEditUserApi,
} from "./AdminSaga/AdminQuanLyNguoiDungSaga";
import {
  followGetAddMovieAdminApi,
  followGetDeleteMovieApi,
  followGetEditMovieApi,
} from "./AdminSaga/AdminQuanLyPhimSaga";
import { followGetInfoTheaterBySystemApi } from "./AdminSaga/AdminQuanLyRapSaga";
import { followGetLoginAdminApi } from "./AdminSaga/AuthAdminSaga";
import {
  followGetBookingApi,
  followGetCreateShowTimeApi,
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
    followGetAddYserAdminApi(),
    followGetDeleteUserApi(),
    followGetEditUserApi(),
    // Quản Lý Phim
    followGetAddMovieAdminApi(),
    followGetDeleteMovieApi(),
    followGetEditMovieApi(),

    // Quản Lý Rạp
    followGetInfoTheaterBySystemApi(),
    followGetCreateShowTimeApi(),
  ]);
}
