/*
 * File Name: project.jsx
 * Student's Name: Arvin Estella
 * StudentID: 301396938
 * Date: 2024-05-26
 */

import './projects.css';

/**
 * Array of projects with their details
 */
const projects = [
  {
    title: 'Calculator',
    description: 'A calculator I made using C# and Windows Forms.',
    image: 'calc.gif', // Ensure these paths are correct
  },
  {
    title: 'Gaming Ecommerce Website',
    description: 'Ecommerce website that focuses on game consoles.',
    image: 'gameweb.gif',
  },
  {
    title: 'Dog Images API',
    description: 'Fetches images of dog breeds from an API.',
    image: 'doggo.gif',
  },
];

/**
 * Projects Component
 * Displays a list of projects with their details and a popup view on hover.
 */
const Projects = () => {
  return (
    <div className='projectpage'>
      <div className="projects">
        {/* Header */}
        <h1>My Projects</h1>
        
        {/* Project List */}
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              {/* Project Image */}
              <img src={project.image} alt={project.title} />
              
              {/* Project Content */}
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href="#" className="btn">Learn More</a>
              </div>
              
              {/* Project Popup */}
              <div className="project-popup">
                <img src={project.image} alt={project.title} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
