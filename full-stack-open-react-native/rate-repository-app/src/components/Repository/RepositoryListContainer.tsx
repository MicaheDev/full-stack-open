import { FlatList, TouchableOpacity, View } from "react-native";
import {
  RepositoryEdge,
  RepositoryNode,
  RepositoryResponse,
} from "../../models";
import { styled } from "nativewind";
import { useNavigate } from "react-router-native";
import RepositoryCard from "./Card/RepositoryCard";

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function RepositoryListContainer({
  repositories,
}: {
  repositories: RepositoryResponse;
}) {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes: RepositoryNode[] = repositories
    ? repositories.edges.map((edge: RepositoryEdge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigate(item.id);
          }}
        >
          <RepositoryCard {...item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}
