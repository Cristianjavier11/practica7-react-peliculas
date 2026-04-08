import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
        setError("No se pudo cargar la información de la película.");
      });
  }, [movieId]);

  if (error) {
    return <p className="details-status">{error}</p>;
  }

  if (!movie) {
    return <p className="details-status">Cargando información...</p>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <section className="details-wrapper">
      <Link to="/" className="back-button">
        ← Volver al inicio
      </Link>

      <div className="movie-details">
        <img
          src={imageUrl}
          alt={movie.title}
          className="details-image"
        />

        <div className="details-info">
          <h2 className="details-title">{movie.title}</h2>

          <p>
            <strong>Fecha de estreno:</strong> {movie.release_date}
          </p>

          <p>
            <strong>Calificación:</strong> ⭐ {movie.vote_average?.toFixed(1)}
          </p>

          <p>
            <strong>Géneros:</strong>{" "}
            {movie.genres?.map((genre) => genre.name).join(", ")}
          </p>

          <p>
            <strong>Descripción:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;