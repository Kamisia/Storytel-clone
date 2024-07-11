import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;

  text?: string;
  id?: string;

  dataTestId?: string;
}

const Button: FC<ButtonProps> = ({ onClick, id, text, dataTestId }) => {
  return (
    <button id={id} onClick={onClick} data-testid={dataTestId}>
      {text}
    </button>
  );
};

export default Button;
