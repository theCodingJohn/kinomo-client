import movieService from "../../services/movies.service";

const index = ({ popularMovies }) => {
  return (
    <div>
      {popularMovies.results.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const popularMovies = await movieService.getPopularMovies();
  return { props: { popularMovies } };
};

export default index;
