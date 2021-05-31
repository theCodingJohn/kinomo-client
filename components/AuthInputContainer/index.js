import styles from "./input_container.module.scss";

const AuthInputContainer = ({ children }) => {
  return <div className={styles.input_container}>{children}</div>;
};

export default AuthInputContainer;
