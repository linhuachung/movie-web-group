import { all } from "@redux-saga/core/effects";
import {
  followGetDetailMovieApi,
  followGetMovieListApi,
} from "./ClientSaga/QuanLyPhimSaga";
import { followGetTheaterApi } from "./ClientSaga/QuanLyRapSaga";

export function* rootSaga() {
  yield all([
    // Quản Lý Phim
    followGetMovieListApi(),
    followGetDetailMovieApi(),
    // Quản Lý Rạp
    followGetTheaterApi(),
  ]);
}
