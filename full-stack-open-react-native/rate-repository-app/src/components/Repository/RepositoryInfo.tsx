import { styled } from "nativewind";
import { Image } from "react-native";
import { View } from "react-native";
import Text from "../Shared/Text";

const StyledView = styled(View);
const StyledImage = styled(Image);

type RepositoryInfoProps = {
  ownerAvatarUrl: string;
  fullName: string;
  description: string;
  language: string;
};

export default function RepositoryInfo({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}: RepositoryInfoProps) {
  return (
    <StyledView className="flex flex-row w-full gap-3 mb-3">
      <StyledImage
        className="w-[50px] h-[50px] rounded-md"
        src={ownerAvatarUrl}
        width={50}
        height={50}
      />

      <StyledView className="flex flex-col flex-wrap items-start h-full">
        <Text className="text-principal text-lg font-bold mb-2">
          {fullName}
        </Text>
        <Text className="text-complementary max-w-[80vw] mb-2">
          {description}
        </Text>
        <StyledView className="bg-primary p-2 rounded-md mb-2">
          <Text className="text-white">{language}</Text>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
