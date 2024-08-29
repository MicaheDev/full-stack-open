import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = ({order, keyword}: {order: { orderBy: string; orderDirection: string }, keyword: string}) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: order.orderBy, orderDirection: order.orderDirection, searchKeyword: keyword },
    fetchPolicy: 'cache-and-network',
  });
  const repositories = data?.repositories;
  return { repositories, loading, error };
};

export default useRepositories;
