import styles from "../../styles/movies.module.scss";

import movieService from "../../services/movies.service";

import MoviesSlider from "../../components/MoviesSlider";
import Layout from "../../components/Layout";

import { popularMovies } from "../../utils/helpers";

const index = () => {
  return (
    <Layout>
      <MoviesSlider popularMovies={popularMovies} />
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   const popularMovies = await movieService.getPopularMovies();
//   return { props: { popularMovies: popularMovies.results } };
// };

export default index;
