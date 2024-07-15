import React from "react";
import Logo from "../../molecules/Logo/Logo.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import styled from "styled-components";
import DropBox from "../DropBox/DropBox.tsx";
interface HeaderProps {}
const Wrapper = styled.header`
  width: 100%;
  min-height: 6.4rem;
  display: block;
  position: fixed;
  .container {
    display: flex;
    justify-content: space-between;
    z-index: 1000;
    align-items: center;
    width: 100%;
    height: 6.4rem;
    padding-inline: 1.6rem;
    background-color: rgb(16, 16, 16);
  }
`;
const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <div className="container">
        <Logo />
        <Navbar />
      </div>
      <DropBox />
    </Wrapper>
  );
};

export default Header;
