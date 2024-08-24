import React from "react";
import { Alert } from "react-native";
import useSignIn from "../../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import SignInContainer from "./SignInContainer";



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

  return (
   <SignInContainer onSubmit={onSubmit}/>
  );
}
