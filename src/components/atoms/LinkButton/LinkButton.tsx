import React from "react";
import styled from "styled-components";
interface MenuButtonProps {
  text: string;
}
const Wrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  min-width: 12ch;
  border-width: 0px;
  border-radius: 25px;
  border-color: transparent;
  text-align: center;
  text-decoration: none;
  font-size: 0.8rem;
  font-family: "Poppins";
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.03px;
  line-height: 0.8rem;
  min-height: 2rem;
  padding: 1rem;
  color: rgb(16, 16, 16);
  background-color: rgb(255, 255, 255);
`;

const MenuButton: React.FC<MenuButtonProps> = ({ text }) => {
  return (
    <Wrapper type="button" href="/">
      {text}
    </Wrapper>
  );
};

export default MenuButton;
