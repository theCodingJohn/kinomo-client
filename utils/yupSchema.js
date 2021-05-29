import * as yup from "yup";

const signinSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(6),
  password: yup.string().required("Password is required").min(6),
});

const signupSchema = yup.object().shape({
  email: yup.string().required("Email is required").email(),
  username: yup.string().required("Username is required").min(6),
  password: yup.string().required("Password is required").min(6),
});

export default {
  signinSchema,
  signupSchema,
};
