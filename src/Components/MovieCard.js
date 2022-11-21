import React from "react";
import "./MovieCard.css";

function MovieCard({ title, type, posterUrl }) {
  const mediaType = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className="movie-card">
      <img src={posterUrl} alt="Movie Poster" />
      <div className="details">
        <h3 className="movie-title">{title}</h3>
        <h4 className="media-type">{mediaType}</h4>
      </div>
    </div>
  );
}
export default MovieCard;
