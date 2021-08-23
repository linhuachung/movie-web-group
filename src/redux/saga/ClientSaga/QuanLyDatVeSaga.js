import { call, put, takeLatest } from "redux-saga/effects";
import { GetListChairServices } from "../../../services/ClientServices/QuanLyDatVeServices";
import {
  GET_LIST_CHAIR_SAGA_TYPE,
  GET_LIST_CHAIR_TYPE,
} from "../../types/QuanLyDatVeType/QuanLyDatVeType";

// Lấy danh sách ghế
function* getListChairApi(action) {
  try {
    const res = yield call(() => GetListChairServices(action.maLichChieu));
    yield put({
      type: GET_LIST_CHAIR_TYPE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetListChairApi() {
  return yield takeLatest(GET_LIST_CHAIR_SAGA_TYPE, getListChairApi);
}
