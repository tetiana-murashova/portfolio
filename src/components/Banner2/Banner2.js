import React from 'react';
import './Banner2.css'


const Banner2 = () => {



    return (
            <div className="header">
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
                            <a href="mailto:murashovatania1@gmail.com" className="social-link">
                                <button>Contact Me</button>
                            </a>
                            <a href="./my_resume.pdf" download>
                                <button>Download CV</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner2;
