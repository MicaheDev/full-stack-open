import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '@graphql/queries';
import { ReviewsEdge, ReviewsNode } from '@models';
import { styled } from 'nativewind';
import { FlatList, View } from 'react-native';
import ReviewItem from 'views/SingleRepository/components/ReviewItem';

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function MyReviews() {
  const { data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
  });

  const reviewNodes: ReviewsNode[] = data?.me?.reviews
    ? data?.me?.reviews?.edges.map((edge: ReviewsEdge) => edge.node)
    : [];

  return (
    <>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} type="me" />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </>
  );
}
