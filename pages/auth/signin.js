import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import authService from "../../services/auth.service";

import schema from "../../utils/yupSchema";

import styles from "../../styles/signin.module.scss";

import AuthFormContainer from "../../components/AuthFormContainer";
import AuthForm from "../../components/AuthForm";
import AuthLogo from "../../components/AuthLogo";
import AuthInputContainer from "../../components/AuthInputContainer";
import AuthInput from "../../components/AuthInput";
import AuthSubmitButton from "../../components/AuthSubmitButton";
import Redirect from "../../components/HOC/Redirect";

import withoutAuth from "../../components/HOC/withoutAuth";

const login = () => {
  const [loginError, setLoginError] = useState(null);
  const router = useRouter();

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

    router.push(`/users/${user.username}`);
  };

  const isError = () =>
    errors?.username || errors?.password || loginError ? "block" : "none";

  return (
    <main className={styles.main}>
      <AuthFormContainer>
        <AuthForm options={{ handleSubmit, onSubmit }}>
          <AuthLogo />
          <div style={{ display: isError() }} className={styles.errors_wrapper}>
            <ul>
              {errors?.username && <li>{errors.username?.message}</li>}
              {errors?.password && <li>{errors.password?.message}</li>}
              {loginError && <li>{loginError}</li>}
            </ul>
          </div>
          <AuthInputContainer>
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
          </AuthInputContainer>

          <AuthSubmitButton value="Sign In" />
        </AuthForm>

        <div className={styles.footer}>
          <p>
            Don't have an account?{" "}
            <Link href="/auth/signup">
              <a>Join now</a>
            </Link>
          </p>
        </div>
      </AuthFormContainer>
    </main>
  );
};

export default withoutAuth(login);
