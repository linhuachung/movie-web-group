import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BannerDetailpage from "../../../components/ClientComponents/BannerDetailPage/BannerDetailpage";
import FilmShowTimeDetail from "../../../components/ClientComponents/FilmShowTimeDetail/FilmShowTimeDetail";
import { GET_DETAIL_MOVIE_SAGA_TYPE } from "../../../redux/types/QuanLyPhimType/QuanLyPhimType";
import { GET_FILM_SHOWTIME_INFOMATION_SAGA_TYPE } from "../../../redux/types/QuanLyRapType/QuanLyRapType";

function DetailPage() {
  const dispatch = useDispatch();
  const { maPhim } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_MOVIE_SAGA_TYPE,
      maPhim: maPhim,
    });
    dispatch({
      type: GET_FILM_SHOWTIME_INFOMATION_SAGA_TYPE,
      maPhim: maPhim,
    });
  }, [dispatch, maPhim]);

  const detailMovie = useSelector(
    (state) => state.QuanLyPhimReducer.detailMovie
  );

  const filmShowtime = useSelector(
    (state) => state.QuanLyRapReducer.filmShowtime.heThongRapChieu
  );
  return (
    <div>
      <BannerDetailpage detailMovie={detailMovie} />
      <FilmShowTimeDetail filmShowtime={filmShowtime} />
    </div>
  );
}

export default DetailPage;
