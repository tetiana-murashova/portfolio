import React from 'react';
import './App.css';

import Portfolio from "../Portfolio/Portfolio";
import Banner2 from "../Banner2/Banner2";
import About from "../About/About";
import Feedback from "../Feedback/Feedback";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";





function NavLogo() {
  return(
      <a href="#">
        <div className="element--logo">
          <img className="logo__yellow" src={require("./LogoRed.png")} alt="logo__yellow" />
          {/*<img className="logo__red" src={require("./LogoRed.png")} alt="logo__red" />*/}
          {/*<img className="logo__green" src={require("./LogoGreen.png")} alt="logo__green" />*/}
          <h5>Tetiana Murashova</h5>
        </div>
      </a>
  )
}

function App() {
  return (
      <Router>
      <div className="navigation--wrapper">
        <div className="navigation">
          <NavLogo />
          <div className="menu-wrapper">
            <div className="menu">
              <div className="open">Menu</div>
              <div className="line"></div>
              <div className="nav-menu">
                  <a href='#contacts' className="menu-link">Contact me</a>
                  <a href='#portfolio' className="menu-link">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>


          <Banner2 />
          <About />


          <Portfolio id='portfolio' />

          <Feedback />

          <div id='contacts'>
             <Contacts />
          </div>

          <Footer />



          {/*<Switch>*/}
          {/*    <Route path="/portfolio">*/}
          {/*        <Portfolio />*/}
          {/*    </Route>*/}
          {/*    <Route path="/contacts">*/}
          {/*        <Contacts />*/}
          {/*    </Route>*/}

          {/*</Switch>*/}


          </Router>
  );
}

export default App;
