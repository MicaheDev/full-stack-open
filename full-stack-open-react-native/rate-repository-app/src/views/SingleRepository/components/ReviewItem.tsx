import { View } from "react-native";
import {Text} from "@components";
import { ReviewsNode } from "@models";
import { styled } from "nativewind";
import { format } from "date-fns";

const StyledView = styled(View);

function getDateString(date: Date) {
  return format(date, "dd.MM.yyyy");
}

export default function ReviewItem(review: ReviewsNode) {
  return (
    <StyledView className="bg-white p-3 flex flex-row">
      <StyledView className="mr-4">
        <StyledView className="w-[60px] h-[60px] border-4 border-primary rounded-full flex justify-center items-center">
          <Text className="font-bold text-primary text-xl">
            {review.rating}
          </Text>
        </StyledView>
      </StyledView>
      <StyledView className="flex-1">
        <Text className="font-bold text-lg">{review.user.username}</Text>
        <Text className="text-complementary mb-2">
          {getDateString(review.createdAt)}
        </Text>
        <Text>{review.text}</Text>
      </StyledView>
    </StyledView>
  );
}
