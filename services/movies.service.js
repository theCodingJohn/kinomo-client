import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_TMDB_MOVIE_BASE_URL;
const api_key = process.env.NEXT_PUBLIC_TMDB_KEY;

const getPopularMovies = async () => {
  const res = await axios.get(`${baseUrl}popular${api_key}`);
  return res.data;
};

const getMovie = async (id) => {
  const res = await axios.get(
    `${baseUrl}${id}${api_key}&append_to_response=release_dates,credits,videos`
  );
  return res.data;
};

export default {
  getPopularMovies,
  getMovie,
};
