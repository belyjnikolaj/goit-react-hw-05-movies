import { fetchData } from "./fetchData";

export const getTrendingFilms = () => {
  const endpoint = '/trending/all/day';
  return fetchData(endpoint);
};

export const searchMovies = (query) => {
  const endpoint = `/search/movie?query=${query}`;
  return fetchData(endpoint);
};

export const getMovieDetails = (movieId) => {
  const endpoint = `/movie/${movieId}`;
  return fetchData(endpoint);
};

export const getMovieCredits = (movieId) => {
  const endpoint = `/movie/${movieId}/credits`;
  return fetchData(endpoint);
};

export const getMovieReviews = movieId => {
  const endpoint = `/movie/${movieId}/reviews`;
  return fetchData(endpoint);
};
