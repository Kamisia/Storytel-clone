import React from "react";
import Logo from "../../molecules/Logo/Logo.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation.tsx";
interface HeaderProps {}
const Wrapper = styled.header`
  width: 100%;
  min-height: 6.4rem;
  display: block;
  position: fixed;
  .container {
    display: flex;
    justify-content: space-between;
    z-index: 1000;
    align-items: center;
    width: 100%;
    height: 6.4rem;
    padding-inline: 1.6rem;
    background-color: rgb(16, 16, 16);
  }
`;
const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <div className="container">
        <Logo />
        <Navbar />
        <Navigation />
      </div>
      <div>
        {/* DoropBox.tsx pamiętaj o zmianie className na open by był widoczny  */}
        {/*Tutaj div zwierający wysuwaną nawigacje
        <div> //DropContainer.tsx
          <nav>//Navigation.tsx
            <ul>//NavLinks.tsx
              <li><a></a></li>//NavLink.tsx
              <li><a></a></li>
              <li><a></a></li>
              <li><a></a></li>
              
            </ul>
            <ul>
              <li><a></a></li>
            </ul>
          </nav>
          <div>//SearchBox.tsx
            <section>//SearchSection.tsx lub SearchContainer.tsx
              <div>
                <div>// InputSearch.tsx
                  <div>//icon.tsx
                    <svg></svg>
                  </div>
                  <input> //input.tsx
                </div>
                <div>
                  <div></div>//pusty div nic się nie dzieje w wersji mobilnej
                  <div>
                    <button>//button.tsx
                      <svg></svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section> //PopularTag.tsx
              <h4></h4>//Title.tsx
              <ul>NavLinks.tsx
                <li><a></a></li>NavLink.tsx
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
              </ul>
            </section>
            <section>
              <h4></h4>//Title.tsx
              <ul>//NavLinks.tsx
              <li><a></a></li>//NavLink.tsx
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
              </ul>
              <a></a>
            </section>
          </div>  
        </div>
        
        */}
      </div>
    </Wrapper>
  );
};

export default Header;
