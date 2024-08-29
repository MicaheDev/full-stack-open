import { FlatList, View } from 'react-native';
import { RepositoryEdge, RepositoryNode, RepositoryResponse } from '@models';
import { styled } from 'nativewind';
import RepositoryTouchableCard from './RepositoryTouchableCard';
import { Select } from '@components';
import { Dispatch, SetStateAction } from 'react';
import SearchBar from 'components/SearchBar';

const StyledView = styled(View);

const ItemSeparator = () => <StyledView className="h-3"></StyledView>;

type RepositoryListProps = {
  repositories: RepositoryResponse;
  order: { orderBy: string; orderDirection: string };
  setOrder: Dispatch<SetStateAction<{ orderBy: string; orderDirection: string }>>;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  onEndReach: () => void
};


import React, { Component } from 'react';

export default class RepositoryListContainer extends Component<RepositoryListProps> {
  renderHeader = () => {
    const { order, setOrder, keyword, setKeyword } = this.props;

    return (
      <>
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        <Select order={order} setOrder={setOrder} />
      </>
    );
  };
  render() {
    const { repositories, onEndReach } = this.props;

    const repositoryNodes: RepositoryNode[] = repositories
      ? repositories.edges.map((edge: RepositoryEdge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ListHeaderComponent={this.renderHeader()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryTouchableCard {...item} />}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReach}
      ></FlatList>
    );
  }
}
