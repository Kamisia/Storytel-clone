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
        {/*Tutaj div zwierający wysuwaną nawigacje
        <div>
          <nav>
            <ul>
              <li><a></a></li>
              <li><a></a></li>
              <li><a></a></li>
              <li><a></a></li>
              
            </ul>
            <ul>
              <li><a></a></li>
            </ul>
          </nav>
          <div>
            <section>
              <div>
                <div>
                  <div>
                    <svg></svg>
                  </div>
                  <input>
                </div>
                <div>
                  <div></div>
                  <div>
                    <button>
                      <svg></svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h4></h4>
              <ul>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
              </ul>
            </section>
            <section>
              <h4></h4>
              <ul>
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
