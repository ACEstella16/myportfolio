/*
 * File Name: services.jsx
 * Student's Name: Arvin Estella
 * StudentID: 301396938
 * Date: 2024-05-26
 */

import './services.css';

/**
 * Array of services with their details
 */
const services = [
  { name: 'Web Development', image: 'webdev.gif' }, 
  { name: 'Mobile Apps', image: 'mobapp.gif' },
  { name: 'General Programming', image: 'genprog.gif' },
];

/**
 * Services Component
 * Displays a list of services with images and names.
 */
const Services = () => {
  return (
    <div className='servicepage'>
      <div className="services">
        {/* Header */}
        <h1>My Services</h1>
        
        {/* Service List */}
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              {/* Service Image */}
              <img src={service.image} alt={service.name} />
              
              {/* Service Name */}
              <h2>{service.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
