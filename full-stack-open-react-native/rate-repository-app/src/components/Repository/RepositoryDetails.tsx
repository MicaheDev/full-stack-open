// src/components/Repository/RepositoryDetails.js
import { View, ActivityIndicator, Text, FlatList } from "react-native";
import useRepository from "../../hooks/useRepository";
import RepositoryCard from "./Card/RepositoryCard";
import ReviewItem from "./ReviewItem";
import { ReviewsEdge, ReviewsNode } from "../../models";
import { styled } from "nativewind";

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function RepositoryDetails() {
  const { repository, loading, error } = useRepository();

  if (loading) {
    return (
      <StyledView className="flex justify-center items-center h-[80vh]">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="text-bold">Loading...</Text>
      </StyledView>
    );
  }

  if (error) {
    return (
      <StyledView className="flex justify-center items-center h-[80vh]">
        <Text className="text-red-500 font-bold">Error: {error.message}</Text>
      </StyledView>
    );
  }

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
