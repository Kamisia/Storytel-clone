import React from "react";

import styled from "styled-components";
interface TagProps {
  text: string;
}
const Wrapper = styled.div``;
const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <Wrapper>
      <span> {text}</span>
    </Wrapper>
  );
};

export default Tag;
