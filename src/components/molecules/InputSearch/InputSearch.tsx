import React from "react";
import Icon from "../../atoms/Icon/Icon.tsx";
import styled from "styled-components";
import Input from "../../atoms/Input/Input.tsx";
import Button from "../../atoms/Button/Button.tsx";
interface InputSearchProps {}
const Wrapper = styled.div``;
const InputSearch: React.FC<InputSearchProps> = ({}) => {
  return (
    <Wrapper>
      <div>
        <Icon />
        <Input />
        <div>
          <div>{/*pusty div w mobilnej wersji nic nie robi  */}</div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InputSearch;
