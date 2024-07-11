import React from "react";
import Logo from "../../molecules/Logo/Logo.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import styled from "styled-components";
interface HeaderProps {}
const Wrapper = styled.header`
  width: 100%;
  min-height: 6.4rem;
  display: flex;
  flex-direction: row;
  z-index: 1000;
  position: fixed;
  align-items: start;
  padding: 1rem;
  background-color: rgb(16, 16, 16);
  justify-content: space-between;
`;
const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <Logo />
      <Navbar />
    </Wrapper>
  );
};

export default Header;
