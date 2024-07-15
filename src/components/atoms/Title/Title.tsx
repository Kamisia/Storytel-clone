import React from "react";

import styled from "styled-components";
interface TitleSectionProps {
  text: string;
}
const Wrapper = styled.h4``;
const TitleSection: React.FC<TitleSectionProps> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default TitleSection;
