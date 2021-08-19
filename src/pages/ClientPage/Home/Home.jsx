import React from "react";
import Carousel from "../../../components/ClientComponents/Carousel/Carousel";
import SliderMovieList from "../../../components/ClientComponents/SliderMovieList/SliderMovieList";
import TheaterTapPannel from "../../../components/ClientComponents/TheaterTapPannel/TheaterTapPannel";

function Home() {
  return (
    <div>
      <Carousel />
      <SliderMovieList />
      <TheaterTapPannel />
    </div>
  );
}

export default Home;
