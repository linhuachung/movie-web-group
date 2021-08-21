import React from "react";
import CardFilm from "./CardFilm";
import ContentFilm from "./ContentFilm";

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
          <CardFilm detailMovie={detailMovie} DateTime={DateTime} />
          <ContentFilm detailMovie={detailMovie} DateTime={DateTime} />
        </div>
      </div>
    </div>
  );
}

export default BannerDetailpage;
