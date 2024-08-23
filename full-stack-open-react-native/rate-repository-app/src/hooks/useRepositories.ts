import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositories = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network"});
  const repositories = data?.repositories;
  return { repositories, loading, error };
};

export default useRepositories;
