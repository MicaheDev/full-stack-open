import { styled } from "nativewind";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import FormikTextInput from "../../Shared/FormikTextInput";
import Text from "../../Shared/Text";

const StyledView = styled(View);
const StyledTouchable = styled(TouchableOpacity);

export default function SignInForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <StyledView className="p-4 bg-white">
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <StyledTouchable
        className="bg-primary p-4 inline-flex justify-center items-center rounded-md mb-2"
        onPress={onSubmit}
      >
        <Text className="text-white font-bold">Sign In</Text>
      </StyledTouchable>
    </StyledView>
  );
}
