import React from "react";
import Link from "../../atoms/Link/Link.tsx";
import styled from "styled-components";
import { NavLinkData, NavLinkData2 } from "../../../data.tsx";

interface LinksProps {
  data: NavLinkData[] | NavLinkData2[];
}
const Wrapper = styled.ul``;
const Links: React.FC<LinksProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((link, index) => (
        <Link key={index} text={link.text} href={link.href} />
      ))}
    </Wrapper>
  );
};

export default Links;
