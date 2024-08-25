import { View } from "react-native";
import RepositoryList from "./components/Repository/RepositoryList";
import AppBar from "./components/Shared/AppBar";
import { styled } from "nativewind";
import { Route, Routes } from "react-router-native";
import SignIn from "./components/Auth/SignIn/SignIn";
import RepositoryDetails from "./components/Repository/RepositoryDetails";

const StyledView = styled(View);

export default function Main() {
  return (
    <StyledView className="grow shrink bg-gray">
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/:repositoryId" element={<RepositoryDetails />}></Route>
      </Routes>
    </StyledView>
  );
}
