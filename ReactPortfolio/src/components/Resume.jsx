// Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      <p>
        Welcome to my resume section. You can download my resume below, and I'll also list some of my skills and proficiencies.
      </p>
      <a
        href="./assets/UpdatedResume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        Download Resume
      </a>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

export default Resume;
