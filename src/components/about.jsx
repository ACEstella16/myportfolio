/*
 * File Name: about.jsx
 * Student's Name: Arvin Estella
 * StudentID: 301396938
 * Date: 2024-05-26
 */

import './about.css';
import resume from '../assets/AEResume.pdf'; // Adjust the path based on your directory structure

/**
 * About Component
 * Displays information about the student and provides options to download or view the resume.
 */
const About = () => {
  return (
    <div className='aboutpage'>
      <div className="about">
        <img src="me.JPEG" alt="Arvin Estella" className="profile-pic" />
        <p>
          My name is Arvin Christian D. Estella. I am from the Philippines and I am currently in the third semester of Software Engineering Technology
          at Centennial College. I usually read books, sleep, travel, and most importantly soul searching.
        </p>
        <div className='button-container'>
          <a href={resume} className="btn" download>Download Resume</a>
          <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">Open Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
