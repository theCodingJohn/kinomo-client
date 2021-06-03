import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import authService from "../../services/auth.service";

import schema from "../../utils/yupSchema";

import styles from "../../styles/signup.module.scss";

import AuthFormContainer from "../../components/AuthFormContainer";
import AuthForm from "../../components/AuthForm";
import AuthLogo from "../../components/AuthLogo";
import AuthInputContainer from "../../components/AuthInputContainer";
import AuthInput from "../../components/AuthInput";
import AuthSubmitButton from "../../components/AuthSubmitButton";

import withoutAuth from "../../components/HOC/withoutAuth";
import { route } from "next/dist/next-server/server/router";

const signup = () => {
  const [signupError, setSignupError] = useState();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema.signupSchema),
  });

  const onSubmit = async (data) => {
    if (data.password !== data.passwordconfirm) {
      return setSignupError("Password confirmation does not match");
    }

    const user = await authService.signup(data);

    if (user.error) {
      return setSignupError(user.error);
    }

    router.push(`/auth/signin`);
  };

  const isError = () =>
    errors?.email || errors?.username || errors?.password || signupError
      ? "block"
      : "none";

  return (
    <main className={styles.main}>
      <AuthFormContainer>
        <AuthForm options={{ handleSubmit, onSubmit }}>
          <AuthLogo />
          <div style={{ display: isError() }} className={styles.errors_wrapper}>
            <ul>
              {errors?.email && <li>{errors.email?.message}</li>}
              {errors?.username && <li>{errors.username?.message}</li>}
              {errors?.password && <li>{errors.password?.message}</li>}
              {signupError && <li>{signupError}</li>}
            </ul>
          </div>
          <AuthInputContainer>
            <AuthInput
              register={register}
              placeholder="Email"
              icon="icon_email"
              inputType="email"
              registerName="email"
            />
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
            <AuthInput
              register={register}
              placeholder="Confirm Password"
              registerName="passwordconfirm"
              icon="icon_password"
              inputType="password"
            />
          </AuthInputContainer>

          <AuthSubmitButton value="Sign Up" />
        </AuthForm>

        <div className={styles.footer}>
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin">
              <a>Sign In</a>
            </Link>
          </p>
        </div>
      </AuthFormContainer>
    </main>
  );
};

export default withoutAuth(signup);
