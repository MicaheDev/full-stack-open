import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

type Variables = {
  orderBy: string;
  orderDirection: string;
  searchKeyword: string;
  first: number,
};

const useRepositories = (variables: Variables) => {
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });


  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  const repositories = data ? data.repositories : undefined;
  return { repositories, loading, error, fetchMore: handleFetchMore };
};

export default useRepositories;
