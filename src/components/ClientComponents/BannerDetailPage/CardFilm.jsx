import { StarFilled } from "@ant-design/icons";
import React from "react";
import ModalVideoComponent from "../ModalVideoComponent/ModalVideoComponent";

function CardFilm(props) {
  const { detailMovie, DateTime } = props;
  return (
    <div className="item_overlay">
      <div className="movie-card">
        <div className="movie-header">
          <div className="header-icon">
            <img src={detailMovie.hinhAnh} alt={detailMovie.biDanh} />
            <ModalVideoComponent detailMovie={detailMovie} />
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
              <label>Ngày khởi chiếu</label>
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
      <div
        className="col-sm-2 circleStar ng-scope"
        ng-if="filmDetail.avg_point > 0"
        style={{ right: "25%", position: "relative" }}
      >
        <div className="circleSum"></div>
        <div id="circlePercent" className="c100 p78">
          <div className="circleBorder"></div>
          <span className="ng-binding">{detailMovie.danhGia}.0</span>
          <div className="slice">
            <div className="bar" />
            <div className="fill" />
          </div>
        </div>
        <div
          id="starMain"
          className="row star ng-binding"
          style={{ marginTop: 10 }}
          ng-bind-html="setStar(filmDetail.avg_point)"
        >
          <StarFilled className=" text-3xl m-1" style={{ color: "#e4ff09" }} />
          <StarFilled className=" text-3xl m-1" style={{ color: "#e4ff09" }} />
          <StarFilled className=" text-3xl m-1" style={{ color: "#e4ff09" }} />
          <StarFilled className=" text-3xl m-1" style={{ color: "#e4ff09" }} />
        </div>
        <div className="text-center" style={{ marginTop: 10 }}>
          <span className="detailMainInfo1 ng-binding text-yellow-400 ">
            322 người đánh giá
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
