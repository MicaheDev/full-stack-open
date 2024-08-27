import { useMutation } from "@apollo/client";
import { CREATE_USER } from "@graphql/mutations";
import useSignIn from "./useSignIn";

type Credentials = {
  username: string;
  password: string;
};

const useSignUp = () => {
  const [CreateUser, result] = useMutation(CREATE_USER);
  const [SignIn] = useSignIn();

  const signUp = async ({ username, password }: Credentials) => {
    const { data } = await CreateUser({
      variables: { user: { username, password } },
    });

    if (data.createUser) {
      await SignIn({ username, password });
    }
  };

  return [signUp, result] as const;
};

export default useSignUp;
