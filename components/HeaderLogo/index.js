import styles from "./logo.module.scss";

const HeaderLogo = () => {
  return (
    <span className={styles.logo}>
      <span className={styles.kino}>Kino</span>
      <span className={styles.mo}>Mo</span>
    </span>
  );
};

export default HeaderLogo;
