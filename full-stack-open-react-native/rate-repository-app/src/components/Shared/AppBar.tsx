import { ScrollView, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { styled } from "nativewind";
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import { useContext, useMemo} from "react";
import AuthStorageContext from "../../context/AuthStorageContext";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";

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
          <Text className="text-white font-bold text-lg">Repositories</Text>
        </Link>

        {isLogin ? (
          <StyledTouchable
            className="bg-red-500 rounded-md px-2 inline-flex justify-center items-center"
            onPress={handleLogout}
          >
            <Text className="text-white font-bold text-sm">Log Out</Text>
          </StyledTouchable>
        ) : (
          <Link to="/signin">
            <Text className="text-white font-bold text-lg">Sign In</Text>
          </Link>
        )}
      </StyledScrollView>
    </StyledView>
  );
}
