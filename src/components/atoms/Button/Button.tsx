import React from "react";
import Icon from "../Icon/Icon.tsx";
import styled from "styled-components";
interface ButtonProps {}
const Wrapper = styled.button``;
const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="#5c5c5cff"
        viewBox="0 0 14 14"
      >
        <path d="M.633 12.32a.744.744 0 0 0 0 1.046.762.762 0 0 0 1.054 0l5.312-5.313 5.313 5.313a.754.754 0 0 0 1.054 0 .752.752 0 0 0 0-1.046L8.054 6.999l5.312-5.313a.744.744 0 0 0 0-1.046.746.746 0 0 0-1.054 0L6.999 5.953 1.687.64a.74.74 0 0 0-1.054 0 .752.752 0 0 0 0 1.046L5.945 7l-5.312 5.32Z"></path>
      </svg>
    </Wrapper>
  );
};

export default Button;
