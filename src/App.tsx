import React from "react";
import Header from "./components/organisms/Header/Header.tsx";
const App: React.FC = () => {
  const handleMenuClick = () => {
    console.log("Menu button clicked");
  };
  return (
    <div>
      <Header onMenuClick={handleMenuClick} />
    </div>
  );
};

export default App;
