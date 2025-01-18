import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Cursor from './Cursor';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [role, setRole] = useState('Developer');
  const [scrolled, setScrolled] = useState(false);
  const aboutRef = useRef(null);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Role switching
  useEffect(() => {
    const roles = ['Developer', 'Designer'];
    const interval = setInterval(() => {
      setRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0]));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Cursor />
      <Header scrolled={scrolled} />
      <Home role={role} />
      <About ref={aboutRef} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
