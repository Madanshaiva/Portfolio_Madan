import React, { useState } from 'react';
import './Projects.css';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
import s5 from '../assets/images/s5.png';
import s6 from '../assets/images/s6.png';
import s7 from '../assets/images/s7.png';
import s8 from '../assets/images/s8.png';
import s9 from '../assets/images/s9.png';
import s10 from '../assets/images/s10.png';
import s11 from '../assets/images/s11.png';
import a1 from '../assets/images/a1.png';
import a2 from '../assets/images/a2.png';
import a3 from '../assets/images/a3.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Smart Order Management System",
      mainImage: s1,
      description: [
        "A system designed to simplify food ordering in restaurants using QR codes.",
        "Built with React for the frontend and Node.js for the backend.",
      ],
      images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11],
    },
    {
      title: "Amazon Clone Website",
      mainImage: a1,
      description: [
        "A clone of Amazon with product listing, cart system, and checkout functionality.",
        "Built using React for the frontend and Firebase for backend services.",
      ],
      images: [a1, a2, a3],
    },
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <h3>{project.title}</h3>
            <img src={project.mainImage} alt={project.title} className="project-thumbnail" />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <h3>{selectedProject.title}</h3>
            <div className="project-description">
              {selectedProject.description.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <div className="main-image-container">
              <img src={selectedProject.images[currentImageIndex]} alt="Project Screenshot" className="main-image" />
              <button className="nav-button prev-button" onClick={handlePrevImage}>&larr;</button>
              <button className="nav-button next-button" onClick={handleNextImage}>&rarr;</button>
            </div>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
