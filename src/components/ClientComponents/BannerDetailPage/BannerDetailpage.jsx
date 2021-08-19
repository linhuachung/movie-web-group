import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BannerDetailpage(props) {
  const { detailMovie } = props;
  const Banner = detailMovie.hinhAnh;

  const DateTime = (day, month, year) => {
    year = detailMovie?.ngayKhoiChieu?.slice(0, 4);
    month = detailMovie?.ngayKhoiChieu?.slice(5, 7);
    day = detailMovie?.ngayKhoiChieu?.slice(8, 10);
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <div
        className="banner_detailContainer"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="bannerOverlay">
          <div className="movie-card">
            <div className="movie-header">
              <div className="header-icon">
                <img src={detailMovie.hinhAnh} alt={detailMovie.biDanh} />
                <a href={detailMovie.trailer} className="btnPlay">
                  <img src="/image/play.png" alt={"icon"} />
                </a>
              </div>
            </div>
            <div className="movie-content">
              <div className="movie-content-header">
                <a href="/">
                  <h3 className="movie-title">{detailMovie.tenPhim}</h3>
                </a>
                <div className="imax-logo" />
              </div>
              <div className="movie-info">
                <div className="info-section">
                  <label>Date &amp; Time</label>
                  <span>{DateTime()}</span>
                </div>
                <div className="info-section">
                  <label>Screen</label>
                  <span>03</span>
                </div>
                <div className="info-section">
                  <label>Row</label>
                  <span>F</span>
                </div>
                <div className="info-section">
                  <label>Seat</label>
                  <span>21,22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_content text-white">
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

export default BannerDetailpage;
