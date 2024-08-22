import { View } from "react-native";
import Constants from "expo-constants";
import { styled } from "nativewind";
import Text from "./Text";

const StyledView = styled(View);

export default function AppBar() {
  console.log(Constants.statusBarHeight);
  return (
    <StyledView
      className="bg-secondary w-full h-[80px] px-4 flex flex-row justify-between items-center"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <Text className="text-white font-bold text-lg">Repositories</Text>
    </StyledView>
  );
}
