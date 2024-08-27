import { FlatList, View } from 'react-native';
import { RepositoryEdge, RepositoryNode, RepositoryResponse } from '@models';
import { styled } from 'nativewind';
import RepositoryTouchableCard from './RepositoryTouchableCard';
import { Select } from '@components';
import { Dispatch, SetStateAction } from 'react';

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

export default function RepositoryList({
  repositories,
  order,
  setOrder,
}: {
  repositories: RepositoryResponse;
  order: { orderBy: string; orderDirection: string };
  setOrder: Dispatch<SetStateAction<{ orderBy: string; orderDirection: string; }>>
}) {
  // Get the nodes from the edges array
  const repositoryNodes: RepositoryNode[] = repositories
    ? repositories.edges.map((edge: RepositoryEdge) => edge.node)
    : [];

  return (
    <>
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={<Select order={order} setOrder={setOrder}/>}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryTouchableCard {...item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </>
  );
}
