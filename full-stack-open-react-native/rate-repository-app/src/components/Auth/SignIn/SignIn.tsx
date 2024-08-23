import React from "react";
import { Alert } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import useSignIn from "../../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import SignInForm from "./SignInForm";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

export default function SignIn() {
  const [SignIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;

    try {
      await SignIn({ username, password });
      navigate("/");
    } catch (e: any) {
      console.log(e);

      Alert.alert("Invalid Credentials");
    }
  };

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
