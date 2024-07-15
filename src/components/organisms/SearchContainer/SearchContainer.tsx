import React from "react";

import styled from "styled-components";
import InputSearch from "../../molecules/InputSearch/InputSearch.tsx";
interface SearchContainerProps {}
const Wrapper = styled.section``;
const SearchContainer: React.FC<SearchContainerProps> = ({}) => {
  return (
    <Wrapper>
      <InputSearch />
    </Wrapper>
  );
};

export default SearchContainer;
