import React from "react";
import styled from "styled-components";
import { navLinkData, navLinkData2 } from "../../../data.tsx";
import NavLinks from "../../molecules/NavLinks/NavLinks.tsx";
interface NavigationProps {}
const Wrapper = styled.nav``;
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Wrapper>
      <NavLinks data={navLinkData} />
      <NavLinks data={navLinkData2} />
    </Wrapper>
  );
};

export default Navigation;
