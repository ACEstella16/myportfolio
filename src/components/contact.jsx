/*
 * File Name: contact.jsx
 * Student's Name: Arvin Estella
 * StudentID: 301396938
 * Date: 2024-05-26
 */

import { useState } from 'react';
import './contact.css';

/**
 * Contact Component
 * Provides a form for users to fill out and send a message.
 */
const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  /**
   * Handle input change
   * Updates the formData state when an input field changes.
   * @param {Object} e - The event object.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Handle form submission
   * Handles the form submission event.
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Redirect to home page or display a success message
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ '--i': 1 }}
        />
        {/* Last Name Input */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ '--i': 2 }}
        />
        {/* Contact Number Input */}
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          style={{ '--i': 3 }}
        />
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ '--i': 4 }}
        />
        {/* Message Textarea */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ '--i': 5 }}
        ></textarea>
        {/* Submit Button */}
        <button type="submit" style={{ '--i': 6 }}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
