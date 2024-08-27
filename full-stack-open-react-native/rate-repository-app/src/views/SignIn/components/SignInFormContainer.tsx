import { Formik } from "formik";
import * as yup from "yup";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

export default function SignInFormContainer({
  onSubmit,
}: {
  onSubmit: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}
