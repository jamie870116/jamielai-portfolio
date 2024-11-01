import React from 'react';
import { FaLaravel, FaPhp, FaJsSquare, FaVuejs, FaReact } from 'react-icons/fa';
import { SiMysql, SiJquery, SiBootstrap, SiSwift, SiOpenai, SiNginx, SiDjango } from 'react-icons/si';

import ShangdaImg from '../assets/Shangda.jpg';
import indoorImg from '../assets/indoor.png';
import AgentUTestImg from '../assets/AgentUTest.png';
import waninImg from '../assets/wanin.png';
import '../css/Projects.css';

const projects = [
    {
        title: 'Indoor Navigation with AR for Emergencies',
        subtitle: 'Apr 2024 - Jun 2024',
        description: `Developed an AR iOS app using Swift, ARKit, and CoreML to assist with indoor navigation during emergencies. Utilized device sensors for obstacle detection and synced with cloud databases for floor plans.`,
        image: indoorImg,
        github: 'https://github.com/jamie870116/CS291I-Spr24-Final-Project',
        skills: [<SiSwift />]
    },
    {
        title: 'AgentUTest',
        subtitle: 'Feb 2024 - Mar 2024',
        description: `Built an automated testing tool supporting multiple languages with agent-driven mechanisms. Integrated GPT-4 for test case generation and developed a dynamic visualization interface.`,
        image: AgentUTestImg,
        github: 'https://github.com/jamie870116/CS272',
        skills: [<SiOpenai />, <FaReact />, <SiDjango />, <FaJsSquare />]
    },
    {
        title: 'Library Book Donation Management System',
        subtitle: 'Mar 2020 - Dec 2020',
        description: `Created a responsive website and management system that reduced data input time by 70%. Used PHP Laravel for the backend and jQuery with Bootstrap for the frontend.`,
        image: waninImg,
        github: 'https://github.com/jamie870116/waninlibary',
        skills: [<FaPhp />, <FaLaravel />, <SiMysql />, <FaJsSquare />, <SiJquery />, <SiBootstrap />]
    },
    {
        title: 'Manufacturing Information Management System',
        subtitle: 'Jun 2020 - Feb 2021',
        description: `Developed a system to manage customer info, procurement, and inventory, increasing data input efficiency by 50% and eliminating human errors. Built with PHP Laravel (backend), MySQL, and Vue.js (frontend).`,
        image: ShangdaImg,
        github: 'https://github.com/jamie870116/shangda',
        skills: [<FaPhp />, <FaLaravel />, <SiMysql />, <FaJsSquare />, <FaVuejs />, <SiNginx />]
    },

];


const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Some Things I've Built</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            {project.subtitle && <h4>{project.subtitle}</h4>}
                            <p>{project.description}</p>
                            <div className="project-skills">
                                {project.skills.map((skill, i) => (
                                    <span key={i}>{skill}</span>
                                ))}
                            </div>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                Take a look
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
