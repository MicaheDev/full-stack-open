import { GET_REPOSITORY_DETAILS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";

const useRepository = () => {
  const { repositoryId } = useParams();

  console.log(repositoryId)

  const { loading, error, data } = useQuery(GET_REPOSITORY_DETAILS, {
    variables: { id: repositoryId },
  });

  const repository = data?.repository;
  return { repository, loading, error };
};

export default useRepository;
