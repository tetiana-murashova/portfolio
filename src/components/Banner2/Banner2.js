import React from 'react';
import './Banner2.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


const Banner2 = () => {



    return (
        <Router>
            <div className="header">
                <div className="img-wrapper">
                    <img src={require("./workplace-2303851_1920.jpg")} alt="banner"/>
                </div>
                <div className="screen">
                    <div className="my-photo"></div>
                    <div className="banner">
                        <h1>Tetiana Murashova</h1>
                        <p>Web Developer</p>
                        <p>Full stack Web Developer with primary
                            focused on ReactJS and NodeJS. A proven
                            ability to create a range of different websites
                            and apps based on requirements and user
                            experience.</p>
                        <div className="buttons">
                            <a href="mailto:murashovatania1@gmail.com" className="social-link">
                                <button>Contact Me</button>
                            </a>

                            <Link to="/files/my_resume.pdf" target="_blank" download>
                                <button>Download CV</button>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
            </Router>
    );
};

export default Banner2;
