import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import authService from "../../services/auth.service";

import schema from "../../utils/yupSchema";

import styles from "../../styles/signin.module.scss";

const login = () => {
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    const user = await authService.signin(data);

    if (user.error) {
      return setLoginError(user.error);
    }

    window.localStorage.setItem("loggedUser", JSON.stringify(user));
    e.target.reset();
  };

  const isError = () =>
    errors?.username || errors?.password || loginError ? "block" : "none";

  return (
    <main className={styles.main}>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.logo_wrapper}>
            <h1 className={styles.logo}>
              <span className={styles.kino}>Kino</span>
              <span className={styles.mo}>Mo</span>
            </h1>
          </div>
          <div style={{ display: isError() }} className={styles.errors_wrapper}>
            <ul>
              {errors?.username && <li>{errors.username?.message}</li>}
              {errors?.password && <li>{errors.password?.message}</li>}
              {loginError && <li>{loginError}</li>}
            </ul>
          </div>
          <div className={styles.inputs_container}>
            <div className={styles.input_wrapper}>
              <span className={`${styles.icon} ${styles.icon_username}`}></span>
              <input
                className={styles.input}
                {...register("username")}
                placeholder="Username"
                type="text"
              />
            </div>
            <div className={styles.input_wrapper}>
              <span className={`${styles.icon} ${styles.icon_password}`}></span>
              <input
                className={styles.input}
                {...register("password")}
                placeholder="Password"
                type="password"
              />
            </div>
          </div>

          <div className={styles.submit_wrapper}>
            <input
              className={styles.submit_button}
              type="submit"
              value="Sign In"
            />
          </div>
        </form>

        <div className={styles.footer}>
          <p>
            Don't have an account? <a href="/auth/signup">Signup now</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default login;
