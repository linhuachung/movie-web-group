import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { GET_MOVIE_LIST_SAGA_TYPE } from "../../../redux/types/QuanLyPhimType/QuanLyPhimType";
import ItemForSlider from "./ItemForSlider";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="carousel_arrowNext arrowNext_forSlider"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="carousel_arrowPrev arrowPrev_forSlider"
      onClick={onClick}
    />
  );
}

function SliderMovieList() {
  const settings = {
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_MOVIE_LIST_SAGA_TYPE,
    });
  }, [dispatch]);

  const movie = useSelector((state) => state.QuanLyPhimReducer.movieList);

  const movieIsStart = movie.filter((item) => item.dangChieu === true);
  const movieNotStart = movie.filter((item) => item.dangChieu === false);
  console.log("phim đang chiếu ", movieIsStart);
  console.log("phim chưa chiếu ", movieNotStart);

  const [movieState, setMovieState] = useState();
  return (
    <div className="slider_movieList">
      <div className="title_SliderMovie">
        <p className="title_sliderItem">Phim đang chiếu</p>
        <p className="title_sliderItem">Phim sắp chiếu</p>
      </div>
      <Slider {...settings} className="slider_content">
        {movie
          .filter((item) => item.dangChieu === true)
          .map((movieItem, index) => {
            return (
              <div key={index}>
                <ItemForSlider movieItem={movieItem} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default SliderMovieList;
