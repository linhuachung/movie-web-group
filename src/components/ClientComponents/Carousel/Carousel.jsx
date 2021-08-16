import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className="carousel_arrowNext"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="carousel_arrowPrev"
      onClick={onClick}
    />
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/image/BoGia-Carousel.png" alt={""} />
        </div>
        <div>
          <img src="/image/LatMat48-Carousel.png" alt={""} />
        </div>
        <div>
          <img src="/image/ThienThanHoMenh-Carousel.png" alt={""} />
        </div>
        <div>
          <img src="/image/TrangTi-Carousel.png" alt={""} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
