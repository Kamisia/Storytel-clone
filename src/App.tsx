import React from "react";
import Button from "./components/atoms/Button.tsx";

const App: React.FC = () => {
  const buttonClick = (text) => {
    console.log(text);
  };
  return (
    <div>
      <h1>Just start</h1>
      <Button text="Click Me" onClick={() => buttonClick("clicked btn")} />
    </div>
  );
};

export default App;
