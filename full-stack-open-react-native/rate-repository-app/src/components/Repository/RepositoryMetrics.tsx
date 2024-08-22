import { styled } from "nativewind";
import { View } from "react-native";
import Text from "../Shared/Text";

const StyledView = styled(View);

type RepositoryMetricsProps = {
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
};

export default function RepositoryMetrics({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}: RepositoryMetricsProps) {
  function formatNumber(num: number) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  }
  return (
    <StyledView className="flex flex-row justify-around">
      <StyledView className="flex items-center justify-center">
        <Text className="text-principal font-bold text-lg">
          {formatNumber(stargazersCount)}
        </Text>
        <Text className="text-complementary">Starts</Text>
      </StyledView>
      <StyledView className="flex items-center justify-center">
        <Text className="text-principal font-bold text-lg">
          {formatNumber(forksCount)}
        </Text>
        <Text className="text-complementary">Forks</Text>
      </StyledView>
      <StyledView className="flex items-center justify-center">
        <Text className="text-principal font-bold text-lg">{reviewCount}</Text>
        <Text className="text-complementary">Reviews</Text>
      </StyledView>
      <StyledView className="flex items-center justify-center">
        <Text className="text-principal font-bold text-lg">
          {ratingAverage}
        </Text>
        <Text className="text-complementary">Rating</Text>
      </StyledView>
    </StyledView>
  );
}
