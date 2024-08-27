import { styled } from "nativewind";
import React from "react";
import { View } from "react-native";
import Text from "./Text";
const StyledView = styled(View);

export default function ErrorView({ error }: { error: { message: string } }) {
  return (
    <StyledView className="flex justify-center items-center h-[80vh]">
      <Text className="text-red-500 font-bold">Error: {error.message}</Text>
    </StyledView>
  );
}
