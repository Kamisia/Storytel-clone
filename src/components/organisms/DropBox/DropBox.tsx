import React from "react";
import Navigation from "../Navigation/Navigation.tsx";
import PopularTag from "../PopularTag/PopularTag.tsx";

import styled from "styled-components";
interface DropBoxProps {}
const Wrapper = styled.div``;
const Link: React.FC<DropBoxProps> = ({ text, href = "/", children }) => {
  return (
    <Wrapper>
      <Navigation />
      <PopularTag />
    </Wrapper>
  );
};

export default Link;
