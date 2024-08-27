import { ScrollView, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { styled } from "nativewind";
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import { useContext, useMemo } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "@graphql/queries";
import AuthStorageContext from "@context/AuthStorageContext";

const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledTouchable = styled(TouchableOpacity);

export default function AppBar() {
  const navigate = useNavigate();
  const authStorage = useContext(AuthStorageContext);

  const { data } = useQuery(GET_CURRENT_USER);

  const client = useApolloClient();

  const isLogin = useMemo(() => !!data?.me, [data]);

  const handleLogout = async () => {
    try {
      await authStorage.removeAccessToken();
      client.resetStore();
      navigate("/signin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <StyledView
      className="bg-secondary w-full h-[100px] px-4 flex flex-row justify-between items-center"
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <StyledScrollView className="flex w-full gap-4" horizontal={true}>
        <Link to="/">
          <Text className="text-white font-bold text-md">Repositories</Text>
        </Link>

        {isLogin && (
          <Link to="/create-review">
            <Text className="text-white font-bold text-md">
              Create a review
            </Text>
          </Link>
        )}

        {isLogin && (
          <StyledTouchable onPress={handleLogout}>
            <Text className="text-white font-bold text-md">Sign Out</Text>
          </StyledTouchable>
        )}

        {!isLogin && (
          <Link to="/signin">
            <Text className="text-white font-bold text-md">Sign In</Text>
          </Link>
        )}

        {!isLogin && (
          <Link to="/signup">
            <Text className="text-white font-bold text-md">Sign Up</Text>
          </Link>
        )}
      </StyledScrollView>
    </StyledView>
  );
}
