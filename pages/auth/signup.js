import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import authService from "../../services/auth.service";

import schema from "../../utils/yupSchema";

import styles from "../../styles/signup.module.scss";

import AuthFormContainer from "../../components/AuthFormContainer";
import AuthLogo from "../../components/AuthLogo";
import AuthInput from "../../components/AuthInput";
import AuthSubmitButton from "../../components/AuthSubmitButton";

const signup = () => {
  const [signupError, setSignupError] = useState();

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

    console.log(user);
  };

  const isError = () =>
    errors?.email || errors?.username || errors?.password || signupError
      ? "block"
      : "none";

  return (
    <main className={styles.main}>
      <AuthFormContainer>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <AuthLogo />
          <div style={{ display: isError() }} className={styles.errors_wrapper}>
            <ul>
              {errors?.email && <li>{errors.email?.message}</li>}
              {errors?.username && <li>{errors.username?.message}</li>}
              {errors?.password && <li>{errors.password?.message}</li>}
              {signupError && <li>{signupError}</li>}
            </ul>
          </div>
          <div className={styles.inputs_container}>
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
          </div>

          <AuthSubmitButton value="Sign Up" />
        </form>

        <div className={styles.footer}>
          <p>
            Already have an account? <a href="/auth/signin">Signin now</a>
          </p>
        </div>
      </AuthFormContainer>
    </main>
  );
};

export default signup;
