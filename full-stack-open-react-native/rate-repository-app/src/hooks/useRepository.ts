import { GET_REPOSITORY_DETAILS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';

const useRepository = () => {
  const { repositoryId } = useParams();

  console.log(repositoryId);

  const first = 2;

  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORY_DETAILS, {
    variables: { repositoryId: repositoryId, first },
    fetchPolicy: 'cache-and-network',
  });


  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

      // console.log(canFetchMore)

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY_DETAILS,
      variables: {
        repositoryId: repositoryId,
        after: data.repository.reviews.pageInfo.endCursor,
        first,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          },
        };

        return nextResult;
      },
    });
  };

  const repository = data?.repository;
  return { repository, loading, error, fetchMore: handleFetchMore };
};

export default useRepository;
