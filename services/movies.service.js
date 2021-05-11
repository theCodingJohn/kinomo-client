import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_TMDB_MOVIE_BASE_URL;
const api_key = process.env.NEXT_PUBLIC_TMDB_KEY;

const getPopularMovies = async () => {
  const res = await axios.get(`${baseUrl}popular${api_key}`);
  return res.data;
};

export default {
  getPopularMovies,
};
