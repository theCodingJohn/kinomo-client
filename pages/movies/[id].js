import { useState } from "react";
import { movie, genres, popularMovies } from "../../utils/helpers";
import { dateToWord } from "../../utils/dateToWord";

import styles from "../../styles/movie.module.scss";

import movieService from "../../services/movies.service";

import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Scroller from "../../components/Scroller";
import ImageCard from "../../components/ImageCard";

import {
  getReleaseYear,
  getCertification,
  getCasts,
  getCrews,
} from "../../utils/movieDataHOC";
import { PlayIcon } from "../../utils/svgs";

const MoviePage = () => {
  const [isPlayerClicked, setPlayer] = useState(false);

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
      <Section className={styles.director_container}>
        <div className={styles.row}>
          <span className={styles.directed_by}>Directed by</span>
          <span className={styles.director}>
            {movie.credits.crew.find((crew) => crew.job === "Director").name}
          </span>
        </div>
      </Section>
      <Section className={styles.summary_container}>
        <div className={styles.row}>
          <p className={styles.tagline}>{movie.tagline}</p>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </Section>
      <Section className={styles.actors_container}>
        <h2 className={styles.h2}>Actors</h2>
        <Scroller>
          {getCasts(movie).map((cast) => {
            return <ImageCard person={cast} className={styles.card} />;
          })}
        </Scroller>
      </Section>
      <Section className={styles.crew_container}>
        <h2 className={styles.h2}>Crews</h2>
        <Scroller>
          {getCrews(movie).map((crew) => {
            return <ImageCard person={crew} className={styles.card} />;
          })}
        </Scroller>
      </Section>
      <Section>
        <h2 className={styles.h2}>Watch Trailer</h2>
        <div onClick={() => setPlayer(true)} className={styles.player_wrapper}>
          <div className={styles.overlay}></div>
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt="video poster"
            className={styles.video_poster}
          />
          <span className={styles.play_icon}>
            <PlayIcon />
          </span>
          {isPlayerClicked && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className={styles.player}
            ></iframe>
          )}
        </div>
      </Section>
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
