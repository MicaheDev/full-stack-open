import { ScrollView, View } from "react-native";
import Constants from "expo-constants";
import { styled } from "nativewind";
import Text from "./Text";
import { Link } from "react-router-native";

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);

export default function AppBar() {
  return (
    <StyledView
      className="bg-secondary w-full h-[100px] px-4 flex flex-row justify-between items-center"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <StyledScrollView className="flex w-full gap-4" horizontal={true}>
        <Link to="/">
          <Text className="text-white font-bold text-lg">Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text className="text-white font-bold text-lg">Sign In</Text>
        </Link>
      </StyledScrollView>
    </StyledView>
  );
}
