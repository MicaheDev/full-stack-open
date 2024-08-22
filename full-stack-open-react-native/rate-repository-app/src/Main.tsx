import { View } from "react-native";
import RepositoryList from "./components/Repository/RepositoryList";
import AppBar from "./components/Shared/AppBar";
import { styled } from "nativewind";

const StyledView = styled(View);

export default function Main() {
  return (
    <StyledView className="grow shrink bg-gray">
      <AppBar />
      <RepositoryList />
    </StyledView>
  );
}
