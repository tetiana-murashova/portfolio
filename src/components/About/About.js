import React from 'react';
import './About.css'
import SocialLinks from "../SocialLinks/SocialLinks";

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const About = () => {

    return (
        <Router>
        <div className='wrapper'>
            <div className="wrapper-about-container">
            <h2>About Me</h2>
            <div className="underline"></div>
            <h3>Front End Developer with primary focused on React</h3>

                {/*<a href="./my_resume.pdf" download><h4>Download my resume</h4></a>*/}

                <Link to="/files/my_resume.pdf" target="_blank" download>
                    <h4>Download CV</h4>
                </Link>

            <div className="about-container">
                <div className="skills-container">
                    <div className="skills-left">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Bootstrap</p>
                        <p>SASS</p>
                        <p>JavaScript</p>
                        <p>React</p>

                        <p>Browser <br />
                            development tools</p>
                    </div>
                    <div className="skills-right">
                        <p>jQuery</p>
                        <p>SQL</p>
                        <p>PHP</p>
                        <p>WordPress</p>
                        <p>Git</p>

                        <p>Adobe Design & <br />
                            Dreamweaver</p>

                    </div>
                </div>
                <div className="social-link-container">

                  <SocialLinks />
                  <h3>Find me on social network</h3>
                </div>
            </div>
            </div>

        </div>
        </Router>
);
};

export default About;
