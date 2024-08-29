import React, { Dispatch, SetStateAction} from 'react';
import { Searchbar } from 'react-native-paper';

export default function SearchBar({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}) {

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setKeyword}
      value={keyword}
    />
  );
}
