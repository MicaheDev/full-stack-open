import { FlatList, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { styled } from "nativewind";
import { repositories } from "../../data/repositories";

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function RepositoryList() {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} />}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
}
