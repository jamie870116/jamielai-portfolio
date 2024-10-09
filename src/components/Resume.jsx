import React from 'react';
import { FaGamepad, FaPlane, FaPython, FaReact, FaAws, FaLinux, FaGit } from 'react-icons/fa';
import { MdAddAPhoto } from "react-icons/md";
import { SiJavascript, SiCplusplus, SiDjango, SiPytorch, SiSwift } from 'react-icons/si';
import computerImg from '../assets/computer.001.png';
import '../css/Resume.css';
import myResume from '../assets/myResume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="about_section">
            <div className="resume-content">
                <div className="about-text">
                    <h2>Know Who I Am</h2>
                    <p>Hi everyone, I'm Jamie Lai. I’m currently pursuing my M.S. in Computer Science at UC Santa Barbara. I have a passion for developing scalable applications and solving challenging problems, with expertise in Python, ReactJS, and cloud services like AWS.</p>
                    <p>Apart from coding, some activities I enjoy:</p>
                    <ul className="activities">
                        <li><FaGamepad /> Playing Games</li>
                        <li><MdAddAPhoto /> Photography</li>
                        <li><FaPlane /> Traveling</li>
                    </ul>
                    <a href={myResume} download className="download-btn">
                        Download My Resume
                    </a>
                </div>

                <div className="about-image">
                    <img src={computerImg} alt="Illustration" />
                </div>
            </div>

            <div className="tech-stack">
                <h2>My Skill sets</h2>

                <div className="tech-category">
                    <h4>Programming Languages</h4>
                    <div className="tech-icons">
                        <SiJavascript title="JavaScript" />
                        <FaPython title="Python" />
                        <SiCplusplus title="C++" />
                        <SiSwift title="Swift" />
                    </div>
                </div>

                <div className="tech-category">
                    <h4>Frameworks & Libraries</h4>
                    <div className="tech-icons">
                        <FaReact title="ReactJS" />
                        <SiDjango title="Django" />
                        <SiPytorch title="PyTorch" />
                    </div>
                </div>

                <div className="tech-category">
                    <h4>Tools & Platforms</h4>
                    <div className="tech-icons">
                        <FaAws title="AWS" />
                        <FaLinux title="Linux" />
                        <FaGit title="Git" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Resume;
