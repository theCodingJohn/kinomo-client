import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.row}>
          <div className={styles.logo_wrapper}>
            <p className={styles.logo}>
              <span className={styles.kino}>Kino</span>
              <span className={styles.mo}>Mo</span>
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
