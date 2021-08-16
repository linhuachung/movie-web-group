import React from "react";
import { Card } from "antd";

function ItemForSlider(props) {
  const { movieItem } = props;
  const { Meta } = Card;

  return (
    <Card
      className="card_slider"
      cover={<img alt={movieItem.biDanh} src={movieItem.hinhAnh} />}
    >
      <a
        className="text-white text-center text-lg"
        href={`/chi-tiet-phim/${movieItem.maPhim}`}
      >
        {movieItem.tenPhim.length > 15
          ? movieItem.tenPhim.substr(0, 15) + "..."
          : movieItem.tenPhim}
      </a>
    </Card>
  );
}

export default ItemForSlider;
