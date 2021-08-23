import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingCheckout from "../../../components/ClientComponents/BookingCheckout/BookingCheckout";
import BookingContent from "../../../components/ClientComponents/BookingContent/BookingContent";
import { GET_LIST_CHAIR_SAGA_TYPE } from "../../../redux/types/QuanLyDatVeType/QuanLyDatVeType";

function Booking() {
  const { maLichChieu } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_LIST_CHAIR_SAGA_TYPE,
      maLichChieu: maLichChieu,
    });
  }, [dispatch, maLichChieu]);

  const listChair = useSelector((state) => state.QuanLyDatVeReducer.listChair);
  return (
    <div className="bg-black text-white">
      <BookingContent listChair={listChair} />
      <BookingCheckout />
    </div>
  );
}

export default Booking;
