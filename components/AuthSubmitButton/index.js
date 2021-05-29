import styles from "./auth_submit_button.module.scss";

const AuthSubmitButton = ({ value }) => {
  return (
    <div className={styles.submit_wrapper}>
      <input className={styles.submit_button} type="submit" value={value} />
    </div>
  );
};

export default AuthSubmitButton;
