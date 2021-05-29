import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import authService from "../../services/auth.service";

import schema from "../../utils/yupSchema";

import styles from "../../styles/signin.module.scss";

import AuthFormContainer from "../../components/AuthFormContainer";
import AuthLogo from "../../components/AuthLogo";
import AuthInput from "../../components/AuthInput";
import AuthSubmitButton from "../../components/AuthSubmitButton";

const login = () => {
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema.signinSchema),
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
      <AuthFormContainer>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <AuthLogo />
          <div style={{ display: isError() }} className={styles.errors_wrapper}>
            <ul>
              {errors?.username && <li>{errors.username?.message}</li>}
              {errors?.password && <li>{errors.password?.message}</li>}
              {loginError && <li>{loginError}</li>}
            </ul>
          </div>
          <div className={styles.inputs_container}>
            <AuthInput
              register={register}
              placeholder="Username"
              registerName="username"
              icon="icon_username"
              inputType="text"
            />
            <AuthInput
              register={register}
              placeholder="Password"
              registerName="password"
              icon="icon_password"
              inputType="password"
            />
          </div>

          <AuthSubmitButton value="Sign In" />
        </form>

        <div className={styles.footer}>
          <p>
            Don't have an account? <a href="/auth/signup">Signup now</a>
          </p>
        </div>
      </AuthFormContainer>
    </main>
  );
};

export default login;
