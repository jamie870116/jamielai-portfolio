import React from 'react';
import '../css/Intro.css';
import myPhoto from '../assets/me.jpeg'

const Intro = () => {
    return (
        <section id="intro" className="section">
            <div className="intro-container">
                <div className="intro-text">
                    <h1>Hi there!</h1>
                    <h1>This is Jamie.</h1>
                    <p className="small-text">I code.</p>

                </div>
                <div className="intro-photo-container">
                    <img src={myPhoto} alt="Your Photo" className="intro-photo" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
