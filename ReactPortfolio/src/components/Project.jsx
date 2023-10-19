// Project.jsx
import React from 'react';

function Project({ title, deployLink, githubLink, image }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          View App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
