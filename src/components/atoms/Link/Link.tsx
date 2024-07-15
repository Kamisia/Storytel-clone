import React, { ReactNode } from "react";

import styled from "styled-components";
interface LinkProps {
  text: string;
  href?: string;
  children?: ReactNode;
}
const Wrapper = styled.li``;
const Link: React.FC<LinkProps> = ({ text, href = "/", children }) => {
  return (
    <Wrapper>
      <a href={`${href}`}> {children || text}</a>
    </Wrapper>
  );
};

export default Link;
