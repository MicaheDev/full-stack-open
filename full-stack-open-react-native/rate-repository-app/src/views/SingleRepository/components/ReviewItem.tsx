import { Alert, TouchableOpacity, View } from 'react-native';
import { Text } from '@components';
import { ReviewsNode } from '@models';
import { styled } from 'nativewind';
import { format } from 'date-fns';
import { Link } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '@graphql/mutations';
import { GET_CURRENT_USER } from '@graphql/queries';

const StyledView = styled(View);
const StyledTouchable = styled(TouchableOpacity);

function getDateString(date: Date) {
  return format(date, 'dd.MM.yyyy');
}
interface ReviewItemProps {
  review: ReviewsNode;
  type?: 'me';
}

export default function ReviewItem({ review, type }: ReviewItemProps) {
  const [DeleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_CURRENT_USER, variables: { includeReviews: true } }],
    onCompleted: () => {
      Alert.alert('Review Deleted', 'The review has been successfully deleted.');
    },
    onError: () => {
      Alert.alert('Error', 'Something went wrong while trying to delete the review.');
    },
  });

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await DeleteReview({ variables: { deleteReviewId: id } });
            } catch (error) {
              console.error('Delete review error:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <StyledView className="bg-white p-3  ">
      <StyledView className="flex flex-row mb-4">
        <StyledView className="mr-4">
          <StyledView className="w-[60px] h-[60px] border-4 border-primary rounded-full flex justify-center items-center">
            <Text className="font-bold text-primary text-xl">
              {review.rating}
            </Text>
          </StyledView>
        </StyledView>
        <StyledView className="flex-1">
          <Text className="font-bold text-lg">
            {type === 'me' ? review.repository.fullName : review.user.username}
          </Text>
          <Text className="text-complementary mb-2">
            {getDateString(review.createdAt)}
          </Text>
          <Text>{review.text}</Text>
        </StyledView>
      </StyledView>
      {type === 'me' && (
        <StyledView className="flex flex-row justify-around">
          <Link
            className="bg-primary p-4 inline-flex justify-center text-white items-center rounded-md mb-2"
            to={`/${review.repository.id}`}
          >
            <Text className="text-white font-bold">View repository</Text>
          </Link>
          <StyledTouchable
            onPress={() => handleDelete(review.id)}
            className="bg-red-500 p-4 inline-flex justify-center text-white items-center rounded-md mb-2"
          >
            <Text className="text-white font-bold">Delete Review</Text>
          </StyledTouchable>
        </StyledView>
      )}
    </StyledView>
  );
}
