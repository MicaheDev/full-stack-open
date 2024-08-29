import useRepository from '@hooks/useRepository';
import { ErrorView } from '@components';
import SingleRepositoryReviewList from './components/SingleRepositoryReviewList';

export default function SingleRepository() {
  const { repository, error, fetchMore } = useRepository();

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  if (error) {
    return <ErrorView error={error} />;
  }

  return (
    <SingleRepositoryReviewList
      repository={repository}
      onEndReach={onEndReach}
    />
  );
}
