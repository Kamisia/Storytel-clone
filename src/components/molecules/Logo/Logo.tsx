import React from "react";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon.tsx";
import LogoText from "../../atoms/LogoText/LogoText.tsx";
import styled from "styled-components";
const Logo: React.FC = () => {
  const Wrapper = styled.a`
    margin: 0;
    padding: 0;
    display: flex;
    cursor: pointer;
    vertical-align: baseline;
    width: 111px;
    height: 24px;
    border: 0;

    div {
      vertical-align: baseline;
      display: flex;
      gap: 0.5rem;
      width: 111px;
      height: 24px;
      margin: 0;
      padding: 0;
      text-align: start;
      justify-content: space-between;
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
