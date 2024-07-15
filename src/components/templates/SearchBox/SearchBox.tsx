import React from "react";

import styled from "styled-components";
import SearchContainer from "../../organisms/SearchContainer/SearchContainer.tsx";
interface SearchBoxProps {}
const Wrapper = styled.div``;
const SearchBox: React.FC<SearchBoxProps> = ({}) => {
  return (
    <Wrapper>
      <SearchContainer />
    </Wrapper>
  );
};

export default SearchBox;
