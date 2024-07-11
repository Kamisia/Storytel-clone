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
  justify-content: end;
  margin-left: auto;
  margin-right: 0;

  div {
    display: flex;
    gap: 2rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <Wrapper>
      <div>
        <LinkButton text={"Wypróbuj"} />
        <MenuButton onClick={onMenuClick} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
