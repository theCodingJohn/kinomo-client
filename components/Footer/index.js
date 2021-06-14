import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Powered by{" "}
        <a className={styles.tmdb} href="https://www.themoviedb.org/">
          TMDB
        </a>
      </p>
    </footer>
  );
};

export default Footer;
