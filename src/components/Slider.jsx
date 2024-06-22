import React from "react";
import { useSelector } from "react-redux";
import CardSlider from "./CardSlider";

export default function Slider() {
  const movies = useSelector((state) => {
    return state.movies;
  });
  const getMoviesInRange = (from, to) => {
    return movies?.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesInRange(0, 10)} />
      <CardSlider title="Popular" data={getMoviesInRange(10, 20)} />
      <CardSlider title="Blockbustes" data={getMoviesInRange(20, 30)} />
      <CardSlider title="Action Movies" data={getMoviesInRange(30, 40)} />
      <CardSlider title="Drama Movies" data={getMoviesInRange(40, 50)} />
      <CardSlider title="Best of Comedies" data={getMoviesInRange(50, 60)} />
    </div>
  );
}
