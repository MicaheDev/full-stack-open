import React from "react";
import { Alert } from "react-native";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import SignInFormContainer from "./components/SignInFormContainer";

export default function SignIn() {
  const [SignIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;

    try {
      await SignIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);

      Alert.alert("Invalid Credentials");
    }
  };

  return <SignInFormContainer onSubmit={onSubmit} />;
}
