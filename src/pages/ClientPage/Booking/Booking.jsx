import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingCheckout from "../../../components/ClientComponents/BookingCheckout/BookingCheckout";
import BookingContent from "../../../components/ClientComponents/BookingContent/BookingContent";
import { GET_LIST_CHAIR_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";
import { GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";

function Booking() {
  const { maLichChieu, maHeThongRap } = useParams();
  let listChairChoose = useSelector(
    (state) => state.QuanLyDatVeReducer.isChooseChair
  );
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

  let arr = {
    maLichChieu: maLichChieu,
    danhSachVe: listChairChoose,
  };
  const chair = (chair) => {
    if (chair) {
      listChair.danhSachGhe.forEach((choice) => {
        if (choice.maGhe === chair.maGhe) {
          choice.dangChon = !choice.dangChon;
        }
      });
    }
    return arr;
  };

  const [chairChoose, setChairChoose] = useState(arr);

  return (
    <div className="bg-black text-white">
      <div className="flex booking_container_flex">
        <BookingContent
          listChair={listChair}
          theater={theater}
          chair={chair}
          setChairChoose={setChairChoose}
        />
        <BookingCheckout
          listChair={listChair}
          chair={chair}
          chairChoose={chairChoose}
          arr={arr}
        />
      </div>
    </div>
  );
}

export default Booking;
