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

  // Aplicar debounce al keyword
  const [debouncedKeyword] = useDebounce(keyword, 500);

  // Pasar el debouncedKeyword en lugar de keyword directamente
  const { repositories, error } = useRepositories({
    order,
    keyword: debouncedKeyword,
  });
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
    />
  );
}
