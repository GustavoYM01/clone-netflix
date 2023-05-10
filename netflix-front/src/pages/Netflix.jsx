import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import axios from "../axios.js";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider.jsx";

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [movie, setMovie] = useState([]);

  const request = {
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_TMDB_KEY}&eith_networks=213&language=pt-BR`,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="Background do Início Netflix"
        />
        <div className="container">
          <div className="name">
            <h3>{movie?.original_name}</h3>
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay /> Pré-visualizar
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> Mais informações
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .name {
        display: flex;
        margin-left: 5rem;
        h3 {
          background: rgba(0, 0, 0, 0.5);
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 4rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
