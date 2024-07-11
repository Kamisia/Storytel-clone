import React from "react";

interface MenuButtonProps {
  text: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text }) => {
  return (
    <a type="button" href="/">
      {text}
    </a>
  );
};

export default MenuButton;
