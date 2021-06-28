import userService from "../../services/user.service";

import Layout from "../../components/Layout";
import Section from "../../components/Section";

import styles from "../../styles/user.module.scss";

import default_banner from "../../public/images/default_banner.jpg";

const profile = ({ user }) => {
  const backdrop_path =
    user.movies[user.movies.length - 1]?.movie.backdrop_path;
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
        <div className={styles.row}></div>
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
