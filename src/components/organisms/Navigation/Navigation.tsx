import React from "react";
import styled from "styled-components";
import { navLinkData, navLinkData2 } from "../../../data.tsx";
import Links from "../../molecules/Links/Links.tsx";
interface NavigationProps {}
const Wrapper = styled.nav``;
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Wrapper>
      <Links data={navLinkData} />
      <Links data={navLinkData2} />
    </Wrapper>
  );
};

export default Navigation;
