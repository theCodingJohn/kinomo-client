import styles from "./auth_logo.module.scss";

const AuthLogo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <h1 className={styles.logo}>
        <span className={styles.kino}>Kino</span>
        <span className={styles.mo}>Mo</span>
      </h1>
    </div>
  );
};

export default AuthLogo;
