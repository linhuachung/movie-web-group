import { call, put, takeLatest } from "redux-saga/effects";
import {
  GetDetailMovieServices,
  GetMovieListServices,
} from "../../../services/ClientServices/QuanLyPhimServices";
import {
  GET_DETAIL_MOVIE_SAGA_TYPE,
  GET_DETAIL_MOVIE_TYPE,
  GET_MOVIE_LIST_SAGA_TYPE,
  GET_MOVIE_LIST_TYPE,
} from "../../types/QuanLyPhimType/QuanLyPhimType";

// Lấy Danh Sách Phim
function* getMovieListApi() {
  try {
    const res = yield call(() => GetMovieListServices());
    yield put({
      type: GET_MOVIE_LIST_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetMovieListApi() {
  yield takeLatest(GET_MOVIE_LIST_SAGA_TYPE, getMovieListApi);
}

// Lấy Chi Tiết Phim
function* getDetailMovieApi(action) {
  try {
    const res = yield call(() => GetDetailMovieServices(action.maPhim));
    yield put({
      type: GET_DETAIL_MOVIE_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetDetailMovieApi() {
  yield takeLatest(GET_DETAIL_MOVIE_SAGA_TYPE, getDetailMovieApi);
}
