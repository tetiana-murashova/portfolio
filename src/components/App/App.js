import React from 'react';
import './App.css';
import Banner from "../Banner/Banner";

function NavLogo() {
  return(
      <a href="#">
        <div className="element--logo">
          <img className="logo__yellow" src={require("./Logo-short.png")} alt="logo__yellow" />
          <img className="logo__red" src={require("./LogoRed.png")} alt="logo__red" />
          <img className="logo__green" src={require("./LogoGreen.png")} alt="logo__green" />
          <h5>Tetiana Murashova</h5>
        </div>
      </a>
  )
}

function App() {
  return (
      <>
      <div className="navigation--wrapper">
        <div className="navigation">
          <NavLogo />
          <div className="menu-wrapper">
            <div className="menu">
              <div className="open">Menu</div>
              <div className="line"></div>
              <div className="nav-menu">
                <a href="#" className="menu-link">Contact me</a>
                <a href="#" className="menu-link">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Banner />
          </>
  );
}

export default App;
