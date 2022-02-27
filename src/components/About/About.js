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
            <h3>Full stack Web Developer with primary focused on ReactJS and NodeJS</h3>

                {/*<a href="./my_resume.pdf" download><h4>Download my resume</h4></a>*/}

                <Link to="/files/my_resume.pdf" target="_blank" download>
                    <h4>Download CV</h4>
                </Link>

            <div className="about-container">
                <div className="skills-container">
                    <div className="skills-left">
                        <p>ReactJS</p>
                        <p>NodeJS</p>
                        <p>GraphQL</p>
                        <p>Git/Github</p>
                        <p>Cypress</p>
                   
                    </div>
                    <div className="skills-right">
                        <p>HTML/CSS</p>
                        <p>MaterialUI</p>
                        <p>Bootstrap</p>
                        <p>SQL</p>
                        <p>Git</p>

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
