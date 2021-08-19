import React from "react";

function ItemForSliderIsStart(props) {
  const { movieItem } = props;

  return (
    <div className="card_container">
      <div className="card_slider">
        <img
          alt={movieItem.biDanh}
          src={movieItem.hinhAnh}
          style={{ height: "370px" }}
          className="sliderCard_img"
        />
        <div className="contentCard_hover text-white">
          <div className="item_hover">
            <a href={movieItem.trailer}>
              <img src="/image/play.png" alt={"play"} className="w-20" />
            </a>
          </div>
          <div className="item_hover item_hover_FilmName">
            {movieItem.tenPhim}
          </div>
          <div className="item_hover item_hover_info">
            <ul>
              <li>
                {movieItem.moTa.length > 65
                  ? movieItem.moTa.slice(0, 65) + "..."
                  : movieItem.moTa}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemForSliderIsStart;
