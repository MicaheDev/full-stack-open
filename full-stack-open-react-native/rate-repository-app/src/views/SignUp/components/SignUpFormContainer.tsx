import { Formik } from "formik";
import * as yup from "yup";
import SignUpForm from "./SignUpForm";

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Password confirm is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

export default function SignUpFormContainer({
  onSubmit,
}: {
  onSubmit: ({
    username,
    password,
    passwordConfirmation,
  }: {
    username: string;
    password: string;
    passwordConfirmation: string;
  }) => void;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
}
