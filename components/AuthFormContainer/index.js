import styles from "./auth_form_container.module.scss";

const AuthFormContainer = ({ children }) => {
  return <div className={styles.form_container}>{children}</div>;
};

export default AuthFormContainer;
