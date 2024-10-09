import React from 'react';
import { FaLinkedin, FaGithub, FaRegCopyright } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Designed and Developed by Jamie</p>
            </div>

            <div className="footer-center">
                <span>Copyright</span> <FaRegCopyright /> <span>2024</span>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/chiehying-lai/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/jamie870116" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>

            <button className="top-button" onClick={scrollToTop}>↑</button>
        </footer>
    );
};

export default Footer;
