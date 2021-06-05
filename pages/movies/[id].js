import movieService from "../../services/movies.service";

import Layout from "../../components/Layout";

const MoviePage = ({ movie }) => {
  return (
    <Layout>
      <h1>{movie.title}</h1>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const movie = await movieService.getMovie(id);

  return {
    props: { movie },
  };
};

export default MoviePage;
