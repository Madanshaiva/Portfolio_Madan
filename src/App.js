import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cursor from "./Cursor";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div id="about">
                <About />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="projects">
                <Projects />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
