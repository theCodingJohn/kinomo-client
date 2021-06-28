import userService from "../../services/user.service";

import Layout from "../../components/Layout";
import Section from "../../components/Section";

import styles from "../../styles/user.module.scss";

import default_banner from "../../public/images/default_banner.jpg";
import default_avatar from "../../public/images/avatar.png";

const profile = ({ user }) => {
  const backdrop_path =
    user.movies[user.movies.length - 1]?.movie.backdrop_path;
  const avatar = user.avatar || default_avatar;
  const last_watched = user.movies[user.movies.length - 1]?.movie;
  console.log(user);

  return (
    <Layout>
      <Section
        className={styles.hero}
        style={{
          backgroundImage: `${
            backdrop_path
              ? `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`
              : `url(${default_banner})`
          }`,
        }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.row}>
          <div className={styles.avatar_wrapper}>
            <img src={avatar} alt="avatar" />
          </div>
          {last_watched && (
            <div className={styles.last_watched_wrapper}>
              <div className={styles.last_watched_inner_wrapper}>
                <span className={styles.subtitle}>Last watched:</span> <br />
                <a
                  href={`/movies/${last_watched.ids.tmdb}`}
                  className={styles.title}
                >
                  {last_watched.title}
                </a>
              </div>
            </div>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { username } = context.params;
  const user = await userService.getUser(username);
  let notFound = false;

  if (!user) {
    context.res.statusCode = 404;
    notFound = true;
  }

  return {
    props: { user: user },
    notFound,
  };
};

export default profile;
