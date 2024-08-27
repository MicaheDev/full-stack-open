import { styled } from "nativewind";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, FormikTextInput } from "@components";

const StyledView = styled(View);
const StyledTouchable = styled(TouchableOpacity);

export default function SignUpForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <StyledView className="p-4 bg-white">
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="registerUsernameInput"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        testID="registerPasswordInput"
      />
         <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry={true}
        testID="registerPasswordInput"
      />
      <StyledTouchable
        className="bg-primary p-4 inline-flex justify-center items-center rounded-md mb-2"
        testID="signupButton"
        onPress={onSubmit}
      >
        <Text className="text-white font-bold">Sign Up</Text>
      </StyledTouchable>
    </StyledView>
  );
}
