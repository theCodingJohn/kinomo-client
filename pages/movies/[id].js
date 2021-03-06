import { Fragment, useState } from "react";
import { genres, popularMovies } from "../../utils/helpers";
import { dateToWord } from "../../utils/dateToWord";

import styles from "../../styles/movie.module.scss";

import movieService from "../../services/movies.service";

import Layout from "../../components/Layout";
import Section from "../../components/Section";
import Scroller from "../../components/Scroller";
import ImageCard from "../../components/ImageCard";
import DetailBox from "../../components/DetailBox";

import {
  getReleaseYear,
  getCertification,
  getCasts,
  getCrews,
  getGenreIds,
} from "../../utils/movieDataHOC";
import { PlayIcon } from "../../utils/svgs";

const MoviePage = ({ movie }) => {
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
            return (
              <Fragment key={cast.order}>
                <ImageCard person={cast} className={styles.card} />
              </Fragment>
            );
          })}
        </Scroller>
      </Section>

      <Section className={styles.crew_container}>
        <h2 className={styles.h2}>Crews</h2>
        <Scroller>
          {getCrews(movie).map((crew) => {
            return (
              <Fragment key={crew.credit_id}>
                <ImageCard person={crew} className={styles.card} />
              </Fragment>
            );
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

      <Section>
        <h2 className={styles.h2}>Genres</h2>
        <div className={styles.box_wrapper}>
          {movie.genres.map((genre) => {
            return (
              <Fragment key={genre.id}>
                <DetailBox className={styles.detail_box} text={genre.name} />
              </Fragment>
            );
          })}
        </div>
      </Section>

      <Section>
        <h2 className={styles.h2}>Runtime</h2>
        <div className={styles.box_wrapper}>
          {
            <DetailBox
              className={styles.detail_box}
              text={`${movie.runtime} mins`}
            />
          }
        </div>
      </Section>

      <Section>
        <h2 className={styles.h2}>Studios</h2>
        <div className={styles.box_wrapper}>
          {movie.production_companies.map((company) => {
            return (
              <Fragment key={company.id}>
                <DetailBox className={styles.detail_box} text={company.name} />
              </Fragment>
            );
          })}
        </div>
      </Section>

      <Section>
        <h2 className={styles.h2}>Countries</h2>
        <div className={styles.box_wrapper}>
          {movie.production_countries.map((country) => {
            return (
              <Fragment key={country.iso_3166_1}>
                <DetailBox className={styles.detail_box} text={country.name} />
              </Fragment>
            );
          })}
        </div>
      </Section>

      <Section>
        <h2 className={styles.h2}>Languages</h2>
        <div className={styles.box_wrapper}>
          {movie.spoken_languages.map((language) => {
            return (
              <Fragment key={language.iso_639_1}>
                <DetailBox
                  className={styles.detail_box}
                  text={language.english_name}
                />
              </Fragment>
            );
          })}
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const movie = await movieService.getMovie(id);
  let notFound = false;

  if (movie.success === false) {
    // context.res.statusCode = 404;
    notFound = true;
  }

  return {
    props: { movie },
    notFound,
  };
};

export default MoviePage;
