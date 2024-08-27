import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = ({order}: {order: { orderBy: string; orderDirection: string }}) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: order.orderBy, orderDirection: order.orderDirection },
    fetchPolicy: 'cache-and-network',
  });
  console.log(order);
  const repositories = data?.repositories;
  return { repositories, loading, error };
};

export default useRepositories;
