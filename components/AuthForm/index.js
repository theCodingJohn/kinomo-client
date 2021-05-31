import styles from "./auth_form.module.scss";

const AuthForm = ({ options, children }) => {
  return (
    <form
      className={styles.form}
      onSubmit={options.handleSubmit(options.onSubmit)}
    >
      {children}
    </form>
  );
};

export default AuthForm;
