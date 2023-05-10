import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import UserList from "./pages/UserList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/entrar" element={<Login />} />
        <Route exact path="/cadastro" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/filmes" element={<Movies />} />
        <Route exact path="/series" element={<TvShows />} />
        <Route exact path="/minhalista" element={<UserList />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
