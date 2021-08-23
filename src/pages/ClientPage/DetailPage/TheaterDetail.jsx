import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TheaterFilmShowTimeDetail from "../../../components/ClientComponents/TheaterFilmShowTimeDetail/TheaterFilmShowTimeDetail";
import { GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";

function TheaterDetail() {
  const { maHeThongRap } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_FILM_SHOWTIME_INFOMATION_THEATER_SAGA_TYPE,
      maHeThongRap: maHeThongRap,
    });
  }, [dispatch, maHeThongRap]);
  const company = useSelector(
    (state) => state.QuanLyRapReducer.infoMovieInTheater
  );
  console.log(company);
  return (
    <div>
      <TheaterFilmShowTimeDetail company={company} />
    </div>
  );
}

export default TheaterDetail;
