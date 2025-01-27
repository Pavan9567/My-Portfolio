import React from 'react';
import '../styles/Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.demo_link} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
