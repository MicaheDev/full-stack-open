import useRepositories from "@hooks/useRepositories";
import { ErrorView, Loader } from "@components";
import RepositoryList from "./components/RepositoryList";
import { useState } from "react";

export default function Repositories() {
  const [order, setOrder] = useState({
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
  });

  const { repositories, loading, error } = useRepositories({order});

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView error={error} />;
  }

  return <RepositoryList repositories={repositories} order={order} setOrder={setOrder} />;
}
