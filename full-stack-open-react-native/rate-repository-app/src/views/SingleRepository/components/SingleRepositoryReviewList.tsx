import { View, FlatList } from "react-native";
import { RepositoryNode, ReviewsEdge, ReviewsNode } from "@models";
import { styled } from "nativewind";
import ReviewItem from "./ReviewItem";
import { RepositoryCard } from "@components";

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function SingleRepositoryReviewList({
  repository,
}: {
  repository: RepositoryNode;
}) {
  const reviewNodes: ReviewsNode[] = repository.reviews
    ? repository.reviews.edges.map((edge: ReviewsEdge) => edge.node)
    : [];

  const repo = repository;

  return (
    <>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem {...item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <View>
            <RepositoryCard {...repo} />
            <ItemSeparator />
          </View>
        )}
        ItemSeparatorComponent={ItemSeparator}
      />
    </>
  );
}
