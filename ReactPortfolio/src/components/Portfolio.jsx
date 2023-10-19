// Portfolio.jsx
import React from 'react';
import Project from './Project'; // Import the Project component

function Portfolio() {
  const projectData = [
    {
      title: "Project 1",
      deployLink: "https://project1-url.com",
      githubLink: "https://github.com/yourusername/project1",
      image: "project1-image.jpg",
    },
    {
      title: "Project 2",
      deployLink: "https://project2-url.com",
      githubLink: "https://github.com/yourusername/project2",
      image: "project2-image.jpg",
    },
    // Add more project data as needed
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <Project
              title={project.title}
              deployLink={project.deployLink}
              githubLink={project.githubLink}
              image={project.image}
            />
            <button>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
