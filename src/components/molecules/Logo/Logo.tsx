import React from "react";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon.tsx";
import LogoText from "../../atoms/LogoText/LogoText.tsx";

const Logo: React.FC = () => {
  return (
    <a href="/">
      <LogoIcon />
      <LogoText />
    </a>
  );
};

export default Logo;
