import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";

type Credentials = {
  username: string;
  password: string;
};

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [Authenticate, result] = useMutation(AUTHENTICATE_USER);

  const client = useApolloClient();

  const signIn = async ({ username, password }: Credentials) => {
    const { data } = await Authenticate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    client.resetStore();
  };

  return [signIn, result] as const;
};

export default useSignIn;
