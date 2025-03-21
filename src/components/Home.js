import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Smooth scroll
import "./Home.css";
import madanImage from "../assets/images/NIS_6067-Photoroomm.png";

function Home() {
  const roles = useMemo(() => ["Developer", "Designer"], []); 
  const [role, setRole] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false); // State for mobile menu
  const location = useLocation(); // Get current page URL

  // Typing Effect Logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!reverse && subIndex < roles[index].length) {
        setSubIndex((prev) => prev + 1);
      } else if (reverse && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (!reverse && subIndex === roles[index].length) {
        setReverse(true);
        setTimeout(() => {}, 1000);
      } else {
        setReverse(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
      setRole(roles[index].substring(0, subIndex));
    }, reverse ? 100 : 200); // Typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles]);

  // Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling on mobile
  const handleScrollToSection = (sectionId) => {
    setMenuActive(false); // Close the mobile menu
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Small delay to ensure the menu closes before scrolling
  };

  return (
    <div className="Home">
      {/* Navbar */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Ⲙ ᴀ ᴅ ᴀ ɴ ツ</div>
        <nav>
          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={() => setMenuActive(!menuActive)}>
            ☰
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <Link
                to="/"
                onClick={() => {
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMenuActive(false); // Close menu on click
                }}
              >
                Home
              </Link>
            </li>
            <li>
              {location.pathname === "/" ? (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleScrollToSection("about")} // Use custom scroll function
                >
                  About
                </ScrollLink>
              ) : (
                <Link to="/#about" onClick={() => setMenuActive(false)}>
                  About
                </Link>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleScrollToSection("skills")} // Use custom scroll function
                >
                  Skills
                </ScrollLink>
              ) : (
                <Link to="/#skills" onClick={() => setMenuActive(false)}>
                  Skills
                </Link>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleScrollToSection("projects")} // Use custom scroll function
                >
                  Projects
                </ScrollLink>
              ) : (
                <Link to="/#projects" onClick={() => setMenuActive(false)}>
                  Projects
                </Link>
              )}
            </li>
            <li>
              {location.pathname === "/" ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleScrollToSection("contact")} // Use custom scroll function
                >
                  Contact
                </ScrollLink>
              ) : (
                <Link to="/#contact" onClick={() => setMenuActive(false)}>
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="left-side">
          <h1>HEY! I'M M&#x61;dan</h1>
          <h2>
            I'M A <span className="typing-effect">{role}</span>
          </h2>
          <p>AI & ML Enthusiast | Digital Marketing Specialist</p>
          <a href="madan.pdf" download>
            <button className="view-resume-btn">View Resume</button>
          </a>
        </div>

        <div className="right-side">
          <img src={madanImage} alt="Madan" />
        </div>
      </section>
    </div>
  );
}

export default Home;
