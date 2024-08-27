import { TouchableOpacity, View } from "react-native";
import { FormikTextInput, Text } from "@components";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTouchable = styled(TouchableOpacity);

export default function CreateReviewForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <View>
      <StyledView className="p-4 bg-white">
        <FormikTextInput
          name="ownerName"
          placeholder="Repository owner name"
          testID="ownerNameInput"
        />
        <FormikTextInput
          name="repositoryName"
          placeholder="Repository name"
          testID="repositoryNamedInput"
        />
        <FormikTextInput
          name="rating"
          placeholder="Rating between 0 and 100"
          testID="ratingInput"
          keyboardType="numeric"
        />
        <FormikTextInput
          name="text"
          placeholder="Review"
          testID="reviewInput"
          multiline
        />
        <StyledTouchable
          className="bg-primary p-4 inline-flex justify-center items-center rounded-md mb-2"
          testID="createReviewButton"
          onPress={onSubmit}
        >
          <Text className="text-white font-bold">Create a review</Text>
        </StyledTouchable>
      </StyledView>
    </View>
  );
}
