import React from "react";
import { popularTag } from "../../../data.tsx";
import Links from "../../molecules/Links/Links.tsx";
import styled from "styled-components";
import TitleSection from "../../atoms/Title/Title.tsx";
interface PopularTagProps {
  text: string;
}
const Wrapper = styled.section``;
const PopularTag: React.FC<PopularTagProps> = ({ text }) => {
  return (
    <Wrapper>
      <TitleSection text={"Popularne Tagi"} />
      <Links data={popularTag} />
    </Wrapper>
  );
};

export default PopularTag;
