import React from "react";
import Navigation from "../../organisms/Navigation/Navigation.tsx";
import PopularTag from "../../organisms/PopularTag/PopularTag.tsx";
import SearchBox from "../SearchBox/SearchBox.tsx";
import styled from "styled-components";
interface DropBoxProps {}
const Wrapper = styled.div``;
const DropBox: React.FC<DropBoxProps> = ({ text, href = "/", children }) => {
  return (
    <Wrapper>
      <Navigation />
      <PopularTag />
      <SearchBox />
    </Wrapper>
  );
};

export default DropBox;
