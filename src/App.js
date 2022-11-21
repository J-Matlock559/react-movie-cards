import { useState, useEffect } from "react";
import "./App.css";

import { getMoviesByName, getMovieById } from "./Utilities/movie-utilities";
import MovieList from "./Components/MovieList";
import MovieModal from "./Components/MovieModal";
import MovieDetails from "./Components/MovieDetails";
import ReactPaginate from "react-paginate";

function App() {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updateSearch, setUpdateSearch] = useState("Star Wars");
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState({});

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
    console.log(page);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const movieArray = await getMoviesByName(updateSearch, page);
      const { Search: movieResults } = movieArray;
      setPageCount(Math.ceil(movieArray.totalResults / 10));
      setMovies(movieResults);
      setIsLoading(false);
    })();
  }, [updateSearch, page]);

  return (
    <div>
      <MovieModal
        show={showModal}
        onModalClose={() => {
          setShowModal(false);
          setCurrentMovie({});
        }}
      >
        <MovieDetails movie={currentMovie} />
      </MovieModal>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageLinkClassName="page-number"
        previousLinkClassName="page-number"
        nextLinkClassName="page-number"
        breakClassName="page-break"
        activeLinkClassName="active-link"
      />
      {isLoading ? (
        <div style={{ color: "white" }}>Loading....</div>
      ) : (
        <MovieList
          setUpdateSearch={setUpdateSearch}
          movies={movies}
          onMovieClick={async (movieId) => {
            setShowModal(true);
            const clickedMovie = await getMovieById(movieId);
            setCurrentMovie(clickedMovie);
          }}
        />
      )}
    </div>
  );
}

export default App;
