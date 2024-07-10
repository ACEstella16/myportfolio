/*
 * File Name: navbar.jsx
 * Student's Name: Arvin Estella
 * StudentID: 301396938
 * Date: 2024-05-26
 */

import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS file

/**
 * Navbar Component
 * Renders the navigation bar with links to different sections of the site.
 */
export default function Navbar() {
  return (
    <>
      <nav>
        {/* Logo */}
        <img src="logo.png" alt="logo" className="logo" />
        
        {/* Navigation Links */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link> 
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </>
  );
}
