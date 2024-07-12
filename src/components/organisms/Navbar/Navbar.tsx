import React from "react";

import MenuButton from "../../atoms/MenuButton/MenuButton.tsx";
import LinkButton from "../../atoms/LinkButton/LinkButton.tsx";
import styled from "styled-components";
interface NavbarProps {
  onMenuClick?: () => void;
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`;
const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <Wrapper>
      <LinkButton text={"Wypróbuj"} />
      <MenuButton onClick={onMenuClick} />
    </Wrapper>
  );
};

export default Navbar;
