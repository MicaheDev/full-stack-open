import React from "react";
import {
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import FormikTextInput from "../Shared/FormikTextInput";
import { styled } from "nativewind";
import Text from "../Shared/Text";
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Height is required'),
});

const StyledView = styled(View);
const StyledTouchable = styled(TouchableOpacity);

const initialValues = {
  username: "",
  password: "",
};

const SignInForm = ({ onSubmit }: any) => {
  return (
    <StyledView className="p-4 bg-white">
      <FormikTextInput
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />

      <StyledTouchable className="bg-primary p-4 inline-flex justify-center items-center rounded-md" onPress={onSubmit}>
        <Text className="text-white font-bold">Sign In</Text>
      </StyledTouchable>
    </StyledView>
  );
};
export default function SignIn() {
  const onSubmit = (values: any) => {
    const username = values.username;
    const password = values.password;

    if (username !== "" && password !== "") {
      Alert.alert(
        `Your credentials are : Username ${username} Password ${password}`
      );
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}
