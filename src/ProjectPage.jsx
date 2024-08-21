import React from 'react';
import './ProjectPage.css';
import p1 from './images/AppName.png'

const projects = [
  {
    title: 'Bec College APP',
    description: 'To check semester marks,calculate internal and attendence to pass semester',
    image: p1, // Add the actual link to the project image
    link: 'https://github.com/RamuAnanth/BEC-student-app'  // Add the actual link to the project
  },
  {
    title: 'Shooping mart',
    description: 'Under processing',
    image: 'link-to-image-2',
    link: 'link-to-project-2'
  },
  // Add more projects as needed
];

export default function ProjectPage() {
  return (
    <div className="project-page">
      <h1 className="title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}
