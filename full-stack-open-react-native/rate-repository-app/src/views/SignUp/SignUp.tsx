import React from "react";
import { Alert } from "react-native";
import SignUpFormContainer from "./components/SignUpFormContainer";
import useSignUp from "@hooks/useSignUp";
import { useNavigate } from "react-router-native";

export default function SignUp() {
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
      Alert.alert("No se pudo crear el usuario");
    }
  };

  return <SignUpFormContainer onSubmit={onSubmit} />;
}
