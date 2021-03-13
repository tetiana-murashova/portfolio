import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer__block">
            <div className="copyright-text">
                <p>Copyright &copy; 2021 Tetiana Murashova. All Rights Reserved</p>
            </div>

            <div className="footer__text">
                <p>Made With <i className="fas fa-heart"></i> by <span>Tetiana Murashova</span></p>
            </div>
        </div>
    );
};

export default Footer;
