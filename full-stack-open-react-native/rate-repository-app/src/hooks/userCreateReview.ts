import { useMutation } from "@apollo/client";
import {  CREATE_REVIEW } from "@graphql/mutations";


type ReviewParams = {
  ownerName: string;
  repositoryName: string;
  rating: string,
  text:  string
};

const useCreateReview = () => {
  const [CreateReview, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text}: ReviewParams) => {
    const { data } = await CreateReview({
      variables: { review: {  ownerName, repositoryName, rating: parseInt(rating), text } },
    });

    console.log(data)

    return data

  };

  return [createReview, result] as const;
};

export default useCreateReview;
