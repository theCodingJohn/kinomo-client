import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import authService from "../../services/auth.service";

import schema from "../../utils/yupSchema";

import styles from "../../styles/signin.module.scss";

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const user = await authService.signin(data);
    console.log(user);
  };

  return (
    <main className={styles.main}>
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                onFocus={() => console.log("focused")}
                className={styles.input}
                {...register("password")}
                placeholder="Password"
                type="password"
              />
            </div>
          </div>

          <div>
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default login;
