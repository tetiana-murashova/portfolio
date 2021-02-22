import React from 'react';
import './Banner2.css'

import SocialLinks from "../SocialLinks/SocialLinks";
const Banner2 = () => {



    return (
        <>
            <header className="header">
                <div className="img-wrapper">
                    <img src={require("./workplace-2303851_1920.jpg")} alt="banner"/>
                </div>
                <div className="screen">
                    <div className="my-photo"></div>
                    <div className="banner">
                        <h1>Tetiana Murashova</h1>
                        <p>Web Developer</p>
                        <p>An experienced web developer with a passion for
                            programming and analytics. A proven ability to
                            create a range of different websites based on
                            requirements and user experience.</p>
                        <div className="buttons">
                        <button>Contact Me</button>
                            <a href="./my_resume.pdf" download>
                            <button>Download CV</button>
                            </a>

                        </div>
                    </div>

                </div>

            </header>

            </>
    );
};

export default Banner2;
