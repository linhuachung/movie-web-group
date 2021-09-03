import { call, put, takeLatest } from "redux-saga/effects";
import { GetInfoTheaterBySystem } from "../../../services/ClientServices/QuanLyRapServices";
import {
  GET_INFO_THEATER_BY_SYSTEM_SAGA_TYPE,
  GET_INFO_THEATER_BY_SYSTEM_TYPE,
} from "../../types/QuanLyRapType/QuanLyRapType";

function* getInfoTheaterBySystemApi(action) {
  try {
    const res = yield call(() => GetInfoTheaterBySystem(action.maHeThongRap));
    yield put({
      type: GET_INFO_THEATER_BY_SYSTEM_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetInfoTheaterBySystemApi() {
  yield takeLatest(
    GET_INFO_THEATER_BY_SYSTEM_SAGA_TYPE,
    getInfoTheaterBySystemApi
  );
}
