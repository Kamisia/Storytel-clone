import React from "react";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon.tsx";
import LogoText from "../../atoms/LogoText/LogoText.tsx";
import styled from "styled-components";
const Logo: React.FC = () => {
  const Wrapper = styled.a`
    margin-left: 0;
    margin-right: auto;
    padding: 0;
    display: flex;
    cursor: pointer;

    width: 125px;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
      text-align: start;
    }
  `;
  return (
    <Wrapper href="/">
      <div>
        <LogoIcon />
        <LogoText />
      </div>
    </Wrapper>
  );
};

export default Logo;
