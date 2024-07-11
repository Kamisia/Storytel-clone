import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="Menu">
      <RxHamburgerMenu />
    </button>
  );
};

export default MenuButton;
