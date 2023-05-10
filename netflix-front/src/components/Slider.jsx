import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMovies = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="Tendência" data={getMovies(0, 10)} />
      <CardSlider title="Lançamentos" data={getMovies(10, 20)} />
      <CardSlider title="Grandes Sucessos" data={getMovies(20, 30)} />
      <CardSlider title="Populares na Netflix" data={getMovies(30, 40)} />
      <CardSlider title="Ação" data={getMovies(40, 50)} />
      <CardSlider title="Épicos" data={getMovies(50, 60)} />
    </div>
  );
}
