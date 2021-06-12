import { movie, genres, popularMovies } from "../../utils/helpers";
import { dateToWord } from "../../utils/dateToWord";

import styles from "../../styles/movie.module.scss";

import movieService from "../../services/movies.service";

import Layout from "../../components/Layout";
import Section from "../../components/Section";

import {
  getReleaseYear,
  getCertification,
  getCasts,
} from "../../utils/movieDataHOC";

const MoviePage = () => {
  return (
    <Layout>
      <Section
        className={styles.hero}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.row}>
          <div className={styles.text_wrapper}>
            <h1 className={styles.title}>
              {movie.title}{" "}
              <span className={styles.release_year}>
                {`(${getReleaseYear(movie)})`}
              </span>
            </h1>
          </div>
          <div className={styles.poster_wrapper}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            />
          </div>
        </div>
      </Section>
      {/* <section
        className={styles.hero}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <div className={styles.overlay}>
          <div className={styles.right_wrapper}>
            <div>
              <h1 className={styles.title}>{movie.title}</h1>
              <span className={styles.release_year}>
                {getReleaseYear(movie)}
              </span>
              {getCertification(movie) && (
                <span className={styles.certification}>
                  {getCertification(movie)}
                </span>
              )}
            </div>
          </div>
          <div className={styles.left_wrapper}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            />
          </div>
        </div>
      </section>
      <section className={styles.movie_details_wrapper}>
        <div className={styles.right_wrapper}>
          <div className={styles.overview_wrapper}>
            <h5 className={styles.tagline}>{movie.tagline}</h5>
            <p className={styles.overview}>{movie.overview}</p>
          </div>
          <div className={styles.actors_container}>
            <h2 className={styles.actors_heading}>Actors</h2>
            <div className={styles.actors_scroller}>
              {getCasts(movie).map((cast) => {
                return (
                  <div key={cast.id} className={styles.actor}>
                    <div className={styles.actor_image}>
                      <img
                        src={`https://image.tmdb.org/t/p/w780/${cast.profile_path}`}
                      />
                    </div>
                    <div className={styles.titles}>
                      <h3 className={styles.name}>{cast.name}</h3>
                      <h3 className={styles.character}>{cast.character}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.left_wrapper}></div>
      </section> */}
    </Layout>
  );
};

// export const getServerSideProps = async (context) => {
//   const { id } = context.params;
//   const movie = await movieService.getMovie(id);

//   return {
//     props: { movie },
//   };
// };

export default MoviePage;
