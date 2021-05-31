import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import ShowMoreText from "react-show-more-text";

import styles from "../../styles/movies.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import movieService from "../../services/movies.service";

import { ChevronLeft, ChevronRight } from "../../utils/svgs";
import Layout from "../../components/Layout";

import { popularMovies, genres } from "../../utils/helpers";

const index = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 300,
    slideToShow: 1,
    autoplaySpeed: 5000,
    fade: true,
    autoplay: true,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Layout>
      <section className={styles.popular_movies_container}>
        <span
          onClick={prev}
          className={`${styles.arrow_button} ${styles.prev}`}
        >
          <ChevronLeft />
        </span>
        <span
          onClick={next}
          className={`${styles.arrow_button} ${styles.next}`}
        >
          <ChevronRight />
        </span>
        <Slider ref={sliderRef} {...settings}>
          {popularMovies.map((movie) => (
            <div key={movie.id}>
              <div
                className={styles.slide}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                }}
              >
                <div className={styles.overlay}>
                  <div className={styles.text_wrapper}>
                    <div className={styles.genres}>
                      {movie.genre_ids.slice(0, 3).map((id) => (
                        <span className={styles.genre} key={id}>
                          {genres.find((genre) => genre.id === id).name}
                        </span>
                      ))}
                    </div>
                    <div className={styles.movie_name}>
                      <h1>
                        <Link href={`/movies/${movie.id}`}>
                          <a>{movie.title}</a>
                        </Link>{" "}
                        <span className={styles.release_date}>
                          ({movie.release_date.split("-")[0]})
                        </span>
                      </h1>
                    </div>
                    <div className={styles.overview}>
                      <ShowMoreText lines={4} more="[more]" less="[less]">
                        {movie.overview}
                      </ShowMoreText>
                    </div>
                    <div className={styles.ratings}>
                      <div className={styles.rating}>
                        <span>
                          <span className={styles.value}>
                            {movie.vote_average}
                          </span>
                          /10
                        </span>
                        <span className={styles.site_name}>
                          <Image src="/icons/tmdb.svg" width={50} height={50} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Layout>
  );
};

// export const getServerSideProps = async () => {
//   const popularMovies = await movieService.getPopularMovies();
//   return { props: { popularMovies } };
// };

export default index;
