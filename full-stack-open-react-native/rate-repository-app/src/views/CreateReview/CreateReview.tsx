import useCreateReview from "@hooks/userCreateReview";
import CreateReviewFormContainer from "./components/CreateReviewFormContainer";
import { Alert } from "react-native";
import { useNavigate } from "react-router-native";

type ReviewParams = {
  ownerName: string;
  repositoryName: string;
  rating: string;
  text: string;
};

function extractErrorMessage(error: string) {
  if (error.includes(":")) {
    // Divide el texto en la primera aparición de ':'
    return error.split(":")[1].trim();
  }
  return error;
}

export default function CreateReview() {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values: ReviewParams) => {
    const { ownerName, repositoryName, text, rating } = values;

    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        text,
        rating,
      });
      console.log(data);
      const repositoryId = data.createReview.repositoryId;
      navigate(`/${repositoryId}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e);

      Alert.alert(`${extractErrorMessage(e.toString())}`);
    }
  };
  return (
    <>
      <CreateReviewFormContainer onSubmit={onSubmit} />
    </>
  );
}
