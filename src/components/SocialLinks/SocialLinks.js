import React from 'react';
import './SocialLinks.css'


const SocialLinks = () => {
    return(
        <div>
            <a href="./my_resume.pdf" download>
                <div className="main-banner__button">
                    <i className="fas fa-download"></i> download cv
                </div>
            </a>

            <ul className="main-banner__social-icons-list">
                <li>
                    <a href="https://www.facebook.com/murashova.tania?ref=bookmarks" className="social-link">
                        <i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tetiana-murashova-8b33aa16b/" className="social-link">
                        <i className="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="mailto:murashovatania1@gmail.com" className="social-link">
                        <i className="fas fa-at"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks;
