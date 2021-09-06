import React, { useEffect } from "react";
import { Form, Cascader, DatePicker, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_INFO_THEATER_BY_SYSTEM_SAGA_TYPE,
  GET_THEATER_SAGA_TYPE,
} from "../../../redux/types/QuanLyRapType/QuanLyRapType";
import moment from "moment";
import { useParams } from "react-router";
import { useFormik } from "formik";
import { CREATE_SHOW_TIME_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";
function BookingManager() {
  const { maPhim } = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: +maPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 0,
    },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_THEATER_SAGA_TYPE });
  }, [dispatch]);

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const theaterSystem = useSelector(
    (state) => state.AdminQuanLyRapReducer.theaterBySystem
  );
  const handleChangeTheater = (value) => {
    dispatch({
      type: GET_INFO_THEATER_BY_SYSTEM_SAGA_TYPE,
      maHeThongRap: value,
    });
    return theaterSystem;
  };

  const system = theaterSystem?.map((item) => {
    return {
      value: `${item.maCumRap}`,
      label: `${item.tenCumRap}`,
      children: item.danhSachRap?.map((itemTheater) => {
        return {
          value: `${itemTheater.maRap}`,
          label: `${itemTheater.tenRap}`,
        };
      }),
    };
  });

  const handleChangeTheaterBySystem = (value) => {
    formik.setFieldValue("maRap", value[0]);
    console.log(value);
  };

  const handleGetValue = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const theater = useSelector((state) => state.QuanLyRapReducer.theaterList);
  let option = [];
  option = theater.map((theater) => {
    return {
      value: `${theater.maHeThongRap}`,
      label: `${theater.tenHeThongRap}`,
    };
  });

  const handleChangeGetDate = (e) => {
    let dataTime = moment(e).format("DD/MM/YYYY hh:mm:ss");
    formik.setFieldValue("ngayChieuGioChieu", dataTime);
  };

  const handleSubmit = () => {
    console.log(formik.values);
    dispatch({
      type: CREATE_SHOW_TIME_SAGA_TYPE,
      data: formik.values,
    });
  };
  return (
    <div className="main-content flex-1 from-gray-600 to-gray-800 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className=" pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-indigo-700 to-blue-600 p-4 shadow text-2xl text-white">
          Tạo Lịch Chiếu Phim
        </div>
        <div className="userManager_content text-white w-5/6 m-auto ">
          <div className="bg-white mt-5 p-5 rounded-lg">
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <Form.Item label="Hệ Thống Rạp">
                <Cascader options={option} onChange={handleChangeTheater} />
              </Form.Item>
              <Form.Item label="Hệ Thống Rạp">
                <Cascader
                  options={system}
                  onChange={handleChangeTheaterBySystem}
                />
              </Form.Item>
              <Form.Item name="date-time-picker" label="Ngày Chiếu" {...config}>
                <DatePicker
                  showTime
                  name="ngayChieuGioChieu"
                  format="DD-MM-YYYY hh-mm-ss"
                  onChange={handleChangeGetDate}
                />
              </Form.Item>
              <Form.Item label="Giá Vé ">
                <InputNumber
                  min={75000}
                  max={150000}
                  onChange={handleGetValue("giaVe")}
                />
                <span className="ml-2">VNĐ</span>
              </Form.Item>
              <Form.Item label="Tác Vụ">
                <button
                  onClick={handleSubmit}
                  className=" bg-blue-600 px-3 py-1 text-lg rounded-md text-gray-100 duration-300 hover:bg-blue-400 hover:text-blue-600 "
                >
                  Tạo
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingManager;
