import React from "react";
import "./Skills.css";

const skills = [
  "React.js",
  "HTML",
  "CSS",
  "JavaScript",
  "C & C++",
  "PHP",
  "MongoDB",
  "Digital Marketing",
  "Prompt Engineering",
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            className="skill fade-in"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="skill-name">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
