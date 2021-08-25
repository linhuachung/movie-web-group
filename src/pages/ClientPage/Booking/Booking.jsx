import { InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingCheckout from "../../../components/ClientComponents/BookingCheckout/BookingCheckout";
import BookingContent from "../../../components/ClientComponents/BookingContent/BookingContent";
import { GET_LIST_CHAIR_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";
import { GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";

function Booking(props) {
  const { maLichChieu, maHeThongRap } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_LIST_CHAIR_SAGA_TYPE,
      maLichChieu: maLichChieu,
    });
    dispatch({
      type: GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE,
      maHeThongRap: maHeThongRap,
    });
  }, [dispatch, maLichChieu, maHeThongRap]);

  const listChair = useSelector((state) => state.QuanLyDatVeReducer.listChair);
  const theater = useSelector(
    (state) => state.QuanLyRapReducer.infoMovieInTheater
  );
  let danhSachVe = [];
  let arr = {
    maLichChieu: maLichChieu,
    danhSachVe: "",
  };

  const chair = (chair) => {
    if (chair) {
      const data = danhSachVe.some((item) => item.maGhe === chair.maGhe);
      if (!data) {
        danhSachVe.push({ maGhe: chair.maGhe, giaVe: chair.giaVe });

        // console.log(danhSachVe);
      } else {
        danhSachVe = danhSachVe.filter((item) => item.maGhe !== chair.maGhe);
        // console.log(danhSachVe);
      }
      arr = { ...arr, danhSachVe: danhSachVe };
      ////
      listChair.danhSachGhe.forEach((choice) => {
        if (choice.maGhe === chair.maGhe) {
          choice.dangChon = !choice.dangChon;
        }
      });
      console.log(listChair);
    }
    // console.log(arr);
  };
  const [chairChoose, setChairChoose] = useState(arr);

  return (
    <div className="bg-black text-white">
      <div className="flex booking_container_flex">
        <BookingContent listChair={listChair} theater={theater} chair={chair} />
        <BookingCheckout
          listChair={listChair}
          chair={chair}
          chairChoose={chairChoose}
        />
      </div>
    </div>
  );
}

export default Booking;
