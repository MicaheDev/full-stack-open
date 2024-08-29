import useRepositories from '@hooks/useRepositories';
import { ErrorView } from '@components';
import RepositoryList from './components/RepositoryList';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function Repositories() {
  const [order, setOrder] = useState({
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
  });
  const [keyword, setKeyword] = useState('');

  const [debouncedKeyword] = useDebounce(keyword, 500);

  const variables = {
    searchKeyword: debouncedKeyword,  // use debounce searchKeyword
    orderBy: order.orderBy,
    orderDirection: order.orderDirection,
    first: 8,
  };
  const { repositories, error, fetchMore } = useRepositories(variables);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  if (error) {
    return <ErrorView error={error} />;
  }

  return (
    <RepositoryList
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      keyword={keyword}
      setKeyword={setKeyword}
      onEndReach={onEndReach}
    />
  );
}
