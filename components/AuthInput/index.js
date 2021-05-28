import styles from "./auth_input.module.scss";

const AuthInput = ({
  register,
  registerName,
  inputType,
  placeholder,
  icon,
}) => {
  return (
    <div className={styles.input_wrapper}>
      <span className={`${styles.icon} ${styles[icon]}`}></span>
      <input
        className={styles.input}
        {...register(registerName)}
        placeholder={placeholder}
        type={inputType}
      />
    </div>
  );
};

export default AuthInput;
