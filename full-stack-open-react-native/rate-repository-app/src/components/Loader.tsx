import { ActivityIndicator, View } from "react-native";
import Text  from "./Text";
import { styled } from "nativewind";

const StyledView = styled(View);

export default function Loader() {
  return (
    <StyledView className="flex justify-center items-center h-[80vh]">
      <ActivityIndicator size="large" color="#0000ff" />
      <Text className="text-bold">Loading...</Text>
    </StyledView>
  );
}
