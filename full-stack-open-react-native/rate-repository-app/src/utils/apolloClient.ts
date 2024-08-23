import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Constants from "expo-constants";
import AuthStorage from "./authStorage";

const URI = Constants.expoConfig?.extra?.apolloUri;

const createApolloClient = (authStorage: AuthStorage) => {
  const httpLink = new HttpLink({ uri: URI });

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await authStorage.getAccessToken();
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
