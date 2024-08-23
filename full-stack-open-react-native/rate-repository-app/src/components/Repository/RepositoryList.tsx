import { FlatList, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { styled } from "nativewind";
import useRepositories from "../../hooks/useRepositories";
import { RepositoryEdge, RepositoryNode } from "../../models";
const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function RepositoryList() {
  const { repositories } = useRepositories();
  // Get the nodes from the edges array
  const repositoryNodes: RepositoryNode[] = repositories
    ? repositories.edges.map((edge: RepositoryEdge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} />}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}
