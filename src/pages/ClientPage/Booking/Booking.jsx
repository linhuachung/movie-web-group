import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingCheckout from "../../../components/ClientComponents/BookingCheckout/BookingCheckout";
import BookingContent from "../../../components/ClientComponents/BookingContent/BookingContent";
import { GET_LIST_CHAIR_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";
import { GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";

function Booking() {
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
  return (
    <div className="bg-black text-white">
      <div className="flex items-center ">
        <BookingContent listChair={listChair} theater={theater} />
        <BookingCheckout listChair={listChair} />
      </div>
    </div>
  );
}

export default Booking;
