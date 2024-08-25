import { View } from "react-native";
import { RepositoryNode } from "../../../models";
import { styled } from "nativewind";
import RepositoryStats from "./RepositoryStats";
import RepositoryInfo from "./RepositoryInfo";
import RepositoryLink from "./RepositoryLink";

const StyledView = styled(View);

export default function RepositoryCard(item: RepositoryNode) {
  return (
    <StyledView className="bg-white p-3 flex" testID="repositoryItem">
      <RepositoryInfo {...item} />
      <RepositoryStats {...item} />
      <RepositoryLink url={item.url}/>
    </StyledView>
  );
}
