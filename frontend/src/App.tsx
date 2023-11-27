import { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./api/api";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <div>
        {movies.map((movie: any) => (
          <div key={movie.imdbId}>{movie.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
