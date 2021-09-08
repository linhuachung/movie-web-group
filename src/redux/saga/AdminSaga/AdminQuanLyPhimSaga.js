import { call, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  AdminAddMovieServices,
  AdminDeleteMovieServices,
  AdminEditMovieServices,
} from "../../../services/AdminServices/AdminQuanLyPhimServices";
import {
  CREATE_MOVIE_SAGA_TYPE,
  DELETE_MOVIE_SAGA_TYPE,
  EDIT_MOVIE_SAGA_TYPE,
} from "../../types/QuanLyPhimType/QuanLyPhimType";

function* getAddMovieAdminApi(action) {
  try {
    let form_data = new FormData();
    for (let key in action.data) {
      form_data.append(key, action.data[key]);
    }
    let result = yield call(() => {
      return AdminAddMovieServices(form_data);
    });
    if (result.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Thêm phim thành công",
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: `Thất bại`,
      text: `${err.response.data.content}`,
    });
  }
}

export function* followGetAddMovieAdminApi() {
  yield takeLatest(CREATE_MOVIE_SAGA_TYPE, getAddMovieAdminApi);
}

// Xóa Phim

function* getDeleteMovieApi(action) {
  try {
    const res = yield call(() => AdminDeleteMovieServices(action.maPhim));
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Xóa phim thành công",
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: `Thất bại`,
      text: `${err.response.data.content}`,
    });
  }
}
export function* followGetDeleteMovieApi() {
  yield takeLatest(DELETE_MOVIE_SAGA_TYPE, getDeleteMovieApi);
}

// Sửa Phim

function* getEditMovieApi(action) {
  try {
    let form_data = new FormData();
    for (let key in action.movie) {
      form_data.append(key, action.movie[key]);
    }
    const res = yield call(() => AdminEditMovieServices(form_data));

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Cập nhật phim thành công",
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: `Thất bại`,
      text: `${err.response.data.content}`,
    });
  }
}
export function* followGetEditMovieApi() {
  yield takeLatest(EDIT_MOVIE_SAGA_TYPE, getEditMovieApi);
}
