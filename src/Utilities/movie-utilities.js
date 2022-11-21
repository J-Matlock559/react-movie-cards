const API_KEY = "ad7b9b41";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const getMoviesByName = async (title, page) => {
  const result = await fetch(`${BASE_URL}&s=${title}&page=${page}`);
  const moviesFound = await result.json();
  // const { Search: moviesFound } = fullArray;
  // console.log(fullArray.totalResults);
  return moviesFound;
};

const getMovieById = async (id) => {
  const result = await fetch(`${BASE_URL}&i=${id}`);
  const movieFound = await result.json();
  return movieFound;
};

export { getMoviesByName, getMovieById };
