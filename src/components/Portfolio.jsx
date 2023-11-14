// Portfolio.jsx
import React from 'react';
import Project from './Project'; // Import the Project component

function Portfolio() {
  const projectData = [
    {
      title: "FitHub",
      deployLink: "https://fithub-app-b325b32b5ea7.herokuapp.com/https://fithub-app-b325b32b5ea7.herokuapp.com/",
      githubLink: "https://github.com/Eric-K-Smyth/FitHub",
      image: "/fithub.png",
    },
    {
      title: "Furniture Flip",
      deployLink: "https://furniture-flip-fa10e6e071c1.herokuapp.com/",
      githubLink: "https://github.com/queendoescode/furniture-flip",
      image: "/furnitureflippic.png",
    },
    {
      title: "Sing-Along",
      deployLink: "https://eric-k-smyth.github.io/sing-along/",
      githubLink: "https://github.com/Eric-K-Smyth/sing-along",
      image: "/SingAlongPic.jpg",
    },
    {
      title: "J.A.T.E",
      deployLink: "https://afternoon-sands-93926-721a852618c6.herokuapp.com/",
      githubLink: "https://github.com/Eric-K-Smyth/project19-pwatexteditor",
      image: "/jatePic.png",
    },
    {
      title: "Password Generator",
      deployLink: "https://eric-k-smyth.github.io/Project3-PasswordGen/",
      githubLink: "https://github.com/Eric-K-Smyth/Project3-PasswordGen",
      image: "/passwordpic.png",
    },
    {
      title: "The Coding Quiz",
      deployLink: "https://eric-k-smyth.github.io/project4-quiz/",
      githubLink: "https://github.com/Eric-K-Smyth/project4-quiz",
      image: "/CodingQuizPic.png",
    },
    {
      title: "Daily Planner",
      deployLink: "https://eric-k-smyth.github.io/project5-planner/",
      githubLink: "https://github.com/Eric-K-Smyth/project5-planner",
      image: "/ProjectPlannerPic.png",
    },
    {
      title: "Weather App",
      deployLink: "https://eric-k-smyth.github.io/project6-weather/",
      githubLink: "https://github.com/Eric-K-Smyth/project6-weather",
      image: "/WeatherPic.png",
    },
    
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
              <Project
                title={project.title}
                deployLink={project.deployLink}
                githubLink={project.githubLink}
                image={project.image}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
