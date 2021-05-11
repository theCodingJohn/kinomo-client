import { useQuery, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { dehydrate } from "react-query/hydration";

import movieService from "../../services/movies.service";

const index = (props) => {
  const { data } = useQuery("popularMovies", movieService.getPopularMovies);
  const popularMovies = data.results;
  return (
    <div>
      {popularMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "popularMovies",
    movieService.getPopularMovies
  );

  const popularMovies = await movieService.getPopularMovies();
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default index;
