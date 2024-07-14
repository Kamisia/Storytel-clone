import React from "react";

import styled from "styled-components";
interface NavLinkProps {
  text: string;
  href?: string;
}
const Wrapper = styled.li``;
const NavLink: React.FC<NavLinkProps> = ({ text, href = "/" }) => {
  return (
    <Wrapper>
      <a href={`${href}`}> {text}</a>
    </Wrapper>
  );
};

export default NavLink;
