import Main from "./src/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";
import { PaperProvider } from "react-native-paper";

const authStorage = new AuthStorage();

const client = createApolloClient(authStorage);
export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={client}>
        <AuthStorageContext.Provider value={authStorage}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
