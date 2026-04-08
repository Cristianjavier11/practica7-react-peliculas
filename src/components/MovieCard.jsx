import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <li className="movie-card">
      <Link to={`/movies/${movie.id}`} className="movie-link">
        <img
          src={imageUrl}
          alt={movie.title}
          className="movie-image"
        />

        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-rating">⭐ {movie.vote_average?.toFixed(1)}</p>
        </div>
      </Link>
    </li>
  );
}

export default MovieCard;