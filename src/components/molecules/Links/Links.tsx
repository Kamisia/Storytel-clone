import React from "react";
import Link from "../../atoms/Link/Link.tsx";
import styled from "styled-components";
import { NavLinkData, NavLinkData2, PopularTag } from "../../../data.tsx";
import Tag from "../../atoms/Tag.tsx";
interface LinksProps {
  data: NavLinkData[] | NavLinkData2[] | PopularTag[];
}
const Wrapper = styled.ul``;
const Links: React.FC<LinksProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((link, index) => (
        <Link key={index} text={link.text} href={link.href}>
          {"tag" in link && <Tag text={link.tag} />}
        </Link>
      ))}
    </Wrapper>
  );
};

export default Links;
