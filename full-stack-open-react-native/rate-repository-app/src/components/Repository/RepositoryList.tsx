import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

export default function RepositoryList() {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
}
