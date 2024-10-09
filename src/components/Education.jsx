import React from 'react';
import '../css/Education.css';

const Education = () => {
    return (
        <section id="education" className="section">
            <h2 className="timeline-title">Education</h2>
            <div className="timeline">
                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3>University of California, Santa Barbara</h3>
                        <p><strong>M.S. in Computer Science</strong></p>
                        <p className="years">Sep 2023 - Present</p>
                        <p>GPA: 3.75 / 4.0</p>

                    </div>
                </div>

                <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3>National Chung Hsing University</h3>
                        <p><strong>MBA in Management Information Systems</strong></p>
                        <p className="years">Sep 2020 - Jun 2022</p>
                        <p>GPA: 4.12 / 4.3</p>

                    </div>
                </div>

                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3>National Taichung University of Science and Technology</h3>
                        <p><strong>Bachelor's in Information Management</strong></p>
                        <p className="years">Sep 2018 - Jun 2020</p>
                        <p>GPA: 3.99 / 4.0</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
