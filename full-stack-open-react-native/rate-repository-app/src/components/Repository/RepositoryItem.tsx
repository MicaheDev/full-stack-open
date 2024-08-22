import { View } from "react-native";
import { Repository } from "../../models";
import { styled } from "nativewind";
import RepositoryInfo from "./RepositoryInfo";
import RepositoryMetrics from "./RepositoryMetrics";

const StyledView = styled(View);

export default function RepositoryItem(item: Repository) {
  return (
    <StyledView className="bg-white p-3 flex">
      <RepositoryInfo {...item} />
      <RepositoryMetrics {...item} />
    </StyledView>
  );
}
