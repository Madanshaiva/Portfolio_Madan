import React, { useState, useEffect } from 'react';
import './Home.css';
import madanImage from '../assets/images/NIS_6067-Photoroomm.png'; // Corrected image path
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons
import Cursor from '../Cursor'; // Importing the Cursor component

function Home() {
  const [role, setRole] = useState('Developer');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect interval
  useEffect(() => {
    const roles = ['Developer', 'Designer'];
    const interval = setInterval(() => {
      setRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0]));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Home">
      <Cursor />

      <div className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Ⲙ ᴀ ᴅ ᴀ ɴ ツ</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="intro-section">
        <div className="left-side">
          <h1>HAY! I'M MADAN</h1>
          <h2>
            I'M A <span className="typing-effect">{role}</span>
          </h2>
          <p>AI & ML Enthusiast | Digital Marketing Specialist</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="view-resume-btn">View Resume</button>
          </a>

          {/* Get in Touch Section */}
          <div className="get-in-touch">
            <button className="get-in-touch-btn">GET IN TOUCH {'>'}</button>
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={madanImage} alt="Madan" />
        </div>
      </div>
    </div>
  );
}

export default Home;
