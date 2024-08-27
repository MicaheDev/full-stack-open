import { View } from "react-native";
import { styled } from "nativewind";
import { Route, Routes } from "react-router-native";
import { AppBar } from "@components";
import {
  CreateReview,
  Repositories,
  SignIn,
  SignUp,
  SingleRepository,
} from "@views";

const StyledView = styled(View);

export default function Main() {
  return (
    <StyledView className="grow shrink bg-gray">
      <AppBar />
      <Routes>
        <Route path="/" element={<Repositories />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/create-review" element={<CreateReview />}></Route>
        <Route path="/:repositoryId" element={<SingleRepository />}></Route>
      </Routes>
    </StyledView>
  );
}
