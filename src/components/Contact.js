import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Importing the WhatsApp icon
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-heading">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-description">
        <p>Feel free to reach out to me through any of the channels below:</p>
      </div>

      <div className="contact-info">
        
        <div className="contact-item-social-icons">
          <h3>Social Media</h3>
          <div className="social-icons-list">
            <a href="https://www.instagram.com/madanshaiva06" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.linkedin.com/in/madan-k-188078282" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/Madanshaiva" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
            {/* Adding WhatsApp icon */}
            <a href="https://wa.me/7975680455" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={40} />
            </a>
          </div>
        </div>

        <div className="contact-item-phone">
          <h3>Phone Number</h3>
          <p>+91 7975680455</p>
        </div>
        <div className="contact-item-email">
          <h3>Email</h3>
          <p><a href="mailto:madanshaivackm06@gmail.com">madanshaivackm06@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
