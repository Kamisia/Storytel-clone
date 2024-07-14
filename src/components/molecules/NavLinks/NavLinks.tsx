import React from "react";
import NavLink from "../../atoms/NavLink/NavLink.tsx";
import styled from "styled-components";
import { NavLinkData, NavLinkData2 } from "../../../data.tsx";

interface NavLinksProps {
  data: NavLinkData[] | NavLinkData2[];
}
const Wrapper = styled.ul``;
const NavLinks: React.FC<NavLinksProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((link, index) => (
        <NavLink key={index} text={link.text} href={link.href} />
      ))}
    </Wrapper>
  );
};

export default NavLinks;
