import { call, put, takeLatest } from "redux-saga/effects";
import { GetTheaterServices } from "../../../services/ClientServices/QuanLyRapServices";
import {
  GET_THEATER_SAGA_TYPE,
  GET_THEATER_TYPE,
} from "../../types/QuanLyRapType/QuanLyRapType";
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
