import { View } from "react-native";
import { RepositoryNode } from "../../models";
import { styled } from "nativewind";
import RepositoryInfo from "./RepositoryInfo";
import RepositoryMetrics from "./RepositoryMetrics";

const StyledView = styled(View);

export default function RepositoryItem(item: RepositoryNode) {
  return (
    <StyledView className="bg-white p-3 flex" testID="repositoryItem">
      <RepositoryInfo {...item} />
      <RepositoryMetrics {...item} />
    </StyledView>
  );
}
