import React from "react";
import Logo from "../../molecules/Logo/Logo.tsx";
import MenuButton from "../../atoms/MenuButton/MenuButton.tsx";
import LinkButton from "../../atoms/LinkButton/LinkButton.tsx";
interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header>
      <div>
        <Logo />
        <LinkButton text={"Wypróbuj"} />
        <MenuButton onClick={onMenuClick} />
      </div>
    </header>
  );
};

export default Header;
