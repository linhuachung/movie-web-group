import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieManagerDataTable from "../../../components/AdminComponent/DataTable/MovieManagerDataTable";
import { GET_MOVIE_LIST_SAGA_TYPE } from "../../../redux/types/QuanLyPhimType/QuanLyPhimType";

function MovieManager() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.QuanLyPhimReducer.movieList);
  useEffect(() => {
    dispatch({
      type: GET_MOVIE_LIST_SAGA_TYPE,
    });
  });
  return (
    <div className="main-content flex-1 from-gray-600 to-gray-800 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className=" pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-indigo-700 to-blue-600 p-4 shadow text-2xl text-white">
          Quản Lý Phim
        </div>
        <div className="userManager_content text-white w-5/6 m-auto">
          <MovieManagerDataTable movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieManager;
