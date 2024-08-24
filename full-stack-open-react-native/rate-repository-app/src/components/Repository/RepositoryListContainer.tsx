import { FlatList, View } from "react-native";
import {
  RepositoryEdge,
  RepositoryNode,
  RepositoryResponse,
} from "../../models";
import { styled } from "nativewind";
import RepositoryItem from "./RepositoryItem";

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function RepositoryListContainer({
  repositories,
}: {
  repositories: RepositoryResponse;
}) {
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
