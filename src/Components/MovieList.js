import MovieCard from "./MovieCard";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./MovieList.css";

function MovieList({ movies, onMovieClick, setUpdateSearch, setPage }) {
  const [search, setSearch] = useState("Star Wars");
  return (
    <div className="movie-list">
      <input
        style={{ width: "100vw" }}
        type="search"
        placeholder="Search"
        className="searchBar"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setUpdateSearch(search);
            setPage(1);
            e.target.value = "";
            console.log(search);
          }
        }}
      ></input>
      {movies.map((movie) => {
        return (
          <div
            key={movie.imdbID}
            onClick={() => {
              onMovieClick(movie.imdbID);
            }}
          >
            <MovieCard
              title={movie.Title}
              type={movie.Type}
              posterUrl={movie.Poster}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
