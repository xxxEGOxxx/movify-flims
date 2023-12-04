import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import { getMovies } from "../api/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  return <Hero movies={movies} />;
};

export default Home;
