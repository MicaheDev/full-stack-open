import useRepository from "@hooks/useRepository";
import { ErrorView, Loader } from "@components";
import SingleRepositoryReviewList from "./components/SingleRepositoryReviewList";

export default function SingleRepository() {
  const { repository, loading, error } = useRepository();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView error={error} />;
  }

  return <SingleRepositoryReviewList repository={repository} />;
}
