import React from "react";
import styled from "styled-components";
interface MenuButtonProps {
  onClick: () => void;
}
const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    transition: fill;
  }
  &:hover svg {
    fill: #ff5c28;
  }
`;
const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick} aria-label="Menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        fill="#fff"
        viewBox="0 0 20 17"
        aria-hidden="true"
        focusable="false"
      >
        {" "}
        <path d="M0 1.071C0 .48.48 0 1.071 0H18.93C19.522 0 20 .48 20 1.071c0 .594-.478 1.072-1.071 1.072H1.07A1.07 1.07 0 0 1 0 1.07Zm0 7.143c0-.593.48-1.071 1.071-1.071H18.93c.593 0 1.071.478 1.071 1.071 0 .594-.478 1.072-1.071 1.072H1.07A1.07 1.07 0 0 1 0 8.214Zm18.929 8.215H1.07a1.07 1.07 0 1 1 0-2.143H18.93c.593 0 1.071.477 1.071 1.071s-.478 1.072-1.071 1.072Z"></path>
      </svg>
    </Wrapper>
  );
};

export default MenuButton;
