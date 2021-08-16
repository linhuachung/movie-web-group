import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_DETAIL_MOVIE_SAGA_TYPE } from "../../../redux/types/QuanLyPhimType/QuanLyPhimType";

function DetailPage() {
  const dispatch = useDispatch();
  const { maPhim } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_MOVIE_SAGA_TYPE,
      maPhim: maPhim,
    });
  }, [dispatch, maPhim]);

  const detailMovie = useSelector(
    (state) => state.QuanLyPhimReducer.detailMovie
  );

  return (
    <div>
      <div className="detail_banner"></div>
      <img src={detailMovie.hinhAnh} />
    </div>
  );
}

export default DetailPage;
