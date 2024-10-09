import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#resume">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
