import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    get("/discover/movie?sort_by=popularity.desc")
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar las películas.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="status-message">Cargando películas...</p>;
  }

  if (error) {
    return <p className="status-message">{error}</p>;
  }

  return (
    <ul className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieGrid;