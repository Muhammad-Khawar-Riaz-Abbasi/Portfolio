import React from 'react';
import './project.css'; // Custom CSS for the component

// Importing project images from the assets folder
import projectOneImage from '../assets/foody.png'; // Adjust the path if needed
import projectTwoImage from '../assets/smartquery.png'; // Adjust the path if needed

const Project = () => {
  const projects = [
    {
      title: 'Foody',
      description: 'A comprehensive food ordering platform with user-friendly design and real-time tracking.',
      image: projectOneImage, // Use imported image
      githubLink: 'https://muhammad-khawar-riaz-abbasi.github.io/Foody/',
      pinterestLink: 'https://pin.it/4nT62bfGA', // Example link
    },
    {
      title: 'SmartQuery',
      description: 'An intelligent query management system that simplifies complex operations for businesses.',
      image: projectTwoImage, // Use imported image
      githubLink: 'https://github.com/username/project-two',
      pinterestLink: 'https://pin.it/6zNhZyvMC', // Example link
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        Here are some of the projects I have worked on. Feel free to explore the details and check out the code!
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
              <a
                href={project.pinterestLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pinterest-link"
              >
                View on Pinterest
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;


