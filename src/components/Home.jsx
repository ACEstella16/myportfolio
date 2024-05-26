/*
 * File Name: Home.jsx
 * Student's Name: Arvin Estella
 * StudentID: 301396938
 * Date: 2024-05-26
 */

import { Link } from 'react-router-dom';
import './home.css';

/**
 * Home Component
 * Displays the home page with a welcome message, mission statement, and a link to the about page.
 */
const Home = () => {
  return (
    <div className='homepage'>
      <div className="home container">
        {/* Header */}
        <h1>Welcome to My Portfolio</h1>

        {/* Welcome Image */}
        <img src="welcome.gif" alt="welcome" className='welcome' />

        {/* Mission Statement */}
        <p className="mission-statement">
          Driven by a passion for technology and innovation, I strive to create elegant and efficient software solutions that make a positive impact on people&apos;s lives. My mission is to continuously learn, grow, and apply my skills to build user-friendly and reliable applications that solve real-world problems. With a commitment to excellence and a focus on collaboration, I aim to contribute to the success of forward-thinking projects and organizations.
        </p>

        {/* Link to About Page */}
        <Link to="/about" className="btn">Click me for an awesome surprise</Link>
      </div>
    </div>
  );
};

export default Home;
