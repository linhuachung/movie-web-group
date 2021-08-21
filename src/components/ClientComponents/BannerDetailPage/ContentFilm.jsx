import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContentFilm(props) {
  const { detailMovie, DateTime } = props;
  return (
    <div className="film_Container">
      <div className="film_Content text-white">
        <p className="title_banner ">{detailMovie.tenPhim}</p>
        <div className="infomation_film">
          <ul>
            <li>{detailMovie.ngayKhoiChieu?.slice(0, 4)}</li>
            <li>
              Đánh Giá: {detailMovie.danhGia}
              <FontAwesomeIcon
                icon={faStar}
                className="button_showMenu mx-2 text-yellow-300"
              />
            </li>
            <li>{detailMovie.moTa}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContentFilm;
