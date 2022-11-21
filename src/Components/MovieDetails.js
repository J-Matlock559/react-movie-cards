import React from "react";
import "./MovieDetails.css";

function MovieDetails({ movie }) {
  const {
    Poster: posterUrl,
    Title: title,
    Rated: rated,
    Runtime: runtime,
    Genre: genre,
    Plot: plot,
    Actors: actors,
    imdbRating: rating,
  } = movie;
  console.log(rating);
  let ratingStyle;

  if (rating >= 7) {
    ratingStyle = { color: "green" };
  }

  if (rating >= 4 && rating < 7) {
    ratingStyle = { color: "orange" };
  }

  if (rating < 4) {
    ratingStyle = { color: "red" };
  }

  return (
    <div className="details-bg">
      <div className="dib">
        <img src={posterUrl} alt={title} />
      </div>
      <div className="movie-details">
        <h1 className="rating" style={ratingStyle}>
          {rating}
        </h1>
        <h2>{title}</h2>
        <p className="info-pill dib">{rated}</p>
        <p className="info-pill dib">{runtime}</p>
        <p className="info-pill">{genre}</p>
        <h3 className="mb">Plot</h3>
        <p>{plot}</p>
        <h3 className="mb">Actors</h3>
        <p>{actors}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
